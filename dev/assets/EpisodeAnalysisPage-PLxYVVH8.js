import { Q as QPage } from "./QPage-CznTSEEa.js";
import { H as defineComponent, I as useProjectStore, r as ref, b as computed, _ as _export_sfc, P as createElementBlock, L as openBlock, R as createVNode, a9 as createBaseVNode, M as withCtx, bf as QCheckbox, S as Fragment, U as renderList, ad as normalizeClass, W as createTextVNode, X as toDisplayString, Q as QBtn, K as createBlock, N as createCommentVNode } from "./index-CVgljMGX.js";
import { Q as QBtnToggle } from "./QBtnToggle-DJTClXX6.js";
import { a as QSlider } from "./QSlider-CBhXrTag.js";
import { Q as QSpace } from "./QSpace-UPz74dkK.js";
import { Q as QToolbar } from "./QToolbar-DecpH4d5.js";
import { M as MomentShortRepresentation } from "./MomentShortRepresentation-hMrr_rsz.js";
import "./QBtnGroup-C_C30M17.js";
import "./format-BxwvUZmF.js";
import "./QTooltip-CuH6yPuB.js";
import "./DropZone-gnHoeHDp.js";
import "./QSelect-DbCIFq96.js";
import "./QItemLabel-D-ABqZ2w.js";
import "./MomentNameInput-DkPRzlL3.js";
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
    const splitByEpisode = ref(true);
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
    const __returned__ = { store, editViewMode, maximumDepth, splitByEpisode, props, episodes, MomentShortRepresentation };
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
        _cache[3] || (_cache[3] = createBaseVNode("span", { class: "q-px-md text-bold" }, "Profondeur :", -1)),
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
        createVNode(QCheckbox, {
          modelValue: $setup.splitByEpisode,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.splitByEpisode = $event),
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
                layout: $setup.editViewMode
              }, null, 8, ["maximumDepth", "momentId", "layout"]);
            }), 128))
          ], 2)
        ]);
      }), 128))
    ], 2)
  ]);
}
const EpisodeAnalysis = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-5625fdb9"], ["__file", "EpisodeAnalysis.vue"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXBpc29kZUFuYWx5c2lzUGFnZS1QTHhZVlZIOC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRXBpc29kZUFuYWx5c2lzLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9FcGlzb2RlQW5hbHlzaXNQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHEtdG9vbGJhciBjbGFzcz1cInJvdyB0b29sYmFyXCI+XG5cbiAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgdi1tb2RlbD1cImVkaXRWaWV3TW9kZVwiXG4gICAgICAgIDpvcHRpb25zPVwiWyB7IGljb246ICdtZGktcGFuLWhvcml6b250YWwnLCB2YWx1ZTogJ2hvcml6b250YWwnIH0sXG4gICAgICAgICAgICAgICAgICB7IGljb246ICdtZGktcGFuLXZlcnRpY2FsJywgdmFsdWU6ICd2ZXJ0aWNhbCcgfSBdXCI+XG4gICAgICA8L3EtYnRuLXRvZ2dsZT5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJxLXB4LW1kIHRleHQtYm9sZFwiPlByb2ZvbmRldXImbmJzcDs6PC9zcGFuPlxuICAgICAgPHEtc2xpZGVyIHYtbW9kZWw9XCJtYXhpbXVtRGVwdGhcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sLTRcIlxuICAgICAgICAgICAgICAgIHNuYXBcbiAgICAgICAgICAgICAgICBtYXJrZXJzXG4gICAgICAgICAgICAgICAgbWFya2VyLWxhYmVsc1xuICAgICAgICAgICAgICAgIDptaW49XCIwXCJcbiAgICAgICAgICAgICAgICA6bWF4PVwiNFwiXG4gICAgICAgICAgICAgICAgOnN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICA8L3Etc2xpZGVyPlxuXG4gICAgICA8cS1jaGVja2JveCB2LW1vZGVsPVwic3BsaXRCeUVwaXNvZGVcIlxuICAgICAgICAgICAgICAgICAgbGVmdC1sYWJlbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTcGxpdCBieSBtYXJrZWQgRXBpc29kZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICA8cS1zcGFjZSAvPlxuXG4gICAgPC9xLXRvb2xiYXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZXBpc29kZXNcIlxuICAgICAgICAgOmNsYXNzPVwiZWRpdFZpZXdNb2RlXCI+XG4gICAgICA8ZGl2IHYtZm9yPVwiZXBpc29kZSBpbiBlcGlzb2Rlc1wiXG4gICAgICAgICAgIGNsYXNzPVwiZXBpc29kZVwiXG4gICAgICAgICAgIDprZXk9XCJlcGlzb2RlLmlkXCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIDp0bz1cInsgbmFtZTogJ3Byb2plY3QnLCBxdWVyeTogeyB0YWI6IGVwaXNvZGUuaW50ZXJ2aWV3LmxhYmVsIH0gfVwiXG4gICAgICAgICAgbm8tY2Fwcz5cbiAgICAgICAgICB7eyBlcGlzb2RlLm1vbWVudC5uYW1lIH19ICh7eyBlcGlzb2RlLmludGVydmlldy5sYWJlbCB9fSlcbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVwaXNvZGUtY2hpbGRyZW5cIlxuICAgICAgICAgICAgIDpjbGFzcz1cImVkaXRWaWV3TW9kZVwiPlxuICAgICAgICAgIDxNb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB2LWZvcj1cIm1vbWVudCBpbiBlcGlzb2RlLm1vbWVudC5jaGlsZHJlblwiXG4gICAgICAgICAgICA6a2V5PVwibW9tZW50LmlkXCJcbiAgICAgICAgICAgIDptYXhpbXVtRGVwdGg9XCJtYXhpbXVtRGVwdGhcIlxuICAgICAgICAgICAgOm1vbWVudElkPVwibW9tZW50LmlkXCJcbiAgICAgICAgICAgIDpsYXlvdXQ9XCJlZGl0Vmlld01vZGVcIj5cbiAgICAgICAgICA8L01vbWVudFNob3J0UmVwcmVzZW50YXRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbiBmcm9tICcuL01vbWVudFNob3J0UmVwcmVzZW50YXRpb24udnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBlZGl0Vmlld01vZGUgPSByZWYoJ2hvcml6b250YWwnKVxuXG4gIGNvbnN0IG1heGltdW1EZXB0aCA9IHJlZigxKVxuXG4gIGNvbnN0IHNwbGl0QnlFcGlzb2RlID0gcmVmKHRydWUpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZ1xuICB9PigpXG5cbiAgc3RvcmUuYWN0aXZhdGVQcm9qZWN0KHByb3BzLnByb2plY3RJZClcblxuICAvLyBnZXRNb21lbnRzQnlQcmVmaXggcmV0dXJucyByYXcgTW9tZW50cyB3aXRoIG5vIGNoaWxkcmVuXG4gIC8vIGluZm9ybWF0aW9uLiBXZSBmZXRjaCBjaGlsZHJlbiBpbmZvIHRocm91Z2ggdGhlIGdldE1vbWVudCBtYXAgYW5kXG4gIC8vIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGp1c3QgaGVyZSB0byBwbGVhc2UgVFNDIGNoZWNrZXJcbiAgY29uc3QgZXBpc29kZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAoc3BsaXRCeUVwaXNvZGUudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gc3RvcmUuZ2V0TW9tZW50c0J5UHJlZml4KHByb3BzLnByb2plY3RJZCwgJyUnKVxuICAgICAgICAgICAgICAubWFwKG1vbWVudCA9PiAoe1xuICAgICAgICAgICAgICAgICAgaWQ6IG1vbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgIG1vbWVudDogc3RvcmUuZ2V0TW9tZW50KG1vbWVudC5pZCkgfHwgeyBuYW1lOiBcIk5vbmVcIiwgY2hpbGRyZW46IFtdIH0sXG4gICAgICAgICAgICAgICAgICBpbnRlcnZpZXc6IHN0b3JlLmdldEludGVydmlld0J5TW9tZW50KG1vbWVudC5pZCkgfHwgeyBsYWJlbDogXCJOb25lXCIgfVxuICAgICAgICAgICAgICB9KSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmV0dXJuIHJvb3QgbW9tZW50c1xuICAgICAgICAgIGNvbnN0IHJhd1Jvb3RNb21lbnRzID0gc3RvcmUuZ2V0TW9tZW50c0J5UHJvamVjdChwcm9wcy5wcm9qZWN0SWQpLmZpbHRlcihtb21lbnQgPT4gIW1vbWVudC5wYXJlbnRJZClcblxuICAgICAgICAgIHJldHVybiByYXdSb290TW9tZW50c1xuICAgICAgICAgIC8vIEZldGNoIGZ1bGwgcm9vdCBtb21lbnQgKHdpdGggY2hpbGRyZW4pXG4gICAgICAgICAgICAgIC5tYXAobW9tZW50ID0+IHN0b3JlLmdldE1vbWVudChtb21lbnQuaWQpKVxuICAgICAgICAgICAgICAuZmlsdGVyKG1vbWVudCA9PiBtb21lbnQgIT09IG51bGwpXG4gICAgICAgICAgICAgIC5tYXAobW9tZW50ID0+ICh7XG4gICAgICAgICAgICAgICAgICBpZDogbW9tZW50LmlkLFxuICAgICAgICAgICAgICAgICAgbW9tZW50OiBtb21lbnQsXG4gICAgICAgICAgICAgICAgICBpbnRlcnZpZXc6IHN0b3JlLmdldEludGVydmlld0J5TW9tZW50KG1vbWVudC5pZCkgfHwgeyBsYWJlbDogXCJOb25lXCIgfVxuICAgICAgICAgICAgICB9KSlcbiAgICAgIH1cbiAgfSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uZXBpc29kZXMge1xuICAgIC0tbW9tZW50LW1heGltdW0td2lkdGg6IDIwMHB4O1xuICAgIC0tbW9tZW50LW1pbmltdW0td2lkdGg6IDIwMHB4O1xufVxuLmhvcml6b250YWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnZlcnRpY2FsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5lcGlzb2Rlcy52ZXJ0aWNhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmVwaXNvZGVzLmhvcml6b250YWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlIHBhZGRpbmc+XG4gICAgPEVwaXNvZGVBbmFseXNpc1xuICAgICAgdi1pZj1cInByb2plY3RcIlxuICAgICAgOnByb2plY3RJZD1cInByb2plY3RJZFwiIC8+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG5cbiAgaW1wb3J0IEVwaXNvZGVBbmFseXNpcyBmcm9tICdjb21wb25lbnRzL0VwaXNvZGVBbmFseXNpcy52dWUnXG5cbiAgZGVmaW5lT3B0aW9ucyh7XG4gICAgICBuYW1lOiAnRXBpc29kZUFuYWx5c2lzUGFnZSdcbiAgfSlcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgICAgIHByb2plY3RJZDogc3RyaW5nXG4gIH0+KClcbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuICBjb25zdCBwcm9qZWN0ID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuYWN0aXZhdGVQcm9qZWN0KHByb3BzLnByb2plY3RJZCkpXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9vcGVuQmxvY2siLCJfY3JlYXRlQmxvY2siLCJfY3JlYXRlQ29tbWVudFZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUUsVUFBTSxRQUFRLGdCQUFBO0FBRWQsVUFBTSxlQUFlLElBQUksWUFBWTtBQUVyQyxVQUFNLGVBQWUsSUFBSSxDQUFDO0FBRTFCLFVBQU0saUJBQWlCLElBQUksSUFBSTtBQUUvQixVQUFNLFFBQVE7QUFJZCxVQUFNLGdCQUFnQixNQUFNLFNBQVM7QUFLckMsVUFBTSxXQUFXLFNBQVMsTUFBTTtBQUM1QixVQUFJLGVBQWUsT0FBTztBQUN0QixlQUFPLE1BQU0sbUJBQW1CLE1BQU0sV0FBVyxHQUFHLEVBQy9DLElBQUksQ0FBQSxZQUFXO0FBQUEsVUFDWixJQUFJLE9BQU87QUFBQSxVQUNYLFFBQVEsTUFBTSxVQUFVLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLFVBQVUsR0FBQztBQUFBLFVBQ2pFLFdBQVcsTUFBTSxxQkFBcUIsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLE9BQUE7QUFBQSxRQUFPLEVBQ3RFO0FBQUEsTUFDVixPQUFPO0FBRUgsY0FBTSxpQkFBaUIsTUFBTSxvQkFBb0IsTUFBTSxTQUFTLEVBQUUsT0FBTyxDQUFBLFdBQVUsQ0FBQyxPQUFPLFFBQVE7QUFFbkcsZUFBTyxlQUVGLElBQUksQ0FBQSxXQUFVLE1BQU0sVUFBVSxPQUFPLEVBQUUsQ0FBQyxFQUN4QyxPQUFPLENBQUEsV0FBVSxXQUFXLElBQUksRUFDaEMsSUFBSSxDQUFBLFlBQVc7QUFBQSxVQUNaLElBQUksT0FBTztBQUFBLFVBQ1g7QUFBQSxVQUNBLFdBQVcsTUFBTSxxQkFBcUIsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLE9BQUE7QUFBQSxRQUFPLEVBQ3RFO0FBQUEsTUFDVjtBQUFBLElBQ0osQ0FBQzs7Ozs7OztzQkF2R0RBLG1CQXVETSxPQUFBLE1BQUE7QUFBQSxJQXRESkMsWUE0QlksVUFBQSxFQUFBLE9BQUEsY0E1QkssR0FBQTtBQUFBLE1BQWEsU0FBQUMsUUFFNUIsTUFLZTtBQUFBLFFBTGZELFlBS2UsWUFBQTtBQUFBLFVBSmIsTUFBSztBQUFBLFVBQUEsWUFDSSxPQUFBO0FBQUEsVUFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxlQUFZO0FBQUEsVUFDcEIsU0FBUztBQUFBLFlBQUEsRUFBQSxNQUFBLHNCQUFBLE9BQUEsYUFBQTtBQUFBLFlBQUEsRUFBQSxNQUFBLG9CQUFBLE9BQUEsV0FBQTtBQUFBOztRQUlaLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBRSxnQkFBd0QsUUFBQSxFQUFsRCxPQUFNLG9CQUFBLEdBQW9CLGdCQUFpQixFQUFBO0FBQUEsUUFDakRGLFlBU1csU0FBQTtBQUFBLFVBQUEsWUFUUSxPQUFBO0FBQUEsVUFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxlQUFZO0FBQUEsVUFDckIsT0FBTTtBQUFBLFVBQ04sTUFBQTtBQUFBLFVBQ0EsU0FBQTtBQUFBLFVBQ0EsaUJBQUE7QUFBQSxVQUNDLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUEsUUFJakJBLFlBR2MsV0FBQTtBQUFBLFVBQUEsWUFITyxPQUFBO0FBQUEsVUFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxpQkFBYztBQUFBLFVBQ3ZCLGNBQUE7QUFBQSxVQUNBLE9BQU07QUFBQSxRQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUEsUUFHbEJBLFlBQVcsTUFBQTtBQUFBLE1BQUEsQ0FBQTtBQUFBOztJQUliRSxnQkF1Qk0sT0FBQTtBQUFBLE1BdkJELE9BQUtDLGVBQUEsQ0FBQyxZQUNFLE9BQUEsWUFBWSxDQUFBO0FBQUEsSUFBQSxHQUFBO0FBQUEsd0JBQ3ZCSixtQkFvQk1LLFVBQUEsTUFBQUMsV0FwQmlCLE9BQUEsVUFBUSxDQUFuQixZQUFPOzRCQUFuQk4sbUJBb0JNLE9BQUE7QUFBQSxVQW5CRCxPQUFNO0FBQUEsVUFDTCxLQUFLLFFBQVE7QUFBQSxRQUFBLEdBQUE7QUFBQSxVQUNqQkMsWUFNUSxNQUFBO0FBQUEsWUFMTixPQUFBO0FBQUEsWUFDQSxNQUFBO0FBQUEsWUFDQyxJQUFFLEVBQUEsTUFBQSxXQUFBLE9BQUEsRUFBQSxLQUFtQyxRQUFRLFVBQVUsUUFBSztBQUFBLFlBQzdELFdBQUE7QUFBQSxVQUFBLEdBQUE7QUFBQSw2QkFDQSxNQUF5QjtBQUFBLGNBQUFNLGdCQUFBQyxnQkFBdEIsUUFBUSxPQUFPLElBQUksSUFBRyxPQUFFQSxnQkFBRyxRQUFRLFVBQVUsS0FBSyxJQUFHLE1BQzFELENBQUE7QUFBQSxZQUFBLENBQUE7QUFBQTs7VUFDQUwsZ0JBU00sT0FBQTtBQUFBLFlBVEQsT0FBS0MsZUFBQSxDQUFDLG9CQUNFLE9BQUEsWUFBWSxDQUFBO0FBQUEsVUFBQSxHQUFBO0FBQUEsYUFDdkJLLFVBQUEsSUFBQSxHQUFBVCxtQkFNNEJLLFVBQUEsTUFBQUMsV0FMVCxRQUFRLE9BQU8sVUFBUSxDQUFqQyxXQUFNO2tDQURmSSxZQU00QixPQUFBLDJCQUFBLEdBQUE7QUFBQSxnQkFKekIsS0FBSyxPQUFPO0FBQUEsZ0JBQ1osY0FBYyxPQUFBO0FBQUEsZ0JBQ2QsVUFBVSxPQUFPO0FBQUEsZ0JBQ2pCLFFBQVEsT0FBQTtBQUFBLGNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxnQkFBQSxZQUFBLFFBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ25CLFVBQU0sUUFBUTtBQUdkLFVBQU0sUUFBUSxnQkFBQTtBQUNkLFVBQU0sVUFBVSxTQUFTLE1BQU0sTUFBTSxnQkFBZ0IsTUFBTSxTQUFTLENBQUM7Ozs7Ozs7QUFyQnJFLFNBQUFELFVBQUEsR0FBQUMsWUFJUyx3QkFKRDtBQUFBLElBQU8sU0FBQVIsUUFDYixNQUUyQjtBQUFBLE1BRG5CLCtCQURSUSxZQUUyQixPQUFBLGlCQUFBLEdBQUE7QUFBQSxRQUFBLEtBQUE7QUFBQSxRQUF4QixXQUFXLE9BQUE7QUFBQSxNQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsV0FBQSxDQUFBLEtBQUFDLG1CQUFBLElBQUEsSUFBQTtBQUFBOzs7OzsifQ==
