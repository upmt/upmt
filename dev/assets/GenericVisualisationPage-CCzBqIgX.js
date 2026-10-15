import { Q as QPage } from "./QPage-eu-cdMDP.js";
import { M as defineComponent, bf as Project, r as ref, _ as _export_sfc, X as createElementBlock, V as createCommentVNode, R as openBlock, Y as createVNode, aa as createBaseVNode, U as withCtx, a2 as toDisplayString, Z as Fragment, $ as renderList, ae as normalizeClass, a1 as createTextVNode, Q as QBtn, P as createBlock, N as useProjectStore, b as computed } from "./index-zU2rftsz.js";
import { Q as QBtnToggle } from "./QBtnToggle-BQ0OrqgU.js";
import { a as QSlider } from "./QSlider-CQOqkv49.js";
import { Q as QSpace } from "./QSpace-CwPbzNKY.js";
import { Q as QToolbar } from "./QToolbar-D2bKnxrj.js";
import { M as MomentShortRepresentation } from "./MomentShortRepresentation-CUZcKwdL.js";
import "./QBtnGroup-9WRAMA3X.js";
import "./format--PxEkPap.js";
import "./QTooltip-D57IcaGC.js";
import "./DropZone-DF7OQInd.js";
import "./QSelect-DZK1VTet.js";
import "./QItemLabel-C8XYyR7Z.js";
import "./MomentNameInput-CXXf9N-b.js";
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
    const genericDiachronicMode = ref("");
    const maximumDepth = ref(1);
    const __returned__ = { editViewMode, genericDiachronicMode, maximumDepth, MomentShortRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5 q-px-md" };
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
        _cache[3] || (_cache[3] = createBaseVNode("span", { class: "q-px-md text-bold" }, "Mode", -1)),
        createVNode(QBtnToggle, {
          size: "xs",
          modelValue: $setup.genericDiachronicMode,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.genericDiachronicMode = $event),
          options: [
            { icon: "mdi-alpha-d-box-outline", value: "" },
            { icon: "mdi-alpha-d-box", value: "replace" }
          ]
        }, null, 8, ["modelValue"]),
        _cache[4] || (_cache[4] = createBaseVNode("span", { class: "q-px-md text-bold" }, "Depth :", -1)),
        createVNode(QSlider, {
          modelValue: $setup.maximumDepth,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.maximumDepth = $event),
          class: "col-4",
          snap: "",
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
            "no-caps": "",
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
                genericDiachronicMode: $setup.genericDiachronicMode,
                layout: $setup.editViewMode
              }, null, 8, ["maximumDepth", "momentId", "genericDiachronicMode", "layout"]);
            }), 128))
          ], 2)
        ]);
      }), 128))
    ], 2)
  ])) : createCommentVNode("", true);
}
const InterviewsSpreadsheet = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-8a5c0c33"], ["__file", "InterviewsSpreadsheet.vue"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY1Zpc3VhbGlzYXRpb25QYWdlLUNDekJxSWdYLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9JbnRlcnZpZXdzU3ByZWFkc2hlZXQudnVlIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0dlbmVyaWNWaXN1YWxpc2F0aW9uUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHYtaWY9XCJwcm9qZWN0XCI+XG4gICAgPHEtdG9vbGJhciBjbGFzcz1cInJvdyB0b29sYmFyXCI+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBxLXB4LW1kXCI+e3sgcHJvamVjdC5uYW1lIH19PC9zcGFuPlxuXG4gICAgICA8cS1idG4tdG9nZ2xlXG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIHYtbW9kZWw9XCJlZGl0Vmlld01vZGVcIlxuICAgICAgICA6b3B0aW9ucz1cIlsgeyBpY29uOiAnbWRpLXBhbi1ob3Jpem9udGFsJywgdmFsdWU6ICdob3Jpem9udGFsJyB9LFxuICAgICAgICAgICAgICAgICAgeyBpY29uOiAnbWRpLXBhbi12ZXJ0aWNhbCcsIHZhbHVlOiAndmVydGljYWwnIH0gXVwiPlxuICAgICAgPC9xLWJ0bi10b2dnbGU+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwicS1weC1tZCB0ZXh0LWJvbGRcIj5Nb2RlPC9zcGFuPlxuICAgICAgPHEtYnRuLXRvZ2dsZVxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICB2LW1vZGVsPVwiZ2VuZXJpY0RpYWNocm9uaWNNb2RlXCJcbiAgICAgICAgOm9wdGlvbnM9XCJbIHsgaWNvbjogJ21kaS1hbHBoYS1kLWJveC1vdXRsaW5lJywgdmFsdWU6ICcnIH0sXG4gICAgICAgICAgICAgICAgICB7IGljb246ICdtZGktYWxwaGEtZC1ib3gnLCB2YWx1ZTogJ3JlcGxhY2UnIH0gXVwiPlxuICAgICAgPC9xLWJ0bi10b2dnbGU+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwicS1weC1tZCB0ZXh0LWJvbGRcIj5EZXB0aCZuYnNwOzo8L3NwYW4+XG4gICAgICA8cS1zbGlkZXIgdi1tb2RlbD1cIm1heGltdW1EZXB0aFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtNFwiXG4gICAgICAgICAgICAgICAgc25hcFxuICAgICAgICAgICAgICAgIG1hcmtlcnNcbiAgICAgICAgICAgICAgICA6bWluPVwiMFwiXG4gICAgICAgICAgICAgICAgOm1heD1cIjRcIlxuICAgICAgICAgICAgICAgIDpzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgPC9xLXNsaWRlcj5cblxuICAgICAgPHEtc3BhY2UgLz5cblxuICAgIDwvcS10b29sYmFyPlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiaW50ZXJ2aWV3c1wiXG4gICAgICAgICA6Y2xhc3M9XCJlZGl0Vmlld01vZGVcIj5cbiAgICAgIDxkaXYgdi1mb3I9XCJpbnRlcnZpZXcgaW4gcHJvamVjdC5pbnRlcnZpZXdzXCJcbiAgICAgICAgICAgY2xhc3M9XCJpbnRlcnZpZXctbW9tZW50c1wiXG4gICAgICAgICAgIDprZXk9XCJpbnRlcnZpZXcuaWRcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgIDp0bz1cInsgbmFtZTogJ3Byb2plY3QnLCBwYXJhbXM6IHsgaWQ6IGludGVydmlldy5wYXJlbnRJZCB9LCAgcXVlcnk6IHsgdGFiOiBpbnRlcnZpZXcubGFiZWwgfSB9XCI+XG4gICAgICAgICAge3sgaW50ZXJ2aWV3LmxhYmVsIH19XG4gICAgICAgIDwvcS1idG4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnRlcnZpZXctY2hpbGRyZW5cIlxuICAgICAgICAgICAgIDpjbGFzcz1cImVkaXRWaWV3TW9kZVwiPlxuICAgICAgICAgIDxNb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB2LWZvcj1cIm1vbWVudCBpbiBpbnRlcnZpZXc/LmFuYWx5c2lzPy5yb290TW9tZW50Py5jaGlsZHJlblwiXG4gICAgICAgICAgICA6a2V5PVwibW9tZW50LmlkXCJcbiAgICAgICAgICAgIDptYXhpbXVtRGVwdGg9XCJtYXhpbXVtRGVwdGhcIlxuICAgICAgICAgICAgOm1vbWVudElkPVwibW9tZW50LmlkXCJcbiAgICAgICAgICAgIDpnZW5lcmljRGlhY2hyb25pY01vZGU9XCJnZW5lcmljRGlhY2hyb25pY01vZGVcIlxuICAgICAgICAgICAgOmxheW91dD1cImVkaXRWaWV3TW9kZVwiPlxuICAgICAgICAgIDwvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcbiAgLy8gaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgLy8gaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuICBpbXBvcnQgTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbiBmcm9tICcuL01vbWVudFNob3J0UmVwcmVzZW50YXRpb24udnVlJ1xuICBpbXBvcnQgUHJvamVjdCBmcm9tICdzdG9yZXMvbW9kZWxzL3Byb2plY3QnXG5cbiAgLy8gY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuICAvLyBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG4gIGNvbnN0IGVkaXRWaWV3TW9kZSA9IHJlZignaG9yaXpvbnRhbCcpXG4gIGNvbnN0IGdlbmVyaWNEaWFjaHJvbmljTW9kZSA9IHJlZignJylcblxuICBjb25zdCBtYXhpbXVtRGVwdGggPSByZWYoMSlcblxuICBkZWZpbmVQcm9wcyh7XG4gICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgdHlwZTogUHJvamVjdCxcbiAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICB9XG4gIH0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmhvcml6b250YWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnZlcnRpY2FsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5pbnRlcnZpZXdzLnZlcnRpY2FsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uaW50ZXJ2aWV3cy5ob3Jpem9udGFsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZVxuICAgIHYtaWY9XCJwcm9qZWN0XCJcbiAgICBjbGFzcz1cInJvdyBmaXRcIj5cbiAgICA8SW50ZXJ2aWV3c1NwcmVhZHNoZWV0XG4gICAgICA6cHJvamVjdD1cInByb2plY3RcIiAvPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gIC8vICBpbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgSW50ZXJ2aWV3c1NwcmVhZHNoZWV0IGZyb20gJ2NvbXBvbmVudHMvSW50ZXJ2aWV3c1NwcmVhZHNoZWV0LnZ1ZSdcblxuICBkZWZpbmVPcHRpb25zKHtcbiAgICAgIG5hbWU6ICdHZW5lcmljVmlzdWFsaXNhdGlvblBhZ2UnXG4gIH0pXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBwcm9qZWN0SWQ6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBwcm9qZWN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLnByb2plY3RJZCkge1xuICAgICAgICAgIHN0b3JlLmFjdGl2YXRlUHJvamVjdChwcm9wcy5wcm9qZWN0SWQpXG4gICAgICAgICAgY29uc3QgcCA9IHN0b3JlLmdldEZ1bGxQcm9qZWN0KHByb3BzLnByb2plY3RJZClcbiAgICAgICAgICByZXR1cm4gcFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICB9KVxuPC9zY3JpcHQ+XG48c3R5bGU+XG4uaW50ZXJ2aWV3cyB7XG4gICAgLS1tb21lbnQtbWF4aW11bS13aWR0aDogbm9uZTtcbiAgICAtLW1vbWVudC1taW5pbXVtLXdpZHRoOiAyMDBweDtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX25vcm1hbGl6ZUNsYXNzIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX2NyZWF0ZUJsb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RUUsVUFBTSxlQUFlLElBQUksWUFBWTtBQUNyQyxVQUFNLHdCQUF3QixJQUFJLEVBQUU7QUFFcEMsVUFBTSxlQUFlLElBQUksQ0FBQzs7Ozs7OztBQXhFaEIsTUFBQSxhQUFBLEVBQUEsT0FBTSxrQkFBQTs7QUFITCxTQUFBLE9BQUEsV0FBQUEsVUFBQSxHQUFYQyxtQkEyRE0sT0FBQSxZQUFBO0FBQUEsSUExREpDLFlBZ0NZLFVBQUEsRUFBQSxPQUFBLGNBaENLLEdBQUE7QUFBQSxNQUFhLFNBQUFDLFFBRTVCLE1BQXVEO0FBQUEs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
