import { Q as QTooltip } from "./QTooltip-H1AkgSso.js";
import { D as DragElement, C as ColorizeIcon } from "./ColorizeIcon-CnOnCqoT.js";
import { Y as defineComponent, r as ref, W as reactive, p as computed, a1 as _export_sfc, aa as createElementBlock, a4 as openBlock, a7 as createBaseVNode, ab as createCommentVNode, ad as normalizeClass, a2 as resolveComponent, aY as normalizeStyle, ag as Fragment, ah as renderList, a6 as createVNode, a3 as createBlock, a5 as withCtx, ac as toDisplayString, a9 as createTextVNode, h as createComponent, v as h, O as hMergeSlot, b1 as renderSlot, bv as mergeProps, bw as toHandlers, b0 as mergeModels, Z as useProjectStore, aX as useModel, _ as useInterfaceStore, $ as storeToRefs, ai as QIcon, b2 as withModifiers, bx as SpecificSynchronicCategory, af as withKeys, a8 as QBtn, aV as QCheckbox, ae as QInput, x as withDirectives } from "./index-C8moTFq2.js";
import { b as QPopupEdit, N as NoteIcon } from "./NoteIcon-Bdqpr3qd.js";
import { Q as QItem, a as QItemSection, c as QMenu } from "./format-mCdLZtFG.js";
import { Q as QList } from "./QList-CyR4BEUD.js";
import { E as ElementMenu, C as ClosePopup } from "./ElementMenu-BOGRjQVp.js";
import { u as useQuasar } from "./use-quasar-D-PqJuZf.js";
import { a as QSpace } from "./QBtnGroup-gg1VC8Dz.js";
import { Q as QSelect } from "./QSelect-WCK0xNWi.js";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SpecificSynchronicCategoryRelation",
  props: {
    childrenCount: { type: Number, default: 1 },
    direction: { type: String, default: "horizontal" },
    type: { type: String, default: "" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const container = ref(null);
    const dimensions = reactive({
      width: 100,
      height: 100
    });
    const strokeWidth = ref(1);
    const symbolHalfWidth = computed(() => {
      return 20;
    });
    const symbolHalfHeight = computed(() => {
      const count = props.childrenCount;
      return 6 / 1.05 ** count;
    });
    const isAggregation = computed(() => props.type === "aggregation");
    const isSpecialization = computed(() => props.type === "specialization");
    const isProperty = computed(() => props.childrenCount === 0);
    const parentPosition = computed(() => ({
      x: dimensions.width,
      y: dimensions.height / 2
    }));
    const barPosition = computed(() => ({
      x: dimensions.width / 2,
      y: dimensions.height / props.childrenCount / 2
    }));
    const __returned__ = { props, container, dimensions, strokeWidth, symbolHalfWidth, symbolHalfHeight, isAggregation, isSpecialization, isProperty, parentPosition, barPosition };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$8 = {
  ref: "container",
  class: "tree-box",
  style: { width: "100%", height: "100%", position: "relative" }
};
const _hoisted_2$5 = {
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_3$5 = ["data-children-count"];
const _hoisted_4$5 = ["y1", "y2", "stroke-width"];
const _hoisted_5$4 = ["y1", "x2", "y2", "stroke-width"];
const _hoisted_6$4 = ["d", "stroke-width"];
const _hoisted_7$3 = ["d", "stroke-width"];
const _hoisted_8$2 = ["d", "stroke-width"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    (openBlock(), createElementBlock("svg", _hoisted_2$5, [
      createBaseVNode("g", {
        class: normalizeClass($props.direction),
        "data-children-count": $props.childrenCount
      }, [
        $props.childrenCount > 1 ? (openBlock(), createElementBlock("line", {
          key: 0,
          "vector-effect": "non-scaling-stroke",
          x1: 0,
          y1: $setup.barPosition.y,
          x2: 0,
          y2: $setup.dimensions.height - $setup.barPosition.y,
          stroke: "black",
          "stroke-width": $setup.strokeWidth,
          class: "relation-perpendicular"
        }, null, 8, _hoisted_4$5)) : createCommentVNode("", true),
        createBaseVNode("line", {
          "vector-effect": "non-scaling-stroke",
          x1: 0,
          y1: $setup.parentPosition.y,
          x2: $setup.parentPosition.x,
          y2: $setup.parentPosition.y,
          stroke: "black",
          "stroke-width": $setup.strokeWidth,
          class: "relation-line"
        }, null, 8, _hoisted_5$4),
        $setup.isAggregation ? (openBlock(), createElementBlock("path", {
          key: 1,
          "vector-effect": "non-scaling-stroke",
          d: `M${$setup.parentPosition.x} ${$setup.parentPosition.y} l -${$setup.symbolHalfWidth} -${$setup.symbolHalfHeight} l -${$setup.symbolHalfWidth} ${$setup.symbolHalfHeight} l ${$setup.symbolHalfWidth} ${$setup.symbolHalfHeight} Z`,
          fill: "white",
          stroke: "black",
          "stroke-width": $setup.strokeWidth
        }, null, 8, _hoisted_6$4)) : createCommentVNode("", true),
        $setup.isSpecialization ? (openBlock(), createElementBlock("path", {
          key: 2,
          d: `M${$setup.parentPosition.x} ${$setup.parentPosition.y} l -${2 * $setup.symbolHalfWidth} -${2 * $setup.symbolHalfHeight} l 0 ${4 * $setup.symbolHalfHeight} Z`,
          fill: "white",
          stroke: "black",
          "stroke-width": $setup.strokeWidth
        }, null, 8, _hoisted_7$3)) : createCommentVNode("", true),
        $setup.isProperty ? (openBlock(), createElementBlock("path", {
          key: 3,
          d: `M${$setup.parentPosition.x - $setup.symbolHalfWidth} ${$setup.parentPosition.y - $setup.symbolHalfHeight} l ${$setup.symbolHalfWidth} ${$setup.symbolHalfHeight} l -${$setup.symbolHalfWidth} ${$setup.symbolHalfHeight}`,
          fill: "none",
          stroke: "black",
          "stroke-width": $setup.strokeWidth
        }, null, 8, _hoisted_8$2)) : createCommentVNode("", true)
      ], 10, _hoisted_3$5)
    ]))
  ], 512);
}
const SpecificSynchronicCategoryRelation = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-73d73011"], ["__file", "SpecificSynchronicCategoryRelation.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "GenericSynchronicCategoryOverview",
  props: {
    projectId: {},
    category: {},
    currentInterviewId: {},
    layout: { default: "horizontal" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const abstractionType = computed(() => props.category.instances[0]?.abstractionType || "");
    const __returned__ = { props, abstractionType, DragElement, SpecificSynchronicCategoryRelation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$7 = ["data-genericsynchroniccategory"];
const _hoisted_2$4 = ["data-genericsynchroniccategory"];
const _hoisted_3$4 = { class: "genericsynchroniccategory-children" };
const _hoisted_4$4 = {
  key: 0,
  class: "genericsynchroniccategory-relation"
};
const _hoisted_5$3 = { class: "genericsynchroniccategory-name" };
const _hoisted_6$3 = {
  key: 1,
  class: "genericsynchroniccategory-filler"
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GenericSynchronicCategoryOverview = resolveComponent("GenericSynchronicCategoryOverview", true);
  return openBlock(), createElementBlock("div", {
    ref: "container",
    class: normalizeClass(["genericsynchroniccategory-container", `genericsynchroniccategory-${$props.category.name}`]),
    "data-genericsynchroniccategory": $props.category.name
  }, [
    $props.category ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["genericsynchroniccategory", { "root-generic-synchronic-category": $props.category.isRoot }]),
      style: normalizeStyle({ backgroundColor: $props.category.color }),
      "data-genericsynchroniccategory": $props.category.name
    }, [
      createBaseVNode("div", _hoisted_3$4, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.category.children, (c) => {
          return openBlock(), createElementBlock("div", {
            key: c.name
          }, [
            createVNode(_component_GenericSynchronicCategoryOverview, {
              projectId: $props.projectId,
              layout: $props.layout,
              currentInterviewId: $props.currentInterviewId,
              category: c
            }, null, 8, ["projectId", "layout", "currentInterviewId", "category"])
          ]);
        }), 128))
      ]),
      $props.category.children?.length ? (openBlock(), createElementBlock("div", _hoisted_4$4, [
        createVNode($setup["SpecificSynchronicCategoryRelation"], {
          type: $setup.abstractionType,
          direction: $props.layout,
          childrenCount: $props.category.children?.length
        }, null, 8, ["type", "direction", "childrenCount"])
      ])) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(["genericsynchroniccategory-header", { "has-error": $props.category.errors?.length }])
      }, [
        createVNode($setup["DragElement"], {
          class: "flex justify-center items-center content-center",
          type: "genericsynchroniccategory",
          data: $props.category.name
        }, {
          default: withCtx(() => [
            createBaseVNode("span", _hoisted_5$3, toDisplayString($props.category.name), 1)
          ]),
          _: 1
        }, 8, ["data"]),
        $props.category.errors?.length ? (openBlock(), createBlock(QTooltip, {
          key: 0,
          class: "bg-red-5",
          anchor: "top right",
          self: "top left"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($props.category.name) + " ", 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.category.errors, (error, key) => {
              return openBlock(), createElementBlock("div", { key }, toDisplayString(error), 1);
            }), 128))
          ]),
          _: 1
        })) : (openBlock(), createBlock(QTooltip, {
          key: 1,
          anchor: "top right",
          self: "top left"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($props.category.name), 1)
          ]),
          _: 1
        }))
      ], 2),
      !$props.category.isRoot ? (openBlock(), createElementBlock("div", _hoisted_6$3, [
        createVNode($setup["SpecificSynchronicCategoryRelation"], {
          direction: $props.layout,
          childrenCount: 1
        }, null, 8, ["direction"])
      ])) : createCommentVNode("", true)
    ], 14, _hoisted_2$4)) : createCommentVNode("", true)
  ], 10, _hoisted_1$7);
}
const GenericSynchronicCategoryOverview = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-30c68170"], ["__file", "GenericSynchronicCategoryOverview.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "GenericCategoriesOverview",
  props: {
    projectId: { default: "" },
    categories: {},
    currentInterviewId: { default: "" },
    layout: { default: "horizontal" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { GenericSynchronicCategoryOverview };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$6 = ["data-project"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["genericcategories-container", $props.layout]),
    key: $props.projectId,
    "data-project": $props.projectId
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.categories, (category) => {
      return openBlock(), createBlock($setup["GenericSynchronicCategoryOverview"], {
        key: category.name,
        projectId: $props.projectId,
        layout: $props.layout,
        currentInterviewId: $props.currentInterviewId,
        category
      }, null, 8, ["projectId", "layout", "currentInterviewId", "category"]);
    }), 128))
  ], 10, _hoisted_1$6);
}
const GenericCategoriesOverview = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-1dd7df50"], ["__file", "GenericCategoriesOverview.vue"]]);
const alignValues = ["top", "middle", "bottom"];
const QBadge = createComponent({
  name: "QBadge",
  props: {
    color: String,
    textColor: String,
    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,
    outline: Boolean,
    rounded: Boolean,
    label: [Number, String],
    align: {
      type: String,
      validator: (v) => alignValues.includes(v)
    }
  },
  setup(props, { slots }) {
    const style = computed(() => {
      return props.align !== void 0 ? { verticalAlign: props.align } : null;
    });
    const classes = computed(() => {
      const text = props.outline === true ? props.color || props.textColor : props.textColor;
      return `q-badge flex inline items-center no-wrap q-badge--${props.multiLine === true ? "multi" : "single"}-line` + (props.outline === true ? " q-badge--outline" : props.color !== void 0 ? ` bg-${props.color}` : "") + (text !== void 0 ? ` text-${text}` : "") + (props.floating === true ? " q-badge--floating" : "") + (props.rounded === true ? " q-badge--rounded" : "") + (props.transparent === true ? " q-badge--transparent" : "");
    });
    return () => h("div", {
      class: classes.value,
      style: style.value,
      role: "status",
      "aria-label": props.label
    }, hMergeSlot(slots.default, props.label !== void 0 ? [props.label] : []));
  }
});
const ANNOTATION_COLORS = [
  "#ff9797",
  "#9eb2dd",
  "#ffdc97",
  "#7bcf7b"
];
/*!
 * Group items from an array together by some criteria or value.
 * (c) 2019 Tom Bremmer (https://tbremer.com/) and Chris Ferdinandi (https://gomakethings.com), MIT License,
 * @param  {Array}           arr      The array to group items from
 * @param  {String|Function} criteria The criteria to group by
 * @return {Object}                   The grouped object
 */
