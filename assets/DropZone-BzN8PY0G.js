import { Q as QList, a as QItem } from "./QList-Be0Kk92v.js";
import { Q as QMenu } from "./format-Dbce-Jpy.js";
import { bB as createDirective, bC as isKeyCode, bD as getPortalProxy, bE as closePortals, Y as defineComponent, a1 as _export_sfc, a3 as createBlock, a4 as openBlock, a5 as withCtx, a6 as createVNode, aa as createElementBlock, ag as Fragment, ah as renderList, x as withDirectives, a9 as createTextVNode, ac as toDisplayString, b4 as withModifiers, a8 as QBtn, p as computed, b3 as renderSlot } from "./index-DT2JP2rj.js";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
const ElementMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "ElementMenu.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DropZone",
  props: {
    data: {
      type: String,
      default: ""
    },
    // Data types that are supposed to be valid.
    // Space-separated list of data-types
    types: {
      type: String,
      default: ""
    }
  },
  emits: [
    "annotation",
    "descriptem",
    "selection",
    "color",
    "moment",
    "project",
    "specificsynchroniccategory",
    "genericsynchroniccategory"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const props = __props;
    const validTypes = computed(() => {
      return props.types.split(/ +/);
    });
    function hasValidType(event) {
      if (!validTypes.value) {
        return true;
      }
      if (!event.dataTransfer) {
        return false;
      }
      const types = [...event.dataTransfer.types];
      for (const t of validTypes.value) {
        if (types.includes(t)) {
          return true;
        }
      }
      return false;
    }
    function onDragOver(event) {
      if (hasValidType(event) && event.currentTarget) {
        event.currentTarget.classList.add("is_droppable");
      }
    }
    function onDragLeave(event) {
      if (event.currentTarget) {
        event.currentTarget.classList.remove("is_droppable");
      }
    }
    function onDrop(event) {
      onDragLeave(event);
      const dt = event.dataTransfer;
      if (!dt) {
        return;
      }
      for (const dragType of dt.types) {
        if (dragType.startsWith("upmt/")) {
          const payload = dt.getData(dragType);
          const itemType = dragType.replace("upmt/", "");
          emit(itemType, payload, props.data, event);
        }
      }
    }
    const __returned__ = { emit, props, validTypes, hasValidType, onDragOver, onDragLeave, onDrop };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "dropzone",
    onDrop: _cache[0] || (_cache[0] = ($event) => $setup.onDrop($event)),
    onDragover: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.onDragOver($event), ["prevent"])),
    onDragleave: _cache[2] || (_cache[2] = withModifiers(($event) => $setup.onDragLeave($event), ["prevent"])),
    onDragenter: _cache[3] || (_cache[3] = withModifiers(() => {
    }, ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 32);
}
const DropZone = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "DropZone.vue"]]);
export {
  ClosePopup as C,
  DropZone as D,
  ElementMenu as E
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcFpvbmUtQnpOOFBZMEcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvY2xvc2UtcG9wdXAvQ2xvc2VQb3B1cC5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0VsZW1lbnRNZW51LnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Ryb3Bab25lLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBjbG9zZVBvcnRhbHMsIGdldFBvcnRhbFByb3h5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5wb3J0YWwvcG9ydGFsLmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5rZXlib2FyZC9rZXktY29tcG9zaXRpb24uanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtL25vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0uanMnXG5cbi8qXG4gKiBkZXB0aFxuICogICA8IDAgIC0tPiBjbG9zZSBhbGwgY2hhaW5cbiAqICAgMCAgICAtLT4gZGlzYWJsZWRcbiAqICAgPiAwICAtLT4gY2xvc2UgY2hhaW4gdXAgdG8gTiBwYXJlbnRcbiAqL1xuXG5mdW5jdGlvbiBnZXREZXB0aCAodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSB2b2lkIDApIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgY29uc3QgZGVwdGggPSBwYXJzZUludCh2YWx1ZSwgMTApXG4gIHJldHVybiBpc05hTihkZXB0aCkgPyAwIDogZGVwdGhcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlyZWN0aXZlKF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICA/IHsgbmFtZTogJ2Nsb3NlLXBvcHVwJywgZ2V0U1NSUHJvcHMgfVxuICA6IHtcbiAgICAgIG5hbWU6ICdjbG9zZS1wb3B1cCcsXG5cbiAgICAgIGJlZm9yZU1vdW50IChlbCwgeyB2YWx1ZSB9KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICBkZXB0aDogZ2V0RGVwdGgodmFsdWUpLFxuXG4gICAgICAgICAgaGFuZGxlciAoZXZ0KSB7XG4gICAgICAgICAgICAvLyBhbGxvdyBAY2xpY2sgdG8gYmUgZW1pdHRlZFxuICAgICAgICAgICAgY3R4LmRlcHRoICE9PSAwICYmIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcm94eSA9IGdldFBvcnRhbFByb3h5KGVsKVxuICAgICAgICAgICAgICBpZiAocHJveHkgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGNsb3NlUG9ydGFscyhwcm94eSwgZXZ0LCBjdHguZGVwdGgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGhhbmRsZXJLZXkgKGV2dCkge1xuICAgICAgICAgICAgaXNLZXlDb2RlKGV2dCwgMTMpID09PSB0cnVlICYmIGN0eC5oYW5kbGVyKGV2dClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbC5fX3FjbG9zZXBvcHVwID0gY3R4XG5cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjdHguaGFuZGxlcilcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjdHguaGFuZGxlcktleSlcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZWQgKGVsLCB7IHZhbHVlLCBvbGRWYWx1ZSB9KSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICBlbC5fX3FjbG9zZXBvcHVwLmRlcHRoID0gZ2V0RGVwdGgodmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGJlZm9yZVVubW91bnQgKGVsKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcWNsb3NlcG9wdXBcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjdHguaGFuZGxlcilcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjdHguaGFuZGxlcktleSlcbiAgICAgICAgZGVsZXRlIGVsLl9fcWNsb3NlcG9wdXBcbiAgICAgIH1cbiAgICB9XG4pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWJ0blxuICAgIGNsYXNzPVwibWVudS1pY29uXCJcbiAgICBzaXplPVwieHNcIlxuICAgIEBjbGljay5zdG9wXG4gICAgZmxhdFxuICAgIHJvdW5kXG4gICAgZGVuc2VcbiAgICBpY29uPVwibW9yZV92ZXJ0XCI+XG4gICAgPHEtbWVudVxuICAgICAgdG91Y2gtcG9zaXRpb24+XG4gICAgICA8cS1saXN0IGRlbnNlIHN0eWxlPVwibWluLXdpZHRoOiAxMDBweFwiPlxuICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgdi1mb3I9XCJbbGFiZWwsIGFjdGlvbl0gaW4gYWN0aW9uc1wiXG4gICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgOmtleT1cImxhYmVsXCJcbiAgICAgICAgICBAY2xpY2s9XCJhY3Rpb24ocGFyYW1ldGVyKVwiXG4gICAgICAgICAgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICB7eyBsYWJlbCB9fVxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgIDwvcS1saXN0PlxuICAgIDwvcS1tZW51PlxuICA8L3EtYnRuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgdHlwZSB7IE5hbWVkQWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy91dGlsLnRzJ1xuXG4gIGRlZmluZVByb3BzPHtcbiAgICAgIGFjdGlvbnM6IE5hbWVkQWN0aW9uW10sXG4gICAgICBwYXJhbWV0ZXI/OiBhbnlcbiAgfT4oKVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJkcm9wem9uZVwiXG4gICAgICAgQGRyb3A9XCJvbkRyb3AoJGV2ZW50KVwiXG4gICAgICAgQGRyYWdvdmVyLnByZXZlbnQ9XCJvbkRyYWdPdmVyKCRldmVudClcIlxuICAgICAgIEBkcmFnbGVhdmUucHJldmVudD1cIm9uRHJhZ0xlYXZlKCRldmVudClcIlxuICAgICAgIEBkcmFnZW50ZXIucHJldmVudD5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbiAgY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzKFsgJ2Fubm90YXRpb24nLCAnZGVzY3JpcHRlbScsICdzZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbW9tZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2plY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnknLCAnZ2VuZXJpY3N5bmNocm9uaWNjYXRlZ29yeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgZGF0YToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBkZWZhdWx0OiBcIlwiXG4gICAgICB9LFxuICAgICAgLy8gRGF0YSB0eXBlcyB0aGF0IGFyZSBzdXBwb3NlZCB0byBiZSB2YWxpZC5cbiAgICAgIC8vIFNwYWNlLXNlcGFyYXRlZCBsaXN0IG9mIGRhdGEtdHlwZXNcbiAgICAgIHR5cGVzOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCB2YWxpZFR5cGVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLnR5cGVzLnNwbGl0KC8gKy8pXG4gIH0pXG5cbiAgZnVuY3Rpb24gaGFzVmFsaWRUeXBlIChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICBpZiAoIXZhbGlkVHlwZXMudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKCFldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGNvbnN0IHR5cGVzID0gWyAuLi5ldmVudC5kYXRhVHJhbnNmZXIudHlwZXMgXVxuICAgICAgZm9yIChjb25zdCB0IG9mIHZhbGlkVHlwZXMudmFsdWUpIHtcbiAgICAgICAgICBpZiAodHlwZXMuaW5jbHVkZXModCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ092ZXIgKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgIGlmIChoYXNWYWxpZFR5cGUoZXZlbnQpICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZCgnaXNfZHJvcHBhYmxlJylcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ0xlYXZlIChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKCdpc19kcm9wcGFibGUnKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ecm9wIChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICBvbkRyYWdMZWF2ZShldmVudClcbiAgICAgIGNvbnN0IGR0ID0gZXZlbnQuZGF0YVRyYW5zZmVyXG4gICAgICBpZiAoIWR0KSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvLyBXZSBoYW5kbGUgZHJhZyB0eXBlcyB0aGF0IGFyZSBpbiB0aGUgZm9ybSB1cG10L0VMRU1FTlRfTkFNRVxuICAgICAgZm9yIChjb25zdCBkcmFnVHlwZSBvZiBkdC50eXBlcykge1xuICAgICAgICAgIGlmIChkcmFnVHlwZS5zdGFydHNXaXRoKCd1cG10LycpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBkdC5nZXREYXRhKGRyYWdUeXBlKVxuICAgICAgICAgICAgICBjb25zdCBpdGVtVHlwZSA9IGRyYWdUeXBlLnJlcGxhY2UoJ3VwbXQvJywgJycpXG4gICAgICAgICAgICAgIGVtaXQoKGl0ZW1UeXBlIGFzIGFueSksIHBheWxvYWQsIHByb3BzLmRhdGEsIGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48c3R5bGU+XG4gIC5kcm9wem9uZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5kcm9wem9uZS5lbXB0eS1wYWRkaW5nIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgfVxuICAuZHJvcHpvbmUuZGVmYXVsdC1oZWlnaHQge1xuICAgICAgbWluLWhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gIH1cbiAgLmlzX2Ryb3BwYWJsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIGdyZXk7XG4gIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX3dpdGhNb2RpZmllcnMiLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9yZW5kZXJTbG90Il0sIm1hcHBpbmdzIjoiOzs7QUFZQSxTQUFTLFNBQVUsT0FBTztBQUN4QixNQUFJLFVBQVUsT0FBTztBQUNuQixXQUFPO0FBQUEsRUFDVDtBQUNBLE1BQUksVUFBVSxRQUFRLFVBQVUsUUFBUTtBQUN0QyxXQUFPO0FBQUEsRUFDVDtBQUVBLFFBQU0sUUFBUSxTQUFTLE9BQU8sRUFBRTtBQUNoQyxTQUFPLE1BQU0sS0FBSyxJQUFJLElBQUk7QUFDNUI7QUFFQSxNQUFBLGFBQWU7QUFBQSxFQUVYO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFFTixZQUFhLElBQUksRUFBRSxTQUFTO0FBQzFCLFlBQU0sTUFBTTtBQUFBLFFBQ1YsT0FBTyxTQUFTLEtBQUs7QUFBQSxRQUVyQixRQUFTLEtBQUs7QUFFWixjQUFJLFVBQVUsS0FBSyxXQUFXLE1BQU07QUFDbEMsa0JBQU0sUUFBUSxlQUFlLEVBQUU7QUFDL0IsZ0JBQUksVUFBVSxRQUFRO0FBQ3BCLDJCQUFhLE9BQU8sS0FBSyxJQUFJLEtBQUs7QUFBQSxZQUNwQztBQUFBLFVBQ0YsQ0FBQztBQUFBLFFBQ0g7QUFBQSxRQUVBLFdBQVksS0FBSztBQUNmLG9CQUFVLEtBQUssRUFBRSxNQUFNLFFBQVEsSUFBSSxRQUFRLEdBQUc7QUFBQSxRQUNoRDtBQUFBLE1BQUE7QUFHRixTQUFHLGdCQUFnQjtBQUVuQixTQUFHLGlCQUFpQixTQUFTLElBQUksT0FBTztBQUN4QyxTQUFHLGlCQUFp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
