import { N as NoteIcon, b as QPopupEdit } from "./NoteIcon-Bdqpr3qd.js";
import { Y as defineComponent, Z as useProjectStore, p as computed, a1 as _export_sfc, a2 as resolveComponent, aa as createElementBlock, a4 as openBlock, ab as createCommentVNode, aY as normalizeStyle, ad as normalizeClass, a7 as createBaseVNode, a6 as createVNode, a9 as createTextVNode, ac as toDisplayString, a5 as withCtx, ag as Fragment, ah as renderList } from "./index-C8moTFq2.js";
import { C as ColorizeIcon } from "./ColorizeIcon-CnOnCqoT.js";
import { M as MomentNameInput } from "./MomentNameInput-B5g6roj8.js";
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
    const momentName = computed({
      get() {
        return moment.value ? moment.value.name : "";
      },
      set(value) {
        store.updateMoment(props.momentId, { name: value });
      }
    });
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
    const __returned__ = { store, props, moment, momentName, momentColor, ColorizeIcon, MomentNameInput, NoteIcon };
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
        createBaseVNode("span", null, [
          createTextVNode(toDisplayString($setup.momentName) + " ", 1),
          createVNode(QPopupEdit, {
            modelValue: $setup.momentName,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.momentName = $event),
            "auto-save": ""
          }, {
            default: withCtx((scope) => [
              createVNode($setup["MomentNameInput"], {
                onChange: scope.cancel,
                moment: $setup.moment
              }, null, 8, ["onChange", "moment"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        createVNode($setup["ColorizeIcon"], {
          class: "on-name-hover",
          modelValue: $setup.momentColor,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.momentColor = $event)
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
const MomentShortRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4d905522"], ["__file", "MomentShortRepresentation.vue"]]);
export {
  MomentShortRepresentation as M
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi1COGlkY3VsdC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgOmRhdGEtbW9tZW50PVwibW9tZW50SWRcIj5cblxuICAgIDxkaXYgOmNsYXNzPVwiWyAnbW9tZW50JywgeyAndHJhbnNpdGlvbmFsJzogbW9tZW50LmlzVHJhbnNpdGlvbmFsIH0gXVwiXG4gICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogbW9tZW50LmNvbG9yIH1cIlxuICAgICAgICAgdi1pZj1cIm1vbWVudFwiXG4gICAgICAgICA6ZGF0YS1tb21lbnQ9XCJtb21lbnQuaWRcIj5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJtb21lbnQtbmFtZVwiPlxuICAgICAgICA8c3Bhbj57eyBtb21lbnROYW1lIH19XG4gICAgICAgICAgPHEtcG9wdXAtZWRpdCB2LW1vZGVsPVwibW9tZW50TmFtZVwiIGF1dG8tc2F2ZSB2LXNsb3Q9XCJzY29wZVwiPlxuICAgICAgICAgICAgPE1vbWVudE5hbWVJbnB1dCBAY2hhbmdlPVwic2NvcGUuY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1vbWVudD1cIm1vbWVudFwiIC8+XG4gICAgICAgICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPENvbG9yaXplSWNvblxuICAgICAgICAgIGNsYXNzPVwib24tbmFtZS1ob3ZlclwiXG4gICAgICAgICAgdi1tb2RlbD1cIm1vbWVudENvbG9yXCIgLz5cbiAgICAgICAgPE5vdGVJY29uXG4gICAgICAgICAgOmVsZW1lbnQ9XCJtb21lbnRcIiAvPlxuICAgICAgPC9zcGFuPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibW9tZW50LWNoaWxkcmVuXCJcbiAgICAgICAgICAgOmNsYXNzPVwibGF5b3V0XCJcbiAgICAgICAgICAgdi1pZj1cIm1vbWVudERlcHRoIDwgbWF4aW11bURlcHRoXCI+XG4gICAgICAgIDxkaXYgdi1mb3I9XCJtIGluIG1vbWVudC5jaGlsZHJlblwiXG4gICAgICAgICAgICAgOmtleT1cIm0uaWRcIj5cbiAgICAgICAgICA8TW9tZW50U2hvcnRSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgOm1heGltdW1EZXB0aD1cIm1heGltdW1EZXB0aFwiXG4gICAgICAgICAgICA6bW9tZW50RGVwdGg9XCJtb21lbnREZXB0aCArIDFcIlxuICAgICAgICAgICAgOm1vbWVudElkPVwibS5pZFwiXG4gICAgICAgICAgICA6bGF5b3V0PVwibGF5b3V0XCI+XG4gICAgICAgICAgPC9Nb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgQ29sb3JpemVJY29uIGZyb20gJy4vQ29sb3JpemVJY29uLnZ1ZSdcbiAgaW1wb3J0IE1vbWVudE5hbWVJbnB1dCBmcm9tICcuL01vbWVudE5hbWVJbnB1dC52dWUnXG4gIGltcG9ydCBOb3RlSWNvbiBmcm9tICcuL05vdGVJY29uLnZ1ZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBtb21lbnRJZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICAgIG1vbWVudERlcHRoOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxuICAgICAgbWF4aW11bURlcHRoOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxuICAgICAgbGF5b3V0OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJob3Jpem9udGFsXCIgfVxuICB9KVxuXG4gIGNvbnN0IG1vbWVudCA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldE1vbWVudChwcm9wcy5tb21lbnRJZCkpXG5cbiAgY29uc3QgbW9tZW50TmFtZSA9IGNvbXB1dGVkKHtcbiAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIG1vbWVudC52YWx1ZSA/IG1vbWVudC52YWx1ZS5uYW1lIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAodmFsdWU6IHN0cmluZykge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudChwcm9wcy5tb21lbnRJZCwgeyBuYW1lOiB2YWx1ZSB9KVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vbWVudENvbG9yID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gbW9tZW50LnZhbHVlID8gbW9tZW50LnZhbHVlLmNvbG9yIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAoY29sb3I6IHN0cmluZykge1xuICAgICAgICAgIGlmIChjb2xvciA9PSAnI2ZmZmZmZicpIHtcbiAgICAgICAgICAgICAgY29sb3IgPSAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdG9yZS51cGRhdGVNb21lbnQocHJvcHMubW9tZW50SWQsIHsgY29sb3IgfSlcbiAgICAgIH1cbiAgfSlcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuaGVhZGVyLWNsYXNzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tb21lbnQtY2hpbGRyZW4ge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5tb21lbnQtY2hpbGRyZW4udmVydGljYWwge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubW9tZW50LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAubW9tZW50IHtcbiAgICAgIG1pbi13aWR0aDogdmFyKC0tbW9tZW50LW1pbmltdW0td2lkdGgpO1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICB9XG4gIC5tb21lbnQtbmFtZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLm1vbWVudC1ib2R5IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC50cmFuc2l0aW9uYWwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNpdGlvbmFsLWNvbG9yKTtcbiAgfVxuICAudHJhbnNpdGlvbmFsOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiBjYWxjKCA1MCUgLSB2YXIoLS10cmFuc2l0aW9uYWwtYmFyLXdpZHRoKSAvIDIgKTtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGhlaWdodDogODB2aDtcbiAgICAgIHdpZHRoOiB2YXIoLS10cmFuc2l0aW9uYWwtYmFyLXdpZHRoKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zaXRpb25hbC1jb2xvcik7XG4gIH1cbiAgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMDtcbiAgfVxuICAubW9tZW50LW5hbWU6aG92ZXIgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX29wZW5CbG9jayIsIl9ub3JtYWxpemVDbGFzcyIsIl9ub3JtYWxpemVTdHlsZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBa0RFLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sUUFBUTtBQU9kLFVBQU0sU0FBUyxTQUFTLE1BQU0sTUFBTSxVQUFVLE1BQU0sUUFBUSxDQUFDO0FBRTdELFVBQU0sYUFBYSxTQUFTO0FBQUEsTUFDeEIsTUFBTztBQUNILGVBQU8sT0FBTyxRQUFRLE9BQU8sTUFBTSxPQUFPO0FBQUEsTUFDOUM7QUFBQSxNQUNBLElBQUssT0FBZTtBQUNoQixjQUFNLGFBQWEsTUFBTSxVQUFVLEVBQUUsTUFBTSxPQUFPO0FBQUEsTUFDdEQ7QUFBQSxJQUFBLENBQ0g7QUFFRCxVQUFNLGNBQWMsU0FBUztBQUFBLE1BQ3pCLE1BQU87QUFDSCxlQUFPLE9BQU8sUUFBUSxPQUFPLE1BQU0sUUFBUTtBQUFBLE1BQy9DO0FBQUEsTUFDQSxJQUFLLE9BQWU7QUFDaEIsWUFBSSxTQUFTLFdBQVc7QUFDcEIsa0JBQVE7QUFBQSxRQUNaO0FBQ0EsY0FBTSxhQUFhLE1BQU0sVUFBVSxFQUFFLE9BQU87QUFBQSxNQUNoRDtBQUFBLElBQUEsQ0FDSDs7Ozs7Ozs7QUF2RVMsTUFBQSxhQUFBLEVBQUEsT0FBTSxjQUFBOzs7c0JBUmhCQSxtQkFzQ00sT0FBQTtBQUFBLElBdENELEtBQUk7QUFBQSxJQUNILGVBQWEsT0FBQTtBQUFBLEVBQUEsR0FBQTtBQUFBLElBSU4sT0FBQSxVQUFBQyxhQUZYRCxtQkFpQ00sT0FBQTtBQUFBLE1BQUEsS0FBQTtBQUFBLE1BakNBLE9BQUtFLGVBQUEsQ0FBQSxVQUFBLEVBQUEsZ0JBQWdDLGNBQU8sZUFBQSxDQUFjLENBQUE7QUFBQSxNQUMxRCxPQUFLQyxlQUFBLEVBQUEsaUJBQXFCLE9BQUEsT0FBTyxPQUFLO0FBQUEsTUFFdEMsZUFBYSxPQUFBLE9BQU87QUFBQSxJQUFBLEdBQUE7QUFBQSxNQUV4QkMsZ0JBWU8sUUFaUCxZQVlPO0FBQUEsUUFYTEEsZ0JBS08sUUFBQSxNQUFBO0FBQUEsVUFBQUMsZ0JBQUFDLGdCQUxFLE9BQUEsVUFBVSxJQUFHLEtBQ3BCLENBQUE7QUFBQSxVQUFBQyxZQUdlLFlBQUE7QUFBQSxZQUFBLFlBSFEsT0FBQTtBQUFBLFlBQUEsdUJBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLE9BQUEsYUFBVTtBQUFBLFlBQUUsYUFBQTtBQUFBLFVBQUEsR0FBQTtBQUFBLFlBQ2pDLFNBQUFDLFFBQUEsQ0FDb0MsVUFGb0I7QUFBQSxjQUN4REQsWUFDb0MsT0FBQSxpQkFBQSxHQUFBO0FBQUEsZ0JBRGxCLFVBQVEsTUFBTTtBQUFBLGdCQUNkLFFBQVEsT0FBQTtBQUFBLGNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxZQUFBLFFBQUEsQ0FBQTtBQUFBOzs7O1FBRzlCQSxZQUUwQixPQUFBLGNBQUEsR0FBQTtBQUFBLFVBRHhCLE9BQU07QUFBQSxVQUFBLFlBQ0csT0FBQTtBQUFBLFVBQUEsdUJBQUEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBLE9BQUEsY0FBVztBQUFBLFFBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxZQUFBLENBQUE7QUFBQSxRQUN0QkEsWUFDc0IsT0FBQSxVQUFBLEdBQUEsRUFBbkIsU0FBUyxPQUFBLFVBQU0sTUFBQSxHQUFBLENBQUEsU0FBQSxDQUFBO0FBQUEsTUFBQSxDQUFBO0FBQUEsTUFLVCxPQUFBLGNBQWMsb0NBRnpCUCxtQkFZTSxPQUFBO0FBQUEsUUFBQSxLQUFBO0FBQUEsUUFaRCxPQUFLRSxlQUFBLENBQUMsbUJBQ0UsT0FBQSxNQUFNLENBQUE7QUFBQSxNQUFBLEdBQUE7QUFBQSxTQUVqQkQsVUFBQSxJQUFBLEdBQUFELG1CQVFNUyxVQUFBLE1BQUFDLFdBUlcsT0FBQSxPQUFPLFVBQVEsQ0FBcEIsTUFBQzs4QkFBYlYsbUJBUU0sT0FBQTtBQUFBLFlBUEEsS0FBSyxFQUFFO0FBQUEsVUFBQSxHQUFBO0FBQUEsWUFDWE8sWUFLNEIsc0NBQUE7QUFBQSxjQUp6QixjQUFjLE9BQUE7QUFBQSxjQUNkLGFBQWEsT0FBQSxjQUFXO0FBQUEsY0FDeEIsVUFBVSxFQUFFO0FBQUEsY0FDWixRQUFRLE9BQUE7QUFBQSxZQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsZ0JBQUEsZUFBQSxZQUFBLFFBQUEsQ0FBQTtBQUFBOzs7Ozs7OyJ9
