import { h as createComponent, p as computed, v as h, P as hSlot, a$ as useRouterLinkProps, H as useDarkProps, j as getCurrentInstance, I as useDark, b0 as useRouterLink, r as ref, bC as isKeyCode, bh as stopAndPrevent, t as hUniqueSlot } from "./index-DT2JP2rj.js";
const QItemSection = createComponent({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => `q-item__section column q-item__section--${props.avatar === true || props.side === true || props.thumbnail === true ? "side" : "main"}` + (props.top === true ? " q-item__section--top justify-start" : " justify-center") + (props.avatar === true ? " q-item__section--avatar" : "") + (props.thumbnail === true ? " q-item__section--thumbnail" : "") + (props.noWrap === true ? " q-item__section--nowrap" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
const QItem = createComponent({
  name: "QItem",
  props: {
    ...useDarkProps,
    ...useRouterLinkProps,
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  },
  emits: ["click", "keyup"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const { hasLink, linkAttrs, linkClass, linkTag, navigateOnClick } = useRouterLink();
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    const isActionable = computed(
      () => props.clickable === true || hasLink.value === true || props.tag === "label"
    );
    const isClickable = computed(
      () => props.disable !== true && isActionable.value === true
    );
    const classes = computed(
      () => "q-item q-item-type row no-wrap" + (props.dense === true ? " q-item--dense" : "") + (isDark.value === true ? " q-item--dark" : "") + (hasLink.value === true && props.active === null ? linkClass.value : props.active === true ? ` q-item--active${props.activeClass !== void 0 ? ` ${props.activeClass}` : ""}` : "") + (props.disable === true ? " disabled" : "") + (isClickable.value === true ? " q-item--clickable q-link cursor-pointer " + (props.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (props.focused === true ? " q-manual-focusable--focused" : "") : "")
    );
    const style = computed(() => {
      if (props.insetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: 16 + props.insetLevel * 56 + "px"
      };
    });
    function onClick(e) {
      if (isClickable.value === true) {
        if (blurTargetRef.value !== null && e.qAvoidFocus !== true) {
          if (e.qKeyEvent !== true && document.activeElement === rootRef.value) {
            blurTargetRef.value.focus();
          } else if (document.activeElement === blurTargetRef.value) {
            rootRef.value.focus();
          }
        }
        navigateOnClick(e);
      }
    }
    function onKeyup(e) {
      if (isClickable.value === true && isKeyCode(e, [13, 32]) === true) {
        stopAndPrevent(e);
        e.qKeyEvent = true;
        const evt = new MouseEvent("click", e);
        evt.qKeyEvent = true;
        rootRef.value.dispatchEvent(evt);
      }
      emit("keyup", e);
    }
    function getContent() {
      const child = hUniqueSlot(slots.default, []);
      isClickable.value === true && child.unshift(
        h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef })
      );
      return child;
    }
    return () => {
      const data = {
        ref: rootRef,
        class: classes.value,
        style: style.value,
        role: "listitem",
        onClick,
        onKeyup
      };
      if (isClickable.value === true) {
        data.tabindex = props.tabindex || "0";
        Object.assign(data, linkAttrs.value);
      } else if (isActionable.value === true) {
        data["aria-disabled"] = "true";
      }
      return h(
        linkTag.value,
        data,
        getContent()
      );
    };
  }
});
const roleAttrExceptions = ["ul", "ol"];
const QList = createComponent({
  name: "QList",
  props: {
    ...useDarkProps,
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const role = computed(
      () => roleAttrExceptions.includes(props.tag) ? null : "list"
    );
    const classes = computed(
      () => "q-list" + (props.bordered === true ? " q-list--bordered" : "") + (props.dense === true ? " q-list--dense" : "") + (props.separator === true ? " q-list--separator" : "") + (isDark.value === true ? " q-list--dark" : "") + (props.padding === true ? " q-list--padding" : "")
    );
    return () => h(props.tag, { class: classes.value, role: role.value }, hSlot(slots.default));
  }
});
export {
  QList as Q,
  QItem as a,
  QItemSection as b
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUxpc3QtQmUwS2s5MnYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvaXRlbS9RSXRlbVNlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2l0ZW0vUUl0ZW0uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2l0ZW0vUUxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUl0ZW1TZWN0aW9uJyxcblxuICBwcm9wczoge1xuICAgIGF2YXRhcjogQm9vbGVhbixcbiAgICB0aHVtYm5haWw6IEJvb2xlYW4sXG4gICAgc2lkZTogQm9vbGVhbixcbiAgICB0b3A6IEJvb2xlYW4sXG4gICAgbm9XcmFwOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWl0ZW1fX3NlY3Rpb24gY29sdW1uJ1xuICAgICAgKyBgIHEtaXRlbV9fc2VjdGlvbi0tJHsgcHJvcHMuYXZhdGFyID09PSB0cnVlIHx8IHByb3BzLnNpZGUgPT09IHRydWUgfHwgcHJvcHMudGh1bWJuYWlsID09PSB0cnVlID8gJ3NpZGUnIDogJ21haW4nIH1gXG4gICAgICArIChwcm9wcy50b3AgPT09IHRydWUgPyAnIHEtaXRlbV9fc2VjdGlvbi0tdG9wIGp1c3RpZnktc3RhcnQnIDogJyBqdXN0aWZ5LWNlbnRlcicpXG4gICAgICArIChwcm9wcy5hdmF0YXIgPT09IHRydWUgPyAnIHEtaXRlbV9fc2VjdGlvbi0tYXZhdGFyJyA6ICcnKVxuICAgICAgKyAocHJvcHMudGh1bWJuYWlsID09PSB0cnVlID8gJyBxLWl0ZW1fX3NlY3Rpb24tLXRodW1ibmFpbCcgOiAnJylcbiAgICAgICsgKHByb3BzLm5vV3JhcCA9PT0gdHJ1ZSA/ICcgcS1pdGVtX19zZWN0aW9uLS1ub3dyYXAnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWRhcmsvdXNlLWRhcmsuanMnXG5pbXBvcnQgdXNlUm91dGVyTGluaywgeyB1c2VSb3V0ZXJMaW5rUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1yb3V0ZXItbGluay91c2Utcm91dGVyLWxpbmsuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhVbmlxdWVTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUua2V5Ym9hcmQva2V5LWNvbXBvc2l0aW9uLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUl0ZW0nLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIC4uLnVzZVJvdXRlckxpbmtQcm9wcyxcblxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RpdidcbiAgICB9LFxuXG4gICAgYWN0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICBjbGlja2FibGU6IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgaW5zZXRMZXZlbDogTnVtYmVyLFxuXG4gICAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICAgIGZvY3VzZWQ6IEJvb2xlYW4sXG4gICAgbWFudWFsRm9jdXM6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogWyAnY2xpY2snLCAna2V5dXAnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCB7IGhhc0xpbmssIGxpbmtBdHRycywgbGlua0NsYXNzLCBsaW5rVGFnLCBuYXZpZ2F0ZU9uQ2xpY2sgfSA9IHVzZVJvdXRlckxpbmsoKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGJsdXJUYXJnZXRSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGlzQWN0aW9uYWJsZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5jbGlja2FibGUgPT09IHRydWVcbiAgICAgICAgfHwgaGFzTGluay52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICB8fCBwcm9wcy50YWcgPT09ICdsYWJlbCdcbiAgICApXG5cbiAgICBjb25zdCBpc0NsaWNrYWJsZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIGlzQWN0aW9uYWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtaXRlbSBxLWl0ZW0tdHlwZSByb3cgbm8td3JhcCdcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLWl0ZW0tLWRlbnNlJyA6ICcnKVxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLWl0ZW0tLWRhcmsnIDogJycpXG4gICAgICArIChcbiAgICAgICAgaGFzTGluay52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5hY3RpdmUgPT09IG51bGxcbiAgICAgICAgICA/IGxpbmtDbGFzcy52YWx1ZVxuICAgICAgICAgIDogKFxuICAgICAgICAgICAgICBwcm9wcy5hY3RpdmUgPT09IHRydWVcbiAgICAgICAgICAgICAgICA/IGAgcS1pdGVtLS1hY3RpdmUkeyBwcm9wcy5hY3RpdmVDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5hY3RpdmVDbGFzcyB9YCA6ICcnIH1gXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJycpXG4gICAgICArIChcbiAgICAgICAgaXNDbGlja2FibGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICcgcS1pdGVtLS1jbGlja2FibGUgcS1saW5rIGN1cnNvci1wb2ludGVyICdcbiAgICAgICAgICAgICsgKHByb3BzLm1hbnVhbEZvY3VzID09PSB0cnVlID8gJ3EtbWFudWFsLWZvY3VzYWJsZScgOiAncS1mb2N1c2FibGUgcS1ob3ZlcmFibGUnKVxuICAgICAgICAgICAgKyAocHJvcHMuZm9jdXNlZCA9PT0gdHJ1ZSA/ICcgcS1tYW51YWwtZm9jdXNhYmxlLS1mb2N1c2VkJyA6ICcnKVxuICAgICAgICAgIDogJydcbiAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5pbnNldExldmVsID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlyID0gJHEubGFuZy5ydGwgPT09IHRydWUgPyAnUmlnaHQnIDogJ0xlZnQnXG4gICAgICByZXR1cm4ge1xuICAgICAgICBbICdwYWRkaW5nJyArIGRpciBdOiAoMTYgKyBwcm9wcy5pbnNldExldmVsICogNTYpICsgJ3B4J1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrIChlKSB7XG4gICAgICBpZiAoaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGJsdXJUYXJnZXRSZWYudmFsdWUgIT09IG51bGwgJiYgZS5xQXZvaWRGb2N1cyAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChlLnFLZXlFdmVudCAhPT0gdHJ1ZSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSByb290UmVmLnZhbHVlKSB7XG4gICAgICAgICAgICBibHVyVGFyZ2V0UmVmLnZhbHVlLmZvY3VzKClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gYmx1clRhcmdldFJlZi52YWx1ZSkge1xuICAgICAgICAgICAgcm9vdFJlZi52YWx1ZS5mb2N1cygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmF2aWdhdGVPbkNsaWNrKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXl1cCAoZSkge1xuICAgICAgaWYgKGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlICYmIGlzS2V5Q29kZShlLCBbIDEzLCAzMiBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuXG4gICAgICAgIC8vIGZvciByaXBwbGVcbiAgICAgICAgZS5xS2V5RXZlbnQgPSB0cnVlXG5cbiAgICAgICAgLy8gZm9yIGNsaWNrIHRyaWdnZXJcbiAgICAgICAgY29uc3QgZXZ0ID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywgZSlcbiAgICAgICAgZXZ0LnFLZXlFdmVudCA9IHRydWVcbiAgICAgICAgcm9vdFJlZi52YWx1ZS5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgIH1cblxuICAgICAgZW1pdCgna2V5dXAnLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBoVW5pcXVlU2xvdChzbG90cy5kZWZhdWx0LCBbXSlcblxuICAgICAgaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUgJiYgY2hpbGQudW5zaGlmdChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtZm9jdXMtaGVscGVyJywgdGFiaW5kZXg6IC0xLCByZWY6IGJsdXJUYXJnZXRSZWYgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgcm9sZTogJ2xpc3RpdGVtJyxcbiAgICAgICAgb25DbGljayxcbiAgICAgICAgb25LZXl1cFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgZGF0YS50YWJpbmRleCA9IHByb3BzLnRhYmluZGV4IHx8ICcwJ1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIGxpbmtBdHRycy52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQWN0aW9uYWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBkYXRhWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaChcbiAgICAgICAgbGlua1RhZy52YWx1ZSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZ2V0Q29udGVudCgpXG4gICAgICApXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5jb25zdCByb2xlQXR0ckV4Y2VwdGlvbnMgPSBbICd1bCcsICdvbCcgXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUxpc3QnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgc2VwYXJhdG9yOiBCb29sZWFuLFxuICAgIHBhZGRpbmc6IEJvb2xlYW4sXG5cbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3Qgcm9sZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHJvbGVBdHRyRXhjZXB0aW9ucy5pbmNsdWRlcyhwcm9wcy50YWcpID8gbnVsbCA6ICdsaXN0JylcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxpc3QnXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1saXN0LS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLWxpc3QtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuc2VwYXJhdG9yID09PSB0cnVlID8gJyBxLWxpc3QtLXNlcGFyYXRvcicgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1saXN0LS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMucGFkZGluZyA9PT0gdHJ1ZSA/ICcgcS1saXN0LS1wYWRkaW5nJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKHByb3BzLnRhZywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSwgcm9sZTogcm9sZS52YWx1ZSB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsTUFBQSxlQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNaO0FBQUEsRUFFRSxNQUFPLE9BQU8sRUFBRSxTQUFTO0FBQ3ZCLFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsMkNBQ3dCLE1BQU0sV0FBVyxRQUFRLE1BQU0sU0FBUyxRQUFRLE1BQU0sY0FBYyxPQUFPLFNBQVMsTUFBTSxNQUMvRyxNQUFNLFFBQVEsT0FBTyx3Q0FBd0Msc0JBQzdELE1BQU0sV0FBVyxPQUFPLDZCQUE2QixPQUNyRCxNQUFNLGNBQWMsT0FBTyxnQ0FBZ0MsT0FDM0QsTUFBTSxXQUFXLE9BQU8sNkJBQTZCO0FBQUEsSUFDOUQ7QUFFSSxXQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxRQUFRLFNBQVMsTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUFBLEVBQ3RFO0FBQ0YsQ0FBQztBQ2xCRCxNQUFBLFFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBRUgsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ2Y7QUFBQSxJQUVJLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNmO0FBQUEsSUFFSSxXQUFXO0FBQUEsSUFDWCxPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFFWixVQUFVLENBQUUsUUFBUSxNQUFNO0FBQUEsSUFFMUIsU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2pCO0FBQUEsRUFFRSxPQUFPLENBQUUsU0FBUyxPQUFPO0FBQUEsRUFFekIsTUFBTyxPQUFPLEVBQUUsT0FBTyxLQUFJLEdBQUk7QUFDN0IsVUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFFLEVBQUUsSUFBSyxtQkFBa0I7QUFFNUMsVUFBTSxTQUFTLFFBQVEsT0FBTyxFQUFFO0FBQ2hDLFVBQU0sRUFBRSxTQUFTLFdBQVcsV0FBVyxTQUFTLGdCQUFlLElBQUssY0FBYTtBQUVqRixVQUFNLFVBQVUsSUFBSSxJQUFJO0FBQ3hCLFVBQU0sZ0JBQWdCLElBQUksSUFBSTtBQUU5QixVQUFNLGVBQWU7QUFBQSxNQUFTLE1BQzVCLE1BQU0sY0FBYyxRQUNmLFFBQVEsVUFBVSxRQUNsQixNQUFNLFFBQVE7QUFBQSxJQUN6QjtBQUVJLFVBQU0sY0FBYztBQUFBLE1BQVMsTUFDM0IsTUFBTSxZQUFZLFFBQVEsYUFBYSxVQUFVO0FBQUEsSUFDdkQ7QUFFSSxVQUFNLFVBQVU7QUFBQSxNQUFTLE1BQ3ZCLG9DQUNHLE1BQU0sVUFBVSxPQUFPLG1CQUFtQixPQUMxQyxPQUFPLFVBQVUsT0FBTyxrQkFBa0IsT0FFM0MsUUFBUSxVQUFVLFFBQVEsTUFBTSxXQUFXLE9BQ3ZDLFVBQVUsUUFFUixNQUFNLFdBQVcsT0FDYixrQkFBbUIsTUFBTSxnQkFBZ0IsU0FBUyxJQUFLLE1BQU0sZ0JBQWlCLEVBQUUsS0FDaEYsT0FHVCxNQUFNLFlBQVksT0FBTyxjQUFjLE9BRXhDLFlBQVksVUFBVSxPQUNsQiwrQ0FDRyxNQUFNLGdCQUFnQixPQUFPLHVCQUF1Qiw4QkFDcEQsTUFBTSxZQUFZLE9BQU8saUNBQWlDLE1BQzdEO0FBQUEsSUFFWjtBQUVJLFVBQU0sUUFBUSxTQUFTLE1BQU07QUFDM0IsVUFBSSxNQUFNLGVBQWUsUUFBUTtBQUMvQixlQUFPO0FBQUEsTUFDVDtBQUVBLFlBQU0sTUFBTSxHQUFHLEtBQUssUUFBUSxPQUFPLFVBQVU7QUFDN0MsYUFBTztBQUFBLFFBQ0wsQ0FBRSxZQUFZLEdBQUcsR0FBSyxLQUFLLE1BQU0sYUFBYSxLQUFNO0FBQUEsTUFDNUQ7QUFBQSxJQUNJLENBQUM7QUFFRCxhQUFTLFFBQVMsR0FBRztBQUNuQixVQUFJLFlBQVksVUFBVSxNQUFNO0FBQzlCLFlBQUksY0FBYyxVQUFVLFFBQVEsRUFBRSxnQkFBZ0IsTUFBTTtBQUMxRCxjQUFJLEVBQUUsY0FBYyxRQUFRLFNBQVMsa0JBQWtCLFFBQVEsT0FBTztBQUNwRSwwQkFBYyxNQUFNLE1BQUs7QUFBQSxVQUMzQixXQUNTLFNBQVMsa0JBQWtCLGNBQWMsT0FBTztBQUN2RCxvQkFBUSxNQUFNLE1BQUs7QUFBQSxVQUNyQjtBQUFBLFFBQ0Y7QUFFQSx3QkFBZ0IsQ0FBQztBQUFBLE1BQ25CO0FBQUEsSUFDRjtBQUVBLGFBQVMsUUFBUyxHQUFHO0FBQ25CLFVBQUksWUFBWSxVQUFVLFFBQVEsVUFBVSxHQUFHLENBQUUsSUFBSSxHQUFJLE1BQU0sTUFBTTtBQUNuRSx1QkFBZSxDQUFDO0FBR2hCLFVBQUUsWUFBWTtBQUdkLGNBQU0sTUFBTSxJQUFJLFdBQVcsU0FBUyxDQUFDO0FBQ3JDLFlBQUksWUFBWTtBQUNoQixnQkFBUSxNQUFNLGNBQWMsR0FBRztBQUFBLE1BQ2pDO0FBRUEsV0FBSyxTQUFTLENBQUM7QUFBQSxJQUNqQjtBQUVBLGFBQVMsYUFBYztBQUNyQixZQUFNLFFBQVEsWUFBWSxNQUFNLFNBQVMsQ0FBQSxDQUFFO0FBRTNDLGtCQUFZLFVBQVUsUUFBUSxNQUFNO0FBQUEsUUFDbEMsRUFBRSxPQUFPLEVBQUUsT0FBTyxrQkFBa0IsVUFBVSxJQUFJLEtBQUssY0FBYSxDQUFFO0FBQUEsTUFDOUU7QUFFTSxhQUFPO0FBQUEsSUFDVDtBQUVBLFdBQU8sTUFBTTtBQUNYLFlBQU0sT0FBTztBQUFBLFFBQ1gsS0FBSztBQUFBLFFBQ0wsT0FBTyxRQUFRO0FBQUEsUUFDZixPQUFPLE1BQU07QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLE1BQ1I7QUFFTSxVQUFJLFlBQVksVUFBVSxNQUFNO0FBQzlCLGFBQUssV0FBVyxNQUFNLFlBQVk7QUFDbEMsZUFBTyxPQUFPLE1BQU0sVUFBVSxLQUFLO0FBQUEsTUFDckMsV0FDUyxhQUFhLFVBQVUsTUFBTTtBQUNwQyxhQUFNLGVBQWUsSUFBSztBQUFBLE1BQzVCO0FBRUEsYUFBTztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1I7QUFBQSxRQUNBLFdBQVU7QUFBQSxNQUNsQjtBQUFBLElBQ0k7QUFBQSxFQUNGO0FBQ0YsQ0FBQztBQ3hKRCxNQUFNLHFCQUFxQixDQUFFLE1BQU0sSUFBSTtBQUV2QyxNQUFBLFFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLElBQ1gsU0FBUztBQUFBLElBRVQsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ2Y7QUFBQSxFQUNBO0FBQUEsRUFFRSxNQUFPLE9BQU8sRUFBRSxTQUFTO0FBQ3ZCLFVBQU0sS0FBSyxtQkFBa0I7QUFDN0IsVUFBTSxTQUFTLFFBQVEsT0FBTyxHQUFHLE1BQU0sRUFBRTtBQUV6QyxVQUFNLE9BQU87QUFBQSxNQUFTLE1BQ3BCLG1CQUFtQixTQUFTLE1BQU0sR0FBRyxJQUFJLE9BQU87QUFBQSxJQUN0RDtBQUVJLFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsWUFDRyxNQUFNLGFBQWEsT0FBTyxzQkFBc0IsT0FDaEQsTUFBTSxVQUFVLE9BQU8sbUJBQW1CLE9BQzFDLE1BQU0sY0FBYyxPQUFPLHVCQUF1QixPQUNsRCxPQUFPLFVBQVUsT0FBTyxrQkFBa0IsT0FDMUMsTUFBTSxZQUFZLE9BQU8scUJBQXFCO0FBQUEsSUFDdkQ7QUFFSSxXQUFPLE1BQU0sRUFBRSxNQUFNLEtBQUssRUFBRSxPQUFPLFFBQVEsT0FBTyxNQUFNLEtBQUssTUFBSyxHQUFJLE1BQU0sTUFBTSxPQUFPLENBQUM7QUFBQSxFQUM1RjtBQUNGLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyXX0=
