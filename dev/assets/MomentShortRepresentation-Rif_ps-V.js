import { N as NoteIcon, Q as QPopupEdit } from "./NoteIcon-okW5FsIm.js";
import { I as defineComponent, J as useProjectStore, e as computed, _ as _export_sfc, a8 as resolveComponent, R as createElementBlock, M as openBlock, O as createCommentVNode, a9 as normalizeStyle, a7 as normalizeClass, Z as createBaseVNode, $ as createVNode, a3 as createTextVNode, a6 as toDisplayString, N as withCtx, a4 as Fragment, a5 as renderList } from "./index-Dw3Gl-OX.js";
import { C as ColorizeIcon } from "./ColorizeIcon-CXn5C13v.js";
import { M as MomentNameInput } from "./MomentNameInput-DiJkPeVo.js";
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
const MomentShortRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aed02dae"], ["__file", "MomentShortRepresentation.vue"]]);
export {
  MomentShortRepresentation as M
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi1SaWZfcHMtVi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgOmRhdGEtbW9tZW50PVwibW9tZW50SWRcIj5cblxuICAgIDxkaXYgOmNsYXNzPVwiWyAnbW9tZW50JywgeyAndHJhbnNpdGlvbmFsJzogbW9tZW50LmlzVHJhbnNpdGlvbmFsIH0gXVwiXG4gICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogbW9tZW50LmNvbG9yIH1cIlxuICAgICAgICAgdi1pZj1cIm1vbWVudFwiXG4gICAgICAgICA6ZGF0YS1tb21lbnQ9XCJtb21lbnQuaWRcIj5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJtb21lbnQtbmFtZVwiPlxuICAgICAgICA8c3Bhbj57eyBtb21lbnROYW1lIH19XG4gICAgICAgICAgPHEtcG9wdXAtZWRpdCB2LW1vZGVsPVwibW9tZW50TmFtZVwiIGF1dG8tc2F2ZSB2LXNsb3Q9XCJzY29wZVwiPlxuICAgICAgICAgICAgPE1vbWVudE5hbWVJbnB1dCBAY2hhbmdlPVwic2NvcGUuY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1vbWVudD1cIm1vbWVudFwiIC8+XG4gICAgICAgICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPENvbG9yaXplSWNvblxuICAgICAgICAgIGNsYXNzPVwib24tbmFtZS1ob3ZlclwiXG4gICAgICAgICAgdi1tb2RlbD1cIm1vbWVudENvbG9yXCIgLz5cbiAgICAgICAgPE5vdGVJY29uXG4gICAgICAgICAgOmVsZW1lbnQ9XCJtb21lbnRcIiAvPlxuICAgICAgPC9zcGFuPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibW9tZW50LWNoaWxkcmVuXCJcbiAgICAgICAgICAgOmNsYXNzPVwibGF5b3V0XCJcbiAgICAgICAgICAgdi1pZj1cIm1vbWVudERlcHRoIDwgbWF4aW11bURlcHRoXCI+XG4gICAgICAgIDxkaXYgdi1mb3I9XCJtIGluIG1vbWVudC5jaGlsZHJlblwiXG4gICAgICAgICAgICAgOmtleT1cIm0uaWRcIj5cbiAgICAgICAgICA8TW9tZW50U2hvcnRSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgOm1heGltdW1EZXB0aD1cIm1heGltdW1EZXB0aFwiXG4gICAgICAgICAgICA6bW9tZW50RGVwdGg9XCJtb21lbnREZXB0aCArIDFcIlxuICAgICAgICAgICAgOm1vbWVudElkPVwibS5pZFwiXG4gICAgICAgICAgICA6bGF5b3V0PVwibGF5b3V0XCI+XG4gICAgICAgICAgPC9Nb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgQ29sb3JpemVJY29uIGZyb20gJy4vQ29sb3JpemVJY29uLnZ1ZSdcbiAgaW1wb3J0IE1vbWVudE5hbWVJbnB1dCBmcm9tICcuL01vbWVudE5hbWVJbnB1dC52dWUnXG4gIGltcG9ydCBOb3RlSWNvbiBmcm9tICcuL05vdGVJY29uLnZ1ZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBtb21lbnRJZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICAgIG1vbWVudERlcHRoOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxuICAgICAgbWF4aW11bURlcHRoOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxuICAgICAgbGF5b3V0OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJob3Jpem9udGFsXCIgfVxuICB9KVxuXG4gIGNvbnN0IG1vbWVudCA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldE1vbWVudChwcm9wcy5tb21lbnRJZCkpXG5cbiAgY29uc3QgbW9tZW50TmFtZSA9IGNvbXB1dGVkKHtcbiAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIG1vbWVudC52YWx1ZSA/IG1vbWVudC52YWx1ZS5uYW1lIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAodmFsdWU6IHN0cmluZykge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudChwcm9wcy5tb21lbnRJZCwgeyBuYW1lOiB2YWx1ZSB9KVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vbWVudENvbG9yID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gbW9tZW50LnZhbHVlID8gbW9tZW50LnZhbHVlLmNvbG9yIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAoY29sb3I6IHN0cmluZykge1xuICAgICAgICAgIGlmIChjb2xvciA9PSAnI2ZmZmZmZicpIHtcbiAgICAgICAgICAgICAgY29sb3IgPSAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdG9yZS51cGRhdGVNb21lbnQocHJvcHMubW9tZW50SWQsIHsgY29sb3IgfSlcbiAgICAgIH1cbiAgfSlcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuaGVhZGVyLWNsYXNzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tb21lbnQtY2hpbGRyZW4ge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5tb21lbnQtY2hpbGRyZW4udmVydGljYWwge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubW9tZW50LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAubW9tZW50IHtcbiAgICAgIG1pbi13aWR0aDogdmFyKC0tbW9tZW50LW1pbmltdW0td2lkdGgpO1xuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1tb21lbnQtbWF4aW11bS13aWR0aCk7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIH1cbiAgLm1vbWVudC1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubW9tZW50LWJvZHkge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLnRyYW5zaXRpb25hbCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2l0aW9uYWwtY29sb3IpO1xuICB9XG4gIC50cmFuc2l0aW9uYWw6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IGNhbGMoIDUwJSAtIHZhcigtLXRyYW5zaXRpb25hbC1iYXItd2lkdGgpIC8gMiApO1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgd2lkdGg6IHZhcigtLXRyYW5zaXRpb25hbC1iYXItd2lkdGgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNpdGlvbmFsLWNvbG9yKTtcbiAgfVxuICAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5tb21lbnQtbmFtZTpob3ZlciAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfb3BlbkJsb2NrIiwiX25vcm1hbGl6ZUNsYXNzIiwiX25vcm1hbGl6ZVN0eWxlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFrREUsVUFBTSxRQUFRLGdCQUFBO0FBRWQsVUFBTSxRQUFRO0FBT2QsVUFBTSxTQUFTLFNBQVMsTUFBTSxNQUFNLFVBQVUsTUFBTSxRQUFRLENBQUM7QUFFN0QsVUFBTSxhQUFhLFNBQVM7QUFBQSxNQUN4QixNQUFPO0FBQ0gsZUFBTyxPQUFPLFFBQVEsT0FBTyxNQUFNLE9BQU87QUFBQSxNQUM5QztBQUFBLE1BQ0EsSUFBSyxPQUFlO0FBQ2hCLGNBQU0sYUFBYSxNQUFNLFVBQVUsRUFBRSxNQUFNLE9BQU87QUFBQSxNQUN0RDtBQUFBLElBQUEsQ0FDSDtBQUVELFVBQU0sY0FBYyxTQUFTO0FBQUEsTUFDekIsTUFBTztBQUNILGVBQU8sT0FBTyxRQUFRLE9BQU8sTUFBTSxRQUFRO0FBQUEsTUFDL0M7QUFBQSxNQUNBLElBQUssT0FBZTtBQUNoQixZQUFJLFNBQVMsV0FBVztBQUNwQixrQkFBUTtBQUFBLFFBQ1o7QUFDQSxjQUFNLGFBQWEsTUFBTSxVQUFVLEVBQUUsT0FBTztBQUFBLE1BQ2hEO0FBQUEsSUFBQSxDQUNIOzs7Ozs7OztBQXZFUyxNQUFBLGFBQUEsRUFBQSxPQUFNLGNBQUE7OztzQkFSaEJBLG1CQXNDTSxPQUFBO0FBQUEsSUF0Q0QsS0FBSTtBQUFBLElBQ0gsZUFBYSxPQUFBO0FBQUEsRUFBQSxHQUFBO0FBQUEsSUFJTixPQUFBLFVBQUFDLGFBRlhELG1CQWlDTSxPQUFBO0FBQUEsTUFBQSxLQUFBO0FBQUEsTUFqQ0EsT0FBS0UsZUFBQSxDQUFBLFVBQUEsRUFBQSxnQkFBZ0MsY0FBTyxlQUFBLENBQWMsQ0FBQTtBQUFBLE1BQzFELE9BQUtDLGVBQUEsRUFBQSxpQkFBcUIsT0FBQSxPQUFPLE9BQUs7QUFBQSxNQUV0QyxlQUFhLE9BQUEsT0FBTztBQUFBLElBQUEsR0FBQTtBQUFBLE1BRXhCQyxnQkFZTyxRQVpQLFlBWU87QUFBQSxRQVhMQSxnQkFLTyxRQUFBLE1BQUE7QUFBQSxVQUFBQyxnQkFBQUMsZ0JBTEUsT0FBQSxVQUFVLElBQUcsS0FDcEIsQ0FBQTtBQUFBLFVBQUFDLFlBR2UsWUFBQTtBQUFBLFlBQUEsWUFIUSxPQUFBO0FBQUEsWUFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxhQUFVO0FBQUEsWUFBRSxhQUFBO0FBQUEsVUFBQSxHQUFBO0FBQUEsWUFDakMsU0FBQUMsUUFBQSxDQUNvQyxVQUZvQjtBQUFBLGNBQ3hERCxZQUNvQyxPQUFBLGlCQUFBLEdBQUE7QUFBQSxnQkFEbEIsVUFBUSxNQUFNO0FBQUEsZ0JBQ2QsUUFBUSxPQUFBO0FBQUEsY0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsUUFBQSxDQUFBO0FBQUE7Ozs7UUFHOUJBLFlBRTBCLE9BQUEsY0FBQSxHQUFBO0FBQUEsVUFEeEIsT0FBTTtBQUFBLFVBQUEsWUFDRyxPQUFBO0FBQUEsVUFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxjQUFXO0FBQUEsUUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFFBQ3RCQSxZQUNzQixPQUFBLFVBQUEsR0FBQSxFQUFuQixTQUFTLE9BQUEsVUFBTSxNQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUE7QUFBQSxNQUFBLENBQUE7QUFBQSxNQUtULE9BQUEsY0FBYyxvQ0FGekJQLG1CQVlNLE9BQUE7QUFBQSxRQUFBLEtBQUE7QUFBQSxRQVpELE9BQUtFLGVBQUEsQ0FBQyxtQkFDRSxPQUFBLE1BQU0sQ0FBQTtBQUFBLE1BQUEsR0FBQTtBQUFBLFNBRWpCRCxVQUFBLElBQUEsR0FBQUQsbUJBUU1TLFVBQUEsTUFBQUMsV0FSVyxPQUFBLE9BQU8sVUFBUSxDQUFwQixNQUFDOzhCQUFiVixtQkFRTSxPQUFBO0FBQUEsWUFQQSxLQUFLLEVBQUU7QUFBQSxVQUFBLEdBQUE7QUFBQSxZQUNYTyxZQUs0QixzQ0FBQTtBQUFBLGNBSnpCLGNBQWMsT0FBQTtBQUFBLGNBQ2QsYUFBYSxPQUFBLGNBQVc7QUFBQSxjQUN4QixVQUFVLEVBQUU7QUFBQSxjQUNaLFFBQVEsT0FBQTtBQUFBLFlBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxnQkFBQSxlQUFBLFlBQUEsUUFBQSxDQUFBO0FBQUE7Ozs7Ozs7In0=
