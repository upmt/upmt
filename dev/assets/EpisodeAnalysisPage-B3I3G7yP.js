import { Q as QPage } from "./QPage-Ce9b1atr.js";
import { Q as QBtnToggle, a as QSlider } from "./ColorizeIcon-CnOnCqoT.js";
import { a as QSpace } from "./QBtnGroup-gg1VC8Dz.js";
import { a as QToolbar } from "./NoteIcon-Bdqpr3qd.js";
import { Y as defineComponent, Z as useProjectStore, r as ref, p as computed, a1 as _export_sfc, aa as createElementBlock, a4 as openBlock, a6 as createVNode, a7 as createBaseVNode, a5 as withCtx, ag as Fragment, ah as renderList, ad as normalizeClass, a9 as createTextVNode, ac as toDisplayString, a8 as QBtn, a3 as createBlock } from "./index-C8moTFq2.js";
import { M as MomentShortRepresentation } from "./MomentShortRepresentation-B8idcult.js";
import "./format-mCdLZtFG.js";
import "./QSelect-WCK0xNWi.js";
import "./QItemLabel-CLpdUhw9.js";
import "./QTooltip-H1AkgSso.js";
import "./MomentNameInput-B5g6roj8.js";
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
const EpisodeAnalysis = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-e7e377e1"], ["__file", "EpisodeAnalysis.vue"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXBpc29kZUFuYWx5c2lzUGFnZS1CM0kzRzd5UC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRXBpc29kZUFuYWx5c2lzLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9FcGlzb2RlQW5hbHlzaXNQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHEtdG9vbGJhciBjbGFzcz1cInJvdyB0b29sYmFyXCI+XG5cbiAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgdi1tb2RlbD1cImVkaXRWaWV3TW9kZVwiXG4gICAgICAgIDpvcHRpb25zPVwiWyB7IGljb246ICdtZGktcGFuLWhvcml6b250YWwnLCB2YWx1ZTogJ2hvcml6b250YWwnIH0sXG4gICAgICAgICAgICAgICAgICB7IGljb246ICdtZGktcGFuLXZlcnRpY2FsJywgdmFsdWU6ICd2ZXJ0aWNhbCcgfSBdXCI+XG4gICAgICA8L3EtYnRuLXRvZ2dsZT5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJxLXB4LW1kIHRleHQtYm9sZFwiPlByb2ZvbmRldXImbmJzcDs6PC9zcGFuPlxuICAgICAgPHEtc2xpZGVyIHYtbW9kZWw9XCJtYXhpbXVtRGVwdGhcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sLTRcIlxuICAgICAgICAgICAgICAgIHNuYXBcbiAgICAgICAgICAgICAgICBtYXJrZXJzXG4gICAgICAgICAgICAgICAgOm1pbj1cIjBcIlxuICAgICAgICAgICAgICAgIDptYXg9XCI0XCJcbiAgICAgICAgICAgICAgICA6c3RlcD1cIjFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgIDwvcS1zbGlkZXI+XG5cbiAgICAgIDxxLXNwYWNlIC8+XG5cbiAgICA8L3EtdG9vbGJhcj5cblxuICAgIDxkaXYgY2xhc3M9XCJlcGlzb2Rlc1wiXG4gICAgICAgICA6Y2xhc3M9XCJlZGl0Vmlld01vZGVcIj5cbiAgICAgIDxkaXYgdi1mb3I9XCJlcGlzb2RlIGluIGVwaXNvZGVzXCJcbiAgICAgICAgICAgY2xhc3M9XCJlcGlzb2RlXCJcbiAgICAgICAgICAgOmtleT1cImVwaXNvZGUuaWRcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgOnRvPVwieyBuYW1lOiAncHJvamVjdCcsIHF1ZXJ5OiB7IHRhYjogZXBpc29kZS5pbnRlcnZpZXcubGFiZWwgfSB9XCJcbiAgICAgICAgICBuby1jYXBzPnt7IGVwaXNvZGUubW9tZW50Lm5hbWUgfX1cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVwaXNvZGUtY2hpbGRyZW5cIlxuICAgICAgICAgICAgIDpjbGFzcz1cImVkaXRWaWV3TW9kZVwiPlxuICAgICAgICAgIDxNb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB2LWZvcj1cIm1vbWVudCBpbiBlcGlzb2RlLm1vbWVudC5jaGlsZHJlblwiXG4gICAgICAgICAgICA6a2V5PVwibW9tZW50LmlkXCJcbiAgICAgICAgICAgIDptYXhpbXVtRGVwdGg9XCJtYXhpbXVtRGVwdGhcIlxuICAgICAgICAgICAgOm1vbWVudElkPVwibW9tZW50LmlkXCJcbiAgICAgICAgICAgIDpsYXlvdXQ9XCJlZGl0Vmlld01vZGVcIj5cbiAgICAgICAgICA8L01vbWVudFNob3J0UmVwcmVzZW50YXRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbiBmcm9tICcuL01vbWVudFNob3J0UmVwcmVzZW50YXRpb24udnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBlZGl0Vmlld01vZGUgPSByZWYoJ2hvcml6b250YWwnKVxuXG4gIGNvbnN0IG1heGltdW1EZXB0aCA9IHJlZigxKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICAgICAgcHJvamVjdElkOiBzdHJpbmdcbiAgfT4oKVxuXG4gIHN0b3JlLmFjdGl2YXRlUHJvamVjdChwcm9wcy5wcm9qZWN0SWQpXG5cbiAgLy8gZ2V0TW9tZW50c0J5UHJlZml4IHJldHVybnMgcmF3IE1vbWVudHMgd2l0aCBubyBjaGlsZHJlblxuICAvLyBpbmZvcm1hdGlvbi4gV2UgZmV0Y2ggY2hpbGRyZW4gaW5mbyB0aHJvdWdoIHRoZSBnZXRNb21lbnQgbWFwIGFuZFxuICAvLyB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBqdXN0IGhlcmUgdG8gcGxlYXNlIFRTQyBjaGVja2VyXG4gIGNvbnN0IGVwaXNvZGVzID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuZ2V0TW9tZW50c0J5UHJlZml4KHByb3BzLnByb2plY3RJZCwgJyUnKVxuICAgICAgLm1hcChtb21lbnQgPT4gKHtcbiAgICAgICAgICBpZDogbW9tZW50LmlkLFxuICAgICAgICAgIG1vbWVudDogc3RvcmUuZ2V0TW9tZW50KG1vbWVudC5pZCkgfHwgeyBuYW1lOiBcIk5vbmVcIiwgY2hpbGRyZW46IFtdIH0sXG4gICAgICAgICAgaW50ZXJ2aWV3OiBzdG9yZS5nZXRJbnRlcnZpZXdCeU1vbWVudChtb21lbnQuaWQpIHx8IHsgbGFiZWw6IFwiTm9uZVwiIH1cbiAgICAgIH0pKSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uaG9yaXpvbnRhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udmVydGljYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmVwaXNvZGVzLnZlcnRpY2FsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZXBpc29kZXMuaG9yaXpvbnRhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZz5cbiAgICA8RXBpc29kZUFuYWx5c2lzXG4gICAgICA6cHJvamVjdElkPVwicHJvamVjdElkXCIgLz5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgRXBpc29kZUFuYWx5c2lzIGZyb20gJ2NvbXBvbmVudHMvRXBpc29kZUFuYWx5c2lzLnZ1ZSdcblxuICBkZWZpbmVPcHRpb25zKHtcbiAgICAgIG5hbWU6ICdFcGlzb2RlQW5hbHlzaXNQYWdlJ1xuICB9KVxuXG4gIGRlZmluZVByb3BzPHtcbiAgICAgIHByb2plY3RJZDogc3RyaW5nXG4gIH0+KClcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX29wZW5CbG9jayIsIl9jcmVhdGVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERFLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sZUFBZSxJQUFJLFlBQVk7QUFFckMsVUFBTSxlQUFlLElBQUksQ0FBQztBQUUxQixVQUFNLFFBQVE7QUFJZCxVQUFNLGdCQUFnQixNQUFNLFNBQVM7QUFLckMsVUFBTSxXQUFXLFNBQVMsTUFBTSxNQUFNLG1CQUFtQixNQUFNLFdBQVcsR0FBRyxFQUN4RSxJQUFJLENBQUEsWUFBVztB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
