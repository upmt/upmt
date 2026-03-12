import { Q as QTooltip } from "./QTooltip-y5EwGWAn.js";
import { D as DragElement, a as QSpace } from "./DragElement-BzCdx0F_.js";
import { Y as defineComponent, r as ref, W as reactive, p as computed, a1 as _export_sfc, aa as createElementBlock, a4 as openBlock, a7 as createBaseVNode, ab as createCommentVNode, ad as normalizeClass, a2 as resolveComponent, aK as normalizeStyle, ag as Fragment, ah as renderList, a6 as createVNode, a3 as createBlock, a5 as withCtx, ac as toDisplayString, a9 as createTextVNode, h as createComponent, v as h, N as hMergeSlot, b3 as renderSlot, by as mergeProps, bz as toHandlers, b2 as mergeModels, Z as useProjectStore, a_ as useModel, _ as useInterfaceStore, $ as storeToRefs, ai as QIcon, b4 as withModifiers, bA as SpecificSynchronicCategory, af as withKeys, a8 as QBtn, aY as QCheckbox, ae as QInput, x as withDirectives } from "./index-DT2JP2rj.js";
import { b as QPopupEdit, N as NoteIcon } from "./NoteIcon-CFcGh7Em.js";
import { a as QItem, b as QItemSection, Q as QList } from "./QList-Be0Kk92v.js";
import { Q as QMenu } from "./format-Dbce-Jpy.js";
import { E as ElementMenu, D as DropZone, C as ClosePopup } from "./DropZone-BzN8PY0G.js";
import { u as useQuasar } from "./use-quasar-CErsBj6H.js";
import { Q as QSelect } from "./QSelect-GGYVJLXz.js";
import { C as ColorizeIcon } from "./ColorizeIcon-D9Z2NhyB.js";
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
        const genericSource = props.genericGraphs ? props.genericGraphs.byName[name.value] : {};
        const abstractionType = genericSource?.abstractionType || "";
        store.updateElement(props.category, { name: name.value, abstractionType });
      }
      newChildren.value.forEach((n) => {
        const genericSource = props.genericGraphs ? props.genericGraphs.byName[n] : {};
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
const CategoryNameInput = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-1f9cb7a7"], ["__file", "CategoryNameInput.vue"]]);
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
        const genericSource = props.genericGraphs ? props.genericGraphs.byName[value] : {};
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
    const genericElement = computed(() => props.genericGraphs ? props.genericGraphs.byName[categoryName.value] : {});
    const proposedChildrenNames = computed(() => {
      const currentChildren = new Set((category.value?.children || []).map((child) => child.name));
      const childrenNames = [...genericElement.value.childrenNames.difference(currentChildren)].toSorted();
      return [
        ["New child category", ""],
        ...childrenNames.map((name) => [name, name])
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
        const genericSource = props.genericGraphs ? props.genericGraphs.byName[name] : {};
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
          categoryName2,
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
    function droppedAnnotation(annotationId, data) {
      if (data === "addChild") ;
      else {
        const annotation = store.getAnnotation(annotationId);
        if (annotation) {
          store.addTextSelectionToSpecificSynchronicCategory(annotation.toJSON(), props.categoryId);
        }
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
const SpecificSynchronicCategoryRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cd380941"], ["__file", "SpecificSynchronicCategoryRepresentation.vue"]]);
export {
  AnnotatedText as A,
  DescriptemRepresentation as D,
  GenericCategoriesOverview as G,
  JustificationRepresentation as J,
  QBadge as Q,
  SpecificSynchronicCategoryRepresentation as S,
  SpecificSynchronicCategoryRelation as a,
  ANNOTATION_COLORS as b,
  groupBy as g
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbi1CWktOczdiMy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXcudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR2VuZXJpY0NhdGVnb3JpZXNPdmVydmlldy52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2JhZGdlL1FCYWRnZS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Fubm90YXRlZFRleHQudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdXRpbC50cyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2NyaXB0ZW1Nb2RpZmljYXRpb25EaWFsb2cudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0p1c3RpZmljYXRpb25SZXByZXNlbnRhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeU5hbWVJbnB1dC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiY29udGFpbmVyXCJcbiAgICAgICBjbGFzcz1cInRyZWUtYm94XCJcbiAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9XCI+XG4gICAgPHN2Z1xuICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgIDxnIDpjbGFzcz1cImRpcmVjdGlvblwiXG4gICAgICAgICA6ZGF0YS1jaGlsZHJlbi1jb3VudD1cImNoaWxkcmVuQ291bnRcIj5cbiAgICAgICAgPGxpbmVcbiAgICAgICAgICB2LWlmPVwiY2hpbGRyZW5Db3VudCA+IDFcIlxuICAgICAgICAgIHZlY3Rvci1lZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuICAgICAgICAgIDp4MT1cIjBcIlxuICAgICAgICAgIDp5MT1cImJhclBvc2l0aW9uLnlcIlxuICAgICAgICAgIDp4Mj1cIjBcIlxuICAgICAgICAgIDp5Mj1cImRpbWVuc2lvbnMuaGVpZ2h0IC0gYmFyUG9zaXRpb24ueVwiXG4gICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgIDpzdHJva2Utd2lkdGg9XCJzdHJva2VXaWR0aFwiXG4gICAgICAgICAgY2xhc3M9XCJyZWxhdGlvbi1wZXJwZW5kaWN1bGFyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8bGluZVxuICAgICAgICAgIHZlY3Rvci1lZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuICAgICAgICAgIDp4MT1cIjBcIlxuICAgICAgICAgIDp5MT1cInBhcmVudFBvc2l0aW9uLnlcIlxuICAgICAgICAgIDp4Mj1cInBhcmVudFBvc2l0aW9uLnhcIlxuICAgICAgICAgIDp5Mj1cInBhcmVudFBvc2l0aW9uLnlcIlxuICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICA6c3Ryb2tlLXdpZHRoPVwic3Ryb2tlV2lkdGhcIlxuICAgICAgICAgIGNsYXNzPVwicmVsYXRpb24tbGluZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICB2ZWN0b3ItZWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICB2LWlmPVwiaXNBZ2dyZWdhdGlvblwiXG4gICAgICAgICAgOmQ9XCJgTSR7cGFyZW50UG9zaXRpb24ueH0gJHtwYXJlbnRQb3NpdGlvbi55fSBsIC0ke3N5bWJvbEhhbGZXaWR0aH0gLSR7c3ltYm9sSGFsZkhlaWdodH0gbCAtJHtzeW1ib2xIYWxmV2lkdGh9ICR7c3ltYm9sSGFsZkhlaWdodH0gbCAke3N5bWJvbEhhbGZXaWR0aH0gJHtzeW1ib2xIYWxmSGVpZ2h0fSBaYFwiXG4gICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgOnN0cm9rZS13aWR0aD1cInN0cm9rZVdpZHRoXCIgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICB2LWlmPVwiaXNTcGVjaWFsaXphdGlvblwiXG4gICAgICAgICAgOmQ9XCJgTSR7cGFyZW50UG9zaXRpb24ueH0gJHtwYXJlbnRQb3NpdGlvbi55fSBsIC0keyAyICogc3ltYm9sSGFsZldpZHRoIH0gLSR7MiAqIHN5bWJvbEhhbGZIZWlnaHR9IGwgMCAkezQgKiBzeW1ib2xIYWxmSGVpZ2h0fSBaYFwiXG4gICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgOnN0cm9rZS13aWR0aD1cInN0cm9rZVdpZHRoXCIgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICB2LWlmPVwiaXNQcm9wZXJ0eVwiXG4gICAgICAgICAgOmQ9XCJgTSR7cGFyZW50UG9zaXRpb24ueCAtIHN5bWJvbEhhbGZXaWR0aH0gJHtwYXJlbnRQb3NpdGlvbi55IC0gc3ltYm9sSGFsZkhlaWdodH0gbCAke3N5bWJvbEhhbGZXaWR0aH0gJHtzeW1ib2xIYWxmSGVpZ2h0fSBsIC0ke3N5bWJvbEhhbGZXaWR0aH0gJHtzeW1ib2xIYWxmSGVpZ2h0fWBcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgOnN0cm9rZS13aWR0aD1cInN0cm9rZVdpZHRoXCIgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IHJlZiwgcmVhY3RpdmUsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgY2hpbGRyZW5Db3VudDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDEgfSxcbiAgICAgIGRpcmVjdGlvbjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdob3Jpem9udGFsJyB9LFxuICAgICAgdHlwZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfVxuICB9KVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IHJlZihudWxsKVxuICBjb25zdCBkaW1lbnNpb25zID0gcmVhY3RpdmUoe1xuICAgICAgd2lkdGg6IDEwMCxcbiAgICAgIGhlaWdodDogMTAwXG4gIH0pXG5cbiAgY29uc3Qgc3Ryb2tlV2lkdGggPSByZWYoMSlcblxuICBjb25zdCBzeW1ib2xIYWxmV2lkdGggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gMjBcbiAgfSlcblxuICBjb25zdCBzeW1ib2xIYWxmSGVpZ2h0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY291bnQgPSBwcm9wcy5jaGlsZHJlbkNvdW50XG4gICAgICByZXR1cm4gNiAvICgxLjA1ICoqIGNvdW50KVxuICB9KVxuXG4gIGNvbnN0IGlzQWdncmVnYXRpb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy50eXBlID09PSAnYWdncmVnYXRpb24nKVxuICBjb25zdCBpc1NwZWNpYWxpemF0aW9uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudHlwZSA9PT0gJ3NwZWNpYWxpemF0aW9uJylcbiAgY29uc3QgaXNQcm9wZXJ0eSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmNoaWxkcmVuQ291bnQgPT09IDApXG5cbiAgY29uc3QgcGFyZW50UG9zaXRpb24gPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgeDogZGltZW5zaW9ucy53aWR0aCxcbiAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0IC8gMlxuICB9KSlcblxuICBjb25zdCBiYXJQb3NpdGlvbiA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB4OiBkaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0IC8gcHJvcHMuY2hpbGRyZW5Db3VudCAvIDJcbiAgfSkpXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLnRyZWUtYm94IHN2ZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBnLnZlcnRpY2FsIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG4gIH1cbiAgZ1tkYXRhLWNoaWxkcmVuLWNvdW50PVwiMFwiXSAucmVsYXRpb24tbGluZSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAzO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgOmNsYXNzPVwiWyAnZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jb250YWluZXInLCBgZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS0ke2NhdGVnb3J5Lm5hbWV9YCBdXCJcbiAgICAgICA6ZGF0YS1nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5PVwiY2F0ZWdvcnkubmFtZVwiPlxuXG4gICAgPGRpdiBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnlcIlxuICAgICAgICAgOmNsYXNzPVwieyAncm9vdC1nZW5lcmljLXN5bmNocm9uaWMtY2F0ZWdvcnknOiBjYXRlZ29yeS5pc1Jvb3QgfVwiXG4gICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogY2F0ZWdvcnkuY29sb3IgfVwiXG4gICAgICAgICB2LWlmPVwiY2F0ZWdvcnlcIlxuICAgICAgICAgOmRhdGEtZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeT1cImNhdGVnb3J5Lm5hbWVcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW5cIj5cbiAgICAgICAgPGRpdiB2LWZvcj1cImMgaW4gY2F0ZWdvcnkuY2hpbGRyZW5cIiA6a2V5PVwiYy5uYW1lXCI+XG4gICAgICAgICAgPEdlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlPdmVydmlld1xuICAgICAgICAgICAgOnByb2plY3RJZD1cInByb2plY3RJZFwiXG4gICAgICAgICAgICA6bGF5b3V0PVwibGF5b3V0XCJcbiAgICAgICAgICAgIDpjdXJyZW50SW50ZXJ2aWV3SWQ9XCJjdXJyZW50SW50ZXJ2aWV3SWRcIlxuICAgICAgICAgICAgOmNhdGVnb3J5PVwiY1wiPlxuICAgICAgICAgIDwvR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvblwiXG4gICAgICAgICAgIHYtaWY9XCJjYXRlZ29yeS5jaGlsZHJlbj8ubGVuZ3RoXCI+XG4gICAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uXG4gICAgICAgICAgOnR5cGU9XCJhYnN0cmFjdGlvblR5cGVcIlxuICAgICAgICAgIDpkaXJlY3Rpb249XCJsYXlvdXRcIlxuICAgICAgICAgIDpjaGlsZHJlbkNvdW50PVwiY2F0ZWdvcnkuY2hpbGRyZW4/Lmxlbmd0aFwiPlxuICAgICAgICA8L1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyXCJcbiAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLWVycm9yJzogY2F0ZWdvcnkuZXJyb3JzPy5sZW5ndGggfVwiPlxuICAgICAgICA8RHJhZ0VsZW1lbnRcbiAgICAgICAgICBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICB0eXBlPVwiZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeVwiXG4gICAgICAgICAgOmRhdGE9XCJjYXRlZ29yeS5uYW1lXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWVcIj57eyBjYXRlZ29yeS5uYW1lIH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L0RyYWdFbGVtZW50PlxuICAgICAgICAgIDxxLXRvb2x0aXAgIGNsYXNzPVwiYmctcmVkLTVcIiBhbmNob3I9XCJ0b3AgcmlnaHRcIiBzZWxmPVwidG9wIGxlZnRcIiB2LWlmPVwiY2F0ZWdvcnkuZXJyb3JzPy5sZW5ndGhcIj5cbiAgICAgICAgICAgIHt7IGNhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJlcnJvciwga2V5IGluIGNhdGVnb3J5LmVycm9yc1wiXG4gICAgICAgICAgICAgICAgIDprZXk9XCJrZXlcIj5cbiAgICAgICAgICAgICAge3sgZXJyb3IgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgICAgIDxxLXRvb2x0aXAgYW5jaG9yPVwidG9wIHJpZ2h0XCIgc2VsZj1cInRvcCBsZWZ0XCIgdi1lbHNlPlxuICAgICAgICAgICAge3sgY2F0ZWdvcnkubmFtZSB9fVxuICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1pZj1cIiFjYXRlZ29yeS5pc1Jvb3RcIlxuICAgICAgICBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyXCJcbiAgICAgICAgPlxuICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvblxuICAgICAgICAgIDpkaXJlY3Rpb249XCJsYXlvdXRcIlxuICAgICAgICAgIDpjaGlsZHJlbkNvdW50PVwiMVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gIGltcG9ydCBEcmFnRWxlbWVudCBmcm9tICcuL0RyYWdFbGVtZW50LnZ1ZSdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24gZnJvbSAnLi9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uLnZ1ZSdcblxuICBpbXBvcnQgdHlwZSB7IEdlbmVyaWNDYXRlZ29yeSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG5cbiAgLy8gaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgLy8gY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IHByb3BzID0gd2l0aERlZmF1bHRzKGRlZmluZVByb3BzPHtcbiAgICAgIHByb2plY3RJZDogc3RyaW5nLFxuICAgICAgY2F0ZWdvcnk6ICBHZW5lcmljQ2F0ZWdvcnksXG4gICAgICBjdXJyZW50SW50ZXJ2aWV3SWQ6IHN0cmluZyB8IG51bGwsXG4gICAgICBsYXlvdXQ6IHN0cmluZ1xuICB9PigpLCB7XG4gICAgICBsYXlvdXQ6ICdob3Jpem9udGFsJ1xuICB9KVxuXG4gIC8vIEZJWE1FOiBkZXRlY3QgaW5jb25zaXN0ZW5jaWVzXG4gIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmNhdGVnb3J5Lmluc3RhbmNlc1swXT8uYWJzdHJhY3Rpb25UeXBlIHx8IFwiXCIpXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnkge1xuICAgICAgIG1hcmdpbjogMDtcbiAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICBmbGV4OiAxO1xuICAgICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAudmVydGljYWwgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICB9XG4gIC52ZXJ0aWNhbCAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB9XG4gIC52ZXJ0aWNhbCAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jb250YWluZXIge1xuICAgICAgbWFyZ2luOiAwIDRweDtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1uYW1lIHtcbiAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1vdmVydmlldy1mb250LXNpemUpO1xuICAgICAgd2lkdGg6IHZhcigtLW92ZXJ2aWV3LXdpZHRoKTtcbiAgICAgIGhlaWdodDogdmFyKC0tb3ZlcnZpZXctaGVpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uLFxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXIge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IGNhbGModmFyKC0tb3ZlcnZpZXctaGVpZ2h0KSArIDJweCk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgaGVpZ2h0OiAtbW96LWF2YWlsYWJsZTtcbiAgfVxuICAudmVydGljYWwgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb24ge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1vdmVydmlldy1oZWlnaHQpICsgMnB4KTtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLW92ZXJ2aWV3LWhlaWdodCkgKyAycHgpO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgZmxleDogMTtcbiAgfVxuICAudmVydGljYWwgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyLmhhcy1lcnJvciB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIH1cbiAgLnJvb3QtZ2VuZXJpYy1zeW5jaHJvbmljLWNhdGVnb3J5OmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZGRkO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZ2VuZXJpY2NhdGVnb3JpZXMtY29udGFpbmVyXCJcbiAgICAgICA6Y2xhc3M9XCJsYXlvdXRcIlxuICAgICAgIDprZXk9XCJwcm9qZWN0SWRcIlxuICAgICAgIDpkYXRhLXByb2plY3Q9XCJwcm9qZWN0SWRcIj5cblxuICAgIDxHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXdcbiAgICAgIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiXG4gICAgICA6a2V5PVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICA6cHJvamVjdElkPVwicHJvamVjdElkXCJcbiAgICAgIDpsYXlvdXQ9XCJsYXlvdXRcIlxuICAgICAgOmN1cnJlbnRJbnRlcnZpZXdJZD1cImN1cnJlbnRJbnRlcnZpZXdJZFwiXG4gICAgICA6Y2F0ZWdvcnk9XCJjYXRlZ29yeVwiPlxuICAgIDwvR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3PlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3IGZyb20gJy4vR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3LnZ1ZSdcblxuICBpbXBvcnQgdHlwZSB7IEdlbmVyaWNDYXRlZ29yeSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG5cbiAgaW50ZXJmYWNlIFByb3BzIHtcbiAgICAgIHByb2plY3RJZDogc3RyaW5nLFxuICAgICAgY2F0ZWdvcmllczogR2VuZXJpY0NhdGVnb3J5W10sXG4gICAgICBjdXJyZW50SW50ZXJ2aWV3SWQ6IHN0cmluZyxcbiAgICAgIGxheW91dDogc3RyaW5nXG4gIH1cblxuICB3aXRoRGVmYXVsdHMoZGVmaW5lUHJvcHM8UHJvcHM+KCksIHtcbiAgICAgIHByb2plY3RJZDogXCJcIixcbiAgICAgIGN1cnJlbnRJbnRlcnZpZXdJZDogXCJcIixcbiAgICAgIGxheW91dDogJ2hvcml6b250YWwnXG4gIH0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5nZW5lcmljY2F0ZWdvcmllcy1jb250YWluZXIgZGl2IHtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgfVxuICAgIC5nZW5lcmljY2F0ZWdvcmllcy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuZ2VuZXJpY2NhdGVnb3JpZXMtY29udGFpbmVyLnZlcnRpY2FsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICB9XG4gICAgIC5nZW5lcmljY2F0ZWdvcmllcy1jb250YWluZXIgPiAqIHtcbiAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgfVxuPC9zdHlsZT5cbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5jb25zdCBhbGlnblZhbHVlcyA9IFsgJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQmFkZ2UnLFxuXG4gIHByb3BzOiB7XG4gICAgY29sb3I6IFN0cmluZyxcbiAgICB0ZXh0Q29sb3I6IFN0cmluZyxcblxuICAgIGZsb2F0aW5nOiBCb29sZWFuLFxuICAgIHRyYW5zcGFyZW50OiBCb29sZWFuLFxuICAgIG11bHRpTGluZTogQm9vbGVhbixcbiAgICBvdXRsaW5lOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG5cbiAgICBsYWJlbDogWyBOdW1iZXIsIFN0cmluZyBdLFxuXG4gICAgYWxpZ246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBhbGlnblZhbHVlcy5pbmNsdWRlcyh2KVxuICAgIH1cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLmFsaWduICE9PSB2b2lkIDBcbiAgICAgICAgPyB7IHZlcnRpY2FsQWxpZ246IHByb3BzLmFsaWduIH1cbiAgICAgICAgOiBudWxsXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCB0ZXh0ID0gcHJvcHMub3V0bGluZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLmNvbG9yIHx8IHByb3BzLnRleHRDb2xvclxuICAgICAgICA6IHByb3BzLnRleHRDb2xvclxuXG4gICAgICByZXR1cm4gJ3EtYmFkZ2UgZmxleCBpbmxpbmUgaXRlbXMtY2VudGVyIG5vLXdyYXAnXG4gICAgICAgICsgYCBxLWJhZGdlLS0keyBwcm9wcy5tdWx0aUxpbmUgPT09IHRydWUgPyAnbXVsdGknIDogJ3NpbmdsZScgfS1saW5lYFxuICAgICAgICArIChwcm9wcy5vdXRsaW5lID09PSB0cnVlXG4gICAgICAgICAgPyAnIHEtYmFkZ2UtLW91dGxpbmUnXG4gICAgICAgICAgOiAocHJvcHMuY29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICAgICAgKVxuICAgICAgICArICh0ZXh0ICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgdGV4dCB9YCA6ICcnKVxuICAgICAgICArIChwcm9wcy5mbG9hdGluZyA9PT0gdHJ1ZSA/ICcgcS1iYWRnZS0tZmxvYXRpbmcnIDogJycpXG4gICAgICAgICsgKHByb3BzLnJvdW5kZWQgPT09IHRydWUgPyAnIHEtYmFkZ2UtLXJvdW5kZWQnIDogJycpXG4gICAgICAgICsgKHByb3BzLnRyYW5zcGFyZW50ID09PSB0cnVlID8gJyBxLWJhZGdlLS10cmFuc3BhcmVudCcgOiAnJylcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgcm9sZTogJ3N0YXR1cycsXG4gICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmxhYmVsXG4gICAgfSwgaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBwcm9wcy5sYWJlbCAhPT0gdm9pZCAwID8gWyBwcm9wcy5sYWJlbCBdIDogW10pKVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidHJhbnNjcmlwdFwiXG4gICAgICAgcmVmPVwidHJhbnNjcmlwdFwiXG4gICAgICAgQG1vdXNldXA9XCJlbWl0U2VsZWN0aW9uXCI+XG4gICAgPHNwYW5cbiAgICAgIHYtZm9yPVwic3BhbiBpbiBzcGFuc1wiXG4gICAgICA6a2V5PVwic3Bhbi5pZFwiXG4gICAgICA6ZGF0YS1zcGFuLWlkPVwic3Bhbi5pZFwiXG4gICAgICA6ZGF0YS1hbm5vdGF0aW9uLWlkcz1cInNwYW4uYW5ub3RhdGlvbklkc1wiXG4gICAgICA6ZGF0YS10ZXh0LW9mZnNldD1cInNwYW4uc3RhcnRcIlxuICAgICAgOmNsYXNzPVwic3BhbkNsYXNzZXNbc3Bhbi5pZF1cIlxuICAgICAgOnN0eWxlPVwiZ2V0U3BhblN0eWxlKHNwYW4pXCJcbiAgICAgIHYtYmluZD1cInNwYW5BdHRyaWJ1dGVzXCJcbiAgICAgIHYtb249XCJwcmVwcGVkU3BhbkV2ZW50c1wiXG4gICAgICA+e3sgc3Bhbi50ZXh0IH19PC9zcGFuPlxuICAgIDxzbG90PlxuICAgIDwvc2xvdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICAvLyBAdHMtbm9jaGVja1xuICBjb25zdCBPVkVSTEFQUElOR19DT0xPUiA9IFwiI2RlYWRiYWJlXCJcblxuICAvLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Rlcmh1ZXJzdC9mbGF0dGVuLW92ZXJsYXBwaW5nLXJhbmdlcy9cbiAgLy8gSVNDIExpY2Vuc2VcbiAgLy8gQ29weXJpZ2h0IChjKSAyMDE4LCBKYW5uaXMgUlxuICAvLyBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlXG4gIC8vIGZvciBhbnkgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZFxuICAvLyB0aGF0IHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhclxuICAvLyBpbiBhbGwgY29waWVzLlxuICAvLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTExcbiAgLy8gV0FSUkFOVElFUyBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRFxuICAvLyBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIC8vIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUlxuICAvLyBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuICAvLyBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCxcbiAgLy8gTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOXG4gIC8vIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG5cbiAgY29uc3Qgc29ydGVkSW5zZXJ0ID0gKGFyciwgdmFsKSA9PiB7XG4gICAgICBjb25zdCBsID0gYXJyLmxlbmd0aFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAodmFsIDw9IGFycltpXSkge1xuICAgICAgICAgICAgICBhcnIuc3BsaWNlKGksIDAsIHZhbClcbiAgICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcnIucHVzaCh2YWwpXG4gICAgICByZXR1cm4gbFxuICB9XG5cbiAgY29uc3QgZmxhdHRlbiA9IChyYW5nZXMpID0+IHtcbiAgICAgIGNvbnN0IFNUQVJUID0gMVxuICAgICAgY29uc3QgU1RPUCA9IDBcblxuICAgICAgbGV0IGwsIGlcblxuICAgICAgY29uc3QgaW5kZXhlcyA9IFtdXG4gICAgICBjb25zdCBpZHMgPSBbXVxuICAgICAgY29uc3QgdHlwZXMgPSBbXVxuXG4gICAgICBsID0gcmFuZ2VzLmxlbmd0aFxuICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHJhbmdlID0gcmFuZ2VzW2ldXG5cbiAgICAgICAgICBjb25zdCBzdGFydEkgPSBzb3J0ZWRJbnNlcnQoaW5kZXhlcywgcmFuZ2VbMV0pXG4gICAgICAgICAgaWRzLnNwbGljZShzdGFydEksIDAsIHJhbmdlWzBdKVxuICAgICAgICAgIHR5cGVzLnNwbGljZShzdGFydEksIDAsIFNUQVJUKVxuXG4gICAgICAgICAgY29uc3QgZW5kSSA9IHNvcnRlZEluc2VydChpbmRleGVzLCByYW5nZVsxXSArIHJhbmdlWzJdKVxuICAgICAgICAgIGlkcy5zcGxpY2UoZW5kSSwgMCwgcmFuZ2VbMF0pXG4gICAgICAgICAgdHlwZXMuc3BsaWNlKGVuZEksIDAsIFNUT1ApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXRlID0gbmV3IE1hcCgpXG4gICAgICBzdGF0ZS5zZXQoaWRzWzBdLCB0cnVlKSAvLyBpbml0aWFsIHN0YXRlXG5cbiAgICAgIGwgPSBpZHMubGVuZ3RoXG4gICAgICBmdW5jdGlvbiogaXRlcmF0b3IgKCkge1xuICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleGVzW2ldXG4gICAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGluZGV4ZXNbaSAtIDFdXG5cbiAgICAgICAgICAgICAgaWYgKGluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICB5aWVsZCBbXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBsYXN0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShzdGF0ZS5rZXlzKCkpXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHR5cGVzW2ldID09PSBTVEFSVCkge1xuICAgICAgICAgICAgICAgICAgc3RhdGUuc2V0KGlkc1tpXSwgdHJ1ZSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRlLmRlbGV0ZShpZHNbaV0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IFtTeW1ib2wuaXRlcmF0b3JdOiBpdGVyYXRvciB9XG4gIH1cblxuICAvLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9jeWNsZWN5Y2xlL3Z1ZS1hbm5vdGF0ZWQtdGV4dC9cbiAgLy8gTUlUIExpY2Vuc2VcbiAgLy8gQ29weXJpZ2h0IChjKSAyMDE5IE5pY2sgTW9ybGV5XG5cbiAgLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgLy8gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAgLy8gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4gIC8vIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICAvLyBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICAvLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAgLy8gU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAgLy8gY29uZGl0aW9uczpcbiAgLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgLy8gaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gIC8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIC8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICAvLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gIC8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gIC8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIC8vIFNPRlRXQVJFLlxuICBjb25zdCBidWlsZFNwYW5MaXN0ID0gKHRleHQsIGFubm90YXRpb25zKSA9PiB7XG4gICAgICAvLyBQcmVwYXJlIHJhbmdlIGxpc3QgdG8gc2VuZCB0byBmbGF0dGVuLW92ZXJsYXBwaW5nLXNwYW5zLmZsYXR0ZW4oKVxuICAgICAgbGV0IHJhbmdlcyA9IFtdXG4gICAgICBjb25zdCBmdWxsUmFuZ2UgPSBbXCJiYXNlVGV4dFwiLCAwLCB0ZXh0Lmxlbmd0aF1cbiAgICAgIHJhbmdlcy5wdXNoKGZ1bGxSYW5nZSlcbiAgICAgIGNvbnN0IGFubm90YXRpb25SYW5nZXMgPSBhbm5vdGF0aW9ucy5tYXAoYW5ub3RhdGlvbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIFthbm5vdGF0aW9uLmlkLCBhbm5vdGF0aW9uLnN0YXJ0LCBhbm5vdGF0aW9uLmxlbmd0aF1cbiAgICAgIH0pXG4gICAgICByYW5nZXMgPSByYW5nZXMuY29uY2F0KGFubm90YXRpb25SYW5nZXMpXG4gICAgICAvLyBGbGF0dGVuXG4gICAgICBjb25zdCBzZWN0aW9ucyA9IEFycmF5LmZyb20oZmxhdHRlbihyYW5nZXMpKVxuICAgICAgLy8gRWFjaCBzZWN0aW9uIGJlY29tZXMgYSBzcGFuXG4gICAgICBsZXQgc2VjdGlvblRleHRTdGFydCA9IDBcbiAgICAgIGxldCBzcGFuSWQgPSAwXG4gICAgICBjb25zdCBzcGFucyA9IHNlY3Rpb25zLm1hcChzZWN0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCBsZW5ndGggPSBOdW1iZXIoc2VjdGlvblswXSlcbiAgICAgICAgICBsZXQgYW5ub3RhdGlvbklkcyA9IHNlY3Rpb25bMV1cbiAgICAgICAgICBhbm5vdGF0aW9uSWRzID0gYW5ub3RhdGlvbklkcy5maWx0ZXIoYW5ub3RhdGlvbklkID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFubm90YXRpb25JZCAhPT0gJ2Jhc2VUZXh0J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSBzZWN0aW9uVGV4dFN0YXJ0XG4gICAgICAgICAgY29uc3QgZW5kID0gc2VjdGlvblRleHRTdGFydCArIGxlbmd0aFxuICAgICAgICAgIGNvbnN0IHNlY3Rpb25UZXh0ID0gdGV4dC5zbGljZShzdGFydCwgZW5kKVxuICAgICAgICAgIGNvbnN0IHNwYW4gPSB7XG4gICAgICAgICAgICAgIGlkOiBzcGFuSWQsXG4gICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICAgIHRleHQ6IHNlY3Rpb25UZXh0LFxuICAgICAgICAgICAgICBhbm5vdGF0aW9uSWRzLFxuICAgICAgICAgICAgICBnZXQgYW5ub3RhdGlvbnMgKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFubm90YXRpb25zLmZpbHRlcihhbm5vdGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYW5ub3RhdGlvbklkcy5pbmNsdWRlcyhhbm5vdGF0aW9uLmlkKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuSWQgPSBzcGFuSWQgKyAxXG4gICAgICAgICAgc2VjdGlvblRleHRTdGFydCA9IGVuZFxuICAgICAgICAgIHJldHVybiBzcGFuXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHNwYW5zXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICBuYW1lOiBcIkFubm90YXRlZFRleHRcIixcbiAgICAgIGVtaXRzOiBbIFwic2VsZWN0aW9uXCIgXSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdGV4dDogU3RyaW5nLFxuICAgICAgICAgIGFubm90YXRpb25zOiB7XG4gICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xlYXJTZWxlY3Rpb246IHtcbiAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgZGVlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRBbm5vdGF0aW9uQ29sb3I6IHtcbiAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoYW5ub3RhdGlvbikge1xuICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIHJldHVybiBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29sb3JcbiAgICAgICAgICAgICAgICAgIC8vIElmIG51bGwsIG5vIHN0eWxlIGF0dHJpYnV0ZSB3aWxsIGJlIGdlbmVyYXRlZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0QW5ub3RhdGlvbkluZm86IEZ1bmN0aW9uLFxuICAgICAgICAgIHNwYW5FdmVudHM6IHtcbiAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0U3BhbkNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIChzcGFuKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3BhbkF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb21wdXRlZDoge1xuICAgICAgICAgIHNwYW5DbGFzc2VzOiB7XG4gICAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBzcGFuIGNsYXNzZXMgZm9yIGVhY2ggc3BhbiBpZCB1c2luZyBnZXRTcGFuQ2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyh0aGlzLnNwYW5zLm1hcChzcGFuID0+IFsgc3Bhbi5pZCwgdGhpcy5nZXRTcGFuQ2xhc3NlcyhzcGFuKSBdKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3BhbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbnMgPSBidWlsZFNwYW5MaXN0KHRoaXMudGV4dCwgdGhpcy5hbm5vdGF0aW9ucylcbiAgICAgICAgICAgICAgcmV0dXJuIHNwYW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmVwcGVkU3BhbkV2ZW50cyAoKSB7XG4gICAgICAgICAgICAgIC8vIEdldCBhbm5vdGF0aW9ucyBhbmQgcGFzcyB0byB0aGUgZXZlbnQgY2FsbGJhY2tcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbkV2ZW50cyA9IHRoaXMuc3BhbkV2ZW50c1xuICAgICAgICAgICAgICBjb25zdCBwcmVwcGVkU3BhbkV2ZW50cyA9IHt9XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNwYW5FdmVudHMpLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBzcGFuRXZlbnRzW2V2ZW50VHlwZV1cbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NhbGxiYWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuSWQgPSB0aGlzLmVsZW1lbnRTcGFuSWQoZS50YXJnZXQpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuc3BhbkJ5SWQoc3BhbklkKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25JZHMgPSBzcGFuLmFubm90YXRpb25JZHNcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IHRoaXMuZ2V0QW5ub3RhdGlvbnMoYW5ub3RhdGlvbklkcylcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlLCBhbm5vdGF0aW9ucylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHByZXBwZWRTcGFuRXZlbnRzW2V2ZW50VHlwZV0gPSBuZXdDYWxsYmFja1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm4gcHJlcHBlZFNwYW5FdmVudHNcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIGVsZW1lbnRTcGFuSWQgKGVsKSB7XG4gICAgICAgICAgICAgIGxldCBzcGFuSWQgPSBlbC5hdHRyaWJ1dGVzW1wiZGF0YS1zcGFuLWlkXCJdLnZhbHVlXG4gICAgICAgICAgICAgIHNwYW5JZCA9IE51bWJlcihzcGFuSWQpXG4gICAgICAgICAgICAgIHJldHVybiBzcGFuSWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNwYW5CeUlkIChzcGFuSWQpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbnMgPSB0aGlzLnNwYW5zLmZpbHRlcigoc3BhbikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwYW4uaWQgPT09IHNwYW5JZFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBjb25zdCBzcGFuID0gc3BhbnNbMF1cbiAgICAgICAgICAgICAgcmV0dXJuIHNwYW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldEFubm90YXRpb25zIChhbm5vdGF0aW9uSWRzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25zID0gdGhpcy5hbm5vdGF0aW9ucy5maWx0ZXIoKGFubm90YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhbm5vdGF0aW9uSWRzLmluY2x1ZGVzKGFubm90YXRpb24uaWQpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVybiBhbm5vdGF0aW9uc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0U3BhblN0eWxlOiBmdW5jdGlvbiAoc3Bhbikge1xuICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuZ2V0U3BhbkNvbG9yKHNwYW4pXG4gICAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRTcGFuQ29sb3I6IGZ1bmN0aW9uIChzcGFuKSB7XG4gICAgICAgICAgICAgIGxldCBjb2xvciA9IG51bGxcbiAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbklkcyA9IHNwYW4uYW5ub3RhdGlvbklkc1xuICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IHRoaXMuZ2V0QW5ub3RhdGlvbnMoYW5ub3RhdGlvbklkcylcbiAgICAgICAgICAgICAgbGV0IGNvbG9ycyA9IGFubm90YXRpb25zLm1hcCgoYW5ub3RhdGlvbikgPT5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QW5ub3RhdGlvbkNvbG9yKGFubm90YXRpb24pXG4gICAgICAgICAgICAgICkuZmlsdGVyKGNvbG9yID0+IGNvbG9yKVxuXG4gICAgICAgICAgICAgIGNvbG9ycyA9IFsuLi5uZXcgU2V0KGNvbG9ycyldXG4gICAgICAgICAgICAgIGlmIChjb2xvcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgLy8gT3ZlcmxhcHBpbmcgc3BhbnMgLSB1c2UgdGhlIG92ZXJsYXAgY29sb3JcbiAgICAgICAgICAgICAgICAgIGNvbG9yID0gT1ZFUkxBUFBJTkdfQ09MT1JcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2xvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBjb2xvciA9IGNvbG9yc1swXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIG51bGwgaWYgbm9uZSBzcGVjaWZpZWRcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRTZWxlY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKVxuICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gcmFuZ2Uuc3RhcnRDb250YWluZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyID09PSB0aGlzLiRyZWZzLnRyYW5zY3JpcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBhcmUgaW4gdGhlIHRyYW5zY3JpcHQgY29udGFpbmVyLlxuICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0Q29udGFpbmVyL2VuZENvbnRhaW5lciBzaG91bGQgYmUgdGV4dCBlbGVtZW50IHdob3NlIHBhcmVudCBpcyBhIHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiZWdpbiA9IE51bWJlcihyYW5nZS5zdGFydENvbnRhaW5lci5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGV4dE9mZnNldCkgKyByYW5nZS5zdGFydE9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IE51bWJlcihyYW5nZS5lbmRDb250YWluZXIucGFyZW50RWxlbWVudC5kYXRhc2V0LnRleHRPZmZzZXQpICsgcmFuZ2UuZW5kT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShiZWdpbiwgZW5kKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZW1pdFNlbGVjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXh0U2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICBpZiAodGV4dFNlbGVjdGlvbiAmJiB0ZXh0U2VsZWN0aW9uLmJlZ2luICE9PSB0ZXh0U2VsZWN0aW9uLmVuZCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcInNlbGVjdGlvblwiLCB0ZXh0U2VsZWN0aW9uKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4gIC50cmFuc2NyaXB0IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIH1cbiAgLmNhdGVnb3J5MSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5Nzk3O1xuICB9XG4gIC5jYXRlZ29yeTIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcwODRiMDtcbiAgfVxuICAuY2F0ZWdvcnkzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRjOTc7XG4gIH1cbiAgLmNhdGVnb3J5NCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2JjZjdiO1xuICB9XG4gIC5jYXRlZ29yeTEuY2F0ZWdvcnkyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuICAuY2F0ZWdvcnkxLmNhdGVnb3J5MyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIH1cbiAgLmNhdGVnb3J5MS5jYXRlZ29yeTQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICB9XG4gIC5jYXRlZ29yeTIuY2F0ZWdvcnkzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuICAuY2F0ZWdvcnkyLmNhdGVnb3J5NCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIH1cbiAgLmNhdGVnb3J5My5jYXRlZ29yeTQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICB9XG4gIC8qIEZvciB1bmRlZmluZWQgY2F0ZWdvcmllcyAqL1xuICAuY2F0ZWdvcnk5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgfVxuICAuZGVzY3JpcHRlbSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAuZGVzY3JpcHRlbS5kZXNjcmlwdGVtcyB7XG4gICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IGRvdWJsZTtcbiAgfVxuICAuZXh0cmFjdEhpZ2hsaWdodCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuZXh0cmFjdE9yaWdpbmFsIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIC5oaWdobGlnaHRlZCxcbiAgLmRlc2NyaXB0ZW0uaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTEuaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTIuaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTMuaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTQuaGlnaGxpZ2h0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XG4gIH1cbjwvc3R5bGU+XG4iLCJjb25zdCBBTk5PVEFUSU9OX0NPTE9SUyA9IFtcbiAgJyNmZjk3OTcnLFxuICAnIzllYjJkZCcsXG4gICcjZmZkYzk3JyxcbiAgJyM3YmNmN2InXG5dXG5cbi8qIVxuICogR3JvdXAgaXRlbXMgZnJvbSBhbiBhcnJheSB0b2dldGhlciBieSBzb21lIGNyaXRlcmlhIG9yIHZhbHVlLlxuICogKGMpIDIwMTkgVG9tIEJyZW1tZXIgKGh0dHBzOi8vdGJyZW1lci5jb20vKSBhbmQgQ2hyaXMgRmVyZGluYW5kaSAoaHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tKSwgTUlUIExpY2Vuc2UsXG4gKiBAcGFyYW0gIHtBcnJheX0gICAgICAgICAgIGFyciAgICAgIFRoZSBhcnJheSB0byBncm91cCBpdGVtcyBmcm9tXG4gKiBAcGFyYW0gIHtTdHJpbmd8RnVuY3Rpb259IGNyaXRlcmlhIFRoZSBjcml0ZXJpYSB0byBncm91cCBieVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICBUaGUgZ3JvdXBlZCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZ3JvdXBCeSAoYXJyOiBBcnJheTxhbnk+LCBjcml0ZXJpYTogc3RyaW5nfCAoKGl0ZW06IGFueSkgPT4gYW55KSkge1xuICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAob2JqLCBpdGVtKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNyaXRlcmlhIGlzIGEgZnVuY3Rpb24gdG8gcnVuIG9uIHRoZSBpdGVtIG9yIGEgcHJvcGVydHkgb2YgaXRcbiAgICBjb25zdCBrZXkgPSB0eXBlb2YgY3JpdGVyaWEgPT09ICdmdW5jdGlvbicgPyBjcml0ZXJpYShpdGVtKSA6IGl0ZW1bY3JpdGVyaWFdXG5cbiAgICAvLyBJZiB0aGUga2V5IGRvZXNuJ3QgZXhpc3QgeWV0LCBjcmVhdGUgaXRcbiAgICBpZiAoIU9iamVjdC5oYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgICBvYmpba2V5XSA9IFtdXG4gICAgfVxuXG4gICAgLy8gUHVzaCB0aGUgdmFsdWUgdG8gdGhlIG9iamVjdFxuICAgIG9ialtrZXldLnB1c2goaXRlbSlcblxuICAgIC8vIFJldHVybiB0aGUgb2JqZWN0IHRvIHRoZSBuZXh0IGl0ZW0gaW4gdGhlIGxvb3BcbiAgICByZXR1cm4gb2JqXG4gIH0sIHt9KVxufVxuXG5mdW5jdGlvbiBjbGFtcCAobnVtYmVyOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihudW1iZXIsIG1heCkpO1xufVxuXG5leHBvcnQgdHlwZSBUZXh0U2VsZWN0aW9uID0ge1xuICBzdGFydEluZGV4OiBudW1iZXIsXG4gIGVuZEluZGV4OiBudW1iZXIsXG4gIGludGVydmlld0lkOiBzdHJpbmcsXG4gIHRleHQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmFtZWRBY3Rpb24gPSBbXG4gIG5hbWU6IHN0cmluZyxcbiAgYWN0aW9uOiAoZWxlbWVudDogYW55KSA9PiBhbnksXG4gIHRvb2x0aXA/OiBzdHJpbmdcbl1cblxuZXhwb3J0IHsgQU5OT1RBVElPTl9DT0xPUlMsIGdyb3VwQnksIGNsYW1wIH1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRlc2NyaXB0ZW0tbW9kaWZpY2F0aW9uXCJcbiAgICAgICB2LWlmPVwibW9kZWxcIj5cbiAgICA8cCBjbGFzcz1cIm5vLW1hcmdpbiBuby1wYWRkaW5nXCI+VG8gbW9kaWZ5IHRoZSBkZXNjcmlwdGVtLCBzZWxlY3QgdGhlIG5ldyB0ZXh0IGFuZCB2YWxpZGF0ZS48L3A+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWl0YWxpYyBuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlRoZSA8dT5vcmlnaW5hbCBkZXNjcmlwdGVtPC91PiBpcyB1bmRlcmxpbmVkLCB0aGUgPGI+bmV3IHNlbGVjdGlvbjwvYj4gaXMgYm9sZC48L3A+XG4gICAgPEFubm90YXRlZFRleHRcbiAgICAgIGNsYXNzPVwidGV4dEFubm90YXRpb25Db21wb25lbnRcIlxuICAgICAgOnRleHQ9XCJjb250ZXh0VGV4dFwiXG4gICAgICA6YW5ub3RhdGlvbnM9XCJhbm5vdGF0aW9uc1wiXG4gICAgICA6Z2V0U3BhbkNsYXNzZXM9XCJnZXRTcGFuQ2xhc3Nlc1wiXG4gICAgICBjbGVhclNlbGVjdGlvblxuICAgICAgQHNlbGVjdGlvbj1cInRleHRTZWxlY3Rpb25cIlxuICAgICAgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgQW5ub3RhdGVkVGV4dCBmcm9tICcuL0Fubm90YXRlZFRleHQudnVlJ1xuICBpbXBvcnQgdHlwZSB7IFRleHRTZWxlY3Rpb24gfSBmcm9tICcuL3V0aWwnXG4gIGltcG9ydCB7IGNsYW1wIH0gZnJvbSAnLi91dGlsJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBtb2RlbCA9IGRlZmluZU1vZGVsPFRleHRTZWxlY3Rpb24+KClcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGluaXRpYWw6IHsgdHlwZTogT2JqZWN0IH1cbiAgfSlcblxuICBjb25zdCBpbnRlcnZpZXcgPSBjb21wdXRlZCgoKSA9PiBtb2RlbC52YWx1ZSA/IHN0b3JlLmdldEludGVydmlldyhtb2RlbC52YWx1ZS5pbnRlcnZpZXdJZCkgOiBudWxsKVxuXG4gIGNvbnN0IGNvbnRleHRUZXh0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKGludGVydmlldy52YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBpbnRlcnZpZXcudmFsdWUudGV4dFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGdldFNwYW5DbGFzc2VzIChzcGFuOiBhbnkpIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBzcGFuLmFubm90YXRpb25zLm1hcCgoYTogYW55KSA9PiBhLmNsYXNzKVxuICAgICAgcmV0dXJuIFsgLi4ubmV3IFNldChjbGFzc2VzKSBdLmpvaW4oXCIgXCIpXG4gIH1cblxuICBjb25zdCBpbml0aWFsTGVuZ3RoID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLmluaXRpYWwpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcHMuaW5pdGlhbC5lbmRJbmRleCAtIHByb3BzLmluaXRpYWwuc3RhcnRJbmRleFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGFubm90YXRpb25zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gUmV0dXJuIDMgYW5ub3RhdGlvbnM6XG4gICAgICAvLyAtIGhpZ2hsaWdodGVkIG9uZSAoZGVzY3JpcHRlbSlcbiAgICAgIC8vIC0gaGlkZGVuIHN0YXJ0XG4gICAgICAvLyAtIGhpZGRlbiBlbmRcbiAgICAgIGNvbnN0IG91dCA9IFtdXG4gICAgICBpZiAobW9kZWwudmFsdWUgJiYgcHJvcHMuaW5pdGlhbCkge1xuICAgICAgICAgIGNvbnN0IGludGVydmlld0lkID0gbW9kZWwudmFsdWUuaW50ZXJ2aWV3SWRcbiAgICAgICAgICBjb25zdCBtYXhJbmRleCA9IGludGVydmlldy52YWx1ZT8udGV4dC5sZW5ndGggPz8gMFxuICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG1vZGVsLnZhbHVlLmVuZEluZGV4IC0gbW9kZWwudmFsdWUuc3RhcnRJbmRleFxuICAgICAgICAgIGNvbnN0IGV4dHJhY3RTdGFydCA9IGNsYW1wKHByb3BzLmluaXRpYWwuc3RhcnRJbmRleCAtIGluaXRpYWxMZW5ndGgudmFsdWUgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIG1heEluZGV4KVxuICAgICAgICAgIGNvbnN0IGV4dHJhY3RFbmQgPSBjbGFtcChwcm9wcy5pbml0aWFsLmVuZEluZGV4ICsgaW5pdGlhbExlbmd0aC52YWx1ZSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIG1heEluZGV4KVxuICAgICAgICAgIGlmIChleHRyYWN0U3RhcnQpIHtcbiAgICAgICAgICAgICAgb3V0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgaW50ZXJ2aWV3SWQsXG4gICAgICAgICAgICAgICAgICBpZDogJ2hpZGRlbl9zdGFydCcsXG4gICAgICAgICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgICAgICAgIGxlbmd0aDogZXh0cmFjdFN0YXJ0LFxuICAgICAgICAgICAgICAgICAgY2xhc3M6ICdoaWRkZW4gZXh0cmFjdFN0YXJ0J1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBvdXQucHVzaCh7XG4gICAgICAgICAgICAgIGludGVydmlld0lkLFxuICAgICAgICAgICAgICBpZDogJ2N1cnJlbnRfZXh0cmFjdCcsXG4gICAgICAgICAgICAgIHN0YXJ0OiBwcm9wcy5pbml0aWFsLnN0YXJ0SW5kZXgsXG4gICAgICAgICAgICAgIGxlbmd0aDogcHJvcHMuaW5pdGlhbC5lbmRJbmRleCAtIHByb3BzLmluaXRpYWwuc3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgY2xhc3M6ICdleHRyYWN0T3JpZ2luYWwnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBvdXQucHVzaCh7XG4gICAgICAgICAgICAgIGludGVydmlld0lkLFxuICAgICAgICAgICAgICBpZDogJ25ld19zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICBzdGFydDogbW9kZWwudmFsdWUuc3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgICBjbGFzczogJ2V4dHJhY3RIaWdobGlnaHQnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoZXh0cmFjdEVuZCA8IG1heEluZGV4KSB7XG4gICAgICAgICAgICAgIG91dC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGludGVydmlld0lkLFxuICAgICAgICAgICAgICAgICAgaWQ6ICdoaWRkZW5fZW5kJyxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0OiBleHRyYWN0RW5kLFxuICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBtYXhJbmRleCAtIGV4dHJhY3RFbmQsXG4gICAgICAgICAgICAgICAgICBjbGFzczogJ2hpZGRlbiBleHRyYWN0RW5kJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRcbiAgfSlcblxuICBmdW5jdGlvbiB0ZXh0U2VsZWN0aW9uIChkYXRhOiBhbnkpIHtcbiAgICAgIGlmIChtb2RlbC52YWx1ZSkge1xuICAgICAgICAgIG1vZGVsLnZhbHVlLnN0YXJ0SW5kZXggPSBkYXRhLmJlZ2luXG4gICAgICAgICAgbW9kZWwudmFsdWUuZW5kSW5kZXggPSBkYXRhLmVuZFxuICAgICAgfVxuICB9XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAudGV4dEFubm90YXRpb25Db21wb25lbnQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRlbVwiXG4gICAgICAgdi1pZj1cImRlc2NyaXB0ZW1cIlxuICAgICAgIDpkYXRhLWRlc2NyaXB0ZW09XCJkZXNjcmlwdGVtLmlkXCJcbiAgICAgICA6dGl0bGU9XCJkZXNjcmlwdGVtLnRleHRcIj5cbiAgICA8RHJhZ0VsZW1lbnRcbiAgICAgIHR5cGU9XCJkZXNjcmlwdGVtXCJcbiAgICAgIGNsYXNzPVwiZGVzY3JpcHRlbS1oZWFkZXJcIlxuICAgICAgOmRhdGE9XCJkZXNjcmlwdGVtSWRcIj5cbiAgICAgIDxxLWljb25cbiAgICAgICAgcmVmPVwiaGFuZGxlXCJcbiAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGVtLWhhbmRsZVwiXG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIEBjbGljay5tZXRhPVwiZGVidWdcIlxuICAgICAgICBAY2xpY2s9XCJzZXRIaWdobGlnaHRlZFwiXG4gICAgICAgIG5hbWU9XCJtZGktZm9ybWF0LXF1b3RlLWNsb3NlLW91dGxpbmVcIj48L3EtaWNvbj5cbiAgICAgIDxzcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0ZW0tbGFiZWxcIj57eyBkZXNjcmlwdGVtLnRleHQgfX08L3NwYW4+XG4gICAgICAgIDxxLXBvcHVwLWVkaXQgdGl0bGU9XCJTZWxlY3QgdGhlIGFwcHJvcHJpYXRlIHRleHQgZnJhZ21lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhaXNSZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1xuICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkZXNjcmlwdGVtSnNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1zbG90PVwic2NvcGVcIj5cbiAgICAgICAgICA8RGVzY3JpcHRlbU1vZGlmaWNhdGlvbkRpYWxvZ1xuICAgICAgICAgICAgdi1tb2RlbD1cInNjb3BlLnZhbHVlXCJcbiAgICAgICAgICAgIDppbml0aWFsPVwic2NvcGUuaW5pdGlhbFZhbHVlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1wb3B1cC1lZGl0PlxuICAgICAgPC9zcGFuPlxuICAgICAgPHEtc3BhY2UgLz5cbiAgICAgIDxkaXYgdi1pZj1cIndpdGhDb250ZXh0XCJcbiAgICAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGVtLWNvbnRleHRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZXh0LWl0ZW1cIlxuICAgICAgICAgICAgICB2LWlmPVwiY29udGV4dC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeVwiPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICBuYW1lPVwibWRpLWFscGhhLXMtYm94LW91dGxpbmVcIj48L3EtaWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHktbmFtZVwiPnt7IGNvbnRleHQuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkubmFtZSB9fTwvZGl2PlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJjb250ZXh0LWl0ZW1cIlxuICAgICAgICAgIEBjbGljay5zdG9wPVwianVtcFRvTW9tZW50KGNvbnRleHQubW9tZW50LmlkKVwiXG4gICAgICAgICAgdi1pZj1cImNvbnRleHQubW9tZW50XCI+XG4gICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgIG5hbWU9XCJtZGktYWxwaGEtZC1ib3gtb3V0bGluZVwiPjwvcS1pY29uPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9tZW50LW5hbWVcIj57eyBjb250ZXh0Lm1vbWVudC5uYW1lIH19PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWlmPVwid2l0aE1lbnVcIlxuICAgICAgICAgICBjbGFzcz1cImRlc2NyaXB0ZW0tbWVudVwiPlxuICAgICAgICA8cS1zcGFjZSAvPlxuICAgICAgICA8RWxlbWVudE1lbnVcbiAgICAgICAgICA6YWN0aW9ucz1cIm1lbnVBY3Rpb25zXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9EcmFnRWxlbWVudD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgeyB1c2VJbnRlcmZhY2VTdG9yZSB9IGZyb20gJ3N0b3Jlcy9pbnRlcmZhY2UnXG4gIGltcG9ydCBEZXNjcmlwdGVtTW9kaWZpY2F0aW9uRGlhbG9nIGZyb20gJy4vRGVzY3JpcHRlbU1vZGlmaWNhdGlvbkRpYWxvZy52dWUnXG4gIGltcG9ydCBEcmFnRWxlbWVudCBmcm9tICcuL0RyYWdFbGVtZW50LnZ1ZSdcbiAgaW1wb3J0IEVsZW1lbnRNZW51IGZyb20gJy4vRWxlbWVudE1lbnUudnVlJ1xuICBpbXBvcnQgTW9tZW50IGZyb20gJ3N0b3Jlcy9tb2RlbHMvbW9tZW50J1xuICBpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkgZnJvbSAnc3RvcmVzL21vZGVscy9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG4gIGNvbnN0IGlzdG9yZSA9IHVzZUludGVyZmFjZVN0b3JlKClcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGRlc2NyaXB0ZW1JZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICAgIHdpdGhDb250ZXh0OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXG4gICAgICB3aXRoTWVudTogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0sXG4gICAgICBpc1JlYWRvbmx5OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH1cbiAgfSlcblxuICBjb25zdCBkZXNjcmlwdGVtID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuZ2V0RGVzY3JpcHRlbShwcm9wcy5kZXNjcmlwdGVtSWQpKVxuXG4gIGNvbnN0IHtcbiAgICAgIGhpZ2hsaWdodGVkRGVzY3JpcHRlbUlkXG4gIH0gPSBzdG9yZVRvUmVmcyhpc3RvcmUpXG5cbiAgZnVuY3Rpb24gZGVidWcgKCkge1xuICAgICAgKHdpbmRvdyBhcyBhbnkpLmRlc2NyaXB0ZW0gPSBkZXNjcmlwdGVtLnZhbHVlXG4gICAgICBjb25zb2xlLmxvZyhcIkRlc2NyaXB0ZW1cIiwgZGVzY3JpcHRlbS52YWx1ZT8udG9KU09OKCkpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRIaWdobGlnaHRlZCAoKSB7XG4gICAgICBpZiAoaGlnaGxpZ2h0ZWREZXNjcmlwdGVtSWQudmFsdWUgPT09IHByb3BzLmRlc2NyaXB0ZW1JZCkge1xuICAgICAgICAgIGhpZ2hsaWdodGVkRGVzY3JpcHRlbUlkLnZhbHVlID0gXCJcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoaWdobGlnaHRlZERlc2NyaXB0ZW1JZC52YWx1ZSA9IHByb3BzLmRlc2NyaXB0ZW1JZFxuICAgICAgfVxuICB9XG5cbiAgdHlwZSBDb250ZXh0ID0ge1xuICAgICAgbW9tZW50PzogTW9tZW50LFxuICAgICAgc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk/OiBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSxcblxuICB9XG5cbiAgLy8gY29udGV4dCBpcyBhbiBvYmplY3Qgd2l0aCBvcHRpb25hbCBtb21lbnQgLyBzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB2YWx1ZXNcbiAgY29uc3QgY29udGV4dCA9IGNvbXB1dGVkKCgpOiBDb250ZXh0ID0+IHtcbiAgICAgIGlmIChkZXNjcmlwdGVtLnZhbHVlICYmIGRlc2NyaXB0ZW0udmFsdWUuanVzdGlmaWNhdGlvbikge1xuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHN0b3JlLmdldEp1c3RpZmljYXRpb25QYXJlbnQoZGVzY3JpcHRlbS52YWx1ZS5qdXN0aWZpY2F0aW9uLnBhcmVudElkKVxuICAgICAgICAgIC8vIE1vbWVudDogJHttb21lbnQubmFtZX1cbiAgICAgICAgICAvLyBDYXRlZ29yeTogJHtjYXRlZ29yeS5tb21lbnQubmFtZX0gfCAke2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgLy8gUHJvcGVydHk6ICR7cHJvcGVydHkuY2F0ZWdvcnlpbnN0YW5jZS5tb21lbnQubmFtZX0gfCAke3Byb3BlcnR5LmNhdGVnb3J5aW5zdGFuY2UubmFtZX0gfCAke3Byb3BlcnR5Lm5hbWV9OiAke3Byb3BlcnR5LnZhbHVlfVxuICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5hc0NvbnRleHRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4geyB9XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4geyB9XG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgZGVzY3JpcHRlbUpzb24gPSBjb21wdXRlZCh7XG4gICAgICBnZXQ6ICgpID0+IGRlc2NyaXB0ZW0udmFsdWU/LnRvSlNPTigpID8/IHt9LFxuICAgICAgc2V0OiAodmFsdWUpID0+IHtcbiAgICAgICAgICBzdG9yZS51cGRhdGVEZXNjcmlwdGVtKHByb3BzLmRlc2NyaXB0ZW1JZCwge1xuICAgICAgICAgICAgICBzdGFydEluZGV4OiB2YWx1ZS5zdGFydEluZGV4LFxuICAgICAgICAgICAgICBlbmRJbmRleDogdmFsdWUuZW5kSW5kZXhcbiAgICAgICAgICB9KVxuICAgICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGp1bXBUb01vbWVudCAoaWRlbnRpZmllcjogc3RyaW5nKSB7XG4gICAgICBpc3RvcmUuc2V0SGlnaGxpZ2h0ZWRNb21lbnRJZChpZGVudGlmaWVyKVxuICB9XG5cbiAgaW1wb3J0IHR5cGUgeyBOYW1lZEFjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvdXRpbC50cydcblxuICBjb25zdCBtZW51QWN0aW9uczogTmFtZWRBY3Rpb25bXSA9IFtcbiAgICAgIFsgXCJEdXBsaWNhdGVcIiwgKCkgPT4gc3RvcmUuZHVwbGljYXRlRGVzY3JpcHRlbShwcm9wcy5kZXNjcmlwdGVtSWQpIF0sXG4gICAgICBbIFwiRGVsZXRlXCIsICgpID0+IHN0b3JlLmRlbGV0ZURlc2NyaXB0ZW0ocHJvcHMuZGVzY3JpcHRlbUlkKSBdXG4gIF1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuZGVzY3JpcHRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGhlaWdodDogMS4yZW07XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5kZXNjcmlwdGVtLWhlYWRlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5kZXNjcmlwdGVtLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1kZXNjcmlwdGVtLXdpZHRoKTtcbiAgICAgIGhlaWdodDogMS4yZW07XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbiAgLmRlc2NyaXB0ZW0taGFuZGxlIHtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5kZXNjcmlwdGVtLWhhbmRsZTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAuNztcbiAgfVxuICAuZGVzY3JpcHRlbS1jb250ZXh0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5jb250ZXh0LWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IHgtc21hbGw7XG4gIH1cbiAgLmNvbnRleHQtaXRlbSArIC5jb250ZXh0LWl0ZW0ge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICB9XG4gIC5kZXNjcmlwdGVtLW1lbnUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgfVxuICAuZGVzY3JpcHRlbS1oZWFkZXI6aG92ZXIgLmRlc2NyaXB0ZW0tbWVudSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwianVzdGlmaWNhdGlvblwiXG4gICAgICAgdi1pZj1cImp1c3RpZmljYXRpb25JZFwiXG4gICAgICAgOmRhdGEtanVzdGlmaWNhdGlvbj1cImp1c3RpZmljYXRpb25JZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZpY2F0aW9uLW1ldGFkYXRhXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImp1c3RpZmljYXRpb24tbmFtZVwiPnt7IGp1c3RpZmljYXRpb24/Lm5hbWUgfX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPHVsIGNsYXNzPVwianVzdGlmaWNhdGlvbi1kZXNjcmlwdGVtc1wiPlxuICAgICAgPGxpIHYtZm9yPVwiZGVzY3JpcHRlbSBpbiBqdXN0aWZpY2F0aW9uPy5kZXNjcmlwdGVtc1wiIDprZXk9XCJkZXNjcmlwdGVtLmlkXCI+XG4gICAgICAgIDxEZXNjcmlwdGVtUmVwcmVzZW50YXRpb24gOmRlc2NyaXB0ZW1JZD1cImRlc2NyaXB0ZW0uaWRcIj5cbiAgICAgICAgPC9EZXNjcmlwdGVtUmVwcmVzZW50YXRpb24+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uIGZyb20gJy4vRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAganVzdGlmaWNhdGlvbklkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9XG4gIH0pXG4gIGNvbnN0IGp1c3RpZmljYXRpb24gPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5nZXRKdXN0aWZpY2F0aW9uKHByb3BzLmp1c3RpZmljYXRpb25JZCkpXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmp1c3RpZmljYXRpb24tZGVzY3JpcHRlbXMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LWRlc2NyaXB0ZW0td2lkdGgpICsgNTBweCk7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250ZXh0XCJcbiAgICAgICB2LWlmPVwiY29udGV4dC5vcmlnaW5hbFwiPlxuICAgIDxlbT5Ob20gb3JpZ2luYWw8L2VtPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbnRleHRcIlxuICAgICAgIHYtZWxzZT5cbiAgICA8ZGl2IGNsYXNzPVwiY2hpbGRyZW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiXG4gICAgICAgICAgIDp0aXRsZT1cImMubmFtZVwiXG4gICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1jaGlsZCc6IGlzQ3VycmVudENoaWxkKGMubmFtZSkgfVwiXG4gICAgICAgICAgIHYtZm9yPVwiYyBpbiBjb250ZXh0LmNoaWxkcmVuXCJcbiAgICAgICAgICAgOmtleT1cImMuaWRcIj5cbiAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICBzaXplPVwiMTBwdFwiXG4gICAgICAgICAgdi1pZj1cIiEgaXNDdXJyZW50Q2hpbGQoYy5uYW1lKVwiXG4gICAgICAgICAgdi1tb2RlbD1cIm5ld0NoaWxkcmVuXCJcbiAgICAgICAgICA6dmFsPVwiYy5uYW1lXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGlsZC1jYXRlZ29yeS1uYW1lXCI+e3tjLm5hbWV9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyZWxhdGlvblwiPlxuICAgICAgPFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb25cbiAgICAgICAgdi1pZj1cImNvbnRleHQucmVmZXJlbmNlXCJcbiAgICAgICAgOnR5cGU9XCJjb250ZXh0LnJlZmVyZW5jZS5hYnN0cmFjdGlvblR5cGVcIlxuICAgICAgICA6Y2hpbGRyZW5Db3VudD1cImNvbnRleHQuY2hpbGRyZW4ubGVuZ3RoXCI+XG4gICAgICA8L1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5IHJlZmVyZW5jZVwiXG4gICAgICAgICB2LWlmPVwiY29udGV4dC5yZWZlcmVuY2VcIlxuICAgICAgICAgOmNsYXNzPVwieyAnaXMtY3VycmVudCc6IGlzQ3VycmVudE5hbWUoY29udGV4dC5yZWZlcmVuY2UubmFtZSkgfVwiXG4gICAgICAgICA6dGl0bGU9XCJjb250ZXh0LnJlZmVyZW5jZS5uYW1lXCI+XG4gICAgICB7e2NvbnRleHQucmVmZXJlbmNlLm5hbWV9fVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYXJlbnRzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnkgcGFyZW50XCJcbiAgICAgICAgICAgOnRpdGxlPVwicGFyZW50Py5uYW1lID8/ICcnXCJcbiAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLXBhcmVudCc6IGlzQ3VycmVudFBhcmVudChwYXJlbnQ/Lm5hbWUpIH1cIlxuICAgICAgICAgICB2LWZvcj1cInBhcmVudCBpbiBjb250ZXh0LnBhcmVudHNcIlxuICAgICAgICAgICA6a2V5PVwicGFyZW50Py5pZCA/PyAnJ1wiPlxuICAgICAgICB7e3BhcmVudD8ubmFtZSA/PyAnJ319XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxxLXNlbGVjdFxuICAgIGRlbnNlXG4gICAgQGZvY3VzPVwiKCRldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuc2VsZWN0KClcIlxuICAgIGZpbGxlZFxuICAgIDptb2RlbC12YWx1ZT1cIm5hbWVcIlxuICAgIHVzZS1pbnB1dFxuICAgIGhpZGUtc2VsZWN0ZWRcbiAgICBmaWxsLWlucHV0XG4gICAgbWVudS1hbmNob3I9XCJ0b3AgcmlnaHRcIlxuICAgIDppbnB1dC1kZWJvdW5jZT1cIjBcIlxuICAgIDpvcHRpb25zPVwiY29udGV4dD8uY29tcGxldGlvbnMgPz8gW11cIlxuICAgIEBmaWx0ZXI9XCJmaWx0ZXJOYW1lc1wiXG4gICAgQGlucHV0LXZhbHVlPVwic2V0TmFtZVwiXG4gICAgQGtleXVwLmVudGVyPVwidmFsaWRhdGVcIlxuICAgIGF1dG9mb2N1c1xuICAgID5cbiAgICA8dGVtcGxhdGUgdi1zbG90Om5vLW9wdGlvbj5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cInRleHQtZ3JleVwiPlxuICAgICAgICAgIE5vIHJlc3VsdHNcbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvcS1zZWxlY3Q+XG4gIDxkaXYgY2xhc3M9XCJyb3cgd3JhcCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICA8cS1idG5cbiAgICAgIGZsYXRcbiAgICAgIHNpemU9XCJzbVwiXG4gICAgICBAY2xpY2s9XCJjYW5jZWxcIj5DYW5jZWw8L3EtYnRuPlxuICAgIDxxLWJ0blxuICAgICAgZmxhdFxuICAgICAgc2l6ZT1cInNtXCJcbiAgICAgIEBjbGljaz1cInZhbGlkYXRlXCI+T0s8L3EtYnRuPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5IGZyb20gJ3N0b3Jlcy9tb2RlbHMvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnknXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uIGZyb20gJy4vU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbi52dWUnXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0cyhbICdjaGFuZ2UnIF0pXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBjYXRlZ29yeTogeyB0eXBlOiBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSwgZGVmYXVsdDogbnVsbCB9LFxuICAgICAgZ2VuZXJpY0dyYXBoczogeyB0eXBlOiBPYmplY3QsIGRlZmF1bHQ6IG51bGwgfVxuICB9KVxuXG4gIGNvbnN0IG5hbWUgPSByZWYocHJvcHMuY2F0ZWdvcnkubmFtZSlcblxuICBjb25zdCBuZXdDaGlsZHJlbiA9IHJlZihbXSlcblxuICBjb25zdCBjb21wbGV0aW9ucyA9IHJlZihbXSBhcyBzdHJpbmdbXSlcblxuICBjb25zdCBjaGlsZHJlbk5hbWVzID0gY29tcHV0ZWQoKCkgPT4gbmV3IFNldChwcm9wcy5jYXRlZ29yeT8uY2hpbGRyZW4ubWFwKGMgPT4gYy5uYW1lKSA/PyBbXSkpXG5cbiAgZnVuY3Rpb24gdmFsaWRhdGUgKCkge1xuICAgICAgLy8gSWYgdGhlIHNlbGVjdCBoYXMgZm9jdXMsIHRoZW4gdXNlIHRoZSBzZWxlY3RlZCBuYW1lLiBFbHNlIHVzZSB0aGUgaW5wdXQgbmFtZSB2YWx1ZS5cblxuICAgICAgaWYgKHByb3BzLmNhdGVnb3J5KSB7XG4gICAgICAgICAgLyogSWYgdGhlIG5ldyBuYW1lIGlzIGZyb20gYW4gZXhpc3RpbmcgY2F0ZWdvcnkgdGhhdCBoYXMgYW4gYWJzdHJhY3Rpb25UeXBlLCB0aGVuIGFsc28gdXBkYXRlIGl0cyBhYnN0cmFjdGlvblR5cGUgKi9cbiAgICAgICAgICBjb25zdCBnZW5lcmljU291cmNlID0gcHJvcHMuZ2VuZXJpY0dyYXBocyA/IHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW25hbWUudmFsdWVdIDoge31cbiAgICAgICAgICBjb25zdCBhYnN0cmFjdGlvblR5cGUgPSBnZW5lcmljU291cmNlPy5hYnN0cmFjdGlvblR5cGUgfHwgJydcbiAgICAgICAgICBzdG9yZS51cGRhdGVFbGVtZW50KHByb3BzLmNhdGVnb3J5LCB7IG5hbWU6IG5hbWUudmFsdWUsIGFic3RyYWN0aW9uVHlwZSB9KVxuICAgICAgfVxuXG4gICAgICBuZXdDaGlsZHJlbi52YWx1ZS5mb3JFYWNoKG4gPT4ge1xuICAgICAgICAgIGNvbnN0IGdlbmVyaWNTb3VyY2UgPSBwcm9wcy5nZW5lcmljR3JhcGhzID8gcHJvcHMuZ2VuZXJpY0dyYXBocy5ieU5hbWVbbl0gOiB7fVxuICAgICAgICAgIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGdlbmVyaWNTb3VyY2U/LmFic3RyYWN0aW9uVHlwZSB8fCAnJ1xuICAgICAgICAgIHN0b3JlLmFkZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2F0ZWdvcnkuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW46JHtwcm9wcy5jYXRlZ29yeS5pZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJzdHJhY3Rpb25UeXBlKVxuICAgICAgfSlcbiAgICAgIC8vIFNpbmNlIHZhbGlkYXRlIG1heSBiZSBjYWxsZWQgdHdpY2UsIHJlc2V0IHRoZSBuZXdDaGlsZHJlbiBhcnJheVxuICAgICAgbmV3Q2hpbGRyZW4udmFsdWUgPSBbXVxuXG4gICAgICBlbWl0KCdjaGFuZ2UnLCBuYW1lLnZhbHVlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsICgpIHtcbiAgICAgIGVtaXQoJ2NoYW5nZScsIHByb3BzLmNhdGVnb3J5Lm5hbWUpXG4gIH1cblxuICBjb25zdCBjb250ZXh0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3JpZXNCeU5hbWUocHJvcHMuY2F0ZWdvcnkucHJvamVjdElkLCBuYW1lLnZhbHVlKVxuICAgICAgY29uc3QgY29tcGxldGlvbnMgPSBzdG9yZS5nZXRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeU5hbWVzQnlQcmVmaXgocHJvcHMuY2F0ZWdvcnkucHJvamVjdElkLCBuYW1lLnZhbHVlKVxuICAgICAgaWYgKCFjYXRlZ29yaWVzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7IG9yaWdpbmFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25zIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBPYmplY3QuZnJvbUVudHJpZXMoY2F0ZWdvcmllcy5tYXAoYyA9PiBjLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBbIGNoaWxkLm5hbWUsIGNoaWxkIF0pKS5mbGF0KCkpXG4gICAgICAgICAgY29uc3QgcGFyZW50cyA9IE9iamVjdC5mcm9tRW50cmllcyhjYXRlZ29yaWVzLmZpbHRlcihjID0+IGMucGFyZW50KS5tYXAoYyA9PiBbYy5wYXJlbnQ/Lm5hbWUsIGMucGFyZW50IF0pKVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHJlZmVyZW5jZTogY2F0ZWdvcmllc1swXSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFsgLi4uT2JqZWN0LnZhbHVlcyhjaGlsZHJlbikgXSBhcyBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVtdLFxuICAgICAgICAgICAgICBwYXJlbnRzOiBbIC4uLk9iamVjdC52YWx1ZXMocGFyZW50cykgXSBhcyBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVtdLFxuICAgICAgICAgICAgICBjb21wbGV0aW9uc1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBpc0N1cnJlbnRDaGlsZCAobmFtZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW5OYW1lcy52YWx1ZS5oYXMobmFtZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ3VycmVudFBhcmVudCAobmFtZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gcHJvcHMuY2F0ZWdvcnkucGFyZW50Py5uYW1lID09IG5hbWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ3VycmVudE5hbWUgKG5hbWU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHByb3BzLmNhdGVnb3J5Py5uYW1lID09PSBuYW1lXG4gIH1cblxuICBmdW5jdGlvbiBzZXROYW1lICh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICBuYW1lLnZhbHVlID0gdmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRlck5hbWVzIChfdmFsOiBzdHJpbmcsIHVwZGF0ZTogKGNiOiAoKSA9PiB2b2lkKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImZpbHRlck5hbWVzXCIsIHZhbCwgY29udGV4dC52YWx1ZT8uY29tcGxldGlvbnMpXG4gICAgICB1cGRhdGUoKCkgPT4ge1xuICAgICAgICAgIGNvbXBsZXRpb25zLnZhbHVlID0gY29udGV4dC52YWx1ZT8uY29tcGxldGlvbnMgPz8gW11cbiAgICAgIH0pXG4gIH1cbjwvc2NyaXB0PlxuXG4gIDxzdHlsZSBzY29wZWQ+XG4gIC5jYXRlZ29yeSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IDJweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBmb250LXNpemU6IDhweDtcbiAgICAgIHdpZHRoOiB2YXIoLS1vdmVydmlldy13aWR0aCkgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogdmFyKC0tb3ZlcnZpZXctaGVpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIC5jb250ZXh0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleDogMDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmNoaWxkcmVuLCAucGFyZW50cyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXg6IDA7XG4gIH1cbiAgLnJlZmVyZW5jZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICB9XG4gIC5yZWxhdGlvbiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBtaW4taGVpZ2h0OiB2YXIoLS1vdmVydmlldy1oZWlnaHQpO1xuICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIH1cbiAgLmNvbXBsZXRpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWF4LWhlaWdodDogNWVtO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICAuaGFzLWNoaWxkLFxuICAuaGFzLXBhcmVudCxcbiAgLmlzLWN1cnJlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiByZWY9XCJjb250YWluZXJcIlxuICAgICAgIDpjbGFzcz1cIltcbiAgICAgICAgICAgICAgICdzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgYHNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LSR7Y2F0ZWdvcnlJZH1gLFxuICAgICAgICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgICAgICBdXCJcbiAgICAgICA6ZGF0YS1zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeT1cImNhdGVnb3J5SWRcIj5cblxuICAgIDxkaXYgOmNsYXNzPVwiWyAnc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnknIF1cIlxuICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IGNhdGVnb3J5LmNvbG9yIHx8ICd0cmFuc3BhcmVudCcgfVwiXG4gICAgICAgICB2LWlmPVwiY2F0ZWdvcnlcIlxuICAgICAgICAgOmRhdGEtc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJjYXRlZ29yeUlkXCI+XG5cbiAgICAgIDxkaXYgOmNsYXNzPVwiWyAnc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW4nIF1cIlxuICAgICAgICAgICB2LWlmPVwid2l0aENoaWxkcmVuXCI+XG4gICAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgdi1mb3I9XCJjIGluIGNhdGVnb3J5LmNoaWxkcmVuXCJcbiAgICAgICAgICA6a2V5PVwiYy5pZFwiXG4gICAgICAgICAgOmlzR2VuZXJpYz1cImlzR2VuZXJpY1wiXG4gICAgICAgICAgOmdlbmVyaWNHcmFwaHM9XCJnZW5lcmljR3JhcGhzXCJcbiAgICAgICAgICA6bGF5b3V0PVwibGF5b3V0XCJcbiAgICAgICAgICA6d2l0aENoaWxkcmVuPVwid2l0aENoaWxkcmVuXCJcbiAgICAgICAgICA6aGlkZUp1c3RpZmljYXRpb25zPVwiaGlkZUp1c3RpZmljYXRpb25zXCJcbiAgICAgICAgICA6Y2F0ZWdvcnlJZD1cImMuaWRcIj5cbiAgICAgICAgPC9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxEcm9wWm9uZSBkYXRhPVwiYWRkXCJcbiAgICAgICAgICAgICAgICB0eXBlcz1cInVwbXQvZGVzY3JpcHRlbSB1cG10L2Fubm90YXRpb24gdXBtdC9zZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgICAgICBAYW5ub3RhdGlvbj1cImRyb3BwZWRBbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBAc2VsZWN0aW9uPVwiZHJvcHBlZFNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgQGRlc2NyaXB0ZW09XCJkcm9wcGVkRGVzY3JpcHRlbVwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1qdXN0aWZpY2F0aW9uXCJcbiAgICAgICAgICAgICB2LWlmPVwiaXNKdXN0aWZpY2F0aW9uVmlzaWJsZVwiPlxuICAgICAgICAgIDx1bCB2LWlmPVwiaXNHZW5lcmljXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJqdXN0aWZpY2F0aW9uLWRlc2NyaXB0ZW1zXCI+XG4gICAgICAgICAgICA8bGkgdi1mb3I9XCJkZXNjcmlwdGVtIGluIGNhdGVnb3J5RGVzY3JpcHRlbXNcIiA6a2V5PVwiZGVzY3JpcHRlbS5pZFwiPlxuICAgICAgICAgICAgICA8RGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAgICAgOmRlc2NyaXB0ZW1JZD1cImRlc2NyaXB0ZW0uaWRcIlxuICAgICAgICAgICAgICAgIDp3aXRoTWVudT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICA6aXNSZWFkb25seT1cInRydWVcIj5cbiAgICAgICAgICAgICAgPC9EZXNjcmlwdGVtUmVwcmVzZW50YXRpb24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPEp1c3RpZmljYXRpb25SZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICA6anVzdGlmaWNhdGlvbklkPVwiY2F0ZWdvcnkuanVzdGlmaWNhdGlvbj8uaWQgPz8gJydcIj5cbiAgICAgICAgICA8L0p1c3RpZmljYXRpb25SZXByZXNlbnRhdGlvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvRHJvcFpvbmU+XG5cbiAgICAgIDxEcm9wWm9uZSA6ZGF0YT1cImBpbjoke2NhdGVnb3J5SWR9YFwiXG4gICAgICAgICAgICAgICAgdHlwZXM9XCJ1cG10L3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5IHVwbXQvZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeSB1cG10L3NlbGVjdGlvbiB1cG10L2Rlc2NyaXB0ZW0gdXBtdC9hbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBAYW5ub3RhdGlvbj1cImRyb3BwZWRDcmVhdGluZ0Fubm90YXRpb25cIlxuICAgICAgICAgICAgICAgIEBzZWxlY3Rpb249XCJkcm9wcGVkQ3JlYXRpbmdTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIEBkZXNjcmlwdGVtPVwiZHJvcHBlZENyZWF0aW5nRGVzY3JpcHRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb25cIj5cbiAgICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvblxuICAgICAgICAgICAgOnR5cGU9XCJjYXRlZ29yeS5hYnN0cmFjdGlvblR5cGVcIlxuICAgICAgICAgICAgOmRpcmVjdGlvbj1cImxheW91dFwiXG4gICAgICAgICAgICA6Y2hpbGRyZW5Db3VudD1cImNhdGVnb3J5LmNoaWxkcmVuLmxlbmd0aFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uaW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNyaXRlcmlvblwiPlxuICAgICAgICAgICAgICB7eyBjcml0ZXJpb24gfX1cbiAgICAgICAgICAgICAgPHEtdG9vbHRpcFxuICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICBkZW5zZT5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJjcml0ZXJpb25cIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjcml0ZXJpb24tdG9vbHRpcFwiPnt7IGNyaXRlcmlvbiB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIENyaXRlcmlvblxuICAgICAgICAgICAgICA8L3EtdG9vbHRpcD5cbiAgICAgICAgICAgICAgPHEtcG9wdXAtZWRpdCB2LW1vZGVsPVwiY3JpdGVyaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvLXNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zbG90PVwic2NvcGVcIj5cbiAgICAgICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDcml0ZXJpb25cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzY29wZS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICBAa2V5dXAuY3RybC5lbnRlcj1cInNjb3BlLnNldFwiXG4gICAgICAgICAgICAgICAgICBAa2V5dXAuZXNjPVwic2NvcGUuY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICBhdXRvZ3Jvd1xuICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzIC8+XG4gICAgICAgICAgICAgIDwvcS1wb3B1cC1lZGl0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RWxlbWVudE1lbnVcbiAgICAgICAgICAgICAgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbm1lbnVcIlxuICAgICAgICAgICAgICA6YWN0aW9ucz1cInJlbGF0aW9uQWN0aW9uc1wiIC8+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgY2xhc3M9XCJwcmludC1yZW1vdmVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICB0aXRsZT1cIkNyZWF0ZSBhIG5ldyBjaGlsZCBjYXRlZ29yeVwiXG4gICAgICAgICAgICAgIGljb249XCJtZGktcGx1c1wiPlxuICAgICAgICAgICAgICA8cS1tZW51XG4gICAgICAgICAgICAgICAgdG91Y2gtcG9zaXRpb24+XG4gICAgICAgICAgICAgICAgPHEtbGlzdCBkZW5zZSBzdHlsZT1cIm1pbi13aWR0aDogMTAwcHhcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoW2xhYmVsLCBuYW1lXSwgaSkgaW4gcHJvcG9zZWRDaGlsZHJlbk5hbWVzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJjcmVhdGVDaGlsZENhdGVnb3J5KG5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ecm9wWm9uZT5cblxuICAgICAgPERyb3Bab25lIGRhdGE9XCJhZGRcIlxuICAgICAgICAgICAgICAgIHR5cGVzPVwidXBtdC9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB1cG10L2dlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnkgdXBtdC9zZWxlY3Rpb24gdXBtdC9kZXNjcmlwdGVtIHVwbXQvYW5ub3RhdGlvbiB1cG10L2NvbG9yXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgQHNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5PVwiZHJvcHBlZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICBAZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeT1cImRyb3BwZWRHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICBAYW5ub3RhdGlvbj1cImRyb3BwZWRBbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBAc2VsZWN0aW9uPVwiZHJvcHBlZFNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgQGRlc2NyaXB0ZW09XCJkcm9wcGVkRGVzY3JpcHRlbVwiXG4gICAgICAgICAgICAgICAgQGNvbG9yPVwiZHJvcHBlZENvbG9yXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXJcIlxuICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1lcnJvcic6IGdlbmVyaWNFbGVtZW50LmVycm9ycz8ubGVuZ3RoIH1cIj5cbiAgICAgICAgICA8RHJhZ0VsZW1lbnRcbiAgICAgICAgICAgIHR5cGU9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeVwiXG4gICAgICAgICAgICA6ZGF0YT1cImNhdGVnb3J5SWRcIlxuICAgICAgICAgICAgQGNsaWNrLm1ldGE9XCJkZWJ1Z1wiPlxuICAgICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgICA6bmFtZT1cImNhdGVnb3J5SWNvblwiPlxuICAgICAgICAgICAgPC9xLWljb24+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWVcIj57eyBjYXRlZ29yeU5hbWUgfX1cbiAgICAgICAgICAgICAgPHEtcG9wdXAtZWRpdCB2LW1vZGVsPVwiY2F0ZWdvcnlOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNsb3Q9XCJzY29wZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0by1zYXZlPlxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeU5hbWVJbnB1dCBAY2hhbmdlPVwic2NvcGUuY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmdlbmVyaWNHcmFwaHM9XCJnZW5lcmljR3JhcGhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNhdGVnb3J5PVwiY2F0ZWdvcnlcIiAvPlxuICAgICAgICAgICAgICA8L3EtcG9wdXAtZWRpdD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxxLXRvb2x0aXAgIGNsYXNzPVwiYmctcmVkLTVcIiBhbmNob3I9XCJ0b3AgcmlnaHRcIiBzZWxmPVwidG9wIGxlZnRcIiB2LWlmPVwiZ2VuZXJpY0VsZW1lbnQuZXJyb3JzPy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAge3sgY2F0ZWdvcnlOYW1lIH19XG4gICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJlcnJvciwga2V5IGluIGdlbmVyaWNFbGVtZW50LmVycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgOmtleT1cImtleVwiPlxuICAgICAgICAgICAgICAgIHt7IGVycm9yIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9xLXRvb2x0aXA+XG4gICAgICAgICAgICA8cS10b29sdGlwIHYtZWxzZT5cbiAgICAgICAgICAgICAge3sgY2F0ZWdvcnlOYW1lIH19ICh7eyBpc0dlbmVyaWMgPyAnR2VuZXJpYyBTeW5jaHJvbmljIENhdGVnb3J5JyA6ICdTcGVjaWZpYyBTeW5jaHJvbmljIENhdGVnb3J5JyB9fVxuICAgICAgICAgICAgPC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9EcmFnRWxlbWVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbWVudC10b29sYmFyXCI+XG4gICAgICAgICAgICA8cS1iYWRnZVxuICAgICAgICAgICAgICBAY2xpY2s9XCJkaXNwbGF5SnVzdGlmaWNhdGlvbiA9ICFkaXNwbGF5SnVzdGlmaWNhdGlvblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZGVzY3JpcHRlbXMtYmFkZ2VcIlxuICAgICAgICAgICAgICBjb2xvcj1cImdyZXktNlwiXG4gICAgICAgICAgICAgIDp0aXRsZT1cImAke2NhdGVnb3J5RGVzY3JpcHRlbUNvdW50fSBkZXNjcmlwdGVtc2BcIlxuICAgICAgICAgICAgICByb3VuZGVkPnt7IGNhdGVnb3J5RGVzY3JpcHRlbUNvdW50IH19PC9xLWJhZGdlPlxuICAgICAgICAgICAgPE5vdGVJY29uXG4gICAgICAgICAgICAgIDplbGVtZW50PVwiY2F0ZWdvcnlcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW1lbnQtdG9vbGJhci1zZWNvbmRhcnkgb24tbmFtZS1ob3ZlclwiPlxuICAgICAgICAgICAgICA8Q29sb3JpemVJY29uXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImNhdGVnb3J5Q29sb3JcIiAvPlxuICAgICAgICAgICAgICA8RWxlbWVudE1lbnVcbiAgICAgICAgICAgICAgICA6YWN0aW9ucz1cIm1lbnVBY3Rpb25zXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRHJvcFpvbmU+XG5cbiAgICAgIDxEcm9wWm9uZSA6ZGF0YT1cImBiZWZvcmU6JHtjYXRlZ29yeUlkfWBcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJjYXRlZ29yeS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkXCJcbiAgICAgICAgICAgICAgICB0eXBlcz1cInVwbXQvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkgdXBtdC9nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5IHVwbXQvc2VsZWN0aW9uIHVwbXQvZGVzY3JpcHRlbSB1cG10L2Fubm90YXRpb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1wdHktcGFkZGluZyBuZXdzc2MtZHJvcHpvbmVcIlxuICAgICAgICAgICAgICAgIEBzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeT1cImRyb3BwZWRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgQGdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJkcm9wcGVkR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgQGFubm90YXRpb249XCJkcm9wcGVkQ3JlYXRpbmdBbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBAc2VsZWN0aW9uPVwiZHJvcHBlZENyZWF0aW5nU2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBAZGVzY3JpcHRlbT1cImRyb3BwZWRDcmVhdGluZ0Rlc2NyaXB0ZW1cIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgQGNsaWNrPVwiY3JlYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoYGJlZm9yZToke2NhdGVnb3J5SWR9YClcIlxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgY2xhc3M9XCJuZXdzc2MtYnV0dG9uIHByaW50LWhpZGRlblwiXG4gICAgICAgICAgOmljb249XCJpc1ZlcnRpY2FsID8gJ21kaS1tZW51LXVwJyA6ICdtZGktbWVudS1yaWdodCdcIj5cbiAgICAgICAgICA8cS10b29sdGlwPkNyZWF0ZSBhIHBhcmVudCBjYXRlZ29yeTwvcS10b29sdGlwPlxuICAgICAgICA8L3EtYnRuPlxuICAgICAgPC9Ecm9wWm9uZT5cblxuICAgICAgPGRpdlxuICAgICAgICB2LWlmPVwiY2F0ZWdvcnkucGFyZW50SWQgJiYgd2l0aENoaWxkcmVuXCJcbiAgICAgICAgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXJcIlxuICAgICAgICA+XG4gICAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uIDpkaXJlY3Rpb249XCJsYXlvdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2hpbGRyZW5Db3VudD1cIjFcIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSdcbiAgaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJ1xuICBpbXBvcnQgRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uIGZyb20gJy4vRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IEp1c3RpZmljYXRpb25SZXByZXNlbnRhdGlvbiBmcm9tICcuL0p1c3RpZmljYXRpb25SZXByZXNlbnRhdGlvbi52dWUnXG4gIGltcG9ydCBEcm9wWm9uZSBmcm9tICcuL0Ryb3Bab25lLnZ1ZSdcbiAgaW1wb3J0IERyYWdFbGVtZW50IGZyb20gJy4vRHJhZ0VsZW1lbnQudnVlJ1xuICBpbXBvcnQgQ2F0ZWdvcnlOYW1lSW5wdXQgZnJvbSAnLi9DYXRlZ29yeU5hbWVJbnB1dC52dWUnXG4gIGltcG9ydCBDb2xvcml6ZUljb24gZnJvbSAnLi9Db2xvcml6ZUljb24udnVlJ1xuICBpbXBvcnQgTm90ZUljb24gZnJvbSAnLi9Ob3RlSWNvbi52dWUnXG4gIGltcG9ydCBFbGVtZW50TWVudSBmcm9tICcuL0VsZW1lbnRNZW51LnZ1ZSdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24gZnJvbSAnLi9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuXG4gIGNvbnN0ICRxID0gdXNlUXVhc2FyKClcblxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IHsgY3VycmVudFByb2plY3RJZCB9ID0gc3RvcmVUb1JlZnMoaXN0b3JlKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgY2F0ZWdvcnlJZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICAgIGdlbmVyaWNHcmFwaHM6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiBudWxsIH0sXG4gICAgICBsYXlvdXQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcImhvcml6b250YWxcIiB9LCAvLyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICBoaWRlSnVzdGlmaWNhdGlvbnM6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcbiAgICAgIGlzR2VuZXJpYzogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgICAgd2l0aENoaWxkcmVuOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3J5ID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuZ2V0U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCkpXG5cbiAgY29uc3QgY2F0ZWdvcnlOYW1lID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gY2F0ZWdvcnkudmFsdWUgPyBjYXRlZ29yeS52YWx1ZS5uYW1lIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAodmFsdWU6IHN0cmluZykge1xuICAgICAgICAgIC8qIElmIHRoZSBuZXcgbmFtZSBpcyBmcm9tIGFuIGV4aXN0aW5nIGNhdGVnb3J5IHRoYXQgaGFzIGFuIGFic3RyYWN0aW9uVHlwZSwgdGhlbiBhbHNvIHVwZGF0ZSBpdHMgYWJzdHJhY3Rpb25UeXBlICovXG4gICAgICAgICAgY29uc3QgZ2VuZXJpY1NvdXJjZSA9IHByb3BzLmdlbmVyaWNHcmFwaHMgPyBwcm9wcy5nZW5lcmljR3JhcGhzLmJ5TmFtZVt2YWx1ZV0gOiB7fVxuICAgICAgICAgIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGdlbmVyaWNTb3VyY2U/LmFic3RyYWN0aW9uVHlwZSB8fCAnJ1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQsIHsgbmFtZTogdmFsdWUsIGFic3RyYWN0aW9uVHlwZTogYWJzdHJhY3Rpb25UeXBlIH0pXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgY2F0ZWdvcnlDb2xvciA9IGNvbXB1dGVkKHtcbiAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlID8gY2F0ZWdvcnkudmFsdWUuY29sb3IgOiBcIlwiXG4gICAgICB9LFxuICAgICAgc2V0IChjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgICAgaWYgKGNvbG9yID09ICcjZmZmZmZmJykge1xuICAgICAgICAgICAgICBjb2xvciA9ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHN0b3JlLnVwZGF0ZVN5bmNocm9uaWNDYXRlZ29yeUNvbG9yKGNhdGVnb3J5LnZhbHVlPy5wcm9qZWN0SWQsIGNhdGVnb3J5LnZhbHVlPy5uYW1lLCBjb2xvcilcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBjYXRlZ29yeUljb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5pc0dlbmVyaWMgPyAgXCJtZGktYWxwaGEtcy1ib3hcIiA6IFwibWRpLWFscGhhLXMtYm94LW91dGxpbmVcIilcblxuICBjb25zdCBjcml0ZXJpb24gPSBjb21wdXRlZCh7XG4gICAgICBnZXQ6ICgpID0+IGNhdGVnb3J5LnZhbHVlPy5jcml0ZXJpb24gPz8gJycsXG4gICAgICBzZXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQsIHsgY3JpdGVyaW9uOiB2YWx1ZSB9KVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGlzTGVhZiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiAhY2F0ZWdvcnkudmFsdWU/LmNoaWxkcmVuLmxlbmd0aFxuICB9KVxuXG4gIGNvbnN0IGlzVmVydGljYWwgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5sYXlvdXQgPT0gJ3ZlcnRpY2FsJylcblxuICAvLyBJbml0aWFsIHN0YXRlIGZvciBkaXNwbGF5SnVzdGlmaWNhdGlvblxuICAvLyBIaWRlIGJ5IGRlZmF1bHRcbiAgY29uc3QgZGlzcGxheUp1c3RpZmljYXRpb24gPSByZWYoZmFsc2UpXG5cbiAgY29uc3QgaXNKdXN0aWZpY2F0aW9uVmlzaWJsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS52YWx1ZT8uanVzdGlmaWNhdGlvbj8uZGVzY3JpcHRlbXM/Lmxlbmd0aCAmJiBkaXNwbGF5SnVzdGlmaWNhdGlvbi52YWx1ZVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3J5RGVzY3JpcHRlbXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAoISBjYXRlZ29yeS52YWx1ZSB8fCAhIGN1cnJlbnRQcm9qZWN0SWQudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcy5pc0dlbmVyaWMpIHtcbiAgICAgICAgICAvLyBRdWVyeSBmb3IgYWxsIGRlc2NyaXB0ZW1zIGZvciBhbGwgY2F0ZWdvcmllc1xuICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBzdG9yZS5nZXRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yaWVzQnlOYW1lIChjdXJyZW50UHJvamVjdElkLnZhbHVlLCBjYXRlZ29yeS52YWx1ZS5uYW1lKVxuICAgICAgICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcChjYXQgPT4gY2F0Lmp1c3RpZmljYXRpb24/LmRlc2NyaXB0ZW1zIHx8IFtdKS5mbGF0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlPy5qdXN0aWZpY2F0aW9uPy5kZXNjcmlwdGVtcyB8fCBbXVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3J5RGVzY3JpcHRlbUNvdW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5RGVzY3JpcHRlbXMudmFsdWUubGVuZ3RoXG4gIH0pXG5cbiAgaWYgKGlzTGVhZi52YWx1ZSkge1xuICAgICAgZGlzcGxheUp1c3RpZmljYXRpb24udmFsdWUgPSAhIHByb3BzLmhpZGVKdXN0aWZpY2F0aW9ucyB8fCBjYXRlZ29yeURlc2NyaXB0ZW1Db3VudC52YWx1ZSA+IDBcbiAgfVxuXG4gIGNvbnN0IGdlbmVyaWNFbGVtZW50ID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuZ2VuZXJpY0dyYXBocyA/IHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW2NhdGVnb3J5TmFtZS52YWx1ZV0gOiB7fSlcblxuICBjb25zdCBwcm9wb3NlZENoaWxkcmVuTmFtZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50Q2hpbGRyZW4gPSBuZXcgU2V0KChjYXRlZ29yeS52YWx1ZT8uY2hpbGRyZW4gfHwgW10pLm1hcChjaGlsZCA9PiBjaGlsZC5uYW1lKSlcbiAgICAgIGNvbnN0IGNoaWxkcmVuTmFtZXMgPSBbIC4uLmdlbmVyaWNFbGVtZW50LnZhbHVlLmNoaWxkcmVuTmFtZXMuZGlmZmVyZW5jZShjdXJyZW50Q2hpbGRyZW4pIF0udG9Tb3J0ZWQoKVxuICAgICAgcmV0dXJuIFsgW1wiTmV3IGNoaWxkIGNhdGVnb3J5XCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgLi4uY2hpbGRyZW5OYW1lcy5tYXAoKG5hbWU6IHN0cmluZykgPT4gWyBuYW1lLCBuYW1lIF0pIF1cbiAgfSlcblxuICBmdW5jdGlvbiBkZWJ1ZyAoKSB7XG4gICAgICAod2luZG93IGFzIGFueSkuY2F0ZWdvcnkgPSBjYXRlZ29yeS52YWx1ZTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlcIiwgeyBjYXRlZ29yeTogY2F0ZWdvcnkudmFsdWUgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dDb250ZW50ICgpIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgY29udGVudCBpcyBleHBhbmRlZCBhbmQgdmlzaWJsZVxuICAgICAgY29uc29sZS5sb2coXCJTaG91bGQgZXhwYW5kIFNTQ1wiKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkgKHdoZXJlOiBzdHJpbmcsIG5hbWU6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgIGlmIChjYXRlZ29yeS52YWx1ZSkge1xuICAgICAgICAgIGlmICghIG5hbWUpIHtcbiAgICAgICAgICAgICAgbmFtZSA9IGlzdG9yZS5uZXdTU0NJZCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGdlbmVyaWNTb3VyY2UgPSBwcm9wcy5nZW5lcmljR3JhcGhzID8gcHJvcHMuZ2VuZXJpY0dyYXBocy5ieU5hbWVbbmFtZV0gOiB7fVxuICAgICAgICAgIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGdlbmVyaWNTb3VyY2U/LmFic3RyYWN0aW9uVHlwZSB8fCAnJ1xuICAgICAgICAgIHN0b3JlLmFkZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkudmFsdWUuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0aW9uVHlwZSlcbiAgICAgICAgICBzaG93Q29udGVudCgpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkgKGNhdGVnb3J5SWQ6IHN0cmluZykge1xuICAgICAgLy8gRE5EIG9uIGEgY2F0ZWdvcnkgdG8gcmVwYXJlbnRcbiAgICAgIGlmICghY2F0ZWdvcnlJZCkge1xuICAgICAgICAgIC8vIEVtcHR5IGNhdGVnb3J5SWQ6IGNyZWF0ZSBhIG5ldyBjaGlsZFxuICAgICAgICAgIGNyZWF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGBpbjoke3Byb3BzLmNhdGVnb3J5SWR9YClcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNvdXJjZSA9IHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGNhdGVnb3J5SWQpXG4gICAgICBpZiAoY2F0ZWdvcnlJZCAhPT0gcHJvcHMuY2F0ZWdvcnlJZCAmJiBzb3VyY2UpIHtcbiAgICAgICAgICAvLyBJdCB3YXMgbWF5YmUgYSByb290IGNhdGVnb3J5LiBSZW1vdmUgaXQgZnJvbSB0aGUgcm9vdFxuICAgICAgICAgIC8vIGNhdGVnb3JpZXMgYW5kIHJlcGFyZW50LlxuICAgICAgICAgIGNvbnN0IHNwZWNpZmljc3luY2hyb25pY21vZGVsSWQgPSBzb3VyY2Uuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZFxuICAgICAgICAgIGlmIChzcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkKSB7XG4gICAgICAgICAgICAgIC8vIEl0IHdhcyBhIHJvb3QgY2F0ZWdvcnkgLSBtb3ZlIGFsbCBpdHMgY2hpbGRyZW4gYXMgcm9vdCBjYXRlZ29yaWVzXG4gICAgICAgICAgICAgIHNvdXJjZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGNoaWxkLmlkLCB7IHNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBudWxsIH0pKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzdG9yZS51cGRhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShjYXRlZ29yeUlkLCB7XG4gICAgICAgICAgICAgIHNwZWNpZmljc3luY2hyb25pY21vZGVsSWQ6IG51bGwsXG4gICAgICAgICAgICAgIHBhcmVudElkOiBwcm9wcy5jYXRlZ29yeUlkXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5IChjYXRlZ29yeU5hbWU6IHN0cmluZywgd2hlcmU6IHN0cmluZykge1xuICAgICAgaWYgKHdoZXJlID09PSAnYWRkJykge1xuICAgICAgICAgIC8vIFRoZXJlIGlzIG5vIFwiYWRkXCIgZm9yIG5vd1xuICAgICAgICAgIHdoZXJlID0gYGluOiR7cHJvcHMuY2F0ZWdvcnlJZH1gXG4gICAgICB9XG4gICAgICBpZiAoY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBnZW5lcmljU291cmNlID0gcHJvcHMuZ2VuZXJpY0dyYXBocyA/IHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW2NhdGVnb3J5TmFtZV0gOiB7fVxuICAgICAgICAgIGNvbnN0IGFic3RyYWN0aW9uVHlwZSA9IGdlbmVyaWNTb3VyY2U/LmFic3RyYWN0aW9uVHlwZSB8fCAnJ1xuXG4gICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoY2F0ZWdvcnlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnZhbHVlLnNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYnN0cmFjdGlvblR5cGUpXG4gICAgICAgICAgc2hvd0NvbnRlbnQoKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZERlc2NyaXB0ZW0gKGRlc2NyaXB0ZW1JZDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGVtID0gc3RvcmUuZ2V0RGVzY3JpcHRlbShkZXNjcmlwdGVtSWQpXG4gICAgICBpZiAoZGVzY3JpcHRlbSkge1xuICAgICAgICAgIHN0b3JlLmFkZFRleHRTZWxlY3Rpb25Ub1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGRlc2NyaXB0ZW0udG9KU09OKCksIHByb3BzLmNhdGVnb3J5SWQpXG4gICAgICAgICAgc3RvcmUuZGVsZXRlRGVzY3JpcHRlbShkZXNjcmlwdGVtSWQpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkQW5ub3RhdGlvbiAoYW5ub3RhdGlvbklkOiBzdHJpbmcsIGRhdGE6IHN0cmluZykge1xuICAgICAgaWYgKGRhdGEgPT09ICdhZGRDaGlsZCcpIHtcbiAgICAgICAgICAvLyBEcm9wcGVkIG9uIHJlbGF0aW9uIC0gY3JlYXRlIGEgY2hpbGRcbiAgICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYW5ub3RhdGlvbiA9IHN0b3JlLmdldEFubm90YXRpb24oYW5ub3RhdGlvbklkKVxuICAgICAgICAgIGlmIChhbm5vdGF0aW9uKSB7XG4gICAgICAgICAgICAgIHN0b3JlLmFkZFRleHRTZWxlY3Rpb25Ub1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGFubm90YXRpb24udG9KU09OKCksIHByb3BzLmNhdGVnb3J5SWQpXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZFNlbGVjdGlvbiAoc2VsZWN0aW9uRGF0YTogc3RyaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEpTT04ucGFyc2Uoc2VsZWN0aW9uRGF0YSlcbiAgICAgICAgICBzdG9yZS5hZGRUZXh0U2VsZWN0aW9uVG9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShzZWxlY3Rpb24sIHByb3BzLmNhdGVnb3J5SWQpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENhbm5vdCBwYXJzZSAke3NlbGVjdGlvbkRhdGF9OiAke2V9YClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRDb2xvciAoY29sb3I6IHN0cmluZykge1xuICAgICAgc3RvcmUudXBkYXRlU3luY2hyb25pY0NhdGVnb3J5Q29sb3IoY2F0ZWdvcnkudmFsdWU/LnByb2plY3RJZCwgY2F0ZWdvcnkudmFsdWU/Lm5hbWUsIGNvbG9yKVxuICB9XG5cbiAgLy8gRHJvcHBlZCBzZWxlY3Rpb25zIHRvIGNyZWF0ZSBhIFNTQ2F0ZWdvcnkuIGRhdGEgaXMgYmVmb3JlIG9yIGFmdGVyXG4gIGZ1bmN0aW9uIGRyb3BwZWRDcmVhdGluZ0Rlc2NyaXB0ZW0gKGRlc2NyaXB0ZW1JZDogc3RyaW5nLCB3aGVyZTogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGVtID0gc3RvcmUuZ2V0RGVzY3JpcHRlbShkZXNjcmlwdGVtSWQpXG4gICAgICBpZiAoZGVzY3JpcHRlbSAmJiBjYXRlZ29yeS52YWx1ZSkge1xuICAgICAgICAgIHN0b3JlLmFkZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGlzdG9yZS5uZXdTU0NJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnZhbHVlLnNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRlbS50b0pTT04oKSlcbiAgICAgICAgICBzaG93Q29udGVudCgpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkQ3JlYXRpbmdBbm5vdGF0aW9uIChhbm5vdGF0aW9uSWQ6IHN0cmluZywgd2hlcmU6IHN0cmluZykge1xuICAgICAgY29uc3QgYW5ub3RhdGlvbiA9IHN0b3JlLmdldEFubm90YXRpb24oYW5ub3RhdGlvbklkKVxuICAgICAgaWYgKGFubm90YXRpb24gJiYgY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICBzdG9yZS5hZGRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShpc3RvcmUubmV3U1NDSWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS52YWx1ZS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb24udG9KU09OKCkpXG4gICAgICAgICAgc2hvd0NvbnRlbnQoKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZENyZWF0aW5nU2VsZWN0aW9uIChzZWxlY3Rpb25EYXRhOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gSlNPTi5wYXJzZShzZWxlY3Rpb25EYXRhKVxuICAgICAgICAgIGlmIChzZWxlY3Rpb24gJiYgY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoaXN0b3JlLm5ld1NTQ0lkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnZhbHVlLnNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24pXG4gICAgICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYENhbm5vdCBwYXJzZSAke3NlbGVjdGlvbkRhdGF9OiAke2V9YClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFic3RyYWN0aW9uVHlwZSAodmFsdWU6IHN0cmluZykge1xuICAgICAgc3RvcmUudXBkYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCwgeyBhYnN0cmFjdGlvblR5cGU6IHZhbHVlIH0pXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDaGlsZENhdGVnb3J5IChuYW1lOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICBjcmVhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShgaW46JHtwcm9wcy5jYXRlZ29yeUlkfWAsIG5hbWUpXG4gIH1cblxuICBmdW5jdGlvbiBjcml0ZXJpb25Qb3B1cCAoKSB7XG4gICAgICBjb25zdCBjcml0ZXJpb24gPSBjYXRlZ29yeS52YWx1ZT8uY3JpdGVyaW9uIHx8IFwiXCJcbiAgICAgICRxLmRpYWxvZyh7XG4gICAgICAgICAgdGl0bGU6ICdFbnRlciBhIGNyaXRlcmlvbiBmb3IgdGhpcyByZWxhdGlvbicsXG4gICAgICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiAnWW91IGNhbiBzcGVjaWZ5IGEgY3JpdGVyaW9uIGZvciB0aGlzIHJlbGF0aW9uIG9yIHRoZSBhc3NvY2lhdGVkIGNhdGVnb3J5LicsXG4gICAgICAgICAgcHJvbXB0OiB7XG4gICAgICAgICAgICAgIG1vZGVsOiBjcml0ZXJpb24sXG4gICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyAvLyBvcHRpb25hbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2FuY2VsOiB0cnVlLFxuICAgICAgICAgIHBlcnNpc3RlbnQ6IHRydWVcbiAgICAgIH0pLm9uT2sobmV3VmFsdWUgPT4ge1xuICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICBzdG9yZS51cGRhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShwcm9wcy5jYXRlZ29yeUlkLCB7IGNyaXRlcmlvbjogbmV3VmFsdWUgfSlcbiAgICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgaW1wb3J0IHR5cGUgeyBOYW1lZEFjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvdXRpbC50cydcblxuICBjb25zdCBtZW51QWN0aW9uczogTmFtZWRBY3Rpb25bXSA9IFtcbiAgICAgIFsgXCJEZWxldGUgdGhpcyBjYXRlZ29yeSBvbmx5XCIsICgpID0+IHN0b3JlLmRlbGV0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQsIGZhbHNlKSBdLFxuICAgICAgWyBcIkRlbGV0ZSB0aGlzIGNhdGVnb3J5IGFuZCBpdHMgY2hpbGRyZW5cIiwgKCkgPT4gc3RvcmUuZGVsZXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCwgdHJ1ZSkgXSxcbiAgXVxuXG4gIGNvbnN0IHJlbGF0aW9uQWN0aW9uczogTmFtZWRBY3Rpb25bXSA9IFtcbiAgICAgIFsgXCJDcmVhdGUgYSBuZXcgY2hpbGQgY2F0ZWdvcnlcIiwgKCkgPT4gY3JlYXRlQ2hpbGRDYXRlZ29yeSgpIF0sXG4gICAgICBbIFwiU2V0IGFzIGdlbmVyaWMgYWJzdHJhY3Rpb25cIiwgKCkgPT4gdXBkYXRlQWJzdHJhY3Rpb25UeXBlKCcnKSBdLFxuICAgICAgWyBcIlNldCBhcyBhZ2dyZWdhdGlvbiBhYnN0cmFjdGlvbiDii4RcIiwgKCkgPT4gdXBkYXRlQWJzdHJhY3Rpb25UeXBlKCdhZ2dyZWdhdGlvbicpIF0sXG4gICAgICBbIFwiU2V0IGFzIHNwZWNpYWxpemF0aW9uIGFic3RyYWN0aW9uIOKnjVwiLCAoKSA9PiB1cGRhdGVBYnN0cmFjdGlvblR5cGUoJ3NwZWNpYWxpemF0aW9uJykgXSxcbiAgICAgIFsgXCJEZWZpbmUgYSBjcml0ZXJpb24gZm9yIHRoaXMgYWJzdHJhY3Rpb24gcmVsYXRpb25cIiwgKCkgPT4gY3JpdGVyaW9uUG9wdXAoKSBdXG4gIF1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuaGVhZGVyLWNsYXNzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5lbGVtZW50LXRvb2xiYXIsIC5lbGVtZW50LXRvb2xiYXItc2Vjb25kYXJ5IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbiB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLnZlcnRpY2FsIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgbWFyZ2luOiAwIDFlbTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW4uaG9yaXpvbnRhbCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5IHtcbiAgICAgIG1pbi13aWR0aDogdmFyKC0tbW9tZW50LW1pbmltdW0td2lkdGgpO1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBmbGV4OiAxO1xuICB9XG4gIC52ZXJ0aWNhbCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuaGlnaGxpZ2h0ZWQgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5IHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcbiAgfVxuICAuaGlnaGxpZ2h0ZWQgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWp1c3RpZmljYXRpb24ge1xuICAgICAgd2lkdGg6IGNhbGModmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1kZXNjcmlwdGVtLXdpZHRoKSArIDUwcHgpO1xuICB9XG4gIC52ZXJ0aWNhbCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktanVzdGlmaWNhdGlvbiB7XG4gICAgICB3aWR0aDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1kZXNjcmlwdGVtLXdpZHRoKTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyIHtcbiAgICAgIHdpZHRoOiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LWhlYWRlci13aWR0aCk7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWp1c3RpZmljYXRpb24ge1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIGdyZXk7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXIuaGFzLWVycm9yIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktYm9keSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktYm9keSAucS1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLnEtaXRlbV9fc2VjdGlvbi0tYXZhdGFyIHtcbiAgICAgIG1pbi13aWR0aDogMnB4O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oYW5kbGUge1xuICAgICAgb3BhY2l0eTogLjU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhhbmRsZTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAuODtcbiAgfVxuICAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE4cHgpO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIC8qIFNpbmNlIHdlIGRpc3BsYXkgYSBib3JkZXIgb24gaG92ZXIsIG1hdGNoIHRoZSBzcGFjZSBpbiBub24taG92ZXIgc3RhdGUgKi9cbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1uYW1lOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjY2NjY2NjZWU7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWp1c3RpZmljYXRpb24ge1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgbWluLWhlaWdodDogMTZweDtcbiAgICAgIG9wYWNpdHk6IDEuMDtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBAc3RhcnRpbmctc3R5bGUge1xuICAgICAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWp1c3RpZmljYXRpb24ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlciB7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbiB7XG4gICAgICB3aWR0aDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1yZWxhdGlvbi13aWR0aCk7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnZlcnRpY2FsIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbiB7XG4gICAgICBoZWlnaHQ6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktcmVsYXRpb24td2lkdGgpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uaW5mbyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IGNhbGMoNTAlICsgMTBweCk7XG4gICAgICB3aWR0aDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1yZWxhdGlvbi13aWR0aCk7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgb3BhY2l0eTogMC4yO1xuICB9XG4gIC52ZXJ0aWNhbCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb25pbmZvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHdpZHRoOiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LXJlbGF0aW9uLXdpZHRoKTtcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNDBweCk7XG4gIH1cblxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb246aG92ZXIgICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb25pbmZvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNyaXRlcmlvbiB7XG4gICAgICBib3JkZXI6IDFweCBkYXNoZWQgbGlnaHRncmV5O1xuICAgICAgd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktcmVsYXRpb24td2lkdGgpO1xuICAgICAgbWluLWhlaWdodDogMWVtO1xuICAgICAgbWF4LWhlaWdodDogMjRweDtcblxuICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICBmb250LXNpemU6IDlweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlcjpob3ZlciAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC5lbGVtZW50LXRvb2xiYXIge1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWZpbGxlciB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIGZsZXg6IDE7XG4gIH1cbiAgLnZlcnRpY2FsIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICB9XG4gIC5kZXNjcmlwdGVtcy1iYWRnZSB7XG4gICAgICBvcGFjaXR5OiAuNjtcbiAgfVxuICAuZGVzY3JpcHRlbXMtYmFkZ2U6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuICAubmV3c3NjLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgb3BhY2l0eTogLjU7XG4gIH1cbiAgLnZlcnRpY2FsIC5uZXdzc2MtYnV0dG9uIHtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gIH1cbiAgLmNyaXRlcmlvbi10b29sdGlwIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgfVxuICAuanVzdGlmaWNhdGlvbi1kZXNjcmlwdGVtcyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jcml0ZXJpb24ge1xuICAgICAgY3Vyc29yOiB0ZXh0O1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsIl9ob2lzdGVkXzIiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX2hvaXN0ZWRfNCIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfaG9pc3RlZF81IiwiX2hvaXN0ZWRfNiIsIl9ob2lzdGVkXzciLCJfaG9pc3RlZF84IiwiX2hvaXN0ZWRfMyIsIl9ub3JtYWxpemVTdHlsZSIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZVZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJzcGFuIiwiY29sb3IiLCJfbWVyZ2VQcm9wcyIsIl90b0hhbmRsZXJzIiwiX3JlbmRlclNsb3QiLCJfdXNlTW9kZWwiLCJfd2l0aE1vZGlmaWVycyIsIl93aXRoQ3R4IiwiY29tcGxldGlvbnMiLCJuYW1lIiwiX2hvaXN0ZWRfMTAiLCJfaG9pc3RlZF85IiwiX3dpdGhLZXlzIiwiY2F0ZWdvcnlOYW1lIiwiY3JpdGVyaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRFLFVBQU0sUUFBUTtBQU1kLFVBQU0sWUFBWSxJQUFJLElBQUk7QUFDMUIsVUFBTSxhQUFhLFNBQVM7QUFBQSxNQUN4QixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsSUFBQSxDQUNYO0FBRUQsVUFBTSxjQUFjLElBQUksQ0FBQztBQUV6QixVQUFNLGtCQUFrQixTQUFTLE1BQU07QUFDbkMsYUFBTztBQUFBLElBQ1gsQ0FBQztBQUVELFVBQU0sbUJBQW1CLFNBQVMsTUFBTTtBQUNwQyxZQUFNLFFBQVEsTUFBTTtBQUNwQixhQUFPLElBQUssUUFBUTtBQUFBLElBQ3hCLENBQUM7QUFFRCxVQUFNLGdCQUFnQixTQUFTLE1BQU0sTUFBTSxTQUFTLGFBQWE7QUFDakUsVUFBTSxtQkFBbUIsU0FBUyxNQUFNLE1BQU0sU0FBUyxnQkFBZ0I7QUFDdkUsVUFBTSxhQUFhLFNBQVMsTUFBTSxNQUFNLGtCQUFrQixDQUFDO0FBRTNELFVBQU0saUJBQWlCLFNBQVMsT0FBTztBQUFBLE1BQ25DLEdBQUcsV0FBVztBQUFBLE1BQ2QsR0FBRyxXQUFXLFNBQVM7QUFBQSxJQUFBLEVBQ3pCO0FBRUYsVUFBTSxjQUFjLFNBQVMsT0FBTztBQUFBLE1BQ2hDLEdBQUcsV0FBVyxRQUFRO0FBQUEsTUFDdEIsR0FBRyxXQUFXLFNBQVMsTUFBTSxnQkFBZ0I7QUFBQSxJQUFBLEVBQy9DOzs7Ozs7O0VBN0ZHLEtBQUk7QUFBQSxFQUNKLE9BQU07QUFBQSxFQUNMLE9BQU8sRUFBQSxPQUFBLFFBQUEsUUFBQSxRQUFBLFVBQUEsV0FBQTs7O0VBRVQsU0FBUTtBQUFBLEVBQ1IscUJBQW9CO0FBQUEsRUFDcEIsT0FBTTs7Ozs7Ozs7O0FBTlYsU0FBQUEsVUFBQSxHQUFBQyxtQkFtRE0sT0FuRE5DLGNBbURNO0FBQUEsS0FBQUYs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
