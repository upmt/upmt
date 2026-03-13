import { h as createComponent, aM as useSizeProps, H as useDarkProps, j as getCurrentInstance, I as useDark, aN as useSize, p as computed, a$ as hDir, aj as Ripple, v as h, ai as QIcon, bL as hMergeSlotSafely, bf as stopAndPrevent, P as hSlot } from "./index-CA0AeQj5.js";
const defaultSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
const QChip = createComponent({
  name: "QChip",
  props: {
    ...useDarkProps,
    ...useSizeProps,
    dense: Boolean,
    icon: String,
    iconRight: String,
    iconRemove: String,
    iconSelected: String,
    label: [String, Number],
    color: String,
    textColor: String,
    modelValue: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Boolean,
      default: null
    },
    square: Boolean,
    outline: Boolean,
    clickable: Boolean,
    removable: Boolean,
    removeAriaLabel: String,
    tabindex: [String, Number],
    disable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["update:modelValue", "update:selected", "remove", "click"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const sizeStyle = useSize(props, defaultSizes);
    const hasLeftIcon = computed(() => props.selected === true || props.icon !== void 0);
    const leftIcon = computed(() => props.selected === true ? props.iconSelected || $q.iconSet.chip.selected : props.icon);
    const removeIcon = computed(() => props.iconRemove || $q.iconSet.chip.remove);
    const isClickable = computed(
      () => props.disable === false && (props.clickable === true || props.selected !== null)
    );
    const classes = computed(() => {
      const text = props.outline === true ? props.color || props.textColor : props.textColor;
      return "q-chip row inline no-wrap items-center" + (props.outline === false && props.color !== void 0 ? ` bg-${props.color}` : "") + (text ? ` text-${text} q-chip--colored` : "") + (props.disable === true ? " disabled" : "") + (props.dense === true ? " q-chip--dense" : "") + (props.outline === true ? " q-chip--outline" : "") + (props.selected === true ? " q-chip--selected" : "") + (isClickable.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (props.square === true ? " q-chip--square" : "") + (isDark.value === true ? " q-chip--dark q-dark" : "");
    });
    const attributes = computed(() => {
      const chip = props.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: props.tabindex || 0 };
      const remove = {
        ...chip,
        role: "button",
        "aria-hidden": "false",
        "aria-label": props.removeAriaLabel || $q.lang.label.remove
      };
      return { chip, remove };
    });
    function onKeyup(e) {
      e.keyCode === 13 && onClick(e);
    }
    function onClick(e) {
      if (!props.disable) {
        emit("update:selected", !props.selected);
        emit("click", e);
      }
    }
    function onRemove(e) {
      if (e.keyCode === void 0 || e.keyCode === 13) {
        stopAndPrevent(e);
        if (props.disable === false) {
          emit("update:modelValue", false);
          emit("remove");
        }
      }
    }
    function getContent() {
      const child = [];
      isClickable.value === true && child.push(
        h("div", { class: "q-focus-helper" })
      );
      hasLeftIcon.value === true && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--left",
          name: leftIcon.value
        })
      );
      const label = props.label !== void 0 ? [h("div", { class: "ellipsis" }, [props.label])] : void 0;
      child.push(
        h("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, hMergeSlotSafely(slots.default, label))
      );
      props.iconRight && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--right",
          name: props.iconRight
        })
      );
      props.removable === true && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: removeIcon.value,
          ...attributes.value.remove,
          onClick: onRemove,
          onKeyup: onRemove
        })
      );
      return child;
    }
    return () => {
      if (props.modelValue === false) return;
      const data = {
        class: classes.value,
        style: sizeStyle.value
      };
      isClickable.value === true && Object.assign(
        data,
        attributes.value.chip,
        { onClick, onKeyup }
      );
      return hDir(
        "div",
        data,
        getContent(),
        "ripple",
        props.ripple !== false && props.disable !== true,
        () => [[Ripple, props.ripple]]
      );
    };
  }
});
const QItemLabel = createComponent({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup(props, { slots }) {
    const parsedLines = computed(() => parseInt(props.lines, 10));
    const classes = computed(
      () => "q-item__label" + (props.overline === true ? " q-item__label--overline text-overline" : "") + (props.caption === true ? " q-item__label--caption text-caption" : "") + (props.header === true ? " q-item__label--header" : "") + (parsedLines.value === 1 ? " ellipsis" : "")
    );
    const style = computed(() => {
      return props.lines !== void 0 && parsedLines.value > 1 ? {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": parsedLines.value
      } : null;
    });
    return () => h("div", {
      style: style.value,
      class: classes.value
    }, hSlot(slots.default));
  }
});
export {
  QChip as Q,
  QItemLabel as a
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUl0ZW1MYWJlbC1vYTYxVXZuQy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9jaGlwL1FDaGlwLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9pdGVtL1FJdGVtTGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5cbmltcG9ydCBSaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUvUmlwcGxlLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVNpemUsIHsgdXNlU2l6ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2Utc2l6ZS91c2Utc2l6ZS5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3RTYWZlbHksIGhEaXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U2l6ZXMgPSB7XG4gIHhzOiA4LFxuICBzbTogMTAsXG4gIG1kOiAxNCxcbiAgbGc6IDIwLFxuICB4bDogMjRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FDaGlwJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VTaXplUHJvcHMsXG5cbiAgICBkZW5zZTogQm9vbGVhbixcblxuICAgIGljb246IFN0cmluZyxcbiAgICBpY29uUmlnaHQ6IFN0cmluZyxcbiAgICBpY29uUmVtb3ZlOiBTdHJpbmcsXG4gICAgaWNvblNlbGVjdGVkOiBTdHJpbmcsXG4gICAgbGFiZWw6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgdGV4dENvbG9yOiBTdHJpbmcsXG5cbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgc2VsZWN0ZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcblxuICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICBvdXRsaW5lOiBCb29sZWFuLFxuICAgIGNsaWNrYWJsZTogQm9vbGVhbixcbiAgICByZW1vdmFibGU6IEJvb2xlYW4sXG5cbiAgICByZW1vdmVBcmlhTGFiZWw6IFN0cmluZyxcblxuICAgIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgZGlzYWJsZTogQm9vbGVhbixcblxuICAgIHJpcHBsZToge1xuICAgICAgdHlwZTogWyBCb29sZWFuLCBPYmplY3QgXSxcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ3VwZGF0ZTpzZWxlY3RlZCcsICdyZW1vdmUnLCAnY2xpY2snIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCBzaXplU3R5bGUgPSB1c2VTaXplKHByb3BzLCBkZWZhdWx0U2l6ZXMpXG5cbiAgICBjb25zdCBoYXNMZWZ0SWNvbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNlbGVjdGVkID09PSB0cnVlIHx8IHByb3BzLmljb24gIT09IHZvaWQgMClcblxuICAgIGNvbnN0IGxlZnRJY29uID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuc2VsZWN0ZWQgPT09IHRydWVcbiAgICAgICAgPyBwcm9wcy5pY29uU2VsZWN0ZWQgfHwgJHEuaWNvblNldC5jaGlwLnNlbGVjdGVkXG4gICAgICAgIDogcHJvcHMuaWNvblxuICAgICkpXG5cbiAgICBjb25zdCByZW1vdmVJY29uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuaWNvblJlbW92ZSB8fCAkcS5pY29uU2V0LmNoaXAucmVtb3ZlKVxuXG4gICAgY29uc3QgaXNDbGlja2FibGUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMuZGlzYWJsZSA9PT0gZmFsc2VcbiAgICAgICYmIChwcm9wcy5jbGlja2FibGUgPT09IHRydWUgfHwgcHJvcHMuc2VsZWN0ZWQgIT09IG51bGwpXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBwcm9wcy5vdXRsaW5lID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuY29sb3IgfHwgcHJvcHMudGV4dENvbG9yXG4gICAgICAgIDogcHJvcHMudGV4dENvbG9yXG5cbiAgICAgIHJldHVybiAncS1jaGlwIHJvdyBpbmxpbmUgbm8td3JhcCBpdGVtcy1jZW50ZXInXG4gICAgICAgICsgKHByb3BzLm91dGxpbmUgPT09IGZhbHNlICYmIHByb3BzLmNvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgICAgICsgKHRleHQgPyBgIHRleHQtJHsgdGV4dCB9IHEtY2hpcC0tY29sb3JlZGAgOiAnJylcbiAgICAgICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJycpXG4gICAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLWNoaXAtLWRlbnNlJyA6ICcnKVxuICAgICAgICArIChwcm9wcy5vdXRsaW5lID09PSB0cnVlID8gJyBxLWNoaXAtLW91dGxpbmUnIDogJycpXG4gICAgICAgICsgKHByb3BzLnNlbGVjdGVkID09PSB0cnVlID8gJyBxLWNoaXAtLXNlbGVjdGVkJyA6ICcnKVxuICAgICAgICArIChpc0NsaWNrYWJsZS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1jaGlwLS1jbGlja2FibGUgY3Vyc29yLXBvaW50ZXIgbm9uLXNlbGVjdGFibGUgcS1ob3ZlcmFibGUnIDogJycpXG4gICAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS1jaGlwLS1zcXVhcmUnIDogJycpXG4gICAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1jaGlwLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICB9KVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNoaXAgPSBwcm9wcy5kaXNhYmxlID09PSB0cnVlXG4gICAgICAgID8geyB0YWJpbmRleDogLTEsICdhcmlhLWRpc2FibGVkJzogJ3RydWUnIH1cbiAgICAgICAgOiB7IHRhYmluZGV4OiBwcm9wcy50YWJpbmRleCB8fCAwIH1cblxuICAgICAgY29uc3QgcmVtb3ZlID0ge1xuICAgICAgICAuLi5jaGlwLFxuICAgICAgICByb2xlOiAnYnV0dG9uJyxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ2ZhbHNlJyxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy5yZW1vdmVBcmlhTGFiZWwgfHwgJHEubGFuZy5sYWJlbC5yZW1vdmVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgY2hpcCwgcmVtb3ZlIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb25LZXl1cCAoZSkge1xuICAgICAgZS5rZXlDb2RlID09PSAxMyAvKiBFTlRFUiAqLyAmJiBvbkNsaWNrKGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DbGljayAoZSkge1xuICAgICAgaWYgKCFwcm9wcy5kaXNhYmxlKSB7XG4gICAgICAgIGVtaXQoJ3VwZGF0ZTpzZWxlY3RlZCcsICFwcm9wcy5zZWxlY3RlZClcbiAgICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUmVtb3ZlIChlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSB2b2lkIDAgfHwgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGZhbHNlKVxuICAgICAgICAgIGVtaXQoJ3JlbW92ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb250ZW50ICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW11cblxuICAgICAgaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtZm9jdXMtaGVscGVyJyB9KVxuICAgICAgKVxuXG4gICAgICBoYXNMZWZ0SWNvbi52YWx1ZSA9PT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWNoaXBfX2ljb24gcS1jaGlwX19pY29uLS1sZWZ0JyxcbiAgICAgICAgICBuYW1lOiBsZWZ0SWNvbi52YWx1ZVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICBjb25zdCBsYWJlbCA9IHByb3BzLmxhYmVsICE9PSB2b2lkIDBcbiAgICAgICAgPyBbIGgoJ2RpdicsIHsgY2xhc3M6ICdlbGxpcHNpcycgfSwgWyBwcm9wcy5sYWJlbCBdKSBdXG4gICAgICAgIDogdm9pZCAwXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtY2hpcF9fY29udGVudCBjb2wgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyIHEtYW5jaG9yLS1za2lwJ1xuICAgICAgICB9LCBoTWVyZ2VTbG90U2FmZWx5KHNsb3RzLmRlZmF1bHQsIGxhYmVsKSlcbiAgICAgIClcblxuICAgICAgcHJvcHMuaWNvblJpZ2h0ICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogJ3EtY2hpcF9faWNvbiBxLWNoaXBfX2ljb24tLXJpZ2h0JyxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5pY29uUmlnaHRcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcHJvcHMucmVtb3ZhYmxlID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogJ3EtY2hpcF9faWNvbiBxLWNoaXBfX2ljb24tLXJlbW92ZSBjdXJzb3ItcG9pbnRlcicsXG4gICAgICAgICAgbmFtZTogcmVtb3ZlSWNvbi52YWx1ZSxcbiAgICAgICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlLnJlbW92ZSxcbiAgICAgICAgICBvbkNsaWNrOiBvblJlbW92ZSxcbiAgICAgICAgICBvbktleXVwOiBvblJlbW92ZVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgPT09IGZhbHNlKSByZXR1cm5cblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzaXplU3R5bGUudmFsdWVcbiAgICAgIH1cblxuICAgICAgaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUgJiYgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgZGF0YSxcbiAgICAgICAgYXR0cmlidXRlcy52YWx1ZS5jaGlwLFxuICAgICAgICB7IG9uQ2xpY2ssIG9uS2V5dXAgfVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaERpcihcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGdldENvbnRlbnQoKSxcbiAgICAgICAgJ3JpcHBsZScsXG4gICAgICAgIHByb3BzLnJpcHBsZSAhPT0gZmFsc2UgJiYgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSxcbiAgICAgICAgKCkgPT4gWyBbIFJpcHBsZSwgcHJvcHMucmlwcGxlIF0gXVxuICAgICAgKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FJdGVtTGFiZWwnLFxuXG4gIHByb3BzOiB7XG4gICAgb3ZlcmxpbmU6IEJvb2xlYW4sXG4gICAgY2FwdGlvbjogQm9vbGVhbixcbiAgICBoZWFkZXI6IEJvb2xlYW4sXG4gICAgbGluZXM6IFsgTnVtYmVyLCBTdHJpbmcgXVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgcGFyc2VkTGluZXMgPSBjb21wdXRlZCgoKSA9PiBwYXJzZUludChwcm9wcy5saW5lcywgMTApKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1pdGVtX19sYWJlbCdcbiAgICAgICsgKHByb3BzLm92ZXJsaW5lID09PSB0cnVlID8gJyBxLWl0ZW1fX2xhYmVsLS1vdmVybGluZSB0ZXh0LW92ZXJsaW5lJyA6ICcnKVxuICAgICAgKyAocHJvcHMuY2FwdGlvbiA9PT0gdHJ1ZSA/ICcgcS1pdGVtX19sYWJlbC0tY2FwdGlvbiB0ZXh0LWNhcHRpb24nIDogJycpXG4gICAgICArIChwcm9wcy5oZWFkZXIgPT09IHRydWUgPyAnIHEtaXRlbV9fbGFiZWwtLWhlYWRlcicgOiAnJylcbiAgICAgICsgKHBhcnNlZExpbmVzLnZhbHVlID09PSAxID8gJyBlbGxpcHNpcycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy5saW5lcyAhPT0gdm9pZCAwICYmIHBhcnNlZExpbmVzLnZhbHVlID4gMVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICctd2Via2l0LWJveCcsXG4gICAgICAgICAgICAnLXdlYmtpdC1ib3gtb3JpZW50JzogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgICctd2Via2l0LWxpbmUtY2xhbXAnOiBwYXJzZWRMaW5lcy52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgOiBudWxsXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZVxuICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFhTyxNQUFNLGVBQWU7QUFBQSxFQUMxQixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQUEsRUFDSixJQUFJO0FBQ047QUFFQSxNQUFBLFFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBRUgsT0FBTztBQUFBLElBRVAsTUFBTTtBQUFBLElBQ04sV0FBVztB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
