import { Q as QTooltip } from "./QTooltip-SbVmatKA.js";
import { a as DragElement, C as ColorizeIcon, D as DropZone } from "./DropZone-BLUbiXeD.js";
import { H as defineComponent, r as ref, bL as reactive, b as computed, _ as _export_sfc, P as createElementBlock, L as openBlock, a9 as createBaseVNode, N as createCommentVNode, ad as normalizeClass, ae as resolveComponent, af as normalizeStyle, S as Fragment, U as renderList, R as createVNode, K as createBlock, M as withCtx, X as toDisplayString, W as createTextVNode, c6 as SpecificSynchronicCategory, aV as renderSlot, aT as mergeProps, c7 as toHandlers, c8 as mergeModels, I as useProjectStore, c5 as useModel, J as useInterfaceStore, bP as storeToRefs, a7 as QIcon, Y as withModifiers, aq as withKeys, Q as QBtn, bf as QCheckbox, be as QInput, V as withDirectives } from "./index-C5pr5ZVX.js";
import { Q as QPopupEdit, N as NoteIcon } from "./QSlider-BJj3MC5f.js";
import { f as QItem, h as QItemSection, Q as QMenu } from "./format-J9u_yeIG.js";
import { Q as QList } from "./QList-CImjQvtT.js";
import { Q as QBadge } from "./QBadge-CTaYjlfh.js";
import { u as useQuasar, C as ClosePopup } from "./use-quasar-BEGOeJ8k.js";
import { Q as QSpace } from "./QSpace-BGzUmF9h.js";
import { E as ElementMenu } from "./ElementMenu-DSqdxZSF.js";
import { Q as QSelect } from "./QSelect-BG0HERjS.js";
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
      style: normalizeStyle({ backgroundColor: $props.category.color || "transparent" }),
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
const GenericSynchronicCategoryOverview = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-49504b1c"], ["__file", "GenericSynchronicCategoryOverview.vue"]]);
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
const SpecificSynchronicCategoryRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-322af428"], ["__file", "SpecificSynchronicCategoryRepresentation.vue"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbi0wc0l3QWFZUy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXcudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR2VuZXJpY0NhdGVnb3JpZXNPdmVydmlldy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy91dGlsLnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQW5ub3RhdGVkVGV4dC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EZXNjcmlwdGVtTW9kaWZpY2F0aW9uRGlhbG9nLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9KdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb24udnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlOYW1lSW5wdXQudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgY2xhc3M9XCJ0cmVlLWJveFwiXG4gICAgICAgOnN0eWxlPVwieyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfVwiPlxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICA8ZyA6Y2xhc3M9XCJkaXJlY3Rpb25cIlxuICAgICAgICAgOmRhdGEtY2hpbGRyZW4tY291bnQ9XCJjaGlsZHJlbkNvdW50XCI+XG4gICAgICAgIDxsaW5lXG4gICAgICAgICAgdi1pZj1cImNoaWxkcmVuQ291bnQgPiAxXCJcbiAgICAgICAgICB2ZWN0b3ItZWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICA6eDE9XCIwXCJcbiAgICAgICAgICA6eTE9XCJiYXJQb3NpdGlvbi55XCJcbiAgICAgICAgICA6eDI9XCIwXCJcbiAgICAgICAgICA6eTI9XCJkaW1lbnNpb25zLmhlaWdodCAtIGJhclBvc2l0aW9uLnlcIlxuICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICA6c3Ryb2tlLXdpZHRoPVwic3Ryb2tlV2lkdGhcIlxuICAgICAgICAgIGNsYXNzPVwicmVsYXRpb24tcGVycGVuZGljdWxhclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPGxpbmVcbiAgICAgICAgICB2ZWN0b3ItZWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICA6eDE9XCIwXCJcbiAgICAgICAgICA6eTE9XCJwYXJlbnRQb3NpdGlvbi55XCJcbiAgICAgICAgICA6eDI9XCJwYXJlbnRQb3NpdGlvbi54XCJcbiAgICAgICAgICA6eTI9XCJwYXJlbnRQb3NpdGlvbi55XCJcbiAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgOnN0cm9rZS13aWR0aD1cInN0cm9rZVdpZHRoXCJcbiAgICAgICAgICBjbGFzcz1cInJlbGF0aW9uLWxpbmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgdmVjdG9yLWVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG4gICAgICAgICAgdi1pZj1cImlzQWdncmVnYXRpb25cIlxuICAgICAgICAgIDpkPVwiYE0ke3BhcmVudFBvc2l0aW9uLnh9ICR7cGFyZW50UG9zaXRpb24ueX0gbCAtJHtzeW1ib2xIYWxmV2lkdGh9IC0ke3N5bWJvbEhhbGZIZWlnaHR9IGwgLSR7c3ltYm9sSGFsZldpZHRofSAke3N5bWJvbEhhbGZIZWlnaHR9IGwgJHtzeW1ib2xIYWxmV2lkdGh9ICR7c3ltYm9sSGFsZkhlaWdodH0gWmBcIlxuICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgIDpzdHJva2Utd2lkdGg9XCJzdHJva2VXaWR0aFwiIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgdi1pZj1cImlzU3BlY2lhbGl6YXRpb25cIlxuICAgICAgICAgIDpkPVwiYE0ke3BhcmVudFBvc2l0aW9uLnh9ICR7cGFyZW50UG9zaXRpb24ueX0gbCAtJHsgMiAqIHN5bWJvbEhhbGZXaWR0aCB9IC0kezIgKiBzeW1ib2xIYWxmSGVpZ2h0fSBsIDAgJHs0ICogc3ltYm9sSGFsZkhlaWdodH0gWmBcIlxuICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgIDpzdHJva2Utd2lkdGg9XCJzdHJva2VXaWR0aFwiIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgdi1pZj1cImlzUHJvcGVydHlcIlxuICAgICAgICAgIDpkPVwiYE0ke3BhcmVudFBvc2l0aW9uLnggLSBzeW1ib2xIYWxmV2lkdGh9ICR7cGFyZW50UG9zaXRpb24ueSAtIHN5bWJvbEhhbGZIZWlnaHR9IGwgJHtzeW1ib2xIYWxmV2lkdGh9ICR7c3ltYm9sSGFsZkhlaWdodH0gbCAtJHtzeW1ib2xIYWxmV2lkdGh9ICR7c3ltYm9sSGFsZkhlaWdodH1gXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgIDpzdHJva2Utd2lkdGg9XCJzdHJva2VXaWR0aFwiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyByZWYsIHJlYWN0aXZlLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGNoaWxkcmVuQ291bnQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAxIH0sXG4gICAgICBkaXJlY3Rpb246IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnaG9yaXpvbnRhbCcgfSxcbiAgICAgIHR5cGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH1cbiAgfSlcblxuICBjb25zdCBjb250YWluZXIgPSByZWYobnVsbClcbiAgY29uc3QgZGltZW5zaW9ucyA9IHJlYWN0aXZlKHtcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICBoZWlnaHQ6IDEwMFxuICB9KVxuXG4gIGNvbnN0IHN0cm9rZVdpZHRoID0gcmVmKDEpXG5cbiAgY29uc3Qgc3ltYm9sSGFsZldpZHRoID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIDIwXG4gIH0pXG5cbiAgY29uc3Qgc3ltYm9sSGFsZkhlaWdodCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNvdW50ID0gcHJvcHMuY2hpbGRyZW5Db3VudFxuICAgICAgcmV0dXJuIDYgLyAoMS4wNSAqKiBjb3VudClcbiAgfSlcblxuICBjb25zdCBpc0FnZ3JlZ2F0aW9uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudHlwZSA9PT0gJ2FnZ3JlZ2F0aW9uJylcbiAgY29uc3QgaXNTcGVjaWFsaXphdGlvbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnR5cGUgPT09ICdzcGVjaWFsaXphdGlvbicpXG4gIGNvbnN0IGlzUHJvcGVydHkgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5jaGlsZHJlbkNvdW50ID09PSAwKVxuXG4gIGNvbnN0IHBhcmVudFBvc2l0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHg6IGRpbWVuc2lvbnMud2lkdGgsXG4gICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAvIDJcbiAgfSkpXG5cbiAgY29uc3QgYmFyUG9zaXRpb24gPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgeDogZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAvIHByb3BzLmNoaWxkcmVuQ291bnQgLyAyXG4gIH0pKVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC50cmVlLWJveCBzdmcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgZy52ZXJ0aWNhbCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xuICB9XG4gIGdbZGF0YS1jaGlsZHJlbi1jb3VudD1cIjBcIl0gLnJlbGF0aW9uLWxpbmUge1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMztcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiByZWY9XCJjb250YWluZXJcIlxuICAgICAgIDpjbGFzcz1cIlsgJ2dlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY29udGFpbmVyJywgYGdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktJHtjYXRlZ29yeS5uYW1lfWAgXVwiXG4gICAgICAgOmRhdGEtZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeT1cImNhdGVnb3J5Lm5hbWVcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5XCJcbiAgICAgICAgIDpjbGFzcz1cInsgJ3Jvb3QtZ2VuZXJpYy1zeW5jaHJvbmljLWNhdGVnb3J5JzogY2F0ZWdvcnkuaXNSb290IH1cIlxuICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IGNhdGVnb3J5LmNvbG9yIHx8ICd0cmFuc3BhcmVudCcgfVwiXG4gICAgICAgICB2LWlmPVwiY2F0ZWdvcnlcIlxuICAgICAgICAgOmRhdGEtZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeT1cImNhdGVnb3J5Lm5hbWVcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW5cIj5cbiAgICAgICAgPGRpdiB2LWZvcj1cImMgaW4gY2F0ZWdvcnkuY2hpbGRyZW5cIiA6a2V5PVwiYy5uYW1lXCI+XG4gICAgICAgICAgPEdlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlPdmVydmlld1xuICAgICAgICAgICAgOnByb2plY3RJZD1cInByb2plY3RJZFwiXG4gICAgICAgICAgICA6bGF5b3V0PVwibGF5b3V0XCJcbiAgICAgICAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIlxuICAgICAgICAgICAgOmNhdGVnb3J5PVwiY1wiPlxuICAgICAgICAgIDwvR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvblwiXG4gICAgICAgICAgIHYtaWY9XCJjYXRlZ29yeS5jaGlsZHJlbj8ubGVuZ3RoXCI+XG4gICAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uXG4gICAgICAgICAgOnR5cGU9XCJhYnN0cmFjdGlvblR5cGVcIlxuICAgICAgICAgIDpkaXJlY3Rpb249XCJsYXlvdXRcIlxuICAgICAgICAgIDpjaGlsZHJlbkNvdW50PVwiY2F0ZWdvcnkuY2hpbGRyZW4/Lmxlbmd0aFwiPlxuICAgICAgICA8L1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyXCJcbiAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLWVycm9yJzogY2F0ZWdvcnkuZXJyb3JzPy5sZW5ndGggfVwiPlxuICAgICAgICA8RHJhZ0VsZW1lbnRcbiAgICAgICAgICBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICB0eXBlPVwiZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeVwiXG4gICAgICAgICAgOmRhdGE9XCJjYXRlZ29yeS5uYW1lXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWVcIj57eyBjYXRlZ29yeS5uYW1lIH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L0RyYWdFbGVtZW50PlxuICAgICAgICAgIDxxLXRvb2x0aXAgIGNsYXNzPVwiYmctcmVkLTVcIiBhbmNob3I9XCJ0b3AgcmlnaHRcIiBzZWxmPVwidG9wIGxlZnRcIiB2LWlmPVwiY2F0ZWdvcnkuZXJyb3JzPy5sZW5ndGhcIj5cbiAgICAgICAgICAgIHt7IGNhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJlcnJvciwga2V5IGluIGNhdGVnb3J5LmVycm9yc1wiXG4gICAgICAgICAgICAgICAgIDprZXk9XCJrZXlcIj5cbiAgICAgICAgICAgICAge3sgZXJyb3IgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgICAgIDxxLXRvb2x0aXAgYW5jaG9yPVwidG9wIHJpZ2h0XCIgc2VsZj1cInRvcCBsZWZ0XCIgdi1lbHNlPlxuICAgICAgICAgICAge3sgY2F0ZWdvcnkubmFtZSB9fVxuICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1pZj1cIiFjYXRlZ29yeS5pc1Jvb3RcIlxuICAgICAgICBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyXCJcbiAgICAgICAgPlxuICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvblxuICAgICAgICAgIDpkaXJlY3Rpb249XCJsYXlvdXRcIlxuICAgICAgICAgIDpjaGlsZHJlbkNvdW50PVwiMVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gIGltcG9ydCBEcmFnRWxlbWVudCBmcm9tICcuL0RyYWdFbGVtZW50LnZ1ZSdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24gZnJvbSAnLi9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uLnZ1ZSdcblxuICBpbXBvcnQgdHlwZSB7IEdlbmVyaWNDYXRlZ29yeSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG5cbiAgLy8gaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgLy8gY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IHByb3BzID0gd2l0aERlZmF1bHRzKGRlZmluZVByb3BzPHtcbiAgICAgIHByb2plY3RJZDogc3RyaW5nLFxuICAgICAgY2F0ZWdvcnk6ICBHZW5lcmljQ2F0ZWdvcnksXG4gICAgICBjdXJyZW50SW50ZXJ2aWV3SWQ6IHN0cmluZyB8IG51bGwsXG4gICAgICBsYXlvdXQ6IHN0cmluZ1xuICB9PigpLCB7XG4gICAgICBsYXlvdXQ6ICdob3Jpem9udGFsJ1xuICB9KVxuXG4gIC8vIEZJWE1FOiBkZXRlY3QgaW5jb25zaXN0ZW5jaWVzXG4gIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmNhdGVnb3J5Lmluc3RhbmNlc1swXT8uYWJzdHJhY3Rpb25UeXBlIHx8IFwiXCIpXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnkge1xuICAgICAgIG1hcmdpbjogMDtcbiAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICBmbGV4OiAxO1xuICAgICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAudmVydGljYWwgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICB9XG4gIC52ZXJ0aWNhbCAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB9XG4gIC52ZXJ0aWNhbCAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jb250YWluZXIge1xuICAgICAgbWFyZ2luOiAwIDRweDtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1uYW1lIHtcbiAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1vdmVydmlldy1mb250LXNpemUpO1xuICAgICAgd2lkdGg6IHZhcigtLW92ZXJ2aWV3LXdpZHRoKTtcbiAgICAgIGhlaWdodDogdmFyKC0tb3ZlcnZpZXctaGVpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uLFxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXIge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IGNhbGModmFyKC0tb3ZlcnZpZXctaGVpZ2h0KSArIDJweCk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgaGVpZ2h0OiAtbW96LWF2YWlsYWJsZTtcbiAgfVxuICAudmVydGljYWwgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb24ge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1vdmVydmlldy1oZWlnaHQpICsgMnB4KTtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLW92ZXJ2aWV3LWhlaWdodCkgKyAycHgpO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgZmxleDogMTtcbiAgfVxuICAudmVydGljYWwgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyLmhhcy1lcnJvciB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIH1cbiAgLnJvb3QtZ2VuZXJpYy1zeW5jaHJvbmljLWNhdGVnb3J5OmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZGRkO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZ2VuZXJpY2NhdGVnb3JpZXMtY29udGFpbmVyXCJcbiAgICAgICA6Y2xhc3M9XCJsYXlvdXRcIlxuICAgICAgIDprZXk9XCJwcm9qZWN0SWRcIlxuICAgICAgIDpkYXRhLXByb2plY3Q9XCJwcm9qZWN0SWRcIj5cblxuICAgIDxHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXdcbiAgICAgIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiXG4gICAgICA6a2V5PVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICA6cHJvamVjdElkPVwicHJvamVjdElkXCJcbiAgICAgIDpsYXlvdXQ9XCJsYXlvdXRcIlxuICAgICAgOmN1cnJlbnRJbnRlcnZpZXdJZD1cImN1cnJlbnRJbnRlcnZpZXdJZFwiXG4gICAgICA6Y2F0ZWdvcnk9XCJjYXRlZ29yeVwiPlxuICAgIDwvR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3PlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3IGZyb20gJy4vR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3LnZ1ZSdcblxuICBpbXBvcnQgdHlwZSB7IEdlbmVyaWNDYXRlZ29yeSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG5cbiAgaW50ZXJmYWNlIFByb3BzIHtcbiAgICAgIHByb2plY3RJZDogc3RyaW5nLFxuICAgICAgY2F0ZWdvcmllczogR2VuZXJpY0NhdGVnb3J5W10sXG4gICAgICBjdXJyZW50SW50ZXJ2aWV3SWQ6IHN0cmluZyxcbiAgICAgIGxheW91dDogc3RyaW5nXG4gIH1cblxuICB3aXRoRGVmYXVsdHMoZGVmaW5lUHJvcHM8UHJvcHM+KCksIHtcbiAgICAgIHByb2plY3RJZDogXCJcIixcbiAgICAgIGN1cnJlbnRJbnRlcnZpZXdJZDogXCJcIixcbiAgICAgIGxheW91dDogJ2hvcml6b250YWwnXG4gIH0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5nZW5lcmljY2F0ZWdvcmllcy1jb250YWluZXIgZGl2IHtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgfVxuICAgIC5nZW5lcmljY2F0ZWdvcmllcy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuZ2VuZXJpY2NhdGVnb3JpZXMtY29udGFpbmVyLnZlcnRpY2FsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICB9XG4gICAgIC5nZW5lcmljY2F0ZWdvcmllcy1jb250YWluZXIgPiAqIHtcbiAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgfVxuPC9zdHlsZT5cbiIsImltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSBmcm9tICdzdG9yZXMvbW9kZWxzL3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5J1xuXG4vLyAhS2VlcCBpbiBzeW5jIHdpdGggQ1NTIHZhcmlhYmxlcyBpbiBBcHAudnVlXG5jb25zdCBBTk5PVEFUSU9OX0NPTE9SUyA9IFtcbiAgXCIjZmY5Nzk3XCIsXG4gIFwiIzcwODRiMFwiLFxuICBcIiNmZmRjOTdcIixcbiAgXCIjN2JjZjdiXCJcbl1cblxuLyohXG4gKiBHcm91cCBpdGVtcyBmcm9tIGFuIGFycmF5IHRvZ2V0aGVyIGJ5IHNvbWUgY3JpdGVyaWEgb3IgdmFsdWUuXG4gKiAoYykgMjAxOSBUb20gQnJlbW1lciAoaHR0cHM6Ly90YnJlbWVyLmNvbS8pIGFuZCBDaHJpcyBGZXJkaW5hbmRpIChodHRwczovL2dvbWFrZXRoaW5ncy5jb20pLCBNSVQgTGljZW5zZSxcbiAqIEBwYXJhbSAge0FycmF5fSAgICAgICAgICAgYXJyICAgICAgVGhlIGFycmF5IHRvIGdyb3VwIGl0ZW1zIGZyb21cbiAqIEBwYXJhbSAge1N0cmluZ3xGdW5jdGlvbn0gY3JpdGVyaWEgVGhlIGNyaXRlcmlhIHRvIGdyb3VwIGJ5XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgIFRoZSBncm91cGVkIG9iamVjdFxuICovXG5mdW5jdGlvbiBncm91cEJ5IChhcnI6IEFycmF5PGFueT4sIGNyaXRlcmlhOiBzdHJpbmd8ICgoaXRlbTogYW55KSA9PiBhbnkpKSB7XG4gIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uIChvYmosIGl0ZW0pIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgY3JpdGVyaWEgaXMgYSBmdW5jdGlvbiB0byBydW4gb24gdGhlIGl0ZW0gb3IgYSBwcm9wZXJ0eSBvZiBpdFxuICAgIGNvbnN0IGtleSA9IHR5cGVvZiBjcml0ZXJpYSA9PT0gJ2Z1bmN0aW9uJyA/IGNyaXRlcmlhKGl0ZW0pIDogaXRlbVtjcml0ZXJpYV1cblxuICAgIC8vIElmIHRoZSBrZXkgZG9lc24ndCBleGlzdCB5ZXQsIGNyZWF0ZSBpdFxuICAgIGlmICghT2JqZWN0Lmhhc093bihvYmosIGtleSkpIHtcbiAgICAgIG9ialtrZXldID0gW11cbiAgICB9XG5cbiAgICAvLyBQdXNoIHRoZSB2YWx1ZSB0byB0aGUgb2JqZWN0XG4gICAgb2JqW2tleV0ucHVzaChpdGVtKVxuXG4gICAgLy8gUmV0dXJuIHRoZSBvYmplY3QgdG8gdGhlIG5leHQgaXRlbSBpbiB0aGUgbG9vcFxuICAgIHJldHVybiBvYmpcbiAgfSwge30pXG59XG5cbmZ1bmN0aW9uIGNsYW1wIChudW1iZXI6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG51bWJlciwgbWF4KSk7XG59XG5cbmZ1bmN0aW9uIHN0cmlwQ29udGV4dEZyb21OYW1lIChuYW1lOiBzdHJpbmcpIHtcbiAgLy8gU3RyaXAgdGhlIGNvbnRleHQgZnJvbSB0aGUgZ2l2ZW4gc3RyaW5nLCByZXR1cm4gd2l0aCB0cmFpbGluZyAvIGlmIHRoZXJlIHdhcyBvbmUuXG4gIC8vIGFuZCBkbyBub3Qgc3RyaXAgYW55dGhpbmcgaWYgdGhlIC8gaXMgbGVhZGluZ1xuICBjb25zdCBoYXNoSW5kZXggPSBuYW1lLmluZGV4T2YoU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkuQ09OVEVYVF9NQVJLRVIpXG4gIC8vIERvIG5vdCBzdHJpcCBpZiB0aGUgbmFtZSBzdGFydHMgd2l0aCBhIC9cbiAgaWYgKGhhc2hJbmRleCA+IDEpIHtcbiAgICByZXR1cm4gbmFtZS5zdWJzdHIoMCwgaGFzaEluZGV4ICsgMSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmFtZVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIFRleHRTZWxlY3Rpb24gPSB7XG4gIHN0YXJ0SW5kZXg6IG51bWJlcixcbiAgZW5kSW5kZXg6IG51bWJlcixcbiAgaW50ZXJ2aWV3SWQ6IHN0cmluZyxcbiAgdGV4dD86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOYW1lZEFjdGlvbiA9IFtcbiAgbmFtZTogc3RyaW5nLFxuICBhY3Rpb246IChlbGVtZW50OiBhbnkpID0+IGFueSxcbiAgdG9vbHRpcD86IHN0cmluZ1xuXVxuXG5leHBvcnQge1xuICBBTk5PVEFUSU9OX0NPTE9SUyxcbiAgZ3JvdXBCeSxcbiAgY2xhbXAsXG4gIHN0cmlwQ29udGV4dEZyb21OYW1lXG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ0cmFuc2NyaXB0XCJcbiAgICAgICByZWY9XCJ0cmFuc2NyaXB0XCJcbiAgICAgICBAbW91c2V1cD1cImVtaXRTZWxlY3Rpb25cIj5cbiAgICA8c3BhblxuICAgICAgdi1mb3I9XCJzcGFuIGluIHNwYW5zXCJcbiAgICAgIDprZXk9XCJzcGFuLmlkXCJcbiAgICAgIDpkYXRhLXNwYW4taWQ9XCJzcGFuLmlkXCJcbiAgICAgIDpkYXRhLWFubm90YXRpb24taWRzPVwic3Bhbi5hbm5vdGF0aW9uSWRzXCJcbiAgICAgIDpkYXRhLXRleHQtb2Zmc2V0PVwic3Bhbi5zdGFydFwiXG4gICAgICA6Y2xhc3M9XCJzcGFuQ2xhc3Nlc1tzcGFuLmlkXVwiXG4gICAgICA6c3R5bGU9XCJnZXRTcGFuU3R5bGUoc3BhbilcIlxuICAgICAgdi1iaW5kPVwic3BhbkF0dHJpYnV0ZXNcIlxuICAgICAgdi1vbj1cInByZXBwZWRTcGFuRXZlbnRzXCJcbiAgICAgID57eyBzcGFuLnRleHQgfX08L3NwYW4+XG4gICAgPHNsb3Q+XG4gICAgPC9zbG90PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIC8vIEB0cy1ub2NoZWNrXG4gIGNvbnN0IE9WRVJMQVBQSU5HX0NPTE9SID0gXCIjZGVhZGJhYmVcIlxuXG4gIC8vIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZGVyaHVlcnN0L2ZsYXR0ZW4tb3ZlcmxhcHBpbmctcmFuZ2VzL1xuICAvLyBJU0MgTGljZW5zZVxuICAvLyBDb3B5cmlnaHQgKGMpIDIwMTgsIEphbm5pcyBSXG4gIC8vIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmVcbiAgLy8gZm9yIGFueSBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkXG4gIC8vIHRoYXQgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyXG4gIC8vIGluIGFsbCBjb3BpZXMuXG4gIC8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTFxuICAvLyBXQVJSQU5USUVTIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEXG4gIC8vIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAgLy8gQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SXG4gIC8vIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG4gIC8vIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULFxuICAvLyBORUdMSUdFTkNFIE9SIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU5cbiAgLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cblxuICBjb25zdCBzb3J0ZWRJbnNlcnQgPSAoYXJyLCB2YWwpID0+IHtcbiAgICAgIGNvbnN0IGwgPSBhcnIubGVuZ3RoXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmICh2YWwgPD0gYXJyW2ldKSB7XG4gICAgICAgICAgICAgIGFyci5zcGxpY2UoaSwgMCwgdmFsKVxuICAgICAgICAgICAgICByZXR1cm4gaVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFyci5wdXNoKHZhbClcbiAgICAgIHJldHVybiBsXG4gIH1cblxuICBjb25zdCBmbGF0dGVuID0gKHJhbmdlcykgPT4ge1xuICAgICAgY29uc3QgU1RBUlQgPSAxXG4gICAgICBjb25zdCBTVE9QID0gMFxuXG4gICAgICBsZXQgbCwgaVxuXG4gICAgICBjb25zdCBpbmRleGVzID0gW11cbiAgICAgIGNvbnN0IGlkcyA9IFtdXG4gICAgICBjb25zdCB0eXBlcyA9IFtdXG5cbiAgICAgIGwgPSByYW5nZXMubGVuZ3RoXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgcmFuZ2UgPSByYW5nZXNbaV1cblxuICAgICAgICAgIGNvbnN0IHN0YXJ0SSA9IHNvcnRlZEluc2VydChpbmRleGVzLCByYW5nZVsxXSlcbiAgICAgICAgICBpZHMuc3BsaWNlKHN0YXJ0SSwgMCwgcmFuZ2VbMF0pXG4gICAgICAgICAgdHlwZXMuc3BsaWNlKHN0YXJ0SSwgMCwgU1RBUlQpXG5cbiAgICAgICAgICBjb25zdCBlbmRJID0gc29ydGVkSW5zZXJ0KGluZGV4ZXMsIHJhbmdlWzFdICsgcmFuZ2VbMl0pXG4gICAgICAgICAgaWRzLnNwbGljZShlbmRJLCAwLCByYW5nZVswXSlcbiAgICAgICAgICB0eXBlcy5zcGxpY2UoZW5kSSwgMCwgU1RPUClcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgTWFwKClcbiAgICAgIHN0YXRlLnNldChpZHNbMF0sIHRydWUpIC8vIGluaXRpYWwgc3RhdGVcblxuICAgICAgbCA9IGlkcy5sZW5ndGhcbiAgICAgIGZ1bmN0aW9uKiBpdGVyYXRvciAoKSB7XG4gICAgICAgICAgZm9yIChpID0gMTsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4ZXNbaV1cbiAgICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gaW5kZXhlc1tpIC0gMV1cblxuICAgICAgICAgICAgICBpZiAoaW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHlpZWxkIFtcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtIGxhc3RJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHN0YXRlLmtleXMoKSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodHlwZXNbaV0gPT09IFNUQVJUKSB7XG4gICAgICAgICAgICAgICAgICBzdGF0ZS5zZXQoaWRzW2ldLCB0cnVlKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc3RhdGUuZGVsZXRlKGlkc1tpXSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgW1N5bWJvbC5pdGVyYXRvcl06IGl0ZXJhdG9yIH1cbiAgfVxuXG4gIC8vIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL2N5Y2xlY3ljbGUvdnVlLWFubm90YXRlZC10ZXh0L1xuICAvLyBNSVQgTGljZW5zZVxuICAvLyBDb3B5cmlnaHQgKGMpIDIwMTkgTmljayBNb3JsZXlcblxuICAvLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICAvLyBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICAvLyBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcbiAgLy8gcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gIC8vIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gIC8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICAvLyBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZ1xuICAvLyBjb25kaXRpb25zOlxuICAvLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICAvLyBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAgLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICAvLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIC8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgLy8gU09GVFdBUkUuXG4gIGNvbnN0IGJ1aWxkU3Bhbkxpc3QgPSAodGV4dCwgYW5ub3RhdGlvbnMpID0+IHtcbiAgICAgIC8vIFByZXBhcmUgcmFuZ2UgbGlzdCB0byBzZW5kIHRvIGZsYXR0ZW4tb3ZlcmxhcHBpbmctc3BhbnMuZmxhdHRlbigpXG4gICAgICBsZXQgcmFuZ2VzID0gW11cbiAgICAgIGNvbnN0IGZ1bGxSYW5nZSA9IFtcImJhc2VUZXh0XCIsIDAsIHRleHQubGVuZ3RoXVxuICAgICAgcmFuZ2VzLnB1c2goZnVsbFJhbmdlKVxuICAgICAgY29uc3QgYW5ub3RhdGlvblJhbmdlcyA9IGFubm90YXRpb25zLm1hcChhbm5vdGF0aW9uID0+IHtcbiAgICAgICAgICByZXR1cm4gW2Fubm90YXRpb24uaWQsIGFubm90YXRpb24uc3RhcnQsIGFubm90YXRpb24ubGVuZ3RoXVxuICAgICAgfSlcbiAgICAgIHJhbmdlcyA9IHJhbmdlcy5jb25jYXQoYW5ub3RhdGlvblJhbmdlcylcbiAgICAgIC8vIEZsYXR0ZW5cbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gQXJyYXkuZnJvbShmbGF0dGVuKHJhbmdlcykpXG4gICAgICAvLyBFYWNoIHNlY3Rpb24gYmVjb21lcyBhIHNwYW5cbiAgICAgIGxldCBzZWN0aW9uVGV4dFN0YXJ0ID0gMFxuICAgICAgbGV0IHNwYW5JZCA9IDBcbiAgICAgIGNvbnN0IHNwYW5zID0gc2VjdGlvbnMubWFwKHNlY3Rpb24gPT4ge1xuICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IE51bWJlcihzZWN0aW9uWzBdKVxuICAgICAgICAgIGxldCBhbm5vdGF0aW9uSWRzID0gc2VjdGlvblsxXVxuICAgICAgICAgIGFubm90YXRpb25JZHMgPSBhbm5vdGF0aW9uSWRzLmZpbHRlcihhbm5vdGF0aW9uSWQgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYW5ub3RhdGlvbklkICE9PSAnYmFzZVRleHQnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zdCBzdGFydCA9IHNlY3Rpb25UZXh0U3RhcnRcbiAgICAgICAgICBjb25zdCBlbmQgPSBzZWN0aW9uVGV4dFN0YXJ0ICsgbGVuZ3RoXG4gICAgICAgICAgY29uc3Qgc2VjdGlvblRleHQgPSB0ZXh0LnNsaWNlKHN0YXJ0LCBlbmQpXG4gICAgICAgICAgY29uc3Qgc3BhbiA9IHtcbiAgICAgICAgICAgICAgaWQ6IHNwYW5JZCxcbiAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgICAgdGV4dDogc2VjdGlvblRleHQsXG4gICAgICAgICAgICAgIGFubm90YXRpb25JZHMsXG4gICAgICAgICAgICAgIGdldCBhbm5vdGF0aW9ucyAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYW5ub3RhdGlvbnMuZmlsdGVyKGFubm90YXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbm5vdGF0aW9uSWRzLmluY2x1ZGVzKGFubm90YXRpb24uaWQpXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW5JZCA9IHNwYW5JZCArIDFcbiAgICAgICAgICBzZWN0aW9uVGV4dFN0YXJ0ID0gZW5kXG4gICAgICAgICAgcmV0dXJuIHNwYW5cbiAgICAgIH0pXG4gICAgICByZXR1cm4gc3BhbnNcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIG5hbWU6IFwiQW5ub3RhdGVkVGV4dFwiLFxuICAgICAgZW1pdHM6IFsgXCJzZWxlY3Rpb25cIiBdLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgICB0ZXh0OiBTdHJpbmcsXG4gICAgICAgICAgYW5ub3RhdGlvbnM6IHtcbiAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGVhclNlbGVjdGlvbjoge1xuICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICBkZWVmYXVsdDogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldEFubm90YXRpb25Db2xvcjoge1xuICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIChhbm5vdGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAvLyBTaG91bGQgcmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjb2xvclxuICAgICAgICAgICAgICAgICAgLy8gSWYgbnVsbCwgbm8gc3R5bGUgYXR0cmlidXRlIHdpbGwgYmUgZ2VuZXJhdGVkXG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRBbm5vdGF0aW9uSW5mbzogRnVuY3Rpb24sXG4gICAgICAgICAgc3BhbkV2ZW50czoge1xuICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRTcGFuQ2xhc3Nlczoge1xuICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKHNwYW4pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7fVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzcGFuQXR0cmlidXRlczoge1xuICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgc3BhbkNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIHNwYW4gY2xhc3NlcyBmb3IgZWFjaCBzcGFuIGlkIHVzaW5nIGdldFNwYW5DbGFzc2VzXG4gICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHRoaXMuc3BhbnMubWFwKHNwYW4gPT4gWyBzcGFuLmlkLCB0aGlzLmdldFNwYW5DbGFzc2VzKHNwYW4pIF0pKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzcGFuczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjb25zdCBzcGFucyA9IGJ1aWxkU3Bhbkxpc3QodGhpcy50ZXh0LCB0aGlzLmFubm90YXRpb25zKVxuICAgICAgICAgICAgICByZXR1cm4gc3BhbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByZXBwZWRTcGFuRXZlbnRzICgpIHtcbiAgICAgICAgICAgICAgLy8gR2V0IGFubm90YXRpb25zIGFuZCBwYXNzIHRvIHRoZSBldmVudCBjYWxsYmFja1xuICAgICAgICAgICAgICBjb25zdCBzcGFuRXZlbnRzID0gdGhpcy5zcGFuRXZlbnRzXG4gICAgICAgICAgICAgIGNvbnN0IHByZXBwZWRTcGFuRXZlbnRzID0ge31cbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc3BhbkV2ZW50cykuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHNwYW5FdmVudHNbZXZlbnRUeXBlXVxuICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q2FsbGJhY2sgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW5JZCA9IHRoaXMuZWxlbWVudFNwYW5JZChlLnRhcmdldClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gdGhpcy5zcGFuQnlJZChzcGFuSWQpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbklkcyA9IHNwYW4uYW5ub3RhdGlvbklkc1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25zID0gdGhpcy5nZXRBbm5vdGF0aW9ucyhhbm5vdGF0aW9uSWRzKVxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUsIGFubm90YXRpb25zKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcHJlcHBlZFNwYW5FdmVudHNbZXZlbnRUeXBlXSA9IG5ld0NhbGxiYWNrXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVybiBwcmVwcGVkU3BhbkV2ZW50c1xuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgZWxlbWVudFNwYW5JZCAoZWwpIHtcbiAgICAgICAgICAgICAgbGV0IHNwYW5JZCA9IGVsLmF0dHJpYnV0ZXNbXCJkYXRhLXNwYW4taWRcIl0udmFsdWVcbiAgICAgICAgICAgICAgc3BhbklkID0gTnVtYmVyKHNwYW5JZClcbiAgICAgICAgICAgICAgcmV0dXJuIHNwYW5JZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3BhbkJ5SWQgKHNwYW5JZCkge1xuICAgICAgICAgICAgICBjb25zdCBzcGFucyA9IHRoaXMuc3BhbnMuZmlsdGVyKChzcGFuKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc3Bhbi5pZCA9PT0gc3BhbklkXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBzcGFuc1swXVxuICAgICAgICAgICAgICByZXR1cm4gc3BhblxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0QW5ub3RhdGlvbnMgKGFubm90YXRpb25JZHMpIHtcbiAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbnMgPSB0aGlzLmFubm90YXRpb25zLmZpbHRlcigoYW5ub3RhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFubm90YXRpb25JZHMuaW5jbHVkZXMoYW5ub3RhdGlvbi5pZClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuIGFubm90YXRpb25zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRTcGFuU3R5bGU6IGZ1bmN0aW9uIChzcGFuKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5nZXRTcGFuQ29sb3Ioc3BhbilcbiAgICAgICAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFNwYW5Db2xvcjogZnVuY3Rpb24gKHNwYW4pIHtcbiAgICAgICAgICAgICAgbGV0IGNvbG9yID0gbnVsbFxuICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uSWRzID0gc3Bhbi5hbm5vdGF0aW9uSWRzXG4gICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25zID0gdGhpcy5nZXRBbm5vdGF0aW9ucyhhbm5vdGF0aW9uSWRzKVxuICAgICAgICAgICAgICBsZXQgY29sb3JzID0gYW5ub3RhdGlvbnMubWFwKChhbm5vdGF0aW9uKSA9PlxuICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbm5vdGF0aW9uQ29sb3IoYW5ub3RhdGlvbilcbiAgICAgICAgICAgICAgKS5maWx0ZXIoY29sb3IgPT4gY29sb3IpXG5cbiAgICAgICAgICAgICAgY29sb3JzID0gWy4uLm5ldyBTZXQoY29sb3JzKV1cbiAgICAgICAgICAgICAgaWYgKGNvbG9ycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAvLyBPdmVybGFwcGluZyBzcGFucyAtIHVzZSB0aGUgb3ZlcmxhcCBjb2xvclxuICAgICAgICAgICAgICAgICAgY29sb3IgPSBPVkVSTEFQUElOR19DT0xPUlxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yID0gY29sb3JzWzBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gbnVsbCBpZiBub25lIHNwZWNpZmllZFxuICAgICAgICAgICAgICByZXR1cm4gY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFNlbGVjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApXG4gICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSByYW5nZS5zdGFydENvbnRhaW5lci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIgPT09IHRoaXMuJHJlZnMudHJhbnNjcmlwdCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGFyZSBpbiB0aGUgdHJhbnNjcmlwdCBjb250YWluZXIuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnRDb250YWluZXIvZW5kQ29udGFpbmVyIHNob3VsZCBiZSB0ZXh0IGVsZW1lbnQgd2hvc2UgcGFyZW50IGlzIGEgc3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJlZ2luID0gTnVtYmVyKHJhbmdlLnN0YXJ0Q29udGFpbmVyLnBhcmVudEVsZW1lbnQuZGF0YXNldC50ZXh0T2Zmc2V0KSArIHJhbmdlLnN0YXJ0T2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gTnVtYmVyKHJhbmdlLmVuZENvbnRhaW5lci5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGV4dE9mZnNldCkgKyByYW5nZS5lbmRPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGVhclNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0LnNsaWNlKGJlZ2luLCBlbmQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbWl0U2VsZWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRleHRTZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpXG4gICAgICAgICAgICAgIGlmICh0ZXh0U2VsZWN0aW9uICYmIHRleHRTZWxlY3Rpb24uYmVnaW4gIT09IHRleHRTZWxlY3Rpb24uZW5kKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwic2VsZWN0aW9uXCIsIHRleHRTZWxlY3Rpb24pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbiAgLnRyYW5zY3JpcHQge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgfVxuICAuY2F0ZWdvcnkxIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFubm90YXRpb24tY29sb3ItcmVkKTtcbiAgfVxuICAuY2F0ZWdvcnkyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFubm90YXRpb24tY29sb3ItYmx1ZSk7XG4gIH1cbiAgLmNhdGVnb3J5MyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbm5vdGF0aW9uLWNvbG9yLXllbGxvdyk7XG4gIH1cbiAgLmNhdGVnb3J5NCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbm5vdGF0aW9uLWNvbG9yLWdyZWVuKTtcbiAgfVxuICAuY2F0ZWdvcnkxLmNhdGVnb3J5MiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbm5vdGF0aW9uLWNvbG9yLW1peGVkKTtcbiAgfVxuICAuY2F0ZWdvcnkxLmNhdGVnb3J5MyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbm5vdGF0aW9uLWNvbG9yLW1peGVkKTtcbiAgfVxuICAuY2F0ZWdvcnkxLmNhdGVnb3J5NCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbm5vdGF0aW9uLWNvbG9yLW1peGVkKTtcbiAgfVxuICAuY2F0ZWdvcnkyLmNhdGVnb3J5MyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbm5vdGF0aW9uLWNvbG9yLW1peGVkKTtcbiAgfVxuICAuY2F0ZWdvcnkyLmNhdGVnb3J5NCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbm5vdGF0aW9uLWNvbG9yLW1peGVkKTtcbiAgfVxuICAuY2F0ZWdvcnkzLmNhdGVnb3J5NCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbm5vdGF0aW9uLWNvbG9yLW1peGVkKTtcbiAgfVxuICAvKiBGb3IgdW5kZWZpbmVkIGNhdGVnb3JpZXMgKi9cbiAgLmNhdGVnb3J5OSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjg3NGMxO1xuICB9XG4gIC5kZXNjcmlwdGVtIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIC5kZXNjcmlwdGVtLmRlc2NyaXB0ZW1zIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogZG91YmxlO1xuICB9XG4gIC5leHRyYWN0SGlnaGxpZ2h0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5leHRyYWN0T3JpZ2luYWwge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgLmhpZ2hsaWdodGVkLFxuICAuZGVzY3JpcHRlbS5oaWdobGlnaHRlZCxcbiAgLmNhdGVnb3J5MS5oaWdobGlnaHRlZCxcbiAgLmNhdGVnb3J5Mi5oaWdobGlnaHRlZCxcbiAgLmNhdGVnb3J5My5oaWdobGlnaHRlZCxcbiAgLmNhdGVnb3J5NC5oaWdobGlnaHRlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRlZC1jb2xvcikgIWltcG9ydGFudDtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRlc2NyaXB0ZW0tbW9kaWZpY2F0aW9uXCJcbiAgICAgICB2LWlmPVwibW9kZWxcIj5cbiAgICA8cCBjbGFzcz1cIm5vLW1hcmdpbiBuby1wYWRkaW5nXCI+VG8gbW9kaWZ5IHRoZSBkZXNjcmlwdGVtLCBzZWxlY3QgdGhlIG5ldyB0ZXh0IGFuZCB2YWxpZGF0ZS48L3A+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWl0YWxpYyBuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlRoZSA8dT5vcmlnaW5hbCBkZXNjcmlwdGVtPC91PiBpcyB1bmRlcmxpbmVkLCB0aGUgPGI+bmV3IHNlbGVjdGlvbjwvYj4gaXMgYm9sZC48L3A+XG4gICAgPEFubm90YXRlZFRleHRcbiAgICAgIGNsYXNzPVwidGV4dEFubm90YXRpb25Db21wb25lbnRcIlxuICAgICAgOnRleHQ9XCJjb250ZXh0VGV4dFwiXG4gICAgICA6YW5ub3RhdGlvbnM9XCJhbm5vdGF0aW9uc1wiXG4gICAgICA6Z2V0U3BhbkNsYXNzZXM9XCJnZXRTcGFuQ2xhc3Nlc1wiXG4gICAgICBjbGVhclNlbGVjdGlvblxuICAgICAgQHNlbGVjdGlvbj1cInRleHRTZWxlY3Rpb25cIlxuICAgICAgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgQW5ub3RhdGVkVGV4dCBmcm9tICcuL0Fubm90YXRlZFRleHQudnVlJ1xuICBpbXBvcnQgdHlwZSB7IFRleHRTZWxlY3Rpb24gfSBmcm9tICcuL3V0aWwnXG4gIGltcG9ydCB7IGNsYW1wIH0gZnJvbSAnLi91dGlsJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBtb2RlbCA9IGRlZmluZU1vZGVsPFRleHRTZWxlY3Rpb24+KClcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGluaXRpYWw6IHsgdHlwZTogT2JqZWN0IH1cbiAgfSlcblxuICBjb25zdCBpbnRlcnZpZXcgPSBjb21wdXRlZCgoKSA9PiBtb2RlbC52YWx1ZSA/IHN0b3JlLmdldEludGVydmlldyhtb2RlbC52YWx1ZS5pbnRlcnZpZXdJZCkgOiBudWxsKVxuXG4gIGNvbnN0IGNvbnRleHRUZXh0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKGludGVydmlldy52YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBpbnRlcnZpZXcudmFsdWUudGV4dFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGdldFNwYW5DbGFzc2VzIChzcGFuOiBhbnkpIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBzcGFuLmFubm90YXRpb25zLm1hcCgoYTogYW55KSA9PiBhLmNsYXNzKVxuICAgICAgcmV0dXJuIFsgLi4ubmV3IFNldChjbGFzc2VzKSBdLmpvaW4oXCIgXCIpXG4gIH1cblxuICBjb25zdCBpbml0aWFsTGVuZ3RoID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLmluaXRpYWwpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcHMuaW5pdGlhbC5lbmRJbmRleCAtIHByb3BzLmluaXRpYWwuc3RhcnRJbmRleFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGFubm90YXRpb25zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gUmV0dXJuIDMgYW5ub3RhdGlvbnM6XG4gICAgICAvLyAtIGhpZ2hsaWdodGVkIG9uZSAoZGVzY3JpcHRlbSlcbiAgICAgIC8vIC0gaGlkZGVuIHN0YXJ0XG4gICAgICAvLyAtIGhpZGRlbiBlbmRcbiAgICAgIGNvbnN0IG91dCA9IFtdXG4gICAgICBpZiAobW9kZWwudmFsdWUgJiYgcHJvcHMuaW5pdGlhbCkge1xuICAgICAgICAgIGNvbnN0IGludGVydmlld0lkID0gbW9kZWwudmFsdWUuaW50ZXJ2aWV3SWRcbiAgICAgICAgICBjb25zdCBtYXhJbmRleCA9IGludGVydmlldy52YWx1ZT8udGV4dC5sZW5ndGggPz8gMFxuICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG1vZGVsLnZhbHVlLmVuZEluZGV4IC0gbW9kZWwudmFsdWUuc3RhcnRJbmRleFxuICAgICAgICAgIGNvbnN0IGV4dHJhY3RTdGFydCA9IGNsYW1wKHByb3BzLmluaXRpYWwuc3RhcnRJbmRleCAtIGluaXRpYWxMZW5ndGgudmFsdWUgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIG1heEluZGV4KVxuICAgICAgICAgIGNvbnN0IGV4dHJhY3RFbmQgPSBjbGFtcChwcm9wcy5pbml0aWFsLmVuZEluZGV4ICsgaW5pdGlhbExlbmd0aC52YWx1ZSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIG1heEluZGV4KVxuICAgICAgICAgIGlmIChleHRyYWN0U3RhcnQpIHtcbiAgICAgICAgICAgICAgb3V0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgaW50ZXJ2aWV3SWQsXG4gICAgICAgICAgICAgICAgICBpZDogJ2hpZGRlbl9zdGFydCcsXG4gICAgICAgICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgICAgICAgIGxlbmd0aDogZXh0cmFjdFN0YXJ0LFxuICAgICAgICAgICAgICAgICAgY2xhc3M6ICdoaWRkZW4gZXh0cmFjdFN0YXJ0J1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBvdXQucHVzaCh7XG4gICAgICAgICAgICAgIGludGVydmlld0lkLFxuICAgICAgICAgICAgICBpZDogJ2N1cnJlbnRfZXh0cmFjdCcsXG4gICAgICAgICAgICAgIHN0YXJ0OiBwcm9wcy5pbml0aWFsLnN0YXJ0SW5kZXgsXG4gICAgICAgICAgICAgIGxlbmd0aDogcHJvcHMuaW5pdGlhbC5lbmRJbmRleCAtIHByb3BzLmluaXRpYWwuc3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgY2xhc3M6ICdleHRyYWN0T3JpZ2luYWwnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBvdXQucHVzaCh7XG4gICAgICAgICAgICAgIGludGVydmlld0lkLFxuICAgICAgICAgICAgICBpZDogJ25ld19zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICBzdGFydDogbW9kZWwudmFsdWUuc3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgICBjbGFzczogJ2V4dHJhY3RIaWdobGlnaHQnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoZXh0cmFjdEVuZCA8IG1heEluZGV4KSB7XG4gICAgICAgICAgICAgIG91dC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGludGVydmlld0lkLFxuICAgICAgICAgICAgICAgICAgaWQ6ICdoaWRkZW5fZW5kJyxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0OiBleHRyYWN0RW5kLFxuICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBtYXhJbmRleCAtIGV4dHJhY3RFbmQsXG4gICAgICAgICAgICAgICAgICBjbGFzczogJ2hpZGRlbiBleHRyYWN0RW5kJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRcbiAgfSlcblxuICBmdW5jdGlvbiB0ZXh0U2VsZWN0aW9uIChkYXRhOiBhbnkpIHtcbiAgICAgIGlmIChtb2RlbC52YWx1ZSkge1xuICAgICAgICAgIG1vZGVsLnZhbHVlLnN0YXJ0SW5kZXggPSBkYXRhLmJlZ2luXG4gICAgICAgICAgbW9kZWwudmFsdWUuZW5kSW5kZXggPSBkYXRhLmVuZFxuICAgICAgfVxuICB9XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAudGV4dEFubm90YXRpb25Db21wb25lbnQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRlbVwiXG4gICAgICAgdi1pZj1cImRlc2NyaXB0ZW1cIlxuICAgICAgIDpkYXRhLWRlc2NyaXB0ZW09XCJkZXNjcmlwdGVtLmlkXCJcbiAgICAgICA6dGl0bGU9XCJkZXNjcmlwdGVtLnRleHRcIj5cbiAgICA8RHJhZ0VsZW1lbnRcbiAgICAgIHR5cGU9XCJkZXNjcmlwdGVtXCJcbiAgICAgIGNsYXNzPVwiZGVzY3JpcHRlbS1oZWFkZXJcIlxuICAgICAgOmRhdGE9XCJkZXNjcmlwdGVtSWRcIj5cbiAgICAgIDxxLWljb25cbiAgICAgICAgcmVmPVwiaGFuZGxlXCJcbiAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGVtLWhhbmRsZVwiXG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIEBjbGljay5tZXRhPVwiZGVidWdcIlxuICAgICAgICBAY2xpY2s9XCJzZXRIaWdobGlnaHRlZFwiXG4gICAgICAgIG5hbWU9XCJtZGktZm9ybWF0LXF1b3RlLWNsb3NlLW91dGxpbmVcIj48L3EtaWNvbj5cbiAgICAgIDxzcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0ZW0tbGFiZWxcIj57eyBkZXNjcmlwdGVtLnRleHQgfX08L3NwYW4+XG4gICAgICAgIDxxLXBvcHVwLWVkaXQgdGl0bGU9XCJTZWxlY3QgdGhlIGFwcHJvcHJpYXRlIHRleHQgZnJhZ21lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhaXNSZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1xuICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkZXNjcmlwdGVtSnNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1zbG90PVwic2NvcGVcIj5cbiAgICAgICAgICA8RGVzY3JpcHRlbU1vZGlmaWNhdGlvbkRpYWxvZ1xuICAgICAgICAgICAgdi1tb2RlbD1cInNjb3BlLnZhbHVlXCJcbiAgICAgICAgICAgIDppbml0aWFsPVwic2NvcGUuaW5pdGlhbFZhbHVlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1wb3B1cC1lZGl0PlxuICAgICAgPC9zcGFuPlxuICAgICAgPHEtc3BhY2UgLz5cbiAgICAgIDxkaXYgdi1pZj1cIndpdGhDb250ZXh0XCJcbiAgICAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGVtLWNvbnRleHRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZXh0LWl0ZW1cIlxuICAgICAgICAgICAgICB2LWlmPVwiY29udGV4dC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeVwiPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICBuYW1lPVwibWRpLWFscGhhLXMtYm94LW91dGxpbmVcIj48L3EtaWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHktbmFtZVwiPnt7IGNvbnRleHQuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkubmFtZSB9fTwvZGl2PlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJjb250ZXh0LWl0ZW1cIlxuICAgICAgICAgIEBjbGljay5zdG9wPVwianVtcFRvTW9tZW50KGNvbnRleHQubW9tZW50LmlkKVwiXG4gICAgICAgICAgdi1pZj1cImNvbnRleHQubW9tZW50XCI+XG4gICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgIG5hbWU9XCJtZGktYWxwaGEtZC1ib3gtb3V0bGluZVwiPjwvcS1pY29uPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9tZW50LW5hbWVcIj57eyBjb250ZXh0Lm1vbWVudC5uYW1lIH19PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWlmPVwid2l0aE1lbnVcIlxuICAgICAgICAgICBjbGFzcz1cImRlc2NyaXB0ZW0tbWVudVwiPlxuICAgICAgICA8cS1zcGFjZSAvPlxuICAgICAgICA8RWxlbWVudE1lbnVcbiAgICAgICAgICA6YWN0aW9ucz1cIm1lbnVBY3Rpb25zXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9EcmFnRWxlbWVudD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgeyB1c2VJbnRlcmZhY2VTdG9yZSB9IGZyb20gJ3N0b3Jlcy9pbnRlcmZhY2UnXG4gIGltcG9ydCBEZXNjcmlwdGVtTW9kaWZpY2F0aW9uRGlhbG9nIGZyb20gJy4vRGVzY3JpcHRlbU1vZGlmaWNhdGlvbkRpYWxvZy52dWUnXG4gIGltcG9ydCBEcmFnRWxlbWVudCBmcm9tICcuL0RyYWdFbGVtZW50LnZ1ZSdcbiAgaW1wb3J0IEVsZW1lbnRNZW51IGZyb20gJy4vRWxlbWVudE1lbnUudnVlJ1xuICBpbXBvcnQgTW9tZW50IGZyb20gJ3N0b3Jlcy9tb2RlbHMvbW9tZW50J1xuICBpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkgZnJvbSAnc3RvcmVzL21vZGVscy9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG4gIGNvbnN0IGlzdG9yZSA9IHVzZUludGVyZmFjZVN0b3JlKClcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGRlc2NyaXB0ZW1JZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICAgIHdpdGhDb250ZXh0OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXG4gICAgICB3aXRoTWVudTogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0sXG4gICAgICBpc1JlYWRvbmx5OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH1cbiAgfSlcblxuICBjb25zdCBkZXNjcmlwdGVtID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuZ2V0RGVzY3JpcHRlbShwcm9wcy5kZXNjcmlwdGVtSWQpKVxuXG4gIGNvbnN0IHtcbiAgICAgIGhpZ2hsaWdodGVkRGVzY3JpcHRlbUlkXG4gIH0gPSBzdG9yZVRvUmVmcyhpc3RvcmUpXG5cbiAgZnVuY3Rpb24gZGVidWcgKCkge1xuICAgICAgKHdpbmRvdyBhcyBhbnkpLmRlc2NyaXB0ZW0gPSBkZXNjcmlwdGVtLnZhbHVlXG4gICAgICBjb25zb2xlLmxvZyhcIkRlc2NyaXB0ZW1cIiwgZGVzY3JpcHRlbS52YWx1ZT8udG9KU09OKCkpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRIaWdobGlnaHRlZCAoKSB7XG4gICAgICBpZiAoaGlnaGxpZ2h0ZWREZXNjcmlwdGVtSWQudmFsdWUgPT09IHByb3BzLmRlc2NyaXB0ZW1JZCkge1xuICAgICAgICAgIGhpZ2hsaWdodGVkRGVzY3JpcHRlbUlkLnZhbHVlID0gXCJcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoaWdobGlnaHRlZERlc2NyaXB0ZW1JZC52YWx1ZSA9IHByb3BzLmRlc2NyaXB0ZW1JZFxuICAgICAgfVxuICB9XG5cbiAgdHlwZSBDb250ZXh0ID0ge1xuICAgICAgbW9tZW50PzogTW9tZW50LFxuICAgICAgc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk/OiBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSxcblxuICB9XG5cbiAgLy8gY29udGV4dCBpcyBhbiBvYmplY3Qgd2l0aCBvcHRpb25hbCBtb21lbnQgLyBzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB2YWx1ZXNcbiAgY29uc3QgY29udGV4dCA9IGNvbXB1dGVkKCgpOiBDb250ZXh0ID0+IHtcbiAgICAgIGlmIChkZXNjcmlwdGVtLnZhbHVlICYmIGRlc2NyaXB0ZW0udmFsdWUuanVzdGlmaWNhdGlvbikge1xuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHN0b3JlLmdldEp1c3RpZmljYXRpb25QYXJlbnQoZGVzY3JpcHRlbS52YWx1ZS5qdXN0aWZpY2F0aW9uLnBhcmVudElkKVxuICAgICAgICAgIC8vIE1vbWVudDogJHttb21lbnQubmFtZX1cbiAgICAgICAgICAvLyBDYXRlZ29yeTogJHtjYXRlZ29yeS5tb21lbnQubmFtZX0gfCAke2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgLy8gUHJvcGVydHk6ICR7cHJvcGVydHkuY2F0ZWdvcnlpbnN0YW5jZS5tb21lbnQubmFtZX0gfCAke3Byb3BlcnR5LmNhdGVnb3J5aW5zdGFuY2UubmFtZX0gfCAke3Byb3BlcnR5Lm5hbWV9OiAke3Byb3BlcnR5LnZhbHVlfVxuICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5hc0NvbnRleHRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4geyB9XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4geyB9XG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgZGVzY3JpcHRlbUpzb24gPSBjb21wdXRlZCh7XG4gICAgICBnZXQ6ICgpID0+IGRlc2NyaXB0ZW0udmFsdWU/LnRvSlNPTigpID8/IHt9LFxuICAgICAgc2V0OiAodmFsdWUpID0+IHtcbiAgICAgICAgICBzdG9yZS51cGRhdGVEZXNjcmlwdGVtKHByb3BzLmRlc2NyaXB0ZW1JZCwge1xuICAgICAgICAgICAgICBzdGFydEluZGV4OiB2YWx1ZS5zdGFydEluZGV4LFxuICAgICAgICAgICAgICBlbmRJbmRleDogdmFsdWUuZW5kSW5kZXhcbiAgICAgICAgICB9KVxuICAgICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGp1bXBUb01vbWVudCAoaWRlbnRpZmllcjogc3RyaW5nKSB7XG4gICAgICBpc3RvcmUuc2V0SGlnaGxpZ2h0ZWRNb21lbnRJZChpZGVudGlmaWVyKVxuICB9XG5cbiAgaW1wb3J0IHR5cGUgeyBOYW1lZEFjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvdXRpbC50cydcblxuICBjb25zdCBtZW51QWN0aW9uczogTmFtZWRBY3Rpb25bXSA9IFtcbiAgICAgIFsgXCJEdXBsaWNhdGVcIiwgKCkgPT4gc3RvcmUuZHVwbGljYXRlRGVzY3JpcHRlbShwcm9wcy5kZXNjcmlwdGVtSWQpIF0sXG4gICAgICBbIFwiRGVsZXRlXCIsICgpID0+IHN0b3JlLmRlbGV0ZURlc2NyaXB0ZW0ocHJvcHMuZGVzY3JpcHRlbUlkKSBdXG4gIF1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuZGVzY3JpcHRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGhlaWdodDogMS4yZW07XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5kZXNjcmlwdGVtLWhlYWRlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5kZXNjcmlwdGVtLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1kZXNjcmlwdGVtLXdpZHRoKTtcbiAgICAgIGhlaWdodDogMS4yZW07XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbiAgLmRlc2NyaXB0ZW0taGFuZGxlIHtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5kZXNjcmlwdGVtLWhhbmRsZTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAuNztcbiAgfVxuICAuZGVzY3JpcHRlbS1jb250ZXh0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5jb250ZXh0LWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IHgtc21hbGw7XG4gIH1cbiAgLmNvbnRleHQtaXRlbSArIC5jb250ZXh0LWl0ZW0ge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICB9XG4gIC5kZXNjcmlwdGVtLW1lbnUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgfVxuICAuZGVzY3JpcHRlbS1oZWFkZXI6aG92ZXIgLmRlc2NyaXB0ZW0tbWVudSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwianVzdGlmaWNhdGlvblwiXG4gICAgICAgdi1pZj1cImp1c3RpZmljYXRpb25JZFwiXG4gICAgICAgOmRhdGEtanVzdGlmaWNhdGlvbj1cImp1c3RpZmljYXRpb25JZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZpY2F0aW9uLW1ldGFkYXRhXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImp1c3RpZmljYXRpb24tbmFtZVwiPnt7IGp1c3RpZmljYXRpb24/Lm5hbWUgfX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPHVsIGNsYXNzPVwianVzdGlmaWNhdGlvbi1kZXNjcmlwdGVtc1wiPlxuICAgICAgPGxpIHYtZm9yPVwiZGVzY3JpcHRlbSBpbiBqdXN0aWZpY2F0aW9uPy5kZXNjcmlwdGVtc1wiIDprZXk9XCJkZXNjcmlwdGVtLmlkXCI+XG4gICAgICAgIDxEZXNjcmlwdGVtUmVwcmVzZW50YXRpb24gOmRlc2NyaXB0ZW1JZD1cImRlc2NyaXB0ZW0uaWRcIj5cbiAgICAgICAgPC9EZXNjcmlwdGVtUmVwcmVzZW50YXRpb24+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uIGZyb20gJy4vRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAganVzdGlmaWNhdGlvbklkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9XG4gIH0pXG4gIGNvbnN0IGp1c3RpZmljYXRpb24gPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5nZXRKdXN0aWZpY2F0aW9uKHByb3BzLmp1c3RpZmljYXRpb25JZCkpXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmp1c3RpZmljYXRpb24tZGVzY3JpcHRlbXMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LWRlc2NyaXB0ZW0td2lkdGgpICsgNTBweCk7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250ZXh0XCJcbiAgICAgICB2LWlmPVwiY29udGV4dC5vcmlnaW5hbFwiPlxuICAgIDxlbT5Ob20gb3JpZ2luYWw8L2VtPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbnRleHRcIlxuICAgICAgIHYtZWxzZT5cbiAgICA8ZGl2IGNsYXNzPVwiY2hpbGRyZW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiXG4gICAgICAgICAgIDp0aXRsZT1cImMubmFtZVwiXG4gICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1jaGlsZCc6IGlzQ3VycmVudENoaWxkKGMubmFtZSkgfVwiXG4gICAgICAgICAgIHYtZm9yPVwiYyBpbiBjb250ZXh0LmNoaWxkcmVuXCJcbiAgICAgICAgICAgOmtleT1cImMuaWRcIj5cbiAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICBzaXplPVwiMTBwdFwiXG4gICAgICAgICAgdi1pZj1cIiEgaXNDdXJyZW50Q2hpbGQoYy5uYW1lKVwiXG4gICAgICAgICAgdi1tb2RlbD1cIm5ld0NoaWxkcmVuXCJcbiAgICAgICAgICA6dmFsPVwiYy5uYW1lXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGlsZC1jYXRlZ29yeS1uYW1lXCI+e3tjLm5hbWV9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyZWxhdGlvblwiPlxuICAgICAgPFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb25cbiAgICAgICAgdi1pZj1cImNvbnRleHQucmVmZXJlbmNlXCJcbiAgICAgICAgOnR5cGU9XCJjb250ZXh0LnJlZmVyZW5jZS5hYnN0cmFjdGlvblR5cGVcIlxuICAgICAgICA6Y2hpbGRyZW5Db3VudD1cImNvbnRleHQuY2hpbGRyZW4ubGVuZ3RoXCI+XG4gICAgICA8L1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5IHJlZmVyZW5jZVwiXG4gICAgICAgICB2LWlmPVwiY29udGV4dC5yZWZlcmVuY2VcIlxuICAgICAgICAgOmNsYXNzPVwieyAnaXMtY3VycmVudCc6IGlzQ3VycmVudE5hbWUoY29udGV4dC5yZWZlcmVuY2UubmFtZSkgfVwiXG4gICAgICAgICA6dGl0bGU9XCJjb250ZXh0LnJlZmVyZW5jZS5uYW1lXCI+XG4gICAgICB7e2NvbnRleHQucmVmZXJlbmNlLm5hbWV9fVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYXJlbnRzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnkgcGFyZW50XCJcbiAgICAgICAgICAgOnRpdGxlPVwicGFyZW50Py5uYW1lID8/ICcnXCJcbiAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLXBhcmVudCc6IGlzQ3VycmVudFBhcmVudChwYXJlbnQ/Lm5hbWUpIH1cIlxuICAgICAgICAgICB2LWZvcj1cInBhcmVudCBpbiBjb250ZXh0LnBhcmVudHNcIlxuICAgICAgICAgICA6a2V5PVwicGFyZW50Py5pZCA/PyAnJ1wiPlxuICAgICAgICB7e3BhcmVudD8ubmFtZSA/PyAnJ319XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxxLXNlbGVjdFxuICAgIGRlbnNlXG4gICAgQGZvY3VzPVwiKCRldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuc2VsZWN0KClcIlxuICAgIGZpbGxlZFxuICAgIDptb2RlbC12YWx1ZT1cIm5hbWVcIlxuICAgIHVzZS1pbnB1dFxuICAgIGhpZGUtc2VsZWN0ZWRcbiAgICBmaWxsLWlucHV0XG4gICAgbWVudS1hbmNob3I9XCJ0b3AgcmlnaHRcIlxuICAgIDppbnB1dC1kZWJvdW5jZT1cIjBcIlxuICAgIDpvcHRpb25zPVwiY29udGV4dD8uY29tcGxldGlvbnMgPz8gW11cIlxuICAgIEBmaWx0ZXI9XCJmaWx0ZXJOYW1lc1wiXG4gICAgQGlucHV0LXZhbHVlPVwic2V0TmFtZVwiXG4gICAgQGtleXVwLmVudGVyPVwidmFsaWRhdGVcIlxuICAgIGF1dG9mb2N1c1xuICAgID5cbiAgICA8dGVtcGxhdGUgdi1zbG90Om5vLW9wdGlvbj5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cInRleHQtZ3JleVwiPlxuICAgICAgICAgIE5vIHJlc3VsdHNcbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvcS1zZWxlY3Q+XG4gIDxkaXYgY2xhc3M9XCJyb3cgd3JhcCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICA8cS1idG5cbiAgICAgIGZsYXRcbiAgICAgIHNpemU9XCJzbVwiXG4gICAgICBAY2xpY2s9XCJjYW5jZWxcIj5DYW5jZWw8L3EtYnRuPlxuICAgIDxxLWJ0blxuICAgICAgZmxhdFxuICAgICAgc2l6ZT1cInNtXCJcbiAgICAgIEBjbGljaz1cInZhbGlkYXRlXCI+T0s8L3EtYnRuPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5IGZyb20gJ3N0b3Jlcy9tb2RlbHMvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnknXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uIGZyb20gJy4vU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbi52dWUnXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0cyhbICdjaGFuZ2UnIF0pXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBjYXRlZ29yeTogeyB0eXBlOiBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSwgZGVmYXVsdDogbnVsbCB9LFxuICAgICAgZ2VuZXJpY0dyYXBoczogeyB0eXBlOiBPYmplY3QsIGRlZmF1bHQ6IG51bGwgfVxuICB9KVxuXG4gIGNvbnN0IG5hbWUgPSByZWYocHJvcHMuY2F0ZWdvcnkubmFtZSlcblxuICBjb25zdCBuZXdDaGlsZHJlbiA9IHJlZihbXSlcblxuICBjb25zdCBjb21wbGV0aW9ucyA9IHJlZihbXSBhcyBzdHJpbmdbXSlcblxuICBjb25zdCBjaGlsZHJlbk5hbWVzID0gY29tcHV0ZWQoKCkgPT4gbmV3IFNldChwcm9wcy5jYXRlZ29yeT8uY2hpbGRyZW4ubWFwKGMgPT4gYy5uYW1lKSA/PyBbXSkpXG5cbiAgZnVuY3Rpb24gdmFsaWRhdGUgKCkge1xuICAgICAgLy8gSWYgdGhlIHNlbGVjdCBoYXMgZm9jdXMsIHRoZW4gdXNlIHRoZSBzZWxlY3RlZCBuYW1lLiBFbHNlIHVzZSB0aGUgaW5wdXQgbmFtZSB2YWx1ZS5cblxuICAgICAgaWYgKHByb3BzLmNhdGVnb3J5KSB7XG4gICAgICAgICAgLyogSWYgdGhlIG5ldyBuYW1lIGlzIGZyb20gYW4gZXhpc3RpbmcgY2F0ZWdvcnkgdGhhdCBoYXMgYW4gYWJzdHJhY3Rpb25UeXBlLCB0aGVuIGFsc28gdXBkYXRlIGl0cyBhYnN0cmFjdGlvblR5cGUgKi9cbiAgICAgICAgICBjb25zdCBnZW5lcmljU291cmNlID0gcHJvcHMuZ2VuZXJpY0dyYXBocyA/IHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW3Byb3BzLmNhdGVnb3J5LnF1YWxpZmllZE5hbWUobmFtZS52YWx1ZSldIDoge31cbiAgICAgICAgICBjb25zdCBhYnN0cmFjdGlvblR5cGUgPSBnZW5lcmljU291cmNlPy5hYnN0cmFjdGlvblR5cGUgfHwgJydcbiAgICAgICAgICBzdG9yZS51cGRhdGVFbGVtZW50KHByb3BzLmNhdGVnb3J5LCB7IG5hbWU6IG5hbWUudmFsdWUsIGFic3RyYWN0aW9uVHlwZSB9KVxuICAgICAgfVxuXG4gICAgICBuZXdDaGlsZHJlbi52YWx1ZS5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgIGNvbnN0IGdlbmVyaWNTb3VyY2UgPSBwcm9wcy5nZW5lcmljR3JhcGhzID8gcHJvcHMuZ2VuZXJpY0dyYXBocy5ieU5hbWVbcHJvcHMuY2F0ZWdvcnkucXVhbGlmaWVkTmFtZShuKV0gOiB7fVxuICAgICAgICAgIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGdlbmVyaWNTb3VyY2U/LmFic3RyYWN0aW9uVHlwZSB8fCAnJ1xuICAgICAgICAgIHN0b3JlLmFkZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2F0ZWdvcnkuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW46JHtwcm9wcy5jYXRlZ29yeS5pZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJzdHJhY3Rpb25UeXBlKVxuICAgICAgfSlcbiAgICAgIC8vIFNpbmNlIHZhbGlkYXRlIG1heSBiZSBjYWxsZWQgdHdpY2UsIHJlc2V0IHRoZSBuZXdDaGlsZHJlbiBhcnJheVxuICAgICAgbmV3Q2hpbGRyZW4udmFsdWUgPSBbXVxuXG4gICAgICBlbWl0KCdjaGFuZ2UnLCBuYW1lLnZhbHVlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsICgpIHtcbiAgICAgIGVtaXQoJ2NoYW5nZScsIHByb3BzLmNhdGVnb3J5Lm5hbWUpXG4gIH1cblxuICBjb25zdCBjb250ZXh0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3JpZXNCeU5hbWUocHJvcHMuY2F0ZWdvcnkucHJvamVjdElkLCBuYW1lLnZhbHVlKVxuICAgICAgY29uc3QgY29tcGxldGlvbnMgPSBzdG9yZS5nZXRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeU5hbWVzQnlQcmVmaXgocHJvcHMuY2F0ZWdvcnkucHJvamVjdElkLCBuYW1lLnZhbHVlKVxuICAgICAgaWYgKCFjYXRlZ29yaWVzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7IG9yaWdpbmFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25zIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBPYmplY3QuZnJvbUVudHJpZXMoY2F0ZWdvcmllcy5tYXAoYyA9PiBjLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBbIGNoaWxkLm5hbWUsIGNoaWxkIF0pKS5mbGF0KCkpXG4gICAgICAgICAgY29uc3QgcGFyZW50cyA9IE9iamVjdC5mcm9tRW50cmllcyhjYXRlZ29yaWVzLmZpbHRlcihjID0+IGMucGFyZW50KS5tYXAoYyA9PiBbYy5wYXJlbnQ/Lm5hbWUsIGMucGFyZW50IF0pKVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHJlZmVyZW5jZTogY2F0ZWdvcmllc1swXSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFsgLi4uT2JqZWN0LnZhbHVlcyhjaGlsZHJlbikgXSBhcyBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVtdLFxuICAgICAgICAgICAgICBwYXJlbnRzOiBbIC4uLk9iamVjdC52YWx1ZXMocGFyZW50cykgXSBhcyBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVtdLFxuICAgICAgICAgICAgICBjb21wbGV0aW9uc1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBpc0N1cnJlbnRDaGlsZCAobmFtZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW5OYW1lcy52YWx1ZS5oYXMobmFtZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ3VycmVudFBhcmVudCAobmFtZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gcHJvcHMuY2F0ZWdvcnkucGFyZW50Py5uYW1lID09IG5hbWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ3VycmVudE5hbWUgKG5hbWU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHByb3BzLmNhdGVnb3J5Py5uYW1lID09PSBuYW1lXG4gIH1cblxuICBmdW5jdGlvbiBzZXROYW1lICh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICBuYW1lLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRlck5hbWVzIChfdmFsOiBzdHJpbmcsIHVwZGF0ZTogKGNiOiAoKSA9PiB2b2lkKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImZpbHRlck5hbWVzXCIsIHZhbCwgY29udGV4dC52YWx1ZT8uY29tcGxldGlvbnMpXG4gICAgICB1cGRhdGUoKCkgPT4ge1xuICAgICAgICAgIGNvbXBsZXRpb25zLnZhbHVlID0gY29udGV4dC52YWx1ZT8uY29tcGxldGlvbnMgPz8gW11cbiAgICAgIH0pXG4gIH1cbjwvc2NyaXB0PlxuXG4gIDxzdHlsZSBzY29wZWQ+XG4gIC5jYXRlZ29yeSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IDJweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBmb250LXNpemU6IDhweDtcbiAgICAgIHdpZHRoOiB2YXIoLS1vdmVydmlldy13aWR0aCkgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogdmFyKC0tb3ZlcnZpZXctaGVpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIC5jb250ZXh0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleDogMDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmNoaWxkcmVuLCAucGFyZW50cyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXg6IDA7XG4gIH1cbiAgLnJlZmVyZW5jZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICB9XG4gIC5yZWxhdGlvbiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBtaW4taGVpZ2h0OiB2YXIoLS1vdmVydmlldy1oZWlnaHQpO1xuICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIH1cbiAgLmNvbXBsZXRpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWF4LWhlaWdodDogNWVtO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICAuaGFzLWNoaWxkLFxuICAuaGFzLXBhcmVudCxcbiAgLmlzLWN1cnJlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiByZWY9XCJjb250YWluZXJcIlxuICAgICAgIDpjbGFzcz1cIltcbiAgICAgICAgICAgICAgICdzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgYHNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LSR7Y2F0ZWdvcnlJZH1gLFxuICAgICAgICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgICAgICBdXCJcbiAgICAgICA6ZGF0YS1zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeT1cImNhdGVnb3J5SWRcIj5cblxuICAgIDxkaXYgOmNsYXNzPVwiWyAnc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnknIF1cIlxuICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IGNhdGVnb3J5LmNvbG9yIHx8ICd0cmFuc3BhcmVudCcgfVwiXG4gICAgICAgICB2LWlmPVwiY2F0ZWdvcnlcIlxuICAgICAgICAgOmRhdGEtc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJjYXRlZ29yeUlkXCI+XG5cbiAgICAgIDxkaXYgOmNsYXNzPVwiWyAnc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW4nIF1cIlxuICAgICAgICAgICB2LWlmPVwid2l0aENoaWxkcmVuXCI+XG4gICAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgdi1mb3I9XCJjIGluIGNhdGVnb3J5LmNoaWxkcmVuXCJcbiAgICAgICAgICA6a2V5PVwiYy5pZFwiXG4gICAgICAgICAgOmlzR2VuZXJpYz1cImlzR2VuZXJpY1wiXG4gICAgICAgICAgOmdlbmVyaWNHcmFwaHM9XCJnZW5lcmljR3JhcGhzXCJcbiAgICAgICAgICA6bGF5b3V0PVwibGF5b3V0XCJcbiAgICAgICAgICA6d2l0aENoaWxkcmVuPVwid2l0aENoaWxkcmVuXCJcbiAgICAgICAgICA6aGlkZUp1c3RpZmljYXRpb25zPVwiaGlkZUp1c3RpZmljYXRpb25zXCJcbiAgICAgICAgICA6Y2F0ZWdvcnlJZD1cImMuaWRcIj5cbiAgICAgICAgPC9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxEcm9wWm9uZSBkYXRhPVwiYWRkXCJcbiAgICAgICAgICAgICAgICB0eXBlcz1cInVwbXQvZGVzY3JpcHRlbSB1cG10L2Fubm90YXRpb24gdXBtdC9zZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgICAgICBAYW5ub3RhdGlvbj1cImRyb3BwZWRBbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBAc2VsZWN0aW9uPVwiZHJvcHBlZFNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgQGRlc2NyaXB0ZW09XCJkcm9wcGVkRGVzY3JpcHRlbVwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1qdXN0aWZpY2F0aW9uXCJcbiAgICAgICAgICAgICB2LWlmPVwiaXNKdXN0aWZpY2F0aW9uVmlzaWJsZVwiPlxuICAgICAgICAgIDx1bCB2LWlmPVwiaXNHZW5lcmljXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJqdXN0aWZpY2F0aW9uLWRlc2NyaXB0ZW1zXCI+XG4gICAgICAgICAgICA8bGkgdi1mb3I9XCJkZXNjcmlwdGVtIGluIGNhdGVnb3J5RGVzY3JpcHRlbXNcIiA6a2V5PVwiZGVzY3JpcHRlbS5pZFwiPlxuICAgICAgICAgICAgICA8RGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAgICAgOmRlc2NyaXB0ZW1JZD1cImRlc2NyaXB0ZW0uaWRcIlxuICAgICAgICAgICAgICAgIDp3aXRoTWVudT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICA6aXNSZWFkb25seT1cInRydWVcIj5cbiAgICAgICAgICAgICAgPC9EZXNjcmlwdGVtUmVwcmVzZW50YXRpb24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPEp1c3RpZmljYXRpb25SZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICA6anVzdGlmaWNhdGlvbklkPVwiY2F0ZWdvcnkuanVzdGlmaWNhdGlvbj8uaWQgPz8gJydcIj5cbiAgICAgICAgICA8L0p1c3RpZmljYXRpb25SZXByZXNlbnRhdGlvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvRHJvcFpvbmU+XG5cbiAgICAgIDxEcm9wWm9uZSA6ZGF0YT1cImBpbjoke2NhdGVnb3J5SWR9YFwiXG4gICAgICAgICAgICAgICAgdHlwZXM9XCJ1cG10L3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5IHVwbXQvZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeSB1cG10L3NlbGVjdGlvbiB1cG10L2Rlc2NyaXB0ZW0gdXBtdC9hbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBAYW5ub3RhdGlvbj1cImRyb3BwZWRDcmVhdGluZ0Fubm90YXRpb25cIlxuICAgICAgICAgICAgICAgIEBzZWxlY3Rpb249XCJkcm9wcGVkQ3JlYXRpbmdTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIEBkZXNjcmlwdGVtPVwiZHJvcHBlZENyZWF0aW5nRGVzY3JpcHRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb25cIj5cbiAgICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvblxuICAgICAgICAgICAgOnR5cGU9XCJjYXRlZ29yeS5hYnN0cmFjdGlvblR5cGVcIlxuICAgICAgICAgICAgOmRpcmVjdGlvbj1cImxheW91dFwiXG4gICAgICAgICAgICA6Y2hpbGRyZW5Db3VudD1cImNhdGVnb3J5LmNoaWxkcmVuLmxlbmd0aFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uaW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNyaXRlcmlvblwiPlxuICAgICAgICAgICAgICB7eyBjcml0ZXJpb24gfX1cbiAgICAgICAgICAgICAgPHEtdG9vbHRpcFxuICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICBkZW5zZT5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJjcml0ZXJpb25cIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjcml0ZXJpb24tdG9vbHRpcFwiPnt7IGNyaXRlcmlvbiB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIENyaXRlcmlvblxuICAgICAgICAgICAgICA8L3EtdG9vbHRpcD5cbiAgICAgICAgICAgICAgPHEtcG9wdXAtZWRpdCB2LW1vZGVsPVwiY3JpdGVyaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvLXNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zbG90PVwic2NvcGVcIj5cbiAgICAgICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDcml0ZXJpb25cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzY29wZS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICBAa2V5dXAuY3RybC5lbnRlcj1cInNjb3BlLnNldFwiXG4gICAgICAgICAgICAgICAgICBAa2V5dXAuZXNjPVwic2NvcGUuY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICBhdXRvZ3Jvd1xuICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzIC8+XG4gICAgICAgICAgICAgIDwvcS1wb3B1cC1lZGl0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RWxlbWVudE1lbnVcbiAgICAgICAgICAgICAgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbm1lbnVcIlxuICAgICAgICAgICAgICA6YWN0aW9ucz1cInJlbGF0aW9uQWN0aW9uc1wiIC8+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgY2xhc3M9XCJwcmludC1yZW1vdmVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICB0aXRsZT1cIkNyZWF0ZSBhIG5ldyBjaGlsZCBjYXRlZ29yeVwiXG4gICAgICAgICAgICAgIGljb249XCJtZGktcGx1c1wiPlxuICAgICAgICAgICAgICA8cS1tZW51XG4gICAgICAgICAgICAgICAgdG91Y2gtcG9zaXRpb24+XG4gICAgICAgICAgICAgICAgPHEtbGlzdCBkZW5zZSBzdHlsZT1cIm1pbi13aWR0aDogMTAwcHhcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoW2xhYmVsLCBuYW1lXSwgaSkgaW4gcHJvcG9zZWRDaGlsZHJlbk5hbWVzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJjcmVhdGVDaGlsZENhdGVnb3J5KG5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ecm9wWm9uZT5cblxuICAgICAgPERyb3Bab25lIGRhdGE9XCJhZGRcIlxuICAgICAgICAgICAgICAgIHR5cGVzPVwidXBtdC9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB1cG10L2dlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnkgdXBtdC9zZWxlY3Rpb24gdXBtdC9kZXNjcmlwdGVtIHVwbXQvYW5ub3RhdGlvbiB1cG10L2NvbG9yXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgQHNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5PVwiZHJvcHBlZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICBAZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeT1cImRyb3BwZWRHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICBAYW5ub3RhdGlvbj1cImRyb3BwZWRBbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBAc2VsZWN0aW9uPVwiZHJvcHBlZFNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgQGRlc2NyaXB0ZW09XCJkcm9wcGVkRGVzY3JpcHRlbVwiXG4gICAgICAgICAgICAgICAgQGNvbG9yPVwiZHJvcHBlZENvbG9yXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXJcIlxuICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1lcnJvcic6IGdlbmVyaWNFbGVtZW50LmVycm9ycz8ubGVuZ3RoIH1cIj5cbiAgICAgICAgICA8RHJhZ0VsZW1lbnRcbiAgICAgICAgICAgIHR5cGU9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeVwiXG4gICAgICAgICAgICA6ZGF0YT1cImNhdGVnb3J5SWRcIlxuICAgICAgICAgICAgQGNsaWNrLm1ldGE9XCJkZWJ1Z1wiPlxuICAgICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgICA6bmFtZT1cImNhdGVnb3J5SWNvblwiPlxuICAgICAgICAgICAgPC9xLWljb24+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWVcIj57eyBjYXRlZ29yeU5hbWUgfX1cbiAgICAgICAgICAgICAgPHEtcG9wdXAtZWRpdCB2LW1vZGVsPVwiY2F0ZWdvcnlOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNsb3Q9XCJzY29wZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0by1zYXZlPlxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeU5hbWVJbnB1dCBAY2hhbmdlPVwic2NvcGUuY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmdlbmVyaWNHcmFwaHM9XCJnZW5lcmljR3JhcGhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNhdGVnb3J5PVwiY2F0ZWdvcnlcIiAvPlxuICAgICAgICAgICAgICA8L3EtcG9wdXAtZWRpdD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxxLXRvb2x0aXAgIGNsYXNzPVwiYmctcmVkLTVcIiBhbmNob3I9XCJ0b3AgcmlnaHRcIiBzZWxmPVwidG9wIGxlZnRcIiB2LWlmPVwiZ2VuZXJpY0VsZW1lbnQuZXJyb3JzPy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAge3sgY2F0ZWdvcnlOYW1lIH19XG4gICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJlcnJvciwga2V5IGluIGdlbmVyaWNFbGVtZW50LmVycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgOmtleT1cImtleVwiPlxuICAgICAgICAgICAgICAgIHt7IGVycm9yIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9xLXRvb2x0aXA+XG4gICAgICAgICAgICA8cS10b29sdGlwIHYtZWxzZT5cbiAgICAgICAgICAgICAge3sgY2F0ZWdvcnlOYW1lIH19ICh7eyBpc0dlbmVyaWMgPyAnR2VuZXJpYyBTeW5jaHJvbmljIENhdGVnb3J5JyA6ICdTcGVjaWZpYyBTeW5jaHJvbmljIENhdGVnb3J5JyB9fVxuICAgICAgICAgICAgPC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9EcmFnRWxlbWVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbWVudC10b29sYmFyXCI+XG4gICAgICAgICAgICA8cS1iYWRnZVxuICAgICAgICAgICAgICBAY2xpY2s9XCJkaXNwbGF5SnVzdGlmaWNhdGlvbiA9ICFkaXNwbGF5SnVzdGlmaWNhdGlvblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZGVzY3JpcHRlbXMtYmFkZ2VcIlxuICAgICAgICAgICAgICBjb2xvcj1cImdyZXktNlwiXG4gICAgICAgICAgICAgIDp0aXRsZT1cImAke2NhdGVnb3J5RGVzY3JpcHRlbUNvdW50fSBkZXNjcmlwdGVtc2BcIlxuICAgICAgICAgICAgICByb3VuZGVkPnt7IGNhdGVnb3J5RGVzY3JpcHRlbUNvdW50IH19PC9xLWJhZGdlPlxuICAgICAgICAgICAgPE5vdGVJY29uXG4gICAgICAgICAgICAgIDplbGVtZW50PVwiY2F0ZWdvcnlcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW1lbnQtdG9vbGJhci1zZWNvbmRhcnkgb24tbmFtZS1ob3ZlclwiPlxuICAgICAgICAgICAgICA8Q29sb3JpemVJY29uXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImNhdGVnb3J5Q29sb3JcIiAvPlxuICAgICAgICAgICAgICA8RWxlbWVudE1lbnVcbiAgICAgICAgICAgICAgICA6YWN0aW9ucz1cIm1lbnVBY3Rpb25zXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRHJvcFpvbmU+XG5cbiAgICAgIDxEcm9wWm9uZSA6ZGF0YT1cImBiZWZvcmU6JHtjYXRlZ29yeUlkfWBcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJjYXRlZ29yeS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkXCJcbiAgICAgICAgICAgICAgICB0eXBlcz1cInVwbXQvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkgdXBtdC9nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5IHVwbXQvc2VsZWN0aW9uIHVwbXQvZGVzY3JpcHRlbSB1cG10L2Fubm90YXRpb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1wdHktcGFkZGluZyBuZXdzc2MtZHJvcHpvbmVcIlxuICAgICAgICAgICAgICAgIEBzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeT1cImRyb3BwZWRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgQGdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJkcm9wcGVkR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgQGFubm90YXRpb249XCJkcm9wcGVkQ3JlYXRpbmdBbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBAc2VsZWN0aW9uPVwiZHJvcHBlZENyZWF0aW5nU2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBAZGVzY3JpcHRlbT1cImRyb3BwZWRDcmVhdGluZ0Rlc2NyaXB0ZW1cIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwiY3JlYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoYGJlZm9yZToke2NhdGVnb3J5SWR9YClcIlxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgY2xhc3M9XCJuZXdzc2MtYnV0dG9uIHByaW50LWhpZGRlblwiXG4gICAgICAgICAgOmljb249XCJpc1ZlcnRpY2FsID8gJ21kaS1tZW51LXVwJyA6ICdtZGktbWVudS1yaWdodCdcIj5cbiAgICAgICAgICA8cS10b29sdGlwPkNyZWF0ZSBhIHBhcmVudCBjYXRlZ29yeTwvcS10b29sdGlwPlxuICAgICAgICA8L3EtYnRuPlxuICAgICAgPC9Ecm9wWm9uZT5cblxuICAgICAgPGRpdlxuICAgICAgICB2LWlmPVwiY2F0ZWdvcnkucGFyZW50SWQgJiYgd2l0aENoaWxkcmVuXCJcbiAgICAgICAgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXJcIlxuICAgICAgICA+XG4gICAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uIDpkaXJlY3Rpb249XCJsYXlvdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2hpbGRyZW5Db3VudD1cIjFcIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSdcbiAgaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJ1xuICBpbXBvcnQgeyBzdHJpcENvbnRleHRGcm9tTmFtZSB9IGZyb20gJy4vdXRpbCdcblxuICBpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkgZnJvbSAnc3RvcmVzL21vZGVscy9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSdcblxuICBpbXBvcnQgRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uIGZyb20gJy4vRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IEp1c3RpZmljYXRpb25SZXByZXNlbnRhdGlvbiBmcm9tICcuL0p1c3RpZmljYXRpb25SZXByZXNlbnRhdGlvbi52dWUnXG4gIGltcG9ydCBEcm9wWm9uZSBmcm9tICcuL0Ryb3Bab25lLnZ1ZSdcbiAgaW1wb3J0IERyYWdFbGVtZW50IGZyb20gJy4vRHJhZ0VsZW1lbnQudnVlJ1xuICBpbXBvcnQgQ2F0ZWdvcnlOYW1lSW5wdXQgZnJvbSAnLi9DYXRlZ29yeU5hbWVJbnB1dC52dWUnXG4gIGltcG9ydCBDb2xvcml6ZUljb24gZnJvbSAnLi9Db2xvcml6ZUljb24udnVlJ1xuICBpbXBvcnQgTm90ZUljb24gZnJvbSAnLi9Ob3RlSWNvbi52dWUnXG4gIGltcG9ydCBFbGVtZW50TWVudSBmcm9tICcuL0VsZW1lbnRNZW51LnZ1ZSdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24gZnJvbSAnLi9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uLnZ1ZSdcblxuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgeyB1c2VJbnRlcmZhY2VTdG9yZSB9IGZyb20gJ3N0b3Jlcy9pbnRlcmZhY2UnXG5cbiAgY29uc3QgJHEgPSB1c2VRdWFzYXIoKVxuXG4gIGNvbnN0IGlzdG9yZSA9IHVzZUludGVyZmFjZVN0b3JlKClcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgeyBjdXJyZW50UHJvamVjdElkIH0gPSBzdG9yZVRvUmVmcyhpc3RvcmUpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBjYXRlZ29yeUlkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxuICAgICAgZ2VuZXJpY0dyYXBoczogeyB0eXBlOiBPYmplY3QsIGRlZmF1bHQ6IG51bGwgfSxcbiAgICAgIGxheW91dDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiaG9yaXpvbnRhbFwiIH0sIC8vIGhvcml6b250YWwgb3IgdmVydGljYWxcbiAgICAgIGhpZGVKdXN0aWZpY2F0aW9uczogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgICAgaXNHZW5lcmljOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXG4gICAgICB3aXRoQ2hpbGRyZW46IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9XG4gIH0pXG5cbiAgY29uc3QgY2F0ZWdvcnkgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5nZXRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShwcm9wcy5jYXRlZ29yeUlkKSlcblxuICBjb25zdCBjYXRlZ29yeU5hbWUgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiBjYXRlZ29yeS52YWx1ZSA/IGNhdGVnb3J5LnZhbHVlLm5hbWUgOiBcIlwiXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgICAgLyogSWYgdGhlIG5ldyBuYW1lIGlzIGZyb20gYW4gZXhpc3RpbmcgY2F0ZWdvcnkgdGhhdCBoYXMgYW4gYWJzdHJhY3Rpb25UeXBlLCB0aGVuIGFsc28gdXBkYXRlIGl0cyBhYnN0cmFjdGlvblR5cGUgKi9cbiAgICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGNhdGVnb3J5LnZhbHVlPy5xdWFsaWZpZWROYW1lKHZhbHVlKSA/PyB2YWx1ZVxuICAgICAgICAgIGNvbnN0IGdlbmVyaWNTb3VyY2UgPSBwcm9wcy5nZW5lcmljR3JhcGhzID8gcHJvcHMuZ2VuZXJpY0dyYXBocy5ieU5hbWVbZnVsbE5hbWVdIDoge31cbiAgICAgICAgICBjb25zdCBhYnN0cmFjdGlvblR5cGUgPSBnZW5lcmljU291cmNlPy5hYnN0cmFjdGlvblR5cGUgfHwgJydcbiAgICAgICAgICBzdG9yZS51cGRhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShwcm9wcy5jYXRlZ29yeUlkLCB7IG5hbWU6IHZhbHVlLCBhYnN0cmFjdGlvblR5cGU6IGFic3RyYWN0aW9uVHlwZSB9KVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3J5Q29sb3IgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiBjYXRlZ29yeS52YWx1ZSA/IGNhdGVnb3J5LnZhbHVlLmNvbG9yIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAoY29sb3I6IHN0cmluZykge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZVN5bmNocm9uaWNDYXRlZ29yeUNvbG9yKGNhdGVnb3J5LnZhbHVlPy5wcm9qZWN0SWQsIGNhdGVnb3J5LnZhbHVlPy5uYW1lLCBjb2xvcilcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBjYXRlZ29yeUljb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5pc0dlbmVyaWMgPyAgXCJtZGktYWxwaGEtcy1ib3hcIiA6IFwibWRpLWFscGhhLXMtYm94LW91dGxpbmVcIilcblxuICBjb25zdCBjcml0ZXJpb24gPSBjb21wdXRlZCh7XG4gICAgICBnZXQ6ICgpID0+IGNhdGVnb3J5LnZhbHVlPy5jcml0ZXJpb24gPz8gJycsXG4gICAgICBzZXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQsIHsgY3JpdGVyaW9uOiB2YWx1ZSB9KVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGlzTGVhZiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiAhY2F0ZWdvcnkudmFsdWU/LmNoaWxkcmVuLmxlbmd0aFxuICB9KVxuXG4gIGNvbnN0IGlzVmVydGljYWwgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5sYXlvdXQgPT0gJ3ZlcnRpY2FsJylcblxuICAvLyBJbml0aWFsIHN0YXRlIGZvciBkaXNwbGF5SnVzdGlmaWNhdGlvblxuICAvLyBIaWRlIGJ5IGRlZmF1bHRcbiAgY29uc3QgZGlzcGxheUp1c3RpZmljYXRpb24gPSByZWYoZmFsc2UpXG5cbiAgY29uc3QgaXNKdXN0aWZpY2F0aW9uVmlzaWJsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS52YWx1ZT8uanVzdGlmaWNhdGlvbj8uZGVzY3JpcHRlbXM/Lmxlbmd0aCAmJiBkaXNwbGF5SnVzdGlmaWNhdGlvbi52YWx1ZVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3J5RGVzY3JpcHRlbXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAoISBjYXRlZ29yeS52YWx1ZSB8fCAhIGN1cnJlbnRQcm9qZWN0SWQudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcy5pc0dlbmVyaWMpIHtcbiAgICAgICAgICAvLyBRdWVyeSBmb3IgYWxsIGRlc2NyaXB0ZW1zIGZvciBhbGwgY2F0ZWdvcmllc1xuICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBzdG9yZS5nZXRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yaWVzQnlOYW1lIChjdXJyZW50UHJvamVjdElkLnZhbHVlLCBjYXRlZ29yeS52YWx1ZS5uYW1lKVxuICAgICAgICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcChjYXQgPT4gY2F0Lmp1c3RpZmljYXRpb24/LmRlc2NyaXB0ZW1zIHx8IFtdKS5mbGF0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlPy5qdXN0aWZpY2F0aW9uPy5kZXNjcmlwdGVtcyB8fCBbXVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3J5RGVzY3JpcHRlbUNvdW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5RGVzY3JpcHRlbXMudmFsdWUubGVuZ3RoXG4gIH0pXG5cbiAgaWYgKGlzTGVhZi52YWx1ZSkge1xuICAgICAgZGlzcGxheUp1c3RpZmljYXRpb24udmFsdWUgPSAhIHByb3BzLmhpZGVKdXN0aWZpY2F0aW9ucyB8fCBjYXRlZ29yeURlc2NyaXB0ZW1Db3VudC52YWx1ZSA+IDBcbiAgfVxuXG4gIGNvbnN0IGdlbmVyaWNFbGVtZW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKGNhdGVnb3J5LnZhbHVlICYmIHByb3BzLmdlbmVyaWNHcmFwaHMpIHtcbiAgICAgICAgICByZXR1cm4gIHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW2NhdGVnb3J5LnZhbHVlLmZ1bGxOYW1lXSB8fCB7IGNoaWxkcmVuTmFtZXM6IG5ldyBTZXQoKSB9XG4gICAgICB9XG4gICAgICAvLyBJbiBhbGwgb3RoZXIgY2FzZXMsIHJldHVybiBlbXB0eSBkaWN0XG4gICAgICByZXR1cm4ge31cbiAgfSlcblxuICBjb25zdCBwcm9wb3NlZENoaWxkcmVuTmFtZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50Q2hpbGRyZW4gPSBuZXcgU2V0KChjYXRlZ29yeS52YWx1ZT8uY2hpbGRyZW4gfHwgW10pLm1hcChjaGlsZCA9PiBjaGlsZC5mdWxsTmFtZSkpXG4gICAgICBjb25zdCBjaGlsZHJlbk5hbWVzID0gWyAuLi5nZW5lcmljRWxlbWVudC52YWx1ZS5jaGlsZHJlbk5hbWVzLmRpZmZlcmVuY2UoY3VycmVudENoaWxkcmVuKSBdLnRvU29ydGVkKClcbiAgICAgIHJldHVybiBbIFtcIk5ldyBjaGlsZCBjYXRlZ29yeVwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgIC4uLmNoaWxkcmVuTmFtZXMubWFwKChuYW1lOiBzdHJpbmcpID0+IFsgbmFtZSwgc3RyaXBDb250ZXh0RnJvbU5hbWUobmFtZSkgXSkgXVxuICB9KVxuXG4gIGZ1bmN0aW9uIGRlYnVnICgpIHtcbiAgICAgICh3aW5kb3cgYXMgYW55KS5jYXRlZ29yeSA9IGNhdGVnb3J5LnZhbHVlO1xuICAgICAgY29uc29sZS5sb2coXCJTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVwiLCB7IGNhdGVnb3J5OiBjYXRlZ29yeS52YWx1ZSB9KVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0NvbnRlbnQgKCkge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSBjb250ZW50IGlzIGV4cGFuZGVkIGFuZCB2aXNpYmxlXG4gICAgICBjb25zb2xlLmxvZyhcIlNob3VsZCBleHBhbmQgU1NDXCIpXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSAod2hlcmU6IHN0cmluZywgbmFtZTogc3RyaW5nID0gXCJcIikge1xuICAgICAgaWYgKGNhdGVnb3J5LnZhbHVlKSB7XG4gICAgICAgICAgaWYgKCEgbmFtZSkge1xuICAgICAgICAgICAgICBuYW1lID0gaXN0b3JlLm5ld1NTQ0lkKClcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBjYXRlZ29yeS52YWx1ZS5xdWFsaWZpZWROYW1lKG5hbWUpXG4gICAgICAgICAgY29uc3QgZ2VuZXJpY1NvdXJjZSA9IHByb3BzLmdlbmVyaWNHcmFwaHMgPyBwcm9wcy5nZW5lcmljR3JhcGhzLmJ5TmFtZVtmdWxsTmFtZV0gOiB7fVxuICAgICAgICAgIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGdlbmVyaWNTb3VyY2U/LmFic3RyYWN0aW9uVHlwZSB8fCAnJ1xuICAgICAgICAgIHN0b3JlLmFkZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkudmFsdWUuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0aW9uVHlwZSlcbiAgICAgICAgICBzaG93Q29udGVudCgpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkgKGNhdGVnb3J5SWQ6IHN0cmluZykge1xuICAgICAgLy8gRE5EIG9uIGEgY2F0ZWdvcnkgdG8gcmVwYXJlbnRcbiAgICAgIGlmICghY2F0ZWdvcnlJZCkge1xuICAgICAgICAgIC8vIEVtcHR5IGNhdGVnb3J5SWQ6IGNyZWF0ZSBhIG5ldyBjaGlsZFxuICAgICAgICAgIGNyZWF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGBpbjoke3Byb3BzLmNhdGVnb3J5SWR9YClcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNvdXJjZSA9IHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGNhdGVnb3J5SWQpXG4gICAgICBpZiAoY2F0ZWdvcnlJZCAhPT0gcHJvcHMuY2F0ZWdvcnlJZCAmJiBzb3VyY2UpIHtcbiAgICAgICAgICAvLyBJdCB3YXMgbWF5YmUgYSByb290IGNhdGVnb3J5LiBSZW1vdmUgaXQgZnJvbSB0aGUgcm9vdFxuICAgICAgICAgIC8vIGNhdGVnb3JpZXMgYW5kIHJlcGFyZW50LlxuICAgICAgICAgIGNvbnN0IHNwZWNpZmljc3luY2hyb25pY21vZGVsSWQgPSBzb3VyY2Uuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZFxuICAgICAgICAgIGlmIChzcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkKSB7XG4gICAgICAgICAgICAgIC8vIEl0IHdhcyBhIHJvb3QgY2F0ZWdvcnkgLSBtb3ZlIGFsbCBpdHMgY2hpbGRyZW4gYXMgcm9vdCBjYXRlZ29yaWVzXG4gICAgICAgICAgICAgIHNvdXJjZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGNoaWxkLmlkLCB7IHNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBudWxsIH0pKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzdG9yZS51cGRhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShjYXRlZ29yeUlkLCB7XG4gICAgICAgICAgICAgIHNwZWNpZmljc3luY2hyb25pY21vZGVsSWQ6IG51bGwsXG4gICAgICAgICAgICAgIHBhcmVudElkOiBwcm9wcy5jYXRlZ29yeUlkXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5IChjYXRlZ29yeU5hbWU6IHN0cmluZywgd2hlcmU6IHN0cmluZykge1xuICAgICAgaWYgKHdoZXJlID09PSAnYWRkJykge1xuICAgICAgICAgIC8vIFRoZXJlIGlzIG5vIFwiYWRkXCIgZm9yIG5vd1xuICAgICAgICAgIHdoZXJlID0gYGluOiR7cHJvcHMuY2F0ZWdvcnlJZH1gXG4gICAgICB9XG4gICAgICBpZiAoY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBnZW5lcmljU291cmNlID0gcHJvcHMuZ2VuZXJpY0dyYXBocyA/IHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW2NhdGVnb3J5TmFtZV0gOiB7fVxuICAgICAgICAgIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGdlbmVyaWNTb3VyY2U/LmFic3RyYWN0aW9uVHlwZSB8fCAnJ1xuICAgICAgICAgIHN0b3JlLmFkZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHN0cmlwQ29udGV4dEZyb21OYW1lKGNhdGVnb3J5TmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkudmFsdWUuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0aW9uVHlwZSlcbiAgICAgICAgICBzaG93Q29udGVudCgpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkRGVzY3JpcHRlbSAoZGVzY3JpcHRlbUlkOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0ZW0gPSBzdG9yZS5nZXREZXNjcmlwdGVtKGRlc2NyaXB0ZW1JZClcbiAgICAgIGlmIChkZXNjcmlwdGVtKSB7XG4gICAgICAgICAgc3RvcmUuYWRkVGV4dFNlbGVjdGlvblRvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoZGVzY3JpcHRlbS50b0pTT04oKSwgcHJvcHMuY2F0ZWdvcnlJZClcbiAgICAgICAgICBzdG9yZS5kZWxldGVEZXNjcmlwdGVtKGRlc2NyaXB0ZW1JZClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRBbm5vdGF0aW9uIChhbm5vdGF0aW9uSWQ6IHN0cmluZykge1xuICAgICAgY29uc3QgYW5ub3RhdGlvbiA9IHN0b3JlLmdldEFubm90YXRpb24oYW5ub3RhdGlvbklkKVxuICAgICAgaWYgKGFubm90YXRpb24pIHtcbiAgICAgICAgICBzdG9yZS5hZGRUZXh0U2VsZWN0aW9uVG9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShhbm5vdGF0aW9uLnRvSlNPTigpLCBwcm9wcy5jYXRlZ29yeUlkKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZFNlbGVjdGlvbiAoc2VsZWN0aW9uRGF0YTogc3RyaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEpTT04ucGFyc2Uoc2VsZWN0aW9uRGF0YSlcbiAgICAgICAgICBzdG9yZS5hZGRUZXh0U2VsZWN0aW9uVG9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShzZWxlY3Rpb24sIHByb3BzLmNhdGVnb3J5SWQpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENhbm5vdCBwYXJzZSAke3NlbGVjdGlvbkRhdGF9OiAke2V9YClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRDb2xvciAoY29sb3I6IHN0cmluZykge1xuICAgICAgc3RvcmUudXBkYXRlU3luY2hyb25pY0NhdGVnb3J5Q29sb3IoY2F0ZWdvcnkudmFsdWU/LnByb2plY3RJZCwgY2F0ZWdvcnkudmFsdWU/Lm5hbWUsIGNvbG9yKVxuICB9XG5cbiAgLy8gRHJvcHBlZCBzZWxlY3Rpb25zIHRvIGNyZWF0ZSBhIFNTQ2F0ZWdvcnkuIGRhdGEgaXMgYmVmb3JlIG9yIGFmdGVyXG4gIGZ1bmN0aW9uIGRyb3BwZWRDcmVhdGluZ0Rlc2NyaXB0ZW0gKGRlc2NyaXB0ZW1JZDogc3RyaW5nLCB3aGVyZTogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGVtID0gc3RvcmUuZ2V0RGVzY3JpcHRlbShkZXNjcmlwdGVtSWQpXG4gICAgICBpZiAoZGVzY3JpcHRlbSAmJiBjYXRlZ29yeS52YWx1ZSkge1xuICAgICAgICAgIHN0b3JlLmFkZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGlzdG9yZS5uZXdTU0NJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnZhbHVlLnNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRlbS50b0pTT04oKSlcbiAgICAgICAgICBzaG93Q29udGVudCgpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkQ3JlYXRpbmdBbm5vdGF0aW9uIChhbm5vdGF0aW9uSWQ6IHN0cmluZywgd2hlcmU6IHN0cmluZykge1xuICAgICAgY29uc3QgYW5ub3RhdGlvbiA9IHN0b3JlLmdldEFubm90YXRpb24oYW5ub3RhdGlvbklkKVxuICAgICAgaWYgKGFubm90YXRpb24gJiYgY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICBzdG9yZS5hZGRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShpc3RvcmUubmV3U1NDSWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS52YWx1ZS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb24udG9KU09OKCkpXG4gICAgICAgICAgc2hvd0NvbnRlbnQoKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZENyZWF0aW5nU2VsZWN0aW9uIChzZWxlY3Rpb25EYXRhOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gSlNPTi5wYXJzZShzZWxlY3Rpb25EYXRhKVxuICAgICAgICAgIGlmIChzZWxlY3Rpb24gJiYgY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoaXN0b3JlLm5ld1NTQ0lkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnZhbHVlLnNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24pXG4gICAgICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENhbm5vdCBwYXJzZSAke3NlbGVjdGlvbkRhdGF9OiAke2V9YClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFic3RyYWN0aW9uVHlwZSAodmFsdWU6IHN0cmluZykge1xuICAgICAgc3RvcmUudXBkYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCwgeyBhYnN0cmFjdGlvblR5cGU6IHZhbHVlIH0pXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDaGlsZENhdGVnb3J5IChuYW1lOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICBjcmVhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShgaW46JHtwcm9wcy5jYXRlZ29yeUlkfWAsIG5hbWUpXG4gIH1cblxuICBmdW5jdGlvbiBjcml0ZXJpb25Qb3B1cCAoKSB7XG4gICAgICBjb25zdCBjcml0ZXJpb24gPSBjYXRlZ29yeS52YWx1ZT8uY3JpdGVyaW9uIHx8IFwiXCJcbiAgICAgICRxLmRpYWxvZyh7XG4gICAgICAgICAgdGl0bGU6ICdFbnRlciBhIGNyaXRlcmlvbiBmb3IgdGhpcyByZWxhdGlvbicsXG4gICAgICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiAnWW91IGNhbiBzcGVjaWZ5IGEgY3JpdGVyaW9uIGZvciB0aGlzIHJlbGF0aW9uIG9yIHRoZSBhc3NvY2lhdGVkIGNhdGVnb3J5LicsXG4gICAgICAgICAgcHJvbXB0OiB7XG4gICAgICAgICAgICAgIG1vZGVsOiBjcml0ZXJpb24sXG4gICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyAvLyBvcHRpb25hbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2FuY2VsOiB0cnVlLFxuICAgICAgICAgIHBlcnNpc3RlbnQ6IHRydWVcbiAgICAgIH0pLm9uT2sobmV3VmFsdWUgPT4ge1xuICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICBzdG9yZS51cGRhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShwcm9wcy5jYXRlZ29yeUlkLCB7IGNyaXRlcmlvbjogbmV3VmFsdWUgfSlcbiAgICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgaW1wb3J0IHR5cGUgeyBOYW1lZEFjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvdXRpbC50cydcblxuICBjb25zdCBtZW51QWN0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbnM6IE5hbWVkQWN0aW9uW10gPSBbXG4gICAgICAgICAgWyBcIkRlbGV0ZSB0aGlzIGNhdGVnb3J5IG9ubHlcIiwgKCkgPT4gc3RvcmUuZGVsZXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCwgZmFsc2UpIF0sXG4gICAgICAgICAgWyBcIkRlbGV0ZSB0aGlzIGNhdGVnb3J5IGFuZCBpdHMgY2hpbGRyZW5cIiwgKCkgPT4gc3RvcmUuZGVsZXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCwgdHJ1ZSkgXSxcbiAgICAgIF1cbiAgICAgIGlmIChjYXRlZ29yeS52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBjYXRlZ29yeU5hbWUudmFsdWVcbiAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aChTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeS5DT05URVhUX01BUktFUikpIHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFsgXCJTdGFuZGFyZCBjb25zaXN0ZW5jeSBjaGVja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBTdHJpcCB0cmFpbGluZyAvXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeU5hbWUudmFsdWUgPSBuYW1lLnN1YnN0cigwLCBuYW1lLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgIH0gXSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goWyBcIkNvbnRleHR1YWxpemVkIGNvbnNpc3RlbmN5IGNoZWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIEFkZCB0cmFpbGluZyAvXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeU5hbWUudmFsdWUgPSBuYW1lICsgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkuQ09OVEVYVF9NQVJLRVJcbiAgICAgICAgICAgICAgfSBdKVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY3Rpb25zXG4gIH0pXG5cbiAgY29uc3QgcmVsYXRpb25BY3Rpb25zOiBOYW1lZEFjdGlvbltdID0gW1xuICAgICAgWyBcIkNyZWF0ZSBhIG5ldyBjaGlsZCBjYXRlZ29yeVwiLCAoKSA9PiBjcmVhdGVDaGlsZENhdGVnb3J5KCkgXSxcbiAgICAgIFsgXCJTZXQgYXMgZ2VuZXJpYyBhYnN0cmFjdGlvblwiLCAoKSA9PiB1cGRhdGVBYnN0cmFjdGlvblR5cGUoJycpIF0sXG4gICAgICBbIFwiU2V0IGFzIGFnZ3JlZ2F0aW9uIGFic3RyYWN0aW9uIOKLhFwiLCAoKSA9PiB1cGRhdGVBYnN0cmFjdGlvblR5cGUoJ2FnZ3JlZ2F0aW9uJykgXSxcbiAgICAgIFsgXCJTZXQgYXMgc3BlY2lhbGl6YXRpb24gYWJzdHJhY3Rpb24g4qeNXCIsICgpID0+IHVwZGF0ZUFic3RyYWN0aW9uVHlwZSgnc3BlY2lhbGl6YXRpb24nKSBdLFxuICAgICAgWyBcIkRlZmluZSBhIGNyaXRlcmlvbiBmb3IgdGhpcyBhYnN0cmFjdGlvbiByZWxhdGlvblwiLCAoKSA9PiBjcml0ZXJpb25Qb3B1cCgpIF1cbiAgXVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5oZWFkZXItY2xhc3Mge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmVsZW1lbnQtdG9vbGJhciwgLmVsZW1lbnQtdG9vbGJhci1zZWNvbmRhcnkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAudmVydGljYWwgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBtYXJnaW46IDAgMWVtO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbi5ob3Jpem9udGFsIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkge1xuICAgICAgbWluLXdpZHRoOiB2YXIoLS1tb21lbnQtbWluaW11bS13aWR0aCk7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGZsZXg6IDE7XG4gIH1cbiAgLnZlcnRpY2FsIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5oaWdobGlnaHRlZCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taGlnaGxpZ2h0ZWQtY29sb3IpO1xuICB9XG4gIC5oaWdobGlnaHRlZCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodGVkLWNvbG9yKTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktanVzdGlmaWNhdGlvbiB7XG4gICAgICB3aWR0aDogY2FsYyh2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LWRlc2NyaXB0ZW0td2lkdGgpICsgNTBweCk7XG4gIH1cbiAgLnZlcnRpY2FsIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1qdXN0aWZpY2F0aW9uIHtcbiAgICAgIHdpZHRoOiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LWRlc2NyaXB0ZW0td2lkdGgpO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXIge1xuICAgICAgd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktaGVhZGVyLXdpZHRoKTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktanVzdGlmaWNhdGlvbiB7XG4gICAgICBib3JkZXI6IDFweCBkYXNoZWQgZ3JleTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlci5oYXMtZXJyb3Ige1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1ib2R5IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1ib2R5IC5xLWl0ZW0ge1xuICAgICAgcGFkZGluZzogMDtcbiAgfVxuICAucS1pdGVtX19zZWN0aW9uLS1hdmF0YXIge1xuICAgICAgbWluLXdpZHRoOiAycHg7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhhbmRsZSB7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGFuZGxlOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IC44O1xuICB9XG4gIC5vbi1uYW1lLWhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWUge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMThweCk7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgLyogU2luY2Ugd2UgZGlzcGxheSBhIGJvcmRlciBvbiBob3ZlciwgbWF0Y2ggdGhlIHNwYWNlIGluIG5vbi1ob3ZlciBzdGF0ZSAqL1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWU6aG92ZXIge1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNjY2NjY2NlZTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktanVzdGlmaWNhdGlvbiB7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBtaW4taGVpZ2h0OiAxNnB4O1xuICAgICAgb3BhY2l0eTogMS4wO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2U7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIEBzdGFydGluZy1zdHlsZSB7XG4gICAgICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktanVzdGlmaWNhdGlvbiB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyIHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uIHtcbiAgICAgIHdpZHRoOiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LXJlbGF0aW9uLXdpZHRoKTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAudmVydGljYWwgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uIHtcbiAgICAgIGhlaWdodDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1yZWxhdGlvbi13aWR0aCk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb25pbmZvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogY2FsYyg1MCUgKyAxMHB4KTtcbiAgICAgIHdpZHRoOiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LXJlbGF0aW9uLXdpZHRoKTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBvcGFjaXR5OiAwLjI7XG4gIH1cbiAgLnZlcnRpY2FsIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbmluZm8ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktcmVsYXRpb24td2lkdGgpO1xuICAgICAgbGVmdDogY2FsYyg1MCUgLSA0MHB4KTtcbiAgfVxuXG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbjpob3ZlciAgIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbmluZm8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY3JpdGVyaW9uIHtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCBsaWdodGdyZXk7XG4gICAgICB3aWR0aDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1yZWxhdGlvbi13aWR0aCk7XG4gICAgICBtaW4taGVpZ2h0OiAxZW07XG4gICAgICBtYXgtaGVpZ2h0OiAyNHB4O1xuXG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyOmhvdmVyIC5vbi1uYW1lLWhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLmVsZW1lbnQtdG9vbGJhciB7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyIHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgZmxleDogMTtcbiAgfVxuICAudmVydGljYWwgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWZpbGxlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cbiAgLmRlc2NyaXB0ZW1zLWJhZGdlIHtcbiAgICAgIG9wYWNpdHk6IC42O1xuICB9XG4gIC5kZXNjcmlwdGVtcy1iYWRnZTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC5uZXdzc2MtYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgfVxuICAudmVydGljYWwgLm5ld3NzYy1idXR0b24ge1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICB3aWR0aDogNDhweDtcbiAgfVxuICAuY3JpdGVyaW9uLXRvb2x0aXAge1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB9XG4gIC5qdXN0aWZpY2F0aW9uLWRlc2NyaXB0ZW1zIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNyaXRlcmlvbiB7XG4gICAgICBjdXJzb3I6IHRleHQ7XG4gIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiX2hvaXN0ZWRfMiIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfaG9pc3RlZF80IiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl9ob2lzdGVkXzUiLCJfaG9pc3RlZF82IiwiX2hvaXN0ZWRfNyIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF8zIiwiX25vcm1hbGl6ZVN0eWxlIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlVk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVRleHRWTm9kZSIsInNwYW4iLCJjb2xvciIsIl9tZXJnZVByb3BzIiwiX3RvSGFuZGxlcnMiLCJfcmVuZGVyU2xvdCIsIl91c2VNb2RlbCIsIl93aXRoTW9kaWZpZXJzIiwiX3dpdGhDdHgiLCJjb21wbGV0aW9ucyIsIm5hbWUiLCJfaG9pc3RlZF8xMCIsIl9ob2lzdGVkXzkiLCJfd2l0aEtleXMiLCJjYXRlZ29yeU5hbWUiLCJjcml0ZXJpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRFLFVBQU0sUUFBUTtBQU1kLFVBQU0sWUFBWSxJQUFJLElBQUk7QUFDMUIsVUFBTSxhQUFhLFNBQVM7QUFBQSxNQUN4QixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsSUFBQSxDQUNYO0FBRUQsVUFBTSxjQUFjLElBQUksQ0FBQztBQUV6QixVQUFNLGtCQUFrQixTQUFTLE1BQU07QUFDbkMsYUFBTztBQUFBLElBQ1gsQ0FBQztBQUVELFVBQU0sbUJBQW1CLFNBQVMsTUFBTTtBQUNwQyxZQUFNLFFBQVEsTUFBTTtBQUNwQixhQUFPLElBQUssUUFBUTtBQUFBLElBQ3hCLENBQUM7QUFFRCxVQUFNLGdCQUFnQixTQUFTLE1BQU0sTUFBTSxTQUFTLGFBQWE7QUFDakUsVUFBTSxtQkFBbUIsU0FBUyxNQUFNLE1BQU0sU0FBUyxnQkFBZ0I7QUFDdkUsVUFBTSxhQUFhLFNBQVMsTUFBTSxNQUFNLGtCQUFrQixDQUFDO0FBRTNELFVBQU0saUJBQWlCLFNBQVMsT0FBTztBQUFBLE1BQ25DLEdBQUcsV0FBVztBQUFBLE1BQ2QsR0FBRyxXQUFXLFNBQVM7QUFBQSxJQUFBLEVBQ3pCO0FBRUYsVUFBTSxjQUFjLFNBQVMsT0FBTztBQUFBLE1BQ2hDLEdBQUcsV0FBVyxRQUFRO0FBQUEsTUFDdEIsR0FBRyxXQUFXLFNBQVMsTUFBTSxnQkFBZ0I7QUFBQSxJQUFBLEVBQy9DOzs7Ozs7O0VBN0ZHLEtBQUk7QUFBQSxFQUNKLE9BQU07QUFBQSxFQUNMLE9BQU8s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
