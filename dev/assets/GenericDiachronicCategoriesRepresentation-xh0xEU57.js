import { T as TouchPan, Q as QPopupEdit } from "./QSlider-CQOqkv49.js";
import { c as createComponent, E as useDarkProps, n as getCurrentInstance, F as useDark, r as ref, b as computed, x as watch, aj as nextTick, h, C as hSlot, a6 as hDir, e as hMergeSlot, M as defineComponent, bE as mergeModels, bF as useModel, _ as _export_sfc, X as createElementBlock, R as openBlock, aa as createBaseVNode, Y as createVNode, aW as renderSlot, ae as normalizeClass, a3 as withModifiers, a8 as QIcon, O as useInterfaceStore, N as useProjectStore, bG as useRouter, af as resolveComponent, V as createCommentVNode, U as withCtx, Z as Fragment, $ as renderList, P as createBlock, ag as normalizeStyle, a1 as createTextVNode, a2 as toDisplayString, Q as QBtn, be as QInput, ar as withKeys } from "./index-zU2rftsz.js";
import { Q as QSpace } from "./QSpace-CwPbzNKY.js";
import { D as DropZone, a as DragElement, C as ColorizeIcon } from "./DropZone-DF7OQInd.js";
import { E as ElementMenu } from "./ElementMenu-BtOgsUOR.js";
import { Q as QMenu } from "./format--PxEkPap.js";
import { g as groupBy } from "./util-D0WanoNV.js";
const QSplitter = createComponent({
  name: "QSplitter",
  props: {
    ...useDarkProps,
    modelValue: {
      type: Number,
      required: true
    },
    reverse: Boolean,
    unit: {
      type: String,
      default: "%",
      validator: (v) => ["%", "px"].includes(v)
    },
    limits: {
      type: Array,
      validator: (v) => {
        if (v.length !== 2) return false;
        if (typeof v[0] !== "number" || typeof v[1] !== "number") return false;
        return v[0] >= 0 && v[0] <= v[1];
      }
    },
    emitImmediately: Boolean,
    horizontal: Boolean,
    disable: Boolean,
    beforeClass: [Array, String, Object],
    afterClass: [Array, String, Object],
    separatorClass: [Array, String, Object],
    separatorStyle: [Array, String, Object]
  },
  emits: ["update:modelValue"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const rootRef = ref(null);
    const sideRefs = {
      before: ref(null),
      after: ref(null)
    };
    const classes = computed(
      () => `q-splitter no-wrap ${props.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${props.disable === true ? "disabled" : "workable"}` + (isDark.value === true ? " q-splitter--dark" : "")
    );
    const propName = computed(() => props.horizontal === true ? "height" : "width");
    const side = computed(() => props.reverse !== true ? "before" : "after");
    const computedLimits = computed(() => props.limits !== void 0 ? props.limits : props.unit === "%" ? [10, 90] : [50, Infinity]);
    function getCSSValue(value) {
      return (props.unit === "%" ? value : Math.round(value)) + props.unit;
    }
    const styles = computed(() => ({
      [side.value]: {
        [propName.value]: getCSSValue(props.modelValue)
      }
    }));
    let __dir, __maxValue, __value, __multiplier, __normalized;
    function pan(evt) {
      if (evt.isFirst === true) {
        const size = rootRef.value.getBoundingClientRect()[propName.value];
        __dir = props.horizontal === true ? "up" : "left";
        __maxValue = props.unit === "%" ? 100 : size;
        __value = Math.min(__maxValue, computedLimits.value[1], Math.max(computedLimits.value[0], props.modelValue));
        __multiplier = (props.reverse !== true ? 1 : -1) * (props.horizontal === true ? 1 : $q.lang.rtl === true ? -1 : 1) * (props.unit === "%" ? size === 0 ? 0 : 100 / size : 1);
        rootRef.value.classList.add("q-splitter--active");
        return;
      }
      if (evt.isFinal === true) {
        if (__normalized !== props.modelValue) {
          emit("update:modelValue", __normalized);
        }
        rootRef.value.classList.remove("q-splitter--active");
        return;
      }
      const val = __value + __multiplier * (evt.direction === __dir ? -1 : 1) * evt.distance[props.horizontal === true ? "y" : "x"];
      __normalized = Math.min(__maxValue, computedLimits.value[1], Math.max(computedLimits.value[0], val));
      sideRefs[side.value].value.style[propName.value] = getCSSValue(__normalized);
      if (props.emitImmediately === true && props.modelValue !== __normalized) {
        emit("update:modelValue", __normalized);
      }
    }
    const sepDirective = computed(() => {
      return [[
        TouchPan,
        pan,
        void 0,
        {
          [props.horizontal === true ? "vertical" : "horizontal"]: true,
          prevent: true,
          stop: true,
          mouse: true,
          mouseAllDir: true
        }
      ]];
    });
    function normalize(val, limits) {
      if (val < limits[0]) {
        emit("update:modelValue", limits[0]);
      } else if (val > limits[1]) {
        emit("update:modelValue", limits[1]);
      }
    }
    watch(() => props.modelValue, (v) => {
      normalize(v, computedLimits.value);
    });
    watch(() => props.limits, () => {
      nextTick(() => {
        normalize(props.modelValue, computedLimits.value);
      });
    });
    return () => {
      const child = [
        h("div", {
          ref: sideRefs.before,
          class: [
            "q-splitter__panel q-splitter__before" + (props.reverse === true ? " col" : ""),
            props.beforeClass
          ],
          style: styles.value.before
        }, hSlot(slots.before)),
        h("div", {
          class: [
            "q-splitter__separator",
            props.separatorClass
          ],
          style: props.separatorStyle,
          "aria-disabled": props.disable === true ? "true" : void 0
        }, [
          hDir(
            "div",
            { class: "q-splitter__separator-area absolute-full" },
            hSlot(slots.separator),
            "sep",
            props.disable !== true,
            () => sepDirective.value
          )
        ]),
        h("div", {
          ref: sideRefs.after,
          class: [
            "q-splitter__panel q-splitter__after" + (props.reverse === true ? "" : " col"),
            props.afterClass
          ],
          style: styles.value.after
        }, hSlot(slots.after))
      ];
      return h("div", {
        class: classes.value,
        ref: rootRef
      }, hMergeSlot(slots.default, child));
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CustomExpansionItem",
  props: /* @__PURE__ */ mergeModels({
    expandIcon: { default: "mdi-plus" },
    expandedIcon: { default: "mdi-minus" },
    expandIconClass: { default: "" }
  }, {
    "modelValue": { default: true },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const isExpanded = useModel(__props, "modelValue");
    const itemClass = computed(() => {
      return isExpanded.value ? "expansion-item column expanded" : "expansion-item column collapsed";
    });
    const __returned__ = { isExpanded, itemClass };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = { class: "expansion-header row items-center" };
const _hoisted_2$3 = { class: "expansion-body" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.itemClass)
  }, [
    createBaseVNode("div", _hoisted_1$3, [
      createVNode(QIcon, {
        class: normalizeClass(["expansion-icon", $props.expandIconClass]),
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $setup.isExpanded = !$setup.isExpanded, ["stop"])),
        name: $setup.isExpanded ? $props.expandedIcon : $props.expandIcon
      }, null, 8, ["class", "name"]),
      renderSlot(_ctx.$slots, "header", {}, void 0, true)
    ]),
    createBaseVNode("div", _hoisted_2$3, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ], 2);
}
const CustomExpansionItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-e7755e11"], ["__file", "CustomExpansionItem.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GenericDiachronicCategoryRepresentation",
  props: {
    categoryId: {},
    currentInterviewId: { default: "" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const istore = useInterfaceStore();
    const store = useProjectStore();
    const props = __props;
    const popupEdit = ref(null);
    const router = useRouter();
    const genericdiachroniccategory = computed(() => store.getGenericDiachronicCategory(props.categoryId));
    function debug() {
      window.genericdiachroniccategory = genericdiachroniccategory.value;
      console.log("genericdiachroniccategory", genericdiachroniccategory.value);
    }
    const moments = computed(() => {
      return genericdiachroniccategory.value?.moments ?? [];
    });
    const currentMoments = computed(() => moments.value?.filter((m) => m.interviewId === props.currentInterviewId) || []);
    const genericcategoryName = computed({
      get() {
        return genericdiachroniccategory.value ? genericdiachroniccategory.value.name : "";
      },
      set(value) {
        store.updateElement(genericdiachroniccategory.value, { name: value });
      }
    });
    const categoryColor = computed({
      get() {
        return genericdiachroniccategory.value?.color ?? "";
      },
      set(color) {
        store.updateElement(genericdiachroniccategory.value, { color });
      }
    });
    const currentInterviewMomentsLabel = computed(() => {
      const count = currentMoments.value.length;
      if (count) {
        return `Present in ${count} moments in the current interview`;
      } else {
        return "Not present in the current interview";
      }
    });
    const momentsLabel = computed(() => {
      let output = "";
      const count = moments.value.length;
      if (count) {
        output = `Present in ${count} moments`;
      } else {
        output = "Not present in any interview";
      }
      return output;
    });
    function highlightMoment(momentId) {
      istore.setHighlightedMomentId(momentId);
    }
    function byInterview(moments2) {
      const repo = store.getRepo();
      const names = Object.fromEntries(repo.Interview.get().map((i) => [i.id, i.label]));
      return Object.entries(groupBy(moments2, "interviewId")).map(([id, arr]) => [names[id], arr.length]);
    }
    function switchTab(interviewName) {
      router.push({
        query: {
          tab: interviewName
        }
      }).catch((e) => {
        console.log(`Error when switching view: ${e}`);
      });
    }
    function droppedGenericDiachronicCategory(categoryId) {
      if (genericdiachroniccategory.value) {
        store.updateGenericDiachronicCategory(categoryId, {
          parentId: props.categoryId,
          folder: genericdiachroniccategory.value.folder
        });
      }
    }
    function droppedMoment(momentId) {
      store.addGenericDiachronicCategoryToMoment(
        props.categoryId,
        momentId
      );
    }
    const menuActions = [
      ["Add subcategory", () => genericdiachroniccategory.value && store.addGenericDiachronicSubcategory("DiachronicCategory", genericdiachroniccategory.value)],
      ["Delete", () => store.deleteGenericDiachronicCategory(props.categoryId)],
      ["Debug", () => debug()]
    ];
    const __returned__ = { istore, store, props, popupEdit, router, genericdiachroniccategory, debug, moments, currentMoments, genericcategoryName, categoryColor, currentInterviewMomentsLabel, momentsLabel, highlightMoment, byInterview, switchTab, droppedGenericDiachronicCategory, droppedMoment, menuActions, CustomExpansionItem, ColorizeIcon, DragElement, DropZone, ElementMenu };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = ["data-genericdiachroniccategory"];
const _hoisted_2$2 = { class: "genericdiachroniccategory-label" };
const _hoisted_3$1 = { class: "interview-moment-count" };
const _hoisted_4 = { class: "genericsynchroniccategory-children" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GenericDiachronicCategoryRepresentation = resolveComponent("GenericDiachronicCategoryRepresentation", true);
  return $setup.genericdiachroniccategory ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "genericdiachroniccategory-container row",
    "data-genericdiachroniccategory": $props.categoryId
  }, [
    createVNode($setup["CustomExpansionItem"], {
      class: "genericdiachroniccategory-body",
      "expand-icon-class": { "invisible": $setup.genericdiachroniccategory.children?.length == 0 }
    }, {
      header: withCtx(() => [
        createVNode($setup["DropZone"], {
          data: "header",
          class: "genericdiachroniccategory-header",
          types: "upmt/genericdiachroniccategory upmt/moment",
          onGenericdiachroniccategory: $setup.droppedGenericDiachronicCategory,
          onMoment: $setup.droppedMoment
        }, {
          default: withCtx(() => [
            createVNode($setup["DragElement"], {
              class: "genericdiachroniccategory",
              style: normalizeStyle({ backgroundColor: $setup.genericdiachroniccategory.color || "transparent" }),
              onClick: $setup.debug,
              type: "genericdiachroniccategory",
              data: $setup.genericdiachroniccategory.id
            }, {
              default: withCtx(() => [
                createVNode(QIcon, {
                  ref: "handle",
                  class: "genericdiachroniccategory-handle",
                  size: "xs",
                  name: "mdi-alpha-d-box"
                }, null, 512),
                createBaseVNode("span", _hoisted_2$2, [
                  createTextVNode(toDisplayString($setup.genericdiachroniccategory.name) + " ", 1),
                  createVNode(QBtn, {
                    title: $setup.currentInterviewMomentsLabel,
                    size: "xs",
                    round: "",
                    dense: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(QMenu, { class: "column" }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.currentMoments, (moment) => {
                            return openBlock(), createElementBlock("div", {
                              class: "flex row justify-between",
                              key: moment.id
                            }, [
                              createVNode(QBtn, {
                                label: moment.name,
                                align: "left",
                                "no-caps": "",
                                flat: "",
                                onClick: ($event) => $setup.highlightMoment(moment.id),
                                size: "sm",
                                style: normalizeStyle({ backgroundColor: moment.color || "transparent" }),
                                icon: "mdi-alpha-d-box-outline"
                              }, null, 8, ["label", "onClick", "style"])
                            ]);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString($setup.currentMoments.length), 1)
                    ]),
                    _: 1
                  }, 8, ["title"]),
                  _cache[3] || (_cache[3] = createTextVNode(" / ", -1)),
                  createVNode(QBtn, {
                    title: $setup.momentsLabel,
                    size: "xs",
                    round: "",
                    dense: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(QMenu, { class: "column" }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.byInterview($setup.moments), ([name, count]) => {
                            return openBlock(), createElementBlock("div", {
                              class: "row items-left no-wrap",
                              key: name
                            }, [
                              createVNode(QBtn, {
                                class: "full-width justify-content-between",
                                align: "left",
                                "no-caps": "",
                                flat: "",
                                label: name,
                                icon: "mdi-comment-text-outline",
                                onClick: ($event) => $setup.switchTab(name),
                                size: "sm"
                              }, null, 8, ["label", "onClick"]),
                              createBaseVNode("strong", _hoisted_3$1, toDisplayString(count), 1)
                            ]);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString($setup.moments.length), 1)
                    ]),
                    _: 1
                  }, 8, ["title"]),
                  createVNode(QPopupEdit, {
                    ref: "popupEdit",
                    modelValue: $setup.genericcategoryName,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.genericcategoryName = $event),
                    "auto-save": ""
                  }, {
                    default: withCtx((scope) => [
                      createVNode(QInput, {
                        modelValue: scope.value,
                        "onUpdate:modelValue": ($event) => scope.value = $event,
                        onFocus: _cache[0] || (_cache[0] = ($event) => $event.target.select()),
                        dense: "",
                        autofocus: "",
                        counter: "",
                        onKeyup: withKeys(scope.set, ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                createVNode(QSpace),
                createVNode($setup["ElementMenu"], { actions: $setup.menuActions }),
                createVNode($setup["ColorizeIcon"], {
                  class: "on-name-hover",
                  modelValue: $setup.categoryColor,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.categoryColor = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["style", "data"])
          ]),
          _: 1
        })
      ]),
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.genericdiachroniccategory.children, (cat) => {
            return openBlock(), createBlock(_component_GenericDiachronicCategoryRepresentation, {
              key: cat.id,
              categoryId: cat.id,
              currentInterviewId: $props.currentInterviewId
            }, null, 8, ["categoryId", "currentInterviewId"]);
          }), 128))
        ])
      ]),
      _: 1
    }, 8, ["expand-icon-class"])
  ], 8, _hoisted_1$2)) : createCommentVNode("", true);
}
const GenericDiachronicCategoryRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-b1f74d87"], ["__file", "GenericDiachronicCategoryRepresentation.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ModelFolderRepresentation",
  props: {
    modelfolderId: { type: String, default: "" },
    currentInterviewId: { type: String, default: "" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const props = __props;
    const modelfolder = computed(() => store.getFolder(props.modelfolderId));
    function debug() {
      window.modelfolder = modelfolder.value;
      console.log("Modelfolder", modelfolder.value);
    }
    function droppedModelFolder(modelfolderId) {
      store.updateModelFolder(modelfolderId, { parentId: props.modelfolderId });
    }
    const modelfolderName = computed({
      get() {
        return modelfolder.value ? modelfolder.value.name : "";
      },
      set(value) {
        store.updateModelFolder(props.modelfolderId, { name: value });
      }
    });
    const modelfolderColor = computed({
      get() {
        return modelfolder.value ? modelfolder.value.color : "";
      },
      set(color) {
        store.updateModelFolder(props.modelfolderId, { color });
      }
    });
    const expand = computed({
      get() {
        return modelfolder.value ? modelfolder.value.isExpanded : true;
      },
      set(isExpanded) {
        store.updateModelFolder(props.modelfolderId, { isExpanded });
      }
    });
    const menuActions = computed(() => {
      const actions = [
        [`Add a folder`, () => store.addModelFolder(props.modelfolderId, "newfolder")],
        [`Add a category`, () => modelfolder.value && store.addGenericDiachronicCategory("DiachronicCategory", modelfolder.value)]
      ];
      if (modelfolder.value && modelfolder.value.parentId) {
        actions.push(["Delete", () => store.deleteModelFolder(props.modelfolderId)]);
      }
      return actions;
    });
    const __returned__ = { store, props, modelfolder, debug, droppedModelFolder, modelfolderName, modelfolderColor, expand, menuActions, CustomExpansionItem, ColorizeIcon, DropZone, DragElement, ElementMenu, GenericDiachronicCategoryRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["data-modelfolder"];
const _hoisted_2$1 = { class: "modelfolder-name" };
const _hoisted_3 = { class: "modelfolder-children" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ModelFolderRepresentation = resolveComponent("ModelFolderRepresentation", true);
  return $setup.modelfolder ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "modelfolder-container",
    style: normalizeStyle({ backgroundColor: $setup.modelfolder.color || "transparent" }),
    "data-modelfolder": $props.modelfolderId
  }, [
    createVNode($setup["CustomExpansionItem"], {
      class: "genericdiachroniccategory-body",
      modelValue: $setup.expand,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.expand = $event)
    }, {
      header: withCtx(() => [
        createVNode($setup["DropZone"], {
          data: "header",
          class: "modelfolder-header",
          types: "upmt/modelfolder",
          onModelfolder: $setup.droppedModelFolder
        }, {
          default: withCtx(() => [
            createVNode($setup["DragElement"], {
              type: "modelfolder",
              data: $props.modelfolderId,
              onClick: withModifiers($setup.debug, ["meta"])
            }, {
              default: withCtx(() => [
                createVNode(QIcon, {
                  size: "xs",
                  name: "mdi-folder-outline"
                }),
                createBaseVNode("span", _hoisted_2$1, [
                  createTextVNode(toDisplayString($setup.modelfolderName) + " ", 1),
                  createVNode(QPopupEdit, {
                    modelValue: $setup.modelfolderName,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.modelfolderName = $event),
                    "auto-save": ""
                  }, {
                    default: withCtx((scope) => [
                      createVNode(QInput, {
                        modelValue: scope.value,
                        "onUpdate:modelValue": ($event) => scope.value = $event,
                        onFocus: _cache[0] || (_cache[0] = ($event) => $event.target.select()),
                        dense: "",
                        autofocus: "",
                        counter: "",
                        onKeyup: withKeys(scope.set, ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  createVNode($setup["ColorizeIcon"], {
                    modelValue: $setup.modelfolderColor,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.modelfolderColor = $event)
                  }, null, 8, ["modelValue"])
                ])
              ]),
              _: 1
            }, 8, ["data"]),
            createVNode(QSpace),
            createVNode($setup["ElementMenu"], { actions: $setup.menuActions }, null, 8, ["actions"])
          ]),
          _: 1
        })
      ]),
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.modelfolder.folders, (f) => {
            return openBlock(), createElementBlock("div", {
              key: f.id
            }, [
              createVNode(_component_ModelFolderRepresentation, {
                currentInterviewId: $props.currentInterviewId,
                modelfolderId: f.id
              }, null, 8, ["currentInterviewId", "modelfolderId"])
            ]);
          }), 128)),
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.modelfolder.genericdiachroniccategories, (c) => {
            return openBlock(), createElementBlock("div", {
              key: c.id
            }, [
              !c.parentId ? (openBlock(), createBlock($setup["GenericDiachronicCategoryRepresentation"], {
                key: 0,
                currentInterviewId: $props.currentInterviewId,
                categoryId: c.id
              }, null, 8, ["currentInterviewId", "categoryId"])) : createCommentVNode("", true)
            ]);
          }), 128))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 12, _hoisted_1$1)) : createCommentVNode("", true);
}
const ModelFolderRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-48f83641"], ["__file", "ModelFolderRepresentation.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GenericDiachronicCategoriesRepresentation",
  props: {
    projectId: {},
    currentInterviewId: {},
    title: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const store = useProjectStore();
    const istore = useInterfaceStore();
    const project = computed(() => store.activateProject(props.projectId));
    function addGenericDiachronicCategory() {
      if (project.value) {
        const category = store.addGenericDiachronicCategory(
          istore.newGDCId(),
          project.value.modelfolder
        );
        console.log("New GenericDiachronicCategory", category);
      }
    }
    const __returned__ = { props, store, istore, project, addGenericDiachronicCategory, ModelFolderRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["data-project"];
const _hoisted_2 = { class: "text-bold" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.project ? (openBlock(), createElementBlock("div", {
    class: "genericdiachroniccategories-container",
    key: $props.projectId,
    "data-project": $props.projectId
  }, [
    createBaseVNode("div", _hoisted_2, toDisplayString($props.title), 1),
    createVNode($setup["ModelFolderRepresentation"], {
      modelfolderId: $setup.project.modelfolder.id,
      currentInterviewId: $props.currentInterviewId
    }, null, 8, ["modelfolderId", "currentInterviewId"]),
    createVNode(QBtn, {
      flat: "",
      class: "genericdiachroniccategories-add",
      dense: "",
      size: "xs",
      title: "Add generic diachronic category",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.addGenericDiachronicCategory()),
      icon: "mdi-plus",
      "no-caps": ""
    })
  ], 8, _hoisted_1)) : createCommentVNode("", true);
}
const GenericDiachronicCategoriesRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-751910fb"], ["__file", "GenericDiachronicCategoriesRepresentation.vue"]]);
export {
  CustomExpansionItem as C,
  GenericDiachronicCategoriesRepresentation as G,
  QSplitter as Q
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yaWVzUmVwcmVzZW50YXRpb24teGgweEVVNTcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3BsaXR0ZXIvUVNwbGl0dGVyLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tRXhwYW5zaW9uSXRlbS52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HZW5lcmljRGlhY2hyb25pY0NhdGVnb3J5UmVwcmVzZW50YXRpb24udnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTW9kZWxGb2xkZXJSZXByZXNlbnRhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HZW5lcmljRGlhY2hyb25pY0NhdGVnb3JpZXNSZXByZXNlbnRhdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoLXBhbi9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QsIGhNZXJnZVNsb3QsIGhEaXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU3BsaXR0ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVyc2U6IEJvb2xlYW4sXG4gICAgdW5pdDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyUnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJyUnLCAncHgnIF0uaW5jbHVkZXModilcbiAgICB9LFxuXG4gICAgbGltaXRzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB7XG4gICAgICAgIGlmICh2Lmxlbmd0aCAhPT0gMikgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmICh0eXBlb2YgdlsgMCBdICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgdlsgMSBdICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiB2WyAwIF0gPj0gMCAmJiB2WyAwIF0gPD0gdlsgMSBdXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXRJbW1lZGlhdGVseTogQm9vbGVhbixcblxuICAgIGhvcml6b250YWw6IEJvb2xlYW4sXG4gICAgZGlzYWJsZTogQm9vbGVhbixcblxuICAgIGJlZm9yZUNsYXNzOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGFmdGVyQ2xhc3M6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG5cbiAgICBzZXBhcmF0b3JDbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBzZXBhcmF0b3JTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXVxuICB9LFxuXG4gIGVtaXRzOiBbICd1cGRhdGU6bW9kZWxWYWx1ZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBzaWRlUmVmcyA9IHtcbiAgICAgIGJlZm9yZTogcmVmKG51bGwpLFxuICAgICAgYWZ0ZXI6IHJlZihudWxsKVxuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3Etc3BsaXR0ZXIgbm8td3JhcCAnXG4gICAgICArIGAkeyBwcm9wcy5ob3Jpem9udGFsID09PSB0cnVlID8gJ3Etc3BsaXR0ZXItLWhvcml6b250YWwgY29sdW1uJyA6ICdxLXNwbGl0dGVyLS12ZXJ0aWNhbCByb3cnIH1gXG4gICAgICArIGAgcS1zcGxpdHRlci0tJHsgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICdkaXNhYmxlZCcgOiAnd29ya2FibGUnIH1gXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtc3BsaXR0ZXItLWRhcmsnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgcHJvcE5hbWUgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMuaG9yaXpvbnRhbCA9PT0gdHJ1ZSA/ICdoZWlnaHQnIDogJ3dpZHRoJykpXG4gICAgY29uc3Qgc2lkZSA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy5yZXZlcnNlICE9PSB0cnVlID8gJ2JlZm9yZScgOiAnYWZ0ZXInKSlcblxuICAgIGNvbnN0IGNvbXB1dGVkTGltaXRzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMubGltaXRzICE9PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5saW1pdHNcbiAgICAgICAgOiAocHJvcHMudW5pdCA9PT0gJyUnID8gWyAxMCwgOTAgXSA6IFsgNTAsIEluZmluaXR5IF0pXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIGdldENTU1ZhbHVlICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIChwcm9wcy51bml0ID09PSAnJScgPyB2YWx1ZSA6IE1hdGgucm91bmQodmFsdWUpKSArIHByb3BzLnVuaXRcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZXMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgWyBzaWRlLnZhbHVlIF06IHtcbiAgICAgICAgWyBwcm9wTmFtZS52YWx1ZSBdOiBnZXRDU1NWYWx1ZShwcm9wcy5tb2RlbFZhbHVlKVxuICAgICAgfVxuICAgIH0pKVxuXG4gICAgbGV0IF9fZGlyLCBfX21heFZhbHVlLCBfX3ZhbHVlLCBfX211bHRpcGxpZXIsIF9fbm9ybWFsaXplZFxuXG4gICAgZnVuY3Rpb24gcGFuIChldnQpIHtcbiAgICAgIGlmIChldnQuaXNGaXJzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBzaXplID0gcm9vdFJlZi52YWx1ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVsgcHJvcE5hbWUudmFsdWUgXVxuXG4gICAgICAgIF9fZGlyID0gcHJvcHMuaG9yaXpvbnRhbCA9PT0gdHJ1ZSA/ICd1cCcgOiAnbGVmdCdcbiAgICAgICAgX19tYXhWYWx1ZSA9IHByb3BzLnVuaXQgPT09ICclJyA/IDEwMCA6IHNpemVcbiAgICAgICAgX192YWx1ZSA9IE1hdGgubWluKF9fbWF4VmFsdWUsIGNvbXB1dGVkTGltaXRzLnZhbHVlWyAxIF0sIE1hdGgubWF4KGNvbXB1dGVkTGltaXRzLnZhbHVlWyAwIF0sIHByb3BzLm1vZGVsVmFsdWUpKVxuICAgICAgICBfX211bHRpcGxpZXIgPSAocHJvcHMucmV2ZXJzZSAhPT0gdHJ1ZSA/IDEgOiAtMSlcbiAgICAgICAgICAqIChwcm9wcy5ob3Jpem9udGFsID09PSB0cnVlID8gMSA6ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IC0xIDogMSkpXG4gICAgICAgICAgKiAocHJvcHMudW5pdCA9PT0gJyUnID8gKHNpemUgPT09IDAgPyAwIDogMTAwIC8gc2l6ZSkgOiAxKVxuXG4gICAgICAgIHJvb3RSZWYudmFsdWUuY2xhc3NMaXN0LmFkZCgncS1zcGxpdHRlci0tYWN0aXZlJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChldnQuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoX19ub3JtYWxpemVkICE9PSBwcm9wcy5tb2RlbFZhbHVlKSB7XG4gICAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBfX25vcm1hbGl6ZWQpXG4gICAgICAgIH1cblxuICAgICAgICByb290UmVmLnZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ3Etc3BsaXR0ZXItLWFjdGl2ZScpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWwgPSBfX3ZhbHVlXG4gICAgICAgICsgX19tdWx0aXBsaWVyXG4gICAgICAgICogKGV2dC5kaXJlY3Rpb24gPT09IF9fZGlyID8gLTEgOiAxKVxuICAgICAgICAqIGV2dC5kaXN0YW5jZVsgcHJvcHMuaG9yaXpvbnRhbCA9PT0gdHJ1ZSA/ICd5JyA6ICd4JyBdXG5cbiAgICAgIF9fbm9ybWFsaXplZCA9IE1hdGgubWluKF9fbWF4VmFsdWUsIGNvbXB1dGVkTGltaXRzLnZhbHVlWyAxIF0sIE1hdGgubWF4KGNvbXB1dGVkTGltaXRzLnZhbHVlWyAwIF0sIHZhbCkpXG5cbiAgICAgIHNpZGVSZWZzWyBzaWRlLnZhbHVlIF0udmFsdWUuc3R5bGVbIHByb3BOYW1lLnZhbHVlIF0gPSBnZXRDU1NWYWx1ZShfX25vcm1hbGl6ZWQpXG5cbiAgICAgIGlmIChwcm9wcy5lbWl0SW1tZWRpYXRlbHkgPT09IHRydWUgJiYgcHJvcHMubW9kZWxWYWx1ZSAhPT0gX19ub3JtYWxpemVkKSB7XG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgX19ub3JtYWxpemVkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNlcERpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIGlmIHByb3BzLmRpc2FibGUgIT09IHRydWVcbiAgICAgIHJldHVybiBbIFtcbiAgICAgICAgVG91Y2hQYW4sXG4gICAgICAgIHBhbixcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7XG4gICAgICAgICAgWyBwcm9wcy5ob3Jpem9udGFsID09PSB0cnVlID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyBdOiB0cnVlLFxuICAgICAgICAgIHByZXZlbnQ6IHRydWUsXG4gICAgICAgICAgc3RvcDogdHJ1ZSxcbiAgICAgICAgICBtb3VzZTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZUFsbERpcjogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdIF1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplICh2YWwsIGxpbWl0cykge1xuICAgICAgaWYgKHZhbCA8IGxpbWl0c1sgMCBdKSB7XG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbGltaXRzWyAwIF0pXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh2YWwgPiBsaW1pdHNbIDEgXSkge1xuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGxpbWl0c1sgMSBdKVxuICAgICAgfVxuICAgIH1cblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHYgPT4ge1xuICAgICAgbm9ybWFsaXplKHYsIGNvbXB1dGVkTGltaXRzLnZhbHVlKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5saW1pdHMsICgpID0+IHtcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgbm9ybWFsaXplKHByb3BzLm1vZGVsVmFsdWUsIGNvbXB1dGVkTGltaXRzLnZhbHVlKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgcmVmOiBzaWRlUmVmcy5iZWZvcmUsXG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICdxLXNwbGl0dGVyX19wYW5lbCBxLXNwbGl0dGVyX19iZWZvcmUnICsgKHByb3BzLnJldmVyc2UgPT09IHRydWUgPyAnIGNvbCcgOiAnJyksXG4gICAgICAgICAgICBwcm9wcy5iZWZvcmVDbGFzc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgc3R5bGU6IHN0eWxlcy52YWx1ZS5iZWZvcmVcbiAgICAgICAgfSwgaFNsb3Qoc2xvdHMuYmVmb3JlKSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAncS1zcGxpdHRlcl9fc2VwYXJhdG9yJyxcbiAgICAgICAgICAgIHByb3BzLnNlcGFyYXRvckNsYXNzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuc2VwYXJhdG9yU3R5bGUsXG4gICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJ3RydWUnIDogdm9pZCAwXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoRGlyKFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzOiAncS1zcGxpdHRlcl9fc2VwYXJhdG9yLWFyZWEgYWJzb2x1dGUtZnVsbCcgfSxcbiAgICAgICAgICAgIGhTbG90KHNsb3RzLnNlcGFyYXRvciksXG4gICAgICAgICAgICAnc2VwJyxcbiAgICAgICAgICAgIHByb3BzLmRpc2FibGUgIT09IHRydWUsXG4gICAgICAgICAgICAoKSA9PiBzZXBEaXJlY3RpdmUudmFsdWVcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IHNpZGVSZWZzLmFmdGVyLFxuICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAncS1zcGxpdHRlcl9fcGFuZWwgcS1zcGxpdHRlcl9fYWZ0ZXInICsgKHByb3BzLnJldmVyc2UgPT09IHRydWUgPyAnJyA6ICcgY29sJyksXG4gICAgICAgICAgICBwcm9wcy5hZnRlckNsYXNzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdHlsZTogc3R5bGVzLnZhbHVlLmFmdGVyXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmFmdGVyKSlcbiAgICAgIF1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHJlZjogcm9vdFJlZlxuICAgICAgfSwgaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBjaGlsZCkpXG4gICAgfVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IDpjbGFzcz1cIml0ZW1DbGFzc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJleHBhbnNpb24taGVhZGVyIHJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxxLWljb25cbiAgICAgICAgY2xhc3M9XCJleHBhbnNpb24taWNvblwiXG4gICAgICAgIDpjbGFzcz1cImV4cGFuZEljb25DbGFzc1wiXG4gICAgICAgIEBjbGljay5zdG9wPVwiaXNFeHBhbmRlZCA9ICFpc0V4cGFuZGVkXCJcbiAgICAgICAgOm5hbWU9XCJpc0V4cGFuZGVkID8gZXhwYW5kZWRJY29uIDogZXhwYW5kSWNvblwiIC8+XG4gICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJleHBhbnNpb24tYm9keVwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG4gIGludGVyZmFjZSBQcm9wcyB7XG4gICAgICBleHBhbmRJY29uPzogc3RyaW5nLFxuICAgICAgZXhwYW5kZWRJY29uPzogc3RyaW5nLFxuICAgICAgZXhwYW5kSWNvbkNsYXNzPzogb2JqZWN0IHwgc3RyaW5nXG4gIH1cbiAgd2l0aERlZmF1bHRzKGRlZmluZVByb3BzPFByb3BzPigpLCB7XG4gICAgICBleHBhbmRJY29uOiBcIm1kaS1wbHVzXCIsXG4gICAgICBleHBhbmRlZEljb246IFwibWRpLW1pbnVzXCIsXG4gICAgICBleHBhbmRJY29uQ2xhc3M6IFwiXCJcbiAgfSlcblxuICBjb25zdCBpc0V4cGFuZGVkID0gZGVmaW5lTW9kZWwoeyBkZWZhdWx0OiB0cnVlIH0pXG5cbiAgY29uc3QgaXRlbUNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIGlzRXhwYW5kZWQudmFsdWUgPyBcImV4cGFuc2lvbi1pdGVtIGNvbHVtbiBleHBhbmRlZFwiIDogXCJleHBhbnNpb24taXRlbSBjb2x1bW4gY29sbGFwc2VkXCJcbiAgfSlcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbi5jb2xsYXBzZWQgLmV4cGFuc2lvbi1ib2R5IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmV4cGFuc2lvbi1ib2R5IHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5leHBhbnNpb24taGVhZGVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5leHBhbnNpb24taGVhZGVyOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2NjYztcbn1cbi5leHBhbnNpb24taWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnktY29udGFpbmVyIHJvd1wiXG4gICAgICAgdi1pZj1cImdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnlcIlxuICAgICAgIDpkYXRhLWdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnk9XCJjYXRlZ29yeUlkXCI+XG4gICAgPGN1c3RvbS1leHBhbnNpb24taXRlbVxuICAgICAgY2xhc3M9XCJnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LWJvZHlcIlxuICAgICAgOmV4cGFuZC1pY29uLWNsYXNzPVwieyAnaW52aXNpYmxlJzogZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS5jaGlsZHJlbj8ubGVuZ3RoID09IDAgfVwiXG4gICAgICA+XG5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aGVhZGVyPlxuICAgICAgICA8RHJvcFpvbmUgZGF0YT1cImhlYWRlclwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnktaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgIHR5cGVzPVwidXBtdC9nZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5IHVwbXQvbW9tZW50XCJcbiAgICAgICAgICAgICAgICAgIEBnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5PVwiZHJvcHBlZEdlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgQG1vbWVudD1cImRyb3BwZWRNb21lbnRcIj5cbiAgICAgICAgICA8RHJhZ0VsZW1lbnRcbiAgICAgICAgICAgIGNsYXNzPVwiZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeVwiXG4gICAgICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS5jb2xvciB8fCAndHJhbnNwYXJlbnQnIH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwiZGVidWdcIlxuICAgICAgICAgICAgdHlwZT1cImdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnlcIlxuICAgICAgICAgICAgOmRhdGE9XCJnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LmlkXCI+XG4gICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgIHJlZj1cImhhbmRsZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS1oYW5kbGVcIlxuICAgICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgICBuYW1lPVwibWRpLWFscGhhLWQtYm94XCIgLz5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzPVwiZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS1sYWJlbFwiPlxuICAgICAgICAgICAgICB7eyBnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgOnRpdGxlPVwiY3VycmVudEludGVydmlld01vbWVudHNMYWJlbFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgIGRlbnNlPlxuICAgICAgICAgICAgICAgIDxxLW1lbnUgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgIHYtZm9yPVwibW9tZW50IGluIGN1cnJlbnRNb21lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCByb3cganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJtb21lbnQuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwibW9tZW50Lm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJoaWdobGlnaHRNb21lbnQobW9tZW50LmlkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogbW9tZW50LmNvbG9yIHx8ICd0cmFuc3BhcmVudCcgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm1kaS1hbHBoYS1kLWJveC1vdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgICAgICB7eyBjdXJyZW50TW9tZW50cy5sZW5ndGggfX08L3EtYnRuPiAvXG4gICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgIDp0aXRsZT1cIm1vbWVudHNMYWJlbFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgIGRlbnNlPlxuICAgICAgICAgICAgICAgIDxxLW1lbnUgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtbGVmdCBuby13cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIlsgbmFtZSwgY291bnQgXSBpbiBieUludGVydmlldyhtb21lbnRzKVwiPlxuICAgICAgICAgICAgICAgICAgICA8cS1idG4gY2xhc3M9XCJmdWxsLXdpZHRoIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJtZGktY29tbWVudC10ZXh0LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic3dpdGNoVGFiKG5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiaW50ZXJ2aWV3LW1vbWVudC1jb3VudFwiPnt7IGNvdW50IH19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgICAgICB7eyBtb21lbnRzLmxlbmd0aCB9fTwvcS1idG4+XG4gICAgICAgICAgICAgIDxxLXBvcHVwLWVkaXRcbiAgICAgICAgICAgICAgICByZWY9XCJwb3B1cEVkaXRcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJnZW5lcmljY2F0ZWdvcnlOYW1lXCJcbiAgICAgICAgICAgICAgICBhdXRvLXNhdmVcbiAgICAgICAgICAgICAgICB2LXNsb3Q9XCJzY29wZVwiPlxuICAgICAgICAgICAgICAgIDxxLWlucHV0IHYtbW9kZWw9XCJzY29wZS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVwiKCRldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuc2VsZWN0KClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlIGF1dG9mb2N1cyBjb3VudGVyIEBrZXl1cC5lbnRlcj1cInNjb3BlLnNldFwiIC8+XG4gICAgICAgICAgICAgIDwvcS1wb3B1cC1lZGl0PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHEtc3BhY2UgLz5cbiAgICAgICAgICAgIDxFbGVtZW50TWVudVxuICAgICAgICAgICAgICA6YWN0aW9ucz1cIm1lbnVBY3Rpb25zXCIgLz5cbiAgICAgICAgICAgIDxDb2xvcml6ZUljb25cbiAgICAgICAgICAgICAgY2xhc3M9XCJvbi1uYW1lLWhvdmVyXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImNhdGVnb3J5Q29sb3JcIiAvPlxuICAgICAgICAgIDwvRHJhZ0VsZW1lbnQ+XG4gICAgICAgIDwvRHJvcFpvbmU+XG5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuXCI+XG4gICAgICAgIDxHZW5lcmljRGlhY2hyb25pY0NhdGVnb3J5UmVwcmVzZW50YXRpb25cbiAgICAgICAgICB2LWZvcj1cImNhdCBpbiBnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LmNoaWxkcmVuXCJcbiAgICAgICAgICA6a2V5PVwiY2F0LmlkXCJcbiAgICAgICAgICA6Y2F0ZWdvcnlJZD1cImNhdC5pZFwiXG4gICAgICAgICAgOmN1cnJlbnRJbnRlcnZpZXdJZD1cImN1cnJlbnRJbnRlcnZpZXdJZFwiXG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvY3VzdG9tLWV4cGFuc2lvbi1pdGVtPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcidcblxuICBpbXBvcnQgQ3VzdG9tRXhwYW5zaW9uSXRlbSBmcm9tICcuL0N1c3RvbUV4cGFuc2lvbkl0ZW0udnVlJ1xuICBpbXBvcnQgQ29sb3JpemVJY29uIGZyb20gJy4vQ29sb3JpemVJY29uLnZ1ZSdcbiAgaW1wb3J0IERyYWdFbGVtZW50IGZyb20gJy4vRHJhZ0VsZW1lbnQudnVlJ1xuICBpbXBvcnQgRHJvcFpvbmUgZnJvbSAnLi9Ecm9wWm9uZS52dWUnXG4gIGltcG9ydCBFbGVtZW50TWVudSBmcm9tICcuL0VsZW1lbnRNZW51LnZ1ZSdcblxuICBpbXBvcnQgR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeSBmcm9tICdzdG9yZXMvbW9kZWxzL2dlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnknXG5cbiAgaW1wb3J0IE1vbWVudCBmcm9tICdzdG9yZXMvbW9kZWxzL21vbWVudCdcbiAgaW1wb3J0IEludGVydmlldyBmcm9tICdzdG9yZXMvbW9kZWxzL2ludGVydmlldydcblxuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgeyB1c2VJbnRlcmZhY2VTdG9yZSB9IGZyb20gJ3N0b3Jlcy9pbnRlcmZhY2UnXG4gIGltcG9ydCB7IGdyb3VwQnkgfSBmcm9tICcuL3V0aWwnXG5cbiAgY29uc3QgaXN0b3JlID0gdXNlSW50ZXJmYWNlU3RvcmUoKVxuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBpbnRlcmZhY2UgUHJvcHMge1xuICAgICAgY2F0ZWdvcnlJZDogc3RyaW5nLFxuICAgICAgY3VycmVudEludGVydmlld0lkOiBzdHJpbmdcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gd2l0aERlZmF1bHRzKGRlZmluZVByb3BzPFByb3BzPigpLCB7XG4gICAgICBjdXJyZW50SW50ZXJ2aWV3SWQ6IFwiXCJcbiAgfSlcblxuICBjb25zdCBwb3B1cEVkaXQgPSByZWYobnVsbClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IGdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnkgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5nZXRHZW5lcmljRGlhY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQpKVxuXG4gIGZ1bmN0aW9uIGRlYnVnICgpIHtcbiAgICAgICh3aW5kb3cgYXMgYW55KS5nZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5ID0gZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS52YWx1ZVxuICAgICAgY29uc29sZS5sb2coXCJnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5XCIsIGdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnkudmFsdWUpXG4gIH1cblxuICBjb25zdCBtb21lbnRzID0gY29tcHV0ZWQoKCk6IE1vbWVudFtdID0+IHtcbiAgICAgIHJldHVybiBnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LnZhbHVlPy5tb21lbnRzID8/IFtdXG4gIH0pXG5cbiAgY29uc3QgY3VycmVudE1vbWVudHMgPSBjb21wdXRlZCgoKSA9PiBtb21lbnRzLnZhbHVlPy5maWx0ZXIoKG06IE1vbWVudCkgPT4gbS5pbnRlcnZpZXdJZCA9PT0gcHJvcHMuY3VycmVudEludGVydmlld0lkKSB8fCBbXSlcblxuICBjb25zdCBnZW5lcmljY2F0ZWdvcnlOYW1lID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS52YWx1ZSA/IGdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnkudmFsdWUubmFtZSA6IFwiXCJcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgICBzdG9yZS51cGRhdGVFbGVtZW50KGdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnkudmFsdWUgYXMgR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeSwgeyBuYW1lOiB2YWx1ZSB9KVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3J5Q29sb3IgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiBnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LnZhbHVlPy5jb2xvciA/PyBcIlwiXG4gICAgICB9LFxuICAgICAgc2V0IChjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgICAgc3RvcmUudXBkYXRlRWxlbWVudChnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LnZhbHVlIGFzIEdlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcnksIHsgY29sb3I6IGNvbG9yfSlcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBjdXJyZW50SW50ZXJ2aWV3TW9tZW50c0xhYmVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY291bnQgPSBjdXJyZW50TW9tZW50cy52YWx1ZS5sZW5ndGhcbiAgICAgIGlmIChjb3VudCkge1xuICAgICAgICAgIHJldHVybiBgUHJlc2VudCBpbiAke2NvdW50fSBtb21lbnRzIGluIHRoZSBjdXJyZW50IGludGVydmlld2BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiTm90IHByZXNlbnQgaW4gdGhlIGN1cnJlbnQgaW50ZXJ2aWV3XCJcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBtb21lbnRzTGFiZWwgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgb3V0cHV0ID0gXCJcIlxuICAgICAgY29uc3QgY291bnQgPSBtb21lbnRzLnZhbHVlLmxlbmd0aFxuICAgICAgaWYgKGNvdW50KSB7XG4gICAgICAgICAgb3V0cHV0ID0gYFByZXNlbnQgaW4gJHtjb3VudH0gbW9tZW50c2BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3V0cHV0ID0gXCJOb3QgcHJlc2VudCBpbiBhbnkgaW50ZXJ2aWV3XCJcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXRcbiAgfSlcblxuICBmdW5jdGlvbiBoaWdobGlnaHRNb21lbnQgKG1vbWVudElkOiBzdHJpbmcpIHtcbiAgICAgIGlzdG9yZS5zZXRIaWdobGlnaHRlZE1vbWVudElkKG1vbWVudElkKVxuICB9XG5cbiAgZnVuY3Rpb24gYnlJbnRlcnZpZXcgKG1vbWVudHM6IEFycmF5PE1vbWVudD4pIHtcbiAgICAgIGNvbnN0IHJlcG8gPSBzdG9yZS5nZXRSZXBvKClcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKHJlcG8uSW50ZXJ2aWV3LmdldCgpLm1hcCgoaTogSW50ZXJ2aWV3KSA9PiBbIGkuaWQsIGkubGFiZWwgXSkpXG5cbiAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyhncm91cEJ5KG1vbWVudHMsICdpbnRlcnZpZXdJZCcpKVxuICAgICAgICAgIC5tYXAoKFtpZCwgYXJyXSkgPT4gWyBuYW1lc1tpZF0sIChhcnIgYXMgQXJyYXk8YW55PikubGVuZ3RoIF0pXG4gIH1cblxuICBmdW5jdGlvbiBzd2l0Y2hUYWIgKGludGVydmlld05hbWU6IHN0cmluZykge1xuICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIHRhYjogaW50ZXJ2aWV3TmFtZVxuICAgICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciB3aGVuIHN3aXRjaGluZyB2aWV3OiAke2V9YClcbiAgICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeSAoY2F0ZWdvcnlJZDogc3RyaW5nKSB7XG4gICAgICBpZiAoZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS52YWx1ZSkge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZUdlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcnkoY2F0ZWdvcnlJZCwge1xuICAgICAgICAgICAgICBwYXJlbnRJZDogcHJvcHMuY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgICAgZm9sZGVyOiBnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LnZhbHVlLmZvbGRlclxuICAgICAgICAgIH0pXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkTW9tZW50IChtb21lbnRJZDogc3RyaW5nKSB7XG4gICAgICBzdG9yZS5hZGRHZW5lcmljRGlhY2hyb25pY0NhdGVnb3J5VG9Nb21lbnQocHJvcHMuY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb21lbnRJZClcbiAgfVxuXG4gIGltcG9ydCB0eXBlIHsgTmFtZWRBY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL3V0aWwudHMnXG4gIGNvbnN0IG1lbnVBY3Rpb25zOiBOYW1lZEFjdGlvbltdID0gW1xuICAgICAgWyBcIkFkZCBzdWJjYXRlZ29yeVwiLCAoKSA9PiBnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LnZhbHVlICYmIHN0b3JlLmFkZEdlbmVyaWNEaWFjaHJvbmljU3ViY2F0ZWdvcnkoXCJEaWFjaHJvbmljQ2F0ZWdvcnlcIiwgZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS52YWx1ZSkgXSxcbiAgICAgIFsgXCJEZWxldGVcIiwgKCkgPT4gc3RvcmUuZGVsZXRlR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeShwcm9wcy5jYXRlZ29yeUlkKSBdLFxuICAgICAgWyBcIkRlYnVnXCIsICgpID0+IGRlYnVnKCkgXVxuICBdXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnktaGFuZGxlIHtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5nZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LWhhbmRsZTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAuNztcbiAgfVxuICAuZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS1uYW1lIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMDtcbiAgfVxuICAuZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeTpob3ZlciAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC5nZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkIGJsYWNrO1xuICB9XG4gIC5xLWxpc3QtLWRlbnNlID4gLnEtaXRlbSwgLnEtaXRlbS0tZGVuc2Uge1xuICAgIG1pbi1oZWlnaHQ6IDE4cHg7XG4gICAgcGFkZGluZzogMCAycHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuICAuaW50ZXJ2aWV3LW5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1vZGVsZm9sZGVyLWNvbnRhaW5lclwiXG4gICAgICAgdi1pZj1cIm1vZGVsZm9sZGVyXCJcbiAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogbW9kZWxmb2xkZXIuY29sb3IgfHwgJ3RyYW5zcGFyZW50JyB9XCJcbiAgICAgICA6ZGF0YS1tb2RlbGZvbGRlcj1cIm1vZGVsZm9sZGVySWRcIj5cblxuICAgIDxjdXN0b20tZXhwYW5zaW9uLWl0ZW1cbiAgICAgIGNsYXNzPVwiZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS1ib2R5XCJcbiAgICAgIHYtbW9kZWw9XCJleHBhbmRcIlxuICAgICAgPlxuXG4gICAgICA8dGVtcGxhdGUgdi1zbG90OmhlYWRlcj5cbiAgICAgICAgPERyb3Bab25lIGRhdGE9XCJoZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtb2RlbGZvbGRlci1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgdHlwZXM9XCJ1cG10L21vZGVsZm9sZGVyXCJcbiAgICAgICAgICAgICAgICAgIEBtb2RlbGZvbGRlcj1cImRyb3BwZWRNb2RlbEZvbGRlclwiPlxuICAgICAgICAgIDxEcmFnRWxlbWVudFxuICAgICAgICAgICAgdHlwZT1cIm1vZGVsZm9sZGVyXCJcbiAgICAgICAgICAgIDpkYXRhPVwibW9kZWxmb2xkZXJJZFwiXG4gICAgICAgICAgICBAY2xpY2subWV0YT1cImRlYnVnXCI+XG4gICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJtZGktZm9sZGVyLW91dGxpbmVcIj5cbiAgICAgICAgICAgIDwvcS1pY29uPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb2RlbGZvbGRlci1uYW1lXCI+e3sgbW9kZWxmb2xkZXJOYW1lIH19XG4gICAgICAgICAgICAgIDxxLXBvcHVwLWVkaXQgdi1tb2RlbD1cIm1vZGVsZm9sZGVyTmFtZVwiIGF1dG8tc2F2ZSB2LXNsb3Q9XCJzY29wZVwiPlxuICAgICAgICAgICAgICAgIDxxLWlucHV0IHYtbW9kZWw9XCJzY29wZS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVwiKCRldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuc2VsZWN0KClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlIGF1dG9mb2N1cyBjb3VudGVyIEBrZXl1cC5lbnRlcj1cInNjb3BlLnNldFwiIC8+XG4gICAgICAgICAgICAgIDwvcS1wb3B1cC1lZGl0PlxuICAgICAgICAgICAgICA8Q29sb3JpemVJY29uXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vZGVsZm9sZGVyQ29sb3JcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9EcmFnRWxlbWVudD5cbiAgICAgICAgICA8cS1zcGFjZSAvPlxuICAgICAgICAgIDxFbGVtZW50TWVudVxuICAgICAgICAgICAgOmFjdGlvbnM9XCJtZW51QWN0aW9uc1wiIC8+XG4gICAgICAgIDwvRHJvcFpvbmU+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kZWxmb2xkZXItY2hpbGRyZW5cIj5cbiAgICAgICAgPGRpdiB2LWZvcj1cImYgaW4gbW9kZWxmb2xkZXIuZm9sZGVyc1wiIDprZXk9XCJmLmlkXCI+XG4gICAgICAgICAgPE1vZGVsRm9sZGVyUmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIlxuICAgICAgICAgICAgOm1vZGVsZm9sZGVySWQ9XCJmLmlkXCI+XG4gICAgICAgICAgPC9Nb2RlbEZvbGRlclJlcHJlc2VudGF0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWZvcj1cImMgaW4gbW9kZWxmb2xkZXIuZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yaWVzXCIgOmtleT1cImMuaWRcIj5cbiAgICAgICAgICA8R2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB2LWlmPVwiISBjLnBhcmVudElkXCJcbiAgICAgICAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIlxuICAgICAgICAgICAgOmNhdGVnb3J5SWQ9XCJjLmlkXCI+XG4gICAgICAgICAgPC9HZW5lcmljRGlhY2hyb25pY0NhdGVnb3J5UmVwcmVzZW50YXRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2N1c3RvbS1leHBhbnNpb24taXRlbT5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gIGltcG9ydCBDdXN0b21FeHBhbnNpb25JdGVtIGZyb20gJy4vQ3VzdG9tRXhwYW5zaW9uSXRlbS52dWUnXG4gIGltcG9ydCBDb2xvcml6ZUljb24gZnJvbSAnLi9Db2xvcml6ZUljb24udnVlJ1xuICBpbXBvcnQgRHJvcFpvbmUgZnJvbSAnLi9Ecm9wWm9uZS52dWUnXG4gIGltcG9ydCBEcmFnRWxlbWVudCBmcm9tICcuL0RyYWdFbGVtZW50LnZ1ZSdcbiAgaW1wb3J0IEVsZW1lbnRNZW51IGZyb20gJy4vRWxlbWVudE1lbnUudnVlJ1xuICBpbXBvcnQgR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uIGZyb20gJy4vR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBtb2RlbGZvbGRlcklkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxuICAgICAgY3VycmVudEludGVydmlld0lkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9XG4gIH0pXG5cbiAgY29uc3QgbW9kZWxmb2xkZXIgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5nZXRGb2xkZXIocHJvcHMubW9kZWxmb2xkZXJJZCkpXG5cbiAgZnVuY3Rpb24gZGVidWcgKCkge1xuICAgICAgKHdpbmRvdyBhcyBhbnkpLm1vZGVsZm9sZGVyID0gbW9kZWxmb2xkZXIudmFsdWVcbiAgICAgIGNvbnNvbGUubG9nKFwiTW9kZWxmb2xkZXJcIiwgbW9kZWxmb2xkZXIudmFsdWUpXG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkTW9kZWxGb2xkZXIgKG1vZGVsZm9sZGVySWQ6IHN0cmluZykge1xuICAgICAgc3RvcmUudXBkYXRlTW9kZWxGb2xkZXIobW9kZWxmb2xkZXJJZCwgeyBwYXJlbnRJZDogcHJvcHMubW9kZWxmb2xkZXJJZCB9KVxuICB9XG5cbiAgY29uc3QgbW9kZWxmb2xkZXJOYW1lID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gbW9kZWxmb2xkZXIudmFsdWUgPyBtb2RlbGZvbGRlci52YWx1ZS5uYW1lIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAodmFsdWU6IHN0cmluZykge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vZGVsRm9sZGVyKHByb3BzLm1vZGVsZm9sZGVySWQsIHsgbmFtZTp2YWx1ZSB9KVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vZGVsZm9sZGVyQ29sb3IgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiBtb2RlbGZvbGRlci52YWx1ZSA/IG1vZGVsZm9sZGVyLnZhbHVlLmNvbG9yIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAoY29sb3I6IHN0cmluZykge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vZGVsRm9sZGVyKHByb3BzLm1vZGVsZm9sZGVySWQsIHsgY29sb3IgfSlcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBleHBhbmQgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiBtb2RlbGZvbGRlci52YWx1ZSA/IG1vZGVsZm9sZGVyLnZhbHVlLmlzRXhwYW5kZWQgOiB0cnVlXG4gICAgICB9LFxuICAgICAgc2V0IChpc0V4cGFuZGVkOiBib29sZWFuKSB7XG4gICAgICAgICAgc3RvcmUudXBkYXRlTW9kZWxGb2xkZXIocHJvcHMubW9kZWxmb2xkZXJJZCwgeyBpc0V4cGFuZGVkIH0pXG4gICAgICB9XG4gIH0pXG5cbiAgaW1wb3J0IHR5cGUgeyBOYW1lZEFjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvdXRpbC50cydcblxuICBjb25zdCBtZW51QWN0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbnM6IE5hbWVkQWN0aW9uW10gPSBbXG4gICAgICAgICAgWyBgQWRkIGEgZm9sZGVyYCwgKCkgPT4gc3RvcmUuYWRkTW9kZWxGb2xkZXIocHJvcHMubW9kZWxmb2xkZXJJZCwgXCJuZXdmb2xkZXJcIikgXSxcbiAgICAgICAgICBbIGBBZGQgYSBjYXRlZ29yeWAsICgpID0+IG1vZGVsZm9sZGVyLnZhbHVlICYmIHN0b3JlLmFkZEdlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcnkoXCJEaWFjaHJvbmljQ2F0ZWdvcnlcIiwgbW9kZWxmb2xkZXIudmFsdWUpIF1cbiAgICAgIF1cblxuICAgICAgaWYgKG1vZGVsZm9sZGVyLnZhbHVlICYmIG1vZGVsZm9sZGVyLnZhbHVlLnBhcmVudElkKSB7XG4gICAgICAgICAgYWN0aW9ucy5wdXNoKFsgXCJEZWxldGVcIiwgKCkgPT4gc3RvcmUuZGVsZXRlTW9kZWxGb2xkZXIocHJvcHMubW9kZWxmb2xkZXJJZCkgXSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY3Rpb25zXG4gIH0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuaGVhZGVyLWNsYXNzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tb2RlbGZvbGRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLm1vZGVsZm9sZGVyLWJvZHkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAubW9kZWxmb2xkZXItY2hpbGRyZW4ge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkIGJsYWNrO1xuICB9XG4gIC50cmFuc2l0aW9uYWwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNpdGlvbmFsLWNvbG9yKTtcbiAgfVxuICAudHJhbnNpdGlvbmFsOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiBjYWxjKCA1MCUgLSB2YXIoLS10cmFuc2l0aW9uYWwtYmFyLXdpZHRoKSAvIDIgKTtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGhlaWdodDogODB2aDtcbiAgICAgIHdpZHRoOiB2YXIoLS10cmFuc2l0aW9uYWwtYmFyLXdpZHRoKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zaXRpb25hbC1jb2xvcik7XG4gIH1cbiAgLm1vZGVsZm9sZGVyLWhhbmRsZSB7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAubW9kZWxmb2xkZXItaGFuZGxlOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IC44O1xuICB9XG4gIC5vbi1uYW1lLWhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLm1vZGVsZm9sZGVyLW5hbWUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLm1vZGVsZm9sZGVyLW5hbWU6aG92ZXIgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuICAucS1saXN0LS1kZW5zZSA+IC5xLWl0ZW0sIC5xLWl0ZW0tLWRlbnNlIHtcbiAgICBtaW4taGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmc6IDAgMnB4O1xuICB9XG4gIC5xLWl0ZW1fX3NlY3Rpb24tLWF2YXRhciB7XG4gICAgICBtaW4td2lkdGg6IDJweDtcbiAgfVxuICAucS1pdGVtX19zZWN0aW9uLS1zaWRlIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJnZW5lcmljZGlhY2hyb25pY2NhdGVnb3JpZXMtY29udGFpbmVyXCJcbiAgICAgICB2LWlmPVwicHJvamVjdFwiXG4gICAgICAgOmtleT1cInByb2plY3RJZFwiXG4gICAgICAgOmRhdGEtcHJvamVjdD1cInByb2plY3RJZFwiPlxuXG4gICAgPGRpdiBjbGFzcz1cInRleHQtYm9sZFwiPnt7IHRpdGxlIH19PC9kaXY+XG5cbiAgICA8TW9kZWxGb2xkZXJSZXByZXNlbnRhdGlvblxuICAgICAgOm1vZGVsZm9sZGVySWQ9XCJwcm9qZWN0Lm1vZGVsZm9sZGVyLmlkXCJcbiAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIiAvPlxuXG4gICAgPHEtYnRuXG4gICAgICBmbGF0XG4gICAgICBjbGFzcz1cImdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcmllcy1hZGRcIlxuICAgICAgZGVuc2VcbiAgICAgIHNpemU9XCJ4c1wiXG4gICAgICB0aXRsZT1cIkFkZCBnZW5lcmljIGRpYWNocm9uaWMgY2F0ZWdvcnlcIlxuICAgICAgQGNsaWNrPVwiYWRkR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeSgpXCJcbiAgICAgIGljb249XCJtZGktcGx1c1wiXG4gICAgICBuby1jYXBzPlxuICAgIDwvcS1idG4+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuXG4gIGltcG9ydCBNb2RlbEZvbGRlclJlcHJlc2VudGF0aW9uIGZyb20gJy4vTW9kZWxGb2xkZXJSZXByZXNlbnRhdGlvbi52dWUnXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgICAgIGN1cnJlbnRJbnRlcnZpZXdJZDogc3RyaW5nLFxuICAgICAgdGl0bGU/OiBzdHJpbmdcbiAgfT4oKVxuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcbiAgY29uc3QgaXN0b3JlID0gdXNlSW50ZXJmYWNlU3RvcmUoKVxuXG4gIGNvbnN0IHByb2plY3QgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5hY3RpdmF0ZVByb2plY3QocHJvcHMucHJvamVjdElkKSlcblxuICBmdW5jdGlvbiBhZGRHZW5lcmljRGlhY2hyb25pY0NhdGVnb3J5ICgpIHtcbiAgICAgIGlmIChwcm9qZWN0LnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBzdG9yZS5hZGRHZW5lcmljRGlhY2hyb25pY0NhdGVnb3J5KGlzdG9yZS5uZXdHRENJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnZhbHVlLm1vZGVsZm9sZGVyKVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IEdlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcnlcIiwgY2F0ZWdvcnkpXG4gICAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcmllcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5nZW5lcmljZGlhY2hyb25pY2NhdGVnb3JpZXMtYWRkIHtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl91c2VNb2RlbCIsIl9ob2lzdGVkXzEiLCJfaG9pc3RlZF8yIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVk5vZGUiLCJfd2l0aE1vZGlmaWVycyIsIl9yZW5kZXJTbG90IiwibW9tZW50cyIsIl9ob2lzdGVkXzMiLCJfb3BlbkJsb2NrIiwiX3dpdGhDdHgiLCJfbm9ybWFsaXplU3R5bGUiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX3dpdGhLZXlzIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVNBLE1BQUEsWUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFFSCxZQUFZO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFdBQVcsT0FBSyxDQUFFLEtBQUssSUFBSSxFQUFHLFNBQVMsQ0FBQztBQUFBLElBQzlDO0FBQUEsSUFFSSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixXQUFXLE9BQUs7QUFDZCxZQUFJLEVBQUUsV0FBVyxFQUFHLFFBQU87QUFDM0IsWUFBSSxPQUFPLEVBQUcsT0FBUSxZQUFZLE9BQU8sRUFBRyxPQUFRLFNBQVUsUUFBTztBQUNyRSxlQUFPLEVBQUcsTUFBTyxLQUFLLEVBQUcsQ0FBQyxLQUFNLEVBQUcsQ0FBQztBQUFBLE1BQ3RDO0FBQUEsSUFDTjtBQUFBLElBRUksaUJBQWlCO0FBQUEsSUFFakIsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBRVQsYUFBYSxDQUFFLE9BQU8sUUFBUSxNQUFNO0FBQUEsSUFDcEMsWUFBWSxDQUFFLE9BQU8sUUFBUSxNQUFNO0FBQUEsSUFFbkMsZ0JBQWdCLENBQUUsT0FBTyxRQUFRLE1BQU07QUFBQSxJQUN2QyxnQkFBZ0IsQ0FBRSxPQUFPLFFBQVEsTUFBTTtBQUFBLEVBQzNDO0FBQUEsRUFFRSxPQUFPLENBQUUsbUJBQW1CO0FBQUEsRUFFNUIsTUFBTyxPQUFPLEVBQUUsT0FBTyxLQUFJLEdBQUk7QUFDN0IsVUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFFLEVBQUUsSUFBSyxtQkFBa0I7QUFDNUMsVUFBTSxTQUFTLFFBQVEsT0FBTyxFQUFFO0FBRWhDLFVBQU0sVUFBVSxJQUFJLElBQUk7QUFDeEIsVUFBTSxXQUFXO0FBQUEsTUFDZixRQUFRLElBQUksSUFBSTtBQUFBLE1BQ2hCLE9BQU8sSUFBSSxJQUFJO0FBQUEsSUFDckI7QUFFSSxVQUFNLFVBQVU7QUFBQSxNQUFTLE1BQ3ZCLHNCQUNNLE1BQU0sZUFBZSxPQUFPLGtDQUFrQywwQkFBMEIsZ0JBQzNFLE1BQU0sWUFBWSxPQUFPLGFBQWEsVUFBVSxNQUNoRSxPQUFPLFVBQVUsT0FBTyxzQkFBc0I7QUFBQSxJQUN2RDtBQUVJLFVBQU0sV0FBVyxTQUFTLE1BQU8sTUFBTSxlQUFlLE9BQU8sV0FBVyxPQUFRO0FBQ2hGLFVBQU0sT0FBTyxTQUFTLE1BQU8sTUFBTSxZQUFZLE9BQU8sV0FBVyxPQUFRO0FBRXpFLFVBQU0saUJBQWlCLFNBQVMsTUFDOUIsTUFBTSxXQUFXLFNBQ2IsTUFBTSxTQUNMLE1BQU0sU0FBUyxNQUFNLENBQUUsSUFBSSxNQUFPLENBQUUsSUFBSSxRQUFRLENBQ3REO0FBRUQsYUFBUyxZQUFhLE9BQU87QUFDM0IsY0FBUSxNQUFNLFNBQVMsTUFBTSxRQUFRLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTTtBQUFBLElBQ2xFO0FBRUEsVUFBTSxTQUFTLFNBQVMsT0FBTztBQUFBLE1BQzdCLENBQUUsS0FBSyxLQUFLLEdBQUk7QUFBQSxRQUNkLENBQUUsU0FBUyxRQUFTLFlBQVksTUFBTSxVQUFVO0FBQUEsTUFDeEQ7QUFBQSxJQUNBLEVBQU07QUFFRixRQUFJLE9BQU8sWUFBWSxTQUFTLGNBQWM7QUFFOUMsYUFBUyxJQUFLLEtBQUs7QUFDakIsVUFBSSxJQUFJLFlBQVksTUFBTTtBQUN4QixjQUFNLE9BQU8sUUFBUSxNQUFNLHNCQUFxQixFQUFJLFNBQVMsS0FBSztBQUVsRSxnQkFBUSxNQUFNLGVBQWUsT0FBTyxPQUFPO0FBQzNDLHFCQUFhLE1BQU0sU0FBUyxNQUFNLE1BQU07QUFDeEMsa0JBQVUsS0FBSyxJQUFJLFlBQVksZUFBZSxNQUFPLENBQUMsR0FBSSxLQUFLLElBQUksZUFBZSxNQUFPLENBQUMsR0FBSSxNQUFNLFVBQVUsQ0FBQztBQUMvRyx3QkFBZ0IsTUFBTSxZQUFZLE9BQU8sSUFBSSxPQUN4QyxNQUFNLGVBQWUsT0FBTyxJQUFLLEdBQUcsS0FBSyxRQUFRLE9BQU8sS0FBSyxNQUM3RCxNQUFNLFNBQVMsTUFBTyxTQUFTLElBQUksSUFBSSxNQUFNLE9BQVE7QUFFMUQsZ0JBQVEsTUFBTSxVQUFVLElBQUksb0JBQW9CO0FBQ2hEO0FBQUEsTUFDRjtBQUVBLFVBQUksSUFBSSxZQUFZLE1BQU07QUFDeEIsWUFBSSxpQkFBaUIsTUFBTSxZQUFZO0FBQ3JDLGVBQUsscUJBQXFCLFlBQVk7QUFBQSxRQUN4QztBQUVBLGdCQUFRLE1BQU0sVUFBVSxPQUFPLG9CQUFvQjtBQUNuRDtBQUFBLE1BQ0Y7QUFFQSxZQUFNLE1BQU0sVUFDUixnQkFDQyxJQUFJLGNBQWMsUUFBUSxLQUFLLEtBQ2hDLElBQUksU0FBVSxNQUFNLGVBQWUsT0FBTyxNQUFNLEdBQUc7QUFFdkQscUJBQWUsS0FBSyxJQUFJLFlBQVksZUFBZSxNQUFPLENBQUMsR0FBSSxLQUFLLElBQUksZUFBZSxNQUFPLENBQUMsR0FBSSxHQUFHLENBQUM7QUFFdkcsZUFBVSxLQUFLLEtBQUssRUFBRyxNQUFNLE1BQU8sU0FBUyxTQUFVLFlBQVksWUFBWTtBQUUvRSxVQUFJLE1BQU0sb0JBQW9CLFFBQVEsTUFBTSxlQUFlLGNBQWM7QUFDdkUsYUFBSyxxQkFBcUIsWUFBWTtBQUFBLE1BQ3hDO0FBQUEsSUFDRjtBQUVBLFVBQU0sZUFBZSxTQUFTLE1BQU07QUFFbEMsYUFBTyxDQUFFO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFVBQ0UsQ0FBRSxNQUFNLGVBQWUsT0FBTyxhQUFhLFlBQVksR0FBSTtBQUFBLFVBQzNELFNBQVM7QUFBQSxVQUNULE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUN2QjtBQUFBLE1BQ0EsQ0FBTztBQUFBLElBQ0gsQ0FBQztBQUVELGFBQVMsVUFBVyxLQUFLLFFBQVE7QUFDL0IsVUFBSSxNQUFNLE9BQVEsSUFBSztBQUNyQixhQUFLLHFCQUFxQixPQUFRLENBQUMsQ0FBRTtBQUFBLE1BQ3ZDLFdBQ1MsTUFBTSxPQUFRLElBQUs7QUFDMUIsYUFBSyxxQkFBcUIsT0FBUSxDQUFDLENBQUU7QUFBQSxNQUN2QztBQUFBLElBQ0Y7QUFFQSxVQUFNLE1BQU0sTUFBTSxZQUFZLE9BQUs7QUFDakMsZ0JBQVUsR0FBRyxlQUFlLEtBQUs7QUFBQSxJQUNuQyxDQUFDO0FBRUQsVUFBTSxNQUFNLE1BQU0sUUFBUSxNQUFNO0FBQzlCLGVBQVMsTUFBTTtBQUNiLGtCQUFVLE1BQU0sWUFBWSxlQUFlLEtBQUs7QUFBQSxNQUNsRCxDQUFDO0FBQUEsSUFDSCxDQUFDO0FBRUQsV0FBTyxNQUFNO0FBQ1gsWUFBTSxRQUFRO0FBQUEsUUFDWixFQUFFLE9BQU87QUFBQSxVQUNQLEtBQUssU0FBUztBQUFBLFVBQ2QsT0FBTztBQUFBLFlBQ0wsMENBQTBDLE1BQU0sWUFBWSxPQUFPLFNBQVM7QUFBQSxZQUM1RSxNQUFNO0FBQUEsVUFDbEI7QUFBQSxVQUNVLE9BQU8sT0FBTyxNQUFNO0FBQUEsUUFDOUIsR0FBVyxNQUFNLE1BQU0sTUFBTSxDQUFDO0FBQUEsUUFFdEIsRUFBRSxPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsWUFDTDtBQUFBLFlBQ0EsTUFBTTtBQUFBLFVBQ2xCO0FBQUEsVUFDVSxPQUFPLE1BQU07QUFBQSxVQUNiLGlCQUFpQixNQUFNLFlBQVksT0FBTyxTQUFTO0FBQUEsUUFDN0QsR0FBVztBQUFBLFVBQ0Q7QUFBQSxZQUNFO0FBQUEsWUFDQSxFQUFFLE9BQU8sMkNBQTBDO0FBQUEsWUFDbkQsTUFBTSxNQUFNLFNBQVM7QUFBQSxZQUNyQjtBQUFBLFlBQ0EsTUFBTSxZQUFZO0FBQUEsWUFDbEIsTUFBTSxhQUFhO0FBQUEsVUFDL0I7QUFBQSxRQUNBLENBQVM7QUFBQSxRQUVELEVBQUUsT0FBTztBQUFBLFVBQ1AsS0FBSyxTQUFTO0FBQUEsVUFDZCxPQUFPO0FBQUEsWUFDTCx5Q0FBeUMsTUFBTSxZQUFZLE9BQU8sS0FBSztBQUFBLFlBQ3ZFLE1BQU07QUFBQSxVQUNsQjtBQUFBLFVBQ1UsT0FBTyxPQUFPLE1BQU07QUFBQSxRQUM5QixHQUFXLE1BQU0sTUFBTSxLQUFLLENBQUM7QUFBQSxNQUM3QjtBQUVNLGFBQU8sRUFBRSxPQUFPO0FBQUEsUUFDZCxPQUFPLFFBQVE7QUFBQSxRQUNmLEtBQUs7QUFBQSxNQUNiLEdBQVMsV0FBVyxNQUFNLFNBQVMsS0FBSyxDQUFDO0FBQUEsSUFDckM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMvS0MsVUFBTSxhQUFhQSxTQUFXLFNBQUEsWUFBa0I7QUFFaEQsVUFBTSxZQUFZLFNBQVMsTUFBTTtBQUM3QixhQUFPLFdBQVcsUUFBUSxtQ0FBbUM7QUFBQSxJQUNqRSxDQUFDOzs7Ozs7QUFoQ00sTUFBQUMsZUFBQSxFQUFBLE9BQU0sb0NBQUE7QUFRTixNQUFBQyxlQUFBLEVBQUEsT0FBTSxpQkFBQTs7c0JBVGJDLG1CQVlNLE9BQUE7QUFBQSxJQVpBLE9BQUtDLGVBQUUsT0FBQSxTQUFTO0FBQUEsRUFBQSxHQUFBO0FBQUEsSUFDcEJDLGdCQU9NLE9BUE5KLGNBT007QUFBQSxNQU5KSyxZQUltRCxPQUFBO0FBQUEsUUFIakQsT0FBS0YsZUFBQSxDQUFDLGtCQUNFLE9BQUEsZUFBZSxDQUFBO0FBQUEsUUFDdEIsU0FBSyxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQUcsY0FBQSxDQUFBLFdBQU8sT0FBQSxhQUFVLENBQUksT0FBQSxZQUFVLENBQUEsTUFBQSxDQUFBO0FBQUEsUUFDcEMsTUFBTSxvQkFBYSxPQUFBLGVBQWUsT0FBQTtBQUFBLE1BQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLE1BQUEsQ0FBQTtBQUFBLE1BQ3JDQyxXQUEyQixLQUFBLFFBQUEsVUFBQSxDQUFBLEdBQUEsUUFBQSxJQUFBO0FBQUEsSUFBQSxDQUFBO0FBQUEsSUFFN0JILGdCQUVNLE9BRk5ILGNBRU07QUFBQSxNQURKTSxXQUFhLEtBQUEsUUFBQSxXQUFBLENBQUEsR0FBQSxRQUFBLElBQUE7QUFBQSxJQUFBLENBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUNtSGpCLFVBQU0sU0FBUyxrQkFBQTtBQUVmLFVBQU0sUUFBUSxnQkFBQTtBQU9kLFVBQU0sUUFBUTtBQUlkLFVBQU0sWUFBWSxJQUFJLElBQUk7QUFFMUIsVUFBTSxTQUFTLFVBQUE7QUFFZixVQUFNLDRCQUE0QixTQUFTLE1BQU0sTUFBTSw2QkFBNkIsTUFBTSxVQUFVLENBQUM7QUFFckcsYUFBUyxRQUFTO0FBQ2IsYUFBZSw0QkFBNEIsMEJBQTBCO0FBQ3RFLGNBQVEsSUFBSSw2QkFBNkIsMEJBQTBCLEtBQUs7QUFBQSxJQUM1RTtBQUVBLFVBQU0sVUFBVSxTQUFTLE1BQWdCO0FBQ3JDLGFBQU8sMEJBQTBCLE9BQU8sV0FBVyxDQUFBO0FBQUEsSUFDdkQsQ0FBQztBQUVELFVBQU0saUJBQWlCLFNBQVMsTUFBTSxRQUFRLE9BQU8sT0FBTyxDQUFDLE1BQWMsRUFBRSxnQkFBZ0IsTUFBTSxrQkFBa0IsS0FBSyxDQUFBLENBQUU7QUFFNUgsVUFBTSxzQkFBc0IsU0FBUztBQUFBLE1BQ2pDLE1BQU87QUFDSCxlQUFPLDBCQUEwQixRQUFRLDBCQUEwQixNQUFNLE9BQU87QUFBQSxNQUNwRjtBQUFBLE1BQ0EsSUFBSyxPQUFlO0FBQ2hCLGNBQU0sY0FBYywwQkFBMEIsT0FBb0MsRUFBRSxNQUFNLE9BQU87QUFBQSxNQUNyRztBQUFBLElBQUEsQ0FDSDtBQUVELFVBQU0sZ0JBQWdCLFNBQVM7QUFBQSxNQUMzQixNQUFPO0FBQ0gsZUFBTywwQkFBMEIsT0FBTyxTQUFTO0FBQUEsTUFDckQ7QUFBQSxNQUNBLElBQUssT0FBZTtBQUNoQixjQUFNLGNBQWMsMEJBQTBCLE9BQW9DLEVBQUUsT0FBYTtBQUFBLE1BQ3JHO0FBQUEsSUFBQSxDQUNIO0FBRUQsVUFBTSwrQkFBK0IsU0FBUyxNQUFNO0FBQ2hELFlBQU0sUUFBUSxlQUFlLE1BQU07QUFDbkMsVUFBSSxPQUFPO0FBQ1AsZUFBTyxjQUFjLEtBQUs7QUFBQSxNQUM5QixPQUFPO0FBQ0gsZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNKLENBQUM7QUFFRCxVQUFNLGVBQWUsU0FBUyxNQUFNO0FBQ2hDLFVBQUksU0FBUztBQUNiLFlBQU0sUUFBUSxRQUFRLE1BQU07QUFDNUIsVUFBSSxPQUFPO0FBQ1AsaUJBQVMsY0FBYyxLQUFLO0FBQUEsTUFDaEMsT0FBTztBQUNILGlCQUFTO0FBQUEsTUFDYjtBQUNBLGFBQU87QUFBQSxJQUNYLENBQUM7QUFFRCxhQUFTLGdCQUFpQixVQUFrQjtBQUN4QyxhQUFPLHVCQUF1QixRQUFRO0FBQUEsSUFDMUM7QUFFQSxhQUFTLFlBQWFDLFVBQXdCO0FBQzFDLFlBQU0sT0FBTyxNQUFNLFFBQUE7QUFDbkIsWUFBTSxRQUFRLE9BQU8sWUFBWSxLQUFLLFVBQVUsTUFBTSxJQUFJLENBQUMsTUFBaUIsQ0FBRSxFQUFFLElBQUksRUFBRSxLQUFNLENBQUMsQ0FBQztBQUU5RixhQUFPLE9BQU8sUUFBUSxRQUFRQSxVQUFTLGFBQWEsQ0FBQyxFQUNoRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFFLE1BQU0sRUFBRSxHQUFJLElBQW1CLE1BQU8sQ0FBQztBQUFBLElBQ3JFO0FBRUEsYUFBUyxVQUFXLGVBQXVCO0FBQ3ZDLGFBQU8sS0FBSztBQUFBLFFBQ1IsT0FBTztBQUFBLFVBQ0gsS0FBSztBQUFBLFFBQUE7QUFBQSxNQUNULENBQ0gsRUFBRSxNQUFNLENBQUEsTUFBSztBQUNWLGdCQUFRLElBQUksOEJBQThCLENBQUMsRUFBRTtBQUFBLE1BQ2pELENBQUM7QUFBQSxJQUNMO0FBRUEsYUFBUyxpQ0FBa0MsWUFBb0I7QUFDM0QsVUFBSSwwQkFBMEIsT0FBTztBQUNqQyxjQUFNLGdDQUFnQyxZQUFZO0FBQUEsVUFDOUMsVUFBVSxNQUFNO0FBQUEsVUFDaEIsUUFBUSwwQkFBMEIsTUFBTTtBQUFBLFFBQUEsQ0FDM0M7QUFBQSxNQUNMO0FBQUEsSUFDSjtBQUVBLGFBQVMsY0FBZSxVQUFrQjtBQUN0QyxZQUFNO0FBQUEsUUFBcUMsTUFBTTtBQUFBLFFBQ047QUFBQSxNQUFBO0FBQUEsSUFDL0M7QUFHQSxVQUFNLGNBQTZCO0FBQUEsTUFDL0IsQ0FBRSxtQkFBbUIsTUFBTSwwQkFBMEIsU0FBUyxNQUFNLGdDQUFnQyxzQkFBc0IsMEJBQTBCLEtBQUssQ0FBRTtBQUFBLE1BQzNKLENBQUUsVUFBVSxNQUFNLE1BQU0sZ0NBQWdDLE1BQU0sVUFBVSxDQUFFO0FBQUEsTUFDMUUsQ0FBRSxTQUFTLE1BQU0sTUFBQSxDQUFRO0FBQUEsSUFBQTs7Ozs7OztBQS9NakIsTUFBQVAsZUFBQSxFQUFBLE9BQU0sa0NBQUE7QUEwQ1EsTUFBQVEsZUFBQSxFQUFBLE9BQU0seUJBQUE7QUF5QnZCLE1BQUEsYUFBQSxFQUFBLE9BQU0scUNBQUE7OztBQTVGSixTQUFBLE9BQUEsNkJBQUFDLFVBQUEsR0FEWFIsbUJBc0dNLE9BQUE7QUFBQSxJQUFBLEtBQUE7QUFBQSxJQXRHRCxPQUFNO0FBQUEsSUFFTCxrQ0FBZ0MsT0FBQTtBQUFBLEVBQUEsR0FBQTtBQUFBLElBQ3BDRyxZQWtHd0IsT0FBQSxxQkFBQSxHQUFBO0FBQUEsTUFqR3RCLE9BQU07QUFBQSxNQUNMLHFCQUFpQixFQUFBLGFBQWlCLE9BQUEsMEJBQTBCLFVBQVUsVUFBTSxFQUFBO0FBQUEsSUFBQSxHQUFBO0FBQUEsTUFHNUQsUUFBTU0sUUFDckIsTUFnRlc7QUFBQSxRQWhGWE4sWUFnRlcsT0FBQSxVQUFBLEdBQUE7QUFBQSxVQWhGRCxNQUFLO0FBQUEsVUFDTCxPQUFNO0FBQUEsVUFDTixPQUFNO0FBQUEsVUFDTCw2QkFBMkIsT0FBQTtBQUFBLFVBQzNCLFVBQVEsT0FBQTtBQUFBLFFBQUEsR0FBQTtBQUFBLDJCQUNqQixNQTBFYztBQUFBLFlBMUVkQSxZQTBFYyxPQUFBLGFBQUEsR0FBQTtBQUFBLGNBekVaLE9BQU07QUFBQSxjQUNMLE9BQUtPLGVBQUEsRUFBQSxpQkFBcUIsT0FBQSwwQkFBMEIsU0FBSyxlQUFBO0FBQUEsY0FDekQsU0FBTyxPQUFBO0FBQUEsY0FDUixNQUFLO0FBQUEsY0FDSixNQUFNLE9BQUEsMEJBQTBCO0FBQUEsWUFBQSxHQUFBO0FBQUEsK0JBQ2pDLE1BSTJCO0FBQUEsZ0JBSjNCUCxZQUkyQixPQUFBO0FBQUEsa0JBSHpCLEtBQUk7QUFBQSxrQkFDSixPQUFNO0FBQUEsa0JBQ04sTUFBSztBQUFBLGtCQUNMLE1BQUs7QUFBQSxnQkFBQSxHQUFBLE1BQUEsR0FBQTtBQUFBLGdCQUNQRCxnQkF3RE8sUUF4RFBILGNBd0RPO0FBQUEsa0JBQUFZLGdCQUFBQyxnQkF0REYsT0FBQSwwQkFBMEIsSUFBSSxJQUFHLEtBQ3BDLENBQUE7QUFBQSxrQkFBQVQsWUFxQnFDLE1BQUE7QUFBQSxvQkFwQmxDLE9BQU8sT0FBQTtBQUFBLG9CQUNSLE1BQUs7QUFBQSxvQkFDTCxPQUFBO0FBQUEsb0JBQ0EsT0FBQTtBQUFBLGtCQUFBLEdBQUE7QUFBQSxxQ0FDQSxNQWVTO0FBQUEsc0JBZlRBLFlBZVMsT0FBQSxFQUFBLE9BQUEsU0FmRCxHQUFNO0FBQUEsd0JBQVEsU0FBQU0sUUFDZCxNQUFnQztBQUFBLDJCQUFBRCxVQUFBLElBQUEsR0FBdENSLG1CQWFNYSxVQUFBLE1BQUFDLFdBYmlCLE9BQUEsZ0JBQWMsQ0FBeEIsV0FBTTtnREFBbkJkLG1CQWFNLE9BQUE7QUFBQSw4QkFaQSxPQUFNO0FBQUEsOEJBQ0wsS0FBSyxPQUFPO0FBQUEsNEJBQUEsR0FBQTtBQUFBLDhCQUNqQkcsWUFTUSxNQUFBO0FBQUEsZ0NBUkwsT0FBTyxPQUFPO0FBQUEsZ0NBQ2YsT0FBTTtBQUFBLGdDQUNOLFdBQUE7QUFBQSxnQ0FDQSxNQUFBO0FBQUEsZ0NBQ0MsU0FBSyxDQUFBLFdBQUUsT0FBQSxnQkFBZ0IsT0FBTyxFQUFFO0FBQUEsZ0NBQ2pDLE1BQUs7QUFBQSxnQ0FDSixPQUFLTyxlQUFBLEVBQUEsaUJBQXFCLE9BQU8sU0FBSyxlQUFBO0FBQUEsZ0NBQ3ZDLE1BQUs7QUFBQSw4QkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsV0FBQSxPQUFBLENBQUE7QUFBQTs7Ozs7c0NBR0YsTUFDVEUsZ0JBQUcsc0JBQWUsTUFBTSxHQUFBLENBQUE7QUFBQSxvQkFBQSxDQUFBO0FBQUE7OzREQUFXLE9BQ3JDLEVBQUE7QUFBQSxrQkFBQVQsWUFxQjhCLE1BQUE7QUFBQSxvQkFwQjNCLE9BQU8sT0FBQTtBQUFBLG9CQUNSLE1BQUs7QUFBQSxvQkFDTCxPQUFBO0FBQUEsb0JBQ0EsT0FBQTtBQUFBLGtCQUFBLEdBQUE7QUFBQSxxQ0FDQSxNQWVTO0FBQUEsc0JBZlRBLFlBZVMsT0FBQSxFQUFBLE9BQUEsU0FmRCxHQUFNO0FBQUEsd0JBQVEsU0FBQU0sUUFHZixNQUErQztBQUFBLDJCQUFBRCxVQUFBLElBQUEsR0FGcERSLG1CQWFNYSxVQUFBLE1BQUFDLFdBWHlCLE9BQUEsWUFBWSxPQUFBLE9BQU8sR0FBQSxDQUFBLENBQXBDLE1BQU0sS0FBSyxNQUFBO2dEQUZ6QmQsbUJBYU0sT0FBQTtBQUFBLDhCQWJELE9BQU07QUFBQSw4QkFDTCxLQUFLO0FBQUEsNEJBQUEsR0FBQTtBQUFBLDhCQUVURyxZQVFRLE1BQUE7QUFBQSxnQ0FSRCxPQUFNO0FBQUEsZ0NBQ04sT0FBTTtBQUFBLGdDQUNOLFdBQUE7QUFBQSxnQ0FDQSxNQUFBO0FBQUEsZ0NBQ0MsT0FBTztBQUFBLGdDQUNSLE1BQUs7QUFBQSxnQ0FDSixTQUFLLENBQUEsV0FBRSxPQUFBLFVBQVUsSUFBSTtBQUFBLGdDQUN0QixNQUFLO0FBQUEsOEJBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLFNBQUEsQ0FBQTtBQUFBLDhCQUVaRCxnQkFBMkQsVUFBM0RLLGNBQTJESyxnQkFBakIsS0FBSyxHQUFBLENBQUE7QUFBQSw0QkFBQSxDQUFBO0FBQUE7Ozs7c0NBRTFDLE1BQ1RBLGdCQUFHLGVBQVEsTUFBTSxHQUFBLENBQUE7QUFBQSxvQkFBQSxDQUFBO0FBQUE7O2tCQUNuQlQsWUFRZSxZQUFBO0FBQUEsb0JBUGIsS0FBSTtBQUFBLG9CQUFBLFlBQ0ssT0FBQTtBQUFBLG9CQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLHNCQUFtQjtBQUFBLG9CQUM1QixhQUFBO0FBQUEsa0JBQUEsR0FBQTtBQUFBLG9CQUVBLFNBQUFNLFFBQUEsQ0FFNEQsVUFIL0M7QUFBQSxzQkFDYk4sWUFFNEQsUUFBQTtBQUFBLHdCQUFBLFlBRjFDLE1BQU07QUFBQSx3QkFBQSx1QkFBQSxDQUFBLFdBQU4sTUFBTSxRQUFLO0FBQUEsd0JBQ25CLFNBQUssT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFHLE9BQU8sT0FBNEIsT0FBQTtBQUFBLHdCQUM1QyxPQUFBO0FBQUEsd0JBQU0sV0FBQTtBQUFBLHdCQUFVLFNBQUE7QUFBQSx3QkFBUyxTQUFLWSxTQUFRLE1BQU0sS0FBRyxDQUFBLE9BQUEsQ0FBQTtBQUFBLHNCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsY0FBQSx1QkFBQSxTQUFBLENBQUE7QUFBQTs7OztnQkFHNURaLFlBQVcsTUFBQTtBQUFBLGdCQUNYQSxZQUMyQixPQUFBLGFBQUEsR0FBQSxFQUF4QixTQUFTLE9BQUEsYUFBVztBQUFBLGdCQUN2QkEsWUFFNEIsT0FBQSxjQUFBLEdBQUE7QUFBQSxrQkFEMUIsT0FBTTtBQUFBLGtCQUFBLFlBQ0csT0FBQTtBQUFBLGtCQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLGdCQUFhO0FBQUEsZ0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxZQUFBLENBQUE7QUFBQTs7Ozs7Ozt1QkFNOUIsTUFPTTtBQUFBLFFBUE5ELGdCQU9NLE9BUE4sWUFPTTtBQUFBLFdBQUFNLFVBQUEsSUFBQSxHQU5KUixtQkFLSWEsVUFBQSxNQUFBQyxXQUpZLE9BQUEsMEJBQTBCLFVBQVEsQ0FBekMsUUFBRztnQ0FEWkUsWUFLSSxvREFBQTtBQUFBLGNBSEQsS0FBSyxJQUFJO0FBQUEsY0FDVCxZQUFZLElBQUk7QUFBQSxjQUNoQixvQkFBb0IsT0FBQTtBQUFBLFlBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxjQUFBLG9CQUFBLENBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCN0IsVUFBTSxRQUFRLGdCQUFBO0FBRWQsVUFBTSxRQUFRO0FBS2QsVUFBTSxjQUFjLFNBQVMsTUFBTSxNQUFNLFVBQVUsTUFBTSxhQUFhLENBQUM7QUFFdkUsYUFBUyxRQUFTO0FBQ2IsYUFBZSxjQUFjLFlBQVk7QUFDMUMsY0FBUSxJQUFJLGVBQWUsWUFBWSxLQUFLO0FBQUEsSUFDaEQ7QUFFQSxhQUFTLG1CQUFvQixlQUF1QjtBQUNoRCxZQUFNLGtCQUFrQixlQUFlLEVBQUUsVUFBVSxNQUFNLGVBQWU7QUFBQSxJQUM1RTtBQUVBLFVBQU0sa0JBQWtCLFNBQVM7QUFBQSxNQUM3QixNQUFPO0FBQ0gsZUFBTyxZQUFZLFFBQVEsWUFBWSxNQUFNLE9BQU87QUFBQSxNQUN4RDtBQUFBLE1BQ0EsSUFBSyxPQUFlO0FBQ2hCLGNBQU0sa0JBQWtCLE1BQU0sZUFBZSxFQUFFLE1BQUssT0FBTztBQUFBLE1BQy9EO0FBQUEsSUFBQSxDQUNIO0FBRUQsVUFBTSxtQkFBbUIsU0FBUztBQUFBLE1BQzlCLE1BQU87QUFDSCxlQUFPLFlBQVksUUFBUSxZQUFZLE1BQU0sUUFBUTtBQUFBLE1BQ3pEO0FBQUEsTUFDQSxJQUFLLE9BQWU7QUFDaEIsY0FBTSxrQkFBa0IsTUFBTSxlQUFlLEVBQUUsT0FBTztBQUFBLE1BQzFEO0FBQUEsSUFBQSxDQUNIO0FBRUQsVUFBTSxTQUFTLFNBQVM7QUFBQSxNQUNwQixNQUFPO0FBQ0gsZUFBTyxZQUFZLFFBQVEsWUFBWSxNQUFNLGFBQWE7QUFBQSxNQUM5RDtBQUFBLE1BQ0EsSUFBSyxZQUFxQjtBQUN0QixjQUFNLGtCQUFrQixNQUFNLGVBQWUsRUFBRSxZQUFZO0FBQUEsTUFDL0Q7QUFBQSxJQUFBLENBQ0g7QUFJRCxVQUFNLGNBQWMsU0FBUyxNQUFNO0FBQy9CLFlBQU0sVUFBeUI7QUFBQSxRQUMzQixDQUFFLGdCQUFnQixNQUFNLE1BQU0sZUFBZSxNQUFNLGVBQWUsV0FBVyxDQUFFO0FBQUEsUUFDL0UsQ0FBRSxrQkFBa0IsTUFBTSxZQUFZLFNBQVMsTUFBTSw2QkFBNkIsc0JBQXNCLFlBQVksS0FBSyxDQUFFO0FBQUEsTUFBQTtBQUcvSCxVQUFJLFlBQVksU0FBUyxZQUFZLE1BQU0sVUFBVTtBQUNqRCxnQkFBUSxLQUFLLENBQUUsVUFBVSxNQUFNLE1BQU0sa0JBQWtCLE1BQU0sYUFBYSxDQUFFLENBQUM7QUFBQSxNQUNqRjtBQUNBLGFBQU87QUFBQSxJQUNYLENBQUM7Ozs7Ozs7QUExR2UsTUFBQWpCLGVBQUEsRUFBQSxPQUFNLG1CQUFBO0FBaUJiLE1BQUEsYUFBQSxFQUFBLE9BQU0sdUJBQUE7OztBQXZDSixTQUFBLE9BQUEsZUFBQVMsVUFBQSxHQURYUixtQkEwRE0sT0FBQTtBQUFBLElBQUEsS0FBQTtBQUFBLElBMURELE9BQU07QUFBQSxJQUVMLE9BQUtVLGVBQUEsRUFBQSxpQkFBcUIsT0FBQSxZQUFZLFNBQUssZUFBQTtBQUFBLElBQzNDLG9CQUFrQixPQUFBO0FBQUEsRUFBQSxHQUFBO0FBQUEsSUFFdEJQLFlBbUR3QixPQUFBLHFCQUFBLEdBQUE7QUFBQSxNQWxEdEIsT0FBTTtBQUFBLE1BQUEsWUFDRyxPQUFBO0FBQUEsTUFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxTQUFNO0FBQUEsSUFBQSxHQUFBO0FBQUEsTUFHRSxRQUFNTSxRQUNyQixNQTBCVztBQUFBLFFBMUJYTixZQTBCVyxPQUFBLFVBQUEsR0FBQTtBQUFBLFVBMUJELE1BQUs7QUFBQSxVQUNMLE9BQU07QUFBQSxVQUNOLE9BQU07QUFBQSxVQUNMLGVBQWEsT0FBQTtBQUFBLFFBQUEsR0FBQTtBQUFBLDJCQUN0QixNQWtCYztBQUFBLFlBbEJkQSxZQWtCYyxPQUFBLGFBQUEsR0FBQTtBQUFBLGNBakJaLE1BQUs7QUFBQSxjQUNKLE1BQU0sT0FBQTtBQUFBLGNBQ04sU0FBS0MsY0FBTyxPQUFBLE9BQUssQ0FBQSxNQUFBLENBQUE7QUFBQSxZQUFBLEdBQUE7QUFBQSwrQkFDbEIsTUFHUztBQUFBLGdCQUhURCxZQUdTLE9BQUE7QUFBQSxrQkFGUCxNQUFLO0FBQUEsa0JBQ0wsTUFBSztBQUFBLGdCQUFBLENBQUE7QUFBQSxnQkFFUEQsZ0JBU08sUUFUUEgsY0FTTztBQUFBLGtCQUFBWSxnQkFBQUMsZ0JBVDJCLE9BQUEsZUFBZSxJQUFHLEtBQ2xELENBQUE7QUFBQSxrQkFBQVQsWUFJZSxZQUFBO0FBQUEsb0JBQUEsWUFKUSxPQUFBO0FBQUEsb0JBQUEsdUJBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLE9BQUEsa0JBQWU7QUFBQSxvQkFBRSxhQUFBO0FBQUEsa0JBQUEsR0FBQTtBQUFBLG9CQUN0QyxTQUFBTSxRQUFBLENBRTRELFVBSEM7QUFBQSxzQkFDN0ROLFlBRTRELFFBQUE7QUFBQSx3QkFBQSxZQUYxQyxNQUFNO0FBQUEsd0JBQUEsdUJBQUEsQ0FBQSxXQUFOLE1BQU0sUUFBSztBQUFBLHdCQUNuQixTQUFLLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBRyxPQUFPLE9BQTRCLE9BQUE7QUFBQSx3QkFDNUMsT0FBQTtBQUFBLHdCQUFNLFdBQUE7QUFBQSx3QkFBVSxTQUFBO0FBQUEsd0JBQVMsU0FBS1ksU0FBUSxNQUFNLEtBQUcsQ0FBQSxPQUFBLENBQUE7QUFBQSxzQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLGNBQUEsdUJBQUEsU0FBQSxDQUFBO0FBQUE7OztrQkFFMURaLFlBRUksT0FBQSxjQUFBLEdBQUE7QUFBQSxvQkFBQSxZQURPLE9BQUE7QUFBQSxvQkFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxtQkFBZ0I7QUFBQSxrQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBOzs7O1lBSS9CQSxZQUFXLE1BQUE7QUFBQSxZQUNYQSxZQUMyQixPQUFBLGFBQUEsR0FBQSxFQUF4QixTQUFTLE9BQUEsZUFBVyxNQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUE7QUFBQSxVQUFBLENBQUE7QUFBQTs7O3VCQUkzQixNQWNNO0FBQUEsUUFkTkQsZ0JBY00sT0FkTixZQWNNO0FBQUEsV0FBQU0sVUFBQSxJQUFBLEdBYkpSLG1CQUtNYSxVQUFBLE1BQUFDLFdBTFcsT0FBQSxZQUFZLFNBQU8sQ0FBeEIsTUFBQztnQ0FBYmQsbUJBS00sT0FBQTtBQUFBLGNBTGlDLEtBQUssRUFBRTtBQUFBLFlBQUEsR0FBQTtBQUFBLGNBQzVDRyxZQUc0QixzQ0FBQTtBQUFBLGdCQUZ6QixvQkFBb0IsT0FBQTtBQUFBLGdCQUNwQixlQUFlLEVBQUU7QUFBQSxjQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsc0JBQUEsZUFBQSxDQUFBO0FBQUE7O1dBR3RCSyxVQUFBLElBQUEsR0FBQVIsbUJBTU1hLFVBQUEsTUFBQUMsV0FOVyxPQUFBLFlBQVksNkJBQTJCLENBQTVDLE1BQUM7Z0NBQWJkLG1CQU1NLE9BQUE7QUFBQSxjQU5xRCxLQUFLLEVBQUU7QUFBQSxZQUFBLEdBQUE7QUFBQSxjQUV0RCxDQUFBLEVBQUUseUJBRFpnQixZQUkwQyxPQUFBLHlDQUFBLEdBQUE7QUFBQSxnQkFBQSxLQUFBO0FBQUEsZ0JBRnZDLG9CQUFvQixPQUFBO0FBQUEsZ0JBQ3BCLFlBQVksRUFBRTtBQUFBLGNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxzQkFBQSxZQUFBLENBQUEsS0FBQUMsbUJBQUEsSUFBQSxJQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CekIsVUFBTSxRQUFRO0FBTWQsVUFBTSxRQUFRLGdCQUFBO0FBQ2QsVUFBTSxTQUFTLGtCQUFBO0FBRWYsVUFBTSxVQUFVLFNBQVMsTUFBTSxNQUFNLGdCQUFnQixNQUFNLFNBQVMsQ0FBQztBQUVyRSxhQUFTLCtCQUFnQztBQUNyQyxVQUFJLFFBQVEsT0FBTztBQUNmLGNBQU0sV0FBVyxNQUFNO0FBQUEsVUFBNkIsT0FBTyxTQUFBO0FBQUEsVUFDUCxRQUFRLE1BQU07QUFBQSxRQUFBO0FBQ2xFLGdCQUFRLElBQUksaUNBQWlDLFFBQVE7QUFBQSxNQUN6RDtBQUFBLElBQ0o7Ozs7Ozs7QUE1Q08sTUFBQSxhQUFBLEVBQUEsT0FBTSxZQUFBOztBQUpGLFNBQUEsT0FBQSxXQUFBVCxVQUFBLEdBRFhSLG1CQXNCTSxPQUFBO0FBQUEsSUF0QkQsT0FBTTtBQUFBLElBRUwsS0FBSyxPQUFBO0FBQUEsSUFDTCxnQkFBYyxPQUFBO0FBQUEsRUFBQSxHQUFBO0FBQUEsSUFFbEJFLGdCQUF3QyxPQUF4QyxZQUF3Q1UsZ0JBQWQsT0FBQSxLQUFLLEdBQUEsQ0FBQTtBQUFBLElBRS9CVCxZQUU2QyxPQUFBLDJCQUFBLEdBQUE7QUFBQSxNQUQxQyxlQUFlLGVBQVEsWUFBWTtBQUFBLE1BQ25DLG9CQUFvQixPQUFBO0FBQUEsSUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLGlCQUFBLG9CQUFBLENBQUE7QUFBQSxJQUV2QkEsWUFTUSxNQUFBO0FBQUEsTUFSTixNQUFBO0FBQUEsTUFDQSxPQUFNO0FBQUEsTUFDTixPQUFBO0FBQUEsTUFDQSxNQUFLO0FBQUEsTUFDTCxPQUFNO0FBQUEsTUFDTCxTQUFLLHNDQUFFLE9BQUE7TUFDUixNQUFLO0FBQUEsTUFDTCxXQUFBO0FBQUEsSUFBQSxDQUFBO0FBQUE7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
