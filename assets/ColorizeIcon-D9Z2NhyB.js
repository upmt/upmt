import { h as createComponent, bm as useFormProps, p as computed, as as getBtnDesignAttr, v as h, a8 as QBtn, bG as useFormInject, N as hMergeSlot, H as useDarkProps, j as getCurrentInstance, I as useDark, r as ref, aT as isNumber, aV as isObject, s as onBeforeUnmount, bH as position, b1 as hDir, bI as useFormAttrs, q as watch, bh as stopAndPrevent, bJ as useTick, bd as useTimeout, L as onDeactivated, M as onActivated, P as hSlot, ai as QIcon, Q as provide, bK as tabsKey, k as inject, l as emptyRenderFn, B as onMounted, x as withDirectives, aj as Ripple, bC as isKeyCode, bL as shouldIgnoreKey, bM as isDeepEqual, bw as uid, bB as createDirective, bN as cleanEvt, bk as client, bO as preventDraggable, C as noop, bP as addEvt, bQ as leftClick, bu as Transition, bR as getNormalizedVNodes, bS as KeepAlive, bT as testPattern, bU as throttle, at as stop, aW as nextTick, aZ as injectProp, bV as QDialog, Y as defineComponent, a_ as useModel, a1 as _export_sfc, a3 as createBlock, a4 as openBlock, a5 as withCtx, a6 as createVNode } from "./index-DT2JP2rj.js";
import { Q as QBtnGroup, D as DragElement } from "./DragElement-BzCdx0F_.js";
import { T as TouchPan, Q as QResizeObserver, g as getModifierDirections, s as shouldStart } from "./NoteIcon-CFcGh7Em.js";
import { b as between, c as clearSelection, u as useAnchorProps, a as useAnchor, Q as QMenu } from "./format-Dbce-Jpy.js";
import { r as rtlHasScrollBug } from "./rtl-DDpZOXNn.js";
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
const markerPrefixClass = "q-slider__marker-labels";
const defaultMarkerConvertFn = (v) => ({ value: v });
const defaultMarkerLabelRenderFn = ({ marker }) => h("div", {
  key: marker.value,
  style: marker.style,
  class: marker.classes
}, marker.label);
const keyCodes = [34, 37, 40, 33, 39, 38];
const useSliderProps = {
  ...useDarkProps,
  ...useFormProps,
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  innerMin: Number,
  innerMax: Number,
  step: {
    type: Number,
    default: 1,
    validator: (v) => v >= 0
  },
  snap: Boolean,
  vertical: Boolean,
  reverse: Boolean,
  color: String,
  markerLabelsClass: String,
  label: Boolean,
  labelColor: String,
  labelTextColor: String,
  labelAlways: Boolean,
  switchLabelSide: Boolean,
  markers: [Boolean, Number],
  markerLabels: [Boolean, Array, Object, Function],
  switchMarkerLabelsSide: Boolean,
  trackImg: String,
  trackColor: String,
  innerTrackImg: String,
  innerTrackColor: String,
  selectionColor: String,
  selectionImg: String,
  thumbSize: {
    type: String,
    default: "20px"
  },
  trackSize: {
    type: String,
    default: "4px"
  },
  disable: Boolean,
  readonly: Boolean,
  dense: Boolean,
  tabindex: [String, Number],
  thumbColor: String,
  thumbPath: {
    type: String,
    default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"
  }
};
const useSliderEmits = ["pan", "update:modelValue", "change"];
function useSlider({ updateValue, updatePosition, getDragging, formAttrs }) {
  const { props, emit, slots, proxy: { $q } } = getCurrentInstance();
  const isDark = useDark(props, $q);
  const injectFormInput = useFormInject(formAttrs);
  const active = ref(false);
  const preventFocus = ref(false);
  const focus = ref(false);
  const dragging = ref(false);
  const axis = computed(() => props.vertical === true ? "--v" : "--h");
  const labelSide = computed(() => "-" + (props.switchLabelSide === true ? "switched" : "standard"));
  const isReversed = computed(() => props.vertical === true ? props.reverse === true : props.reverse !== ($q.lang.rtl === true));
  const innerMin = computed(() => isNaN(props.innerMin) === true || props.innerMin < props.min ? props.min : props.innerMin);
  const innerMax = computed(() => isNaN(props.innerMax) === true || props.innerMax > props.max ? props.max : props.innerMax);
  const editable = computed(() => props.disable !== true && props.readonly !== true && innerMin.value < innerMax.value);
  const roundValueFn = computed(() => {
    if (props.step === 0) {
      return (v) => v;
    }
    const decimals = (String(props.step).trim().split(".")[1] || "").length;
    return (v) => parseFloat(v.toFixed(decimals));
  });
  const keyStep = computed(() => props.step === 0 ? 1 : props.step);
  const tabindex = computed(() => editable.value === true ? props.tabindex || 0 : -1);
  const trackLen = computed(() => props.max - props.min);
  const innerBarLen = computed(() => innerMax.value - innerMin.value);
  const innerMinRatio = computed(() => convertModelToRatio(innerMin.value));
  const innerMaxRatio = computed(() => convertModelToRatio(innerMax.value));
  const positionProp = computed(() => props.vertical === true ? isReversed.value === true ? "bottom" : "top" : isReversed.value === true ? "right" : "left");
  const sizeProp = computed(() => props.vertical === true ? "height" : "width");
  const thicknessProp = computed(() => props.vertical === true ? "width" : "height");
  const orientation = computed(() => props.vertical === true ? "vertical" : "horizontal");
  const attributes = computed(() => {
    const acc = {
      role: "slider",
      "aria-valuemin": innerMin.value,
      "aria-valuemax": innerMax.value,
      "aria-orientation": orientation.value,
      "data-step": props.step
    };
    if (props.disable === true) {
      acc["aria-disabled"] = "true";
    } else if (props.readonly === true) {
      acc["aria-readonly"] = "true";
    }
    return acc;
  });
  const classes = computed(
    () => `q-slider q-slider${axis.value} q-slider--${active.value === true ? "" : "in"}active inline no-wrap ` + (props.vertical === true ? "row" : "column") + (props.disable === true ? " disabled" : " q-slider--enabled" + (editable.value === true ? " q-slider--editable" : "")) + (focus.value === "both" ? " q-slider--focus" : "") + (props.label || props.labelAlways === true ? " q-slider--label" : "") + (props.labelAlways === true ? " q-slider--label-always" : "") + (isDark.value === true ? " q-slider--dark" : "") + (props.dense === true ? " q-slider--dense q-slider--dense" + axis.value : "")
  );
  function getPositionClass(name) {
    const cls = "q-slider__" + name;
    return `${cls} ${cls}${axis.value} ${cls}${axis.value}${labelSide.value}`;
  }
  function getAxisClass(name) {
    const cls = "q-slider__" + name;
    return `${cls} ${cls}${axis.value}`;
  }
  const selectionBarClass = computed(() => {
    const color = props.selectionColor || props.color;
    return "q-slider__selection absolute" + (color !== void 0 ? ` text-${color}` : "");
  });
  const markerClass = computed(() => getAxisClass("markers") + " absolute overflow-hidden");
  const trackContainerClass = computed(() => getAxisClass("track-container"));
  const pinClass = computed(() => getPositionClass("pin"));
  const labelClass = computed(() => getPositionClass("label"));
  const textContainerClass = computed(() => getPositionClass("text-container"));
  const markerLabelsContainerClass = computed(
    () => getPositionClass("marker-labels-container") + (props.markerLabelsClass !== void 0 ? ` ${props.markerLabelsClass}` : "")
  );
  const trackClass = computed(
    () => "q-slider__track relative-position no-outline" + (props.trackColor !== void 0 ? ` bg-${props.trackColor}` : "")
  );
  const trackStyle = computed(() => {
    const acc = { [thicknessProp.value]: props.trackSize };
    if (props.trackImg !== void 0) {
      acc.backgroundImage = `url(${props.trackImg}) !important`;
    }
    return acc;
  });
  const innerBarClass = computed(
    () => "q-slider__inner absolute" + (props.innerTrackColor !== void 0 ? ` bg-${props.innerTrackColor}` : "")
  );
  const innerBarStyle = computed(() => {
    const innerDiff = innerMaxRatio.value - innerMinRatio.value;
    const acc = {
      [positionProp.value]: `${100 * innerMinRatio.value}%`,
      [sizeProp.value]: innerDiff === 0 ? "2px" : `${100 * innerDiff}%`
    };
    if (props.innerTrackImg !== void 0) {
      acc.backgroundImage = `url(${props.innerTrackImg}) !important`;
    }
    return acc;
  });
  function convertRatioToModel(ratio) {
    const { min, max, step } = props;
    let model = min + ratio * (max - min);
    if (step > 0) {
      const modulo = (model - innerMin.value) % step;
      model += (Math.abs(modulo) >= step / 2 ? (modulo < 0 ? -1 : 1) * step : 0) - modulo;
    }
    model = roundValueFn.value(model);
    return between(model, innerMin.value, innerMax.value);
  }
  function convertModelToRatio(model) {
    return trackLen.value === 0 ? 0 : (model - props.min) / trackLen.value;
  }
  function getDraggingRatio(evt, dragging2) {
    const pos = position(evt), val = props.vertical === true ? between((pos.top - dragging2.top) / dragging2.height, 0, 1) : between((pos.left - dragging2.left) / dragging2.width, 0, 1);
    return between(
      isReversed.value === true ? 1 - val : val,
      innerMinRatio.value,
      innerMaxRatio.value
    );
  }
  const markerStep = computed(
    () => isNumber(props.markers) === true ? props.markers : keyStep.value
  );
  const markerTicks = computed(() => {
    const acc = [];
    const step = markerStep.value;
    const max = props.max;
    let value = props.min;
    do {
      acc.push(value);
      value += step;
    } while (value < max);
    acc.push(max);
    return acc;
  });
  const markerLabelClass = computed(() => {
    const prefix = ` ${markerPrefixClass}${axis.value}-`;
    return markerPrefixClass + `${prefix}${props.switchMarkerLabelsSide === true ? "switched" : "standard"}${prefix}${isReversed.value === true ? "rtl" : "ltr"}`;
  });
  const markerLabelsList = computed(() => {
    if (props.markerLabels === false) {
      return null;
    }
    return getMarkerList(props.markerLabels).map((entry, index) => ({
      index,
      value: entry.value,
      label: entry.label || entry.value,
      classes: markerLabelClass.value + (entry.classes !== void 0 ? " " + entry.classes : ""),
      style: {
        ...getMarkerLabelStyle(entry.value),
        ...entry.style || {}
      }
    }));
  });
  const markerScope = computed(() => ({
    markerList: markerLabelsList.value,
    markerMap: markerLabelsMap.value,
    classes: markerLabelClass.value,
    // TODO ts definition
    getStyle: getMarkerLabelStyle
  }));
  const markerStyle = computed(() => {
    const size = innerBarLen.value === 0 ? "2px" : 100 * markerStep.value / innerBarLen.value;
    return {
      ...innerBarStyle.value,
      backgroundSize: props.vertical === true ? `2px ${size}%` : `${size}% 2px`
    };
  });
  function getMarkerList(def) {
    if (def === false) {
      return null;
    }
    if (def === true) {
      return markerTicks.value.map(defaultMarkerConvertFn);
    }
    if (typeof def === "function") {
      return markerTicks.value.map((value) => {
        const item = def(value);
        return isObject(item) === true ? { ...item, value } : { value, label: item };
      });
    }
    const filterFn = ({ value }) => value >= props.min && value <= props.max;
    if (Array.isArray(def) === true) {
      return def.map((item) => isObject(item) === true ? item : { value: item }).filter(filterFn);
    }
    return Object.keys(def).map((key) => {
      const item = def[key];
      const value = Number(key);
      return isObject(item) === true ? { ...item, value } : { value, label: item };
    }).filter(filterFn);
  }
  function getMarkerLabelStyle(val) {
    return { [positionProp.value]: `${100 * (val - props.min) / trackLen.value}%` };
  }
  const markerLabelsMap = computed(() => {
    if (props.markerLabels === false) {
      return null;
    }
    const acc = {};
    markerLabelsList.value.forEach((entry) => {
      acc[entry.value] = entry;
    });
    return acc;
  });
  function getMarkerLabelsContent() {
    if (slots["marker-label-group"] !== void 0) {
      return slots["marker-label-group"](markerScope.value);
    }
    const fn = slots["marker-label"] || defaultMarkerLabelRenderFn;
    return markerLabelsList.value.map((marker) => fn({
      marker,
      ...markerScope.value
    }));
  }
  const panDirective = computed(() => {
    return [[
      TouchPan,
      onPan,
      void 0,
      {
        [orientation.value]: true,
        prevent: true,
        stop: true,
        mouse: true,
        mouseAllDir: true
      }
    ]];
  });
  function onPan(event) {
    if (event.isFinal === true) {
      if (dragging.value !== void 0) {
        updatePosition(event.evt);
        event.touch === true && updateValue(true);
        dragging.value = void 0;
        emit("pan", "end");
      }
      active.value = false;
      focus.value = false;
    } else if (event.isFirst === true) {
      dragging.value = getDragging(event.evt);
      updatePosition(event.evt);
      updateValue();
      active.value = true;
      emit("pan", "start");
    } else {
      updatePosition(event.evt);
      updateValue();
    }
  }
  function onBlur() {
    focus.value = false;
  }
  function onActivate(evt) {
    updatePosition(evt, getDragging(evt));
    updateValue();
    preventFocus.value = true;
    active.value = true;
    document.addEventListener("mouseup", onDeactivate, true);
  }
  function onDeactivate() {
    preventFocus.value = false;
    active.value = false;
    updateValue(true);
    onBlur();
    document.removeEventListener("mouseup", onDeactivate, true);
  }
  function onMobileClick(evt) {
    updatePosition(evt, getDragging(evt));
    updateValue(true);
  }
  function onKeyup(evt) {
    if (keyCodes.includes(evt.keyCode)) {
      updateValue(true);
    }
  }
  function getTextContainerStyle(ratio) {
    if (props.vertical === true) {
      return null;
    }
    const p = $q.lang.rtl !== props.reverse ? 1 - ratio : ratio;
    return {
      transform: `translateX(calc(${2 * p - 1} * ${props.thumbSize} / 2 + ${50 - 100 * p}%))`
    };
  }
  function getThumbRenderFn(thumb) {
    const focusClass = computed(() => preventFocus.value === false && (focus.value === thumb.focusValue || focus.value === "both") ? " q-slider--focus" : "");
    const classes2 = computed(
      () => `q-slider__thumb q-slider__thumb${axis.value} q-slider__thumb${axis.value}-${isReversed.value === true ? "rtl" : "ltr"} absolute non-selectable` + focusClass.value + (thumb.thumbColor.value !== void 0 ? ` text-${thumb.thumbColor.value}` : "")
    );
    const style = computed(() => ({
      width: props.thumbSize,
      height: props.thumbSize,
      [positionProp.value]: `${100 * thumb.ratio.value}%`,
      zIndex: focus.value === thumb.focusValue ? 2 : void 0
    }));
    const pinColor = computed(() => thumb.labelColor.value !== void 0 ? ` text-${thumb.labelColor.value}` : "");
    const textContainerStyle = computed(() => getTextContainerStyle(thumb.ratio.value));
    const textClass = computed(() => "q-slider__text" + (thumb.labelTextColor.value !== void 0 ? ` text-${thumb.labelTextColor.value}` : ""));
    return () => {
      const thumbContent = [
        h("svg", {
          class: "q-slider__thumb-shape absolute-full",
          viewBox: "0 0 20 20",
          "aria-hidden": "true"
        }, [
          h("path", { d: props.thumbPath })
        ]),
        h("div", { class: "q-slider__focus-ring fit" })
      ];
      if (props.label === true || props.labelAlways === true) {
        thumbContent.push(
          h("div", {
            class: pinClass.value + " absolute fit no-pointer-events" + pinColor.value
          }, [
            h("div", {
              class: labelClass.value,
              style: { minWidth: props.thumbSize }
            }, [
              h("div", {
                class: textContainerClass.value,
                style: textContainerStyle.value
              }, [
                h("span", { class: textClass.value }, thumb.label.value)
              ])
            ])
          ])
        );
        if (props.name !== void 0 && props.disable !== true) {
          injectFormInput(thumbContent, "push");
        }
      }
      return h("div", {
        class: classes2.value,
        style: style.value,
        ...thumb.getNodeData()
      }, thumbContent);
    };
  }
  function getContent(selectionBarStyle, trackContainerTabindex, trackContainerEvents, injectThumb) {
    const trackContent = [];
    props.innerTrackColor !== "transparent" && trackContent.push(
      h("div", {
        key: "inner",
        class: innerBarClass.value,
        style: innerBarStyle.value
      })
    );
    props.selectionColor !== "transparent" && trackContent.push(
      h("div", {
        key: "selection",
        class: selectionBarClass.value,
        style: selectionBarStyle.value
      })
    );
    props.markers !== false && trackContent.push(
      h("div", {
        key: "marker",
        class: markerClass.value,
        style: markerStyle.value
      })
    );
    injectThumb(trackContent);
    const content = [
      hDir(
        "div",
        {
          key: "trackC",
          class: trackContainerClass.value,
          tabindex: trackContainerTabindex.value,
          ...trackContainerEvents.value
        },
        [
          h("div", {
            class: trackClass.value,
            style: trackStyle.value
          }, trackContent)
        ],
        "slide",
        editable.value,
        () => panDirective.value
      )
    ];
    if (props.markerLabels !== false) {
      const action = props.switchMarkerLabelsSide === true ? "unshift" : "push";
      content[action](
        h("div", {
          key: "markerL",
          class: markerLabelsContainerClass.value
        }, getMarkerLabelsContent())
      );
    }
    return content;
  }
  onBeforeUnmount(() => {
    document.removeEventListener("mouseup", onDeactivate, true);
  });
  return {
    state: {
      active,
      focus,
      preventFocus,
      dragging,
      editable,
      classes,
      tabindex,
      attributes,
      roundValueFn,
      keyStep,
      trackLen,
      innerMin,
      innerMinRatio,
      innerMax,
      innerMaxRatio,
      positionProp,
      sizeProp,
      isReversed
    },
    methods: {
      onActivate,
      onMobileClick,
      onBlur,
      onKeyup,
      getContent,
      getThumbRenderFn,
      convertRatioToModel,
      convertModelToRatio,
      getDraggingRatio
    }
  };
}
const getNodeData = () => ({});
const QSlider = createComponent({
  name: "QSlider",
  props: {
    ...useSliderProps,
    modelValue: {
      required: true,
      default: null,
      validator: (v) => typeof v === "number" || v === null
    },
    labelValue: [String, Number]
  },
  emits: useSliderEmits,
  setup(props, { emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const { state, methods } = useSlider({
      updateValue,
      updatePosition,
      getDragging,
      formAttrs: useFormAttrs(props)
    });
    const rootRef = ref(null);
    const curRatio = ref(0);
    const model = ref(0);
    function normalizeModel() {
      model.value = props.modelValue === null ? state.innerMin.value : between(props.modelValue, state.innerMin.value, state.innerMax.value);
    }
    watch(
      () => `${props.modelValue}|${state.innerMin.value}|${state.innerMax.value}`,
      normalizeModel
    );
    normalizeModel();
    const modelRatio = computed(() => methods.convertModelToRatio(model.value));
    const ratio = computed(() => state.active.value === true ? curRatio.value : modelRatio.value);
    const selectionBarStyle = computed(() => {
      const acc = {
        [state.positionProp.value]: `${100 * state.innerMinRatio.value}%`,
        [state.sizeProp.value]: `${100 * (ratio.value - state.innerMinRatio.value)}%`
      };
      if (props.selectionImg !== void 0) {
        acc.backgroundImage = `url(${props.selectionImg}) !important`;
      }
      return acc;
    });
    const getThumb = methods.getThumbRenderFn({
      focusValue: true,
      getNodeData,
      ratio,
      label: computed(() => props.labelValue !== void 0 ? props.labelValue : model.value),
      thumbColor: computed(() => props.thumbColor || props.color),
      labelColor: computed(() => props.labelColor),
      labelTextColor: computed(() => props.labelTextColor)
    });
    const trackContainerEvents = computed(() => {
      if (state.editable.value !== true) {
        return {};
      }
      return $q.platform.is.mobile === true ? { onClick: methods.onMobileClick } : {
        onMousedown: methods.onActivate,
        onFocus,
        onBlur: methods.onBlur,
        onKeydown,
        onKeyup: methods.onKeyup
      };
    });
    function updateValue(change) {
      if (model.value !== props.modelValue) {
        emit("update:modelValue", model.value);
      }
      change === true && emit("change", model.value);
    }
    function getDragging() {
      return rootRef.value.getBoundingClientRect();
    }
    function updatePosition(event, dragging = state.dragging.value) {
      const ratio2 = methods.getDraggingRatio(event, dragging);
      model.value = methods.convertRatioToModel(ratio2);
      curRatio.value = props.snap !== true || props.step === 0 ? ratio2 : methods.convertModelToRatio(model.value);
    }
    function onFocus() {
      state.focus.value = true;
    }
    function onKeydown(evt) {
      if (keyCodes.includes(evt.keyCode) === false) return;
      stopAndPrevent(evt);
      const stepVal = ([34, 33].includes(evt.keyCode) ? 10 : 1) * state.keyStep.value, offset = ([34, 37, 40].includes(evt.keyCode) ? -1 : 1) * (state.isReversed.value === true ? -1 : 1) * (props.vertical === true ? -1 : 1) * stepVal;
      model.value = between(
        state.roundValueFn.value(model.value + offset),
        state.innerMin.value,
        state.innerMax.value
      );
      updateValue();
    }
    return () => {
      const content = methods.getContent(
        selectionBarStyle,
        state.tabindex,
        trackContainerEvents,
        (node) => {
          node.push(getThumb());
        }
      );
      return h("div", {
        ref: rootRef,
        class: state.classes.value + (props.modelValue === null ? " q-slider--no-value" : ""),
        ...state.attributes.value,
        "aria-valuenow": props.modelValue
      }, content);
    };
  }
});
function getIndicatorClass(color, top, vertical) {
  const pos = vertical === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${top === true ? pos[0] : pos[1]}${color ? ` text-${color}` : ""}`;
}
const alignValues = ["left", "center", "right", "justify"];
const QTabs = createComponent({
  name: "QTabs",
  props: {
    modelValue: [Number, String],
    align: {
      type: String,
      default: "center",
      validator: (v) => alignValues.includes(v)
    },
    breakpoint: {
      type: [String, Number],
      default: 600
    },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    outsideArrows: Boolean,
    mobileArrows: Boolean,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean,
    contentClass: String,
    "onUpdate:modelValue": [Function, Array]
  },
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const { registerTick: registerScrollTick } = useTick();
    const { registerTick: registerUpdateArrowsTick } = useTick();
    const { registerTick: registerAnimateTick } = useTick();
    const { registerTimeout: registerFocusTimeout, removeTimeout: removeFocusTimeout } = useTimeout();
    const { registerTimeout: registerScrollToTabTimeout, removeTimeout: removeScrollToTabTimeout } = useTimeout();
    const rootRef = ref(null);
    const contentRef = ref(null);
    const currentModel = ref(props.modelValue);
    const scrollable = ref(false);
    const leftArrow = ref(true);
    const rightArrow = ref(false);
    const justify = ref(false);
    const tabDataList = [];
    const tabDataListLen = ref(0);
    const hasFocus = ref(false);
    let animateTimer = null, scrollTimer = null, unwatchRoute;
    const tabProps = computed(() => ({
      activeClass: props.activeClass,
      activeColor: props.activeColor,
      activeBgColor: props.activeBgColor,
      indicatorClass: getIndicatorClass(
        props.indicatorColor,
        props.switchIndicator,
        props.vertical
      ),
      narrowIndicator: props.narrowIndicator,
      inlineLabel: props.inlineLabel,
      noCaps: props.noCaps
    }));
    const hasActiveTab = computed(() => {
      const len = tabDataListLen.value;
      const val = currentModel.value;
      for (let i = 0; i < len; i++) {
        if (tabDataList[i].name.value === val) {
          return true;
        }
      }
      return false;
    });
    const alignClass = computed(() => {
      const align = scrollable.value === true ? "left" : justify.value === true ? "justify" : props.align;
      return `q-tabs__content--align-${align}`;
    });
    const classes = computed(
      () => `q-tabs row no-wrap items-center q-tabs--${scrollable.value === true ? "" : "not-"}scrollable q-tabs--${props.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${props.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${props.mobileArrows === true ? "" : "out"}-arrows` + (props.dense === true ? " q-tabs--dense" : "") + (props.shrink === true ? " col-shrink" : "") + (props.stretch === true ? " self-stretch" : "")
    );
    const innerClass = computed(
      () => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + alignClass.value + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
    );
    const domProps = computed(() => props.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" });
    const isRTL = computed(() => props.vertical !== true && $q.lang.rtl === true);
    const rtlPosCorrection = computed(() => rtlHasScrollBug === false && isRTL.value === true);
    watch(isRTL, updateArrows);
    watch(() => props.modelValue, (name) => {
      updateModel({ name, setCurrent: true, skipEmit: true });
    });
    watch(() => props.outsideArrows, recalculateScroll);
    function updateModel({ name, setCurrent, skipEmit }) {
      if (currentModel.value === name) return;
      if (skipEmit !== true && props["onUpdate:modelValue"] !== void 0) {
        emit("update:modelValue", name);
      }
      if (setCurrent === true || props["onUpdate:modelValue"] === void 0) {
        animate(currentModel.value, name);
        currentModel.value = name;
      }
    }
    function recalculateScroll() {
      registerScrollTick(() => {
        rootRef.value && updateContainer({
          width: rootRef.value.offsetWidth,
          height: rootRef.value.offsetHeight
        });
      });
    }
    function updateContainer(domSize) {
      if (domProps.value === void 0 || contentRef.value === null) return;
      const size = domSize[domProps.value.container], scrollSize = Math.min(
        contentRef.value[domProps.value.scroll],
        Array.prototype.reduce.call(
          contentRef.value.children,
          (acc, el) => acc + (el[domProps.value.content] || 0),
          0
        )
      ), scroll = size > 0 && scrollSize > size;
      scrollable.value = scroll;
      scroll === true && registerUpdateArrowsTick(updateArrows);
      justify.value = size < parseInt(props.breakpoint, 10);
    }
    function animate(oldName, newName) {
      const oldTab = oldName !== void 0 && oldName !== null && oldName !== "" ? tabDataList.find((tab) => tab.name.value === oldName) : null, newTab = newName !== void 0 && newName !== null && newName !== "" ? tabDataList.find((tab) => tab.name.value === newName) : null;
      if (hadActivated === true) {
        hadActivated = false;
      } else if (oldTab && newTab) {
        const oldEl = oldTab.tabIndicatorRef.value, newEl = newTab.tabIndicatorRef.value;
        if (animateTimer !== null) {
          clearTimeout(animateTimer);
          animateTimer = null;
        }
        oldEl.style.transition = "none";
        oldEl.style.transform = "none";
        newEl.style.transition = "none";
        newEl.style.transform = "none";
        const oldPos = oldEl.getBoundingClientRect(), newPos = newEl.getBoundingClientRect();
        newEl.style.transform = props.vertical === true ? `translate3d(0,${oldPos.top - newPos.top}px,0) scale3d(1,${newPos.height ? oldPos.height / newPos.height : 1},1)` : `translate3d(${oldPos.left - newPos.left}px,0,0) scale3d(${newPos.width ? oldPos.width / newPos.width : 1},1,1)`;
        registerAnimateTick(() => {
          animateTimer = setTimeout(() => {
            animateTimer = null;
            newEl.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)";
            newEl.style.transform = "none";
          }, 70);
        });
      }
      if (newTab && scrollable.value === true) {
        scrollToTabEl(newTab.rootRef.value);
      }
    }
    function scrollToTabEl(el) {
      const { left, width, top, height } = contentRef.value.getBoundingClientRect(), newPos = el.getBoundingClientRect();
      let offset = props.vertical === true ? newPos.top - top : newPos.left - left;
      if (offset < 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(offset);
        updateArrows();
        return;
      }
      offset += props.vertical === true ? newPos.height - height : newPos.width - width;
      if (offset > 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(offset);
        updateArrows();
      }
    }
    function updateArrows() {
      const content = contentRef.value;
      if (content === null) return;
      const rect = content.getBoundingClientRect(), pos = props.vertical === true ? content.scrollTop : Math.abs(content.scrollLeft);
      if (isRTL.value === true) {
        leftArrow.value = Math.ceil(pos + rect.width) < content.scrollWidth - 1;
        rightArrow.value = pos > 0;
      } else {
        leftArrow.value = pos > 0;
        rightArrow.value = props.vertical === true ? Math.ceil(pos + rect.height) < content.scrollHeight : Math.ceil(pos + rect.width) < content.scrollWidth;
      }
    }
    function animScrollTo(value) {
      scrollTimer !== null && clearInterval(scrollTimer);
      scrollTimer = setInterval(() => {
        if (scrollTowards(value) === true) {
          stopAnimScroll();
        }
      }, 5);
    }
    function scrollToStart() {
      animScrollTo(rtlPosCorrection.value === true ? Number.MAX_SAFE_INTEGER : 0);
    }
    function scrollToEnd() {
      animScrollTo(rtlPosCorrection.value === true ? 0 : Number.MAX_SAFE_INTEGER);
    }
    function stopAnimScroll() {
      if (scrollTimer !== null) {
        clearInterval(scrollTimer);
        scrollTimer = null;
      }
    }
    function onKbdNavigate(keyCode, fromEl) {
      const tabs = Array.prototype.filter.call(
        contentRef.value.children,
        (el) => el === fromEl || el.matches && el.matches(".q-tab.q-focusable") === true
      );
      const len = tabs.length;
      if (len === 0) return;
      if (keyCode === 36) {
        scrollToTabEl(tabs[0]);
        tabs[0].focus();
        return true;
      }
      if (keyCode === 35) {
        scrollToTabEl(tabs[len - 1]);
        tabs[len - 1].focus();
        return true;
      }
      const dirPrev = keyCode === (props.vertical === true ? 38 : 37);
      const dirNext = keyCode === (props.vertical === true ? 40 : 39);
      const dir = dirPrev === true ? -1 : dirNext === true ? 1 : void 0;
      if (dir !== void 0) {
        const rtlDir = isRTL.value === true ? -1 : 1;
        const index = tabs.indexOf(fromEl) + dir * rtlDir;
        if (index >= 0 && index < len) {
          scrollToTabEl(tabs[index]);
          tabs[index].focus({ preventScroll: true });
        }
        return true;
      }
    }
    const posFn = computed(() => rtlPosCorrection.value === true ? { get: (content) => Math.abs(content.scrollLeft), set: (content, pos) => {
      content.scrollLeft = -pos;
    } } : props.vertical === true ? { get: (content) => content.scrollTop, set: (content, pos) => {
      content.scrollTop = pos;
    } } : { get: (content) => content.scrollLeft, set: (content, pos) => {
      content.scrollLeft = pos;
    } });
    function scrollTowards(value) {
      const content = contentRef.value, { get, set } = posFn.value;
      let done = false, pos = get(content);
      const direction = value < pos ? -1 : 1;
      pos += direction * 5;
      if (pos < 0) {
        done = true;
        pos = 0;
      } else if (direction === -1 && pos <= value || direction === 1 && pos >= value) {
        done = true;
        pos = value;
      }
      set(content, pos);
      updateArrows();
      return done;
    }
    function hasQueryIncluded(targetQuery, matchingQuery) {
      for (const key in targetQuery) {
        if (targetQuery[key] !== matchingQuery[key]) {
          return false;
        }
      }
      return true;
    }
    function updateActiveRoute() {
      let name = null, bestScore = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
      const list = tabDataList.filter((tab) => tab.routeData?.hasRouterLink.value === true);
      const { hash: currentHash, query: currentQuery } = proxy.$route;
      const currentQueryLen = Object.keys(currentQuery).length;
      for (const tab of list) {
        const exact = tab.routeData.exact.value === true;
        if (tab.routeData[exact === true ? "linkIsExactActive" : "linkIsActive"].value !== true) {
          continue;
        }
        const { hash, query, matched, href } = tab.routeData.resolvedLink.value;
        const queryLen = Object.keys(query).length;
        if (exact === true) {
          if (hash !== currentHash) {
            continue;
          }
          if (queryLen !== currentQueryLen || hasQueryIncluded(currentQuery, query) === false) {
            continue;
          }
          name = tab.name.value;
          break;
        }
        if (hash !== "" && hash !== currentHash) {
          continue;
        }
        if (queryLen !== 0 && hasQueryIncluded(query, currentQuery) === false) {
          continue;
        }
        const newScore = {
          matchedLen: matched.length,
          queryDiff: currentQueryLen - queryLen,
          hrefLen: href.length - hash.length
        };
        if (newScore.matchedLen > bestScore.matchedLen) {
          name = tab.name.value;
          bestScore = newScore;
          continue;
        } else if (newScore.matchedLen !== bestScore.matchedLen) {
          continue;
        }
        if (newScore.queryDiff < bestScore.queryDiff) {
          name = tab.name.value;
          bestScore = newScore;
        } else if (newScore.queryDiff !== bestScore.queryDiff) {
          continue;
        }
        if (newScore.hrefLen > bestScore.hrefLen) {
          name = tab.name.value;
          bestScore = newScore;
        }
      }
      if (name === null && tabDataList.some((tab) => tab.routeData === void 0 && tab.name.value === currentModel.value) === true) {
        hadActivated = false;
        return;
      }
      updateModel({ name, setCurrent: true });
    }
    function onFocusin(e) {
      removeFocusTimeout();
      if (hasFocus.value !== true && rootRef.value !== null && e.target && typeof e.target.closest === "function") {
        const tab = e.target.closest(".q-tab");
        if (tab && rootRef.value.contains(tab) === true) {
          hasFocus.value = true;
          scrollable.value === true && scrollToTabEl(tab);
        }
      }
    }
    function onFocusout() {
      registerFocusTimeout(() => {
        hasFocus.value = false;
      }, 30);
    }
    function verifyRouteModel() {
      if ($tabs.avoidRouteWatcher === false) {
        registerScrollToTabTimeout(updateActiveRoute);
      } else {
        removeScrollToTabTimeout();
      }
    }
    function watchRoute() {
      if (unwatchRoute === void 0) {
        const unwatch = watch(() => proxy.$route.fullPath, verifyRouteModel);
        unwatchRoute = () => {
          unwatch();
          unwatchRoute = void 0;
        };
      }
    }
    function registerTab(tabData) {
      tabDataList.push(tabData);
      tabDataListLen.value++;
      recalculateScroll();
      if (tabData.routeData === void 0 || proxy.$route === void 0) {
        registerScrollToTabTimeout(() => {
          if (scrollable.value === true) {
            const value = currentModel.value;
            const newTab = value !== void 0 && value !== null && value !== "" ? tabDataList.find((tab) => tab.name.value === value) : null;
            newTab && scrollToTabEl(newTab.rootRef.value);
          }
        });
      } else {
        watchRoute();
        if (tabData.routeData.hasRouterLink.value === true) {
          verifyRouteModel();
        }
      }
    }
    function unregisterTab(tabData) {
      tabDataList.splice(tabDataList.indexOf(tabData), 1);
      tabDataListLen.value--;
      recalculateScroll();
      if (unwatchRoute !== void 0 && tabData.routeData !== void 0) {
        if (tabDataList.every((tab) => tab.routeData === void 0) === true) {
          unwatchRoute();
        }
        verifyRouteModel();
      }
    }
    const $tabs = {
      currentModel,
      tabProps,
      hasFocus,
      hasActiveTab,
      registerTab,
      unregisterTab,
      verifyRouteModel,
      updateModel,
      onKbdNavigate,
      avoidRouteWatcher: false
      // false | string (uid)
    };
    provide(tabsKey, $tabs);
    function cleanup() {
      animateTimer !== null && clearTimeout(animateTimer);
      stopAnimScroll();
      unwatchRoute?.();
    }
    let hadRouteWatcher, hadActivated;
    onBeforeUnmount(cleanup);
    onDeactivated(() => {
      hadRouteWatcher = unwatchRoute !== void 0;
      cleanup();
    });
    onActivated(() => {
      if (hadRouteWatcher === true) {
        watchRoute();
        hadActivated = true;
        verifyRouteModel();
      }
      recalculateScroll();
    });
    return () => {
      return h("div", {
        ref: rootRef,
        class: classes.value,
        role: "tablist",
        onFocusin,
        onFocusout
      }, [
        h(QResizeObserver, { onResize: updateContainer }),
        h("div", {
          ref: contentRef,
          class: innerClass.value,
          onScroll: updateArrows
        }, hSlot(slots.default)),
        h(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (leftArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.leftIcon || $q.iconSet.tabs[props.vertical === true ? "up" : "left"],
          onMousedownPassive: scrollToStart,
          onTouchstartPassive: scrollToStart,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        }),
        h(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (rightArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.rightIcon || $q.iconSet.tabs[props.vertical === true ? "down" : "right"],
          onMousedownPassive: scrollToEnd,
          onTouchstartPassive: scrollToEnd,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        })
      ]);
    };
  }
});
let id = 0;
const useTabEmits = ["click", "keydown"];
const useTabProps = {
  icon: String,
  label: [Number, String],
  alert: [Boolean, String],
  alertIcon: String,
  name: {
    type: [Number, String],
    default: () => `t_${id++}`
  },
  noCaps: Boolean,
  tabindex: [String, Number],
  disable: Boolean,
  contentClass: String,
  ripple: {
    type: [Boolean, Object],
    default: true
  }
};
function useTab(props, slots, emit, routeData) {
  const $tabs = inject(tabsKey, emptyRenderFn);
  if ($tabs === emptyRenderFn) {
    console.error("QTab/QRouteTab component needs to be child of QTabs");
    return emptyRenderFn;
  }
  const { proxy } = getCurrentInstance();
  const blurTargetRef = ref(null);
  const rootRef = ref(null);
  const tabIndicatorRef = ref(null);
  const ripple = computed(() => props.disable === true || props.ripple === false ? false : Object.assign(
    { keyCodes: [13, 32], early: true },
    props.ripple === true ? {} : props.ripple
  ));
  const isActive = computed(() => $tabs.currentModel.value === props.name);
  const classes = computed(
    () => "q-tab relative-position self-stretch flex flex-center text-center" + (isActive.value === true ? " q-tab--active" + ($tabs.tabProps.value.activeClass ? " " + $tabs.tabProps.value.activeClass : "") + ($tabs.tabProps.value.activeColor ? ` text-${$tabs.tabProps.value.activeColor}` : "") + ($tabs.tabProps.value.activeBgColor ? ` bg-${$tabs.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (props.icon && props.label && $tabs.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (props.noCaps === true || $tabs.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (props.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (routeData !== void 0 ? routeData.linkClass.value : "")
  );
  const innerClass = computed(
    () => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + ($tabs.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
  );
  const tabIndex = computed(() => props.disable === true || $tabs.hasFocus.value === true || isActive.value === false && $tabs.hasActiveTab.value === true ? -1 : props.tabindex || 0);
  function onClick(e, keyboard) {
    if (keyboard !== true && e?.qAvoidFocus !== true) {
      blurTargetRef.value?.focus();
    }
    if (props.disable === true) {
      if (routeData?.hasRouterLink.value === true) {
        stopAndPrevent(e);
      }
      return;
    }
    if (routeData === void 0) {
      $tabs.updateModel({ name: props.name });
      emit("click", e);
      return;
    }
    if (routeData.hasRouterLink.value === true) {
      const go = (opts = {}) => {
        let hardError;
        const reqId = opts.to === void 0 || isDeepEqual(opts.to, props.to) === true ? $tabs.avoidRouteWatcher = uid() : null;
        return routeData.navigateToRouterLink(e, { ...opts, returnRouterError: true }).catch((err) => {
          hardError = err;
        }).then((softError) => {
          if (reqId === $tabs.avoidRouteWatcher) {
            $tabs.avoidRouteWatcher = false;
            if (hardError === void 0 && (softError === void 0 || softError.message?.startsWith("Avoided redundant navigation") === true)) {
              $tabs.updateModel({ name: props.name });
            }
          }
          if (opts.returnRouterError === true) {
            return hardError !== void 0 ? Promise.reject(hardError) : softError;
          }
        });
      };
      emit("click", e, go);
      e.defaultPrevented !== true && go();
      return;
    }
    emit("click", e);
  }
  function onKeydown(e) {
    if (isKeyCode(e, [13, 32])) {
      onClick(e, true);
    } else if (shouldIgnoreKey(e) !== true && e.keyCode >= 35 && e.keyCode <= 40 && e.altKey !== true && e.metaKey !== true) {
      $tabs.onKbdNavigate(e.keyCode, proxy.$el) === true && stopAndPrevent(e);
    }
    emit("keydown", e);
  }
  function getContent() {
    const narrow = $tabs.tabProps.value.narrowIndicator, content = [], indicator = h("div", {
      ref: tabIndicatorRef,
      class: [
        "q-tab__indicator",
        $tabs.tabProps.value.indicatorClass
      ]
    });
    props.icon !== void 0 && content.push(
      h(QIcon, {
        class: "q-tab__icon",
        name: props.icon
      })
    );
    props.label !== void 0 && content.push(
      h("div", { class: "q-tab__label" }, props.label)
    );
    props.alert !== false && content.push(
      props.alertIcon !== void 0 ? h(QIcon, {
        class: "q-tab__alert-icon",
        color: props.alert !== true ? props.alert : void 0,
        name: props.alertIcon
      }) : h("div", {
        class: "q-tab__alert" + (props.alert !== true ? ` text-${props.alert}` : "")
      })
    );
    narrow === true && content.push(indicator);
    const node = [
      h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef }),
      h("div", { class: innerClass.value }, hMergeSlot(slots.default, content))
    ];
    narrow === false && node.push(indicator);
    return node;
  }
  const tabData = {
    name: computed(() => props.name),
    rootRef,
    tabIndicatorRef,
    routeData
  };
  onBeforeUnmount(() => {
    $tabs.unregisterTab(tabData);
  });
  onMounted(() => {
    $tabs.registerTab(tabData);
  });
  function renderTab(tag, customData) {
    const data = {
      ref: rootRef,
      class: classes.value,
      tabindex: tabIndex.value,
      role: "tab",
      "aria-selected": isActive.value === true ? "true" : "false",
      "aria-disabled": props.disable === true ? "true" : void 0,
      onClick,
      onKeydown,
      ...customData
    };
    return withDirectives(
      h(tag, data, getContent()),
      [[Ripple, ripple.value]]
    );
  }
  return { renderTab, $tabs };
}
const QTab = createComponent({
  name: "QTab",
  props: useTabProps,
  emits: useTabEmits,
  setup(props, { slots, emit }) {
    const { renderTab } = useTab(props, slots, emit);
    return () => renderTab("div");
  }
});
function parseArg(arg) {
  const data = [0.06, 6, 50];
  if (typeof arg === "string" && arg.length) {
    arg.split(":").forEach((val, index) => {
      const v = parseFloat(val);
      v && (data[index] = v);
    });
  }
  return data;
}
const TouchSwipe = createDirective(
  {
    name: "touch-swipe",
    beforeMount(el, { value, arg, modifiers }) {
      if (modifiers.mouse !== true && client.has.touch !== true) return;
      const mouseCapture = modifiers.mouseCapture === true ? "Capture" : "";
      const ctx = {
        handler: value,
        sensitivity: parseArg(arg),
        direction: getModifierDirections(modifiers),
        noop,
        mouseStart(evt) {
          if (shouldStart(evt, ctx) && leftClick(evt)) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", `notPassive${mouseCapture}`],
              [document, "mouseup", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (shouldStart(evt, ctx)) {
            const target = evt.target;
            addEvt(ctx, "temp", [
              [target, "touchmove", "move", "notPassiveCapture"],
              [target, "touchcancel", "end", "notPassiveCapture"],
              [target, "touchend", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          client.is.firefox === true && preventDraggable(el, true);
          const pos = position(evt);
          ctx.event = {
            x: pos.left,
            y: pos.top,
            time: Date.now(),
            mouse: mouseEvent === true,
            dir: false
          };
        },
        move(evt) {
          if (ctx.event === void 0) return;
          if (ctx.event.dir !== false) {
            stopAndPrevent(evt);
            return;
          }
          const time = Date.now() - ctx.event.time;
          if (time === 0) return;
          const pos = position(evt), distX = pos.left - ctx.event.x, absX = Math.abs(distX), distY = pos.top - ctx.event.y, absY = Math.abs(distY);
          if (ctx.event.mouse !== true) {
            if (absX < ctx.sensitivity[1] && absY < ctx.sensitivity[1]) {
              ctx.end(evt);
              return;
            }
          } else if (window.getSelection().toString() !== "") {
            ctx.end(evt);
            return;
          } else if (absX < ctx.sensitivity[2] && absY < ctx.sensitivity[2]) {
            return;
          }
          const velX = absX / time, velY = absY / time;
          if (ctx.direction.vertical === true && absX < absY && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = distY < 0 ? "up" : "down";
          }
          if (ctx.direction.horizontal === true && absX > absY && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = distX < 0 ? "left" : "right";
          }
          if (ctx.direction.up === true && absX < absY && distY < 0 && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = "up";
          }
          if (ctx.direction.down === true && absX < absY && distY > 0 && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = "down";
          }
          if (ctx.direction.left === true && absX > absY && distX < 0 && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = "left";
          }
          if (ctx.direction.right === true && absX > absY && distX > 0 && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = "right";
          }
          if (ctx.event.dir !== false) {
            stopAndPrevent(evt);
            if (ctx.event.mouse === true) {
              document.body.classList.add("no-pointer-events--children");
              document.body.classList.add("non-selectable");
              clearSelection();
              ctx.styleCleanup = (withDelay) => {
                ctx.styleCleanup = void 0;
                document.body.classList.remove("non-selectable");
                const remove = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                if (withDelay === true) {
                  setTimeout(remove, 50);
                } else {
                  remove();
                }
              };
            }
            ctx.handler({
              evt,
              touch: ctx.event.mouse !== true,
              mouse: ctx.event.mouse,
              direction: ctx.event.dir,
              duration: time,
              distance: {
                x: absX,
                y: absY
              }
            });
          } else {
            ctx.end(evt);
          }
        },
        end(evt) {
          if (ctx.event === void 0) return;
          cleanEvt(ctx, "temp");
          client.is.firefox === true && preventDraggable(el, false);
          ctx.styleCleanup?.(true);
          if (evt !== void 0 && ctx.event.dir !== false) stopAndPrevent(evt);
          ctx.event = void 0;
        }
      };
      el.__qtouchswipe = ctx;
      if (modifiers.mouse === true) {
        const capture = modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "mousedown", "mouseStart", `passive${capture}`]
        ]);
      }
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchmove", "noop", "notPassiveCapture"]
        // cannot be passive (ex: iOS scroll)
      ]);
    },
    updated(el, bindings) {
      const ctx = el.__qtouchswipe;
      if (ctx !== void 0) {
        if (bindings.oldValue !== bindings.value) {
          typeof bindings.value !== "function" && ctx.end();
          ctx.handler = bindings.value;
        }
        ctx.direction = getModifierDirections(bindings.modifiers);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchswipe;
      if (ctx !== void 0) {
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        client.is.firefox === true && preventDraggable(el, false);
        ctx.styleCleanup?.();
        delete el.__qtouchswipe;
      }
    }
  }
);
function useRenderCache() {
  let cache = /* @__PURE__ */ Object.create(null);
  return {
    getCache: (key, defaultValue) => cache[key] === void 0 ? cache[key] = typeof defaultValue === "function" ? defaultValue() : defaultValue : cache[key],
    setCache(key, obj) {
      cache[key] = obj;
    },
    hasCache(key) {
      return Object.hasOwnProperty.call(cache, key);
    },
    clearCache(key) {
      if (key !== void 0) {
        delete cache[key];
      } else {
        cache = /* @__PURE__ */ Object.create(null);
      }
    }
  };
}
const usePanelChildProps = {
  name: { required: true },
  disable: Boolean
};
const PanelWrapper = {
  setup(_, { slots }) {
    return () => h("div", {
      class: "q-panel scroll",
      role: "tabpanel"
    }, hSlot(slots.default));
  }
};
const usePanelProps = {
  modelValue: {
    required: true
  },
  animated: Boolean,
  infinite: Boolean,
  swipeable: Boolean,
  vertical: Boolean,
  transitionPrev: String,
  transitionNext: String,
  transitionDuration: {
    type: [String, Number],
    default: 300
  },
  keepAlive: Boolean,
  keepAliveInclude: [String, Array, RegExp],
  keepAliveExclude: [String, Array, RegExp],
  keepAliveMax: Number
};
const usePanelEmits = ["update:modelValue", "beforeTransition", "transition"];
function usePanel() {
  const { props, emit, proxy } = getCurrentInstance();
  const { getCache } = useRenderCache();
  const { registerTimeout } = useTimeout();
  let panels, forcedPanelTransition;
  const panelTransition = ref(null);
  const panelIndex = { value: null };
  function onSwipe(evt) {
    const dir = props.vertical === true ? "up" : "left";
    goToPanelByOffset((proxy.$q.lang.rtl === true ? -1 : 1) * (evt.direction === dir ? 1 : -1));
  }
  const panelDirectives = computed(() => {
    return [[
      TouchSwipe,
      onSwipe,
      void 0,
      {
        horizontal: props.vertical !== true,
        vertical: props.vertical,
        mouse: true
      }
    ]];
  });
  const transitionPrev = computed(
    () => props.transitionPrev || `slide-${props.vertical === true ? "down" : "right"}`
  );
  const transitionNext = computed(
    () => props.transitionNext || `slide-${props.vertical === true ? "up" : "left"}`
  );
  const transitionStyle = computed(
    () => `--q-transition-duration: ${props.transitionDuration}ms`
  );
  const contentKey = computed(() => typeof props.modelValue === "string" || typeof props.modelValue === "number" ? props.modelValue : String(props.modelValue));
  const keepAliveProps = computed(() => ({
    include: props.keepAliveInclude,
    exclude: props.keepAliveExclude,
    max: props.keepAliveMax
  }));
  const needsUniqueKeepAliveWrapper = computed(
    () => props.keepAliveInclude !== void 0 || props.keepAliveExclude !== void 0
  );
  watch(() => props.modelValue, (newVal, oldVal) => {
    const index = isValidPanelName(newVal) === true ? getPanelIndex(newVal) : -1;
    if (forcedPanelTransition !== true) {
      updatePanelTransition(
        index === -1 ? 0 : index < getPanelIndex(oldVal) ? -1 : 1
      );
    }
    if (panelIndex.value !== index) {
      panelIndex.value = index;
      emit("beforeTransition", newVal, oldVal);
      registerTimeout(() => {
        emit("transition", newVal, oldVal);
      }, props.transitionDuration);
    }
  });
  function nextPanel() {
    goToPanelByOffset(1);
  }
  function previousPanel() {
    goToPanelByOffset(-1);
  }
  function goToPanel(name) {
    emit("update:modelValue", name);
  }
  function isValidPanelName(name) {
    return name !== void 0 && name !== null && name !== "";
  }
  function getPanelIndex(name) {
    return panels.findIndex((panel) => {
      return panel.props.name === name && panel.props.disable !== "" && panel.props.disable !== true;
    });
  }
  function getEnabledPanels() {
    return panels.filter((panel) => {
      return panel.props.disable !== "" && panel.props.disable !== true;
    });
  }
  function updatePanelTransition(direction) {
    const val = direction !== 0 && props.animated === true && panelIndex.value !== -1 ? "q-transition--" + (direction === -1 ? transitionPrev.value : transitionNext.value) : null;
    if (panelTransition.value !== val) {
      panelTransition.value = val;
    }
  }
  function goToPanelByOffset(direction, startIndex = panelIndex.value) {
    let index = startIndex + direction;
    while (index !== -1 && index < panels.length) {
      const opt = panels[index];
      if (opt !== void 0 && opt.props.disable !== "" && opt.props.disable !== true) {
        updatePanelTransition(direction);
        forcedPanelTransition = true;
        emit("update:modelValue", opt.props.name);
        setTimeout(() => {
          forcedPanelTransition = false;
        });
        return;
      }
      index += direction;
    }
    if (props.infinite === true && panels.length !== 0 && startIndex !== -1 && startIndex !== panels.length) {
      goToPanelByOffset(direction, direction === -1 ? panels.length : -1);
    }
  }
  function updatePanelIndex() {
    const index = getPanelIndex(props.modelValue);
    if (panelIndex.value !== index) {
      panelIndex.value = index;
    }
    return true;
  }
  function getPanelContentChild() {
    const panel = isValidPanelName(props.modelValue) === true && updatePanelIndex() && panels[panelIndex.value];
    return props.keepAlive === true ? [
      h(KeepAlive, keepAliveProps.value, [
        h(
          needsUniqueKeepAliveWrapper.value === true ? getCache(contentKey.value, () => ({ ...PanelWrapper, name: contentKey.value })) : PanelWrapper,
          { key: contentKey.value, style: transitionStyle.value },
          () => panel
        )
      ])
    ] : [
      h("div", {
        class: "q-panel scroll",
        style: transitionStyle.value,
        key: contentKey.value,
        role: "tabpanel"
      }, [panel])
    ];
  }
  function getPanelContent() {
    if (panels.length === 0) return;
    return props.animated === true ? [h(Transition, { name: panelTransition.value }, getPanelContentChild)] : getPanelContentChild();
  }
  function updatePanelsList(slots) {
    panels = getNormalizedVNodes(
      hSlot(slots.default, [])
    ).filter(
      (panel) => panel.props !== null && panel.props.slot === void 0 && isValidPanelName(panel.props.name) === true
    );
    return panels.length;
  }
  function getPanels() {
    return panels;
  }
  Object.assign(proxy, {
    next: nextPanel,
    previous: previousPanel,
    goTo: goToPanel
  });
  return {
    panelIndex,
    panelDirectives,
    updatePanelsList,
    updatePanelIndex,
    getPanelContent,
    getEnabledPanels,
    getPanels,
    isValidPanelName,
    keepAliveProps,
    needsUniqueKeepAliveWrapper,
    goToPanelByOffset,
    goToPanel,
    nextPanel,
    previousPanel
  };
}
const QTabPanels = createComponent({
  name: "QTabPanels",
  props: {
    ...usePanelProps,
    ...useDarkProps
  },
  emits: usePanelEmits,
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const { updatePanelsList, getPanelContent, panelDirectives } = usePanel();
    const classes = computed(
      () => "q-tab-panels q-panel-parent" + (isDark.value === true ? " q-tab-panels--dark q-dark" : "")
    );
    return () => {
      updatePanelsList(slots);
      return hDir(
        "div",
        { class: classes.value },
        getPanelContent(),
        "pan",
        props.swipeable,
        () => panelDirectives.value
      );
    };
  }
});
const QTabPanel = createComponent({
  name: "QTabPanel",
  props: usePanelChildProps,
  setup(_, { slots }) {
    return () => h("div", { class: "q-tab-panel", role: "tabpanel" }, hSlot(slots.default));
  }
});
const reRGBA = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function rgbToHex({ r, g, b, a }) {
  const alpha = a !== void 0;
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);
  if (r > 255 || g > 255 || b > 255 || alpha && a > 100) {
    throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  }
  a = alpha ? (Math.round(255 * a / 100) | 1 << 8).toString(16).slice(1) : "";
  return "#" + (b | g << 8 | r << 16 | 1 << 24).toString(16).slice(1) + a;
}
function rgbToString({ r, g, b, a }) {
  return `rgb${a !== void 0 ? "a" : ""}(${r},${g},${b}${a !== void 0 ? "," + a / 100 : ""})`;
}
function hexToRgb(hex) {
  if (typeof hex !== "string") {
    throw new TypeError("Expected a string");
  }
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  } else if (hex.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }
  const num = parseInt(hex, 16);
  return hex.length > 6 ? { r: num >> 24 & 255, g: num >> 16 & 255, b: num >> 8 & 255, a: Math.round((num & 255) / 2.55) } : { r: num >> 16, g: num >> 8 & 255, b: num & 255 };
}
function hsvToRgb({ h: h2, s, v, a }) {
  let r, g, b;
  s = s / 100;
  v = v / 100;
  h2 = h2 / 360;
  const i = Math.floor(h2 * 6), f = h2 * 6 - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
    a
  };
}
function rgbToHsv({ r, g, b, a }) {
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min, s = max === 0 ? 0 : d / max, v = max / 255;
  let h2;
  switch (max) {
    case min:
      h2 = 0;
      break;
    case r:
      h2 = g - b + d * (g < b ? 6 : 0);
      h2 /= 6 * d;
      break;
    case g:
      h2 = b - r + d * 2;
      h2 /= 6 * d;
      break;
    case b:
      h2 = r - g + d * 4;
      h2 /= 6 * d;
      break;
  }
  return {
    h: Math.round(h2 * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
    a
  };
}
function textToRgb(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string");
  }
  const color = str.replace(/ /g, "");
  const m = reRGBA.exec(color);
  if (m === null) {
    return hexToRgb(color);
  }
  const rgb = {
    r: Math.min(255, parseInt(m[2], 10)),
    g: Math.min(255, parseInt(m[3], 10)),
    b: Math.min(255, parseInt(m[4], 10))
  };
  if (m[1]) {
    const alpha = parseFloat(m[5]);
    rgb.a = Math.min(1, isNaN(alpha) === true ? 1 : alpha) * 100;
  }
  return rgb;
}
function luminosity(color) {
  if (typeof color !== "string" && (!color || color.r === void 0)) {
    throw new TypeError("Expected a string or a {r, g, b} object as color");
  }
  const rgb = typeof color === "string" ? textToRgb(color) : color, r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255, R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4), G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4), B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
const palette = [
  "rgb(255,204,204)",
  "rgb(255,230,204)",
  "rgb(255,255,204)",
  "rgb(204,255,204)",
  "rgb(204,255,230)",
  "rgb(204,255,255)",
  "rgb(204,230,255)",
  "rgb(204,204,255)",
  "rgb(230,204,255)",
  "rgb(255,204,255)",
  "rgb(255,153,153)",
  "rgb(255,204,153)",
  "rgb(255,255,153)",
  "rgb(153,255,153)",
  "rgb(153,255,204)",
  "rgb(153,255,255)",
  "rgb(153,204,255)",
  "rgb(153,153,255)",
  "rgb(204,153,255)",
  "rgb(255,153,255)",
  "rgb(255,102,102)",
  "rgb(255,179,102)",
  "rgb(255,255,102)",
  "rgb(102,255,102)",
  "rgb(102,255,179)",
  "rgb(102,255,255)",
  "rgb(102,179,255)",
  "rgb(102,102,255)",
  "rgb(179,102,255)",
  "rgb(255,102,255)",
  "rgb(255,51,51)",
  "rgb(255,153,51)",
  "rgb(255,255,51)",
  "rgb(51,255,51)",
  "rgb(51,255,153)",
  "rgb(51,255,255)",
  "rgb(51,153,255)",
  "rgb(51,51,255)",
  "rgb(153,51,255)",
  "rgb(255,51,255)",
  "rgb(255,0,0)",
  "rgb(255,128,0)",
  "rgb(255,255,0)",
  "rgb(0,255,0)",
  "rgb(0,255,128)",
  "rgb(0,255,255)",
  "rgb(0,128,255)",
  "rgb(0,0,255)",
  "rgb(128,0,255)",
  "rgb(255,0,255)",
  "rgb(245,0,0)",
  "rgb(245,123,0)",
  "rgb(245,245,0)",
  "rgb(0,245,0)",
  "rgb(0,245,123)",
  "rgb(0,245,245)",
  "rgb(0,123,245)",
  "rgb(0,0,245)",
  "rgb(123,0,245)",
  "rgb(245,0,245)",
  "rgb(214,0,0)",
  "rgb(214,108,0)",
  "rgb(214,214,0)",
  "rgb(0,214,0)",
  "rgb(0,214,108)",
  "rgb(0,214,214)",
  "rgb(0,108,214)",
  "rgb(0,0,214)",
  "rgb(108,0,214)",
  "rgb(214,0,214)",
  "rgb(163,0,0)",
  "rgb(163,82,0)",
  "rgb(163,163,0)",
  "rgb(0,163,0)",
  "rgb(0,163,82)",
  "rgb(0,163,163)",
  "rgb(0,82,163)",
  "rgb(0,0,163)",
  "rgb(82,0,163)",
  "rgb(163,0,163)",
  "rgb(92,0,0)",
  "rgb(92,46,0)",
  "rgb(92,92,0)",
  "rgb(0,92,0)",
  "rgb(0,92,46)",
  "rgb(0,92,92)",
  "rgb(0,46,92)",
  "rgb(0,0,92)",
  "rgb(46,0,92)",
  "rgb(92,0,92)",
  "rgb(255,255,255)",
  "rgb(205,205,205)",
  "rgb(178,178,178)",
  "rgb(153,153,153)",
  "rgb(127,127,127)",
  "rgb(102,102,102)",
  "rgb(76,76,76)",
  "rgb(51,51,51)",
  "rgb(25,25,25)",
  "rgb(0,0,0)"
];
const thumbPath = "M5 5 h10 v10 h-10 v-10 z";
const alphaTrackImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
const QColor = createComponent({
  name: "QColor",
  props: {
    ...useDarkProps,
    ...useFormProps,
    modelValue: String,
    defaultValue: String,
    defaultView: {
      type: String,
      default: "spectrum",
      validator: (v) => ["spectrum", "tune", "palette"].includes(v)
    },
    formatModel: {
      type: String,
      default: "auto",
      validator: (v) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(v)
    },
    palette: Array,
    noHeader: Boolean,
    noHeaderTabs: Boolean,
    noFooter: Boolean,
    square: Boolean,
    flat: Boolean,
    bordered: Boolean,
    disable: Boolean,
    readonly: Boolean
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = useDark(props, $q);
    const { getCache } = useRenderCache();
    const spectrumRef = ref(null);
    const errorIconRef = ref(null);
    const forceHex = computed(() => props.formatModel === "auto" ? null : props.formatModel.indexOf("hex") !== -1);
    const forceAlpha = computed(() => props.formatModel === "auto" ? null : props.formatModel.indexOf("a") !== -1);
    const topView = ref(
      props.formatModel === "auto" ? props.modelValue === void 0 || props.modelValue === null || props.modelValue === "" || props.modelValue.startsWith("#") ? "hex" : "rgb" : props.formatModel.startsWith("hex") ? "hex" : "rgb"
    );
    const view = ref(props.defaultView);
    const model = ref(parseModel(props.modelValue || props.defaultValue));
    const editable = computed(() => props.disable !== true && props.readonly !== true);
    const isHex = computed(
      () => props.modelValue === void 0 || props.modelValue === null || props.modelValue === "" || props.modelValue.startsWith("#")
    );
    const isOutputHex = computed(() => forceHex.value !== null ? forceHex.value : isHex.value);
    const formAttrs = computed(() => ({
      type: "hidden",
      name: props.name,
      value: model.value[isOutputHex.value === true ? "hex" : "rgb"]
    }));
    const injectFormInput = useFormInject(formAttrs);
    const hasAlpha = computed(() => forceAlpha.value !== null ? forceAlpha.value : model.value.a !== void 0);
    const currentBgColor = computed(() => ({
      backgroundColor: model.value.rgb || "#000"
    }));
    const headerClass = computed(() => {
      const light = model.value.a !== void 0 && model.value.a < 65 ? true : luminosity(model.value) > 0.4;
      return `q-color-picker__header-content q-color-picker__header-content--${light ? "light" : "dark"}`;
    });
    const spectrumStyle = computed(() => ({
      background: `hsl(${model.value.h},100%,50%)`
    }));
    const spectrumPointerStyle = computed(() => ({
      top: `${100 - model.value.v}%`,
      [$q.lang.rtl === true ? "right" : "left"]: `${model.value.s}%`
    }));
    const computedPalette = computed(() => props.palette !== void 0 && props.palette.length !== 0 ? props.palette : palette);
    const classes = computed(
      () => "q-color-picker" + (props.bordered === true ? " q-color-picker--bordered" : "") + (props.square === true ? " q-color-picker--square no-border-radius" : "") + (props.flat === true ? " q-color-picker--flat no-shadow" : "") + (props.disable === true ? " disabled" : "") + (isDark.value === true ? " q-color-picker--dark q-dark" : "")
    );
    const attributes = computed(() => props.disable === true ? { "aria-disabled": "true" } : {});
    const spectrumDirective = computed(() => {
      return [[
        TouchPan,
        onSpectrumPan,
        void 0,
        { prevent: true, stop: true, mouse: true }
      ]];
    });
    watch(() => props.modelValue, (v) => {
      const localModel = parseModel(v || props.defaultValue);
      if (localModel.hex !== model.value.hex) {
        model.value = localModel;
      }
    });
    watch(() => props.defaultValue, (v) => {
      if (!props.modelValue && v) {
        const localModel = parseModel(v);
        if (localModel.hex !== model.value.hex) {
          model.value = localModel;
        }
      }
    });
    function updateModel(rgb, change) {
      model.value.hex = rgbToHex(rgb);
      model.value.rgb = rgbToString(rgb);
      model.value.r = rgb.r;
      model.value.g = rgb.g;
      model.value.b = rgb.b;
      model.value.a = rgb.a;
      const value = model.value[isOutputHex.value === true ? "hex" : "rgb"];
      emit("update:modelValue", value);
      change === true && emit("change", value);
    }
    function parseModel(v) {
      const alpha = forceAlpha.value !== void 0 ? forceAlpha.value : props.formatModel === "auto" ? null : props.formatModel.indexOf("a") !== -1;
      if (typeof v !== "string" || v.length === 0 || testPattern.anyColor(v.replace(/ /g, "")) !== true) {
        return {
          h: 0,
          s: 0,
          v: 0,
          r: 0,
          g: 0,
          b: 0,
          a: alpha === true ? 100 : void 0,
          hex: void 0,
          rgb: void 0
        };
      }
      const model2 = textToRgb(v);
      if (alpha === true && model2.a === void 0) {
        model2.a = 100;
      }
      model2.hex = rgbToHex(model2);
      model2.rgb = rgbToString(model2);
      return Object.assign(model2, rgbToHsv(model2));
    }
    function changeSpectrum(left, top, change) {
      const panel = spectrumRef.value;
      if (panel === null) return;
      const width = panel.clientWidth, height = panel.clientHeight, rect = panel.getBoundingClientRect();
      let x = Math.min(width, Math.max(0, left - rect.left));
      if ($q.lang.rtl === true) {
        x = width - x;
      }
      const y = Math.min(height, Math.max(0, top - rect.top)), s = Math.round(100 * x / width), v = Math.round(100 * Math.max(0, Math.min(1, -(y / height) + 1))), rgb = hsvToRgb({
        h: model.value.h,
        s,
        v,
        a: hasAlpha.value === true ? model.value.a : void 0
      });
      model.value.s = s;
      model.value.v = v;
      updateModel(rgb, change);
    }
    function onHue(val, change) {
      const h2 = Math.round(val);
      const rgb = hsvToRgb({
        h: h2,
        s: model.value.s,
        v: model.value.v,
        a: hasAlpha.value === true ? model.value.a : void 0
      });
      model.value.h = h2;
      updateModel(rgb, change);
    }
    function onHueChange(val) {
      onHue(val, true);
    }
    function onNumericChange(value, formatModel, max, evt, change) {
      evt !== void 0 && stop(evt);
      if (!/^[0-9]+$/.test(value)) {
        change === true && proxy.$forceUpdate();
        return;
      }
      const val = Math.floor(Number(value));
      if (val < 0 || val > max) {
        change === true && proxy.$forceUpdate();
        return;
      }
      const rgb = {
        r: formatModel === "r" ? val : model.value.r,
        g: formatModel === "g" ? val : model.value.g,
        b: formatModel === "b" ? val : model.value.b,
        a: hasAlpha.value === true ? formatModel === "a" ? val : model.value.a : void 0
      };
      if (formatModel !== "a") {
        const hsv = rgbToHsv(rgb);
        model.value.h = hsv.h;
        model.value.s = hsv.s;
        model.value.v = hsv.v;
      }
      updateModel(rgb, change);
      if (change !== true && evt?.target.selectionEnd !== void 0) {
        const index = evt.target.selectionEnd;
        nextTick(() => {
          evt.target.setSelectionRange(index, index);
        });
      }
    }
    function onEditorChange(evt, change) {
      let rgb;
      const inp = evt.target.value;
      stop(evt);
      if (topView.value === "hex") {
        if (inp.length !== (hasAlpha.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(inp)) {
          return true;
        }
        rgb = hexToRgb(inp);
      } else {
        let model2;
        if (!inp.endsWith(")")) {
          return true;
        } else if (hasAlpha.value !== true && inp.startsWith("rgb(")) {
          model2 = inp.substring(4, inp.length - 1).split(",").map((n) => parseInt(n, 10));
          if (model2.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(inp)) {
            return true;
          }
        } else if (hasAlpha.value === true && inp.startsWith("rgba(")) {
          model2 = inp.substring(5, inp.length - 1).split(",");
          if (model2.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(inp)) {
            return true;
          }
          for (let i = 0; i < 3; i++) {
            const v2 = parseInt(model2[i], 10);
            if (v2 < 0 || v2 > 255) {
              return true;
            }
            model2[i] = v2;
          }
          const v = parseFloat(model2[3]);
          if (v < 0 || v > 1) {
            return true;
          }
          model2[3] = v;
        } else {
          return true;
        }
        if (model2[0] < 0 || model2[0] > 255 || model2[1] < 0 || model2[1] > 255 || model2[2] < 0 || model2[2] > 255 || hasAlpha.value === true && (model2[3] < 0 || model2[3] > 1)) {
          return true;
        }
        rgb = {
          r: model2[0],
          g: model2[1],
          b: model2[2],
          a: hasAlpha.value === true ? model2[3] * 100 : void 0
        };
      }
      const hsv = rgbToHsv(rgb);
      model.value.h = hsv.h;
      model.value.s = hsv.s;
      model.value.v = hsv.v;
      updateModel(rgb, change);
      if (change !== true) {
        const index = evt.target.selectionEnd;
        nextTick(() => {
          evt.target.setSelectionRange(index, index);
        });
      }
    }
    function onPalettePick(color) {
      const def = parseModel(color);
      const rgb = { r: def.r, g: def.g, b: def.b, a: def.a };
      if (rgb.a === void 0) {
        rgb.a = model.value.a;
      }
      model.value.h = def.h;
      model.value.s = def.s;
      model.value.v = def.v;
      updateModel(rgb, true);
    }
    function onSpectrumPan(evt) {
      if (evt.isFinal) {
        changeSpectrum(
          evt.position.left,
          evt.position.top,
          true
        );
      } else {
        onSpectrumChange(evt);
      }
    }
    const onSpectrumChange = throttle(
      (evt) => {
        changeSpectrum(evt.position.left, evt.position.top);
      },
      20
    );
    function onSpectrumClick(evt) {
      changeSpectrum(
        evt.pageX - window.pageXOffset,
        evt.pageY - window.pageYOffset,
        true
      );
    }
    function onActivate(evt) {
      changeSpectrum(
        evt.pageX - window.pageXOffset,
        evt.pageY - window.pageYOffset
      );
    }
    function updateErrorIcon(val) {
      if (errorIconRef.value !== null) {
        errorIconRef.value.$el.style.opacity = val ? 1 : 0;
      }
    }
    function setTopView(val) {
      topView.value = val;
    }
    function getHeader() {
      const child = [];
      props.noHeaderTabs !== true && child.push(
        h(QTabs, {
          class: "q-color-picker__header-tabs",
          modelValue: topView.value,
          dense: true,
          align: "justify",
          "onUpdate:modelValue": setTopView
        }, () => [
          h(QTab, {
            label: "HEX" + (hasAlpha.value === true ? "A" : ""),
            name: "hex",
            ripple: false
          }),
          h(QTab, {
            label: "RGB" + (hasAlpha.value === true ? "A" : ""),
            name: "rgb",
            ripple: false
          })
        ])
      );
      child.push(
        h("div", {
          class: "q-color-picker__header-banner row flex-center no-wrap"
        }, [
          h("input", {
            class: "fit",
            value: model.value[topView.value],
            ...editable.value !== true ? { readonly: true } : {},
            ...getCache("topIn", {
              onInput: (evt) => {
                updateErrorIcon(onEditorChange(evt) === true);
              },
              onChange: stop,
              onBlur: (evt) => {
                onEditorChange(evt, true) === true && proxy.$forceUpdate();
                updateErrorIcon(false);
              }
            })
          }),
          h(QIcon, {
            ref: errorIconRef,
            class: "q-color-picker__error-icon absolute no-pointer-events",
            name: $q.iconSet.type.negative
          })
        ])
      );
      return h("div", {
        class: "q-color-picker__header relative-position overflow-hidden"
      }, [
        h("div", { class: "q-color-picker__header-bg absolute-full" }),
        h("div", {
          class: headerClass.value,
          style: currentBgColor.value
        }, child)
      ]);
    }
    function getContent() {
      return h(QTabPanels, {
        modelValue: view.value,
        animated: true
      }, () => [
        h(QTabPanel, {
          class: "q-color-picker__spectrum-tab overflow-hidden",
          name: "spectrum"
        }, getSpectrumTab),
        h(QTabPanel, {
          class: "q-pa-md q-color-picker__tune-tab",
          name: "tune"
        }, getTuneTab),
        h(QTabPanel, {
          class: "q-color-picker__palette-tab",
          name: "palette"
        }, getPaletteTab)
      ]);
    }
    function setView(val) {
      view.value = val;
    }
    function getFooter() {
      return h("div", {
        class: "q-color-picker__footer relative-position overflow-hidden"
      }, [
        h(QTabs, {
          class: "absolute-full",
          modelValue: view.value,
          dense: true,
          align: "justify",
          "onUpdate:modelValue": setView
        }, () => [
          h(QTab, {
            icon: $q.iconSet.colorPicker.spectrum,
            name: "spectrum",
            ripple: false
          }),
          h(QTab, {
            icon: $q.iconSet.colorPicker.tune,
            name: "tune",
            ripple: false
          }),
          h(QTab, {
            icon: $q.iconSet.colorPicker.palette,
            name: "palette",
            ripple: false
          })
        ])
      ]);
    }
    function getSpectrumTab() {
      const data = {
        ref: spectrumRef,
        class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (editable.value !== true ? " readonly" : ""),
        style: spectrumStyle.value,
        ...editable.value === true ? {
          onClick: onSpectrumClick,
          onMousedown: onActivate
        } : {}
      };
      const child = [
        h("div", { style: { paddingBottom: "100%" } }),
        h("div", { class: "q-color-picker__spectrum-white absolute-full" }),
        h("div", { class: "q-color-picker__spectrum-black absolute-full" }),
        h("div", {
          class: "absolute",
          style: spectrumPointerStyle.value
        }, [
          model.value.hex !== void 0 ? h("div", { class: "q-color-picker__spectrum-circle" }) : null
        ])
      ];
      const sliders = [
        h(QSlider, {
          class: "q-color-picker__hue non-selectable",
          modelValue: model.value.h,
          min: 0,
          max: 360,
          trackSize: "8px",
          innerTrackColor: "transparent",
          selectionColor: "transparent",
          readonly: editable.value !== true,
          thumbPath,
          "onUpdate:modelValue": onHue,
          onChange: onHueChange
        })
      ];
      hasAlpha.value === true && sliders.push(
        h(QSlider, {
          class: "q-color-picker__alpha non-selectable",
          modelValue: model.value.a,
          min: 0,
          max: 100,
          trackSize: "8px",
          trackColor: "white",
          innerTrackColor: "transparent",
          selectionColor: "transparent",
          trackImg: alphaTrackImg,
          readonly: editable.value !== true,
          hideSelection: true,
          thumbPath,
          ...getCache("alphaSlide", {
            "onUpdate:modelValue": (value) => onNumericChange(value, "a", 100),
            onChange: (value) => onNumericChange(value, "a", 100, void 0, true)
          })
        })
      );
      return [
        hDir("div", data, child, "spec", editable.value, () => spectrumDirective.value),
        h("div", { class: "q-color-picker__sliders" }, sliders)
      ];
    }
    function getTuneTab() {
      return [
        h("div", { class: "row items-center no-wrap" }, [
          h("div", "R"),
          h(QSlider, {
            modelValue: model.value.r,
            min: 0,
            max: 255,
            color: "red",
            dark: isDark.value,
            readonly: editable.value !== true,
            ...getCache("rSlide", {
              "onUpdate:modelValue": (value) => onNumericChange(value, "r", 255),
              onChange: (value) => onNumericChange(value, "r", 255, void 0, true)
            })
          }),
          h("input", {
            value: model.value.r,
            maxlength: 3,
            readonly: editable.value !== true,
            onChange: stop,
            ...getCache("rIn", {
              onInput: (evt) => onNumericChange(evt.target.value, "r", 255, evt),
              onBlur: (evt) => onNumericChange(evt.target.value, "r", 255, evt, true)
            })
          })
        ]),
        h("div", { class: "row items-center no-wrap" }, [
          h("div", "G"),
          h(QSlider, {
            modelValue: model.value.g,
            min: 0,
            max: 255,
            color: "green",
            dark: isDark.value,
            readonly: editable.value !== true,
            ...getCache("gSlide", {
              "onUpdate:modelValue": (value) => onNumericChange(value, "g", 255),
              onChange: (value) => onNumericChange(value, "g", 255, void 0, true)
            })
          }),
          h("input", {
            value: model.value.g,
            maxlength: 3,
            readonly: editable.value !== true,
            onChange: stop,
            ...getCache("gIn", {
              onInput: (evt) => onNumericChange(evt.target.value, "g", 255, evt),
              onBlur: (evt) => onNumericChange(evt.target.value, "g", 255, evt, true)
            })
          })
        ]),
        h("div", { class: "row items-center no-wrap" }, [
          h("div", "B"),
          h(QSlider, {
            modelValue: model.value.b,
            min: 0,
            max: 255,
            color: "blue",
            readonly: editable.value !== true,
            dark: isDark.value,
            ...getCache("bSlide", {
              "onUpdate:modelValue": (value) => onNumericChange(value, "b", 255),
              onChange: (value) => onNumericChange(value, "b", 255, void 0, true)
            })
          }),
          h("input", {
            value: model.value.b,
            maxlength: 3,
            readonly: editable.value !== true,
            onChange: stop,
            ...getCache("bIn", {
              onInput: (evt) => onNumericChange(evt.target.value, "b", 255, evt),
              onBlur: (evt) => onNumericChange(evt.target.value, "b", 255, evt, true)
            })
          })
        ]),
        hasAlpha.value === true ? h("div", { class: "row items-center no-wrap" }, [
          h("div", "A"),
          h(QSlider, {
            modelValue: model.value.a,
            color: "grey",
            readonly: editable.value !== true,
            dark: isDark.value,
            ...getCache("aSlide", {
              "onUpdate:modelValue": (value) => onNumericChange(value, "a", 100),
              onChange: (value) => onNumericChange(value, "a", 100, void 0, true)
            })
          }),
          h("input", {
            value: model.value.a,
            maxlength: 3,
            readonly: editable.value !== true,
            onChange: stop,
            ...getCache("aIn", {
              onInput: (evt) => onNumericChange(evt.target.value, "a", 100, evt),
              onBlur: (evt) => onNumericChange(evt.target.value, "a", 100, evt, true)
            })
          })
        ]) : null
      ];
    }
    function getPaletteTab() {
      const fn = (color) => h("div", {
        class: "q-color-picker__cube col-auto",
        style: { backgroundColor: color },
        ...editable.value === true ? getCache("palette#" + color, {
          onClick: () => {
            onPalettePick(color);
          }
        }) : {}
      });
      return [
        h("div", {
          class: "row items-center q-color-picker__palette-rows" + (editable.value === true ? " q-color-picker__palette-rows--editable" : "")
        }, computedPalette.value.map(fn))
      ];
    }
    return () => {
      const child = [getContent()];
      if (props.name !== void 0 && props.disable !== true) {
        injectFormInput(child, "push");
      }
      props.noHeader !== true && child.unshift(
        getHeader()
      );
      props.noFooter !== true && child.push(
        getFooter()
      );
      return h("div", {
        class: classes.value,
        ...attributes.value
      }, child);
    };
  }
});
const QPopupProxy = createComponent({
  name: "QPopupProxy",
  props: {
    ...useAnchorProps,
    breakpoint: {
      type: [String, Number],
      default: 450
    }
  },
  emits: ["show", "hide"],
  setup(props, { slots, emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const showing = ref(false);
    const popupRef = ref(null);
    const breakpoint = computed(() => parseInt(props.breakpoint, 10));
    const { canShow } = useAnchor({ showing });
    function getType() {
      return $q.screen.width < breakpoint.value || $q.screen.height < breakpoint.value ? "dialog" : "menu";
    }
    const type = ref(getType());
    const popupProps = computed(
      () => type.value === "menu" ? { maxHeight: "99vh" } : {}
    );
    watch(() => getType(), (val) => {
      if (showing.value !== true) {
        type.value = val;
      }
    });
    function onShow(evt) {
      showing.value = true;
      emit("show", evt);
    }
    function onHide(evt) {
      showing.value = false;
      type.value = getType();
      emit("hide", evt);
    }
    Object.assign(proxy, {
      show(evt) {
        canShow(evt) === true && popupRef.value.show(evt);
      },
      hide(evt) {
        popupRef.value.hide(evt);
      },
      toggle(evt) {
        popupRef.value.toggle(evt);
      }
    });
    injectProp(proxy, "currentComponent", () => ({
      type: type.value,
      ref: popupRef.value
    }));
    return () => {
      const data = {
        ref: popupRef,
        ...popupProps.value,
        ...attrs,
        onShow,
        onHide
      };
      let component;
      if (type.value === "dialog") {
        component = QDialog;
      } else {
        component = QMenu;
        Object.assign(data, {
          target: props.target,
          contextMenu: props.contextMenu,
          noParentEvent: true,
          separateClosePopup: true
        });
      }
      return h(component, data, slots.default);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ColorizeIcon",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const color = useModel(__props, "modelValue");
    const standardColorArray = [
      "#980000",
      "#ff0000",
      "#ff9900",
      "#ffff00",
      "#00ff00",
      "#00ffff",
      "#4a86e8",
      "#0000ff",
      "#9900ff",
      "#ff00ff",
      "#e6b8af",
      "#f4cccc",
      "#fce5cd",
      "#fff2cc",
      "#d9ead3",
      "#d0e0e3",
      "#c9daf8",
      "#cfe2f3",
      "#d9d2e9",
      "#ead1dc",
      "#dd7e6b",
      "#ea9999",
      "#f9cb9c",
      "#ffe599",
      "#b6d7a8",
      "#a2c4c9",
      "#a4c2f4",
      "#9fc5e8",
      "#b4a7d6",
      "#d5a6bd",
      "#cc4125",
      "#e06666",
      "#f6b26b",
      "#ffd966",
      "#93c47d",
      "#76a5af",
      "#6d9eeb",
      "#6fa8dc",
      "#8e7cc3",
      "#c27ba0",
      "#a61c00",
      "#cc0000",
      "#e69138",
      "#f1c232",
      "#6aa84f",
      "#45818e",
      "#3c78d8",
      "#3d85c6",
      "#674ea7",
      "#a64d79",
      "#85200c",
      "#990000",
      "#b45f06",
      "#bf9000",
      "#38761d",
      "#134f5c",
      "#1155cc",
      "#0b5394",
      "#351c75",
      "#741b47",
      "#5b0f00",
      "#660000",
      "#783f04",
      "#7f6000",
      "#274e13",
      "#0c343d",
      "#1c4587",
      "#073763",
      "#20124d",
      "#4c1130",
      "#000000",
      "#434343",
      "#666666",
      "#999999",
      "#b7b7b7",
      "#cccccc",
      "#d9d9d9",
      "#efefef",
      "#f3f3f3",
      "#ffffff"
    ];
    const __returned__ = { color, standardColorArray, DragElement };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["DragElement"], {
    type: "color",
    data: $setup.color ?? ""
  }, {
    default: withCtx(() => [
      createVNode(QBtn, {
        size: "xs",
        dense: "",
        flat: "",
        round: "",
        icon: "colorize"
      }, {
        default: withCtx(() => [
          createVNode(QPopupProxy, null, {
            default: withCtx(() => [
              createVNode(QColor, {
                style: { width: "240px" },
                "no-header": "",
                "no-footer": "",
                palette: $setup.standardColorArray,
                "default-view": "palette",
                modelValue: $setup.color,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.color = $event)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["data"]);
}
const ColorizeIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ColorizeIcon.vue"]]);
export {
  ColorizeIcon as C,
  QBtnToggle as Q,
  QSlider as a,
  useTabEmits as b,
  useTab as c,
  QTab as d,
  QTabs as e,
  QTabPanel as f,
  QTabPanels as g,
  useTabProps as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JpemVJY29uLUQ5WjJOaHlCLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2J0bi10b2dnbGUvUUJ0blRvZ2dsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2xpZGVyL3VzZS1zbGlkZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlci9RU2xpZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJzL1FUYWJzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJzL3VzZS10YWIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYnMvUVRhYi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvdG91Y2gtc3dpcGUvVG91Y2hTd2lwZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3VzZS1yZW5kZXItY2FjaGUvdXNlLXJlbmRlci1jYWNoZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLXBhbmVsL3VzZS1wYW5lbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFiLXBhbmVscy9RVGFiUGFuZWxzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWItcGFuZWxzL1FUYWJQYW5lbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL2NvbG9ycy9jb2xvcnMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2NvbG9yL1FDb2xvci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcG9wdXAtcHJveHkvUVBvcHVwUHJveHkuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Db2xvcml6ZUljb24udnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUJ0biBmcm9tICcuLi9idG4vUUJ0bi5qcydcbmltcG9ydCBRQnRuR3JvdXAgZnJvbSAnLi4vYnRuLWdyb3VwL1FCdG5Hcm91cC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgdXNlRm9ybUluamVjdCwgdXNlRm9ybVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLWZvcm0vcHJpdmF0ZS51c2UtZm9ybS5qcydcblxuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCB7IGdldEJ0bkRlc2lnbkF0dHIgfSBmcm9tICcuLi9idG4vdXNlLWJ0bi5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FCdG5Ub2dnbGUnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRm9ybVByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuXG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB2LmV2ZXJ5KFxuICAgICAgICBvcHQgPT4gKCdsYWJlbCcgaW4gb3B0IHx8ICdpY29uJyBpbiBvcHQgfHwgJ3Nsb3QnIGluIG9wdCkgJiYgJ3ZhbHVlJyBpbiBvcHRcbiAgICAgIClcbiAgICB9LFxuXG4gICAgLy8gVG8gYXZvaWQgc2VlaW5nIHRoZSBhY3RpdmUgcmFpc2Ugc2hhZG93IHRocm91Z2hcbiAgICAvLyB0aGUgdHJhbnNwYXJlbnQgYnV0dG9uLCBnaXZlIGl0IGEgY29sb3IgKGV2ZW4gd2hpdGUpXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICB0ZXh0Q29sb3I6IFN0cmluZyxcbiAgICB0b2dnbGVDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknXG4gICAgfSxcbiAgICB0b2dnbGVUZXh0Q29sb3I6IFN0cmluZyxcblxuICAgIG91dGxpbmU6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICB1bmVsZXZhdGVkOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG4gICAgcHVzaDogQm9vbGVhbixcbiAgICBnbG9zc3k6IEJvb2xlYW4sXG5cbiAgICBzaXplOiBTdHJpbmcsXG4gICAgcGFkZGluZzogU3RyaW5nLFxuXG4gICAgbm9DYXBzOiBCb29sZWFuLFxuICAgIG5vV3JhcDogQm9vbGVhbixcbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICByZWFkb25seTogQm9vbGVhbixcbiAgICBkaXNhYmxlOiBCb29sZWFuLFxuXG4gICAgc3RhY2s6IEJvb2xlYW4sXG4gICAgc3RyZXRjaDogQm9vbGVhbixcblxuICAgIHNwcmVhZDogQm9vbGVhbixcblxuICAgIGNsZWFyYWJsZTogQm9vbGVhbixcblxuICAgIHJpcHBsZToge1xuICAgICAgdHlwZTogWyBCb29sZWFuLCBPYmplY3QgXSxcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ2NsZWFyJywgJ2NsaWNrJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgaGFzQWN0aXZlVmFsdWUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMub3B0aW9ucy5maW5kKG9wdCA9PiBvcHQudmFsdWUgPT09IHByb3BzLm1vZGVsVmFsdWUpICE9PSB2b2lkIDBcbiAgICApXG5cbiAgICBjb25zdCBmb3JtQXR0cnMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgdmFsdWU6IHByb3BzLm1vZGVsVmFsdWVcbiAgICB9KSlcblxuICAgIGNvbnN0IGluamVjdEZvcm1JbnB1dCA9IHVzZUZvcm1JbmplY3QoZm9ybUF0dHJzKVxuXG4gICAgY29uc3QgYnRuRGVzaWduQXR0ciA9IGNvbXB1dGVkKCgpID0+IGdldEJ0bkRlc2lnbkF0dHIocHJvcHMpKVxuXG4gICAgY29uc3QgYnRuT3B0aW9uRGVzaWduID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHJvdW5kZWQ6IHByb3BzLnJvdW5kZWQsXG4gICAgICBkZW5zZTogcHJvcHMuZGVuc2UsXG4gICAgICAuLi5idG5EZXNpZ25BdHRyLnZhbHVlXG4gICAgfSkpXG5cbiAgICBjb25zdCBidG5PcHRpb25zID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMub3B0aW9ucy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgIGNvbnN0IHsgYXR0cnMsIHZhbHVlLCBzbG90LCAuLi5vcHQgfSA9IGl0ZW1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2xvdCxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBrZXk6IGksXG5cbiAgICAgICAgICAnYXJpYS1wcmVzc2VkJzogdmFsdWUgPT09IHByb3BzLm1vZGVsVmFsdWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIC4uLm9wdCxcbiAgICAgICAgICAuLi5idG5PcHRpb25EZXNpZ24udmFsdWUsXG5cbiAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IG9wdC5kaXNhYmxlID09PSB0cnVlLFxuXG4gICAgICAgICAgLy8gT3B0aW9ucyB0aGF0IGNvbWUgZnJvbSB0aGUgYnV0dG9uIHNwZWNpZmljIG9wdGlvbnMgZmlyc3QsIHRoZW4gZnJvbSBnZW5lcmFsIHByb3BzXG4gICAgICAgICAgY29sb3I6IHZhbHVlID09PSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgICAgICA/IG1lcmdlT3B0KG9wdCwgJ3RvZ2dsZUNvbG9yJylcbiAgICAgICAgICAgIDogbWVyZ2VPcHQob3B0LCAnY29sb3InKSxcbiAgICAgICAgICB0ZXh0Q29sb3I6IHZhbHVlID09PSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgICAgICA/IG1lcmdlT3B0KG9wdCwgJ3RvZ2dsZVRleHRDb2xvcicpXG4gICAgICAgICAgICA6IG1lcmdlT3B0KG9wdCwgJ3RleHRDb2xvcicpLFxuICAgICAgICAgIG5vQ2FwczogbWVyZ2VPcHQob3B0LCAnbm9DYXBzJykgPT09IHRydWUsXG4gICAgICAgICAgbm9XcmFwOiBtZXJnZU9wdChvcHQsICdub1dyYXAnKSA9PT0gdHJ1ZSxcblxuICAgICAgICAgIHNpemU6IG1lcmdlT3B0KG9wdCwgJ3NpemUnKSxcbiAgICAgICAgICBwYWRkaW5nOiBtZXJnZU9wdChvcHQsICdwYWRkaW5nJyksXG4gICAgICAgICAgcmlwcGxlOiBtZXJnZU9wdChvcHQsICdyaXBwbGUnKSxcbiAgICAgICAgICBzdGFjazogbWVyZ2VPcHQob3B0LCAnc3RhY2snKSA9PT0gdHJ1ZSxcbiAgICAgICAgICBzdHJldGNoOiBtZXJnZU9wdChvcHQsICdzdHJldGNoJykgPT09IHRydWUsXG5cbiAgICAgICAgICBvbkNsaWNrIChlKSB7IHNldCh2YWx1ZSwgaXRlbSwgZSkgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpXG5cbiAgICBmdW5jdGlvbiBzZXQgKHZhbHVlLCBvcHQsIGUpIHtcbiAgICAgIGlmIChwcm9wcy5yZWFkb25seSAhPT0gdHJ1ZSkge1xuICAgICAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICBpZiAocHJvcHMuY2xlYXJhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG51bGwsIG51bGwpXG4gICAgICAgICAgICBlbWl0KCdjbGVhcicpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsdWUsIG9wdClcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXJnZU9wdCAob3B0LCBrZXkpIHtcbiAgICAgIHJldHVybiBvcHRbIGtleSBdID09PSB2b2lkIDAgPyBwcm9wc1sga2V5IF0gOiBvcHRbIGtleSBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGJ0bk9wdGlvbnMudmFsdWUubWFwKG9wdCA9PiB7XG4gICAgICAgIHJldHVybiBoKFFCdG4sIG9wdC5wcm9wcywgb3B0LnNsb3QgIT09IHZvaWQgMCA/IHNsb3RzWyBvcHQuc2xvdCBdIDogdm9pZCAwKVxuICAgICAgfSlcblxuICAgICAgaWYgKHByb3BzLm5hbWUgIT09IHZvaWQgMCAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIGhhc0FjdGl2ZVZhbHVlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGluamVjdEZvcm1JbnB1dChjaGlsZCwgJ3B1c2gnKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBjaGlsZClcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gaChRQnRuR3JvdXAsIHtcbiAgICAgIGNsYXNzOiAncS1idG4tdG9nZ2xlJyxcbiAgICAgIC4uLmJ0bkRlc2lnbkF0dHIudmFsdWUsXG4gICAgICByb3VuZGVkOiBwcm9wcy5yb3VuZGVkLFxuICAgICAgc3RyZXRjaDogcHJvcHMuc3RyZXRjaCxcbiAgICAgIGdsb3NzeTogcHJvcHMuZ2xvc3N5LFxuICAgICAgc3ByZWFkOiBwcm9wcy5zcHJlYWRcbiAgICB9LCBnZXRDb250ZW50KVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoLXBhbi9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB7IHVzZUZvcm1Qcm9wcywgdXNlRm9ybUluamVjdCB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS1mb3JtL3ByaXZhdGUudXNlLWZvcm0uanMnXG5cbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgcG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IGlzTnVtYmVyLCBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzL2lzLmpzJ1xuaW1wb3J0IHsgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuY29uc3QgbWFya2VyUHJlZml4Q2xhc3MgPSAncS1zbGlkZXJfX21hcmtlci1sYWJlbHMnXG5jb25zdCBkZWZhdWx0TWFya2VyQ29udmVydEZuID0gdiA9PiAoeyB2YWx1ZTogdiB9KVxuY29uc3QgZGVmYXVsdE1hcmtlckxhYmVsUmVuZGVyRm4gPSAoeyBtYXJrZXIgfSkgPT4gaCgnZGl2Jywge1xuICBrZXk6IG1hcmtlci52YWx1ZSxcbiAgc3R5bGU6IG1hcmtlci5zdHlsZSxcbiAgY2xhc3M6IG1hcmtlci5jbGFzc2VzXG59LCBtYXJrZXIubGFiZWwpXG5cbi8vIFBHRE9XTiwgTEVGVCwgRE9XTiwgUEdVUCwgUklHSFQsIFVQXG5leHBvcnQgY29uc3Qga2V5Q29kZXMgPSBbIDM0LCAzNywgNDAsIDMzLCAzOSwgMzggXVxuXG5leHBvcnQgY29uc3QgdXNlU2xpZGVyUHJvcHMgPSB7XG4gIC4uLnVzZURhcmtQcm9wcyxcbiAgLi4udXNlRm9ybVByb3BzLFxuXG4gIG1pbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwXG4gIH0sXG4gIG1heDoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxMDBcbiAgfSxcbiAgaW5uZXJNaW46IE51bWJlcixcbiAgaW5uZXJNYXg6IE51bWJlcixcblxuICBzdGVwOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEsXG4gICAgdmFsaWRhdG9yOiB2ID0+IHYgPj0gMFxuICB9LFxuXG4gIHNuYXA6IEJvb2xlYW4sXG5cbiAgdmVydGljYWw6IEJvb2xlYW4sXG4gIHJldmVyc2U6IEJvb2xlYW4sXG5cbiAgY29sb3I6IFN0cmluZyxcbiAgbWFya2VyTGFiZWxzQ2xhc3M6IFN0cmluZyxcblxuICBsYWJlbDogQm9vbGVhbixcbiAgbGFiZWxDb2xvcjogU3RyaW5nLFxuICBsYWJlbFRleHRDb2xvcjogU3RyaW5nLFxuICBsYWJlbEFsd2F5czogQm9vbGVhbixcbiAgc3dpdGNoTGFiZWxTaWRlOiBCb29sZWFuLFxuXG4gIG1hcmtlcnM6IFsgQm9vbGVhbiwgTnVtYmVyIF0sXG4gIG1hcmtlckxhYmVsczogWyBCb29sZWFuLCBBcnJheSwgT2JqZWN0LCBGdW5jdGlvbiBdLFxuICBzd2l0Y2hNYXJrZXJMYWJlbHNTaWRlOiBCb29sZWFuLFxuXG4gIHRyYWNrSW1nOiBTdHJpbmcsXG4gIHRyYWNrQ29sb3I6IFN0cmluZyxcbiAgaW5uZXJUcmFja0ltZzogU3RyaW5nLFxuICBpbm5lclRyYWNrQ29sb3I6IFN0cmluZyxcbiAgc2VsZWN0aW9uQ29sb3I6IFN0cmluZyxcbiAgc2VsZWN0aW9uSW1nOiBTdHJpbmcsXG5cbiAgdGh1bWJTaXplOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICcyMHB4J1xuICB9LFxuICB0cmFja1NpemU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJzRweCdcbiAgfSxcblxuICBkaXNhYmxlOiBCb29sZWFuLFxuICByZWFkb25seTogQm9vbGVhbixcbiAgZGVuc2U6IEJvb2xlYW4sXG5cbiAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICB0aHVtYkNvbG9yOiBTdHJpbmcsXG4gIHRodW1iUGF0aDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnTSA0LCAxMCBhIDYsNiAwIDEsMCAxMiwwIGEgNiw2IDAgMSwwIC0xMiwwJ1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VTbGlkZXJFbWl0cyA9IFsgJ3BhbicsICd1cGRhdGU6bW9kZWxWYWx1ZScsICdjaGFuZ2UnIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgdXBkYXRlVmFsdWUsIHVwZGF0ZVBvc2l0aW9uLCBnZXREcmFnZ2luZywgZm9ybUF0dHJzIH0pIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgc2xvdHMsIHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gIGNvbnN0IGluamVjdEZvcm1JbnB1dCA9IHVzZUZvcm1JbmplY3QoZm9ybUF0dHJzKVxuXG4gIGNvbnN0IGFjdGl2ZSA9IHJlZihmYWxzZSlcbiAgY29uc3QgcHJldmVudEZvY3VzID0gcmVmKGZhbHNlKVxuICBjb25zdCBmb2N1cyA9IHJlZihmYWxzZSlcbiAgY29uc3QgZHJhZ2dpbmcgPSByZWYoZmFsc2UpXG5cbiAgY29uc3QgYXhpcyA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICctLXYnIDogJy0taCcpKVxuICBjb25zdCBsYWJlbFNpZGUgPSBjb21wdXRlZCgoKSA9PiAnLScgKyAocHJvcHMuc3dpdGNoTGFiZWxTaWRlID09PSB0cnVlID8gJ3N3aXRjaGVkJyA6ICdzdGFuZGFyZCcpKVxuXG4gIGNvbnN0IGlzUmV2ZXJzZWQgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgID8gcHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZVxuICAgICAgOiBwcm9wcy5yZXZlcnNlICE9PSAoJHEubGFuZy5ydGwgPT09IHRydWUpXG4gICkpXG5cbiAgY29uc3QgaW5uZXJNaW4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOYU4ocHJvcHMuaW5uZXJNaW4pID09PSB0cnVlIHx8IHByb3BzLmlubmVyTWluIDwgcHJvcHMubWluXG4gICAgICA/IHByb3BzLm1pblxuICAgICAgOiBwcm9wcy5pbm5lck1pblxuICApKVxuICBjb25zdCBpbm5lck1heCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc05hTihwcm9wcy5pbm5lck1heCkgPT09IHRydWUgfHwgcHJvcHMuaW5uZXJNYXggPiBwcm9wcy5tYXhcbiAgICAgID8gcHJvcHMubWF4XG4gICAgICA6IHByb3BzLmlubmVyTWF4XG4gICkpXG5cbiAgY29uc3QgZWRpdGFibGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5yZWFkb25seSAhPT0gdHJ1ZVxuICAgICYmIGlubmVyTWluLnZhbHVlIDwgaW5uZXJNYXgudmFsdWVcbiAgKSlcblxuICBjb25zdCByb3VuZFZhbHVlRm4gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnN0ZXAgPT09IDApIHtcbiAgICAgIHJldHVybiB2ID0+IHZcbiAgICB9XG5cbiAgICBjb25zdCBkZWNpbWFscyA9IChTdHJpbmcocHJvcHMuc3RlcCkudHJpbSgpLnNwbGl0KCcuJylbIDEgXSB8fCAnJykubGVuZ3RoXG4gICAgcmV0dXJuIHYgPT4gcGFyc2VGbG9hdCh2LnRvRml4ZWQoZGVjaW1hbHMpKVxuICB9KVxuXG4gIGNvbnN0IGtleVN0ZXAgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMuc3RlcCA9PT0gMCA/IDEgOiBwcm9wcy5zdGVwKSlcbiAgY29uc3QgdGFiaW5kZXggPSBjb21wdXRlZCgoKSA9PiAoZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyBwcm9wcy50YWJpbmRleCB8fCAwIDogLTEpKVxuXG4gIGNvbnN0IHRyYWNrTGVuID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubWF4IC0gcHJvcHMubWluKVxuICBjb25zdCBpbm5lckJhckxlbiA9IGNvbXB1dGVkKCgpID0+IGlubmVyTWF4LnZhbHVlIC0gaW5uZXJNaW4udmFsdWUpXG5cbiAgY29uc3QgaW5uZXJNaW5SYXRpbyA9IGNvbXB1dGVkKCgpID0+IGNvbnZlcnRNb2RlbFRvUmF0aW8oaW5uZXJNaW4udmFsdWUpKVxuICBjb25zdCBpbm5lck1heFJhdGlvID0gY29tcHV0ZWQoKCkgPT4gY29udmVydE1vZGVsVG9SYXRpbyhpbm5lck1heC52YWx1ZSkpXG5cbiAgY29uc3QgcG9zaXRpb25Qcm9wID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICA/IChpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ2JvdHRvbScgOiAndG9wJylcbiAgICAgIDogKGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnKVxuICApKVxuXG4gIGNvbnN0IHNpemVQcm9wID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2hlaWdodCcgOiAnd2lkdGgnKSlcbiAgY29uc3QgdGhpY2tuZXNzUHJvcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd3aWR0aCcgOiAnaGVpZ2h0JykpXG4gIGNvbnN0IG9yaWVudGF0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJykpXG5cbiAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSB7XG4gICAgICByb2xlOiAnc2xpZGVyJyxcbiAgICAgICdhcmlhLXZhbHVlbWluJzogaW5uZXJNaW4udmFsdWUsXG4gICAgICAnYXJpYS12YWx1ZW1heCc6IGlubmVyTWF4LnZhbHVlLFxuICAgICAgJ2FyaWEtb3JpZW50YXRpb24nOiBvcmllbnRhdGlvbi52YWx1ZSxcbiAgICAgICdkYXRhLXN0ZXAnOiBwcm9wcy5zdGVwXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIGFjY1sgJ2FyaWEtZGlzYWJsZWQnIF0gPSAndHJ1ZSdcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMucmVhZG9ubHkgPT09IHRydWUpIHtcbiAgICAgIGFjY1sgJ2FyaWEtcmVhZG9ubHknIF0gPSAndHJ1ZSdcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgYHEtc2xpZGVyIHEtc2xpZGVyJHsgYXhpcy52YWx1ZSB9IHEtc2xpZGVyLS0keyBhY3RpdmUudmFsdWUgPT09IHRydWUgPyAnJyA6ICdpbicgfWFjdGl2ZSBpbmxpbmUgbm8td3JhcCBgXG4gICAgKyAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAncm93JyA6ICdjb2x1bW4nKVxuICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcgcS1zbGlkZXItLWVuYWJsZWQnICsgKGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZWRpdGFibGUnIDogJycpKVxuICAgICsgKGZvY3VzLnZhbHVlID09PSAnYm90aCcgPyAnIHEtc2xpZGVyLS1mb2N1cycgOiAnJylcbiAgICArIChwcm9wcy5sYWJlbCB8fCBwcm9wcy5sYWJlbEFsd2F5cyA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWxhYmVsJyA6ICcnKVxuICAgICsgKHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlID8gJyBxLXNsaWRlci0tbGFiZWwtYWx3YXlzJyA6ICcnKVxuICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWRhcmsnIDogJycpXG4gICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1kZW5zZSBxLXNsaWRlci0tZGVuc2UnICsgYXhpcy52YWx1ZSA6ICcnKVxuICApXG5cbiAgZnVuY3Rpb24gZ2V0UG9zaXRpb25DbGFzcyAobmFtZSkge1xuICAgIGNvbnN0IGNscyA9ICdxLXNsaWRlcl9fJyArIG5hbWVcbiAgICByZXR1cm4gYCR7IGNscyB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9JHsgbGFiZWxTaWRlLnZhbHVlIH1gXG4gIH1cbiAgZnVuY3Rpb24gZ2V0QXhpc0NsYXNzIChuYW1lKSB7XG4gICAgY29uc3QgY2xzID0gJ3Etc2xpZGVyX18nICsgbmFtZVxuICAgIHJldHVybiBgJHsgY2xzIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH1gXG4gIH1cblxuICBjb25zdCBzZWxlY3Rpb25CYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBjb2xvciA9IHByb3BzLnNlbGVjdGlvbkNvbG9yIHx8IHByb3BzLmNvbG9yXG4gICAgcmV0dXJuICdxLXNsaWRlcl9fc2VsZWN0aW9uIGFic29sdXRlJ1xuICAgICAgKyAoY29sb3IgIT09IHZvaWQgMCA/IGAgdGV4dC0keyBjb2xvciB9YCA6ICcnKVxuICB9KVxuICBjb25zdCBtYXJrZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldEF4aXNDbGFzcygnbWFya2VycycpICsgJyBhYnNvbHV0ZSBvdmVyZmxvdy1oaWRkZW4nKVxuICBjb25zdCB0cmFja0NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0QXhpc0NsYXNzKCd0cmFjay1jb250YWluZXInKSlcbiAgY29uc3QgcGluQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRQb3NpdGlvbkNsYXNzKCdwaW4nKSlcbiAgY29uc3QgbGFiZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ2xhYmVsJykpXG4gIGNvbnN0IHRleHRDb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ3RleHQtY29udGFpbmVyJykpXG4gIGNvbnN0IG1hcmtlckxhYmVsc0NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBnZXRQb3NpdGlvbkNsYXNzKCdtYXJrZXItbGFiZWxzLWNvbnRhaW5lcicpXG4gICAgKyAocHJvcHMubWFya2VyTGFiZWxzQ2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMubWFya2VyTGFiZWxzQ2xhc3MgfWAgOiAnJylcbiAgKVxuXG4gIGNvbnN0IHRyYWNrQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXNsaWRlcl9fdHJhY2sgcmVsYXRpdmUtcG9zaXRpb24gbm8tb3V0bGluZSdcbiAgICArIChwcm9wcy50cmFja0NvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLnRyYWNrQ29sb3IgfWAgOiAnJylcbiAgKVxuICBjb25zdCB0cmFja1N0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHsgWyB0aGlja25lc3NQcm9wLnZhbHVlIF06IHByb3BzLnRyYWNrU2l6ZSB9XG4gICAgaWYgKHByb3BzLnRyYWNrSW1nICE9PSB2b2lkIDApIHtcbiAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLnRyYWNrSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBpbm5lckJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS1zbGlkZXJfX2lubmVyIGFic29sdXRlJ1xuICAgICsgKHByb3BzLmlubmVyVHJhY2tDb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy5pbm5lclRyYWNrQ29sb3IgfWAgOiAnJylcbiAgKVxuICBjb25zdCBpbm5lckJhclN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGlubmVyRGlmZiA9IGlubmVyTWF4UmF0aW8udmFsdWUgLSBpbm5lck1pblJhdGlvLnZhbHVlXG4gICAgY29uc3QgYWNjID0ge1xuICAgICAgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIGlubmVyTWluUmF0aW8udmFsdWUgfSVgLFxuICAgICAgWyBzaXplUHJvcC52YWx1ZSBdOiBpbm5lckRpZmYgPT09IDBcbiAgICAgICAgPyAnMnB4J1xuICAgICAgICA6IGAkeyAxMDAgKiBpbm5lckRpZmYgfSVgXG4gICAgfVxuICAgIGlmIChwcm9wcy5pbm5lclRyYWNrSW1nICE9PSB2b2lkIDApIHtcbiAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLmlubmVyVHJhY2tJbWcgfSkgIWltcG9ydGFudGBcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRSYXRpb1RvTW9kZWwgKHJhdGlvKSB7XG4gICAgY29uc3QgeyBtaW4sIG1heCwgc3RlcCB9ID0gcHJvcHNcbiAgICBsZXQgbW9kZWwgPSBtaW4gKyByYXRpbyAqIChtYXggLSBtaW4pXG5cbiAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgIGNvbnN0IG1vZHVsbyA9IChtb2RlbCAtIGlubmVyTWluLnZhbHVlKSAlIHN0ZXBcbiAgICAgIG1vZGVsICs9IChNYXRoLmFicyhtb2R1bG8pID49IHN0ZXAgLyAyID8gKG1vZHVsbyA8IDAgPyAtMSA6IDEpICogc3RlcCA6IDApIC0gbW9kdWxvXG4gICAgfVxuXG4gICAgbW9kZWwgPSByb3VuZFZhbHVlRm4udmFsdWUobW9kZWwpXG5cbiAgICByZXR1cm4gYmV0d2Vlbihtb2RlbCwgaW5uZXJNaW4udmFsdWUsIGlubmVyTWF4LnZhbHVlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydE1vZGVsVG9SYXRpbyAobW9kZWwpIHtcbiAgICByZXR1cm4gdHJhY2tMZW4udmFsdWUgPT09IDBcbiAgICAgID8gMFxuICAgICAgOiAobW9kZWwgLSBwcm9wcy5taW4pIC8gdHJhY2tMZW4udmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERyYWdnaW5nUmF0aW8gKGV2dCwgZHJhZ2dpbmcpIHtcbiAgICBjb25zdFxuICAgICAgcG9zID0gcG9zaXRpb24oZXZ0KSxcbiAgICAgIHZhbCA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgID8gYmV0d2VlbigocG9zLnRvcCAtIGRyYWdnaW5nLnRvcCkgLyBkcmFnZ2luZy5oZWlnaHQsIDAsIDEpXG4gICAgICAgIDogYmV0d2VlbigocG9zLmxlZnQgLSBkcmFnZ2luZy5sZWZ0KSAvIGRyYWdnaW5nLndpZHRoLCAwLCAxKVxuXG4gICAgcmV0dXJuIGJldHdlZW4oXG4gICAgICBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gMS4wIC0gdmFsIDogdmFsLFxuICAgICAgaW5uZXJNaW5SYXRpby52YWx1ZSxcbiAgICAgIGlubmVyTWF4UmF0aW8udmFsdWVcbiAgICApXG4gIH1cblxuICBjb25zdCBtYXJrZXJTdGVwID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTnVtYmVyKHByb3BzLm1hcmtlcnMpID09PSB0cnVlID8gcHJvcHMubWFya2VycyA6IGtleVN0ZXAudmFsdWUpXG4gIClcblxuICBjb25zdCBtYXJrZXJUaWNrcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSBbXVxuICAgIGNvbnN0IHN0ZXAgPSBtYXJrZXJTdGVwLnZhbHVlXG4gICAgY29uc3QgbWF4ID0gcHJvcHMubWF4XG5cbiAgICBsZXQgdmFsdWUgPSBwcm9wcy5taW5cbiAgICBkbyB7XG4gICAgICBhY2MucHVzaCh2YWx1ZSlcbiAgICAgIHZhbHVlICs9IHN0ZXBcbiAgICB9IHdoaWxlICh2YWx1ZSA8IG1heClcblxuICAgIGFjYy5wdXNoKG1heClcbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyTGFiZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBwcmVmaXggPSBgICR7IG1hcmtlclByZWZpeENsYXNzIH0keyBheGlzLnZhbHVlIH0tYFxuICAgIHJldHVybiBtYXJrZXJQcmVmaXhDbGFzc1xuICAgICAgKyBgJHsgcHJlZml4IH0keyBwcm9wcy5zd2l0Y2hNYXJrZXJMYWJlbHNTaWRlID09PSB0cnVlID8gJ3N3aXRjaGVkJyA6ICdzdGFuZGFyZCcgfWBcbiAgICAgICsgYCR7IHByZWZpeCB9JHsgaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdydGwnIDogJ2x0cicgfWBcbiAgfSlcblxuICBjb25zdCBtYXJrZXJMYWJlbHNMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIHJldHVybiBnZXRNYXJrZXJMaXN0KHByb3BzLm1hcmtlckxhYmVscykubWFwKChlbnRyeSwgaW5kZXgpID0+ICh7XG4gICAgICBpbmRleCxcbiAgICAgIHZhbHVlOiBlbnRyeS52YWx1ZSxcbiAgICAgIGxhYmVsOiBlbnRyeS5sYWJlbCB8fCBlbnRyeS52YWx1ZSxcbiAgICAgIGNsYXNzZXM6IG1hcmtlckxhYmVsQ2xhc3MudmFsdWVcbiAgICAgICAgKyAoZW50cnkuY2xhc3NlcyAhPT0gdm9pZCAwID8gJyAnICsgZW50cnkuY2xhc3NlcyA6ICcnKSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIC4uLmdldE1hcmtlckxhYmVsU3R5bGUoZW50cnkudmFsdWUpLFxuICAgICAgICAuLi4oZW50cnkuc3R5bGUgfHwge30pXG4gICAgICB9XG4gICAgfSkpXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyU2NvcGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgIG1hcmtlckxpc3Q6IG1hcmtlckxhYmVsc0xpc3QudmFsdWUsXG4gICAgbWFya2VyTWFwOiBtYXJrZXJMYWJlbHNNYXAudmFsdWUsXG4gICAgY2xhc3NlczogbWFya2VyTGFiZWxDbGFzcy52YWx1ZSwgLy8gVE9ETyB0cyBkZWZpbml0aW9uXG4gICAgZ2V0U3R5bGU6IGdldE1hcmtlckxhYmVsU3R5bGVcbiAgfSkpXG5cbiAgY29uc3QgbWFya2VyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IGlubmVyQmFyTGVuLnZhbHVlID09PSAwXG4gICAgICA/ICcycHgnXG4gICAgICA6IDEwMCAqIG1hcmtlclN0ZXAudmFsdWUgLyBpbm5lckJhckxlbi52YWx1ZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmlubmVyQmFyU3R5bGUudmFsdWUsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgPyBgMnB4ICR7IHNpemUgfSVgXG4gICAgICAgIDogYCR7IHNpemUgfSUgMnB4YFxuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMaXN0IChkZWYpIHtcbiAgICBpZiAoZGVmID09PSBmYWxzZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBpZiAoZGVmID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbWFya2VyVGlja3MudmFsdWUubWFwKGRlZmF1bHRNYXJrZXJDb252ZXJ0Rm4pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBtYXJrZXJUaWNrcy52YWx1ZS5tYXAodmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZGVmKHZhbHVlKVxuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyB7IC4uLml0ZW0sIHZhbHVlIH0gOiB7IHZhbHVlLCBsYWJlbDogaXRlbSB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlckZuID0gKHsgdmFsdWUgfSkgPT4gdmFsdWUgPj0gcHJvcHMubWluICYmIHZhbHVlIDw9IHByb3BzLm1heFxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGVmKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGRlZlxuICAgICAgICAubWFwKGl0ZW0gPT4gKGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8gaXRlbSA6IHsgdmFsdWU6IGl0ZW0gfSkpXG4gICAgICAgIC5maWx0ZXIoZmlsdGVyRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRlZikubWFwKGtleSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gZGVmWyBrZXkgXVxuICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoa2V5KVxuICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8geyAuLi5pdGVtLCB2YWx1ZSB9IDogeyB2YWx1ZSwgbGFiZWw6IGl0ZW0gfVxuICAgIH0pLmZpbHRlcihmaWx0ZXJGbilcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxhYmVsU3R5bGUgKHZhbCkge1xuICAgIHJldHVybiB7IFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiAodmFsIC0gcHJvcHMubWluKSAvIHRyYWNrTGVuLnZhbHVlIH0lYCB9XG4gIH1cblxuICBjb25zdCBtYXJrZXJMYWJlbHNNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgY29uc3QgYWNjID0ge31cbiAgICBtYXJrZXJMYWJlbHNMaXN0LnZhbHVlLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgYWNjWyBlbnRyeS52YWx1ZSBdID0gZW50cnlcbiAgICB9KVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMYWJlbHNDb250ZW50ICgpIHtcbiAgICBpZiAoc2xvdHNbICdtYXJrZXItbGFiZWwtZ3JvdXAnIF0gIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHNsb3RzWyAnbWFya2VyLWxhYmVsLWdyb3VwJyBdKG1hcmtlclNjb3BlLnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGZuID0gc2xvdHNbICdtYXJrZXItbGFiZWwnIF0gfHwgZGVmYXVsdE1hcmtlckxhYmVsUmVuZGVyRm5cbiAgICByZXR1cm4gbWFya2VyTGFiZWxzTGlzdC52YWx1ZS5tYXAobWFya2VyID0+IGZuKHtcbiAgICAgIG1hcmtlcixcbiAgICAgIC4uLm1hcmtlclNjb3BlLnZhbHVlXG4gICAgfSkpXG4gIH1cblxuICBjb25zdCBwYW5EaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgLy8gaWYgZWRpdGFibGUudmFsdWUgPT09IHRydWVcbiAgICByZXR1cm4gWyBbXG4gICAgICBUb3VjaFBhbixcbiAgICAgIG9uUGFuLFxuICAgICAgdm9pZCAwLFxuICAgICAge1xuICAgICAgICBbIG9yaWVudGF0aW9uLnZhbHVlIF06IHRydWUsXG4gICAgICAgIHByZXZlbnQ6IHRydWUsXG4gICAgICAgIHN0b3A6IHRydWUsXG4gICAgICAgIG1vdXNlOiB0cnVlLFxuICAgICAgICBtb3VzZUFsbERpcjogdHJ1ZVxuICAgICAgfVxuICAgIF0gXVxuICB9KVxuXG4gIGZ1bmN0aW9uIG9uUGFuIChldmVudCkge1xuICAgIGlmIChldmVudC5pc0ZpbmFsID09PSB0cnVlKSB7XG4gICAgICBpZiAoZHJhZ2dpbmcudmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICAgIC8vIG9ubHkgaWYgdG91Y2gsIGJlY2F1c2Ugd2UgYWxzbyBoYXZlIG1vdXNlZG93bi91cDpcbiAgICAgICAgZXZlbnQudG91Y2ggPT09IHRydWUgJiYgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgICAgICAgZHJhZ2dpbmcudmFsdWUgPSB2b2lkIDBcbiAgICAgICAgZW1pdCgncGFuJywgJ2VuZCcpXG4gICAgICB9XG4gICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZVxuICAgICAgZm9jdXMudmFsdWUgPSBmYWxzZVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICBkcmFnZ2luZy52YWx1ZSA9IGdldERyYWdnaW5nKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICAgIGFjdGl2ZS52YWx1ZSA9IHRydWVcbiAgICAgIGVtaXQoJ3BhbicsICdzdGFydCcpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmx1ciAoKSB7XG4gICAgZm9jdXMudmFsdWUgPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gb25BY3RpdmF0ZSAoZXZ0KSB7XG4gICAgdXBkYXRlUG9zaXRpb24oZXZ0LCBnZXREcmFnZ2luZyhldnQpKVxuICAgIHVwZGF0ZVZhbHVlKClcblxuICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9IHRydWVcbiAgICBhY3RpdmUudmFsdWUgPSB0cnVlXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25EZWFjdGl2YXRlICgpIHtcbiAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPSBmYWxzZVxuICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlXG5cbiAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgIG9uQmx1cigpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb2JpbGVDbGljayAoZXZ0KSB7XG4gICAgdXBkYXRlUG9zaXRpb24oZXZ0LCBnZXREcmFnZ2luZyhldnQpKVxuICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbktleXVwIChldnQpIHtcbiAgICBpZiAoa2V5Q29kZXMuaW5jbHVkZXMoZXZ0LmtleUNvZGUpKSB7XG4gICAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRleHRDb250YWluZXJTdHlsZSAocmF0aW8pIHtcbiAgICBpZiAocHJvcHMudmVydGljYWwgPT09IHRydWUpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgY29uc3QgcCA9ICRxLmxhbmcucnRsICE9PSBwcm9wcy5yZXZlcnNlID8gMSAtIHJhdGlvIDogcmF0aW9cbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWChjYWxjKCR7IDIgKiBwIC0gMSB9ICogJHsgcHJvcHMudGh1bWJTaXplIH0gLyAyICsgJHsgNTAgLSAxMDAgKiBwIH0lKSlgXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGh1bWJSZW5kZXJGbiAodGh1bWIpIHtcbiAgICBjb25zdCBmb2N1c0NsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJldmVudEZvY3VzLnZhbHVlID09PSBmYWxzZSAmJiAoZm9jdXMudmFsdWUgPT09IHRodW1iLmZvY3VzVmFsdWUgfHwgZm9jdXMudmFsdWUgPT09ICdib3RoJylcbiAgICAgICAgPyAnIHEtc2xpZGVyLS1mb2N1cydcbiAgICAgICAgOiAnJ1xuICAgICkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLXNsaWRlcl9fdGh1bWIgcS1zbGlkZXJfX3RodW1iJHsgYXhpcy52YWx1ZSB9IHEtc2xpZGVyX190aHVtYiR7IGF4aXMudmFsdWUgfS0keyBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3J0bCcgOiAnbHRyJyB9IGFic29sdXRlIG5vbi1zZWxlY3RhYmxlYFxuICAgICAgKyBmb2N1c0NsYXNzLnZhbHVlXG4gICAgICArICh0aHVtYi50aHVtYkNvbG9yLnZhbHVlICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgdGh1bWIudGh1bWJDb2xvci52YWx1ZSB9YCA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHdpZHRoOiBwcm9wcy50aHVtYlNpemUsXG4gICAgICBoZWlnaHQ6IHByb3BzLnRodW1iU2l6ZSxcbiAgICAgIFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiB0aHVtYi5yYXRpby52YWx1ZSB9JWAsXG4gICAgICB6SW5kZXg6IGZvY3VzLnZhbHVlID09PSB0aHVtYi5mb2N1c1ZhbHVlID8gMiA6IHZvaWQgMFxuICAgIH0pKVxuXG4gICAgY29uc3QgcGluQ29sb3IgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICB0aHVtYi5sYWJlbENvbG9yLnZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgPyBgIHRleHQtJHsgdGh1bWIubGFiZWxDb2xvci52YWx1ZSB9YFxuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IHRleHRDb250YWluZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IGdldFRleHRDb250YWluZXJTdHlsZSh0aHVtYi5yYXRpby52YWx1ZSkpXG5cbiAgICBjb25zdCB0ZXh0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAncS1zbGlkZXJfX3RleHQnXG4gICAgICArICh0aHVtYi5sYWJlbFRleHRDb2xvci52YWx1ZSAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHRodW1iLmxhYmVsVGV4dENvbG9yLnZhbHVlIH1gIDogJycpXG4gICAgKSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCB0aHVtYkNvbnRlbnQgPSBbXG4gICAgICAgIGgoJ3N2ZycsIHtcbiAgICAgICAgICBjbGFzczogJ3Etc2xpZGVyX190aHVtYi1zaGFwZSBhYnNvbHV0ZS1mdWxsJyxcbiAgICAgICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ3BhdGgnLCB7IGQ6IHByb3BzLnRodW1iUGF0aCB9KVxuICAgICAgICBdKSxcblxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1zbGlkZXJfX2ZvY3VzLXJpbmcgZml0JyB9KVxuICAgICAgXVxuXG4gICAgICBpZiAocHJvcHMubGFiZWwgPT09IHRydWUgfHwgcHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUpIHtcbiAgICAgICAgdGh1bWJDb250ZW50LnB1c2goXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHBpbkNsYXNzLnZhbHVlICsgJyBhYnNvbHV0ZSBmaXQgbm8tcG9pbnRlci1ldmVudHMnICsgcGluQ29sb3IudmFsdWVcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBsYWJlbENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZTogeyBtaW5XaWR0aDogcHJvcHMudGh1bWJTaXplIH1cbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGNsYXNzOiB0ZXh0Q29udGFpbmVyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHRleHRDb250YWluZXJTdHlsZS52YWx1ZVxuICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgaCgnc3BhbicsIHsgY2xhc3M6IHRleHRDbGFzcy52YWx1ZSB9LCB0aHVtYi5sYWJlbC52YWx1ZSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChwcm9wcy5uYW1lICE9PSB2b2lkIDAgJiYgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGluamVjdEZvcm1JbnB1dCh0aHVtYkNvbnRlbnQsICdwdXNoJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICAuLi50aHVtYi5nZXROb2RlRGF0YSgpXG4gICAgICB9LCB0aHVtYkNvbnRlbnQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGVudCAoc2VsZWN0aW9uQmFyU3R5bGUsIHRyYWNrQ29udGFpbmVyVGFiaW5kZXgsIHRyYWNrQ29udGFpbmVyRXZlbnRzLCBpbmplY3RUaHVtYikge1xuICAgIGNvbnN0IHRyYWNrQ29udGVudCA9IFtdXG5cbiAgICBwcm9wcy5pbm5lclRyYWNrQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ2lubmVyJyxcbiAgICAgICAgY2xhc3M6IGlubmVyQmFyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBpbm5lckJhclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIHByb3BzLnNlbGVjdGlvbkNvbG9yICE9PSAndHJhbnNwYXJlbnQnICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdzZWxlY3Rpb24nLFxuICAgICAgICBjbGFzczogc2VsZWN0aW9uQmFyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzZWxlY3Rpb25CYXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBwcm9wcy5tYXJrZXJzICE9PSBmYWxzZSAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnbWFya2VyJyxcbiAgICAgICAgY2xhc3M6IG1hcmtlckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogbWFya2VyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgaW5qZWN0VGh1bWIodHJhY2tDb250ZW50KVxuXG4gICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgIGhEaXIoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAndHJhY2tDJyxcbiAgICAgICAgICBjbGFzczogdHJhY2tDb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICB0YWJpbmRleDogdHJhY2tDb250YWluZXJUYWJpbmRleC52YWx1ZSxcbiAgICAgICAgICAuLi50cmFja0NvbnRhaW5lckV2ZW50cy52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHRyYWNrQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICBzdHlsZTogdHJhY2tTdHlsZS52YWx1ZVxuICAgICAgICAgIH0sIHRyYWNrQ29udGVudClcbiAgICAgICAgXSxcbiAgICAgICAgJ3NsaWRlJyxcbiAgICAgICAgZWRpdGFibGUudmFsdWUsICgpID0+IHBhbkRpcmVjdGl2ZS52YWx1ZVxuICAgICAgKVxuICAgIF1cblxuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBwcm9wcy5zd2l0Y2hNYXJrZXJMYWJlbHNTaWRlID09PSB0cnVlXG4gICAgICAgID8gJ3Vuc2hpZnQnXG4gICAgICAgIDogJ3B1c2gnXG5cbiAgICAgIGNvbnRlbnRbIGFjdGlvbiBdKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAga2V5OiAnbWFya2VyTCcsXG4gICAgICAgICAgY2xhc3M6IG1hcmtlckxhYmVsc0NvbnRhaW5lckNsYXNzLnZhbHVlXG4gICAgICAgIH0sIGdldE1hcmtlckxhYmVsc0NvbnRlbnQoKSlcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudFxuICB9XG5cbiAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgc3RhdGU6IHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGZvY3VzLFxuICAgICAgcHJldmVudEZvY3VzLFxuICAgICAgZHJhZ2dpbmcsXG5cbiAgICAgIGVkaXRhYmxlLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIHRhYmluZGV4LFxuICAgICAgYXR0cmlidXRlcyxcblxuICAgICAgcm91bmRWYWx1ZUZuLFxuICAgICAga2V5U3RlcCxcbiAgICAgIHRyYWNrTGVuLFxuICAgICAgaW5uZXJNaW4sXG4gICAgICBpbm5lck1pblJhdGlvLFxuICAgICAgaW5uZXJNYXgsXG4gICAgICBpbm5lck1heFJhdGlvLFxuICAgICAgcG9zaXRpb25Qcm9wLFxuICAgICAgc2l6ZVByb3AsXG4gICAgICBpc1JldmVyc2VkXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIG9uQWN0aXZhdGUsXG4gICAgICBvbk1vYmlsZUNsaWNrLFxuICAgICAgb25CbHVyLFxuICAgICAgb25LZXl1cCxcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICBnZXRUaHVtYlJlbmRlckZuLFxuICAgICAgY29udmVydFJhdGlvVG9Nb2RlbCxcbiAgICAgIGNvbnZlcnRNb2RlbFRvUmF0aW8sXG4gICAgICBnZXREcmFnZ2luZ1JhdGlvXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyB1c2VGb3JtQXR0cnMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtZm9ybS9wcml2YXRlLnVzZS1mb3JtLmpzJ1xuXG5pbXBvcnQgdXNlU2xpZGVyLCB7XG4gIHVzZVNsaWRlclByb3BzLFxuICB1c2VTbGlkZXJFbWl0cyxcbiAga2V5Q29kZXNcbn0gZnJvbSAnLi91c2Utc2xpZGVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0L2Zvcm1hdC5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQvZXZlbnQuanMnXG5cbmNvbnN0IGdldE5vZGVEYXRhID0gKCkgPT4gKHt9KVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNsaWRlcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VTbGlkZXJQcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB0eXBlb2YgdiA9PT0gJ251bWJlcicgfHwgdiA9PT0gbnVsbFxuICAgIH0sXG5cbiAgICBsYWJlbFZhbHVlOiBbIFN0cmluZywgTnVtYmVyIF1cbiAgfSxcblxuICBlbWl0czogdXNlU2xpZGVyRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHsgc3RhdGUsIG1ldGhvZHMgfSA9IHVzZVNsaWRlcih7XG4gICAgICB1cGRhdGVWYWx1ZSwgdXBkYXRlUG9zaXRpb24sIGdldERyYWdnaW5nLFxuICAgICAgZm9ybUF0dHJzOiB1c2VGb3JtQXR0cnMocHJvcHMpXG4gICAgfSlcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBjdXJSYXRpbyA9IHJlZigwKVxuICAgIGNvbnN0IG1vZGVsID0gcmVmKDApXG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVNb2RlbCAoKSB7XG4gICAgICBtb2RlbC52YWx1ZSA9IHByb3BzLm1vZGVsVmFsdWUgPT09IG51bGxcbiAgICAgICAgPyBzdGF0ZS5pbm5lck1pbi52YWx1ZVxuICAgICAgICA6IGJldHdlZW4ocHJvcHMubW9kZWxWYWx1ZSwgc3RhdGUuaW5uZXJNaW4udmFsdWUsIHN0YXRlLmlubmVyTWF4LnZhbHVlKVxuICAgIH1cblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gYCR7IHByb3BzLm1vZGVsVmFsdWUgfXwkeyBzdGF0ZS5pbm5lck1pbi52YWx1ZSB9fCR7IHN0YXRlLmlubmVyTWF4LnZhbHVlIH1gLFxuICAgICAgbm9ybWFsaXplTW9kZWxcbiAgICApXG5cbiAgICBub3JtYWxpemVNb2RlbCgpXG5cbiAgICBjb25zdCBtb2RlbFJhdGlvID0gY29tcHV0ZWQoKCkgPT4gbWV0aG9kcy5jb252ZXJ0TW9kZWxUb1JhdGlvKG1vZGVsLnZhbHVlKSlcbiAgICBjb25zdCByYXRpbyA9IGNvbXB1dGVkKCgpID0+IChzdGF0ZS5hY3RpdmUudmFsdWUgPT09IHRydWUgPyBjdXJSYXRpby52YWx1ZSA6IG1vZGVsUmF0aW8udmFsdWUpKVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uQmFyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7XG4gICAgICAgIFsgc3RhdGUucG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiBzdGF0ZS5pbm5lck1pblJhdGlvLnZhbHVlIH0lYCxcbiAgICAgICAgWyBzdGF0ZS5zaXplUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogKHJhdGlvLnZhbHVlIC0gc3RhdGUuaW5uZXJNaW5SYXRpby52YWx1ZSkgfSVgXG4gICAgICB9XG4gICAgICBpZiAocHJvcHMuc2VsZWN0aW9uSW1nICE9PSB2b2lkIDApIHtcbiAgICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMuc2VsZWN0aW9uSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGdldFRodW1iID0gbWV0aG9kcy5nZXRUaHVtYlJlbmRlckZuKHtcbiAgICAgIGZvY3VzVmFsdWU6IHRydWUsXG4gICAgICBnZXROb2RlRGF0YSxcbiAgICAgIHJhdGlvLFxuICAgICAgbGFiZWw6IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICAgcHJvcHMubGFiZWxWYWx1ZSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBwcm9wcy5sYWJlbFZhbHVlXG4gICAgICAgICAgOiBtb2RlbC52YWx1ZVxuICAgICAgKSksXG4gICAgICB0aHVtYkNvbG9yOiBjb21wdXRlZCgoKSA9PiBwcm9wcy50aHVtYkNvbG9yIHx8IHByb3BzLmNvbG9yKSxcbiAgICAgIGxhYmVsQ29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLmxhYmVsQ29sb3IpLFxuICAgICAgbGFiZWxUZXh0Q29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLmxhYmVsVGV4dENvbG9yKVxuICAgIH0pXG5cbiAgICBjb25zdCB0cmFja0NvbnRhaW5lckV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5lZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuICRxLnBsYXRmb3JtLmlzLm1vYmlsZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgb25DbGljazogbWV0aG9kcy5vbk1vYmlsZUNsaWNrIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBvbk1vdXNlZG93bjogbWV0aG9kcy5vbkFjdGl2YXRlLFxuICAgICAgICAgICAgb25Gb2N1cyxcbiAgICAgICAgICAgIG9uQmx1cjogbWV0aG9kcy5vbkJsdXIsXG4gICAgICAgICAgICBvbktleWRvd24sXG4gICAgICAgICAgICBvbktleXVwOiBtZXRob2RzLm9uS2V5dXBcbiAgICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZhbHVlIChjaGFuZ2UpIHtcbiAgICAgIGlmIChtb2RlbC52YWx1ZSAhPT0gcHJvcHMubW9kZWxWYWx1ZSkge1xuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG1vZGVsLnZhbHVlKVxuICAgICAgfVxuICAgICAgY2hhbmdlID09PSB0cnVlICYmIGVtaXQoJ2NoYW5nZScsIG1vZGVsLnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERyYWdnaW5nICgpIHtcbiAgICAgIHJldHVybiByb290UmVmLnZhbHVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24gKGV2ZW50LCBkcmFnZ2luZyA9IHN0YXRlLmRyYWdnaW5nLnZhbHVlKSB7XG4gICAgICBjb25zdCByYXRpbyA9IG1ldGhvZHMuZ2V0RHJhZ2dpbmdSYXRpbyhldmVudCwgZHJhZ2dpbmcpXG5cbiAgICAgIG1vZGVsLnZhbHVlID0gbWV0aG9kcy5jb252ZXJ0UmF0aW9Ub01vZGVsKHJhdGlvKVxuXG4gICAgICBjdXJSYXRpby52YWx1ZSA9IHByb3BzLnNuYXAgIT09IHRydWUgfHwgcHJvcHMuc3RlcCA9PT0gMFxuICAgICAgICA/IHJhdGlvXG4gICAgICAgIDogbWV0aG9kcy5jb252ZXJ0TW9kZWxUb1JhdGlvKG1vZGVsLnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXMgKCkge1xuICAgICAgc3RhdGUuZm9jdXMudmFsdWUgPSB0cnVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlkb3duIChldnQpIHtcbiAgICAgIGlmIChrZXlDb2Rlcy5pbmNsdWRlcyhldnQua2V5Q29kZSkgPT09IGZhbHNlKSByZXR1cm5cblxuICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICBjb25zdFxuICAgICAgICBzdGVwVmFsID0gKFsgMzQsIDMzIF0uaW5jbHVkZXMoZXZ0LmtleUNvZGUpID8gMTAgOiAxKSAqIHN0YXRlLmtleVN0ZXAudmFsdWUsXG4gICAgICAgIG9mZnNldCA9IChcbiAgICAgICAgICAoWyAzNCwgMzcsIDQwIF0uaW5jbHVkZXMoZXZ0LmtleUNvZGUpID8gLTEgOiAxKVxuICAgICAgICAgICogKHN0YXRlLmlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAtMSA6IDEpXG4gICAgICAgICAgKiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAtMSA6IDEpICogc3RlcFZhbFxuICAgICAgICApXG5cbiAgICAgIG1vZGVsLnZhbHVlID0gYmV0d2VlbihcbiAgICAgICAgc3RhdGUucm91bmRWYWx1ZUZuLnZhbHVlKG1vZGVsLnZhbHVlICsgb2Zmc2V0KSxcbiAgICAgICAgc3RhdGUuaW5uZXJNaW4udmFsdWUsXG4gICAgICAgIHN0YXRlLmlubmVyTWF4LnZhbHVlXG4gICAgICApXG5cbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IG1ldGhvZHMuZ2V0Q29udGVudChcbiAgICAgICAgc2VsZWN0aW9uQmFyU3R5bGUsXG4gICAgICAgIHN0YXRlLnRhYmluZGV4LFxuICAgICAgICB0cmFja0NvbnRhaW5lckV2ZW50cyxcbiAgICAgICAgbm9kZSA9PiB7IG5vZGUucHVzaChnZXRUaHVtYigpKSB9XG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IHN0YXRlLmNsYXNzZXMudmFsdWUgKyAocHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbCA/ICcgcS1zbGlkZXItLW5vLXZhbHVlJyA6ICcnKSxcbiAgICAgICAgLi4uc3RhdGUuYXR0cmlidXRlcy52YWx1ZSxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICB9LCBjb250ZW50KVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBnZXRDdXJyZW50SW5zdGFuY2UsIHByb3ZpZGUgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgdXNlVGljayBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtdGljay91c2UtdGljay5qcydcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS10aW1lb3V0L3VzZS10aW1lb3V0LmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCB7IHRhYnNLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnN5bWJvbHMvc3ltYm9scy5qcydcbmltcG9ydCB7IHJ0bEhhc1Njcm9sbEJ1ZyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucnRsL3J0bC5qcydcblxuZnVuY3Rpb24gZ2V0SW5kaWNhdG9yQ2xhc3MgKGNvbG9yLCB0b3AsIHZlcnRpY2FsKSB7XG4gIGNvbnN0IHBvcyA9IHZlcnRpY2FsID09PSB0cnVlXG4gICAgPyBbICdsZWZ0JywgJ3JpZ2h0JyBdXG4gICAgOiBbICd0b3AnLCAnYm90dG9tJyBdXG5cbiAgcmV0dXJuIGBhYnNvbHV0ZS0keyB0b3AgPT09IHRydWUgPyBwb3NbIDAgXSA6IHBvc1sgMSBdIH0keyBjb2xvciA/IGAgdGV4dC0keyBjb2xvciB9YCA6ICcnIH1gXG59XG5cbmNvbnN0IGFsaWduVmFsdWVzID0gWyAnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnLCAnanVzdGlmeScgXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYnMnLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuXG4gICAgYWxpZ246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdjZW50ZXInLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IGFsaWduVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfSxcbiAgICBicmVha3BvaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA2MDBcbiAgICB9LFxuXG4gICAgdmVydGljYWw6IEJvb2xlYW4sXG4gICAgc2hyaW5rOiBCb29sZWFuLFxuICAgIHN0cmV0Y2g6IEJvb2xlYW4sXG5cbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGFjdGl2ZUNvbG9yOiBTdHJpbmcsXG4gICAgYWN0aXZlQmdDb2xvcjogU3RyaW5nLFxuICAgIGluZGljYXRvckNvbG9yOiBTdHJpbmcsXG4gICAgbGVmdEljb246IFN0cmluZyxcbiAgICByaWdodEljb246IFN0cmluZyxcblxuICAgIG91dHNpZGVBcnJvd3M6IEJvb2xlYW4sXG4gICAgbW9iaWxlQXJyb3dzOiBCb29sZWFuLFxuXG4gICAgc3dpdGNoSW5kaWNhdG9yOiBCb29sZWFuLFxuXG4gICAgbmFycm93SW5kaWNhdG9yOiBCb29sZWFuLFxuICAgIGlubGluZUxhYmVsOiBCb29sZWFuLFxuICAgIG5vQ2FwczogQm9vbGVhbixcblxuICAgIGRlbnNlOiBCb29sZWFuLFxuXG4gICAgY29udGVudENsYXNzOiBTdHJpbmcsXG5cbiAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IFsgRnVuY3Rpb24sIEFycmF5IF1cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaWNrOiByZWdpc3RlclNjcm9sbFRpY2sgfSA9IHVzZVRpY2soKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaWNrOiByZWdpc3RlclVwZGF0ZUFycm93c1RpY2sgfSA9IHVzZVRpY2soKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaWNrOiByZWdpc3RlckFuaW1hdGVUaWNrIH0gPSB1c2VUaWNrKClcblxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0OiByZWdpc3RlckZvY3VzVGltZW91dCwgcmVtb3ZlVGltZW91dDogcmVtb3ZlRm9jdXNUaW1lb3V0IH0gPSB1c2VUaW1lb3V0KClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dDogcmVnaXN0ZXJTY3JvbGxUb1RhYlRpbWVvdXQsIHJlbW92ZVRpbWVvdXQ6IHJlbW92ZVNjcm9sbFRvVGFiVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgY29udGVudFJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgY3VycmVudE1vZGVsID0gcmVmKHByb3BzLm1vZGVsVmFsdWUpXG4gICAgY29uc3Qgc2Nyb2xsYWJsZSA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSByZWYodHJ1ZSlcbiAgICBjb25zdCByaWdodEFycm93ID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGp1c3RpZnkgPSByZWYoZmFsc2UpXG5cbiAgICBjb25zdCB0YWJEYXRhTGlzdCA9IFtdXG4gICAgY29uc3QgdGFiRGF0YUxpc3RMZW4gPSByZWYoMClcbiAgICBjb25zdCBoYXNGb2N1cyA9IHJlZihmYWxzZSlcblxuICAgIGxldCBhbmltYXRlVGltZXIgPSBudWxsLCBzY3JvbGxUaW1lciA9IG51bGwsIHVud2F0Y2hSb3V0ZVxuXG4gICAgY29uc3QgdGFiUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgYWN0aXZlQ2xhc3M6IHByb3BzLmFjdGl2ZUNsYXNzLFxuICAgICAgYWN0aXZlQ29sb3I6IHByb3BzLmFjdGl2ZUNvbG9yLFxuICAgICAgYWN0aXZlQmdDb2xvcjogcHJvcHMuYWN0aXZlQmdDb2xvcixcbiAgICAgIGluZGljYXRvckNsYXNzOiBnZXRJbmRpY2F0b3JDbGFzcyhcbiAgICAgICAgcHJvcHMuaW5kaWNhdG9yQ29sb3IsXG4gICAgICAgIHByb3BzLnN3aXRjaEluZGljYXRvcixcbiAgICAgICAgcHJvcHMudmVydGljYWxcbiAgICAgICksXG4gICAgICBuYXJyb3dJbmRpY2F0b3I6IHByb3BzLm5hcnJvd0luZGljYXRvcixcbiAgICAgIGlubGluZUxhYmVsOiBwcm9wcy5pbmxpbmVMYWJlbCxcbiAgICAgIG5vQ2FwczogcHJvcHMubm9DYXBzXG4gICAgfSkpXG5cbiAgICBjb25zdCBoYXNBY3RpdmVUYWIgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBsZW4gPSB0YWJEYXRhTGlzdExlbi52YWx1ZVxuICAgICAgY29uc3QgdmFsID0gY3VycmVudE1vZGVsLnZhbHVlXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHRhYkRhdGFMaXN0WyBpIF0ubmFtZS52YWx1ZSA9PT0gdmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgY29uc3QgYWxpZ25DbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFsaWduID0gc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICdsZWZ0J1xuICAgICAgICA6IChqdXN0aWZ5LnZhbHVlID09PSB0cnVlID8gJ2p1c3RpZnknIDogcHJvcHMuYWxpZ24pXG5cbiAgICAgIHJldHVybiBgcS10YWJzX19jb250ZW50LS1hbGlnbi0keyBhbGlnbiB9YFxuICAgIH0pXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRhYnMgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyJ1xuICAgICAgKyBgIHEtdGFicy0tJHsgc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJ25vdC0nIH1zY3JvbGxhYmxlYFxuICAgICAgKyBgIHEtdGFicy0tJHsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnIH1gXG4gICAgICArIGAgcS10YWJzX19hcnJvd3MtLSR7IHByb3BzLm91dHNpZGVBcnJvd3MgPT09IHRydWUgPyAnb3V0c2lkZScgOiAnaW5zaWRlJyB9YFxuICAgICAgKyBgIHEtdGFicy0tbW9iaWxlLXdpdGgkeyBwcm9wcy5tb2JpbGVBcnJvd3MgPT09IHRydWUgPyAnJyA6ICdvdXQnIH0tYXJyb3dzYFxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFicy0tZGVuc2UnIDogJycpXG4gICAgICArIChwcm9wcy5zaHJpbmsgPT09IHRydWUgPyAnIGNvbC1zaHJpbmsnIDogJycpXG4gICAgICArIChwcm9wcy5zdHJldGNoID09PSB0cnVlID8gJyBzZWxmLXN0cmV0Y2gnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgaW5uZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10YWJzX19jb250ZW50IHNjcm9sbC0tbW9iaWxlIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlciBzZWxmLXN0cmV0Y2ggaGlkZS1zY3JvbGxiYXIgcmVsYXRpdmUtcG9zaXRpb24gJ1xuICAgICAgKyBhbGlnbkNsYXNzLnZhbHVlXG4gICAgICArIChwcm9wcy5jb250ZW50Q2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMuY29udGVudENsYXNzIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgZG9tUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICA/IHsgY29udGFpbmVyOiAnaGVpZ2h0JywgY29udGVudDogJ29mZnNldEhlaWdodCcsIHNjcm9sbDogJ3Njcm9sbEhlaWdodCcgfVxuICAgICAgICA6IHsgY29udGFpbmVyOiAnd2lkdGgnLCBjb250ZW50OiAnb2Zmc2V0V2lkdGgnLCBzY3JvbGw6ICdzY3JvbGxXaWR0aCcgfVxuICAgICkpXG5cbiAgICBjb25zdCBpc1JUTCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnZlcnRpY2FsICE9PSB0cnVlICYmICRxLmxhbmcucnRsID09PSB0cnVlKVxuICAgIGNvbnN0IHJ0bFBvc0NvcnJlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiBydGxIYXNTY3JvbGxCdWcgPT09IGZhbHNlICYmIGlzUlRMLnZhbHVlID09PSB0cnVlKVxuXG4gICAgd2F0Y2goaXNSVEwsIHVwZGF0ZUFycm93cylcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIG5hbWUgPT4ge1xuICAgICAgdXBkYXRlTW9kZWwoeyBuYW1lLCBzZXRDdXJyZW50OiB0cnVlLCBza2lwRW1pdDogdHJ1ZSB9KVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5vdXRzaWRlQXJyb3dzLCByZWNhbGN1bGF0ZVNjcm9sbClcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsICh7IG5hbWUsIHNldEN1cnJlbnQsIHNraXBFbWl0IH0pIHtcbiAgICAgIGlmIChjdXJyZW50TW9kZWwudmFsdWUgPT09IG5hbWUpIHJldHVyblxuXG4gICAgICBpZiAoc2tpcEVtaXQgIT09IHRydWUgJiYgcHJvcHNbICdvblVwZGF0ZTptb2RlbFZhbHVlJyBdICE9PSB2b2lkIDApIHtcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBuYW1lKVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHNldEN1cnJlbnQgPT09IHRydWVcbiAgICAgICAgfHwgcHJvcHNbICdvblVwZGF0ZTptb2RlbFZhbHVlJyBdID09PSB2b2lkIDBcbiAgICAgICkge1xuICAgICAgICBhbmltYXRlKGN1cnJlbnRNb2RlbC52YWx1ZSwgbmFtZSlcbiAgICAgICAgY3VycmVudE1vZGVsLnZhbHVlID0gbmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2FsY3VsYXRlU2Nyb2xsICgpIHtcbiAgICAgIHJlZ2lzdGVyU2Nyb2xsVGljaygoKSA9PiB7XG4gICAgICAgIHJvb3RSZWYudmFsdWUgJiYgdXBkYXRlQ29udGFpbmVyKHtcbiAgICAgICAgICB3aWR0aDogcm9vdFJlZi52YWx1ZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHJvb3RSZWYudmFsdWUub2Zmc2V0SGVpZ2h0XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbnRhaW5lciAoZG9tU2l6ZSkge1xuICAgICAgLy8gaXQgY2FuIGJlIGNhbGxlZCBmYXN0ZXIgdGhhbiBjb21wb25lbnQgYmVpbmcgaW5pdGlhbGl6ZWRcbiAgICAgIC8vIHNvIHdlIG5lZWQgdG8gcHJvdGVjdCBhZ2FpbnN0IHRoYXQgY2FzZVxuICAgICAgLy8gKG9uZSBleGFtcGxlIG9mIHN1Y2ggY2FzZSBpcyB0aGUgZG9jcyByZWxlYXNlIG5vdGVzIHBhZ2UpXG4gICAgICBpZiAoZG9tUHJvcHMudmFsdWUgPT09IHZvaWQgMCB8fCBjb250ZW50UmVmLnZhbHVlID09PSBudWxsKSByZXR1cm5cblxuICAgICAgY29uc3RcbiAgICAgICAgc2l6ZSA9IGRvbVNpemVbIGRvbVByb3BzLnZhbHVlLmNvbnRhaW5lciBdLFxuICAgICAgICBzY3JvbGxTaXplID0gTWF0aC5taW4oXG4gICAgICAgICAgY29udGVudFJlZi52YWx1ZVsgZG9tUHJvcHMudmFsdWUuc2Nyb2xsIF0sXG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnJlZHVjZS5jYWxsKFxuICAgICAgICAgICAgY29udGVudFJlZi52YWx1ZS5jaGlsZHJlbixcbiAgICAgICAgICAgIChhY2MsIGVsKSA9PiBhY2MgKyAoZWxbIGRvbVByb3BzLnZhbHVlLmNvbnRlbnQgXSB8fCAwKSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHNjcm9sbCA9IHNpemUgPiAwICYmIHNjcm9sbFNpemUgPiBzaXplIC8vIHdoZW4gdGhlcmUgaXMgbm8gdGFiLCBpbiBDaHJvbWUsIHNpemUgPT09IDAgYW5kIHNjcm9sbFNpemUgPT09IDFcblxuICAgICAgc2Nyb2xsYWJsZS52YWx1ZSA9IHNjcm9sbFxuXG4gICAgICAvLyBBcnJvd3MgbmVlZCB0byBiZSB1cGRhdGVkIGV2ZW4gaWYgdGhlIHNjcm9sbCBzdGF0dXMgd2FzIGFscmVhZHkgdHJ1ZVxuICAgICAgc2Nyb2xsID09PSB0cnVlICYmIHJlZ2lzdGVyVXBkYXRlQXJyb3dzVGljayh1cGRhdGVBcnJvd3MpXG5cbiAgICAgIGp1c3RpZnkudmFsdWUgPSBzaXplIDwgcGFyc2VJbnQocHJvcHMuYnJlYWtwb2ludCwgMTApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSAob2xkTmFtZSwgbmV3TmFtZSkge1xuICAgICAgY29uc3RcbiAgICAgICAgb2xkVGFiID0gb2xkTmFtZSAhPT0gdm9pZCAwICYmIG9sZE5hbWUgIT09IG51bGwgJiYgb2xkTmFtZSAhPT0gJydcbiAgICAgICAgICA/IHRhYkRhdGFMaXN0LmZpbmQodGFiID0+IHRhYi5uYW1lLnZhbHVlID09PSBvbGROYW1lKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgbmV3VGFiID0gbmV3TmFtZSAhPT0gdm9pZCAwICYmIG5ld05hbWUgIT09IG51bGwgJiYgbmV3TmFtZSAhPT0gJydcbiAgICAgICAgICA/IHRhYkRhdGFMaXN0LmZpbmQodGFiID0+IHRhYi5uYW1lLnZhbHVlID09PSBuZXdOYW1lKVxuICAgICAgICAgIDogbnVsbFxuXG4gICAgICBpZiAoaGFkQWN0aXZhdGVkID09PSB0cnVlKSB7XG4gICAgICAgIC8vIEFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gcmUtYWN0aXZhdGVkXG4gICAgICAgIC8vIHdlIHNob3VsZCBub3QgYW5pbWF0ZSB0aGUgdHJhbnNpdGlvbi5cbiAgICAgICAgLy8gQ29uc2lkZXIgaXQgYXMgaWYgdGhlIGNvbXBvbmVudCBoYXMganVzdCBiZWVuIG1vdW50ZWQuXG4gICAgICAgIGhhZEFjdGl2YXRlZCA9IGZhbHNlXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvbGRUYWIgJiYgbmV3VGFiKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgb2xkRWwgPSBvbGRUYWIudGFiSW5kaWNhdG9yUmVmLnZhbHVlLFxuICAgICAgICAgIG5ld0VsID0gbmV3VGFiLnRhYkluZGljYXRvclJlZi52YWx1ZVxuXG4gICAgICAgIGlmIChhbmltYXRlVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoYW5pbWF0ZVRpbWVyKVxuICAgICAgICAgIGFuaW1hdGVUaW1lciA9IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZEVsLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgb2xkRWwuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnXG4gICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgbmV3RWwuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnXG5cbiAgICAgICAgY29uc3RcbiAgICAgICAgICBvbGRQb3MgPSBvbGRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBuZXdQb3MgPSBuZXdFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zZm9ybSA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgPyBgdHJhbnNsYXRlM2QoMCwkeyBvbGRQb3MudG9wIC0gbmV3UG9zLnRvcCB9cHgsMCkgc2NhbGUzZCgxLCR7IG5ld1Bvcy5oZWlnaHQgPyBvbGRQb3MuaGVpZ2h0IC8gbmV3UG9zLmhlaWdodCA6IDEgfSwxKWBcbiAgICAgICAgICA6IGB0cmFuc2xhdGUzZCgkeyBvbGRQb3MubGVmdCAtIG5ld1Bvcy5sZWZ0IH1weCwwLDApIHNjYWxlM2QoJHsgbmV3UG9zLndpZHRoID8gb2xkUG9zLndpZHRoIC8gbmV3UG9zLndpZHRoIDogMSB9LDEsMSlgXG5cbiAgICAgICAgLy8gYWxsb3cgc2NvcGUgdXBkYXRlcyB0byBraWNrIGluIChRUm91dGVUYWIgbmVlZHMgbW9yZSB0aW1lKVxuICAgICAgICByZWdpc3RlckFuaW1hdGVUaWNrKCgpID0+IHtcbiAgICAgICAgICBhbmltYXRlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFuaW1hdGVUaW1lciA9IG51bGxcbiAgICAgICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIC4yNXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSknXG4gICAgICAgICAgICBuZXdFbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcbiAgICAgICAgICB9LCA3MClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld1RhYiAmJiBzY3JvbGxhYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHNjcm9sbFRvVGFiRWwobmV3VGFiLnJvb3RSZWYudmFsdWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9UYWJFbCAoZWwpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIHsgbGVmdCwgd2lkdGgsIHRvcCwgaGVpZ2h0IH0gPSBjb250ZW50UmVmLnZhbHVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBuZXdQb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICBsZXQgb2Zmc2V0ID0gcHJvcHMudmVydGljYWwgPT09IHRydWUgPyBuZXdQb3MudG9wIC0gdG9wIDogbmV3UG9zLmxlZnQgLSBsZWZ0XG5cbiAgICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICAgIGNvbnRlbnRSZWYudmFsdWVbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCcgXSArPSBNYXRoLmZsb29yKG9mZnNldClcbiAgICAgICAgdXBkYXRlQXJyb3dzKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIG9mZnNldCArPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IG5ld1Bvcy5oZWlnaHQgLSBoZWlnaHQgOiBuZXdQb3Mud2lkdGggLSB3aWR0aFxuICAgICAgaWYgKG9mZnNldCA+IDApIHtcbiAgICAgICAgY29udGVudFJlZi52YWx1ZVsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JyBdICs9IE1hdGguY2VpbChvZmZzZXQpXG4gICAgICAgIHVwZGF0ZUFycm93cygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQXJyb3dzICgpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50UmVmLnZhbHVlXG4gICAgICBpZiAoY29udGVudCA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHJlY3QgPSBjb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBwb3MgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IGNvbnRlbnQuc2Nyb2xsVG9wIDogTWF0aC5hYnMoY29udGVudC5zY3JvbGxMZWZ0KVxuXG4gICAgICBpZiAoaXNSVEwudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgbGVmdEFycm93LnZhbHVlID0gTWF0aC5jZWlsKHBvcyArIHJlY3Qud2lkdGgpIDwgY29udGVudC5zY3JvbGxXaWR0aCAtIDFcbiAgICAgICAgcmlnaHRBcnJvdy52YWx1ZSA9IHBvcyA+IDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZWZ0QXJyb3cudmFsdWUgPSBwb3MgPiAwXG4gICAgICAgIHJpZ2h0QXJyb3cudmFsdWUgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gTWF0aC5jZWlsKHBvcyArIHJlY3QuaGVpZ2h0KSA8IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgOiBNYXRoLmNlaWwocG9zICsgcmVjdC53aWR0aCkgPCBjb250ZW50LnNjcm9sbFdpZHRoXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbVNjcm9sbFRvICh2YWx1ZSkge1xuICAgICAgc2Nyb2xsVGltZXIgIT09IG51bGwgJiYgY2xlYXJJbnRlcnZhbChzY3JvbGxUaW1lcilcbiAgICAgIHNjcm9sbFRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoc2Nyb2xsVG93YXJkcyh2YWx1ZSkgPT09IHRydWUpIHtcbiAgICAgICAgICBzdG9wQW5pbVNjcm9sbCgpXG4gICAgICAgIH1cbiAgICAgIH0sIDUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9TdGFydCAoKSB7XG4gICAgICBhbmltU2Nyb2xsVG8ocnRsUG9zQ29ycmVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIDogMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb0VuZCAoKSB7XG4gICAgICBhbmltU2Nyb2xsVG8ocnRsUG9zQ29ycmVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wQW5pbVNjcm9sbCAoKSB7XG4gICAgICBpZiAoc2Nyb2xsVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzY3JvbGxUaW1lcilcbiAgICAgICAgc2Nyb2xsVGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LYmROYXZpZ2F0ZSAoa2V5Q29kZSwgZnJvbUVsKSB7XG4gICAgICBjb25zdCB0YWJzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxuICAgICAgICBjb250ZW50UmVmLnZhbHVlLmNoaWxkcmVuLFxuICAgICAgICBlbCA9PiBlbCA9PT0gZnJvbUVsIHx8IChlbC5tYXRjaGVzICYmIGVsLm1hdGNoZXMoJy5xLXRhYi5xLWZvY3VzYWJsZScpID09PSB0cnVlKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBsZW4gPSB0YWJzLmxlbmd0aFxuICAgICAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuXG5cbiAgICAgIGlmIChrZXlDb2RlID09PSAzNikgeyAvLyBIb21lXG4gICAgICAgIHNjcm9sbFRvVGFiRWwodGFic1sgMCBdKVxuICAgICAgICB0YWJzWyAwIF0uZm9jdXMoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKGtleUNvZGUgPT09IDM1KSB7IC8vIEVuZFxuICAgICAgICBzY3JvbGxUb1RhYkVsKHRhYnNbIGxlbiAtIDEgXSlcbiAgICAgICAgdGFic1sgbGVuIC0gMSBdLmZvY3VzKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlyUHJldiA9IGtleUNvZGUgPT09IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IDM4IC8qIEFycm93VXAgKi8gOiAzNyAvKiBBcnJvd0xlZnQgKi8pXG4gICAgICBjb25zdCBkaXJOZXh0ID0ga2V5Q29kZSA9PT0gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gNDAgLyogQXJyb3dEb3duICovIDogMzkgLyogQXJyb3dSaWdodCAqLylcblxuICAgICAgY29uc3QgZGlyID0gZGlyUHJldiA9PT0gdHJ1ZSA/IC0xIDogKGRpck5leHQgPT09IHRydWUgPyAxIDogdm9pZCAwKVxuXG4gICAgICBpZiAoZGlyICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29uc3QgcnRsRGlyID0gaXNSVEwudmFsdWUgPT09IHRydWUgPyAtMSA6IDFcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YWJzLmluZGV4T2YoZnJvbUVsKSArIGRpciAqIHJ0bERpclxuXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgc2Nyb2xsVG9UYWJFbCh0YWJzWyBpbmRleCBdKVxuICAgICAgICAgIHRhYnNbIGluZGV4IF0uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxldCdzIHNwZWVkIHVwIGV4ZWN1dGlvbiBvZiB0aW1lLXNlbnNpdGl2ZSBzY3JvbGxUb3dhcmRzKClcbiAgICAvLyB3aXRoIGEgY29tcHV0ZWQgdmFyaWFibGUgYnkgZGlyZWN0bHkgYXBwbHlpbmcgdGhlIG1pbmltYWxcbiAgICAvLyBudW1iZXIgb2YgaW5zdHJ1Y3Rpb25zIG9uIGdldC9zZXQgZnVuY3Rpb25zXG4gICAgY29uc3QgcG9zRm4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBydGxQb3NDb3JyZWN0aW9uLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8geyBnZXQ6IGNvbnRlbnQgPT4gTWF0aC5hYnMoY29udGVudC5zY3JvbGxMZWZ0KSwgc2V0OiAoY29udGVudCwgcG9zKSA9PiB7IGNvbnRlbnQuc2Nyb2xsTGVmdCA9IC1wb3MgfSB9XG4gICAgICAgIDogKFxuICAgICAgICAgICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgICAgICAgPyB7IGdldDogY29udGVudCA9PiBjb250ZW50LnNjcm9sbFRvcCwgc2V0OiAoY29udGVudCwgcG9zKSA9PiB7IGNvbnRlbnQuc2Nyb2xsVG9wID0gcG9zIH0gfVxuICAgICAgICAgICAgICA6IHsgZ2V0OiBjb250ZW50ID0+IGNvbnRlbnQuc2Nyb2xsTGVmdCwgc2V0OiAoY29udGVudCwgcG9zKSA9PiB7IGNvbnRlbnQuc2Nyb2xsTGVmdCA9IHBvcyB9IH1cbiAgICAgICAgICApXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvd2FyZHMgKHZhbHVlKSB7XG4gICAgICBjb25zdFxuICAgICAgICBjb250ZW50ID0gY29udGVudFJlZi52YWx1ZSxcbiAgICAgICAgeyBnZXQsIHNldCB9ID0gcG9zRm4udmFsdWVcblxuICAgICAgbGV0XG4gICAgICAgIGRvbmUgPSBmYWxzZSxcbiAgICAgICAgcG9zID0gZ2V0KGNvbnRlbnQpXG5cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHZhbHVlIDwgcG9zID8gLTEgOiAxXG5cbiAgICAgIHBvcyArPSBkaXJlY3Rpb24gKiA1XG5cbiAgICAgIGlmIChwb3MgPCAwKSB7XG4gICAgICAgIGRvbmUgPSB0cnVlXG4gICAgICAgIHBvcyA9IDBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKFxuICAgICAgICAoZGlyZWN0aW9uID09PSAtMSAmJiBwb3MgPD0gdmFsdWUpXG4gICAgICAgIHx8IChkaXJlY3Rpb24gPT09IDEgJiYgcG9zID49IHZhbHVlKVxuICAgICAgKSB7XG4gICAgICAgIGRvbmUgPSB0cnVlXG4gICAgICAgIHBvcyA9IHZhbHVlXG4gICAgICB9XG5cbiAgICAgIHNldChjb250ZW50LCBwb3MpXG4gICAgICB1cGRhdGVBcnJvd3MoKVxuXG4gICAgICByZXR1cm4gZG9uZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc1F1ZXJ5SW5jbHVkZWQgKHRhcmdldFF1ZXJ5LCBtYXRjaGluZ1F1ZXJ5KSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXRRdWVyeSkge1xuICAgICAgICBpZiAodGFyZ2V0UXVlcnlbIGtleSBdICE9PSBtYXRjaGluZ1F1ZXJ5WyBrZXkgXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gMS4gRG8gbm90IHVzZSBkaXJlY3RseTsgdXNlIHZlcmlmeVJvdXRlTW9kZWwoKSBpbnN0ZWFkXG4gICAgLy8gMi4gU2hvdWxkIHNldCBoYWRBY3RpdmF0ZWQgdG8gZmFsc2UgdXBvbiBleGl0XG4gICAgZnVuY3Rpb24gdXBkYXRlQWN0aXZlUm91dGUgKCkge1xuICAgICAgbGV0IG5hbWUgPSBudWxsLCBiZXN0U2NvcmUgPSB7IG1hdGNoZWRMZW46IDAsIHF1ZXJ5RGlmZjogOTk5OSwgaHJlZkxlbjogMCB9XG5cbiAgICAgIGNvbnN0IGxpc3QgPSB0YWJEYXRhTGlzdC5maWx0ZXIodGFiID0+IHRhYi5yb3V0ZURhdGE/Lmhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWUpXG4gICAgICBjb25zdCB7IGhhc2g6IGN1cnJlbnRIYXNoLCBxdWVyeTogY3VycmVudFF1ZXJ5IH0gPSBwcm94eS4kcm91dGVcbiAgICAgIGNvbnN0IGN1cnJlbnRRdWVyeUxlbiA9IE9iamVjdC5rZXlzKGN1cnJlbnRRdWVyeSkubGVuZ3RoXG5cbiAgICAgIC8vIFZ1ZSBSb3V0ZXIgZG9lcyBub3Qga2VlcCBhY2NvdW50IG9mIGhhc2ggJiBxdWVyeSB3aGVuIG1hdGNoaW5nXG4gICAgICAvLyBzbyB3ZSdyZSBkb2luZyB0aGlzIGFzIHdlbGxcblxuICAgICAgZm9yIChjb25zdCB0YWIgb2YgbGlzdCkge1xuICAgICAgICBjb25zdCBleGFjdCA9IHRhYi5yb3V0ZURhdGEuZXhhY3QudmFsdWUgPT09IHRydWVcblxuICAgICAgICBpZiAodGFiLnJvdXRlRGF0YVsgZXhhY3QgPT09IHRydWUgPyAnbGlua0lzRXhhY3RBY3RpdmUnIDogJ2xpbmtJc0FjdGl2ZScgXS52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIGl0IGNhbm5vdCBtYXRjaCBhbnl0aGluZyBhcyBpdCdzIG5vdCBhY3RpdmUgbm9yIGV4YWN0LWFjdGl2ZVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGhhc2gsIHF1ZXJ5LCBtYXRjaGVkLCBocmVmIH0gPSB0YWIucm91dGVEYXRhLnJlc29sdmVkTGluay52YWx1ZVxuICAgICAgICBjb25zdCBxdWVyeUxlbiA9IE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGhcblxuICAgICAgICBpZiAoZXhhY3QgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAoaGFzaCAhPT0gY3VycmVudEhhc2gpIHtcbiAgICAgICAgICAgIC8vIGl0J3Mgc2V0IHRvIGV4YWN0IGJ1dCBpdCBkb2Vzbid0IG1hdGNoZXMgdGhlIGhhc2hcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcXVlcnlMZW4gIT09IGN1cnJlbnRRdWVyeUxlblxuICAgICAgICAgICAgfHwgaGFzUXVlcnlJbmNsdWRlZChjdXJyZW50UXVlcnksIHF1ZXJ5KSA9PT0gZmFsc2VcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIGl0J3Mgc2V0IHRvIGV4YWN0IGJ1dCBpdCBkb2Vzbid0IG1hdGNoZXMgdGhlIHF1ZXJ5XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHlleSwgd2UgZm91bmQgdGhlIHBlcmZlY3QgbWF0Y2ggKHJvdXRlICsgaGFzaCArIHF1ZXJ5KVxuICAgICAgICAgIG5hbWUgPSB0YWIubmFtZS52YWx1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzaCAhPT0gJycgJiYgaGFzaCAhPT0gY3VycmVudEhhc2gpIHtcbiAgICAgICAgICAvLyBpdCBoYXMgaGFzaCBhbmQgaXQgZG9lc24ndCBtYXRjaGVzXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBxdWVyeUxlbiAhPT0gMFxuICAgICAgICAgICYmIGhhc1F1ZXJ5SW5jbHVkZWQocXVlcnksIGN1cnJlbnRRdWVyeSkgPT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIGl0IGhhcyBxdWVyeSBhbmQgaXQgZG9lc24ndCBpbmNsdWRlcyB0aGUgY3VycmVudCBvbmVcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3U2NvcmUgPSB7XG4gICAgICAgICAgbWF0Y2hlZExlbjogbWF0Y2hlZC5sZW5ndGgsXG4gICAgICAgICAgcXVlcnlEaWZmOiBjdXJyZW50UXVlcnlMZW4gLSBxdWVyeUxlbixcbiAgICAgICAgICBocmVmTGVuOiBocmVmLmxlbmd0aCAtIGhhc2gubGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3U2NvcmUubWF0Y2hlZExlbiA+IGJlc3RTY29yZS5tYXRjaGVkTGVuKSB7XG4gICAgICAgICAgLy8gaXQgbWF0Y2hlcyBtb3JlIHJvdXRlcyBzbyBpdCdzIG1vcmUgc3BlY2lmaWMgc28gd2Ugc2V0IGl0IGFzIGN1cnJlbnQgY2hhbXBpb25cbiAgICAgICAgICBuYW1lID0gdGFiLm5hbWUudmFsdWVcbiAgICAgICAgICBiZXN0U2NvcmUgPSBuZXdTY29yZVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3U2NvcmUubWF0Y2hlZExlbiAhPT0gYmVzdFNjb3JlLm1hdGNoZWRMZW4pIHtcbiAgICAgICAgICAvLyBpdCBtYXRjaGVzIGxlc3Mgcm91dGVzIHRoYW4gdGhlIGN1cnJlbnQgY2hhbXBpb24gc28gd2UgZGlzY2FyZCBpdFxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3U2NvcmUucXVlcnlEaWZmIDwgYmVzdFNjb3JlLnF1ZXJ5RGlmZikge1xuICAgICAgICAgIC8vIHF1ZXJ5IGlzIGNsb3NlciB0byB0aGUgY3VycmVudCBvbmUgc28gd2Ugc2V0IGl0IGFzIGN1cnJlbnQgY2hhbXBpb25cbiAgICAgICAgICBuYW1lID0gdGFiLm5hbWUudmFsdWVcbiAgICAgICAgICBiZXN0U2NvcmUgPSBuZXdTY29yZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld1Njb3JlLnF1ZXJ5RGlmZiAhPT0gYmVzdFNjb3JlLnF1ZXJ5RGlmZikge1xuICAgICAgICAgIC8vIGl0IG1hdGNoZXMgbGVzcyByb3V0ZXMgdGhhbiB0aGUgY3VycmVudCBjaGFtcGlvbiBzbyB3ZSBkaXNjYXJkIGl0XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdTY29yZS5ocmVmTGVuID4gYmVzdFNjb3JlLmhyZWZMZW4pIHtcbiAgICAgICAgICAvLyBocmVmIGlzIGxlbmd0aGllciBzbyBpdCdzIG1vcmUgc3BlY2lmaWMgc28gd2Ugc2V0IGl0IGFzIGN1cnJlbnQgY2hhbXBpb25cbiAgICAgICAgICBuYW1lID0gdGFiLm5hbWUudmFsdWVcbiAgICAgICAgICBiZXN0U2NvcmUgPSBuZXdTY29yZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgbmFtZSA9PT0gbnVsbFxuICAgICAgICAmJiB0YWJEYXRhTGlzdC5zb21lKHRhYiA9PiB0YWIucm91dGVEYXRhID09PSB2b2lkIDAgJiYgdGFiLm5hbWUudmFsdWUgPT09IGN1cnJlbnRNb2RlbC52YWx1ZSkgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICAvLyB3ZSBzaG91bGRuJ3QgaW50ZXJmZXJlIGlmIG5vbi1yb3V0ZSB0YWIgaXMgYWN0aXZlXG4gICAgICAgIGhhZEFjdGl2YXRlZCA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB1cGRhdGVNb2RlbCh7IG5hbWUsIHNldEN1cnJlbnQ6IHRydWUgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzaW4gKGUpIHtcbiAgICAgIHJlbW92ZUZvY3VzVGltZW91dCgpXG5cbiAgICAgIGlmIChcbiAgICAgICAgaGFzRm9jdXMudmFsdWUgIT09IHRydWVcbiAgICAgICAgJiYgcm9vdFJlZi52YWx1ZSAhPT0gbnVsbFxuICAgICAgICAmJiBlLnRhcmdldFxuICAgICAgICAmJiB0eXBlb2YgZS50YXJnZXQuY2xvc2VzdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHRhYiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5xLXRhYicpXG5cbiAgICAgICAgLy8gaWYgdGhlIHRhcmdldCBpcyBjb250YWluZWQgYnkgYSBRVGFiL1FSb3V0ZVRhYlxuICAgICAgICAvLyAoaXQgbWlnaHQgYmUgb3RoZXIgZWxlbWVudHMgZm9jdXNlZCwgbGlrZSBhZGRpdGlvbmFsIFFCdG4pXG4gICAgICAgIGlmICh0YWIgJiYgcm9vdFJlZi52YWx1ZS5jb250YWlucyh0YWIpID09PSB0cnVlKSB7XG4gICAgICAgICAgaGFzRm9jdXMudmFsdWUgPSB0cnVlXG4gICAgICAgICAgc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZSAmJiBzY3JvbGxUb1RhYkVsKHRhYilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNvdXQgKCkge1xuICAgICAgcmVnaXN0ZXJGb2N1c1RpbWVvdXQoKCkgPT4geyBoYXNGb2N1cy52YWx1ZSA9IGZhbHNlIH0sIDMwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZlcmlmeVJvdXRlTW9kZWwgKCkge1xuICAgICAgaWYgKCR0YWJzLmF2b2lkUm91dGVXYXRjaGVyID09PSBmYWxzZSkge1xuICAgICAgICByZWdpc3RlclNjcm9sbFRvVGFiVGltZW91dCh1cGRhdGVBY3RpdmVSb3V0ZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVTY3JvbGxUb1RhYlRpbWVvdXQoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhdGNoUm91dGUgKCkge1xuICAgICAgaWYgKHVud2F0Y2hSb3V0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IHVud2F0Y2ggPSB3YXRjaCgoKSA9PiBwcm94eS4kcm91dGUuZnVsbFBhdGgsIHZlcmlmeVJvdXRlTW9kZWwpXG4gICAgICAgIHVud2F0Y2hSb3V0ZSA9ICgpID0+IHtcbiAgICAgICAgICB1bndhdGNoKClcbiAgICAgICAgICB1bndhdGNoUm91dGUgPSB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyVGFiICh0YWJEYXRhKSB7XG4gICAgICB0YWJEYXRhTGlzdC5wdXNoKHRhYkRhdGEpXG4gICAgICB0YWJEYXRhTGlzdExlbi52YWx1ZSsrXG5cbiAgICAgIHJlY2FsY3VsYXRlU2Nyb2xsKClcblxuICAgICAgLy8gaWYgaXQncyBhIFFUYWIgb3Igd2UgZG9uJ3QgaGF2ZSBWdWUgUm91dGVyXG4gICAgICBpZiAodGFiRGF0YS5yb3V0ZURhdGEgPT09IHZvaWQgMCB8fCBwcm94eS4kcm91dGUgPT09IHZvaWQgMCkge1xuICAgICAgICAvLyB3ZSBzaG91bGQgcG9zaXRpb24gdG8gdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiIChpZiBhbnkpXG4gICAgICAgIHJlZ2lzdGVyU2Nyb2xsVG9UYWJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdXJyZW50TW9kZWwudmFsdWVcbiAgICAgICAgICAgIGNvbnN0IG5ld1RhYiA9IHZhbHVlICE9PSB2b2lkIDAgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09ICcnXG4gICAgICAgICAgICAgID8gdGFiRGF0YUxpc3QuZmluZCh0YWIgPT4gdGFiLm5hbWUudmFsdWUgPT09IHZhbHVlKVxuICAgICAgICAgICAgICA6IG51bGxcblxuICAgICAgICAgICAgbmV3VGFiICYmIHNjcm9sbFRvVGFiRWwobmV3VGFiLnJvb3RSZWYudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgLy8gZWxzZSBpZiBpdCdzIGEgUVJvdXRlVGFiIHdpdGggYSB2YWxpZCBsaW5rXG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gc3RhcnQgd2F0Y2hpbmcgcm91dGVcbiAgICAgICAgd2F0Y2hSb3V0ZSgpXG5cbiAgICAgICAgaWYgKHRhYkRhdGEucm91dGVEYXRhLmhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICB2ZXJpZnlSb3V0ZU1vZGVsKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVucmVnaXN0ZXJUYWIgKHRhYkRhdGEpIHtcbiAgICAgIHRhYkRhdGFMaXN0LnNwbGljZSh0YWJEYXRhTGlzdC5pbmRleE9mKHRhYkRhdGEpLCAxKVxuICAgICAgdGFiRGF0YUxpc3RMZW4udmFsdWUtLVxuXG4gICAgICByZWNhbGN1bGF0ZVNjcm9sbCgpXG5cbiAgICAgIGlmICh1bndhdGNoUm91dGUgIT09IHZvaWQgMCAmJiB0YWJEYXRhLnJvdXRlRGF0YSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIC8vIHVud2F0Y2ggcm91dGUgaWYgd2UgZG9uJ3QgaGF2ZSBhbnkgUVJvdXRlVGFicyBsZWZ0XG4gICAgICAgIGlmICh0YWJEYXRhTGlzdC5ldmVyeSh0YWIgPT4gdGFiLnJvdXRlRGF0YSA9PT0gdm9pZCAwKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHVud2F0Y2hSb3V0ZSgpXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGVuIHVwZGF0ZSBtb2RlbFxuICAgICAgICB2ZXJpZnlSb3V0ZU1vZGVsKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCAkdGFicyA9IHtcbiAgICAgIGN1cnJlbnRNb2RlbCxcbiAgICAgIHRhYlByb3BzLFxuICAgICAgaGFzRm9jdXMsXG4gICAgICBoYXNBY3RpdmVUYWIsXG5cbiAgICAgIHJlZ2lzdGVyVGFiLFxuICAgICAgdW5yZWdpc3RlclRhYixcblxuICAgICAgdmVyaWZ5Um91dGVNb2RlbCxcbiAgICAgIHVwZGF0ZU1vZGVsLFxuICAgICAgb25LYmROYXZpZ2F0ZSxcblxuICAgICAgYXZvaWRSb3V0ZVdhdGNoZXI6IGZhbHNlIC8vIGZhbHNlIHwgc3RyaW5nICh1aWQpXG4gICAgfVxuXG4gICAgcHJvdmlkZSh0YWJzS2V5LCAkdGFicylcblxuICAgIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgICAgYW5pbWF0ZVRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZW91dChhbmltYXRlVGltZXIpXG4gICAgICBzdG9wQW5pbVNjcm9sbCgpXG4gICAgICB1bndhdGNoUm91dGU/LigpXG4gICAgfVxuXG4gICAgbGV0IGhhZFJvdXRlV2F0Y2hlciwgaGFkQWN0aXZhdGVkXG5cbiAgICBvbkJlZm9yZVVubW91bnQoY2xlYW51cClcblxuICAgIG9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgaGFkUm91dGVXYXRjaGVyID0gdW53YXRjaFJvdXRlICE9PSB2b2lkIDBcbiAgICAgIGNsZWFudXAoKVxuICAgIH0pXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBpZiAoaGFkUm91dGVXYXRjaGVyID09PSB0cnVlKSB7XG4gICAgICAgIHdhdGNoUm91dGUoKVxuICAgICAgICBoYWRBY3RpdmF0ZWQgPSB0cnVlXG4gICAgICAgIHZlcmlmeVJvdXRlTW9kZWwoKVxuICAgICAgfVxuXG4gICAgICByZWNhbGN1bGF0ZVNjcm9sbCgpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICByZWY6IHJvb3RSZWYsXG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICByb2xlOiAndGFibGlzdCcsXG4gICAgICAgIG9uRm9jdXNpbixcbiAgICAgICAgb25Gb2N1c291dFxuICAgICAgfSwgW1xuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwgeyBvblJlc2l6ZTogdXBkYXRlQ29udGFpbmVyIH0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IGNvbnRlbnRSZWYsXG4gICAgICAgICAgY2xhc3M6IGlubmVyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgb25TY3JvbGw6IHVwZGF0ZUFycm93c1xuICAgICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSksXG5cbiAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiAncS10YWJzX19hcnJvdyBxLXRhYnNfX2Fycm93LS1sZWZ0IGFic29sdXRlIHEtdGFiX19pY29uJ1xuICAgICAgICAgICAgKyAobGVmdEFycm93LnZhbHVlID09PSB0cnVlID8gJycgOiAnIHEtdGFic19fYXJyb3ctLWZhZGVkJyksXG4gICAgICAgICAgbmFtZTogcHJvcHMubGVmdEljb24gfHwgJHEuaWNvblNldC50YWJzWyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd1cCcgOiAnbGVmdCcgXSxcbiAgICAgICAgICBvbk1vdXNlZG93blBhc3NpdmU6IHNjcm9sbFRvU3RhcnQsXG4gICAgICAgICAgb25Ub3VjaHN0YXJ0UGFzc2l2ZTogc2Nyb2xsVG9TdGFydCxcbiAgICAgICAgICBvbk1vdXNldXBQYXNzaXZlOiBzdG9wQW5pbVNjcm9sbCxcbiAgICAgICAgICBvbk1vdXNlbGVhdmVQYXNzaXZlOiBzdG9wQW5pbVNjcm9sbCxcbiAgICAgICAgICBvblRvdWNoZW5kUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGxcbiAgICAgICAgfSksXG5cbiAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiAncS10YWJzX19hcnJvdyBxLXRhYnNfX2Fycm93LS1yaWdodCBhYnNvbHV0ZSBxLXRhYl9faWNvbidcbiAgICAgICAgICAgICsgKHJpZ2h0QXJyb3cudmFsdWUgPT09IHRydWUgPyAnJyA6ICcgcS10YWJzX19hcnJvdy0tZmFkZWQnKSxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5yaWdodEljb24gfHwgJHEuaWNvblNldC50YWJzWyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdkb3duJyA6ICdyaWdodCcgXSxcbiAgICAgICAgICBvbk1vdXNlZG93blBhc3NpdmU6IHNjcm9sbFRvRW5kLFxuICAgICAgICAgIG9uVG91Y2hzdGFydFBhc3NpdmU6IHNjcm9sbFRvRW5kLFxuICAgICAgICAgIG9uTW91c2V1cFBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsLFxuICAgICAgICAgIG9uTW91c2VsZWF2ZVBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsLFxuICAgICAgICAgIG9uVG91Y2hlbmRQYXNzaXZlOiBzdG9wQW5pbVNjcm9sbFxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBpbmplY3QsIG9uQmVmb3JlVW5tb3VudCwgb25Nb3VudGVkLCB3aXRoRGlyZWN0aXZlcywgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IFJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3JpcHBsZS9SaXBwbGUuanMnXG5cbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5pbXBvcnQgeyBpc0tleUNvZGUsIHNob3VsZElnbm9yZUtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUua2V5Ym9hcmQva2V5LWNvbXBvc2l0aW9uLmpzJ1xuaW1wb3J0IHsgdGFic0tleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuc3ltYm9scy9zeW1ib2xzLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB1aWQgZnJvbSAnLi4vLi4vdXRpbHMvdWlkL3VpZC5qcydcbmltcG9ydCB7IGlzRGVlcEVxdWFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMvaXMuanMnXG5cbmxldCBpZCA9IDBcblxuZXhwb3J0IGNvbnN0IHVzZVRhYkVtaXRzID0gWyAnY2xpY2snLCAna2V5ZG93bicgXVxuXG5leHBvcnQgY29uc3QgdXNlVGFiUHJvcHMgPSB7XG4gIGljb246IFN0cmluZyxcbiAgbGFiZWw6IFsgTnVtYmVyLCBTdHJpbmcgXSxcblxuICBhbGVydDogWyBCb29sZWFuLCBTdHJpbmcgXSxcbiAgYWxlcnRJY29uOiBTdHJpbmcsXG5cbiAgbmFtZToge1xuICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiAoKSA9PiBgdF8keyBpZCsrIH1gXG4gIH0sXG5cbiAgbm9DYXBzOiBCb29sZWFuLFxuXG4gIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF0sXG4gIGRpc2FibGU6IEJvb2xlYW4sXG5cbiAgY29udGVudENsYXNzOiBTdHJpbmcsXG5cbiAgcmlwcGxlOiB7XG4gICAgdHlwZTogWyBCb29sZWFuLCBPYmplY3QgXSxcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBzbG90cywgZW1pdCwgcm91dGVEYXRhKSB7XG4gIGNvbnN0ICR0YWJzID0gaW5qZWN0KHRhYnNLZXksIGVtcHR5UmVuZGVyRm4pXG4gIGlmICgkdGFicyA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1FUYWIvUVJvdXRlVGFiIGNvbXBvbmVudCBuZWVkcyB0byBiZSBjaGlsZCBvZiBRVGFicycpXG4gICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgfVxuXG4gIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgY29uc3QgYmx1clRhcmdldFJlZiA9IHJlZihudWxsKVxuICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gIGNvbnN0IHRhYkluZGljYXRvclJlZiA9IHJlZihudWxsKVxuXG4gIGNvbnN0IHJpcHBsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IHByb3BzLnJpcHBsZSA9PT0gZmFsc2VcbiAgICAgID8gZmFsc2VcbiAgICAgIDogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgeyBrZXlDb2RlczogWyAxMywgMzIgXSwgZWFybHk6IHRydWUgfSxcbiAgICAgICAgcHJvcHMucmlwcGxlID09PSB0cnVlID8ge30gOiBwcm9wcy5yaXBwbGVcbiAgICAgIClcbiAgKSlcblxuICBjb25zdCBpc0FjdGl2ZSA9IGNvbXB1dGVkKCgpID0+ICR0YWJzLmN1cnJlbnRNb2RlbC52YWx1ZSA9PT0gcHJvcHMubmFtZSlcblxuICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS10YWIgcmVsYXRpdmUtcG9zaXRpb24gc2VsZi1zdHJldGNoIGZsZXggZmxleC1jZW50ZXIgdGV4dC1jZW50ZXInXG4gICAgKyAoXG4gICAgICBpc0FjdGl2ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IChcbiAgICAgICAgICAgICcgcS10YWItLWFjdGl2ZSdcbiAgICAgICAgICAgICsgKCR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUNsYXNzID8gJyAnICsgJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQ2xhc3MgOiAnJylcbiAgICAgICAgICAgICsgKCR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUNvbG9yID8gYCB0ZXh0LSR7ICR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUNvbG9yIH1gIDogJycpXG4gICAgICAgICAgICArICgkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVCZ0NvbG9yID8gYCBiZy0keyAkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVCZ0NvbG9yIH1gIDogJycpXG4gICAgICAgICAgKVxuICAgICAgICA6ICcgcS10YWItLWluYWN0aXZlJ1xuICAgIClcbiAgICArIChwcm9wcy5pY29uICYmIHByb3BzLmxhYmVsICYmICR0YWJzLnRhYlByb3BzLnZhbHVlLmlubGluZUxhYmVsID09PSBmYWxzZSA/ICcgcS10YWItLWZ1bGwnIDogJycpXG4gICAgKyAocHJvcHMubm9DYXBzID09PSB0cnVlIHx8ICR0YWJzLnRhYlByb3BzLnZhbHVlLm5vQ2FwcyA9PT0gdHJ1ZSA/ICcgcS10YWItLW5vLWNhcHMnIDogJycpXG4gICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJyBxLWZvY3VzYWJsZSBxLWhvdmVyYWJsZSBjdXJzb3ItcG9pbnRlcicpXG4gICAgKyAocm91dGVEYXRhICE9PSB2b2lkIDAgPyByb3V0ZURhdGEubGlua0NsYXNzLnZhbHVlIDogJycpXG4gIClcblxuICBjb25zdCBpbm5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS10YWJfX2NvbnRlbnQgc2VsZi1zdHJldGNoIGZsZXgtY2VudGVyIHJlbGF0aXZlLXBvc2l0aW9uIHEtYW5jaG9yLS1za2lwIG5vbi1zZWxlY3RhYmxlICdcbiAgICArICgkdGFicy50YWJQcm9wcy52YWx1ZS5pbmxpbmVMYWJlbCA9PT0gdHJ1ZSA/ICdyb3cgbm8td3JhcCBxLXRhYl9fY29udGVudC0taW5saW5lJyA6ICdjb2x1bW4nKVxuICAgICsgKHByb3BzLmNvbnRlbnRDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5jb250ZW50Q2xhc3MgfWAgOiAnJylcbiAgKVxuXG4gIGNvbnN0IHRhYkluZGV4ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIChcbiAgICAgIHByb3BzLmRpc2FibGUgPT09IHRydWVcbiAgICAgIHx8ICR0YWJzLmhhc0ZvY3VzLnZhbHVlID09PSB0cnVlXG4gICAgICB8fCAoaXNBY3RpdmUudmFsdWUgPT09IGZhbHNlICYmICR0YWJzLmhhc0FjdGl2ZVRhYi52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG4gICAgICA/IC0xXG4gICAgICA6IHByb3BzLnRhYmluZGV4IHx8IDBcbiAgKSlcblxuICBmdW5jdGlvbiBvbkNsaWNrIChlLCBrZXlib2FyZCkge1xuICAgIGlmIChrZXlib2FyZCAhPT0gdHJ1ZSAmJiBlPy5xQXZvaWRGb2N1cyAhPT0gdHJ1ZSkge1xuICAgICAgYmx1clRhcmdldFJlZi52YWx1ZT8uZm9jdXMoKVxuICAgIH1cblxuICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSB7XG4gICAgICAvLyB3ZSBzaG91bGQgaGluZGVyIG5hdGl2ZSBuYXZpZ2F0aW9uIHRob3VnaFxuICAgICAgaWYgKHJvdXRlRGF0YT8uaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gZG8gd2UgaGF2ZSBhIFFUYWI/XG4gICAgaWYgKHJvdXRlRGF0YSA9PT0gdm9pZCAwKSB7XG4gICAgICAkdGFicy51cGRhdGVNb2RlbCh7IG5hbWU6IHByb3BzLm5hbWUgfSlcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZURhdGEuaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZ28gPSAob3B0cyA9IHt9KSA9PiB7XG4gICAgICAgIC8vIGlmIHJlcXVpcmluZyB0byBnbyB0byBhbm90aGVyIHJvdXRlLCB0aGVuIHdlXG4gICAgICAgIC8vIGxldCB0aGUgUVRhYnMgcm91dGUgd2F0Y2hlciBkbyBpdHMgam9iLFxuICAgICAgICAvLyBvdGhlcndpc2UgZGlyZWN0bHkgc2VsZWN0IHRoaXNcbiAgICAgICAgbGV0IGhhcmRFcnJvclxuICAgICAgICBjb25zdCByZXFJZCA9IG9wdHMudG8gPT09IHZvaWQgMCB8fCBpc0RlZXBFcXVhbChvcHRzLnRvLCBwcm9wcy50bykgPT09IHRydWVcbiAgICAgICAgICA/ICgkdGFicy5hdm9pZFJvdXRlV2F0Y2hlciA9IHVpZCgpKVxuICAgICAgICAgIDogbnVsbFxuXG4gICAgICAgIHJldHVybiByb3V0ZURhdGEubmF2aWdhdGVUb1JvdXRlckxpbmsoZSwgeyAuLi5vcHRzLCByZXR1cm5Sb3V0ZXJFcnJvcjogdHJ1ZSB9KVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4geyBoYXJkRXJyb3IgPSBlcnIgfSlcbiAgICAgICAgICAudGhlbihzb2Z0RXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcUlkID09PSAkdGFicy5hdm9pZFJvdXRlV2F0Y2hlcikge1xuICAgICAgICAgICAgICAkdGFicy5hdm9pZFJvdXRlV2F0Y2hlciA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgLy8gaWYgd2UgZG9uJ3QgaGF2ZSBhbnkgaGFyZCBlcnJvcnMgb3IgYW55IHNvZnQgZXJyb3JzLCBleGNlcHQgZm9yXG4gICAgICAgICAgICAgIC8vIHdoZW4gbmF2aWdhdGluZyB0byB0aGUgc2FtZSByb3V0ZSAob24gYWxsIG90aGVyIHNvZnQgZXJyb3JzLFxuICAgICAgICAgICAgICAvLyBsaWtlIHdoZW4gbmF2aWdhdGlvbiB3YXMgYWJvcnRlZCBpbiBhIG5hdiBndWFyZCwgd2UgZG9uJ3QgYWN0aXZhdGUgdGhpcyB0YWIpXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBoYXJkRXJyb3IgPT09IHZvaWQgMCAmJiAoXG4gICAgICAgICAgICAgICAgICBzb2Z0RXJyb3IgPT09IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgfHwgKHNvZnRFcnJvci5tZXNzYWdlPy5zdGFydHNXaXRoKCdBdm9pZGVkIHJlZHVuZGFudCBuYXZpZ2F0aW9uJykgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkdGFicy51cGRhdGVNb2RlbCh7IG5hbWU6IHByb3BzLm5hbWUgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0cy5yZXR1cm5Sb3V0ZXJFcnJvciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gaGFyZEVycm9yICE9PSB2b2lkIDAgPyBQcm9taXNlLnJlamVjdChoYXJkRXJyb3IpIDogc29mdEVycm9yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZW1pdCgnY2xpY2snLCBlLCBnbylcbiAgICAgIGUuZGVmYXVsdFByZXZlbnRlZCAhPT0gdHJ1ZSAmJiBnbygpXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5ZG93biAoZSkge1xuICAgIGlmIChpc0tleUNvZGUoZSwgWyAxMywgMzIgXSkpIHtcbiAgICAgIG9uQ2xpY2soZSwgdHJ1ZSlcbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICBzaG91bGRJZ25vcmVLZXkoZSkgIT09IHRydWVcbiAgICAgICYmIGUua2V5Q29kZSA+PSAzNVxuICAgICAgJiYgZS5rZXlDb2RlIDw9IDQwXG4gICAgICAmJiBlLmFsdEtleSAhPT0gdHJ1ZVxuICAgICAgJiYgZS5tZXRhS2V5ICE9PSB0cnVlXG4gICAgKSB7XG4gICAgICAkdGFicy5vbktiZE5hdmlnYXRlKGUua2V5Q29kZSwgcHJveHkuJGVsKSA9PT0gdHJ1ZSAmJiBzdG9wQW5kUHJldmVudChlKVxuICAgIH1cblxuICAgIGVtaXQoJ2tleWRvd24nLCBlKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgY29uc3RcbiAgICAgIG5hcnJvdyA9ICR0YWJzLnRhYlByb3BzLnZhbHVlLm5hcnJvd0luZGljYXRvcixcbiAgICAgIGNvbnRlbnQgPSBbXSxcbiAgICAgIGluZGljYXRvciA9IGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiB0YWJJbmRpY2F0b3JSZWYsXG4gICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgJ3EtdGFiX19pbmRpY2F0b3InLFxuICAgICAgICAgICR0YWJzLnRhYlByb3BzLnZhbHVlLmluZGljYXRvckNsYXNzXG4gICAgICAgIF1cbiAgICAgIH0pXG5cbiAgICBwcm9wcy5pY29uICE9PSB2b2lkIDAgJiYgY29udGVudC5wdXNoKFxuICAgICAgaChRSWNvbiwge1xuICAgICAgICBjbGFzczogJ3EtdGFiX19pY29uJyxcbiAgICAgICAgbmFtZTogcHJvcHMuaWNvblxuICAgICAgfSlcbiAgICApXG5cbiAgICBwcm9wcy5sYWJlbCAhPT0gdm9pZCAwICYmIGNvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYl9fbGFiZWwnIH0sIHByb3BzLmxhYmVsKVxuICAgIClcblxuICAgIHByb3BzLmFsZXJ0ICE9PSBmYWxzZSAmJiBjb250ZW50LnB1c2goXG4gICAgICBwcm9wcy5hbGVydEljb24gIT09IHZvaWQgMFxuICAgICAgICA/IGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFiX19hbGVydC1pY29uJyxcbiAgICAgICAgICBjb2xvcjogcHJvcHMuYWxlcnQgIT09IHRydWVcbiAgICAgICAgICAgID8gcHJvcHMuYWxlcnRcbiAgICAgICAgICAgIDogdm9pZCAwLFxuICAgICAgICAgIG5hbWU6IHByb3BzLmFsZXJ0SWNvblxuICAgICAgICB9KVxuICAgICAgICA6IGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFiX19hbGVydCdcbiAgICAgICAgICAgICsgKHByb3BzLmFsZXJ0ICE9PSB0cnVlID8gYCB0ZXh0LSR7IHByb3BzLmFsZXJ0IH1gIDogJycpXG4gICAgICAgIH0pXG4gICAgKVxuXG4gICAgbmFycm93ID09PSB0cnVlICYmIGNvbnRlbnQucHVzaChpbmRpY2F0b3IpXG5cbiAgICBjb25zdCBub2RlID0gW1xuICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtZm9jdXMtaGVscGVyJywgdGFiaW5kZXg6IC0xLCByZWY6IGJsdXJUYXJnZXRSZWYgfSksXG4gICAgICBoKCdkaXYnLCB7IGNsYXNzOiBpbm5lckNsYXNzLnZhbHVlIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgY29udGVudCkpXG4gICAgXVxuXG4gICAgbmFycm93ID09PSBmYWxzZSAmJiBub2RlLnB1c2goaW5kaWNhdG9yKVxuXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGNvbnN0IHRhYkRhdGEgPSB7XG4gICAgbmFtZTogY29tcHV0ZWQoKCkgPT4gcHJvcHMubmFtZSksXG4gICAgcm9vdFJlZixcbiAgICB0YWJJbmRpY2F0b3JSZWYsXG4gICAgcm91dGVEYXRhXG4gIH1cblxuICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICR0YWJzLnVucmVnaXN0ZXJUYWIodGFiRGF0YSlcbiAgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICR0YWJzLnJlZ2lzdGVyVGFiKHRhYkRhdGEpXG4gIH0pXG5cbiAgZnVuY3Rpb24gcmVuZGVyVGFiICh0YWcsIGN1c3RvbURhdGEpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcmVmOiByb290UmVmLFxuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICB0YWJpbmRleDogdGFiSW5kZXgudmFsdWUsXG4gICAgICByb2xlOiAndGFiJyxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogaXNBY3RpdmUudmFsdWUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJ3RydWUnIDogdm9pZCAwLFxuICAgICAgb25DbGljayxcbiAgICAgIG9uS2V5ZG93bixcbiAgICAgIC4uLmN1c3RvbURhdGFcbiAgICB9XG5cbiAgICByZXR1cm4gd2l0aERpcmVjdGl2ZXMoXG4gICAgICBoKHRhZywgZGF0YSwgZ2V0Q29udGVudCgpKSxcbiAgICAgIFsgWyBSaXBwbGUsIHJpcHBsZS52YWx1ZSBdIF1cbiAgICApXG4gIH1cblxuICByZXR1cm4geyByZW5kZXJUYWIsICR0YWJzIH1cbn1cbiIsImltcG9ydCB1c2VUYWIsIHsgdXNlVGFiUHJvcHMsIHVzZVRhYkVtaXRzIH0gZnJvbSAnLi91c2UtdGFiLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGFiJyxcblxuICBwcm9wczogdXNlVGFiUHJvcHMsXG5cbiAgZW1pdHM6IHVzZVRhYkVtaXRzLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyByZW5kZXJUYWIgfSA9IHVzZVRhYihwcm9wcywgc2xvdHMsIGVtaXQpXG4gICAgcmV0dXJuICgpID0+IHJlbmRlclRhYignZGl2JylcbiAgfVxufSlcbiIsImltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uLy4uL3BsdWdpbnMvcGxhdGZvcm0vUGxhdGZvcm0uanMnXG5cbmltcG9ydCB7IGNyZWF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldE1vZGlmaWVyRGlyZWN0aW9ucywgc2hvdWxkU3RhcnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnRvdWNoL3RvdWNoLmpzJ1xuaW1wb3J0IHsgYWRkRXZ0LCBjbGVhbkV2dCwgcG9zaXRpb24sIGxlZnRDbGljaywgc3RvcEFuZFByZXZlbnQsIHByZXZlbnREcmFnZ2FibGUsIG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IGNsZWFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zZWxlY3Rpb24vc2VsZWN0aW9uLmpzJ1xuaW1wb3J0IGdldFNTUlByb3BzIGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUubm9vcC1zc3ItZGlyZWN0aXZlLXRyYW5zZm9ybS9ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtLmpzJ1xuXG5mdW5jdGlvbiBwYXJzZUFyZyAoYXJnKSB7XG4gIC8vIGRlbHRhIChtaW4gdmVsb2NpdHkgLS0gZGlzdCAvIHRpbWUpXG4gIC8vIG1vYmlsZSBtaW4gZGlzdGFuY2Ugb24gZmlyc3QgbW92ZVxuICAvLyBkZXNrdG9wIG1pbiBkaXN0YW5jZSB1bnRpbCBkZWNpZGluZyBpZiBpdCdzIGEgc3dpcGUgb3Igbm90XG4gIGNvbnN0IGRhdGEgPSBbIDAuMDYsIDYsIDUwIF1cblxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgJiYgYXJnLmxlbmd0aCkge1xuICAgIGFyZy5zcGxpdCgnOicpLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHYgPSBwYXJzZUZsb2F0KHZhbClcbiAgICAgIHYgJiYgKGRhdGFbIGluZGV4IF0gPSB2KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXJlY3RpdmUoX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gID8geyBuYW1lOiAndG91Y2gtc3dpcGUnLCBnZXRTU1JQcm9wcyB9XG4gIDoge1xuICAgICAgbmFtZTogJ3RvdWNoLXN3aXBlJyxcblxuICAgICAgYmVmb3JlTW91bnQgKGVsLCB7IHZhbHVlLCBhcmcsIG1vZGlmaWVycyB9KSB7XG4gICAgICAgIC8vIGVhcmx5IHJldHVybiwgd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kaWZpZXJzLm1vdXNlICE9PSB0cnVlXG4gICAgICAgICAgJiYgY2xpZW50Lmhhcy50b3VjaCAhPT0gdHJ1ZVxuICAgICAgICApIHJldHVyblxuXG4gICAgICAgIGNvbnN0IG1vdXNlQ2FwdHVyZSA9IG1vZGlmaWVycy5tb3VzZUNhcHR1cmUgPT09IHRydWUgPyAnQ2FwdHVyZScgOiAnJ1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICBoYW5kbGVyOiB2YWx1ZSxcbiAgICAgICAgICBzZW5zaXRpdml0eTogcGFyc2VBcmcoYXJnKSxcbiAgICAgICAgICBkaXJlY3Rpb246IGdldE1vZGlmaWVyRGlyZWN0aW9ucyhtb2RpZmllcnMpLFxuXG4gICAgICAgICAgbm9vcCxcblxuICAgICAgICAgIG1vdXNlU3RhcnQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0KGV2dCwgY3R4KSAmJiBsZWZ0Q2xpY2soZXZ0KSkge1xuICAgICAgICAgICAgICBhZGRFdnQoY3R4LCAndGVtcCcsIFtcbiAgICAgICAgICAgICAgICBbIGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgJ21vdmUnLCBgbm90UGFzc2l2ZSR7IG1vdXNlQ2FwdHVyZSB9YCBdLFxuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdtb3VzZXVwJywgJ2VuZCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBjdHguc3RhcnQoZXZ0LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICB0b3VjaFN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRTdGFydChldnQsIGN0eCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZ0LnRhcmdldFxuICAgICAgICAgICAgICBhZGRFdnQoY3R4LCAndGVtcCcsIFtcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNobW92ZScsICdtb3ZlJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2hjYW5jZWwnLCAnZW5kJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2hlbmQnLCAnZW5kJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIGN0eC5zdGFydChldnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHN0YXJ0IChldnQsIG1vdXNlRXZlbnQpIHtcbiAgICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIHRydWUpXG5cbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKGV2dClcblxuICAgICAgICAgICAgY3R4LmV2ZW50ID0ge1xuICAgICAgICAgICAgICB4OiBwb3MubGVmdCxcbiAgICAgICAgICAgICAgeTogcG9zLnRvcCxcbiAgICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgbW91c2U6IG1vdXNlRXZlbnQgPT09IHRydWUsXG4gICAgICAgICAgICAgIGRpcjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgbW92ZSAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50ID09PSB2b2lkIDApIHJldHVyblxuXG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50LmRpciAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGltZSA9IERhdGUubm93KCkgLSBjdHguZXZlbnQudGltZVxuXG4gICAgICAgICAgICBpZiAodGltZSA9PT0gMCkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgIHBvcyA9IHBvc2l0aW9uKGV2dCksXG4gICAgICAgICAgICAgIGRpc3RYID0gcG9zLmxlZnQgLSBjdHguZXZlbnQueCxcbiAgICAgICAgICAgICAgYWJzWCA9IE1hdGguYWJzKGRpc3RYKSxcbiAgICAgICAgICAgICAgZGlzdFkgPSBwb3MudG9wIC0gY3R4LmV2ZW50LnksXG4gICAgICAgICAgICAgIGFic1kgPSBNYXRoLmFicyhkaXN0WSlcblxuICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5tb3VzZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBpZiAoYWJzWCA8IGN0eC5zZW5zaXRpdml0eVsgMSBdICYmIGFic1kgPCBjdHguc2Vuc2l0aXZpdHlbIDEgXSkge1xuICAgICAgICAgICAgICAgIGN0eC5lbmQoZXZ0KVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpcyB1c2VyIHRyeWluZyB0byBzZWxlY3QgdGV4dD9cbiAgICAgICAgICAgIC8vIGlmIHNvLCB0aGVuIHNvbWV0aGluZyBzaG91bGQgYmUgcmVwb3J0ZWQgaGVyZVxuICAgICAgICAgICAgLy8gKHByZXZpb3VzIHNlbGVjdGlvbiwgaWYgYW55LCB3YXMgZGlzY2FyZGVkIHdoZW4gc3dpcGUgc3RhcnRlZClcbiAgICAgICAgICAgIGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpICE9PSAnJykge1xuICAgICAgICAgICAgICBjdHguZW5kKGV2dClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhYnNYIDwgY3R4LnNlbnNpdGl2aXR5WyAyIF0gJiYgYWJzWSA8IGN0eC5zZW5zaXRpdml0eVsgMiBdKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICB2ZWxYID0gYWJzWCAvIHRpbWUsXG4gICAgICAgICAgICAgIHZlbFkgPSBhYnNZIC8gdGltZVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24udmVydGljYWwgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IGFic1lcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxZID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gZGlzdFkgPCAwID8gJ3VwJyA6ICdkb3duJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24uaG9yaXpvbnRhbCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYID4gYWJzWVxuICAgICAgICAgICAgICAmJiBhYnNZIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFggPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSBkaXN0WCA8IDAgPyAnbGVmdCcgOiAncmlnaHQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi51cCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYIDwgYWJzWVxuICAgICAgICAgICAgICAmJiBkaXN0WSA8IDBcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxZID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gJ3VwJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24uZG93biA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYIDwgYWJzWVxuICAgICAgICAgICAgICAmJiBkaXN0WSA+IDBcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxZID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gJ2Rvd24nXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGFic1ggPiBhYnNZXG4gICAgICAgICAgICAgICYmIGRpc3RYIDwgMFxuICAgICAgICAgICAgICAmJiBhYnNZIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFggPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSAnbGVmdCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGFic1ggPiBhYnNZXG4gICAgICAgICAgICAgICYmIGRpc3RYID4gMFxuICAgICAgICAgICAgICAmJiBhYnNZIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFggPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSAncmlnaHQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQuZGlyICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5tb3VzZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tcG9pbnRlci1ldmVudHMtLWNoaWxkcmVuJylcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vbi1zZWxlY3RhYmxlJylcbiAgICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG5cbiAgICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwID0gd2l0aERlbGF5ID0+IHtcbiAgICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB2b2lkIDBcblxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub24tc2VsZWN0YWJsZScpXG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1wb2ludGVyLWV2ZW50cy0tY2hpbGRyZW4nKVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAod2l0aERlbGF5ID09PSB0cnVlKSB7IHNldFRpbWVvdXQocmVtb3ZlLCA1MCkgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7IHJlbW92ZSgpIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjdHguaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgZXZ0LFxuICAgICAgICAgICAgICAgIHRvdWNoOiBjdHguZXZlbnQubW91c2UgIT09IHRydWUsXG4gICAgICAgICAgICAgICAgbW91c2U6IGN0eC5ldmVudC5tb3VzZSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGN0eC5ldmVudC5kaXIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRpbWUsXG4gICAgICAgICAgICAgICAgZGlzdGFuY2U6IHtcbiAgICAgICAgICAgICAgICAgIHg6IGFic1gsXG4gICAgICAgICAgICAgICAgICB5OiBhYnNZXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGN0eC5lbmQoZXZ0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBlbmQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKGN0eC5ldmVudCA9PT0gdm9pZCAwKSByZXR1cm5cblxuICAgICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG4gICAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCBmYWxzZSlcbiAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXA/Lih0cnVlKVxuICAgICAgICAgICAgaWYgKChldnQgIT09IHZvaWQgMCkgJiYgKGN0eC5ldmVudC5kaXIgIT09IGZhbHNlKSkgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICAgICAgICBjdHguZXZlbnQgPSB2b2lkIDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbC5fX3F0b3VjaHN3aXBlID0gY3R4XG5cbiAgICAgICAgaWYgKG1vZGlmaWVycy5tb3VzZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIGFjY291bnQgZm9yIFVNRCB0b28gd2hlcmUgbW9kaWZpZXJzIHdpbGwgYmUgbG93ZXJjYXNlZCB0byB3b3JrXG4gICAgICAgICAgY29uc3QgY2FwdHVyZSA9IG1vZGlmaWVycy5tb3VzZUNhcHR1cmUgPT09IHRydWUgfHwgbW9kaWZpZXJzLm1vdXNlY2FwdHVyZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyAnQ2FwdHVyZSdcbiAgICAgICAgICAgIDogJydcblxuICAgICAgICAgIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgICAgWyBlbCwgJ21vdXNlZG93bicsICdtb3VzZVN0YXJ0JywgYHBhc3NpdmUkeyBjYXB0dXJlIH1gIF1cbiAgICAgICAgICBdKVxuICAgICAgICB9XG5cbiAgICAgICAgY2xpZW50Lmhhcy50b3VjaCA9PT0gdHJ1ZSAmJiBhZGRFdnQoY3R4LCAnbWFpbicsIFtcbiAgICAgICAgICBbIGVsLCAndG91Y2hzdGFydCcsICd0b3VjaFN0YXJ0JywgYHBhc3NpdmUkeyBtb2RpZmllcnMuY2FwdHVyZSA9PT0gdHJ1ZSA/ICdDYXB0dXJlJyA6ICcnIH1gIF0sXG4gICAgICAgICAgWyBlbCwgJ3RvdWNobW92ZScsICdub29wJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdIC8vIGNhbm5vdCBiZSBwYXNzaXZlIChleDogaU9TIHNjcm9sbClcbiAgICAgICAgXSlcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZWQgKGVsLCBiaW5kaW5ncykge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3F0b3VjaHN3aXBlXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgaWYgKGJpbmRpbmdzLm9sZFZhbHVlICE9PSBiaW5kaW5ncy52YWx1ZSkge1xuICAgICAgICAgICAgdHlwZW9mIGJpbmRpbmdzLnZhbHVlICE9PSAnZnVuY3Rpb24nICYmIGN0eC5lbmQoKVxuICAgICAgICAgICAgY3R4LmhhbmRsZXIgPSBiaW5kaW5ncy52YWx1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGN0eC5kaXJlY3Rpb24gPSBnZXRNb2RpZmllckRpcmVjdGlvbnMoYmluZGluZ3MubW9kaWZpZXJzKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBiZWZvcmVVbm1vdW50IChlbCkge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3F0b3VjaHN3aXBlXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAnbWFpbicpXG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG5cbiAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCBmYWxzZSlcbiAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwPy4oKVxuXG4gICAgICAgICAgZGVsZXRlIGVsLl9fcXRvdWNoc3dpcGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbilcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgZ2V0Q2FjaGU6IF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICAgICAgPyAoXywgZGVmYXVsdFZhbHVlKSA9PiAoXG4gICAgICAgICAgdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBkZWZhdWx0VmFsdWUoKVxuICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWVcbiAgICAgICAgKVxuICAgICAgOiAoa2V5LCBkZWZhdWx0VmFsdWUpID0+IChcbiAgICAgICAgICBjYWNoZVsga2V5IF0gPT09IHZvaWQgMFxuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgY2FjaGVbIGtleSBdID0gKFxuICAgICAgICAgICAgICAgICAgdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZSgpXG4gICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IGNhY2hlWyBrZXkgXVxuICAgICAgICApLFxuXG4gICAgc2V0Q2FjaGUgKGtleSwgb2JqKSB7XG4gICAgICBjYWNoZVsga2V5IF0gPSBvYmpcbiAgICB9LFxuXG4gICAgaGFzQ2FjaGUgKGtleSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNhY2hlLCBrZXkpXG4gICAgfSxcblxuICAgIGNsZWFyQ2FjaGUgKGtleSkge1xuICAgICAgaWYgKGtleSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRlbGV0ZSBjYWNoZVsga2V5IF1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UsIFRyYW5zaXRpb24sIEtlZXBBbGl2ZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFRvdWNoU3dpcGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b3VjaC1zd2lwZS9Ub3VjaFN3aXBlLmpzJ1xuXG5pbXBvcnQgdXNlUmVuZGVyQ2FjaGUgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLXJlbmRlci1jYWNoZS91c2UtcmVuZGVyLWNhY2hlLmpzJ1xuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLXRpbWVvdXQvdXNlLXRpbWVvdXQuanMnXG5cbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgZ2V0Tm9ybWFsaXplZFZOb2RlcyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUudm0vdm0uanMnXG5cbmV4cG9ydCBjb25zdCB1c2VQYW5lbENoaWxkUHJvcHMgPSB7XG4gIG5hbWU6IHsgcmVxdWlyZWQ6IHRydWUgfSxcbiAgZGlzYWJsZTogQm9vbGVhblxufVxuXG5jb25zdCBQYW5lbFdyYXBwZXIgPSB7XG4gIHNldHVwIChfLCB7IHNsb3RzIH0pIHtcbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6ICdxLXBhbmVsIHNjcm9sbCcsXG4gICAgICByb2xlOiAndGFicGFuZWwnXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVBhbmVsUHJvcHMgPSB7XG4gIG1vZGVsVmFsdWU6IHtcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuXG4gIGFuaW1hdGVkOiBCb29sZWFuLFxuICBpbmZpbml0ZTogQm9vbGVhbixcbiAgc3dpcGVhYmxlOiBCb29sZWFuLFxuICB2ZXJ0aWNhbDogQm9vbGVhbixcblxuICB0cmFuc2l0aW9uUHJldjogU3RyaW5nLFxuICB0cmFuc2l0aW9uTmV4dDogU3RyaW5nLFxuICB0cmFuc2l0aW9uRHVyYXRpb246IHtcbiAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgZGVmYXVsdDogMzAwXG4gIH0sXG5cbiAga2VlcEFsaXZlOiBCb29sZWFuLFxuICBrZWVwQWxpdmVJbmNsdWRlOiBbIFN0cmluZywgQXJyYXksIFJlZ0V4cCBdLFxuICBrZWVwQWxpdmVFeGNsdWRlOiBbIFN0cmluZywgQXJyYXksIFJlZ0V4cCBdLFxuICBrZWVwQWxpdmVNYXg6IE51bWJlclxufVxuXG5leHBvcnQgY29uc3QgdXNlUGFuZWxFbWl0cyA9IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ2JlZm9yZVRyYW5zaXRpb24nLCAndHJhbnNpdGlvbicgXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQsIHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IGdldENhY2hlIH0gPSB1c2VSZW5kZXJDYWNoZSgpXG4gIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0IH0gPSB1c2VUaW1lb3V0KClcblxuICBsZXQgcGFuZWxzLCBmb3JjZWRQYW5lbFRyYW5zaXRpb25cblxuICBjb25zdCBwYW5lbFRyYW5zaXRpb24gPSByZWYobnVsbClcblxuICAvKlxuICAgKiBTaG91bGQgbm90IGJlIHJlYWN0aXZlIGJlY2F1c2UgaXQncyBhc3NpZ25lZCBvbiByZW5kZXJcbiAgICogYW5kIGl0IHdpbGwgdHJpZ2dlciBhIHN1YnNlcXVlbnQgdXNlbGVzcyByZW5kZXIuXG4gICAqXG4gICAqIFNob3VsZCBiZSBhbiBvYmplY3QgdGhvdWdoLCBiZWNhdXNlIGl0IGlzIGJlaW5nIGV4cG9ydGVkLlxuICAgKiBPdGhlcndpc2UsIHRoZSBjdXJyZW50IHZhbHVlIHdvdWxkIGJlIGV4cG9ydGVkIGFuZCBubyBzdWJzZXF1ZW50XG4gICAqIHVwZGF0ZXMgd2lsbCBiZSByZWZsZWN0ZWQgaW4gdGhlIGV4cG9ydGVkIHZhbHVlLlxuICAgKi9cbiAgY29uc3QgcGFuZWxJbmRleCA9IHsgdmFsdWU6IG51bGwgfVxuXG4gIGZ1bmN0aW9uIG9uU3dpcGUgKGV2dCkge1xuICAgIGNvbnN0IGRpciA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3VwJyA6ICdsZWZ0J1xuICAgIGdvVG9QYW5lbEJ5T2Zmc2V0KChwcm94eS4kcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IC0xIDogMSkgKiAoZXZ0LmRpcmVjdGlvbiA9PT0gZGlyID8gMSA6IC0xKSlcbiAgfVxuXG4gIGNvbnN0IHBhbmVsRGlyZWN0aXZlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAvLyBpZiBwcm9wcy5zd2lwZWFibGVcbiAgICByZXR1cm4gWyBbXG4gICAgICBUb3VjaFN3aXBlLFxuICAgICAgb25Td2lwZSxcbiAgICAgIHZvaWQgMCxcbiAgICAgIHtcbiAgICAgICAgaG9yaXpvbnRhbDogcHJvcHMudmVydGljYWwgIT09IHRydWUsXG4gICAgICAgIHZlcnRpY2FsOiBwcm9wcy52ZXJ0aWNhbCxcbiAgICAgICAgbW91c2U6IHRydWVcbiAgICAgIH1cbiAgICBdIF1cbiAgfSlcblxuICBjb25zdCB0cmFuc2l0aW9uUHJldiA9IGNvbXB1dGVkKCgpID0+XG4gICAgcHJvcHMudHJhbnNpdGlvblByZXYgfHwgYHNsaWRlLSR7IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2Rvd24nIDogJ3JpZ2h0JyB9YFxuICApXG5cbiAgY29uc3QgdHJhbnNpdGlvbk5leHQgPSBjb21wdXRlZCgoKSA9PlxuICAgIHByb3BzLnRyYW5zaXRpb25OZXh0IHx8IGBzbGlkZS0keyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd1cCcgOiAnbGVmdCcgfWBcbiAgKVxuXG4gIGNvbnN0IHRyYW5zaXRpb25TdHlsZSA9IGNvbXB1dGVkKFxuICAgICgpID0+IGAtLXEtdHJhbnNpdGlvbi1kdXJhdGlvbjogJHsgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uIH1tc2BcbiAgKVxuXG4gIGNvbnN0IGNvbnRlbnRLZXkgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgdHlwZW9mIHByb3BzLm1vZGVsVmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBwcm9wcy5tb2RlbFZhbHVlID09PSAnbnVtYmVyJ1xuICAgICAgPyBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICA6IFN0cmluZyhwcm9wcy5tb2RlbFZhbHVlKVxuICApKVxuXG4gIGNvbnN0IGtlZXBBbGl2ZVByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICBpbmNsdWRlOiBwcm9wcy5rZWVwQWxpdmVJbmNsdWRlLFxuICAgIGV4Y2x1ZGU6IHByb3BzLmtlZXBBbGl2ZUV4Y2x1ZGUsXG4gICAgbWF4OiBwcm9wcy5rZWVwQWxpdmVNYXhcbiAgfSkpXG5cbiAgY29uc3QgbmVlZHNVbmlxdWVLZWVwQWxpdmVXcmFwcGVyID0gY29tcHV0ZWQoKCkgPT5cbiAgICBwcm9wcy5rZWVwQWxpdmVJbmNsdWRlICE9PSB2b2lkIDBcbiAgICB8fCBwcm9wcy5rZWVwQWxpdmVFeGNsdWRlICE9PSB2b2lkIDBcbiAgKVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIChuZXdWYWwsIG9sZFZhbCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gaXNWYWxpZFBhbmVsTmFtZShuZXdWYWwpID09PSB0cnVlXG4gICAgICA/IGdldFBhbmVsSW5kZXgobmV3VmFsKVxuICAgICAgOiAtMVxuXG4gICAgaWYgKGZvcmNlZFBhbmVsVHJhbnNpdGlvbiAhPT0gdHJ1ZSkge1xuICAgICAgdXBkYXRlUGFuZWxUcmFuc2l0aW9uKFxuICAgICAgICBpbmRleCA9PT0gLTEgPyAwIDogKGluZGV4IDwgZ2V0UGFuZWxJbmRleChvbGRWYWwpID8gLTEgOiAxKVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChwYW5lbEluZGV4LnZhbHVlICE9PSBpbmRleCkge1xuICAgICAgcGFuZWxJbmRleC52YWx1ZSA9IGluZGV4XG4gICAgICBlbWl0KCdiZWZvcmVUcmFuc2l0aW9uJywgbmV3VmFsLCBvbGRWYWwpXG4gICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbWl0KCd0cmFuc2l0aW9uJywgbmV3VmFsLCBvbGRWYWwpXG4gICAgICB9LCBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIG5leHRQYW5lbCAoKSB7IGdvVG9QYW5lbEJ5T2Zmc2V0KDEpIH1cbiAgZnVuY3Rpb24gcHJldmlvdXNQYW5lbCAoKSB7IGdvVG9QYW5lbEJ5T2Zmc2V0KC0xKSB9XG5cbiAgZnVuY3Rpb24gZ29Ub1BhbmVsIChuYW1lKSB7XG4gICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBuYW1lKVxuICB9XG5cbiAgZnVuY3Rpb24gaXNWYWxpZFBhbmVsTmFtZSAobmFtZSkge1xuICAgIHJldHVybiBuYW1lICE9PSB2b2lkIDAgJiYgbmFtZSAhPT0gbnVsbCAmJiBuYW1lICE9PSAnJ1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFuZWxJbmRleCAobmFtZSkge1xuICAgIHJldHVybiBwYW5lbHMuZmluZEluZGV4KHBhbmVsID0+IHtcbiAgICAgIHJldHVybiBwYW5lbC5wcm9wcy5uYW1lID09PSBuYW1lXG4gICAgICAgICYmIHBhbmVsLnByb3BzLmRpc2FibGUgIT09ICcnXG4gICAgICAgICYmIHBhbmVsLnByb3BzLmRpc2FibGUgIT09IHRydWVcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RW5hYmxlZFBhbmVscyAoKSB7XG4gICAgcmV0dXJuIHBhbmVscy5maWx0ZXIocGFuZWwgPT4ge1xuICAgICAgcmV0dXJuIHBhbmVsLnByb3BzLmRpc2FibGUgIT09ICcnXG4gICAgICAgICYmIHBhbmVsLnByb3BzLmRpc2FibGUgIT09IHRydWVcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlUGFuZWxUcmFuc2l0aW9uIChkaXJlY3Rpb24pIHtcbiAgICBjb25zdCB2YWwgPSBkaXJlY3Rpb24gIT09IDAgJiYgcHJvcHMuYW5pbWF0ZWQgPT09IHRydWUgJiYgcGFuZWxJbmRleC52YWx1ZSAhPT0gLTFcbiAgICAgID8gJ3EtdHJhbnNpdGlvbi0tJyArIChkaXJlY3Rpb24gPT09IC0xID8gdHJhbnNpdGlvblByZXYudmFsdWUgOiB0cmFuc2l0aW9uTmV4dC52YWx1ZSlcbiAgICAgIDogbnVsbFxuXG4gICAgaWYgKHBhbmVsVHJhbnNpdGlvbi52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICBwYW5lbFRyYW5zaXRpb24udmFsdWUgPSB2YWxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnb1RvUGFuZWxCeU9mZnNldCAoZGlyZWN0aW9uLCBzdGFydEluZGV4ID0gcGFuZWxJbmRleC52YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IHN0YXJ0SW5kZXggKyBkaXJlY3Rpb25cblxuICAgIHdoaWxlIChpbmRleCAhPT0gLTEgJiYgaW5kZXggPCBwYW5lbHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBvcHQgPSBwYW5lbHNbIGluZGV4IF1cblxuICAgICAgaWYgKFxuICAgICAgICBvcHQgIT09IHZvaWQgMFxuICAgICAgICAmJiBvcHQucHJvcHMuZGlzYWJsZSAhPT0gJydcbiAgICAgICAgJiYgb3B0LnByb3BzLmRpc2FibGUgIT09IHRydWVcbiAgICAgICkge1xuICAgICAgICB1cGRhdGVQYW5lbFRyYW5zaXRpb24oZGlyZWN0aW9uKVxuICAgICAgICBmb3JjZWRQYW5lbFRyYW5zaXRpb24gPSB0cnVlXG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgb3B0LnByb3BzLm5hbWUpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGZvcmNlZFBhbmVsVHJhbnNpdGlvbiA9IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGluZGV4ICs9IGRpcmVjdGlvblxuICAgIH1cblxuICAgIGlmIChwcm9wcy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBwYW5lbHMubGVuZ3RoICE9PSAwICYmIHN0YXJ0SW5kZXggIT09IC0xICYmIHN0YXJ0SW5kZXggIT09IHBhbmVscy5sZW5ndGgpIHtcbiAgICAgIGdvVG9QYW5lbEJ5T2Zmc2V0KGRpcmVjdGlvbiwgZGlyZWN0aW9uID09PSAtMSA/IHBhbmVscy5sZW5ndGggOiAtMSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQYW5lbEluZGV4ICgpIHtcbiAgICBjb25zdCBpbmRleCA9IGdldFBhbmVsSW5kZXgocHJvcHMubW9kZWxWYWx1ZSlcblxuICAgIGlmIChwYW5lbEluZGV4LnZhbHVlICE9PSBpbmRleCkge1xuICAgICAgcGFuZWxJbmRleC52YWx1ZSA9IGluZGV4XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhbmVsQ29udGVudENoaWxkICgpIHtcbiAgICBjb25zdCBwYW5lbCA9IGlzVmFsaWRQYW5lbE5hbWUocHJvcHMubW9kZWxWYWx1ZSkgPT09IHRydWVcbiAgICAgICYmIHVwZGF0ZVBhbmVsSW5kZXgoKVxuICAgICAgJiYgcGFuZWxzWyBwYW5lbEluZGV4LnZhbHVlIF1cblxuICAgIHJldHVybiBwcm9wcy5rZWVwQWxpdmUgPT09IHRydWVcbiAgICAgID8gW1xuICAgICAgICAgIGgoS2VlcEFsaXZlLCBrZWVwQWxpdmVQcm9wcy52YWx1ZSwgW1xuICAgICAgICAgICAgaChcbiAgICAgICAgICAgICAgbmVlZHNVbmlxdWVLZWVwQWxpdmVXcmFwcGVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICAgICAgPyBnZXRDYWNoZShjb250ZW50S2V5LnZhbHVlLCAoKSA9PiAoeyAuLi5QYW5lbFdyYXBwZXIsIG5hbWU6IGNvbnRlbnRLZXkudmFsdWUgfSkpXG4gICAgICAgICAgICAgICAgOiBQYW5lbFdyYXBwZXIsXG4gICAgICAgICAgICAgIHsga2V5OiBjb250ZW50S2V5LnZhbHVlLCBzdHlsZTogdHJhbnNpdGlvblN0eWxlLnZhbHVlIH0sXG4gICAgICAgICAgICAgICgpID0+IHBhbmVsXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgOiBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLXBhbmVsIHNjcm9sbCcsXG4gICAgICAgICAgICBzdHlsZTogdHJhbnNpdGlvblN0eWxlLnZhbHVlLFxuICAgICAgICAgICAga2V5OiBjb250ZW50S2V5LnZhbHVlLFxuICAgICAgICAgICAgcm9sZTogJ3RhYnBhbmVsJ1xuICAgICAgICAgIH0sIFsgcGFuZWwgXSlcbiAgICAgICAgXVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFuZWxDb250ZW50ICgpIHtcbiAgICBpZiAocGFuZWxzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgICByZXR1cm4gcHJvcHMuYW5pbWF0ZWQgPT09IHRydWVcbiAgICAgID8gWyBoKFRyYW5zaXRpb24sIHsgbmFtZTogcGFuZWxUcmFuc2l0aW9uLnZhbHVlIH0sIGdldFBhbmVsQ29udGVudENoaWxkKSBdXG4gICAgICA6IGdldFBhbmVsQ29udGVudENoaWxkKClcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBhbmVsc0xpc3QgKHNsb3RzKSB7XG4gICAgcGFuZWxzID0gZ2V0Tm9ybWFsaXplZFZOb2RlcyhcbiAgICAgIGhTbG90KHNsb3RzLmRlZmF1bHQsIFtdKVxuICAgICkuZmlsdGVyKFxuICAgICAgcGFuZWwgPT4gcGFuZWwucHJvcHMgIT09IG51bGxcbiAgICAgICAgJiYgcGFuZWwucHJvcHMuc2xvdCA9PT0gdm9pZCAwXG4gICAgICAgICYmIGlzVmFsaWRQYW5lbE5hbWUocGFuZWwucHJvcHMubmFtZSkgPT09IHRydWVcbiAgICApXG5cbiAgICByZXR1cm4gcGFuZWxzLmxlbmd0aFxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFuZWxzICgpIHtcbiAgICByZXR1cm4gcGFuZWxzXG4gIH1cblxuICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgIG5leHQ6IG5leHRQYW5lbCxcbiAgICBwcmV2aW91czogcHJldmlvdXNQYW5lbCxcbiAgICBnb1RvOiBnb1RvUGFuZWxcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhbmVsSW5kZXgsXG4gICAgcGFuZWxEaXJlY3RpdmVzLFxuXG4gICAgdXBkYXRlUGFuZWxzTGlzdCxcbiAgICB1cGRhdGVQYW5lbEluZGV4LFxuXG4gICAgZ2V0UGFuZWxDb250ZW50LFxuICAgIGdldEVuYWJsZWRQYW5lbHMsXG4gICAgZ2V0UGFuZWxzLFxuXG4gICAgaXNWYWxpZFBhbmVsTmFtZSxcblxuICAgIGtlZXBBbGl2ZVByb3BzLFxuICAgIG5lZWRzVW5pcXVlS2VlcEFsaXZlV3JhcHBlcixcblxuICAgIGdvVG9QYW5lbEJ5T2Zmc2V0LFxuICAgIGdvVG9QYW5lbCxcblxuICAgIG5leHRQYW5lbCxcbiAgICBwcmV2aW91c1BhbmVsXG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWRhcmsvdXNlLWRhcmsuanMnXG5pbXBvcnQgdXNlUGFuZWwsIHsgdXNlUGFuZWxQcm9wcywgdXNlUGFuZWxFbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLXBhbmVsL3VzZS1wYW5lbC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWJQYW5lbHMnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlUGFuZWxQcm9wcyxcbiAgICAuLi51c2VEYXJrUHJvcHNcbiAgfSxcblxuICBlbWl0czogdXNlUGFuZWxFbWl0cyxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCB2bS5wcm94eS4kcSlcblxuICAgIGNvbnN0IHsgdXBkYXRlUGFuZWxzTGlzdCwgZ2V0UGFuZWxDb250ZW50LCBwYW5lbERpcmVjdGl2ZXMgfSA9IHVzZVBhbmVsKClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdGFiLXBhbmVscyBxLXBhbmVsLXBhcmVudCdcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS10YWItcGFuZWxzLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdXBkYXRlUGFuZWxzTGlzdChzbG90cylcblxuICAgICAgcmV0dXJuIGhEaXIoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sXG4gICAgICAgIGdldFBhbmVsQ29udGVudCgpLFxuICAgICAgICAncGFuJyxcbiAgICAgICAgcHJvcHMuc3dpcGVhYmxlLFxuICAgICAgICAoKSA9PiBwYW5lbERpcmVjdGl2ZXMudmFsdWVcbiAgICAgIClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyB1c2VQYW5lbENoaWxkUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1wYW5lbC91c2UtcGFuZWwuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYlBhbmVsJyxcblxuICBwcm9wczogdXNlUGFuZWxDaGlsZFByb3BzLFxuXG4gIHNldHVwIChfLCB7IHNsb3RzIH0pIHtcbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogJ3EtdGFiLXBhbmVsJywgcm9sZTogJ3RhYnBhbmVsJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImNvbnN0IHJlUkdCQSA9IC9ecmdiKGEpP1xcKChcXGR7MSwzfSksKFxcZHsxLDN9KSwoXFxkezEsM30pLD8oWzAxXT9cXC4/XFxkKj8pP1xcKSQvXG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleCAoeyByLCBnLCBiLCBhIH0pIHtcbiAgY29uc3QgYWxwaGEgPSBhICE9PSB2b2lkIDBcblxuICByID0gTWF0aC5yb3VuZChyKVxuICBnID0gTWF0aC5yb3VuZChnKVxuICBiID0gTWF0aC5yb3VuZChiKVxuXG4gIGlmIChcbiAgICByID4gMjU1XG4gICAgfHwgZyA+IDI1NVxuICAgIHx8IGIgPiAyNTVcbiAgICB8fCAoYWxwaGEgJiYgYSA+IDEwMClcbiAgKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgMyBudW1iZXJzIGJlbG93IDI1NiAoYW5kIG9wdGlvbmFsbHkgb25lIGJlbG93IDEwMCknKVxuICB9XG5cbiAgYSA9IGFscGhhXG4gICAgPyAoTWF0aC5yb3VuZCgyNTUgKiBhIC8gMTAwKSB8IDEgPDwgOCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpXG4gICAgOiAnJ1xuXG4gIHJldHVybiAnIycgKyAoKGIgfCBnIDw8IDggfCByIDw8IDE2KSB8IDEgPDwgMjQpLnRvU3RyaW5nKDE2KS5zbGljZSgxKSArIGFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvU3RyaW5nICh7IHIsIGcsIGIsIGEgfSkge1xuICByZXR1cm4gYHJnYiR7IGEgIT09IHZvaWQgMCA/ICdhJyA6ICcnIH0oJHsgciB9LCR7IGcgfSwkeyBiIH0keyBhICE9PSB2b2lkIDAgPyAnLCcgKyAoYSAvIDEwMCkgOiAnJyB9KWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiIChoZXgpIHtcbiAgaWYgKHR5cGVvZiBoZXggIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKVxuICB9XG5cbiAgaGV4ID0gaGV4LnJlcGxhY2UoL14jLywgJycpXG5cbiAgaWYgKGhleC5sZW5ndGggPT09IDMpIHtcbiAgICBoZXggPSBoZXhbIDAgXSArIGhleFsgMCBdICsgaGV4WyAxIF0gKyBoZXhbIDEgXSArIGhleFsgMiBdICsgaGV4WyAyIF1cbiAgfVxuICBlbHNlIGlmIChoZXgubGVuZ3RoID09PSA0KSB7XG4gICAgaGV4ID0gaGV4WyAwIF0gKyBoZXhbIDAgXSArIGhleFsgMSBdICsgaGV4WyAxIF0gKyBoZXhbIDIgXSArIGhleFsgMiBdICsgaGV4WyAzIF0gKyBoZXhbIDMgXVxuICB9XG5cbiAgY29uc3QgbnVtID0gcGFyc2VJbnQoaGV4LCAxNilcblxuICByZXR1cm4gaGV4Lmxlbmd0aCA+IDZcbiAgICA/IHsgcjogbnVtID4+IDI0ICYgMjU1LCBnOiBudW0gPj4gMTYgJiAyNTUsIGI6IG51bSA+PiA4ICYgMjU1LCBhOiBNYXRoLnJvdW5kKChudW0gJiAyNTUpIC8gMi41NSkgfVxuICAgIDogeyByOiBudW0gPj4gMTYsIGc6IG51bSA+PiA4ICYgMjU1LCBiOiBudW0gJiAyNTUgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaHN2VG9SZ2IgKHsgaCwgcywgdiwgYSB9KSB7XG4gIGxldCByLCBnLCBiXG4gIHMgPSBzIC8gMTAwXG4gIHYgPSB2IC8gMTAwXG5cbiAgaCA9IGggLyAzNjBcbiAgY29uc3RcbiAgICBpID0gTWF0aC5mbG9vcihoICogNiksXG4gICAgZiA9IGggKiA2IC0gaSxcbiAgICBwID0gdiAqICgxIC0gcyksXG4gICAgcSA9IHYgKiAoMSAtIGYgKiBzKSxcbiAgICB0ID0gdiAqICgxIC0gKDEgLSBmKSAqIHMpXG5cbiAgc3dpdGNoIChpICUgNikge1xuICAgIGNhc2UgMDpcbiAgICAgIHIgPSB2XG4gICAgICBnID0gdFxuICAgICAgYiA9IHBcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAxOlxuICAgICAgciA9IHFcbiAgICAgIGcgPSB2XG4gICAgICBiID0gcFxuICAgICAgYnJlYWtcbiAgICBjYXNlIDI6XG4gICAgICByID0gcFxuICAgICAgZyA9IHZcbiAgICAgIGIgPSB0XG4gICAgICBicmVha1xuICAgIGNhc2UgMzpcbiAgICAgIHIgPSBwXG4gICAgICBnID0gcVxuICAgICAgYiA9IHZcbiAgICAgIGJyZWFrXG4gICAgY2FzZSA0OlxuICAgICAgciA9IHRcbiAgICAgIGcgPSBwXG4gICAgICBiID0gdlxuICAgICAgYnJlYWtcbiAgICBjYXNlIDU6XG4gICAgICByID0gdlxuICAgICAgZyA9IHBcbiAgICAgIGIgPSBxXG4gICAgICBicmVha1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByOiBNYXRoLnJvdW5kKHIgKiAyNTUpLFxuICAgIGc6IE1hdGgucm91bmQoZyAqIDI1NSksXG4gICAgYjogTWF0aC5yb3VuZChiICogMjU1KSxcbiAgICBhXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSHN2ICh7IHIsIGcsIGIsIGEgfSkge1xuICBjb25zdFxuICAgIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLFxuICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpLFxuICAgIGQgPSBtYXggLSBtaW4sXG4gICAgcyA9IChtYXggPT09IDAgPyAwIDogZCAvIG1heCksXG4gICAgdiA9IG1heCAvIDI1NVxuICBsZXQgaFxuXG4gIHN3aXRjaCAobWF4KSB7XG4gICAgY2FzZSBtaW46XG4gICAgICBoID0gMFxuICAgICAgYnJlYWtcbiAgICBjYXNlIHI6XG4gICAgICBoID0gKGcgLSBiKSArIGQgKiAoZyA8IGIgPyA2IDogMClcbiAgICAgIGggLz0gNiAqIGRcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBnOlxuICAgICAgaCA9IChiIC0gcikgKyBkICogMlxuICAgICAgaCAvPSA2ICogZFxuICAgICAgYnJlYWtcbiAgICBjYXNlIGI6XG4gICAgICBoID0gKHIgLSBnKSArIGQgKiA0XG4gICAgICBoIC89IDYgKiBkXG4gICAgICBicmVha1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoOiBNYXRoLnJvdW5kKGggKiAzNjApLFxuICAgIHM6IE1hdGgucm91bmQocyAqIDEwMCksXG4gICAgdjogTWF0aC5yb3VuZCh2ICogMTAwKSxcbiAgICBhXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRUb1JnYiAoc3RyKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJylcbiAgfVxuXG4gIGNvbnN0IGNvbG9yID0gc3RyLnJlcGxhY2UoLyAvZywgJycpXG5cbiAgY29uc3QgbSA9IHJlUkdCQS5leGVjKGNvbG9yKVxuXG4gIGlmIChtID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGhleFRvUmdiKGNvbG9yKVxuICB9XG5cbiAgY29uc3QgcmdiID0ge1xuICAgIHI6IE1hdGgubWluKDI1NSwgcGFyc2VJbnQobVsgMiBdLCAxMCkpLFxuICAgIGc6IE1hdGgubWluKDI1NSwgcGFyc2VJbnQobVsgMyBdLCAxMCkpLFxuICAgIGI6IE1hdGgubWluKDI1NSwgcGFyc2VJbnQobVsgNCBdLCAxMCkpXG4gIH1cblxuICBpZiAobVsgMSBdKSB7XG4gICAgY29uc3QgYWxwaGEgPSBwYXJzZUZsb2F0KG1bIDUgXSlcbiAgICByZ2IuYSA9IE1hdGgubWluKDEsIGlzTmFOKGFscGhhKSA9PT0gdHJ1ZSA/IDEgOiBhbHBoYSkgKiAxMDBcbiAgfVxuXG4gIHJldHVybiByZ2Jcbn1cblxuLyogd29ya3MgYXMgZGFya2VuIGlmIHBlcmNlbnQgPCAwICovXG5leHBvcnQgZnVuY3Rpb24gbGlnaHRlbiAoY29sb3IsIHBlcmNlbnQpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZyBhcyBjb2xvcicpXG4gIH1cbiAgaWYgKHR5cGVvZiBwZXJjZW50ICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgbnVtZXJpYyBwZXJjZW50JylcbiAgfVxuXG4gIGNvbnN0IHJnYiA9IHRleHRUb1JnYihjb2xvciksXG4gICAgdCA9IHBlcmNlbnQgPCAwID8gMCA6IDI1NSxcbiAgICBwID0gTWF0aC5hYnMocGVyY2VudCkgLyAxMDAsXG4gICAgUiA9IHJnYi5yLFxuICAgIEcgPSByZ2IuZyxcbiAgICBCID0gcmdiLmJcblxuICByZXR1cm4gJyMnICsgKFxuICAgIDB4MTAwMDAwMCArIChNYXRoLnJvdW5kKCh0IC0gUikgKiBwKSArIFIpICogMHgxMDAwMFxuICAgICsgKE1hdGgucm91bmQoKHQgLSBHKSAqIHApICsgRykgKiAweDEwMFxuICAgICsgKE1hdGgucm91bmQoKHQgLSBCKSAqIHApICsgQilcbiAgKS50b1N0cmluZygxNikuc2xpY2UoMSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGx1bWlub3NpdHkgKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnICYmICghY29sb3IgfHwgY29sb3IuciA9PT0gdm9pZCAwKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGEge3IsIGcsIGJ9IG9iamVjdCBhcyBjb2xvcicpXG4gIH1cblxuICBjb25zdFxuICAgIHJnYiA9IHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgPyB0ZXh0VG9SZ2IoY29sb3IpIDogY29sb3IsXG4gICAgciA9IHJnYi5yIC8gMjU1LFxuICAgIGcgPSByZ2IuZyAvIDI1NSxcbiAgICBiID0gcmdiLmIgLyAyNTUsXG4gICAgUiA9IHIgPD0gMC4wMzkyOCA/IHIgLyAxMi45MiA6IE1hdGgucG93KChyICsgMC4wNTUpIC8gMS4wNTUsIDIuNCksXG4gICAgRyA9IGcgPD0gMC4wMzkyOCA/IGcgLyAxMi45MiA6IE1hdGgucG93KChnICsgMC4wNTUpIC8gMS4wNTUsIDIuNCksXG4gICAgQiA9IGIgPD0gMC4wMzkyOCA/IGIgLyAxMi45MiA6IE1hdGgucG93KChiICsgMC4wNTUpIC8gMS4wNTUsIDIuNClcbiAgcmV0dXJuIDAuMjEyNiAqIFIgKyAwLjcxNTIgKiBHICsgMC4wNzIyICogQlxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJpZ2h0bmVzcyAoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycgJiYgKCFjb2xvciB8fCBjb2xvci5yID09PSB2b2lkIDApKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYSB7ciwgZywgYn0gb2JqZWN0IGFzIGNvbG9yJylcbiAgfVxuXG4gIGNvbnN0IHJnYiA9IHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZydcbiAgICA/IHRleHRUb1JnYihjb2xvcilcbiAgICA6IGNvbG9yXG5cbiAgcmV0dXJuIChyZ2IuciAqIDI5OSArIHJnYi5nICogNTg3ICsgcmdiLmIgKiAxMTQpIC8gMTAwMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmxlbmQgKGZnQ29sb3IsIGJnQ29sb3IpIHtcbiAgaWYgKHR5cGVvZiBmZ0NvbG9yICE9PSAnc3RyaW5nJyAmJiAoIWZnQ29sb3IgfHwgZmdDb2xvci5yID09PSB2b2lkIDApKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYSB7ciwgZywgYlssIGFdfSBvYmplY3QgYXMgZmdDb2xvcicpXG4gIH1cblxuICBpZiAodHlwZW9mIGJnQ29sb3IgIT09ICdzdHJpbmcnICYmICghYmdDb2xvciB8fCBiZ0NvbG9yLnIgPT09IHZvaWQgMCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZyBvciBhIHtyLCBnLCBiWywgYV19IG9iamVjdCBhcyBiZ0NvbG9yJylcbiAgfVxuXG4gIGNvbnN0XG4gICAgcmdiMSA9IHR5cGVvZiBmZ0NvbG9yID09PSAnc3RyaW5nJyA/IHRleHRUb1JnYihmZ0NvbG9yKSA6IGZnQ29sb3IsXG4gICAgcjEgPSByZ2IxLnIgLyAyNTUsXG4gICAgZzEgPSByZ2IxLmcgLyAyNTUsXG4gICAgYjEgPSByZ2IxLmIgLyAyNTUsXG4gICAgYTEgPSByZ2IxLmEgIT09IHZvaWQgMCA/IHJnYjEuYSAvIDEwMCA6IDEsXG4gICAgcmdiMiA9IHR5cGVvZiBiZ0NvbG9yID09PSAnc3RyaW5nJyA/IHRleHRUb1JnYihiZ0NvbG9yKSA6IGJnQ29sb3IsXG4gICAgcjIgPSByZ2IyLnIgLyAyNTUsXG4gICAgZzIgPSByZ2IyLmcgLyAyNTUsXG4gICAgYjIgPSByZ2IyLmIgLyAyNTUsXG4gICAgYTIgPSByZ2IyLmEgIT09IHZvaWQgMCA/IHJnYjIuYSAvIDEwMCA6IDEsXG4gICAgYSA9IGExICsgYTIgKiAoMSAtIGExKSxcbiAgICByID0gTWF0aC5yb3VuZCgoKHIxICogYTEgKyByMiAqIGEyICogKDEgLSBhMSkpIC8gYSkgKiAyNTUpLFxuICAgIGcgPSBNYXRoLnJvdW5kKCgoZzEgKiBhMSArIGcyICogYTIgKiAoMSAtIGExKSkgLyBhKSAqIDI1NSksXG4gICAgYiA9IE1hdGgucm91bmQoKChiMSAqIGExICsgYjIgKiBhMiAqICgxIC0gYTEpKSAvIGEpICogMjU1KVxuXG4gIGNvbnN0IHJldCA9IHsgciwgZywgYiwgYTogTWF0aC5yb3VuZChhICogMTAwKSB9XG4gIHJldHVybiB0eXBlb2YgZmdDb2xvciA9PT0gJ3N0cmluZydcbiAgICA/IHJnYlRvSGV4KHJldClcbiAgICA6IHJldFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQWxwaGEgKGNvbG9yLCBvZmZzZXQpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZyBhcyBjb2xvcicpXG4gIH1cblxuICBpZiAob2Zmc2V0ID09PSB2b2lkIDAgfHwgb2Zmc2V0IDwgLTEgfHwgb2Zmc2V0ID4gMSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIG9mZnNldCB0byBiZSBiZXR3ZWVuIC0xIGFuZCAxJylcbiAgfVxuXG4gIGNvbnN0IHsgciwgZywgYiwgYSB9ID0gdGV4dFRvUmdiKGNvbG9yKVxuICBjb25zdCBhbHBoYSA9IGEgIT09IHZvaWQgMCA/IGEgLyAxMDAgOiAwXG5cbiAgcmV0dXJuIHJnYlRvSGV4KHtcbiAgICByLCBnLCBiLCBhOiBNYXRoLnJvdW5kKE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGFscGhhICsgb2Zmc2V0KSkgKiAxMDApXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWxldHRlQ29sb3IgKGNvbG9yTmFtZSkge1xuICBpZiAodHlwZW9mIGNvbG9yTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZyBhcyBjb2xvcicpXG4gIH1cblxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgZWwuY2xhc3NOYW1lID0gYHRleHQtJHsgY29sb3JOYW1lIH0gaW52aXNpYmxlIGZpeGVkIG5vLXBvaW50ZXItZXZlbnRzYFxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKVxuXG4gIGNvbnN0IHJlc3VsdCA9IGdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoJ2NvbG9yJylcblxuICBlbC5yZW1vdmUoKVxuXG4gIHJldHVybiByZ2JUb0hleCh0ZXh0VG9SZ2IocmVzdWx0KSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZ2JUb0hleCxcbiAgaGV4VG9SZ2IsXG4gIGhzdlRvUmdiLFxuICByZ2JUb0hzdixcbiAgdGV4dFRvUmdiLFxuICBsaWdodGVuLFxuICBsdW1pbm9zaXR5LFxuICBicmlnaHRuZXNzLFxuICBibGVuZCxcbiAgY2hhbmdlQWxwaGEsXG4gIGdldFBhbGV0dGVDb2xvclxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoLXBhbi9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IFFTbGlkZXIgZnJvbSAnLi4vc2xpZGVyL1FTbGlkZXIuanMnXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IFFUYWJzIGZyb20gJy4uL3RhYnMvUVRhYnMuanMnXG5pbXBvcnQgUVRhYiBmcm9tICcuLi90YWJzL1FUYWIuanMnXG5pbXBvcnQgUVRhYlBhbmVscyBmcm9tICcuLi90YWItcGFuZWxzL1FUYWJQYW5lbHMuanMnXG5pbXBvcnQgUVRhYlBhbmVsIGZyb20gJy4uL3RhYi1wYW5lbHMvUVRhYlBhbmVsLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVJlbmRlckNhY2hlIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS1yZW5kZXItY2FjaGUvdXNlLXJlbmRlci1jYWNoZS5qcydcbmltcG9ydCB7IHVzZUZvcm1JbmplY3QsIHVzZUZvcm1Qcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS1mb3JtL3ByaXZhdGUudXNlLWZvcm0uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IHRlc3RQYXR0ZXJuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGF0dGVybnMvcGF0dGVybnMuanMnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi4vLi4vdXRpbHMvdGhyb3R0bGUvdGhyb3R0bGUuanMnXG5pbXBvcnQgeyBzdG9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQvZXZlbnQuanMnXG5pbXBvcnQgeyBoZXhUb1JnYiwgcmdiVG9IZXgsIHJnYlRvU3RyaW5nLCB0ZXh0VG9SZ2IsIHJnYlRvSHN2LCBoc3ZUb1JnYiwgbHVtaW5vc2l0eSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbG9ycy9jb2xvcnMuanMnXG5pbXBvcnQgeyBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5jb25zdCBwYWxldHRlID0gW1xuICAncmdiKDI1NSwyMDQsMjA0KScsICdyZ2IoMjU1LDIzMCwyMDQpJywgJ3JnYigyNTUsMjU1LDIwNCknLCAncmdiKDIwNCwyNTUsMjA0KScsICdyZ2IoMjA0LDI1NSwyMzApJywgJ3JnYigyMDQsMjU1LDI1NSknLCAncmdiKDIwNCwyMzAsMjU1KScsICdyZ2IoMjA0LDIwNCwyNTUpJywgJ3JnYigyMzAsMjA0LDI1NSknLCAncmdiKDI1NSwyMDQsMjU1KScsXG4gICdyZ2IoMjU1LDE1MywxNTMpJywgJ3JnYigyNTUsMjA0LDE1MyknLCAncmdiKDI1NSwyNTUsMTUzKScsICdyZ2IoMTUzLDI1NSwxNTMpJywgJ3JnYigxNTMsMjU1LDIwNCknLCAncmdiKDE1MywyNTUsMjU1KScsICdyZ2IoMTUzLDIwNCwyNTUpJywgJ3JnYigxNTMsMTUzLDI1NSknLCAncmdiKDIwNCwxNTMsMjU1KScsICdyZ2IoMjU1LDE1MywyNTUpJyxcbiAgJ3JnYigyNTUsMTAyLDEwMiknLCAncmdiKDI1NSwxNzksMTAyKScsICdyZ2IoMjU1LDI1NSwxMDIpJywgJ3JnYigxMDIsMjU1LDEwMiknLCAncmdiKDEwMiwyNTUsMTc5KScsICdyZ2IoMTAyLDI1NSwyNTUpJywgJ3JnYigxMDIsMTc5LDI1NSknLCAncmdiKDEwMiwxMDIsMjU1KScsICdyZ2IoMTc5LDEwMiwyNTUpJywgJ3JnYigyNTUsMTAyLDI1NSknLFxuICAncmdiKDI1NSw1MSw1MSknLCAncmdiKDI1NSwxNTMsNTEpJywgJ3JnYigyNTUsMjU1LDUxKScsICdyZ2IoNTEsMjU1LDUxKScsICdyZ2IoNTEsMjU1LDE1MyknLCAncmdiKDUxLDI1NSwyNTUpJywgJ3JnYig1MSwxNTMsMjU1KScsICdyZ2IoNTEsNTEsMjU1KScsICdyZ2IoMTUzLDUxLDI1NSknLCAncmdiKDI1NSw1MSwyNTUpJyxcbiAgJ3JnYigyNTUsMCwwKScsICdyZ2IoMjU1LDEyOCwwKScsICdyZ2IoMjU1LDI1NSwwKScsICdyZ2IoMCwyNTUsMCknLCAncmdiKDAsMjU1LDEyOCknLCAncmdiKDAsMjU1LDI1NSknLCAncmdiKDAsMTI4LDI1NSknLCAncmdiKDAsMCwyNTUpJywgJ3JnYigxMjgsMCwyNTUpJywgJ3JnYigyNTUsMCwyNTUpJyxcbiAgJ3JnYigyNDUsMCwwKScsICdyZ2IoMjQ1LDEyMywwKScsICdyZ2IoMjQ1LDI0NSwwKScsICdyZ2IoMCwyNDUsMCknLCAncmdiKDAsMjQ1LDEyMyknLCAncmdiKDAsMjQ1LDI0NSknLCAncmdiKDAsMTIzLDI0NSknLCAncmdiKDAsMCwyNDUpJywgJ3JnYigxMjMsMCwyNDUpJywgJ3JnYigyNDUsMCwyNDUpJyxcbiAgJ3JnYigyMTQsMCwwKScsICdyZ2IoMjE0LDEwOCwwKScsICdyZ2IoMjE0LDIxNCwwKScsICdyZ2IoMCwyMTQsMCknLCAncmdiKDAsMjE0LDEwOCknLCAncmdiKDAsMjE0LDIxNCknLCAncmdiKDAsMTA4LDIxNCknLCAncmdiKDAsMCwyMTQpJywgJ3JnYigxMDgsMCwyMTQpJywgJ3JnYigyMTQsMCwyMTQpJyxcbiAgJ3JnYigxNjMsMCwwKScsICdyZ2IoMTYzLDgyLDApJywgJ3JnYigxNjMsMTYzLDApJywgJ3JnYigwLDE2MywwKScsICdyZ2IoMCwxNjMsODIpJywgJ3JnYigwLDE2MywxNjMpJywgJ3JnYigwLDgyLDE2MyknLCAncmdiKDAsMCwxNjMpJywgJ3JnYig4MiwwLDE2MyknLCAncmdiKDE2MywwLDE2MyknLFxuICAncmdiKDkyLDAsMCknLCAncmdiKDkyLDQ2LDApJywgJ3JnYig5Miw5MiwwKScsICdyZ2IoMCw5MiwwKScsICdyZ2IoMCw5Miw0NiknLCAncmdiKDAsOTIsOTIpJywgJ3JnYigwLDQ2LDkyKScsICdyZ2IoMCwwLDkyKScsICdyZ2IoNDYsMCw5MiknLCAncmdiKDkyLDAsOTIpJyxcbiAgJ3JnYigyNTUsMjU1LDI1NSknLCAncmdiKDIwNSwyMDUsMjA1KScsICdyZ2IoMTc4LDE3OCwxNzgpJywgJ3JnYigxNTMsMTUzLDE1MyknLCAncmdiKDEyNywxMjcsMTI3KScsICdyZ2IoMTAyLDEwMiwxMDIpJywgJ3JnYig3Niw3Niw3NiknLCAncmdiKDUxLDUxLDUxKScsICdyZ2IoMjUsMjUsMjUpJywgJ3JnYigwLDAsMCknXG5dXG5cbmNvbnN0IHRodW1iUGF0aCA9ICdNNSA1IGgxMCB2MTAgaC0xMCB2LTEwIHonXG5jb25zdCBhbHBoYVRyYWNrSW1nID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFIMGxFUVZRb1UyTmtZR0F3WmtBRlo1RzVqUFJSZ09ZRVZEZUIzRUJqQlFCT1p3VFZ1Z0lHeUFBQUFBQkpSVTVFcmtKZ2dnPT0nXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQ29sb3InLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIC4uLnVzZUZvcm1Qcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IFN0cmluZyxcblxuICAgIGRlZmF1bHRWYWx1ZTogU3RyaW5nLFxuICAgIGRlZmF1bHRWaWV3OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnc3BlY3RydW0nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ3NwZWN0cnVtJywgJ3R1bmUnLCAncGFsZXR0ZScgXS5pbmNsdWRlcyh2KVxuICAgIH0sXG5cbiAgICBmb3JtYXRNb2RlbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2F1dG8nLCAnaGV4JywgJ3JnYicsICdoZXhhJywgJ3JnYmEnIF0uaW5jbHVkZXModilcbiAgICB9LFxuXG4gICAgcGFsZXR0ZTogQXJyYXksXG5cbiAgICBub0hlYWRlcjogQm9vbGVhbixcbiAgICBub0hlYWRlclRhYnM6IEJvb2xlYW4sXG4gICAgbm9Gb290ZXI6IEJvb2xlYW4sXG5cbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcblxuICAgIGRpc2FibGU6IEJvb2xlYW4sXG4gICAgcmVhZG9ubHk6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogWyAndXBkYXRlOm1vZGVsVmFsdWUnLCAnY2hhbmdlJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCB7IGdldENhY2hlIH0gPSB1c2VSZW5kZXJDYWNoZSgpXG5cbiAgICBjb25zdCBzcGVjdHJ1bVJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGVycm9ySWNvblJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgZm9yY2VIZXggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5mb3JtYXRNb2RlbCA9PT0gJ2F1dG8nXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IHByb3BzLmZvcm1hdE1vZGVsLmluZGV4T2YoJ2hleCcpICE9PSAtMVxuICAgICkpXG5cbiAgICBjb25zdCBmb3JjZUFscGhhID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZm9ybWF0TW9kZWwgPT09ICdhdXRvJ1xuICAgICAgICA/IG51bGxcbiAgICAgICAgOiBwcm9wcy5mb3JtYXRNb2RlbC5pbmRleE9mKCdhJykgIT09IC0xXG4gICAgKSlcblxuICAgIGNvbnN0IHRvcFZpZXcgPSByZWYoXG4gICAgICBwcm9wcy5mb3JtYXRNb2RlbCA9PT0gJ2F1dG8nXG4gICAgICAgID8gKFxuICAgICAgICAgICAgKHByb3BzLm1vZGVsVmFsdWUgPT09IHZvaWQgMCB8fCBwcm9wcy5tb2RlbFZhbHVlID09PSBudWxsIHx8IHByb3BzLm1vZGVsVmFsdWUgPT09ICcnIHx8IHByb3BzLm1vZGVsVmFsdWUuc3RhcnRzV2l0aCgnIycpKVxuICAgICAgICAgICAgICA/ICdoZXgnXG4gICAgICAgICAgICAgIDogJ3JnYidcbiAgICAgICAgICApXG4gICAgICAgIDogKHByb3BzLmZvcm1hdE1vZGVsLnN0YXJ0c1dpdGgoJ2hleCcpID8gJ2hleCcgOiAncmdiJylcbiAgICApXG5cbiAgICBjb25zdCB2aWV3ID0gcmVmKHByb3BzLmRlZmF1bHRWaWV3KVxuICAgIGNvbnN0IG1vZGVsID0gcmVmKHBhcnNlTW9kZWwocHJvcHMubW9kZWxWYWx1ZSB8fCBwcm9wcy5kZWZhdWx0VmFsdWUpKVxuXG4gICAgY29uc3QgZWRpdGFibGUgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIHByb3BzLnJlYWRvbmx5ICE9PSB0cnVlKVxuXG4gICAgY29uc3QgaXNIZXggPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdm9pZCAwXG4gICAgICB8fCBwcm9wcy5tb2RlbFZhbHVlID09PSBudWxsXG4gICAgICB8fCBwcm9wcy5tb2RlbFZhbHVlID09PSAnJ1xuICAgICAgfHwgcHJvcHMubW9kZWxWYWx1ZS5zdGFydHNXaXRoKCcjJylcbiAgICApXG5cbiAgICBjb25zdCBpc091dHB1dEhleCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIGZvcmNlSGV4LnZhbHVlICE9PSBudWxsXG4gICAgICAgID8gZm9yY2VIZXgudmFsdWVcbiAgICAgICAgOiBpc0hleC52YWx1ZVxuICAgICkpXG5cbiAgICBjb25zdCBmb3JtQXR0cnMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgdmFsdWU6IG1vZGVsLnZhbHVlWyBpc091dHB1dEhleC52YWx1ZSA9PT0gdHJ1ZSA/ICdoZXgnIDogJ3JnYicgXVxuICAgIH0pKVxuXG4gICAgY29uc3QgaW5qZWN0Rm9ybUlucHV0ID0gdXNlRm9ybUluamVjdChmb3JtQXR0cnMpXG5cbiAgICBjb25zdCBoYXNBbHBoYSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIGZvcmNlQWxwaGEudmFsdWUgIT09IG51bGxcbiAgICAgICAgPyBmb3JjZUFscGhhLnZhbHVlXG4gICAgICAgIDogbW9kZWwudmFsdWUuYSAhPT0gdm9pZCAwXG4gICAgKSlcblxuICAgIGNvbnN0IGN1cnJlbnRCZ0NvbG9yID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogbW9kZWwudmFsdWUucmdiIHx8ICcjMDAwJ1xuICAgIH0pKVxuXG4gICAgY29uc3QgaGVhZGVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBsaWdodCA9IG1vZGVsLnZhbHVlLmEgIT09IHZvaWQgMCAmJiBtb2RlbC52YWx1ZS5hIDwgNjVcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogbHVtaW5vc2l0eShtb2RlbC52YWx1ZSkgPiAwLjRcblxuICAgICAgcmV0dXJuICdxLWNvbG9yLXBpY2tlcl9faGVhZGVyLWNvbnRlbnQnXG4gICAgICAgICsgYCBxLWNvbG9yLXBpY2tlcl9faGVhZGVyLWNvbnRlbnQtLSR7IGxpZ2h0ID8gJ2xpZ2h0JyA6ICdkYXJrJyB9YFxuICAgIH0pXG5cbiAgICBjb25zdCBzcGVjdHJ1bVN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIGJhY2tncm91bmQ6IGBoc2woJHsgbW9kZWwudmFsdWUuaCB9LDEwMCUsNTAlKWBcbiAgICB9KSlcblxuICAgIGNvbnN0IHNwZWN0cnVtUG9pbnRlclN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHRvcDogYCR7IDEwMCAtIG1vZGVsLnZhbHVlLnYgfSVgLFxuICAgICAgWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXTogYCR7IG1vZGVsLnZhbHVlLnMgfSVgXG4gICAgfSkpXG5cbiAgICBjb25zdCBjb21wdXRlZFBhbGV0dGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5wYWxldHRlICE9PSB2b2lkIDAgJiYgcHJvcHMucGFsZXR0ZS5sZW5ndGggIT09IDBcbiAgICAgICAgPyBwcm9wcy5wYWxldHRlXG4gICAgICAgIDogcGFsZXR0ZVxuICAgICkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWNvbG9yLXBpY2tlcidcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLWNvbG9yLXBpY2tlci0tYm9yZGVyZWQnIDogJycpXG4gICAgICArIChwcm9wcy5zcXVhcmUgPT09IHRydWUgPyAnIHEtY29sb3ItcGlja2VyLS1zcXVhcmUgbm8tYm9yZGVyLXJhZGl1cycgOiAnJylcbiAgICAgICsgKHByb3BzLmZsYXQgPT09IHRydWUgPyAnIHEtY29sb3ItcGlja2VyLS1mbGF0IG5vLXNoYWRvdycgOiAnJylcbiAgICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcnKVxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLWNvbG9yLXBpY2tlci0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmRpc2FibGUgPT09IHRydWVcbiAgICAgICAgPyB7ICdhcmlhLWRpc2FibGVkJzogJ3RydWUnIH1cbiAgICAgICAgOiB7fVxuICAgICkpXG5cbiAgICBjb25zdCBzcGVjdHJ1bURpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIGlmIGVkaXRhYmxlLnZhbHVlID09PSB0cnVlXG4gICAgICByZXR1cm4gWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBvblNwZWN0cnVtUGFuLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHsgcHJldmVudDogdHJ1ZSwgc3RvcDogdHJ1ZSwgbW91c2U6IHRydWUgfVxuICAgICAgXSBdXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHYgPT4ge1xuICAgICAgY29uc3QgbG9jYWxNb2RlbCA9IHBhcnNlTW9kZWwodiB8fCBwcm9wcy5kZWZhdWx0VmFsdWUpXG4gICAgICBpZiAobG9jYWxNb2RlbC5oZXggIT09IG1vZGVsLnZhbHVlLmhleCkge1xuICAgICAgICBtb2RlbC52YWx1ZSA9IGxvY2FsTW9kZWxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuZGVmYXVsdFZhbHVlLCB2ID0+IHtcbiAgICAgIGlmICghcHJvcHMubW9kZWxWYWx1ZSAmJiB2KSB7XG4gICAgICAgIGNvbnN0IGxvY2FsTW9kZWwgPSBwYXJzZU1vZGVsKHYpXG4gICAgICAgIGlmIChsb2NhbE1vZGVsLmhleCAhPT0gbW9kZWwudmFsdWUuaGV4KSB7XG4gICAgICAgICAgbW9kZWwudmFsdWUgPSBsb2NhbE1vZGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTW9kZWwgKHJnYiwgY2hhbmdlKSB7XG4gICAgICAvLyB1cGRhdGUgaW50ZXJuYWxseVxuICAgICAgbW9kZWwudmFsdWUuaGV4ID0gcmdiVG9IZXgocmdiKVxuICAgICAgbW9kZWwudmFsdWUucmdiID0gcmdiVG9TdHJpbmcocmdiKVxuICAgICAgbW9kZWwudmFsdWUuciA9IHJnYi5yXG4gICAgICBtb2RlbC52YWx1ZS5nID0gcmdiLmdcbiAgICAgIG1vZGVsLnZhbHVlLmIgPSByZ2IuYlxuICAgICAgbW9kZWwudmFsdWUuYSA9IHJnYi5hXG5cbiAgICAgIGNvbnN0IHZhbHVlID0gbW9kZWwudmFsdWVbIGlzT3V0cHV0SGV4LnZhbHVlID09PSB0cnVlID8gJ2hleCcgOiAncmdiJyBdXG5cbiAgICAgIC8vIGVtaXQgbmV3IHZhbHVlXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbHVlKVxuICAgICAgY2hhbmdlID09PSB0cnVlICYmIGVtaXQoJ2NoYW5nZScsIHZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlTW9kZWwgKHYpIHtcbiAgICAgIGNvbnN0IGFscGhhID0gZm9yY2VBbHBoYS52YWx1ZSAhPT0gdm9pZCAwXG4gICAgICAgID8gZm9yY2VBbHBoYS52YWx1ZVxuICAgICAgICA6IChcbiAgICAgICAgICAgIHByb3BzLmZvcm1hdE1vZGVsID09PSAnYXV0bydcbiAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgIDogcHJvcHMuZm9ybWF0TW9kZWwuaW5kZXhPZignYScpICE9PSAtMVxuICAgICAgICAgIClcblxuICAgICAgaWYgKHR5cGVvZiB2ICE9PSAnc3RyaW5nJyB8fCB2Lmxlbmd0aCA9PT0gMCB8fCB0ZXN0UGF0dGVybi5hbnlDb2xvcih2LnJlcGxhY2UoLyAvZywgJycpKSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGg6IDAsXG4gICAgICAgICAgczogMCxcbiAgICAgICAgICB2OiAwLFxuICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgZzogMCxcbiAgICAgICAgICBiOiAwLFxuICAgICAgICAgIGE6IGFscGhhID09PSB0cnVlID8gMTAwIDogdm9pZCAwLFxuICAgICAgICAgIGhleDogdm9pZCAwLFxuICAgICAgICAgIHJnYjogdm9pZCAwXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgbW9kZWwgPSB0ZXh0VG9SZ2IodilcblxuICAgICAgaWYgKGFscGhhID09PSB0cnVlICYmIG1vZGVsLmEgPT09IHZvaWQgMCkge1xuICAgICAgICBtb2RlbC5hID0gMTAwXG4gICAgICB9XG5cbiAgICAgIG1vZGVsLmhleCA9IHJnYlRvSGV4KG1vZGVsKVxuICAgICAgbW9kZWwucmdiID0gcmdiVG9TdHJpbmcobW9kZWwpXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG1vZGVsLCByZ2JUb0hzdihtb2RlbCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlU3BlY3RydW0gKGxlZnQsIHRvcCwgY2hhbmdlKSB7XG4gICAgICBjb25zdCBwYW5lbCA9IHNwZWN0cnVtUmVmLnZhbHVlXG4gICAgICBpZiAocGFuZWwgPT09IG51bGwpIHJldHVyblxuXG4gICAgICBjb25zdFxuICAgICAgICB3aWR0aCA9IHBhbmVsLmNsaWVudFdpZHRoLFxuICAgICAgICBoZWlnaHQgPSBwYW5lbC5jbGllbnRIZWlnaHQsXG4gICAgICAgIHJlY3QgPSBwYW5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICBsZXQgeCA9IE1hdGgubWluKHdpZHRoLCBNYXRoLm1heCgwLCBsZWZ0IC0gcmVjdC5sZWZ0KSlcblxuICAgICAgaWYgKCRxLmxhbmcucnRsID09PSB0cnVlKSB7XG4gICAgICAgIHggPSB3aWR0aCAtIHhcbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgeSA9IE1hdGgubWluKGhlaWdodCwgTWF0aC5tYXgoMCwgdG9wIC0gcmVjdC50b3ApKSxcbiAgICAgICAgcyA9IE1hdGgucm91bmQoMTAwICogeCAvIHdpZHRoKSxcbiAgICAgICAgdiA9IE1hdGgucm91bmQoMTAwICogTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgLSh5IC8gaGVpZ2h0KSArIDEpKSksXG4gICAgICAgIHJnYiA9IGhzdlRvUmdiKHtcbiAgICAgICAgICBoOiBtb2RlbC52YWx1ZS5oLFxuICAgICAgICAgIHMsXG4gICAgICAgICAgdixcbiAgICAgICAgICBhOiBoYXNBbHBoYS52YWx1ZSA9PT0gdHJ1ZSA/IG1vZGVsLnZhbHVlLmEgOiB2b2lkIDBcbiAgICAgICAgfSlcblxuICAgICAgbW9kZWwudmFsdWUucyA9IHNcbiAgICAgIG1vZGVsLnZhbHVlLnYgPSB2XG4gICAgICB1cGRhdGVNb2RlbChyZ2IsIGNoYW5nZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkh1ZSAodmFsLCBjaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGggPSBNYXRoLnJvdW5kKHZhbClcbiAgICAgIGNvbnN0IHJnYiA9IGhzdlRvUmdiKHtcbiAgICAgICAgaCxcbiAgICAgICAgczogbW9kZWwudmFsdWUucyxcbiAgICAgICAgdjogbW9kZWwudmFsdWUudixcbiAgICAgICAgYTogaGFzQWxwaGEudmFsdWUgPT09IHRydWUgPyBtb2RlbC52YWx1ZS5hIDogdm9pZCAwXG4gICAgICB9KVxuXG4gICAgICBtb2RlbC52YWx1ZS5oID0gaFxuICAgICAgdXBkYXRlTW9kZWwocmdiLCBjaGFuZ2UpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25IdWVDaGFuZ2UgKHZhbCkge1xuICAgICAgb25IdWUodmFsLCB0cnVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTnVtZXJpY0NoYW5nZSAodmFsdWUsIGZvcm1hdE1vZGVsLCBtYXgsIGV2dCwgY2hhbmdlKSB7XG4gICAgICBldnQgIT09IHZvaWQgMCAmJiBzdG9wKGV2dClcblxuICAgICAgaWYgKCEvXlswLTldKyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIGNoYW5nZSA9PT0gdHJ1ZSAmJiBwcm94eS4kZm9yY2VVcGRhdGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsID0gTWF0aC5mbG9vcihOdW1iZXIodmFsdWUpKVxuXG4gICAgICBpZiAodmFsIDwgMCB8fCB2YWwgPiBtYXgpIHtcbiAgICAgICAgY2hhbmdlID09PSB0cnVlICYmIHByb3h5LiRmb3JjZVVwZGF0ZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCByZ2IgPSB7XG4gICAgICAgIHI6IGZvcm1hdE1vZGVsID09PSAncicgPyB2YWwgOiBtb2RlbC52YWx1ZS5yLFxuICAgICAgICBnOiBmb3JtYXRNb2RlbCA9PT0gJ2cnID8gdmFsIDogbW9kZWwudmFsdWUuZyxcbiAgICAgICAgYjogZm9ybWF0TW9kZWwgPT09ICdiJyA/IHZhbCA6IG1vZGVsLnZhbHVlLmIsXG4gICAgICAgIGE6IGhhc0FscGhhLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAoZm9ybWF0TW9kZWwgPT09ICdhJyA/IHZhbCA6IG1vZGVsLnZhbHVlLmEpXG4gICAgICAgICAgOiB2b2lkIDBcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdE1vZGVsICE9PSAnYScpIHtcbiAgICAgICAgY29uc3QgaHN2ID0gcmdiVG9Ic3YocmdiKVxuICAgICAgICBtb2RlbC52YWx1ZS5oID0gaHN2LmhcbiAgICAgICAgbW9kZWwudmFsdWUucyA9IGhzdi5zXG4gICAgICAgIG1vZGVsLnZhbHVlLnYgPSBoc3YudlxuICAgICAgfVxuXG4gICAgICB1cGRhdGVNb2RlbChyZ2IsIGNoYW5nZSlcblxuICAgICAgaWYgKGNoYW5nZSAhPT0gdHJ1ZSAmJiBldnQ/LnRhcmdldC5zZWxlY3Rpb25FbmQgIT09IHZvaWQgMCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGV2dC50YXJnZXQuc2VsZWN0aW9uRW5kXG4gICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBldnQudGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKGluZGV4LCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkVkaXRvckNoYW5nZSAoZXZ0LCBjaGFuZ2UpIHtcbiAgICAgIGxldCByZ2JcbiAgICAgIGNvbnN0IGlucCA9IGV2dC50YXJnZXQudmFsdWVcblxuICAgICAgc3RvcChldnQpXG5cbiAgICAgIGlmICh0b3BWaWV3LnZhbHVlID09PSAnaGV4Jykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaW5wLmxlbmd0aCAhPT0gKGhhc0FscGhhLnZhbHVlID09PSB0cnVlID8gOSA6IDcpXG4gICAgICAgICAgfHwgIS9eI1swLTlBLUZhLWZdKyQvLnRlc3QoaW5wKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmdiID0gaGV4VG9SZ2IoaW5wKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBtb2RlbFxuXG4gICAgICAgIGlmICghaW5wLmVuZHNXaXRoKCcpJykpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhhc0FscGhhLnZhbHVlICE9PSB0cnVlICYmIGlucC5zdGFydHNXaXRoKCdyZ2IoJykpIHtcbiAgICAgICAgICBtb2RlbCA9IGlucC5zdWJzdHJpbmcoNCwgaW5wLmxlbmd0aCAtIDEpLnNwbGl0KCcsJykubWFwKG4gPT4gcGFyc2VJbnQobiwgMTApKVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbW9kZWwubGVuZ3RoICE9PSAzXG4gICAgICAgICAgICB8fCAhL15yZ2JcXChbMC05XXsxLDN9LFswLTldezEsM30sWzAtOV17MSwzfVxcKSQvLnRlc3QoaW5wKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGFzQWxwaGEudmFsdWUgPT09IHRydWUgJiYgaW5wLnN0YXJ0c1dpdGgoJ3JnYmEoJykpIHtcbiAgICAgICAgICBtb2RlbCA9IGlucC5zdWJzdHJpbmcoNSwgaW5wLmxlbmd0aCAtIDEpLnNwbGl0KCcsJylcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG1vZGVsLmxlbmd0aCAhPT0gNFxuICAgICAgICAgICAgfHwgIS9ecmdiYVxcKFswLTldezEsM30sWzAtOV17MSwzfSxbMC05XXsxLDN9LCgwfDBcXC5bMC05XStbMS05XXwwXFwuWzEtOV0rfDEpXFwpJC8udGVzdChpbnApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gcGFyc2VJbnQobW9kZWxbIGkgXSwgMTApXG4gICAgICAgICAgICBpZiAodiA8IDAgfHwgdiA+IDI1NSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kZWxbIGkgXSA9IHZcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB2ID0gcGFyc2VGbG9hdChtb2RlbFsgMyBdKVxuICAgICAgICAgIGlmICh2IDwgMCB8fCB2ID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgbW9kZWxbIDMgXSA9IHZcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZGVsWyAwIF0gPCAwIHx8IG1vZGVsWyAwIF0gPiAyNTVcbiAgICAgICAgICB8fCBtb2RlbFsgMSBdIDwgMCB8fCBtb2RlbFsgMSBdID4gMjU1XG4gICAgICAgICAgfHwgbW9kZWxbIDIgXSA8IDAgfHwgbW9kZWxbIDIgXSA+IDI1NVxuICAgICAgICAgIHx8IChoYXNBbHBoYS52YWx1ZSA9PT0gdHJ1ZSAmJiAobW9kZWxbIDMgXSA8IDAgfHwgbW9kZWxbIDMgXSA+IDEpKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmdiID0ge1xuICAgICAgICAgIHI6IG1vZGVsWyAwIF0sXG4gICAgICAgICAgZzogbW9kZWxbIDEgXSxcbiAgICAgICAgICBiOiBtb2RlbFsgMiBdLFxuICAgICAgICAgIGE6IGhhc0FscGhhLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICA/IG1vZGVsWyAzIF0gKiAxMDBcbiAgICAgICAgICAgIDogdm9pZCAwXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgaHN2ID0gcmdiVG9Ic3YocmdiKVxuICAgICAgbW9kZWwudmFsdWUuaCA9IGhzdi5oXG4gICAgICBtb2RlbC52YWx1ZS5zID0gaHN2LnNcbiAgICAgIG1vZGVsLnZhbHVlLnYgPSBoc3YudlxuXG4gICAgICB1cGRhdGVNb2RlbChyZ2IsIGNoYW5nZSlcblxuICAgICAgaWYgKGNoYW5nZSAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGV2dC50YXJnZXQuc2VsZWN0aW9uRW5kXG4gICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBldnQudGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKGluZGV4LCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhbGV0dGVQaWNrIChjb2xvcikge1xuICAgICAgY29uc3QgZGVmID0gcGFyc2VNb2RlbChjb2xvcilcbiAgICAgIGNvbnN0IHJnYiA9IHsgcjogZGVmLnIsIGc6IGRlZi5nLCBiOiBkZWYuYiwgYTogZGVmLmEgfVxuXG4gICAgICBpZiAocmdiLmEgPT09IHZvaWQgMCkge1xuICAgICAgICByZ2IuYSA9IG1vZGVsLnZhbHVlLmFcbiAgICAgIH1cblxuICAgICAgbW9kZWwudmFsdWUuaCA9IGRlZi5oXG4gICAgICBtb2RlbC52YWx1ZS5zID0gZGVmLnNcbiAgICAgIG1vZGVsLnZhbHVlLnYgPSBkZWYudlxuXG4gICAgICB1cGRhdGVNb2RlbChyZ2IsIHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TcGVjdHJ1bVBhbiAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0LmlzRmluYWwpIHtcbiAgICAgICAgY2hhbmdlU3BlY3RydW0oXG4gICAgICAgICAgZXZ0LnBvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgZXZ0LnBvc2l0aW9uLnRvcCxcbiAgICAgICAgICB0cnVlXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvblNwZWN0cnVtQ2hhbmdlKGV2dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvblNwZWN0cnVtQ2hhbmdlID0gdGhyb3R0bGUoXG4gICAgICBldnQgPT4geyBjaGFuZ2VTcGVjdHJ1bShldnQucG9zaXRpb24ubGVmdCwgZXZ0LnBvc2l0aW9uLnRvcCkgfSxcbiAgICAgIDIwXG4gICAgKVxuXG4gICAgZnVuY3Rpb24gb25TcGVjdHJ1bUNsaWNrIChldnQpIHtcbiAgICAgIGNoYW5nZVNwZWN0cnVtKFxuICAgICAgICBldnQucGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgIGV2dC5wYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQWN0aXZhdGUgKGV2dCkge1xuICAgICAgY2hhbmdlU3BlY3RydW0oXG4gICAgICAgIGV2dC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgZXZ0LnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRXJyb3JJY29uICh2YWwpIHtcbiAgICAgIC8vIHdlIE1VU1QgYXZvaWQgdnVlIHRyaWdnZXJpbmcgYSByZW5kZXIsXG4gICAgICAvLyBzbyBtYW51YWxseSBjaGFuZ2luZyB0aGlzXG4gICAgICBpZiAoZXJyb3JJY29uUmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGVycm9ySWNvblJlZi52YWx1ZS4kZWwuc3R5bGUub3BhY2l0eSA9IHZhbCA/IDEgOiAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VG9wVmlldyAodmFsKSB7XG4gICAgICB0b3BWaWV3LnZhbHVlID0gdmFsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SGVhZGVyICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW11cblxuICAgICAgcHJvcHMubm9IZWFkZXJUYWJzICE9PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUVRhYnMsIHtcbiAgICAgICAgICBjbGFzczogJ3EtY29sb3ItcGlja2VyX19oZWFkZXItdGFicycsXG4gICAgICAgICAgbW9kZWxWYWx1ZTogdG9wVmlldy52YWx1ZSxcbiAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICBhbGlnbjogJ2p1c3RpZnknLFxuICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogc2V0VG9wVmlld1xuICAgICAgICB9LCAoKSA9PiBbXG4gICAgICAgICAgaChRVGFiLCB7XG4gICAgICAgICAgICBsYWJlbDogJ0hFWCcgKyAoaGFzQWxwaGEudmFsdWUgPT09IHRydWUgPyAnQScgOiAnJyksXG4gICAgICAgICAgICBuYW1lOiAnaGV4JyxcbiAgICAgICAgICAgIHJpcHBsZTogZmFsc2VcbiAgICAgICAgICB9KSxcblxuICAgICAgICAgIGgoUVRhYiwge1xuICAgICAgICAgICAgbGFiZWw6ICdSR0InICsgKGhhc0FscGhhLnZhbHVlID09PSB0cnVlID8gJ0EnIDogJycpLFxuICAgICAgICAgICAgbmFtZTogJ3JnYicsXG4gICAgICAgICAgICByaXBwbGU6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIClcblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1jb2xvci1waWNrZXJfX2hlYWRlci1iYW5uZXIgcm93IGZsZXgtY2VudGVyIG5vLXdyYXAnXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdpbnB1dCcsIHtcbiAgICAgICAgICAgIGNsYXNzOiAnZml0JyxcbiAgICAgICAgICAgIHZhbHVlOiBtb2RlbC52YWx1ZVsgdG9wVmlldy52YWx1ZSBdLFxuICAgICAgICAgICAgLi4uKGVkaXRhYmxlLnZhbHVlICE9PSB0cnVlXG4gICAgICAgICAgICAgID8geyByZWFkb25seTogdHJ1ZSB9XG4gICAgICAgICAgICAgIDoge31cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAuLi5nZXRDYWNoZSgndG9wSW4nLCB7XG4gICAgICAgICAgICAgIG9uSW5wdXQ6IGV2dCA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRXJyb3JJY29uKG9uRWRpdG9yQ2hhbmdlKGV2dCkgPT09IHRydWUpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBzdG9wLFxuICAgICAgICAgICAgICBvbkJsdXI6IGV2dCA9PiB7XG4gICAgICAgICAgICAgICAgb25FZGl0b3JDaGFuZ2UoZXZ0LCB0cnVlKSA9PT0gdHJ1ZSAmJiBwcm94eS4kZm9yY2VVcGRhdGUoKVxuICAgICAgICAgICAgICAgIHVwZGF0ZUVycm9ySWNvbihmYWxzZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcblxuICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgIHJlZjogZXJyb3JJY29uUmVmLFxuICAgICAgICAgICAgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9fZXJyb3ItaWNvbiBhYnNvbHV0ZSBuby1wb2ludGVyLWV2ZW50cycsXG4gICAgICAgICAgICBuYW1lOiAkcS5pY29uU2V0LnR5cGUubmVnYXRpdmVcbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ3EtY29sb3ItcGlja2VyX19oZWFkZXIgcmVsYXRpdmUtcG9zaXRpb24gb3ZlcmZsb3ctaGlkZGVuJ1xuICAgICAgfSwgW1xuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1jb2xvci1waWNrZXJfX2hlYWRlci1iZyBhYnNvbHV0ZS1mdWxsJyB9KSxcblxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IGhlYWRlckNsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBjdXJyZW50QmdDb2xvci52YWx1ZVxuICAgICAgICB9LCBjaGlsZClcbiAgICAgIF0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICByZXR1cm4gaChRVGFiUGFuZWxzLCB7XG4gICAgICAgIG1vZGVsVmFsdWU6IHZpZXcudmFsdWUsXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlXG4gICAgICB9LCAoKSA9PiBbXG4gICAgICAgIGgoUVRhYlBhbmVsLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9fc3BlY3RydW0tdGFiIG92ZXJmbG93LWhpZGRlbicsXG4gICAgICAgICAgbmFtZTogJ3NwZWN0cnVtJ1xuICAgICAgICB9LCBnZXRTcGVjdHJ1bVRhYiksXG5cbiAgICAgICAgaChRVGFiUGFuZWwsIHtcbiAgICAgICAgICBjbGFzczogJ3EtcGEtbWQgcS1jb2xvci1waWNrZXJfX3R1bmUtdGFiJyxcbiAgICAgICAgICBuYW1lOiAndHVuZSdcbiAgICAgICAgfSwgZ2V0VHVuZVRhYiksXG5cbiAgICAgICAgaChRVGFiUGFuZWwsIHtcbiAgICAgICAgICBjbGFzczogJ3EtY29sb3ItcGlja2VyX19wYWxldHRlLXRhYicsXG4gICAgICAgICAgbmFtZTogJ3BhbGV0dGUnXG4gICAgICAgIH0sIGdldFBhbGV0dGVUYWIpXG4gICAgICBdKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFZpZXcgKHZhbCkge1xuICAgICAgdmlldy52YWx1ZSA9IHZhbFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEZvb3RlciAoKSB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ3EtY29sb3ItcGlja2VyX19mb290ZXIgcmVsYXRpdmUtcG9zaXRpb24gb3ZlcmZsb3ctaGlkZGVuJ1xuICAgICAgfSwgW1xuICAgICAgICBoKFFUYWJzLCB7XG4gICAgICAgICAgY2xhc3M6ICdhYnNvbHV0ZS1mdWxsJyxcbiAgICAgICAgICBtb2RlbFZhbHVlOiB2aWV3LnZhbHVlLFxuICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgIGFsaWduOiAnanVzdGlmeScsXG4gICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiBzZXRWaWV3XG4gICAgICAgIH0sICgpID0+IFtcbiAgICAgICAgICBoKFFUYWIsIHtcbiAgICAgICAgICAgIGljb246ICRxLmljb25TZXQuY29sb3JQaWNrZXIuc3BlY3RydW0sXG4gICAgICAgICAgICBuYW1lOiAnc3BlY3RydW0nLFxuICAgICAgICAgICAgcmlwcGxlOiBmYWxzZVxuICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgaChRVGFiLCB7XG4gICAgICAgICAgICBpY29uOiAkcS5pY29uU2V0LmNvbG9yUGlja2VyLnR1bmUsXG4gICAgICAgICAgICBuYW1lOiAndHVuZScsXG4gICAgICAgICAgICByaXBwbGU6IGZhbHNlXG4gICAgICAgICAgfSksXG5cbiAgICAgICAgICBoKFFUYWIsIHtcbiAgICAgICAgICAgIGljb246ICRxLmljb25TZXQuY29sb3JQaWNrZXIucGFsZXR0ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwYWxldHRlJyxcbiAgICAgICAgICAgIHJpcHBsZTogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTcGVjdHJ1bVRhYiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICByZWY6IHNwZWN0cnVtUmVmLFxuICAgICAgICBjbGFzczogJ3EtY29sb3ItcGlja2VyX19zcGVjdHJ1bSBub24tc2VsZWN0YWJsZSByZWxhdGl2ZS1wb3NpdGlvbiBjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICArIChlZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSA/ICcgcmVhZG9ubHknIDogJycpLFxuICAgICAgICBzdHlsZTogc3BlY3RydW1TdHlsZS52YWx1ZSxcbiAgICAgICAgLi4uKGVkaXRhYmxlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6IG9uU3BlY3RydW1DbGljayxcbiAgICAgICAgICAgICAgb25Nb3VzZWRvd246IG9uQWN0aXZhdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgcGFkZGluZ0JvdHRvbTogJzEwMCUnIH0gfSksXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9fc3BlY3RydW0td2hpdGUgYWJzb2x1dGUtZnVsbCcgfSksXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9fc3BlY3RydW0tYmxhY2sgYWJzb2x1dGUtZnVsbCcgfSksXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ2Fic29sdXRlJyxcbiAgICAgICAgICBzdHlsZTogc3BlY3RydW1Qb2ludGVyU3R5bGUudmFsdWVcbiAgICAgICAgfSwgW1xuICAgICAgICAgIG1vZGVsLnZhbHVlLmhleCAhPT0gdm9pZCAwXG4gICAgICAgICAgICA/IGgoJ2RpdicsIHsgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9fc3BlY3RydW0tY2lyY2xlJyB9KVxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgIF0pXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHNsaWRlcnMgPSBbXG4gICAgICAgIGgoUVNsaWRlciwge1xuICAgICAgICAgIGNsYXNzOiAncS1jb2xvci1waWNrZXJfX2h1ZSBub24tc2VsZWN0YWJsZScsXG4gICAgICAgICAgbW9kZWxWYWx1ZTogbW9kZWwudmFsdWUuaCxcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAzNjAsXG4gICAgICAgICAgdHJhY2tTaXplOiAnOHB4JyxcbiAgICAgICAgICBpbm5lclRyYWNrQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgc2VsZWN0aW9uQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgcmVhZG9ubHk6IGVkaXRhYmxlLnZhbHVlICE9PSB0cnVlLFxuICAgICAgICAgIHRodW1iUGF0aCxcbiAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IG9uSHVlLFxuICAgICAgICAgIG9uQ2hhbmdlOiBvbkh1ZUNoYW5nZVxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBoYXNBbHBoYS52YWx1ZSA9PT0gdHJ1ZSAmJiBzbGlkZXJzLnB1c2goXG4gICAgICAgIGgoUVNsaWRlciwge1xuICAgICAgICAgIGNsYXNzOiAncS1jb2xvci1waWNrZXJfX2FscGhhIG5vbi1zZWxlY3RhYmxlJyxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBtb2RlbC52YWx1ZS5hLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB0cmFja1NpemU6ICc4cHgnLFxuICAgICAgICAgIHRyYWNrQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgaW5uZXJUcmFja0NvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIHNlbGVjdGlvbkNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIHRyYWNrSW1nOiBhbHBoYVRyYWNrSW1nLFxuICAgICAgICAgIHJlYWRvbmx5OiBlZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSxcbiAgICAgICAgICBoaWRlU2VsZWN0aW9uOiB0cnVlLFxuICAgICAgICAgIHRodW1iUGF0aCxcbiAgICAgICAgICAuLi5nZXRDYWNoZSgnYWxwaGFTbGlkZScsIHtcbiAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogdmFsdWUgPT4gb25OdW1lcmljQ2hhbmdlKHZhbHVlLCAnYScsIDEwMCksXG4gICAgICAgICAgICBvbkNoYW5nZTogdmFsdWUgPT4gb25OdW1lcmljQ2hhbmdlKHZhbHVlLCAnYScsIDEwMCwgdm9pZCAwLCB0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIGhEaXIoJ2RpdicsIGRhdGEsIGNoaWxkLCAnc3BlYycsIGVkaXRhYmxlLnZhbHVlLCAoKSA9PiBzcGVjdHJ1bURpcmVjdGl2ZS52YWx1ZSksXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9fc2xpZGVycycgfSwgc2xpZGVycylcbiAgICAgIF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUdW5lVGFiICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdyb3cgaXRlbXMtY2VudGVyIG5vLXdyYXAnIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCAnUicpLFxuICAgICAgICAgIGgoUVNsaWRlciwge1xuICAgICAgICAgICAgbW9kZWxWYWx1ZTogbW9kZWwudmFsdWUucixcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMjU1LFxuICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgcmVhZG9ubHk6IGVkaXRhYmxlLnZhbHVlICE9PSB0cnVlLFxuICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ3JTbGlkZScsIHtcbiAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiB2YWx1ZSA9PiBvbk51bWVyaWNDaGFuZ2UodmFsdWUsICdyJywgMjU1KSxcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IG9uTnVtZXJpY0NoYW5nZSh2YWx1ZSwgJ3InLCAyNTUsIHZvaWQgMCwgdHJ1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaCgnaW5wdXQnLCB7XG4gICAgICAgICAgICB2YWx1ZTogbW9kZWwudmFsdWUucixcbiAgICAgICAgICAgIG1heGxlbmd0aDogMyxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBlZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBzdG9wLFxuICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ3JJbicsIHtcbiAgICAgICAgICAgICAgb25JbnB1dDogZXZ0ID0+IG9uTnVtZXJpY0NoYW5nZShldnQudGFyZ2V0LnZhbHVlLCAncicsIDI1NSwgZXZ0KSxcbiAgICAgICAgICAgICAgb25CbHVyOiBldnQgPT4gb25OdW1lcmljQ2hhbmdlKGV2dC50YXJnZXQudmFsdWUsICdyJywgMjU1LCBldnQsIHRydWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdyb3cgaXRlbXMtY2VudGVyIG5vLXdyYXAnIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCAnRycpLFxuICAgICAgICAgIGgoUVNsaWRlciwge1xuICAgICAgICAgICAgbW9kZWxWYWx1ZTogbW9kZWwudmFsdWUuZyxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMjU1LFxuICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICByZWFkb25seTogZWRpdGFibGUudmFsdWUgIT09IHRydWUsXG4gICAgICAgICAgICAuLi5nZXRDYWNoZSgnZ1NsaWRlJywge1xuICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IHZhbHVlID0+IG9uTnVtZXJpY0NoYW5nZSh2YWx1ZSwgJ2cnLCAyNTUpLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogdmFsdWUgPT4gb25OdW1lcmljQ2hhbmdlKHZhbHVlLCAnZycsIDI1NSwgdm9pZCAwLCB0cnVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoKCdpbnB1dCcsIHtcbiAgICAgICAgICAgIHZhbHVlOiBtb2RlbC52YWx1ZS5nLFxuICAgICAgICAgICAgbWF4bGVuZ3RoOiAzLFxuICAgICAgICAgICAgcmVhZG9ubHk6IGVkaXRhYmxlLnZhbHVlICE9PSB0cnVlLFxuICAgICAgICAgICAgb25DaGFuZ2U6IHN0b3AsXG4gICAgICAgICAgICAuLi5nZXRDYWNoZSgnZ0luJywge1xuICAgICAgICAgICAgICBvbklucHV0OiBldnQgPT4gb25OdW1lcmljQ2hhbmdlKGV2dC50YXJnZXQudmFsdWUsICdnJywgMjU1LCBldnQpLFxuICAgICAgICAgICAgICBvbkJsdXI6IGV2dCA9PiBvbk51bWVyaWNDaGFuZ2UoZXZ0LnRhcmdldC52YWx1ZSwgJ2cnLCAyNTUsIGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3JvdyBpdGVtcy1jZW50ZXIgbm8td3JhcCcgfSwgW1xuICAgICAgICAgIGgoJ2RpdicsICdCJyksXG4gICAgICAgICAgaChRU2xpZGVyLCB7XG4gICAgICAgICAgICBtb2RlbFZhbHVlOiBtb2RlbC52YWx1ZS5iLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAyNTUsXG4gICAgICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICAgICAgcmVhZG9ubHk6IGVkaXRhYmxlLnZhbHVlICE9PSB0cnVlLFxuICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ2JTbGlkZScsIHtcbiAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiB2YWx1ZSA9PiBvbk51bWVyaWNDaGFuZ2UodmFsdWUsICdiJywgMjU1KSxcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IG9uTnVtZXJpY0NoYW5nZSh2YWx1ZSwgJ2InLCAyNTUsIHZvaWQgMCwgdHJ1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaCgnaW5wdXQnLCB7XG4gICAgICAgICAgICB2YWx1ZTogbW9kZWwudmFsdWUuYixcbiAgICAgICAgICAgIG1heGxlbmd0aDogMyxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBlZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBzdG9wLFxuICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ2JJbicsIHtcbiAgICAgICAgICAgICAgb25JbnB1dDogZXZ0ID0+IG9uTnVtZXJpY0NoYW5nZShldnQudGFyZ2V0LnZhbHVlLCAnYicsIDI1NSwgZXZ0KSxcbiAgICAgICAgICAgICAgb25CbHVyOiBldnQgPT4gb25OdW1lcmljQ2hhbmdlKGV2dC50YXJnZXQudmFsdWUsICdiJywgMjU1LCBldnQsIHRydWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGhhc0FscGhhLnZhbHVlID09PSB0cnVlID8gaCgnZGl2JywgeyBjbGFzczogJ3JvdyBpdGVtcy1jZW50ZXIgbm8td3JhcCcgfSwgW1xuICAgICAgICAgIGgoJ2RpdicsICdBJyksXG4gICAgICAgICAgaChRU2xpZGVyLCB7XG4gICAgICAgICAgICBtb2RlbFZhbHVlOiBtb2RlbC52YWx1ZS5hLFxuICAgICAgICAgICAgY29sb3I6ICdncmV5JyxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBlZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSxcbiAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgIC4uLmdldENhY2hlKCdhU2xpZGUnLCB7XG4gICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogdmFsdWUgPT4gb25OdW1lcmljQ2hhbmdlKHZhbHVlLCAnYScsIDEwMCksXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiBvbk51bWVyaWNDaGFuZ2UodmFsdWUsICdhJywgMTAwLCB2b2lkIDAsIHRydWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGgoJ2lucHV0Jywge1xuICAgICAgICAgICAgdmFsdWU6IG1vZGVsLnZhbHVlLmEsXG4gICAgICAgICAgICBtYXhsZW5ndGg6IDMsXG4gICAgICAgICAgICByZWFkb25seTogZWRpdGFibGUudmFsdWUgIT09IHRydWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogc3RvcCxcbiAgICAgICAgICAgIC4uLmdldENhY2hlKCdhSW4nLCB7XG4gICAgICAgICAgICAgIG9uSW5wdXQ6IGV2dCA9PiBvbk51bWVyaWNDaGFuZ2UoZXZ0LnRhcmdldC52YWx1ZSwgJ2EnLCAxMDAsIGV2dCksXG4gICAgICAgICAgICAgIG9uQmx1cjogZXZ0ID0+IG9uTnVtZXJpY0NoYW5nZShldnQudGFyZ2V0LnZhbHVlLCAnYScsIDEwMCwgZXZ0LCB0cnVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdKSA6IG51bGxcbiAgICAgIF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYWxldHRlVGFiICgpIHtcbiAgICAgIGNvbnN0IGZuID0gY29sb3IgPT4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ3EtY29sb3ItcGlja2VyX19jdWJlIGNvbC1hdXRvJyxcbiAgICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9LFxuICAgICAgICAuLi4oXG4gICAgICAgICAgZWRpdGFibGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAgID8gZ2V0Q2FjaGUoJ3BhbGV0dGUjJyArIGNvbG9yLCB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHsgb25QYWxldHRlUGljayhjb2xvcikgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDoge31cbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncm93IGl0ZW1zLWNlbnRlciBxLWNvbG9yLXBpY2tlcl9fcGFsZXR0ZS1yb3dzJ1xuICAgICAgICAgICAgKyAoZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyAnIHEtY29sb3ItcGlja2VyX19wYWxldHRlLXJvd3MtLWVkaXRhYmxlJyA6ICcnKVxuICAgICAgICB9LCBjb21wdXRlZFBhbGV0dGUudmFsdWUubWFwKGZuKSlcbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBbIGdldENvbnRlbnQoKSBdXG5cbiAgICAgIGlmIChwcm9wcy5uYW1lICE9PSB2b2lkIDAgJiYgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgICBpbmplY3RGb3JtSW5wdXQoY2hpbGQsICdwdXNoJylcbiAgICAgIH1cblxuICAgICAgcHJvcHMubm9IZWFkZXIgIT09IHRydWUgJiYgY2hpbGQudW5zaGlmdChcbiAgICAgICAgZ2V0SGVhZGVyKClcbiAgICAgIClcblxuICAgICAgcHJvcHMubm9Gb290ZXIgIT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgZ2V0Rm9vdGVyKClcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWVcbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRRGlhbG9nIGZyb20gJy4uL2RpYWxvZy9RRGlhbG9nLmpzJ1xuaW1wb3J0IFFNZW51IGZyb20gJy4uL21lbnUvUU1lbnUuanMnXG5cbmltcG9ydCB1c2VBbmNob3IsIHsgdXNlQW5jaG9yUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1hbmNob3IvdXNlLWFuY2hvci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaW5qZWN0UHJvcCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuaW5qZWN0LW9iai1wcm9wL2luamVjdC1vYmotcHJvcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQb3B1cFByb3h5JyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZUFuY2hvclByb3BzLFxuXG4gICAgYnJlYWtwb2ludDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogNDUwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdzaG93JywgJ2hpZGUnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0LCBhdHRycyB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gICAgY29uc3Qgc2hvd2luZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBwb3B1cFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSBjb21wdXRlZCgoKSA9PiBwYXJzZUludChwcm9wcy5icmVha3BvaW50LCAxMCkpXG5cbiAgICBjb25zdCB7IGNhblNob3cgfSA9IHVzZUFuY2hvcih7IHNob3dpbmcgfSlcblxuICAgIGZ1bmN0aW9uIGdldFR5cGUgKCkge1xuICAgICAgcmV0dXJuICRxLnNjcmVlbi53aWR0aCA8IGJyZWFrcG9pbnQudmFsdWUgfHwgJHEuc2NyZWVuLmhlaWdodCA8IGJyZWFrcG9pbnQudmFsdWVcbiAgICAgICAgPyAnZGlhbG9nJ1xuICAgICAgICA6ICdtZW51J1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGUgPSByZWYoZ2V0VHlwZSgpKVxuXG4gICAgY29uc3QgcG9wdXBQcm9wcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHR5cGUudmFsdWUgPT09ICdtZW51JyA/IHsgbWF4SGVpZ2h0OiAnOTl2aCcgfSA6IHt9KVxuICAgIClcblxuICAgIHdhdGNoKCgpID0+IGdldFR5cGUoKSwgdmFsID0+IHtcbiAgICAgIGlmIChzaG93aW5nLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHR5cGUudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb25TaG93IChldnQpIHtcbiAgICAgIHNob3dpbmcudmFsdWUgPSB0cnVlXG4gICAgICBlbWl0KCdzaG93JywgZXZ0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSGlkZSAoZXZ0KSB7XG4gICAgICBzaG93aW5nLnZhbHVlID0gZmFsc2VcbiAgICAgIHR5cGUudmFsdWUgPSBnZXRUeXBlKClcbiAgICAgIGVtaXQoJ2hpZGUnLCBldnQpXG4gICAgfVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgc2hvdyAoZXZ0KSB7IGNhblNob3coZXZ0KSA9PT0gdHJ1ZSAmJiBwb3B1cFJlZi52YWx1ZS5zaG93KGV2dCkgfSxcbiAgICAgIGhpZGUgKGV2dCkgeyBwb3B1cFJlZi52YWx1ZS5oaWRlKGV2dCkgfSxcbiAgICAgIHRvZ2dsZSAoZXZ0KSB7IHBvcHVwUmVmLnZhbHVlLnRvZ2dsZShldnQpIH1cbiAgICB9KVxuXG4gICAgaW5qZWN0UHJvcChwcm94eSwgJ2N1cnJlbnRDb21wb25lbnQnLCAoKSA9PiAoe1xuICAgICAgdHlwZTogdHlwZS52YWx1ZSxcbiAgICAgIHJlZjogcG9wdXBSZWYudmFsdWVcbiAgICB9KSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICByZWY6IHBvcHVwUmVmLFxuICAgICAgICAuLi5wb3B1cFByb3BzLnZhbHVlLFxuICAgICAgICAuLi5hdHRycyxcbiAgICAgICAgb25TaG93LFxuICAgICAgICBvbkhpZGVcbiAgICAgIH1cblxuICAgICAgbGV0IGNvbXBvbmVudFxuXG4gICAgICBpZiAodHlwZS52YWx1ZSA9PT0gJ2RpYWxvZycpIHtcbiAgICAgICAgY29tcG9uZW50ID0gUURpYWxvZ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudCA9IFFNZW51XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0LFxuICAgICAgICAgIGNvbnRleHRNZW51OiBwcm9wcy5jb250ZXh0TWVudSxcbiAgICAgICAgICBub1BhcmVudEV2ZW50OiB0cnVlLFxuICAgICAgICAgIHNlcGFyYXRlQ2xvc2VQb3B1cDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaChjb21wb25lbnQsIGRhdGEsIHNsb3RzLmRlZmF1bHQpXG4gICAgfVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8RHJhZ0VsZW1lbnRcbiAgICB0eXBlPVwiY29sb3JcIlxuICAgIDpkYXRhPVwiY29sb3IgPz8gJydcIj5cbiAgICA8cS1idG5cbiAgICAgIHNpemU9XCJ4c1wiXG4gICAgICBkZW5zZSBmbGF0IHJvdW5kXG4gICAgICBpY29uPVwiY29sb3JpemVcIj5cbiAgICAgIDxxLXBvcHVwLXByb3h5PlxuICAgICAgICA8cS1jb2xvclxuICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogJzI0MHB4J31cIlxuICAgICAgICAgIG5vLWhlYWRlclxuICAgICAgICAgIG5vLWZvb3RlclxuICAgICAgICAgIDpwYWxldHRlPVwic3RhbmRhcmRDb2xvckFycmF5XCJcbiAgICAgICAgICBkZWZhdWx0LXZpZXc9XCJwYWxldHRlXCJcbiAgICAgICAgICB2LW1vZGVsPVwiY29sb3JcIlxuICAgICAgICAgIC8+XG4gICAgICA8L3EtcG9wdXAtcHJveHk+XG4gICAgPC9xLWJ0bj5cbiAgPC9EcmFnRWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IERyYWdFbGVtZW50IGZyb20gJy4vRHJhZ0VsZW1lbnQudnVlJ1xuXG4gIGNvbnN0IGNvbG9yID0gZGVmaW5lTW9kZWw8c3RyaW5nIHwgbnVsbD4oKVxuXG4gIGNvbnN0IHN0YW5kYXJkQ29sb3JBcnJheSA9IFtcbiAgICAgIFwiIzk4MDAwMFwiLCBcIiNmZjAwMDBcIiwgXCIjZmY5OTAwXCIsIFwiI2ZmZmYwMFwiLCBcIiMwMGZmMDBcIiwgXCIjMDBmZmZmXCIsIFwiIzRhODZlOFwiLCBcIiMwMDAwZmZcIiwgXCIjOTkwMGZmXCIsIFwiI2ZmMDBmZlwiLFxuICAgICAgXCIjZTZiOGFmXCIsIFwiI2Y0Y2NjY1wiLCBcIiNmY2U1Y2RcIiwgXCIjZmZmMmNjXCIsIFwiI2Q5ZWFkM1wiLCBcIiNkMGUwZTNcIiwgXCIjYzlkYWY4XCIsIFwiI2NmZTJmM1wiLCBcIiNkOWQyZTlcIiwgXCIjZWFkMWRjXCIsXG4gICAgICBcIiNkZDdlNmJcIiwgXCIjZWE5OTk5XCIsIFwiI2Y5Y2I5Y1wiLCBcIiNmZmU1OTlcIiwgXCIjYjZkN2E4XCIsIFwiI2EyYzRjOVwiLCBcIiNhNGMyZjRcIiwgXCIjOWZjNWU4XCIsIFwiI2I0YTdkNlwiLCBcIiNkNWE2YmRcIixcbiAgICAgIFwiI2NjNDEyNVwiLCBcIiNlMDY2NjZcIiwgXCIjZjZiMjZiXCIsIFwiI2ZmZDk2NlwiLCBcIiM5M2M0N2RcIiwgXCIjNzZhNWFmXCIsIFwiIzZkOWVlYlwiLCBcIiM2ZmE4ZGNcIiwgXCIjOGU3Y2MzXCIsIFwiI2MyN2JhMFwiLFxuICAgICAgXCIjYTYxYzAwXCIsIFwiI2NjMDAwMFwiLCBcIiNlNjkxMzhcIiwgXCIjZjFjMjMyXCIsIFwiIzZhYTg0ZlwiLCBcIiM0NTgxOGVcIiwgXCIjM2M3OGQ4XCIsIFwiIzNkODVjNlwiLCBcIiM2NzRlYTdcIiwgXCIjYTY0ZDc5XCIsXG4gICAgICBcIiM4NTIwMGNcIiwgXCIjOTkwMDAwXCIsIFwiI2I0NWYwNlwiLCBcIiNiZjkwMDBcIiwgXCIjMzg3NjFkXCIsIFwiIzEzNGY1Y1wiLCBcIiMxMTU1Y2NcIiwgXCIjMGI1Mzk0XCIsIFwiIzM1MWM3NVwiLCBcIiM3NDFiNDdcIixcbiAgICAgIFwiIzViMGYwMFwiLCBcIiM2NjAwMDBcIiwgXCIjNzgzZjA0XCIsIFwiIzdmNjAwMFwiLCBcIiMyNzRlMTNcIiwgXCIjMGMzNDNkXCIsIFwiIzFjNDU4N1wiLCBcIiMwNzM3NjNcIiwgXCIjMjAxMjRkXCIsIFwiIzRjMTEzMFwiLFxuICAgICAgXCIjMDAwMDAwXCIsIFwiIzQzNDM0M1wiLCBcIiM2NjY2NjZcIiwgXCIjOTk5OTk5XCIsIFwiI2I3YjdiN1wiLCBcIiNjY2NjY2NcIiwgXCIjZDlkOWQ5XCIsIFwiI2VmZWZlZlwiLCBcIiNmM2YzZjNcIiwgXCIjZmZmZmZmXCJcbiAgXVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLnEtY29sb3ItcGlja2VyX19jdWJlICB7XG4gICAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA4JSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnEtY29sb3ItcGlja2VyX19jdWJlOmxhc3Qtb2YtdHlwZTo6YWZ0ZXIgIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBpbnNldDogMDsgLyogRmlsbHMgdGhlIGVudGlyZSBkaXYgKi9cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIC8qIFRoZSBQb2x5Z29uIFBvaW50cyBmb3IgYW4gJ1gnIHNoYXBlICovXG4gICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAlIDAlLCAwJSAxMCUsIDQwJSA1MCUsIDAlIDkwJSwgMTAlIDEwMCUsIDUwJSA2MCUsIDkwJSAxMDAlLCAxMDAlIDkwJSwgNjAlIDUwJSwgMTAwJSAxMCUsIDkwJSAwJSwgNTAlIDQwJSk7XG4gIH1cbiAgLnEtY29sb3ItcGlja2VyX19jdWJlOmhvdmVyICB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0O1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbImRyYWdnaW5nIiwiY2xhc3NlcyIsInJhdGlvIiwiaCIsIm1vZGVsIiwidiIsIl91c2VNb2RlbCIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl93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QUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQ25HO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFDbkc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUNuRztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQ25HO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsSUFBQTs7Ozs7OztzQkFuQ3ZHQyxZQWtCYyxPQUFBLGFBQUEsR0FBQTtBQUFBLElBakJaLE1BQUs7QUFBQSxJQUNKLE1BQU0sT0FBQSxTQUFLO0FBQUEsRUFBQSxHQUFBO0FBQUEscUJBQ1osTUFjUTtBQUFBLE1BZFJDLFlBY1EsTUFBQTtBQUFBLFFBYk4sTUFBSztBQUFBLFFBQ0wsT0FBQTtBQUFBLFFBQU0sTUFBQTtBQUFBLFFBQUssT0FBQTtBQUFBLFFBQ1gsTUFBSztBQUFBLE1BQUEsR0FBQTtBQUFBLHlCQUNMLE1BU2dCO0FBQUEsVUFUaEJBLFlBU2dCLGFBQUEsTUFBQTtBQUFBLFlBQUEsU0FBQUMsUUFSZCxNQU9JO0FBQUEsY0FQSkQsWUFPSSxRQUFBO0FBQUEsZ0JBTkQsT0FBTyxFQUFBLE9BQUEsUUFBQTtBQUFBLGdCQUNSLGFBQUE7QUFBQSxnQkFDQSxhQUFBO0FBQUEsZ0JBQ0MsU0FBUyxPQUFBO0FBQUEsZ0JBQ1YsZ0JBQWE7QUFBQSxnQkFBQSxZQUNKLE9BQUE7QUFBQSxnQkFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxRQUFLO0FBQUEsY0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxM119
