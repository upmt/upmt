import { N as NoteIcon, Q as QPopupEdit } from "./QSlider-DYCYGtt_.js";
import { H as defineComponent, I as useProjectStore, b as computed, _ as _export_sfc, ae as resolveComponent, P as createElementBlock, L as openBlock, R as createVNode, M as withCtx, N as createCommentVNode, af as normalizeStyle, ad as normalizeClass, a9 as createBaseVNode, W as createTextVNode, X as toDisplayString, S as Fragment, U as renderList } from "./index-CiMAoj4i.js";
import { D as DropZone, C as ColorizeIcon } from "./DropZone-f6qIp5Z-.js";
import { M as MomentNameInput } from "./MomentNameInput-B9Ajum85.js";
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
        store.updateMomentColor(props.momentId, color);
      }
    });
    function droppedColor(color) {
      store.updateMomentColor(props.momentId, color);
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
          style: normalizeStyle({ backgroundColor: $setup.moment.color || "transparent" }),
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
const MomentShortRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c38d7577"], ["__file", "MomentShortRepresentation.vue"]]);
export {
  MomentShortRepresentation as M
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi1DTGU3elNzUy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgOmRhdGEtbW9tZW50PVwibW9tZW50SWRcIj5cblxuICAgICAgPERyb3Bab25lIGRhdGE9XCJoZWFkZXJcIlxuICAgICAgICAgICAgICAgIHR5cGVzPVwidXBtdC9jb2xvclwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBqdXN0aWZ5LWNlbnRlciBtb21lbnQtaGVhZGVyIHEtcGEteHNcIlxuICAgICAgICAgICAgICAgIEBjb2xvcj1cImRyb3BwZWRDb2xvclwiPlxuXG4gICAgICAgIDxkaXYgOmNsYXNzPVwiWyAnbW9tZW50JywgeyAndHJhbnNpdGlvbmFsJzogbW9tZW50LmlzVHJhbnNpdGlvbmFsIH0gXVwiXG4gICAgICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IG1vbWVudC5jb2xvciB8fCAndHJhbnNwYXJlbnQnIH1cIlxuICAgICAgICAgICAgIHYtaWY9XCJtb21lbnRcIlxuICAgICAgICAgICAgIDpkYXRhLW1vbWVudD1cIm1vbWVudC5pZFwiPlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb21lbnQtbmFtZVwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgbW9tZW50TmFtZSB9fVxuICAgICAgICAgICAgICA8cS1wb3B1cC1lZGl0IHYtbW9kZWw9XCJtb21lbnROYW1lXCIgYXV0by1zYXZlIHYtc2xvdD1cInNjb3BlXCI+XG4gICAgICAgICAgICAgICAgPE1vbWVudE5hbWVJbnB1dCBAY2hhbmdlPVwic2NvcGUuY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptb21lbnQ9XCJtb21lbnRcIiAvPlxuICAgICAgICAgICAgICA8L3EtcG9wdXAtZWRpdD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxDb2xvcml6ZUljb25cbiAgICAgICAgICAgICAgY2xhc3M9XCJvbi1uYW1lLWhvdmVyXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vbWVudENvbG9yXCIgLz5cbiAgICAgICAgICAgIDxOb3RlSWNvblxuICAgICAgICAgICAgICA6ZWxlbWVudD1cIm1vbWVudFwiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vbWVudC1jaGlsZHJlblwiXG4gICAgICAgICAgICAgICA6Y2xhc3M9XCJsYXlvdXRcIlxuICAgICAgICAgICAgICAgdi1pZj1cIm1vbWVudERlcHRoIDwgbWF4aW11bURlcHRoXCI+XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwibSBpbiBtb21lbnQuY2hpbGRyZW5cIlxuICAgICAgICAgICAgIDprZXk9XCJtLmlkXCI+XG4gICAgICAgICAgICAgIDxNb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAgICAgOm1heGltdW1EZXB0aD1cIm1heGltdW1EZXB0aFwiXG4gICAgICAgICAgICAgICAgOm1vbWVudERlcHRoPVwibW9tZW50RGVwdGggKyAxXCJcbiAgICAgICAgICAgICAgICA6bW9tZW50SWQ9XCJtLmlkXCJcbiAgICAgICAgICAgIDpsYXlvdXQ9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICAgPC9Nb21lbnRTaG9ydFJlcHJlc2VudGF0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Ryb3Bab25lPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCBDb2xvcml6ZUljb24gZnJvbSAnLi9Db2xvcml6ZUljb24udnVlJ1xuICBpbXBvcnQgRHJvcFpvbmUgZnJvbSAnLi9Ecm9wWm9uZS52dWUnXG4gIGltcG9ydCBNb21lbnROYW1lSW5wdXQgZnJvbSAnLi9Nb21lbnROYW1lSW5wdXQudnVlJ1xuICBpbXBvcnQgTm90ZUljb24gZnJvbSAnLi9Ob3RlSWNvbi52dWUnXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgbW9tZW50SWQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sXG4gICAgICBtb21lbnREZXB0aDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcbiAgICAgIG1heGltdW1EZXB0aDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcbiAgICAgIGxheW91dDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiaG9yaXpvbnRhbFwiIH1cbiAgfSlcblxuICBjb25zdCBtb21lbnQgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5nZXRNb21lbnQocHJvcHMubW9tZW50SWQpKVxuXG4gIGNvbnN0IG1vbWVudE5hbWUgPSBjb21wdXRlZCh7XG4gICAgICBnZXQgKCkge1xuICAgICAgICAgIHJldHVybiBtb21lbnQudmFsdWUgPyBtb21lbnQudmFsdWUubmFtZSA6IFwiXCJcbiAgICAgIH0sXG4gICAgICBzZXQgKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgICBzdG9yZS51cGRhdGVNb21lbnQocHJvcHMubW9tZW50SWQsIHsgbmFtZTogdmFsdWUgfSlcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBtb21lbnRDb2xvciA9IGNvbXB1dGVkKHtcbiAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIG1vbWVudC52YWx1ZSA/IG1vbWVudC52YWx1ZS5jb2xvciA6IFwiXCJcbiAgICAgIH0sXG4gICAgICBzZXQgKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgICBzdG9yZS51cGRhdGVNb21lbnRDb2xvcihwcm9wcy5tb21lbnRJZCwgY29sb3IpXG4gICAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gZHJvcHBlZENvbG9yIChjb2xvcjogc3RyaW5nKSB7XG4gICAgICBzdG9yZS51cGRhdGVNb21lbnRDb2xvcihwcm9wcy5tb21lbnRJZCwgY29sb3IpXG4gIH1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5oZWFkZXItY2xhc3Mge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm1vbWVudC1jaGlsZHJlbiB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLm1vbWVudC1jaGlsZHJlbi52ZXJ0aWNhbCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5tb21lbnQtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5tb21lbnQge1xuICAgICAgbWluLXdpZHRoOiB2YXIoLS1tb21lbnQtbWluaW11bS13aWR0aCk7XG4gICAgICBtYXgtd2lkdGg6IHZhcigtLW1vbWVudC1tYXhpbXVtLXdpZHRoKTtcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW46IDRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgfVxuICAubW9tZW50LW5hbWUge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5tb21lbnQtYm9keSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAudHJhbnNpdGlvbmFsIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zaXRpb25hbC1jb2xvcik7XG4gIH1cbiAgLnRyYW5zaXRpb25hbDo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyAnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogY2FsYyggNTAlIC0gdmFyKC0tdHJhbnNpdGlvbmFsLWJhci13aWR0aCkgLyAyICk7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICB3aWR0aDogdmFyKC0tdHJhbnNpdGlvbmFsLWJhci13aWR0aCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2l0aW9uYWwtY29sb3IpO1xuICB9XG4gIC5vbi1uYW1lLWhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLm1vbWVudC1uYW1lOmhvdmVyIC5vbi1uYW1lLWhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9ub3JtYWxpemVTdHlsZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl93aXRoQ3R4IiwiX29wZW5CbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQXdERSxVQUFNLFFBQVEsZ0JBQUE7QUFFZCxVQUFNLFFBQVE7QUFPZCxVQUFNLFNBQVMsU0FBUyxNQUFNLE1BQU0sVUFBVSxNQUFN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
