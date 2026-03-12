import { Q as QList, a as QItem } from "./QList-BR6bKSdf.js";
import { Q as QMenu } from "./format-Cbfz1lr-.js";
import { bz as createDirective, bA as isKeyCode, bB as getPortalProxy, bC as closePortals, Y as defineComponent, a1 as _export_sfc, a3 as createBlock, a4 as openBlock, a5 as withCtx, a6 as createVNode, aa as createElementBlock, ag as Fragment, ah as renderList, x as withDirectives, a9 as createTextVNode, ac as toDisplayString, b2 as withModifiers, a8 as QBtn } from "./index-15PRagIZ.js";
function getDepth(value) {
  if (value === false) {
    return 0;
  }
  if (value === true || value === void 0) {
    return 1;
  }
  const depth = parseInt(value, 10);
  return isNaN(depth) ? 0 : depth;
}
const ClosePopup = createDirective(
  {
    name: "close-popup",
    beforeMount(el, { value }) {
      const ctx = {
        depth: getDepth(value),
        handler(evt) {
          ctx.depth !== 0 && setTimeout(() => {
            const proxy = getPortalProxy(el);
            if (proxy !== void 0) {
              closePortals(proxy, evt, ctx.depth);
            }
          });
        },
        handlerKey(evt) {
          isKeyCode(evt, 13) === true && ctx.handler(evt);
        }
      };
      el.__qclosepopup = ctx;
      el.addEventListener("click", ctx.handler);
      el.addEventListener("keyup", ctx.handlerKey);
    },
    updated(el, { value, oldValue }) {
      if (value !== oldValue) {
        el.__qclosepopup.depth = getDepth(value);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qclosepopup;
      el.removeEventListener("click", ctx.handler);
      el.removeEventListener("keyup", ctx.handlerKey);
      delete el.__qclosepopup;
    }
  }
);
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
  ClosePopup as C,
  ElementMenu as E
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlbWVudE1lbnUtcWM5T1ZOUFUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvY2xvc2UtcG9wdXAvQ2xvc2VQb3B1cC5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0VsZW1lbnRNZW51LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBjbG9zZVBvcnRhbHMsIGdldFBvcnRhbFByb3h5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5wb3J0YWwvcG9ydGFsLmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5rZXlib2FyZC9rZXktY29tcG9zaXRpb24uanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtL25vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0uanMnXG5cbi8qXG4gKiBkZXB0aFxuICogICA8IDAgIC0tPiBjbG9zZSBhbGwgY2hhaW5cbiAqICAgMCAgICAtLT4gZGlzYWJsZWRcbiAqICAgPiAwICAtLT4gY2xvc2UgY2hhaW4gdXAgdG8gTiBwYXJlbnRcbiAqL1xuXG5mdW5jdGlvbiBnZXREZXB0aCAodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSB2b2lkIDApIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgY29uc3QgZGVwdGggPSBwYXJzZUludCh2YWx1ZSwgMTApXG4gIHJldHVybiBpc05hTihkZXB0aCkgPyAwIDogZGVwdGhcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlyZWN0aXZlKF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICA/IHsgbmFtZTogJ2Nsb3NlLXBvcHVwJywgZ2V0U1NSUHJvcHMgfVxuICA6IHtcbiAgICAgIG5hbWU6ICdjbG9zZS1wb3B1cCcsXG5cbiAgICAgIGJlZm9yZU1vdW50IChlbCwgeyB2YWx1ZSB9KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICBkZXB0aDogZ2V0RGVwdGgodmFsdWUpLFxuXG4gICAgICAgICAgaGFuZGxlciAoZXZ0KSB7XG4gICAgICAgICAgICAvLyBhbGxvdyBAY2xpY2sgdG8gYmUgZW1pdHRlZFxuICAgICAgICAgICAgY3R4LmRlcHRoICE9PSAwICYmIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcm94eSA9IGdldFBvcnRhbFByb3h5KGVsKVxuICAgICAgICAgICAgICBpZiAocHJveHkgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGNsb3NlUG9ydGFscyhwcm94eSwgZXZ0LCBjdHguZGVwdGgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGhhbmRsZXJLZXkgKGV2dCkge1xuICAgICAgICAgICAgaXNLZXlDb2RlKGV2dCwgMTMpID09PSB0cnVlICYmIGN0eC5oYW5kbGVyKGV2dClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbC5fX3FjbG9zZXBvcHVwID0gY3R4XG5cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjdHguaGFuZGxlcilcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjdHguaGFuZGxlcktleSlcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZWQgKGVsLCB7IHZhbHVlLCBvbGRWYWx1ZSB9KSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICBlbC5fX3FjbG9zZXBvcHVwLmRlcHRoID0gZ2V0RGVwdGgodmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGJlZm9yZVVubW91bnQgKGVsKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcWNsb3NlcG9wdXBcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjdHguaGFuZGxlcilcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjdHguaGFuZGxlcktleSlcbiAgICAgICAgZGVsZXRlIGVsLl9fcWNsb3NlcG9wdXBcbiAgICAgIH1cbiAgICB9XG4pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWJ0blxuICAgIGNsYXNzPVwibWVudS1pY29uXCJcbiAgICBzaXplPVwieHNcIlxuICAgIEBjbGljay5zdG9wXG4gICAgZmxhdFxuICAgIHJvdW5kXG4gICAgZGVuc2VcbiAgICBpY29uPVwibW9yZV92ZXJ0XCI+XG4gICAgPHEtbWVudVxuICAgICAgdG91Y2gtcG9zaXRpb24+XG4gICAgICA8cS1saXN0IGRlbnNlIHN0eWxlPVwibWluLXdpZHRoOiAxMDBweFwiPlxuICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgdi1mb3I9XCJbbGFiZWwsIGFjdGlvbl0gaW4gYWN0aW9uc1wiXG4gICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgOmtleT1cImxhYmVsXCJcbiAgICAgICAgICBAY2xpY2s9XCJhY3Rpb24ocGFyYW1ldGVyKVwiXG4gICAgICAgICAgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICB7eyBsYWJlbCB9fVxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgIDwvcS1saXN0PlxuICAgIDwvcS1tZW51PlxuICA8L3EtYnRuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgdHlwZSB7IE5hbWVkQWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy91dGlsLnRzJ1xuXG4gIGRlZmluZVByb3BzPHtcbiAgICAgIGFjdGlvbnM6IE5hbWVkQWN0aW9uW10sXG4gICAgICBwYXJhbWV0ZXI/OiBhbnlcbiAgfT4oKVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX3dpdGhNb2RpZmllcnMiLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7O0FBWUEsU0FBUyxTQUFVLE9BQU87QUFDeEIsTUFBSSxVQUFVLE9BQU87QUFDbkIsV0FBTztBQUFBLEVBQ1Q7QUFDQSxNQUFJLFVBQVUsUUFBUSxVQUFVLFFBQVE7QUFDdEMsV0FBTztBQUFBLEVBQ1Q7QUFFQSxRQUFNLFFBQVEsU0FBUyxPQUFPLEVBQUU7QUFDaEMsU0FBTyxNQUFNLEtBQUssSUFBSSxJQUFJO0FBQzVCO0FBRUEsTUFBQSxhQUFlO0FBQUEsRUFFWDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBRU4sWUFBYSxJQUFJLEVBQUUsU0FBUztBQUMxQixZQUFNLE1BQU07QUFBQSxRQUNWLE9BQU8sU0FBUyxLQUFLO0FBQUEsUUFFckIsUUFBUyxLQUFLO0FBRVosY0FBSSxVQUFVLEtBQUssV0FBVyxNQUFNO0FBQ2xDLGtCQUFNLFFBQVEsZUFBZSxFQUFFO0FBQy9CLGdCQUFJLFVBQVUsUUFBUTtBQUNwQiwyQkFBYSxPQUFPLEtBQUssSUFBSSxLQUFLO0FBQUEsWUFDcEM7QUFBQSxVQUNGLENBQUM7QUFBQSxRQUNIO0FBQUEsUUFFQSxXQUFZLEtBQUs7QUFDZixvQkFBVSxLQUFLLEVBQUUsTUFBTSxRQUFRLElBQUksUUFBUSxHQUFHO0FBQUEsUUFDaEQ7QUFBQSxNQUFBO0FBR0YsU0FBRyxnQkFBZ0I7QUFFbkIsU0FBRyxpQkFBaUIsU0FBUyxJQUFJLE9BQU87QUFDeEMsU0FBRyxpQkFBaUIsU0FBUyxJQUFJLFVBQVU7QUFBQSxJQUM3QztBQUFBLElBRUEsUUFBUyxJQUFJLEVBQUUsT0FBTyxZQUFZO0FBQ2hDLFVBQUksVUFBVSxVQUFVO0FBQ3RCLFdBQUcsY0FBYyxRQUFRLFNBQVMsS0FBSztBQUFBLE1BQ3pDO0FBQUEsSUFDRjtBQUFBLElBRUEsY0FBZSxJQUFJO0FBQ2pCLFlBQU0sTUFBTSxHQUFHO0FBQ2YsU0FBRyxvQkFBb0IsU0FBUyxJQUFJLE9BQU87QUFDM0MsU0FBRyxvQkFBb0IsU0FBUyxJQUFJLFVBQVU7QUFDOUMsYUFBTyxHQUFHO0FBQUEsSUFDWjtBQUFBLEVBQUE7QUFFTjs7Ozs7Ozs7Ozs7Ozs7O3NCQ2xFRUEsWUFxQlEsTUFBQTtBQUFBLElBcEJOLE9BQU07QUFBQSxJQUNOLE1BQUs7QUFBQSxJQUNKLFNBQUssT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUFDLGNBQU4sTUFBQTtBQUFBLElBQUEsR0FBVyxDQUFBLE1BQUEsQ0FBQTtBQUFBLElBQ1gsTUFBQTtBQUFBLElBQ0EsT0FBQTtBQUFBLElBQ0EsT0FBQTtBQUFBLElBQ0EsTUFBSztBQUFBLEVBQUEsR0FBQTtBQUFBLHFCQUNMLE1BWVM7QUFBQSxNQVpUQyxZQVlTLDJCQVhQLEdBQUEsR0FBQTtBQUFBLFFBQWMsU0FBQUMsUUFDZCxNQVNTO0FBQUEsVUFUVEQsWUFTUyxPQUFBO0FBQUEsWUFURCxPQUFBO0FBQUEsWUFBTSxPQUFBLEVBQUEsYUFBQSxRQUFBO0FBQUEsVUFBQSxHQUFBO0FBQUEsNkJBRVYsTUFBa0M7QUFBQSxlQUFBRSxVQUFBLElBQUEsR0FEcENDLG1CQU9TQyxVQUFBLE1BQUFDLFdBTm1CLE9BQUEsU0FBTyxDQUFBLENBQXpCLE9BQU8sTUFBTSxNQUFBO29EQUR2QlAsWUFPUyxPQUFBO0FBQUEsa0JBTFAsV0FBQTtBQUFBLGtCQUNDLEtBQUs7QUFBQSxrQkFDTCxTQUFLLENBQUEsV0FBRSxPQUFPLE9BQUEsU0FBUztBQUFBLGdCQUFBLEdBQUE7QUFBQSxtQ0FFeEIsTUFBVztBQUFBLG9CQUFBUSxnQkFBQUMsZ0JBQVIsS0FBSyxHQUFBLENBQUE7QUFBQSxrQkFBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
