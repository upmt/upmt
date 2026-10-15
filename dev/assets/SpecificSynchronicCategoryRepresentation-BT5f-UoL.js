import { Q as QTooltip } from "./QTooltip-D57IcaGC.js";
import { a as DragElement, C as ColorizeIcon, D as DropZone } from "./DropZone-DF7OQInd.js";
import { M as defineComponent, r as ref, bP as reactive, b as computed, _ as _export_sfc, X as createElementBlock, R as openBlock, aa as createBaseVNode, V as createCommentVNode, ae as normalizeClass, af as resolveComponent, ag as normalizeStyle, Z as Fragment, $ as renderList, Y as createVNode, P as createBlock, U as withCtx, a2 as toDisplayString, a1 as createTextVNode, aW as renderSlot, aU as mergeProps, c9 as toHandlers, bE as mergeModels, N as useProjectStore, bF as useModel, O as useInterfaceStore, bT as storeToRefs, a8 as QIcon, a3 as withModifiers, S as SpecificSynchronicCategory, ar as withKeys, Q as QBtn, bk as QCheckbox, be as QInput, a0 as withDirectives } from "./index-zU2rftsz.js";
import { Q as QPopupEdit, N as NoteIcon } from "./QSlider-CQOqkv49.js";
import { f as QItem, h as QItemSection, Q as QMenu } from "./format--PxEkPap.js";
import { Q as QList } from "./QList-C32mUDlW.js";
import { Q as QBadge } from "./QBadge-DueL6-m2.js";
import { C as ClosePopup } from "./ClosePopup-B6cJeXPW.js";
import { u as useQuasar } from "./use-quasar-CDk-JC4V.js";
import { c as clamp, s as stripContextFromName } from "./util-D0WanoNV.js";
import { Q as QSpace } from "./QSpace-CwPbzNKY.js";
import { E as ElementMenu } from "./ElementMenu-BtOgsUOR.js";
import { Q as QSelect } from "./QSelect-DZK1VTet.js";
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
  SpecificSynchronicCategoryRelation as a
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbi1CVDVmLVVvTC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9HZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXcudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvR2VuZXJpY0NhdGVnb3JpZXNPdmVydmlldy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0ZWRUZXh0LnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2NyaXB0ZW1Nb2RpZmljYXRpb25EaWFsb2cudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0p1c3RpZmljYXRpb25SZXByZXNlbnRhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeU5hbWVJbnB1dC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiY29udGFpbmVyXCJcbiAgICAgICBjbGFzcz1cInRyZWUtYm94XCJcbiAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9XCI+XG4gICAgPHN2Z1xuICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgIDxnIDpjbGFzcz1cImRpcmVjdGlvblwiXG4gICAgICAgICA6ZGF0YS1jaGlsZHJlbi1jb3VudD1cImNoaWxkcmVuQ291bnRcIj5cbiAgICAgICAgPGxpbmVcbiAgICAgICAgICB2LWlmPVwiY2hpbGRyZW5Db3VudCA+IDFcIlxuICAgICAgICAgIHZlY3Rvci1lZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuICAgICAgICAgIDp4MT1cIjBcIlxuICAgICAgICAgIDp5MT1cImJhclBvc2l0aW9uLnlcIlxuICAgICAgICAgIDp4Mj1cIjBcIlxuICAgICAgICAgIDp5Mj1cImRpbWVuc2lvbnMuaGVpZ2h0IC0gYmFyUG9zaXRpb24ueVwiXG4gICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgIDpzdHJva2Utd2lkdGg9XCJzdHJva2VXaWR0aFwiXG4gICAgICAgICAgY2xhc3M9XCJyZWxhdGlvbi1wZXJwZW5kaWN1bGFyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8bGluZVxuICAgICAgICAgIHZlY3Rvci1lZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuICAgICAgICAgIDp4MT1cIjBcIlxuICAgICAgICAgIDp5MT1cInBhcmVudFBvc2l0aW9uLnlcIlxuICAgICAgICAgIDp4Mj1cInBhcmVudFBvc2l0aW9uLnhcIlxuICAgICAgICAgIDp5Mj1cInBhcmVudFBvc2l0aW9uLnlcIlxuICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICA6c3Ryb2tlLXdpZHRoPVwic3Ryb2tlV2lkdGhcIlxuICAgICAgICAgIGNsYXNzPVwicmVsYXRpb24tbGluZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICB2ZWN0b3ItZWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICB2LWlmPVwiaXNBZ2dyZWdhdGlvblwiXG4gICAgICAgICAgOmQ9XCJgTSR7cGFyZW50UG9zaXRpb24ueH0gJHtwYXJlbnRQb3NpdGlvbi55fSBsIC0ke3N5bWJvbEhhbGZXaWR0aH0gLSR7c3ltYm9sSGFsZkhlaWdodH0gbCAtJHtzeW1ib2xIYWxmV2lkdGh9ICR7c3ltYm9sSGFsZkhlaWdodH0gbCAke3N5bWJvbEhhbGZXaWR0aH0gJHtzeW1ib2xIYWxmSGVpZ2h0fSBaYFwiXG4gICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgOnN0cm9rZS13aWR0aD1cInN0cm9rZVdpZHRoXCIgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICB2LWlmPVwiaXNTcGVjaWFsaXphdGlvblwiXG4gICAgICAgICAgOmQ9XCJgTSR7cGFyZW50UG9zaXRpb24ueH0gJHtwYXJlbnRQb3NpdGlvbi55fSBsIC0keyAyICogc3ltYm9sSGFsZldpZHRoIH0gLSR7MiAqIHN5bWJvbEhhbGZIZWlnaHR9IGwgMCAkezQgKiBzeW1ib2xIYWxmSGVpZ2h0fSBaYFwiXG4gICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgOnN0cm9rZS13aWR0aD1cInN0cm9rZVdpZHRoXCIgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICB2LWlmPVwiaXNQcm9wZXJ0eVwiXG4gICAgICAgICAgOmQ9XCJgTSR7cGFyZW50UG9zaXRpb24ueCAtIHN5bWJvbEhhbGZXaWR0aH0gJHtwYXJlbnRQb3NpdGlvbi55IC0gc3ltYm9sSGFsZkhlaWdodH0gbCAke3N5bWJvbEhhbGZXaWR0aH0gJHtzeW1ib2xIYWxmSGVpZ2h0fSBsIC0ke3N5bWJvbEhhbGZXaWR0aH0gJHtzeW1ib2xIYWxmSGVpZ2h0fWBcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgOnN0cm9rZS13aWR0aD1cInN0cm9rZVdpZHRoXCIgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IHJlZiwgcmVhY3RpdmUsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgY2hpbGRyZW5Db3VudDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDEgfSxcbiAgICAgIGRpcmVjdGlvbjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdob3Jpem9udGFsJyB9LFxuICAgICAgdHlwZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfVxuICB9KVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IHJlZihudWxsKVxuICBjb25zdCBkaW1lbnNpb25zID0gcmVhY3RpdmUoe1xuICAgICAgd2lkdGg6IDEwMCxcbiAgICAgIGhlaWdodDogMTAwXG4gIH0pXG5cbiAgY29uc3Qgc3Ryb2tlV2lkdGggPSByZWYoMSlcblxuICBjb25zdCBzeW1ib2xIYWxmV2lkdGggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gMjBcbiAgfSlcblxuICBjb25zdCBzeW1ib2xIYWxmSGVpZ2h0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY291bnQgPSBwcm9wcy5jaGlsZHJlbkNvdW50XG4gICAgICByZXR1cm4gNiAvICgxLjA1ICoqIGNvdW50KVxuICB9KVxuXG4gIGNvbnN0IGlzQWdncmVnYXRpb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy50eXBlID09PSAnYWdncmVnYXRpb24nKVxuICBjb25zdCBpc1NwZWNpYWxpemF0aW9uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudHlwZSA9PT0gJ3NwZWNpYWxpemF0aW9uJylcbiAgY29uc3QgaXNQcm9wZXJ0eSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmNoaWxkcmVuQ291bnQgPT09IDApXG5cbiAgY29uc3QgcGFyZW50UG9zaXRpb24gPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgeDogZGltZW5zaW9ucy53aWR0aCxcbiAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0IC8gMlxuICB9KSlcblxuICBjb25zdCBiYXJQb3NpdGlvbiA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB4OiBkaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0IC8gcHJvcHMuY2hpbGRyZW5Db3VudCAvIDJcbiAgfSkpXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLnRyZWUtYm94IHN2ZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBnLnZlcnRpY2FsIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG4gIH1cbiAgZ1tkYXRhLWNoaWxkcmVuLWNvdW50PVwiMFwiXSAucmVsYXRpb24tbGluZSB7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAzO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgOmNsYXNzPVwiWyAnZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jb250YWluZXInLCBgZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS0ke2NhdGVnb3J5Lm5hbWV9YCBdXCJcbiAgICAgICA6ZGF0YS1nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5PVwiY2F0ZWdvcnkubmFtZVwiPlxuXG4gICAgPGRpdiBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnlcIlxuICAgICAgICAgOmNsYXNzPVwieyAncm9vdC1nZW5lcmljLXN5bmNocm9uaWMtY2F0ZWdvcnknOiBjYXRlZ29yeS5pc1Jvb3QgfVwiXG4gICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogY2F0ZWdvcnkuY29sb3IgfHwgJ3RyYW5zcGFyZW50JyB9XCJcbiAgICAgICAgIHYtaWY9XCJjYXRlZ29yeVwiXG4gICAgICAgICA6ZGF0YS1nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5PVwiY2F0ZWdvcnkubmFtZVwiPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlblwiPlxuICAgICAgICA8ZGl2IHYtZm9yPVwiYyBpbiBjYXRlZ29yeS5jaGlsZHJlblwiIDprZXk9XCJjLm5hbWVcIj5cbiAgICAgICAgICA8R2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeU92ZXJ2aWV3XG4gICAgICAgICAgICA6cHJvamVjdElkPVwicHJvamVjdElkXCJcbiAgICAgICAgICAgIDpsYXlvdXQ9XCJsYXlvdXRcIlxuICAgICAgICAgICAgOmN1cnJlbnRJbnRlcnZpZXdJZD1cImN1cnJlbnRJbnRlcnZpZXdJZFwiXG4gICAgICAgICAgICA6Y2F0ZWdvcnk9XCJjXCI+XG4gICAgICAgICAgPC9HZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uXCJcbiAgICAgICAgICAgdi1pZj1cImNhdGVnb3J5LmNoaWxkcmVuPy5sZW5ndGhcIj5cbiAgICAgICAgPFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb25cbiAgICAgICAgICA6dHlwZT1cImFic3RyYWN0aW9uVHlwZVwiXG4gICAgICAgICAgOmRpcmVjdGlvbj1cImxheW91dFwiXG4gICAgICAgICAgOmNoaWxkcmVuQ291bnQ9XCJjYXRlZ29yeS5jaGlsZHJlbj8ubGVuZ3RoXCI+XG4gICAgICAgIDwvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXJcIlxuICAgICAgICAgICA6Y2xhc3M9XCJ7ICdoYXMtZXJyb3InOiBjYXRlZ29yeS5lcnJvcnM/Lmxlbmd0aCB9XCI+XG4gICAgICAgIDxEcmFnRWxlbWVudFxuICAgICAgICAgIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY29udGVudC1jZW50ZXJcIlxuICAgICAgICAgIHR5cGU9XCJnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5XCJcbiAgICAgICAgICA6ZGF0YT1cImNhdGVnb3J5Lm5hbWVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktbmFtZVwiPnt7IGNhdGVnb3J5Lm5hbWUgfX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvRHJhZ0VsZW1lbnQ+XG4gICAgICAgICAgPHEtdG9vbHRpcCAgY2xhc3M9XCJiZy1yZWQtNVwiIGFuY2hvcj1cInRvcCByaWdodFwiIHNlbGY9XCJ0b3AgbGVmdFwiIHYtaWY9XCJjYXRlZ29yeS5lcnJvcnM/Lmxlbmd0aFwiPlxuICAgICAgICAgICAge3sgY2F0ZWdvcnkubmFtZSB9fVxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cImVycm9yLCBrZXkgaW4gY2F0ZWdvcnkuZXJyb3JzXCJcbiAgICAgICAgICAgICAgICAgOmtleT1cImtleVwiPlxuICAgICAgICAgICAgICB7eyBlcnJvciB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9xLXRvb2x0aXA+XG4gICAgICAgICAgPHEtdG9vbHRpcCBhbmNob3I9XCJ0b3AgcmlnaHRcIiBzZWxmPVwidG9wIGxlZnRcIiB2LWVsc2U+XG4gICAgICAgICAgICB7eyBjYXRlZ29yeS5uYW1lIH19XG4gICAgICAgICAgPC9xLXRvb2x0aXA+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICB2LWlmPVwiIWNhdGVnb3J5LmlzUm9vdFwiXG4gICAgICAgIGNsYXNzPVwiZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXJcIlxuICAgICAgICA+XG4gICAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uXG4gICAgICAgICAgOmRpcmVjdGlvbj1cImxheW91dFwiXG4gICAgICAgICAgOmNoaWxkcmVuQ291bnQ9XCIxXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IERyYWdFbGVtZW50IGZyb20gJy4vRHJhZ0VsZW1lbnQudnVlJ1xuICBpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbiBmcm9tICcuL1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24udnVlJ1xuXG4gIGltcG9ydCB0eXBlIHsgR2VuZXJpY0NhdGVnb3J5IH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcblxuICAvLyBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICAvLyBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoZGVmaW5lUHJvcHM8e1xuICAgICAgcHJvamVjdElkOiBzdHJpbmcsXG4gICAgICBjYXRlZ29yeTogIEdlbmVyaWNDYXRlZ29yeSxcbiAgICAgIGN1cnJlbnRJbnRlcnZpZXdJZDogc3RyaW5nIHwgbnVsbCxcbiAgICAgIGxheW91dDogc3RyaW5nXG4gIH0+KCksIHtcbiAgICAgIGxheW91dDogJ2hvcml6b250YWwnXG4gIH0pXG5cbiAgLy8gRklYTUU6IGRldGVjdCBpbmNvbnNpc3RlbmNpZXNcbiAgY29uc3QgYWJzdHJhY3Rpb25UeXBlID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuY2F0ZWdvcnkuaW5zdGFuY2VzWzBdPy5hYnN0cmFjdGlvblR5cGUgfHwgXCJcIilcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeSB7XG4gICAgICAgbWFyZ2luOiAwO1xuICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgIGZsZXg6IDE7XG4gICAgICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC52ZXJ0aWNhbCAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIH1cbiAgLnZlcnRpY2FsIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIH1cbiAgLnZlcnRpY2FsIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IDAgNHB4O1xuICB9XG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LW5hbWUge1xuICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBmb250LXNpemU6IHZhcigtLW92ZXJ2aWV3LWZvbnQtc2l6ZSk7XG4gICAgICB3aWR0aDogdmFyKC0tb3ZlcnZpZXctd2lkdGgpO1xuICAgICAgaGVpZ2h0OiB2YXIoLS1vdmVydmlldy1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLmdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb24sXG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWZpbGxlciB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1vdmVydmlldy1oZWlnaHQpICsgMnB4KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICBoZWlnaHQ6IC1tb3otYXZhaWxhYmxlO1xuICB9XG4gIC52ZXJ0aWNhbCAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbiB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLW92ZXJ2aWV3LWhlaWdodCkgKyAycHgpO1xuICB9XG4gIC5nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5LWZpbGxlciB7XG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tb3ZlcnZpZXctaGVpZ2h0KSArIDJweCk7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBmbGV4OiAxO1xuICB9XG4gIC52ZXJ0aWNhbCAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXIuaGFzLWVycm9yIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgfVxuICAucm9vdC1nZW5lcmljLXN5bmNocm9uaWMtY2F0ZWdvcnk6aG92ZXIge1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNkZGQ7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJnZW5lcmljY2F0ZWdvcmllcy1jb250YWluZXJcIlxuICAgICAgIDpjbGFzcz1cImxheW91dFwiXG4gICAgICAgOmtleT1cInByb2plY3RJZFwiXG4gICAgICAgOmRhdGEtcHJvamVjdD1cInByb2plY3RJZFwiPlxuXG4gICAgPEdlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlPdmVydmlld1xuICAgICAgdi1mb3I9XCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXCJcbiAgICAgIDprZXk9XCJjYXRlZ29yeS5uYW1lXCJcbiAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0SWRcIlxuICAgICAgOmxheW91dD1cImxheW91dFwiXG4gICAgICA6Y3VycmVudEludGVydmlld0lkPVwiY3VycmVudEludGVydmlld0lkXCJcbiAgICAgIDpjYXRlZ29yeT1cImNhdGVnb3J5XCI+XG4gICAgPC9HZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXc+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCBHZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXcgZnJvbSAnLi9HZW5lcmljU3luY2hyb25pY0NhdGVnb3J5T3ZlcnZpZXcudnVlJ1xuXG4gIGltcG9ydCB0eXBlIHsgR2VuZXJpY0NhdGVnb3J5IH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcblxuICBpbnRlcmZhY2UgUHJvcHMge1xuICAgICAgcHJvamVjdElkOiBzdHJpbmcsXG4gICAgICBjYXRlZ29yaWVzOiBHZW5lcmljQ2F0ZWdvcnlbXSxcbiAgICAgIGN1cnJlbnRJbnRlcnZpZXdJZDogc3RyaW5nLFxuICAgICAgbGF5b3V0OiBzdHJpbmdcbiAgfVxuXG4gIHdpdGhEZWZhdWx0cyhkZWZpbmVQcm9wczxQcm9wcz4oKSwge1xuICAgICAgcHJvamVjdElkOiBcIlwiLFxuICAgICAgY3VycmVudEludGVydmlld0lkOiBcIlwiLFxuICAgICAgbGF5b3V0OiAnaG9yaXpvbnRhbCdcbiAgfSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLmdlbmVyaWNjYXRlZ29yaWVzLWNvbnRhaW5lciBkaXYge1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICB9XG4gICAgLmdlbmVyaWNjYXRlZ29yaWVzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5nZW5lcmljY2F0ZWdvcmllcy1jb250YWluZXIudmVydGljYWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgIH1cbiAgICAgLmdlbmVyaWNjYXRlZ29yaWVzLWNvbnRhaW5lciA+ICoge1xuICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidHJhbnNjcmlwdFwiXG4gICAgICAgcmVmPVwidHJhbnNjcmlwdFwiXG4gICAgICAgQG1vdXNldXA9XCJlbWl0U2VsZWN0aW9uXCI+XG4gICAgPHNwYW5cbiAgICAgIHYtZm9yPVwic3BhbiBpbiBzcGFuc1wiXG4gICAgICA6a2V5PVwic3Bhbi5pZFwiXG4gICAgICA6ZGF0YS1zcGFuLWlkPVwic3Bhbi5pZFwiXG4gICAgICA6ZGF0YS1hbm5vdGF0aW9uLWlkcz1cInNwYW4uYW5ub3RhdGlvbklkc1wiXG4gICAgICA6ZGF0YS10ZXh0LW9mZnNldD1cInNwYW4uc3RhcnRcIlxuICAgICAgOmNsYXNzPVwic3BhbkNsYXNzZXNbc3Bhbi5pZF1cIlxuICAgICAgOnN0eWxlPVwiZ2V0U3BhblN0eWxlKHNwYW4pXCJcbiAgICAgIHYtYmluZD1cInNwYW5BdHRyaWJ1dGVzXCJcbiAgICAgIHYtb249XCJwcmVwcGVkU3BhbkV2ZW50c1wiXG4gICAgICA+e3sgc3Bhbi50ZXh0IH19PC9zcGFuPlxuICAgIDxzbG90PlxuICAgIDwvc2xvdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICAvLyBAdHMtbm9jaGVja1xuICBjb25zdCBPVkVSTEFQUElOR19DT0xPUiA9IFwiI2RlYWRiYWJlXCJcblxuICAvLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Rlcmh1ZXJzdC9mbGF0dGVuLW92ZXJsYXBwaW5nLXJhbmdlcy9cbiAgLy8gSVNDIExpY2Vuc2VcbiAgLy8gQ29weXJpZ2h0IChjKSAyMDE4LCBKYW5uaXMgUlxuICAvLyBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlXG4gIC8vIGZvciBhbnkgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLCBwcm92aWRlZFxuICAvLyB0aGF0IHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhclxuICAvLyBpbiBhbGwgY29waWVzLlxuICAvLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTExcbiAgLy8gV0FSUkFOVElFUyBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRFxuICAvLyBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIC8vIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsIElORElSRUNULCBPUlxuICAvLyBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuICAvLyBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCxcbiAgLy8gTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOXG4gIC8vIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG5cbiAgY29uc3Qgc29ydGVkSW5zZXJ0ID0gKGFyciwgdmFsKSA9PiB7XG4gICAgICBjb25zdCBsID0gYXJyLmxlbmd0aFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAodmFsIDw9IGFycltpXSkge1xuICAgICAgICAgICAgICBhcnIuc3BsaWNlKGksIDAsIHZhbClcbiAgICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcnIucHVzaCh2YWwpXG4gICAgICByZXR1cm4gbFxuICB9XG5cbiAgY29uc3QgZmxhdHRlbiA9IChyYW5nZXMpID0+IHtcbiAgICAgIGNvbnN0IFNUQVJUID0gMVxuICAgICAgY29uc3QgU1RPUCA9IDBcblxuICAgICAgbGV0IGwsIGlcblxuICAgICAgY29uc3QgaW5kZXhlcyA9IFtdXG4gICAgICBjb25zdCBpZHMgPSBbXVxuICAgICAgY29uc3QgdHlwZXMgPSBbXVxuXG4gICAgICBsID0gcmFuZ2VzLmxlbmd0aFxuICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHJhbmdlID0gcmFuZ2VzW2ldXG5cbiAgICAgICAgICBjb25zdCBzdGFydEkgPSBzb3J0ZWRJbnNlcnQoaW5kZXhlcywgcmFuZ2VbMV0pXG4gICAgICAgICAgaWRzLnNwbGljZShzdGFydEksIDAsIHJhbmdlWzBdKVxuICAgICAgICAgIHR5cGVzLnNwbGljZShzdGFydEksIDAsIFNUQVJUKVxuXG4gICAgICAgICAgY29uc3QgZW5kSSA9IHNvcnRlZEluc2VydChpbmRleGVzLCByYW5nZVsxXSArIHJhbmdlWzJdKVxuICAgICAgICAgIGlkcy5zcGxpY2UoZW5kSSwgMCwgcmFuZ2VbMF0pXG4gICAgICAgICAgdHlwZXMuc3BsaWNlKGVuZEksIDAsIFNUT1ApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXRlID0gbmV3IE1hcCgpXG4gICAgICBzdGF0ZS5zZXQoaWRzWzBdLCB0cnVlKSAvLyBpbml0aWFsIHN0YXRlXG5cbiAgICAgIGwgPSBpZHMubGVuZ3RoXG4gICAgICBmdW5jdGlvbiogaXRlcmF0b3IgKCkge1xuICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleGVzW2ldXG4gICAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGluZGV4ZXNbaSAtIDFdXG5cbiAgICAgICAgICAgICAgaWYgKGluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICB5aWVsZCBbXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBsYXN0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShzdGF0ZS5rZXlzKCkpXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHR5cGVzW2ldID09PSBTVEFSVCkge1xuICAgICAgICAgICAgICAgICAgc3RhdGUuc2V0KGlkc1tpXSwgdHJ1ZSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRlLmRlbGV0ZShpZHNbaV0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IFtTeW1ib2wuaXRlcmF0b3JdOiBpdGVyYXRvciB9XG4gIH1cblxuICAvLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9jeWNsZWN5Y2xlL3Z1ZS1hbm5vdGF0ZWQtdGV4dC9cbiAgLy8gTUlUIExpY2Vuc2VcbiAgLy8gQ29weXJpZ2h0IChjKSAyMDE5IE5pY2sgTW9ybGV5XG5cbiAgLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgLy8gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAgLy8gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4gIC8vIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICAvLyBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICAvLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAgLy8gU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAgLy8gY29uZGl0aW9uczpcbiAgLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgLy8gaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gIC8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIC8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICAvLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gIC8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gIC8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gIC8vIFNPRlRXQVJFLlxuICBjb25zdCBidWlsZFNwYW5MaXN0ID0gKHRleHQsIGFubm90YXRpb25zKSA9PiB7XG4gICAgICAvLyBQcmVwYXJlIHJhbmdlIGxpc3QgdG8gc2VuZCB0byBmbGF0dGVuLW92ZXJsYXBwaW5nLXNwYW5zLmZsYXR0ZW4oKVxuICAgICAgbGV0IHJhbmdlcyA9IFtdXG4gICAgICBjb25zdCBmdWxsUmFuZ2UgPSBbXCJiYXNlVGV4dFwiLCAwLCB0ZXh0Lmxlbmd0aF1cbiAgICAgIHJhbmdlcy5wdXNoKGZ1bGxSYW5nZSlcbiAgICAgIGNvbnN0IGFubm90YXRpb25SYW5nZXMgPSBhbm5vdGF0aW9ucy5tYXAoYW5ub3RhdGlvbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIFthbm5vdGF0aW9uLmlkLCBhbm5vdGF0aW9uLnN0YXJ0LCBhbm5vdGF0aW9uLmxlbmd0aF1cbiAgICAgIH0pXG4gICAgICByYW5nZXMgPSByYW5nZXMuY29uY2F0KGFubm90YXRpb25SYW5nZXMpXG4gICAgICAvLyBGbGF0dGVuXG4gICAgICBjb25zdCBzZWN0aW9ucyA9IEFycmF5LmZyb20oZmxhdHRlbihyYW5nZXMpKVxuICAgICAgLy8gRWFjaCBzZWN0aW9uIGJlY29tZXMgYSBzcGFuXG4gICAgICBsZXQgc2VjdGlvblRleHRTdGFydCA9IDBcbiAgICAgIGxldCBzcGFuSWQgPSAwXG4gICAgICBjb25zdCBzcGFucyA9IHNlY3Rpb25zLm1hcChzZWN0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCBsZW5ndGggPSBOdW1iZXIoc2VjdGlvblswXSlcbiAgICAgICAgICBsZXQgYW5ub3RhdGlvbklkcyA9IHNlY3Rpb25bMV1cbiAgICAgICAgICBhbm5vdGF0aW9uSWRzID0gYW5ub3RhdGlvbklkcy5maWx0ZXIoYW5ub3RhdGlvbklkID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFubm90YXRpb25JZCAhPT0gJ2Jhc2VUZXh0J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSBzZWN0aW9uVGV4dFN0YXJ0XG4gICAgICAgICAgY29uc3QgZW5kID0gc2VjdGlvblRleHRTdGFydCArIGxlbmd0aFxuICAgICAgICAgIGNvbnN0IHNlY3Rpb25UZXh0ID0gdGV4dC5zbGljZShzdGFydCwgZW5kKVxuICAgICAgICAgIGNvbnN0IHNwYW4gPSB7XG4gICAgICAgICAgICAgIGlkOiBzcGFuSWQsXG4gICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICAgIHRleHQ6IHNlY3Rpb25UZXh0LFxuICAgICAgICAgICAgICBhbm5vdGF0aW9uSWRzLFxuICAgICAgICAgICAgICBnZXQgYW5ub3RhdGlvbnMgKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFubm90YXRpb25zLmZpbHRlcihhbm5vdGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYW5ub3RhdGlvbklkcy5pbmNsdWRlcyhhbm5vdGF0aW9uLmlkKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuSWQgPSBzcGFuSWQgKyAxXG4gICAgICAgICAgc2VjdGlvblRleHRTdGFydCA9IGVuZFxuICAgICAgICAgIHJldHVybiBzcGFuXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHNwYW5zXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICBuYW1lOiBcIkFubm90YXRlZFRleHRcIixcbiAgICAgIGVtaXRzOiBbIFwic2VsZWN0aW9uXCIgXSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdGV4dDogU3RyaW5nLFxuICAgICAgICAgIGFubm90YXRpb25zOiB7XG4gICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xlYXJTZWxlY3Rpb246IHtcbiAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgZGVlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRBbm5vdGF0aW9uQ29sb3I6IHtcbiAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoYW5ub3RhdGlvbikge1xuICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIHJldHVybiBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29sb3JcbiAgICAgICAgICAgICAgICAgIC8vIElmIG51bGwsIG5vIHN0eWxlIGF0dHJpYnV0ZSB3aWxsIGJlIGdlbmVyYXRlZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0QW5ub3RhdGlvbkluZm86IEZ1bmN0aW9uLFxuICAgICAgICAgIHNwYW5FdmVudHM6IHtcbiAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0U3BhbkNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIChzcGFuKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3BhbkF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb21wdXRlZDoge1xuICAgICAgICAgIHNwYW5DbGFzc2VzOiB7XG4gICAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBzcGFuIGNsYXNzZXMgZm9yIGVhY2ggc3BhbiBpZCB1c2luZyBnZXRTcGFuQ2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyh0aGlzLnNwYW5zLm1hcChzcGFuID0+IFsgc3Bhbi5pZCwgdGhpcy5nZXRTcGFuQ2xhc3NlcyhzcGFuKSBdKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3BhbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbnMgPSBidWlsZFNwYW5MaXN0KHRoaXMudGV4dCwgdGhpcy5hbm5vdGF0aW9ucylcbiAgICAgICAgICAgICAgcmV0dXJuIHNwYW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmVwcGVkU3BhbkV2ZW50cyAoKSB7XG4gICAgICAgICAgICAgIC8vIEdldCBhbm5vdGF0aW9ucyBhbmQgcGFzcyB0byB0aGUgZXZlbnQgY2FsbGJhY2tcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbkV2ZW50cyA9IHRoaXMuc3BhbkV2ZW50c1xuICAgICAgICAgICAgICBjb25zdCBwcmVwcGVkU3BhbkV2ZW50cyA9IHt9XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNwYW5FdmVudHMpLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBzcGFuRXZlbnRzW2V2ZW50VHlwZV1cbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NhbGxiYWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuSWQgPSB0aGlzLmVsZW1lbnRTcGFuSWQoZS50YXJnZXQpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuc3BhbkJ5SWQoc3BhbklkKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25JZHMgPSBzcGFuLmFubm90YXRpb25JZHNcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IHRoaXMuZ2V0QW5ub3RhdGlvbnMoYW5ub3RhdGlvbklkcylcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlLCBhbm5vdGF0aW9ucylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHByZXBwZWRTcGFuRXZlbnRzW2V2ZW50VHlwZV0gPSBuZXdDYWxsYmFja1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm4gcHJlcHBlZFNwYW5FdmVudHNcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIGVsZW1lbnRTcGFuSWQgKGVsKSB7XG4gICAgICAgICAgICAgIGxldCBzcGFuSWQgPSBlbC5hdHRyaWJ1dGVzW1wiZGF0YS1zcGFuLWlkXCJdLnZhbHVlXG4gICAgICAgICAgICAgIHNwYW5JZCA9IE51bWJlcihzcGFuSWQpXG4gICAgICAgICAgICAgIHJldHVybiBzcGFuSWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNwYW5CeUlkIChzcGFuSWQpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbnMgPSB0aGlzLnNwYW5zLmZpbHRlcigoc3BhbikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwYW4uaWQgPT09IHNwYW5JZFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBjb25zdCBzcGFuID0gc3BhbnNbMF1cbiAgICAgICAgICAgICAgcmV0dXJuIHNwYW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldEFubm90YXRpb25zIChhbm5vdGF0aW9uSWRzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25zID0gdGhpcy5hbm5vdGF0aW9ucy5maWx0ZXIoKGFubm90YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhbm5vdGF0aW9uSWRzLmluY2x1ZGVzKGFubm90YXRpb24uaWQpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVybiBhbm5vdGF0aW9uc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0U3BhblN0eWxlOiBmdW5jdGlvbiAoc3Bhbikge1xuICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuZ2V0U3BhbkNvbG9yKHNwYW4pXG4gICAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRTcGFuQ29sb3I6IGZ1bmN0aW9uIChzcGFuKSB7XG4gICAgICAgICAgICAgIGxldCBjb2xvciA9IG51bGxcbiAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbklkcyA9IHNwYW4uYW5ub3RhdGlvbklkc1xuICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IHRoaXMuZ2V0QW5ub3RhdGlvbnMoYW5ub3RhdGlvbklkcylcbiAgICAgICAgICAgICAgbGV0IGNvbG9ycyA9IGFubm90YXRpb25zLm1hcCgoYW5ub3RhdGlvbikgPT5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QW5ub3RhdGlvbkNvbG9yKGFubm90YXRpb24pXG4gICAgICAgICAgICAgICkuZmlsdGVyKGNvbG9yID0+IGNvbG9yKVxuXG4gICAgICAgICAgICAgIGNvbG9ycyA9IFsuLi5uZXcgU2V0KGNvbG9ycyldXG4gICAgICAgICAgICAgIGlmIChjb2xvcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgLy8gT3ZlcmxhcHBpbmcgc3BhbnMgLSB1c2UgdGhlIG92ZXJsYXAgY29sb3JcbiAgICAgICAgICAgICAgICAgIGNvbG9yID0gT1ZFUkxBUFBJTkdfQ09MT1JcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2xvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBjb2xvciA9IGNvbG9yc1swXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIG51bGwgaWYgbm9uZSBzcGVjaWZpZWRcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRTZWxlY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKVxuICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gcmFuZ2Uuc3RhcnRDb250YWluZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyID09PSB0aGlzLiRyZWZzLnRyYW5zY3JpcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBhcmUgaW4gdGhlIHRyYW5zY3JpcHQgY29udGFpbmVyLlxuICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0Q29udGFpbmVyL2VuZENvbnRhaW5lciBzaG91bGQgYmUgdGV4dCBlbGVtZW50IHdob3NlIHBhcmVudCBpcyBhIHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiZWdpbiA9IE51bWJlcihyYW5nZS5zdGFydENvbnRhaW5lci5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGV4dE9mZnNldCkgKyByYW5nZS5zdGFydE9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IE51bWJlcihyYW5nZS5lbmRDb250YWluZXIucGFyZW50RWxlbWVudC5kYXRhc2V0LnRleHRPZmZzZXQpICsgcmFuZ2UuZW5kT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShiZWdpbiwgZW5kKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZW1pdFNlbGVjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXh0U2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICBpZiAodGV4dFNlbGVjdGlvbiAmJiB0ZXh0U2VsZWN0aW9uLmJlZ2luICE9PSB0ZXh0U2VsZWN0aW9uLmVuZCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcInNlbGVjdGlvblwiLCB0ZXh0U2VsZWN0aW9uKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4gIC50cmFuc2NyaXB0IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIH1cbiAgLmNhdGVnb3J5MSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbm5vdGF0aW9uLWNvbG9yLXJlZCk7XG4gIH1cbiAgLmNhdGVnb3J5MiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbm5vdGF0aW9uLWNvbG9yLWJsdWUpO1xuICB9XG4gIC5jYXRlZ29yeTMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci15ZWxsb3cpO1xuICB9XG4gIC5jYXRlZ29yeTQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci1ncmVlbik7XG4gIH1cbiAgLmNhdGVnb3J5MS5jYXRlZ29yeTIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci1taXhlZCk7XG4gIH1cbiAgLmNhdGVnb3J5MS5jYXRlZ29yeTMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci1taXhlZCk7XG4gIH1cbiAgLmNhdGVnb3J5MS5jYXRlZ29yeTQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci1taXhlZCk7XG4gIH1cbiAgLmNhdGVnb3J5Mi5jYXRlZ29yeTMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci1taXhlZCk7XG4gIH1cbiAgLmNhdGVnb3J5Mi5jYXRlZ29yeTQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci1taXhlZCk7XG4gIH1cbiAgLmNhdGVnb3J5My5jYXRlZ29yeTQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW5ub3RhdGlvbi1jb2xvci1taXhlZCk7XG4gIH1cbiAgLyogRm9yIHVuZGVmaW5lZCBjYXRlZ29yaWVzICovXG4gIC5jYXRlZ29yeTkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I4NzRjMTtcbiAgfVxuICAuZGVzY3JpcHRlbSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAuZGVzY3JpcHRlbS5kZXNjcmlwdGVtcyB7XG4gICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IGRvdWJsZTtcbiAgfVxuICAuZXh0cmFjdEhpZ2hsaWdodCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuZXh0cmFjdE9yaWdpbmFsIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIC5oaWdobGlnaHRlZCxcbiAgLmRlc2NyaXB0ZW0uaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTEuaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTIuaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTMuaGlnaGxpZ2h0ZWQsXG4gIC5jYXRlZ29yeTQuaGlnaGxpZ2h0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0ZWQtY29sb3IpICFpbXBvcnRhbnQ7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGVtLW1vZGlmaWNhdGlvblwiXG4gICAgICAgdi1pZj1cIm1vZGVsXCI+XG4gICAgPHAgY2xhc3M9XCJuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlRvIG1vZGlmeSB0aGUgZGVzY3JpcHRlbSwgc2VsZWN0IHRoZSBuZXcgdGV4dCBhbmQgdmFsaWRhdGUuPC9wPlxuICAgIDxwIGNsYXNzPVwidGV4dC1pdGFsaWMgbm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5UaGUgPHU+b3JpZ2luYWwgZGVzY3JpcHRlbTwvdT4gaXMgdW5kZXJsaW5lZCwgdGhlIDxiPm5ldyBzZWxlY3Rpb248L2I+IGlzIGJvbGQuPC9wPlxuICAgIDxBbm5vdGF0ZWRUZXh0XG4gICAgICBjbGFzcz1cInRleHRBbm5vdGF0aW9uQ29tcG9uZW50XCJcbiAgICAgIDp0ZXh0PVwiY29udGV4dFRleHRcIlxuICAgICAgOmFubm90YXRpb25zPVwiYW5ub3RhdGlvbnNcIlxuICAgICAgOmdldFNwYW5DbGFzc2VzPVwiZ2V0U3BhbkNsYXNzZXNcIlxuICAgICAgY2xlYXJTZWxlY3Rpb25cbiAgICAgIEBzZWxlY3Rpb249XCJ0ZXh0U2VsZWN0aW9uXCJcbiAgICAgIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IEFubm90YXRlZFRleHQgZnJvbSAnLi9Bbm5vdGF0ZWRUZXh0LnZ1ZSdcbiAgaW1wb3J0IHR5cGUgeyBUZXh0U2VsZWN0aW9uIH0gZnJvbSAnLi91dGlsJ1xuICBpbXBvcnQgeyBjbGFtcCB9IGZyb20gJy4vdXRpbCdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgbW9kZWwgPSBkZWZpbmVNb2RlbDxUZXh0U2VsZWN0aW9uPigpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBpbml0aWFsOiB7IHR5cGU6IE9iamVjdCB9XG4gIH0pXG5cbiAgY29uc3QgaW50ZXJ2aWV3ID0gY29tcHV0ZWQoKCkgPT4gbW9kZWwudmFsdWUgPyBzdG9yZS5nZXRJbnRlcnZpZXcobW9kZWwudmFsdWUuaW50ZXJ2aWV3SWQpIDogbnVsbClcblxuICBjb25zdCBjb250ZXh0VGV4dCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChpbnRlcnZpZXcudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gaW50ZXJ2aWV3LnZhbHVlLnRleHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBnZXRTcGFuQ2xhc3NlcyAoc3BhbjogYW55KSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gc3Bhbi5hbm5vdGF0aW9ucy5tYXAoKGE6IGFueSkgPT4gYS5jbGFzcylcbiAgICAgIHJldHVybiBbIC4uLm5ldyBTZXQoY2xhc3NlcykgXS5qb2luKFwiIFwiKVxuICB9XG5cbiAgY29uc3QgaW5pdGlhbExlbmd0aCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5pbml0aWFsKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzLmluaXRpYWwuZW5kSW5kZXggLSBwcm9wcy5pbml0aWFsLnN0YXJ0SW5kZXhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBhbm5vdGF0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIFJldHVybiAzIGFubm90YXRpb25zOlxuICAgICAgLy8gLSBoaWdobGlnaHRlZCBvbmUgKGRlc2NyaXB0ZW0pXG4gICAgICAvLyAtIGhpZGRlbiBzdGFydFxuICAgICAgLy8gLSBoaWRkZW4gZW5kXG4gICAgICBjb25zdCBvdXQgPSBbXVxuICAgICAgaWYgKG1vZGVsLnZhbHVlICYmIHByb3BzLmluaXRpYWwpIHtcbiAgICAgICAgICBjb25zdCBpbnRlcnZpZXdJZCA9IG1vZGVsLnZhbHVlLmludGVydmlld0lkXG4gICAgICAgICAgY29uc3QgbWF4SW5kZXggPSBpbnRlcnZpZXcudmFsdWU/LnRleHQubGVuZ3RoID8/IDBcbiAgICAgICAgICBjb25zdCBsZW5ndGggPSBtb2RlbC52YWx1ZS5lbmRJbmRleCAtIG1vZGVsLnZhbHVlLnN0YXJ0SW5kZXhcbiAgICAgICAgICBjb25zdCBleHRyYWN0U3RhcnQgPSBjbGFtcChwcm9wcy5pbml0aWFsLnN0YXJ0SW5kZXggLSBpbml0aWFsTGVuZ3RoLnZhbHVlIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCBtYXhJbmRleClcbiAgICAgICAgICBjb25zdCBleHRyYWN0RW5kID0gY2xhbXAocHJvcHMuaW5pdGlhbC5lbmRJbmRleCArIGluaXRpYWxMZW5ndGgudmFsdWUgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCBtYXhJbmRleClcbiAgICAgICAgICBpZiAoZXh0cmFjdFN0YXJ0KSB7XG4gICAgICAgICAgICAgIG91dC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGludGVydmlld0lkLFxuICAgICAgICAgICAgICAgICAgaWQ6ICdoaWRkZW5fc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICBsZW5ndGg6IGV4dHJhY3RTdGFydCxcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiAnaGlkZGVuIGV4dHJhY3RTdGFydCdcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgb3V0LnB1c2goe1xuICAgICAgICAgICAgICBpbnRlcnZpZXdJZCxcbiAgICAgICAgICAgICAgaWQ6ICdjdXJyZW50X2V4dHJhY3QnLFxuICAgICAgICAgICAgICBzdGFydDogcHJvcHMuaW5pdGlhbC5zdGFydEluZGV4LFxuICAgICAgICAgICAgICBsZW5ndGg6IHByb3BzLmluaXRpYWwuZW5kSW5kZXggLSBwcm9wcy5pbml0aWFsLnN0YXJ0SW5kZXgsXG4gICAgICAgICAgICAgIGNsYXNzOiAnZXh0cmFjdE9yaWdpbmFsJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgb3V0LnB1c2goe1xuICAgICAgICAgICAgICBpbnRlcnZpZXdJZCxcbiAgICAgICAgICAgICAgaWQ6ICduZXdfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgc3RhcnQ6IG1vZGVsLnZhbHVlLnN0YXJ0SW5kZXgsXG4gICAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgICAgY2xhc3M6ICdleHRyYWN0SGlnaGxpZ2h0J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKGV4dHJhY3RFbmQgPCBtYXhJbmRleCkge1xuICAgICAgICAgICAgICBvdXQucHVzaCh7XG4gICAgICAgICAgICAgICAgICBpbnRlcnZpZXdJZCxcbiAgICAgICAgICAgICAgICAgIGlkOiAnaGlkZGVuX2VuZCcsXG4gICAgICAgICAgICAgICAgICBzdGFydDogZXh0cmFjdEVuZCxcbiAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWF4SW5kZXggLSBleHRyYWN0RW5kLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6ICdoaWRkZW4gZXh0cmFjdEVuZCdcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0XG4gIH0pXG5cbiAgZnVuY3Rpb24gdGV4dFNlbGVjdGlvbiAoZGF0YTogYW55KSB7XG4gICAgICBpZiAobW9kZWwudmFsdWUpIHtcbiAgICAgICAgICBtb2RlbC52YWx1ZS5zdGFydEluZGV4ID0gZGF0YS5iZWdpblxuICAgICAgICAgIG1vZGVsLnZhbHVlLmVuZEluZGV4ID0gZGF0YS5lbmRcbiAgICAgIH1cbiAgfVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLnRleHRBbm5vdGF0aW9uQ29tcG9uZW50IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRlc2NyaXB0ZW1cIlxuICAgICAgIHYtaWY9XCJkZXNjcmlwdGVtXCJcbiAgICAgICA6ZGF0YS1kZXNjcmlwdGVtPVwiZGVzY3JpcHRlbS5pZFwiXG4gICAgICAgOnRpdGxlPVwiZGVzY3JpcHRlbS50ZXh0XCI+XG4gICAgPERyYWdFbGVtZW50XG4gICAgICB0eXBlPVwiZGVzY3JpcHRlbVwiXG4gICAgICBjbGFzcz1cImRlc2NyaXB0ZW0taGVhZGVyXCJcbiAgICAgIDpkYXRhPVwiZGVzY3JpcHRlbUlkXCI+XG4gICAgICA8cS1pY29uXG4gICAgICAgIHJlZj1cImhhbmRsZVwiXG4gICAgICAgIGNsYXNzPVwiZGVzY3JpcHRlbS1oYW5kbGVcIlxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICBAY2xpY2subWV0YT1cImRlYnVnXCJcbiAgICAgICAgQGNsaWNrPVwic2V0SGlnaGxpZ2h0ZWRcIlxuICAgICAgICBuYW1lPVwibWRpLWZvcm1hdC1xdW90ZS1jbG9zZS1vdXRsaW5lXCI+PC9xLWljb24+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGVtLWxhYmVsXCI+e3sgZGVzY3JpcHRlbS50ZXh0IH19PC9zcGFuPlxuICAgICAgICA8cS1wb3B1cC1lZGl0IHRpdGxlPVwiU2VsZWN0IHRoZSBhcHByb3ByaWF0ZSB0ZXh0IGZyYWdtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWlzUmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGVzY3JpcHRlbUpzb25cIlxuICAgICAgICAgICAgICAgICAgICAgIHYtc2xvdD1cInNjb3BlXCI+XG4gICAgICAgICAgPERlc2NyaXB0ZW1Nb2RpZmljYXRpb25EaWFsb2dcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzY29wZS52YWx1ZVwiXG4gICAgICAgICAgICA6aW5pdGlhbD1cInNjb3BlLmluaXRpYWxWYWx1ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3EtcG9wdXAtZWRpdD5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxxLXNwYWNlIC8+XG4gICAgICA8ZGl2IHYtaWY9XCJ3aXRoQ29udGV4dFwiXG4gICAgICAgICAgIGNsYXNzPVwiZGVzY3JpcHRlbS1jb250ZXh0XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGV4dC1pdGVtXCJcbiAgICAgICAgICAgICAgdi1pZj1cImNvbnRleHQuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnlcIj5cbiAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgbmFtZT1cIm1kaS1hbHBoYS1zLWJveC1vdXRsaW5lXCI+PC9xLWljb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb3BlcnR5LW5hbWVcIj57eyBjb250ZXh0LnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5Lm5hbWUgfX08L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzPVwiY29udGV4dC1pdGVtXCJcbiAgICAgICAgICBAY2xpY2suc3RvcD1cImp1bXBUb01vbWVudChjb250ZXh0Lm1vbWVudC5pZClcIlxuICAgICAgICAgIHYtaWY9XCJjb250ZXh0Lm1vbWVudFwiPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICBuYW1lPVwibWRpLWFscGhhLWQtYm94LW91dGxpbmVcIj48L3EtaWNvbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vbWVudC1uYW1lXCI+e3sgY29udGV4dC5tb21lbnQubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgdi1pZj1cIndpdGhNZW51XCJcbiAgICAgICAgICAgY2xhc3M9XCJkZXNjcmlwdGVtLW1lbnVcIj5cbiAgICAgICAgPHEtc3BhY2UgLz5cbiAgICAgICAgPEVsZW1lbnRNZW51XG4gICAgICAgICAgOmFjdGlvbnM9XCJtZW51QWN0aW9uc1wiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvRHJhZ0VsZW1lbnQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuICBpbXBvcnQgRGVzY3JpcHRlbU1vZGlmaWNhdGlvbkRpYWxvZyBmcm9tICcuL0Rlc2NyaXB0ZW1Nb2RpZmljYXRpb25EaWFsb2cudnVlJ1xuICBpbXBvcnQgRHJhZ0VsZW1lbnQgZnJvbSAnLi9EcmFnRWxlbWVudC52dWUnXG4gIGltcG9ydCBFbGVtZW50TWVudSBmcm9tICcuL0VsZW1lbnRNZW51LnZ1ZSdcbiAgaW1wb3J0IE1vbWVudCBmcm9tICdzdG9yZXMvbW9kZWxzL21vbWVudCdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5IGZyb20gJ3N0b3Jlcy9tb2RlbHMvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnknXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBkZXNjcmlwdGVtSWQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sXG4gICAgICB3aXRoQ29udGV4dDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgICAgd2l0aE1lbnU6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxuICAgICAgaXNSZWFkb25seTogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9XG4gIH0pXG5cbiAgY29uc3QgZGVzY3JpcHRlbSA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldERlc2NyaXB0ZW0ocHJvcHMuZGVzY3JpcHRlbUlkKSlcblxuICBjb25zdCB7XG4gICAgICBoaWdobGlnaHRlZERlc2NyaXB0ZW1JZFxuICB9ID0gc3RvcmVUb1JlZnMoaXN0b3JlKVxuXG4gIGZ1bmN0aW9uIGRlYnVnICgpIHtcbiAgICAgICh3aW5kb3cgYXMgYW55KS5kZXNjcmlwdGVtID0gZGVzY3JpcHRlbS52YWx1ZVxuICAgICAgY29uc29sZS5sb2coXCJEZXNjcmlwdGVtXCIsIGRlc2NyaXB0ZW0udmFsdWU/LnRvSlNPTigpKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0SGlnaGxpZ2h0ZWQgKCkge1xuICAgICAgaWYgKGhpZ2hsaWdodGVkRGVzY3JpcHRlbUlkLnZhbHVlID09PSBwcm9wcy5kZXNjcmlwdGVtSWQpIHtcbiAgICAgICAgICBoaWdobGlnaHRlZERlc2NyaXB0ZW1JZC52YWx1ZSA9IFwiXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGlnaGxpZ2h0ZWREZXNjcmlwdGVtSWQudmFsdWUgPSBwcm9wcy5kZXNjcmlwdGVtSWRcbiAgICAgIH1cbiAgfVxuXG4gIHR5cGUgQ29udGV4dCA9IHtcbiAgICAgIG1vbWVudD86IE1vbWVudCxcbiAgICAgIHNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5PzogU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnksXG5cbiAgfVxuXG4gIC8vIGNvbnRleHQgaXMgYW4gb2JqZWN0IHdpdGggb3B0aW9uYWwgbW9tZW50IC8gc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkgdmFsdWVzXG4gIGNvbnN0IGNvbnRleHQgPSBjb21wdXRlZCgoKTogQ29udGV4dCA9PiB7XG4gICAgICBpZiAoZGVzY3JpcHRlbS52YWx1ZSAmJiBkZXNjcmlwdGVtLnZhbHVlLmp1c3RpZmljYXRpb24pIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnQgPSBzdG9yZS5nZXRKdXN0aWZpY2F0aW9uUGFyZW50KGRlc2NyaXB0ZW0udmFsdWUuanVzdGlmaWNhdGlvbi5wYXJlbnRJZClcbiAgICAgICAgICAvLyBNb21lbnQ6ICR7bW9tZW50Lm5hbWV9XG4gICAgICAgICAgLy8gQ2F0ZWdvcnk6ICR7Y2F0ZWdvcnkubW9tZW50Lm5hbWV9IHwgJHtjYXRlZ29yeS5uYW1lfVxuICAgICAgICAgIC8vIFByb3BlcnR5OiAke3Byb3BlcnR5LmNhdGVnb3J5aW5zdGFuY2UubW9tZW50Lm5hbWV9IHwgJHtwcm9wZXJ0eS5jYXRlZ29yeWluc3RhbmNlLm5hbWV9IHwgJHtwcm9wZXJ0eS5uYW1lfTogJHtwcm9wZXJ0eS52YWx1ZX1cbiAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuYXNDb250ZXh0XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgfVxuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHsgfVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGRlc2NyaXB0ZW1Kc29uID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0OiAoKSA9PiBkZXNjcmlwdGVtLnZhbHVlPy50b0pTT04oKSA/PyB7fSxcbiAgICAgIHNldDogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgc3RvcmUudXBkYXRlRGVzY3JpcHRlbShwcm9wcy5kZXNjcmlwdGVtSWQsIHtcbiAgICAgICAgICAgICAgc3RhcnRJbmRleDogdmFsdWUuc3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgZW5kSW5kZXg6IHZhbHVlLmVuZEluZGV4XG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBqdW1wVG9Nb21lbnQgKGlkZW50aWZpZXI6IHN0cmluZykge1xuICAgICAgaXN0b3JlLnNldEhpZ2hsaWdodGVkTW9tZW50SWQoaWRlbnRpZmllcilcbiAgfVxuXG4gIGltcG9ydCB0eXBlIHsgTmFtZWRBY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL3V0aWwudHMnXG5cbiAgY29uc3QgbWVudUFjdGlvbnM6IE5hbWVkQWN0aW9uW10gPSBbXG4gICAgICBbIFwiRHVwbGljYXRlXCIsICgpID0+IHN0b3JlLmR1cGxpY2F0ZURlc2NyaXB0ZW0ocHJvcHMuZGVzY3JpcHRlbUlkKSBdLFxuICAgICAgWyBcIkRlbGV0ZVwiLCAoKSA9PiBzdG9yZS5kZWxldGVEZXNjcmlwdGVtKHByb3BzLmRlc2NyaXB0ZW1JZCkgXVxuICBdXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmRlc2NyaXB0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBoZWlnaHQ6IDEuMmVtO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuZGVzY3JpcHRlbS1oZWFkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAuZGVzY3JpcHRlbS1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktZGVzY3JpcHRlbS13aWR0aCk7XG4gICAgICBoZWlnaHQ6IDEuMmVtO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4gIC5kZXNjcmlwdGVtLWhhbmRsZSB7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuZGVzY3JpcHRlbS1oYW5kbGU6aG92ZXIge1xuICAgICAgb3BhY2l0eTogLjc7XG4gIH1cbiAgLmRlc2NyaXB0ZW0tY29udGV4dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuY29udGV4dC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICB9XG4gIC5jb250ZXh0LWl0ZW0gKyAuY29udGV4dC1pdGVtIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gICAgICBwYWRkaW5nOiAwIDRweDtcbiAgfVxuICAuZGVzY3JpcHRlbS1tZW51IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLmRlc2NyaXB0ZW0taGVhZGVyOmhvdmVyIC5kZXNjcmlwdGVtLW1lbnUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImp1c3RpZmljYXRpb25cIlxuICAgICAgIHYtaWY9XCJqdXN0aWZpY2F0aW9uSWRcIlxuICAgICAgIDpkYXRhLWp1c3RpZmljYXRpb249XCJqdXN0aWZpY2F0aW9uSWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwianVzdGlmaWNhdGlvbi1tZXRhZGF0YVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJqdXN0aWZpY2F0aW9uLW5hbWVcIj57eyBqdXN0aWZpY2F0aW9uPy5uYW1lIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDx1bCBjbGFzcz1cImp1c3RpZmljYXRpb24tZGVzY3JpcHRlbXNcIj5cbiAgICAgIDxsaSB2LWZvcj1cImRlc2NyaXB0ZW0gaW4ganVzdGlmaWNhdGlvbj8uZGVzY3JpcHRlbXNcIiA6a2V5PVwiZGVzY3JpcHRlbS5pZFwiPlxuICAgICAgICA8RGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uIDpkZXNjcmlwdGVtSWQ9XCJkZXNjcmlwdGVtLmlkXCI+XG4gICAgICAgIDwvRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IERlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbiBmcm9tICcuL0Rlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbi52dWUnXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGp1c3RpZmljYXRpb25JZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfVxuICB9KVxuICBjb25zdCBqdXN0aWZpY2F0aW9uID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuZ2V0SnVzdGlmaWNhdGlvbihwcm9wcy5qdXN0aWZpY2F0aW9uSWQpKVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5qdXN0aWZpY2F0aW9uLWRlc2NyaXB0ZW1zIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgd2lkdGg6IGNhbGModmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1kZXNjcmlwdGVtLXdpZHRoKSArIDUwcHgpO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGV4dFwiXG4gICAgICAgdi1pZj1cImNvbnRleHQub3JpZ2luYWxcIj5cbiAgICA8ZW0+Tm9tIG9yaWdpbmFsPC9lbT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb250ZXh0XCJcbiAgICAgICB2LWVsc2U+XG4gICAgPGRpdiBjbGFzcz1cImNoaWxkcmVuXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIlxuICAgICAgICAgICA6dGl0bGU9XCJjLm5hbWVcIlxuICAgICAgICAgICA6Y2xhc3M9XCJ7ICdoYXMtY2hpbGQnOiBpc0N1cnJlbnRDaGlsZChjLm5hbWUpIH1cIlxuICAgICAgICAgICB2LWZvcj1cImMgaW4gY29udGV4dC5jaGlsZHJlblwiXG4gICAgICAgICAgIDprZXk9XCJjLmlkXCI+XG4gICAgICAgIDxxLWNoZWNrYm94XG4gICAgICAgICAgc2l6ZT1cIjEwcHRcIlxuICAgICAgICAgIHYtaWY9XCIhIGlzQ3VycmVudENoaWxkKGMubmFtZSlcIlxuICAgICAgICAgIHYtbW9kZWw9XCJuZXdDaGlsZHJlblwiXG4gICAgICAgICAgOnZhbD1cImMubmFtZVwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2hpbGQtY2F0ZWdvcnktbmFtZVwiPnt7Yy5uYW1lfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmVsYXRpb25cIj5cbiAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uXG4gICAgICAgIHYtaWY9XCJjb250ZXh0LnJlZmVyZW5jZVwiXG4gICAgICAgIDp0eXBlPVwiY29udGV4dC5yZWZlcmVuY2UuYWJzdHJhY3Rpb25UeXBlXCJcbiAgICAgICAgOmNoaWxkcmVuQ291bnQ9XCJjb250ZXh0LmNoaWxkcmVuLmxlbmd0aFwiPlxuICAgICAgPC9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeSByZWZlcmVuY2VcIlxuICAgICAgICAgdi1pZj1cImNvbnRleHQucmVmZXJlbmNlXCJcbiAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWN1cnJlbnQnOiBpc0N1cnJlbnROYW1lKGNvbnRleHQucmVmZXJlbmNlLm5hbWUpIH1cIlxuICAgICAgICAgOnRpdGxlPVwiY29udGV4dC5yZWZlcmVuY2UubmFtZVwiPlxuICAgICAge3tjb250ZXh0LnJlZmVyZW5jZS5uYW1lfX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGFyZW50c1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5IHBhcmVudFwiXG4gICAgICAgICAgIDp0aXRsZT1cInBhcmVudD8ubmFtZSA/PyAnJ1wiXG4gICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1wYXJlbnQnOiBpc0N1cnJlbnRQYXJlbnQocGFyZW50Py5uYW1lKSB9XCJcbiAgICAgICAgICAgdi1mb3I9XCJwYXJlbnQgaW4gY29udGV4dC5wYXJlbnRzXCJcbiAgICAgICAgICAgOmtleT1cInBhcmVudD8uaWQgPz8gJydcIj5cbiAgICAgICAge3twYXJlbnQ/Lm5hbWUgPz8gJyd9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8cS1zZWxlY3RcbiAgICBkZW5zZVxuICAgIEBmb2N1cz1cIigkZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNlbGVjdCgpXCJcbiAgICBmaWxsZWRcbiAgICA6bW9kZWwtdmFsdWU9XCJuYW1lXCJcbiAgICB1c2UtaW5wdXRcbiAgICBoaWRlLXNlbGVjdGVkXG4gICAgZmlsbC1pbnB1dFxuICAgIG1lbnUtYW5jaG9yPVwidG9wIHJpZ2h0XCJcbiAgICA6aW5wdXQtZGVib3VuY2U9XCIwXCJcbiAgICA6b3B0aW9ucz1cImNvbnRleHQ/LmNvbXBsZXRpb25zID8/IFtdXCJcbiAgICBAZmlsdGVyPVwiZmlsdGVyTmFtZXNcIlxuICAgIEBpbnB1dC12YWx1ZT1cInNldE5hbWVcIlxuICAgIEBrZXl1cC5lbnRlcj1cInZhbGlkYXRlXCJcbiAgICBhdXRvZm9jdXNcbiAgICA+XG4gICAgPHRlbXBsYXRlIHYtc2xvdDpuby1vcHRpb24+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJ0ZXh0LWdyZXlcIj5cbiAgICAgICAgICBObyByZXN1bHRzXG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3Etc2VsZWN0PlxuICA8ZGl2IGNsYXNzPVwicm93IHdyYXAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgPHEtYnRuXG4gICAgICBmbGF0XG4gICAgICBzaXplPVwic21cIlxuICAgICAgQGNsaWNrPVwiY2FuY2VsXCI+Q2FuY2VsPC9xLWJ0bj5cbiAgICA8cS1idG5cbiAgICAgIGZsYXRcbiAgICAgIHNpemU9XCJzbVwiXG4gICAgICBAY2xpY2s9XCJ2YWxpZGF0ZVwiPk9LPC9xLWJ0bj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSBmcm9tICdzdG9yZXMvbW9kZWxzL3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5J1xuICBpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbiBmcm9tICcuL1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb24udnVlJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBlbWl0ID0gZGVmaW5lRW1pdHMoWyAnY2hhbmdlJyBdKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgY2F0ZWdvcnk6IHsgdHlwZTogU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnksIGRlZmF1bHQ6IG51bGwgfSxcbiAgICAgIGdlbmVyaWNHcmFwaHM6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiBudWxsIH1cbiAgfSlcblxuICBjb25zdCBuYW1lID0gcmVmKHByb3BzLmNhdGVnb3J5Lm5hbWUpXG5cbiAgY29uc3QgbmV3Q2hpbGRyZW4gPSByZWYoW10pXG5cbiAgY29uc3QgY29tcGxldGlvbnMgPSByZWYoW10gYXMgc3RyaW5nW10pXG5cbiAgY29uc3QgY2hpbGRyZW5OYW1lcyA9IGNvbXB1dGVkKCgpID0+IG5ldyBTZXQocHJvcHMuY2F0ZWdvcnk/LmNoaWxkcmVuLm1hcChjID0+IGMubmFtZSkgPz8gW10pKVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlICgpIHtcbiAgICAgIC8vIElmIHRoZSBzZWxlY3QgaGFzIGZvY3VzLCB0aGVuIHVzZSB0aGUgc2VsZWN0ZWQgbmFtZS4gRWxzZSB1c2UgdGhlIGlucHV0IG5hbWUgdmFsdWUuXG5cbiAgICAgIGlmIChwcm9wcy5jYXRlZ29yeSkge1xuICAgICAgICAgIC8qIElmIHRoZSBuZXcgbmFtZSBpcyBmcm9tIGFuIGV4aXN0aW5nIGNhdGVnb3J5IHRoYXQgaGFzIGFuIGFic3RyYWN0aW9uVHlwZSwgdGhlbiBhbHNvIHVwZGF0ZSBpdHMgYWJzdHJhY3Rpb25UeXBlICovXG4gICAgICAgICAgY29uc3QgZ2VuZXJpY1NvdXJjZSA9IHByb3BzLmdlbmVyaWNHcmFwaHMgPyBwcm9wcy5nZW5lcmljR3JhcGhzLmJ5TmFtZVtwcm9wcy5jYXRlZ29yeS5xdWFsaWZpZWROYW1lKG5hbWUudmFsdWUpXSA6IHt9XG4gICAgICAgICAgY29uc3QgYWJzdHJhY3Rpb25UeXBlID0gZ2VuZXJpY1NvdXJjZT8uYWJzdHJhY3Rpb25UeXBlIHx8ICcnXG4gICAgICAgICAgc3RvcmUudXBkYXRlRWxlbWVudChwcm9wcy5jYXRlZ29yeSwgeyBuYW1lOiBuYW1lLnZhbHVlLCBhYnN0cmFjdGlvblR5cGUgfSlcbiAgICAgIH1cblxuICAgICAgbmV3Q2hpbGRyZW4udmFsdWUuZm9yRWFjaChuID0+IHtcbiAgICAgICAgICBjb25zdCBnZW5lcmljU291cmNlID0gcHJvcHMuZ2VuZXJpY0dyYXBocyA/IHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW3Byb3BzLmNhdGVnb3J5LnF1YWxpZmllZE5hbWUobildIDoge31cbiAgICAgICAgICBjb25zdCBhYnN0cmFjdGlvblR5cGUgPSBnZW5lcmljU291cmNlPy5hYnN0cmFjdGlvblR5cGUgfHwgJydcbiAgICAgICAgICBzdG9yZS5hZGRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhdGVnb3J5LnNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluOiR7cHJvcHMuY2F0ZWdvcnkuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0aW9uVHlwZSlcbiAgICAgIH0pXG4gICAgICAvLyBTaW5jZSB2YWxpZGF0ZSBtYXkgYmUgY2FsbGVkIHR3aWNlLCByZXNldCB0aGUgbmV3Q2hpbGRyZW4gYXJyYXlcbiAgICAgIG5ld0NoaWxkcmVuLnZhbHVlID0gW11cblxuICAgICAgZW1pdCgnY2hhbmdlJywgbmFtZS52YWx1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCAoKSB7XG4gICAgICBlbWl0KCdjaGFuZ2UnLCBwcm9wcy5jYXRlZ29yeS5uYW1lKVxuICB9XG5cbiAgY29uc3QgY29udGV4dCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBzdG9yZS5nZXRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yaWVzQnlOYW1lKHByb3BzLmNhdGVnb3J5LnByb2plY3RJZCwgbmFtZS52YWx1ZSlcbiAgICAgIGNvbnN0IGNvbXBsZXRpb25zID0gc3RvcmUuZ2V0U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlOYW1lc0J5UHJlZml4KHByb3BzLmNhdGVnb3J5LnByb2plY3RJZCwgbmFtZS52YWx1ZSlcbiAgICAgIGlmICghY2F0ZWdvcmllcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4geyBvcmlnaW5hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9ucyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gT2JqZWN0LmZyb21FbnRyaWVzKGNhdGVnb3JpZXMubWFwKGMgPT4gYy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gWyBjaGlsZC5uYW1lLCBjaGlsZCBdKSkuZmxhdCgpKVxuICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSBPYmplY3QuZnJvbUVudHJpZXMoY2F0ZWdvcmllcy5maWx0ZXIoYyA9PiBjLnBhcmVudCkubWFwKGMgPT4gW2MucGFyZW50Py5uYW1lLCBjLnBhcmVudCBdKSlcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICByZWZlcmVuY2U6IGNhdGVnb3JpZXNbMF0sXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbIC4uLk9iamVjdC52YWx1ZXMoY2hpbGRyZW4pIF0gYXMgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlbXSxcbiAgICAgICAgICAgICAgcGFyZW50czogWyAuLi5PYmplY3QudmFsdWVzKHBhcmVudHMpIF0gYXMgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlbXSxcbiAgICAgICAgICAgICAgY29tcGxldGlvbnNcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gaXNDdXJyZW50Q2hpbGQgKG5hbWU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuTmFtZXMudmFsdWUuaGFzKG5hbWUpXG4gIH1cblxuICBmdW5jdGlvbiBpc0N1cnJlbnRQYXJlbnQgKG5hbWU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHByb3BzLmNhdGVnb3J5LnBhcmVudD8ubmFtZSA9PSBuYW1lXG4gIH1cblxuICBmdW5jdGlvbiBpc0N1cnJlbnROYW1lIChuYW1lOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBwcm9wcy5jYXRlZ29yeT8ubmFtZSA9PT0gbmFtZVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0TmFtZSAodmFsdWU6IHN0cmluZykge1xuICAgICAgbmFtZS52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWx0ZXJOYW1lcyAoX3ZhbDogc3RyaW5nLCB1cGRhdGU6IChjYjogKCkgPT4gdm9pZCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJmaWx0ZXJOYW1lc1wiLCB2YWwsIGNvbnRleHQudmFsdWU/LmNvbXBsZXRpb25zKVxuICAgICAgdXBkYXRlKCgpID0+IHtcbiAgICAgICAgICBjb21wbGV0aW9ucy52YWx1ZSA9IGNvbnRleHQudmFsdWU/LmNvbXBsZXRpb25zID8/IFtdXG4gICAgICB9KVxuICB9XG48L3NjcmlwdD5cblxuICA8c3R5bGUgc2NvcGVkPlxuICAuY2F0ZWdvcnkge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiAycHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICB3aWR0aDogdmFyKC0tb3ZlcnZpZXctd2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IHZhcigtLW92ZXJ2aWV3LWhlaWdodCkgIWltcG9ydGFudDtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAuY29udGV4dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXg6IDA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jaGlsZHJlbiwgLnBhcmVudHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4OiAwO1xuICB9XG4gIC5yZWZlcmVuY2Uge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgfVxuICAucmVsYXRpb24ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgbWluLWhlaWdodDogdmFyKC0tb3ZlcnZpZXctaGVpZ2h0KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB9XG4gIC5jb21wbGV0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1heC1oZWlnaHQ6IDVlbTtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbiAgLmhhcy1jaGlsZCxcbiAgLmhhcy1wYXJlbnQsXG4gIC5pcy1jdXJyZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiY29udGFpbmVyXCJcbiAgICAgICA6Y2xhc3M9XCJbXG4gICAgICAgICAgICAgICAnc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgIGBzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS0ke2NhdGVnb3J5SWR9YCxcbiAgICAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgICAgXVwiXG4gICAgICAgOmRhdGEtc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJjYXRlZ29yeUlkXCI+XG5cbiAgICA8ZGl2IDpjbGFzcz1cIlsgJ3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5JyBdXCJcbiAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBjYXRlZ29yeS5jb2xvciB8fCAndHJhbnNwYXJlbnQnIH1cIlxuICAgICAgICAgdi1pZj1cImNhdGVnb3J5XCJcbiAgICAgICAgIDpkYXRhLXNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5PVwiY2F0ZWdvcnlJZFwiPlxuXG4gICAgICA8ZGl2IDpjbGFzcz1cIlsgJ3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNoaWxkcmVuJyBdXCJcbiAgICAgICAgICAgdi1pZj1cIndpdGhDaGlsZHJlblwiPlxuICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvblxuICAgICAgICAgIHYtZm9yPVwiYyBpbiBjYXRlZ29yeS5jaGlsZHJlblwiXG4gICAgICAgICAgOmtleT1cImMuaWRcIlxuICAgICAgICAgIDppc0dlbmVyaWM9XCJpc0dlbmVyaWNcIlxuICAgICAgICAgIDpnZW5lcmljR3JhcGhzPVwiZ2VuZXJpY0dyYXBoc1wiXG4gICAgICAgICAgOmxheW91dD1cImxheW91dFwiXG4gICAgICAgICAgOndpdGhDaGlsZHJlbj1cIndpdGhDaGlsZHJlblwiXG4gICAgICAgICAgOmhpZGVKdXN0aWZpY2F0aW9ucz1cImhpZGVKdXN0aWZpY2F0aW9uc1wiXG4gICAgICAgICAgOmNhdGVnb3J5SWQ9XCJjLmlkXCI+XG4gICAgICAgIDwvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8RHJvcFpvbmUgZGF0YT1cImFkZFwiXG4gICAgICAgICAgICAgICAgdHlwZXM9XCJ1cG10L2Rlc2NyaXB0ZW0gdXBtdC9hbm5vdGF0aW9uIHVwbXQvc2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgQGFubm90YXRpb249XCJkcm9wcGVkQW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgQHNlbGVjdGlvbj1cImRyb3BwZWRTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIEBkZXNjcmlwdGVtPVwiZHJvcHBlZERlc2NyaXB0ZW1cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktanVzdGlmaWNhdGlvblwiXG4gICAgICAgICAgICAgdi1pZj1cImlzSnVzdGlmaWNhdGlvblZpc2libGVcIj5cbiAgICAgICAgICA8dWwgdi1pZj1cImlzR2VuZXJpY1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwianVzdGlmaWNhdGlvbi1kZXNjcmlwdGVtc1wiPlxuICAgICAgICAgICAgPGxpIHYtZm9yPVwiZGVzY3JpcHRlbSBpbiBjYXRlZ29yeURlc2NyaXB0ZW1zXCIgOmtleT1cImRlc2NyaXB0ZW0uaWRcIj5cbiAgICAgICAgICAgICAgPERlc2NyaXB0ZW1SZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgIDpkZXNjcmlwdGVtSWQ9XCJkZXNjcmlwdGVtLmlkXCJcbiAgICAgICAgICAgICAgICA6d2l0aE1lbnU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgOmlzUmVhZG9ubHk9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDwvRGVzY3JpcHRlbVJlcHJlc2VudGF0aW9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxKdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgOmp1c3RpZmljYXRpb25JZD1cImNhdGVnb3J5Lmp1c3RpZmljYXRpb24/LmlkID8/ICcnXCI+XG4gICAgICAgICAgPC9KdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L0Ryb3Bab25lPlxuXG4gICAgICA8RHJvcFpvbmUgOmRhdGE9XCJgaW46JHtjYXRlZ29yeUlkfWBcIlxuICAgICAgICAgICAgICAgIHR5cGVzPVwidXBtdC9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSB1cG10L2dlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnkgdXBtdC9zZWxlY3Rpb24gdXBtdC9kZXNjcmlwdGVtIHVwbXQvYW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgQGFubm90YXRpb249XCJkcm9wcGVkQ3JlYXRpbmdBbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBAc2VsZWN0aW9uPVwiZHJvcHBlZENyZWF0aW5nU2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBAZGVzY3JpcHRlbT1cImRyb3BwZWRDcmVhdGluZ0Rlc2NyaXB0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uXCI+XG4gICAgICAgICAgPFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVsYXRpb25cbiAgICAgICAgICAgIDp0eXBlPVwiY2F0ZWdvcnkuYWJzdHJhY3Rpb25UeXBlXCJcbiAgICAgICAgICAgIDpkaXJlY3Rpb249XCJsYXlvdXRcIlxuICAgICAgICAgICAgOmNoaWxkcmVuQ291bnQ9XCJjYXRlZ29yeS5jaGlsZHJlbi5sZW5ndGhcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbmluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jcml0ZXJpb25cIj5cbiAgICAgICAgICAgICAge3sgY3JpdGVyaW9uIH19XG4gICAgICAgICAgICAgIDxxLXRvb2x0aXBcbiAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgZGVuc2U+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiY3JpdGVyaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3JpdGVyaW9uLXRvb2x0aXBcIj57eyBjcml0ZXJpb24gfX08L2Rpdj5cbiAgICAgICAgICAgICAgICBDcml0ZXJpb25cbiAgICAgICAgICAgICAgPC9xLXRvb2x0aXA+XG4gICAgICAgICAgICAgIDxxLXBvcHVwLWVkaXQgdi1tb2RlbD1cImNyaXRlcmlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0by1zYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2xvdD1cInNjb3BlXCI+XG4gICAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ3JpdGVyaW9uXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2NvcGUudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgQGtleXVwLmN0cmwuZW50ZXI9XCJzY29wZS5zZXRcIlxuICAgICAgICAgICAgICAgICAgQGtleXVwLmVzYz1cInNjb3BlLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgYXV0b2dyb3dcbiAgICAgICAgICAgICAgICAgIGF1dG9mb2N1cyAvPlxuICAgICAgICAgICAgICA8L3EtcG9wdXAtZWRpdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEVsZW1lbnRNZW51XG4gICAgICAgICAgICAgIGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb25tZW51XCJcbiAgICAgICAgICAgICAgOmFjdGlvbnM9XCJyZWxhdGlvbkFjdGlvbnNcIiAvPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGNsYXNzPVwicHJpbnQtcmVtb3ZlZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgdGl0bGU9XCJDcmVhdGUgYSBuZXcgY2hpbGQgY2F0ZWdvcnlcIlxuICAgICAgICAgICAgICBpY29uPVwibWRpLXBsdXNcIj5cbiAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgIHRvdWNoLXBvc2l0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWxpc3QgZGVuc2Ugc3R5bGU9XCJtaW4td2lkdGg6IDEwMHB4XCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKFtsYWJlbCwgbmFtZV0sIGkpIGluIHByb3Bvc2VkQ2hpbGRyZW5OYW1lc1wiXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiY3JlYXRlQ2hpbGRDYXRlZ29yeShuYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICAgICAgICAgIHt7IGxhYmVsIH19XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRHJvcFpvbmU+XG5cbiAgICAgIDxEcm9wWm9uZSBkYXRhPVwiYWRkXCJcbiAgICAgICAgICAgICAgICB0eXBlcz1cInVwbXQvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkgdXBtdC9nZW5lcmljc3luY2hyb25pY2NhdGVnb3J5IHVwbXQvc2VsZWN0aW9uIHVwbXQvZGVzY3JpcHRlbSB1cG10L2Fubm90YXRpb24gdXBtdC9jb2xvclwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIEBzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeT1cImRyb3BwZWRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgQGdlbmVyaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJkcm9wcGVkR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgQGFubm90YXRpb249XCJkcm9wcGVkQW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgQHNlbGVjdGlvbj1cImRyb3BwZWRTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIEBkZXNjcmlwdGVtPVwiZHJvcHBlZERlc2NyaXB0ZW1cIlxuICAgICAgICAgICAgICAgIEBjb2xvcj1cImRyb3BwZWRDb2xvclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyXCJcbiAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdoYXMtZXJyb3InOiBnZW5lcmljRWxlbWVudC5lcnJvcnM/Lmxlbmd0aCB9XCI+XG4gICAgICAgICAgPERyYWdFbGVtZW50XG4gICAgICAgICAgICB0eXBlPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnlcIlxuICAgICAgICAgICAgOmRhdGE9XCJjYXRlZ29yeUlkXCJcbiAgICAgICAgICAgIEBjbGljay5tZXRhPVwiZGVidWdcIj5cbiAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgOm5hbWU9XCJjYXRlZ29yeUljb25cIj5cbiAgICAgICAgICAgIDwvcS1pY29uPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1uYW1lXCI+e3sgY2F0ZWdvcnlOYW1lIH19XG4gICAgICAgICAgICAgIDxxLXBvcHVwLWVkaXQgdi1tb2RlbD1cImNhdGVnb3J5TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zbG90PVwic2NvcGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG8tc2F2ZT5cbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlOYW1lSW5wdXQgQGNoYW5nZT1cInNjb3BlLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpnZW5lcmljR3JhcGhzPVwiZ2VuZXJpY0dyYXBoc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjYXRlZ29yeT1cImNhdGVnb3J5XCIgLz5cbiAgICAgICAgICAgICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8cS10b29sdGlwICBjbGFzcz1cImJnLXJlZC01XCIgYW5jaG9yPVwidG9wIHJpZ2h0XCIgc2VsZj1cInRvcCBsZWZ0XCIgdi1pZj1cImdlbmVyaWNFbGVtZW50LmVycm9ycz8ubGVuZ3RoXCI+XG4gICAgICAgICAgICAgIHt7IGNhdGVnb3J5TmFtZSB9fVxuICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZXJyb3IsIGtleSBpbiBnZW5lcmljRWxlbWVudC5lcnJvcnNcIlxuICAgICAgICAgICAgICAgICAgIDprZXk9XCJrZXlcIj5cbiAgICAgICAgICAgICAgICB7eyBlcnJvciB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgICAgICAgPHEtdG9vbHRpcCB2LWVsc2U+XG4gICAgICAgICAgICAgIHt7IGNhdGVnb3J5TmFtZSB9fSAoe3sgaXNHZW5lcmljID8gJ0dlbmVyaWMgU3luY2hyb25pYyBDYXRlZ29yeScgOiAnU3BlY2lmaWMgU3luY2hyb25pYyBDYXRlZ29yeScgfX1cbiAgICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgICAgIDwvRHJhZ0VsZW1lbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW1lbnQtdG9vbGJhclwiPlxuICAgICAgICAgICAgPHEtYmFkZ2VcbiAgICAgICAgICAgICAgQGNsaWNrPVwiZGlzcGxheUp1c3RpZmljYXRpb24gPSAhZGlzcGxheUp1c3RpZmljYXRpb25cIlxuICAgICAgICAgICAgICBjbGFzcz1cImRlc2NyaXB0ZW1zLWJhZGdlXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJncmV5LTZcIlxuICAgICAgICAgICAgICA6dGl0bGU9XCJgJHtjYXRlZ29yeURlc2NyaXB0ZW1Db3VudH0gZGVzY3JpcHRlbXNgXCJcbiAgICAgICAgICAgICAgcm91bmRlZD57eyBjYXRlZ29yeURlc2NyaXB0ZW1Db3VudCB9fTwvcS1iYWRnZT5cbiAgICAgICAgICAgIDxOb3RlSWNvblxuICAgICAgICAgICAgICA6ZWxlbWVudD1cImNhdGVnb3J5XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtZW50LXRvb2xiYXItc2Vjb25kYXJ5IG9uLW5hbWUtaG92ZXJcIj5cbiAgICAgICAgICAgICAgPENvbG9yaXplSWNvblxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjYXRlZ29yeUNvbG9yXCIgLz5cbiAgICAgICAgICAgICAgPEVsZW1lbnRNZW51XG4gICAgICAgICAgICAgICAgOmFjdGlvbnM9XCJtZW51QWN0aW9uc1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Ryb3Bab25lPlxuXG4gICAgICA8RHJvcFpvbmUgOmRhdGE9XCJgYmVmb3JlOiR7Y2F0ZWdvcnlJZH1gXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiY2F0ZWdvcnkuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZFwiXG4gICAgICAgICAgICAgICAgdHlwZXM9XCJ1cG10L3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5IHVwbXQvZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeSB1cG10L3NlbGVjdGlvbiB1cG10L2Rlc2NyaXB0ZW0gdXBtdC9hbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVtcHR5LXBhZGRpbmcgbmV3c3NjLWRyb3B6b25lXCJcbiAgICAgICAgICAgICAgICBAc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnk9XCJkcm9wcGVkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgIEBnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5PVwiZHJvcHBlZEdlbmVyaWNTeW5jaHJvbmljQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgIEBhbm5vdGF0aW9uPVwiZHJvcHBlZENyZWF0aW5nQW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgQHNlbGVjdGlvbj1cImRyb3BwZWRDcmVhdGluZ1NlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgQGRlc2NyaXB0ZW09XCJkcm9wcGVkQ3JlYXRpbmdEZXNjcmlwdGVtXCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIEBjbGljaz1cImNyZWF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGBiZWZvcmU6JHtjYXRlZ29yeUlkfWApXCJcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGNsYXNzPVwibmV3c3NjLWJ1dHRvbiBwcmludC1oaWRkZW5cIlxuICAgICAgICAgIDppY29uPVwiaXNWZXJ0aWNhbCA/ICdtZGktbWVudS11cCcgOiAnbWRpLW1lbnUtcmlnaHQnXCI+XG4gICAgICAgICAgPHEtdG9vbHRpcD5DcmVhdGUgYSBwYXJlbnQgY2F0ZWdvcnk8L3EtdG9vbHRpcD5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvRHJvcFpvbmU+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1pZj1cImNhdGVnb3J5LnBhcmVudElkICYmIHdpdGhDaGlsZHJlblwiXG4gICAgICAgIGNsYXNzPVwic3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktZmlsbGVyXCJcbiAgICAgICAgPlxuICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbiA6ZGlyZWN0aW9uPVwibGF5b3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNoaWxkcmVuQ291bnQ9XCIxXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnXG4gIGltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcidcbiAgaW1wb3J0IHsgc3RyaXBDb250ZXh0RnJvbU5hbWUgfSBmcm9tICcuL3V0aWwnXG5cbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5IGZyb20gJ3N0b3Jlcy9tb2RlbHMvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnknXG5cbiAgaW1wb3J0IERlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbiBmcm9tICcuL0Rlc2NyaXB0ZW1SZXByZXNlbnRhdGlvbi52dWUnXG4gIGltcG9ydCBKdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb24gZnJvbSAnLi9KdXN0aWZpY2F0aW9uUmVwcmVzZW50YXRpb24udnVlJ1xuICBpbXBvcnQgRHJvcFpvbmUgZnJvbSAnLi9Ecm9wWm9uZS52dWUnXG4gIGltcG9ydCBEcmFnRWxlbWVudCBmcm9tICcuL0RyYWdFbGVtZW50LnZ1ZSdcbiAgaW1wb3J0IENhdGVnb3J5TmFtZUlucHV0IGZyb20gJy4vQ2F0ZWdvcnlOYW1lSW5wdXQudnVlJ1xuICBpbXBvcnQgQ29sb3JpemVJY29uIGZyb20gJy4vQ29sb3JpemVJY29uLnZ1ZSdcbiAgaW1wb3J0IE5vdGVJY29uIGZyb20gJy4vTm90ZUljb24udnVlJ1xuICBpbXBvcnQgRWxlbWVudE1lbnUgZnJvbSAnLi9FbGVtZW50TWVudS52dWUnXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlbGF0aW9uIGZyb20gJy4vU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZWxhdGlvbi52dWUnXG5cbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuXG4gIGNvbnN0ICRxID0gdXNlUXVhc2FyKClcblxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IHsgY3VycmVudFByb2plY3RJZCB9ID0gc3RvcmVUb1JlZnMoaXN0b3JlKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgY2F0ZWdvcnlJZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICAgIGdlbmVyaWNHcmFwaHM6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiBudWxsIH0sXG4gICAgICBsYXlvdXQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcImhvcml6b250YWxcIiB9LCAvLyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICBoaWRlSnVzdGlmaWNhdGlvbnM6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcbiAgICAgIGlzR2VuZXJpYzogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgICAgd2l0aENoaWxkcmVuOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfVxuICB9KVxuXG4gIGNvbnN0IGNhdGVnb3J5ID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuZ2V0U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCkpXG5cbiAgY29uc3QgY2F0ZWdvcnlOYW1lID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gY2F0ZWdvcnkudmFsdWUgPyBjYXRlZ29yeS52YWx1ZS5uYW1lIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAodmFsdWU6IHN0cmluZykge1xuICAgICAgICAgIC8qIElmIHRoZSBuZXcgbmFtZSBpcyBmcm9tIGFuIGV4aXN0aW5nIGNhdGVnb3J5IHRoYXQgaGFzIGFuIGFic3RyYWN0aW9uVHlwZSwgdGhlbiBhbHNvIHVwZGF0ZSBpdHMgYWJzdHJhY3Rpb25UeXBlICovXG4gICAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBjYXRlZ29yeS52YWx1ZT8ucXVhbGlmaWVkTmFtZSh2YWx1ZSkgPz8gdmFsdWVcbiAgICAgICAgICBjb25zdCBnZW5lcmljU291cmNlID0gcHJvcHMuZ2VuZXJpY0dyYXBocyA/IHByb3BzLmdlbmVyaWNHcmFwaHMuYnlOYW1lW2Z1bGxOYW1lXSA6IHt9XG4gICAgICAgICAgY29uc3QgYWJzdHJhY3Rpb25UeXBlID0gZ2VuZXJpY1NvdXJjZT8uYWJzdHJhY3Rpb25UeXBlIHx8ICcnXG4gICAgICAgICAgc3RvcmUudXBkYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCwgeyBuYW1lOiB2YWx1ZSwgYWJzdHJhY3Rpb25UeXBlOiBhYnN0cmFjdGlvblR5cGUgfSlcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBjYXRlZ29yeUNvbG9yID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gY2F0ZWdvcnkudmFsdWUgPyBjYXRlZ29yeS52YWx1ZS5jb2xvciA6IFwiXCJcbiAgICAgIH0sXG4gICAgICBzZXQgKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgICBzdG9yZS51cGRhdGVTeW5jaHJvbmljQ2F0ZWdvcnlDb2xvcihjYXRlZ29yeS52YWx1ZT8ucHJvamVjdElkLCBjYXRlZ29yeS52YWx1ZT8ubmFtZSwgY29sb3IpXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgY2F0ZWdvcnlJY29uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuaXNHZW5lcmljID8gIFwibWRpLWFscGhhLXMtYm94XCIgOiBcIm1kaS1hbHBoYS1zLWJveC1vdXRsaW5lXCIpXG5cbiAgY29uc3QgY3JpdGVyaW9uID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0OiAoKSA9PiBjYXRlZ29yeS52YWx1ZT8uY3JpdGVyaW9uID8/ICcnLFxuICAgICAgc2V0OiAodmFsdWUpID0+IHtcbiAgICAgICAgICBzdG9yZS51cGRhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShwcm9wcy5jYXRlZ29yeUlkLCB7IGNyaXRlcmlvbjogdmFsdWUgfSlcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBpc0xlYWYgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gIWNhdGVnb3J5LnZhbHVlPy5jaGlsZHJlbi5sZW5ndGhcbiAgfSlcblxuICBjb25zdCBpc1ZlcnRpY2FsID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubGF5b3V0ID09ICd2ZXJ0aWNhbCcpXG5cbiAgLy8gSW5pdGlhbCBzdGF0ZSBmb3IgZGlzcGxheUp1c3RpZmljYXRpb25cbiAgLy8gSGlkZSBieSBkZWZhdWx0XG4gIGNvbnN0IGRpc3BsYXlKdXN0aWZpY2F0aW9uID0gcmVmKGZhbHNlKVxuXG4gIGNvbnN0IGlzSnVzdGlmaWNhdGlvblZpc2libGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gY2F0ZWdvcnkudmFsdWU/Lmp1c3RpZmljYXRpb24/LmRlc2NyaXB0ZW1zPy5sZW5ndGggJiYgZGlzcGxheUp1c3RpZmljYXRpb24udmFsdWVcbiAgfSlcblxuICBjb25zdCBjYXRlZ29yeURlc2NyaXB0ZW1zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKCEgY2F0ZWdvcnkudmFsdWUgfHwgISBjdXJyZW50UHJvamVjdElkLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG4gICAgICBpZiAocHJvcHMuaXNHZW5lcmljKSB7XG4gICAgICAgICAgLy8gUXVlcnkgZm9yIGFsbCBkZXNjcmlwdGVtcyBmb3IgYWxsIGNhdGVnb3JpZXNcbiAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gc3RvcmUuZ2V0U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcmllc0J5TmFtZSAoY3VycmVudFByb2plY3RJZC52YWx1ZSwgY2F0ZWdvcnkudmFsdWUubmFtZSlcbiAgICAgICAgICByZXR1cm4gY2F0ZWdvcmllcy5tYXAoY2F0ID0+IGNhdC5qdXN0aWZpY2F0aW9uPy5kZXNjcmlwdGVtcyB8fCBbXSkuZmxhdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjYXRlZ29yeS52YWx1ZT8uanVzdGlmaWNhdGlvbj8uZGVzY3JpcHRlbXMgfHwgW11cbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBjYXRlZ29yeURlc2NyaXB0ZW1Db3VudCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBjYXRlZ29yeURlc2NyaXB0ZW1zLnZhbHVlLmxlbmd0aFxuICB9KVxuXG4gIGlmIChpc0xlYWYudmFsdWUpIHtcbiAgICAgIGRpc3BsYXlKdXN0aWZpY2F0aW9uLnZhbHVlID0gISBwcm9wcy5oaWRlSnVzdGlmaWNhdGlvbnMgfHwgY2F0ZWdvcnlEZXNjcmlwdGVtQ291bnQudmFsdWUgPiAwXG4gIH1cblxuICBjb25zdCBnZW5lcmljRWxlbWVudCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChjYXRlZ29yeS52YWx1ZSAmJiBwcm9wcy5nZW5lcmljR3JhcGhzKSB7XG4gICAgICAgICAgcmV0dXJuICBwcm9wcy5nZW5lcmljR3JhcGhzLmJ5TmFtZVtjYXRlZ29yeS52YWx1ZS5mdWxsTmFtZV0gfHwgeyBjaGlsZHJlbk5hbWVzOiBuZXcgU2V0KCkgfVxuICAgICAgfVxuICAgICAgLy8gSW4gYWxsIG90aGVyIGNhc2VzLCByZXR1cm4gZW1wdHkgZGljdFxuICAgICAgcmV0dXJuIHt9XG4gIH0pXG5cbiAgY29uc3QgcHJvcG9zZWRDaGlsZHJlbk5hbWVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudENoaWxkcmVuID0gbmV3IFNldCgoY2F0ZWdvcnkudmFsdWU/LmNoaWxkcmVuIHx8IFtdKS5tYXAoY2hpbGQgPT4gY2hpbGQuZnVsbE5hbWUpKVxuICAgICAgY29uc3QgY2hpbGRyZW5OYW1lcyA9IFsgLi4uZ2VuZXJpY0VsZW1lbnQudmFsdWUuY2hpbGRyZW5OYW1lcy5kaWZmZXJlbmNlKGN1cnJlbnRDaGlsZHJlbikgXS50b1NvcnRlZCgpXG4gICAgICByZXR1cm4gWyBbXCJOZXcgY2hpbGQgY2F0ZWdvcnlcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAuLi5jaGlsZHJlbk5hbWVzLm1hcCgobmFtZTogc3RyaW5nKSA9PiBbIG5hbWUsIHN0cmlwQ29udGV4dEZyb21OYW1lKG5hbWUpIF0pIF1cbiAgfSlcblxuICBmdW5jdGlvbiBkZWJ1ZyAoKSB7XG4gICAgICAod2luZG93IGFzIGFueSkuY2F0ZWdvcnkgPSBjYXRlZ29yeS52YWx1ZTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlcIiwgeyBjYXRlZ29yeTogY2F0ZWdvcnkudmFsdWUgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dDb250ZW50ICgpIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgY29udGVudCBpcyBleHBhbmRlZCBhbmQgdmlzaWJsZVxuICAgICAgY29uc29sZS5sb2coXCJTaG91bGQgZXhwYW5kIFNTQ1wiKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkgKHdoZXJlOiBzdHJpbmcsIG5hbWU6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgIGlmIChjYXRlZ29yeS52YWx1ZSkge1xuICAgICAgICAgIGlmICghIG5hbWUpIHtcbiAgICAgICAgICAgICAgbmFtZSA9IGlzdG9yZS5uZXdTU0NJZCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gY2F0ZWdvcnkudmFsdWUucXVhbGlmaWVkTmFtZShuYW1lKVxuICAgICAgICAgIGNvbnN0IGdlbmVyaWNTb3VyY2UgPSBwcm9wcy5nZW5lcmljR3JhcGhzID8gcHJvcHMuZ2VuZXJpY0dyYXBocy5ieU5hbWVbZnVsbE5hbWVdIDoge31cbiAgICAgICAgICBjb25zdCBhYnN0cmFjdGlvblR5cGUgPSBnZW5lcmljU291cmNlPy5hYnN0cmFjdGlvblR5cGUgfHwgJydcbiAgICAgICAgICBzdG9yZS5hZGRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnZhbHVlLnNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYnN0cmFjdGlvblR5cGUpXG4gICAgICAgICAgc2hvd0NvbnRlbnQoKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5IChjYXRlZ29yeUlkOiBzdHJpbmcpIHtcbiAgICAgIC8vIERORCBvbiBhIGNhdGVnb3J5IHRvIHJlcGFyZW50XG4gICAgICBpZiAoIWNhdGVnb3J5SWQpIHtcbiAgICAgICAgICAvLyBFbXB0eSBjYXRlZ29yeUlkOiBjcmVhdGUgYSBuZXcgY2hpbGRcbiAgICAgICAgICBjcmVhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShgaW46JHtwcm9wcy5jYXRlZ29yeUlkfWApXG4gICAgICB9XG4gICAgICBjb25zdCBzb3VyY2UgPSBzdG9yZS5nZXRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShjYXRlZ29yeUlkKVxuICAgICAgaWYgKGNhdGVnb3J5SWQgIT09IHByb3BzLmNhdGVnb3J5SWQgJiYgc291cmNlKSB7XG4gICAgICAgICAgLy8gSXQgd2FzIG1heWJlIGEgcm9vdCBjYXRlZ29yeS4gUmVtb3ZlIGl0IGZyb20gdGhlIHJvb3RcbiAgICAgICAgICAvLyBjYXRlZ29yaWVzIGFuZCByZXBhcmVudC5cbiAgICAgICAgICBjb25zdCBzcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkID0gc291cmNlLnNwZWNpZmljc3luY2hyb25pY21vZGVsSWRcbiAgICAgICAgICBpZiAoc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCkge1xuICAgICAgICAgICAgICAvLyBJdCB3YXMgYSByb290IGNhdGVnb3J5IC0gbW92ZSBhbGwgaXRzIGNoaWxkcmVuIGFzIHJvb3QgY2F0ZWdvcmllc1xuICAgICAgICAgICAgICBzb3VyY2UuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBzdG9yZS51cGRhdGVTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShjaGlsZC5pZCwgeyBzcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZDogbnVsbCB9KSlcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RvcmUudXBkYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoY2F0ZWdvcnlJZCwge1xuICAgICAgICAgICAgICBzcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkOiBudWxsLFxuICAgICAgICAgICAgICBwYXJlbnRJZDogcHJvcHMuY2F0ZWdvcnlJZFxuICAgICAgICAgIH0pXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkR2VuZXJpY1N5bmNocm9uaWNDYXRlZ29yeSAoY2F0ZWdvcnlOYW1lOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcpIHtcbiAgICAgIGlmICh3aGVyZSA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAvLyBUaGVyZSBpcyBubyBcImFkZFwiIGZvciBub3dcbiAgICAgICAgICB3aGVyZSA9IGBpbjoke3Byb3BzLmNhdGVnb3J5SWR9YFxuICAgICAgfVxuICAgICAgaWYgKGNhdGVnb3J5LnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgZ2VuZXJpY1NvdXJjZSA9IHByb3BzLmdlbmVyaWNHcmFwaHMgPyBwcm9wcy5nZW5lcmljR3JhcGhzLmJ5TmFtZVtjYXRlZ29yeU5hbWVdIDoge31cbiAgICAgICAgICBjb25zdCBhYnN0cmFjdGlvblR5cGUgPSBnZW5lcmljU291cmNlPy5hYnN0cmFjdGlvblR5cGUgfHwgJydcbiAgICAgICAgICBzdG9yZS5hZGRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShzdHJpcENvbnRleHRGcm9tTmFtZShjYXRlZ29yeU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnZhbHVlLnNwZWNpZmljc3luY2hyb25pY21vZGVsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYnN0cmFjdGlvblR5cGUpXG4gICAgICAgICAgc2hvd0NvbnRlbnQoKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZERlc2NyaXB0ZW0gKGRlc2NyaXB0ZW1JZDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGVtID0gc3RvcmUuZ2V0RGVzY3JpcHRlbShkZXNjcmlwdGVtSWQpXG4gICAgICBpZiAoZGVzY3JpcHRlbSkge1xuICAgICAgICAgIHN0b3JlLmFkZFRleHRTZWxlY3Rpb25Ub1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGRlc2NyaXB0ZW0udG9KU09OKCksIHByb3BzLmNhdGVnb3J5SWQpXG4gICAgICAgICAgc3RvcmUuZGVsZXRlRGVzY3JpcHRlbShkZXNjcmlwdGVtSWQpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkQW5ub3RhdGlvbiAoYW5ub3RhdGlvbklkOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGFubm90YXRpb24gPSBzdG9yZS5nZXRBbm5vdGF0aW9uKGFubm90YXRpb25JZClcbiAgICAgIGlmIChhbm5vdGF0aW9uKSB7XG4gICAgICAgICAgc3RvcmUuYWRkVGV4dFNlbGVjdGlvblRvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoYW5ub3RhdGlvbi50b0pTT04oKSwgcHJvcHMuY2F0ZWdvcnlJZClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRTZWxlY3Rpb24gKHNlbGVjdGlvbkRhdGE6IHN0cmluZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBKU09OLnBhcnNlKHNlbGVjdGlvbkRhdGEpXG4gICAgICAgICAgc3RvcmUuYWRkVGV4dFNlbGVjdGlvblRvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoc2VsZWN0aW9uLCBwcm9wcy5jYXRlZ29yeUlkKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBDYW5ub3QgcGFyc2UgJHtzZWxlY3Rpb25EYXRhfTogJHtlfWApXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkQ29sb3IgKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgIHN0b3JlLnVwZGF0ZVN5bmNocm9uaWNDYXRlZ29yeUNvbG9yKGNhdGVnb3J5LnZhbHVlPy5wcm9qZWN0SWQsIGNhdGVnb3J5LnZhbHVlPy5uYW1lLCBjb2xvcilcbiAgfVxuXG4gIC8vIERyb3BwZWQgc2VsZWN0aW9ucyB0byBjcmVhdGUgYSBTU0NhdGVnb3J5LiBkYXRhIGlzIGJlZm9yZSBvciBhZnRlclxuICBmdW5jdGlvbiBkcm9wcGVkQ3JlYXRpbmdEZXNjcmlwdGVtIChkZXNjcmlwdGVtSWQ6IHN0cmluZywgd2hlcmU6IHN0cmluZykge1xuICAgICAgY29uc3QgZGVzY3JpcHRlbSA9IHN0b3JlLmdldERlc2NyaXB0ZW0oZGVzY3JpcHRlbUlkKVxuICAgICAgaWYgKGRlc2NyaXB0ZW0gJiYgY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICBzdG9yZS5hZGRTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeShpc3RvcmUubmV3U1NDSWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS52YWx1ZS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0ZW0udG9KU09OKCkpXG4gICAgICAgICAgc2hvd0NvbnRlbnQoKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJvcHBlZENyZWF0aW5nQW5ub3RhdGlvbiAoYW5ub3RhdGlvbklkOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGFubm90YXRpb24gPSBzdG9yZS5nZXRBbm5vdGF0aW9uKGFubm90YXRpb25JZClcbiAgICAgIGlmIChhbm5vdGF0aW9uICYmIGNhdGVnb3J5LnZhbHVlKSB7XG4gICAgICAgICAgc3RvcmUuYWRkU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoaXN0b3JlLm5ld1NTQ0lkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkudmFsdWUuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uLnRvSlNPTigpKVxuICAgICAgICAgIHNob3dDb250ZW50KClcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRDcmVhdGluZ1NlbGVjdGlvbiAoc2VsZWN0aW9uRGF0YTogc3RyaW5nLCB3aGVyZTogc3RyaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEpTT04ucGFyc2Uoc2VsZWN0aW9uRGF0YSlcbiAgICAgICAgICBpZiAoc2VsZWN0aW9uICYmIGNhdGVnb3J5LnZhbHVlKSB7XG4gICAgICAgICAgICAgIHN0b3JlLmFkZFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KGlzdG9yZS5uZXdTU0NJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS52YWx1ZS5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uKVxuICAgICAgICAgICAgICBzaG93Q29udGVudCgpXG4gICAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBDYW5ub3QgcGFyc2UgJHtzZWxlY3Rpb25EYXRhfTogJHtlfWApXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVBYnN0cmFjdGlvblR5cGUgKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHN0b3JlLnVwZGF0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQsIHsgYWJzdHJhY3Rpb25UeXBlOiB2YWx1ZSB9KVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hpbGRDYXRlZ29yeSAobmFtZTogc3RyaW5nID0gXCJcIikge1xuICAgICAgY3JlYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkoYGluOiR7cHJvcHMuY2F0ZWdvcnlJZH1gLCBuYW1lKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JpdGVyaW9uUG9wdXAgKCkge1xuICAgICAgY29uc3QgY3JpdGVyaW9uID0gY2F0ZWdvcnkudmFsdWU/LmNyaXRlcmlvbiB8fCBcIlwiXG4gICAgICAkcS5kaWFsb2coe1xuICAgICAgICAgIHRpdGxlOiAnRW50ZXIgYSBjcml0ZXJpb24gZm9yIHRoaXMgcmVsYXRpb24nLFxuICAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogJ1lvdSBjYW4gc3BlY2lmeSBhIGNyaXRlcmlvbiBmb3IgdGhpcyByZWxhdGlvbiBvciB0aGUgYXNzb2NpYXRlZCBjYXRlZ29yeS4nLFxuICAgICAgICAgIHByb21wdDoge1xuICAgICAgICAgICAgICBtb2RlbDogY3JpdGVyaW9uLFxuICAgICAgICAgICAgICB0eXBlOiAndGV4dCcgLy8gb3B0aW9uYWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhbmNlbDogdHJ1ZSxcbiAgICAgICAgICBwZXJzaXN0ZW50OiB0cnVlXG4gICAgICB9KS5vbk9rKG5ld1ZhbHVlID0+IHtcbiAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgc3RvcmUudXBkYXRlU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnlJZCwgeyBjcml0ZXJpb246IG5ld1ZhbHVlIH0pXG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIGltcG9ydCB0eXBlIHsgTmFtZWRBY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL3V0aWwudHMnXG5cbiAgY29uc3QgbWVudUFjdGlvbnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY3Rpb25zOiBOYW1lZEFjdGlvbltdID0gW1xuICAgICAgICAgIFsgXCJEZWxldGUgdGhpcyBjYXRlZ29yeSBvbmx5XCIsICgpID0+IHN0b3JlLmRlbGV0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQsIGZhbHNlKSBdLFxuICAgICAgICAgIFsgXCJEZWxldGUgdGhpcyBjYXRlZ29yeSBhbmQgaXRzIGNoaWxkcmVuXCIsICgpID0+IHN0b3JlLmRlbGV0ZVNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5KHByb3BzLmNhdGVnb3J5SWQsIHRydWUpIF0sXG4gICAgICBdXG4gICAgICBpZiAoY2F0ZWdvcnkudmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gY2F0ZWdvcnlOYW1lLnZhbHVlXG4gICAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkuQ09OVEVYVF9NQVJLRVIpKSB7XG4gICAgICAgICAgICAgIGFjdGlvbnMucHVzaChbIFwiU3RhbmRhcmQgY29uc2lzdGVuY3kgY2hlY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gU3RyaXAgdHJhaWxpbmcgL1xuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lLnZhbHVlID0gbmFtZS5zdWJzdHIoMCwgbmFtZS5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICB9IF0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFsgXCJDb250ZXh0dWFsaXplZCBjb25zaXN0ZW5jeSBjaGVja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBBZGQgdHJhaWxpbmcgL1xuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lLnZhbHVlID0gbmFtZSArIFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5LkNPTlRFWFRfTUFSS0VSXG4gICAgICAgICAgICAgIH0gXSlcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYWN0aW9uc1xuICB9KVxuXG4gIGNvbnN0IHJlbGF0aW9uQWN0aW9uczogTmFtZWRBY3Rpb25bXSA9IFtcbiAgICAgIFsgXCJDcmVhdGUgYSBuZXcgY2hpbGQgY2F0ZWdvcnlcIiwgKCkgPT4gY3JlYXRlQ2hpbGRDYXRlZ29yeSgpIF0sXG4gICAgICBbIFwiU2V0IGFzIGdlbmVyaWMgYWJzdHJhY3Rpb25cIiwgKCkgPT4gdXBkYXRlQWJzdHJhY3Rpb25UeXBlKCcnKSBdLFxuICAgICAgWyBcIlNldCBhcyBhZ2dyZWdhdGlvbiBhYnN0cmFjdGlvbiDii4RcIiwgKCkgPT4gdXBkYXRlQWJzdHJhY3Rpb25UeXBlKCdhZ2dyZWdhdGlvbicpIF0sXG4gICAgICBbIFwiU2V0IGFzIHNwZWNpYWxpemF0aW9uIGFic3RyYWN0aW9uIOKnjVwiLCAoKSA9PiB1cGRhdGVBYnN0cmFjdGlvblR5cGUoJ3NwZWNpYWxpemF0aW9uJykgXSxcbiAgICAgIFsgXCJEZWZpbmUgYSBjcml0ZXJpb24gZm9yIHRoaXMgYWJzdHJhY3Rpb24gcmVsYXRpb25cIiwgKCkgPT4gY3JpdGVyaW9uUG9wdXAoKSBdXG4gIF1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuaGVhZGVyLWNsYXNzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5lbGVtZW50LXRvb2xiYXIsIC5lbGVtZW50LXRvb2xiYXItc2Vjb25kYXJ5IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbiB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLnZlcnRpY2FsIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jaGlsZHJlbiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgbWFyZ2luOiAwIDFlbTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktY2hpbGRyZW4uaG9yaXpvbnRhbCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5IHtcbiAgICAgIG1pbi13aWR0aDogdmFyKC0tbW9tZW50LW1pbmltdW0td2lkdGgpO1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBmbGV4OiAxO1xuICB9XG4gIC52ZXJ0aWNhbCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuaGlnaGxpZ2h0ZWQgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5IHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhpZ2hsaWdodGVkLWNvbG9yKTtcbiAgfVxuICAuaGlnaGxpZ2h0ZWQgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRlZC1jb2xvcik7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWp1c3RpZmljYXRpb24ge1xuICAgICAgd2lkdGg6IGNhbGModmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1kZXNjcmlwdGVtLXdpZHRoKSArIDUwcHgpO1xuICB9XG4gIC52ZXJ0aWNhbCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktanVzdGlmaWNhdGlvbiB7XG4gICAgICB3aWR0aDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1kZXNjcmlwdGVtLXdpZHRoKTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktaGVhZGVyIHtcbiAgICAgIHdpZHRoOiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LWhlYWRlci13aWR0aCk7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWp1c3RpZmljYXRpb24ge1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIGdyZXk7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oZWFkZXIuaGFzLWVycm9yIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktYm9keSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktYm9keSAucS1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLnEtaXRlbV9fc2VjdGlvbi0tYXZhdGFyIHtcbiAgICAgIG1pbi13aWR0aDogMnB4O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1oYW5kbGUge1xuICAgICAgb3BhY2l0eTogLjU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhhbmRsZTpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAuODtcbiAgfVxuICAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE4cHgpO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIC8qIFNpbmNlIHdlIGRpc3BsYXkgYSBib3JkZXIgb24gaG92ZXIsIG1hdGNoIHRoZSBzcGFjZSBpbiBub24taG92ZXIgc3RhdGUgKi9cbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1uYW1lOmhvdmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjY2NjY2NjZWU7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWp1c3RpZmljYXRpb24ge1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgbWluLWhlaWdodDogMTZweDtcbiAgICAgIG9wYWNpdHk6IDEuMDtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBAc3RhcnRpbmctc3R5bGUge1xuICAgICAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWp1c3RpZmljYXRpb24ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlciB7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbiB7XG4gICAgICB3aWR0aDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1yZWxhdGlvbi13aWR0aCk7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnZlcnRpY2FsIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1yZWxhdGlvbiB7XG4gICAgICBoZWlnaHQ6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktcmVsYXRpb24td2lkdGgpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LXJlbGF0aW9uaW5mbyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IGNhbGMoNTAlICsgMTBweCk7XG4gICAgICB3aWR0aDogdmFyKC0tc3luY2hyb25pYy1jYXRlZ29yeS1yZWxhdGlvbi13aWR0aCk7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgb3BhY2l0eTogMC4yO1xuICB9XG4gIC52ZXJ0aWNhbCAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb25pbmZvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHdpZHRoOiB2YXIoLS1zeW5jaHJvbmljLWNhdGVnb3J5LXJlbGF0aW9uLXdpZHRoKTtcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNDBweCk7XG4gIH1cblxuICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb246aG92ZXIgICAuc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnktcmVsYXRpb25pbmZvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWNyaXRlcmlvbiB7XG4gICAgICBib3JkZXI6IDFweCBkYXNoZWQgbGlnaHRncmV5O1xuICAgICAgd2lkdGg6IHZhcigtLXN5bmNocm9uaWMtY2F0ZWdvcnktcmVsYXRpb24td2lkdGgpO1xuICAgICAgbWluLWhlaWdodDogMWVtO1xuICAgICAgbWF4LWhlaWdodDogMjRweDtcblxuICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICBmb250LXNpemU6IDlweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWhlYWRlcjpob3ZlciAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC5lbGVtZW50LXRvb2xiYXIge1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5LWZpbGxlciB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIGZsZXg6IDE7XG4gIH1cbiAgLnZlcnRpY2FsIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1maWxsZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICB9XG4gIC5kZXNjcmlwdGVtcy1iYWRnZSB7XG4gICAgICBvcGFjaXR5OiAuNjtcbiAgfVxuICAuZGVzY3JpcHRlbXMtYmFkZ2U6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuICAubmV3c3NjLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgb3BhY2l0eTogLjU7XG4gIH1cbiAgLnZlcnRpY2FsIC5uZXdzc2MtYnV0dG9uIHtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gIH1cbiAgLmNyaXRlcmlvbi10b29sdGlwIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgfVxuICAuanVzdGlmaWNhdGlvbi1kZXNjcmlwdGVtcyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICB9XG4gIC5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeS1jcml0ZXJpb24ge1xuICAgICAgY3Vyc29yOiB0ZXh0O1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsIl9ob2lzdGVkXzIiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX2hvaXN0ZWRfNCIsIl9jcmVhdGVDb21tZW50Vk5vZGUiLCJfaG9pc3RlZF81IiwiX2hvaXN0ZWRfNiIsIl9ob2lzdGVkXzciLCJfaG9pc3RlZF84IiwiX2hvaXN0ZWRfMyIsIl9ub3JtYWxpemVTdHlsZSIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZVZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJzcGFuIiwiY29sb3IiLCJfbWVyZ2VQcm9wcyIsIl90b0hhbmRsZXJzIiwiX3JlbmRlclNsb3QiLCJfdXNlTW9kZWwiLCJfd2l0aE1vZGlmaWVycyIsIl93aXRoQ3R4IiwiY29tcGxldGlvbnMiLCJuYW1lIiwiX2hvaXN0ZWRfMTAiLCJfaG9pc3RlZF85IiwiX3dpdGhLZXlzIiwiY2F0ZWdvcnlOYW1lIiwiY3JpdGVyaW9uIl0sIm1hcHBpbmdzIjoi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