function groupBy(arr, criteria) {
  return arr.reduce(function(obj, item) {
    const key = item[criteria];
    if (!Object.hasOwn(obj, key)) {
      obj[key] = [];
    }
    obj[key].push(item);
    return obj;
  }, {});
}
function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}
function stripHashname(name) {
  const hashIndex = name.indexOf("#");
  if (hashIndex > 1) {
    return name.substr(0, hashIndex + 1);
  } else {
    return name;
  }
}
const OVERLAPPING_COLOR = "#deadbabe";
const sortedInsert = (arr, val) => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    if (val <= arr[i]) {
      arr.splice(i, 0, val);
      return i;
    }
  }
  arr.push(val);
  return l;
};
const flatten = (ranges) => {
  const START = 1;
  const STOP = 0;
  let l, i;
  const indexes = [];
  const ids = [];
  const types = [];
  l = ranges.length;
  for (i = 0; i < l; i++) {
    const range = ranges[i];
    const startI = sortedInsert(indexes, range[1]);
    ids.splice(startI, 0, range[0]);
    types.splice(startI, 0, START);
    const endI = sortedInsert(indexes, range[1] + range[2]);
    ids.splice(endI, 0, range[0]);
    types.splice(endI, 0, STOP);
  }
  const state = /* @__PURE__ */ new Map();
  state.set(ids[0], true);
  l = ids.length;
  function* iterator() {
    for (i = 1; i < l; i++) {
      const index = indexes[i];
      const lastIndex = indexes[i - 1];
      if (index > lastIndex) {
        yield [
          index - lastIndex,
          Array.from(state.keys())
        ];
      }
      if (types[i] === START) {
        state.set(ids[i], true);
      } else {
        state.delete(ids[i]);
      }
    }
  }
  return { [Symbol.iterator]: iterator };
};
const buildSpanList = (text, annotations) => {
  let ranges = [];
  const fullRange = ["baseText", 0, text.length];
  ranges.push(fullRange);
  const annotationRanges = annotations.map((annotation) => {
    return [annotation.id, annotation.start, annotation.length];
  });
  ranges = ranges.concat(annotationRanges);
  const sections = Array.from(flatten(ranges));
  let sectionTextStart = 0;
  let spanId = 0;
  const spans = sections.map((section) => {
    const length = Number(section[0]);
    let annotationIds = section[1];
    annotationIds = annotationIds.filter((annotationId) => {
      return annotationId !== "baseText";
    });
    const start = sectionTextStart;
    const end = sectionTextStart + length;
    const sectionText = text.slice(start, end);
    const span = {
      id: spanId,
      start,
      length,
      text: sectionText,
      annotationIds,
      get annotations() {
        return annotations.filter((annotation) => {
          return annotationIds.includes(annotation.id);
        });
      }
    };
    spanId = spanId + 1;
    sectionTextStart = end;
    return span;
  });
  return spans;
};
const _sfc_main$6 = {
  name: "AnnotatedText",
  emits: ["selection"],
  props: {
    text: String,
    annotations: {
      type: Array,
      default: function() {
        return [];
      }
    },
    clearSelection: {
      type: Boolean,
      deefault: false
    },
    getAnnotationColor: {
      type: Function,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      default: function(annotation) {
        return null;
      }
    },
    getAnnotationInfo: Function,
    spanEvents: {
      type: Object,
      default: function() {
        return {};
      }
    },
    getSpanClasses: {
      type: Function,
      default: function(span) {
        return () => {
        };
      }
    },
    spanAttributes: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    spanClasses: {
      get() {
        return Object.fromEntries(this.spans.map((span) => [span.id, this.getSpanClasses(span)]));
      }
    },
    spans: function() {
      const spans = buildSpanList(this.text, this.annotations);
      return spans;
    },
    preppedSpanEvents() {
      const spanEvents = this.spanEvents;
      const preppedSpanEvents = {};
      Object.keys(spanEvents).forEach((eventType) => {
        const callback = spanEvents[eventType];
        const newCallback = (e) => {
          const spanId = this.elementSpanId(e.target);
          const span = this.spanById(spanId);
          const annotationIds = span.annotationIds;
          const annotations = this.getAnnotations(annotationIds);
          callback(e, annotations);
        };
        preppedSpanEvents[eventType] = newCallback;
      });
      return preppedSpanEvents;
    }
  },
  methods: {
    elementSpanId(el) {
      let spanId = el.attributes["data-span-id"].value;
      spanId = Number(spanId);
      return spanId;
    },
    spanById(spanId) {
      const spans = this.spans.filter((span2) => {
        return span2.id === spanId;
      });
      const span = spans[0];
      return span;
    },
    getAnnotations(annotationIds) {
      const annotations = this.annotations.filter((annotation) => {
        return annotationIds.includes(annotation.id);
      });
      return annotations;
    },
    getSpanStyle: function(span) {
      const color = this.getSpanColor(span);
      if (color) {
        return {
          backgroundColor: color
        };
      } else {
        return null;
      }
    },
    getSpanColor: function(span) {
      let color = null;
      const annotationIds = span.annotationIds;
      const annotations = this.getAnnotations(annotationIds);
      let colors = annotations.map(
        (annotation) => this.getAnnotationColor(annotation)
      ).filter((color2) => color2);
      colors = [...new Set(colors)];
      if (colors.length > 1) {
        color = OVERLAPPING_COLOR;
      } else if (colors.length) {
        color = colors[0];
      }
      return color;
    },
    getSelection: function() {
      const selection = document.getSelection();
      if (selection) {
        const range = selection.getRangeAt(0);
        const container = range.startContainer.parentElement.parentElement;
        if (container === this.$refs.transcript) {
          const begin = Number(range.startContainer.parentElement.dataset.textOffset) + range.startOffset;
          const end = Number(range.endContainer.parentElement.dataset.textOffset) + range.endOffset;
          if (this.clearSelection) {
            selection.removeAllRanges();
          }
          return {
            begin,
            end,
            text: this.text.slice(begin, end)
          };
        }
      }
      return null;
    },
    emitSelection: function() {
      const textSelection = this.getSelection();
      if (textSelection && textSelection.begin !== textSelection.end) {
        this.$emit("selection", textSelection);
      }
    }
  }
};
const _hoisted_1$5 = ["data-span-id", "data-annotation-ids", "data-text-offset"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "transcript",
    ref: "transcript",
    onMouseup: _cache[0] || (_cache[0] = (...args) => $options.emitSelection && $options.emitSelection(...args))
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.spans, (span) => {
      return openBlock(), createElementBlock("span", mergeProps({
        key: span.id,
        "data-span-id": span.id,
        "data-annotation-ids": span.annotationIds,
        "data-text-offset": span.start,
        class: $options.spanClasses[span.id],
        style: $options.getSpanStyle(span)
      }, { ref_for: true }, $props.spanAttributes, toHandlers($options.preppedSpanEvents)), toDisplayString(span.text), 17, _hoisted_1$5);
    }), 128)),
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 544);
}
const AnnotatedText = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-f5881b47"], ["__file", "AnnotatedText.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DescriptemModificationDialog",
  props: /* @__PURE__ */ mergeModels({
    initial: { type: Object }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const model = useModel(__props, "modelValue");
    const props = __props;
    const interview = computed(() => model.value ? store.getInterview(model.value.interviewId) : null);
    const contextText = computed(() => {
      if (interview.value) {
        return interview.value.text;
      } else {
        return "";
      }
    });
    function getSpanClasses(span) {
      const classes = span.annotations.map((a) => a.class);
      return [...new Set(classes)].join(" ");
    }
    const initialLength = computed(() => {
      if (props.initial) {
        return props.initial.endIndex - props.initial.startIndex;
      } else {
        return 0;
      }
    });
    const annotations = computed(() => {
      const out = [];
      if (model.value && props.initial) {
        const interviewId = model.value.interviewId;
        const maxIndex = interview.value?.text.length ?? 0;
        const length = model.value.endIndex - model.value.startIndex;
        const extractStart = clamp(
          props.initial.startIndex - initialLength.value - 1,
          0,
          maxIndex
        );
        const extractEnd = clamp(
          props.initial.endIndex + initialLength.value + 1,
          0,
          maxIndex
        );
        if (extractStart) {
          out.push({
            interviewId,
            id: "hidden_start",
            start: 0,
            length: extractStart,
            class: "hidden extractStart"
          });
        }
        out.push({
          interviewId,
          id: "current_extract",
          start: props.initial.startIndex,
          length: props.initial.endIndex - props.initial.startIndex,
          class: "extractOriginal"
        });
        out.push({
          interviewId,
          id: "new_selection",
          start: model.value.startIndex,
          length,
          class: "extractHighlight"
        });
        if (extractEnd < maxIndex) {
          out.push({
            interviewId,
            id: "hidden_end",
            start: extractEnd,
            length: maxIndex - extractEnd,
            class: "hidden extractEnd"
          });
        }
      }
      return out;
    });
    function textSelection(data) {
      if (model.value) {
        model.value.startIndex = data.begin;
        model.value.endIndex = data.end;
      }
    }
    const __returned__ = { store, model, props, interview, contextText, getSpanClasses, initialLength, annotations, textSelection, AnnotatedText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = {
  key: 0,
  class: "descriptem-modification"
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.model ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
    _cache[0] || (_cache[0] = createBaseVNode("p", { class: "no-margin no-padding" }, "To modify the descriptem, select the new text and validate.", -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", { class: "text-italic no-margin no-padding" }, [
      createTextVNode("The "),
      createBaseVNode("u", null, "original descriptem"),
      createTextVNode(" is underlined, the "),
      createBaseVNode("b", null, "new selection"),
      createTextVNode(" is bold.")
    ], -1)),
    createVNode($setup["AnnotatedText"], {
      class: "textAnnotationComponent",
      text: $setup.contextText,
      annotations: $setup.annotations,
      getSpanClasses: $setup.getSpanClasses,
      clearSelection: "",
      onSelection: $setup.textSelection
    }, null, 8, ["text", "annotations"])
  ])) : createCommentVNode("", true);
}
const DescriptemModificationDialog = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-10e85d86"], ["__file", "DescriptemModificationDialog.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DescriptemRepresentation",
  props: {
    descriptemId: { type: String, default: "" },
    withContext: { type: Boolean, default: false },
    withMenu: { type: Boolean, default: true },
    isReadonly: { type: Boolean, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const istore = useInterfaceStore();
    const props = __props;
    const descriptem = computed(() => store.getDescriptem(props.descriptemId));
    const {
      highlightedDescriptemId
    } = storeToRefs(istore);
    function debug() {
      window.descriptem = descriptem.value;
      console.log("Descriptem", descriptem.value?.toJSON());
    }
    function setHighlighted() {
      if (highlightedDescriptemId.value === props.descriptemId) {
        highlightedDescriptemId.value = "";
      } else {
        highlightedDescriptemId.value = props.descriptemId;
      }
    }
    const context = computed(() => {
      if (descriptem.value && descriptem.value.justification) {
        const parent = store.getJustificationParent(descriptem.value.justification.parentId);
        if (parent) {
          return parent.asContext;
        } else {
          return {};
        }
      } else {
        return {};
      }
    });
    const descriptemJson = computed({
      get: () => descriptem.value?.toJSON() ?? {},
      set: (value) => {
        store.updateDescriptem(props.descriptemId, {
          startIndex: value.startIndex,
          endIndex: value.endIndex
        });
      }
    });
    function jumpToMoment(identifier) {
      istore.setHighlightedMomentId(identifier);
    }
    const menuActions = [
      ["Duplicate", () => store.duplicateDescriptem(props.descriptemId)],
      ["Delete", () => store.deleteDescriptem(props.descriptemId)]
    ];
    const __returned__ = { store, istore, props, descriptem, highlightedDescriptemId, debug, setHighlighted, context, descriptemJson, jumpToMoment, menuActions, DescriptemModificationDialog, DragElement, ElementMenu };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = ["data-descriptem", "title"];
const _hoisted_2$3 = { class: "descriptem-label" };
const _hoisted_3$3 = {
  key: 0,
  class: "descriptem-context"
};
const _hoisted_4$3 = {
  key: 0,
  class: "context-item"
};
const _hoisted_5$2 = { class: "property-name" };
const _hoisted_6$2 = { class: "moment-name" };
const _hoisted_7$2 = {
  key: 1,
  class: "descriptem-menu"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.descriptem ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "descriptem",
    "data-descriptem": $setup.descriptem.id,
    title: $setup.descriptem.text
  }, [
    createVNode($setup["DragElement"], {
      type: "descriptem",
      class: "descriptem-header",
      data: $props.descriptemId
    }, {
      default: withCtx(() => [
        createVNode(QIcon, {
          ref: "handle",
          class: "descriptem-handle",
          size: "xs",
          onClick: [
            withModifiers($setup.debug, ["meta"]),
            $setup.setHighlighted
          ],
          name: "mdi-format-quote-close-outline"
        }, null, 512),
        createBaseVNode("span", null, [
          createBaseVNode("span", _hoisted_2$3, toDisplayString($setup.descriptem.text), 1),
          !$props.isReadonly ? (openBlock(), createBlock(QPopupEdit, {
            key: 0,
            title: "Select the appropriate text fragment",
            buttons: "",
            modelValue: $setup.descriptemJson,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.descriptemJson = $event)
          }, {
            default: withCtx((scope) => [
              createVNode($setup["DescriptemModificationDialog"], {
                modelValue: scope.value,
                "onUpdate:modelValue": ($event) => scope.value = $event,
                initial: scope.initialValue
              }, null, 8, ["modelValue", "onUpdate:modelValue", "initial"])
            ]),
            _: 1
          }, 8, ["modelValue"])) : createCommentVNode("", true)
        ]),
        createVNode(QSpace),
        $props.withContext ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
          $setup.context.specificsynchroniccategory ? (openBlock(), createElementBlock("span", _hoisted_4$3, [
            createVNode(QIcon, {
              size: "xs",
              name: "mdi-alpha-s-box-outline"
            }),
            createBaseVNode("div", _hoisted_5$2, toDisplayString($setup.context.specificsynchroniccategory.name), 1)
          ])) : createCommentVNode("", true),
          $setup.context.moment ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: "context-item",
            onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.jumpToMoment($setup.context.moment.id), ["stop"]))
          }, [
            createVNode(QIcon, {
              size: "xs",
              name: "mdi-alpha-d-box-outline"
            }),
            createBaseVNode("span", _hoisted_6$2, toDisplayString($setup.context.moment.name), 1)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        $props.withMenu ? (openBlock(), createElementBlock("div", _hoisted_7$2, [
          createVNode(QSpace),
          createVNode($setup["ElementMenu"], { actions: $setup.menuActions })
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["data"])
  ], 8, _hoisted_1$3)) : createCommentVNode("", true);
}
const DescriptemRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-e00033da"], ["__file", "DescriptemRepresentation.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "JustificationRepresentation",
  props: {
    justificationId: { type: String, default: "" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const props = __props;
    const justification = computed(() => store.getJustification(props.justificationId));
    const __returned__ = { store, props, justification, DescriptemRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = ["data-justification"];
const _hoisted_2$2 = { class: "justification-metadata" };
const _hoisted_3$2 = { class: "justification-name" };
const _hoisted_4$2 = { class: "justification-descriptems" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.justificationId ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "justification",
    "data-justification": $props.justificationId
  }, [
    createBaseVNode("div", _hoisted_2$2, [
      createBaseVNode("span", _hoisted_3$2, toDisplayString($setup.justification?.name), 1)
    ]),
    createBaseVNode("ul", _hoisted_4$2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.justification?.descriptems, (descriptem) => {
        return openBlock(), createElementBlock("li", {
          key: descriptem.id
        }, [
          createVNode($setup["DescriptemRepresentation"], {
            descriptemId: descriptem.id
          }, null, 8, ["descriptemId"])
        ]);
      }), 128))
    ])
  ], 8, _hoisted_1$2)) : createCommentVNode("", true);
}
const JustificationRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-5c575cb8"], ["__file", "JustificationRepresentation.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DropZone",
  props: {
    data: {
      type: String,
      default: ""
    },
    // Data types that are supposed to be valid.
    // Space-separated list of data-types
    types: {
      type: String,
      default: ""
    }
  },
  emits: [
    "annotation",
    "descriptem",
    "selection",
    "color",
    "moment",
    "project",
    "specificsynchroniccategory",
    "genericsynchroniccategory"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const props = __props;
    const validTypes = computed(() => {
      return props.types.split(/ +/);
    });
    function hasValidType(event) {
      if (!validTypes.value) {
        return true;
      }
      if (!event.dataTransfer) {
        return false;
      }
      const types = [...event.dataTransfer.types];
      for (const t of validTypes.value) {
        if (types.includes(t)) {
          return true;
        }
      }
      return false;
    }
    function onDragOver(event) {
      if (hasValidType(event) && event.currentTarget) {
        event.currentTarget.classList.add("is_droppable");
      }
    }
    function onDragLeave(event) {
      if (event.currentTarget) {
        event.currentTarget.classList.remove("is_droppable");
      }
    }
    function onDrop(event) {
      onDragLeave(event);
      const dt = event.dataTransfer;
      if (!dt) {
        return;
      }
      for (const dragType of dt.types) {
        if (dragType.startsWith("upmt/")) {
          const payload = dt.getData(dragType);
          const itemType = dragType.replace("upmt/", "");
          emit(itemType, payload, props.data, event);
        }
      }
    }
    const __returned__ = { emit, props, validTypes, hasValidType, onDragOver, onDragLeave, onDrop };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "dropzone",
    onDrop: _cache[0] || (_cache[0] = ($event) => $setup.onDrop($event)),
    onDragover: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.onDragOver($event), ["prevent"])),
    onDragleave: _cache[2] || (_cache[2] = withModifiers(($event) => $setup.onDragLeave($event), ["prevent"])),
    onDragenter: _cache[3] || (_cache[3] = withModifiers(() => {
    }, ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 32);
}
const DropZone = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "DropZone.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CategoryNameInput",
  props: {
    category: { type: SpecificSynchronicCategory, default: null },
    genericGraphs: { type: Object, default: null }
  },
  emits: ["change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const store = useProjectStore();
    const emit = __emit;
    const props = __props;
    const name = ref(props.category.name);
    const newChildren = ref([]);
    const completions = ref([]);
    const childrenNames = computed(() => new Set(props.category?.children.map((c) => c.name) ?? []));
    function validate() {
      if (props.category) {
        const genericSource = props.genericGraphs ? props.genericGraphs.byName[props.category.parentHash(name.value)] : {};
        const abstractionType = genericSource?.abstractionType || "";
        store.updateElement(props.category, { name: name.value, abstractionType });
      }
      newChildren.value.forEach((n) => {
        const genericSource = props.genericGraphs ? props.genericGraphs.byName[props.category.parentHash(n)] : {};
        const abstractionType = genericSource?.abstractionType || "";
        store.addSpecificSynchronicCategory(
          n,
          props.category.specificsynchronicmodelId,
          `in:${props.category.id}`,
          null,
          abstractionType
        );
      });
      newChildren.value = [];
      emit("change", name.value);
    }
    function cancel() {
      emit("change", props.category.name);
    }
    const context = computed(() => {
      const categories = store.getSpecificSynchronicCategoriesByName(props.category.projectId, name.value);
      const completions2 = store.getSpecificSynchronicCategoryNamesByPrefix(props.category.projectId, name.value);
      if (!categories.length) {
        return {
          original: true,
          completions: completions2
        };
      } else {
        const children = Object.fromEntries(categories.map((c) => c.children.map((child) => [child.name, child])).flat());
        const parents = Object.fromEntries(categories.filter((c) => c.parent).map((c) => [c.parent?.name, c.parent]));
        return {
          reference: categories[0],
          children: [...Object.values(children)],
          parents: [...Object.values(parents)],
          completions: completions2
        };
      }
    });
    function isCurrentChild(name2) {
      return childrenNames.value.has(name2);
    }
    function isCurrentParent(name2) {
      return props.category.parent?.name == name2;
    }
    function isCurrentName(name2) {
      return props.category?.name === name2;
    }
    function setName(value) {
      name.value = value;
    }
    function filterNames(_val, update) {
      update(() => {
        completions.value = context.value?.completions ?? [];
      });
    }
    const __returned__ = { store, emit, props, name, newChildren, completions, childrenNames, validate, cancel, context, isCurrentChild, isCurrentParent, isCurrentName, setName, filterNames, SpecificSynchronicCategoryRelation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "context"
};
const _hoisted_2$1 = {
  key: 1,
  class: "context"
};
const _hoisted_3$1 = { class: "children" };
const _hoisted_4$1 = ["title"];
const _hoisted_5$1 = { class: "child-category-name" };
const _hoisted_6$1 = { class: "relation" };
const _hoisted_7$1 = ["title"];
const _hoisted_8$1 = { class: "parents" };
const _hoisted_9$1 = ["title"];
const _hoisted_10$1 = { class: "row wrap justify-between" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    $setup.context.original ? (openBlock(), createElementBlock("div", _hoisted_1$1, [..._cache[2] || (_cache[2] = [
      createBaseVNode("em", null, "Nom original", -1)
    ])])) : (openBlock(), createElementBlock("div", _hoisted_2$1, [
      createBaseVNode("div", _hoisted_3$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.context.children, (c) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["category", { "has-child": $setup.isCurrentChild(c.name) }]),
            title: c.name,
            key: c.id
          }, [
            !$setup.isCurrentChild(c.name) ? (openBlock(), createBlock(QCheckbox, {
              key: 0,
              size: "10pt",
              modelValue: $setup.newChildren,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.newChildren = $event),
              val: c.name
            }, null, 8, ["modelValue", "val"])) : createCommentVNode("", true),
            createBaseVNode("span", _hoisted_5$1, toDisplayString(c.name), 1)
          ], 10, _hoisted_4$1);
        }), 128))
      ]),
      createBaseVNode("div", _hoisted_6$1, [
        $setup.context.reference ? (openBlock(), createBlock($setup["SpecificSynchronicCategoryRelation"], {
          key: 0,
          type: $setup.context.reference.abstractionType,
          childrenCount: $setup.context.children.length
        }, null, 8, ["type", "childrenCount"])) : createCommentVNode("", true)
      ]),
      $setup.context.reference ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["category reference", { "is-current": $setup.isCurrentName($setup.context.reference.name) }]),
        title: $setup.context.reference.name
      }, toDisplayString($setup.context.reference.name), 11, _hoisted_7$1)) : createCommentVNode("", true),
      createBaseVNode("div", _hoisted_8$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.context.parents, (parent) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["category parent", { "has-parent": $setup.isCurrentParent(parent?.name) }]),
            title: parent?.name ?? "",
            key: parent?.id ?? ""
          }, toDisplayString(parent?.name ?? ""), 11, _hoisted_9$1);
        }), 128))
      ])
    ])),
    createVNode(QSelect, {
      dense: "",
      onFocus: _cache[1] || (_cache[1] = ($event) => $event.target.select()),
      filled: "",
      "model-value": $setup.name,
      "use-input": "",
      "hide-selected": "",
      "fill-input": "",
      "menu-anchor": "top right",
      "input-debounce": 0,
      options: $setup.context?.completions ?? [],
      onFilter: $setup.filterNames,
      onInputValue: $setup.setName,
      onKeyup: withKeys($setup.validate, ["enter"]),
      autofocus: ""
    }, {
      "no-option": withCtx(() => [
        createVNode(QItem, null, {
          default: withCtx(() => [
            createVNode(QItemSection, { class: "text-grey" }, {
              default: withCtx(() => [..._cache[3] || (_cache[3] = [
                createTextVNode(" No results ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model-value", "options"]),
    createBaseVNode("div", _hoisted_10$1, [
      createVNode(QBtn, {
        flat: "",
        size: "sm",
        onClick: $setup.cancel
      }, {
        default: withCtx(() => [..._cache[4] || (_cache[4] = [
          createTextVNode("Cancel", -1)
        ])]),
        _: 1
      }),
      createVNode(QBtn, {
        flat: "",
        size: "sm",
        onClick: $setup.validate
      }, {
        default: withCtx(() => [..._cache[5] || (_cache[5] = [
          createTextVNode("OK", -1)
        ])]),
        _: 1
      })
    ])
  ], 64);
}
const CategoryNameInput = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-410e150c"], ["__file", "CategoryNameInput.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SpecificSynchronicCategoryRepresentation",
  props: {
    categoryId: { type: String, default: "" },
    genericGraphs: { type: Object, default: null },
    layout: { type: String, default: "horizontal" },
    // horizontal or vertical
    hideJustifications: { type: Boolean, default: false },
    isGeneric: { type: Boolean, default: false },
    withChildren: { type: Boolean, default: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const $q = useQuasar();
    const istore = useInterfaceStore();
    const store = useProjectStore();
    const { currentProjectId } = storeToRefs(istore);
    const props = __props;
    const category = computed(() => store.getSpecificSynchronicCategory(props.categoryId));
    const categoryName = computed({
      get() {
        return category.value ? category.value.name : "";
      },
      set(value) {
        const fullName = category.value?.parentHash(value) ?? value;
        const genericSource = props.genericGraphs ? props.genericGraphs.byName[fullName] : {};
        const abstractionType = genericSource?.abstractionType || "";
        store.updateSpecificSynchronicCategory(props.categoryId, { name: value, abstractionType });
      }
    });
    const categoryColor = computed({
      get() {
        return category.value ? category.value.color : "";
      },
      set(color) {
        if (color == "#ffffff") {
          color = "";
        }
        store.updateSynchronicCategoryColor(category.value?.projectId, category.value?.name, color);
      }
    });
    const categoryIcon = computed(() => props.isGeneric ? "mdi-alpha-s-box" : "mdi-alpha-s-box-outline");
    const criterion = computed({
      get: () => category.value?.criterion ?? "",
      set: (value) => {
        store.updateSpecificSynchronicCategory(props.categoryId, { criterion: value });
      }
    });
    const isLeaf = computed(() => {
      return !category.value?.children.length;
    });
    const isVertical = computed(() => props.layout == "vertical");
    const displayJustification = ref(false);
    const isJustificationVisible = computed(() => {
      return category.value?.justification?.descriptems?.length && displayJustification.value;
    });
    const categoryDescriptems = computed(() => {
      if (!category.value || !currentProjectId.value) {
        return [];
      }
      if (props.isGeneric) {
        const categories = store.getSpecificSynchronicCategoriesByName(currentProjectId.value, category.value.name);
        return categories.map((cat) => cat.justification?.descriptems || []).flat();
      } else {
        return category.value?.justification?.descriptems || [];
      }
    });
    const categoryDescriptemCount = computed(() => {
      return categoryDescriptems.value.length;
    });
    if (isLeaf.value) {
      displayJustification.value = !props.hideJustifications || categoryDescriptemCount.value > 0;
    }
    const genericElement = computed(() => {
      if (category.value && props.genericGraphs) {
        return props.genericGraphs.byName[category.value.fullName] || { childrenNames: /* @__PURE__ */ new Set() };
      }
      return {};
    });
    const proposedChildrenNames = computed(() => {
      const currentChildren = new Set((category.value?.children || []).map((child) => child.fullName));
      const childrenNames = [...genericElement.value.childrenNames.difference(currentChildren)].toSorted();
      return [
        ["New child category", ""],
        ...childrenNames.map((name) => [name, stripHashname(name)])
      ];
    });
    function debug() {
      window.category = category.value;
      console.log("SpecificSynchronicCategory", { category: category.value });
    }
    function showContent() {
      console.log("Should expand SSC");
    }
    function createSpecificSynchronicCategory(where, name = "") {
      if (category.value) {
        if (!name) {
          name = istore.newSSCId();
        }
        const fullName = category.value.parentHash(name);
        const genericSource = props.genericGraphs ? props.genericGraphs.byName[fullName] : {};
        const abstractionType = genericSource?.abstractionType || "";
        store.addSpecificSynchronicCategory(
          name,
          category.value.specificsynchronicmodelId,
          where,
          null,
          abstractionType
        );
        showContent();
      }
    }
    function droppedSpecificSynchronicCategory(categoryId) {
      if (!categoryId) {
        createSpecificSynchronicCategory(`in:${props.categoryId}`);
      }
      const source = store.getSpecificSynchronicCategory(categoryId);
      if (categoryId !== props.categoryId && source) {
        const specificsynchronicmodelId = source.specificsynchronicmodelId;
        if (specificsynchronicmodelId) {
          source.children.forEach((child) => store.updateSpecificSynchronicCategory(child.id, {
            specificsynchronicmodelId,
            parentId: null
          }));
        }
        store.updateSpecificSynchronicCategory(categoryId, {
          specificsynchronicmodelId: null,
          parentId: props.categoryId
        });
      }
    }
    function droppedGenericSynchronicCategory(categoryName2, where) {
      if (where === "add") {
        where = `in:${props.categoryId}`;
      }
      if (category.value) {
        const genericSource = props.genericGraphs ? props.genericGraphs.byName[categoryName2] : {};
        const abstractionType = genericSource?.abstractionType || "";
        store.addSpecificSynchronicCategory(
          stripHashname(categoryName2),
          category.value.specificsynchronicmodelId,
          where,
          null,
          abstractionType
        );
        showContent();
      }
    }
    function droppedDescriptem(descriptemId) {
      const descriptem = store.getDescriptem(descriptemId);
      if (descriptem) {
        store.addTextSelectionToSpecificSynchronicCategory(descriptem.toJSON(), props.categoryId);
        store.deleteDescriptem(descriptemId);
      }
    }
    function droppedAnnotation(annotationId) {
      const annotation = store.getAnnotation(annotationId);
      if (annotation) {
        store.addTextSelectionToSpecificSynchronicCategory(annotation.toJSON(), props.categoryId);
      }
    }
    function droppedSelection(selectionData) {
      try {
        const selection = JSON.parse(selectionData);
        store.addTextSelectionToSpecificSynchronicCategory(selection, props.categoryId);
      } catch (e) {
        console.log(`Cannot parse ${selectionData}: ${e}`);
      }
    }
    function droppedColor(color) {
      store.updateSynchronicCategoryColor(category.value?.projectId, category.value?.name, color);
    }
    function droppedCreatingDescriptem(descriptemId, where) {
      const descriptem = store.getDescriptem(descriptemId);
      if (descriptem && category.value) {
        store.addSpecificSynchronicCategory(
          istore.newSSCId(),
          category.value.specificsynchronicmodelId,
          where,
          descriptem.toJSON()
        );
        showContent();
      }
    }
    function droppedCreatingAnnotation(annotationId, where) {
      const annotation = store.getAnnotation(annotationId);
      if (annotation && category.value) {
        store.addSpecificSynchronicCategory(
          istore.newSSCId(),
          category.value.specificsynchronicmodelId,
          where,
          annotation.toJSON()
        );
        showContent();
      }
    }
    function droppedCreatingSelection(selectionData, where) {
      try {
        const selection = JSON.parse(selectionData);
        if (selection && category.value) {
          store.addSpecificSynchronicCategory(
            istore.newSSCId(),
            category.value.specificsynchronicmodelId,
            where,
            selection
          );
          showContent();
        }
      } catch (e) {
        console.log(`Cannot parse ${selectionData}: ${e}`);
      }
    }
    function updateAbstractionType(value) {
      store.updateSpecificSynchronicCategory(props.categoryId, { abstractionType: value });
    }
    function createChildCategory(name = "") {
      createSpecificSynchronicCategory(`in:${props.categoryId}`, name);
    }
    function criterionPopup() {
      const criterion2 = category.value?.criterion || "";
      $q.dialog({
        title: "Enter a criterion for this relation",
        html: true,
        message: "You can specify a criterion for this relation or the associated category.",
        prompt: {
          model: criterion2,
          type: "text"
          // optional
        },
        cancel: true,
        persistent: true
      }).onOk((newValue) => {
        if (newValue) {
          store.updateSpecificSynchronicCategory(props.categoryId, { criterion: newValue });
        }
      });
    }
    const menuActions = [
      ["Delete this category only", () => store.deleteSpecificSynchronicCategory(props.categoryId, false)],
      ["Delete this category and its children", () => store.deleteSpecificSynchronicCategory(props.categoryId, true)]
    ];
    const relationActions = [
      ["Create a new child category", () => createChildCategory()],
      ["Set as generic abstraction", () => updateAbstractionType("")],
      ["Set as aggregation abstraction ⋄", () => updateAbstractionType("aggregation")],
      ["Set as specialization abstraction ⧍", () => updateAbstractionType("specialization")],
      ["Define a criterion for this abstraction relation", () => criterionPopup()]
    ];
    const __returned__ = { $q, istore, store, currentProjectId, props, category, categoryName, categoryColor, categoryIcon, criterion, isLeaf, isVertical, displayJustification, isJustificationVisible, categoryDescriptems, categoryDescriptemCount, genericElement, proposedChildrenNames, debug, showContent, createSpecificSynchronicCategory, droppedSpecificSynchronicCategory, droppedGenericSynchronicCategory, droppedDescriptem, droppedAnnotation, droppedSelection, droppedColor, droppedCreatingDescriptem, droppedCreatingAnnotation, droppedCreatingSelection, updateAbstractionType, createChildCategory, criterionPopup, menuActions, relationActions, DescriptemRepresentation, JustificationRepresentation, DropZone, DragElement, CategoryNameInput, ColorizeIcon, NoteIcon, ElementMenu, SpecificSynchronicCategoryRelation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["data-specificsynchroniccategory"];
const _hoisted_2 = ["data-specificsynchroniccategory"];
const _hoisted_3 = {
  key: 0,
  class: /* @__PURE__ */ normalizeClass(["specificsynchroniccategory-children"])
};
const _hoisted_4 = {
  key: 0,
  class: "specificsynchroniccategory-justification"
};
const _hoisted_5 = {
  key: 0,
  class: "justification-descriptems"
};
const _hoisted_6 = { class: "specificsynchroniccategory-relation" };
const _hoisted_7 = { class: "specificsynchroniccategory-relationinfo" };
const _hoisted_8 = { class: "specificsynchroniccategory-criterion" };
const _hoisted_9 = {
  key: 0,
  class: "criterion-tooltip"
};
const _hoisted_10 = { class: "specificsynchroniccategory-name" };
const _hoisted_11 = { class: "element-toolbar" };
const _hoisted_12 = { class: "element-toolbar-secondary on-name-hover" };
const _hoisted_13 = {
  key: 2,
  class: "specificsynchroniccategory-filler"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SpecificSynchronicCategoryRepresentation = resolveComponent("SpecificSynchronicCategoryRepresentation", true);
  return openBlock(), createElementBlock("div", {
    ref: "container",
    class: normalizeClass([
      "specificsynchroniccategory-container",
      `specificsynchroniccategory-${$props.categoryId}`,
      $props.layout
    ]),
    "data-specificsynchroniccategory": $props.categoryId
  }, [
    $setup.category ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["specificsynchroniccategory"]),
      style: normalizeStyle({ backgroundColor: $setup.category.color || "transparent" }),
      "data-specificsynchroniccategory": $props.categoryId
    }, [
      $props.withChildren ? (openBlock(), createElementBlock("div", _hoisted_3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.category.children, (c) => {
          return openBlock(), createBlock(_component_SpecificSynchronicCategoryRepresentation, {
            key: c.id,
            isGeneric: $props.isGeneric,
            genericGraphs: $props.genericGraphs,
            layout: $props.layout,
            withChildren: $props.withChildren,
            hideJustifications: $props.hideJustifications,
            categoryId: c.id
          }, null, 8, ["isGeneric", "genericGraphs", "layout", "withChildren", "hideJustifications", "categoryId"]);
        }), 128))
      ])) : createCommentVNode("", true),
      createVNode($setup["DropZone"], {
        data: "add",
        types: "upmt/descriptem upmt/annotation upmt/selection",
        class: "row justify-center",
        onAnnotation: $setup.droppedAnnotation,
        onSelection: $setup.droppedSelection,
        onDescriptem: $setup.droppedDescriptem
      }, {
        default: withCtx(() => [
          $setup.isJustificationVisible ? (openBlock(), createElementBlock("div", _hoisted_4, [
            $props.isGeneric ? (openBlock(), createElementBlock("ul", _hoisted_5, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.categoryDescriptems, (descriptem) => {
                return openBlock(), createElementBlock("li", {
                  key: descriptem.id
                }, [
                  createVNode($setup["DescriptemRepresentation"], {
                    descriptemId: descriptem.id,
                    withMenu: false,
                    isReadonly: true
                  }, null, 8, ["descriptemId"])
                ]);
              }), 128))
            ])) : (openBlock(), createBlock($setup["JustificationRepresentation"], {
              key: 1,
              justificationId: $setup.category.justification?.id ?? ""
            }, null, 8, ["justificationId"]))
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      }),
      createVNode($setup["DropZone"], {
        data: `in:${$props.categoryId}`,
        types: "upmt/specificsynchroniccategory upmt/genericsynchroniccategory upmt/selection upmt/descriptem upmt/annotation",
        onAnnotation: $setup.droppedCreatingAnnotation,
        onSelection: $setup.droppedCreatingSelection,
        onDescriptem: $setup.droppedCreatingDescriptem
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_6, [
            createVNode($setup["SpecificSynchronicCategoryRelation"], {
              type: $setup.category.abstractionType,
              direction: $props.layout,
              childrenCount: $setup.category.children.length
            }, null, 8, ["type", "direction", "childrenCount"]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createTextVNode(toDisplayString($setup.criterion) + " ", 1),
                createVNode(QTooltip, {
                  flat: "",
                  dense: ""
                }, {
                  default: withCtx(() => [
                    $setup.criterion ? (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString($setup.criterion), 1)) : createCommentVNode("", true),
                    _cache[5] || (_cache[5] = createTextVNode(" Criterion ", -1))
                  ]),
                  _: 1
                }),
                createVNode(QPopupEdit, {
                  modelValue: $setup.criterion,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.criterion = $event),
                  "auto-save": "",
                  buttons: ""
                }, {
                  default: withCtx((scope) => [
                    createVNode(QInput, {
                      label: "Criterion",
                      type: "textarea",
                      modelValue: scope.value,
                      "onUpdate:modelValue": ($event) => scope.value = $event,
                      onKeyup: [
                        withKeys(withModifiers(scope.set, ["ctrl"]), ["enter"]),
                        withKeys(scope.cancel, ["esc"])
                      ],
                      dense: "",
                      autogrow: "",
                      autofocus: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              createVNode($setup["ElementMenu"], {
                class: "specificsynchroniccategory-relationmenu",
                actions: $setup.relationActions
              }),
              createVNode(QBtn, {
                class: "print-removed",
                size: "xs",
                flat: "",
                round: "",
                dense: "",
                title: "Create a new child category",
                icon: "mdi-plus"
              }, {
                default: withCtx(() => [
                  createVNode(QMenu, { "touch-position": "" }, {
                    default: withCtx(() => [
                      createVNode(QList, {
                        dense: "",
                        style: { "min-width": "100px" }
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.proposedChildrenNames, ([label, name], i) => {
                            return withDirectives((openBlock(), createBlock(QItem, {
                              clickable: "",
                              key: i,
                              onClick: withModifiers(($event) => $setup.createChildCategory(name), ["stop"])
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(label), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])), [
                              [ClosePopup]
                            ]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      }, 8, ["data"]),
      createVNode($setup["DropZone"], {
        data: "add",
        types: "upmt/specificsynchroniccategory upmt/genericsynchroniccategory upmt/selection upmt/descriptem upmt/annotation upmt/color",
        class: "row justify-center",
        onSpecificsynchroniccategory: $setup.droppedSpecificSynchronicCategory,
        onGenericsynchroniccategory: $setup.droppedGenericSynchronicCategory,
        onAnnotation: $setup.droppedAnnotation,
        onSelection: $setup.droppedSelection,
        onDescriptem: $setup.droppedDescriptem,
        onColor: $setup.droppedColor
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(["specificsynchroniccategory-header", { "has-error": $setup.genericElement.errors?.length }])
          }, [
            createVNode($setup["DragElement"], {
              type: "specificsynchroniccategory",
              data: $props.categoryId,
              onClick: withModifiers($setup.debug, ["meta"])
            }, {
              default: withCtx(() => [
                createVNode(QIcon, {
                  size: "xs",
                  name: $setup.categoryIcon
                }, null, 8, ["name"]),
                createBaseVNode("span", _hoisted_10, [
                  createTextVNode(toDisplayString($setup.categoryName) + " ", 1),
                  createVNode(QPopupEdit, {
                    modelValue: $setup.categoryName,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.categoryName = $event),
                    "auto-save": ""
                  }, {
                    default: withCtx((scope) => [
                      createVNode($setup["CategoryNameInput"], {
                        onChange: scope.cancel,
                        genericGraphs: $props.genericGraphs,
                        category: $setup.category
                      }, null, 8, ["onChange", "genericGraphs", "category"])
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                $setup.genericElement.errors?.length ? (openBlock(), createBlock(QTooltip, {
                  key: 0,
                  class: "bg-red-5",
                  anchor: "top right",
                  self: "top left"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.categoryName) + " ", 1),
                    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.genericElement.errors, (error, key) => {
                      return openBlock(), createElementBlock("div", { key }, toDisplayString(error), 1);
                    }), 128))
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(QTooltip, { key: 1 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($setup.categoryName) + " (" + toDisplayString($props.isGeneric ? "Generic Synchronic Category" : "Specific Synchronic Category"), 1)
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["data"]),
            createBaseVNode("div", _hoisted_11, [
              createVNode(QBadge, {
                onClick: _cache[2] || (_cache[2] = ($event) => $setup.displayJustification = !$setup.displayJustification),
                class: "descriptems-badge",
                color: "grey-6",
                title: `${$setup.categoryDescriptemCount} descriptems`,
                rounded: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString($setup.categoryDescriptemCount), 1)
                ]),
                _: 1
              }, 8, ["title"]),
              createVNode($setup["NoteIcon"], { element: $setup.category }, null, 8, ["element"]),
              createBaseVNode("div", _hoisted_12, [
                createVNode($setup["ColorizeIcon"], {
                  modelValue: $setup.categoryColor,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.categoryColor = $event)
                }, null, 8, ["modelValue"]),
                createVNode($setup["ElementMenu"], { actions: $setup.menuActions })
              ])
            ])
          ], 2)
        ]),
        _: 1
      }),
      $setup.category.specificsynchronicmodelId ? (openBlock(), createBlock($setup["DropZone"], {
        key: 1,
        data: `before:${$props.categoryId}`,
        types: "upmt/specificsynchroniccategory upmt/genericsynchroniccategory upmt/selection upmt/descriptem upmt/annotation",
        class: "empty-padding newssc-dropzone",
        onSpecificsynchroniccategory: $setup.droppedSpecificSynchronicCategory,
        onGenericsynchroniccategory: $setup.droppedGenericSynchronicCategory,
        onAnnotation: $setup.droppedCreatingAnnotation,
        onSelection: $setup.droppedCreatingSelection,
        onDescriptem: $setup.droppedCreatingDescriptem
      }, {
        default: withCtx(() => [
          createVNode(QBtn, {
            onClick: _cache[4] || (_cache[4] = ($event) => $setup.createSpecificSynchronicCategory(`before:${$props.categoryId}`)),
            dense: "",
            class: "newssc-button print-hidden",
            icon: $setup.isVertical ? "mdi-menu-up" : "mdi-menu-right"
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [..._cache[6] || (_cache[6] = [
                  createTextVNode("Create a parent category", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon"])
        ]),
        _: 1
      }, 8, ["data"])) : createCommentVNode("", true),
      $setup.category.parentId && $props.withChildren ? (openBlock(), createElementBlock("div", _hoisted_13, [
        createVNode($setup["SpecificSynchronicCategoryRelation"], {
          direction: $props.layout,
          childrenCount: 1
        }, null, 8, ["direction"])
      ])) : createCommentVNode("", true)
    ], 12, _hoisted_2)) : createCommentVNode("", true)
  ], 10, _hoisted_1);
}
const SpecificSynchronicCategoryRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2940c84e"], ["__file", "SpecificSynchronicCategoryRepresentation.vue"]]);
export {
  AnnotatedText as A,
  DropZone as D,
  GenericCategoriesOverview as G,
  JustificationRepresentation as J,
  QBadge as Q,
  SpecificSynchronicCategoryRepresentation as S,
  SpecificSynchronicCategoryRelation as a,
  DescriptemRepresentation as b,
  ANNOTATION_COLORS as c,
  groupBy as g,
  stripHashname as s
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbi1CaFhkLWdXRS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXcudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR2VuZXJpY0NhdGVnb3JpZXNPdmVydmlldy52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2JhZGdlL1FCYWRnZS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3V0aWwudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0ZWRUZXh0LnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2NyaXB0ZW1Nb2RpZmljYXRpb25EaWFsb2cudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0p1c3RpZmljYXRpb25SZXByZXNlbnRhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ecm9wWm9uZS52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeU5hbWVJbnB1dC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiY29udGFpbmVyXCJcbiAgICAgICBjbGFzcz1cInRyZWUtYm94XCJcbiAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9XCI+XG4gICAgPHN2Z1xuICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgIDxnIDpjbGFzcz1cImRpcmVjdGlvblwiXG4gICAgICAgICA6ZGF0YS1jaGlsZHJlbi1jb3VudD1cImNoaWxkcmVuQ291bnRcIj5cbiAgICAgICAgPGxpbmVcbiAgICAgICAgICB2LWlmPVwiY2hpbGRyZW5Db3VudCA+IDFcIlxuICAgICAgICAgIHZlY3Rvci1lZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuICAgICAgICAgIDp4MT1cIjBcIlxuICAgICAgICAgIDp5MT1cImJhclBvc2l0aW9uLnlcIlxuICAgICAgICAgIDp4Mj1cIjBcIlxuICAgICAgICAgIDp5Mj1cImRpbWVuc2lvbnMuaGVpZ2h0IC0gYmFyUG9zaXRpb24ueVwiXG4gICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgIDpzdHJva2Utd2lkdGg9XCJzdHJva2VXaWR0aFwiXG4gICAgICAgICAgY2xhc3M9XCJyZWxhdGlvbi1wZXJwZW5kaWN1bGFyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8bGluZVxuICAgICAgICAgIHZlY3Rvci1lZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuICAgICAgICAgIDp4MT1cIjBcIlxuICAgICAgICAgIDp5MT1cInBhcmVudFBvc2l0aW9uLnlcIlxuICAgICAgICAgIDp4Mj1cInBhcmVudFBvc2l0aW9uLnhcIlxuICAgICAgICAgIDp5Mj1cInBhcmVudFBvc2l0aW9uLnlcIlxuICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICA6c3Ryb2tlLXdpZHRoPVwic3Ryb2tlV2lkdGhcIlxuICAgICAgICAgIGNsYXNzPVwicmVsYXRpb24tbGluZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICB2ZWN0b3ItZWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICB2LWlmPVwiaXNBZ2dyZWdhdGlvblwiXG4gICAgICAgICAgOmQ9XCJgTSR7cGFyZW50UG9zaXRpb24ueH0gJHtwYXJlbnRQb3NpdGlvbi55fSBsIC0ke3N5bWJvbEhhbGZXaWR0aH0gLSR7c3ltYm9sSGFsZkhlaWdodH0gbCAtJHtzeW1ib2xIYWxmV2lkdGh9ICR7c3ltYm9sSGFsZkhlaWdodH0gbCAke3N5bWJvbEhhbGZXaWR0aH0gJHtzeW1ib2xIYWxmSGVpZ2h0fSBaYFwiXG4gICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgOnN0cm9rZS13aWR0aD1cInN0cm9rZVdpZHRoXCIgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICB2LWlmPVwiaXNTcGVjaWFsaXphdGlvblwiXG4gICAgICAgICAgOmQ9XCJgTSR7cGFyZW50UG9zaXRpb24ueH0gJHtwYXJlbnRQb3NpdGlvbi55fSBsIC0keyAyICogc3ltYm9sSGFsZldpZHRoIH0gLSR7MiAqIHN5bWJvbEhhbGZIZWlnaHR9IGwgMCAkezQgKiBzeW1ib2xIYWxmSGVpZ2h0fSBaYFwiXG4gICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgOnN0cm9rZS13aWR0aD1cInN0cm9rZVdpZHRoXCIgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICB2LWlmPVwiaXNQcm9wZXJ0eVwiXG4gICAgICAgICAgOmQ9XCJgTSR7cGFyZW50UG9zaXRpb24ueCAtIHN5bWJvbEhhbGZXaWR0aH0gJHtwYXJlbnRQb3NpdGlvbi55IC0gc3ltYm9sSGFsZkhlaWdodH0gbCAke3N5bWJvbEhhbGZXaWR0aH0gJHtzeW1ib2xIYWxmSGVpZ2h0fSBsIC0ke3N5bWJvbEhhbGZXaWR0aH0gJHtzeW1ib2xIYWxmSGVpZ2h0fWBcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgOnN0cm9rZS13aWR0aD1cInN0cm9rZVdpZHRoXCIgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IHJlZiwgcmVhY3RpdmUsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgY2hpbGRyZW5Db3VudDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDEgfSxcbiAgICAgIGRpcmVjdGlvbjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdob3Jpem9udGFsJyB9LFxuICAgICAgdHlwZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfVxuICB9KVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IHJlZihudWxsKVxuICBjb25zdCBkaW1lbnNpb25zID0gcmVhY3RpdmUoe1xuICAgICAgd2lkdGg6IDEwMCxcbiAgICAgIGhlaWdodDogMTAwXG4gIH0pXG5cbiAgY29uc3Qgc3Ryb2tlV2lkdGggPSByZWYoMSlcblxuICBjb25zdCBzeW1ib2xIYWxmV2lkdGggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gMjBcbiAgfSlcblxuICBjb25zdCBzeW1ib2xIYWxmSGVpZ2h0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY291bnQgPSBwcm9wcy5jaGlsZHJlbkNvdW50XG4gICAgICByZXR1cm4gNiAvICgxLjA1ICoqIGNvdW50KVxuICB9KVxuXG4gIGNvbnN0IGlzQWdncmVnYXRpb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy50eXBlID09PSAnYWdncmVnYXRpb24nKVxuICBjb25zdCBpc1NwZWNpYWxpemF0aW9uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudHlwZSA9PT0gJ3NwZWNpYWxpemF0aW9uJylcbiAgY29uc3QgaXNQcm9wZXJ0eSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmNoaWxkcmVuQ291bnQgPT09IDApXG5cbiAgY29uc3QgcGFyZW50UG9zaXRpb24gPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgeDogZGltZW5zaW9ucy53aWR0aCxcbiAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0IC8gMlxuICB9KSlcblxuICBjb25zdCBiYXJQb3NpdGlvbiA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB4OiBkaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0IC8gcHJvcHMuY2hpbGRyZW5Db3VudCAvIDJcbiAgfSkpXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLnRyZWUtYm94IHN2ZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBnLnZlcnRpY2FsIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG4gIH1cbiAgZ1tkYXRhLWNoaWxkcmVuLWNvdW50PVwiMFwiXSAucmVsYXRpb24tbGluZSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAzO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgOmNsYXNzPVwiWyAnZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jb250YWluZXInLCBgZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS0ke2NhdGVnb3J5Lm5hbWV9YCBdXCJcbiAgICAgICA6ZGF0YS1nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5PVwiY2F0ZWdvcnkubmFtZVwiPlxuXG4gICAgPGRpdiBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnlcIlxuICAgICAgICAgOmNsYXNzPVwieyAncm9vdC1nZW5lcmljLXN5bmNocm9uaWMtY2F0ZWdvcnknOiBjYXRlZ29yeS5pc1Jvb3QgfVwiXG4gICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogY2F0ZWdvcnkuY29sb3IgfVwiXG4gICAgICAgICB2LWlmPVwiY2F0ZWdvcnlcIlxuICAgICAgICAgOmRhdGEtZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeT1cImNhdGVnb3J5Lm5hbWVcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW5cIj5cbiAgICAgICAgPGRpdiB2LWZvcj1cImMgaW4gY2F0ZWdvcnkuY2hpbGRyZW5cIiA6a2V5PVwiYy5uYW1lXCI+XG4gICAgICAgICAgPEdlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlPdmVydmlld1xuICAgICAgICAgICAgOnByb2plY3RJZD1cInByb2plY3RJZFwiXG4gICAgICAgICAgICA6bGF5b3V0PVwibGF5b3V0XCJcbiAgICAgICAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIlxuICAgICAgICAgICAgOmNhdGVnb3J5PVwiY1wiPlxuICAgICAgICAgIDwvR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvblwiXG4gICAgICAgICAgIHYtaWY9XCJjYXRlZ29yeS5jaGlsZHJlbj8ubGVuZ3RoXCI+XG4gICAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uXG4gICAgICAgICAgOnR5cGU9XCJhYnN0cmFjdGlvblR5cGVcIlxuICAgICAgICAgIDpkaXJlY3Rpb249XCJsYXlvdXRcIlxuICAgICAgICAgIDpjaGlsZHJlbkNvdW50PVwiY2F0ZWdvcnkuY2hpbGRyZW4/Lmxlbmd0aFwiPlxuICAgICAgICA8L1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyXCJcbiAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLWVycm9yJzogY2F0ZWdvcnkuZXJyb3JzPy5sZW5ndGggfVwiPlxuICAgICAgICA8RHJhZ0VsZW1lbnRcbiAgICAgICAgICBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICB0eXBlPVwiZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeVwiXG4gICAgICAgICAgOmRhdGE9XCJjYXRlZ29yeS5uYW1lXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWVcIj57eyBjYXRlZ29yeS5uYW1lIH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L0RyYWdFbGVtZW50PlxuICAgICAgICAgIDxxLXRvb2x0aXAgIGNsYXNzPVwiYmctcmVkLTVcIiBhbmNob3I9XCJ0b3AgcmlnaHRcIiBzZWxmPVwidG9wIGxlZnRcIiB2LWlmPVwiY2F0ZWdvcnkuZXJyb3JzPy5sZW5ndGhcIj5cbiAgICAgICAgICAgIHt7IGNhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJlcnJvciwga2V5IGluIGNhdGVnb3J5LmVycm9yc1wiXG4gICAgICAgICAgICAgICAgIDprZXk9XCJrZXlcIj5cbiAgICAgICAgICAgICAge3sgZXJyb3IgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgICAgIDxxLXRvb2x0aXAgYW5jaG9yPVwidG9wIHJpZ2h0XCIgc2VsZj1cInRvcCBsZWZ0XCIgdi1lbHNlPlxuICAgICAgICAgICAge3sgY2F0ZWdvcnkubmFtZSB9fVxuICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1pZj1cIiFjYXRlZ29yeS5pc1Jvb3RcIlxuICAgICAgICBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyXCJcbiAgICAgICAgPlxuICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvblxuICAgICAgICAgIDpkaXJlY3Rpb249XCJsYXlvdXRcIlxuICAgICAgICAgIDpjaGlsZHJlbkNvdW50PVwiMVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gIGltcG9ydCBEcmFnRWxlbWVudCBmcm9tICcuL0RyYWdFbGVtZW50LnZ1ZSdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24gZnJvbSAnLi9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uLnZ1ZSdcblxuICBpbXBvcnQgdHlwZSB7IEdlbmVyaWNDYXRlZ29yeSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG5cbiAgLy8gaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgLy8gY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IHByb3BzID0gd2l0aERlZmF1bHRzKGRlZmluZVByb3BzPHtcbiAgICAgIHByb2plY3RJZDogc3RyaW5nLFxuICAgICAgY2F0ZWdvcnk6ICBHZW5lcmljQ2F0ZWdvcnksXG4gICAgICBjdXJyZW50SW50ZXJ2aWV3SWQ6IHN0cmluZyB8IG51bGwsXG4gICAgICBsYXlvdXQ6IHN0cmluZ1xuICB9PigpLCB7XG4gICAgICBsYXlvdXQ6ICdob3Jpem9udGFsJ1xuICB9KVxuXG4gIC8vIEZJWE1FOiBkZXRlY3QgaW5jb25zaXN0ZW5jaWVzXG4gIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmNhdGVnb3J5Lmluc3RhbmNlc1swXT8uYWJzdHJhY3Rpb25UeXBlIHx8IFwiXCIpXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnkge1xuICAgICAgIG1hcmdpbjogMDtcbiAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICBmbGV4OiAxO1xuICAgICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAudmVydGljYWwgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICB9XG4gIC52ZXJ0aWNhbCAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB9XG4gIC52ZXJ0aWNhbCAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jb250YWluZXIge1xuICAgICAgbWFyZ2luOiAwIDRweDtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1uYW1lIHtcbiAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1vdmVydmlldy1mb250LXNpemUpO1xuICAgICAgd2lkdGg6IHZhcigtLW92ZXJ2aWV3LXdpZHRoKTtcbiAgICAgIGhlaWdodDogdmFyKC0tb3ZlcnZpZXctaGVpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uLFxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXIge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IGNhbGModmFyKC0tb3ZlcnZpZXctaGVpZ2h0KSArIDJweCk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgaGVpZ2h0OiAtbW96LWF2YWlsYWJsZTtcbiAgfVxuICAudmVydGljYWwgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb24ge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1vdmVydmlldy1oZWlnaHQpICsgMnB4KTtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLW92ZXJ2aWV3LWhlaWdodCkgKyAycHgpO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgZmxleDogMTtcbiAgfVxuICAudmVydGljYWwgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyLmhhcy1lcnJvciB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIH1cbiAgLnJvb3QtZ2VuZXJpYy1zeW5jaHJvbmljLWNhdGVnb3J5OmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZGRkO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZ2VuZXJpY2NhdGVnb3JpZXMtY29udGFpbmVyXCJcbiAgICAgICA6Y2xhc3M9XCJsYXlvdXRcIlxuICAgICAgIDprZXk9XCJwcm9qZWN0SWRcIlxuICAgICAgIDpkYXRhLXByb2plY3Q9XCJwcm9qZWN0SWRcIj5cblxuICAgIDxHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXdcbiAgICAgIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiXG4gICAgICA6a2V5PVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICA6cHJvamVjdElkPVwicHJvamVjdElkXCJcbiAgICAgIDpsYXlvdXQ9XCJsYXlvdXRcIlxuICAgICAgOmN1cnJlbnRJbnRlcnZpZXdJZD1cImN1cnJlbnRJbnRlcnZpZXdJZFwiXG4gICAgICA6Y2F0ZWdvcnk9XCJjYXRlZ29yeVwiPlxuICAgIDwvR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3PlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3IGZyb20gJy4vR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3LnZ1ZSdcblxuICBpbXBvcnQgdHlwZSB7IEdlbmVyaWNDYXRlZ29yeSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG5cbiAgaW50ZXJmYWNlIFByb3BzIHtcbiAgICAgIHByb2plY3RJZDogc3RyaW5nLFxuICAgICAgY2F0ZWdvcmllczogR2VuZXJpY0NhdGVnb3J5W10sXG4gICAgICBjdXJyZW50SW50ZXJ2aWV3SWQ6IHN0cmluZyxcbiAgICAgIGxheW91dDogc3RyaW5nXG4gIH1cblxuICB3aXRoRGVmYXVsdHMoZGVmaW5lUHJvcHM8UHJvcHM+KCksIHtcbiAgICAgIHByb2plY3RJZDogXCJcIixcbiAgICAgIGN1cnJlbnRJbnRlcnZpZXdJZDogXCJcIixcbiAgICAgIGxheW91dDogJ2hvcml6b250YWwnXG4gIH0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5nZW5lcmljY2F0ZWdvcmllcy1jb250YWluZXIgZGl2IHtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgfVxuICAgIC5nZW5lcmljY2F0ZWdvcmllcy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuZ2VuZXJpY2NhdGVnb3JpZXMtY29udGFpbmVyLnZlcnRpY2FsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICB9XG4gICAgIC5nZW5lcmljY2F0ZWdvcmllcy1jb250YWluZXIgPiAqIHtcbiAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgfVxuPC9zdHlsZT5cbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5jb25zdCBhbGlnblZhbHVlcyA9IFsgJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQmFkZ2UnLFxuXG4gIHByb3BzOiB7XG4gICAgY29sb3I6IFN0cmluZyxcbiAgICB0ZXh0Q29sb3I6IFN0cmluZyxcblxuICAgIGZsb2F0aW5nOiBCb29sZWFuLFxuICAgIHRyYW5zcGFyZW50OiBCb29sZWFuLFxuICAgIG11bHRpTGluZTogQm9vbGVhbixcbiAgICBvdXRsaW5lOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG5cbiAgICBsYWJlbDogWyBOdW1iZXIsIFN0cmluZyBdLFxuXG4gICAgYWxpZ246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBhbGlnblZhbHVlcy5pbmNsdWRlcyh2KVxuICAgIH1cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLmFsaWduICE9PSB2b2lkIDBcbiAgICAgICAgPyB7IHZlcnRpY2FsQWxpZ246IHByb3BzLmFsaWduIH1cbiAgICAgICAgOiBudWxsXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCB0ZXh0ID0gcHJvcHMub3V0bGluZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLmNvbG9yIHx8IHByb3BzLnRleHRDb2xvclxuICAgICAgICA6IHByb3BzLnRleHRDb2xvclxuXG4gICAgICByZXR1cm4gJ3EtYmFkZ2UgZmxleCBpbmxpbmUgaXRlbXMtY2VudGVyIG5vLXdyYXAnXG4gICAgICAgICsgYCBxLWJhZGdlLS0keyBwcm9wcy5tdWx0aUxpbmUgPT09IHRydWUgPyAnbXVsdGknIDogJ3NpbmdsZScgfS1saW5lYFxuICAgICAgICArIChwcm9wcy5vdXRsaW5lID09PSB0cnVlXG4gICAgICAgICAgPyAnIHEtYmFkZ2UtLW91dGxpbmUnXG4gICAgICAgICAgOiAocHJvcHMuY29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICAgICAgKVxuICAgICAgICArICh0ZXh0ICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgdGV4dCB9YCA6ICcnKVxuICAgICAgICArIChwcm9wcy5mbG9hdGluZyA9PT0gdHJ1ZSA/ICcgcS1iYWRnZS0tZmxvYXRpbmcnIDogJycpXG4gICAgICAgICsgKHByb3BzLnJvdW5kZWQgPT09IHRydWUgPyAnIHEtYmFkZ2UtLXJvdW5kZWQnIDogJycpXG4gICAgICAgICsgKHByb3BzLnRyYW5zcGFyZW50ID09PSB0cnVlID8gJyBxLWJhZGdlLS10cmFuc3BhcmVudCcgOiAnJylcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgcm9sZTogJ3N0YXR1cycsXG4gICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmxhYmVsXG4gICAgfSwgaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBwcm9wcy5sYWJlbCAhPT0gdm9pZCAwID8gWyBwcm9wcy5sYWJlbCBdIDogW10pKVxuICB9XG59KVxuIiwiY29uc3QgQU5OT1RBVElPTl9DT0xPUlMgPSBbXG4gICcjZmY5Nzk3JyxcbiAgJyM5ZWIyZGQnLFxuICAnI2ZmZGM5NycsXG4gICcjN2JjZjdiJ1xuXVxuXG4vKiFcbiAqIEdyb3VwIGl0ZW1zIGZyb20gYW4gYXJyYXkgdG9nZXRoZXIgYnkgc29tZSBjcml0ZXJpYSBvciB2YWx1ZS5cbiAqIChjKSAyMDE5IFRvbSBCcmVtbWVyIChodHRwczovL3RicmVtZXIuY29tLykgYW5kIENocmlzIEZlcmRpbmFuZGkgKGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbSksIE1JVCBMaWNlbnNlLFxuICogQHBhcmFtICB7QXJyYXl9ICAgICAgICAgICBhcnIgICAgICBUaGUgYXJyYXkgdG8gZ3JvdXAgaXRlbXMgZnJvbVxuICogQHBhcmFtICB7U3RyaW5nfEZ1bmN0aW9ufSBjcml0ZXJpYSBUaGUgY3JpdGVyaWEgdG8gZ3JvdXAgYnlcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAgVGhlIGdyb3VwZWQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGdyb3VwQnkgKGFycjogQXJyYXk8YW55PiwgY3JpdGVyaWE6IHN0cmluZ3wgKChpdGVtOiBhbnkpID0+IGFueSkpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgaXRlbSkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBjcml0ZXJpYSBpcyBhIGZ1bmN0aW9uIHRvIHJ1biBvbiB0aGUgaXRlbSBvciBhIHByb3BlcnR5IG9mIGl0XG4gICAgY29uc3Qga2V5ID0gdHlwZW9mIGNyaXRlcmlhID09PSAnZnVuY3Rpb24nID8gY3JpdGVyaWEoaXRlbSkgOiBpdGVtW2NyaXRlcmlhXVxuXG4gICAgLy8gSWYgdGhlIGtleSBkb2Vzbid0IGV4aXN0IHlldCwgY3JlYXRlIGl0XG4gICAgaWYgKCFPYmplY3QuaGFzT3duKG9iaiwga2V5KSkge1xuICAgICAgb2JqW2tleV0gPSBbXVxuICAgIH1cblxuICAgIC8vIFB1c2ggdGhlIHZhbHVlIHRvIHRoZSBvYmplY3RcbiAgICBvYmpba2V5XS5wdXNoKGl0ZW0pXG5cbiAgICAvLyBSZXR1cm4gdGhlIG9iamVjdCB0byB0aGUgbmV4dCBpdGVtIGluIHRoZSBsb29wXG4gICAgcmV0dXJuIG9ialxuICB9LCB7fSlcbn1cblxuZnVuY3Rpb24gY2xhbXAgKG51bWJlcjogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obnVtYmVyLCBtYXgpKTtcbn1cblxuZnVuY3Rpb24gc3RyaXBIYXNobmFtZSAobmFtZTogc3RyaW5nKSB7XG4gIC8vIFN0cmlwIHRoZSBoYXNobmFtZSBmcm9tIHRoZSBnaXZlbiBzdHJpbmcsIHJldHVybiB3aXRoIHRyYWlsaW5nICMgaWYgdGhlcmUgd2FzIG9uZS5cbiAgLy8gYW5kIGRvIG5vdCBzdHJpcCBhbnl0aGluZyBpZiB0aGUgIyBpcyBsZWFkaW5nXG4gIGNvbnN0IGhhc2hJbmRleCA9IG5hbWUuaW5kZXhPZignIycpXG4gIC8vIERvIG5vdCBzdHJpcCBpZiB0aGUgbmFtZSBzdGFydHMgd2l0aCBhICNcbiAgaWYgKGhhc2hJbmRleCA+IDEpIHtcbiAgICByZXR1cm4gbmFtZS5zdWJzdHIoMCwgaGFzaEluZGV4ICsgMSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmFtZVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIFRleHRTZWxlY3Rpb24gPSB7XG4gIHN0YXJ0SW5kZXg6IG51bWJlcixcbiAgZW5kSW5kZXg6IG51bWJlcixcbiAgaW50ZXJ2aWV3SWQ6IHN0cmluZyxcbiAgdGV4dD86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOYW1lZEFjdGlvbiA9IFtcbiAgbmFtZTogc3RyaW5nLFxuICBhY3Rpb246IChlbGVtZW50OiBhbnkpID0+IGFueSxcbiAgdG9vbHRpcD86IHN0cmluZ1xuXVxuXG5leHBvcnQgeyBBTk5PVEFUSU9OX0NPTE9SUywgZ3JvdXBCeSwgY2xhbXAsIHN0cmlwSGFzaG5hbWUgfVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidHJhbnNjcmlwdFwiXG4gICAgICAgcmVmPVwidHJhbnNjcmlwdFwiXG4gICAgICAgQG1vdXNldXA9XCJlbWl0U2VsZWN0aW9uXCI+XG4gICAgPHNwYW5cbiAgICAgIHYtZm9yPVwic3BhbiBpbiBzcGFuc1wiXG4gICAgICA6a2V5PVwic3Bhbi5pZFwiXG4gICAgICA6ZGF0YS1zcGFuLWlkPVwic3Bhbi5pZFwiXG4gICAgICA6ZGF0YS1hbm5vdGF0aW9uLWlkcz1cInNwYW4uYW5ub3RhdGlvbklkc1wiXG4gICAgICA6ZGF0YS10ZXh0LW9mZnNldD1cInNwYW4uc3RhcnRcIlxuICAgICAgOmNsYXNzPVwic3BhbkNsYXNzZXNbc3Bhbi5pZF1cIlxuICAgICAgOnN0eWxlPVwiZ2V0U3BhblN0eWxlKHNwYW4pXCJcbiAgICAgIHYtYmluZD1cInNwYW5BdHRyaWJ1dGVzXCJcbiAgICAgIHYtb249XCJwcmVwcGVkU3BhbkV2ZW50c1wiXG4gICAgICA+e3sgc3Bhbi50ZXh0IH19PC9zcGFuPlxuICAgIDxzbG90PlxuICAgIDwvc2xvdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICAvLyBAdHMtbm9jaGVja1xuICBjb25zdCBPVkVSTEFQUElOR19DT0xPUiA9IFwiI2RlYWRiYWJlXCJcblxuICAvLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Rlcmh1ZXJzdC9mbGF0dGVuLW92ZXJsYXBwaW5nLXJhbmdlcy9cbiAgLy8gSVNDIExpY2Vuc2VcbiAgLy8gQ29weXJpZ2h0IChjKSAyMDE4LCBKYW5uaXMgUlxuICAvLyBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlXG4gIC8vIGZvciBhbnkgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZFxuICAvLyB0aGF0IHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhclxuICAvLyBpbiBhbGwgY29waWVzLlxuICAvLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTExcbiAgLy8gV0FSUkFOVElFUyBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRFxuICAvLyBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIC8vIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUlxuICAvLyBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuICAvLyBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCxcbiAgLy8gTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOXG4gIC8vIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG5cbiAgY29uc3Qgc29ydGVkSW5zZXJ0ID0gKGFyciwgdmFsKSA9PiB7XG4gICAgICBjb25zdCBsID0gYXJyLmxlbmd0aFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAodmFsIDw9IGFycltpXSkge1xuICAgICAgICAgICAgICBhcnIuc3BsaWNlKGksIDAsIHZhbClcbiAgICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcnIucHVzaCh2YWwpXG4gICAgICByZXR1cm4gbFxuICB9XG5cbiAgY29uc3QgZmxhdHRlbiA9IChyYW5nZXMpID0+IHtcbiAgICAgIGNvbnN0IFNUQVJUID0gMVxuICAgICAgY29uc3QgU1RPUCA9IDBcblxuICAgICAgbGV0IGwsIGlcblxuICAgICAgY29uc3QgaW5kZXhlcyA9IFtdXG4gICAgICBjb25zdCBpZHMgPSBbXVxuICAgICAgY29uc3QgdHlwZXMgPSBbXVxuXG4gICAgICBsID0gcmFuZ2VzLmxlbmd0aFxuICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHJhbmdlID0gcmFuZ2VzW2ldXG5cbiAgICAgICAgICBjb25zdCBzdGFydEkgPSBzb3J0ZWRJbnNlcnQoaW5kZXhlcywgcmFuZ2VbMV0pXG4gICAgICAgICAgaWRzLnNwbGljZShzdGFydEksIDAsIHJhbmdlWzBdKVxuICAgICAgICAgIHR5cGVzLnNwbGljZShzdGFydEksIDAsIFNUQVJUKVxuXG4gICAgICAgICAgY29uc3QgZW5kSSA9IHNvcnRlZEluc2VydChpbmRleGVzLCByYW5nZVsxXSArIHJhbmdlWzJdKVxuICAgICAgICAgIGlkcy5zcGxpY2UoZW5kSSwgMCwgcmFuZ2VbMF0pXG4gICAgICAgICAgdHlwZXMuc3BsaWNlKGVuZEksIDAsIFNUT1ApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXRlID0gbmV3IE1hcCgpXG4gICAgICBzdGF0ZS5zZXQoaWRzWzBdLCB0cnVlKSAvLyBpbml0aWFsIHN0YXRlXG5cbiAgICAgIGwgPSBpZHMubGVuZ3RoXG4gICAgICBmdW5jdGlvbiogaXRlcmF0b3IgKCkge1xuICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleGVzW2ldXG4gICAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGluZGV4ZXNbaSAtIDFdXG5cbiAgICAgICAgICAgICAgaWYgKGluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICB5aWVsZCBbXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBsYXN0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShzdGF0ZS5rZXlzKCkpXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHR5cGVzW2ldID09PSBTVEFSVCkge1xuICAgICAgICAgICAgICAgICAgc3RhdGUuc2V0KGlkc1tpXSwgdHJ1ZSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRlLmRlbGV0ZShpZHNbaV0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IFtTeW1ib2wuaXRlcmF0b3JdOiBpdGVyYXRvciB9XG4gIH1cblxuICAvLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9jeWNsZWN5Y2xlL3Z1ZS1hbm5vdGF0ZWQtdGV4dC9cbiAgLy8gTUlUIExpY2Vuc2VcbiAgLy8gQ29weXJpZ2h0IChjKSAyMDE5IE5pY2sgTW9ybGV5XG5cbiAgLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgLy8gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAgLy8gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4gIC8vIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICAvLyBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICAvLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAgLy8gU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAgLy8gY29uZGl0aW9uczpcbiAgLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgLy8gaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gIC8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIC8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICAvLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gIC8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gIC8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIC8vIFNPRlRXQVJFLlxuICBjb25zdCBidWlsZFNwYW5MaXN0ID0gKHRleHQsIGFubm90YXRpb25zKSA9PiB7XG4gICAgICAvLyBQcmVwYXJlIHJhbmdlIGxpc3QgdG8gc2VuZCB0byBmbGF0dGVuLW92ZXJsYXBwaW5nLXNwYW5zLmZsYXR0ZW4oKVxuICAgICAgbGV0IHJhbmdlcyA9IFtdXG4gICAgICBjb25zdCBmdWxsUmFuZ2UgPSBbXCJiYXNlVGV4dFwiLCAwLCB0ZXh0Lmxlbmd0aF1cbiAgICAgIHJhbmdlcy5wdXNoKGZ1bGxSYW5nZSlcbiAgICAgIGNvbnN0IGFubm90YXRpb25SYW5nZXMgPSBhbm5vdGF0aW9ucy5tYXAoYW5ub3RhdGlvbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIFthbm5vdGF0aW9uLmlkLCBhbm5vdGF0aW9uLnN0YXJ0LCBhbm5vdGF0aW9uLmxlbmd0aF1cbiAgICAgIH0pXG4gICAgICByYW5nZXMgPSByYW5nZXMuY29uY2F0KGFubm90YXRpb25SYW5nZXMpXG4gICAgICAvLyBGbGF0dGVuXG4gICAgICBjb25zdCBzZWN0aW9ucyA9IEFycmF5LmZyb20oZmxhdHRlbihyYW5nZXMpKVxuICAgICAgLy8gRWFjaCBzZWN0aW9uIGJlY29tZXMgYSBzcGFuXG4gICAgICBsZXQgc2VjdGlvblRleHRTdGFydCA9IDBcbiAgICAgIGxldCBzcGFuSWQgPSAwXG4gICAgICBjb25zdCBzcGFucyA9IHNlY3Rpb25zLm1hcChzZWN0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCBsZW5ndGggPSBOdW1iZXIoc2VjdGlvblswXSlcbiAgICAgICAgICBsZXQgYW5ub3RhdGlvbklkcyA9IHNlY3Rpb25bMV1cbiAgICAgICAgICBhbm5vdGF0aW9uSWRzID0gYW5ub3RhdGlvbklkcy5maWx0ZXIoYW5ub3RhdGlvbklkID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFubm90YXRpb25JZCAhPT0gJ2Jhc2VUZXh0J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSBzZWN0aW9uVGV4dFN0YXJ0XG4gICAgICAgICAgY29uc3QgZW5kID0gc2VjdGlvblRleHRTdGFydCArIGxlbmd0aFxuICAgICAgICAgIGNvbnN0IHNlY3Rpb25UZXh0ID0gdGV4dC5zbGljZShzdGFydCwgZW5kKVxuICAgICAgICAgIGNvbnN0IHNwYW4gPSB7XG4gICAgICAgICAgICAgIGlkOiBzcGFuSWQsXG4gICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICAgIHRleHQ6IHNlY3Rpb25UZXh0LFxuICAgICAgICAgICAgICBhbm5vdGF0aW9uSWRzLFxuICAgICAgICAgICAgICBnZXQgYW5ub3RhdGlvbnMgKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFubm90YXRpb25zLmZpbHRlcihhbm5vdGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYW5ub3RhdGlvbklkcy5pbmNsdWRlcyhhbm5vdGF0aW9uLmlkKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuSWQgPSBzcGFuSWQgKyAxXG4gICAgICAgICAgc2VjdGlvblRleHRTdGFydCA9IGVuZFxuICAgICAgICAgIHJldHVybiBzcGFuXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHNwYW5zXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICBuYW1lOiBcIkFubm90YXRlZFRleHRcIixcbiAgICAgIGVtaXRzOiBbIFwic2VsZWN0aW9uXCIgXSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdGV4dDogU3RyaW5nLFxuICAgICAgICAgIGFubm90YXRpb25zOiB7XG4gICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xlYXJTZWxlY3Rpb246IHtcbiAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgZGVlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRBbm5vdGF0aW9uQ29sb3I6IHtcbiAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoYW5ub3RhdGlvbikge1xuICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIHJldHVybiBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29sb3JcbiAgICAgICAgICAgICAgICAgIC8vIElmIG51bGwsIG5vIHN0eWxlIGF0dHJpYnV0ZSB3aWxsIGJlIGdlbmVyYXRlZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0QW5ub3RhdGlvbkluZm86IEZ1bmN0aW9uLFxuICAgICAgICAgIHNwYW5FdmVudHM6IHtcbiAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0U3BhbkNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIChzcGFuKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3BhbkF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb21wdXRlZDoge1xuICAgICAgICAgIHNwYW5DbGFzc2VzOiB7XG4gICAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBzcGFuIGNsYXNzZXMgZm9yIGVhY2ggc3BhbiBpZCB1c2luZyBnZXRTcGFuQ2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyh0aGlzLnNwYW5zLm1hcChzcGFuID0+IFsgc3Bhbi5pZCwgdGhpcy5nZXRTcGFuQ2xhc3NlcyhzcGFuKSBdKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3BhbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbnMgPSBidWlsZFNwYW5MaXN0KHRoaXMudGV4dCwgdGhpcy5hbm5vdGF0aW9ucylcbiAgICAgICAgICAgICAgcmV0dXJuIHNwYW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmVwcGVkU3BhbkV2ZW50cyAoKSB7XG4gICAgICAgICAgICAgIC8vIEdldCBhbm5vdGF0aW9ucyBhbmQgcGFzcyB0byB0aGUgZXZlbnQgY2FsbGJhY2tcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbkV2ZW50cyA9IHRoaXMuc3BhbkV2ZW50c1xuICAgICAgICAgICAgICBjb25zdCBwcmVwcGVkU3BhbkV2ZW50cyA9IHt9XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNwYW5FdmVudHMpLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBzcGFuRXZlbnRzW2V2ZW50VHlwZV1cbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NhbGxiYWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuSWQgPSB0aGlzLmVsZW1lbnRTcGFuSWQoZS50YXJnZXQpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuc3BhbkJ5SWQoc3BhbklkKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25JZHMgPSBzcGFuLmFubm90YXRpb25JZHNcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IHRoaXMuZ2V0QW5ub3RhdGlvbnMoYW5ub3RhdGlvbklkcylcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlLCBhbm5vdGF0aW9ucylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHByZXBwZWRTcGFuRXZlbnRzW2V2ZW50VHlwZV0gPSBuZXdDYWxsYmFja1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm4gcHJlcHBlZFNwYW5FdmVudHNcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIGVsZW1lbnRTcGFuSWQgKGVsKSB7XG4gICAgICAgICAgICAgIGxldCBzcGFuSWQgPSBlbC5hdHRyaWJ1dGVzW1wiZGF0YS1zcGFuLWlkXCJdLnZhbHVlXG4gICAgICAgICAgICAgIHNwYW5JZCA9IE51bWJlcihzcGFuSWQpXG4gICAgICAgICAgICAgIHJldHVybiBzcGFuSWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNwYW5CeUlkIChzcGFuSWQpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbnMgPSB0aGlzLnNwYW5zLmZpbHRlcigoc3BhbikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwYW4uaWQgPT09IHNwYW5JZFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBjb25zdCBzcGFuID0gc3BhbnNbMF1cbiAgICAgICAgICAgICAgcmV0dXJuIHNwYW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldEFubm90YXRpb25zIChhbm5vdGF0aW9uSWRzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25zID0gdGhpcy5hbm5vdGF0aW9ucy5maWx0ZXIoKGFubm90YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhbm5vdGF0aW9uSWRzLmluY2x1ZGVzKGFubm90YXRpb24uaWQpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVybiBhbm5vdGF0aW9uc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0U3BhblN0eWxlOiBmdW5jdGlvbiAoc3Bhbikge1xuICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuZ2V0U3BhbkNvbG9yKHNwYW4pXG4gICAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRTcGFuQ29sb3I6IGZ1bmN0aW9uIChzcGFuKSB7XG4gICAgICAgICAgICAgIGxldCBjb2xvciA9IG51bGxcbiAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbklkcyA9IHNwYW4uYW5ub3RhdGlvbklkc1xuICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IHRoaXMuZ2V0QW5ub3RhdGlvbnMoYW5ub3RhdGlvbklkcylcbiAgICAgICAgICAgICAgbGV0IGNvbG9ycyA9IGFubm90YXRpb25zLm1hcCgoYW5ub3RhdGlvbikgPT5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QW5ub3RhdGlvbkNvbG9yKGFubm90YXRpb24pXG4gICAgICAgICAgICAgICkuZmlsdGVyKGNvbG9yID0+IGNvbG9yKVxuXG4gICAgICAgICAgICAgIGNvbG9ycyA9IFsuLi5uZXcgU2V0KGNvbG9ycyldXG4gICAgICAgICAgICAgIGlmIChjb2xvcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgLy8gT3ZlcmxhcHBpbmcgc3BhbnMgLSB1c2UgdGhlIG92ZXJsYXAgY29sb3JcbiAgICAgICAgICAgICAgICAgIGNvbG9yID0gT1ZFUkxBUFBJTkdfQ09MT1JcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2xvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBjb2xvciA9IGNvbG9yc1swXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIG51bGwgaWYgbm9uZSBzcGVjaWZpZWRcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRTZWxlY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKVxuICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gcmFuZ2Uuc3RhcnRDb250YWluZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyID09PSB0aGlzLiRyZWZzLnRyYW5zY3JpcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBhcmUgaW4gdGhlIHRyYW5zY3JpcHQgY29udGFpbmVyLlxuICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0Q29udGFpbmVyL2VuZENvbnRhaW5lciBzaG91bGQgYmUgdGV4dCBlbGVtZW50IHdob3NlIHBhcmVudCBpcyBhIHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiZWdpbiA9IE51bWJlcihyYW5nZS5zdGFydENvbnRhaW5lci5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGV4dE9mZnNldCkgKyByYW5nZS5zdGFydE9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IE51bWJlcihyYW5nZS5lbmRDb250YWluZXIucGFyZW50RWxlbWVudC5kYXRhc2V0LnRleHRPZmZzZXQpICsgcmFuZ2UuZW5kT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShiZWdpbiwgZW5kKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZW1pdFNlbGVjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXh0U2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICBpZiAodGV4dFNlbGVjdGlvbiAmJiB0ZXh0U2VsZWN0aW9uLmJlZ2luICE9PSB0ZXh0U2VsZWN0aW9uLmVuZCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcInNlbGVjdGlvblwiLCB0ZXh0U2VsZWN0aW9uKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4gIC50cmFuc2NyaXB0IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIH1cbiAgLmNhdGVnb3J5MSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5Nzk3O1xuICB9XG4gIC5jYXRlZ29yeTIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcwODRiMDtcbiAgfVxuICAuY2F0ZWdvcnkzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRjOTc7XG4gIH1cbiAgLmNhdGVnb3J5NCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2JjZjdiO1xuICB9XG4gIC5jYXRlZ29yeTEuY2F0ZWdvcnkyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuICAuY2F0ZWdvcnkxLmNhdGVnb3J5MyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIH1cbiAgLmNhdGVnb3J5MS5jYXRlZ29yeTQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICB9XG4gIC5jYXRlZ29yeTIuY2F0ZWdvcnkzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuICAuY2F0ZWdvcnkyLmNhdGVnb3J5NCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIH1cbiAgLmNhdGVnb3J5My5jYXRlZ29yeTQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICB9XG4gIC8qIEZvciB1bmRlZmluZWQgY2F0ZWdvcmllcyAqL1xuICAuY2F0ZWdvcnk5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgfVxuICAuZGVzY3JpcHRlbSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAuZGVzY3JpcHRlbS5kZXNjcmlwdGVtcyB7XG4gICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IGRvdWJsZTtcbiAgfVxuICAuZXh0cmFjdEhpZ2hsaWdodCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuZXh0cmFjdE9yaWdpbmFsIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIC5oaWdobGlnaHRlZCxcbiAgLmRlc2NyaXB0ZW0uaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTEuaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTIuaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTMuaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTQuaGlnaGxpZ2h0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGVtLW1vZGlmaWNhdGlvblwiXG4gICAgICAgdi1pZj1cIm1vZGVsXCI+XG4gICAgPHAgY2xhc3M9XCJuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlRvIG1vZGlmeSB0aGUgZGVzY3JpcHRlbSwgc2VsZWN0IHRoZSBuZXcgdGV4dCBhbmQgdmFsaWRhdGUuPC9wPlxuICAgIDxwIGNsYXNzPVwidGV4dC1pdGFsaWMgbm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5UaGUgPHU+b3JpZ2luYWwgZGVzY3JpcHRlbTwvdT4gaXMgdW5kZXJsaW5lZCwgdGhlIDxiPm5ldyBzZWxlY3Rpb248L2I+IGlzIGJvbGQuPC9wPlxuICAgIDxBbm5vdGF0ZWRUZXh0XG4gICAgICBjbGFzcz1cInRleHRBbm5vdGF0aW9uQ29tcG9uZW50XCJcbiAgICAgIDp0ZXh0PVwiY29udGV4dFRleHRcIlxuICAgICAgOmFubm90YXRpb25zPVwiYW5ub3RhdGlvbnNcIlxuICAgICAgOmdldFNwYW5DbGFzc2VzPVwiZ2V0U3BhbkNsYXNzZXNcIlxuICAgICAgY2xlYXJTZWxlY3Rpb25cbiAgICAgIEBzZWxlY3Rpb249XCJ0ZXh0U2VsZWN0aW9uXCJcbiAgICAgIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IEFubm90YXRlZFRleHQgZnJvbSAnLi9Bbm5vdGF0ZWRUZXh0LnZ1ZSdcbiAgaW1wb3J0IHR5cGUgeyBUZXh0U2VsZWN0aW9uIH0gZnJvbSAnLi91dGlsJ1xuICBpbXBvcnQgeyBjbGFtcCB9IGZyb20gJy4vdXRpbCdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgbW9kZWwgPSBkZWZpbmVNb2RlbDxUZXh0U2VsZWN0aW9uPigpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBpbml0aWFsOiB7IHR5cGU6IE9iamVjdCB9XG4gIH0pXG5cbiAgY29uc3QgaW50ZXJ2aWV3ID0gY29tcHV0ZWQoKCkgPT4gbW9kZWwudmFsdWUgPyBzdG9yZS5nZXRJbnRlcnZpZXcobW9kZWwudmFsdWUuaW50ZXJ2aWV3SWQpIDogbnVsbClcblxuICBjb25zdCBjb250ZXh0VGV4dCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChpbnRlcnZpZXcudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gaW50ZXJ2aWV3LnZhbHVlLnRleHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBnZXRTcGFuQ2xhc3NlcyAoc3BhbjogYW55KSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gc3Bhbi5hbm5vdGF0aW9ucy5tYXAoKGE6IGFueSkgPT4gYS5jbGFzcylcbiAgICAgIHJldHVybiBbIC4uLm5ldyBTZXQoY2xhc3NlcykgXS5qb2luKFwiIFwiKVxuICB9XG5cbiAgY29uc3QgaW5pdGlhbExlbmd0aCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5pbml0aWFsKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzLmluaXRpYWwuZW5kSW5kZXggLSBwcm9wcy5pbml0aWFsLnN0YXJ0SW5kZXhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBhbm5vdGF0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIFJldHVybiAzIGFubm90YXRpb25zOlxuICAgICAgLy8gLSBoaWdobGlnaHRlZCBvbmUgKGRlc2NyaXB0ZW0pXG4gICAgICAvLyAtIGhpZGRlbiBzdGFydFxuICAgICAgLy8gLSBoaWRkZW4gZW5kXG4gICAgICBjb25zdCBvdXQgPSBbXVxuICAgICAgaWYgKG1vZGVsLnZhbHVlICYmIHByb3BzLmluaXRpYWwpIHtcbiAgICAgICAgICBjb25zdCBpbnRlcnZpZXdJZCA9IG1vZGVsLnZhbHVlLmludGVydmlld0lkXG4gICAgICAgICAgY29uc3QgbWF4SW5kZXggPSBpbnRlcnZpZXcudmFsdWU/LnRleHQubGVuZ3RoID8/IDBcbiAgICAgICAgICBjb25zdCBsZW5ndGggPSBtb2RlbC52YWx1ZS5lbmRJbmRleCAtIG1vZGVsLnZhbHVlLnN0YXJ0SW5kZXhcbiAgICAgICAgICBjb25zdCBleHRyYWN0U3RhcnQgPSBjbGFtcChwcm9wcy5pbml0aWFsLnN0YXJ0SW5kZXggLSBpbml0aWFsTGVuZ3RoLnZhbHVlIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCBtYXhJbmRleClcbiAgICAgICAgICBjb25zdCBleHRyYWN0RW5kID0gY2xhbXAocHJvcHMuaW5pdGlhbC5lbmRJbmRleCArIGluaXRpYWxMZW5ndGgudmFsdWUgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCBtYXhJbmRleClcbiAgICAgICAgICBpZiAoZXh0cmFjdFN0YXJ0KSB7XG4gICAgICAgICAgICAgIG91dC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGludGVydmlld0lkLFxuICAgICAgICAgICAgICAgICAgaWQ6ICdoaWRkZW5fc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICBsZW5ndGg6IGV4dHJhY3RTdGFydCxcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaGlkZGVuIGV4dHJhY3RTdGFydCdcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgb3V0LnB1c2goe1xuICAgICAgICAgICAgICBpbnRlcnZpZXdJZCxcbiAgICAgICAgICAgICAgaWQ6ICdjdXJyZW50X2V4dHJhY3QnLFxuICAgICAgICAgICAgICBzdGFydDogcHJvcHMuaW5pdGlhbC5zdGFydEluZGV4LFxuICAgICAgICAgICAgICBsZW5ndGg6IHByb3BzLmluaXRpYWwuZW5kSW5kZXggLSBwcm9wcy5pbml0aWFsLnN0YXJ0SW5kZXgsXG4gICAgICAgICAgICAgIGNsYXNzOiAnZXh0cmFjdE9yaWdpbmFsJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgb3V0LnB1c2goe1xuICAgICAgICAgICAgICBpbnRlcnZpZXdJZCxcbiAgICAgICAgICAgICAgaWQ6ICduZXdfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgc3RhcnQ6IG1vZGVsLnZhbHVlLnN0YXJ0SW5kZXgsXG4gICAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgICAgY2xhc3M6ICdleHRyYWN0SGlnaGxpZ2h0J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKGV4dHJhY3RFbmQgPCBtYXhJbmRleCkge1xuICAgICAgICAgICAgICBvdXQucHVzaCh7XG4gICAgICAgICAgICAgICAgICBpbnRlcnZpZXdJZCxcbiAgICAgICAgICAgICAgICAgIGlkOiAnaGlkZGVuX2VuZCcsXG4gICAgICAgICAgICAgICAgICBzdGFydDogZXh0cmFjdEVuZCxcbiAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWF4SW5kZXggLSBleHRyYWN0RW5kLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6ICdoaWRkZW4gZXh0cmFjdEVuZCdcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0XG4gIH0pXG5cbiAgZnVuY3Rpb24gdGV4dFNlbGVjdGlvbiAoZGF0YTogYW55KSB7XG4gICAgICBpZiAobW9kZWwudmFsdWUpIHtcbiAgICAgICAgICBtb2RlbC52YWx1ZS5zdGFydEluZGV4ID0gZGF0YS5iZWdpblxuICAgICAgICAgIG1vZGVsLnZhbHVlLmVuZEluZGV4ID0gZGF0YS5lbmRcbiAgICAgIH1cbiAgfVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLnRleHRBbm5vdGF0aW9uQ29tcG9uZW50IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRlc2NyaXB0ZW1cIlxuICAgICAgIHYtaWY9XCJkZXNjcmlwdGVtXCJcbiAgICAgICA6ZGF0YS1kZXNjcmlwdGVtPVwiZGVzY3JpcHRlbS5pZFwiXG4gICAgICAgOnRpdGxlPVwiZGVzY3JpcHRlbS50ZXh0XCI+XG4gICAgPERyYWdFbGVtZW50XG4gICAgICB0eXBlPVwiZGVzY3JpcHRlbVwiXG4gICAgICBjbGFzcz1cImRlc2NyaXB0ZW0taGVhZGVyXCJcbiAgICAgIDpkYXRhPVwiZGVzY3JpcHRlbUlkXCI+XG4gICAgICA8cS1pY29uXG4gICAgICAgIHJlZj1cImhhbmRsZVwiXG4gICAgICAgIGNsYXNzPVwiZGVzY3JpcHRlbS1oYW5kbGVcIlxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICBAY2xpY2subWV0YT1cImRlYnVnXCJcbiAgICAgICAgQGNsaWNrPVwic2V0SGlnaGxpZ2h0ZWRcIlxuICAgICAgICBuYW1lPVwibWRpLWZvcm1hdC1xdW90ZS1jbG9zZS1vdXRsaW5lXCI+PC9xLWljb24+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGVtLWxhYmVsXCI+e3sgZGVzY3JpcHRlbS50ZXh0IH19PC9zcGFuPlxuICAgICAgICA8cS1wb3B1cC1lZGl0IHRpdGxlPVwiU2VsZWN0IHRoZSBhcHByb3ByaWF0ZSB0ZXh0IGZyYWdtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWlzUmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGVzY3JpcHRlbUpzb25cIlxuICAgICAgICAgICAgICAgICAgICAgIHYtc2xvdD1cInNjb3BlXCI+XG4gICAgICAgICAgPERlc2NyaXB0ZW1Nb2RpZmljYXRpb25EaWFsb2dcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzY29wZS52YWx1ZVwiXG4gICAgICAgICAgICA6aW5pdGlhbD1cInNjb3BlLmluaXRpYWxWYWx1ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3EtcG9wdXAtZWRpdD5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxxLXNwYWNlIC8+XG4gICAgICA8ZGl2IHYtaWY9XCJ3aXRoQ29udGV4dFwiXG4gICAgICAgICAgIGNsYXNzPVwiZGVzY3JpcHRlbS1jb250ZXh0XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGV4dC1pdGVtXCJcbiAgICAgICAgICAgICAgdi1pZj1cImNvbnRleHQuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnlcIj5cbiAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgbmFtZT1cIm1kaS1hbHBoYS1zLWJveC1vdXRsaW5lXCI+PC9xLWljb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb3BlcnR5LW5hbWVcIj57eyBjb250ZXh0LnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5Lm5hbWUgfX08L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzPVwiY29udGV4dC1pdGVtXCJcbiAgICAgICAgICBAY2xpY2suc3RvcD1cImp1bXBUb01vbWVudChjb250ZXh0Lm1vbWVudC5pZClcIlxuICAgICAgICAgIHYtaWY9XCJjb250ZXh0Lm1vbWVudFwiPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICBuYW1lPVwibWRpLWFscGhhLWQtYm94LW91dGxpbmVcIj48L3EtaWNvbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vbWVudC1uYW1lXCI+e3sgY29udGV4dC5tb21lbnQubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgdi1pZj1cIndpdGhNZW51XCJcbiAgICAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGVtLW1lbnVcIj5cbiAgICAgICAgPHEtc3BhY2UgLz5cbiAgICAgICAgPEVsZW1lbnRNZW51XG4gICAgICAgICAgOmFjdGlvbnM9XCJtZW51QWN0aW9uc1wiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvRHJhZ0VsZW1lbnQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuICBpbXBvcnQgRGVzY3JpcHRlbU1vZGlmaWNhdGlvbkRpYWxvZyBmcm9tICcuL0Rlc2NyaXB0ZW1Nb2RpZmljYXRpb25EaWFsb2cudnVlJ1xuICBpbXBvcnQgRHJhZ0VsZW1lbnQgZnJvbSAnLi9EcmFnRWxlbWVudC52dWUnXG4gIGltcG9ydCBFbGVtZW50TWVudSBmcm9tICcuL0VsZW1lbnRNZW51LnZ1ZSdcbiAgaW1wb3J0IE1vbWVudCBmcm9tICdzdG9yZXMvbW9kZWxzL21vbWVudCdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5IGZyb20gJ3N0b3Jlcy9tb2RlbHMvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnknXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBkZXNjcmlwdGVtSWQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sXG4gICAgICB3aXRoQ29udGV4dDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgICAgd2l0aE1lbnU6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxuICAgICAgaXNSZWFkb25seTogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9XG4gIH0pXG5cbiAgY29uc3QgZGVzY3JpcHRlbSA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldERlc2NyaXB0ZW0ocHJvcHMuZGVzY3JpcHRlbUlkKSlcblxuICBjb25zdCB7XG4gICAgICBoaWdobGlnaHRlZERlc2NyaXB0ZW1JZFxuICB9ID0gc3RvcmVUb1JlZnMoaXN0b3JlKVxuXG4gIGZ1bmN0aW9uIGRlYnVnICgpIHtcbiAgICAgICh3aW5kb3cgYXMgYW55KS5kZXNjcmlwdGVtID0gZGVzY3JpcHRlbS52YWx1ZVxuICAgICAgY29uc29sZS5sb2coXCJEZXNjcmlwdGVtXCIsIGRlc2NyaXB0ZW0udmFsdWU/LnRvSlNPTigpKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0SGlnaGxpZ2h0ZWQgKCkge1xuICAgICAgaWYgKGhpZ2hsaWdodGVkRGVzY3JpcHRlbUlkLnZhbHVlID09PSBwcm9wcy5kZXNjcmlwdGVtSWQpIHtcbiAgICAgICAgICBoaWdobGlnaHRlZERlc2NyaXB0ZW1JZC52YWx1ZSA9IFwiXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGlnaGxpZ2h0ZWREZXNjcmlwdGVtSWQudmFsdWUgPSBwcm9wcy5kZXNjcmlwdGVtSWRcbiAgICAgIH1cbiAgfVxuXG4gIHR5cGUgQ29udGV4dCA9IHtcbiAgICAgIG1vbWVudD86IE1vbWVudCxcbiAgICAgIHNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5PzogU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnksXG5cbiAgfVxuXG4gIC8vIGNvbnRleHQgaXMgYW4gb2JqZWN0IHdpdGggb3B0aW9uYWwgbW9tZW50IC8gc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkgdmFsdWVzXG4gIGNvbnN0IGNvbnRleHQgPSBjb21wdXRlZCgoKTogQ29udGV4dCA9PiB7XG4gICAgICBpZiAoZGVzY3JpcHRlbS52YWx1ZSAmJiBkZXNjcmlwdGVtLnZhbHVlLmp1c3RpZmljYXRpb24pIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnQgPSBzdG9yZS5nZXRKdXN0aWZpY2F0aW9uUGFyZW50KGRlc2NyaXB0ZW0udmFsdWUuanVzdGlmaWNhdGlvbi5wYXJlbnRJZClcbiAgICAgICAgICAvLyBNb21lbnQ6ICR7bW9tZW50Lm5hbWV9XG4gICAgICAgICAgLy8gQ2F0ZWdvcnk6ICR7Y2F0ZWdvcnkubW9tZW50Lm5hbWV9IHwgJHtjYXRlZ29yeS5uYW1lfVxuICAgICAgICAgIC8vIFByb3BlcnR5OiAke3Byb3BlcnR5LmNhdGVnb3J5aW5zdGFuY2UubW9tZW50Lm5hbWV9IHwgJHtwcm9wZXJ0eS5jYXRlZ29yeWluc3RhbmNlLm5hbWV9IHwgJHtwcm9wZXJ0eS5uYW1lfTogJHtwcm9wZXJ0eS52YWx1ZX1cbiAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuYXNDb250ZXh0XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgfVxuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHsgfVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGRlc2NyaXB0ZW1Kc29uID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0OiAoKSA9PiBkZXNjcmlwdGVtLnZhbHVlPy50b0pTT04oKSA/PyB7fSxcbiAgICAgIHNldDogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgc3RvcmUudXBkYXRlRGVzY3JpcHRlbShwcm9wcy5kZXNjcmlwdGVtSWQsIHtcbiAgICAgICAgICAgICAgc3RhcnRJbmRleDogdmFsdWUuc3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgZW5kSW5kZXg6IHZhbHVlLmVuZEluZGV4XG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBqdW1wVG9Nb21lbnQgKGlkZW50aWZpZXI6IHN0cmluZykge1xuICAgICAgaXN0b3JlLnNldEhpZ2hsaWdodGVkTW9tZW50SWQoaWRlbnRpZmllcilcbiAgfVxuXG4gIGltcG9ydCB0eXBlIHsgTmFtZWRBY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL3V0aWwudHMnXG5cbiAgY29uc3QgbWVudUFjdGlvbnM6IE5hbWVkQWN0aW9uW10gPSBbXG4gICAgICBbIFwiRHVwbGljYXRlXCIsICgpID0+IHN0b3JlLmR1cGxpY2F0ZURlc2NyaXB0ZW0ocHJvcHMuZGVzY3JpcHRlbUlkKSBdLFxuICAgICAgWyBcIkRlbGV0ZVwiLCAoKSA9PiBzdG9yZS5kZWxldGVEZXNjcmlwdGVtKHByb3BzLmRlc2NyaXB0ZW1JZCkgXVxuICBdXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmRlc2NyaXB0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBoZWlnaHQ6IDEuMmVtO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuZGVzY3JpcHRlbS1oZWFkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAuZGVzY3JpcHRlbS1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktZGVzY3JpcHRlbS13aWR0aCk7XG4gICAgICBoZWlnaHQ6IDEuMmVtO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4gIC5kZXNjcmlwdGVtLWhhbmRsZSB7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuZGVzY3JpcHRlbS1oYW5kbGU6aG92ZXIge1xuICAgICAgb3BhY2l0eTogLjc7XG4gIH1cbiAgLmRlc2NyaXB0ZW0tY29udGV4dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuY29udGV4dC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICB9XG4gIC5jb250ZXh0LWl0ZW0gKyAuY29udGV4dC1pdGVtIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gICAgICBwYWRkaW5nOiAwIDRweDtcbiAgfVxuICAuZGVzY3JpcHRlbS1tZW51IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLmRlc2NyaXB0ZW0taGVhZGVyOmhvdmVyIC5kZXNjcmlwdGVtLW1lbnUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImp1c3RpZmljYXRpb25cIlxuICAgICAgIHYtaWY9XCJqdXN0aWZpY2F0aW9uSWRcIlxuICAgICAgIDpkYXRhLWp1c3RpZmljYXRpb249XCJqdXN0aWZpY2F0aW9uSWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwianVzdGlmaWNhdGlvbi1tZXRhZGF0YVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJqdXN0aWZpY2F0aW9uLW5hbWVcIj57eyBqdXN0aWZpY2F0aW9uPy5uYW1lIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDx1bCBjbGFzcz1cImp1c3RpZmljYXRpb24tZGVzY3JpcHRlbXNcIj5cbiAgICAgIDxsaSB2LWZvcj1cImRlc2NyaXB0ZW0gaW4ganVzdGlmaWNhdGlvbj8uZGVzY3JpcHRlbXNcIiA6a2V5PVwiZGVzY3JpcHRlbS5pZFwiPlxuICAgICAgICA8RGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uIDpkZXNjcmlwdGVtSWQ9XCJkZXNjcmlwdGVtLmlkXCI+XG4gICAgICAgIDwvRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IERlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbiBmcm9tICcuL0Rlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbi52dWUnXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGp1c3RpZmljYXRpb25JZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfVxuICB9KVxuICBjb25zdCBqdXN0aWZpY2F0aW9uID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuZ2V0SnVzdGlmaWNhdGlvbihwcm9wcy5qdXN0aWZpY2F0aW9uSWQpKVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5qdXN0aWZpY2F0aW9uLWRlc2NyaXB0ZW1zIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgd2lkdGg6IGNhbGModmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1kZXNjcmlwdGVtLXdpZHRoKSArIDUwcHgpO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZHJvcHpvbmVcIlxuICAgICAgIEBkcm9wPVwib25Ecm9wKCRldmVudClcIlxuICAgICAgIEBkcmFnb3Zlci5wcmV2ZW50PVwib25EcmFnT3ZlcigkZXZlbnQpXCJcbiAgICAgICBAZHJhZ2xlYXZlLnByZXZlbnQ9XCJvbkRyYWdMZWF2ZSgkZXZlbnQpXCJcbiAgICAgICBAZHJhZ2VudGVyLnByZXZlbnQ+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG4gIGNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0cyhbICdhbm5vdGF0aW9uJywgJ2Rlc2NyaXB0ZW0nLCAnc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21vbWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcm9qZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5JywgJ2dlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgZGVmYXVsdDogXCJcIlxuICAgICAgfSxcbiAgICAgIC8vIERhdGEgdHlwZXMgdGhhdCBhcmUgc3VwcG9zZWQgdG8gYmUgdmFsaWQuXG4gICAgICAvLyBTcGFjZS1zZXBhcmF0ZWQgbGlzdCBvZiBkYXRhLXR5cGVzXG4gICAgICB0eXBlczoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBkZWZhdWx0OiBcIlwiXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgdmFsaWRUeXBlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy50eXBlcy5zcGxpdCgvICsvKVxuICB9KVxuXG4gIGZ1bmN0aW9uIGhhc1ZhbGlkVHlwZSAoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgaWYgKCF2YWxpZFR5cGVzLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGlmICghZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBjb25zdCB0eXBlcyA9IFsgLi4uZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzIF1cbiAgICAgIGZvciAoY29uc3QgdCBvZiB2YWxpZFR5cGVzLnZhbHVlKSB7XG4gICAgICAgICAgaWYgKHR5cGVzLmluY2x1ZGVzKHQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdPdmVyIChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICBpZiAoaGFzVmFsaWRUeXBlKGV2ZW50KSAmJiBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ2lzX2Ryb3BwYWJsZScpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdMZWF2ZSAoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZSgnaXNfZHJvcHBhYmxlJylcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcCAoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgb25EcmFnTGVhdmUoZXZlbnQpXG4gICAgICBjb25zdCBkdCA9IGV2ZW50LmRhdGFUcmFuc2ZlclxuICAgICAgaWYgKCFkdCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy8gV2UgaGFuZGxlIGRyYWcgdHlwZXMgdGhhdCBhcmUgaW4gdGhlIGZvcm0gdXBtdC9FTEVNRU5UX05BTUVcbiAgICAgIGZvciAoY29uc3QgZHJhZ1R5cGUgb2YgZHQudHlwZXMpIHtcbiAgICAgICAgICBpZiAoZHJhZ1R5cGUuc3RhcnRzV2l0aCgndXBtdC8nKSkge1xuICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gZHQuZ2V0RGF0YShkcmFnVHlwZSlcbiAgICAgICAgICAgICAgY29uc3QgaXRlbVR5cGUgPSBkcmFnVHlwZS5yZXBsYWNlKCd1cG10LycsICcnKVxuICAgICAgICAgICAgICBlbWl0KChpdGVtVHlwZSBhcyBhbnkpLCBwYXlsb2FkLCBwcm9wcy5kYXRhLCBldmVudClcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbjwvc2NyaXB0PlxuPHN0eWxlPlxuICAuZHJvcHpvbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuZHJvcHpvbmUuZW1wdHktcGFkZGluZyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gIH1cbiAgLmRyb3B6b25lLmRlZmF1bHQtaGVpZ2h0IHtcbiAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICB9XG4gIC5pc19kcm9wcGFibGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCBncmV5O1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGV4dFwiXG4gICAgICAgdi1pZj1cImNvbnRleHQub3JpZ2luYWxcIj5cbiAgICA8ZW0+Tm9tIG9yaWdpbmFsPC9lbT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb250ZXh0XCJcbiAgICAgICB2LWVsc2U+XG4gICAgPGRpdiBjbGFzcz1cImNoaWxkcmVuXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIlxuICAgICAgICAgICA6dGl0bGU9XCJjLm5hbWVcIlxuICAgICAgICAgICA6Y2xhc3M9XCJ7ICdoYXMtY2hpbGQnOiBpc0N1cnJlbnRDaGlsZChjLm5hbWUpIH1cIlxuICAgICAgICAgICB2LWZvcj1cImMgaW4gY29udGV4dC5jaGlsZHJlblwiXG4gICAgICAgICAgIDprZXk9XCJjLmlkXCI+XG4gICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgc2l6ZT1cIjEwcHRcIlxuICAgICAgICAgIHYtaWY9XCIhIGlzQ3VycmVudENoaWxkKGMubmFtZSlcIlxuICAgICAgICAgIHYtbW9kZWw9XCJuZXdDaGlsZHJlblwiXG4gICAgICAgICAgOnZhbD1cImMubmFtZVwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2hpbGQtY2F0ZWdvcnktbmFtZVwiPnt7Yy5uYW1lfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmVsYXRpb25cIj5cbiAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uXG4gICAgICAgIHYtaWY9XCJjb250ZXh0LnJlZmVyZW5jZVwiXG4gICAgICAgIDp0eXBlPVwiY29udGV4dC5yZWZlcmVuY2UuYWJzdHJhY3Rpb25UeXBlXCJcbiAgICAgICAgOmNoaWxkcmVuQ291bnQ9XCJjb250ZXh0LmNoaWxkcmVuLmxlbmd0aFwiPlxuICAgICAgPC9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeSByZWZlcmVuY2VcIlxuICAgICAgICAgdi1pZj1cImNvbnRleHQucmVmZXJlbmNlXCJcbiAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWN1cnJlbnQnOiBpc0N1cnJlbnROYW1lKGNvbnRleHQucmVmZXJlbmNlLm5hbWUpIH1cIlxuICAgICAgICAgOnRpdGxlPVwiY29udGV4dC5yZWZlcmVuY2UubmFtZVwiPlxuICAgICAge3tjb250ZXh0LnJlZmVyZW5jZS5uYW1lfX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGFyZW50c1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5IHBhcmVudFwiXG4gICAgICAgICAgIDp0aXRsZT1cInBhcmVudD8ubmFtZSA/PyAnJ1wiXG4gICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1wYXJlbnQnOiBpc0N1cnJlbnRQYXJlbnQocGFyZW50Py5uYW1lKSB9XCJcbiAgICAgICAgICAgdi1mb3I9XCJwYXJlbnQgaW4gY29udGV4dC5wYXJlbnRzXCJcbiAgICAgICAgICAgOmtleT1cInBhcmVudD8uaWQgPz8gJydcIj5cbiAgICAgICAge3twYXJlbnQ/Lm5hbWUgPz8gJyd9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8cS1zZWxlY3RcbiAgICBkZW5zZVxuICAgIEBmb2N1cz1cIigkZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNlbGVjdCgpXCJcbiAgICBmaWxsZWRcbiAgICA6bW9kZWwtdmFsdWU9XCJuYW1lXCJcbiAgICB1c2UtaW5wdXRcbiAgICBoaWRlLXNlbGVjdGVkXG4gICAgZmlsbC1pbnB1dFxuICAgIG1lbnUtYW5jaG9yPVwidG9wIHJpZ2h0XCJcbiAgICA6aW5wdXQtZGVib3VuY2U9XCIwXCJcbiAgICA6b3B0aW9ucz1cImNvbnRleHQ/LmNvbXBsZXRpb25zID8/IFtdXCJcbiAgICBAZmlsdGVyPVwiZmlsdGVyTmFtZXNcIlxuICAgIEBpbnB1dC12YWx1ZT1cInNldE5hbWVcIlxuICAgIEBrZXl1cC5lbnRlcj1cInZhbGlkYXRlXCJcbiAgICBhdXRvZm9jdXNcbiAgICA+XG4gICAgPHRlbXBsYXRlIHYtc2xvdDpuby1vcHRpb24+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJ0ZXh0LWdyZXlcIj5cbiAgICAgICAgICBObyByZXN1bHRzXG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3Etc2VsZWN0PlxuICA8ZGl2IGNsYXNzPVwicm93IHdyYXAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgPHEtYnRuXG4gICAgICBmbGF0XG4gICAgICBzaXplPVwic21cIlxuICAgICAgQGNsaWNrPVwiY2FuY2VsXCI+Q2FuY2VsPC9xLWJ0bj5cbiAgICA8cS1idG5cbiAgICAgIGZsYXRcbiAgICAgIHNpemU9XCJzbVwiXG4gICAgICBAY2xpY2s9XCJ2YWxpZGF0ZVwiPk9LPC9xLWJ0bj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSBmcm9tICdzdG9yZXMvbW9kZWxzL3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5J1xuICBpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbiBmcm9tICcuL1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24udnVlJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBlbWl0ID0gZGVmaW5lRW1pdHMoWyAnY2hhbmdlJyBdKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgY2F0ZWdvcnk6IHsgdHlwZTogU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnksIGRlZmF1bHQ6IG51bGwgfSxcbiAgICAgIGdlbmVyaWNHcmFwaHM6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiBudWxsIH1cbiAgfSlcblxuICBjb25zdCBuYW1lID0gcmVmKHByb3BzLmNhdGVnb3J5Lm5hbWUpXG5cbiAgY29uc3QgbmV3Q2hpbGRyZW4gPSByZWYoW10pXG5cbiAgY29uc3QgY29tcGxldGlvbnMgPSByZWYoW10gYXMgc3RyaW5nW10pXG5cbiAgY29uc3QgY2hpbGRyZW5OYW1lcyA9IGNvbXB1dGVkKCgpID0+IG5ldyBTZXQocHJvcHMuY2F0ZWdvcnk/LmNoaWxkcmVuLm1hcChjID0+IGMubmFtZSkgPz8gW10pKVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlICgpIHtcbiAgICAgIC8vIElmIHRoZSBzZWxlY3QgaGFzIGZvY3VzLCB0aGVuIHVzZSB0aGUgc2VsZWN0ZWQgbmFtZS4gRWxzZSB1c2UgdGhlIGlucHV0IG5hbWUgdmFsdWUuXG5cbiAgICAgIGlmIChwcm9wcy5jYXRlZ29yeSkge1xuICAgICAgICAgIC8qIElmIHRoZSBuZXcgbmFtZSBpcyBmcm9tIGFuIGV4aXN0aW5nIGNhdGVnb3J5IHRoYXQgaGFzIGFuIGFic3RyYWN0aW9uVHlwZSwgdGhlbiBhbHNvIHVwZGF0ZSBpdHMgYWJzdHJhY3Rpb25UeXBlICovXG4gICAgICAgICAgY29uc3QgZ2VuZXJpY1NvdXJjZSA9IHByb3BzLmdlbmVyaWNHcmFwaHMgPyBwcm9wcy5nZW5lcmljR3JhcGhzLmJ5TmFtZVtwcm9wcy5jYXRlZ29yeS5wYXJlbnRIYXNoKG5hbWUudmFsdWUpXSA6IHt9XG4gICAgICAgICAgY29uc3QgYWJzdHJhY3Rpb25UeXBlID0gZ2VuZXJpY1NvdXJjZT8uYWJzdHJhY3Rpb25UeXBlIHx8ICcnXG4gICAgICAgICAgc3RvcmUudXBkYXRlRWxlbWVudChwcm9wcy5jYXRlZ29yeSwgeyBuYW1lOiBuYW1lLnZhbHVlLCBhYnN0cmFjdGlvblR5cGUgfSlcbiAgICAgIH1cblxuICAgICAgbmV3Q2hpbGRyZW4udmFsdWUuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICBjb25zdCBnZW5lcmljU291cmNlID0gcHJvcHMuZ2VuZXJpY0dyYXBocyA/IHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW3Byb3BzLmNhdGVnb3J5LnBhcmVudEhhc2gobildIDoge31cbiAgICAgICAgICBjb25zdCBhYnN0cmFjdGlvblR5cGUgPSBnZW5lcmljU291cmNlPy5hYnN0cmFjdGlvblR5cGUgfHwgJydcbiAgICAgICAgICBzdG9yZS5hZGRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhdGVnb3J5LnNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluOiR7cHJvcHMuY2F0ZWdvcnkuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0aW9uVHlwZSlcbiAgICAgIH0pXG4gICAgICAvLyBTaW5jZSB2YWxpZGF0ZSBtYXkgYmUgY2FsbGVkIHR3aWNlLCByZXNldCB0aGUgbmV3Q2hpbGRyZW4gYXJyYXlcbiAgICAgIG5ld0NoaWxkcmVuLnZhbHVlID0gW11cblxuICAgICAgZW1pdCgnY2hhbmdlJywgbmFtZS52YWx1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCAoKSB7XG4gICAgICBlbWl0KCdjaGFuZ2UnLCBwcm9wcy5jYXRlZ29yeS5uYW1lKVxuICB9XG5cbiAgY29uc3QgY29udGV4dCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBzdG9yZS5nZXRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yaWVzQnlOYW1lKHByb3BzLmNhdGVnb3J5LnByb2plY3RJZCwgbmFtZS52YWx1ZSlcbiAgICAgIGNvbnN0IGNvbXBsZXRpb25zID0gc3RvcmUuZ2V0U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlOYW1lc0J5UHJlZml4KHByb3BzLmNhdGVnb3J5LnByb2plY3RJZCwgbmFtZS52YWx1ZSlcbiAgICAgIGlmICghY2F0ZWdvcmllcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4geyBvcmlnaW5hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9ucyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gT2JqZWN0LmZyb21FbnRyaWVzKGNhdGVnb3JpZXMubWFwKGMgPT4gYy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gWyBjaGlsZC5uYW1lLCBjaGlsZCBdKSkuZmxhdCgpKVxuICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSBPYmplY3QuZnJvbUVudHJpZXMoY2F0ZWdvcmllcy5maWx0ZXIoYyA9PiBjLnBhcmVudCkubWFwKGMgPT4gW2MucGFyZW50Py5uYW1lLCBjLnBhcmVudCBdKSlcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICByZWZlcmVuY2U6IGNhdGVnb3JpZXNbMF0sXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbIC4uLk9iamVjdC52YWx1ZXMoY2hpbGRyZW4pIF0gYXMgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlbXSxcbiAgICAgICAgICAgICAgcGFyZW50czogWyAuLi5PYmplY3QudmFsdWVzKHBhcmVudHMpIF0gYXMgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlbXSxcbiAgICAgICAgICAgICAgY29tcGxldGlvbnNcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gaXNDdXJyZW50Q2hpbGQgKG5hbWU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuTmFtZXMudmFsdWUuaGFzKG5hbWUpXG4gIH1cblxuICBmdW5jdGlvbiBpc0N1cnJlbnRQYXJlbnQgKG5hbWU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHByb3BzLmNhdGVnb3J5LnBhcmVudD8ubmFtZSA9PSBuYW1lXG4gIH1cblxuICBmdW5jdGlvbiBpc0N1cnJlbnROYW1lIChuYW1lOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBwcm9wcy5jYXRlZ29yeT8ubmFtZSA9PT0gbmFtZVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0TmFtZSAodmFsdWU6IHN0cmluZykge1xuICAgICAgbmFtZS52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWx0ZXJOYW1lcyAoX3ZhbDogc3RyaW5nLCB1cGRhdGU6IChjYjogKCkgPT4gdm9pZCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJmaWx0ZXJOYW1lc1wiLCB2YWwsIGNvbnRleHQudmFsdWU/LmNvbXBsZXRpb25zKVxuICAgICAgdXBkYXRlKCgpID0+IHtcbiAgICAgICAgICBjb21wbGV0aW9ucy52YWx1ZSA9IGNvbnRleHQudmFsdWU/LmNvbXBsZXRpb25zID8/IFtdXG4gICAgICB9KVxuICB9XG48L3NjcmlwdD5cblxuICA8c3R5bGUgc2NvcGVkPlxuICAuY2F0ZWdvcnkge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiAycHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICB3aWR0aDogdmFyKC0tb3ZlcnZpZXctd2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IHZhcigtLW92ZXJ2aWV3LWhlaWdodCkgIWltcG9ydGFudDtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAuY29udGV4dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXg6IDA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jaGlsZHJlbiwgLnBhcmVudHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4OiAwO1xuICB9XG4gIC5yZWZlcmVuY2Uge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgfVxuICAucmVsYXRpb24ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgbWluLWhlaWdodDogdmFyKC0tb3ZlcnZpZXctaGVpZ2h0KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB9XG4gIC5jb21wbGV0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1heC1oZWlnaHQ6IDVlbTtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbiAgLmhhcy1jaGlsZCxcbiAgLmhhcy1wYXJlbnQsXG4gIC5pcy1jdXJyZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiY29udGFpbmVyXCJcbiAgICAgICA6Y2xhc3M9XCJbXG4gICAgICAgICAgICAgICAnc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgIGBzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS0ke2NhdGVnb3J5SWR9YCxcbiAgICAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgICAgXVwiXG4gICAgICAgOmRhdGEtc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJjYXRlZ29yeUlkXCI+XG5cbiAgICA8ZGl2IDpjbGFzcz1cIlsgJ3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5JyBdXCJcbiAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBjYXRlZ29yeS5jb2xvciB8fCAndHJhbnNwYXJlbnQnIH1cIlxuICAgICAgICAgdi1pZj1cImNhdGVnb3J5XCJcbiAgICAgICAgIDpkYXRhLXNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5PVwiY2F0ZWdvcnlJZFwiPlxuXG4gICAgICA8ZGl2IDpjbGFzcz1cIlsgJ3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuJyBdXCJcbiAgICAgICAgICAgdi1pZj1cIndpdGhDaGlsZHJlblwiPlxuICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvblxuICAgICAgICAgIHYtZm9yPVwiYyBpbiBjYXRlZ29yeS5jaGlsZHJlblwiXG4gICAgICAgICAgOmtleT1cImMuaWRcIlxuICAgICAgICAgIDppc0dlbmVyaWM9XCJpc0dlbmVyaWNcIlxuICAgICAgICAgIDpnZW5lcmljR3JhcGhzPVwiZ2VuZXJpY0dyYXBoc1wiXG4gICAgICAgICAgOmxheW91dD1cImxheW91dFwiXG4gICAgICAgICAgOndpdGhDaGlsZHJlbj1cIndpdGhDaGlsZHJlblwiXG4gICAgICAgICAgOmhpZGVKdXN0aWZpY2F0aW9ucz1cImhpZGVKdXN0aWZpY2F0aW9uc1wiXG4gICAgICAgICAgOmNhdGVnb3J5SWQ9XCJjLmlkXCI+XG4gICAgICAgIDwvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8RHJvcFpvbmUgZGF0YT1cImFkZFwiXG4gICAgICAgICAgICAgICAgdHlwZXM9XCJ1cG10L2Rlc2NyaXB0ZW0gdXBtdC9hbm5vdGF0aW9uIHVwbXQvc2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgQGFubm90YXRpb249XCJkcm9wcGVkQW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgQHNlbGVjdGlvbj1cImRyb3BwZWRTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIEBkZXNjcmlwdGVtPVwiZHJvcHBlZERlc2NyaXB0ZW1cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktanVzdGlmaWNhdGlvblwiXG4gICAgICAgICAgICAgdi1pZj1cImlzSnVzdGlmaWNhdGlvblZpc2libGVcIj5cbiAgICAgICAgICA8dWwgdi1pZj1cImlzR2VuZXJpY1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwianVzdGlmaWNhdGlvbi1kZXNjcmlwdGVtc1wiPlxuICAgICAgICAgICAgPGxpIHYtZm9yPVwiZGVzY3JpcHRlbSBpbiBjYXRlZ29yeURlc2NyaXB0ZW1zXCIgOmtleT1cImRlc2NyaXB0ZW0uaWRcIj5cbiAgICAgICAgICAgICAgPERlc2NyaXB0ZW1SZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgIDpkZXNjcmlwdGVtSWQ9XCJkZXNjcmlwdGVtLmlkXCJcbiAgICAgICAgICAgICAgICA6d2l0aE1lbnU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgOmlzUmVhZG9ubHk9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDwvRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxKdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgOmp1c3RpZmljYXRpb25JZD1cImNhdGVnb3J5Lmp1c3RpZmljYXRpb24/LmlkID8/ICcnXCI+XG4gICAgICAgICAgPC9KdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L0Ryb3Bab25lPlxuXG4gICAgICA8RHJvcFpvbmUgOmRhdGE9XCJgaW46JHtjYXRlZ29yeUlkfWBcIlxuICAgICAgICAgICAgICAgIHR5cGVzPVwidXBtdC9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB1cG10L2dlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnkgdXBtdC9zZWxlY3Rpb24gdXBtdC9kZXNjcmlwdGVtIHVwbXQvYW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgQGFubm90YXRpb249XCJkcm9wcGVkQ3JlYXRpbmdBbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBAc2VsZWN0aW9uPVwiZHJvcHBlZENyZWF0aW5nU2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBAZGVzY3JpcHRlbT1cImRyb3BwZWRDcmVhdGluZ0Rlc2NyaXB0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uXCI+XG4gICAgICAgICAgPFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb25cbiAgICAgICAgICAgIDp0eXBlPVwiY2F0ZWdvcnkuYWJzdHJhY3Rpb25UeXBlXCJcbiAgICAgICAgICAgIDpkaXJlY3Rpb249XCJsYXlvdXRcIlxuICAgICAgICAgICAgOmNoaWxkcmVuQ291bnQ9XCJjYXRlZ29yeS5jaGlsZHJlbi5sZW5ndGhcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbmluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jcml0ZXJpb25cIj5cbiAgICAgICAgICAgICAge3sgY3JpdGVyaW9uIH19XG4gICAgICAgICAgICAgIDxxLXRvb2x0aXBcbiAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgZGVuc2U+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiY3JpdGVyaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3JpdGVyaW9uLXRvb2x0aXBcIj57eyBjcml0ZXJpb24gfX08L2Rpdj5cbiAgICAgICAgICAgICAgICBDcml0ZXJpb25cbiAgICAgICAgICAgICAgPC9xLXRvb2x0aXA+XG4gICAgICAgICAgICAgIDxxLXBvcHVwLWVkaXQgdi1tb2RlbD1cImNyaXRlcmlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0by1zYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2xvdD1cInNjb3BlXCI+XG4gICAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ3JpdGVyaW9uXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2NvcGUudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgQGtleXVwLmN0cmwuZW50ZXI9XCJzY29wZS5zZXRcIlxuICAgICAgICAgICAgICAgICAgQGtleXVwLmVzYz1cInNjb3BlLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgYXV0b2dyb3dcbiAgICAgICAgICAgICAgICAgIGF1dG9mb2N1cyAvPlxuICAgICAgICAgICAgICA8L3EtcG9wdXAtZWRpdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEVsZW1lbnRNZW51XG4gICAgICAgICAgICAgIGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb25tZW51XCJcbiAgICAgICAgICAgICAgOmFjdGlvbnM9XCJyZWxhdGlvbkFjdGlvbnNcIiAvPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGNsYXNzPVwicHJpbnQtcmVtb3ZlZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgdGl0bGU9XCJDcmVhdGUgYSBuZXcgY2hpbGQgY2F0ZWdvcnlcIlxuICAgICAgICAgICAgICBpY29uPVwibWRpLXBsdXNcIj5cbiAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgIHRvdWNoLXBvc2l0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWxpc3QgZGVuc2Ugc3R5bGU9XCJtaW4td2lkdGg6IDEwMHB4XCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKFtsYWJlbCwgbmFtZV0sIGkpIGluIHByb3Bvc2VkQ2hpbGRyZW5OYW1lc1wiXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiY3JlYXRlQ2hpbGRDYXRlZ29yeShuYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICAgICAgICAgIHt7IGxhYmVsIH19XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRHJvcFpvbmU+XG5cbiAgICAgIDxEcm9wWm9uZSBkYXRhPVwiYWRkXCJcbiAgICAgICAgICAgICAgICB0eXBlcz1cInVwbXQvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkgdXBtdC9nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5IHVwbXQvc2VsZWN0aW9uIHVwbXQvZGVzY3JpcHRlbSB1cG10L2Fubm90YXRpb24gdXBtdC9jb2xvclwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIEBzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeT1cImRyb3BwZWRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgQGdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJkcm9wcGVkR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgQGFubm90YXRpb249XCJkcm9wcGVkQW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgQHNlbGVjdGlvbj1cImRyb3BwZWRTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIEBkZXNjcmlwdGVtPVwiZHJvcHBlZERlc2NyaXB0ZW1cIlxuICAgICAgICAgICAgICAgIEBjb2xvcj1cImRyb3BwZWRDb2xvclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyXCJcbiAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdoYXMtZXJyb3InOiBnZW5lcmljRWxlbWVudC5lcnJvcnM/Lmxlbmd0aCB9XCI+XG4gICAgICAgICAgPERyYWdFbGVtZW50XG4gICAgICAgICAgICB0eXBlPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnlcIlxuICAgICAgICAgICAgOmRhdGE9XCJjYXRlZ29yeUlkXCJcbiAgICAgICAgICAgIEBjbGljay5tZXRhPVwiZGVidWdcIj5cbiAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgOm5hbWU9XCJjYXRlZ29yeUljb25cIj5cbiAgICAgICAgICAgIDwvcS1pY29uPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1uYW1lXCI+e3sgY2F0ZWdvcnlOYW1lIH19XG4gICAgICAgICAgICAgIDxxLXBvcHVwLWVkaXQgdi1tb2RlbD1cImNhdGVnb3J5TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zbG90PVwic2NvcGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG8tc2F2ZT5cbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlOYW1lSW5wdXQgQGNoYW5nZT1cInNjb3BlLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpnZW5lcmljR3JhcGhzPVwiZ2VuZXJpY0dyYXBoc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjYXRlZ29yeT1cImNhdGVnb3J5XCIgLz5cbiAgICAgICAgICAgICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8cS10b29sdGlwICBjbGFzcz1cImJnLXJlZC01XCIgYW5jaG9yPVwidG9wIHJpZ2h0XCIgc2VsZj1cInRvcCBsZWZ0XCIgdi1pZj1cImdlbmVyaWNFbGVtZW50LmVycm9ycz8ubGVuZ3RoXCI+XG4gICAgICAgICAgICAgIHt7IGNhdGVnb3J5TmFtZSB9fVxuICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZXJyb3IsIGtleSBpbiBnZW5lcmljRWxlbWVudC5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIDprZXk9XCJrZXlcIj5cbiAgICAgICAgICAgICAgICB7eyBlcnJvciB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgICAgICAgPHEtdG9vbHRpcCB2LWVsc2U+XG4gICAgICAgICAgICAgIHt7IGNhdGVnb3J5TmFtZSB9fSAoe3sgaXNHZW5lcmljID8gJ0dlbmVyaWMgU3luY2hyb25pYyBDYXRlZ29yeScgOiAnU3BlY2lmaWMgU3luY2hyb25pYyBDYXRlZ29yeScgfX1cbiAgICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgICAgIDwvRHJhZ0VsZW1lbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW1lbnQtdG9vbGJhclwiPlxuICAgICAgICAgICAgPHEtYmFkZ2VcbiAgICAgICAgICAgICAgQGNsaWNrPVwiZGlzcGxheUp1c3RpZmljYXRpb24gPSAhZGlzcGxheUp1c3RpZmljYXRpb25cIlxuICAgICAgICAgICAgICBjbGFzcz1cImRlc2NyaXB0ZW1zLWJhZGdlXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJncmV5LTZcIlxuICAgICAgICAgICAgICA6dGl0bGU9XCJgJHtjYXRlZ29yeURlc2NyaXB0ZW1Db3VudH0gZGVzY3JpcHRlbXNgXCJcbiAgICAgICAgICAgICAgcm91bmRlZD57eyBjYXRlZ29yeURlc2NyaXB0ZW1Db3VudCB9fTwvcS1iYWRnZT5cbiAgICAgICAgICAgIDxOb3RlSWNvblxuICAgICAgICAgICAgICA6ZWxlbWVudD1cImNhdGVnb3J5XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtZW50LXRvb2xiYXItc2Vjb25kYXJ5IG9uLW5hbWUtaG92ZXJcIj5cbiAgICAgICAgICAgICAgPENvbG9yaXplSWNvblxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjYXRlZ29yeUNvbG9yXCIgLz5cbiAgICAgICAgICAgICAgPEVsZW1lbnRNZW51XG4gICAgICAgICAgICAgICAgOmFjdGlvbnM9XCJtZW51QWN0aW9uc1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Ryb3Bab25lPlxuXG4gICAgICA8RHJvcFpvbmUgOmRhdGE9XCJgYmVmb3JlOiR7Y2F0ZWdvcnlJZH1gXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiY2F0ZWdvcnkuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZFwiXG4gICAgICAgICAgICAgICAgdHlwZXM9XCJ1cG10L3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5IHVwbXQvZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeSB1cG10L3NlbGVjdGlvbiB1cG10L2Rlc2NyaXB0ZW0gdXBtdC9hbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVtcHR5LXBhZGRpbmcgbmV3c3NjLWRyb3B6b25lXCJcbiAgICAgICAgICAgICAgICBAc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJkcm9wcGVkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgIEBnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5PVwiZHJvcHBlZEdlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgIEBhbm5vdGF0aW9uPVwiZHJvcHBlZENyZWF0aW5nQW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgQHNlbGVjdGlvbj1cImRyb3BwZWRDcmVhdGluZ1NlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgQGRlc2NyaXB0ZW09XCJkcm9wcGVkQ3JlYXRpbmdEZXNjcmlwdGVtXCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cImNyZWF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGBiZWZvcmU6JHtjYXRlZ29yeUlkfWApXCJcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGNsYXNzPVwibmV3c3NjLWJ1dHRvbiBwcmludC1oaWRkZW5cIlxuICAgICAgICAgIDppY29uPVwiaXNWZXJ0aWNhbCA/ICdtZGktbWVudS11cCcgOiAnbWRpLW1lbnUtcmlnaHQnXCI+XG4gICAgICAgICAgPHEtdG9vbHRpcD5DcmVhdGUgYSBwYXJlbnQgY2F0ZWdvcnk8L3EtdG9vbHRpcD5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvRHJvcFpvbmU+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1pZj1cImNhdGVnb3J5LnBhcmVudElkICYmIHdpdGhDaGlsZHJlblwiXG4gICAgICAgIGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyXCJcbiAgICAgICAgPlxuICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbiA6ZGlyZWN0aW9uPVwibGF5b3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNoaWxkcmVuQ291bnQ9XCIxXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnXG4gIGltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcidcbiAgaW1wb3J0IHsgc3RyaXBIYXNobmFtZSB9IGZyb20gJy4vdXRpbCdcbiAgaW1wb3J0IERlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbiBmcm9tICcuL0Rlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbi52dWUnXG4gIGltcG9ydCBKdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb24gZnJvbSAnLi9KdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb24udnVlJ1xuICBpbXBvcnQgRHJvcFpvbmUgZnJvbSAnLi9Ecm9wWm9uZS52dWUnXG4gIGltcG9ydCBEcmFnRWxlbWVudCBmcm9tICcuL0RyYWdFbGVtZW50LnZ1ZSdcbiAgaW1wb3J0IENhdGVnb3J5TmFtZUlucHV0IGZyb20gJy4vQ2F0ZWdvcnlOYW1lSW5wdXQudnVlJ1xuICBpbXBvcnQgQ29sb3JpemVJY29uIGZyb20gJy4vQ29sb3JpemVJY29uLnZ1ZSdcbiAgaW1wb3J0IE5vdGVJY29uIGZyb20gJy4vTm90ZUljb24udnVlJ1xuICBpbXBvcnQgRWxlbWVudE1lbnUgZnJvbSAnLi9FbGVtZW50TWVudS52dWUnXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uIGZyb20gJy4vU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbi52dWUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCB7IHVzZUludGVyZmFjZVN0b3JlIH0gZnJvbSAnc3RvcmVzL2ludGVyZmFjZSdcblxuICBjb25zdCAkcSA9IHVzZVF1YXNhcigpXG5cbiAgY29uc3QgaXN0b3JlID0gdXNlSW50ZXJmYWNlU3RvcmUoKVxuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCB7IGN1cnJlbnRQcm9qZWN0SWQgfSA9IHN0b3JlVG9SZWZzKGlzdG9yZSlcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGNhdGVnb3J5SWQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sXG4gICAgICBnZW5lcmljR3JhcGhzOiB7IHR5cGU6IE9iamVjdCwgZGVmYXVsdDogbnVsbCB9LFxuICAgICAgbGF5b3V0OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJob3Jpem9udGFsXCIgfSwgLy8gaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICAgICAgaGlkZUp1c3RpZmljYXRpb25zOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXG4gICAgICBpc0dlbmVyaWM6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcbiAgICAgIHdpdGhDaGlsZHJlbjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH1cbiAgfSlcblxuICBjb25zdCBjYXRlZ29yeSA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQpKVxuXG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGNvbXB1dGVkKHtcbiAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlID8gY2F0ZWdvcnkudmFsdWUubmFtZSA6IFwiXCJcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgICAvKiBJZiB0aGUgbmV3IG5hbWUgaXMgZnJvbSBhbiBleGlzdGluZyBjYXRlZ29yeSB0aGF0IGhhcyBhbiBhYnN0cmFjdGlvblR5cGUsIHRoZW4gYWxzbyB1cGRhdGUgaXRzIGFic3RyYWN0aW9uVHlwZSAqL1xuICAgICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gY2F0ZWdvcnkudmFsdWU/LnBhcmVudEhhc2godmFsdWUpID8/IHZhbHVlXG4gICAgICAgICAgY29uc3QgZ2VuZXJpY1NvdXJjZSA9IHByb3BzLmdlbmVyaWNHcmFwaHMgPyBwcm9wcy5nZW5lcmljR3JhcGhzLmJ5TmFtZVtmdWxsTmFtZV0gOiB7fVxuICAgICAgICAgIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGdlbmVyaWNTb3VyY2U/LmFic3RyYWN0aW9uVHlwZSB8fCAnJ1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQsIHsgbmFtZTogdmFsdWUsIGFic3RyYWN0aW9uVHlwZTogYWJzdHJhY3Rpb25UeXBlIH0pXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgY2F0ZWdvcnlDb2xvciA9IGNvbXB1dGVkKHtcbiAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlID8gY2F0ZWdvcnkudmFsdWUuY29sb3IgOiBcIlwiXG4gICAgICB9LFxuICAgICAgc2V0IChjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgICAgaWYgKGNvbG9yID09ICcjZmZmZmZmJykge1xuICAgICAgICAgICAgICBjb2xvciA9ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHN0b3JlLnVwZGF0ZVN5bmNocm9uaWNDYXRlZ29yeUNvbG9yKGNhdGVnb3J5LnZhbHVlPy5wcm9qZWN0SWQsIGNhdGVnb3J5LnZhbHVlPy5uYW1lLCBjb2xvcilcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBjYXRlZ29yeUljb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5pc0dlbmVyaWMgPyAgXCJtZGktYWxwaGEtcy1ib3hcIiA6IFwibWRpLWFscGhhLXMtYm94LW91dGxpbmVcIilcblxuICBjb25zdCBjcml0ZXJpb24gPSBjb21wdXRlZCh7XG4gICAgICBnZXQ6ICgpID0+IGNhdGVnb3J5LnZhbHVlPy5jcml0ZXJpb24gPz8gJycsXG4gICAgICBzZXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQsIHsgY3JpdGVyaW9uOiB2YWx1ZSB9KVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGlzTGVhZiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiAhY2F0ZWdvcnkudmFsdWU/LmNoaWxkcmVuLmxlbmd0aFxuICB9KVxuXG4gIGNvbnN0IGlzVmVydGljYWwgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5sYXlvdXQgPT0gJ3ZlcnRpY2FsJylcblxuICAvLyBJbml0aWFsIHN0YXRlIGZvciBkaXNwbGF5SnVzdGlmaWNhdGlvblxuICAvLyBIaWRlIGJ5IGRlZmF1bHRcbiAgY29uc3QgZGlzcGxheUp1c3RpZmljYXRpb24gPSByZWYoZmFsc2UpXG5cbiAgY29uc3QgaXNKdXN0aWZpY2F0aW9uVmlzaWJsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS52YWx1ZT8uanVzdGlmaWNhdGlvbj8uZGVzY3JpcHRlbXM/Lmxlbmd0aCAmJiBkaXNwbGF5SnVzdGlmaWNhdGlvbi52YWx1ZVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3J5RGVzY3JpcHRlbXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAoISBjYXRlZ29yeS52YWx1ZSB8fCAhIGN1cnJlbnRQcm9qZWN0SWQudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcy5pc0dlbmVyaWMpIHtcbiAgICAgICAgICAvLyBRdWVyeSBmb3IgYWxsIGRlc2NyaXB0ZW1zIGZvciBhbGwgY2F0ZWdvcmllc1xuICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBzdG9yZS5nZXRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yaWVzQnlOYW1lIChjdXJyZW50UHJvamVjdElkLnZhbHVlLCBjYXRlZ29yeS52YWx1ZS5uYW1lKVxuICAgICAgICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcChjYXQgPT4gY2F0Lmp1c3RpZmljYXRpb24/LmRlc2NyaXB0ZW1zIHx8IFtdKS5mbGF0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlPy5qdXN0aWZpY2F0aW9uPy5kZXNjcmlwdGVtcyB8fCBbXVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3J5RGVzY3JpcHRlbUNvdW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5RGVzY3JpcHRlbXMudmFsdWUubGVuZ3RoXG4gIH0pXG5cbiAgaWYgKGlzTGVhZi52YWx1ZSkge1xuICAgICAgZGlzcGxheUp1c3RpZmljYXRpb24udmFsdWUgPSAhIHByb3BzLmhpZGVKdXN0aWZpY2F0aW9ucyB8fCBjYXRlZ29yeURlc2NyaXB0ZW1Db3VudC52YWx1ZSA+IDBcbiAgfVxuXG4gIGNvbnN0IGdlbmVyaWNFbGVtZW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKGNhdGVnb3J5LnZhbHVlICYmIHByb3BzLmdlbmVyaWNHcmFwaHMpIHtcbiAgICAgICAgICByZXR1cm4gIHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW2NhdGVnb3J5LnZhbHVlLmZ1bGxOYW1lXSB8fCB7IGNoaWxkcmVuTmFtZXM6IG5ldyBTZXQoKSB9XG4gICAgICB9XG4gICAgICAvLyBJbiBhbGwgb3RoZXIgY2FzZXMsIHJldHVybiBlbXB0eSBkaWN0XG4gICAgICByZXR1cm4ge31cbiAgfSlcblxuICBjb25zdCBwcm9wb3NlZENoaWxkcmVuTmFtZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50Q2hpbGRyZW4gPSBuZXcgU2V0KChjYXRlZ29yeS52YWx1ZT8uY2hpbGRyZW4gfHwgW10pLm1hcChjaGlsZCA9PiBjaGlsZC5mdWxsTmFtZSkpXG4gICAgICBjb25zdCBjaGlsZHJlbk5hbWVzID0gWyAuLi5nZW5lcmljRWxlbWVudC52YWx1ZS5jaGlsZHJlbk5hbWVzLmRpZmZlcmVuY2UoY3VycmVudENoaWxkcmVuKSBdLnRvU29ydGVkKClcbiAgICAgIHJldHVybiBbIFtcIk5ldyBjaGlsZCBjYXRlZ29yeVwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgIC4uLmNoaWxkcmVuTmFtZXMubWFwKChuYW1lOiBzdHJpbmcpID0+IFsgbmFtZSwgc3RyaXBIYXNobmFtZShuYW1lKSBdKSBdXG4gIH0pXG5cbiAgZnVuY3Rpb24gZGVidWcgKCkge1xuICAgICAgKHdpbmRvdyBhcyBhbnkpLmNhdGVnb3J5ID0gY2F0ZWdvcnkudmFsdWU7XG4gICAgICBjb25zb2xlLmxvZyhcIlNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5XCIsIHsgY2F0ZWdvcnk6IGNhdGVnb3J5LnZhbHVlIH0pXG4gIH1cblxuICBmdW5jdGlvbiBzaG93Q29udGVudCAoKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIGNvbnRlbnQgaXMgZXhwYW5kZWQgYW5kIHZpc2libGVcbiAgICAgIGNvbnNvbGUubG9nKFwiU2hvdWxkIGV4cGFuZCBTU0NcIilcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5ICh3aGVyZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICBpZiAoY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICBpZiAoISBuYW1lKSB7XG4gICAgICAgICAgICAgIG5hbWUgPSBpc3RvcmUubmV3U1NDSWQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGNhdGVnb3J5LnZhbHVlLnBhcmVudEhhc2gobmFtZSlcbiAgICAgICAgICBjb25zdCBnZW5lcmljU291cmNlID0gcHJvcHMuZ2VuZXJpY0dyYXBocyA/IHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW2Z1bGxOYW1lXSA6IHt9XG4gICAgICAgICAgY29uc3QgYWJzdHJhY3Rpb25UeXBlID0gZ2VuZXJpY1NvdXJjZT8uYWJzdHJhY3Rpb25UeXBlIHx8ICcnXG4gICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS52YWx1ZS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJzdHJhY3Rpb25UeXBlKVxuICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSAoY2F0ZWdvcnlJZDogc3RyaW5nKSB7XG4gICAgICAvLyBETkQgb24gYSBjYXRlZ29yeSB0byByZXBhcmVudFxuICAgICAgaWYgKCFjYXRlZ29yeUlkKSB7XG4gICAgICAgICAgLy8gRW1wdHkgY2F0ZWdvcnlJZDogY3JlYXRlIGEgbmV3IGNoaWxkXG4gICAgICAgICAgY3JlYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoYGluOiR7cHJvcHMuY2F0ZWdvcnlJZH1gKVxuICAgICAgfVxuICAgICAgY29uc3Qgc291cmNlID0gc3RvcmUuZ2V0U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoY2F0ZWdvcnlJZClcbiAgICAgIGlmIChjYXRlZ29yeUlkICE9PSBwcm9wcy5jYXRlZ29yeUlkICYmIHNvdXJjZSkge1xuICAgICAgICAgIC8vIEl0IHdhcyBtYXliZSBhIHJvb3QgY2F0ZWdvcnkuIFJlbW92ZSBpdCBmcm9tIHRoZSByb290XG4gICAgICAgICAgLy8gY2F0ZWdvcmllcyBhbmQgcmVwYXJlbnQuXG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCA9IHNvdXJjZS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkXG4gICAgICAgICAgaWYgKHNwZWNpZmljc3luY2hyb25pY21vZGVsSWQpIHtcbiAgICAgICAgICAgICAgLy8gSXQgd2FzIGEgcm9vdCBjYXRlZ29yeSAtIG1vdmUgYWxsIGl0cyBjaGlsZHJlbiBhcyByb290IGNhdGVnb3JpZXNcbiAgICAgICAgICAgICAgc291cmNlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gc3RvcmUudXBkYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoY2hpbGQuaWQsIHsgc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IG51bGwgfSkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGNhdGVnb3J5SWQsIHtcbiAgICAgICAgICAgICAgc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZDogbnVsbCxcbiAgICAgICAgICAgICAgcGFyZW50SWQ6IHByb3BzLmNhdGVnb3J5SWRcbiAgICAgICAgICB9KVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZEdlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnkgKGNhdGVnb3J5TmFtZTogc3RyaW5nLCB3aGVyZTogc3RyaW5nKSB7XG4gICAgICBpZiAod2hlcmUgPT09ICdhZGQnKSB7XG4gICAgICAgICAgLy8gVGhlcmUgaXMgbm8gXCJhZGRcIiBmb3Igbm93XG4gICAgICAgICAgd2hlcmUgPSBgaW46JHtwcm9wcy5jYXRlZ29yeUlkfWBcbiAgICAgIH1cbiAgICAgIGlmIChjYXRlZ29yeS52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGdlbmVyaWNTb3VyY2UgPSBwcm9wcy5nZW5lcmljR3JhcGhzID8gcHJvcHMuZ2VuZXJpY0dyYXBocy5ieU5hbWVbY2F0ZWdvcnlOYW1lXSA6IHt9XG4gICAgICAgICAgY29uc3QgYWJzdHJhY3Rpb25UeXBlID0gZ2VuZXJpY1NvdXJjZT8uYWJzdHJhY3Rpb25UeXBlIHx8ICcnXG4gICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoc3RyaXBIYXNobmFtZShjYXRlZ29yeU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnZhbHVlLnNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYnN0cmFjdGlvblR5cGUpXG4gICAgICAgICAgc2hvd0NvbnRlbnQoKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZERlc2NyaXB0ZW0gKGRlc2NyaXB0ZW1JZDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGVtID0gc3RvcmUuZ2V0RGVzY3JpcHRlbShkZXNjcmlwdGVtSWQpXG4gICAgICBpZiAoZGVzY3JpcHRlbSkge1xuICAgICAgICAgIHN0b3JlLmFkZFRleHRTZWxlY3Rpb25Ub1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGRlc2NyaXB0ZW0udG9KU09OKCksIHByb3BzLmNhdGVnb3J5SWQpXG4gICAgICAgICAgc3RvcmUuZGVsZXRlRGVzY3JpcHRlbShkZXNjcmlwdGVtSWQpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkQW5ub3RhdGlvbiAoYW5ub3RhdGlvbklkOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGFubm90YXRpb24gPSBzdG9yZS5nZXRBbm5vdGF0aW9uKGFubm90YXRpb25JZClcbiAgICAgIGlmIChhbm5vdGF0aW9uKSB7XG4gICAgICAgICAgc3RvcmUuYWRkVGV4dFNlbGVjdGlvblRvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoYW5ub3RhdGlvbi50b0pTT04oKSwgcHJvcHMuY2F0ZWdvcnlJZClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRTZWxlY3Rpb24gKHNlbGVjdGlvbkRhdGE6IHN0cmluZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBKU09OLnBhcnNlKHNlbGVjdGlvbkRhdGEpXG4gICAgICAgICAgc3RvcmUuYWRkVGV4dFNlbGVjdGlvblRvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoc2VsZWN0aW9uLCBwcm9wcy5jYXRlZ29yeUlkKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBDYW5ub3QgcGFyc2UgJHtzZWxlY3Rpb25EYXRhfTogJHtlfWApXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkQ29sb3IgKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgIHN0b3JlLnVwZGF0ZVN5bmNocm9uaWNDYXRlZ29yeUNvbG9yKGNhdGVnb3J5LnZhbHVlPy5wcm9qZWN0SWQsIGNhdGVnb3J5LnZhbHVlPy5uYW1lLCBjb2xvcilcbiAgfVxuXG4gIC8vIERyb3BwZWQgc2VsZWN0aW9ucyB0byBjcmVhdGUgYSBTU0NhdGVnb3J5LiBkYXRhIGlzIGJlZm9yZSBvciBhZnRlclxuICBmdW5jdGlvbiBkcm9wcGVkQ3JlYXRpbmdEZXNjcmlwdGVtIChkZXNjcmlwdGVtSWQ6IHN0cmluZywgd2hlcmU6IHN0cmluZykge1xuICAgICAgY29uc3QgZGVzY3JpcHRlbSA9IHN0b3JlLmdldERlc2NyaXB0ZW0oZGVzY3JpcHRlbUlkKVxuICAgICAgaWYgKGRlc2NyaXB0ZW0gJiYgY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICBzdG9yZS5hZGRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShpc3RvcmUubmV3U1NDSWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS52YWx1ZS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0ZW0udG9KU09OKCkpXG4gICAgICAgICAgc2hvd0NvbnRlbnQoKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZENyZWF0aW5nQW5ub3RhdGlvbiAoYW5ub3RhdGlvbklkOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGFubm90YXRpb24gPSBzdG9yZS5nZXRBbm5vdGF0aW9uKGFubm90YXRpb25JZClcbiAgICAgIGlmIChhbm5vdGF0aW9uICYmIGNhdGVnb3J5LnZhbHVlKSB7XG4gICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoaXN0b3JlLm5ld1NTQ0lkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkudmFsdWUuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uLnRvSlNPTigpKVxuICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRDcmVhdGluZ1NlbGVjdGlvbiAoc2VsZWN0aW9uRGF0YTogc3RyaW5nLCB3aGVyZTogc3RyaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEpTT04ucGFyc2Uoc2VsZWN0aW9uRGF0YSlcbiAgICAgICAgICBpZiAoc2VsZWN0aW9uICYmIGNhdGVnb3J5LnZhbHVlKSB7XG4gICAgICAgICAgICAgIHN0b3JlLmFkZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGlzdG9yZS5uZXdTU0NJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS52YWx1ZS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uKVxuICAgICAgICAgICAgICBzaG93Q29udGVudCgpXG4gICAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBDYW5ub3QgcGFyc2UgJHtzZWxlY3Rpb25EYXRhfTogJHtlfWApXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVBYnN0cmFjdGlvblR5cGUgKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQsIHsgYWJzdHJhY3Rpb25UeXBlOiB2YWx1ZSB9KVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hpbGRDYXRlZ29yeSAobmFtZTogc3RyaW5nID0gXCJcIikge1xuICAgICAgY3JlYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoYGluOiR7cHJvcHMuY2F0ZWdvcnlJZH1gLCBuYW1lKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JpdGVyaW9uUG9wdXAgKCkge1xuICAgICAgY29uc3QgY3JpdGVyaW9uID0gY2F0ZWdvcnkudmFsdWU/LmNyaXRlcmlvbiB8fCBcIlwiXG4gICAgICAkcS5kaWFsb2coe1xuICAgICAgICAgIHRpdGxlOiAnRW50ZXIgYSBjcml0ZXJpb24gZm9yIHRoaXMgcmVsYXRpb24nLFxuICAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogJ1lvdSBjYW4gc3BlY2lmeSBhIGNyaXRlcmlvbiBmb3IgdGhpcyByZWxhdGlvbiBvciB0aGUgYXNzb2NpYXRlZCBjYXRlZ29yeS4nLFxuICAgICAgICAgIHByb21wdDoge1xuICAgICAgICAgICAgICBtb2RlbDogY3JpdGVyaW9uLFxuICAgICAgICAgICAgICB0eXBlOiAndGV4dCcgLy8gb3B0aW9uYWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhbmNlbDogdHJ1ZSxcbiAgICAgICAgICBwZXJzaXN0ZW50OiB0cnVlXG4gICAgICB9KS5vbk9rKG5ld1ZhbHVlID0+IHtcbiAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgc3RvcmUudXBkYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCwgeyBjcml0ZXJpb246IG5ld1ZhbHVlIH0pXG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIGltcG9ydCB0eXBlIHsgTmFtZWRBY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL3V0aWwudHMnXG5cbiAgY29uc3QgbWVudUFjdGlvbnM6IE5hbWVkQWN0aW9uW10gPSBbXG4gICAgICBbIFwiRGVsZXRlIHRoaXMgY2F0ZWdvcnkgb25seVwiLCAoKSA9PiBzdG9yZS5kZWxldGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShwcm9wcy5jYXRlZ29yeUlkLCBmYWxzZSkgXSxcbiAgICAgIFsgXCJEZWxldGUgdGhpcyBjYXRlZ29yeSBhbmQgaXRzIGNoaWxkcmVuXCIsICgpID0+IHN0b3JlLmRlbGV0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQsIHRydWUpIF0sXG4gIF1cblxuICBjb25zdCByZWxhdGlvbkFjdGlvbnM6IE5hbWVkQWN0aW9uW10gPSBbXG4gICAgICBbIFwiQ3JlYXRlIGEgbmV3IGNoaWxkIGNhdGVnb3J5XCIsICgpID0+IGNyZWF0ZUNoaWxkQ2F0ZWdvcnkoKSBdLFxuICAgICAgWyBcIlNldCBhcyBnZW5lcmljIGFic3RyYWN0aW9uXCIsICgpID0+IHVwZGF0ZUFic3RyYWN0aW9uVHlwZSgnJykgXSxcbiAgICAgIFsgXCJTZXQgYXMgYWdncmVnYXRpb24gYWJzdHJhY3Rpb24g4ouEXCIsICgpID0+IHVwZGF0ZUFic3RyYWN0aW9uVHlwZSgnYWdncmVnYXRpb24nKSBdLFxuICAgICAgWyBcIlNldCBhcyBzcGVjaWFsaXphdGlvbiBhYnN0cmFjdGlvbiDip41cIiwgKCkgPT4gdXBkYXRlQWJzdHJhY3Rpb25UeXBlKCdzcGVjaWFsaXphdGlvbicpIF0sXG4gICAgICBbIFwiRGVmaW5lIGEgY3JpdGVyaW9uIGZvciB0aGlzIGFic3RyYWN0aW9uIHJlbGF0aW9uXCIsICgpID0+IGNyaXRlcmlvblBvcHVwKCkgXVxuICBdXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmhlYWRlci1jbGFzcyB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZWxlbWVudC10b29sYmFyLCAuZWxlbWVudC10b29sYmFyLXNlY29uZGFyeSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW4ge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIC52ZXJ0aWNhbCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW4ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIG1hcmdpbjogMCAxZW07XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuLmhvcml6b250YWwge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB7XG4gICAgICBtaW4td2lkdGg6IHZhcigtLW1vbWVudC1taW5pbXVtLXdpZHRoKTtcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgZmxleDogMTtcbiAgfVxuICAudmVydGljYWwgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmhpZ2hsaWdodGVkIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XG4gIH1cbiAgLmhpZ2hsaWdodGVkIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1qdXN0aWZpY2F0aW9uIHtcbiAgICAgIHdpZHRoOiBjYWxjKHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktZGVzY3JpcHRlbS13aWR0aCkgKyA1MHB4KTtcbiAgfVxuICAudmVydGljYWwgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWp1c3RpZmljYXRpb24ge1xuICAgICAgd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktZGVzY3JpcHRlbS13aWR0aCk7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlciB7XG4gICAgICB3aWR0aDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1oZWFkZXItd2lkdGgpO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1qdXN0aWZpY2F0aW9uIHtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCBncmV5O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyLmhhcy1lcnJvciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWJvZHkge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWJvZHkgLnEtaXRlbSB7XG4gICAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5xLWl0ZW1fX3NlY3Rpb24tLWF2YXRhciB7XG4gICAgICBtaW4td2lkdGg6IDJweDtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGFuZGxlIHtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oYW5kbGU6aG92ZXIge1xuICAgICAgb3BhY2l0eTogLjg7XG4gIH1cbiAgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMDtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktbmFtZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxOHB4KTtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAvKiBTaW5jZSB3ZSBkaXNwbGF5IGEgYm9yZGVyIG9uIGhvdmVyLCBtYXRjaCB0aGUgc3BhY2UgaW4gbm9uLWhvdmVyIHN0YXRlICovXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktbmFtZTpob3ZlciB7XG4gICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2NjY2NjY2VlO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1qdXN0aWZpY2F0aW9uIHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6IDE2cHg7XG4gICAgICBvcGFjaXR5OiAxLjA7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgQHN0YXJ0aW5nLXN0eWxlIHtcbiAgICAgIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1qdXN0aWZpY2F0aW9uIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXIge1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb24ge1xuICAgICAgd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktcmVsYXRpb24td2lkdGgpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC52ZXJ0aWNhbCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb24ge1xuICAgICAgaGVpZ2h0OiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LXJlbGF0aW9uLXdpZHRoKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbmluZm8ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiBjYWxjKDUwJSArIDEwcHgpO1xuICAgICAgd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktcmVsYXRpb24td2lkdGgpO1xuICAgICAgbGVmdDogMDtcbiAgICAgIG9wYWNpdHk6IDAuMjtcbiAgfVxuICAudmVydGljYWwgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uaW5mbyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1yZWxhdGlvbi13aWR0aCk7XG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDQwcHgpO1xuICB9XG5cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uOmhvdmVyICAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uaW5mbyB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jcml0ZXJpb24ge1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIGxpZ2h0Z3JleTtcbiAgICAgIHdpZHRoOiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LXJlbGF0aW9uLXdpZHRoKTtcbiAgICAgIG1pbi1oZWlnaHQ6IDFlbTtcbiAgICAgIG1heC1oZWlnaHQ6IDI0cHg7XG5cbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXI6aG92ZXIgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuICAuZWxlbWVudC10b29sYmFyIHtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXIge1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBmbGV4OiAxO1xuICB9XG4gIC52ZXJ0aWNhbCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgfVxuICAuZGVzY3JpcHRlbXMtYmFkZ2Uge1xuICAgICAgb3BhY2l0eTogLjY7XG4gIH1cbiAgLmRlc2NyaXB0ZW1zLWJhZGdlOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLm5ld3NzYy1idXR0b24ge1xuICAgICAgd2lkdGg6IDhweDtcbiAgICAgIG9wYWNpdHk6IC41O1xuICB9XG4gIC52ZXJ0aWNhbCAubmV3c3NjLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIHdpZHRoOiA0OHB4O1xuICB9XG4gIC5jcml0ZXJpb24tdG9vbHRpcCB7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIH1cbiAgLmp1c3RpZmljYXRpb24tZGVzY3JpcHRlbXMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY3JpdGVyaW9uIHtcbiAgICAgIGN1cnNvcjogdGV4dDtcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzEiLCJfaG9pc3RlZF8yIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9ob2lzdGVkXzQiLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzYiLCJfaG9pc3RlZF83IiwiX2hvaXN0ZWRfOCIsIl9ob2lzdGVkXzMiLCJfbm9ybWFsaXplU3R5bGUiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVGV4dFZOb2RlIiwic3BhbiIsImNvbG9yIiwiX21lcmdlUHJvcHMiLCJfdG9IYW5kbGVycyIsIl9yZW5kZXJTbG90IiwiX3VzZU1vZGVsIiwiX3dpdGhNb2RpZmllcnMiLCJfd2l0aEN0eCIsImNvbXBsZXRpb25zIiwibmFtZSIsIl9ob2lzdGVkXzEwIiwiX2hvaXN0ZWRfOSIsIl93aXRoS2V5cyIsImNhdGVnb3J5TmFtZSIsImNyaXRlcmlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJERSxVQUFNLFFBQVE7QUFNZCxVQUFNLFlBQVksSUFBSSxJQUFJO0FBQzFCLFVBQU0sYUFBYSxTQUFTO0FBQUEsTUFDeEIsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLElBQUEs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Z0JBS00sT0FMTixhQUtNO0FBQUEsZ0JBSkpZLFlBQzRCLE9BQUEsY0FBQSxHQUFBO0FBQUEsa0JBQUEsWUFBakIsT0FBQTtBQUFBLGtCQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLGdCQUFhO0FBQUEsZ0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxZQUFBLENBQUE7QUFBQSxnQkFDeEJBLFlBQzJCLE9BQUEsYUFBQSxHQUFBLEVBQXhCLFNBQVMsT0FBQSxZQUFBLENBQVc7QUFBQSxjQUFBLENBQUE7QUFBQTs7Ozs7TUFPZixPQUFBLFNBQVMsMENBRHpCRSxZQWdCVyxPQUFBLFVBQUEsR0FBQTtBQUFBLFFBQUEsS0FBQTtBQUFBLFFBaEJBLE1BQUksVUFBWSxPQUFBLFVBQVU7QUFBQSxRQUUzQixPQUFNO0FBQUEsUUFDTixPQUFNO0FBQUEsUUFDTCw4QkFBNEIsT0FBQTtBQUFBLFFBQzVCLDZCQUEyQixPQUFBO0FBQUEsUUFDM0IsY0FBWSxPQUFBO0FBQUEsUUFDWixhQUFXLE9BQUE7QUFBQSxRQUNYLGNBQVksT0FBQTtBQUFBLE1BQUEsR0FBQTtBQUFBLHlCQUNyQixNQU1RO0FBQUEsVUFOUkYsWUFNUSxNQUFBO0FBQUEsWUFMTCxTQUFLLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBRSxPQUFBLGlDQUFnQyxVQUFXLE9BQUEsVUFBVSxFQUFBO0FBQUEsWUFDN0QsT0FBQTtBQUFBLFlBQ0EsT0FBTTtBQUFBLFlBQ0wsTUFBTSxPQUFBLGFBQVUsZ0JBQUE7QUFBQSxVQUFBLEdBQUE7QUFBQSw2QkFDakIsTUFBK0M7QUFBQSxjQUEvQ0EsWUFBK0MsVUFBQSxNQUFBO0FBQUEsZ0JBQUEsU0FBQVcsUUFBcEMsTUFBd0IsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBO0FBQUEsa0JBQUFSLGdCQUF4Qiw0QkFBd0IsRUFBQTtBQUFBLGdCQUFBLEVBQUEsQ0FBQTtBQUFBOzs7Ozs7OztNQUsvQixPQUFBLFNBQVMsWUFBWSxPQUFBLGdCQUFBbkIsYUFEN0JDLG1CQU1NLE9BTk4sYUFNTTtBQUFBLFFBRkplLFlBQ3lELE9BQUEsb0NBQUEsR0FBQTtBQUFBLFVBRHBCLFdBQVcsT0FBQTtBQUFBLFVBQ1gsZUFBZTtBQUFBLFFBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxXQUFBLENBQUE7QUFBQTs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzNdfQ==
