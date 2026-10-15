import { Q as QPage } from "./QPage-Dvb0knAO.js";
import { H as defineComponent, I as useProjectStore, r as ref, b as computed, _ as _export_sfc, P as createElementBlock, L as openBlock, R as createVNode, a9 as createBaseVNode, M as withCtx, bj as QCheckbox, S as Fragment, U as renderList, ad as normalizeClass, W as createTextVNode, X as toDisplayString, Q as QBtn, K as createBlock, N as createCommentVNode } from "./index-DiKymsRm.js";
import { Q as QBtnToggle } from "./QBtnToggle-DXqgAIUo.js";
import { a as QSlider } from "./QSlider-YsL2BiUw.js";
import { Q as QSpace } from "./QSpace-vJ6Mt5uh.js";
import { Q as QToolbar } from "./QToolbar-7gHL07eP.js";
import { M as MomentShortRepresentation } from "./MomentShortRepresentation-4aKuH93c.js";
import "./QBtnGroup-C6TAFF9z.js";
import "./format-BV-GOeKr.js";
import "./QTooltip-dJ9FZr63.js";
import "./DropZone-Bk9Riejp.js";
import "./QSelect-DtMrAgnD.js";
import "./QItemLabel-WuWNsHIr.js";
import "./MomentNameInput-D0T21-5z.js";
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
    const __returned__ = { store, editViewMode, genericDiachronicMode, maximumDepth, splitByEpisode, props, episodes, MomentShortRepresentation };
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
        _cache[4] || (_cache[4] = createBaseVNode("span", { class: "q-px-md text-bold" }, "Mode", -1)),
        createVNode(QBtnToggle, {
          size: "xs",
          modelValue: $setup.genericDiachronicMode,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.genericDiachronicMode = $event),
          options: [
            { icon: "mdi-alpha-d-box-outline", value: "" },
            { icon: "mdi-alpha-d-box", value: "replace" }
          ]
        }, null, 8, ["modelValue"]),
        _cache[5] || (_cache[5] = createBaseVNode("span", { class: "q-px-md text-bold" }, "Depth :", -1)),
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
  ]);
}
const EpisodeAnalysis = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-fe4b93a9"], ["__file", "EpisodeAnalysis.vue"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXBpc29kZUFuYWx5c2lzUGFnZS1jSmlOQWdnaS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRXBpc29kZUFuYWx5c2lzLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9FcGlzb2RlQW5hbHlzaXNQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHEtdG9vbGJhciBjbGFzcz1cInJvdyB0b29sYmFyXCI+XG5cbiAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgdi1tb2RlbD1cImVkaXRWaWV3TW9kZVwiXG4gICAgICAgIDpvcHRpb25zPVwiWyB7IGljb246ICdtZGktcGFuLWhvcml6b250YWwnLCB2YWx1ZTogJ2hvcml6b250YWwnIH0sXG4gICAgICAgICAgICAgICAgICB7IGljb246ICdtZGktcGFuLXZlcnRpY2FsJywgdmFsdWU6ICd2ZXJ0aWNhbCcgfSBdXCI+XG4gICAgICA8L3EtYnRuLXRvZ2dsZT5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJxLXB4LW1kIHRleHQtYm9sZFwiPk1vZGU8L3NwYW4+XG4gICAgICA8cS1idG4tdG9nZ2xlXG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIHYtbW9kZWw9XCJnZW5lcmljRGlhY2hyb25pY01vZGVcIlxuICAgICAgICA6b3B0aW9ucz1cIlsgeyBpY29uOiAnbWRpLWFscGhhLWQtYm94LW91dGxpbmUnLCB2YWx1ZTogJycgfSxcbiAgICAgICAgICAgICAgICAgIHsgaWNvbjogJ21kaS1hbHBoYS1kLWJveCcsIHZhbHVlOiAncmVwbGFjZScgfSBdXCI+XG4gICAgICA8L3EtYnRuLXRvZ2dsZT5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJxLXB4LW1kIHRleHQtYm9sZFwiPkRlcHRoJm5ic3A7Ojwvc3Bhbj5cbiAgICAgIDxxLXNsaWRlciB2LW1vZGVsPVwibWF4aW11bURlcHRoXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC00XCJcbiAgICAgICAgICAgICAgICBzbmFwXG4gICAgICAgICAgICAgICAgbWFya2Vyc1xuICAgICAgICAgICAgICAgIG1hcmtlci1sYWJlbHNcbiAgICAgICAgICAgICAgICA6bWluPVwiMFwiXG4gICAgICAgICAgICAgICAgOm1heD1cIjRcIlxuICAgICAgICAgICAgICAgIDpzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgPC9xLXNsaWRlcj5cblxuICAgICAgPHEtY2hlY2tib3ggdi1tb2RlbD1cInNwbGl0QnlFcGlzb2RlXCJcbiAgICAgICAgICAgICAgICAgIGxlZnQtbGFiZWxcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3BsaXQgYnkgbWFya2VkIEVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgPHEtc3BhY2UgLz5cblxuICAgIDwvcS10b29sYmFyPlxuXG4gICAgPGRpdiBjbGFzcz1cImVwaXNvZGVzXCJcbiAgICAgICAgIDpjbGFzcz1cImVkaXRWaWV3TW9kZVwiPlxuICAgICAgPGRpdiB2LWZvcj1cImVwaXNvZGUgaW4gZXBpc29kZXNcIlxuICAgICAgICAgICBjbGFzcz1cImVwaXNvZGVcIlxuICAgICAgICAgICA6a2V5PVwiZXBpc29kZS5pZFwiPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICA6dG89XCJ7IG5hbWU6ICdwcm9qZWN0JywgcXVlcnk6IHsgdGFiOiBlcGlzb2RlLmludGVydmlldy5sYWJlbCB9IH1cIlxuICAgICAgICAgIG5vLWNhcHM+XG4gICAgICAgICAge3sgZXBpc29kZS5tb21lbnQubmFtZSB9fSAoe3sgZXBpc29kZS5pbnRlcnZpZXcubGFiZWwgfX0pXG4gICAgICAgIDwvcS1idG4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlcGlzb2RlLWNoaWxkcmVuXCJcbiAgICAgICAgICAgICA6Y2xhc3M9XCJlZGl0Vmlld01vZGVcIj5cbiAgICAgICAgICA8TW9tZW50U2hvcnRSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgdi1mb3I9XCJtb21lbnQgaW4gZXBpc29kZS5tb21lbnQuY2hpbGRyZW5cIlxuICAgICAgICAgICAgOmtleT1cIm1vbWVudC5pZFwiXG4gICAgICAgICAgICA6bWF4aW11bURlcHRoPVwibWF4aW11bURlcHRoXCJcbiAgICAgICAgICAgIDptb21lbnRJZD1cIm1vbWVudC5pZFwiXG4gICAgICAgICAgICA6Z2VuZXJpY0RpYWNocm9uaWNNb2RlPVwiZ2VuZXJpY0RpYWNocm9uaWNNb2RlXCJcbiAgICAgICAgICAgIDpsYXlvdXQ9XCJlZGl0Vmlld01vZGVcIj5cbiAgICAgICAgICA8L01vbWVudFNob3J0UmVwcmVzZW50YXRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbiBmcm9tICcuL01vbWVudFNob3J0UmVwcmVzZW50YXRpb24udnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBlZGl0Vmlld01vZGUgPSByZWYoJ2hvcml6b250YWwnKVxuXG4gIGNvbnN0IGdlbmVyaWNEaWFjaHJvbmljTW9kZSA9IHJlZignJylcblxuICBjb25zdCBtYXhpbXVtRGVwdGggPSByZWYoMSlcblxuICBjb25zdCBzcGxpdEJ5RXBpc29kZSA9IHJlZihmYWxzZSlcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgICAgIHByb2plY3RJZDogc3RyaW5nXG4gIH0+KClcblxuICBzdG9yZS5hY3RpdmF0ZVByb2plY3QocHJvcHMucHJvamVjdElkKVxuXG4gIC8vIGdldE1vbWVudHNCeVByZWZpeCByZXR1cm5zIHJhdyBNb21lbnRzIHdpdGggbm8gY2hpbGRyZW5cbiAgLy8gaW5mb3JtYXRpb24uIFdlIGZldGNoIGNoaWxkcmVuIGluZm8gdGhyb3VnaCB0aGUgZ2V0TW9tZW50IG1hcCBhbmRcbiAgLy8gdGhlIGRlZmF1bHQgdmFsdWUgaXMganVzdCBoZXJlIHRvIHBsZWFzZSBUU0MgY2hlY2tlclxuICBjb25zdCBlcGlzb2RlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChzcGxpdEJ5RXBpc29kZS52YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBzdG9yZS5nZXRNb21lbnRzQnlQcmVmaXgocHJvcHMucHJvamVjdElkLCAnJScpXG4gICAgICAgICAgICAgIC5tYXAobW9tZW50ID0+ICh7XG4gICAgICAgICAgICAgICAgICBpZDogbW9tZW50LmlkLFxuICAgICAgICAgICAgICAgICAgbW9tZW50OiBzdG9yZS5nZXRNb21lbnQobW9tZW50LmlkKSB8fCB7IG5hbWU6IFwiTm9uZVwiLCBjaGlsZHJlbjogW10gfSxcbiAgICAgICAgICAgICAgICAgIGludGVydmlldzogc3RvcmUuZ2V0SW50ZXJ2aWV3QnlNb21lbnQobW9tZW50LmlkKSB8fCB7IGxhYmVsOiBcIk5vbmVcIiB9XG4gICAgICAgICAgICAgIH0pKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBSZXR1cm4gcm9vdCBtb21lbnRzXG4gICAgICAgICAgY29uc3QgcmF3Um9vdE1vbWVudHMgPSBzdG9yZS5nZXRNb21lbnRzQnlQcm9qZWN0KHByb3BzLnByb2plY3RJZCkuZmlsdGVyKG1vbWVudCA9PiAhbW9tZW50LnBhcmVudElkKVxuXG4gICAgICAgICAgcmV0dXJuIHJhd1Jvb3RNb21lbnRzXG4gICAgICAgICAgLy8gRmV0Y2ggZnVsbCByb290IG1vbWVudCAod2l0aCBjaGlsZHJlbilcbiAgICAgICAgICAgICAgLm1hcChtb21lbnQgPT4gc3RvcmUuZ2V0TW9tZW50KG1vbWVudC5pZCkpXG4gICAgICAgICAgICAgIC5maWx0ZXIobW9tZW50ID0+IG1vbWVudCAhPT0gbnVsbClcbiAgICAgICAgICAgICAgLm1hcChtb21lbnQgPT4gKHtcbiAgICAgICAgICAgICAgICAgIGlkOiBtb21lbnQuaWQsXG4gICAgICAgICAgICAgICAgICBtb21lbnQ6IG1vbWVudCxcbiAgICAgICAgICAgICAgICAgIGludGVydmlldzogc3RvcmUuZ2V0SW50ZXJ2aWV3QnlNb21lbnQobW9tZW50LmlkKSB8fCB7IGxhYmVsOiBcIk5vbmVcIiB9XG4gICAgICAgICAgICAgIH0pKVxuICAgICAgfVxuICB9KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ob3Jpem9udGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi52ZXJ0aWNhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXBpc29kZXMudmVydGljYWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5lcGlzb2Rlcy5ob3Jpem9udGFsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBwYWRkaW5nPlxuICAgIDxFcGlzb2RlQW5hbHlzaXNcbiAgICAgIHYtaWY9XCJwcm9qZWN0XCJcbiAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0SWRcIiAvPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIGltcG9ydCBFcGlzb2RlQW5hbHlzaXMgZnJvbSAnY29tcG9uZW50cy9FcGlzb2RlQW5hbHlzaXMudnVlJ1xuXG4gIGRlZmluZU9wdGlvbnMoe1xuICAgICAgbmFtZTogJ0VwaXNvZGVBbmFseXNpc1BhZ2UnXG4gIH0pXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZ1xuICB9PigpXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcbiAgY29uc3QgcHJvamVjdCA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmFjdGl2YXRlUHJvamVjdChwcm9wcy5wcm9qZWN0SWQpKVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5lcGlzb2RlcyB7XG4gICAgLS1tb21lbnQtbWF4aW11bS13aWR0aDogbm9uZTtcbiAgICAtLW1vbWVudC1taW5pbXVtLXdpZHRoOiAyMDBweDtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEVFLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sZUFBZSxJQUFJLFlBQVk7QUFFckMsVUFBTSx3QkFBd0IsSUFBSSxFQUFFO0FBRXBDLFVBQU0sZUFBZSxJQUFJLENBQUM7QUFFMUIsVUFBTSxpQkFBaUIsSUFBSSxLQUFLO0FBRWhDLFVBQU0sUUFBUTtBQUlkLFVBQU0sZ0JBQWdCLE1BQU0sU0FBUztBQUtyQyxVQUFNLFdBQVcsU0FBUyxNQUFNO0FBQzVCLFVBQUksZUFBZSxPQUFPO0FBQ3RCLGVBQU8sTUFBTSxtQkFBbUIsTUFBTSxXQUFXLEdBQUcsRUFDL0MsSUFBSSxD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
