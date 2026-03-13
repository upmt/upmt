import { Q as QPage } from "./QPage-FKdiu-Hv.js";
import { Q as QBtnToggle, a as QSlider } from "./ColorizeIcon-BaeH4zlC.js";
import { a as QSpace } from "./QBtnGroup-BWf0Y3Lz.js";
import { a as QToolbar } from "./NoteIcon-cVgNwkJa.js";
import { Y as defineComponent, Z as useProjectStore, r as ref, p as computed, a1 as _export_sfc, aa as createElementBlock, a4 as openBlock, a6 as createVNode, a7 as createBaseVNode, a5 as withCtx, ag as Fragment, ah as renderList, ad as normalizeClass, a9 as createTextVNode, ac as toDisplayString, a8 as QBtn, a3 as createBlock } from "./index-CA0AeQj5.js";
import { M as MomentShortRepresentation } from "./MomentShortRepresentation-C5W4bzO_.js";
import "./format-DzTtVVwn.js";
import "./rtl-DDpZOXNn.js";
import "./QTooltip-B-JKZB4c.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DiachronicAnalysis",
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
    const episodes = computed(() => store.getMomentsByPrefix(props.projectId, "%").map((moment) => store.getMoment(moment.id) || { id: "None", name: "None", children: [] }));
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
            "no-caps": ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(episode.name), 1)
            ]),
            _: 2
          }, 1024),
          createBaseVNode("div", {
            class: normalizeClass(["episode-children", $setup.editViewMode])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(episode.children, (moment) => {
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
const DiachronicAnalysis = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-2bae2b08"], ["__file", "DiachronicAnalysis.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "DiachronicAnalysisPage"
  },
  __name: "DiachronicAnalysisPage",
  props: {
    projectId: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { DiachronicAnalysis };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { padding: "" }, {
    default: withCtx(() => [
      createVNode($setup["DiachronicAnalysis"], { projectId: $props.projectId }, null, 8, ["projectId"])
    ]),
    _: 1
  });
}
const DiachronicAnalysisPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "DiachronicAnalysisPage.vue"]]);
export {
  DiachronicAnalysisPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlhY2hyb25pY0FuYWx5c2lzUGFnZS0tbi11Rmp0cy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRGlhY2hyb25pY0FuYWx5c2lzLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9EaWFjaHJvbmljQW5hbHlzaXNQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHEtdG9vbGJhciBjbGFzcz1cInJvdyB0b29sYmFyXCI+XG5cbiAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgdi1tb2RlbD1cImVkaXRWaWV3TW9kZVwiXG4gICAgICAgIDpvcHRpb25zPVwiWyB7IGljb246ICdtZGktcGFuLWhvcml6b250YWwnLCB2YWx1ZTogJ2hvcml6b250YWwnIH0sXG4gICAgICAgICAgICAgICAgICB7IGljb246ICdtZGktcGFuLXZlcnRpY2FsJywgdmFsdWU6ICd2ZXJ0aWNhbCcgfSBdXCI+XG4gICAgICA8L3EtYnRuLXRvZ2dsZT5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJxLXB4LW1kIHRleHQtYm9sZFwiPlByb2ZvbmRldXImbmJzcDs6PC9zcGFuPlxuICAgICAgPHEtc2xpZGVyIHYtbW9kZWw9XCJtYXhpbXVtRGVwdGhcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sLTRcIlxuICAgICAgICAgICAgICAgIHNuYXBcbiAgICAgICAgICAgICAgICBtYXJrZXJzXG4gICAgICAgICAgICAgICAgOm1pbj1cIjBcIlxuICAgICAgICAgICAgICAgIDptYXg9XCI0XCJcbiAgICAgICAgICAgICAgICA6c3RlcD1cIjFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgIDwvcS1zbGlkZXI+XG5cbiAgICAgIDxxLXNwYWNlIC8+XG5cbiAgICA8L3EtdG9vbGJhcj5cblxuICAgIDxkaXYgY2xhc3M9XCJlcGlzb2Rlc1wiXG4gICAgICAgICA6Y2xhc3M9XCJlZGl0Vmlld01vZGVcIj5cbiAgICAgIDxkaXYgdi1mb3I9XCJlcGlzb2RlIGluIGVwaXNvZGVzXCJcbiAgICAgICAgICAgY2xhc3M9XCJlcGlzb2RlXCJcbiAgICAgICAgICAgOmtleT1cImVwaXNvZGUuaWRcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgbm8tY2Fwcz57eyBlcGlzb2RlLm5hbWUgfX1cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVwaXNvZGUtY2hpbGRyZW5cIlxuICAgICAgICAgICAgIDpjbGFzcz1cImVkaXRWaWV3TW9kZVwiPlxuICAgICAgICAgIDxNb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB2LWZvcj1cIm1vbWVudCBpbiBlcGlzb2RlLmNoaWxkcmVuXCJcbiAgICAgICAgICAgIDprZXk9XCJtb21lbnQuaWRcIlxuICAgICAgICAgICAgOm1heGltdW1EZXB0aD1cIm1heGltdW1EZXB0aFwiXG4gICAgICAgICAgICA6bW9tZW50SWQ9XCJtb21lbnQuaWRcIlxuICAgICAgICAgICAgOmxheW91dD1cImVkaXRWaWV3TW9kZVwiPlxuICAgICAgICAgIDwvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG4gIGltcG9ydCBNb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uIGZyb20gJy4vTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi52dWUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IGVkaXRWaWV3TW9kZSA9IHJlZignaG9yaXpvbnRhbCcpXG5cbiAgY29uc3QgbWF4aW11bURlcHRoID0gcmVmKDEpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZ1xuICB9PigpXG5cbiAgc3RvcmUuYWN0aXZhdGVQcm9qZWN0KHByb3BzLnByb2plY3RJZClcblxuICAvLyBnZXRNb21lbnRzQnlQcmVmaXggcmV0dXJucyByYXcgTW9tZW50cyB3aXRoIG5vIGNoaWxkcmVuXG4gIC8vIGluZm9ybWF0aW9uLiBXZSBmZXRjaCBjaGlsZHJlbiBpbmZvIHRocm91Z2ggdGhlIGdldE1vbWVudCBtYXAgYW5kXG4gIC8vIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGp1c3QgaGVyZSB0byBwbGVhc2UgVFNDIGNoZWNrZXJcbiAgY29uc3QgZXBpc29kZXMgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5nZXRNb21lbnRzQnlQcmVmaXgocHJvcHMucHJvamVjdElkLCAnJScpXG4gICAgICAubWFwKG1vbWVudCA9PiBzdG9yZS5nZXRNb21lbnQobW9tZW50LmlkKSB8fCB7IGlkOiBcIk5vbmVcIiwgbmFtZTogXCJOb25lXCIsIGNoaWxkcmVuOiBbXSB9KSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uaG9yaXpvbnRhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udmVydGljYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmVwaXNvZGVzLnZlcnRpY2FsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZXBpc29kZXMuaG9yaXpvbnRhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZz5cbiAgICA8RGlhY2hyb25pY0FuYWx5c2lzXG4gICAgICA6cHJvamVjdElkPVwicHJvamVjdElkXCIgLz5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgRGlhY2hyb25pY0FuYWx5c2lzIGZyb20gJ2NvbXBvbmVudHMvRGlhY2hyb25pY0FuYWx5c2lzLnZ1ZSdcblxuICBkZWZpbmVPcHRpb25zKHtcbiAgICAgIG5hbWU6ICdEaWFjaHJvbmljQW5hbHlzaXNQYWdlJ1xuICB9KVxuXG4gIGRlZmluZVByb3BzPHtcbiAgICAgIHByb2plY3RJZDogc3RyaW5nXG4gIH0+KClcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX29wZW5CbG9jayIsIl9jcmVhdGVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQXlERSxVQUFNLFFBQVEsZ0JBQUE7QUFFZCxVQUFNLGVBQWUsSUFBSSxZQUFZO0FBRXJDLFVBQU0sZUFBZSxJQUFJLENBQUM7QUFFMUIsVUFBTSxRQUFRO0FBSWQsVUFBTSxnQkFBZ0IsTUFBTSxTQUFTO0FBS3JDLFVBQU0sV0FBVyxTQUFTLE1BQU0sTUFBTSxtQkFBbUIsTUFBTSxXQUFXLEdBQUcsRUFDeEUsSUFBSSxDQUFBLFdBQVUsTUFBTSxVQUFVLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxRQUFRLE1BQU0sUUFBUSxVQUFVLENBQUEsRUFBQyxDQUFHLENBQUM7Ozs7Ozs7c0JBeEU1RkEsbUJBK0NNLE9BQUEsTUFBQTtBQUFBLElBOUNKQyxZQXNCWSxVQUFBLEVBQUEsT0FBQSxjQXRCSyxHQUFBO0FBQUEsTUFBYSxTQUFBQyxRQUU1QixNQUtlO0FBQUEsUUFMZkQsWUFLZSxZQUFBO0FBQUEsVUFKYixNQUFLO0FBQUEsVUFBQSxZQUNJLE9BQUE7QUFBQSxVQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLGVBQVk7QUFBQSxVQUNwQixTQUFTO0FBQUEsWUFBQSxFQUFBLE1BQUEsc0JBQUEsT0FBQSxhQUFBO0FBQUEsWUFBQSxFQUFBLE1BQUEsb0JBQUEsT0FBQSxXQUFBO0FBQUE7O1FBSVosT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUFFLGdCQUF3RCxRQUFBLEVBQWxELE9BQU0sb0JBQUEsR0FBb0IsZ0JBQWlCLEVBQUE7QUFBQSxRQUNqREYsWUFRVyxTQUFBO0FBQUEsVUFBQSxZQVJRLE9BQUE7QUFBQSxVQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLGVBQVk7QUFBQSxVQUNyQixPQUFNO0FBQUEsVUFDTixNQUFBO0FBQUEsVUFDQSxTQUFBO0FBQUEsVUFDQyxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFFBSWpCQSxZQUFXLE1BQUE7QUFBQSxNQUFBLENBQUE7QUFBQTs7SUFJYkUsZ0JBcUJNLE9BQUE7QUFBQSxNQXJCRCxPQUFLQyxlQUFBLENBQUMsWUFDRSxPQUFBLFlBQVksQ0FBQTtBQUFBLElBQUEsR0FBQTtBQUFBLHdCQUN2QkosbUJBa0JNSyxVQUFBLE1BQUFDLFdBbEJpQixPQUFBLFVBQVEsQ0FBbkIsWUFBTzs0QkFBbkJOLG1CQWtCTSxPQUFBO0FBQUEsVUFqQkQsT0FBTTtBQUFBLFVBQ0wsS0FBSyxRQUFRO0FBQUEsUUFBQSxHQUFBO0FBQUEsVUFDakJDLFlBSVEsTUFBQTtBQUFBLFlBSE4sT0FBQTtBQUFBLFlBQ0EsTUFBQTtBQUFBLFlBQ0EsV0FBQTtBQUFBLFVBQUEsR0FBQTtBQUFBLDZCQUFRLE1BQWtCO0FBQUEsY0FBQU0sZ0JBQUFDLGdCQUFmLFFBQVEsSUFBSSxHQUFBLENBQUE7QUFBQSxZQUFBLENBQUE7QUFBQTs7VUFFekJMLGdCQVNNLE9BQUE7QUFBQSxZQVRELE9BQUtDLGVBQUEsQ0FBQyxvQkFDRSxPQUFBLFlBQVksQ0FBQTtBQUFBLFVBQUEsR0FBQTtBQUFBLGFBQ3ZCSyxVQUFBLElBQUEsR0FBQVQsbUJBTTRCSyxVQUFBLE1BQUFDLFdBTFQsUUFBUSxVQUFRLENBQTFCLFdBQU07a0NBRGZJLFlBTTRCLE9BQUEsMkJBQUEsR0FBQTtBQUFBLGdCQUp6QixLQUFLLE9BQU87QUFBQSxnQkFDWixjQUFjLE9BQUE7QUFBQSxnQkFDZCxVQUFVLE9BQU87QUFBQSxnQkFDakIsUUFBUSxPQUFBO0FBQUEsY0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLGdCQUFBLFlBQUEsUUFBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDbkIsU0FBQUQsVUFBQSxHQUFBQyxZQUdTLHdCQUhEO0FBQUEsSUFBTyxTQUFBUixRQUNiLE1BQzJCO0FBQUEsTUFEM0JELFlBQzJCLE9BQUEsb0JBQUEsR0FBQSxFQUF4QixXQUFXLE9BQUEsYUFBUyxNQUFBLEdBQUEsQ0FBQSxXQUFBLENBQUE7QUFBQSxJQUFBLENBQUE7QUFBQTs7OzsifQ==
