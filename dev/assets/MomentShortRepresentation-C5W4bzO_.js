import { Y as defineComponent, Z as useProjectStore, p as computed, a1 as _export_sfc, a2 as resolveComponent, aa as createElementBlock, a4 as openBlock, ab as createCommentVNode, aY as normalizeStyle, ad as normalizeClass, a7 as createBaseVNode, a9 as createTextVNode, a6 as createVNode, ac as toDisplayString, ag as Fragment, ah as renderList } from "./index-CA0AeQj5.js";
import { C as ColorizeIcon } from "./ColorizeIcon-BaeH4zlC.js";
import { N as NoteIcon } from "./NoteIcon-cVgNwkJa.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
const _hoisted_1 = ["data-moment"];
const _hoisted_2 = ["data-moment"];
const _hoisted_3 = { class: "moment-name" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
    ], 14, _hoisted_2)) : createCommentVNode("", true)
  ], 8, _hoisted_1);
}
const MomentShortRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-464298b3"], ["__file", "MomentShortRepresentation.vue"]]);
export {
  MomentShortRepresentation as M
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi1DNVc0YnpPXy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgOmRhdGEtbW9tZW50PVwibW9tZW50SWRcIj5cblxuICAgIDxkaXYgOmNsYXNzPVwiWyAnbW9tZW50JywgeyAndHJhbnNpdGlvbmFsJzogbW9tZW50LmlzVHJhbnNpdGlvbmFsIH0gXVwiXG4gICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogbW9tZW50LmNvbG9yIH1cIlxuICAgICAgICAgdi1pZj1cIm1vbWVudFwiXG4gICAgICAgICA6ZGF0YS1tb21lbnQ9XCJtb21lbnQuaWRcIj5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJtb21lbnQtbmFtZVwiPlxuICAgICAgICB7eyBtb21lbnQuZGVzY3JpcHRpb25MYWJlbCB9fVxuICAgICAgICA8Q29sb3JpemVJY29uXG4gICAgICAgICAgY2xhc3M9XCJvbi1uYW1lLWhvdmVyXCJcbiAgICAgICAgICB2LW1vZGVsPVwibW9tZW50Q29sb3JcIiAvPlxuICAgICAgICA8Tm90ZUljb25cbiAgICAgICAgICA6ZWxlbWVudD1cIm1vbWVudFwiIC8+XG4gICAgICA8L3NwYW4+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb21lbnQtY2hpbGRyZW5cIlxuICAgICAgICAgICA6Y2xhc3M9XCJsYXlvdXRcIlxuICAgICAgICAgICB2LWlmPVwibW9tZW50RGVwdGggPCBtYXhpbXVtRGVwdGhcIj5cbiAgICAgICAgPGRpdiB2LWZvcj1cIm0gaW4gbW9tZW50LmNoaWxkcmVuXCJcbiAgICAgICAgICAgICA6a2V5PVwibS5pZFwiPlxuICAgICAgICAgIDxNb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICA6bWF4aW11bURlcHRoPVwibWF4aW11bURlcHRoXCJcbiAgICAgICAgICAgIDptb21lbnREZXB0aD1cIm1vbWVudERlcHRoICsgMVwiXG4gICAgICAgICAgICA6bW9tZW50SWQ9XCJtLmlkXCJcbiAgICAgICAgICAgIDpsYXlvdXQ9XCJsYXlvdXRcIj5cbiAgICAgICAgICA8L01vbWVudFNob3J0UmVwcmVzZW50YXRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCBDb2xvcml6ZUljb24gZnJvbSAnLi9Db2xvcml6ZUljb24udnVlJ1xuICBpbXBvcnQgTm90ZUljb24gZnJvbSAnLi9Ob3RlSWNvbi52dWUnXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgbW9tZW50SWQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sXG4gICAgICBtb21lbnREZXB0aDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcbiAgICAgIG1heGltdW1EZXB0aDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcbiAgICAgIGxheW91dDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiaG9yaXpvbnRhbFwiIH1cbiAgfSlcblxuICBjb25zdCBtb21lbnQgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5nZXRNb21lbnQocHJvcHMubW9tZW50SWQpKVxuXG4gIGNvbnN0IG1vbWVudENvbG9yID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gbW9tZW50LnZhbHVlID8gbW9tZW50LnZhbHVlLmNvbG9yIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAoY29sb3I6IHN0cmluZykge1xuICAgICAgICAgIGlmIChjb2xvciA9PSAnI2ZmZmZmZicpIHtcbiAgICAgICAgICAgICAgY29sb3IgPSAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdG9yZS51cGRhdGVNb21lbnQocHJvcHMubW9tZW50SWQsIHsgY29sb3IgfSlcbiAgICAgIH1cbiAgfSlcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuaGVhZGVyLWNsYXNzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tb21lbnQtY2hpbGRyZW4ge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5tb21lbnQtY2hpbGRyZW4udmVydGljYWwge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubW9tZW50LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAubW9tZW50IHtcbiAgICAgIG1pbi13aWR0aDogdmFyKC0tbW9tZW50LW1pbmltdW0td2lkdGgpO1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICB9XG4gIC5tb21lbnQtbmFtZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLm1vbWVudC1ib2R5IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC50cmFuc2l0aW9uYWwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNpdGlvbmFsLWNvbG9yKTtcbiAgfVxuICAudHJhbnNpdGlvbmFsOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiBjYWxjKCA1MCUgLSB2YXIoLS10cmFuc2l0aW9uYWwtYmFyLXdpZHRoKSAvIDIgKTtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGhlaWdodDogODB2aDtcbiAgICAgIHdpZHRoOiB2YXIoLS10cmFuc2l0aW9uYWwtYmFyLXdpZHRoKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zaXRpb25hbC1jb2xvcik7XG4gIH1cbiAgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMDtcbiAgfVxuICAubW9tZW50LW5hbWU6aG92ZXIgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX29wZW5CbG9jayIsIl9ub3JtYWxpemVDbGFzcyIsIl9ub3JtYWxpemVTdHlsZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVWTm9kZSIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBNENFLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sUUFBUTtBQU9kLFVBQU0sU0FBUyxTQUFTLE1BQU0sTUFBTSxVQUFVLE1BQU0sUUFBUSxDQUFDO0FBRTdELFVBQU0sY0FBYyxTQUFTO0FBQUEsTUFDekIsTUFBTztBQUNILGVBQU8sT0FBTyxRQUFRLE9BQU8sTUFBTSxRQUFRO0FBQUEsTUFDL0M7QUFBQSxNQUNBLElBQUssT0FBZTtBQUNoQixZQUFJLFNBQVMsV0FBVztBQUNwQixrQkFBUTtBQUFBLFFBQ1o7QUFDQSxjQUFNLGFBQWEsTUFBTSxVQUFVLEVBQUUsT0FBTztBQUFBLE1BQ2hEO0FBQUEsSUFBQSxDQUNIOzs7Ozs7OztBQXhEUyxNQUFBLGFBQUEsRUFBQSxPQUFNLGNBQUE7OztzQkFSaEJBLG1CQWlDTSxPQUFBO0FBQUEsSUFqQ0QsS0FBSTtBQUFBLElBQ0gsZUFBYSxPQUFBO0FBQUEsRUFBQSxHQUFBO0FBQUEsSUFJTixPQUFBLFVBQUFDLGFBRlhELG1CQTRCTSxPQUFBO0FBQUEsTUFBQSxLQUFBO0FBQUEsTUE1QkEsT0FBS0UsZUFBQSxDQUFBLFVBQUEsRUFBQSxnQkFBZ0MsY0FBTyxlQUFBLENBQWMsQ0FBQTtBQUFBLE1BQzFELE9BQUtDLGVBQUEsRUFBQSxpQkFBcUIsT0FBQSxPQUFPLE9BQUs7QUFBQSxNQUV0QyxlQUFhLE9BQUEsT0FBTztBQUFBLElBQUEsR0FBQTtBQUFBLE1BRXhCQyxnQkFPTyxRQVBQLFlBT087QUFBQSxRQUFBQyxnQkFBQUMsZ0JBTkYsT0FBQSxPQUFPLGdCQUFnQixJQUFHLEtBQzdCLENBQUE7QUFBQSxRQUFBQyxZQUUwQixPQUFBLGNBQUEsR0FBQTtBQUFBLFVBRHhCLE9BQU07QUFBQSxVQUFBLFlBQ0csT0FBQTtBQUFBLFVBQUEsdUJBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLE9BQUEsY0FBVztBQUFBLFFBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxZQUFBLENBQUE7QUFBQSxRQUN0QkEsWUFDc0IsT0FBQSxVQUFBLEdBQUEsRUFBbkIsU0FBUyxPQUFBLFVBQU0sTUFBQSxHQUFBLENBQUEsU0FBQSxDQUFBO0FBQUEsTUFBQSxDQUFBO0FBQUEsTUFLVCxPQUFBLGNBQWMsb0NBRnpCUCxtQkFZTSxPQUFBO0FBQUEsUUFBQSxLQUFBO0FBQUEsUUFaRCxPQUFLRSxlQUFBLENBQUMsbUJBQ0UsT0FBQSxNQUFNLENBQUE7QUFBQSxNQUFBLEdBQUE7QUFBQSxTQUVqQkQsVUFBQSxJQUFBLEdBQUFELG1CQVFNUSxVQUFBLE1BQUFDLFdBUlcsT0FBQSxPQUFPLFVBQVEsQ0FBcEIsTUFBQzs4QkFBYlQsbUJBUU0sT0FBQTtBQUFBLFlBUEEsS0FBSyxFQUFFO0FBQUEsVUFBQSxHQUFBO0FBQUEsWUFDWE8sWUFLNEIsc0NBQUE7QUFBQSxjQUp6QixjQUFjLE9BQUE7QUFBQSxjQUNkLGFBQWEsT0FBQSxjQUFXO0FBQUEsY0FDeEIsVUFBVSxFQUFFO0FBQUEsY0FDWixRQUFRLE9BQUE7QUFBQSxZQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsZ0JBQUEsZUFBQSxZQUFBLFFBQUEsQ0FBQTtBQUFBOzs7Ozs7OyJ9
