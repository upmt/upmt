import { Q as QMenu, f as QItem } from "./format-DDZ-xwpi.js";
import { Q as QList } from "./QList-DaiQNQiC.js";
import { H as defineComponent, _ as _export_sfc, K as createBlock, L as openBlock, M as withCtx, R as createVNode, P as createElementBlock, S as Fragment, U as renderList, V as withDirectives, W as createTextVNode, X as toDisplayString, Y as withModifiers, Q as QBtn } from "./index-DF_kf-vE.js";
import { C as ClosePopup } from "./use-quasar-CgIzz1mJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ElementMenu",
  props: {
    actions: {},
    parameter: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QBtn, {
    class: "menu-icon",
    size: "xs",
    onClick: _cache[0] || (_cache[0] = withModifiers(() => {
    }, ["stop"])),
    flat: "",
    round: "",
    dense: "",
    icon: "more_vert"
  }, {
    default: withCtx(() => [
      createVNode(QMenu, { "touch-position": "" }, {
        default: withCtx(() => [
          createVNode(QList, {
            dense: "",
            style: { "min-width": "100px" }
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($props.actions, ([label, action]) => {
                return withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  key: label,
                  onClick: ($event) => action($props.parameter)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(label), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"])), [
                  [ClosePopup]
                ]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const ElementMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ElementMenu.vue"]]);
export {
  ElementMenu as E
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlbWVudE1lbnUtQ2tycVB6bGguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0VsZW1lbnRNZW51LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLWJ0blxuICAgIGNsYXNzPVwibWVudS1pY29uXCJcbiAgICBzaXplPVwieHNcIlxuICAgIEBjbGljay5zdG9wXG4gICAgZmxhdFxuICAgIHJvdW5kXG4gICAgZGVuc2VcbiAgICBpY29uPVwibW9yZV92ZXJ0XCI+XG4gICAgPHEtbWVudVxuICAgICAgdG91Y2gtcG9zaXRpb24+XG4gICAgICA8cS1saXN0IGRlbnNlIHN0eWxlPVwibWluLXdpZHRoOiAxMDBweFwiPlxuICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgdi1mb3I9XCJbbGFiZWwsIGFjdGlvbl0gaW4gYWN0aW9uc1wiXG4gICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgOmtleT1cImxhYmVsXCJcbiAgICAgICAgICBAY2xpY2s9XCJhY3Rpb24ocGFyYW1ldGVyKVwiXG4gICAgICAgICAgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICB7eyBsYWJlbCB9fVxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgIDwvcS1saXN0PlxuICAgIDwvcS1tZW51PlxuICA8L3EtYnRuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgdHlwZSB7IE5hbWVkQWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy91dGlsLnRzJ1xuXG4gIGRlZmluZVByb3BzPHtcbiAgICAgIGFjdGlvbnM6IE5hbWVkQWN0aW9uW10sXG4gICAgICBwYXJhbWV0ZXI/OiBhbnlcbiAgfT4oKVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX3dpdGhNb2RpZmllcnMiLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQUNFQSxZQXFCUSxNQUFBO0FBQUEsSUFwQk4sT0FBTTtBQUFBLElBQ04sTUFBSztBQUFBLElBQ0osU0FBSyxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQUMsY0FBTixNQUFBO0FBQUEsSUFBQSxHQUFXLENBQUEsTUFBQSxDQUFBO0FBQUEsSUFDWCxNQUFBO0FBQUEsSUFDQSxPQUFBO0FBQUEsSUFDQSxPQUFBO0FBQUEsSUFDQSxNQUFLO0FBQUEsRUFBQSxHQUFBO0FBQUEscUJBQ0wsTUFZUztBQUFBLE1BWlRDLFlBWVMsMkJBWFAsR0FBQSxHQUFBO0FBQUEsUUFBYyxTQUFBQyxRQUNkLE1BU1M7QUFBQSxVQVRURCxZQVNTLE9BQUE7QUFBQSxZQVRELE9BQUE7QUFBQSxZQUFNLE9BQUEsRUFBQSxhQUFBLFFBQUE7QUFBQSxVQUFBLEdBQUE7QUFBQSw2QkFFVixNQUFrQztBQUFBLGVBQUFFLFVBQUEsSUFBQSxHQURwQ0MsbUJBT1NDLFVBQUEsTUFBQUMsV0FObUIsT0FBQSxTQUFPLENBQUEsQ0FBekIsT0FBTyxNQUFNLE1BQUE7b0RBRHZCUCxZQU9TLE9BQUE7QUFBQSxrQkFMUCxXQUFBO0FBQUEsa0JBQ0MsS0FBSztBQUFBLGtCQUNMLFNBQUssQ0FBQSxXQUFFLE9BQU8sT0FBQSxTQUFTO0FBQUEsZ0JBQUEsR0FBQTtBQUFBLG1DQUV4QixNQUFXO0FBQUEsb0JBQUFRLGdCQUFBQyxnQkFBUixLQUFLLEdBQUEsQ0FBQTtBQUFBLGtCQUFBLENBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
