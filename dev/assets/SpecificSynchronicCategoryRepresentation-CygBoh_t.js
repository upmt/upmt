import { Q as QTooltip } from "./QTooltip-BDEYWBCN.js";
import { a as DragElement, C as ColorizeIcon, D as DropZone } from "./DropZone-BF3p3q4I.js";
import { H as defineComponent, r as ref, bM as reactive, b as computed, _ as _export_sfc, P as createElementBlock, L as openBlock, a9 as createBaseVNode, N as createCommentVNode, ad as normalizeClass, ae as resolveComponent, af as normalizeStyle, S as Fragment, U as renderList, R as createVNode, K as createBlock, M as withCtx, X as toDisplayString, W as createTextVNode, c6 as SpecificSynchronicCategory, aV as renderSlot, aT as mergeProps, c7 as toHandlers, c8 as mergeModels, I as useProjectStore, c5 as useModel, J as useInterfaceStore, bf as storeToRefs, a7 as QIcon, Y as withModifiers, aq as withKeys, Q as QBtn, bg as QCheckbox, be as QInput, V as withDirectives } from "./index-DvOn-zPj.js";
import { Q as QPopupEdit, N as NoteIcon } from "./QSlider-DSrU6296.js";
import { f as QItem, h as QItemSection, Q as QMenu } from "./format-CdVwSh-R.js";
import { Q as QList } from "./QList-CbU5wTnU.js";
import { Q as QBadge } from "./QBadge-BZoT3MGe.js";
import { u as useQuasar, C as ClosePopup } from "./use-quasar-CSqFWFhT.js";
import { Q as QSpace } from "./QSpace-Ju46OXJO.js";
import { E as ElementMenu } from "./ElementMenu-kMtKjiBG.js";
import { Q as QSelect } from "./QSelect-DgnCHkwy.js";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
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
const SpecificSynchronicCategoryRelation = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-73d73011"], ["__file", "SpecificSynchronicCategoryRelation.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
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
const GenericSynchronicCategoryOverview = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-30c68170"], ["__file", "GenericSynchronicCategoryOverview.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
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
const GenericCategoriesOverview = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-1dd7df50"], ["__file", "GenericCategoriesOverview.vue"]]);
const ANNOTATION_COLORS = [
  "#ff9797",
  "#7084b0",
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
function stripContextFromName(name) {
  const hashIndex = name.indexOf(SpecificSynchronicCategory.CONTEXT_MARKER);
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
const _sfc_main$5 = {
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
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
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
const AnnotatedText = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-84769fd3"], ["__file", "AnnotatedText.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
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
const DescriptemModificationDialog = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-10e85d86"], ["__file", "DescriptemModificationDialog.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
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
const DescriptemRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-e00033da"], ["__file", "DescriptemRepresentation.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
const JustificationRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-5c575cb8"], ["__file", "JustificationRepresentation.vue"]]);
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
        const genericSource = props.genericGraphs ? props.genericGraphs.byName[props.category.qualifiedName(name.value)] : {};
        const abstractionType = genericSource?.abstractionType || "";
        store.updateElement(props.category, { name: name.value, abstractionType });
      }
      newChildren.value.forEach((n) => {
        const genericSource = props.genericGraphs ? props.genericGraphs.byName[props.category.qualifiedName(n)] : {};
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
const CategoryNameInput = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-55ee85a3"], ["__file", "CategoryNameInput.vue"]]);
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
        const fullName = category.value?.qualifiedName(value) ?? value;
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
        ...childrenNames.map((name) => [name, stripContextFromName(name)])
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
        const fullName = category.value.qualifiedName(name);
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
          stripContextFromName(categoryName2),
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
    const menuActions = computed(() => {
      const actions = [
        ["Delete this category only", () => store.deleteSpecificSynchronicCategory(props.categoryId, false)],
        ["Delete this category and its children", () => store.deleteSpecificSynchronicCategory(props.categoryId, true)]
      ];
      if (category.value) {
        const name = categoryName.value;
        if (name.endsWith(SpecificSynchronicCategory.CONTEXT_MARKER)) {
          actions.push(["Standard consistency check", () => {
            categoryName.value = name.substr(0, name.length - 1);
          }]);
        } else {
          actions.push(["Contextualized consistency check", () => {
            categoryName.value = name + SpecificSynchronicCategory.CONTEXT_MARKER;
          }]);
        }
      }
      return actions;
    });
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
                createVNode($setup["ElementMenu"], { actions: $setup.menuActions }, null, 8, ["actions"])
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
const SpecificSynchronicCategoryRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e1a86cf2"], ["__file", "SpecificSynchronicCategoryRepresentation.vue"]]);
export {
  AnnotatedText as A,
  DescriptemRepresentation as D,
  GenericCategoriesOverview as G,
  JustificationRepresentation as J,
  SpecificSynchronicCategoryRepresentation as S,
  SpecificSynchronicCategoryRelation as a,
  ANNOTATION_COLORS as b,
  groupBy as g,
  stripContextFromName as s
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbi1DeWdCb2hfdC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXcudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR2VuZXJpY0NhdGVnb3JpZXNPdmVydmlldy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy91dGlsLnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQW5ub3RhdGVkVGV4dC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EZXNjcmlwdGVtTW9kaWZpY2F0aW9uRGlhbG9nLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9KdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb24udnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlOYW1lSW5wdXQudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgY2xhc3M9XCJ0cmVlLWJveFwiXG4gICAgICAgOnN0eWxlPVwieyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfVwiPlxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICA8ZyA6Y2xhc3M9XCJkaXJlY3Rpb25cIlxuICAgICAgICAgOmRhdGEtY2hpbGRyZW4tY291bnQ9XCJjaGlsZHJlbkNvdW50XCI+XG4gICAgICAgIDxsaW5lXG4gICAgICAgICAgdi1pZj1cImNoaWxkcmVuQ291bnQgPiAxXCJcbiAgICAgICAgICB2ZWN0b3ItZWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICA6eDE9XCIwXCJcbiAgICAgICAgICA6eTE9XCJiYXJQb3NpdGlvbi55XCJcbiAgICAgICAgICA6eDI9XCIwXCJcbiAgICAgICAgICA6eTI9XCJkaW1lbnNpb25zLmhlaWdodCAtIGJhclBvc2l0aW9uLnlcIlxuICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICA6c3Ryb2tlLXdpZHRoPVwic3Ryb2tlV2lkdGhcIlxuICAgICAgICAgIGNsYXNzPVwicmVsYXRpb24tcGVycGVuZGljdWxhclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPGxpbmVcbiAgICAgICAgICB2ZWN0b3ItZWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICA6eDE9XCIwXCJcbiAgICAgICAgICA6eTE9XCJwYXJlbnRQb3NpdGlvbi55XCJcbiAgICAgICAgICA6eDI9XCJwYXJlbnRQb3NpdGlvbi54XCJcbiAgICAgICAgICA6eTI9XCJwYXJlbnRQb3NpdGlvbi55XCJcbiAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgOnN0cm9rZS13aWR0aD1cInN0cm9rZVdpZHRoXCJcbiAgICAgICAgICBjbGFzcz1cInJlbGF0aW9uLWxpbmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgdmVjdG9yLWVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgdi1pZj1cImlzQWdncmVnYXRpb25cIlxuICAgICAgICAgIDpkPVwiYE0ke3BhcmVudFBvc2l0aW9uLnh9ICR7cGFyZW50UG9zaXRpb24ueX0gbCAtJHtzeW1ib2xIYWxmV2lkdGh9IC0ke3N5bWJvbEhhbGZIZWlnaHR9IGwgLSR7c3ltYm9sSGFsZldpZHRofSAke3N5bWJvbEhhbGZIZWlnaHR9IGwgJHtzeW1ib2xIYWxmV2lkdGh9ICR7c3ltYm9sSGFsZkhlaWdodH0gWmBcIlxuICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgIDpzdHJva2Utd2lkdGg9XCJzdHJva2VXaWR0aFwiIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgdi1pZj1cImlzU3BlY2lhbGl6YXRpb25cIlxuICAgICAgICAgIDpkPVwiYE0ke3BhcmVudFBvc2l0aW9uLnh9ICR7cGFyZW50UG9zaXRpb24ueX0gbCAtJHsgMiAqIHN5bWJvbEhhbGZXaWR0aCB9IC0kezIgKiBzeW1ib2xIYWxmSGVpZ2h0fSBsIDAgJHs0ICogc3ltYm9sSGFsZkhlaWdodH0gWmBcIlxuICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgIDpzdHJva2Utd2lkdGg9XCJzdHJva2VXaWR0aFwiIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgdi1pZj1cImlzUHJvcGVydHlcIlxuICAgICAgICAgIDpkPVwiYE0ke3BhcmVudFBvc2l0aW9uLnggLSBzeW1ib2xIYWxmV2lkdGh9ICR7cGFyZW50UG9zaXRpb24ueSAtIHN5bWJvbEhhbGZIZWlnaHR9IGwgJHtzeW1ib2xIYWxmV2lkdGh9ICR7c3ltYm9sSGFsZkhlaWdodH0gbCAtJHtzeW1ib2xIYWxmV2lkdGh9ICR7c3ltYm9sSGFsZkhlaWdodH1gXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgIDpzdHJva2Utd2lkdGg9XCJzdHJva2VXaWR0aFwiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyByZWYsIHJlYWN0aXZlLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGNoaWxkcmVuQ291bnQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAxIH0sXG4gICAgICBkaXJlY3Rpb246IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnaG9yaXpvbnRhbCcgfSxcbiAgICAgIHR5cGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH1cbiAgfSlcblxuICBjb25zdCBjb250YWluZXIgPSByZWYobnVsbClcbiAgY29uc3QgZGltZW5zaW9ucyA9IHJlYWN0aXZlKHtcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICBoZWlnaHQ6IDEwMFxuICB9KVxuXG4gIGNvbnN0IHN0cm9rZVdpZHRoID0gcmVmKDEpXG5cbiAgY29uc3Qgc3ltYm9sSGFsZldpZHRoID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIDIwXG4gIH0pXG5cbiAgY29uc3Qgc3ltYm9sSGFsZkhlaWdodCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNvdW50ID0gcHJvcHMuY2hpbGRyZW5Db3VudFxuICAgICAgcmV0dXJuIDYgLyAoMS4wNSAqKiBjb3VudClcbiAgfSlcblxuICBjb25zdCBpc0FnZ3JlZ2F0aW9uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudHlwZSA9PT0gJ2FnZ3JlZ2F0aW9uJylcbiAgY29uc3QgaXNTcGVjaWFsaXphdGlvbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnR5cGUgPT09ICdzcGVjaWFsaXphdGlvbicpXG4gIGNvbnN0IGlzUHJvcGVydHkgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5jaGlsZHJlbkNvdW50ID09PSAwKVxuXG4gIGNvbnN0IHBhcmVudFBvc2l0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHg6IGRpbWVuc2lvbnMud2lkdGgsXG4gICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAvIDJcbiAgfSkpXG5cbiAgY29uc3QgYmFyUG9zaXRpb24gPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgeDogZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAvIHByb3BzLmNoaWxkcmVuQ291bnQgLyAyXG4gIH0pKVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC50cmVlLWJveCBzdmcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgZy52ZXJ0aWNhbCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xuICB9XG4gIGdbZGF0YS1jaGlsZHJlbi1jb3VudD1cIjBcIl0gLnJlbGF0aW9uLWxpbmUge1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMztcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiByZWY9XCJjb250YWluZXJcIlxuICAgICAgIDpjbGFzcz1cIlsgJ2dlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY29udGFpbmVyJywgYGdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktJHtjYXRlZ29yeS5uYW1lfWAgXVwiXG4gICAgICAgOmRhdGEtZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeT1cImNhdGVnb3J5Lm5hbWVcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5XCJcbiAgICAgICAgIDpjbGFzcz1cInsgJ3Jvb3QtZ2VuZXJpYy1zeW5jaHJvbmljLWNhdGVnb3J5JzogY2F0ZWdvcnkuaXNSb290IH1cIlxuICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IGNhdGVnb3J5LmNvbG9yIH1cIlxuICAgICAgICAgdi1pZj1cImNhdGVnb3J5XCJcbiAgICAgICAgIDpkYXRhLWdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJjYXRlZ29yeS5uYW1lXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuXCI+XG4gICAgICAgIDxkaXYgdi1mb3I9XCJjIGluIGNhdGVnb3J5LmNoaWxkcmVuXCIgOmtleT1cImMubmFtZVwiPlxuICAgICAgICAgIDxHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXdcbiAgICAgICAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0SWRcIlxuICAgICAgICAgICAgOmxheW91dD1cImxheW91dFwiXG4gICAgICAgICAgICA6Y3VycmVudEludGVydmlld0lkPVwiY3VycmVudEludGVydmlld0lkXCJcbiAgICAgICAgICAgIDpjYXRlZ29yeT1cImNcIj5cbiAgICAgICAgICA8L0dlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlPdmVydmlldz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb25cIlxuICAgICAgICAgICB2LWlmPVwiY2F0ZWdvcnkuY2hpbGRyZW4/Lmxlbmd0aFwiPlxuICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvblxuICAgICAgICAgIDp0eXBlPVwiYWJzdHJhY3Rpb25UeXBlXCJcbiAgICAgICAgICA6ZGlyZWN0aW9uPVwibGF5b3V0XCJcbiAgICAgICAgICA6Y2hpbGRyZW5Db3VudD1cImNhdGVnb3J5LmNoaWxkcmVuPy5sZW5ndGhcIj5cbiAgICAgICAgPC9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlclwiXG4gICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1lcnJvcic6IGNhdGVnb3J5LmVycm9ycz8ubGVuZ3RoIH1cIj5cbiAgICAgICAgPERyYWdFbGVtZW50XG4gICAgICAgICAgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjb250ZW50LWNlbnRlclwiXG4gICAgICAgICAgdHlwZT1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnlcIlxuICAgICAgICAgIDpkYXRhPVwiY2F0ZWdvcnkubmFtZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1uYW1lXCI+e3sgY2F0ZWdvcnkubmFtZSB9fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9EcmFnRWxlbWVudD5cbiAgICAgICAgICA8cS10b29sdGlwICBjbGFzcz1cImJnLXJlZC01XCIgYW5jaG9yPVwidG9wIHJpZ2h0XCIgc2VsZj1cInRvcCBsZWZ0XCIgdi1pZj1cImNhdGVnb3J5LmVycm9ycz8ubGVuZ3RoXCI+XG4gICAgICAgICAgICB7eyBjYXRlZ29yeS5uYW1lIH19XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZXJyb3IsIGtleSBpbiBjYXRlZ29yeS5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICA6a2V5PVwia2V5XCI+XG4gICAgICAgICAgICAgIHt7IGVycm9yIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3EtdG9vbHRpcD5cbiAgICAgICAgICA8cS10b29sdGlwIGFuY2hvcj1cInRvcCByaWdodFwiIHNlbGY9XCJ0b3AgbGVmdFwiIHYtZWxzZT5cbiAgICAgICAgICAgIHt7IGNhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICA8L3EtdG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHYtaWY9XCIhY2F0ZWdvcnkuaXNSb290XCJcbiAgICAgICAgY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWZpbGxlclwiXG4gICAgICAgID5cbiAgICAgICAgPFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb25cbiAgICAgICAgICA6ZGlyZWN0aW9uPVwibGF5b3V0XCJcbiAgICAgICAgICA6Y2hpbGRyZW5Db3VudD1cIjFcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgRHJhZ0VsZW1lbnQgZnJvbSAnLi9EcmFnRWxlbWVudC52dWUnXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uIGZyb20gJy4vU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbi52dWUnXG5cbiAgaW1wb3J0IHR5cGUgeyBHZW5lcmljQ2F0ZWdvcnkgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIC8vIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIC8vIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBwcm9wcyA9IHdpdGhEZWZhdWx0cyhkZWZpbmVQcm9wczx7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgICAgIGNhdGVnb3J5OiAgR2VuZXJpY0NhdGVnb3J5LFxuICAgICAgY3VycmVudEludGVydmlld0lkOiBzdHJpbmcgfCBudWxsLFxuICAgICAgbGF5b3V0OiBzdHJpbmdcbiAgfT4oKSwge1xuICAgICAgbGF5b3V0OiAnaG9yaXpvbnRhbCdcbiAgfSlcblxuICAvLyBGSVhNRTogZGV0ZWN0IGluY29uc2lzdGVuY2llc1xuICBjb25zdCBhYnN0cmFjdGlvblR5cGUgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5jYXRlZ29yeS5pbnN0YW5jZXNbMF0/LmFic3RyYWN0aW9uVHlwZSB8fCBcIlwiKVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5IHtcbiAgICAgICBtYXJnaW46IDA7XG4gICAgICAgcGFkZGluZzogMDtcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgZmxleDogMTtcbiAgICAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnZlcnRpY2FsIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW4ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgfVxuICAudmVydGljYWwgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW4ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgfVxuICAudmVydGljYWwgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbjogMCA0cHg7XG4gIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktbmFtZSB7XG4gICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tb3ZlcnZpZXctZm9udC1zaXplKTtcbiAgICAgIHdpZHRoOiB2YXIoLS1vdmVydmlldy13aWR0aCk7XG4gICAgICBoZWlnaHQ6IHZhcigtLW92ZXJ2aWV3LWhlaWdodCkgIWltcG9ydGFudDtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbixcbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLW92ZXJ2aWV3LWhlaWdodCkgKyAycHgpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgIGhlaWdodDogLW1vei1hdmFpbGFibGU7XG4gIH1cbiAgLnZlcnRpY2FsIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tb3ZlcnZpZXctaGVpZ2h0KSArIDJweCk7XG4gIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyIHtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1vdmVydmlldy1oZWlnaHQpICsgMnB4KTtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIGZsZXg6IDE7XG4gIH1cbiAgLnZlcnRpY2FsIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWZpbGxlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlci5oYXMtZXJyb3Ige1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICB9XG4gIC5yb290LWdlbmVyaWMtc3luY2hyb25pYy1jYXRlZ29yeTpob3ZlciB7XG4gICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2RkZDtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImdlbmVyaWNjYXRlZ29yaWVzLWNvbnRhaW5lclwiXG4gICAgICAgOmNsYXNzPVwibGF5b3V0XCJcbiAgICAgICA6a2V5PVwicHJvamVjdElkXCJcbiAgICAgICA6ZGF0YS1wcm9qZWN0PVwicHJvamVjdElkXCI+XG5cbiAgICA8R2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3XG4gICAgICB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIlxuICAgICAgOmtleT1cImNhdGVnb3J5Lm5hbWVcIlxuICAgICAgOnByb2plY3RJZD1cInByb2plY3RJZFwiXG4gICAgICA6bGF5b3V0PVwibGF5b3V0XCJcbiAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIlxuICAgICAgOmNhdGVnb3J5PVwiY2F0ZWdvcnlcIj5cbiAgICA8L0dlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlPdmVydmlldz5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IEdlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlPdmVydmlldyBmcm9tICcuL0dlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlPdmVydmlldy52dWUnXG5cbiAgaW1wb3J0IHR5cGUgeyBHZW5lcmljQ2F0ZWdvcnkgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIGludGVyZmFjZSBQcm9wcyB7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgICAgIGNhdGVnb3JpZXM6IEdlbmVyaWNDYXRlZ29yeVtdLFxuICAgICAgY3VycmVudEludGVydmlld0lkOiBzdHJpbmcsXG4gICAgICBsYXlvdXQ6IHN0cmluZ1xuICB9XG5cbiAgd2l0aERlZmF1bHRzKGRlZmluZVByb3BzPFByb3BzPigpLCB7XG4gICAgICBwcm9qZWN0SWQ6IFwiXCIsXG4gICAgICBjdXJyZW50SW50ZXJ2aWV3SWQ6IFwiXCIsXG4gICAgICBsYXlvdXQ6ICdob3Jpem9udGFsJ1xuICB9KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAuZ2VuZXJpY2NhdGVnb3JpZXMtY29udGFpbmVyIGRpdiB7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgIH1cbiAgICAuZ2VuZXJpY2NhdGVnb3JpZXMtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLmdlbmVyaWNjYXRlZ29yaWVzLWNvbnRhaW5lci52ZXJ0aWNhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgfVxuICAgICAuZ2VuZXJpY2NhdGVnb3JpZXMtY29udGFpbmVyID4gKiB7XG4gICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgIH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkgZnJvbSAnc3RvcmVzL21vZGVscy9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSdcblxuLy8gIUtlZXAgaW4gc3luYyB3aXRoIENTUyB2YXJpYWJsZXMgaW4gQXBwLnZ1ZVxuY29uc3QgQU5OT1RBVElPTl9DT0xPUlMgPSBbXG4gIFwiI2ZmOTc5N1wiLFxuICBcIiM3MDg0YjBcIixcbiAgXCIjZmZkYzk3XCIsXG4gIFwiIzdiY2Y3YlwiXG5dXG5cbi8qIVxuICogR3JvdXAgaXRlbXMgZnJvbSBhbiBhcnJheSB0b2dldGhlciBieSBzb21lIGNyaXRlcmlhIG9yIHZhbHVlLlxuICogKGMpIDIwMTkgVG9tIEJyZW1tZXIgKGh0dHBzOi8vdGJyZW1lci5jb20vKSBhbmQgQ2hyaXMgRmVyZGluYW5kaSAoaHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tKSwgTUlUIExpY2Vuc2UsXG4gKiBAcGFyYW0gIHtBcnJheX0gICAgICAgICAgIGFyciAgICAgIFRoZSBhcnJheSB0byBncm91cCBpdGVtcyBmcm9tXG4gKiBAcGFyYW0gIHtTdHJpbmd8RnVuY3Rpb259IGNyaXRlcmlhIFRoZSBjcml0ZXJpYSB0byBncm91cCBieVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICBUaGUgZ3JvdXBlZCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZ3JvdXBCeSAoYXJyOiBBcnJheTxhbnk+LCBjcml0ZXJpYTogc3RyaW5nfCAoKGl0ZW06IGFueSkgPT4gYW55KSkge1xuICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAob2JqLCBpdGVtKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNyaXRlcmlhIGlzIGEgZnVuY3Rpb24gdG8gcnVuIG9uIHRoZSBpdGVtIG9yIGEgcHJvcGVydHkgb2YgaXRcbiAgICBjb25zdCBrZXkgPSB0eXBlb2YgY3JpdGVyaWEgPT09ICdmdW5jdGlvbicgPyBjcml0ZXJpYShpdGVtKSA6IGl0ZW1bY3JpdGVyaWFdXG5cbiAgICAvLyBJZiB0aGUga2V5IGRvZXNuJ3QgZXhpc3QgeWV0LCBjcmVhdGUgaXRcbiAgICBpZiAoIU9iamVjdC5oYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgICBvYmpba2V5XSA9IFtdXG4gICAgfVxuXG4gICAgLy8gUHVzaCB0aGUgdmFsdWUgdG8gdGhlIG9iamVjdFxuICAgIG9ialtrZXldLnB1c2goaXRlbSlcblxuICAgIC8vIFJldHVybiB0aGUgb2JqZWN0IHRvIHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGxvb3BcbiAgICByZXR1cm4gb2JqXG4gIH0sIHt9KVxufVxuXG5mdW5jdGlvbiBjbGFtcCAobnVtYmVyOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihudW1iZXIsIG1heCkpO1xufVxuXG5mdW5jdGlvbiBzdHJpcENvbnRleHRGcm9tTmFtZSAobmFtZTogc3RyaW5nKSB7XG4gIC8vIFN0cmlwIHRoZSBjb250ZXh0IGZyb20gdGhlIGdpdmVuIHN0cmluZywgcmV0dXJuIHdpdGggdHJhaWxpbmcgLyBpZiB0aGVyZSB3YXMgb25lLlxuICAvLyBhbmQgZG8gbm90IHN0cmlwIGFueXRoaW5nIGlmIHRoZSAvIGlzIGxlYWRpbmdcbiAgY29uc3QgaGFzaEluZGV4ID0gbmFtZS5pbmRleE9mKFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5LkNPTlRFWFRfTUFSS0VSKVxuICAvLyBEbyBub3Qgc3RyaXAgaWYgdGhlIG5hbWUgc3RhcnRzIHdpdGggYSAvXG4gIGlmIChoYXNoSW5kZXggPiAxKSB7XG4gICAgcmV0dXJuIG5hbWUuc3Vic3RyKDAsIGhhc2hJbmRleCArIDEpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5hbWVcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBUZXh0U2VsZWN0aW9uID0ge1xuICBzdGFydEluZGV4OiBudW1iZXIsXG4gIGVuZEluZGV4OiBudW1iZXIsXG4gIGludGVydmlld0lkOiBzdHJpbmcsXG4gIHRleHQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmFtZWRBY3Rpb24gPSBbXG4gIG5hbWU6IHN0cmluZyxcbiAgYWN0aW9uOiAoZWxlbWVudDogYW55KSA9PiBhbnksXG4gIHRvb2x0aXA/OiBzdHJpbmdcbl1cblxuZXhwb3J0IHtcbiAgQU5OT1RBVElPTl9DT0xPUlMsXG4gIGdyb3VwQnksXG4gIGNsYW1wLFxuICBzdHJpcENvbnRleHRGcm9tTmFtZVxufVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidHJhbnNjcmlwdFwiXG4gICAgICAgcmVmPVwidHJhbnNjcmlwdFwiXG4gICAgICAgQG1vdXNldXA9XCJlbWl0U2VsZWN0aW9uXCI+XG4gICAgPHNwYW5cbiAgICAgIHYtZm9yPVwic3BhbiBpbiBzcGFuc1wiXG4gICAgICA6a2V5PVwic3Bhbi5pZFwiXG4gICAgICA6ZGF0YS1zcGFuLWlkPVwic3Bhbi5pZFwiXG4gICAgICA6ZGF0YS1hbm5vdGF0aW9uLWlkcz1cInNwYW4uYW5ub3RhdGlvbklkc1wiXG4gICAgICA6ZGF0YS10ZXh0LW9mZnNldD1cInNwYW4uc3RhcnRcIlxuICAgICAgOmNsYXNzPVwic3BhbkNsYXNzZXNbc3Bhbi5pZF1cIlxuICAgICAgOnN0eWxlPVwiZ2V0U3BhblN0eWxlKHNwYW4pXCJcbiAgICAgIHYtYmluZD1cInNwYW5BdHRyaWJ1dGVzXCJcbiAgICAgIHYtb249XCJwcmVwcGVkU3BhbkV2ZW50c1wiXG4gICAgICA+e3sgc3Bhbi50ZXh0IH19PC9zcGFuPlxuICAgIDxzbG90PlxuICAgIDwvc2xvdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICAvLyBAdHMtbm9jaGVja1xuICBjb25zdCBPVkVSTEFQUElOR19DT0xPUiA9IFwiI2RlYWRiYWJlXCJcblxuICAvLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Rlcmh1ZXJzdC9mbGF0dGVuLW92ZXJsYXBwaW5nLXJhbmdlcy9cbiAgLy8gSVNDIExpY2Vuc2VcbiAgLy8gQ29weXJpZ2h0IChjKSAyMDE4LCBKYW5uaXMgUlxuICAvLyBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlXG4gIC8vIGZvciBhbnkgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZFxuICAvLyB0aGF0IHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhclxuICAvLyBpbiBhbGwgY29waWVzLlxuICAvLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTExcbiAgLy8gV0FSUkFOVElFUyBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRFxuICAvLyBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIC8vIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUlxuICAvLyBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuICAvLyBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCxcbiAgLy8gTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOXG4gIC8vIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG5cbiAgY29uc3Qgc29ydGVkSW5zZXJ0ID0gKGFyciwgdmFsKSA9PiB7XG4gICAgICBjb25zdCBsID0gYXJyLmxlbmd0aFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAodmFsIDw9IGFycltpXSkge1xuICAgICAgICAgICAgICBhcnIuc3BsaWNlKGksIDAsIHZhbClcbiAgICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcnIucHVzaCh2YWwpXG4gICAgICByZXR1cm4gbFxuICB9XG5cbiAgY29uc3QgZmxhdHRlbiA9IChyYW5nZXMpID0+IHtcbiAgICAgIGNvbnN0IFNUQVJUID0gMVxuICAgICAgY29uc3QgU1RPUCA9IDBcblxuICAgICAgbGV0IGwsIGlcblxuICAgICAgY29uc3QgaW5kZXhlcyA9IFtdXG4gICAgICBjb25zdCBpZHMgPSBbXVxuICAgICAgY29uc3QgdHlwZXMgPSBbXVxuXG4gICAgICBsID0gcmFuZ2VzLmxlbmd0aFxuICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHJhbmdlID0gcmFuZ2VzW2ldXG5cbiAgICAgICAgICBjb25zdCBzdGFydEkgPSBzb3J0ZWRJbnNlcnQoaW5kZXhlcywgcmFuZ2VbMV0pXG4gICAgICAgICAgaWRzLnNwbGljZShzdGFydEksIDAsIHJhbmdlWzBdKVxuICAgICAgICAgIHR5cGVzLnNwbGljZShzdGFydEksIDAsIFNUQVJUKVxuXG4gICAgICAgICAgY29uc3QgZW5kSSA9IHNvcnRlZEluc2VydChpbmRleGVzLCByYW5nZVsxXSArIHJhbmdlWzJdKVxuICAgICAgICAgIGlkcy5zcGxpY2UoZW5kSSwgMCwgcmFuZ2VbMF0pXG4gICAgICAgICAgdHlwZXMuc3BsaWNlKGVuZEksIDAsIFNUT1ApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXRlID0gbmV3IE1hcCgpXG4gICAgICBzdGF0ZS5zZXQoaWRzWzBdLCB0cnVlKSAvLyBpbml0aWFsIHN0YXRlXG5cbiAgICAgIGwgPSBpZHMubGVuZ3RoXG4gICAgICBmdW5jdGlvbiogaXRlcmF0b3IgKCkge1xuICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleGVzW2ldXG4gICAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGluZGV4ZXNbaSAtIDFdXG5cbiAgICAgICAgICAgICAgaWYgKGluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICB5aWVsZCBbXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBsYXN0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShzdGF0ZS5rZXlzKCkpXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHR5cGVzW2ldID09PSBTVEFSVCkge1xuICAgICAgICAgICAgICAgICAgc3RhdGUuc2V0KGlkc1tpXSwgdHJ1ZSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRlLmRlbGV0ZShpZHNbaV0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IFtTeW1ib2wuaXRlcmF0b3JdOiBpdGVyYXRvciB9XG4gIH1cblxuICAvLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9jeWNsZWN5Y2xlL3Z1ZS1hbm5vdGF0ZWQtdGV4dC9cbiAgLy8gTUlUIExpY2Vuc2VcbiAgLy8gQ29weXJpZ2h0IChjKSAyMDE5IE5pY2sgTW9ybGV5XG5cbiAgLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgLy8gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAgLy8gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4gIC8vIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICAvLyBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICAvLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAgLy8gU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAgLy8gY29uZGl0aW9uczpcbiAgLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgLy8gaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gIC8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIC8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICAvLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gIC8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gIC8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIC8vIFNPRlRXQVJFLlxuICBjb25zdCBidWlsZFNwYW5MaXN0ID0gKHRleHQsIGFubm90YXRpb25zKSA9PiB7XG4gICAgICAvLyBQcmVwYXJlIHJhbmdlIGxpc3QgdG8gc2VuZCB0byBmbGF0dGVuLW92ZXJsYXBwaW5nLXNwYW5zLmZsYXR0ZW4oKVxuICAgICAgbGV0IHJhbmdlcyA9IFtdXG4gICAgICBjb25zdCBmdWxsUmFuZ2UgPSBbXCJiYXNlVGV4dFwiLCAwLCB0ZXh0Lmxlbmd0aF1cbiAgICAgIHJhbmdlcy5wdXNoKGZ1bGxSYW5nZSlcbiAgICAgIGNvbnN0IGFubm90YXRpb25SYW5nZXMgPSBhbm5vdGF0aW9ucy5tYXAoYW5ub3RhdGlvbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIFthbm5vdGF0aW9uLmlkLCBhbm5vdGF0aW9uLnN0YXJ0LCBhbm5vdGF0aW9uLmxlbmd0aF1cbiAgICAgIH0pXG4gICAgICByYW5nZXMgPSByYW5nZXMuY29uY2F0KGFubm90YXRpb25SYW5nZXMpXG4gICAgICAvLyBGbGF0dGVuXG4gICAgICBjb25zdCBzZWN0aW9ucyA9IEFycmF5LmZyb20oZmxhdHRlbihyYW5nZXMpKVxuICAgICAgLy8gRWFjaCBzZWN0aW9uIGJlY29tZXMgYSBzcGFuXG4gICAgICBsZXQgc2VjdGlvblRleHRTdGFydCA9IDBcbiAgICAgIGxldCBzcGFuSWQgPSAwXG4gICAgICBjb25zdCBzcGFucyA9IHNlY3Rpb25zLm1hcChzZWN0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCBsZW5ndGggPSBOdW1iZXIoc2VjdGlvblswXSlcbiAgICAgICAgICBsZXQgYW5ub3RhdGlvbklkcyA9IHNlY3Rpb25bMV1cbiAgICAgICAgICBhbm5vdGF0aW9uSWRzID0gYW5ub3RhdGlvbklkcy5maWx0ZXIoYW5ub3RhdGlvbklkID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFubm90YXRpb25JZCAhPT0gJ2Jhc2VUZXh0J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSBzZWN0aW9uVGV4dFN0YXJ0XG4gICAgICAgICAgY29uc3QgZW5kID0gc2VjdGlvblRleHRTdGFydCArIGxlbmd0aFxuICAgICAgICAgIGNvbnN0IHNlY3Rpb25UZXh0ID0gdGV4dC5zbGljZShzdGFydCwgZW5kKVxuICAgICAgICAgIGNvbnN0IHNwYW4gPSB7XG4gICAgICAgICAgICAgIGlkOiBzcGFuSWQsXG4gICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICAgIHRleHQ6IHNlY3Rpb25UZXh0LFxuICAgICAgICAgICAgICBhbm5vdGF0aW9uSWRzLFxuICAgICAgICAgICAgICBnZXQgYW5ub3RhdGlvbnMgKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFubm90YXRpb25zLmZpbHRlcihhbm5vdGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYW5ub3RhdGlvbklkcy5pbmNsdWRlcyhhbm5vdGF0aW9uLmlkKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuSWQgPSBzcGFuSWQgKyAxXG4gICAgICAgICAgc2VjdGlvblRleHRTdGFydCA9IGVuZFxuICAgICAgICAgIHJldHVybiBzcGFuXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHNwYW5zXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICBuYW1lOiBcIkFubm90YXRlZFRleHRcIixcbiAgICAgIGVtaXRzOiBbIFwic2VsZWN0aW9uXCIgXSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdGV4dDogU3RyaW5nLFxuICAgICAgICAgIGFubm90YXRpb25zOiB7XG4gICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xlYXJTZWxlY3Rpb246IHtcbiAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgZGVlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRBbm5vdGF0aW9uQ29sb3I6IHtcbiAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoYW5ub3RhdGlvbikge1xuICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIHJldHVybiBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29sb3JcbiAgICAgICAgICAgICAgICAgIC8vIElmIG51bGwsIG5vIHN0eWxlIGF0dHJpYnV0ZSB3aWxsIGJlIGdlbmVyYXRlZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0QW5ub3RhdGlvbkluZm86IEZ1bmN0aW9uLFxuICAgICAgICAgIHNwYW5FdmVudHM6IHtcbiAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0U3BhbkNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIChzcGFuKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3BhbkF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb21wdXRlZDoge1xuICAgICAgICAgIHNwYW5DbGFzc2VzOiB7XG4gICAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBzcGFuIGNsYXNzZXMgZm9yIGVhY2ggc3BhbiBpZCB1c2luZyBnZXRTcGFuQ2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyh0aGlzLnNwYW5zLm1hcChzcGFuID0+IFsgc3Bhbi5pZCwgdGhpcy5nZXRTcGFuQ2xhc3NlcyhzcGFuKSBdKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3BhbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbnMgPSBidWlsZFNwYW5MaXN0KHRoaXMudGV4dCwgdGhpcy5hbm5vdGF0aW9ucylcbiAgICAgICAgICAgICAgcmV0dXJuIHNwYW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmVwcGVkU3BhbkV2ZW50cyAoKSB7XG4gICAgICAgICAgICAgIC8vIEdldCBhbm5vdGF0aW9ucyBhbmQgcGFzcyB0byB0aGUgZXZlbnQgY2FsbGJhY2tcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbkV2ZW50cyA9IHRoaXMuc3BhbkV2ZW50c1xuICAgICAgICAgICAgICBjb25zdCBwcmVwcGVkU3BhbkV2ZW50cyA9IHt9XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNwYW5FdmVudHMpLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBzcGFuRXZlbnRzW2V2ZW50VHlwZV1cbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NhbGxiYWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuSWQgPSB0aGlzLmVsZW1lbnRTcGFuSWQoZS50YXJnZXQpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuc3BhbkJ5SWQoc3BhbklkKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25JZHMgPSBzcGFuLmFubm90YXRpb25JZHNcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IHRoaXMuZ2V0QW5ub3RhdGlvbnMoYW5ub3RhdGlvbklkcylcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlLCBhbm5vdGF0aW9ucylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHByZXBwZWRTcGFuRXZlbnRzW2V2ZW50VHlwZV0gPSBuZXdDYWxsYmFja1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm4gcHJlcHBlZFNwYW5FdmVudHNcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIGVsZW1lbnRTcGFuSWQgKGVsKSB7XG4gICAgICAgICAgICAgIGxldCBzcGFuSWQgPSBlbC5hdHRyaWJ1dGVzW1wiZGF0YS1zcGFuLWlkXCJdLnZhbHVlXG4gICAgICAgICAgICAgIHNwYW5JZCA9IE51bWJlcihzcGFuSWQpXG4gICAgICAgICAgICAgIHJldHVybiBzcGFuSWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNwYW5CeUlkIChzcGFuSWQpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbnMgPSB0aGlzLnNwYW5zLmZpbHRlcigoc3BhbikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwYW4uaWQgPT09IHNwYW5JZFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBjb25zdCBzcGFuID0gc3BhbnNbMF1cbiAgICAgICAgICAgICAgcmV0dXJuIHNwYW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldEFubm90YXRpb25zIChhbm5vdGF0aW9uSWRzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25zID0gdGhpcy5hbm5vdGF0aW9ucy5maWx0ZXIoKGFubm90YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhbm5vdGF0aW9uSWRzLmluY2x1ZGVzKGFubm90YXRpb24uaWQpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVybiBhbm5vdGF0aW9uc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0U3BhblN0eWxlOiBmdW5jdGlvbiAoc3Bhbikge1xuICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuZ2V0U3BhbkNvbG9yKHNwYW4pXG4gICAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRTcGFuQ29sb3I6IGZ1bmN0aW9uIChzcGFuKSB7XG4gICAgICAgICAgICAgIGxldCBjb2xvciA9IG51bGxcbiAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbklkcyA9IHNwYW4uYW5ub3RhdGlvbklkc1xuICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IHRoaXMuZ2V0QW5ub3RhdGlvbnMoYW5ub3RhdGlvbklkcylcbiAgICAgICAgICAgICAgbGV0IGNvbG9ycyA9IGFubm90YXRpb25zLm1hcCgoYW5ub3RhdGlvbikgPT5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QW5ub3RhdGlvbkNvbG9yKGFubm90YXRpb24pXG4gICAgICAgICAgICAgICkuZmlsdGVyKGNvbG9yID0+IGNvbG9yKVxuXG4gICAgICAgICAgICAgIGNvbG9ycyA9IFsuLi5uZXcgU2V0KGNvbG9ycyldXG4gICAgICAgICAgICAgIGlmIChjb2xvcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgLy8gT3ZlcmxhcHBpbmcgc3BhbnMgLSB1c2UgdGhlIG92ZXJsYXAgY29sb3JcbiAgICAgICAgICAgICAgICAgIGNvbG9yID0gT1ZFUkxBUFBJTkdfQ09MT1JcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2xvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBjb2xvciA9IGNvbG9yc1swXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIG51bGwgaWYgbm9uZSBzcGVjaWZpZWRcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRTZWxlY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKVxuICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gcmFuZ2Uuc3RhcnRDb250YWluZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyID09PSB0aGlzLiRyZWZzLnRyYW5zY3JpcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBhcmUgaW4gdGhlIHRyYW5zY3JpcHQgY29udGFpbmVyLlxuICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0Q29udGFpbmVyL2VuZENvbnRhaW5lciBzaG91bGQgYmUgdGV4dCBlbGVtZW50IHdob3NlIHBhcmVudCBpcyBhIHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiZWdpbiA9IE51bWJlcihyYW5nZS5zdGFydENvbnRhaW5lci5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGV4dE9mZnNldCkgKyByYW5nZS5zdGFydE9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IE51bWJlcihyYW5nZS5lbmRDb250YWluZXIucGFyZW50RWxlbWVudC5kYXRhc2V0LnRleHRPZmZzZXQpICsgcmFuZ2UuZW5kT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShiZWdpbiwgZW5kKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZW1pdFNlbGVjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXh0U2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICBpZiAodGV4dFNlbGVjdGlvbiAmJiB0ZXh0U2VsZWN0aW9uLmJlZ2luICE9PSB0ZXh0U2VsZWN0aW9uLmVuZCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcInNlbGVjdGlvblwiLCB0ZXh0U2VsZWN0aW9uKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4gIC50cmFuc2NyaXB0IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIH1cbiAgLmNhdGVnb3J5MSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbm5vdGF0aW9uLWNvbG9yLXJlZCk7XG4gIH1cbiAgLmNhdGVnb3J5MiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbm5vdGF0aW9uLWNvbG9yLWJsdWUpO1xuICB9XG4gIC5jYXRlZ29yeTMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci15ZWxsb3cpO1xuICB9XG4gIC5jYXRlZ29yeTQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci1ncmVlbik7XG4gIH1cbiAgLmNhdGVnb3J5MS5jYXRlZ29yeTIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci1taXhlZCk7XG4gIH1cbiAgLmNhdGVnb3J5MS5jYXRlZ29yeTMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci1taXhlZCk7XG4gIH1cbiAgLmNhdGVnb3J5MS5jYXRlZ29yeTQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci1taXhlZCk7XG4gIH1cbiAgLmNhdGVnb3J5Mi5jYXRlZ29yeTMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci1taXhlZCk7XG4gIH1cbiAgLmNhdGVnb3J5Mi5jYXRlZ29yeTQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci1taXhlZCk7XG4gIH1cbiAgLmNhdGVnb3J5My5jYXRlZ29yeTQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci1taXhlZCk7XG4gIH1cbiAgLyogRm9yIHVuZGVmaW5lZCBjYXRlZ29yaWVzICovXG4gIC5jYXRlZ29yeTkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I4NzRjMTtcbiAgfVxuICAuZGVzY3JpcHRlbSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAuZGVzY3JpcHRlbS5kZXNjcmlwdGVtcyB7XG4gICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IGRvdWJsZTtcbiAgfVxuICAuZXh0cmFjdEhpZ2hsaWdodCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuZXh0cmFjdE9yaWdpbmFsIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIC5oaWdobGlnaHRlZCxcbiAgLmRlc2NyaXB0ZW0uaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTEuaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTIuaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTMuaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTQuaGlnaGxpZ2h0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0ZWQtY29sb3IpICFpbXBvcnRhbnQ7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGVtLW1vZGlmaWNhdGlvblwiXG4gICAgICAgdi1pZj1cIm1vZGVsXCI+XG4gICAgPHAgY2xhc3M9XCJuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlRvIG1vZGlmeSB0aGUgZGVzY3JpcHRlbSwgc2VsZWN0IHRoZSBuZXcgdGV4dCBhbmQgdmFsaWRhdGUuPC9wPlxuICAgIDxwIGNsYXNzPVwidGV4dC1pdGFsaWMgbm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5UaGUgPHU+b3JpZ2luYWwgZGVzY3JpcHRlbTwvdT4gaXMgdW5kZXJsaW5lZCwgdGhlIDxiPm5ldyBzZWxlY3Rpb248L2I+IGlzIGJvbGQuPC9wPlxuICAgIDxBbm5vdGF0ZWRUZXh0XG4gICAgICBjbGFzcz1cInRleHRBbm5vdGF0aW9uQ29tcG9uZW50XCJcbiAgICAgIDp0ZXh0PVwiY29udGV4dFRleHRcIlxuICAgICAgOmFubm90YXRpb25zPVwiYW5ub3RhdGlvbnNcIlxuICAgICAgOmdldFNwYW5DbGFzc2VzPVwiZ2V0U3BhbkNsYXNzZXNcIlxuICAgICAgY2xlYXJTZWxlY3Rpb25cbiAgICAgIEBzZWxlY3Rpb249XCJ0ZXh0U2VsZWN0aW9uXCJcbiAgICAgIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IEFubm90YXRlZFRleHQgZnJvbSAnLi9Bbm5vdGF0ZWRUZXh0LnZ1ZSdcbiAgaW1wb3J0IHR5cGUgeyBUZXh0U2VsZWN0aW9uIH0gZnJvbSAnLi91dGlsJ1xuICBpbXBvcnQgeyBjbGFtcCB9IGZyb20gJy4vdXRpbCdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgbW9kZWwgPSBkZWZpbmVNb2RlbDxUZXh0U2VsZWN0aW9uPigpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBpbml0aWFsOiB7IHR5cGU6IE9iamVjdCB9XG4gIH0pXG5cbiAgY29uc3QgaW50ZXJ2aWV3ID0gY29tcHV0ZWQoKCkgPT4gbW9kZWwudmFsdWUgPyBzdG9yZS5nZXRJbnRlcnZpZXcobW9kZWwudmFsdWUuaW50ZXJ2aWV3SWQpIDogbnVsbClcblxuICBjb25zdCBjb250ZXh0VGV4dCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChpbnRlcnZpZXcudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gaW50ZXJ2aWV3LnZhbHVlLnRleHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBnZXRTcGFuQ2xhc3NlcyAoc3BhbjogYW55KSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gc3Bhbi5hbm5vdGF0aW9ucy5tYXAoKGE6IGFueSkgPT4gYS5jbGFzcylcbiAgICAgIHJldHVybiBbIC4uLm5ldyBTZXQoY2xhc3NlcykgXS5qb2luKFwiIFwiKVxuICB9XG5cbiAgY29uc3QgaW5pdGlhbExlbmd0aCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5pbml0aWFsKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzLmluaXRpYWwuZW5kSW5kZXggLSBwcm9wcy5pbml0aWFsLnN0YXJ0SW5kZXhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBhbm5vdGF0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIFJldHVybiAzIGFubm90YXRpb25zOlxuICAgICAgLy8gLSBoaWdobGlnaHRlZCBvbmUgKGRlc2NyaXB0ZW0pXG4gICAgICAvLyAtIGhpZGRlbiBzdGFydFxuICAgICAgLy8gLSBoaWRkZW4gZW5kXG4gICAgICBjb25zdCBvdXQgPSBbXVxuICAgICAgaWYgKG1vZGVsLnZhbHVlICYmIHByb3BzLmluaXRpYWwpIHtcbiAgICAgICAgICBjb25zdCBpbnRlcnZpZXdJZCA9IG1vZGVsLnZhbHVlLmludGVydmlld0lkXG4gICAgICAgICAgY29uc3QgbWF4SW5kZXggPSBpbnRlcnZpZXcudmFsdWU/LnRleHQubGVuZ3RoID8/IDBcbiAgICAgICAgICBjb25zdCBsZW5ndGggPSBtb2RlbC52YWx1ZS5lbmRJbmRleCAtIG1vZGVsLnZhbHVlLnN0YXJ0SW5kZXhcbiAgICAgICAgICBjb25zdCBleHRyYWN0U3RhcnQgPSBjbGFtcChwcm9wcy5pbml0aWFsLnN0YXJ0SW5kZXggLSBpbml0aWFsTGVuZ3RoLnZhbHVlIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCBtYXhJbmRleClcbiAgICAgICAgICBjb25zdCBleHRyYWN0RW5kID0gY2xhbXAocHJvcHMuaW5pdGlhbC5lbmRJbmRleCArIGluaXRpYWxMZW5ndGgudmFsdWUgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCBtYXhJbmRleClcbiAgICAgICAgICBpZiAoZXh0cmFjdFN0YXJ0KSB7XG4gICAgICAgICAgICAgIG91dC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGludGVydmlld0lkLFxuICAgICAgICAgICAgICAgICAgaWQ6ICdoaWRkZW5fc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICBsZW5ndGg6IGV4dHJhY3RTdGFydCxcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaGlkZGVuIGV4dHJhY3RTdGFydCdcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgb3V0LnB1c2goe1xuICAgICAgICAgICAgICBpbnRlcnZpZXdJZCxcbiAgICAgICAgICAgICAgaWQ6ICdjdXJyZW50X2V4dHJhY3QnLFxuICAgICAgICAgICAgICBzdGFydDogcHJvcHMuaW5pdGlhbC5zdGFydEluZGV4LFxuICAgICAgICAgICAgICBsZW5ndGg6IHByb3BzLmluaXRpYWwuZW5kSW5kZXggLSBwcm9wcy5pbml0aWFsLnN0YXJ0SW5kZXgsXG4gICAgICAgICAgICAgIGNsYXNzOiAnZXh0cmFjdE9yaWdpbmFsJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgb3V0LnB1c2goe1xuICAgICAgICAgICAgICBpbnRlcnZpZXdJZCxcbiAgICAgICAgICAgICAgaWQ6ICduZXdfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgc3RhcnQ6IG1vZGVsLnZhbHVlLnN0YXJ0SW5kZXgsXG4gICAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgICAgY2xhc3M6ICdleHRyYWN0SGlnaGxpZ2h0J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKGV4dHJhY3RFbmQgPCBtYXhJbmRleCkge1xuICAgICAgICAgICAgICBvdXQucHVzaCh7XG4gICAgICAgICAgICAgICAgICBpbnRlcnZpZXdJZCxcbiAgICAgICAgICAgICAgICAgIGlkOiAnaGlkZGVuX2VuZCcsXG4gICAgICAgICAgICAgICAgICBzdGFydDogZXh0cmFjdEVuZCxcbiAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWF4SW5kZXggLSBleHRyYWN0RW5kLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6ICdoaWRkZW4gZXh0cmFjdEVuZCdcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0XG4gIH0pXG5cbiAgZnVuY3Rpb24gdGV4dFNlbGVjdGlvbiAoZGF0YTogYW55KSB7XG4gICAgICBpZiAobW9kZWwudmFsdWUpIHtcbiAgICAgICAgICBtb2RlbC52YWx1ZS5zdGFydEluZGV4ID0gZGF0YS5iZWdpblxuICAgICAgICAgIG1vZGVsLnZhbHVlLmVuZEluZGV4ID0gZGF0YS5lbmRcbiAgICAgIH1cbiAgfVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLnRleHRBbm5vdGF0aW9uQ29tcG9uZW50IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRlc2NyaXB0ZW1cIlxuICAgICAgIHYtaWY9XCJkZXNjcmlwdGVtXCJcbiAgICAgICA6ZGF0YS1kZXNjcmlwdGVtPVwiZGVzY3JpcHRlbS5pZFwiXG4gICAgICAgOnRpdGxlPVwiZGVzY3JpcHRlbS50ZXh0XCI+XG4gICAgPERyYWdFbGVtZW50XG4gICAgICB0eXBlPVwiZGVzY3JpcHRlbVwiXG4gICAgICBjbGFzcz1cImRlc2NyaXB0ZW0taGVhZGVyXCJcbiAgICAgIDpkYXRhPVwiZGVzY3JpcHRlbUlkXCI+XG4gICAgICA8cS1pY29uXG4gICAgICAgIHJlZj1cImhhbmRsZVwiXG4gICAgICAgIGNsYXNzPVwiZGVzY3JpcHRlbS1oYW5kbGVcIlxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICBAY2xpY2subWV0YT1cImRlYnVnXCJcbiAgICAgICAgQGNsaWNrPVwic2V0SGlnaGxpZ2h0ZWRcIlxuICAgICAgICBuYW1lPVwibWRpLWZvcm1hdC1xdW90ZS1jbG9zZS1vdXRsaW5lXCI+PC9xLWljb24+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGVtLWxhYmVsXCI+e3sgZGVzY3JpcHRlbS50ZXh0IH19PC9zcGFuPlxuICAgICAgICA8cS1wb3B1cC1lZGl0IHRpdGxlPVwiU2VsZWN0IHRoZSBhcHByb3ByaWF0ZSB0ZXh0IGZyYWdtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWlzUmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGVzY3JpcHRlbUpzb25cIlxuICAgICAgICAgICAgICAgICAgICAgIHYtc2xvdD1cInNjb3BlXCI+XG4gICAgICAgICAgPERlc2NyaXB0ZW1Nb2RpZmljYXRpb25EaWFsb2dcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzY29wZS52YWx1ZVwiXG4gICAgICAgICAgICA6aW5pdGlhbD1cInNjb3BlLmluaXRpYWxWYWx1ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3EtcG9wdXAtZWRpdD5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxxLXNwYWNlIC8+XG4gICAgICA8ZGl2IHYtaWY9XCJ3aXRoQ29udGV4dFwiXG4gICAgICAgICAgIGNsYXNzPVwiZGVzY3JpcHRlbS1jb250ZXh0XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGV4dC1pdGVtXCJcbiAgICAgICAgICAgICAgdi1pZj1cImNvbnRleHQuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnlcIj5cbiAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgbmFtZT1cIm1kaS1hbHBoYS1zLWJveC1vdXRsaW5lXCI+PC9xLWljb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb3BlcnR5LW5hbWVcIj57eyBjb250ZXh0LnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5Lm5hbWUgfX08L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzPVwiY29udGV4dC1pdGVtXCJcbiAgICAgICAgICBAY2xpY2suc3RvcD1cImp1bXBUb01vbWVudChjb250ZXh0Lm1vbWVudC5pZClcIlxuICAgICAgICAgIHYtaWY9XCJjb250ZXh0Lm1vbWVudFwiPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICBuYW1lPVwibWRpLWFscGhhLWQtYm94LW91dGxpbmVcIj48L3EtaWNvbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vbWVudC1uYW1lXCI+e3sgY29udGV4dC5tb21lbnQubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgdi1pZj1cIndpdGhNZW51XCJcbiAgICAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGVtLW1lbnVcIj5cbiAgICAgICAgPHEtc3BhY2UgLz5cbiAgICAgICAgPEVsZW1lbnRNZW51XG4gICAgICAgICAgOmFjdGlvbnM9XCJtZW51QWN0aW9uc1wiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvRHJhZ0VsZW1lbnQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuICBpbXBvcnQgRGVzY3JpcHRlbU1vZGlmaWNhdGlvbkRpYWxvZyBmcm9tICcuL0Rlc2NyaXB0ZW1Nb2RpZmljYXRpb25EaWFsb2cudnVlJ1xuICBpbXBvcnQgRHJhZ0VsZW1lbnQgZnJvbSAnLi9EcmFnRWxlbWVudC52dWUnXG4gIGltcG9ydCBFbGVtZW50TWVudSBmcm9tICcuL0VsZW1lbnRNZW51LnZ1ZSdcbiAgaW1wb3J0IE1vbWVudCBmcm9tICdzdG9yZXMvbW9kZWxzL21vbWVudCdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5IGZyb20gJ3N0b3Jlcy9tb2RlbHMvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnknXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBkZXNjcmlwdGVtSWQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sXG4gICAgICB3aXRoQ29udGV4dDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgICAgd2l0aE1lbnU6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxuICAgICAgaXNSZWFkb25seTogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9XG4gIH0pXG5cbiAgY29uc3QgZGVzY3JpcHRlbSA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldERlc2NyaXB0ZW0ocHJvcHMuZGVzY3JpcHRlbUlkKSlcblxuICBjb25zdCB7XG4gICAgICBoaWdobGlnaHRlZERlc2NyaXB0ZW1JZFxuICB9ID0gc3RvcmVUb1JlZnMoaXN0b3JlKVxuXG4gIGZ1bmN0aW9uIGRlYnVnICgpIHtcbiAgICAgICh3aW5kb3cgYXMgYW55KS5kZXNjcmlwdGVtID0gZGVzY3JpcHRlbS52YWx1ZVxuICAgICAgY29uc29sZS5sb2coXCJEZXNjcmlwdGVtXCIsIGRlc2NyaXB0ZW0udmFsdWU/LnRvSlNPTigpKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0SGlnaGxpZ2h0ZWQgKCkge1xuICAgICAgaWYgKGhpZ2hsaWdodGVkRGVzY3JpcHRlbUlkLnZhbHVlID09PSBwcm9wcy5kZXNjcmlwdGVtSWQpIHtcbiAgICAgICAgICBoaWdobGlnaHRlZERlc2NyaXB0ZW1JZC52YWx1ZSA9IFwiXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGlnaGxpZ2h0ZWREZXNjcmlwdGVtSWQudmFsdWUgPSBwcm9wcy5kZXNjcmlwdGVtSWRcbiAgICAgIH1cbiAgfVxuXG4gIHR5cGUgQ29udGV4dCA9IHtcbiAgICAgIG1vbWVudD86IE1vbWVudCxcbiAgICAgIHNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5PzogU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnksXG5cbiAgfVxuXG4gIC8vIGNvbnRleHQgaXMgYW4gb2JqZWN0IHdpdGggb3B0aW9uYWwgbW9tZW50IC8gc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkgdmFsdWVzXG4gIGNvbnN0IGNvbnRleHQgPSBjb21wdXRlZCgoKTogQ29udGV4dCA9PiB7XG4gICAgICBpZiAoZGVzY3JpcHRlbS52YWx1ZSAmJiBkZXNjcmlwdGVtLnZhbHVlLmp1c3RpZmljYXRpb24pIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnQgPSBzdG9yZS5nZXRKdXN0aWZpY2F0aW9uUGFyZW50KGRlc2NyaXB0ZW0udmFsdWUuanVzdGlmaWNhdGlvbi5wYXJlbnRJZClcbiAgICAgICAgICAvLyBNb21lbnQ6ICR7bW9tZW50Lm5hbWV9XG4gICAgICAgICAgLy8gQ2F0ZWdvcnk6ICR7Y2F0ZWdvcnkubW9tZW50Lm5hbWV9IHwgJHtjYXRlZ29yeS5uYW1lfVxuICAgICAgICAgIC8vIFByb3BlcnR5OiAke3Byb3BlcnR5LmNhdGVnb3J5aW5zdGFuY2UubW9tZW50Lm5hbWV9IHwgJHtwcm9wZXJ0eS5jYXRlZ29yeWluc3RhbmNlLm5hbWV9IHwgJHtwcm9wZXJ0eS5uYW1lfTogJHtwcm9wZXJ0eS52YWx1ZX1cbiAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuYXNDb250ZXh0XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgfVxuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHsgfVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGRlc2NyaXB0ZW1Kc29uID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0OiAoKSA9PiBkZXNjcmlwdGVtLnZhbHVlPy50b0pTT04oKSA/PyB7fSxcbiAgICAgIHNldDogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgc3RvcmUudXBkYXRlRGVzY3JpcHRlbShwcm9wcy5kZXNjcmlwdGVtSWQsIHtcbiAgICAgICAgICAgICAgc3RhcnRJbmRleDogdmFsdWUuc3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgZW5kSW5kZXg6IHZhbHVlLmVuZEluZGV4XG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBqdW1wVG9Nb21lbnQgKGlkZW50aWZpZXI6IHN0cmluZykge1xuICAgICAgaXN0b3JlLnNldEhpZ2hsaWdodGVkTW9tZW50SWQoaWRlbnRpZmllcilcbiAgfVxuXG4gIGltcG9ydCB0eXBlIHsgTmFtZWRBY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL3V0aWwudHMnXG5cbiAgY29uc3QgbWVudUFjdGlvbnM6IE5hbWVkQWN0aW9uW10gPSBbXG4gICAgICBbIFwiRHVwbGljYXRlXCIsICgpID0+IHN0b3JlLmR1cGxpY2F0ZURlc2NyaXB0ZW0ocHJvcHMuZGVzY3JpcHRlbUlkKSBdLFxuICAgICAgWyBcIkRlbGV0ZVwiLCAoKSA9PiBzdG9yZS5kZWxldGVEZXNjcmlwdGVtKHByb3BzLmRlc2NyaXB0ZW1JZCkgXVxuICBdXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmRlc2NyaXB0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBoZWlnaHQ6IDEuMmVtO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuZGVzY3JpcHRlbS1oZWFkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAuZGVzY3JpcHRlbS1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktZGVzY3JpcHRlbS13aWR0aCk7XG4gICAgICBoZWlnaHQ6IDEuMmVtO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4gIC5kZXNjcmlwdGVtLWhhbmRsZSB7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuZGVzY3JpcHRlbS1oYW5kbGU6aG92ZXIge1xuICAgICAgb3BhY2l0eTogLjc7XG4gIH1cbiAgLmRlc2NyaXB0ZW0tY29udGV4dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuY29udGV4dC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICB9XG4gIC5jb250ZXh0LWl0ZW0gKyAuY29udGV4dC1pdGVtIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gICAgICBwYWRkaW5nOiAwIDRweDtcbiAgfVxuICAuZGVzY3JpcHRlbS1tZW51IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLmRlc2NyaXB0ZW0taGVhZGVyOmhvdmVyIC5kZXNjcmlwdGVtLW1lbnUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImp1c3RpZmljYXRpb25cIlxuICAgICAgIHYtaWY9XCJqdXN0aWZpY2F0aW9uSWRcIlxuICAgICAgIDpkYXRhLWp1c3RpZmljYXRpb249XCJqdXN0aWZpY2F0aW9uSWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwianVzdGlmaWNhdGlvbi1tZXRhZGF0YVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJqdXN0aWZpY2F0aW9uLW5hbWVcIj57eyBqdXN0aWZpY2F0aW9uPy5uYW1lIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDx1bCBjbGFzcz1cImp1c3RpZmljYXRpb24tZGVzY3JpcHRlbXNcIj5cbiAgICAgIDxsaSB2LWZvcj1cImRlc2NyaXB0ZW0gaW4ganVzdGlmaWNhdGlvbj8uZGVzY3JpcHRlbXNcIiA6a2V5PVwiZGVzY3JpcHRlbS5pZFwiPlxuICAgICAgICA8RGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uIDpkZXNjcmlwdGVtSWQ9XCJkZXNjcmlwdGVtLmlkXCI+XG4gICAgICAgIDwvRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IERlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbiBmcm9tICcuL0Rlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbi52dWUnXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGp1c3RpZmljYXRpb25JZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfVxuICB9KVxuICBjb25zdCBqdXN0aWZpY2F0aW9uID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuZ2V0SnVzdGlmaWNhdGlvbihwcm9wcy5qdXN0aWZpY2F0aW9uSWQpKVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5qdXN0aWZpY2F0aW9uLWRlc2NyaXB0ZW1zIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgd2lkdGg6IGNhbGModmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1kZXNjcmlwdGVtLXdpZHRoKSArIDUwcHgpO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGV4dFwiXG4gICAgICAgdi1pZj1cImNvbnRleHQub3JpZ2luYWxcIj5cbiAgICA8ZW0+Tm9tIG9yaWdpbmFsPC9lbT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb250ZXh0XCJcbiAgICAgICB2LWVsc2U+XG4gICAgPGRpdiBjbGFzcz1cImNoaWxkcmVuXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIlxuICAgICAgICAgICA6dGl0bGU9XCJjLm5hbWVcIlxuICAgICAgICAgICA6Y2xhc3M9XCJ7ICdoYXMtY2hpbGQnOiBpc0N1cnJlbnRDaGlsZChjLm5hbWUpIH1cIlxuICAgICAgICAgICB2LWZvcj1cImMgaW4gY29udGV4dC5jaGlsZHJlblwiXG4gICAgICAgICAgIDprZXk9XCJjLmlkXCI+XG4gICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgc2l6ZT1cIjEwcHRcIlxuICAgICAgICAgIHYtaWY9XCIhIGlzQ3VycmVudENoaWxkKGMubmFtZSlcIlxuICAgICAgICAgIHYtbW9kZWw9XCJuZXdDaGlsZHJlblwiXG4gICAgICAgICAgOnZhbD1cImMubmFtZVwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2hpbGQtY2F0ZWdvcnktbmFtZVwiPnt7Yy5uYW1lfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmVsYXRpb25cIj5cbiAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uXG4gICAgICAgIHYtaWY9XCJjb250ZXh0LnJlZmVyZW5jZVwiXG4gICAgICAgIDp0eXBlPVwiY29udGV4dC5yZWZlcmVuY2UuYWJzdHJhY3Rpb25UeXBlXCJcbiAgICAgICAgOmNoaWxkcmVuQ291bnQ9XCJjb250ZXh0LmNoaWxkcmVuLmxlbmd0aFwiPlxuICAgICAgPC9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeSByZWZlcmVuY2VcIlxuICAgICAgICAgdi1pZj1cImNvbnRleHQucmVmZXJlbmNlXCJcbiAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWN1cnJlbnQnOiBpc0N1cnJlbnROYW1lKGNvbnRleHQucmVmZXJlbmNlLm5hbWUpIH1cIlxuICAgICAgICAgOnRpdGxlPVwiY29udGV4dC5yZWZlcmVuY2UubmFtZVwiPlxuICAgICAge3tjb250ZXh0LnJlZmVyZW5jZS5uYW1lfX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGFyZW50c1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5IHBhcmVudFwiXG4gICAgICAgICAgIDp0aXRsZT1cInBhcmVudD8ubmFtZSA/PyAnJ1wiXG4gICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1wYXJlbnQnOiBpc0N1cnJlbnRQYXJlbnQocGFyZW50Py5uYW1lKSB9XCJcbiAgICAgICAgICAgdi1mb3I9XCJwYXJlbnQgaW4gY29udGV4dC5wYXJlbnRzXCJcbiAgICAgICAgICAgOmtleT1cInBhcmVudD8uaWQgPz8gJydcIj5cbiAgICAgICAge3twYXJlbnQ/Lm5hbWUgPz8gJyd9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8cS1zZWxlY3RcbiAgICBkZW5zZVxuICAgIEBmb2N1cz1cIigkZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNlbGVjdCgpXCJcbiAgICBmaWxsZWRcbiAgICA6bW9kZWwtdmFsdWU9XCJuYW1lXCJcbiAgICB1c2UtaW5wdXRcbiAgICBoaWRlLXNlbGVjdGVkXG4gICAgZmlsbC1pbnB1dFxuICAgIG1lbnUtYW5jaG9yPVwidG9wIHJpZ2h0XCJcbiAgICA6aW5wdXQtZGVib3VuY2U9XCIwXCJcbiAgICA6b3B0aW9ucz1cImNvbnRleHQ/LmNvbXBsZXRpb25zID8/IFtdXCJcbiAgICBAZmlsdGVyPVwiZmlsdGVyTmFtZXNcIlxuICAgIEBpbnB1dC12YWx1ZT1cInNldE5hbWVcIlxuICAgIEBrZXl1cC5lbnRlcj1cInZhbGlkYXRlXCJcbiAgICBhdXRvZm9jdXNcbiAgICA+XG4gICAgPHRlbXBsYXRlIHYtc2xvdDpuby1vcHRpb24+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJ0ZXh0LWdyZXlcIj5cbiAgICAgICAgICBObyByZXN1bHRzXG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3Etc2VsZWN0PlxuICA8ZGl2IGNsYXNzPVwicm93IHdyYXAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgPHEtYnRuXG4gICAgICBmbGF0XG4gICAgICBzaXplPVwic21cIlxuICAgICAgQGNsaWNrPVwiY2FuY2VsXCI+Q2FuY2VsPC9xLWJ0bj5cbiAgICA8cS1idG5cbiAgICAgIGZsYXRcbiAgICAgIHNpemU9XCJzbVwiXG4gICAgICBAY2xpY2s9XCJ2YWxpZGF0ZVwiPk9LPC9xLWJ0bj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSBmcm9tICdzdG9yZXMvbW9kZWxzL3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5J1xuICBpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbiBmcm9tICcuL1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24udnVlJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBlbWl0ID0gZGVmaW5lRW1pdHMoWyAnY2hhbmdlJyBdKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgY2F0ZWdvcnk6IHsgdHlwZTogU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnksIGRlZmF1bHQ6IG51bGwgfSxcbiAgICAgIGdlbmVyaWNHcmFwaHM6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiBudWxsIH1cbiAgfSlcblxuICBjb25zdCBuYW1lID0gcmVmKHByb3BzLmNhdGVnb3J5Lm5hbWUpXG5cbiAgY29uc3QgbmV3Q2hpbGRyZW4gPSByZWYoW10pXG5cbiAgY29uc3QgY29tcGxldGlvbnMgPSByZWYoW10gYXMgc3RyaW5nW10pXG5cbiAgY29uc3QgY2hpbGRyZW5OYW1lcyA9IGNvbXB1dGVkKCgpID0+IG5ldyBTZXQocHJvcHMuY2F0ZWdvcnk/LmNoaWxkcmVuLm1hcChjID0+IGMubmFtZSkgPz8gW10pKVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlICgpIHtcbiAgICAgIC8vIElmIHRoZSBzZWxlY3QgaGFzIGZvY3VzLCB0aGVuIHVzZSB0aGUgc2VsZWN0ZWQgbmFtZS4gRWxzZSB1c2UgdGhlIGlucHV0IG5hbWUgdmFsdWUuXG5cbiAgICAgIGlmIChwcm9wcy5jYXRlZ29yeSkge1xuICAgICAgICAgIC8qIElmIHRoZSBuZXcgbmFtZSBpcyBmcm9tIGFuIGV4aXN0aW5nIGNhdGVnb3J5IHRoYXQgaGFzIGFuIGFic3RyYWN0aW9uVHlwZSwgdGhlbiBhbHNvIHVwZGF0ZSBpdHMgYWJzdHJhY3Rpb25UeXBlICovXG4gICAgICAgICAgY29uc3QgZ2VuZXJpY1NvdXJjZSA9IHByb3BzLmdlbmVyaWNHcmFwaHMgPyBwcm9wcy5nZW5lcmljR3JhcGhzLmJ5TmFtZVtwcm9wcy5jYXRlZ29yeS5xdWFsaWZpZWROYW1lKG5hbWUudmFsdWUpXSA6IHt9XG4gICAgICAgICAgY29uc3QgYWJzdHJhY3Rpb25UeXBlID0gZ2VuZXJpY1NvdXJjZT8uYWJzdHJhY3Rpb25UeXBlIHx8ICcnXG4gICAgICAgICAgc3RvcmUudXBkYXRlRWxlbWVudChwcm9wcy5jYXRlZ29yeSwgeyBuYW1lOiBuYW1lLnZhbHVlLCBhYnN0cmFjdGlvblR5cGUgfSlcbiAgICAgIH1cblxuICAgICAgbmV3Q2hpbGRyZW4udmFsdWUuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICBjb25zdCBnZW5lcmljU291cmNlID0gcHJvcHMuZ2VuZXJpY0dyYXBocyA/IHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW3Byb3BzLmNhdGVnb3J5LnF1YWxpZmllZE5hbWUobildIDoge31cbiAgICAgICAgICBjb25zdCBhYnN0cmFjdGlvblR5cGUgPSBnZW5lcmljU291cmNlPy5hYnN0cmFjdGlvblR5cGUgfHwgJydcbiAgICAgICAgICBzdG9yZS5hZGRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhdGVnb3J5LnNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluOiR7cHJvcHMuY2F0ZWdvcnkuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0aW9uVHlwZSlcbiAgICAgIH0pXG4gICAgICAvLyBTaW5jZSB2YWxpZGF0ZSBtYXkgYmUgY2FsbGVkIHR3aWNlLCByZXNldCB0aGUgbmV3Q2hpbGRyZW4gYXJyYXlcbiAgICAgIG5ld0NoaWxkcmVuLnZhbHVlID0gW11cblxuICAgICAgZW1pdCgnY2hhbmdlJywgbmFtZS52YWx1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCAoKSB7XG4gICAgICBlbWl0KCdjaGFuZ2UnLCBwcm9wcy5jYXRlZ29yeS5uYW1lKVxuICB9XG5cbiAgY29uc3QgY29udGV4dCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBzdG9yZS5nZXRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yaWVzQnlOYW1lKHByb3BzLmNhdGVnb3J5LnByb2plY3RJZCwgbmFtZS52YWx1ZSlcbiAgICAgIGNvbnN0IGNvbXBsZXRpb25zID0gc3RvcmUuZ2V0U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlOYW1lc0J5UHJlZml4KHByb3BzLmNhdGVnb3J5LnByb2plY3RJZCwgbmFtZS52YWx1ZSlcbiAgICAgIGlmICghY2F0ZWdvcmllcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4geyBvcmlnaW5hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9ucyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gT2JqZWN0LmZyb21FbnRyaWVzKGNhdGVnb3JpZXMubWFwKGMgPT4gYy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gWyBjaGlsZC5uYW1lLCBjaGlsZCBdKSkuZmxhdCgpKVxuICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSBPYmplY3QuZnJvbUVudHJpZXMoY2F0ZWdvcmllcy5maWx0ZXIoYyA9PiBjLnBhcmVudCkubWFwKGMgPT4gW2MucGFyZW50Py5uYW1lLCBjLnBhcmVudCBdKSlcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICByZWZlcmVuY2U6IGNhdGVnb3JpZXNbMF0sXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbIC4uLk9iamVjdC52YWx1ZXMoY2hpbGRyZW4pIF0gYXMgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlbXSxcbiAgICAgICAgICAgICAgcGFyZW50czogWyAuLi5PYmplY3QudmFsdWVzKHBhcmVudHMpIF0gYXMgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlbXSxcbiAgICAgICAgICAgICAgY29tcGxldGlvbnNcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gaXNDdXJyZW50Q2hpbGQgKG5hbWU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuTmFtZXMudmFsdWUuaGFzKG5hbWUpXG4gIH1cblxuICBmdW5jdGlvbiBpc0N1cnJlbnRQYXJlbnQgKG5hbWU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHByb3BzLmNhdGVnb3J5LnBhcmVudD8ubmFtZSA9PSBuYW1lXG4gIH1cblxuICBmdW5jdGlvbiBpc0N1cnJlbnROYW1lIChuYW1lOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBwcm9wcy5jYXRlZ29yeT8ubmFtZSA9PT0gbmFtZVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0TmFtZSAodmFsdWU6IHN0cmluZykge1xuICAgICAgbmFtZS52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWx0ZXJOYW1lcyAoX3ZhbDogc3RyaW5nLCB1cGRhdGU6IChjYjogKCkgPT4gdm9pZCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJmaWx0ZXJOYW1lc1wiLCB2YWwsIGNvbnRleHQudmFsdWU/LmNvbXBsZXRpb25zKVxuICAgICAgdXBkYXRlKCgpID0+IHtcbiAgICAgICAgICBjb21wbGV0aW9ucy52YWx1ZSA9IGNvbnRleHQudmFsdWU/LmNvbXBsZXRpb25zID8/IFtdXG4gICAgICB9KVxuICB9XG48L3NjcmlwdD5cblxuICA8c3R5bGUgc2NvcGVkPlxuICAuY2F0ZWdvcnkge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiAycHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICB3aWR0aDogdmFyKC0tb3ZlcnZpZXctd2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IHZhcigtLW92ZXJ2aWV3LWhlaWdodCkgIWltcG9ydGFudDtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAuY29udGV4dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXg6IDA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jaGlsZHJlbiwgLnBhcmVudHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4OiAwO1xuICB9XG4gIC5yZWZlcmVuY2Uge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgfVxuICAucmVsYXRpb24ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgbWluLWhlaWdodDogdmFyKC0tb3ZlcnZpZXctaGVpZ2h0KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB9XG4gIC5jb21wbGV0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1heC1oZWlnaHQ6IDVlbTtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbiAgLmhhcy1jaGlsZCxcbiAgLmhhcy1wYXJlbnQsXG4gIC5pcy1jdXJyZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiY29udGFpbmVyXCJcbiAgICAgICA6Y2xhc3M9XCJbXG4gICAgICAgICAgICAgICAnc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgIGBzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS0ke2NhdGVnb3J5SWR9YCxcbiAgICAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgICAgXVwiXG4gICAgICAgOmRhdGEtc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJjYXRlZ29yeUlkXCI+XG5cbiAgICA8ZGl2IDpjbGFzcz1cIlsgJ3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5JyBdXCJcbiAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBjYXRlZ29yeS5jb2xvciB8fCAndHJhbnNwYXJlbnQnIH1cIlxuICAgICAgICAgdi1pZj1cImNhdGVnb3J5XCJcbiAgICAgICAgIDpkYXRhLXNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5PVwiY2F0ZWdvcnlJZFwiPlxuXG4gICAgICA8ZGl2IDpjbGFzcz1cIlsgJ3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuJyBdXCJcbiAgICAgICAgICAgdi1pZj1cIndpdGhDaGlsZHJlblwiPlxuICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvblxuICAgICAgICAgIHYtZm9yPVwiYyBpbiBjYXRlZ29yeS5jaGlsZHJlblwiXG4gICAgICAgICAgOmtleT1cImMuaWRcIlxuICAgICAgICAgIDppc0dlbmVyaWM9XCJpc0dlbmVyaWNcIlxuICAgICAgICAgIDpnZW5lcmljR3JhcGhzPVwiZ2VuZXJpY0dyYXBoc1wiXG4gICAgICAgICAgOmxheW91dD1cImxheW91dFwiXG4gICAgICAgICAgOndpdGhDaGlsZHJlbj1cIndpdGhDaGlsZHJlblwiXG4gICAgICAgICAgOmhpZGVKdXN0aWZpY2F0aW9ucz1cImhpZGVKdXN0aWZpY2F0aW9uc1wiXG4gICAgICAgICAgOmNhdGVnb3J5SWQ9XCJjLmlkXCI+XG4gICAgICAgIDwvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8RHJvcFpvbmUgZGF0YT1cImFkZFwiXG4gICAgICAgICAgICAgICAgdHlwZXM9XCJ1cG10L2Rlc2NyaXB0ZW0gdXBtdC9hbm5vdGF0aW9uIHVwbXQvc2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgQGFubm90YXRpb249XCJkcm9wcGVkQW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgQHNlbGVjdGlvbj1cImRyb3BwZWRTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIEBkZXNjcmlwdGVtPVwiZHJvcHBlZERlc2NyaXB0ZW1cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktanVzdGlmaWNhdGlvblwiXG4gICAgICAgICAgICAgdi1pZj1cImlzSnVzdGlmaWNhdGlvblZpc2libGVcIj5cbiAgICAgICAgICA8dWwgdi1pZj1cImlzR2VuZXJpY1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwianVzdGlmaWNhdGlvbi1kZXNjcmlwdGVtc1wiPlxuICAgICAgICAgICAgPGxpIHYtZm9yPVwiZGVzY3JpcHRlbSBpbiBjYXRlZ29yeURlc2NyaXB0ZW1zXCIgOmtleT1cImRlc2NyaXB0ZW0uaWRcIj5cbiAgICAgICAgICAgICAgPERlc2NyaXB0ZW1SZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgIDpkZXNjcmlwdGVtSWQ9XCJkZXNjcmlwdGVtLmlkXCJcbiAgICAgICAgICAgICAgICA6d2l0aE1lbnU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgOmlzUmVhZG9ubHk9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDwvRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxKdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgOmp1c3RpZmljYXRpb25JZD1cImNhdGVnb3J5Lmp1c3RpZmljYXRpb24/LmlkID8/ICcnXCI+XG4gICAgICAgICAgPC9KdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L0Ryb3Bab25lPlxuXG4gICAgICA8RHJvcFpvbmUgOmRhdGE9XCJgaW46JHtjYXRlZ29yeUlkfWBcIlxuICAgICAgICAgICAgICAgIHR5cGVzPVwidXBtdC9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB1cG10L2dlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnkgdXBtdC9zZWxlY3Rpb24gdXBtdC9kZXNjcmlwdGVtIHVwbXQvYW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgQGFubm90YXRpb249XCJkcm9wcGVkQ3JlYXRpbmdBbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBAc2VsZWN0aW9uPVwiZHJvcHBlZENyZWF0aW5nU2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBAZGVzY3JpcHRlbT1cImRyb3BwZWRDcmVhdGluZ0Rlc2NyaXB0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uXCI+XG4gICAgICAgICAgPFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb25cbiAgICAgICAgICAgIDp0eXBlPVwiY2F0ZWdvcnkuYWJzdHJhY3Rpb25UeXBlXCJcbiAgICAgICAgICAgIDpkaXJlY3Rpb249XCJsYXlvdXRcIlxuICAgICAgICAgICAgOmNoaWxkcmVuQ291bnQ9XCJjYXRlZ29yeS5jaGlsZHJlbi5sZW5ndGhcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbmluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jcml0ZXJpb25cIj5cbiAgICAgICAgICAgICAge3sgY3JpdGVyaW9uIH19XG4gICAgICAgICAgICAgIDxxLXRvb2x0aXBcbiAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgZGVuc2U+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiY3JpdGVyaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3JpdGVyaW9uLXRvb2x0aXBcIj57eyBjcml0ZXJpb24gfX08L2Rpdj5cbiAgICAgICAgICAgICAgICBDcml0ZXJpb25cbiAgICAgICAgICAgICAgPC9xLXRvb2x0aXA+XG4gICAgICAgICAgICAgIDxxLXBvcHVwLWVkaXQgdi1tb2RlbD1cImNyaXRlcmlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0by1zYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2xvdD1cInNjb3BlXCI+XG4gICAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ3JpdGVyaW9uXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2NvcGUudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgQGtleXVwLmN0cmwuZW50ZXI9XCJzY29wZS5zZXRcIlxuICAgICAgICAgICAgICAgICAgQGtleXVwLmVzYz1cInNjb3BlLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgYXV0b2dyb3dcbiAgICAgICAgICAgICAgICAgIGF1dG9mb2N1cyAvPlxuICAgICAgICAgICAgICA8L3EtcG9wdXAtZWRpdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEVsZW1lbnRNZW51XG4gICAgICAgICAgICAgIGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb25tZW51XCJcbiAgICAgICAgICAgICAgOmFjdGlvbnM9XCJyZWxhdGlvbkFjdGlvbnNcIiAvPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGNsYXNzPVwicHJpbnQtcmVtb3ZlZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgdGl0bGU9XCJDcmVhdGUgYSBuZXcgY2hpbGQgY2F0ZWdvcnlcIlxuICAgICAgICAgICAgICBpY29uPVwibWRpLXBsdXNcIj5cbiAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgIHRvdWNoLXBvc2l0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWxpc3QgZGVuc2Ugc3R5bGU9XCJtaW4td2lkdGg6IDEwMHB4XCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKFtsYWJlbCwgbmFtZV0sIGkpIGluIHByb3Bvc2VkQ2hpbGRyZW5OYW1lc1wiXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiY3JlYXRlQ2hpbGRDYXRlZ29yeShuYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICAgICAgICAgIHt7IGxhYmVsIH19XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRHJvcFpvbmU+XG5cbiAgICAgIDxEcm9wWm9uZSBkYXRhPVwiYWRkXCJcbiAgICAgICAgICAgICAgICB0eXBlcz1cInVwbXQvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkgdXBtdC9nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5IHVwbXQvc2VsZWN0aW9uIHVwbXQvZGVzY3JpcHRlbSB1cG10L2Fubm90YXRpb24gdXBtdC9jb2xvclwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIEBzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeT1cImRyb3BwZWRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgQGdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJkcm9wcGVkR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgQGFubm90YXRpb249XCJkcm9wcGVkQW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgQHNlbGVjdGlvbj1cImRyb3BwZWRTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIEBkZXNjcmlwdGVtPVwiZHJvcHBlZERlc2NyaXB0ZW1cIlxuICAgICAgICAgICAgICAgIEBjb2xvcj1cImRyb3BwZWRDb2xvclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyXCJcbiAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdoYXMtZXJyb3InOiBnZW5lcmljRWxlbWVudC5lcnJvcnM/Lmxlbmd0aCB9XCI+XG4gICAgICAgICAgPERyYWdFbGVtZW50XG4gICAgICAgICAgICB0eXBlPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnlcIlxuICAgICAgICAgICAgOmRhdGE9XCJjYXRlZ29yeUlkXCJcbiAgICAgICAgICAgIEBjbGljay5tZXRhPVwiZGVidWdcIj5cbiAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgOm5hbWU9XCJjYXRlZ29yeUljb25cIj5cbiAgICAgICAgICAgIDwvcS1pY29uPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1uYW1lXCI+e3sgY2F0ZWdvcnlOYW1lIH19XG4gICAgICAgICAgICAgIDxxLXBvcHVwLWVkaXQgdi1tb2RlbD1cImNhdGVnb3J5TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zbG90PVwic2NvcGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG8tc2F2ZT5cbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlOYW1lSW5wdXQgQGNoYW5nZT1cInNjb3BlLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpnZW5lcmljR3JhcGhzPVwiZ2VuZXJpY0dyYXBoc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjYXRlZ29yeT1cImNhdGVnb3J5XCIgLz5cbiAgICAgICAgICAgICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8cS10b29sdGlwICBjbGFzcz1cImJnLXJlZC01XCIgYW5jaG9yPVwidG9wIHJpZ2h0XCIgc2VsZj1cInRvcCBsZWZ0XCIgdi1pZj1cImdlbmVyaWNFbGVtZW50LmVycm9ycz8ubGVuZ3RoXCI+XG4gICAgICAgICAgICAgIHt7IGNhdGVnb3J5TmFtZSB9fVxuICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZXJyb3IsIGtleSBpbiBnZW5lcmljRWxlbWVudC5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIDprZXk9XCJrZXlcIj5cbiAgICAgICAgICAgICAgICB7eyBlcnJvciB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgICAgICAgPHEtdG9vbHRpcCB2LWVsc2U+XG4gICAgICAgICAgICAgIHt7IGNhdGVnb3J5TmFtZSB9fSAoe3sgaXNHZW5lcmljID8gJ0dlbmVyaWMgU3luY2hyb25pYyBDYXRlZ29yeScgOiAnU3BlY2lmaWMgU3luY2hyb25pYyBDYXRlZ29yeScgfX1cbiAgICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgICAgIDwvRHJhZ0VsZW1lbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW1lbnQtdG9vbGJhclwiPlxuICAgICAgICAgICAgPHEtYmFkZ2VcbiAgICAgICAgICAgICAgQGNsaWNrPVwiZGlzcGxheUp1c3RpZmljYXRpb24gPSAhZGlzcGxheUp1c3RpZmljYXRpb25cIlxuICAgICAgICAgICAgICBjbGFzcz1cImRlc2NyaXB0ZW1zLWJhZGdlXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJncmV5LTZcIlxuICAgICAgICAgICAgICA6dGl0bGU9XCJgJHtjYXRlZ29yeURlc2NyaXB0ZW1Db3VudH0gZGVzY3JpcHRlbXNgXCJcbiAgICAgICAgICAgICAgcm91bmRlZD57eyBjYXRlZ29yeURlc2NyaXB0ZW1Db3VudCB9fTwvcS1iYWRnZT5cbiAgICAgICAgICAgIDxOb3RlSWNvblxuICAgICAgICAgICAgICA6ZWxlbWVudD1cImNhdGVnb3J5XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtZW50LXRvb2xiYXItc2Vjb25kYXJ5IG9uLW5hbWUtaG92ZXJcIj5cbiAgICAgICAgICAgICAgPENvbG9yaXplSWNvblxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjYXRlZ29yeUNvbG9yXCIgLz5cbiAgICAgICAgICAgICAgPEVsZW1lbnRNZW51XG4gICAgICAgICAgICAgICAgOmFjdGlvbnM9XCJtZW51QWN0aW9uc1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Ryb3Bab25lPlxuXG4gICAgICA8RHJvcFpvbmUgOmRhdGE9XCJgYmVmb3JlOiR7Y2F0ZWdvcnlJZH1gXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiY2F0ZWdvcnkuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZFwiXG4gICAgICAgICAgICAgICAgdHlwZXM9XCJ1cG10L3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5IHVwbXQvZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeSB1cG10L3NlbGVjdGlvbiB1cG10L2Rlc2NyaXB0ZW0gdXBtdC9hbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVtcHR5LXBhZGRpbmcgbmV3c3NjLWRyb3B6b25lXCJcbiAgICAgICAgICAgICAgICBAc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJkcm9wcGVkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgIEBnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5PVwiZHJvcHBlZEdlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgIEBhbm5vdGF0aW9uPVwiZHJvcHBlZENyZWF0aW5nQW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgQHNlbGVjdGlvbj1cImRyb3BwZWRDcmVhdGluZ1NlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgQGRlc2NyaXB0ZW09XCJkcm9wcGVkQ3JlYXRpbmdEZXNjcmlwdGVtXCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cImNyZWF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGBiZWZvcmU6JHtjYXRlZ29yeUlkfWApXCJcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGNsYXNzPVwibmV3c3NjLWJ1dHRvbiBwcmludC1oaWRkZW5cIlxuICAgICAgICAgIDppY29uPVwiaXNWZXJ0aWNhbCA/ICdtZGktbWVudS11cCcgOiAnbWRpLW1lbnUtcmlnaHQnXCI+XG4gICAgICAgICAgPHEtdG9vbHRpcD5DcmVhdGUgYSBwYXJlbnQgY2F0ZWdvcnk8L3EtdG9vbHRpcD5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvRHJvcFpvbmU+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1pZj1cImNhdGVnb3J5LnBhcmVudElkICYmIHdpdGhDaGlsZHJlblwiXG4gICAgICAgIGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyXCJcbiAgICAgICAgPlxuICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbiA6ZGlyZWN0aW9uPVwibGF5b3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNoaWxkcmVuQ291bnQ9XCIxXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnXG4gIGltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcidcbiAgaW1wb3J0IHsgc3RyaXBDb250ZXh0RnJvbU5hbWUgfSBmcm9tICcuL3V0aWwnXG5cbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5IGZyb20gJ3N0b3Jlcy9tb2RlbHMvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnknXG5cbiAgaW1wb3J0IERlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbiBmcm9tICcuL0Rlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbi52dWUnXG4gIGltcG9ydCBKdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb24gZnJvbSAnLi9KdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb24udnVlJ1xuICBpbXBvcnQgRHJvcFpvbmUgZnJvbSAnLi9Ecm9wWm9uZS52dWUnXG4gIGltcG9ydCBEcmFnRWxlbWVudCBmcm9tICcuL0RyYWdFbGVtZW50LnZ1ZSdcbiAgaW1wb3J0IENhdGVnb3J5TmFtZUlucHV0IGZyb20gJy4vQ2F0ZWdvcnlOYW1lSW5wdXQudnVlJ1xuICBpbXBvcnQgQ29sb3JpemVJY29uIGZyb20gJy4vQ29sb3JpemVJY29uLnZ1ZSdcbiAgaW1wb3J0IE5vdGVJY29uIGZyb20gJy4vTm90ZUljb24udnVlJ1xuICBpbXBvcnQgRWxlbWVudE1lbnUgZnJvbSAnLi9FbGVtZW50TWVudS52dWUnXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uIGZyb20gJy4vU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbi52dWUnXG5cbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuXG4gIGNvbnN0ICRxID0gdXNlUXVhc2FyKClcblxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IHsgY3VycmVudFByb2plY3RJZCB9ID0gc3RvcmVUb1JlZnMoaXN0b3JlKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgY2F0ZWdvcnlJZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICAgIGdlbmVyaWNHcmFwaHM6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiBudWxsIH0sXG4gICAgICBsYXlvdXQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcImhvcml6b250YWxcIiB9LCAvLyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICBoaWRlSnVzdGlmaWNhdGlvbnM6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcbiAgICAgIGlzR2VuZXJpYzogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgICAgd2l0aENoaWxkcmVuOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3J5ID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuZ2V0U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCkpXG5cbiAgY29uc3QgY2F0ZWdvcnlOYW1lID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gY2F0ZWdvcnkudmFsdWUgPyBjYXRlZ29yeS52YWx1ZS5uYW1lIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAodmFsdWU6IHN0cmluZykge1xuICAgICAgICAgIC8qIElmIHRoZSBuZXcgbmFtZSBpcyBmcm9tIGFuIGV4aXN0aW5nIGNhdGVnb3J5IHRoYXQgaGFzIGFuIGFic3RyYWN0aW9uVHlwZSwgdGhlbiBhbHNvIHVwZGF0ZSBpdHMgYWJzdHJhY3Rpb25UeXBlICovXG4gICAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBjYXRlZ29yeS52YWx1ZT8ucXVhbGlmaWVkTmFtZSh2YWx1ZSkgPz8gdmFsdWVcbiAgICAgICAgICBjb25zdCBnZW5lcmljU291cmNlID0gcHJvcHMuZ2VuZXJpY0dyYXBocyA/IHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW2Z1bGxOYW1lXSA6IHt9XG4gICAgICAgICAgY29uc3QgYWJzdHJhY3Rpb25UeXBlID0gZ2VuZXJpY1NvdXJjZT8uYWJzdHJhY3Rpb25UeXBlIHx8ICcnXG4gICAgICAgICAgc3RvcmUudXBkYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCwgeyBuYW1lOiB2YWx1ZSwgYWJzdHJhY3Rpb25UeXBlOiBhYnN0cmFjdGlvblR5cGUgfSlcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBjYXRlZ29yeUNvbG9yID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gY2F0ZWdvcnkudmFsdWUgPyBjYXRlZ29yeS52YWx1ZS5jb2xvciA6IFwiXCJcbiAgICAgIH0sXG4gICAgICBzZXQgKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgICBpZiAoY29sb3IgPT0gJyNmZmZmZmYnKSB7XG4gICAgICAgICAgICAgIGNvbG9yID0gJydcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RvcmUudXBkYXRlU3luY2hyb25pY0NhdGVnb3J5Q29sb3IoY2F0ZWdvcnkudmFsdWU/LnByb2plY3RJZCwgY2F0ZWdvcnkudmFsdWU/Lm5hbWUsIGNvbG9yKVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3J5SWNvbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmlzR2VuZXJpYyA/ICBcIm1kaS1hbHBoYS1zLWJveFwiIDogXCJtZGktYWxwaGEtcy1ib3gtb3V0bGluZVwiKVxuXG4gIGNvbnN0IGNyaXRlcmlvbiA9IGNvbXB1dGVkKHtcbiAgICAgIGdldDogKCkgPT4gY2F0ZWdvcnkudmFsdWU/LmNyaXRlcmlvbiA/PyAnJyxcbiAgICAgIHNldDogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgc3RvcmUudXBkYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCwgeyBjcml0ZXJpb246IHZhbHVlIH0pXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgaXNMZWFmID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuICFjYXRlZ29yeS52YWx1ZT8uY2hpbGRyZW4ubGVuZ3RoXG4gIH0pXG5cbiAgY29uc3QgaXNWZXJ0aWNhbCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmxheW91dCA9PSAndmVydGljYWwnKVxuXG4gIC8vIEluaXRpYWwgc3RhdGUgZm9yIGRpc3BsYXlKdXN0aWZpY2F0aW9uXG4gIC8vIEhpZGUgYnkgZGVmYXVsdFxuICBjb25zdCBkaXNwbGF5SnVzdGlmaWNhdGlvbiA9IHJlZihmYWxzZSlcblxuICBjb25zdCBpc0p1c3RpZmljYXRpb25WaXNpYmxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlPy5qdXN0aWZpY2F0aW9uPy5kZXNjcmlwdGVtcz8ubGVuZ3RoICYmIGRpc3BsYXlKdXN0aWZpY2F0aW9uLnZhbHVlXG4gIH0pXG5cbiAgY29uc3QgY2F0ZWdvcnlEZXNjcmlwdGVtcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmICghIGNhdGVnb3J5LnZhbHVlIHx8ICEgY3VycmVudFByb2plY3RJZC52YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzLmlzR2VuZXJpYykge1xuICAgICAgICAgIC8vIFF1ZXJ5IGZvciBhbGwgZGVzY3JpcHRlbXMgZm9yIGFsbCBjYXRlZ29yaWVzXG4gICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3JpZXNCeU5hbWUgKGN1cnJlbnRQcm9qZWN0SWQudmFsdWUsIGNhdGVnb3J5LnZhbHVlLm5hbWUpXG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKGNhdCA9PiBjYXQuanVzdGlmaWNhdGlvbj8uZGVzY3JpcHRlbXMgfHwgW10pLmZsYXQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gY2F0ZWdvcnkudmFsdWU/Lmp1c3RpZmljYXRpb24/LmRlc2NyaXB0ZW1zIHx8IFtdXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgY2F0ZWdvcnlEZXNjcmlwdGVtQ291bnQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gY2F0ZWdvcnlEZXNjcmlwdGVtcy52YWx1ZS5sZW5ndGhcbiAgfSlcblxuICBpZiAoaXNMZWFmLnZhbHVlKSB7XG4gICAgICBkaXNwbGF5SnVzdGlmaWNhdGlvbi52YWx1ZSA9ICEgcHJvcHMuaGlkZUp1c3RpZmljYXRpb25zIHx8IGNhdGVnb3J5RGVzY3JpcHRlbUNvdW50LnZhbHVlID4gMFxuICB9XG5cbiAgY29uc3QgZ2VuZXJpY0VsZW1lbnQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAoY2F0ZWdvcnkudmFsdWUgJiYgcHJvcHMuZ2VuZXJpY0dyYXBocykge1xuICAgICAgICAgIHJldHVybiAgcHJvcHMuZ2VuZXJpY0dyYXBocy5ieU5hbWVbY2F0ZWdvcnkudmFsdWUuZnVsbE5hbWVdIHx8IHsgY2hpbGRyZW5OYW1lczogbmV3IFNldCgpIH1cbiAgICAgIH1cbiAgICAgIC8vIEluIGFsbCBvdGhlciBjYXNlcywgcmV0dXJuIGVtcHR5IGRpY3RcbiAgICAgIHJldHVybiB7fVxuICB9KVxuXG4gIGNvbnN0IHByb3Bvc2VkQ2hpbGRyZW5OYW1lcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDaGlsZHJlbiA9IG5ldyBTZXQoKGNhdGVnb3J5LnZhbHVlPy5jaGlsZHJlbiB8fCBbXSkubWFwKGNoaWxkID0+IGNoaWxkLmZ1bGxOYW1lKSlcbiAgICAgIGNvbnN0IGNoaWxkcmVuTmFtZXMgPSBbIC4uLmdlbmVyaWNFbGVtZW50LnZhbHVlLmNoaWxkcmVuTmFtZXMuZGlmZmVyZW5jZShjdXJyZW50Q2hpbGRyZW4pIF0udG9Tb3J0ZWQoKVxuICAgICAgcmV0dXJuIFsgW1wiTmV3IGNoaWxkIGNhdGVnb3J5XCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgLi4uY2hpbGRyZW5OYW1lcy5tYXAoKG5hbWU6IHN0cmluZykgPT4gWyBuYW1lLCBzdHJpcENvbnRleHRGcm9tTmFtZShuYW1lKSBdKSBdXG4gIH0pXG5cbiAgZnVuY3Rpb24gZGVidWcgKCkge1xuICAgICAgKHdpbmRvdyBhcyBhbnkpLmNhdGVnb3J5ID0gY2F0ZWdvcnkudmFsdWU7XG4gICAgICBjb25zb2xlLmxvZyhcIlNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5XCIsIHsgY2F0ZWdvcnk6IGNhdGVnb3J5LnZhbHVlIH0pXG4gIH1cblxuICBmdW5jdGlvbiBzaG93Q29udGVudCAoKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIGNvbnRlbnQgaXMgZXhwYW5kZWQgYW5kIHZpc2libGVcbiAgICAgIGNvbnNvbGUubG9nKFwiU2hvdWxkIGV4cGFuZCBTU0NcIilcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5ICh3aGVyZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICBpZiAoY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICBpZiAoISBuYW1lKSB7XG4gICAgICAgICAgICAgIG5hbWUgPSBpc3RvcmUubmV3U1NDSWQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGNhdGVnb3J5LnZhbHVlLnF1YWxpZmllZE5hbWUobmFtZSlcbiAgICAgICAgICBjb25zdCBnZW5lcmljU291cmNlID0gcHJvcHMuZ2VuZXJpY0dyYXBocyA/IHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW2Z1bGxOYW1lXSA6IHt9XG4gICAgICAgICAgY29uc3QgYWJzdHJhY3Rpb25UeXBlID0gZ2VuZXJpY1NvdXJjZT8uYWJzdHJhY3Rpb25UeXBlIHx8ICcnXG4gICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS52YWx1ZS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJzdHJhY3Rpb25UeXBlKVxuICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSAoY2F0ZWdvcnlJZDogc3RyaW5nKSB7XG4gICAgICAvLyBETkQgb24gYSBjYXRlZ29yeSB0byByZXBhcmVudFxuICAgICAgaWYgKCFjYXRlZ29yeUlkKSB7XG4gICAgICAgICAgLy8gRW1wdHkgY2F0ZWdvcnlJZDogY3JlYXRlIGEgbmV3IGNoaWxkXG4gICAgICAgICAgY3JlYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoYGluOiR7cHJvcHMuY2F0ZWdvcnlJZH1gKVxuICAgICAgfVxuICAgICAgY29uc3Qgc291cmNlID0gc3RvcmUuZ2V0U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoY2F0ZWdvcnlJZClcbiAgICAgIGlmIChjYXRlZ29yeUlkICE9PSBwcm9wcy5jYXRlZ29yeUlkICYmIHNvdXJjZSkge1xuICAgICAgICAgIC8vIEl0IHdhcyBtYXliZSBhIHJvb3QgY2F0ZWdvcnkuIFJlbW92ZSBpdCBmcm9tIHRoZSByb290XG4gICAgICAgICAgLy8gY2F0ZWdvcmllcyBhbmQgcmVwYXJlbnQuXG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCA9IHNvdXJjZS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkXG4gICAgICAgICAgaWYgKHNwZWNpZmljc3luY2hyb25pY21vZGVsSWQpIHtcbiAgICAgICAgICAgICAgLy8gSXQgd2FzIGEgcm9vdCBjYXRlZ29yeSAtIG1vdmUgYWxsIGl0cyBjaGlsZHJlbiBhcyByb290IGNhdGVnb3JpZXNcbiAgICAgICAgICAgICAgc291cmNlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gc3RvcmUudXBkYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoY2hpbGQuaWQsIHsgc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IG51bGwgfSkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGNhdGVnb3J5SWQsIHtcbiAgICAgICAgICAgICAgc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZDogbnVsbCxcbiAgICAgICAgICAgICAgcGFyZW50SWQ6IHByb3BzLmNhdGVnb3J5SWRcbiAgICAgICAgICB9KVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZEdlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnkgKGNhdGVnb3J5TmFtZTogc3RyaW5nLCB3aGVyZTogc3RyaW5nKSB7XG4gICAgICBpZiAod2hlcmUgPT09ICdhZGQnKSB7XG4gICAgICAgICAgLy8gVGhlcmUgaXMgbm8gXCJhZGRcIiBmb3Igbm93XG4gICAgICAgICAgd2hlcmUgPSBgaW46JHtwcm9wcy5jYXRlZ29yeUlkfWBcbiAgICAgIH1cbiAgICAgIGlmIChjYXRlZ29yeS52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGdlbmVyaWNTb3VyY2UgPSBwcm9wcy5nZW5lcmljR3JhcGhzID8gcHJvcHMuZ2VuZXJpY0dyYXBocy5ieU5hbWVbY2F0ZWdvcnlOYW1lXSA6IHt9XG4gICAgICAgICAgY29uc3QgYWJzdHJhY3Rpb25UeXBlID0gZ2VuZXJpY1NvdXJjZT8uYWJzdHJhY3Rpb25UeXBlIHx8ICcnXG4gICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoc3RyaXBDb250ZXh0RnJvbU5hbWUoY2F0ZWdvcnlOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS52YWx1ZS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJzdHJhY3Rpb25UeXBlKVxuICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWREZXNjcmlwdGVtIChkZXNjcmlwdGVtSWQ6IHN0cmluZykge1xuICAgICAgY29uc3QgZGVzY3JpcHRlbSA9IHN0b3JlLmdldERlc2NyaXB0ZW0oZGVzY3JpcHRlbUlkKVxuICAgICAgaWYgKGRlc2NyaXB0ZW0pIHtcbiAgICAgICAgICBzdG9yZS5hZGRUZXh0U2VsZWN0aW9uVG9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShkZXNjcmlwdGVtLnRvSlNPTigpLCBwcm9wcy5jYXRlZ29yeUlkKVxuICAgICAgICAgIHN0b3JlLmRlbGV0ZURlc2NyaXB0ZW0oZGVzY3JpcHRlbUlkKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZEFubm90YXRpb24gKGFubm90YXRpb25JZDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBhbm5vdGF0aW9uID0gc3RvcmUuZ2V0QW5ub3RhdGlvbihhbm5vdGF0aW9uSWQpXG4gICAgICBpZiAoYW5ub3RhdGlvbikge1xuICAgICAgICAgIHN0b3JlLmFkZFRleHRTZWxlY3Rpb25Ub1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGFubm90YXRpb24udG9KU09OKCksIHByb3BzLmNhdGVnb3J5SWQpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkU2VsZWN0aW9uIChzZWxlY3Rpb25EYXRhOiBzdHJpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gSlNPTi5wYXJzZShzZWxlY3Rpb25EYXRhKVxuICAgICAgICAgIHN0b3JlLmFkZFRleHRTZWxlY3Rpb25Ub1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHNlbGVjdGlvbiwgcHJvcHMuY2F0ZWdvcnlJZClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgQ2Fubm90IHBhcnNlICR7c2VsZWN0aW9uRGF0YX06ICR7ZX1gKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZENvbG9yIChjb2xvcjogc3RyaW5nKSB7XG4gICAgICBzdG9yZS51cGRhdGVTeW5jaHJvbmljQ2F0ZWdvcnlDb2xvcihjYXRlZ29yeS52YWx1ZT8ucHJvamVjdElkLCBjYXRlZ29yeS52YWx1ZT8ubmFtZSwgY29sb3IpXG4gIH1cblxuICAvLyBEcm9wcGVkIHNlbGVjdGlvbnMgdG8gY3JlYXRlIGEgU1NDYXRlZ29yeS4gZGF0YSBpcyBiZWZvcmUgb3IgYWZ0ZXJcbiAgZnVuY3Rpb24gZHJvcHBlZENyZWF0aW5nRGVzY3JpcHRlbSAoZGVzY3JpcHRlbUlkOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0ZW0gPSBzdG9yZS5nZXREZXNjcmlwdGVtKGRlc2NyaXB0ZW1JZClcbiAgICAgIGlmIChkZXNjcmlwdGVtICYmIGNhdGVnb3J5LnZhbHVlKSB7XG4gICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoaXN0b3JlLm5ld1NTQ0lkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkudmFsdWUuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGVtLnRvSlNPTigpKVxuICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRDcmVhdGluZ0Fubm90YXRpb24gKGFubm90YXRpb25JZDogc3RyaW5nLCB3aGVyZTogc3RyaW5nKSB7XG4gICAgICBjb25zdCBhbm5vdGF0aW9uID0gc3RvcmUuZ2V0QW5ub3RhdGlvbihhbm5vdGF0aW9uSWQpXG4gICAgICBpZiAoYW5ub3RhdGlvbiAmJiBjYXRlZ29yeS52YWx1ZSkge1xuICAgICAgICAgIHN0b3JlLmFkZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGlzdG9yZS5uZXdTU0NJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnZhbHVlLnNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbi50b0pTT04oKSlcbiAgICAgICAgICBzaG93Q29udGVudCgpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkQ3JlYXRpbmdTZWxlY3Rpb24gKHNlbGVjdGlvbkRhdGE6IHN0cmluZywgd2hlcmU6IHN0cmluZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBKU09OLnBhcnNlKHNlbGVjdGlvbkRhdGEpXG4gICAgICAgICAgaWYgKHNlbGVjdGlvbiAmJiBjYXRlZ29yeS52YWx1ZSkge1xuICAgICAgICAgICAgICBzdG9yZS5hZGRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShpc3RvcmUubmV3U1NDSWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkudmFsdWUuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbilcbiAgICAgICAgICAgICAgc2hvd0NvbnRlbnQoKVxuICAgICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgQ2Fubm90IHBhcnNlICR7c2VsZWN0aW9uRGF0YX06ICR7ZX1gKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQWJzdHJhY3Rpb25UeXBlICh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICBzdG9yZS51cGRhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShwcm9wcy5jYXRlZ29yeUlkLCB7IGFic3RyYWN0aW9uVHlwZTogdmFsdWUgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkQ2F0ZWdvcnkgKG5hbWU6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgIGNyZWF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGBpbjoke3Byb3BzLmNhdGVnb3J5SWR9YCwgbmFtZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyaXRlcmlvblBvcHVwICgpIHtcbiAgICAgIGNvbnN0IGNyaXRlcmlvbiA9IGNhdGVnb3J5LnZhbHVlPy5jcml0ZXJpb24gfHwgXCJcIlxuICAgICAgJHEuZGlhbG9nKHtcbiAgICAgICAgICB0aXRsZTogJ0VudGVyIGEgY3JpdGVyaW9uIGZvciB0aGlzIHJlbGF0aW9uJyxcbiAgICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdZb3UgY2FuIHNwZWNpZnkgYSBjcml0ZXJpb24gZm9yIHRoaXMgcmVsYXRpb24gb3IgdGhlIGFzc29jaWF0ZWQgY2F0ZWdvcnkuJyxcbiAgICAgICAgICBwcm9tcHQ6IHtcbiAgICAgICAgICAgICAgbW9kZWw6IGNyaXRlcmlvbixcbiAgICAgICAgICAgICAgdHlwZTogJ3RleHQnIC8vIG9wdGlvbmFsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYW5jZWw6IHRydWUsXG4gICAgICAgICAgcGVyc2lzdGVudDogdHJ1ZVxuICAgICAgfSkub25PayhuZXdWYWx1ZSA9PiB7XG4gICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgIHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQsIHsgY3JpdGVyaW9uOiBuZXdWYWx1ZSB9KVxuICAgICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICBpbXBvcnQgdHlwZSB7IE5hbWVkQWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy91dGlsLnRzJ1xuXG4gIGNvbnN0IG1lbnVBY3Rpb25zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uczogTmFtZWRBY3Rpb25bXSA9IFtcbiAgICAgICAgICBbIFwiRGVsZXRlIHRoaXMgY2F0ZWdvcnkgb25seVwiLCAoKSA9PiBzdG9yZS5kZWxldGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShwcm9wcy5jYXRlZ29yeUlkLCBmYWxzZSkgXSxcbiAgICAgICAgICBbIFwiRGVsZXRlIHRoaXMgY2F0ZWdvcnkgYW5kIGl0cyBjaGlsZHJlblwiLCAoKSA9PiBzdG9yZS5kZWxldGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShwcm9wcy5jYXRlZ29yeUlkLCB0cnVlKSBdLFxuICAgICAgXVxuICAgICAgaWYgKGNhdGVnb3J5LnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGNhdGVnb3J5TmFtZS52YWx1ZVxuICAgICAgICAgIGlmIChuYW1lLmVuZHNXaXRoKFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5LkNPTlRFWFRfTUFSS0VSKSkge1xuICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goWyBcIlN0YW5kYXJkIGNvbnNpc3RlbmN5IGNoZWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRyYWlsaW5nIC9cbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5TmFtZS52YWx1ZSA9IG5hbWUuc3Vic3RyKDAsIG5hbWUubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgfSBdKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFjdGlvbnMucHVzaChbIFwiQ29udGV4dHVhbGl6ZWQgY29uc2lzdGVuY3kgY2hlY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gQWRkIHRyYWlsaW5nIC9cbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5TmFtZS52YWx1ZSA9IG5hbWUgKyBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeS5DT05URVhUX01BUktFUlxuICAgICAgICAgICAgICB9IF0pXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjdGlvbnNcbiAgfSlcblxuICBjb25zdCByZWxhdGlvbkFjdGlvbnM6IE5hbWVkQWN0aW9uW10gPSBbXG4gICAgICBbIFwiQ3JlYXRlIGEgbmV3IGNoaWxkIGNhdGVnb3J5XCIsICgpID0+IGNyZWF0ZUNoaWxkQ2F0ZWdvcnkoKSBdLFxuICAgICAgWyBcIlNldCBhcyBnZW5lcmljIGFic3RyYWN0aW9uXCIsICgpID0+IHVwZGF0ZUFic3RyYWN0aW9uVHlwZSgnJykgXSxcbiAgICAgIFsgXCJTZXQgYXMgYWdncmVnYXRpb24gYWJzdHJhY3Rpb24g4ouEXCIsICgpID0+IHVwZGF0ZUFic3RyYWN0aW9uVHlwZSgnYWdncmVnYXRpb24nKSBdLFxuICAgICAgWyBcIlNldCBhcyBzcGVjaWFsaXphdGlvbiBhYnN0cmFjdGlvbiDip41cIiwgKCkgPT4gdXBkYXRlQWJzdHJhY3Rpb25UeXBlKCdzcGVjaWFsaXphdGlvbicpIF0sXG4gICAgICBbIFwiRGVmaW5lIGEgY3JpdGVyaW9uIGZvciB0aGlzIGFic3RyYWN0aW9uIHJlbGF0aW9uXCIsICgpID0+IGNyaXRlcmlvblBvcHVwKCkgXVxuICBdXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmhlYWRlci1jbGFzcyB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZWxlbWVudC10b29sYmFyLCAuZWxlbWVudC10b29sYmFyLXNlY29uZGFyeSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW4ge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIC52ZXJ0aWNhbCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW4ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIG1hcmdpbjogMCAxZW07XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuLmhvcml6b250YWwge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB7XG4gICAgICBtaW4td2lkdGg6IHZhcigtLW1vbWVudC1taW5pbXVtLXdpZHRoKTtcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgZmxleDogMTtcbiAgfVxuICAudmVydGljYWwgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmhpZ2hsaWdodGVkIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oaWdobGlnaHRlZC1jb2xvcik7XG4gIH1cbiAgLmhpZ2hsaWdodGVkIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0ZWQtY29sb3IpO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1qdXN0aWZpY2F0aW9uIHtcbiAgICAgIHdpZHRoOiBjYWxjKHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktZGVzY3JpcHRlbS13aWR0aCkgKyA1MHB4KTtcbiAgfVxuICAudmVydGljYWwgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWp1c3RpZmljYXRpb24ge1xuICAgICAgd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktZGVzY3JpcHRlbS13aWR0aCk7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlciB7XG4gICAgICB3aWR0aDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1oZWFkZXItd2lkdGgpO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1qdXN0aWZpY2F0aW9uIHtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCBncmV5O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyLmhhcy1lcnJvciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWJvZHkge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWJvZHkgLnEtaXRlbSB7XG4gICAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5xLWl0ZW1fX3NlY3Rpb24tLWF2YXRhciB7XG4gICAgICBtaW4td2lkdGg6IDJweDtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGFuZGxlIHtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oYW5kbGU6aG92ZXIge1xuICAgICAgb3BhY2l0eTogLjg7XG4gIH1cbiAgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMDtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktbmFtZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxOHB4KTtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAvKiBTaW5jZSB3ZSBkaXNwbGF5IGEgYm9yZGVyIG9uIGhvdmVyLCBtYXRjaCB0aGUgc3BhY2UgaW4gbm9uLWhvdmVyIHN0YXRlICovXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktbmFtZTpob3ZlciB7XG4gICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2NjY2NjY2VlO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1qdXN0aWZpY2F0aW9uIHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6IDE2cHg7XG4gICAgICBvcGFjaXR5OiAxLjA7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgQHN0YXJ0aW5nLXN0eWxlIHtcbiAgICAgIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1qdXN0aWZpY2F0aW9uIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXIge1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb24ge1xuICAgICAgd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktcmVsYXRpb24td2lkdGgpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC52ZXJ0aWNhbCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb24ge1xuICAgICAgaGVpZ2h0OiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LXJlbGF0aW9uLXdpZHRoKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbmluZm8ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiBjYWxjKDUwJSArIDEwcHgpO1xuICAgICAgd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktcmVsYXRpb24td2lkdGgpO1xuICAgICAgbGVmdDogMDtcbiAgICAgIG9wYWNpdHk6IDAuMjtcbiAgfVxuICAudmVydGljYWwgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uaW5mbyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1yZWxhdGlvbi13aWR0aCk7XG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDQwcHgpO1xuICB9XG5cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uOmhvdmVyICAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uaW5mbyB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jcml0ZXJpb24ge1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIGxpZ2h0Z3JleTtcbiAgICAgIHdpZHRoOiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LXJlbGF0aW9uLXdpZHRoKTtcbiAgICAgIG1pbi1oZWlnaHQ6IDFlbTtcbiAgICAgIG1heC1oZWlnaHQ6IDI0cHg7XG5cbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXI6aG92ZXIgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuICAuZWxlbWVudC10b29sYmFyIHtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXIge1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBmbGV4OiAxO1xuICB9XG4gIC52ZXJ0aWNhbCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgfVxuICAuZGVzY3JpcHRlbXMtYmFkZ2Uge1xuICAgICAgb3BhY2l0eTogLjY7XG4gIH1cbiAgLmRlc2NyaXB0ZW1zLWJhZGdlOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLm5ld3NzYy1idXR0b24ge1xuICAgICAgd2lkdGg6IDhweDtcbiAgICAgIG9wYWNpdHk6IC41O1xuICB9XG4gIC52ZXJ0aWNhbCAubmV3c3NjLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIHdpZHRoOiA0OHB4O1xuICB9XG4gIC5jcml0ZXJpb24tdG9vbHRpcCB7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIH1cbiAgLmp1c3RpZmljYXRpb24tZGVzY3JpcHRlbXMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY3JpdGVyaW9uIHtcbiAgICAgIGN1cnNvcjogdGV4dDtcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzEiLCJfaG9pc3RlZF8yIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9ob2lzdGVkXzQiLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzYiLCJfaG9pc3RlZF83IiwiX2hvaXN0ZWRfOCIsIl9ob2lzdGVkXzMiLCJfbm9ybWFsaXplU3R5bGUiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlVGV4dFZOb2RlIiwic3BhbiIsImNvbG9yIiwiX21lcmdlUHJvcHMiLCJfdG9IYW5kbGVycyIsIl9yZW5kZXJTbG90IiwiX3VzZU1vZGVsIiwiX3dpdGhNb2RpZmllcnMiLCJfd2l0aEN0eCIsImNvbXBsZXRpb25zIiwibmFtZSIsIl9ob2lzdGVkXzEwIiwiX2hvaXN0ZWRfOSIsIl93aXRoS2V5cyIsImNhdGVnb3J5TmFtZSIsImNyaXRlcmlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREUsVUFBTSxRQUFRO0FBTWQsVUFBTSxZQUFZLElBQUksSUFBSTtBQUMxQixVQUFNLGFBQWEsU0FBUztBQUFBLE1BQ3hCLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxJQUFBLENBQ1g7QUFFRCxVQUFNLGNBQWMsSUFBSSxDQUFDO0FBRXpCLFVBQU0sa0JBQWtCLFNBQVMsTUFBTTtBQUNuQyxhQUFPO0FBQUEsSUFDWCxDQUFDO0FBRUQsVUFBTSxtQkFBbUIsU0FBUyxNQUFNO0FBQ3BDLFlBQU0sUUFBUSxNQUFNO0FBQ3BCLGFBQU8sSUFBSyxRQUFRO0FBQUEsSUFDeEIsQ0FBQztBQUVELFVBQU0sZ0JBQWdCLFNBQVMsTUFBTSxNQUFNLFNBQVMsYUFBYTtBQUNqRSxVQUFNLG1CQUFtQixTQUFTLE1BQU0sTUFBTSxTQUFTLGdCQUFnQjtBQUN2RSxVQUFNLGFBQWEsU0FBUyxNQUFNLE1BQU0sa0JBQWtCLENBQUM7QUFFM0QsVUFBTSxpQkFBaUIsU0FBUyxPQUFPO0FBQUEsTUFDbkMsR0FBRyxXQUFXO0FBQUEsTUFDZCxHQUFHLFdBQVcsU0FBUztBQUFBLElBQUEsRUFDekI7QUFFRixVQUFNLGNBQWMsU0FBUyxPQUFPO0FBQUEsTUFDaEMsR0FBRyxXQUFXLFFBQVE7QUFBQSxNQUN0QixHQUFHLFdBQVcsU0FBUyxNQUFNLGdCQUFnQjtBQUFB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
