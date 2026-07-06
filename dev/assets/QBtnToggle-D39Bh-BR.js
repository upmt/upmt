import { c as createComponent, A as useFormProps, b as computed, B as getBtnDesignAttr, h, Q as QBtn, C as useFormInject, e as hMergeSlot } from "./index-C5pr5ZVX.js";
import { Q as QBtnGroup } from "./QBtnGroup-DaSLdyd0.js";
const QBtnToggle = createComponent({
  name: "QBtnToggle",
  props: {
    ...useFormProps,
    modelValue: {
      required: true
    },
    options: {
      type: Array,
      required: true,
      validator: (v) => v.every(
        (opt) => ("label" in opt || "icon" in opt || "slot" in opt) && "value" in opt
      )
    },
    // To avoid seeing the active raise shadow through
    // the transparent button, give it a color (even white)
    color: String,
    textColor: String,
    toggleColor: {
      type: String,
      default: "primary"
    },
    toggleTextColor: String,
    outline: Boolean,
    flat: Boolean,
    unelevated: Boolean,
    rounded: Boolean,
    push: Boolean,
    glossy: Boolean,
    size: String,
    padding: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    readonly: Boolean,
    disable: Boolean,
    stack: Boolean,
    stretch: Boolean,
    spread: Boolean,
    clearable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["update:modelValue", "clear", "click"],
  setup(props, { slots, emit }) {
    const hasActiveValue = computed(
      () => props.options.find((opt) => opt.value === props.modelValue) !== void 0
    );
    const formAttrs = computed(() => ({
      type: "hidden",
      name: props.name,
      value: props.modelValue
    }));
    const injectFormInput = useFormInject(formAttrs);
    const btnDesignAttr = computed(() => getBtnDesignAttr(props));
    const btnOptionDesign = computed(() => ({
      rounded: props.rounded,
      dense: props.dense,
      ...btnDesignAttr.value
    }));
    const btnOptions = computed(() => props.options.map((item, i) => {
      const { attrs, value, slot, ...opt } = item;
      return {
        slot,
        props: {
          key: i,
          "aria-pressed": value === props.modelValue ? "true" : "false",
          ...attrs,
          ...opt,
          ...btnOptionDesign.value,
          disable: props.disable === true || opt.disable === true,
          // Options that come from the button specific options first, then from general props
          color: value === props.modelValue ? mergeOpt(opt, "toggleColor") : mergeOpt(opt, "color"),
          textColor: value === props.modelValue ? mergeOpt(opt, "toggleTextColor") : mergeOpt(opt, "textColor"),
          noCaps: mergeOpt(opt, "noCaps") === true,
          noWrap: mergeOpt(opt, "noWrap") === true,
          size: mergeOpt(opt, "size"),
          padding: mergeOpt(opt, "padding"),
          ripple: mergeOpt(opt, "ripple"),
          stack: mergeOpt(opt, "stack") === true,
          stretch: mergeOpt(opt, "stretch") === true,
          onClick(e) {
            set(value, item, e);
          }
        }
      };
    }));
    function set(value, opt, e) {
      if (props.readonly !== true) {
        if (props.modelValue === value) {
          if (props.clearable === true) {
            emit("update:modelValue", null, null);
            emit("clear");
          }
        } else {
          emit("update:modelValue", value, opt);
        }
        emit("click", e);
      }
    }
    function mergeOpt(opt, key) {
      return opt[key] === void 0 ? props[key] : opt[key];
    }
    function getContent() {
      const child = btnOptions.value.map((opt) => {
        return h(QBtn, opt.props, opt.slot !== void 0 ? slots[opt.slot] : void 0);
      });
      if (props.name !== void 0 && props.disable !== true && hasActiveValue.value === true) {
        injectFormInput(child, "push");
      }
      return hMergeSlot(slots.default, child);
    }
    return () => h(QBtnGroup, {
      class: "q-btn-toggle",
      ...btnDesignAttr.value,
      rounded: props.rounded,
      stretch: props.stretch,
      glossy: props.glossy,
      spread: props.spread
    }, getContent);
  }
});
export {
  QBtnToggle as Q
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUJ0blRvZ2dsZS1EMzlCaC1CUi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9idG4tdG9nZ2xlL1FCdG5Ub2dnbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuaW1wb3J0IFFCdG5Hcm91cCBmcm9tICcuLi9idG4tZ3JvdXAvUUJ0bkdyb3VwLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyB1c2VGb3JtSW5qZWN0LCB1c2VGb3JtUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtZm9ybS9wcml2YXRlLnVzZS1mb3JtLmpzJ1xuXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgZ2V0QnRuRGVzaWduQXR0ciB9IGZyb20gJy4uL2J0bi91c2UtYnRuLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUJ0blRvZ2dsZScsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VGb3JtUHJvcHMsXG5cbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG5cbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHYuZXZlcnkoXG4gICAgICAgIG9wdCA9PiAoJ2xhYmVsJyBpbiBvcHQgfHwgJ2ljb24nIGluIG9wdCB8fCAnc2xvdCcgaW4gb3B0KSAmJiAndmFsdWUnIGluIG9wdFxuICAgICAgKVxuICAgIH0sXG5cbiAgICAvLyBUbyBhdm9pZCBzZWVpbmcgdGhlIGFjdGl2ZSByYWlzZSBzaGFkb3cgdGhyb3VnaFxuICAgIC8vIHRoZSB0cmFuc3BhcmVudCBidXR0b24sIGdpdmUgaXQgYSBjb2xvciAoZXZlbiB3aGl0ZSlcbiAgICBjb2xvcjogU3RyaW5nLFxuICAgIHRleHRDb2xvcjogU3RyaW5nLFxuICAgIHRvZ2dsZUNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeSdcbiAgICB9LFxuICAgIHRvZ2dsZVRleHRDb2xvcjogU3RyaW5nLFxuXG4gICAgb3V0bGluZTogQm9vbGVhbixcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIHVuZWxldmF0ZWQ6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcbiAgICBwdXNoOiBCb29sZWFuLFxuICAgIGdsb3NzeTogQm9vbGVhbixcblxuICAgIHNpemU6IFN0cmluZyxcbiAgICBwYWRkaW5nOiBTdHJpbmcsXG5cbiAgICBub0NhcHM6IEJvb2xlYW4sXG4gICAgbm9XcmFwOiBCb29sZWFuLFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgIGRpc2FibGU6IEJvb2xlYW4sXG5cbiAgICBzdGFjazogQm9vbGVhbixcbiAgICBzdHJldGNoOiBCb29sZWFuLFxuXG4gICAgc3ByZWFkOiBCb29sZWFuLFxuXG4gICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuXG4gICAgcmlwcGxlOiB7XG4gICAgICB0eXBlOiBbIEJvb2xlYW4sIE9iamVjdCBdLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAndXBkYXRlOm1vZGVsVmFsdWUnLCAnY2xlYXInLCAnY2xpY2snIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCBoYXNBY3RpdmVWYWx1ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5vcHRpb25zLmZpbmQob3B0ID0+IG9wdC52YWx1ZSA9PT0gcHJvcHMubW9kZWxWYWx1ZSkgIT09IHZvaWQgMFxuICAgIClcblxuICAgIGNvbnN0IGZvcm1BdHRycyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICB2YWx1ZTogcHJvcHMubW9kZWxWYWx1ZVxuICAgIH0pKVxuXG4gICAgY29uc3QgaW5qZWN0Rm9ybUlucHV0ID0gdXNlRm9ybUluamVjdChmb3JtQXR0cnMpXG5cbiAgICBjb25zdCBidG5EZXNpZ25BdHRyID0gY29tcHV0ZWQoKCkgPT4gZ2V0QnRuRGVzaWduQXR0cihwcm9wcykpXG5cbiAgICBjb25zdCBidG5PcHRpb25EZXNpZ24gPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgcm91bmRlZDogcHJvcHMucm91bmRlZCxcbiAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgIC4uLmJ0bkRlc2lnbkF0dHIudmFsdWVcbiAgICB9KSlcblxuICAgIGNvbnN0IGJ0bk9wdGlvbnMgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5vcHRpb25zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgY29uc3QgeyBhdHRycywgdmFsdWUsIHNsb3QsIC4uLm9wdCB9ID0gaXRlbVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzbG90LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGtleTogaSxcblxuICAgICAgICAgICdhcmlhLXByZXNzZWQnOiB2YWx1ZSA9PT0gcHJvcHMubW9kZWxWYWx1ZSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgICAgLi4ub3B0LFxuICAgICAgICAgIC4uLmJ0bk9wdGlvbkRlc2lnbi52YWx1ZSxcblxuICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgb3B0LmRpc2FibGUgPT09IHRydWUsXG5cbiAgICAgICAgICAvLyBPcHRpb25zIHRoYXQgY29tZSBmcm9tIHRoZSBidXR0b24gc3BlY2lmaWMgb3B0aW9ucyBmaXJzdCwgdGhlbiBmcm9tIGdlbmVyYWwgcHJvcHNcbiAgICAgICAgICBjb2xvcjogdmFsdWUgPT09IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgICAgICAgID8gbWVyZ2VPcHQob3B0LCAndG9nZ2xlQ29sb3InKVxuICAgICAgICAgICAgOiBtZXJnZU9wdChvcHQsICdjb2xvcicpLFxuICAgICAgICAgIHRleHRDb2xvcjogdmFsdWUgPT09IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgICAgICAgID8gbWVyZ2VPcHQob3B0LCAndG9nZ2xlVGV4dENvbG9yJylcbiAgICAgICAgICAgIDogbWVyZ2VPcHQob3B0LCAndGV4dENvbG9yJyksXG4gICAgICAgICAgbm9DYXBzOiBtZXJnZU9wdChvcHQsICdub0NhcHMnKSA9PT0gdHJ1ZSxcbiAgICAgICAgICBub1dyYXA6IG1lcmdlT3B0KG9wdCwgJ25vV3JhcCcpID09PSB0cnVlLFxuXG4gICAgICAgICAgc2l6ZTogbWVyZ2VPcHQob3B0LCAnc2l6ZScpLFxuICAgICAgICAgIHBhZGRpbmc6IG1lcmdlT3B0KG9wdCwgJ3BhZGRpbmcnKSxcbiAgICAgICAgICByaXBwbGU6IG1lcmdlT3B0KG9wdCwgJ3JpcHBsZScpLFxuICAgICAgICAgIHN0YWNrOiBtZXJnZU9wdChvcHQsICdzdGFjaycpID09PSB0cnVlLFxuICAgICAgICAgIHN0cmV0Y2g6IG1lcmdlT3B0KG9wdCwgJ3N0cmV0Y2gnKSA9PT0gdHJ1ZSxcblxuICAgICAgICAgIG9uQ2xpY2sgKGUpIHsgc2V0KHZhbHVlLCBpdGVtLCBlKSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSlcblxuICAgIGZ1bmN0aW9uIHNldCAodmFsdWUsIG9wdCwgZSkge1xuICAgICAgaWYgKHByb3BzLnJlYWRvbmx5ICE9PSB0cnVlKSB7XG4gICAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgIGlmIChwcm9wcy5jbGVhcmFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbnVsbCwgbnVsbClcbiAgICAgICAgICAgIGVtaXQoJ2NsZWFyJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWx1ZSwgb3B0KVxuICAgICAgICB9XG5cbiAgICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lcmdlT3B0IChvcHQsIGtleSkge1xuICAgICAgcmV0dXJuIG9wdFsga2V5IF0gPT09IHZvaWQgMCA/IHByb3BzWyBrZXkgXSA6IG9wdFsga2V5IF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb250ZW50ICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gYnRuT3B0aW9ucy52YWx1ZS5tYXAob3B0ID0+IHtcbiAgICAgICAgcmV0dXJuIGgoUUJ0biwgb3B0LnByb3BzLCBvcHQuc2xvdCAhPT0gdm9pZCAwID8gc2xvdHNbIG9wdC5zbG90IF0gOiB2b2lkIDApXG4gICAgICB9KVxuXG4gICAgICBpZiAocHJvcHMubmFtZSAhPT0gdm9pZCAwICYmIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgaGFzQWN0aXZlVmFsdWUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaW5qZWN0Rm9ybUlucHV0KGNoaWxkLCAncHVzaCcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIGNoaWxkKVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiBoKFFCdG5Hcm91cCwge1xuICAgICAgY2xhc3M6ICdxLWJ0bi10b2dnbGUnLFxuICAgICAgLi4uYnRuRGVzaWduQXR0ci52YWx1ZSxcbiAgICAgIHJvdW5kZWQ6IHByb3BzLnJvdW5kZWQsXG4gICAgICBzdHJldGNoOiBwcm9wcy5zdHJldGNoLFxuICAgICAgZ2xvc3N5OiBwcm9wcy5nbG9zc3ksXG4gICAgICBzcHJlYWQ6IHByb3BzLnNwcmVhZFxuICAgIH0sIGdldENvbnRlbnQpXG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFXQSxNQUFBLGFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsWUFBWTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFFSSxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixXQUFXLE9BQUssRUFBRTtBQUFBLFFBQ2hCLFVBQVEsV0FBVyxPQUFPLFVBQVUsT0FBTyxVQUFVLFFBQVEsV0FBVztBQUFBLE1BQ2hGO0FBQUEsSUFDQTtBQUFBO0FBQUE7QUFBQSxJQUlJLE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNmO0FBQUEsSUFDSSxpQkFBaUI7QUFBQSxJQUVqQixTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFFUixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFFVCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixTQUFTO0FBQUEsSUFFVCxPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFFVCxRQUFRO0FBQUEsSUFFUixXQUFXO0FBQUEsSUFFWCxRQUFRO0FBQUEsTUFDTixNQUFNLENBQUUsU0FBUyxNQUFNO0FBQUEsTUFDdkIsU0FBUztBQUFBLElBQ2Y7QUFBQSxFQUNBO0FBQUEsRUFFRSxPQUFPLENBQUUscUJBQXFCLFNBQVMsT0FBTztBQUFBLEVBRTlDLE1BQU8sT0FBTyxFQUFFLE9BQU8sS0FBSSxHQUFJO0FBQzdC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
