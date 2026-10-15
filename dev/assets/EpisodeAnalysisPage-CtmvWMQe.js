import { Q as QPage } from "./QPage-eu-cdMDP.js";
import { M as defineComponent, N as useProjectStore, r as ref, b as computed, _ as _export_sfc, X as createElementBlock, R as openBlock, Y as createVNode, U as withCtx, aa as createBaseVNode, bk as QCheckbox, ae as normalizeClass, Z as Fragment, $ as renderList, Q as QBtn, a1 as createTextVNode, a2 as toDisplayString, P as createBlock, V as createCommentVNode } from "./index-zU2rftsz.js";
import { Q as QBtnToggle } from "./QBtnToggle-BQ0OrqgU.js";
import { a as QSlider } from "./QSlider-CQOqkv49.js";
import { Q as QSpace } from "./QSpace-CwPbzNKY.js";
import { Q as QToolbar } from "./QToolbar-D2bKnxrj.js";
import { G as GenericDiachronicCategoriesRepresentation, Q as QSplitter } from "./GenericDiachronicCategoriesRepresentation-xh0xEU57.js";
import { M as MomentShortRepresentation } from "./MomentShortRepresentation-CUZcKwdL.js";
import "./QBtnGroup-9WRAMA3X.js";
import "./format--PxEkPap.js";
import "./QTooltip-D57IcaGC.js";
import "./DropZone-DF7OQInd.js";
import "./QSelect-DZK1VTet.js";
import "./QItemLabel-C8XYyR7Z.js";
import "./ElementMenu-BtOgsUOR.js";
import "./QList-C32mUDlW.js";
import "./ClosePopup-B6cJeXPW.js";
import "./util-D0WanoNV.js";
import "./MomentNameInput-CXXf9N-b.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EpisodeAnalysis",
  props: {
    projectId: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const editViewMode = ref("horizontal");
    const genericDiachronicMode = ref("");
    const maximumDepth = ref(1);
    const splitByEpisode = ref(false);
    const props = __props;
    store.activateProject(props.projectId);
    const splitterModel = ref(20);
    const genericGraphs = computed(() => store.getGenericSynchronicGraphs(props.projectId));
    const episodes = computed(() => {
      if (splitByEpisode.value) {
        return store.getMomentsByPrefix(props.projectId, "%").map((moment) => ({
          id: moment.id,
          moment: store.getMoment(moment.id) || { name: "None", children: [] },
          interview: store.getInterviewByMoment(moment.id) || { label: "None" }
        }));
      } else {
        const rawRootMoments = store.getMomentsByProject(props.projectId).filter((moment) => !moment.parentId);
        return rawRootMoments.map((moment) => store.getMoment(moment.id)).filter((moment) => moment !== null).map((moment) => ({
          id: moment.id,
          moment,
          interview: store.getInterviewByMoment(moment.id) || { label: "None" }
        }));
      }
    });
    const __returned__ = { store, editViewMode, genericDiachronicMode, maximumDepth, splitByEpisode, props, splitterModel, genericGraphs, episodes, GenericDiachronicCategoriesRepresentation, MomentShortRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createVNode(QSplitter, {
      modelValue: $setup.splitterModel,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.splitterModel = $event),
      limits: [5, 50]
    }, {
      before: withCtx(() => [
        createVNode($setup["GenericDiachronicCategoriesRepresentation"], {
          title: "Generic Diachronic Categories",
          class: "generic-diachronic-categories",
          projectId: $props.projectId,
          currentInterviewId: ""
        }, null, 8, ["projectId"])
      ]),
      after: withCtx(() => [
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
            _cache[5] || (_cache[5] = createBaseVNode("span", { class: "q-px-md text-bold" }, "Mode", -1)),
            createVNode(QBtnToggle, {
              size: "xs",
              modelValue: $setup.genericDiachronicMode,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.genericDiachronicMode = $event),
              options: [
                { icon: "mdi-alpha-d-box-outline", value: "" },
                { icon: "mdi-alpha-d-box", value: "replace" }
              ]
            }, null, 8, ["modelValue"]),
            _cache[6] || (_cache[6] = createBaseVNode("span", { class: "q-px-md text-bold" }, "Depth :", -1)),
            createVNode(QSlider, {
              modelValue: $setup.maximumDepth,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.maximumDepth = $event),
              class: "col-4",
              snap: "",
              markers: "",
              "marker-labels": "",
              min: 0,
              max: 4,
              step: 1
            }, null, 8, ["modelValue"]),
            createVNode(QCheckbox, {
              modelValue: $setup.splitByEpisode,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.splitByEpisode = $event),
              "left-label": "",
              label: "Split by marked Episode"
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
                  createTextVNode(toDisplayString(episode.moment.name) + " (" + toDisplayString(episode.interview.label) + ") ", 1)
                ]),
                _: 2
              }, 1032, ["to"]),
              createBaseVNode("div", {
                class: normalizeClass(["episode-children", $setup.editViewMode])
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(episode.moment.children, (moment) => {
                  return openBlock(), createBlock($setup["MomentShortRepresentation"], {
                    key: moment.id,
                    genericGraphs: $setup.genericGraphs,
                    maximumDepth: $setup.maximumDepth,
                    momentId: moment.id,
                    genericDiachronicMode: $setup.genericDiachronicMode,
                    layout: $setup.editViewMode
                  }, null, 8, ["genericGraphs", "maximumDepth", "momentId", "genericDiachronicMode", "layout"]);
                }), 128))
              ], 2)
            ]);
          }), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
