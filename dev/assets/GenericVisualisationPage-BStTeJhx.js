import { Q as QPage } from "./QPage-DHeZQXK7.js";
import { Y as defineComponent, Z as useProjectStore, p as computed, a1 as _export_sfc, a2 as resolveComponent, aa as createElementBlock, a4 as openBlock, ab as createCommentVNode, aI as normalizeStyle, ad as normalizeClass, a7 as createBaseVNode, a9 as createTextVNode, a6 as createVNode, ac as toDisplayString, ag as Fragment, ah as renderList, aJ as Project, r as ref, a5 as withCtx, a8 as QBtn, a3 as createBlock } from "./index-DopDLCmk.js";
import { C as ColorizeIcon, Q as QBtnToggle, a as QSlider } from "./ColorizeIcon-7YuEzQte.js";
import { a as QSpace } from "./QBtnGroup-B2qPY7LA.js";
import { N as NoteIcon, a as QToolbar } from "./NoteIcon-CN27p7nT.js";
import "./format-e_oXboN5.js";
import "./rtl-DDpZOXNn.js";
import "./QTooltip-1NjvHq6L.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MomentShortRepresentation",
  props: {
    momentId: { type: String, default: "" },
    momentDepth: { type: Number, default: 0 },
    maximumDepth: { type: Number, default: 0 },
    layout: { type: String, default: "horizontal" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const props = __props;
    const moment = computed(() => store.getMoment(props.momentId));
    const momentColor = computed({
      get() {
        return moment.value ? moment.value.color : "";
      },
      set(color) {
        if (color == "#ffffff") {
          color = "";
        }
        store.updateMoment(props.momentId, { color });
      }
    });
    const __returned__ = { store, props, moment, momentColor, ColorizeIcon, NoteIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["data-moment"];
const _hoisted_2$1 = ["data-moment"];
const _hoisted_3 = { class: "moment-name" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MomentShortRepresentation = resolveComponent("MomentShortRepresentation", true);
  return openBlock(), createElementBlock("div", {
    ref: "container",
    "data-moment": $props.momentId
  }, [
    $setup.moment ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["moment", { "transitional": $setup.moment.isTransitional }]),
      style: normalizeStyle({ backgroundColor: $setup.moment.color }),
      "data-moment": $setup.moment.id
    }, [
      createBaseVNode("span", _hoisted_3, [
        createTextVNode(toDisplayString($setup.moment.descriptionLabel) + " ", 1),
        createVNode($setup["ColorizeIcon"], {
          class: "on-name-hover",
          modelValue: $setup.momentColor,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.momentColor = $event)
        }, null, 8, ["modelValue"]),
        createVNode($setup["NoteIcon"], { element: $setup.moment }, null, 8, ["element"])
      ]),
      $props.momentDepth < $props.maximumDepth ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["moment-children", $props.layout])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.moment.children, (m) => {
          return openBlock(), createElementBlock("div", {
            key: m.id
          }, [
            createVNode(_component_MomentShortRepresentation, {
              maximumDepth: $props.maximumDepth,
              momentDepth: $props.momentDepth + 1,
              momentId: m.id,
              layout: $props.layout
            }, null, 8, ["maximumDepth", "momentDepth", "momentId", "layout"])
          ]);
        }), 128))
      ], 2)) : createCommentVNode("", true)
    ], 14, _hoisted_2$1)) : createCommentVNode("", true)
  ], 8, _hoisted_1$1);
}
const MomentShortRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-464298b3"], ["__file", "MomentShortRepresentation.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InterviewsSpreadsheet",
  props: {
    project: {
      type: Project,
      default: null
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const editViewMode = ref("horizontal");
    const maximumDepth = ref(1);
    const __returned__ = { editViewMode, maximumDepth, MomentShortRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.project ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(QToolbar, { class: "row toolbar" }, {
      default: withCtx(() => [
        createBaseVNode("span", _hoisted_2, toDisplayString($props.project.name), 1),
        createVNode(QBtnToggle, {
          size: "xs",
          modelValue: $setup.editViewMode,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.editViewMode = $event),
          options: [
            { icon: "mdi-pan-horizontal", value: "horizontal" },
            { icon: "mdi-pan-vertical", value: "vertical" }
          ]
        }, null, 8, ["modelValue"]),
        createVNode(QSlider, {
          modelValue: $setup.maximumDepth,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.maximumDepth = $event),
          class: "col-4",
          snap: "",
          "label-always": "",
          markers: "",
          min: 0,
          max: 4,
          step: 1
        }, null, 8, ["modelValue"]),
        createVNode(QSpace)
      ]),
      _: 1
    }),
    createBaseVNode("div", {
      class: normalizeClass(["interviews", $setup.editViewMode])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.project.interviews, (interview) => {
        return openBlock(), createElementBlock("div", {
          class: "interview-moments",
          key: interview.id
        }, [
          createVNode(QBtn, {
            to: { name: "project", params: { id: interview.parentId }, query: { tab: interview.label } }
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(interview.label), 1)
            ]),
            _: 2
          }, 1032, ["to"]),
          createBaseVNode("div", {
            class: normalizeClass(["interview-children", $setup.editViewMode])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(interview?.analysis?.rootMoment?.children, (moment) => {
              return openBlock(), createBlock($setup["MomentShortRepresentation"], {
                key: moment.id,
                maximumDepth: $setup.maximumDepth,
                momentId: moment.id,
                layout: $setup.editViewMode
              }, null, 8, ["maximumDepth", "momentId", "layout"]);
            }), 128))
          ], 2)
        ]);
      }), 128))
    ], 2)
  ])) : createCommentVNode("", true);
}
const InterviewsSpreadsheet = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-2672830f"], ["__file", "InterviewsSpreadsheet.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "GenericVisualisationPage"
  },
  __name: "GenericVisualisationPage",
  props: {
    projectId: {
      type: String,
      default: null
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const store = useProjectStore();
    const project = computed(() => {
      if (props.projectId) {
        store.activateProject(props.projectId);
        const p = store.getFullProject(props.projectId);
        return p;
      } else {
        return null;
      }
    });
    const __returned__ = { props, store, project, InterviewsSpreadsheet };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.project ? (openBlock(), createBlock(QPage, {
    key: 0,
    class: "row fit"
  }, {
    default: withCtx(() => [
      createVNode($setup["InterviewsSpreadsheet"], { project: $setup.project }, null, 8, ["project"])
    ]),
    _: 1
  })) : createCommentVNode("", true);
}
const GenericVisualisationPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "GenericVisualisationPage.vue"]]);
export {
  GenericVisualisationPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY1Zpc3VhbGlzYXRpb25QYWdlLUJTdFRlSmh4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ludGVydmlld3NTcHJlYWRzaGVldC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvR2VuZXJpY1Zpc3VhbGlzYXRpb25QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiY29udGFpbmVyXCJcbiAgICAgICA6ZGF0YS1tb21lbnQ9XCJtb21lbnRJZFwiPlxuXG4gICAgPGRpdiA6Y2xhc3M9XCJbICdtb21lbnQnLCB7ICd0cmFuc2l0aW9uYWwnOiBtb21lbnQuaXNUcmFuc2l0aW9uYWwgfSBdXCJcbiAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBtb21lbnQuY29sb3IgfVwiXG4gICAgICAgICB2LWlmPVwibW9tZW50XCJcbiAgICAgICAgIDpkYXRhLW1vbWVudD1cIm1vbWVudC5pZFwiPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cIm1vbWVudC1uYW1lXCI+XG4gICAgICAgIHt7IG1vbWVudC5kZXNjcmlwdGlvbkxhYmVsIH19XG4gICAgICAgIDxDb2xvcml6ZUljb25cbiAgICAgICAgICBjbGFzcz1cIm9uLW5hbWUtaG92ZXJcIlxuICAgICAgICAgIHYtbW9kZWw9XCJtb21lbnRDb2xvclwiIC8+XG4gICAgICAgIDxOb3RlSWNvblxuICAgICAgICAgIDplbGVtZW50PVwibW9tZW50XCIgLz5cbiAgICAgIDwvc3Bhbj5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1vbWVudC1jaGlsZHJlblwiXG4gICAgICAgICAgIDpjbGFzcz1cImxheW91dFwiXG4gICAgICAgICAgIHYtaWY9XCJtb21lbnREZXB0aCA8IG1heGltdW1EZXB0aFwiPlxuICAgICAgICA8ZGl2IHYtZm9yPVwibSBpbiBtb21lbnQuY2hpbGRyZW5cIlxuICAgICAgICAgICAgIDprZXk9XCJtLmlkXCI+XG4gICAgICAgICAgPE1vbWVudFNob3J0UmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIDptYXhpbXVtRGVwdGg9XCJtYXhpbXVtRGVwdGhcIlxuICAgICAgICAgICAgOm1vbWVudERlcHRoPVwibW9tZW50RGVwdGggKyAxXCJcbiAgICAgICAgICAgIDptb21lbnRJZD1cIm0uaWRcIlxuICAgICAgICAgICAgOmxheW91dD1cImxheW91dFwiPlxuICAgICAgICAgIDwvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IENvbG9yaXplSWNvbiBmcm9tICcuL0NvbG9yaXplSWNvbi52dWUnXG4gIGltcG9ydCBOb3RlSWNvbiBmcm9tICcuL05vdGVJY29uLnZ1ZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBtb21lbnRJZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICAgIG1vbWVudERlcHRoOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxuICAgICAgbWF4aW11bURlcHRoOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxuICAgICAgbGF5b3V0OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJob3Jpem9udGFsXCIgfVxuICB9KVxuXG4gIGNvbnN0IG1vbWVudCA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldE1vbWVudChwcm9wcy5tb21lbnRJZCkpXG5cbiAgY29uc3QgbW9tZW50Q29sb3IgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiBtb21lbnQudmFsdWUgPyBtb21lbnQudmFsdWUuY29sb3IgOiBcIlwiXG4gICAgICB9LFxuICAgICAgc2V0IChjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgICAgaWYgKGNvbG9yID09ICcjZmZmZmZmJykge1xuICAgICAgICAgICAgICBjb2xvciA9ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudChwcm9wcy5tb21lbnRJZCwgeyBjb2xvciB9KVxuICAgICAgfVxuICB9KVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5oZWFkZXItY2xhc3Mge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm1vbWVudC1jaGlsZHJlbiB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLm1vbWVudC1jaGlsZHJlbi52ZXJ0aWNhbCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5tb21lbnQtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5tb21lbnQge1xuICAgICAgbWluLXdpZHRoOiB2YXIoLS1tb21lbnQtbWluaW11bS13aWR0aCk7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIH1cbiAgLm1vbWVudC1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubW9tZW50LWJvZHkge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLnRyYW5zaXRpb25hbCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2l0aW9uYWwtY29sb3IpO1xuICB9XG4gIC50cmFuc2l0aW9uYWw6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IGNhbGMoIDUwJSAtIHZhcigtLXRyYW5zaXRpb25hbC1iYXItd2lkdGgpIC8gMiApO1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgd2lkdGg6IHZhcigtLXRyYW5zaXRpb25hbC1iYXItd2lkdGgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNpdGlvbmFsLWNvbG9yKTtcbiAgfVxuICAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5tb21lbnQtbmFtZTpob3ZlciAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IHYtaWY9XCJwcm9qZWN0XCI+XG4gICAgPHEtdG9vbGJhciBjbGFzcz1cInJvdyB0b29sYmFyXCI+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNVwiPnt7IHByb2plY3QubmFtZSB9fTwvc3Bhbj5cblxuICAgICAgPHEtYnRuLXRvZ2dsZVxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICB2LW1vZGVsPVwiZWRpdFZpZXdNb2RlXCJcbiAgICAgICAgOm9wdGlvbnM9XCJbIHsgaWNvbjogJ21kaS1wYW4taG9yaXpvbnRhbCcsIHZhbHVlOiAnaG9yaXpvbnRhbCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgaWNvbjogJ21kaS1wYW4tdmVydGljYWwnLCB2YWx1ZTogJ3ZlcnRpY2FsJyB9IF1cIj5cbiAgICAgIDwvcS1idG4tdG9nZ2xlPlxuXG4gICAgICA8cS1zbGlkZXIgdi1tb2RlbD1cIm1heGltdW1EZXB0aFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtNFwiXG4gICAgICAgICAgICAgICAgc25hcFxuICAgICAgICAgICAgICAgIGxhYmVsLWFsd2F5c1xuICAgICAgICAgICAgICAgIG1hcmtlcnNcbiAgICAgICAgICAgICAgICA6bWluPVwiMFwiXG4gICAgICAgICAgICAgICAgOm1heD1cIjRcIlxuICAgICAgICAgICAgICAgIDpzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgPC9xLXNsaWRlcj5cblxuICAgICAgPHEtc3BhY2UgLz5cblxuICAgIDwvcS10b29sYmFyPlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiaW50ZXJ2aWV3c1wiXG4gICAgICAgICA6Y2xhc3M9XCJlZGl0Vmlld01vZGVcIj5cbiAgICAgIDxkaXYgdi1mb3I9XCJpbnRlcnZpZXcgaW4gcHJvamVjdC5pbnRlcnZpZXdzXCJcbiAgICAgICAgICAgY2xhc3M9XCJpbnRlcnZpZXctbW9tZW50c1wiXG4gICAgICAgICAgIDprZXk9XCJpbnRlcnZpZXcuaWRcIj5cbiAgICAgICAgPHEtYnRuIDp0bz1cInsgbmFtZTogJ3Byb2plY3QnLCBwYXJhbXM6IHsgaWQ6IGludGVydmlldy5wYXJlbnRJZCB9LCAgcXVlcnk6IHsgdGFiOiBpbnRlcnZpZXcubGFiZWwgfSB9XCI+e3sgaW50ZXJ2aWV3LmxhYmVsIH19PC9xLWJ0bj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImludGVydmlldy1jaGlsZHJlblwiXG4gICAgICAgICAgICAgOmNsYXNzPVwiZWRpdFZpZXdNb2RlXCI+XG4gICAgICAgICAgPE1vbWVudFNob3J0UmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHYtZm9yPVwibW9tZW50IGluIGludGVydmlldz8uYW5hbHlzaXM/LnJvb3RNb21lbnQ/LmNoaWxkcmVuXCJcbiAgICAgICAgICAgIDprZXk9XCJtb21lbnQuaWRcIlxuICAgICAgICAgICAgOm1heGltdW1EZXB0aD1cIm1heGltdW1EZXB0aFwiXG4gICAgICAgICAgICA6bW9tZW50SWQ9XCJtb21lbnQuaWRcIlxuICAgICAgICAgICAgOmxheW91dD1cImVkaXRWaWV3TW9kZVwiPlxuICAgICAgICAgIDwvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcbiAgLy8gaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgLy8gaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuICBpbXBvcnQgTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbiBmcm9tICcuL01vbWVudFNob3J0UmVwcmVzZW50YXRpb24udnVlJ1xuICBpbXBvcnQgUHJvamVjdCBmcm9tICdzdG9yZXMvbW9kZWxzL3Byb2plY3QnXG5cbiAgLy8gY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuICAvLyBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG4gIGNvbnN0IGVkaXRWaWV3TW9kZSA9IHJlZignaG9yaXpvbnRhbCcpXG5cbiAgY29uc3QgbWF4aW11bURlcHRoID0gcmVmKDEpXG5cbiAgZGVmaW5lUHJvcHMoe1xuICAgICAgcHJvamVjdDoge1xuICAgICAgICAgIHR5cGU6IFByb2plY3QsXG4gICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgfVxuICB9KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ob3Jpem9udGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi52ZXJ0aWNhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW50ZXJ2aWV3cy52ZXJ0aWNhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmludGVydmlld3MuaG9yaXpvbnRhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2VcbiAgICB2LWlmPVwicHJvamVjdFwiXG4gICAgY2xhc3M9XCJyb3cgZml0XCI+XG4gICAgPEludGVydmlld3NTcHJlYWRzaGVldFxuICAgICAgOnByb2plY3Q9XCJwcm9qZWN0XCIgLz5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICAvLyAgaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IEludGVydmlld3NTcHJlYWRzaGVldCBmcm9tICdjb21wb25lbnRzL0ludGVydmlld3NTcHJlYWRzaGVldC52dWUnXG5cbiAgZGVmaW5lT3B0aW9ucyh7XG4gICAgICBuYW1lOiAnR2VuZXJpY1Zpc3VhbGlzYXRpb25QYWdlJ1xuICB9KVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgcHJvamVjdElkOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvamVjdCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9qZWN0SWQpIHtcbiAgICAgICAgICBzdG9yZS5hY3RpdmF0ZVByb2plY3QocHJvcHMucHJvamVjdElkKVxuICAgICAgICAgIGNvbnN0IHAgPSBzdG9yZS5nZXRGdWxsUHJvamVjdChwcm9wcy5wcm9qZWN0SWQpXG4gICAgICAgICAgcmV0dXJuIHBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgfSlcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfb3BlbkJsb2NrIiwiX25vcm1hbGl6ZUNsYXNzIiwiX25vcm1hbGl6ZVN0eWxlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZVZOb2RlIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfd2l0aEN0eCIsIl9jcmVhdGVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENFLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sUUFBUTtBQU9kLFVBQU0sU0FBUyxTQUFTLE1BQU0sTUFBTSxVQUFVLE1BQU0sUUFBUSxDQUFDO0FBRTdELFVBQU0sY0FBYyxTQUFTO0FBQUEsTUFDekIsTUFBTztBQUNILGVBQU8sT0FBTyxRQUFRLE9BQU8sTUFBTSxRQUFRO0FBQUEsTUFDL0M7QUFBQSxNQUNBLElBQUssT0FBZTtBQUNoQixZQUFJLFNBQVMsV0FBVztBQUNwQixrQkFBUTtBQUFBLFFBQ1o7QUFDQSxjQUFNLGFBQWEsTUFBTSxVQUFVLEVBQUUsT0FBTztBQUFBLE1BQ2hEO0FBQUEsSUFBQSxDQUNIOzs7Ozs7OztBQXhEUyxNQUFBLGFBQUEsRUFBQSxPQUFNLGNBQUE7OztzQkFSaEJBLG1CQWlDTSxPQUFBO0FBQUEsSUFqQ0QsS0FBSTtBQUFBLElBQ0gsZUFBYSxPQUFB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
