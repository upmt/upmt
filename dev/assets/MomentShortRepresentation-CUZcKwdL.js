import { Q as QTooltip } from "./QTooltip-D57IcaGC.js";
import { N as NoteIcon, Q as QPopupEdit } from "./QSlider-CQOqkv49.js";
import { M as defineComponent, N as useProjectStore, b as computed, _ as _export_sfc, af as resolveComponent, X as createElementBlock, R as openBlock, Y as createVNode, U as withCtx, V as createCommentVNode, ag as normalizeStyle, ae as normalizeClass, aa as createBaseVNode, P as createBlock, a1 as createTextVNode, a2 as toDisplayString, Z as Fragment, $ as renderList } from "./index-zU2rftsz.js";
import { D as DropZone, C as ColorizeIcon } from "./DropZone-DF7OQInd.js";
import { M as MomentNameInput } from "./MomentNameInput-CXXf9N-b.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MomentShortRepresentation",
  props: {
    momentId: { type: String, default: "" },
    genericGraphs: { type: Object, default: null },
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
    const topBorderStyle = computed(() => {
      if (moment.value && moment.value.genericdiachroniccategories.length) {
        const category = moment.value.genericdiachroniccategories[0];
        if (category && category.color) {
          const color = category.color || "black";
          return `6px solid ${color}`;
        }
      }
      return "";
    });
    const genericDiachronicLabel = computed(() => {
      if (moment.value && moment.value.genericdiachroniccategories.length) {
        return moment.value.genericdiachroniccategories.map((gcd) => gcd.fullName).join(", ");
      } else {
        return "";
      }
    });
    function droppedGenericDiachronicCategory(categoryId) {
      store.addGenericDiachronicCategoryToMoment(
        categoryId,
        props.momentId
      );
    }
    function droppedColor(color) {
      store.updateMomentColor(props.momentId, color);
    }
    const __returned__ = { store, props, moment, momentName, momentColor, topBorderStyle, genericDiachronicLabel, droppedGenericDiachronicCategory, droppedColor, ColorizeIcon, DropZone, MomentNameInput, NoteIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["data-moment"];
const _hoisted_2 = ["data-moment"];
const _hoisted_3 = { class: "moment-name" };
const _hoisted_4 = { key: 2 };
const _hoisted_5 = { key: 3 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MomentShortRepresentation = resolveComponent("MomentShortRepresentation", true);
  return openBlock(), createElementBlock("div", {
    ref: "container",
    "data-moment": $props.momentId
  }, [
    createVNode($setup["DropZone"], {
      data: "header",
      types: "upmt/color upmt/genericdiachroniccategory",
      class: "row full-width justify-center moment-header q-pa-xs",
      onGenericdiachroniccategory: $setup.droppedGenericDiachronicCategory,
      onColor: $setup.droppedColor
    }, {
      default: withCtx(() => [
        $setup.moment ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["moment", { "transitional": $setup.moment.isTransitional }]),
          style: normalizeStyle({
            backgroundColor: $setup.moment.color || "transparent",
            borderTop: $setup.topBorderStyle
          }),
          "data-moment": $setup.moment.id
        }, [
          createBaseVNode("span", _hoisted_3, [
            $props.genericDiachronicMode == "replace" ? (openBlock(), createBlock(QTooltip, {
              key: 0,
              class: "bg-white text-black shadow-1",
              anchor: "top left",
              self: "bottom left"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($setup.momentName), 1)
              ]),
              _: 1
            })) : (openBlock(), createBlock(QTooltip, {
              key: 1,
              class: "bg-white text-black shadow-1",
              anchor: "top left",
              self: "bottom left"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($setup.genericDiachronicLabel), 1)
              ]),
              _: 1
            })),
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
                  momentId: m.id,
                  genericGraphs: $props.genericGraphs,
                  maximumDepth: $props.maximumDepth,
                  momentDepth: $props.momentDepth + 1,
                  genericDiachronicMode: $props.genericDiachronicMode,
                  layout: $props.layout
                }, null, 8, ["momentId", "genericGraphs", "maximumDepth", "momentDepth", "genericDiachronicMode", "layout"])
              ]);
            }), 128))
          ], 2)) : createCommentVNode("", true)
        ], 14, _hoisted_2)) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ], 8, _hoisted_1);
}
const MomentShortRepresentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1c140d7e"], ["__file", "MomentShortRepresentation.vue"]]);
export {
  MomentShortRepresentation as M
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi1DVVpjS3dkTC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgOmRhdGEtbW9tZW50PVwibW9tZW50SWRcIj5cblxuICAgICAgPERyb3Bab25lIGRhdGE9XCJoZWFkZXJcIlxuICAgICAgICAgICAgICAgIHR5cGVzPVwidXBtdC9jb2xvciB1cG10L2dlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicm93IGZ1bGwtd2lkdGgganVzdGlmeS1jZW50ZXIgbW9tZW50LWhlYWRlciBxLXBhLXhzXCJcbiAgICAgICAgICAgICAgICBAZ2VuZXJpY2RpYWNocm9uaWNjYXRlZ29yeT1cImRyb3BwZWRHZW5lcmljRGlhY2hyb25pY0NhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICBAY29sb3I9XCJkcm9wcGVkQ29sb3JcIj5cblxuICAgICAgICA8ZGl2IDpjbGFzcz1cIlsgJ21vbWVudCcsIHsgJ3RyYW5zaXRpb25hbCc6IG1vbWVudC5pc1RyYW5zaXRpb25hbCB9IF1cIlxuICAgICAgICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBtb21lbnQuY29sb3IgfHwgJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wOiB0b3BCb3JkZXJTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgdi1pZj1cIm1vbWVudFwiXG4gICAgICAgICAgICAgOmRhdGEtbW9tZW50PVwibW9tZW50LmlkXCI+XG5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vbWVudC1uYW1lXCI+XG4gICAgICAgICAgICA8cS10b29sdGlwIHYtaWY9XCJnZW5lcmljRGlhY2hyb25pY01vZGUgPT0gJ3JlcGxhY2UnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiZy13aGl0ZSB0ZXh0LWJsYWNrIHNoYWRvdy0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yPVwidG9wIGxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICBzZWxmPVwiYm90dG9tIGxlZnRcIj5cbiAgICAgICAgICAgICAge3sgbW9tZW50TmFtZSB9fVxuICAgICAgICAgICAgPC9xLXRvb2x0aXA+XG4gICAgICAgICAgICA8cS10b29sdGlwIHYtZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJnLXdoaXRlIHRleHQtYmxhY2sgc2hhZG93LTFcIlxuICAgICAgICAgICAgICAgICAgICAgICBhbmNob3I9XCJ0b3AgbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgIHNlbGY9XCJib3R0b20gbGVmdFwiPlxuICAgICAgICAgICAgICB7eyBnZW5lcmljRGlhY2hyb25pY0xhYmVsIH19XG4gICAgICAgICAgICA8L3EtdG9vbHRpcD5cblxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cImdlbmVyaWNEaWFjaHJvbmljTW9kZSA9PSAncmVwbGFjZSdcIj5cbiAgICAgICAgICAgICAge3sgZ2VuZXJpY0RpYWNocm9uaWNMYWJlbCB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gdi1lbHNlPnt7IG1vbWVudE5hbWUgfX1cbiAgICAgICAgICAgICAgPHEtcG9wdXAtZWRpdCB2LW1vZGVsPVwibW9tZW50TmFtZVwiIGF1dG8tc2F2ZSB2LXNsb3Q9XCJzY29wZVwiPlxuICAgICAgICAgICAgICAgIDxNb21lbnROYW1lSW5wdXQgQGNoYW5nZT1cInNjb3BlLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bW9tZW50PVwibW9tZW50XCIgLz5cbiAgICAgICAgICAgICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8Q29sb3JpemVJY29uXG4gICAgICAgICAgICAgIGNsYXNzPVwib24tbmFtZS1ob3ZlclwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJtb21lbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8Tm90ZUljb25cbiAgICAgICAgICAgICAgOmVsZW1lbnQ9XCJtb21lbnRcIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb21lbnQtY2hpbGRyZW5cIlxuICAgICAgICAgICAgICAgOmNsYXNzPVwibGF5b3V0XCJcbiAgICAgICAgICAgICAgIHYtaWY9XCJtb21lbnREZXB0aCA8IG1heGltdW1EZXB0aFwiPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIm0gaW4gbW9tZW50LmNoaWxkcmVuXCJcbiAgICAgICAgICAgICA6a2V5PVwibS5pZFwiPlxuICAgICAgICAgICAgICA8TW9tZW50U2hvcnRSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgIDptb21lbnRJZD1cIm0uaWRcIlxuICAgICAgICAgICAgICAgIDpnZW5lcmljR3JhcGhzPVwiZ2VuZXJpY0dyYXBoc1wiXG4gICAgICAgICAgICAgICAgOm1heGltdW1EZXB0aD1cIm1heGltdW1EZXB0aFwiXG4gICAgICAgICAgICAgICAgOm1vbWVudERlcHRoPVwibW9tZW50RGVwdGggKyAxXCJcbiAgICAgICAgICAgICAgICA6Z2VuZXJpY0RpYWNocm9uaWNNb2RlPVwiZ2VuZXJpY0RpYWNocm9uaWNNb2RlXCJcbiAgICAgICAgICAgICAgICA6bGF5b3V0PVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgIDwvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ecm9wWm9uZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgQ29sb3JpemVJY29uIGZyb20gJy4vQ29sb3JpemVJY29uLnZ1ZSdcbiAgaW1wb3J0IERyb3Bab25lIGZyb20gJy4vRHJvcFpvbmUudnVlJ1xuICBpbXBvcnQgTW9tZW50TmFtZUlucHV0IGZyb20gJy4vTW9tZW50TmFtZUlucHV0LnZ1ZSdcbiAgaW1wb3J0IE5vdGVJY29uIGZyb20gJy4vTm90ZUljb24udnVlJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIG1vbWVudElkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxuICAgICAgZ2VuZXJpY0dyYXBoczogeyB0eXBlOiBPYmplY3QsIGRlZmF1bHQ6IG51bGwgfSxcbiAgICAgIG1vbWVudERlcHRoOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxuICAgICAgbWF4aW11bURlcHRoOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxuICAgICAgbGF5b3V0OiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJob3Jpem9udGFsXCIgfSxcbiAgICAgIGdlbmVyaWNEaWFjaHJvbmljTW9kZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfVxuICB9KVxuXG4gIGNvbnN0IG1vbWVudCA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldE1vbWVudChwcm9wcy5tb21lbnRJZCkpXG5cbiAgY29uc3QgbW9tZW50TmFtZSA9IGNvbXB1dGVkKHtcbiAgICAgIGdldCAoKSB7XG4gICAgICAgICAgcmV0dXJuIG1vbWVudC52YWx1ZSA/IG1vbWVudC52YWx1ZS5uYW1lIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAodmFsdWU6IHN0cmluZykge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudChwcm9wcy5tb21lbnRJZCwgeyBuYW1lOiB2YWx1ZSB9KVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vbWVudENvbG9yID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICByZXR1cm4gbW9tZW50LnZhbHVlID8gbW9tZW50LnZhbHVlLmNvbG9yIDogXCJcIlxuICAgICAgfSxcbiAgICAgIHNldCAoY29sb3I6IHN0cmluZykge1xuICAgICAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudENvbG9yKHByb3BzLm1vbWVudElkLCBjb2xvcilcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCB0b3BCb3JkZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChtb21lbnQudmFsdWUgJiYgbW9tZW50LnZhbHVlLmdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcmllcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IG1vbWVudC52YWx1ZS5nZW5lcmljZGlhY2hyb25pY2NhdGVnb3JpZXNbMF1cbiAgICAgICAgICBpZiAoY2F0ZWdvcnkgJiYgY2F0ZWdvcnkuY29sb3IpIHtcbiAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjYXRlZ29yeS5jb2xvciB8fCAnYmxhY2snXG4gICAgICAgICAgICAgIHJldHVybiBgNnB4IHNvbGlkICR7Y29sb3J9YFxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBcIlwiXG4gIH0pXG5cbiAgY29uc3QgZ2VuZXJpY0RpYWNocm9uaWNMYWJlbCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChtb21lbnQudmFsdWUgJiYgbW9tZW50LnZhbHVlLmdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcmllcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbW9tZW50LnZhbHVlLmdlbmVyaWNkaWFjaHJvbmljY2F0ZWdvcmllcy5tYXAoZ2NkID0+IGdjZC5mdWxsTmFtZSkuam9pbihcIiwgXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gZHJvcHBlZEdlbmVyaWNEaWFjaHJvbmljQ2F0ZWdvcnkgKGNhdGVnb3J5SWQ6IHN0cmluZykge1xuICAgICAgc3RvcmUuYWRkR2VuZXJpY0RpYWNocm9uaWNDYXRlZ29yeVRvTW9tZW50KGNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubW9tZW50SWQpXG4gIH1cblxuICBmdW5jdGlvbiBkcm9wcGVkQ29sb3IgKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgIHN0b3JlLnVwZGF0ZU1vbWVudENvbG9yKHByb3BzLm1vbWVudElkLCBjb2xvcilcbiAgfVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLmhlYWRlci1jbGFzcyB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubW9tZW50LWNoaWxkcmVuIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubW9tZW50LWNoaWxkcmVuLnZlcnRpY2FsIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLm1vbWVudC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLm1vbWVudCB7XG4gICAgICBtaW4td2lkdGg6IHZhcigtLW1vbWVudC1taW5pbXVtLXdpZHRoKTtcbiAgICAgIG1heC13aWR0aDogdmFyKC0tbW9tZW50LW1heGltdW0td2lkdGgpO1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICB9XG4gIC5tb21lbnQtbmFtZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLm1vbWVudC1ib2R5IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC50cmFuc2l0aW9uYWwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNpdGlvbmFsLWNvbG9yKTtcbiAgfVxuICAudHJhbnNpdGlvbmFsOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiBjYWxjKCA1MCUgLSB2YXIoLS10cmFuc2l0aW9uYWwtYmFyLXdpZHRoKSAvIDIgKTtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGhlaWdodDogODB2aDtcbiAgICAgIHdpZHRoOiB2YXIoLS10cmFuc2l0aW9uYWwtYmFyLXdpZHRoKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zaXRpb25hbC1jb2xvcik7XG4gIH1cbiAgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMDtcbiAgfVxuICAubW9tZW50LW5hbWU6aG92ZXIgLm9uLW5hbWUtaG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX25vcm1hbGl6ZVN0eWxlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX29wZW5CbG9jayIsIl93aXRoQ3R4IiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkVFLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sUUFBUTtBQVNkLFVBQU0sU0FBUyxTQUFTLE1BQU0sTUFBTSxVQUFVLE1BQU0sUUFBUSxDQUFDO0FBRTdELFVBQU0sYUFBYSxTQUFTO0FBQUEsTUFDeEIsTUFBTztBQUNILGVBQU8sT0FBTyxRQUFRLE9BQU8sTUFBTSxPQUFPO0FBQUEsTUFDOUM7QUFBQSxNQUNBLElBQUssT0FBZTtBQUNoQixjQUFNLGFBQWEsTUFBTSxVQUFVLEVBQUUsTUFBTSxPQUFPO0FBQUEsTUFDdEQ7QUFBQSxJQUFBLENBQ0g7QUFFRCxVQUFNLGNBQWMsU0FBUztBQUFBLE1BQ3pCLE1BQU87QUFDSCxlQUFPLE9BQU8sUUFBUSxPQUFPLE1BQU0sUUFBUTtBQUFBLE1BQy9DO0FBQUEsTUFDQSxJQUFLLE9BQWU7QUFDaEIsY0FBTSxrQkFBa0IsTUFBTSxVQUFVLEtBQUs7QUFBQSxNQUNqRDtBQUFBLElBQUEsQ0FDSDtBQUVELFVBQU0saUJBQWlCLFNBQVMsTUFBTTtBQUNsQyxVQUFJLE9BQU8sU0FBUyxPQUFPLE1BQU0sNEJBQTRCLFFBQVE7QUFDakUsY0FBTSxXQUFXLE9BQU8sTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxZQUFJLFlBQVksU0FBUyxPQUFPO0FBQzVCLGdCQUFNLFFBQVEsU0FBUyxTQUFTO0FBQ2hDLGlCQUFPLGFBQWEsS0FBSztBQUFBLFFBQzdCO0FBQUEsTUFDSjtBQUNBLGFBQU87QUFBQSxJQUNYLENBQUM7QUFFRCxVQUFNLHlCQUF5QixTQUFTLE1BQU07QUFDMUMsVUFBSSxPQUFPLFNBQVMsT0FBTyxNQUFNLDRCQUE0QixRQUFRO0FBQ2pFLGVBQU8sT0FBTyxNQUFNLDRCQUE0QixJQUFJLFNBQU8sSUFBSSxRQUFRLEVBQUUsS0FBSyxJQUFJO0FBQUEsTUFDdEYsT0FB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
