import { N as NoteIcon, Q as QPopupEdit } from "./QSlider-YsL2BiUw.js";
import { H as defineComponent, I as useProjectStore, b as computed, _ as _export_sfc, ae as resolveComponent, P as createElementBlock, L as openBlock, R as createVNode, M as withCtx, N as createCommentVNode, af as normalizeStyle, ad as normalizeClass, a9 as createBaseVNode, X as toDisplayString, W as createTextVNode, S as Fragment, U as renderList } from "./index-DiKymsRm.js";
import { D as DropZone, C as ColorizeIcon } from "./DropZone-Bk9Riejp.js";
import { M as MomentNameInput } from "./MomentNameInput-D0T21-5z.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MomentShortRepresentation",
  props: {
    momentId: { type: String, default: "" },
    momentDepth: { type: Number, default: 0 },
    maximumDepth: { type: Number, default: 0 },
    layout: { type: String, default: "horizontal" },
    genericDiachronicMode: { type: String, default: "" }
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
    const genericDiachronicLabel = computed(() => {
      if (moment.value && moment.value.genericdiachroniccategories.length) {
        return moment.value.genericdiachroniccategories.map((gcd) => gcd.fullName).join(", ");
      } else {
        return "";
      }
    });
    function droppedColor(color) {
      store.updateMomentColor(props.momentId, color);
    }
    const __returned__ = { store, props, moment, momentName, momentColor, genericDiachronicLabel, droppedColor, ColorizeIcon, DropZone, MomentNameInput, NoteIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["data-moment"];
const _hoisted_2 = ["data-moment"];
const _hoisted_3 = { class: "moment-name" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { key: 1 };
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
            $props.genericDiachronicMode == "replace" ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString($setup.genericDiachronicLabel), 1)) : (openBlock(), createElementBlock("span", _hoisted_5, [
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
            ])),
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
                  genericDiachronicMode: $props.genericDiachronicMode,
                  layout: $props.layout
                }, null, 8, ["maximumDepth", "momentDepth", "momentId", "genericDiachronicMode", "layout"])
              ]);
            }), 128))
          ], 2)) : createCommentVNode("", true)
        ], 14, _hoisted_2)) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ], 8, _hoisted_1);
}
const MomentShortRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bc23f3c9"], ["__file", "MomentShortRepresentation.vue"]]);
export {
  MomentShortRepresentation as M
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi00YUt1SDkzYy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgOmRhdGEtbW9tZW50PVwibW9tZW50SWRcIj5cblxuICAgICAgPERyb3Bab25lIGRhdGE9XCJoZWFkZXJcIlxuICAgICAgICAgICAgICAgIHR5cGVzPVwidXBtdC9jb2xvclwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBqdXN0aWZ5LWNlbnRlciBtb21lbnQtaGVhZGVyIHEtcGEteHNcIlxuICAgICAgICAgICAgICAgIEBjb2xvcj1cImRyb3BwZWRDb2xvclwiPlxuXG4gICAgICAgIDxkaXYgOmNsYXNzPVwiWyAnbW9tZW50JywgeyAndHJhbnNpdGlvbmFsJzogbW9tZW50LmlzVHJhbnNpdGlvbmFsIH0gXVwiXG4gICAgICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IG1vbWVudC5jb2xvciB8fCAndHJhbnNwYXJlbnQnIH1cIlxuICAgICAgICAgICAgIHYtaWY9XCJtb21lbnRcIlxuICAgICAgICAgICAgIDpkYXRhLW1vbWVudD1cIm1vbWVudC5pZFwiPlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb21lbnQtbmFtZVwiPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cImdlbmVyaWNEaWFjaHJvbmljTW9kZSA9PSAncmVwbGFjZSdcIj5cbiAgICAgICAgICAgICAge3sgZ2VuZXJpY0RpYWNocm9uaWNMYWJlbCB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gdi1lbHNlPnt7IG1vbWVudE5hbWUgfX1cbiAgICAgICAgICAgICAgPHEtcG9wdXAtZWRpdCB2LW1vZGVsPVwibW9tZW50TmFtZVwiIGF1dG8tc2F2ZSB2LXNsb3Q9XCJzY29wZVwiPlxuICAgICAgICAgICAgICAgIDxNb21lbnROYW1lSW5wdXQgQGNoYW5nZT1cInNjb3BlLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bW9tZW50PVwibW9tZW50XCIgLz5cbiAgICAgICAgICAgICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8Q29sb3JpemVJY29uXG4gICAgICAgICAgICAgIGNsYXNzPVwib24tbmFtZS1ob3ZlclwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJtb21lbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8Tm90ZUljb25cbiAgICAgICAgICAgICAgOmVsZW1lbnQ9XCJtb21lbnRcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb21lbnQtY2hpbGRyZW5cIlxuICAgICAgICAgICAgICAgOmNsYXNzPVwibGF5b3V0XCJcbiAgICAgICAgICAgICAgIHYtaWY9XCJtb21lbnREZXB0aCA8IG1heGltdW1EZXB0aFwiPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIm0gaW4gbW9tZW50LmNoaWxkcmVuXCJcbiAgICAgICAgICAgICA6a2V5PVwibS5pZFwiPlxuICAgICAgICAgICAgICA8TW9tZW50U2hvcnRSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgIDptYXhpbXVtRGVwdGg9XCJtYXhpbXVtRGVwdGhcIlxuICAgICAgICAgICAgICAgIDptb21lbnREZXB0aD1cIm1vbWVudERlcHRoICsgMVwiXG4gICAgICAgICAgICAgICAgOm1vbWVudElkPVwibS5pZFwiXG4gICAgICAgICAgICAgICAgOmdlbmVyaWNEaWFjaHJvbmljTW9kZT1cImdlbmVyaWNEaWFjaHJvbmljTW9kZVwiXG4gICAgICAgICAgICAgICAgOmxheW91dD1cImxheW91dFwiPlxuICAgICAgICAgICAgICA8L01vbWVudFNob3J0UmVwcmVzZW50YXRpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRHJvcFpvbmU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IENvbG9yaXplSWNvbiBmcm9tICcuL0NvbG9yaXplSWNvbi52dWUnXG4gIGltcG9ydCBEcm9wWm9uZSBmcm9tICcuL0Ryb3Bab25lLnZ1ZSdcbiAgaW1wb3J0IE1vbWVudE5hbWVJbnB1dCBmcm9tICcuL01vbWVudE5hbWVJbnB1dC52dWUnXG4gIGltcG9ydCBOb3RlSWNvbiBmcm9tICcuL05vdGVJY29uLnZ1ZSdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBtb21lbnRJZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICAgIG1vbWVudERlcHRoOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxuICAgICAgbWF4aW11bURlcHRoOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxuICAgICAgbGF5b3V0OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJob3Jpem9udGFsXCIgfSxcbiAgICAgIGdlbmVyaWNEaWFjaHJvbmljTW9kZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfVxuICB9KVxuXG4gIGNvbnN0IG1vbWVudCA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldE1vbWVudChwcm9wcy5tb21lbnRJZCkpXG5cbiAgY29uc3QgbW9tZW50TmFtZSA9IGNvbXB1dGVkKHtcbiAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIG1vbWVudC52YWx1ZSA/IG1vbWVudC52YWx1ZS5uYW1lIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAodmFsdWU6IHN0cmluZykge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudChwcm9wcy5tb21lbnRJZCwgeyBuYW1lOiB2YWx1ZSB9KVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vbWVudENvbG9yID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gbW9tZW50LnZhbHVlID8gbW9tZW50LnZhbHVlLmNvbG9yIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAoY29sb3I6IHN0cmluZykge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudENvbG9yKHByb3BzLm1vbWVudElkLCBjb2xvcilcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBnZW5lcmljRGlhY2hyb25pY0xhYmVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKG1vbWVudC52YWx1ZSAmJiBtb21lbnQudmFsdWUuZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yaWVzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBtb21lbnQudmFsdWUuZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yaWVzLm1hcChnY2QgPT4gZ2NkLmZ1bGxOYW1lKS5qb2luKFwiLCBcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBkcm9wcGVkQ29sb3IgKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudENvbG9yKHByb3BzLm1vbWVudElkLCBjb2xvcilcbiAgfVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmhlYWRlci1jbGFzcyB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubW9tZW50LWNoaWxkcmVuIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubW9tZW50LWNoaWxkcmVuLnZlcnRpY2FsIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLm1vbWVudC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLm1vbWVudCB7XG4gICAgICBtaW4td2lkdGg6IHZhcigtLW1vbWVudC1taW5pbXVtLXdpZHRoKTtcbiAgICAgIG1heC13aWR0aDogdmFyKC0tbW9tZW50LW1heGltdW0td2lkdGgpO1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICB9XG4gIC5tb21lbnQtbmFtZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLm1vbWVudC1ib2R5IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC50cmFuc2l0aW9uYWwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNpdGlvbmFsLWNvbG9yKTtcbiAgfVxuICAudHJhbnNpdGlvbmFsOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiBjYWxjKCA1MCUgLSB2YXIoLS10cmFuc2l0aW9uYWwtYmFyLXdpZHRoKSAvIDIgKTtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGhlaWdodDogODB2aDtcbiAgICAgIHdpZHRoOiB2YXIoLS10cmFuc2l0aW9uYWwtYmFyLXdpZHRoKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zaXRpb25hbC1jb2xvcik7XG4gIH1cbiAgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMDtcbiAgfVxuICAubW9tZW50LW5hbWU6aG92ZXIgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX25vcm1hbGl6ZVN0eWxlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9vcGVuQmxvY2siLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl93aXRoQ3R4IiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQTRERSxVQUFNLFFBQVEsZ0JBQUE7QUFFZCxVQUFNLFFBQVE7QUFRZCxVQUFNLFNBQVMsU0FBUyxNQUFNLE1BQU0sVUFBVSxNQUFNLFFBQVEsQ0FBQztBQUU3RCxVQUFNLGFBQWEsU0FBUztBQUFBLE1BQ3hCLE1BQU87QUFDSCxlQUFPLE9BQU8sUUFBUSxPQUFPLE1BQU0sT0FBTztBQUFBLE1BQzlDO0FBQUEsTUFDQSxJQUFLLE9BQWU7QUFDaEIsY0FBTSxhQUFhLE1BQU0sVUFBVSxFQUFFLE1BQU0sT0FBTztBQUFBLE1BQ3REO0FBQUEsSUFBQSxDQUNIO0FBRUQsVUFBTSxjQUFjLFNBQVM7QUFBQSxNQUN6QixNQUFPO0FBQ0gsZUFBTyxPQUFPLFFBQVEsT0FBTyxNQUFNLFFBQVE7QUFBQSxNQUMvQztBQUFBLE1BQ0EsSUFBSyxPQUFlO0FBQ2hCLGNBQU0sa0JBQWtCLE1BQU0sVUFBVSxLQUFLO0FBQUEsTUFDakQ7QUFBQSxJQUFBLENBQ0g7QUFFRCxV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
