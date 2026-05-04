import { N as NoteIcon, Q as QPopupEdit } from "./QSlider-CnK58yWZ.js";
import { H as defineComponent, I as useProjectStore, b as computed, _ as _export_sfc, ae as resolveComponent, P as createElementBlock, L as openBlock, R as createVNode, M as withCtx, N as createCommentVNode, af as normalizeStyle, ad as normalizeClass, a9 as createBaseVNode, W as createTextVNode, X as toDisplayString, S as Fragment, U as renderList } from "./index-iDicJdS9.js";
import { D as DropZone, C as ColorizeIcon } from "./DropZone-BIjPMoXD.js";
import { M as MomentNameInput } from "./MomentNameInput-weoimxoR.js";
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
    function droppedColor(color) {
      store.updateMoment(props.momentId, { color });
    }
    const __returned__ = { store, props, moment, momentName, momentColor, droppedColor, ColorizeIcon, DropZone, MomentNameInput, NoteIcon };
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
    createVNode($setup["DropZone"], {
      data: "header",
      types: "upmt/color",
      class: "row full-width justify-center moment-header q-pa-xs",
      onColor: $setup.droppedColor
    }, {
      default: withCtx(() => [
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
      ]),
      _: 1
    })
  ], 8, _hoisted_1);
}
const MomentShortRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dcdd9eb2"], ["__file", "MomentShortRepresentation.vue"]]);
export {
  MomentShortRepresentation as M
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi1EWXFWRUdRWS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgOmRhdGEtbW9tZW50PVwibW9tZW50SWRcIj5cblxuICAgICAgPERyb3Bab25lIGRhdGE9XCJoZWFkZXJcIlxuICAgICAgICAgICAgICAgIHR5cGVzPVwidXBtdC9jb2xvclwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBqdXN0aWZ5LWNlbnRlciBtb21lbnQtaGVhZGVyIHEtcGEteHNcIlxuICAgICAgICAgICAgICAgIEBjb2xvcj1cImRyb3BwZWRDb2xvclwiPlxuXG4gICAgICAgIDxkaXYgOmNsYXNzPVwiWyAnbW9tZW50JywgeyAndHJhbnNpdGlvbmFsJzogbW9tZW50LmlzVHJhbnNpdGlvbmFsIH0gXVwiXG4gICAgICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IG1vbWVudC5jb2xvciB9XCJcbiAgICAgICAgICAgICB2LWlmPVwibW9tZW50XCJcbiAgICAgICAgICAgICA6ZGF0YS1tb21lbnQ9XCJtb21lbnQuaWRcIj5cblxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9tZW50LW5hbWVcIj5cbiAgICAgICAgICAgIDxzcGFuPnt7IG1vbWVudE5hbWUgfX1cbiAgICAgICAgICAgICAgPHEtcG9wdXAtZWRpdCB2LW1vZGVsPVwibW9tZW50TmFtZVwiIGF1dG8tc2F2ZSB2LXNsb3Q9XCJzY29wZVwiPlxuICAgICAgICAgICAgICAgIDxNb21lbnROYW1lSW5wdXQgQGNoYW5nZT1cInNjb3BlLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bW9tZW50PVwibW9tZW50XCIgLz5cbiAgICAgICAgICAgICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8Q29sb3JpemVJY29uXG4gICAgICAgICAgICAgIGNsYXNzPVwib24tbmFtZS1ob3ZlclwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJtb21lbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8Tm90ZUljb25cbiAgICAgICAgICAgICAgOmVsZW1lbnQ9XCJtb21lbnRcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb21lbnQtY2hpbGRyZW5cIlxuICAgICAgICAgICAgICAgOmNsYXNzPVwibGF5b3V0XCJcbiAgICAgICAgICAgICAgIHYtaWY9XCJtb21lbnREZXB0aCA8IG1heGltdW1EZXB0aFwiPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIm0gaW4gbW9tZW50LmNoaWxkcmVuXCJcbiAgICAgICAgICAgICA6a2V5PVwibS5pZFwiPlxuICAgICAgICAgICAgICA8TW9tZW50U2hvcnRSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgIDptYXhpbXVtRGVwdGg9XCJtYXhpbXVtRGVwdGhcIlxuICAgICAgICAgICAgICAgIDptb21lbnREZXB0aD1cIm1vbWVudERlcHRoICsgMVwiXG4gICAgICAgICAgICAgICAgOm1vbWVudElkPVwibS5pZFwiXG4gICAgICAgICAgICA6bGF5b3V0PVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgIDwvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ecm9wWm9uZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgQ29sb3JpemVJY29uIGZyb20gJy4vQ29sb3JpemVJY29uLnZ1ZSdcbiAgaW1wb3J0IERyb3Bab25lIGZyb20gJy4vRHJvcFpvbmUudnVlJ1xuICBpbXBvcnQgTW9tZW50TmFtZUlucHV0IGZyb20gJy4vTW9tZW50TmFtZUlucHV0LnZ1ZSdcbiAgaW1wb3J0IE5vdGVJY29uIGZyb20gJy4vTm90ZUljb24udnVlJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIG1vbWVudElkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxuICAgICAgbW9tZW50RGVwdGg6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXG4gICAgICBtYXhpbXVtRGVwdGg6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXG4gICAgICBsYXlvdXQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcImhvcml6b250YWxcIiB9XG4gIH0pXG5cbiAgY29uc3QgbW9tZW50ID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuZ2V0TW9tZW50KHByb3BzLm1vbWVudElkKSlcblxuICBjb25zdCBtb21lbnROYW1lID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gbW9tZW50LnZhbHVlID8gbW9tZW50LnZhbHVlLm5hbWUgOiBcIlwiXG4gICAgICB9LFxuICAgICAgc2V0ICh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgICAgc3RvcmUudXBkYXRlTW9tZW50KHByb3BzLm1vbWVudElkLCB7IG5hbWU6IHZhbHVlIH0pXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgbW9tZW50Q29sb3IgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiBtb21lbnQudmFsdWUgPyBtb21lbnQudmFsdWUuY29sb3IgOiBcIlwiXG4gICAgICB9LFxuICAgICAgc2V0IChjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgICAgaWYgKGNvbG9yID09ICcjZmZmZmZmJykge1xuICAgICAgICAgICAgICBjb2xvciA9ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudChwcm9wcy5tb21lbnRJZCwgeyBjb2xvciB9KVxuICAgICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGRyb3BwZWRDb2xvciAoY29sb3I6IHN0cmluZykge1xuICAgICAgc3RvcmUudXBkYXRlTW9tZW50KHByb3BzLm1vbWVudElkLCB7IGNvbG9yOiBjb2xvciB9KVxuICB9XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAuaGVhZGVyLWNsYXNzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tb21lbnQtY2hpbGRyZW4ge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5tb21lbnQtY2hpbGRyZW4udmVydGljYWwge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubW9tZW50LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAubW9tZW50IHtcbiAgICAgIG1pbi13aWR0aDogdmFyKC0tbW9tZW50LW1pbmltdW0td2lkdGgpO1xuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1tb21lbnQtbWF4aW11bS13aWR0aCk7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIH1cbiAgLm1vbWVudC1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubW9tZW50LWJvZHkge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLnRyYW5zaXRpb25hbCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2l0aW9uYWwtY29sb3IpO1xuICB9XG4gIC50cmFuc2l0aW9uYWw6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IGNhbGMoIDUwJSAtIHZhcigtLXRyYW5zaXRpb25hbC1iYXItd2lkdGgpIC8gMiApO1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgd2lkdGg6IHZhcigtLXRyYW5zaXRpb25hbC1iYXItd2lkdGgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNpdGlvbmFsLWNvbG9yKTtcbiAgfVxuICAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5tb21lbnQtbmFtZTpob3ZlciAub24tbmFtZS1ob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfbm9ybWFsaXplU3R5bGUiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfd2l0aEN0eCIsIl9vcGVuQmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUF3REUsVUFBTSxR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
