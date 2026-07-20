import { c as createComponent, aD as useRouterLinkProps, bo as useRouterLink, b as computed, w as watch, u as useDarkProps, g as getCurrentInstance, f as useDark, r as ref, ai as nextTick, h, i as hSlot, a5 as hDir, e as hMergeSlot, D as inject, E as emptyRenderFn, F as layoutKey, H as defineComponent, I as useProjectStore, J as useInterfaceStore, _ as _export_sfc, P as createElementBlock, L as openBlock, R as createVNode, K as createBlock, N as createCommentVNode, M as withCtx, a7 as QIcon, Y as withModifiers, W as createTextVNode, X as toDisplayString, Q as QBtn, a9 as createBaseVNode, S as Fragment, U as renderList, c9 as mergeModels, c6 as useModel, aV as renderSlot, ad as normalizeClass, bP as useRouter, ae as resolveComponent, af as normalizeStyle, bd as QInput, aq as withKeys, aG as QSeparator, aU as unref, ca as getCurrentScope, cb as onScopeDispose, O as onMounted, cc as createStaticVNode, bQ as storeToRefs, cd as BaseModel, ac as QCardSection, ab as QCard, ce as ellipsize, V as withDirectives, n as useTimeout, bM as onUnmounted } from "./index-CiMAoj4i.js";
import { u as useTabProps, b as useTabEmits, c as useTab, a as DragElement, C as ColorizeIcon, D as DropZone, Q as QTab, d as QTabs, e as QTabPanel, f as QTabPanels } from "./DropZone-f6qIp5Z-.js";
import { a as QFile, Q as QExpansionItem } from "./QExpansionItem-OUtvlgKl.js";
import { T as TouchPan, Q as QPopupEdit, N as NoteIcon, a as QSlider } from "./QSlider-DYCYGtt_.js";
import { Q as QToolbarTitle, b as QForm, a as QDrawer } from "./QForm-BcwXLHhi.js";
import { u as useQuasar, C as ClosePopup } from "./use-quasar-mvtQZmE0.js";
import { Q as QTooltip } from "./QTooltip-DlqOA9ek.js";
import { E as ElementMenu } from "./ElementMenu-BiQCGAIs.js";
import { g as groupBy, s as stripContextFromName, a as SpecificSynchronicCategoryRelation, J as JustificationRepresentation, S as SpecificSynchronicCategoryRepresentation, D as DescriptemRepresentation, A as AnnotatedText, b as ANNOTATION_COLORS, G as GenericCategoriesOverview } from "./SpecificSynchronicCategoryRepresentation-CCq8fbqd.js";
import { Q as QMenu, f as QItem } from "./format-C0jqf-wd.js";
import { Q as QSpace } from "./QSpace-DYBtBJtn.js";
import { Q as QBadge } from "./QBadge-BYtGv-2Q.js";
import { Q as QToolbar } from "./QToolbar-B6oXiRLf.js";
import { M as MomentNameInput } from "./MomentNameInput-B9Ajum85.js";
import { Q as QBtnToggle } from "./QBtnToggle-CyoE_mPi.js";
import { Q as QList } from "./QList-BLLSWVN_.js";
const QRouteTab = createComponent({
  name: "QRouteTab",
  props: {
    ...useRouterLinkProps,
    ...useTabProps
  },
  emits: useTabEmits,
  setup(props, { slots, emit }) {
    const routeData = useRouterLink({
      useDisableForRouterLinkProps: false
    });
    const { renderTab, $tabs } = useTab(
      props,
      slots,
      emit,
      {
        exact: computed(() => props.exact),
        ...routeData
      }
    );
    watch(
      () => `${props.name} | ${props.exact} | ${(routeData.resolvedLink.value || {}).href}`,
      $tabs.verifyRouteModel
    );
    return () => renderTab(routeData.linkTag.value, routeData.linkAttrs.value);
  }
});
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
const usePageStickyProps = {
  position: {
    type: String,
    default: "bottom-right",
    validator: (v) => [
      "top-right",
      "top-left",
      "bottom-right",
      "bottom-left",
      "top",
      "right",
      "bottom",
      "left"
    ].includes(v)
  },
  offset: {
    type: Array,
    validator: (v) => v.length === 2
  },
  expand: Boolean
};
function usePageSticky() {
  const { props, proxy: { $q } } = getCurrentInstance();
  const $layout = inject(layoutKey, emptyRenderFn);
  if ($layout === emptyRenderFn) {
    console.error("QPageSticky needs to be child of QLayout");
    return emptyRenderFn;
  }
  const attach = computed(() => {
    const pos = props.position;
    return {
      top: pos.indexOf("top") !== -1,
      right: pos.indexOf("right") !== -1,
      bottom: pos.indexOf("bottom") !== -1,
      left: pos.indexOf("left") !== -1,
      vertical: pos === "top" || pos === "bottom",
      horizontal: pos === "left" || pos === "right"
    };
  });
  const top = computed(() => $layout.header.offset);
  const right = computed(() => $layout.right.offset);
  const bottom = computed(() => $layout.footer.offset);
  const left = computed(() => $layout.left.offset);
  const style = computed(() => {
    let posX = 0, posY = 0;
    const side = attach.value;
    const dir = $q.lang.rtl === true ? -1 : 1;
    if (side.top === true && top.value !== 0) {
      posY = `${top.value}px`;
    } else if (side.bottom === true && bottom.value !== 0) {
      posY = `${-bottom.value}px`;
    }
    if (side.left === true && left.value !== 0) {
      posX = `${dir * left.value}px`;
    } else if (side.right === true && right.value !== 0) {
      posX = `${-dir * right.value}px`;
    }
    const css = { transform: `translate(${posX}, ${posY})` };
    if (props.offset) {
      css.margin = `${props.offset[1]}px ${props.offset[0]}px`;
    }
    if (side.vertical === true) {
      if (left.value !== 0) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${left.value}px`;
      }
      if (right.value !== 0) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${right.value}px`;
      }
    } else if (side.horizontal === true) {
      if (top.value !== 0) {
        css.top = `${top.value}px`;
      }
      if (bottom.value !== 0) {
        css.bottom = `${bottom.value}px`;
      }
    }
    return css;
  });
  const classes = computed(
    () => `q-page-sticky row flex-center fixed-${props.position} q-page-sticky--${props.expand === true ? "expand" : "shrink"}`
  );
  function getStickyContent(slots) {
    const content = hSlot(slots.default);
    return h(
      "div",
      {
        class: classes.value,
        style: style.value
      },
      props.expand === true ? content : [h("div", content)]
    );
  }
  return {
    $layout,
    getStickyContent
  };
}
const QPageSticky = createComponent({
  name: "QPageSticky",
  props: usePageStickyProps,
  setup(_, { slots }) {
    const { getStickyContent } = usePageSticky();
    return () => getStickyContent(slots);
  }
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "DetachedModelRepresentation",
  props: {
    projectId: {},
    modelId: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const istore = useInterfaceStore();
    const props = __props;
    const model = computed(() => {
      const m = store.getDetachedModel(props.projectId, props.modelId);
      return m;
    });
    const isActive = computed({
      get() {
        return model?.value?.proxy ? model.value.proxy.isActive : false;
      },
      set(active) {
        store.setActiveDetachedModel(props.projectId, props.modelId, active);
      }
    });
    function editDetachedModel(proxyModelId) {
      istore.setEditedSpecificSynchronicModelId(proxyModelId);
    }
    function debug() {
      window.detachedmodel = model.value;
      console.log("DetachedModel", { detachedmodel: model.value });
    }
    const menuActions = [
      ["Toggle active status", () => {
        isActive.value = !isActive.value;
      }],
      ["Delete", (model2) => {
        if (istore.editedSpecificSynchronicModelId === model2.proxy.id) {
          editDetachedModel("");
        }
        store.deleteDetachedModel(model2.id);
      }]
    ];
    const __returned__ = { store, istore, props, model, isActive, editDetachedModel, debug, menuActions, DragElement, ElementMenu };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$i = ["data-id"];
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "detached-model",
    "data-id": $props.modelId
  }, [
    createVNode($setup["DragElement"], {
      type: "detachedmodel",
      data: $props.modelId,
      onClick: withModifiers($setup.debug, ["meta"])
    }, {
      default: withCtx(() => [
        createVNode(QIcon, {
          class: "q-px-sm",
          flat: "",
          dense: "",
          size: "xs",
          name: $setup.isActive ? "mdi-graph" : "mdi-select-off"
        }, null, 8, ["name"])
      ]),
      _: 1
    }, 8, ["data"]),
    $setup.model ? (openBlock(), createBlock(QBtn, {
      key: 0,
      class: "detached-model-name",
      align: "left",
      flat: "",
      dense: "",
      "no-caps": "",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.editDetachedModel($setup.model.proxy.id))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($setup.model?.proxy.name), 1)
      ]),
      _: 1
    })) : createCommentVNode("", true),
    createVNode($setup["ElementMenu"], {
      actions: $setup.menuActions,
      parameter: $setup.model
    }, null, 8, ["parameter"])
  ], 8, _hoisted_1$i);
}
const DetachedModelRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j], ["__scopeId", "data-v-7da5d4fe"], ["__file", "DetachedModelRepresentation.vue"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "DetachedModelsRepresentation",
  props: {
    projectId: {},
    genericGraphs: {},
    currentInterviewId: {},
    title: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const istore = useInterfaceStore();
    const props = __props;
    const project = computed(() => {
      const p = store.getFullProject(props.projectId);
      return p;
    });
    function addDetachedModel() {
      const detachedModel = store.createDetachedModel(props.projectId, istore.newDetachedModelId());
      if (detachedModel) {
        istore.setEditedSpecificSynchronicModelId(detachedModel.proxy.id);
      }
      return detachedModel;
    }
    const __returned__ = { store, istore, props, project, addDetachedModel, DetachedModelRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$h = ["data-project"];
const _hoisted_2$h = { class: "header" };
const _hoisted_3$c = { class: "title text-bold" };
const _hoisted_4$8 = {
  key: 0,
  class: "detachedmodels-list flex column"
};
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "detachedmodels-container",
    key: $props.projectId,
    "data-project": $props.projectId
  }, [
    createBaseVNode("div", _hoisted_2$h, [
      createBaseVNode("span", _hoisted_3$c, toDisplayString($props.title), 1),
      createVNode(QBtn, {
        flat: "",
        dense: "",
        size: "xs",
        icon: "info",
        "no-caps": ""
      }, {
        default: withCtx(() => [
          createVNode(QTooltip, null, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createTextVNode("Detached models are synchronic models (trees) that are not linked to an interview. ", -1),
              createBaseVNode("br", null, null, -1),
              createTextVNode("They are used to propose the category names/children when editing.", -1),
              createBaseVNode("br", null, null, -1),
              createTextVNode(" Since they are also taken into account in the dynamic model generation, they also are used to detect inconsistencies. ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    $setup.project ? (openBlock(), createElementBlock("div", _hoisted_4$8, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.project.detachedmodels, (model) => {
        return openBlock(), createBlock($setup["DetachedModelRepresentation"], {
          projectId: $props.projectId,
          modelId: model.id,
          key: model.id
        }, null, 8, ["projectId", "modelId"]);
      }), 128))
    ])) : createCommentVNode("", true),
    createVNode(QBtn, {
      flat: "",
      class: "detachedmodel-add",
      dense: "",
      size: "xs",
      title: "Add detached model",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.addDetachedModel()),
      icon: "mdi-plus",
      "no-caps": ""
    })
  ], 8, _hoisted_1$h);
}
const DetachedModelsRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__scopeId", "data-v-24f1ae2f"], ["__file", "DetachedModelsRepresentation.vue"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$g = { class: "expansion-header row items-center" };
const _hoisted_2$g = { class: "expansion-body" };
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($setup.itemClass)
  }, [
    createBaseVNode("div", _hoisted_1$g, [
      createVNode(QIcon, {
        class: normalizeClass(["expansion-icon", $props.expandIconClass]),
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $setup.isExpanded = !$setup.isExpanded, ["stop"])),
        name: $setup.isExpanded ? $props.expandedIcon : $props.expandIcon
      }, null, 8, ["class", "name"]),
      renderSlot(_ctx.$slots, "header", {}, void 0, true)
    ]),
    createBaseVNode("div", _hoisted_2$g, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ], 2);
}
const CustomExpansionItem = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__scopeId", "data-v-e7755e11"], ["__file", "CustomExpansionItem.vue"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "GenericCategoryRepresentation",
  props: {
    genericcategory: {},
    genericGraphs: {},
    currentInterviewId: { default: "" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const istore = useInterfaceStore();
    const store = useProjectStore();
    const props = __props;
    const $q = useQuasar();
    const popupEdit = ref(null);
    const router = useRouter();
    function debug() {
      window.genericcategory = props.genericcategory;
      console.log("genericcategory", props.genericcategory);
    }
    const moments = computed(() => {
      const momentIds = props.genericcategory.instances.map((ssc) => props.genericGraphs.instanceIdToContainerInfo[ssc.id]?.momentId).filter((id) => !!id);
      return store.getMoments(momentIds);
    });
    const detachedModelInfos = computed(() => {
      const modelInfos = props.genericcategory.instances.map((ssc) => props.genericGraphs.instanceIdToContainerInfo[ssc.id]).filter((info) => info && info.detachedModelId);
      return modelInfos;
    });
    const currentMoments = computed(() => moments.value?.filter((m) => m.interviewId === props.currentInterviewId) || []);
    const isAggregation = computed(() => props.genericcategory.abstractionType == "aggregation");
    const isSpecialization = computed(() => props.genericcategory.abstractionType == "specialization");
    const genericcategoryName = computed({
      get() {
        return props.genericcategory ? props.genericcategory.name : "";
      },
      set(value) {
        const instances = props.genericcategory.instances;
        console.log(`Renaming ${props.genericcategory.name} to ${value}`);
        $q.dialog({
          title: "Confirm category renaming",
          html: true,
          message: `Do you confirm the renaming of ${instances.length} Specific Synchronic Categories from <strong>${props.genericcategory.name}</strong> to <strong>${value}</strong>?`,
          cancel: true,
          persistent: true
        }).onOk(() => {
          instances.forEach((ssc) => {
            store.updateElement(ssc, { name: value });
          });
          $q.notify({
            type: "info",
            message: `Renamed ${instances.length} categories as "${value}"`
          });
        });
      }
    });
    const categoryColor = computed({
      get() {
        return props.genericcategory.color;
      },
      set(color) {
        store.updateSynchronicCategoryColor(props.genericcategory.projectId, props.genericcategory.name, color);
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
      const countModel = detachedModelInfos.value.length;
      if (countModel) {
        output = `${output} and in ${countModel} detached models`;
      }
      return output;
    });
    function highlightMoment(momentId) {
      istore.setHighlightedMomentId(momentId);
    }
    function editSpecificSynchronicModel(modelId) {
      istore.setEditedSpecificSynchronicModelId(modelId);
    }
    function byInterview(moments2) {
      const repo = store.getRepo();
      const names = Object.fromEntries(repo.Interview.get().map((i) => [i.id, i.label]));
      return Object.entries(groupBy(moments2, "interviewId")).map(([id, arr]) => [names[id], arr.length]);
    }
    function byDetachedModel(modelInfos) {
      const repo = store.getRepo();
      const specificSynchronicModelIds = modelInfos.map((info) => info.specificSynchronicModelId);
      const names = Object.fromEntries(repo.SpecificSynchronicModel.find(specificSynchronicModelIds).map((i) => [i.id, i.name]));
      return specificSynchronicModelIds.map((modelId) => [names[modelId], modelId, 1]);
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
    const menuActions = [
      ["Debug", () => debug()]
    ];
    const __returned__ = { istore, store, props, $q, popupEdit, router, debug, moments, detachedModelInfos, currentMoments, isAggregation, isSpecialization, genericcategoryName, categoryColor, currentInterviewMomentsLabel, momentsLabel, highlightMoment, editSpecificSynchronicModel, byInterview, byDetachedModel, switchTab, menuActions, CustomExpansionItem, ColorizeIcon, DragElement, ElementMenu, get stripContextFromName() {
      return stripContextFromName;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$f = ["data-genericcategory"];
const _hoisted_2$f = { class: "genericsynchroniccategory-label" };
const _hoisted_3$b = { class: "interview-moment-count" };
const _hoisted_4$7 = { class: "interview-moment-count" };
const _hoisted_5$3 = { class: "genericsynchroniccategory-children" };
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GenericCategoryRepresentation = resolveComponent("GenericCategoryRepresentation", true);
  return $props.genericcategory ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "genericsynchroniccategory-container row",
    "data-genericcategory": $props.genericcategory.name
  }, [
    createVNode($setup["CustomExpansionItem"], {
      class: "genericsynchroniccategory-body",
      "expand-icon-class": { "invisible": $props.genericcategory.children?.length == 0 }
    }, {
      header: withCtx(() => [
        createVNode($setup["DragElement"], {
          class: normalizeClass(["genericsynchroniccategory-name", { "has-error": $props.genericcategory.errors?.length }]),
          style: normalizeStyle({ backgroundColor: $props.genericcategory.color || "transparent" }),
          onClick: $setup.debug,
          type: "genericsynchroniccategory",
          data: $props.genericcategory.name
        }, {
          default: withCtx(() => [
            createVNode(QIcon, {
              ref: "handle",
              class: "genericsynchroniccategory-handle",
              size: "xs",
              name: "mdi-alpha-s-box"
            }, null, 512),
            $setup.isSpecialization ? (openBlock(), createBlock(QIcon, {
              key: 0,
              size: "xs",
              name: "mdi-triangle-outline"
            })) : createCommentVNode("", true),
            $setup.isAggregation ? (openBlock(), createBlock(QIcon, {
              key: 1,
              size: "xs",
              name: "mdi-cards-diamond-outline"
            })) : createCommentVNode("", true),
            $props.genericcategory.errors?.length ? (openBlock(), createBlock(QTooltip, {
              key: 2,
              class: "bg-red-5",
              anchor: "top right",
              self: "top left"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($props.genericcategory.errors, (error, key) => {
                  return openBlock(), createElementBlock("div", { key }, toDisplayString(error), 1);
                }), 128))
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createBaseVNode("span", _hoisted_2$f, [
              createTextVNode(toDisplayString($setup.stripContextFromName($props.genericcategory.name)) + " ", 1),
              createVNode(QBtn, {
                title: $setup.currentInterviewMomentsLabel,
                size: "sm",
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
                          }, null, 8, ["label", "onClick", "style"]),
                          createVNode(QBtn, {
                            icon: "mdi-graph-outline",
                            flat: "",
                            dense: "",
                            size: "sm",
                            onClick: ($event) => $setup.editSpecificSynchronicModel(moment.specificsynchronicmodel?.id ?? "")
                          }, null, 8, ["onClick"])
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
                size: "sm",
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
                            label: name,
                            icon: "mdi-comment-text-outline",
                            onClick: ($event) => $setup.switchTab(name),
                            size: "sm"
                          }, null, 8, ["label", "onClick"]),
                          createBaseVNode("strong", _hoisted_3$b, toDisplayString(count), 1)
                        ]);
                      }), 128)),
                      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.byDetachedModel($setup.detachedModelInfos), ([name, modelId, count]) => {
                        return openBlock(), createElementBlock("div", {
                          class: "row items-left no-wrap",
                          key: name
                        }, [
                          createVNode(QBtn, {
                            class: "full-width justify-content-between",
                            align: "left",
                            "no-caps": "",
                            label: name,
                            onClick: ($event) => $setup.editSpecificSynchronicModel(modelId),
                            size: "sm"
                          }, null, 8, ["label", "onClick"]),
                          createBaseVNode("strong", _hoisted_4$7, toDisplayString(count), 1)
                        ]);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString($setup.moments.length + $setup.detachedModelInfos.length), 1)
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
        }, 8, ["class", "style", "data"])
      ]),
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_5$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.genericcategory.children, (cat) => {
            return openBlock(), createBlock(_component_GenericCategoryRepresentation, {
              key: cat.name,
              genericGraphs: $props.genericGraphs,
              genericcategory: cat,
              currentInterviewId: $props.currentInterviewId
            }, null, 8, ["genericGraphs", "genericcategory", "currentInterviewId"]);
          }), 128))
        ])
      ]),
      _: 1
    }, 8, ["expand-icon-class"])
  ], 8, _hoisted_1$f)) : createCommentVNode("", true);
}
const GenericCategoryRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__scopeId", "data-v-1bcbb6dc"], ["__file", "GenericCategoryRepresentation.vue"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "GenericCategoriesRepresentation",
  props: {
    projectId: {},
    genericGraphs: {},
    currentInterviewId: {},
    title: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    function debug() {
      console.log("currentInterviewId", props.currentInterviewId);
      console.log("genericGraphs", props.genericGraphs);
    }
    const __returned__ = { props, debug, GenericCategoryRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$e = ["data-project"];
const _hoisted_2$e = { class: "text-bold" };
const _hoisted_3$a = { class: "genericcategories-list" };
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "genericcategories-container",
    key: $props.projectId,
    "data-project": $props.projectId
  }, [
    createBaseVNode("div", _hoisted_2$e, [
      createTextVNode(toDisplayString($props.title) + " ", 1),
      createVNode(QBtn, {
        flat: "",
        dense: "",
        size: "xs",
        icon: "info",
        onClick: $setup.debug,
        "no-caps": ""
      }, {
        default: withCtx(() => [
          createVNode(QTooltip, null, {
            default: withCtx(() => [..._cache[0] || (_cache[0] = [
              createTextVNode("This is the dynamically generated model resulting from the combination of all synchronic models from interviews and all detached synchronic models. ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    createBaseVNode("div", _hoisted_3$a, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.genericGraphs.categories, (category) => {
        return openBlock(), createBlock($setup["GenericCategoryRepresentation"], {
          key: category.name,
          genericGraphs: $props.genericGraphs,
          genericcategory: category,
          currentInterviewId: $props.currentInterviewId
        }, null, 8, ["genericGraphs", "genericcategory", "currentInterviewId"]);
      }), 128))
    ])
  ], 8, _hoisted_1$e);
}
const GenericCategoriesRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__file", "GenericCategoriesRepresentation.vue"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
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
      ["Delete", () => store.deleteGenericDiachronicCategory(props.categoryId)],
      ["Debug", () => debug()]
    ];
    const __returned__ = { istore, store, props, popupEdit, router, genericdiachroniccategory, debug, moments, currentMoments, genericcategoryName, categoryColor, currentInterviewMomentsLabel, momentsLabel, highlightMoment, byInterview, switchTab, droppedGenericDiachronicCategory, droppedMoment, menuActions, CustomExpansionItem, ColorizeIcon, DragElement, DropZone, ElementMenu };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$d = ["data-genericdiachroniccategory"];
const _hoisted_2$d = { class: "genericdiachroniccategory-label" };
const _hoisted_3$9 = { class: "interview-moment-count" };
const _hoisted_4$6 = { class: "genericsynchroniccategory-children" };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
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
                createBaseVNode("span", _hoisted_2$d, [
                  createTextVNode(toDisplayString($setup.genericdiachroniccategory.name) + " ", 1),
                  createVNode(QBtn, {
                    title: $setup.currentInterviewMomentsLabel,
                    size: "sm",
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
                    size: "sm",
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
                                label: name,
                                icon: "mdi-comment-text-outline",
                                onClick: ($event) => $setup.switchTab(name),
                                size: "sm"
                              }, null, 8, ["label", "onClick"]),
                              createBaseVNode("strong", _hoisted_3$9, toDisplayString(count), 1)
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
        createBaseVNode("div", _hoisted_4$6, [
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
  ], 8, _hoisted_1$d)) : createCommentVNode("", true);
}
const GenericDiachronicCategoryRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__scopeId", "data-v-726b345e"], ["__file", "GenericDiachronicCategoryRepresentation.vue"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
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
        [`Add a folder`, () => store.addModelFolder(props.modelfolderId, "newfolder")]
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
const _hoisted_1$c = ["data-modelfolder"];
const _hoisted_2$c = { class: "modelfolder-name" };
const _hoisted_3$8 = { class: "modelfolder-children" };
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
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
                createBaseVNode("span", _hoisted_2$c, [
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
        createBaseVNode("div", _hoisted_3$8, [
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
  ], 12, _hoisted_1$c)) : createCommentVNode("", true);
}
const ModelFolderRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__scopeId", "data-v-b05fc485"], ["__file", "ModelFolderRepresentation.vue"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$b = ["data-project"];
const _hoisted_2$b = { class: "text-bold" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.project ? (openBlock(), createElementBlock("div", {
    class: "genericdiachroniccategories-container",
    key: $props.projectId,
    "data-project": $props.projectId
  }, [
    createBaseVNode("div", _hoisted_2$b, toDisplayString($props.title), 1),
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
  ], 8, _hoisted_1$b)) : createCommentVNode("", true);
}
const GenericDiachronicCategoriesRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__scopeId", "data-v-751910fb"], ["__file", "GenericDiachronicCategoriesRepresentation.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "InfoPanel",
  props: {
    projectId: {},
    genericGraphs: {},
    currentInterviewId: {},
    title: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const istore = useInterfaceStore();
    const props = __props;
    const infoTab = ref("notes");
    const notes_filter = ref("");
    const notes = computed(() => {
      const output = store.getNotes(props.projectId);
      if (notes_filter.value) {
        return output.filter((note) => note.text.includes(notes_filter.value));
      } else {
        return output;
      }
    });
    const categoriesWithError = computed(() => {
      return Object.values(props.genericGraphs.byName).filter((category) => category.errors && category.errors.length > 0);
    });
    function onNoteClick(note) {
      if (note.icon == "mdi-alpha-d-box-outline") {
        istore.setHighlightedMomentId(note.element.id);
      } else if (note.icon == "mdi-alpha-s-box-outline") {
        const info = props.genericGraphs.instanceIdToContainerInfo[note.element.id];
        if (info) {
          istore.setEditedSpecificSynchronicModelId(info.specificSynchronicModelId);
        }
      }
    }
    const __returned__ = { store, istore, props, infoTab, notes_filter, notes, categoriesWithError, onNoteClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$a = { class: "info-panel" };
const _hoisted_2$a = { class: "categories-with-error" };
const _hoisted_3$7 = { class: "category-title" };
const _hoisted_4$5 = { class: "errors" };
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$a, [
    createVNode(QTabs, {
      modelValue: $setup.infoTab,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.infoTab = $event),
      dense: "",
      align: "justify",
      "narrow-indicator": ""
    }, {
      default: withCtx(() => [
        createVNode(QTab, {
          name: "notes",
          size: "xs",
          icon: "mdi-chat-outline",
          label: "Notes"
        }),
        createVNode(QTab, {
          name: "errors",
          icon: "mdi-alert-outline",
          label: "Errors"
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(QSeparator),
    createVNode(QTabPanels, {
      modelValue: $setup.infoTab,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.infoTab = $event)
    }, {
      default: withCtx(() => [
        createVNode(QTabPanel, { name: "notes" }, {
          default: withCtx(() => [
            createVNode(QInput, {
              filled: "",
              modelValue: $setup.notes_filter,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.notes_filter = $event),
              label: "Filter...",
              "stack-label": "",
              dense: ""
            }, null, 8, ["modelValue"]),
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.notes, (note) => {
              return openBlock(), createElementBlock("div", {
                key: note.element.id
              }, [
                createVNode(QBtn, {
                  size: "xs",
                  icon: note.icon,
                  onClick: ($event) => $setup.onNoteClick(note)
                }, {
                  default: withCtx(() => [
                    createVNode(QTooltip, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(note.tooltip), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["icon", "onClick"]),
                createTextVNode(" " + toDisplayString(note.text), 1)
              ]);
            }), 128))
          ]),
          _: 1
        }),
        createVNode(QTabPanel, { name: "errors" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$a, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.categoriesWithError, (category) => {
                return openBlock(), createElementBlock("div", {
                  key: category.name
                }, [
                  createBaseVNode("span", _hoisted_3$7, [
                    createVNode(QIcon, {
                      size: "xs",
                      name: "mdi-alpha-s-box-outline"
                    }),
                    createTextVNode(" " + toDisplayString(category.name), 1)
                  ]),
                  createBaseVNode("div", _hoisted_4$5, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(category.errors, (error, i) => {
                      return openBlock(), createElementBlock("span", { key: i }, toDisplayString(error), 1);
                    }), 128))
                  ])
                ]);
              }), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
const InfoPanel = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__file", "InfoPanel.vue"]]);
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const notNullish = (val) => val != null;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
function useMounted() {
  const isMounted = ref(false);
  const instance = getCurrentInstance();
  if (instance) {
    onMounted(() => {
      isMounted.value = true;
    }, instance);
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...mutationOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => {
    const value = toValue(target);
    const items = (Array.isArray(value) ? value : [value]).map(unrefElement).filter(notNullish);
    return new Set(items);
  });
  const stopWatch = watch(
    () => targets.value,
    (targets2) => {
      cleanup();
      if (isSupported.value && targets2.size) {
        observer = new MutationObserver(callback);
        targets2.forEach((el) => observer.observe(el, mutationOptions));
      }
    },
    { immediate: true, flush: "post" }
  );
  const takeRecords = () => {
    return observer == null ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}
function useCssVar(prop, target, options = {}) {
  const { window: window2 = defaultWindow, initialValue = "", observe = false } = options;
  const variable = ref(initialValue);
  const elRef = computed(() => {
    var _a;
    return unrefElement(target) || ((_a = window2 == null ? void 0 : window2.document) == null ? void 0 : _a.documentElement);
  });
  function updateCssVar() {
    var _a;
    const key = toValue(prop);
    const el = toValue(elRef);
    if (el && window2) {
      const value = (_a = window2.getComputedStyle(el).getPropertyValue(key)) == null ? void 0 : _a.trim();
      variable.value = value || initialValue;
    }
  }
  if (observe) {
    useMutationObserver(elRef, updateCssVar, {
      attributeFilter: ["style", "class"],
      window: window2
    });
  }
  watch(
    [elRef, () => toValue(prop)],
    updateCssVar,
    { immediate: true }
  );
  watch(
    variable,
    (val) => {
      var _a;
      if ((_a = elRef.value) == null ? void 0 : _a.style)
        elRef.value.style.setProperty(toValue(prop), val);
    }
  );
  return variable;
}
const Y = { class: "controll" }, $ = { class: "controll__item controll__item--circle" }, U = { class: "controll__pan controll__item--circle__inner" }, X = { class: "controll__pan__up controll__item--circle__inner__up" }, W = { class: "controll__pan__right controll__item--circle__inner__right" }, j = { class: "controll__pan__down controll__item--circle__inner__down" }, H = { class: "controll__pan__left controll__item--circle__inner__left" }, I = { class: "controll__home controll__item controll__item--list-item" }, O = { class: "controll__zoom-in controll__item controll__item--list-item" }, V = { class: "controll__zoom-in controll__item controll__item--list-item" }, K = /* @__PURE__ */ defineComponent({
  __name: "ControlButtons",
  emits: [
    // "pandown", "panup", "zoomdown", "zoomup", "home", 
    "buttondown",
    "buttonup"
  ],
  setup(t, { emit: i }) {
    const l = i;
    function u(a, e) {
      l("buttondown", {
        key: e
      });
    }
    function n(a, e) {
      l("buttonup", {
        key: e
      });
    }
    return (a, e) => (openBlock(), createElementBlock("div", {
      id: "v-zoomable-control-btns",
      class: "controll__buttons",
      onDblclick: e[31] || (e[31] = withModifiers(() => {
      }, ["stop"])),
      onMousedown: e[32] || (e[32] = withModifiers(() => {
      }, ["stop"]))
    }, [
      createBaseVNode("ul", Y, [
        createBaseVNode("li", $, [
          createBaseVNode("ul", U, [
            createBaseVNode("li", X, [
              createBaseVNode("a", {
                onPointerdown: e[0] || (e[0] = (o) => u(o, "pan-up")),
                onPointerup: e[1] || (e[1] = (o) => n(o, "pan-up")),
                onPointercancel: e[2] || (e[2] = (o) => n(o, "pan-up")),
                onPointerleave: e[3] || (e[3] = (o) => n(o, "pan-up")),
                onContextmenu: e[4] || (e[4] = withModifiers(() => {
                }, ["prevent"]))
              }, e[33] || (e[33] = [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "feather feather-chevron-up"
                }, [
                  createBaseVNode("polyline", { points: "18 15 12 9 6 15" })
                ], -1)
              ]), 32)
            ]),
            createBaseVNode("li", W, [
              createBaseVNode("a", {
                onPointerdown: e[5] || (e[5] = (o) => u(o, "pan-right")),
                onPointerup: e[6] || (e[6] = (o) => n(o, "pan-right")),
                onPointercancel: e[7] || (e[7] = (o) => n(o, "pan-right")),
                onPointerleave: e[8] || (e[8] = (o) => n(o, "pan-right")),
                onContextmenu: e[9] || (e[9] = withModifiers(() => {
                }, ["prevent"]))
              }, e[34] || (e[34] = [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "feather feather-chevron-right"
                }, [
                  createBaseVNode("polyline", { points: "9 18 15 12 9 6" })
                ], -1)
              ]), 32)
            ]),
            createBaseVNode("li", j, [
              createBaseVNode("a", {
                onPointerdown: e[10] || (e[10] = (o) => u(o, "pan-down")),
                onPointerup: e[11] || (e[11] = (o) => n(o, "pan-down")),
                onPointercancel: e[12] || (e[12] = (o) => n(o, "pan-down")),
                onPointerleave: e[13] || (e[13] = (o) => n(o, "pan-down")),
                onContextmenu: e[14] || (e[14] = withModifiers(() => {
                }, ["prevent"]))
              }, e[35] || (e[35] = [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "feather feather-chevron-down"
                }, [
                  createBaseVNode("polyline", { points: "6 9 12 15 18 9" })
                ], -1)
              ]), 32)
            ]),
            createBaseVNode("li", H, [
              createBaseVNode("a", {
                onPointerdown: e[15] || (e[15] = (o) => u(o, "pan-left")),
                onPointercancel: e[16] || (e[16] = (o) => n(o, "pan-left")),
                onPointerup: e[17] || (e[17] = (o) => n(o, "pan-left")),
                onPointerleave: e[18] || (e[18] = (o) => n(o, "pan-left")),
                onContextmenu: e[19] || (e[19] = withModifiers(() => {
                }, ["prevent"]))
              }, e[36] || (e[36] = [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "feather feather-chevron-left"
                }, [
                  createBaseVNode("polyline", { points: "15 18 9 12 15 6" })
                ], -1)
              ]), 32)
            ])
          ])
        ]),
        createBaseVNode("li", I, [
          createBaseVNode("a", {
            onPointerdown: e[20] || (e[20] = (o) => u(o, "home"))
          }, e[37] || (e[37] = [
            createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize-2" data-v-3ba139de><polyline points="4 14 10 14 10 20" data-v-3ba139de></polyline><polyline points="20 10 14 10 14 4" data-v-3ba139de></polyline><line x1="14" y1="10" x2="21" y2="3" data-v-3ba139de></line><line x1="3" y1="21" x2="10" y2="14" data-v-3ba139de></line></svg>', 1)
          ]), 32)
        ]),
        createBaseVNode("li", O, [
          createBaseVNode("a", {
            onPointerdown: e[21] || (e[21] = (o) => u(o, "zoom-in")),
            onPointerup: e[22] || (e[22] = (o) => n(o, "zoom-in")),
            onPointercancel: e[23] || (e[23] = (o) => n(o, "zoom-in")),
            onPointerleave: e[24] || (e[24] = (o) => n(o, "zoom-in")),
            onContextmenu: e[25] || (e[25] = withModifiers(() => {
            }, ["prevent"]))
          }, e[38] || (e[38] = [
            createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zoom-in" data-v-3ba139de><circle cx="11" cy="11" r="8" data-v-3ba139de></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-3ba139de></line><line x1="11" y1="8" x2="11" y2="14" data-v-3ba139de></line><line x1="8" y1="11" x2="14" y2="11" data-v-3ba139de></line></svg>', 1)
          ]), 32)
        ]),
        createBaseVNode("li", V, [
          createBaseVNode("a", {
            onPointerdown: e[26] || (e[26] = (o) => u(o, "zoom-out")),
            onPointerup: e[27] || (e[27] = (o) => n(o, "zoom-out")),
            onPointercancel: e[28] || (e[28] = (o) => n(o, "zoom-out")),
            onPointerleave: e[29] || (e[29] = (o) => n(o, "zoom-out")),
            onContextmenu: e[30] || (e[30] = withModifiers(() => {
            }, ["prevent"]))
          }, e[39] || (e[39] = [
            createBaseVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "feather feather-zoom-out"
            }, [
              createBaseVNode("circle", {
                cx: "11",
                cy: "11",
                r: "8"
              }),
              createBaseVNode("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
              }),
              createBaseVNode("line", {
                x1: "8",
                y1: "11",
                x2: "14",
                y2: "11"
              })
            ], -1)
          ]), 32)
        ])
      ])
    ], 32));
  }
}), C = (t, i) => {
  const l = t.__vccOpts || t;
  for (const [u, n] of i)
    l[u] = n;
  return l;
}, q = /* @__PURE__ */ C(K, [["__scopeId", "data-v-3ba139de"]]);
function R() {
  let t = 0;
  function i(u, n, a, e) {
    u(), t = window.setTimeout(() => {
      t = window.setInterval(() => {
        n();
      }, e);
    }, a);
  }
  function l() {
    t && (window.clearInterval(t), t = 0);
  }
  return {
    startHold: i,
    clearHold: l
  };
}
const g = "control-btn";
function A({
  props: t,
  transform: i
}) {
  let l = R();
  function u(d) {
    l.startHold(
      () => {
        i.changeZoom(d * t.buttonZoomStep * 0.5, g);
      },
      () => {
        i.changeZoom(d * t.buttonZoomStep * 0.5, g);
      },
      300,
      50
    );
  }
  function n(d) {
    if (!t.disabled)
      switch (d.key) {
        case "home":
          o();
          break;
        case "zoom-in":
          u(1);
          break;
        case "zoom-out":
          u(-1);
          break;
        case "pan-left":
          e({ x: 1, y: 0 });
          break;
        case "pan-right":
          e({ x: -1, y: 0 });
          break;
        case "pan-up":
          e({ x: 0, y: 1 });
          break;
        case "pan-down":
          e({ x: 0, y: -1 });
          break;
      }
  }
  function a(d) {
    l.clearHold();
  }
  function e(d) {
    l.startHold(() => {
      i.changePan(d.x * t.buttonPanStep, d.y * t.buttonPanStep, g);
    }, () => {
      i.changePan(d.x * t.buttonPanStep, d.y * t.buttonPanStep, g);
    }, 300, 50);
  }
  function o() {
    i.goHome(g);
  }
  return {
    onButtonDown: n,
    onButtonUp: a
  };
}
function F({
  props: t,
  transform: i
}) {
  let l = {
    x: 0,
    y: 0
  };
  function u(e) {
    t.disabled || e.pointerType !== "mouse" || !t.mouseEnabled || (l = {
      x: e.clientX,
      y: e.clientY
    }, document.addEventListener("pointermove", a, { passive: false }), document.addEventListener("pointerup", function(o) {
      document.removeEventListener("pointermove", a);
    }), document.addEventListener("pointerleave", function(o) {
      document.removeEventListener("pointermove", a);
    }), document.addEventListener("pointercancel", function(o) {
      document.removeEventListener("pointermove", a);
    }));
  }
  function n(e) {
    if (t.disabled || !t.dblClickEnabled || !t.zoomEnabled) return;
    const o = { x: e.clientX, y: e.clientY };
    i.changeZoom(t.dblClickZoomStep, "dblClick", o);
  }
  function a(e) {
    if (t.disabled || !t.panEnabled || e.pointerType !== "mouse" || !t.mouseEnabled) return;
    let o = {
      x: e.clientX - l.x,
      y: e.clientY - l.y
    };
    i.changePan(o.x, o.y, e.pointerType), l = {
      x: e.clientX,
      y: e.clientY
    }, e.preventDefault();
  }
  return {
    onPointerDown: u,
    onDblClick: n
  };
}
function G({
  props: t,
  transform: i
}) {
  let l = ref({}), u = ref(0), n = null;
  function a(d) {
    if (t.disabled || !t.touchEnabled || !t.panEnabled && !t.zoomEnabled || (d.preventDefault(), d.touches.length < 1)) return;
    const s = d.touches.item(0);
    if (!s) return;
    let f = 0, m = { x: s.clientX, y: s.clientY };
    if (d.touches.length === 2) {
      const r = d.touches.item(1);
      let p = e({
        x: s ? s.clientX : 0,
        y: s ? s.clientY : 0
      }, {
        x: r ? r.clientX : 0,
        y: r ? r.clientY : 0
      });
      u.value <= 0 ? (u.value = p.distance, f = 0) : (f = p.distance / u.value * i.zoom.value - i.zoom.value, u.value = p.distance), m = p.center;
    }
    if (t.zoomEnabled && i.changeZoom(f, "touch", m), n === null) {
      n = {
        x: m.x,
        y: m.y
      };
      return;
    }
    const v = {
      x: m.x - n.x,
      y: m.y - n.y
    };
    t.panEnabled && i.changePan(v.x, v.y, "touch"), n = {
      x: m.x,
      y: m.y
    };
  }
  function e(d, s) {
    let f = Math.sqrt(Math.pow(d.x - s.x, 2) + Math.pow(d.y - s.y, 2)), m = { x: (d.x + s.x) / 2, y: (d.y + s.y) / 2 };
    return {
      distance: f,
      center: m
    };
  }
  function o(d) {
    t.disabled || !t.touchEnabled || (n = null, document.addEventListener("touchmove", a, { passive: false }), document.addEventListener("touchend", function(s) {
      d.touches.length < 2 && (u.value = -1), document.removeEventListener("touchmove", a);
    }));
  }
  return {
    onTouchStart: o,
    touchCount: computed(() => Object.keys(l.value).length)
  };
}
function J({
  props: t,
  onChange: i,
  container: l,
  target: u
}) {
  const n = ref({ x: 0, y: 0 }), a = ref(0);
  onMounted(() => {
    a.value = t.minZoom, n.value = {
      x: t.pan != null ? t.pan.x : t.initialPanX,
      y: t.pan != null ? t.pan.y : t.initialPanY
    }, t.zoom ? a.value = t.zoom : t.initialZoom >= t.minZoom && t.initialZoom <= t.maxZoom && (a.value = t.initialZoom);
  }), watch(
    () => t.zoom,
    () => {
      isNaN(t.zoom) || (a.value = t.zoom);
    }
  ), watch(
    () => t.pan,
    () => {
      t.pan && (n.value.x = t.pan.x, n.value.y = t.pan.y);
    },
    { deep: true }
  );
  function e(s, f, m) {
    if (isNaN(s) || s === 0) return;
    const v = a.value;
    let r = a.value + s;
    if (r > t.maxZoom ? r = t.maxZoom : r < t.minZoom && (r = t.minZoom), Math.abs(v - r) < 1e-4) return;
    if (a.value = r, t.zoomOrigin === "center" && (m = B(l.value)), t.zoomOrigin !== "content-center") {
      m || (m = B(l.value));
      const Z = Q(l.value, n.value), D = {
        x: (r - v) * ((Z.x - m.x) / v),
        y: (r - v) * ((Z.y - m.y) / v)
      };
      o(D.x, D.y, "zoom");
    }
    let p = {
      zoom: r,
      delta: {
        zoom: s,
        pan: {
          x: 0,
          y: 0
        }
      },
      pan: {
        x: n.value.x,
        y: n.value.y,
        deltaX: 0,
        deltaY: 0
      },
      type: f
    };
    i("zoom", p);
  }
  function o(s, f, m) {
    isNaN(s) && (s = 0), isNaN(f) && (f = 0), n.value = {
      x: n.value.x + s,
      y: n.value.y + f
    };
    let v = {
      zoom: a.value,
      delta: {
        zoom: 0,
        pan: {
          x: s,
          y: f
        }
      },
      pan: {
        x: n.value.x,
        y: n.value.y,
        deltaX: s,
        deltaY: f
      },
      type: m
    };
    i("panned", v);
  }
  function d(s) {
    a.value = t.initialZoom, i("zoom", {
      zoom: a.value,
      pan: {
        x: n.value.x,
        y: n.value.y,
        deltaX: 0,
        deltaY: 0
      },
      type: s
    });
    let f = {
      x: t.initialPanX - n.value.x,
      y: t.initialPanY - n.value.y
    };
    n.value = {
      x: t.initialPanX,
      y: t.initialPanY
    }, i("panned", {
      zoom: a.value,
      pan: {
        x: n.value.x,
        y: n.value.y,
        deltaX: f.x,
        deltaY: f.y
      },
      type: s
    });
  }
  return {
    zoom: computed(() => a.value),
    pan: computed(() => n.value),
    setZoom: (s) => {
      a.value = s;
    },
    setPan: (s) => {
      n.value = s;
    },
    changeZoom: e,
    changePan: o,
    goHome: d
  };
}
function B(t) {
  const i = t.getBoundingClientRect();
  return {
    x: i.left + i.width / 2,
    y: i.top + i.height / 2
  };
}
function Q(t, i) {
  const l = B(t);
  return {
    x: l.x + i.x,
    y: l.y + i.y
  };
}
function ee({ props: t, transform: i }) {
  function l(u) {
    if (t.disabled || !t.wheelEnabled || !t.zoomEnabled) return;
    const n = Math.abs(u.deltaY) > 0 ? u.deltaY : u.deltaX, a = t.wheelZoomStep * -1 * n / Math.abs(n), e = { x: u.clientX, y: u.clientY };
    i.changeZoom(a, "wheel", e), u.preventDefault();
  }
  return {
    onWheel: l
  };
}
function te({
  props: t,
  onChange: i,
  container: l,
  target: u
}) {
  const n = J({ props: t, onChange: i, container: l, target: u }), a = G({ props: t, transform: n }), e = ee({ props: t, transform: n }), o = F({ props: t, transform: n }), d = A({ props: t, transform: n });
  return {
    zoom: n.zoom,
    pan: n.pan,
    setZoom: n.setZoom,
    setPan: n.setPan,
    onWheel: e.onWheel,
    onTouchStart: a.onTouchStart,
    onButtonUp: d.onButtonUp,
    onButtonDown: d.onButtonDown,
    onPointerDown: o.onPointerDown,
    onDblClick: o.onDblClick
  };
}
const ne = /* @__PURE__ */ defineComponent({
  __name: "VueZoomable",
  props: {
    zoom: {
      type: Number,
      default: null
    },
    pan: {
      type: Object,
      default: null
    },
    selector: {
      type: String,
      default: "* > *"
    },
    maxZoom: {
      type: Number,
      default: 3
    },
    minZoom: {
      type: Number,
      default: 0.5
    },
    initialPanX: {
      type: Number,
      default: 0
    },
    initialPanY: {
      type: Number,
      default: 0
    },
    initialZoom: {
      type: Number,
      default: 0.5
    },
    dblClickZoomStep: {
      type: Number,
      default: 0.4
    },
    wheelZoomStep: {
      type: Number,
      default: 0.4
    },
    panEnabled: {
      type: Boolean,
      default: true
    },
    zoomEnabled: {
      type: Boolean,
      default: true
    },
    mouseEnabled: {
      type: Boolean,
      default: true
    },
    touchEnabled: {
      type: Boolean,
      default: true
    },
    dblClickEnabled: {
      type: Boolean,
      default: true
    },
    wheelEnabled: {
      type: Boolean,
      default: true
    },
    enableControlButton: {
      type: Boolean,
      default: true
    },
    buttonPanStep: {
      type: Number,
      default: 15
    },
    buttonZoomStep: {
      type: Number,
      default: 0.1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    zoomOrigin: {
      type: String,
      default: "pointer"
    }
  },
  emits: ["panned", "zoom", "update:zoom", "update:pan"],
  setup(t, { emit: i }) {
    let l = i, u = t, n = ref(), a = computed(() => {
      var f;
      return (f = n.value) == null ? void 0 : f.querySelector(u.selector);
    }), e = te({ props: u, onChange: o, container: n, target: a });
    function o(f, m) {
      f === "zoom" ? l("update:zoom", m.zoom) : f === "panned" && l("update:pan", m.pan), l(f, m);
    }
    let d = computed(() => `translate(${e.pan.value.x}px, ${e.pan.value.y}px) scale(${e.zoom.value})`);
    function s() {
      a.value && (a.value.style.transform = d.value, a.value.style.transformOrigin = "center center", a.value.style.transition = "transform 0.07s ease-out", a.value.style.transformBox = "fill-box");
    }
    return watch(
      d,
      () => {
        s();
      },
      {
        flush: "post"
      }
    ), onMounted(() => {
      s();
    }), (f, m) => (openBlock(), createElementBlock("div", {
      ref_key: "container",
      ref: n,
      class: normalizeClass(f.$style.container),
      onDblclick: m[0] || (m[0] = //@ts-ignore
      (...v) => unref(e).onDblClick && unref(e).onDblClick(...v)),
      onPointerdown: m[1] || (m[1] = //@ts-ignore
      (...v) => unref(e).onPointerDown && unref(e).onPointerDown(...v)),
      onWheel: m[2] || (m[2] = //@ts-ignore
      (...v) => unref(e).onWheel && unref(e).onWheel(...v)),
      onTouchstart: m[3] || (m[3] = //@ts-ignore
      (...v) => unref(e).onTouchStart && unref(e).onTouchStart(...v))
    }, [
      renderSlot(f.$slots, "default", {}, void 0, true),
      renderSlot(f.$slots, "buttons", {}, () => [
        unref(u).enableControlButton ? (openBlock(), createBlock(q, {
          key: 0,
          onButtondown: unref(e).onButtonDown,
          onButtonup: unref(e).onButtonUp
        }, null, 8, ["onButtondown", "onButtonup"])) : createCommentVNode("", true)
      ], true)
    ], 34));
  }
}), oe = "_container_irdvc_2", le = "_buttons_irdvc_11", ie = {
  container: oe,
  buttons: le
}, ae = {
  $style: ie
}, me = /* @__PURE__ */ C(ne, [["__cssModules", ae], ["__scopeId", "data-v-fce7d501"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "SpecificSynchronicCategoryOverview",
  props: {
    categoryId: { type: String, default: "" },
    layout: { type: String, default: "vertical" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const props = __props;
    const category = computed(() => store.getSpecificSynchronicCategory(props.categoryId));
    const __returned__ = { store, props, category, DragElement, SpecificSynchronicCategoryRelation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$9 = ["data-specificsynchroniccategory"];
const _hoisted_2$9 = ["data-specificsynchroniccategory"];
const _hoisted_3$6 = { class: "specificsynchroniccategory-children" };
const _hoisted_4$4 = { class: "specificsynchroniccategory-relation" };
const _hoisted_5$2 = { class: "specificsynchroniccategory-header" };
const _hoisted_6$1 = ["title"];
const _hoisted_7 = {
  key: 0,
  class: "specificsynchroniccategory-filler"
};
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SpecificSynchronicCategoryOverview = resolveComponent("SpecificSynchronicCategoryOverview", true);
  return openBlock(), createElementBlock("div", {
    ref: "container",
    class: normalizeClass(["specificsynchroniccategory-container", `specificsynchroniccategory-${$props.categoryId}`]),
    "data-specificsynchroniccategory": $props.categoryId
  }, [
    $setup.category ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "specificsynchroniccategory",
      style: normalizeStyle({ backgroundColor: $setup.category.color || "transparent" }),
      "data-specificsynchroniccategory": $props.categoryId
    }, [
      createBaseVNode("div", _hoisted_3$6, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.category.children, (c) => {
          return openBlock(), createElementBlock("div", {
            key: c.id
          }, [
            createVNode(_component_SpecificSynchronicCategoryOverview, {
              categoryId: c.id
            }, null, 8, ["categoryId"])
          ]);
        }), 128))
      ]),
      createBaseVNode("div", _hoisted_4$4, [
        createVNode($setup["SpecificSynchronicCategoryRelation"], {
          type: $setup.category.abstractionType,
          childrenCount: $setup.category.children.length
        }, null, 8, ["type", "childrenCount"])
      ]),
      createBaseVNode("div", _hoisted_5$2, [
        createVNode($setup["DragElement"], {
          type: "genericsynchroniccategory",
          data: $setup.category.name
        }, {
          default: withCtx(() => [
            createBaseVNode("span", {
              title: $setup.category.name,
              class: "specificsynchroniccategory-name"
            }, toDisplayString($setup.category.name), 9, _hoisted_6$1)
          ]),
          _: 1
        }, 8, ["data"])
      ]),
      $setup.category.parentId ? (openBlock(), createElementBlock("div", _hoisted_7, [
        createVNode($setup["SpecificSynchronicCategoryRelation"], { childrenCount: 1 })
      ])) : createCommentVNode("", true)
    ], 12, _hoisted_2$9)) : createCommentVNode("", true)
  ], 10, _hoisted_1$9);
}
const SpecificSynchronicCategoryOverview = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-055296c1"], ["__file", "SpecificSynchronicCategoryOverview.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SpecificSynchronicModelOverview",
  props: {
    modelId: { type: String, default: null }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const props = __props;
    const model = computed(() => store.getSpecificSynchronicModel(props.modelId));
    const isEmpty = computed(() => model.value && !model.value.categories);
    const __returned__ = { store, props, model, isEmpty, SpecificSynchronicCategoryOverview };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$8 = ["data-specificsynchronicmodel"];
const _hoisted_2$8 = { class: "specificsynchronicmodel-categories" };
const _hoisted_3$5 = { key: 0 };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.model ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "specificsynchronicmodel-overview",
    "data-specificsynchronicmodel": $props.modelId
  }, [
    createBaseVNode("div", _hoisted_2$8, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.model.categories, (c) => {
        return openBlock(), createBlock($setup["SpecificSynchronicCategoryOverview"], {
          key: c.id,
          categoryId: c.id
        }, null, 8, ["categoryId"]);
      }), 128))
    ]),
    $setup.isEmpty ? (openBlock(), createElementBlock("div", _hoisted_3$5, " Empty model ")) : createCommentVNode("", true)
  ], 8, _hoisted_1$8)) : createCommentVNode("", true);
}
const SpecificSynchronicModelOverview = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "SpecificSynchronicModelOverview.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "MomentRepresentation",
  props: {
    momentId: { type: String, default: "" },
    layout: { type: String, default: "vertical" },
    genericGraphs: { type: Object, default: null }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const istore = useInterfaceStore();
    const store = useProjectStore();
    const props = __props;
    const {
      editedSpecificSynchronicModelId,
      highlightedMomentId
    } = storeToRefs(istore);
    const moment = computed(() => store.getMoment(props.momentId));
    const isEditedModel = computed(() => moment.value?.specificsynchronicmodel?.id === editedSpecificSynchronicModelId.value);
    function debug() {
      window.moment = moment.value;
      console.log("Moment", moment.value);
      console.log("Children:\n", moment.value?.children.map((c) => `${c.childIndex}: ${c.name}`).join("\n  "));
    }
    function highlightToggle() {
      if (highlightedMomentId.value == props.momentId) {
        istore.setHighlightedMomentId("");
      } else {
        istore.setHighlightedMomentId(props.momentId);
      }
    }
    function showContent() {
      if (moment.value && !moment.value.isExpanded) {
        store.updateMoment(props.momentId, { isExpanded: true });
      }
    }
    function droppedDescriptem(descriptemId) {
      const descriptem = store.getDescriptem(descriptemId);
      if (descriptem) {
        store.addTextSelectionToMoment(descriptem.toJSON(), props.momentId);
        store.deleteDescriptem(descriptemId);
        showContent();
      }
    }
    function droppedAnnotation(annotationId) {
      const annotation = store.getAnnotation(annotationId);
      if (annotation) {
        store.addTextSelectionToMoment(annotation.toJSON(), props.momentId);
        showContent();
      }
    }
    function droppedSelection(selectionData) {
      try {
        const selection = JSON.parse(selectionData);
        store.addTextSelectionToMoment(selection, props.momentId);
        showContent();
      } catch (e) {
        console.log(`Cannot parse ${selectionData}: ${e}`);
      }
    }
    function droppedMoment(momentId) {
      store.copyMoment(momentId, props.momentId);
      showContent();
    }
    function droppedNewMoment(momentId, where) {
      console.log("Dropped Moment", momentId, "where", where);
      if (!momentId) {
        store.addMoment(
          istore.newMomentId(),
          props.momentId,
          where
        );
        showContent();
      } else {
        store.moveMoment(momentId, props.momentId, where);
        showContent();
      }
    }
    function droppedSpecificSynchronicModel(ssmId) {
      const modelId = moment.value?.specificsynchronicmodel?.id;
      if (modelId) {
        store.copySpecificSynchronicModelToModel(ssmId, modelId);
      }
    }
    function droppedColor(color) {
      store.updateMomentColor(props.momentId, color);
    }
    function droppedSpecificSynchronicCategory(sscId) {
      const modelId = moment.value?.specificsynchronicmodel?.id;
      if (modelId) {
        store.copySpecificSynchronicCategoryToModel(sscId, modelId, true);
      }
    }
    function droppedGenericSynchronicCategory(name) {
      const modelId = moment.value?.specificsynchronicmodel?.id;
      if (modelId && name) {
        const genericInfo = props.genericGraphs ? props.genericGraphs.byName[name] : { abstractionType: "" };
        store.addSpecificSynchronicCategory(
          name,
          modelId,
          `inmodel:${modelId}`,
          null,
          genericInfo.abstractionType
        );
      }
    }
    function droppedGenericDiachronicCategory(categoryId) {
      store.addGenericDiachronicCategoryToMoment(
        categoryId,
        props.momentId
      );
    }
    function droppedCreatingDescriptem(descriptemId, where) {
      const descriptem = store.getDescriptem(descriptemId);
      if (descriptem && moment.value) {
        store.addMoment(
          istore.newMomentId(),
          props.momentId,
          where,
          descriptem.toJSON()
        );
        showContent();
      }
    }
    function droppedCreatingAnnotation(annotationId, where) {
      const annotation = store.getAnnotation(annotationId);
      if (annotation && moment.value) {
        store.addMoment(
          istore.newMomentId(),
          props.momentId,
          where,
          annotation.toJSON()
        );
        showContent();
      }
    }
    function droppedCreatingSelection(selectionData, where) {
      try {
        const selection = JSON.parse(selectionData);
        if (moment.value) {
          store.addMoment(
            istore.newMomentId(),
            props.momentId,
            where,
            selection
          );
          showContent();
        }
      } catch (e) {
        console.log(`Cannot parse ${selectionData}: ${e}`);
      }
    }
    function clearModel() {
      if (moment.value && moment.value.specificsynchronicmodel) {
        store.clearSpecificSynchronicModel(moment.value.specificsynchronicmodel.id);
      }
    }
    const expand = computed({
      get() {
        return moment.value ? moment.value.isExpanded : true;
      },
      set(value) {
        store.updateMoment(props.momentId, { isExpanded: value });
      }
    });
    const momentName = computed({
      get() {
        return moment.value ? moment.value.name : "";
      },
      set(value) {
        store.updateMoment(props.momentId, { name: value });
      }
    });
    const momentColor = computed({
      get() {
        return moment.value ? moment.value.color : "";
      },
      set(color) {
        store.updateMomentColor(props.momentId, color);
      }
    });
    function toggleTransitional() {
      if (moment.value) {
        store.updateMoment(props.momentId, { isTransitional: !moment.value.isTransitional });
      }
    }
    function editModel(ssmId) {
      if (!ssmId) {
        const specificsynchronicmodel = store.getRepo().SpecificSynchronicModel.make({
          name: "Initial",
          categories: []
        });
        store.updateMoment(props.momentId, { specificsynchronicmodel });
        ssmId = specificsynchronicmodel.id;
      }
      istore.setEditedSpecificSynchronicModelId(ssmId);
    }
    const menuActions = [
      ["Toggle transitional", toggleTransitional],
      ["Clear specific synchronic model", clearModel],
      ["Delete", () => store.deleteMoment(props.momentId)]
    ];
    const __returned__ = { istore, store, props, editedSpecificSynchronicModelId, highlightedMomentId, moment, isEditedModel, debug, highlightToggle, showContent, droppedDescriptem, droppedAnnotation, droppedSelection, droppedMoment, droppedNewMoment, droppedSpecificSynchronicModel, droppedColor, droppedSpecificSynchronicCategory, droppedGenericSynchronicCategory, droppedGenericDiachronicCategory, droppedCreatingDescriptem, droppedCreatingAnnotation, droppedCreatingSelection, clearModel, expand, momentName, momentColor, toggleTransitional, editModel, menuActions, ColorizeIcon, CustomExpansionItem, DragElement, DropZone, ElementMenu, JustificationRepresentation, MomentRepresentation, MomentNameInput, NoteIcon, SpecificSynchronicModelOverview };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$7 = ["data-moment"];
const _hoisted_2$7 = ["data-moment"];
const _hoisted_3$4 = { class: "moment-name" };
const _hoisted_4$3 = { class: "element-toolbar on-name-hover" };
const _hoisted_5$1 = { class: "moment-justification" };
const _hoisted_6 = {
  class: /* @__PURE__ */ normalizeClass(["moment-children", "horizontal"])
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "container",
    class: normalizeClass(["moment-container", `moment-${$props.momentId}`, { "highlighted": $props.momentId === $setup.highlightedMomentId }]),
    "data-moment": $props.momentId
  }, [
    createVNode($setup["DropZone"], {
      data: "before",
      class: "empty-padding",
      types: "upmt/moment upmt/selection upmt/descriptem upmt/annotation",
      onMoment: $setup.droppedNewMoment,
      onAnnotation: $setup.droppedCreatingAnnotation,
      onSelection: $setup.droppedCreatingSelection,
      onDescriptem: $setup.droppedCreatingDescriptem
    }, {
      default: withCtx(() => [
        createVNode(QBtn, {
          flat: "",
          dense: "",
          size: "xs",
          class: "new-moment-button",
          icon: "mdi-plus",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.droppedCreatingSelection("{}", "before"))
        }, {
          default: withCtx(() => [
            createVNode(QTooltip, null, {
              default: withCtx(() => [..._cache[7] || (_cache[7] = [
                createTextVNode("Create a new moment here", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    $setup.moment ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["moment", { "transitional": $setup.moment.isTransitional }]),
      style: normalizeStyle({ backgroundColor: $setup.moment.color || "transparent" }),
      "data-moment": $setup.moment.id
    }, [
      createVNode($setup["DropZone"], {
        data: "header",
        types: "upmt/descriptem upmt/annotation upmt/selection upmt/color upmt/specificsynchroniccategory upmt/genericsynchroniccategory upmt/specificsynchronicmodel upmt/genericdiachroniccategory upmt/moment",
        class: "row full-width justify-center moment-header q-pa-xs",
        onAnnotation: $setup.droppedAnnotation,
        onMoment: $setup.droppedMoment,
        onSelection: $setup.droppedSelection,
        onDescriptem: $setup.droppedDescriptem,
        onSpecificsynchroniccategory: $setup.droppedSpecificSynchronicCategory,
        onGenericsynchroniccategory: $setup.droppedGenericSynchronicCategory,
        onSpecificsynchronicmodel: $setup.droppedSpecificSynchronicModel,
        onGenericdiachroniccategory: $setup.droppedGenericDiachronicCategory,
        onColor: $setup.droppedColor
      }, {
        default: withCtx(() => [
          createVNode($setup["CustomExpansionItem"], {
            class: "moment-body pa-md-xs relative-position",
            dense: "",
            "dense-toggle": "",
            duration: 0,
            "expand-icon-toggle": "",
            "switch-toggle-side": "",
            modelValue: $setup.expand,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.expand = $event),
            "header-class": "header-class q-pa-xs",
            "expand-icon-class": "icon-class q-pa-xs",
            title: $setup.moment.note
          }, {
            header: withCtx(() => [
              createVNode($setup["DragElement"], {
                type: "moment",
                data: $props.momentId,
                onClick: withModifiers($setup.debug, ["meta"])
              }, {
                default: withCtx(() => [
                  createVNode(QIcon, {
                    size: "xs",
                    onClick: $setup.highlightToggle,
                    name: "mdi-alpha-d-box-outline"
                  }),
                  createBaseVNode("span", _hoisted_3$4, [
                    createTextVNode(toDisplayString($setup.momentName) + " ", 1),
                    createVNode(QPopupEdit, {
                      modelValue: $setup.momentName,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.momentName = $event),
                      "auto-save": ""
                    }, {
                      default: withCtx((scope) => [
                        createVNode($setup["MomentNameInput"], {
                          onChange: scope.cancel,
                          moment: $setup.moment
                        }, null, 8, ["onChange", "moment"])
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              }, 8, ["data"]),
              $setup.moment.genericdiachroniccategories.length ? (openBlock(), createBlock(QBtn, {
                key: 0,
                size: "xs",
                dense: "",
                flat: "",
                icon: "mdi-alpha-d-box"
              }, {
                default: withCtx(() => [
                  createVNode(QMenu, { class: "column" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.moment.genericdiachroniccategories, (category) => {
                        return openBlock(), createElementBlock("div", {
                          class: "flex row justify-between",
                          key: category.id
                        }, [
                          createVNode(QBtn, {
                            label: category.fullName,
                            align: "left",
                            style: normalizeStyle({ backgroundColor: category.color || "transparent" }),
                            size: "sm",
                            "no-caps": "",
                            flat: "",
                            dense: ""
                          }, null, 8, ["label", "style"]),
                          createVNode(QBtn, {
                            icon: "mdi-delete",
                            title: "Remove category",
                            dense: "",
                            size: "sm"
                          })
                        ]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode($setup["NoteIcon"], { element: $setup.moment }, null, 8, ["element"]),
              createBaseVNode("div", _hoisted_4$3, [
                createVNode($setup["ColorizeIcon"], {
                  class: "on-name-hover",
                  modelValue: $setup.momentColor,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.momentColor = $event)
                }, null, 8, ["modelValue"]),
                createVNode($setup["ElementMenu"], { actions: $setup.menuActions })
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_5$1, [
                $setup.moment ? (openBlock(), createBlock($setup["JustificationRepresentation"], {
                  key: 0,
                  justificationId: $setup.moment.justification?.id ?? ""
                }, null, 8, ["justificationId"])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["moment-synchronic-specific-model flex row", { "moment-synchronic-specific-model-edited": $setup.isEditedModel }])
              }, [
                createVNode($setup["SpecificSynchronicModelOverview"], {
                  onClick: _cache[3] || (_cache[3] = ($event) => $setup.editModel($setup.moment.specificsynchronicmodel?.id || "")),
                  modelId: $setup.moment?.specificsynchronicmodel?.id ?? ""
                }, null, 8, ["modelId"])
              ], 2),
              createVNode($setup["DragElement"], {
                type: "specificsynchronicmodel",
                data: $setup.moment.specificsynchronicmodel?.id || "",
                onClick: withModifiers($setup.debug, ["meta"])
              }, {
                default: withCtx(() => [
                  $setup.moment ? (openBlock(), createBlock(QBtn, {
                    key: 0,
                    flat: "",
                    dense: "",
                    size: "xs",
                    title: "Edit specific synchronic model",
                    class: "absolute-bottom-left",
                    onClick: _cache[4] || (_cache[4] = ($event) => $setup.editModel($setup.moment.specificsynchronicmodel?.id || "")),
                    icon: "mdi-graph-outline",
                    "no-caps": ""
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["data"])
            ]),
            _: 1
          }, 8, ["modelValue", "title"])
        ]),
        _: 1
      }),
      createBaseVNode("div", _hoisted_6, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.moment.children, (m) => {
          return openBlock(), createElementBlock("div", {
            key: m.id
          }, [
            createVNode($setup["MomentRepresentation"], {
              genericGraphs: $props.genericGraphs,
              momentId: m.id
            }, null, 8, ["genericGraphs", "momentId"])
          ]);
        }), 128))
      ]),
      !$setup.moment.children.length ? (openBlock(), createBlock($setup["DropZone"], {
        key: 0,
        data: `in:${$props.momentId}`,
        class: "empty-padding",
        types: "upmt/moment upmt/selection upmt/descriptem upmt/annotation",
        onMoment: $setup.droppedNewMoment,
        onAnnotation: $setup.droppedCreatingAnnotation,
        onSelection: $setup.droppedCreatingSelection,
        onDescriptem: $setup.droppedCreatingDescriptem
      }, null, 8, ["data"])) : createCommentVNode("", true)
    ], 14, _hoisted_2$7)) : createCommentVNode("", true),
    createVNode($setup["DropZone"], {
      data: "after",
      class: "empty-padding",
      types: "upmt/moment upmt/selection upmt/descriptem upmt/annotation",
      onMoment: $setup.droppedNewMoment,
      onAnnotation: $setup.droppedCreatingAnnotation,
      onSelection: $setup.droppedCreatingSelection,
      onDescriptem: $setup.droppedCreatingDescriptem
    }, {
      default: withCtx(() => [
        createVNode(QBtn, {
          flat: "",
          dense: "",
          size: "xs",
          class: "new-moment-button",
          icon: "mdi-plus",
          onClick: _cache[6] || (_cache[6] = ($event) => $setup.droppedCreatingSelection("{}", "after"))
        }, {
          default: withCtx(() => [
            createVNode(QTooltip, null, {
              default: withCtx(() => [..._cache[8] || (_cache[8] = [
                createTextVNode("Create a new moment here", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ], 10, _hoisted_1$7);
}
const MomentRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-5c6c287f"], ["__file", "MomentRepresentation.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AnalysisRepresentation",
  props: {
    analysisId: { type: String, default: "" },
    genericGraphs: { type: Object, default: null }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const istore = useInterfaceStore();
    const props = __props;
    const { highlightedMomentId } = storeToRefs(istore);
    const analysis = computed(() => {
      const result = store.getAnalysis(props.analysisId);
      return result;
    });
    watch(highlightedMomentId, () => {
      if (highlightedMomentId.value) {
        const element = document.querySelector(`[data-moment="${highlightedMomentId.value}"]`);
        if (element) {
          element.scrollIntoView();
        }
      }
    });
    const __returned__ = { store, istore, props, highlightedMomentId, analysis, MomentRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$6 = ["data-moment"];
const _hoisted_2$6 = { class: "analysis-content moment-children" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.analysis ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "analysis",
    "data-moment": $props.analysisId
  }, [
    createBaseVNode("div", _hoisted_2$6, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.analysis.rootMoment.children, (m) => {
        return openBlock(), createElementBlock("div", {
          key: m.id
        }, [
          createVNode($setup["MomentRepresentation"], {
            genericGraphs: $props.genericGraphs,
            momentId: m.id
          }, null, 8, ["genericGraphs", "momentId"])
        ]);
      }), 128))
    ])
  ], 8, _hoisted_1$6)) : createCommentVNode("", true);
}
const AnalysisRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-8b60ce22"], ["__file", "AnalysisRepresentation.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "InterviewRepresentation",
  props: {
    interviewId: { type: String, default: "" },
    genericGraphs: { type: Object, default: null }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const istore = useInterfaceStore();
    const store = useProjectStore();
    const props = __props;
    const interview = computed(() => store.getInterview(props.interviewId));
    const el = ref(null);
    const momentMinimumWidthVar = useCssVar("--moment-minimum-width", el);
    const minimumWidth = computed({
      get: () => parseFloat(momentMinimumWidthVar.value),
      set: (value) => {
        momentMinimumWidthVar.value = `${value}px`;
      }
    });
    function expandAllMoments() {
      store.getRepo().Moment.where("interviewId", props.interviewId).update({ isExpanded: true });
    }
    function closeAllMoments() {
      store.getRepo().Moment.where("interviewId", props.interviewId).update({ isExpanded: false });
    }
    function createMoment() {
      if (interview.value) {
        const analysis = store.getAnalysis(interview.value.analysis.id);
        if (analysis) {
          const moments = analysis.rootMoment.children;
          if (moments.length) {
            const lastMoment = moments[moments.length - 1];
            if (lastMoment) {
              store.addMoment(
                istore.newMomentId(),
                lastMoment.id,
                "after"
              );
            }
          } else {
            store.addMoment(
              istore.newMomentId(),
              analysis.rootMoment.id,
              `in:${analysis.rootMoment.id}`
            );
          }
        }
      }
    }
    const __returned__ = { istore, store, props, interview, el, momentMinimumWidthVar, minimumWidth, expandAllMoments, closeAllMoments, createMoment, get VueZoomable() {
      return me;
    }, DragElement, AnalysisRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = ["data-interview"];
const _hoisted_2$5 = { class: "col-2 q-mx-md q-pa-no" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.interview ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "interview flex column no-wrap no-scroll",
    "data-interview": $props.interviewId
  }, [
    createVNode(QToolbar, { class: "interview-toolbar row print-removed" }, {
      default: withCtx(() => [
        createVNode($setup["DragElement"], {
          type: "moment",
          data: ""
        }, {
          default: withCtx(() => [
            createVNode(QBtn, {
              size: "sm",
              onClick: $setup.createMoment
            }, {
              default: withCtx(() => [
                _cache[2] || (_cache[2] = createTextVNode(" New moment ", -1)),
                createVNode(QTooltip, {
                  anchor: "top middle",
                  offset: [0, 30]
                }, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createTextVNode("Click or drag this button to create a new moment>", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(QBtn, {
          icon: "mdi-arrow-expand-down",
          size: "sm",
          onClick: $setup.expandAllMoments
        }, {
          default: withCtx(() => [
            createVNode(QTooltip, {
              anchor: "top middle",
              offset: [0, 30]
            }, {
              default: withCtx(() => [..._cache[3] || (_cache[3] = [
                createTextVNode(" Expand all moments ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(QBtn, {
          icon: "mdi-arrow-expand-up",
          size: "sm",
          onClick: $setup.closeAllMoments
        }, {
          default: withCtx(() => [
            createVNode(QTooltip, {
              anchor: "top middle",
              offset: [0, 30]
            }, {
              default: withCtx(() => [..._cache[4] || (_cache[4] = [
                createTextVNode(" Close all moments ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_2$5, [
          createVNode(QBadge, { color: "info" }, {
            default: withCtx(() => [
              createTextVNode(" Moment width: " + toDisplayString($setup.minimumWidth), 1)
            ]),
            _: 1
          }),
          createVNode(QSlider, {
            modelValue: $setup.minimumWidth,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.minimumWidth = $event),
            min: 50,
            max: 500,
            step: 10
          }, null, 8, ["modelValue"])
        ]),
        createVNode(QSpace)
      ]),
      _: 1
    }),
    createVNode($setup["VueZoomable"], {
      selector: ".analysis-representation",
      style: { "flex-grow": "1" },
      minZoom: 0.5,
      maxZoom: 4,
      wheelZoomStep: $setup.istore.settings.zoomStep
    }, {
      default: withCtx(() => [
        $setup.interview.analysis ? (openBlock(), createBlock($setup["AnalysisRepresentation"], {
          key: 0,
          ref: "analysis",
          class: "analysis-representation",
          genericGraphs: $props.genericGraphs,
          analysisId: $setup.interview.analysis.id
        }, null, 8, ["genericGraphs", "analysisId"])) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["wheelZoomStep"])
  ], 8, _hoisted_1$5)) : createCommentVNode("", true);
}
const InterviewRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "InterviewRepresentation.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ElementNameInput",
  props: {
    element: { type: BaseModel, default: null },
    label: { type: String, default: "Name" }
  },
  emits: ["change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const store = useProjectStore();
    const emit = __emit;
    const props = __props;
    const name = ref(props.element.name);
    const elementName = computed({
      get() {
        return props.element ? props.element.name : "";
      },
      set(value) {
        store.updateElement(props.element, { name: value });
      }
    });
    function validate() {
      if (props.element) {
        store.updateElement(props.element, { name: name.value });
      }
      emit("change", name.value);
    }
    function cancel() {
      emit("change", props.element.name);
    }
    const __returned__ = { store, emit, props, name, elementName, validate, cancel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createTextVNode(toDisplayString($props.element.name) + " ", 1),
    createVNode(QPopupEdit, {
      modelValue: $setup.elementName,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.elementName = $event),
      "auto-save": "",
      buttons: ""
    }, {
      default: withCtx((scope) => [
        createVNode(QInput, {
          label: $props.label,
          type: "textarea",
          modelValue: scope.value,
          "onUpdate:modelValue": ($event) => scope.value = $event,
          onKeyup: [
            withKeys(withModifiers($setup.validate, ["ctrl"]), ["enter"]),
            withKeys($setup.cancel, ["esc"])
          ],
          dense: "",
          autogrow: "",
          autofocus: ""
        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "onKeyup"])
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
const ElementNameInput = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "ElementNameInput.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SpecificSynchronicModelRepresentation",
  props: {
    modelId: { type: String, default: null },
    isGeneric: { type: Boolean, default: false },
    hideJustifications: { type: Boolean, default: false },
    layout: { type: String, default: "horizontal" },
    genericGraphs: { type: Object, default: null }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const istore = useInterfaceStore();
    const store = useProjectStore();
    const props = __props;
    const model = computed(() => store.getSpecificSynchronicModel(props.modelId));
    function showContent() {
      console.log("SSM showContent");
    }
    function debug() {
      window.specificsynchronicmodel = model.value;
      console.log("specificsynchronicmodel", model.value);
    }
    function droppedGenericSynchronicCategory(categoryName, where) {
      const genericInfo = props.genericGraphs ? props.genericGraphs.byName[categoryName] : { abstractionType: "" };
      store.addSpecificSynchronicCategory(
        stripContextFromName(categoryName),
        props.modelId,
        where,
        null,
        genericInfo?.abstractionType || ""
      );
      showContent();
    }
    function droppedSpecificSynchronicCategory(categoryId, where) {
      const category = store.getSpecificSynchronicCategory(categoryId);
      if (category) {
        const genericInfo = props.genericGraphs ? props.genericGraphs.byName[category.fullName] : { abstractionType: "" };
        store.addSpecificSynchronicCategory(
          category.name,
          props.modelId,
          where,
          null,
          genericInfo?.abstractionType || ""
        );
        showContent();
      }
    }
    function droppedCreatingDescriptem(descriptemId, where) {
      const descriptem = store.getDescriptem(descriptemId);
      if (descriptem && model.value) {
        store.addSpecificSynchronicCategory(
          istore.newSSCId(),
          props.modelId,
          where,
          descriptem.toJSON()
        );
        showContent();
      }
    }
    function droppedCreatingAnnotation(annotationId, where) {
      const annotation = store.getAnnotation(annotationId);
      if (annotation && model.value) {
        store.addSpecificSynchronicCategory(
          istore.newSSCId(),
          props.modelId,
          where,
          annotation.toJSON()
        );
        showContent();
      }
    }
    function droppedCreatingSelection(selectionData, where) {
      try {
        const selection = JSON.parse(selectionData);
        if (model.value) {
          store.addSpecificSynchronicCategory(
            istore.newSSCId(),
            props.modelId,
            where,
            selection
          );
          showContent();
        }
      } catch (e) {
        console.log(`Cannot parse ${selectionData}: ${e}`);
      }
    }
    function createSpecificSynchronicCategory(where) {
      if (model.value) {
        store.addSpecificSynchronicCategory(
          istore.newSSCId(),
          props.modelId,
          where,
          null
        );
        showContent();
      }
    }
    const __returned__ = { istore, store, props, model, showContent, debug, droppedGenericSynchronicCategory, droppedSpecificSynchronicCategory, droppedCreatingDescriptem, droppedCreatingAnnotation, droppedCreatingSelection, createSpecificSynchronicCategory, get VueZoomable() {
      return me;
    }, DragElement, DropZone, SpecificSynchronicCategoryRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = ["data-specificsynchronicmodel"];
const _hoisted_2$4 = { class: "specificsynchronicmodel-title" };
const _hoisted_3$3 = { class: "specificsynchronicmodel-categories" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.model ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["specificsynchronicmodel-container", $props.layout]),
    "data-specificsynchronicmodel": $props.modelId
  }, [
    createVNode($setup["DropZone"], {
      data: `inmodel:${$props.modelId}`,
      class: "editor-toolbar flex",
      types: "upmt/specificsynchroniccategory upmt/genericsynchroniccategory upmt/selection upmt/descriptem upmt/annotation",
      onSpecificsynchroniccategory: $setup.droppedSpecificSynchronicCategory,
      onGenericsynchroniccategory: $setup.droppedGenericSynchronicCategory,
      onAnnotation: $setup.droppedCreatingAnnotation,
      onSelection: $setup.droppedCreatingSelection,
      onDescriptem: $setup.droppedCreatingDescriptem
    }, {
      default: withCtx(() => [
        createVNode($setup["DragElement"], {
          type: "specificsynchronicmodel",
          data: "modelId",
          onClick: withModifiers($setup.debug, ["meta"])
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$4, [
              createVNode(QIcon, {
                ref: "handle",
                class: "specificsynchronicmodel-handle",
                size: "xs",
                onClick: withModifiers($setup.debug, ["meta"]),
                name: "mdi-graph-outline"
              }, null, 512),
              createVNode(QBtn, {
                dense: "",
                flat: "",
                "no-caps": "",
                onClick: _cache[0] || (_cache[0] = ($event) => $setup.createSpecificSynchronicCategory(`inmodel:${$props.modelId}`)),
                title: "Drop a descriptem here to create a new category"
              }, {
                default: withCtx(() => [..._cache[1] || (_cache[1] = [
                  createTextVNode(" New category ", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["data"]),
    createVNode($setup["VueZoomable"], {
      style: { "flex-grow": "1" },
      selector: ".specificsynchronicmodel-categories",
      minZoom: 0.5,
      maxZoom: 4,
      wheelZoomStep: $setup.istore.settings.zoomStep
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_3$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.model.categories, (c) => {
            return openBlock(), createBlock($setup["SpecificSynchronicCategoryRepresentation"], {
              key: c.id,
              isGeneric: $props.isGeneric,
              layout: $props.layout,
              genericGraphs: $props.genericGraphs,
              hideJustifications: !$setup.model.momentId,
              categoryId: c.id
            }, null, 8, ["isGeneric", "layout", "genericGraphs", "hideJustifications", "categoryId"]);
          }), 128)),
          createVNode($setup["DropZone"], {
            data: `inmodel:${$props.modelId}`,
            class: "flex empty-padding default-height",
            types: "upmt/specificsynchroniccategory upmt/genericsynchroniccategory upmt/selection upmt/descriptem upmt/annotation",
            onSpecificsynchroniccategory: $setup.droppedSpecificSynchronicCategory,
            onGenericsynchroniccategory: $setup.droppedGenericSynchronicCategory,
            onAnnotation: $setup.droppedCreatingAnnotation,
            onSelection: $setup.droppedCreatingSelection,
            onDescriptem: $setup.droppedCreatingDescriptem
          }, null, 8, ["data"])
        ])
      ]),
      _: 1
    }, 8, ["wheelZoomStep"])
  ], 10, _hoisted_1$4)) : createCommentVNode("", true);
}
const SpecificSynchronicModelRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-92e35527"], ["__file", "SpecificSynchronicModelRepresentation.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SpecificSynchronicModelEditor",
  props: {
    modelId: {},
    genericGraphs: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const istore = useInterfaceStore();
    const props = __props;
    const editedSpecificSynchronicModel = computed(() => {
      return store.getSpecificSynchronicModel(props.modelId);
    });
    const isEditedModelDetached = computed(() => {
      return !!editedSpecificSynchronicModel.value && !!editedSpecificSynchronicModel.value.detachedModelId;
    });
    const isDetachedModelEmpty = computed(() => {
      return isEditedModelDetached.value && editedSpecificSynchronicModel.value?.categories.length == 0;
    });
    const editViewMode = ref("horizontal");
    const editedSpecificSynchronicModelName = computed({
      get() {
        if (editedSpecificSynchronicModel.value?.moment) {
          return editedSpecificSynchronicModel.value.moment.name;
        } else {
          return editedSpecificSynchronicModel.value?.name ?? "";
        }
      },
      set(value) {
        if (editedSpecificSynchronicModel.value?.moment) {
          store.updateMoment(editedSpecificSynchronicModel.value.moment.id, { name: value });
        } else if (editedSpecificSynchronicModel.value) {
          store.updateElement(editedSpecificSynchronicModel.value, { name: value });
        }
      }
    });
    function updateDetachedModel(model) {
      if (model) {
        store.buildSynchronicModelFromGraphs(model, props.genericGraphs);
      }
    }
    function closeEditedModel() {
      istore.setEditedSpecificSynchronicModelId("");
    }
    const __returned__ = { store, istore, props, editedSpecificSynchronicModel, isEditedModelDetached, isDetachedModelEmpty, editViewMode, editedSpecificSynchronicModelName, updateDetachedModel, closeEditedModel, ElementNameInput, MomentNameInput, SpecificSynchronicModelRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = {
  key: 0,
  class: "edited-model-container flex no-wrap column col-grow"
};
const _hoisted_2$3 = { key: 0 };
const _hoisted_3$2 = { key: 1 };
const _hoisted_4$2 = { key: 2 };
const _hoisted_5 = { class: "model-representation flex col-grow" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.editedSpecificSynchronicModel ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
    createVNode(QToolbar, { class: "row toolbar" }, {
      default: withCtx(() => [
        createBaseVNode("div", null, [
          createVNode(QBtn, {
            icon: "mdi-close",
            flat: "",
            round: "",
            dense: "",
            size: "md",
            class: "float-right",
            onClick: $setup.closeEditedModel
          })
        ]),
        createVNode(QToolbarTitle, { class: "row" }, {
          default: withCtx(() => [
            _cache[6] || (_cache[6] = createBaseVNode("div", null, "Editing ", -1)),
            $setup.editedSpecificSynchronicModel.moment ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
              _cache[4] || (_cache[4] = createTextVNode(" synchronic description of ", -1)),
              createVNode(QIcon, {
                onClick: _cache[0] || (_cache[0] = ($event) => $setup.istore.setHighlightedMomentId($setup.editedSpecificSynchronicModel.moment.id)),
                size: "xs",
                name: "mdi-alpha-d-box-outline"
              }),
              createBaseVNode("strong", null, [
                createTextVNode(toDisplayString($setup.editedSpecificSynchronicModel.moment.name) + " ", 1),
                createVNode(QPopupEdit, {
                  modelValue: $setup.editedSpecificSynchronicModelName,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.editedSpecificSynchronicModelName = $event),
                  "auto-save": ""
                }, {
                  default: withCtx((scope) => [
                    createVNode($setup["MomentNameInput"], {
                      onChange: scope.cancel,
                      moment: $setup.editedSpecificSynchronicModel.moment
                    }, null, 8, ["onChange", "moment"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])) : (openBlock(), createElementBlock("div", _hoisted_3$2, [
              createBaseVNode("strong", null, [
                createVNode($setup["ElementNameInput"], {
                  element: $setup.editedSpecificSynchronicModel,
                  label: "Name"
                }, null, 8, ["element"])
              ])
            ])),
            $setup.isDetachedModelEmpty ? (openBlock(), createElementBlock("span", _hoisted_4$2, [
              createVNode(QBtn, {
                onClick: _cache[2] || (_cache[2] = ($event) => $setup.updateDetachedModel($setup.editedSpecificSynchronicModel))
              }, {
                default: withCtx(() => [..._cache[5] || (_cache[5] = [
                  createTextVNode(" Generate from dynamic model ", -1)
                ])]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            createVNode(QBtnToggle, {
              size: "xs",
              modelValue: $setup.editViewMode,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.editViewMode = $event),
              options: [
                { icon: "mdi-pan-horizontal", value: "horizontal" },
                { icon: "mdi-pan-vertical", value: "vertical" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createBaseVNode("div", _hoisted_5, [
      createVNode($setup["SpecificSynchronicModelRepresentation"], {
        layout: $setup.editViewMode,
        isGeneric: $setup.isEditedModelDetached,
        genericGraphs: $props.genericGraphs,
        modelId: $props.modelId
      }, null, 8, ["layout", "isGeneric", "genericGraphs", "modelId"])
    ])
  ])) : createCommentVNode("", true);
}
const SpecificSynchronicModelEditor = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "SpecificSynchronicModelEditor.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "InterviewMetadataForm",
  props: {
    interview: {},
    metadataOnly: { type: Boolean, default: false }
  },
  emits: ["validate", "cancel"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const $q = useQuasar();
    const filepicker = ref(null);
    const interviewFilename = ref(null);
    const name = ref(props.interview?.name ?? "");
    const participant = ref(props.interview?.participantName ?? "");
    const date = ref(props.interview?.date ?? "");
    const note = ref(props.interview?.note ?? "");
    const text = ref(props.interview?.text ?? "");
    const canValidate = computed(() => name.value && text.value);
    function onSubmit(event) {
      if (event.target) {
        emit("validate", {
          name: name.value,
          participantName: participant.value,
          note: note.value,
          date: date.value,
          // If we are editing an existing interview, the text cannot be modified (and the text ref will always be "")
          text: text.value
        });
      }
    }
    function onCancel() {
      participant.value = "";
      name.value = "";
      date.value = "";
      text.value = "";
      note.value = "";
      interviewFilename.value = null;
      emit("cancel");
    }
    function uploadInterviewFile(sourceFile) {
      const reader = new FileReader();
      reader.onload = () => {
        text.value = reader.result;
      };
      reader.onerror = () => {
        console.error("Error reading file:", reader.error);
        $q.notify({
          type: "error",
          message: `Error reading file: ${reader.error?.message}`
        });
      };
      reader.readAsText(sourceFile);
    }
    const __returned__ = { props, emit, $q, filepicker, interviewFilename, name, participant, date, note, text, canValidate, onSubmit, onCancel, uploadInterviewFile, get QFile() {
      return QFile;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { key: 0 };
const _hoisted_2$2 = { key: 1 };
const _hoisted_3$1 = { class: "row" };
const _hoisted_4$1 = { class: "row items-center all-pointer-events" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QCard, null, {
    default: withCtx(() => [
      $props.interview ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(QCardSection, { class: "bg-secondary text-white text-h5" }, {
          default: withCtx(() => [
            createTextVNode(" Editing " + toDisplayString($props.interview.name), 1)
          ]),
          _: 1
        }),
        _cache[7] || (_cache[7] = createBaseVNode("p", null, "Mandatory information is marked with *", -1))
      ])) : (openBlock(), createElementBlock("div", _hoisted_2$2, [
        createVNode(QCardSection, { class: "bg-secondary text-white text-h5" }, {
          default: withCtx(() => [..._cache[8] || (_cache[8] = [
            createTextVNode(" Create a new interview ", -1)
          ])]),
          _: 1
        }),
        _cache[9] || (_cache[9] = createBaseVNode("p", null, "Please provide the following information to create a new interview. Mandatory information is marked with *", -1))
      ])),
      createVNode(QForm, {
        name: "interviewForm",
        onSubmit: $setup.onSubmit,
        class: "q-gutter-md"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(QBtn, {
              label: !$props.interview ? "Create" : "Validate",
              type: "submit",
              disabled: !$setup.canValidate,
              color: "primary"
            }, null, 8, ["label", "disabled"]),
            createVNode(QBtn, {
              label: "Cancel",
              color: "primary",
              flat: "",
              class: "q-ml-sm",
              onClick: $setup.onCancel
            })
          ]),
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(QInput, {
              filled: "",
              modelValue: $setup.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.name = $event),
              label: "Interview name/id *",
              "lazy-rules": "",
              class: "col-4",
              rules: [(val) => val && val.length > 0 || "It  must be filled"]
            }, null, 8, ["modelValue", "rules"]),
            createVNode(QInput, {
              filled: "",
              modelValue: $setup.participant,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.participant = $event),
              label: "Participant name",
              "lazy-rules": "",
              class: "col-4 q-px-md"
            }, null, 8, ["modelValue"]),
            createVNode(QInput, {
              filled: "",
              type: "date",
              modelValue: $setup.date,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.date = $event),
              label: "Interview date",
              "lazy-rules": "",
              class: "col-4 q-px-md"
            }, null, 8, ["modelValue"])
          ]),
          createVNode(QInput, {
            filled: "",
            autogrow: "",
            type: "text",
            modelValue: $setup.note,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.note = $event),
            label: "Note"
          }, null, 8, ["modelValue"]),
          !$props.metadataOnly ? (openBlock(), createBlock(QInput, {
            key: 0,
            filled: "",
            "label-slot": "",
            autogrow: "",
            "input-style": { minHeight: "4em", maxHeight: "30em" },
            hint: "Please provide the interview text by pasting it here, uploading a file with the upload button or by dragging it here.",
            type: "textarea",
            modelValue: $setup.text,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.text = $event),
            label: "Interview text *"
          }, {
            label: withCtx(() => [
              createBaseVNode("div", _hoisted_4$1, [
                _cache[10] || (_cache[10] = createTextVNode(" Paste interview text here or ", -1)),
                createVNode($setup["QFile"], {
                  label: "drag an existing text file here",
                  modelValue: $setup.interviewFilename,
                  "onUpdate:modelValue": [
                    _cache[5] || (_cache[5] = ($event) => $setup.interviewFilename = $event),
                    $setup.uploadInterviewFile
                  ],
                  ref: "filepicker",
                  outlined: "",
                  "hide-bottom-space": "",
                  square: "",
                  dense: "",
                  "item-aligned": ""
                }, {
                  prepend: withCtx(() => [
                    createVNode(QIcon, {
                      name: "mdi-upload-circle-outline",
                      onClick: _cache[4] || (_cache[4] = withModifiers(() => {
                      }, ["stop", "prevent"]))
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const InterviewMetadataForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "InterviewMetadataForm.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TextAnnotation",
  props: {
    interviewId: { type: String, default: null }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const store = useProjectStore();
    const istore = useInterfaceStore();
    const contextMenuVisible = ref(false);
    const isMetadataVisible = ref(false);
    const activeAnnotations = ref([]);
    const activeDescriptems = ref([]);
    const currentSelection = ref(null);
    const selectionColor = ref("");
    const { highlightedDescriptemId } = storeToRefs(istore);
    const interview = computed(() => store.getInterview(props.interviewId));
    function metadataValidate(info) {
      isMetadataVisible.value = false;
      if (interview.value) {
        store.updateElement(interview.value, {
          name: info.name,
          participantName: info.participantName,
          date: info.date,
          note: info.note
        });
      }
    }
    const annotation2class = (a) => {
      const mapping = {
        "#7084b0": "2",
        "#7bcf7b": "4",
        "#ff9797": "1",
        "#ffdc97": "3"
      };
      return `category${mapping[a.color] ?? "9"}`;
    };
    const annotations = computed(() => {
      const interviewId = props.interviewId;
      const interviewAnnotations = store.getInterviewAnnotations(interviewId).map((a) => {
        return {
          interviewId: a.interviewId,
          id: a.id,
          start: a.startIndex,
          length: a.endIndex - a.startIndex,
          color: a.color,
          class: annotation2class(a)
        };
      });
      const interviewDescriptems = store.getDescriptemsByInterview(interviewId).map((d) => {
        return {
          interviewId: d.interviewId,
          id: d.id,
          start: d.startIndex,
          length: d.endIndex - d.startIndex,
          color: null,
          class: "descriptem"
        };
      });
      return [...interviewAnnotations, ...interviewDescriptems];
    });
    const selectionShorttext = computed(() => {
      if (currentSelection.value) {
        const text = (interview.value?.text ?? "").slice(
          currentSelection.value.startIndex,
          currentSelection.value.endIndex
        );
        return ellipsize(text);
      } else {
        return "";
      }
    });
    function getSpanClasses(span) {
      const classes = span.annotations.map((a) => a.class);
      const descriptemCount = classes.filter((c) => c === "descriptem").length;
      if (descriptemCount >= 2) {
        classes.push("descriptems");
        classes.push(`descriptems${descriptemCount}`);
      }
      return [...new Set(classes)].join(" ");
    }
    function toggleMetadata() {
      isMetadataVisible.value = !isMetadataVisible.value;
      if (isMetadataVisible.value) {
        const container = document.querySelector(".textAnnotationContainer");
        if (container) {
          container.scrollTo(0, 0);
        }
      }
    }
    const spanEvents = {
      /*
      click: (event: Event, annotations: BaseAnnotation[]) => {
          // annotations can contain descriptems or annotations
          if (selectedAnnotationInspector.value) {
              const message = annotations.map(a => `${a.start}:${a.start + a.length} ${a.class}`).join(" ")
              selectedAnnotationInspector.value.textContent = message
          }
          },
          */
      // Do not activate mouseover/leave for the moment, it has a small performance cost
      mouseover: (_event, annotations2) => {
        activeDescriptems.value = annotations2.filter((a) => a.class === "descriptem").map((a) => store.getDescriptem(a.id));
        activeAnnotations.value = annotations2.filter((a) => a.class !== "descriptem").map((a) => store.getAnnotation(a.id));
      }
      // mouseleave: (event: Event, annotations: Array<unknown>) => console.log("Mouseleave", event, annotations)
    };
    const currentSelectionDataAsString = computed(() => {
      if (currentSelection.value) {
        return JSON.stringify(currentSelection.value);
      } else {
        return "{}";
      }
    });
    function textSelection(data) {
      if (interview.value) {
        currentSelection.value = {
          startIndex: data.begin,
          endIndex: data.end,
          interviewId: props.interviewId,
          text: interview.value.fragment(data.begin, data.end)
        };
        if (selectionColor.value) {
          store.addAnnotation(currentSelection.value, selectionColor.value);
        }
      }
    }
    function onDragStart(event) {
      if (event.dataTransfer) {
        event.dataTransfer.setData(`upmt/selection`, currentSelectionDataAsString.value);
      }
    }
    function annotationDelete(identifier) {
      store.deleteAnnotation(identifier);
    }
    watch(highlightedDescriptemId, () => {
      if (highlightedDescriptemId.value) {
        document.querySelectorAll("[data-annotation-ids].highlighted").forEach((element) => element.classList.remove("highlighted"));
        const elements = document.querySelectorAll(`[data-annotation-ids*="${highlightedDescriptemId.value}"]`);
        elements.forEach((element) => element.classList.add("highlighted"));
        if (elements.length && elements[0]) {
          elements[0].scrollIntoView({ block: "center", behavior: "smooth" });
        }
      } else {
        document.querySelectorAll("[data-annotation-ids].highlighted").forEach((element) => element.classList.remove("highlighted"));
      }
    });
    const __returned__ = { props, store, istore, contextMenuVisible, isMetadataVisible, activeAnnotations, activeDescriptems, currentSelection, selectionColor, highlightedDescriptemId, interview, metadataValidate, annotation2class, annotations, selectionShorttext, getSpanClasses, toggleMetadata, spanEvents, currentSelectionDataAsString, textSelection, onDragStart, annotationDelete, AnnotatedText, NoteIcon, DescriptemRepresentation, InterviewMetadataForm, DragElement, get ANNOTATION_COLORS() {
      return ANNOTATION_COLORS;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "textAnnotationContainer"
};
const _hoisted_2$1 = { key: 0 };
const _hoisted_3 = { class: "extract" };
const _hoisted_4 = { class: "extract" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.interview ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(QToolbar, { class: "row justify-end absolute-top bg-white" }, {
      default: withCtx(() => [
        createVNode($setup["NoteIcon"], { element: $setup.interview }, null, 8, ["element"]),
        createVNode(QBtn, {
          flat: "",
          size: "sm",
          dense: "",
          title: "Edit metadata",
          onClick: $setup.toggleMetadata,
          icon: "edit"
        }),
        createVNode(QSpace),
        createVNode(QBtn, {
          size: "sm",
          icon: "mdi-cursor-text",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.selectionColor = ""),
          flat: $setup.selectionColor != "",
          dense: ""
        }, null, 8, ["flat"]),
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.ANNOTATION_COLORS, (color) => {
          return openBlock(), createBlock(QBtn, {
            size: "sm",
            key: color,
            icon: "mdi-marker",
            onClick: ($event) => $setup.selectionColor = color,
            flat: color != $setup.selectionColor,
            dense: "",
            style: normalizeStyle({ color })
          }, null, 8, ["onClick", "flat", "style"]);
        }), 128))
      ]),
      _: 1
    }),
    $setup.isMetadataVisible ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
      createVNode($setup["InterviewMetadataForm"], {
        interview: $setup.interview,
        metadataOnly: true,
        onCancel: _cache[1] || (_cache[1] = ($event) => $setup.isMetadataVisible = false),
        onValidate: $setup.metadataValidate
      }, null, 8, ["interview"]),
      _cache[4] || (_cache[4] = createBaseVNode("em", null, "Interview text below is not modifiable", -1))
    ])) : createCommentVNode("", true),
    $setup.interview ? (openBlock(), createBlock($setup["AnnotatedText"], {
      key: 1,
      class: "textAnnotationComponent q-pt-lg q-pa-md",
      text: $setup.interview.text,
      annotations: $setup.annotations,
      getSpanClasses: $setup.getSpanClasses,
      spanEvents: $setup.spanEvents,
      onDragstart: _cache[3] || (_cache[3] = ($event) => $setup.onDragStart($event)),
      onSelection: $setup.textSelection
    }, {
      default: withCtx(() => [
        createVNode(QMenu, {
          "touch-position": "",
          "context-menu": "",
          modelValue: $setup.contextMenuVisible,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.contextMenuVisible = $event)
        }, {
          default: withCtx(() => [
            createVNode(QList, {
              dense: "",
              style: { "min-width": "100px" }
            }, {
              default: withCtx(() => [
                $setup.selectionShorttext ? withDirectives((openBlock(), createBlock(QItem, {
                  key: "current",
                  clickable: ""
                }, {
                  default: withCtx(() => [
                    createVNode($setup["DragElement"], {
                      type: "selection",
                      data: $setup.currentSelectionDataAsString
                    }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          size: "xs",
                          name: "mdi-select"
                        }),
                        createBaseVNode("span", _hoisted_3, toDisplayString($setup.selectionShorttext), 1)
                      ]),
                      _: 1
                    }, 8, ["data"])
                  ]),
                  _: 1
                })), [
                  [ClosePopup]
                ]) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.activeDescriptems, (descriptem) => {
                  return withDirectives((openBlock(), createBlock(QItem, {
                    key: descriptem.id,
                    clickable: "",
                    row: ""
                  }, {
                    default: withCtx(() => [
                      createVNode($setup["DescriptemRepresentation"], {
                        class: "full-width",
                        descriptemId: descriptem.id,
                        withContext: "",
                        withMenu: false
                      }, null, 8, ["descriptemId"])
                    ]),
                    _: 2
                  }, 1024)), [
                    [ClosePopup]
                  ]);
                }), 128)),
                createVNode(QSeparator),
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.activeAnnotations, (annotation) => {
                  return withDirectives((openBlock(), createBlock(QItem, {
                    key: annotation.id,
                    clickable: ""
                  }, {
                    default: withCtx(() => [
                      createVNode($setup["DragElement"], {
                        type: "annotation",
                        data: annotation.id
                      }, {
                        default: withCtx(() => [
                          createVNode(QIcon, {
                            size: "xs",
                            style: normalizeStyle({ backgroundColor: annotation.color || "transparent" }),
                            name: "mdi-comment-quote-outline"
                          }, null, 8, ["style"]),
                          createBaseVNode("span", _hoisted_4, toDisplayString(annotation.shorttext), 1)
                        ]),
                        _: 2
                      }, 1032, ["data"]),
                      createVNode(QSpace),
                      createVNode(QBtn, {
                        size: "xs",
                        flat: "",
                        dense: "",
                        icon: "mdi-delete-outline",
                        onClick: ($event) => $setup.annotationDelete(annotation.id)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)), [
                    [ClosePopup]
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["text", "annotations"])) : createCommentVNode("", true)
  ])) : createCommentVNode("", true);
}
const TextAnnotation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3d12a360"], ["__file", "TextAnnotation.vue"]]);
const newInterviewId = "New_interview";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectInterviewSelection",
  props: {
    projectId: { type: String, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const istore = useInterfaceStore();
    const router = useRouter();
    const store = useProjectStore();
    const { registerTimeout } = useTimeout();
    const props = __props;
    const project = computed(() => {
      const p = store.getProject(props.projectId);
      return p;
    });
    const $q = useQuasar();
    const newInterviewLabel = computed(() => project.value && project.value.interviews.length ? "" : "Add a first interview");
    const newInterviewTemplate = {
      name: "",
      participantName: "",
      note: "",
      date: "",
      text: ""
    };
    const {
      editedSpecificSynchronicModelId,
      highlightedMomentId
    } = storeToRefs(istore);
    const splitterModel = ref(20);
    const splitterTranscript = ref(80);
    const splitterInterview = ref(500);
    const infoPanelDisplay = ref(false);
    const _currentInterviewId = ref("");
    const currentInterviewId = computed({
      get() {
        return _currentInterviewId.value || "";
      },
      set(value) {
        const current = _currentInterviewId.value;
        _currentInterviewId.value = value;
        if (value !== current && value !== newInterviewId) {
          istore.setCurrentInterview(store.getInterview(value));
          istore.setHighlightedMomentId("");
        }
      }
    });
    const genericGraphs = computed(() => store.getGenericSynchronicGraphs(props.projectId));
    const editedSpecificSynchronicModel = computed(() => {
      return store.getSpecificSynchronicModel(editedSpecificSynchronicModelId.value);
    });
    watch(editedSpecificSynchronicModelId, () => {
      const moment = editedSpecificSynchronicModel.value?.moment;
      if (moment) {
        currentInterviewId.value = moment.interviewId;
        registerTimeout(() => {
          const element = document.querySelector(`[data-moment="${moment.id}"]`);
          console.log("Scroll to moment", element);
          if (element) {
            element.scrollIntoView({ block: "center", behavior: "smooth", container: "nearest" });
          }
        }, 1e3);
      } else {
        if (!currentInterviewId.value) {
          currentInterviewId.value = project.value?.interviews[0]?.id ?? "";
        }
      }
    });
    watch(highlightedMomentId, () => {
      if (highlightedMomentId.value) {
        const interview = store.getInterviewByMoment(highlightedMomentId.value);
        if (interview && interview.id != currentInterviewId.value) {
          currentInterviewId.value = interview.id;
        }
        registerTimeout(() => {
          const element = document.querySelector(`[data-moment="${highlightedMomentId.value}"]`);
          console.log("Scroll to moment", element);
          if (element) {
            element.scrollIntoView({ block: "center", behavior: "smooth", container: "nearest" });
          }
        }, 1e3);
      }
    });
    watch(
      () => props.projectId,
      () => {
        if (project.value && project.value.interviews[0]) {
          currentInterviewId.value = project.value.interviews[0].id || "";
        } else {
          currentInterviewId.value = newInterviewId;
        }
        istore.resetIndexes(
          store.getSpecificSynchronicCategoryNamesByPrefix(props.projectId, istore.SSCPrefix),
          store.getMomentsByProject(props.projectId).map((moment) => moment.name)
        );
      },
      // Trigger function at init time too
      { immediate: true }
    );
    function onInterviewCreate(info) {
      const i = store.getRepo().Interview.save({
        // This should be ...info
        // but then TypeScript has trouble determining output type
        name: info.name,
        participantName: info.participantName,
        note: info.note,
        date: info.date,
        text: info.text,
        parentId: props.projectId,
        annotations: [],
        analysis: {
          name: "",
          rootMoment: {
            // Root moment is not visible per-se, it serves
            // as a placeholder for its children
            name: "Root moment",
            children: [
              {
                name: "Moment 1",
                isExpanded: true,
                specificsynchronicmodel: {
                  name: "Initial",
                  categories: []
                },
                justification: {
                  name: "",
                  descriptems: []
                }
              }
            ]
          }
        }
      });
      const rootMoment = i.analysis?.rootMoment;
      if (rootMoment) {
        store.updateMoment(rootMoment.id, { interviewId: i.id });
        if (rootMoment.children.length && rootMoment.children[0]) {
          store.updateMoment(rootMoment.children[0].id, { interviewId: i.id });
        }
      }
      setTimeout(() => {
        router.push({
          query: {
            tab: info.name
          }
        }).catch((e) => {
          console.log(`Error when switching view: ${e}`);
        });
      }, 300);
    }
    function onInterviewCancel() {
      if (project.value && project.value.interviews[0]) {
        router.push({
          query: {
            tab: project.value.interviews[0].name
          }
        }).catch((e) => {
          console.log(`Error when switching view: ${e}`);
        });
      }
    }
    const infoPanelColor = computed(() => {
      return genericGraphs.value.errorCount > 0 ? "red" : "";
    });
    onUnmounted(() => {
      istore.setCurrentInterview(null);
      istore.setEditedSpecificSynchronicModelId("");
    });
    function debug(interview) {
      window.interview = interview;
      console.log("Interview", interview.name, interview);
    }
    const menuActions = [
      ["Toggle active status", (interview) => {
        store.setActiveInterview(props.projectId, interview.id, !interview.isActive);
      }],
      [
        "Delete",
        (interview) => {
          $q.dialog({
            title: "Confirm interview deletion",
            html: true,
            message: `Do you confirm the deletion of  <strong>${interview.label}</strong>?`,
            cancel: true,
            persistent: true
          }).onOk(() => {
            const name = interview.name;
            currentInterviewId.value = "";
            store.deleteInterview(interview.id);
            $q.notify({
              type: "info",
              message: `Deleted interview ${name}`
            });
          });
        }
      ]
    ];
    const __returned__ = { istore, router, store, registerTimeout, props, project, $q, newInterviewId, newInterviewLabel, newInterviewTemplate, editedSpecificSynchronicModelId, highlightedMomentId, splitterModel, splitterTranscript, splitterInterview, infoPanelDisplay, _currentInterviewId, currentInterviewId, genericGraphs, editedSpecificSynchronicModel, onInterviewCreate, onInterviewCancel, infoPanelColor, debug, menuActions, DetachedModelsRepresentation, ElementMenu, GenericCategoriesOverview, GenericCategoriesRepresentation, GenericDiachronicCategoriesRepresentation, InfoPanel, InterviewRepresentation, SpecificSynchronicModelEditor, TextAnnotation, InterviewMetadataForm };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  row: ""
};
const _hoisted_2 = { class: "fit fullwindow-height" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.project ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(QSplitter, {
      modelValue: $setup.splitterModel,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.splitterModel = $event),
      beforeClass: "print-removed",
      limits: [10, 90]
    }, {
      before: withCtx(() => [
        createBaseVNode("div", _hoisted_2, [
          _cache[8] || (_cache[8] = createBaseVNode("div", { class: "text-bold" }, "Interviews", -1)),
          createVNode(QTabs, {
            dense: "",
            class: "upmt-interviews",
            "active-class": "active-interview-label -",
            align: "left",
            "no-caps": "",
            inlineLabel: true,
            modelValue: $setup.currentInterviewId,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.currentInterviewId = $event),
            vertical: ""
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.project.interviews, (interview) => {
                return openBlock(), createBlock(QRouteTab, {
                  to: { query: { tab: interview.label } },
                  onClick: withModifiers(($event) => $setup.debug(interview), ["meta"]),
                  icon: interview.isActive ? "mdi-comment-text-outline" : "mdi-comment-off-outline",
                  "no-caps": "",
                  name: interview.id,
                  key: interview.id,
                  title: interview.note,
                  label: interview.label
                }, {
                  default: withCtx(() => [
                    createVNode($setup["ElementMenu"], {
                      actions: $setup.menuActions,
                      parameter: interview
                    }, null, 8, ["parameter"])
                  ]),
                  _: 2
                }, 1032, ["to", "onClick", "icon", "name", "title", "label"]);
              }), 128)),
              createVNode(QRouteTab, {
                to: { query: { tab: $setup.newInterviewId } },
                label: $setup.newInterviewLabel,
                class: "new-interview",
                "content-class": "new-interview",
                name: $setup.newInterviewId,
                icon: "add"
              }, null, 8, ["to", "label"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(QSeparator),
          createVNode($setup["GenericDiachronicCategoriesRepresentation"], {
            title: "Generic Diachronic Categories",
            class: "generic-diachronic-categories",
            projectId: $props.projectId,
            currentInterviewId: $setup.currentInterviewId
          }, null, 8, ["projectId", "currentInterviewId"]),
          createVNode(QSeparator),
          _cache[9] || (_cache[9] = createBaseVNode("div", { class: "text-bold" }, null, -1)),
          createVNode($setup["DetachedModelsRepresentation"], {
            title: "Detached models",
            class: "upmt-detached-models",
            projectId: $props.projectId,
            genericGraphs: $setup.genericGraphs,
            currentInterviewId: $setup.currentInterviewId
          }, null, 8, ["projectId", "genericGraphs", "currentInterviewId"]),
          createVNode(QSeparator),
          createVNode($setup["GenericCategoriesRepresentation"], {
            title: "Merged generic synchronic model",
            projectId: $props.projectId,
            genericGraphs: $setup.genericGraphs,
            currentInterviewId: $setup.currentInterviewId
          }, null, 8, ["projectId", "genericGraphs", "currentInterviewId"]),
          createVNode(QExpansionItem, {
            dense: "",
            "dense-toggle": "",
            "switch-toggle-side": "",
            duration: 0,
            "expand-icon": "mdi-eye-outline",
            "expanded-icon": "mdi-eye-off-outline",
            label: "Overview"
          }, {
            default: withCtx(() => [
              createVNode($setup["GenericCategoriesOverview"], {
                projectId: $props.projectId,
                currentInterviewId: $setup.currentInterviewId,
                categories: $setup.genericGraphs.categories,
                layout: "horizontal"
              }, null, 8, ["projectId", "currentInterviewId", "categories"])
            ]),
            _: 1
          })
        ])
      ]),
      after: withCtx(() => [
        createVNode(QTabPanels, {
          modelValue: $setup.currentInterviewId,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.currentInterviewId = $event),
          animated: "",
          vertical: "",
          "transition-prev": "jump-up",
          "transition-next": "jump-up"
        }, {
          default: withCtx(() => [
            createVNode(QTabPanel, { name: $setup.newInterviewId }, {
              default: withCtx(() => [
                createVNode($setup["InterviewMetadataForm"], {
                  interview: $setup.newInterviewTemplate,
                  onValidate: $setup.onInterviewCreate,
                  onCancel: $setup.onInterviewCancel
                })
              ]),
              _: 1
            }),
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.project.interviews, (interview) => {
              return openBlock(), createBlock(QTabPanel, {
                name: interview.id,
                key: interview.id
              }, {
                default: withCtx(() => [
                  createVNode(QSplitter, {
                    class: "fit fullwindow-height",
                    afterClass: "print-removed",
                    modelValue: $setup.splitterTranscript,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.splitterTranscript = $event),
                    limits: [2, 98]
                  }, {
                    before: withCtx(() => [
                      createVNode(QSplitter, {
                        class: "fit fullwindow-height flex",
                        beforeClass: "flex column no-scroll no-wrap",
                        afterClass: "flex column no-scroll no-wrap",
                        unit: "px",
                        horizontal: "",
                        "separator-class": "bg-grey-4",
                        "separator-style": "height: 3px",
                        modelValue: $setup.splitterInterview,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.splitterInterview = $event)
                      }, {
                        before: withCtx(() => [
                          createVNode($setup["InterviewRepresentation"], {
                            class: "flex col-grow",
                            genericGraphs: $setup.genericGraphs,
                            interviewId: interview.id
                          }, null, 8, ["genericGraphs", "interviewId"])
                        ]),
                        after: withCtx(() => [
                          $setup.editedSpecificSynchronicModelId ? (openBlock(), createBlock($setup["SpecificSynchronicModelEditor"], {
                            key: 0,
                            class: "flex col-grow",
                            modelId: $setup.editedSpecificSynchronicModelId,
                            genericGraphs: $setup.genericGraphs
                          }, null, 8, ["modelId", "genericGraphs"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["modelValue"])
                    ]),
                    after: withCtx(() => [
                      createVNode($setup["TextAnnotation"], {
                        class: "fit fullwindow-height",
                        interviewId: interview.id
                      }, null, 8, ["interviewId"])
                    ]),
                    _: 2
                  }, 1032, ["modelValue"])
                ]),
                _: 2
              }, 1032, ["name"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(QDrawer, {
      modelValue: $setup.infoPanelDisplay,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.infoPanelDisplay = $event),
      side: "right",
      overlay: "",
      bordered: ""
    }, {
      default: withCtx(() => [
        createVNode($setup["InfoPanel"], {
          projectId: $props.projectId,
          genericGraphs: $setup.genericGraphs,
          currentInterviewId: $setup.currentInterviewId
        }, null, 8, ["projectId", "genericGraphs", "currentInterviewId"]),
        createVNode(QBtn, {
          class: "absolute-top-right",
          flat: "",
          square: "",
          onClick: _cache[5] || (_cache[5] = ($event) => $setup.infoPanelDisplay = !$setup.infoPanelDisplay),
          size: "md",
          icon: "mdi-chevron-double-right"
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(QPageSticky, { position: "top-right" }, {
      default: withCtx(() => [
        createVNode(QBtn, {
          flat: "",
          class: "print-removed",
          square: "",
          onClick: _cache[7] || (_cache[7] = ($event) => $setup.infoPanelDisplay = !$setup.infoPanelDisplay),
          color: $setup.infoPanelColor,
          size: "md",
          icon: "mdi-chevron-double-left",
          "icon-right": "mdi-chat-outline"
        }, null, 8, ["color"])
      ]),
      _: 1
    })
  ])) : createCommentVNode("", true);
}
const ProjectInterviewSelection = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f011e7d6"], ["__file", "ProjectInterviewSelection.vue"]]);
export {
  ProjectInterviewSelection as P
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdEludGVydmlld1NlbGVjdGlvbi1EZno4Y3FaZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJzL1FSb3V0ZVRhYi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3BsaXR0ZXIvUVNwbGl0dGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9wYWdlLXN0aWNreS91c2UtcGFnZS1zdGlja3kuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3BhZ2Utc3RpY2t5L1FQYWdlU3RpY2t5LmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRGV0YWNoZWRNb2RlbFJlcHJlc2VudGF0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RldGFjaGVkTW9kZWxzUmVwcmVzZW50YXRpb24udnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tRXhwYW5zaW9uSXRlbS52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HZW5lcmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HZW5lcmljQ2F0ZWdvcmllc1JlcHJlc2VudGF0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb2RlbEZvbGRlclJlcHJlc2VudGF0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcmllc1JlcHJlc2VudGF0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0luZm9QYW5lbC52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHZ1ZXVzZS9zaGFyZWQvaW5kZXgubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWV1c2UvY29yZS9pbmRleC5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXpvb21hYmxlL2Rpc3QvdnVlLXpvb21hYmxlLm1qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXcudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3BlY2lmaWNTeW5jaHJvbmljTW9kZWxPdmVydmlldy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb21lbnRSZXByZXNlbnRhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbmFseXNpc1JlcHJlc2VudGF0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ludGVydmlld1JlcHJlc2VudGF0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0VsZW1lbnROYW1lSW5wdXQudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3BlY2lmaWNTeW5jaHJvbmljTW9kZWxSZXByZXNlbnRhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TcGVjaWZpY1N5bmNocm9uaWNNb2RlbEVkaXRvci52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9JbnRlcnZpZXdNZXRhZGF0YUZvcm0udnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVGV4dEFubm90YXRpb24udnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUHJvamVjdEludGVydmlld1NlbGVjdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZWQsIHdhdGNoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlUm91dGVyTGluaywgeyB1c2VSb3V0ZXJMaW5rUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1yb3V0ZXItbGluay91c2Utcm91dGVyLWxpbmsuanMnXG5pbXBvcnQgdXNlVGFiLCB7IHVzZVRhYlByb3BzLCB1c2VUYWJFbWl0cyB9IGZyb20gJy4vdXNlLXRhYi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVJvdXRlVGFiJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVJvdXRlckxpbmtQcm9wcyxcbiAgICAuLi51c2VUYWJQcm9wc1xuICB9LFxuXG4gIGVtaXRzOiB1c2VUYWJFbWl0cyxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHJvdXRlRGF0YSA9IHVzZVJvdXRlckxpbmsoe1xuICAgICAgdXNlRGlzYWJsZUZvclJvdXRlckxpbmtQcm9wczogZmFsc2VcbiAgICB9KVxuXG4gICAgY29uc3QgeyByZW5kZXJUYWIsICR0YWJzIH0gPSB1c2VUYWIoXG4gICAgICBwcm9wcyxcbiAgICAgIHNsb3RzLFxuICAgICAgZW1pdCxcbiAgICAgIHtcbiAgICAgICAgZXhhY3Q6IGNvbXB1dGVkKCgpID0+IHByb3BzLmV4YWN0KSxcbiAgICAgICAgLi4ucm91dGVEYXRhXG4gICAgICB9XG4gICAgKVxuXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBgJHsgcHJvcHMubmFtZSB9IHwgJHsgcHJvcHMuZXhhY3QgfSB8ICR7IChyb3V0ZURhdGEucmVzb2x2ZWRMaW5rLnZhbHVlIHx8IHt9KS5ocmVmIH1gLFxuICAgICAgJHRhYnMudmVyaWZ5Um91dGVNb2RlbFxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiByZW5kZXJUYWIocm91dGVEYXRhLmxpbmtUYWcudmFsdWUsIHJvdXRlRGF0YS5saW5rQXR0cnMudmFsdWUpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFRvdWNoUGFuIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG91Y2gtcGFuL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCwgaE1lcmdlU2xvdCwgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGxpdHRlcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcmV2ZXJzZTogQm9vbGVhbixcbiAgICB1bml0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJScsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gWyAnJScsICdweCcgXS5pbmNsdWRlcyh2KVxuICAgIH0sXG5cbiAgICBsaW1pdHM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHtcbiAgICAgICAgaWYgKHYubGVuZ3RoICE9PSAyKSByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKHR5cGVvZiB2WyAwIF0gIT09ICdudW1iZXInIHx8IHR5cGVvZiB2WyAxIF0gIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2VcbiAgICAgICAgcmV0dXJuIHZbIDAgXSA+PSAwICYmIHZbIDAgXSA8PSB2WyAxIF1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdEltbWVkaWF0ZWx5OiBCb29sZWFuLFxuXG4gICAgaG9yaXpvbnRhbDogQm9vbGVhbixcbiAgICBkaXNhYmxlOiBCb29sZWFuLFxuXG4gICAgYmVmb3JlQ2xhc3M6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgYWZ0ZXJDbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIHNlcGFyYXRvckNsYXNzOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIHNlcGFyYXRvclN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IHNpZGVSZWZzID0ge1xuICAgICAgYmVmb3JlOiByZWYobnVsbCksXG4gICAgICBhZnRlcjogcmVmKG51bGwpXG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1zcGxpdHRlciBuby13cmFwICdcbiAgICAgICsgYCR7IHByb3BzLmhvcml6b250YWwgPT09IHRydWUgPyAncS1zcGxpdHRlci0taG9yaXpvbnRhbCBjb2x1bW4nIDogJ3Etc3BsaXR0ZXItLXZlcnRpY2FsIHJvdycgfWBcbiAgICAgICsgYCBxLXNwbGl0dGVyLS0keyBwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJ2Rpc2FibGVkJyA6ICd3b3JrYWJsZScgfWBcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zcGxpdHRlci0tZGFyaycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBwcm9wTmFtZSA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy5ob3Jpem9udGFsID09PSB0cnVlID8gJ2hlaWdodCcgOiAnd2lkdGgnKSlcbiAgICBjb25zdCBzaWRlID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnJldmVyc2UgIT09IHRydWUgPyAnYmVmb3JlJyA6ICdhZnRlcicpKVxuXG4gICAgY29uc3QgY29tcHV0ZWRMaW1pdHMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5saW1pdHMgIT09IHZvaWQgMFxuICAgICAgICA/IHByb3BzLmxpbWl0c1xuICAgICAgICA6IChwcm9wcy51bml0ID09PSAnJScgPyBbIDEwLCA5MCBdIDogWyA1MCwgSW5maW5pdHkgXSlcbiAgICApKVxuXG4gICAgZnVuY3Rpb24gZ2V0Q1NTVmFsdWUgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gKHByb3BzLnVuaXQgPT09ICclJyA/IHZhbHVlIDogTWF0aC5yb3VuZCh2YWx1ZSkpICsgcHJvcHMudW5pdFxuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBbIHNpZGUudmFsdWUgXToge1xuICAgICAgICBbIHByb3BOYW1lLnZhbHVlIF06IGdldENTU1ZhbHVlKHByb3BzLm1vZGVsVmFsdWUpXG4gICAgICB9XG4gICAgfSkpXG5cbiAgICBsZXQgX19kaXIsIF9fbWF4VmFsdWUsIF9fdmFsdWUsIF9fbXVsdGlwbGllciwgX19ub3JtYWxpemVkXG5cbiAgICBmdW5jdGlvbiBwYW4gKGV2dCkge1xuICAgICAgaWYgKGV2dC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSByb290UmVmLnZhbHVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpWyBwcm9wTmFtZS52YWx1ZSBdXG5cbiAgICAgICAgX19kaXIgPSBwcm9wcy5ob3Jpem9udGFsID09PSB0cnVlID8gJ3VwJyA6ICdsZWZ0J1xuICAgICAgICBfX21heFZhbHVlID0gcHJvcHMudW5pdCA9PT0gJyUnID8gMTAwIDogc2l6ZVxuICAgICAgICBfX3ZhbHVlID0gTWF0aC5taW4oX19tYXhWYWx1ZSwgY29tcHV0ZWRMaW1pdHMudmFsdWVbIDEgXSwgTWF0aC5tYXgoY29tcHV0ZWRMaW1pdHMudmFsdWVbIDAgXSwgcHJvcHMubW9kZWxWYWx1ZSkpXG4gICAgICAgIF9fbXVsdGlwbGllciA9IChwcm9wcy5yZXZlcnNlICE9PSB0cnVlID8gMSA6IC0xKVxuICAgICAgICAgICogKHByb3BzLmhvcml6b250YWwgPT09IHRydWUgPyAxIDogKCRxLmxhbmcucnRsID09PSB0cnVlID8gLTEgOiAxKSlcbiAgICAgICAgICAqIChwcm9wcy51bml0ID09PSAnJScgPyAoc2l6ZSA9PT0gMCA/IDAgOiAxMDAgLyBzaXplKSA6IDEpXG5cbiAgICAgICAgcm9vdFJlZi52YWx1ZS5jbGFzc0xpc3QuYWRkKCdxLXNwbGl0dGVyLS1hY3RpdmUnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGV2dC5pc0ZpbmFsID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChfX25vcm1hbGl6ZWQgIT09IHByb3BzLm1vZGVsVmFsdWUpIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIF9fbm9ybWFsaXplZClcbiAgICAgICAgfVxuXG4gICAgICAgIHJvb3RSZWYudmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgncS1zcGxpdHRlci0tYWN0aXZlJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbCA9IF9fdmFsdWVcbiAgICAgICAgKyBfX211bHRpcGxpZXJcbiAgICAgICAgKiAoZXZ0LmRpcmVjdGlvbiA9PT0gX19kaXIgPyAtMSA6IDEpXG4gICAgICAgICogZXZ0LmRpc3RhbmNlWyBwcm9wcy5ob3Jpem9udGFsID09PSB0cnVlID8gJ3knIDogJ3gnIF1cblxuICAgICAgX19ub3JtYWxpemVkID0gTWF0aC5taW4oX19tYXhWYWx1ZSwgY29tcHV0ZWRMaW1pdHMudmFsdWVbIDEgXSwgTWF0aC5tYXgoY29tcHV0ZWRMaW1pdHMudmFsdWVbIDAgXSwgdmFsKSlcblxuICAgICAgc2lkZVJlZnNbIHNpZGUudmFsdWUgXS52YWx1ZS5zdHlsZVsgcHJvcE5hbWUudmFsdWUgXSA9IGdldENTU1ZhbHVlKF9fbm9ybWFsaXplZClcblxuICAgICAgaWYgKHByb3BzLmVtaXRJbW1lZGlhdGVseSA9PT0gdHJ1ZSAmJiBwcm9wcy5tb2RlbFZhbHVlICE9PSBfX25vcm1hbGl6ZWQpIHtcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBfX25vcm1hbGl6ZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2VwRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gaWYgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZVxuICAgICAgcmV0dXJuIFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgcGFuLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHtcbiAgICAgICAgICBbIHByb3BzLmhvcml6b250YWwgPT09IHRydWUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnIF06IHRydWUsXG4gICAgICAgICAgcHJldmVudDogdHJ1ZSxcbiAgICAgICAgICBzdG9wOiB0cnVlLFxuICAgICAgICAgIG1vdXNlOiB0cnVlLFxuICAgICAgICAgIG1vdXNlQWxsRGlyOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemUgKHZhbCwgbGltaXRzKSB7XG4gICAgICBpZiAodmFsIDwgbGltaXRzWyAwIF0pIHtcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBsaW1pdHNbIDAgXSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHZhbCA+IGxpbWl0c1sgMSBdKSB7XG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbGltaXRzWyAxIF0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgdiA9PiB7XG4gICAgICBub3JtYWxpemUodiwgY29tcHV0ZWRMaW1pdHMudmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLmxpbWl0cywgKCkgPT4ge1xuICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBub3JtYWxpemUocHJvcHMubW9kZWxWYWx1ZSwgY29tcHV0ZWRMaW1pdHMudmFsdWUpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IHNpZGVSZWZzLmJlZm9yZSxcbiAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgJ3Etc3BsaXR0ZXJfX3BhbmVsIHEtc3BsaXR0ZXJfX2JlZm9yZScgKyAocHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSA/ICcgY29sJyA6ICcnKSxcbiAgICAgICAgICAgIHByb3BzLmJlZm9yZUNsYXNzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdHlsZTogc3R5bGVzLnZhbHVlLmJlZm9yZVxuICAgICAgICB9LCBoU2xvdChzbG90cy5iZWZvcmUpKSxcblxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICdxLXNwbGl0dGVyX19zZXBhcmF0b3InLFxuICAgICAgICAgICAgcHJvcHMuc2VwYXJhdG9yQ2xhc3NcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5zZXBhcmF0b3JTdHlsZSxcbiAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAndHJ1ZScgOiB2b2lkIDBcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGhEaXIoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3M6ICdxLXNwbGl0dGVyX19zZXBhcmF0b3ItYXJlYSBhYnNvbHV0ZS1mdWxsJyB9LFxuICAgICAgICAgICAgaFNsb3Qoc2xvdHMuc2VwYXJhdG9yKSxcbiAgICAgICAgICAgICdzZXAnLFxuICAgICAgICAgICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSxcbiAgICAgICAgICAgICgpID0+IHNlcERpcmVjdGl2ZS52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogc2lkZVJlZnMuYWZ0ZXIsXG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICdxLXNwbGl0dGVyX19wYW5lbCBxLXNwbGl0dGVyX19hZnRlcicgKyAocHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSA/ICcnIDogJyBjb2wnKSxcbiAgICAgICAgICAgIHByb3BzLmFmdGVyQ2xhc3NcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0eWxlOiBzdHlsZXMudmFsdWUuYWZ0ZXJcbiAgICAgICAgfSwgaFNsb3Qoc2xvdHMuYWZ0ZXIpKVxuICAgICAgXVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgcmVmOiByb290UmVmXG4gICAgICB9LCBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIGNoaWxkKSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zeW1ib2xzL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBjb25zdCB1c2VQYWdlU3RpY2t5UHJvcHMgPSB7XG4gIHBvc2l0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdib3R0b20tcmlnaHQnLFxuICAgIHZhbGlkYXRvcjogdiA9PiBbXG4gICAgICAndG9wLXJpZ2h0JywgJ3RvcC1sZWZ0JyxcbiAgICAgICdib3R0b20tcmlnaHQnLCAnYm90dG9tLWxlZnQnLFxuICAgICAgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCdcbiAgICBdLmluY2x1ZGVzKHYpXG4gIH0sXG4gIG9mZnNldDoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIHZhbGlkYXRvcjogdiA9PiB2Lmxlbmd0aCA9PT0gMlxuICB9LFxuICBleHBhbmQ6IEJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCB7IHByb3BzLCBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1FQYWdlU3RpY2t5IG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gIH1cblxuICBjb25zdCBhdHRhY2ggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcG9zID0gcHJvcHMucG9zaXRpb25cblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHBvcy5pbmRleE9mKCd0b3AnKSAhPT0gLTEsXG4gICAgICByaWdodDogcG9zLmluZGV4T2YoJ3JpZ2h0JykgIT09IC0xLFxuICAgICAgYm90dG9tOiBwb3MuaW5kZXhPZignYm90dG9tJykgIT09IC0xLFxuICAgICAgbGVmdDogcG9zLmluZGV4T2YoJ2xlZnQnKSAhPT0gLTEsXG4gICAgICB2ZXJ0aWNhbDogcG9zID09PSAndG9wJyB8fCBwb3MgPT09ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbDogcG9zID09PSAnbGVmdCcgfHwgcG9zID09PSAncmlnaHQnXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHRvcCA9IGNvbXB1dGVkKCgpID0+ICRsYXlvdXQuaGVhZGVyLm9mZnNldClcbiAgY29uc3QgcmlnaHQgPSBjb21wdXRlZCgoKSA9PiAkbGF5b3V0LnJpZ2h0Lm9mZnNldClcbiAgY29uc3QgYm90dG9tID0gY29tcHV0ZWQoKCkgPT4gJGxheW91dC5mb290ZXIub2Zmc2V0KVxuICBjb25zdCBsZWZ0ID0gY29tcHV0ZWQoKCkgPT4gJGxheW91dC5sZWZ0Lm9mZnNldClcblxuICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBsZXQgcG9zWCA9IDAsIHBvc1kgPSAwXG5cbiAgICBjb25zdCBzaWRlID0gYXR0YWNoLnZhbHVlXG4gICAgY29uc3QgZGlyID0gJHEubGFuZy5ydGwgPT09IHRydWUgPyAtMSA6IDFcblxuICAgIGlmIChzaWRlLnRvcCA9PT0gdHJ1ZSAmJiB0b3AudmFsdWUgIT09IDApIHtcbiAgICAgIHBvc1kgPSBgJHsgdG9wLnZhbHVlIH1weGBcbiAgICB9XG4gICAgZWxzZSBpZiAoc2lkZS5ib3R0b20gPT09IHRydWUgJiYgYm90dG9tLnZhbHVlICE9PSAwKSB7XG4gICAgICBwb3NZID0gYCR7IC1ib3R0b20udmFsdWUgfXB4YFxuICAgIH1cblxuICAgIGlmIChzaWRlLmxlZnQgPT09IHRydWUgJiYgbGVmdC52YWx1ZSAhPT0gMCkge1xuICAgICAgcG9zWCA9IGAkeyBkaXIgKiBsZWZ0LnZhbHVlIH1weGBcbiAgICB9XG4gICAgZWxzZSBpZiAoc2lkZS5yaWdodCA9PT0gdHJ1ZSAmJiByaWdodC52YWx1ZSAhPT0gMCkge1xuICAgICAgcG9zWCA9IGAkeyAtZGlyICogcmlnaHQudmFsdWUgfXB4YFxuICAgIH1cblxuICAgIGNvbnN0IGNzcyA9IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7IHBvc1ggfSwgJHsgcG9zWSB9KWAgfVxuXG4gICAgaWYgKHByb3BzLm9mZnNldCkge1xuICAgICAgY3NzLm1hcmdpbiA9IGAkeyBwcm9wcy5vZmZzZXRbIDEgXSB9cHggJHsgcHJvcHMub2Zmc2V0WyAwIF0gfXB4YFxuICAgIH1cblxuICAgIGlmIChzaWRlLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgICBpZiAobGVmdC52YWx1ZSAhPT0gMCkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdID0gYCR7IGxlZnQudmFsdWUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKHJpZ2h0LnZhbHVlICE9PSAwKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF0gPSBgJHsgcmlnaHQudmFsdWUgfXB4YFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChzaWRlLmhvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgIGlmICh0b3AudmFsdWUgIT09IDApIHtcbiAgICAgICAgY3NzLnRvcCA9IGAkeyB0b3AudmFsdWUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKGJvdHRvbS52YWx1ZSAhPT0gMCkge1xuICAgICAgICBjc3MuYm90dG9tID0gYCR7IGJvdHRvbS52YWx1ZSB9cHhgXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzc1xuICB9KVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgIGBxLXBhZ2Utc3RpY2t5IHJvdyBmbGV4LWNlbnRlciBmaXhlZC0keyBwcm9wcy5wb3NpdGlvbiB9YFxuICAgICsgYCBxLXBhZ2Utc3RpY2t5LS0keyBwcm9wcy5leHBhbmQgPT09IHRydWUgPyAnZXhwYW5kJyA6ICdzaHJpbmsnIH1gXG4gIClcblxuICBmdW5jdGlvbiBnZXRTdGlja3lDb250ZW50IChzbG90cykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBoU2xvdChzbG90cy5kZWZhdWx0KVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlXG4gICAgfSxcbiAgICBwcm9wcy5leHBhbmQgPT09IHRydWVcbiAgICAgID8gY29udGVudFxuICAgICAgOiBbIGgoJ2RpdicsIGNvbnRlbnQpIF1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgICRsYXlvdXQsXG4gICAgZ2V0U3RpY2t5Q29udGVudFxuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgdXNlUGFnZVN0aWNreSwgeyB1c2VQYWdlU3RpY2t5UHJvcHMgfSBmcm9tICcuL3VzZS1wYWdlLXN0aWNreS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdlU3RpY2t5JyxcblxuICBwcm9wczogdXNlUGFnZVN0aWNreVByb3BzLFxuXG4gIHNldHVwIChfLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IGdldFN0aWNreUNvbnRlbnQgfSA9IHVzZVBhZ2VTdGlja3koKVxuICAgIHJldHVybiAoKSA9PiBnZXRTdGlja3lDb250ZW50KHNsb3RzKVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZGV0YWNoZWQtbW9kZWxcIlxuICAgICAgIDpkYXRhLWlkPVwibW9kZWxJZFwiPlxuICAgIDxEcmFnRWxlbWVudFxuICAgICAgdHlwZT1cImRldGFjaGVkbW9kZWxcIlxuICAgICAgOmRhdGE9XCJtb2RlbElkXCJcbiAgICAgIEBjbGljay5tZXRhPVwiZGVidWdcIj5cbiAgICAgIDxxLWljb25cbiAgICAgICAgY2xhc3M9XCJxLXB4LXNtXCJcbiAgICAgICAgZmxhdFxuICAgICAgICBkZW5zZVxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICA6bmFtZT1cImlzQWN0aXZlID8gJ21kaS1ncmFwaCcgOiAnbWRpLXNlbGVjdC1vZmYnXCIgLz5cbiAgICA8L0RyYWdFbGVtZW50PlxuICAgIDxxLWJ0blxuICAgICAgY2xhc3M9XCJkZXRhY2hlZC1tb2RlbC1uYW1lXCJcbiAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICB2LWlmPVwibW9kZWxcIlxuICAgICAgZmxhdFxuICAgICAgZGVuc2VcbiAgICAgIG5vLWNhcHNcbiAgICAgIEBjbGljaz1cImVkaXREZXRhY2hlZE1vZGVsKG1vZGVsLnByb3h5LmlkKVwiXG4gICAgICA+XG4gICAgICB7eyBtb2RlbD8ucHJveHkubmFtZSB9fVxuICAgIDwvcS1idG4+XG4gICAgPEVsZW1lbnRNZW51XG4gICAgICA6YWN0aW9ucz1cIm1lbnVBY3Rpb25zXCJcbiAgICAgIDpwYXJhbWV0ZXI9XCJtb2RlbFwiIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuXG4gIGltcG9ydCBEcmFnRWxlbWVudCBmcm9tICcuL0RyYWdFbGVtZW50LnZ1ZSdcbiAgaW1wb3J0IEVsZW1lbnRNZW51IGZyb20gJy4vRWxlbWVudE1lbnUudnVlJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgICAgIG1vZGVsSWQ6IHN0cmluZ1xuICB9PigpXG5cbiAgY29uc3QgbW9kZWwgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBtID0gc3RvcmUuZ2V0RGV0YWNoZWRNb2RlbChwcm9wcy5wcm9qZWN0SWQsIHByb3BzLm1vZGVsSWQpXG4gICAgICByZXR1cm4gbVxuICB9KVxuXG4gIGNvbnN0IGlzQWN0aXZlID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gbW9kZWw/LnZhbHVlPy5wcm94eSA/IG1vZGVsLnZhbHVlLnByb3h5LmlzQWN0aXZlIDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBzZXQgKGFjdGl2ZTogYm9vbGVhbikge1xuICAgICAgICAgIHN0b3JlLnNldEFjdGl2ZURldGFjaGVkTW9kZWwocHJvcHMucHJvamVjdElkLCBwcm9wcy5tb2RlbElkLCBhY3RpdmUpXG4gICAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gZWRpdERldGFjaGVkTW9kZWwgKHByb3h5TW9kZWxJZDogc3RyaW5nKSB7XG4gICAgICBpc3RvcmUuc2V0RWRpdGVkU3BlY2lmaWNTeW5jaHJvbmljTW9kZWxJZChwcm94eU1vZGVsSWQpXG4gIH1cblxuICBmdW5jdGlvbiBkZWJ1ZyAoKSB7XG4gICAgICAod2luZG93IGFzIGFueSkuZGV0YWNoZWRtb2RlbCA9IG1vZGVsLnZhbHVlO1xuICAgICAgY29uc29sZS5sb2coXCJEZXRhY2hlZE1vZGVsXCIsIHsgZGV0YWNoZWRtb2RlbDogbW9kZWwudmFsdWUgfSlcbiAgfVxuXG4gIGltcG9ydCB0eXBlIHsgTmFtZWRBY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL3V0aWwudHMnXG5cbiAgY29uc3QgbWVudUFjdGlvbnM6IE5hbWVkQWN0aW9uW10gPSBbXG4gICAgICBbIFwiVG9nZ2xlIGFjdGl2ZSBzdGF0dXNcIiwgKCkgPT4ge1xuICAgICAgICAgIGlzQWN0aXZlLnZhbHVlID0gIWlzQWN0aXZlLnZhbHVlXG4gICAgICB9IF0sXG5cbiAgICAgIFsgXCJEZWxldGVcIiwgKG1vZGVsKSA9PiB7XG4gICAgICAgICAgaWYgKGlzdG9yZS5lZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbElkID09PSBtb2RlbC5wcm94eS5pZCkge1xuICAgICAgICAgICAgICBlZGl0RGV0YWNoZWRNb2RlbCgnJylcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RvcmUuZGVsZXRlRGV0YWNoZWRNb2RlbChtb2RlbC5pZClcbiAgICAgIH1dLFxuICBdXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5kZXRhY2hlZC1tb2RlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRldGFjaGVkbW9kZWxzLWNvbnRhaW5lclwiXG4gICAgICAgOmtleT1cInByb2plY3RJZFwiXG4gICAgICAgOmRhdGEtcHJvamVjdD1cInByb2plY3RJZFwiPlxuXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZSB0ZXh0LWJvbGRcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICAgIDxxLWJ0blxuICAgICAgICBmbGF0XG4gICAgICAgIGRlbnNlXG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIGljb249XCJpbmZvXCJcbiAgICAgICAgbm8tY2Fwcz5cbiAgICAgICAgPHEtdG9vbHRpcD5EZXRhY2hlZCBtb2RlbHMgYXJlIHN5bmNocm9uaWMgbW9kZWxzICh0cmVlcykgdGhhdCBhcmUgbm90IGxpbmtlZCB0byBhbiBpbnRlcnZpZXcuIDxicj5UaGV5IGFyZSB1c2VkIHRvIHByb3Bvc2UgdGhlIGNhdGVnb3J5IG5hbWVzL2NoaWxkcmVuIHdoZW4gZWRpdGluZy48YnI+IFNpbmNlIHRoZXkgYXJlIGFsc28gdGFrZW4gaW50byBhY2NvdW50IGluIHRoZSBkeW5hbWljIG1vZGVsIGdlbmVyYXRpb24sIHRoZXkgYWxzbyBhcmUgdXNlZCB0byBkZXRlY3QgaW5jb25zaXN0ZW5jaWVzLlxuICAgICAgICA8L3EtdG9vbHRpcD5cbiAgICAgIDwvcS1idG4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZGV0YWNoZWRtb2RlbHMtbGlzdCBmbGV4IGNvbHVtblwiXG4gICAgICAgICB2LWlmPVwicHJvamVjdFwiXG4gICAgICAgICA+XG4gICAgICA8RGV0YWNoZWRNb2RlbFJlcHJlc2VudGF0aW9uXG4gICAgICAgIHYtZm9yPVwibW9kZWwgaW4gcHJvamVjdC5kZXRhY2hlZG1vZGVsc1wiXG4gICAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0SWRcIlxuICAgICAgICA6bW9kZWxJZD1cIm1vZGVsLmlkXCJcbiAgICAgICAgOmtleT1cIm1vZGVsLmlkXCI+XG4gICAgICA8L0RldGFjaGVkTW9kZWxSZXByZXNlbnRhdGlvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxxLWJ0blxuICAgICAgZmxhdFxuICAgICAgY2xhc3M9XCJkZXRhY2hlZG1vZGVsLWFkZFwiXG4gICAgICBkZW5zZVxuICAgICAgc2l6ZT1cInhzXCJcbiAgICAgIHRpdGxlPVwiQWRkIGRldGFjaGVkIG1vZGVsXCJcbiAgICAgIEBjbGljaz1cImFkZERldGFjaGVkTW9kZWwoKVwiXG4gICAgICBpY29uPVwibWRpLXBsdXNcIlxuICAgICAgbm8tY2Fwcz5cbiAgICA8L3EtYnRuPlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuICBpbXBvcnQgdHlwZSB7IEdyYXBoSW5mbyB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCB7IHVzZUludGVyZmFjZVN0b3JlIH0gZnJvbSAnc3RvcmVzL2ludGVyZmFjZSdcblxuICBpbXBvcnQgRGV0YWNoZWRNb2RlbFJlcHJlc2VudGF0aW9uIGZyb20gJy4vRGV0YWNoZWRNb2RlbFJlcHJlc2VudGF0aW9uLnZ1ZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgaXN0b3JlID0gdXNlSW50ZXJmYWNlU3RvcmUoKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICAgICAgcHJvamVjdElkOiBzdHJpbmcsXG4gICAgICBnZW5lcmljR3JhcGhzOiBHcmFwaEluZm8sXG4gICAgICBjdXJyZW50SW50ZXJ2aWV3SWQ6IHN0cmluZyxcbiAgICAgIHRpdGxlPzogc3RyaW5nXG4gIH0+KClcblxuICBjb25zdCBwcm9qZWN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgcCA9IHN0b3JlLmdldEZ1bGxQcm9qZWN0KHByb3BzLnByb2plY3RJZClcbiAgICAgIHJldHVybiBwXG4gIH0pXG5cbiAgZnVuY3Rpb24gYWRkRGV0YWNoZWRNb2RlbCAoKSB7XG4gICAgICBjb25zdCBkZXRhY2hlZE1vZGVsID0gc3RvcmUuY3JlYXRlRGV0YWNoZWRNb2RlbChwcm9wcy5wcm9qZWN0SWQsIGlzdG9yZS5uZXdEZXRhY2hlZE1vZGVsSWQoKSlcbiAgICAgIGlmIChkZXRhY2hlZE1vZGVsKSB7XG4gICAgICAgICAgaXN0b3JlLnNldEVkaXRlZFNwZWNpZmljU3luY2hyb25pY01vZGVsSWQoZGV0YWNoZWRNb2RlbC5wcm94eS5pZClcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXRhY2hlZE1vZGVsXG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmRldGFjaGVkbW9kZWxzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmRldGFjaGVkbW9kZWwtYWRkIHtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IDpjbGFzcz1cIml0ZW1DbGFzc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJleHBhbnNpb24taGVhZGVyIHJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxxLWljb25cbiAgICAgICAgY2xhc3M9XCJleHBhbnNpb24taWNvblwiXG4gICAgICAgIDpjbGFzcz1cImV4cGFuZEljb25DbGFzc1wiXG4gICAgICAgIEBjbGljay5zdG9wPVwiaXNFeHBhbmRlZCA9ICFpc0V4cGFuZGVkXCJcbiAgICAgICAgOm5hbWU9XCJpc0V4cGFuZGVkID8gZXhwYW5kZWRJY29uIDogZXhwYW5kSWNvblwiIC8+XG4gICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJleHBhbnNpb24tYm9keVwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG4gIGludGVyZmFjZSBQcm9wcyB7XG4gICAgICBleHBhbmRJY29uPzogc3RyaW5nLFxuICAgICAgZXhwYW5kZWRJY29uPzogc3RyaW5nLFxuICAgICAgZXhwYW5kSWNvbkNsYXNzPzogb2JqZWN0IHwgc3RyaW5nXG4gIH1cbiAgd2l0aERlZmF1bHRzKGRlZmluZVByb3BzPFByb3BzPigpLCB7XG4gICAgICBleHBhbmRJY29uOiBcIm1kaS1wbHVzXCIsXG4gICAgICBleHBhbmRlZEljb246IFwibWRpLW1pbnVzXCIsXG4gICAgICBleHBhbmRJY29uQ2xhc3M6IFwiXCJcbiAgfSlcblxuICBjb25zdCBpc0V4cGFuZGVkID0gZGVmaW5lTW9kZWwoeyBkZWZhdWx0OiB0cnVlIH0pXG5cbiAgY29uc3QgaXRlbUNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIGlzRXhwYW5kZWQudmFsdWUgPyBcImV4cGFuc2lvbi1pdGVtIGNvbHVtbiBleHBhbmRlZFwiIDogXCJleHBhbnNpb24taXRlbSBjb2x1bW4gY29sbGFwc2VkXCJcbiAgfSlcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbi5jb2xsYXBzZWQgLmV4cGFuc2lvbi1ib2R5IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmV4cGFuc2lvbi1ib2R5IHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5leHBhbnNpb24taGVhZGVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5leHBhbnNpb24taGVhZGVyOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2NjYztcbn1cbi5leHBhbnNpb24taWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY29udGFpbmVyIHJvd1wiXG4gICAgICAgdi1pZj1cImdlbmVyaWNjYXRlZ29yeVwiXG4gICAgICAgOmRhdGEtZ2VuZXJpY2NhdGVnb3J5PVwiZ2VuZXJpY2NhdGVnb3J5Lm5hbWVcIj5cbiAgICA8Y3VzdG9tLWV4cGFuc2lvbi1pdGVtXG4gICAgICBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktYm9keVwiXG4gICAgICA6ZXhwYW5kLWljb24tY2xhc3M9XCJ7ICdpbnZpc2libGUnOiBnZW5lcmljY2F0ZWdvcnkuY2hpbGRyZW4/Lmxlbmd0aCA9PSAwIH1cIlxuICAgICAgPlxuXG4gICAgICA8dGVtcGxhdGUgdi1zbG90OmhlYWRlcj5cbiAgICAgICAgPERyYWdFbGVtZW50XG4gICAgICAgICAgY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWVcIlxuICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1lcnJvcic6IGdlbmVyaWNjYXRlZ29yeS5lcnJvcnM/Lmxlbmd0aCB9XCJcbiAgICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogZ2VuZXJpY2NhdGVnb3J5LmNvbG9yIHx8ICd0cmFuc3BhcmVudCcgfVwiXG4gICAgICAgICAgQGNsaWNrPVwiZGVidWdcIlxuICAgICAgICAgIHR5cGU9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5XCJcbiAgICAgICAgICA6ZGF0YT1cImdlbmVyaWNjYXRlZ29yeS5uYW1lXCI+XG4gICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgcmVmPVwiaGFuZGxlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1oYW5kbGVcIlxuICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgIG5hbWU9XCJtZGktYWxwaGEtcy1ib3hcIiAvPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIHYtaWY9XCJpc1NwZWNpYWxpemF0aW9uXCJcbiAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICBuYW1lPVwibWRpLXRyaWFuZ2xlLW91dGxpbmVcIiAvPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIHYtaWY9XCJpc0FnZ3JlZ2F0aW9uXCJcbiAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICBuYW1lPVwibWRpLWNhcmRzLWRpYW1vbmQtb3V0bGluZVwiIC8+XG5cbiAgICAgICAgICA8cS10b29sdGlwIGNsYXNzPVwiYmctcmVkLTVcIiBhbmNob3I9XCJ0b3AgcmlnaHRcIiBzZWxmPVwidG9wIGxlZnRcIiB2LWlmPVwiZ2VuZXJpY2NhdGVnb3J5LmVycm9ycz8ubGVuZ3RoXCI+XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZXJyb3IsIGtleSBpbiBnZW5lcmljY2F0ZWdvcnkuZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImtleVwiPlxuICAgICAgICAgICAgICB7eyBlcnJvciB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9xLXRvb2x0aXA+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwiZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1sYWJlbFwiPlxuICAgICAgICAgICAge3sgc3RyaXBDb250ZXh0RnJvbU5hbWUoZ2VuZXJpY2NhdGVnb3J5Lm5hbWUpIH19IDxxLWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCJjdXJyZW50SW50ZXJ2aWV3TW9tZW50c0xhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2U+XG4gICAgICAgICAgICAgIDxxLW1lbnUgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICB2LWZvcj1cIm1vbWVudCBpbiBjdXJyZW50TW9tZW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4IHJvdyBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJtb21lbnQuaWRcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJtb21lbnQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJoaWdobGlnaHRNb21lbnQobW9tZW50LmlkKVwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBtb21lbnQuY29sb3IgfHwgJ3RyYW5zcGFyZW50JyB9XCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm1kaS1hbHBoYS1kLWJveC1vdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJtZGktZ3JhcGgtb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZWRpdFNwZWNpZmljU3luY2hyb25pY01vZGVsKG1vbWVudC5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbD8uaWQgPz8gJycpXCI+XG4gICAgICAgICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgICAge3sgY3VycmVudE1vbWVudHMubGVuZ3RoIH19PC9xLWJ0bj4gL1xuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIDp0aXRsZT1cIm1vbWVudHNMYWJlbFwiXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgIGRlbnNlPlxuICAgICAgICAgICAgICA8cS1tZW51IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpdGVtcy1sZWZ0IG5vLXdyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgOmtleT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJbIG5hbWUsIGNvdW50IF0gaW4gYnlJbnRlcnZpZXcobW9tZW50cylcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWJ0biBjbGFzcz1cImZ1bGwtd2lkdGgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJtZGktY29tbWVudC10ZXh0LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInN3aXRjaFRhYihuYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImludGVydmlldy1tb21lbnQtY291bnRcIj57eyBjb3VudCB9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtbGVmdCBuby13cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiWyBuYW1lLCBtb2RlbElkLCBjb3VudCBdIGluIGJ5RGV0YWNoZWRNb2RlbChkZXRhY2hlZE1vZGVsSW5mb3MpXCI+XG4gICAgICAgICAgICAgICAgICA8cS1idG4gY2xhc3M9XCJmdWxsLXdpZHRoIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJlZGl0U3BlY2lmaWNTeW5jaHJvbmljTW9kZWwobW9kZWxJZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiPlxuICAgICAgICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJpbnRlcnZpZXctbW9tZW50LWNvdW50XCI+e3sgY291bnQgfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICAgIHt7IG1vbWVudHMubGVuZ3RoICsgZGV0YWNoZWRNb2RlbEluZm9zLmxlbmd0aCB9fTwvcS1idG4+XG4gICAgICAgICAgICA8cS1wb3B1cC1lZGl0XG4gICAgICAgICAgICAgIHJlZj1cInBvcHVwRWRpdFwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJnZW5lcmljY2F0ZWdvcnlOYW1lXCJcbiAgICAgICAgICAgICAgYXV0by1zYXZlXG4gICAgICAgICAgICAgIHYtc2xvdD1cInNjb3BlXCI+XG4gICAgICAgICAgICAgIDxxLWlucHV0IHYtbW9kZWw9XCJzY29wZS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIEBmb2N1cz1cIigkZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNlbGVjdCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgZGVuc2UgYXV0b2ZvY3VzIGNvdW50ZXIgQGtleXVwLmVudGVyPVwic2NvcGUuc2V0XCIgLz5cbiAgICAgICAgICAgIDwvcS1wb3B1cC1lZGl0PlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8cS1zcGFjZSAvPlxuICAgICAgICAgIDxFbGVtZW50TWVudVxuICAgICAgICAgICAgOmFjdGlvbnM9XCJtZW51QWN0aW9uc1wiIC8+XG4gICAgICAgICAgPENvbG9yaXplSWNvblxuICAgICAgICAgICAgY2xhc3M9XCJvbi1uYW1lLWhvdmVyXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJjYXRlZ29yeUNvbG9yXCIgLz5cbiAgICAgICAgPC9EcmFnRWxlbWVudD5cblxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW5cIj5cbiAgICAgICAgPEdlbmVyaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgdi1mb3I9XCJjYXQgaW4gZ2VuZXJpY2NhdGVnb3J5LmNoaWxkcmVuXCJcbiAgICAgICAgICA6a2V5PVwiY2F0Lm5hbWVcIlxuICAgICAgICAgIDpnZW5lcmljR3JhcGhzPVwiZ2VuZXJpY0dyYXBoc1wiXG4gICAgICAgICAgOmdlbmVyaWNjYXRlZ29yeT1cImNhdFwiXG4gICAgICAgICAgOmN1cnJlbnRJbnRlcnZpZXdJZD1cImN1cnJlbnRJbnRlcnZpZXdJZFwiXG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvY3VzdG9tLWV4cGFuc2lvbi1pdGVtPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcidcbiAgaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJ1xuXG4gIGltcG9ydCBDdXN0b21FeHBhbnNpb25JdGVtIGZyb20gJy4vQ3VzdG9tRXhwYW5zaW9uSXRlbS52dWUnXG4gIGltcG9ydCBDb2xvcml6ZUljb24gZnJvbSAnLi9Db2xvcml6ZUljb24udnVlJ1xuICBpbXBvcnQgRHJhZ0VsZW1lbnQgZnJvbSAnLi9EcmFnRWxlbWVudC52dWUnXG4gIGltcG9ydCBFbGVtZW50TWVudSBmcm9tICcuL0VsZW1lbnRNZW51LnZ1ZSdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY01vZGVsIGZyb20gJ3N0b3Jlcy9tb2RlbHMvc3BlY2lmaWNzeW5jaHJvbmljbW9kZWwnXG4gIGltcG9ydCBNb21lbnQgZnJvbSAnc3RvcmVzL21vZGVscy9tb21lbnQnXG4gIGltcG9ydCBJbnRlcnZpZXcgZnJvbSAnc3RvcmVzL21vZGVscy9pbnRlcnZpZXcnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCB7IHVzZUludGVyZmFjZVN0b3JlIH0gZnJvbSAnc3RvcmVzL2ludGVyZmFjZSdcbiAgaW1wb3J0IHsgZ3JvdXBCeSwgc3RyaXBDb250ZXh0RnJvbU5hbWUgfSBmcm9tICcuL3V0aWwnXG5cbiAgaW1wb3J0IHR5cGUgeyBHZW5lcmljQ2F0ZWdvcnksIEdyYXBoSW5mbywgQ29udGFpbmVySW5mbyB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG5cbiAgY29uc3QgaXN0b3JlID0gdXNlSW50ZXJmYWNlU3RvcmUoKVxuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBpbnRlcmZhY2UgUHJvcHMge1xuICAgICAgZ2VuZXJpY2NhdGVnb3J5OiBHZW5lcmljQ2F0ZWdvcnksXG4gICAgICBnZW5lcmljR3JhcGhzOiBHcmFwaEluZm8sXG4gICAgICBjdXJyZW50SW50ZXJ2aWV3SWQ6IHN0cmluZ1xuICB9XG5cbiAgY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoZGVmaW5lUHJvcHM8UHJvcHM+KCksIHtcbiAgICAgIGN1cnJlbnRJbnRlcnZpZXdJZDogXCJcIlxuICB9KVxuXG4gIGNvbnN0ICRxID0gdXNlUXVhc2FyKClcblxuICBjb25zdCBwb3B1cEVkaXQgPSByZWYobnVsbClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGZ1bmN0aW9uIGRlYnVnICgpIHtcbiAgICAgICh3aW5kb3cgYXMgYW55KS5nZW5lcmljY2F0ZWdvcnkgPSBwcm9wcy5nZW5lcmljY2F0ZWdvcnlcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJpY2NhdGVnb3J5XCIsIHByb3BzLmdlbmVyaWNjYXRlZ29yeSlcbiAgfVxuXG4gIGNvbnN0IG1vbWVudHMgPSBjb21wdXRlZCgoKTogTW9tZW50W10gPT4ge1xuICAgICAgY29uc3QgbW9tZW50SWRzID0gcHJvcHMuZ2VuZXJpY2NhdGVnb3J5Lmluc3RhbmNlc1xuICAgICAgICAgICAgLm1hcChzc2MgPT4gcHJvcHMuZ2VuZXJpY0dyYXBocy5pbnN0YW5jZUlkVG9Db250YWluZXJJbmZvW3NzYy5pZF0/Lm1vbWVudElkKVxuICAgICAgICAgICAgLmZpbHRlcihpZCA9PiAhIWlkKSBhcyBzdHJpbmdbXVxuICAgICAgcmV0dXJuIHN0b3JlLmdldE1vbWVudHMobW9tZW50SWRzKVxuICB9KVxuXG4gIGNvbnN0IGRldGFjaGVkTW9kZWxJbmZvcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IG1vZGVsSW5mb3MgPSBwcm9wcy5nZW5lcmljY2F0ZWdvcnkuaW5zdGFuY2VzXG4gICAgICAgICAgICAubWFwKHNzYyA9PiBwcm9wcy5nZW5lcmljR3JhcGhzLmluc3RhbmNlSWRUb0NvbnRhaW5lckluZm9bc3NjLmlkXSlcbiAgICAgICAgICAgIC5maWx0ZXIoaW5mbyA9PiBpbmZvICYmIGluZm8uZGV0YWNoZWRNb2RlbElkKSBhcyBDb250YWluZXJJbmZvW11cbiAgICAgIHJldHVybiBtb2RlbEluZm9zXG4gIH0pXG5cbiAgY29uc3QgY3VycmVudE1vbWVudHMgPSBjb21wdXRlZCgoKSA9PiBtb21lbnRzLnZhbHVlPy5maWx0ZXIoKG06IE1vbWVudCkgPT4gbS5pbnRlcnZpZXdJZCA9PT0gcHJvcHMuY3VycmVudEludGVydmlld0lkKSB8fCBbXSlcblxuICBjb25zdCBpc0FnZ3JlZ2F0aW9uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuZ2VuZXJpY2NhdGVnb3J5LmFic3RyYWN0aW9uVHlwZSA9PSAnYWdncmVnYXRpb24nKVxuICBjb25zdCBpc1NwZWNpYWxpemF0aW9uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuZ2VuZXJpY2NhdGVnb3J5LmFic3RyYWN0aW9uVHlwZSA9PSAnc3BlY2lhbGl6YXRpb24nKVxuXG4gIGNvbnN0IGdlbmVyaWNjYXRlZ29yeU5hbWUgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wcy5nZW5lcmljY2F0ZWdvcnkgPyBwcm9wcy5nZW5lcmljY2F0ZWdvcnkubmFtZSA6IFwiXCJcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgICBjb25zdCBpbnN0YW5jZXMgPSBwcm9wcy5nZW5lcmljY2F0ZWdvcnkuaW5zdGFuY2VzXG4gICAgICAgICAgY29uc29sZS5sb2coYFJlbmFtaW5nICR7cHJvcHMuZ2VuZXJpY2NhdGVnb3J5Lm5hbWV9IHRvICR7dmFsdWV9YClcbiAgICAgICAgICAkcS5kaWFsb2coe1xuICAgICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm0gY2F0ZWdvcnkgcmVuYW1pbmcnLFxuICAgICAgICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBgRG8geW91IGNvbmZpcm0gdGhlIHJlbmFtaW5nIG9mICR7aW5zdGFuY2VzLmxlbmd0aH0gU3BlY2lmaWMgU3luY2hyb25pYyBDYXRlZ29yaWVzIGZyb20gPHN0cm9uZz4ke3Byb3BzLmdlbmVyaWNjYXRlZ29yeS5uYW1lfTwvc3Ryb25nPiB0byA8c3Ryb25nPiR7dmFsdWV9PC9zdHJvbmc+P2AsXG4gICAgICAgICAgICAgIGNhbmNlbDogdHJ1ZSxcbiAgICAgICAgICAgICAgcGVyc2lzdGVudDogdHJ1ZVxuICAgICAgICAgIH0pLm9uT2soKCkgPT4ge1xuICAgICAgICAgICAgICBpbnN0YW5jZXMuZm9yRWFjaChzc2MgPT4ge1xuICAgICAgICAgICAgICAgICAgc3RvcmUudXBkYXRlRWxlbWVudChzc2MsIHsgbmFtZTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgJHEubm90aWZ5KHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBSZW5hbWVkICR7aW5zdGFuY2VzLmxlbmd0aH0gY2F0ZWdvcmllcyBhcyBcIiR7dmFsdWV9XCJgXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgIH0pXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgY2F0ZWdvcnlDb2xvciA9IGNvbXB1dGVkKHtcbiAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzLmdlbmVyaWNjYXRlZ29yeS5jb2xvclxuICAgICAgfSxcbiAgICAgIHNldCAoY29sb3I6IHN0cmluZykge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZVN5bmNocm9uaWNDYXRlZ29yeUNvbG9yIChwcm9wcy5nZW5lcmljY2F0ZWdvcnkucHJvamVjdElkLCBwcm9wcy5nZW5lcmljY2F0ZWdvcnkubmFtZSwgY29sb3IpXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgY3VycmVudEludGVydmlld01vbWVudHNMYWJlbCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNvdW50ID0gY3VycmVudE1vbWVudHMudmFsdWUubGVuZ3RoXG4gICAgICBpZiAoY291bnQpIHtcbiAgICAgICAgICByZXR1cm4gYFByZXNlbnQgaW4gJHtjb3VudH0gbW9tZW50cyBpbiB0aGUgY3VycmVudCBpbnRlcnZpZXdgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIk5vdCBwcmVzZW50IGluIHRoZSBjdXJyZW50IGludGVydmlld1wiXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgbW9tZW50c0xhYmVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IG91dHB1dCA9IFwiXCJcbiAgICAgIGNvbnN0IGNvdW50ID0gbW9tZW50cy52YWx1ZS5sZW5ndGhcbiAgICAgIGlmIChjb3VudCkge1xuICAgICAgICAgIG91dHB1dCA9IGBQcmVzZW50IGluICR7Y291bnR9IG1vbWVudHNgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dHB1dCA9IFwiTm90IHByZXNlbnQgaW4gYW55IGludGVydmlld1wiXG4gICAgICB9XG4gICAgICBjb25zdCBjb3VudE1vZGVsID0gZGV0YWNoZWRNb2RlbEluZm9zLnZhbHVlLmxlbmd0aFxuICAgICAgaWYgKGNvdW50TW9kZWwpIHtcbiAgICAgICAgICBvdXRwdXQgPSBgJHtvdXRwdXR9IGFuZCBpbiAke2NvdW50TW9kZWx9IGRldGFjaGVkIG1vZGVsc2BcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXRcbiAgfSlcblxuICBmdW5jdGlvbiBoaWdobGlnaHRNb21lbnQgKG1vbWVudElkOiBzdHJpbmcpIHtcbiAgICAgIGlzdG9yZS5zZXRIaWdobGlnaHRlZE1vbWVudElkKG1vbWVudElkKVxuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFNwZWNpZmljU3luY2hyb25pY01vZGVsIChtb2RlbElkOiBzdHJpbmcpIHtcbiAgICAgIGlzdG9yZS5zZXRFZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbElkKG1vZGVsSWQpXG4gIH1cblxuICBmdW5jdGlvbiBieUludGVydmlldyAobW9tZW50czogQXJyYXk8TW9tZW50Pikge1xuICAgICAgY29uc3QgcmVwbyA9IHN0b3JlLmdldFJlcG8oKVxuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3QuZnJvbUVudHJpZXMocmVwby5JbnRlcnZpZXcuZ2V0KCkubWFwKChpOiBJbnRlcnZpZXcpID0+IFsgaS5pZCwgaS5sYWJlbCBdKSlcblxuICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGdyb3VwQnkobW9tZW50cywgJ2ludGVydmlld0lkJykpXG4gICAgICAgICAgLm1hcCgoW2lkLCBhcnJdKSA9PiBbIG5hbWVzW2lkXSwgKGFyciBhcyBBcnJheTxhbnk+KS5sZW5ndGggXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ5RGV0YWNoZWRNb2RlbCAobW9kZWxJbmZvczogQXJyYXk8Q29udGFpbmVySW5mbz4pIHtcbiAgICAgIGNvbnN0IHJlcG8gPSBzdG9yZS5nZXRSZXBvKClcbiAgICAgIC8vICEgRGV0YWNoZWQgbW9kZWwgbmFtZSBpcyB0YWtlbiBmcm9tIHRoZSBTU00gcHJveHkgbmFtZSwgbm90IGRpcmVjdGx5IHRoZSBEZXRhY2hlZE1vZGVsIGluc3RhbmNlXG4gICAgICBjb25zdCBzcGVjaWZpY1N5bmNocm9uaWNNb2RlbElkcyA9IG1vZGVsSW5mb3MubWFwKGluZm8gPT4gaW5mby5zcGVjaWZpY1N5bmNocm9uaWNNb2RlbElkKVxuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3QuZnJvbUVudHJpZXMocmVwby5TcGVjaWZpY1N5bmNocm9uaWNNb2RlbFxuICAgICAgICAgIC5maW5kKHNwZWNpZmljU3luY2hyb25pY01vZGVsSWRzKVxuICAgICAgICAgIC5tYXAoKGk6IFNwZWNpZmljU3luY2hyb25pY01vZGVsKSA9PiBbIGkuaWQsIGkubmFtZSBdKSlcbiAgICAgIHJldHVybiBzcGVjaWZpY1N5bmNocm9uaWNNb2RlbElkcy5tYXAoKG1vZGVsSWQ6IHN0cmluZykgPT4gW25hbWVzW21vZGVsSWRdLCBtb2RlbElkLCAxXSBhcyBbc3RyaW5nLCBzdHJpbmcsIG51bWJlcl0gKVxuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoVGFiIChpbnRlcnZpZXdOYW1lOiBzdHJpbmcpIHtcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICB0YWI6IGludGVydmlld05hbWVcbiAgICAgICAgICB9XG4gICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3Igd2hlbiBzd2l0Y2hpbmcgdmlldzogJHtlfWApXG4gICAgICB9KVxuICB9XG5cbiAgaW1wb3J0IHR5cGUgeyBOYW1lZEFjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvdXRpbC50cydcbiAgY29uc3QgbWVudUFjdGlvbnM6IE5hbWVkQWN0aW9uW10gPSBbXG4gICAgICBbIFwiRGVidWdcIiwgKCkgPT4gZGVidWcoKSBdXG4gIF1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1oYW5kbGUge1xuICAgICAgb3BhY2l0eTogLjU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktaGFuZGxlOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IC43O1xuICB9XG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWUge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWU6aG92ZXIgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbiB7XG4gICAgICBib3JkZXItbGVmdDogMXB4IGRvdHRlZCBibGFjaztcbiAgfVxuICAucS1saXN0LS1kZW5zZSA+IC5xLWl0ZW0sIC5xLWl0ZW0tLWRlbnNlIHtcbiAgICBtaW4taGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmc6IDAgMnB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbiAgLmludGVydmlldy1uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgLmhhcy1lcnJvciB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZ2VuZXJpY2NhdGVnb3JpZXMtY29udGFpbmVyXCJcbiAgICAgICA6a2V5PVwicHJvamVjdElkXCJcbiAgICAgICA6ZGF0YS1wcm9qZWN0PVwicHJvamVjdElkXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1ib2xkXCI+e3sgdGl0bGUgfX1cbiAgICAgIDxxLWJ0blxuICAgICAgICBmbGF0XG4gICAgICAgIGRlbnNlXG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIGljb249XCJpbmZvXCJcbiAgICAgICAgQGNsaWNrPVwiZGVidWdcIlxuICAgICAgICBuby1jYXBzPlxuICAgICAgICA8cS10b29sdGlwPlRoaXMgaXMgdGhlIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBtb2RlbCByZXN1bHRpbmcgZnJvbSB0aGUgY29tYmluYXRpb24gb2YgYWxsIHN5bmNocm9uaWMgbW9kZWxzIGZyb20gaW50ZXJ2aWV3cyBhbmQgYWxsIGRldGFjaGVkIHN5bmNocm9uaWMgbW9kZWxzLlxuICAgICAgICA8L3EtdG9vbHRpcD5cbiAgICAgIDwvcS1idG4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdlbmVyaWNjYXRlZ29yaWVzLWxpc3RcIj5cbiAgICAgIDxHZW5lcmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvblxuICAgICAgICB2LWZvcj1cImNhdGVnb3J5IGluIGdlbmVyaWNHcmFwaHMuY2F0ZWdvcmllc1wiXG4gICAgICAgIDprZXk9XCJjYXRlZ29yeS5uYW1lXCJcbiAgICAgICAgOmdlbmVyaWNHcmFwaHM9XCJnZW5lcmljR3JhcGhzXCJcbiAgICAgICAgOmdlbmVyaWNjYXRlZ29yeT1cImNhdGVnb3J5XCJcbiAgICAgICAgOmN1cnJlbnRJbnRlcnZpZXdJZD1cImN1cnJlbnRJbnRlcnZpZXdJZFwiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgR2VuZXJpY0NhdGVnb3J5UmVwcmVzZW50YXRpb24gZnJvbSAnLi9HZW5lcmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbi52dWUnXG5cbiAgaW1wb3J0IHR5cGUgeyBHcmFwaEluZm8gfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICAgICAgcHJvamVjdElkOiBzdHJpbmcsXG4gICAgICBnZW5lcmljR3JhcGhzOiBHcmFwaEluZm8sXG4gICAgICBjdXJyZW50SW50ZXJ2aWV3SWQ6IHN0cmluZyxcbiAgICAgIHRpdGxlPzogc3RyaW5nXG4gIH0+KClcblxuICBmdW5jdGlvbiBkZWJ1ZyAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRJbnRlcnZpZXdJZFwiLCBwcm9wcy5jdXJyZW50SW50ZXJ2aWV3SWQpXG4gICAgICBjb25zb2xlLmxvZyhcImdlbmVyaWNHcmFwaHNcIiwgcHJvcHMuZ2VuZXJpY0dyYXBocylcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS1jb250YWluZXIgcm93XCJcbiAgICAgICB2LWlmPVwiZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeVwiXG4gICAgICAgOmRhdGEtZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeT1cImNhdGVnb3J5SWRcIj5cbiAgICA8Y3VzdG9tLWV4cGFuc2lvbi1pdGVtXG4gICAgICBjbGFzcz1cImdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnktYm9keVwiXG4gICAgICA6ZXhwYW5kLWljb24tY2xhc3M9XCJ7ICdpbnZpc2libGUnOiBnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LmNoaWxkcmVuPy5sZW5ndGggPT0gMCB9XCJcbiAgICAgID5cblxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpoZWFkZXI+XG4gICAgICAgIDxEcm9wWm9uZSBkYXRhPVwiaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgdHlwZXM9XCJ1cG10L2dlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnkgdXBtdC9tb21lbnRcIlxuICAgICAgICAgICAgICAgICAgQGdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnk9XCJkcm9wcGVkR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICBAbW9tZW50PVwiZHJvcHBlZE1vbWVudFwiPlxuICAgICAgICAgIDxEcmFnRWxlbWVudFxuICAgICAgICAgICAgY2xhc3M9XCJnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5XCJcbiAgICAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LmNvbG9yIHx8ICd0cmFuc3BhcmVudCcgfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJkZWJ1Z1wiXG4gICAgICAgICAgICB0eXBlPVwiZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeVwiXG4gICAgICAgICAgICA6ZGF0YT1cImdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnkuaWRcIj5cbiAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgcmVmPVwiaGFuZGxlXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LWhhbmRsZVwiXG4gICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJtZGktYWxwaGEtZC1ib3hcIiAvPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3M9XCJnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LWxhYmVsXCI+XG4gICAgICAgICAgICAgIHt7IGdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnkubmFtZSB9fSA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwiY3VycmVudEludGVydmlld01vbWVudHNMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlPlxuICAgICAgICAgICAgICAgIDxxLW1lbnUgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgIHYtZm9yPVwibW9tZW50IGluIGN1cnJlbnRNb21lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCByb3cganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJtb21lbnQuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwibW9tZW50Lm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJoaWdobGlnaHRNb21lbnQobW9tZW50LmlkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogbW9tZW50LmNvbG9yIHx8ICd0cmFuc3BhcmVudCcgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm1kaS1hbHBoYS1kLWJveC1vdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgICAgICB7eyBjdXJyZW50TW9tZW50cy5sZW5ndGggfX08L3EtYnRuPiAvXG4gICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgIDp0aXRsZT1cIm1vbWVudHNMYWJlbFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICBkZW5zZT5cbiAgICAgICAgICAgICAgICA8cS1tZW51IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGl0ZW1zLWxlZnQgbm8td3JhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJbIG5hbWUsIGNvdW50IF0gaW4gYnlJbnRlcnZpZXcobW9tZW50cylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtYnRuIGNsYXNzPVwiZnVsbC13aWR0aCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwibWRpLWNvbW1lbnQtdGV4dC1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInN3aXRjaFRhYihuYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImludGVydmlldy1tb21lbnQtY291bnRcIj57eyBjb3VudCB9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICAgICAge3sgbW9tZW50cy5sZW5ndGggfX08L3EtYnRuPlxuICAgICAgICAgICAgICA8cS1wb3B1cC1lZGl0XG4gICAgICAgICAgICAgICAgcmVmPVwicG9wdXBFZGl0XCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZ2VuZXJpY2NhdGVnb3J5TmFtZVwiXG4gICAgICAgICAgICAgICAgYXV0by1zYXZlXG4gICAgICAgICAgICAgICAgdi1zbG90PVwic2NvcGVcIj5cbiAgICAgICAgICAgICAgICA8cS1pbnB1dCB2LW1vZGVsPVwic2NvcGUudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIEBmb2N1cz1cIigkZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNlbGVjdCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zZSBhdXRvZm9jdXMgY291bnRlciBAa2V5dXAuZW50ZXI9XCJzY29wZS5zZXRcIiAvPlxuICAgICAgICAgICAgICA8L3EtcG9wdXAtZWRpdD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxxLXNwYWNlIC8+XG4gICAgICAgICAgICA8RWxlbWVudE1lbnVcbiAgICAgICAgICAgICAgOmFjdGlvbnM9XCJtZW51QWN0aW9uc1wiIC8+XG4gICAgICAgICAgICA8Q29sb3JpemVJY29uXG4gICAgICAgICAgICAgIGNsYXNzPVwib24tbmFtZS1ob3ZlclwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJjYXRlZ29yeUNvbG9yXCIgLz5cbiAgICAgICAgICA8L0RyYWdFbGVtZW50PlxuICAgICAgICA8L0Ryb3Bab25lPlxuXG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlblwiPlxuICAgICAgICA8R2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgdi1mb3I9XCJjYXQgaW4gZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS5jaGlsZHJlblwiXG4gICAgICAgICAgOmtleT1cImNhdC5pZFwiXG4gICAgICAgICAgOmNhdGVnb3J5SWQ9XCJjYXQuaWRcIlxuICAgICAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIlxuICAgICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2N1c3RvbS1leHBhbnNpb24taXRlbT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInXG5cbiAgaW1wb3J0IEN1c3RvbUV4cGFuc2lvbkl0ZW0gZnJvbSAnLi9DdXN0b21FeHBhbnNpb25JdGVtLnZ1ZSdcbiAgaW1wb3J0IENvbG9yaXplSWNvbiBmcm9tICcuL0NvbG9yaXplSWNvbi52dWUnXG4gIGltcG9ydCBEcmFnRWxlbWVudCBmcm9tICcuL0RyYWdFbGVtZW50LnZ1ZSdcbiAgaW1wb3J0IERyb3Bab25lIGZyb20gJy4vRHJvcFpvbmUudnVlJ1xuICBpbXBvcnQgRWxlbWVudE1lbnUgZnJvbSAnLi9FbGVtZW50TWVudS52dWUnXG5cbiAgaW1wb3J0IEdlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcnkgZnJvbSAnc3RvcmVzL21vZGVscy9nZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5J1xuXG4gIGltcG9ydCBNb21lbnQgZnJvbSAnc3RvcmVzL21vZGVscy9tb21lbnQnXG4gIGltcG9ydCBJbnRlcnZpZXcgZnJvbSAnc3RvcmVzL21vZGVscy9pbnRlcnZpZXcnXG5cbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuICBpbXBvcnQgeyBncm91cEJ5IH0gZnJvbSAnLi91dGlsJ1xuXG4gIGNvbnN0IGlzdG9yZSA9IHVzZUludGVyZmFjZVN0b3JlKClcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgaW50ZXJmYWNlIFByb3BzIHtcbiAgICAgIGNhdGVnb3J5SWQ6IHN0cmluZyxcbiAgICAgIGN1cnJlbnRJbnRlcnZpZXdJZDogc3RyaW5nXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IHdpdGhEZWZhdWx0cyhkZWZpbmVQcm9wczxQcm9wcz4oKSwge1xuICAgICAgY3VycmVudEludGVydmlld0lkOiBcIlwiXG4gIH0pXG5cbiAgY29uc3QgcG9wdXBFZGl0ID0gcmVmKG51bGwpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5ID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuZ2V0R2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeShwcm9wcy5jYXRlZ29yeUlkKSlcblxuICBmdW5jdGlvbiBkZWJ1ZyAoKSB7XG4gICAgICAod2luZG93IGFzIGFueSkuZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeSA9IGdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnkudmFsdWVcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeVwiLCBnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgbW9tZW50cyA9IGNvbXB1dGVkKCgpOiBNb21lbnRbXSA9PiB7XG4gICAgICByZXR1cm4gZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS52YWx1ZT8ubW9tZW50cyA/PyBbXVxuICB9KVxuXG4gIGNvbnN0IGN1cnJlbnRNb21lbnRzID0gY29tcHV0ZWQoKCkgPT4gbW9tZW50cy52YWx1ZT8uZmlsdGVyKChtOiBNb21lbnQpID0+IG0uaW50ZXJ2aWV3SWQgPT09IHByb3BzLmN1cnJlbnRJbnRlcnZpZXdJZCkgfHwgW10pXG5cbiAgY29uc3QgZ2VuZXJpY2NhdGVnb3J5TmFtZSA9IGNvbXB1dGVkKHtcbiAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIGdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnkudmFsdWUgPyBnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LnZhbHVlLm5hbWUgOiBcIlwiXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgICAgc3RvcmUudXBkYXRlRWxlbWVudChnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LnZhbHVlIGFzIEdlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcnksIHsgbmFtZTogdmFsdWUgfSlcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBjYXRlZ29yeUNvbG9yID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS52YWx1ZT8uY29sb3IgPz8gXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAoY29sb3I6IHN0cmluZykge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZUVsZW1lbnQoZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS52YWx1ZSBhcyBHZW5lcmljRGlhY2hyb25pY0NhdGVnb3J5LCB7IGNvbG9yOiBjb2xvcn0pXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgY3VycmVudEludGVydmlld01vbWVudHNMYWJlbCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNvdW50ID0gY3VycmVudE1vbWVudHMudmFsdWUubGVuZ3RoXG4gICAgICBpZiAoY291bnQpIHtcbiAgICAgICAgICByZXR1cm4gYFByZXNlbnQgaW4gJHtjb3VudH0gbW9tZW50cyBpbiB0aGUgY3VycmVudCBpbnRlcnZpZXdgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIk5vdCBwcmVzZW50IGluIHRoZSBjdXJyZW50IGludGVydmlld1wiXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgbW9tZW50c0xhYmVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IG91dHB1dCA9IFwiXCJcbiAgICAgIGNvbnN0IGNvdW50ID0gbW9tZW50cy52YWx1ZS5sZW5ndGhcbiAgICAgIGlmIChjb3VudCkge1xuICAgICAgICAgIG91dHB1dCA9IGBQcmVzZW50IGluICR7Y291bnR9IG1vbWVudHNgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dHB1dCA9IFwiTm90IHByZXNlbnQgaW4gYW55IGludGVydmlld1wiXG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0cHV0XG4gIH0pXG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0TW9tZW50IChtb21lbnRJZDogc3RyaW5nKSB7XG4gICAgICBpc3RvcmUuc2V0SGlnaGxpZ2h0ZWRNb21lbnRJZChtb21lbnRJZClcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ5SW50ZXJ2aWV3IChtb21lbnRzOiBBcnJheTxNb21lbnQ+KSB7XG4gICAgICBjb25zdCByZXBvID0gc3RvcmUuZ2V0UmVwbygpXG4gICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5mcm9tRW50cmllcyhyZXBvLkludGVydmlldy5nZXQoKS5tYXAoKGk6IEludGVydmlldykgPT4gWyBpLmlkLCBpLmxhYmVsIF0pKVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoZ3JvdXBCeShtb21lbnRzLCAnaW50ZXJ2aWV3SWQnKSlcbiAgICAgICAgICAubWFwKChbaWQsIGFycl0pID0+IFsgbmFtZXNbaWRdLCAoYXJyIGFzIEFycmF5PGFueT4pLmxlbmd0aCBdKVxuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoVGFiIChpbnRlcnZpZXdOYW1lOiBzdHJpbmcpIHtcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICB0YWI6IGludGVydmlld05hbWVcbiAgICAgICAgICB9XG4gICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3Igd2hlbiBzd2l0Y2hpbmcgdmlldzogJHtlfWApXG4gICAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZEdlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcnkgKGNhdGVnb3J5SWQ6IHN0cmluZykge1xuICAgICAgaWYgKGdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICBzdG9yZS51cGRhdGVHZW5lcmljRGlhY2hyb25pY0NhdGVnb3J5KGNhdGVnb3J5SWQsIHtcbiAgICAgICAgICAgICAgcGFyZW50SWQ6IHByb3BzLmNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgIGZvbGRlcjogZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS52YWx1ZS5mb2xkZXJcbiAgICAgICAgICB9KVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZE1vbWVudCAobW9tZW50SWQ6IHN0cmluZykge1xuICAgICAgc3RvcmUuYWRkR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeVRvTW9tZW50KHByb3BzLmNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9tZW50SWQpXG4gIH1cblxuICBpbXBvcnQgdHlwZSB7IE5hbWVkQWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy91dGlsLnRzJ1xuICBjb25zdCBtZW51QWN0aW9uczogTmFtZWRBY3Rpb25bXSA9IFtcbiAgICAgIFsgXCJEZWxldGVcIiwgKCkgPT4gc3RvcmUuZGVsZXRlR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeShwcm9wcy5jYXRlZ29yeUlkKSBdLFxuICAgICAgWyBcIkRlYnVnXCIsICgpID0+IGRlYnVnKCkgXVxuICBdXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnktaGFuZGxlIHtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5nZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LWhhbmRsZTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAuNztcbiAgfVxuICAuZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS1uYW1lIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMDtcbiAgfVxuICAuZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeTpob3ZlciAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC5nZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkIGJsYWNrO1xuICB9XG4gIC5xLWxpc3QtLWRlbnNlID4gLnEtaXRlbSwgLnEtaXRlbS0tZGVuc2Uge1xuICAgIG1pbi1oZWlnaHQ6IDE4cHg7XG4gICAgcGFkZGluZzogMCAycHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuICAuaW50ZXJ2aWV3LW5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1vZGVsZm9sZGVyLWNvbnRhaW5lclwiXG4gICAgICAgdi1pZj1cIm1vZGVsZm9sZGVyXCJcbiAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogbW9kZWxmb2xkZXIuY29sb3IgfHwgJ3RyYW5zcGFyZW50JyB9XCJcbiAgICAgICA6ZGF0YS1tb2RlbGZvbGRlcj1cIm1vZGVsZm9sZGVySWRcIj5cblxuICAgIDxjdXN0b20tZXhwYW5zaW9uLWl0ZW1cbiAgICAgIGNsYXNzPVwiZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeS1ib2R5XCJcbiAgICAgIHYtbW9kZWw9XCJleHBhbmRcIlxuICAgICAgPlxuXG4gICAgICA8dGVtcGxhdGUgdi1zbG90OmhlYWRlcj5cbiAgICAgICAgPERyb3Bab25lIGRhdGE9XCJoZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtb2RlbGZvbGRlci1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgdHlwZXM9XCJ1cG10L21vZGVsZm9sZGVyXCJcbiAgICAgICAgICAgICAgICAgIEBtb2RlbGZvbGRlcj1cImRyb3BwZWRNb2RlbEZvbGRlclwiPlxuICAgICAgICAgIDxEcmFnRWxlbWVudFxuICAgICAgICAgICAgdHlwZT1cIm1vZGVsZm9sZGVyXCJcbiAgICAgICAgICAgIDpkYXRhPVwibW9kZWxmb2xkZXJJZFwiXG4gICAgICAgICAgICBAY2xpY2subWV0YT1cImRlYnVnXCI+XG4gICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJtZGktZm9sZGVyLW91dGxpbmVcIj5cbiAgICAgICAgICAgIDwvcS1pY29uPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb2RlbGZvbGRlci1uYW1lXCI+e3sgbW9kZWxmb2xkZXJOYW1lIH19XG4gICAgICAgICAgICAgIDxxLXBvcHVwLWVkaXQgdi1tb2RlbD1cIm1vZGVsZm9sZGVyTmFtZVwiIGF1dG8tc2F2ZSB2LXNsb3Q9XCJzY29wZVwiPlxuICAgICAgICAgICAgICAgIDxxLWlucHV0IHYtbW9kZWw9XCJzY29wZS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVwiKCRldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuc2VsZWN0KClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlIGF1dG9mb2N1cyBjb3VudGVyIEBrZXl1cC5lbnRlcj1cInNjb3BlLnNldFwiIC8+XG4gICAgICAgICAgICAgIDwvcS1wb3B1cC1lZGl0PlxuICAgICAgICAgICAgICA8Q29sb3JpemVJY29uXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vZGVsZm9sZGVyQ29sb3JcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9EcmFnRWxlbWVudD5cbiAgICAgICAgICA8cS1zcGFjZSAvPlxuICAgICAgICAgIDxFbGVtZW50TWVudVxuICAgICAgICAgICAgOmFjdGlvbnM9XCJtZW51QWN0aW9uc1wiIC8+XG4gICAgICAgIDwvRHJvcFpvbmU+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kZWxmb2xkZXItY2hpbGRyZW5cIj5cbiAgICAgICAgPGRpdiB2LWZvcj1cImYgaW4gbW9kZWxmb2xkZXIuZm9sZGVyc1wiIDprZXk9XCJmLmlkXCI+XG4gICAgICAgICAgPE1vZGVsRm9sZGVyUmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIlxuICAgICAgICAgICAgOm1vZGVsZm9sZGVySWQ9XCJmLmlkXCI+XG4gICAgICAgICAgPC9Nb2RlbEZvbGRlclJlcHJlc2VudGF0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWZvcj1cImMgaW4gbW9kZWxmb2xkZXIuZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yaWVzXCIgOmtleT1cImMuaWRcIj5cbiAgICAgICAgICA8R2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB2LWlmPVwiISBjLnBhcmVudElkXCJcbiAgICAgICAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIlxuICAgICAgICAgICAgOmNhdGVnb3J5SWQ9XCJjLmlkXCI+XG4gICAgICAgICAgPC9HZW5lcmljRGlhY2hyb25pY0NhdGVnb3J5UmVwcmVzZW50YXRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2N1c3RvbS1leHBhbnNpb24taXRlbT5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gIGltcG9ydCBDdXN0b21FeHBhbnNpb25JdGVtIGZyb20gJy4vQ3VzdG9tRXhwYW5zaW9uSXRlbS52dWUnXG4gIGltcG9ydCBDb2xvcml6ZUljb24gZnJvbSAnLi9Db2xvcml6ZUljb24udnVlJ1xuICBpbXBvcnQgRHJvcFpvbmUgZnJvbSAnLi9Ecm9wWm9uZS52dWUnXG4gIGltcG9ydCBEcmFnRWxlbWVudCBmcm9tICcuL0RyYWdFbGVtZW50LnZ1ZSdcbiAgaW1wb3J0IEVsZW1lbnRNZW51IGZyb20gJy4vRWxlbWVudE1lbnUudnVlJ1xuICBpbXBvcnQgR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uIGZyb20gJy4vR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBtb2RlbGZvbGRlcklkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxuICAgICAgY3VycmVudEludGVydmlld0lkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9XG4gIH0pXG5cbiAgY29uc3QgbW9kZWxmb2xkZXIgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5nZXRGb2xkZXIocHJvcHMubW9kZWxmb2xkZXJJZCkpXG5cbiAgZnVuY3Rpb24gZGVidWcgKCkge1xuICAgICAgKHdpbmRvdyBhcyBhbnkpLm1vZGVsZm9sZGVyID0gbW9kZWxmb2xkZXIudmFsdWVcbiAgICAgIGNvbnNvbGUubG9nKFwiTW9kZWxmb2xkZXJcIiwgbW9kZWxmb2xkZXIudmFsdWUpXG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkTW9kZWxGb2xkZXIgKG1vZGVsZm9sZGVySWQ6IHN0cmluZykge1xuICAgICAgc3RvcmUudXBkYXRlTW9kZWxGb2xkZXIobW9kZWxmb2xkZXJJZCwgeyBwYXJlbnRJZDogcHJvcHMubW9kZWxmb2xkZXJJZCB9KVxuICB9XG5cbiAgY29uc3QgbW9kZWxmb2xkZXJOYW1lID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gbW9kZWxmb2xkZXIudmFsdWUgPyBtb2RlbGZvbGRlci52YWx1ZS5uYW1lIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAodmFsdWU6IHN0cmluZykge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vZGVsRm9sZGVyKHByb3BzLm1vZGVsZm9sZGVySWQsIHsgbmFtZTp2YWx1ZSB9KVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vZGVsZm9sZGVyQ29sb3IgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiBtb2RlbGZvbGRlci52YWx1ZSA/IG1vZGVsZm9sZGVyLnZhbHVlLmNvbG9yIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAoY29sb3I6IHN0cmluZykge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vZGVsRm9sZGVyKHByb3BzLm1vZGVsZm9sZGVySWQsIHsgY29sb3IgfSlcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBleHBhbmQgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiBtb2RlbGZvbGRlci52YWx1ZSA/IG1vZGVsZm9sZGVyLnZhbHVlLmlzRXhwYW5kZWQgOiB0cnVlXG4gICAgICB9LFxuICAgICAgc2V0IChpc0V4cGFuZGVkOiBib29sZWFuKSB7XG4gICAgICAgICAgc3RvcmUudXBkYXRlTW9kZWxGb2xkZXIocHJvcHMubW9kZWxmb2xkZXJJZCwgeyBpc0V4cGFuZGVkIH0pXG4gICAgICB9XG4gIH0pXG5cbiAgaW1wb3J0IHR5cGUgeyBOYW1lZEFjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvdXRpbC50cydcblxuICBjb25zdCBtZW51QWN0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbnM6IE5hbWVkQWN0aW9uW10gPSBbXG4gICAgICAgICAgWyBgQWRkIGEgZm9sZGVyYCwgKCkgPT4gc3RvcmUuYWRkTW9kZWxGb2xkZXIocHJvcHMubW9kZWxmb2xkZXJJZCwgXCJuZXdmb2xkZXJcIikgXSxcbiAgICAgIF1cblxuICAgICAgaWYgKG1vZGVsZm9sZGVyLnZhbHVlICYmIG1vZGVsZm9sZGVyLnZhbHVlLnBhcmVudElkKSB7XG4gICAgICAgICAgYWN0aW9ucy5wdXNoKFsgXCJEZWxldGVcIiwgKCkgPT4gc3RvcmUuZGVsZXRlTW9kZWxGb2xkZXIocHJvcHMubW9kZWxmb2xkZXJJZCkgXSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY3Rpb25zXG4gIH0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuaGVhZGVyLWNsYXNzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tb2RlbGZvbGRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLm1vZGVsZm9sZGVyLWJvZHkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAubW9kZWxmb2xkZXItY2hpbGRyZW4ge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkIGJsYWNrO1xuICB9XG4gIC50cmFuc2l0aW9uYWwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNpdGlvbmFsLWNvbG9yKTtcbiAgfVxuICAudHJhbnNpdGlvbmFsOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiBjYWxjKCA1MCUgLSB2YXIoLS10cmFuc2l0aW9uYWwtYmFyLXdpZHRoKSAvIDIgKTtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGhlaWdodDogODB2aDtcbiAgICAgIHdpZHRoOiB2YXIoLS10cmFuc2l0aW9uYWwtYmFyLXdpZHRoKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zaXRpb25hbC1jb2xvcik7XG4gIH1cbiAgLm1vZGVsZm9sZGVyLWhhbmRsZSB7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAubW9kZWxmb2xkZXItaGFuZGxlOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IC44O1xuICB9XG4gIC5vbi1uYW1lLWhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLm1vZGVsZm9sZGVyLW5hbWUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLm1vZGVsZm9sZGVyLW5hbWU6aG92ZXIgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuICAucS1saXN0LS1kZW5zZSA+IC5xLWl0ZW0sIC5xLWl0ZW0tLWRlbnNlIHtcbiAgICBtaW4taGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmc6IDAgMnB4O1xuICB9XG4gIC5xLWl0ZW1fX3NlY3Rpb24tLWF2YXRhciB7XG4gICAgICBtaW4td2lkdGg6IDJweDtcbiAgfVxuICAucS1pdGVtX19zZWN0aW9uLS1zaWRlIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJnZW5lcmljZGlhY2hyb25pY2NhdGVnb3JpZXMtY29udGFpbmVyXCJcbiAgICAgICB2LWlmPVwicHJvamVjdFwiXG4gICAgICAgOmtleT1cInByb2plY3RJZFwiXG4gICAgICAgOmRhdGEtcHJvamVjdD1cInByb2plY3RJZFwiPlxuXG4gICAgPGRpdiBjbGFzcz1cInRleHQtYm9sZFwiPnt7IHRpdGxlIH19PC9kaXY+XG5cbiAgICA8TW9kZWxGb2xkZXJSZXByZXNlbnRhdGlvblxuICAgICAgOm1vZGVsZm9sZGVySWQ9XCJwcm9qZWN0Lm1vZGVsZm9sZGVyLmlkXCJcbiAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIiAvPlxuXG4gICAgPHEtYnRuXG4gICAgICBmbGF0XG4gICAgICBjbGFzcz1cImdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcmllcy1hZGRcIlxuICAgICAgZGVuc2VcbiAgICAgIHNpemU9XCJ4c1wiXG4gICAgICB0aXRsZT1cIkFkZCBnZW5lcmljIGRpYWNocm9uaWMgY2F0ZWdvcnlcIlxuICAgICAgQGNsaWNrPVwiYWRkR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeSgpXCJcbiAgICAgIGljb249XCJtZGktcGx1c1wiXG4gICAgICBuby1jYXBzPlxuICAgIDwvcS1idG4+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuXG4gIGltcG9ydCBNb2RlbEZvbGRlclJlcHJlc2VudGF0aW9uIGZyb20gJy4vTW9kZWxGb2xkZXJSZXByZXNlbnRhdGlvbi52dWUnXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgICAgIGN1cnJlbnRJbnRlcnZpZXdJZDogc3RyaW5nLFxuICAgICAgdGl0bGU/OiBzdHJpbmdcbiAgfT4oKVxuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcbiAgY29uc3QgaXN0b3JlID0gdXNlSW50ZXJmYWNlU3RvcmUoKVxuXG4gIGNvbnN0IHByb2plY3QgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5hY3RpdmF0ZVByb2plY3QocHJvcHMucHJvamVjdElkKSlcblxuICBmdW5jdGlvbiBhZGRHZW5lcmljRGlhY2hyb25pY0NhdGVnb3J5ICgpIHtcbiAgICAgIGlmIChwcm9qZWN0LnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBzdG9yZS5hZGRHZW5lcmljRGlhY2hyb25pY0NhdGVnb3J5KGlzdG9yZS5uZXdHRENJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnZhbHVlLm1vZGVsZm9sZGVyKVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IEdlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcnlcIiwgY2F0ZWdvcnkpXG4gICAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcmllcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5nZW5lcmljZGlhY2hyb25pY2NhdGVnb3JpZXMtYWRkIHtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaW5mby1wYW5lbFwiPlxuICAgIDxxLXRhYnNcbiAgICAgIHYtbW9kZWw9XCJpbmZvVGFiXCJcbiAgICAgIGRlbnNlXG4gICAgICBhbGlnbj1cImp1c3RpZnlcIlxuICAgICAgbmFycm93LWluZGljYXRvclxuICAgICAgPlxuICAgICAgPHEtdGFiIG5hbWU9XCJub3Rlc1wiIHNpemU9XCJ4c1wiIGljb249XCJtZGktY2hhdC1vdXRsaW5lXCIgbGFiZWw9XCJOb3Rlc1wiIC8+XG4gICAgICA8cS10YWIgbmFtZT1cImVycm9yc1wiIGljb249XCJtZGktYWxlcnQtb3V0bGluZVwiIGxhYmVsPVwiRXJyb3JzXCIgLz5cbiAgICA8L3EtdGFicz5cblxuICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgPHEtdGFiLXBhbmVscyB2LW1vZGVsPVwiaW5mb1RhYlwiPlxuICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJub3Rlc1wiPlxuICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgIGZpbGxlZFxuICAgICAgICAgIHYtbW9kZWw9XCJub3Rlc19maWx0ZXJcIlxuICAgICAgICAgIGxhYmVsPVwiRmlsdGVyLi4uXCJcbiAgICAgICAgICBzdGFjay1sYWJlbFxuICAgICAgICAgIGRlbnNlIC8+XG4gICAgICAgIDxkaXYgdi1mb3I9XCJub3RlIGluIG5vdGVzXCJcbiAgICAgICAgICAgICA6a2V5PVwibm90ZS5lbGVtZW50LmlkXCI+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgOmljb249XCJub3RlLmljb25cIlxuICAgICAgICAgICAgQGNsaWNrPVwib25Ob3RlQ2xpY2sobm90ZSlcIj5cbiAgICAgICAgICAgIDxxLXRvb2x0aXA+e3sgbm90ZS50b29sdGlwIH19PC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICB7eyBub3RlLnRleHQgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtdGFiLXBhbmVsPlxuXG4gICAgICA8cS10YWItcGFuZWwgbmFtZT1cImVycm9yc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcmllcy13aXRoLWVycm9yXCI+XG4gICAgICAgICAgPGRpdiB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNXaXRoRXJyb3JcIlxuICAgICAgICAgICAgICA6a2V5PVwiY2F0ZWdvcnkubmFtZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXRlZ29yeS10aXRsZVwiPlxuICAgICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWRpLWFscGhhLXMtYm94LW91dGxpbmVcIj5cbiAgICAgICAgICAgICAgPC9xLWljb24+XG4gICAgICAgICAgICAgIHt7IGNhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvcnNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gdi1mb3I9XCJlcnJvciwgaSBpbiBjYXRlZ29yeS5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiPlxuICAgICAgICAgICAgICAgIHt7IGVycm9yIH19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS10YWItcGFuZWw+XG4gICAgPC9xLXRhYi1wYW5lbHM+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgeyB1c2VJbnRlcmZhY2VTdG9yZSB9IGZyb20gJ3N0b3Jlcy9pbnRlcmZhY2UnXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IGlzdG9yZSA9IHVzZUludGVyZmFjZVN0b3JlKClcblxuICBpbXBvcnQgdHlwZSB7IEdyYXBoSW5mbywgTm90ZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgICAgIGdlbmVyaWNHcmFwaHM6IEdyYXBoSW5mbyxcbiAgICAgIGN1cnJlbnRJbnRlcnZpZXdJZDogc3RyaW5nLFxuICAgICAgdGl0bGU/OiBzdHJpbmdcbiAgfT4oKVxuXG4gIGNvbnN0IGluZm9UYWIgPSByZWYoJ25vdGVzJylcblxuICBjb25zdCBub3Rlc19maWx0ZXIgPSByZWYoJycpXG5cbiAgY29uc3Qgbm90ZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBvdXRwdXQgPSBzdG9yZS5nZXROb3Rlcyhwcm9wcy5wcm9qZWN0SWQpXG4gICAgICBpZiAobm90ZXNfZmlsdGVyLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIG91dHB1dC5maWx0ZXIobm90ZSA9PiBub3RlLnRleHQuaW5jbHVkZXMobm90ZXNfZmlsdGVyLnZhbHVlKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3JpZXNXaXRoRXJyb3IgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhwcm9wcy5nZW5lcmljR3JhcGhzLmJ5TmFtZSkuZmlsdGVyKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmVycm9ycyAmJiBjYXRlZ29yeS5lcnJvcnMubGVuZ3RoID4gMClcbiAgfSlcblxuICBmdW5jdGlvbiBvbk5vdGVDbGljayAobm90ZTogTm90ZSkge1xuICAgICAgaWYgKG5vdGUuaWNvbiA9PSAnbWRpLWFscGhhLWQtYm94LW91dGxpbmUnKSB7XG4gICAgICAgICAgaXN0b3JlLnNldEhpZ2hsaWdodGVkTW9tZW50SWQobm90ZS5lbGVtZW50LmlkKVxuICAgICAgfSBlbHNlIGlmIChub3RlLmljb24gPT0gJ21kaS1hbHBoYS1zLWJveC1vdXRsaW5lJykge1xuICAgICAgICAgIC8vIFdlIGhhdmUgYSBTU0MsIHdlIGhhdmUgdG8gZmluZCB0aGUgcm9vdCBjYXRlZ29yeSwgZ2V0IGl0cyBtb2RlbCBhbmQgdXNlIGl0cyBpZFxuICAgICAgICAgIGNvbnN0IGluZm8gPSBwcm9wcy5nZW5lcmljR3JhcGhzLmluc3RhbmNlSWRUb0NvbnRhaW5lckluZm9bbm90ZS5lbGVtZW50LmlkXVxuICAgICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgICAgIGlzdG9yZS5zZXRFZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbElkKGluZm8uc3BlY2lmaWNTeW5jaHJvbmljTW9kZWxJZClcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgc2hhbGxvd1JlZiwgd2F0Y2hFZmZlY3QsIHJlYWRvbmx5LCByZWYsIHdhdGNoLCBjdXN0b21SZWYsIGdldEN1cnJlbnRTY29wZSwgb25TY29wZURpc3Bvc2UsIGVmZmVjdFNjb3BlLCBnZXRDdXJyZW50SW5zdGFuY2UsIHByb3ZpZGUsIGluamVjdCwgaXNWdWUzLCB2ZXJzaW9uLCBpc1JlZiwgdW5yZWYsIGNvbXB1dGVkLCByZWFjdGl2ZSwgdG9SZWZzIGFzIHRvUmVmcyQxLCB0b1JlZiBhcyB0b1JlZiQxLCBpc1Z1ZTIsIHNldCBhcyBzZXQkMSwgb25CZWZvcmVNb3VudCwgbmV4dFRpY2ssIG9uQmVmb3JlVW5tb3VudCwgb25Nb3VudGVkLCBvblVubW91bnRlZCwgaXNSZWFjdGl2ZSB9IGZyb20gJ3Z1ZS1kZW1pJztcblxuZnVuY3Rpb24gY29tcHV0ZWRFYWdlcihmbiwgb3B0aW9ucykge1xuICB2YXIgX2E7XG4gIGNvbnN0IHJlc3VsdCA9IHNoYWxsb3dSZWYoKTtcbiAgd2F0Y2hFZmZlY3QoKCkgPT4ge1xuICAgIHJlc3VsdC52YWx1ZSA9IGZuKCk7XG4gIH0sIHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGZsdXNoOiAoX2EgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmZsdXNoKSAhPSBudWxsID8gX2EgOiBcInN5bmNcIlxuICB9KTtcbiAgcmV0dXJuIHJlYWRvbmx5KHJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVkV2l0aENvbnRyb2woc291cmNlLCBmbikge1xuICBsZXQgdiA9IHZvaWQgMDtcbiAgbGV0IHRyYWNrO1xuICBsZXQgdHJpZ2dlcjtcbiAgY29uc3QgZGlydHkgPSByZWYodHJ1ZSk7XG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBkaXJ0eS52YWx1ZSA9IHRydWU7XG4gICAgdHJpZ2dlcigpO1xuICB9O1xuICB3YXRjaChzb3VyY2UsIHVwZGF0ZSwgeyBmbHVzaDogXCJzeW5jXCIgfSk7XG4gIGNvbnN0IGdldCA9IHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiID8gZm4gOiBmbi5nZXQ7XG4gIGNvbnN0IHNldCA9IHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiID8gdm9pZCAwIDogZm4uc2V0O1xuICBjb25zdCByZXN1bHQgPSBjdXN0b21SZWYoKF90cmFjaywgX3RyaWdnZXIpID0+IHtcbiAgICB0cmFjayA9IF90cmFjaztcbiAgICB0cmlnZ2VyID0gX3RyaWdnZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgaWYgKGRpcnR5LnZhbHVlKSB7XG4gICAgICAgICAgdiA9IGdldCgpO1xuICAgICAgICAgIGRpcnR5LnZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdHJhY2soKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgICB9LFxuICAgICAgc2V0KHYyKSB7XG4gICAgICAgIHNldCA9PSBudWxsID8gdm9pZCAwIDogc2V0KHYyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgaWYgKE9iamVjdC5pc0V4dGVuc2libGUocmVzdWx0KSlcbiAgICByZXN1bHQudHJpZ2dlciA9IHVwZGF0ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdHJ5T25TY29wZURpc3Bvc2UoZm4pIHtcbiAgaWYgKGdldEN1cnJlbnRTY29wZSgpKSB7XG4gICAgb25TY29wZURpc3Bvc2UoZm4pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRIb29rKCkge1xuICBjb25zdCBmbnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBjb25zdCBvZmYgPSAoZm4pID0+IHtcbiAgICBmbnMuZGVsZXRlKGZuKTtcbiAgfTtcbiAgY29uc3Qgb24gPSAoZm4pID0+IHtcbiAgICBmbnMuYWRkKGZuKTtcbiAgICBjb25zdCBvZmZGbiA9ICgpID0+IG9mZihmbik7XG4gICAgdHJ5T25TY29wZURpc3Bvc2Uob2ZmRm4pO1xuICAgIHJldHVybiB7XG4gICAgICBvZmY6IG9mZkZuXG4gICAgfTtcbiAgfTtcbiAgY29uc3QgdHJpZ2dlciA9ICguLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKEFycmF5LmZyb20oZm5zKS5tYXAoKGZuKSA9PiBmbiguLi5hcmdzKSkpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIG9uLFxuICAgIG9mZixcbiAgICB0cmlnZ2VyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdsb2JhbFN0YXRlKHN0YXRlRmFjdG9yeSkge1xuICBsZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgbGV0IHN0YXRlO1xuICBjb25zdCBzY29wZSA9IGVmZmVjdFNjb3BlKHRydWUpO1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoIWluaXRpYWxpemVkKSB7XG4gICAgICBzdGF0ZSA9IHNjb3BlLnJ1bigoKSA9PiBzdGF0ZUZhY3RvcnkoLi4uYXJncykpO1xuICAgICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG59XG5cbmNvbnN0IGxvY2FsUHJvdmlkZWRTdGF0ZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXG5jb25zdCBwcm92aWRlTG9jYWwgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICB2YXIgX2E7XG4gIGNvbnN0IGluc3RhbmNlID0gKF9hID0gZ2V0Q3VycmVudEluc3RhbmNlKCkpID09IG51bGwgPyB2b2lkIDAgOiBfYS5wcm94eTtcbiAgaWYgKGluc3RhbmNlID09IG51bGwpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwicHJvdmlkZUxvY2FsIG11c3QgYmUgY2FsbGVkIGluIHNldHVwXCIpO1xuICBpZiAoIWxvY2FsUHJvdmlkZWRTdGF0ZU1hcC5oYXMoaW5zdGFuY2UpKVxuICAgIGxvY2FsUHJvdmlkZWRTdGF0ZU1hcC5zZXQoaW5zdGFuY2UsIC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAgY29uc3QgbG9jYWxQcm92aWRlZFN0YXRlID0gbG9jYWxQcm92aWRlZFN0YXRlTWFwLmdldChpbnN0YW5jZSk7XG4gIGxvY2FsUHJvdmlkZWRTdGF0ZVtrZXldID0gdmFsdWU7XG4gIHByb3ZpZGUoa2V5LCB2YWx1ZSk7XG59O1xuXG5jb25zdCBpbmplY3RMb2NhbCA9ICguLi5hcmdzKSA9PiB7XG4gIHZhciBfYTtcbiAgY29uc3Qga2V5ID0gYXJnc1swXTtcbiAgY29uc3QgaW5zdGFuY2UgPSAoX2EgPSBnZXRDdXJyZW50SW5zdGFuY2UoKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnByb3h5O1xuICBpZiAoaW5zdGFuY2UgPT0gbnVsbClcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbmplY3RMb2NhbCBtdXN0IGJlIGNhbGxlZCBpbiBzZXR1cFwiKTtcbiAgaWYgKGxvY2FsUHJvdmlkZWRTdGF0ZU1hcC5oYXMoaW5zdGFuY2UpICYmIGtleSBpbiBsb2NhbFByb3ZpZGVkU3RhdGVNYXAuZ2V0KGluc3RhbmNlKSlcbiAgICByZXR1cm4gbG9jYWxQcm92aWRlZFN0YXRlTWFwLmdldChpbnN0YW5jZSlba2V5XTtcbiAgcmV0dXJuIGluamVjdCguLi5hcmdzKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUluamVjdGlvblN0YXRlKGNvbXBvc2FibGUsIG9wdGlvbnMpIHtcbiAgY29uc3Qga2V5ID0gKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5qZWN0aW9uS2V5KSB8fCBTeW1ib2woY29tcG9zYWJsZS5uYW1lIHx8IFwiSW5qZWN0aW9uU3RhdGVcIik7XG4gIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuZGVmYXVsdFZhbHVlO1xuICBjb25zdCB1c2VQcm92aWRpbmdTdGF0ZSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBjb21wb3NhYmxlKC4uLmFyZ3MpO1xuICAgIHByb3ZpZGVMb2NhbChrZXksIHN0YXRlKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG4gIGNvbnN0IHVzZUluamVjdGVkU3RhdGUgPSAoKSA9PiBpbmplY3RMb2NhbChrZXksIGRlZmF1bHRWYWx1ZSk7XG4gIHJldHVybiBbdXNlUHJvdmlkaW5nU3RhdGUsIHVzZUluamVjdGVkU3RhdGVdO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGFyZWRDb21wb3NhYmxlKGNvbXBvc2FibGUpIHtcbiAgbGV0IHN1YnNjcmliZXJzID0gMDtcbiAgbGV0IHN0YXRlO1xuICBsZXQgc2NvcGU7XG4gIGNvbnN0IGRpc3Bvc2UgPSAoKSA9PiB7XG4gICAgc3Vic2NyaWJlcnMgLT0gMTtcbiAgICBpZiAoc2NvcGUgJiYgc3Vic2NyaWJlcnMgPD0gMCkge1xuICAgICAgc2NvcGUuc3RvcCgpO1xuICAgICAgc3RhdGUgPSB2b2lkIDA7XG4gICAgICBzY29wZSA9IHZvaWQgMDtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIHN1YnNjcmliZXJzICs9IDE7XG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgc2NvcGUgPSBlZmZlY3RTY29wZSh0cnVlKTtcbiAgICAgIHN0YXRlID0gc2NvcGUucnVuKCgpID0+IGNvbXBvc2FibGUoLi4uYXJncykpO1xuICAgIH1cbiAgICB0cnlPblNjb3BlRGlzcG9zZShkaXNwb3NlKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4dGVuZFJlZihyZWYsIGV4dGVuZCwgeyBlbnVtZXJhYmxlID0gZmFsc2UsIHVud3JhcCA9IHRydWUgfSA9IHt9KSB7XG4gIGlmICghaXNWdWUzICYmICF2ZXJzaW9uLnN0YXJ0c1dpdGgoXCIyLjcuXCIpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIltWdWVVc2VdIGV4dGVuZFJlZiBvbmx5IHdvcmtzIGluIFZ1ZSAyLjcgb3IgYWJvdmUuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhleHRlbmQpKSB7XG4gICAgaWYgKGtleSA9PT0gXCJ2YWx1ZVwiKVxuICAgICAgY29udGludWU7XG4gICAgaWYgKGlzUmVmKHZhbHVlKSAmJiB1bndyYXApIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWYsIGtleSwge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodikge1xuICAgICAgICAgIHZhbHVlLnZhbHVlID0gdjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWYsIGtleSwgeyB2YWx1ZSwgZW51bWVyYWJsZSB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlZjtcbn1cblxuZnVuY3Rpb24gZ2V0KG9iaiwga2V5KSB7XG4gIGlmIChrZXkgPT0gbnVsbClcbiAgICByZXR1cm4gdW5yZWYob2JqKTtcbiAgcmV0dXJuIHVucmVmKG9iailba2V5XTtcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHYpIHtcbiAgcmV0dXJuIHVucmVmKHYpICE9IG51bGw7XG59XG5cbmZ1bmN0aW9uIG1ha2VEZXN0cnVjdHVyYWJsZShvYmosIGFycikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNvbnN0IGNsb25lID0geyAuLi5vYmogfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xvbmUsIFN5bWJvbC5pdGVyYXRvciwge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZSgpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuZXh0OiAoKSA9PiAoe1xuICAgICAgICAgICAgdmFsdWU6IGFycltpbmRleCsrXSxcbiAgICAgICAgICAgIGRvbmU6IGluZGV4ID4gYXJyLmxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNsb25lO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFsuLi5hcnJdLCBvYmopO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvVmFsdWUocikge1xuICByZXR1cm4gdHlwZW9mIHIgPT09IFwiZnVuY3Rpb25cIiA/IHIoKSA6IHVucmVmKHIpO1xufVxuY29uc3QgcmVzb2x2ZVVucmVmID0gdG9WYWx1ZTtcblxuZnVuY3Rpb24gcmVhY3RpZnkoZm4sIG9wdGlvbnMpIHtcbiAgY29uc3QgdW5yZWZGbiA9IChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmNvbXB1dGVkR2V0dGVyKSA9PT0gZmFsc2UgPyB1bnJlZiA6IHRvVmFsdWU7XG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVkKCgpID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3MubWFwKChpKSA9PiB1bnJlZkZuKGkpKSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWFjdGlmeU9iamVjdChvYmosIG9wdGlvbnNPcktleXMgPSB7fSkge1xuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgb3B0aW9ucztcbiAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9uc09yS2V5cykpIHtcbiAgICBrZXlzID0gb3B0aW9uc09yS2V5cztcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zID0gb3B0aW9uc09yS2V5cztcbiAgICBjb25zdCB7IGluY2x1ZGVPd25Qcm9wZXJ0aWVzID0gdHJ1ZSB9ID0gb3B0aW9uc09yS2V5cztcbiAgICBrZXlzLnB1c2goLi4uT2JqZWN0LmtleXMob2JqKSk7XG4gICAgaWYgKGluY2x1ZGVPd25Qcm9wZXJ0aWVzKVxuICAgICAga2V5cy5wdXNoKC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikpO1xuICB9XG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAga2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGtleSxcbiAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyByZWFjdGlmeSh2YWx1ZS5iaW5kKG9iaiksIG9wdGlvbnMpIDogdmFsdWVcbiAgICAgIF07XG4gICAgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gdG9SZWFjdGl2ZShvYmplY3RSZWYpIHtcbiAgaWYgKCFpc1JlZihvYmplY3RSZWYpKVxuICAgIHJldHVybiByZWFjdGl2ZShvYmplY3RSZWYpO1xuICBjb25zdCBwcm94eSA9IG5ldyBQcm94eSh7fSwge1xuICAgIGdldChfLCBwLCByZWNlaXZlcikge1xuICAgICAgcmV0dXJuIHVucmVmKFJlZmxlY3QuZ2V0KG9iamVjdFJlZi52YWx1ZSwgcCwgcmVjZWl2ZXIpKTtcbiAgICB9LFxuICAgIHNldChfLCBwLCB2YWx1ZSkge1xuICAgICAgaWYgKGlzUmVmKG9iamVjdFJlZi52YWx1ZVtwXSkgJiYgIWlzUmVmKHZhbHVlKSlcbiAgICAgICAgb2JqZWN0UmVmLnZhbHVlW3BdLnZhbHVlID0gdmFsdWU7XG4gICAgICBlbHNlXG4gICAgICAgIG9iamVjdFJlZi52YWx1ZVtwXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBkZWxldGVQcm9wZXJ0eShfLCBwKSB7XG4gICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShvYmplY3RSZWYudmFsdWUsIHApO1xuICAgIH0sXG4gICAgaGFzKF8sIHApIHtcbiAgICAgIHJldHVybiBSZWZsZWN0LmhhcyhvYmplY3RSZWYudmFsdWUsIHApO1xuICAgIH0sXG4gICAgb3duS2V5cygpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3RSZWYudmFsdWUpO1xuICAgIH0sXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZWFjdGl2ZShwcm94eSk7XG59XG5cbmZ1bmN0aW9uIHJlYWN0aXZlQ29tcHV0ZWQoZm4pIHtcbiAgcmV0dXJuIHRvUmVhY3RpdmUoY29tcHV0ZWQoZm4pKTtcbn1cblxuZnVuY3Rpb24gcmVhY3RpdmVPbWl0KG9iaiwgLi4ua2V5cykge1xuICBjb25zdCBmbGF0S2V5cyA9IGtleXMuZmxhdCgpO1xuICBjb25zdCBwcmVkaWNhdGUgPSBmbGF0S2V5c1swXTtcbiAgcmV0dXJuIHJlYWN0aXZlQ29tcHV0ZWQoKCkgPT4gdHlwZW9mIHByZWRpY2F0ZSA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKHRvUmVmcyQxKG9iaikpLmZpbHRlcigoW2ssIHZdKSA9PiAhcHJlZGljYXRlKHRvVmFsdWUodiksIGspKSkgOiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXModG9SZWZzJDEob2JqKSkuZmlsdGVyKChlKSA9PiAhZmxhdEtleXMuaW5jbHVkZXMoZVswXSkpKSk7XG59XG5cbmNvbnN0IGlzQ2xpZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XG5jb25zdCBpc1dvcmtlciA9IHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWxUaGlzIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGU7XG5jb25zdCBpc0RlZiA9ICh2YWwpID0+IHR5cGVvZiB2YWwgIT09IFwidW5kZWZpbmVkXCI7XG5jb25zdCBub3ROdWxsaXNoID0gKHZhbCkgPT4gdmFsICE9IG51bGw7XG5jb25zdCBhc3NlcnQgPSAoY29uZGl0aW9uLCAuLi5pbmZvcykgPT4ge1xuICBpZiAoIWNvbmRpdGlvbilcbiAgICBjb25zb2xlLndhcm4oLi4uaW5mb3MpO1xufTtcbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmNvbnN0IGlzT2JqZWN0ID0gKHZhbCkgPT4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xuY29uc3Qgbm93ID0gKCkgPT4gRGF0ZS5ub3coKTtcbmNvbnN0IHRpbWVzdGFtcCA9ICgpID0+ICtEYXRlLm5vdygpO1xuY29uc3QgY2xhbXAgPSAobiwgbWluLCBtYXgpID0+IE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCBuKSk7XG5jb25zdCBub29wID0gKCkgPT4ge1xufTtcbmNvbnN0IHJhbmQgPSAobWluLCBtYXgpID0+IHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59O1xuY29uc3QgaGFzT3duID0gKHZhbCwga2V5KSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsLCBrZXkpO1xuY29uc3QgaXNJT1MgPSAvKiBAX19QVVJFX18gKi8gZ2V0SXNJT1MoKTtcbmZ1bmN0aW9uIGdldElzSU9TKCkge1xuICB2YXIgX2EsIF9iO1xuICByZXR1cm4gaXNDbGllbnQgJiYgKChfYSA9IHdpbmRvdyA9PSBudWxsID8gdm9pZCAwIDogd2luZG93Lm5hdmlnYXRvcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnVzZXJBZ2VudCkgJiYgKC9pUCg/OmFkfGhvbmV8b2QpLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSB8fCAoKF9iID0gd2luZG93ID09IG51bGwgPyB2b2lkIDAgOiB3aW5kb3cubmF2aWdhdG9yKSA9PSBudWxsID8gdm9pZCAwIDogX2IubWF4VG91Y2hQb2ludHMpID4gMiAmJiAvaVBhZHxNYWNpbnRvc2gvLnRlc3Qod2luZG93ID09IG51bGwgPyB2b2lkIDAgOiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGaWx0ZXJXcmFwcGVyKGZpbHRlciwgZm4pIHtcbiAgZnVuY3Rpb24gd3JhcHBlciguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShmaWx0ZXIoKCkgPT4gZm4uYXBwbHkodGhpcywgYXJncyksIHsgZm4sIHRoaXNBcmc6IHRoaXMsIGFyZ3MgfSkpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gd3JhcHBlcjtcbn1cbmNvbnN0IGJ5cGFzc0ZpbHRlciA9IChpbnZva2UpID0+IHtcbiAgcmV0dXJuIGludm9rZSgpO1xufTtcbmZ1bmN0aW9uIGRlYm91bmNlRmlsdGVyKG1zLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHRpbWVyO1xuICBsZXQgbWF4VGltZXI7XG4gIGxldCBsYXN0UmVqZWN0b3IgPSBub29wO1xuICBjb25zdCBfY2xlYXJUaW1lb3V0ID0gKHRpbWVyMikgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcjIpO1xuICAgIGxhc3RSZWplY3RvcigpO1xuICAgIGxhc3RSZWplY3RvciA9IG5vb3A7XG4gIH07XG4gIGNvbnN0IGZpbHRlciA9IChpbnZva2UpID0+IHtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRvVmFsdWUobXMpO1xuICAgIGNvbnN0IG1heER1cmF0aW9uID0gdG9WYWx1ZShvcHRpb25zLm1heFdhaXQpO1xuICAgIGlmICh0aW1lcilcbiAgICAgIF9jbGVhclRpbWVvdXQodGltZXIpO1xuICAgIGlmIChkdXJhdGlvbiA8PSAwIHx8IG1heER1cmF0aW9uICE9PSB2b2lkIDAgJiYgbWF4RHVyYXRpb24gPD0gMCkge1xuICAgICAgaWYgKG1heFRpbWVyKSB7XG4gICAgICAgIF9jbGVhclRpbWVvdXQobWF4VGltZXIpO1xuICAgICAgICBtYXhUaW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGludm9rZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxhc3RSZWplY3RvciA9IG9wdGlvbnMucmVqZWN0T25DYW5jZWwgPyByZWplY3QgOiByZXNvbHZlO1xuICAgICAgaWYgKG1heER1cmF0aW9uICYmICFtYXhUaW1lcikge1xuICAgICAgICBtYXhUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aW1lcilcbiAgICAgICAgICAgIF9jbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgIG1heFRpbWVyID0gbnVsbDtcbiAgICAgICAgICByZXNvbHZlKGludm9rZSgpKTtcbiAgICAgICAgfSwgbWF4RHVyYXRpb24pO1xuICAgICAgfVxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKG1heFRpbWVyKVxuICAgICAgICAgIF9jbGVhclRpbWVvdXQobWF4VGltZXIpO1xuICAgICAgICBtYXhUaW1lciA9IG51bGw7XG4gICAgICAgIHJlc29sdmUoaW52b2tlKCkpO1xuICAgICAgfSwgZHVyYXRpb24pO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gZmlsdGVyO1xufVxuZnVuY3Rpb24gdGhyb3R0bGVGaWx0ZXIoLi4uYXJncykge1xuICBsZXQgbGFzdEV4ZWMgPSAwO1xuICBsZXQgdGltZXI7XG4gIGxldCBpc0xlYWRpbmcgPSB0cnVlO1xuICBsZXQgbGFzdFJlamVjdG9yID0gbm9vcDtcbiAgbGV0IGxhc3RWYWx1ZTtcbiAgbGV0IG1zO1xuICBsZXQgdHJhaWxpbmc7XG4gIGxldCBsZWFkaW5nO1xuICBsZXQgcmVqZWN0T25DYW5jZWw7XG4gIGlmICghaXNSZWYoYXJnc1swXSkgJiYgdHlwZW9mIGFyZ3NbMF0gPT09IFwib2JqZWN0XCIpXG4gICAgKHsgZGVsYXk6IG1zLCB0cmFpbGluZyA9IHRydWUsIGxlYWRpbmcgPSB0cnVlLCByZWplY3RPbkNhbmNlbCA9IGZhbHNlIH0gPSBhcmdzWzBdKTtcbiAgZWxzZVxuICAgIFttcywgdHJhaWxpbmcgPSB0cnVlLCBsZWFkaW5nID0gdHJ1ZSwgcmVqZWN0T25DYW5jZWwgPSBmYWxzZV0gPSBhcmdzO1xuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IHZvaWQgMDtcbiAgICAgIGxhc3RSZWplY3RvcigpO1xuICAgICAgbGFzdFJlamVjdG9yID0gbm9vcDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGZpbHRlciA9IChfaW52b2tlKSA9PiB7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0b1ZhbHVlKG1zKTtcbiAgICBjb25zdCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIGxhc3RFeGVjO1xuICAgIGNvbnN0IGludm9rZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBsYXN0VmFsdWUgPSBfaW52b2tlKCk7XG4gICAgfTtcbiAgICBjbGVhcigpO1xuICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XG4gICAgICBsYXN0RXhlYyA9IERhdGUubm93KCk7XG4gICAgICByZXR1cm4gaW52b2tlKCk7XG4gICAgfVxuICAgIGlmIChlbGFwc2VkID4gZHVyYXRpb24gJiYgKGxlYWRpbmcgfHwgIWlzTGVhZGluZykpIHtcbiAgICAgIGxhc3RFeGVjID0gRGF0ZS5ub3coKTtcbiAgICAgIGludm9rZSgpO1xuICAgIH0gZWxzZSBpZiAodHJhaWxpbmcpIHtcbiAgICAgIGxhc3RWYWx1ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGFzdFJlamVjdG9yID0gcmVqZWN0T25DYW5jZWwgPyByZWplY3QgOiByZXNvbHZlO1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxhc3RFeGVjID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICBpc0xlYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIHJlc29sdmUoaW52b2tlKCkpO1xuICAgICAgICAgIGNsZWFyKCk7XG4gICAgICAgIH0sIE1hdGgubWF4KDAsIGR1cmF0aW9uIC0gZWxhcHNlZCkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghbGVhZGluZyAmJiAhdGltZXIpXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gaXNMZWFkaW5nID0gdHJ1ZSwgZHVyYXRpb24pO1xuICAgIGlzTGVhZGluZyA9IGZhbHNlO1xuICAgIHJldHVybiBsYXN0VmFsdWU7XG4gIH07XG4gIHJldHVybiBmaWx0ZXI7XG59XG5mdW5jdGlvbiBwYXVzYWJsZUZpbHRlcihleHRlbmRGaWx0ZXIgPSBieXBhc3NGaWx0ZXIpIHtcbiAgY29uc3QgaXNBY3RpdmUgPSByZWYodHJ1ZSk7XG4gIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIGlzQWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgIGlzQWN0aXZlLnZhbHVlID0gdHJ1ZTtcbiAgfVxuICBjb25zdCBldmVudEZpbHRlciA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGlzQWN0aXZlLnZhbHVlKVxuICAgICAgZXh0ZW5kRmlsdGVyKC4uLmFyZ3MpO1xuICB9O1xuICByZXR1cm4geyBpc0FjdGl2ZTogcmVhZG9ubHkoaXNBY3RpdmUpLCBwYXVzZSwgcmVzdW1lLCBldmVudEZpbHRlciB9O1xufVxuXG5jb25zdCBkaXJlY3RpdmVIb29rcyA9IHtcbiAgbW91bnRlZDogaXNWdWUzID8gXCJtb3VudGVkXCIgOiBcImluc2VydGVkXCIsXG4gIHVwZGF0ZWQ6IGlzVnVlMyA/IFwidXBkYXRlZFwiIDogXCJjb21wb25lbnRVcGRhdGVkXCIsXG4gIHVubW91bnRlZDogaXNWdWUzID8gXCJ1bm1vdW50ZWRcIiA6IFwidW5iaW5kXCJcbn07XG5cbmZ1bmN0aW9uIGNhY2hlU3RyaW5nRnVuY3Rpb24oZm4pIHtcbiAgY29uc3QgY2FjaGUgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIChzdHIpID0+IHtcbiAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdO1xuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKTtcbiAgfTtcbn1cbmNvbnN0IGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbmNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpO1xuY29uc3QgY2FtZWxpemVSRSA9IC8tKFxcdykvZztcbmNvbnN0IGNhbWVsaXplID0gY2FjaGVTdHJpbmdGdW5jdGlvbigoc3RyKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCAoXywgYykgPT4gYyA/IGMudG9VcHBlckNhc2UoKSA6IFwiXCIpO1xufSk7XG5cbmZ1bmN0aW9uIHByb21pc2VUaW1lb3V0KG1zLCB0aHJvd09uVGltZW91dCA9IGZhbHNlLCByZWFzb24gPSBcIlRpbWVvdXRcIikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmICh0aHJvd09uVGltZW91dClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KHJlYXNvbiksIG1zKTtcbiAgICBlbHNlXG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBpZGVudGl0eShhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZXRvblByb21pc2UoZm4pIHtcbiAgbGV0IF9wcm9taXNlO1xuICBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgIGlmICghX3Byb21pc2UpXG4gICAgICBfcHJvbWlzZSA9IGZuKCk7XG4gICAgcmV0dXJuIF9wcm9taXNlO1xuICB9XG4gIHdyYXBwZXIucmVzZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgX3ByZXYgPSBfcHJvbWlzZTtcbiAgICBfcHJvbWlzZSA9IHZvaWQgMDtcbiAgICBpZiAoX3ByZXYpXG4gICAgICBhd2FpdCBfcHJldjtcbiAgfTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5mdW5jdGlvbiBpbnZva2UoZm4pIHtcbiAgcmV0dXJuIGZuKCk7XG59XG5mdW5jdGlvbiBjb250YWluc1Byb3Aob2JqLCAuLi5wcm9wcykge1xuICByZXR1cm4gcHJvcHMuc29tZSgoaykgPT4gayBpbiBvYmopO1xufVxuZnVuY3Rpb24gaW5jcmVhc2VXaXRoVW5pdCh0YXJnZXQsIGRlbHRhKSB7XG4gIHZhciBfYTtcbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09IFwibnVtYmVyXCIpXG4gICAgcmV0dXJuIHRhcmdldCArIGRlbHRhO1xuICBjb25zdCB2YWx1ZSA9ICgoX2EgPSB0YXJnZXQubWF0Y2goL14tP1xcZCtcXC4/XFxkKi8pKSA9PSBudWxsID8gdm9pZCAwIDogX2FbMF0pIHx8IFwiXCI7XG4gIGNvbnN0IHVuaXQgPSB0YXJnZXQuc2xpY2UodmFsdWUubGVuZ3RoKTtcbiAgY29uc3QgcmVzdWx0ID0gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpICsgZGVsdGE7XG4gIGlmIChOdW1iZXIuaXNOYU4ocmVzdWx0KSlcbiAgICByZXR1cm4gdGFyZ2V0O1xuICByZXR1cm4gcmVzdWx0ICsgdW5pdDtcbn1cbmZ1bmN0aW9uIG9iamVjdFBpY2sob2JqLCBrZXlzLCBvbWl0VW5kZWZpbmVkID0gZmFsc2UpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKChuLCBrKSA9PiB7XG4gICAgaWYgKGsgaW4gb2JqKSB7XG4gICAgICBpZiAoIW9taXRVbmRlZmluZWQgfHwgb2JqW2tdICE9PSB2b2lkIDApXG4gICAgICAgIG5ba10gPSBvYmpba107XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9LCB7fSk7XG59XG5mdW5jdGlvbiBvYmplY3RPbWl0KG9iaiwga2V5cywgb21pdFVuZGVmaW5lZCA9IGZhbHNlKSB7XG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMob2JqKS5maWx0ZXIoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIHJldHVybiAoIW9taXRVbmRlZmluZWQgfHwgdmFsdWUgIT09IHZvaWQgMCkgJiYgIWtleXMuaW5jbHVkZXMoa2V5KTtcbiAgfSkpO1xufVxuZnVuY3Rpb24gb2JqZWN0RW50cmllcyhvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9iaik7XG59XG5mdW5jdGlvbiBnZXRMaWZlQ3ljbGVUYXJnZXQodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgfHwgZ2V0Q3VycmVudEluc3RhbmNlKCk7XG59XG5cbmZ1bmN0aW9uIHRvUmVmKC4uLmFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoICE9PSAxKVxuICAgIHJldHVybiB0b1JlZiQxKC4uLmFyZ3MpO1xuICBjb25zdCByID0gYXJnc1swXTtcbiAgcmV0dXJuIHR5cGVvZiByID09PSBcImZ1bmN0aW9uXCIgPyByZWFkb25seShjdXN0b21SZWYoKCkgPT4gKHsgZ2V0OiByLCBzZXQ6IG5vb3AgfSkpKSA6IHJlZihyKTtcbn1cbmNvbnN0IHJlc29sdmVSZWYgPSB0b1JlZjtcblxuZnVuY3Rpb24gcmVhY3RpdmVQaWNrKG9iaiwgLi4ua2V5cykge1xuICBjb25zdCBmbGF0S2V5cyA9IGtleXMuZmxhdCgpO1xuICBjb25zdCBwcmVkaWNhdGUgPSBmbGF0S2V5c1swXTtcbiAgcmV0dXJuIHJlYWN0aXZlQ29tcHV0ZWQoKCkgPT4gdHlwZW9mIHByZWRpY2F0ZSA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKHRvUmVmcyQxKG9iaikpLmZpbHRlcigoW2ssIHZdKSA9PiBwcmVkaWNhdGUodG9WYWx1ZSh2KSwgaykpKSA6IE9iamVjdC5mcm9tRW50cmllcyhmbGF0S2V5cy5tYXAoKGspID0+IFtrLCB0b1JlZihvYmosIGspXSkpKTtcbn1cblxuZnVuY3Rpb24gcmVmQXV0b1Jlc2V0KGRlZmF1bHRWYWx1ZSwgYWZ0ZXJNcyA9IDFlNCkge1xuICByZXR1cm4gY3VzdG9tUmVmKCh0cmFjaywgdHJpZ2dlcikgPT4ge1xuICAgIGxldCB2YWx1ZSA9IHRvVmFsdWUoZGVmYXVsdFZhbHVlKTtcbiAgICBsZXQgdGltZXI7XG4gICAgY29uc3QgcmVzZXRBZnRlciA9ICgpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdmFsdWUgPSB0b1ZhbHVlKGRlZmF1bHRWYWx1ZSk7XG4gICAgICB0cmlnZ2VyKCk7XG4gICAgfSwgdG9WYWx1ZShhZnRlck1zKSk7XG4gICAgdHJ5T25TY29wZURpc3Bvc2UoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0KCkge1xuICAgICAgICB0cmFjaygpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIHRyaWdnZXIoKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgdGltZXIgPSByZXNldEFmdGVyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZURlYm91bmNlRm4oZm4sIG1zID0gMjAwLCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIGNyZWF0ZUZpbHRlcldyYXBwZXIoXG4gICAgZGVib3VuY2VGaWx0ZXIobXMsIG9wdGlvbnMpLFxuICAgIGZuXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlZkRlYm91bmNlZCh2YWx1ZSwgbXMgPSAyMDAsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBkZWJvdW5jZWQgPSByZWYodmFsdWUudmFsdWUpO1xuICBjb25zdCB1cGRhdGVyID0gdXNlRGVib3VuY2VGbigoKSA9PiB7XG4gICAgZGVib3VuY2VkLnZhbHVlID0gdmFsdWUudmFsdWU7XG4gIH0sIG1zLCBvcHRpb25zKTtcbiAgd2F0Y2godmFsdWUsICgpID0+IHVwZGF0ZXIoKSk7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbmZ1bmN0aW9uIHJlZkRlZmF1bHQoc291cmNlLCBkZWZhdWx0VmFsdWUpIHtcbiAgcmV0dXJuIGNvbXB1dGVkKHtcbiAgICBnZXQoKSB7XG4gICAgICB2YXIgX2E7XG4gICAgICByZXR1cm4gKF9hID0gc291cmNlLnZhbHVlKSAhPSBudWxsID8gX2EgOiBkZWZhdWx0VmFsdWU7XG4gICAgfSxcbiAgICBzZXQodmFsdWUpIHtcbiAgICAgIHNvdXJjZS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZVRocm90dGxlRm4oZm4sIG1zID0gMjAwLCB0cmFpbGluZyA9IGZhbHNlLCBsZWFkaW5nID0gdHJ1ZSwgcmVqZWN0T25DYW5jZWwgPSBmYWxzZSkge1xuICByZXR1cm4gY3JlYXRlRmlsdGVyV3JhcHBlcihcbiAgICB0aHJvdHRsZUZpbHRlcihtcywgdHJhaWxpbmcsIGxlYWRpbmcsIHJlamVjdE9uQ2FuY2VsKSxcbiAgICBmblxuICApO1xufVxuXG5mdW5jdGlvbiByZWZUaHJvdHRsZWQodmFsdWUsIGRlbGF5ID0gMjAwLCB0cmFpbGluZyA9IHRydWUsIGxlYWRpbmcgPSB0cnVlKSB7XG4gIGlmIChkZWxheSA8PSAwKVxuICAgIHJldHVybiB2YWx1ZTtcbiAgY29uc3QgdGhyb3R0bGVkID0gcmVmKHZhbHVlLnZhbHVlKTtcbiAgY29uc3QgdXBkYXRlciA9IHVzZVRocm90dGxlRm4oKCkgPT4ge1xuICAgIHRocm90dGxlZC52YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICB9LCBkZWxheSwgdHJhaWxpbmcsIGxlYWRpbmcpO1xuICB3YXRjaCh2YWx1ZSwgKCkgPT4gdXBkYXRlcigpKTtcbiAgcmV0dXJuIHRocm90dGxlZDtcbn1cblxuZnVuY3Rpb24gcmVmV2l0aENvbnRyb2woaW5pdGlhbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzb3VyY2UgPSBpbml0aWFsO1xuICBsZXQgdHJhY2s7XG4gIGxldCB0cmlnZ2VyO1xuICBjb25zdCByZWYgPSBjdXN0b21SZWYoKF90cmFjaywgX3RyaWdnZXIpID0+IHtcbiAgICB0cmFjayA9IF90cmFjaztcbiAgICB0cmlnZ2VyID0gX3RyaWdnZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGdldCgpO1xuICAgICAgfSxcbiAgICAgIHNldCh2KSB7XG4gICAgICAgIHNldCh2KTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgZnVuY3Rpb24gZ2V0KHRyYWNraW5nID0gdHJ1ZSkge1xuICAgIGlmICh0cmFja2luZylcbiAgICAgIHRyYWNrKCk7XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuICBmdW5jdGlvbiBzZXQodmFsdWUsIHRyaWdnZXJpbmcgPSB0cnVlKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBpZiAodmFsdWUgPT09IHNvdXJjZSlcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBvbGQgPSBzb3VyY2U7XG4gICAgaWYgKCgoX2EgPSBvcHRpb25zLm9uQmVmb3JlQ2hhbmdlKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChvcHRpb25zLCB2YWx1ZSwgb2xkKSkgPT09IGZhbHNlKVxuICAgICAgcmV0dXJuO1xuICAgIHNvdXJjZSA9IHZhbHVlO1xuICAgIChfYiA9IG9wdGlvbnMub25DaGFuZ2VkKSA9PSBudWxsID8gdm9pZCAwIDogX2IuY2FsbChvcHRpb25zLCB2YWx1ZSwgb2xkKTtcbiAgICBpZiAodHJpZ2dlcmluZylcbiAgICAgIHRyaWdnZXIoKTtcbiAgfVxuICBjb25zdCB1bnRyYWNrZWRHZXQgPSAoKSA9PiBnZXQoZmFsc2UpO1xuICBjb25zdCBzaWxlbnRTZXQgPSAodikgPT4gc2V0KHYsIGZhbHNlKTtcbiAgY29uc3QgcGVlayA9ICgpID0+IGdldChmYWxzZSk7XG4gIGNvbnN0IGxheSA9ICh2KSA9PiBzZXQodiwgZmFsc2UpO1xuICByZXR1cm4gZXh0ZW5kUmVmKFxuICAgIHJlZixcbiAgICB7XG4gICAgICBnZXQsXG4gICAgICBzZXQsXG4gICAgICB1bnRyYWNrZWRHZXQsXG4gICAgICBzaWxlbnRTZXQsXG4gICAgICBwZWVrLFxuICAgICAgbGF5XG4gICAgfSxcbiAgICB7IGVudW1lcmFibGU6IHRydWUgfVxuICApO1xufVxuY29uc3QgY29udHJvbGxlZFJlZiA9IHJlZldpdGhDb250cm9sO1xuXG5mdW5jdGlvbiBzZXQoLi4uYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICBjb25zdCBbcmVmLCB2YWx1ZV0gPSBhcmdzO1xuICAgIHJlZi52YWx1ZSA9IHZhbHVlO1xuICB9XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgIGlmIChpc1Z1ZTIpIHtcbiAgICAgIHNldCQxKC4uLmFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBbdGFyZ2V0LCBrZXksIHZhbHVlXSA9IGFyZ3M7XG4gICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB3YXRjaFdpdGhGaWx0ZXIoc291cmNlLCBjYiwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBldmVudEZpbHRlciA9IGJ5cGFzc0ZpbHRlcixcbiAgICAuLi53YXRjaE9wdGlvbnNcbiAgfSA9IG9wdGlvbnM7XG4gIHJldHVybiB3YXRjaChcbiAgICBzb3VyY2UsXG4gICAgY3JlYXRlRmlsdGVyV3JhcHBlcihcbiAgICAgIGV2ZW50RmlsdGVyLFxuICAgICAgY2JcbiAgICApLFxuICAgIHdhdGNoT3B0aW9uc1xuICApO1xufVxuXG5mdW5jdGlvbiB3YXRjaFBhdXNhYmxlKHNvdXJjZSwgY2IsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgZXZlbnRGaWx0ZXI6IGZpbHRlcixcbiAgICAuLi53YXRjaE9wdGlvbnNcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHsgZXZlbnRGaWx0ZXIsIHBhdXNlLCByZXN1bWUsIGlzQWN0aXZlIH0gPSBwYXVzYWJsZUZpbHRlcihmaWx0ZXIpO1xuICBjb25zdCBzdG9wID0gd2F0Y2hXaXRoRmlsdGVyKFxuICAgIHNvdXJjZSxcbiAgICBjYixcbiAgICB7XG4gICAgICAuLi53YXRjaE9wdGlvbnMsXG4gICAgICBldmVudEZpbHRlclxuICAgIH1cbiAgKTtcbiAgcmV0dXJuIHsgc3RvcCwgcGF1c2UsIHJlc3VtZSwgaXNBY3RpdmUgfTtcbn1cblxuZnVuY3Rpb24gc3luY1JlZihsZWZ0LCByaWdodCwgLi4uW29wdGlvbnNdKSB7XG4gIGNvbnN0IHtcbiAgICBmbHVzaCA9IFwic3luY1wiLFxuICAgIGRlZXAgPSBmYWxzZSxcbiAgICBpbW1lZGlhdGUgPSB0cnVlLFxuICAgIGRpcmVjdGlvbiA9IFwiYm90aFwiLFxuICAgIHRyYW5zZm9ybSA9IHt9XG4gIH0gPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCB3YXRjaGVycyA9IFtdO1xuICBjb25zdCB0cmFuc2Zvcm1MVFIgPSBcImx0clwiIGluIHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0ubHRyIHx8ICgodikgPT4gdik7XG4gIGNvbnN0IHRyYW5zZm9ybVJUTCA9IFwicnRsXCIgaW4gdHJhbnNmb3JtICYmIHRyYW5zZm9ybS5ydGwgfHwgKCh2KSA9PiB2KTtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJib3RoXCIgfHwgZGlyZWN0aW9uID09PSBcImx0clwiKSB7XG4gICAgd2F0Y2hlcnMucHVzaCh3YXRjaFBhdXNhYmxlKFxuICAgICAgbGVmdCxcbiAgICAgIChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICB3YXRjaGVycy5mb3JFYWNoKCh3KSA9PiB3LnBhdXNlKCkpO1xuICAgICAgICByaWdodC52YWx1ZSA9IHRyYW5zZm9ybUxUUihuZXdWYWx1ZSk7XG4gICAgICAgIHdhdGNoZXJzLmZvckVhY2goKHcpID0+IHcucmVzdW1lKCkpO1xuICAgICAgfSxcbiAgICAgIHsgZmx1c2gsIGRlZXAsIGltbWVkaWF0ZSB9XG4gICAgKSk7XG4gIH1cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJib3RoXCIgfHwgZGlyZWN0aW9uID09PSBcInJ0bFwiKSB7XG4gICAgd2F0Y2hlcnMucHVzaCh3YXRjaFBhdXNhYmxlKFxuICAgICAgcmlnaHQsXG4gICAgICAobmV3VmFsdWUpID0+IHtcbiAgICAgICAgd2F0Y2hlcnMuZm9yRWFjaCgodykgPT4gdy5wYXVzZSgpKTtcbiAgICAgICAgbGVmdC52YWx1ZSA9IHRyYW5zZm9ybVJUTChuZXdWYWx1ZSk7XG4gICAgICAgIHdhdGNoZXJzLmZvckVhY2goKHcpID0+IHcucmVzdW1lKCkpO1xuICAgICAgfSxcbiAgICAgIHsgZmx1c2gsIGRlZXAsIGltbWVkaWF0ZSB9XG4gICAgKSk7XG4gIH1cbiAgY29uc3Qgc3RvcCA9ICgpID0+IHtcbiAgICB3YXRjaGVycy5mb3JFYWNoKCh3KSA9PiB3LnN0b3AoKSk7XG4gIH07XG4gIHJldHVybiBzdG9wO1xufVxuXG5mdW5jdGlvbiBzeW5jUmVmcyhzb3VyY2UsIHRhcmdldHMsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgZmx1c2ggPSBcInN5bmNcIixcbiAgICBkZWVwID0gZmFsc2UsXG4gICAgaW1tZWRpYXRlID0gdHJ1ZVxuICB9ID0gb3B0aW9ucztcbiAgaWYgKCFBcnJheS5pc0FycmF5KHRhcmdldHMpKVxuICAgIHRhcmdldHMgPSBbdGFyZ2V0c107XG4gIHJldHVybiB3YXRjaChcbiAgICBzb3VyY2UsXG4gICAgKG5ld1ZhbHVlKSA9PiB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnZhbHVlID0gbmV3VmFsdWUpLFxuICAgIHsgZmx1c2gsIGRlZXAsIGltbWVkaWF0ZSB9XG4gICk7XG59XG5cbmZ1bmN0aW9uIHRvUmVmcyhvYmplY3RSZWYsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoIWlzUmVmKG9iamVjdFJlZikpXG4gICAgcmV0dXJuIHRvUmVmcyQxKG9iamVjdFJlZik7XG4gIGNvbnN0IHJlc3VsdCA9IEFycmF5LmlzQXJyYXkob2JqZWN0UmVmLnZhbHVlKSA/IEFycmF5LmZyb20oeyBsZW5ndGg6IG9iamVjdFJlZi52YWx1ZS5sZW5ndGggfSkgOiB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0UmVmLnZhbHVlKSB7XG4gICAgcmVzdWx0W2tleV0gPSBjdXN0b21SZWYoKCkgPT4gKHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdFJlZi52YWx1ZVtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldCh2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgcmVwbGFjZVJlZiA9IChfYSA9IHRvVmFsdWUob3B0aW9ucy5yZXBsYWNlUmVmKSkgIT0gbnVsbCA/IF9hIDogdHJ1ZTtcbiAgICAgICAgaWYgKHJlcGxhY2VSZWYpIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3RSZWYudmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBjb3B5ID0gWy4uLm9iamVjdFJlZi52YWx1ZV07XG4gICAgICAgICAgICBjb3B5W2tleV0gPSB2O1xuICAgICAgICAgICAgb2JqZWN0UmVmLnZhbHVlID0gY29weTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV3T2JqZWN0ID0geyAuLi5vYmplY3RSZWYudmFsdWUsIFtrZXldOiB2IH07XG4gICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YobmV3T2JqZWN0LCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0UmVmLnZhbHVlKSk7XG4gICAgICAgICAgICBvYmplY3RSZWYudmFsdWUgPSBuZXdPYmplY3Q7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9iamVjdFJlZi52YWx1ZVtrZXldID0gdjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB0cnlPbkJlZm9yZU1vdW50KGZuLCBzeW5jID0gdHJ1ZSwgdGFyZ2V0KSB7XG4gIGNvbnN0IGluc3RhbmNlID0gZ2V0TGlmZUN5Y2xlVGFyZ2V0KHRhcmdldCk7XG4gIGlmIChpbnN0YW5jZSlcbiAgICBvbkJlZm9yZU1vdW50KGZuLCB0YXJnZXQpO1xuICBlbHNlIGlmIChzeW5jKVxuICAgIGZuKCk7XG4gIGVsc2VcbiAgICBuZXh0VGljayhmbik7XG59XG5cbmZ1bmN0aW9uIHRyeU9uQmVmb3JlVW5tb3VudChmbiwgdGFyZ2V0KSB7XG4gIGNvbnN0IGluc3RhbmNlID0gZ2V0TGlmZUN5Y2xlVGFyZ2V0KHRhcmdldCk7XG4gIGlmIChpbnN0YW5jZSlcbiAgICBvbkJlZm9yZVVubW91bnQoZm4sIHRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIHRyeU9uTW91bnRlZChmbiwgc3luYyA9IHRydWUsIHRhcmdldCkge1xuICBjb25zdCBpbnN0YW5jZSA9IGdldExpZmVDeWNsZVRhcmdldCgpO1xuICBpZiAoaW5zdGFuY2UpXG4gICAgb25Nb3VudGVkKGZuLCB0YXJnZXQpO1xuICBlbHNlIGlmIChzeW5jKVxuICAgIGZuKCk7XG4gIGVsc2VcbiAgICBuZXh0VGljayhmbik7XG59XG5cbmZ1bmN0aW9uIHRyeU9uVW5tb3VudGVkKGZuLCB0YXJnZXQpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBnZXRMaWZlQ3ljbGVUYXJnZXQodGFyZ2V0KTtcbiAgaWYgKGluc3RhbmNlKVxuICAgIG9uVW5tb3VudGVkKGZuLCB0YXJnZXQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbnRpbChyLCBpc05vdCA9IGZhbHNlKSB7XG4gIGZ1bmN0aW9uIHRvTWF0Y2goY29uZGl0aW9uLCB7IGZsdXNoID0gXCJzeW5jXCIsIGRlZXAgPSBmYWxzZSwgdGltZW91dCwgdGhyb3dPblRpbWVvdXQgfSA9IHt9KSB7XG4gICAgbGV0IHN0b3AgPSBudWxsO1xuICAgIGNvbnN0IHdhdGNoZXIgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc3RvcCA9IHdhdGNoKFxuICAgICAgICByLFxuICAgICAgICAodikgPT4ge1xuICAgICAgICAgIGlmIChjb25kaXRpb24odikgIT09IGlzTm90KSB7XG4gICAgICAgICAgICBzdG9wID09IG51bGwgPyB2b2lkIDAgOiBzdG9wKCk7XG4gICAgICAgICAgICByZXNvbHZlKHYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZsdXNoLFxuICAgICAgICAgIGRlZXAsXG4gICAgICAgICAgaW1tZWRpYXRlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBbd2F0Y2hlcl07XG4gICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgcHJvbWlzZVRpbWVvdXQodGltZW91dCwgdGhyb3dPblRpbWVvdXQpLnRoZW4oKCkgPT4gdG9WYWx1ZShyKSkuZmluYWxseSgoKSA9PiBzdG9wID09IG51bGwgPyB2b2lkIDAgOiBzdG9wKCkpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcbiAgfVxuICBmdW5jdGlvbiB0b0JlKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgaWYgKCFpc1JlZih2YWx1ZSkpXG4gICAgICByZXR1cm4gdG9NYXRjaCgodikgPT4gdiA9PT0gdmFsdWUsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHsgZmx1c2ggPSBcInN5bmNcIiwgZGVlcCA9IGZhbHNlLCB0aW1lb3V0LCB0aHJvd09uVGltZW91dCB9ID0gb3B0aW9ucyAhPSBudWxsID8gb3B0aW9ucyA6IHt9O1xuICAgIGxldCBzdG9wID0gbnVsbDtcbiAgICBjb25zdCB3YXRjaGVyID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHN0b3AgPSB3YXRjaChcbiAgICAgICAgW3IsIHZhbHVlXSxcbiAgICAgICAgKFt2MSwgdjJdKSA9PiB7XG4gICAgICAgICAgaWYgKGlzTm90ICE9PSAodjEgPT09IHYyKSkge1xuICAgICAgICAgICAgc3RvcCA9PSBudWxsID8gdm9pZCAwIDogc3RvcCgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh2MSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmx1c2gsXG4gICAgICAgICAgZGVlcCxcbiAgICAgICAgICBpbW1lZGlhdGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBwcm9taXNlcyA9IFt3YXRjaGVyXTtcbiAgICBpZiAodGltZW91dCAhPSBudWxsKSB7XG4gICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICBwcm9taXNlVGltZW91dCh0aW1lb3V0LCB0aHJvd09uVGltZW91dCkudGhlbigoKSA9PiB0b1ZhbHVlKHIpKS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBzdG9wID09IG51bGwgPyB2b2lkIDAgOiBzdG9wKCk7XG4gICAgICAgICAgcmV0dXJuIHRvVmFsdWUocik7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcbiAgfVxuICBmdW5jdGlvbiB0b0JlVHJ1dGh5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9NYXRjaCgodikgPT4gQm9vbGVhbih2KSwgb3B0aW9ucyk7XG4gIH1cbiAgZnVuY3Rpb24gdG9CZU51bGwob3B0aW9ucykge1xuICAgIHJldHVybiB0b0JlKG51bGwsIG9wdGlvbnMpO1xuICB9XG4gIGZ1bmN0aW9uIHRvQmVVbmRlZmluZWQob3B0aW9ucykge1xuICAgIHJldHVybiB0b0JlKHZvaWQgMCwgb3B0aW9ucyk7XG4gIH1cbiAgZnVuY3Rpb24gdG9CZU5hTihvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRvTWF0Y2goTnVtYmVyLmlzTmFOLCBvcHRpb25zKTtcbiAgfVxuICBmdW5jdGlvbiB0b0NvbnRhaW5zKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRvTWF0Y2goKHYpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuZnJvbSh2KTtcbiAgICAgIHJldHVybiBhcnJheS5pbmNsdWRlcyh2YWx1ZSkgfHwgYXJyYXkuaW5jbHVkZXModG9WYWx1ZSh2YWx1ZSkpO1xuICAgIH0sIG9wdGlvbnMpO1xuICB9XG4gIGZ1bmN0aW9uIGNoYW5nZWQob3B0aW9ucykge1xuICAgIHJldHVybiBjaGFuZ2VkVGltZXMoMSwgb3B0aW9ucyk7XG4gIH1cbiAgZnVuY3Rpb24gY2hhbmdlZFRpbWVzKG4gPSAxLCBvcHRpb25zKSB7XG4gICAgbGV0IGNvdW50ID0gLTE7XG4gICAgcmV0dXJuIHRvTWF0Y2goKCkgPT4ge1xuICAgICAgY291bnQgKz0gMTtcbiAgICAgIHJldHVybiBjb3VudCA+PSBuO1xuICAgIH0sIG9wdGlvbnMpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHRvVmFsdWUocikpKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgICB0b01hdGNoLFxuICAgICAgdG9Db250YWlucyxcbiAgICAgIGNoYW5nZWQsXG4gICAgICBjaGFuZ2VkVGltZXMsXG4gICAgICBnZXQgbm90KCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlVW50aWwociwgIWlzTm90KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgIHRvTWF0Y2gsXG4gICAgICB0b0JlLFxuICAgICAgdG9CZVRydXRoeSxcbiAgICAgIHRvQmVOdWxsLFxuICAgICAgdG9CZU5hTixcbiAgICAgIHRvQmVVbmRlZmluZWQsXG4gICAgICBjaGFuZ2VkLFxuICAgICAgY2hhbmdlZFRpbWVzLFxuICAgICAgZ2V0IG5vdCgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVVudGlsKHIsICFpc05vdCk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cbn1cbmZ1bmN0aW9uIHVudGlsKHIpIHtcbiAgcmV0dXJuIGNyZWF0ZVVudGlsKHIpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyYXRvcih2YWx1ZSwgb3RoVmFsKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoVmFsO1xufVxuZnVuY3Rpb24gdXNlQXJyYXlEaWZmZXJlbmNlKC4uLmFyZ3MpIHtcbiAgdmFyIF9hO1xuICBjb25zdCBsaXN0ID0gYXJnc1swXTtcbiAgY29uc3QgdmFsdWVzID0gYXJnc1sxXTtcbiAgbGV0IGNvbXBhcmVGbiA9IChfYSA9IGFyZ3NbMl0pICE9IG51bGwgPyBfYSA6IGRlZmF1bHRDb21wYXJhdG9yO1xuICBpZiAodHlwZW9mIGNvbXBhcmVGbiA9PT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IGtleSA9IGNvbXBhcmVGbjtcbiAgICBjb21wYXJlRm4gPSAodmFsdWUsIG90aFZhbCkgPT4gdmFsdWVba2V5XSA9PT0gb3RoVmFsW2tleV07XG4gIH1cbiAgcmV0dXJuIGNvbXB1dGVkKCgpID0+IHRvVmFsdWUobGlzdCkuZmlsdGVyKCh4KSA9PiB0b1ZhbHVlKHZhbHVlcykuZmluZEluZGV4KCh5KSA9PiBjb21wYXJlRm4oeCwgeSkpID09PSAtMSkpO1xufVxuXG5mdW5jdGlvbiB1c2VBcnJheUV2ZXJ5KGxpc3QsIGZuKSB7XG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiB0b1ZhbHVlKGxpc3QpLmV2ZXJ5KChlbGVtZW50LCBpbmRleCwgYXJyYXkpID0+IGZuKHRvVmFsdWUoZWxlbWVudCksIGluZGV4LCBhcnJheSkpKTtcbn1cblxuZnVuY3Rpb24gdXNlQXJyYXlGaWx0ZXIobGlzdCwgZm4pIHtcbiAgcmV0dXJuIGNvbXB1dGVkKCgpID0+IHRvVmFsdWUobGlzdCkubWFwKChpKSA9PiB0b1ZhbHVlKGkpKS5maWx0ZXIoZm4pKTtcbn1cblxuZnVuY3Rpb24gdXNlQXJyYXlGaW5kKGxpc3QsIGZuKSB7XG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiB0b1ZhbHVlKFxuICAgIHRvVmFsdWUobGlzdCkuZmluZCgoZWxlbWVudCwgaW5kZXgsIGFycmF5KSA9PiBmbih0b1ZhbHVlKGVsZW1lbnQpLCBpbmRleCwgYXJyYXkpKVxuICApKTtcbn1cblxuZnVuY3Rpb24gdXNlQXJyYXlGaW5kSW5kZXgobGlzdCwgZm4pIHtcbiAgcmV0dXJuIGNvbXB1dGVkKCgpID0+IHRvVmFsdWUobGlzdCkuZmluZEluZGV4KChlbGVtZW50LCBpbmRleCwgYXJyYXkpID0+IGZuKHRvVmFsdWUoZWxlbWVudCksIGluZGV4LCBhcnJheSkpKTtcbn1cblxuZnVuY3Rpb24gZmluZExhc3QoYXJyLCBjYikge1xuICBsZXQgaW5kZXggPSBhcnIubGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSA+IDApIHtcbiAgICBpZiAoY2IoYXJyW2luZGV4XSwgaW5kZXgsIGFycikpXG4gICAgICByZXR1cm4gYXJyW2luZGV4XTtcbiAgfVxuICByZXR1cm4gdm9pZCAwO1xufVxuZnVuY3Rpb24gdXNlQXJyYXlGaW5kTGFzdChsaXN0LCBmbikge1xuICByZXR1cm4gY29tcHV0ZWQoKCkgPT4gdG9WYWx1ZShcbiAgICAhQXJyYXkucHJvdG90eXBlLmZpbmRMYXN0ID8gZmluZExhc3QodG9WYWx1ZShsaXN0KSwgKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4gZm4odG9WYWx1ZShlbGVtZW50KSwgaW5kZXgsIGFycmF5KSkgOiB0b1ZhbHVlKGxpc3QpLmZpbmRMYXN0KChlbGVtZW50LCBpbmRleCwgYXJyYXkpID0+IGZuKHRvVmFsdWUoZWxlbWVudCksIGluZGV4LCBhcnJheSkpXG4gICkpO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5SW5jbHVkZXNPcHRpb25zKG9iaikge1xuICByZXR1cm4gaXNPYmplY3Qob2JqKSAmJiBjb250YWluc1Byb3Aob2JqLCBcImZvcm1JbmRleFwiLCBcImNvbXBhcmF0b3JcIik7XG59XG5mdW5jdGlvbiB1c2VBcnJheUluY2x1ZGVzKC4uLmFyZ3MpIHtcbiAgdmFyIF9hO1xuICBjb25zdCBsaXN0ID0gYXJnc1swXTtcbiAgY29uc3QgdmFsdWUgPSBhcmdzWzFdO1xuICBsZXQgY29tcGFyYXRvciA9IGFyZ3NbMl07XG4gIGxldCBmb3JtSW5kZXggPSAwO1xuICBpZiAoaXNBcnJheUluY2x1ZGVzT3B0aW9ucyhjb21wYXJhdG9yKSkge1xuICAgIGZvcm1JbmRleCA9IChfYSA9IGNvbXBhcmF0b3IuZnJvbUluZGV4KSAhPSBudWxsID8gX2EgOiAwO1xuICAgIGNvbXBhcmF0b3IgPSBjb21wYXJhdG9yLmNvbXBhcmF0b3I7XG4gIH1cbiAgaWYgKHR5cGVvZiBjb21wYXJhdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgY29uc3Qga2V5ID0gY29tcGFyYXRvcjtcbiAgICBjb21wYXJhdG9yID0gKGVsZW1lbnQsIHZhbHVlMikgPT4gZWxlbWVudFtrZXldID09PSB0b1ZhbHVlKHZhbHVlMik7XG4gIH1cbiAgY29tcGFyYXRvciA9IGNvbXBhcmF0b3IgIT0gbnVsbCA/IGNvbXBhcmF0b3IgOiAoZWxlbWVudCwgdmFsdWUyKSA9PiBlbGVtZW50ID09PSB0b1ZhbHVlKHZhbHVlMik7XG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiB0b1ZhbHVlKGxpc3QpLnNsaWNlKGZvcm1JbmRleCkuc29tZSgoZWxlbWVudCwgaW5kZXgsIGFycmF5KSA9PiBjb21wYXJhdG9yKFxuICAgIHRvVmFsdWUoZWxlbWVudCksXG4gICAgdG9WYWx1ZSh2YWx1ZSksXG4gICAgaW5kZXgsXG4gICAgdG9WYWx1ZShhcnJheSlcbiAgKSkpO1xufVxuXG5mdW5jdGlvbiB1c2VBcnJheUpvaW4obGlzdCwgc2VwYXJhdG9yKSB7XG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiB0b1ZhbHVlKGxpc3QpLm1hcCgoaSkgPT4gdG9WYWx1ZShpKSkuam9pbih0b1ZhbHVlKHNlcGFyYXRvcikpKTtcbn1cblxuZnVuY3Rpb24gdXNlQXJyYXlNYXAobGlzdCwgZm4pIHtcbiAgcmV0dXJuIGNvbXB1dGVkKCgpID0+IHRvVmFsdWUobGlzdCkubWFwKChpKSA9PiB0b1ZhbHVlKGkpKS5tYXAoZm4pKTtcbn1cblxuZnVuY3Rpb24gdXNlQXJyYXlSZWR1Y2UobGlzdCwgcmVkdWNlciwgLi4uYXJncykge1xuICBjb25zdCByZWR1Y2VDYWxsYmFjayA9IChzdW0sIHZhbHVlLCBpbmRleCkgPT4gcmVkdWNlcih0b1ZhbHVlKHN1bSksIHRvVmFsdWUodmFsdWUpLCBpbmRleCk7XG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0b1ZhbHVlKGxpc3QpO1xuICAgIHJldHVybiBhcmdzLmxlbmd0aCA/IHJlc29sdmVkLnJlZHVjZShyZWR1Y2VDYWxsYmFjaywgdG9WYWx1ZShhcmdzWzBdKSkgOiByZXNvbHZlZC5yZWR1Y2UocmVkdWNlQ2FsbGJhY2spO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlQXJyYXlTb21lKGxpc3QsIGZuKSB7XG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiB0b1ZhbHVlKGxpc3QpLnNvbWUoKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4gZm4odG9WYWx1ZShlbGVtZW50KSwgaW5kZXgsIGFycmF5KSkpO1xufVxuXG5mdW5jdGlvbiB1bmlxKGFycmF5KSB7XG4gIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyYXkpKTtcbn1cbmZ1bmN0aW9uIHVuaXF1ZUVsZW1lbnRzQnkoYXJyYXksIGZuKSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFjYywgdikgPT4ge1xuICAgIGlmICghYWNjLnNvbWUoKHgpID0+IGZuKHYsIHgsIGFycmF5KSkpXG4gICAgICBhY2MucHVzaCh2KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG59XG5mdW5jdGlvbiB1c2VBcnJheVVuaXF1ZShsaXN0LCBjb21wYXJlRm4pIHtcbiAgcmV0dXJuIGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZExpc3QgPSB0b1ZhbHVlKGxpc3QpLm1hcCgoZWxlbWVudCkgPT4gdG9WYWx1ZShlbGVtZW50KSk7XG4gICAgcmV0dXJuIGNvbXBhcmVGbiA/IHVuaXF1ZUVsZW1lbnRzQnkocmVzb2x2ZWRMaXN0LCBjb21wYXJlRm4pIDogdW5pcShyZXNvbHZlZExpc3QpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlQ291bnRlcihpbml0aWFsVmFsdWUgPSAwLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IF9pbml0aWFsVmFsdWUgPSB1bnJlZihpbml0aWFsVmFsdWUpO1xuICBjb25zdCBjb3VudCA9IHJlZihpbml0aWFsVmFsdWUpO1xuICBjb25zdCB7XG4gICAgbWF4ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgIG1pbiA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgaW5jID0gKGRlbHRhID0gMSkgPT4gY291bnQudmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbihtYXgsIGNvdW50LnZhbHVlICsgZGVsdGEpLCBtaW4pO1xuICBjb25zdCBkZWMgPSAoZGVsdGEgPSAxKSA9PiBjb3VudC52YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KG1pbiwgY291bnQudmFsdWUgLSBkZWx0YSksIG1heCk7XG4gIGNvbnN0IGdldCA9ICgpID0+IGNvdW50LnZhbHVlO1xuICBjb25zdCBzZXQgPSAodmFsKSA9PiBjb3VudC52YWx1ZSA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKTtcbiAgY29uc3QgcmVzZXQgPSAodmFsID0gX2luaXRpYWxWYWx1ZSkgPT4ge1xuICAgIF9pbml0aWFsVmFsdWUgPSB2YWw7XG4gICAgcmV0dXJuIHNldCh2YWwpO1xuICB9O1xuICByZXR1cm4geyBjb3VudCwgaW5jLCBkZWMsIGdldCwgc2V0LCByZXNldCB9O1xufVxuXG5jb25zdCBSRUdFWF9QQVJTRSA9IC9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW1RcXHNdKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kL2k7XG5jb25zdCBSRUdFWF9GT1JNQVQgPSAvW1lNREhobXNdb3xcXFsoW15cXF1dKylcXF18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXsxLDJ9fEF7MSwyfXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZztcbmZ1bmN0aW9uIGRlZmF1bHRNZXJpZGllbShob3VycywgbWludXRlcywgaXNMb3dlcmNhc2UsIGhhc1BlcmlvZCkge1xuICBsZXQgbSA9IGhvdXJzIDwgMTIgPyBcIkFNXCIgOiBcIlBNXCI7XG4gIGlmIChoYXNQZXJpb2QpXG4gICAgbSA9IG0uc3BsaXQoXCJcIikucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArPSBgJHtjdXJyfS5gLCBcIlwiKTtcbiAgcmV0dXJuIGlzTG93ZXJjYXNlID8gbS50b0xvd2VyQ2FzZSgpIDogbTtcbn1cbmZ1bmN0aW9uIGZvcm1hdE9yZGluYWwobnVtKSB7XG4gIGNvbnN0IHN1ZmZpeGVzID0gW1widGhcIiwgXCJzdFwiLCBcIm5kXCIsIFwicmRcIl07XG4gIGNvbnN0IHYgPSBudW0gJSAxMDA7XG4gIHJldHVybiBudW0gKyAoc3VmZml4ZXNbKHYgLSAyMCkgJSAxMF0gfHwgc3VmZml4ZXNbdl0gfHwgc3VmZml4ZXNbMF0pO1xufVxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXRTdHIsIG9wdGlvbnMgPSB7fSkge1xuICB2YXIgX2E7XG4gIGNvbnN0IHllYXJzID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgY29uc3QgZGF5cyA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICBjb25zdCBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIGNvbnN0IG1lcmlkaWVtID0gKF9hID0gb3B0aW9ucy5jdXN0b21NZXJpZGllbSkgIT0gbnVsbCA/IF9hIDogZGVmYXVsdE1lcmlkaWVtO1xuICBjb25zdCBtYXRjaGVzID0ge1xuICAgIFlvOiAoKSA9PiBmb3JtYXRPcmRpbmFsKHllYXJzKSxcbiAgICBZWTogKCkgPT4gU3RyaW5nKHllYXJzKS5zbGljZSgtMiksXG4gICAgWVlZWTogKCkgPT4geWVhcnMsXG4gICAgTTogKCkgPT4gbW9udGggKyAxLFxuICAgIE1vOiAoKSA9PiBmb3JtYXRPcmRpbmFsKG1vbnRoICsgMSksXG4gICAgTU06ICgpID0+IGAke21vbnRoICsgMX1gLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICBNTU06ICgpID0+IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKG9wdGlvbnMubG9jYWxlcywgeyBtb250aDogXCJzaG9ydFwiIH0pLFxuICAgIE1NTU06ICgpID0+IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKG9wdGlvbnMubG9jYWxlcywgeyBtb250aDogXCJsb25nXCIgfSksXG4gICAgRDogKCkgPT4gU3RyaW5nKGRheXMpLFxuICAgIERvOiAoKSA9PiBmb3JtYXRPcmRpbmFsKGRheXMpLFxuICAgIEREOiAoKSA9PiBgJHtkYXlzfWAucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgIEg6ICgpID0+IFN0cmluZyhob3VycyksXG4gICAgSG86ICgpID0+IGZvcm1hdE9yZGluYWwoaG91cnMpLFxuICAgIEhIOiAoKSA9PiBgJHtob3Vyc31gLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICBoOiAoKSA9PiBgJHtob3VycyAlIDEyIHx8IDEyfWAucGFkU3RhcnQoMSwgXCIwXCIpLFxuICAgIGhvOiAoKSA9PiBmb3JtYXRPcmRpbmFsKGhvdXJzICUgMTIgfHwgMTIpLFxuICAgIGhoOiAoKSA9PiBgJHtob3VycyAlIDEyIHx8IDEyfWAucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgIG06ICgpID0+IFN0cmluZyhtaW51dGVzKSxcbiAgICBtbzogKCkgPT4gZm9ybWF0T3JkaW5hbChtaW51dGVzKSxcbiAgICBtbTogKCkgPT4gYCR7bWludXRlc31gLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICBzOiAoKSA9PiBTdHJpbmcoc2Vjb25kcyksXG4gICAgc286ICgpID0+IGZvcm1hdE9yZGluYWwoc2Vjb25kcyksXG4gICAgc3M6ICgpID0+IGAke3NlY29uZHN9YC5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgU1NTOiAoKSA9PiBgJHttaWxsaXNlY29uZHN9YC5wYWRTdGFydCgzLCBcIjBcIiksXG4gICAgZDogKCkgPT4gZGF5LFxuICAgIGRkOiAoKSA9PiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhvcHRpb25zLmxvY2FsZXMsIHsgd2Vla2RheTogXCJuYXJyb3dcIiB9KSxcbiAgICBkZGQ6ICgpID0+IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKG9wdGlvbnMubG9jYWxlcywgeyB3ZWVrZGF5OiBcInNob3J0XCIgfSksXG4gICAgZGRkZDogKCkgPT4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcob3B0aW9ucy5sb2NhbGVzLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pLFxuICAgIEE6ICgpID0+IG1lcmlkaWVtKGhvdXJzLCBtaW51dGVzKSxcbiAgICBBQTogKCkgPT4gbWVyaWRpZW0oaG91cnMsIG1pbnV0ZXMsIGZhbHNlLCB0cnVlKSxcbiAgICBhOiAoKSA9PiBtZXJpZGllbShob3VycywgbWludXRlcywgdHJ1ZSksXG4gICAgYWE6ICgpID0+IG1lcmlkaWVtKGhvdXJzLCBtaW51dGVzLCB0cnVlLCB0cnVlKVxuICB9O1xuICByZXR1cm4gZm9ybWF0U3RyLnJlcGxhY2UoUkVHRVhfRk9STUFULCAobWF0Y2gsICQxKSA9PiB7XG4gICAgdmFyIF9hMiwgX2I7XG4gICAgcmV0dXJuIChfYiA9ICQxICE9IG51bGwgPyAkMSA6IChfYTIgPSBtYXRjaGVzW21hdGNoXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5jYWxsKG1hdGNoZXMpKSAhPSBudWxsID8gX2IgOiBtYXRjaDtcbiAgfSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVEYXRlKGRhdGUpIHtcbiAgaWYgKGRhdGUgPT09IG51bGwpXG4gICAgcmV0dXJuIG5ldyBEYXRlKE51bWJlci5OYU4pO1xuICBpZiAoZGF0ZSA9PT0gdm9pZCAwKVxuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKTtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKVxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKTtcbiAgaWYgKHR5cGVvZiBkYXRlID09PSBcInN0cmluZ1wiICYmICEvWiQvaS50ZXN0KGRhdGUpKSB7XG4gICAgY29uc3QgZCA9IGRhdGUubWF0Y2goUkVHRVhfUEFSU0UpO1xuICAgIGlmIChkKSB7XG4gICAgICBjb25zdCBtID0gZFsyXSAtIDEgfHwgMDtcbiAgICAgIGNvbnN0IG1zID0gKGRbN10gfHwgXCIwXCIpLnN1YnN0cmluZygwLCAzKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkWzFdLCBtLCBkWzNdIHx8IDEsIGRbNF0gfHwgMCwgZFs1XSB8fCAwLCBkWzZdIHx8IDAsIG1zKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpO1xufVxuZnVuY3Rpb24gdXNlRGF0ZUZvcm1hdChkYXRlLCBmb3JtYXRTdHIgPSBcIkhIOm1tOnNzXCIsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gY29tcHV0ZWQoKCkgPT4gZm9ybWF0RGF0ZShub3JtYWxpemVEYXRlKHRvVmFsdWUoZGF0ZSkpLCB0b1ZhbHVlKGZvcm1hdFN0ciksIG9wdGlvbnMpKTtcbn1cblxuZnVuY3Rpb24gdXNlSW50ZXJ2YWxGbihjYiwgaW50ZXJ2YWwgPSAxZTMsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgaW1tZWRpYXRlID0gdHJ1ZSxcbiAgICBpbW1lZGlhdGVDYWxsYmFjayA9IGZhbHNlXG4gIH0gPSBvcHRpb25zO1xuICBsZXQgdGltZXIgPSBudWxsO1xuICBjb25zdCBpc0FjdGl2ZSA9IHJlZihmYWxzZSk7XG4gIGZ1bmN0aW9uIGNsZWFuKCkge1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIGlzQWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgY2xlYW4oKTtcbiAgfVxuICBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgY29uc3QgaW50ZXJ2YWxWYWx1ZSA9IHRvVmFsdWUoaW50ZXJ2YWwpO1xuICAgIGlmIChpbnRlcnZhbFZhbHVlIDw9IDApXG4gICAgICByZXR1cm47XG4gICAgaXNBY3RpdmUudmFsdWUgPSB0cnVlO1xuICAgIGlmIChpbW1lZGlhdGVDYWxsYmFjaylcbiAgICAgIGNiKCk7XG4gICAgY2xlYW4oKTtcbiAgICB0aW1lciA9IHNldEludGVydmFsKGNiLCBpbnRlcnZhbFZhbHVlKTtcbiAgfVxuICBpZiAoaW1tZWRpYXRlICYmIGlzQ2xpZW50KVxuICAgIHJlc3VtZSgpO1xuICBpZiAoaXNSZWYoaW50ZXJ2YWwpIHx8IHR5cGVvZiBpbnRlcnZhbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc3Qgc3RvcFdhdGNoID0gd2F0Y2goaW50ZXJ2YWwsICgpID0+IHtcbiAgICAgIGlmIChpc0FjdGl2ZS52YWx1ZSAmJiBpc0NsaWVudClcbiAgICAgICAgcmVzdW1lKCk7XG4gICAgfSk7XG4gICAgdHJ5T25TY29wZURpc3Bvc2Uoc3RvcFdhdGNoKTtcbiAgfVxuICB0cnlPblNjb3BlRGlzcG9zZShwYXVzZSk7XG4gIHJldHVybiB7XG4gICAgaXNBY3RpdmUsXG4gICAgcGF1c2UsXG4gICAgcmVzdW1lXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZUludGVydmFsKGludGVydmFsID0gMWUzLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGNvbnRyb2xzOiBleHBvc2VDb250cm9scyA9IGZhbHNlLFxuICAgIGltbWVkaWF0ZSA9IHRydWUsXG4gICAgY2FsbGJhY2tcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGNvdW50ZXIgPSByZWYoMCk7XG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IGNvdW50ZXIudmFsdWUgKz0gMTtcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgY291bnRlci52YWx1ZSA9IDA7XG4gIH07XG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlSW50ZXJ2YWxGbihcbiAgICBjYWxsYmFjayA/ICgpID0+IHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgICAgY2FsbGJhY2soY291bnRlci52YWx1ZSk7XG4gICAgfSA6IHVwZGF0ZSxcbiAgICBpbnRlcnZhbCxcbiAgICB7IGltbWVkaWF0ZSB9XG4gICk7XG4gIGlmIChleHBvc2VDb250cm9scykge1xuICAgIHJldHVybiB7XG4gICAgICBjb3VudGVyLFxuICAgICAgcmVzZXQsXG4gICAgICAuLi5jb250cm9sc1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlTGFzdENoYW5nZWQoc291cmNlLCBvcHRpb25zID0ge30pIHtcbiAgdmFyIF9hO1xuICBjb25zdCBtcyA9IHJlZigoX2EgPSBvcHRpb25zLmluaXRpYWxWYWx1ZSkgIT0gbnVsbCA/IF9hIDogbnVsbCk7XG4gIHdhdGNoKFxuICAgIHNvdXJjZSxcbiAgICAoKSA9PiBtcy52YWx1ZSA9IHRpbWVzdGFtcCgpLFxuICAgIG9wdGlvbnNcbiAgKTtcbiAgcmV0dXJuIG1zO1xufVxuXG5mdW5jdGlvbiB1c2VUaW1lb3V0Rm4oY2IsIGludGVydmFsLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGltbWVkaWF0ZSA9IHRydWVcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzUGVuZGluZyA9IHJlZihmYWxzZSk7XG4gIGxldCB0aW1lciA9IG51bGw7XG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBpc1BlbmRpbmcudmFsdWUgPSBmYWxzZTtcbiAgICBjbGVhcigpO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0KC4uLmFyZ3MpIHtcbiAgICBjbGVhcigpO1xuICAgIGlzUGVuZGluZy52YWx1ZSA9IHRydWU7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlzUGVuZGluZy52YWx1ZSA9IGZhbHNlO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgY2IoLi4uYXJncyk7XG4gICAgfSwgdG9WYWx1ZShpbnRlcnZhbCkpO1xuICB9XG4gIGlmIChpbW1lZGlhdGUpIHtcbiAgICBpc1BlbmRpbmcudmFsdWUgPSB0cnVlO1xuICAgIGlmIChpc0NsaWVudClcbiAgICAgIHN0YXJ0KCk7XG4gIH1cbiAgdHJ5T25TY29wZURpc3Bvc2Uoc3RvcCk7XG4gIHJldHVybiB7XG4gICAgaXNQZW5kaW5nOiByZWFkb25seShpc1BlbmRpbmcpLFxuICAgIHN0YXJ0LFxuICAgIHN0b3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlVGltZW91dChpbnRlcnZhbCA9IDFlMywgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBjb250cm9sczogZXhwb3NlQ29udHJvbHMgPSBmYWxzZSxcbiAgICBjYWxsYmFja1xuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgY29udHJvbHMgPSB1c2VUaW1lb3V0Rm4oXG4gICAgY2FsbGJhY2sgIT0gbnVsbCA/IGNhbGxiYWNrIDogbm9vcCxcbiAgICBpbnRlcnZhbCxcbiAgICBvcHRpb25zXG4gICk7XG4gIGNvbnN0IHJlYWR5ID0gY29tcHV0ZWQoKCkgPT4gIWNvbnRyb2xzLmlzUGVuZGluZy52YWx1ZSk7XG4gIGlmIChleHBvc2VDb250cm9scykge1xuICAgIHJldHVybiB7XG4gICAgICByZWFkeSxcbiAgICAgIC4uLmNvbnRyb2xzXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVhZHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlVG9OdW1iZXIodmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgbWV0aG9kID0gXCJwYXJzZUZsb2F0XCIsXG4gICAgcmFkaXgsXG4gICAgbmFuVG9aZXJvXG4gIH0gPSBvcHRpb25zO1xuICByZXR1cm4gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGxldCByZXNvbHZlZCA9IHRvVmFsdWUodmFsdWUpO1xuICAgIGlmICh0eXBlb2YgcmVzb2x2ZWQgPT09IFwic3RyaW5nXCIpXG4gICAgICByZXNvbHZlZCA9IE51bWJlclttZXRob2RdKHJlc29sdmVkLCByYWRpeCk7XG4gICAgaWYgKG5hblRvWmVybyAmJiBOdW1iZXIuaXNOYU4ocmVzb2x2ZWQpKVxuICAgICAgcmVzb2x2ZWQgPSAwO1xuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiBgJHt0b1ZhbHVlKHZhbHVlKX1gKTtcbn1cblxuZnVuY3Rpb24gdXNlVG9nZ2xlKGluaXRpYWxWYWx1ZSA9IGZhbHNlLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIHRydXRoeVZhbHVlID0gdHJ1ZSxcbiAgICBmYWxzeVZhbHVlID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHZhbHVlSXNSZWYgPSBpc1JlZihpbml0aWFsVmFsdWUpO1xuICBjb25zdCBfdmFsdWUgPSByZWYoaW5pdGlhbFZhbHVlKTtcbiAgZnVuY3Rpb24gdG9nZ2xlKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIF92YWx1ZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIF92YWx1ZS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHJ1dGh5ID0gdG9WYWx1ZSh0cnV0aHlWYWx1ZSk7XG4gICAgICBfdmFsdWUudmFsdWUgPSBfdmFsdWUudmFsdWUgPT09IHRydXRoeSA/IHRvVmFsdWUoZmFsc3lWYWx1ZSkgOiB0cnV0aHk7XG4gICAgICByZXR1cm4gX3ZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuICBpZiAodmFsdWVJc1JlZilcbiAgICByZXR1cm4gdG9nZ2xlO1xuICBlbHNlXG4gICAgcmV0dXJuIFtfdmFsdWUsIHRvZ2dsZV07XG59XG5cbmZ1bmN0aW9uIHdhdGNoQXJyYXkoc291cmNlLCBjYiwgb3B0aW9ucykge1xuICBsZXQgb2xkTGlzdCA9IChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmltbWVkaWF0ZSkgPyBbXSA6IFsuLi5zb3VyY2UgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IHNvdXJjZSgpIDogQXJyYXkuaXNBcnJheShzb3VyY2UpID8gc291cmNlIDogdG9WYWx1ZShzb3VyY2UpXTtcbiAgcmV0dXJuIHdhdGNoKHNvdXJjZSwgKG5ld0xpc3QsIF8sIG9uQ2xlYW51cCkgPT4ge1xuICAgIGNvbnN0IG9sZExpc3RSZW1haW5zID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogb2xkTGlzdC5sZW5ndGggfSk7XG4gICAgY29uc3QgYWRkZWQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IG9iaiBvZiBuZXdMaXN0KSB7XG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIW9sZExpc3RSZW1haW5zW2ldICYmIG9iaiA9PT0gb2xkTGlzdFtpXSkge1xuICAgICAgICAgIG9sZExpc3RSZW1haW5zW2ldID0gdHJ1ZTtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghZm91bmQpXG4gICAgICAgIGFkZGVkLnB1c2gob2JqKTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlZCA9IG9sZExpc3QuZmlsdGVyKChfMiwgaSkgPT4gIW9sZExpc3RSZW1haW5zW2ldKTtcbiAgICBjYihuZXdMaXN0LCBvbGRMaXN0LCBhZGRlZCwgcmVtb3ZlZCwgb25DbGVhbnVwKTtcbiAgICBvbGRMaXN0ID0gWy4uLm5ld0xpc3RdO1xuICB9LCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gd2F0Y2hBdE1vc3Qoc291cmNlLCBjYiwgb3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgY291bnQsXG4gICAgLi4ud2F0Y2hPcHRpb25zXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBjdXJyZW50ID0gcmVmKDApO1xuICBjb25zdCBzdG9wID0gd2F0Y2hXaXRoRmlsdGVyKFxuICAgIHNvdXJjZSxcbiAgICAoLi4uYXJncykgPT4ge1xuICAgICAgY3VycmVudC52YWx1ZSArPSAxO1xuICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPj0gdG9WYWx1ZShjb3VudCkpXG4gICAgICAgIG5leHRUaWNrKCgpID0+IHN0b3AoKSk7XG4gICAgICBjYiguLi5hcmdzKTtcbiAgICB9LFxuICAgIHdhdGNoT3B0aW9uc1xuICApO1xuICByZXR1cm4geyBjb3VudDogY3VycmVudCwgc3RvcCB9O1xufVxuXG5mdW5jdGlvbiB3YXRjaERlYm91bmNlZChzb3VyY2UsIGNiLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGRlYm91bmNlID0gMCxcbiAgICBtYXhXYWl0ID0gdm9pZCAwLFxuICAgIC4uLndhdGNoT3B0aW9uc1xuICB9ID0gb3B0aW9ucztcbiAgcmV0dXJuIHdhdGNoV2l0aEZpbHRlcihcbiAgICBzb3VyY2UsXG4gICAgY2IsXG4gICAge1xuICAgICAgLi4ud2F0Y2hPcHRpb25zLFxuICAgICAgZXZlbnRGaWx0ZXI6IGRlYm91bmNlRmlsdGVyKGRlYm91bmNlLCB7IG1heFdhaXQgfSlcbiAgICB9XG4gICk7XG59XG5cbmZ1bmN0aW9uIHdhdGNoRGVlcChzb3VyY2UsIGNiLCBvcHRpb25zKSB7XG4gIHJldHVybiB3YXRjaChcbiAgICBzb3VyY2UsXG4gICAgY2IsXG4gICAge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGRlZXA6IHRydWVcbiAgICB9XG4gICk7XG59XG5cbmZ1bmN0aW9uIHdhdGNoSWdub3JhYmxlKHNvdXJjZSwgY2IsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgZXZlbnRGaWx0ZXIgPSBieXBhc3NGaWx0ZXIsXG4gICAgLi4ud2F0Y2hPcHRpb25zXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBmaWx0ZXJlZENiID0gY3JlYXRlRmlsdGVyV3JhcHBlcihcbiAgICBldmVudEZpbHRlcixcbiAgICBjYlxuICApO1xuICBsZXQgaWdub3JlVXBkYXRlcztcbiAgbGV0IGlnbm9yZVByZXZBc3luY1VwZGF0ZXM7XG4gIGxldCBzdG9wO1xuICBpZiAod2F0Y2hPcHRpb25zLmZsdXNoID09PSBcInN5bmNcIikge1xuICAgIGNvbnN0IGlnbm9yZSA9IHJlZihmYWxzZSk7XG4gICAgaWdub3JlUHJldkFzeW5jVXBkYXRlcyA9ICgpID0+IHtcbiAgICB9O1xuICAgIGlnbm9yZVVwZGF0ZXMgPSAodXBkYXRlcikgPT4ge1xuICAgICAgaWdub3JlLnZhbHVlID0gdHJ1ZTtcbiAgICAgIHVwZGF0ZXIoKTtcbiAgICAgIGlnbm9yZS52YWx1ZSA9IGZhbHNlO1xuICAgIH07XG4gICAgc3RvcCA9IHdhdGNoKFxuICAgICAgc291cmNlLFxuICAgICAgKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCFpZ25vcmUudmFsdWUpXG4gICAgICAgICAgZmlsdGVyZWRDYiguLi5hcmdzKTtcbiAgICAgIH0sXG4gICAgICB3YXRjaE9wdGlvbnNcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRpc3Bvc2FibGVzID0gW107XG4gICAgY29uc3QgaWdub3JlQ291bnRlciA9IHJlZigwKTtcbiAgICBjb25zdCBzeW5jQ291bnRlciA9IHJlZigwKTtcbiAgICBpZ25vcmVQcmV2QXN5bmNVcGRhdGVzID0gKCkgPT4ge1xuICAgICAgaWdub3JlQ291bnRlci52YWx1ZSA9IHN5bmNDb3VudGVyLnZhbHVlO1xuICAgIH07XG4gICAgZGlzcG9zYWJsZXMucHVzaChcbiAgICAgIHdhdGNoKFxuICAgICAgICBzb3VyY2UsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBzeW5jQ291bnRlci52YWx1ZSsrO1xuICAgICAgICB9LFxuICAgICAgICB7IC4uLndhdGNoT3B0aW9ucywgZmx1c2g6IFwic3luY1wiIH1cbiAgICAgIClcbiAgICApO1xuICAgIGlnbm9yZVVwZGF0ZXMgPSAodXBkYXRlcikgPT4ge1xuICAgICAgY29uc3Qgc3luY0NvdW50ZXJQcmV2ID0gc3luY0NvdW50ZXIudmFsdWU7XG4gICAgICB1cGRhdGVyKCk7XG4gICAgICBpZ25vcmVDb3VudGVyLnZhbHVlICs9IHN5bmNDb3VudGVyLnZhbHVlIC0gc3luY0NvdW50ZXJQcmV2O1xuICAgIH07XG4gICAgZGlzcG9zYWJsZXMucHVzaChcbiAgICAgIHdhdGNoKFxuICAgICAgICBzb3VyY2UsXG4gICAgICAgICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgY29uc3QgaWdub3JlID0gaWdub3JlQ291bnRlci52YWx1ZSA+IDAgJiYgaWdub3JlQ291bnRlci52YWx1ZSA9PT0gc3luY0NvdW50ZXIudmFsdWU7XG4gICAgICAgICAgaWdub3JlQ291bnRlci52YWx1ZSA9IDA7XG4gICAgICAgICAgc3luY0NvdW50ZXIudmFsdWUgPSAwO1xuICAgICAgICAgIGlmIChpZ25vcmUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgZmlsdGVyZWRDYiguLi5hcmdzKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2hPcHRpb25zXG4gICAgICApXG4gICAgKTtcbiAgICBzdG9wID0gKCkgPT4ge1xuICAgICAgZGlzcG9zYWJsZXMuZm9yRWFjaCgoZm4pID0+IGZuKCkpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHsgc3RvcCwgaWdub3JlVXBkYXRlcywgaWdub3JlUHJldkFzeW5jVXBkYXRlcyB9O1xufVxuXG5mdW5jdGlvbiB3YXRjaEltbWVkaWF0ZShzb3VyY2UsIGNiLCBvcHRpb25zKSB7XG4gIHJldHVybiB3YXRjaChcbiAgICBzb3VyY2UsXG4gICAgY2IsXG4gICAge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGltbWVkaWF0ZTogdHJ1ZVxuICAgIH1cbiAgKTtcbn1cblxuZnVuY3Rpb24gd2F0Y2hPbmNlKHNvdXJjZSwgY2IsIG9wdGlvbnMpIHtcbiAgY29uc3Qgc3RvcCA9IHdhdGNoKHNvdXJjZSwgKC4uLmFyZ3MpID0+IHtcbiAgICBuZXh0VGljaygoKSA9PiBzdG9wKCkpO1xuICAgIHJldHVybiBjYiguLi5hcmdzKTtcbiAgfSwgb3B0aW9ucyk7XG4gIHJldHVybiBzdG9wO1xufVxuXG5mdW5jdGlvbiB3YXRjaFRocm90dGxlZChzb3VyY2UsIGNiLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIHRocm90dGxlID0gMCxcbiAgICB0cmFpbGluZyA9IHRydWUsXG4gICAgbGVhZGluZyA9IHRydWUsXG4gICAgLi4ud2F0Y2hPcHRpb25zXG4gIH0gPSBvcHRpb25zO1xuICByZXR1cm4gd2F0Y2hXaXRoRmlsdGVyKFxuICAgIHNvdXJjZSxcbiAgICBjYixcbiAgICB7XG4gICAgICAuLi53YXRjaE9wdGlvbnMsXG4gICAgICBldmVudEZpbHRlcjogdGhyb3R0bGVGaWx0ZXIodGhyb3R0bGUsIHRyYWlsaW5nLCBsZWFkaW5nKVxuICAgIH1cbiAgKTtcbn1cblxuZnVuY3Rpb24gd2F0Y2hUcmlnZ2VyYWJsZShzb3VyY2UsIGNiLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGNsZWFudXBGbjtcbiAgZnVuY3Rpb24gb25FZmZlY3QoKSB7XG4gICAgaWYgKCFjbGVhbnVwRm4pXG4gICAgICByZXR1cm47XG4gICAgY29uc3QgZm4gPSBjbGVhbnVwRm47XG4gICAgY2xlYW51cEZuID0gdm9pZCAwO1xuICAgIGZuKCk7XG4gIH1cbiAgZnVuY3Rpb24gb25DbGVhbnVwKGNhbGxiYWNrKSB7XG4gICAgY2xlYW51cEZuID0gY2FsbGJhY2s7XG4gIH1cbiAgY29uc3QgX2NiID0gKHZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgIG9uRWZmZWN0KCk7XG4gICAgcmV0dXJuIGNiKHZhbHVlLCBvbGRWYWx1ZSwgb25DbGVhbnVwKTtcbiAgfTtcbiAgY29uc3QgcmVzID0gd2F0Y2hJZ25vcmFibGUoc291cmNlLCBfY2IsIG9wdGlvbnMpO1xuICBjb25zdCB7IGlnbm9yZVVwZGF0ZXMgfSA9IHJlcztcbiAgY29uc3QgdHJpZ2dlciA9ICgpID0+IHtcbiAgICBsZXQgcmVzMjtcbiAgICBpZ25vcmVVcGRhdGVzKCgpID0+IHtcbiAgICAgIHJlczIgPSBfY2IoZ2V0V2F0Y2hTb3VyY2VzKHNvdXJjZSksIGdldE9sZFZhbHVlKHNvdXJjZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXMyO1xuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLnJlcyxcbiAgICB0cmlnZ2VyXG4gIH07XG59XG5mdW5jdGlvbiBnZXRXYXRjaFNvdXJjZXMoc291cmNlcykge1xuICBpZiAoaXNSZWFjdGl2ZShzb3VyY2VzKSlcbiAgICByZXR1cm4gc291cmNlcztcbiAgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlcykpXG4gICAgcmV0dXJuIHNvdXJjZXMubWFwKChpdGVtKSA9PiB0b1ZhbHVlKGl0ZW0pKTtcbiAgcmV0dXJuIHRvVmFsdWUoc291cmNlcyk7XG59XG5mdW5jdGlvbiBnZXRPbGRWYWx1ZShzb3VyY2UpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc291cmNlKSA/IHNvdXJjZS5tYXAoKCkgPT4gdm9pZCAwKSA6IHZvaWQgMDtcbn1cblxuZnVuY3Rpb24gd2hlbmV2ZXIoc291cmNlLCBjYiwgb3B0aW9ucykge1xuICBjb25zdCBzdG9wID0gd2F0Y2goXG4gICAgc291cmNlLFxuICAgICh2LCBvdiwgb25JbnZhbGlkYXRlKSA9PiB7XG4gICAgICBpZiAodikge1xuICAgICAgICBpZiAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5vbmNlKVxuICAgICAgICAgIG5leHRUaWNrKCgpID0+IHN0b3AoKSk7XG4gICAgICAgIGNiKHYsIG92LCBvbkludmFsaWRhdGUpO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIG9uY2U6IGZhbHNlXG4gICAgfVxuICApO1xuICByZXR1cm4gc3RvcDtcbn1cblxuZXhwb3J0IHsgYXNzZXJ0LCByZWZBdXRvUmVzZXQgYXMgYXV0b1Jlc2V0UmVmLCBieXBhc3NGaWx0ZXIsIGNhbWVsaXplLCBjbGFtcCwgY29tcHV0ZWRFYWdlciwgY29tcHV0ZWRXaXRoQ29udHJvbCwgY29udGFpbnNQcm9wLCBjb21wdXRlZFdpdGhDb250cm9sIGFzIGNvbnRyb2xsZWRDb21wdXRlZCwgY29udHJvbGxlZFJlZiwgY3JlYXRlRXZlbnRIb29rLCBjcmVhdGVGaWx0ZXJXcmFwcGVyLCBjcmVhdGVHbG9iYWxTdGF0ZSwgY3JlYXRlSW5qZWN0aW9uU3RhdGUsIHJlYWN0aWZ5IGFzIGNyZWF0ZVJlYWN0aXZlRm4sIGNyZWF0ZVNoYXJlZENvbXBvc2FibGUsIGNyZWF0ZVNpbmdsZXRvblByb21pc2UsIGRlYm91bmNlRmlsdGVyLCByZWZEZWJvdW5jZWQgYXMgZGVib3VuY2VkUmVmLCB3YXRjaERlYm91bmNlZCBhcyBkZWJvdW5jZWRXYXRjaCwgZGlyZWN0aXZlSG9va3MsIGNvbXB1dGVkRWFnZXIgYXMgZWFnZXJDb21wdXRlZCwgZXh0ZW5kUmVmLCBmb3JtYXREYXRlLCBnZXQsIGdldExpZmVDeWNsZVRhcmdldCwgaGFzT3duLCBoeXBoZW5hdGUsIGlkZW50aXR5LCB3YXRjaElnbm9yYWJsZSBhcyBpZ25vcmFibGVXYXRjaCwgaW5jcmVhc2VXaXRoVW5pdCwgaW5qZWN0TG9jYWwsIGludm9rZSwgaXNDbGllbnQsIGlzRGVmLCBpc0RlZmluZWQsIGlzSU9TLCBpc09iamVjdCwgaXNXb3JrZXIsIG1ha2VEZXN0cnVjdHVyYWJsZSwgbm9vcCwgbm9ybWFsaXplRGF0ZSwgbm90TnVsbGlzaCwgbm93LCBvYmplY3RFbnRyaWVzLCBvYmplY3RPbWl0LCBvYmplY3RQaWNrLCBwYXVzYWJsZUZpbHRlciwgd2F0Y2hQYXVzYWJsZSBhcyBwYXVzYWJsZVdhdGNoLCBwcm9taXNlVGltZW91dCwgcHJvdmlkZUxvY2FsLCByYW5kLCByZWFjdGlmeSwgcmVhY3RpZnlPYmplY3QsIHJlYWN0aXZlQ29tcHV0ZWQsIHJlYWN0aXZlT21pdCwgcmVhY3RpdmVQaWNrLCByZWZBdXRvUmVzZXQsIHJlZkRlYm91bmNlZCwgcmVmRGVmYXVsdCwgcmVmVGhyb3R0bGVkLCByZWZXaXRoQ29udHJvbCwgcmVzb2x2ZVJlZiwgcmVzb2x2ZVVucmVmLCBzZXQsIHN5bmNSZWYsIHN5bmNSZWZzLCB0aHJvdHRsZUZpbHRlciwgcmVmVGhyb3R0bGVkIGFzIHRocm90dGxlZFJlZiwgd2F0Y2hUaHJvdHRsZWQgYXMgdGhyb3R0bGVkV2F0Y2gsIHRpbWVzdGFtcCwgdG9SZWFjdGl2ZSwgdG9SZWYsIHRvUmVmcywgdG9WYWx1ZSwgdHJ5T25CZWZvcmVNb3VudCwgdHJ5T25CZWZvcmVVbm1vdW50LCB0cnlPbk1vdW50ZWQsIHRyeU9uU2NvcGVEaXNwb3NlLCB0cnlPblVubW91bnRlZCwgdW50aWwsIHVzZUFycmF5RGlmZmVyZW5jZSwgdXNlQXJyYXlFdmVyeSwgdXNlQXJyYXlGaWx0ZXIsIHVzZUFycmF5RmluZCwgdXNlQXJyYXlGaW5kSW5kZXgsIHVzZUFycmF5RmluZExhc3QsIHVzZUFycmF5SW5jbHVkZXMsIHVzZUFycmF5Sm9pbiwgdXNlQXJyYXlNYXAsIHVzZUFycmF5UmVkdWNlLCB1c2VBcnJheVNvbWUsIHVzZUFycmF5VW5pcXVlLCB1c2VDb3VudGVyLCB1c2VEYXRlRm9ybWF0LCByZWZEZWJvdW5jZWQgYXMgdXNlRGVib3VuY2UsIHVzZURlYm91bmNlRm4sIHVzZUludGVydmFsLCB1c2VJbnRlcnZhbEZuLCB1c2VMYXN0Q2hhbmdlZCwgcmVmVGhyb3R0bGVkIGFzIHVzZVRocm90dGxlLCB1c2VUaHJvdHRsZUZuLCB1c2VUaW1lb3V0LCB1c2VUaW1lb3V0Rm4sIHVzZVRvTnVtYmVyLCB1c2VUb1N0cmluZywgdXNlVG9nZ2xlLCB3YXRjaEFycmF5LCB3YXRjaEF0TW9zdCwgd2F0Y2hEZWJvdW5jZWQsIHdhdGNoRGVlcCwgd2F0Y2hJZ25vcmFibGUsIHdhdGNoSW1tZWRpYXRlLCB3YXRjaE9uY2UsIHdhdGNoUGF1c2FibGUsIHdhdGNoVGhyb3R0bGVkLCB3YXRjaFRyaWdnZXJhYmxlLCB3YXRjaFdpdGhGaWx0ZXIsIHdoZW5ldmVyIH07XG4iLCJpbXBvcnQgeyBub29wLCBtYWtlRGVzdHJ1Y3R1cmFibGUsIGNhbWVsaXplLCB0b1ZhbHVlLCBpc0NsaWVudCwgaXNPYmplY3QsIHRyeU9uU2NvcGVEaXNwb3NlLCBpc0lPUywgdHJ5T25Nb3VudGVkLCBub3ROdWxsaXNoLCBvYmplY3RPbWl0LCBwcm9taXNlVGltZW91dCwgdW50aWwsIGluY3JlYXNlV2l0aFVuaXQsIG9iamVjdEVudHJpZXMsIGNyZWF0ZVNpbmdsZXRvblByb21pc2UsIHVzZVRpbWVvdXRGbiwgcGF1c2FibGVXYXRjaCwgdG9SZWYsIGNyZWF0ZUV2ZW50SG9vaywgY29tcHV0ZWRXaXRoQ29udHJvbCwgdGltZXN0YW1wLCBwYXVzYWJsZUZpbHRlciwgd2F0Y2hJZ25vcmFibGUsIGRlYm91bmNlRmlsdGVyLCBjcmVhdGVGaWx0ZXJXcmFwcGVyLCBieXBhc3NGaWx0ZXIsIHRvUmVmcywgdXNlSW50ZXJ2YWxGbiwgY29udGFpbnNQcm9wLCBoYXNPd24sIHRocm90dGxlRmlsdGVyLCB1c2VEZWJvdW5jZUZuLCB1c2VUaHJvdHRsZUZuLCBjbGFtcCwgc3luY1JlZiwgb2JqZWN0UGljaywgdHJ5T25Vbm1vdW50ZWQsIHdhdGNoV2l0aEZpbHRlciwgdHJ5T25CZWZvcmVVbm1vdW50LCBpZGVudGl0eSwgaXNEZWYsIGlzV29ya2VyIH0gZnJvbSAnQHZ1ZXVzZS9zaGFyZWQnO1xuZXhwb3J0ICogZnJvbSAnQHZ1ZXVzZS9zaGFyZWQnO1xuaW1wb3J0IHsgaXNSZWYsIHJlZiwgc2hhbGxvd1JlZiwgd2F0Y2hFZmZlY3QsIGNvbXB1dGVkLCBpbmplY3QsIGlzVnVlMywgdmVyc2lvbiwgZGVmaW5lQ29tcG9uZW50LCBoLCBUcmFuc2l0aW9uR3JvdXAsIHNoYWxsb3dSZWFjdGl2ZSwgRnJhZ21lbnQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UsIGN1c3RvbVJlZiwgb25VcGRhdGVkLCBvbk1vdW50ZWQsIGlzVnVlMiwgcmVhZG9ubHksIG5leHRUaWNrLCByZWFjdGl2ZSwgbWFya1JhdywgdW5yZWYsIGdldEN1cnJlbnRTY29wZSwgc2V0LCBkZWwsIGlzUmVhZG9ubHksIG9uQmVmb3JlVXBkYXRlIH0gZnJvbSAndnVlLWRlbWknO1xuXG5mdW5jdGlvbiBjb21wdXRlZEFzeW5jKGV2YWx1YXRpb25DYWxsYmFjaywgaW5pdGlhbFN0YXRlLCBvcHRpb25zT3JSZWYpIHtcbiAgbGV0IG9wdGlvbnM7XG4gIGlmIChpc1JlZihvcHRpb25zT3JSZWYpKSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGV2YWx1YXRpbmc6IG9wdGlvbnNPclJlZlxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnNPclJlZiB8fCB7fTtcbiAgfVxuICBjb25zdCB7XG4gICAgbGF6eSA9IGZhbHNlLFxuICAgIGV2YWx1YXRpbmcgPSB2b2lkIDAsXG4gICAgc2hhbGxvdyA9IHRydWUsXG4gICAgb25FcnJvciA9IG5vb3BcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHN0YXJ0ZWQgPSByZWYoIWxhenkpO1xuICBjb25zdCBjdXJyZW50ID0gc2hhbGxvdyA/IHNoYWxsb3dSZWYoaW5pdGlhbFN0YXRlKSA6IHJlZihpbml0aWFsU3RhdGUpO1xuICBsZXQgY291bnRlciA9IDA7XG4gIHdhdGNoRWZmZWN0KGFzeW5jIChvbkludmFsaWRhdGUpID0+IHtcbiAgICBpZiAoIXN0YXJ0ZWQudmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgY291bnRlcisrO1xuICAgIGNvbnN0IGNvdW50ZXJBdEJlZ2lubmluZyA9IGNvdW50ZXI7XG4gICAgbGV0IGhhc0ZpbmlzaGVkID0gZmFsc2U7XG4gICAgaWYgKGV2YWx1YXRpbmcpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBldmFsdWF0aW5nLnZhbHVlID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZXZhbHVhdGlvbkNhbGxiYWNrKChjYW5jZWxDYWxsYmFjaykgPT4ge1xuICAgICAgICBvbkludmFsaWRhdGUoKCkgPT4ge1xuICAgICAgICAgIGlmIChldmFsdWF0aW5nKVxuICAgICAgICAgICAgZXZhbHVhdGluZy52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgIGlmICghaGFzRmluaXNoZWQpXG4gICAgICAgICAgICBjYW5jZWxDYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGNvdW50ZXJBdEJlZ2lubmluZyA9PT0gY291bnRlcilcbiAgICAgICAgY3VycmVudC52YWx1ZSA9IHJlc3VsdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvbkVycm9yKGUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZXZhbHVhdGluZyAmJiBjb3VudGVyQXRCZWdpbm5pbmcgPT09IGNvdW50ZXIpXG4gICAgICAgIGV2YWx1YXRpbmcudmFsdWUgPSBmYWxzZTtcbiAgICAgIGhhc0ZpbmlzaGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBpZiAobGF6eSkge1xuICAgIHJldHVybiBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBzdGFydGVkLnZhbHVlID0gdHJ1ZTtcbiAgICAgIHJldHVybiBjdXJyZW50LnZhbHVlO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVkSW5qZWN0KGtleSwgb3B0aW9ucywgZGVmYXVsdFNvdXJjZSwgdHJlYXREZWZhdWx0QXNGYWN0b3J5KSB7XG4gIGxldCBzb3VyY2UgPSBpbmplY3Qoa2V5KTtcbiAgaWYgKGRlZmF1bHRTb3VyY2UpXG4gICAgc291cmNlID0gaW5qZWN0KGtleSwgZGVmYXVsdFNvdXJjZSk7XG4gIGlmICh0cmVhdERlZmF1bHRBc0ZhY3RvcnkpXG4gICAgc291cmNlID0gaW5qZWN0KGtleSwgZGVmYXVsdFNvdXJjZSwgdHJlYXREZWZhdWx0QXNGYWN0b3J5KTtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gY29tcHV0ZWQoKGN0eCkgPT4gb3B0aW9ucyhzb3VyY2UsIGN0eCkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjb21wdXRlZCh7XG4gICAgICBnZXQ6IChjdHgpID0+IG9wdGlvbnMuZ2V0KHNvdXJjZSwgY3R4KSxcbiAgICAgIHNldDogb3B0aW9ucy5zZXRcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXVzYWJsZVRlbXBsYXRlKG9wdGlvbnMgPSB7fSkge1xuICBpZiAoIWlzVnVlMyAmJiAhdmVyc2lvbi5zdGFydHNXaXRoKFwiMi43LlwiKSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbVnVlVXNlXSBjcmVhdGVSZXVzYWJsZVRlbXBsYXRlIG9ubHkgd29ya3MgaW4gVnVlIDIuNyBvciBhYm92ZS5cIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHtcbiAgICBpbmhlcml0QXR0cnMgPSB0cnVlXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCByZW5kZXIgPSBzaGFsbG93UmVmKCk7XG4gIGNvbnN0IGRlZmluZSA9IC8qICNfX1BVUkVfXyAqLyBkZWZpbmVDb21wb25lbnQoe1xuICAgIHNldHVwKF8sIHsgc2xvdHMgfSkge1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgcmVuZGVyLnZhbHVlID0gc2xvdHMuZGVmYXVsdDtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbiAgY29uc3QgcmV1c2UgPSAvKiAjX19QVVJFX18gKi8gZGVmaW5lQ29tcG9uZW50KHtcbiAgICBpbmhlcml0QXR0cnMsXG4gICAgc2V0dXAoXywgeyBhdHRycywgc2xvdHMgfSkge1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXJlbmRlci52YWx1ZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW1Z1ZVVzZV0gRmFpbGVkIHRvIGZpbmQgdGhlIGRlZmluaXRpb24gb2YgcmV1c2FibGUgdGVtcGxhdGVcIik7XG4gICAgICAgIGNvbnN0IHZub2RlID0gKF9hID0gcmVuZGVyLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChyZW5kZXIsIHsgLi4ua2V5c1RvQ2FtZWxLZWJhYkNhc2UoYXR0cnMpLCAkc2xvdHM6IHNsb3RzIH0pO1xuICAgICAgICByZXR1cm4gaW5oZXJpdEF0dHJzICYmICh2bm9kZSA9PSBudWxsID8gdm9pZCAwIDogdm5vZGUubGVuZ3RoKSA9PT0gMSA/IHZub2RlWzBdIDogdm5vZGU7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBtYWtlRGVzdHJ1Y3R1cmFibGUoXG4gICAgeyBkZWZpbmUsIHJldXNlIH0sXG4gICAgW2RlZmluZSwgcmV1c2VdXG4gICk7XG59XG5mdW5jdGlvbiBrZXlzVG9DYW1lbEtlYmFiQ2FzZShvYmopIHtcbiAgY29uc3QgbmV3T2JqID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIG9iailcbiAgICBuZXdPYmpbY2FtZWxpemUoa2V5KV0gPSBvYmpba2V5XTtcbiAgcmV0dXJuIG5ld09iajtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVQcm9taXNlKG9wdGlvbnMgPSB7fSkge1xuICBpZiAoIWlzVnVlMykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbVnVlVXNlXSBjcmVhdGVUZW1wbGF0ZVByb21pc2Ugb25seSB3b3JrcyBpbiBWdWUgMyBvciBhYm92ZS5cIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBpbmRleCA9IDA7XG4gIGNvbnN0IGluc3RhbmNlcyA9IHJlZihbXSk7XG4gIGZ1bmN0aW9uIGNyZWF0ZSguLi5hcmdzKSB7XG4gICAgY29uc3QgcHJvcHMgPSBzaGFsbG93UmVhY3RpdmUoe1xuICAgICAga2V5OiBpbmRleCsrLFxuICAgICAgYXJncyxcbiAgICAgIHByb21pc2U6IHZvaWQgMCxcbiAgICAgIHJlc29sdmU6ICgpID0+IHtcbiAgICAgIH0sXG4gICAgICByZWplY3Q6ICgpID0+IHtcbiAgICAgIH0sXG4gICAgICBpc1Jlc29sdmluZzogZmFsc2UsXG4gICAgICBvcHRpb25zXG4gICAgfSk7XG4gICAgaW5zdGFuY2VzLnZhbHVlLnB1c2gocHJvcHMpO1xuICAgIHByb3BzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICAgIHByb3BzLnJlc29sdmUgPSAodikgPT4ge1xuICAgICAgICBwcm9wcy5pc1Jlc29sdmluZyA9IHRydWU7XG4gICAgICAgIHJldHVybiBfcmVzb2x2ZSh2KTtcbiAgICAgIH07XG4gICAgICBwcm9wcy5yZWplY3QgPSBfcmVqZWN0O1xuICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgcHJvcHMucHJvbWlzZSA9IHZvaWQgMDtcbiAgICAgIGNvbnN0IGluZGV4MiA9IGluc3RhbmNlcy52YWx1ZS5pbmRleE9mKHByb3BzKTtcbiAgICAgIGlmIChpbmRleDIgIT09IC0xKVxuICAgICAgICBpbnN0YW5jZXMudmFsdWUuc3BsaWNlKGluZGV4MiwgMSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb3BzLnByb21pc2U7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnQoLi4uYXJncykge1xuICAgIGlmIChvcHRpb25zLnNpbmdsZXRvbiAmJiBpbnN0YW5jZXMudmFsdWUubGVuZ3RoID4gMClcbiAgICAgIHJldHVybiBpbnN0YW5jZXMudmFsdWVbMF0ucHJvbWlzZTtcbiAgICByZXR1cm4gY3JlYXRlKC4uLmFyZ3MpO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudCA9IC8qICNfX1BVUkVfXyAqLyBkZWZpbmVDb21wb25lbnQoKF8sIHsgc2xvdHMgfSkgPT4ge1xuICAgIGNvbnN0IHJlbmRlckxpc3QgPSAoKSA9PiBpbnN0YW5jZXMudmFsdWUubWFwKChwcm9wcykgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgcmV0dXJuIGgoRnJhZ21lbnQsIHsga2V5OiBwcm9wcy5rZXkgfSwgKF9hID0gc2xvdHMuZGVmYXVsdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwoc2xvdHMsIHByb3BzKSk7XG4gICAgfSk7XG4gICAgaWYgKG9wdGlvbnMudHJhbnNpdGlvbilcbiAgICAgIHJldHVybiAoKSA9PiBoKFRyYW5zaXRpb25Hcm91cCwgb3B0aW9ucy50cmFuc2l0aW9uLCByZW5kZXJMaXN0KTtcbiAgICByZXR1cm4gcmVuZGVyTGlzdDtcbiAgfSk7XG4gIGNvbXBvbmVudC5zdGFydCA9IHN0YXJ0O1xuICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbnJlZkZuKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MubWFwKChpKSA9PiB0b1ZhbHVlKGkpKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVucmVmRWxlbWVudChlbFJlZikge1xuICB2YXIgX2E7XG4gIGNvbnN0IHBsYWluID0gdG9WYWx1ZShlbFJlZik7XG4gIHJldHVybiAoX2EgPSBwbGFpbiA9PSBudWxsID8gdm9pZCAwIDogcGxhaW4uJGVsKSAhPSBudWxsID8gX2EgOiBwbGFpbjtcbn1cblxuY29uc3QgZGVmYXVsdFdpbmRvdyA9IGlzQ2xpZW50ID8gd2luZG93IDogdm9pZCAwO1xuY29uc3QgZGVmYXVsdERvY3VtZW50ID0gaXNDbGllbnQgPyB3aW5kb3cuZG9jdW1lbnQgOiB2b2lkIDA7XG5jb25zdCBkZWZhdWx0TmF2aWdhdG9yID0gaXNDbGllbnQgPyB3aW5kb3cubmF2aWdhdG9yIDogdm9pZCAwO1xuY29uc3QgZGVmYXVsdExvY2F0aW9uID0gaXNDbGllbnQgPyB3aW5kb3cubG9jYXRpb24gOiB2b2lkIDA7XG5cbmZ1bmN0aW9uIHVzZUV2ZW50TGlzdGVuZXIoLi4uYXJncykge1xuICBsZXQgdGFyZ2V0O1xuICBsZXQgZXZlbnRzO1xuICBsZXQgbGlzdGVuZXJzO1xuICBsZXQgb3B0aW9ucztcbiAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICBbZXZlbnRzLCBsaXN0ZW5lcnMsIG9wdGlvbnNdID0gYXJncztcbiAgICB0YXJnZXQgPSBkZWZhdWx0V2luZG93O1xuICB9IGVsc2Uge1xuICAgIFt0YXJnZXQsIGV2ZW50cywgbGlzdGVuZXJzLCBvcHRpb25zXSA9IGFyZ3M7XG4gIH1cbiAgaWYgKCF0YXJnZXQpXG4gICAgcmV0dXJuIG5vb3A7XG4gIGlmICghQXJyYXkuaXNBcnJheShldmVudHMpKVxuICAgIGV2ZW50cyA9IFtldmVudHNdO1xuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdGVuZXJzKSlcbiAgICBsaXN0ZW5lcnMgPSBbbGlzdGVuZXJzXTtcbiAgY29uc3QgY2xlYW51cHMgPSBbXTtcbiAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICBjbGVhbnVwcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7XG4gICAgY2xlYW51cHMubGVuZ3RoID0gMDtcbiAgfTtcbiAgY29uc3QgcmVnaXN0ZXIgPSAoZWwsIGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9uczIpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9uczIpO1xuICAgIHJldHVybiAoKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9uczIpO1xuICB9O1xuICBjb25zdCBzdG9wV2F0Y2ggPSB3YXRjaChcbiAgICAoKSA9PiBbdW5yZWZFbGVtZW50KHRhcmdldCksIHRvVmFsdWUob3B0aW9ucyldLFxuICAgIChbZWwsIG9wdGlvbnMyXSkgPT4ge1xuICAgICAgY2xlYW51cCgpO1xuICAgICAgaWYgKCFlbClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY29uc3Qgb3B0aW9uc0Nsb25lID0gaXNPYmplY3Qob3B0aW9uczIpID8geyAuLi5vcHRpb25zMiB9IDogb3B0aW9uczI7XG4gICAgICBjbGVhbnVwcy5wdXNoKFxuICAgICAgICAuLi5ldmVudHMuZmxhdE1hcCgoZXZlbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXJzLm1hcCgobGlzdGVuZXIpID0+IHJlZ2lzdGVyKGVsLCBldmVudCwgbGlzdGVuZXIsIG9wdGlvbnNDbG9uZSkpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9LFxuICAgIHsgaW1tZWRpYXRlOiB0cnVlLCBmbHVzaDogXCJwb3N0XCIgfVxuICApO1xuICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgIHN0b3BXYXRjaCgpO1xuICAgIGNsZWFudXAoKTtcbiAgfTtcbiAgdHJ5T25TY29wZURpc3Bvc2Uoc3RvcCk7XG4gIHJldHVybiBzdG9wO1xufVxuXG5sZXQgX2lPU1dvcmthcm91bmQgPSBmYWxzZTtcbmZ1bmN0aW9uIG9uQ2xpY2tPdXRzaWRlKHRhcmdldCwgaGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgd2luZG93ID0gZGVmYXVsdFdpbmRvdywgaWdub3JlID0gW10sIGNhcHR1cmUgPSB0cnVlLCBkZXRlY3RJZnJhbWUgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgaWYgKCF3aW5kb3cpXG4gICAgcmV0dXJuIG5vb3A7XG4gIGlmIChpc0lPUyAmJiAhX2lPU1dvcmthcm91bmQpIHtcbiAgICBfaU9TV29ya2Fyb3VuZCA9IHRydWU7XG4gICAgQXJyYXkuZnJvbSh3aW5kb3cuZG9jdW1lbnQuYm9keS5jaGlsZHJlbikuZm9yRWFjaCgoZWwpID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBub29wKSk7XG4gICAgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbm9vcCk7XG4gIH1cbiAgbGV0IHNob3VsZExpc3RlbiA9IHRydWU7XG4gIGNvbnN0IHNob3VsZElnbm9yZSA9IChldmVudCkgPT4ge1xuICAgIHJldHVybiBpZ25vcmUuc29tZSgodGFyZ2V0MikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB0YXJnZXQyID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldDIpKS5zb21lKChlbCkgPT4gZWwgPT09IGV2ZW50LnRhcmdldCB8fCBldmVudC5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhlbCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZWwgPSB1bnJlZkVsZW1lbnQodGFyZ2V0Mik7XG4gICAgICAgIHJldHVybiBlbCAmJiAoZXZlbnQudGFyZ2V0ID09PSBlbCB8fCBldmVudC5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhlbCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBsaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGVsID0gdW5yZWZFbGVtZW50KHRhcmdldCk7XG4gICAgaWYgKCFlbCB8fCBlbCA9PT0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGVsKSlcbiAgICAgIHJldHVybjtcbiAgICBpZiAoZXZlbnQuZGV0YWlsID09PSAwKVxuICAgICAgc2hvdWxkTGlzdGVuID0gIXNob3VsZElnbm9yZShldmVudCk7XG4gICAgaWYgKCFzaG91bGRMaXN0ZW4pIHtcbiAgICAgIHNob3VsZExpc3RlbiA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhhbmRsZXIoZXZlbnQpO1xuICB9O1xuICBjb25zdCBjbGVhbnVwID0gW1xuICAgIHVzZUV2ZW50TGlzdGVuZXIod2luZG93LCBcImNsaWNrXCIsIGxpc3RlbmVyLCB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmUgfSksXG4gICAgdXNlRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGVsID0gdW5yZWZFbGVtZW50KHRhcmdldCk7XG4gICAgICBzaG91bGRMaXN0ZW4gPSAhc2hvdWxkSWdub3JlKGUpICYmICEhKGVsICYmICFlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGVsKSk7XG4gICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pLFxuICAgIGRldGVjdElmcmFtZSAmJiB1c2VFdmVudExpc3RlbmVyKHdpbmRvdywgXCJibHVyXCIsIChldmVudCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgZWwgPSB1bnJlZkVsZW1lbnQodGFyZ2V0KTtcbiAgICAgICAgaWYgKCgoX2EgPSB3aW5kb3cuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnRhZ05hbWUpID09PSBcIklGUkFNRVwiICYmICEoZWwgPT0gbnVsbCA/IHZvaWQgMCA6IGVsLmNvbnRhaW5zKHdpbmRvdy5kb2N1bWVudC5hY3RpdmVFbGVtZW50KSkpIHtcbiAgICAgICAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfSlcbiAgXS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IHN0b3AgPSAoKSA9PiBjbGVhbnVwLmZvckVhY2goKGZuKSA9PiBmbigpKTtcbiAgcmV0dXJuIHN0b3A7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleVByZWRpY2F0ZShrZXlGaWx0ZXIpIHtcbiAgaWYgKHR5cGVvZiBrZXlGaWx0ZXIgPT09IFwiZnVuY3Rpb25cIilcbiAgICByZXR1cm4ga2V5RmlsdGVyO1xuICBlbHNlIGlmICh0eXBlb2Yga2V5RmlsdGVyID09PSBcInN0cmluZ1wiKVxuICAgIHJldHVybiAoZXZlbnQpID0+IGV2ZW50LmtleSA9PT0ga2V5RmlsdGVyO1xuICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGtleUZpbHRlcikpXG4gICAgcmV0dXJuIChldmVudCkgPT4ga2V5RmlsdGVyLmluY2x1ZGVzKGV2ZW50LmtleSk7XG4gIHJldHVybiAoKSA9PiB0cnVlO1xufVxuZnVuY3Rpb24gb25LZXlTdHJva2UoLi4uYXJncykge1xuICBsZXQga2V5O1xuICBsZXQgaGFuZGxlcjtcbiAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAga2V5ID0gYXJnc1swXTtcbiAgICBoYW5kbGVyID0gYXJnc1sxXTtcbiAgICBvcHRpb25zID0gYXJnc1syXTtcbiAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAga2V5ID0gdHJ1ZTtcbiAgICAgIGhhbmRsZXIgPSBhcmdzWzBdO1xuICAgICAgb3B0aW9ucyA9IGFyZ3NbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleSA9IGFyZ3NbMF07XG4gICAgICBoYW5kbGVyID0gYXJnc1sxXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAga2V5ID0gdHJ1ZTtcbiAgICBoYW5kbGVyID0gYXJnc1swXTtcbiAgfVxuICBjb25zdCB7XG4gICAgdGFyZ2V0ID0gZGVmYXVsdFdpbmRvdyxcbiAgICBldmVudE5hbWUgPSBcImtleWRvd25cIixcbiAgICBwYXNzaXZlID0gZmFsc2UsXG4gICAgZGVkdXBlID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByZWRpY2F0ZSA9IGNyZWF0ZUtleVByZWRpY2F0ZShrZXkpO1xuICBjb25zdCBsaXN0ZW5lciA9IChlKSA9PiB7XG4gICAgaWYgKGUucmVwZWF0ICYmIHRvVmFsdWUoZGVkdXBlKSlcbiAgICAgIHJldHVybjtcbiAgICBpZiAocHJlZGljYXRlKGUpKVxuICAgICAgaGFuZGxlcihlKTtcbiAgfTtcbiAgcmV0dXJuIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBldmVudE5hbWUsIGxpc3RlbmVyLCBwYXNzaXZlKTtcbn1cbmZ1bmN0aW9uIG9uS2V5RG93bihrZXksIGhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gb25LZXlTdHJva2Uoa2V5LCBoYW5kbGVyLCB7IC4uLm9wdGlvbnMsIGV2ZW50TmFtZTogXCJrZXlkb3duXCIgfSk7XG59XG5mdW5jdGlvbiBvbktleVByZXNzZWQoa2V5LCBoYW5kbGVyLCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIG9uS2V5U3Ryb2tlKGtleSwgaGFuZGxlciwgeyAuLi5vcHRpb25zLCBldmVudE5hbWU6IFwia2V5cHJlc3NcIiB9KTtcbn1cbmZ1bmN0aW9uIG9uS2V5VXAoa2V5LCBoYW5kbGVyLCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIG9uS2V5U3Ryb2tlKGtleSwgaGFuZGxlciwgeyAuLi5vcHRpb25zLCBldmVudE5hbWU6IFwia2V5dXBcIiB9KTtcbn1cblxuY29uc3QgREVGQVVMVF9ERUxBWSA9IDUwMDtcbmNvbnN0IERFRkFVTFRfVEhSRVNIT0xEID0gMTA7XG5mdW5jdGlvbiBvbkxvbmdQcmVzcyh0YXJnZXQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgdmFyIF9hLCBfYjtcbiAgY29uc3QgZWxlbWVudFJlZiA9IGNvbXB1dGVkKCgpID0+IHVucmVmRWxlbWVudCh0YXJnZXQpKTtcbiAgbGV0IHRpbWVvdXQ7XG4gIGxldCBwb3NTdGFydDtcbiAgbGV0IHN0YXJ0VGltZXN0YW1wO1xuICBsZXQgaGFzTG9uZ1ByZXNzZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSB2b2lkIDA7XG4gICAgfVxuICAgIHBvc1N0YXJ0ID0gdm9pZCAwO1xuICAgIHN0YXJ0VGltZXN0YW1wID0gdm9pZCAwO1xuICAgIGhhc0xvbmdQcmVzc2VkID0gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gb25SZWxlYXNlKGV2KSB7XG4gICAgdmFyIF9hMiwgX2IyLCBfYztcbiAgICBjb25zdCBbX3N0YXJ0VGltZXN0YW1wLCBfcG9zU3RhcnQsIF9oYXNMb25nUHJlc3NlZF0gPSBbc3RhcnRUaW1lc3RhbXAsIHBvc1N0YXJ0LCBoYXNMb25nUHJlc3NlZF07XG4gICAgY2xlYXIoKTtcbiAgICBpZiAoIShvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLm9uTW91c2VVcCkgfHwgIV9wb3NTdGFydCB8fCAhX3N0YXJ0VGltZXN0YW1wKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICgoKF9hMiA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMubW9kaWZpZXJzKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLnNlbGYpICYmIGV2LnRhcmdldCAhPT0gZWxlbWVudFJlZi52YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBpZiAoKF9iMiA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMubW9kaWZpZXJzKSA9PSBudWxsID8gdm9pZCAwIDogX2IyLnByZXZlbnQpXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICgoX2MgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLm1vZGlmaWVycykgPT0gbnVsbCA/IHZvaWQgMCA6IF9jLnN0b3ApXG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBkeCA9IGV2LnggLSBfcG9zU3RhcnQueDtcbiAgICBjb25zdCBkeSA9IGV2LnkgLSBfcG9zU3RhcnQueTtcbiAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgb3B0aW9ucy5vbk1vdXNlVXAoZXYudGltZVN0YW1wIC0gX3N0YXJ0VGltZXN0YW1wLCBkaXN0YW5jZSwgX2hhc0xvbmdQcmVzc2VkKTtcbiAgfVxuICBmdW5jdGlvbiBvbkRvd24oZXYpIHtcbiAgICB2YXIgX2EyLCBfYjIsIF9jLCBfZDtcbiAgICBpZiAoKChfYTIgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLm1vZGlmaWVycykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5zZWxmKSAmJiBldi50YXJnZXQgIT09IGVsZW1lbnRSZWYudmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgY2xlYXIoKTtcbiAgICBpZiAoKF9iMiA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMubW9kaWZpZXJzKSA9PSBudWxsID8gdm9pZCAwIDogX2IyLnByZXZlbnQpXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICgoX2MgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLm1vZGlmaWVycykgPT0gbnVsbCA/IHZvaWQgMCA6IF9jLnN0b3ApXG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBwb3NTdGFydCA9IHtcbiAgICAgIHg6IGV2LngsXG4gICAgICB5OiBldi55XG4gICAgfTtcbiAgICBzdGFydFRpbWVzdGFtcCA9IGV2LnRpbWVTdGFtcDtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICgpID0+IHtcbiAgICAgICAgaGFzTG9uZ1ByZXNzZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVyKGV2KTtcbiAgICAgIH0sXG4gICAgICAoX2QgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmRlbGF5KSAhPSBudWxsID8gX2QgOiBERUZBVUxUX0RFTEFZXG4gICAgKTtcbiAgfVxuICBmdW5jdGlvbiBvbk1vdmUoZXYpIHtcbiAgICB2YXIgX2EyLCBfYjIsIF9jLCBfZDtcbiAgICBpZiAoKChfYTIgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLm1vZGlmaWVycykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5zZWxmKSAmJiBldi50YXJnZXQgIT09IGVsZW1lbnRSZWYudmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgaWYgKCFwb3NTdGFydCB8fCAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5kaXN0YW5jZVRocmVzaG9sZCkgPT09IGZhbHNlKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICgoX2IyID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5tb2RpZmllcnMpID09IG51bGwgPyB2b2lkIDAgOiBfYjIucHJldmVudClcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKChfYyA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMubW9kaWZpZXJzKSA9PSBudWxsID8gdm9pZCAwIDogX2Muc3RvcClcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGR4ID0gZXYueCAtIHBvc1N0YXJ0Lng7XG4gICAgY29uc3QgZHkgPSBldi55IC0gcG9zU3RhcnQueTtcbiAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgaWYgKGRpc3RhbmNlID49ICgoX2QgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmRpc3RhbmNlVGhyZXNob2xkKSAhPSBudWxsID8gX2QgOiBERUZBVUxUX1RIUkVTSE9MRCkpXG4gICAgICBjbGVhcigpO1xuICB9XG4gIGNvbnN0IGxpc3RlbmVyT3B0aW9ucyA9IHtcbiAgICBjYXB0dXJlOiAoX2EgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLm1vZGlmaWVycykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhcHR1cmUsXG4gICAgb25jZTogKF9iID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5tb2RpZmllcnMpID09IG51bGwgPyB2b2lkIDAgOiBfYi5vbmNlXG4gIH07XG4gIGNvbnN0IGNsZWFudXAgPSBbXG4gICAgdXNlRXZlbnRMaXN0ZW5lcihlbGVtZW50UmVmLCBcInBvaW50ZXJkb3duXCIsIG9uRG93biwgbGlzdGVuZXJPcHRpb25zKSxcbiAgICB1c2VFdmVudExpc3RlbmVyKGVsZW1lbnRSZWYsIFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlLCBsaXN0ZW5lck9wdGlvbnMpLFxuICAgIHVzZUV2ZW50TGlzdGVuZXIoZWxlbWVudFJlZiwgW1wicG9pbnRlcnVwXCIsIFwicG9pbnRlcmxlYXZlXCJdLCBvblJlbGVhc2UsIGxpc3RlbmVyT3B0aW9ucylcbiAgXTtcbiAgY29uc3Qgc3RvcCA9ICgpID0+IGNsZWFudXAuZm9yRWFjaCgoZm4pID0+IGZuKCkpO1xuICByZXR1cm4gc3RvcDtcbn1cblxuZnVuY3Rpb24gaXNGb2N1c2VkRWxlbWVudEVkaXRhYmxlKCkge1xuICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQsIGJvZHkgfSA9IGRvY3VtZW50O1xuICBpZiAoIWFjdGl2ZUVsZW1lbnQpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gYm9keSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIHN3aXRjaCAoYWN0aXZlRWxlbWVudC50YWdOYW1lKSB7XG4gICAgY2FzZSBcIklOUFVUXCI6XG4gICAgY2FzZSBcIlRFWFRBUkVBXCI6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gYWN0aXZlRWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIik7XG59XG5mdW5jdGlvbiBpc1R5cGVkQ2hhclZhbGlkKHtcbiAga2V5Q29kZSxcbiAgbWV0YUtleSxcbiAgY3RybEtleSxcbiAgYWx0S2V5XG59KSB7XG4gIGlmIChtZXRhS2V5IHx8IGN0cmxLZXkgfHwgYWx0S2V5KVxuICAgIHJldHVybiBmYWxzZTtcbiAgaWYgKGtleUNvZGUgPj0gNDggJiYga2V5Q29kZSA8PSA1NylcbiAgICByZXR1cm4gdHJ1ZTtcbiAgaWYgKGtleUNvZGUgPj0gNjUgJiYga2V5Q29kZSA8PSA5MClcbiAgICByZXR1cm4gdHJ1ZTtcbiAgaWYgKGtleUNvZGUgPj0gOTcgJiYga2V5Q29kZSA8PSAxMjIpXG4gICAgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIG9uU3RhcnRUeXBpbmcoY2FsbGJhY2ssIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IGRvY3VtZW50OiBkb2N1bWVudDIgPSBkZWZhdWx0RG9jdW1lbnQgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAhaXNGb2N1c2VkRWxlbWVudEVkaXRhYmxlKCkgJiYgaXNUeXBlZENoYXJWYWxpZChldmVudCkgJiYgY2FsbGJhY2soZXZlbnQpO1xuICB9O1xuICBpZiAoZG9jdW1lbnQyKVxuICAgIHVzZUV2ZW50TGlzdGVuZXIoZG9jdW1lbnQyLCBcImtleWRvd25cIiwga2V5ZG93biwgeyBwYXNzaXZlOiB0cnVlIH0pO1xufVxuXG5mdW5jdGlvbiB0ZW1wbGF0ZVJlZihrZXksIGluaXRpYWxWYWx1ZSA9IG51bGwpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBnZXRDdXJyZW50SW5zdGFuY2UoKTtcbiAgbGV0IF90cmlnZ2VyID0gKCkgPT4ge1xuICB9O1xuICBjb25zdCBlbGVtZW50ID0gY3VzdG9tUmVmKCh0cmFjaywgdHJpZ2dlcikgPT4ge1xuICAgIF90cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0KCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB0cmFjaygpO1xuICAgICAgICByZXR1cm4gKF9iID0gKF9hID0gaW5zdGFuY2UgPT0gbnVsbCA/IHZvaWQgMCA6IGluc3RhbmNlLnByb3h5KSA9PSBudWxsID8gdm9pZCAwIDogX2EuJHJlZnNba2V5XSkgIT0gbnVsbCA/IF9iIDogaW5pdGlhbFZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldCgpIHtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgdHJ5T25Nb3VudGVkKF90cmlnZ2VyKTtcbiAgb25VcGRhdGVkKF90cmlnZ2VyKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHVzZU1vdW50ZWQoKSB7XG4gIGNvbnN0IGlzTW91bnRlZCA9IHJlZihmYWxzZSk7XG4gIGNvbnN0IGluc3RhbmNlID0gZ2V0Q3VycmVudEluc3RhbmNlKCk7XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBpc01vdW50ZWQudmFsdWUgPSB0cnVlO1xuICAgIH0sIGlzVnVlMiA/IHZvaWQgMCA6IGluc3RhbmNlKTtcbiAgfVxuICByZXR1cm4gaXNNb3VudGVkO1xufVxuXG5mdW5jdGlvbiB1c2VTdXBwb3J0ZWQoY2FsbGJhY2spIHtcbiAgY29uc3QgaXNNb3VudGVkID0gdXNlTW91bnRlZCgpO1xuICByZXR1cm4gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlzTW91bnRlZC52YWx1ZTtcbiAgICByZXR1cm4gQm9vbGVhbihjYWxsYmFjaygpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uT2JzZXJ2ZXIodGFyZ2V0LCBjYWxsYmFjaywgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgd2luZG93ID0gZGVmYXVsdFdpbmRvdywgLi4ubXV0YXRpb25PcHRpb25zIH0gPSBvcHRpb25zO1xuICBsZXQgb2JzZXJ2ZXI7XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gdXNlU3VwcG9ydGVkKCgpID0+IHdpbmRvdyAmJiBcIk11dGF0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpO1xuICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgb2JzZXJ2ZXIgPSB2b2lkIDA7XG4gICAgfVxuICB9O1xuICBjb25zdCB0YXJnZXRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdG9WYWx1ZSh0YXJnZXQpO1xuICAgIGNvbnN0IGl0ZW1zID0gKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdKS5tYXAodW5yZWZFbGVtZW50KS5maWx0ZXIobm90TnVsbGlzaCk7XG4gICAgcmV0dXJuIG5ldyBTZXQoaXRlbXMpO1xuICB9KTtcbiAgY29uc3Qgc3RvcFdhdGNoID0gd2F0Y2goXG4gICAgKCkgPT4gdGFyZ2V0cy52YWx1ZSxcbiAgICAodGFyZ2V0czIpID0+IHtcbiAgICAgIGNsZWFudXAoKTtcbiAgICAgIGlmIChpc1N1cHBvcnRlZC52YWx1ZSAmJiB0YXJnZXRzMi5zaXplKSB7XG4gICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgICAgICB0YXJnZXRzMi5mb3JFYWNoKChlbCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbCwgbXV0YXRpb25PcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB7IGltbWVkaWF0ZTogdHJ1ZSwgZmx1c2g6IFwicG9zdFwiIH1cbiAgKTtcbiAgY29uc3QgdGFrZVJlY29yZHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG9ic2VydmVyID09IG51bGwgPyB2b2lkIDAgOiBvYnNlcnZlci50YWtlUmVjb3JkcygpO1xuICB9O1xuICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgIGNsZWFudXAoKTtcbiAgICBzdG9wV2F0Y2goKTtcbiAgfTtcbiAgdHJ5T25TY29wZURpc3Bvc2Uoc3RvcCk7XG4gIHJldHVybiB7XG4gICAgaXNTdXBwb3J0ZWQsXG4gICAgc3RvcCxcbiAgICB0YWtlUmVjb3Jkc1xuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VBY3RpdmVFbGVtZW50KG9wdGlvbnMgPSB7fSkge1xuICB2YXIgX2E7XG4gIGNvbnN0IHtcbiAgICB3aW5kb3cgPSBkZWZhdWx0V2luZG93LFxuICAgIGRlZXAgPSB0cnVlLFxuICAgIHRyaWdnZXJPblJlbW92YWwgPSBmYWxzZVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgZG9jdW1lbnQgPSAoX2EgPSBvcHRpb25zLmRvY3VtZW50KSAhPSBudWxsID8gX2EgOiB3aW5kb3cgPT0gbnVsbCA/IHZvaWQgMCA6IHdpbmRvdy5kb2N1bWVudDtcbiAgY29uc3QgZ2V0RGVlcEFjdGl2ZUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgdmFyIF9hMjtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50ID09IG51bGwgPyB2b2lkIDAgOiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChkZWVwKSB7XG4gICAgICB3aGlsZSAoZWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogZWxlbWVudC5zaGFkb3dSb290KVxuICAgICAgICBlbGVtZW50ID0gKF9hMiA9IGVsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGVsZW1lbnQuc2hhZG93Um9vdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5hY3RpdmVFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcbiAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHJlZigpO1xuICBjb25zdCB0cmlnZ2VyID0gKCkgPT4ge1xuICAgIGFjdGl2ZUVsZW1lbnQudmFsdWUgPSBnZXREZWVwQWN0aXZlRWxlbWVudCgpO1xuICB9O1xuICBpZiAod2luZG93KSB7XG4gICAgdXNlRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwiYmx1clwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSBudWxsKVxuICAgICAgICByZXR1cm47XG4gICAgICB0cmlnZ2VyKCk7XG4gICAgfSwgdHJ1ZSk7XG4gICAgdXNlRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwiZm9jdXNcIiwgdHJpZ2dlciwgdHJ1ZSk7XG4gIH1cbiAgaWYgKHRyaWdnZXJPblJlbW92YWwpIHtcbiAgICB1c2VNdXRhdGlvbk9ic2VydmVyKGRvY3VtZW50LCAobXV0YXRpb25zKSA9PiB7XG4gICAgICBtdXRhdGlvbnMuZmlsdGVyKChtKSA9PiBtLnJlbW92ZWROb2Rlcy5sZW5ndGgpLm1hcCgobikgPT4gQXJyYXkuZnJvbShuLnJlbW92ZWROb2RlcykpLmZsYXQoKS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlID09PSBhY3RpdmVFbGVtZW50LnZhbHVlKVxuICAgICAgICAgIHRyaWdnZXIoKTtcbiAgICAgIH0pO1xuICAgIH0sIHtcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIHN1YnRyZWU6IHRydWVcbiAgICB9KTtcbiAgfVxuICB0cmlnZ2VyKCk7XG4gIHJldHVybiBhY3RpdmVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiB1c2VSYWZGbihmbiwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBpbW1lZGlhdGUgPSB0cnVlLFxuICAgIGZwc0xpbWl0ID0gdm9pZCAwLFxuICAgIHdpbmRvdyA9IGRlZmF1bHRXaW5kb3dcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzQWN0aXZlID0gcmVmKGZhbHNlKTtcbiAgY29uc3QgaW50ZXJ2YWxMaW1pdCA9IGZwc0xpbWl0ID8gMWUzIC8gZnBzTGltaXQgOiBudWxsO1xuICBsZXQgcHJldmlvdXNGcmFtZVRpbWVzdGFtcCA9IDA7XG4gIGxldCByYWZJZCA9IG51bGw7XG4gIGZ1bmN0aW9uIGxvb3AodGltZXN0YW1wKSB7XG4gICAgaWYgKCFpc0FjdGl2ZS52YWx1ZSB8fCAhd2luZG93KVxuICAgICAgcmV0dXJuO1xuICAgIGlmICghcHJldmlvdXNGcmFtZVRpbWVzdGFtcClcbiAgICAgIHByZXZpb3VzRnJhbWVUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgY29uc3QgZGVsdGEgPSB0aW1lc3RhbXAgLSBwcmV2aW91c0ZyYW1lVGltZXN0YW1wO1xuICAgIGlmIChpbnRlcnZhbExpbWl0ICYmIGRlbHRhIDwgaW50ZXJ2YWxMaW1pdCkge1xuICAgICAgcmFmSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcmV2aW91c0ZyYW1lVGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgIGZuKHsgZGVsdGEsIHRpbWVzdGFtcCB9KTtcbiAgICByYWZJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gIH1cbiAgZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgIGlmICghaXNBY3RpdmUudmFsdWUgJiYgd2luZG93KSB7XG4gICAgICBpc0FjdGl2ZS52YWx1ZSA9IHRydWU7XG4gICAgICBwcmV2aW91c0ZyYW1lVGltZXN0YW1wID0gMDtcbiAgICAgIHJhZklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgaXNBY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICBpZiAocmFmSWQgIT0gbnVsbCAmJiB3aW5kb3cpIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyYWZJZCk7XG4gICAgICByYWZJZCA9IG51bGw7XG4gICAgfVxuICB9XG4gIGlmIChpbW1lZGlhdGUpXG4gICAgcmVzdW1lKCk7XG4gIHRyeU9uU2NvcGVEaXNwb3NlKHBhdXNlKTtcbiAgcmV0dXJuIHtcbiAgICBpc0FjdGl2ZTogcmVhZG9ubHkoaXNBY3RpdmUpLFxuICAgIHBhdXNlLFxuICAgIHJlc3VtZVxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VBbmltYXRlKHRhcmdldCwga2V5ZnJhbWVzLCBvcHRpb25zKSB7XG4gIGxldCBjb25maWc7XG4gIGxldCBhbmltYXRlT3B0aW9ucztcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgY29uZmlnID0gb3B0aW9ucztcbiAgICBhbmltYXRlT3B0aW9ucyA9IG9iamVjdE9taXQob3B0aW9ucywgW1wid2luZG93XCIsIFwiaW1tZWRpYXRlXCIsIFwiY29tbWl0U3R5bGVzXCIsIFwicGVyc2lzdFwiLCBcIm9uUmVhZHlcIiwgXCJvbkVycm9yXCJdKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSB7IGR1cmF0aW9uOiBvcHRpb25zIH07XG4gICAgYW5pbWF0ZU9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIGNvbnN0IHtcbiAgICB3aW5kb3cgPSBkZWZhdWx0V2luZG93LFxuICAgIGltbWVkaWF0ZSA9IHRydWUsXG4gICAgY29tbWl0U3R5bGVzLFxuICAgIHBlcnNpc3QsXG4gICAgcGxheWJhY2tSYXRlOiBfcGxheWJhY2tSYXRlID0gMSxcbiAgICBvblJlYWR5LFxuICAgIG9uRXJyb3IgPSAoZSkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH0gPSBjb25maWc7XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gdXNlU3VwcG9ydGVkKCgpID0+IHdpbmRvdyAmJiBIVE1MRWxlbWVudCAmJiBcImFuaW1hdGVcIiBpbiBIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xuICBjb25zdCBhbmltYXRlID0gc2hhbGxvd1JlZih2b2lkIDApO1xuICBjb25zdCBzdG9yZSA9IHNoYWxsb3dSZWFjdGl2ZSh7XG4gICAgc3RhcnRUaW1lOiBudWxsLFxuICAgIGN1cnJlbnRUaW1lOiBudWxsLFxuICAgIHRpbWVsaW5lOiBudWxsLFxuICAgIHBsYXliYWNrUmF0ZTogX3BsYXliYWNrUmF0ZSxcbiAgICBwZW5kaW5nOiBmYWxzZSxcbiAgICBwbGF5U3RhdGU6IGltbWVkaWF0ZSA/IFwiaWRsZVwiIDogXCJwYXVzZWRcIixcbiAgICByZXBsYWNlU3RhdGU6IFwiYWN0aXZlXCJcbiAgfSk7XG4gIGNvbnN0IHBlbmRpbmcgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5wZW5kaW5nKTtcbiAgY29uc3QgcGxheVN0YXRlID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUucGxheVN0YXRlKTtcbiAgY29uc3QgcmVwbGFjZVN0YXRlID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUucmVwbGFjZVN0YXRlKTtcbiAgY29uc3Qgc3RhcnRUaW1lID0gY29tcHV0ZWQoe1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBzdG9yZS5zdGFydFRpbWU7XG4gICAgfSxcbiAgICBzZXQodmFsdWUpIHtcbiAgICAgIHN0b3JlLnN0YXJ0VGltZSA9IHZhbHVlO1xuICAgICAgaWYgKGFuaW1hdGUudmFsdWUpXG4gICAgICAgIGFuaW1hdGUudmFsdWUuc3RhcnRUaW1lID0gdmFsdWU7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgY3VycmVudFRpbWUgPSBjb21wdXRlZCh7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHN0b3JlLmN1cnJlbnRUaW1lO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBzdG9yZS5jdXJyZW50VGltZSA9IHZhbHVlO1xuICAgICAgaWYgKGFuaW1hdGUudmFsdWUpIHtcbiAgICAgICAgYW5pbWF0ZS52YWx1ZS5jdXJyZW50VGltZSA9IHZhbHVlO1xuICAgICAgICBzeW5jUmVzdW1lKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgY29uc3QgdGltZWxpbmUgPSBjb21wdXRlZCh7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHN0b3JlLnRpbWVsaW5lO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBzdG9yZS50aW1lbGluZSA9IHZhbHVlO1xuICAgICAgaWYgKGFuaW1hdGUudmFsdWUpXG4gICAgICAgIGFuaW1hdGUudmFsdWUudGltZWxpbmUgPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBwbGF5YmFja1JhdGUgPSBjb21wdXRlZCh7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHN0b3JlLnBsYXliYWNrUmF0ZTtcbiAgICB9LFxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgc3RvcmUucGxheWJhY2tSYXRlID0gdmFsdWU7XG4gICAgICBpZiAoYW5pbWF0ZS52YWx1ZSlcbiAgICAgICAgYW5pbWF0ZS52YWx1ZS5wbGF5YmFja1JhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBwbGF5ID0gKCkgPT4ge1xuICAgIGlmIChhbmltYXRlLnZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhbmltYXRlLnZhbHVlLnBsYXkoKTtcbiAgICAgICAgc3luY1Jlc3VtZSgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzeW5jUGF1c2UoKTtcbiAgICAgICAgb25FcnJvcihlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBwYXVzZSA9ICgpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgdHJ5IHtcbiAgICAgIChfYSA9IGFuaW1hdGUudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfYS5wYXVzZSgpO1xuICAgICAgc3luY1BhdXNlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgb25FcnJvcihlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJldmVyc2UgPSAoKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgICFhbmltYXRlLnZhbHVlICYmIHVwZGF0ZSgpO1xuICAgIHRyeSB7XG4gICAgICAoX2EgPSBhbmltYXRlLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2EucmV2ZXJzZSgpO1xuICAgICAgc3luY1Jlc3VtZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHN5bmNQYXVzZSgpO1xuICAgICAgb25FcnJvcihlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGZpbmlzaCA9ICgpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgdHJ5IHtcbiAgICAgIChfYSA9IGFuaW1hdGUudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfYS5maW5pc2goKTtcbiAgICAgIHN5bmNQYXVzZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG9uRXJyb3IoZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHRyeSB7XG4gICAgICAoX2EgPSBhbmltYXRlLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FuY2VsKCk7XG4gICAgICBzeW5jUGF1c2UoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvbkVycm9yKGUpO1xuICAgIH1cbiAgfTtcbiAgd2F0Y2goKCkgPT4gdW5yZWZFbGVtZW50KHRhcmdldCksIChlbCkgPT4ge1xuICAgIGVsICYmIHVwZGF0ZSgpO1xuICB9KTtcbiAgd2F0Y2goKCkgPT4ga2V5ZnJhbWVzLCAodmFsdWUpID0+IHtcbiAgICAhYW5pbWF0ZS52YWx1ZSAmJiB1cGRhdGUoKTtcbiAgICBpZiAoIXVucmVmRWxlbWVudCh0YXJnZXQpICYmIGFuaW1hdGUudmFsdWUpIHtcbiAgICAgIGFuaW1hdGUudmFsdWUuZWZmZWN0ID0gbmV3IEtleWZyYW1lRWZmZWN0KFxuICAgICAgICB1bnJlZkVsZW1lbnQodGFyZ2V0KSxcbiAgICAgICAgdG9WYWx1ZSh2YWx1ZSksXG4gICAgICAgIGFuaW1hdGVPcHRpb25zXG4gICAgICApO1xuICAgIH1cbiAgfSwgeyBkZWVwOiB0cnVlIH0pO1xuICB0cnlPbk1vdW50ZWQoKCkgPT4ge1xuICAgIG5leHRUaWNrKCgpID0+IHVwZGF0ZSh0cnVlKSk7XG4gIH0pO1xuICB0cnlPblNjb3BlRGlzcG9zZShjYW5jZWwpO1xuICBmdW5jdGlvbiB1cGRhdGUoaW5pdCkge1xuICAgIGNvbnN0IGVsID0gdW5yZWZFbGVtZW50KHRhcmdldCk7XG4gICAgaWYgKCFpc1N1cHBvcnRlZC52YWx1ZSB8fCAhZWwpXG4gICAgICByZXR1cm47XG4gICAgaWYgKCFhbmltYXRlLnZhbHVlKVxuICAgICAgYW5pbWF0ZS52YWx1ZSA9IGVsLmFuaW1hdGUodG9WYWx1ZShrZXlmcmFtZXMpLCBhbmltYXRlT3B0aW9ucyk7XG4gICAgaWYgKHBlcnNpc3QpXG4gICAgICBhbmltYXRlLnZhbHVlLnBlcnNpc3QoKTtcbiAgICBpZiAoX3BsYXliYWNrUmF0ZSAhPT0gMSlcbiAgICAgIGFuaW1hdGUudmFsdWUucGxheWJhY2tSYXRlID0gX3BsYXliYWNrUmF0ZTtcbiAgICBpZiAoaW5pdCAmJiAhaW1tZWRpYXRlKVxuICAgICAgYW5pbWF0ZS52YWx1ZS5wYXVzZSgpO1xuICAgIGVsc2VcbiAgICAgIHN5bmNSZXN1bWUoKTtcbiAgICBvblJlYWR5ID09IG51bGwgPyB2b2lkIDAgOiBvblJlYWR5KGFuaW1hdGUudmFsdWUpO1xuICB9XG4gIHVzZUV2ZW50TGlzdGVuZXIoYW5pbWF0ZSwgW1wiY2FuY2VsXCIsIFwiZmluaXNoXCIsIFwicmVtb3ZlXCJdLCBzeW5jUGF1c2UpO1xuICB1c2VFdmVudExpc3RlbmVyKGFuaW1hdGUsIFwiZmluaXNoXCIsICgpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKGNvbW1pdFN0eWxlcylcbiAgICAgIChfYSA9IGFuaW1hdGUudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jb21taXRTdHlsZXMoKTtcbiAgfSk7XG4gIGNvbnN0IHsgcmVzdW1lOiByZXN1bWVSZWYsIHBhdXNlOiBwYXVzZVJlZiB9ID0gdXNlUmFmRm4oKCkgPT4ge1xuICAgIGlmICghYW5pbWF0ZS52YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBzdG9yZS5wZW5kaW5nID0gYW5pbWF0ZS52YWx1ZS5wZW5kaW5nO1xuICAgIHN0b3JlLnBsYXlTdGF0ZSA9IGFuaW1hdGUudmFsdWUucGxheVN0YXRlO1xuICAgIHN0b3JlLnJlcGxhY2VTdGF0ZSA9IGFuaW1hdGUudmFsdWUucmVwbGFjZVN0YXRlO1xuICAgIHN0b3JlLnN0YXJ0VGltZSA9IGFuaW1hdGUudmFsdWUuc3RhcnRUaW1lO1xuICAgIHN0b3JlLmN1cnJlbnRUaW1lID0gYW5pbWF0ZS52YWx1ZS5jdXJyZW50VGltZTtcbiAgICBzdG9yZS50aW1lbGluZSA9IGFuaW1hdGUudmFsdWUudGltZWxpbmU7XG4gICAgc3RvcmUucGxheWJhY2tSYXRlID0gYW5pbWF0ZS52YWx1ZS5wbGF5YmFja1JhdGU7XG4gIH0sIHsgaW1tZWRpYXRlOiBmYWxzZSB9KTtcbiAgZnVuY3Rpb24gc3luY1Jlc3VtZSgpIHtcbiAgICBpZiAoaXNTdXBwb3J0ZWQudmFsdWUpXG4gICAgICByZXN1bWVSZWYoKTtcbiAgfVxuICBmdW5jdGlvbiBzeW5jUGF1c2UoKSB7XG4gICAgaWYgKGlzU3VwcG9ydGVkLnZhbHVlICYmIHdpbmRvdylcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocGF1c2VSZWYpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXNTdXBwb3J0ZWQsXG4gICAgYW5pbWF0ZSxcbiAgICAvLyBhY3Rpb25zXG4gICAgcGxheSxcbiAgICBwYXVzZSxcbiAgICByZXZlcnNlLFxuICAgIGZpbmlzaCxcbiAgICBjYW5jZWwsXG4gICAgLy8gc3RhdGVcbiAgICBwZW5kaW5nLFxuICAgIHBsYXlTdGF0ZSxcbiAgICByZXBsYWNlU3RhdGUsXG4gICAgc3RhcnRUaW1lLFxuICAgIGN1cnJlbnRUaW1lLFxuICAgIHRpbWVsaW5lLFxuICAgIHBsYXliYWNrUmF0ZVxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VBc3luY1F1ZXVlKHRhc2tzLCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBpbnRlcnJ1cHQgPSB0cnVlLFxuICAgIG9uRXJyb3IgPSBub29wLFxuICAgIG9uRmluaXNoZWQgPSBub29wLFxuICAgIHNpZ25hbFxuICB9ID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3QgcHJvbWlzZVN0YXRlID0ge1xuICAgIGFib3J0ZWQ6IFwiYWJvcnRlZFwiLFxuICAgIGZ1bGZpbGxlZDogXCJmdWxmaWxsZWRcIixcbiAgICBwZW5kaW5nOiBcInBlbmRpbmdcIixcbiAgICByZWplY3RlZDogXCJyZWplY3RlZFwiXG4gIH07XG4gIGNvbnN0IGluaXRpYWxSZXN1bHQgPSBBcnJheS5mcm9tKEFycmF5LmZyb20oeyBsZW5ndGg6IHRhc2tzLmxlbmd0aCB9KSwgKCkgPT4gKHsgc3RhdGU6IHByb21pc2VTdGF0ZS5wZW5kaW5nLCBkYXRhOiBudWxsIH0pKTtcbiAgY29uc3QgcmVzdWx0ID0gcmVhY3RpdmUoaW5pdGlhbFJlc3VsdCk7XG4gIGNvbnN0IGFjdGl2ZUluZGV4ID0gcmVmKC0xKTtcbiAgaWYgKCF0YXNrcyB8fCB0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICBvbkZpbmlzaGVkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZUluZGV4LFxuICAgICAgcmVzdWx0XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVSZXN1bHQoc3RhdGUsIHJlcykge1xuICAgIGFjdGl2ZUluZGV4LnZhbHVlKys7XG4gICAgcmVzdWx0W2FjdGl2ZUluZGV4LnZhbHVlXS5kYXRhID0gcmVzO1xuICAgIHJlc3VsdFthY3RpdmVJbmRleC52YWx1ZV0uc3RhdGUgPSBzdGF0ZTtcbiAgfVxuICB0YXNrcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICByZXR1cm4gcHJldi50aGVuKChwcmV2UmVzKSA9PiB7XG4gICAgICB2YXIgX2E7XG4gICAgICBpZiAoc2lnbmFsID09IG51bGwgPyB2b2lkIDAgOiBzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICB1cGRhdGVSZXN1bHQocHJvbWlzZVN0YXRlLmFib3J0ZWQsIG5ldyBFcnJvcihcImFib3J0ZWRcIikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoKChfYSA9IHJlc3VsdFthY3RpdmVJbmRleC52YWx1ZV0pID09IG51bGwgPyB2b2lkIDAgOiBfYS5zdGF0ZSkgPT09IHByb21pc2VTdGF0ZS5yZWplY3RlZCAmJiBpbnRlcnJ1cHQpIHtcbiAgICAgICAgb25GaW5pc2hlZCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBkb25lID0gY3VycihwcmV2UmVzKS50aGVuKChjdXJyZW50UmVzKSA9PiB7XG4gICAgICAgIHVwZGF0ZVJlc3VsdChwcm9taXNlU3RhdGUuZnVsZmlsbGVkLCBjdXJyZW50UmVzKTtcbiAgICAgICAgYWN0aXZlSW5kZXgudmFsdWUgPT09IHRhc2tzLmxlbmd0aCAtIDEgJiYgb25GaW5pc2hlZCgpO1xuICAgICAgICByZXR1cm4gY3VycmVudFJlcztcbiAgICAgIH0pO1xuICAgICAgaWYgKCFzaWduYWwpXG4gICAgICAgIHJldHVybiBkb25lO1xuICAgICAgcmV0dXJuIFByb21pc2UucmFjZShbZG9uZSwgd2hlbkFib3J0ZWQoc2lnbmFsKV0pO1xuICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICBpZiAoc2lnbmFsID09IG51bGwgPyB2b2lkIDAgOiBzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICB1cGRhdGVSZXN1bHQocHJvbWlzZVN0YXRlLmFib3J0ZWQsIGUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZVJlc3VsdChwcm9taXNlU3RhdGUucmVqZWN0ZWQsIGUpO1xuICAgICAgb25FcnJvcigpO1xuICAgICAgcmV0dXJuIGU7XG4gICAgfSk7XG4gIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmVJbmRleCxcbiAgICByZXN1bHRcbiAgfTtcbn1cbmZ1bmN0aW9uIHdoZW5BYm9ydGVkKHNpZ25hbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFwiYWJvcnRlZFwiKTtcbiAgICBpZiAoc2lnbmFsLmFib3J0ZWQpXG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgIGVsc2VcbiAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKCkgPT4gcmVqZWN0KGVycm9yKSwgeyBvbmNlOiB0cnVlIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlQXN5bmNTdGF0ZShwcm9taXNlLCBpbml0aWFsU3RhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGltbWVkaWF0ZSA9IHRydWUsXG4gICAgZGVsYXkgPSAwLFxuICAgIG9uRXJyb3IgPSBub29wLFxuICAgIG9uU3VjY2VzcyA9IG5vb3AsXG4gICAgcmVzZXRPbkV4ZWN1dGUgPSB0cnVlLFxuICAgIHNoYWxsb3cgPSB0cnVlLFxuICAgIHRocm93RXJyb3JcbiAgfSA9IG9wdGlvbnMgIT0gbnVsbCA/IG9wdGlvbnMgOiB7fTtcbiAgY29uc3Qgc3RhdGUgPSBzaGFsbG93ID8gc2hhbGxvd1JlZihpbml0aWFsU3RhdGUpIDogcmVmKGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IGlzUmVhZHkgPSByZWYoZmFsc2UpO1xuICBjb25zdCBpc0xvYWRpbmcgPSByZWYoZmFsc2UpO1xuICBjb25zdCBlcnJvciA9IHNoYWxsb3dSZWYodm9pZCAwKTtcbiAgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZShkZWxheTIgPSAwLCAuLi5hcmdzKSB7XG4gICAgaWYgKHJlc2V0T25FeGVjdXRlKVxuICAgICAgc3RhdGUudmFsdWUgPSBpbml0aWFsU3RhdGU7XG4gICAgZXJyb3IudmFsdWUgPSB2b2lkIDA7XG4gICAgaXNSZWFkeS52YWx1ZSA9IGZhbHNlO1xuICAgIGlzTG9hZGluZy52YWx1ZSA9IHRydWU7XG4gICAgaWYgKGRlbGF5MiA+IDApXG4gICAgICBhd2FpdCBwcm9taXNlVGltZW91dChkZWxheTIpO1xuICAgIGNvbnN0IF9wcm9taXNlID0gdHlwZW9mIHByb21pc2UgPT09IFwiZnVuY3Rpb25cIiA/IHByb21pc2UoLi4uYXJncykgOiBwcm9taXNlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgX3Byb21pc2U7XG4gICAgICBzdGF0ZS52YWx1ZSA9IGRhdGE7XG4gICAgICBpc1JlYWR5LnZhbHVlID0gdHJ1ZTtcbiAgICAgIG9uU3VjY2VzcyhkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvci52YWx1ZSA9IGU7XG4gICAgICBvbkVycm9yKGUpO1xuICAgICAgaWYgKHRocm93RXJyb3IpXG4gICAgICAgIHRocm93IGU7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzTG9hZGluZy52YWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGUudmFsdWU7XG4gIH1cbiAgaWYgKGltbWVkaWF0ZSlcbiAgICBleGVjdXRlKGRlbGF5KTtcbiAgY29uc3Qgc2hlbGwgPSB7XG4gICAgc3RhdGUsXG4gICAgaXNSZWFkeSxcbiAgICBpc0xvYWRpbmcsXG4gICAgZXJyb3IsXG4gICAgZXhlY3V0ZVxuICB9O1xuICBmdW5jdGlvbiB3YWl0VW50aWxJc0xvYWRlZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdW50aWwoaXNMb2FkaW5nKS50b0JlKGZhbHNlKS50aGVuKCgpID0+IHJlc29sdmUoc2hlbGwpKS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgLi4uc2hlbGwsXG4gICAgdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHdhaXRVbnRpbElzTG9hZGVkKCkudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9O1xufVxuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgYXJyYXk6ICh2KSA9PiBKU09OLnN0cmluZ2lmeSh2KSxcbiAgb2JqZWN0OiAodikgPT4gSlNPTi5zdHJpbmdpZnkodiksXG4gIHNldDogKHYpID0+IEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20odikpLFxuICBtYXA6ICh2KSA9PiBKU09OLnN0cmluZ2lmeShPYmplY3QuZnJvbUVudHJpZXModikpLFxuICBudWxsOiAoKSA9PiBcIlwiXG59O1xuZnVuY3Rpb24gZ2V0RGVmYXVsdFNlcmlhbGl6YXRpb24odGFyZ2V0KSB7XG4gIGlmICghdGFyZ2V0KVxuICAgIHJldHVybiBkZWZhdWx0cy5udWxsO1xuICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgTWFwKVxuICAgIHJldHVybiBkZWZhdWx0cy5tYXA7XG4gIGVsc2UgaWYgKHRhcmdldCBpbnN0YW5jZW9mIFNldClcbiAgICByZXR1cm4gZGVmYXVsdHMuc2V0O1xuICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpXG4gICAgcmV0dXJuIGRlZmF1bHRzLmFycmF5O1xuICBlbHNlXG4gICAgcmV0dXJuIGRlZmF1bHRzLm9iamVjdDtcbn1cblxuZnVuY3Rpb24gdXNlQmFzZTY0KHRhcmdldCwgb3B0aW9ucykge1xuICBjb25zdCBiYXNlNjQgPSByZWYoXCJcIik7XG4gIGNvbnN0IHByb21pc2UgPSByZWYoKTtcbiAgZnVuY3Rpb24gZXhlY3V0ZSgpIHtcbiAgICBpZiAoIWlzQ2xpZW50KVxuICAgICAgcmV0dXJuO1xuICAgIHByb21pc2UudmFsdWUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBfdGFyZ2V0ID0gdG9WYWx1ZSh0YXJnZXQpO1xuICAgICAgICBpZiAoX3RhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgcmVzb2x2ZShcIlwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgX3RhcmdldCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHJlc29sdmUoYmxvYlRvQmFzZTY0KG5ldyBCbG9iKFtfdGFyZ2V0XSwgeyB0eXBlOiBcInRleHQvcGxhaW5cIiB9KSkpO1xuICAgICAgICB9IGVsc2UgaWYgKF90YXJnZXQgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgICAgcmVzb2x2ZShibG9iVG9CYXNlNjQoX3RhcmdldCkpO1xuICAgICAgICB9IGVsc2UgaWYgKF90YXJnZXQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJlc29sdmUod2luZG93LmJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZSguLi5uZXcgVWludDhBcnJheShfdGFyZ2V0KSkpKTtcbiAgICAgICAgfSBlbHNlIGlmIChfdGFyZ2V0IGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgICByZXNvbHZlKF90YXJnZXQudG9EYXRhVVJMKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMudHlwZSwgb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5xdWFsaXR5KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoX3RhcmdldCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgICBjb25zdCBpbWcgPSBfdGFyZ2V0LmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcbiAgICAgICAgICBpbWdMb2FkZWQoaW1nKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHJlc29sdmUoY2FudmFzLnRvRGF0YVVSTChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnR5cGUsIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucXVhbGl0eSkpO1xuICAgICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIF90YXJnZXQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBjb25zdCBfc2VyaWFsaXplRm4gPSAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5zZXJpYWxpemVyKSB8fCBnZXREZWZhdWx0U2VyaWFsaXphdGlvbihfdGFyZ2V0KTtcbiAgICAgICAgICBjb25zdCBzZXJpYWxpemVkID0gX3NlcmlhbGl6ZUZuKF90YXJnZXQpO1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKGJsb2JUb0Jhc2U2NChuZXcgQmxvYihbc2VyaWFsaXplZF0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwidGFyZ2V0IGlzIHVuc3VwcG9ydGVkIHR5cGVzXCIpKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9taXNlLnZhbHVlLnRoZW4oKHJlcykgPT4gYmFzZTY0LnZhbHVlID0gcmVzKTtcbiAgICByZXR1cm4gcHJvbWlzZS52YWx1ZTtcbiAgfVxuICBpZiAoaXNSZWYodGFyZ2V0KSB8fCB0eXBlb2YgdGFyZ2V0ID09PSBcImZ1bmN0aW9uXCIpXG4gICAgd2F0Y2godGFyZ2V0LCBleGVjdXRlLCB7IGltbWVkaWF0ZTogdHJ1ZSB9KTtcbiAgZWxzZVxuICAgIGV4ZWN1dGUoKTtcbiAgcmV0dXJuIHtcbiAgICBiYXNlNjQsXG4gICAgcHJvbWlzZSxcbiAgICBleGVjdXRlXG4gIH07XG59XG5mdW5jdGlvbiBpbWdMb2FkZWQoaW1nKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKCFpbWcuY29tcGxldGUpIHtcbiAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgICBpbWcub25lcnJvciA9IHJlamVjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBibG9iVG9CYXNlNjQoYmxvYikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGZyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBmci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgcmVzb2x2ZShlLnRhcmdldC5yZXN1bHQpO1xuICAgIH07XG4gICAgZnIub25lcnJvciA9IHJlamVjdDtcbiAgICBmci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlQmF0dGVyeShvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBuYXZpZ2F0b3IgPSBkZWZhdWx0TmF2aWdhdG9yIH0gPSBvcHRpb25zO1xuICBjb25zdCBldmVudHMgPSBbXCJjaGFyZ2luZ2NoYW5nZVwiLCBcImNoYXJnaW5ndGltZWNoYW5nZVwiLCBcImRpc2NoYXJnaW5ndGltZWNoYW5nZVwiLCBcImxldmVsY2hhbmdlXCJdO1xuICBjb25zdCBpc1N1cHBvcnRlZCA9IHVzZVN1cHBvcnRlZCgoKSA9PiBuYXZpZ2F0b3IgJiYgXCJnZXRCYXR0ZXJ5XCIgaW4gbmF2aWdhdG9yICYmIHR5cGVvZiBuYXZpZ2F0b3IuZ2V0QmF0dGVyeSA9PT0gXCJmdW5jdGlvblwiKTtcbiAgY29uc3QgY2hhcmdpbmcgPSByZWYoZmFsc2UpO1xuICBjb25zdCBjaGFyZ2luZ1RpbWUgPSByZWYoMCk7XG4gIGNvbnN0IGRpc2NoYXJnaW5nVGltZSA9IHJlZigwKTtcbiAgY29uc3QgbGV2ZWwgPSByZWYoMSk7XG4gIGxldCBiYXR0ZXJ5O1xuICBmdW5jdGlvbiB1cGRhdGVCYXR0ZXJ5SW5mbygpIHtcbiAgICBjaGFyZ2luZy52YWx1ZSA9IHRoaXMuY2hhcmdpbmc7XG4gICAgY2hhcmdpbmdUaW1lLnZhbHVlID0gdGhpcy5jaGFyZ2luZ1RpbWUgfHwgMDtcbiAgICBkaXNjaGFyZ2luZ1RpbWUudmFsdWUgPSB0aGlzLmRpc2NoYXJnaW5nVGltZSB8fCAwO1xuICAgIGxldmVsLnZhbHVlID0gdGhpcy5sZXZlbDtcbiAgfVxuICBpZiAoaXNTdXBwb3J0ZWQudmFsdWUpIHtcbiAgICBuYXZpZ2F0b3IuZ2V0QmF0dGVyeSgpLnRoZW4oKF9iYXR0ZXJ5KSA9PiB7XG4gICAgICBiYXR0ZXJ5ID0gX2JhdHRlcnk7XG4gICAgICB1cGRhdGVCYXR0ZXJ5SW5mby5jYWxsKGJhdHRlcnkpO1xuICAgICAgdXNlRXZlbnRMaXN0ZW5lcihiYXR0ZXJ5LCBldmVudHMsIHVwZGF0ZUJhdHRlcnlJbmZvLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpc1N1cHBvcnRlZCxcbiAgICBjaGFyZ2luZyxcbiAgICBjaGFyZ2luZ1RpbWUsXG4gICAgZGlzY2hhcmdpbmdUaW1lLFxuICAgIGxldmVsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZUJsdWV0b290aChvcHRpb25zKSB7XG4gIGxldCB7XG4gICAgYWNjZXB0QWxsRGV2aWNlcyA9IGZhbHNlXG4gIH0gPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCB7XG4gICAgZmlsdGVycyA9IHZvaWQgMCxcbiAgICBvcHRpb25hbFNlcnZpY2VzID0gdm9pZCAwLFxuICAgIG5hdmlnYXRvciA9IGRlZmF1bHROYXZpZ2F0b3JcbiAgfSA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gdXNlU3VwcG9ydGVkKCgpID0+IG5hdmlnYXRvciAmJiBcImJsdWV0b290aFwiIGluIG5hdmlnYXRvcik7XG4gIGNvbnN0IGRldmljZSA9IHNoYWxsb3dSZWYodm9pZCAwKTtcbiAgY29uc3QgZXJyb3IgPSBzaGFsbG93UmVmKG51bGwpO1xuICB3YXRjaChkZXZpY2UsICgpID0+IHtcbiAgICBjb25uZWN0VG9CbHVldG9vdGhHQVRUU2VydmVyKCk7XG4gIH0pO1xuICBhc3luYyBmdW5jdGlvbiByZXF1ZXN0RGV2aWNlKCkge1xuICAgIGlmICghaXNTdXBwb3J0ZWQudmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgZXJyb3IudmFsdWUgPSBudWxsO1xuICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoID4gMClcbiAgICAgIGFjY2VwdEFsbERldmljZXMgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgZGV2aWNlLnZhbHVlID0gYXdhaXQgKG5hdmlnYXRvciA9PSBudWxsID8gdm9pZCAwIDogbmF2aWdhdG9yLmJsdWV0b290aC5yZXF1ZXN0RGV2aWNlKHtcbiAgICAgICAgYWNjZXB0QWxsRGV2aWNlcyxcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgb3B0aW9uYWxTZXJ2aWNlc1xuICAgICAgfSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZXJyb3IudmFsdWUgPSBlcnI7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNlcnZlciA9IHJlZigpO1xuICBjb25zdCBpc0Nvbm5lY3RlZCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICgoX2EgPSBzZXJ2ZXIudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jb25uZWN0ZWQpIHx8IGZhbHNlO1xuICB9KTtcbiAgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvQmx1ZXRvb3RoR0FUVFNlcnZlcigpIHtcbiAgICBlcnJvci52YWx1ZSA9IG51bGw7XG4gICAgaWYgKGRldmljZS52YWx1ZSAmJiBkZXZpY2UudmFsdWUuZ2F0dCkge1xuICAgICAgZGV2aWNlLnZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoXCJnYXR0c2VydmVyZGlzY29ubmVjdGVkXCIsICgpID0+IHtcbiAgICAgIH0pO1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2VydmVyLnZhbHVlID0gYXdhaXQgZGV2aWNlLnZhbHVlLmdhdHQuY29ubmVjdCgpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yLnZhbHVlID0gZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB0cnlPbk1vdW50ZWQoKCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBpZiAoZGV2aWNlLnZhbHVlKVxuICAgICAgKF9hID0gZGV2aWNlLnZhbHVlLmdhdHQpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jb25uZWN0KCk7XG4gIH0pO1xuICB0cnlPblNjb3BlRGlzcG9zZSgoKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChkZXZpY2UudmFsdWUpXG4gICAgICAoX2EgPSBkZXZpY2UudmFsdWUuZ2F0dCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmRpc2Nvbm5lY3QoKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgaXNTdXBwb3J0ZWQsXG4gICAgaXNDb25uZWN0ZWQsXG4gICAgLy8gRGV2aWNlOlxuICAgIGRldmljZSxcbiAgICByZXF1ZXN0RGV2aWNlLFxuICAgIC8vIFNlcnZlcjpcbiAgICBzZXJ2ZXIsXG4gICAgLy8gRXJyb3JzOlxuICAgIGVycm9yXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZU1lZGlhUXVlcnkocXVlcnksIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IHdpbmRvdyA9IGRlZmF1bHRXaW5kb3cgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gdXNlU3VwcG9ydGVkKCgpID0+IHdpbmRvdyAmJiBcIm1hdGNoTWVkaWFcIiBpbiB3aW5kb3cgJiYgdHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhID09PSBcImZ1bmN0aW9uXCIpO1xuICBsZXQgbWVkaWFRdWVyeTtcbiAgY29uc3QgbWF0Y2hlcyA9IHJlZihmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBtYXRjaGVzLnZhbHVlID0gZXZlbnQubWF0Y2hlcztcbiAgfTtcbiAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICBpZiAoIW1lZGlhUXVlcnkpXG4gICAgICByZXR1cm47XG4gICAgaWYgKFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiIGluIG1lZGlhUXVlcnkpXG4gICAgICBtZWRpYVF1ZXJ5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlcik7XG4gICAgZWxzZVxuICAgICAgbWVkaWFRdWVyeS5yZW1vdmVMaXN0ZW5lcihoYW5kbGVyKTtcbiAgfTtcbiAgY29uc3Qgc3RvcFdhdGNoID0gd2F0Y2hFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNTdXBwb3J0ZWQudmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgY2xlYW51cCgpO1xuICAgIG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSh0b1ZhbHVlKHF1ZXJ5KSk7XG4gICAgaWYgKFwiYWRkRXZlbnRMaXN0ZW5lclwiIGluIG1lZGlhUXVlcnkpXG4gICAgICBtZWRpYVF1ZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlcik7XG4gICAgZWxzZVxuICAgICAgbWVkaWFRdWVyeS5hZGRMaXN0ZW5lcihoYW5kbGVyKTtcbiAgICBtYXRjaGVzLnZhbHVlID0gbWVkaWFRdWVyeS5tYXRjaGVzO1xuICB9KTtcbiAgdHJ5T25TY29wZURpc3Bvc2UoKCkgPT4ge1xuICAgIHN0b3BXYXRjaCgpO1xuICAgIGNsZWFudXAoKTtcbiAgICBtZWRpYVF1ZXJ5ID0gdm9pZCAwO1xuICB9KTtcbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmNvbnN0IGJyZWFrcG9pbnRzVGFpbHdpbmQgPSB7XG4gIFwic21cIjogNjQwLFxuICBcIm1kXCI6IDc2OCxcbiAgXCJsZ1wiOiAxMDI0LFxuICBcInhsXCI6IDEyODAsXG4gIFwiMnhsXCI6IDE1MzZcbn07XG5jb25zdCBicmVha3BvaW50c0Jvb3RzdHJhcFY1ID0ge1xuICB4czogMCxcbiAgc206IDU3NixcbiAgbWQ6IDc2OCxcbiAgbGc6IDk5MixcbiAgeGw6IDEyMDAsXG4gIHh4bDogMTQwMFxufTtcbmNvbnN0IGJyZWFrcG9pbnRzVnVldGlmeVYyID0ge1xuICB4czogMCxcbiAgc206IDYwMCxcbiAgbWQ6IDk2MCxcbiAgbGc6IDEyNjQsXG4gIHhsOiAxOTA0XG59O1xuY29uc3QgYnJlYWtwb2ludHNWdWV0aWZ5VjMgPSB7XG4gIHhzOiAwLFxuICBzbTogNjAwLFxuICBtZDogOTYwLFxuICBsZzogMTI4MCxcbiAgeGw6IDE5MjAsXG4gIHh4bDogMjU2MFxufTtcbmNvbnN0IGJyZWFrcG9pbnRzVnVldGlmeSA9IGJyZWFrcG9pbnRzVnVldGlmeVYyO1xuY29uc3QgYnJlYWtwb2ludHNBbnREZXNpZ24gPSB7XG4gIHhzOiA0ODAsXG4gIHNtOiA1NzYsXG4gIG1kOiA3NjgsXG4gIGxnOiA5OTIsXG4gIHhsOiAxMjAwLFxuICB4eGw6IDE2MDBcbn07XG5jb25zdCBicmVha3BvaW50c1F1YXNhciA9IHtcbiAgeHM6IDAsXG4gIHNtOiA2MDAsXG4gIG1kOiAxMDI0LFxuICBsZzogMTQ0MCxcbiAgeGw6IDE5MjBcbn07XG5jb25zdCBicmVha3BvaW50c1NlbWF0aWMgPSB7XG4gIG1vYmlsZVM6IDMyMCxcbiAgbW9iaWxlTTogMzc1LFxuICBtb2JpbGVMOiA0MjUsXG4gIHRhYmxldDogNzY4LFxuICBsYXB0b3A6IDEwMjQsXG4gIGxhcHRvcEw6IDE0NDAsXG4gIGRlc2t0b3A0SzogMjU2MFxufTtcbmNvbnN0IGJyZWFrcG9pbnRzTWFzdGVyQ3NzID0ge1xuICBcIjN4c1wiOiAzNjAsXG4gIFwiMnhzXCI6IDQ4MCxcbiAgXCJ4c1wiOiA2MDAsXG4gIFwic21cIjogNzY4LFxuICBcIm1kXCI6IDEwMjQsXG4gIFwibGdcIjogMTI4MCxcbiAgXCJ4bFwiOiAxNDQwLFxuICBcIjJ4bFwiOiAxNjAwLFxuICBcIjN4bFwiOiAxOTIwLFxuICBcIjR4bFwiOiAyNTYwXG59O1xuY29uc3QgYnJlYWtwb2ludHNQcmltZUZsZXggPSB7XG4gIHNtOiA1NzYsXG4gIG1kOiA3NjgsXG4gIGxnOiA5OTIsXG4gIHhsOiAxMjAwXG59O1xuXG5mdW5jdGlvbiB1c2VCcmVha3BvaW50cyhicmVha3BvaW50cywgb3B0aW9ucyA9IHt9KSB7XG4gIGZ1bmN0aW9uIGdldFZhbHVlKGssIGRlbHRhKSB7XG4gICAgbGV0IHYgPSB0b1ZhbHVlKGJyZWFrcG9pbnRzW3RvVmFsdWUoayldKTtcbiAgICBpZiAoZGVsdGEgIT0gbnVsbClcbiAgICAgIHYgPSBpbmNyZWFzZVdpdGhVbml0KHYsIGRlbHRhKTtcbiAgICBpZiAodHlwZW9mIHYgPT09IFwibnVtYmVyXCIpXG4gICAgICB2ID0gYCR7dn1weGA7XG4gICAgcmV0dXJuIHY7XG4gIH1cbiAgY29uc3QgeyB3aW5kb3cgPSBkZWZhdWx0V2luZG93LCBzdHJhdGVneSA9IFwibWluLXdpZHRoXCIgfSA9IG9wdGlvbnM7XG4gIGZ1bmN0aW9uIG1hdGNoKHF1ZXJ5KSB7XG4gICAgaWYgKCF3aW5kb3cpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuICB9XG4gIGNvbnN0IGdyZWF0ZXJPckVxdWFsID0gKGspID0+IHtcbiAgICByZXR1cm4gdXNlTWVkaWFRdWVyeSgoKSA9PiBgKG1pbi13aWR0aDogJHtnZXRWYWx1ZShrKX0pYCwgb3B0aW9ucyk7XG4gIH07XG4gIGNvbnN0IHNtYWxsZXJPckVxdWFsID0gKGspID0+IHtcbiAgICByZXR1cm4gdXNlTWVkaWFRdWVyeSgoKSA9PiBgKG1heC13aWR0aDogJHtnZXRWYWx1ZShrKX0pYCwgb3B0aW9ucyk7XG4gIH07XG4gIGNvbnN0IHNob3J0Y3V0TWV0aG9kcyA9IE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5yZWR1Y2UoKHNob3J0Y3V0cywgaykgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaG9ydGN1dHMsIGssIHtcbiAgICAgIGdldDogKCkgPT4gc3RyYXRlZ3kgPT09IFwibWluLXdpZHRoXCIgPyBncmVhdGVyT3JFcXVhbChrKSA6IHNtYWxsZXJPckVxdWFsKGspLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBzaG9ydGN1dHM7XG4gIH0sIHt9KTtcbiAgZnVuY3Rpb24gY3VycmVudCgpIHtcbiAgICBjb25zdCBwb2ludHMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykubWFwKChpKSA9PiBbaSwgZ3JlYXRlck9yRXF1YWwoaSldKTtcbiAgICByZXR1cm4gY29tcHV0ZWQoKCkgPT4gcG9pbnRzLmZpbHRlcigoWywgdl0pID0+IHYudmFsdWUpLm1hcCgoW2tdKSA9PiBrKSk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc2hvcnRjdXRNZXRob2RzLCB7XG4gICAgZ3JlYXRlck9yRXF1YWwsXG4gICAgc21hbGxlck9yRXF1YWwsXG4gICAgZ3JlYXRlcihrKSB7XG4gICAgICByZXR1cm4gdXNlTWVkaWFRdWVyeSgoKSA9PiBgKG1pbi13aWR0aDogJHtnZXRWYWx1ZShrLCAwLjEpfSlgLCBvcHRpb25zKTtcbiAgICB9LFxuICAgIHNtYWxsZXIoaykge1xuICAgICAgcmV0dXJuIHVzZU1lZGlhUXVlcnkoKCkgPT4gYChtYXgtd2lkdGg6ICR7Z2V0VmFsdWUoaywgLTAuMSl9KWAsIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgYmV0d2VlbihhLCBiKSB7XG4gICAgICByZXR1cm4gdXNlTWVkaWFRdWVyeSgoKSA9PiBgKG1pbi13aWR0aDogJHtnZXRWYWx1ZShhKX0pIGFuZCAobWF4LXdpZHRoOiAke2dldFZhbHVlKGIsIC0wLjEpfSlgLCBvcHRpb25zKTtcbiAgICB9LFxuICAgIGlzR3JlYXRlcihrKSB7XG4gICAgICByZXR1cm4gbWF0Y2goYChtaW4td2lkdGg6ICR7Z2V0VmFsdWUoaywgMC4xKX0pYCk7XG4gICAgfSxcbiAgICBpc0dyZWF0ZXJPckVxdWFsKGspIHtcbiAgICAgIHJldHVybiBtYXRjaChgKG1pbi13aWR0aDogJHtnZXRWYWx1ZShrKX0pYCk7XG4gICAgfSxcbiAgICBpc1NtYWxsZXIoaykge1xuICAgICAgcmV0dXJuIG1hdGNoKGAobWF4LXdpZHRoOiAke2dldFZhbHVlKGssIC0wLjEpfSlgKTtcbiAgICB9LFxuICAgIGlzU21hbGxlck9yRXF1YWwoaykge1xuICAgICAgcmV0dXJuIG1hdGNoKGAobWF4LXdpZHRoOiAke2dldFZhbHVlKGspfSlgKTtcbiAgICB9LFxuICAgIGlzSW5CZXR3ZWVuKGEsIGIpIHtcbiAgICAgIHJldHVybiBtYXRjaChgKG1pbi13aWR0aDogJHtnZXRWYWx1ZShhKX0pIGFuZCAobWF4LXdpZHRoOiAke2dldFZhbHVlKGIsIC0wLjEpfSlgKTtcbiAgICB9LFxuICAgIGN1cnJlbnQsXG4gICAgYWN0aXZlKCkge1xuICAgICAgY29uc3QgYnBzID0gY3VycmVudCgpO1xuICAgICAgcmV0dXJuIGNvbXB1dGVkKCgpID0+IGJwcy52YWx1ZS5sZW5ndGggPT09IDAgPyBcIlwiIDogYnBzLnZhbHVlLmF0KC0xKSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlQnJvYWRjYXN0Q2hhbm5lbChvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIHdpbmRvdyA9IGRlZmF1bHRXaW5kb3dcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gdXNlU3VwcG9ydGVkKCgpID0+IHdpbmRvdyAmJiBcIkJyb2FkY2FzdENoYW5uZWxcIiBpbiB3aW5kb3cpO1xuICBjb25zdCBpc0Nsb3NlZCA9IHJlZihmYWxzZSk7XG4gIGNvbnN0IGNoYW5uZWwgPSByZWYoKTtcbiAgY29uc3QgZGF0YSA9IHJlZigpO1xuICBjb25zdCBlcnJvciA9IHNoYWxsb3dSZWYobnVsbCk7XG4gIGNvbnN0IHBvc3QgPSAoZGF0YTIpID0+IHtcbiAgICBpZiAoY2hhbm5lbC52YWx1ZSlcbiAgICAgIGNoYW5uZWwudmFsdWUucG9zdE1lc3NhZ2UoZGF0YTIpO1xuICB9O1xuICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICBpZiAoY2hhbm5lbC52YWx1ZSlcbiAgICAgIGNoYW5uZWwudmFsdWUuY2xvc2UoKTtcbiAgICBpc0Nsb3NlZC52YWx1ZSA9IHRydWU7XG4gIH07XG4gIGlmIChpc1N1cHBvcnRlZC52YWx1ZSkge1xuICAgIHRyeU9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBlcnJvci52YWx1ZSA9IG51bGw7XG4gICAgICBjaGFubmVsLnZhbHVlID0gbmV3IEJyb2FkY2FzdENoYW5uZWwobmFtZSk7XG4gICAgICBjaGFubmVsLnZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChlKSA9PiB7XG4gICAgICAgIGRhdGEudmFsdWUgPSBlLmRhdGE7XG4gICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICBjaGFubmVsLnZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlZXJyb3JcIiwgKGUpID0+IHtcbiAgICAgICAgZXJyb3IudmFsdWUgPSBlO1xuICAgICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgY2hhbm5lbC52YWx1ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgICAgICBpc0Nsb3NlZC52YWx1ZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICB0cnlPblNjb3BlRGlzcG9zZSgoKSA9PiB7XG4gICAgY2xvc2UoKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgaXNTdXBwb3J0ZWQsXG4gICAgY2hhbm5lbCxcbiAgICBkYXRhLFxuICAgIHBvc3QsXG4gICAgY2xvc2UsXG4gICAgZXJyb3IsXG4gICAgaXNDbG9zZWRcbiAgfTtcbn1cblxuY29uc3QgV1JJVEFCTEVfUFJPUEVSVElFUyA9IFtcbiAgXCJoYXNoXCIsXG4gIFwiaG9zdFwiLFxuICBcImhvc3RuYW1lXCIsXG4gIFwiaHJlZlwiLFxuICBcInBhdGhuYW1lXCIsXG4gIFwicG9ydFwiLFxuICBcInByb3RvY29sXCIsXG4gIFwic2VhcmNoXCJcbl07XG5mdW5jdGlvbiB1c2VCcm93c2VyTG9jYXRpb24ob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgd2luZG93ID0gZGVmYXVsdFdpbmRvdyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcmVmcyA9IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICBXUklUQUJMRV9QUk9QRVJUSUVTLm1hcCgoa2V5KSA9PiBba2V5LCByZWYoKV0pXG4gICk7XG4gIGZvciAoY29uc3QgW2tleSwgcmVmMl0gb2Ygb2JqZWN0RW50cmllcyhyZWZzKSkge1xuICAgIHdhdGNoKHJlZjIsICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKCEod2luZG93ID09IG51bGwgPyB2b2lkIDAgOiB3aW5kb3cubG9jYXRpb24pIHx8IHdpbmRvdy5sb2NhdGlvbltrZXldID09PSB2YWx1ZSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgd2luZG93LmxvY2F0aW9uW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBidWlsZFN0YXRlID0gKHRyaWdnZXIpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgeyBzdGF0ZTogc3RhdGUyLCBsZW5ndGggfSA9ICh3aW5kb3cgPT0gbnVsbCA/IHZvaWQgMCA6IHdpbmRvdy5oaXN0b3J5KSB8fCB7fTtcbiAgICBjb25zdCB7IG9yaWdpbiB9ID0gKHdpbmRvdyA9PSBudWxsID8gdm9pZCAwIDogd2luZG93LmxvY2F0aW9uKSB8fCB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBXUklUQUJMRV9QUk9QRVJUSUVTKVxuICAgICAgcmVmc1trZXldLnZhbHVlID0gKF9hID0gd2luZG93ID09IG51bGwgPyB2b2lkIDAgOiB3aW5kb3cubG9jYXRpb24pID09IG51bGwgPyB2b2lkIDAgOiBfYVtrZXldO1xuICAgIHJldHVybiByZWFjdGl2ZSh7XG4gICAgICB0cmlnZ2VyLFxuICAgICAgc3RhdGU6IHN0YXRlMixcbiAgICAgIGxlbmd0aCxcbiAgICAgIG9yaWdpbixcbiAgICAgIC4uLnJlZnNcbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgc3RhdGUgPSByZWYoYnVpbGRTdGF0ZShcImxvYWRcIikpO1xuICBpZiAod2luZG93KSB7XG4gICAgdXNlRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwicG9wc3RhdGVcIiwgKCkgPT4gc3RhdGUudmFsdWUgPSBidWlsZFN0YXRlKFwicG9wc3RhdGVcIiksIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB1c2VFdmVudExpc3RlbmVyKHdpbmRvdywgXCJoYXNoY2hhbmdlXCIsICgpID0+IHN0YXRlLnZhbHVlID0gYnVpbGRTdGF0ZShcImhhc2hjaGFuZ2VcIiksIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHVzZUNhY2hlZChyZWZWYWx1ZSwgY29tcGFyYXRvciA9IChhLCBiKSA9PiBhID09PSBiLCB3YXRjaE9wdGlvbnMpIHtcbiAgY29uc3QgY2FjaGVkVmFsdWUgPSByZWYocmVmVmFsdWUudmFsdWUpO1xuICB3YXRjaCgoKSA9PiByZWZWYWx1ZS52YWx1ZSwgKHZhbHVlKSA9PiB7XG4gICAgaWYgKCFjb21wYXJhdG9yKHZhbHVlLCBjYWNoZWRWYWx1ZS52YWx1ZSkpXG4gICAgICBjYWNoZWRWYWx1ZS52YWx1ZSA9IHZhbHVlO1xuICB9LCB3YXRjaE9wdGlvbnMpO1xuICByZXR1cm4gY2FjaGVkVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVzZVBlcm1pc3Npb24ocGVybWlzc2lvbkRlc2MsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgY29udHJvbHMgPSBmYWxzZSxcbiAgICBuYXZpZ2F0b3IgPSBkZWZhdWx0TmF2aWdhdG9yXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBpc1N1cHBvcnRlZCA9IHVzZVN1cHBvcnRlZCgoKSA9PiBuYXZpZ2F0b3IgJiYgXCJwZXJtaXNzaW9uc1wiIGluIG5hdmlnYXRvcik7XG4gIGxldCBwZXJtaXNzaW9uU3RhdHVzO1xuICBjb25zdCBkZXNjID0gdHlwZW9mIHBlcm1pc3Npb25EZXNjID09PSBcInN0cmluZ1wiID8geyBuYW1lOiBwZXJtaXNzaW9uRGVzYyB9IDogcGVybWlzc2lvbkRlc2M7XG4gIGNvbnN0IHN0YXRlID0gcmVmKCk7XG4gIGNvbnN0IG9uQ2hhbmdlID0gKCkgPT4ge1xuICAgIGlmIChwZXJtaXNzaW9uU3RhdHVzKVxuICAgICAgc3RhdGUudmFsdWUgPSBwZXJtaXNzaW9uU3RhdHVzLnN0YXRlO1xuICB9O1xuICBjb25zdCBxdWVyeSA9IGNyZWF0ZVNpbmdsZXRvblByb21pc2UoYXN5bmMgKCkgPT4ge1xuICAgIGlmICghaXNTdXBwb3J0ZWQudmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgaWYgKCFwZXJtaXNzaW9uU3RhdHVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwZXJtaXNzaW9uU3RhdHVzID0gYXdhaXQgbmF2aWdhdG9yLnBlcm1pc3Npb25zLnF1ZXJ5KGRlc2MpO1xuICAgICAgICB1c2VFdmVudExpc3RlbmVyKHBlcm1pc3Npb25TdGF0dXMsIFwiY2hhbmdlXCIsIG9uQ2hhbmdlKTtcbiAgICAgICAgb25DaGFuZ2UoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc3RhdGUudmFsdWUgPSBcInByb21wdFwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGVybWlzc2lvblN0YXR1cztcbiAgfSk7XG4gIHF1ZXJ5KCk7XG4gIGlmIChjb250cm9scykge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZSxcbiAgICAgIGlzU3VwcG9ydGVkLFxuICAgICAgcXVlcnlcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VDbGlwYm9hcmQob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBuYXZpZ2F0b3IgPSBkZWZhdWx0TmF2aWdhdG9yLFxuICAgIHJlYWQgPSBmYWxzZSxcbiAgICBzb3VyY2UsXG4gICAgY29waWVkRHVyaW5nID0gMTUwMCxcbiAgICBsZWdhY3kgPSBmYWxzZVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgaXNDbGlwYm9hcmRBcGlTdXBwb3J0ZWQgPSB1c2VTdXBwb3J0ZWQoKCkgPT4gbmF2aWdhdG9yICYmIFwiY2xpcGJvYXJkXCIgaW4gbmF2aWdhdG9yKTtcbiAgY29uc3QgcGVybWlzc2lvblJlYWQgPSB1c2VQZXJtaXNzaW9uKFwiY2xpcGJvYXJkLXJlYWRcIik7XG4gIGNvbnN0IHBlcm1pc3Npb25Xcml0ZSA9IHVzZVBlcm1pc3Npb24oXCJjbGlwYm9hcmQtd3JpdGVcIik7XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gY29tcHV0ZWQoKCkgPT4gaXNDbGlwYm9hcmRBcGlTdXBwb3J0ZWQudmFsdWUgfHwgbGVnYWN5KTtcbiAgY29uc3QgdGV4dCA9IHJlZihcIlwiKTtcbiAgY29uc3QgY29waWVkID0gcmVmKGZhbHNlKTtcbiAgY29uc3QgdGltZW91dCA9IHVzZVRpbWVvdXRGbigoKSA9PiBjb3BpZWQudmFsdWUgPSBmYWxzZSwgY29waWVkRHVyaW5nKTtcbiAgZnVuY3Rpb24gdXBkYXRlVGV4dCgpIHtcbiAgICBpZiAoaXNDbGlwYm9hcmRBcGlTdXBwb3J0ZWQudmFsdWUgJiYgaXNBbGxvd2VkKHBlcm1pc3Npb25SZWFkLnZhbHVlKSkge1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgIHRleHQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0LnZhbHVlID0gbGVnYWN5UmVhZCgpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNTdXBwb3J0ZWQudmFsdWUgJiYgcmVhZClcbiAgICB1c2VFdmVudExpc3RlbmVyKFtcImNvcHlcIiwgXCJjdXRcIl0sIHVwZGF0ZVRleHQpO1xuICBhc3luYyBmdW5jdGlvbiBjb3B5KHZhbHVlID0gdG9WYWx1ZShzb3VyY2UpKSB7XG4gICAgaWYgKGlzU3VwcG9ydGVkLnZhbHVlICYmIHZhbHVlICE9IG51bGwpIHtcbiAgICAgIGlmIChpc0NsaXBib2FyZEFwaVN1cHBvcnRlZC52YWx1ZSAmJiBpc0FsbG93ZWQocGVybWlzc2lvbldyaXRlLnZhbHVlKSlcbiAgICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodmFsdWUpO1xuICAgICAgZWxzZVxuICAgICAgICBsZWdhY3lDb3B5KHZhbHVlKTtcbiAgICAgIHRleHQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGNvcGllZC52YWx1ZSA9IHRydWU7XG4gICAgICB0aW1lb3V0LnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGxlZ2FjeUNvcHkodmFsdWUpIHtcbiAgICBjb25zdCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICB0YS52YWx1ZSA9IHZhbHVlICE9IG51bGwgPyB2YWx1ZSA6IFwiXCI7XG4gICAgdGEuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdGEuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGEpO1xuICAgIHRhLnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICB0YS5yZW1vdmUoKTtcbiAgfVxuICBmdW5jdGlvbiBsZWdhY3lSZWFkKCkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHJldHVybiAoX2MgPSAoX2IgPSAoX2EgPSBkb2N1bWVudCA9PSBudWxsID8gdm9pZCAwIDogZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChkb2N1bWVudCkpID09IG51bGwgPyB2b2lkIDAgOiBfYi50b1N0cmluZygpKSAhPSBudWxsID8gX2MgOiBcIlwiO1xuICB9XG4gIGZ1bmN0aW9uIGlzQWxsb3dlZChzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID09PSBcImdyYW50ZWRcIiB8fCBzdGF0dXMgPT09IFwicHJvbXB0XCI7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpc1N1cHBvcnRlZCxcbiAgICB0ZXh0LFxuICAgIGNvcGllZCxcbiAgICBjb3B5XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZUNsaXBib2FyZEl0ZW1zKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgbmF2aWdhdG9yID0gZGVmYXVsdE5hdmlnYXRvcixcbiAgICByZWFkID0gZmFsc2UsXG4gICAgc291cmNlLFxuICAgIGNvcGllZER1cmluZyA9IDE1MDBcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gdXNlU3VwcG9ydGVkKCgpID0+IG5hdmlnYXRvciAmJiBcImNsaXBib2FyZFwiIGluIG5hdmlnYXRvcik7XG4gIGNvbnN0IGNvbnRlbnQgPSByZWYoW10pO1xuICBjb25zdCBjb3BpZWQgPSByZWYoZmFsc2UpO1xuICBjb25zdCB0aW1lb3V0ID0gdXNlVGltZW91dEZuKCgpID0+IGNvcGllZC52YWx1ZSA9IGZhbHNlLCBjb3BpZWREdXJpbmcpO1xuICBmdW5jdGlvbiB1cGRhdGVDb250ZW50KCkge1xuICAgIGlmIChpc1N1cHBvcnRlZC52YWx1ZSkge1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkKCkudGhlbigoaXRlbXMpID0+IHtcbiAgICAgICAgY29udGVudC52YWx1ZSA9IGl0ZW1zO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGlmIChpc1N1cHBvcnRlZC52YWx1ZSAmJiByZWFkKVxuICAgIHVzZUV2ZW50TGlzdGVuZXIoW1wiY29weVwiLCBcImN1dFwiXSwgdXBkYXRlQ29udGVudCk7XG4gIGFzeW5jIGZ1bmN0aW9uIGNvcHkodmFsdWUgPSB0b1ZhbHVlKHNvdXJjZSkpIHtcbiAgICBpZiAoaXNTdXBwb3J0ZWQudmFsdWUgJiYgdmFsdWUgIT0gbnVsbCkge1xuICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZSh2YWx1ZSk7XG4gICAgICBjb250ZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICBjb3BpZWQudmFsdWUgPSB0cnVlO1xuICAgICAgdGltZW91dC5zdGFydCgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGlzU3VwcG9ydGVkLFxuICAgIGNvbnRlbnQsXG4gICAgY29waWVkLFxuICAgIGNvcHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xvbmVGbkpTT04oc291cmNlKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNvdXJjZSkpO1xufVxuZnVuY3Rpb24gdXNlQ2xvbmVkKHNvdXJjZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGNsb25lZCA9IHJlZih7fSk7XG4gIGNvbnN0IHtcbiAgICBtYW51YWwsXG4gICAgY2xvbmUgPSBjbG9uZUZuSlNPTixcbiAgICAvLyB3YXRjaCBvcHRpb25zXG4gICAgZGVlcCA9IHRydWUsXG4gICAgaW1tZWRpYXRlID0gdHJ1ZVxuICB9ID0gb3B0aW9ucztcbiAgZnVuY3Rpb24gc3luYygpIHtcbiAgICBjbG9uZWQudmFsdWUgPSBjbG9uZSh0b1ZhbHVlKHNvdXJjZSkpO1xuICB9XG4gIGlmICghbWFudWFsICYmIChpc1JlZihzb3VyY2UpIHx8IHR5cGVvZiBzb3VyY2UgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICB3YXRjaChzb3VyY2UsIHN5bmMsIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBkZWVwLFxuICAgICAgaW1tZWRpYXRlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc3luYygpO1xuICB9XG4gIHJldHVybiB7IGNsb25lZCwgc3luYyB9O1xufVxuXG5jb25zdCBfZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB7fTtcbmNvbnN0IGdsb2JhbEtleSA9IFwiX192dWV1c2Vfc3NyX2hhbmRsZXJzX19cIjtcbmNvbnN0IGhhbmRsZXJzID0gLyogQF9fUFVSRV9fICovIGdldEhhbmRsZXJzKCk7XG5mdW5jdGlvbiBnZXRIYW5kbGVycygpIHtcbiAgaWYgKCEoZ2xvYmFsS2V5IGluIF9nbG9iYWwpKVxuICAgIF9nbG9iYWxbZ2xvYmFsS2V5XSA9IF9nbG9iYWxbZ2xvYmFsS2V5XSB8fCB7fTtcbiAgcmV0dXJuIF9nbG9iYWxbZ2xvYmFsS2V5XTtcbn1cbmZ1bmN0aW9uIGdldFNTUkhhbmRsZXIoa2V5LCBmYWxsYmFjaykge1xuICByZXR1cm4gaGFuZGxlcnNba2V5XSB8fCBmYWxsYmFjaztcbn1cbmZ1bmN0aW9uIHNldFNTUkhhbmRsZXIoa2V5LCBmbikge1xuICBoYW5kbGVyc1trZXldID0gZm47XG59XG5cbmZ1bmN0aW9uIGd1ZXNzU2VyaWFsaXplclR5cGUocmF3SW5pdCkge1xuICByZXR1cm4gcmF3SW5pdCA9PSBudWxsID8gXCJhbnlcIiA6IHJhd0luaXQgaW5zdGFuY2VvZiBTZXQgPyBcInNldFwiIDogcmF3SW5pdCBpbnN0YW5jZW9mIE1hcCA/IFwibWFwXCIgOiByYXdJbml0IGluc3RhbmNlb2YgRGF0ZSA/IFwiZGF0ZVwiIDogdHlwZW9mIHJhd0luaXQgPT09IFwiYm9vbGVhblwiID8gXCJib29sZWFuXCIgOiB0eXBlb2YgcmF3SW5pdCA9PT0gXCJzdHJpbmdcIiA/IFwic3RyaW5nXCIgOiB0eXBlb2YgcmF3SW5pdCA9PT0gXCJvYmplY3RcIiA/IFwib2JqZWN0XCIgOiAhTnVtYmVyLmlzTmFOKHJhd0luaXQpID8gXCJudW1iZXJcIiA6IFwiYW55XCI7XG59XG5cbmNvbnN0IFN0b3JhZ2VTZXJpYWxpemVycyA9IHtcbiAgYm9vbGVhbjoge1xuICAgIHJlYWQ6ICh2KSA9PiB2ID09PSBcInRydWVcIixcbiAgICB3cml0ZTogKHYpID0+IFN0cmluZyh2KVxuICB9LFxuICBvYmplY3Q6IHtcbiAgICByZWFkOiAodikgPT4gSlNPTi5wYXJzZSh2KSxcbiAgICB3cml0ZTogKHYpID0+IEpTT04uc3RyaW5naWZ5KHYpXG4gIH0sXG4gIG51bWJlcjoge1xuICAgIHJlYWQ6ICh2KSA9PiBOdW1iZXIucGFyc2VGbG9hdCh2KSxcbiAgICB3cml0ZTogKHYpID0+IFN0cmluZyh2KVxuICB9LFxuICBhbnk6IHtcbiAgICByZWFkOiAodikgPT4gdixcbiAgICB3cml0ZTogKHYpID0+IFN0cmluZyh2KVxuICB9LFxuICBzdHJpbmc6IHtcbiAgICByZWFkOiAodikgPT4gdixcbiAgICB3cml0ZTogKHYpID0+IFN0cmluZyh2KVxuICB9LFxuICBtYXA6IHtcbiAgICByZWFkOiAodikgPT4gbmV3IE1hcChKU09OLnBhcnNlKHYpKSxcbiAgICB3cml0ZTogKHYpID0+IEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20odi5lbnRyaWVzKCkpKVxuICB9LFxuICBzZXQ6IHtcbiAgICByZWFkOiAodikgPT4gbmV3IFNldChKU09OLnBhcnNlKHYpKSxcbiAgICB3cml0ZTogKHYpID0+IEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20odikpXG4gIH0sXG4gIGRhdGU6IHtcbiAgICByZWFkOiAodikgPT4gbmV3IERhdGUodiksXG4gICAgd3JpdGU6ICh2KSA9PiB2LnRvSVNPU3RyaW5nKClcbiAgfVxufTtcbmNvbnN0IGN1c3RvbVN0b3JhZ2VFdmVudE5hbWUgPSBcInZ1ZXVzZS1zdG9yYWdlXCI7XG5mdW5jdGlvbiB1c2VTdG9yYWdlKGtleSwgZGVmYXVsdHMsIHN0b3JhZ2UsIG9wdGlvbnMgPSB7fSkge1xuICB2YXIgX2E7XG4gIGNvbnN0IHtcbiAgICBmbHVzaCA9IFwicHJlXCIsXG4gICAgZGVlcCA9IHRydWUsXG4gICAgbGlzdGVuVG9TdG9yYWdlQ2hhbmdlcyA9IHRydWUsXG4gICAgd3JpdGVEZWZhdWx0cyA9IHRydWUsXG4gICAgbWVyZ2VEZWZhdWx0cyA9IGZhbHNlLFxuICAgIHNoYWxsb3csXG4gICAgd2luZG93ID0gZGVmYXVsdFdpbmRvdyxcbiAgICBldmVudEZpbHRlcixcbiAgICBvbkVycm9yID0gKGUpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfSxcbiAgICBpbml0T25Nb3VudGVkXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBkYXRhID0gKHNoYWxsb3cgPyBzaGFsbG93UmVmIDogcmVmKSh0eXBlb2YgZGVmYXVsdHMgPT09IFwiZnVuY3Rpb25cIiA/IGRlZmF1bHRzKCkgOiBkZWZhdWx0cyk7XG4gIGlmICghc3RvcmFnZSkge1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gZ2V0U1NSSGFuZGxlcihcImdldERlZmF1bHRTdG9yYWdlXCIsICgpID0+IHtcbiAgICAgICAgdmFyIF9hMjtcbiAgICAgICAgcmV0dXJuIChfYTIgPSBkZWZhdWx0V2luZG93KSA9PSBudWxsID8gdm9pZCAwIDogX2EyLmxvY2FsU3RvcmFnZTtcbiAgICAgIH0pKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgb25FcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFzdG9yYWdlKVxuICAgIHJldHVybiBkYXRhO1xuICBjb25zdCByYXdJbml0ID0gdG9WYWx1ZShkZWZhdWx0cyk7XG4gIGNvbnN0IHR5cGUgPSBndWVzc1NlcmlhbGl6ZXJUeXBlKHJhd0luaXQpO1xuICBjb25zdCBzZXJpYWxpemVyID0gKF9hID0gb3B0aW9ucy5zZXJpYWxpemVyKSAhPSBudWxsID8gX2EgOiBTdG9yYWdlU2VyaWFsaXplcnNbdHlwZV07XG4gIGNvbnN0IHsgcGF1c2U6IHBhdXNlV2F0Y2gsIHJlc3VtZTogcmVzdW1lV2F0Y2ggfSA9IHBhdXNhYmxlV2F0Y2goXG4gICAgZGF0YSxcbiAgICAoKSA9PiB3cml0ZShkYXRhLnZhbHVlKSxcbiAgICB7IGZsdXNoLCBkZWVwLCBldmVudEZpbHRlciB9XG4gICk7XG4gIGlmICh3aW5kb3cgJiYgbGlzdGVuVG9TdG9yYWdlQ2hhbmdlcykge1xuICAgIHRyeU9uTW91bnRlZCgoKSA9PiB7XG4gICAgICB1c2VFdmVudExpc3RlbmVyKHdpbmRvdywgXCJzdG9yYWdlXCIsIHVwZGF0ZSk7XG4gICAgICB1c2VFdmVudExpc3RlbmVyKHdpbmRvdywgY3VzdG9tU3RvcmFnZUV2ZW50TmFtZSwgdXBkYXRlRnJvbUN1c3RvbUV2ZW50KTtcbiAgICAgIGlmIChpbml0T25Nb3VudGVkKVxuICAgICAgICB1cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoIWluaXRPbk1vdW50ZWQpXG4gICAgdXBkYXRlKCk7XG4gIGZ1bmN0aW9uIGRpc3BhdGNoV3JpdGVFdmVudChvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICBpZiAod2luZG93KSB7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoY3VzdG9tU3RvcmFnZUV2ZW50TmFtZSwge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgb2xkVmFsdWUsXG4gICAgICAgICAgbmV3VmFsdWUsXG4gICAgICAgICAgc3RvcmFnZUFyZWE6IHN0b3JhZ2VcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB3cml0ZSh2KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gc3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICBpZiAodiA9PSBudWxsKSB7XG4gICAgICAgIGRpc3BhdGNoV3JpdGVFdmVudChvbGRWYWx1ZSwgbnVsbCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZXIud3JpdGUodik7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gc2VyaWFsaXplZCkge1xuICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXksIHNlcmlhbGl6ZWQpO1xuICAgICAgICAgIGRpc3BhdGNoV3JpdGVFdmVudChvbGRWYWx1ZSwgc2VyaWFsaXplZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvbkVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiByZWFkKGV2ZW50KSB7XG4gICAgY29uc3QgcmF3VmFsdWUgPSBldmVudCA/IGV2ZW50Lm5ld1ZhbHVlIDogc3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgaWYgKHJhd1ZhbHVlID09IG51bGwpIHtcbiAgICAgIGlmICh3cml0ZURlZmF1bHRzICYmIHJhd0luaXQgIT0gbnVsbClcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSwgc2VyaWFsaXplci53cml0ZShyYXdJbml0KSk7XG4gICAgICByZXR1cm4gcmF3SW5pdDtcbiAgICB9IGVsc2UgaWYgKCFldmVudCAmJiBtZXJnZURlZmF1bHRzKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHNlcmlhbGl6ZXIucmVhZChyYXdWYWx1ZSk7XG4gICAgICBpZiAodHlwZW9mIG1lcmdlRGVmYXVsdHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuIG1lcmdlRGVmYXVsdHModmFsdWUsIHJhd0luaXQpO1xuICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpXG4gICAgICAgIHJldHVybiB7IC4uLnJhd0luaXQsIC4uLnZhbHVlIH07XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmF3VmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiByYXdWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZXIucmVhZChyYXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZShldmVudCkge1xuICAgIGlmIChldmVudCAmJiBldmVudC5zdG9yYWdlQXJlYSAhPT0gc3RvcmFnZSlcbiAgICAgIHJldHVybjtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQua2V5ID09IG51bGwpIHtcbiAgICAgIGRhdGEudmFsdWUgPSByYXdJbml0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQua2V5ICE9PSBrZXkpXG4gICAgICByZXR1cm47XG4gICAgcGF1c2VXYXRjaCgpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoKGV2ZW50ID09IG51bGwgPyB2b2lkIDAgOiBldmVudC5uZXdWYWx1ZSkgIT09IHNlcmlhbGl6ZXIud3JpdGUoZGF0YS52YWx1ZSkpXG4gICAgICAgIGRhdGEudmFsdWUgPSByZWFkKGV2ZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvbkVycm9yKGUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZXZlbnQpXG4gICAgICAgIG5leHRUaWNrKHJlc3VtZVdhdGNoKTtcbiAgICAgIGVsc2VcbiAgICAgICAgcmVzdW1lV2F0Y2goKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlRnJvbUN1c3RvbUV2ZW50KGV2ZW50KSB7XG4gICAgdXBkYXRlKGV2ZW50LmRldGFpbCk7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIHVzZVByZWZlcnJlZERhcmsob3B0aW9ucykge1xuICByZXR1cm4gdXNlTWVkaWFRdWVyeShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIiwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbG9yTW9kZShvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIHNlbGVjdG9yID0gXCJodG1sXCIsXG4gICAgYXR0cmlidXRlID0gXCJjbGFzc1wiLFxuICAgIGluaXRpYWxWYWx1ZSA9IFwiYXV0b1wiLFxuICAgIHdpbmRvdyA9IGRlZmF1bHRXaW5kb3csXG4gICAgc3RvcmFnZSxcbiAgICBzdG9yYWdlS2V5ID0gXCJ2dWV1c2UtY29sb3Itc2NoZW1lXCIsXG4gICAgbGlzdGVuVG9TdG9yYWdlQ2hhbmdlcyA9IHRydWUsXG4gICAgc3RvcmFnZVJlZixcbiAgICBlbWl0QXV0byxcbiAgICBkaXNhYmxlVHJhbnNpdGlvbiA9IHRydWVcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IG1vZGVzID0ge1xuICAgIGF1dG86IFwiXCIsXG4gICAgbGlnaHQ6IFwibGlnaHRcIixcbiAgICBkYXJrOiBcImRhcmtcIixcbiAgICAuLi5vcHRpb25zLm1vZGVzIHx8IHt9XG4gIH07XG4gIGNvbnN0IHByZWZlcnJlZERhcmsgPSB1c2VQcmVmZXJyZWREYXJrKHsgd2luZG93IH0pO1xuICBjb25zdCBzeXN0ZW0gPSBjb21wdXRlZCgoKSA9PiBwcmVmZXJyZWREYXJrLnZhbHVlID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIpO1xuICBjb25zdCBzdG9yZSA9IHN0b3JhZ2VSZWYgfHwgKHN0b3JhZ2VLZXkgPT0gbnVsbCA/IHRvUmVmKGluaXRpYWxWYWx1ZSkgOiB1c2VTdG9yYWdlKHN0b3JhZ2VLZXksIGluaXRpYWxWYWx1ZSwgc3RvcmFnZSwgeyB3aW5kb3csIGxpc3RlblRvU3RvcmFnZUNoYW5nZXMgfSkpO1xuICBjb25zdCBzdGF0ZSA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLnZhbHVlID09PSBcImF1dG9cIiA/IHN5c3RlbS52YWx1ZSA6IHN0b3JlLnZhbHVlKTtcbiAgY29uc3QgdXBkYXRlSFRNTEF0dHJzID0gZ2V0U1NSSGFuZGxlcihcbiAgICBcInVwZGF0ZUhUTUxBdHRyc1wiLFxuICAgIChzZWxlY3RvcjIsIGF0dHJpYnV0ZTIsIHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBlbCA9IHR5cGVvZiBzZWxlY3RvcjIgPT09IFwic3RyaW5nXCIgPyB3aW5kb3cgPT0gbnVsbCA/IHZvaWQgMCA6IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yMikgOiB1bnJlZkVsZW1lbnQoc2VsZWN0b3IyKTtcbiAgICAgIGlmICghZWwpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGxldCBzdHlsZTtcbiAgICAgIGlmIChkaXNhYmxlVHJhbnNpdGlvbikge1xuICAgICAgICBzdHlsZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIGNvbnN0IHN0eWxlU3RyaW5nID0gXCIqLCo6OmJlZm9yZSwqOjphZnRlcnstd2Via2l0LXRyYW5zaXRpb246bm9uZSFpbXBvcnRhbnQ7LW1vei10cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50Oy1vLXRyYW5zaXRpb246bm9uZSFpbXBvcnRhbnQ7LW1zLXRyYW5zaXRpb246bm9uZSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH1cIjtcbiAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVTdHJpbmcpKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJpYnV0ZTIgPT09IFwiY2xhc3NcIikge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdmFsdWUuc3BsaXQoL1xccy9nKTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhtb2RlcykuZmxhdE1hcCgoaSkgPT4gKGkgfHwgXCJcIikuc3BsaXQoL1xccy9nKSkuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICBpZiAoY3VycmVudC5pbmNsdWRlcyh2KSlcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQodik7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSh2KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlMiwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKGRpc2FibGVUcmFuc2l0aW9uKSB7XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN0eWxlKS5vcGFjaXR5O1xuICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG4gIGZ1bmN0aW9uIGRlZmF1bHRPbkNoYW5nZWQobW9kZSkge1xuICAgIHZhciBfYTtcbiAgICB1cGRhdGVIVE1MQXR0cnMoc2VsZWN0b3IsIGF0dHJpYnV0ZSwgKF9hID0gbW9kZXNbbW9kZV0pICE9IG51bGwgPyBfYSA6IG1vZGUpO1xuICB9XG4gIGZ1bmN0aW9uIG9uQ2hhbmdlZChtb2RlKSB7XG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2VkKVxuICAgICAgb3B0aW9ucy5vbkNoYW5nZWQobW9kZSwgZGVmYXVsdE9uQ2hhbmdlZCk7XG4gICAgZWxzZVxuICAgICAgZGVmYXVsdE9uQ2hhbmdlZChtb2RlKTtcbiAgfVxuICB3YXRjaChzdGF0ZSwgb25DaGFuZ2VkLCB7IGZsdXNoOiBcInBvc3RcIiwgaW1tZWRpYXRlOiB0cnVlIH0pO1xuICB0cnlPbk1vdW50ZWQoKCkgPT4gb25DaGFuZ2VkKHN0YXRlLnZhbHVlKSk7XG4gIGNvbnN0IGF1dG8gPSBjb21wdXRlZCh7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGVtaXRBdXRvID8gc3RvcmUudmFsdWUgOiBzdGF0ZS52YWx1ZTtcbiAgICB9LFxuICAgIHNldCh2KSB7XG4gICAgICBzdG9yZS52YWx1ZSA9IHY7XG4gICAgfVxuICB9KTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhdXRvLCB7IHN0b3JlLCBzeXN0ZW0sIHN0YXRlIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGF1dG87XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlQ29uZmlybURpYWxvZyhyZXZlYWxlZCA9IHJlZihmYWxzZSkpIHtcbiAgY29uc3QgY29uZmlybUhvb2sgPSBjcmVhdGVFdmVudEhvb2soKTtcbiAgY29uc3QgY2FuY2VsSG9vayA9IGNyZWF0ZUV2ZW50SG9vaygpO1xuICBjb25zdCByZXZlYWxIb29rID0gY3JlYXRlRXZlbnRIb29rKCk7XG4gIGxldCBfcmVzb2x2ZSA9IG5vb3A7XG4gIGNvbnN0IHJldmVhbCA9IChkYXRhKSA9PiB7XG4gICAgcmV2ZWFsSG9vay50cmlnZ2VyKGRhdGEpO1xuICAgIHJldmVhbGVkLnZhbHVlID0gdHJ1ZTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgY29uZmlybSA9IChkYXRhKSA9PiB7XG4gICAgcmV2ZWFsZWQudmFsdWUgPSBmYWxzZTtcbiAgICBjb25maXJtSG9vay50cmlnZ2VyKGRhdGEpO1xuICAgIF9yZXNvbHZlKHsgZGF0YSwgaXNDYW5jZWxlZDogZmFsc2UgfSk7XG4gIH07XG4gIGNvbnN0IGNhbmNlbCA9IChkYXRhKSA9PiB7XG4gICAgcmV2ZWFsZWQudmFsdWUgPSBmYWxzZTtcbiAgICBjYW5jZWxIb29rLnRyaWdnZXIoZGF0YSk7XG4gICAgX3Jlc29sdmUoeyBkYXRhLCBpc0NhbmNlbGVkOiB0cnVlIH0pO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGlzUmV2ZWFsZWQ6IGNvbXB1dGVkKCgpID0+IHJldmVhbGVkLnZhbHVlKSxcbiAgICByZXZlYWwsXG4gICAgY29uZmlybSxcbiAgICBjYW5jZWwsXG4gICAgb25SZXZlYWw6IHJldmVhbEhvb2sub24sXG4gICAgb25Db25maXJtOiBjb25maXJtSG9vay5vbixcbiAgICBvbkNhbmNlbDogY2FuY2VsSG9vay5vblxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VDc3NWYXIocHJvcCwgdGFyZ2V0LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyB3aW5kb3cgPSBkZWZhdWx0V2luZG93LCBpbml0aWFsVmFsdWUgPSBcIlwiLCBvYnNlcnZlID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHZhcmlhYmxlID0gcmVmKGluaXRpYWxWYWx1ZSk7XG4gIGNvbnN0IGVsUmVmID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gdW5yZWZFbGVtZW50KHRhcmdldCkgfHwgKChfYSA9IHdpbmRvdyA9PSBudWxsID8gdm9pZCAwIDogd2luZG93LmRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2EuZG9jdW1lbnRFbGVtZW50KTtcbiAgfSk7XG4gIGZ1bmN0aW9uIHVwZGF0ZUNzc1ZhcigpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3Qga2V5ID0gdG9WYWx1ZShwcm9wKTtcbiAgICBjb25zdCBlbCA9IHRvVmFsdWUoZWxSZWYpO1xuICAgIGlmIChlbCAmJiB3aW5kb3cpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gKF9hID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoa2V5KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnRyaW0oKTtcbiAgICAgIHZhcmlhYmxlLnZhbHVlID0gdmFsdWUgfHwgaW5pdGlhbFZhbHVlO1xuICAgIH1cbiAgfVxuICBpZiAob2JzZXJ2ZSkge1xuICAgIHVzZU11dGF0aW9uT2JzZXJ2ZXIoZWxSZWYsIHVwZGF0ZUNzc1Zhciwge1xuICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXCJzdHlsZVwiLCBcImNsYXNzXCJdLFxuICAgICAgd2luZG93XG4gICAgfSk7XG4gIH1cbiAgd2F0Y2goXG4gICAgW2VsUmVmLCAoKSA9PiB0b1ZhbHVlKHByb3ApXSxcbiAgICB1cGRhdGVDc3NWYXIsXG4gICAgeyBpbW1lZGlhdGU6IHRydWUgfVxuICApO1xuICB3YXRjaChcbiAgICB2YXJpYWJsZSxcbiAgICAodmFsKSA9PiB7XG4gICAgICB2YXIgX2E7XG4gICAgICBpZiAoKF9hID0gZWxSZWYudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfYS5zdHlsZSlcbiAgICAgICAgZWxSZWYudmFsdWUuc3R5bGUuc2V0UHJvcGVydHkodG9WYWx1ZShwcm9wKSwgdmFsKTtcbiAgICB9XG4gICk7XG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdXNlQ3VycmVudEVsZW1lbnQocm9vdENvbXBvbmVudCkge1xuICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpO1xuICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGNvbXB1dGVkV2l0aENvbnRyb2woXG4gICAgKCkgPT4gbnVsbCxcbiAgICAoKSA9PiByb290Q29tcG9uZW50ID8gdW5yZWZFbGVtZW50KHJvb3RDb21wb25lbnQpIDogdm0ucHJveHkuJGVsXG4gICk7XG4gIG9uVXBkYXRlZChjdXJyZW50RWxlbWVudC50cmlnZ2VyKTtcbiAgb25Nb3VudGVkKGN1cnJlbnRFbGVtZW50LnRyaWdnZXIpO1xuICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHVzZUN5Y2xlTGlzdChsaXN0LCBvcHRpb25zKSB7XG4gIGNvbnN0IHN0YXRlID0gc2hhbGxvd1JlZihnZXRJbml0aWFsVmFsdWUoKSk7XG4gIGNvbnN0IGxpc3RSZWYgPSB0b1JlZihsaXN0KTtcbiAgY29uc3QgaW5kZXggPSBjb21wdXRlZCh7XG4gICAgZ2V0KCkge1xuICAgICAgdmFyIF9hO1xuICAgICAgY29uc3QgdGFyZ2V0TGlzdCA9IGxpc3RSZWYudmFsdWU7XG4gICAgICBsZXQgaW5kZXgyID0gKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuZ2V0SW5kZXhPZikgPyBvcHRpb25zLmdldEluZGV4T2Yoc3RhdGUudmFsdWUsIHRhcmdldExpc3QpIDogdGFyZ2V0TGlzdC5pbmRleE9mKHN0YXRlLnZhbHVlKTtcbiAgICAgIGlmIChpbmRleDIgPCAwKVxuICAgICAgICBpbmRleDIgPSAoX2EgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmZhbGxiYWNrSW5kZXgpICE9IG51bGwgPyBfYSA6IDA7XG4gICAgICByZXR1cm4gaW5kZXgyO1xuICAgIH0sXG4gICAgc2V0KHYpIHtcbiAgICAgIHNldCh2KTtcbiAgICB9XG4gIH0pO1xuICBmdW5jdGlvbiBzZXQoaSkge1xuICAgIGNvbnN0IHRhcmdldExpc3QgPSBsaXN0UmVmLnZhbHVlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRhcmdldExpc3QubGVuZ3RoO1xuICAgIGNvbnN0IGluZGV4MiA9IChpICUgbGVuZ3RoICsgbGVuZ3RoKSAlIGxlbmd0aDtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldExpc3RbaW5kZXgyXTtcbiAgICBzdGF0ZS52YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBmdW5jdGlvbiBzaGlmdChkZWx0YSA9IDEpIHtcbiAgICByZXR1cm4gc2V0KGluZGV4LnZhbHVlICsgZGVsdGEpO1xuICB9XG4gIGZ1bmN0aW9uIG5leHQobiA9IDEpIHtcbiAgICByZXR1cm4gc2hpZnQobik7XG4gIH1cbiAgZnVuY3Rpb24gcHJldihuID0gMSkge1xuICAgIHJldHVybiBzaGlmdCgtbik7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0SW5pdGlhbFZhbHVlKCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIChfYiA9IHRvVmFsdWUoKF9hID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsVmFsdWUpICE9IG51bGwgPyBfYSA6IHRvVmFsdWUobGlzdClbMF0pKSAhPSBudWxsID8gX2IgOiB2b2lkIDA7XG4gIH1cbiAgd2F0Y2gobGlzdFJlZiwgKCkgPT4gc2V0KGluZGV4LnZhbHVlKSk7XG4gIHJldHVybiB7XG4gICAgc3RhdGUsXG4gICAgaW5kZXgsXG4gICAgbmV4dCxcbiAgICBwcmV2LFxuICAgIGdvOiBzZXRcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlRGFyayhvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIHZhbHVlRGFyayA9IFwiZGFya1wiLFxuICAgIHZhbHVlTGlnaHQgPSBcIlwiLFxuICAgIHdpbmRvdyA9IGRlZmF1bHRXaW5kb3dcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IG1vZGUgPSB1c2VDb2xvck1vZGUoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgb25DaGFuZ2VkOiAobW9kZTIsIGRlZmF1bHRIYW5kbGVyKSA9PiB7XG4gICAgICB2YXIgX2E7XG4gICAgICBpZiAob3B0aW9ucy5vbkNoYW5nZWQpXG4gICAgICAgIChfYSA9IG9wdGlvbnMub25DaGFuZ2VkKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChvcHRpb25zLCBtb2RlMiA9PT0gXCJkYXJrXCIsIGRlZmF1bHRIYW5kbGVyLCBtb2RlMik7XG4gICAgICBlbHNlXG4gICAgICAgIGRlZmF1bHRIYW5kbGVyKG1vZGUyKTtcbiAgICB9LFxuICAgIG1vZGVzOiB7XG4gICAgICBkYXJrOiB2YWx1ZURhcmssXG4gICAgICBsaWdodDogdmFsdWVMaWdodFxuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHN5c3RlbSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAobW9kZS5zeXN0ZW0pIHtcbiAgICAgIHJldHVybiBtb2RlLnN5c3RlbS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJlZmVycmVkRGFyayA9IHVzZVByZWZlcnJlZERhcmsoeyB3aW5kb3cgfSk7XG4gICAgICByZXR1cm4gcHJlZmVycmVkRGFyay52YWx1ZSA/IFwiZGFya1wiIDogXCJsaWdodFwiO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGlzRGFyayA9IGNvbXB1dGVkKHtcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gbW9kZS52YWx1ZSA9PT0gXCJkYXJrXCI7XG4gICAgfSxcbiAgICBzZXQodikge1xuICAgICAgY29uc3QgbW9kZVZhbCA9IHYgPyBcImRhcmtcIiA6IFwibGlnaHRcIjtcbiAgICAgIGlmIChzeXN0ZW0udmFsdWUgPT09IG1vZGVWYWwpXG4gICAgICAgIG1vZGUudmFsdWUgPSBcImF1dG9cIjtcbiAgICAgIGVsc2VcbiAgICAgICAgbW9kZS52YWx1ZSA9IG1vZGVWYWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGlzRGFyaztcbn1cblxuZnVuY3Rpb24gZm5CeXBhc3Modikge1xuICByZXR1cm4gdjtcbn1cbmZ1bmN0aW9uIGZuU2V0U291cmNlKHNvdXJjZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHNvdXJjZS52YWx1ZSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gZGVmYXVsdER1bXAoY2xvbmUpIHtcbiAgcmV0dXJuIGNsb25lID8gdHlwZW9mIGNsb25lID09PSBcImZ1bmN0aW9uXCIgPyBjbG9uZSA6IGNsb25lRm5KU09OIDogZm5CeXBhc3M7XG59XG5mdW5jdGlvbiBkZWZhdWx0UGFyc2UoY2xvbmUpIHtcbiAgcmV0dXJuIGNsb25lID8gdHlwZW9mIGNsb25lID09PSBcImZ1bmN0aW9uXCIgPyBjbG9uZSA6IGNsb25lRm5KU09OIDogZm5CeXBhc3M7XG59XG5mdW5jdGlvbiB1c2VNYW51YWxSZWZIaXN0b3J5KHNvdXJjZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBjbG9uZSA9IGZhbHNlLFxuICAgIGR1bXAgPSBkZWZhdWx0RHVtcChjbG9uZSksXG4gICAgcGFyc2UgPSBkZWZhdWx0UGFyc2UoY2xvbmUpLFxuICAgIHNldFNvdXJjZSA9IGZuU2V0U291cmNlXG4gIH0gPSBvcHRpb25zO1xuICBmdW5jdGlvbiBfY3JlYXRlSGlzdG9yeVJlY29yZCgpIHtcbiAgICByZXR1cm4gbWFya1Jhdyh7XG4gICAgICBzbmFwc2hvdDogZHVtcChzb3VyY2UudmFsdWUpLFxuICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAoKVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGxhc3QgPSByZWYoX2NyZWF0ZUhpc3RvcnlSZWNvcmQoKSk7XG4gIGNvbnN0IHVuZG9TdGFjayA9IHJlZihbXSk7XG4gIGNvbnN0IHJlZG9TdGFjayA9IHJlZihbXSk7XG4gIGNvbnN0IF9zZXRTb3VyY2UgPSAocmVjb3JkKSA9PiB7XG4gICAgc2V0U291cmNlKHNvdXJjZSwgcGFyc2UocmVjb3JkLnNuYXBzaG90KSk7XG4gICAgbGFzdC52YWx1ZSA9IHJlY29yZDtcbiAgfTtcbiAgY29uc3QgY29tbWl0ID0gKCkgPT4ge1xuICAgIHVuZG9TdGFjay52YWx1ZS51bnNoaWZ0KGxhc3QudmFsdWUpO1xuICAgIGxhc3QudmFsdWUgPSBfY3JlYXRlSGlzdG9yeVJlY29yZCgpO1xuICAgIGlmIChvcHRpb25zLmNhcGFjaXR5ICYmIHVuZG9TdGFjay52YWx1ZS5sZW5ndGggPiBvcHRpb25zLmNhcGFjaXR5KVxuICAgICAgdW5kb1N0YWNrLnZhbHVlLnNwbGljZShvcHRpb25zLmNhcGFjaXR5LCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpO1xuICAgIGlmIChyZWRvU3RhY2sudmFsdWUubGVuZ3RoKVxuICAgICAgcmVkb1N0YWNrLnZhbHVlLnNwbGljZSgwLCByZWRvU3RhY2sudmFsdWUubGVuZ3RoKTtcbiAgfTtcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgdW5kb1N0YWNrLnZhbHVlLnNwbGljZSgwLCB1bmRvU3RhY2sudmFsdWUubGVuZ3RoKTtcbiAgICByZWRvU3RhY2sudmFsdWUuc3BsaWNlKDAsIHJlZG9TdGFjay52YWx1ZS5sZW5ndGgpO1xuICB9O1xuICBjb25zdCB1bmRvID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gdW5kb1N0YWNrLnZhbHVlLnNoaWZ0KCk7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICByZWRvU3RhY2sudmFsdWUudW5zaGlmdChsYXN0LnZhbHVlKTtcbiAgICAgIF9zZXRTb3VyY2Uoc3RhdGUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVkbyA9ICgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IHJlZG9TdGFjay52YWx1ZS5zaGlmdCgpO1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgdW5kb1N0YWNrLnZhbHVlLnVuc2hpZnQobGFzdC52YWx1ZSk7XG4gICAgICBfc2V0U291cmNlKHN0YXRlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIF9zZXRTb3VyY2UobGFzdC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGhpc3RvcnkgPSBjb21wdXRlZCgoKSA9PiBbbGFzdC52YWx1ZSwgLi4udW5kb1N0YWNrLnZhbHVlXSk7XG4gIGNvbnN0IGNhblVuZG8gPSBjb21wdXRlZCgoKSA9PiB1bmRvU3RhY2sudmFsdWUubGVuZ3RoID4gMCk7XG4gIGNvbnN0IGNhblJlZG8gPSBjb21wdXRlZCgoKSA9PiByZWRvU3RhY2sudmFsdWUubGVuZ3RoID4gMCk7XG4gIHJldHVybiB7XG4gICAgc291cmNlLFxuICAgIHVuZG9TdGFjayxcbiAgICByZWRvU3RhY2ssXG4gICAgbGFzdCxcbiAgICBoaXN0b3J5LFxuICAgIGNhblVuZG8sXG4gICAgY2FuUmVkbyxcbiAgICBjbGVhcixcbiAgICBjb21taXQsXG4gICAgcmVzZXQsXG4gICAgdW5kbyxcbiAgICByZWRvXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVJlZkhpc3Rvcnkoc291cmNlLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGRlZXAgPSBmYWxzZSxcbiAgICBmbHVzaCA9IFwicHJlXCIsXG4gICAgZXZlbnRGaWx0ZXJcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHtcbiAgICBldmVudEZpbHRlcjogY29tcG9zZWRGaWx0ZXIsXG4gICAgcGF1c2UsXG4gICAgcmVzdW1lOiByZXN1bWVUcmFja2luZyxcbiAgICBpc0FjdGl2ZTogaXNUcmFja2luZ1xuICB9ID0gcGF1c2FibGVGaWx0ZXIoZXZlbnRGaWx0ZXIpO1xuICBjb25zdCB7XG4gICAgaWdub3JlVXBkYXRlcyxcbiAgICBpZ25vcmVQcmV2QXN5bmNVcGRhdGVzLFxuICAgIHN0b3BcbiAgfSA9IHdhdGNoSWdub3JhYmxlKFxuICAgIHNvdXJjZSxcbiAgICBjb21taXQsXG4gICAgeyBkZWVwLCBmbHVzaCwgZXZlbnRGaWx0ZXI6IGNvbXBvc2VkRmlsdGVyIH1cbiAgKTtcbiAgZnVuY3Rpb24gc2V0U291cmNlKHNvdXJjZTIsIHZhbHVlKSB7XG4gICAgaWdub3JlUHJldkFzeW5jVXBkYXRlcygpO1xuICAgIGlnbm9yZVVwZGF0ZXMoKCkgPT4ge1xuICAgICAgc291cmNlMi52YWx1ZSA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IG1hbnVhbEhpc3RvcnkgPSB1c2VNYW51YWxSZWZIaXN0b3J5KHNvdXJjZSwgeyAuLi5vcHRpb25zLCBjbG9uZTogb3B0aW9ucy5jbG9uZSB8fCBkZWVwLCBzZXRTb3VyY2UgfSk7XG4gIGNvbnN0IHsgY2xlYXIsIGNvbW1pdDogbWFudWFsQ29tbWl0IH0gPSBtYW51YWxIaXN0b3J5O1xuICBmdW5jdGlvbiBjb21taXQoKSB7XG4gICAgaWdub3JlUHJldkFzeW5jVXBkYXRlcygpO1xuICAgIG1hbnVhbENvbW1pdCgpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc3VtZShjb21taXROb3cpIHtcbiAgICByZXN1bWVUcmFja2luZygpO1xuICAgIGlmIChjb21taXROb3cpXG4gICAgICBjb21taXQoKTtcbiAgfVxuICBmdW5jdGlvbiBiYXRjaChmbikge1xuICAgIGxldCBjYW5jZWxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IGNhbmNlbGVkID0gdHJ1ZTtcbiAgICBpZ25vcmVVcGRhdGVzKCgpID0+IHtcbiAgICAgIGZuKGNhbmNlbCk7XG4gICAgfSk7XG4gICAgaWYgKCFjYW5jZWxlZClcbiAgICAgIGNvbW1pdCgpO1xuICB9XG4gIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgc3RvcCgpO1xuICAgIGNsZWFyKCk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAuLi5tYW51YWxIaXN0b3J5LFxuICAgIGlzVHJhY2tpbmcsXG4gICAgcGF1c2UsXG4gICAgcmVzdW1lLFxuICAgIGNvbW1pdCxcbiAgICBiYXRjaCxcbiAgICBkaXNwb3NlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZURlYm91bmNlZFJlZkhpc3Rvcnkoc291cmNlLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgZmlsdGVyID0gb3B0aW9ucy5kZWJvdW5jZSA/IGRlYm91bmNlRmlsdGVyKG9wdGlvbnMuZGVib3VuY2UpIDogdm9pZCAwO1xuICBjb25zdCBoaXN0b3J5ID0gdXNlUmVmSGlzdG9yeShzb3VyY2UsIHsgLi4ub3B0aW9ucywgZXZlbnRGaWx0ZXI6IGZpbHRlciB9KTtcbiAgcmV0dXJuIHtcbiAgICAuLi5oaXN0b3J5XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZURldmljZU1vdGlvbihvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIHdpbmRvdyA9IGRlZmF1bHRXaW5kb3csXG4gICAgZXZlbnRGaWx0ZXIgPSBieXBhc3NGaWx0ZXJcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGFjY2VsZXJhdGlvbiA9IHJlZih7IHg6IG51bGwsIHk6IG51bGwsIHo6IG51bGwgfSk7XG4gIGNvbnN0IHJvdGF0aW9uUmF0ZSA9IHJlZih7IGFscGhhOiBudWxsLCBiZXRhOiBudWxsLCBnYW1tYTogbnVsbCB9KTtcbiAgY29uc3QgaW50ZXJ2YWwgPSByZWYoMCk7XG4gIGNvbnN0IGFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkgPSByZWYoe1xuICAgIHg6IG51bGwsXG4gICAgeTogbnVsbCxcbiAgICB6OiBudWxsXG4gIH0pO1xuICBpZiAod2luZG93KSB7XG4gICAgY29uc3Qgb25EZXZpY2VNb3Rpb24gPSBjcmVhdGVGaWx0ZXJXcmFwcGVyKFxuICAgICAgZXZlbnRGaWx0ZXIsXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgYWNjZWxlcmF0aW9uLnZhbHVlID0gZXZlbnQuYWNjZWxlcmF0aW9uO1xuICAgICAgICBhY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnZhbHVlID0gZXZlbnQuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eTtcbiAgICAgICAgcm90YXRpb25SYXRlLnZhbHVlID0gZXZlbnQucm90YXRpb25SYXRlO1xuICAgICAgICBpbnRlcnZhbC52YWx1ZSA9IGV2ZW50LmludGVydmFsO1xuICAgICAgfVxuICAgICk7XG4gICAgdXNlRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwiZGV2aWNlbW90aW9uXCIsIG9uRGV2aWNlTW90aW9uKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjY2VsZXJhdGlvbixcbiAgICBhY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LFxuICAgIHJvdGF0aW9uUmF0ZSxcbiAgICBpbnRlcnZhbFxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VEZXZpY2VPcmllbnRhdGlvbihvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyB3aW5kb3cgPSBkZWZhdWx0V2luZG93IH0gPSBvcHRpb25zO1xuICBjb25zdCBpc1N1cHBvcnRlZCA9IHVzZVN1cHBvcnRlZCgoKSA9PiB3aW5kb3cgJiYgXCJEZXZpY2VPcmllbnRhdGlvbkV2ZW50XCIgaW4gd2luZG93KTtcbiAgY29uc3QgaXNBYnNvbHV0ZSA9IHJlZihmYWxzZSk7XG4gIGNvbnN0IGFscGhhID0gcmVmKG51bGwpO1xuICBjb25zdCBiZXRhID0gcmVmKG51bGwpO1xuICBjb25zdCBnYW1tYSA9IHJlZihudWxsKTtcbiAgaWYgKHdpbmRvdyAmJiBpc1N1cHBvcnRlZC52YWx1ZSkge1xuICAgIHVzZUV2ZW50TGlzdGVuZXIod2luZG93LCBcImRldmljZW9yaWVudGF0aW9uXCIsIChldmVudCkgPT4ge1xuICAgICAgaXNBYnNvbHV0ZS52YWx1ZSA9IGV2ZW50LmFic29sdXRlO1xuICAgICAgYWxwaGEudmFsdWUgPSBldmVudC5hbHBoYTtcbiAgICAgIGJldGEudmFsdWUgPSBldmVudC5iZXRhO1xuICAgICAgZ2FtbWEudmFsdWUgPSBldmVudC5nYW1tYTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlzU3VwcG9ydGVkLFxuICAgIGlzQWJzb2x1dGUsXG4gICAgYWxwaGEsXG4gICAgYmV0YSxcbiAgICBnYW1tYVxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VEZXZpY2VQaXhlbFJhdGlvKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgd2luZG93ID0gZGVmYXVsdFdpbmRvd1xuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcGl4ZWxSYXRpbyA9IHJlZigxKTtcbiAgaWYgKHdpbmRvdykge1xuICAgIGxldCBvYnNlcnZlMiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcGl4ZWxSYXRpby52YWx1ZSA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgY2xlYW51cDIoKTtcbiAgICAgIG1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEoYChyZXNvbHV0aW9uOiAke3BpeGVsUmF0aW8udmFsdWV9ZHBweClgKTtcbiAgICAgIG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgb2JzZXJ2ZTIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9LCBjbGVhbnVwMiA9IGZ1bmN0aW9uKCkge1xuICAgICAgbWVkaWEgPT0gbnVsbCA/IHZvaWQgMCA6IG1lZGlhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgb2JzZXJ2ZTIpO1xuICAgIH07XG4gICAgbGV0IG1lZGlhO1xuICAgIG9ic2VydmUyKCk7XG4gICAgdHJ5T25TY29wZURpc3Bvc2UoY2xlYW51cDIpO1xuICB9XG4gIHJldHVybiB7IHBpeGVsUmF0aW8gfTtcbn1cblxuZnVuY3Rpb24gdXNlRGV2aWNlc0xpc3Qob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBuYXZpZ2F0b3IgPSBkZWZhdWx0TmF2aWdhdG9yLFxuICAgIHJlcXVlc3RQZXJtaXNzaW9ucyA9IGZhbHNlLFxuICAgIGNvbnN0cmFpbnRzID0geyBhdWRpbzogdHJ1ZSwgdmlkZW86IHRydWUgfSxcbiAgICBvblVwZGF0ZWRcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGRldmljZXMgPSByZWYoW10pO1xuICBjb25zdCB2aWRlb0lucHV0cyA9IGNvbXB1dGVkKCgpID0+IGRldmljZXMudmFsdWUuZmlsdGVyKChpKSA9PiBpLmtpbmQgPT09IFwidmlkZW9pbnB1dFwiKSk7XG4gIGNvbnN0IGF1ZGlvSW5wdXRzID0gY29tcHV0ZWQoKCkgPT4gZGV2aWNlcy52YWx1ZS5maWx0ZXIoKGkpID0+IGkua2luZCA9PT0gXCJhdWRpb2lucHV0XCIpKTtcbiAgY29uc3QgYXVkaW9PdXRwdXRzID0gY29tcHV0ZWQoKCkgPT4gZGV2aWNlcy52YWx1ZS5maWx0ZXIoKGkpID0+IGkua2luZCA9PT0gXCJhdWRpb291dHB1dFwiKSk7XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gdXNlU3VwcG9ydGVkKCgpID0+IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyk7XG4gIGNvbnN0IHBlcm1pc3Npb25HcmFudGVkID0gcmVmKGZhbHNlKTtcbiAgbGV0IHN0cmVhbTtcbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmICghaXNTdXBwb3J0ZWQudmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgZGV2aWNlcy52YWx1ZSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xuICAgIG9uVXBkYXRlZCA9PSBudWxsID8gdm9pZCAwIDogb25VcGRhdGVkKGRldmljZXMudmFsdWUpO1xuICAgIGlmIChzdHJlYW0pIHtcbiAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKCh0KSA9PiB0LnN0b3AoKSk7XG4gICAgICBzdHJlYW0gPSBudWxsO1xuICAgIH1cbiAgfVxuICBhc3luYyBmdW5jdGlvbiBlbnN1cmVQZXJtaXNzaW9ucygpIHtcbiAgICBpZiAoIWlzU3VwcG9ydGVkLnZhbHVlKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwZXJtaXNzaW9uR3JhbnRlZC52YWx1ZSlcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IHsgc3RhdGUsIHF1ZXJ5IH0gPSB1c2VQZXJtaXNzaW9uKFwiY2FtZXJhXCIsIHsgY29udHJvbHM6IHRydWUgfSk7XG4gICAgYXdhaXQgcXVlcnkoKTtcbiAgICBpZiAoc3RhdGUudmFsdWUgIT09IFwiZ3JhbnRlZFwiKSB7XG4gICAgICBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gICAgICB1cGRhdGUoKTtcbiAgICAgIHBlcm1pc3Npb25HcmFudGVkLnZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGVybWlzc2lvbkdyYW50ZWQudmFsdWUgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcGVybWlzc2lvbkdyYW50ZWQudmFsdWU7XG4gIH1cbiAgaWYgKGlzU3VwcG9ydGVkLnZhbHVlKSB7XG4gICAgaWYgKHJlcXVlc3RQZXJtaXNzaW9ucylcbiAgICAgIGVuc3VyZVBlcm1pc3Npb25zKCk7XG4gICAgdXNlRXZlbnRMaXN0ZW5lcihuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLCBcImRldmljZWNoYW5nZVwiLCB1cGRhdGUpO1xuICAgIHVwZGF0ZSgpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGV2aWNlcyxcbiAgICBlbnN1cmVQZXJtaXNzaW9ucyxcbiAgICBwZXJtaXNzaW9uR3JhbnRlZCxcbiAgICB2aWRlb0lucHV0cyxcbiAgICBhdWRpb0lucHV0cyxcbiAgICBhdWRpb091dHB1dHMsXG4gICAgaXNTdXBwb3J0ZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlRGlzcGxheU1lZGlhKG9wdGlvbnMgPSB7fSkge1xuICB2YXIgX2E7XG4gIGNvbnN0IGVuYWJsZWQgPSByZWYoKF9hID0gb3B0aW9ucy5lbmFibGVkKSAhPSBudWxsID8gX2EgOiBmYWxzZSk7XG4gIGNvbnN0IHZpZGVvID0gb3B0aW9ucy52aWRlbztcbiAgY29uc3QgYXVkaW8gPSBvcHRpb25zLmF1ZGlvO1xuICBjb25zdCB7IG5hdmlnYXRvciA9IGRlZmF1bHROYXZpZ2F0b3IgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gdXNlU3VwcG9ydGVkKCgpID0+IHtcbiAgICB2YXIgX2EyO1xuICAgIHJldHVybiAoX2EyID0gbmF2aWdhdG9yID09IG51bGwgPyB2b2lkIDAgOiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLmdldERpc3BsYXlNZWRpYTtcbiAgfSk7XG4gIGNvbnN0IGNvbnN0cmFpbnQgPSB7IGF1ZGlvLCB2aWRlbyB9O1xuICBjb25zdCBzdHJlYW0gPSBzaGFsbG93UmVmKCk7XG4gIGFzeW5jIGZ1bmN0aW9uIF9zdGFydCgpIHtcbiAgICB2YXIgX2EyO1xuICAgIGlmICghaXNTdXBwb3J0ZWQudmFsdWUgfHwgc3RyZWFtLnZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIHN0cmVhbS52YWx1ZSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhKGNvbnN0cmFpbnQpO1xuICAgIChfYTIgPSBzdHJlYW0udmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfYTIuZ2V0VHJhY2tzKCkuZm9yRWFjaCgodCkgPT4gdC5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgc3RvcCkpO1xuICAgIHJldHVybiBzdHJlYW0udmFsdWU7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gX3N0b3AoKSB7XG4gICAgdmFyIF9hMjtcbiAgICAoX2EyID0gc3RyZWFtLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLmdldFRyYWNrcygpLmZvckVhY2goKHQpID0+IHQuc3RvcCgpKTtcbiAgICBzdHJlYW0udmFsdWUgPSB2b2lkIDA7XG4gIH1cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBfc3RvcCgpO1xuICAgIGVuYWJsZWQudmFsdWUgPSBmYWxzZTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBhd2FpdCBfc3RhcnQoKTtcbiAgICBpZiAoc3RyZWFtLnZhbHVlKVxuICAgICAgZW5hYmxlZC52YWx1ZSA9IHRydWU7XG4gICAgcmV0dXJuIHN0cmVhbS52YWx1ZTtcbiAgfVxuICB3YXRjaChcbiAgICBlbmFibGVkLFxuICAgICh2KSA9PiB7XG4gICAgICBpZiAodilcbiAgICAgICAgX3N0YXJ0KCk7XG4gICAgICBlbHNlXG4gICAgICAgIF9zdG9wKCk7XG4gICAgfSxcbiAgICB7IGltbWVkaWF0ZTogdHJ1ZSB9XG4gICk7XG4gIHJldHVybiB7XG4gICAgaXNTdXBwb3J0ZWQsXG4gICAgc3RyZWFtLFxuICAgIHN0YXJ0LFxuICAgIHN0b3AsXG4gICAgZW5hYmxlZFxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VEb2N1bWVudFZpc2liaWxpdHkob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgZG9jdW1lbnQgPSBkZWZhdWx0RG9jdW1lbnQgfSA9IG9wdGlvbnM7XG4gIGlmICghZG9jdW1lbnQpXG4gICAgcmV0dXJuIHJlZihcInZpc2libGVcIik7XG4gIGNvbnN0IHZpc2liaWxpdHkgPSByZWYoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlKTtcbiAgdXNlRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsICgpID0+IHtcbiAgICB2aXNpYmlsaXR5LnZhbHVlID0gZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlO1xuICB9KTtcbiAgcmV0dXJuIHZpc2liaWxpdHk7XG59XG5cbmZ1bmN0aW9uIHVzZURyYWdnYWJsZSh0YXJnZXQsIG9wdGlvbnMgPSB7fSkge1xuICB2YXIgX2EsIF9iO1xuICBjb25zdCB7XG4gICAgcG9pbnRlclR5cGVzLFxuICAgIHByZXZlbnREZWZhdWx0LFxuICAgIHN0b3BQcm9wYWdhdGlvbixcbiAgICBleGFjdCxcbiAgICBvbk1vdmUsXG4gICAgb25FbmQsXG4gICAgb25TdGFydCxcbiAgICBpbml0aWFsVmFsdWUsXG4gICAgYXhpcyA9IFwiYm90aFwiLFxuICAgIGRyYWdnaW5nRWxlbWVudCA9IGRlZmF1bHRXaW5kb3csXG4gICAgY29udGFpbmVyRWxlbWVudCxcbiAgICBoYW5kbGU6IGRyYWdnaW5nSGFuZGxlID0gdGFyZ2V0XG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBwb3NpdGlvbiA9IHJlZihcbiAgICAoX2EgPSB0b1ZhbHVlKGluaXRpYWxWYWx1ZSkpICE9IG51bGwgPyBfYSA6IHsgeDogMCwgeTogMCB9XG4gICk7XG4gIGNvbnN0IHByZXNzZWREZWx0YSA9IHJlZigpO1xuICBjb25zdCBmaWx0ZXJFdmVudCA9IChlKSA9PiB7XG4gICAgaWYgKHBvaW50ZXJUeXBlcylcbiAgICAgIHJldHVybiBwb2ludGVyVHlwZXMuaW5jbHVkZXMoZS5wb2ludGVyVHlwZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUV2ZW50ID0gKGUpID0+IHtcbiAgICBpZiAodG9WYWx1ZShwcmV2ZW50RGVmYXVsdCkpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRvVmFsdWUoc3RvcFByb3BhZ2F0aW9uKSlcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG4gIGNvbnN0IHN0YXJ0ID0gKGUpID0+IHtcbiAgICB2YXIgX2EyO1xuICAgIGlmIChlLmJ1dHRvbiAhPT0gMClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodG9WYWx1ZShvcHRpb25zLmRpc2FibGVkKSB8fCAhZmlsdGVyRXZlbnQoZSkpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRvVmFsdWUoZXhhY3QpICYmIGUudGFyZ2V0ICE9PSB0b1ZhbHVlKHRhcmdldCkpXG4gICAgICByZXR1cm47XG4gICAgY29uc3QgY29udGFpbmVyID0gdG9WYWx1ZShjb250YWluZXJFbGVtZW50KTtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gKF9hMiA9IGNvbnRhaW5lciA9PSBudWxsID8gdm9pZCAwIDogY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5jYWxsKGNvbnRhaW5lcik7XG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRvVmFsdWUodGFyZ2V0KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBwb3MgPSB7XG4gICAgICB4OiBlLmNsaWVudFggLSAoY29udGFpbmVyID8gdGFyZ2V0UmVjdC5sZWZ0IC0gY29udGFpbmVyUmVjdC5sZWZ0ICsgY29udGFpbmVyLnNjcm9sbExlZnQgOiB0YXJnZXRSZWN0LmxlZnQpLFxuICAgICAgeTogZS5jbGllbnRZIC0gKGNvbnRhaW5lciA/IHRhcmdldFJlY3QudG9wIC0gY29udGFpbmVyUmVjdC50b3AgKyBjb250YWluZXIuc2Nyb2xsVG9wIDogdGFyZ2V0UmVjdC50b3ApXG4gICAgfTtcbiAgICBpZiAoKG9uU3RhcnQgPT0gbnVsbCA/IHZvaWQgMCA6IG9uU3RhcnQocG9zLCBlKSkgPT09IGZhbHNlKVxuICAgICAgcmV0dXJuO1xuICAgIHByZXNzZWREZWx0YS52YWx1ZSA9IHBvcztcbiAgICBoYW5kbGVFdmVudChlKTtcbiAgfTtcbiAgY29uc3QgbW92ZSA9IChlKSA9PiB7XG4gICAgaWYgKHRvVmFsdWUob3B0aW9ucy5kaXNhYmxlZCkgfHwgIWZpbHRlckV2ZW50KGUpKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICghcHJlc3NlZERlbHRhLnZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRvVmFsdWUoY29udGFpbmVyRWxlbWVudCk7XG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRvVmFsdWUodGFyZ2V0KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgeyB4LCB5IH0gPSBwb3NpdGlvbi52YWx1ZTtcbiAgICBpZiAoYXhpcyA9PT0gXCJ4XCIgfHwgYXhpcyA9PT0gXCJib3RoXCIpIHtcbiAgICAgIHggPSBlLmNsaWVudFggLSBwcmVzc2VkRGVsdGEudmFsdWUueDtcbiAgICAgIGlmIChjb250YWluZXIpXG4gICAgICAgIHggPSBNYXRoLm1pbihNYXRoLm1heCgwLCB4KSwgY29udGFpbmVyLnNjcm9sbFdpZHRoIC0gdGFyZ2V0UmVjdC53aWR0aCk7XG4gICAgfVxuICAgIGlmIChheGlzID09PSBcInlcIiB8fCBheGlzID09PSBcImJvdGhcIikge1xuICAgICAgeSA9IGUuY2xpZW50WSAtIHByZXNzZWREZWx0YS52YWx1ZS55O1xuICAgICAgaWYgKGNvbnRhaW5lcilcbiAgICAgICAgeSA9IE1hdGgubWluKE1hdGgubWF4KDAsIHkpLCBjb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gdGFyZ2V0UmVjdC5oZWlnaHQpO1xuICAgIH1cbiAgICBwb3NpdGlvbi52YWx1ZSA9IHtcbiAgICAgIHgsXG4gICAgICB5XG4gICAgfTtcbiAgICBvbk1vdmUgPT0gbnVsbCA/IHZvaWQgMCA6IG9uTW92ZShwb3NpdGlvbi52YWx1ZSwgZSk7XG4gICAgaGFuZGxlRXZlbnQoZSk7XG4gIH07XG4gIGNvbnN0IGVuZCA9IChlKSA9PiB7XG4gICAgaWYgKHRvVmFsdWUob3B0aW9ucy5kaXNhYmxlZCkgfHwgIWZpbHRlckV2ZW50KGUpKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICghcHJlc3NlZERlbHRhLnZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIHByZXNzZWREZWx0YS52YWx1ZSA9IHZvaWQgMDtcbiAgICBvbkVuZCA9PSBudWxsID8gdm9pZCAwIDogb25FbmQocG9zaXRpb24udmFsdWUsIGUpO1xuICAgIGhhbmRsZUV2ZW50KGUpO1xuICB9O1xuICBpZiAoaXNDbGllbnQpIHtcbiAgICBjb25zdCBjb25maWcgPSB7IGNhcHR1cmU6IChfYiA9IG9wdGlvbnMuY2FwdHVyZSkgIT0gbnVsbCA/IF9iIDogdHJ1ZSB9O1xuICAgIHVzZUV2ZW50TGlzdGVuZXIoZHJhZ2dpbmdIYW5kbGUsIFwicG9pbnRlcmRvd25cIiwgc3RhcnQsIGNvbmZpZyk7XG4gICAgdXNlRXZlbnRMaXN0ZW5lcihkcmFnZ2luZ0VsZW1lbnQsIFwicG9pbnRlcm1vdmVcIiwgbW92ZSwgY29uZmlnKTtcbiAgICB1c2VFdmVudExpc3RlbmVyKGRyYWdnaW5nRWxlbWVudCwgXCJwb2ludGVydXBcIiwgZW5kLCBjb25maWcpO1xuICB9XG4gIHJldHVybiB7XG4gICAgLi4udG9SZWZzKHBvc2l0aW9uKSxcbiAgICBwb3NpdGlvbixcbiAgICBpc0RyYWdnaW5nOiBjb21wdXRlZCgoKSA9PiAhIXByZXNzZWREZWx0YS52YWx1ZSksXG4gICAgc3R5bGU6IGNvbXB1dGVkKFxuICAgICAgKCkgPT4gYGxlZnQ6JHtwb3NpdGlvbi52YWx1ZS54fXB4O3RvcDoke3Bvc2l0aW9uLnZhbHVlLnl9cHg7YFxuICAgIClcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlRHJvcFpvbmUodGFyZ2V0LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgaXNPdmVyRHJvcFpvbmUgPSByZWYoZmFsc2UpO1xuICBjb25zdCBmaWxlcyA9IHNoYWxsb3dSZWYobnVsbCk7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgbGV0IGlzRGF0YVR5cGVJbmNsdWRlZCA9IHRydWU7XG4gIGlmIChpc0NsaWVudCkge1xuICAgIGNvbnN0IF9vcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIiA/IHsgb25Ecm9wOiBvcHRpb25zIH0gOiBvcHRpb25zO1xuICAgIGNvbnN0IGdldEZpbGVzID0gKGV2ZW50KSA9PiB7XG4gICAgICB2YXIgX2EsIF9iO1xuICAgICAgY29uc3QgbGlzdCA9IEFycmF5LmZyb20oKF9iID0gKF9hID0gZXZlbnQuZGF0YVRyYW5zZmVyKSA9PSBudWxsID8gdm9pZCAwIDogX2EuZmlsZXMpICE9IG51bGwgPyBfYiA6IFtdKTtcbiAgICAgIHJldHVybiBmaWxlcy52YWx1ZSA9IGxpc3QubGVuZ3RoID09PSAwID8gbnVsbCA6IGxpc3Q7XG4gICAgfTtcbiAgICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgXCJkcmFnZW50ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB2YXIgX2EsIF9iO1xuICAgICAgY29uc3QgdHlwZXMgPSBBcnJheS5mcm9tKCgoX2EgPSBldmVudCA9PSBudWxsID8gdm9pZCAwIDogZXZlbnQuZGF0YVRyYW5zZmVyKSA9PSBudWxsID8gdm9pZCAwIDogX2EuaXRlbXMpIHx8IFtdKS5tYXAoKGkpID0+IGkua2luZCA9PT0gXCJmaWxlXCIgPyBpLnR5cGUgOiBudWxsKS5maWx0ZXIobm90TnVsbGlzaCk7XG4gICAgICBpZiAoX29wdGlvbnMuZGF0YVR5cGVzICYmIGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgICBjb25zdCBkYXRhVHlwZXMgPSB1bnJlZihfb3B0aW9ucy5kYXRhVHlwZXMpO1xuICAgICAgICBpc0RhdGFUeXBlSW5jbHVkZWQgPSB0eXBlb2YgZGF0YVR5cGVzID09PSBcImZ1bmN0aW9uXCIgPyBkYXRhVHlwZXModHlwZXMpIDogZGF0YVR5cGVzID8gZGF0YVR5cGVzLnNvbWUoKGl0ZW0pID0+IHR5cGVzLmluY2x1ZGVzKGl0ZW0pKSA6IHRydWU7XG4gICAgICAgIGlmICghaXNEYXRhVHlwZUluY2x1ZGVkKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb3VudGVyICs9IDE7XG4gICAgICBpc092ZXJEcm9wWm9uZS52YWx1ZSA9IHRydWU7XG4gICAgICAoX2IgPSBfb3B0aW9ucy5vbkVudGVyKSA9PSBudWxsID8gdm9pZCAwIDogX2IuY2FsbChfb3B0aW9ucywgZ2V0RmlsZXMoZXZlbnQpLCBldmVudCk7XG4gICAgfSk7XG4gICAgdXNlRXZlbnRMaXN0ZW5lcih0YXJnZXQsIFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB2YXIgX2E7XG4gICAgICBpZiAoIWlzRGF0YVR5cGVJbmNsdWRlZClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIChfYSA9IF9vcHRpb25zLm9uT3ZlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwoX29wdGlvbnMsIGdldEZpbGVzKGV2ZW50KSwgZXZlbnQpO1xuICAgIH0pO1xuICAgIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBcImRyYWdsZWF2ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIGlmICghaXNEYXRhVHlwZUluY2x1ZGVkKVxuICAgICAgICByZXR1cm47XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY291bnRlciAtPSAxO1xuICAgICAgaWYgKGNvdW50ZXIgPT09IDApXG4gICAgICAgIGlzT3ZlckRyb3Bab25lLnZhbHVlID0gZmFsc2U7XG4gICAgICAoX2EgPSBfb3B0aW9ucy5vbkxlYXZlKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChfb3B0aW9ucywgZ2V0RmlsZXMoZXZlbnQpLCBldmVudCk7XG4gICAgfSk7XG4gICAgdXNlRXZlbnRMaXN0ZW5lcih0YXJnZXQsIFwiZHJvcFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb3VudGVyID0gMDtcbiAgICAgIGlzT3ZlckRyb3Bab25lLnZhbHVlID0gZmFsc2U7XG4gICAgICAoX2EgPSBfb3B0aW9ucy5vbkRyb3ApID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKF9vcHRpb25zLCBnZXRGaWxlcyhldmVudCksIGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZpbGVzLFxuICAgIGlzT3ZlckRyb3Bab25lXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVJlc2l6ZU9ic2VydmVyKHRhcmdldCwgY2FsbGJhY2ssIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IHdpbmRvdyA9IGRlZmF1bHRXaW5kb3csIC4uLm9ic2VydmVyT3B0aW9ucyB9ID0gb3B0aW9ucztcbiAgbGV0IG9ic2VydmVyO1xuICBjb25zdCBpc1N1cHBvcnRlZCA9IHVzZVN1cHBvcnRlZCgoKSA9PiB3aW5kb3cgJiYgXCJSZXNpemVPYnNlcnZlclwiIGluIHdpbmRvdyk7XG4gIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICBvYnNlcnZlciA9IHZvaWQgMDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHRhcmdldHMgPSBjb21wdXRlZCgoKSA9PiBBcnJheS5pc0FycmF5KHRhcmdldCkgPyB0YXJnZXQubWFwKChlbCkgPT4gdW5yZWZFbGVtZW50KGVsKSkgOiBbdW5yZWZFbGVtZW50KHRhcmdldCldKTtcbiAgY29uc3Qgc3RvcFdhdGNoID0gd2F0Y2goXG4gICAgdGFyZ2V0cyxcbiAgICAoZWxzKSA9PiB7XG4gICAgICBjbGVhbnVwKCk7XG4gICAgICBpZiAoaXNTdXBwb3J0ZWQudmFsdWUgJiYgd2luZG93KSB7XG4gICAgICAgIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICAgICAgZm9yIChjb25zdCBfZWwgb2YgZWxzKVxuICAgICAgICAgIF9lbCAmJiBvYnNlcnZlci5vYnNlcnZlKF9lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHsgaW1tZWRpYXRlOiB0cnVlLCBmbHVzaDogXCJwb3N0XCIgfVxuICApO1xuICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgIGNsZWFudXAoKTtcbiAgICBzdG9wV2F0Y2goKTtcbiAgfTtcbiAgdHJ5T25TY29wZURpc3Bvc2Uoc3RvcCk7XG4gIHJldHVybiB7XG4gICAgaXNTdXBwb3J0ZWQsXG4gICAgc3RvcFxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VFbGVtZW50Qm91bmRpbmcodGFyZ2V0LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIHJlc2V0ID0gdHJ1ZSxcbiAgICB3aW5kb3dSZXNpemUgPSB0cnVlLFxuICAgIHdpbmRvd1Njcm9sbCA9IHRydWUsXG4gICAgaW1tZWRpYXRlID0gdHJ1ZVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgaGVpZ2h0ID0gcmVmKDApO1xuICBjb25zdCBib3R0b20gPSByZWYoMCk7XG4gIGNvbnN0IGxlZnQgPSByZWYoMCk7XG4gIGNvbnN0IHJpZ2h0ID0gcmVmKDApO1xuICBjb25zdCB0b3AgPSByZWYoMCk7XG4gIGNvbnN0IHdpZHRoID0gcmVmKDApO1xuICBjb25zdCB4ID0gcmVmKDApO1xuICBjb25zdCB5ID0gcmVmKDApO1xuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgY29uc3QgZWwgPSB1bnJlZkVsZW1lbnQodGFyZ2V0KTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgaGVpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgYm90dG9tLnZhbHVlID0gMDtcbiAgICAgICAgbGVmdC52YWx1ZSA9IDA7XG4gICAgICAgIHJpZ2h0LnZhbHVlID0gMDtcbiAgICAgICAgdG9wLnZhbHVlID0gMDtcbiAgICAgICAgd2lkdGgudmFsdWUgPSAwO1xuICAgICAgICB4LnZhbHVlID0gMDtcbiAgICAgICAgeS52YWx1ZSA9IDA7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBoZWlnaHQudmFsdWUgPSByZWN0LmhlaWdodDtcbiAgICBib3R0b20udmFsdWUgPSByZWN0LmJvdHRvbTtcbiAgICBsZWZ0LnZhbHVlID0gcmVjdC5sZWZ0O1xuICAgIHJpZ2h0LnZhbHVlID0gcmVjdC5yaWdodDtcbiAgICB0b3AudmFsdWUgPSByZWN0LnRvcDtcbiAgICB3aWR0aC52YWx1ZSA9IHJlY3Qud2lkdGg7XG4gICAgeC52YWx1ZSA9IHJlY3QueDtcbiAgICB5LnZhbHVlID0gcmVjdC55O1xuICB9XG4gIHVzZVJlc2l6ZU9ic2VydmVyKHRhcmdldCwgdXBkYXRlKTtcbiAgd2F0Y2goKCkgPT4gdW5yZWZFbGVtZW50KHRhcmdldCksIChlbGUpID0+ICFlbGUgJiYgdXBkYXRlKCkpO1xuICB1c2VNdXRhdGlvbk9ic2VydmVyKHRhcmdldCwgdXBkYXRlLCB7XG4gICAgYXR0cmlidXRlRmlsdGVyOiBbXCJzdHlsZVwiLCBcImNsYXNzXCJdXG4gIH0pO1xuICBpZiAod2luZG93U2Nyb2xsKVxuICAgIHVzZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlLCB7IGNhcHR1cmU6IHRydWUsIHBhc3NpdmU6IHRydWUgfSk7XG4gIGlmICh3aW5kb3dSZXNpemUpXG4gICAgdXNlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgdHJ5T25Nb3VudGVkKCgpID0+IHtcbiAgICBpZiAoaW1tZWRpYXRlKVxuICAgICAgdXBkYXRlKCk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGhlaWdodCxcbiAgICBib3R0b20sXG4gICAgbGVmdCxcbiAgICByaWdodCxcbiAgICB0b3AsXG4gICAgd2lkdGgsXG4gICAgeCxcbiAgICB5LFxuICAgIHVwZGF0ZVxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VFbGVtZW50QnlQb2ludChvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICB4LFxuICAgIHksXG4gICAgZG9jdW1lbnQgPSBkZWZhdWx0RG9jdW1lbnQsXG4gICAgbXVsdGlwbGUsXG4gICAgaW50ZXJ2YWwgPSBcInJlcXVlc3RBbmltYXRpb25GcmFtZVwiLFxuICAgIGltbWVkaWF0ZSA9IHRydWVcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gdXNlU3VwcG9ydGVkKCgpID0+IHtcbiAgICBpZiAodG9WYWx1ZShtdWx0aXBsZSkpXG4gICAgICByZXR1cm4gZG9jdW1lbnQgJiYgXCJlbGVtZW50c0Zyb21Qb2ludFwiIGluIGRvY3VtZW50O1xuICAgIHJldHVybiBkb2N1bWVudCAmJiBcImVsZW1lbnRGcm9tUG9pbnRcIiBpbiBkb2N1bWVudDtcbiAgfSk7XG4gIGNvbnN0IGVsZW1lbnQgPSByZWYobnVsbCk7XG4gIGNvbnN0IGNiID0gKCkgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgZWxlbWVudC52YWx1ZSA9IHRvVmFsdWUobXVsdGlwbGUpID8gKF9hID0gZG9jdW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KHRvVmFsdWUoeCksIHRvVmFsdWUoeSkpKSAhPSBudWxsID8gX2EgOiBbXSA6IChfYiA9IGRvY3VtZW50ID09IG51bGwgPyB2b2lkIDAgOiBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvVmFsdWUoeCksIHRvVmFsdWUoeSkpKSAhPSBudWxsID8gX2IgOiBudWxsO1xuICB9O1xuICBjb25zdCBjb250cm9scyA9IGludGVydmFsID09PSBcInJlcXVlc3RBbmltYXRpb25GcmFtZVwiID8gdXNlUmFmRm4oY2IsIHsgaW1tZWRpYXRlIH0pIDogdXNlSW50ZXJ2YWxGbihjYiwgaW50ZXJ2YWwsIHsgaW1tZWRpYXRlIH0pO1xuICByZXR1cm4ge1xuICAgIGlzU3VwcG9ydGVkLFxuICAgIGVsZW1lbnQsXG4gICAgLi4uY29udHJvbHNcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlRWxlbWVudEhvdmVyKGVsLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGRlbGF5RW50ZXIgPSAwLFxuICAgIGRlbGF5TGVhdmUgPSAwLFxuICAgIHdpbmRvdyA9IGRlZmF1bHRXaW5kb3dcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzSG92ZXJlZCA9IHJlZihmYWxzZSk7XG4gIGxldCB0aW1lcjtcbiAgY29uc3QgdG9nZ2xlID0gKGVudGVyaW5nKSA9PiB7XG4gICAgY29uc3QgZGVsYXkgPSBlbnRlcmluZyA/IGRlbGF5RW50ZXIgOiBkZWxheUxlYXZlO1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gdm9pZCAwO1xuICAgIH1cbiAgICBpZiAoZGVsYXkpXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gaXNIb3ZlcmVkLnZhbHVlID0gZW50ZXJpbmcsIGRlbGF5KTtcbiAgICBlbHNlXG4gICAgICBpc0hvdmVyZWQudmFsdWUgPSBlbnRlcmluZztcbiAgfTtcbiAgaWYgKCF3aW5kb3cpXG4gICAgcmV0dXJuIGlzSG92ZXJlZDtcbiAgdXNlRXZlbnRMaXN0ZW5lcihlbCwgXCJtb3VzZWVudGVyXCIsICgpID0+IHRvZ2dsZSh0cnVlKSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICB1c2VFdmVudExpc3RlbmVyKGVsLCBcIm1vdXNlbGVhdmVcIiwgKCkgPT4gdG9nZ2xlKGZhbHNlKSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICByZXR1cm4gaXNIb3ZlcmVkO1xufVxuXG5mdW5jdGlvbiB1c2VFbGVtZW50U2l6ZSh0YXJnZXQsIGluaXRpYWxTaXplID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0sIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IHdpbmRvdyA9IGRlZmF1bHRXaW5kb3csIGJveCA9IFwiY29udGVudC1ib3hcIiB9ID0gb3B0aW9ucztcbiAgY29uc3QgaXNTVkcgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICByZXR1cm4gKF9iID0gKF9hID0gdW5yZWZFbGVtZW50KHRhcmdldCkpID09IG51bGwgPyB2b2lkIDAgOiBfYS5uYW1lc3BhY2VVUkkpID09IG51bGwgPyB2b2lkIDAgOiBfYi5pbmNsdWRlcyhcInN2Z1wiKTtcbiAgfSk7XG4gIGNvbnN0IHdpZHRoID0gcmVmKGluaXRpYWxTaXplLndpZHRoKTtcbiAgY29uc3QgaGVpZ2h0ID0gcmVmKGluaXRpYWxTaXplLmhlaWdodCk7XG4gIGNvbnN0IHsgc3RvcDogc3RvcDEgfSA9IHVzZVJlc2l6ZU9ic2VydmVyKFxuICAgIHRhcmdldCxcbiAgICAoW2VudHJ5XSkgPT4ge1xuICAgICAgY29uc3QgYm94U2l6ZSA9IGJveCA9PT0gXCJib3JkZXItYm94XCIgPyBlbnRyeS5ib3JkZXJCb3hTaXplIDogYm94ID09PSBcImNvbnRlbnQtYm94XCIgPyBlbnRyeS5jb250ZW50Qm94U2l6ZSA6IGVudHJ5LmRldmljZVBpeGVsQ29udGVudEJveFNpemU7XG4gICAgICBpZiAod2luZG93ICYmIGlzU1ZHLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0ICRlbGVtID0gdW5yZWZFbGVtZW50KHRhcmdldCk7XG4gICAgICAgIGlmICgkZWxlbSkge1xuICAgICAgICAgIGNvbnN0IHJlY3QgPSAkZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICB3aWR0aC52YWx1ZSA9IHJlY3Qud2lkdGg7XG4gICAgICAgICAgaGVpZ2h0LnZhbHVlID0gcmVjdC5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChib3hTaXplKSB7XG4gICAgICAgICAgY29uc3QgZm9ybWF0Qm94U2l6ZSA9IEFycmF5LmlzQXJyYXkoYm94U2l6ZSkgPyBib3hTaXplIDogW2JveFNpemVdO1xuICAgICAgICAgIHdpZHRoLnZhbHVlID0gZm9ybWF0Qm94U2l6ZS5yZWR1Y2UoKGFjYywgeyBpbmxpbmVTaXplIH0pID0+IGFjYyArIGlubGluZVNpemUsIDApO1xuICAgICAgICAgIGhlaWdodC52YWx1ZSA9IGZvcm1hdEJveFNpemUucmVkdWNlKChhY2MsIHsgYmxvY2tTaXplIH0pID0+IGFjYyArIGJsb2NrU2l6ZSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2lkdGgudmFsdWUgPSBlbnRyeS5jb250ZW50UmVjdC53aWR0aDtcbiAgICAgICAgICBoZWlnaHQudmFsdWUgPSBlbnRyeS5jb250ZW50UmVjdC5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9wdGlvbnNcbiAgKTtcbiAgdHJ5T25Nb3VudGVkKCgpID0+IHtcbiAgICBjb25zdCBlbGUgPSB1bnJlZkVsZW1lbnQodGFyZ2V0KTtcbiAgICBpZiAoZWxlKSB7XG4gICAgICB3aWR0aC52YWx1ZSA9IFwib2Zmc2V0V2lkdGhcIiBpbiBlbGUgPyBlbGUub2Zmc2V0V2lkdGggOiBpbml0aWFsU2l6ZS53aWR0aDtcbiAgICAgIGhlaWdodC52YWx1ZSA9IFwib2Zmc2V0SGVpZ2h0XCIgaW4gZWxlID8gZWxlLm9mZnNldEhlaWdodCA6IGluaXRpYWxTaXplLmhlaWdodDtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBzdG9wMiA9IHdhdGNoKFxuICAgICgpID0+IHVucmVmRWxlbWVudCh0YXJnZXQpLFxuICAgIChlbGUpID0+IHtcbiAgICAgIHdpZHRoLnZhbHVlID0gZWxlID8gaW5pdGlhbFNpemUud2lkdGggOiAwO1xuICAgICAgaGVpZ2h0LnZhbHVlID0gZWxlID8gaW5pdGlhbFNpemUuaGVpZ2h0IDogMDtcbiAgICB9XG4gICk7XG4gIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgc3RvcDEoKTtcbiAgICBzdG9wMigpO1xuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHN0b3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGFyZ2V0LCBjYWxsYmFjaywgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICByb290LFxuICAgIHJvb3RNYXJnaW4gPSBcIjBweFwiLFxuICAgIHRocmVzaG9sZCA9IDAuMSxcbiAgICB3aW5kb3cgPSBkZWZhdWx0V2luZG93LFxuICAgIGltbWVkaWF0ZSA9IHRydWVcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gdXNlU3VwcG9ydGVkKCgpID0+IHdpbmRvdyAmJiBcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KTtcbiAgY29uc3QgdGFyZ2V0cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBfdGFyZ2V0ID0gdG9WYWx1ZSh0YXJnZXQpO1xuICAgIHJldHVybiAoQXJyYXkuaXNBcnJheShfdGFyZ2V0KSA/IF90YXJnZXQgOiBbX3RhcmdldF0pLm1hcCh1bnJlZkVsZW1lbnQpLmZpbHRlcihub3ROdWxsaXNoKTtcbiAgfSk7XG4gIGxldCBjbGVhbnVwID0gbm9vcDtcbiAgY29uc3QgaXNBY3RpdmUgPSByZWYoaW1tZWRpYXRlKTtcbiAgY29uc3Qgc3RvcFdhdGNoID0gaXNTdXBwb3J0ZWQudmFsdWUgPyB3YXRjaChcbiAgICAoKSA9PiBbdGFyZ2V0cy52YWx1ZSwgdW5yZWZFbGVtZW50KHJvb3QpLCBpc0FjdGl2ZS52YWx1ZV0sXG4gICAgKFt0YXJnZXRzMiwgcm9vdDJdKSA9PiB7XG4gICAgICBjbGVhbnVwKCk7XG4gICAgICBpZiAoIWlzQWN0aXZlLnZhbHVlKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAoIXRhcmdldHMyLmxlbmd0aClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICB7XG4gICAgICAgICAgcm9vdDogdW5yZWZFbGVtZW50KHJvb3QyKSxcbiAgICAgICAgICByb290TWFyZ2luLFxuICAgICAgICAgIHRocmVzaG9sZFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgdGFyZ2V0czIuZm9yRWFjaCgoZWwpID0+IGVsICYmIG9ic2VydmVyLm9ic2VydmUoZWwpKTtcbiAgICAgIGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgY2xlYW51cCA9IG5vb3A7XG4gICAgICB9O1xuICAgIH0sXG4gICAgeyBpbW1lZGlhdGUsIGZsdXNoOiBcInBvc3RcIiB9XG4gICkgOiBub29wO1xuICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgIGNsZWFudXAoKTtcbiAgICBzdG9wV2F0Y2goKTtcbiAgICBpc0FjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICB9O1xuICB0cnlPblNjb3BlRGlzcG9zZShzdG9wKTtcbiAgcmV0dXJuIHtcbiAgICBpc1N1cHBvcnRlZCxcbiAgICBpc0FjdGl2ZSxcbiAgICBwYXVzZSgpIHtcbiAgICAgIGNsZWFudXAoKTtcbiAgICAgIGlzQWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgfSxcbiAgICByZXN1bWUoKSB7XG4gICAgICBpc0FjdGl2ZS52YWx1ZSA9IHRydWU7XG4gICAgfSxcbiAgICBzdG9wXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZUVsZW1lbnRWaXNpYmlsaXR5KGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IHdpbmRvdyA9IGRlZmF1bHRXaW5kb3csIHNjcm9sbFRhcmdldCwgdGhyZXNob2xkID0gMCB9ID0gb3B0aW9ucztcbiAgY29uc3QgZWxlbWVudElzVmlzaWJsZSA9IHJlZihmYWxzZSk7XG4gIHVzZUludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIGVsZW1lbnQsXG4gICAgKGludGVyc2VjdGlvbk9ic2VydmVyRW50cmllcykgPT4ge1xuICAgICAgbGV0IGlzSW50ZXJzZWN0aW5nID0gZWxlbWVudElzVmlzaWJsZS52YWx1ZTtcbiAgICAgIGxldCBsYXRlc3RUaW1lID0gMDtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgaW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyaWVzKSB7XG4gICAgICAgIGlmIChlbnRyeS50aW1lID49IGxhdGVzdFRpbWUpIHtcbiAgICAgICAgICBsYXRlc3RUaW1lID0gZW50cnkudGltZTtcbiAgICAgICAgICBpc0ludGVyc2VjdGluZyA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtZW50SXNWaXNpYmxlLnZhbHVlID0gaXNJbnRlcnNlY3Rpbmc7XG4gICAgfSxcbiAgICB7XG4gICAgICByb290OiBzY3JvbGxUYXJnZXQsXG4gICAgICB3aW5kb3csXG4gICAgICB0aHJlc2hvbGRcbiAgICB9XG4gICk7XG4gIHJldHVybiBlbGVtZW50SXNWaXNpYmxlO1xufVxuXG5jb25zdCBldmVudHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXG5mdW5jdGlvbiB1c2VFdmVudEJ1cyhrZXkpIHtcbiAgY29uc3Qgc2NvcGUgPSBnZXRDdXJyZW50U2NvcGUoKTtcbiAgZnVuY3Rpb24gb24obGlzdGVuZXIpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gZXZlbnRzLmdldChrZXkpIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgZXZlbnRzLnNldChrZXksIGxpc3RlbmVycyk7XG4gICAgY29uc3QgX29mZiA9ICgpID0+IG9mZihsaXN0ZW5lcik7XG4gICAgKF9hID0gc2NvcGUgPT0gbnVsbCA/IHZvaWQgMCA6IHNjb3BlLmNsZWFudXBzKSA9PSBudWxsID8gdm9pZCAwIDogX2EucHVzaChfb2ZmKTtcbiAgICByZXR1cm4gX29mZjtcbiAgfVxuICBmdW5jdGlvbiBvbmNlKGxpc3RlbmVyKSB7XG4gICAgZnVuY3Rpb24gX2xpc3RlbmVyKC4uLmFyZ3MpIHtcbiAgICAgIG9mZihfbGlzdGVuZXIpO1xuICAgICAgbGlzdGVuZXIoLi4uYXJncyk7XG4gICAgfVxuICAgIHJldHVybiBvbihfbGlzdGVuZXIpO1xuICB9XG4gIGZ1bmN0aW9uIG9mZihsaXN0ZW5lcikge1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IGV2ZW50cy5nZXQoa2V5KTtcbiAgICBpZiAoIWxpc3RlbmVycylcbiAgICAgIHJldHVybjtcbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICBpZiAoIWxpc3RlbmVycy5zaXplKVxuICAgICAgcmVzZXQoKTtcbiAgfVxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBldmVudHMuZGVsZXRlKGtleSk7XG4gIH1cbiAgZnVuY3Rpb24gZW1pdChldmVudCwgcGF5bG9hZCkge1xuICAgIHZhciBfYTtcbiAgICAoX2EgPSBldmVudHMuZ2V0KGtleSkpID09IG51bGwgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKCh2KSA9PiB2KGV2ZW50LCBwYXlsb2FkKSk7XG4gIH1cbiAgcmV0dXJuIHsgb24sIG9uY2UsIG9mZiwgZW1pdCwgcmVzZXQgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU5lc3RlZE9wdGlvbnMkMShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB0cnVlKVxuICAgIHJldHVybiB7fTtcbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5mdW5jdGlvbiB1c2VFdmVudFNvdXJjZSh1cmwsIGV2ZW50cyA9IFtdLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgZXZlbnQgPSByZWYobnVsbCk7XG4gIGNvbnN0IGRhdGEgPSByZWYobnVsbCk7XG4gIGNvbnN0IHN0YXR1cyA9IHJlZihcIkNPTk5FQ1RJTkdcIik7XG4gIGNvbnN0IGV2ZW50U291cmNlID0gcmVmKG51bGwpO1xuICBjb25zdCBlcnJvciA9IHNoYWxsb3dSZWYobnVsbCk7XG4gIGNvbnN0IHVybFJlZiA9IHRvUmVmKHVybCk7XG4gIGNvbnN0IGxhc3RFdmVudElkID0gc2hhbGxvd1JlZihudWxsKTtcbiAgbGV0IGV4cGxpY2l0bHlDbG9zZWQgPSBmYWxzZTtcbiAgbGV0IHJldHJpZWQgPSAwO1xuICBjb25zdCB7XG4gICAgd2l0aENyZWRlbnRpYWxzID0gZmFsc2UsXG4gICAgaW1tZWRpYXRlID0gdHJ1ZVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgaWYgKGlzQ2xpZW50ICYmIGV2ZW50U291cmNlLnZhbHVlKSB7XG4gICAgICBldmVudFNvdXJjZS52YWx1ZS5jbG9zZSgpO1xuICAgICAgZXZlbnRTb3VyY2UudmFsdWUgPSBudWxsO1xuICAgICAgc3RhdHVzLnZhbHVlID0gXCJDTE9TRURcIjtcbiAgICAgIGV4cGxpY2l0bHlDbG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgX2luaXQgPSAoKSA9PiB7XG4gICAgaWYgKGV4cGxpY2l0bHlDbG9zZWQgfHwgdHlwZW9mIHVybFJlZi52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBlcyA9IG5ldyBFdmVudFNvdXJjZSh1cmxSZWYudmFsdWUsIHsgd2l0aENyZWRlbnRpYWxzIH0pO1xuICAgIHN0YXR1cy52YWx1ZSA9IFwiQ09OTkVDVElOR1wiO1xuICAgIGV2ZW50U291cmNlLnZhbHVlID0gZXM7XG4gICAgZXMub25vcGVuID0gKCkgPT4ge1xuICAgICAgc3RhdHVzLnZhbHVlID0gXCJPUEVOXCI7XG4gICAgICBlcnJvci52YWx1ZSA9IG51bGw7XG4gICAgfTtcbiAgICBlcy5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgIHN0YXR1cy52YWx1ZSA9IFwiQ0xPU0VEXCI7XG4gICAgICBlcnJvci52YWx1ZSA9IGU7XG4gICAgICBpZiAoZXMucmVhZHlTdGF0ZSA9PT0gMiAmJiAhZXhwbGljaXRseUNsb3NlZCAmJiBvcHRpb25zLmF1dG9SZWNvbm5lY3QpIHtcbiAgICAgICAgZXMuY2xvc2UoKTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHJldHJpZXMgPSAtMSxcbiAgICAgICAgICBkZWxheSA9IDFlMyxcbiAgICAgICAgICBvbkZhaWxlZFxuICAgICAgICB9ID0gcmVzb2x2ZU5lc3RlZE9wdGlvbnMkMShvcHRpb25zLmF1dG9SZWNvbm5lY3QpO1xuICAgICAgICByZXRyaWVkICs9IDE7XG4gICAgICAgIGlmICh0eXBlb2YgcmV0cmllcyA9PT0gXCJudW1iZXJcIiAmJiAocmV0cmllcyA8IDAgfHwgcmV0cmllZCA8IHJldHJpZXMpKVxuICAgICAgICAgIHNldFRpbWVvdXQoX2luaXQsIGRlbGF5KTtcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHJldHJpZXMgPT09IFwiZnVuY3Rpb25cIiAmJiByZXRyaWVzKCkpXG4gICAgICAgICAgc2V0VGltZW91dChfaW5pdCwgZGVsYXkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgb25GYWlsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IG9uRmFpbGVkKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBlcy5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgZXZlbnQudmFsdWUgPSBudWxsO1xuICAgICAgZGF0YS52YWx1ZSA9IGUuZGF0YTtcbiAgICAgIGxhc3RFdmVudElkLnZhbHVlID0gZS5sYXN0RXZlbnRJZDtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgZXZlbnRfbmFtZSBvZiBldmVudHMpIHtcbiAgICAgIHVzZUV2ZW50TGlzdGVuZXIoZXMsIGV2ZW50X25hbWUsIChlKSA9PiB7XG4gICAgICAgIGV2ZW50LnZhbHVlID0gZXZlbnRfbmFtZTtcbiAgICAgICAgZGF0YS52YWx1ZSA9IGUuZGF0YSB8fCBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvcGVuID0gKCkgPT4ge1xuICAgIGlmICghaXNDbGllbnQpXG4gICAgICByZXR1cm47XG4gICAgY2xvc2UoKTtcbiAgICBleHBsaWNpdGx5Q2xvc2VkID0gZmFsc2U7XG4gICAgcmV0cmllZCA9IDA7XG4gICAgX2luaXQoKTtcbiAgfTtcbiAgaWYgKGltbWVkaWF0ZSlcbiAgICB3YXRjaCh1cmxSZWYsIG9wZW4sIHsgaW1tZWRpYXRlOiB0cnVlIH0pO1xuICB0cnlPblNjb3BlRGlzcG9zZShjbG9zZSk7XG4gIHJldHVybiB7XG4gICAgZXZlbnRTb3VyY2UsXG4gICAgZXZlbnQsXG4gICAgZGF0YSxcbiAgICBzdGF0dXMsXG4gICAgZXJyb3IsXG4gICAgb3BlbixcbiAgICBjbG9zZSxcbiAgICBsYXN0RXZlbnRJZFxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VFeWVEcm9wcGVyKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IGluaXRpYWxWYWx1ZSA9IFwiXCIgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gdXNlU3VwcG9ydGVkKCgpID0+IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgXCJFeWVEcm9wcGVyXCIgaW4gd2luZG93KTtcbiAgY29uc3Qgc1JHQkhleCA9IHJlZihpbml0aWFsVmFsdWUpO1xuICBhc3luYyBmdW5jdGlvbiBvcGVuKG9wZW5PcHRpb25zKSB7XG4gICAgaWYgKCFpc1N1cHBvcnRlZC52YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBleWVEcm9wcGVyID0gbmV3IHdpbmRvdy5FeWVEcm9wcGVyKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZXllRHJvcHBlci5vcGVuKG9wZW5PcHRpb25zKTtcbiAgICBzUkdCSGV4LnZhbHVlID0gcmVzdWx0LnNSR0JIZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4geyBpc1N1cHBvcnRlZCwgc1JHQkhleCwgb3BlbiB9O1xufVxuXG5mdW5jdGlvbiB1c2VGYXZpY29uKG5ld0ljb24gPSBudWxsLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGJhc2VVcmwgPSBcIlwiLFxuICAgIHJlbCA9IFwiaWNvblwiLFxuICAgIGRvY3VtZW50ID0gZGVmYXVsdERvY3VtZW50XG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBmYXZpY29uID0gdG9SZWYobmV3SWNvbik7XG4gIGNvbnN0IGFwcGx5SWNvbiA9IChpY29uKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudCA9PSBudWxsID8gdm9pZCAwIDogZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yQWxsKGBsaW5rW3JlbCo9XCIke3JlbH1cIl1gKTtcbiAgICBpZiAoIWVsZW1lbnRzIHx8IGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50ID09IG51bGwgPyB2b2lkIDAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgIGxpbmsucmVsID0gcmVsO1xuICAgICAgICBsaW5rLmhyZWYgPSBgJHtiYXNlVXJsfSR7aWNvbn1gO1xuICAgICAgICBsaW5rLnR5cGUgPSBgaW1hZ2UvJHtpY29uLnNwbGl0KFwiLlwiKS5wb3AoKX1gO1xuICAgICAgICBkb2N1bWVudCA9PSBudWxsID8gdm9pZCAwIDogZG9jdW1lbnQuaGVhZC5hcHBlbmQobGluayk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsZW1lbnRzID09IG51bGwgPyB2b2lkIDAgOiBlbGVtZW50cy5mb3JFYWNoKChlbCkgPT4gZWwuaHJlZiA9IGAke2Jhc2VVcmx9JHtpY29ufWApO1xuICB9O1xuICB3YXRjaChcbiAgICBmYXZpY29uLFxuICAgIChpLCBvKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGkgPT09IFwic3RyaW5nXCIgJiYgaSAhPT0gbylcbiAgICAgICAgYXBwbHlJY29uKGkpO1xuICAgIH0sXG4gICAgeyBpbW1lZGlhdGU6IHRydWUgfVxuICApO1xuICByZXR1cm4gZmF2aWNvbjtcbn1cblxuY29uc3QgcGF5bG9hZE1hcHBpbmcgPSB7XG4gIGpzb246IFwiYXBwbGljYXRpb24vanNvblwiLFxuICB0ZXh0OiBcInRleHQvcGxhaW5cIlxufTtcbmZ1bmN0aW9uIGlzRmV0Y2hPcHRpb25zKG9iaikge1xuICByZXR1cm4gb2JqICYmIGNvbnRhaW5zUHJvcChvYmosIFwiaW1tZWRpYXRlXCIsIFwicmVmZXRjaFwiLCBcImluaXRpYWxEYXRhXCIsIFwidGltZW91dFwiLCBcImJlZm9yZUZldGNoXCIsIFwiYWZ0ZXJGZXRjaFwiLCBcIm9uRmV0Y2hFcnJvclwiLCBcImZldGNoXCIsIFwidXBkYXRlRGF0YU9uRXJyb3JcIik7XG59XG5jb25zdCByZUFic29sdXRlID0gL14oPzpbYS16XVthLXpcXGQrXFwtLl0qOik/XFwvXFwvL2k7XG5mdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICByZXR1cm4gcmVBYnNvbHV0ZS50ZXN0KHVybCk7XG59XG5mdW5jdGlvbiBoZWFkZXJzVG9PYmplY3QoaGVhZGVycykge1xuICBpZiAodHlwZW9mIEhlYWRlcnMgIT09IFwidW5kZWZpbmVkXCIgJiYgaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhoZWFkZXJzLmVudHJpZXMoKSk7XG4gIHJldHVybiBoZWFkZXJzO1xufVxuZnVuY3Rpb24gY29tYmluZUNhbGxiYWNrcyhjb21iaW5hdGlvbiwgLi4uY2FsbGJhY2tzKSB7XG4gIGlmIChjb21iaW5hdGlvbiA9PT0gXCJvdmVyd3JpdGVcIikge1xuICAgIHJldHVybiBhc3luYyAoY3R4KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGNhbGxiYWNrc1tjYWxsYmFja3MubGVuZ3RoIC0gMV07XG4gICAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgIHJldHVybiB7IC4uLmN0eCwgLi4uYXdhaXQgY2FsbGJhY2soY3R4KSB9O1xuICAgICAgcmV0dXJuIGN0eDtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhc3luYyAoY3R4KSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGNhbGxiYWNrcykge1xuICAgICAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgICAgY3R4ID0geyAuLi5jdHgsIC4uLmF3YWl0IGNhbGxiYWNrKGN0eCkgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdHg7XG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRmV0Y2goY29uZmlnID0ge30pIHtcbiAgY29uc3QgX2NvbWJpbmF0aW9uID0gY29uZmlnLmNvbWJpbmF0aW9uIHx8IFwiY2hhaW5cIjtcbiAgY29uc3QgX29wdGlvbnMgPSBjb25maWcub3B0aW9ucyB8fCB7fTtcbiAgY29uc3QgX2ZldGNoT3B0aW9ucyA9IGNvbmZpZy5mZXRjaE9wdGlvbnMgfHwge307XG4gIGZ1bmN0aW9uIHVzZUZhY3RvcnlGZXRjaCh1cmwsIC4uLmFyZ3MpIHtcbiAgICBjb25zdCBjb21wdXRlZFVybCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGJhc2VVcmwgPSB0b1ZhbHVlKGNvbmZpZy5iYXNlVXJsKTtcbiAgICAgIGNvbnN0IHRhcmdldFVybCA9IHRvVmFsdWUodXJsKTtcbiAgICAgIHJldHVybiBiYXNlVXJsICYmICFpc0Fic29sdXRlVVJMKHRhcmdldFVybCkgPyBqb2luUGF0aHMoYmFzZVVybCwgdGFyZ2V0VXJsKSA6IHRhcmdldFVybDtcbiAgICB9KTtcbiAgICBsZXQgb3B0aW9ucyA9IF9vcHRpb25zO1xuICAgIGxldCBmZXRjaE9wdGlvbnMgPSBfZmV0Y2hPcHRpb25zO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChpc0ZldGNoT3B0aW9ucyhhcmdzWzBdKSkge1xuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgLi4uYXJnc1swXSxcbiAgICAgICAgICBiZWZvcmVGZXRjaDogY29tYmluZUNhbGxiYWNrcyhfY29tYmluYXRpb24sIF9vcHRpb25zLmJlZm9yZUZldGNoLCBhcmdzWzBdLmJlZm9yZUZldGNoKSxcbiAgICAgICAgICBhZnRlckZldGNoOiBjb21iaW5lQ2FsbGJhY2tzKF9jb21iaW5hdGlvbiwgX29wdGlvbnMuYWZ0ZXJGZXRjaCwgYXJnc1swXS5hZnRlckZldGNoKSxcbiAgICAgICAgICBvbkZldGNoRXJyb3I6IGNvbWJpbmVDYWxsYmFja3MoX2NvbWJpbmF0aW9uLCBfb3B0aW9ucy5vbkZldGNoRXJyb3IsIGFyZ3NbMF0ub25GZXRjaEVycm9yKVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmV0Y2hPcHRpb25zID0ge1xuICAgICAgICAgIC4uLmZldGNoT3B0aW9ucyxcbiAgICAgICAgICAuLi5hcmdzWzBdLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC4uLmhlYWRlcnNUb09iamVjdChmZXRjaE9wdGlvbnMuaGVhZGVycykgfHwge30sXG4gICAgICAgICAgICAuLi5oZWFkZXJzVG9PYmplY3QoYXJnc1swXS5oZWFkZXJzKSB8fCB7fVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMSAmJiBpc0ZldGNoT3B0aW9ucyhhcmdzWzFdKSkge1xuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgLi4uYXJnc1sxXSxcbiAgICAgICAgYmVmb3JlRmV0Y2g6IGNvbWJpbmVDYWxsYmFja3MoX2NvbWJpbmF0aW9uLCBfb3B0aW9ucy5iZWZvcmVGZXRjaCwgYXJnc1sxXS5iZWZvcmVGZXRjaCksXG4gICAgICAgIGFmdGVyRmV0Y2g6IGNvbWJpbmVDYWxsYmFja3MoX2NvbWJpbmF0aW9uLCBfb3B0aW9ucy5hZnRlckZldGNoLCBhcmdzWzFdLmFmdGVyRmV0Y2gpLFxuICAgICAgICBvbkZldGNoRXJyb3I6IGNvbWJpbmVDYWxsYmFja3MoX2NvbWJpbmF0aW9uLCBfb3B0aW9ucy5vbkZldGNoRXJyb3IsIGFyZ3NbMV0ub25GZXRjaEVycm9yKVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHVzZUZldGNoKGNvbXB1dGVkVXJsLCBmZXRjaE9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG4gIHJldHVybiB1c2VGYWN0b3J5RmV0Y2g7XG59XG5mdW5jdGlvbiB1c2VGZXRjaCh1cmwsIC4uLmFyZ3MpIHtcbiAgdmFyIF9hO1xuICBjb25zdCBzdXBwb3J0c0Fib3J0ID0gdHlwZW9mIEFib3J0Q29udHJvbGxlciA9PT0gXCJmdW5jdGlvblwiO1xuICBsZXQgZmV0Y2hPcHRpb25zID0ge307XG4gIGxldCBvcHRpb25zID0ge1xuICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICByZWZldGNoOiBmYWxzZSxcbiAgICB0aW1lb3V0OiAwLFxuICAgIHVwZGF0ZURhdGFPbkVycm9yOiBmYWxzZVxuICB9O1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIHBheWxvYWQ6IHZvaWQgMFxuICB9O1xuICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGlzRmV0Y2hPcHRpb25zKGFyZ3NbMF0pKVxuICAgICAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucywgLi4uYXJnc1swXSB9O1xuICAgIGVsc2VcbiAgICAgIGZldGNoT3B0aW9ucyA9IGFyZ3NbMF07XG4gIH1cbiAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xuICAgIGlmIChpc0ZldGNoT3B0aW9ucyhhcmdzWzFdKSlcbiAgICAgIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMsIC4uLmFyZ3NbMV0gfTtcbiAgfVxuICBjb25zdCB7XG4gICAgZmV0Y2ggPSAoX2EgPSBkZWZhdWx0V2luZG93KSA9PSBudWxsID8gdm9pZCAwIDogX2EuZmV0Y2gsXG4gICAgaW5pdGlhbERhdGEsXG4gICAgdGltZW91dFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcmVzcG9uc2VFdmVudCA9IGNyZWF0ZUV2ZW50SG9vaygpO1xuICBjb25zdCBlcnJvckV2ZW50ID0gY3JlYXRlRXZlbnRIb29rKCk7XG4gIGNvbnN0IGZpbmFsbHlFdmVudCA9IGNyZWF0ZUV2ZW50SG9vaygpO1xuICBjb25zdCBpc0ZpbmlzaGVkID0gcmVmKGZhbHNlKTtcbiAgY29uc3QgaXNGZXRjaGluZyA9IHJlZihmYWxzZSk7XG4gIGNvbnN0IGFib3J0ZWQgPSByZWYoZmFsc2UpO1xuICBjb25zdCBzdGF0dXNDb2RlID0gcmVmKG51bGwpO1xuICBjb25zdCByZXNwb25zZSA9IHNoYWxsb3dSZWYobnVsbCk7XG4gIGNvbnN0IGVycm9yID0gc2hhbGxvd1JlZihudWxsKTtcbiAgY29uc3QgZGF0YSA9IHNoYWxsb3dSZWYoaW5pdGlhbERhdGEgfHwgbnVsbCk7XG4gIGNvbnN0IGNhbkFib3J0ID0gY29tcHV0ZWQoKCkgPT4gc3VwcG9ydHNBYm9ydCAmJiBpc0ZldGNoaW5nLnZhbHVlKTtcbiAgbGV0IGNvbnRyb2xsZXI7XG4gIGxldCB0aW1lcjtcbiAgY29uc3QgYWJvcnQgPSAoKSA9PiB7XG4gICAgaWYgKHN1cHBvcnRzQWJvcnQpIHtcbiAgICAgIGNvbnRyb2xsZXIgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICBjb250cm9sbGVyLnNpZ25hbC5vbmFib3J0ID0gKCkgPT4gYWJvcnRlZC52YWx1ZSA9IHRydWU7XG4gICAgICBmZXRjaE9wdGlvbnMgPSB7XG4gICAgICAgIC4uLmZldGNoT3B0aW9ucyxcbiAgICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbFxuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGxvYWRpbmcgPSAoaXNMb2FkaW5nKSA9PiB7XG4gICAgaXNGZXRjaGluZy52YWx1ZSA9IGlzTG9hZGluZztcbiAgICBpc0ZpbmlzaGVkLnZhbHVlID0gIWlzTG9hZGluZztcbiAgfTtcbiAgaWYgKHRpbWVvdXQpXG4gICAgdGltZXIgPSB1c2VUaW1lb3V0Rm4oYWJvcnQsIHRpbWVvdXQsIHsgaW1tZWRpYXRlOiBmYWxzZSB9KTtcbiAgbGV0IGV4ZWN1dGVDb3VudGVyID0gMDtcbiAgY29uc3QgZXhlY3V0ZSA9IGFzeW5jICh0aHJvd09uRmFpbGVkID0gZmFsc2UpID0+IHtcbiAgICB2YXIgX2EyLCBfYjtcbiAgICBhYm9ydCgpO1xuICAgIGxvYWRpbmcodHJ1ZSk7XG4gICAgZXJyb3IudmFsdWUgPSBudWxsO1xuICAgIHN0YXR1c0NvZGUudmFsdWUgPSBudWxsO1xuICAgIGFib3J0ZWQudmFsdWUgPSBmYWxzZTtcbiAgICBleGVjdXRlQ291bnRlciArPSAxO1xuICAgIGNvbnN0IGN1cnJlbnRFeGVjdXRlQ291bnRlciA9IGV4ZWN1dGVDb3VudGVyO1xuICAgIGNvbnN0IGRlZmF1bHRGZXRjaE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IGNvbmZpZy5tZXRob2QsXG4gICAgICBoZWFkZXJzOiB7fVxuICAgIH07XG4gICAgaWYgKGNvbmZpZy5wYXlsb2FkKSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gaGVhZGVyc1RvT2JqZWN0KGRlZmF1bHRGZXRjaE9wdGlvbnMuaGVhZGVycyk7XG4gICAgICBjb25zdCBwYXlsb2FkID0gdG9WYWx1ZShjb25maWcucGF5bG9hZCk7XG4gICAgICBpZiAoIWNvbmZpZy5wYXlsb2FkVHlwZSAmJiBwYXlsb2FkICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihwYXlsb2FkKSA9PT0gT2JqZWN0LnByb3RvdHlwZSAmJiAhKHBheWxvYWQgaW5zdGFuY2VvZiBGb3JtRGF0YSkpXG4gICAgICAgIGNvbmZpZy5wYXlsb2FkVHlwZSA9IFwianNvblwiO1xuICAgICAgaWYgKGNvbmZpZy5wYXlsb2FkVHlwZSlcbiAgICAgICAgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IChfYTIgPSBwYXlsb2FkTWFwcGluZ1tjb25maWcucGF5bG9hZFR5cGVdKSAhPSBudWxsID8gX2EyIDogY29uZmlnLnBheWxvYWRUeXBlO1xuICAgICAgZGVmYXVsdEZldGNoT3B0aW9ucy5ib2R5ID0gY29uZmlnLnBheWxvYWRUeXBlID09PSBcImpzb25cIiA/IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpIDogcGF5bG9hZDtcbiAgICB9XG4gICAgbGV0IGlzQ2FuY2VsZWQgPSBmYWxzZTtcbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgdXJsOiB0b1ZhbHVlKHVybCksXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIC4uLmRlZmF1bHRGZXRjaE9wdGlvbnMsXG4gICAgICAgIC4uLmZldGNoT3B0aW9uc1xuICAgICAgfSxcbiAgICAgIGNhbmNlbDogKCkgPT4ge1xuICAgICAgICBpc0NhbmNlbGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChvcHRpb25zLmJlZm9yZUZldGNoKVxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCBhd2FpdCBvcHRpb25zLmJlZm9yZUZldGNoKGNvbnRleHQpKTtcbiAgICBpZiAoaXNDYW5jZWxlZCB8fCAhZmV0Y2gpIHtcbiAgICAgIGxvYWRpbmcoZmFsc2UpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICB9XG4gICAgbGV0IHJlc3BvbnNlRGF0YSA9IG51bGw7XG4gICAgaWYgKHRpbWVyKVxuICAgICAgdGltZXIuc3RhcnQoKTtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBjb250ZXh0LnVybCxcbiAgICAgIHtcbiAgICAgICAgLi4uZGVmYXVsdEZldGNoT3B0aW9ucyxcbiAgICAgICAgLi4uY29udGV4dC5vcHRpb25zLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgLi4uaGVhZGVyc1RvT2JqZWN0KGRlZmF1bHRGZXRjaE9wdGlvbnMuaGVhZGVycyksXG4gICAgICAgICAgLi4uaGVhZGVyc1RvT2JqZWN0KChfYiA9IGNvbnRleHQub3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLmhlYWRlcnMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApLnRoZW4oYXN5bmMgKGZldGNoUmVzcG9uc2UpID0+IHtcbiAgICAgIHJlc3BvbnNlLnZhbHVlID0gZmV0Y2hSZXNwb25zZTtcbiAgICAgIHN0YXR1c0NvZGUudmFsdWUgPSBmZXRjaFJlc3BvbnNlLnN0YXR1cztcbiAgICAgIHJlc3BvbnNlRGF0YSA9IGF3YWl0IGZldGNoUmVzcG9uc2UuY2xvbmUoKVtjb25maWcudHlwZV0oKTtcbiAgICAgIGlmICghZmV0Y2hSZXNwb25zZS5vaykge1xuICAgICAgICBkYXRhLnZhbHVlID0gaW5pdGlhbERhdGEgfHwgbnVsbDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGZldGNoUmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5hZnRlckZldGNoKSB7XG4gICAgICAgICh7IGRhdGE6IHJlc3BvbnNlRGF0YSB9ID0gYXdhaXQgb3B0aW9ucy5hZnRlckZldGNoKHtcbiAgICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgICAgcmVzcG9uc2U6IGZldGNoUmVzcG9uc2VcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgZGF0YS52YWx1ZSA9IHJlc3BvbnNlRGF0YTtcbiAgICAgIHJlc3BvbnNlRXZlbnQudHJpZ2dlcihmZXRjaFJlc3BvbnNlKTtcbiAgICAgIHJldHVybiBmZXRjaFJlc3BvbnNlO1xuICAgIH0pLmNhdGNoKGFzeW5jIChmZXRjaEVycm9yKSA9PiB7XG4gICAgICBsZXQgZXJyb3JEYXRhID0gZmV0Y2hFcnJvci5tZXNzYWdlIHx8IGZldGNoRXJyb3IubmFtZTtcbiAgICAgIGlmIChvcHRpb25zLm9uRmV0Y2hFcnJvcikge1xuICAgICAgICAoeyBlcnJvcjogZXJyb3JEYXRhLCBkYXRhOiByZXNwb25zZURhdGEgfSA9IGF3YWl0IG9wdGlvbnMub25GZXRjaEVycm9yKHtcbiAgICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgICAgZXJyb3I6IGZldGNoRXJyb3IsXG4gICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlLnZhbHVlXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIGVycm9yLnZhbHVlID0gZXJyb3JEYXRhO1xuICAgICAgaWYgKG9wdGlvbnMudXBkYXRlRGF0YU9uRXJyb3IpXG4gICAgICAgIGRhdGEudmFsdWUgPSByZXNwb25zZURhdGE7XG4gICAgICBlcnJvckV2ZW50LnRyaWdnZXIoZmV0Y2hFcnJvcik7XG4gICAgICBpZiAodGhyb3dPbkZhaWxlZClcbiAgICAgICAgdGhyb3cgZmV0Y2hFcnJvcjtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRFeGVjdXRlQ291bnRlciA9PT0gZXhlY3V0ZUNvdW50ZXIpXG4gICAgICAgIGxvYWRpbmcoZmFsc2UpO1xuICAgICAgaWYgKHRpbWVyKVxuICAgICAgICB0aW1lci5zdG9wKCk7XG4gICAgICBmaW5hbGx5RXZlbnQudHJpZ2dlcihudWxsKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgcmVmZXRjaCA9IHRvUmVmKG9wdGlvbnMucmVmZXRjaCk7XG4gIHdhdGNoKFxuICAgIFtcbiAgICAgIHJlZmV0Y2gsXG4gICAgICB0b1JlZih1cmwpXG4gICAgXSxcbiAgICAoW3JlZmV0Y2gyXSkgPT4gcmVmZXRjaDIgJiYgZXhlY3V0ZSgpLFxuICAgIHsgZGVlcDogdHJ1ZSB9XG4gICk7XG4gIGNvbnN0IHNoZWxsID0ge1xuICAgIGlzRmluaXNoZWQ6IHJlYWRvbmx5KGlzRmluaXNoZWQpLFxuICAgIGlzRmV0Y2hpbmc6IHJlYWRvbmx5KGlzRmV0Y2hpbmcpLFxuICAgIHN0YXR1c0NvZGUsXG4gICAgcmVzcG9uc2UsXG4gICAgZXJyb3IsXG4gICAgZGF0YSxcbiAgICBjYW5BYm9ydCxcbiAgICBhYm9ydGVkLFxuICAgIGFib3J0LFxuICAgIGV4ZWN1dGUsXG4gICAgb25GZXRjaFJlc3BvbnNlOiByZXNwb25zZUV2ZW50Lm9uLFxuICAgIG9uRmV0Y2hFcnJvcjogZXJyb3JFdmVudC5vbixcbiAgICBvbkZldGNoRmluYWxseTogZmluYWxseUV2ZW50Lm9uLFxuICAgIC8vIG1ldGhvZFxuICAgIGdldDogc2V0TWV0aG9kKFwiR0VUXCIpLFxuICAgIHB1dDogc2V0TWV0aG9kKFwiUFVUXCIpLFxuICAgIHBvc3Q6IHNldE1ldGhvZChcIlBPU1RcIiksXG4gICAgZGVsZXRlOiBzZXRNZXRob2QoXCJERUxFVEVcIiksXG4gICAgcGF0Y2g6IHNldE1ldGhvZChcIlBBVENIXCIpLFxuICAgIGhlYWQ6IHNldE1ldGhvZChcIkhFQURcIiksXG4gICAgb3B0aW9uczogc2V0TWV0aG9kKFwiT1BUSU9OU1wiKSxcbiAgICAvLyB0eXBlXG4gICAganNvbjogc2V0VHlwZShcImpzb25cIiksXG4gICAgdGV4dDogc2V0VHlwZShcInRleHRcIiksXG4gICAgYmxvYjogc2V0VHlwZShcImJsb2JcIiksXG4gICAgYXJyYXlCdWZmZXI6IHNldFR5cGUoXCJhcnJheUJ1ZmZlclwiKSxcbiAgICBmb3JtRGF0YTogc2V0VHlwZShcImZvcm1EYXRhXCIpXG4gIH07XG4gIGZ1bmN0aW9uIHNldE1ldGhvZChtZXRob2QpIHtcbiAgICByZXR1cm4gKHBheWxvYWQsIHBheWxvYWRUeXBlKSA9PiB7XG4gICAgICBpZiAoIWlzRmV0Y2hpbmcudmFsdWUpIHtcbiAgICAgICAgY29uZmlnLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgY29uZmlnLnBheWxvYWQgPSBwYXlsb2FkO1xuICAgICAgICBjb25maWcucGF5bG9hZFR5cGUgPSBwYXlsb2FkVHlwZTtcbiAgICAgICAgaWYgKGlzUmVmKGNvbmZpZy5wYXlsb2FkKSkge1xuICAgICAgICAgIHdhdGNoKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICByZWZldGNoLFxuICAgICAgICAgICAgICB0b1JlZihjb25maWcucGF5bG9hZClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAoW3JlZmV0Y2gyXSkgPT4gcmVmZXRjaDIgJiYgZXhlY3V0ZSgpLFxuICAgICAgICAgICAgeyBkZWVwOiB0cnVlIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2hlbGwsXG4gICAgICAgICAgdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHdhaXRVbnRpbEZpbmlzaGVkKCkudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHdhaXRVbnRpbEZpbmlzaGVkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB1bnRpbChpc0ZpbmlzaGVkKS50b0JlKHRydWUpLnRoZW4oKCkgPT4gcmVzb2x2ZShzaGVsbCkpLmNhdGNoKChlcnJvcjIpID0+IHJlamVjdChlcnJvcjIpKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzZXRUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKCFpc0ZldGNoaW5nLnZhbHVlKSB7XG4gICAgICAgIGNvbmZpZy50eXBlID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zaGVsbCxcbiAgICAgICAgICB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gd2FpdFVudGlsRmluaXNoZWQoKS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH07XG4gIH1cbiAgaWYgKG9wdGlvbnMuaW1tZWRpYXRlKVxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gZXhlY3V0ZSgpKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5zaGVsbCxcbiAgICB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gd2FpdFVudGlsRmluaXNoZWQoKS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBqb2luUGF0aHMoc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0LmVuZHNXaXRoKFwiL1wiKSAmJiAhZW5kLnN0YXJ0c1dpdGgoXCIvXCIpKVxuICAgIHJldHVybiBgJHtzdGFydH0vJHtlbmR9YDtcbiAgcmV0dXJuIGAke3N0YXJ0fSR7ZW5kfWA7XG59XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgbXVsdGlwbGU6IHRydWUsXG4gIGFjY2VwdDogXCIqXCIsXG4gIHJlc2V0OiBmYWxzZSxcbiAgZGlyZWN0b3J5OiBmYWxzZVxufTtcbmZ1bmN0aW9uIHVzZUZpbGVEaWFsb2cob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBkb2N1bWVudCA9IGRlZmF1bHREb2N1bWVudFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgZmlsZXMgPSByZWYobnVsbCk7XG4gIGNvbnN0IHsgb246IG9uQ2hhbmdlLCB0cmlnZ2VyIH0gPSBjcmVhdGVFdmVudEhvb2soKTtcbiAgbGV0IGlucHV0O1xuICBpZiAoZG9jdW1lbnQpIHtcbiAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJmaWxlXCI7XG4gICAgaW5wdXQub25jaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGZpbGVzLnZhbHVlID0gcmVzdWx0LmZpbGVzO1xuICAgICAgdHJpZ2dlcihmaWxlcy52YWx1ZSk7XG4gICAgfTtcbiAgfVxuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBmaWxlcy52YWx1ZSA9IG51bGw7XG4gICAgaWYgKGlucHV0ICYmIGlucHV0LnZhbHVlKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICB0cmlnZ2VyKG51bGwpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb3BlbiA9IChsb2NhbE9wdGlvbnMpID0+IHtcbiAgICBpZiAoIWlucHV0KVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IF9vcHRpb25zID0ge1xuICAgICAgLi4uREVGQVVMVF9PUFRJT05TLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIC4uLmxvY2FsT3B0aW9uc1xuICAgIH07XG4gICAgaW5wdXQubXVsdGlwbGUgPSBfb3B0aW9ucy5tdWx0aXBsZTtcbiAgICBpbnB1dC5hY2NlcHQgPSBfb3B0aW9ucy5hY2NlcHQ7XG4gICAgaW5wdXQud2Via2l0ZGlyZWN0b3J5ID0gX29wdGlvbnMuZGlyZWN0b3J5O1xuICAgIGlmIChoYXNPd24oX29wdGlvbnMsIFwiY2FwdHVyZVwiKSlcbiAgICAgIGlucHV0LmNhcHR1cmUgPSBfb3B0aW9ucy5jYXB0dXJlO1xuICAgIGlmIChfb3B0aW9ucy5yZXNldClcbiAgICAgIHJlc2V0KCk7XG4gICAgaW5wdXQuY2xpY2soKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBmaWxlczogcmVhZG9ubHkoZmlsZXMpLFxuICAgIG9wZW4sXG4gICAgcmVzZXQsXG4gICAgb25DaGFuZ2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlRmlsZVN5c3RlbUFjY2VzcyhvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIHdpbmRvdzogX3dpbmRvdyA9IGRlZmF1bHRXaW5kb3csXG4gICAgZGF0YVR5cGUgPSBcIlRleHRcIlxuICB9ID0gb3B0aW9ucztcbiAgY29uc3Qgd2luZG93ID0gX3dpbmRvdztcbiAgY29uc3QgaXNTdXBwb3J0ZWQgPSB1c2VTdXBwb3J0ZWQoKCkgPT4gd2luZG93ICYmIFwic2hvd1NhdmVGaWxlUGlja2VyXCIgaW4gd2luZG93ICYmIFwic2hvd09wZW5GaWxlUGlja2VyXCIgaW4gd2luZG93KTtcbiAgY29uc3QgZmlsZUhhbmRsZSA9IHJlZigpO1xuICBjb25zdCBkYXRhID0gcmVmKCk7XG4gIGNvbnN0IGZpbGUgPSByZWYoKTtcbiAgY29uc3QgZmlsZU5hbWUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICByZXR1cm4gKF9iID0gKF9hID0gZmlsZS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLm5hbWUpICE9IG51bGwgPyBfYiA6IFwiXCI7XG4gIH0pO1xuICBjb25zdCBmaWxlTUlNRSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiAoX2IgPSAoX2EgPSBmaWxlLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2EudHlwZSkgIT0gbnVsbCA/IF9iIDogXCJcIjtcbiAgfSk7XG4gIGNvbnN0IGZpbGVTaXplID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIChfYiA9IChfYSA9IGZpbGUudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfYS5zaXplKSAhPSBudWxsID8gX2IgOiAwO1xuICB9KTtcbiAgY29uc3QgZmlsZUxhc3RNb2RpZmllZCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiAoX2IgPSAoX2EgPSBmaWxlLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2EubGFzdE1vZGlmaWVkKSAhPSBudWxsID8gX2IgOiAwO1xuICB9KTtcbiAgYXN5bmMgZnVuY3Rpb24gb3Blbihfb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCFpc1N1cHBvcnRlZC52YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBbaGFuZGxlXSA9IGF3YWl0IHdpbmRvdy5zaG93T3BlbkZpbGVQaWNrZXIoeyAuLi50b1ZhbHVlKG9wdGlvbnMpLCAuLi5fb3B0aW9ucyB9KTtcbiAgICBmaWxlSGFuZGxlLnZhbHVlID0gaGFuZGxlO1xuICAgIGF3YWl0IHVwZGF0ZURhdGEoKTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGUoX29wdGlvbnMgPSB7fSkge1xuICAgIGlmICghaXNTdXBwb3J0ZWQudmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgZmlsZUhhbmRsZS52YWx1ZSA9IGF3YWl0IHdpbmRvdy5zaG93U2F2ZUZpbGVQaWNrZXIoeyAuLi5vcHRpb25zLCAuLi5fb3B0aW9ucyB9KTtcbiAgICBkYXRhLnZhbHVlID0gdm9pZCAwO1xuICAgIGF3YWl0IHVwZGF0ZURhdGEoKTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBzYXZlKF9vcHRpb25zID0ge30pIHtcbiAgICBpZiAoIWlzU3VwcG9ydGVkLnZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICghZmlsZUhhbmRsZS52YWx1ZSlcbiAgICAgIHJldHVybiBzYXZlQXMoX29wdGlvbnMpO1xuICAgIGlmIChkYXRhLnZhbHVlKSB7XG4gICAgICBjb25zdCB3cml0YWJsZVN0cmVhbSA9IGF3YWl0IGZpbGVIYW5kbGUudmFsdWUuY3JlYXRlV3JpdGFibGUoKTtcbiAgICAgIGF3YWl0IHdyaXRhYmxlU3RyZWFtLndyaXRlKGRhdGEudmFsdWUpO1xuICAgICAgYXdhaXQgd3JpdGFibGVTdHJlYW0uY2xvc2UoKTtcbiAgICB9XG4gICAgYXdhaXQgdXBkYXRlRmlsZSgpO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIHNhdmVBcyhfb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCFpc1N1cHBvcnRlZC52YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBmaWxlSGFuZGxlLnZhbHVlID0gYXdhaXQgd2luZG93LnNob3dTYXZlRmlsZVBpY2tlcih7IC4uLm9wdGlvbnMsIC4uLl9vcHRpb25zIH0pO1xuICAgIGlmIChkYXRhLnZhbHVlKSB7XG4gICAgICBjb25zdCB3cml0YWJsZVN0cmVhbSA9IGF3YWl0IGZpbGVIYW5kbGUudmFsdWUuY3JlYXRlV3JpdGFibGUoKTtcbiAgICAgIGF3YWl0IHdyaXRhYmxlU3RyZWFtLndyaXRlKGRhdGEudmFsdWUpO1xuICAgICAgYXdhaXQgd3JpdGFibGVTdHJlYW0uY2xvc2UoKTtcbiAgICB9XG4gICAgYXdhaXQgdXBkYXRlRmlsZSgpO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUZpbGUoKSB7XG4gICAgdmFyIF9hO1xuICAgIGZpbGUudmFsdWUgPSBhd2FpdCAoKF9hID0gZmlsZUhhbmRsZS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmdldEZpbGUoKSk7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGF0YSgpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGF3YWl0IHVwZGF0ZUZpbGUoKTtcbiAgICBjb25zdCB0eXBlID0gdG9WYWx1ZShkYXRhVHlwZSk7XG4gICAgaWYgKHR5cGUgPT09IFwiVGV4dFwiKVxuICAgICAgZGF0YS52YWx1ZSA9IGF3YWl0ICgoX2EgPSBmaWxlLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2EudGV4dCgpKTtcbiAgICBlbHNlIGlmICh0eXBlID09PSBcIkFycmF5QnVmZmVyXCIpXG4gICAgICBkYXRhLnZhbHVlID0gYXdhaXQgKChfYiA9IGZpbGUudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfYi5hcnJheUJ1ZmZlcigpKTtcbiAgICBlbHNlIGlmICh0eXBlID09PSBcIkJsb2JcIilcbiAgICAgIGRhdGEudmFsdWUgPSBmaWxlLnZhbHVlO1xuICB9XG4gIHdhdGNoKCgpID0+IHRvVmFsdWUoZGF0YVR5cGUpLCB1cGRhdGVEYXRhKTtcbiAgcmV0dXJuIHtcbiAgICBpc1N1cHBvcnRlZCxcbiAgICBkYXRhLFxuICAgIGZpbGUsXG4gICAgZmlsZU5hbWUsXG4gICAgZmlsZU1JTUUsXG4gICAgZmlsZVNpemUsXG4gICAgZmlsZUxhc3RNb2RpZmllZCxcbiAgICBvcGVuLFxuICAgIGNyZWF0ZSxcbiAgICBzYXZlLFxuICAgIHNhdmVBcyxcbiAgICB1cGRhdGVEYXRhXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZUZvY3VzKHRhcmdldCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgaW5pdGlhbFZhbHVlID0gZmFsc2UsIGZvY3VzVmlzaWJsZSA9IGZhbHNlLCBwcmV2ZW50U2Nyb2xsID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlubmVyRm9jdXNlZCA9IHJlZihmYWxzZSk7XG4gIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBjb21wdXRlZCgoKSA9PiB1bnJlZkVsZW1lbnQodGFyZ2V0KSk7XG4gIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0RWxlbWVudCwgXCJmb2N1c1wiLCAoZXZlbnQpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGlmICghZm9jdXNWaXNpYmxlIHx8ICgoX2IgPSAoX2EgPSBldmVudC50YXJnZXQpLm1hdGNoZXMpID09IG51bGwgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCBcIjpmb2N1cy12aXNpYmxlXCIpKSlcbiAgICAgIGlubmVyRm9jdXNlZC52YWx1ZSA9IHRydWU7XG4gIH0pO1xuICB1c2VFdmVudExpc3RlbmVyKHRhcmdldEVsZW1lbnQsIFwiYmx1clwiLCAoKSA9PiBpbm5lckZvY3VzZWQudmFsdWUgPSBmYWxzZSk7XG4gIGNvbnN0IGZvY3VzZWQgPSBjb21wdXRlZCh7XG4gICAgZ2V0OiAoKSA9PiBpbm5lckZvY3VzZWQudmFsdWUsXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICB2YXIgX2EsIF9iO1xuICAgICAgaWYgKCF2YWx1ZSAmJiBpbm5lckZvY3VzZWQudmFsdWUpXG4gICAgICAgIChfYSA9IHRhcmdldEVsZW1lbnQudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfYS5ibHVyKCk7XG4gICAgICBlbHNlIGlmICh2YWx1ZSAmJiAhaW5uZXJGb2N1c2VkLnZhbHVlKVxuICAgICAgICAoX2IgPSB0YXJnZXRFbGVtZW50LnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2IuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsIH0pO1xuICAgIH1cbiAgfSk7XG4gIHdhdGNoKFxuICAgIHRhcmdldEVsZW1lbnQsXG4gICAgKCkgPT4ge1xuICAgICAgZm9jdXNlZC52YWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICB9LFxuICAgIHsgaW1tZWRpYXRlOiB0cnVlLCBmbHVzaDogXCJwb3N0XCIgfVxuICApO1xuICByZXR1cm4geyBmb2N1c2VkIH07XG59XG5cbmZ1bmN0aW9uIHVzZUZvY3VzV2l0aGluKHRhcmdldCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB1c2VBY3RpdmVFbGVtZW50KG9wdGlvbnMpO1xuICBjb25zdCB0YXJnZXRFbGVtZW50ID0gY29tcHV0ZWQoKCkgPT4gdW5yZWZFbGVtZW50KHRhcmdldCkpO1xuICBjb25zdCBmb2N1c2VkID0gY29tcHV0ZWQoKCkgPT4gdGFyZ2V0RWxlbWVudC52YWx1ZSAmJiBhY3RpdmVFbGVtZW50LnZhbHVlID8gdGFyZ2V0RWxlbWVudC52YWx1ZS5jb250YWlucyhhY3RpdmVFbGVtZW50LnZhbHVlKSA6IGZhbHNlKTtcbiAgcmV0dXJuIHsgZm9jdXNlZCB9O1xufVxuXG5mdW5jdGlvbiB1c2VGcHMob3B0aW9ucykge1xuICB2YXIgX2E7XG4gIGNvbnN0IGZwcyA9IHJlZigwKTtcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICByZXR1cm4gZnBzO1xuICBjb25zdCBldmVyeSA9IChfYSA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuZXZlcnkpICE9IG51bGwgPyBfYSA6IDEwO1xuICBsZXQgbGFzdCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBsZXQgdGlja3MgPSAwO1xuICB1c2VSYWZGbigoKSA9PiB7XG4gICAgdGlja3MgKz0gMTtcbiAgICBpZiAodGlja3MgPj0gZXZlcnkpIHtcbiAgICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgY29uc3QgZGlmZiA9IG5vdyAtIGxhc3Q7XG4gICAgICBmcHMudmFsdWUgPSBNYXRoLnJvdW5kKDFlMyAvIChkaWZmIC8gdGlja3MpKTtcbiAgICAgIGxhc3QgPSBub3c7XG4gICAgICB0aWNrcyA9IDA7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZwcztcbn1cblxuY29uc3QgZXZlbnRIYW5kbGVycyA9IFtcbiAgXCJmdWxsc2NyZWVuY2hhbmdlXCIsXG4gIFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLFxuICBcIndlYmtpdGVuZGZ1bGxzY3JlZW5cIixcbiAgXCJtb3pmdWxsc2NyZWVuY2hhbmdlXCIsXG4gIFwiTVNGdWxsc2NyZWVuQ2hhbmdlXCJcbl07XG5mdW5jdGlvbiB1c2VGdWxsc2NyZWVuKHRhcmdldCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBkb2N1bWVudCA9IGRlZmF1bHREb2N1bWVudCxcbiAgICBhdXRvRXhpdCA9IGZhbHNlXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCB0YXJnZXRSZWYgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSB1bnJlZkVsZW1lbnQodGFyZ2V0KSkgIT0gbnVsbCA/IF9hIDogZG9jdW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuICB9KTtcbiAgY29uc3QgaXNGdWxsc2NyZWVuID0gcmVmKGZhbHNlKTtcbiAgY29uc3QgcmVxdWVzdE1ldGhvZCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgXCJyZXF1ZXN0RnVsbHNjcmVlblwiLFxuICAgICAgXCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlblwiLFxuICAgICAgXCJ3ZWJraXRFbnRlckZ1bGxzY3JlZW5cIixcbiAgICAgIFwid2Via2l0RW50ZXJGdWxsU2NyZWVuXCIsXG4gICAgICBcIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuXCIsXG4gICAgICBcIm1velJlcXVlc3RGdWxsU2NyZWVuXCIsXG4gICAgICBcIm1zUmVxdWVzdEZ1bGxzY3JlZW5cIlxuICAgIF0uZmluZCgobSkgPT4gZG9jdW1lbnQgJiYgbSBpbiBkb2N1bWVudCB8fCB0YXJnZXRSZWYudmFsdWUgJiYgbSBpbiB0YXJnZXRSZWYudmFsdWUpO1xuICB9KTtcbiAgY29uc3QgZXhpdE1ldGhvZCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgXCJleGl0RnVsbHNjcmVlblwiLFxuICAgICAgXCJ3ZWJraXRFeGl0RnVsbHNjcmVlblwiLFxuICAgICAgXCJ3ZWJraXRFeGl0RnVsbFNjcmVlblwiLFxuICAgICAgXCJ3ZWJraXRDYW5jZWxGdWxsU2NyZWVuXCIsXG4gICAgICBcIm1vekNhbmNlbEZ1bGxTY3JlZW5cIixcbiAgICAgIFwibXNFeGl0RnVsbHNjcmVlblwiXG4gICAgXS5maW5kKChtKSA9PiBkb2N1bWVudCAmJiBtIGluIGRvY3VtZW50IHx8IHRhcmdldFJlZi52YWx1ZSAmJiBtIGluIHRhcmdldFJlZi52YWx1ZSk7XG4gIH0pO1xuICBjb25zdCBmdWxsc2NyZWVuRW5hYmxlZCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgXCJmdWxsU2NyZWVuXCIsXG4gICAgICBcIndlYmtpdElzRnVsbFNjcmVlblwiLFxuICAgICAgXCJ3ZWJraXREaXNwbGF5aW5nRnVsbHNjcmVlblwiLFxuICAgICAgXCJtb3pGdWxsU2NyZWVuXCIsXG4gICAgICBcIm1zRnVsbHNjcmVlbkVsZW1lbnRcIlxuICAgIF0uZmluZCgobSkgPT4gZG9jdW1lbnQgJiYgbSBpbiBkb2N1bWVudCB8fCB0YXJnZXRSZWYudmFsdWUgJiYgbSBpbiB0YXJnZXRSZWYudmFsdWUpO1xuICB9KTtcbiAgY29uc3QgZnVsbHNjcmVlbkVsZW1lbnRNZXRob2QgPSBbXG4gICAgXCJmdWxsc2NyZWVuRWxlbWVudFwiLFxuICAgIFwid2Via2l0RnVsbHNjcmVlbkVsZW1lbnRcIixcbiAgICBcIm1vekZ1bGxTY3JlZW5FbGVtZW50XCIsXG4gICAgXCJtc0Z1bGxzY3JlZW5FbGVtZW50XCJcbiAgXS5maW5kKChtKSA9PiBkb2N1bWVudCAmJiBtIGluIGRvY3VtZW50KTtcbiAgY29uc3QgaXNTdXBwb3J0ZWQgPSB1c2VTdXBwb3J0ZWQoKCkgPT4gdGFyZ2V0UmVmLnZhbHVlICYmIGRvY3VtZW50ICYmIHJlcXVlc3RNZXRob2QudmFsdWUgIT09IHZvaWQgMCAmJiBleGl0TWV0aG9kLnZhbHVlICE9PSB2b2lkIDAgJiYgZnVsbHNjcmVlbkVuYWJsZWQudmFsdWUgIT09IHZvaWQgMCk7XG4gIGNvbnN0IGlzQ3VycmVudEVsZW1lbnRGdWxsU2NyZWVuID0gKCkgPT4ge1xuICAgIGlmIChmdWxsc2NyZWVuRWxlbWVudE1ldGhvZClcbiAgICAgIHJldHVybiAoZG9jdW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGRvY3VtZW50W2Z1bGxzY3JlZW5FbGVtZW50TWV0aG9kXSkgPT09IHRhcmdldFJlZi52YWx1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGlzRWxlbWVudEZ1bGxTY3JlZW4gPSAoKSA9PiB7XG4gICAgaWYgKGZ1bGxzY3JlZW5FbmFibGVkLnZhbHVlKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnRbZnVsbHNjcmVlbkVuYWJsZWQudmFsdWVdICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50W2Z1bGxzY3JlZW5FbmFibGVkLnZhbHVlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhcmdldDIgPSB0YXJnZXRSZWYudmFsdWU7XG4gICAgICAgIGlmICgodGFyZ2V0MiA9PSBudWxsID8gdm9pZCAwIDogdGFyZ2V0MltmdWxsc2NyZWVuRW5hYmxlZC52YWx1ZV0pICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbih0YXJnZXQyW2Z1bGxzY3JlZW5FbmFibGVkLnZhbHVlXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBhc3luYyBmdW5jdGlvbiBleGl0KCkge1xuICAgIGlmICghaXNTdXBwb3J0ZWQudmFsdWUgfHwgIWlzRnVsbHNjcmVlbi52YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBpZiAoZXhpdE1ldGhvZC52YWx1ZSkge1xuICAgICAgaWYgKChkb2N1bWVudCA9PSBudWxsID8gdm9pZCAwIDogZG9jdW1lbnRbZXhpdE1ldGhvZC52YWx1ZV0pICE9IG51bGwpIHtcbiAgICAgICAgYXdhaXQgZG9jdW1lbnRbZXhpdE1ldGhvZC52YWx1ZV0oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhcmdldDIgPSB0YXJnZXRSZWYudmFsdWU7XG4gICAgICAgIGlmICgodGFyZ2V0MiA9PSBudWxsID8gdm9pZCAwIDogdGFyZ2V0MltleGl0TWV0aG9kLnZhbHVlXSkgIT0gbnVsbClcbiAgICAgICAgICBhd2FpdCB0YXJnZXQyW2V4aXRNZXRob2QudmFsdWVdKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlzRnVsbHNjcmVlbi52YWx1ZSA9IGZhbHNlO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGVudGVyKCkge1xuICAgIGlmICghaXNTdXBwb3J0ZWQudmFsdWUgfHwgaXNGdWxsc2NyZWVuLnZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIGlmIChpc0VsZW1lbnRGdWxsU2NyZWVuKCkpXG4gICAgICBhd2FpdCBleGl0KCk7XG4gICAgY29uc3QgdGFyZ2V0MiA9IHRhcmdldFJlZi52YWx1ZTtcbiAgICBpZiAocmVxdWVzdE1ldGhvZC52YWx1ZSAmJiAodGFyZ2V0MiA9PSBudWxsID8gdm9pZCAwIDogdGFyZ2V0MltyZXF1ZXN0TWV0aG9kLnZhbHVlXSkgIT0gbnVsbCkge1xuICAgICAgYXdhaXQgdGFyZ2V0MltyZXF1ZXN0TWV0aG9kLnZhbHVlXSgpO1xuICAgICAgaXNGdWxsc2NyZWVuLnZhbHVlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIGF3YWl0IChpc0Z1bGxzY3JlZW4udmFsdWUgPyBleGl0KCkgOiBlbnRlcigpKTtcbiAgfVxuICBjb25zdCBoYW5kbGVyQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgaXNFbGVtZW50RnVsbFNjcmVlblZhbHVlID0gaXNFbGVtZW50RnVsbFNjcmVlbigpO1xuICAgIGlmICghaXNFbGVtZW50RnVsbFNjcmVlblZhbHVlIHx8IGlzRWxlbWVudEZ1bGxTY3JlZW5WYWx1ZSAmJiBpc0N1cnJlbnRFbGVtZW50RnVsbFNjcmVlbigpKVxuICAgICAgaXNGdWxsc2NyZWVuLnZhbHVlID0gaXNFbGVtZW50RnVsbFNjcmVlblZhbHVlO1xuICB9O1xuICB1c2VFdmVudExpc3RlbmVyKGRvY3VtZW50LCBldmVudEhhbmRsZXJzLCBoYW5kbGVyQ2FsbGJhY2ssIGZhbHNlKTtcbiAgdXNlRXZlbnRMaXN0ZW5lcigoKSA9PiB1bnJlZkVsZW1lbnQodGFyZ2V0UmVmKSwgZXZlbnRIYW5kbGVycywgaGFuZGxlckNhbGxiYWNrLCBmYWxzZSk7XG4gIGlmIChhdXRvRXhpdClcbiAgICB0cnlPblNjb3BlRGlzcG9zZShleGl0KTtcbiAgcmV0dXJuIHtcbiAgICBpc1N1cHBvcnRlZCxcbiAgICBpc0Z1bGxzY3JlZW4sXG4gICAgZW50ZXIsXG4gICAgZXhpdCxcbiAgICB0b2dnbGVcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwR2FtZXBhZFRvWGJveDM2MENvbnRyb2xsZXIoZ2FtZXBhZCkge1xuICByZXR1cm4gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChnYW1lcGFkLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBidXR0b25zOiB7XG4gICAgICAgICAgYTogZ2FtZXBhZC52YWx1ZS5idXR0b25zWzBdLFxuICAgICAgICAgIGI6IGdhbWVwYWQudmFsdWUuYnV0dG9uc1sxXSxcbiAgICAgICAgICB4OiBnYW1lcGFkLnZhbHVlLmJ1dHRvbnNbMl0sXG4gICAgICAgICAgeTogZ2FtZXBhZC52YWx1ZS5idXR0b25zWzNdXG4gICAgICAgIH0sXG4gICAgICAgIGJ1bXBlcjoge1xuICAgICAgICAgIGxlZnQ6IGdhbWVwYWQudmFsdWUuYnV0dG9uc1s0XSxcbiAgICAgICAgICByaWdodDogZ2FtZXBhZC52YWx1ZS5idXR0b25zWzVdXG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXJzOiB7XG4gICAgICAgICAgbGVmdDogZ2FtZXBhZC52YWx1ZS5idXR0b25zWzZdLFxuICAgICAgICAgIHJpZ2h0OiBnYW1lcGFkLnZhbHVlLmJ1dHRvbnNbN11cbiAgICAgICAgfSxcbiAgICAgICAgc3RpY2s6IHtcbiAgICAgICAgICBsZWZ0OiB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiBnYW1lcGFkLnZhbHVlLmF4ZXNbMF0sXG4gICAgICAgICAgICB2ZXJ0aWNhbDogZ2FtZXBhZC52YWx1ZS5heGVzWzFdLFxuICAgICAgICAgICAgYnV0dG9uOiBnYW1lcGFkLnZhbHVlLmJ1dHRvbnNbMTBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICByaWdodDoge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogZ2FtZXBhZC52YWx1ZS5heGVzWzJdLFxuICAgICAgICAgICAgdmVydGljYWw6IGdhbWVwYWQudmFsdWUuYXhlc1szXSxcbiAgICAgICAgICAgIGJ1dHRvbjogZ2FtZXBhZC52YWx1ZS5idXR0b25zWzExXVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZHBhZDoge1xuICAgICAgICAgIHVwOiBnYW1lcGFkLnZhbHVlLmJ1dHRvbnNbMTJdLFxuICAgICAgICAgIGRvd246IGdhbWVwYWQudmFsdWUuYnV0dG9uc1sxM10sXG4gICAgICAgICAgbGVmdDogZ2FtZXBhZC52YWx1ZS5idXR0b25zWzE0XSxcbiAgICAgICAgICByaWdodDogZ2FtZXBhZC52YWx1ZS5idXR0b25zWzE1XVxuICAgICAgICB9LFxuICAgICAgICBiYWNrOiBnYW1lcGFkLnZhbHVlLmJ1dHRvbnNbOF0sXG4gICAgICAgIHN0YXJ0OiBnYW1lcGFkLnZhbHVlLmJ1dHRvbnNbOV1cbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHVzZUdhbWVwYWQob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBuYXZpZ2F0b3IgPSBkZWZhdWx0TmF2aWdhdG9yXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBpc1N1cHBvcnRlZCA9IHVzZVN1cHBvcnRlZCgoKSA9PiBuYXZpZ2F0b3IgJiYgXCJnZXRHYW1lcGFkc1wiIGluIG5hdmlnYXRvcik7XG4gIGNvbnN0IGdhbWVwYWRzID0gcmVmKFtdKTtcbiAgY29uc3Qgb25Db25uZWN0ZWRIb29rID0gY3JlYXRlRXZlbnRIb29rKCk7XG4gIGNvbnN0IG9uRGlzY29ubmVjdGVkSG9vayA9IGNyZWF0ZUV2ZW50SG9vaygpO1xuICBjb25zdCBzdGF0ZUZyb21HYW1lcGFkID0gKGdhbWVwYWQpID0+IHtcbiAgICBjb25zdCBoYXB0aWNBY3R1YXRvcnMgPSBbXTtcbiAgICBjb25zdCB2aWJyYXRpb25BY3R1YXRvciA9IFwidmlicmF0aW9uQWN0dWF0b3JcIiBpbiBnYW1lcGFkID8gZ2FtZXBhZC52aWJyYXRpb25BY3R1YXRvciA6IG51bGw7XG4gICAgaWYgKHZpYnJhdGlvbkFjdHVhdG9yKVxuICAgICAgaGFwdGljQWN0dWF0b3JzLnB1c2godmlicmF0aW9uQWN0dWF0b3IpO1xuICAgIGlmIChnYW1lcGFkLmhhcHRpY0FjdHVhdG9ycylcbiAgICAgIGhhcHRpY0FjdHVhdG9ycy5wdXNoKC4uLmdhbWVwYWQuaGFwdGljQWN0dWF0b3JzKTtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGdhbWVwYWQuaWQsXG4gICAgICBpbmRleDogZ2FtZXBhZC5pbmRleCxcbiAgICAgIGNvbm5lY3RlZDogZ2FtZXBhZC5jb25uZWN0ZWQsXG4gICAgICBtYXBwaW5nOiBnYW1lcGFkLm1hcHBpbmcsXG4gICAgICB0aW1lc3RhbXA6IGdhbWVwYWQudGltZXN0YW1wLFxuICAgICAgdmlicmF0aW9uQWN0dWF0b3I6IGdhbWVwYWQudmlicmF0aW9uQWN0dWF0b3IsXG4gICAgICBoYXB0aWNBY3R1YXRvcnMsXG4gICAgICBheGVzOiBnYW1lcGFkLmF4ZXMubWFwKChheGVzKSA9PiBheGVzKSxcbiAgICAgIGJ1dHRvbnM6IGdhbWVwYWQuYnV0dG9ucy5tYXAoKGJ1dHRvbikgPT4gKHsgcHJlc3NlZDogYnV0dG9uLnByZXNzZWQsIHRvdWNoZWQ6IGJ1dHRvbi50b3VjaGVkLCB2YWx1ZTogYnV0dG9uLnZhbHVlIH0pKVxuICAgIH07XG4gIH07XG4gIGNvbnN0IHVwZGF0ZUdhbWVwYWRTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBfZ2FtZXBhZHMgPSAobmF2aWdhdG9yID09IG51bGwgPyB2b2lkIDAgOiBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKSkgfHwgW107XG4gICAgZm9yIChjb25zdCBnYW1lcGFkIG9mIF9nYW1lcGFkcykge1xuICAgICAgaWYgKGdhbWVwYWQgJiYgZ2FtZXBhZHMudmFsdWVbZ2FtZXBhZC5pbmRleF0pXG4gICAgICAgIGdhbWVwYWRzLnZhbHVlW2dhbWVwYWQuaW5kZXhdID0gc3RhdGVGcm9tR2FtZXBhZChnYW1lcGFkKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHsgaXNBY3RpdmUsIHBhdXNlLCByZXN1bWUgfSA9IHVzZVJhZkZuKHVwZGF0ZUdhbWVwYWRTdGF0ZSk7XG4gIGNvbnN0IG9uR2FtZXBhZENvbm5lY3RlZCA9IChnYW1lcGFkKSA9PiB7XG4gICAgaWYgKCFnYW1lcGFkcy52YWx1ZS5zb21lKCh7IGluZGV4IH0pID0+IGluZGV4ID09PSBnYW1lcGFkLmluZGV4KSkge1xuICAgICAgZ2FtZXBhZHMudmFsdWUucHVzaChzdGF0ZUZyb21HYW1lcGFkKGdhbWVwYWQpKTtcbiAgICAgIG9uQ29ubmVjdGVkSG9vay50cmlnZ2VyKGdhbWVwYWQuaW5kZXgpO1xuICAgIH1cbiAgICByZXN1bWUoKTtcbiAgfTtcbiAgY29uc3Qgb25HYW1lcGFkRGlzY29ubmVjdGVkID0gKGdhbWVwYWQpID0+IHtcbiAgICBnYW1lcGFkcy52YWx1ZSA9IGdhbWVwYWRzLnZhbHVlLmZpbHRlcigoeCkgPT4geC5pbmRleCAhPT0gZ2FtZXBhZC5pbmRleCk7XG4gICAgb25EaXNjb25uZWN0ZWRIb29rLnRyaWdnZXIoZ2FtZXBhZC5pbmRleCk7XG4gIH07XG4gIHVzZUV2ZW50TGlzdGVuZXIoXCJnYW1lcGFkY29ubmVjdGVkXCIsIChlKSA9PiBvbkdhbWVwYWRDb25uZWN0ZWQoZS5nYW1lcGFkKSk7XG4gIHVzZUV2ZW50TGlzdGVuZXIoXCJnYW1lcGFkZGlzY29ubmVjdGVkXCIsIChlKSA9PiBvbkdhbWVwYWREaXNjb25uZWN0ZWQoZS5nYW1lcGFkKSk7XG4gIHRyeU9uTW91bnRlZCgoKSA9PiB7XG4gICAgY29uc3QgX2dhbWVwYWRzID0gKG5hdmlnYXRvciA9PSBudWxsID8gdm9pZCAwIDogbmF2aWdhdG9yLmdldEdhbWVwYWRzKCkpIHx8IFtdO1xuICAgIGZvciAoY29uc3QgZ2FtZXBhZCBvZiBfZ2FtZXBhZHMpIHtcbiAgICAgIGlmIChnYW1lcGFkICYmIGdhbWVwYWRzLnZhbHVlW2dhbWVwYWQuaW5kZXhdKVxuICAgICAgICBvbkdhbWVwYWRDb25uZWN0ZWQoZ2FtZXBhZCk7XG4gICAgfVxuICB9KTtcbiAgcGF1c2UoKTtcbiAgcmV0dXJuIHtcbiAgICBpc1N1cHBvcnRlZCxcbiAgICBvbkNvbm5lY3RlZDogb25Db25uZWN0ZWRIb29rLm9uLFxuICAgIG9uRGlzY29ubmVjdGVkOiBvbkRpc2Nvbm5lY3RlZEhvb2sub24sXG4gICAgZ2FtZXBhZHMsXG4gICAgcGF1c2UsXG4gICAgcmVzdW1lLFxuICAgIGlzQWN0aXZlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZUdlb2xvY2F0aW9uKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgZW5hYmxlSGlnaEFjY3VyYWN5ID0gdHJ1ZSxcbiAgICBtYXhpbXVtQWdlID0gM2U0LFxuICAgIHRpbWVvdXQgPSAyN2UzLFxuICAgIG5hdmlnYXRvciA9IGRlZmF1bHROYXZpZ2F0b3IsXG4gICAgaW1tZWRpYXRlID0gdHJ1ZVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgaXNTdXBwb3J0ZWQgPSB1c2VTdXBwb3J0ZWQoKCkgPT4gbmF2aWdhdG9yICYmIFwiZ2VvbG9jYXRpb25cIiBpbiBuYXZpZ2F0b3IpO1xuICBjb25zdCBsb2NhdGVkQXQgPSByZWYobnVsbCk7XG4gIGNvbnN0IGVycm9yID0gc2hhbGxvd1JlZihudWxsKTtcbiAgY29uc3QgY29vcmRzID0gcmVmKHtcbiAgICBhY2N1cmFjeTogMCxcbiAgICBsYXRpdHVkZTogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgIGxvbmdpdHVkZTogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgIGFsdGl0dWRlOiBudWxsLFxuICAgIGFsdGl0dWRlQWNjdXJhY3k6IG51bGwsXG4gICAgaGVhZGluZzogbnVsbCxcbiAgICBzcGVlZDogbnVsbFxuICB9KTtcbiAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBsb2NhdGVkQXQudmFsdWUgPSBwb3NpdGlvbi50aW1lc3RhbXA7XG4gICAgY29vcmRzLnZhbHVlID0gcG9zaXRpb24uY29vcmRzO1xuICAgIGVycm9yLnZhbHVlID0gbnVsbDtcbiAgfVxuICBsZXQgd2F0Y2hlcjtcbiAgZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgIGlmIChpc1N1cHBvcnRlZC52YWx1ZSkge1xuICAgICAgd2F0Y2hlciA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxuICAgICAgICB1cGRhdGVQb3NpdGlvbixcbiAgICAgICAgKGVycikgPT4gZXJyb3IudmFsdWUgPSBlcnIsXG4gICAgICAgIHtcbiAgICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3ksXG4gICAgICAgICAgbWF4aW11bUFnZSxcbiAgICAgICAgICB0aW1lb3V0XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGlmIChpbW1lZGlhdGUpXG4gICAgcmVzdW1lKCk7XG4gIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIGlmICh3YXRjaGVyICYmIG5hdmlnYXRvcilcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKHdhdGNoZXIpO1xuICB9XG4gIHRyeU9uU2NvcGVEaXNwb3NlKCgpID0+IHtcbiAgICBwYXVzZSgpO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBpc1N1cHBvcnRlZCxcbiAgICBjb29yZHMsXG4gICAgbG9jYXRlZEF0LFxuICAgIGVycm9yLFxuICAgIHJlc3VtZSxcbiAgICBwYXVzZVxuICB9O1xufVxuXG5jb25zdCBkZWZhdWx0RXZlbnRzJDEgPSBbXCJtb3VzZW1vdmVcIiwgXCJtb3VzZWRvd25cIiwgXCJyZXNpemVcIiwgXCJrZXlkb3duXCIsIFwidG91Y2hzdGFydFwiLCBcIndoZWVsXCJdO1xuY29uc3Qgb25lTWludXRlID0gNmU0O1xuZnVuY3Rpb24gdXNlSWRsZSh0aW1lb3V0ID0gb25lTWludXRlLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGluaXRpYWxTdGF0ZSA9IGZhbHNlLFxuICAgIGxpc3RlbkZvclZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlLFxuICAgIGV2ZW50cyA9IGRlZmF1bHRFdmVudHMkMSxcbiAgICB3aW5kb3cgPSBkZWZhdWx0V2luZG93LFxuICAgIGV2ZW50RmlsdGVyID0gdGhyb3R0bGVGaWx0ZXIoNTApXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBpZGxlID0gcmVmKGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IGxhc3RBY3RpdmUgPSByZWYodGltZXN0YW1wKCkpO1xuICBsZXQgdGltZXI7XG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIGlkbGUudmFsdWUgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBpZGxlLnZhbHVlID0gdHJ1ZSwgdGltZW91dCk7XG4gIH07XG4gIGNvbnN0IG9uRXZlbnQgPSBjcmVhdGVGaWx0ZXJXcmFwcGVyKFxuICAgIGV2ZW50RmlsdGVyLFxuICAgICgpID0+IHtcbiAgICAgIGxhc3RBY3RpdmUudmFsdWUgPSB0aW1lc3RhbXAoKTtcbiAgICAgIHJlc2V0KCk7XG4gICAgfVxuICApO1xuICBpZiAod2luZG93KSB7XG4gICAgY29uc3QgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpXG4gICAgICB1c2VFdmVudExpc3RlbmVyKHdpbmRvdywgZXZlbnQsIG9uRXZlbnQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICBpZiAobGlzdGVuRm9yVmlzaWJpbGl0eUNoYW5nZSkge1xuICAgICAgdXNlRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4pXG4gICAgICAgICAgb25FdmVudCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJlc2V0KCk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpZGxlLFxuICAgIGxhc3RBY3RpdmUsXG4gICAgcmVzZXRcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEltYWdlKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCB7IHNyYywgc3Jjc2V0LCBzaXplcywgY2xhc3M6IGNsYXp6LCBsb2FkaW5nLCBjcm9zc29yaWdpbiwgcmVmZXJyZXJQb2xpY3kgfSA9IG9wdGlvbnM7XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgICBpZiAoc3Jjc2V0KVxuICAgICAgaW1nLnNyY3NldCA9IHNyY3NldDtcbiAgICBpZiAoc2l6ZXMpXG4gICAgICBpbWcuc2l6ZXMgPSBzaXplcztcbiAgICBpZiAoY2xhenopXG4gICAgICBpbWcuY2xhc3NOYW1lID0gY2xheno7XG4gICAgaWYgKGxvYWRpbmcpXG4gICAgICBpbWcubG9hZGluZyA9IGxvYWRpbmc7XG4gICAgaWYgKGNyb3Nzb3JpZ2luKVxuICAgICAgaW1nLmNyb3NzT3JpZ2luID0gY3Jvc3NvcmlnaW47XG4gICAgaWYgKHJlZmVycmVyUG9saWN5KVxuICAgICAgaW1nLnJlZmVycmVyUG9saWN5ID0gcmVmZXJyZXJQb2xpY3k7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICBpbWcub25lcnJvciA9IHJlamVjdDtcbiAgfSk7XG59XG5mdW5jdGlvbiB1c2VJbWFnZShvcHRpb25zLCBhc3luY1N0YXRlT3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHN0YXRlID0gdXNlQXN5bmNTdGF0ZShcbiAgICAoKSA9PiBsb2FkSW1hZ2UodG9WYWx1ZShvcHRpb25zKSksXG4gICAgdm9pZCAwLFxuICAgIHtcbiAgICAgIHJlc2V0T25FeGVjdXRlOiB0cnVlLFxuICAgICAgLi4uYXN5bmNTdGF0ZU9wdGlvbnNcbiAgICB9XG4gICk7XG4gIHdhdGNoKFxuICAgICgpID0+IHRvVmFsdWUob3B0aW9ucyksXG4gICAgKCkgPT4gc3RhdGUuZXhlY3V0ZShhc3luY1N0YXRlT3B0aW9ucy5kZWxheSksXG4gICAgeyBkZWVwOiB0cnVlIH1cbiAgKTtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5jb25zdCBBUlJJVkVEX1NUQVRFX1RIUkVTSE9MRF9QSVhFTFMgPSAxO1xuZnVuY3Rpb24gdXNlU2Nyb2xsKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgdGhyb3R0bGUgPSAwLFxuICAgIGlkbGUgPSAyMDAsXG4gICAgb25TdG9wID0gbm9vcCxcbiAgICBvblNjcm9sbCA9IG5vb3AsXG4gICAgb2Zmc2V0ID0ge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgYm90dG9tOiAwXG4gICAgfSxcbiAgICBldmVudExpc3RlbmVyT3B0aW9ucyA9IHtcbiAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0sXG4gICAgYmVoYXZpb3IgPSBcImF1dG9cIixcbiAgICB3aW5kb3cgPSBkZWZhdWx0V2luZG93LFxuICAgIG9uRXJyb3IgPSAoZSkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBpbnRlcm5hbFggPSByZWYoMCk7XG4gIGNvbnN0IGludGVybmFsWSA9IHJlZigwKTtcbiAgY29uc3QgeCA9IGNvbXB1dGVkKHtcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gaW50ZXJuYWxYLnZhbHVlO1xuICAgIH0sXG4gICAgc2V0KHgyKSB7XG4gICAgICBzY3JvbGxUbyh4Miwgdm9pZCAwKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCB5ID0gY29tcHV0ZWQoe1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBpbnRlcm5hbFkudmFsdWU7XG4gICAgfSxcbiAgICBzZXQoeTIpIHtcbiAgICAgIHNjcm9sbFRvKHZvaWQgMCwgeTIpO1xuICAgIH1cbiAgfSk7XG4gIGZ1bmN0aW9uIHNjcm9sbFRvKF94LCBfeSkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBpZiAoIXdpbmRvdylcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBfZWxlbWVudCA9IHRvVmFsdWUoZWxlbWVudCk7XG4gICAgaWYgKCFfZWxlbWVudClcbiAgICAgIHJldHVybjtcbiAgICAoX2MgPSBfZWxlbWVudCBpbnN0YW5jZW9mIERvY3VtZW50ID8gd2luZG93LmRvY3VtZW50LmJvZHkgOiBfZWxlbWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jLnNjcm9sbFRvKHtcbiAgICAgIHRvcDogKF9hID0gdG9WYWx1ZShfeSkpICE9IG51bGwgPyBfYSA6IHkudmFsdWUsXG4gICAgICBsZWZ0OiAoX2IgPSB0b1ZhbHVlKF94KSkgIT0gbnVsbCA/IF9iIDogeC52YWx1ZSxcbiAgICAgIGJlaGF2aW9yOiB0b1ZhbHVlKGJlaGF2aW9yKVxuICAgIH0pO1xuICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9ICgoX2QgPSBfZWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQuZG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZC5kb2N1bWVudEVsZW1lbnQpIHx8IChfZWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQuZG9jdW1lbnRFbGVtZW50KSB8fCBfZWxlbWVudDtcbiAgICBpZiAoeCAhPSBudWxsKVxuICAgICAgaW50ZXJuYWxYLnZhbHVlID0gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQ7XG4gICAgaWYgKHkgIT0gbnVsbClcbiAgICAgIGludGVybmFsWS52YWx1ZSA9IHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3A7XG4gIH1cbiAgY29uc3QgaXNTY3JvbGxpbmcgPSByZWYoZmFsc2UpO1xuICBjb25zdCBhcnJpdmVkU3RhdGUgPSByZWFjdGl2ZSh7XG4gICAgbGVmdDogdHJ1ZSxcbiAgICByaWdodDogZmFsc2UsXG4gICAgdG9wOiB0cnVlLFxuICAgIGJvdHRvbTogZmFsc2VcbiAgfSk7XG4gIGNvbnN0IGRpcmVjdGlvbnMgPSByZWFjdGl2ZSh7XG4gICAgbGVmdDogZmFsc2UsXG4gICAgcmlnaHQ6IGZhbHNlLFxuICAgIHRvcDogZmFsc2UsXG4gICAgYm90dG9tOiBmYWxzZVxuICB9KTtcbiAgY29uc3Qgb25TY3JvbGxFbmQgPSAoZSkgPT4ge1xuICAgIGlmICghaXNTY3JvbGxpbmcudmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgaXNTY3JvbGxpbmcudmFsdWUgPSBmYWxzZTtcbiAgICBkaXJlY3Rpb25zLmxlZnQgPSBmYWxzZTtcbiAgICBkaXJlY3Rpb25zLnJpZ2h0ID0gZmFsc2U7XG4gICAgZGlyZWN0aW9ucy50b3AgPSBmYWxzZTtcbiAgICBkaXJlY3Rpb25zLmJvdHRvbSA9IGZhbHNlO1xuICAgIG9uU3RvcChlKTtcbiAgfTtcbiAgY29uc3Qgb25TY3JvbGxFbmREZWJvdW5jZWQgPSB1c2VEZWJvdW5jZUZuKG9uU2Nyb2xsRW5kLCB0aHJvdHRsZSArIGlkbGUpO1xuICBjb25zdCBzZXRBcnJpdmVkU3RhdGUgPSAodGFyZ2V0KSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghd2luZG93KVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGVsID0gKChfYSA9IHRhcmdldCA9PSBudWxsID8gdm9pZCAwIDogdGFyZ2V0LmRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2EuZG9jdW1lbnRFbGVtZW50KSB8fCAodGFyZ2V0ID09IG51bGwgPyB2b2lkIDAgOiB0YXJnZXQuZG9jdW1lbnRFbGVtZW50KSB8fCB1bnJlZkVsZW1lbnQodGFyZ2V0KTtcbiAgICBjb25zdCB7IGRpc3BsYXksIGZsZXhEaXJlY3Rpb24gfSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSBlbC5zY3JvbGxMZWZ0O1xuICAgIGRpcmVjdGlvbnMubGVmdCA9IHNjcm9sbExlZnQgPCBpbnRlcm5hbFgudmFsdWU7XG4gICAgZGlyZWN0aW9ucy5yaWdodCA9IHNjcm9sbExlZnQgPiBpbnRlcm5hbFgudmFsdWU7XG4gICAgY29uc3QgbGVmdCA9IE1hdGguYWJzKHNjcm9sbExlZnQpIDw9IChvZmZzZXQubGVmdCB8fCAwKTtcbiAgICBjb25zdCByaWdodCA9IE1hdGguYWJzKHNjcm9sbExlZnQpICsgZWwuY2xpZW50V2lkdGggPj0gZWwuc2Nyb2xsV2lkdGggLSAob2Zmc2V0LnJpZ2h0IHx8IDApIC0gQVJSSVZFRF9TVEFURV9USFJFU0hPTERfUElYRUxTO1xuICAgIGlmIChkaXNwbGF5ID09PSBcImZsZXhcIiAmJiBmbGV4RGlyZWN0aW9uID09PSBcInJvdy1yZXZlcnNlXCIpIHtcbiAgICAgIGFycml2ZWRTdGF0ZS5sZWZ0ID0gcmlnaHQ7XG4gICAgICBhcnJpdmVkU3RhdGUucmlnaHQgPSBsZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnJpdmVkU3RhdGUubGVmdCA9IGxlZnQ7XG4gICAgICBhcnJpdmVkU3RhdGUucmlnaHQgPSByaWdodDtcbiAgICB9XG4gICAgaW50ZXJuYWxYLnZhbHVlID0gc2Nyb2xsTGVmdDtcbiAgICBsZXQgc2Nyb2xsVG9wID0gZWwuc2Nyb2xsVG9wO1xuICAgIGlmICh0YXJnZXQgPT09IHdpbmRvdy5kb2N1bWVudCAmJiAhc2Nyb2xsVG9wKVxuICAgICAgc2Nyb2xsVG9wID0gd2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIGRpcmVjdGlvbnMudG9wID0gc2Nyb2xsVG9wIDwgaW50ZXJuYWxZLnZhbHVlO1xuICAgIGRpcmVjdGlvbnMuYm90dG9tID0gc2Nyb2xsVG9wID4gaW50ZXJuYWxZLnZhbHVlO1xuICAgIGNvbnN0IHRvcCA9IE1hdGguYWJzKHNjcm9sbFRvcCkgPD0gKG9mZnNldC50b3AgfHwgMCk7XG4gICAgY29uc3QgYm90dG9tID0gTWF0aC5hYnMoc2Nyb2xsVG9wKSArIGVsLmNsaWVudEhlaWdodCA+PSBlbC5zY3JvbGxIZWlnaHQgLSAob2Zmc2V0LmJvdHRvbSB8fCAwKSAtIEFSUklWRURfU1RBVEVfVEhSRVNIT0xEX1BJWEVMUztcbiAgICBpZiAoZGlzcGxheSA9PT0gXCJmbGV4XCIgJiYgZmxleERpcmVjdGlvbiA9PT0gXCJjb2x1bW4tcmV2ZXJzZVwiKSB7XG4gICAgICBhcnJpdmVkU3RhdGUudG9wID0gYm90dG9tO1xuICAgICAgYXJyaXZlZFN0YXRlLmJvdHRvbSA9IHRvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyaXZlZFN0YXRlLnRvcCA9IHRvcDtcbiAgICAgIGFycml2ZWRTdGF0ZS5ib3R0b20gPSBib3R0b207XG4gICAgfVxuICAgIGludGVybmFsWS52YWx1ZSA9IHNjcm9sbFRvcDtcbiAgfTtcbiAgY29uc3Qgb25TY3JvbGxIYW5kbGVyID0gKGUpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKCF3aW5kb3cpXG4gICAgICByZXR1cm47XG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSAoX2EgPSBlLnRhcmdldC5kb2N1bWVudEVsZW1lbnQpICE9IG51bGwgPyBfYSA6IGUudGFyZ2V0O1xuICAgIHNldEFycml2ZWRTdGF0ZShldmVudFRhcmdldCk7XG4gICAgaXNTY3JvbGxpbmcudmFsdWUgPSB0cnVlO1xuICAgIG9uU2Nyb2xsRW5kRGVib3VuY2VkKGUpO1xuICAgIG9uU2Nyb2xsKGUpO1xuICB9O1xuICB1c2VFdmVudExpc3RlbmVyKFxuICAgIGVsZW1lbnQsXG4gICAgXCJzY3JvbGxcIixcbiAgICB0aHJvdHRsZSA/IHVzZVRocm90dGxlRm4ob25TY3JvbGxIYW5kbGVyLCB0aHJvdHRsZSwgdHJ1ZSwgZmFsc2UpIDogb25TY3JvbGxIYW5kbGVyLFxuICAgIGV2ZW50TGlzdGVuZXJPcHRpb25zXG4gICk7XG4gIHRyeU9uTW91bnRlZCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IF9lbGVtZW50ID0gdG9WYWx1ZShlbGVtZW50KTtcbiAgICAgIGlmICghX2VsZW1lbnQpXG4gICAgICAgIHJldHVybjtcbiAgICAgIHNldEFycml2ZWRTdGF0ZShfZWxlbWVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgb25FcnJvcihlKTtcbiAgICB9XG4gIH0pO1xuICB1c2VFdmVudExpc3RlbmVyKFxuICAgIGVsZW1lbnQsXG4gICAgXCJzY3JvbGxlbmRcIixcbiAgICBvblNjcm9sbEVuZCxcbiAgICBldmVudExpc3RlbmVyT3B0aW9uc1xuICApO1xuICByZXR1cm4ge1xuICAgIHgsXG4gICAgeSxcbiAgICBpc1Njcm9sbGluZyxcbiAgICBhcnJpdmVkU3RhdGUsXG4gICAgZGlyZWN0aW9ucyxcbiAgICBtZWFzdXJlKCkge1xuICAgICAgY29uc3QgX2VsZW1lbnQgPSB0b1ZhbHVlKGVsZW1lbnQpO1xuICAgICAgaWYgKHdpbmRvdyAmJiBfZWxlbWVudClcbiAgICAgICAgc2V0QXJyaXZlZFN0YXRlKF9lbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVFbGVtZW50KGVsKSB7XG4gIGlmICh0eXBlb2YgV2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIGVsIGluc3RhbmNlb2YgV2luZG93KVxuICAgIHJldHVybiBlbC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGlmICh0eXBlb2YgRG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZWwgaW5zdGFuY2VvZiBEb2N1bWVudClcbiAgICByZXR1cm4gZWwuZG9jdW1lbnRFbGVtZW50O1xuICByZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIHVzZUluZmluaXRlU2Nyb2xsKGVsZW1lbnQsIG9uTG9hZE1vcmUsIG9wdGlvbnMgPSB7fSkge1xuICB2YXIgX2E7XG4gIGNvbnN0IHtcbiAgICBkaXJlY3Rpb24gPSBcImJvdHRvbVwiLFxuICAgIGludGVydmFsID0gMTAwLFxuICAgIGNhbkxvYWRNb3JlID0gKCkgPT4gdHJ1ZVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3Qgc3RhdGUgPSByZWFjdGl2ZSh1c2VTY3JvbGwoXG4gICAgZWxlbWVudCxcbiAgICB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgb2Zmc2V0OiB7XG4gICAgICAgIFtkaXJlY3Rpb25dOiAoX2EgPSBvcHRpb25zLmRpc3RhbmNlKSAhPSBudWxsID8gX2EgOiAwLFxuICAgICAgICAuLi5vcHRpb25zLm9mZnNldFxuICAgICAgfVxuICAgIH1cbiAgKSk7XG4gIGNvbnN0IHByb21pc2UgPSByZWYoKTtcbiAgY29uc3QgaXNMb2FkaW5nID0gY29tcHV0ZWQoKCkgPT4gISFwcm9taXNlLnZhbHVlKTtcbiAgY29uc3Qgb2JzZXJ2ZWRFbGVtZW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiByZXNvbHZlRWxlbWVudCh0b1ZhbHVlKGVsZW1lbnQpKTtcbiAgfSk7XG4gIGNvbnN0IGlzRWxlbWVudFZpc2libGUgPSB1c2VFbGVtZW50VmlzaWJpbGl0eShvYnNlcnZlZEVsZW1lbnQpO1xuICBmdW5jdGlvbiBjaGVja0FuZExvYWQoKSB7XG4gICAgc3RhdGUubWVhc3VyZSgpO1xuICAgIGlmICghb2JzZXJ2ZWRFbGVtZW50LnZhbHVlIHx8ICFpc0VsZW1lbnRWaXNpYmxlLnZhbHVlIHx8ICFjYW5Mb2FkTW9yZShvYnNlcnZlZEVsZW1lbnQudmFsdWUpKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHsgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQsIHNjcm9sbFdpZHRoLCBjbGllbnRXaWR0aCB9ID0gb2JzZXJ2ZWRFbGVtZW50LnZhbHVlO1xuICAgIGNvbnN0IGlzTmFycm93ZXIgPSBkaXJlY3Rpb24gPT09IFwiYm90dG9tXCIgfHwgZGlyZWN0aW9uID09PSBcInRvcFwiID8gc2Nyb2xsSGVpZ2h0IDw9IGNsaWVudEhlaWdodCA6IHNjcm9sbFdpZHRoIDw9IGNsaWVudFdpZHRoO1xuICAgIGlmIChzdGF0ZS5hcnJpdmVkU3RhdGVbZGlyZWN0aW9uXSB8fCBpc05hcnJvd2VyKSB7XG4gICAgICBpZiAoIXByb21pc2UudmFsdWUpIHtcbiAgICAgICAgcHJvbWlzZS52YWx1ZSA9IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBvbkxvYWRNb3JlKHN0YXRlKSxcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBpbnRlcnZhbCkpXG4gICAgICAgIF0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHByb21pc2UudmFsdWUgPSBudWxsO1xuICAgICAgICAgIG5leHRUaWNrKCgpID0+IGNoZWNrQW5kTG9hZCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHdhdGNoKFxuICAgICgpID0+IFtzdGF0ZS5hcnJpdmVkU3RhdGVbZGlyZWN0aW9uXSwgaXNFbGVtZW50VmlzaWJsZS52YWx1ZV0sXG4gICAgY2hlY2tBbmRMb2FkLFxuICAgIHsgaW1tZWRpYXRlOiB0cnVlIH1cbiAgKTtcbiAgcmV0dXJuIHtcbiAgICBpc0xvYWRpbmdcbiAgfTtcbn1cblxuY29uc3QgZGVmYXVsdEV2ZW50cyA9IFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJrZXlkb3duXCIsIFwia2V5dXBcIl07XG5mdW5jdGlvbiB1c2VLZXlNb2RpZmllcihtb2RpZmllciwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBldmVudHMgPSBkZWZhdWx0RXZlbnRzLFxuICAgIGRvY3VtZW50ID0gZGVmYXVsdERvY3VtZW50LFxuICAgIGluaXRpYWwgPSBudWxsXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBzdGF0ZSA9IHJlZihpbml0aWFsKTtcbiAgaWYgKGRvY3VtZW50KSB7XG4gICAgZXZlbnRzLmZvckVhY2goKGxpc3RlbmVyRXZlbnQpID0+IHtcbiAgICAgIHVzZUV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsIGxpc3RlbmVyRXZlbnQsIChldnQpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBldnQuZ2V0TW9kaWZpZXJTdGF0ZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgIHN0YXRlLnZhbHVlID0gZXZ0LmdldE1vZGlmaWVyU3RhdGUobW9kaWZpZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiB1c2VMb2NhbFN0b3JhZ2Uoa2V5LCBpbml0aWFsVmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IHdpbmRvdyA9IGRlZmF1bHRXaW5kb3cgfSA9IG9wdGlvbnM7XG4gIHJldHVybiB1c2VTdG9yYWdlKGtleSwgaW5pdGlhbFZhbHVlLCB3aW5kb3cgPT0gbnVsbCA/IHZvaWQgMCA6IHdpbmRvdy5sb2NhbFN0b3JhZ2UsIG9wdGlvbnMpO1xufVxuXG5jb25zdCBEZWZhdWx0TWFnaWNLZXlzQWxpYXNNYXAgPSB7XG4gIGN0cmw6IFwiY29udHJvbFwiLFxuICBjb21tYW5kOiBcIm1ldGFcIixcbiAgY21kOiBcIm1ldGFcIixcbiAgb3B0aW9uOiBcImFsdFwiLFxuICB1cDogXCJhcnJvd3VwXCIsXG4gIGRvd246IFwiYXJyb3dkb3duXCIsXG4gIGxlZnQ6IFwiYXJyb3dsZWZ0XCIsXG4gIHJpZ2h0OiBcImFycm93cmlnaHRcIlxufTtcblxuZnVuY3Rpb24gdXNlTWFnaWNLZXlzKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgcmVhY3RpdmU6IHVzZVJlYWN0aXZlID0gZmFsc2UsXG4gICAgdGFyZ2V0ID0gZGVmYXVsdFdpbmRvdyxcbiAgICBhbGlhc01hcCA9IERlZmF1bHRNYWdpY0tleXNBbGlhc01hcCxcbiAgICBwYXNzaXZlID0gdHJ1ZSxcbiAgICBvbkV2ZW50RmlyZWQgPSBub29wXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBjdXJyZW50ID0gcmVhY3RpdmUoLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG4gIGNvbnN0IG9iaiA9IHtcbiAgICB0b0pTT04oKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICBjdXJyZW50XG4gIH07XG4gIGNvbnN0IHJlZnMgPSB1c2VSZWFjdGl2ZSA/IHJlYWN0aXZlKG9iaikgOiBvYmo7XG4gIGNvbnN0IG1ldGFEZXBzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgY29uc3QgdXNlZEtleXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBmdW5jdGlvbiBzZXRSZWZzKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIHJlZnMpIHtcbiAgICAgIGlmICh1c2VSZWFjdGl2ZSlcbiAgICAgICAgcmVmc1trZXldID0gdmFsdWU7XG4gICAgICBlbHNlXG4gICAgICAgIHJlZnNba2V5XS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBjdXJyZW50LmNsZWFyKCk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgdXNlZEtleXMpXG4gICAgICBzZXRSZWZzKGtleSwgZmFsc2UpO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVJlZnMoZSwgdmFsdWUpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IGtleSA9IChfYSA9IGUua2V5KSA9PSBudWxsID8gdm9pZCAwIDogX2EudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBjb2RlID0gKF9iID0gZS5jb2RlKSA9PSBudWxsID8gdm9pZCAwIDogX2IudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB2YWx1ZXMgPSBbY29kZSwga2V5XS5maWx0ZXIoQm9vbGVhbik7XG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHZhbHVlKVxuICAgICAgICBjdXJyZW50LmFkZChrZXkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdXJyZW50LmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleTIgb2YgdmFsdWVzKSB7XG4gICAgICB1c2VkS2V5cy5hZGQoa2V5Mik7XG4gICAgICBzZXRSZWZzKGtleTIsIHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGtleSA9PT0gXCJtZXRhXCIgJiYgIXZhbHVlKSB7XG4gICAgICBtZXRhRGVwcy5mb3JFYWNoKChrZXkyKSA9PiB7XG4gICAgICAgIGN1cnJlbnQuZGVsZXRlKGtleTIpO1xuICAgICAgICBzZXRSZWZzKGtleTIsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgbWV0YURlcHMuY2xlYXIoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlLmdldE1vZGlmaWVyU3RhdGUgPT09IFwiZnVuY3Rpb25cIiAmJiBlLmdldE1vZGlmaWVyU3RhdGUoXCJNZXRhXCIpICYmIHZhbHVlKSB7XG4gICAgICBbLi4uY3VycmVudCwgLi4udmFsdWVzXS5mb3JFYWNoKChrZXkyKSA9PiBtZXRhRGVwcy5hZGQoa2V5MikpO1xuICAgIH1cbiAgfVxuICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgdXBkYXRlUmVmcyhlLCB0cnVlKTtcbiAgICByZXR1cm4gb25FdmVudEZpcmVkKGUpO1xuICB9LCB7IHBhc3NpdmUgfSk7XG4gIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBcImtleXVwXCIsIChlKSA9PiB7XG4gICAgdXBkYXRlUmVmcyhlLCBmYWxzZSk7XG4gICAgcmV0dXJuIG9uRXZlbnRGaXJlZChlKTtcbiAgfSwgeyBwYXNzaXZlIH0pO1xuICB1c2VFdmVudExpc3RlbmVyKFwiYmx1clwiLCByZXNldCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICB1c2VFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgcmVzZXQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkoXG4gICAgcmVmcyxcbiAgICB7XG4gICAgICBnZXQodGFyZ2V0MiwgcHJvcCwgcmVjKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0MiwgcHJvcCwgcmVjKTtcbiAgICAgICAgcHJvcCA9IHByb3AudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHByb3AgaW4gYWxpYXNNYXApXG4gICAgICAgICAgcHJvcCA9IGFsaWFzTWFwW3Byb3BdO1xuICAgICAgICBpZiAoIShwcm9wIGluIHJlZnMpKSB7XG4gICAgICAgICAgaWYgKC9bK18tXS8udGVzdChwcm9wKSkge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IHByb3Auc3BsaXQoL1srXy1dL2cpLm1hcCgoaSkgPT4gaS50cmltKCkpO1xuICAgICAgICAgICAgcmVmc1twcm9wXSA9IGNvbXB1dGVkKCgpID0+IGtleXMuZXZlcnkoKGtleSkgPT4gdG9WYWx1ZShwcm94eVtrZXldKSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWZzW3Byb3BdID0gcmVmKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgciA9IFJlZmxlY3QuZ2V0KHRhcmdldDIsIHByb3AsIHJlYyk7XG4gICAgICAgIHJldHVybiB1c2VSZWFjdGl2ZSA/IHRvVmFsdWUocikgOiByO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbiAgcmV0dXJuIHByb3h5O1xufVxuXG5mdW5jdGlvbiB1c2luZ0VsUmVmKHNvdXJjZSwgY2IpIHtcbiAgaWYgKHRvVmFsdWUoc291cmNlKSlcbiAgICBjYih0b1ZhbHVlKHNvdXJjZSkpO1xufVxuZnVuY3Rpb24gdGltZVJhbmdlVG9BcnJheSh0aW1lUmFuZ2VzKSB7XG4gIGxldCByYW5nZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lUmFuZ2VzLmxlbmd0aDsgKytpKVxuICAgIHJhbmdlcyA9IFsuLi5yYW5nZXMsIFt0aW1lUmFuZ2VzLnN0YXJ0KGkpLCB0aW1lUmFuZ2VzLmVuZChpKV1dO1xuICByZXR1cm4gcmFuZ2VzO1xufVxuZnVuY3Rpb24gdHJhY2tzVG9BcnJheSh0cmFja3MpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20odHJhY2tzKS5tYXAoKHsgbGFiZWwsIGtpbmQsIGxhbmd1YWdlLCBtb2RlLCBhY3RpdmVDdWVzLCBjdWVzLCBpbkJhbmRNZXRhZGF0YVRyYWNrRGlzcGF0Y2hUeXBlIH0sIGlkKSA9PiAoeyBpZCwgbGFiZWwsIGtpbmQsIGxhbmd1YWdlLCBtb2RlLCBhY3RpdmVDdWVzLCBjdWVzLCBpbkJhbmRNZXRhZGF0YVRyYWNrRGlzcGF0Y2hUeXBlIH0pKTtcbn1cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBzcmM6IFwiXCIsXG4gIHRyYWNrczogW11cbn07XG5mdW5jdGlvbiB1c2VNZWRpYUNvbnRyb2xzKHRhcmdldCwgb3B0aW9ucyA9IHt9KSB7XG4gIHRhcmdldCA9IHRvUmVmKHRhcmdldCk7XG4gIG9wdGlvbnMgPSB7XG4gICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuICBjb25zdCB7XG4gICAgZG9jdW1lbnQgPSBkZWZhdWx0RG9jdW1lbnRcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gcmVmKDApO1xuICBjb25zdCBkdXJhdGlvbiA9IHJlZigwKTtcbiAgY29uc3Qgc2Vla2luZyA9IHJlZihmYWxzZSk7XG4gIGNvbnN0IHZvbHVtZSA9IHJlZigxKTtcbiAgY29uc3Qgd2FpdGluZyA9IHJlZihmYWxzZSk7XG4gIGNvbnN0IGVuZGVkID0gcmVmKGZhbHNlKTtcbiAgY29uc3QgcGxheWluZyA9IHJlZihmYWxzZSk7XG4gIGNvbnN0IHJhdGUgPSByZWYoMSk7XG4gIGNvbnN0IHN0YWxsZWQgPSByZWYoZmFsc2UpO1xuICBjb25zdCBidWZmZXJlZCA9IHJlZihbXSk7XG4gIGNvbnN0IHRyYWNrcyA9IHJlZihbXSk7XG4gIGNvbnN0IHNlbGVjdGVkVHJhY2sgPSByZWYoLTEpO1xuICBjb25zdCBpc1BpY3R1cmVJblBpY3R1cmUgPSByZWYoZmFsc2UpO1xuICBjb25zdCBtdXRlZCA9IHJlZihmYWxzZSk7XG4gIGNvbnN0IHN1cHBvcnRzUGljdHVyZUluUGljdHVyZSA9IGRvY3VtZW50ICYmIFwicGljdHVyZUluUGljdHVyZUVuYWJsZWRcIiBpbiBkb2N1bWVudDtcbiAgY29uc3Qgc291cmNlRXJyb3JFdmVudCA9IGNyZWF0ZUV2ZW50SG9vaygpO1xuICBjb25zdCBkaXNhYmxlVHJhY2sgPSAodHJhY2spID0+IHtcbiAgICB1c2luZ0VsUmVmKHRhcmdldCwgKGVsKSA9PiB7XG4gICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgY29uc3QgaWQgPSB0eXBlb2YgdHJhY2sgPT09IFwibnVtYmVyXCIgPyB0cmFjayA6IHRyYWNrLmlkO1xuICAgICAgICBlbC50ZXh0VHJhY2tzW2lkXS5tb2RlID0gXCJkaXNhYmxlZFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbC50ZXh0VHJhY2tzLmxlbmd0aDsgKytpKVxuICAgICAgICAgIGVsLnRleHRUcmFja3NbaV0ubW9kZSA9IFwiZGlzYWJsZWRcIjtcbiAgICAgIH1cbiAgICAgIHNlbGVjdGVkVHJhY2sudmFsdWUgPSAtMTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgZW5hYmxlVHJhY2sgPSAodHJhY2ssIGRpc2FibGVUcmFja3MgPSB0cnVlKSA9PiB7XG4gICAgdXNpbmdFbFJlZih0YXJnZXQsIChlbCkgPT4ge1xuICAgICAgY29uc3QgaWQgPSB0eXBlb2YgdHJhY2sgPT09IFwibnVtYmVyXCIgPyB0cmFjayA6IHRyYWNrLmlkO1xuICAgICAgaWYgKGRpc2FibGVUcmFja3MpXG4gICAgICAgIGRpc2FibGVUcmFjaygpO1xuICAgICAgZWwudGV4dFRyYWNrc1tpZF0ubW9kZSA9IFwic2hvd2luZ1wiO1xuICAgICAgc2VsZWN0ZWRUcmFjay52YWx1ZSA9IGlkO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCB0b2dnbGVQaWN0dXJlSW5QaWN0dXJlID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB1c2luZ0VsUmVmKHRhcmdldCwgYXN5bmMgKGVsKSA9PiB7XG4gICAgICAgIGlmIChzdXBwb3J0c1BpY3R1cmVJblBpY3R1cmUpIHtcbiAgICAgICAgICBpZiAoIWlzUGljdHVyZUluUGljdHVyZS52YWx1ZSkge1xuICAgICAgICAgICAgZWwucmVxdWVzdFBpY3R1cmVJblBpY3R1cmUoKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4aXRQaWN0dXJlSW5QaWN0dXJlKCkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHdhdGNoRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRvY3VtZW50KVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGVsID0gdG9WYWx1ZSh0YXJnZXQpO1xuICAgIGlmICghZWwpXG4gICAgICByZXR1cm47XG4gICAgY29uc3Qgc3JjID0gdG9WYWx1ZShvcHRpb25zLnNyYyk7XG4gICAgbGV0IHNvdXJjZXMgPSBbXTtcbiAgICBpZiAoIXNyYylcbiAgICAgIHJldHVybjtcbiAgICBpZiAodHlwZW9mIHNyYyA9PT0gXCJzdHJpbmdcIilcbiAgICAgIHNvdXJjZXMgPSBbeyBzcmMgfV07XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzcmMpKVxuICAgICAgc291cmNlcyA9IHNyYztcbiAgICBlbHNlIGlmIChpc09iamVjdChzcmMpKVxuICAgICAgc291cmNlcyA9IFtzcmNdO1xuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzb3VyY2VcIikuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgc291cmNlRXJyb3JFdmVudC50cmlnZ2VyKTtcbiAgICAgIGUucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgc291cmNlcy5mb3JFYWNoKCh7IHNyYzogc3JjMiwgdHlwZSB9KSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuICAgICAgc291cmNlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzcmMyKTtcbiAgICAgIHNvdXJjZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUgfHwgXCJcIik7XG4gICAgICBzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIHNvdXJjZUVycm9yRXZlbnQudHJpZ2dlcik7XG4gICAgICBlbC5hcHBlbmRDaGlsZChzb3VyY2UpO1xuICAgIH0pO1xuICAgIGVsLmxvYWQoKTtcbiAgfSk7XG4gIHRyeU9uU2NvcGVEaXNwb3NlKCgpID0+IHtcbiAgICBjb25zdCBlbCA9IHRvVmFsdWUodGFyZ2V0KTtcbiAgICBpZiAoIWVsKVxuICAgICAgcmV0dXJuO1xuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzb3VyY2VcIikuZm9yRWFjaCgoZSkgPT4gZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgc291cmNlRXJyb3JFdmVudC50cmlnZ2VyKSk7XG4gIH0pO1xuICB3YXRjaChbdGFyZ2V0LCB2b2x1bWVdLCAoKSA9PiB7XG4gICAgY29uc3QgZWwgPSB0b1ZhbHVlKHRhcmdldCk7XG4gICAgaWYgKCFlbClcbiAgICAgIHJldHVybjtcbiAgICBlbC52b2x1bWUgPSB2b2x1bWUudmFsdWU7XG4gIH0pO1xuICB3YXRjaChbdGFyZ2V0LCBtdXRlZF0sICgpID0+IHtcbiAgICBjb25zdCBlbCA9IHRvVmFsdWUodGFyZ2V0KTtcbiAgICBpZiAoIWVsKVxuICAgICAgcmV0dXJuO1xuICAgIGVsLm11dGVkID0gbXV0ZWQudmFsdWU7XG4gIH0pO1xuICB3YXRjaChbdGFyZ2V0LCByYXRlXSwgKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gdG9WYWx1ZSh0YXJnZXQpO1xuICAgIGlmICghZWwpXG4gICAgICByZXR1cm47XG4gICAgZWwucGxheWJhY2tSYXRlID0gcmF0ZS52YWx1ZTtcbiAgfSk7XG4gIHdhdGNoRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRvY3VtZW50KVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHRleHRUcmFja3MgPSB0b1ZhbHVlKG9wdGlvbnMudHJhY2tzKTtcbiAgICBjb25zdCBlbCA9IHRvVmFsdWUodGFyZ2V0KTtcbiAgICBpZiAoIXRleHRUcmFja3MgfHwgIXRleHRUcmFja3MubGVuZ3RoIHx8ICFlbClcbiAgICAgIHJldHVybjtcbiAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKFwidHJhY2tcIikuZm9yRWFjaCgoZSkgPT4gZS5yZW1vdmUoKSk7XG4gICAgdGV4dFRyYWNrcy5mb3JFYWNoKCh7IGRlZmF1bHQ6IGlzRGVmYXVsdCwga2luZCwgbGFiZWwsIHNyYywgc3JjTGFuZyB9LCBpKSA9PiB7XG4gICAgICBjb25zdCB0cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0cmFja1wiKTtcbiAgICAgIHRyYWNrLmRlZmF1bHQgPSBpc0RlZmF1bHQgfHwgZmFsc2U7XG4gICAgICB0cmFjay5raW5kID0ga2luZDtcbiAgICAgIHRyYWNrLmxhYmVsID0gbGFiZWw7XG4gICAgICB0cmFjay5zcmMgPSBzcmM7XG4gICAgICB0cmFjay5zcmNsYW5nID0gc3JjTGFuZztcbiAgICAgIGlmICh0cmFjay5kZWZhdWx0KVxuICAgICAgICBzZWxlY3RlZFRyYWNrLnZhbHVlID0gaTtcbiAgICAgIGVsLmFwcGVuZENoaWxkKHRyYWNrKTtcbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IHsgaWdub3JlVXBkYXRlczogaWdub3JlQ3VycmVudFRpbWVVcGRhdGVzIH0gPSB3YXRjaElnbm9yYWJsZShjdXJyZW50VGltZSwgKHRpbWUpID0+IHtcbiAgICBjb25zdCBlbCA9IHRvVmFsdWUodGFyZ2V0KTtcbiAgICBpZiAoIWVsKVxuICAgICAgcmV0dXJuO1xuICAgIGVsLmN1cnJlbnRUaW1lID0gdGltZTtcbiAgfSk7XG4gIGNvbnN0IHsgaWdub3JlVXBkYXRlczogaWdub3JlUGxheWluZ1VwZGF0ZXMgfSA9IHdhdGNoSWdub3JhYmxlKHBsYXlpbmcsIChpc1BsYXlpbmcpID0+IHtcbiAgICBjb25zdCBlbCA9IHRvVmFsdWUodGFyZ2V0KTtcbiAgICBpZiAoIWVsKVxuICAgICAgcmV0dXJuO1xuICAgIGlzUGxheWluZyA/IGVsLnBsYXkoKSA6IGVsLnBhdXNlKCk7XG4gIH0pO1xuICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgXCJ0aW1ldXBkYXRlXCIsICgpID0+IGlnbm9yZUN1cnJlbnRUaW1lVXBkYXRlcygoKSA9PiBjdXJyZW50VGltZS52YWx1ZSA9IHRvVmFsdWUodGFyZ2V0KS5jdXJyZW50VGltZSkpO1xuICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgXCJkdXJhdGlvbmNoYW5nZVwiLCAoKSA9PiBkdXJhdGlvbi52YWx1ZSA9IHRvVmFsdWUodGFyZ2V0KS5kdXJhdGlvbik7XG4gIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBcInByb2dyZXNzXCIsICgpID0+IGJ1ZmZlcmVkLnZhbHVlID0gdGltZVJhbmdlVG9BcnJheSh0b1ZhbHVlKHRhcmdldCkuYnVmZmVyZWQpKTtcbiAgdXNlRXZlbnRMaXN0ZW5lcih0YXJnZXQsIFwic2Vla2luZ1wiLCAoKSA9PiBzZWVraW5nLnZhbHVlID0gdHJ1ZSk7XG4gIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBcInNlZWtlZFwiLCAoKSA9PiBzZWVraW5nLnZhbHVlID0gZmFsc2UpO1xuICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgW1wid2FpdGluZ1wiLCBcImxvYWRzdGFydFwiXSwgKCkgPT4ge1xuICAgIHdhaXRpbmcudmFsdWUgPSB0cnVlO1xuICAgIGlnbm9yZVBsYXlpbmdVcGRhdGVzKCgpID0+IHBsYXlpbmcudmFsdWUgPSBmYWxzZSk7XG4gIH0pO1xuICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgXCJsb2FkZWRkYXRhXCIsICgpID0+IHdhaXRpbmcudmFsdWUgPSBmYWxzZSk7XG4gIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBcInBsYXlpbmdcIiwgKCkgPT4ge1xuICAgIHdhaXRpbmcudmFsdWUgPSBmYWxzZTtcbiAgICBlbmRlZC52YWx1ZSA9IGZhbHNlO1xuICAgIGlnbm9yZVBsYXlpbmdVcGRhdGVzKCgpID0+IHBsYXlpbmcudmFsdWUgPSB0cnVlKTtcbiAgfSk7XG4gIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBcInJhdGVjaGFuZ2VcIiwgKCkgPT4gcmF0ZS52YWx1ZSA9IHRvVmFsdWUodGFyZ2V0KS5wbGF5YmFja1JhdGUpO1xuICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgXCJzdGFsbGVkXCIsICgpID0+IHN0YWxsZWQudmFsdWUgPSB0cnVlKTtcbiAgdXNlRXZlbnRMaXN0ZW5lcih0YXJnZXQsIFwiZW5kZWRcIiwgKCkgPT4gZW5kZWQudmFsdWUgPSB0cnVlKTtcbiAgdXNlRXZlbnRMaXN0ZW5lcih0YXJnZXQsIFwicGF1c2VcIiwgKCkgPT4gaWdub3JlUGxheWluZ1VwZGF0ZXMoKCkgPT4gcGxheWluZy52YWx1ZSA9IGZhbHNlKSk7XG4gIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBcInBsYXlcIiwgKCkgPT4gaWdub3JlUGxheWluZ1VwZGF0ZXMoKCkgPT4gcGxheWluZy52YWx1ZSA9IHRydWUpKTtcbiAgdXNlRXZlbnRMaXN0ZW5lcih0YXJnZXQsIFwiZW50ZXJwaWN0dXJlaW5waWN0dXJlXCIsICgpID0+IGlzUGljdHVyZUluUGljdHVyZS52YWx1ZSA9IHRydWUpO1xuICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgXCJsZWF2ZXBpY3R1cmVpbnBpY3R1cmVcIiwgKCkgPT4gaXNQaWN0dXJlSW5QaWN0dXJlLnZhbHVlID0gZmFsc2UpO1xuICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgXCJ2b2x1bWVjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gdG9WYWx1ZSh0YXJnZXQpO1xuICAgIGlmICghZWwpXG4gICAgICByZXR1cm47XG4gICAgdm9sdW1lLnZhbHVlID0gZWwudm9sdW1lO1xuICAgIG11dGVkLnZhbHVlID0gZWwubXV0ZWQ7XG4gIH0pO1xuICBjb25zdCBsaXN0ZW5lcnMgPSBbXTtcbiAgY29uc3Qgc3RvcCA9IHdhdGNoKFt0YXJnZXRdLCAoKSA9PiB7XG4gICAgY29uc3QgZWwgPSB0b1ZhbHVlKHRhcmdldCk7XG4gICAgaWYgKCFlbClcbiAgICAgIHJldHVybjtcbiAgICBzdG9wKCk7XG4gICAgbGlzdGVuZXJzWzBdID0gdXNlRXZlbnRMaXN0ZW5lcihlbC50ZXh0VHJhY2tzLCBcImFkZHRyYWNrXCIsICgpID0+IHRyYWNrcy52YWx1ZSA9IHRyYWNrc1RvQXJyYXkoZWwudGV4dFRyYWNrcykpO1xuICAgIGxpc3RlbmVyc1sxXSA9IHVzZUV2ZW50TGlzdGVuZXIoZWwudGV4dFRyYWNrcywgXCJyZW1vdmV0cmFja1wiLCAoKSA9PiB0cmFja3MudmFsdWUgPSB0cmFja3NUb0FycmF5KGVsLnRleHRUcmFja3MpKTtcbiAgICBsaXN0ZW5lcnNbMl0gPSB1c2VFdmVudExpc3RlbmVyKGVsLnRleHRUcmFja3MsIFwiY2hhbmdlXCIsICgpID0+IHRyYWNrcy52YWx1ZSA9IHRyYWNrc1RvQXJyYXkoZWwudGV4dFRyYWNrcykpO1xuICB9KTtcbiAgdHJ5T25TY29wZURpc3Bvc2UoKCkgPT4gbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKSk7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFRpbWUsXG4gICAgZHVyYXRpb24sXG4gICAgd2FpdGluZyxcbiAgICBzZWVraW5nLFxuICAgIGVuZGVkLFxuICAgIHN0YWxsZWQsXG4gICAgYnVmZmVyZWQsXG4gICAgcGxheWluZyxcbiAgICByYXRlLFxuICAgIC8vIFZvbHVtZVxuICAgIHZvbHVtZSxcbiAgICBtdXRlZCxcbiAgICAvLyBUcmFja3NcbiAgICB0cmFja3MsXG4gICAgc2VsZWN0ZWRUcmFjayxcbiAgICBlbmFibGVUcmFjayxcbiAgICBkaXNhYmxlVHJhY2ssXG4gICAgLy8gUGljdHVyZSBpbiBQaWN0dXJlXG4gICAgc3VwcG9ydHNQaWN0dXJlSW5QaWN0dXJlLFxuICAgIHRvZ2dsZVBpY3R1cmVJblBpY3R1cmUsXG4gICAgaXNQaWN0dXJlSW5QaWN0dXJlLFxuICAgIC8vIEV2ZW50c1xuICAgIG9uU291cmNlRXJyb3I6IHNvdXJjZUVycm9yRXZlbnQub25cbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0TWFwVnVlMkNvbXBhdCgpIHtcbiAgY29uc3QgZGF0YSA9IHNoYWxsb3dSZWFjdGl2ZSh7fSk7XG4gIHJldHVybiB7XG4gICAgZ2V0OiAoa2V5KSA9PiBkYXRhW2tleV0sXG4gICAgc2V0OiAoa2V5LCB2YWx1ZSkgPT4gc2V0KGRhdGEsIGtleSwgdmFsdWUpLFxuICAgIGhhczogKGtleSkgPT4gaGFzT3duKGRhdGEsIGtleSksXG4gICAgZGVsZXRlOiAoa2V5KSA9PiBkZWwoZGF0YSwga2V5KSxcbiAgICBjbGVhcjogKCkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGRlbChkYXRhLCBrZXkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gdXNlTWVtb2l6ZShyZXNvbHZlciwgb3B0aW9ucykge1xuICBjb25zdCBpbml0Q2FjaGUgPSAoKSA9PiB7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuY2FjaGUpXG4gICAgICByZXR1cm4gc2hhbGxvd1JlYWN0aXZlKG9wdGlvbnMuY2FjaGUpO1xuICAgIGlmIChpc1Z1ZTIpXG4gICAgICByZXR1cm4gZ2V0TWFwVnVlMkNvbXBhdCgpO1xuICAgIHJldHVybiBzaGFsbG93UmVhY3RpdmUoLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gIH07XG4gIGNvbnN0IGNhY2hlID0gaW5pdENhY2hlKCk7XG4gIGNvbnN0IGdlbmVyYXRlS2V5ID0gKC4uLmFyZ3MpID0+IChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmdldEtleSkgPyBvcHRpb25zLmdldEtleSguLi5hcmdzKSA6IEpTT04uc3RyaW5naWZ5KGFyZ3MpO1xuICBjb25zdCBfbG9hZERhdGEgPSAoa2V5LCAuLi5hcmdzKSA9PiB7XG4gICAgY2FjaGUuc2V0KGtleSwgcmVzb2x2ZXIoLi4uYXJncykpO1xuICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgfTtcbiAgY29uc3QgbG9hZERhdGEgPSAoLi4uYXJncykgPT4gX2xvYWREYXRhKGdlbmVyYXRlS2V5KC4uLmFyZ3MpLCAuLi5hcmdzKTtcbiAgY29uc3QgZGVsZXRlRGF0YSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY2FjaGUuZGVsZXRlKGdlbmVyYXRlS2V5KC4uLmFyZ3MpKTtcbiAgfTtcbiAgY29uc3QgY2xlYXJEYXRhID0gKCkgPT4ge1xuICAgIGNhY2hlLmNsZWFyKCk7XG4gIH07XG4gIGNvbnN0IG1lbW9pemVkID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBrZXkgPSBnZW5lcmF0ZUtleSguLi5hcmdzKTtcbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpXG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgcmV0dXJuIF9sb2FkRGF0YShrZXksIC4uLmFyZ3MpO1xuICB9O1xuICBtZW1vaXplZC5sb2FkID0gbG9hZERhdGE7XG4gIG1lbW9pemVkLmRlbGV0ZSA9IGRlbGV0ZURhdGE7XG4gIG1lbW9pemVkLmNsZWFyID0gY2xlYXJEYXRhO1xuICBtZW1vaXplZC5nZW5lcmF0ZUtleSA9IGdlbmVyYXRlS2V5O1xuICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbmZ1bmN0aW9uIHVzZU1lbW9yeShvcHRpb25zID0ge30pIHtcbiAgY29uc3QgbWVtb3J5ID0gcmVmKCk7XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gdXNlU3VwcG9ydGVkKCgpID0+IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBcIm1lbW9yeVwiIGluIHBlcmZvcm1hbmNlKTtcbiAgaWYgKGlzU3VwcG9ydGVkLnZhbHVlKSB7XG4gICAgY29uc3QgeyBpbnRlcnZhbCA9IDFlMyB9ID0gb3B0aW9ucztcbiAgICB1c2VJbnRlcnZhbEZuKCgpID0+IHtcbiAgICAgIG1lbW9yeS52YWx1ZSA9IHBlcmZvcm1hbmNlLm1lbW9yeTtcbiAgICB9LCBpbnRlcnZhbCwgeyBpbW1lZGlhdGU6IG9wdGlvbnMuaW1tZWRpYXRlLCBpbW1lZGlhdGVDYWxsYmFjazogb3B0aW9ucy5pbW1lZGlhdGVDYWxsYmFjayB9KTtcbiAgfVxuICByZXR1cm4geyBpc1N1cHBvcnRlZCwgbWVtb3J5IH07XG59XG5cbmNvbnN0IFVzZU1vdXNlQnVpbHRpbkV4dHJhY3RvcnMgPSB7XG4gIHBhZ2U6IChldmVudCkgPT4gW2V2ZW50LnBhZ2VYLCBldmVudC5wYWdlWV0sXG4gIGNsaWVudDogKGV2ZW50KSA9PiBbZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WV0sXG4gIHNjcmVlbjogKGV2ZW50KSA9PiBbZXZlbnQuc2NyZWVuWCwgZXZlbnQuc2NyZWVuWV0sXG4gIG1vdmVtZW50OiAoZXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgVG91Y2ggPyBudWxsIDogW2V2ZW50Lm1vdmVtZW50WCwgZXZlbnQubW92ZW1lbnRZXVxufTtcbmZ1bmN0aW9uIHVzZU1vdXNlKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgdHlwZSA9IFwicGFnZVwiLFxuICAgIHRvdWNoID0gdHJ1ZSxcbiAgICByZXNldE9uVG91Y2hFbmRzID0gZmFsc2UsXG4gICAgaW5pdGlhbFZhbHVlID0geyB4OiAwLCB5OiAwIH0sXG4gICAgd2luZG93ID0gZGVmYXVsdFdpbmRvdyxcbiAgICB0YXJnZXQgPSB3aW5kb3csXG4gICAgc2Nyb2xsID0gdHJ1ZSxcbiAgICBldmVudEZpbHRlclxuICB9ID0gb3B0aW9ucztcbiAgbGV0IF9wcmV2TW91c2VFdmVudCA9IG51bGw7XG4gIGNvbnN0IHggPSByZWYoaW5pdGlhbFZhbHVlLngpO1xuICBjb25zdCB5ID0gcmVmKGluaXRpYWxWYWx1ZS55KTtcbiAgY29uc3Qgc291cmNlVHlwZSA9IHJlZihudWxsKTtcbiAgY29uc3QgZXh0cmFjdG9yID0gdHlwZW9mIHR5cGUgPT09IFwiZnVuY3Rpb25cIiA/IHR5cGUgOiBVc2VNb3VzZUJ1aWx0aW5FeHRyYWN0b3JzW3R5cGVdO1xuICBjb25zdCBtb3VzZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBleHRyYWN0b3IoZXZlbnQpO1xuICAgIF9wcmV2TW91c2VFdmVudCA9IGV2ZW50O1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIFt4LnZhbHVlLCB5LnZhbHVlXSA9IHJlc3VsdDtcbiAgICAgIHNvdXJjZVR5cGUudmFsdWUgPSBcIm1vdXNlXCI7XG4gICAgfVxuICB9O1xuICBjb25zdCB0b3VjaEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBleHRyYWN0b3IoZXZlbnQudG91Y2hlc1swXSk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIFt4LnZhbHVlLCB5LnZhbHVlXSA9IHJlc3VsdDtcbiAgICAgICAgc291cmNlVHlwZS52YWx1ZSA9IFwidG91Y2hcIjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFfcHJldk1vdXNlRXZlbnQgfHwgIXdpbmRvdylcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBwb3MgPSBleHRyYWN0b3IoX3ByZXZNb3VzZUV2ZW50KTtcbiAgICBpZiAoX3ByZXZNb3VzZUV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCAmJiBwb3MpIHtcbiAgICAgIHgudmFsdWUgPSBwb3NbMF0gKyB3aW5kb3cuc2Nyb2xsWDtcbiAgICAgIHkudmFsdWUgPSBwb3NbMV0gKyB3aW5kb3cuc2Nyb2xsWTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIHgudmFsdWUgPSBpbml0aWFsVmFsdWUueDtcbiAgICB5LnZhbHVlID0gaW5pdGlhbFZhbHVlLnk7XG4gIH07XG4gIGNvbnN0IG1vdXNlSGFuZGxlcldyYXBwZXIgPSBldmVudEZpbHRlciA/IChldmVudCkgPT4gZXZlbnRGaWx0ZXIoKCkgPT4gbW91c2VIYW5kbGVyKGV2ZW50KSwge30pIDogKGV2ZW50KSA9PiBtb3VzZUhhbmRsZXIoZXZlbnQpO1xuICBjb25zdCB0b3VjaEhhbmRsZXJXcmFwcGVyID0gZXZlbnRGaWx0ZXIgPyAoZXZlbnQpID0+IGV2ZW50RmlsdGVyKCgpID0+IHRvdWNoSGFuZGxlcihldmVudCksIHt9KSA6IChldmVudCkgPT4gdG91Y2hIYW5kbGVyKGV2ZW50KTtcbiAgY29uc3Qgc2Nyb2xsSGFuZGxlcldyYXBwZXIgPSBldmVudEZpbHRlciA/ICgpID0+IGV2ZW50RmlsdGVyKCgpID0+IHNjcm9sbEhhbmRsZXIoKSwge30pIDogKCkgPT4gc2Nyb2xsSGFuZGxlcigpO1xuICBpZiAodGFyZ2V0KSB7XG4gICAgY29uc3QgbGlzdGVuZXJPcHRpb25zID0geyBwYXNzaXZlOiB0cnVlIH07XG4gICAgdXNlRXZlbnRMaXN0ZW5lcih0YXJnZXQsIFtcIm1vdXNlbW92ZVwiLCBcImRyYWdvdmVyXCJdLCBtb3VzZUhhbmRsZXJXcmFwcGVyLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIGlmICh0b3VjaCAmJiB0eXBlICE9PSBcIm1vdmVtZW50XCIpIHtcbiAgICAgIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBbXCJ0b3VjaHN0YXJ0XCIsIFwidG91Y2htb3ZlXCJdLCB0b3VjaEhhbmRsZXJXcmFwcGVyLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgaWYgKHJlc2V0T25Ub3VjaEVuZHMpXG4gICAgICAgIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBcInRvdWNoZW5kXCIsIHJlc2V0LCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoc2Nyb2xsICYmIHR5cGUgPT09IFwicGFnZVwiKVxuICAgICAgdXNlRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXJXcmFwcGVyLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4LFxuICAgIHksXG4gICAgc291cmNlVHlwZVxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VNb3VzZUluRWxlbWVudCh0YXJnZXQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgaGFuZGxlT3V0c2lkZSA9IHRydWUsXG4gICAgd2luZG93ID0gZGVmYXVsdFdpbmRvd1xuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCBcInBhZ2VcIjtcbiAgY29uc3QgeyB4LCB5LCBzb3VyY2VUeXBlIH0gPSB1c2VNb3VzZShvcHRpb25zKTtcbiAgY29uc3QgdGFyZ2V0UmVmID0gcmVmKHRhcmdldCAhPSBudWxsID8gdGFyZ2V0IDogd2luZG93ID09IG51bGwgPyB2b2lkIDAgOiB3aW5kb3cuZG9jdW1lbnQuYm9keSk7XG4gIGNvbnN0IGVsZW1lbnRYID0gcmVmKDApO1xuICBjb25zdCBlbGVtZW50WSA9IHJlZigwKTtcbiAgY29uc3QgZWxlbWVudFBvc2l0aW9uWCA9IHJlZigwKTtcbiAgY29uc3QgZWxlbWVudFBvc2l0aW9uWSA9IHJlZigwKTtcbiAgY29uc3QgZWxlbWVudEhlaWdodCA9IHJlZigwKTtcbiAgY29uc3QgZWxlbWVudFdpZHRoID0gcmVmKDApO1xuICBjb25zdCBpc091dHNpZGUgPSByZWYodHJ1ZSk7XG4gIGxldCBzdG9wID0gKCkgPT4ge1xuICB9O1xuICBpZiAod2luZG93KSB7XG4gICAgc3RvcCA9IHdhdGNoKFxuICAgICAgW3RhcmdldFJlZiwgeCwgeV0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gdW5yZWZFbGVtZW50KHRhcmdldFJlZik7XG4gICAgICAgIGlmICghZWwpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgbGVmdCxcbiAgICAgICAgICB0b3AsXG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgIH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgZWxlbWVudFBvc2l0aW9uWC52YWx1ZSA9IGxlZnQgKyAodHlwZSA9PT0gXCJwYWdlXCIgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiAwKTtcbiAgICAgICAgZWxlbWVudFBvc2l0aW9uWS52YWx1ZSA9IHRvcCArICh0eXBlID09PSBcInBhZ2VcIiA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IDApO1xuICAgICAgICBlbGVtZW50SGVpZ2h0LnZhbHVlID0gaGVpZ2h0O1xuICAgICAgICBlbGVtZW50V2lkdGgudmFsdWUgPSB3aWR0aDtcbiAgICAgICAgY29uc3QgZWxYID0geC52YWx1ZSAtIGVsZW1lbnRQb3NpdGlvblgudmFsdWU7XG4gICAgICAgIGNvbnN0IGVsWSA9IHkudmFsdWUgLSBlbGVtZW50UG9zaXRpb25ZLnZhbHVlO1xuICAgICAgICBpc091dHNpZGUudmFsdWUgPSB3aWR0aCA9PT0gMCB8fCBoZWlnaHQgPT09IDAgfHwgZWxYIDwgMCB8fCBlbFkgPCAwIHx8IGVsWCA+IHdpZHRoIHx8IGVsWSA+IGhlaWdodDtcbiAgICAgICAgaWYgKGhhbmRsZU91dHNpZGUgfHwgIWlzT3V0c2lkZS52YWx1ZSkge1xuICAgICAgICAgIGVsZW1lbnRYLnZhbHVlID0gZWxYO1xuICAgICAgICAgIGVsZW1lbnRZLnZhbHVlID0gZWxZO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBpbW1lZGlhdGU6IHRydWUgfVxuICAgICk7XG4gICAgdXNlRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgIGlzT3V0c2lkZS52YWx1ZSA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4LFxuICAgIHksXG4gICAgc291cmNlVHlwZSxcbiAgICBlbGVtZW50WCxcbiAgICBlbGVtZW50WSxcbiAgICBlbGVtZW50UG9zaXRpb25YLFxuICAgIGVsZW1lbnRQb3NpdGlvblksXG4gICAgZWxlbWVudEhlaWdodCxcbiAgICBlbGVtZW50V2lkdGgsXG4gICAgaXNPdXRzaWRlLFxuICAgIHN0b3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlTW91c2VQcmVzc2VkKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgdG91Y2ggPSB0cnVlLFxuICAgIGRyYWcgPSB0cnVlLFxuICAgIGNhcHR1cmUgPSBmYWxzZSxcbiAgICBpbml0aWFsVmFsdWUgPSBmYWxzZSxcbiAgICB3aW5kb3cgPSBkZWZhdWx0V2luZG93XG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmVzc2VkID0gcmVmKGluaXRpYWxWYWx1ZSk7XG4gIGNvbnN0IHNvdXJjZVR5cGUgPSByZWYobnVsbCk7XG4gIGlmICghd2luZG93KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZXNzZWQsXG4gICAgICBzb3VyY2VUeXBlXG4gICAgfTtcbiAgfVxuICBjb25zdCBvblByZXNzZWQgPSAoc3JjVHlwZSkgPT4gKCkgPT4ge1xuICAgIHByZXNzZWQudmFsdWUgPSB0cnVlO1xuICAgIHNvdXJjZVR5cGUudmFsdWUgPSBzcmNUeXBlO1xuICB9O1xuICBjb25zdCBvblJlbGVhc2VkID0gKCkgPT4ge1xuICAgIHByZXNzZWQudmFsdWUgPSBmYWxzZTtcbiAgICBzb3VyY2VUeXBlLnZhbHVlID0gbnVsbDtcbiAgfTtcbiAgY29uc3QgdGFyZ2V0ID0gY29tcHV0ZWQoKCkgPT4gdW5yZWZFbGVtZW50KG9wdGlvbnMudGFyZ2V0KSB8fCB3aW5kb3cpO1xuICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgXCJtb3VzZWRvd25cIiwgb25QcmVzc2VkKFwibW91c2VcIiksIHsgcGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZSB9KTtcbiAgdXNlRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwibW91c2VsZWF2ZVwiLCBvblJlbGVhc2VkLCB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmUgfSk7XG4gIHVzZUV2ZW50TGlzdGVuZXIod2luZG93LCBcIm1vdXNldXBcIiwgb25SZWxlYXNlZCwgeyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlIH0pO1xuICBpZiAoZHJhZykge1xuICAgIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBcImRyYWdzdGFydFwiLCBvblByZXNzZWQoXCJtb3VzZVwiKSwgeyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlIH0pO1xuICAgIHVzZUV2ZW50TGlzdGVuZXIod2luZG93LCBcImRyb3BcIiwgb25SZWxlYXNlZCwgeyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlIH0pO1xuICAgIHVzZUV2ZW50TGlzdGVuZXIod2luZG93LCBcImRyYWdlbmRcIiwgb25SZWxlYXNlZCwgeyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlIH0pO1xuICB9XG4gIGlmICh0b3VjaCkge1xuICAgIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBcInRvdWNoc3RhcnRcIiwgb25QcmVzc2VkKFwidG91Y2hcIiksIHsgcGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZSB9KTtcbiAgICB1c2VFdmVudExpc3RlbmVyKHdpbmRvdywgXCJ0b3VjaGVuZFwiLCBvblJlbGVhc2VkLCB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmUgfSk7XG4gICAgdXNlRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwidG91Y2hjYW5jZWxcIiwgb25SZWxlYXNlZCwgeyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJlc3NlZCxcbiAgICBzb3VyY2VUeXBlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZU5hdmlnYXRvckxhbmd1YWdlKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IHdpbmRvdyA9IGRlZmF1bHRXaW5kb3cgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IG5hdmlnYXRvciA9IHdpbmRvdyA9PSBudWxsID8gdm9pZCAwIDogd2luZG93Lm5hdmlnYXRvcjtcbiAgY29uc3QgaXNTdXBwb3J0ZWQgPSB1c2VTdXBwb3J0ZWQoKCkgPT4gbmF2aWdhdG9yICYmIFwibGFuZ3VhZ2VcIiBpbiBuYXZpZ2F0b3IpO1xuICBjb25zdCBsYW5ndWFnZSA9IHJlZihuYXZpZ2F0b3IgPT0gbnVsbCA/IHZvaWQgMCA6IG5hdmlnYXRvci5sYW5ndWFnZSk7XG4gIHVzZUV2ZW50TGlzdGVuZXIod2luZG93LCBcImxhbmd1YWdlY2hhbmdlXCIsICgpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yKVxuICAgICAgbGFuZ3VhZ2UudmFsdWUgPSBuYXZpZ2F0b3IubGFuZ3VhZ2U7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGlzU3VwcG9ydGVkLFxuICAgIGxhbmd1YWdlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZU5ldHdvcmsob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgd2luZG93ID0gZGVmYXVsdFdpbmRvdyB9ID0gb3B0aW9ucztcbiAgY29uc3QgbmF2aWdhdG9yID0gd2luZG93ID09IG51bGwgPyB2b2lkIDAgOiB3aW5kb3cubmF2aWdhdG9yO1xuICBjb25zdCBpc1N1cHBvcnRlZCA9IHVzZVN1cHBvcnRlZCgoKSA9PiBuYXZpZ2F0b3IgJiYgXCJjb25uZWN0aW9uXCIgaW4gbmF2aWdhdG9yKTtcbiAgY29uc3QgaXNPbmxpbmUgPSByZWYodHJ1ZSk7XG4gIGNvbnN0IHNhdmVEYXRhID0gcmVmKGZhbHNlKTtcbiAgY29uc3Qgb2ZmbGluZUF0ID0gcmVmKHZvaWQgMCk7XG4gIGNvbnN0IG9ubGluZUF0ID0gcmVmKHZvaWQgMCk7XG4gIGNvbnN0IGRvd25saW5rID0gcmVmKHZvaWQgMCk7XG4gIGNvbnN0IGRvd25saW5rTWF4ID0gcmVmKHZvaWQgMCk7XG4gIGNvbnN0IHJ0dCA9IHJlZih2b2lkIDApO1xuICBjb25zdCBlZmZlY3RpdmVUeXBlID0gcmVmKHZvaWQgMCk7XG4gIGNvbnN0IHR5cGUgPSByZWYoXCJ1bmtub3duXCIpO1xuICBjb25zdCBjb25uZWN0aW9uID0gaXNTdXBwb3J0ZWQudmFsdWUgJiYgbmF2aWdhdG9yLmNvbm5lY3Rpb247XG4gIGZ1bmN0aW9uIHVwZGF0ZU5ldHdvcmtJbmZvcm1hdGlvbigpIHtcbiAgICBpZiAoIW5hdmlnYXRvcilcbiAgICAgIHJldHVybjtcbiAgICBpc09ubGluZS52YWx1ZSA9IG5hdmlnYXRvci5vbkxpbmU7XG4gICAgb2ZmbGluZUF0LnZhbHVlID0gaXNPbmxpbmUudmFsdWUgPyB2b2lkIDAgOiBEYXRlLm5vdygpO1xuICAgIG9ubGluZUF0LnZhbHVlID0gaXNPbmxpbmUudmFsdWUgPyBEYXRlLm5vdygpIDogdm9pZCAwO1xuICAgIGlmIChjb25uZWN0aW9uKSB7XG4gICAgICBkb3dubGluay52YWx1ZSA9IGNvbm5lY3Rpb24uZG93bmxpbms7XG4gICAgICBkb3dubGlua01heC52YWx1ZSA9IGNvbm5lY3Rpb24uZG93bmxpbmtNYXg7XG4gICAgICBlZmZlY3RpdmVUeXBlLnZhbHVlID0gY29ubmVjdGlvbi5lZmZlY3RpdmVUeXBlO1xuICAgICAgcnR0LnZhbHVlID0gY29ubmVjdGlvbi5ydHQ7XG4gICAgICBzYXZlRGF0YS52YWx1ZSA9IGNvbm5lY3Rpb24uc2F2ZURhdGE7XG4gICAgICB0eXBlLnZhbHVlID0gY29ubmVjdGlvbi50eXBlO1xuICAgIH1cbiAgfVxuICBpZiAod2luZG93KSB7XG4gICAgdXNlRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwib2ZmbGluZVwiLCAoKSA9PiB7XG4gICAgICBpc09ubGluZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgb2ZmbGluZUF0LnZhbHVlID0gRGF0ZS5ub3coKTtcbiAgICB9KTtcbiAgICB1c2VFdmVudExpc3RlbmVyKHdpbmRvdywgXCJvbmxpbmVcIiwgKCkgPT4ge1xuICAgICAgaXNPbmxpbmUudmFsdWUgPSB0cnVlO1xuICAgICAgb25saW5lQXQudmFsdWUgPSBEYXRlLm5vdygpO1xuICAgIH0pO1xuICB9XG4gIGlmIChjb25uZWN0aW9uKVxuICAgIHVzZUV2ZW50TGlzdGVuZXIoY29ubmVjdGlvbiwgXCJjaGFuZ2VcIiwgdXBkYXRlTmV0d29ya0luZm9ybWF0aW9uLCBmYWxzZSk7XG4gIHVwZGF0ZU5ldHdvcmtJbmZvcm1hdGlvbigpO1xuICByZXR1cm4ge1xuICAgIGlzU3VwcG9ydGVkLFxuICAgIGlzT25saW5lLFxuICAgIHNhdmVEYXRhLFxuICAgIG9mZmxpbmVBdCxcbiAgICBvbmxpbmVBdCxcbiAgICBkb3dubGluayxcbiAgICBkb3dubGlua01heCxcbiAgICBlZmZlY3RpdmVUeXBlLFxuICAgIHJ0dCxcbiAgICB0eXBlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZU5vdyhvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGNvbnRyb2xzOiBleHBvc2VDb250cm9scyA9IGZhbHNlLFxuICAgIGludGVydmFsID0gXCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIlxuICB9ID0gb3B0aW9ucztcbiAgY29uc3Qgbm93ID0gcmVmKC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpKTtcbiAgY29uc3QgdXBkYXRlID0gKCkgPT4gbm93LnZhbHVlID0gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCk7XG4gIGNvbnN0IGNvbnRyb2xzID0gaW50ZXJ2YWwgPT09IFwicmVxdWVzdEFuaW1hdGlvbkZyYW1lXCIgPyB1c2VSYWZGbih1cGRhdGUsIHsgaW1tZWRpYXRlOiB0cnVlIH0pIDogdXNlSW50ZXJ2YWxGbih1cGRhdGUsIGludGVydmFsLCB7IGltbWVkaWF0ZTogdHJ1ZSB9KTtcbiAgaWYgKGV4cG9zZUNvbnRyb2xzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdyxcbiAgICAgIC4uLmNvbnRyb2xzXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm93O1xuICB9XG59XG5cbmZ1bmN0aW9uIHVzZU9iamVjdFVybChvYmplY3QpIHtcbiAgY29uc3QgdXJsID0gcmVmKCk7XG4gIGNvbnN0IHJlbGVhc2UgPSAoKSA9PiB7XG4gICAgaWYgKHVybC52YWx1ZSlcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsLnZhbHVlKTtcbiAgICB1cmwudmFsdWUgPSB2b2lkIDA7XG4gIH07XG4gIHdhdGNoKFxuICAgICgpID0+IHRvVmFsdWUob2JqZWN0KSxcbiAgICAobmV3T2JqZWN0KSA9PiB7XG4gICAgICByZWxlYXNlKCk7XG4gICAgICBpZiAobmV3T2JqZWN0KVxuICAgICAgICB1cmwudmFsdWUgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ld09iamVjdCk7XG4gICAgfSxcbiAgICB7IGltbWVkaWF0ZTogdHJ1ZSB9XG4gICk7XG4gIHRyeU9uU2NvcGVEaXNwb3NlKHJlbGVhc2UpO1xuICByZXR1cm4gcmVhZG9ubHkodXJsKTtcbn1cblxuZnVuY3Rpb24gdXNlQ2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCBpc1JlYWRvbmx5KHZhbHVlKSlcbiAgICByZXR1cm4gY29tcHV0ZWQoKCkgPT4gY2xhbXAodG9WYWx1ZSh2YWx1ZSksIHRvVmFsdWUobWluKSwgdG9WYWx1ZShtYXgpKSk7XG4gIGNvbnN0IF92YWx1ZSA9IHJlZih2YWx1ZSk7XG4gIHJldHVybiBjb21wdXRlZCh7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIF92YWx1ZS52YWx1ZSA9IGNsYW1wKF92YWx1ZS52YWx1ZSwgdG9WYWx1ZShtaW4pLCB0b1ZhbHVlKG1heCkpO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlMikge1xuICAgICAgX3ZhbHVlLnZhbHVlID0gY2xhbXAodmFsdWUyLCB0b1ZhbHVlKG1pbiksIHRvVmFsdWUobWF4KSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlT2Zmc2V0UGFnaW5hdGlvbihvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICB0b3RhbCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcbiAgICBwYWdlU2l6ZSA9IDEwLFxuICAgIHBhZ2UgPSAxLFxuICAgIG9uUGFnZUNoYW5nZSA9IG5vb3AsXG4gICAgb25QYWdlU2l6ZUNoYW5nZSA9IG5vb3AsXG4gICAgb25QYWdlQ291bnRDaGFuZ2UgPSBub29wXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBjdXJyZW50UGFnZVNpemUgPSB1c2VDbGFtcChwYWdlU2l6ZSwgMSwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKTtcbiAgY29uc3QgcGFnZUNvdW50ID0gY29tcHV0ZWQoKCkgPT4gTWF0aC5tYXgoXG4gICAgMSxcbiAgICBNYXRoLmNlaWwodG9WYWx1ZSh0b3RhbCkgLyB0b1ZhbHVlKGN1cnJlbnRQYWdlU2l6ZSkpXG4gICkpO1xuICBjb25zdCBjdXJyZW50UGFnZSA9IHVzZUNsYW1wKHBhZ2UsIDEsIHBhZ2VDb3VudCk7XG4gIGNvbnN0IGlzRmlyc3RQYWdlID0gY29tcHV0ZWQoKCkgPT4gY3VycmVudFBhZ2UudmFsdWUgPT09IDEpO1xuICBjb25zdCBpc0xhc3RQYWdlID0gY29tcHV0ZWQoKCkgPT4gY3VycmVudFBhZ2UudmFsdWUgPT09IHBhZ2VDb3VudC52YWx1ZSk7XG4gIGlmIChpc1JlZihwYWdlKSkge1xuICAgIHN5bmNSZWYocGFnZSwgY3VycmVudFBhZ2UsIHtcbiAgICAgIGRpcmVjdGlvbjogaXNSZWFkb25seShwYWdlKSA/IFwibHRyXCIgOiBcImJvdGhcIlxuICAgIH0pO1xuICB9XG4gIGlmIChpc1JlZihwYWdlU2l6ZSkpIHtcbiAgICBzeW5jUmVmKHBhZ2VTaXplLCBjdXJyZW50UGFnZVNpemUsIHtcbiAgICAgIGRpcmVjdGlvbjogaXNSZWFkb25seShwYWdlU2l6ZSkgPyBcImx0clwiIDogXCJib3RoXCJcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBwcmV2KCkge1xuICAgIGN1cnJlbnRQYWdlLnZhbHVlLS07XG4gIH1cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBjdXJyZW50UGFnZS52YWx1ZSsrO1xuICB9XG4gIGNvbnN0IHJldHVyblZhbHVlID0ge1xuICAgIGN1cnJlbnRQYWdlLFxuICAgIGN1cnJlbnRQYWdlU2l6ZSxcbiAgICBwYWdlQ291bnQsXG4gICAgaXNGaXJzdFBhZ2UsXG4gICAgaXNMYXN0UGFnZSxcbiAgICBwcmV2LFxuICAgIG5leHRcbiAgfTtcbiAgd2F0Y2goY3VycmVudFBhZ2UsICgpID0+IHtcbiAgICBvblBhZ2VDaGFuZ2UocmVhY3RpdmUocmV0dXJuVmFsdWUpKTtcbiAgfSk7XG4gIHdhdGNoKGN1cnJlbnRQYWdlU2l6ZSwgKCkgPT4ge1xuICAgIG9uUGFnZVNpemVDaGFuZ2UocmVhY3RpdmUocmV0dXJuVmFsdWUpKTtcbiAgfSk7XG4gIHdhdGNoKHBhZ2VDb3VudCwgKCkgPT4ge1xuICAgIG9uUGFnZUNvdW50Q2hhbmdlKHJlYWN0aXZlKHJldHVyblZhbHVlKSk7XG4gIH0pO1xuICByZXR1cm4gcmV0dXJuVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVzZU9ubGluZShvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBpc09ubGluZSB9ID0gdXNlTmV0d29yayhvcHRpb25zKTtcbiAgcmV0dXJuIGlzT25saW5lO1xufVxuXG5mdW5jdGlvbiB1c2VQYWdlTGVhdmUob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgd2luZG93ID0gZGVmYXVsdFdpbmRvdyB9ID0gb3B0aW9ucztcbiAgY29uc3QgaXNMZWZ0ID0gcmVmKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGlmICghd2luZG93KVxuICAgICAgcmV0dXJuO1xuICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgIGNvbnN0IGZyb20gPSBldmVudC5yZWxhdGVkVGFyZ2V0IHx8IGV2ZW50LnRvRWxlbWVudDtcbiAgICBpc0xlZnQudmFsdWUgPSAhZnJvbTtcbiAgfTtcbiAgaWYgKHdpbmRvdykge1xuICAgIHVzZUV2ZW50TGlzdGVuZXIod2luZG93LCBcIm1vdXNlb3V0XCIsIGhhbmRsZXIsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB1c2VFdmVudExpc3RlbmVyKHdpbmRvdy5kb2N1bWVudCwgXCJtb3VzZWxlYXZlXCIsIGhhbmRsZXIsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB1c2VFdmVudExpc3RlbmVyKHdpbmRvdy5kb2N1bWVudCwgXCJtb3VzZWVudGVyXCIsIGhhbmRsZXIsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gaXNMZWZ0O1xufVxuXG5mdW5jdGlvbiB1c2VTY3JlZW5PcmllbnRhdGlvbihvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIHdpbmRvdyA9IGRlZmF1bHRXaW5kb3dcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gdXNlU3VwcG9ydGVkKCgpID0+IHdpbmRvdyAmJiBcInNjcmVlblwiIGluIHdpbmRvdyAmJiBcIm9yaWVudGF0aW9uXCIgaW4gd2luZG93LnNjcmVlbik7XG4gIGNvbnN0IHNjcmVlbk9yaWVudGF0aW9uID0gaXNTdXBwb3J0ZWQudmFsdWUgPyB3aW5kb3cuc2NyZWVuLm9yaWVudGF0aW9uIDoge307XG4gIGNvbnN0IG9yaWVudGF0aW9uID0gcmVmKHNjcmVlbk9yaWVudGF0aW9uLnR5cGUpO1xuICBjb25zdCBhbmdsZSA9IHJlZihzY3JlZW5PcmllbnRhdGlvbi5hbmdsZSB8fCAwKTtcbiAgaWYgKGlzU3VwcG9ydGVkLnZhbHVlKSB7XG4gICAgdXNlRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwib3JpZW50YXRpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgb3JpZW50YXRpb24udmFsdWUgPSBzY3JlZW5PcmllbnRhdGlvbi50eXBlO1xuICAgICAgYW5nbGUudmFsdWUgPSBzY3JlZW5PcmllbnRhdGlvbi5hbmdsZTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBsb2NrT3JpZW50YXRpb24gPSAodHlwZSkgPT4ge1xuICAgIGlmIChpc1N1cHBvcnRlZC52YWx1ZSAmJiB0eXBlb2Ygc2NyZWVuT3JpZW50YXRpb24ubG9jayA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgcmV0dXJuIHNjcmVlbk9yaWVudGF0aW9uLmxvY2sodHlwZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vdCBzdXBwb3J0ZWRcIikpO1xuICB9O1xuICBjb25zdCB1bmxvY2tPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoaXNTdXBwb3J0ZWQudmFsdWUgJiYgdHlwZW9mIHNjcmVlbk9yaWVudGF0aW9uLnVubG9jayA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgc2NyZWVuT3JpZW50YXRpb24udW5sb2NrKCk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgaXNTdXBwb3J0ZWQsXG4gICAgb3JpZW50YXRpb24sXG4gICAgYW5nbGUsXG4gICAgbG9ja09yaWVudGF0aW9uLFxuICAgIHVubG9ja09yaWVudGF0aW9uXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVBhcmFsbGF4KHRhcmdldCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBkZXZpY2VPcmllbnRhdGlvblRpbHRBZGp1c3QgPSAoaSkgPT4gaSxcbiAgICBkZXZpY2VPcmllbnRhdGlvblJvbGxBZGp1c3QgPSAoaSkgPT4gaSxcbiAgICBtb3VzZVRpbHRBZGp1c3QgPSAoaSkgPT4gaSxcbiAgICBtb3VzZVJvbGxBZGp1c3QgPSAoaSkgPT4gaSxcbiAgICB3aW5kb3cgPSBkZWZhdWx0V2luZG93XG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBvcmllbnRhdGlvbiA9IHJlYWN0aXZlKHVzZURldmljZU9yaWVudGF0aW9uKHsgd2luZG93IH0pKTtcbiAgY29uc3Qgc2NyZWVuT3JpZW50YXRpb24gPSByZWFjdGl2ZSh1c2VTY3JlZW5PcmllbnRhdGlvbih7IHdpbmRvdyB9KSk7XG4gIGNvbnN0IHtcbiAgICBlbGVtZW50WDogeCxcbiAgICBlbGVtZW50WTogeSxcbiAgICBlbGVtZW50V2lkdGg6IHdpZHRoLFxuICAgIGVsZW1lbnRIZWlnaHQ6IGhlaWdodFxuICB9ID0gdXNlTW91c2VJbkVsZW1lbnQodGFyZ2V0LCB7IGhhbmRsZU91dHNpZGU6IGZhbHNlLCB3aW5kb3cgfSk7XG4gIGNvbnN0IHNvdXJjZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAob3JpZW50YXRpb24uaXNTdXBwb3J0ZWQgJiYgKG9yaWVudGF0aW9uLmFscGhhICE9IG51bGwgJiYgb3JpZW50YXRpb24uYWxwaGEgIT09IDAgfHwgb3JpZW50YXRpb24uZ2FtbWEgIT0gbnVsbCAmJiBvcmllbnRhdGlvbi5nYW1tYSAhPT0gMCkpIHtcbiAgICAgIHJldHVybiBcImRldmljZU9yaWVudGF0aW9uXCI7XG4gICAgfVxuICAgIHJldHVybiBcIm1vdXNlXCI7XG4gIH0pO1xuICBjb25zdCByb2xsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChzb3VyY2UudmFsdWUgPT09IFwiZGV2aWNlT3JpZW50YXRpb25cIikge1xuICAgICAgbGV0IHZhbHVlO1xuICAgICAgc3dpdGNoIChzY3JlZW5PcmllbnRhdGlvbi5vcmllbnRhdGlvbikge1xuICAgICAgICBjYXNlIFwibGFuZHNjYXBlLXByaW1hcnlcIjpcbiAgICAgICAgICB2YWx1ZSA9IG9yaWVudGF0aW9uLmdhbW1hIC8gOTA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJsYW5kc2NhcGUtc2Vjb25kYXJ5XCI6XG4gICAgICAgICAgdmFsdWUgPSAtb3JpZW50YXRpb24uZ2FtbWEgLyA5MDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInBvcnRyYWl0LXByaW1hcnlcIjpcbiAgICAgICAgICB2YWx1ZSA9IC1vcmllbnRhdGlvbi5iZXRhIC8gOTA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwb3J0cmFpdC1zZWNvbmRhcnlcIjpcbiAgICAgICAgICB2YWx1ZSA9IG9yaWVudGF0aW9uLmJldGEgLyA5MDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB2YWx1ZSA9IC1vcmllbnRhdGlvbi5iZXRhIC8gOTA7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGV2aWNlT3JpZW50YXRpb25Sb2xsQWRqdXN0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWUgPSAtKHkudmFsdWUgLSBoZWlnaHQudmFsdWUgLyAyKSAvIGhlaWdodC52YWx1ZTtcbiAgICAgIHJldHVybiBtb3VzZVJvbGxBZGp1c3QodmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHRpbHQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHNvdXJjZS52YWx1ZSA9PT0gXCJkZXZpY2VPcmllbnRhdGlvblwiKSB7XG4gICAgICBsZXQgdmFsdWU7XG4gICAgICBzd2l0Y2ggKHNjcmVlbk9yaWVudGF0aW9uLm9yaWVudGF0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJsYW5kc2NhcGUtcHJpbWFyeVwiOlxuICAgICAgICAgIHZhbHVlID0gb3JpZW50YXRpb24uYmV0YSAvIDkwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibGFuZHNjYXBlLXNlY29uZGFyeVwiOlxuICAgICAgICAgIHZhbHVlID0gLW9yaWVudGF0aW9uLmJldGEgLyA5MDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInBvcnRyYWl0LXByaW1hcnlcIjpcbiAgICAgICAgICB2YWx1ZSA9IG9yaWVudGF0aW9uLmdhbW1hIC8gOTA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwb3J0cmFpdC1zZWNvbmRhcnlcIjpcbiAgICAgICAgICB2YWx1ZSA9IC1vcmllbnRhdGlvbi5nYW1tYSAvIDkwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHZhbHVlID0gb3JpZW50YXRpb24uZ2FtbWEgLyA5MDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXZpY2VPcmllbnRhdGlvblRpbHRBZGp1c3QodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWx1ZSA9ICh4LnZhbHVlIC0gd2lkdGgudmFsdWUgLyAyKSAvIHdpZHRoLnZhbHVlO1xuICAgICAgcmV0dXJuIG1vdXNlVGlsdEFkanVzdCh2YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHsgcm9sbCwgdGlsdCwgc291cmNlIH07XG59XG5cbmZ1bmN0aW9uIHVzZVBhcmVudEVsZW1lbnQoZWxlbWVudCA9IHVzZUN1cnJlbnRFbGVtZW50KCkpIHtcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IHNoYWxsb3dSZWYoKTtcbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gdW5yZWZFbGVtZW50KGVsZW1lbnQpO1xuICAgIGlmIChlbClcbiAgICAgIHBhcmVudEVsZW1lbnQudmFsdWUgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB9O1xuICB0cnlPbk1vdW50ZWQodXBkYXRlKTtcbiAgd2F0Y2goKCkgPT4gdG9WYWx1ZShlbGVtZW50KSwgdXBkYXRlKTtcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHVzZVBlcmZvcm1hbmNlT2JzZXJ2ZXIob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY29uc3Qge1xuICAgIHdpbmRvdyA9IGRlZmF1bHRXaW5kb3csXG4gICAgaW1tZWRpYXRlID0gdHJ1ZSxcbiAgICAuLi5wZXJmb3JtYW5jZU9wdGlvbnNcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzU3VwcG9ydGVkID0gdXNlU3VwcG9ydGVkKCgpID0+IHdpbmRvdyAmJiBcIlBlcmZvcm1hbmNlT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpO1xuICBsZXQgb2JzZXJ2ZXI7XG4gIGNvbnN0IHN0b3AgPSAoKSA9PiB7XG4gICAgb2JzZXJ2ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfTtcbiAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgaWYgKGlzU3VwcG9ydGVkLnZhbHVlKSB7XG4gICAgICBzdG9wKCk7XG4gICAgICBvYnNlcnZlciA9IG5ldyBQZXJmb3JtYW5jZU9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUocGVyZm9ybWFuY2VPcHRpb25zKTtcbiAgICB9XG4gIH07XG4gIHRyeU9uU2NvcGVEaXNwb3NlKHN0b3ApO1xuICBpZiAoaW1tZWRpYXRlKVxuICAgIHN0YXJ0KCk7XG4gIHJldHVybiB7XG4gICAgaXNTdXBwb3J0ZWQsXG4gICAgc3RhcnQsXG4gICAgc3RvcFxuICB9O1xufVxuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHBvaW50ZXJJZDogMCxcbiAgcHJlc3N1cmU6IDAsXG4gIHRpbHRYOiAwLFxuICB0aWx0WTogMCxcbiAgd2lkdGg6IDAsXG4gIGhlaWdodDogMCxcbiAgdHdpc3Q6IDAsXG4gIHBvaW50ZXJUeXBlOiBudWxsXG59O1xuY29uc3Qga2V5cyA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3Qua2V5cyhkZWZhdWx0U3RhdGUpO1xuZnVuY3Rpb24gdXNlUG9pbnRlcihvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIHRhcmdldCA9IGRlZmF1bHRXaW5kb3dcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGlzSW5zaWRlID0gcmVmKGZhbHNlKTtcbiAgY29uc3Qgc3RhdGUgPSByZWYob3B0aW9ucy5pbml0aWFsVmFsdWUgfHwge30pO1xuICBPYmplY3QuYXNzaWduKHN0YXRlLnZhbHVlLCBkZWZhdWx0U3RhdGUsIHN0YXRlLnZhbHVlKTtcbiAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGlzSW5zaWRlLnZhbHVlID0gdHJ1ZTtcbiAgICBpZiAob3B0aW9ucy5wb2ludGVyVHlwZXMgJiYgIW9wdGlvbnMucG9pbnRlclR5cGVzLmluY2x1ZGVzKGV2ZW50LnBvaW50ZXJUeXBlKSlcbiAgICAgIHJldHVybjtcbiAgICBzdGF0ZS52YWx1ZSA9IG9iamVjdFBpY2soZXZlbnQsIGtleXMsIGZhbHNlKTtcbiAgfTtcbiAgaWYgKHRhcmdldCkge1xuICAgIGNvbnN0IGxpc3RlbmVyT3B0aW9ucyA9IHsgcGFzc2l2ZTogdHJ1ZSB9O1xuICAgIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBbXCJwb2ludGVyZG93blwiLCBcInBvaW50ZXJtb3ZlXCIsIFwicG9pbnRlcnVwXCJdLCBoYW5kbGVyLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBcInBvaW50ZXJsZWF2ZVwiLCAoKSA9PiBpc0luc2lkZS52YWx1ZSA9IGZhbHNlLCBsaXN0ZW5lck9wdGlvbnMpO1xuICB9XG4gIHJldHVybiB7XG4gICAgLi4udG9SZWZzKHN0YXRlKSxcbiAgICBpc0luc2lkZVxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VQb2ludGVyTG9jayh0YXJnZXQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IGRvY3VtZW50ID0gZGVmYXVsdERvY3VtZW50IH0gPSBvcHRpb25zO1xuICBjb25zdCBpc1N1cHBvcnRlZCA9IHVzZVN1cHBvcnRlZCgoKSA9PiBkb2N1bWVudCAmJiBcInBvaW50ZXJMb2NrRWxlbWVudFwiIGluIGRvY3VtZW50KTtcbiAgY29uc3QgZWxlbWVudCA9IHJlZigpO1xuICBjb25zdCB0cmlnZ2VyRWxlbWVudCA9IHJlZigpO1xuICBsZXQgdGFyZ2V0RWxlbWVudDtcbiAgaWYgKGlzU3VwcG9ydGVkLnZhbHVlKSB7XG4gICAgdXNlRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgXCJwb2ludGVybG9ja2NoYW5nZVwiLCAoKSA9PiB7XG4gICAgICB2YXIgX2E7XG4gICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IChfYSA9IGRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCkgIT0gbnVsbCA/IF9hIDogZWxlbWVudC52YWx1ZTtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50ICYmIGN1cnJlbnRFbGVtZW50ID09PSB0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSBkb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQ7XG4gICAgICAgIGlmICghZWxlbWVudC52YWx1ZSlcbiAgICAgICAgICB0YXJnZXRFbGVtZW50ID0gdHJpZ2dlckVsZW1lbnQudmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHVzZUV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsIFwicG9pbnRlcmxvY2tlcnJvclwiLCAoKSA9PiB7XG4gICAgICB2YXIgX2E7XG4gICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IChfYSA9IGRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCkgIT0gbnVsbCA/IF9hIDogZWxlbWVudC52YWx1ZTtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50ICYmIGN1cnJlbnRFbGVtZW50ID09PSB0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCA/IFwicmVsZWFzZVwiIDogXCJhY3F1aXJlXCI7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvICR7YWN0aW9ufSBwb2ludGVyIGxvY2suYCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gbG9jayhlKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghaXNTdXBwb3J0ZWQudmFsdWUpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQb2ludGVyIExvY2sgQVBJIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyLlwiKTtcbiAgICB0cmlnZ2VyRWxlbWVudC52YWx1ZSA9IGUgaW5zdGFuY2VvZiBFdmVudCA/IGUuY3VycmVudFRhcmdldCA6IG51bGw7XG4gICAgdGFyZ2V0RWxlbWVudCA9IGUgaW5zdGFuY2VvZiBFdmVudCA/IChfYSA9IHVucmVmRWxlbWVudCh0YXJnZXQpKSAhPSBudWxsID8gX2EgOiB0cmlnZ2VyRWxlbWVudC52YWx1ZSA6IHVucmVmRWxlbWVudChlKTtcbiAgICBpZiAoIXRhcmdldEVsZW1lbnQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUYXJnZXQgZWxlbWVudCB1bmRlZmluZWQuXCIpO1xuICAgIHRhcmdldEVsZW1lbnQucmVxdWVzdFBvaW50ZXJMb2NrKCk7XG4gICAgcmV0dXJuIGF3YWl0IHVudGlsKGVsZW1lbnQpLnRvQmUodGFyZ2V0RWxlbWVudCk7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gdW5sb2NrKCkge1xuICAgIGlmICghZWxlbWVudC52YWx1ZSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBkb2N1bWVudC5leGl0UG9pbnRlckxvY2soKTtcbiAgICBhd2FpdCB1bnRpbChlbGVtZW50KS50b0JlTnVsbCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXNTdXBwb3J0ZWQsXG4gICAgZWxlbWVudCxcbiAgICB0cmlnZ2VyRWxlbWVudCxcbiAgICBsb2NrLFxuICAgIHVubG9ja1xuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VQb2ludGVyU3dpcGUodGFyZ2V0LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgdGFyZ2V0UmVmID0gdG9SZWYodGFyZ2V0KTtcbiAgY29uc3Qge1xuICAgIHRocmVzaG9sZCA9IDUwLFxuICAgIG9uU3dpcGUsXG4gICAgb25Td2lwZUVuZCxcbiAgICBvblN3aXBlU3RhcnQsXG4gICAgZGlzYWJsZVRleHRTZWxlY3QgPSBmYWxzZVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcG9zU3RhcnQgPSByZWFjdGl2ZSh7IHg6IDAsIHk6IDAgfSk7XG4gIGNvbnN0IHVwZGF0ZVBvc1N0YXJ0ID0gKHgsIHkpID0+IHtcbiAgICBwb3NTdGFydC54ID0geDtcbiAgICBwb3NTdGFydC55ID0geTtcbiAgfTtcbiAgY29uc3QgcG9zRW5kID0gcmVhY3RpdmUoeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCB1cGRhdGVQb3NFbmQgPSAoeCwgeSkgPT4ge1xuICAgIHBvc0VuZC54ID0geDtcbiAgICBwb3NFbmQueSA9IHk7XG4gIH07XG4gIGNvbnN0IGRpc3RhbmNlWCA9IGNvbXB1dGVkKCgpID0+IHBvc1N0YXJ0LnggLSBwb3NFbmQueCk7XG4gIGNvbnN0IGRpc3RhbmNlWSA9IGNvbXB1dGVkKCgpID0+IHBvc1N0YXJ0LnkgLSBwb3NFbmQueSk7XG4gIGNvbnN0IHsgbWF4LCBhYnMgfSA9IE1hdGg7XG4gIGNvbnN0IGlzVGhyZXNob2xkRXhjZWVkZWQgPSBjb21wdXRlZCgoKSA9PiBtYXgoYWJzKGRpc3RhbmNlWC52YWx1ZSksIGFicyhkaXN0YW5jZVkudmFsdWUpKSA+PSB0aHJlc2hvbGQpO1xuICBjb25zdCBpc1N3aXBpbmcgPSByZWYoZmFsc2UpO1xuICBjb25zdCBpc1BvaW50ZXJEb3duID0gcmVmKGZhbHNlKTtcbiAgY29uc3QgZGlyZWN0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmICghaXNUaHJlc2hvbGRFeGNlZWRlZC52YWx1ZSlcbiAgICAgIHJldHVybiBcIm5vbmVcIjtcbiAgICBpZiAoYWJzKGRpc3RhbmNlWC52YWx1ZSkgPiBhYnMoZGlzdGFuY2VZLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIGRpc3RhbmNlWC52YWx1ZSA+IDAgPyBcImxlZnRcIiA6IFwicmlnaHRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRpc3RhbmNlWS52YWx1ZSA+IDAgPyBcInVwXCIgOiBcImRvd25cIjtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBldmVudElzQWxsb3dlZCA9IChlKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgY29uc3QgaXNSZWxlYXNpbmdCdXR0b24gPSBlLmJ1dHRvbnMgPT09IDA7XG4gICAgY29uc3QgaXNQcmltYXJ5QnV0dG9uID0gZS5idXR0b25zID09PSAxO1xuICAgIHJldHVybiAoX2MgPSAoX2IgPSAoX2EgPSBvcHRpb25zLnBvaW50ZXJUeXBlcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmluY2x1ZGVzKGUucG9pbnRlclR5cGUpKSAhPSBudWxsID8gX2IgOiBpc1JlbGVhc2luZ0J1dHRvbiB8fCBpc1ByaW1hcnlCdXR0b24pICE9IG51bGwgPyBfYyA6IHRydWU7XG4gIH07XG4gIGNvbnN0IHN0b3BzID0gW1xuICAgIHVzZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBcInBvaW50ZXJkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoIWV2ZW50SXNBbGxvd2VkKGUpKVxuICAgICAgICByZXR1cm47XG4gICAgICBpc1BvaW50ZXJEb3duLnZhbHVlID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICBldmVudFRhcmdldCA9PSBudWxsID8gdm9pZCAwIDogZXZlbnRUYXJnZXQuc2V0UG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xuICAgICAgY29uc3QgeyBjbGllbnRYOiB4LCBjbGllbnRZOiB5IH0gPSBlO1xuICAgICAgdXBkYXRlUG9zU3RhcnQoeCwgeSk7XG4gICAgICB1cGRhdGVQb3NFbmQoeCwgeSk7XG4gICAgICBvblN3aXBlU3RhcnQgPT0gbnVsbCA/IHZvaWQgMCA6IG9uU3dpcGVTdGFydChlKTtcbiAgICB9KSxcbiAgICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgXCJwb2ludGVybW92ZVwiLCAoZSkgPT4ge1xuICAgICAgaWYgKCFldmVudElzQWxsb3dlZChlKSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaWYgKCFpc1BvaW50ZXJEb3duLnZhbHVlKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCB7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSA9IGU7XG4gICAgICB1cGRhdGVQb3NFbmQoeCwgeSk7XG4gICAgICBpZiAoIWlzU3dpcGluZy52YWx1ZSAmJiBpc1RocmVzaG9sZEV4Y2VlZGVkLnZhbHVlKVxuICAgICAgICBpc1N3aXBpbmcudmFsdWUgPSB0cnVlO1xuICAgICAgaWYgKGlzU3dpcGluZy52YWx1ZSlcbiAgICAgICAgb25Td2lwZSA9PSBudWxsID8gdm9pZCAwIDogb25Td2lwZShlKTtcbiAgICB9KSxcbiAgICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgXCJwb2ludGVydXBcIiwgKGUpID0+IHtcbiAgICAgIGlmICghZXZlbnRJc0FsbG93ZWQoZSkpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmIChpc1N3aXBpbmcudmFsdWUpXG4gICAgICAgIG9uU3dpcGVFbmQgPT0gbnVsbCA/IHZvaWQgMCA6IG9uU3dpcGVFbmQoZSwgZGlyZWN0aW9uLnZhbHVlKTtcbiAgICAgIGlzUG9pbnRlckRvd24udmFsdWUgPSBmYWxzZTtcbiAgICAgIGlzU3dpcGluZy52YWx1ZSA9IGZhbHNlO1xuICAgIH0pXG4gIF07XG4gIHRyeU9uTW91bnRlZCgoKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaDtcbiAgICAoX2IgPSAoX2EgPSB0YXJnZXRSZWYudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfYS5zdHlsZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLnNldFByb3BlcnR5KFwidG91Y2gtYWN0aW9uXCIsIFwibm9uZVwiKTtcbiAgICBpZiAoZGlzYWJsZVRleHRTZWxlY3QpIHtcbiAgICAgIChfZCA9IChfYyA9IHRhcmdldFJlZi52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jLnN0eWxlKSA9PSBudWxsID8gdm9pZCAwIDogX2Quc2V0UHJvcGVydHkoXCItd2Via2l0LXVzZXItc2VsZWN0XCIsIFwibm9uZVwiKTtcbiAgICAgIChfZiA9IChfZSA9IHRhcmdldFJlZi52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lLnN0eWxlKSA9PSBudWxsID8gdm9pZCAwIDogX2Yuc2V0UHJvcGVydHkoXCItbXMtdXNlci1zZWxlY3RcIiwgXCJub25lXCIpO1xuICAgICAgKF9oID0gKF9nID0gdGFyZ2V0UmVmLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2cuc3R5bGUpID09IG51bGwgPyB2b2lkIDAgOiBfaC5zZXRQcm9wZXJ0eShcInVzZXItc2VsZWN0XCIsIFwibm9uZVwiKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBzdG9wID0gKCkgPT4gc3RvcHMuZm9yRWFjaCgocykgPT4gcygpKTtcbiAgcmV0dXJuIHtcbiAgICBpc1N3aXBpbmc6IHJlYWRvbmx5KGlzU3dpcGluZyksXG4gICAgZGlyZWN0aW9uOiByZWFkb25seShkaXJlY3Rpb24pLFxuICAgIHBvc1N0YXJ0OiByZWFkb25seShwb3NTdGFydCksXG4gICAgcG9zRW5kOiByZWFkb25seShwb3NFbmQpLFxuICAgIGRpc3RhbmNlWCxcbiAgICBkaXN0YW5jZVksXG4gICAgc3RvcFxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VQcmVmZXJyZWRDb2xvclNjaGVtZShvcHRpb25zKSB7XG4gIGNvbnN0IGlzTGlnaHQgPSB1c2VNZWRpYVF1ZXJ5KFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodClcIiwgb3B0aW9ucyk7XG4gIGNvbnN0IGlzRGFyayA9IHVzZU1lZGlhUXVlcnkoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIsIG9wdGlvbnMpO1xuICByZXR1cm4gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChpc0RhcmsudmFsdWUpXG4gICAgICByZXR1cm4gXCJkYXJrXCI7XG4gICAgaWYgKGlzTGlnaHQudmFsdWUpXG4gICAgICByZXR1cm4gXCJsaWdodFwiO1xuICAgIHJldHVybiBcIm5vLXByZWZlcmVuY2VcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZVByZWZlcnJlZENvbnRyYXN0KG9wdGlvbnMpIHtcbiAgY29uc3QgaXNNb3JlID0gdXNlTWVkaWFRdWVyeShcIihwcmVmZXJzLWNvbnRyYXN0OiBtb3JlKVwiLCBvcHRpb25zKTtcbiAgY29uc3QgaXNMZXNzID0gdXNlTWVkaWFRdWVyeShcIihwcmVmZXJzLWNvbnRyYXN0OiBsZXNzKVwiLCBvcHRpb25zKTtcbiAgY29uc3QgaXNDdXN0b20gPSB1c2VNZWRpYVF1ZXJ5KFwiKHByZWZlcnMtY29udHJhc3Q6IGN1c3RvbSlcIiwgb3B0aW9ucyk7XG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKGlzTW9yZS52YWx1ZSlcbiAgICAgIHJldHVybiBcIm1vcmVcIjtcbiAgICBpZiAoaXNMZXNzLnZhbHVlKVxuICAgICAgcmV0dXJuIFwibGVzc1wiO1xuICAgIGlmIChpc0N1c3RvbS52YWx1ZSlcbiAgICAgIHJldHVybiBcImN1c3RvbVwiO1xuICAgIHJldHVybiBcIm5vLXByZWZlcmVuY2VcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZVByZWZlcnJlZExhbmd1YWdlcyhvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyB3aW5kb3cgPSBkZWZhdWx0V2luZG93IH0gPSBvcHRpb25zO1xuICBpZiAoIXdpbmRvdylcbiAgICByZXR1cm4gcmVmKFtcImVuXCJdKTtcbiAgY29uc3QgbmF2aWdhdG9yID0gd2luZG93Lm5hdmlnYXRvcjtcbiAgY29uc3QgdmFsdWUgPSByZWYobmF2aWdhdG9yLmxhbmd1YWdlcyk7XG4gIHVzZUV2ZW50TGlzdGVuZXIod2luZG93LCBcImxhbmd1YWdlY2hhbmdlXCIsICgpID0+IHtcbiAgICB2YWx1ZS52YWx1ZSA9IG5hdmlnYXRvci5sYW5ndWFnZXM7XG4gIH0pO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVzZVByZWZlcnJlZFJlZHVjZWRNb3Rpb24ob3B0aW9ucykge1xuICBjb25zdCBpc1JlZHVjZWQgPSB1c2VNZWRpYVF1ZXJ5KFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIiwgb3B0aW9ucyk7XG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKGlzUmVkdWNlZC52YWx1ZSlcbiAgICAgIHJldHVybiBcInJlZHVjZVwiO1xuICAgIHJldHVybiBcIm5vLXByZWZlcmVuY2VcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlLCBpbml0aWFsVmFsdWUpIHtcbiAgY29uc3QgcHJldmlvdXMgPSBzaGFsbG93UmVmKGluaXRpYWxWYWx1ZSk7XG4gIHdhdGNoKFxuICAgIHRvUmVmKHZhbHVlKSxcbiAgICAoXywgb2xkVmFsdWUpID0+IHtcbiAgICAgIHByZXZpb3VzLnZhbHVlID0gb2xkVmFsdWU7XG4gICAgfSxcbiAgICB7IGZsdXNoOiBcInN5bmNcIiB9XG4gICk7XG4gIHJldHVybiByZWFkb25seShwcmV2aW91cyk7XG59XG5cbmNvbnN0IHRvcFZhck5hbWUgPSBcIi0tdnVldXNlLXNhZmUtYXJlYS10b3BcIjtcbmNvbnN0IHJpZ2h0VmFyTmFtZSA9IFwiLS12dWV1c2Utc2FmZS1hcmVhLXJpZ2h0XCI7XG5jb25zdCBib3R0b21WYXJOYW1lID0gXCItLXZ1ZXVzZS1zYWZlLWFyZWEtYm90dG9tXCI7XG5jb25zdCBsZWZ0VmFyTmFtZSA9IFwiLS12dWV1c2Utc2FmZS1hcmVhLWxlZnRcIjtcbmZ1bmN0aW9uIHVzZVNjcmVlblNhZmVBcmVhKCkge1xuICBjb25zdCB0b3AgPSByZWYoXCJcIik7XG4gIGNvbnN0IHJpZ2h0ID0gcmVmKFwiXCIpO1xuICBjb25zdCBib3R0b20gPSByZWYoXCJcIik7XG4gIGNvbnN0IGxlZnQgPSByZWYoXCJcIik7XG4gIGlmIChpc0NsaWVudCkge1xuICAgIGNvbnN0IHRvcENzc1ZhciA9IHVzZUNzc1Zhcih0b3BWYXJOYW1lKTtcbiAgICBjb25zdCByaWdodENzc1ZhciA9IHVzZUNzc1ZhcihyaWdodFZhck5hbWUpO1xuICAgIGNvbnN0IGJvdHRvbUNzc1ZhciA9IHVzZUNzc1Zhcihib3R0b21WYXJOYW1lKTtcbiAgICBjb25zdCBsZWZ0Q3NzVmFyID0gdXNlQ3NzVmFyKGxlZnRWYXJOYW1lKTtcbiAgICB0b3BDc3NWYXIudmFsdWUgPSBcImVudihzYWZlLWFyZWEtaW5zZXQtdG9wLCAwcHgpXCI7XG4gICAgcmlnaHRDc3NWYXIudmFsdWUgPSBcImVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQsIDBweClcIjtcbiAgICBib3R0b21Dc3NWYXIudmFsdWUgPSBcImVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tLCAwcHgpXCI7XG4gICAgbGVmdENzc1Zhci52YWx1ZSA9IFwiZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0LCAwcHgpXCI7XG4gICAgdXBkYXRlKCk7XG4gICAgdXNlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1c2VEZWJvdW5jZUZuKHVwZGF0ZSkpO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB0b3AudmFsdWUgPSBnZXRWYWx1ZSh0b3BWYXJOYW1lKTtcbiAgICByaWdodC52YWx1ZSA9IGdldFZhbHVlKHJpZ2h0VmFyTmFtZSk7XG4gICAgYm90dG9tLnZhbHVlID0gZ2V0VmFsdWUoYm90dG9tVmFyTmFtZSk7XG4gICAgbGVmdC52YWx1ZSA9IGdldFZhbHVlKGxlZnRWYXJOYW1lKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHRvcCxcbiAgICByaWdodCxcbiAgICBib3R0b20sXG4gICAgbGVmdCxcbiAgICB1cGRhdGVcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldFZhbHVlKHBvc2l0aW9uKSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShwb3NpdGlvbik7XG59XG5cbmZ1bmN0aW9uIHVzZVNjcmlwdFRhZyhzcmMsIG9uTG9hZGVkID0gbm9vcCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBpbW1lZGlhdGUgPSB0cnVlLFxuICAgIG1hbnVhbCA9IGZhbHNlLFxuICAgIHR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiLFxuICAgIGFzeW5jID0gdHJ1ZSxcbiAgICBjcm9zc09yaWdpbixcbiAgICByZWZlcnJlclBvbGljeSxcbiAgICBub01vZHVsZSxcbiAgICBkZWZlcixcbiAgICBkb2N1bWVudCA9IGRlZmF1bHREb2N1bWVudCxcbiAgICBhdHRycyA9IHt9XG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBzY3JpcHRUYWcgPSByZWYobnVsbCk7XG4gIGxldCBfcHJvbWlzZSA9IG51bGw7XG4gIGNvbnN0IGxvYWRTY3JpcHQgPSAod2FpdEZvclNjcmlwdExvYWQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZXNvbHZlV2l0aEVsZW1lbnQgPSAoZWwyKSA9PiB7XG4gICAgICBzY3JpcHRUYWcudmFsdWUgPSBlbDI7XG4gICAgICByZXNvbHZlKGVsMik7XG4gICAgICByZXR1cm4gZWwyO1xuICAgIH07XG4gICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzaG91bGRBcHBlbmQgPSBmYWxzZTtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjPVwiJHt0b1ZhbHVlKHNyYyl9XCJdYCk7XG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgZWwudHlwZSA9IHR5cGU7XG4gICAgICBlbC5hc3luYyA9IGFzeW5jO1xuICAgICAgZWwuc3JjID0gdG9WYWx1ZShzcmMpO1xuICAgICAgaWYgKGRlZmVyKVxuICAgICAgICBlbC5kZWZlciA9IGRlZmVyO1xuICAgICAgaWYgKGNyb3NzT3JpZ2luKVxuICAgICAgICBlbC5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuICAgICAgaWYgKG5vTW9kdWxlKVxuICAgICAgICBlbC5ub01vZHVsZSA9IG5vTW9kdWxlO1xuICAgICAgaWYgKHJlZmVycmVyUG9saWN5KVxuICAgICAgICBlbC5yZWZlcnJlclBvbGljeSA9IHJlZmVycmVyUG9saWN5O1xuICAgICAgT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZvckVhY2goKFtuYW1lLCB2YWx1ZV0pID0+IGVsID09IG51bGwgPyB2b2lkIDAgOiBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpKTtcbiAgICAgIHNob3VsZEFwcGVuZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChlbC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWxvYWRlZFwiKSkge1xuICAgICAgcmVzb2x2ZVdpdGhFbGVtZW50KGVsKTtcbiAgICB9XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIChldmVudCkgPT4gcmVqZWN0KGV2ZW50KSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIChldmVudCkgPT4gcmVqZWN0KGV2ZW50KSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1sb2FkZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgb25Mb2FkZWQoZWwpO1xuICAgICAgcmVzb2x2ZVdpdGhFbGVtZW50KGVsKTtcbiAgICB9KTtcbiAgICBpZiAoc2hvdWxkQXBwZW5kKVxuICAgICAgZWwgPSBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsKTtcbiAgICBpZiAoIXdhaXRGb3JTY3JpcHRMb2FkKVxuICAgICAgcmVzb2x2ZVdpdGhFbGVtZW50KGVsKTtcbiAgfSk7XG4gIGNvbnN0IGxvYWQgPSAod2FpdEZvclNjcmlwdExvYWQgPSB0cnVlKSA9PiB7XG4gICAgaWYgKCFfcHJvbWlzZSlcbiAgICAgIF9wcm9taXNlID0gbG9hZFNjcmlwdCh3YWl0Rm9yU2NyaXB0TG9hZCk7XG4gICAgcmV0dXJuIF9wcm9taXNlO1xuICB9O1xuICBjb25zdCB1bmxvYWQgPSAoKSA9PiB7XG4gICAgaWYgKCFkb2N1bWVudClcbiAgICAgIHJldHVybjtcbiAgICBfcHJvbWlzZSA9IG51bGw7XG4gICAgaWYgKHNjcmlwdFRhZy52YWx1ZSlcbiAgICAgIHNjcmlwdFRhZy52YWx1ZSA9IG51bGw7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjPVwiJHt0b1ZhbHVlKHNyYyl9XCJdYCk7XG4gICAgaWYgKGVsKVxuICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChlbCk7XG4gIH07XG4gIGlmIChpbW1lZGlhdGUgJiYgIW1hbnVhbClcbiAgICB0cnlPbk1vdW50ZWQobG9hZCk7XG4gIGlmICghbWFudWFsKVxuICAgIHRyeU9uVW5tb3VudGVkKHVubG9hZCk7XG4gIHJldHVybiB7IHNjcmlwdFRhZywgbG9hZCwgdW5sb2FkIH07XG59XG5cbmZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3dTY3JvbGwoZWxlKSB7XG4gIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlKTtcbiAgaWYgKHN0eWxlLm92ZXJmbG93WCA9PT0gXCJzY3JvbGxcIiB8fCBzdHlsZS5vdmVyZmxvd1kgPT09IFwic2Nyb2xsXCIgfHwgc3R5bGUub3ZlcmZsb3dYID09PSBcImF1dG9cIiAmJiBlbGUuY2xpZW50V2lkdGggPCBlbGUuc2Nyb2xsV2lkdGggfHwgc3R5bGUub3ZlcmZsb3dZID09PSBcImF1dG9cIiAmJiBlbGUuY2xpZW50SGVpZ2h0IDwgZWxlLnNjcm9sbEhlaWdodCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcmVudCA9IGVsZS5wYXJlbnROb2RlO1xuICAgIGlmICghcGFyZW50IHx8IHBhcmVudC50YWdOYW1lID09PSBcIkJPRFlcIilcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gY2hlY2tPdmVyZmxvd1Njcm9sbChwYXJlbnQpO1xuICB9XG59XG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChyYXdFdmVudCkge1xuICBjb25zdCBlID0gcmF3RXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICBjb25zdCBfdGFyZ2V0ID0gZS50YXJnZXQ7XG4gIGlmIChjaGVja092ZXJmbG93U2Nyb2xsKF90YXJnZXQpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgaWYgKGUudG91Y2hlcy5sZW5ndGggPiAxKVxuICAgIHJldHVybiB0cnVlO1xuICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHJldHVybiBmYWxzZTtcbn1cbmNvbnN0IGVsSW5pdGlhbE92ZXJmbG93ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiB1c2VTY3JvbGxMb2NrKGVsZW1lbnQsIGluaXRpYWxTdGF0ZSA9IGZhbHNlKSB7XG4gIGNvbnN0IGlzTG9ja2VkID0gcmVmKGluaXRpYWxTdGF0ZSk7XG4gIGxldCBzdG9wVG91Y2hNb3ZlTGlzdGVuZXIgPSBudWxsO1xuICBsZXQgaW5pdGlhbE92ZXJmbG93ID0gXCJcIjtcbiAgd2F0Y2godG9SZWYoZWxlbWVudCksIChlbCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IHJlc29sdmVFbGVtZW50KHRvVmFsdWUoZWwpKTtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICBjb25zdCBlbGUgPSB0YXJnZXQ7XG4gICAgICBpZiAoIWVsSW5pdGlhbE92ZXJmbG93LmdldChlbGUpKVxuICAgICAgICBlbEluaXRpYWxPdmVyZmxvdy5zZXQoZWxlLCBlbGUuc3R5bGUub3ZlcmZsb3cpO1xuICAgICAgaWYgKGVsZS5zdHlsZS5vdmVyZmxvdyAhPT0gXCJoaWRkZW5cIilcbiAgICAgICAgaW5pdGlhbE92ZXJmbG93ID0gZWxlLnN0eWxlLm92ZXJmbG93O1xuICAgICAgaWYgKGVsZS5zdHlsZS5vdmVyZmxvdyA9PT0gXCJoaWRkZW5cIilcbiAgICAgICAgcmV0dXJuIGlzTG9ja2VkLnZhbHVlID0gdHJ1ZTtcbiAgICAgIGlmIChpc0xvY2tlZC52YWx1ZSlcbiAgICAgICAgcmV0dXJuIGVsZS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgfVxuICB9LCB7XG4gICAgaW1tZWRpYXRlOiB0cnVlXG4gIH0pO1xuICBjb25zdCBsb2NrID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gcmVzb2x2ZUVsZW1lbnQodG9WYWx1ZShlbGVtZW50KSk7XG4gICAgaWYgKCFlbCB8fCBpc0xvY2tlZC52YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgIHN0b3BUb3VjaE1vdmVMaXN0ZW5lciA9IHVzZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgIGVsLFxuICAgICAgICBcInRvdWNobW92ZVwiLFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICB9LFxuICAgICAgICB7IHBhc3NpdmU6IGZhbHNlIH1cbiAgICAgICk7XG4gICAgfVxuICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICBpc0xvY2tlZC52YWx1ZSA9IHRydWU7XG4gIH07XG4gIGNvbnN0IHVubG9jayA9ICgpID0+IHtcbiAgICBjb25zdCBlbCA9IHJlc29sdmVFbGVtZW50KHRvVmFsdWUoZWxlbWVudCkpO1xuICAgIGlmICghZWwgfHwgIWlzTG9ja2VkLnZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIGlzSU9TICYmIChzdG9wVG91Y2hNb3ZlTGlzdGVuZXIgPT0gbnVsbCA/IHZvaWQgMCA6IHN0b3BUb3VjaE1vdmVMaXN0ZW5lcigpKTtcbiAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IGluaXRpYWxPdmVyZmxvdztcbiAgICBlbEluaXRpYWxPdmVyZmxvdy5kZWxldGUoZWwpO1xuICAgIGlzTG9ja2VkLnZhbHVlID0gZmFsc2U7XG4gIH07XG4gIHRyeU9uU2NvcGVEaXNwb3NlKHVubG9jayk7XG4gIHJldHVybiBjb21wdXRlZCh7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGlzTG9ja2VkLnZhbHVlO1xuICAgIH0sXG4gICAgc2V0KHYpIHtcbiAgICAgIGlmICh2KVxuICAgICAgICBsb2NrKCk7XG4gICAgICBlbHNlIHVubG9jaygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZVNlc3Npb25TdG9yYWdlKGtleSwgaW5pdGlhbFZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyB3aW5kb3cgPSBkZWZhdWx0V2luZG93IH0gPSBvcHRpb25zO1xuICByZXR1cm4gdXNlU3RvcmFnZShrZXksIGluaXRpYWxWYWx1ZSwgd2luZG93ID09IG51bGwgPyB2b2lkIDAgOiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiB1c2VTaGFyZShzaGFyZU9wdGlvbnMgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgbmF2aWdhdG9yID0gZGVmYXVsdE5hdmlnYXRvciB9ID0gb3B0aW9ucztcbiAgY29uc3QgX25hdmlnYXRvciA9IG5hdmlnYXRvcjtcbiAgY29uc3QgaXNTdXBwb3J0ZWQgPSB1c2VTdXBwb3J0ZWQoKCkgPT4gX25hdmlnYXRvciAmJiBcImNhblNoYXJlXCIgaW4gX25hdmlnYXRvcik7XG4gIGNvbnN0IHNoYXJlID0gYXN5bmMgKG92ZXJyaWRlT3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgaWYgKGlzU3VwcG9ydGVkLnZhbHVlKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAuLi50b1ZhbHVlKHNoYXJlT3B0aW9ucyksXG4gICAgICAgIC4uLnRvVmFsdWUob3ZlcnJpZGVPcHRpb25zKVxuICAgICAgfTtcbiAgICAgIGxldCBncmFudGVkID0gdHJ1ZTtcbiAgICAgIGlmIChkYXRhLmZpbGVzICYmIF9uYXZpZ2F0b3IuY2FuU2hhcmUpXG4gICAgICAgIGdyYW50ZWQgPSBfbmF2aWdhdG9yLmNhblNoYXJlKHsgZmlsZXM6IGRhdGEuZmlsZXMgfSk7XG4gICAgICBpZiAoZ3JhbnRlZClcbiAgICAgICAgcmV0dXJuIF9uYXZpZ2F0b3Iuc2hhcmUoZGF0YSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIGlzU3VwcG9ydGVkLFxuICAgIHNoYXJlXG4gIH07XG59XG5cbmNvbnN0IGRlZmF1bHRTb3J0Rm4gPSAoc291cmNlLCBjb21wYXJlRm4pID0+IHNvdXJjZS5zb3J0KGNvbXBhcmVGbik7XG5jb25zdCBkZWZhdWx0Q29tcGFyZSA9IChhLCBiKSA9PiBhIC0gYjtcbmZ1bmN0aW9uIHVzZVNvcnRlZCguLi5hcmdzKSB7XG4gIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgY29uc3QgW3NvdXJjZV0gPSBhcmdzO1xuICBsZXQgY29tcGFyZUZuID0gZGVmYXVsdENvbXBhcmU7XG4gIGxldCBvcHRpb25zID0ge307XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgb3B0aW9ucyA9IGFyZ3NbMV07XG4gICAgICBjb21wYXJlRm4gPSAoX2EgPSBvcHRpb25zLmNvbXBhcmVGbikgIT0gbnVsbCA/IF9hIDogZGVmYXVsdENvbXBhcmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBhcmVGbiA9IChfYiA9IGFyZ3NbMV0pICE9IG51bGwgPyBfYiA6IGRlZmF1bHRDb21wYXJlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcbiAgICBjb21wYXJlRm4gPSAoX2MgPSBhcmdzWzFdKSAhPSBudWxsID8gX2MgOiBkZWZhdWx0Q29tcGFyZTtcbiAgICBvcHRpb25zID0gKF9kID0gYXJnc1syXSkgIT0gbnVsbCA/IF9kIDoge307XG4gIH1cbiAgY29uc3Qge1xuICAgIGRpcnR5ID0gZmFsc2UsXG4gICAgc29ydEZuID0gZGVmYXVsdFNvcnRGblxuICB9ID0gb3B0aW9ucztcbiAgaWYgKCFkaXJ0eSlcbiAgICByZXR1cm4gY29tcHV0ZWQoKCkgPT4gc29ydEZuKFsuLi50b1ZhbHVlKHNvdXJjZSldLCBjb21wYXJlRm4pKTtcbiAgd2F0Y2hFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRGbih0b1ZhbHVlKHNvdXJjZSksIGNvbXBhcmVGbik7XG4gICAgaWYgKGlzUmVmKHNvdXJjZSkpXG4gICAgICBzb3VyY2UudmFsdWUgPSByZXN1bHQ7XG4gICAgZWxzZVxuICAgICAgc291cmNlLnNwbGljZSgwLCBzb3VyY2UubGVuZ3RoLCAuLi5yZXN1bHQpO1xuICB9KTtcbiAgcmV0dXJuIHNvdXJjZTtcbn1cblxuZnVuY3Rpb24gdXNlU3BlZWNoUmVjb2duaXRpb24ob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBpbnRlcmltUmVzdWx0cyA9IHRydWUsXG4gICAgY29udGludW91cyA9IHRydWUsXG4gICAgd2luZG93ID0gZGVmYXVsdFdpbmRvd1xuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgbGFuZyA9IHRvUmVmKG9wdGlvbnMubGFuZyB8fCBcImVuLVVTXCIpO1xuICBjb25zdCBpc0xpc3RlbmluZyA9IHJlZihmYWxzZSk7XG4gIGNvbnN0IGlzRmluYWwgPSByZWYoZmFsc2UpO1xuICBjb25zdCByZXN1bHQgPSByZWYoXCJcIik7XG4gIGNvbnN0IGVycm9yID0gc2hhbGxvd1JlZih2b2lkIDApO1xuICBjb25zdCB0b2dnbGUgPSAodmFsdWUgPSAhaXNMaXN0ZW5pbmcudmFsdWUpID0+IHtcbiAgICBpc0xpc3RlbmluZy52YWx1ZSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICBpc0xpc3RlbmluZy52YWx1ZSA9IHRydWU7XG4gIH07XG4gIGNvbnN0IHN0b3AgPSAoKSA9PiB7XG4gICAgaXNMaXN0ZW5pbmcudmFsdWUgPSBmYWxzZTtcbiAgfTtcbiAgY29uc3QgU3BlZWNoUmVjb2duaXRpb24gPSB3aW5kb3cgJiYgKHdpbmRvdy5TcGVlY2hSZWNvZ25pdGlvbiB8fCB3aW5kb3cud2Via2l0U3BlZWNoUmVjb2duaXRpb24pO1xuICBjb25zdCBpc1N1cHBvcnRlZCA9IHVzZVN1cHBvcnRlZCgoKSA9PiBTcGVlY2hSZWNvZ25pdGlvbik7XG4gIGxldCByZWNvZ25pdGlvbjtcbiAgaWYgKGlzU3VwcG9ydGVkLnZhbHVlKSB7XG4gICAgcmVjb2duaXRpb24gPSBuZXcgU3BlZWNoUmVjb2duaXRpb24oKTtcbiAgICByZWNvZ25pdGlvbi5jb250aW51b3VzID0gY29udGludW91cztcbiAgICByZWNvZ25pdGlvbi5pbnRlcmltUmVzdWx0cyA9IGludGVyaW1SZXN1bHRzO1xuICAgIHJlY29nbml0aW9uLmxhbmcgPSB0b1ZhbHVlKGxhbmcpO1xuICAgIHJlY29nbml0aW9uLm9uc3RhcnQgPSAoKSA9PiB7XG4gICAgICBpc0ZpbmFsLnZhbHVlID0gZmFsc2U7XG4gICAgfTtcbiAgICB3YXRjaChsYW5nLCAobGFuZzIpID0+IHtcbiAgICAgIGlmIChyZWNvZ25pdGlvbiAmJiAhaXNMaXN0ZW5pbmcudmFsdWUpXG4gICAgICAgIHJlY29nbml0aW9uLmxhbmcgPSBsYW5nMjtcbiAgICB9KTtcbiAgICByZWNvZ25pdGlvbi5vbnJlc3VsdCA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFJlc3VsdCA9IGV2ZW50LnJlc3VsdHNbZXZlbnQucmVzdWx0SW5kZXhdO1xuICAgICAgY29uc3QgeyB0cmFuc2NyaXB0IH0gPSBjdXJyZW50UmVzdWx0WzBdO1xuICAgICAgaXNGaW5hbC52YWx1ZSA9IGN1cnJlbnRSZXN1bHQuaXNGaW5hbDtcbiAgICAgIHJlc3VsdC52YWx1ZSA9IHRyYW5zY3JpcHQ7XG4gICAgICBlcnJvci52YWx1ZSA9IHZvaWQgMDtcbiAgICB9O1xuICAgIHJlY29nbml0aW9uLm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIGVycm9yLnZhbHVlID0gZXZlbnQ7XG4gICAgfTtcbiAgICByZWNvZ25pdGlvbi5vbmVuZCA9ICgpID0+IHtcbiAgICAgIGlzTGlzdGVuaW5nLnZhbHVlID0gZmFsc2U7XG4gICAgICByZWNvZ25pdGlvbi5sYW5nID0gdG9WYWx1ZShsYW5nKTtcbiAgICB9O1xuICAgIHdhdGNoKGlzTGlzdGVuaW5nLCAoKSA9PiB7XG4gICAgICBpZiAoaXNMaXN0ZW5pbmcudmFsdWUpXG4gICAgICAgIHJlY29nbml0aW9uLnN0YXJ0KCk7XG4gICAgICBlbHNlXG4gICAgICAgIHJlY29nbml0aW9uLnN0b3AoKTtcbiAgICB9KTtcbiAgfVxuICB0cnlPblNjb3BlRGlzcG9zZSgoKSA9PiB7XG4gICAgaXNMaXN0ZW5pbmcudmFsdWUgPSBmYWxzZTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgaXNTdXBwb3J0ZWQsXG4gICAgaXNMaXN0ZW5pbmcsXG4gICAgaXNGaW5hbCxcbiAgICByZWNvZ25pdGlvbixcbiAgICByZXN1bHQsXG4gICAgZXJyb3IsXG4gICAgdG9nZ2xlLFxuICAgIHN0YXJ0LFxuICAgIHN0b3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlU3BlZWNoU3ludGhlc2lzKHRleHQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgcGl0Y2ggPSAxLFxuICAgIHJhdGUgPSAxLFxuICAgIHZvbHVtZSA9IDEsXG4gICAgd2luZG93ID0gZGVmYXVsdFdpbmRvd1xuICB9ID0gb3B0aW9ucztcbiAgY29uc3Qgc3ludGggPSB3aW5kb3cgJiYgd2luZG93LnNwZWVjaFN5bnRoZXNpcztcbiAgY29uc3QgaXNTdXBwb3J0ZWQgPSB1c2VTdXBwb3J0ZWQoKCkgPT4gc3ludGgpO1xuICBjb25zdCBpc1BsYXlpbmcgPSByZWYoZmFsc2UpO1xuICBjb25zdCBzdGF0dXMgPSByZWYoXCJpbml0XCIpO1xuICBjb25zdCBzcG9rZW5UZXh0ID0gdG9SZWYodGV4dCB8fCBcIlwiKTtcbiAgY29uc3QgbGFuZyA9IHRvUmVmKG9wdGlvbnMubGFuZyB8fCBcImVuLVVTXCIpO1xuICBjb25zdCBlcnJvciA9IHNoYWxsb3dSZWYodm9pZCAwKTtcbiAgY29uc3QgdG9nZ2xlID0gKHZhbHVlID0gIWlzUGxheWluZy52YWx1ZSkgPT4ge1xuICAgIGlzUGxheWluZy52YWx1ZSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBiaW5kRXZlbnRzRm9yVXR0ZXJhbmNlID0gKHV0dGVyYW5jZTIpID0+IHtcbiAgICB1dHRlcmFuY2UyLmxhbmcgPSB0b1ZhbHVlKGxhbmcpO1xuICAgIHV0dGVyYW5jZTIudm9pY2UgPSB0b1ZhbHVlKG9wdGlvbnMudm9pY2UpIHx8IG51bGw7XG4gICAgdXR0ZXJhbmNlMi5waXRjaCA9IHRvVmFsdWUocGl0Y2gpO1xuICAgIHV0dGVyYW5jZTIucmF0ZSA9IHRvVmFsdWUocmF0ZSk7XG4gICAgdXR0ZXJhbmNlMi52b2x1bWUgPSB2b2x1bWU7XG4gICAgdXR0ZXJhbmNlMi5vbnN0YXJ0ID0gKCkgPT4ge1xuICAgICAgaXNQbGF5aW5nLnZhbHVlID0gdHJ1ZTtcbiAgICAgIHN0YXR1cy52YWx1ZSA9IFwicGxheVwiO1xuICAgIH07XG4gICAgdXR0ZXJhbmNlMi5vbnBhdXNlID0gKCkgPT4ge1xuICAgICAgaXNQbGF5aW5nLnZhbHVlID0gZmFsc2U7XG4gICAgICBzdGF0dXMudmFsdWUgPSBcInBhdXNlXCI7XG4gICAgfTtcbiAgICB1dHRlcmFuY2UyLm9ucmVzdW1lID0gKCkgPT4ge1xuICAgICAgaXNQbGF5aW5nLnZhbHVlID0gdHJ1ZTtcbiAgICAgIHN0YXR1cy52YWx1ZSA9IFwicGxheVwiO1xuICAgIH07XG4gICAgdXR0ZXJhbmNlMi5vbmVuZCA9ICgpID0+IHtcbiAgICAgIGlzUGxheWluZy52YWx1ZSA9IGZhbHNlO1xuICAgICAgc3RhdHVzLnZhbHVlID0gXCJlbmRcIjtcbiAgICB9O1xuICAgIHV0dGVyYW5jZTIub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgZXJyb3IudmFsdWUgPSBldmVudDtcbiAgICB9O1xuICB9O1xuICBjb25zdCB1dHRlcmFuY2UgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaXNQbGF5aW5nLnZhbHVlID0gZmFsc2U7XG4gICAgc3RhdHVzLnZhbHVlID0gXCJpbml0XCI7XG4gICAgY29uc3QgbmV3VXR0ZXJhbmNlID0gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZShzcG9rZW5UZXh0LnZhbHVlKTtcbiAgICBiaW5kRXZlbnRzRm9yVXR0ZXJhbmNlKG5ld1V0dGVyYW5jZSk7XG4gICAgcmV0dXJuIG5ld1V0dGVyYW5jZTtcbiAgfSk7XG4gIGNvbnN0IHNwZWFrID0gKCkgPT4ge1xuICAgIHN5bnRoLmNhbmNlbCgpO1xuICAgIHV0dGVyYW5jZSAmJiBzeW50aC5zcGVhayh1dHRlcmFuY2UudmFsdWUpO1xuICB9O1xuICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgIHN5bnRoLmNhbmNlbCgpO1xuICAgIGlzUGxheWluZy52YWx1ZSA9IGZhbHNlO1xuICB9O1xuICBpZiAoaXNTdXBwb3J0ZWQudmFsdWUpIHtcbiAgICBiaW5kRXZlbnRzRm9yVXR0ZXJhbmNlKHV0dGVyYW5jZS52YWx1ZSk7XG4gICAgd2F0Y2gobGFuZywgKGxhbmcyKSA9PiB7XG4gICAgICBpZiAodXR0ZXJhbmNlLnZhbHVlICYmICFpc1BsYXlpbmcudmFsdWUpXG4gICAgICAgIHV0dGVyYW5jZS52YWx1ZS5sYW5nID0gbGFuZzI7XG4gICAgfSk7XG4gICAgaWYgKG9wdGlvbnMudm9pY2UpIHtcbiAgICAgIHdhdGNoKG9wdGlvbnMudm9pY2UsICgpID0+IHtcbiAgICAgICAgc3ludGguY2FuY2VsKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgd2F0Y2goaXNQbGF5aW5nLCAoKSA9PiB7XG4gICAgICBpZiAoaXNQbGF5aW5nLnZhbHVlKVxuICAgICAgICBzeW50aC5yZXN1bWUoKTtcbiAgICAgIGVsc2VcbiAgICAgICAgc3ludGgucGF1c2UoKTtcbiAgICB9KTtcbiAgfVxuICB0cnlPblNjb3BlRGlzcG9zZSgoKSA9PiB7XG4gICAgaXNQbGF5aW5nLnZhbHVlID0gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGlzU3VwcG9ydGVkLFxuICAgIGlzUGxheWluZyxcbiAgICBzdGF0dXMsXG4gICAgdXR0ZXJhbmNlLFxuICAgIGVycm9yLFxuICAgIHN0b3AsXG4gICAgdG9nZ2xlLFxuICAgIHNwZWFrXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVN0ZXBwZXIoc3RlcHMsIGluaXRpYWxTdGVwKSB7XG4gIGNvbnN0IHN0ZXBzUmVmID0gcmVmKHN0ZXBzKTtcbiAgY29uc3Qgc3RlcE5hbWVzID0gY29tcHV0ZWQoKCkgPT4gQXJyYXkuaXNBcnJheShzdGVwc1JlZi52YWx1ZSkgPyBzdGVwc1JlZi52YWx1ZSA6IE9iamVjdC5rZXlzKHN0ZXBzUmVmLnZhbHVlKSk7XG4gIGNvbnN0IGluZGV4ID0gcmVmKHN0ZXBOYW1lcy52YWx1ZS5pbmRleE9mKGluaXRpYWxTdGVwICE9IG51bGwgPyBpbml0aWFsU3RlcCA6IHN0ZXBOYW1lcy52YWx1ZVswXSkpO1xuICBjb25zdCBjdXJyZW50ID0gY29tcHV0ZWQoKCkgPT4gYXQoaW5kZXgudmFsdWUpKTtcbiAgY29uc3QgaXNGaXJzdCA9IGNvbXB1dGVkKCgpID0+IGluZGV4LnZhbHVlID09PSAwKTtcbiAgY29uc3QgaXNMYXN0ID0gY29tcHV0ZWQoKCkgPT4gaW5kZXgudmFsdWUgPT09IHN0ZXBOYW1lcy52YWx1ZS5sZW5ndGggLSAxKTtcbiAgY29uc3QgbmV4dCA9IGNvbXB1dGVkKCgpID0+IHN0ZXBOYW1lcy52YWx1ZVtpbmRleC52YWx1ZSArIDFdKTtcbiAgY29uc3QgcHJldmlvdXMgPSBjb21wdXRlZCgoKSA9PiBzdGVwTmFtZXMudmFsdWVbaW5kZXgudmFsdWUgLSAxXSk7XG4gIGZ1bmN0aW9uIGF0KGluZGV4Mikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN0ZXBzUmVmLnZhbHVlKSlcbiAgICAgIHJldHVybiBzdGVwc1JlZi52YWx1ZVtpbmRleDJdO1xuICAgIHJldHVybiBzdGVwc1JlZi52YWx1ZVtzdGVwTmFtZXMudmFsdWVbaW5kZXgyXV07XG4gIH1cbiAgZnVuY3Rpb24gZ2V0KHN0ZXApIHtcbiAgICBpZiAoIXN0ZXBOYW1lcy52YWx1ZS5pbmNsdWRlcyhzdGVwKSlcbiAgICAgIHJldHVybjtcbiAgICByZXR1cm4gYXQoc3RlcE5hbWVzLnZhbHVlLmluZGV4T2Yoc3RlcCkpO1xuICB9XG4gIGZ1bmN0aW9uIGdvVG8oc3RlcCkge1xuICAgIGlmIChzdGVwTmFtZXMudmFsdWUuaW5jbHVkZXMoc3RlcCkpXG4gICAgICBpbmRleC52YWx1ZSA9IHN0ZXBOYW1lcy52YWx1ZS5pbmRleE9mKHN0ZXApO1xuICB9XG4gIGZ1bmN0aW9uIGdvVG9OZXh0KCkge1xuICAgIGlmIChpc0xhc3QudmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgaW5kZXgudmFsdWUrKztcbiAgfVxuICBmdW5jdGlvbiBnb1RvUHJldmlvdXMoKSB7XG4gICAgaWYgKGlzRmlyc3QudmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgaW5kZXgudmFsdWUtLTtcbiAgfVxuICBmdW5jdGlvbiBnb0JhY2tUbyhzdGVwKSB7XG4gICAgaWYgKGlzQWZ0ZXIoc3RlcCkpXG4gICAgICBnb1RvKHN0ZXApO1xuICB9XG4gIGZ1bmN0aW9uIGlzTmV4dChzdGVwKSB7XG4gICAgcmV0dXJuIHN0ZXBOYW1lcy52YWx1ZS5pbmRleE9mKHN0ZXApID09PSBpbmRleC52YWx1ZSArIDE7XG4gIH1cbiAgZnVuY3Rpb24gaXNQcmV2aW91cyhzdGVwKSB7XG4gICAgcmV0dXJuIHN0ZXBOYW1lcy52YWx1ZS5pbmRleE9mKHN0ZXApID09PSBpbmRleC52YWx1ZSAtIDE7XG4gIH1cbiAgZnVuY3Rpb24gaXNDdXJyZW50KHN0ZXApIHtcbiAgICByZXR1cm4gc3RlcE5hbWVzLnZhbHVlLmluZGV4T2Yoc3RlcCkgPT09IGluZGV4LnZhbHVlO1xuICB9XG4gIGZ1bmN0aW9uIGlzQmVmb3JlKHN0ZXApIHtcbiAgICByZXR1cm4gaW5kZXgudmFsdWUgPCBzdGVwTmFtZXMudmFsdWUuaW5kZXhPZihzdGVwKTtcbiAgfVxuICBmdW5jdGlvbiBpc0FmdGVyKHN0ZXApIHtcbiAgICByZXR1cm4gaW5kZXgudmFsdWUgPiBzdGVwTmFtZXMudmFsdWUuaW5kZXhPZihzdGVwKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN0ZXBzOiBzdGVwc1JlZixcbiAgICBzdGVwTmFtZXMsXG4gICAgaW5kZXgsXG4gICAgY3VycmVudCxcbiAgICBuZXh0LFxuICAgIHByZXZpb3VzLFxuICAgIGlzRmlyc3QsXG4gICAgaXNMYXN0LFxuICAgIGF0LFxuICAgIGdldCxcbiAgICBnb1RvLFxuICAgIGdvVG9OZXh0LFxuICAgIGdvVG9QcmV2aW91cyxcbiAgICBnb0JhY2tUbyxcbiAgICBpc05leHQsXG4gICAgaXNQcmV2aW91cyxcbiAgICBpc0N1cnJlbnQsXG4gICAgaXNCZWZvcmUsXG4gICAgaXNBZnRlclxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VTdG9yYWdlQXN5bmMoa2V5LCBpbml0aWFsVmFsdWUsIHN0b3JhZ2UsIG9wdGlvbnMgPSB7fSkge1xuICB2YXIgX2E7XG4gIGNvbnN0IHtcbiAgICBmbHVzaCA9IFwicHJlXCIsXG4gICAgZGVlcCA9IHRydWUsXG4gICAgbGlzdGVuVG9TdG9yYWdlQ2hhbmdlcyA9IHRydWUsXG4gICAgd3JpdGVEZWZhdWx0cyA9IHRydWUsXG4gICAgbWVyZ2VEZWZhdWx0cyA9IGZhbHNlLFxuICAgIHNoYWxsb3csXG4gICAgd2luZG93ID0gZGVmYXVsdFdpbmRvdyxcbiAgICBldmVudEZpbHRlcixcbiAgICBvbkVycm9yID0gKGUpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcmF3SW5pdCA9IHRvVmFsdWUoaW5pdGlhbFZhbHVlKTtcbiAgY29uc3QgdHlwZSA9IGd1ZXNzU2VyaWFsaXplclR5cGUocmF3SW5pdCk7XG4gIGNvbnN0IGRhdGEgPSAoc2hhbGxvdyA/IHNoYWxsb3dSZWYgOiByZWYpKGluaXRpYWxWYWx1ZSk7XG4gIGNvbnN0IHNlcmlhbGl6ZXIgPSAoX2EgPSBvcHRpb25zLnNlcmlhbGl6ZXIpICE9IG51bGwgPyBfYSA6IFN0b3JhZ2VTZXJpYWxpemVyc1t0eXBlXTtcbiAgaWYgKCFzdG9yYWdlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSBnZXRTU1JIYW5kbGVyKFwiZ2V0RGVmYXVsdFN0b3JhZ2VBc3luY1wiLCAoKSA9PiB7XG4gICAgICAgIHZhciBfYTI7XG4gICAgICAgIHJldHVybiAoX2EyID0gZGVmYXVsdFdpbmRvdykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5sb2NhbFN0b3JhZ2U7XG4gICAgICB9KSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG9uRXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIHJlYWQoZXZlbnQpIHtcbiAgICBpZiAoIXN0b3JhZ2UgfHwgZXZlbnQgJiYgZXZlbnQua2V5ICE9PSBrZXkpXG4gICAgICByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJhd1ZhbHVlID0gZXZlbnQgPyBldmVudC5uZXdWYWx1ZSA6IGF3YWl0IHN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgaWYgKHJhd1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGF0YS52YWx1ZSA9IHJhd0luaXQ7XG4gICAgICAgIGlmICh3cml0ZURlZmF1bHRzICYmIHJhd0luaXQgIT09IG51bGwpXG4gICAgICAgICAgYXdhaXQgc3RvcmFnZS5zZXRJdGVtKGtleSwgYXdhaXQgc2VyaWFsaXplci53cml0ZShyYXdJbml0KSk7XG4gICAgICB9IGVsc2UgaWYgKG1lcmdlRGVmYXVsdHMpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBzZXJpYWxpemVyLnJlYWQocmF3VmFsdWUpO1xuICAgICAgICBpZiAodHlwZW9mIG1lcmdlRGVmYXVsdHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbWVyZ2VEZWZhdWx0cyh2YWx1ZSwgcmF3SW5pdCk7XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKVxuICAgICAgICAgIGRhdGEudmFsdWUgPSB7IC4uLnJhd0luaXQsIC4uLnZhbHVlIH07XG4gICAgICAgIGVsc2UgZGF0YS52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YS52YWx1ZSA9IGF3YWl0IHNlcmlhbGl6ZXIucmVhZChyYXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgb25FcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgcmVhZCgpO1xuICBpZiAod2luZG93ICYmIGxpc3RlblRvU3RvcmFnZUNoYW5nZXMpXG4gICAgdXNlRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwic3RvcmFnZVwiLCAoZSkgPT4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiByZWFkKGUpKSk7XG4gIGlmIChzdG9yYWdlKSB7XG4gICAgd2F0Y2hXaXRoRmlsdGVyKFxuICAgICAgZGF0YSxcbiAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoZGF0YS52YWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgYXdhaXQgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgYXdhaXQgc3RvcmFnZS5zZXRJdGVtKGtleSwgYXdhaXQgc2VyaWFsaXplci53cml0ZShkYXRhLnZhbHVlKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBvbkVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmbHVzaCxcbiAgICAgICAgZGVlcCxcbiAgICAgICAgZXZlbnRGaWx0ZXJcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5sZXQgX2lkID0gMDtcbmZ1bmN0aW9uIHVzZVN0eWxlVGFnKGNzcywgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGlzTG9hZGVkID0gcmVmKGZhbHNlKTtcbiAgY29uc3Qge1xuICAgIGRvY3VtZW50ID0gZGVmYXVsdERvY3VtZW50LFxuICAgIGltbWVkaWF0ZSA9IHRydWUsXG4gICAgbWFudWFsID0gZmFsc2UsXG4gICAgaWQgPSBgdnVldXNlX3N0eWxldGFnXyR7KytfaWR9YFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgY3NzUmVmID0gcmVmKGNzcyk7XG4gIGxldCBzdG9wID0gKCkgPT4ge1xuICB9O1xuICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgIGlmICghZG9jdW1lbnQpXG4gICAgICByZXR1cm47XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIGlmICghZWwuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGVsLmlkID0gaWQ7XG4gICAgICBpZiAob3B0aW9ucy5tZWRpYSlcbiAgICAgICAgZWwubWVkaWEgPSBvcHRpb25zLm1lZGlhO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuICAgIGlmIChpc0xvYWRlZC52YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBzdG9wID0gd2F0Y2goXG4gICAgICBjc3NSZWYsXG4gICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICB7IGltbWVkaWF0ZTogdHJ1ZSB9XG4gICAgKTtcbiAgICBpc0xvYWRlZC52YWx1ZSA9IHRydWU7XG4gIH07XG4gIGNvbnN0IHVubG9hZCA9ICgpID0+IHtcbiAgICBpZiAoIWRvY3VtZW50IHx8ICFpc0xvYWRlZC52YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBzdG9wKCk7XG4gICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpO1xuICAgIGlzTG9hZGVkLnZhbHVlID0gZmFsc2U7XG4gIH07XG4gIGlmIChpbW1lZGlhdGUgJiYgIW1hbnVhbClcbiAgICB0cnlPbk1vdW50ZWQobG9hZCk7XG4gIGlmICghbWFudWFsKVxuICAgIHRyeU9uU2NvcGVEaXNwb3NlKHVubG9hZCk7XG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgY3NzOiBjc3NSZWYsXG4gICAgdW5sb2FkLFxuICAgIGxvYWQsXG4gICAgaXNMb2FkZWQ6IHJlYWRvbmx5KGlzTG9hZGVkKVxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VTd2lwZSh0YXJnZXQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgdGhyZXNob2xkID0gNTAsXG4gICAgb25Td2lwZSxcbiAgICBvblN3aXBlRW5kLFxuICAgIG9uU3dpcGVTdGFydCxcbiAgICBwYXNzaXZlID0gdHJ1ZSxcbiAgICB3aW5kb3cgPSBkZWZhdWx0V2luZG93XG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBjb29yZHNTdGFydCA9IHJlYWN0aXZlKHsgeDogMCwgeTogMCB9KTtcbiAgY29uc3QgY29vcmRzRW5kID0gcmVhY3RpdmUoeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBkaWZmWCA9IGNvbXB1dGVkKCgpID0+IGNvb3Jkc1N0YXJ0LnggLSBjb29yZHNFbmQueCk7XG4gIGNvbnN0IGRpZmZZID0gY29tcHV0ZWQoKCkgPT4gY29vcmRzU3RhcnQueSAtIGNvb3Jkc0VuZC55KTtcbiAgY29uc3QgeyBtYXgsIGFicyB9ID0gTWF0aDtcbiAgY29uc3QgaXNUaHJlc2hvbGRFeGNlZWRlZCA9IGNvbXB1dGVkKCgpID0+IG1heChhYnMoZGlmZlgudmFsdWUpLCBhYnMoZGlmZlkudmFsdWUpKSA+PSB0aHJlc2hvbGQpO1xuICBjb25zdCBpc1N3aXBpbmcgPSByZWYoZmFsc2UpO1xuICBjb25zdCBkaXJlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKCFpc1RocmVzaG9sZEV4Y2VlZGVkLnZhbHVlKVxuICAgICAgcmV0dXJuIFwibm9uZVwiO1xuICAgIGlmIChhYnMoZGlmZlgudmFsdWUpID4gYWJzKGRpZmZZLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIGRpZmZYLnZhbHVlID4gMCA/IFwibGVmdFwiIDogXCJyaWdodFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGlmZlkudmFsdWUgPiAwID8gXCJ1cFwiIDogXCJkb3duXCI7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgZ2V0VG91Y2hFdmVudENvb3JkcyA9IChlKSA9PiBbZS50b3VjaGVzWzBdLmNsaWVudFgsIGUudG91Y2hlc1swXS5jbGllbnRZXTtcbiAgY29uc3QgdXBkYXRlQ29vcmRzU3RhcnQgPSAoeCwgeSkgPT4ge1xuICAgIGNvb3Jkc1N0YXJ0LnggPSB4O1xuICAgIGNvb3Jkc1N0YXJ0LnkgPSB5O1xuICB9O1xuICBjb25zdCB1cGRhdGVDb29yZHNFbmQgPSAoeCwgeSkgPT4ge1xuICAgIGNvb3Jkc0VuZC54ID0geDtcbiAgICBjb29yZHNFbmQueSA9IHk7XG4gIH07XG4gIGxldCBsaXN0ZW5lck9wdGlvbnM7XG4gIGNvbnN0IGlzUGFzc2l2ZUV2ZW50U3VwcG9ydGVkID0gY2hlY2tQYXNzaXZlRXZlbnRTdXBwb3J0KHdpbmRvdyA9PSBudWxsID8gdm9pZCAwIDogd2luZG93LmRvY3VtZW50KTtcbiAgaWYgKCFwYXNzaXZlKVxuICAgIGxpc3RlbmVyT3B0aW9ucyA9IGlzUGFzc2l2ZUV2ZW50U3VwcG9ydGVkID8geyBwYXNzaXZlOiBmYWxzZSwgY2FwdHVyZTogdHJ1ZSB9IDogeyBjYXB0dXJlOiB0cnVlIH07XG4gIGVsc2VcbiAgICBsaXN0ZW5lck9wdGlvbnMgPSBpc1Bhc3NpdmVFdmVudFN1cHBvcnRlZCA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogeyBjYXB0dXJlOiBmYWxzZSB9O1xuICBjb25zdCBvblRvdWNoRW5kID0gKGUpID0+IHtcbiAgICBpZiAoaXNTd2lwaW5nLnZhbHVlKVxuICAgICAgb25Td2lwZUVuZCA9PSBudWxsID8gdm9pZCAwIDogb25Td2lwZUVuZChlLCBkaXJlY3Rpb24udmFsdWUpO1xuICAgIGlzU3dpcGluZy52YWx1ZSA9IGZhbHNlO1xuICB9O1xuICBjb25zdCBzdG9wcyA9IFtcbiAgICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgXCJ0b3VjaHN0YXJ0XCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCAhPT0gMSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaWYgKGxpc3RlbmVyT3B0aW9ucy5jYXB0dXJlICYmICFsaXN0ZW5lck9wdGlvbnMucGFzc2l2ZSlcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgW3gsIHldID0gZ2V0VG91Y2hFdmVudENvb3JkcyhlKTtcbiAgICAgIHVwZGF0ZUNvb3Jkc1N0YXJ0KHgsIHkpO1xuICAgICAgdXBkYXRlQ29vcmRzRW5kKHgsIHkpO1xuICAgICAgb25Td2lwZVN0YXJ0ID09IG51bGwgPyB2b2lkIDAgOiBvblN3aXBlU3RhcnQoZSk7XG4gICAgfSwgbGlzdGVuZXJPcHRpb25zKSxcbiAgICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgXCJ0b3VjaG1vdmVcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoICE9PSAxKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCBbeCwgeV0gPSBnZXRUb3VjaEV2ZW50Q29vcmRzKGUpO1xuICAgICAgdXBkYXRlQ29vcmRzRW5kKHgsIHkpO1xuICAgICAgaWYgKCFpc1N3aXBpbmcudmFsdWUgJiYgaXNUaHJlc2hvbGRFeGNlZWRlZC52YWx1ZSlcbiAgICAgICAgaXNTd2lwaW5nLnZhbHVlID0gdHJ1ZTtcbiAgICAgIGlmIChpc1N3aXBpbmcudmFsdWUpXG4gICAgICAgIG9uU3dpcGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9uU3dpcGUoZSk7XG4gICAgfSwgbGlzdGVuZXJPcHRpb25zKSxcbiAgICB1c2VFdmVudExpc3RlbmVyKHRhcmdldCwgW1widG91Y2hlbmRcIiwgXCJ0b3VjaGNhbmNlbFwiXSwgb25Ub3VjaEVuZCwgbGlzdGVuZXJPcHRpb25zKVxuICBdO1xuICBjb25zdCBzdG9wID0gKCkgPT4gc3RvcHMuZm9yRWFjaCgocykgPT4gcygpKTtcbiAgcmV0dXJuIHtcbiAgICBpc1Bhc3NpdmVFdmVudFN1cHBvcnRlZCxcbiAgICBpc1N3aXBpbmcsXG4gICAgZGlyZWN0aW9uLFxuICAgIGNvb3Jkc1N0YXJ0LFxuICAgIGNvb3Jkc0VuZCxcbiAgICBsZW5ndGhYOiBkaWZmWCxcbiAgICBsZW5ndGhZOiBkaWZmWSxcbiAgICBzdG9wXG4gIH07XG59XG5mdW5jdGlvbiBjaGVja1Bhc3NpdmVFdmVudFN1cHBvcnQoZG9jdW1lbnQpIHtcbiAgaWYgKCFkb2N1bWVudClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGxldCBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbiAgY29uc3Qgb3B0aW9uc0Jsb2NrID0ge1xuICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ4XCIsIG5vb3AsIG9wdGlvbnNCbG9jayk7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ4XCIsIG5vb3ApO1xuICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xufVxuXG5mdW5jdGlvbiB1c2VUZW1wbGF0ZVJlZnNMaXN0KCkge1xuICBjb25zdCByZWZzID0gcmVmKFtdKTtcbiAgcmVmcy52YWx1ZS5zZXQgPSAoZWwpID0+IHtcbiAgICBpZiAoZWwpXG4gICAgICByZWZzLnZhbHVlLnB1c2goZWwpO1xuICB9O1xuICBvbkJlZm9yZVVwZGF0ZSgoKSA9PiB7XG4gICAgcmVmcy52YWx1ZS5sZW5ndGggPSAwO1xuICB9KTtcbiAgcmV0dXJuIHJlZnM7XG59XG5cbmZ1bmN0aW9uIHVzZVRleHREaXJlY3Rpb24ob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBkb2N1bWVudCA9IGRlZmF1bHREb2N1bWVudCxcbiAgICBzZWxlY3RvciA9IFwiaHRtbFwiLFxuICAgIG9ic2VydmUgPSBmYWxzZSxcbiAgICBpbml0aWFsVmFsdWUgPSBcImx0clwiXG4gIH0gPSBvcHRpb25zO1xuICBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiAoX2IgPSAoX2EgPSBkb2N1bWVudCA9PSBudWxsID8gdm9pZCAwIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpID09IG51bGwgPyB2b2lkIDAgOiBfYS5nZXRBdHRyaWJ1dGUoXCJkaXJcIikpICE9IG51bGwgPyBfYiA6IGluaXRpYWxWYWx1ZTtcbiAgfVxuICBjb25zdCBkaXIgPSByZWYoZ2V0VmFsdWUoKSk7XG4gIHRyeU9uTW91bnRlZCgoKSA9PiBkaXIudmFsdWUgPSBnZXRWYWx1ZSgpKTtcbiAgaWYgKG9ic2VydmUgJiYgZG9jdW1lbnQpIHtcbiAgICB1c2VNdXRhdGlvbk9ic2VydmVyKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAoKSA9PiBkaXIudmFsdWUgPSBnZXRWYWx1ZSgpLFxuICAgICAgeyBhdHRyaWJ1dGVzOiB0cnVlIH1cbiAgICApO1xuICB9XG4gIHJldHVybiBjb21wdXRlZCh7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGRpci52YWx1ZTtcbiAgICB9LFxuICAgIHNldCh2KSB7XG4gICAgICB2YXIgX2EsIF9iO1xuICAgICAgZGlyLnZhbHVlID0gdjtcbiAgICAgIGlmICghZG9jdW1lbnQpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmIChkaXIudmFsdWUpXG4gICAgICAgIChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSA9PSBudWxsID8gdm9pZCAwIDogX2Euc2V0QXR0cmlidXRlKFwiZGlyXCIsIGRpci52YWx1ZSk7XG4gICAgICBlbHNlXG4gICAgICAgIChfYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSA9PSBudWxsID8gdm9pZCAwIDogX2IucmVtb3ZlQXR0cmlidXRlKFwiZGlyXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmdlc0Zyb21TZWxlY3Rpb24oc2VsZWN0aW9uKSB7XG4gIHZhciBfYTtcbiAgY29uc3QgcmFuZ2VDb3VudCA9IChfYSA9IHNlbGVjdGlvbi5yYW5nZUNvdW50KSAhPSBudWxsID8gX2EgOiAwO1xuICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogcmFuZ2VDb3VudCB9LCAoXywgaSkgPT4gc2VsZWN0aW9uLmdldFJhbmdlQXQoaSkpO1xufVxuZnVuY3Rpb24gdXNlVGV4dFNlbGVjdGlvbihvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIHdpbmRvdyA9IGRlZmF1bHRXaW5kb3dcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHNlbGVjdGlvbiA9IHJlZihudWxsKTtcbiAgY29uc3QgdGV4dCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiAoX2IgPSAoX2EgPSBzZWxlY3Rpb24udmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSAhPSBudWxsID8gX2IgOiBcIlwiO1xuICB9KTtcbiAgY29uc3QgcmFuZ2VzID0gY29tcHV0ZWQoKCkgPT4gc2VsZWN0aW9uLnZhbHVlID8gZ2V0UmFuZ2VzRnJvbVNlbGVjdGlvbihzZWxlY3Rpb24udmFsdWUpIDogW10pO1xuICBjb25zdCByZWN0cyA9IGNvbXB1dGVkKCgpID0+IHJhbmdlcy52YWx1ZS5tYXAoKHJhbmdlKSA9PiByYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkpO1xuICBmdW5jdGlvbiBvblNlbGVjdGlvbkNoYW5nZSgpIHtcbiAgICBzZWxlY3Rpb24udmFsdWUgPSBudWxsO1xuICAgIGlmICh3aW5kb3cpXG4gICAgICBzZWxlY3Rpb24udmFsdWUgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gIH1cbiAgaWYgKHdpbmRvdylcbiAgICB1c2VFdmVudExpc3RlbmVyKHdpbmRvdy5kb2N1bWVudCwgXCJzZWxlY3Rpb25jaGFuZ2VcIiwgb25TZWxlY3Rpb25DaGFuZ2UpO1xuICByZXR1cm4ge1xuICAgIHRleHQsXG4gICAgcmVjdHMsXG4gICAgcmFuZ2VzLFxuICAgIHNlbGVjdGlvblxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VUZXh0YXJlYUF1dG9zaXplKG9wdGlvbnMpIHtcbiAgdmFyIF9hO1xuICBjb25zdCB0ZXh0YXJlYSA9IHJlZihvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmVsZW1lbnQpO1xuICBjb25zdCBpbnB1dCA9IHJlZihvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmlucHV0KTtcbiAgY29uc3Qgc3R5bGVQcm9wID0gKF9hID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5zdHlsZVByb3ApICE9IG51bGwgPyBfYSA6IFwiaGVpZ2h0XCI7XG4gIGNvbnN0IHRleHRhcmVhU2Nyb2xsSGVpZ2h0ID0gcmVmKDEpO1xuICBmdW5jdGlvbiB0cmlnZ2VyUmVzaXplKCkge1xuICAgIHZhciBfYTI7XG4gICAgaWYgKCF0ZXh0YXJlYS52YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBsZXQgaGVpZ2h0ID0gXCJcIjtcbiAgICB0ZXh0YXJlYS52YWx1ZS5zdHlsZVtzdHlsZVByb3BdID0gXCIxcHhcIjtcbiAgICB0ZXh0YXJlYVNjcm9sbEhlaWdodC52YWx1ZSA9IChfYTIgPSB0ZXh0YXJlYS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5zY3JvbGxIZWlnaHQ7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuc3R5bGVUYXJnZXQpXG4gICAgICB0b1ZhbHVlKG9wdGlvbnMuc3R5bGVUYXJnZXQpLnN0eWxlW3N0eWxlUHJvcF0gPSBgJHt0ZXh0YXJlYVNjcm9sbEhlaWdodC52YWx1ZX1weGA7XG4gICAgZWxzZVxuICAgICAgaGVpZ2h0ID0gYCR7dGV4dGFyZWFTY3JvbGxIZWlnaHQudmFsdWV9cHhgO1xuICAgIHRleHRhcmVhLnZhbHVlLnN0eWxlW3N0eWxlUHJvcF0gPSBoZWlnaHQ7XG4gIH1cbiAgd2F0Y2goW2lucHV0LCB0ZXh0YXJlYV0sICgpID0+IG5leHRUaWNrKHRyaWdnZXJSZXNpemUpLCB7IGltbWVkaWF0ZTogdHJ1ZSB9KTtcbiAgd2F0Y2godGV4dGFyZWFTY3JvbGxIZWlnaHQsICgpID0+IHtcbiAgICB2YXIgX2EyO1xuICAgIHJldHVybiAoX2EyID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5vblJlc2l6ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5jYWxsKG9wdGlvbnMpO1xuICB9KTtcbiAgdXNlUmVzaXplT2JzZXJ2ZXIodGV4dGFyZWEsICgpID0+IHRyaWdnZXJSZXNpemUoKSk7XG4gIGlmIChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLndhdGNoKVxuICAgIHdhdGNoKG9wdGlvbnMud2F0Y2gsIHRyaWdnZXJSZXNpemUsIHsgaW1tZWRpYXRlOiB0cnVlLCBkZWVwOiB0cnVlIH0pO1xuICByZXR1cm4ge1xuICAgIHRleHRhcmVhLFxuICAgIGlucHV0LFxuICAgIHRyaWdnZXJSZXNpemVcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlVGhyb3R0bGVkUmVmSGlzdG9yeShzb3VyY2UsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IHRocm90dGxlID0gMjAwLCB0cmFpbGluZyA9IHRydWUgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGZpbHRlciA9IHRocm90dGxlRmlsdGVyKHRocm90dGxlLCB0cmFpbGluZyk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VSZWZIaXN0b3J5KHNvdXJjZSwgeyAuLi5vcHRpb25zLCBldmVudEZpbHRlcjogZmlsdGVyIH0pO1xuICByZXR1cm4ge1xuICAgIC4uLmhpc3RvcnlcbiAgfTtcbn1cblxuY29uc3QgREVGQVVMVF9VTklUUyA9IFtcbiAgeyBtYXg6IDZlNCwgdmFsdWU6IDFlMywgbmFtZTogXCJzZWNvbmRcIiB9LFxuICB7IG1heDogMjc2ZTQsIHZhbHVlOiA2ZTQsIG5hbWU6IFwibWludXRlXCIgfSxcbiAgeyBtYXg6IDcyZTYsIHZhbHVlOiAzNmU1LCBuYW1lOiBcImhvdXJcIiB9LFxuICB7IG1heDogNTE4NGU1LCB2YWx1ZTogODY0ZTUsIG5hbWU6IFwiZGF5XCIgfSxcbiAgeyBtYXg6IDI0MTkyZTUsIHZhbHVlOiA2MDQ4ZTUsIG5hbWU6IFwid2Vla1wiIH0sXG4gIHsgbWF4OiAyODUxMmU2LCB2YWx1ZTogMjU5MmU2LCBuYW1lOiBcIm1vbnRoXCIgfSxcbiAgeyBtYXg6IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgdmFsdWU6IDMxNTM2ZTYsIG5hbWU6IFwieWVhclwiIH1cbl07XG5jb25zdCBERUZBVUxUX01FU1NBR0VTID0ge1xuICBqdXN0Tm93OiBcImp1c3Qgbm93XCIsXG4gIHBhc3Q6IChuKSA9PiBuLm1hdGNoKC9cXGQvKSA/IGAke259IGFnb2AgOiBuLFxuICBmdXR1cmU6IChuKSA9PiBuLm1hdGNoKC9cXGQvKSA/IGBpbiAke259YCA6IG4sXG4gIG1vbnRoOiAobiwgcGFzdCkgPT4gbiA9PT0gMSA/IHBhc3QgPyBcImxhc3QgbW9udGhcIiA6IFwibmV4dCBtb250aFwiIDogYCR7bn0gbW9udGgke24gPiAxID8gXCJzXCIgOiBcIlwifWAsXG4gIHllYXI6IChuLCBwYXN0KSA9PiBuID09PSAxID8gcGFzdCA/IFwibGFzdCB5ZWFyXCIgOiBcIm5leHQgeWVhclwiIDogYCR7bn0geWVhciR7biA+IDEgPyBcInNcIiA6IFwiXCJ9YCxcbiAgZGF5OiAobiwgcGFzdCkgPT4gbiA9PT0gMSA/IHBhc3QgPyBcInllc3RlcmRheVwiIDogXCJ0b21vcnJvd1wiIDogYCR7bn0gZGF5JHtuID4gMSA/IFwic1wiIDogXCJcIn1gLFxuICB3ZWVrOiAobiwgcGFzdCkgPT4gbiA9PT0gMSA/IHBhc3QgPyBcImxhc3Qgd2Vla1wiIDogXCJuZXh0IHdlZWtcIiA6IGAke259IHdlZWske24gPiAxID8gXCJzXCIgOiBcIlwifWAsXG4gIGhvdXI6IChuKSA9PiBgJHtufSBob3VyJHtuID4gMSA/IFwic1wiIDogXCJcIn1gLFxuICBtaW51dGU6IChuKSA9PiBgJHtufSBtaW51dGUke24gPiAxID8gXCJzXCIgOiBcIlwifWAsXG4gIHNlY29uZDogKG4pID0+IGAke259IHNlY29uZCR7biA+IDEgPyBcInNcIiA6IFwiXCJ9YCxcbiAgaW52YWxpZDogXCJcIlxufTtcbmZ1bmN0aW9uIERFRkFVTFRfRk9STUFUVEVSKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG59XG5mdW5jdGlvbiB1c2VUaW1lQWdvKHRpbWUsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgY29udHJvbHM6IGV4cG9zZUNvbnRyb2xzID0gZmFsc2UsXG4gICAgdXBkYXRlSW50ZXJ2YWwgPSAzZTRcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHsgbm93LCAuLi5jb250cm9scyB9ID0gdXNlTm93KHsgaW50ZXJ2YWw6IHVwZGF0ZUludGVydmFsLCBjb250cm9sczogdHJ1ZSB9KTtcbiAgY29uc3QgdGltZUFnbyA9IGNvbXB1dGVkKCgpID0+IGZvcm1hdFRpbWVBZ28obmV3IERhdGUodG9WYWx1ZSh0aW1lKSksIG9wdGlvbnMsIHRvVmFsdWUobm93KSkpO1xuICBpZiAoZXhwb3NlQ29udHJvbHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGltZUFnbyxcbiAgICAgIC4uLmNvbnRyb2xzXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGltZUFnbztcbiAgfVxufVxuZnVuY3Rpb24gZm9ybWF0VGltZUFnbyhmcm9tLCBvcHRpb25zID0ge30sIG5vdyA9IERhdGUubm93KCkpIHtcbiAgdmFyIF9hO1xuICBjb25zdCB7XG4gICAgbWF4LFxuICAgIG1lc3NhZ2VzID0gREVGQVVMVF9NRVNTQUdFUyxcbiAgICBmdWxsRGF0ZUZvcm1hdHRlciA9IERFRkFVTFRfRk9STUFUVEVSLFxuICAgIHVuaXRzID0gREVGQVVMVF9VTklUUyxcbiAgICBzaG93U2Vjb25kID0gZmFsc2UsXG4gICAgcm91bmRpbmcgPSBcInJvdW5kXCJcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHJvdW5kRm4gPSB0eXBlb2Ygcm91bmRpbmcgPT09IFwibnVtYmVyXCIgPyAobikgPT4gK24udG9GaXhlZChyb3VuZGluZykgOiBNYXRoW3JvdW5kaW5nXTtcbiAgY29uc3QgZGlmZiA9ICtub3cgLSArZnJvbTtcbiAgY29uc3QgYWJzRGlmZiA9IE1hdGguYWJzKGRpZmYpO1xuICBmdW5jdGlvbiBnZXRWYWx1ZShkaWZmMiwgdW5pdCkge1xuICAgIHJldHVybiByb3VuZEZuKE1hdGguYWJzKGRpZmYyKSAvIHVuaXQudmFsdWUpO1xuICB9XG4gIGZ1bmN0aW9uIGZvcm1hdChkaWZmMiwgdW5pdCkge1xuICAgIGNvbnN0IHZhbCA9IGdldFZhbHVlKGRpZmYyLCB1bml0KTtcbiAgICBjb25zdCBwYXN0ID0gZGlmZjIgPiAwO1xuICAgIGNvbnN0IHN0ciA9IGFwcGx5Rm9ybWF0KHVuaXQubmFtZSwgdmFsLCBwYXN0KTtcbiAgICByZXR1cm4gYXBwbHlGb3JtYXQocGFzdCA/IFwicGFzdFwiIDogXCJmdXR1cmVcIiwgc3RyLCBwYXN0KTtcbiAgfVxuICBmdW5jdGlvbiBhcHBseUZvcm1hdChuYW1lLCB2YWwsIGlzUGFzdCkge1xuICAgIGNvbnN0IGZvcm1hdHRlciA9IG1lc3NhZ2VzW25hbWVdO1xuICAgIGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHZhbCwgaXNQYXN0KTtcbiAgICByZXR1cm4gZm9ybWF0dGVyLnJlcGxhY2UoXCJ7MH1cIiwgdmFsLnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChhYnNEaWZmIDwgNmU0ICYmICFzaG93U2Vjb25kKVxuICAgIHJldHVybiBtZXNzYWdlcy5qdXN0Tm93O1xuICBpZiAodHlwZW9mIG1heCA9PT0gXCJudW1iZXJcIiAmJiBhYnNEaWZmID4gbWF4KVxuICAgIHJldHVybiBmdWxsRGF0ZUZvcm1hdHRlcihuZXcgRGF0ZShmcm9tKSk7XG4gIGlmICh0eXBlb2YgbWF4ID09PSBcInN0cmluZ1wiKSB7XG4gICAgY29uc3QgdW5pdE1heCA9IChfYSA9IHVuaXRzLmZpbmQoKGkpID0+IGkubmFtZSA9PT0gbWF4KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLm1heDtcbiAgICBpZiAodW5pdE1heCAmJiBhYnNEaWZmID4gdW5pdE1heClcbiAgICAgIHJldHVybiBmdWxsRGF0ZUZvcm1hdHRlcihuZXcgRGF0ZShmcm9tKSk7XG4gIH1cbiAgZm9yIChjb25zdCBbaWR4LCB1bml0XSBvZiB1bml0cy5lbnRyaWVzKCkpIHtcbiAgICBjb25zdCB2YWwgPSBnZXRWYWx1ZShkaWZmLCB1bml0KTtcbiAgICBpZiAodmFsIDw9IDAgJiYgdW5pdHNbaWR4IC0gMV0pXG4gICAgICByZXR1cm4gZm9ybWF0KGRpZmYsIHVuaXRzW2lkeCAtIDFdKTtcbiAgICBpZiAoYWJzRGlmZiA8IHVuaXQubWF4KVxuICAgICAgcmV0dXJuIGZvcm1hdChkaWZmLCB1bml0KTtcbiAgfVxuICByZXR1cm4gbWVzc2FnZXMuaW52YWxpZDtcbn1cblxuZnVuY3Rpb24gdXNlVGltZW91dFBvbGwoZm4sIGludGVydmFsLCB0aW1lb3V0UG9sbE9wdGlvbnMpIHtcbiAgY29uc3QgeyBzdGFydCB9ID0gdXNlVGltZW91dEZuKGxvb3AsIGludGVydmFsLCB7IGltbWVkaWF0ZTogZmFsc2UgfSk7XG4gIGNvbnN0IGlzQWN0aXZlID0gcmVmKGZhbHNlKTtcbiAgYXN5bmMgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICBpZiAoIWlzQWN0aXZlLnZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIGF3YWl0IGZuKCk7XG4gICAgc3RhcnQoKTtcbiAgfVxuICBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgaWYgKCFpc0FjdGl2ZS52YWx1ZSkge1xuICAgICAgaXNBY3RpdmUudmFsdWUgPSB0cnVlO1xuICAgICAgbG9vcCgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICBpc0FjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICB9XG4gIGlmICh0aW1lb3V0UG9sbE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IHRpbWVvdXRQb2xsT3B0aW9ucy5pbW1lZGlhdGUpXG4gICAgcmVzdW1lKCk7XG4gIHRyeU9uU2NvcGVEaXNwb3NlKHBhdXNlKTtcbiAgcmV0dXJuIHtcbiAgICBpc0FjdGl2ZSxcbiAgICBwYXVzZSxcbiAgICByZXN1bWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlVGltZXN0YW1wKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgY29udHJvbHM6IGV4cG9zZUNvbnRyb2xzID0gZmFsc2UsXG4gICAgb2Zmc2V0ID0gMCxcbiAgICBpbW1lZGlhdGUgPSB0cnVlLFxuICAgIGludGVydmFsID0gXCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIixcbiAgICBjYWxsYmFja1xuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgdHMgPSByZWYodGltZXN0YW1wKCkgKyBvZmZzZXQpO1xuICBjb25zdCB1cGRhdGUgPSAoKSA9PiB0cy52YWx1ZSA9IHRpbWVzdGFtcCgpICsgb2Zmc2V0O1xuICBjb25zdCBjYiA9IGNhbGxiYWNrID8gKCkgPT4ge1xuICAgIHVwZGF0ZSgpO1xuICAgIGNhbGxiYWNrKHRzLnZhbHVlKTtcbiAgfSA6IHVwZGF0ZTtcbiAgY29uc3QgY29udHJvbHMgPSBpbnRlcnZhbCA9PT0gXCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIiA/IHVzZVJhZkZuKGNiLCB7IGltbWVkaWF0ZSB9KSA6IHVzZUludGVydmFsRm4oY2IsIGludGVydmFsLCB7IGltbWVkaWF0ZSB9KTtcbiAgaWYgKGV4cG9zZUNvbnRyb2xzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWVzdGFtcDogdHMsXG4gICAgICAuLi5jb250cm9sc1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRzO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVzZVRpdGxlKG5ld1RpdGxlID0gbnVsbCwgb3B0aW9ucyA9IHt9KSB7XG4gIHZhciBfYSwgX2IsIF9jO1xuICBjb25zdCB7XG4gICAgZG9jdW1lbnQgPSBkZWZhdWx0RG9jdW1lbnQsXG4gICAgcmVzdG9yZU9uVW5tb3VudCA9ICh0KSA9PiB0XG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBvcmlnaW5hbFRpdGxlID0gKF9hID0gZG9jdW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGRvY3VtZW50LnRpdGxlKSAhPSBudWxsID8gX2EgOiBcIlwiO1xuICBjb25zdCB0aXRsZSA9IHRvUmVmKChfYiA9IG5ld1RpdGxlICE9IG51bGwgPyBuZXdUaXRsZSA6IGRvY3VtZW50ID09IG51bGwgPyB2b2lkIDAgOiBkb2N1bWVudC50aXRsZSkgIT0gbnVsbCA/IF9iIDogbnVsbCk7XG4gIGNvbnN0IGlzUmVhZG9ubHkgPSBuZXdUaXRsZSAmJiB0eXBlb2YgbmV3VGl0bGUgPT09IFwiZnVuY3Rpb25cIjtcbiAgZnVuY3Rpb24gZm9ybWF0KHQpIHtcbiAgICBpZiAoIShcInRpdGxlVGVtcGxhdGVcIiBpbiBvcHRpb25zKSlcbiAgICAgIHJldHVybiB0O1xuICAgIGNvbnN0IHRlbXBsYXRlID0gb3B0aW9ucy50aXRsZVRlbXBsYXRlIHx8IFwiJXNcIjtcbiAgICByZXR1cm4gdHlwZW9mIHRlbXBsYXRlID09PSBcImZ1bmN0aW9uXCIgPyB0ZW1wbGF0ZSh0KSA6IHRvVmFsdWUodGVtcGxhdGUpLnJlcGxhY2UoLyVzL2csIHQpO1xuICB9XG4gIHdhdGNoKFxuICAgIHRpdGxlLFxuICAgICh0LCBvKSA9PiB7XG4gICAgICBpZiAodCAhPT0gbyAmJiBkb2N1bWVudClcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBmb3JtYXQodHlwZW9mIHQgPT09IFwic3RyaW5nXCIgPyB0IDogXCJcIik7XG4gICAgfSxcbiAgICB7IGltbWVkaWF0ZTogdHJ1ZSB9XG4gICk7XG4gIGlmIChvcHRpb25zLm9ic2VydmUgJiYgIW9wdGlvbnMudGl0bGVUZW1wbGF0ZSAmJiBkb2N1bWVudCAmJiAhaXNSZWFkb25seSkge1xuICAgIHVzZU11dGF0aW9uT2JzZXJ2ZXIoXG4gICAgICAoX2MgPSBkb2N1bWVudC5oZWFkKSA9PSBudWxsID8gdm9pZCAwIDogX2MucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQudGl0bGUgIT09IHRpdGxlLnZhbHVlKVxuICAgICAgICAgIHRpdGxlLnZhbHVlID0gZm9ybWF0KGRvY3VtZW50LnRpdGxlKTtcbiAgICAgIH0sXG4gICAgICB7IGNoaWxkTGlzdDogdHJ1ZSB9XG4gICAgKTtcbiAgfVxuICB0cnlPbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgIGlmIChyZXN0b3JlT25Vbm1vdW50KSB7XG4gICAgICBjb25zdCByZXN0b3JlZFRpdGxlID0gcmVzdG9yZU9uVW5tb3VudChvcmlnaW5hbFRpdGxlLCB0aXRsZS52YWx1ZSB8fCBcIlwiKTtcbiAgICAgIGlmIChyZXN0b3JlZFRpdGxlICE9IG51bGwgJiYgZG9jdW1lbnQpXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gcmVzdG9yZWRUaXRsZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmNvbnN0IF9UcmFuc2l0aW9uUHJlc2V0cyA9IHtcbiAgZWFzZUluU2luZTogWzAuMTIsIDAsIDAuMzksIDBdLFxuICBlYXNlT3V0U2luZTogWzAuNjEsIDEsIDAuODgsIDFdLFxuICBlYXNlSW5PdXRTaW5lOiBbMC4zNywgMCwgMC42MywgMV0sXG4gIGVhc2VJblF1YWQ6IFswLjExLCAwLCAwLjUsIDBdLFxuICBlYXNlT3V0UXVhZDogWzAuNSwgMSwgMC44OSwgMV0sXG4gIGVhc2VJbk91dFF1YWQ6IFswLjQ1LCAwLCAwLjU1LCAxXSxcbiAgZWFzZUluQ3ViaWM6IFswLjMyLCAwLCAwLjY3LCAwXSxcbiAgZWFzZU91dEN1YmljOiBbMC4zMywgMSwgMC42OCwgMV0sXG4gIGVhc2VJbk91dEN1YmljOiBbMC42NSwgMCwgMC4zNSwgMV0sXG4gIGVhc2VJblF1YXJ0OiBbMC41LCAwLCAwLjc1LCAwXSxcbiAgZWFzZU91dFF1YXJ0OiBbMC4yNSwgMSwgMC41LCAxXSxcbiAgZWFzZUluT3V0UXVhcnQ6IFswLjc2LCAwLCAwLjI0LCAxXSxcbiAgZWFzZUluUXVpbnQ6IFswLjY0LCAwLCAwLjc4LCAwXSxcbiAgZWFzZU91dFF1aW50OiBbMC4yMiwgMSwgMC4zNiwgMV0sXG4gIGVhc2VJbk91dFF1aW50OiBbMC44MywgMCwgMC4xNywgMV0sXG4gIGVhc2VJbkV4cG86IFswLjcsIDAsIDAuODQsIDBdLFxuICBlYXNlT3V0RXhwbzogWzAuMTYsIDEsIDAuMywgMV0sXG4gIGVhc2VJbk91dEV4cG86IFswLjg3LCAwLCAwLjEzLCAxXSxcbiAgZWFzZUluQ2lyYzogWzAuNTUsIDAsIDEsIDAuNDVdLFxuICBlYXNlT3V0Q2lyYzogWzAsIDAuNTUsIDAuNDUsIDFdLFxuICBlYXNlSW5PdXRDaXJjOiBbMC44NSwgMCwgMC4xNSwgMV0sXG4gIGVhc2VJbkJhY2s6IFswLjM2LCAwLCAwLjY2LCAtMC41Nl0sXG4gIGVhc2VPdXRCYWNrOiBbMC4zNCwgMS41NiwgMC42NCwgMV0sXG4gIGVhc2VJbk91dEJhY2s6IFswLjY4LCAtMC42LCAwLjMyLCAxLjZdXG59O1xuY29uc3QgVHJhbnNpdGlvblByZXNldHMgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmFzc2lnbih7fSwgeyBsaW5lYXI6IGlkZW50aXR5IH0sIF9UcmFuc2l0aW9uUHJlc2V0cyk7XG5mdW5jdGlvbiBjcmVhdGVFYXNpbmdGdW5jdGlvbihbcDAsIHAxLCBwMiwgcDNdKSB7XG4gIGNvbnN0IGEgPSAoYTEsIGEyKSA9PiAxIC0gMyAqIGEyICsgMyAqIGExO1xuICBjb25zdCBiID0gKGExLCBhMikgPT4gMyAqIGEyIC0gNiAqIGExO1xuICBjb25zdCBjID0gKGExKSA9PiAzICogYTE7XG4gIGNvbnN0IGNhbGNCZXppZXIgPSAodCwgYTEsIGEyKSA9PiAoKGEoYTEsIGEyKSAqIHQgKyBiKGExLCBhMikpICogdCArIGMoYTEpKSAqIHQ7XG4gIGNvbnN0IGdldFNsb3BlID0gKHQsIGExLCBhMikgPT4gMyAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMiAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcbiAgY29uc3QgZ2V0VGZvclggPSAoeCkgPT4ge1xuICAgIGxldCBhR3Vlc3NUID0geDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgY29uc3QgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgcDAsIHAyKTtcbiAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDApXG4gICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgY29uc3QgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIHAwLCBwMikgLSB4O1xuICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICB9XG4gICAgcmV0dXJuIGFHdWVzc1Q7XG4gIH07XG4gIHJldHVybiAoeCkgPT4gcDAgPT09IHAxICYmIHAyID09PSBwMyA/IHggOiBjYWxjQmV6aWVyKGdldFRmb3JYKHgpLCBwMSwgcDMpO1xufVxuZnVuY3Rpb24gbGVycChhLCBiLCBhbHBoYSkge1xuICByZXR1cm4gYSArIGFscGhhICogKGIgLSBhKTtcbn1cbmZ1bmN0aW9uIHRvVmVjKHQpIHtcbiAgcmV0dXJuICh0eXBlb2YgdCA9PT0gXCJudW1iZXJcIiA/IFt0XSA6IHQpIHx8IFtdO1xufVxuZnVuY3Rpb24gZXhlY3V0ZVRyYW5zaXRpb24oc291cmNlLCBmcm9tLCB0bywgb3B0aW9ucyA9IHt9KSB7XG4gIHZhciBfYSwgX2I7XG4gIGNvbnN0IGZyb21WYWwgPSB0b1ZhbHVlKGZyb20pO1xuICBjb25zdCB0b1ZhbCA9IHRvVmFsdWUodG8pO1xuICBjb25zdCB2MSA9IHRvVmVjKGZyb21WYWwpO1xuICBjb25zdCB2MiA9IHRvVmVjKHRvVmFsKTtcbiAgY29uc3QgZHVyYXRpb24gPSAoX2EgPSB0b1ZhbHVlKG9wdGlvbnMuZHVyYXRpb24pKSAhPSBudWxsID8gX2EgOiAxZTM7XG4gIGNvbnN0IHN0YXJ0ZWRBdCA9IERhdGUubm93KCk7XG4gIGNvbnN0IGVuZEF0ID0gRGF0ZS5ub3coKSArIGR1cmF0aW9uO1xuICBjb25zdCB0cmFucyA9IHR5cGVvZiBvcHRpb25zLnRyYW5zaXRpb24gPT09IFwiZnVuY3Rpb25cIiA/IG9wdGlvbnMudHJhbnNpdGlvbiA6IChfYiA9IHRvVmFsdWUob3B0aW9ucy50cmFuc2l0aW9uKSkgIT0gbnVsbCA/IF9iIDogaWRlbnRpdHk7XG4gIGNvbnN0IGVhc2UgPSB0eXBlb2YgdHJhbnMgPT09IFwiZnVuY3Rpb25cIiA/IHRyYW5zIDogY3JlYXRlRWFzaW5nRnVuY3Rpb24odHJhbnMpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzb3VyY2UudmFsdWUgPSBmcm9tVmFsO1xuICAgIGNvbnN0IHRpY2sgPSAoKSA9PiB7XG4gICAgICB2YXIgX2EyO1xuICAgICAgaWYgKChfYTIgPSBvcHRpb25zLmFib3J0KSA9PSBudWxsID8gdm9pZCAwIDogX2EyLmNhbGwob3B0aW9ucykpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgYWxwaGEgPSBlYXNlKChub3cgLSBzdGFydGVkQXQpIC8gZHVyYXRpb24pO1xuICAgICAgY29uc3QgYXJyID0gdG9WZWMoc291cmNlLnZhbHVlKS5tYXAoKG4sIGkpID0+IGxlcnAodjFbaV0sIHYyW2ldLCBhbHBoYSkpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlLnZhbHVlKSlcbiAgICAgICAgc291cmNlLnZhbHVlID0gYXJyLm1hcCgobiwgaSkgPT4ge1xuICAgICAgICAgIHZhciBfYTMsIF9iMjtcbiAgICAgICAgICByZXR1cm4gbGVycCgoX2EzID0gdjFbaV0pICE9IG51bGwgPyBfYTMgOiAwLCAoX2IyID0gdjJbaV0pICE9IG51bGwgPyBfYjIgOiAwLCBhbHBoYSk7XG4gICAgICAgIH0pO1xuICAgICAgZWxzZSBpZiAodHlwZW9mIHNvdXJjZS52YWx1ZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgc291cmNlLnZhbHVlID0gYXJyWzBdO1xuICAgICAgaWYgKG5vdyA8IGVuZEF0KSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdXJjZS52YWx1ZSA9IHRvVmFsO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aWNrKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gdXNlVHJhbnNpdGlvbihzb3VyY2UsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgY3VycmVudElkID0gMDtcbiAgY29uc3Qgc291cmNlVmFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHYgPSB0b1ZhbHVlKHNvdXJjZSk7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm51bWJlclwiID8gdiA6IHYubWFwKHRvVmFsdWUpO1xuICB9O1xuICBjb25zdCBvdXRwdXRSZWYgPSByZWYoc291cmNlVmFsKCkpO1xuICB3YXRjaChzb3VyY2VWYWwsIGFzeW5jICh0bykgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKHRvVmFsdWUob3B0aW9ucy5kaXNhYmxlZCkpXG4gICAgICByZXR1cm47XG4gICAgY29uc3QgaWQgPSArK2N1cnJlbnRJZDtcbiAgICBpZiAob3B0aW9ucy5kZWxheSlcbiAgICAgIGF3YWl0IHByb21pc2VUaW1lb3V0KHRvVmFsdWUob3B0aW9ucy5kZWxheSkpO1xuICAgIGlmIChpZCAhPT0gY3VycmVudElkKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHRvVmFsID0gQXJyYXkuaXNBcnJheSh0bykgPyB0by5tYXAodG9WYWx1ZSkgOiB0b1ZhbHVlKHRvKTtcbiAgICAoX2EgPSBvcHRpb25zLm9uU3RhcnRlZCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwob3B0aW9ucyk7XG4gICAgYXdhaXQgZXhlY3V0ZVRyYW5zaXRpb24ob3V0cHV0UmVmLCBvdXRwdXRSZWYudmFsdWUsIHRvVmFsLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgYWJvcnQ6ICgpID0+IHtcbiAgICAgICAgdmFyIF9hMjtcbiAgICAgICAgcmV0dXJuIGlkICE9PSBjdXJyZW50SWQgfHwgKChfYTIgPSBvcHRpb25zLmFib3J0KSA9PSBudWxsID8gdm9pZCAwIDogX2EyLmNhbGwob3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIChfYiA9IG9wdGlvbnMub25GaW5pc2hlZCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLmNhbGwob3B0aW9ucyk7XG4gIH0sIHsgZGVlcDogdHJ1ZSB9KTtcbiAgd2F0Y2goKCkgPT4gdG9WYWx1ZShvcHRpb25zLmRpc2FibGVkKSwgKGRpc2FibGVkKSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBjdXJyZW50SWQrKztcbiAgICAgIG91dHB1dFJlZi52YWx1ZSA9IHNvdXJjZVZhbCgpO1xuICAgIH1cbiAgfSk7XG4gIHRyeU9uU2NvcGVEaXNwb3NlKCgpID0+IHtcbiAgICBjdXJyZW50SWQrKztcbiAgfSk7XG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiB0b1ZhbHVlKG9wdGlvbnMuZGlzYWJsZWQpID8gc291cmNlVmFsKCkgOiBvdXRwdXRSZWYudmFsdWUpO1xufVxuXG5mdW5jdGlvbiB1c2VVcmxTZWFyY2hQYXJhbXMobW9kZSA9IFwiaGlzdG9yeVwiLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGluaXRpYWxWYWx1ZSA9IHt9LFxuICAgIHJlbW92ZU51bGxpc2hWYWx1ZXMgPSB0cnVlLFxuICAgIHJlbW92ZUZhbHN5VmFsdWVzID0gZmFsc2UsXG4gICAgd3JpdGU6IGVuYWJsZVdyaXRlID0gdHJ1ZSxcbiAgICB3aW5kb3cgPSBkZWZhdWx0V2luZG93XG4gIH0gPSBvcHRpb25zO1xuICBpZiAoIXdpbmRvdylcbiAgICByZXR1cm4gcmVhY3RpdmUoaW5pdGlhbFZhbHVlKTtcbiAgY29uc3Qgc3RhdGUgPSByZWFjdGl2ZSh7fSk7XG4gIGZ1bmN0aW9uIGdldFJhd1BhcmFtcygpIHtcbiAgICBpZiAobW9kZSA9PT0gXCJoaXN0b3J5XCIpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uc2VhcmNoIHx8IFwiXCI7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSBcImhhc2hcIikge1xuICAgICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoIHx8IFwiXCI7XG4gICAgICBjb25zdCBpbmRleCA9IGhhc2guaW5kZXhPZihcIj9cIik7XG4gICAgICByZXR1cm4gaW5kZXggPiAwID8gaGFzaC5zbGljZShpbmRleCkgOiBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKHdpbmRvdy5sb2NhdGlvbi5oYXNoIHx8IFwiXCIpLnJlcGxhY2UoL14jLywgXCJcIik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNvbnN0cnVjdFF1ZXJ5KHBhcmFtcykge1xuICAgIGNvbnN0IHN0cmluZ2lmaWVkID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgaWYgKG1vZGUgPT09IFwiaGlzdG9yeVwiKVxuICAgICAgcmV0dXJuIGAke3N0cmluZ2lmaWVkID8gYD8ke3N0cmluZ2lmaWVkfWAgOiBcIlwifSR7d2luZG93LmxvY2F0aW9uLmhhc2ggfHwgXCJcIn1gO1xuICAgIGlmIChtb2RlID09PSBcImhhc2gtcGFyYW1zXCIpXG4gICAgICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLnNlYXJjaCB8fCBcIlwifSR7c3RyaW5naWZpZWQgPyBgIyR7c3RyaW5naWZpZWR9YCA6IFwiXCJ9YDtcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2ggfHwgXCIjXCI7XG4gICAgY29uc3QgaW5kZXggPSBoYXNoLmluZGV4T2YoXCI/XCIpO1xuICAgIGlmIChpbmRleCA+IDApXG4gICAgICByZXR1cm4gYCR7aGFzaC5zbGljZSgwLCBpbmRleCl9JHtzdHJpbmdpZmllZCA/IGA/JHtzdHJpbmdpZmllZH1gIDogXCJcIn1gO1xuICAgIHJldHVybiBgJHtoYXNofSR7c3RyaW5naWZpZWQgPyBgPyR7c3RyaW5naWZpZWR9YCA6IFwiXCJ9YDtcbiAgfVxuICBmdW5jdGlvbiByZWFkKCkge1xuICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKGdldFJhd1BhcmFtcygpKTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShwYXJhbXMpIHtcbiAgICBjb25zdCB1bnVzZWRLZXlzID0gbmV3IFNldChPYmplY3Qua2V5cyhzdGF0ZSkpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtcy5rZXlzKCkpIHtcbiAgICAgIGNvbnN0IHBhcmFtc0ZvcktleSA9IHBhcmFtcy5nZXRBbGwoa2V5KTtcbiAgICAgIHN0YXRlW2tleV0gPSBwYXJhbXNGb3JLZXkubGVuZ3RoID4gMSA/IHBhcmFtc0ZvcktleSA6IHBhcmFtcy5nZXQoa2V5KSB8fCBcIlwiO1xuICAgICAgdW51c2VkS2V5cy5kZWxldGUoa2V5KTtcbiAgICB9XG4gICAgQXJyYXkuZnJvbSh1bnVzZWRLZXlzKS5mb3JFYWNoKChrZXkpID0+IGRlbGV0ZSBzdGF0ZVtrZXldKTtcbiAgfVxuICBjb25zdCB7IHBhdXNlLCByZXN1bWUgfSA9IHBhdXNhYmxlV2F0Y2goXG4gICAgc3RhdGUsXG4gICAgKCkgPT4ge1xuICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhcIlwiKTtcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgbWFwRW50cnkgPSBzdGF0ZVtrZXldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYXBFbnRyeSkpXG4gICAgICAgICAgbWFwRW50cnkuZm9yRWFjaCgodmFsdWUpID0+IHBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSkpO1xuICAgICAgICBlbHNlIGlmIChyZW1vdmVOdWxsaXNoVmFsdWVzICYmIG1hcEVudHJ5ID09IG51bGwpXG4gICAgICAgICAgcGFyYW1zLmRlbGV0ZShrZXkpO1xuICAgICAgICBlbHNlIGlmIChyZW1vdmVGYWxzeVZhbHVlcyAmJiAhbWFwRW50cnkpXG4gICAgICAgICAgcGFyYW1zLmRlbGV0ZShrZXkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcGFyYW1zLnNldChrZXksIG1hcEVudHJ5KTtcbiAgICAgIH0pO1xuICAgICAgd3JpdGUocGFyYW1zKTtcbiAgICB9LFxuICAgIHsgZGVlcDogdHJ1ZSB9XG4gICk7XG4gIGZ1bmN0aW9uIHdyaXRlKHBhcmFtcywgc2hvdWxkVXBkYXRlKSB7XG4gICAgcGF1c2UoKTtcbiAgICBpZiAoc2hvdWxkVXBkYXRlKVxuICAgICAgdXBkYXRlU3RhdGUocGFyYW1zKTtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoXG4gICAgICB3aW5kb3cuaGlzdG9yeS5zdGF0ZSxcbiAgICAgIHdpbmRvdy5kb2N1bWVudC50aXRsZSxcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIGNvbnN0cnVjdFF1ZXJ5KHBhcmFtcylcbiAgICApO1xuICAgIHJlc3VtZSgpO1xuICB9XG4gIGZ1bmN0aW9uIG9uQ2hhbmdlZCgpIHtcbiAgICBpZiAoIWVuYWJsZVdyaXRlKVxuICAgICAgcmV0dXJuO1xuICAgIHdyaXRlKHJlYWQoKSwgdHJ1ZSk7XG4gIH1cbiAgdXNlRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwicG9wc3RhdGVcIiwgb25DaGFuZ2VkLCBmYWxzZSk7XG4gIGlmIChtb2RlICE9PSBcImhpc3RvcnlcIilcbiAgICB1c2VFdmVudExpc3RlbmVyKHdpbmRvdywgXCJoYXNoY2hhbmdlXCIsIG9uQ2hhbmdlZCwgZmFsc2UpO1xuICBjb25zdCBpbml0aWFsID0gcmVhZCgpO1xuICBpZiAoaW5pdGlhbC5rZXlzKCkubmV4dCgpLnZhbHVlKVxuICAgIHVwZGF0ZVN0YXRlKGluaXRpYWwpO1xuICBlbHNlXG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZSwgaW5pdGlhbFZhbHVlKTtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiB1c2VVc2VyTWVkaWEob3B0aW9ucyA9IHt9KSB7XG4gIHZhciBfYSwgX2I7XG4gIGNvbnN0IGVuYWJsZWQgPSByZWYoKF9hID0gb3B0aW9ucy5lbmFibGVkKSAhPSBudWxsID8gX2EgOiBmYWxzZSk7XG4gIGNvbnN0IGF1dG9Td2l0Y2ggPSByZWYoKF9iID0gb3B0aW9ucy5hdXRvU3dpdGNoKSAhPSBudWxsID8gX2IgOiB0cnVlKTtcbiAgY29uc3QgY29uc3RyYWludHMgPSByZWYob3B0aW9ucy5jb25zdHJhaW50cyk7XG4gIGNvbnN0IHsgbmF2aWdhdG9yID0gZGVmYXVsdE5hdmlnYXRvciB9ID0gb3B0aW9ucztcbiAgY29uc3QgaXNTdXBwb3J0ZWQgPSB1c2VTdXBwb3J0ZWQoKCkgPT4ge1xuICAgIHZhciBfYTI7XG4gICAgcmV0dXJuIChfYTIgPSBuYXZpZ2F0b3IgPT0gbnVsbCA/IHZvaWQgMCA6IG5hdmlnYXRvci5tZWRpYURldmljZXMpID09IG51bGwgPyB2b2lkIDAgOiBfYTIuZ2V0VXNlck1lZGlhO1xuICB9KTtcbiAgY29uc3Qgc3RyZWFtID0gc2hhbGxvd1JlZigpO1xuICBmdW5jdGlvbiBnZXREZXZpY2VPcHRpb25zKHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJ2aWRlb1wiOiB7XG4gICAgICAgIGlmIChjb25zdHJhaW50cy52YWx1ZSlcbiAgICAgICAgICByZXR1cm4gY29uc3RyYWludHMudmFsdWUudmlkZW8gfHwgZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBcImF1ZGlvXCI6IHtcbiAgICAgICAgaWYgKGNvbnN0cmFpbnRzLnZhbHVlKVxuICAgICAgICAgIHJldHVybiBjb25zdHJhaW50cy52YWx1ZS5hdWRpbyB8fCBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIF9zdGFydCgpIHtcbiAgICBpZiAoIWlzU3VwcG9ydGVkLnZhbHVlIHx8IHN0cmVhbS52YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBzdHJlYW0udmFsdWUgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICB2aWRlbzogZ2V0RGV2aWNlT3B0aW9ucyhcInZpZGVvXCIpLFxuICAgICAgYXVkaW86IGdldERldmljZU9wdGlvbnMoXCJhdWRpb1wiKVxuICAgIH0pO1xuICAgIHJldHVybiBzdHJlYW0udmFsdWU7XG4gIH1cbiAgZnVuY3Rpb24gX3N0b3AoKSB7XG4gICAgdmFyIF9hMjtcbiAgICAoX2EyID0gc3RyZWFtLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLmdldFRyYWNrcygpLmZvckVhY2goKHQpID0+IHQuc3RvcCgpKTtcbiAgICBzdHJlYW0udmFsdWUgPSB2b2lkIDA7XG4gIH1cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBfc3RvcCgpO1xuICAgIGVuYWJsZWQudmFsdWUgPSBmYWxzZTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBhd2FpdCBfc3RhcnQoKTtcbiAgICBpZiAoc3RyZWFtLnZhbHVlKVxuICAgICAgZW5hYmxlZC52YWx1ZSA9IHRydWU7XG4gICAgcmV0dXJuIHN0cmVhbS52YWx1ZTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgIF9zdG9wKCk7XG4gICAgcmV0dXJuIGF3YWl0IHN0YXJ0KCk7XG4gIH1cbiAgd2F0Y2goXG4gICAgZW5hYmxlZCxcbiAgICAodikgPT4ge1xuICAgICAgaWYgKHYpXG4gICAgICAgIF9zdGFydCgpO1xuICAgICAgZWxzZSBfc3RvcCgpO1xuICAgIH0sXG4gICAgeyBpbW1lZGlhdGU6IHRydWUgfVxuICApO1xuICB3YXRjaChcbiAgICBjb25zdHJhaW50cyxcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoYXV0b1N3aXRjaC52YWx1ZSAmJiBzdHJlYW0udmFsdWUpXG4gICAgICAgIHJlc3RhcnQoKTtcbiAgICB9LFxuICAgIHsgaW1tZWRpYXRlOiB0cnVlIH1cbiAgKTtcbiAgdHJ5T25TY29wZURpc3Bvc2UoKCkgPT4ge1xuICAgIHN0b3AoKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgaXNTdXBwb3J0ZWQsXG4gICAgc3RyZWFtLFxuICAgIHN0YXJ0LFxuICAgIHN0b3AsXG4gICAgcmVzdGFydCxcbiAgICBjb25zdHJhaW50cyxcbiAgICBlbmFibGVkLFxuICAgIGF1dG9Td2l0Y2hcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlVk1vZGVsKHByb3BzLCBrZXksIGVtaXQsIG9wdGlvbnMgPSB7fSkge1xuICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICBjb25zdCB7XG4gICAgY2xvbmUgPSBmYWxzZSxcbiAgICBwYXNzaXZlID0gZmFsc2UsXG4gICAgZXZlbnROYW1lLFxuICAgIGRlZXAgPSBmYWxzZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgc2hvdWxkRW1pdFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKTtcbiAgY29uc3QgX2VtaXQgPSBlbWl0IHx8ICh2bSA9PSBudWxsID8gdm9pZCAwIDogdm0uZW1pdCkgfHwgKChfYSA9IHZtID09IG51bGwgPyB2b2lkIDAgOiB2bS4kZW1pdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmJpbmQodm0pKSB8fCAoKF9jID0gKF9iID0gdm0gPT0gbnVsbCA/IHZvaWQgMCA6IHZtLnByb3h5KSA9PSBudWxsID8gdm9pZCAwIDogX2IuJGVtaXQpID09IG51bGwgPyB2b2lkIDAgOiBfYy5iaW5kKHZtID09IG51bGwgPyB2b2lkIDAgOiB2bS5wcm94eSkpO1xuICBsZXQgZXZlbnQgPSBldmVudE5hbWU7XG4gIGlmICgha2V5KSB7XG4gICAgaWYgKGlzVnVlMikge1xuICAgICAgY29uc3QgbW9kZWxPcHRpb25zID0gKF9lID0gKF9kID0gdm0gPT0gbnVsbCA/IHZvaWQgMCA6IHZtLnByb3h5KSA9PSBudWxsID8gdm9pZCAwIDogX2QuJG9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfZS5tb2RlbDtcbiAgICAgIGtleSA9IChtb2RlbE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG1vZGVsT3B0aW9ucy52YWx1ZSkgfHwgXCJ2YWx1ZVwiO1xuICAgICAgaWYgKCFldmVudE5hbWUpXG4gICAgICAgIGV2ZW50ID0gKG1vZGVsT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogbW9kZWxPcHRpb25zLmV2ZW50KSB8fCBcImlucHV0XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleSA9IFwibW9kZWxWYWx1ZVwiO1xuICAgIH1cbiAgfVxuICBldmVudCA9IGV2ZW50IHx8IGB1cGRhdGU6JHtrZXkudG9TdHJpbmcoKX1gO1xuICBjb25zdCBjbG9uZUZuID0gKHZhbCkgPT4gIWNsb25lID8gdmFsIDogdHlwZW9mIGNsb25lID09PSBcImZ1bmN0aW9uXCIgPyBjbG9uZSh2YWwpIDogY2xvbmVGbkpTT04odmFsKTtcbiAgY29uc3QgZ2V0VmFsdWUgPSAoKSA9PiBpc0RlZihwcm9wc1trZXldKSA/IGNsb25lRm4ocHJvcHNba2V5XSkgOiBkZWZhdWx0VmFsdWU7XG4gIGNvbnN0IHRyaWdnZXJFbWl0ID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHNob3VsZEVtaXQpIHtcbiAgICAgIGlmIChzaG91bGRFbWl0KHZhbHVlKSlcbiAgICAgICAgX2VtaXQoZXZlbnQsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2VtaXQoZXZlbnQsIHZhbHVlKTtcbiAgICB9XG4gIH07XG4gIGlmIChwYXNzaXZlKSB7XG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gZ2V0VmFsdWUoKTtcbiAgICBjb25zdCBwcm94eSA9IHJlZihpbml0aWFsVmFsdWUpO1xuICAgIGxldCBpc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBwcm9wc1trZXldLFxuICAgICAgKHYpID0+IHtcbiAgICAgICAgaWYgKCFpc1VwZGF0aW5nKSB7XG4gICAgICAgICAgaXNVcGRhdGluZyA9IHRydWU7XG4gICAgICAgICAgcHJveHkudmFsdWUgPSBjbG9uZUZuKHYpO1xuICAgICAgICAgIG5leHRUaWNrKCgpID0+IGlzVXBkYXRpbmcgPSBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIHdhdGNoKFxuICAgICAgcHJveHksXG4gICAgICAodikgPT4ge1xuICAgICAgICBpZiAoIWlzVXBkYXRpbmcgJiYgKHYgIT09IHByb3BzW2tleV0gfHwgZGVlcCkpXG4gICAgICAgICAgdHJpZ2dlckVtaXQodik7XG4gICAgICB9LFxuICAgICAgeyBkZWVwIH1cbiAgICApO1xuICAgIHJldHVybiBwcm94eTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY29tcHV0ZWQoe1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gZ2V0VmFsdWUoKTtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgdHJpZ2dlckVtaXQodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVzZVZNb2RlbHMocHJvcHMsIGVtaXQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCByZXQgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gcHJvcHMpIHtcbiAgICByZXRba2V5XSA9IHVzZVZNb2RlbChcbiAgICAgIHByb3BzLFxuICAgICAga2V5LFxuICAgICAgZW1pdCxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHVzZVZpYnJhdGUob3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgcGF0dGVybiA9IFtdLFxuICAgIGludGVydmFsID0gMCxcbiAgICBuYXZpZ2F0b3IgPSBkZWZhdWx0TmF2aWdhdG9yXG4gIH0gPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBpc1N1cHBvcnRlZCA9IHVzZVN1cHBvcnRlZCgoKSA9PiB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIFwidmlicmF0ZVwiIGluIG5hdmlnYXRvcik7XG4gIGNvbnN0IHBhdHRlcm5SZWYgPSB0b1JlZihwYXR0ZXJuKTtcbiAgbGV0IGludGVydmFsQ29udHJvbHM7XG4gIGNvbnN0IHZpYnJhdGUgPSAocGF0dGVybjIgPSBwYXR0ZXJuUmVmLnZhbHVlKSA9PiB7XG4gICAgaWYgKGlzU3VwcG9ydGVkLnZhbHVlKVxuICAgICAgbmF2aWdhdG9yLnZpYnJhdGUocGF0dGVybjIpO1xuICB9O1xuICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgIGlmIChpc1N1cHBvcnRlZC52YWx1ZSlcbiAgICAgIG5hdmlnYXRvci52aWJyYXRlKDApO1xuICAgIGludGVydmFsQ29udHJvbHMgPT0gbnVsbCA/IHZvaWQgMCA6IGludGVydmFsQ29udHJvbHMucGF1c2UoKTtcbiAgfTtcbiAgaWYgKGludGVydmFsID4gMCkge1xuICAgIGludGVydmFsQ29udHJvbHMgPSB1c2VJbnRlcnZhbEZuKFxuICAgICAgdmlicmF0ZSxcbiAgICAgIGludGVydmFsLFxuICAgICAge1xuICAgICAgICBpbW1lZGlhdGU6IGZhbHNlLFxuICAgICAgICBpbW1lZGlhdGVDYWxsYmFjazogZmFsc2VcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXNTdXBwb3J0ZWQsXG4gICAgcGF0dGVybixcbiAgICBpbnRlcnZhbENvbnRyb2xzLFxuICAgIHZpYnJhdGUsXG4gICAgc3RvcFxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VWaXJ0dWFsTGlzdChsaXN0LCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgY29udGFpbmVyU3R5bGUsIHdyYXBwZXJQcm9wcywgc2Nyb2xsVG8sIGNhbGN1bGF0ZVJhbmdlLCBjdXJyZW50TGlzdCwgY29udGFpbmVyUmVmIH0gPSBcIml0ZW1IZWlnaHRcIiBpbiBvcHRpb25zID8gdXNlVmVydGljYWxWaXJ0dWFsTGlzdChvcHRpb25zLCBsaXN0KSA6IHVzZUhvcml6b250YWxWaXJ0dWFsTGlzdChvcHRpb25zLCBsaXN0KTtcbiAgcmV0dXJuIHtcbiAgICBsaXN0OiBjdXJyZW50TGlzdCxcbiAgICBzY3JvbGxUbyxcbiAgICBjb250YWluZXJQcm9wczoge1xuICAgICAgcmVmOiBjb250YWluZXJSZWYsXG4gICAgICBvblNjcm9sbDogKCkgPT4ge1xuICAgICAgICBjYWxjdWxhdGVSYW5nZSgpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiBjb250YWluZXJTdHlsZVxuICAgIH0sXG4gICAgd3JhcHBlclByb3BzXG4gIH07XG59XG5mdW5jdGlvbiB1c2VWaXJ0dWFsTGlzdFJlc291cmNlcyhsaXN0KSB7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHJlZihudWxsKTtcbiAgY29uc3Qgc2l6ZSA9IHVzZUVsZW1lbnRTaXplKGNvbnRhaW5lclJlZik7XG4gIGNvbnN0IGN1cnJlbnRMaXN0ID0gcmVmKFtdKTtcbiAgY29uc3Qgc291cmNlID0gc2hhbGxvd1JlZihsaXN0KTtcbiAgY29uc3Qgc3RhdGUgPSByZWYoeyBzdGFydDogMCwgZW5kOiAxMCB9KTtcbiAgcmV0dXJuIHsgc3RhdGUsIHNvdXJjZSwgY3VycmVudExpc3QsIHNpemUsIGNvbnRhaW5lclJlZiB9O1xufVxuZnVuY3Rpb24gY3JlYXRlR2V0Vmlld0NhcGFjaXR5KHN0YXRlLCBzb3VyY2UsIGl0ZW1TaXplKSB7XG4gIHJldHVybiAoY29udGFpbmVyU2l6ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgaXRlbVNpemUgPT09IFwibnVtYmVyXCIpXG4gICAgICByZXR1cm4gTWF0aC5jZWlsKGNvbnRhaW5lclNpemUgLyBpdGVtU2l6ZSk7XG4gICAgY29uc3QgeyBzdGFydCA9IDAgfSA9IHN0YXRlLnZhbHVlO1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGxldCBjYXBhY2l0eSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgc291cmNlLnZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzaXplID0gaXRlbVNpemUoaSk7XG4gICAgICBzdW0gKz0gc2l6ZTtcbiAgICAgIGNhcGFjaXR5ID0gaTtcbiAgICAgIGlmIChzdW0gPiBjb250YWluZXJTaXplKVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGNhcGFjaXR5IC0gc3RhcnQ7XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVHZXRPZmZzZXQoc291cmNlLCBpdGVtU2l6ZSkge1xuICByZXR1cm4gKHNjcm9sbERpcmVjdGlvbikgPT4ge1xuICAgIGlmICh0eXBlb2YgaXRlbVNpemUgPT09IFwibnVtYmVyXCIpXG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihzY3JvbGxEaXJlY3Rpb24gLyBpdGVtU2l6ZSkgKyAxO1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLnZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzaXplID0gaXRlbVNpemUoaSk7XG4gICAgICBzdW0gKz0gc2l6ZTtcbiAgICAgIGlmIChzdW0gPj0gc2Nyb2xsRGlyZWN0aW9uKSB7XG4gICAgICAgIG9mZnNldCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0ICsgMTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNhbGN1bGF0ZVJhbmdlKHR5cGUsIG92ZXJzY2FuLCBnZXRPZmZzZXQsIGdldFZpZXdDYXBhY2l0eSwgeyBjb250YWluZXJSZWYsIHN0YXRlLCBjdXJyZW50TGlzdCwgc291cmNlIH0pIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY29udGFpbmVyUmVmLnZhbHVlO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBnZXRPZmZzZXQodHlwZSA9PT0gXCJ2ZXJ0aWNhbFwiID8gZWxlbWVudC5zY3JvbGxUb3AgOiBlbGVtZW50LnNjcm9sbExlZnQpO1xuICAgICAgY29uc3Qgdmlld0NhcGFjaXR5ID0gZ2V0Vmlld0NhcGFjaXR5KHR5cGUgPT09IFwidmVydGljYWxcIiA/IGVsZW1lbnQuY2xpZW50SGVpZ2h0IDogZWxlbWVudC5jbGllbnRXaWR0aCk7XG4gICAgICBjb25zdCBmcm9tID0gb2Zmc2V0IC0gb3ZlcnNjYW47XG4gICAgICBjb25zdCB0byA9IG9mZnNldCArIHZpZXdDYXBhY2l0eSArIG92ZXJzY2FuO1xuICAgICAgc3RhdGUudmFsdWUgPSB7XG4gICAgICAgIHN0YXJ0OiBmcm9tIDwgMCA/IDAgOiBmcm9tLFxuICAgICAgICBlbmQ6IHRvID4gc291cmNlLnZhbHVlLmxlbmd0aCA/IHNvdXJjZS52YWx1ZS5sZW5ndGggOiB0b1xuICAgICAgfTtcbiAgICAgIGN1cnJlbnRMaXN0LnZhbHVlID0gc291cmNlLnZhbHVlLnNsaWNlKHN0YXRlLnZhbHVlLnN0YXJ0LCBzdGF0ZS52YWx1ZS5lbmQpLm1hcCgoZWxlLCBpbmRleCkgPT4gKHtcbiAgICAgICAgZGF0YTogZWxlLFxuICAgICAgICBpbmRleDogaW5kZXggKyBzdGF0ZS52YWx1ZS5zdGFydFxuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUdldERpc3RhbmNlKGl0ZW1TaXplLCBzb3VyY2UpIHtcbiAgcmV0dXJuIChpbmRleCkgPT4ge1xuICAgIGlmICh0eXBlb2YgaXRlbVNpemUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGNvbnN0IHNpemUyID0gaW5kZXggKiBpdGVtU2l6ZTtcbiAgICAgIHJldHVybiBzaXplMjtcbiAgICB9XG4gICAgY29uc3Qgc2l6ZSA9IHNvdXJjZS52YWx1ZS5zbGljZSgwLCBpbmRleCkucmVkdWNlKChzdW0sIF8sIGkpID0+IHN1bSArIGl0ZW1TaXplKGkpLCAwKTtcbiAgICByZXR1cm4gc2l6ZTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHVzZVdhdGNoRm9yU2l6ZXMoc2l6ZSwgbGlzdCwgY29udGFpbmVyUmVmLCBjYWxjdWxhdGVSYW5nZSkge1xuICB3YXRjaChbc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQsIGxpc3QsIGNvbnRhaW5lclJlZl0sICgpID0+IHtcbiAgICBjYWxjdWxhdGVSYW5nZSgpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVkVG90YWxTaXplKGl0ZW1TaXplLCBzb3VyY2UpIHtcbiAgcmV0dXJuIGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAodHlwZW9mIGl0ZW1TaXplID09PSBcIm51bWJlclwiKVxuICAgICAgcmV0dXJuIHNvdXJjZS52YWx1ZS5sZW5ndGggKiBpdGVtU2l6ZTtcbiAgICByZXR1cm4gc291cmNlLnZhbHVlLnJlZHVjZSgoc3VtLCBfLCBpbmRleCkgPT4gc3VtICsgaXRlbVNpemUoaW5kZXgpLCAwKTtcbiAgfSk7XG59XG5jb25zdCBzY3JvbGxUb0RpY3Rpb25hcnlGb3JFbGVtZW50U2Nyb2xsS2V5ID0ge1xuICBob3Jpem9udGFsOiBcInNjcm9sbExlZnRcIixcbiAgdmVydGljYWw6IFwic2Nyb2xsVG9wXCJcbn07XG5mdW5jdGlvbiBjcmVhdGVTY3JvbGxUbyh0eXBlLCBjYWxjdWxhdGVSYW5nZSwgZ2V0RGlzdGFuY2UsIGNvbnRhaW5lclJlZikge1xuICByZXR1cm4gKGluZGV4KSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lclJlZi52YWx1ZSkge1xuICAgICAgY29udGFpbmVyUmVmLnZhbHVlW3Njcm9sbFRvRGljdGlvbmFyeUZvckVsZW1lbnRTY3JvbGxLZXlbdHlwZV1dID0gZ2V0RGlzdGFuY2UoaW5kZXgpO1xuICAgICAgY2FsY3VsYXRlUmFuZ2UoKTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiB1c2VIb3Jpem9udGFsVmlydHVhbExpc3Qob3B0aW9ucywgbGlzdCkge1xuICBjb25zdCByZXNvdXJjZXMgPSB1c2VWaXJ0dWFsTGlzdFJlc291cmNlcyhsaXN0KTtcbiAgY29uc3QgeyBzdGF0ZSwgc291cmNlLCBjdXJyZW50TGlzdCwgc2l6ZSwgY29udGFpbmVyUmVmIH0gPSByZXNvdXJjZXM7XG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlID0geyBvdmVyZmxvd1g6IFwiYXV0b1wiIH07XG4gIGNvbnN0IHsgaXRlbVdpZHRoLCBvdmVyc2NhbiA9IDUgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGdldFZpZXdDYXBhY2l0eSA9IGNyZWF0ZUdldFZpZXdDYXBhY2l0eShzdGF0ZSwgc291cmNlLCBpdGVtV2lkdGgpO1xuICBjb25zdCBnZXRPZmZzZXQgPSBjcmVhdGVHZXRPZmZzZXQoc291cmNlLCBpdGVtV2lkdGgpO1xuICBjb25zdCBjYWxjdWxhdGVSYW5nZSA9IGNyZWF0ZUNhbGN1bGF0ZVJhbmdlKFwiaG9yaXpvbnRhbFwiLCBvdmVyc2NhbiwgZ2V0T2Zmc2V0LCBnZXRWaWV3Q2FwYWNpdHksIHJlc291cmNlcyk7XG4gIGNvbnN0IGdldERpc3RhbmNlTGVmdCA9IGNyZWF0ZUdldERpc3RhbmNlKGl0ZW1XaWR0aCwgc291cmNlKTtcbiAgY29uc3Qgb2Zmc2V0TGVmdCA9IGNvbXB1dGVkKCgpID0+IGdldERpc3RhbmNlTGVmdChzdGF0ZS52YWx1ZS5zdGFydCkpO1xuICBjb25zdCB0b3RhbFdpZHRoID0gY3JlYXRlQ29tcHV0ZWRUb3RhbFNpemUoaXRlbVdpZHRoLCBzb3VyY2UpO1xuICB1c2VXYXRjaEZvclNpemVzKHNpemUsIGxpc3QsIGNvbnRhaW5lclJlZiwgY2FsY3VsYXRlUmFuZ2UpO1xuICBjb25zdCBzY3JvbGxUbyA9IGNyZWF0ZVNjcm9sbFRvKFwiaG9yaXpvbnRhbFwiLCBjYWxjdWxhdGVSYW5nZSwgZ2V0RGlzdGFuY2VMZWZ0LCBjb250YWluZXJSZWYpO1xuICBjb25zdCB3cmFwcGVyUHJvcHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIHdpZHRoOiBgJHt0b3RhbFdpZHRoLnZhbHVlIC0gb2Zmc2V0TGVmdC52YWx1ZX1weGAsXG4gICAgICAgIG1hcmdpbkxlZnQ6IGAke29mZnNldExlZnQudmFsdWV9cHhgLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIlxuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHNjcm9sbFRvLFxuICAgIGNhbGN1bGF0ZVJhbmdlLFxuICAgIHdyYXBwZXJQcm9wcyxcbiAgICBjb250YWluZXJTdHlsZSxcbiAgICBjdXJyZW50TGlzdCxcbiAgICBjb250YWluZXJSZWZcbiAgfTtcbn1cbmZ1bmN0aW9uIHVzZVZlcnRpY2FsVmlydHVhbExpc3Qob3B0aW9ucywgbGlzdCkge1xuICBjb25zdCByZXNvdXJjZXMgPSB1c2VWaXJ0dWFsTGlzdFJlc291cmNlcyhsaXN0KTtcbiAgY29uc3QgeyBzdGF0ZSwgc291cmNlLCBjdXJyZW50TGlzdCwgc2l6ZSwgY29udGFpbmVyUmVmIH0gPSByZXNvdXJjZXM7XG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlID0geyBvdmVyZmxvd1k6IFwiYXV0b1wiIH07XG4gIGNvbnN0IHsgaXRlbUhlaWdodCwgb3ZlcnNjYW4gPSA1IH0gPSBvcHRpb25zO1xuICBjb25zdCBnZXRWaWV3Q2FwYWNpdHkgPSBjcmVhdGVHZXRWaWV3Q2FwYWNpdHkoc3RhdGUsIHNvdXJjZSwgaXRlbUhlaWdodCk7XG4gIGNvbnN0IGdldE9mZnNldCA9IGNyZWF0ZUdldE9mZnNldChzb3VyY2UsIGl0ZW1IZWlnaHQpO1xuICBjb25zdCBjYWxjdWxhdGVSYW5nZSA9IGNyZWF0ZUNhbGN1bGF0ZVJhbmdlKFwidmVydGljYWxcIiwgb3ZlcnNjYW4sIGdldE9mZnNldCwgZ2V0Vmlld0NhcGFjaXR5LCByZXNvdXJjZXMpO1xuICBjb25zdCBnZXREaXN0YW5jZVRvcCA9IGNyZWF0ZUdldERpc3RhbmNlKGl0ZW1IZWlnaHQsIHNvdXJjZSk7XG4gIGNvbnN0IG9mZnNldFRvcCA9IGNvbXB1dGVkKCgpID0+IGdldERpc3RhbmNlVG9wKHN0YXRlLnZhbHVlLnN0YXJ0KSk7XG4gIGNvbnN0IHRvdGFsSGVpZ2h0ID0gY3JlYXRlQ29tcHV0ZWRUb3RhbFNpemUoaXRlbUhlaWdodCwgc291cmNlKTtcbiAgdXNlV2F0Y2hGb3JTaXplcyhzaXplLCBsaXN0LCBjb250YWluZXJSZWYsIGNhbGN1bGF0ZVJhbmdlKTtcbiAgY29uc3Qgc2Nyb2xsVG8gPSBjcmVhdGVTY3JvbGxUbyhcInZlcnRpY2FsXCIsIGNhbGN1bGF0ZVJhbmdlLCBnZXREaXN0YW5jZVRvcCwgY29udGFpbmVyUmVmKTtcbiAgY29uc3Qgd3JhcHBlclByb3BzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzdHlsZToge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDogYCR7dG90YWxIZWlnaHQudmFsdWUgLSBvZmZzZXRUb3AudmFsdWV9cHhgLFxuICAgICAgICBtYXJnaW5Ub3A6IGAke29mZnNldFRvcC52YWx1ZX1weGBcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjYWxjdWxhdGVSYW5nZSxcbiAgICBzY3JvbGxUbyxcbiAgICBjb250YWluZXJTdHlsZSxcbiAgICB3cmFwcGVyUHJvcHMsXG4gICAgY3VycmVudExpc3QsXG4gICAgY29udGFpbmVyUmVmXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVdha2VMb2NrKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgbmF2aWdhdG9yID0gZGVmYXVsdE5hdmlnYXRvcixcbiAgICBkb2N1bWVudCA9IGRlZmF1bHREb2N1bWVudFxuICB9ID0gb3B0aW9ucztcbiAgbGV0IHdha2VMb2NrO1xuICBjb25zdCBpc1N1cHBvcnRlZCA9IHVzZVN1cHBvcnRlZCgoKSA9PiBuYXZpZ2F0b3IgJiYgXCJ3YWtlTG9ja1wiIGluIG5hdmlnYXRvcik7XG4gIGNvbnN0IGlzQWN0aXZlID0gcmVmKGZhbHNlKTtcbiAgYXN5bmMgZnVuY3Rpb24gb25WaXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgIGlmICghaXNTdXBwb3J0ZWQudmFsdWUgfHwgIXdha2VMb2NrKVxuICAgICAgcmV0dXJuO1xuICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiKVxuICAgICAgd2FrZUxvY2sgPSBhd2FpdCBuYXZpZ2F0b3Iud2FrZUxvY2sucmVxdWVzdChcInNjcmVlblwiKTtcbiAgICBpc0FjdGl2ZS52YWx1ZSA9ICF3YWtlTG9jay5yZWxlYXNlZDtcbiAgfVxuICBpZiAoZG9jdW1lbnQpXG4gICAgdXNlRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIG9uVmlzaWJpbGl0eUNoYW5nZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICBhc3luYyBmdW5jdGlvbiByZXF1ZXN0KHR5cGUpIHtcbiAgICBpZiAoIWlzU3VwcG9ydGVkLnZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIHdha2VMb2NrID0gYXdhaXQgbmF2aWdhdG9yLndha2VMb2NrLnJlcXVlc3QodHlwZSk7XG4gICAgaXNBY3RpdmUudmFsdWUgPSAhd2FrZUxvY2sucmVsZWFzZWQ7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gcmVsZWFzZSgpIHtcbiAgICBpZiAoIWlzU3VwcG9ydGVkLnZhbHVlIHx8ICF3YWtlTG9jaylcbiAgICAgIHJldHVybjtcbiAgICBhd2FpdCB3YWtlTG9jay5yZWxlYXNlKCk7XG4gICAgaXNBY3RpdmUudmFsdWUgPSAhd2FrZUxvY2sucmVsZWFzZWQ7XG4gICAgd2FrZUxvY2sgPSBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXNTdXBwb3J0ZWQsXG4gICAgaXNBY3RpdmUsXG4gICAgcmVxdWVzdCxcbiAgICByZWxlYXNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVdlYk5vdGlmaWNhdGlvbihvcHRpb25zID0ge30pIHtcbiAgY29uc3Qge1xuICAgIHdpbmRvdyA9IGRlZmF1bHRXaW5kb3csXG4gICAgcmVxdWVzdFBlcm1pc3Npb25zOiBfcmVxdWVzdEZvclBlcm1pc3Npb25zID0gdHJ1ZVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgZGVmYXVsdFdlYk5vdGlmaWNhdGlvbk9wdGlvbnMgPSBvcHRpb25zO1xuICBjb25zdCBpc1N1cHBvcnRlZCA9IHVzZVN1cHBvcnRlZCgoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cgfHwgIShcIk5vdGlmaWNhdGlvblwiIGluIHdpbmRvdykpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIG5ldyBOb3RpZmljYXRpb24oXCJcIik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG4gIGNvbnN0IHBlcm1pc3Npb25HcmFudGVkID0gcmVmKGlzU3VwcG9ydGVkLnZhbHVlICYmIFwicGVybWlzc2lvblwiIGluIE5vdGlmaWNhdGlvbiAmJiBOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJncmFudGVkXCIpO1xuICBjb25zdCBub3RpZmljYXRpb24gPSByZWYobnVsbCk7XG4gIGNvbnN0IGVuc3VyZVBlcm1pc3Npb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghaXNTdXBwb3J0ZWQudmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgaWYgKCFwZXJtaXNzaW9uR3JhbnRlZC52YWx1ZSAmJiBOb3RpZmljYXRpb24ucGVybWlzc2lvbiAhPT0gXCJkZW5pZWRcIikge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG4gICAgICBpZiAocmVzdWx0ID09PSBcImdyYW50ZWRcIilcbiAgICAgICAgcGVybWlzc2lvbkdyYW50ZWQudmFsdWUgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcGVybWlzc2lvbkdyYW50ZWQudmFsdWU7XG4gIH07XG4gIGNvbnN0IHsgb246IG9uQ2xpY2ssIHRyaWdnZXI6IGNsaWNrVHJpZ2dlciB9ID0gY3JlYXRlRXZlbnRIb29rKCk7XG4gIGNvbnN0IHsgb246IG9uU2hvdywgdHJpZ2dlcjogc2hvd1RyaWdnZXIgfSA9IGNyZWF0ZUV2ZW50SG9vaygpO1xuICBjb25zdCB7IG9uOiBvbkVycm9yLCB0cmlnZ2VyOiBlcnJvclRyaWdnZXIgfSA9IGNyZWF0ZUV2ZW50SG9vaygpO1xuICBjb25zdCB7IG9uOiBvbkNsb3NlLCB0cmlnZ2VyOiBjbG9zZVRyaWdnZXIgfSA9IGNyZWF0ZUV2ZW50SG9vaygpO1xuICBjb25zdCBzaG93ID0gYXN5bmMgKG92ZXJyaWRlcykgPT4ge1xuICAgIGlmICghaXNTdXBwb3J0ZWQudmFsdWUgfHwgIXBlcm1pc3Npb25HcmFudGVkLnZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IG9wdGlvbnMyID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFdlYk5vdGlmaWNhdGlvbk9wdGlvbnMsIG92ZXJyaWRlcyk7XG4gICAgbm90aWZpY2F0aW9uLnZhbHVlID0gbmV3IE5vdGlmaWNhdGlvbihvcHRpb25zMi50aXRsZSB8fCBcIlwiLCBvcHRpb25zMik7XG4gICAgbm90aWZpY2F0aW9uLnZhbHVlLm9uY2xpY2sgPSBjbGlja1RyaWdnZXI7XG4gICAgbm90aWZpY2F0aW9uLnZhbHVlLm9uc2hvdyA9IHNob3dUcmlnZ2VyO1xuICAgIG5vdGlmaWNhdGlvbi52YWx1ZS5vbmVycm9yID0gZXJyb3JUcmlnZ2VyO1xuICAgIG5vdGlmaWNhdGlvbi52YWx1ZS5vbmNsb3NlID0gY2xvc2VUcmlnZ2VyO1xuICAgIHJldHVybiBub3RpZmljYXRpb24udmFsdWU7XG4gIH07XG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgIGlmIChub3RpZmljYXRpb24udmFsdWUpXG4gICAgICBub3RpZmljYXRpb24udmFsdWUuY2xvc2UoKTtcbiAgICBub3RpZmljYXRpb24udmFsdWUgPSBudWxsO1xuICB9O1xuICBpZiAoX3JlcXVlc3RGb3JQZXJtaXNzaW9ucylcbiAgICB0cnlPbk1vdW50ZWQoZW5zdXJlUGVybWlzc2lvbnMpO1xuICB0cnlPblNjb3BlRGlzcG9zZShjbG9zZSk7XG4gIGlmIChpc1N1cHBvcnRlZC52YWx1ZSAmJiB3aW5kb3cpIHtcbiAgICBjb25zdCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgICB1c2VFdmVudExpc3RlbmVyKGRvY3VtZW50LCBcInZpc2liaWxpdHljaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiKSB7XG4gICAgICAgIGNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpc1N1cHBvcnRlZCxcbiAgICBub3RpZmljYXRpb24sXG4gICAgZW5zdXJlUGVybWlzc2lvbnMsXG4gICAgcGVybWlzc2lvbkdyYW50ZWQsXG4gICAgc2hvdyxcbiAgICBjbG9zZSxcbiAgICBvbkNsaWNrLFxuICAgIG9uU2hvdyxcbiAgICBvbkVycm9yLFxuICAgIG9uQ2xvc2VcbiAgfTtcbn1cblxuY29uc3QgREVGQVVMVF9QSU5HX01FU1NBR0UgPSBcInBpbmdcIjtcbmZ1bmN0aW9uIHJlc29sdmVOZXN0ZWRPcHRpb25zKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHRydWUpXG4gICAgcmV0dXJuIHt9O1xuICByZXR1cm4gb3B0aW9ucztcbn1cbmZ1bmN0aW9uIHVzZVdlYlNvY2tldCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgb25Db25uZWN0ZWQsXG4gICAgb25EaXNjb25uZWN0ZWQsXG4gICAgb25FcnJvcixcbiAgICBvbk1lc3NhZ2UsXG4gICAgaW1tZWRpYXRlID0gdHJ1ZSxcbiAgICBhdXRvQ2xvc2UgPSB0cnVlLFxuICAgIHByb3RvY29scyA9IFtdXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBkYXRhID0gcmVmKG51bGwpO1xuICBjb25zdCBzdGF0dXMgPSByZWYoXCJDTE9TRURcIik7XG4gIGNvbnN0IHdzUmVmID0gcmVmKCk7XG4gIGNvbnN0IHVybFJlZiA9IHRvUmVmKHVybCk7XG4gIGxldCBoZWFydGJlYXRQYXVzZTtcbiAgbGV0IGhlYXJ0YmVhdFJlc3VtZTtcbiAgbGV0IGV4cGxpY2l0bHlDbG9zZWQgPSBmYWxzZTtcbiAgbGV0IHJldHJpZWQgPSAwO1xuICBsZXQgYnVmZmVyZWREYXRhID0gW107XG4gIGxldCBwb25nVGltZW91dFdhaXQ7XG4gIGNvbnN0IF9zZW5kQnVmZmVyID0gKCkgPT4ge1xuICAgIGlmIChidWZmZXJlZERhdGEubGVuZ3RoICYmIHdzUmVmLnZhbHVlICYmIHN0YXR1cy52YWx1ZSA9PT0gXCJPUEVOXCIpIHtcbiAgICAgIGZvciAoY29uc3QgYnVmZmVyIG9mIGJ1ZmZlcmVkRGF0YSlcbiAgICAgICAgd3NSZWYudmFsdWUuc2VuZChidWZmZXIpO1xuICAgICAgYnVmZmVyZWREYXRhID0gW107XG4gICAgfVxuICB9O1xuICBjb25zdCByZXNldEhlYXJ0YmVhdCA9ICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQocG9uZ1RpbWVvdXRXYWl0KTtcbiAgICBwb25nVGltZW91dFdhaXQgPSB2b2lkIDA7XG4gIH07XG4gIGNvbnN0IGNsb3NlID0gKGNvZGUgPSAxZTMsIHJlYXNvbikgPT4ge1xuICAgIGlmICghaXNDbGllbnQgfHwgIXdzUmVmLnZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIGV4cGxpY2l0bHlDbG9zZWQgPSB0cnVlO1xuICAgIHJlc2V0SGVhcnRiZWF0KCk7XG4gICAgaGVhcnRiZWF0UGF1c2UgPT0gbnVsbCA/IHZvaWQgMCA6IGhlYXJ0YmVhdFBhdXNlKCk7XG4gICAgd3NSZWYudmFsdWUuY2xvc2UoY29kZSwgcmVhc29uKTtcbiAgICB3c1JlZi52YWx1ZSA9IHZvaWQgMDtcbiAgfTtcbiAgY29uc3Qgc2VuZCA9IChkYXRhMiwgdXNlQnVmZmVyID0gdHJ1ZSkgPT4ge1xuICAgIGlmICghd3NSZWYudmFsdWUgfHwgc3RhdHVzLnZhbHVlICE9PSBcIk9QRU5cIikge1xuICAgICAgaWYgKHVzZUJ1ZmZlcilcbiAgICAgICAgYnVmZmVyZWREYXRhLnB1c2goZGF0YTIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfc2VuZEJ1ZmZlcigpO1xuICAgIHdzUmVmLnZhbHVlLnNlbmQoZGF0YTIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBfaW5pdCA9ICgpID0+IHtcbiAgICBpZiAoZXhwbGljaXRseUNsb3NlZCB8fCB0eXBlb2YgdXJsUmVmLnZhbHVlID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHdzID0gbmV3IFdlYlNvY2tldCh1cmxSZWYudmFsdWUsIHByb3RvY29scyk7XG4gICAgd3NSZWYudmFsdWUgPSB3cztcbiAgICBzdGF0dXMudmFsdWUgPSBcIkNPTk5FQ1RJTkdcIjtcbiAgICB3cy5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICBzdGF0dXMudmFsdWUgPSBcIk9QRU5cIjtcbiAgICAgIG9uQ29ubmVjdGVkID09IG51bGwgPyB2b2lkIDAgOiBvbkNvbm5lY3RlZCh3cyk7XG4gICAgICBoZWFydGJlYXRSZXN1bWUgPT0gbnVsbCA/IHZvaWQgMCA6IGhlYXJ0YmVhdFJlc3VtZSgpO1xuICAgICAgX3NlbmRCdWZmZXIoKTtcbiAgICB9O1xuICAgIHdzLm9uY2xvc2UgPSAoZXYpID0+IHtcbiAgICAgIHN0YXR1cy52YWx1ZSA9IFwiQ0xPU0VEXCI7XG4gICAgICBvbkRpc2Nvbm5lY3RlZCA9PSBudWxsID8gdm9pZCAwIDogb25EaXNjb25uZWN0ZWQod3MsIGV2KTtcbiAgICAgIGlmICghZXhwbGljaXRseUNsb3NlZCAmJiBvcHRpb25zLmF1dG9SZWNvbm5lY3QpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHJldHJpZXMgPSAtMSxcbiAgICAgICAgICBkZWxheSA9IDFlMyxcbiAgICAgICAgICBvbkZhaWxlZFxuICAgICAgICB9ID0gcmVzb2x2ZU5lc3RlZE9wdGlvbnMob3B0aW9ucy5hdXRvUmVjb25uZWN0KTtcbiAgICAgICAgcmV0cmllZCArPSAxO1xuICAgICAgICBpZiAodHlwZW9mIHJldHJpZXMgPT09IFwibnVtYmVyXCIgJiYgKHJldHJpZXMgPCAwIHx8IHJldHJpZWQgPCByZXRyaWVzKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KF9pbml0LCBkZWxheSk7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiByZXRyaWVzID09PSBcImZ1bmN0aW9uXCIgJiYgcmV0cmllcygpKVxuICAgICAgICAgIHNldFRpbWVvdXQoX2luaXQsIGRlbGF5KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG9uRmFpbGVkID09IG51bGwgPyB2b2lkIDAgOiBvbkZhaWxlZCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgd3Mub25lcnJvciA9IChlKSA9PiB7XG4gICAgICBvbkVycm9yID09IG51bGwgPyB2b2lkIDAgOiBvbkVycm9yKHdzLCBlKTtcbiAgICB9O1xuICAgIHdzLm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5oZWFydGJlYXQpIHtcbiAgICAgICAgcmVzZXRIZWFydGJlYXQoKTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIG1lc3NhZ2UgPSBERUZBVUxUX1BJTkdfTUVTU0FHRVxuICAgICAgICB9ID0gcmVzb2x2ZU5lc3RlZE9wdGlvbnMob3B0aW9ucy5oZWFydGJlYXQpO1xuICAgICAgICBpZiAoZS5kYXRhID09PSBtZXNzYWdlKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRhdGEudmFsdWUgPSBlLmRhdGE7XG4gICAgICBvbk1lc3NhZ2UgPT0gbnVsbCA/IHZvaWQgMCA6IG9uTWVzc2FnZSh3cywgZSk7XG4gICAgfTtcbiAgfTtcbiAgaWYgKG9wdGlvbnMuaGVhcnRiZWF0KSB7XG4gICAgY29uc3Qge1xuICAgICAgbWVzc2FnZSA9IERFRkFVTFRfUElOR19NRVNTQUdFLFxuICAgICAgaW50ZXJ2YWwgPSAxZTMsXG4gICAgICBwb25nVGltZW91dCA9IDFlM1xuICAgIH0gPSByZXNvbHZlTmVzdGVkT3B0aW9ucyhvcHRpb25zLmhlYXJ0YmVhdCk7XG4gICAgY29uc3QgeyBwYXVzZSwgcmVzdW1lIH0gPSB1c2VJbnRlcnZhbEZuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBzZW5kKG1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgaWYgKHBvbmdUaW1lb3V0V2FpdCAhPSBudWxsKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcG9uZ1RpbWVvdXRXYWl0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICBleHBsaWNpdGx5Q2xvc2VkID0gZmFsc2U7XG4gICAgICAgIH0sIHBvbmdUaW1lb3V0KTtcbiAgICAgIH0sXG4gICAgICBpbnRlcnZhbCxcbiAgICAgIHsgaW1tZWRpYXRlOiBmYWxzZSB9XG4gICAgKTtcbiAgICBoZWFydGJlYXRQYXVzZSA9IHBhdXNlO1xuICAgIGhlYXJ0YmVhdFJlc3VtZSA9IHJlc3VtZTtcbiAgfVxuICBpZiAoYXV0b0Nsb3NlKSB7XG4gICAgaWYgKGlzQ2xpZW50KVxuICAgICAgdXNlRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCAoKSA9PiBjbG9zZSgpKTtcbiAgICB0cnlPblNjb3BlRGlzcG9zZShjbG9zZSk7XG4gIH1cbiAgY29uc3Qgb3BlbiA9ICgpID0+IHtcbiAgICBpZiAoIWlzQ2xpZW50ICYmICFpc1dvcmtlcilcbiAgICAgIHJldHVybjtcbiAgICBjbG9zZSgpO1xuICAgIGV4cGxpY2l0bHlDbG9zZWQgPSBmYWxzZTtcbiAgICByZXRyaWVkID0gMDtcbiAgICBfaW5pdCgpO1xuICB9O1xuICBpZiAoaW1tZWRpYXRlKVxuICAgIG9wZW4oKTtcbiAgd2F0Y2godXJsUmVmLCBvcGVuKTtcbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIHN0YXR1cyxcbiAgICBjbG9zZSxcbiAgICBzZW5kLFxuICAgIG9wZW4sXG4gICAgd3M6IHdzUmVmXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVdlYldvcmtlcihhcmcwLCB3b3JrZXJPcHRpb25zLCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICB3aW5kb3cgPSBkZWZhdWx0V2luZG93XG4gIH0gPSBvcHRpb25zICE9IG51bGwgPyBvcHRpb25zIDoge307XG4gIGNvbnN0IGRhdGEgPSByZWYobnVsbCk7XG4gIGNvbnN0IHdvcmtlciA9IHNoYWxsb3dSZWYoKTtcbiAgY29uc3QgcG9zdCA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKCF3b3JrZXIudmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgd29ya2VyLnZhbHVlLnBvc3RNZXNzYWdlKC4uLmFyZ3MpO1xuICB9O1xuICBjb25zdCB0ZXJtaW5hdGUgPSBmdW5jdGlvbiB0ZXJtaW5hdGUyKCkge1xuICAgIGlmICghd29ya2VyLnZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIHdvcmtlci52YWx1ZS50ZXJtaW5hdGUoKTtcbiAgfTtcbiAgaWYgKHdpbmRvdykge1xuICAgIGlmICh0eXBlb2YgYXJnMCA9PT0gXCJzdHJpbmdcIilcbiAgICAgIHdvcmtlci52YWx1ZSA9IG5ldyBXb3JrZXIoYXJnMCwgd29ya2VyT3B0aW9ucyk7XG4gICAgZWxzZSBpZiAodHlwZW9mIGFyZzAgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgIHdvcmtlci52YWx1ZSA9IGFyZzAoKTtcbiAgICBlbHNlXG4gICAgICB3b3JrZXIudmFsdWUgPSBhcmcwO1xuICAgIHdvcmtlci52YWx1ZS5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgZGF0YS52YWx1ZSA9IGUuZGF0YTtcbiAgICB9O1xuICAgIHRyeU9uU2NvcGVEaXNwb3NlKCgpID0+IHtcbiAgICAgIGlmICh3b3JrZXIudmFsdWUpXG4gICAgICAgIHdvcmtlci52YWx1ZS50ZXJtaW5hdGUoKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gICAgcG9zdCxcbiAgICB0ZXJtaW5hdGUsXG4gICAgd29ya2VyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGpvYlJ1bm5lcih1c2VyRnVuYykge1xuICByZXR1cm4gKGUpID0+IHtcbiAgICBjb25zdCB1c2VyRnVuY0FyZ3MgPSBlLmRhdGFbMF07XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1c2VyRnVuYy5hcHBseSh2b2lkIDAsIHVzZXJGdW5jQXJncykpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgcG9zdE1lc3NhZ2UoW1wiU1VDQ0VTU1wiLCByZXN1bHRdKTtcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHBvc3RNZXNzYWdlKFtcIkVSUk9SXCIsIGVycm9yXSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlcHNQYXJzZXIoZGVwcywgbG9jYWxEZXBzKSB7XG4gIGlmIChkZXBzLmxlbmd0aCA9PT0gMCAmJiBsb2NhbERlcHMubGVuZ3RoID09PSAwKVxuICAgIHJldHVybiBcIlwiO1xuICBjb25zdCBkZXBzU3RyaW5nID0gZGVwcy5tYXAoKGRlcCkgPT4gYCcke2RlcH0nYCkudG9TdHJpbmcoKTtcbiAgY29uc3QgZGVwc0Z1bmN0aW9uU3RyaW5nID0gbG9jYWxEZXBzLmZpbHRlcigoZGVwKSA9PiB0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpLm1hcCgoZm4pID0+IHtcbiAgICBjb25zdCBzdHIgPSBmbi50b1N0cmluZygpO1xuICAgIGlmIChzdHIudHJpbSgpLnN0YXJ0c1dpdGgoXCJmdW5jdGlvblwiKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZSA9IGZuLm5hbWU7XG4gICAgICByZXR1cm4gYGNvbnN0ICR7bmFtZX0gPSAke3N0cn1gO1xuICAgIH1cbiAgfSkuam9pbihcIjtcIik7XG4gIGNvbnN0IGltcG9ydFN0cmluZyA9IGBpbXBvcnRTY3JpcHRzKCR7ZGVwc1N0cmluZ30pO2A7XG4gIHJldHVybiBgJHtkZXBzU3RyaW5nLnRyaW0oKSA9PT0gXCJcIiA/IFwiXCIgOiBpbXBvcnRTdHJpbmd9ICR7ZGVwc0Z1bmN0aW9uU3RyaW5nfWA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdvcmtlckJsb2JVcmwoZm4sIGRlcHMsIGxvY2FsRGVwcykge1xuICBjb25zdCBibG9iQ29kZSA9IGAke2RlcHNQYXJzZXIoZGVwcywgbG9jYWxEZXBzKX07IG9ubWVzc2FnZT0oJHtqb2JSdW5uZXJ9KSgke2ZufSlgO1xuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2Jsb2JDb2RlXSwgeyB0eXBlOiBcInRleHQvamF2YXNjcmlwdFwiIH0pO1xuICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICByZXR1cm4gdXJsO1xufVxuXG5mdW5jdGlvbiB1c2VXZWJXb3JrZXJGbihmbiwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBkZXBlbmRlbmNpZXMgPSBbXSxcbiAgICBsb2NhbERlcGVuZGVuY2llcyA9IFtdLFxuICAgIHRpbWVvdXQsXG4gICAgd2luZG93ID0gZGVmYXVsdFdpbmRvd1xuICB9ID0gb3B0aW9ucztcbiAgY29uc3Qgd29ya2VyID0gcmVmKCk7XG4gIGNvbnN0IHdvcmtlclN0YXR1cyA9IHJlZihcIlBFTkRJTkdcIik7XG4gIGNvbnN0IHByb21pc2UgPSByZWYoe30pO1xuICBjb25zdCB0aW1lb3V0SWQgPSByZWYoKTtcbiAgY29uc3Qgd29ya2VyVGVybWluYXRlID0gKHN0YXR1cyA9IFwiUEVORElOR1wiKSA9PiB7XG4gICAgaWYgKHdvcmtlci52YWx1ZSAmJiB3b3JrZXIudmFsdWUuX3VybCAmJiB3aW5kb3cpIHtcbiAgICAgIHdvcmtlci52YWx1ZS50ZXJtaW5hdGUoKTtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwod29ya2VyLnZhbHVlLl91cmwpO1xuICAgICAgcHJvbWlzZS52YWx1ZSA9IHt9O1xuICAgICAgd29ya2VyLnZhbHVlID0gdm9pZCAwO1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0SWQudmFsdWUpO1xuICAgICAgd29ya2VyU3RhdHVzLnZhbHVlID0gc3RhdHVzO1xuICAgIH1cbiAgfTtcbiAgd29ya2VyVGVybWluYXRlKCk7XG4gIHRyeU9uU2NvcGVEaXNwb3NlKHdvcmtlclRlcm1pbmF0ZSk7XG4gIGNvbnN0IGdlbmVyYXRlV29ya2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsb2JVcmwgPSBjcmVhdGVXb3JrZXJCbG9iVXJsKGZuLCBkZXBlbmRlbmNpZXMsIGxvY2FsRGVwZW5kZW5jaWVzKTtcbiAgICBjb25zdCBuZXdXb3JrZXIgPSBuZXcgV29ya2VyKGJsb2JVcmwpO1xuICAgIG5ld1dvcmtlci5fdXJsID0gYmxvYlVybDtcbiAgICBuZXdXb3JrZXIub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVzb2x2ZSA9ICgpID0+IHtcbiAgICAgIH0sIHJlamVjdCA9ICgpID0+IHtcbiAgICAgIH0gfSA9IHByb21pc2UudmFsdWU7XG4gICAgICBjb25zdCBbc3RhdHVzLCByZXN1bHRdID0gZS5kYXRhO1xuICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgY2FzZSBcIlNVQ0NFU1NcIjpcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgd29ya2VyVGVybWluYXRlKHN0YXR1cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVqZWN0KHJlc3VsdCk7XG4gICAgICAgICAgd29ya2VyVGVybWluYXRlKFwiRVJST1JcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcbiAgICBuZXdXb3JrZXIub25lcnJvciA9IChlKSA9PiB7XG4gICAgICBjb25zdCB7IHJlamVjdCA9ICgpID0+IHtcbiAgICAgIH0gfSA9IHByb21pc2UudmFsdWU7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZWplY3QoZSk7XG4gICAgICB3b3JrZXJUZXJtaW5hdGUoXCJFUlJPUlwiKTtcbiAgICB9O1xuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICB0aW1lb3V0SWQudmFsdWUgPSBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiB3b3JrZXJUZXJtaW5hdGUoXCJUSU1FT1VUX0VYUElSRURcIiksXG4gICAgICAgIHRpbWVvdXRcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBuZXdXb3JrZXI7XG4gIH07XG4gIGNvbnN0IGNhbGxXb3JrZXIgPSAoLi4uZm5BcmdzKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcHJvbWlzZS52YWx1ZSA9IHtcbiAgICAgIHJlc29sdmUsXG4gICAgICByZWplY3RcbiAgICB9O1xuICAgIHdvcmtlci52YWx1ZSAmJiB3b3JrZXIudmFsdWUucG9zdE1lc3NhZ2UoW1suLi5mbkFyZ3NdXSk7XG4gICAgd29ya2VyU3RhdHVzLnZhbHVlID0gXCJSVU5OSU5HXCI7XG4gIH0pO1xuICBjb25zdCB3b3JrZXJGbiA9ICguLi5mbkFyZ3MpID0+IHtcbiAgICBpZiAod29ya2VyU3RhdHVzLnZhbHVlID09PSBcIlJVTk5JTkdcIikge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgXCJbdXNlV2ViV29ya2VyRm5dIFlvdSBjYW4gb25seSBydW4gb25lIGluc3RhbmNlIG9mIHRoZSB3b3JrZXIgYXQgYSB0aW1lLlwiXG4gICAgICApO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgfVxuICAgIHdvcmtlci52YWx1ZSA9IGdlbmVyYXRlV29ya2VyKCk7XG4gICAgcmV0dXJuIGNhbGxXb3JrZXIoLi4uZm5BcmdzKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB3b3JrZXJGbixcbiAgICB3b3JrZXJTdGF0dXMsXG4gICAgd29ya2VyVGVybWluYXRlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVdpbmRvd0ZvY3VzKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IHdpbmRvdyA9IGRlZmF1bHRXaW5kb3cgfSA9IG9wdGlvbnM7XG4gIGlmICghd2luZG93KVxuICAgIHJldHVybiByZWYoZmFsc2UpO1xuICBjb25zdCBmb2N1c2VkID0gcmVmKHdpbmRvdy5kb2N1bWVudC5oYXNGb2N1cygpKTtcbiAgdXNlRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwiYmx1clwiLCAoKSA9PiB7XG4gICAgZm9jdXNlZC52YWx1ZSA9IGZhbHNlO1xuICB9KTtcbiAgdXNlRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgIGZvY3VzZWQudmFsdWUgPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIGZvY3VzZWQ7XG59XG5cbmZ1bmN0aW9uIHVzZVdpbmRvd1Njcm9sbChvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyB3aW5kb3cgPSBkZWZhdWx0V2luZG93LCBiZWhhdmlvciA9IFwiYXV0b1wiIH0gPSBvcHRpb25zO1xuICBpZiAoIXdpbmRvdykge1xuICAgIHJldHVybiB7XG4gICAgICB4OiByZWYoMCksXG4gICAgICB5OiByZWYoMClcbiAgICB9O1xuICB9XG4gIGNvbnN0IGludGVybmFsWCA9IHJlZih3aW5kb3cuc2Nyb2xsWCk7XG4gIGNvbnN0IGludGVybmFsWSA9IHJlZih3aW5kb3cuc2Nyb2xsWSk7XG4gIGNvbnN0IHggPSBjb21wdXRlZCh7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGludGVybmFsWC52YWx1ZTtcbiAgICB9LFxuICAgIHNldCh4Mikge1xuICAgICAgc2Nyb2xsVG8oeyBsZWZ0OiB4MiwgYmVoYXZpb3IgfSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgeSA9IGNvbXB1dGVkKHtcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gaW50ZXJuYWxZLnZhbHVlO1xuICAgIH0sXG4gICAgc2V0KHkyKSB7XG4gICAgICBzY3JvbGxUbyh7IHRvcDogeTIsIGJlaGF2aW9yIH0pO1xuICAgIH1cbiAgfSk7XG4gIHVzZUV2ZW50TGlzdGVuZXIoXG4gICAgd2luZG93LFxuICAgIFwic2Nyb2xsXCIsXG4gICAgKCkgPT4ge1xuICAgICAgaW50ZXJuYWxYLnZhbHVlID0gd2luZG93LnNjcm9sbFg7XG4gICAgICBpbnRlcm5hbFkudmFsdWUgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB9LFxuICAgIHtcbiAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH1cbiAgKTtcbiAgcmV0dXJuIHsgeCwgeSB9O1xufVxuXG5mdW5jdGlvbiB1c2VXaW5kb3dTaXplKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgd2luZG93ID0gZGVmYXVsdFdpbmRvdyxcbiAgICBpbml0aWFsV2lkdGggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG4gICAgaW5pdGlhbEhlaWdodCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcbiAgICBsaXN0ZW5PcmllbnRhdGlvbiA9IHRydWUsXG4gICAgaW5jbHVkZVNjcm9sbGJhciA9IHRydWVcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHdpZHRoID0gcmVmKGluaXRpYWxXaWR0aCk7XG4gIGNvbnN0IGhlaWdodCA9IHJlZihpbml0aWFsSGVpZ2h0KTtcbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cpIHtcbiAgICAgIGlmIChpbmNsdWRlU2Nyb2xsYmFyKSB7XG4gICAgICAgIHdpZHRoLnZhbHVlID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGhlaWdodC52YWx1ZSA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZHRoLnZhbHVlID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgaGVpZ2h0LnZhbHVlID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB1cGRhdGUoKTtcbiAgdHJ5T25Nb3VudGVkKHVwZGF0ZSk7XG4gIHVzZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gIGlmIChsaXN0ZW5PcmllbnRhdGlvbikge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB1c2VNZWRpYVF1ZXJ5KFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIik7XG4gICAgd2F0Y2gobWF0Y2hlcywgKCkgPT4gdXBkYXRlKCkpO1xuICB9XG4gIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbn1cblxuZXhwb3J0IHsgRGVmYXVsdE1hZ2ljS2V5c0FsaWFzTWFwLCBTdG9yYWdlU2VyaWFsaXplcnMsIFRyYW5zaXRpb25QcmVzZXRzLCBjb21wdXRlZEFzeW5jIGFzIGFzeW5jQ29tcHV0ZWQsIGJyZWFrcG9pbnRzQW50RGVzaWduLCBicmVha3BvaW50c0Jvb3RzdHJhcFY1LCBicmVha3BvaW50c01hc3RlckNzcywgYnJlYWtwb2ludHNQcmltZUZsZXgsIGJyZWFrcG9pbnRzUXVhc2FyLCBicmVha3BvaW50c1NlbWF0aWMsIGJyZWFrcG9pbnRzVGFpbHdpbmQsIGJyZWFrcG9pbnRzVnVldGlmeSwgYnJlYWtwb2ludHNWdWV0aWZ5VjIsIGJyZWFrcG9pbnRzVnVldGlmeVYzLCBjbG9uZUZuSlNPTiwgY29tcHV0ZWRBc3luYywgY29tcHV0ZWRJbmplY3QsIGNyZWF0ZUZldGNoLCBjcmVhdGVSZXVzYWJsZVRlbXBsYXRlLCBjcmVhdGVUZW1wbGF0ZVByb21pc2UsIGNyZWF0ZVVucmVmRm4sIGN1c3RvbVN0b3JhZ2VFdmVudE5hbWUsIGRlZmF1bHREb2N1bWVudCwgZGVmYXVsdExvY2F0aW9uLCBkZWZhdWx0TmF2aWdhdG9yLCBkZWZhdWx0V2luZG93LCBleGVjdXRlVHJhbnNpdGlvbiwgZm9ybWF0VGltZUFnbywgZ2V0U1NSSGFuZGxlciwgbWFwR2FtZXBhZFRvWGJveDM2MENvbnRyb2xsZXIsIG9uQ2xpY2tPdXRzaWRlLCBvbktleURvd24sIG9uS2V5UHJlc3NlZCwgb25LZXlTdHJva2UsIG9uS2V5VXAsIG9uTG9uZ1ByZXNzLCBvblN0YXJ0VHlwaW5nLCBzZXRTU1JIYW5kbGVyLCB0ZW1wbGF0ZVJlZiwgdW5yZWZFbGVtZW50LCB1c2VBY3RpdmVFbGVtZW50LCB1c2VBbmltYXRlLCB1c2VBc3luY1F1ZXVlLCB1c2VBc3luY1N0YXRlLCB1c2VCYXNlNjQsIHVzZUJhdHRlcnksIHVzZUJsdWV0b290aCwgdXNlQnJlYWtwb2ludHMsIHVzZUJyb2FkY2FzdENoYW5uZWwsIHVzZUJyb3dzZXJMb2NhdGlvbiwgdXNlQ2FjaGVkLCB1c2VDbGlwYm9hcmQsIHVzZUNsaXBib2FyZEl0ZW1zLCB1c2VDbG9uZWQsIHVzZUNvbG9yTW9kZSwgdXNlQ29uZmlybURpYWxvZywgdXNlQ3NzVmFyLCB1c2VDdXJyZW50RWxlbWVudCwgdXNlQ3ljbGVMaXN0LCB1c2VEYXJrLCB1c2VEZWJvdW5jZWRSZWZIaXN0b3J5LCB1c2VEZXZpY2VNb3Rpb24sIHVzZURldmljZU9yaWVudGF0aW9uLCB1c2VEZXZpY2VQaXhlbFJhdGlvLCB1c2VEZXZpY2VzTGlzdCwgdXNlRGlzcGxheU1lZGlhLCB1c2VEb2N1bWVudFZpc2liaWxpdHksIHVzZURyYWdnYWJsZSwgdXNlRHJvcFpvbmUsIHVzZUVsZW1lbnRCb3VuZGluZywgdXNlRWxlbWVudEJ5UG9pbnQsIHVzZUVsZW1lbnRIb3ZlciwgdXNlRWxlbWVudFNpemUsIHVzZUVsZW1lbnRWaXNpYmlsaXR5LCB1c2VFdmVudEJ1cywgdXNlRXZlbnRMaXN0ZW5lciwgdXNlRXZlbnRTb3VyY2UsIHVzZUV5ZURyb3BwZXIsIHVzZUZhdmljb24sIHVzZUZldGNoLCB1c2VGaWxlRGlhbG9nLCB1c2VGaWxlU3lzdGVtQWNjZXNzLCB1c2VGb2N1cywgdXNlRm9jdXNXaXRoaW4sIHVzZUZwcywgdXNlRnVsbHNjcmVlbiwgdXNlR2FtZXBhZCwgdXNlR2VvbG9jYXRpb24sIHVzZUlkbGUsIHVzZUltYWdlLCB1c2VJbmZpbml0ZVNjcm9sbCwgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIsIHVzZUtleU1vZGlmaWVyLCB1c2VMb2NhbFN0b3JhZ2UsIHVzZU1hZ2ljS2V5cywgdXNlTWFudWFsUmVmSGlzdG9yeSwgdXNlTWVkaWFDb250cm9scywgdXNlTWVkaWFRdWVyeSwgdXNlTWVtb2l6ZSwgdXNlTWVtb3J5LCB1c2VNb3VudGVkLCB1c2VNb3VzZSwgdXNlTW91c2VJbkVsZW1lbnQsIHVzZU1vdXNlUHJlc3NlZCwgdXNlTXV0YXRpb25PYnNlcnZlciwgdXNlTmF2aWdhdG9yTGFuZ3VhZ2UsIHVzZU5ldHdvcmssIHVzZU5vdywgdXNlT2JqZWN0VXJsLCB1c2VPZmZzZXRQYWdpbmF0aW9uLCB1c2VPbmxpbmUsIHVzZVBhZ2VMZWF2ZSwgdXNlUGFyYWxsYXgsIHVzZVBhcmVudEVsZW1lbnQsIHVzZVBlcmZvcm1hbmNlT2JzZXJ2ZXIsIHVzZVBlcm1pc3Npb24sIHVzZVBvaW50ZXIsIHVzZVBvaW50ZXJMb2NrLCB1c2VQb2ludGVyU3dpcGUsIHVzZVByZWZlcnJlZENvbG9yU2NoZW1lLCB1c2VQcmVmZXJyZWRDb250cmFzdCwgdXNlUHJlZmVycmVkRGFyaywgdXNlUHJlZmVycmVkTGFuZ3VhZ2VzLCB1c2VQcmVmZXJyZWRSZWR1Y2VkTW90aW9uLCB1c2VQcmV2aW91cywgdXNlUmFmRm4sIHVzZVJlZkhpc3RvcnksIHVzZVJlc2l6ZU9ic2VydmVyLCB1c2VTY3JlZW5PcmllbnRhdGlvbiwgdXNlU2NyZWVuU2FmZUFyZWEsIHVzZVNjcmlwdFRhZywgdXNlU2Nyb2xsLCB1c2VTY3JvbGxMb2NrLCB1c2VTZXNzaW9uU3RvcmFnZSwgdXNlU2hhcmUsIHVzZVNvcnRlZCwgdXNlU3BlZWNoUmVjb2duaXRpb24sIHVzZVNwZWVjaFN5bnRoZXNpcywgdXNlU3RlcHBlciwgdXNlU3RvcmFnZSwgdXNlU3RvcmFnZUFzeW5jLCB1c2VTdHlsZVRhZywgdXNlU3VwcG9ydGVkLCB1c2VTd2lwZSwgdXNlVGVtcGxhdGVSZWZzTGlzdCwgdXNlVGV4dERpcmVjdGlvbiwgdXNlVGV4dFNlbGVjdGlvbiwgdXNlVGV4dGFyZWFBdXRvc2l6ZSwgdXNlVGhyb3R0bGVkUmVmSGlzdG9yeSwgdXNlVGltZUFnbywgdXNlVGltZW91dFBvbGwsIHVzZVRpbWVzdGFtcCwgdXNlVGl0bGUsIHVzZVRyYW5zaXRpb24sIHVzZVVybFNlYXJjaFBhcmFtcywgdXNlVXNlck1lZGlhLCB1c2VWTW9kZWwsIHVzZVZNb2RlbHMsIHVzZVZpYnJhdGUsIHVzZVZpcnR1YWxMaXN0LCB1c2VXYWtlTG9jaywgdXNlV2ViTm90aWZpY2F0aW9uLCB1c2VXZWJTb2NrZXQsIHVzZVdlYldvcmtlciwgdXNlV2ViV29ya2VyRm4sIHVzZVdpbmRvd0ZvY3VzLCB1c2VXaW5kb3dTY3JvbGwsIHVzZVdpbmRvd1NpemUgfTtcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBFLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgaCwgb3BlbkJsb2NrIGFzIHgsIHdpdGhNb2RpZmllcnMgYXMgYiwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIGMsIGNyZWF0ZVN0YXRpY1ZOb2RlIGFzIFMsIHJlZiBhcyB3LCBjb21wdXRlZCBhcyBrLCBvbk1vdW50ZWQgYXMgXywgd2F0Y2ggYXMgeiwgdW5yZWYgYXMgeSwgbm9ybWFsaXplQ2xhc3MgYXMgVCwgcmVuZGVyU2xvdCBhcyBQLCBjcmVhdGVCbG9jayBhcyBOLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgTCwgdG9EaXNwbGF5U3RyaW5nIGFzIE0gfSBmcm9tIFwidnVlXCI7XG5jb25zdCBZID0geyBjbGFzczogXCJjb250cm9sbFwiIH0sICQgPSB7IGNsYXNzOiBcImNvbnRyb2xsX19pdGVtIGNvbnRyb2xsX19pdGVtLS1jaXJjbGVcIiB9LCBVID0geyBjbGFzczogXCJjb250cm9sbF9fcGFuIGNvbnRyb2xsX19pdGVtLS1jaXJjbGVfX2lubmVyXCIgfSwgWCA9IHsgY2xhc3M6IFwiY29udHJvbGxfX3Bhbl9fdXAgY29udHJvbGxfX2l0ZW0tLWNpcmNsZV9faW5uZXJfX3VwXCIgfSwgVyA9IHsgY2xhc3M6IFwiY29udHJvbGxfX3Bhbl9fcmlnaHQgY29udHJvbGxfX2l0ZW0tLWNpcmNsZV9faW5uZXJfX3JpZ2h0XCIgfSwgaiA9IHsgY2xhc3M6IFwiY29udHJvbGxfX3Bhbl9fZG93biBjb250cm9sbF9faXRlbS0tY2lyY2xlX19pbm5lcl9fZG93blwiIH0sIEggPSB7IGNsYXNzOiBcImNvbnRyb2xsX19wYW5fX2xlZnQgY29udHJvbGxfX2l0ZW0tLWNpcmNsZV9faW5uZXJfX2xlZnRcIiB9LCBJID0geyBjbGFzczogXCJjb250cm9sbF9faG9tZSBjb250cm9sbF9faXRlbSBjb250cm9sbF9faXRlbS0tbGlzdC1pdGVtXCIgfSwgTyA9IHsgY2xhc3M6IFwiY29udHJvbGxfX3pvb20taW4gY29udHJvbGxfX2l0ZW0gY29udHJvbGxfX2l0ZW0tLWxpc3QtaXRlbVwiIH0sIFYgPSB7IGNsYXNzOiBcImNvbnRyb2xsX196b29tLWluIGNvbnRyb2xsX19pdGVtIGNvbnRyb2xsX19pdGVtLS1saXN0LWl0ZW1cIiB9LCBLID0gLyogQF9fUFVSRV9fICovIEUoe1xuICBfX25hbWU6IFwiQ29udHJvbEJ1dHRvbnNcIixcbiAgZW1pdHM6IFtcbiAgICAvLyBcInBhbmRvd25cIiwgXCJwYW51cFwiLCBcInpvb21kb3duXCIsIFwiem9vbXVwXCIsIFwiaG9tZVwiLCBcbiAgICBcImJ1dHRvbmRvd25cIixcbiAgICBcImJ1dHRvbnVwXCJcbiAgXSxcbiAgc2V0dXAodCwgeyBlbWl0OiBpIH0pIHtcbiAgICBjb25zdCBsID0gaTtcbiAgICBmdW5jdGlvbiB1KGEsIGUpIHtcbiAgICAgIGwoXCJidXR0b25kb3duXCIsIHtcbiAgICAgICAga2V5OiBlXG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbihhLCBlKSB7XG4gICAgICBsKFwiYnV0dG9udXBcIiwge1xuICAgICAgICBrZXk6IGVcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKGEsIGUpID0+ICh4KCksIGgoXCJkaXZcIiwge1xuICAgICAgaWQ6IFwidi16b29tYWJsZS1jb250cm9sLWJ0bnNcIixcbiAgICAgIGNsYXNzOiBcImNvbnRyb2xsX19idXR0b25zXCIsXG4gICAgICBvbkRibGNsaWNrOiBlWzMxXSB8fCAoZVszMV0gPSBiKCgpID0+IHtcbiAgICAgIH0sIFtcInN0b3BcIl0pKSxcbiAgICAgIG9uTW91c2Vkb3duOiBlWzMyXSB8fCAoZVszMl0gPSBiKCgpID0+IHtcbiAgICAgIH0sIFtcInN0b3BcIl0pKVxuICAgIH0sIFtcbiAgICAgIGMoXCJ1bFwiLCBZLCBbXG4gICAgICAgIGMoXCJsaVwiLCAkLCBbXG4gICAgICAgICAgYyhcInVsXCIsIFUsIFtcbiAgICAgICAgICAgIGMoXCJsaVwiLCBYLCBbXG4gICAgICAgICAgICAgIGMoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICBvblBvaW50ZXJkb3duOiBlWzBdIHx8IChlWzBdID0gKG8pID0+IHUobywgXCJwYW4tdXBcIikpLFxuICAgICAgICAgICAgICAgIG9uUG9pbnRlcnVwOiBlWzFdIHx8IChlWzFdID0gKG8pID0+IG4obywgXCJwYW4tdXBcIikpLFxuICAgICAgICAgICAgICAgIG9uUG9pbnRlcmNhbmNlbDogZVsyXSB8fCAoZVsyXSA9IChvKSA9PiBuKG8sIFwicGFuLXVwXCIpKSxcbiAgICAgICAgICAgICAgICBvblBvaW50ZXJsZWF2ZTogZVszXSB8fCAoZVszXSA9IChvKSA9PiBuKG8sIFwicGFuLXVwXCIpKSxcbiAgICAgICAgICAgICAgICBvbkNvbnRleHRtZW51OiBlWzRdIHx8IChlWzRdID0gYigoKSA9PiB7XG4gICAgICAgICAgICAgICAgfSwgW1wicHJldmVudFwiXSkpXG4gICAgICAgICAgICAgIH0sIGVbMzNdIHx8IChlWzMzXSA9IFtcbiAgICAgICAgICAgICAgICBjKFwic3ZnXCIsIHtcbiAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWxpbmVjYXBcIjogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgXCJzdHJva2UtbGluZWpvaW5cIjogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXBcIlxuICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgIGMoXCJwb2x5bGluZVwiLCB7IHBvaW50czogXCIxOCAxNSAxMiA5IDYgMTVcIiB9KVxuICAgICAgICAgICAgICAgIF0sIC0xKVxuICAgICAgICAgICAgICBdKSwgMzIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIGMoXCJsaVwiLCBXLCBbXG4gICAgICAgICAgICAgIGMoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICBvblBvaW50ZXJkb3duOiBlWzVdIHx8IChlWzVdID0gKG8pID0+IHUobywgXCJwYW4tcmlnaHRcIikpLFxuICAgICAgICAgICAgICAgIG9uUG9pbnRlcnVwOiBlWzZdIHx8IChlWzZdID0gKG8pID0+IG4obywgXCJwYW4tcmlnaHRcIikpLFxuICAgICAgICAgICAgICAgIG9uUG9pbnRlcmNhbmNlbDogZVs3XSB8fCAoZVs3XSA9IChvKSA9PiBuKG8sIFwicGFuLXJpZ2h0XCIpKSxcbiAgICAgICAgICAgICAgICBvblBvaW50ZXJsZWF2ZTogZVs4XSB8fCAoZVs4XSA9IChvKSA9PiBuKG8sIFwicGFuLXJpZ2h0XCIpKSxcbiAgICAgICAgICAgICAgICBvbkNvbnRleHRtZW51OiBlWzldIHx8IChlWzldID0gYigoKSA9PiB7XG4gICAgICAgICAgICAgICAgfSwgW1wicHJldmVudFwiXSkpXG4gICAgICAgICAgICAgIH0sIGVbMzRdIHx8IChlWzM0XSA9IFtcbiAgICAgICAgICAgICAgICBjKFwic3ZnXCIsIHtcbiAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWxpbmVjYXBcIjogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgXCJzdHJva2UtbGluZWpvaW5cIjogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHRcIlxuICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgIGMoXCJwb2x5bGluZVwiLCB7IHBvaW50czogXCI5IDE4IDE1IDEyIDkgNlwiIH0pXG4gICAgICAgICAgICAgICAgXSwgLTEpXG4gICAgICAgICAgICAgIF0pLCAzMilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgYyhcImxpXCIsIGosIFtcbiAgICAgICAgICAgICAgYyhcImFcIiwge1xuICAgICAgICAgICAgICAgIG9uUG9pbnRlcmRvd246IGVbMTBdIHx8IChlWzEwXSA9IChvKSA9PiB1KG8sIFwicGFuLWRvd25cIikpLFxuICAgICAgICAgICAgICAgIG9uUG9pbnRlcnVwOiBlWzExXSB8fCAoZVsxMV0gPSAobykgPT4gbihvLCBcInBhbi1kb3duXCIpKSxcbiAgICAgICAgICAgICAgICBvblBvaW50ZXJjYW5jZWw6IGVbMTJdIHx8IChlWzEyXSA9IChvKSA9PiBuKG8sIFwicGFuLWRvd25cIikpLFxuICAgICAgICAgICAgICAgIG9uUG9pbnRlcmxlYXZlOiBlWzEzXSB8fCAoZVsxM10gPSAobykgPT4gbihvLCBcInBhbi1kb3duXCIpKSxcbiAgICAgICAgICAgICAgICBvbkNvbnRleHRtZW51OiBlWzE0XSB8fCAoZVsxNF0gPSBiKCgpID0+IHtcbiAgICAgICAgICAgICAgICB9LCBbXCJwcmV2ZW50XCJdKSlcbiAgICAgICAgICAgICAgfSwgZVszNV0gfHwgKGVbMzVdID0gW1xuICAgICAgICAgICAgICAgIGMoXCJzdmdcIiwge1xuICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgXCJzdHJva2UtbGluZWNhcFwiOiBcInJvdW5kXCIsXG4gICAgICAgICAgICAgICAgICBcInN0cm9rZS1saW5lam9pblwiOiBcInJvdW5kXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duXCJcbiAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICBjKFwicG9seWxpbmVcIiwgeyBwb2ludHM6IFwiNiA5IDEyIDE1IDE4IDlcIiB9KVxuICAgICAgICAgICAgICAgIF0sIC0xKVxuICAgICAgICAgICAgICBdKSwgMzIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIGMoXCJsaVwiLCBILCBbXG4gICAgICAgICAgICAgIGMoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICBvblBvaW50ZXJkb3duOiBlWzE1XSB8fCAoZVsxNV0gPSAobykgPT4gdShvLCBcInBhbi1sZWZ0XCIpKSxcbiAgICAgICAgICAgICAgICBvblBvaW50ZXJjYW5jZWw6IGVbMTZdIHx8IChlWzE2XSA9IChvKSA9PiBuKG8sIFwicGFuLWxlZnRcIikpLFxuICAgICAgICAgICAgICAgIG9uUG9pbnRlcnVwOiBlWzE3XSB8fCAoZVsxN10gPSAobykgPT4gbihvLCBcInBhbi1sZWZ0XCIpKSxcbiAgICAgICAgICAgICAgICBvblBvaW50ZXJsZWF2ZTogZVsxOF0gfHwgKGVbMThdID0gKG8pID0+IG4obywgXCJwYW4tbGVmdFwiKSksXG4gICAgICAgICAgICAgICAgb25Db250ZXh0bWVudTogZVsxOV0gfHwgKGVbMTldID0gYigoKSA9PiB7XG4gICAgICAgICAgICAgICAgfSwgW1wicHJldmVudFwiXSkpXG4gICAgICAgICAgICAgIH0sIGVbMzZdIHx8IChlWzM2XSA9IFtcbiAgICAgICAgICAgICAgICBjKFwic3ZnXCIsIHtcbiAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgIFwic3Ryb2tlLWxpbmVjYXBcIjogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgXCJzdHJva2UtbGluZWpvaW5cIjogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdFwiXG4gICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgYyhcInBvbHlsaW5lXCIsIHsgcG9pbnRzOiBcIjE1IDE4IDkgMTIgMTUgNlwiIH0pXG4gICAgICAgICAgICAgICAgXSwgLTEpXG4gICAgICAgICAgICAgIF0pLCAzMilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIGMoXCJsaVwiLCBJLCBbXG4gICAgICAgICAgYyhcImFcIiwge1xuICAgICAgICAgICAgb25Qb2ludGVyZG93bjogZVsyMF0gfHwgKGVbMjBdID0gKG8pID0+IHUobywgXCJob21lXCIpKVxuICAgICAgICAgIH0sIGVbMzddIHx8IChlWzM3XSA9IFtcbiAgICAgICAgICAgIFMoJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1taW5pbWl6ZS0yXCIgZGF0YS12LTNiYTEzOWRlPjxwb2x5bGluZSBwb2ludHM9XCI0IDE0IDEwIDE0IDEwIDIwXCIgZGF0YS12LTNiYTEzOWRlPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cIjIwIDEwIDE0IDEwIDE0IDRcIiBkYXRhLXYtM2JhMTM5ZGU+PC9wb2x5bGluZT48bGluZSB4MT1cIjE0XCIgeTE9XCIxMFwiIHgyPVwiMjFcIiB5Mj1cIjNcIiBkYXRhLXYtM2JhMTM5ZGU+PC9saW5lPjxsaW5lIHgxPVwiM1wiIHkxPVwiMjFcIiB4Mj1cIjEwXCIgeTI9XCIxNFwiIGRhdGEtdi0zYmExMzlkZT48L2xpbmU+PC9zdmc+JywgMSlcbiAgICAgICAgICBdKSwgMzIpXG4gICAgICAgIF0pLFxuICAgICAgICBjKFwibGlcIiwgTywgW1xuICAgICAgICAgIGMoXCJhXCIsIHtcbiAgICAgICAgICAgIG9uUG9pbnRlcmRvd246IGVbMjFdIHx8IChlWzIxXSA9IChvKSA9PiB1KG8sIFwiem9vbS1pblwiKSksXG4gICAgICAgICAgICBvblBvaW50ZXJ1cDogZVsyMl0gfHwgKGVbMjJdID0gKG8pID0+IG4obywgXCJ6b29tLWluXCIpKSxcbiAgICAgICAgICAgIG9uUG9pbnRlcmNhbmNlbDogZVsyM10gfHwgKGVbMjNdID0gKG8pID0+IG4obywgXCJ6b29tLWluXCIpKSxcbiAgICAgICAgICAgIG9uUG9pbnRlcmxlYXZlOiBlWzI0XSB8fCAoZVsyNF0gPSAobykgPT4gbihvLCBcInpvb20taW5cIikpLFxuICAgICAgICAgICAgb25Db250ZXh0bWVudTogZVsyNV0gfHwgKGVbMjVdID0gYigoKSA9PiB7XG4gICAgICAgICAgICB9LCBbXCJwcmV2ZW50XCJdKSlcbiAgICAgICAgICB9LCBlWzM4XSB8fCAoZVszOF0gPSBbXG4gICAgICAgICAgICBTKCc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItem9vbS1pblwiIGRhdGEtdi0zYmExMzlkZT48Y2lyY2xlIGN4PVwiMTFcIiBjeT1cIjExXCIgcj1cIjhcIiBkYXRhLXYtM2JhMTM5ZGU+PC9jaXJjbGU+PGxpbmUgeDE9XCIyMVwiIHkxPVwiMjFcIiB4Mj1cIjE2LjY1XCIgeTI9XCIxNi42NVwiIGRhdGEtdi0zYmExMzlkZT48L2xpbmU+PGxpbmUgeDE9XCIxMVwiIHkxPVwiOFwiIHgyPVwiMTFcIiB5Mj1cIjE0XCIgZGF0YS12LTNiYTEzOWRlPjwvbGluZT48bGluZSB4MT1cIjhcIiB5MT1cIjExXCIgeDI9XCIxNFwiIHkyPVwiMTFcIiBkYXRhLXYtM2JhMTM5ZGU+PC9saW5lPjwvc3ZnPicsIDEpXG4gICAgICAgICAgXSksIDMyKVxuICAgICAgICBdKSxcbiAgICAgICAgYyhcImxpXCIsIFYsIFtcbiAgICAgICAgICBjKFwiYVwiLCB7XG4gICAgICAgICAgICBvblBvaW50ZXJkb3duOiBlWzI2XSB8fCAoZVsyNl0gPSAobykgPT4gdShvLCBcInpvb20tb3V0XCIpKSxcbiAgICAgICAgICAgIG9uUG9pbnRlcnVwOiBlWzI3XSB8fCAoZVsyN10gPSAobykgPT4gbihvLCBcInpvb20tb3V0XCIpKSxcbiAgICAgICAgICAgIG9uUG9pbnRlcmNhbmNlbDogZVsyOF0gfHwgKGVbMjhdID0gKG8pID0+IG4obywgXCJ6b29tLW91dFwiKSksXG4gICAgICAgICAgICBvblBvaW50ZXJsZWF2ZTogZVsyOV0gfHwgKGVbMjldID0gKG8pID0+IG4obywgXCJ6b29tLW91dFwiKSksXG4gICAgICAgICAgICBvbkNvbnRleHRtZW51OiBlWzMwXSB8fCAoZVszMF0gPSBiKCgpID0+IHtcbiAgICAgICAgICAgIH0sIFtcInByZXZlbnRcIl0pKVxuICAgICAgICAgIH0sIGVbMzldIHx8IChlWzM5XSA9IFtcbiAgICAgICAgICAgIGMoXCJzdmdcIiwge1xuICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjRcIixcbiAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgIHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXCIyXCIsXG4gICAgICAgICAgICAgIFwic3Ryb2tlLWxpbmVjYXBcIjogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICBcInN0cm9rZS1saW5lam9pblwiOiBcInJvdW5kXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBcImZlYXRoZXIgZmVhdGhlci16b29tLW91dFwiXG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgIGMoXCJjaXJjbGVcIiwge1xuICAgICAgICAgICAgICAgIGN4OiBcIjExXCIsXG4gICAgICAgICAgICAgICAgY3k6IFwiMTFcIixcbiAgICAgICAgICAgICAgICByOiBcIjhcIlxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgICAgIHgxOiBcIjIxXCIsXG4gICAgICAgICAgICAgICAgeTE6IFwiMjFcIixcbiAgICAgICAgICAgICAgICB4MjogXCIxNi42NVwiLFxuICAgICAgICAgICAgICAgIHkyOiBcIjE2LjY1XCJcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGMoXCJsaW5lXCIsIHtcbiAgICAgICAgICAgICAgICB4MTogXCI4XCIsXG4gICAgICAgICAgICAgICAgeTE6IFwiMTFcIixcbiAgICAgICAgICAgICAgICB4MjogXCIxNFwiLFxuICAgICAgICAgICAgICAgIHkyOiBcIjExXCJcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sIC0xKVxuICAgICAgICAgIF0pLCAzMilcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSwgMzIpKTtcbiAgfVxufSksIEMgPSAodCwgaSkgPT4ge1xuICBjb25zdCBsID0gdC5fX3ZjY09wdHMgfHwgdDtcbiAgZm9yIChjb25zdCBbdSwgbl0gb2YgaSlcbiAgICBsW3VdID0gbjtcbiAgcmV0dXJuIGw7XG59LCBxID0gLyogQF9fUFVSRV9fICovIEMoSywgW1tcIl9fc2NvcGVJZFwiLCBcImRhdGEtdi0zYmExMzlkZVwiXV0pO1xuZnVuY3Rpb24gUigpIHtcbiAgbGV0IHQgPSAwO1xuICBmdW5jdGlvbiBpKHUsIG4sIGEsIGUpIHtcbiAgICB1KCksIHQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0ID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgbigpO1xuICAgICAgfSwgZSk7XG4gICAgfSwgYSk7XG4gIH1cbiAgZnVuY3Rpb24gbCgpIHtcbiAgICB0ICYmICh3aW5kb3cuY2xlYXJJbnRlcnZhbCh0KSwgdCA9IDApO1xuICB9XG4gIHJldHVybiB7XG4gICAgc3RhcnRIb2xkOiBpLFxuICAgIGNsZWFySG9sZDogbFxuICB9O1xufVxuY29uc3QgZyA9IFwiY29udHJvbC1idG5cIjtcbmZ1bmN0aW9uIEEoe1xuICBwcm9wczogdCxcbiAgdHJhbnNmb3JtOiBpXG59KSB7XG4gIGxldCBsID0gUigpO1xuICBmdW5jdGlvbiB1KGQpIHtcbiAgICBsLnN0YXJ0SG9sZChcbiAgICAgICgpID0+IHtcbiAgICAgICAgaS5jaGFuZ2Vab29tKGQgKiB0LmJ1dHRvblpvb21TdGVwICogMC41LCBnKTtcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGkuY2hhbmdlWm9vbShkICogdC5idXR0b25ab29tU3RlcCAqIDAuNSwgZyk7XG4gICAgICB9LFxuICAgICAgMzAwLFxuICAgICAgNTBcbiAgICApO1xuICB9XG4gIGZ1bmN0aW9uIG4oZCkge1xuICAgIGlmICghdC5kaXNhYmxlZClcbiAgICAgIHN3aXRjaCAoZC5rZXkpIHtcbiAgICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgICBvKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ6b29tLWluXCI6XG4gICAgICAgICAgdSgxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInpvb20tb3V0XCI6XG4gICAgICAgICAgdSgtMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwYW4tbGVmdFwiOlxuICAgICAgICAgIGUoeyB4OiAxLCB5OiAwIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicGFuLXJpZ2h0XCI6XG4gICAgICAgICAgZSh7IHg6IC0xLCB5OiAwIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicGFuLXVwXCI6XG4gICAgICAgICAgZSh7IHg6IDAsIHk6IDEgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwYW4tZG93blwiOlxuICAgICAgICAgIGUoeyB4OiAwLCB5OiAtMSB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhKGQpIHtcbiAgICBsLmNsZWFySG9sZCgpO1xuICB9XG4gIGZ1bmN0aW9uIGUoZCkge1xuICAgIGwuc3RhcnRIb2xkKCgpID0+IHtcbiAgICAgIGkuY2hhbmdlUGFuKGQueCAqIHQuYnV0dG9uUGFuU3RlcCwgZC55ICogdC5idXR0b25QYW5TdGVwLCBnKTtcbiAgICB9LCAoKSA9PiB7XG4gICAgICBpLmNoYW5nZVBhbihkLnggKiB0LmJ1dHRvblBhblN0ZXAsIGQueSAqIHQuYnV0dG9uUGFuU3RlcCwgZyk7XG4gICAgfSwgMzAwLCA1MCk7XG4gIH1cbiAgZnVuY3Rpb24gbygpIHtcbiAgICBpLmdvSG9tZShnKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG9uQnV0dG9uRG93bjogbixcbiAgICBvbkJ1dHRvblVwOiBhXG4gIH07XG59XG5mdW5jdGlvbiBGKHtcbiAgcHJvcHM6IHQsXG4gIHRyYW5zZm9ybTogaVxufSkge1xuICBsZXQgbCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcbiAgZnVuY3Rpb24gdShlKSB7XG4gICAgdC5kaXNhYmxlZCB8fCBlLnBvaW50ZXJUeXBlICE9PSBcIm1vdXNlXCIgfHwgIXQubW91c2VFbmFibGVkIHx8IChsID0ge1xuICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgeTogZS5jbGllbnRZXG4gICAgfSwgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIGEsIHsgcGFzc2l2ZTogITEgfSksIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgZnVuY3Rpb24obykge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIGEpO1xuICAgIH0pLCBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmxlYXZlXCIsIGZ1bmN0aW9uKG8pIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCBhKTtcbiAgICB9KSwgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgZnVuY3Rpb24obykge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIGEpO1xuICAgIH0pKTtcbiAgfVxuICBmdW5jdGlvbiBuKGUpIHtcbiAgICBpZiAodC5kaXNhYmxlZCB8fCAhdC5kYmxDbGlja0VuYWJsZWQgfHwgIXQuem9vbUVuYWJsZWQpIHJldHVybjtcbiAgICBjb25zdCBvID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xuICAgIGkuY2hhbmdlWm9vbSh0LmRibENsaWNrWm9vbVN0ZXAsIFwiZGJsQ2xpY2tcIiwgbyk7XG4gIH1cbiAgZnVuY3Rpb24gYShlKSB7XG4gICAgaWYgKHQuZGlzYWJsZWQgfHwgIXQucGFuRW5hYmxlZCB8fCBlLnBvaW50ZXJUeXBlICE9PSBcIm1vdXNlXCIgfHwgIXQubW91c2VFbmFibGVkKSByZXR1cm47XG4gICAgbGV0IG8gPSB7XG4gICAgICB4OiBlLmNsaWVudFggLSBsLngsXG4gICAgICB5OiBlLmNsaWVudFkgLSBsLnlcbiAgICB9O1xuICAgIGkuY2hhbmdlUGFuKG8ueCwgby55LCBlLnBvaW50ZXJUeXBlKSwgbCA9IHtcbiAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgIHk6IGUuY2xpZW50WVxuICAgIH0sIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG9uUG9pbnRlckRvd246IHUsXG4gICAgb25EYmxDbGljazogblxuICB9O1xufVxuZnVuY3Rpb24gRyh7XG4gIHByb3BzOiB0LFxuICB0cmFuc2Zvcm06IGlcbn0pIHtcbiAgbGV0IGwgPSB3KHt9KSwgdSA9IHcoMCksIG4gPSBudWxsO1xuICBmdW5jdGlvbiBhKGQpIHtcbiAgICBpZiAodC5kaXNhYmxlZCB8fCAhdC50b3VjaEVuYWJsZWQgfHwgIXQucGFuRW5hYmxlZCAmJiAhdC56b29tRW5hYmxlZCB8fCAoZC5wcmV2ZW50RGVmYXVsdCgpLCBkLnRvdWNoZXMubGVuZ3RoIDwgMSkpIHJldHVybjtcbiAgICBjb25zdCBzID0gZC50b3VjaGVzLml0ZW0oMCk7XG4gICAgaWYgKCFzKSByZXR1cm47XG4gICAgbGV0IGYgPSAwLCBtID0geyB4OiBzLmNsaWVudFgsIHk6IHMuY2xpZW50WSB9O1xuICAgIGlmIChkLnRvdWNoZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICBjb25zdCByID0gZC50b3VjaGVzLml0ZW0oMSk7XG4gICAgICBsZXQgcCA9IGUoe1xuICAgICAgICB4OiBzID8gcy5jbGllbnRYIDogMCxcbiAgICAgICAgeTogcyA/IHMuY2xpZW50WSA6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgeDogciA/IHIuY2xpZW50WCA6IDAsXG4gICAgICAgIHk6IHIgPyByLmNsaWVudFkgOiAwXG4gICAgICB9KTtcbiAgICAgIHUudmFsdWUgPD0gMCA/ICh1LnZhbHVlID0gcC5kaXN0YW5jZSwgZiA9IDApIDogKGYgPSBwLmRpc3RhbmNlIC8gdS52YWx1ZSAqIGkuem9vbS52YWx1ZSAtIGkuem9vbS52YWx1ZSwgdS52YWx1ZSA9IHAuZGlzdGFuY2UpLCBtID0gcC5jZW50ZXI7XG4gICAgfVxuICAgIGlmICh0Lnpvb21FbmFibGVkICYmIGkuY2hhbmdlWm9vbShmLCBcInRvdWNoXCIsIG0pLCBuID09PSBudWxsKSB7XG4gICAgICBuID0ge1xuICAgICAgICB4OiBtLngsXG4gICAgICAgIHk6IG0ueVxuICAgICAgfTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdiA9IHtcbiAgICAgIHg6IG0ueCAtIG4ueCxcbiAgICAgIHk6IG0ueSAtIG4ueVxuICAgIH07XG4gICAgdC5wYW5FbmFibGVkICYmIGkuY2hhbmdlUGFuKHYueCwgdi55LCBcInRvdWNoXCIpLCBuID0ge1xuICAgICAgeDogbS54LFxuICAgICAgeTogbS55XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBlKGQsIHMpIHtcbiAgICBsZXQgZiA9IE1hdGguc3FydChNYXRoLnBvdyhkLnggLSBzLngsIDIpICsgTWF0aC5wb3coZC55IC0gcy55LCAyKSksIG0gPSB7IHg6IChkLnggKyBzLngpIC8gMiwgeTogKGQueSArIHMueSkgLyAyIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3RhbmNlOiBmLFxuICAgICAgY2VudGVyOiBtXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBvKGQpIHtcbiAgICB0LmRpc2FibGVkIHx8ICF0LnRvdWNoRW5hYmxlZCB8fCAobiA9IG51bGwsIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgYSwgeyBwYXNzaXZlOiAhMSB9KSwgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uKHMpIHtcbiAgICAgIGQudG91Y2hlcy5sZW5ndGggPCAyICYmICh1LnZhbHVlID0gLTEpLCBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGEpO1xuICAgIH0pKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG9uVG91Y2hTdGFydDogbyxcbiAgICB0b3VjaENvdW50OiBrKCgpID0+IE9iamVjdC5rZXlzKGwudmFsdWUpLmxlbmd0aClcbiAgfTtcbn1cbmZ1bmN0aW9uIEooe1xuICBwcm9wczogdCxcbiAgb25DaGFuZ2U6IGksXG4gIGNvbnRhaW5lcjogbCxcbiAgdGFyZ2V0OiB1XG59KSB7XG4gIGNvbnN0IG4gPSB3KHsgeDogMCwgeTogMCB9KSwgYSA9IHcoMCk7XG4gIF8oKCkgPT4ge1xuICAgIGEudmFsdWUgPSB0Lm1pblpvb20sIG4udmFsdWUgPSB7XG4gICAgICB4OiB0LnBhbiAhPSBudWxsID8gdC5wYW4ueCA6IHQuaW5pdGlhbFBhblgsXG4gICAgICB5OiB0LnBhbiAhPSBudWxsID8gdC5wYW4ueSA6IHQuaW5pdGlhbFBhbllcbiAgICB9LCB0Lnpvb20gPyBhLnZhbHVlID0gdC56b29tIDogdC5pbml0aWFsWm9vbSA+PSB0Lm1pblpvb20gJiYgdC5pbml0aWFsWm9vbSA8PSB0Lm1heFpvb20gJiYgKGEudmFsdWUgPSB0LmluaXRpYWxab29tKTtcbiAgfSksIHooXG4gICAgKCkgPT4gdC56b29tLFxuICAgICgpID0+IHtcbiAgICAgIGlzTmFOKHQuem9vbSkgfHwgKGEudmFsdWUgPSB0Lnpvb20pO1xuICAgIH1cbiAgKSwgeihcbiAgICAoKSA9PiB0LnBhbixcbiAgICAoKSA9PiB7XG4gICAgICB0LnBhbiAmJiAobi52YWx1ZS54ID0gdC5wYW4ueCwgbi52YWx1ZS55ID0gdC5wYW4ueSk7XG4gICAgfSxcbiAgICB7IGRlZXA6ICEwIH1cbiAgKTtcbiAgZnVuY3Rpb24gZShzLCBmLCBtKSB7XG4gICAgaWYgKGlzTmFOKHMpIHx8IHMgPT09IDApIHJldHVybjtcbiAgICBjb25zdCB2ID0gYS52YWx1ZTtcbiAgICBsZXQgciA9IGEudmFsdWUgKyBzO1xuICAgIGlmIChyID4gdC5tYXhab29tID8gciA9IHQubWF4Wm9vbSA6IHIgPCB0Lm1pblpvb20gJiYgKHIgPSB0Lm1pblpvb20pLCBNYXRoLmFicyh2IC0gcikgPCAxZS00KSByZXR1cm47XG4gICAgaWYgKGEudmFsdWUgPSByLCB0Lnpvb21PcmlnaW4gPT09IFwiY2VudGVyXCIgJiYgKG0gPSBCKGwudmFsdWUpKSwgdC56b29tT3JpZ2luICE9PSBcImNvbnRlbnQtY2VudGVyXCIpIHtcbiAgICAgIG0gfHwgKG0gPSBCKGwudmFsdWUpKTtcbiAgICAgIGNvbnN0IFogPSBRKGwudmFsdWUsIG4udmFsdWUpLCBEID0ge1xuICAgICAgICB4OiAociAtIHYpICogKChaLnggLSBtLngpIC8gdiksXG4gICAgICAgIHk6IChyIC0gdikgKiAoKFoueSAtIG0ueSkgLyB2KVxuICAgICAgfTtcbiAgICAgIG8oRC54LCBELnksIFwiem9vbVwiKTtcbiAgICB9XG4gICAgbGV0IHAgPSB7XG4gICAgICB6b29tOiByLFxuICAgICAgZGVsdGE6IHtcbiAgICAgICAgem9vbTogcyxcbiAgICAgICAgcGFuOiB7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwYW46IHtcbiAgICAgICAgeDogbi52YWx1ZS54LFxuICAgICAgICB5OiBuLnZhbHVlLnksXG4gICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgZGVsdGFZOiAwXG4gICAgICB9LFxuICAgICAgdHlwZTogZlxuICAgIH07XG4gICAgaShcInpvb21cIiwgcCk7XG4gIH1cbiAgZnVuY3Rpb24gbyhzLCBmLCBtKSB7XG4gICAgaXNOYU4ocykgJiYgKHMgPSAwKSwgaXNOYU4oZikgJiYgKGYgPSAwKSwgbi52YWx1ZSA9IHtcbiAgICAgIHg6IG4udmFsdWUueCArIHMsXG4gICAgICB5OiBuLnZhbHVlLnkgKyBmXG4gICAgfTtcbiAgICBsZXQgdiA9IHtcbiAgICAgIHpvb206IGEudmFsdWUsXG4gICAgICBkZWx0YToge1xuICAgICAgICB6b29tOiAwLFxuICAgICAgICBwYW46IHtcbiAgICAgICAgICB4OiBzLFxuICAgICAgICAgIHk6IGZcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHBhbjoge1xuICAgICAgICB4OiBuLnZhbHVlLngsXG4gICAgICAgIHk6IG4udmFsdWUueSxcbiAgICAgICAgZGVsdGFYOiBzLFxuICAgICAgICBkZWx0YVk6IGZcbiAgICAgIH0sXG4gICAgICB0eXBlOiBtXG4gICAgfTtcbiAgICBpKFwicGFubmVkXCIsIHYpO1xuICB9XG4gIGZ1bmN0aW9uIGQocykge1xuICAgIGEudmFsdWUgPSB0LmluaXRpYWxab29tLCBpKFwiem9vbVwiLCB7XG4gICAgICB6b29tOiBhLnZhbHVlLFxuICAgICAgcGFuOiB7XG4gICAgICAgIHg6IG4udmFsdWUueCxcbiAgICAgICAgeTogbi52YWx1ZS55LFxuICAgICAgICBkZWx0YVg6IDAsXG4gICAgICAgIGRlbHRhWTogMFxuICAgICAgfSxcbiAgICAgIHR5cGU6IHNcbiAgICB9KTtcbiAgICBsZXQgZiA9IHtcbiAgICAgIHg6IHQuaW5pdGlhbFBhblggLSBuLnZhbHVlLngsXG4gICAgICB5OiB0LmluaXRpYWxQYW5ZIC0gbi52YWx1ZS55XG4gICAgfTtcbiAgICBuLnZhbHVlID0ge1xuICAgICAgeDogdC5pbml0aWFsUGFuWCxcbiAgICAgIHk6IHQuaW5pdGlhbFBhbllcbiAgICB9LCBpKFwicGFubmVkXCIsIHtcbiAgICAgIHpvb206IGEudmFsdWUsXG4gICAgICBwYW46IHtcbiAgICAgICAgeDogbi52YWx1ZS54LFxuICAgICAgICB5OiBuLnZhbHVlLnksXG4gICAgICAgIGRlbHRhWDogZi54LFxuICAgICAgICBkZWx0YVk6IGYueVxuICAgICAgfSxcbiAgICAgIHR5cGU6IHNcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHpvb206IGsoKCkgPT4gYS52YWx1ZSksXG4gICAgcGFuOiBrKCgpID0+IG4udmFsdWUpLFxuICAgIHNldFpvb206IChzKSA9PiB7XG4gICAgICBhLnZhbHVlID0gcztcbiAgICB9LFxuICAgIHNldFBhbjogKHMpID0+IHtcbiAgICAgIG4udmFsdWUgPSBzO1xuICAgIH0sXG4gICAgY2hhbmdlWm9vbTogZSxcbiAgICBjaGFuZ2VQYW46IG8sXG4gICAgZ29Ib21lOiBkXG4gIH07XG59XG5mdW5jdGlvbiBCKHQpIHtcbiAgY29uc3QgaSA9IHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgeDogaS5sZWZ0ICsgaS53aWR0aCAvIDIsXG4gICAgeTogaS50b3AgKyBpLmhlaWdodCAvIDJcbiAgfTtcbn1cbmZ1bmN0aW9uIFEodCwgaSkge1xuICBjb25zdCBsID0gQih0KTtcbiAgcmV0dXJuIHtcbiAgICB4OiBsLnggKyBpLngsXG4gICAgeTogbC55ICsgaS55XG4gIH07XG59XG5mdW5jdGlvbiBlZSh7IHByb3BzOiB0LCB0cmFuc2Zvcm06IGkgfSkge1xuICBmdW5jdGlvbiBsKHUpIHtcbiAgICBpZiAodC5kaXNhYmxlZCB8fCAhdC53aGVlbEVuYWJsZWQgfHwgIXQuem9vbUVuYWJsZWQpIHJldHVybjtcbiAgICBjb25zdCBuID0gTWF0aC5hYnModS5kZWx0YVkpID4gMCA/IHUuZGVsdGFZIDogdS5kZWx0YVgsIGEgPSB0LndoZWVsWm9vbVN0ZXAgKiAtMSAqIG4gLyBNYXRoLmFicyhuKSwgZSA9IHsgeDogdS5jbGllbnRYLCB5OiB1LmNsaWVudFkgfTtcbiAgICBpLmNoYW5nZVpvb20oYSwgXCJ3aGVlbFwiLCBlKSwgdS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIHJldHVybiB7XG4gICAgb25XaGVlbDogbFxuICB9O1xufVxuZnVuY3Rpb24gdGUoe1xuICBwcm9wczogdCxcbiAgb25DaGFuZ2U6IGksXG4gIGNvbnRhaW5lcjogbCxcbiAgdGFyZ2V0OiB1XG59KSB7XG4gIGNvbnN0IG4gPSBKKHsgcHJvcHM6IHQsIG9uQ2hhbmdlOiBpLCBjb250YWluZXI6IGwsIHRhcmdldDogdSB9KSwgYSA9IEcoeyBwcm9wczogdCwgdHJhbnNmb3JtOiBuIH0pLCBlID0gZWUoeyBwcm9wczogdCwgdHJhbnNmb3JtOiBuIH0pLCBvID0gRih7IHByb3BzOiB0LCB0cmFuc2Zvcm06IG4gfSksIGQgPSBBKHsgcHJvcHM6IHQsIHRyYW5zZm9ybTogbiB9KTtcbiAgcmV0dXJuIHtcbiAgICB6b29tOiBuLnpvb20sXG4gICAgcGFuOiBuLnBhbixcbiAgICBzZXRab29tOiBuLnNldFpvb20sXG4gICAgc2V0UGFuOiBuLnNldFBhbixcbiAgICBvbldoZWVsOiBlLm9uV2hlZWwsXG4gICAgb25Ub3VjaFN0YXJ0OiBhLm9uVG91Y2hTdGFydCxcbiAgICBvbkJ1dHRvblVwOiBkLm9uQnV0dG9uVXAsXG4gICAgb25CdXR0b25Eb3duOiBkLm9uQnV0dG9uRG93bixcbiAgICBvblBvaW50ZXJEb3duOiBvLm9uUG9pbnRlckRvd24sXG4gICAgb25EYmxDbGljazogby5vbkRibENsaWNrXG4gIH07XG59XG5jb25zdCBuZSA9IC8qIEBfX1BVUkVfXyAqLyBFKHtcbiAgX19uYW1lOiBcIlZ1ZVpvb21hYmxlXCIsXG4gIHByb3BzOiB7XG4gICAgem9vbToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgcGFuOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBzZWxlY3Rvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCIqID4gKlwiXG4gICAgfSxcbiAgICBtYXhab29tOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAzXG4gICAgfSxcbiAgICBtaW5ab29tOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwLjVcbiAgICB9LFxuICAgIGluaXRpYWxQYW5YOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBpbml0aWFsUGFuWToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgaW5pdGlhbFpvb206IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDAuNVxuICAgIH0sXG4gICAgZGJsQ2xpY2tab29tU3RlcDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMC40XG4gICAgfSxcbiAgICB3aGVlbFpvb21TdGVwOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwLjRcbiAgICB9LFxuICAgIHBhbkVuYWJsZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMFxuICAgIH0sXG4gICAgem9vbUVuYWJsZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMFxuICAgIH0sXG4gICAgbW91c2VFbmFibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogITBcbiAgICB9LFxuICAgIHRvdWNoRW5hYmxlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6ICEwXG4gICAgfSxcbiAgICBkYmxDbGlja0VuYWJsZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMFxuICAgIH0sXG4gICAgd2hlZWxFbmFibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogITBcbiAgICB9LFxuICAgIGVuYWJsZUNvbnRyb2xCdXR0b246IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMFxuICAgIH0sXG4gICAgYnV0dG9uUGFuU3RlcDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMTVcbiAgICB9LFxuICAgIGJ1dHRvblpvb21TdGVwOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwLjFcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogITFcbiAgICB9LFxuICAgIHpvb21PcmlnaW46IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwicG9pbnRlclwiXG4gICAgfVxuICB9LFxuICBlbWl0czogW1wicGFubmVkXCIsIFwiem9vbVwiLCBcInVwZGF0ZTp6b29tXCIsIFwidXBkYXRlOnBhblwiXSxcbiAgc2V0dXAodCwgeyBlbWl0OiBpIH0pIHtcbiAgICBsZXQgbCA9IGksIHUgPSB0LCBuID0gdygpLCBhID0gaygoKSA9PiB7XG4gICAgICB2YXIgZjtcbiAgICAgIHJldHVybiAoZiA9IG4udmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBmLnF1ZXJ5U2VsZWN0b3IodS5zZWxlY3Rvcik7XG4gICAgfSksIGUgPSB0ZSh7IHByb3BzOiB1LCBvbkNoYW5nZTogbywgY29udGFpbmVyOiBuLCB0YXJnZXQ6IGEgfSk7XG4gICAgZnVuY3Rpb24gbyhmLCBtKSB7XG4gICAgICBmID09PSBcInpvb21cIiA/IGwoXCJ1cGRhdGU6em9vbVwiLCBtLnpvb20pIDogZiA9PT0gXCJwYW5uZWRcIiAmJiBsKFwidXBkYXRlOnBhblwiLCBtLnBhbiksIGwoZiwgbSk7XG4gICAgfVxuICAgIGxldCBkID0gaygoKSA9PiBgdHJhbnNsYXRlKCR7ZS5wYW4udmFsdWUueH1weCwgJHtlLnBhbi52YWx1ZS55fXB4KSBzY2FsZSgke2Uuem9vbS52YWx1ZX0pYCk7XG4gICAgZnVuY3Rpb24gcygpIHtcbiAgICAgIGEudmFsdWUgJiYgKGEudmFsdWUuc3R5bGUudHJhbnNmb3JtID0gZC52YWx1ZSwgYS52YWx1ZS5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcImNlbnRlciBjZW50ZXJcIiwgYS52YWx1ZS5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMC4wN3MgZWFzZS1vdXRcIiwgYS52YWx1ZS5zdHlsZS50cmFuc2Zvcm1Cb3ggPSBcImZpbGwtYm94XCIpO1xuICAgIH1cbiAgICByZXR1cm4geihcbiAgICAgIGQsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHMoKTtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZsdXNoOiBcInBvc3RcIlxuICAgICAgfVxuICAgICksIF8oKCkgPT4ge1xuICAgICAgcygpO1xuICAgIH0pLCAoZiwgbSkgPT4gKHgoKSwgaChcImRpdlwiLCB7XG4gICAgICByZWZfa2V5OiBcImNvbnRhaW5lclwiLFxuICAgICAgcmVmOiBuLFxuICAgICAgY2xhc3M6IFQoZi4kc3R5bGUuY29udGFpbmVyKSxcbiAgICAgIG9uRGJsY2xpY2s6IG1bMF0gfHwgKG1bMF0gPSAvL0B0cy1pZ25vcmVcbiAgICAgICguLi52KSA9PiB5KGUpLm9uRGJsQ2xpY2sgJiYgeShlKS5vbkRibENsaWNrKC4uLnYpKSxcbiAgICAgIG9uUG9pbnRlcmRvd246IG1bMV0gfHwgKG1bMV0gPSAvL0B0cy1pZ25vcmVcbiAgICAgICguLi52KSA9PiB5KGUpLm9uUG9pbnRlckRvd24gJiYgeShlKS5vblBvaW50ZXJEb3duKC4uLnYpKSxcbiAgICAgIG9uV2hlZWw6IG1bMl0gfHwgKG1bMl0gPSAvL0B0cy1pZ25vcmVcbiAgICAgICguLi52KSA9PiB5KGUpLm9uV2hlZWwgJiYgeShlKS5vbldoZWVsKC4uLnYpKSxcbiAgICAgIG9uVG91Y2hzdGFydDogbVszXSB8fCAobVszXSA9IC8vQHRzLWlnbm9yZVxuICAgICAgKC4uLnYpID0+IHkoZSkub25Ub3VjaFN0YXJ0ICYmIHkoZSkub25Ub3VjaFN0YXJ0KC4uLnYpKVxuICAgIH0sIFtcbiAgICAgIFAoZi4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdm9pZCAwLCAhMCksXG4gICAgICBQKGYuJHNsb3RzLCBcImJ1dHRvbnNcIiwge30sICgpID0+IFtcbiAgICAgICAgeSh1KS5lbmFibGVDb250cm9sQnV0dG9uID8gKHgoKSwgTihxLCB7XG4gICAgICAgICAga2V5OiAwLFxuICAgICAgICAgIG9uQnV0dG9uZG93bjogeShlKS5vbkJ1dHRvbkRvd24sXG4gICAgICAgICAgb25CdXR0b251cDogeShlKS5vbkJ1dHRvblVwXG4gICAgICAgIH0sIG51bGwsIDgsIFtcIm9uQnV0dG9uZG93blwiLCBcIm9uQnV0dG9udXBcIl0pKSA6IEwoXCJcIiwgITApXG4gICAgICBdLCAhMClcbiAgICBdLCAzNCkpO1xuICB9XG59KSwgb2UgPSBcIl9jb250YWluZXJfaXJkdmNfMlwiLCBsZSA9IFwiX2J1dHRvbnNfaXJkdmNfMTFcIiwgaWUgPSB7XG4gIGNvbnRhaW5lcjogb2UsXG4gIGJ1dHRvbnM6IGxlXG59LCBhZSA9IHtcbiAgJHN0eWxlOiBpZVxufSwgbWUgPSAvKiBAX19QVVJFX18gKi8gQyhuZSwgW1tcIl9fY3NzTW9kdWxlc1wiLCBhZV0sIFtcIl9fc2NvcGVJZFwiLCBcImRhdGEtdi1mY2U3ZDUwMVwiXV0pLCB1ZSA9IHsga2V5OiAwIH0sIHJlID0geyBrZXk6IDEgfSwgc2UgPSAvKiBAX19QVVJFX18gKi8gRSh7XG4gIF9fbmFtZTogXCJTY3JvbGxPdmVybGF5XCIsXG4gIHByb3BzOiB7XG4gICAgZW5hYmxlVG91Y2hMb2NrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogITBcbiAgICB9LFxuICAgIGVuYWJsZVdoZWVsTG9jazoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6ICEwXG4gICAgfSxcbiAgICB3aGVlbFVubG9ja0tleToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJDb250cm9sXCJcbiAgICB9XG4gIH0sXG4gIHNldHVwKHQpIHtcbiAgICBjb25zdCBpID0gdCwgbCA9IHcoITEpLCB1ID0gdygvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKSwgbiA9IHcoITEpLCBhID0gdygpO1xuICAgIGxldCBlID0gbnVsbDtcbiAgICBfKCgpID0+IHtcbiAgICAgIHZhciByO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgbSksIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB2KSwgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHMpLCBlID0gKHIgPSBhLnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogci5xdWVyeVNlbGVjdG9yKFwiI3Ytem9vbWFibGUtY29udHJvbC1idG5zXCIpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIG8ocikge1xuICAgICAgaWYgKHUudmFsdWUuaGFzKGkud2hlZWxVbmxvY2tLZXkpKSB7XG4gICAgICAgIHIucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbi52YWx1ZSA9ICExLCBsLnZhbHVlID0gITAsIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsLnZhbHVlID0gITE7XG4gICAgICB9LCAxZTMpLCByLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkKHIpIHtcbiAgICAgIGlmIChlICYmIGUuY29udGFpbnMoci50YXJnZXQpKSB7XG4gICAgICAgIHIucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbi52YWx1ZSA9ICEwLCBsLnZhbHVlID0gci50b3VjaGVzLmxlbmd0aCA8IDIsIGwudmFsdWUgfHwgci5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzKHIpIHtcbiAgICAgIHIudG91Y2hlcy5sZW5ndGggPiAwIHx8IChsLnZhbHVlID0gITEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmKHIpIHtcbiAgICAgIGlmIChlICYmIGUuY29udGFpbnMoci50YXJnZXQpKSB7XG4gICAgICAgIHIucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgci5wb2ludGVyVHlwZSA9PT0gXCJtb3VzZVwiICYmIChuLnZhbHVlID0gITEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtKHIpIHtcbiAgICAgIHUudmFsdWUuYWRkKHIua2V5KSwgdS52YWx1ZS5oYXMoaS53aGVlbFVubG9ja0tleSkgJiYgKGwudmFsdWUgPSAhMSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHYocikge1xuICAgICAgdS52YWx1ZS5kZWxldGUoci5rZXkpO1xuICAgIH1cbiAgICByZXR1cm4gKHIsIHApID0+ICh4KCksIGgoXCJkaXZcIiwge1xuICAgICAgcmVmX2tleTogXCJjb250YWluZXJcIixcbiAgICAgIHJlZjogYSxcbiAgICAgIGNsYXNzOiBcImNvbnRhaW5lclwiLFxuICAgICAgb25XaGVlbENhcHR1cmU6IG8sXG4gICAgICBvblBvaW50ZXJkb3duOiBmLFxuICAgICAgb25Ub3VjaHN0YXJ0OiBkXG4gICAgfSwgW1xuICAgICAgUChyLiRzbG90cywgXCJkZWZhdWx0XCIsIHsgZGlzYWJsZUludGVyYWN0aW9uOiBsLnZhbHVlIH0sIHZvaWQgMCwgITApLFxuICAgICAgUChyLiRzbG90cywgXCJvdmVybGF5XCIsIHsgY2xhc3M6IFwiXCIgfSwgKCkgPT4gW1xuICAgICAgICBjKFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzczogVChbXCJvdmVybGF5XCIsIHsgaGlkZGVuOiAhbC52YWx1ZSB9XSlcbiAgICAgICAgfSwgW1xuICAgICAgICAgIG4udmFsdWUgPyAoeCgpLCBoKFwicFwiLCB1ZSwgXCJVc2UgdHdvIGZpbmdlcnMgdG8gcGFuXCIpKSA6ICh4KCksIGgoXCJwXCIsIHJlLCBcIlVzZSAnXCIgKyBNKGkud2hlZWxVbmxvY2tLZXkpICsgXCInICsgJ3Njcm9sbCcgdG8gem9vbVwiLCAxKSlcbiAgICAgICAgXSwgMilcbiAgICAgIF0sICEwKVxuICAgIF0sIDU0NCkpO1xuICB9XG59KSwgY2UgPSAvKiBAX19QVVJFX18gKi8gQyhzZSwgW1tcIl9fc2NvcGVJZFwiLCBcImRhdGEtdi03OTUyZDM2ZlwiXV0pO1xuZXhwb3J0IHtcbiAgY2UgYXMgU2Nyb2xsT3ZlcmxheSxcbiAgbWUgYXMgVnVlWm9vbWFibGUsXG4gIG1lIGFzIGRlZmF1bHRcbn07XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiY29udGFpbmVyXCJcbiAgICAgICA6Y2xhc3M9XCJbICdzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jb250YWluZXInLCBgc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktJHtjYXRlZ29yeUlkfWAgXVwiXG4gICAgICAgOmRhdGEtc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJjYXRlZ29yeUlkXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnlcIlxuICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IGNhdGVnb3J5LmNvbG9yIHx8ICd0cmFuc3BhcmVudCcgfVwiXG4gICAgICAgICB2LWlmPVwiY2F0ZWdvcnlcIlxuICAgICAgICAgOmRhdGEtc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJjYXRlZ29yeUlkXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlblwiPlxuICAgICAgICA8ZGl2IHYtZm9yPVwiYyBpbiBjYXRlZ29yeS5jaGlsZHJlblwiIDprZXk9XCJjLmlkXCI+XG4gICAgICAgICAgPFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXdcbiAgICAgICAgICAgIDpjYXRlZ29yeUlkPVwiYy5pZFwiPlxuICAgICAgICAgIDwvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlPdmVydmlldz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uXCI+XG4gICAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uXG4gICAgICAgICAgOnR5cGU9XCJjYXRlZ29yeS5hYnN0cmFjdGlvblR5cGVcIlxuICAgICAgICAgIDpjaGlsZHJlbkNvdW50PVwiY2F0ZWdvcnkuY2hpbGRyZW4ubGVuZ3RoXCI+XG4gICAgICAgICAgIDwvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyXCI+XG4gICAgICAgIDxEcmFnRWxlbWVudFxuICAgICAgICAgIHR5cGU9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5XCJcbiAgICAgICAgICA6ZGF0YT1cImNhdGVnb3J5Lm5hbWVcIj5cbiAgICAgICAgICA8c3BhbiA6dGl0bGU9XCJjYXRlZ29yeS5uYW1lXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWVcIj5cbiAgICAgICAgICAgIHt7IGNhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvRHJhZ0VsZW1lbnQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICB2LWlmPVwiY2F0ZWdvcnkucGFyZW50SWRcIlxuICAgICAgICBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWZpbGxlclwiXG4gICAgICAgID5cbiAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uIDpjaGlsZHJlbkNvdW50PVwiMVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gIGltcG9ydCBEcmFnRWxlbWVudCBmcm9tICcuL0RyYWdFbGVtZW50LnZ1ZSdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24gZnJvbSAnLi9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBjYXRlZ29yeUlkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxuICAgICAgbGF5b3V0OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJ2ZXJ0aWNhbFwiIH1cbiAgfSlcblxuICBjb25zdCBjYXRlZ29yeSA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQpKVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB7XG4gICAgICAgbWFyZ2luOiAwO1xuICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgIGZsZXg6IDE7XG4gICAgICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogdmFyKC0tb3ZlcnZpZXctaGVpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgfVxuICAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWUge1xuICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb24sXG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXIge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IGNhbGModmFyKC0tb3ZlcnZpZXctaGVpZ2h0KSArIDJweCk7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgaGVpZ2h0OiAtbW96LWF2YWlsYWJsZTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyIHtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1vdmVydmlldy1oZWlnaHQpICsgMnB4KTtcbiAgICAgIGZsZXg6IDE7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNtb2RlbC1vdmVydmlld1wiXG4gICAgICAgdi1pZj1cIm1vZGVsXCJcbiAgICAgICA6ZGF0YS1zcGVjaWZpY3N5bmNocm9uaWNtb2RlbD1cIm1vZGVsSWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljbW9kZWwtY2F0ZWdvcmllc1wiPlxuICAgICAgPFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXdcbiAgICAgICAgdi1mb3I9XCJjIGluIG1vZGVsLmNhdGVnb3JpZXNcIlxuICAgICAgICA6a2V5PVwiYy5pZFwiXG4gICAgICAgIDpjYXRlZ29yeUlkPVwiYy5pZFwiPlxuICAgICAgPC9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1pZj1cImlzRW1wdHlcIj5cbiAgICAgIEVtcHR5IG1vZGVsXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXcgZnJvbSAnLi9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3LnZ1ZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBtb2RlbElkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogbnVsbCB9XG4gIH0pXG5cbiAgY29uc3QgbW9kZWwgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5nZXRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbChwcm9wcy5tb2RlbElkKSlcblxuICBjb25zdCBpc0VtcHR5ID0gY29tcHV0ZWQoKCkgPT4gbW9kZWwudmFsdWUgJiYgISBtb2RlbC52YWx1ZS5jYXRlZ29yaWVzKVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiY29udGFpbmVyXCJcbiAgICAgICA6Y2xhc3M9XCJbICdtb21lbnQtY29udGFpbmVyJywgYG1vbWVudC0ke21vbWVudElkfWAsIHsgJ2hpZ2hsaWdodGVkJzogbW9tZW50SWQgPT09IGhpZ2hsaWdodGVkTW9tZW50SWQgfSBdXCJcbiAgICAgICA6ZGF0YS1tb21lbnQ9XCJtb21lbnRJZFwiPlxuXG4gICAgPERyb3Bab25lIGRhdGE9XCJiZWZvcmVcIlxuICAgICAgICAgICAgICBjbGFzcz1cImVtcHR5LXBhZGRpbmdcIlxuICAgICAgICAgICAgICB0eXBlcz1cInVwbXQvbW9tZW50IHVwbXQvc2VsZWN0aW9uIHVwbXQvZGVzY3JpcHRlbSB1cG10L2Fubm90YXRpb25cIlxuICAgICAgICAgICAgICBAbW9tZW50PVwiZHJvcHBlZE5ld01vbWVudFwiXG4gICAgICAgICAgICAgIEBhbm5vdGF0aW9uPVwiZHJvcHBlZENyZWF0aW5nQW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgIEBzZWxlY3Rpb249XCJkcm9wcGVkQ3JlYXRpbmdTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICBAZGVzY3JpcHRlbT1cImRyb3BwZWRDcmVhdGluZ0Rlc2NyaXB0ZW1cIj5cbiAgICAgIDxxLWJ0blxuICAgICAgICBmbGF0XG4gICAgICAgIGRlbnNlXG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIGNsYXNzPVwibmV3LW1vbWVudC1idXR0b25cIlxuICAgICAgICBpY29uPVwibWRpLXBsdXNcIlxuICAgICAgICBAY2xpY2s9XCJkcm9wcGVkQ3JlYXRpbmdTZWxlY3Rpb24oJ3t9JywgJ2JlZm9yZScpXCJcbiAgICAgICAgPlxuICAgICAgICA8cS10b29sdGlwPkNyZWF0ZSBhIG5ldyBtb21lbnQgaGVyZTwvcS10b29sdGlwPlxuICAgICAgPC9xLWJ0bj5cbiAgICA8L0Ryb3Bab25lPlxuXG4gICAgPGRpdiA6Y2xhc3M9XCJbICdtb21lbnQnLCB7ICd0cmFuc2l0aW9uYWwnOiBtb21lbnQuaXNUcmFuc2l0aW9uYWwgfSBdXCJcbiAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBtb21lbnQuY29sb3IgfHwgJ3RyYW5zcGFyZW50JyB9XCJcbiAgICAgICAgIHYtaWY9XCJtb21lbnRcIlxuICAgICAgICAgOmRhdGEtbW9tZW50PVwibW9tZW50LmlkXCI+XG5cbiAgICAgIDxEcm9wWm9uZSBkYXRhPVwiaGVhZGVyXCJcbiAgICAgICAgICAgICAgICB0eXBlcz1cInVwbXQvZGVzY3JpcHRlbSB1cG10L2Fubm90YXRpb24gdXBtdC9zZWxlY3Rpb24gdXBtdC9jb2xvciB1cG10L3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5IHVwbXQvZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeSB1cG10L3NwZWNpZmljc3luY2hyb25pY21vZGVsIHVwbXQvZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeSB1cG10L21vbWVudFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBqdXN0aWZ5LWNlbnRlciBtb21lbnQtaGVhZGVyIHEtcGEteHNcIlxuICAgICAgICAgICAgICAgIEBhbm5vdGF0aW9uPVwiZHJvcHBlZEFubm90YXRpb25cIlxuICAgICAgICAgICAgICAgIEBtb21lbnQ9XCJkcm9wcGVkTW9tZW50XCJcbiAgICAgICAgICAgICAgICBAc2VsZWN0aW9uPVwiZHJvcHBlZFNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgQGRlc2NyaXB0ZW09XCJkcm9wcGVkRGVzY3JpcHRlbVwiXG4gICAgICAgICAgICAgICAgQHNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5PVwiZHJvcHBlZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICBAZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeT1cImRyb3BwZWRHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICBAc3BlY2lmaWNzeW5jaHJvbmljbW9kZWw9XCJkcm9wcGVkU3BlY2lmaWNTeW5jaHJvbmljTW9kZWxcIlxuICAgICAgICAgICAgICAgIEBnZW5lcmljZGlhY2hyb25pY2NhdGVnb3J5PVwiZHJvcHBlZEdlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgIEBjb2xvcj1cImRyb3BwZWRDb2xvclwiPlxuICAgICAgICA8Y3VzdG9tLWV4cGFuc2lvbi1pdGVtXG4gICAgICAgICAgY2xhc3M9XCJtb21lbnQtYm9keSBwYS1tZC14cyByZWxhdGl2ZS1wb3NpdGlvblwiXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBkZW5zZS10b2dnbGVcbiAgICAgICAgICA6ZHVyYXRpb249XCIwXCJcbiAgICAgICAgICBleHBhbmQtaWNvbi10b2dnbGVcbiAgICAgICAgICBzd2l0Y2gtdG9nZ2xlLXNpZGVcbiAgICAgICAgICB2LW1vZGVsPVwiZXhwYW5kXCJcbiAgICAgICAgICBoZWFkZXItY2xhc3M9XCJoZWFkZXItY2xhc3MgcS1wYS14c1wiXG4gICAgICAgICAgZXhwYW5kLWljb24tY2xhc3M9XCJpY29uLWNsYXNzIHEtcGEteHNcIlxuICAgICAgICAgIDp0aXRsZT1cIm1vbWVudC5ub3RlXCJcbiAgICAgICAgICA+XG5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmhlYWRlcj5cbiAgICAgICAgICAgIDxEcmFnRWxlbWVudFxuICAgICAgICAgICAgICB0eXBlPVwibW9tZW50XCJcbiAgICAgICAgICAgICAgOmRhdGE9XCJtb21lbnRJZFwiXG4gICAgICAgICAgICAgIEBjbGljay5tZXRhPVwiZGVidWdcIj5cbiAgICAgICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiaGlnaGxpZ2h0VG9nZ2xlXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWRpLWFscGhhLWQtYm94LW91dGxpbmVcIj5cbiAgICAgICAgICAgICAgPC9xLWljb24+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9tZW50LW5hbWVcIj57eyBtb21lbnROYW1lIH19XG4gICAgICAgICAgICAgICAgPHEtcG9wdXAtZWRpdCB2LW1vZGVsPVwibW9tZW50TmFtZVwiIGF1dG8tc2F2ZSB2LXNsb3Q9XCJzY29wZVwiPlxuICAgICAgICAgICAgICAgICAgPE1vbWVudE5hbWVJbnB1dCBAY2hhbmdlPVwic2NvcGUuY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1vbWVudD1cIm1vbWVudFwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvRHJhZ0VsZW1lbnQ+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgdi1pZj1cIm1vbWVudC5nZW5lcmljZGlhY2hyb25pY2NhdGVnb3JpZXMubGVuZ3RoXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBpY29uPVwibWRpLWFscGhhLWQtYm94XCI+XG4gICAgICAgICAgICAgIDxxLW1lbnUgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICB2LWZvcj1cImNhdGVnb3J5IGluIG1vbWVudC5nZW5lcmljZGlhY2hyb25pY2NhdGVnb3JpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCByb3cganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiY2F0ZWdvcnkuaWRcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJjYXRlZ29yeS5mdWxsTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBjYXRlZ29yeS5jb2xvciB8fCAndHJhbnNwYXJlbnQnIH1cIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgZGVuc2U+XG4gICAgICAgICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJtZGktZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZW1vdmUgY2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgICA8Tm90ZUljb25cbiAgICAgICAgICAgICAgOmVsZW1lbnQ9XCJtb21lbnRcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW1lbnQtdG9vbGJhciBvbi1uYW1lLWhvdmVyXCI+XG4gICAgICAgICAgICAgIDxDb2xvcml6ZUljb25cbiAgICAgICAgICAgICAgICBjbGFzcz1cIm9uLW5hbWUtaG92ZXJcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtb21lbnRDb2xvclwiIC8+XG4gICAgICAgICAgICAgIDxFbGVtZW50TWVudVxuICAgICAgICAgICAgICAgIDphY3Rpb25zPVwibWVudUFjdGlvbnNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb21lbnQtanVzdGlmaWNhdGlvblwiPlxuICAgICAgICAgICAgPEp1c3RpZmljYXRpb25SZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICB2LWlmPVwibW9tZW50XCJcbiAgICAgICAgICAgICAgOmp1c3RpZmljYXRpb25JZD1cIm1vbWVudC5qdXN0aWZpY2F0aW9uPy5pZCA/PyAnJ1wiPlxuICAgICAgICAgICAgPC9KdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9tZW50LXN5bmNocm9uaWMtc3BlY2lmaWMtbW9kZWwgZmxleCByb3dcIlxuICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnbW9tZW50LXN5bmNocm9uaWMtc3BlY2lmaWMtbW9kZWwtZWRpdGVkJzogaXNFZGl0ZWRNb2RlbCB9XCI+XG4gICAgICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljTW9kZWxPdmVydmlld1xuICAgICAgICAgICAgICBAY2xpY2s9XCJlZGl0TW9kZWwobW9tZW50LnNwZWNpZmljc3luY2hyb25pY21vZGVsPy5pZCB8fCAnJylcIlxuICAgICAgICAgICAgICA6bW9kZWxJZD1cIm1vbWVudD8uc3BlY2lmaWNzeW5jaHJvbmljbW9kZWw/LmlkID8/ICcnXCI+XG4gICAgICAgICAgICA8L1NwZWNpZmljU3luY2hyb25pY01vZGVsT3ZlcnZpZXc+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxEcmFnRWxlbWVudFxuICAgICAgICAgICAgdHlwZT1cInNwZWNpZmljc3luY2hyb25pY21vZGVsXCJcbiAgICAgICAgICAgIDpkYXRhPVwibW9tZW50LnNwZWNpZmljc3luY2hyb25pY21vZGVsPy5pZCB8fCAnJ1wiXG4gICAgICAgICAgICBAY2xpY2subWV0YT1cImRlYnVnXCI+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICB2LWlmPVwibW9tZW50XCJcbiAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJFZGl0IHNwZWNpZmljIHN5bmNocm9uaWMgbW9kZWxcIlxuICAgICAgICAgICAgICBjbGFzcz1cImFic29sdXRlLWJvdHRvbS1sZWZ0XCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiZWRpdE1vZGVsKG1vbWVudC5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbD8uaWQgfHwgJycpXCJcbiAgICAgICAgICAgICAgaWNvbj1cIm1kaS1ncmFwaC1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgbm8tY2Fwcz5cbiAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgPC9EcmFnRWxlbWVudD5cblxuICAgICAgICA8L2N1c3RvbS1leHBhbnNpb24taXRlbT5cbiAgICAgIDwvRHJvcFpvbmU+XG5cbiAgICAgIDxkaXYgOmNsYXNzPVwiWyAnbW9tZW50LWNoaWxkcmVuJywgJ2hvcml6b250YWwnIF1cIj5cbiAgICAgICAgPGRpdiB2LWZvcj1cIm0gaW4gbW9tZW50LmNoaWxkcmVuXCIgOmtleT1cIm0uaWRcIj5cbiAgICAgICAgICA8TW9tZW50UmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIDpnZW5lcmljR3JhcGhzPVwiZ2VuZXJpY0dyYXBoc1wiXG4gICAgICAgICAgICA6bW9tZW50SWQ9XCJtLmlkXCI+XG4gICAgICAgICAgPC9Nb21lbnRSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPERyb3Bab25lIDpkYXRhPVwiYGluOiR7bW9tZW50SWR9YFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cIiEgbW9tZW50LmNoaWxkcmVuLmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlbXB0eS1wYWRkaW5nXCJcbiAgICAgICAgICAgICAgICB0eXBlcz1cInVwbXQvbW9tZW50IHVwbXQvc2VsZWN0aW9uIHVwbXQvZGVzY3JpcHRlbSB1cG10L2Fubm90YXRpb25cIlxuICAgICAgICAgICAgICAgIEBtb21lbnQ9XCJkcm9wcGVkTmV3TW9tZW50XCJcbiAgICAgICAgICAgICAgICBAYW5ub3RhdGlvbj1cImRyb3BwZWRDcmVhdGluZ0Fubm90YXRpb25cIlxuICAgICAgICAgICAgICAgIEBzZWxlY3Rpb249XCJkcm9wcGVkQ3JlYXRpbmdTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIEBkZXNjcmlwdGVtPVwiZHJvcHBlZENyZWF0aW5nRGVzY3JpcHRlbVwiPlxuICAgICAgPC9Ecm9wWm9uZT5cbiAgICA8L2Rpdj5cblxuICAgIDxEcm9wWm9uZSBkYXRhPVwiYWZ0ZXJcIlxuICAgICAgICAgICAgICBjbGFzcz1cImVtcHR5LXBhZGRpbmdcIlxuICAgICAgICAgICAgICB0eXBlcz1cInVwbXQvbW9tZW50IHVwbXQvc2VsZWN0aW9uIHVwbXQvZGVzY3JpcHRlbSB1cG10L2Fubm90YXRpb25cIlxuICAgICAgICAgICAgICBAbW9tZW50PVwiZHJvcHBlZE5ld01vbWVudFwiXG4gICAgICAgICAgICAgIEBhbm5vdGF0aW9uPVwiZHJvcHBlZENyZWF0aW5nQW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgIEBzZWxlY3Rpb249XCJkcm9wcGVkQ3JlYXRpbmdTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICBAZGVzY3JpcHRlbT1cImRyb3BwZWRDcmVhdGluZ0Rlc2NyaXB0ZW1cIj5cbiAgICAgIDxxLWJ0blxuICAgICAgICBmbGF0XG4gICAgICAgIGRlbnNlXG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIGNsYXNzPVwibmV3LW1vbWVudC1idXR0b25cIlxuICAgICAgICBpY29uPVwibWRpLXBsdXNcIlxuICAgICAgICBAY2xpY2s9XCJkcm9wcGVkQ3JlYXRpbmdTZWxlY3Rpb24oJ3t9JywgJ2FmdGVyJylcIlxuICAgICAgICA+XG4gICAgICAgIDxxLXRvb2x0aXA+Q3JlYXRlIGEgbmV3IG1vbWVudCBoZXJlPC9xLXRvb2x0aXA+XG4gICAgICA8L3EtYnRuPlxuICAgIDwvRHJvcFpvbmU+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJ1xuXG4gIGltcG9ydCBDb2xvcml6ZUljb24gZnJvbSAnLi9Db2xvcml6ZUljb24udnVlJ1xuICBpbXBvcnQgQ3VzdG9tRXhwYW5zaW9uSXRlbSBmcm9tICcuL0N1c3RvbUV4cGFuc2lvbkl0ZW0udnVlJ1xuICBpbXBvcnQgRHJhZ0VsZW1lbnQgZnJvbSAnLi9EcmFnRWxlbWVudC52dWUnXG4gIGltcG9ydCBEcm9wWm9uZSBmcm9tICcuL0Ryb3Bab25lLnZ1ZSdcbiAgaW1wb3J0IEVsZW1lbnRNZW51IGZyb20gJy4vRWxlbWVudE1lbnUudnVlJ1xuICBpbXBvcnQgSnVzdGlmaWNhdGlvblJlcHJlc2VudGF0aW9uIGZyb20gJy4vSnVzdGlmaWNhdGlvblJlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IE1vbWVudFJlcHJlc2VudGF0aW9uIGZyb20gJy4vTW9tZW50UmVwcmVzZW50YXRpb24udnVlJ1xuICBpbXBvcnQgTW9tZW50TmFtZUlucHV0IGZyb20gJy4vTW9tZW50TmFtZUlucHV0LnZ1ZSdcbiAgaW1wb3J0IE5vdGVJY29uIGZyb20gJy4vTm90ZUljb24udnVlJ1xuICBpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljTW9kZWxPdmVydmlldyBmcm9tICcuL1NwZWNpZmljU3luY2hyb25pY01vZGVsT3ZlcnZpZXcudnVlJ1xuXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCB7IHVzZUludGVyZmFjZVN0b3JlIH0gZnJvbSAnc3RvcmVzL2ludGVyZmFjZSdcblxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgbW9tZW50SWQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sXG4gICAgICBsYXlvdXQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcInZlcnRpY2FsXCIgfSxcbiAgICAgIGdlbmVyaWNHcmFwaHM6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiBudWxsIH1cbiAgfSlcblxuICBjb25zdCB7XG4gICAgICBlZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbElkLFxuICAgICAgaGlnaGxpZ2h0ZWRNb21lbnRJZFxuICB9ID0gc3RvcmVUb1JlZnMoaXN0b3JlKVxuXG4gIGNvbnN0IG1vbWVudCA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldE1vbWVudChwcm9wcy5tb21lbnRJZCkpXG5cbiAgY29uc3QgaXNFZGl0ZWRNb2RlbCA9IGNvbXB1dGVkKCgpID0+IG1vbWVudC52YWx1ZT8uc3BlY2lmaWNzeW5jaHJvbmljbW9kZWw/LmlkID09PSBlZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbElkLnZhbHVlKVxuXG4gIGZ1bmN0aW9uIGRlYnVnICgpIHtcbiAgICAgICh3aW5kb3cgYXMgYW55KS5tb21lbnQgPSBtb21lbnQudmFsdWVcbiAgICAgIGNvbnNvbGUubG9nKFwiTW9tZW50XCIsIG1vbWVudC52YWx1ZSlcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hpbGRyZW46XFxuXCIsIG1vbWVudC52YWx1ZT8uY2hpbGRyZW4ubWFwKGMgPT4gYCR7Yy5jaGlsZEluZGV4fTogJHtjLm5hbWV9YCkuam9pbihcIlxcbiAgXCIpKVxuICB9XG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0VG9nZ2xlICgpIHtcbiAgICAgIGlmIChoaWdobGlnaHRlZE1vbWVudElkLnZhbHVlID09IHByb3BzLm1vbWVudElkKSB7XG4gICAgICAgICAgaXN0b3JlLnNldEhpZ2hsaWdodGVkTW9tZW50SWQoXCJcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXN0b3JlLnNldEhpZ2hsaWdodGVkTW9tZW50SWQocHJvcHMubW9tZW50SWQpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93Q29udGVudCAoKSB7XG4gICAgICBpZiAobW9tZW50LnZhbHVlICYmICFtb21lbnQudmFsdWUuaXNFeHBhbmRlZCkge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudChwcm9wcy5tb21lbnRJZCwgeyBpc0V4cGFuZGVkOiB0cnVlIH0pXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkRGVzY3JpcHRlbSAoZGVzY3JpcHRlbUlkOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0ZW0gPSBzdG9yZS5nZXREZXNjcmlwdGVtKGRlc2NyaXB0ZW1JZClcbiAgICAgIGlmIChkZXNjcmlwdGVtKSB7XG4gICAgICAgICAgc3RvcmUuYWRkVGV4dFNlbGVjdGlvblRvTW9tZW50KGRlc2NyaXB0ZW0udG9KU09OKCksIHByb3BzLm1vbWVudElkKVxuICAgICAgICAgIHN0b3JlLmRlbGV0ZURlc2NyaXB0ZW0oZGVzY3JpcHRlbUlkKVxuICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRBbm5vdGF0aW9uIChhbm5vdGF0aW9uSWQ6IHN0cmluZykge1xuICAgICAgY29uc3QgYW5ub3RhdGlvbiA9IHN0b3JlLmdldEFubm90YXRpb24oYW5ub3RhdGlvbklkKVxuICAgICAgaWYgKGFubm90YXRpb24pIHtcbiAgICAgICAgICBzdG9yZS5hZGRUZXh0U2VsZWN0aW9uVG9Nb21lbnQoYW5ub3RhdGlvbi50b0pTT04oKSwgcHJvcHMubW9tZW50SWQpXG4gICAgICAgICAgc2hvd0NvbnRlbnQoKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZFNlbGVjdGlvbiAoc2VsZWN0aW9uRGF0YTogc3RyaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEpTT04ucGFyc2Uoc2VsZWN0aW9uRGF0YSlcbiAgICAgICAgICAvLyBhZGRUZXh0U2VsZWN0aW9uVG9Nb21lbnQgd2lsbCBkbyB0aGUgbmVjZXNzYXJ5IGtleSBjaGVja3NcbiAgICAgICAgICBzdG9yZS5hZGRUZXh0U2VsZWN0aW9uVG9Nb21lbnQoc2VsZWN0aW9uLCBwcm9wcy5tb21lbnRJZClcbiAgICAgICAgICBzaG93Q29udGVudCgpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENhbm5vdCBwYXJzZSAke3NlbGVjdGlvbkRhdGF9OiAke2V9YClcbiAgICAgIH1cbiAgfVxuXG4gIC8qIERyb3AgbW9tZW50IG9uIG1vbWVudDogY29weSBkZXNjcmlwdGVtcyBhbmQgbW9kZWwgKi9cbiAgZnVuY3Rpb24gZHJvcHBlZE1vbWVudCAobW9tZW50SWQ6IHN0cmluZykge1xuICAgICAgc3RvcmUuY29weU1vbWVudChtb21lbnRJZCwgcHJvcHMubW9tZW50SWQpXG4gICAgICBzaG93Q29udGVudCgpXG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkTmV3TW9tZW50IChtb21lbnRJZDogc3RyaW5nLCB3aGVyZTogc3RyaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRyb3BwZWQgTW9tZW50XCIsIG1vbWVudElkLCBcIndoZXJlXCIsIHdoZXJlKVxuICAgICAgaWYgKCFtb21lbnRJZCkge1xuICAgICAgICAgIHN0b3JlLmFkZE1vbWVudChpc3RvcmUubmV3TW9tZW50SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubW9tZW50SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlKVxuICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RvcmUubW92ZU1vbWVudChtb21lbnRJZCwgcHJvcHMubW9tZW50SWQsIHdoZXJlKVxuICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbCAoc3NtSWQ6IHN0cmluZykge1xuICAgICAgLy8gQSBTU01vZGVsIHdhcyBkcm9wcGVkIC0gY29weSBpdCBpbnRvIHRoZSBtb21lbnRcbiAgICAgIGNvbnN0IG1vZGVsSWQgPSBtb21lbnQudmFsdWU/LnNwZWNpZmljc3luY2hyb25pY21vZGVsPy5pZFxuICAgICAgaWYgKG1vZGVsSWQpIHtcbiAgICAgICAgICBzdG9yZS5jb3B5U3BlY2lmaWNTeW5jaHJvbmljTW9kZWxUb01vZGVsKHNzbUlkLCBtb2RlbElkKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZENvbG9yIChjb2xvcjogc3RyaW5nKSB7XG4gICAgICBzdG9yZS51cGRhdGVNb21lbnRDb2xvcihwcm9wcy5tb21lbnRJZCwgY29sb3IpXG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkgKHNzY0lkOiBzdHJpbmcpIHtcbiAgICAgIC8vIEEgU1NDIHdhcyBkcm9wcGVkIC0gYWRkIGl0IGFuZCBpdHMgY2hpbGRyZW4gdG8gdGhlIG1vZGVsXG4gICAgICBjb25zdCBtb2RlbElkID0gbW9tZW50LnZhbHVlPy5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbD8uaWRcbiAgICAgIGlmIChtb2RlbElkKSB7XG4gICAgICAgICAgc3RvcmUuY29weVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5VG9Nb2RlbChzc2NJZCwgbW9kZWxJZCwgdHJ1ZSlcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5IChuYW1lOiBzdHJpbmcpIHtcbiAgICAgIC8vIEEgZ2VuZXJpYyBjYXRlZ29yeSB3YXMgZHJvcHBlZFxuICAgICAgY29uc3QgbW9kZWxJZCA9IG1vbWVudC52YWx1ZT8uc3BlY2lmaWNzeW5jaHJvbmljbW9kZWw/LmlkXG4gICAgICBpZiAobW9kZWxJZCAmJiBuYW1lKSB7XG4gICAgICAgICAgY29uc3QgZ2VuZXJpY0luZm8gPSBwcm9wcy5nZW5lcmljR3JhcGhzID8gcHJvcHMuZ2VuZXJpY0dyYXBocy5ieU5hbWVbbmFtZV0gOiB7IGFic3RyYWN0aW9uVHlwZTogJycgfVxuICAgICAgICAgIHN0b3JlLmFkZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW5tb2RlbDoke21vZGVsSWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyaWNJbmZvLmFic3RyYWN0aW9uVHlwZSlcblxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZEdlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcnkgKGNhdGVnb3J5SWQ6IHN0cmluZykge1xuICAgICAgc3RvcmUuYWRkR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeVRvTW9tZW50KGNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubW9tZW50SWQpXG4gIH1cblxuICAvLyBEcm9wcGVkIHNlbGVjdGlvbnMgdG8gY3JlYXRlIGEgbW9tZW50LiBkYXRhIGlzIGJlZm9yZSBvciBhZnRlclxuICBmdW5jdGlvbiBkcm9wcGVkQ3JlYXRpbmdEZXNjcmlwdGVtIChkZXNjcmlwdGVtSWQ6IHN0cmluZywgd2hlcmU6IHN0cmluZykge1xuICAgICAgY29uc3QgZGVzY3JpcHRlbSA9IHN0b3JlLmdldERlc2NyaXB0ZW0oZGVzY3JpcHRlbUlkKVxuICAgICAgaWYgKGRlc2NyaXB0ZW0gJiYgbW9tZW50LnZhbHVlKSB7XG4gICAgICAgICAgc3RvcmUuYWRkTW9tZW50KGlzdG9yZS5uZXdNb21lbnRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5tb21lbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0ZW0udG9KU09OKCkpXG4gICAgICAgICAgc2hvd0NvbnRlbnQoKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZENyZWF0aW5nQW5ub3RhdGlvbiAoYW5ub3RhdGlvbklkOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGFubm90YXRpb24gPSBzdG9yZS5nZXRBbm5vdGF0aW9uKGFubm90YXRpb25JZClcbiAgICAgIGlmIChhbm5vdGF0aW9uICYmIG1vbWVudC52YWx1ZSkge1xuICAgICAgICAgIHN0b3JlLmFkZE1vbWVudChpc3RvcmUubmV3TW9tZW50SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubW9tZW50SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uLnRvSlNPTigpKVxuICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRDcmVhdGluZ1NlbGVjdGlvbiAoc2VsZWN0aW9uRGF0YTogc3RyaW5nLCB3aGVyZTogc3RyaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEpTT04ucGFyc2Uoc2VsZWN0aW9uRGF0YSlcbiAgICAgICAgICBpZiAobW9tZW50LnZhbHVlKSB7XG4gICAgICAgICAgICAgIHN0b3JlLmFkZE1vbWVudChpc3RvcmUubmV3TW9tZW50SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm1vbWVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24pXG4gICAgICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENhbm5vdCBwYXJzZSAke3NlbGVjdGlvbkRhdGF9OiAke2V9YClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyTW9kZWwgKCkge1xuICAgICAgLy8gQ2xlYXIgdGhlIG1vZGVsXG4gICAgICBpZiAobW9tZW50LnZhbHVlICYmIG1vbWVudC52YWx1ZS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbCkge1xuICAgICAgICAgIHN0b3JlLmNsZWFyU3BlY2lmaWNTeW5jaHJvbmljTW9kZWwobW9tZW50LnZhbHVlLnNwZWNpZmljc3luY2hyb25pY21vZGVsLmlkKVxuICAgICAgfVxuICB9XG5cbiAgY29uc3QgZXhwYW5kID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gbW9tZW50LnZhbHVlID8gbW9tZW50LnZhbHVlLmlzRXhwYW5kZWQgOiB0cnVlXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudChwcm9wcy5tb21lbnRJZCwgeyBpc0V4cGFuZGVkOiB2YWx1ZSB9KVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vbWVudE5hbWUgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiBtb21lbnQudmFsdWUgPyBtb21lbnQudmFsdWUubmFtZSA6IFwiXCJcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgICBzdG9yZS51cGRhdGVNb21lbnQocHJvcHMubW9tZW50SWQsIHsgbmFtZTp2YWx1ZSB9KVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vbWVudENvbG9yID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gbW9tZW50LnZhbHVlID8gbW9tZW50LnZhbHVlLmNvbG9yIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAoY29sb3I6IHN0cmluZykge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudENvbG9yKHByb3BzLm1vbWVudElkLCBjb2xvcilcbiAgICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiB0b2dnbGVUcmFuc2l0aW9uYWwgKCkge1xuICAgICAgaWYgKG1vbWVudC52YWx1ZSkge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudChwcm9wcy5tb21lbnRJZCwgeyBpc1RyYW5zaXRpb25hbDogIW1vbWVudC52YWx1ZS5pc1RyYW5zaXRpb25hbCB9KVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZWRpdE1vZGVsIChzc21JZDogc3RyaW5nKSB7XG4gICAgICBpZiAoIXNzbUlkKSB7XG4gICAgICAgICAgLy8gVGhlIFNwZWNpZmljU3luY2hyb25pY01vZGVsIGRvZXMgbm90IGV4aXN0IChvbGQgZGF0YSkgLSBjcmVhdGUgaXRcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY3N5bmNocm9uaWNtb2RlbCA9IHN0b3JlLmdldFJlcG8oKS5TcGVjaWZpY1N5bmNocm9uaWNNb2RlbC5tYWtlKHtcbiAgICAgICAgICAgICAgbmFtZTogXCJJbml0aWFsXCIsXG4gICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdXG4gICAgICAgICAgfSlcbiAgICAgICAgICBzdG9yZS51cGRhdGVNb21lbnQocHJvcHMubW9tZW50SWQsIHsgc3BlY2lmaWNzeW5jaHJvbmljbW9kZWwgfSlcbiAgICAgICAgICBzc21JZCA9IHNwZWNpZmljc3luY2hyb25pY21vZGVsLmlkXG4gICAgICB9XG4gICAgICBpc3RvcmUuc2V0RWRpdGVkU3BlY2lmaWNTeW5jaHJvbmljTW9kZWxJZChzc21JZClcbiAgfVxuXG4gIGltcG9ydCB0eXBlIHsgTmFtZWRBY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL3V0aWwudHMnXG4gIGNvbnN0IG1lbnVBY3Rpb25zOiBOYW1lZEFjdGlvbltdID0gW1xuICAgICAgWyBcIlRvZ2dsZSB0cmFuc2l0aW9uYWxcIiwgdG9nZ2xlVHJhbnNpdGlvbmFsIF0sXG4gICAgICBbIFwiQ2xlYXIgc3BlY2lmaWMgc3luY2hyb25pYyBtb2RlbFwiLCBjbGVhck1vZGVsIF0sXG4gICAgICBbIFwiRGVsZXRlXCIsICgpID0+IHN0b3JlLmRlbGV0ZU1vbWVudChwcm9wcy5tb21lbnRJZCkgXVxuICBdXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmhlYWRlci1jbGFzcyB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaWNvbi1jbGFzcyB7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cbiAgLmVsZW1lbnQtdG9vbGJhciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubW9tZW50LWNoaWxkcmVuIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubW9tZW50LWNoaWxkcmVuLmhvcml6b250YWwge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubW9tZW50LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAubW9tZW50IHtcbiAgICAgIG1pbi13aWR0aDogdmFyKC0tbW9tZW50LW1pbmltdW0td2lkdGgpO1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuaGlnaGxpZ2h0ZWQgLm1vbWVudCB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oaWdobGlnaHRlZC1jb2xvcik7XG4gIH1cbiAgLmhpZ2hsaWdodGVkIC5tb21lbnQtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodGVkLWNvbG9yKTtcbiAgfVxuICAubW9tZW50LWJvZHkge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAubW9tZW50LWJvZHkgLnEtaXRlbSB7XG4gICAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5xLWl0ZW1fX3NlY3Rpb24tLWF2YXRhciB7XG4gICAgICBtaW4td2lkdGg6IDJweDtcbiAgfVxuICAudHJhbnNpdGlvbmFsIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zaXRpb25hbC1jb2xvcik7XG4gIH1cbiAgLnRyYW5zaXRpb25hbDo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyAnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogY2FsYyggNTAlIC0gdmFyKC0tdHJhbnNpdGlvbmFsLWJhci13aWR0aCkgLyAyICk7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICB3aWR0aDogdmFyKC0tdHJhbnNpdGlvbmFsLWJhci13aWR0aCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2l0aW9uYWwtY29sb3IpO1xuICB9XG4gIC5tb21lbnQtaGFuZGxlIHtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5tb21lbnQtaGFuZGxlOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IC44O1xuICB9XG4gIC5vbi1uYW1lLWhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLm1vbWVudC1oZWFkZXI6aG92ZXIgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuICAubmV3LW1vbWVudC1idXR0b24ge1xuICAgICAgd2lkdGg6IDhweDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLm5ldy1tb21lbnQtYnV0dG9uOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IC44O1xuICB9XG4gIC5tb21lbnQtc3luY2hyb25pYy1zcGVjaWZpYy1tb2RlbCB7XG4gICAgICBtaW4taGVpZ2h0OiAxZW07XG4gIH1cbiAgLm1vbWVudC1zeW5jaHJvbmljLXNwZWNpZmljLW1vZGVsLWVkaXRlZCB7XG4gICAgICBib3JkZXI6IDNweCBkb3R0ZWQgYmx1ZTtcbiAgICAgIG1pbi1oZWlnaHQ6IDFlbTtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiB2LWlmPVwiYW5hbHlzaXNcIlxuICAgICAgIGNsYXNzPVwiYW5hbHlzaXNcIlxuICAgICAgIDpkYXRhLW1vbWVudD1cImFuYWx5c2lzSWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYW5hbHlzaXMtY29udGVudCBtb21lbnQtY2hpbGRyZW5cIj5cbiAgICAgIDxkaXYgdi1mb3I9XCJtIGluIGFuYWx5c2lzLnJvb3RNb21lbnQuY2hpbGRyZW5cIiA6a2V5PVwibS5pZFwiPlxuICAgICAgICA8TW9tZW50UmVwcmVzZW50YXRpb25cbiAgICAgICAgICA6Z2VuZXJpY0dyYXBocz1cImdlbmVyaWNHcmFwaHNcIlxuICAgICAgICAgIDptb21lbnRJZD1cIm0uaWRcIj5cbiAgICAgICAgPC9Nb21lbnRSZXByZXNlbnRhdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQsIHdhdGNoIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJ1xuICBpbXBvcnQgTW9tZW50UmVwcmVzZW50YXRpb24gZnJvbSAnLi9Nb21lbnRSZXByZXNlbnRhdGlvbi52dWUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCB7IHVzZUludGVyZmFjZVN0b3JlIH0gZnJvbSAnc3RvcmVzL2ludGVyZmFjZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgaXN0b3JlID0gdXNlSW50ZXJmYWNlU3RvcmUoKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgYW5hbHlzaXNJZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICAgIGdlbmVyaWNHcmFwaHM6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiBudWxsIH1cbiAgfSlcblxuICBjb25zdCB7IGhpZ2hsaWdodGVkTW9tZW50SWQgfSA9IHN0b3JlVG9SZWZzKGlzdG9yZSlcblxuICBjb25zdCBhbmFseXNpcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHN0b3JlLmdldEFuYWx5c2lzKHByb3BzLmFuYWx5c2lzSWQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gIH0pXG5cbiAgd2F0Y2goaGlnaGxpZ2h0ZWRNb21lbnRJZCwgKCkgPT4ge1xuICAgICAgaWYgKGhpZ2hsaWdodGVkTW9tZW50SWQudmFsdWUpIHtcbiAgICAgICAgICAvLyBTY3JvbGwgZWxlbWVudCBpbnRvIHZpZXdcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbW9tZW50PVwiJHtoaWdobGlnaHRlZE1vbWVudElkLnZhbHVlfVwiXWApXG4gICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldygpXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9KVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5hbmFseXNpcy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJpbnRlcnZpZXcgZmxleCBjb2x1bW4gbm8td3JhcCBuby1zY3JvbGxcIlxuICAgICAgIHYtaWY9XCJpbnRlcnZpZXdcIlxuICAgICAgIDpkYXRhLWludGVydmlldz1cImludGVydmlld0lkXCI+XG5cbiAgICA8cS10b29sYmFyIGNsYXNzPVwiaW50ZXJ2aWV3LXRvb2xiYXIgcm93IHByaW50LXJlbW92ZWRcIj5cblxuICAgICAgPERyYWdFbGVtZW50XG4gICAgICAgIHR5cGU9XCJtb21lbnRcIlxuICAgICAgICBkYXRhPVwiXCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgQGNsaWNrPVwiY3JlYXRlTW9tZW50XCI+XG4gICAgICAgICAgTmV3IG1vbWVudFxuICAgICAgICAgIDxxLXRvb2x0aXAgYW5jaG9yPVwidG9wIG1pZGRsZVwiXG4gICAgICAgICAgICAgICAgICAgICA6b2Zmc2V0PVwiWzAsMzBdXCI+Q2xpY2sgb3IgZHJhZyB0aGlzIGJ1dHRvbiB0byBjcmVhdGUgYSBuZXcgbW9tZW50PjwvcS10b29sdGlwPlxuICAgICAgICA8L3EtYnRuPlxuICAgICAgPC9EcmFnRWxlbWVudD5cblxuICAgICAgPHEtYnRuXG4gICAgICAgIGljb249XCJtZGktYXJyb3ctZXhwYW5kLWRvd25cIlxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICBAY2xpY2s9XCJleHBhbmRBbGxNb21lbnRzXCI+XG4gICAgICAgIDxxLXRvb2x0aXAgYW5jaG9yPVwidG9wIG1pZGRsZVwiIDpvZmZzZXQ9XCJbMCwzMF1cIj5cbiAgICAgICAgICBFeHBhbmQgYWxsIG1vbWVudHNcbiAgICAgICAgPC9xLXRvb2x0aXA+XG4gICAgICA8L3EtYnRuPlxuXG4gICAgICA8cS1idG5cbiAgICAgICAgaWNvbj1cIm1kaS1hcnJvdy1leHBhbmQtdXBcIlxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICBAY2xpY2s9XCJjbG9zZUFsbE1vbWVudHNcIj5cbiAgICAgICAgPHEtdG9vbHRpcCBhbmNob3I9XCJ0b3AgbWlkZGxlXCIgOm9mZnNldD1cIlswLDMwXVwiPlxuICAgICAgICAgIENsb3NlIGFsbCBtb21lbnRzXG4gICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgPC9xLWJ0bj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIHEtbXgtbWQgcS1wYS1ub1wiPlxuICAgICAgICA8cS1iYWRnZSBjb2xvcj1cImluZm9cIj5cbiAgICAgICAgICBNb21lbnQgd2lkdGg6IHt7IG1pbmltdW1XaWR0aCB9fVxuICAgICAgICA8L3EtYmFkZ2U+XG5cbiAgICAgICAgPHEtc2xpZGVyIHYtbW9kZWw9XCJtaW5pbXVtV2lkdGhcIlxuICAgICAgICAgICAgICAgICAgOm1pbj1cIjUwXCJcbiAgICAgICAgICAgICAgICAgIDptYXg9XCI1MDBcIlxuICAgICAgICAgICAgICAgICAgOnN0ZXA9XCIxMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgIDwvcS1zbGlkZXI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHEtc3BhY2UgLz5cblxuICAgIDwvcS10b29sYmFyPlxuXG4gICAgPFZ1ZVpvb21hYmxlXG4gICAgICBzZWxlY3Rvcj1cIi5hbmFseXNpcy1yZXByZXNlbnRhdGlvblwiXG4gICAgICBzdHlsZT1cImZsZXgtZ3JvdzogMTtcIlxuICAgICAgOm1pblpvb209XCIwLjVcIlxuICAgICAgOm1heFpvb209XCI0XCJcbiAgICAgIDp3aGVlbFpvb21TdGVwPVwiaXN0b3JlLnNldHRpbmdzLnpvb21TdGVwXCJcbiAgICAgID5cbiAgICAgIDxBbmFseXNpc1JlcHJlc2VudGF0aW9uXG4gICAgICAgIHJlZj1cImFuYWx5c2lzXCJcbiAgICAgICAgY2xhc3M9XCJhbmFseXNpcy1yZXByZXNlbnRhdGlvblwiXG4gICAgICAgIHYtaWY9XCJpbnRlcnZpZXcuYW5hbHlzaXNcIlxuICAgICAgICA6Z2VuZXJpY0dyYXBocz1cImdlbmVyaWNHcmFwaHNcIlxuICAgICAgICA6YW5hbHlzaXNJZD1cImludGVydmlldy5hbmFseXNpcy5pZFwiPlxuICAgICAgPC9BbmFseXNpc1JlcHJlc2VudGF0aW9uPlxuICAgIDwvVnVlWm9vbWFibGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgdHlwZSB7IFJlZiB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlQ3NzVmFyIH0gZnJvbSAnQHZ1ZXVzZS9jb3JlJ1xuXG4gIGltcG9ydCBWdWVab29tYWJsZSBmcm9tIFwidnVlLXpvb21hYmxlXCJcbiAgaW1wb3J0IFwidnVlLXpvb21hYmxlL2Rpc3Qvc3R5bGUuY3NzXCJcblxuICBpbXBvcnQgRHJhZ0VsZW1lbnQgZnJvbSAnLi9EcmFnRWxlbWVudC52dWUnXG4gIGltcG9ydCBBbmFseXNpc1JlcHJlc2VudGF0aW9uIGZyb20gJy4vQW5hbHlzaXNSZXByZXNlbnRhdGlvbi52dWUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCB7IHVzZUludGVyZmFjZVN0b3JlIH0gZnJvbSAnc3RvcmVzL2ludGVyZmFjZSdcblxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgaW50ZXJ2aWV3SWQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sXG4gICAgICBnZW5lcmljR3JhcGhzOiB7IHR5cGU6IE9iamVjdCwgZGVmYXVsdDogbnVsbCB9XG4gIH0pXG5cbiAgY29uc3QgaW50ZXJ2aWV3ID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuZ2V0SW50ZXJ2aWV3KHByb3BzLmludGVydmlld0lkKSlcblxuICBjb25zdCBlbCA9IHJlZihudWxsKVxuXG4gIGNvbnN0IG1vbWVudE1pbmltdW1XaWR0aFZhciA9IHVzZUNzc1ZhcignLS1tb21lbnQtbWluaW11bS13aWR0aCcsIGVsKSBhcyB1bmtub3duIGFzIFJlZjxzdHJpbmc+XG5cbiAgY29uc3QgbWluaW11bVdpZHRoID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0OiAoKSA9PiBwYXJzZUZsb2F0KG1vbWVudE1pbmltdW1XaWR0aFZhci52YWx1ZSksXG4gICAgICBzZXQ6ICh2YWx1ZSkgPT4geyBtb21lbnRNaW5pbXVtV2lkdGhWYXIudmFsdWUgPSBgJHt2YWx1ZX1weGAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGV4cGFuZEFsbE1vbWVudHMgKCkge1xuICAgICAgc3RvcmUuZ2V0UmVwbygpLk1vbWVudC53aGVyZSgnaW50ZXJ2aWV3SWQnLCBwcm9wcy5pbnRlcnZpZXdJZCkudXBkYXRlKHsgaXNFeHBhbmRlZDogdHJ1ZSB9KVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VBbGxNb21lbnRzICgpIHtcbiAgICAgIHN0b3JlLmdldFJlcG8oKS5Nb21lbnQud2hlcmUoJ2ludGVydmlld0lkJywgcHJvcHMuaW50ZXJ2aWV3SWQpLnVwZGF0ZSh7IGlzRXhwYW5kZWQ6IGZhbHNlIH0pXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IG1vbWVudCBhdCB0aGUgZW5kXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVNb21lbnQgKCkge1xuICAgICAgLy8gR2V0IHRoZSBhbmFseXNpcyBhbmQgdGhlIGZpcnN0IGxldmVsIG9mIHJvb3RNb21lbnQgY2hpbGRyZW5cbiAgICAgIGlmIChpbnRlcnZpZXcudmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBhbmFseXNpcyA9IHN0b3JlLmdldEFuYWx5c2lzKGludGVydmlldy52YWx1ZS5hbmFseXNpcy5pZClcbiAgICAgICAgICBpZiAoYW5hbHlzaXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgbW9tZW50cyA9IGFuYWx5c2lzLnJvb3RNb21lbnQuY2hpbGRyZW5cbiAgICAgICAgICAgICAgaWYgKG1vbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBsYXN0TW9tZW50ID0gbW9tZW50c1ttb21lbnRzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgICBpZiAobGFzdE1vbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmFkZE1vbWVudChpc3RvcmUubmV3TW9tZW50SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE1vbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZnRlclwiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gTm8gbW9tZW50cyAtIGNyZWF0ZSBpbiByb290TW9tZW50XG4gICAgICAgICAgICAgICAgICBzdG9yZS5hZGRNb21lbnQoaXN0b3JlLm5ld01vbWVudElkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5hbHlzaXMucm9vdE1vbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW46JHthbmFseXNpcy5yb290TW9tZW50LmlkfWApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLmludGVydmlldyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuaW50ZXJ2aWV3Ojotd2Via2l0LXNjcm9sbGJhcjpob3Jpem9udGFse30ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgd2lkdGg6IDMycHg7XG4gIH1cbiAgLmludGVydmlldy1tZXRhZGF0YSA+IHNwYW4ge1xuICAgICAgbWFyZ2luOiAwIDFlbTtcbiAgfVxuICAuY29udHJvbGxfX2J1dHRvbnMge1xuICAgICAgem9vbTogLjU7XG4gICAgICB0b3A6IDFlbTtcbiAgICAgIGxlZnQ6IDFlbTtcbiAgICAgIGJvdHRvbTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgIHJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250cm9sbF9faXRlbS0tY2lyY2xlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAge3sgZWxlbWVudC5uYW1lIH19XG4gICAgPHEtcG9wdXAtZWRpdCB2LW1vZGVsPVwiZWxlbWVudE5hbWVcIlxuICAgICAgICAgICAgICAgICAgYXV0by1zYXZlXG4gICAgICAgICAgICAgICAgICBidXR0b25zXG4gICAgICAgICAgICAgICAgICB2LXNsb3Q9XCJzY29wZVwiPlxuICAgICAgPHEtaW5wdXRcbiAgICAgICAgOmxhYmVsPVwibGFiZWxcIlxuICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICB2LW1vZGVsPVwic2NvcGUudmFsdWVcIlxuICAgICAgICBAa2V5dXAuY3RybC5lbnRlcj1cInZhbGlkYXRlXCJcbiAgICAgICAgQGtleXVwLmVzYz1cImNhbmNlbFwiXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGF1dG9ncm93XG4gICAgICAgIGF1dG9mb2N1cyAvPlxuICAgIDwvcS1wb3B1cC1lZGl0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IEJhc2VNb2RlbCBmcm9tICdzdG9yZXMvbW9kZWxzL2Jhc2Vtb2RlbCdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzKFsgJ2NoYW5nZScgXSlcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGVsZW1lbnQ6IHsgdHlwZTogQmFzZU1vZGVsLCBkZWZhdWx0OiBudWxsIH0sXG4gICAgICBsYWJlbDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiTmFtZVwiIH1cbiAgfSlcblxuICBjb25zdCBuYW1lID0gcmVmKHByb3BzLmVsZW1lbnQubmFtZSlcblxuICBjb25zdCBlbGVtZW50TmFtZSA9IGNvbXB1dGVkKHtcbiAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzLmVsZW1lbnQgPyBwcm9wcy5lbGVtZW50Lm5hbWUgOiBcIlwiXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgICAgc3RvcmUudXBkYXRlRWxlbWVudChwcm9wcy5lbGVtZW50LCB7IG5hbWU6IHZhbHVlIH0pXG4gICAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gdmFsaWRhdGUgKCkge1xuICAgICAgLy8gSWYgdGhlIHNlbGVjdCBoYXMgZm9jdXMsIHRoZW4gdXNlIHRoZSBzZWxlY3RlZCBuYW1lLiBFbHNlIHVzZSB0aGUgaW5wdXQgbmFtZSB2YWx1ZS5cblxuICAgICAgaWYgKHByb3BzLmVsZW1lbnQpIHtcbiAgICAgICAgICBzdG9yZS51cGRhdGVFbGVtZW50KHByb3BzLmVsZW1lbnQsIHsgbmFtZTogbmFtZS52YWx1ZSB9KVxuICAgICAgfVxuICAgICAgZW1pdCgnY2hhbmdlJywgbmFtZS52YWx1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCAoKSB7XG4gICAgICBlbWl0KCdjaGFuZ2UnLCBwcm9wcy5lbGVtZW50Lm5hbWUpXG4gIH1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljbW9kZWwtY29udGFpbmVyXCJcbiAgICAgICA6Y2xhc3M9XCJsYXlvdXRcIlxuICAgICAgIHYtaWY9XCJtb2RlbFwiXG4gICAgICAgOmRhdGEtc3BlY2lmaWNzeW5jaHJvbmljbW9kZWw9XCJtb2RlbElkXCI+XG4gICAgPERyb3Bab25lIDpkYXRhPVwiYGlubW9kZWw6JHttb2RlbElkfWBcIlxuICAgICAgICAgICAgICBjbGFzcz1cImVkaXRvci10b29sYmFyIGZsZXhcIlxuICAgICAgICAgICAgICB0eXBlcz1cInVwbXQvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkgdXBtdC9nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5IHVwbXQvc2VsZWN0aW9uIHVwbXQvZGVzY3JpcHRlbSB1cG10L2Fubm90YXRpb25cIlxuICAgICAgICAgICAgICBAc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJkcm9wcGVkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICBAZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeT1cImRyb3BwZWRHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5XCJcbiAgICAgICAgICAgICAgQGFubm90YXRpb249XCJkcm9wcGVkQ3JlYXRpbmdBbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgQHNlbGVjdGlvbj1cImRyb3BwZWRDcmVhdGluZ1NlbGVjdGlvblwiXG4gICAgICAgICAgICAgIEBkZXNjcmlwdGVtPVwiZHJvcHBlZENyZWF0aW5nRGVzY3JpcHRlbVwiPlxuICAgICAgPERyYWdFbGVtZW50XG4gICAgICAgIHR5cGU9XCJzcGVjaWZpY3N5bmNocm9uaWNtb2RlbFwiXG4gICAgICAgIGRhdGE9XCJtb2RlbElkXCJcbiAgICAgICAgQGNsaWNrLm1ldGE9XCJkZWJ1Z1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljbW9kZWwtdGl0bGVcIj5cbiAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICByZWY9XCJoYW5kbGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNtb2RlbC1oYW5kbGVcIlxuICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgIEBjbGljay5tZXRhPVwiZGVidWdcIlxuICAgICAgICAgICAgbmFtZT1cIm1kaS1ncmFwaC1vdXRsaW5lXCI+PC9xLWljb24+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgQGNsaWNrPVwiY3JlYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoYGlubW9kZWw6JHttb2RlbElkfWApXCJcbiAgICAgICAgICAgIHRpdGxlPVwiRHJvcCBhIGRlc2NyaXB0ZW0gaGVyZSB0byBjcmVhdGUgYSBuZXcgY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgIE5ldyBjYXRlZ29yeVxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EcmFnRWxlbWVudD5cbiAgICA8L0Ryb3Bab25lPlxuICAgIDxWdWVab29tYWJsZVxuICAgICAgc3R5bGU9XCJmbGV4LWdyb3c6IDE7XCJcbiAgICAgIHNlbGVjdG9yPVwiLnNwZWNpZmljc3luY2hyb25pY21vZGVsLWNhdGVnb3JpZXNcIlxuICAgICAgOm1pblpvb209XCIwLjVcIlxuICAgICAgOm1heFpvb209XCI0XCJcbiAgICAgIDp3aGVlbFpvb21TdGVwPVwiaXN0b3JlLnNldHRpbmdzLnpvb21TdGVwXCJcbiAgICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNtb2RlbC1jYXRlZ29yaWVzXCI+XG4gICAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgdi1mb3I9XCJjIGluIG1vZGVsLmNhdGVnb3JpZXNcIlxuICAgICAgICAgIDprZXk9XCJjLmlkXCJcbiAgICAgICAgICA6aXNHZW5lcmljPVwiaXNHZW5lcmljXCJcbiAgICAgICAgICA6bGF5b3V0PVwibGF5b3V0XCJcbiAgICAgICAgICA6Z2VuZXJpY0dyYXBocz1cImdlbmVyaWNHcmFwaHNcIlxuICAgICAgICAgIDpoaWRlSnVzdGlmaWNhdGlvbnM9XCIhbW9kZWwubW9tZW50SWRcIlxuICAgICAgICAgIDpjYXRlZ29yeUlkPVwiYy5pZFwiIC8+XG4gICAgICAgIDxEcm9wWm9uZSA6ZGF0YT1cImBpbm1vZGVsOiR7bW9kZWxJZH1gXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBlbXB0eS1wYWRkaW5nIGRlZmF1bHQtaGVpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGVzPVwidXBtdC9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB1cG10L2dlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnkgdXBtdC9zZWxlY3Rpb24gdXBtdC9kZXNjcmlwdGVtIHVwbXQvYW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgICBAc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJkcm9wcGVkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgQGdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJkcm9wcGVkR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICBAYW5ub3RhdGlvbj1cImRyb3BwZWRDcmVhdGluZ0Fubm90YXRpb25cIlxuICAgICAgICAgICAgICAgICAgQHNlbGVjdGlvbj1cImRyb3BwZWRDcmVhdGluZ1NlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICBAZGVzY3JpcHRlbT1cImRyb3BwZWRDcmVhdGluZ0Rlc2NyaXB0ZW1cIj5cbiAgICAgICAgPC9Ecm9wWm9uZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvVnVlWm9vbWFibGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIGltcG9ydCB7IHN0cmlwQ29udGV4dEZyb21OYW1lIH0gZnJvbSAnLi91dGlsJ1xuICBpbXBvcnQgVnVlWm9vbWFibGUgZnJvbSBcInZ1ZS16b29tYWJsZVwiXG4gIGltcG9ydCBcInZ1ZS16b29tYWJsZS9kaXN0L3N0eWxlLmNzc1wiXG5cbiAgaW1wb3J0IERyYWdFbGVtZW50IGZyb20gJy4vRHJhZ0VsZW1lbnQudnVlJ1xuICBpbXBvcnQgRHJvcFpvbmUgZnJvbSAnLi9Ecm9wWm9uZS52dWUnXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uIGZyb20gJy4vU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbi52dWUnXG5cbiAgY29uc3QgaXN0b3JlID0gdXNlSW50ZXJmYWNlU3RvcmUoKVxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBtb2RlbElkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogbnVsbCB9LFxuICAgICAgaXNHZW5lcmljOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXG4gICAgICBoaWRlSnVzdGlmaWNhdGlvbnM6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcbiAgICAgIGxheW91dDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdob3Jpem9udGFsJyB9LFxuICAgICAgZ2VuZXJpY0dyYXBoczogeyB0eXBlOiBPYmplY3QsIGRlZmF1bHQ6IG51bGwgfVxuICB9KVxuXG4gIGNvbnN0IG1vZGVsID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuZ2V0U3BlY2lmaWNTeW5jaHJvbmljTW9kZWwocHJvcHMubW9kZWxJZCkpXG5cbiAgZnVuY3Rpb24gc2hvd0NvbnRlbnQgKCkge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSBNb2RlbC9DYXRlZ29yeSBpcyBkaXNwbGF5ZWRcbiAgICAgIGNvbnNvbGUubG9nKFwiU1NNIHNob3dDb250ZW50XCIpXG4gIH1cblxuICBmdW5jdGlvbiBkZWJ1ZyAoKSB7XG4gICAgICAod2luZG93IGFzIGFueSkuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWwgPSBtb2RlbC52YWx1ZVxuICAgICAgY29uc29sZS5sb2coXCJzcGVjaWZpY3N5bmNocm9uaWNtb2RlbFwiLCBtb2RlbC52YWx1ZSlcbiAgfVxuXG4gIC8vIERyb3BwZWQgR2VuZXJpYyBjYXRlZ29yeSB0byBjcmVhdGUgYSBTcGVjaWZpY1N5bmNocm9uaWNNb2RlbC4gd2hlcmUgaXMgYmVmb3JlIG9yIGFmdGVyIG9yIGluOlxuICBmdW5jdGlvbiBkcm9wcGVkR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeSAoY2F0ZWdvcnlOYW1lOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGdlbmVyaWNJbmZvID0gcHJvcHMuZ2VuZXJpY0dyYXBocyA/IHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW2NhdGVnb3J5TmFtZV0gOiB7IGFic3RyYWN0aW9uVHlwZTogJycgfVxuXG4gICAgICBzdG9yZS5hZGRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShzdHJpcENvbnRleHRGcm9tTmFtZShjYXRlZ29yeU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyaWNJbmZvPy5hYnN0cmFjdGlvblR5cGUgfHwgJycpXG4gICAgICBzaG93Q29udGVudCgpXG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkgKGNhdGVnb3J5SWQ6IHN0cmluZywgd2hlcmU6IHN0cmluZykge1xuICAgICAgLy8gR2V0IHRoZSBuYW1lIGZyb20gdGhlIGlkXG4gICAgICBjb25zdCBjYXRlZ29yeSA9IHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGNhdGVnb3J5SWQpXG4gICAgICBpZiAoY2F0ZWdvcnkpIHtcbiAgICAgICAgICBjb25zdCBnZW5lcmljSW5mbyA9IHByb3BzLmdlbmVyaWNHcmFwaHMgPyBwcm9wcy5nZW5lcmljR3JhcGhzLmJ5TmFtZVtjYXRlZ29yeS5mdWxsTmFtZV0gOiB7IGFic3RyYWN0aW9uVHlwZTogJycgfVxuXG4gICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5tb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJpY0luZm8/LmFic3RyYWN0aW9uVHlwZSB8fCAnJylcbiAgICAgICAgICBzaG93Q29udGVudCgpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkQ3JlYXRpbmdEZXNjcmlwdGVtIChkZXNjcmlwdGVtSWQ6IHN0cmluZywgd2hlcmU6IHN0cmluZykge1xuICAgICAgY29uc3QgZGVzY3JpcHRlbSA9IHN0b3JlLmdldERlc2NyaXB0ZW0oZGVzY3JpcHRlbUlkKVxuICAgICAgaWYgKGRlc2NyaXB0ZW0gJiYgbW9kZWwudmFsdWUpIHtcbiAgICAgICAgICBzdG9yZS5hZGRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShpc3RvcmUubmV3U1NDSWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5tb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0ZW0udG9KU09OKCkpXG4gICAgICAgICAgc2hvd0NvbnRlbnQoKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZENyZWF0aW5nQW5ub3RhdGlvbiAoYW5ub3RhdGlvbklkOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGFubm90YXRpb24gPSBzdG9yZS5nZXRBbm5vdGF0aW9uKGFubm90YXRpb25JZClcbiAgICAgIGlmIChhbm5vdGF0aW9uICYmIG1vZGVsLnZhbHVlKSB7XG4gICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoaXN0b3JlLm5ld1NTQ0lkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uLnRvSlNPTigpKVxuICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRDcmVhdGluZ1NlbGVjdGlvbiAoc2VsZWN0aW9uRGF0YTogc3RyaW5nLCB3aGVyZTogc3RyaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEpTT04ucGFyc2Uoc2VsZWN0aW9uRGF0YSlcbiAgICAgICAgICBpZiAobW9kZWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoaXN0b3JlLm5ld1NTQ0lkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm1vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24pXG4gICAgICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENhbm5vdCBwYXJzZSAke3NlbGVjdGlvbkRhdGF9OiAke2V9YClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5ICh3aGVyZTogc3RyaW5nKSB7XG4gICAgICBpZiAobW9kZWwudmFsdWUpIHtcbiAgICAgICAgICBzdG9yZS5hZGRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShpc3RvcmUubmV3U1NDSWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5tb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwpXG4gICAgICAgICAgc2hvd0NvbnRlbnQoKVxuICAgICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLnNwZWNpZmljc3luY2hyb25pY21vZGVsLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWwtY2F0ZWdvcmllcyB7XG4gICAgICBkaXNwbGF5OiAgZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnZlcnRpY2FsIC5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbC1jYXRlZ29yaWVzIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLmNvbnRyb2xsX19idXR0b25zIHtcbiAgICAgIHpvb206IC41O1xuICB9XG4gIC5jb250cm9sbF9faXRlbS0tY2lyY2xlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJlZGl0ZWQtbW9kZWwtY29udGFpbmVyIGZsZXggbm8td3JhcCBjb2x1bW4gY29sLWdyb3dcIlxuICAgICAgIHYtaWY9XCJlZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbFwiPlxuICAgIDxxLXRvb2xiYXIgY2xhc3M9XCJyb3cgdG9vbGJhclwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgaWNvbj1cIm1kaS1jbG9zZVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgIGNsYXNzPVwiZmxvYXQtcmlnaHRcIlxuICAgICAgICAgIEBjbGljaz1cImNsb3NlRWRpdGVkTW9kZWxcIj5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8cS10b29sYmFyLXRpdGxlIGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXY+RWRpdGluZyZuYnNwOzwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJlZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbC5tb21lbnRcIj5cbiAgICAgICAgICBzeW5jaHJvbmljIGRlc2NyaXB0aW9uIG9mXG4gICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgQGNsaWNrPVwiaXN0b3JlLnNldEhpZ2hsaWdodGVkTW9tZW50SWQoZWRpdGVkU3BlY2lmaWNTeW5jaHJvbmljTW9kZWwubW9tZW50LmlkKVwiXG4gICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgbmFtZT1cIm1kaS1hbHBoYS1kLWJveC1vdXRsaW5lXCI+XG4gICAgICAgICAgPC9xLWljb24+XG4gICAgICAgICAgPHN0cm9uZz57eyBlZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbC5tb21lbnQubmFtZSB9fVxuICAgICAgICAgICAgPHEtcG9wdXAtZWRpdCB2LW1vZGVsPVwiZWRpdGVkU3BlY2lmaWNTeW5jaHJvbmljTW9kZWxOYW1lXCIgYXV0by1zYXZlIHYtc2xvdD1cInNjb3BlXCI+XG4gICAgICAgICAgICAgIDxNb21lbnROYW1lSW5wdXQgQGNoYW5nZT1cInNjb3BlLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1vbWVudD1cImVkaXRlZFNwZWNpZmljU3luY2hyb25pY01vZGVsLm1vbWVudFwiIC8+XG4gICAgICAgICAgICA8L3EtcG9wdXAtZWRpdD5cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICA8RWxlbWVudE5hbWVJbnB1dFxuICAgICAgICAgICAgICA6ZWxlbWVudD1cImVkaXRlZFNwZWNpZmljU3luY2hyb25pY01vZGVsXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCI+XG4gICAgICAgICAgICA8L0VsZW1lbnROYW1lSW5wdXQ+XG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiB2LWlmPVwiaXNEZXRhY2hlZE1vZGVsRW1wdHlcIj5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIEBjbGljaz1cInVwZGF0ZURldGFjaGVkTW9kZWwoZWRpdGVkU3BlY2lmaWNTeW5jaHJvbmljTW9kZWwpXCI+XG4gICAgICAgICAgICBHZW5lcmF0ZSBmcm9tIGR5bmFtaWMgbW9kZWxcbiAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgIHYtbW9kZWw9XCJlZGl0Vmlld01vZGVcIlxuICAgICAgICAgIDpvcHRpb25zPVwiWyB7IGljb246ICdtZGktcGFuLWhvcml6b250YWwnLCB2YWx1ZTogJ2hvcml6b250YWwnIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaWNvbjogJ21kaS1wYW4tdmVydGljYWwnLCB2YWx1ZTogJ3ZlcnRpY2FsJyB9IF1cIj5cbiAgICAgICAgPC9xLWJ0bi10b2dnbGU+XG4gICAgICA8L3EtdG9vbGJhci10aXRsZT5cbiAgICA8L3EtdG9vbGJhcj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kZWwtcmVwcmVzZW50YXRpb24gZmxleCBjb2wtZ3Jvd1wiPlxuICAgICAgPFNwZWNpZmljU3luY2hyb25pY01vZGVsUmVwcmVzZW50YXRpb25cbiAgICAgICAgOmxheW91dD1cImVkaXRWaWV3TW9kZVwiXG4gICAgICAgIDppc0dlbmVyaWM9XCJpc0VkaXRlZE1vZGVsRGV0YWNoZWRcIlxuICAgICAgICA6Z2VuZXJpY0dyYXBocz1cImdlbmVyaWNHcmFwaHNcIlxuICAgICAgICA6bW9kZWxJZD1cIm1vZGVsSWRcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCB0eXBlIHsgR3JhcGhJbmZvIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNNb2RlbCBmcm9tICdzdG9yZXMvbW9kZWxzL3NwZWNpZmljc3luY2hyb25pY21vZGVsJ1xuXG4gIGltcG9ydCBFbGVtZW50TmFtZUlucHV0IGZyb20gJy4vRWxlbWVudE5hbWVJbnB1dC52dWUnXG4gIGltcG9ydCBNb21lbnROYW1lSW5wdXQgZnJvbSAnLi9Nb21lbnROYW1lSW5wdXQudnVlJ1xuICBpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljTW9kZWxSZXByZXNlbnRhdGlvbiBmcm9tICcuL1NwZWNpZmljU3luY2hyb25pY01vZGVsUmVwcmVzZW50YXRpb24udnVlJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gICAgICBtb2RlbElkOiBzdHJpbmcsXG4gICAgICBnZW5lcmljR3JhcGhzOiBHcmFwaEluZm8sXG4gIH0+KClcblxuICBjb25zdCBlZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBzdG9yZS5nZXRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbChwcm9wcy5tb2RlbElkKVxuICB9KVxuXG4gIGNvbnN0IGlzRWRpdGVkTW9kZWxEZXRhY2hlZCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiAhIWVkaXRlZFNwZWNpZmljU3luY2hyb25pY01vZGVsLnZhbHVlICYmICEhZWRpdGVkU3BlY2lmaWNTeW5jaHJvbmljTW9kZWwudmFsdWUuZGV0YWNoZWRNb2RlbElkXG4gIH0pXG5cbiAgY29uc3QgaXNEZXRhY2hlZE1vZGVsRW1wdHkgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gaXNFZGl0ZWRNb2RlbERldGFjaGVkLnZhbHVlICYmIGVkaXRlZFNwZWNpZmljU3luY2hyb25pY01vZGVsLnZhbHVlPy5jYXRlZ29yaWVzLmxlbmd0aCA9PSAwXG4gIH0pXG5cbiAgY29uc3QgZWRpdFZpZXdNb2RlID0gcmVmKCdob3Jpem9udGFsJylcblxuICBjb25zdCBlZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbE5hbWUgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIGlmIChlZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbC52YWx1ZT8ubW9tZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBlZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbC52YWx1ZS5tb21lbnQubmFtZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBlZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbC52YWx1ZT8ubmFtZSA/PyBcIlwiXG4gICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldCAodmFsdWU6IHN0cmluZykge1xuICAgICAgICAgIGlmIChlZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbC52YWx1ZT8ubW9tZW50KSB7XG4gICAgICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudChlZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbC52YWx1ZS5tb21lbnQuaWQsIHsgbmFtZTp2YWx1ZSB9KVxuICAgICAgICAgIH0gZWxzZSBpZiAoZWRpdGVkU3BlY2lmaWNTeW5jaHJvbmljTW9kZWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgc3RvcmUudXBkYXRlRWxlbWVudChlZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbC52YWx1ZSwgeyBuYW1lOnZhbHVlIH0pXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZURldGFjaGVkTW9kZWwgKG1vZGVsOiBTcGVjaWZpY1N5bmNocm9uaWNNb2RlbCB8IG51bGwpIHtcbiAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICAgIHN0b3JlLmJ1aWxkU3luY2hyb25pY01vZGVsRnJvbUdyYXBocyAobW9kZWwsIHByb3BzLmdlbmVyaWNHcmFwaHMpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZUVkaXRlZE1vZGVsICgpIHtcbiAgICAgIGlzdG9yZS5zZXRFZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbElkKFwiXCIpXG4gIH1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8cS1jYXJkPlxuICAgIDxkaXYgdi1pZj1cImludGVydmlld1wiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwiYmctc2Vjb25kYXJ5IHRleHQtd2hpdGUgdGV4dC1oNVwiPlxuICAgICAgICBFZGl0aW5nIHt7IGludGVydmlldy5uYW1lIH19XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPHA+TWFuZGF0b3J5IGluZm9ybWF0aW9uIGlzIG1hcmtlZCB3aXRoICo8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiB2LWVsc2U+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJiZy1zZWNvbmRhcnkgdGV4dC13aGl0ZSB0ZXh0LWg1XCI+XG4gICAgICAgIENyZWF0ZSBhIG5ldyBpbnRlcnZpZXdcbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cD5QbGVhc2UgcHJvdmlkZSB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uIHRvIGNyZWF0ZSBhIG5ldyBpbnRlcnZpZXcuIE1hbmRhdG9yeSBpbmZvcm1hdGlvbiBpcyBtYXJrZWQgd2l0aCAqPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPHEtZm9ybVxuICAgICAgbmFtZT1cImludGVydmlld0Zvcm1cIlxuICAgICAgQHN1Ym1pdD1cIm9uU3VibWl0XCJcbiAgICAgIGNsYXNzPVwicS1ndXR0ZXItbWRcIlxuICAgICAgPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8cS1idG4gOmxhYmVsPVwiIWludGVydmlldyA/ICdDcmVhdGUnOidWYWxpZGF0ZSdcIlxuICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhY2FuVmFsaWRhdGVcIlxuICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIvPlxuICAgICAgICA8cS1idG4gbGFiZWw9XCJDYW5jZWxcIlxuICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgIGNsYXNzPVwicS1tbC1zbVwiXG4gICAgICAgICAgICAgICBAY2xpY2s9XCJvbkNhbmNlbFwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgZmlsbGVkXG4gICAgICAgICAgdi1tb2RlbD1cIm5hbWVcIlxuICAgICAgICAgIGxhYmVsPVwiSW50ZXJ2aWV3IG5hbWUvaWQgKlwiXG4gICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgIGNsYXNzPVwiY29sLTRcIlxuICAgICAgICAgIDpydWxlcz1cIlsgKHZhbDogc3RyaW5nKSA9PiB2YWwgJiYgdmFsLmxlbmd0aCA+IDAgfHwgJ0l0ICBtdXN0IGJlIGZpbGxlZCddXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgZmlsbGVkXG4gICAgICAgICAgdi1tb2RlbD1cInBhcnRpY2lwYW50XCJcbiAgICAgICAgICBsYWJlbD1cIlBhcnRpY2lwYW50IG5hbWVcIlxuICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICBjbGFzcz1cImNvbC00IHEtcHgtbWRcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICBmaWxsZWRcbiAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgdi1tb2RlbD1cImRhdGVcIlxuICAgICAgICAgIGxhYmVsPVwiSW50ZXJ2aWV3IGRhdGVcIlxuICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICBjbGFzcz1cImNvbC00IHEtcHgtbWRcIlxuICAgICAgICAgIC8+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8cS1pbnB1dFxuICAgICAgICBmaWxsZWRcbiAgICAgICAgYXV0b2dyb3dcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2LW1vZGVsPVwibm90ZVwiXG4gICAgICAgIGxhYmVsPVwiTm90ZVwiXG4gICAgICAgIC8+XG5cbiAgICAgIDxxLWlucHV0XG4gICAgICAgIHYtaWY9XCIhbWV0YWRhdGFPbmx5XCJcbiAgICAgICAgZmlsbGVkXG4gICAgICAgIGxhYmVsLXNsb3RcbiAgICAgICAgYXV0b2dyb3dcbiAgICAgICAgOmlucHV0LXN0eWxlPVwieyBtaW5IZWlnaHQ6ICc0ZW0nLCBtYXhIZWlnaHQ6ICczMGVtJyB9XCJcbiAgICAgICAgaGludD1cIlBsZWFzZSBwcm92aWRlIHRoZSBpbnRlcnZpZXcgdGV4dCBieSBwYXN0aW5nIGl0IGhlcmUsIHVwbG9hZGluZyBhIGZpbGUgd2l0aCB0aGUgdXBsb2FkIGJ1dHRvbiBvciBieSBkcmFnZ2luZyBpdCBoZXJlLlwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgIHYtbW9kZWw9XCJ0ZXh0XCJcbiAgICAgICAgbGFiZWw9XCJJbnRlcnZpZXcgdGV4dCAqXCJcbiAgICAgICAgPlxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmxhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaXRlbXMtY2VudGVyIGFsbC1wb2ludGVyLWV2ZW50c1wiPlxuICAgICAgICAgICAgUGFzdGUgaW50ZXJ2aWV3IHRleHQgaGVyZSBvclxuICAgICAgICAgICAgPHEtZmlsZSBsYWJlbD1cImRyYWcgYW4gZXhpc3RpbmcgdGV4dCBmaWxlIGhlcmVcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiaW50ZXJ2aWV3RmlsZW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJmaWxlcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgaGlkZS1ib3R0b20tc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0tYWxpZ25lZFxuICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwidXBsb2FkSW50ZXJ2aWV3RmlsZVwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnByZXBlbmQ+XG4gICAgICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwibWRpLXVwbG9hZC1jaXJjbGUtb3V0bGluZVwiIEBjbGljay5zdG9wLnByZXZlbnQgLz5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcS1maWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9xLWlucHV0PlxuICAgIDwvcS1mb3JtPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IHVzZVF1YXNhciwgUUZpbGUgfSBmcm9tICdxdWFzYXInXG4gIGltcG9ydCB7IGNvbXB1dGVkLCByZWYsIFJlZiB9IGZyb20gJ3Z1ZSdcblxuICBleHBvcnQgdHlwZSBJbnRlcnZpZXdJbmZvID0ge1xuICAgICAgbmFtZTogc3RyaW5nXG4gICAgICBwYXJ0aWNpcGFudE5hbWU6IHN0cmluZ1xuICAgICAgbm90ZTogc3RyaW5nXG4gICAgICBkYXRlOiBzdHJpbmdcbiAgICAgIHRleHQ6IHN0cmluZ1xuICB9XG5cbiAgaW50ZXJmYWNlIFByb3BzIHtcbiAgICAgIGludGVydmlldz86IEludGVydmlld0luZm8sXG4gICAgICBtZXRhZGF0YU9ubHk/OiBib29sZWFuXG4gIH1cblxuICBjb25zdCBwcm9wcyA9ICAgd2l0aERlZmF1bHRzKGRlZmluZVByb3BzPFByb3BzPigpLCB7XG4gICAgICBtZXRhZGF0YU9ubHk6IGZhbHNlXG4gIH0pXG5cbiAgY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzKFsgJ3ZhbGlkYXRlJywgJ2NhbmNlbCcgXSlcblxuICBjb25zdCAkcSA9IHVzZVF1YXNhcigpXG5cbiAgY29uc3QgZmlsZXBpY2tlcjogUmVmPFFGaWxlIHwgbnVsbD4gPSByZWYobnVsbClcbiAgY29uc3QgaW50ZXJ2aWV3RmlsZW5hbWUgPSByZWYobnVsbClcblxuICBjb25zdCBuYW1lID0gcmVmKHByb3BzLmludGVydmlldz8ubmFtZSA/PyBcIlwiKVxuICBjb25zdCBwYXJ0aWNpcGFudCA9IHJlZihwcm9wcy5pbnRlcnZpZXc/LnBhcnRpY2lwYW50TmFtZSA/PyBcIlwiKVxuICBjb25zdCBkYXRlID0gcmVmKHByb3BzLmludGVydmlldz8uZGF0ZSA/PyBcIlwiKVxuICBjb25zdCBub3RlID0gcmVmKHByb3BzLmludGVydmlldz8ubm90ZSA/PyBcIlwiKVxuICBjb25zdCB0ZXh0ID0gcmVmKHByb3BzLmludGVydmlldz8udGV4dCA/PyBcIlwiKVxuXG4gIGNvbnN0IGNhblZhbGlkYXRlID0gY29tcHV0ZWQoKCkgPT4gbmFtZS52YWx1ZSAmJiB0ZXh0LnZhbHVlKVxuXG4gIGZ1bmN0aW9uIG9uU3VibWl0IChldmVudDogRXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQpIHtcbiAgICAgICAgICBlbWl0KCd2YWxpZGF0ZScsIHtcbiAgICAgICAgICAgICAgbmFtZTogbmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgcGFydGljaXBhbnROYW1lOiBwYXJ0aWNpcGFudC52YWx1ZSxcbiAgICAgICAgICAgICAgbm90ZTogbm90ZS52YWx1ZSxcbiAgICAgICAgICAgICAgZGF0ZTogZGF0ZS52YWx1ZSxcbiAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGVkaXRpbmcgYW4gZXhpc3RpbmcgaW50ZXJ2aWV3LCB0aGUgdGV4dCBjYW5ub3QgYmUgbW9kaWZpZWQgKGFuZCB0aGUgdGV4dCByZWYgd2lsbCBhbHdheXMgYmUgXCJcIilcbiAgICAgICAgICAgICAgdGV4dDogdGV4dC52YWx1ZVxuICAgICAgICAgIH0gYXMgSW50ZXJ2aWV3SW5mbylcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2FuY2VsICgpIHtcbiAgICAgIC8vIFJlc2V0IGFsbCBmb3JtIHZhbHVlc1xuICAgICAgcGFydGljaXBhbnQudmFsdWUgPSBcIlwiXG4gICAgICBuYW1lLnZhbHVlID0gXCJcIlxuICAgICAgZGF0ZS52YWx1ZSA9IFwiXCJcbiAgICAgIHRleHQudmFsdWUgPSBcIlwiXG4gICAgICBub3RlLnZhbHVlID0gXCJcIlxuICAgICAgaW50ZXJ2aWV3RmlsZW5hbWUudmFsdWUgPSBudWxsXG5cbiAgICAgIGVtaXQoXCJjYW5jZWxcIilcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwbG9hZEludGVydmlld0ZpbGUgKHNvdXJjZUZpbGU6IEZpbGUpIHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgLy8gUGFyc2UgZmlsZSBhbmQgZXh0cmFjdCBkYXRhXG4gICAgICAgICAgdGV4dC52YWx1ZSA9IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWFkaW5nIGZpbGU6JywgcmVhZGVyLmVycm9yKVxuICAgICAgICAgICRxLm5vdGlmeSh7XG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGBFcnJvciByZWFkaW5nIGZpbGU6ICR7cmVhZGVyLmVycm9yPy5tZXNzYWdlfWBcbiAgICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBMb2FkIGRhdGEgZnJvbSBmaWxlIC0gdGhlIHJlYWRBc1RleHQgd2lsbFxuICAgICAgLy8gdHJpZ2dlciB0aGUgbG9hZCBldmVudCB0aGF0IGlzIGhhbmRsZWQganVzdFxuICAgICAgLy8gYWJvdmUuXG4gICAgICByZWFkZXIucmVhZEFzVGV4dChzb3VyY2VGaWxlKVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ0ZXh0QW5ub3RhdGlvbkNvbnRhaW5lclwiXG4gICAgICAgdi1pZj1cImludGVydmlld1wiPlxuICAgIDxxLXRvb2xiYXJcbiAgICAgIGNsYXNzPVwicm93IGp1c3RpZnktZW5kIGFic29sdXRlLXRvcCBiZy13aGl0ZVwiPlxuICAgICAgPE5vdGVJY29uXG4gICAgICAgIDplbGVtZW50PVwiaW50ZXJ2aWV3XCIgLz5cbiAgICAgIDxxLWJ0blxuICAgICAgICBmbGF0XG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIGRlbnNlXG4gICAgICAgIHRpdGxlPVwiRWRpdCBtZXRhZGF0YVwiXG4gICAgICAgIEBjbGljaz1cInRvZ2dsZU1ldGFkYXRhXCJcbiAgICAgICAgaWNvbj1cImVkaXRcIlxuICAgICAgICA+XG4gICAgICA8L3EtYnRuPlxuICAgICAgPHEtc3BhY2U+PC9xLXNwYWNlPlxuICAgICAgPHEtYnRuXG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIGljb249XCJtZGktY3Vyc29yLXRleHRcIlxuICAgICAgICBAY2xpY2s9XCJzZWxlY3Rpb25Db2xvciA9ICcnXCJcbiAgICAgICAgOmZsYXQ9XCJzZWxlY3Rpb25Db2xvciAhPSAnJ1wiXG4gICAgICAgIGRlbnNlXG4gICAgICAgIC8+XG4gICAgICA8cS1idG5cbiAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgdi1mb3I9XCJjb2xvciBpbiBBTk5PVEFUSU9OX0NPTE9SU1wiXG4gICAgICAgIDprZXk9XCJjb2xvclwiXG4gICAgICAgIGljb249XCJtZGktbWFya2VyXCJcbiAgICAgICAgQGNsaWNrPVwic2VsZWN0aW9uQ29sb3IgPSBjb2xvclwiXG4gICAgICAgIDpmbGF0PVwiY29sb3IgIT0gc2VsZWN0aW9uQ29sb3JcIlxuICAgICAgICBkZW5zZVxuICAgICAgICA6c3R5bGU9XCJ7IGNvbG9yOiBjb2xvciB9XCJcbiAgICAgICAgLz5cbiAgICA8L3EtdG9vbGJhcj5cbiAgICA8ZGl2IHYtaWY9XCJpc01ldGFkYXRhVmlzaWJsZVwiPlxuICAgICAgPEludGVydmlld01ldGFkYXRhRm9ybVxuICAgICAgICA6aW50ZXJ2aWV3PVwiaW50ZXJ2aWV3XCJcbiAgICAgICAgOm1ldGFkYXRhT25seT1cInRydWVcIlxuICAgICAgICBAY2FuY2VsPVwiaXNNZXRhZGF0YVZpc2libGUgPSBmYWxzZVwiXG4gICAgICAgIEB2YWxpZGF0ZT1cIm1ldGFkYXRhVmFsaWRhdGVcIlxuICAgICAgICAvPlxuICAgICAgPGVtPkludGVydmlldyB0ZXh0IGJlbG93IGlzIG5vdCBtb2RpZmlhYmxlPC9lbT5cbiAgICA8L2Rpdj5cbiAgICA8QW5ub3RhdGVkVGV4dFxuICAgICAgY2xhc3M9XCJ0ZXh0QW5ub3RhdGlvbkNvbXBvbmVudCBxLXB0LWxnIHEtcGEtbWRcIlxuICAgICAgdi1pZj1cImludGVydmlld1wiXG4gICAgICA6dGV4dD1cImludGVydmlldy50ZXh0XCJcbiAgICAgIDphbm5vdGF0aW9ucz1cImFubm90YXRpb25zXCJcbiAgICAgIDpnZXRTcGFuQ2xhc3Nlcz1cImdldFNwYW5DbGFzc2VzXCJcbiAgICAgIDpzcGFuRXZlbnRzPVwic3BhbkV2ZW50c1wiXG4gICAgICBAZHJhZ3N0YXJ0PVwib25EcmFnU3RhcnQoJGV2ZW50KVwiXG4gICAgICBAc2VsZWN0aW9uPVwidGV4dFNlbGVjdGlvblwiXG4gICAgICA+XG4gICAgICA8cS1tZW51XG4gICAgICAgIHRvdWNoLXBvc2l0aW9uXG4gICAgICAgIGNvbnRleHQtbWVudVxuICAgICAgICB2LW1vZGVsPVwiY29udGV4dE1lbnVWaXNpYmxlXCJcbiAgICAgICAgPlxuICAgICAgICA8cS1saXN0IGRlbnNlIHN0eWxlPVwibWluLXdpZHRoOiAxMDBweFwiPlxuICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgIHYtaWY9XCJzZWxlY3Rpb25TaG9ydHRleHRcIlxuICAgICAgICAgICAga2V5PVwiY3VycmVudFwiXG4gICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICA8RHJhZ0VsZW1lbnRcbiAgICAgICAgICAgICAgdHlwZT1cInNlbGVjdGlvblwiXG4gICAgICAgICAgICAgIDpkYXRhPVwiY3VycmVudFNlbGVjdGlvbkRhdGFBc1N0cmluZ1wiPlxuICAgICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWRpLXNlbGVjdFwiPjwvcS1pY29uPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV4dHJhY3RcIj57eyBzZWxlY3Rpb25TaG9ydHRleHQgfX08L3NwYW4+XG4gICAgICAgICAgICA8L0RyYWdFbGVtZW50PlxuICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgdi1mb3I9XCJkZXNjcmlwdGVtIGluIGFjdGl2ZURlc2NyaXB0ZW1zXCJcbiAgICAgICAgICAgIDprZXk9XCJkZXNjcmlwdGVtLmlkXCJcbiAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgcm93XG4gICAgICAgICAgICB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgICAgPERlc2NyaXB0ZW1SZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICA6ZGVzY3JpcHRlbUlkPVwiZGVzY3JpcHRlbS5pZFwiXG4gICAgICAgICAgICAgIHdpdGhDb250ZXh0XG4gICAgICAgICAgICAgIDp3aXRoTWVudT1cImZhbHNlXCIgLz5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICB2LWZvcj1cImFubm90YXRpb24gaW4gYWN0aXZlQW5ub3RhdGlvbnNcIlxuICAgICAgICAgICAgOmtleT1cImFubm90YXRpb24uaWRcIlxuICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgICAgPERyYWdFbGVtZW50XG4gICAgICAgICAgICAgIHR5cGU9XCJhbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgOmRhdGE9XCJhbm5vdGF0aW9uLmlkXCI+XG4gICAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBhbm5vdGF0aW9uLmNvbG9yIHx8ICd0cmFuc3BhcmVudCcgfVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1kaS1jb21tZW50LXF1b3RlLW91dGxpbmVcIj48L3EtaWNvbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleHRyYWN0XCI+e3sgYW5ub3RhdGlvbi5zaG9ydHRleHQgfX08L3NwYW4+XG4gICAgICAgICAgICA8L0RyYWdFbGVtZW50PlxuICAgICAgICAgICAgPHEtc3BhY2UgLz5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgIGljb249XCJtZGktZGVsZXRlLW91dGxpbmVcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJhbm5vdGF0aW9uRGVsZXRlKGFubm90YXRpb24uaWQpXCIgLz5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC9xLWxpc3Q+XG4gICAgICA8L3EtbWVudT5cbiAgICA8L0Fubm90YXRlZFRleHQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyByZWYsIGNvbXB1dGVkLCB3YXRjaCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSdcbiAgaW1wb3J0IEFubm90YXRlZFRleHQgZnJvbSAnLi9Bbm5vdGF0ZWRUZXh0LnZ1ZSdcbiAgaW1wb3J0IE5vdGVJY29uIGZyb20gJy4vTm90ZUljb24udnVlJ1xuICBpbXBvcnQgRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uIGZyb20gJy4vRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IEludGVydmlld01ldGFkYXRhRm9ybSBmcm9tICcuL0ludGVydmlld01ldGFkYXRhRm9ybS52dWUnXG4gIGltcG9ydCBBbm5vdGF0aW9uIGZyb20gJ3N0b3Jlcy9tb2RlbHMvYW5ub3RhdGlvbidcbiAgaW1wb3J0IERlc2NyaXB0ZW0gZnJvbSAnc3RvcmVzL21vZGVscy9kZXNjcmlwdGVtJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgeyB1c2VJbnRlcmZhY2VTdG9yZSB9IGZyb20gJ3N0b3Jlcy9pbnRlcmZhY2UnXG4gIGltcG9ydCB7IGVsbGlwc2l6ZSB9IGZyb20gJ3N0b3Jlcy91dGlsJ1xuICBpbXBvcnQgRHJhZ0VsZW1lbnQgZnJvbSAnLi9EcmFnRWxlbWVudC52dWUnXG4gIGltcG9ydCB7IEFOTk9UQVRJT05fQ09MT1JTIH0gZnJvbSAnLi91dGlsJ1xuICBpbXBvcnQgdHlwZSB7IFRleHRTZWxlY3Rpb24gfSBmcm9tICcuL3V0aWwnXG5cbiAgLy8gQmFzZUFubm90YXRpb24gdGhhdCBpcyB1c2VkIHRvIGNvbW11bmljYXRlIHdpdGhcbiAgLy8gQW5ub3RhdGVkVGV4dC4gTm90IHRvIGJlIGNvbmZ1c2VkIHdpdGggbW9kZWwgQW5ub3RhdGlvblxuICB0eXBlIEJhc2VBbm5vdGF0aW9uID0ge1xuICAgICAgaWQ6IHN0cmluZyxcbiAgICAgIHN0YXJ0OiBudW1iZXIsXG4gICAgICBsZW5ndGg6IG51bWJlcixcbiAgICAgIGNvbG9yOiBzdHJpbmcgfCBudWxsLFxuICAgICAgY2xhc3M6IHN0cmluZ1xuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBpbnRlcnZpZXdJZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IG51bGwgfVxuICB9KVxuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3QgY29udGV4dE1lbnVWaXNpYmxlID0gcmVmKGZhbHNlKVxuXG4gIGNvbnN0IGlzTWV0YWRhdGFWaXNpYmxlID0gcmVmKGZhbHNlKVxuXG4gIGNvbnN0IGFjdGl2ZUFubm90YXRpb25zID0gcmVmPEFubm90YXRpb25bXT4oW10pXG4gIGNvbnN0IGFjdGl2ZURlc2NyaXB0ZW1zID0gcmVmPERlc2NyaXB0ZW1bXT4oW10pXG4gIGNvbnN0IGN1cnJlbnRTZWxlY3Rpb24gPSByZWY8VGV4dFNlbGVjdGlvbnwgbnVsbD4obnVsbClcblxuICAvLyBzZWxlY3Rpb25Db2xvciBpcyB0aGUgbWFya2VyIGNvbG9yLiBJZiBlbXB0eSwgd2UganVzdCB3YW50IHRvXG4gIC8vIHNlbGVjdCB0aGUgdGV4dC5cbiAgY29uc3Qgc2VsZWN0aW9uQ29sb3IgPSByZWYoXCJcIilcblxuICBjb25zdCB7IGhpZ2hsaWdodGVkRGVzY3JpcHRlbUlkIH0gPSBzdG9yZVRvUmVmcyhpc3RvcmUpXG5cbiAgY29uc3QgaW50ZXJ2aWV3ID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuZ2V0SW50ZXJ2aWV3KHByb3BzLmludGVydmlld0lkKSlcblxuICBpbXBvcnQgdHlwZSB7IEludGVydmlld0luZm8gfSBmcm9tICcuL0ludGVydmlld01ldGFkYXRhRm9ybS52dWUnXG5cbiAgZnVuY3Rpb24gbWV0YWRhdGFWYWxpZGF0ZSAoaW5mbzogSW50ZXJ2aWV3SW5mbykge1xuICAgICAgaXNNZXRhZGF0YVZpc2libGUudmFsdWUgPSBmYWxzZVxuICAgICAgaWYgKGludGVydmlldy52YWx1ZSkge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZUVsZW1lbnQoaW50ZXJ2aWV3LnZhbHVlLCB7XG4gICAgICAgICAgICAgIG5hbWU6IGluZm8ubmFtZSxcbiAgICAgICAgICAgICAgcGFydGljaXBhbnROYW1lOiBpbmZvLnBhcnRpY2lwYW50TmFtZSxcbiAgICAgICAgICAgICAgZGF0ZTogaW5mby5kYXRlLFxuICAgICAgICAgICAgICBub3RlOiBpbmZvLm5vdGVcbiAgICAgICAgICB9KVxuICAgICAgfVxuICB9XG5cbiAgY29uc3QgYW5ub3RhdGlvbjJjbGFzcyA9IChhOiBBbm5vdGF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBtYXBwaW5nOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgICAgICcjNzA4NGIwJzogJzInLFxuICAgICAgICAgICcjN2JjZjdiJzogJzQnLFxuICAgICAgICAgICcjZmY5Nzk3JzogJzEnLFxuICAgICAgICAgICcjZmZkYzk3JzogJzMnXG4gICAgICB9XG4gICAgICByZXR1cm4gYGNhdGVnb3J5JHttYXBwaW5nW2EuY29sb3JdID8/ICc5J31gXG4gIH1cblxuICBjb25zdCBhbm5vdGF0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGludGVydmlld0lkID0gcHJvcHMuaW50ZXJ2aWV3SWRcbiAgICAgIGNvbnN0IGludGVydmlld0Fubm90YXRpb25zOiBCYXNlQW5ub3RhdGlvbltdID0gc3RvcmUuZ2V0SW50ZXJ2aWV3QW5ub3RhdGlvbnMoaW50ZXJ2aWV3SWQpLm1hcChhID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBpbnRlcnZpZXdJZDogYS5pbnRlcnZpZXdJZCxcbiAgICAgICAgICAgICAgaWQ6IGEuaWQsXG4gICAgICAgICAgICAgIHN0YXJ0OiBhLnN0YXJ0SW5kZXgsXG4gICAgICAgICAgICAgIGxlbmd0aDogYS5lbmRJbmRleCAtIGEuc3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgY29sb3I6IGEuY29sb3IsXG4gICAgICAgICAgICAgIGNsYXNzOiBhbm5vdGF0aW9uMmNsYXNzKGEpXG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNvbnN0IGludGVydmlld0Rlc2NyaXB0ZW1zOiBCYXNlQW5ub3RhdGlvbltdID0gc3RvcmUuZ2V0RGVzY3JpcHRlbXNCeUludGVydmlldyhpbnRlcnZpZXdJZCkubWFwKGQgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGludGVydmlld0lkOiBkLmludGVydmlld0lkLFxuICAgICAgICAgICAgICBpZDogZC5pZCxcbiAgICAgICAgICAgICAgc3RhcnQ6IGQuc3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgbGVuZ3RoOiBkLmVuZEluZGV4IC0gZC5zdGFydEluZGV4LFxuICAgICAgICAgICAgICBjb2xvcjogbnVsbCxcbiAgICAgICAgICAgICAgY2xhc3M6ICdkZXNjcmlwdGVtJ1xuICAgICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gWyAuLi5pbnRlcnZpZXdBbm5vdGF0aW9ucywgLi4uaW50ZXJ2aWV3RGVzY3JpcHRlbXMgXVxuICB9KVxuXG4gIGNvbnN0IHNlbGVjdGlvblNob3J0dGV4dCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50U2VsZWN0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgdGV4dCA9IChpbnRlcnZpZXcudmFsdWU/LnRleHQgPz8gXCJcIikuc2xpY2UoY3VycmVudFNlbGVjdGlvbi52YWx1ZS5zdGFydEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VsZWN0aW9uLnZhbHVlLmVuZEluZGV4KVxuICAgICAgICAgIHJldHVybiBlbGxpcHNpemUodGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBnZXRTcGFuQ2xhc3NlcyAoc3BhbjogYW55KSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gc3Bhbi5hbm5vdGF0aW9ucy5tYXAoKGE6IGFueSkgPT4gYS5jbGFzcylcbiAgICAgIGNvbnN0IGRlc2NyaXB0ZW1Db3VudCA9IGNsYXNzZXMuZmlsdGVyKChjOiBzdHJpbmcpID0+IGMgPT09ICdkZXNjcmlwdGVtJykubGVuZ3RoXG4gICAgICBpZiAoZGVzY3JpcHRlbUNvdW50ID49IDIpIHtcbiAgICAgICAgICAvLyBNdWx0aXBsZSBkZXNjcmlwdGVtc1xuICAgICAgICAgIGNsYXNzZXMucHVzaCgnZGVzY3JpcHRlbXMnKVxuICAgICAgICAgIGNsYXNzZXMucHVzaChgZGVzY3JpcHRlbXMke2Rlc2NyaXB0ZW1Db3VudH1gKVxuICAgICAgfVxuICAgICAgcmV0dXJuIFsgLi4ubmV3IFNldChjbGFzc2VzKSBdLmpvaW4oXCIgXCIpXG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVNZXRhZGF0YSAoKSB7XG4gICAgICBpc01ldGFkYXRhVmlzaWJsZS52YWx1ZSA9ICFpc01ldGFkYXRhVmlzaWJsZS52YWx1ZVxuICAgICAgaWYgKGlzTWV0YWRhdGFWaXNpYmxlLnZhbHVlKSB7XG4gICAgICAgICAgLy8gU2Nyb2xsIGNvbnRhaW5lciB0byB0b3BcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHRBbm5vdGF0aW9uQ29udGFpbmVyXCIpXG4gICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBjb25zdCBzcGFuRXZlbnRzID0ge1xuICAgICAgLypcbiAgICAgIGNsaWNrOiAoZXZlbnQ6IEV2ZW50LCBhbm5vdGF0aW9uczogQmFzZUFubm90YXRpb25bXSkgPT4ge1xuICAgICAgICAgIC8vIGFubm90YXRpb25zIGNhbiBjb250YWluIGRlc2NyaXB0ZW1zIG9yIGFubm90YXRpb25zXG4gICAgICAgICAgaWYgKHNlbGVjdGVkQW5ub3RhdGlvbkluc3BlY3Rvci52YWx1ZSkge1xuICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYW5ub3RhdGlvbnMubWFwKGEgPT4gYCR7YS5zdGFydH06JHthLnN0YXJ0ICsgYS5sZW5ndGh9ICR7YS5jbGFzc31gKS5qb2luKFwiIFwiKVxuICAgICAgICAgICAgICBzZWxlY3RlZEFubm90YXRpb25JbnNwZWN0b3IudmFsdWUudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgKi9cbiAgICAgIC8vIERvIG5vdCBhY3RpdmF0ZSBtb3VzZW92ZXIvbGVhdmUgZm9yIHRoZSBtb21lbnQsIGl0IGhhcyBhIHNtYWxsIHBlcmZvcm1hbmNlIGNvc3RcbiAgICAgIG1vdXNlb3ZlcjogKF9ldmVudDogRXZlbnQsIGFubm90YXRpb25zOiBCYXNlQW5ub3RhdGlvbltdKSA9PiB7XG4gICAgICAgICAgYWN0aXZlRGVzY3JpcHRlbXMudmFsdWUgPSAoYW5ub3RhdGlvbnMuZmlsdGVyKGEgPT4gYS5jbGFzcyA9PT0gJ2Rlc2NyaXB0ZW0nKS5tYXAoYSA9PiBzdG9yZS5nZXREZXNjcmlwdGVtKGEuaWQpKSkgYXMgRGVzY3JpcHRlbVtdXG4gICAgICAgICAgYWN0aXZlQW5ub3RhdGlvbnMudmFsdWUgPSAoYW5ub3RhdGlvbnMuZmlsdGVyKGEgPT4gYS5jbGFzcyAhPT0gJ2Rlc2NyaXB0ZW0nKS5tYXAoYSA9PiBzdG9yZS5nZXRBbm5vdGF0aW9uKGEuaWQpKSkgYXMgQW5ub3RhdGlvbltdXG4gICAgICB9XG4gICAgICAvLyBtb3VzZWxlYXZlOiAoZXZlbnQ6IEV2ZW50LCBhbm5vdGF0aW9uczogQXJyYXk8dW5rbm93bj4pID0+IGNvbnNvbGUubG9nKFwiTW91c2VsZWF2ZVwiLCBldmVudCwgYW5ub3RhdGlvbnMpXG4gIH1cblxuICBjb25zdCBjdXJyZW50U2VsZWN0aW9uRGF0YUFzU3RyaW5nID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRTZWxlY3Rpb24udmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY3VycmVudFNlbGVjdGlvbi52YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICd7fSdcbiAgICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiB0ZXh0U2VsZWN0aW9uIChkYXRhOiBhbnkpIHtcbiAgICAgIGlmIChpbnRlcnZpZXcudmFsdWUpIHtcbiAgICAgICAgICBjdXJyZW50U2VsZWN0aW9uLnZhbHVlID0ge1xuICAgICAgICAgICAgICBzdGFydEluZGV4OiBkYXRhLmJlZ2luLFxuICAgICAgICAgICAgICBlbmRJbmRleDogZGF0YS5lbmQsXG4gICAgICAgICAgICAgIGludGVydmlld0lkOiBwcm9wcy5pbnRlcnZpZXdJZCxcbiAgICAgICAgICAgICAgdGV4dDogaW50ZXJ2aWV3LnZhbHVlLmZyYWdtZW50KGRhdGEuYmVnaW4sIGRhdGEuZW5kKVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDcmVhdGUgYW4gYW5ub3RhdGlvbiBpZiBhIG1hcmtlciBjb2xvciBpcyBzZWxlY3RlZFxuICAgICAgICAgIGlmIChzZWxlY3Rpb25Db2xvci52YWx1ZSkge1xuICAgICAgICAgICAgICBzdG9yZS5hZGRBbm5vdGF0aW9uKGN1cnJlbnRTZWxlY3Rpb24udmFsdWUsIHNlbGVjdGlvbkNvbG9yLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIEFkZCBhcHAtc3BlY2lmaWMgaW5mb3JtYXRpb24gd2hlbiBkcmFnZ2luZyB0ZXh0IGRpcmVjdGx5XG4gICAqL1xuICBmdW5jdGlvbiBvbkRyYWdTdGFydCAoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKGB1cG10L3NlbGVjdGlvbmAsIGN1cnJlbnRTZWxlY3Rpb25EYXRhQXNTdHJpbmcudmFsdWUpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhbm5vdGF0aW9uRGVsZXRlIChpZGVudGlmaWVyOiBzdHJpbmcpIHtcbiAgICAgIHN0b3JlLmRlbGV0ZUFubm90YXRpb24oaWRlbnRpZmllcilcbiAgfVxuXG4gIHdhdGNoKGhpZ2hsaWdodGVkRGVzY3JpcHRlbUlkLCAoKSA9PiB7XG4gICAgICBpZiAoaGlnaGxpZ2h0ZWREZXNjcmlwdGVtSWQudmFsdWUpIHtcbiAgICAgICAgICAvLyBTY3JvbGwgZWxlbWVudCBpbnRvIHZpZXdcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hbm5vdGF0aW9uLWlkc10uaGlnaGxpZ2h0ZWQnKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHRlZCcpKVxuICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtYW5ub3RhdGlvbi1pZHMqPVwiJHtoaWdobGlnaHRlZERlc2NyaXB0ZW1JZC52YWx1ZX1cIl1gKVxuICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJykpXG4gICAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCAmJiBlbGVtZW50c1swXSkge1xuICAgICAgICAgICAgICBlbGVtZW50c1swXS5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiBcImNlbnRlclwiLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KVxuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYW5ub3RhdGlvbi1pZHNdLmhpZ2hsaWdodGVkJykuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0ZWQnKSlcbiAgICAgIH1cbiAgfSlcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAudGV4dEFubm90YXRpb25Db250YWluZXIge1xuICB9XG4gIC50ZXh0QW5ub3RhdGlvbkNvbXBvbmVudCB7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIC5leHRyYWN0IHtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIHJvd1xuICAgIHYtaWY9XCJwcm9qZWN0XCI+XG5cbiAgICA8cS1zcGxpdHRlclxuICAgICAgdi1tb2RlbD1cInNwbGl0dGVyTW9kZWxcIlxuICAgICAgYmVmb3JlQ2xhc3M9XCJwcmludC1yZW1vdmVkXCJcbiAgICAgIDpsaW1pdHM9XCJbMTAsOTBdXCI+XG5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YmVmb3JlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZml0IGZ1bGx3aW5kb3ctaGVpZ2h0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtYm9sZFwiPkludGVydmlld3M8L2Rpdj5cbiAgICAgICAgICA8cS10YWJzXG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgY2xhc3M9XCJ1cG10LWludGVydmlld3NcIlxuICAgICAgICAgICAgYWN0aXZlLWNsYXNzPVwiYWN0aXZlLWludGVydmlldy1sYWJlbCAtXCJcbiAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICA6aW5saW5lTGFiZWw9XCJ0cnVlXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIlxuICAgICAgICAgICAgdmVydGljYWxcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLXJvdXRlLXRhYiB2LWZvcj1cImludGVydmlldyBpbiBwcm9qZWN0LmludGVydmlld3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIDp0bz1cInsgcXVlcnk6IHsgdGFiOiBpbnRlcnZpZXcubGFiZWwgfSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2subWV0YT1cImRlYnVnKGludGVydmlldylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIDppY29uPVwiaW50ZXJ2aWV3LmlzQWN0aXZlID8gJ21kaS1jb21tZW50LXRleHQtb3V0bGluZScgOiAnbWRpLWNvbW1lbnQtb2ZmLW91dGxpbmUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJpbnRlcnZpZXcuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbnRlcnZpZXcuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIDp0aXRsZT1cImludGVydmlldy5ub3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJpbnRlcnZpZXcubGFiZWxcIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpkZWZhdWx0PlxuICAgICAgICAgICAgICAgIDxFbGVtZW50TWVudVxuICAgICAgICAgICAgICAgICAgOmFjdGlvbnM9XCJtZW51QWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICA6cGFyYW1ldGVyPVwiaW50ZXJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgPC9FbGVtZW50TWVudT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcS1yb3V0ZS10YWI+XG4gICAgICAgICAgICA8cS1yb3V0ZS10YWIgOnRvPVwieyBxdWVyeTogeyB0YWI6IG5ld0ludGVydmlld0lkIH0gfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwibmV3SW50ZXJ2aWV3TGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmV3LWludGVydmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC1jbGFzcz1cIm5ldy1pbnRlcnZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwibmV3SW50ZXJ2aWV3SWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJhZGRcIj5cbiAgICAgICAgICAgIDwvcS1yb3V0ZS10YWI+XG4gICAgICAgICAgPC9xLXRhYnM+XG4gICAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICAgICAgPEdlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcmllc1JlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB0aXRsZT1cIkdlbmVyaWMgRGlhY2hyb25pYyBDYXRlZ29yaWVzXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZ2VuZXJpYy1kaWFjaHJvbmljLWNhdGVnb3JpZXNcIlxuICAgICAgICAgICAgOnByb2plY3RJZD1cInByb2plY3RJZFwiXG4gICAgICAgICAgICA6Y3VycmVudEludGVydmlld0lkPVwiY3VycmVudEludGVydmlld0lkXCI+XG4gICAgICAgICAgPC9HZW5lcmljRGlhY2hyb25pY0NhdGVnb3JpZXNSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ib2xkXCI+PC9kaXY+XG4gICAgICAgICAgPERldGFjaGVkTW9kZWxzUmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHRpdGxlPVwiRGV0YWNoZWQgbW9kZWxzXCJcbiAgICAgICAgICAgIGNsYXNzPVwidXBtdC1kZXRhY2hlZC1tb2RlbHNcIlxuICAgICAgICAgICAgOnByb2plY3RJZD1cInByb2plY3RJZFwiXG4gICAgICAgICAgICA6Z2VuZXJpY0dyYXBocz1cImdlbmVyaWNHcmFwaHNcIlxuICAgICAgICAgICAgOmN1cnJlbnRJbnRlcnZpZXdJZD1cImN1cnJlbnRJbnRlcnZpZXdJZFwiPlxuICAgICAgICAgIDwvRGV0YWNoZWRNb2RlbHNSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgICAgICA8R2VuZXJpY0NhdGVnb3JpZXNSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgdGl0bGU9XCJNZXJnZWQgZ2VuZXJpYyBzeW5jaHJvbmljIG1vZGVsXCJcbiAgICAgICAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0SWRcIlxuICAgICAgICAgICAgOmdlbmVyaWNHcmFwaHM9XCJnZW5lcmljR3JhcGhzXCJcbiAgICAgICAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8cS1leHBhbnNpb24taXRlbVxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIGRlbnNlLXRvZ2dsZVxuICAgICAgICAgICAgc3dpdGNoLXRvZ2dsZS1zaWRlXG4gICAgICAgICAgICA6ZHVyYXRpb249XCIwXCJcbiAgICAgICAgICAgIGV4cGFuZC1pY29uPVwibWRpLWV5ZS1vdXRsaW5lXCJcbiAgICAgICAgICAgIGV4cGFuZGVkLWljb249XCJtZGktZXllLW9mZi1vdXRsaW5lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiT3ZlcnZpZXdcIj5cblxuICAgICAgICAgICAgPEdlbmVyaWNDYXRlZ29yaWVzT3ZlcnZpZXdcbiAgICAgICAgICAgICAgOnByb2plY3RJZD1cInByb2plY3RJZFwiXG4gICAgICAgICAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIlxuICAgICAgICAgICAgICA6Y2F0ZWdvcmllcz1cImdlbmVyaWNHcmFwaHMuY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICAgIGxheW91dD1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgPC9xLWV4cGFuc2lvbi1pdGVtPlxuXG4gICAgICAgICAgPCEtLSA8TW9kZWxGb2xkZXJSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgOm1vZGVsZm9sZGVySWQ9XCJwcm9qZWN0Lm1vZGVsZm9sZGVyLmlkXCJcbiAgICAgICAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIj5cbiAgICAgICAgICA8L01vZGVsRm9sZGVyUmVwcmVzZW50YXRpb24+IC0tPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWZ0ZXI+XG4gICAgICAgIDxxLXRhYi1wYW5lbHNcbiAgICAgICAgICB2LW1vZGVsPVwiY3VycmVudEludGVydmlld0lkXCJcbiAgICAgICAgICBhbmltYXRlZFxuICAgICAgICAgIHZlcnRpY2FsXG4gICAgICAgICAgdHJhbnNpdGlvbi1wcmV2PVwianVtcC11cFwiXG4gICAgICAgICAgdHJhbnNpdGlvbi1uZXh0PVwianVtcC11cFwiXG4gICAgICAgICAgPlxuXG4gICAgICAgICAgPHEtdGFiLXBhbmVsIDpuYW1lPVwibmV3SW50ZXJ2aWV3SWRcIj5cbiAgICAgICAgICAgIDxJbnRlcnZpZXdNZXRhZGF0YUZvcm1cbiAgICAgICAgICAgICAgOmludGVydmlldz1cIm5ld0ludGVydmlld1RlbXBsYXRlXCJcbiAgICAgICAgICAgICAgQHZhbGlkYXRlPVwib25JbnRlcnZpZXdDcmVhdGVcIlxuICAgICAgICAgICAgICBAY2FuY2VsPVwib25JbnRlcnZpZXdDYW5jZWxcIj5cbiAgICAgICAgICAgIDwvSW50ZXJ2aWV3TWV0YWRhdGFGb3JtPlxuICAgICAgICAgIDwvcS10YWItcGFuZWw+XG5cbiAgICAgICAgICA8cS10YWItcGFuZWwgdi1mb3I9XCJpbnRlcnZpZXcgaW4gcHJvamVjdC5pbnRlcnZpZXdzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJpbnRlcnZpZXcuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaW50ZXJ2aWV3LmlkXCI+XG5cbiAgICAgICAgICAgIDxxLXNwbGl0dGVyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZml0IGZ1bGx3aW5kb3ctaGVpZ2h0XCJcbiAgICAgICAgICAgICAgYWZ0ZXJDbGFzcz1cInByaW50LXJlbW92ZWRcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwic3BsaXR0ZXJUcmFuc2NyaXB0XCJcbiAgICAgICAgICAgICAgOmxpbWl0cz1cIlsyLDk4XVwiPlxuXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YmVmb3JlPlxuICAgICAgICAgICAgICAgIDxxLXNwbGl0dGVyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZpdCBmdWxsd2luZG93LWhlaWdodCBmbGV4XCJcbiAgICAgICAgICAgICAgICAgIGJlZm9yZUNsYXNzPVwiZmxleCBjb2x1bW4gbm8tc2Nyb2xsIG5vLXdyYXBcIlxuICAgICAgICAgICAgICAgICAgYWZ0ZXJDbGFzcz1cImZsZXggY29sdW1uIG5vLXNjcm9sbCBuby13cmFwXCJcbiAgICAgICAgICAgICAgICAgIHVuaXQ9XCJweFwiXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsXG4gICAgICAgICAgICAgICAgICBzZXBhcmF0b3ItY2xhc3M9XCJiZy1ncmV5LTRcIlxuICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yLXN0eWxlPVwiaGVpZ2h0OiAzcHhcIlxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNwbGl0dGVySW50ZXJ2aWV3XCJcbiAgICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpiZWZvcmU+XG4gICAgICAgICAgICAgICAgICAgIDxJbnRlcnZpZXdSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBjb2wtZ3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgOmdlbmVyaWNHcmFwaHM9XCJnZW5lcmljR3JhcGhzXCJcbiAgICAgICAgICAgICAgICAgICAgICA6aW50ZXJ2aWV3SWQ9XCJpbnRlcnZpZXcuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9JbnRlcnZpZXdSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWZ0ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNNb2RlbEVkaXRvclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBjb2wtZ3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVkaXRlZFNwZWNpZmljU3luY2hyb25pY01vZGVsSWRcIlxuICAgICAgICAgICAgICAgICAgICAgIDptb2RlbElkPVwiZWRpdGVkU3BlY2lmaWNTeW5jaHJvbmljTW9kZWxJZFwiXG4gICAgICAgICAgICAgICAgICAgICAgOmdlbmVyaWNHcmFwaHM9XCJnZW5lcmljR3JhcGhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDwvcS1zcGxpdHRlcj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFmdGVyPlxuICAgICAgICAgICAgICAgIDxUZXh0QW5ub3RhdGlvblxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaXQgZnVsbHdpbmRvdy1oZWlnaHRcIlxuICAgICAgICAgICAgICAgICAgOmludGVydmlld0lkPVwiaW50ZXJ2aWV3LmlkXCI+XG4gICAgICAgICAgICAgICAgPC9UZXh0QW5ub3RhdGlvbj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcS1zcGxpdHRlcj5cblxuICAgICAgICAgIDwvcS10YWItcGFuZWw+XG5cbiAgICAgICAgPC9xLXRhYi1wYW5lbHM+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgPC9xLXNwbGl0dGVyPlxuXG4gICAgPHEtZHJhd2VyXG4gICAgICB2LW1vZGVsPVwiaW5mb1BhbmVsRGlzcGxheVwiXG4gICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgb3ZlcmxheVxuICAgICAgYm9yZGVyZWRcbiAgICAgID5cbiAgICAgIDxJbmZvUGFuZWxcbiAgICAgICAgOnByb2plY3RJZD1cInByb2plY3RJZFwiXG4gICAgICAgIDpnZW5lcmljR3JhcGhzPVwiZ2VuZXJpY0dyYXBoc1wiXG4gICAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIj5cbiAgICAgIDwvSW5mb1BhbmVsPlxuICAgICAgPHEtYnRuXG4gICAgICAgIGNsYXNzPVwiYWJzb2x1dGUtdG9wLXJpZ2h0XCJcbiAgICAgICAgZmxhdFxuICAgICAgICBzcXVhcmVcbiAgICAgICAgQGNsaWNrPVwiaW5mb1BhbmVsRGlzcGxheSA9ICFpbmZvUGFuZWxEaXNwbGF5XCJcbiAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgaWNvbj1cIm1kaS1jaGV2cm9uLWRvdWJsZS1yaWdodFwiXG4gICAgICAgID5cbiAgICAgIDwvcS1idG4+XG4gICAgPC9xLWRyYXdlcj5cbiAgICA8cS1wYWdlLXN0aWNreSBwb3NpdGlvbj1cInRvcC1yaWdodFwiPlxuICAgICAgPHEtYnRuXG4gICAgICAgIGZsYXRcbiAgICAgICAgY2xhc3M9XCJwcmludC1yZW1vdmVkXCJcbiAgICAgICAgc3F1YXJlXG4gICAgICAgIEBjbGljaz1cImluZm9QYW5lbERpc3BsYXkgPSAhaW5mb1BhbmVsRGlzcGxheVwiXG4gICAgICAgIDpjb2xvcj1cImluZm9QYW5lbENvbG9yXCJcbiAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgaWNvbj1cIm1kaS1jaGV2cm9uLWRvdWJsZS1sZWZ0XCJcbiAgICAgICAgaWNvbi1yaWdodD1cIm1kaS1jaGF0LW91dGxpbmVcIlxuICAgICAgICA+XG4gICAgICA8L3EtYnRuPlxuICAgIDwvcS1wYWdlLXN0aWNreT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJ1xuICBpbXBvcnQgeyBjb21wdXRlZCwgcmVmLCB3YXRjaCwgb25Vbm1vdW50ZWQgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnXG4gIGltcG9ydCB7IHVzZVF1YXNhciwgdXNlVGltZW91dCB9IGZyb20gJ3F1YXNhcidcblxuICBpbXBvcnQgSW50ZXJ2aWV3IGZyb20gJ3N0b3Jlcy9tb2RlbHMvaW50ZXJ2aWV3J1xuXG4gIGltcG9ydCBEZXRhY2hlZE1vZGVsc1JlcHJlc2VudGF0aW9uIGZyb20gJy4vRGV0YWNoZWRNb2RlbHNSZXByZXNlbnRhdGlvbi52dWUnXG4gIGltcG9ydCBFbGVtZW50TWVudSBmcm9tICcuL0VsZW1lbnRNZW51LnZ1ZSdcbiAgaW1wb3J0IEdlbmVyaWNDYXRlZ29yaWVzT3ZlcnZpZXcgZnJvbSAnY29tcG9uZW50cy9HZW5lcmljQ2F0ZWdvcmllc092ZXJ2aWV3LnZ1ZSdcbiAgaW1wb3J0IEdlbmVyaWNDYXRlZ29yaWVzUmVwcmVzZW50YXRpb24gZnJvbSAnY29tcG9uZW50cy9HZW5lcmljQ2F0ZWdvcmllc1JlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IEdlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcmllc1JlcHJlc2VudGF0aW9uIGZyb20gJ2NvbXBvbmVudHMvR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yaWVzUmVwcmVzZW50YXRpb24udnVlJ1xuICBpbXBvcnQgSW5mb1BhbmVsIGZyb20gJy4vSW5mb1BhbmVsLnZ1ZSdcbiAgaW1wb3J0IEludGVydmlld1JlcHJlc2VudGF0aW9uIGZyb20gJ2NvbXBvbmVudHMvSW50ZXJ2aWV3UmVwcmVzZW50YXRpb24udnVlJ1xuICAvLyAgaW1wb3J0IE1vZGVsRm9sZGVyUmVwcmVzZW50YXRpb24gZnJvbSAnLi9Nb2RlbEZvbGRlclJlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY01vZGVsRWRpdG9yIGZyb20gJy4vU3BlY2lmaWNTeW5jaHJvbmljTW9kZWxFZGl0b3IudnVlJ1xuICBpbXBvcnQgVGV4dEFubm90YXRpb24gZnJvbSAnY29tcG9uZW50cy9UZXh0QW5ub3RhdGlvbi52dWUnXG4gIGltcG9ydCBJbnRlcnZpZXdNZXRhZGF0YUZvcm0gZnJvbSAnY29tcG9uZW50cy9JbnRlcnZpZXdNZXRhZGF0YUZvcm0udnVlJ1xuICBpbXBvcnQgdHlwZSB7IEludGVydmlld0luZm8gfSBmcm9tICdjb21wb25lbnRzL0ludGVydmlld01ldGFkYXRhRm9ybS52dWUnXG5cbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuXG4gIGNvbnN0IGlzdG9yZSA9IHVzZUludGVyZmFjZVN0b3JlKClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBwcm9qZWN0SWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9XG4gIH0pXG5cbiAgY29uc3QgcHJvamVjdCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHAgPSBzdG9yZS5nZXRQcm9qZWN0KHByb3BzLnByb2plY3RJZClcbiAgICAgIHJldHVybiBwXG4gIH0pXG5cbiAgY29uc3QgJHEgPSB1c2VRdWFzYXIoKVxuXG4gIGNvbnN0IG5ld0ludGVydmlld0lkID0gXCJOZXdfaW50ZXJ2aWV3XCJcblxuICBjb25zdCBuZXdJbnRlcnZpZXdMYWJlbCA9IGNvbXB1dGVkKCgpID0+IHByb2plY3QudmFsdWUgJiYgcHJvamVjdC52YWx1ZS5pbnRlcnZpZXdzLmxlbmd0aCA/IFwiXCIgOiBcIkFkZCBhIGZpcnN0IGludGVydmlld1wiKVxuXG4gIGNvbnN0IG5ld0ludGVydmlld1RlbXBsYXRlID0ge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHBhcnRpY2lwYW50TmFtZTogXCJcIixcbiAgICAgIG5vdGU6IFwiXCIsXG4gICAgICBkYXRlOiBcIlwiLFxuICAgICAgdGV4dDogXCJcIlxuICB9XG5cbiAgY29uc3Qge1xuICAgICAgZWRpdGVkU3BlY2lmaWNTeW5jaHJvbmljTW9kZWxJZCxcbiAgICAgIGhpZ2hsaWdodGVkTW9tZW50SWRcbiAgfSA9IHN0b3JlVG9SZWZzKGlzdG9yZSlcblxuICBjb25zdCBzcGxpdHRlck1vZGVsID0gcmVmKDIwKVxuICBjb25zdCBzcGxpdHRlclRyYW5zY3JpcHQgPSByZWYoODApXG4gIGNvbnN0IHNwbGl0dGVySW50ZXJ2aWV3ID0gcmVmKDUwMClcblxuICBjb25zdCBpbmZvUGFuZWxEaXNwbGF5ID0gcmVmKGZhbHNlKVxuXG4gIGNvbnN0IF9jdXJyZW50SW50ZXJ2aWV3SWQgPSByZWYoXCJcIilcblxuICBjb25zdCBjdXJyZW50SW50ZXJ2aWV3SWQgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiBfY3VycmVudEludGVydmlld0lkLnZhbHVlIHx8IFwiXCJcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50ID0gX2N1cnJlbnRJbnRlcnZpZXdJZC52YWx1ZVxuICAgICAgICAgIF9jdXJyZW50SW50ZXJ2aWV3SWQudmFsdWUgPSB2YWx1ZVxuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gY3VycmVudCAmJiB2YWx1ZSAhPT0gbmV3SW50ZXJ2aWV3SWQpIHtcbiAgICAgICAgICAgICAgaXN0b3JlLnNldEN1cnJlbnRJbnRlcnZpZXcoc3RvcmUuZ2V0SW50ZXJ2aWV3KHZhbHVlKSlcbiAgICAgICAgICAgICAgLy8gRG8gbm90IHJlc2V0IGVkaXRlZFNwZWNpZmljU3luY2hyb25pY01vZGVsSWQgLSBpdCBtYXkgYmUgYSBnZW5lcmljIG1vZGVsIHRoYXQgd2Ugd2FudCB0byBrZWVwXG4gICAgICAgICAgICAgIC8vIGlzdG9yZS5zZXRFZGl0ZWRTcGVjaWZpY1N5bmNocm9uaWNNb2RlbElkKFwiXCIpXG4gICAgICAgICAgICAgIGlzdG9yZS5zZXRIaWdobGlnaHRlZE1vbWVudElkKFwiXCIpXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGdlbmVyaWNHcmFwaHMgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5nZXRHZW5lcmljU3luY2hyb25pY0dyYXBocyhwcm9wcy5wcm9qZWN0SWQpKVxuXG4gIGNvbnN0IGVkaXRlZFNwZWNpZmljU3luY2hyb25pY01vZGVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY01vZGVsKGVkaXRlZFNwZWNpZmljU3luY2hyb25pY01vZGVsSWQudmFsdWUpXG4gIH0pXG5cbiAgd2F0Y2goZWRpdGVkU3BlY2lmaWNTeW5jaHJvbmljTW9kZWxJZCwgKCkgPT4ge1xuICAgICAgLy8gTWFrZSBzdXJlIGEgdGFiIGlzIGFjdGl2ZVxuICAgICAgY29uc3QgbW9tZW50ID0gZWRpdGVkU3BlY2lmaWNTeW5jaHJvbmljTW9kZWwudmFsdWU/Lm1vbWVudFxuICAgICAgaWYgKG1vbWVudCkge1xuICAgICAgICAgIGN1cnJlbnRJbnRlcnZpZXdJZC52YWx1ZSA9IG1vbWVudC5pbnRlcnZpZXdJZFxuICAgICAgICAgIC8vIFNjcm9sbCB0aGUgbW9tZW50IGludG8gdmlld1xuICAgICAgICAgIHJlZ2lzdGVyVGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tb21lbnQ9XCIke21vbWVudC5pZH1cIl1gKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjcm9sbCB0byBtb21lbnRcIiwgZWxlbWVudClcbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIC8qIEZJWE1FOiByZW1vdmUgJ2FzIGFueScgd2hlbiB0aGUgY29udGFpbmVyIG9wdGlvbiBoYXMgYmVlbiBpbmNsdWRlZCBpbiBUUyBzcGVjICovXG4gICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwiY2VudGVyXCIsIGJlaGF2aW9yOiBcInNtb290aFwiLCBjb250YWluZXI6IFwibmVhcmVzdFwiIH0gYXMgYW55KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gR2VuZXJpYyBtb2RlbCAtIGlmIHRoZXJlIGlzIG5vIGN1cnJlbnQgaW50ZXJ2aWV3LCBhY3RpdmF0ZSB0aGUgZmlyc3Qgb25lXG4gICAgICAgICAgaWYgKCFjdXJyZW50SW50ZXJ2aWV3SWQudmFsdWUpIHtcbiAgICAgICAgICAgICAgY3VycmVudEludGVydmlld0lkLnZhbHVlID0gcHJvamVjdC52YWx1ZT8uaW50ZXJ2aWV3c1swXT8uaWQgPz8gXCJcIlxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfSlcblxuICB3YXRjaChoaWdobGlnaHRlZE1vbWVudElkLCAoKSA9PiB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIHJpZ2h0IGludGVydmlldyBpcyBzZWxlY3RlZFxuICAgICAgLy8gSWYgbm8gaGlnaGxpZ2h0LCBkbyBub3QgY2hhbmdlIGFueXRoaW5nXG4gICAgICBpZiAoaGlnaGxpZ2h0ZWRNb21lbnRJZC52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGludGVydmlldyAgPSBzdG9yZS5nZXRJbnRlcnZpZXdCeU1vbWVudChoaWdobGlnaHRlZE1vbWVudElkLnZhbHVlKVxuICAgICAgICAgIGlmIChpbnRlcnZpZXcgJiYgaW50ZXJ2aWV3LmlkICE9IGN1cnJlbnRJbnRlcnZpZXdJZC52YWx1ZSkge1xuICAgICAgICAgICAgICBjdXJyZW50SW50ZXJ2aWV3SWQudmFsdWUgPSBpbnRlcnZpZXcuaWRcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gU2Nyb2xsIHRoZSBtb21lbnQgaW50byB2aWV3XG4gICAgICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1vbWVudD1cIiR7aGlnaGxpZ2h0ZWRNb21lbnRJZC52YWx1ZX1cIl1gKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjcm9sbCB0byBtb21lbnRcIiwgZWxlbWVudClcbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIC8qIEZJWE1FOiByZW1vdmUgJ2FzIGFueScgd2hlbiB0aGUgY29udGFpbmVyIG9wdGlvbiBoYXMgYmVlbiBpbmNsdWRlZCBpbiBUUyBzcGVjICovXG4gICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwiY2VudGVyXCIsIGJlaGF2aW9yOiBcInNtb290aFwiLCBjb250YWluZXI6IFwibmVhcmVzdFwiIH0gYXMgYW55KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwMClcbiAgICAgIH1cbiAgfSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5wcm9qZWN0SWQsICgpID0+IHtcbiAgICAgIC8vIFRoZXJlIGFyZSBpbnRlcnZpZXdzLiBTZWxlY3QgdGhlIGZpcnN0IG9uZVxuICAgICAgaWYgKHByb2plY3QudmFsdWUgJiYgcHJvamVjdC52YWx1ZS5pbnRlcnZpZXdzWzBdKSB7XG4gICAgICAgICAgY3VycmVudEludGVydmlld0lkLnZhbHVlID0gcHJvamVjdC52YWx1ZS5pbnRlcnZpZXdzWzBdLmlkIHx8IFwiXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudEludGVydmlld0lkLnZhbHVlID0gbmV3SW50ZXJ2aWV3SWQgfHwgXCJcIlxuICAgICAgfVxuICAgICAgLy8gV2UgY2hhbmdlZCBwcm9qZWN0IC0gcmVzZXQgbmV3U1NDL25ld01vbWVudCBpbmRleGVzXG4gICAgICBpc3RvcmUucmVzZXRJbmRleGVzIChzdG9yZS5nZXRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeU5hbWVzQnlQcmVmaXgocHJvcHMucHJvamVjdElkLCBpc3RvcmUuU1NDUHJlZml4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmdldE1vbWVudHNCeVByb2plY3QocHJvcHMucHJvamVjdElkKS5tYXAobW9tZW50ID0+IG1vbWVudC5uYW1lKSlcbiAgfSxcbiAgICAgICAgLy8gVHJpZ2dlciBmdW5jdGlvbiBhdCBpbml0IHRpbWUgdG9vXG4gICAgICAgIHsgaW1tZWRpYXRlOiB0cnVlIH0pXG5cbiAgZnVuY3Rpb24gb25JbnRlcnZpZXdDcmVhdGUgKGluZm86IEludGVydmlld0luZm8pIHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgaW50ZXJ2aWV3XG4gICAgICBjb25zdCBpID0gc3RvcmUuZ2V0UmVwbygpLkludGVydmlldy5zYXZlKHtcbiAgICAgICAgICAvLyBUaGlzIHNob3VsZCBiZSAuLi5pbmZvXG4gICAgICAgICAgLy8gYnV0IHRoZW4gVHlwZVNjcmlwdCBoYXMgdHJvdWJsZSBkZXRlcm1pbmluZyBvdXRwdXQgdHlwZVxuICAgICAgICAgIG5hbWU6IGluZm8ubmFtZSxcbiAgICAgICAgICBwYXJ0aWNpcGFudE5hbWU6IGluZm8ucGFydGljaXBhbnROYW1lLFxuICAgICAgICAgIG5vdGU6IGluZm8ubm90ZSxcbiAgICAgICAgICBkYXRlOiBpbmZvLmRhdGUsXG4gICAgICAgICAgdGV4dDogaW5mby50ZXh0LFxuICAgICAgICAgIHBhcmVudElkOiBwcm9wcy5wcm9qZWN0SWQsXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IFtcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFuYWx5c2lzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgIHJvb3RNb21lbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBSb290IG1vbWVudCBpcyBub3QgdmlzaWJsZSBwZXItc2UsIGl0IHNlcnZlc1xuICAgICAgICAgICAgICAgICAgLy8gYXMgYSBwbGFjZWhvbGRlciBmb3IgaXRzIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIlJvb3QgbW9tZW50XCIsXG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNb21lbnQgMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0V4cGFuZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY3N5bmNocm9uaWNtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJJbml0aWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZpY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRlbXM6IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBjb25zdCByb290TW9tZW50ID0gaS5hbmFseXNpcz8ucm9vdE1vbWVudFxuICAgICAgaWYgKHJvb3RNb21lbnQpIHtcbiAgICAgICAgICAvLyBGaXggaW50ZXJ2aWV3SWQgZm9yIG5ldyBtb21lbnRzXG4gICAgICAgICAgc3RvcmUudXBkYXRlTW9tZW50KHJvb3RNb21lbnQuaWQsIHsgaW50ZXJ2aWV3SWQ6IGkuaWQgfSlcbiAgICAgICAgICBpZiAocm9vdE1vbWVudC5jaGlsZHJlbi5sZW5ndGggJiYgcm9vdE1vbWVudC5jaGlsZHJlblswXSkge1xuICAgICAgICAgICAgICBzdG9yZS51cGRhdGVNb21lbnQocm9vdE1vbWVudC5jaGlsZHJlblswXS5pZCwgeyBpbnRlcnZpZXdJZDogaS5pZCB9KVxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU3dpdGNoIHRvIHRhYiBvZiBuZXcgaW50ZXJ2aWV3XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICB0YWI6IGluZm8ubmFtZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHdoZW4gc3dpdGNoaW5nIHZpZXc6ICR7ZX1gKVxuICAgICAgICAgIH0pXG4gICAgICB9LCAzMDApXG4gIH1cblxuICBmdW5jdGlvbiBvbkludGVydmlld0NhbmNlbCAoKSB7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBhdCBsZWFzdCAxIGludGVydmlldywgYWN0aXZhdGUgaXRcbiAgICAgIGlmIChwcm9qZWN0LnZhbHVlICYmIHByb2plY3QudmFsdWUuaW50ZXJ2aWV3c1swXSkge1xuICAgICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgIHRhYjogcHJvamVjdC52YWx1ZS5pbnRlcnZpZXdzWzBdLm5hbWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciB3aGVuIHN3aXRjaGluZyB2aWV3OiAke2V9YClcbiAgICAgICAgICB9KVxuICAgICAgfVxuICB9XG5cbiAgY29uc3QgaW5mb1BhbmVsQ29sb3IgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gZ2VuZXJpY0dyYXBocy52YWx1ZS5lcnJvckNvdW50ID4gMCA/ICdyZWQnIDogJydcbiAgfSlcblxuICBvblVubW91bnRlZCgoKSA9PiB7XG4gICAgICBpc3RvcmUuc2V0Q3VycmVudEludGVydmlldyhudWxsKVxuICAgICAgaXN0b3JlLnNldEVkaXRlZFNwZWNpZmljU3luY2hyb25pY01vZGVsSWQoXCJcIilcbiAgICAgIC8vIGlzdG9yZS5zZXRDdXJyZW50UHJvamVjdChudWxsKVxuICB9KVxuXG4gIGZ1bmN0aW9uIGRlYnVnKGludGVydmlldzogSW50ZXJ2aWV3KSB7XG4gICAgICAod2luZG93IGFzIGFueSkuaW50ZXJ2aWV3ID0gaW50ZXJ2aWV3XG4gICAgICBjb25zb2xlLmxvZyhcIkludGVydmlld1wiLCBpbnRlcnZpZXcubmFtZSwgaW50ZXJ2aWV3KVxuICB9XG5cbiAgaW1wb3J0IHR5cGUgeyBOYW1lZEFjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvdXRpbC50cydcblxuICBjb25zdCBtZW51QWN0aW9uczogTmFtZWRBY3Rpb25bXSA9IFtcbiAgICAgIFsgXCJUb2dnbGUgYWN0aXZlIHN0YXR1c1wiLCAoaW50ZXJ2aWV3KSA9PiB7XG4gICAgICAgICAgc3RvcmUuc2V0QWN0aXZlSW50ZXJ2aWV3KHByb3BzLnByb2plY3RJZCwgaW50ZXJ2aWV3LmlkLCAhaW50ZXJ2aWV3LmlzQWN0aXZlKVxuICAgICAgfSBdLFxuICAgICAgWyBcIkRlbGV0ZVwiLCAoaW50ZXJ2aWV3KSA9PiB7XG4gICAgICAgICAgICRxLmRpYWxvZyh7XG4gICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtIGludGVydmlldyBkZWxldGlvbicsXG4gICAgICAgICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgICAgICAgICBtZXNzYWdlOiBgRG8geW91IGNvbmZpcm0gdGhlIGRlbGV0aW9uIG9mICA8c3Ryb25nPiR7aW50ZXJ2aWV3LmxhYmVsfTwvc3Ryb25nPj9gLFxuICAgICAgICAgICAgIGNhbmNlbDogdHJ1ZSxcbiAgICAgICAgICAgICBwZXJzaXN0ZW50OiB0cnVlXG4gICAgICAgICAgIH0pLm9uT2soKCkgPT4ge1xuICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBpbnRlcnZpZXcubmFtZVxuICAgICAgICAgICAgIGN1cnJlbnRJbnRlcnZpZXdJZC52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgICBzdG9yZS5kZWxldGVJbnRlcnZpZXcoaW50ZXJ2aWV3LmlkKVxuICAgICAgICAgICAgICRxLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRGVsZXRlZCBpbnRlcnZpZXcgJHtuYW1lfWBcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICBdXG4gIF1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuZnVsbHdpbmRvdy1oZWlnaHQge1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuXG4gIC50YWItbGFiZWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5xLXRhYl9fbGFiZWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuXG4gIC5hY3RpdmUtaW50ZXJ2aWV3LWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAucS10YWIge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLm5ldy1pbnRlcnZpZXcge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gIGRpdi5lZGl0ZWQtbW9kZWwtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gIH1cblxuICAubW9kZWwtcmVwcmVzZW50YXRpb24ge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC50b29sYmFyIHtcbiAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIG1heC13aWR0aDogODB2dztcbiAgfVxuXG4gIC5pbnRlcnZpZXctc3BsaXR0ZXIge1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIm1vZGVsIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl93aXRoTW9kaWZpZXJzIiwiX29wZW5CbG9jayIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2hvaXN0ZWRfMiIsIl9ob2lzdGVkXzMiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3dpdGhDdHgiLCJfaG9pc3RlZF80IiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfdXNlTW9kZWwiLCJfaG9pc3RlZF8xIiwiX25vcm1hbGl6ZUNsYXNzIiwiX3JlbmRlclNsb3QiLCJtb21lbnRzIiwiX2hvaXN0ZWRfNSIsIl9ub3JtYWxpemVTdHlsZSIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfd2l0aEtleXMiLCJ3aW5kb3ciLCJFIiwieCIsImgiLCJiIiwiYyIsIlMiLCJ3IiwiayIsIl8iLCJ6IiwiVCIsInkiLCJQIiwiTiIsIkwiLCJfaG9pc3RlZF82IiwiYW5ub3RhdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxNQUFBLFlBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLEVBQ1A7QUFBQSxFQUVFLE9BQU87QUFBQSxFQUVQLE1BQU8sT0FBTyxFQUFFLE9BQU8sS0FBSSxHQUFJO0FBQzdCLFVBQU0sWUFBWSxjQUFjO0FBQUEsTUFDOUIsOEJBQThCO0FBQUEsSUFDcEMsQ0FBSztBQUVELFVBQU0sRUFBRSxXQUFXLE1BQUssSUFBSztBQUFBLE1BQzNCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPLFNBQVMsTUFBTSxNQUFNLEtBQUs7QUFBQSxRQUNqQyxHQUFHO0FBQUEsTUFDWDtBQUFBLElBQ0E7QUFFSTtBQUFBLE1BQ0UsTUFBTSxHQUFJLE1BQU0sSUFBSSxNQUFRLE1BQU0sS0FBSyxPQUFTLFVBQVUsYUFBYSxTQUFTLENBQUEsR0FBSSxJQUFJO0FBQUEsTUFDeEYsTUFBTTtBQUFBLElBQ1o7QUFFSSxXQUFPLE1BQU0sVUFBVSxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsS0FBSztBQUFBLEVBQzNFO0FBQ0YsQ0FBQztBQzlCRCxNQUFBLFlBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsWUFBWTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSSxTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxXQUFXLE9BQUssQ0FBRSxLQUFLLElBQUksRUFBRyxTQUFTLENBQUM7QUFBQSxJQUM5QztBQUFBLElBRUksUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sV0FBVyxPQUFLO0FBQ2QsWUFBSSxFQUFFLFdBQVcsRUFBRyxRQUFPO0FBQzNCLFlBQUksT0FBTyxFQUFHLE9BQVEsWUFBWSxPQUFPLEVBQUcsT0FBUSxTQUFVLFFBQU87QUFDckUsZUFBTyxFQUFHLE1BQU8sS0FBSyxFQUFHLENBQUMsS0FBTSxFQUFHLENBQUM7QUFBQSxNQUN0QztBQUFBLElBQ047QUFBQSxJQUVJLGlCQUFpQjtBQUFBLElBRWpCLFlBQVk7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUVULGFBQWEsQ0FBRSxPQUFPLFFBQVEsTUFBTTtBQUFBLElBQ3BDLFlBQVksQ0FBRSxPQUFPLFFBQVEsTUFBTTtBQUFBLElBRW5DLGdCQUFnQixDQUFFLE9BQU8sUUFBUSxNQUFNO0FBQUEsSUFDdkMsZ0JBQWdCLENBQUUsT0FBTyxRQUFRLE1BQU07QUFBQSxFQUMzQztBQUFBLEVBRUUsT0FBTyxDQUFFLG1CQUFtQjtBQUFBLEVBRTVCLE1BQU8sT0FBTyxFQUFFLE9BQU8sS0FBSSxHQUFJO0FBQzdCLFVBQU0sRUFBRSxPQUFPLEVBQUUsR0FBRSxFQUFFLElBQUssbUJBQWtCO0FBQzVDLFVBQU0sU0FBUyxRQUFRLE9BQU8sRUFBRTtBQUVoQyxVQUFNLFVBQVUsSUFBSSxJQUFJO0FBQ3hCLFVBQU0sV0FBVztBQUFBLE1BQ2YsUUFBUSxJQUFJLElBQUk7QUFBQSxNQUNoQixPQUFPLElBQUksSUFBSTtBQUFBLElBQ3JCO0FBRUksVUFBTSxVQUFVO0FBQUEsTUFBUyxNQUN2QixzQkFDTSxNQUFNLGVBQWUsT0FBTyxrQ0FBa0MsMEJBQTBCLGdCQUMzRSxNQUFNLFlBQVksT0FBTyxhQUFhLFVBQVUsTUFDaEUsT0FBTyxVQUFVLE9BQU8sc0JBQXNCO0FBQUEsSUFDdkQ7QUFFSSxVQUFNLFdBQVcsU0FBUyxNQUFPLE1BQU0sZUFBZSxPQUFPLFdBQVcsT0FBUTtBQUNoRixVQUFNLE9BQU8sU0FBUyxNQUFPLE1BQU0sWUFBWSxPQUFPLFdBQVcsT0FBUTtBQUV6RSxVQUFNLGlCQUFpQixTQUFTLE1BQzlCLE1BQU0sV0FBVyxTQUNiLE1BQU0sU0FDTCxNQUFNLFNBQVMsTUFBTSxDQUFFLElBQUksTUFBTyxDQUFFLElBQUksUUFBUSxDQUN0RDtBQUVELGFBQVMsWUFBYSxPQUFPO0FBQzNCLGNBQVEsTUFBTSxTQUFTLE1BQU0sUUFBUSxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU07QUFBQSxJQUNsRTtBQUVBLFVBQU0sU0FBUyxTQUFTLE9BQU87QUFBQSxNQUM3QixDQUFFLEtBQUssS0FBSyxHQUFJO0FBQUEsUUFDZCxDQUFFLFNBQVMsUUFBUyxZQUFZLE1BQU0sVUFBVTtBQUFBLE1BQ3hEO0FBQUEsSUFDQSxFQUFNO0FBRUYsUUFBSSxPQUFPLFlBQVksU0FBUyxjQUFjO0FBRTlDLGFBQVMsSUFBSyxLQUFLO0FBQ2pCLFVBQUksSUFBSSxZQUFZLE1BQU07QUFDeEIsY0FBTSxPQUFPLFFBQVEsTUFBTSxzQkFBcUIsRUFBSSxTQUFTLEtBQUs7QUFFbEUsZ0JBQVEsTUFBTSxlQUFlLE9BQU8sT0FBTztBQUMzQyxxQkFBYSxNQUFNLFNBQVMsTUFBTSxNQUFNO0FBQ3hDLGtCQUFVLEtBQUssSUFBSSxZQUFZLGVBQWUsTUFBTyxDQUFDLEdBQUksS0FBSyxJQUFJLGVBQWUsTUFBTyxDQUFDLEdBQUksTUFBTSxVQUFVLENBQUM7QUFDL0csd0JBQWdCLE1BQU0sWUFBWSxPQUFPLElBQUksT0FDeEMsTUFBTSxlQUFlLE9BQU8sSUFBSyxHQUFHLEtBQUssUUFBUSxPQUFPLEtBQUssTUFDN0QsTUFBTSxTQUFTLE1BQU8sU0FBUyxJQUFJLElBQUksTUFBTSxPQUFRO0FBRTFELGdCQUFRLE1BQU0sVUFBVSxJQUFJLG9CQUFvQjtBQUNoRDtBQUFBLE1BQ0Y7QUFFQSxVQUFJLElBQUksWUFBWSxNQUFNO0FBQ3hCLFlBQUksaUJBQWlCLE1BQU0sWUFBWTtBQUNyQyxlQUFLLHFCQUFxQixZQUFZO0FBQUEsUUFDeEM7QUFFQSxnQkFBUSxNQUFNLFVBQVUsT0FBTyxvQkFBb0I7QUFDbkQ7QUFBQSxNQUNGO0FBRUEsWUFBTSxNQUFNLFVBQ1IsZ0JBQ0MsSUFBSSxjQUFjLFFBQVEsS0FBSyxLQUNoQyxJQUFJLFNBQVUsTUFBTSxlQUFlLE9BQU8sTUFBTSxHQUFHO0FBRXZELHFCQUFlLEtBQUssSUFBSSxZQUFZLGVBQWUsTUFBTyxDQUFDLEdBQUksS0FBSyxJQUFJLGVBQWUsTUFBTyxDQUFDLEdBQUksR0FBRyxDQUFDO0FBRXZHLGVBQVUsS0FBSyxLQUFLLEVBQUcsTUFBTSxNQUFPLFNBQVMsU0FBVSxZQUFZLFlBQVk7QUFFL0UsVUFBSSxNQUFNLG9CQUFvQixRQUFRLE1BQU0sZUFBZSxjQUFjO0FBQ3ZFLGFBQUsscUJBQXFCLFlBQVk7QUFBQSxNQUN4QztBQUFBLElBQ0Y7QUFFQSxVQUFNLGVBQWUsU0FBUyxNQUFNO0FBRWxDLGFBQU8sQ0FBRTtBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxVQUNFLENBQUUsTUFBTSxlQUFlLE9BQU8sYUFBYSxZQUFZLEdBQUk7QUFBQSxVQUMzRCxTQUFTO0FBQUEsVUFDVCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDdkI7QUFBQSxNQUNBLENBQU87QUFBQSxJQUNILENBQUM7QUFFRCxhQUFTLFVBQVcsS0FBSyxRQUFRO0FBQy9CLFVBQUksTUFBTSxPQUFRLElBQUs7QUFDckIsYUFBSyxxQkFBcUIsT0FBUSxDQUFDLENBQUU7QUFBQSxNQUN2QyxXQUNTLE1BQU0sT0FBUSxJQUFLO0FBQzFCLGFBQUsscUJBQXFCLE9BQVEsQ0FBQyxDQUFFO0FBQUEsTUFDdkM7QUFBQSxJQUNGO0FBRUEsVUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFLO0FBQ2pDLGdCQUFVLEdBQUcsZUFBZSxLQUFLO0FBQUEsSUFDbkMsQ0FBQztBQUVELFVBQU0sTUFBTSxNQUFNLFFBQVEsTUFBTTtBQUM5QixlQUFTLE1BQU07QUFDYixrQkFBVSxNQUFNLFlBQVksZUFBZSxLQUFLO0FBQUEsTUFDbEQsQ0FBQztBQUFBLElBQ0gsQ0FBQztBQUVELFdBQU8sTUFBTTtBQUNYLFlBQU0sUUFBUTtBQUFBLFFBQ1osRUFBRSxPQUFPO0FBQUEsVUFDUCxLQUFLLFNBQVM7QUFBQSxVQUNkLE9BQU87QUFBQSxZQUNMLDBDQUEwQyxNQUFNLFlBQVksT0FBTyxTQUFTO0FBQUEsWUFDNUUsTUFBTTtBQUFBLFVBQ2xCO0FBQUEsVUFDVSxPQUFPLE9BQU8sTUFBTTtBQUFBLFFBQzlCLEdBQVcsTUFBTSxNQUFNLE1BQU0sQ0FBQztBQUFBLFFBRXRCLEVBQUUsT0FBTztBQUFBLFVBQ1AsT0FBTztBQUFBLFlBQ0w7QUFBQSxZQUNBLE1BQU07QUFBQSxVQUNsQjtBQUFBLFVBQ1UsT0FBTyxNQUFNO0FBQUEsVUFDYixpQkFBaUIsTUFBTSxZQUFZLE9BQU8sU0FBUztBQUFBLFFBQzdELEdBQVc7QUFBQSxVQUNEO0FBQUEsWUFDRTtBQUFBLFlBQ0EsRUFBRSxPQUFPLDJDQUEwQztBQUFBLFlBQ25ELE1BQU0sTUFBTSxTQUFTO0FBQUEsWUFDckI7QUFBQSxZQUNBLE1BQU0sWUFBWTtBQUFBLFlBQ2xCLE1BQU0sYUFBYTtBQUFBLFVBQy9CO0FBQUEsUUFDQSxDQUFTO0FBQUEsUUFFRCxFQUFFLE9BQU87QUFBQSxVQUNQLEtBQUssU0FBUztBQUFBLFVBQ2QsT0FBTztBQUFBLFlBQ0wseUNBQXlDLE1BQU0sWUFBWSxPQUFPLEtBQUs7QUFBQSxZQUN2RSxNQUFNO0FBQUEsVUFDbEI7QUFBQSxVQUNVLE9BQU8sT0FBTyxNQUFNO0FBQUEsUUFDOUIsR0FBVyxNQUFNLE1BQU0sS0FBSyxDQUFDO0FBQUEsTUFDN0I7QUFFTSxhQUFPLEVBQUUsT0FBTztBQUFBLFFBQ2QsT0FBTyxRQUFRO0FBQUEsUUFDZixLQUFLO0FBQUEsTUFDYixHQUFTLFdBQVcsTUFBTSxTQUFTLEtBQUssQ0FBQztBQUFBLElBQ3JDO0FBQUEsRUFDRjtBQUNGLENBQUM7QUN4TU0sTUFBTSxxQkFBcUI7QUFBQSxFQUNoQyxVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxXQUFXLE9BQUs7QUFBQSxNQUNkO0FBQUEsTUFBYTtBQUFBLE1BQ2I7QUFBQSxNQUFnQjtBQUFBLE1BQ2hCO0FBQUEsTUFBTztBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsSUFDaEMsRUFBTSxTQUFTLENBQUM7QUFBQSxFQUNoQjtBQUFBLEVBQ0UsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sV0FBVyxPQUFLLEVBQUUsV0FBVztBQUFBLEVBQ2pDO0FBQUEsRUFDRSxRQUFRO0FBQ1Y7QUFFZSxTQUFBLGdCQUFZO0FBQ3pCLFFBQU0sRUFBRSxPQUFPLE9BQU8sRUFBRSxHQUFFLEVBQUUsSUFBSyxtQkFBa0I7QUFFbkQsUUFBTSxVQUFVLE9BQU8sV0FBVyxhQUFhO0FBQy9DLE1BQUksWUFBWSxlQUFlO0FBQzdCLFlBQVEsTUFBTSwwQ0FBMEM7QUFDeEQsV0FBTztBQUFBLEVBQ1Q7QUFFQSxRQUFNLFNBQVMsU0FBUyxNQUFNO0FBQzVCLFVBQU0sTUFBTSxNQUFNO0FBRWxCLFdBQU87QUFBQSxNQUNMLEtBQUssSUFBSSxRQUFRLEtBQUssTUFBTTtBQUFBLE1BQzVCLE9BQU8sSUFBSSxRQUFRLE9BQU8sTUFBTTtBQUFBLE1BQ2hDLFFBQVEsSUFBSSxRQUFRLFFBQVEsTUFBTTtBQUFBLE1BQ2xDLE1BQU0sSUFBSSxRQUFRLE1BQU0sTUFBTTtBQUFBLE1BQzlCLFVBQVUsUUFBUSxTQUFTLFFBQVE7QUFBQSxNQUNuQyxZQUFZLFFBQVEsVUFBVSxRQUFRO0FBQUEsSUFDNUM7QUFBQSxFQUNFLENBQUM7QUFFRCxRQUFNLE1BQU0sU0FBUyxNQUFNLFFBQVEsT0FBTyxNQUFNO0FBQ2hELFFBQU0sUUFBUSxTQUFTLE1BQU0sUUFBUSxNQUFNLE1BQU07QUFDakQsUUFBTSxTQUFTLFNBQVMsTUFBTSxRQUFRLE9BQU8sTUFBTTtBQUNuRCxRQUFNLE9BQU8sU0FBUyxNQUFNLFFBQVEsS0FBSyxNQUFNO0FBRS9DLFFBQU0sUUFBUSxTQUFTLE1BQU07QUFDM0IsUUFBSSxPQUFPLEdBQUcsT0FBTztBQUVyQixVQUFNLE9BQU8sT0FBTztBQUNwQixVQUFNLE1BQU0sR0FBRyxLQUFLLFFBQVEsT0FBTyxLQUFLO0FBRXhDLFFBQUksS0FBSyxRQUFRLFFBQVEsSUFBSSxVQUFVLEdBQUc7QUFDeEMsYUFBTyxHQUFJLElBQUk7SUFDakIsV0FDUyxLQUFLLFdBQVcsUUFBUSxPQUFPLFVBQVUsR0FBRztBQUNuRCxhQUFPLEdBQUksQ0FBQyxPQUFPLEtBQUs7QUFBQSxJQUMxQjtBQUVBLFFBQUksS0FBSyxTQUFTLFFBQVEsS0FBSyxVQUFVLEdBQUc7QUFDMUMsYUFBTyxHQUFJLE1BQU0sS0FBSyxLQUFLO0FBQUEsSUFDN0IsV0FDUyxLQUFLLFVBQVUsUUFBUSxNQUFNLFVBQVUsR0FBRztBQUNqRCxhQUFPLEdBQUksQ0FBQyxNQUFNLE1BQU0sS0FBSztBQUFBLElBQy9CO0FBRUEsVUFBTSxNQUFNLEVBQUUsV0FBVyxhQUFjLFNBQVcsSUFBSSxJQUFJO0FBRTFELFFBQUksTUFBTSxRQUFRO0FBQ2hCLFVBQUksU0FBUyxHQUFJLE1BQU0sT0FBUSxFQUFHLE1BQVEsTUFBTSxPQUFRLENBQUMsQ0FBRTtBQUFBLElBQzdEO0FBRUEsUUFBSSxLQUFLLGFBQWEsTUFBTTtBQUMxQixVQUFJLEtBQUssVUFBVSxHQUFHO0FBQ3BCLFlBQUssR0FBRyxLQUFLLFFBQVEsT0FBTyxVQUFVLFVBQVcsR0FBSSxLQUFLLEtBQUs7QUFBQSxNQUNqRTtBQUNBLFVBQUksTUFBTSxVQUFVLEdBQUc7QUFDckIsWUFBSyxHQUFHLEtBQUssUUFBUSxPQUFPLFNBQVMsV0FBWSxHQUFJLE1BQU0sS0FBSztBQUFBLE1BQ2xFO0FBQUEsSUFDRixXQUNTLEtBQUssZUFBZSxNQUFNO0FBQ2pDLFVBQUksSUFBSSxVQUFVLEdBQUc7QUFDbkIsWUFBSSxNQUFNLEdBQUksSUFBSSxLQUFLO0FBQUEsTUFDekI7QUFDQSxVQUFJLE9BQU8sVUFBVSxHQUFHO0FBQ3RCLFlBQUksU0FBUyxHQUFJLE9BQU8sS0FBSztBQUFBLE1BQy9CO0FBQUEsSUFDRjtBQUVBLFdBQU87QUFBQSxFQUNULENBQUM7QUFFRCxRQUFNLFVBQVU7QUFBQSxJQUFTLE1BQ3ZCLHVDQUF3QyxNQUFNLFFBQVEsbUJBQ2hDLE1BQU0sV0FBVyxPQUFPLFdBQVcsUUFBUTtBQUFBLEVBQ3JFO0FBRUUsV0FBUyxpQkFBa0IsT0FBTztBQUNoQyxVQUFNLFVBQVUsTUFBTSxNQUFNLE9BQU87QUFFbkMsV0FBTztBQUFBLE1BQUU7QUFBQSxNQUFPO0FBQUEsUUFDZCxPQUFPLFFBQVE7QUFBQSxRQUNmLE9BQU8sTUFBTTtBQUFBLE1BQ25CO0FBQUEsTUFDSSxNQUFNLFdBQVcsT0FDYixVQUNBLENBQUUsRUFBRSxPQUFPLE9BQU8sQ0FBQztBQUFBLElBQzNCO0FBQUEsRUFDRTtBQUVBLFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFDQTtBQ2xIQSxNQUFBLGNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLEVBRVAsTUFBTyxHQUFHLEVBQUUsU0FBUztBQUNuQixVQUFNLEVBQUUsaUJBQWdCLElBQUssY0FBYTtBQUMxQyxXQUFPLE1BQU0saUJBQWlCLEtBQUs7QUFBQSxFQUNyQztBQUNGLENBQUM7Ozs7Ozs7OztBQzRCQyxVQUFNLFFBQVEsZ0JBQUE7QUFFZCxVQUFNLFNBQVMsa0JBQUE7QUFFZixVQUFNLFFBQVE7QUFLZCxVQUFNLFFBQVEsU0FBUyxNQUFNO0FBQ3pCLFlBQU0sSUFBSSxNQUFNLGlCQUFpQixNQUFNLFdBQVcsTUFBTSxPQUFPO0FBQy9ELGFBQU87QUFBQSxJQUNYLENBQUM7QUFFRCxVQUFNLFdBQVcsU0FBUztBQUFBLE1BQ3RCLE1BQU87QUFDSCxlQUFPLE9BQU8sT0FBTyxRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVc7QUFBQSxNQUM5RDtBQUFBLE1BQ0EsSUFBSyxRQUFpQjtBQUNsQixjQUFNLHVCQUF1QixNQUFNLFdBQVcsTUFBTSxTQUFTLE1BQU07QUFBQSxNQUN2RTtBQUFBLElBQUEsQ0FDSDtBQUVELGFBQVMsa0JBQW1CLGNBQXNCO0FBQzlDLGFBQU8sbUNBQW1DLFlBQVk7QUFBQSxJQUMxRDtBQUVBLGFBQVMsUUFBUztBQUNiLGFBQWUsZ0JBQWdCLE1BQU07QUFDdEMsY0FBUSxJQUFJLGlCQUFpQixFQUFFLGVBQWUsTUFBTSxPQUFPO0FBQUEsSUFDL0Q7QUFJQSxVQUFNLGNBQTZCO0FBQUEsTUFDL0IsQ0FBRSx3QkFBd0IsTUFBTTtBQUM1QixpQkFBUyxRQUFRLENBQUMsU0FBUztBQUFBLE1BQy9CLENBQUU7QUFBQSxNQUVGLENBQUUsVUFBVSxDQUFDQSxXQUFVO0FBQ25CLFlBQUksT0FBTyxvQ0FBb0NBLE9BQU0sTUFBTSxJQUFJO0FBQzNELDRCQUFrQixFQUFFO0FBQUEsUUFDeEI7QUFDQSxjQUFNLG9CQUFvQkEsT0FBTSxFQUFFO0FBQUEsTUFDdEMsQ0FBQztBQUFBLElBQUE7Ozs7Ozs7O3NCQW5GTEMsbUJBMkJNLE9BQUE7QUFBQSxJQTNCRCxPQUFNO0FBQUEsSUFDTCxXQUFTLE9BQUE7QUFBQSxFQUFBLEdBQUE7QUFBQSxJQUNiQyxZQVVjLE9BQUEsYUFBQSxHQUFBO0FBQUEsTUFUWixNQUFLO0FBQUEsTUFDSixNQUFNLE9BQUE7QUFBQSxNQUNOLFNBQUtDLGNBQU8sT0FBQSxPQUFLLENBQUEsTUFBQSxDQUFBO0FBQUEsSUFBQSxHQUFBO0FBQUEsdUJBQ2xCLE1BS3NEO0FBQUEsUUFMdERELFlBS3NELE9BQUE7QUFBQSxVQUpwRCxPQUFNO0FBQUEsVUFDTixNQUFBO0FBQUEsVUFDQSxPQUFBO0FBQUEsVUFDQSxNQUFLO0FBQUEsVUFDSixNQUFNLE9BQUEsV0FBUSxjQUFBO0FBQUEsUUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLE1BQUEsQ0FBQTtBQUFBOzs7SUFLWCxPQUFBLFNBQUFFLGFBSFJDLFlBVVEsTUFBQTtBQUFBLE1BQUEsS0FBQTtBQUFBLE1BVE4sT0FBTTtBQUFBLE1BQ04sT0FBTTtBQUFBLE1BRU4sTUFBQTtBQUFBLE1BQ0EsT0FBQTtBQUFBLE1BQ0EsV0FBQTtBQUFBLE1BQ0MsU0FBSyxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUUsT0FBQSxrQkFBa0IsT0FBQSxNQUFNLE1BQU0sRUFBRTtBQUFBLElBQUEsR0FBQTtBQUFBLHVCQUV4QyxNQUF1QjtBQUFBLFFBQUFDLGdCQUFBQyxnQkFBcEIsT0FBQSxPQUFPLE1BQU0sSUFBSSxHQUFBLENBQUE7QUFBQSxNQUFBLENBQUE7QUFBQTs7SUFFdEJMLFlBRXVCLE9BQUEsYUFBQSxHQUFBO0FBQUEsTUFEcEIsU0FBUyxPQUFBO0FBQUEsTUFDVCxXQUFXLE9BQUE7QUFBQSxJQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsV0FBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUMwQmhCLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sU0FBUyxrQkFBQTtBQUVmLFVBQU0sUUFBUTtBQU9kLFVBQU0sVUFBVSxTQUFTLE1BQU07QUFDM0IsWUFBTSxJQUFJLE1BQU0sZUFBZSxNQUFNLFNBQVM7QUFDOUMsYUFBTztBQUFBLElBQ1gsQ0FBQztBQUVELGFBQVMsbUJBQW9CO0FBQ3pCLFlBQU0sZ0JBQWdCLE1BQU0sb0JBQW9CLE1BQU0sV0FBVyxPQUFPLG9CQUFvQjtBQUM1RixVQUFJLGVBQWU7QUFDZixlQUFPLG1DQUFtQyxjQUFjLE1BQU0sRUFBRTtBQUFBLE1BQ3BFO0FBQ0EsYUFBTztBQUFBLElBQ1g7Ozs7Ozs7QUF0RU8sTUFBQU0sZUFBQSxFQUFBLE9BQU0sU0FBQTtBQUNILE1BQUFDLGVBQUEsRUFBQSxPQUFNLGtCQUFBOzs7RUFZVCxPQUFNOzs7c0JBakJiUixtQkF1Q00sT0FBQTtBQUFBLElBdkNELE9BQU07QUFBQSxJQUNMLEtBQUssT0FBQTtBQUFBLElBQ0wsZ0JBQWMsT0FBQTtBQUFBLEVBQUEsR0FBQTtBQUFBLElBRWxCUyxnQkFXTSxPQVhORixjQVdNO0FBQUEsTUFWSkUsZ0JBQWdELFFBQWhERCxjQUFnREYsZ0JBQWYsT0FBQSxLQUFLLEdBQUEsQ0FBQTtBQUFBLE1BQ3RDTCxZQVFRLE1BQUE7QUFBQSxRQVBOLE1BQUE7QUFBQSxRQUNBLE9BQUE7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLE1BQUs7QUFBQSxRQUNMLFdBQUE7QUFBQSxNQUFBLEdBQUE7QUFBQSx5QkFDQSxNQUNZO0FBQUEsVUFEWkEsWUFDWSxVQUFBLE1BQUE7QUFBQSxZQUFBLFNBQUFTLFFBREQsTUFBbUYsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBO0FBQUEsY0FBQUwsZ0JBQW5GLHVGQUFtRixFQUFBO0FBQUEsY0FBQUksZ0JBQUksTUFBQSxNQUFBLE1BQUEsRUFBQTtBQUFBLGNBQUFKLGdCQUFBLHNFQUFrRSxFQUFBO0FBQUEsY0FBQUksZ0JBQUksTUFBQSxNQUFBLE1BQUEsRUFBQTtBQUFBLGNBQUFKLGdCQUFBLDJIQUN4SyxFQUFBO0FBQUEsWUFBQSxFQUFBLENBQUE7QUFBQTs7Ozs7O0lBS08sT0FBQSxXQUFBRixVQUFBLEdBRFhILG1CQVNNLE9BVE5XLGNBU007QUFBQSxPQUFBUixVQUFBLElBQUEsR0FOSkgsbUJBSzhCWSxVQUFBLE1BQUFDLFdBSlosT0FBQSxRQUFRLGdCQUFjLENBQS9CLFVBQUs7NEJBRGRULFlBSzhCLE9BQUEsNkJBQUEsR0FBQTtBQUFBLFVBSDNCLFdBQVcsT0FBQTtBQUFBLFVBQ1gsU0FBUyxNQUFNO0FBQUEsVUFDZixLQUFLLE1BQU07QUFBQSxRQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsYUFBQSxTQUFBLENBQUE7QUFBQTs7SUFJaEJILFlBU1EsTUFBQTtBQUFBLE1BUk4sTUFBQTtBQUFBLE1BQ0EsT0FBTTtBQUFBLE1BQ04sT0FBQTtBQUFBLE1BQ0EsTUFBSztBQUFBLE1BQ0wsT0FBTTtBQUFBLE1BQ0wsU0FBSyxzQ0FBRSxPQUFBO01BQ1IsTUFBSztBQUFBLE1BQ0wsV0FBQTtBQUFBLElBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUEosVUFBTSxhQUFhYSxTQUFXLFNBQUEsWUFBa0I7QUFFaEQsVUFBTSxZQUFZLFNBQVMsTUFBTTtBQUM3QixhQUFPLFdBQVcsUUFBUSxtQ0FBbUM7QUFBQSxJQUNqRSxDQUFDOzs7Ozs7QUFoQ00sTUFBQUMsZUFBQSxFQUFBLE9BQU0sb0NBQUE7QUFRTixNQUFBUixlQUFBLEVBQUEsT0FBTSxpQkFBQTs7c0JBVGJQLG1CQVlNLE9BQUE7QUFBQSxJQVpBLE9BQUtnQixlQUFFLE9BQUEsU0FBUztBQUFBLEVBQUEsR0FBQTtBQUFBLElBQ3BCUCxnQkFPTSxPQVBOTSxjQU9NO0FBQUEsTUFOSmQsWUFJbUQsT0FBQTtBQUFBLFFBSGpELE9BQUtlLGVBQUEsQ0FBQyxrQkFDRSxPQUFBLGVBQWUsQ0FBQTtBQUFBLFFBQ3RCLFNBQUssT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUFkLGNBQUEsQ0FBQSxXQUFPLE9BQUEsYUFBVSxDQUFJLE9BQUEsWUFBVSxDQUFBLE1BQUEsQ0FBQTtBQUFBLFFBQ3BDLE1BQU0sb0JBQWEsT0FBQSxlQUFlLE9BQUE7QUFBQSxNQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxNQUFBLENBQUE7QUFBQSxNQUNyQ2UsV0FBMkIsS0FBQSxRQUFBLFVBQUEsQ0FBQSxHQUFBLFFBQUEsSUFBQTtBQUFBLElBQUEsQ0FBQTtBQUFBLElBRTdCUixnQkFFTSxPQUZORixjQUVNO0FBQUEsTUFESlUsV0FBYSxLQUFBLFFBQUEsV0FBQSxDQUFBLEdBQUEsUUFBQSxJQUFBO0FBQUEsSUFBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQzRJakIsVUFBTSxTQUFTLGtCQUFBO0FBRWYsVUFBTSxRQUFRLGdCQUFBO0FBUWQsVUFBTSxRQUFRO0FBSWQsVUFBTSxLQUFLLFVBQUE7QUFFWCxVQUFNLFlBQVksSUFBSSxJQUFJO0FBRTFCLFVBQU0sU0FBUyxVQUFBO0FBRWYsYUFBUyxRQUFTO0FBQ2IsYUFBZSxrQkFBa0IsTUFBTTtBQUN4QyxjQUFRLElBQUksbUJBQW1CLE1BQU0sZUFBZTtBQUFBLElBQ3hEO0FBRUEsVUFBTSxVQUFVLFNBQVMsTUFBZ0I7QUFDckMsWUFBTSxZQUFZLE1BQU0sZ0JBQWdCLFVBQ2pDLElBQUksQ0FBQSxRQUFPLE1BQU0sY0FBYywwQkFBMEIsSUFBSSxFQUFFLEdBQUcsUUFBUSxFQUMxRSxPQUFPLENBQUEsT0FBTSxDQUFDLENBQUMsRUFBRTtBQUN4QixhQUFPLE1BQU0sV0FBVyxTQUFTO0FBQUEsSUFDckMsQ0FBQztBQUVELFVBQU0scUJBQXFCLFNBQVMsTUFBTTtBQUN0QyxZQUFNLGFBQWEsTUFBTSxnQkFBZ0IsVUFDbEMsSUFBSSxTQUFPLE1BQU0sY0FBYywwQkFBMEIsSUFBSSxFQUFFLENBQUMsRUFDaEUsT0FBTyxDQUFBLFNBQVEsUUFBUSxLQUFLLGVBQWU7QUFDbEQsYUFBTztBQUFBLElBQ1gsQ0FBQztBQUVELFVBQU0saUJBQWlCLFNBQVMsTUFBTSxRQUFRLE9BQU8sT0FBTyxDQUFDLE1BQWMsRUFBRSxnQkFBZ0IsTUFBTSxrQkFBa0IsS0FBSyxDQUFBLENBQUU7QUFFNUgsVUFBTSxnQkFBZ0IsU0FBUyxNQUFNLE1BQU0sZ0JBQWdCLG1CQUFtQixhQUFhO0FBQzNGLFVBQU0sbUJBQW1CLFNBQVMsTUFBTSxNQUFNLGdCQUFnQixtQkFBbUIsZ0JBQWdCO0FBRWpHLFVBQU0sc0JBQXNCLFNBQVM7QUFBQSxNQUNqQyxNQUFPO0FBQ0gsZUFBTyxNQUFNLGtCQUFrQixNQUFNLGdCQUFnQixPQUFPO0FBQUEsTUFDaEU7QUFBQSxNQUNBLElBQUssT0FBZTtBQUNoQixjQUFNLFlBQVksTUFBTSxnQkFBZ0I7QUFDeEMsZ0JBQVEsSUFBSSxZQUFZLE1BQU0sZ0JBQWdCLElBQUksT0FBTyxLQUFLLEVBQUU7QUFDaEUsV0FBRyxPQUFPO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixTQUFTLGtDQUFrQyxVQUFVLE1BQU0sZ0RBQWdELE1BQU0sZ0JBQWdCLElBQUksd0JBQXdCLEtBQUs7QUFBQSxVQUNsSyxRQUFRO0FBQUEsVUFDUixZQUFZO0FBQUEsUUFBQSxDQUNmLEVBQUUsS0FBSyxNQUFNO0FBQ1Ysb0JBQVUsUUFBUSxDQUFBLFFBQU87QUFDckIsa0JBQU0sY0FBYyxLQUFLLEVBQUUsTUFBTSxPQUFPO0FBQUEsVUFDNUMsQ0FBQztBQUNELGFBQUcsT0FBTztBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sU0FBUyxXQUFXLFVBQVUsTUFBTSxtQkFBbUIsS0FBSztBQUFBLFVBQUEsQ0FDL0Q7QUFBQSxRQUNKLENBQUM7QUFBQSxNQUNOO0FBQUEsSUFBQSxDQUNIO0FBRUQsVUFBTSxnQkFBZ0IsU0FBUztBQUFBLE1BQzNCLE1BQU87QUFDSCxlQUFPLE1BQU0sZ0JBQWdCO0FBQUEsTUFDakM7QUFBQSxNQUNBLElBQUssT0FBZTtBQUNoQixjQUFNLDhCQUErQixNQUFNLGdCQUFnQixXQUFXLE1BQU0sZ0JBQWdCLE1BQU0sS0FBSztBQUFBLE1BQzNHO0FBQUEsSUFBQSxDQUNIO0FBRUQsVUFBTSwrQkFBK0IsU0FBUyxNQUFNO0FBQ2hELFlBQU0sUUFBUSxlQUFlLE1BQU07QUFDbkMsVUFBSSxPQUFPO0FBQ1AsZUFBTyxjQUFjLEtBQUs7QUFBQSxNQUM5QixPQUFPO0FBQ0gsZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNKLENBQUM7QUFFRCxVQUFNLGVBQWUsU0FBUyxNQUFNO0FBQ2hDLFVBQUksU0FBUztBQUNiLFlBQU0sUUFBUSxRQUFRLE1BQU07QUFDNUIsVUFBSSxPQUFPO0FBQ1AsaUJBQVMsY0FBYyxLQUFLO0FBQUEsTUFDaEMsT0FBTztBQUNILGlCQUFTO0FBQUEsTUFDYjtBQUNBLFlBQU0sYUFBYSxtQkFBbUIsTUFBTTtBQUM1QyxVQUFJLFlBQVk7QUFDWixpQkFBUyxHQUFHLE1BQU0sV0FBVyxVQUFVO0FBQUEsTUFDM0M7QUFDQSxhQUFPO0FBQUEsSUFDWCxDQUFDO0FBRUQsYUFBUyxnQkFBaUIsVUFBa0I7QUFDeEMsYUFBTyx1QkFBdUIsUUFBUTtBQUFBLElBQzFDO0FBRUEsYUFBUyw0QkFBNkIsU0FBaUI7QUFDbkQsYUFBTyxtQ0FBbUMsT0FBTztBQUFBLElBQ3JEO0FBRUEsYUFBUyxZQUFhQyxVQUF3QjtBQUMxQyxZQUFNLE9BQU8sTUFBTSxRQUFBO0FBQ25CLFlBQU0sUUFBUSxPQUFPLFlBQVksS0FBSyxVQUFVLE1BQU0sSUFBSSxDQUFDLE1BQWlCLENBQUUsRUFBRSxJQUFJLEVBQUUsS0FBTSxDQUFDLENBQUM7QUFFOUYsYUFBTyxPQUFPLFFBQVEsUUFBUUEsVUFBUyxhQUFhLENBQUMsRUFDaEQsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBRSxNQUFNLEVBQUUsR0FBSSxJQUFtQixNQUFPLENBQUM7QUFBQSxJQUNyRTtBQUVBLGFBQVMsZ0JBQWlCLFlBQWtDO0FBQ3hELFlBQU0sT0FBTyxNQUFNLFFBQUE7QUFFbkIsWUFBTSw2QkFBNkIsV0FBVyxJQUFJLENBQUEsU0FBUSxLQUFLLHlCQUF5QjtBQUN4RixZQUFNLFFBQVEsT0FBTyxZQUFZLEtBQUssd0JBQ2pDLEtBQUssMEJBQTBCLEVBQy9CLElBQUksQ0FBQyxNQUErQixDQUFFLEVBQUUsSUFBSSxFQUFFLElBQUssQ0FBQyxDQUFDO0FBQzFELGFBQU8sMkJBQTJCLElBQUksQ0FBQyxZQUFvQixDQUFDLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUE4QjtBQUFBLElBQ3hIO0FBRUEsYUFBUyxVQUFXLGVBQXVCO0FBQ3ZDLGFBQU8sS0FBSztBQUFBLFFBQ1IsT0FBTztBQUFBLFVBQ0gsS0FBSztBQUFBLFFBQUE7QUFBQSxNQUNULENBQ0gsRUFBRSxNQUFNLENBQUEsTUFBSztBQUNWLGdCQUFRLElBQUksOEJBQThCLENBQUMsRUFBRTtBQUFBLE1BQ2pELENBQUM7QUFBQSxJQUNMO0FBR0EsVUFBTSxjQUE2QjtBQUFBLE1BQy9CLENBQUUsU0FBUyxNQUFNLE1BQUEsQ0FBUTtBQUFBLElBQUE7Ozs7Ozs7OztBQTdQbkIsTUFBQVgsZUFBQSxFQUFBLE9BQU0sa0NBQUE7QUE2Q1EsTUFBQUMsZUFBQSxFQUFBLE9BQU0seUJBQUE7QUFZTixNQUFBRyxlQUFBLEVBQUEsT0FBTSx5QkFBQTtBQXdCckIsTUFBQVEsZUFBQSxFQUFBLE9BQU0scUNBQUE7OztBQXJISixTQUFBLE9BQUEsbUJBQUFoQixVQUFBLEdBRFhILG1CQWdJTSxPQUFBO0FBQUEsSUFBQSxLQUFBO0FBQUEsSUFoSUQsT0FBTTtBQUFBLElBRUwsd0JBQXNCLE9BQUEsZ0JBQWdCO0FBQUEsRUFBQSxHQUFBO0FBQUEsSUFDMUNDLFlBNEh3QixPQUFBLHFCQUFBLEdBQUE7QUFBQSxNQTNIdEIsT0FBTTtBQUFBLE1BQ0wscUJBQWlCLEVBQUEsYUFBaUIsT0FBQSxnQkFBZ0IsVUFBVSxVQUFNLEVBQUE7QUFBQSxJQUFBLEdBQUE7QUFBQSxNQUdsRCxRQUFNUyxRQUNyQixNQXlHYztBQUFBLFFBekdkVCxZQXlHYyxPQUFBLGFBQUEsR0FBQTtBQUFBLFVBeEdaLE9BQUtlLGVBQUEsQ0FBQyxrQ0FBZ0MsRUFBQSxhQUNmLE9BQUEsZ0JBQWdCLFFBQVEsT0FBQSxDQUFNLENBQUE7QUFBQSxVQUNwRCxPQUFLSSxlQUFBLEVBQUEsaUJBQXFCLE9BQUEsZ0JBQWdCLFNBQUssZUFBQTtBQUFBLFVBQy9DLFNBQU8sT0FBQTtBQUFBLFVBQ1IsTUFBSztBQUFBLFVBQ0osTUFBTSxPQUFBLGdCQUFnQjtBQUFBLFFBQUEsR0FBQTtBQUFBLDJCQUN2QixNQUkyQjtBQUFBLFlBSjNCbkIsWUFJMkIsT0FBQTtBQUFBLGNBSHpCLEtBQUk7QUFBQSxjQUNKLE9BQU07QUFBQSxjQUNOLE1BQUs7QUFBQSxjQUNMLE1BQUs7QUFBQSxZQUFBLEdBQUEsTUFBQSxHQUFBO0FBQUEsWUFFQyxPQUFBLG9CQUFBRSxhQURSQyxZQUdnQyxPQUFBO0FBQUEsY0FBQSxLQUFBO0FBQUEsY0FEOUIsTUFBSztBQUFBLGNBQ0wsTUFBSztBQUFBLFlBQUEsQ0FBQSxLQUFBaUIsbUJBQUEsSUFBQSxJQUFBO0FBQUEsWUFFQyxPQUFBLGlCQUFBbEIsYUFEUkMsWUFHcUMsT0FBQTtBQUFBLGNBQUEsS0FBQTtBQUFBLGNBRG5DLE1BQUs7QUFBQSxjQUNMLE1BQUs7QUFBQSxZQUFBLENBQUEsS0FBQWlCLG1CQUFBLElBQUEsSUFBQTtBQUFBLFlBRThELE9BQUEsZ0JBQWdCLFFBQVEsdUJBQTdGakIsWUFLWSxVQUFBO0FBQUEsY0FBQSxLQUFBO0FBQUEsY0FMRCxPQUFNO0FBQUEsY0FBVyxRQUFPO0FBQUEsY0FBWSxNQUFLO0FBQUEsWUFBQSxHQUFBO0FBQUEsK0JBQzdDLE1BQTRDO0FBQUEsaUJBQUFELFVBQUEsSUFBQSxHQUFqREgsbUJBR01ZLFVBQUEsTUFBQUMsV0FIb0IsT0FBQSxnQkFBZ0IsUUFBTSxDQUFwQyxPQUFPLFFBQUc7c0NBQXRCYixtQkFHTSxPQUFBLEVBRkcsSUFBQSxHQUFRTSxnQkFDWixLQUFLLEdBQUEsQ0FBQTtBQUFBLGdCQUFBLENBQUEsR0FBQSxHQUFBO0FBQUE7OztZQUdaRyxnQkF1RU8sUUF2RVBGLGNBdUVPO0FBQUEsY0FBQUYsZ0JBQUFDLGdCQXJFRixPQUFBLHFCQUFxQixPQUFBLGdCQUFnQixJQUFJLENBQUEsSUFBSSxLQUFDLENBQUE7QUFBQSxjQUFBTCxZQTJCWixNQUFBO0FBQUEsZ0JBMUJQLE9BQU8sT0FBQTtBQUFBLGdCQUNSLE1BQUs7QUFBQSxnQkFDTCxPQUFBO0FBQUEsY0FBQSxHQUFBO0FBQUEsaUNBQzNCLE1Bc0JTO0FBQUEsa0JBdEJUQSxZQXNCUyxPQUFBLEVBQUEsT0FBQSxTQXRCRCxHQUFNO0FBQUEsb0JBQVEsU0FBQVMsUUFDZCxNQUFnQztBQUFBLHVCQUFBUCxVQUFBLElBQUEsR0FBdENILG1CQW9CTVksVUFBQSxNQUFBQyxXQXBCaUIsT0FBQSxnQkFBYyxDQUF4QixXQUFNOzRDQUFuQmIsbUJBb0JNLE9BQUE7QUFBQSwwQkFuQkEsT0FBTTtBQUFBLDBCQUNMLEtBQUssT0FBTztBQUFBLHdCQUFBLEdBQUE7QUFBQSwwQkFDakJDLFlBU1EsTUFBQTtBQUFBLDRCQVJMLE9BQU8sT0FBTztBQUFBLDRCQUNmLE9BQU07QUFBQSw0QkFDTixXQUFBO0FBQUEsNEJBQ0EsTUFBQTtBQUFBLDRCQUNDLFNBQUssQ0FBQSxXQUFFLE9BQUEsZ0JBQWdCLE9BQU8sRUFBRTtBQUFBLDRCQUNqQyxNQUFLO0FBQUEsNEJBQ0osT0FBS21CLGVBQUEsRUFBQSxpQkFBcUIsT0FBTyxTQUFLLGVBQUE7QUFBQSw0QkFDdkMsTUFBSztBQUFBLDBCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxXQUFBLE9BQUEsQ0FBQTtBQUFBLDBCQUVQbkIsWUFNUSxNQUFBO0FBQUEsNEJBTE4sTUFBSztBQUFBLDRCQUNMLE1BQUE7QUFBQSw0QkFDQSxPQUFBO0FBQUEsNEJBQ0EsTUFBSztBQUFBLDRCQUNKLFNBQUssQ0FBQSxXQUFFLE9BQUEsNEJBQTRCLE9BQU8seUJBQXlCLE1BQUUsRUFBQTtBQUFBLDBCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxDQUFBO0FBQUE7Ozs7O2tDQUduRSxNQUNUSyxnQkFBRyxzQkFBZSxNQUFNLEdBQUEsQ0FBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7d0RBQVcsT0FDckMsRUFBQTtBQUFBLGNBQUFMLFlBK0IwRCxNQUFBO0FBQUEsZ0JBOUJ2RCxPQUFPLE9BQUE7QUFBQSxnQkFDUixNQUFLO0FBQUEsZ0JBQ0wsT0FBQTtBQUFBLGNBQUEsR0FBQTtBQUFBLGlDQUNBLE1BMEJTO0FBQUEsa0JBMUJUQSxZQTBCUyxPQUFBLEVBQUEsT0FBQSxTQTFCRCxHQUFNO0FBQUEsb0JBQVEsU0FBQVMsUUFHZixNQUErQztBQUFBLHVCQUFBUCxVQUFBLElBQUEsR0FGcERILG1CQVlNWSxVQUFBLE1BQUFDLFdBVnlCLE9BQUEsWUFBWSxPQUFBLE9BQU8sR0FBQSxDQUFBLENBQXBDLE1BQU0sS0FBSyxNQUFBOzRDQUZ6QmIsbUJBWU0sT0FBQTtBQUFBLDBCQVpELE9BQU07QUFBQSwwQkFDTCxLQUFLO0FBQUEsd0JBQUEsR0FBQTtBQUFBLDBCQUVUQyxZQU9RLE1BQUE7QUFBQSw0QkFQRCxPQUFNO0FBQUEsNEJBQ04sT0FBTTtBQUFBLDRCQUNOLFdBQUE7QUFBQSw0QkFDQyxPQUFPO0FBQUEsNEJBQ1IsTUFBSztBQUFBLDRCQUNKLFNBQUssQ0FBQSxXQUFFLE9BQUEsVUFBVSxJQUFJO0FBQUEsNEJBQ3RCLE1BQUs7QUFBQSwwQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsU0FBQSxDQUFBO0FBQUEsMEJBRVpRLGdCQUEyRCxVQUEzREQsY0FBMkRGLGdCQUFqQixLQUFLLEdBQUEsQ0FBQTtBQUFBLHdCQUFBLENBQUE7QUFBQTt1QkFFakRILFVBQUEsSUFBQSxHQUFBSCxtQkFXTVksMkJBVGtDLE9BQUEsZ0JBQWdCLE9BQUEsa0JBQWtCLEdBQUEsQ0FBQSxDQUE1RCxNQUFNLFNBQVMsS0FBSyxNQUFBOzRDQUZsQ1osbUJBV00sT0FBQTtBQUFBLDBCQVhELE9BQU07QUFBQSwwQkFDTCxLQUFLO0FBQUEsd0JBQUEsR0FBQTtBQUFBLDBCQUVUQyxZQU1RLE1BQUE7QUFBQSw0QkFORCxPQUFNO0FBQUEsNEJBQ04sT0FBTTtBQUFBLDRCQUNOLFdBQUE7QUFBQSw0QkFDQyxPQUFPO0FBQUEsNEJBQ1AsU0FBSyxDQUFBLFdBQUUsT0FBQSw0QkFBNEIsT0FBTztBQUFBLDRCQUMzQyxNQUFLO0FBQUEsMEJBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLFNBQUEsQ0FBQTtBQUFBLDBCQUVaUSxnQkFBMkQsVUFBM0RFLGNBQTJETCxnQkFBakIsS0FBSyxHQUFBLENBQUE7QUFBQSx3QkFBQSxDQUFBO0FBQUE7Ozs7a0JBRTFDRCxnQkFBQSxNQUNUQyxnQkFBRyxPQUFBLFFBQVEsU0FBUyxPQUFBLG1CQUFtQixNQUFNLEdBQUEsQ0FBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7Y0FDL0NMLFlBUWUsWUFBQTtBQUFBLGdCQVBiLEtBQUk7QUFBQSxnQkFBQSxZQUNLLE9BQUE7QUFBQSxnQkFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxzQkFBbUI7QUFBQSxnQkFDNUIsYUFBQTtBQUFBLGNBQUEsR0FBQTtBQUFBLGdCQUVBLFNBQUFTLFFBQUEsQ0FFNEQsVUFIL0M7QUFBQSxrQkFDYlQsWUFFNEQsUUFBQTtBQUFBLG9CQUFBLFlBRjFDLE1BQU07QUFBQSxvQkFBQSx1QkFBQSxDQUFBLFdBQU4sTUFBTSxRQUFLO0FBQUEsb0JBQ25CLFNBQUssT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFHLE9BQU8sT0FBNEIsT0FBQTtBQUFBLG9CQUM1QyxPQUFBO0FBQUEsb0JBQU0sV0FBQTtBQUFBLG9CQUFVLFNBQUE7QUFBQSxvQkFBUyxTQUFLcUIsU0FBUSxNQUFNLEtBQUcsQ0FBQSxPQUFBLENBQUE7QUFBQSxrQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLGNBQUEsdUJBQUEsU0FBQSxDQUFBO0FBQUE7Ozs7WUFHNURyQixZQUFXLE1BQUE7QUFBQSxZQUNYQSxZQUMyQixPQUFBLGFBQUEsR0FBQSxFQUF4QixTQUFTLE9BQUEsYUFBVztBQUFBLFlBQ3ZCQSxZQUU0QixPQUFBLGNBQUEsR0FBQTtBQUFBLGNBRDFCLE9BQU07QUFBQSxjQUFBLFlBQ0csT0FBQTtBQUFBLGNBQUEsdUJBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLE9BQUEsZ0JBQWE7QUFBQSxZQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUE7Ozs7dUJBSzVCLE1BUU07QUFBQSxRQVJOUSxnQkFRTSxPQVJOVSxjQVFNO0FBQUEsV0FBQWhCLFVBQUEsSUFBQSxHQVBKSCxtQkFNSVksVUFBQSxNQUFBQyxXQUxZLE9BQUEsZ0JBQWdCLFVBQVEsQ0FBL0IsUUFBRztnQ0FEWlQsWUFNSSwwQ0FBQTtBQUFBLGNBSkQsS0FBSyxJQUFJO0FBQUEsY0FDVCxlQUFlLE9BQUE7QUFBQSxjQUNmLGlCQUFpQjtBQUFBLGNBQ2pCLG9CQUFvQixPQUFBO0FBQUEsWUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLGlCQUFBLG1CQUFBLG9CQUFBLENBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0Y3QixVQUFNLFFBQVE7QUFPZCxhQUFTLFFBQVM7QUFDZCxjQUFRLElBQUksc0JBQXNCLE1BQU0sa0JBQWtCO0FBQzFELGNBQVEsSUFBSSxpQkFBaUIsTUFBTSxhQUFhO0FBQUEsSUFDcEQ7Ozs7Ozs7QUF2Q08sTUFBQUcsZUFBQSxFQUFBLE9BQU0sWUFBQTtBQVlOLE1BQUFDLGVBQUEsRUFBQSxPQUFNLHlCQUFBOztzQkFoQmJSLG1CQXdCTSxPQUFBO0FBQUEsSUF4QkQsT0FBTTtBQUFBLElBQ0wsS0FBSyxPQUFBO0FBQUEsSUFDTCxnQkFBYyxPQUFBO0FBQUEsRUFBQSxHQUFBO0FBQUEsSUFFbEJTLGdCQVdNLE9BWE5GLGNBV007QUFBQSxNQUFBRixnQkFBQUMsZ0JBWG9CLE9BQUEsS0FBSyxJQUFHLEtBQ2hDLENBQUE7QUFBQSxNQUFBTCxZQVNRLE1BQUE7QUFBQSxRQVJOLE1BQUE7QUFBQSxRQUNBLE9BQUE7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLE1BQUs7QUFBQSxRQUNKLFNBQU8sT0FBQTtBQUFBLFFBQ1IsV0FBQTtBQUFBLE1BQUEsR0FBQTtBQUFBLHlCQUNBLE1BQ1k7QUFBQSxVQURaQSxZQUNZLFVBQUEsTUFBQTtBQUFBLFlBQUEsU0FBQVMsUUFERCxNQUNYLENBQUEsR0FBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQTtBQUFBLGNBQUFMLGdCQURXLHdKQUNYLEVBQUE7QUFBQSxZQUFBLEVBQUEsQ0FBQTtBQUFBOzs7Ozs7SUFHSkksZ0JBT00sT0FQTkQsY0FPTTtBQUFBLE9BQUFMLFVBQUEsSUFBQSxHQU5KSCxtQkFLNkNZLFVBQUEsTUFBQUMsV0FKeEIsT0FBQSxjQUFjLFlBQVUsQ0FBcEMsYUFBUTs0QkFEakJULFlBSzZDLE9BQUEsK0JBQUEsR0FBQTtBQUFBLFVBSDFDLEtBQUssU0FBUztBQUFBLFVBQ2QsZUFBZSxPQUFBO0FBQUEsVUFDZixpQkFBaUI7QUFBQSxVQUNqQixvQkFBb0IsT0FBQTtBQUFBLFFBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxpQkFBQSxtQkFBQSxvQkFBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNtRzNCLFVBQU0sU0FBUyxrQkFBQTtBQUVmLFVBQU0sUUFBUSxnQkFBQTtBQU9kLFVBQU0sUUFBUTtBQUlkLFVBQU0sWUFBWSxJQUFJLElBQUk7QUFFMUIsVUFBTSxTQUFTLFVBQUE7QUFFZixVQUFNLDRCQUE0QixTQUFTLE1BQU0sTUFBTSw2QkFBNkIsTUFBTSxVQUFVLENBQUM7QUFFckcsYUFBUyxRQUFTO0FBQ2IsYUFBZSw0QkFBNEIsMEJBQTBCO0FBQ3RFLGNBQVEsSUFBSSw2QkFBNkIsMEJBQTBCLEtBQUs7QUFBQSxJQUM1RTtBQUVBLFVBQU0sVUFBVSxTQUFTLE1BQWdCO0FBQ3JDLGFBQU8sMEJBQTBCLE9BQU8sV0FBVyxDQUFBO0FBQUEsSUFDdkQsQ0FBQztBQUVELFVBQU0saUJBQWlCLFNBQVMsTUFBTSxRQUFRLE9BQU8sT0FBTyxDQUFDLE1BQWMsRUFBRSxnQkFBZ0IsTUFBTSxrQkFBa0IsS0FBSyxDQUFBLENBQUU7QUFFNUgsVUFBTSxzQkFBc0IsU0FBUztBQUFBLE1BQ2pDLE1BQU87QUFDSCxlQUFPLDBCQUEwQixRQUFRLDBCQUEwQixNQUFNLE9BQU87QUFBQSxNQUNwRjtBQUFBLE1BQ0EsSUFBSyxPQUFlO0FBQ2hCLGNBQU0sY0FBYywwQkFBMEIsT0FBb0MsRUFBRSxNQUFNLE9BQU87QUFBQSxNQUNyRztBQUFBLElBQUEsQ0FDSDtBQUVELFVBQU0sZ0JBQWdCLFNBQVM7QUFBQSxNQUMzQixNQUFPO0FBQ0gsZUFBTywwQkFBMEIsT0FBTyxTQUFTO0FBQUEsTUFDckQ7QUFBQSxNQUNBLElBQUssT0FBZTtBQUNoQixjQUFNLGNBQWMsMEJBQTBCLE9BQW9DLEVBQUUsT0FBYTtBQUFBLE1BQ3JHO0FBQUEsSUFBQSxDQUNIO0FBRUQsVUFBTSwrQkFBK0IsU0FBUyxNQUFNO0FBQ2hELFlBQU0sUUFBUSxlQUFlLE1BQU07QUFDbkMsVUFBSSxPQUFPO0FBQ1AsZUFBTyxjQUFjLEtBQUs7QUFBQSxNQUM5QixPQUFPO0FBQ0gsZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNKLENBQUM7QUFFRCxVQUFNLGVBQWUsU0FBUyxNQUFNO0FBQ2hDLFVBQUksU0FBUztBQUNiLFlBQU0sUUFBUSxRQUFRLE1BQU07QUFDNUIsVUFBSSxPQUFPO0FBQ1AsaUJBQVMsY0FBYyxLQUFLO0FBQUEsTUFDaEMsT0FBTztBQUNILGlCQUFTO0FBQUEsTUFDYjtBQUNBLGFBQU87QUFBQSxJQUNYLENBQUM7QUFFRCxhQUFTLGdCQUFpQixVQUFrQjtBQUN4QyxhQUFPLHVCQUF1QixRQUFRO0FBQUEsSUFDMUM7QUFFQSxhQUFTLFlBQWFjLFVBQXdCO0FBQzFDLFlBQU0sT0FBTyxNQUFNLFFBQUE7QUFDbkIsWUFBTSxRQUFRLE9BQU8sWUFBWSxLQUFLLFVBQVUsTUFBTSxJQUFJLENBQUMsTUFBaUIsQ0FBRSxFQUFFLElBQUksRUFBRSxLQUFNLENBQUMsQ0FBQztBQUU5RixhQUFPLE9BQU8sUUFBUSxRQUFRQSxVQUFTLGFBQWEsQ0FBQyxFQUNoRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFFLE1BQU0sRUFBRSxHQUFJLElBQW1CLE1BQU8sQ0FBQztBQUFBLElBQ3JFO0FBRUEsYUFBUyxVQUFXLGVBQXVCO0FBQ3ZDLGFBQU8sS0FBSztBQUFBLFFBQ1IsT0FBTztBQUFBLFVBQ0gsS0FBSztBQUFBLFFBQUE7QUFBQSxNQUNULENBQ0gsRUFBRSxNQUFNLENBQUEsTUFBSztBQUNWLGdCQUFRLElBQUksOEJBQThCLENBQUMsRUFBRTtBQUFBLE1BQ2pELENBQUM7QUFBQSxJQUNMO0FBRUEsYUFBUyxpQ0FBa0MsWUFBb0I7QUFDM0QsVUFBSSwwQkFBMEIsT0FBTztBQUNqQyxjQUFNLGdDQUFnQyxZQUFZO0FBQUEsVUFDOUMsVUFBVSxNQUFNO0FBQUEsVUFDaEIsUUFBUSwwQkFBMEIsTUFBTTtBQUFBLFFBQUEsQ0FDM0M7QUFBQSxNQUNMO0FBQUEsSUFDSjtBQUVBLGFBQVMsY0FBZSxVQUFrQjtBQUN0QyxZQUFNO0FBQUEsUUFBcUMsTUFBTTtBQUFBLFFBQ047QUFBQSxNQUFBO0FBQUEsSUFDL0M7QUFHQSxVQUFNLGNBQTZCO0FBQUEsTUFDL0IsQ0FBRSxVQUFVLE1BQU0sTUFBTSxnQ0FBZ0MsTUFBTSxVQUFVLENBQUU7QUFBQSxNQUMxRSxDQUFFLFNBQVMsTUFBTSxNQUFBLENBQVE7QUFBQSxJQUFBOzs7Ozs7O0FBMU1qQixNQUFBWCxlQUFBLEVBQUEsT0FBTSxrQ0FBQTtBQXNDUSxNQUFBQyxlQUFBLEVBQUEsT0FBTSx5QkFBQTtBQXlCdkIsTUFBQUcsZUFBQSxFQUFBLE9BQU0scUNBQUE7OztBQXhGSixTQUFBLE9BQUEsNkJBQUFSLFVBQUEsR0FEWEgsbUJBa0dNLE9BQUE7QUFBQSxJQUFBLEtBQUE7QUFBQSxJQWxHRCxPQUFNO0FBQUEsSUFFTCxrQ0FBZ0MsT0FBQTtBQUFBLEVBQUEsR0FBQTtBQUFBLElBQ3BDQyxZQThGd0IsT0FBQSxxQkFBQSxHQUFBO0FBQUEsTUE3RnRCLE9BQU07QUFBQSxNQUNMLHFCQUFpQixFQUFBLGFBQWlCLE9BQUEsMEJBQTBCLFVBQVUsVUFBTSxFQUFBO0FBQUEsSUFBQSxHQUFBO0FBQUEsTUFHNUQsUUFBTVMsUUFDckIsTUE0RVc7QUFBQSxRQTVFWFQsWUE0RVcsT0FBQSxVQUFBLEdBQUE7QUFBQSxVQTVFRCxNQUFLO0FBQUEsVUFDTCxPQUFNO0FBQUEsVUFDTixPQUFNO0FBQUEsVUFDTCw2QkFBMkIsT0FBQTtBQUFBLFVBQzNCLFVBQVEsT0FBQTtBQUFBLFFBQUEsR0FBQTtBQUFBLDJCQUNqQixNQXNFYztBQUFBLFlBdEVkQSxZQXNFYyxPQUFBLGFBQUEsR0FBQTtBQUFBLGNBckVaLE9BQU07QUFBQSxjQUNMLE9BQUttQixlQUFBLEVBQUEsaUJBQXFCLE9BQUEsMEJBQTBCLFNBQUssZUFBQTtBQUFBLGNBQ3pELFNBQU8sT0FBQTtBQUFBLGNBQ1IsTUFBSztBQUFBLGNBQ0osTUFBTSxPQUFBLDBCQUEwQjtBQUFBLFlBQUEsR0FBQTtBQUFBLCtCQUNqQyxNQUkyQjtBQUFBLGdCQUozQm5CLFlBSTJCLE9BQUE7QUFBQSxrQkFIekIsS0FBSTtBQUFBLGtCQUNKLE9BQU07QUFBQSxrQkFDTixNQUFLO0FBQUEsa0JBQ0wsTUFBSztBQUFBLGdCQUFBLEdBQUEsTUFBQSxHQUFBO0FBQUEsZ0JBQ1BRLGdCQW9ETyxRQXBEUEYsY0FvRE87QUFBQSxrQkFBQUYsZ0JBQUFDLGdCQWxERixPQUFBLDBCQUEwQixJQUFJLElBQUcsS0FBQyxDQUFBO0FBQUEsa0JBQUFMLFlBb0JBLE1BQUE7QUFBQSxvQkFuQkcsT0FBTyxPQUFBO0FBQUEsb0JBQ1IsTUFBSztBQUFBLG9CQUNMLE9BQUE7QUFBQSxrQkFBQSxHQUFBO0FBQUEscUNBQ3JDLE1BZVM7QUFBQSxzQkFmVEEsWUFlUyxPQUFBLEVBQUEsT0FBQSxTQWZELEdBQU07QUFBQSx3QkFBUSxTQUFBUyxRQUNkLE1BQWdDO0FBQUEsMkJBQUFQLFVBQUEsSUFBQSxHQUF0Q0gsbUJBYU1ZLFVBQUEsTUFBQUMsV0FiaUIsT0FBQSxnQkFBYyxDQUF4QixXQUFNO2dEQUFuQmIsbUJBYU0sT0FBQTtBQUFBLDhCQVpBLE9BQU07QUFBQSw4QkFDTCxLQUFLLE9BQU87QUFBQSw0QkFBQSxHQUFBO0FBQUEsOEJBQ2pCQyxZQVNRLE1BQUE7QUFBQSxnQ0FSTCxPQUFPLE9BQU87QUFBQSxnQ0FDZixPQUFNO0FBQUEsZ0NBQ04sV0FBQTtBQUFBLGdDQUNBLE1BQUE7QUFBQSxnQ0FDQyxTQUFLLENBQUEsV0FBRSxPQUFBLGdCQUFnQixPQUFPLEVBQUU7QUFBQSxnQ0FDakMsTUFBSztBQUFBLGdDQUNKLE9BQUttQixlQUFBLEVBQUEsaUJBQXFCLE9BQU8sU0FBSyxlQUFBO0FBQUEsZ0NBQ3ZDLE1BQUs7QUFBQSw4QkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsV0FBQSxPQUFBLENBQUE7QUFBQTs7Ozs7c0NBR0YsTUFDVGQsZ0JBQUcsc0JBQWUsTUFBTSxHQUFBLENBQUE7QUFBQSxvQkFBQSxDQUFBO0FBQUE7OzREQUFXLE9BQ3JDLEVBQUE7QUFBQSxrQkFBQUwsWUFtQjhCLE1BQUE7QUFBQSxvQkFsQjNCLE9BQU8sT0FBQTtBQUFBLG9CQUNSLE1BQUs7QUFBQSxvQkFDTCxPQUFBO0FBQUEsa0JBQUEsR0FBQTtBQUFBLHFDQUNBLE1BY1M7QUFBQSxzQkFkVEEsWUFjUyxPQUFBLEVBQUEsT0FBQSxTQWRELEdBQU07QUFBQSx3QkFBUSxTQUFBUyxRQUdmLE1BQStDO0FBQUEsMkJBQUFQLFVBQUEsSUFBQSxHQUZwREgsbUJBWU1ZLFVBQUEsTUFBQUMsV0FWeUIsT0FBQSxZQUFZLE9BQUEsT0FBTyxHQUFBLENBQUEsQ0FBcEMsTUFBTSxLQUFLLE1BQUE7Z0RBRnpCYixtQkFZTSxPQUFBO0FBQUEsOEJBWkQsT0FBTTtBQUFBLDhCQUNMLEtBQUs7QUFBQSw0QkFBQSxHQUFBO0FBQUEsOEJBRVRDLFlBT1EsTUFBQTtBQUFBLGdDQVBELE9BQU07QUFBQSxnQ0FDTixPQUFNO0FBQUEsZ0NBQ04sV0FBQTtBQUFBLGdDQUNDLE9BQU87QUFBQSxnQ0FDUixNQUFLO0FBQUEsZ0NBQ0osU0FBSyxDQUFBLFdBQUUsT0FBQSxVQUFVLElBQUk7QUFBQSxnQ0FDdEIsTUFBSztBQUFBLDhCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxTQUFBLENBQUE7QUFBQSw4QkFFWlEsZ0JBQTJELFVBQTNERCxjQUEyREYsZ0JBQWpCLEtBQUssR0FBQSxDQUFBO0FBQUEsNEJBQUEsQ0FBQTtBQUFBOzs7O3NDQUUxQyxNQUNUQSxnQkFBRyxlQUFRLE1BQU0sR0FBQSxDQUFBO0FBQUEsb0JBQUEsQ0FBQTtBQUFBOztrQkFDbkJMLFlBUWUsWUFBQTtBQUFBLG9CQVBiLEtBQUk7QUFBQSxvQkFBQSxZQUNLLE9BQUE7QUFBQSxvQkFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxzQkFBbUI7QUFBQSxvQkFDNUIsYUFBQTtBQUFBLGtCQUFBLEdBQUE7QUFBQSxvQkFFQSxTQUFBUyxRQUFBLENBRTRELFVBSC9DO0FBQUEsc0JBQ2JULFlBRTRELFFBQUE7QUFBQSx3QkFBQSxZQUYxQyxNQUFNO0FBQUEsd0JBQUEsdUJBQUEsQ0FBQSxXQUFOLE1BQU0sUUFBSztBQUFBLHdCQUNuQixTQUFLLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBRyxPQUFPLE9BQTRCLE9BQUE7QUFBQSx3QkFDNUMsT0FBQTtBQUFBLHdCQUFNLFdBQUE7QUFBQSx3QkFBVSxTQUFBO0FBQUEsd0JBQVMsU0FBS3FCLFNBQVEsTUFBTSxLQUFHLENBQUEsT0FBQSxDQUFBO0FBQUEsc0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxjQUFBLHVCQUFBLFNBQUEsQ0FBQTtBQUFBOzs7O2dCQUc1RHJCLFlBQVcsTUFBQTtBQUFBLGdCQUNYQSxZQUMyQixPQUFBLGFBQUEsR0FBQSxFQUF4QixTQUFTLE9BQUEsYUFBVztBQUFBLGdCQUN2QkEsWUFFNEIsT0FBQSxjQUFBLEdBQUE7QUFBQSxrQkFEMUIsT0FBTTtBQUFBLGtCQUFBLFlBQ0csT0FBQTtBQUFBLGtCQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLGdCQUFhO0FBQUEsZ0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxZQUFBLENBQUE7QUFBQTs7Ozs7Ozt1QkFNOUIsTUFPTTtBQUFBLFFBUE5RLGdCQU9NLE9BUE5FLGNBT007QUFBQSxXQUFBUixVQUFBLElBQUEsR0FOSkgsbUJBS0lZLFVBQUEsTUFBQUMsV0FKWSxPQUFBLDBCQUEwQixVQUFRLENBQXpDLFFBQUc7Z0NBRFpULFlBS0ksb0RBQUE7QUFBQSxjQUhELEtBQUssSUFBSTtBQUFBLGNBQ1QsWUFBWSxJQUFJO0FBQUEsY0FDaEIsb0JBQW9CLE9BQUE7QUFBQSxZQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsY0FBQSxvQkFBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjdCLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sUUFBUTtBQUtkLFVBQU0sY0FBYyxTQUFTLE1BQU0sTUFBTSxVQUFVLE1BQU0sYUFBYSxDQUFDO0FBRXZFLGFBQVMsUUFBUztBQUNiLGFBQWUsY0FBYyxZQUFZO0FBQzFDLGNBQVEsSUFBSSxlQUFlLFlBQVksS0FBSztBQUFBLElBQ2hEO0FBRUEsYUFBUyxtQkFBb0IsZUFBdUI7QUFDaEQsWUFBTSxrQkFBa0IsZUFBZSxFQUFFLFVBQVUsTUFBTSxlQUFlO0FBQUEsSUFDNUU7QUFFQSxVQUFNLGtCQUFrQixTQUFTO0FBQUEsTUFDN0IsTUFBTztBQUNILGVBQU8sWUFBWSxRQUFRLFlBQVksTUFBTSxPQUFPO0FBQUEsTUFDeEQ7QUFBQSxNQUNBLElBQUssT0FBZTtBQUNoQixjQUFNLGtCQUFrQixNQUFNLGVBQWUsRUFBRSxNQUFLLE9BQU87QUFBQSxNQUMvRDtBQUFBLElBQUEsQ0FDSDtBQUVELFVBQU0sbUJBQW1CLFNBQVM7QUFBQSxNQUM5QixNQUFPO0FBQ0gsZUFBTyxZQUFZLFFBQVEsWUFBWSxNQUFNLFFBQVE7QUFBQSxNQUN6RDtBQUFBLE1BQ0EsSUFBSyxPQUFlO0FBQ2hCLGNBQU0sa0JBQWtCLE1BQU0sZUFBZSxFQUFFLE9BQU87QUFBQSxNQUMxRDtBQUFBLElBQUEsQ0FDSDtBQUVELFVBQU0sU0FBUyxTQUFTO0FBQUEsTUFDcEIsTUFBTztBQUNILGVBQU8sWUFBWSxRQUFRLFlBQVksTUFBTSxhQUFhO0FBQUEsTUFDOUQ7QUFBQSxNQUNBLElBQUssWUFBcUI7QUFDdEIsY0FBTSxrQkFBa0IsTUFBTSxlQUFlLEVBQUUsWUFBWTtBQUFBLE1BQy9EO0FBQUEsSUFBQSxDQUNIO0FBSUQsVUFBTSxjQUFjLFNBQVMsTUFBTTtBQUMvQixZQUFNLFVBQXlCO0FBQUEsUUFDM0IsQ0FBRSxnQkFBZ0IsTUFBTSxNQUFNLGVBQWUsTUFBTSxlQUFlLFdBQVcsQ0FBRTtBQUFBLE1BQUE7QUFHbkYsVUFBSSxZQUFZLFNBQVMsWUFBWSxNQUFNLFVBQVU7QUFDakQsZ0JBQVEsS0FBSyxDQUFFLFVBQVUsTUFBTSxNQUFNLGtCQUFrQixNQUFNLGFBQWEsQ0FBRSxDQUFDO0FBQUEsTUFDakY7QUFDQSxhQUFPO0FBQUEsSUFDWCxDQUFDOzs7Ozs7O0FBekdlLE1BQUFHLGVBQUEsRUFBQSxPQUFNLG1CQUFBO0FBaUJiLE1BQUFDLGVBQUEsRUFBQSxPQUFNLHVCQUFBOzs7QUF2Q0osU0FBQSxPQUFBLGVBQUFMLFVBQUEsR0FEWEgsbUJBMERNLE9BQUE7QUFBQSxJQUFBLEtBQUE7QUFBQSxJQTFERCxPQUFNO0FBQUEsSUFFTCxPQUFLb0IsZUFBQSxFQUFBLGlCQUFxQixPQUFBLFlBQVksU0FBSyxlQUFBO0FBQUEsSUFDM0Msb0JBQWtCLE9BQUE7QUFBQSxFQUFBLEdBQUE7QUFBQSxJQUV0Qm5CLFlBbUR3QixPQUFBLHFCQUFBLEdBQUE7QUFBQSxNQWxEdEIsT0FBTTtBQUFBLE1BQUEsWUFDRyxPQUFBO0FBQUEsTUFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxTQUFNO0FBQUEsSUFBQSxHQUFBO0FBQUEsTUFHRSxRQUFNUyxRQUNyQixNQTBCVztBQUFBLFFBMUJYVCxZQTBCVyxPQUFBLFVBQUEsR0FBQTtBQUFBLFVBMUJELE1BQUs7QUFBQSxVQUNMLE9BQU07QUFBQSxVQUNOLE9BQU07QUFBQSxVQUNMLGVBQWEsT0FBQTtBQUFBLFFBQUEsR0FBQTtBQUFBLDJCQUN0QixNQWtCYztBQUFBLFlBbEJkQSxZQWtCYyxPQUFBLGFBQUEsR0FBQTtBQUFBLGNBakJaLE1BQUs7QUFBQSxjQUNKLE1BQU0sT0FBQTtBQUFBLGNBQ04sU0FBS0MsY0FBTyxPQUFBLE9BQUssQ0FBQSxNQUFBLENBQUE7QUFBQSxZQUFBLEdBQUE7QUFBQSwrQkFDbEIsTUFHUztBQUFBLGdCQUhURCxZQUdTLE9BQUE7QUFBQSxrQkFGUCxNQUFLO0FBQUEsa0JBQ0wsTUFBSztBQUFBLGdCQUFBLENBQUE7QUFBQSxnQkFFUFEsZ0JBU08sUUFUUEYsY0FTTztBQUFBLGtCQUFBRixnQkFBQUMsZ0JBVDJCLE9BQUEsZUFBZSxJQUFHLEtBQ2xELENBQUE7QUFBQSxrQkFBQUwsWUFJZSxZQUFBO0FBQUEsb0JBQUEsWUFKUSxPQUFBO0FBQUEsb0JBQUEsdUJBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLE9BQUEsa0JBQWU7QUFBQSxvQkFBRSxhQUFBO0FBQUEsa0JBQUEsR0FBQTtBQUFBLG9CQUN0QyxTQUFBUyxRQUFBLENBRTRELFVBSEM7QUFBQSxzQkFDN0RULFlBRTRELFFBQUE7QUFBQSx3QkFBQSxZQUYxQyxNQUFNO0FBQUEsd0JBQUEsdUJBQUEsQ0FBQSxXQUFOLE1BQU0sUUFBSztBQUFBLHdCQUNuQixTQUFLLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBRyxPQUFPLE9BQTRCLE9BQUE7QUFBQSx3QkFDNUMsT0FBQTtBQUFBLHdCQUFNLFdBQUE7QUFBQSx3QkFBVSxTQUFBO0FBQUEsd0JBQVMsU0FBS3FCLFNBQVEsTUFBTSxLQUFHLENBQUEsT0FBQSxDQUFBO0FBQUEsc0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxjQUFBLHVCQUFBLFNBQUEsQ0FBQTtBQUFBOzs7a0JBRTFEckIsWUFFSSxPQUFBLGNBQUEsR0FBQTtBQUFBLG9CQUFBLFlBRE8sT0FBQTtBQUFBLG9CQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLG1CQUFnQjtBQUFBLGtCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUE7Ozs7WUFJL0JBLFlBQVcsTUFBQTtBQUFBLFlBQ1hBLFlBQzJCLE9BQUEsYUFBQSxHQUFBLEVBQXhCLFNBQVMsT0FBQSxlQUFXLE1BQUEsR0FBQSxDQUFBLFNBQUEsQ0FBQTtBQUFBLFVBQUEsQ0FBQTtBQUFBOzs7dUJBSTNCLE1BY007QUFBQSxRQWROUSxnQkFjTSxPQWRORCxjQWNNO0FBQUEsV0FBQUwsVUFBQSxJQUFBLEdBYkpILG1CQUtNWSxVQUFBLE1BQUFDLFdBTFcsT0FBQSxZQUFZLFNBQU8sQ0FBeEIsTUFBQztnQ0FBYmIsbUJBS00sT0FBQTtBQUFBLGNBTGlDLEtBQUssRUFBRTtBQUFBLFlBQUEsR0FBQTtBQUFBLGNBQzVDQyxZQUc0QixzQ0FBQTtBQUFBLGdCQUZ6QixvQkFBb0IsT0FBQTtBQUFBLGdCQUNwQixlQUFlLEVBQUU7QUFBQSxjQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsc0JBQUEsZUFBQSxDQUFBO0FBQUE7O1dBR3RCRSxVQUFBLElBQUEsR0FBQUgsbUJBTU1ZLFVBQUEsTUFBQUMsV0FOVyxPQUFBLFlBQVksNkJBQTJCLENBQTVDLE1BQUM7Z0NBQWJiLG1CQU1NLE9BQUE7QUFBQSxjQU5xRCxLQUFLLEVBQUU7QUFBQSxZQUFBLEdBQUE7QUFBQSxjQUV0RCxDQUFBLEVBQUUseUJBRFpJLFlBSTBDLE9BQUEseUNBQUEsR0FBQTtBQUFBLGdCQUFBLEtBQUE7QUFBQSxnQkFGdkMsb0JBQW9CLE9BQUE7QUFBQSxnQkFDcEIsWUFBWSxFQUFFO0FBQUEsY0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLHNCQUFBLFlBQUEsQ0FBQSxLQUFBaUIsbUJBQUEsSUFBQSxJQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CekIsVUFBTSxRQUFRO0FBTWQsVUFBTSxRQUFRLGdCQUFBO0FBQ2QsVUFBTSxTQUFTLGtCQUFBO0FBRWYsVUFBTSxVQUFVLFNBQVMsTUFBTSxNQUFNLGdCQUFnQixNQUFNLFNBQVMsQ0FBQztBQUVyRSxhQUFTLCtCQUFnQztBQUNyQyxVQUFJLFFBQVEsT0FBTztBQUNmLGNBQU0sV0FBVyxNQUFNO0FBQUEsVUFBNkIsT0FBTyxTQUFBO0FBQUEsVUFDUCxRQUFRLE1BQU07QUFBQSxRQUFBO0FBQ2xFLGdCQUFRLElBQUksaUNBQWlDLFFBQVE7QUFBQSxNQUN6RDtBQUFBLElBQ0o7Ozs7Ozs7QUE1Q08sTUFBQWQsZUFBQSxFQUFBLE9BQU0sWUFBQTs7QUFKRixTQUFBLE9BQUEsV0FBQUosVUFBQSxHQURYSCxtQkFzQk0sT0FBQTtBQUFBLElBdEJELE9BQU07QUFBQSxJQUVMLEtBQUssT0FBQTtBQUFBLElBQ0wsZ0JBQWMsT0FBQTtBQUFBLEVBQUEsR0FBQTtBQUFBLElBRWxCUyxnQkFBd0MsT0FBeENGLGNBQXdDRCxnQkFBZCxPQUFBLEtBQUssR0FBQSxDQUFBO0FBQUEsSUFFL0JMLFlBRTZDLE9BQUEsMkJBQUEsR0FBQTtBQUFBLE1BRDFDLGVBQWUsZUFBUSxZQUFZO0FBQUEsTUFDbkMsb0JBQW9CLE9BQUE7QUFBQSxJQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsaUJBQUEsb0JBQUEsQ0FBQTtBQUFBLElBRXZCQSxZQVNRLE1BQUE7QUFBQSxNQVJOLE1BQUE7QUFBQSxNQUNBLE9BQU07QUFBQSxNQUNOLE9BQUE7QUFBQSxNQUNBLE1BQUs7QUFBQSxNQUNMLE9BQU07QUFBQSxNQUNMLFNBQUssc0NBQUUsT0FBQTtNQUNSLE1BQUs7QUFBQSxNQUNMLFdBQUE7QUFBQSxJQUFBLENBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQzRDSixVQUFNLFFBQVEsZ0JBQUE7QUFFZCxVQUFNLFNBQVMsa0JBQUE7QUFJZixVQUFNLFFBQVE7QUFPZCxVQUFNLFVBQVUsSUFBSSxPQUFPO0FBRTNCLFVBQU0sZUFBZSxJQUFJLEVBQUU7QUFFM0IsVUFBTSxRQUFRLFNBQVMsTUFBTTtBQUN6QixZQUFNLFNBQVMsTUFBTSxTQUFTLE1BQU0sU0FBUztBQUM3QyxVQUFJLGFBQWEsT0FBTztBQUNwQixlQUFPLE9BQU8sT0FBTyxDQUFBLFNBQVEsS0FBSyxLQUFLLFNBQVMsYUFBYSxLQUFLLENBQUM7QUFBQSxNQUN2RSxPQUFPO0FBQ0gsZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNKLENBQUM7QUFFRCxVQUFNLHNCQUFzQixTQUFTLE1BQU07QUFDdkMsYUFBTyxPQUFPLE9BQU8sTUFBTSxjQUFjLE1BQU0sRUFBRSxPQUFPLENBQUEsYUFBWSxTQUFTLFVBQVUsU0FBUyxPQUFPLFNBQVMsQ0FBQztBQUFBLElBQ3JILENBQUM7QUFFRCxhQUFTLFlBQWEsTUFBWTtBQUM5QixVQUFJLEtBQUssUUFBUSwyQkFBMkI7QUFDeEMsZUFBTyx1QkFBdUIsS0FBSyxRQUFRLEVBQUU7QUFBQSxNQUNqRCxXQUFXLEtBQUssUUFBUSwyQkFBMkI7QUFFL0MsY0FBTSxPQUFPLE1BQU0sY0FBYywwQkFBMEIsS0FBSyxRQUFRLEVBQUU7QUFDMUUsWUFBSSxNQUFNO0FBQ04saUJBQU8sbUNBQW1DLEtBQUsseUJBQXlCO0FBQUEsUUFDNUU7QUFBQSxNQUNKO0FBQUEsSUFDSjs7Ozs7O0FBdkdLLE1BQUFjLGVBQUEsRUFBQSxPQUFNLGFBQUE7QUFrQ0EsTUFBQVIsZUFBQSxFQUFBLE9BQU0sd0JBQUE7QUFHRCxNQUFBQyxlQUFBLEVBQUEsT0FBTSxpQkFBQTtBQU9QLE1BQUFHLGVBQUEsRUFBQSxPQUFNLFNBQUE7O0FBNUNyQixTQUFBUixVQUFBLEdBQUFILG1CQXNETSxPQXRETmUsY0FzRE07QUFBQSxJQXJESmQsWUFRUyxPQUFBO0FBQUEsTUFBQSxZQVBFLE9BQUE7QUFBQSxNQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLFVBQU87QUFBQSxNQUNoQixPQUFBO0FBQUEsTUFDQSxPQUFNO0FBQUEsTUFDTixvQkFBQTtBQUFBLElBQUEsR0FBQTtBQUFBLHVCQUVBLE1BQXNFO0FBQUEsUUFBdEVBLFlBQXNFLE1BQUE7QUFBQSxVQUEvRCxNQUFLO0FBQUEsVUFBUSxNQUFLO0FBQUEsVUFBSyxNQUFLO0FBQUEsVUFBbUIsT0FBTTtBQUFBLFFBQUEsQ0FBQTtBQUFBLFFBQzVEQSxZQUErRCxNQUFBO0FBQUEsVUFBeEQsTUFBSztBQUFBLFVBQVMsTUFBSztBQUFBLFVBQW9CLE9BQU07QUFBQSxRQUFBLENBQUE7QUFBQTs7O0lBR3REQSxZQUFlLFVBQUE7QUFBQSxJQUVmQSxZQXdDZSxZQUFBO0FBQUEsTUFBQSxZQXhDUSxPQUFBO0FBQUEsTUFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxVQUFPO0FBQUEsSUFBQSxHQUFBO0FBQUEsdUJBQzVCLE1BaUJjO0FBQUEsUUFqQmRBLFlBaUJjLFdBQUEsRUFBQSxNQUFBLFFBakJELEdBQUE7QUFBQSxVQUFZLFNBQUFTLFFBQ3ZCLE1BS1U7QUFBQSxZQUxWVCxZQUtVLFFBQUE7QUFBQSxjQUpSLFFBQUE7QUFBQSxjQUFBLFlBQ1MsT0FBQTtBQUFBLGNBQUEsdUJBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLE9BQUEsZUFBWTtBQUFBLGNBQ3JCLE9BQU07QUFBQSxjQUNOLGVBQUE7QUFBQSxjQUNBLE9BQUE7QUFBQSxZQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUEsOEJBQ0ZELG1CQVNNWSxVQUFBLE1BQUFDLFdBVGMsT0FBQSxPQUFLLENBQWIsU0FBSTtrQ0FBaEJiLG1CQVNNLE9BQUE7QUFBQSxnQkFSQSxLQUFLLEtBQUssUUFBUTtBQUFBLGNBQUEsR0FBQTtBQUFBLGdCQUN0QkMsWUFLUSxNQUFBO0FBQUEsa0JBSk4sTUFBSztBQUFBLGtCQUNKLE1BQU0sS0FBSztBQUFBLGtCQUNYLFNBQUssQ0FBQSxXQUFFLE9BQUEsWUFBWSxJQUFJO0FBQUEsZ0JBQUEsR0FBQTtBQUFBLG1DQUN4QixNQUF5QztBQUFBLG9CQUF6Q0EsWUFBeUMsVUFBQSxNQUFBO0FBQUEsc0JBQUEsU0FBQVMsUUFBOUIsTUFBa0I7QUFBQSx3QkFBQUwsZ0JBQUFDLGdCQUFmLEtBQUssT0FBTyxHQUFBLENBQUE7QUFBQSxzQkFBQSxDQUFBO0FBQUE7Ozs7O2dDQUNwQixNQUNSQSxnQkFBRyxLQUFLLElBQUksR0FBQSxDQUFBO0FBQUEsY0FBQSxDQUFBO0FBQUE7Ozs7UUFJaEJMLFlBbUJjLFdBQUEsRUFBQSxNQUFBO1VBbkJZLFNBQUFTLFFBQ3hCLE1BaUJNO0FBQUEsWUFqQk5ELGdCQWlCTSxPQWpCTkYsY0FpQk07QUFBQSxlQUFBSixVQUFBLElBQUEsR0FoQkpILG1CQWVNWSxVQUFBLE1BQUFDLFdBZmtCLE9BQUEscUJBQW1CLENBQS9CLGFBQVE7b0NBQXBCYixtQkFlTSxPQUFBO0FBQUEsa0JBZEQsS0FBSyxTQUFTO0FBQUEsZ0JBQUEsR0FBQTtBQUFBLGtCQUNqQlMsZ0JBTU8sUUFOUEQsY0FNTztBQUFBLG9CQUxMUCxZQUdTLE9BQUE7QUFBQSxzQkFGUCxNQUFLO0FBQUEsc0JBQ0wsTUFBSztBQUFBLG9CQUFBLENBQUE7QUFBQSxvQ0FDRSxNQUNUSyxnQkFBRyxTQUFTLElBQUksR0FBQSxDQUFBO0FBQUEsa0JBQUEsQ0FBQTtBQUFBLGtCQUVsQkcsZ0JBS00sT0FMTkUsY0FLTTtBQUFBLHFCQUFBUixVQUFBLElBQUEsR0FKSkgsbUJBR09ZLFVBQUEsTUFBQUMsV0FIa0IsU0FBUyxRQUFNLENBQTNCLE9BQU8sTUFBQztBQUFyQiw2QkFBQVYsVUFBQSxHQUFBSCxtQkFHTyxRQUFBLEVBRkEsS0FBSyxFQUFBLEdBQUNNLGdCQUNSLEtBQUssR0FBQSxDQUFBO0FBQUEsb0JBQUEsQ0FBQSxHQUFBLEdBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0F4QixTQUFTLGtCQUFrQixJQUFJO0FBQzdCLE1BQUksbUJBQW1CO0FBQ3JCLG1CQUFlLEVBQUU7QUFDakIsV0FBTztBQUFBLEVBQ1Q7QUFDQSxTQUFPO0FBQ1Q7QUEySkEsU0FBUyxRQUFRLEdBQUc7QUFDbEIsU0FBTyxPQUFPLE1BQU0sYUFBYSxFQUFBLElBQU0sTUFBTSxDQUFDO0FBQ2hEO0FBNEVBLE1BQU0sV0FBVyxPQUFPLFdBQVcsZUFBZSxPQUFPLGFBQWE7QUFDckQsT0FBTyxzQkFBc0IsZUFBZSxzQkFBc0I7QUFFbkYsTUFBTSxhQUFhLENBQUMsUUFBUSxPQUFPO0FDaEhuQyxTQUFTLGFBQWEsT0FBTztBQUMzQixNQUFJO0FBQ0osUUFBTSxRQUFRLFFBQVEsS0FBSztBQUMzQixVQUFRLEtBQUssU0FBUyxPQUFPLFNBQVMsTUFBTSxRQUFRLE9BQU8sS0FBSztBQUNsRTtBQUVBLE1BQU0sZ0JBQWdCLFdBQVcsU0FBUztBQW1UMUMsU0FBUyxhQUFhO0FBQ3BCLFFBQU0sWUFBWSxJQUFJLEtBQUs7QUFDM0IsUUFBTSxXQUFXLG1CQUFBO0FBQ2pCLE1BQUksVUFBVTtBQUNaLGNBQVUsTUFBTTtBQUNkLGdCQUFVLFFBQVE7QUFBQSxJQUNwQixHQUFxQixRQUFRO0FBQUEsRUFDL0I7QUFDQSxTQUFPO0FBQ1Q7QUFFQSxTQUFTLGFBQWEsVUFBVTtBQUM5QixRQUFNLFlBQVksV0FBQTtBQUNsQixTQUFPLFNBQVMsTUFBTTtBQUNwQixjQUFVO0FBQ1YsV0FBTyxRQUFRLFVBQVU7QUFBQSxFQUMzQixDQUFDO0FBQ0g7QUFFQSxTQUFTLG9CQUFvQixRQUFRLFVBQVUsVUFBVSxDQUFBLEdBQUk7QUFDM0QsUUFBTSxFQUFFLFFBQUFpQixVQUFTLGVBQWUsR0FBRyxvQkFBb0I7QUFDdkQsTUFBSTtBQUNKLFFBQU0sY0FBYyxhQUFhLE1BQU1BLFdBQVUsc0JBQXNCQSxPQUFNO0FBQzdFLFFBQU0sVUFBVSxNQUFNO0FBQ3BCLFFBQUksVUFBVTtBQUNaLGVBQVMsV0FBQTtBQUNULGlCQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLFVBQVUsU0FBUyxNQUFNO0FBQzdCLFVBQU0sUUFBUSxRQUFRLE1BQU07QUFDNUIsVUFBTSxTQUFTLE1BQU0sUUFBUSxLQUFLLElBQUksUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxPQUFPLFVBQVU7QUFDMUYsV0FBTyxJQUFJLElBQUksS0FBSztBQUFBLEVBQ3RCLENBQUM7QUFDRCxRQUFNLFlBQVk7QUFBQSxJQUNoQixNQUFNLFFBQVE7QUFBQSxJQUNkLENBQUMsYUFBYTtBQUNaLGNBQUE7QUFDQSxVQUFJLFlBQVksU0FBUyxTQUFTLE1BQU07QUFDdEMsbUJBQVcsSUFBSSxpQkFBaUIsUUFBUTtBQUN4QyxpQkFBUyxRQUFRLENBQUMsT0FBTyxTQUFTLFFBQVEsSUFBSSxlQUFlLENBQUM7QUFBQSxNQUNoRTtBQUFBLElBQ0Y7QUFBQSxJQUNBLEVBQUUsV0FBVyxNQUFNLE9BQU8sT0FBQTtBQUFBLEVBQU87QUFFbkMsUUFBTSxjQUFjLE1BQU07QUFDeEIsV0FBTyxZQUFZLE9BQU8sU0FBUyxTQUFTLFlBQUE7QUFBQSxFQUM5QztBQUNBLFFBQU0sT0FBTyxNQUFNO0FBQ2pCLFlBQUE7QUFDQSxjQUFBO0FBQUEsRUFDRjtBQUNBLG9CQUFrQixJQUFJO0FBQ3RCLFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUFBO0FBRUo7QUF1MUNBLFNBQVMsVUFBVSxNQUFNLFFBQVEsVUFBVSxDQUFBLEdBQUk7QUFDN0MsUUFBTSxFQUFFLFFBQUFBLFVBQVMsZUFBZSxlQUFlLElBQUksVUFBVSxVQUFVO0FBQ3ZFLFFBQU0sV0FBVyxJQUFJLFlBQVk7QUFDakMsUUFBTSxRQUFRLFNBQVMsTUFBTTtBQUMzQixRQUFJO0FBQ0osV0FBTyxhQUFhLE1BQU0sT0FBTyxLQUFLQSxXQUFVLE9BQU8sU0FBU0EsUUFBTyxhQUFhLE9BQU8sU0FBUyxHQUFHO0FBQUEsRUFDekcsQ0FBQztBQUNELFdBQVMsZUFBZTtBQUN0QixRQUFJO0FBQ0osVUFBTSxNQUFNLFFBQVEsSUFBSTtBQUN4QixVQUFNLEtBQUssUUFBUSxLQUFLO0FBQ3hCLFFBQUksTUFBTUEsU0FBUTtBQUNoQixZQUFNLFNBQVMsS0FBS0EsUUFBTyxpQkFBaUIsRUFBRSxFQUFFLGlCQUFpQixHQUFHLE1BQU0sT0FBTyxTQUFTLEdBQUcsS0FBQTtBQUM3RixlQUFTLFFBQVEsU0FBUztBQUFBLElBQzVCO0FBQUEsRUFDRjtBQUNBLE1BQUksU0FBUztBQUNYLHdCQUFvQixPQUFPLGNBQWM7QUFBQSxNQUN2QyxpQkFBaUIsQ0FBQyxTQUFTLE9BQU87QUFBQSxNQUNsQyxRQUFBQTtBQUFBQSxJQUFBLENBQ0Q7QUFBQSxFQUNIO0FBQ0E7QUFBQSxJQUNFLENBQUMsT0FBTyxNQUFNLFFBQVEsSUFBSSxDQUFDO0FBQUEsSUFDM0I7QUFBQSxJQUNBLEVBQUUsV0FBVyxLQUFBO0FBQUEsRUFBSztBQUVwQjtBQUFBLElBQ0U7QUFBQSxJQUNBLENBQUMsUUFBUTtBQUNQLFVBQUk7QUFDSixXQUFLLEtBQUssTUFBTSxVQUFVLE9BQU8sU0FBUyxHQUFHO0FBQzNDLGNBQU0sTUFBTSxNQUFNLFlBQVksUUFBUSxJQUFJLEdBQUcsR0FBRztBQUFBLElBQ3BEO0FBQUEsRUFBQTtBQUVGLFNBQU87QUFDVDtBQy81REEsTUFBTSxJQUFJLEVBQUUsT0FBTyxXQUFVLEdBQUksSUFBSSxFQUFFLE9BQU8sd0NBQXVDLEdBQUksSUFBSSxFQUFFLE9BQU8sOENBQTZDLEdBQUksSUFBSSxFQUFFLE9BQU8sc0RBQXFELEdBQUksSUFBSSxFQUFFLE9BQU8sK0RBQStELElBQUksRUFBRSxPQUFPLDZEQUE2RCxJQUFJLEVBQUUsT0FBTyw2REFBNkQsSUFBSSxFQUFFLE9BQU8sMERBQXlELEdBQUksSUFBSSxFQUFFLE9BQU8sNkRBQTRELEdBQUksSUFBSSxFQUFFLE9BQU8sNkRBQTRELEdBQUksSUFBb0JDLGdDQUFFO0FBQUEsRUFDcnJCLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQTtBQUFBLElBRUw7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0UsTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFDLEdBQUk7QUFDcEIsVUFBTSxJQUFJO0FBQ1YsYUFBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFFBQUUsY0FBYztBQUFBLFFBQ2QsS0FBSztBQUFBLE1BQ2IsQ0FBTztBQUFBLElBQ0g7QUFDQSxhQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsUUFBRSxZQUFZO0FBQUEsUUFDWixLQUFLO0FBQUEsTUFDYixDQUFPO0FBQUEsSUFDSDtBQUNBLFdBQU8sQ0FBQyxHQUFHLE9BQU9DLFVBQUMsR0FBSUMsbUJBQUUsT0FBTztBQUFBLE1BQzlCLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUlDLGNBQUUsTUFBTTtBQUFBLE1BQ3RDLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFBQSxNQUNYLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUlBLGNBQUUsTUFBTTtBQUFBLE1BQ3ZDLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFBQSxJQUNqQixHQUFPO0FBQUEsTUFDREMsZ0JBQUUsTUFBTSxHQUFHO0FBQUEsUUFDVEEsZ0JBQUUsTUFBTSxHQUFHO0FBQUEsVUFDVEEsZ0JBQUUsTUFBTSxHQUFHO0FBQUEsWUFDVEEsZ0JBQUUsTUFBTSxHQUFHO0FBQUEsY0FDVEEsZ0JBQUUsS0FBSztBQUFBLGdCQUNMLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRO0FBQUEsZ0JBQ25ELGFBQWEsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRO0FBQUEsZ0JBQ2pELGlCQUFpQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFFBQVE7QUFBQSxnQkFDckQsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUTtBQUFBLGdCQUNwRCxlQUFlLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJRCxjQUFFLE1BQU07QUFBQSxnQkFDdkMsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUFBLGNBQzlCLEdBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJO0FBQUEsZ0JBQ25CQyxnQkFBRSxPQUFPO0FBQUEsa0JBQ1AsT0FBTztBQUFBLGtCQUNQLE9BQU87QUFBQSxrQkFDUCxRQUFRO0FBQUEsa0JBQ1IsU0FBUztBQUFBLGtCQUNULE1BQU07QUFBQSxrQkFDTixRQUFRO0FBQUEsa0JBQ1IsZ0JBQWdCO0FBQUEsa0JBQ2hCLGtCQUFrQjtBQUFBLGtCQUNsQixtQkFBbUI7QUFBQSxrQkFDbkIsT0FBTztBQUFBLGdCQUN6QixHQUFtQjtBQUFBLGtCQUNEQSxnQkFBRSxZQUFZLEVBQUUsUUFBUSxrQkFBaUIsQ0FBRTtBQUFBLGdCQUM3RCxHQUFtQixFQUFFO0FBQUEsY0FDckIsSUFBa0IsRUFBRTtBQUFBLFlBQ3BCLENBQWE7QUFBQSxZQUNEQSxnQkFBRSxNQUFNLEdBQUc7QUFBQSxjQUNUQSxnQkFBRSxLQUFLO0FBQUEsZ0JBQ0wsZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFdBQVc7QUFBQSxnQkFDdEQsYUFBYSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFdBQVc7QUFBQSxnQkFDcEQsaUJBQWlCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsV0FBVztBQUFBLGdCQUN4RCxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxXQUFXO0FBQUEsZ0JBQ3ZELGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUlELGNBQUUsTUFBTTtBQUFBLGdCQUN2QyxHQUFHLENBQUMsU0FBUyxDQUFDO0FBQUEsY0FDOUIsR0FBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUk7QUFBQSxnQkFDbkJDLGdCQUFFLE9BQU87QUFBQSxrQkFDUCxPQUFPO0FBQUEsa0JBQ1AsT0FBTztBQUFBLGtCQUNQLFFBQVE7QUFBQSxrQkFDUixTQUFTO0FBQUEsa0JBQ1QsTUFBTTtBQUFBLGtCQUNOLFFBQVE7QUFBQSxrQkFDUixnQkFBZ0I7QUFBQSxrQkFDaEIsa0JBQWtCO0FBQUEsa0JBQ2xCLG1CQUFtQjtBQUFBLGtCQUNuQixPQUFPO0FBQUEsZ0JBQ3pCLEdBQW1CO0FBQUEsa0JBQ0RBLGdCQUFFLFlBQVksRUFBRSxRQUFRLGlCQUFnQixDQUFFO0FBQUEsZ0JBQzVELEdBQW1CLEVBQUU7QUFBQSxjQUNyQixJQUFrQixFQUFFO0FBQUEsWUFDcEIsQ0FBYTtBQUFBLFlBQ0RBLGdCQUFFLE1BQU0sR0FBRztBQUFBLGNBQ1RBLGdCQUFFLEtBQUs7QUFBQSxnQkFDTCxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVTtBQUFBLGdCQUN2RCxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVTtBQUFBLGdCQUNyRCxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVO0FBQUEsZ0JBQ3pELGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVU7QUFBQSxnQkFDeEQsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSUQsY0FBRSxNQUFNO0FBQUEsZ0JBQ3pDLEdBQUcsQ0FBQyxTQUFTLENBQUM7QUFBQSxjQUM5QixHQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSTtBQUFBLGdCQUNuQkMsZ0JBQUUsT0FBTztBQUFBLGtCQUNQLE9BQU87QUFBQSxrQkFDUCxPQUFPO0FBQUEsa0JBQ1AsUUFBUTtBQUFBLGtCQUNSLFNBQVM7QUFBQSxrQkFDVCxNQUFNO0FBQUEsa0JBQ04sUUFBUTtBQUFBLGtCQUNSLGdCQUFnQjtBQUFBLGtCQUNoQixrQkFBa0I7QUFBQSxrQkFDbEIsbUJBQW1CO0FBQUEsa0JBQ25CLE9BQU87QUFBQSxnQkFDekIsR0FBbUI7QUFBQSxrQkFDREEsZ0JBQUUsWUFBWSxFQUFFLFFBQVEsaUJBQWdCLENBQUU7QUFBQSxnQkFDNUQsR0FBbUIsRUFBRTtBQUFBLGNBQ3JCLElBQWtCLEVBQUU7QUFBQSxZQUNwQixDQUFhO0FBQUEsWUFDREEsZ0JBQUUsTUFBTSxHQUFHO0FBQUEsY0FDVEEsZ0JBQUUsS0FBSztBQUFBLGdCQUNMLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVO0FBQUEsZ0JBQ3ZELGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVU7QUFBQSxnQkFDekQsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVU7QUFBQSxnQkFDckQsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVTtBQUFBLGdCQUN4RCxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJRCxjQUFFLE1BQU07QUFBQSxnQkFDekMsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUFBLGNBQzlCLEdBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJO0FBQUEsZ0JBQ25CQyxnQkFBRSxPQUFPO0FBQUEsa0JBQ1AsT0FBTztBQUFBLGtCQUNQLE9BQU87QUFBQSxrQkFDUCxRQUFRO0FBQUEsa0JBQ1IsU0FBUztBQUFBLGtCQUNULE1BQU07QUFBQSxrQkFDTixRQUFRO0FBQUEsa0JBQ1IsZ0JBQWdCO0FBQUEsa0JBQ2hCLGtCQUFrQjtBQUFBLGtCQUNsQixtQkFBbUI7QUFBQSxrQkFDbkIsT0FBTztBQUFBLGdCQUN6QixHQUFtQjtBQUFBLGtCQUNEQSxnQkFBRSxZQUFZLEVBQUUsUUFBUSxrQkFBaUIsQ0FBRTtBQUFBLGdCQUM3RCxHQUFtQixFQUFFO0FBQUEsY0FDckIsSUFBa0IsRUFBRTtBQUFBLFlBQ3BCLENBQWE7QUFBQSxVQUNiLENBQVc7QUFBQSxRQUNYLENBQVM7QUFBQSxRQUNEQSxnQkFBRSxNQUFNLEdBQUc7QUFBQSxVQUNUQSxnQkFBRSxLQUFLO0FBQUEsWUFDTCxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTTtBQUFBLFVBQy9ELEdBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUk7QUFBQSxZQUNuQkMsa0JBQUUsd2VBQXdlLENBQUM7QUFBQSxVQUN2ZixJQUFjLEVBQUU7QUFBQSxRQUNoQixDQUFTO0FBQUEsUUFDREQsZ0JBQUUsTUFBTSxHQUFHO0FBQUEsVUFDVEEsZ0JBQUUsS0FBSztBQUFBLFlBQ0wsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFNBQVM7QUFBQSxZQUN0RCxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsU0FBUztBQUFBLFlBQ3BELGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFNBQVM7QUFBQSxZQUN4RCxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxTQUFTO0FBQUEsWUFDdkQsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSUQsY0FBRSxNQUFNO0FBQUEsWUFDekMsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUFBLFVBQzFCLEdBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUk7QUFBQSxZQUNuQkUsa0JBQUUsaWVBQWllLENBQUM7QUFBQSxVQUNoZixJQUFjLEVBQUU7QUFBQSxRQUNoQixDQUFTO0FBQUEsUUFDREQsZ0JBQUUsTUFBTSxHQUFHO0FBQUEsVUFDVEEsZ0JBQUUsS0FBSztBQUFBLFlBQ0wsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVU7QUFBQSxZQUN2RCxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVTtBQUFBLFlBQ3JELGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVU7QUFBQSxZQUN6RCxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVO0FBQUEsWUFDeEQsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSUQsY0FBRSxNQUFNO0FBQUEsWUFDekMsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUFBLFVBQzFCLEdBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUk7QUFBQSxZQUNuQkMsZ0JBQUUsT0FBTztBQUFBLGNBQ1AsT0FBTztBQUFBLGNBQ1AsT0FBTztBQUFBLGNBQ1AsUUFBUTtBQUFBLGNBQ1IsU0FBUztBQUFBLGNBQ1QsTUFBTTtBQUFBLGNBQ04sUUFBUTtBQUFBLGNBQ1IsZ0JBQWdCO0FBQUEsY0FDaEIsa0JBQWtCO0FBQUEsY0FDbEIsbUJBQW1CO0FBQUEsY0FDbkIsT0FBTztBQUFBLFlBQ3JCLEdBQWU7QUFBQSxjQUNEQSxnQkFBRSxVQUFVO0FBQUEsZ0JBQ1YsSUFBSTtBQUFBLGdCQUNKLElBQUk7QUFBQSxnQkFDSixHQUFHO0FBQUEsY0FDbkIsQ0FBZTtBQUFBLGNBQ0RBLGdCQUFFLFFBQVE7QUFBQSxnQkFDUixJQUFJO0FBQUEsZ0JBQ0osSUFBSTtBQUFBLGdCQUNKLElBQUk7QUFBQSxnQkFDSixJQUFJO0FBQUEsY0FDcEIsQ0FBZTtBQUFBLGNBQ0RBLGdCQUFFLFFBQVE7QUFBQSxnQkFDUixJQUFJO0FBQUEsZ0JBQ0osSUFBSTtBQUFBLGdCQUNKLElBQUk7QUFBQSxnQkFDSixJQUFJO0FBQUEsY0FDcEIsQ0FBZTtBQUFBLFlBQ2YsR0FBZSxFQUFFO0FBQUEsVUFDakIsSUFBYyxFQUFFO0FBQUEsUUFDaEIsQ0FBUztBQUFBLE1BQ1QsQ0FBTztBQUFBLElBQ1AsR0FBTyxFQUFFO0FBQUEsRUFDUDtBQUNGLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxNQUFNO0FBQ2hCLFFBQU0sSUFBSSxFQUFFLGFBQWE7QUFDekIsYUFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLO0FBQ25CLE1BQUUsQ0FBQyxJQUFJO0FBQ1QsU0FBTztBQUNULEdBQUcsSUFBb0Isa0JBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxpQkFBaUIsQ0FBQyxDQUFDO0FBQzlELFNBQVMsSUFBSTtBQUNYLE1BQUksSUFBSTtBQUNSLFdBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3JCLFNBQUssSUFBSSxPQUFPLFdBQVcsTUFBTTtBQUMvQixVQUFJLE9BQU8sWUFBWSxNQUFNO0FBQzNCLFVBQUM7QUFBQSxNQUNILEdBQUcsQ0FBQztBQUFBLElBQ04sR0FBRyxDQUFDO0FBQUEsRUFDTjtBQUNBLFdBQVMsSUFBSTtBQUNYLFVBQU0sT0FBTyxjQUFjLENBQUMsR0FBRyxJQUFJO0FBQUEsRUFDckM7QUFDQSxTQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxXQUFXO0FBQUEsRUFDZjtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1YsU0FBUyxFQUFFO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQ2IsR0FBRztBQUNELE1BQUksSUFBSSxFQUFDO0FBQ1QsV0FBUyxFQUFFLEdBQUc7QUFDWixNQUFFO0FBQUEsTUFDQSxNQUFNO0FBQ0osVUFBRSxXQUFXLElBQUksRUFBRSxpQkFBaUIsS0FBSyxDQUFDO0FBQUEsTUFDNUM7QUFBQSxNQUNBLE1BQU07QUFDSixVQUFFLFdBQVcsSUFBSSxFQUFFLGlCQUFpQixLQUFLLENBQUM7QUFBQSxNQUM1QztBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDTjtBQUFBLEVBQ0U7QUFDQSxXQUFTLEVBQUUsR0FBRztBQUNaLFFBQUksQ0FBQyxFQUFFO0FBQ0wsY0FBUSxFQUFFLEtBQUc7QUFBQSxRQUNYLEtBQUs7QUFDSCxZQUFDO0FBQ0Q7QUFBQSxRQUNGLEtBQUs7QUFDSCxZQUFFLENBQUM7QUFDSDtBQUFBLFFBQ0YsS0FBSztBQUNILFlBQUUsRUFBRTtBQUNKO0FBQUEsUUFDRixLQUFLO0FBQ0gsWUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUMsQ0FBRTtBQUNoQjtBQUFBLFFBQ0YsS0FBSztBQUNILFlBQUUsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFDLENBQUU7QUFDakI7QUFBQSxRQUNGLEtBQUs7QUFDSCxZQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBQyxDQUFFO0FBQ2hCO0FBQUEsUUFDRixLQUFLO0FBQ0gsWUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUUsQ0FBRTtBQUNqQjtBQUFBLE1BQ1Y7QUFBQSxFQUNFO0FBQ0EsV0FBUyxFQUFFLEdBQUc7QUFDWixNQUFFLFVBQVM7QUFBQSxFQUNiO0FBQ0EsV0FBUyxFQUFFLEdBQUc7QUFDWixNQUFFLFVBQVUsTUFBTTtBQUNoQixRQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxlQUFlLENBQUM7QUFBQSxJQUM3RCxHQUFHLE1BQU07QUFDUCxRQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxlQUFlLENBQUM7QUFBQSxJQUM3RCxHQUFHLEtBQUssRUFBRTtBQUFBLEVBQ1o7QUFDQSxXQUFTLElBQUk7QUFDWCxNQUFFLE9BQU8sQ0FBQztBQUFBLEVBQ1o7QUFDQSxTQUFPO0FBQUEsSUFDTCxjQUFjO0FBQUEsSUFDZCxZQUFZO0FBQUEsRUFDaEI7QUFDQTtBQUNBLFNBQVMsRUFBRTtBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsV0FBVztBQUNiLEdBQUc7QUFDRCxNQUFJLElBQUk7QUFBQSxJQUNOLEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxFQUNQO0FBQ0UsV0FBUyxFQUFFLEdBQUc7QUFDWixNQUFFLFlBQVksRUFBRSxnQkFBZ0IsV0FBVyxDQUFDLEVBQUUsaUJBQWlCLElBQUk7QUFBQSxNQUNqRSxHQUFHLEVBQUU7QUFBQSxNQUNMLEdBQUcsRUFBRTtBQUFBLElBQ1gsR0FBTyxTQUFTLGlCQUFpQixlQUFlLEdBQUcsRUFBRSxTQUFTLE1BQUUsQ0FBRSxHQUFHLFNBQVMsaUJBQWlCLGFBQWEsU0FBUyxHQUFHO0FBQ2xILGVBQVMsb0JBQW9CLGVBQWUsQ0FBQztBQUFBLElBQy9DLENBQUMsR0FBRyxTQUFTLGlCQUFpQixnQkFBZ0IsU0FBUyxHQUFHO0FBQ3hELGVBQVMsb0JBQW9CLGVBQWUsQ0FBQztBQUFBLElBQy9DLENBQUMsR0FBRyxTQUFTLGlCQUFpQixpQkFBaUIsU0FBUyxHQUFHO0FBQ3pELGVBQVMsb0JBQW9CLGVBQWUsQ0FBQztBQUFBLElBQy9DLENBQUM7QUFBQSxFQUNIO0FBQ0EsV0FBUyxFQUFFLEdBQUc7QUFDWixRQUFJLEVBQUUsWUFBWSxDQUFDLEVBQUUsbUJBQW1CLENBQUMsRUFBRSxZQUFhO0FBQ3hELFVBQU0sSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEdBQUcsRUFBRSxRQUFPO0FBQ3RDLE1BQUUsV0FBVyxFQUFFLGtCQUFrQixZQUFZLENBQUM7QUFBQSxFQUNoRDtBQUNBLFdBQVMsRUFBRSxHQUFHO0FBQ1osUUFBSSxFQUFFLFlBQVksQ0FBQyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsV0FBVyxDQUFDLEVBQUUsYUFBYztBQUNqRixRQUFJLElBQUk7QUFBQSxNQUNOLEdBQUcsRUFBRSxVQUFVLEVBQUU7QUFBQSxNQUNqQixHQUFHLEVBQUUsVUFBVSxFQUFFO0FBQUEsSUFDdkI7QUFDSSxNQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFdBQVcsR0FBRyxJQUFJO0FBQUEsTUFDeEMsR0FBRyxFQUFFO0FBQUEsTUFDTCxHQUFHLEVBQUU7QUFBQSxJQUNYLEdBQU8sRUFBRSxlQUFjO0FBQUEsRUFDckI7QUFDQSxTQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsSUFDZixZQUFZO0FBQUEsRUFDaEI7QUFDQTtBQUNBLFNBQVMsRUFBRTtBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsV0FBVztBQUNiLEdBQUc7QUFDRCxNQUFJLElBQUlFLElBQUUsRUFBRSxHQUFHLElBQUlBLElBQUUsQ0FBQyxHQUFHLElBQUk7QUFDN0IsV0FBUyxFQUFFLEdBQUc7QUFDWixRQUFJLEVBQUUsWUFBWSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxjQUFjLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxlQUFjLEdBQUksRUFBRSxRQUFRLFNBQVMsR0FBSTtBQUNwSCxVQUFNLElBQUksRUFBRSxRQUFRLEtBQUssQ0FBQztBQUMxQixRQUFJLENBQUMsRUFBRztBQUNSLFFBQUksSUFBSSxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxHQUFHLEVBQUUsUUFBTztBQUMzQyxRQUFJLEVBQUUsUUFBUSxXQUFXLEdBQUc7QUFDMUIsWUFBTSxJQUFJLEVBQUUsUUFBUSxLQUFLLENBQUM7QUFDMUIsVUFBSSxJQUFJLEVBQUU7QUFBQSxRQUNSLEdBQUcsSUFBSSxFQUFFLFVBQVU7QUFBQSxRQUNuQixHQUFHLElBQUksRUFBRSxVQUFVO0FBQUEsTUFDM0IsR0FBUztBQUFBLFFBQ0QsR0FBRyxJQUFJLEVBQUUsVUFBVTtBQUFBLFFBQ25CLEdBQUcsSUFBSSxFQUFFLFVBQVU7QUFBQSxNQUMzQixDQUFPO0FBQ0QsUUFBRSxTQUFTLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxJQUFJLE1BQU0sSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsS0FBSyxRQUFRLEVBQUUsS0FBSyxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsSUFBSSxFQUFFO0FBQUEsSUFDdkk7QUFDQSxRQUFJLEVBQUUsZUFBZSxFQUFFLFdBQVcsR0FBRyxTQUFTLENBQUMsR0FBRyxNQUFNLE1BQU07QUFDNUQsVUFBSTtBQUFBLFFBQ0YsR0FBRyxFQUFFO0FBQUEsUUFDTCxHQUFHLEVBQUU7QUFBQSxNQUNiO0FBQ007QUFBQSxJQUNGO0FBQ0EsVUFBTSxJQUFJO0FBQUEsTUFDUixHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQUEsTUFDWCxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQUEsSUFDakI7QUFDSSxNQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxHQUFHLElBQUk7QUFBQSxNQUNsRCxHQUFHLEVBQUU7QUFBQSxNQUNMLEdBQUcsRUFBRTtBQUFBLElBQ1g7QUFBQSxFQUNFO0FBQ0EsV0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFFBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQztBQUNoSCxXQUFPO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsSUFDZDtBQUFBLEVBQ0U7QUFDQSxXQUFTLEVBQUUsR0FBRztBQUNaLE1BQUUsWUFBWSxDQUFDLEVBQUUsaUJBQWlCLElBQUksTUFBTSxTQUFTLGlCQUFpQixhQUFhLEdBQUcsRUFBRSxTQUFTLE9BQUksR0FBRyxTQUFTLGlCQUFpQixZQUFZLFNBQVMsR0FBRztBQUN4SixRQUFFLFFBQVEsU0FBUyxNQUFNLEVBQUUsUUFBUSxLQUFLLFNBQVMsb0JBQW9CLGFBQWEsQ0FBQztBQUFBLElBQ3JGLENBQUM7QUFBQSxFQUNIO0FBQ0EsU0FBTztBQUFBLElBQ0wsY0FBYztBQUFBLElBQ2QsWUFBWUMsU0FBRSxNQUFNLE9BQU8sS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNO0FBQUEsRUFDbkQ7QUFDQTtBQUNBLFNBQVMsRUFBRTtBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUNWLEdBQUc7QUFDRCxRQUFNLElBQUlELElBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSUEsSUFBRSxDQUFDO0FBQ3BDRSxZQUFFLE1BQU07QUFDTixNQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUTtBQUFBLE1BQzdCLEdBQUcsRUFBRSxPQUFPLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRTtBQUFBLE1BQy9CLEdBQUcsRUFBRSxPQUFPLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRTtBQUFBLElBQ3JDLEdBQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFO0FBQUEsRUFDMUcsQ0FBQyxHQUFHQztBQUFBQSxJQUNGLE1BQU0sRUFBRTtBQUFBLElBQ1IsTUFBTTtBQUNKLFlBQU0sRUFBRSxJQUFJLE1BQU0sRUFBRSxRQUFRLEVBQUU7QUFBQSxJQUNoQztBQUFBLEVBQ0osR0FBS0E7QUFBQUEsSUFDRCxNQUFNLEVBQUU7QUFBQSxJQUNSLE1BQU07QUFDSixRQUFFLFFBQVEsRUFBRSxNQUFNLElBQUksRUFBRSxJQUFJLEdBQUcsRUFBRSxNQUFNLElBQUksRUFBRSxJQUFJO0FBQUEsSUFDbkQ7QUFBQSxJQUNBLEVBQUUsTUFBTSxLQUFFO0FBQUEsRUFDZDtBQUNFLFdBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRztBQUNsQixRQUFJLE1BQU0sQ0FBQyxLQUFLLE1BQU0sRUFBRztBQUN6QixVQUFNLElBQUksRUFBRTtBQUNaLFFBQUksSUFBSSxFQUFFLFFBQVE7QUFDbEIsUUFBSSxJQUFJLEVBQUUsVUFBVSxJQUFJLEVBQUUsVUFBVSxJQUFJLEVBQUUsWUFBWSxJQUFJLEVBQUUsVUFBVSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksS0FBTTtBQUM5RixRQUFJLEVBQUUsUUFBUSxHQUFHLEVBQUUsZUFBZSxhQUFhLElBQUksRUFBRSxFQUFFLEtBQUssSUFBSSxFQUFFLGVBQWUsa0JBQWtCO0FBQ2pHLFlBQU0sSUFBSSxFQUFFLEVBQUUsS0FBSztBQUNuQixZQUFNLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEdBQUcsSUFBSTtBQUFBLFFBQ2pDLElBQUksSUFBSSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7QUFBQSxRQUM1QixJQUFJLElBQUksT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO0FBQUEsTUFDcEM7QUFDTSxRQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTTtBQUFBLElBQ3BCO0FBQ0EsUUFBSSxJQUFJO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsVUFDSCxHQUFHO0FBQUEsVUFDSCxHQUFHO0FBQUEsUUFDYjtBQUFBLE1BQ0E7QUFBQSxNQUNNLEtBQUs7QUFBQSxRQUNILEdBQUcsRUFBRSxNQUFNO0FBQUEsUUFDWCxHQUFHLEVBQUUsTUFBTTtBQUFBLFFBQ1gsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ2hCO0FBQUEsTUFDTSxNQUFNO0FBQUEsSUFDWjtBQUNJLE1BQUUsUUFBUSxDQUFDO0FBQUEsRUFDYjtBQUNBLFdBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRztBQUNsQixVQUFNLENBQUMsTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUUsUUFBUTtBQUFBLE1BQ2xELEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxNQUNmLEdBQUcsRUFBRSxNQUFNLElBQUk7QUFBQSxJQUNyQjtBQUNJLFFBQUksSUFBSTtBQUFBLE1BQ04sTUFBTSxFQUFFO0FBQUEsTUFDUixPQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsVUFDSCxHQUFHO0FBQUEsVUFDSCxHQUFHO0FBQUEsUUFDYjtBQUFBLE1BQ0E7QUFBQSxNQUNNLEtBQUs7QUFBQSxRQUNILEdBQUcsRUFBRSxNQUFNO0FBQUEsUUFDWCxHQUFHLEVBQUUsTUFBTTtBQUFBLFFBQ1gsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ2hCO0FBQUEsTUFDTSxNQUFNO0FBQUEsSUFDWjtBQUNJLE1BQUUsVUFBVSxDQUFDO0FBQUEsRUFDZjtBQUNBLFdBQVMsRUFBRSxHQUFHO0FBQ1osTUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFFBQVE7QUFBQSxNQUNqQyxNQUFNLEVBQUU7QUFBQSxNQUNSLEtBQUs7QUFBQSxRQUNILEdBQUcsRUFBRSxNQUFNO0FBQUEsUUFDWCxHQUFHLEVBQUUsTUFBTTtBQUFBLFFBQ1gsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ2hCO0FBQUEsTUFDTSxNQUFNO0FBQUEsSUFDWixDQUFLO0FBQ0QsUUFBSSxJQUFJO0FBQUEsTUFDTixHQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU07QUFBQSxNQUMzQixHQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU07QUFBQSxJQUNqQztBQUNJLE1BQUUsUUFBUTtBQUFBLE1BQ1IsR0FBRyxFQUFFO0FBQUEsTUFDTCxHQUFHLEVBQUU7QUFBQSxJQUNYLEdBQU8sRUFBRSxVQUFVO0FBQUEsTUFDYixNQUFNLEVBQUU7QUFBQSxNQUNSLEtBQUs7QUFBQSxRQUNILEdBQUcsRUFBRSxNQUFNO0FBQUEsUUFDWCxHQUFHLEVBQUUsTUFBTTtBQUFBLFFBQ1gsUUFBUSxFQUFFO0FBQUEsUUFDVixRQUFRLEVBQUU7QUFBQSxNQUNsQjtBQUFBLE1BQ00sTUFBTTtBQUFBLElBQ1osQ0FBSztBQUFBLEVBQ0g7QUFDQSxTQUFPO0FBQUEsSUFDTCxNQUFNRixTQUFFLE1BQU0sRUFBRSxLQUFLO0FBQUEsSUFDckIsS0FBS0EsU0FBRSxNQUFNLEVBQUUsS0FBSztBQUFBLElBQ3BCLFNBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBRSxRQUFRO0FBQUEsSUFDWjtBQUFBLElBQ0EsUUFBUSxDQUFDLE1BQU07QUFDYixRQUFFLFFBQVE7QUFBQSxJQUNaO0FBQUEsSUFDQSxZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsRUFDWjtBQUNBO0FBQ0EsU0FBUyxFQUFFLEdBQUc7QUFDWixRQUFNLElBQUksRUFBRSxzQkFBcUI7QUFDakMsU0FBTztBQUFBLElBQ0wsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRO0FBQUEsSUFDdEIsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTO0FBQUEsRUFDMUI7QUFDQTtBQUNBLFNBQVMsRUFBRSxHQUFHLEdBQUc7QUFDZixRQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsU0FBTztBQUFBLElBQ0wsR0FBRyxFQUFFLElBQUksRUFBRTtBQUFBLElBQ1gsR0FBRyxFQUFFLElBQUksRUFBRTtBQUFBLEVBQ2Y7QUFDQTtBQUNBLFNBQVMsR0FBRyxFQUFFLE9BQU8sR0FBRyxXQUFXLEVBQUMsR0FBSTtBQUN0QyxXQUFTLEVBQUUsR0FBRztBQUNaLFFBQUksRUFBRSxZQUFZLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLFlBQWE7QUFDckQsVUFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLE1BQU0sSUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsSUFBSSxFQUFFLGdCQUFnQixLQUFLLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsR0FBRyxFQUFFLFFBQU87QUFDcEksTUFBRSxXQUFXLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxlQUFjO0FBQUEsRUFDL0M7QUFDQSxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsRUFDYjtBQUNBO0FBQ0EsU0FBUyxHQUFHO0FBQUEsRUFDVixPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQ1YsR0FBRztBQUNELFFBQU0sSUFBSSxFQUFFLEVBQUUsT0FBTyxHQUFHLFVBQVUsR0FBRyxXQUFXLEdBQUcsUUFBUSxHQUFHLEdBQUcsSUFBSSxFQUFFLEVBQUUsT0FBTyxHQUFHLFdBQVcsRUFBQyxDQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsT0FBTyxHQUFHLFdBQVcsRUFBQyxDQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsT0FBTyxHQUFHLFdBQVcsRUFBQyxDQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsT0FBTyxHQUFHLFdBQVcsR0FBRztBQUMzTSxTQUFPO0FBQUEsSUFDTCxNQUFNLEVBQUU7QUFBQSxJQUNSLEtBQUssRUFBRTtBQUFBLElBQ1AsU0FBUyxFQUFFO0FBQUEsSUFDWCxRQUFRLEVBQUU7QUFBQSxJQUNWLFNBQVMsRUFBRTtBQUFBLElBQ1gsY0FBYyxFQUFFO0FBQUEsSUFDaEIsWUFBWSxFQUFFO0FBQUEsSUFDZCxjQUFjLEVBQUU7QUFBQSxJQUNoQixlQUFlLEVBQUU7QUFBQSxJQUNqQixZQUFZLEVBQUU7QUFBQSxFQUNsQjtBQUNBO0FBQ0ssTUFBQyxLQUFxQlAsZ0NBQUU7QUFBQSxFQUMzQixRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDZjtBQUFBLElBQ0ksS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ2Y7QUFBQSxJQUNJLFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNmO0FBQUEsSUFDSSxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDZjtBQUFBLElBQ0ksU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ2Y7QUFBQSxJQUNJLGFBQWE7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNmO0FBQUEsSUFDSSxhQUFhO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDZjtBQUFBLElBQ0ksYUFBYTtBQUFBLE1BQ1gsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ2Y7QUFBQSxJQUNJLGtCQUFrQjtBQUFBLE1BQ2hCLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNmO0FBQUEsSUFDSSxlQUFlO0FBQUEsTUFDYixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDZjtBQUFBLElBQ0ksWUFBWTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ2Y7QUFBQSxJQUNJLGFBQWE7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNmO0FBQUEsSUFDSSxjQUFjO0FBQUEsTUFDWixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDZjtBQUFBLElBQ0ksY0FBYztBQUFBLE1BQ1osTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ2Y7QUFBQSxJQUNJLGlCQUFpQjtBQUFBLE1BQ2YsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ2Y7QUFBQSxJQUNJLGNBQWM7QUFBQSxNQUNaLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNmO0FBQUEsSUFDSSxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDZjtBQUFBLElBQ0ksZUFBZTtBQUFBLE1BQ2IsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ2Y7QUFBQSxJQUNJLGdCQUFnQjtBQUFBLE1BQ2QsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ2Y7QUFBQSxJQUNJLFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNmO0FBQUEsSUFDSSxZQUFZO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDZjtBQUFBLEVBQ0E7QUFBQSxFQUNFLE9BQU8sQ0FBQyxVQUFVLFFBQVEsZUFBZSxZQUFZO0FBQUEsRUFDckQsTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFDLEdBQUk7QUFDcEIsUUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUlNLElBQUMsR0FBSSxJQUFJQyxTQUFFLE1BQU07QUFDckMsVUFBSTtBQUNKLGNBQVEsSUFBSSxFQUFFLFVBQVUsT0FBTyxTQUFTLEVBQUUsY0FBYyxFQUFFLFFBQVE7QUFBQSxJQUNwRSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsT0FBTyxHQUFHLFVBQVUsR0FBRyxXQUFXLEdBQUcsUUFBUSxFQUFDLENBQUU7QUFDN0QsYUFBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFlBQU0sU0FBUyxFQUFFLGVBQWUsRUFBRSxJQUFJLElBQUksTUFBTSxZQUFZLEVBQUUsY0FBYyxFQUFFLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUFBLElBQzVGO0FBQ0EsUUFBSSxJQUFJQSxTQUFFLE1BQU0sYUFBYSxFQUFFLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxLQUFLLEdBQUc7QUFDMUYsYUFBUyxJQUFJO0FBQ1gsUUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLGtCQUFrQixpQkFBaUIsRUFBRSxNQUFNLE1BQU0sYUFBYSw0QkFBNEIsRUFBRSxNQUFNLE1BQU0sZUFBZTtBQUFBLElBQ3RMO0FBQ0EsV0FBT0U7QUFBQUEsTUFDTDtBQUFBLE1BQ0EsTUFBTTtBQUNKLFVBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLE1BQ2Y7QUFBQSxJQUNBLEdBQU9ELFVBQUUsTUFBTTtBQUNULFFBQUM7QUFBQSxJQUNILENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBT1AsVUFBQyxHQUFJQyxtQkFBRSxPQUFPO0FBQUEsTUFDM0IsU0FBUztBQUFBLE1BQ1QsS0FBSztBQUFBLE1BQ0wsT0FBT1EsZUFBRSxFQUFFLE9BQU8sU0FBUztBQUFBLE1BQzNCLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQUEsTUFDeEIsSUFBSSxNQUFNQyxNQUFFLENBQUMsRUFBRSxjQUFjQSxNQUFFLENBQUMsRUFBRSxXQUFXLEdBQUcsQ0FBQztBQUFBLE1BQ2pELGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQUEsTUFDM0IsSUFBSSxNQUFNQSxNQUFFLENBQUMsRUFBRSxpQkFBaUJBLE1BQUUsQ0FBQyxFQUFFLGNBQWMsR0FBRyxDQUFDO0FBQUEsTUFDdkQsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7QUFBQSxNQUNyQixJQUFJLE1BQU1BLE1BQUUsQ0FBQyxFQUFFLFdBQVdBLE1BQUUsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDO0FBQUEsTUFDM0MsY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7QUFBQSxNQUMxQixJQUFJLE1BQU1BLE1BQUUsQ0FBQyxFQUFFLGdCQUFnQkEsTUFBRSxDQUFDLEVBQUUsYUFBYSxHQUFHLENBQUM7QUFBQSxJQUMzRCxHQUFPO0FBQUEsTUFDREMsV0FBRSxFQUFFLFFBQVEsV0FBVyxDQUFBLEdBQUksUUFBUSxJQUFFO0FBQUEsTUFDckNBLFdBQUUsRUFBRSxRQUFRLFdBQVcsQ0FBQSxHQUFJLE1BQU07QUFBQSxRQUMvQkQsTUFBRSxDQUFDLEVBQUUsdUJBQXVCVixVQUFDLEdBQUlZLFlBQUUsR0FBRztBQUFBLFVBQ3BDLEtBQUs7QUFBQSxVQUNMLGNBQWNGLE1BQUUsQ0FBQyxFQUFFO0FBQUEsVUFDbkIsWUFBWUEsTUFBRSxDQUFDLEVBQUU7QUFBQSxRQUMzQixHQUFXLE1BQU0sR0FBRyxDQUFDLGdCQUFnQixZQUFZLENBQUMsS0FBS0csbUJBQUUsSUFBSSxJQUFFO0FBQUEsTUFDL0QsR0FBUyxJQUFFO0FBQUEsSUFDWCxHQUFPLEVBQUU7QUFBQSxFQUNQO0FBQ0YsQ0FBQyxHQUFHLEtBQUssc0JBQXNCLEtBQUsscUJBQXFCLEtBQUs7QUFBQSxFQUM1RCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQ1gsR0FBRyxLQUFLO0FBQUEsRUFDTixRQUFRO0FBQ1YsR0FBRyxLQUFxQixrQkFBRSxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsYUFBYSxpQkFBaUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7QUNwbkJwRixVQUFNLFFBQVEsZ0JBQUE7QUFFZCxVQUFNLFFBQVE7QUFLZCxVQUFNLFdBQVcsU0FBUyxNQUFNLE1BQU0sOEJBQThCLE1BQU0sVUFBVSxDQUFDOzs7Ozs7OztBQW5ENUUsTUFBQTlCLGVBQUEsRUFBQSxPQUFNLHNDQUFBO0FBUU4sTUFBQUcsZUFBQSxFQUFBLE9BQU0sc0NBQUE7QUFPTixNQUFBUSxlQUFBLEVBQUEsT0FBTSxvQ0FBQTs7OztFQWFULE9BQU07Ozs7c0JBckNabkIsbUJBMkNNLE9BQUE7QUFBQSxJQTNDRCxLQUFJO0FBQUEsSUFDSCxPQUFLZ0Isc0ZBQTBFLE9BQUEsVUFBVSxFQUFBLENBQUE7QUFBQSxJQUN6RixtQ0FBaUMsT0FBQTtBQUFBLEVBQUEsR0FBQTtBQUFBLElBSTFCLE9BQUEsWUFBQWIsYUFGWEgsbUJBcUNNLE9BQUE7QUFBQSxNQUFBLEtBQUE7QUFBQSxNQXJDRCxPQUFNO0FBQUEsTUFDTCxPQUFLb0IsZUFBQSxFQUFBLGlCQUFxQixPQUFBLFNBQVMsU0FBSyxlQUFBO0FBQUEsTUFFeEMsbUNBQWlDLE9BQUE7QUFBQSxJQUFBLEdBQUE7QUFBQSxNQUVyQ1gsZ0JBTU0sT0FOTkQsY0FNTTtBQUFBLFNBQUFMLFVBQUEsSUFBQSxHQUxKSCxtQkFJTVksVUFBQSxNQUFBQyxXQUpXLE9BQUEsU0FBUyxVQUFRLENBQXRCLE1BQUM7OEJBQWJiLG1CQUlNLE9BQUE7QUFBQSxZQUorQixLQUFLLEVBQUU7QUFBQSxVQUFBLEdBQUE7QUFBQSxZQUMxQ0MsWUFFcUMsK0NBQUE7QUFBQSxjQURsQyxZQUFZLEVBQUU7QUFBQSxZQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUE7OztNQUtyQlEsZ0JBS00sT0FMTkUsY0FLTTtBQUFBLFFBSkpWLFlBR3dDLE9BQUEsb0NBQUEsR0FBQTtBQUFBLFVBRnJDLE1BQU0sT0FBQSxTQUFTO0FBQUEsVUFDZixlQUFlLGdCQUFTLFNBQVM7QUFBQSxRQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxlQUFBLENBQUE7QUFBQTtNQUl0Q1EsZ0JBU00sT0FUTlUsY0FTTTtBQUFBLFFBUkpsQixZQU9jLE9BQUEsYUFBQSxHQUFBO0FBQUEsVUFOWixNQUFLO0FBQUEsVUFDSixNQUFNLE9BQUEsU0FBUztBQUFBLFFBQUEsR0FBQTtBQUFBLDJCQUNoQixNQUdPO0FBQUEsWUFIUFEsZ0JBR08sUUFBQTtBQUFBLGNBSEEsT0FBTyxPQUFBLFNBQVM7QUFBQSxjQUNqQixPQUFNO0FBQUEsWUFBQSxHQUFBSCxnQkFDUCxnQkFBUyxJQUFJLEdBQUEsR0FBQWlDLFlBQUE7QUFBQSxVQUFBLENBQUE7QUFBQTs7O01BTWQsT0FBQSxTQUFTLFlBQUFwQyxVQUFBLEdBRGpCSCxtQkFLTSxPQUxOLFlBS007QUFBQSxRQUROQyxZQUF5RCxPQUFBLG9DQUFBLEdBQUEsRUFBcEIsZUFBZSxFQUFBLENBQUM7QUFBQSxNQUFBLENBQUEsS0FBQW9CLG1CQUFBLElBQUEsSUFBQTtBQUFBOzs7Ozs7Ozs7OztBQ2pCekQsVUFBTSxRQUFRLGdCQUFBO0FBRWQsVUFBTSxRQUFRO0FBSWQsVUFBTSxRQUFRLFNBQVMsTUFBTSxNQUFNLDJCQUEyQixNQUFNLE9BQU8sQ0FBQztBQUU1RSxVQUFNLFVBQVUsU0FBUyxNQUFNLE1BQU0sU0FBUyxDQUFFLE1BQU0sTUFBTSxVQUFVOzs7Ozs7O0FBM0IvRCxNQUFBZCxlQUFBLEVBQUEsT0FBTSxxQ0FBQTs7O0FBRkYsU0FBQSxPQUFBLFNBQUFKLFVBQUEsR0FEWEgsbUJBYU0sT0FBQTtBQUFBLElBQUEsS0FBQTtBQUFBLElBYkQsT0FBTTtBQUFBLElBRUwsZ0NBQThCLE9BQUE7QUFBQSxFQUFBLEdBQUE7QUFBQSxJQUNsQ1MsZ0JBTU0sT0FOTkYsY0FNTTtBQUFBLE9BQUFKLFVBQUEsSUFBQSxHQUxKSCxtQkFJcUNZLFVBQUEsTUFBQUMsV0FIdkIsT0FBQSxNQUFNLFlBQVUsQ0FBckIsTUFBQzs0QkFEVlQsWUFJcUMsT0FBQSxvQ0FBQSxHQUFBO0FBQUEsVUFGbEMsS0FBSyxFQUFFO0FBQUEsVUFDUCxZQUFZLEVBQUU7QUFBQSxRQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUE7O0lBR1IsT0FBQSxXQUFBRCxVQUFBLEdBQVhILG1CQUVNLHFCQUZjLGVBRXBCLEtBQUFxQixtQkFBQSxJQUFBLElBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDaU1GLFVBQU0sU0FBUyxrQkFBQTtBQUVmLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sUUFBUTtBQU1kLFVBQU07QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLElBQUEsSUFDQSxZQUFZLE1BQU07QUFFdEIsVUFBTSxTQUFTLFNBQVMsTUFBTSxNQUFNLFVBQVUsTUFBTSxRQUFRLENBQUM7QUFFN0QsVUFBTSxnQkFBZ0IsU0FBUyxNQUFNLE9BQU8sT0FBTyx5QkFBeUIsT0FBTyxnQ0FBZ0MsS0FBSztBQUV4SCxhQUFTLFFBQVM7QUFDYixhQUFlLFNBQVMsT0FBTztBQUNoQyxjQUFRLElBQUksVUFBVSxPQUFPLEtBQUs7QUFDbEMsY0FBUSxJQUFJLGVBQWUsT0FBTyxPQUFPLFNBQVMsSUFBSSxDQUFBLE1BQUssR0FBRyxFQUFFLFVBQVUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssTUFBTSxDQUFDO0FBQUEsSUFDekc7QUFFQSxhQUFTLGtCQUFtQjtBQUN4QixVQUFJLG9CQUFvQixTQUFTLE1BQU0sVUFBVTtBQUM3QyxlQUFPLHVCQUF1QixFQUFFO0FBQUEsTUFDcEMsT0FBTztBQUNILGVBQU8sdUJBQXVCLE1BQU0sUUFBUTtBQUFBLE1BQ2hEO0FBQUEsSUFDSjtBQUVBLGFBQVMsY0FBZTtBQUNwQixVQUFJLE9BQU8sU0FBUyxDQUFDLE9BQU8sTUFBTSxZQUFZO0FBQzFDLGNBQU0sYUFBYSxNQUFNLFVBQVUsRUFBRSxZQUFZLE1BQU07QUFBQSxNQUMzRDtBQUFBLElBQ0o7QUFFQSxhQUFTLGtCQUFtQixjQUFzQjtBQUM5QyxZQUFNLGFBQWEsTUFBTSxjQUFjLFlBQVk7QUFDbkQsVUFBSSxZQUFZO0FBQ1osY0FBTSx5QkFBeUIsV0FBVyxPQUFBLEdBQVUsTUFBTSxRQUFRO0FBQ2xFLGNBQU0saUJBQWlCLFlBQVk7QUFDbkMsb0JBQUE7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUVBLGFBQVMsa0JBQW1CLGNBQXNCO0FBQzlDLFlBQU0sYUFBYSxNQUFNLGNBQWMsWUFBWTtBQUNuRCxVQUFJLFlBQVk7QUFDWixjQUFNLHlCQUF5QixXQUFXLE9BQUEsR0FBVSxNQUFNLFFBQVE7QUFDbEUsb0JBQUE7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUVBLGFBQVMsaUJBQWtCLGVBQXVCO0FBQzlDLFVBQUk7QUFDQSxjQUFNLFlBQVksS0FBSyxNQUFNLGFBQWE7QUFFMUMsY0FBTSx5QkFBeUIsV0FBVyxNQUFNLFFBQVE7QUFDeEQsb0JBQUE7QUFBQSxNQUNKLFNBQVMsR0FBRztBQUNSLGdCQUFRLElBQUksZ0JBQWdCLGFBQWEsS0FBSyxDQUFDLEVBQUU7QUFBQSxNQUNyRDtBQUFBLElBQ0o7QUFHQSxhQUFTLGNBQWUsVUFBa0I7QUFDdEMsWUFBTSxXQUFXLFVBQVUsTUFBTSxRQUFRO0FBQ3pDLGtCQUFBO0FBQUEsSUFDSjtBQUVBLGFBQVMsaUJBQWtCLFVBQWtCLE9BQWU7QUFDeEQsY0FBUSxJQUFJLGtCQUFrQixVQUFVLFNBQVMsS0FBSztBQUN0RCxVQUFJLENBQUMsVUFBVTtBQUNYLGNBQU07QUFBQSxVQUFVLE9BQU8sWUFBQTtBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ047QUFBQSxRQUFBO0FBQ2hCLG9CQUFBO0FBQUEsTUFDSixPQUFPO0FBQ0gsY0FBTSxXQUFXLFVBQVUsTUFBTSxVQUFVLEtBQUs7QUFDaEQsb0JBQUE7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUVBLGFBQVMsK0JBQWdDLE9BQWU7QUFFcEQsWUFBTSxVQUFVLE9BQU8sT0FBTyx5QkFBeUI7QUFDdkQsVUFBSSxTQUFTO0FBQ1QsY0FBTSxtQ0FBbUMsT0FBTyxPQUFPO0FBQUEsTUFDM0Q7QUFBQSxJQUNKO0FBRUEsYUFBUyxhQUFjLE9BQWU7QUFDbEMsWUFBTSxrQkFBa0IsTUFBTSxVQUFVLEtBQUs7QUFBQSxJQUNqRDtBQUVBLGFBQVMsa0NBQW1DLE9BQWU7QUFFdkQsWUFBTSxVQUFVLE9BQU8sT0FBTyx5QkFBeUI7QUFDdkQsVUFBSSxTQUFTO0FBQ1QsY0FBTSxzQ0FBc0MsT0FBTyxTQUFTLElBQUk7QUFBQSxNQUNwRTtBQUFBLElBQ0o7QUFFQSxhQUFTLGlDQUFrQyxNQUFjO0FBRXJELFlBQU0sVUFBVSxPQUFPLE9BQU8seUJBQXlCO0FBQ3ZELFVBQUksV0FBVyxNQUFNO0FBQ2pCLGNBQU0sY0FBYyxNQUFNLGdCQUFnQixNQUFNLGNBQWMsT0FBTyxJQUFJLElBQUksRUFBRSxpQkFBaUIsR0FBQTtBQUNoRyxjQUFNO0FBQUEsVUFBOEI7QUFBQSxVQUNBO0FBQUEsVUFDQSxXQUFXLE9BQU87QUFBQSxVQUNsQjtBQUFBLFVBQ0EsWUFBWTtBQUFBLFFBQUE7QUFBQSxNQUVwRDtBQUFBLElBQ0o7QUFFQSxhQUFTLGlDQUFrQyxZQUFvQjtBQUMzRCxZQUFNO0FBQUEsUUFBcUM7QUFBQSxRQUNBLE1BQU07QUFBQSxNQUFBO0FBQUEsSUFDckQ7QUFHQSxhQUFTLDBCQUEyQixjQUFzQixPQUFlO0FBQ3JFLFlBQU0sYUFBYSxNQUFNLGNBQWMsWUFBWTtBQUNuRCxVQUFJLGNBQWMsT0FBTyxPQUFPO0FBQzVCLGNBQU07QUFBQSxVQUFVLE9BQU8sWUFBQTtBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ047QUFBQSxVQUNBLFdBQVcsT0FBQTtBQUFBLFFBQU87QUFDbEMsb0JBQUE7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUVBLGFBQVMsMEJBQTJCLGNBQXNCLE9BQWU7QUFDckUsWUFBTSxhQUFhLE1BQU0sY0FBYyxZQUFZO0FBQ25ELFVBQUksY0FBYyxPQUFPLE9BQU87QUFDNUIsY0FBTTtBQUFBLFVBQVUsT0FBTyxZQUFBO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTjtBQUFBLFVBQ0EsV0FBVyxPQUFBO0FBQUEsUUFBTztBQUNsQyxvQkFBQTtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBRUEsYUFBUyx5QkFBMEIsZUFBdUIsT0FBZTtBQUNyRSxVQUFJO0FBQ0EsY0FBTSxZQUFZLEtBQUssTUFBTSxhQUFhO0FBQzFDLFlBQUksT0FBTyxPQUFPO0FBQ2QsZ0JBQU07QUFBQSxZQUFVLE9BQU8sWUFBQTtBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ047QUFBQSxZQUNBO0FBQUEsVUFBQTtBQUNoQixzQkFBQTtBQUFBLFFBQ0o7QUFBQSxNQUNKLFNBQVMsR0FBRztBQUNSLGdCQUFRLElBQUksZ0JBQWdCLGFBQWEsS0FBSyxDQUFDLEVBQUU7QUFBQSxNQUNyRDtBQUFBLElBQ0o7QUFFQSxhQUFTLGFBQWM7QUFFbkIsVUFBSSxPQUFPLFNBQVMsT0FBTyxNQUFNLHlCQUF5QjtBQUN0RCxjQUFNLDZCQUE2QixPQUFPLE1BQU0sd0JBQXdCLEVBQUU7QUFBQSxNQUM5RTtBQUFBLElBQ0o7QUFFQSxVQUFNLFNBQVMsU0FBUztBQUFBLE1BQ3BCLE1BQU87QUFDSCxlQUFPLE9BQU8sUUFBUSxPQUFPLE1BQU0sYUFBYTtBQUFBLE1BQ3BEO0FBQUEsTUFDQSxJQUFLLE9BQWdCO0FBQ2pCLGNBQU0sYUFBYSxNQUFNLFVBQVUsRUFBRSxZQUFZLE9BQU87QUFBQSxNQUM1RDtBQUFBLElBQUEsQ0FDSDtBQUVELFVBQU0sYUFBYSxTQUFTO0FBQUEsTUFDeEIsTUFBTztBQUNILGVBQU8sT0FBTyxRQUFRLE9BQU8sTUFBTSxPQUFPO0FBQUEsTUFDOUM7QUFBQSxNQUNBLElBQUssT0FBZTtBQUNoQixjQUFNLGFBQWEsTUFBTSxVQUFVLEVBQUUsTUFBSyxPQUFPO0FBQUEsTUFDckQ7QUFBQSxJQUFBLENBQ0g7QUFFRCxVQUFNLGNBQWMsU0FBUztBQUFBLE1BQ3pCLE1BQU87QUFDSCxlQUFPLE9BQU8sUUFBUSxPQUFPLE1BQU0sUUFBUTtBQUFBLE1BQy9DO0FBQUEsTUFDQSxJQUFLLE9BQWU7QUFDaEIsY0FBTSxrQkFBa0IsTUFBTSxVQUFVLEtBQUs7QUFBQSxNQUNqRDtBQUFBLElBQUEsQ0FDSDtBQUVELGFBQVMscUJBQXNCO0FBQzNCLFVBQUksT0FBTyxPQUFPO0FBQ2QsY0FBTSxhQUFhLE1BQU0sVUFBVSxFQUFFLGdCQUFnQixDQUFDLE9BQU8sTUFBTSxnQkFBZ0I7QUFBQSxNQUN2RjtBQUFBLElBQ0o7QUFFQSxhQUFTLFVBQVcsT0FBZTtBQUMvQixVQUFJLENBQUMsT0FBTztBQUVSLGNBQU0sMEJBQTBCLE1BQU0sUUFBQSxFQUFVLHdCQUF3QixLQUFLO0FBQUEsVUFDekUsTUFBTTtBQUFBLFVBQ04sWUFBWSxDQUFBO0FBQUEsUUFBQyxDQUNoQjtBQUNELGNBQU0sYUFBYSxNQUFNLFVBQVUsRUFBRSx5QkFBeUI7QUFDOUQsZ0JBQVEsd0JBQXdCO0FBQUEsTUFDcEM7QUFDQSxhQUFPLG1DQUFtQyxLQUFLO0FBQUEsSUFDbkQ7QUFHQSxVQUFNLGNBQTZCO0FBQUEsTUFDL0IsQ0FBRSx1QkFBdUIsa0JBQW1CO0FBQUEsTUFDNUMsQ0FBRSxtQ0FBbUMsVUFBVztBQUFBLE1BQ2hELENBQUUsVUFBVSxNQUFNLE1BQU0sYUFBYSxNQUFNLFFBQVEsQ0FBRTtBQUFBLElBQUE7Ozs7Ozs7O0FBMVd2QyxNQUFBYixlQUFBLEVBQUEsT0FBTSxjQUFBO0FBb0NULE1BQUFHLGVBQUEsRUFBQSxPQUFNLGdDQUFBO0FBU1IsTUFBQVEsZUFBQSxFQUFBLE9BQU0sdUJBQUE7O0VBb0NULHNDQUFPLENBQUEsbUJBQUEsWUFBQSxDQUFtQzs7O3NCQWhKcERuQixtQkF1TE0sT0FBQTtBQUFBLElBdkxELEtBQUk7QUFBQSxJQUNILE9BQUtnQixlQUFBLENBQUEsb0JBQUEsVUFBa0MsT0FBQSxRQUFRLElBQUEsRUFBQSxlQUFxQixvQkFBYSxPQUFBLG9CQUFBLENBQW1CLENBQUE7QUFBQSxJQUNwRyxlQUFhLE9BQUE7QUFBQSxFQUFBLEdBQUE7QUFBQSxJQUVqQmYsWUFpQlcsT0FBQSxVQUFBLEdBQUE7QUFBQSxNQWpCRCxNQUFLO0FBQUEsTUFDTCxPQUFNO0FBQUEsTUFDTixPQUFNO0FBQUEsTUFDTCxVQUFRLE9BQUE7QUFBQSxNQUNSLGNBQVksT0FBQTtBQUFBLE1BQ1osYUFBVyxPQUFBO0FBQUEsTUFDWCxjQUFZLE9BQUE7QUFBQSxJQUFBLEdBQUE7QUFBQSx1QkFDckIsTUFTUTtBQUFBLFFBVFJBLFlBU1EsTUFBQTtBQUFBLFVBUk4sTUFBQTtBQUFBLFVBQ0EsT0FBQTtBQUFBLFVBQ0EsTUFBSztBQUFBLFVBQ0wsT0FBTTtBQUFBLFVBQ04sTUFBSztBQUFBLFVBQ0osU0FBSyxzQ0FBRSxPQUFBLHlCQUF3QixNQUFBLFFBQUE7QUFBQSxRQUFBLEdBQUE7QUFBQSwyQkFFaEMsTUFBK0M7QUFBQSxZQUEvQ0EsWUFBK0MsVUFBQSxNQUFBO0FBQUEsY0FBQSxTQUFBUyxRQUFwQyxNQUF3QixDQUFBLEdBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUE7QUFBQSxnQkFBQUwsZ0JBQXhCLDRCQUF3QixFQUFBO0FBQUEsY0FBQSxFQUFBLENBQUE7QUFBQTs7Ozs7Ozs7SUFNNUIsT0FBQSxVQUFBRixhQUZYSCxtQkEySU0sT0FBQTtBQUFBLE1BQUEsS0FBQTtBQUFBLE1BM0lBLE9BQUtnQixlQUFBLENBQUEsVUFBQSxFQUFBLGdCQUFnQyxjQUFPLGVBQUEsQ0FBYyxDQUFBO0FBQUEsTUFDMUQsT0FBS0ksZUFBQSxFQUFBLGlCQUFxQixPQUFBLE9BQU8sU0FBSyxlQUFBO0FBQUEsTUFFdEMsZUFBYSxPQUFBLE9BQU87QUFBQSxJQUFBLEdBQUE7QUFBQSxNQUV4Qm5CLFlBa0hXLE9BQUEsVUFBQSxHQUFBO0FBQUEsUUFsSEQsTUFBSztBQUFBLFFBQ0wsT0FBTTtBQUFBLFFBQ04sT0FBTTtBQUFBLFFBQ0wsY0FBWSxPQUFBO0FBQUEsUUFDWixVQUFRLE9BQUE7QUFBQSxRQUNSLGFBQVcsT0FBQTtBQUFBLFFBQ1gsY0FBWSxPQUFBO0FBQUEsUUFDWiw4QkFBNEIsT0FBQTtBQUFBLFFBQzVCLDZCQUEyQixPQUFBO0FBQUEsUUFDM0IsMkJBQXlCLE9BQUE7QUFBQSxRQUN6Qiw2QkFBMkIsT0FBQTtBQUFBLFFBQzNCLFNBQU8sT0FBQTtBQUFBLE1BQUEsR0FBQTtBQUFBLHlCQUNoQixNQXFHd0I7QUFBQSxVQXJHeEJBLFlBcUd3QixPQUFBLHFCQUFBLEdBQUE7QUFBQSxZQXBHdEIsT0FBTTtBQUFBLFlBQ04sT0FBQTtBQUFBLFlBQ0EsZ0JBQUE7QUFBQSxZQUNDLFVBQVU7QUFBQSxZQUNYLHNCQUFBO0FBQUEsWUFDQSxzQkFBQTtBQUFBLFlBQUEsWUFDUyxPQUFBO0FBQUEsWUFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxTQUFNO0FBQUEsWUFDZixnQkFBYTtBQUFBLFlBQ2IscUJBQWtCO0FBQUEsWUFDakIsT0FBTyxPQUFBLE9BQU87QUFBQSxVQUFBLEdBQUE7QUFBQSxZQUdFLFFBQU1TLFFBQ3JCLE1BZWM7QUFBQSxjQWZkVCxZQWVjLE9BQUEsYUFBQSxHQUFBO0FBQUEsZ0JBZFosTUFBSztBQUFBLGdCQUNKLE1BQU0sT0FBQTtBQUFBLGdCQUNOLFNBQUtDLGNBQU8sT0FBQSxPQUFLLENBQUEsTUFBQSxDQUFBO0FBQUEsY0FBQSxHQUFBO0FBQUEsaUNBQ2xCLE1BSVM7QUFBQSxrQkFKVEQsWUFJUyxPQUFBO0FBQUEsb0JBSFAsTUFBSztBQUFBLG9CQUNKLFNBQU8sT0FBQTtBQUFBLG9CQUNSLE1BQUs7QUFBQSxrQkFBQSxDQUFBO0FBQUEsa0JBRVBRLGdCQUtPLFFBTFBELGNBS087QUFBQSxvQkFBQUgsZ0JBQUFDLGdCQUxzQixPQUFBLFVBQVUsSUFBRyxLQUN4QyxDQUFBO0FBQUEsb0JBQUFMLFlBR2UsWUFBQTtBQUFBLHNCQUFBLFlBSFEsT0FBQTtBQUFBLHNCQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLGFBQVU7QUFBQSxzQkFBRSxhQUFBO0FBQUEsb0JBQUEsR0FBQTtBQUFBLHNCQUNqQyxTQUFBUyxRQUFBLENBQ29DLFVBRm9CO0FBQUEsd0JBQ3hEVCxZQUNvQyxPQUFBLGlCQUFBLEdBQUE7QUFBQSwwQkFEbEIsVUFBUSxNQUFNO0FBQUEsMEJBQ2QsUUFBUSxPQUFBO0FBQUEsd0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxZQUFBLFFBQUEsQ0FBQTtBQUFBOzs7Ozs7O2NBS3hCLE9BQUEsT0FBTyw0QkFBNEIsdUJBRDNDRyxZQTBCUSxNQUFBO0FBQUEsZ0JBQUEsS0FBQTtBQUFBLGdCQXhCTixNQUFLO0FBQUEsZ0JBQ0wsT0FBQTtBQUFBLGdCQUNBLE1BQUE7QUFBQSxnQkFDQSxNQUFLO0FBQUEsY0FBQSxHQUFBO0FBQUEsaUNBQ0wsTUFtQlM7QUFBQSxrQkFuQlRILFlBbUJTLE9BQUEsRUFBQSxPQUFBLFNBbkJELEdBQU07QUFBQSxvQkFBUSxTQUFBUyxRQUNkLE1BQXNEO0FBQUEsdUJBQUFQLFVBQUEsSUFBQSxHQUE1REgsbUJBaUJNWSxVQUFBLE1BQUFDLFdBakJtQixPQUFBLE9BQU8sNkJBQTJCLENBQTlDLGFBQVE7NENBQXJCYixtQkFpQk0sT0FBQTtBQUFBLDBCQWhCQSxPQUFNO0FBQUEsMEJBQ0wsS0FBSyxTQUFTO0FBQUEsd0JBQUEsR0FBQTtBQUFBLDBCQUNuQkMsWUFRUSxNQUFBO0FBQUEsNEJBUEwsT0FBTyxTQUFTO0FBQUEsNEJBQ2pCLE9BQU07QUFBQSw0QkFDTCxPQUFLbUIsZUFBQSxFQUFBLGlCQUFxQixTQUFTLFNBQUssZUFBQTtBQUFBLDRCQUN6QyxNQUFLO0FBQUEsNEJBQ0wsV0FBQTtBQUFBLDRCQUNBLE1BQUE7QUFBQSw0QkFDQSxPQUFBO0FBQUEsMEJBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLE9BQUEsQ0FBQTtBQUFBLDBCQUVGbkIsWUFJYyxNQUFBO0FBQUEsNEJBSFosTUFBSztBQUFBLDRCQUNMLE9BQU07QUFBQSw0QkFDTixPQUFBO0FBQUEsNEJBQ0EsTUFBSztBQUFBLDBCQUFBLENBQUE7QUFBQTs7Ozs7Ozs7Y0FJYkEsWUFDc0IsT0FBQSxVQUFBLEdBQUEsRUFBbkIsU0FBUyxPQUFBLE9BQUEsR0FBTSxNQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUE7QUFBQSxjQUNsQlEsZ0JBTU0sT0FOTkUsY0FNTTtBQUFBLGdCQUxKVixZQUUwQixPQUFBLGNBQUEsR0FBQTtBQUFBLGtCQUR4QixPQUFNO0FBQUEsa0JBQUEsWUFDRyxPQUFBO0FBQUEsa0JBQUEsdUJBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLE9BQUEsY0FBVztBQUFBLGdCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUEsZ0JBQ3RCQSxZQUMyQixPQUFBLGFBQUEsR0FBQSxFQUF4QixTQUFTLE9BQUEsWUFBQSxDQUFXO0FBQUEsY0FBQSxDQUFBO0FBQUE7NkJBSTNCLE1BS007QUFBQSxjQUxOUSxnQkFLTSxPQUxOVSxjQUtNO0FBQUEsZ0JBSEksOEJBRFJmLFlBRzhCLE9BQUEsNkJBQUEsR0FBQTtBQUFBLGtCQUFBLEtBQUE7QUFBQSxrQkFEM0IsaUJBQWlCLE9BQUEsT0FBTyxlQUFlLE1BQUU7QUFBQSxnQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLGlCQUFBLENBQUEsS0FBQWlCLG1CQUFBLElBQUEsSUFBQTtBQUFBO2NBSTlDWixnQkFPTSxPQUFBO0FBQUEsZ0JBUEQsT0FBS08sZUFBQSxDQUFDLDZDQUEyQyxFQUFBLDJDQUNJLE9BQUEsZUFBYSxDQUFBO0FBQUEsY0FBQSxHQUFBO0FBQUEsZ0JBQ3JFZixZQUdrQyxPQUFBLGlDQUFBLEdBQUE7QUFBQSxrQkFGL0IsU0FBSyxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUUsT0FBQSxVQUFVLE9BQUEsT0FBTyx5QkFBeUIsTUFBRSxFQUFBO0FBQUEsa0JBQ25ELFNBQVMsT0FBQSxRQUFRLHlCQUF5QixNQUFFO0FBQUEsZ0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUE7QUFBQTtjQUtqREEsWUFlYyxPQUFBLGFBQUEsR0FBQTtBQUFBLGdCQWRaLE1BQUs7QUFBQSxnQkFDSixNQUFNLE9BQUEsT0FBTyx5QkFBeUIsTUFBRTtBQUFBLGdCQUN4QyxTQUFLQyxjQUFPLE9BQUEsT0FBSyxDQUFBLE1BQUEsQ0FBQTtBQUFBLGNBQUEsR0FBQTtBQUFBLGlDQUNsQixNQVVRO0FBQUEsa0JBUEEsOEJBSFJFLFlBVVEsTUFBQTtBQUFBLG9CQUFBLEtBQUE7QUFBQSxvQkFUTixNQUFBO0FBQUEsb0JBQ0EsT0FBQTtBQUFBLG9CQUVBLE1BQUs7QUFBQSxvQkFDTCxPQUFNO0FBQUEsb0JBQ04sT0FBTTtBQUFBLG9CQUNMLFNBQUssT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFFLE9BQUEsVUFBVSxPQUFBLE9BQU8seUJBQXlCLE1BQUUsRUFBQTtBQUFBLG9CQUNwRCxNQUFLO0FBQUEsb0JBQ0wsV0FBQTtBQUFBLGtCQUFBLENBQUEsS0FBQWlCLG1CQUFBLElBQUEsSUFBQTtBQUFBOzs7Ozs7Ozs7TUFPUlosZ0JBT00sT0FQTixZQU9NO0FBQUEsU0FBQU4sVUFBQSxJQUFBLEdBTkpILG1CQUtNWSxVQUFBLE1BQUFDLFdBTFcsT0FBQSxPQUFPLFVBQVEsQ0FBcEIsTUFBQzs4QkFBYmIsbUJBS00sT0FBQTtBQUFBLFlBTDZCLEtBQUssRUFBRTtBQUFBLFVBQUEsR0FBQTtBQUFBLFlBQ3hDQyxZQUd1QixPQUFBLHNCQUFBLEdBQUE7QUFBQSxjQUZwQixlQUFlLE9BQUE7QUFBQSxjQUNmLFVBQVUsRUFBRTtBQUFBLFlBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxpQkFBQSxVQUFBLENBQUE7QUFBQTs7O09BTUQsT0FBQSxPQUFPLFNBQVMsdUJBRGxDRyxZQVFXLE9BQUEsVUFBQSxHQUFBO0FBQUEsUUFBQSxLQUFBO0FBQUEsUUFSQSxNQUFJLE1BQVEsT0FBQSxRQUFRO0FBQUEsUUFFckIsT0FBTTtBQUFBLFFBQ04sT0FBTTtBQUFBLFFBQ0wsVUFBUSxPQUFBO0FBQUEsUUFDUixjQUFZLE9BQUE7QUFBQSxRQUNaLGFBQVcsT0FBQTtBQUFBLFFBQ1gsY0FBWSxPQUFBO0FBQUEsTUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBaUIsbUJBQUEsSUFBQSxJQUFBO0FBQUE7SUFJekJwQixZQWlCVyxPQUFBLFVBQUEsR0FBQTtBQUFBLE1BakJELE1BQUs7QUFBQSxNQUNMLE9BQU07QUFBQSxNQUNOLE9BQU07QUFBQSxNQUNMLFVBQVEsT0FBQTtBQUFBLE1BQ1IsY0FBWSxPQUFBO0FBQUEsTUFDWixhQUFXLE9BQUE7QUFBQSxNQUNYLGNBQVksT0FBQTtBQUFBLElBQUEsR0FBQTtBQUFBLHVCQUNyQixNQVNRO0FBQUEsUUFUUkEsWUFTUSxNQUFBO0FBQUEsVUFSTixNQUFBO0FBQUEsVUFDQSxPQUFBO0FBQUEsVUFDQSxNQUFLO0FBQUEsVUFDTCxPQUFNO0FBQUEsVUFDTixNQUFLO0FBQUEsVUFDSixTQUFLLHNDQUFFLE9BQUEseUJBQXdCLE1BQUEsT0FBQTtBQUFBLFFBQUEsR0FBQTtBQUFBLDJCQUVoQyxNQUErQztBQUFBLFlBQS9DQSxZQUErQyxVQUFBLE1BQUE7QUFBQSxjQUFBLFNBQUFTLFFBQXBDLE1BQXdCLENBQUEsR0FBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQTtBQUFBLGdCQUFBTCxnQkFBeEIsNEJBQXdCLEVBQUE7QUFBQSxjQUFBLEVBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0p6QyxVQUFNLFFBQVEsZ0JBQUE7QUFFZCxVQUFNLFNBQVMsa0JBQUE7QUFFZixVQUFNLFFBQVE7QUFLZCxVQUFNLEVBQUUsb0JBQUEsSUFBd0IsWUFBWSxNQUFNO0FBRWxELFVBQU0sV0FBVyxTQUFTLE1BQU07QUFDNUIsWUFBTSxTQUFTLE1BQU0sWUFBWSxNQUFNLFVBQVU7QUFDakQsYUFBTztBQUFBLElBQ1gsQ0FBQztBQUVELFVBQU0scUJBQXFCLE1BQU07QUFDN0IsVUFBSSxvQkFBb0IsT0FBTztBQUUzQixjQUFNLFVBQVUsU0FBUyxjQUFjLGlCQUFpQixvQkFBb0IsS0FBSyxJQUFJO0FBQ3JGLFlBQUksU0FBUztBQUNULGtCQUFRLGVBQUE7QUFBQSxRQUNaO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQzs7Ozs7OztBQTNDTSxNQUFBRSxlQUFBLEVBQUEsT0FBTSxtQ0FBQTs7QUFIRixTQUFBLE9BQUEsWUFBQUosVUFBQSxHQUFYSCxtQkFXTSxPQUFBO0FBQUEsSUFBQSxLQUFBO0FBQUEsSUFWRCxPQUFNO0FBQUEsSUFDTCxlQUFhLE9BQUE7QUFBQSxFQUFBLEdBQUE7QUFBQSxJQUNqQlMsZ0JBT00sT0FQTkYsY0FPTTtBQUFBLE9BQUFKLFVBQUEsSUFBQSxHQU5KSCxtQkFLTVksVUFBQSxNQUFBQyxXQUxXLE9BQUEsU0FBUyxXQUFXLFVBQVEsQ0FBakMsTUFBQzs0QkFBYmIsbUJBS00sT0FBQTtBQUFBLFVBTDBDLEtBQUssRUFBRTtBQUFBLFFBQUEsR0FBQTtBQUFBLFVBQ3JEQyxZQUd1QixPQUFBLHNCQUFBLEdBQUE7QUFBQSxZQUZwQixlQUFlLE9BQUE7QUFBQSxZQUNmLFVBQVUsRUFBRTtBQUFBLFVBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxpQkFBQSxVQUFBLENBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUM4RXJCLFVBQU0sU0FBUyxrQkFBQTtBQUVmLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sUUFBUTtBQUtkLFVBQU0sWUFBWSxTQUFTLE1BQU0sTUFBTSxhQUFhLE1BQU0sV0FBVyxDQUFDO0FBRXRFLFVBQU0sS0FBSyxJQUFJLElBQUk7QUFFbkIsVUFBTSx3QkFBd0IsVUFBVSwwQkFBMEIsRUFBRTtBQUVwRSxVQUFNLGVBQWUsU0FBUztBQUFBLE1BQzFCLEtBQUssTUFBTSxXQUFXLHNCQUFzQixLQUFLO0FBQUEsTUFDakQsS0FBSyxDQUFDLFVBQVU7QUFBRSw4QkFBc0IsUUFBUSxHQUFHLEtBQUs7QUFBQSxNQUFLO0FBQUEsSUFBQSxDQUNoRTtBQUVELGFBQVMsbUJBQW9CO0FBQ3pCLFlBQU0sUUFBQSxFQUFVLE9BQU8sTUFBTSxlQUFlLE1BQU0sV0FBVyxFQUFFLE9BQU8sRUFBRSxZQUFZLEtBQUEsQ0FBTTtBQUFBLElBQzlGO0FBRUEsYUFBUyxrQkFBbUI7QUFDeEIsWUFBTSxRQUFBLEVBQVUsT0FBTyxNQUFNLGVBQWUsTUFBTSxXQUFXLEVBQUUsT0FBTyxFQUFFLFlBQVksTUFBQSxDQUFPO0FBQUEsSUFDL0Y7QUFLQSxhQUFTLGVBQWdCO0FBRXJCLFVBQUksVUFBVSxPQUFPO0FBQ2pCLGNBQU0sV0FBVyxNQUFNLFlBQVksVUFBVSxNQUFNLFNBQVMsRUFBRTtBQUM5RCxZQUFJLFVBQVU7QUFDVixnQkFBTSxVQUFVLFNBQVMsV0FBVztBQUNwQyxjQUFJLFFBQVEsUUFBUTtBQUNoQixrQkFBTSxhQUFhLFFBQVEsUUFBUSxTQUFTLENBQUM7QUFDN0MsZ0JBQUksWUFBWTtBQUNaLG9CQUFNO0FBQUEsZ0JBQVUsT0FBTyxZQUFBO0FBQUEsZ0JBQ1AsV0FBVztBQUFBLGdCQUNYO0FBQUEsY0FBQTtBQUFBLFlBQ3BCO0FBQUEsVUFDSixPQUFPO0FBRUgsa0JBQU07QUFBQSxjQUFVLE9BQU8sWUFBQTtBQUFBLGNBQ1AsU0FBUyxXQUFXO0FBQUEsY0FDcEIsTUFBTSxTQUFTLFdBQVcsRUFBRTtBQUFBLFlBQUE7QUFBQSxVQUNoRDtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsSUFDSjs7Ozs7Ozs7O0FBckdTLE1BQUFNLGVBQUEsRUFBQSxPQUFNLHdCQUFBOztBQW5DSixTQUFBLE9BQUEsYUFBQUosVUFBQSxHQURYSCxtQkFvRU0sT0FBQTtBQUFBLElBQUEsS0FBQTtBQUFBLElBcEVELE9BQU07QUFBQSxJQUVMLGtCQUFnQixPQUFBO0FBQUEsRUFBQSxHQUFBO0FBQUEsSUFFcEJDLFlBK0NZLFVBQUEsRUFBQSxPQUFBLHNDQS9DSyxHQUFBO0FBQUEsTUFBcUMsU0FBQVMsUUFFcEQsTUFVYztBQUFBLFFBVmRULFlBVWMsT0FBQSxhQUFBLEdBQUE7QUFBQSxVQVRaLE1BQUs7QUFBQSxVQUNMLE1BQUs7QUFBQSxRQUFBLEdBQUE7QUFBQSwyQkFDTCxNQU1RO0FBQUEsWUFOUkEsWUFNUSxNQUFBO0FBQUEsY0FMTixNQUFLO0FBQUEsY0FDSixTQUFPLE9BQUE7QUFBQSxZQUFBLEdBQUE7QUFBQSwrQkFBYyxNQUV0QjtBQUFBLGdCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBSSxnQkFGc0IsZ0JBRXRCLEVBQUE7QUFBQSxnQkFBQUosWUFDeUYsVUFBQTtBQUFBLGtCQUQ5RSxRQUFPO0FBQUEsa0JBQ04sUUFBUSxDQUFBLEdBQUEsRUFBQTtBQUFBLGdCQUFBLEdBQUE7QUFBQSxtQ0FBUSxNQUFpRCxDQUFBLEdBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUE7QUFBQSxvQkFBQUksZ0JBQWpELHFEQUFpRCxFQUFBO0FBQUEsa0JBQUEsRUFBQSxDQUFBO0FBQUE7Ozs7Ozs7O1FBSWpGSixZQU9RLE1BQUE7QUFBQSxVQU5OLE1BQUs7QUFBQSxVQUNMLE1BQUs7QUFBQSxVQUNKLFNBQU8sT0FBQTtBQUFBLFFBQUEsR0FBQTtBQUFBLDJCQUNSLE1BRVk7QUFBQSxZQUZaQSxZQUVZLFVBQUE7QUFBQSxjQUZELFFBQU87QUFBQSxjQUFjLFFBQVEsQ0FBQSxHQUFBLEVBQUE7QUFBQSxZQUFBLEdBQUE7QUFBQSwrQkFBUSxNQUVoRCxDQUFBLEdBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUE7QUFBQSxnQkFBQUksZ0JBRmdELHdCQUVoRCxFQUFBO0FBQUEsY0FBQSxFQUFBLENBQUE7QUFBQTs7Ozs7UUFHRkosWUFPUSxNQUFBO0FBQUEsVUFOTixNQUFLO0FBQUEsVUFDTCxNQUFLO0FBQUEsVUFDSixTQUFPLE9BQUE7QUFBQSxRQUFBLEdBQUE7QUFBQSwyQkFDUixNQUVZO0FBQUEsWUFGWkEsWUFFWSxVQUFBO0FBQUEsY0FGRCxRQUFPO0FBQUEsY0FBYyxRQUFRLENBQUEsR0FBQSxFQUFBO0FBQUEsWUFBQSxHQUFBO0FBQUEsK0JBQVEsTUFFaEQsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBO0FBQUEsZ0JBQUFJLGdCQUZnRCx1QkFFaEQsRUFBQTtBQUFBLGNBQUEsRUFBQSxDQUFBO0FBQUE7Ozs7O1FBR0ZJLGdCQVdNLE9BWE5GLGNBV007QUFBQSxVQVZKTixZQUVVLFFBQUEsRUFBQSxPQUFBLE9BRkQsR0FBQTtBQUFBLFlBQVksU0FBQVMsUUFBQyxNQUNOO0FBQUEsY0FBQUwsZ0JBRE0sb0JBQ05DLGdCQUFHLE9BQUEsWUFBWSxHQUFBLENBQUE7QUFBQSxZQUFBLENBQUE7QUFBQTs7VUFHL0JMLFlBS1csU0FBQTtBQUFBLFlBQUEsWUFMUSxPQUFBO0FBQUEsWUFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxlQUFZO0FBQUEsWUFDcEIsS0FBSztBQUFBLFlBQ0wsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFVBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxZQUFBLENBQUE7QUFBQTtRQUtuQkEsWUFBVyxNQUFBO0FBQUEsTUFBQSxDQUFBO0FBQUE7O0lBSWJBLFlBY2MsT0FBQSxhQUFBLEdBQUE7QUFBQSxNQWJaLFVBQVM7QUFBQSxNQUNULE9BQUEsRUFBQSxhQUFBLElBQUE7QUFBQSxNQUNDLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULGVBQWUsY0FBTyxTQUFTO0FBQUEsSUFBQSxHQUFBO0FBQUEsdUJBRWhDLE1BTXlCO0FBQUEsUUFIakIsT0FBQSxVQUFVLHlCQUhsQkcsWUFNeUIsT0FBQSx3QkFBQSxHQUFBO0FBQUEsVUFBQSxLQUFBO0FBQUEsVUFMdkIsS0FBSTtBQUFBLFVBQ0osT0FBTTtBQUFBLFVBRUwsZUFBZSxPQUFBO0FBQUEsVUFDZixZQUFZLGlCQUFVLFNBQVM7QUFBQSxRQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsaUJBQUEsWUFBQSxDQUFBLEtBQUFpQixtQkFBQSxJQUFBLElBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEN0QyxVQUFNLFFBQVEsZ0JBQUE7QUFFZCxVQUFNLE9BQU87QUFFYixVQUFNLFFBQVE7QUFLZCxVQUFNLE9BQU8sSUFBSSxNQUFNLFFBQVEsSUFBSTtBQUVuQyxVQUFNLGNBQWMsU0FBUztBQUFBLE1BQ3pCLE1BQU87QUFDSCxlQUFPLE1BQU0sVUFBVSxNQUFNLFFBQVEsT0FBTztBQUFBLE1BQ2hEO0FBQUEsTUFDQSxJQUFLLE9BQWU7QUFDaEIsY0FBTSxjQUFjLE1BQU0sU0FBUyxFQUFFLE1BQU0sT0FBTztBQUFBLE1BQ3REO0FBQUEsSUFBQSxDQUNIO0FBRUQsYUFBUyxXQUFZO0FBR2pCLFVBQUksTUFBTSxTQUFTO0FBQ2YsY0FBTSxjQUFjLE1BQU0sU0FBUyxFQUFFLE1BQU0sS0FBSyxPQUFPO0FBQUEsTUFDM0Q7QUFDQSxXQUFLLFVBQVUsS0FBSyxLQUFLO0FBQUEsSUFDN0I7QUFFQSxhQUFTLFNBQVU7QUFDZixXQUFLLFVBQVUsTUFBTSxRQUFRLElBQUk7QUFBQSxJQUNyQzs7Ozs7OztzQkF4REFyQixtQkFnQk0sT0FBQSxNQUFBO0FBQUEsSUFBQUssZ0JBQUFDLGdCQWZELE9BQUEsUUFBUSxJQUFJLElBQUcsS0FDbEIsQ0FBQTtBQUFBLElBQUFMLFlBYWUsWUFBQTtBQUFBLE1BQUEsWUFiUSxPQUFBO0FBQUEsTUFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxjQUFXO0FBQUEsTUFDcEIsYUFBQTtBQUFBLE1BQ0EsU0FBQTtBQUFBLElBQUEsR0FBQTtBQUFBLE1BRVosU0FBQVMsUUFBQSxDQVFjLFVBVFc7QUFBQSxRQUN6QlQsWUFRYyxRQUFBO0FBQUEsVUFQWCxPQUFPLE9BQUE7QUFBQSxVQUNSLE1BQUs7QUFBQSxVQUFBLFlBQ0ksTUFBTTtBQUFBLFVBQUEsdUJBQUEsQ0FBQSxXQUFOLE1BQU0sUUFBSztBQUFBLFVBQ25CLFNBQUs7QUFBQSxZQUFBcUIsU0FBQXBCLGNBQWEsT0FBQSxVQUFRLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLENBQUE7QUFBQSxZQUFBb0IsU0FDZixPQUFBLFFBQU0sQ0FBQSxLQUFBLENBQUE7QUFBQSxVQUFBO0FBQUEsVUFDbEIsT0FBQTtBQUFBLFVBQ0EsVUFBQTtBQUFBLFVBQ0EsV0FBQTtBQUFBLFFBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLGNBQUEsdUJBQUEsU0FBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0VOLFVBQU0sU0FBUyxrQkFBQTtBQUNmLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sUUFBUTtBQVFkLFVBQU0sUUFBUSxTQUFTLE1BQU0sTUFBTSwyQkFBMkIsTUFBTSxPQUFPLENBQUM7QUFFNUUsYUFBUyxjQUFlO0FBRXBCLGNBQVEsSUFBSSxpQkFBaUI7QUFBQSxJQUNqQztBQUVBLGFBQVMsUUFBUztBQUNiLGFBQWUsMEJBQTBCLE1BQU07QUFDaEQsY0FBUSxJQUFJLDJCQUEyQixNQUFNLEtBQUs7QUFBQSxJQUN0RDtBQUdBLGFBQVMsaUNBQWtDLGNBQXNCLE9BQWU7QUFDNUUsWUFBTSxjQUFjLE1BQU0sZ0JBQWdCLE1BQU0sY0FBYyxPQUFPLFlBQVksSUFBSSxFQUFFLGlCQUFpQixHQUFBO0FBRXhHLFlBQU07QUFBQSxRQUE4QixxQkFBcUIsWUFBWTtBQUFBLFFBQ2pDLE1BQU07QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0EsYUFBYSxtQkFBbUI7QUFBQSxNQUFBO0FBQ3BFLGtCQUFBO0FBQUEsSUFDSjtBQUVBLGFBQVMsa0NBQW1DLFlBQW9CLE9BQWU7QUFFM0UsWUFBTSxXQUFXLE1BQU0sOEJBQThCLFVBQVU7QUFDL0QsVUFBSSxVQUFVO0FBQ1YsY0FBTSxjQUFjLE1BQU0sZ0JBQWdCLE1BQU0sY0FBYyxPQUFPLFNBQVMsUUFBUSxJQUFJLEVBQUUsaUJBQWlCLEdBQUE7QUFFN0csY0FBTTtBQUFBLFVBQThCLFNBQVM7QUFBQSxVQUNULE1BQU07QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFVBQ0EsYUFBYSxtQkFBbUI7QUFBQSxRQUFBO0FBQ3BFLG9CQUFBO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFFQSxhQUFTLDBCQUEyQixjQUFzQixPQUFlO0FBQ3JFLFlBQU0sYUFBYSxNQUFNLGNBQWMsWUFBWTtBQUNuRCxVQUFJLGNBQWMsTUFBTSxPQUFPO0FBQzNCLGNBQU07QUFBQSxVQUE4QixPQUFPLFNBQUE7QUFBQSxVQUNQLE1BQU07QUFBQSxVQUNOO0FBQUEsVUFDQSxXQUFXLE9BQUE7QUFBQSxRQUFPO0FBQ3RELG9CQUFBO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFFQSxhQUFTLDBCQUEyQixjQUFzQixPQUFlO0FBQ3JFLFlBQU0sYUFBYSxNQUFNLGNBQWMsWUFBWTtBQUNuRCxVQUFJLGNBQWMsTUFBTSxPQUFPO0FBQzNCLGNBQU07QUFBQSxVQUE4QixPQUFPLFNBQUE7QUFBQSxVQUNQLE1BQU07QUFBQSxVQUNOO0FBQUEsVUFDQSxXQUFXLE9BQUE7QUFBQSxRQUFPO0FBQ3RELG9CQUFBO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFFQSxhQUFTLHlCQUEwQixlQUF1QixPQUFlO0FBQ3JFLFVBQUk7QUFDQSxjQUFNLFlBQVksS0FBSyxNQUFNLGFBQWE7QUFDMUMsWUFBSSxNQUFNLE9BQU87QUFDYixnQkFBTTtBQUFBLFlBQThCLE9BQU8sU0FBQTtBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ047QUFBQSxZQUNBO0FBQUEsVUFBQTtBQUNwQyxzQkFBQTtBQUFBLFFBQ0o7QUFBQSxNQUNKLFNBQVMsR0FBRztBQUNSLGdCQUFRLElBQUksZ0JBQWdCLGFBQWEsS0FBSyxDQUFDLEVBQUU7QUFBQSxNQUNyRDtBQUFBLElBQ0o7QUFFQSxhQUFTLGlDQUFrQyxPQUFlO0FBQ3RELFVBQUksTUFBTSxPQUFPO0FBQ2IsY0FBTTtBQUFBLFVBQThCLE9BQU8sU0FBQTtBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ047QUFBQSxVQUNBO0FBQUEsUUFBQTtBQUNwQyxvQkFBQTtBQUFBLE1BQ0o7QUFBQSxJQUNKOzs7Ozs7Ozs7QUE3SlcsTUFBQWYsZUFBQSxFQUFBLE9BQU0sZ0NBQUE7QUF5QlIsTUFBQUMsZUFBQSxFQUFBLE9BQU0scUNBQUE7O0FBdkNKLFNBQUEsT0FBQSxTQUFBTCxVQUFBLEdBRlhILG1CQTZETSxPQUFBO0FBQUEsSUFBQSxLQUFBO0FBQUEsSUE3REQsT0FBS2dCLGVBQUEsQ0FBQyxxQ0FDRSxPQUFBLE1BQU0sQ0FBQTtBQUFBLElBRWIsZ0NBQThCLE9BQUE7QUFBQSxFQUFBLEdBQUE7QUFBQSxJQUNsQ2YsWUE2QlcsT0FBQSxVQUFBLEdBQUE7QUFBQSxNQTdCQSxNQUFJLFdBQWEsT0FBQSxPQUFPO0FBQUEsTUFDekIsT0FBTTtBQUFBLE1BQ04sT0FBTTtBQUFBLE1BQ0wsOEJBQTRCLE9BQUE7QUFBQSxNQUM1Qiw2QkFBMkIsT0FBQTtBQUFBLE1BQzNCLGNBQVksT0FBQTtBQUFBLE1BQ1osYUFBVyxPQUFBO0FBQUEsTUFDWCxjQUFZLE9BQUE7QUFBQSxJQUFBLEdBQUE7QUFBQSx1QkFDckIsTUFvQmM7QUFBQSxRQXBCZEEsWUFvQmMsT0FBQSxhQUFBLEdBQUE7QUFBQSxVQW5CWixNQUFLO0FBQUEsVUFDTCxNQUFLO0FBQUEsVUFDSixTQUFLQyxjQUFPLE9BQUEsT0FBSyxDQUFBLE1BQUEsQ0FBQTtBQUFBLFFBQUEsR0FBQTtBQUFBLDJCQUNsQixNQWVNO0FBQUEsWUFmTk8sZ0JBZU0sT0FmTkYsY0FlTTtBQUFBLGNBZEpOLFlBS29DLE9BQUE7QUFBQSxnQkFKbEMsS0FBSTtBQUFBLGdCQUNKLE9BQU07QUFBQSxnQkFDTixNQUFLO0FBQUEsZ0JBQ0osU0FBS0MsY0FBTyxPQUFBLE9BQUssQ0FBQSxNQUFBLENBQUE7QUFBQSxnQkFDbEIsTUFBSztBQUFBLGNBQUEsR0FBQSxNQUFBLEdBQUE7QUFBQSxjQUNQRCxZQU9RLE1BQUE7QUFBQSxnQkFOTixPQUFBO0FBQUEsZ0JBQ0EsTUFBQTtBQUFBLGdCQUNBLFdBQUE7QUFBQSxnQkFDQyxTQUFLLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBRSxPQUFBLGlDQUFnQyxXQUFZLE9BQUEsT0FBTyxFQUFBO0FBQUEsZ0JBQzNELE9BQU07QUFBQSxjQUFBLEdBQUE7QUFBQSxpQ0FBa0QsTUFFMUQsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBO0FBQUEsa0JBQUFJLGdCQUYwRCxrQkFFMUQsRUFBQTtBQUFBLGdCQUFBLEVBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7SUFJTkosWUEwQmMsT0FBQSxhQUFBLEdBQUE7QUFBQSxNQXpCWixPQUFBLEVBQUEsYUFBQSxJQUFBO0FBQUEsTUFDQSxVQUFTO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxlQUFlLGNBQU8sU0FBUztBQUFBLElBQUEsR0FBQTtBQUFBLHVCQUVoQyxNQWtCTTtBQUFBLFFBbEJOUSxnQkFrQk0sT0FsQk5ELGNBa0JNO0FBQUEsV0FBQUwsVUFBQSxJQUFBLEdBakJKSCxtQkFPdUJZLFVBQUEsTUFBQUMsV0FOVCxPQUFBLE1BQU0sWUFBVSxDQUFyQixNQUFDO2dDQURWVCxZQU91QixPQUFBLDBDQUFBLEdBQUE7QUFBQSxjQUxwQixLQUFLLEVBQUU7QUFBQSxjQUNQLFdBQVcsT0FBQTtBQUFBLGNBQ1gsUUFBUSxPQUFBO0FBQUEsY0FDUixlQUFlLE9BQUE7QUFBQSxjQUNmLG9CQUFrQixDQUFHLE9BQUEsTUFBTTtBQUFBLGNBQzNCLFlBQVksRUFBRTtBQUFBLFlBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxhQUFBLFVBQUEsaUJBQUEsc0JBQUEsWUFBQSxDQUFBO0FBQUE7VUFDakJILFlBUVcsT0FBQSxVQUFBLEdBQUE7QUFBQSxZQVJBLE1BQUksV0FBYSxPQUFBLE9BQU87QUFBQSxZQUN6QixPQUFNO0FBQUEsWUFDTixPQUFNO0FBQUEsWUFDTCw4QkFBNEIsT0FBQTtBQUFBLFlBQzVCLDZCQUEyQixPQUFBO0FBQUEsWUFDM0IsY0FBWSxPQUFBO0FBQUEsWUFDWixhQUFXLE9BQUE7QUFBQSxZQUNYLGNBQVksT0FBQTtBQUFBLFVBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxNQUFBLENBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDa0I3QixVQUFNLFFBQVEsZ0JBQUE7QUFFZCxVQUFNLFNBQVMsa0JBQUE7QUFFZixVQUFNLFFBQVE7QUFLZCxVQUFNLGdDQUFnQyxTQUFTLE1BQU07QUFDakQsYUFBTyxNQUFNLDJCQUEyQixNQUFNLE9BQU87QUFBQSxJQUN6RCxDQUFDO0FBRUQsVUFBTSx3QkFBd0IsU0FBUyxNQUFNO0FBQ3pDLGFBQU8sQ0FBQyxDQUFDLDhCQUE4QixTQUFTLENBQUMsQ0FBQyw4QkFBOEIsTUFBTTtBQUFBLElBQzFGLENBQUM7QUFFRCxVQUFNLHVCQUF1QixTQUFTLE1BQU07QUFDeEMsYUFBTyxzQkFBc0IsU0FBUyw4QkFBOEIsT0FBTyxXQUFXLFVBQVU7QUFBQSxJQUNwRyxDQUFDO0FBRUQsVUFBTSxlQUFlLElBQUksWUFBWTtBQUVyQyxVQUFNLG9DQUFvQyxTQUFTO0FBQUEsTUFDL0MsTUFBTztBQUNILFlBQUksOEJBQThCLE9BQU8sUUFBUTtBQUM3QyxpQkFBTyw4QkFBOEIsTUFBTSxPQUFPO0FBQUEsUUFDdEQsT0FBTztBQUNILGlCQUFPLDhCQUE4QixPQUFPLFFBQVE7QUFBQSxRQUN4RDtBQUFBLE1BQ0o7QUFBQSxNQUNBLElBQUssT0FBZTtBQUNoQixZQUFJLDhCQUE4QixPQUFPLFFBQVE7QUFDN0MsZ0JBQU0sYUFBYSw4QkFBOEIsTUFBTSxPQUFPLElBQUksRUFBRSxNQUFLLE9BQU87QUFBQSxRQUNwRixXQUFXLDhCQUE4QixPQUFPO0FBQzVDLGdCQUFNLGNBQWMsOEJBQThCLE9BQU8sRUFBRSxNQUFLLE9BQU87QUFBQSxRQUMzRTtBQUFBLE1BQ0o7QUFBQSxJQUFBLENBQ0g7QUFFRCxhQUFTLG9CQUFxQixPQUF1QztBQUNqRSxVQUFJLE9BQU87QUFDUCxjQUFNLCtCQUFnQyxPQUFPLE1BQU0sYUFBYTtBQUFBLE1BQ3BFO0FBQUEsSUFDSjtBQUVBLGFBQVMsbUJBQW9CO0FBQ3pCLGFBQU8sbUNBQW1DLEVBQUU7QUFBQSxJQUNoRDs7Ozs7Ozs7RUEzSEssT0FBTTs7Ozs7QUFxREosTUFBQSxhQUFBLEVBQUEsT0FBTSxxQ0FBQTs7U0FwREYsT0FBQSxpQ0FBQUUsVUFBQSxHQURYSCxtQkE0RE0sT0E1RE5lLGNBNERNO0FBQUEsSUExREpkLFlBa0RZLFVBQUEsRUFBQSxPQUFBLGNBbERLLEdBQUE7QUFBQSxNQUFhLFNBQUFTLFFBQzVCLE1BVU07QUFBQSxRQVZORCxnQkFVTSxPQUFBLE1BQUE7QUFBQSxVQVRKUixZQVFRLE1BQUE7QUFBQSxZQVBOLE1BQUs7QUFBQSxZQUNMLE1BQUE7QUFBQSxZQUNBLE9BQUE7QUFBQSxZQUNBLE9BQUE7QUFBQSxZQUNBLE1BQUs7QUFBQSxZQUNMLE9BQU07QUFBQSxZQUNMLFNBQU8sT0FBQTtBQUFBLFVBQUEsQ0FBQTtBQUFBO1FBSVpBLFlBb0NrQixlQUFBLEVBQUEsT0FBQSxNQUFBO1VBcENVLFNBQUFTLFFBQzFCLE1BQXdCO0FBQUEsWUFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBeEJELGdCQUF3QixhQUFuQixZQUFhLEVBQUE7QUFBQSxZQUNQLE9BQUEsOEJBQThCLHVCQUF6Q1QsbUJBYU0sT0FBQU8sY0FBQTtBQUFBLGNBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUFGLGdCQWIyQywrQkFFL0MsRUFBQTtBQUFBLGNBQUFKLFlBSVMsT0FBQTtBQUFBLGdCQUhOLFNBQUssT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFFLE9BQUEsT0FBTyx1QkFBdUIsT0FBQSw4QkFBOEIsT0FBTyxFQUFFO0FBQUEsZ0JBQzdFLE1BQUs7QUFBQSxnQkFDTCxNQUFLO0FBQUEsY0FBQSxDQUFBO0FBQUEsY0FFUFEsZ0JBS1MsVUFBQSxNQUFBO0FBQUEsZ0JBQUFKLGdCQUFBQyxnQkFMRSxPQUFBLDhCQUE4QixPQUFPLElBQUksSUFBRyxLQUNyRCxDQUFBO0FBQUEsZ0JBQUFMLFlBR2UsWUFBQTtBQUFBLGtCQUFBLFlBSFEsT0FBQTtBQUFBLGtCQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLG9DQUFpQztBQUFBLGtCQUFFLGFBQUE7QUFBQSxnQkFBQSxHQUFBO0FBQUEsa0JBQ3hELFNBQUFTLFFBQUEsQ0FDa0UsVUFGYTtBQUFBLG9CQUMvRVQsWUFDa0UsT0FBQSxpQkFBQSxHQUFBO0FBQUEsc0JBRGhELFVBQVEsTUFBTTtBQUFBLHNCQUNkLFFBQVEsT0FBQSw4QkFBOEI7QUFBQSxvQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsUUFBQSxDQUFBO0FBQUE7Ozs7Z0NBSTlERCxtQkFPTSxPQUFBUSxjQUFBO0FBQUEsY0FOSkMsZ0JBS1MsVUFBQSxNQUFBO0FBQUEsZ0JBSlBSLFlBR21CLE9BQUEsa0JBQUEsR0FBQTtBQUFBLGtCQUZoQixTQUFTLE9BQUE7QUFBQSxrQkFDVixPQUFNO0FBQUEsZ0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUE7QUFBQTs7WUFJQSxPQUFBLHdCQUFBRSxVQUFBLEdBQVpILG1CQUtPLFFBQUFXLGNBQUE7QUFBQSxjQUpMVixZQUdRLE1BQUE7QUFBQSxnQkFGTCxTQUFLLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBRSxPQUFBLG9CQUFvQixPQUFBLDZCQUE2QjtBQUFBLGNBQUEsR0FBQTtBQUFBLGlDQUFHLE1BRTlELENBQUEsR0FBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQTtBQUFBLGtCQUFBSSxnQkFGOEQsaUNBRTlELEVBQUE7QUFBQSxnQkFBQSxFQUFBLENBQUE7QUFBQTs7O1lBRUZKLFlBS2UsWUFBQTtBQUFBLGNBSmIsTUFBSztBQUFBLGNBQUEsWUFDSSxPQUFBO0FBQUEsY0FBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxlQUFZO0FBQUEsY0FDcEIsU0FBUztBQUFBLGdCQUFBLEVBQUEsTUFBQSxzQkFBQSxPQUFBLGFBQUE7QUFBQSxnQkFBQSxFQUFBLE1BQUEsb0JBQUEsT0FBQSxXQUFBO0FBQUE7Ozs7Ozs7O0lBS2hCUSxnQkFNTSxPQU5OLFlBTU07QUFBQSxNQUxKUixZQUl1QixPQUFBLHVDQUFBLEdBQUE7QUFBQSxRQUhwQixRQUFRLE9BQUE7QUFBQSxRQUNSLFdBQVcsT0FBQTtBQUFBLFFBQ1gsZUFBZSxPQUFBO0FBQUEsUUFDZixTQUFTLE9BQUE7QUFBQSxNQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsVUFBQSxhQUFBLGlCQUFBLFNBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDK0RoQixVQUFNLFFBQVU7QUFJaEIsVUFBTSxPQUFPO0FBRWIsVUFBTSxLQUFLLFVBQUE7QUFFWCxVQUFNLGFBQWdDLElBQUksSUFBSTtBQUM5QyxVQUFNLG9CQUFvQixJQUFJLElBQUk7QUFFbEMsVUFBTSxPQUFPLElBQUksTUFBTSxXQUFXLFFBQVEsRUFBRTtBQUM1QyxVQUFNLGNBQWMsSUFBSSxNQUFNLFdBQVcsbUJBQW1CLEVBQUU7QUFDOUQsVUFBTSxPQUFPLElBQUksTUFBTSxXQUFXLFFBQVEsRUFBRTtBQUM1QyxVQUFNLE9BQU8sSUFBSSxNQUFNLFdBQVcsUUFBUSxFQUFFO0FBQzVDLFVBQU0sT0FBTyxJQUFJLE1BQU0sV0FBVyxRQUFRLEVBQUU7QUFFNUMsVUFBTSxjQUFjLFNBQVMsTUFBTSxLQUFLLFNBQVMsS0FBSyxLQUFLO0FBRTNELGFBQVMsU0FBVSxPQUFjO0FBQzdCLFVBQUksTUFBTSxRQUFRO0FBQ2QsYUFBSyxZQUFZO0FBQUEsVUFDYixNQUFNLEtBQUs7QUFBQSxVQUNYLGlCQUFpQixZQUFZO0FBQUEsVUFDN0IsTUFBTSxLQUFLO0FBQUEsVUFDWCxNQUFNLEtBQUs7QUFBQTtBQUFBLFVBRVgsTUFBTSxLQUFLO0FBQUEsUUFBQSxDQUNHO0FBQUEsTUFDdEI7QUFBQSxJQUNKO0FBRUEsYUFBUyxXQUFZO0FBRWpCLGtCQUFZLFFBQVE7QUFDcEIsV0FBSyxRQUFRO0FBQ2IsV0FBSyxRQUFRO0FBQ2IsV0FBSyxRQUFRO0FBQ2IsV0FBSyxRQUFRO0FBQ2Isd0JBQWtCLFFBQVE7QUFFMUIsV0FBSyxRQUFRO0FBQUEsSUFDakI7QUFFQSxhQUFTLG9CQUFxQixZQUFrQjtBQUM1QyxZQUFNLFNBQVMsSUFBSSxXQUFBO0FBQ25CLGFBQU8sU0FBUyxNQUFNO0FBRWxCLGFBQUssUUFBUSxPQUFPO0FBQUEsTUFDeEI7QUFDQSxhQUFPLFVBQVUsTUFBTTtBQUNuQixnQkFBUSxNQUFNLHVCQUF1QixPQUFPLEtBQUs7QUFDakQsV0FBRyxPQUFPO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixTQUFTLHVCQUF1QixPQUFPLE9BQU8sT0FBTztBQUFBLFFBQUEsQ0FDeEQ7QUFBQSxNQUNMO0FBS0EsYUFBTyxXQUFXLFVBQVU7QUFBQSxJQUNoQzs7Ozs7Ozs7OztBQXZKUyxNQUFBTyxlQUFBLEVBQUEsT0FBTSxNQUFBO0FBa0RGLE1BQUFHLGVBQUEsRUFBQSxPQUFNLHNDQUFBOztzQkFsRm5CUCxZQXFHUyxPQUFBLE1BQUE7QUFBQSxJQUFBLFNBQUFNLFFBcEdQLE1BS007QUFBQSxNQUxLLGlDQUFYVixtQkFLTSxPQUFBZSxjQUFBO0FBQUEsUUFKSmQsWUFFaUIsY0FBQSxFQUFBLE9BQUEsa0NBRkssR0FBQTtBQUFBLFVBQWlDLFNBQUFTLFFBQUMsTUFDOUM7QUFBQSxZQUFBTCxnQkFEOEMsY0FDOUNDLGdCQUFHLE9BQUEsVUFBVSxJQUFJLEdBQUEsQ0FBQTtBQUFBLFVBQUEsQ0FBQTtBQUFBOztRQUUzQixPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQUcsZ0JBQTZDLFdBQTFDLDBDQUFzQyxFQUFBO0FBQUEsTUFBQSxDQUFBLE1BQUFOLFVBQUEsR0FFM0NILG1CQUtNLE9BQUFPLGNBQUE7QUFBQSxRQUpKTixZQUVpQixjQUFBLEVBQUEsT0FBQSxrQ0FGSyxHQUFBO0FBQUEsVUFBaUMsU0FBQVMsUUFBQyxNQUV4RCxDQUFBLEdBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUE7QUFBQSxZQUFBTCxnQkFGd0QsNEJBRXhELEVBQUE7QUFBQSxVQUFBLEVBQUEsQ0FBQTtBQUFBOztRQUNBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBSSxnQkFBaUgsV0FBOUcsOEdBQTBHLEVBQUE7QUFBQSxNQUFBLENBQUE7QUFBQSxNQUcvR1IsWUFzRlMsT0FBQTtBQUFBLFFBckZQLE1BQUs7QUFBQSxRQUNKLFVBQVEsT0FBQTtBQUFBLFFBQ1QsT0FBTTtBQUFBLE1BQUEsR0FBQTtBQUFBLHlCQUdOLE1BVU07QUFBQSxVQVZOUSxnQkFVTSxPQUFBLE1BQUE7QUFBQSxZQVRKUixZQUd3QixNQUFBO0FBQUEsY0FIaEIsT0FBSyxDQUFHLE9BQUEsWUFBUyxXQUFBO0FBQUEsY0FDbEIsTUFBSztBQUFBLGNBQ0osVUFBUSxDQUFHLE9BQUE7QUFBQSxjQUNaLE9BQU07QUFBQSxZQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxVQUFBLENBQUE7QUFBQSxZQUNiQSxZQUkyQixNQUFBO0FBQUEsY0FKcEIsT0FBTTtBQUFBLGNBQ04sT0FBTTtBQUFBLGNBQ04sTUFBQTtBQUFBLGNBQ0EsT0FBTTtBQUFBLGNBQ0wsU0FBTyxPQUFBO0FBQUEsWUFBQSxDQUFBO0FBQUE7VUFHakJRLGdCQTRCTSxPQTVCTkQsY0E0Qk07QUFBQSxZQTFCSlAsWUFPSSxRQUFBO0FBQUEsY0FORixRQUFBO0FBQUEsY0FBQSxZQUNTLE9BQUE7QUFBQSxjQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLE9BQUk7QUFBQSxjQUNiLE9BQU07QUFBQSxjQUNOLGNBQUE7QUFBQSxjQUNBLE9BQU07QUFBQSxjQUNMLE9BQUssQ0FBQSxDQUFLLFFBQWdCLE9BQU8sSUFBSSxTQUFNLEtBQUEsb0JBQUE7QUFBQSxZQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsY0FBQSxPQUFBLENBQUE7QUFBQSxZQUc5Q0EsWUFNSSxRQUFBO0FBQUEsY0FMRixRQUFBO0FBQUEsY0FBQSxZQUNTLE9BQUE7QUFBQSxjQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLGNBQVc7QUFBQSxjQUNwQixPQUFNO0FBQUEsY0FDTixjQUFBO0FBQUEsY0FDQSxPQUFNO0FBQUEsWUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFlBR1JBLFlBT0ksUUFBQTtBQUFBLGNBTkYsUUFBQTtBQUFBLGNBQ0EsTUFBSztBQUFBLGNBQUEsWUFDSSxPQUFBO0FBQUEsY0FBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxPQUFJO0FBQUEsY0FDYixPQUFNO0FBQUEsY0FDTixjQUFBO0FBQUEsY0FDQSxPQUFNO0FBQUEsWUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBO1VBS1ZBLFlBTUksUUFBQTtBQUFBLFlBTEYsUUFBQTtBQUFBLFlBQ0EsVUFBQTtBQUFBLFlBQ0EsTUFBSztBQUFBLFlBQUEsWUFDSSxPQUFBO0FBQUEsWUFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxPQUFJO0FBQUEsWUFDYixPQUFNO0FBQUEsVUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFVBSUMsQ0FBQSxPQUFBLGdCQUFBRSxVQUFBLEdBRFRDLFlBNkJVLFFBQUE7QUFBQSxZQUFBLEtBQUE7QUFBQSxZQTNCUixRQUFBO0FBQUEsWUFDQSxjQUFBO0FBQUEsWUFDQSxVQUFBO0FBQUEsWUFDQyxlQUFhLEVBQUEsV0FBQSxPQUFBLFdBQUEsT0FBQTtBQUFBLFlBQ2QsTUFBSztBQUFBLFlBQ0wsTUFBSztBQUFBLFlBQUEsWUFDSSxPQUFBO0FBQUEsWUFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxPQUFJO0FBQUEsWUFDYixPQUFNO0FBQUEsVUFBQSxHQUFBO0FBQUEsWUFFVyxPQUFLTSxRQUNwQixNQWVNO0FBQUEsY0FmTkQsZ0JBZU0sT0FmTkUsY0FlTTtBQUFBLGdCQUFBLE9BQUEsRUFBQSxNQUFBLE9BQUEsRUFBQSxJQUFBTixnQkFmMkMsa0NBRS9DLEVBQUE7QUFBQSxnQkFBQUosWUFZUyxPQUFBLE9BQUEsR0FBQTtBQUFBLGtCQVpELE9BQU07QUFBQSxrQkFBQSxZQUNHLE9BQUE7QUFBQSxrQkFBQSx1QkFBQTtBQUFBLDBEQUFBLE9BQUEsb0JBQWlCO0FBQUEsb0JBT0wsT0FBQTtBQUFBLGtCQUFBO0FBQUEsa0JBTnJCLEtBQUk7QUFBQSxrQkFDSixVQUFBO0FBQUEsa0JBQ0EscUJBQUE7QUFBQSxrQkFDQSxRQUFBO0FBQUEsa0JBQ0EsT0FBQTtBQUFBLGtCQUNBLGdCQUFBO0FBQUEsZ0JBQUEsR0FBQTtBQUFBLGtCQUVXLFNBQU9TLFFBQ3RCLE1BQStEO0FBQUEsb0JBQS9EVCxZQUErRCxPQUFBO0FBQUEsc0JBQXZELE1BQUs7QUFBQSxzQkFBNkIsU0FBSyxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQUMsY0FBTixNQUFBO0FBQUEsc0JBQUEsR0FBbUIsQ0FBQSxRQUFBLFNBQUEsQ0FBQTtBQUFBLG9CQUFBLENBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2dEMUUsVUFBTSxRQUFRO0FBSWQsVUFBTSxRQUFRLGdCQUFBO0FBRWQsVUFBTSxTQUFTLGtCQUFBO0FBRWYsVUFBTSxxQkFBcUIsSUFBSSxLQUFLO0FBRXBDLFVBQU0sb0JBQW9CLElBQUksS0FBSztBQUVuQyxVQUFNLG9CQUFvQixJQUFrQixFQUFFO0FBQzlDLFVBQU0sb0JBQW9CLElBQWtCLEVBQUU7QUFDOUMsVUFBTSxtQkFBbUIsSUFBeUIsSUFBSTtBQUl0RCxVQUFNLGlCQUFpQixJQUFJLEVBQUU7QUFFN0IsVUFBTSxFQUFFLHdCQUFBLElBQTRCLFlBQVksTUFBTTtBQUV0RCxVQUFNLFlBQVksU0FBUyxNQUFNLE1BQU0sYUFBYSxNQUFNLFdBQVcsQ0FBQztBQUl0RSxhQUFTLGlCQUFrQixNQUFxQjtBQUM1Qyx3QkFBa0IsUUFBUTtBQUMxQixVQUFJLFVBQVUsT0FBTztBQUNqQixjQUFNLGNBQWMsVUFBVSxPQUFPO0FBQUEsVUFDakMsTUFBTSxLQUFLO0FBQUEsVUFDWCxpQkFBaUIsS0FBSztBQUFBLFVBQ3RCLE1BQU0sS0FBSztBQUFBLFVBQ1gsTUFBTSxLQUFLO0FBQUEsUUFBQSxDQUNkO0FBQUEsTUFDTDtBQUFBLElBQ0o7QUFFQSxVQUFNLG1CQUFtQixDQUFDLE1BQWtCO0FBQ3hDLFlBQU0sVUFBa0M7QUFBQSxRQUNwQyxXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsTUFBQTtBQUVmLGFBQU8sV0FBVyxRQUFRLEVBQUUsS0FBSyxLQUFLLEdBQUc7QUFBQSxJQUM3QztBQUVBLFVBQU0sY0FBYyxTQUFTLE1BQU07QUFDL0IsWUFBTSxjQUFjLE1BQU07QUFDMUIsWUFBTSx1QkFBeUMsTUFBTSx3QkFBd0IsV0FBVyxFQUFFLElBQUksQ0FBQSxNQUFLO0FBQy9GLGVBQU87QUFBQSxVQUNILGFBQWEsRUFBRTtBQUFBLFVBQ2YsSUFBSSxFQUFFO0FBQUEsVUFDTixPQUFPLEVBQUU7QUFBQSxVQUNULFFBQVEsRUFBRSxXQUFXLEVBQUU7QUFBQSxVQUN2QixPQUFPLEVBQUU7QUFBQSxVQUNULE9BQU8saUJBQWlCLENBQUM7QUFBQSxRQUFBO0FBQUEsTUFFakMsQ0FBQztBQUNELFlBQU0sdUJBQXlDLE1BQU0sMEJBQTBCLFdBQVcsRUFBRSxJQUFJLENBQUEsTUFBSztBQUNqRyxlQUFPO0FBQUEsVUFDSCxhQUFhLEVBQUU7QUFBQSxVQUNmLElBQUksRUFBRTtBQUFBLFVBQ04sT0FBTyxFQUFFO0FBQUEsVUFDVCxRQUFRLEVBQUUsV0FBVyxFQUFFO0FBQUEsVUFDdkIsT0FBTztBQUFBLFVBQ1AsT0FBTztBQUFBLFFBQUE7QUFBQSxNQUVmLENBQUM7QUFDRCxhQUFPLENBQUUsR0FBRyxzQkFBc0IsR0FBRyxvQkFBcUI7QUFBQSxJQUM5RCxDQUFDO0FBRUQsVUFBTSxxQkFBcUIsU0FBUyxNQUFNO0FBQ3RDLFVBQUksaUJBQWlCLE9BQU87QUFDeEIsY0FBTSxRQUFRLFVBQVUsT0FBTyxRQUFRLElBQUk7QUFBQSxVQUFNLGlCQUFpQixNQUFNO0FBQUEsVUFDdkIsaUJBQWlCLE1BQU07QUFBQSxRQUFBO0FBQ3hFLGVBQU8sVUFBVSxJQUFJO0FBQUEsTUFDekIsT0FBTztBQUNILGVBQU87QUFBQSxNQUNYO0FBQUEsSUFDSixDQUFDO0FBRUQsYUFBUyxlQUFnQixNQUFXO0FBQ2hDLFlBQU0sVUFBVSxLQUFLLFlBQVksSUFBSSxDQUFDLE1BQVcsRUFBRSxLQUFLO0FBQ3hELFlBQU0sa0JBQWtCLFFBQVEsT0FBTyxDQUFDLE1BQWMsTUFBTSxZQUFZLEVBQUU7QUFDMUUsVUFBSSxtQkFBbUIsR0FBRztBQUV0QixnQkFBUSxLQUFLLGFBQWE7QUFDMUIsZ0JBQVEsS0FBSyxjQUFjLGVBQWUsRUFBRTtBQUFBLE1BQ2hEO0FBQ0EsYUFBTyxDQUFFLEdBQUcsSUFBSSxJQUFJLE9BQU8sQ0FBRSxFQUFFLEtBQUssR0FBRztBQUFBLElBQzNDO0FBRUEsYUFBUyxpQkFBa0I7QUFDdkIsd0JBQWtCLFFBQVEsQ0FBQyxrQkFBa0I7QUFDN0MsVUFBSSxrQkFBa0IsT0FBTztBQUV6QixjQUFNLFlBQVksU0FBUyxjQUFjLDBCQUEwQjtBQUNuRSxZQUFJLFdBQVc7QUFDWCxvQkFBVSxTQUFTLEdBQUcsQ0FBQztBQUFBLFFBQzNCO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFFQSxVQUFNLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BV2YsV0FBVyxDQUFDLFFBQWVzQyxpQkFBa0M7QUFDekQsMEJBQWtCLFFBQVNBLGFBQVksT0FBTyxDQUFBLE1BQUssRUFBRSxVQUFVLFlBQVksRUFBRSxJQUFJLENBQUEsTUFBSyxNQUFNLGNBQWMsRUFBRSxFQUFFLENBQUM7QUFDL0csMEJBQWtCLFFBQVNBLGFBQVksT0FBTyxDQUFBLE1BQUssRUFBRSxVQUFVLFlBQVksRUFBRSxJQUFJLENBQUEsTUFBSyxNQUFNLGNBQWMsRUFBRSxFQUFFLENBQUM7QUFBQSxNQUNuSDtBQUFBO0FBQUEsSUFBQTtBQUlKLFVBQU0sK0JBQStCLFNBQVMsTUFBTTtBQUNoRCxVQUFJLGlCQUFpQixPQUFPO0FBQ3hCLGVBQU8sS0FBSyxVQUFVLGlCQUFpQixLQUFLO0FBQUEsTUFDaEQsT0FBTztBQUNILGVBQU87QUFBQSxNQUNYO0FBQUEsSUFDSixDQUFDO0FBRUQsYUFBUyxjQUFlLE1BQVc7QUFDL0IsVUFBSSxVQUFVLE9BQU87QUFDakIseUJBQWlCLFFBQVE7QUFBQSxVQUNyQixZQUFZLEtBQUs7QUFBQSxVQUNqQixVQUFVLEtBQUs7QUFBQSxVQUNmLGFBQWEsTUFBTTtBQUFBLFVBQ25CLE1BQU0sVUFBVSxNQUFNLFNBQVMsS0FBSyxPQUFPLEtBQUssR0FBRztBQUFBLFFBQUE7QUFHdkQsWUFBSSxlQUFlLE9BQU87QUFDdEIsZ0JBQU0sY0FBYyxpQkFBaUIsT0FBTyxlQUFlLEtBQUs7QUFBQSxRQUNwRTtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBS0EsYUFBUyxZQUFhLE9BQWtCO0FBQ3BDLFVBQUksTUFBTSxjQUFjO0FBQ3BCLGNBQU0sYUFBYSxRQUFRLGtCQUFrQiw2QkFBNkIsS0FBSztBQUFBLE1BQ25GO0FBQUEsSUFDSjtBQUVBLGFBQVMsaUJBQWtCLFlBQW9CO0FBQzNDLFlBQU0saUJBQWlCLFVBQVU7QUFBQSxJQUNyQztBQUVBLFVBQU0seUJBQXlCLE1BQU07QUFDakMsVUFBSSx3QkFBd0IsT0FBTztBQUUvQixpQkFBUyxpQkFBaUIsbUNBQW1DLEVBQUUsUUFBUSxhQUFXLFFBQVEsVUFBVSxPQUFPLGFBQWEsQ0FBQztBQUN6SCxjQUFNLFdBQVcsU0FBUyxpQkFBaUIsMEJBQTBCLHdCQUF3QixLQUFLLElBQUk7QUFDdEcsaUJBQVMsUUFBUSxDQUFBLFlBQVcsUUFBUSxVQUFVLElBQUksYUFBYSxDQUFDO0FBQ2hFLFlBQUksU0FBUyxVQUFVLFNBQVMsQ0FBQyxHQUFHO0FBQ2hDLG1CQUFTLENBQUMsRUFBRSxlQUFlLEVBQUUsT0FBTyxVQUFVLFVBQVUsVUFBVTtBQUFBLFFBQ3RFO0FBQUEsTUFDSixPQUFPO0FBQ0gsaUJBQVMsaUJBQWlCLG1DQUFtQyxFQUFFLFFBQVEsYUFBVyxRQUFRLFVBQVUsT0FBTyxhQUFhLENBQUM7QUFBQSxNQUM3SDtBQUFBLElBQ0osQ0FBQzs7Ozs7Ozs7OztFQXpUSSxPQUFNOzs7QUFzRU8sTUFBQSxhQUFBLEVBQUEsT0FBTSxVQUFBO0FBNkJOLE1BQUEsYUFBQSxFQUFBLE9BQU0sVUFBQTs7U0FsR2IsT0FBQSxhQUFBckMsVUFBQSxHQURYSCxtQkFnSE0sT0FoSE5lLGNBZ0hNO0FBQUEsSUE5R0pkLFlBK0JZLFVBQUEsRUFBQSxPQUFBLHdDQTlCSixHQUFBO0FBQUEsTUFBdUMsU0FBQVMsUUFDN0MsTUFDeUI7QUFBQSxRQUR6QlQsWUFDeUIsT0FBQSxVQUFBLEdBQUEsRUFBdEIsU0FBUyxPQUFBLFVBQUEsR0FBUyxNQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUE7QUFBQSxRQUNyQkEsWUFRUSxNQUFBO0FBQUEsVUFQTixNQUFBO0FBQUEsVUFDQSxNQUFLO0FBQUEsVUFDTCxPQUFBO0FBQUEsVUFDQSxPQUFNO0FBQUEsVUFDTCxTQUFPLE9BQUE7QUFBQSxVQUNSLE1BQUs7QUFBQSxRQUFBLENBQUE7QUFBQSxRQUdQQSxZQUFtQixNQUFBO0FBQUEsUUFDbkJBLFlBTUksTUFBQTtBQUFBLFVBTEYsTUFBSztBQUFBLFVBQ0wsTUFBSztBQUFBLFVBQ0osU0FBSyxzQ0FBRSxPQUFBLGlCQUFjO0FBQUEsVUFDckIsTUFBTSxPQUFBLGtCQUFjO0FBQUEsVUFDckIsT0FBQTtBQUFBLFFBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxNQUFBLENBQUE7QUFBQSwwQkFFRkQsbUJBU0lZLFVBQUEsTUFBQUMsV0FQYyxPQUFBLG1CQUFpQixDQUExQixVQUFLOzhCQUZkVCxZQVNJLE1BQUE7QUFBQSxZQVJGLE1BQUs7QUFBQSxZQUVKLEtBQUs7QUFBQSxZQUNOLE1BQUs7QUFBQSxZQUNKLFNBQUssWUFBRSxPQUFBLGlCQUFpQjtBQUFBLFlBQ3hCLE1BQU0sU0FBUyxPQUFBO0FBQUEsWUFDaEIsT0FBQTtBQUFBLFlBQ0MsT0FBS2dCLGVBQUEsRUFBQSxNQUFBLENBQWdCO0FBQUEsVUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFdBQUEsUUFBQSxPQUFBLENBQUE7QUFBQTs7OztJQUdmLE9BQUEscUJBQUFqQixVQUFBLEdBQVhILG1CQVFNLE9BQUFPLGNBQUE7QUFBQSxNQVBKTixZQUtJLE9BQUEsdUJBQUEsR0FBQTtBQUFBLFFBSkQsV0FBVyxPQUFBO0FBQUEsUUFDWCxjQUFjO0FBQUEsUUFDZCxVQUFNLHNDQUFFLE9BQUEsb0JBQWlCO0FBQUEsUUFDekIsWUFBVSxPQUFBO0FBQUEsTUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFdBQUEsQ0FBQTtBQUFBLE1BRWIsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUFRLGdCQUErQyxZQUEzQywwQ0FBc0MsRUFBQTtBQUFBLElBQUEsQ0FBQSxLQUFBWSxtQkFBQSxJQUFBLElBQUE7QUFBQSxJQUlwQyxPQUFBLGFBQUFsQixVQUFBLEdBRlJDLFlBb0VnQixPQUFBLGVBQUEsR0FBQTtBQUFBLE1BQUEsS0FBQTtBQUFBLE1BbkVkLE9BQU07QUFBQSxNQUVMLE1BQU0sT0FBQSxVQUFVO0FBQUEsTUFDaEIsYUFBYSxPQUFBO0FBQUEsTUFDYixnQkFBZ0IsT0FBQTtBQUFBLE1BQ2hCLFlBQVksT0FBQTtBQUFBLE1BQ1osYUFBUyxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUUsT0FBQSxZQUFZLE1BQU07QUFBQSxNQUM3QixhQUFXLE9BQUE7QUFBQSxJQUFBLEdBQUE7QUFBQSx1QkFFWixNQXlEUztBQUFBLFFBekRUSCxZQXlEUyxPQUFBO0FBQUEsVUF4RFAsa0JBQUE7QUFBQSxVQUNBLGdCQUFBO0FBQUEsVUFBQSxZQUNTLE9BQUE7QUFBQSxVQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLHFCQUFrQjtBQUFBLFFBQUEsR0FBQTtBQUFBLDJCQUUzQixNQW1EUztBQUFBLFlBbkRUQSxZQW1EUyxPQUFBO0FBQUEsY0FuREQsT0FBQTtBQUFBLGNBQU0sT0FBQSxFQUFBLGFBQUEsUUFBQTtBQUFBLFlBQUEsR0FBQTtBQUFBLCtCQUNaLE1BYVM7QUFBQSxnQkFaRCx5REFEUkcsWUFhUyxPQUFBO0FBQUEsa0JBWFAsS0FBSTtBQUFBLGtCQUNKLFdBQUE7QUFBQSxnQkFBQSxHQUFBO0FBQUEsbUNBRUEsTUFPYztBQUFBLG9CQVBkSCxZQU9jLE9BQUEsYUFBQSxHQUFBO0FBQUEsc0JBTlosTUFBSztBQUFBLHNCQUNKLE1BQU0sT0FBQTtBQUFBLG9CQUFBLEdBQUE7QUFBQSx1Q0FDUCxNQUU2QjtBQUFBLHdCQUY3QkEsWUFFNkIsT0FBQTtBQUFBLDBCQUQzQixNQUFLO0FBQUEsMEJBQ0wsTUFBSztBQUFBLHdCQUFBLENBQUE7QUFBQSx3QkFDUFEsZ0JBQXFELFFBQXJELFlBQXFESCxnQkFBNUIsT0FBQSxrQkFBa0IsR0FBQSxDQUFBO0FBQUEsc0JBQUEsQ0FBQTtBQUFBOzs7Ozs7O2tDQUkvQ04sbUJBV1NZLFVBQUEsTUFBQUMsV0FWYyxPQUFBLG1CQUFpQixDQUEvQixlQUFVO3NEQURuQlQsWUFXUyxPQUFBO0FBQUEsb0JBVE4sS0FBSyxXQUFXO0FBQUEsb0JBQ2pCLFdBQUE7QUFBQSxvQkFDQSxLQUFBO0FBQUEsa0JBQUEsR0FBQTtBQUFBLHFDQUVBLE1BSXNCO0FBQUEsc0JBSnRCSCxZQUlzQixPQUFBLDBCQUFBLEdBQUE7QUFBQSx3QkFIcEIsT0FBTTtBQUFBLHdCQUNMLGNBQWMsV0FBVztBQUFBLHdCQUMxQixhQUFBO0FBQUEsd0JBQ0MsVUFBVTtBQUFBLHNCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsY0FBQSxDQUFBO0FBQUE7Ozs7OztnQkFFZkEsWUFBZSxVQUFBO0FBQUEsaUJBQUFFLFVBQUEsSUFBQSxHQUNmSCxtQkFxQlNZLFVBQUEsTUFBQUMsV0FwQmMsT0FBQSxtQkFBaUIsQ0FBL0IsZUFBVTtzREFEbkJULFlBcUJTLE9BQUE7QUFBQSxvQkFuQk4sS0FBSyxXQUFXO0FBQUEsb0JBQ2pCLFdBQUE7QUFBQSxrQkFBQSxHQUFBO0FBQUEscUNBRUEsTUFRYztBQUFBLHNCQVJkSCxZQVFjLE9BQUEsYUFBQSxHQUFBO0FBQUEsd0JBUFosTUFBSztBQUFBLHdCQUNKLE1BQU0sV0FBVztBQUFBLHNCQUFBLEdBQUE7QUFBQSx5Q0FDbEIsTUFHNEM7QUFBQSwwQkFINUNBLFlBRzRDLE9BQUE7QUFBQSw0QkFGMUMsTUFBSztBQUFBLDRCQUNKLE9BQUttQixlQUFBLEVBQUEsaUJBQXFCLFdBQVcsU0FBSyxlQUFBO0FBQUEsNEJBQzNDLE1BQUs7QUFBQSwwQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQTtBQUFBLDBCQUNQWCxnQkFBdUQsUUFBdkQsWUFBdURILGdCQUE5QixXQUFXLFNBQVMsR0FBQSxDQUFBO0FBQUEsd0JBQUEsQ0FBQTtBQUFBOztzQkFFL0NMLFlBQVcsTUFBQTtBQUFBLHNCQUNYQSxZQUs2QyxNQUFBO0FBQUEsd0JBSjNDLE1BQUs7QUFBQSx3QkFDTCxNQUFBO0FBQUEsd0JBQ0EsT0FBQTtBQUFBLHdCQUNBLE1BQUs7QUFBQSx3QkFDSixTQUFLLENBQUEsV0FBRSxPQUFBLGlCQUFpQixXQUFXLEVBQUU7QUFBQSxzQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM2SWxELE1BQU0saUJBQWlCOzs7Ozs7OztBQW5CdkIsVUFBTSxTQUFTLGtCQUFBO0FBRWYsVUFBTSxTQUFTLFVBQUE7QUFFZixVQUFNLFFBQVEsZ0JBQUE7QUFFZCxVQUFNLEVBQUUsZ0JBQUEsSUFBb0IsV0FBQTtBQUU1QixVQUFNLFFBQVE7QUFJZCxVQUFNLFVBQVUsU0FBUyxNQUFNO0FBQzNCLFlBQU0sSUFBSSxNQUFNLFdBQVcsTUFBTSxTQUFTO0FBQzFDLGFBQU87QUFBQSxJQUNYLENBQUM7QUFFRCxVQUFNLEtBQUssVUFBQTtBQUlYLFVBQU0sb0JBQW9CLFNBQVMsTUFBTSxRQUFRLFNBQVMsUUFBUSxNQUFNLFdBQVcsU0FBUyxLQUFLLHVCQUF1QjtBQUV4SCxVQUFNLHVCQUF1QjtBQUFBLE1BQ3pCLE1BQU07QUFBQSxNQUNOLGlCQUFpQjtBQUFBLE1BQ2pCLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUFBO0FBR1YsVUFBTTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsSUFBQSxJQUNBLFlBQVksTUFBTTtBQUV0QixVQUFNLGdCQUFnQixJQUFJLEVBQUU7QUFDNUIsVUFBTSxxQkFBcUIsSUFBSSxFQUFFO0FBQ2pDLFVBQU0sb0JBQW9CLElBQUksR0FBRztBQUVqQyxVQUFNLG1CQUFtQixJQUFJLEtBQUs7QUFFbEMsVUFBTSxzQkFBc0IsSUFBSSxFQUFFO0FBRWxDLFVBQU0scUJBQXFCLFNBQVM7QUFBQSxNQUNoQyxNQUFPO0FBQ0gsZUFBTyxvQkFBb0IsU0FBUztBQUFBLE1BQ3hDO0FBQUEsTUFDQSxJQUFLLE9BQWU7QUFDaEIsY0FBTSxVQUFVLG9CQUFvQjtBQUNwQyw0QkFBb0IsUUFBUTtBQUM1QixZQUFJLFVBQVUsV0FBVyxVQUFVLGdCQUFnQjtBQUMvQyxpQkFBTyxvQkFBb0IsTUFBTSxhQUFhLEtBQUssQ0FBQztBQUdwRCxpQkFBTyx1QkFBdUIsRUFBRTtBQUFBLFFBQ3BDO0FBQUEsTUFDSjtBQUFBLElBQUEsQ0FDSDtBQUVELFVBQU0sZ0JBQWdCLFNBQVMsTUFBTSxNQUFNLDJCQUEyQixNQUFNLFNBQVMsQ0FBQztBQUV0RixVQUFNLGdDQUFnQyxTQUFTLE1BQU07QUFDakQsYUFBTyxNQUFNLDJCQUEyQixnQ0FBZ0MsS0FBSztBQUFBLElBQ2pGLENBQUM7QUFFRCxVQUFNLGlDQUFpQyxNQUFNO0FBRXpDLFlBQU0sU0FBUyw4QkFBOEIsT0FBTztBQUNwRCxVQUFJLFFBQVE7QUFDUiwyQkFBbUIsUUFBUSxPQUFPO0FBRWxDLHdCQUFnQixNQUFNO0FBQ2xCLGdCQUFNLFVBQVUsU0FBUyxjQUFjLGlCQUFpQixPQUFPLEVBQUUsSUFBSTtBQUNyRSxrQkFBUSxJQUFJLG9CQUFvQixPQUFPO0FBQ3ZDLGNBQUksU0FBUztBQUVULG9CQUFRLGVBQWUsRUFBRSxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBa0I7QUFBQSxVQUMvRjtBQUFBLFFBQ0osR0FBRyxHQUFJO0FBQUEsTUFDWCxPQUFPO0FBRUgsWUFBSSxDQUFDLG1CQUFtQixPQUFPO0FBQzNCLDZCQUFtQixRQUFRLFFBQVEsT0FBTyxXQUFXLENBQUMsR0FBRyxNQUFNO0FBQUEsUUFDbkU7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBRUQsVUFBTSxxQkFBcUIsTUFBTTtBQUc3QixVQUFJLG9CQUFvQixPQUFPO0FBQzNCLGNBQU0sWUFBYSxNQUFNLHFCQUFxQixvQkFBb0IsS0FBSztBQUN2RSxZQUFJLGFBQWEsVUFBVSxNQUFNLG1CQUFtQixPQUFPO0FBQ3ZELDZCQUFtQixRQUFRLFVBQVU7QUFBQSxRQUN6QztBQUVBLHdCQUFnQixNQUFNO0FBQ2xCLGdCQUFNLFVBQVUsU0FBUyxjQUFjLGlCQUFpQixvQkFBb0IsS0FBSyxJQUFJO0FBQ3JGLGtCQUFRLElBQUksb0JBQW9CLE9BQU87QUFDdkMsY0FBSSxTQUFTO0FBRVQsb0JBQVEsZUFBZSxFQUFFLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFrQjtBQUFBLFVBQy9GO0FBQUEsUUFDSixHQUFHLEdBQUk7QUFBQSxNQUNYO0FBQUEsSUFDSixDQUFDO0FBRUQ7QUFBQSxNQUFNLE1BQU0sTUFBTTtBQUFBLE1BQVcsTUFBTTtBQUUvQixZQUFJLFFBQVEsU0FBUyxRQUFRLE1BQU0sV0FBVyxDQUFDLEdBQUc7QUFDOUMsNkJBQW1CLFFBQVEsUUFBUSxNQUFNLFdBQVcsQ0FBQyxFQUFFLE1BQU07QUFBQSxRQUNqRSxPQUFPO0FBQ0gsNkJBQW1CLFFBQVE7QUFBQSxRQUMvQjtBQUVBLGVBQU87QUFBQSxVQUFjLE1BQU0sMkNBQTJDLE1BQU0sV0FBVyxPQUFPLFNBQVM7QUFBQSxVQUNsRixNQUFNLG9CQUFvQixNQUFNLFNBQVMsRUFBRSxJQUFJLENBQUEsV0FBVSxPQUFPLElBQUk7QUFBQSxRQUFBO0FBQUEsTUFDN0Y7QUFBQTtBQUFBLE1BRU0sRUFBRSxXQUFXLEtBQUE7QUFBQSxJQUFLO0FBRXhCLGFBQVMsa0JBQW1CLE1BQXFCO0FBRTdDLFlBQU0sSUFBSSxNQUFNLFFBQUEsRUFBVSxVQUFVLEtBQUs7QUFBQTtBQUFBO0FBQUEsUUFHckMsTUFBTSxLQUFLO0FBQUEsUUFDWCxpQkFBaUIsS0FBSztBQUFBLFFBQ3RCLE1BQU0sS0FBSztBQUFBLFFBQ1gsTUFBTSxLQUFLO0FBQUEsUUFDWCxNQUFNLEtBQUs7QUFBQSxRQUNYLFVBQVUsTUFBTTtBQUFBLFFBQ2hCLGFBQWEsQ0FBQTtBQUFBLFFBRWIsVUFBVTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sWUFBWTtBQUFBO0FBQUE7QUFBQSxZQUdSLE1BQU07QUFBQSxZQUNOLFVBQVU7QUFBQSxjQUNOO0FBQUEsZ0JBQ0ksTUFBTTtBQUFBLGdCQUNOLFlBQVk7QUFBQSxnQkFDWix5QkFBeUI7QUFBQSxrQkFDckIsTUFBTTtBQUFBLGtCQUNOLFlBQVksQ0FBQTtBQUFBLGdCQUFDO0FBQUEsZ0JBRWpCLGVBQWU7QUFBQSxrQkFDWCxNQUFNO0FBQUEsa0JBQ04sYUFBYSxDQUFBO0FBQUEsZ0JBQUM7QUFBQSxjQUNsQjtBQUFBLFlBQ0o7QUFBQSxVQUNKO0FBQUEsUUFDSjtBQUFBLE1BQ0osQ0FDSDtBQUVELFlBQU0sYUFBYSxFQUFFLFVBQVU7QUFDL0IsVUFBSSxZQUFZO0FBRVosY0FBTSxhQUFhLFdBQVcsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJO0FBQ3ZELFlBQUksV0FBVyxTQUFTLFVBQVUsV0FBVyxTQUFTLENBQUMsR0FBRztBQUN0RCxnQkFBTSxhQUFhLFdBQVcsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJO0FBQUEsUUFDdkU7QUFBQSxNQUNKO0FBR0EsaUJBQVcsTUFBTTtBQUNiLGVBQU8sS0FBSztBQUFBLFVBQ1IsT0FBTztBQUFBLFlBQ0gsS0FBSyxLQUFLO0FBQUEsVUFBQTtBQUFBLFFBQ2QsQ0FDSCxFQUFFLE1BQU0sQ0FBQSxNQUFLO0FBQ1gsa0JBQVEsSUFBSSw4QkFBOEIsQ0FBQyxFQUFFO0FBQUEsUUFDaEQsQ0FBQztBQUFBLE1BQ0wsR0FBRyxHQUFHO0FBQUEsSUFDVjtBQUVBLGFBQVMsb0JBQXFCO0FBRTFCLFVBQUksUUFBUSxTQUFTLFFBQVEsTUFBTSxXQUFXLENBQUMsR0FBRztBQUM5QyxlQUFPLEtBQUs7QUFBQSxVQUNSLE9BQU87QUFBQSxZQUNILEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQyxFQUFFO0FBQUEsVUFBQTtBQUFBLFFBQ3JDLENBQ0gsRUFBRSxNQUFNLENBQUEsTUFBSztBQUNYLGtCQUFRLElBQUksOEJBQThCLENBQUMsRUFBRTtBQUFBLFFBQ2hELENBQUM7QUFBQSxNQUNMO0FBQUEsSUFDSjtBQUVBLFVBQU0saUJBQWlCLFNBQVMsTUFBTTtBQUNsQyxhQUFPLGNBQWMsTUFBTSxhQUFhLElBQUksUUFBUTtBQUFBLElBQ3hELENBQUM7QUFFRCxnQkFBWSxNQUFNO0FBQ2QsYUFBTyxvQkFBb0IsSUFBSTtBQUMvQixhQUFPLG1DQUFtQyxFQUFFO0FBQUEsSUFFaEQsQ0FBQztBQUVELGFBQVMsTUFBTSxXQUFzQjtBQUNoQyxhQUFlLFlBQVk7QUFDNUIsY0FBUSxJQUFJLGFBQWEsVUFBVSxNQUFNLFNBQVM7QUFBQSxJQUN0RDtBQUlBLFVBQU0sY0FBNkI7QUFBQSxNQUMvQixDQUFFLHdCQUF3QixDQUFDLGNBQWM7QUFDckMsY0FBTSxtQkFBbUIsTUFBTSxXQUFXLFVBQVUsSUFBSSxDQUFDLFVBQVUsUUFBUTtBQUFBLE1BQy9FLENBQUU7QUFBQSxNQUNGO0FBQUEsUUFBRTtBQUFBLFFBQVUsQ0FBQyxjQUFjO0FBQ3RCLGFBQUcsT0FBTztBQUFBLFlBQ1IsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUywyQ0FBMkMsVUFBVSxLQUFLO0FBQUEsWUFDbkUsUUFBUTtBQUFBLFlBQ1IsWUFBWTtBQUFBLFVBQUEsQ0FDYixFQUFFLEtBQUssTUFBTTtBQUNaLGtCQUFNLE9BQU8sVUFBVTtBQUN2QiwrQkFBbUIsUUFBUTtBQUMzQixrQkFBTSxnQkFBZ0IsVUFBVSxFQUFFO0FBQ2xDLGVBQUcsT0FBTztBQUFBLGNBQ0wsTUFBTTtBQUFBLGNBQ04sU0FBUyxxQkFBcUIsSUFBSTtBQUFBLFlBQUEsQ0FDdEM7QUFBQSxVQUNILENBQUM7QUFBQSxRQUNKO0FBQUEsTUFBQTtBQUFBLElBQ0Y7Ozs7Ozs7O0VBM2NGLEtBQUE7O0FBU1MsTUFBQSxhQUFBLEVBQUEsT0FBTSx3QkFBQTs7U0FSVCxPQUFBLFdBQUFFLFVBQUEsR0FGUkgsbUJBME1NLE9BMU1OLFlBME1NO0FBQUEsSUF0TUpDLFlBa0thLFdBQUE7QUFBQSxNQUFBLFlBaktGLE9BQUE7QUFBQSxNQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLGdCQUFhO0FBQUEsTUFDdEIsYUFBWTtBQUFBLE1BQ1gsUUFBUSxDQUFBLElBQUEsRUFBQTtBQUFBLElBQUEsR0FBQTtBQUFBLE1BRVEsUUFBTVMsUUFDckIsTUFpRk07QUFBQSxRQWpGTkQsZ0JBaUZNLE9BakZOLFlBaUZNO0FBQUEsVUFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFoRkpBLGdCQUF1QyxPQUFBLEVBQWxDLE9BQU0sWUFBQSxHQUFZLGNBQVUsRUFBQTtBQUFBLFVBQ2pDUixZQWlDUyxPQUFBO0FBQUEsWUFoQ1AsT0FBQTtBQUFBLFlBQ0EsT0FBTTtBQUFBLFlBQ04sZ0JBQWE7QUFBQSxZQUNiLE9BQU07QUFBQSxZQUNOLFdBQUE7QUFBQSxZQUNDLGFBQWE7QUFBQSxZQUFBLFlBQ0wsT0FBQTtBQUFBLFlBQUEsdUJBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLE9BQUEscUJBQWtCO0FBQUEsWUFDM0IsVUFBQTtBQUFBLFVBQUEsR0FBQTtBQUFBLDZCQUVhLE1BQXVDO0FBQUEsZUFBQUUsVUFBQSxJQUFBLEdBQXBESCxtQkFlY1ksVUFBQSxNQUFBQyxXQWZtQixPQUFBLFFBQVEsWUFBVSxDQUEvQixjQUFTO29DQUE3QlQsWUFlYyxXQUFBO0FBQUEsa0JBZEEsSUFBRSxFQUFBLE9BQUEsRUFBQSxLQUFrQixVQUFVLE1BQUEsRUFBSztBQUFBLGtCQUNuQyxTQUFLRixjQUFBLENBQUEsV0FBTyxPQUFBLE1BQU0sU0FBUyxHQUFBLENBQUEsTUFBQSxDQUFBO0FBQUEsa0JBQzNCLE1BQU0sVUFBVSxXQUFRLDZCQUFBO0FBQUEsa0JBQ3pCLFdBQUE7QUFBQSxrQkFDQyxNQUFNLFVBQVU7QUFBQSxrQkFDaEIsS0FBSyxVQUFVO0FBQUEsa0JBQ2YsT0FBTyxVQUFVO0FBQUEsa0JBQ2pCLE9BQU8sVUFBVTtBQUFBLGdCQUFBLEdBQUE7QUFBQSxrQkFDWixTQUFPUSxRQUN0QixNQUdjO0FBQUEsb0JBSGRULFlBR2MsT0FBQSxhQUFBLEdBQUE7QUFBQSxzQkFGWCxTQUFTLE9BQUE7QUFBQSxzQkFDVCxXQUFXO0FBQUEsb0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxXQUFBLENBQUE7QUFBQTs7OztjQUlsQkEsWUFNYyxXQUFBO0FBQUEsZ0JBTkEsSUFBRSxnQkFBa0IsT0FBQSxlQUFBLEVBQWM7QUFBQSxnQkFDbEMsT0FBTyxPQUFBO0FBQUEsZ0JBQ1IsT0FBTTtBQUFBLGdCQUNOLGlCQUFjO0FBQUEsZ0JBQ2IsTUFBTSxPQUFBO0FBQUEsZ0JBQ1AsTUFBSztBQUFBLGNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQTtBQUFBOzs7VUFHcEJBLFlBQWUsVUFBQTtBQUFBLFVBQ2ZBLFlBSzRDLE9BQUEsMkNBQUEsR0FBQTtBQUFBLFlBSjFDLE9BQU07QUFBQSxZQUNOLE9BQU07QUFBQSxZQUNMLFdBQVcsT0FBQTtBQUFBLFlBQ1gsb0JBQW9CLE9BQUE7QUFBQSxVQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsYUFBQSxvQkFBQSxDQUFBO0FBQUEsVUFFdkJBLFlBQWUsVUFBQTtBQUFBLFVBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQ2ZRLGdCQUE2QixPQUFBLEVBQXhCLE9BQU0sWUFBQSxHQUFXLE1BQUEsRUFBQTtBQUFBLFVBQ3RCUixZQU0rQixPQUFBLDhCQUFBLEdBQUE7QUFBQSxZQUw3QixPQUFNO0FBQUEsWUFDTixPQUFNO0FBQUEsWUFDTCxXQUFXLE9BQUE7QUFBQSxZQUNYLGVBQWUsT0FBQTtBQUFBLFlBQ2Ysb0JBQW9CLE9BQUE7QUFBQSxVQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsYUFBQSxpQkFBQSxvQkFBQSxDQUFBO0FBQUEsVUFFdkJBLFlBQWUsVUFBQTtBQUFBLFVBQ2ZBLFlBS0ksT0FBQSxpQ0FBQSxHQUFBO0FBQUEsWUFKRixPQUFNO0FBQUEsWUFDTCxXQUFXLE9BQUE7QUFBQSxZQUNYLGVBQWUsT0FBQTtBQUFBLFlBQ2Ysb0JBQW9CLE9BQUE7QUFBQSxVQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsYUFBQSxpQkFBQSxvQkFBQSxDQUFBO0FBQUEsVUFFdkJBLFlBZ0JtQixnQkFBQTtBQUFBLFlBZmpCLE9BQUE7QUFBQSxZQUNBLGdCQUFBO0FBQUEsWUFDQSxzQkFBQTtBQUFBLFlBQ0MsVUFBVTtBQUFBLFlBQ1gsZUFBWTtBQUFBLFlBQ1osaUJBQWM7QUFBQSxZQUNkLE9BQU07QUFBQSxVQUFBLEdBQUE7QUFBQSw2QkFFTixNQUtJO0FBQUEsY0FMSkEsWUFLSSxPQUFBLDJCQUFBLEdBQUE7QUFBQSxnQkFKRCxXQUFXLE9BQUE7QUFBQSxnQkFDWCxvQkFBb0IsT0FBQTtBQUFBLGdCQUNwQixZQUFZLE9BQUEsY0FBYztBQUFBLGdCQUMzQixRQUFPO0FBQUEsY0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLGFBQUEsc0JBQUEsWUFBQSxDQUFBO0FBQUE7Ozs7O01BWUUsT0FBS1MsUUFDcEIsTUFvRWU7QUFBQSxRQXBFZlQsWUFvRWUsWUFBQTtBQUFBLFVBQUEsWUFuRUosT0FBQTtBQUFBLFVBQUEsdUJBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLE9BQUEscUJBQWtCO0FBQUEsVUFDM0IsVUFBQTtBQUFBLFVBQ0EsVUFBQTtBQUFBLFVBQ0EsbUJBQWdCO0FBQUEsVUFDaEIsbUJBQWdCO0FBQUEsUUFBQSxHQUFBO0FBQUEsMkJBR2hCLE1BTWM7QUFBQSxZQU5kQSxZQU1jLFdBQUEsRUFBQSxNQUFBLE9BTkEsZUFBTSxHQUFBO0FBQUEsY0FBYyxTQUFBUyxRQUNoQyxNQUl3QjtBQUFBLGdCQUp4QlQsWUFJd0IsT0FBQSx1QkFBQSxHQUFBO0FBQUEsa0JBSHJCLFdBQVcsT0FBQTtBQUFBLGtCQUNYLFlBQVUsT0FBQTtBQUFBLGtCQUNWLFVBQVEsT0FBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7O2FBSWJFLFVBQUEsSUFBQSxHQUFBSCxtQkFrRGNZLFVBQUEsTUFBQUMsV0FsRG1CLE9BQUEsUUFBUSxZQUFVLENBQS9CLGNBQVM7a0NBQTdCVCxZQWtEYyxXQUFBO0FBQUEsZ0JBakRBLE1BQU0sVUFBVTtBQUFBLGdCQUNoQixLQUFLLFVBQVU7QUFBQSxjQUFBLEdBQUE7QUFBQSxpQ0FFM0IsTUE0Q2E7QUFBQSxrQkE1Q2JILFlBNENhLFdBQUE7QUFBQSxvQkEzQ1gsT0FBTTtBQUFBLG9CQUNOLFlBQVc7QUFBQSxvQkFBQSxZQUNGLE9BQUE7QUFBQSxvQkFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxxQkFBa0I7QUFBQSxvQkFDMUIsUUFBUSxDQUFBLEdBQUEsRUFBQTtBQUFBLGtCQUFBLEdBQUE7QUFBQSxvQkFFUSxRQUFNUyxRQUNyQixNQTRCYTtBQUFBLHNCQTVCYlQsWUE0QmEsV0FBQTtBQUFBLHdCQTNCWCxPQUFNO0FBQUEsd0JBQ04sYUFBWTtBQUFBLHdCQUNaLFlBQVc7QUFBQSx3QkFDWCxNQUFLO0FBQUEsd0JBQ0wsWUFBQTtBQUFBLHdCQUNBLG1CQUFnQjtBQUFBLHdCQUNoQixtQkFBZ0I7QUFBQSx3QkFBQSxZQUNQLE9BQUE7QUFBQSx3QkFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxvQkFBaUI7QUFBQSxzQkFBQSxHQUFBO0FBQUEsd0JBR1QsUUFBTVMsUUFDckIsTUFJMEI7QUFBQSwwQkFKMUJULFlBSTBCLE9BQUEseUJBQUEsR0FBQTtBQUFBLDRCQUh4QixPQUFNO0FBQUEsNEJBQ0wsZUFBZSxPQUFBO0FBQUEsNEJBQ2YsYUFBYSxVQUFVO0FBQUEsMEJBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxpQkFBQSxhQUFBLENBQUE7QUFBQTt3QkFJWCxPQUFLUyxRQUNwQixNQUtJO0FBQUEsMEJBSEksdURBRlJOLFlBS0ksT0FBQSwrQkFBQSxHQUFBO0FBQUEsNEJBQUEsS0FBQTtBQUFBLDRCQUpGLE9BQU07QUFBQSw0QkFFTCxTQUFTLE9BQUE7QUFBQSw0QkFDVCxlQUFlLE9BQUE7QUFBQSwwQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFdBQUEsZUFBQSxDQUFBLEtBQUFpQixtQkFBQSxJQUFBLElBQUE7QUFBQTs7OztvQkFPUCxPQUFLWCxRQUNwQixNQUdpQjtBQUFBLHNCQUhqQlQsWUFHaUIsT0FBQSxnQkFBQSxHQUFBO0FBQUEsd0JBRmYsT0FBTTtBQUFBLHdCQUNMLGFBQWEsVUFBVTtBQUFBLHNCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsYUFBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7SUFZdENBLFlBb0JXLFNBQUE7QUFBQSxNQUFBLFlBbkJBLE9BQUE7QUFBQSxNQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLG1CQUFnQjtBQUFBLE1BQ3pCLE1BQUs7QUFBQSxNQUNMLFNBQUE7QUFBQSxNQUNBLFVBQUE7QUFBQSxJQUFBLEdBQUE7QUFBQSx1QkFFQSxNQUlZO0FBQUEsUUFKWkEsWUFJWSxPQUFBLFdBQUEsR0FBQTtBQUFBLFVBSFQsV0FBVyxPQUFBO0FBQUEsVUFDWCxlQUFlLE9BQUE7QUFBQSxVQUNmLG9CQUFvQixPQUFBO0FBQUEsUUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLGFBQUEsaUJBQUEsb0JBQUEsQ0FBQTtBQUFBLFFBRXZCQSxZQVFRLE1BQUE7QUFBQSxVQVBOLE9BQU07QUFBQSxVQUNOLE1BQUE7QUFBQSxVQUNBLFFBQUE7QUFBQSxVQUNDLFNBQUssT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFFLE9BQUEsbUJBQWdCLENBQUksT0FBQTtBQUFBLFVBQzVCLE1BQUs7QUFBQSxVQUNMLE1BQUs7QUFBQSxRQUFBLENBQUE7QUFBQTs7O0lBSVRBLFlBWWdCLGFBQUEsRUFBQSxVQUFBLGVBWlE7QUFBQSxNQUFXLFNBQUFTLFFBQ2pDLE1BVVE7QUFBQSxRQVZSVCxZQVVRLE1BQUE7QUFBQSxVQVROLE1BQUE7QUFBQSxVQUNBLE9BQU07QUFBQSxVQUNOLFFBQUE7QUFBQSxVQUNDLFNBQUssT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFFLE9BQUEsbUJBQWdCLENBQUksT0FBQTtBQUFBLFVBQzNCLE9BQU8sT0FBQTtBQUFBLFVBQ1IsTUFBSztBQUFBLFVBQ0wsTUFBSztBQUFBLFVBQ0wsY0FBVztBQUFBLFFBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxPQUFBLENBQUE7QUFBQTs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDEzLDE0LDE1XX0=
