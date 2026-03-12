import { h as createComponent, v as h, p as computed, P as hSlot, Y as defineComponent, a1 as _export_sfc, aa as createElementBlock, a4 as openBlock, b3 as renderSlot } from "./index-DT2JP2rj.js";
const QSpace = createComponent({
  name: "QSpace",
  setup() {
    const space = h("div", { class: "q-space" });
    return () => space;
  }
});
const QBtnGroup = createComponent({
  name: "QBtnGroup",
  props: {
    unelevated: Boolean,
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    square: Boolean,
    push: Boolean,
    stretch: Boolean,
    glossy: Boolean,
    spread: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      const cls = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((t) => props[t] === true).map((t) => `q-btn-group--${t}`).join(" ");
      return `q-btn-group row no-wrap${cls.length !== 0 ? " " + cls : ""}` + (props.spread === true ? " q-btn-group--spread" : " inline");
    });
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DragElement",
  props: {
    // Data type that is sent (moment, property, etc)
    type: {
      type: String,
      default: ""
    },
    // Data to send (most commonly an element id)
    data: {
      type: String,
      default: ""
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    function onDragStart(event) {
      if (event.dataTransfer) {
        event.dataTransfer.setData(`upmt/${props.type}`, props.data);
      }
    }
    const __returned__ = { props, onDragStart };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "dragelement",
    draggable: "true",
    onDragstart: _cache[0] || (_cache[0] = ($event) => $setup.onDragStart($event))
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 32);
}
const DragElement = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-39a02e10"], ["__file", "DragElement.vue"]]);
export {
  DragElement as D,
  QBtnGroup as Q,
  QSpace as a
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ0VsZW1lbnQtQnpDZHgwRl8uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3BhY2UvUVNwYWNlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9idG4tZ3JvdXAvUUJ0bkdyb3VwLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRHJhZ0VsZW1lbnQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGggfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGFjZScsXG5cbiAgc2V0dXAgKCkge1xuICAgIGNvbnN0IHNwYWNlID0gaCgnZGl2JywgeyBjbGFzczogJ3Etc3BhY2UnIH0pXG4gICAgcmV0dXJuICgpID0+IHNwYWNlXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQnRuR3JvdXAnLFxuXG4gIHByb3BzOiB7XG4gICAgdW5lbGV2YXRlZDogQm9vbGVhbixcbiAgICBvdXRsaW5lOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgcHVzaDogQm9vbGVhbixcbiAgICBzdHJldGNoOiBCb29sZWFuLFxuICAgIGdsb3NzeTogQm9vbGVhbixcbiAgICBzcHJlYWQ6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBjbHMgPSBbICd1bmVsZXZhdGVkJywgJ291dGxpbmUnLCAnZmxhdCcsICdyb3VuZGVkJywgJ3NxdWFyZScsICdwdXNoJywgJ3N0cmV0Y2gnLCAnZ2xvc3N5JyBdXG4gICAgICAgIC5maWx0ZXIodCA9PiBwcm9wc1sgdCBdID09PSB0cnVlKVxuICAgICAgICAubWFwKHQgPT4gYHEtYnRuLWdyb3VwLS0keyB0IH1gKS5qb2luKCcgJylcblxuICAgICAgcmV0dXJuIGBxLWJ0bi1ncm91cCByb3cgbm8td3JhcCR7IGNscy5sZW5ndGggIT09IDAgPyAnICcgKyBjbHMgOiAnJyB9YFxuICAgICAgICArIChwcm9wcy5zcHJlYWQgPT09IHRydWUgPyAnIHEtYnRuLWdyb3VwLS1zcHJlYWQnIDogJyBpbmxpbmUnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRyYWdlbGVtZW50XCJcbiAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICBAZHJhZ3N0YXJ0PVwib25EcmFnU3RhcnQoJGV2ZW50KVwiPlxuICAgIDxzbG90PlxuICAgIDwvc2xvdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIC8vIERhdGEgdHlwZSB0aGF0IGlzIHNlbnQgKG1vbWVudCwgcHJvcGVydHksIGV0YylcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgZGVmYXVsdDogXCJcIlxuICAgICAgfSxcbiAgICAgIC8vIERhdGEgdG8gc2VuZCAobW9zdCBjb21tb25seSBhbiBlbGVtZW50IGlkKVxuICAgICAgZGF0YToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBkZWZhdWx0OiBcIlwiXG4gICAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gb25EcmFnU3RhcnQgKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShgdXBtdC8ke3Byb3BzLnR5cGV9YCwgcHJvcHMuZGF0YSlcbiAgICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuICAuZHJhZ2VsZW1lbnQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9yZW5kZXJTbG90Il0sIm1hcHBpbmdzIjoiO0FBSUEsTUFBQSxTQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLFFBQVM7QUFDUCxVQUFNLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxVQUFTLENBQUU7QUFDM0MsV0FBTyxNQUFNO0FBQUEsRUFDZjtBQUNGLENBQUM7QUNORCxNQUFBLFlBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1o7QUFBQSxFQUVFLE1BQU8sT0FBTyxFQUFFLFNBQVM7QUFDdkIsVUFBTSxVQUFVLFNBQVMsTUFBTTtBQUM3QixZQUFNLE1BQU0sQ0FBRSxjQUFjLFdBQVcsUUFBUSxXQUFXLFVBQVUsUUFBUSxXQUFXLFFBQVEsRUFDNUYsT0FBTyxPQUFLLE1BQU8sQ0FBQyxNQUFPLElBQUksRUFDL0IsSUFBSSxPQUFLLGdCQUFpQixDQUFDLEVBQUcsRUFBRSxLQUFLLEdBQUc7QUFFM0MsYUFBTywwQkFBMkIsSUFBSSxXQUFXLElBQUksTUFBTSxNQUFNLEVBQUUsTUFDOUQsTUFBTSxXQUFXLE9BQU8seUJBQXlCO0FBQUEsSUFDeEQsQ0FBQztBQUVELFdBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLFFBQVEsU0FBUyxNQUFNLE1BQU0sT0FBTyxDQUFDO0FBQUEsRUFDdEU7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQyxVQUFNLFFBQVE7QUFhZCxhQUFTLFlBQWEsT0FBa0I7QUFDcEMsVUFBSSxNQUFNLGNBQWM7QUFDcEIsY0FBTSxhQUFhLFFBQVEsUUFBUSxNQUFNLElBQUksSUFBSSxNQUFNLElBQUk7QUFBQSxNQUMvRDtBQUFBLElBQ0o7Ozs7Ozs7c0JBMUJBQSxtQkFLTSxPQUFBO0FBQUEsSUFMRCxPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVCxhQUFTLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBRSxPQUFBLFlBQVksTUFBTTtBQUFBLEVBQUEsR0FBQTtBQUFBLElBQ2pDQyxXQUNPLEtBQUEsUUFBQSxXQUFBLENBQUEsR0FBQSxRQUFBLElBQUE7QUFBQSxFQUFBLEdBQUEsRUFBQTs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDFdfQ==
