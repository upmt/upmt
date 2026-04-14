import { Q as QTooltip } from "./QTooltip-BcT2fcEV.js";
import { a as DragElement, C as ColorizeIcon, D as DropZone } from "./DropZone-8HkwR4L7.js";
import { H as defineComponent, r as ref, bL as reactive, b as computed, _ as _export_sfc, P as createElementBlock, L as openBlock, a9 as createBaseVNode, N as createCommentVNode, ad as normalizeClass, ae as resolveComponent, af as normalizeStyle, S as Fragment, U as renderList, R as createVNode, K as createBlock, M as withCtx, X as toDisplayString, W as createTextVNode, c5 as SpecificSynchronicCategory, aV as renderSlot, aT as mergeProps, c6 as toHandlers, c7 as mergeModels, I as useProjectStore, c4 as useModel, J as useInterfaceStore, be as storeToRefs, a7 as QIcon, Y as withModifiers, aq as withKeys, Q as QBtn, bf as QCheckbox, bd as QInput, V as withDirectives } from "./index-CfhV53hf.js";
import { Q as QPopupEdit, N as NoteIcon } from "./QSlider-DqeFVZVu.js";
import { f as QItem, h as QItemSection, Q as QMenu } from "./format-tqiE4n6T.js";
import { Q as QList } from "./QList-DPf5jldM.js";
import { Q as QBadge } from "./QBadge-CJ7Kuebu.js";
import { u as useQuasar, C as ClosePopup } from "./use-quasar-CK0B07IE.js";
import { Q as QSpace } from "./QSpace-6bpFmAzJ.js";
import { E as ElementMenu } from "./ElementMenu-C1EE2X4b.js";
import { Q as QSelect } from "./QSelect-DmJnVDRl.js";
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
const AnnotatedText = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-f5881b47"], ["__file", "AnnotatedText.vue"]]);
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
const SpecificSynchronicCategoryRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fa1f7df1"], ["__file", "SpecificSynchronicCategoryRepresentation.vue"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbi1DbXRHbUFYay5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXcudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR2VuZXJpY0NhdGVnb3JpZXNPdmVydmlldy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy91dGlsLnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQW5ub3RhdGVkVGV4dC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EZXNjcmlwdGVtTW9kaWZpY2F0aW9uRGlhbG9nLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9KdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb24udnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlOYW1lSW5wdXQudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgY2xhc3M9XCJ0cmVlLWJveFwiXG4gICAgICAgOnN0eWxlPVwieyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfVwiPlxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICA8ZyA6Y2xhc3M9XCJkaXJlY3Rpb25cIlxuICAgICAgICAgOmRhdGEtY2hpbGRyZW4tY291bnQ9XCJjaGlsZHJlbkNvdW50XCI+XG4gICAgICAgIDxsaW5lXG4gICAgICAgICAgdi1pZj1cImNoaWxkcmVuQ291bnQgPiAxXCJcbiAgICAgICAgICB2ZWN0b3ItZWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICA6eDE9XCIwXCJcbiAgICAgICAgICA6eTE9XCJiYXJQb3NpdGlvbi55XCJcbiAgICAgICAgICA6eDI9XCIwXCJcbiAgICAgICAgICA6eTI9XCJkaW1lbnNpb25zLmhlaWdodCAtIGJhclBvc2l0aW9uLnlcIlxuICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICA6c3Ryb2tlLXdpZHRoPVwic3Ryb2tlV2lkdGhcIlxuICAgICAgICAgIGNsYXNzPVwicmVsYXRpb24tcGVycGVuZGljdWxhclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPGxpbmVcbiAgICAgICAgICB2ZWN0b3ItZWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICA6eDE9XCIwXCJcbiAgICAgICAgICA6eTE9XCJwYXJlbnRQb3NpdGlvbi55XCJcbiAgICAgICAgICA6eDI9XCJwYXJlbnRQb3NpdGlvbi54XCJcbiAgICAgICAgICA6eTI9XCJwYXJlbnRQb3NpdGlvbi55XCJcbiAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgOnN0cm9rZS13aWR0aD1cInN0cm9rZVdpZHRoXCJcbiAgICAgICAgICBjbGFzcz1cInJlbGF0aW9uLWxpbmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgdmVjdG9yLWVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgdi1pZj1cImlzQWdncmVnYXRpb25cIlxuICAgICAgICAgIDpkPVwiYE0ke3BhcmVudFBvc2l0aW9uLnh9ICR7cGFyZW50UG9zaXRpb24ueX0gbCAtJHtzeW1ib2xIYWxmV2lkdGh9IC0ke3N5bWJvbEhhbGZIZWlnaHR9IGwgLSR7c3ltYm9sSGFsZldpZHRofSAke3N5bWJvbEhhbGZIZWlnaHR9IGwgJHtzeW1ib2xIYWxmV2lkdGh9ICR7c3ltYm9sSGFsZkhlaWdodH0gWmBcIlxuICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgIDpzdHJva2Utd2lkdGg9XCJzdHJva2VXaWR0aFwiIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgdi1pZj1cImlzU3BlY2lhbGl6YXRpb25cIlxuICAgICAgICAgIDpkPVwiYE0ke3BhcmVudFBvc2l0aW9uLnh9ICR7cGFyZW50UG9zaXRpb24ueX0gbCAtJHsgMiAqIHN5bWJvbEhhbGZXaWR0aCB9IC0kezIgKiBzeW1ib2xIYWxmSGVpZ2h0fSBsIDAgJHs0ICogc3ltYm9sSGFsZkhlaWdodH0gWmBcIlxuICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgIDpzdHJva2Utd2lkdGg9XCJzdHJva2VXaWR0aFwiIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgdi1pZj1cImlzUHJvcGVydHlcIlxuICAgICAgICAgIDpkPVwiYE0ke3BhcmVudFBvc2l0aW9uLnggLSBzeW1ib2xIYWxmV2lkdGh9ICR7cGFyZW50UG9zaXRpb24ueSAtIHN5bWJvbEhhbGZIZWlnaHR9IGwgJHtzeW1ib2xIYWxmV2lkdGh9ICR7c3ltYm9sSGFsZkhlaWdodH0gbCAtJHtzeW1ib2xIYWxmV2lkdGh9ICR7c3ltYm9sSGFsZkhlaWdodH1gXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgIDpzdHJva2Utd2lkdGg9XCJzdHJva2VXaWR0aFwiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyByZWYsIHJlYWN0aXZlLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGNoaWxkcmVuQ291bnQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAxIH0sXG4gICAgICBkaXJlY3Rpb246IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnaG9yaXpvbnRhbCcgfSxcbiAgICAgIHR5cGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH1cbiAgfSlcblxuICBjb25zdCBjb250YWluZXIgPSByZWYobnVsbClcbiAgY29uc3QgZGltZW5zaW9ucyA9IHJlYWN0aXZlKHtcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICBoZWlnaHQ6IDEwMFxuICB9KVxuXG4gIGNvbnN0IHN0cm9rZVdpZHRoID0gcmVmKDEpXG5cbiAgY29uc3Qgc3ltYm9sSGFsZldpZHRoID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIDIwXG4gIH0pXG5cbiAgY29uc3Qgc3ltYm9sSGFsZkhlaWdodCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNvdW50ID0gcHJvcHMuY2hpbGRyZW5Db3VudFxuICAgICAgcmV0dXJuIDYgLyAoMS4wNSAqKiBjb3VudClcbiAgfSlcblxuICBjb25zdCBpc0FnZ3JlZ2F0aW9uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudHlwZSA9PT0gJ2FnZ3JlZ2F0aW9uJylcbiAgY29uc3QgaXNTcGVjaWFsaXphdGlvbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnR5cGUgPT09ICdzcGVjaWFsaXphdGlvbicpXG4gIGNvbnN0IGlzUHJvcGVydHkgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5jaGlsZHJlbkNvdW50ID09PSAwKVxuXG4gIGNvbnN0IHBhcmVudFBvc2l0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHg6IGRpbWVuc2lvbnMud2lkdGgsXG4gICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAvIDJcbiAgfSkpXG5cbiAgY29uc3QgYmFyUG9zaXRpb24gPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgeDogZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAvIHByb3BzLmNoaWxkcmVuQ291bnQgLyAyXG4gIH0pKVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC50cmVlLWJveCBzdmcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgZy52ZXJ0aWNhbCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xuICB9XG4gIGdbZGF0YS1jaGlsZHJlbi1jb3VudD1cIjBcIl0gLnJlbGF0aW9uLWxpbmUge1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMztcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiByZWY9XCJjb250YWluZXJcIlxuICAgICAgIDpjbGFzcz1cIlsgJ2dlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY29udGFpbmVyJywgYGdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktJHtjYXRlZ29yeS5uYW1lfWAgXVwiXG4gICAgICAgOmRhdGEtZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeT1cImNhdGVnb3J5Lm5hbWVcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5XCJcbiAgICAgICAgIDpjbGFzcz1cInsgJ3Jvb3QtZ2VuZXJpYy1zeW5jaHJvbmljLWNhdGVnb3J5JzogY2F0ZWdvcnkuaXNSb290IH1cIlxuICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IGNhdGVnb3J5LmNvbG9yIH1cIlxuICAgICAgICAgdi1pZj1cImNhdGVnb3J5XCJcbiAgICAgICAgIDpkYXRhLWdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJjYXRlZ29yeS5uYW1lXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuXCI+XG4gICAgICAgIDxkaXYgdi1mb3I9XCJjIGluIGNhdGVnb3J5LmNoaWxkcmVuXCIgOmtleT1cImMubmFtZVwiPlxuICAgICAgICAgIDxHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXdcbiAgICAgICAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0SWRcIlxuICAgICAgICAgICAgOmxheW91dD1cImxheW91dFwiXG4gICAgICAgICAgICA6Y3VycmVudEludGVydmlld0lkPVwiY3VycmVudEludGVydmlld0lkXCJcbiAgICAgICAgICAgIDpjYXRlZ29yeT1cImNcIj5cbiAgICAgICAgICA8L0dlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlPdmVydmlldz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb25cIlxuICAgICAgICAgICB2LWlmPVwiY2F0ZWdvcnkuY2hpbGRyZW4/Lmxlbmd0aFwiPlxuICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvblxuICAgICAgICAgIDp0eXBlPVwiYWJzdHJhY3Rpb25UeXBlXCJcbiAgICAgICAgICA6ZGlyZWN0aW9uPVwibGF5b3V0XCJcbiAgICAgICAgICA6Y2hpbGRyZW5Db3VudD1cImNhdGVnb3J5LmNoaWxkcmVuPy5sZW5ndGhcIj5cbiAgICAgICAgPC9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlclwiXG4gICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1lcnJvcic6IGNhdGVnb3J5LmVycm9ycz8ubGVuZ3RoIH1cIj5cbiAgICAgICAgPERyYWdFbGVtZW50XG4gICAgICAgICAgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjb250ZW50LWNlbnRlclwiXG4gICAgICAgICAgdHlwZT1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnlcIlxuICAgICAgICAgIDpkYXRhPVwiY2F0ZWdvcnkubmFtZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1uYW1lXCI+e3sgY2F0ZWdvcnkubmFtZSB9fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9EcmFnRWxlbWVudD5cbiAgICAgICAgICA8cS10b29sdGlwICBjbGFzcz1cImJnLXJlZC01XCIgYW5jaG9yPVwidG9wIHJpZ2h0XCIgc2VsZj1cInRvcCBsZWZ0XCIgdi1pZj1cImNhdGVnb3J5LmVycm9ycz8ubGVuZ3RoXCI+XG4gICAgICAgICAgICB7eyBjYXRlZ29yeS5uYW1lIH19XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZXJyb3IsIGtleSBpbiBjYXRlZ29yeS5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICA6a2V5PVwia2V5XCI+XG4gICAgICAgICAgICAgIHt7IGVycm9yIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3EtdG9vbHRpcD5cbiAgICAgICAgICA8cS10b29sdGlwIGFuY2hvcj1cInRvcCByaWdodFwiIHNlbGY9XCJ0b3AgbGVmdFwiIHYtZWxzZT5cbiAgICAgICAgICAgIHt7IGNhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICA8L3EtdG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHYtaWY9XCIhY2F0ZWdvcnkuaXNSb290XCJcbiAgICAgICAgY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWZpbGxlclwiXG4gICAgICAgID5cbiAgICAgICAgPFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb25cbiAgICAgICAgICA6ZGlyZWN0aW9uPVwibGF5b3V0XCJcbiAgICAgICAgICA6Y2hpbGRyZW5Db3VudD1cIjFcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgRHJhZ0VsZW1lbnQgZnJvbSAnLi9EcmFnRWxlbWVudC52dWUnXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uIGZyb20gJy4vU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbi52dWUnXG5cbiAgaW1wb3J0IHR5cGUgeyBHZW5lcmljQ2F0ZWdvcnkgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIC8vIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIC8vIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBwcm9wcyA9IHdpdGhEZWZhdWx0cyhkZWZpbmVQcm9wczx7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgICAgIGNhdGVnb3J5OiAgR2VuZXJpY0NhdGVnb3J5LFxuICAgICAgY3VycmVudEludGVydmlld0lkOiBzdHJpbmcgfCBudWxsLFxuICAgICAgbGF5b3V0OiBzdHJpbmdcbiAgfT4oKSwge1xuICAgICAgbGF5b3V0OiAnaG9yaXpvbnRhbCdcbiAgfSlcblxuICAvLyBGSVhNRTogZGV0ZWN0IGluY29uc2lzdGVuY2llc1xuICBjb25zdCBhYnN0cmFjdGlvblR5cGUgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5jYXRlZ29yeS5pbnN0YW5jZXNbMF0/LmFic3RyYWN0aW9uVHlwZSB8fCBcIlwiKVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5IHtcbiAgICAgICBtYXJnaW46IDA7XG4gICAgICAgcGFkZGluZzogMDtcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgZmxleDogMTtcbiAgICAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnZlcnRpY2FsIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW4ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgfVxuICAudmVydGljYWwgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW4ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgfVxuICAudmVydGljYWwgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbjogMCA0cHg7XG4gIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktbmFtZSB7XG4gICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tb3ZlcnZpZXctZm9udC1zaXplKTtcbiAgICAgIHdpZHRoOiB2YXIoLS1vdmVydmlldy13aWR0aCk7XG4gICAgICBoZWlnaHQ6IHZhcigtLW92ZXJ2aWV3LWhlaWdodCkgIWltcG9ydGFudDtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbixcbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLW92ZXJ2aWV3LWhlaWdodCkgKyAycHgpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgIGhlaWdodDogLW1vei1hdmFpbGFibGU7XG4gIH1cbiAgLnZlcnRpY2FsIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tb3ZlcnZpZXctaGVpZ2h0KSArIDJweCk7XG4gIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyIHtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1vdmVydmlldy1oZWlnaHQpICsgMnB4KTtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIGZsZXg6IDE7XG4gIH1cbiAgLnZlcnRpY2FsIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWZpbGxlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlci5oYXMtZXJyb3Ige1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICB9XG4gIC5yb290LWdlbmVyaWMtc3luY2hyb25pYy1jYXRlZ29yeTpob3ZlciB7XG4gICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2RkZDtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImdlbmVyaWNjYXRlZ29yaWVzLWNvbnRhaW5lclwiXG4gICAgICAgOmNsYXNzPVwibGF5b3V0XCJcbiAgICAgICA6a2V5PVwicHJvamVjdElkXCJcbiAgICAgICA6ZGF0YS1wcm9qZWN0PVwicHJvamVjdElkXCI+XG5cbiAgICA8R2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3XG4gICAgICB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIlxuICAgICAgOmtleT1cImNhdGVnb3J5Lm5hbWVcIlxuICAgICAgOnByb2plY3RJZD1cInByb2plY3RJZFwiXG4gICAgICA6bGF5b3V0PVwibGF5b3V0XCJcbiAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIlxuICAgICAgOmNhdGVnb3J5PVwiY2F0ZWdvcnlcIj5cbiAgICA8L0dlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlPdmVydmlldz5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IEdlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlPdmVydmlldyBmcm9tICcuL0dlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlPdmVydmlldy52dWUnXG5cbiAgaW1wb3J0IHR5cGUgeyBHZW5lcmljQ2F0ZWdvcnkgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIGludGVyZmFjZSBQcm9wcyB7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgICAgIGNhdGVnb3JpZXM6IEdlbmVyaWNDYXRlZ29yeVtdLFxuICAgICAgY3VycmVudEludGVydmlld0lkOiBzdHJpbmcsXG4gICAgICBsYXlvdXQ6IHN0cmluZ1xuICB9XG5cbiAgd2l0aERlZmF1bHRzKGRlZmluZVByb3BzPFByb3BzPigpLCB7XG4gICAgICBwcm9qZWN0SWQ6IFwiXCIsXG4gICAgICBjdXJyZW50SW50ZXJ2aWV3SWQ6IFwiXCIsXG4gICAgICBsYXlvdXQ6ICdob3Jpem9udGFsJ1xuICB9KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAuZ2VuZXJpY2NhdGVnb3JpZXMtY29udGFpbmVyIGRpdiB7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgIH1cbiAgICAuZ2VuZXJpY2NhdGVnb3JpZXMtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLmdlbmVyaWNjYXRlZ29yaWVzLWNvbnRhaW5lci52ZXJ0aWNhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgfVxuICAgICAuZ2VuZXJpY2NhdGVnb3JpZXMtY29udGFpbmVyID4gKiB7XG4gICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgIH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkgZnJvbSAnc3RvcmVzL21vZGVscy9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSdcblxuY29uc3QgQU5OT1RBVElPTl9DT0xPUlMgPSBbXG4gICcjZmY5Nzk3JyxcbiAgJyM5ZWIyZGQnLFxuICAnI2ZmZGM5NycsXG4gICcjN2JjZjdiJ1xuXVxuXG4vKiFcbiAqIEdyb3VwIGl0ZW1zIGZyb20gYW4gYXJyYXkgdG9nZXRoZXIgYnkgc29tZSBjcml0ZXJpYSBvciB2YWx1ZS5cbiAqIChjKSAyMDE5IFRvbSBCcmVtbWVyIChodHRwczovL3RicmVtZXIuY29tLykgYW5kIENocmlzIEZlcmRpbmFuZGkgKGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbSksIE1JVCBMaWNlbnNlLFxuICogQHBhcmFtICB7QXJyYXl9ICAgICAgICAgICBhcnIgICAgICBUaGUgYXJyYXkgdG8gZ3JvdXAgaXRlbXMgZnJvbVxuICogQHBhcmFtICB7U3RyaW5nfEZ1bmN0aW9ufSBjcml0ZXJpYSBUaGUgY3JpdGVyaWEgdG8gZ3JvdXAgYnlcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAgVGhlIGdyb3VwZWQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGdyb3VwQnkgKGFycjogQXJyYXk8YW55PiwgY3JpdGVyaWE6IHN0cmluZ3wgKChpdGVtOiBhbnkpID0+IGFueSkpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgaXRlbSkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBjcml0ZXJpYSBpcyBhIGZ1bmN0aW9uIHRvIHJ1biBvbiB0aGUgaXRlbSBvciBhIHByb3BlcnR5IG9mIGl0XG4gICAgY29uc3Qga2V5ID0gdHlwZW9mIGNyaXRlcmlhID09PSAnZnVuY3Rpb24nID8gY3JpdGVyaWEoaXRlbSkgOiBpdGVtW2NyaXRlcmlhXVxuXG4gICAgLy8gSWYgdGhlIGtleSBkb2Vzbid0IGV4aXN0IHlldCwgY3JlYXRlIGl0XG4gICAgaWYgKCFPYmplY3QuaGFzT3duKG9iaiwga2V5KSkge1xuICAgICAgb2JqW2tleV0gPSBbXVxuICAgIH1cblxuICAgIC8vIFB1c2ggdGhlIHZhbHVlIHRvIHRoZSBvYmplY3RcbiAgICBvYmpba2V5XS5wdXNoKGl0ZW0pXG5cbiAgICAvLyBSZXR1cm4gdGhlIG9iamVjdCB0byB0aGUgbmV4dCBpdGVtIGluIHRoZSBsb29wXG4gICAgcmV0dXJuIG9ialxuICB9LCB7fSlcbn1cblxuZnVuY3Rpb24gY2xhbXAgKG51bWJlcjogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obnVtYmVyLCBtYXgpKTtcbn1cblxuZnVuY3Rpb24gc3RyaXBDb250ZXh0RnJvbU5hbWUgKG5hbWU6IHN0cmluZykge1xuICAvLyBTdHJpcCB0aGUgY29udGV4dCBmcm9tIHRoZSBnaXZlbiBzdHJpbmcsIHJldHVybiB3aXRoIHRyYWlsaW5nIC8gaWYgdGhlcmUgd2FzIG9uZS5cbiAgLy8gYW5kIGRvIG5vdCBzdHJpcCBhbnl0aGluZyBpZiB0aGUgLyBpcyBsZWFkaW5nXG4gIGNvbnN0IGhhc2hJbmRleCA9IG5hbWUuaW5kZXhPZihTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeS5DT05URVhUX01BUktFUilcbiAgLy8gRG8gbm90IHN0cmlwIGlmIHRoZSBuYW1lIHN0YXJ0cyB3aXRoIGEgL1xuICBpZiAoaGFzaEluZGV4ID4gMSkge1xuICAgIHJldHVybiBuYW1lLnN1YnN0cigwLCBoYXNoSW5kZXggKyAxKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuYW1lXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVGV4dFNlbGVjdGlvbiA9IHtcbiAgc3RhcnRJbmRleDogbnVtYmVyLFxuICBlbmRJbmRleDogbnVtYmVyLFxuICBpbnRlcnZpZXdJZDogc3RyaW5nLFxuICB0ZXh0Pzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5hbWVkQWN0aW9uID0gW1xuICBuYW1lOiBzdHJpbmcsXG4gIGFjdGlvbjogKGVsZW1lbnQ6IGFueSkgPT4gYW55LFxuICB0b29sdGlwPzogc3RyaW5nXG5dXG5cbmV4cG9ydCB7XG4gIEFOTk9UQVRJT05fQ09MT1JTLFxuICBncm91cEJ5LFxuICBjbGFtcCxcbiAgc3RyaXBDb250ZXh0RnJvbU5hbWVcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInRyYW5zY3JpcHRcIlxuICAgICAgIHJlZj1cInRyYW5zY3JpcHRcIlxuICAgICAgIEBtb3VzZXVwPVwiZW1pdFNlbGVjdGlvblwiPlxuICAgIDxzcGFuXG4gICAgICB2LWZvcj1cInNwYW4gaW4gc3BhbnNcIlxuICAgICAgOmtleT1cInNwYW4uaWRcIlxuICAgICAgOmRhdGEtc3Bhbi1pZD1cInNwYW4uaWRcIlxuICAgICAgOmRhdGEtYW5ub3RhdGlvbi1pZHM9XCJzcGFuLmFubm90YXRpb25JZHNcIlxuICAgICAgOmRhdGEtdGV4dC1vZmZzZXQ9XCJzcGFuLnN0YXJ0XCJcbiAgICAgIDpjbGFzcz1cInNwYW5DbGFzc2VzW3NwYW4uaWRdXCJcbiAgICAgIDpzdHlsZT1cImdldFNwYW5TdHlsZShzcGFuKVwiXG4gICAgICB2LWJpbmQ9XCJzcGFuQXR0cmlidXRlc1wiXG4gICAgICB2LW9uPVwicHJlcHBlZFNwYW5FdmVudHNcIlxuICAgICAgPnt7IHNwYW4udGV4dCB9fTwvc3Bhbj5cbiAgICA8c2xvdD5cbiAgICA8L3Nsb3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgLy8gQHRzLW5vY2hlY2tcbiAgY29uc3QgT1ZFUkxBUFBJTkdfQ09MT1IgPSBcIiNkZWFkYmFiZVwiXG5cbiAgLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXJodWVyc3QvZmxhdHRlbi1vdmVybGFwcGluZy1yYW5nZXMvXG4gIC8vIElTQyBMaWNlbnNlXG4gIC8vIENvcHlyaWdodCAoYykgMjAxOCwgSmFubmlzIFJcbiAgLy8gUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZVxuICAvLyBmb3IgYW55IHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWRcbiAgLy8gdGhhdCB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBhcHBlYXJcbiAgLy8gaW4gYWxsIGNvcGllcy5cbiAgLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMXG4gIC8vIFdBUlJBTlRJRVMgV0lUSCBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRURcbiAgLy8gV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICAvLyBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1JcbiAgLy8gQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbiAgLy8gTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsXG4gIC8vIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTlxuICAvLyBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuXG4gIGNvbnN0IHNvcnRlZEluc2VydCA9IChhcnIsIHZhbCkgPT4ge1xuICAgICAgY29uc3QgbCA9IGFyci5sZW5ndGhcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHZhbCA8PSBhcnJbaV0pIHtcbiAgICAgICAgICAgICAgYXJyLnNwbGljZShpLCAwLCB2YWwpXG4gICAgICAgICAgICAgIHJldHVybiBpXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXJyLnB1c2godmFsKVxuICAgICAgcmV0dXJuIGxcbiAgfVxuXG4gIGNvbnN0IGZsYXR0ZW4gPSAocmFuZ2VzKSA9PiB7XG4gICAgICBjb25zdCBTVEFSVCA9IDFcbiAgICAgIGNvbnN0IFNUT1AgPSAwXG5cbiAgICAgIGxldCBsLCBpXG5cbiAgICAgIGNvbnN0IGluZGV4ZXMgPSBbXVxuICAgICAgY29uc3QgaWRzID0gW11cbiAgICAgIGNvbnN0IHR5cGVzID0gW11cblxuICAgICAgbCA9IHJhbmdlcy5sZW5ndGhcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBjb25zdCByYW5nZSA9IHJhbmdlc1tpXVxuXG4gICAgICAgICAgY29uc3Qgc3RhcnRJID0gc29ydGVkSW5zZXJ0KGluZGV4ZXMsIHJhbmdlWzFdKVxuICAgICAgICAgIGlkcy5zcGxpY2Uoc3RhcnRJLCAwLCByYW5nZVswXSlcbiAgICAgICAgICB0eXBlcy5zcGxpY2Uoc3RhcnRJLCAwLCBTVEFSVClcblxuICAgICAgICAgIGNvbnN0IGVuZEkgPSBzb3J0ZWRJbnNlcnQoaW5kZXhlcywgcmFuZ2VbMV0gKyByYW5nZVsyXSlcbiAgICAgICAgICBpZHMuc3BsaWNlKGVuZEksIDAsIHJhbmdlWzBdKVxuICAgICAgICAgIHR5cGVzLnNwbGljZShlbmRJLCAwLCBTVE9QKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGF0ZSA9IG5ldyBNYXAoKVxuICAgICAgc3RhdGUuc2V0KGlkc1swXSwgdHJ1ZSkgLy8gaW5pdGlhbCBzdGF0ZVxuXG4gICAgICBsID0gaWRzLmxlbmd0aFxuICAgICAgZnVuY3Rpb24qIGl0ZXJhdG9yICgpIHtcbiAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhlc1tpXVxuICAgICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBpbmRleGVzW2kgLSAxXVxuXG4gICAgICAgICAgICAgIGlmIChpbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgeWllbGQgW1xuICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC0gbGFzdEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oc3RhdGUua2V5cygpKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0eXBlc1tpXSA9PT0gU1RBUlQpIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRlLnNldChpZHNbaV0sIHRydWUpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzdGF0ZS5kZWxldGUoaWRzW2ldKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBbU3ltYm9sLml0ZXJhdG9yXTogaXRlcmF0b3IgfVxuICB9XG5cbiAgLy8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vY3ljbGVjeWNsZS92dWUtYW5ub3RhdGVkLXRleHQvXG4gIC8vIE1JVCBMaWNlbnNlXG4gIC8vIENvcHlyaWdodCAoYykgMjAxOSBOaWNrIE1vcmxleVxuXG4gIC8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gIC8vIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gIC8vIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuICAvLyByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAgLy8gY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gIC8vIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXG4gIC8vIGNvbmRpdGlvbnM6XG4gIC8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIC8vIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICAvLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gIC8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICAvLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAgLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICAvLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICAvLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICAvLyBTT0ZUV0FSRS5cbiAgY29uc3QgYnVpbGRTcGFuTGlzdCA9ICh0ZXh0LCBhbm5vdGF0aW9ucykgPT4ge1xuICAgICAgLy8gUHJlcGFyZSByYW5nZSBsaXN0IHRvIHNlbmQgdG8gZmxhdHRlbi1vdmVybGFwcGluZy1zcGFucy5mbGF0dGVuKClcbiAgICAgIGxldCByYW5nZXMgPSBbXVxuICAgICAgY29uc3QgZnVsbFJhbmdlID0gW1wiYmFzZVRleHRcIiwgMCwgdGV4dC5sZW5ndGhdXG4gICAgICByYW5nZXMucHVzaChmdWxsUmFuZ2UpXG4gICAgICBjb25zdCBhbm5vdGF0aW9uUmFuZ2VzID0gYW5ub3RhdGlvbnMubWFwKGFubm90YXRpb24gPT4ge1xuICAgICAgICAgIHJldHVybiBbYW5ub3RhdGlvbi5pZCwgYW5ub3RhdGlvbi5zdGFydCwgYW5ub3RhdGlvbi5sZW5ndGhdXG4gICAgICB9KVxuICAgICAgcmFuZ2VzID0gcmFuZ2VzLmNvbmNhdChhbm5vdGF0aW9uUmFuZ2VzKVxuICAgICAgLy8gRmxhdHRlblxuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBBcnJheS5mcm9tKGZsYXR0ZW4ocmFuZ2VzKSlcbiAgICAgIC8vIEVhY2ggc2VjdGlvbiBiZWNvbWVzIGEgc3BhblxuICAgICAgbGV0IHNlY3Rpb25UZXh0U3RhcnQgPSAwXG4gICAgICBsZXQgc3BhbklkID0gMFxuICAgICAgY29uc3Qgc3BhbnMgPSBzZWN0aW9ucy5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgICAgY29uc3QgbGVuZ3RoID0gTnVtYmVyKHNlY3Rpb25bMF0pXG4gICAgICAgICAgbGV0IGFubm90YXRpb25JZHMgPSBzZWN0aW9uWzFdXG4gICAgICAgICAgYW5ub3RhdGlvbklkcyA9IGFubm90YXRpb25JZHMuZmlsdGVyKGFubm90YXRpb25JZCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBhbm5vdGF0aW9uSWQgIT09ICdiYXNlVGV4dCdcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gc2VjdGlvblRleHRTdGFydFxuICAgICAgICAgIGNvbnN0IGVuZCA9IHNlY3Rpb25UZXh0U3RhcnQgKyBsZW5ndGhcbiAgICAgICAgICBjb25zdCBzZWN0aW9uVGV4dCA9IHRleHQuc2xpY2Uoc3RhcnQsIGVuZClcbiAgICAgICAgICBjb25zdCBzcGFuID0ge1xuICAgICAgICAgICAgICBpZDogc3BhbklkLFxuICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgICB0ZXh0OiBzZWN0aW9uVGV4dCxcbiAgICAgICAgICAgICAgYW5ub3RhdGlvbklkcyxcbiAgICAgICAgICAgICAgZ2V0IGFubm90YXRpb25zICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhbm5vdGF0aW9ucy5maWx0ZXIoYW5ub3RhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFubm90YXRpb25JZHMuaW5jbHVkZXMoYW5ub3RhdGlvbi5pZClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbklkID0gc3BhbklkICsgMVxuICAgICAgICAgIHNlY3Rpb25UZXh0U3RhcnQgPSBlbmRcbiAgICAgICAgICByZXR1cm4gc3BhblxuICAgICAgfSlcbiAgICAgIHJldHVybiBzcGFuc1xuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgbmFtZTogXCJBbm5vdGF0ZWRUZXh0XCIsXG4gICAgICBlbWl0czogWyBcInNlbGVjdGlvblwiIF0sXG4gICAgICBwcm9wczoge1xuICAgICAgICAgIHRleHQ6IFN0cmluZyxcbiAgICAgICAgICBhbm5vdGF0aW9uczoge1xuICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsZWFyU2VsZWN0aW9uOiB7XG4gICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgIGRlZWZhdWx0OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0QW5ub3RhdGlvbkNvbG9yOiB7XG4gICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbiAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKGFubm90YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCByZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNvbG9yXG4gICAgICAgICAgICAgICAgICAvLyBJZiBudWxsLCBubyBzdHlsZSBhdHRyaWJ1dGUgd2lsbCBiZSBnZW5lcmF0ZWRcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldEFubm90YXRpb25JbmZvOiBGdW5jdGlvbixcbiAgICAgICAgICBzcGFuRXZlbnRzOiB7XG4gICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFNwYW5DbGFzc2VzOiB7XG4gICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoc3Bhbikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHt9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNwYW5BdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICBzcGFuQ2xhc3Nlczoge1xuICAgICAgICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgc3BhbiBjbGFzc2VzIGZvciBlYWNoIHNwYW4gaWQgdXNpbmcgZ2V0U3BhbkNsYXNzZXNcbiAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXModGhpcy5zcGFucy5tYXAoc3BhbiA9PiBbIHNwYW4uaWQsIHRoaXMuZ2V0U3BhbkNsYXNzZXMoc3BhbikgXSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNwYW5zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNwYW5zID0gYnVpbGRTcGFuTGlzdCh0aGlzLnRleHQsIHRoaXMuYW5ub3RhdGlvbnMpXG4gICAgICAgICAgICAgIHJldHVybiBzcGFuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJlcHBlZFNwYW5FdmVudHMgKCkge1xuICAgICAgICAgICAgICAvLyBHZXQgYW5ub3RhdGlvbnMgYW5kIHBhc3MgdG8gdGhlIGV2ZW50IGNhbGxiYWNrXG4gICAgICAgICAgICAgIGNvbnN0IHNwYW5FdmVudHMgPSB0aGlzLnNwYW5FdmVudHNcbiAgICAgICAgICAgICAgY29uc3QgcHJlcHBlZFNwYW5FdmVudHMgPSB7fVxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzcGFuRXZlbnRzKS5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gc3BhbkV2ZW50c1tldmVudFR5cGVdXG4gICAgICAgICAgICAgICAgICBjb25zdCBuZXdDYWxsYmFjayA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbklkID0gdGhpcy5lbGVtZW50U3BhbklkKGUudGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLnNwYW5CeUlkKHNwYW5JZClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uSWRzID0gc3Bhbi5hbm5vdGF0aW9uSWRzXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbnMgPSB0aGlzLmdldEFubm90YXRpb25zKGFubm90YXRpb25JZHMpXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZSwgYW5ub3RhdGlvbnMpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBwcmVwcGVkU3BhbkV2ZW50c1tldmVudFR5cGVdID0gbmV3Q2FsbGJhY2tcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuIHByZXBwZWRTcGFuRXZlbnRzXG4gICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICBlbGVtZW50U3BhbklkIChlbCkge1xuICAgICAgICAgICAgICBsZXQgc3BhbklkID0gZWwuYXR0cmlidXRlc1tcImRhdGEtc3Bhbi1pZFwiXS52YWx1ZVxuICAgICAgICAgICAgICBzcGFuSWQgPSBOdW1iZXIoc3BhbklkKVxuICAgICAgICAgICAgICByZXR1cm4gc3BhbklkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzcGFuQnlJZCAoc3BhbklkKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNwYW5zID0gdGhpcy5zcGFucy5maWx0ZXIoKHNwYW4pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBzcGFuLmlkID09PSBzcGFuSWRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IHNwYW5zWzBdXG4gICAgICAgICAgICAgIHJldHVybiBzcGFuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRBbm5vdGF0aW9ucyAoYW5ub3RhdGlvbklkcykge1xuICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IHRoaXMuYW5ub3RhdGlvbnMuZmlsdGVyKChhbm5vdGF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYW5ub3RhdGlvbklkcy5pbmNsdWRlcyhhbm5vdGF0aW9uLmlkKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm4gYW5ub3RhdGlvbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFNwYW5TdHlsZTogZnVuY3Rpb24gKHNwYW4pIHtcbiAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmdldFNwYW5Db2xvcihzcGFuKVxuICAgICAgICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0U3BhbkNvbG9yOiBmdW5jdGlvbiAoc3Bhbikge1xuICAgICAgICAgICAgICBsZXQgY29sb3IgPSBudWxsXG4gICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25JZHMgPSBzcGFuLmFubm90YXRpb25JZHNcbiAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbnMgPSB0aGlzLmdldEFubm90YXRpb25zKGFubm90YXRpb25JZHMpXG4gICAgICAgICAgICAgIGxldCBjb2xvcnMgPSBhbm5vdGF0aW9ucy5tYXAoKGFubm90YXRpb24pID0+XG4gICAgICAgICAgICAgICAgICB0aGlzLmdldEFubm90YXRpb25Db2xvcihhbm5vdGF0aW9uKVxuICAgICAgICAgICAgICApLmZpbHRlcihjb2xvciA9PiBjb2xvcilcblxuICAgICAgICAgICAgICBjb2xvcnMgPSBbLi4ubmV3IFNldChjb2xvcnMpXVxuICAgICAgICAgICAgICBpZiAoY29sb3JzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgIC8vIE92ZXJsYXBwaW5nIHNwYW5zIC0gdXNlIHRoZSBvdmVybGFwIGNvbG9yXG4gICAgICAgICAgICAgICAgICBjb2xvciA9IE9WRVJMQVBQSU5HX0NPTE9SXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29sb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgY29sb3IgPSBjb2xvcnNbMF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBudWxsIGlmIG5vbmUgc3BlY2lmaWVkXG4gICAgICAgICAgICAgIHJldHVybiBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0U2VsZWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXG4gICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lciA9PT0gdGhpcy4kcmVmcy50cmFuc2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gV2UgYXJlIGluIHRoZSB0cmFuc2NyaXB0IGNvbnRhaW5lci5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBzdGFydENvbnRhaW5lci9lbmRDb250YWluZXIgc2hvdWxkIGJlIHRleHQgZWxlbWVudCB3aG9zZSBwYXJlbnQgaXMgYSBzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmVnaW4gPSBOdW1iZXIocmFuZ2Uuc3RhcnRDb250YWluZXIucGFyZW50RWxlbWVudC5kYXRhc2V0LnRleHRPZmZzZXQpICsgcmFuZ2Uuc3RhcnRPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBOdW1iZXIocmFuZ2UuZW5kQ29udGFpbmVyLnBhcmVudEVsZW1lbnQuZGF0YXNldC50ZXh0T2Zmc2V0KSArIHJhbmdlLmVuZE9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQuc2xpY2UoYmVnaW4sIGVuZClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVtaXRTZWxlY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGV4dFNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKClcbiAgICAgICAgICAgICAgaWYgKHRleHRTZWxlY3Rpb24gJiYgdGV4dFNlbGVjdGlvbi5iZWdpbiAhPT0gdGV4dFNlbGVjdGlvbi5lbmQpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJzZWxlY3Rpb25cIiwgdGV4dFNlbGVjdGlvbilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuICAudHJhbnNjcmlwdCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB9XG4gIC5jYXRlZ29yeTEge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTc5NztcbiAgfVxuICAuY2F0ZWdvcnkyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDg0YjA7XG4gIH1cbiAgLmNhdGVnb3J5MyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkYzk3O1xuICB9XG4gIC5jYXRlZ29yeTQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdiY2Y3YjtcbiAgfVxuICAuY2F0ZWdvcnkxLmNhdGVnb3J5MiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIH1cbiAgLmNhdGVnb3J5MS5jYXRlZ29yeTMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICB9XG4gIC5jYXRlZ29yeTEuY2F0ZWdvcnk0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuICAuY2F0ZWdvcnkyLmNhdGVnb3J5MyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIH1cbiAgLmNhdGVnb3J5Mi5jYXRlZ29yeTQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICB9XG4gIC5jYXRlZ29yeTMuY2F0ZWdvcnk0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuICAvKiBGb3IgdW5kZWZpbmVkIGNhdGVnb3JpZXMgKi9cbiAgLmNhdGVnb3J5OSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIH1cbiAgLmRlc2NyaXB0ZW0ge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgLmRlc2NyaXB0ZW0uZGVzY3JpcHRlbXMge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBkb3VibGU7XG4gIH1cbiAgLmV4dHJhY3RIaWdobGlnaHQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmV4dHJhY3RPcmlnaW5hbCB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAuaGlnaGxpZ2h0ZWQsXG4gIC5kZXNjcmlwdGVtLmhpZ2hsaWdodGVkLFxuICAuY2F0ZWdvcnkxLmhpZ2hsaWdodGVkLFxuICAuY2F0ZWdvcnkyLmhpZ2hsaWdodGVkLFxuICAuY2F0ZWdvcnkzLmhpZ2hsaWdodGVkLFxuICAuY2F0ZWdvcnk0LmhpZ2hsaWdodGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRlbS1tb2RpZmljYXRpb25cIlxuICAgICAgIHYtaWY9XCJtb2RlbFwiPlxuICAgIDxwIGNsYXNzPVwibm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5UbyBtb2RpZnkgdGhlIGRlc2NyaXB0ZW0sIHNlbGVjdCB0aGUgbmV3IHRleHQgYW5kIHZhbGlkYXRlLjwvcD5cbiAgICA8cCBjbGFzcz1cInRleHQtaXRhbGljIG5vLW1hcmdpbiBuby1wYWRkaW5nXCI+VGhlIDx1Pm9yaWdpbmFsIGRlc2NyaXB0ZW08L3U+IGlzIHVuZGVybGluZWQsIHRoZSA8Yj5uZXcgc2VsZWN0aW9uPC9iPiBpcyBib2xkLjwvcD5cbiAgICA8QW5ub3RhdGVkVGV4dFxuICAgICAgY2xhc3M9XCJ0ZXh0QW5ub3RhdGlvbkNvbXBvbmVudFwiXG4gICAgICA6dGV4dD1cImNvbnRleHRUZXh0XCJcbiAgICAgIDphbm5vdGF0aW9ucz1cImFubm90YXRpb25zXCJcbiAgICAgIDpnZXRTcGFuQ2xhc3Nlcz1cImdldFNwYW5DbGFzc2VzXCJcbiAgICAgIGNsZWFyU2VsZWN0aW9uXG4gICAgICBAc2VsZWN0aW9uPVwidGV4dFNlbGVjdGlvblwiXG4gICAgICAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCBBbm5vdGF0ZWRUZXh0IGZyb20gJy4vQW5ub3RhdGVkVGV4dC52dWUnXG4gIGltcG9ydCB0eXBlIHsgVGV4dFNlbGVjdGlvbiB9IGZyb20gJy4vdXRpbCdcbiAgaW1wb3J0IHsgY2xhbXAgfSBmcm9tICcuL3V0aWwnXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IG1vZGVsID0gZGVmaW5lTW9kZWw8VGV4dFNlbGVjdGlvbj4oKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgaW5pdGlhbDogeyB0eXBlOiBPYmplY3QgfVxuICB9KVxuXG4gIGNvbnN0IGludGVydmlldyA9IGNvbXB1dGVkKCgpID0+IG1vZGVsLnZhbHVlID8gc3RvcmUuZ2V0SW50ZXJ2aWV3KG1vZGVsLnZhbHVlLmludGVydmlld0lkKSA6IG51bGwpXG5cbiAgY29uc3QgY29udGV4dFRleHQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAoaW50ZXJ2aWV3LnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGludGVydmlldy52YWx1ZS50ZXh0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gZ2V0U3BhbkNsYXNzZXMgKHNwYW46IGFueSkge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IHNwYW4uYW5ub3RhdGlvbnMubWFwKChhOiBhbnkpID0+IGEuY2xhc3MpXG4gICAgICByZXR1cm4gWyAuLi5uZXcgU2V0KGNsYXNzZXMpIF0uam9pbihcIiBcIilcbiAgfVxuXG4gIGNvbnN0IGluaXRpYWxMZW5ndGggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuaW5pdGlhbCkge1xuICAgICAgICAgIHJldHVybiBwcm9wcy5pbml0aWFsLmVuZEluZGV4IC0gcHJvcHMuaW5pdGlhbC5zdGFydEluZGV4XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgYW5ub3RhdGlvbnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAvLyBSZXR1cm4gMyBhbm5vdGF0aW9uczpcbiAgICAgIC8vIC0gaGlnaGxpZ2h0ZWQgb25lIChkZXNjcmlwdGVtKVxuICAgICAgLy8gLSBoaWRkZW4gc3RhcnRcbiAgICAgIC8vIC0gaGlkZGVuIGVuZFxuICAgICAgY29uc3Qgb3V0ID0gW11cbiAgICAgIGlmIChtb2RlbC52YWx1ZSAmJiBwcm9wcy5pbml0aWFsKSB7XG4gICAgICAgICAgY29uc3QgaW50ZXJ2aWV3SWQgPSBtb2RlbC52YWx1ZS5pbnRlcnZpZXdJZFxuICAgICAgICAgIGNvbnN0IG1heEluZGV4ID0gaW50ZXJ2aWV3LnZhbHVlPy50ZXh0Lmxlbmd0aCA/PyAwXG4gICAgICAgICAgY29uc3QgbGVuZ3RoID0gbW9kZWwudmFsdWUuZW5kSW5kZXggLSBtb2RlbC52YWx1ZS5zdGFydEluZGV4XG4gICAgICAgICAgY29uc3QgZXh0cmFjdFN0YXJ0ID0gY2xhbXAocHJvcHMuaW5pdGlhbC5zdGFydEluZGV4IC0gaW5pdGlhbExlbmd0aC52YWx1ZSAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgbWF4SW5kZXgpXG4gICAgICAgICAgY29uc3QgZXh0cmFjdEVuZCA9IGNsYW1wKHByb3BzLmluaXRpYWwuZW5kSW5kZXggKyBpbml0aWFsTGVuZ3RoLnZhbHVlICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgbWF4SW5kZXgpXG4gICAgICAgICAgaWYgKGV4dHJhY3RTdGFydCkge1xuICAgICAgICAgICAgICBvdXQucHVzaCh7XG4gICAgICAgICAgICAgICAgICBpbnRlcnZpZXdJZCxcbiAgICAgICAgICAgICAgICAgIGlkOiAnaGlkZGVuX3N0YXJ0JyxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBleHRyYWN0U3RhcnQsXG4gICAgICAgICAgICAgICAgICBjbGFzczogJ2hpZGRlbiBleHRyYWN0U3RhcnQnXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIG91dC5wdXNoKHtcbiAgICAgICAgICAgICAgaW50ZXJ2aWV3SWQsXG4gICAgICAgICAgICAgIGlkOiAnY3VycmVudF9leHRyYWN0JyxcbiAgICAgICAgICAgICAgc3RhcnQ6IHByb3BzLmluaXRpYWwuc3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgbGVuZ3RoOiBwcm9wcy5pbml0aWFsLmVuZEluZGV4IC0gcHJvcHMuaW5pdGlhbC5zdGFydEluZGV4LFxuICAgICAgICAgICAgICBjbGFzczogJ2V4dHJhY3RPcmlnaW5hbCdcbiAgICAgICAgICB9KVxuICAgICAgICAgIG91dC5wdXNoKHtcbiAgICAgICAgICAgICAgaW50ZXJ2aWV3SWQsXG4gICAgICAgICAgICAgIGlkOiAnbmV3X3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgIHN0YXJ0OiBtb2RlbC52YWx1ZS5zdGFydEluZGV4LFxuICAgICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICAgIGNsYXNzOiAnZXh0cmFjdEhpZ2hsaWdodCdcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmIChleHRyYWN0RW5kIDwgbWF4SW5kZXgpIHtcbiAgICAgICAgICAgICAgb3V0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgaW50ZXJ2aWV3SWQsXG4gICAgICAgICAgICAgICAgICBpZDogJ2hpZGRlbl9lbmQnLFxuICAgICAgICAgICAgICAgICAgc3RhcnQ6IGV4dHJhY3RFbmQsXG4gICAgICAgICAgICAgICAgICBsZW5ndGg6IG1heEluZGV4IC0gZXh0cmFjdEVuZCxcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaGlkZGVuIGV4dHJhY3RFbmQnXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG91dFxuICB9KVxuXG4gIGZ1bmN0aW9uIHRleHRTZWxlY3Rpb24gKGRhdGE6IGFueSkge1xuICAgICAgaWYgKG1vZGVsLnZhbHVlKSB7XG4gICAgICAgICAgbW9kZWwudmFsdWUuc3RhcnRJbmRleCA9IGRhdGEuYmVnaW5cbiAgICAgICAgICBtb2RlbC52YWx1ZS5lbmRJbmRleCA9IGRhdGEuZW5kXG4gICAgICB9XG4gIH1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC50ZXh0QW5ub3RhdGlvbkNvbXBvbmVudCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGVtXCJcbiAgICAgICB2LWlmPVwiZGVzY3JpcHRlbVwiXG4gICAgICAgOmRhdGEtZGVzY3JpcHRlbT1cImRlc2NyaXB0ZW0uaWRcIlxuICAgICAgIDp0aXRsZT1cImRlc2NyaXB0ZW0udGV4dFwiPlxuICAgIDxEcmFnRWxlbWVudFxuICAgICAgdHlwZT1cImRlc2NyaXB0ZW1cIlxuICAgICAgY2xhc3M9XCJkZXNjcmlwdGVtLWhlYWRlclwiXG4gICAgICA6ZGF0YT1cImRlc2NyaXB0ZW1JZFwiPlxuICAgICAgPHEtaWNvblxuICAgICAgICByZWY9XCJoYW5kbGVcIlxuICAgICAgICBjbGFzcz1cImRlc2NyaXB0ZW0taGFuZGxlXCJcbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgQGNsaWNrLm1ldGE9XCJkZWJ1Z1wiXG4gICAgICAgIEBjbGljaz1cInNldEhpZ2hsaWdodGVkXCJcbiAgICAgICAgbmFtZT1cIm1kaS1mb3JtYXQtcXVvdGUtY2xvc2Utb3V0bGluZVwiPjwvcS1pY29uPlxuICAgICAgPHNwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRlbS1sYWJlbFwiPnt7IGRlc2NyaXB0ZW0udGV4dCB9fTwvc3Bhbj5cbiAgICAgICAgPHEtcG9wdXAtZWRpdCB0aXRsZT1cIlNlbGVjdCB0aGUgYXBwcm9wcmlhdGUgdGV4dCBmcmFnbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiFpc1JlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICBidXR0b25zXG4gICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImRlc2NyaXB0ZW1Kc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICB2LXNsb3Q9XCJzY29wZVwiPlxuICAgICAgICAgIDxEZXNjcmlwdGVtTW9kaWZpY2F0aW9uRGlhbG9nXG4gICAgICAgICAgICB2LW1vZGVsPVwic2NvcGUudmFsdWVcIlxuICAgICAgICAgICAgOmluaXRpYWw9XCJzY29wZS5pbml0aWFsVmFsdWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgICA8L3NwYW4+XG4gICAgICA8cS1zcGFjZSAvPlxuICAgICAgPGRpdiB2LWlmPVwid2l0aENvbnRleHRcIlxuICAgICAgICAgICBjbGFzcz1cImRlc2NyaXB0ZW0tY29udGV4dFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRleHQtaXRlbVwiXG4gICAgICAgICAgICAgIHYtaWY9XCJjb250ZXh0LnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5XCI+XG4gICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgIG5hbWU9XCJtZGktYWxwaGEtcy1ib3gtb3V0bGluZVwiPjwvcS1pY29uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eS1uYW1lXCI+e3sgY29udGV4dC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS5uYW1lIH19PC9kaXY+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzcz1cImNvbnRleHQtaXRlbVwiXG4gICAgICAgICAgQGNsaWNrLnN0b3A9XCJqdW1wVG9Nb21lbnQoY29udGV4dC5tb21lbnQuaWQpXCJcbiAgICAgICAgICB2LWlmPVwiY29udGV4dC5tb21lbnRcIj5cbiAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgbmFtZT1cIm1kaS1hbHBoYS1kLWJveC1vdXRsaW5lXCI+PC9xLWljb24+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb21lbnQtbmFtZVwiPnt7IGNvbnRleHQubW9tZW50Lm5hbWUgfX08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHYtaWY9XCJ3aXRoTWVudVwiXG4gICAgICAgICAgIGNsYXNzPVwiZGVzY3JpcHRlbS1tZW51XCI+XG4gICAgICAgIDxxLXNwYWNlIC8+XG4gICAgICAgIDxFbGVtZW50TWVudVxuICAgICAgICAgIDphY3Rpb25zPVwibWVudUFjdGlvbnNcIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L0RyYWdFbGVtZW50PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCB7IHVzZUludGVyZmFjZVN0b3JlIH0gZnJvbSAnc3RvcmVzL2ludGVyZmFjZSdcbiAgaW1wb3J0IERlc2NyaXB0ZW1Nb2RpZmljYXRpb25EaWFsb2cgZnJvbSAnLi9EZXNjcmlwdGVtTW9kaWZpY2F0aW9uRGlhbG9nLnZ1ZSdcbiAgaW1wb3J0IERyYWdFbGVtZW50IGZyb20gJy4vRHJhZ0VsZW1lbnQudnVlJ1xuICBpbXBvcnQgRWxlbWVudE1lbnUgZnJvbSAnLi9FbGVtZW50TWVudS52dWUnXG4gIGltcG9ydCBNb21lbnQgZnJvbSAnc3RvcmVzL21vZGVscy9tb21lbnQnXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSBmcm9tICdzdG9yZXMvbW9kZWxzL3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5J1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcbiAgY29uc3QgaXN0b3JlID0gdXNlSW50ZXJmYWNlU3RvcmUoKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgZGVzY3JpcHRlbUlkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxuICAgICAgd2l0aENvbnRleHQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcbiAgICAgIHdpdGhNZW51OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSxcbiAgICAgIGlzUmVhZG9ubHk6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfVxuICB9KVxuXG4gIGNvbnN0IGRlc2NyaXB0ZW0gPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5nZXREZXNjcmlwdGVtKHByb3BzLmRlc2NyaXB0ZW1JZCkpXG5cbiAgY29uc3Qge1xuICAgICAgaGlnaGxpZ2h0ZWREZXNjcmlwdGVtSWRcbiAgfSA9IHN0b3JlVG9SZWZzKGlzdG9yZSlcblxuICBmdW5jdGlvbiBkZWJ1ZyAoKSB7XG4gICAgICAod2luZG93IGFzIGFueSkuZGVzY3JpcHRlbSA9IGRlc2NyaXB0ZW0udmFsdWVcbiAgICAgIGNvbnNvbGUubG9nKFwiRGVzY3JpcHRlbVwiLCBkZXNjcmlwdGVtLnZhbHVlPy50b0pTT04oKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEhpZ2hsaWdodGVkICgpIHtcbiAgICAgIGlmIChoaWdobGlnaHRlZERlc2NyaXB0ZW1JZC52YWx1ZSA9PT0gcHJvcHMuZGVzY3JpcHRlbUlkKSB7XG4gICAgICAgICAgaGlnaGxpZ2h0ZWREZXNjcmlwdGVtSWQudmFsdWUgPSBcIlwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhpZ2hsaWdodGVkRGVzY3JpcHRlbUlkLnZhbHVlID0gcHJvcHMuZGVzY3JpcHRlbUlkXG4gICAgICB9XG4gIH1cblxuICB0eXBlIENvbnRleHQgPSB7XG4gICAgICBtb21lbnQ/OiBNb21lbnQsXG4gICAgICBzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeT86IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5LFxuXG4gIH1cblxuICAvLyBjb250ZXh0IGlzIGFuIG9iamVjdCB3aXRoIG9wdGlvbmFsIG1vbWVudCAvIHNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5IHZhbHVlc1xuICBjb25zdCBjb250ZXh0ID0gY29tcHV0ZWQoKCk6IENvbnRleHQgPT4ge1xuICAgICAgaWYgKGRlc2NyaXB0ZW0udmFsdWUgJiYgZGVzY3JpcHRlbS52YWx1ZS5qdXN0aWZpY2F0aW9uKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gc3RvcmUuZ2V0SnVzdGlmaWNhdGlvblBhcmVudChkZXNjcmlwdGVtLnZhbHVlLmp1c3RpZmljYXRpb24ucGFyZW50SWQpXG4gICAgICAgICAgLy8gTW9tZW50OiAke21vbWVudC5uYW1lfVxuICAgICAgICAgIC8vIENhdGVnb3J5OiAke2NhdGVnb3J5Lm1vbWVudC5uYW1lfSB8ICR7Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAvLyBQcm9wZXJ0eTogJHtwcm9wZXJ0eS5jYXRlZ29yeWluc3RhbmNlLm1vbWVudC5uYW1lfSB8ICR7cHJvcGVydHkuY2F0ZWdvcnlpbnN0YW5jZS5uYW1lfSB8ICR7cHJvcGVydHkubmFtZX06ICR7cHJvcGVydHkudmFsdWV9XG4gICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LmFzQ29udGV4dFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB7IH1cbiAgICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7IH1cbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBkZXNjcmlwdGVtSnNvbiA9IGNvbXB1dGVkKHtcbiAgICAgIGdldDogKCkgPT4gZGVzY3JpcHRlbS52YWx1ZT8udG9KU09OKCkgPz8ge30sXG4gICAgICBzZXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZURlc2NyaXB0ZW0ocHJvcHMuZGVzY3JpcHRlbUlkLCB7XG4gICAgICAgICAgICAgIHN0YXJ0SW5kZXg6IHZhbHVlLnN0YXJ0SW5kZXgsXG4gICAgICAgICAgICAgIGVuZEluZGV4OiB2YWx1ZS5lbmRJbmRleFxuICAgICAgICAgIH0pXG4gICAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24ganVtcFRvTW9tZW50IChpZGVudGlmaWVyOiBzdHJpbmcpIHtcbiAgICAgIGlzdG9yZS5zZXRIaWdobGlnaHRlZE1vbWVudElkKGlkZW50aWZpZXIpXG4gIH1cblxuICBpbXBvcnQgdHlwZSB7IE5hbWVkQWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy91dGlsLnRzJ1xuXG4gIGNvbnN0IG1lbnVBY3Rpb25zOiBOYW1lZEFjdGlvbltdID0gW1xuICAgICAgWyBcIkR1cGxpY2F0ZVwiLCAoKSA9PiBzdG9yZS5kdXBsaWNhdGVEZXNjcmlwdGVtKHByb3BzLmRlc2NyaXB0ZW1JZCkgXSxcbiAgICAgIFsgXCJEZWxldGVcIiwgKCkgPT4gc3RvcmUuZGVsZXRlRGVzY3JpcHRlbShwcm9wcy5kZXNjcmlwdGVtSWQpIF1cbiAgXVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5kZXNjcmlwdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgaGVpZ2h0OiAxLjJlbTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmRlc2NyaXB0ZW0taGVhZGVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmRlc2NyaXB0ZW0tbGFiZWwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LWRlc2NyaXB0ZW0td2lkdGgpO1xuICAgICAgaGVpZ2h0OiAxLjJlbTtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuICAuZGVzY3JpcHRlbS1oYW5kbGUge1xuICAgICAgb3BhY2l0eTogLjU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmRlc2NyaXB0ZW0taGFuZGxlOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IC43O1xuICB9XG4gIC5kZXNjcmlwdGVtLWNvbnRleHQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLmNvbnRleHQtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgfVxuICAuY29udGV4dC1pdGVtICsgLmNvbnRleHQtaXRlbSB7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgcGFkZGluZzogMCA0cHg7XG4gIH1cbiAgLmRlc2NyaXB0ZW0tbWVudSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5kZXNjcmlwdGVtLWhlYWRlcjpob3ZlciAuZGVzY3JpcHRlbS1tZW51IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJqdXN0aWZpY2F0aW9uXCJcbiAgICAgICB2LWlmPVwianVzdGlmaWNhdGlvbklkXCJcbiAgICAgICA6ZGF0YS1qdXN0aWZpY2F0aW9uPVwianVzdGlmaWNhdGlvbklkXCI+XG4gICAgPGRpdiBjbGFzcz1cImp1c3RpZmljYXRpb24tbWV0YWRhdGFcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwianVzdGlmaWNhdGlvbi1uYW1lXCI+e3sganVzdGlmaWNhdGlvbj8ubmFtZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8dWwgY2xhc3M9XCJqdXN0aWZpY2F0aW9uLWRlc2NyaXB0ZW1zXCI+XG4gICAgICA8bGkgdi1mb3I9XCJkZXNjcmlwdGVtIGluIGp1c3RpZmljYXRpb24/LmRlc2NyaXB0ZW1zXCIgOmtleT1cImRlc2NyaXB0ZW0uaWRcIj5cbiAgICAgICAgPERlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbiA6ZGVzY3JpcHRlbUlkPVwiZGVzY3JpcHRlbS5pZFwiPlxuICAgICAgICA8L0Rlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCBEZXNjcmlwdGVtUmVwcmVzZW50YXRpb24gZnJvbSAnLi9EZXNjcmlwdGVtUmVwcmVzZW50YXRpb24udnVlJ1xuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBqdXN0aWZpY2F0aW9uSWQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH1cbiAgfSlcbiAgY29uc3QganVzdGlmaWNhdGlvbiA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldEp1c3RpZmljYXRpb24ocHJvcHMuanVzdGlmaWNhdGlvbklkKSlcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuanVzdGlmaWNhdGlvbi1kZXNjcmlwdGVtcyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHdpZHRoOiBjYWxjKHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktZGVzY3JpcHRlbS13aWR0aCkgKyA1MHB4KTtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRleHRcIlxuICAgICAgIHYtaWY9XCJjb250ZXh0Lm9yaWdpbmFsXCI+XG4gICAgPGVtPk5vbSBvcmlnaW5hbDwvZW0+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29udGV4dFwiXG4gICAgICAgdi1lbHNlPlxuICAgIDxkaXYgY2xhc3M9XCJjaGlsZHJlblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCJcbiAgICAgICAgICAgOnRpdGxlPVwiYy5uYW1lXCJcbiAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLWNoaWxkJzogaXNDdXJyZW50Q2hpbGQoYy5uYW1lKSB9XCJcbiAgICAgICAgICAgdi1mb3I9XCJjIGluIGNvbnRleHQuY2hpbGRyZW5cIlxuICAgICAgICAgICA6a2V5PVwiYy5pZFwiPlxuICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgIHNpemU9XCIxMHB0XCJcbiAgICAgICAgICB2LWlmPVwiISBpc0N1cnJlbnRDaGlsZChjLm5hbWUpXCJcbiAgICAgICAgICB2LW1vZGVsPVwibmV3Q2hpbGRyZW5cIlxuICAgICAgICAgIDp2YWw9XCJjLm5hbWVcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNoaWxkLWNhdGVnb3J5LW5hbWVcIj57e2MubmFtZX19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aW9uXCI+XG4gICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvblxuICAgICAgICB2LWlmPVwiY29udGV4dC5yZWZlcmVuY2VcIlxuICAgICAgICA6dHlwZT1cImNvbnRleHQucmVmZXJlbmNlLmFic3RyYWN0aW9uVHlwZVwiXG4gICAgICAgIDpjaGlsZHJlbkNvdW50PVwiY29udGV4dC5jaGlsZHJlbi5sZW5ndGhcIj5cbiAgICAgIDwvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnkgcmVmZXJlbmNlXCJcbiAgICAgICAgIHYtaWY9XCJjb250ZXh0LnJlZmVyZW5jZVwiXG4gICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1jdXJyZW50JzogaXNDdXJyZW50TmFtZShjb250ZXh0LnJlZmVyZW5jZS5uYW1lKSB9XCJcbiAgICAgICAgIDp0aXRsZT1cImNvbnRleHQucmVmZXJlbmNlLm5hbWVcIj5cbiAgICAgIHt7Y29udGV4dC5yZWZlcmVuY2UubmFtZX19XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBhcmVudHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeSBwYXJlbnRcIlxuICAgICAgICAgICA6dGl0bGU9XCJwYXJlbnQ/Lm5hbWUgPz8gJydcIlxuICAgICAgICAgICA6Y2xhc3M9XCJ7ICdoYXMtcGFyZW50JzogaXNDdXJyZW50UGFyZW50KHBhcmVudD8ubmFtZSkgfVwiXG4gICAgICAgICAgIHYtZm9yPVwicGFyZW50IGluIGNvbnRleHQucGFyZW50c1wiXG4gICAgICAgICAgIDprZXk9XCJwYXJlbnQ/LmlkID8/ICcnXCI+XG4gICAgICAgIHt7cGFyZW50Py5uYW1lID8/ICcnfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPHEtc2VsZWN0XG4gICAgZGVuc2VcbiAgICBAZm9jdXM9XCIoJGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5zZWxlY3QoKVwiXG4gICAgZmlsbGVkXG4gICAgOm1vZGVsLXZhbHVlPVwibmFtZVwiXG4gICAgdXNlLWlucHV0XG4gICAgaGlkZS1zZWxlY3RlZFxuICAgIGZpbGwtaW5wdXRcbiAgICBtZW51LWFuY2hvcj1cInRvcCByaWdodFwiXG4gICAgOmlucHV0LWRlYm91bmNlPVwiMFwiXG4gICAgOm9wdGlvbnM9XCJjb250ZXh0Py5jb21wbGV0aW9ucyA/PyBbXVwiXG4gICAgQGZpbHRlcj1cImZpbHRlck5hbWVzXCJcbiAgICBAaW5wdXQtdmFsdWU9XCJzZXROYW1lXCJcbiAgICBAa2V5dXAuZW50ZXI9XCJ2YWxpZGF0ZVwiXG4gICAgYXV0b2ZvY3VzXG4gICAgPlxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bm8tb3B0aW9uPlxuICAgICAgPHEtaXRlbT5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwidGV4dC1ncmV5XCI+XG4gICAgICAgICAgTm8gcmVzdWx0c1xuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9xLXNlbGVjdD5cbiAgPGRpdiBjbGFzcz1cInJvdyB3cmFwIGp1c3RpZnktYmV0d2VlblwiPlxuICAgIDxxLWJ0blxuICAgICAgZmxhdFxuICAgICAgc2l6ZT1cInNtXCJcbiAgICAgIEBjbGljaz1cImNhbmNlbFwiPkNhbmNlbDwvcS1idG4+XG4gICAgPHEtYnRuXG4gICAgICBmbGF0XG4gICAgICBzaXplPVwic21cIlxuICAgICAgQGNsaWNrPVwidmFsaWRhdGVcIj5PSzwvcS1idG4+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkgZnJvbSAnc3RvcmVzL21vZGVscy9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24gZnJvbSAnLi9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uLnZ1ZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzKFsgJ2NoYW5nZScgXSlcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGNhdGVnb3J5OiB7IHR5cGU6IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5LCBkZWZhdWx0OiBudWxsIH0sXG4gICAgICBnZW5lcmljR3JhcGhzOiB7IHR5cGU6IE9iamVjdCwgZGVmYXVsdDogbnVsbCB9XG4gIH0pXG5cbiAgY29uc3QgbmFtZSA9IHJlZihwcm9wcy5jYXRlZ29yeS5uYW1lKVxuXG4gIGNvbnN0IG5ld0NoaWxkcmVuID0gcmVmKFtdKVxuXG4gIGNvbnN0IGNvbXBsZXRpb25zID0gcmVmKFtdIGFzIHN0cmluZ1tdKVxuXG4gIGNvbnN0IGNoaWxkcmVuTmFtZXMgPSBjb21wdXRlZCgoKSA9PiBuZXcgU2V0KHByb3BzLmNhdGVnb3J5Py5jaGlsZHJlbi5tYXAoYyA9PiBjLm5hbWUpID8/IFtdKSlcblxuICBmdW5jdGlvbiB2YWxpZGF0ZSAoKSB7XG4gICAgICAvLyBJZiB0aGUgc2VsZWN0IGhhcyBmb2N1cywgdGhlbiB1c2UgdGhlIHNlbGVjdGVkIG5hbWUuIEVsc2UgdXNlIHRoZSBpbnB1dCBuYW1lIHZhbHVlLlxuXG4gICAgICBpZiAocHJvcHMuY2F0ZWdvcnkpIHtcbiAgICAgICAgICAvKiBJZiB0aGUgbmV3IG5hbWUgaXMgZnJvbSBhbiBleGlzdGluZyBjYXRlZ29yeSB0aGF0IGhhcyBhbiBhYnN0cmFjdGlvblR5cGUsIHRoZW4gYWxzbyB1cGRhdGUgaXRzIGFic3RyYWN0aW9uVHlwZSAqL1xuICAgICAgICAgIGNvbnN0IGdlbmVyaWNTb3VyY2UgPSBwcm9wcy5nZW5lcmljR3JhcGhzID8gcHJvcHMuZ2VuZXJpY0dyYXBocy5ieU5hbWVbcHJvcHMuY2F0ZWdvcnkucXVhbGlmaWVkTmFtZShuYW1lLnZhbHVlKV0gOiB7fVxuICAgICAgICAgIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGdlbmVyaWNTb3VyY2U/LmFic3RyYWN0aW9uVHlwZSB8fCAnJ1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZUVsZW1lbnQocHJvcHMuY2F0ZWdvcnksIHsgbmFtZTogbmFtZS52YWx1ZSwgYWJzdHJhY3Rpb25UeXBlIH0pXG4gICAgICB9XG5cbiAgICAgIG5ld0NoaWxkcmVuLnZhbHVlLmZvckVhY2gobiA9PiB7XG4gICAgICAgICAgY29uc3QgZ2VuZXJpY1NvdXJjZSA9IHByb3BzLmdlbmVyaWNHcmFwaHMgPyBwcm9wcy5nZW5lcmljR3JhcGhzLmJ5TmFtZVtwcm9wcy5jYXRlZ29yeS5xdWFsaWZpZWROYW1lKG4pXSA6IHt9XG4gICAgICAgICAgY29uc3QgYWJzdHJhY3Rpb25UeXBlID0gZ2VuZXJpY1NvdXJjZT8uYWJzdHJhY3Rpb25UeXBlIHx8ICcnXG4gICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkobixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYXRlZ29yeS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBpbjoke3Byb3BzLmNhdGVnb3J5LmlkfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYnN0cmFjdGlvblR5cGUpXG4gICAgICB9KVxuICAgICAgLy8gU2luY2UgdmFsaWRhdGUgbWF5IGJlIGNhbGxlZCB0d2ljZSwgcmVzZXQgdGhlIG5ld0NoaWxkcmVuIGFycmF5XG4gICAgICBuZXdDaGlsZHJlbi52YWx1ZSA9IFtdXG5cbiAgICAgIGVtaXQoJ2NoYW5nZScsIG5hbWUudmFsdWUpXG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwgKCkge1xuICAgICAgZW1pdCgnY2hhbmdlJywgcHJvcHMuY2F0ZWdvcnkubmFtZSlcbiAgfVxuXG4gIGNvbnN0IGNvbnRleHQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gc3RvcmUuZ2V0U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcmllc0J5TmFtZShwcm9wcy5jYXRlZ29yeS5wcm9qZWN0SWQsIG5hbWUudmFsdWUpXG4gICAgICBjb25zdCBjb21wbGV0aW9ucyA9IHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5TmFtZXNCeVByZWZpeChwcm9wcy5jYXRlZ29yeS5wcm9qZWN0SWQsIG5hbWUudmFsdWUpXG4gICAgICBpZiAoIWNhdGVnb3JpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgb3JpZ2luYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgY29tcGxldGlvbnMgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IE9iamVjdC5mcm9tRW50cmllcyhjYXRlZ29yaWVzLm1hcChjID0+IGMuY2hpbGRyZW4ubWFwKGNoaWxkID0+IFsgY2hpbGQubmFtZSwgY2hpbGQgXSkpLmZsYXQoKSlcbiAgICAgICAgICBjb25zdCBwYXJlbnRzID0gT2JqZWN0LmZyb21FbnRyaWVzKGNhdGVnb3JpZXMuZmlsdGVyKGMgPT4gYy5wYXJlbnQpLm1hcChjID0+IFtjLnBhcmVudD8ubmFtZSwgYy5wYXJlbnQgXSkpXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgcmVmZXJlbmNlOiBjYXRlZ29yaWVzWzBdLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogWyAuLi5PYmplY3QudmFsdWVzKGNoaWxkcmVuKSBdIGFzIFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5W10sXG4gICAgICAgICAgICAgIHBhcmVudHM6IFsgLi4uT2JqZWN0LnZhbHVlcyhwYXJlbnRzKSBdIGFzIFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5W10sXG4gICAgICAgICAgICAgIGNvbXBsZXRpb25zXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGlzQ3VycmVudENoaWxkIChuYW1lOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbk5hbWVzLnZhbHVlLmhhcyhuYW1lKVxuICB9XG5cbiAgZnVuY3Rpb24gaXNDdXJyZW50UGFyZW50IChuYW1lOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBwcm9wcy5jYXRlZ29yeS5wYXJlbnQ/Lm5hbWUgPT0gbmFtZVxuICB9XG5cbiAgZnVuY3Rpb24gaXNDdXJyZW50TmFtZSAobmFtZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gcHJvcHMuY2F0ZWdvcnk/Lm5hbWUgPT09IG5hbWVcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldE5hbWUgKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIG5hbWUudmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsdGVyTmFtZXMgKF92YWw6IHN0cmluZywgdXBkYXRlOiAoY2I6ICgpID0+IHZvaWQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmlsdGVyTmFtZXNcIiwgdmFsLCBjb250ZXh0LnZhbHVlPy5jb21wbGV0aW9ucylcbiAgICAgIHVwZGF0ZSgoKSA9PiB7XG4gICAgICAgICAgY29tcGxldGlvbnMudmFsdWUgPSBjb250ZXh0LnZhbHVlPy5jb21wbGV0aW9ucyA/PyBbXVxuICAgICAgfSlcbiAgfVxuPC9zY3JpcHQ+XG5cbiAgPHN0eWxlIHNjb3BlZD5cbiAgLmNhdGVnb3J5IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgd2lkdGg6IHZhcigtLW92ZXJ2aWV3LXdpZHRoKSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiB2YXIoLS1vdmVydmlldy1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRleHQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4OiAwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuY2hpbGRyZW4sIC5wYXJlbnRzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleDogMDtcbiAgfVxuICAucmVmZXJlbmNlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIH1cbiAgLnJlbGF0aW9uIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLW92ZXJ2aWV3LWhlaWdodCk7XG4gICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgfVxuICAuY29tcGxldGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXgtaGVpZ2h0OiA1ZW07XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG4gIC5oYXMtY2hpbGQsXG4gIC5oYXMtcGFyZW50LFxuICAuaXMtY3VycmVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgOmNsYXNzPVwiW1xuICAgICAgICAgICAgICAgJ3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICBgc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktJHtjYXRlZ29yeUlkfWAsXG4gICAgICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgICAgIF1cIlxuICAgICAgIDpkYXRhLXNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5PVwiY2F0ZWdvcnlJZFwiPlxuXG4gICAgPGRpdiA6Y2xhc3M9XCJbICdzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeScgXVwiXG4gICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogY2F0ZWdvcnkuY29sb3IgfHwgJ3RyYW5zcGFyZW50JyB9XCJcbiAgICAgICAgIHYtaWY9XCJjYXRlZ29yeVwiXG4gICAgICAgICA6ZGF0YS1zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeT1cImNhdGVnb3J5SWRcIj5cblxuICAgICAgPGRpdiA6Y2xhc3M9XCJbICdzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbicgXVwiXG4gICAgICAgICAgIHYtaWY9XCJ3aXRoQ2hpbGRyZW5cIj5cbiAgICAgICAgPFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVwcmVzZW50YXRpb25cbiAgICAgICAgICB2LWZvcj1cImMgaW4gY2F0ZWdvcnkuY2hpbGRyZW5cIlxuICAgICAgICAgIDprZXk9XCJjLmlkXCJcbiAgICAgICAgICA6aXNHZW5lcmljPVwiaXNHZW5lcmljXCJcbiAgICAgICAgICA6Z2VuZXJpY0dyYXBocz1cImdlbmVyaWNHcmFwaHNcIlxuICAgICAgICAgIDpsYXlvdXQ9XCJsYXlvdXRcIlxuICAgICAgICAgIDp3aXRoQ2hpbGRyZW49XCJ3aXRoQ2hpbGRyZW5cIlxuICAgICAgICAgIDpoaWRlSnVzdGlmaWNhdGlvbnM9XCJoaWRlSnVzdGlmaWNhdGlvbnNcIlxuICAgICAgICAgIDpjYXRlZ29yeUlkPVwiYy5pZFwiPlxuICAgICAgICA8L1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVwcmVzZW50YXRpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPERyb3Bab25lIGRhdGE9XCJhZGRcIlxuICAgICAgICAgICAgICAgIHR5cGVzPVwidXBtdC9kZXNjcmlwdGVtIHVwbXQvYW5ub3RhdGlvbiB1cG10L3NlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIEBhbm5vdGF0aW9uPVwiZHJvcHBlZEFubm90YXRpb25cIlxuICAgICAgICAgICAgICAgIEBzZWxlY3Rpb249XCJkcm9wcGVkU2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBAZGVzY3JpcHRlbT1cImRyb3BwZWREZXNjcmlwdGVtXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWp1c3RpZmljYXRpb25cIlxuICAgICAgICAgICAgIHYtaWY9XCJpc0p1c3RpZmljYXRpb25WaXNpYmxlXCI+XG4gICAgICAgICAgPHVsIHYtaWY9XCJpc0dlbmVyaWNcIlxuICAgICAgICAgICAgICBjbGFzcz1cImp1c3RpZmljYXRpb24tZGVzY3JpcHRlbXNcIj5cbiAgICAgICAgICAgIDxsaSB2LWZvcj1cImRlc2NyaXB0ZW0gaW4gY2F0ZWdvcnlEZXNjcmlwdGVtc1wiIDprZXk9XCJkZXNjcmlwdGVtLmlkXCI+XG4gICAgICAgICAgICAgIDxEZXNjcmlwdGVtUmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgICAgICA6ZGVzY3JpcHRlbUlkPVwiZGVzY3JpcHRlbS5pZFwiXG4gICAgICAgICAgICAgICAgOndpdGhNZW51PVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIDppc1JlYWRvbmx5PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8L0Rlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8SnVzdGlmaWNhdGlvblJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB2LWVsc2VcbiAgICAgICAgICAgIDpqdXN0aWZpY2F0aW9uSWQ9XCJjYXRlZ29yeS5qdXN0aWZpY2F0aW9uPy5pZCA/PyAnJ1wiPlxuICAgICAgICAgIDwvSnVzdGlmaWNhdGlvblJlcHJlc2VudGF0aW9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9Ecm9wWm9uZT5cblxuICAgICAgPERyb3Bab25lIDpkYXRhPVwiYGluOiR7Y2F0ZWdvcnlJZH1gXCJcbiAgICAgICAgICAgICAgICB0eXBlcz1cInVwbXQvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkgdXBtdC9nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5IHVwbXQvc2VsZWN0aW9uIHVwbXQvZGVzY3JpcHRlbSB1cG10L2Fubm90YXRpb25cIlxuICAgICAgICAgICAgICAgIEBhbm5vdGF0aW9uPVwiZHJvcHBlZENyZWF0aW5nQW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgQHNlbGVjdGlvbj1cImRyb3BwZWRDcmVhdGluZ1NlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgQGRlc2NyaXB0ZW09XCJkcm9wcGVkQ3JlYXRpbmdEZXNjcmlwdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvblwiPlxuICAgICAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uXG4gICAgICAgICAgICA6dHlwZT1cImNhdGVnb3J5LmFic3RyYWN0aW9uVHlwZVwiXG4gICAgICAgICAgICA6ZGlyZWN0aW9uPVwibGF5b3V0XCJcbiAgICAgICAgICAgIDpjaGlsZHJlbkNvdW50PVwiY2F0ZWdvcnkuY2hpbGRyZW4ubGVuZ3RoXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb25pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY3JpdGVyaW9uXCI+XG4gICAgICAgICAgICAgIHt7IGNyaXRlcmlvbiB9fVxuICAgICAgICAgICAgICA8cS10b29sdGlwXG4gICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgIGRlbnNlPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImNyaXRlcmlvblwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNyaXRlcmlvbi10b29sdGlwXCI+e3sgY3JpdGVyaW9uIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgQ3JpdGVyaW9uXG4gICAgICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgICAgICAgICA8cS1wb3B1cC1lZGl0IHYtbW9kZWw9XCJjcml0ZXJpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG8tc2F2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNsb3Q9XCJzY29wZVwiPlxuICAgICAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNyaXRlcmlvblwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNjb3BlLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgIEBrZXl1cC5jdHJsLmVudGVyPVwic2NvcGUuc2V0XCJcbiAgICAgICAgICAgICAgICAgIEBrZXl1cC5lc2M9XCJzY29wZS5jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAgIGF1dG9ncm93XG4gICAgICAgICAgICAgICAgICBhdXRvZm9jdXMgLz5cbiAgICAgICAgICAgICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxFbGVtZW50TWVudVxuICAgICAgICAgICAgICBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9ubWVudVwiXG4gICAgICAgICAgICAgIDphY3Rpb25zPVwicmVsYXRpb25BY3Rpb25zXCIgLz5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBjbGFzcz1cInByaW50LXJlbW92ZWRcIlxuICAgICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ3JlYXRlIGEgbmV3IGNoaWxkIGNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgaWNvbj1cIm1kaS1wbHVzXCI+XG4gICAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgICB0b3VjaC1wb3NpdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1saXN0IGRlbnNlIHN0eWxlPVwibWluLXdpZHRoOiAxMDBweFwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihbbGFiZWwsIG5hbWVdLCBpKSBpbiBwcm9wb3NlZENoaWxkcmVuTmFtZXNcIlxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2suc3RvcD1cImNyZWF0ZUNoaWxkQ2F0ZWdvcnkobmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgICAgICAgICAgICB7eyBsYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Ryb3Bab25lPlxuXG4gICAgICA8RHJvcFpvbmUgZGF0YT1cImFkZFwiXG4gICAgICAgICAgICAgICAgdHlwZXM9XCJ1cG10L3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5IHVwbXQvZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeSB1cG10L3NlbGVjdGlvbiB1cG10L2Rlc2NyaXB0ZW0gdXBtdC9hbm5vdGF0aW9uIHVwbXQvY29sb3JcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgICAgICBAc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJkcm9wcGVkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgIEBnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5PVwiZHJvcHBlZEdlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgIEBhbm5vdGF0aW9uPVwiZHJvcHBlZEFubm90YXRpb25cIlxuICAgICAgICAgICAgICAgIEBzZWxlY3Rpb249XCJkcm9wcGVkU2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBAZGVzY3JpcHRlbT1cImRyb3BwZWREZXNjcmlwdGVtXCJcbiAgICAgICAgICAgICAgICBAY29sb3I9XCJkcm9wcGVkQ29sb3JcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlclwiXG4gICAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLWVycm9yJzogZ2VuZXJpY0VsZW1lbnQuZXJyb3JzPy5sZW5ndGggfVwiPlxuICAgICAgICAgIDxEcmFnRWxlbWVudFxuICAgICAgICAgICAgdHlwZT1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5XCJcbiAgICAgICAgICAgIDpkYXRhPVwiY2F0ZWdvcnlJZFwiXG4gICAgICAgICAgICBAY2xpY2subWV0YT1cImRlYnVnXCI+XG4gICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgIDpuYW1lPVwiY2F0ZWdvcnlJY29uXCI+XG4gICAgICAgICAgICA8L3EtaWNvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktbmFtZVwiPnt7IGNhdGVnb3J5TmFtZSB9fVxuICAgICAgICAgICAgICA8cS1wb3B1cC1lZGl0IHYtbW9kZWw9XCJjYXRlZ29yeU5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2xvdD1cInNjb3BlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvLXNhdmU+XG4gICAgICAgICAgICAgICAgPENhdGVnb3J5TmFtZUlucHV0IEBjaGFuZ2U9XCJzY29wZS5jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Z2VuZXJpY0dyYXBocz1cImdlbmVyaWNHcmFwaHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2F0ZWdvcnk9XCJjYXRlZ29yeVwiIC8+XG4gICAgICAgICAgICAgIDwvcS1wb3B1cC1lZGl0PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHEtdG9vbHRpcCAgY2xhc3M9XCJiZy1yZWQtNVwiIGFuY2hvcj1cInRvcCByaWdodFwiIHNlbGY9XCJ0b3AgbGVmdFwiIHYtaWY9XCJnZW5lcmljRWxlbWVudC5lcnJvcnM/Lmxlbmd0aFwiPlxuICAgICAgICAgICAgICB7eyBjYXRlZ29yeU5hbWUgfX1cbiAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImVycm9yLCBrZXkgaW4gZ2VuZXJpY0VsZW1lbnQuZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgICA6a2V5PVwia2V5XCI+XG4gICAgICAgICAgICAgICAge3sgZXJyb3IgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3EtdG9vbHRpcD5cbiAgICAgICAgICAgIDxxLXRvb2x0aXAgdi1lbHNlPlxuICAgICAgICAgICAgICB7eyBjYXRlZ29yeU5hbWUgfX0gKHt7IGlzR2VuZXJpYyA/ICdHZW5lcmljIFN5bmNocm9uaWMgQ2F0ZWdvcnknIDogJ1NwZWNpZmljIFN5bmNocm9uaWMgQ2F0ZWdvcnknIH19XG4gICAgICAgICAgICA8L3EtdG9vbHRpcD5cbiAgICAgICAgICA8L0RyYWdFbGVtZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtZW50LXRvb2xiYXJcIj5cbiAgICAgICAgICAgIDxxLWJhZGdlXG4gICAgICAgICAgICAgIEBjbGljaz1cImRpc3BsYXlKdXN0aWZpY2F0aW9uID0gIWRpc3BsYXlKdXN0aWZpY2F0aW9uXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGVtcy1iYWRnZVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiZ3JleS02XCJcbiAgICAgICAgICAgICAgOnRpdGxlPVwiYCR7Y2F0ZWdvcnlEZXNjcmlwdGVtQ291bnR9IGRlc2NyaXB0ZW1zYFwiXG4gICAgICAgICAgICAgIHJvdW5kZWQ+e3sgY2F0ZWdvcnlEZXNjcmlwdGVtQ291bnQgfX08L3EtYmFkZ2U+XG4gICAgICAgICAgICA8Tm90ZUljb25cbiAgICAgICAgICAgICAgOmVsZW1lbnQ9XCJjYXRlZ29yeVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbWVudC10b29sYmFyLXNlY29uZGFyeSBvbi1uYW1lLWhvdmVyXCI+XG4gICAgICAgICAgICAgIDxDb2xvcml6ZUljb25cbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY2F0ZWdvcnlDb2xvclwiIC8+XG4gICAgICAgICAgICAgIDxFbGVtZW50TWVudVxuICAgICAgICAgICAgICAgIDphY3Rpb25zPVwibWVudUFjdGlvbnNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ecm9wWm9uZT5cblxuICAgICAgPERyb3Bab25lIDpkYXRhPVwiYGJlZm9yZToke2NhdGVnb3J5SWR9YFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImNhdGVnb3J5LnNwZWNpZmljc3luY2hyb25pY21vZGVsSWRcIlxuICAgICAgICAgICAgICAgIHR5cGVzPVwidXBtdC9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB1cG10L2dlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnkgdXBtdC9zZWxlY3Rpb24gdXBtdC9kZXNjcmlwdGVtIHVwbXQvYW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlbXB0eS1wYWRkaW5nIG5ld3NzYy1kcm9wem9uZVwiXG4gICAgICAgICAgICAgICAgQHNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5PVwiZHJvcHBlZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICBAZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeT1cImRyb3BwZWRHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICBAYW5ub3RhdGlvbj1cImRyb3BwZWRDcmVhdGluZ0Fubm90YXRpb25cIlxuICAgICAgICAgICAgICAgIEBzZWxlY3Rpb249XCJkcm9wcGVkQ3JlYXRpbmdTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIEBkZXNjcmlwdGVtPVwiZHJvcHBlZENyZWF0aW5nRGVzY3JpcHRlbVwiPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBAY2xpY2s9XCJjcmVhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShgYmVmb3JlOiR7Y2F0ZWdvcnlJZH1gKVwiXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBjbGFzcz1cIm5ld3NzYy1idXR0b24gcHJpbnQtaGlkZGVuXCJcbiAgICAgICAgICA6aWNvbj1cImlzVmVydGljYWwgPyAnbWRpLW1lbnUtdXAnIDogJ21kaS1tZW51LXJpZ2h0J1wiPlxuICAgICAgICAgIDxxLXRvb2x0aXA+Q3JlYXRlIGEgcGFyZW50IGNhdGVnb3J5PC9xLXRvb2x0aXA+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L0Ryb3Bab25lPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHYtaWY9XCJjYXRlZ29yeS5wYXJlbnRJZCAmJiB3aXRoQ2hpbGRyZW5cIlxuICAgICAgICBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWZpbGxlclwiXG4gICAgICAgID5cbiAgICAgICAgPFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24gOmRpcmVjdGlvbj1cImxheW91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjaGlsZHJlbkNvdW50PVwiMVwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJ1xuICBpbXBvcnQgeyB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInXG4gIGltcG9ydCB7IHN0cmlwQ29udGV4dEZyb21OYW1lIH0gZnJvbSAnLi91dGlsJ1xuXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSBmcm9tICdzdG9yZXMvbW9kZWxzL3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5J1xuXG4gIGltcG9ydCBEZXNjcmlwdGVtUmVwcmVzZW50YXRpb24gZnJvbSAnLi9EZXNjcmlwdGVtUmVwcmVzZW50YXRpb24udnVlJ1xuICBpbXBvcnQgSnVzdGlmaWNhdGlvblJlcHJlc2VudGF0aW9uIGZyb20gJy4vSnVzdGlmaWNhdGlvblJlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IERyb3Bab25lIGZyb20gJy4vRHJvcFpvbmUudnVlJ1xuICBpbXBvcnQgRHJhZ0VsZW1lbnQgZnJvbSAnLi9EcmFnRWxlbWVudC52dWUnXG4gIGltcG9ydCBDYXRlZ29yeU5hbWVJbnB1dCBmcm9tICcuL0NhdGVnb3J5TmFtZUlucHV0LnZ1ZSdcbiAgaW1wb3J0IENvbG9yaXplSWNvbiBmcm9tICcuL0NvbG9yaXplSWNvbi52dWUnXG4gIGltcG9ydCBOb3RlSWNvbiBmcm9tICcuL05vdGVJY29uLnZ1ZSdcbiAgaW1wb3J0IEVsZW1lbnRNZW51IGZyb20gJy4vRWxlbWVudE1lbnUudnVlJ1xuICBpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbiBmcm9tICcuL1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24udnVlJ1xuXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCB7IHVzZUludGVyZmFjZVN0b3JlIH0gZnJvbSAnc3RvcmVzL2ludGVyZmFjZSdcblxuICBjb25zdCAkcSA9IHVzZVF1YXNhcigpXG5cbiAgY29uc3QgaXN0b3JlID0gdXNlSW50ZXJmYWNlU3RvcmUoKVxuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCB7IGN1cnJlbnRQcm9qZWN0SWQgfSA9IHN0b3JlVG9SZWZzKGlzdG9yZSlcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGNhdGVnb3J5SWQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sXG4gICAgICBnZW5lcmljR3JhcGhzOiB7IHR5cGU6IE9iamVjdCwgZGVmYXVsdDogbnVsbCB9LFxuICAgICAgbGF5b3V0OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJob3Jpem9udGFsXCIgfSwgLy8gaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICAgICAgaGlkZUp1c3RpZmljYXRpb25zOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXG4gICAgICBpc0dlbmVyaWM6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcbiAgICAgIHdpdGhDaGlsZHJlbjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH1cbiAgfSlcblxuICBjb25zdCBjYXRlZ29yeSA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQpKVxuXG4gIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGNvbXB1dGVkKHtcbiAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlID8gY2F0ZWdvcnkudmFsdWUubmFtZSA6IFwiXCJcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgICAvKiBJZiB0aGUgbmV3IG5hbWUgaXMgZnJvbSBhbiBleGlzdGluZyBjYXRlZ29yeSB0aGF0IGhhcyBhbiBhYnN0cmFjdGlvblR5cGUsIHRoZW4gYWxzbyB1cGRhdGUgaXRzIGFic3RyYWN0aW9uVHlwZSAqL1xuICAgICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gY2F0ZWdvcnkudmFsdWU/LnF1YWxpZmllZE5hbWUodmFsdWUpID8/IHZhbHVlXG4gICAgICAgICAgY29uc3QgZ2VuZXJpY1NvdXJjZSA9IHByb3BzLmdlbmVyaWNHcmFwaHMgPyBwcm9wcy5nZW5lcmljR3JhcGhzLmJ5TmFtZVtmdWxsTmFtZV0gOiB7fVxuICAgICAgICAgIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGdlbmVyaWNTb3VyY2U/LmFic3RyYWN0aW9uVHlwZSB8fCAnJ1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQsIHsgbmFtZTogdmFsdWUsIGFic3RyYWN0aW9uVHlwZTogYWJzdHJhY3Rpb25UeXBlIH0pXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgY2F0ZWdvcnlDb2xvciA9IGNvbXB1dGVkKHtcbiAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlID8gY2F0ZWdvcnkudmFsdWUuY29sb3IgOiBcIlwiXG4gICAgICB9LFxuICAgICAgc2V0IChjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgICAgaWYgKGNvbG9yID09ICcjZmZmZmZmJykge1xuICAgICAgICAgICAgICBjb2xvciA9ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHN0b3JlLnVwZGF0ZVN5bmNocm9uaWNDYXRlZ29yeUNvbG9yKGNhdGVnb3J5LnZhbHVlPy5wcm9qZWN0SWQsIGNhdGVnb3J5LnZhbHVlPy5uYW1lLCBjb2xvcilcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBjYXRlZ29yeUljb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5pc0dlbmVyaWMgPyAgXCJtZGktYWxwaGEtcy1ib3hcIiA6IFwibWRpLWFscGhhLXMtYm94LW91dGxpbmVcIilcblxuICBjb25zdCBjcml0ZXJpb24gPSBjb21wdXRlZCh7XG4gICAgICBnZXQ6ICgpID0+IGNhdGVnb3J5LnZhbHVlPy5jcml0ZXJpb24gPz8gJycsXG4gICAgICBzZXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQsIHsgY3JpdGVyaW9uOiB2YWx1ZSB9KVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGlzTGVhZiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiAhY2F0ZWdvcnkudmFsdWU/LmNoaWxkcmVuLmxlbmd0aFxuICB9KVxuXG4gIGNvbnN0IGlzVmVydGljYWwgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5sYXlvdXQgPT0gJ3ZlcnRpY2FsJylcblxuICAvLyBJbml0aWFsIHN0YXRlIGZvciBkaXNwbGF5SnVzdGlmaWNhdGlvblxuICAvLyBIaWRlIGJ5IGRlZmF1bHRcbiAgY29uc3QgZGlzcGxheUp1c3RpZmljYXRpb24gPSByZWYoZmFsc2UpXG5cbiAgY29uc3QgaXNKdXN0aWZpY2F0aW9uVmlzaWJsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS52YWx1ZT8uanVzdGlmaWNhdGlvbj8uZGVzY3JpcHRlbXM/Lmxlbmd0aCAmJiBkaXNwbGF5SnVzdGlmaWNhdGlvbi52YWx1ZVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3J5RGVzY3JpcHRlbXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAoISBjYXRlZ29yeS52YWx1ZSB8fCAhIGN1cnJlbnRQcm9qZWN0SWQudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcy5pc0dlbmVyaWMpIHtcbiAgICAgICAgICAvLyBRdWVyeSBmb3IgYWxsIGRlc2NyaXB0ZW1zIGZvciBhbGwgY2F0ZWdvcmllc1xuICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBzdG9yZS5nZXRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yaWVzQnlOYW1lIChjdXJyZW50UHJvamVjdElkLnZhbHVlLCBjYXRlZ29yeS52YWx1ZS5uYW1lKVxuICAgICAgICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcChjYXQgPT4gY2F0Lmp1c3RpZmljYXRpb24/LmRlc2NyaXB0ZW1zIHx8IFtdKS5mbGF0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlPy5qdXN0aWZpY2F0aW9uPy5kZXNjcmlwdGVtcyB8fCBbXVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3J5RGVzY3JpcHRlbUNvdW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5RGVzY3JpcHRlbXMudmFsdWUubGVuZ3RoXG4gIH0pXG5cbiAgaWYgKGlzTGVhZi52YWx1ZSkge1xuICAgICAgZGlzcGxheUp1c3RpZmljYXRpb24udmFsdWUgPSAhIHByb3BzLmhpZGVKdXN0aWZpY2F0aW9ucyB8fCBjYXRlZ29yeURlc2NyaXB0ZW1Db3VudC52YWx1ZSA+IDBcbiAgfVxuXG4gIGNvbnN0IGdlbmVyaWNFbGVtZW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKGNhdGVnb3J5LnZhbHVlICYmIHByb3BzLmdlbmVyaWNHcmFwaHMpIHtcbiAgICAgICAgICByZXR1cm4gIHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW2NhdGVnb3J5LnZhbHVlLmZ1bGxOYW1lXSB8fCB7IGNoaWxkcmVuTmFtZXM6IG5ldyBTZXQoKSB9XG4gICAgICB9XG4gICAgICAvLyBJbiBhbGwgb3RoZXIgY2FzZXMsIHJldHVybiBlbXB0eSBkaWN0XG4gICAgICByZXR1cm4ge31cbiAgfSlcblxuICBjb25zdCBwcm9wb3NlZENoaWxkcmVuTmFtZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50Q2hpbGRyZW4gPSBuZXcgU2V0KChjYXRlZ29yeS52YWx1ZT8uY2hpbGRyZW4gfHwgW10pLm1hcChjaGlsZCA9PiBjaGlsZC5mdWxsTmFtZSkpXG4gICAgICBjb25zdCBjaGlsZHJlbk5hbWVzID0gWyAuLi5nZW5lcmljRWxlbWVudC52YWx1ZS5jaGlsZHJlbk5hbWVzLmRpZmZlcmVuY2UoY3VycmVudENoaWxkcmVuKSBdLnRvU29ydGVkKClcbiAgICAgIHJldHVybiBbIFtcIk5ldyBjaGlsZCBjYXRlZ29yeVwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgIC4uLmNoaWxkcmVuTmFtZXMubWFwKChuYW1lOiBzdHJpbmcpID0+IFsgbmFtZSwgc3RyaXBDb250ZXh0RnJvbU5hbWUobmFtZSkgXSkgXVxuICB9KVxuXG4gIGZ1bmN0aW9uIGRlYnVnICgpIHtcbiAgICAgICh3aW5kb3cgYXMgYW55KS5jYXRlZ29yeSA9IGNhdGVnb3J5LnZhbHVlO1xuICAgICAgY29uc29sZS5sb2coXCJTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVwiLCB7IGNhdGVnb3J5OiBjYXRlZ29yeS52YWx1ZSB9KVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0NvbnRlbnQgKCkge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSBjb250ZW50IGlzIGV4cGFuZGVkIGFuZCB2aXNpYmxlXG4gICAgICBjb25zb2xlLmxvZyhcIlNob3VsZCBleHBhbmQgU1NDXCIpXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSAod2hlcmU6IHN0cmluZywgbmFtZTogc3RyaW5nID0gXCJcIikge1xuICAgICAgaWYgKGNhdGVnb3J5LnZhbHVlKSB7XG4gICAgICAgICAgaWYgKCEgbmFtZSkge1xuICAgICAgICAgICAgICBuYW1lID0gaXN0b3JlLm5ld1NTQ0lkKClcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBjYXRlZ29yeS52YWx1ZS5xdWFsaWZpZWROYW1lKG5hbWUpXG4gICAgICAgICAgY29uc3QgZ2VuZXJpY1NvdXJjZSA9IHByb3BzLmdlbmVyaWNHcmFwaHMgPyBwcm9wcy5nZW5lcmljR3JhcGhzLmJ5TmFtZVtmdWxsTmFtZV0gOiB7fVxuICAgICAgICAgIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGdlbmVyaWNTb3VyY2U/LmFic3RyYWN0aW9uVHlwZSB8fCAnJ1xuICAgICAgICAgIHN0b3JlLmFkZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkudmFsdWUuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0aW9uVHlwZSlcbiAgICAgICAgICBzaG93Q29udGVudCgpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkgKGNhdGVnb3J5SWQ6IHN0cmluZykge1xuICAgICAgLy8gRE5EIG9uIGEgY2F0ZWdvcnkgdG8gcmVwYXJlbnRcbiAgICAgIGlmICghY2F0ZWdvcnlJZCkge1xuICAgICAgICAgIC8vIEVtcHR5IGNhdGVnb3J5SWQ6IGNyZWF0ZSBhIG5ldyBjaGlsZFxuICAgICAgICAgIGNyZWF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGBpbjoke3Byb3BzLmNhdGVnb3J5SWR9YClcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNvdXJjZSA9IHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGNhdGVnb3J5SWQpXG4gICAgICBpZiAoY2F0ZWdvcnlJZCAhPT0gcHJvcHMuY2F0ZWdvcnlJZCAmJiBzb3VyY2UpIHtcbiAgICAgICAgICAvLyBJdCB3YXMgbWF5YmUgYSByb290IGNhdGVnb3J5LiBSZW1vdmUgaXQgZnJvbSB0aGUgcm9vdFxuICAgICAgICAgIC8vIGNhdGVnb3JpZXMgYW5kIHJlcGFyZW50LlxuICAgICAgICAgIGNvbnN0IHNwZWNpZmljc3luY2hyb25pY21vZGVsSWQgPSBzb3VyY2Uuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZFxuICAgICAgICAgIGlmIChzcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkKSB7XG4gICAgICAgICAgICAgIC8vIEl0IHdhcyBhIHJvb3QgY2F0ZWdvcnkgLSBtb3ZlIGFsbCBpdHMgY2hpbGRyZW4gYXMgcm9vdCBjYXRlZ29yaWVzXG4gICAgICAgICAgICAgIHNvdXJjZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGNoaWxkLmlkLCB7IHNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBudWxsIH0pKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzdG9yZS51cGRhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShjYXRlZ29yeUlkLCB7XG4gICAgICAgICAgICAgIHNwZWNpZmljc3luY2hyb25pY21vZGVsSWQ6IG51bGwsXG4gICAgICAgICAgICAgIHBhcmVudElkOiBwcm9wcy5jYXRlZ29yeUlkXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5IChjYXRlZ29yeU5hbWU6IHN0cmluZywgd2hlcmU6IHN0cmluZykge1xuICAgICAgaWYgKHdoZXJlID09PSAnYWRkJykge1xuICAgICAgICAgIC8vIFRoZXJlIGlzIG5vIFwiYWRkXCIgZm9yIG5vd1xuICAgICAgICAgIHdoZXJlID0gYGluOiR7cHJvcHMuY2F0ZWdvcnlJZH1gXG4gICAgICB9XG4gICAgICBpZiAoY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBnZW5lcmljU291cmNlID0gcHJvcHMuZ2VuZXJpY0dyYXBocyA/IHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW2NhdGVnb3J5TmFtZV0gOiB7fVxuICAgICAgICAgIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGdlbmVyaWNTb3VyY2U/LmFic3RyYWN0aW9uVHlwZSB8fCAnJ1xuICAgICAgICAgIHN0b3JlLmFkZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHN0cmlwQ29udGV4dEZyb21OYW1lKGNhdGVnb3J5TmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkudmFsdWUuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0aW9uVHlwZSlcbiAgICAgICAgICBzaG93Q29udGVudCgpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkRGVzY3JpcHRlbSAoZGVzY3JpcHRlbUlkOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0ZW0gPSBzdG9yZS5nZXREZXNjcmlwdGVtKGRlc2NyaXB0ZW1JZClcbiAgICAgIGlmIChkZXNjcmlwdGVtKSB7XG4gICAgICAgICAgc3RvcmUuYWRkVGV4dFNlbGVjdGlvblRvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoZGVzY3JpcHRlbS50b0pTT04oKSwgcHJvcHMuY2F0ZWdvcnlJZClcbiAgICAgICAgICBzdG9yZS5kZWxldGVEZXNjcmlwdGVtKGRlc2NyaXB0ZW1JZClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRBbm5vdGF0aW9uIChhbm5vdGF0aW9uSWQ6IHN0cmluZykge1xuICAgICAgY29uc3QgYW5ub3RhdGlvbiA9IHN0b3JlLmdldEFubm90YXRpb24oYW5ub3RhdGlvbklkKVxuICAgICAgaWYgKGFubm90YXRpb24pIHtcbiAgICAgICAgICBzdG9yZS5hZGRUZXh0U2VsZWN0aW9uVG9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShhbm5vdGF0aW9uLnRvSlNPTigpLCBwcm9wcy5jYXRlZ29yeUlkKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZFNlbGVjdGlvbiAoc2VsZWN0aW9uRGF0YTogc3RyaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEpTT04ucGFyc2Uoc2VsZWN0aW9uRGF0YSlcbiAgICAgICAgICBzdG9yZS5hZGRUZXh0U2VsZWN0aW9uVG9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShzZWxlY3Rpb24sIHByb3BzLmNhdGVnb3J5SWQpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENhbm5vdCBwYXJzZSAke3NlbGVjdGlvbkRhdGF9OiAke2V9YClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRDb2xvciAoY29sb3I6IHN0cmluZykge1xuICAgICAgc3RvcmUudXBkYXRlU3luY2hyb25pY0NhdGVnb3J5Q29sb3IoY2F0ZWdvcnkudmFsdWU/LnByb2plY3RJZCwgY2F0ZWdvcnkudmFsdWU/Lm5hbWUsIGNvbG9yKVxuICB9XG5cbiAgLy8gRHJvcHBlZCBzZWxlY3Rpb25zIHRvIGNyZWF0ZSBhIFNTQ2F0ZWdvcnkuIGRhdGEgaXMgYmVmb3JlIG9yIGFmdGVyXG4gIGZ1bmN0aW9uIGRyb3BwZWRDcmVhdGluZ0Rlc2NyaXB0ZW0gKGRlc2NyaXB0ZW1JZDogc3RyaW5nLCB3aGVyZTogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGVtID0gc3RvcmUuZ2V0RGVzY3JpcHRlbShkZXNjcmlwdGVtSWQpXG4gICAgICBpZiAoZGVzY3JpcHRlbSAmJiBjYXRlZ29yeS52YWx1ZSkge1xuICAgICAgICAgIHN0b3JlLmFkZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGlzdG9yZS5uZXdTU0NJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnZhbHVlLnNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRlbS50b0pTT04oKSlcbiAgICAgICAgICBzaG93Q29udGVudCgpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkQ3JlYXRpbmdBbm5vdGF0aW9uIChhbm5vdGF0aW9uSWQ6IHN0cmluZywgd2hlcmU6IHN0cmluZykge1xuICAgICAgY29uc3QgYW5ub3RhdGlvbiA9IHN0b3JlLmdldEFubm90YXRpb24oYW5ub3RhdGlvbklkKVxuICAgICAgaWYgKGFubm90YXRpb24gJiYgY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICBzdG9yZS5hZGRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShpc3RvcmUubmV3U1NDSWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS52YWx1ZS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb24udG9KU09OKCkpXG4gICAgICAgICAgc2hvd0NvbnRlbnQoKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZENyZWF0aW5nU2VsZWN0aW9uIChzZWxlY3Rpb25EYXRhOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gSlNPTi5wYXJzZShzZWxlY3Rpb25EYXRhKVxuICAgICAgICAgIGlmIChzZWxlY3Rpb24gJiYgY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoaXN0b3JlLm5ld1NTQ0lkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnZhbHVlLnNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24pXG4gICAgICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENhbm5vdCBwYXJzZSAke3NlbGVjdGlvbkRhdGF9OiAke2V9YClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFic3RyYWN0aW9uVHlwZSAodmFsdWU6IHN0cmluZykge1xuICAgICAgc3RvcmUudXBkYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCwgeyBhYnN0cmFjdGlvblR5cGU6IHZhbHVlIH0pXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDaGlsZENhdGVnb3J5IChuYW1lOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICBjcmVhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShgaW46JHtwcm9wcy5jYXRlZ29yeUlkfWAsIG5hbWUpXG4gIH1cblxuICBmdW5jdGlvbiBjcml0ZXJpb25Qb3B1cCAoKSB7XG4gICAgICBjb25zdCBjcml0ZXJpb24gPSBjYXRlZ29yeS52YWx1ZT8uY3JpdGVyaW9uIHx8IFwiXCJcbiAgICAgICRxLmRpYWxvZyh7XG4gICAgICAgICAgdGl0bGU6ICdFbnRlciBhIGNyaXRlcmlvbiBmb3IgdGhpcyByZWxhdGlvbicsXG4gICAgICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiAnWW91IGNhbiBzcGVjaWZ5IGEgY3JpdGVyaW9uIGZvciB0aGlzIHJlbGF0aW9uIG9yIHRoZSBhc3NvY2lhdGVkIGNhdGVnb3J5LicsXG4gICAgICAgICAgcHJvbXB0OiB7XG4gICAgICAgICAgICAgIG1vZGVsOiBjcml0ZXJpb24sXG4gICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyAvLyBvcHRpb25hbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2FuY2VsOiB0cnVlLFxuICAgICAgICAgIHBlcnNpc3RlbnQ6IHRydWVcbiAgICAgIH0pLm9uT2sobmV3VmFsdWUgPT4ge1xuICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICBzdG9yZS51cGRhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShwcm9wcy5jYXRlZ29yeUlkLCB7IGNyaXRlcmlvbjogbmV3VmFsdWUgfSlcbiAgICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgaW1wb3J0IHR5cGUgeyBOYW1lZEFjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvdXRpbC50cydcblxuICBjb25zdCBtZW51QWN0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbnM6IE5hbWVkQWN0aW9uW10gPSBbXG4gICAgICAgICAgWyBcIkRlbGV0ZSB0aGlzIGNhdGVnb3J5IG9ubHlcIiwgKCkgPT4gc3RvcmUuZGVsZXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCwgZmFsc2UpIF0sXG4gICAgICAgICAgWyBcIkRlbGV0ZSB0aGlzIGNhdGVnb3J5IGFuZCBpdHMgY2hpbGRyZW5cIiwgKCkgPT4gc3RvcmUuZGVsZXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCwgdHJ1ZSkgXSxcbiAgICAgIF1cbiAgICAgIGlmIChjYXRlZ29yeS52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBjYXRlZ29yeU5hbWUudmFsdWVcbiAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aChTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeS5DT05URVhUX01BUktFUikpIHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFsgXCJTdGFuZGFyZCBjb25zaXN0ZW5jeSBjaGVja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBTdHJpcCB0cmFpbGluZyAvXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeU5hbWUudmFsdWUgPSBuYW1lLnN1YnN0cigwLCBuYW1lLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgIH0gXSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goWyBcIkNvbnRleHR1YWxpemVkIGNvbnNpc3RlbmN5IGNoZWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIEFkZCB0cmFpbGluZyAvXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeU5hbWUudmFsdWUgPSBuYW1lICsgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkuQ09OVEVYVF9NQVJLRVJcbiAgICAgICAgICAgICAgfSBdKVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY3Rpb25zXG4gIH0pXG5cbiAgY29uc3QgcmVsYXRpb25BY3Rpb25zOiBOYW1lZEFjdGlvbltdID0gW1xuICAgICAgWyBcIkNyZWF0ZSBhIG5ldyBjaGlsZCBjYXRlZ29yeVwiLCAoKSA9PiBjcmVhdGVDaGlsZENhdGVnb3J5KCkgXSxcbiAgICAgIFsgXCJTZXQgYXMgZ2VuZXJpYyBhYnN0cmFjdGlvblwiLCAoKSA9PiB1cGRhdGVBYnN0cmFjdGlvblR5cGUoJycpIF0sXG4gICAgICBbIFwiU2V0IGFzIGFnZ3JlZ2F0aW9uIGFic3RyYWN0aW9uIOKLhFwiLCAoKSA9PiB1cGRhdGVBYnN0cmFjdGlvblR5cGUoJ2FnZ3JlZ2F0aW9uJykgXSxcbiAgICAgIFsgXCJTZXQgYXMgc3BlY2lhbGl6YXRpb24gYWJzdHJhY3Rpb24g4qeNXCIsICgpID0+IHVwZGF0ZUFic3RyYWN0aW9uVHlwZSgnc3BlY2lhbGl6YXRpb24nKSBdLFxuICAgICAgWyBcIkRlZmluZSBhIGNyaXRlcmlvbiBmb3IgdGhpcyBhYnN0cmFjdGlvbiByZWxhdGlvblwiLCAoKSA9PiBjcml0ZXJpb25Qb3B1cCgpIF1cbiAgXVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5oZWFkZXItY2xhc3Mge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmVsZW1lbnQtdG9vbGJhciwgLmVsZW1lbnQtdG9vbGJhci1zZWNvbmRhcnkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAudmVydGljYWwgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBtYXJnaW46IDAgMWVtO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbi5ob3Jpem9udGFsIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkge1xuICAgICAgbWluLXdpZHRoOiB2YXIoLS1tb21lbnQtbWluaW11bS13aWR0aCk7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGZsZXg6IDE7XG4gIH1cbiAgLnZlcnRpY2FsIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5oaWdobGlnaHRlZCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xuICB9XG4gIC5oaWdobGlnaHRlZCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktanVzdGlmaWNhdGlvbiB7XG4gICAgICB3aWR0aDogY2FsYyh2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LWRlc2NyaXB0ZW0td2lkdGgpICsgNTBweCk7XG4gIH1cbiAgLnZlcnRpY2FsIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1qdXN0aWZpY2F0aW9uIHtcbiAgICAgIHdpZHRoOiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LWRlc2NyaXB0ZW0td2lkdGgpO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXIge1xuICAgICAgd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktaGVhZGVyLXdpZHRoKTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktanVzdGlmaWNhdGlvbiB7XG4gICAgICBib3JkZXI6IDFweCBkYXNoZWQgZ3JleTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlci5oYXMtZXJyb3Ige1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1ib2R5IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1ib2R5IC5xLWl0ZW0ge1xuICAgICAgcGFkZGluZzogMDtcbiAgfVxuICAucS1pdGVtX19zZWN0aW9uLS1hdmF0YXIge1xuICAgICAgbWluLXdpZHRoOiAycHg7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhhbmRsZSB7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGFuZGxlOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IC44O1xuICB9XG4gIC5vbi1uYW1lLWhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWUge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMThweCk7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgLyogU2luY2Ugd2UgZGlzcGxheSBhIGJvcmRlciBvbiBob3ZlciwgbWF0Y2ggdGhlIHNwYWNlIGluIG5vbi1ob3ZlciBzdGF0ZSAqL1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWU6aG92ZXIge1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNjY2NjY2NlZTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktanVzdGlmaWNhdGlvbiB7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBtaW4taGVpZ2h0OiAxNnB4O1xuICAgICAgb3BhY2l0eTogMS4wO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2U7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIEBzdGFydGluZy1zdHlsZSB7XG4gICAgICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktanVzdGlmaWNhdGlvbiB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyIHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uIHtcbiAgICAgIHdpZHRoOiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LXJlbGF0aW9uLXdpZHRoKTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAudmVydGljYWwgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uIHtcbiAgICAgIGhlaWdodDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1yZWxhdGlvbi13aWR0aCk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb25pbmZvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogY2FsYyg1MCUgKyAxMHB4KTtcbiAgICAgIHdpZHRoOiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LXJlbGF0aW9uLXdpZHRoKTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBvcGFjaXR5OiAwLjI7XG4gIH1cbiAgLnZlcnRpY2FsIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbmluZm8ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktcmVsYXRpb24td2lkdGgpO1xuICAgICAgbGVmdDogY2FsYyg1MCUgLSA0MHB4KTtcbiAgfVxuXG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbjpob3ZlciAgIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbmluZm8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY3JpdGVyaW9uIHtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCBsaWdodGdyZXk7XG4gICAgICB3aWR0aDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1yZWxhdGlvbi13aWR0aCk7XG4gICAgICBtaW4taGVpZ2h0OiAxZW07XG4gICAgICBtYXgtaGVpZ2h0OiAyNHB4O1xuXG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyOmhvdmVyIC5vbi1uYW1lLWhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLmVsZW1lbnQtdG9vbGJhciB7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyIHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgZmxleDogMTtcbiAgfVxuICAudmVydGljYWwgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWZpbGxlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cbiAgLmRlc2NyaXB0ZW1zLWJhZGdlIHtcbiAgICAgIG9wYWNpdHk6IC42O1xuICB9XG4gIC5kZXNjcmlwdGVtcy1iYWRnZTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC5uZXdzc2MtYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgfVxuICAudmVydGljYWwgLm5ld3NzYy1idXR0b24ge1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICB3aWR0aDogNDhweDtcbiAgfVxuICAuY3JpdGVyaW9uLXRvb2x0aXAge1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB9XG4gIC5qdXN0aWZpY2F0aW9uLWRlc2NyaXB0ZW1zIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNyaXRlcmlvbiB7XG4gICAgICBjdXJzb3I6IHRleHQ7XG4gIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiX2hvaXN0ZWRfMiIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfaG9pc3RlZF80IiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl9ob2lzdGVkXzUiLCJfaG9pc3RlZF82IiwiX2hvaXN0ZWRfNyIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF8zIiwiX25vcm1hbGl6ZVN0eWxlIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlVk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVRleHRWTm9kZSIsInNwYW4iLCJjb2xvciIsIl9tZXJnZVByb3BzIiwiX3RvSGFuZGxlcnMiLCJfcmVuZGVyU2xvdCIsIl91c2VNb2RlbCIsIl93aXRoTW9kaWZpZXJzIiwiX3dpdGhDdHgiLCJjb21wbGV0aW9ucyIsIm5hbWUiLCJfaG9pc3RlZF8xMCIsIl9ob2lzdGVkXzkiLCJfd2l0aEtleXMiLCJjYXRlZ29yeU5hbWUiLCJjcml0ZXJpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRFLFVBQU0sUUFBUTtBQU1k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