const EpisodeAnalysis = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-992a76c6"], ["__file", "EpisodeAnalysis.vue"]]);
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
    const props = __props;
    const store = useProjectStore();
    const project = computed(() => store.activateProject(props.projectId));
    const __returned__ = { props, store, project, EpisodeAnalysis };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { padding: "" }, {
    default: withCtx(() => [
      $setup.project ? (openBlock(), createBlock($setup["EpisodeAnalysis"], {
        key: 0,
        projectId: $props.projectId
      }, null, 8, ["projectId"])) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
const EpisodeAnalysisPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "EpisodeAnalysisPage.vue"]]);
export {
  EpisodeAnalysisPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXBpc29kZUFuYWx5c2lzUGFnZS1DdG12V01RZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRXBpc29kZUFuYWx5c2lzLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9FcGlzb2RlQW5hbHlzaXNQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHEtc3BsaXR0ZXJcbiAgICAgIHYtbW9kZWw9XCJzcGxpdHRlck1vZGVsXCJcbiAgICAgIDpsaW1pdHM9XCJbNSw1MF1cIj5cblxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpiZWZvcmU+XG4gICAgICAgIDxHZW5lcmljRGlhY2hyb25pY0NhdGVnb3JpZXNSZXByZXNlbnRhdGlvblxuICAgICAgICAgIHRpdGxlPVwiR2VuZXJpYyBEaWFjaHJvbmljIENhdGVnb3JpZXNcIlxuICAgICAgICAgIGNsYXNzPVwiZ2VuZXJpYy1kaWFjaHJvbmljLWNhdGVnb3JpZXNcIlxuICAgICAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0SWRcIlxuICAgICAgICAgIGN1cnJlbnRJbnRlcnZpZXdJZD1cIlwiPlxuICAgICAgICA8L0dlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcmllc1JlcHJlc2VudGF0aW9uPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDphZnRlcj5cbiAgICAgICAgPHEtdG9vbGJhciBjbGFzcz1cInJvdyB0b29sYmFyXCI+XG5cbiAgICAgICAgICA8cS1idG4tdG9nZ2xlXG4gICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImVkaXRWaWV3TW9kZVwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cIlsgeyBpY29uOiAnbWRpLXBhbi1ob3Jpem9udGFsJywgdmFsdWU6ICdob3Jpem9udGFsJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgaWNvbjogJ21kaS1wYW4tdmVydGljYWwnLCB2YWx1ZTogJ3ZlcnRpY2FsJyB9IF1cIj5cbiAgICAgICAgICA8L3EtYnRuLXRvZ2dsZT5cblxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicS1weC1tZCB0ZXh0LWJvbGRcIj5Nb2RlPC9zcGFuPlxuICAgICAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZ2VuZXJpY0RpYWNocm9uaWNNb2RlXCJcbiAgICAgICAgICAgIDpvcHRpb25zPVwiWyB7IGljb246ICdtZGktYWxwaGEtZC1ib3gtb3V0bGluZScsIHZhbHVlOiAnJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgaWNvbjogJ21kaS1hbHBoYS1kLWJveCcsIHZhbHVlOiAncmVwbGFjZScgfSBdXCI+XG4gICAgICAgICAgPC9xLWJ0bi10b2dnbGU+XG5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInEtcHgtbWQgdGV4dC1ib2xkXCI+RGVwdGgmbmJzcDs6PC9zcGFuPlxuICAgICAgICAgIDxxLXNsaWRlciB2LW1vZGVsPVwibWF4aW11bURlcHRoXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtNFwiXG4gICAgICAgICAgICAgICAgICAgIHNuYXBcbiAgICAgICAgICAgICAgICAgICAgbWFya2Vyc1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXItbGFiZWxzXG4gICAgICAgICAgICAgICAgICAgIDptaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgOm1heD1cIjRcIlxuICAgICAgICAgICAgICAgICAgICA6c3RlcD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgPC9xLXNsaWRlcj5cblxuICAgICAgICAgIDxxLWNoZWNrYm94IHYtbW9kZWw9XCJzcGxpdEJ5RXBpc29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdC1sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3BsaXQgYnkgbWFya2VkIEVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8cS1zcGFjZSAvPlxuXG4gICAgICAgIDwvcS10b29sYmFyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlcGlzb2Rlc1wiXG4gICAgICAgICAgICAgOmNsYXNzPVwiZWRpdFZpZXdNb2RlXCI+XG4gICAgICAgICAgPGRpdiB2LWZvcj1cImVwaXNvZGUgaW4gZXBpc29kZXNcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJlcGlzb2RlXCJcbiAgICAgICAgICAgICAgIDprZXk9XCJlcGlzb2RlLmlkXCI+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICA6dG89XCJ7IG5hbWU6ICdwcm9qZWN0JywgcXVlcnk6IHsgdGFiOiBlcGlzb2RlLmludGVydmlldy5sYWJlbCB9IH1cIlxuICAgICAgICAgICAgICBuby1jYXBzPlxuICAgICAgICAgICAgICB7eyBlcGlzb2RlLm1vbWVudC5uYW1lIH19ICh7eyBlcGlzb2RlLmludGVydmlldy5sYWJlbCB9fSlcbiAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXBpc29kZS1jaGlsZHJlblwiXG4gICAgICAgICAgICAgICAgIDpjbGFzcz1cImVkaXRWaWV3TW9kZVwiPlxuICAgICAgICAgICAgICA8TW9tZW50U2hvcnRSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgIHYtZm9yPVwibW9tZW50IGluIGVwaXNvZGUubW9tZW50LmNoaWxkcmVuXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwibW9tZW50LmlkXCJcbiAgICAgICAgICAgICAgICA6Z2VuZXJpY0dyYXBocz1cImdlbmVyaWNHcmFwaHNcIlxuICAgICAgICAgICAgICAgIDptYXhpbXVtRGVwdGg9XCJtYXhpbXVtRGVwdGhcIlxuICAgICAgICAgICAgICAgIDptb21lbnRJZD1cIm1vbWVudC5pZFwiXG4gICAgICAgICAgICAgICAgOmdlbmVyaWNEaWFjaHJvbmljTW9kZT1cImdlbmVyaWNEaWFjaHJvbmljTW9kZVwiXG4gICAgICAgICAgICAgICAgOmxheW91dD1cImVkaXRWaWV3TW9kZVwiPlxuICAgICAgICAgICAgICA8L01vbWVudFNob3J0UmVwcmVzZW50YXRpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS1zcGxpdHRlcj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG4gIGltcG9ydCBHZW5lcmljRGlhY2hyb25pY0NhdGVnb3JpZXNSZXByZXNlbnRhdGlvbiBmcm9tICdjb21wb25lbnRzL0dlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcmllc1JlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IE1vbWVudFNob3J0UmVwcmVzZW50YXRpb24gZnJvbSAnLi9Nb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgZWRpdFZpZXdNb2RlID0gcmVmKCdob3Jpem9udGFsJylcblxuICBjb25zdCBnZW5lcmljRGlhY2hyb25pY01vZGUgPSByZWYoJycpXG5cbiAgY29uc3QgbWF4aW11bURlcHRoID0gcmVmKDEpXG5cbiAgY29uc3Qgc3BsaXRCeUVwaXNvZGUgPSByZWYoZmFsc2UpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZ1xuICB9PigpXG5cbiAgc3RvcmUuYWN0aXZhdGVQcm9qZWN0KHByb3BzLnByb2plY3RJZClcblxuICBjb25zdCBzcGxpdHRlck1vZGVsID0gcmVmKDIwKVxuXG4gIGNvbnN0IGdlbmVyaWNHcmFwaHMgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5nZXRHZW5lcmljU3luY2hyb25pY0dyYXBocyhwcm9wcy5wcm9qZWN0SWQpKVxuXG4gIC8vIGdldE1vbWVudHNCeVByZWZpeCByZXR1cm5zIHJhdyBNb21lbnRzIHdpdGggbm8gY2hpbGRyZW5cbiAgLy8gaW5mb3JtYXRpb24uIFdlIGZldGNoIGNoaWxkcmVuIGluZm8gdGhyb3VnaCB0aGUgZ2V0TW9tZW50IG1hcCBhbmRcbiAgLy8gdGhlIGRlZmF1bHQgdmFsdWUgaXMganVzdCBoZXJlIHRvIHBsZWFzZSBUU0MgY2hlY2tlclxuICBjb25zdCBlcGlzb2RlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChzcGxpdEJ5RXBpc29kZS52YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBzdG9yZS5nZXRNb21lbnRzQnlQcmVmaXgocHJvcHMucHJvamVjdElkLCAnJScpXG4gICAgICAgICAgICAgIC5tYXAobW9tZW50ID0+ICh7XG4gICAgICAgICAgICAgICAgICBpZDogbW9tZW50LmlkLFxuICAgICAgICAgICAgICAgICAgbW9tZW50OiBzdG9yZS5nZXRNb21lbnQobW9tZW50LmlkKSB8fCB7IG5hbWU6IFwiTm9uZVwiLCBjaGlsZHJlbjogW10gfSxcbiAgICAgICAgICAgICAgICAgIGludGVydmlldzogc3RvcmUuZ2V0SW50ZXJ2aWV3QnlNb21lbnQobW9tZW50LmlkKSB8fCB7IGxhYmVsOiBcIk5vbmVcIiB9XG4gICAgICAgICAgICAgIH0pKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBSZXR1cm4gcm9vdCBtb21lbnRzXG4gICAgICAgICAgY29uc3QgcmF3Um9vdE1vbWVudHMgPSBzdG9yZS5nZXRNb21lbnRzQnlQcm9qZWN0KHByb3BzLnByb2plY3RJZCkuZmlsdGVyKG1vbWVudCA9PiAhbW9tZW50LnBhcmVudElkKVxuXG4gICAgICAgICAgcmV0dXJuIHJhd1Jvb3RNb21lbnRzXG4gICAgICAgICAgLy8gRmV0Y2ggZnVsbCByb290IG1vbWVudCAod2l0aCBjaGlsZHJlbilcbiAgICAgICAgICAgICAgLm1hcChtb21lbnQgPT4gc3RvcmUuZ2V0TW9tZW50KG1vbWVudC5pZCkpXG4gICAgICAgICAgICAgIC5maWx0ZXIobW9tZW50ID0+IG1vbWVudCAhPT0gbnVsbClcbiAgICAgICAgICAgICAgLm1hcChtb21lbnQgPT4gKHtcbiAgICAgICAgICAgICAgICAgIGlkOiBtb21lbnQuaWQsXG4gICAgICAgICAgICAgICAgICBtb21lbnQ6IG1vbWVudCxcbiAgICAgICAgICAgICAgICAgIGludGVydmlldzogc3RvcmUuZ2V0SW50ZXJ2aWV3QnlNb21lbnQobW9tZW50LmlkKSB8fCB7IGxhYmVsOiBcIk5vbmVcIiB9XG4gICAgICAgICAgICAgIH0pKVxuICAgICAgfVxuICB9KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ob3Jpem9udGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi52ZXJ0aWNhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXBpc29kZXMudmVydGljYWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5lcGlzb2Rlcy5ob3Jpem9udGFsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBwYWRkaW5nPlxuICAgIDxFcGlzb2RlQW5hbHlzaXNcbiAgICAgIHYtaWY9XCJwcm9qZWN0XCJcbiAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0SWRcIiAvPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIGltcG9ydCBFcGlzb2RlQW5hbHlzaXMgZnJvbSAnY29tcG9uZW50cy9FcGlzb2RlQW5hbHlzaXMudnVlJ1xuXG4gIGRlZmluZU9wdGlvbnMoe1xuICAgICAgbmFtZTogJ0VwaXNvZGVBbmFseXNpc1BhZ2UnXG4gIH0pXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZ1xuICB9PigpXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcbiAgY29uc3QgcHJvamVjdCA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmFjdGl2YXRlUHJvamVjdChwcm9wcy5wcm9qZWN0SWQpKVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5lcGlzb2RlcyB7XG4gICAgLS1tb21lbnQtbWF4aW11bS13aWR0aDogbm9uZTtcbiAgICAtLW1vbWVudC1taW5pbXVtLXdpZHRoOiAyMDBweDtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0RkUsVUFBTSxRQUFRLGdCQUFBO0FBRWQsVUFBTSxlQUFlLElBQUksWUFBWTtBQUVyQyxVQUFNLHdCQUF3QixJQUFJLEVBQUU7QUFFcEMsVUFBTSxlQUFlLElBQUksQ0FBQztBQUUxQixVQUFNLGlCQUFpQixJQUFJLEtBQUs7QUFFaEMsVUFBTSxRQUFRO0FBSWQsVUFBTSxnQkFBZ0IsTUFB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
