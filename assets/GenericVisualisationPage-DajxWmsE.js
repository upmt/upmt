import { Q as QPage } from "./QPage-B7iBNboQ.js";
import { Y as defineComponent, Z as useProjectStore, p as computed, a1 as _export_sfc, a2 as resolveComponent, aa as createElementBlock, a4 as openBlock, ab as createCommentVNode, aK as normalizeStyle, ad as normalizeClass, a7 as createBaseVNode, a9 as createTextVNode, a6 as createVNode, ac as toDisplayString, ag as Fragment, ah as renderList, aL as Project, r as ref, a5 as withCtx, a8 as QBtn, a3 as createBlock } from "./index-DT2JP2rj.js";
import { C as ColorizeIcon, Q as QBtnToggle, a as QSlider } from "./ColorizeIcon-D9Z2NhyB.js";
import { a as QSpace } from "./DragElement-BzCdx0F_.js";
import { N as NoteIcon, a as QToolbar } from "./NoteIcon-CFcGh7Em.js";
import "./format-Dbce-Jpy.js";
import "./rtl-DDpZOXNn.js";
import "./QTooltip-y5EwGWAn.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY1Zpc3VhbGlzYXRpb25QYWdlLURhanhXbXNFLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ludGVydmlld3NTcHJlYWRzaGVldC52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvR2VuZXJpY1Zpc3VhbGlzYXRpb25QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiY29udGFpbmVyXCJcbiAgICAgICA6ZGF0YS1tb21lbnQ9XCJtb21lbnRJZFwiPlxuXG4gICAgPGRpdiA6Y2xhc3M9XCJbICdtb21lbnQnLCB7ICd0cmFuc2l0aW9uYWwnOiBtb21lbnQuaXNUcmFuc2l0aW9uYWwgfSBdXCJcbiAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBtb21lbnQuY29sb3IgfVwiXG4gICAgICAgICB2LWlmPVwibW9tZW50XCJcbiAgICAgICAgIDpkYXRhLW1vbWVudD1cIm1vbWVudC5pZFwiPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cIm1vbWVudC1uYW1lXCI+XG4gICAgICAgIHt7IG1vbWVudC5kZXNjcmlwdGlvbkxhYmVsIH19XG4gICAgICAgIDxDb2xvcml6ZUljb25cbiAgICAgICAgICBjbGFzcz1cIm9uLW5hbWUtaG92ZXJcIlxuICAgICAgICAgIHYtbW9kZWw9XCJtb21lbnRDb2xvclwiIC8+XG4gICAgICAgIDxOb3RlSWNvblxuICAgICAgICAgIDplbGVtZW50PVwibW9tZW50XCIgLz5cbiAgICAgIDwvc3Bhbj5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1vbWVudC1jaGlsZHJlblwiXG4gICAgICAgICAgIDpjbGFzcz1cImxheW91dFwiXG4gICAgICAgICAgIHYtaWY9XCJtb21lbnREZXB0aCA8IG1heGltdW1EZXB0aFwiPlxuICAgICAgICA8ZGl2IHYtZm9yPVwibSBpbiBtb21lbnQuY2hpbGRyZW5cIlxuICAgICAgICAgICAgIDprZXk9XCJtLmlkXCI+XG4gICAgICAgICAgPE1vbWVudFNob3J0UmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIDptYXhpbXVtRGVwdGg9XCJtYXhpbXVtRGVwdGhcIlxuICAgICAgICAgICAgOm1vbWVudERlcHRoPVwibW9tZW50RGVwdGggKyAxXCJcbiAgICAgICAgICAgIDptb21lbnRJZD1cIm0uaWRcIlxuICAgICAgICAgICAgOmxheW91dD1cImxheW91dFwiPlxuICAgICAgICAgIDwvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IENvbG9yaXplSWNvbiBmcm9tICcuL0NvbG9yaXplSWNvbi52dWUnXG4gIGltcG9ydCBOb3RlSWNvbiBmcm9tICcuL05vdGVJY29uLnZ1ZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBtb21lbnRJZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICAgIG1vbWVudERlcHRoOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxuICAgICAgbWF4aW11bURlcHRoOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxuICAgICAgbGF5b3V0OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJob3Jpem9udGFsXCIgfVxuICB9KVxuXG4gIGNvbnN0IG1vbWVudCA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldE1vbWVudChwcm9wcy5tb21lbnRJZCkpXG5cbiAgY29uc3QgbW9tZW50Q29sb3IgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiBtb21lbnQudmFsdWUgPyBtb21lbnQudmFsdWUuY29sb3IgOiBcIlwiXG4gICAgICB9LFxuICAgICAgc2V0IChjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgICAgaWYgKGNvbG9yID09ICcjZmZmZmZmJykge1xuICAgICAgICAgICAgICBjb2xvciA9ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudChwcm9wcy5tb21lbnRJZCwgeyBjb2xvciB9KVxuICAgICAgfVxuICB9KVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5oZWFkZXItY2xhc3Mge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm1vbWVudC1jaGlsZHJlbiB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLm1vbWVudC1jaGlsZHJlbi52ZXJ0aWNhbCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5tb21lbnQtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5tb21lbnQge1xuICAgICAgbWluLXdpZHRoOiB2YXIoLS1tb21lbnQtbWluaW11bS13aWR0aCk7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIH1cbiAgLm1vbWVudC1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubW9tZW50LWJvZHkge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLnRyYW5zaXRpb25hbCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2l0aW9uYWwtY29sb3IpO1xuICB9XG4gIC50cmFuc2l0aW9uYWw6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IGNhbGMoIDUwJSAtIHZhcigtLXRyYW5zaXRpb25hbC1iYXItd2lkdGgpIC8gMiApO1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgd2lkdGg6IHZhcigtLXRyYW5zaXRpb25hbC1iYXItd2lkdGgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNpdGlvbmFsLWNvbG9yKTtcbiAgfVxuICAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5tb21lbnQtbmFtZTpob3ZlciAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IHYtaWY9XCJwcm9qZWN0XCI+XG4gICAgPHEtdG9vbGJhciBjbGFzcz1cInJvdyB0b29sYmFyXCI+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNVwiPnt7IHByb2plY3QubmFtZSB9fTwvc3Bhbj5cblxuICAgICAgPHEtYnRuLXRvZ2dsZVxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICB2LW1vZGVsPVwiZWRpdFZpZXdNb2RlXCJcbiAgICAgICAgOm9wdGlvbnM9XCJbIHsgaWNvbjogJ21kaS1wYW4taG9yaXpvbnRhbCcsIHZhbHVlOiAnaG9yaXpvbnRhbCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgaWNvbjogJ21kaS1wYW4tdmVydGljYWwnLCB2YWx1ZTogJ3ZlcnRpY2FsJyB9IF1cIj5cbiAgICAgIDwvcS1idG4tdG9nZ2xlPlxuXG4gICAgICA8cS1zbGlkZXIgdi1tb2RlbD1cIm1heGltdW1EZXB0aFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtNFwiXG4gICAgICAgICAgICAgICAgc25hcFxuICAgICAgICAgICAgICAgIGxhYmVsLWFsd2F5c1xuICAgICAgICAgICAgICAgIG1hcmtlcnNcbiAgICAgICAgICAgICAgICA6bWluPVwiMFwiXG4gICAgICAgICAgICAgICAgOm1heD1cIjRcIlxuICAgICAgICAgICAgICAgIDpzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgPC9xLXNsaWRlcj5cblxuICAgICAgPHEtc3BhY2UgLz5cblxuICAgIDwvcS10b29sYmFyPlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiaW50ZXJ2aWV3c1wiXG4gICAgICAgICA6Y2xhc3M9XCJlZGl0Vmlld01vZGVcIj5cbiAgICAgIDxkaXYgdi1mb3I9XCJpbnRlcnZpZXcgaW4gcHJvamVjdC5pbnRlcnZpZXdzXCJcbiAgICAgICAgICAgY2xhc3M9XCJpbnRlcnZpZXctbW9tZW50c1wiXG4gICAgICAgICAgIDprZXk9XCJpbnRlcnZpZXcuaWRcIj5cbiAgICAgICAgPHEtYnRuIDp0bz1cInsgbmFtZTogJ3Byb2plY3QnLCBwYXJhbXM6IHsgaWQ6IGludGVydmlldy5wYXJlbnRJZCB9LCAgcXVlcnk6IHsgdGFiOiBpbnRlcnZpZXcubGFiZWwgfSB9XCI+e3sgaW50ZXJ2aWV3LmxhYmVsIH19PC9xLWJ0bj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImludGVydmlldy1jaGlsZHJlblwiXG4gICAgICAgICAgICAgOmNsYXNzPVwiZWRpdFZpZXdNb2RlXCI+XG4gICAgICAgICAgPE1vbWVudFNob3J0UmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHYtZm9yPVwibW9tZW50IGluIGludGVydmlldz8uYW5hbHlzaXM/LnJvb3RNb21lbnQ/LmNoaWxkcmVuXCJcbiAgICAgICAgICAgIDprZXk9XCJtb21lbnQuaWRcIlxuICAgICAgICAgICAgOm1heGltdW1EZXB0aD1cIm1heGltdW1EZXB0aFwiXG4gICAgICAgICAgICA6bW9tZW50SWQ9XCJtb21lbnQuaWRcIlxuICAgICAgICAgICAgOmxheW91dD1cImVkaXRWaWV3TW9kZVwiPlxuICAgICAgICAgIDwvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcbiAgLy8gaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgLy8gaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuICBpbXBvcnQgTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbiBmcm9tICcuL01vbWVudFNob3J0UmVwcmVzZW50YXRpb24udnVlJ1xuICBpbXBvcnQgUHJvamVjdCBmcm9tICdzdG9yZXMvbW9kZWxzL3Byb2plY3QnXG5cbiAgLy8gY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuICAvLyBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG4gIGNvbnN0IGVkaXRWaWV3TW9kZSA9IHJlZignaG9yaXpvbnRhbCcpXG5cbiAgY29uc3QgbWF4aW11bURlcHRoID0gcmVmKDEpXG5cbiAgZGVmaW5lUHJvcHMoe1xuICAgICAgcHJvamVjdDoge1xuICAgICAgICAgIHR5cGU6IFByb2plY3QsXG4gICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgfVxuICB9KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ob3Jpem9udGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi52ZXJ0aWNhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW50ZXJ2aWV3cy52ZXJ0aWNhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmludGVydmlld3MuaG9yaXpvbnRhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2VcbiAgICB2LWlmPVwicHJvamVjdFwiXG4gICAgY2xhc3M9XCJyb3cgZml0XCI+XG4gICAgPEludGVydmlld3NTcHJlYWRzaGVldFxuICAgICAgOnByb2plY3Q9XCJwcm9qZWN0XCIgLz5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICAvLyAgaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IEludGVydmlld3NTcHJlYWRzaGVldCBmcm9tICdjb21wb25lbnRzL0ludGVydmlld3NTcHJlYWRzaGVldC52dWUnXG5cbiAgZGVmaW5lT3B0aW9ucyh7XG4gICAgICBuYW1lOiAnR2VuZXJpY1Zpc3VhbGlzYXRpb25QYWdlJ1xuICB9KVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgcHJvamVjdElkOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvamVjdCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9qZWN0SWQpIHtcbiAgICAgICAgICBjb25zdCBwID0gc3RvcmUuZ2V0RnVsbFByb2plY3QocHJvcHMucHJvamVjdElkKVxuICAgICAgICAgIHJldHVybiBwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gIH0pXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX29wZW5CbG9jayIsIl9ub3JtYWxpemVDbGFzcyIsIl9ub3JtYWxpemVTdHlsZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVWTm9kZSIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX3dpdGhDdHgiLCJfY3JlYXRlQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDRSxVQUFNLFFBQVEsZ0JBQUE7QUFFZCxVQUFNLFFBQVE7QUFPZCxVQUFNLFNBQVMsU0FBUyxNQUFNLE1BQU0sVUFBVSxNQUFNLFFBQVEsQ0FBQztBQUU3RCxVQUFNLGNBQWMsU0FBUztBQUFBLE1BQ3pCLE1BQU87QUFDSCxlQUFPLE9BQU8sUUFBUSxPQUFPLE1BQU0sUUFBUTtBQUFBLE1BQy9DO0FBQUEsTUFDQSxJQUFLLE9BQWU7QUFDaEIsWUFBSSxTQUFTLFdBQVc7QUFDcEIsa0JBQVE7QUFBQSxRQUNaO0FBQ0EsY0FBTSxhQUFhLE1BQU0sVUFBVSxFQUFFLE9BQU87QUFBQSxNQUNoRDtBQUFBLElBQUEsQ0FDSDs7Ozs7Ozs7QUF4RFMsTUFBQSxhQUFBLEVBQUEsT0FBTSxjQUFBOzs7c0JBUmhCQSxtQkFpQ00sT0FBQTtBQUFBLElBakNELEtBQUk7QUFBQSxJQUNILGVBQWEsT0FBQTtBQUFBLEVBQUEsR0FBQTtBQUFBLElBSU4sT0FBQSxVQUFBQyxhQUZYRCxtQkE0Qk0s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
