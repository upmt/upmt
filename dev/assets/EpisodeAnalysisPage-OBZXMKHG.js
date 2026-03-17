import { Q as QPage } from "./QPage-DqT9wM0J.js";
import { Q as QBtnToggle } from "./QBtnToggle-rDgfktvc.js";
import { Q as QSlider } from "./ColorizeIcon-COHUDiWw.js";
import { Q as QSpace } from "./QSpace-MHJMX0iK.js";
import { Q as QToolbar } from "./QToolbar-CyhqXLd-.js";
import { I as defineComponent, J as useProjectStore, r as ref, e as computed, _ as _export_sfc, R as createElementBlock, M as openBlock, $ as createVNode, Z as createBaseVNode, N as withCtx, a4 as Fragment, a5 as renderList, a7 as normalizeClass, a3 as createTextVNode, a6 as toDisplayString, Q as QBtn, L as createBlock } from "./index-BO5Be59b.js";
import { M as MomentShortRepresentation } from "./MomentShortRepresentation-BeO446Ns.js";
import "./QBtnGroup-DaK3XEVt.js";
import "./NoteIcon-DqAfl5ZO.js";
import "./format-eTA6GB0s.js";
import "./QTooltip-BpBV1EQa.js";
import "./QSelect-P5AJF7vq.js";
import "./QItemLabel-BxxLJxiw.js";
import "./MomentNameInput-D-FZ7C6o.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EpisodeAnalysis",
  props: {
    projectId: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const editViewMode = ref("horizontal");
    const maximumDepth = ref(1);
    const props = __props;
    store.activateProject(props.projectId);
    const episodes = computed(() => store.getMomentsByPrefix(props.projectId, "%").map((moment) => ({
      id: moment.id,
      moment: store.getMoment(moment.id) || { name: "None", children: [] },
      interview: store.getInterviewByMoment(moment.id) || { label: "None" }
    })));
    const __returned__ = { store, editViewMode, maximumDepth, props, episodes, MomentShortRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createVNode(QToolbar, { class: "row toolbar" }, {
      default: withCtx(() => [
        createVNode(QBtnToggle, {
          size: "xs",
          modelValue: $setup.editViewMode,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.editViewMode = $event),
          options: [
            { icon: "mdi-pan-horizontal", value: "horizontal" },
            { icon: "mdi-pan-vertical", value: "vertical" }
          ]
        }, null, 8, ["modelValue"]),
        _cache[2] || (_cache[2] = createBaseVNode("span", { class: "q-px-md text-bold" }, "Profondeur :", -1)),
        createVNode(QSlider, {
          modelValue: $setup.maximumDepth,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.maximumDepth = $event),
          class: "col-4",
          snap: "",
          markers: "",
          "marker-labels": "",
          min: 0,
          max: 4,
          step: 1
        }, null, 8, ["modelValue"]),
        createVNode(QSpace)
      ]),
      _: 1
    }),
    createBaseVNode("div", {
      class: normalizeClass(["episodes", $setup.editViewMode])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.episodes, (episode) => {
        return openBlock(), createElementBlock("div", {
          class: "episode",
          key: episode.id
        }, [
          createVNode(QBtn, {
            dense: "",
            flat: "",
            to: { name: "project", query: { tab: episode.interview.label } },
            "no-caps": ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(episode.moment.name), 1)
            ]),
            _: 2
          }, 1032, ["to"]),
          createBaseVNode("div", {
            class: normalizeClass(["episode-children", $setup.editViewMode])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(episode.moment.children, (moment) => {
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
  ]);
}
const EpisodeAnalysis = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-6bcc08a0"], ["__file", "EpisodeAnalysis.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "EpisodeAnalysisPage"
  },
  __name: "EpisodeAnalysisPage",
  props: {
    projectId: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { EpisodeAnalysis };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { padding: "" }, {
    default: withCtx(() => [
      createVNode($setup["EpisodeAnalysis"], { projectId: $props.projectId }, null, 8, ["projectId"])
    ]),
    _: 1
  });
}
const EpisodeAnalysisPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "EpisodeAnalysisPage.vue"]]);
export {
  EpisodeAnalysisPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXBpc29kZUFuYWx5c2lzUGFnZS1PQlpYTUtIRy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRXBpc29kZUFuYWx5c2lzLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9FcGlzb2RlQW5hbHlzaXNQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHEtdG9vbGJhciBjbGFzcz1cInJvdyB0b29sYmFyXCI+XG5cbiAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgdi1tb2RlbD1cImVkaXRWaWV3TW9kZVwiXG4gICAgICAgIDpvcHRpb25zPVwiWyB7IGljb246ICdtZGktcGFuLWhvcml6b250YWwnLCB2YWx1ZTogJ2hvcml6b250YWwnIH0sXG4gICAgICAgICAgICAgICAgICB7IGljb246ICdtZGktcGFuLXZlcnRpY2FsJywgdmFsdWU6ICd2ZXJ0aWNhbCcgfSBdXCI+XG4gICAgICA8L3EtYnRuLXRvZ2dsZT5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJxLXB4LW1kIHRleHQtYm9sZFwiPlByb2ZvbmRldXImbmJzcDs6PC9zcGFuPlxuICAgICAgPHEtc2xpZGVyIHYtbW9kZWw9XCJtYXhpbXVtRGVwdGhcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sLTRcIlxuICAgICAgICAgICAgICAgIHNuYXBcbiAgICAgICAgICAgICAgICBtYXJrZXJzXG4gICAgICAgICAgICAgICAgbWFya2VyLWxhYmVsc1xuICAgICAgICAgICAgICAgIDptaW49XCIwXCJcbiAgICAgICAgICAgICAgICA6bWF4PVwiNFwiXG4gICAgICAgICAgICAgICAgOnN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICA8L3Etc2xpZGVyPlxuXG4gICAgICA8cS1zcGFjZSAvPlxuXG4gICAgPC9xLXRvb2xiYXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZXBpc29kZXNcIlxuICAgICAgICAgOmNsYXNzPVwiZWRpdFZpZXdNb2RlXCI+XG4gICAgICA8ZGl2IHYtZm9yPVwiZXBpc29kZSBpbiBlcGlzb2Rlc1wiXG4gICAgICAgICAgIGNsYXNzPVwiZXBpc29kZVwiXG4gICAgICAgICAgIDprZXk9XCJlcGlzb2RlLmlkXCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIDp0bz1cInsgbmFtZTogJ3Byb2plY3QnLCBxdWVyeTogeyB0YWI6IGVwaXNvZGUuaW50ZXJ2aWV3LmxhYmVsIH0gfVwiXG4gICAgICAgICAgbm8tY2Fwcz57eyBlcGlzb2RlLm1vbWVudC5uYW1lIH19XG4gICAgICAgIDwvcS1idG4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlcGlzb2RlLWNoaWxkcmVuXCJcbiAgICAgICAgICAgICA6Y2xhc3M9XCJlZGl0Vmlld01vZGVcIj5cbiAgICAgICAgICA8TW9tZW50U2hvcnRSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgdi1mb3I9XCJtb21lbnQgaW4gZXBpc29kZS5tb21lbnQuY2hpbGRyZW5cIlxuICAgICAgICAgICAgOmtleT1cIm1vbWVudC5pZFwiXG4gICAgICAgICAgICA6bWF4aW11bURlcHRoPVwibWF4aW11bURlcHRoXCJcbiAgICAgICAgICAgIDptb21lbnRJZD1cIm1vbWVudC5pZFwiXG4gICAgICAgICAgICA6bGF5b3V0PVwiZWRpdFZpZXdNb2RlXCI+XG4gICAgICAgICAgPC9Nb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IE1vbWVudFNob3J0UmVwcmVzZW50YXRpb24gZnJvbSAnLi9Nb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgZWRpdFZpZXdNb2RlID0gcmVmKCdob3Jpem9udGFsJylcblxuICBjb25zdCBtYXhpbXVtRGVwdGggPSByZWYoMSlcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgICAgIHByb2plY3RJZDogc3RyaW5nXG4gIH0+KClcblxuICBzdG9yZS5hY3RpdmF0ZVByb2plY3QocHJvcHMucHJvamVjdElkKVxuXG4gIC8vIGdldE1vbWVudHNCeVByZWZpeCByZXR1cm5zIHJhdyBNb21lbnRzIHdpdGggbm8gY2hpbGRyZW5cbiAgLy8gaW5mb3JtYXRpb24uIFdlIGZldGNoIGNoaWxkcmVuIGluZm8gdGhyb3VnaCB0aGUgZ2V0TW9tZW50IG1hcCBhbmRcbiAgLy8gdGhlIGRlZmF1bHQgdmFsdWUgaXMganVzdCBoZXJlIHRvIHBsZWFzZSBUU0MgY2hlY2tlclxuICBjb25zdCBlcGlzb2RlcyA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldE1vbWVudHNCeVByZWZpeChwcm9wcy5wcm9qZWN0SWQsICclJylcbiAgICAgIC5tYXAobW9tZW50ID0+ICh7XG4gICAgICAgICAgaWQ6IG1vbWVudC5pZCxcbiAgICAgICAgICBtb21lbnQ6IHN0b3JlLmdldE1vbWVudChtb21lbnQuaWQpIHx8IHsgbmFtZTogXCJOb25lXCIsIGNoaWxkcmVuOiBbXSB9LFxuICAgICAgICAgIGludGVydmlldzogc3RvcmUuZ2V0SW50ZXJ2aWV3QnlNb21lbnQobW9tZW50LmlkKSB8fCB7IGxhYmVsOiBcIk5vbmVcIiB9XG4gICAgICB9KSkpXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmVwaXNvZGVzIHtcbiAgICAtLW1vbWVudC1tYXhpbXVtLXdpZHRoOiAyMDBweDtcbiAgICAtLW1vbWVudC1taW5pbXVtLXdpZHRoOiAyMDBweDtcbn1cbi5ob3Jpem9udGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi52ZXJ0aWNhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXBpc29kZXMudmVydGljYWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5lcGlzb2Rlcy5ob3Jpem9udGFsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBwYWRkaW5nPlxuICAgIDxFcGlzb2RlQW5hbHlzaXNcbiAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0SWRcIiAvPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG4gIGltcG9ydCBFcGlzb2RlQW5hbHlzaXMgZnJvbSAnY29tcG9uZW50cy9FcGlzb2RlQW5hbHlzaXMudnVlJ1xuXG4gIGRlZmluZU9wdGlvbnMoe1xuICAgICAgbmFtZTogJ0VwaXNvZGVBbmFseXNpc1BhZ2UnXG4gIH0pXG5cbiAgZGVmaW5lUHJvcHM8e1xuICAgICAgcHJvamVjdElkOiBzdHJpbmdcbiAgfT4oKVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUJsb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREUsVUFBTSxRQUFRLGdCQUFBO0FBRWQsVUFBTSxlQUFlLElBQUksWUFBWTtBQUVyQyxVQUFNLGVBQWUsSUFBSSxDQUFDO0FBRTFCLFVBQU0sUUFBUTtBQUlkLFVBQU0sZ0JBQWdCLE1BQU0sU0FBUztBQUtyQyxVQUFNLFdBQVcsU0FBUyxNQUFNLE1BQU0sbUJBQW1CLE1BQU0sV0FBVyxHQUFHLEVBQ3hFLElBQUksQ0FBQSxZQUFXO0FBQUEsTUFDWixJQUFJLE9BQU87QUFBQSxNQUNYLFFBQVEsTUFBTSxVQUFVLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLFVBQVUsR0FBQztBQUFBLE1BQ2pFLFdBQVcsTUFBTSxxQkFBcUIsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLE9BQUE7QUFBQSxJQUFPLEVBQ3RFLENBQUM7Ozs7Ozs7c0JBOUVQQSxtQkFpRE0sT0FBQSxNQUFBO0FBQUEsSUFoREpDLFlBdUJZLFVBQUEsRUFBQSxPQUFBLGNBdkJLLEdBQUE7QUFBQSxNQUFhLFNBQUFDLFFBRTVCLE1BS2U7QUFBQSxRQUxmRCxZQUtlLFlBQUE7QUFBQSxVQUpiLE1BQUs7QUFBQSxVQUFBLFlBQ0ksT0FBQTtBQUFBLFVBQUEsdUJBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLE9BQUEsZUFBWTtBQUFBLFVBQ3BCLFNBQVM7QUFBQSxZQUFBLEVBQUEsTUFBQSxzQkFBQSxPQUFBLGFBQUE7QUFBQSxZQUFBLEVBQUEsTUFBQSxvQkFBQSxPQUFBLFdBQUE7QUFBQTs7UUFJWixPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQUUsZ0JBQXdELFFBQUEsRUFBbEQsT0FBTSxvQkFBQSxHQUFvQixnQkFBaUIsRUFBQTtBQUFBLFFBQ2pERixZQVNXLFNBQUE7QUFBQSxVQUFBLFlBVFEsT0FBQTtBQUFBLFVBQUEsdUJBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLE9BQUEsZUFBWTtBQUFBLFVBQ3JCLE9BQU07QUFBQSxVQUNOLE1BQUE7QUFBQSxVQUNBLFNBQUE7QUFBQSxVQUNBLGlCQUFBO0FBQUEsVUFDQyxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFFBSWpCQSxZQUFXLE1BQUE7QUFBQSxNQUFBLENBQUE7QUFBQTs7SUFJYkUsZ0JBc0JNLE9BQUE7QUFBQSxNQXRCRCxPQUFLQyxlQUFBLENBQUMsWUFDRSxPQUFBLFlBQVksQ0FBQTtBQUFBLElBQUEsR0FBQTtBQUFBLHdCQUN2QkosbUJBbUJNSyxVQUFBLE1BQUFDLFdBbkJpQixPQUFBLFVBQVEsQ0FBbkIsWUFBTzs0QkFBbkJOLG1CQW1CTSxPQUFBO0FBQUEsVUFsQkQsT0FBTTtBQUFBLFVBQ0wsS0FBSyxRQUFRO0FBQUEsUUFBQSxHQUFBO0FBQUEsVUFDakJDLFlBS1EsTUFBQTtBQUFBLFlBSk4sT0FBQTtBQUFBLFlBQ0EsTUFBQTtBQUFBLFlBQ0MsSUFBRSxFQUFBLE1BQUEsV0FBQSxPQUFBLEVBQUEsS0FBbUMsUUFBUSxVQUFVLFFBQUs7QUFBQSxZQUM3RCxXQUFBO0FBQUEsVUFBQSxHQUFBO0FBQUEsNkJBQVEsTUFBeUI7QUFBQSxjQUFBTSxnQkFBQUMsZ0JBQXRCLFFBQVEsT0FBTyxJQUFJLEdBQUEsQ0FBQTtBQUFBLFlBQUEsQ0FBQTtBQUFBOztVQUVoQ0wsZ0JBU00sT0FBQTtBQUFBLFlBVEQsT0FBS0MsZUFBQSxDQUFDLG9CQUNFLE9BQUEsWUFBWSxDQUFBO0FBQUEsVUFBQSxHQUFBO0FBQUEsYUFDdkJLLFVBQUEsSUFBQSxHQUFBVCxtQkFNNEJLLFVBQUEsTUFBQUMsV0FMVCxRQUFRLE9BQU8sVUFBUSxDQUFqQyxXQUFNO2tDQURmSSxZQU00QixPQUFBLDJCQUFBLEdBQUE7QUFBQSxnQkFKekIsS0FBSyxPQUFPO0FBQUEsZ0JBQ1osY0FBYyxPQUFBO0FBQUEsZ0JBQ2QsVUFBVSxPQUFPO0FBQUEsZ0JBQ2pCLFFBQVEsT0FBQTtBQUFBLGNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxnQkFBQSxZQUFBLFFBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q25CLFNBQUFELFVBQUEsR0FBQUMsWUFHUyx3QkFIRDtBQUFBLElBQU8sU0FBQVIsUUFDYixNQUMyQjtBQUFBLE1BRDNCRCxZQUMyQixPQUFBLGlCQUFBLEdBQUEsRUFBeEIsV0FBVyxPQUFBLGFBQVMsTUFBQSxHQUFBLENBQUEsV0FBQSxDQUFBO0FBQUEsSUFBQSxDQUFBO0FBQUE7Ozs7In0=
