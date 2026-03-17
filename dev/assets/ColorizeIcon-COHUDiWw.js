import { T as TouchPan, a as QResizeObserver, g as getModifierDirections, s as shouldStart } from "./NoteIcon-DqAfl5ZO.js";
import { B as useFormProps, u as useDarkProps, g as getCurrentInstance, b as useDark, r as ref, e as computed, bJ as isNumber, bL as isObject, v as onBeforeUnmount, bm as position, h, D as useFormInject, V as hDir, c as createComponent, b_ as useFormAttrs, w as watch, A as stopAndPrevent, m as useTick, n as useTimeout, ae as onDeactivated, af as onActivated, f as hSlot, X as QIcon, ai as provide, b$ as tabsKey, i as inject, F as emptyRenderFn, P as onMounted, ad as withDirectives, W as Ripple, E as hMergeSlot, al as isKeyCode, aO as shouldIgnoreKey, aN as isDeepEqual, aF as uid, ak as createDirective, x as cleanEvt, as as client, bl as preventDraggable, aJ as noop, y as addEvt, bn as leftClick, T as Transition, c0 as getNormalizedVNodes, c1 as KeepAlive, c2 as testPattern, c3 as throttle, ar as stop, ac as nextTick, az as injectProp, aR as QDialog, I as defineComponent, _ as _export_sfc, R as createElementBlock, M as openBlock, aV as renderSlot, c4 as useModel, L as createBlock, N as withCtx, $ as createVNode, Q as QBtn } from "./index-BO5Be59b.js";
import { f as between, e as clearSelection, j as useAnchorProps, c as useAnchor, Q as QMenu } from "./format-eTA6GB0s.js";
import { r as rtlHasScrollBug } from "./QSelect-P5AJF7vq.js";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "dragelement",
    draggable: "true",
    onDragstart: _cache[0] || (_cache[0] = ($event) => $setup.onDragStart($event))
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 32);
}
const DragElement = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-39a02e10"], ["__file", "DragElement.vue"]]);
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
  DragElement as D,
  QSlider as Q,
  useTabEmits as a,
  useTab as b,
  QTab as c,
  QTabs as d,
  QTabPanel as e,
  QTabPanels as f,
  useTabProps as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JpemVJY29uLUNPSFVEaVd3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlci91c2Utc2xpZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zbGlkZXIvUVNsaWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFicy9RVGFicy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFicy91c2UtdGFiLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJzL1FUYWIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9kaXJlY3RpdmVzL3RvdWNoLXN3aXBlL1RvdWNoU3dpcGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy91c2UtcmVuZGVyLWNhY2hlL3VzZS1yZW5kZXItY2FjaGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1wYW5lbC91c2UtcGFuZWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYi1wYW5lbHMvUVRhYlBhbmVscy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFiLXBhbmVscy9RVGFiUGFuZWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9jb2xvcnMvY29sb3JzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9jb2xvci9RQ29sb3IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3BvcHVwLXByb3h5L1FQb3B1cFByb3h5LmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRHJhZ0VsZW1lbnQudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29sb3JpemVJY29uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFRvdWNoUGFuIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG91Y2gtcGFuL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHsgdXNlRm9ybVByb3BzLCB1c2VGb3JtSW5qZWN0IH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLWZvcm0vcHJpdmF0ZS51c2UtZm9ybS5qcydcblxuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC9mb3JtYXQuanMnXG5pbXBvcnQgeyBwb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50L2V2ZW50LmpzJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMvaXMuanMnXG5pbXBvcnQgeyBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5jb25zdCBtYXJrZXJQcmVmaXhDbGFzcyA9ICdxLXNsaWRlcl9fbWFya2VyLWxhYmVscydcbmNvbnN0IGRlZmF1bHRNYXJrZXJDb252ZXJ0Rm4gPSB2ID0+ICh7IHZhbHVlOiB2IH0pXG5jb25zdCBkZWZhdWx0TWFya2VyTGFiZWxSZW5kZXJGbiA9ICh7IG1hcmtlciB9KSA9PiBoKCdkaXYnLCB7XG4gIGtleTogbWFya2VyLnZhbHVlLFxuICBzdHlsZTogbWFya2VyLnN0eWxlLFxuICBjbGFzczogbWFya2VyLmNsYXNzZXNcbn0sIG1hcmtlci5sYWJlbClcblxuLy8gUEdET1dOLCBMRUZULCBET1dOLCBQR1VQLCBSSUdIVCwgVVBcbmV4cG9ydCBjb25zdCBrZXlDb2RlcyA9IFsgMzQsIDM3LCA0MCwgMzMsIDM5LCAzOCBdXG5cbmV4cG9ydCBjb25zdCB1c2VTbGlkZXJQcm9wcyA9IHtcbiAgLi4udXNlRGFya1Byb3BzLFxuICAuLi51c2VGb3JtUHJvcHMsXG5cbiAgbWluOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDBcbiAgfSxcbiAgbWF4OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEwMFxuICB9LFxuICBpbm5lck1pbjogTnVtYmVyLFxuICBpbm5lck1heDogTnVtYmVyLFxuXG4gIHN0ZXA6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA+PSAwXG4gIH0sXG5cbiAgc25hcDogQm9vbGVhbixcblxuICB2ZXJ0aWNhbDogQm9vbGVhbixcbiAgcmV2ZXJzZTogQm9vbGVhbixcblxuICBjb2xvcjogU3RyaW5nLFxuICBtYXJrZXJMYWJlbHNDbGFzczogU3RyaW5nLFxuXG4gIGxhYmVsOiBCb29sZWFuLFxuICBsYWJlbENvbG9yOiBTdHJpbmcsXG4gIGxhYmVsVGV4dENvbG9yOiBTdHJpbmcsXG4gIGxhYmVsQWx3YXlzOiBCb29sZWFuLFxuICBzd2l0Y2hMYWJlbFNpZGU6IEJvb2xlYW4sXG5cbiAgbWFya2VyczogWyBCb29sZWFuLCBOdW1iZXIgXSxcbiAgbWFya2VyTGFiZWxzOiBbIEJvb2xlYW4sIEFycmF5LCBPYmplY3QsIEZ1bmN0aW9uIF0sXG4gIHN3aXRjaE1hcmtlckxhYmVsc1NpZGU6IEJvb2xlYW4sXG5cbiAgdHJhY2tJbWc6IFN0cmluZyxcbiAgdHJhY2tDb2xvcjogU3RyaW5nLFxuICBpbm5lclRyYWNrSW1nOiBTdHJpbmcsXG4gIGlubmVyVHJhY2tDb2xvcjogU3RyaW5nLFxuICBzZWxlY3Rpb25Db2xvcjogU3RyaW5nLFxuICBzZWxlY3Rpb25JbWc6IFN0cmluZyxcblxuICB0aHVtYlNpemU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJzIwcHgnXG4gIH0sXG4gIHRyYWNrU2l6ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnNHB4J1xuICB9LFxuXG4gIGRpc2FibGU6IEJvb2xlYW4sXG4gIHJlYWRvbmx5OiBCb29sZWFuLFxuICBkZW5zZTogQm9vbGVhbixcblxuICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gIHRodW1iQ29sb3I6IFN0cmluZyxcbiAgdGh1bWJQYXRoOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdNIDQsIDEwIGEgNiw2IDAgMSwwIDEyLDAgYSA2LDYgMCAxLDAgLTEyLDAnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVNsaWRlckVtaXRzID0gWyAncGFuJywgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ2NoYW5nZScgXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyB1cGRhdGVWYWx1ZSwgdXBkYXRlUG9zaXRpb24sIGdldERyYWdnaW5nLCBmb3JtQXR0cnMgfSkge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBzbG90cywgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgY29uc3QgaW5qZWN0Rm9ybUlucHV0ID0gdXNlRm9ybUluamVjdChmb3JtQXR0cnMpXG5cbiAgY29uc3QgYWN0aXZlID0gcmVmKGZhbHNlKVxuICBjb25zdCBwcmV2ZW50Rm9jdXMgPSByZWYoZmFsc2UpXG4gIGNvbnN0IGZvY3VzID0gcmVmKGZhbHNlKVxuICBjb25zdCBkcmFnZ2luZyA9IHJlZihmYWxzZSlcblxuICBjb25zdCBheGlzID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJy0tdicgOiAnLS1oJykpXG4gIGNvbnN0IGxhYmVsU2lkZSA9IGNvbXB1dGVkKCgpID0+ICctJyArIChwcm9wcy5zd2l0Y2hMYWJlbFNpZGUgPT09IHRydWUgPyAnc3dpdGNoZWQnIDogJ3N0YW5kYXJkJykpXG5cbiAgY29uc3QgaXNSZXZlcnNlZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgPyBwcm9wcy5yZXZlcnNlID09PSB0cnVlXG4gICAgICA6IHByb3BzLnJldmVyc2UgIT09ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSlcbiAgKSlcblxuICBjb25zdCBpbm5lck1pbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc05hTihwcm9wcy5pbm5lck1pbikgPT09IHRydWUgfHwgcHJvcHMuaW5uZXJNaW4gPCBwcm9wcy5taW5cbiAgICAgID8gcHJvcHMubWluXG4gICAgICA6IHByb3BzLmlubmVyTWluXG4gICkpXG4gIGNvbnN0IGlubmVyTWF4ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTmFOKHByb3BzLmlubmVyTWF4KSA9PT0gdHJ1ZSB8fCBwcm9wcy5pbm5lck1heCA+IHByb3BzLm1heFxuICAgICAgPyBwcm9wcy5tYXhcbiAgICAgIDogcHJvcHMuaW5uZXJNYXhcbiAgKSlcblxuICBjb25zdCBlZGl0YWJsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIHByb3BzLnJlYWRvbmx5ICE9PSB0cnVlXG4gICAgJiYgaW5uZXJNaW4udmFsdWUgPCBpbm5lck1heC52YWx1ZVxuICApKVxuXG4gIGNvbnN0IHJvdW5kVmFsdWVGbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAocHJvcHMuc3RlcCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHYgPT4gdlxuICAgIH1cblxuICAgIGNvbnN0IGRlY2ltYWxzID0gKFN0cmluZyhwcm9wcy5zdGVwKS50cmltKCkuc3BsaXQoJy4nKVsgMSBdIHx8ICcnKS5sZW5ndGhcbiAgICByZXR1cm4gdiA9PiBwYXJzZUZsb2F0KHYudG9GaXhlZChkZWNpbWFscykpXG4gIH0pXG5cbiAgY29uc3Qga2V5U3RlcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy5zdGVwID09PSAwID8gMSA6IHByb3BzLnN0ZXApKVxuICBjb25zdCB0YWJpbmRleCA9IGNvbXB1dGVkKCgpID0+IChlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSA/IHByb3BzLnRhYmluZGV4IHx8IDAgOiAtMSkpXG5cbiAgY29uc3QgdHJhY2tMZW4gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5tYXggLSBwcm9wcy5taW4pXG4gIGNvbnN0IGlubmVyQmFyTGVuID0gY29tcHV0ZWQoKCkgPT4gaW5uZXJNYXgudmFsdWUgLSBpbm5lck1pbi52YWx1ZSlcblxuICBjb25zdCBpbm5lck1pblJhdGlvID0gY29tcHV0ZWQoKCkgPT4gY29udmVydE1vZGVsVG9SYXRpbyhpbm5lck1pbi52YWx1ZSkpXG4gIGNvbnN0IGlubmVyTWF4UmF0aW8gPSBjb21wdXRlZCgoKSA9PiBjb252ZXJ0TW9kZWxUb1JhdGlvKGlubmVyTWF4LnZhbHVlKSlcblxuICBjb25zdCBwb3NpdGlvblByb3AgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgID8gKGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAnYm90dG9tJyA6ICd0b3AnKVxuICAgICAgOiAoaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcpXG4gICkpXG5cbiAgY29uc3Qgc2l6ZVByb3AgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnaGVpZ2h0JyA6ICd3aWR0aCcpKVxuICBjb25zdCB0aGlja25lc3NQcm9wID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3dpZHRoJyA6ICdoZWlnaHQnKSlcbiAgY29uc3Qgb3JpZW50YXRpb24gPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnKSlcblxuICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgIHJvbGU6ICdzbGlkZXInLFxuICAgICAgJ2FyaWEtdmFsdWVtaW4nOiBpbm5lck1pbi52YWx1ZSxcbiAgICAgICdhcmlhLXZhbHVlbWF4JzogaW5uZXJNYXgudmFsdWUsXG4gICAgICAnYXJpYS1vcmllbnRhdGlvbic6IG9yaWVudGF0aW9uLnZhbHVlLFxuICAgICAgJ2RhdGEtc3RlcCc6IHByb3BzLnN0ZXBcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5yZWFkb25seSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjWyAnYXJpYS1yZWFkb25seScgXSA9ICd0cnVlJ1xuICAgIH1cblxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBgcS1zbGlkZXIgcS1zbGlkZXIkeyBheGlzLnZhbHVlIH0gcS1zbGlkZXItLSR7IGFjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJ2luJyB9YWN0aXZlIGlubGluZSBuby13cmFwIGBcbiAgICArIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdyb3cnIDogJ2NvbHVtbicpXG4gICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJyBxLXNsaWRlci0tZW5hYmxlZCcgKyAoZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1lZGl0YWJsZScgOiAnJykpXG4gICAgKyAoZm9jdXMudmFsdWUgPT09ICdib3RoJyA/ICcgcS1zbGlkZXItLWZvY3VzJyA6ICcnKVxuICAgICsgKHByb3BzLmxhYmVsIHx8IHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlID8gJyBxLXNsaWRlci0tbGFiZWwnIDogJycpXG4gICAgKyAocHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1sYWJlbC1hbHdheXMnIDogJycpXG4gICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZGFyaycgOiAnJylcbiAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWRlbnNlIHEtc2xpZGVyLS1kZW5zZScgKyBheGlzLnZhbHVlIDogJycpXG4gIClcblxuICBmdW5jdGlvbiBnZXRQb3NpdGlvbkNsYXNzIChuYW1lKSB7XG4gICAgY29uc3QgY2xzID0gJ3Etc2xpZGVyX18nICsgbmFtZVxuICAgIHJldHVybiBgJHsgY2xzIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH0keyBsYWJlbFNpZGUudmFsdWUgfWBcbiAgfVxuICBmdW5jdGlvbiBnZXRBeGlzQ2xhc3MgKG5hbWUpIHtcbiAgICBjb25zdCBjbHMgPSAncS1zbGlkZXJfXycgKyBuYW1lXG4gICAgcmV0dXJuIGAkeyBjbHMgfSAkeyBjbHMgfSR7IGF4aXMudmFsdWUgfWBcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGlvbkJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGNvbG9yID0gcHJvcHMuc2VsZWN0aW9uQ29sb3IgfHwgcHJvcHMuY29sb3JcbiAgICByZXR1cm4gJ3Etc2xpZGVyX19zZWxlY3Rpb24gYWJzb2x1dGUnXG4gICAgICArIChjb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IGNvbG9yIH1gIDogJycpXG4gIH0pXG4gIGNvbnN0IG1hcmtlckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0QXhpc0NsYXNzKCdtYXJrZXJzJykgKyAnIGFic29sdXRlIG92ZXJmbG93LWhpZGRlbicpXG4gIGNvbnN0IHRyYWNrQ29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRBeGlzQ2xhc3MoJ3RyYWNrLWNvbnRhaW5lcicpKVxuICBjb25zdCBwaW5DbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ3BpbicpKVxuICBjb25zdCBsYWJlbENsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygnbGFiZWwnKSlcbiAgY29uc3QgdGV4dENvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygndGV4dC1jb250YWluZXInKSlcbiAgY29uc3QgbWFya2VyTGFiZWxzQ29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgIGdldFBvc2l0aW9uQ2xhc3MoJ21hcmtlci1sYWJlbHMtY29udGFpbmVyJylcbiAgICArIChwcm9wcy5tYXJrZXJMYWJlbHNDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5tYXJrZXJMYWJlbHNDbGFzcyB9YCA6ICcnKVxuICApXG5cbiAgY29uc3QgdHJhY2tDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3Etc2xpZGVyX190cmFjayByZWxhdGl2ZS1wb3NpdGlvbiBuby1vdXRsaW5lJ1xuICAgICsgKHByb3BzLnRyYWNrQ29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMudHJhY2tDb2xvciB9YCA6ICcnKVxuICApXG4gIGNvbnN0IHRyYWNrU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0geyBbIHRoaWNrbmVzc1Byb3AudmFsdWUgXTogcHJvcHMudHJhY2tTaXplIH1cbiAgICBpZiAocHJvcHMudHJhY2tJbWcgIT09IHZvaWQgMCkge1xuICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMudHJhY2tJbWcgfSkgIWltcG9ydGFudGBcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IGlubmVyQmFyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXNsaWRlcl9faW5uZXIgYWJzb2x1dGUnXG4gICAgKyAocHJvcHMuaW5uZXJUcmFja0NvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLmlubmVyVHJhY2tDb2xvciB9YCA6ICcnKVxuICApXG4gIGNvbnN0IGlubmVyQmFyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgaW5uZXJEaWZmID0gaW5uZXJNYXhSYXRpby52YWx1ZSAtIGlubmVyTWluUmF0aW8udmFsdWVcbiAgICBjb25zdCBhY2MgPSB7XG4gICAgICBbIHBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogaW5uZXJNaW5SYXRpby52YWx1ZSB9JWAsXG4gICAgICBbIHNpemVQcm9wLnZhbHVlIF06IGlubmVyRGlmZiA9PT0gMFxuICAgICAgICA/ICcycHgnXG4gICAgICAgIDogYCR7IDEwMCAqIGlubmVyRGlmZiB9JWBcbiAgICB9XG4gICAgaWYgKHByb3BzLmlubmVyVHJhY2tJbWcgIT09IHZvaWQgMCkge1xuICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMuaW5uZXJUcmFja0ltZyB9KSAhaW1wb3J0YW50YFxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgZnVuY3Rpb24gY29udmVydFJhdGlvVG9Nb2RlbCAocmF0aW8pIHtcbiAgICBjb25zdCB7IG1pbiwgbWF4LCBzdGVwIH0gPSBwcm9wc1xuICAgIGxldCBtb2RlbCA9IG1pbiArIHJhdGlvICogKG1heCAtIG1pbilcblxuICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgY29uc3QgbW9kdWxvID0gKG1vZGVsIC0gaW5uZXJNaW4udmFsdWUpICUgc3RlcFxuICAgICAgbW9kZWwgKz0gKE1hdGguYWJzKG1vZHVsbykgPj0gc3RlcCAvIDIgPyAobW9kdWxvIDwgMCA/IC0xIDogMSkgKiBzdGVwIDogMCkgLSBtb2R1bG9cbiAgICB9XG5cbiAgICBtb2RlbCA9IHJvdW5kVmFsdWVGbi52YWx1ZShtb2RlbClcblxuICAgIHJldHVybiBiZXR3ZWVuKG1vZGVsLCBpbm5lck1pbi52YWx1ZSwgaW5uZXJNYXgudmFsdWUpXG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0TW9kZWxUb1JhdGlvIChtb2RlbCkge1xuICAgIHJldHVybiB0cmFja0xlbi52YWx1ZSA9PT0gMFxuICAgICAgPyAwXG4gICAgICA6IChtb2RlbCAtIHByb3BzLm1pbikgLyB0cmFja0xlbi52YWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RHJhZ2dpbmdSYXRpbyAoZXZ0LCBkcmFnZ2luZykge1xuICAgIGNvbnN0XG4gICAgICBwb3MgPSBwb3NpdGlvbihldnQpLFxuICAgICAgdmFsID0gcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgPyBiZXR3ZWVuKChwb3MudG9wIC0gZHJhZ2dpbmcudG9wKSAvIGRyYWdnaW5nLmhlaWdodCwgMCwgMSlcbiAgICAgICAgOiBiZXR3ZWVuKChwb3MubGVmdCAtIGRyYWdnaW5nLmxlZnQpIC8gZHJhZ2dpbmcud2lkdGgsIDAsIDEpXG5cbiAgICByZXR1cm4gYmV0d2VlbihcbiAgICAgIGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAxLjAgLSB2YWwgOiB2YWwsXG4gICAgICBpbm5lck1pblJhdGlvLnZhbHVlLFxuICAgICAgaW5uZXJNYXhSYXRpby52YWx1ZVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IG1hcmtlclN0ZXAgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOdW1iZXIocHJvcHMubWFya2VycykgPT09IHRydWUgPyBwcm9wcy5tYXJrZXJzIDoga2V5U3RlcC52YWx1ZSlcbiAgKVxuXG4gIGNvbnN0IG1hcmtlclRpY2tzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IFtdXG4gICAgY29uc3Qgc3RlcCA9IG1hcmtlclN0ZXAudmFsdWVcbiAgICBjb25zdCBtYXggPSBwcm9wcy5tYXhcblxuICAgIGxldCB2YWx1ZSA9IHByb3BzLm1pblxuICAgIGRvIHtcbiAgICAgIGFjYy5wdXNoKHZhbHVlKVxuICAgICAgdmFsdWUgKz0gc3RlcFxuICAgIH0gd2hpbGUgKHZhbHVlIDwgbWF4KVxuXG4gICAgYWNjLnB1c2gobWF4KVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBtYXJrZXJMYWJlbENsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHByZWZpeCA9IGAgJHsgbWFya2VyUHJlZml4Q2xhc3MgfSR7IGF4aXMudmFsdWUgfS1gXG4gICAgcmV0dXJuIG1hcmtlclByZWZpeENsYXNzXG4gICAgICArIGAkeyBwcmVmaXggfSR7IHByb3BzLnN3aXRjaE1hcmtlckxhYmVsc1NpZGUgPT09IHRydWUgPyAnc3dpdGNoZWQnIDogJ3N0YW5kYXJkJyB9YFxuICAgICAgKyBgJHsgcHJlZml4IH0keyBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3J0bCcgOiAnbHRyJyB9YFxuICB9KVxuXG4gIGNvbnN0IG1hcmtlckxhYmVsc0xpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgcmV0dXJuIGdldE1hcmtlckxpc3QocHJvcHMubWFya2VyTGFiZWxzKS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKHtcbiAgICAgIGluZGV4LFxuICAgICAgdmFsdWU6IGVudHJ5LnZhbHVlLFxuICAgICAgbGFiZWw6IGVudHJ5LmxhYmVsIHx8IGVudHJ5LnZhbHVlLFxuICAgICAgY2xhc3NlczogbWFya2VyTGFiZWxDbGFzcy52YWx1ZVxuICAgICAgICArIChlbnRyeS5jbGFzc2VzICE9PSB2b2lkIDAgPyAnICcgKyBlbnRyeS5jbGFzc2VzIDogJycpLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLi4uZ2V0TWFya2VyTGFiZWxTdHlsZShlbnRyeS52YWx1ZSksXG4gICAgICAgIC4uLihlbnRyeS5zdHlsZSB8fCB7fSlcbiAgICAgIH1cbiAgICB9KSlcbiAgfSlcblxuICBjb25zdCBtYXJrZXJTY29wZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgbWFya2VyTGlzdDogbWFya2VyTGFiZWxzTGlzdC52YWx1ZSxcbiAgICBtYXJrZXJNYXA6IG1hcmtlckxhYmVsc01hcC52YWx1ZSxcbiAgICBjbGFzc2VzOiBtYXJrZXJMYWJlbENsYXNzLnZhbHVlLCAvLyBUT0RPIHRzIGRlZmluaXRpb25cbiAgICBnZXRTdHlsZTogZ2V0TWFya2VyTGFiZWxTdHlsZVxuICB9KSlcblxuICBjb25zdCBtYXJrZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBzaXplID0gaW5uZXJCYXJMZW4udmFsdWUgPT09IDBcbiAgICAgID8gJzJweCdcbiAgICAgIDogMTAwICogbWFya2VyU3RlcC52YWx1ZSAvIGlubmVyQmFyTGVuLnZhbHVlXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW5uZXJCYXJTdHlsZS52YWx1ZSxcbiAgICAgIGJhY2tncm91bmRTaXplOiBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICA/IGAycHggJHsgc2l6ZSB9JWBcbiAgICAgICAgOiBgJHsgc2l6ZSB9JSAycHhgXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxpc3QgKGRlZikge1xuICAgIGlmIChkZWYgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIGlmIChkZWYgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBtYXJrZXJUaWNrcy52YWx1ZS5tYXAoZGVmYXVsdE1hcmtlckNvbnZlcnRGbilcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG1hcmtlclRpY2tzLnZhbHVlLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkZWYodmFsdWUpXG4gICAgICAgIHJldHVybiBpc09iamVjdChpdGVtKSA9PT0gdHJ1ZSA/IHsgLi4uaXRlbSwgdmFsdWUgfSA6IHsgdmFsdWUsIGxhYmVsOiBpdGVtIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyRm4gPSAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA+PSBwcm9wcy5taW4gJiYgdmFsdWUgPD0gcHJvcHMubWF4XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShkZWYpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZGVmXG4gICAgICAgIC5tYXAoaXRlbSA9PiAoaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyBpdGVtIDogeyB2YWx1ZTogaXRlbSB9KSlcbiAgICAgICAgLmZpbHRlcihmaWx0ZXJGbilcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGVmKS5tYXAoa2V5ID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkZWZbIGtleSBdXG4gICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihrZXkpXG4gICAgICByZXR1cm4gaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyB7IC4uLml0ZW0sIHZhbHVlIH0gOiB7IHZhbHVlLCBsYWJlbDogaXRlbSB9XG4gICAgfSkuZmlsdGVyKGZpbHRlckZuKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFya2VyTGFiZWxTdHlsZSAodmFsKSB7XG4gICAgcmV0dXJuIHsgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqICh2YWwgLSBwcm9wcy5taW4pIC8gdHJhY2tMZW4udmFsdWUgfSVgIH1cbiAgfVxuXG4gIGNvbnN0IG1hcmtlckxhYmVsc01hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAocHJvcHMubWFya2VyTGFiZWxzID09PSBmYWxzZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBjb25zdCBhY2MgPSB7fVxuICAgIG1hcmtlckxhYmVsc0xpc3QudmFsdWUuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBhY2NbIGVudHJ5LnZhbHVlIF0gPSBlbnRyeVxuICAgIH0pXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxhYmVsc0NvbnRlbnQgKCkge1xuICAgIGlmIChzbG90c1sgJ21hcmtlci1sYWJlbC1ncm91cCcgXSAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gc2xvdHNbICdtYXJrZXItbGFiZWwtZ3JvdXAnIF0obWFya2VyU2NvcGUudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgZm4gPSBzbG90c1sgJ21hcmtlci1sYWJlbCcgXSB8fCBkZWZhdWx0TWFya2VyTGFiZWxSZW5kZXJGblxuICAgIHJldHVybiBtYXJrZXJMYWJlbHNMaXN0LnZhbHVlLm1hcChtYXJrZXIgPT4gZm4oe1xuICAgICAgbWFya2VyLFxuICAgICAgLi4ubWFya2VyU2NvcGUudmFsdWVcbiAgICB9KSlcbiAgfVxuXG4gIGNvbnN0IHBhbkRpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAvLyBpZiBlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgIHJldHVybiBbIFtcbiAgICAgIFRvdWNoUGFuLFxuICAgICAgb25QYW4sXG4gICAgICB2b2lkIDAsXG4gICAgICB7XG4gICAgICAgIFsgb3JpZW50YXRpb24udmFsdWUgXTogdHJ1ZSxcbiAgICAgICAgcHJldmVudDogdHJ1ZSxcbiAgICAgICAgc3RvcDogdHJ1ZSxcbiAgICAgICAgbW91c2U6IHRydWUsXG4gICAgICAgIG1vdXNlQWxsRGlyOiB0cnVlXG4gICAgICB9XG4gICAgXSBdXG4gIH0pXG5cbiAgZnVuY3Rpb24gb25QYW4gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgIGlmIChkcmFnZ2luZy52YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgICAgLy8gb25seSBpZiB0b3VjaCwgYmVjYXVzZSB3ZSBhbHNvIGhhdmUgbW91c2Vkb3duL3VwOlxuICAgICAgICBldmVudC50b3VjaCA9PT0gdHJ1ZSAmJiB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgICAgICBkcmFnZ2luZy52YWx1ZSA9IHZvaWQgMFxuICAgICAgICBlbWl0KCdwYW4nLCAnZW5kJylcbiAgICAgIH1cbiAgICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlXG4gICAgICBmb2N1cy52YWx1ZSA9IGZhbHNlXG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgIGRyYWdnaW5nLnZhbHVlID0gZ2V0RHJhZ2dpbmcoZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgICAgYWN0aXZlLnZhbHVlID0gdHJ1ZVxuICAgICAgZW1pdCgncGFuJywgJ3N0YXJ0JylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICB1cGRhdGVWYWx1ZSgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25CbHVyICgpIHtcbiAgICBmb2N1cy52YWx1ZSA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBvbkFjdGl2YXRlIChldnQpIHtcbiAgICB1cGRhdGVQb3NpdGlvbihldnQsIGdldERyYWdnaW5nKGV2dCkpXG4gICAgdXBkYXRlVmFsdWUoKVxuXG4gICAgcHJldmVudEZvY3VzLnZhbHVlID0gdHJ1ZVxuICAgIGFjdGl2ZS52YWx1ZSA9IHRydWVcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbkRlYWN0aXZhdGUgKCkge1xuICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9IGZhbHNlXG4gICAgYWN0aXZlLnZhbHVlID0gZmFsc2VcblxuICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gICAgb25CbHVyKClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbk1vYmlsZUNsaWNrIChldnQpIHtcbiAgICB1cGRhdGVQb3NpdGlvbihldnQsIGdldERyYWdnaW5nKGV2dCkpXG4gICAgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5dXAgKGV2dCkge1xuICAgIGlmIChrZXlDb2Rlcy5pbmNsdWRlcyhldnQua2V5Q29kZSkpIHtcbiAgICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGV4dENvbnRhaW5lclN0eWxlIChyYXRpbykge1xuICAgIGlmIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBjb25zdCBwID0gJHEubGFuZy5ydGwgIT09IHByb3BzLnJldmVyc2UgPyAxIC0gcmF0aW8gOiByYXRpb1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKGNhbGMoJHsgMiAqIHAgLSAxIH0gKiAkeyBwcm9wcy50aHVtYlNpemUgfSAvIDIgKyAkeyA1MCAtIDEwMCAqIHAgfSUpKWBcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUaHVtYlJlbmRlckZuICh0aHVtYikge1xuICAgIGNvbnN0IGZvY3VzQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPT09IGZhbHNlICYmIChmb2N1cy52YWx1ZSA9PT0gdGh1bWIuZm9jdXNWYWx1ZSB8fCBmb2N1cy52YWx1ZSA9PT0gJ2JvdGgnKVxuICAgICAgICA/ICcgcS1zbGlkZXItLWZvY3VzJ1xuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtc2xpZGVyX190aHVtYiBxLXNsaWRlcl9fdGh1bWIkeyBheGlzLnZhbHVlIH0gcS1zbGlkZXJfX3RodW1iJHsgYXhpcy52YWx1ZSB9LSR7IGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAncnRsJyA6ICdsdHInIH0gYWJzb2x1dGUgbm9uLXNlbGVjdGFibGVgXG4gICAgICArIGZvY3VzQ2xhc3MudmFsdWVcbiAgICAgICsgKHRodW1iLnRodW1iQ29sb3IudmFsdWUgIT09IHZvaWQgMCA/IGAgdGV4dC0keyB0aHVtYi50aHVtYkNvbG9yLnZhbHVlIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgd2lkdGg6IHByb3BzLnRodW1iU2l6ZSxcbiAgICAgIGhlaWdodDogcHJvcHMudGh1bWJTaXplLFxuICAgICAgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIHRodW1iLnJhdGlvLnZhbHVlIH0lYCxcbiAgICAgIHpJbmRleDogZm9jdXMudmFsdWUgPT09IHRodW1iLmZvY3VzVmFsdWUgPyAyIDogdm9pZCAwXG4gICAgfSkpXG5cbiAgICBjb25zdCBwaW5Db2xvciA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHRodW1iLmxhYmVsQ29sb3IudmFsdWUgIT09IHZvaWQgMFxuICAgICAgICA/IGAgdGV4dC0keyB0aHVtYi5sYWJlbENvbG9yLnZhbHVlIH1gXG4gICAgICAgIDogJydcbiAgICApKVxuXG4gICAgY29uc3QgdGV4dENvbnRhaW5lclN0eWxlID0gY29tcHV0ZWQoKCkgPT4gZ2V0VGV4dENvbnRhaW5lclN0eWxlKHRodW1iLnJhdGlvLnZhbHVlKSlcblxuICAgIGNvbnN0IHRleHRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICdxLXNsaWRlcl9fdGV4dCdcbiAgICAgICsgKHRodW1iLmxhYmVsVGV4dENvbG9yLnZhbHVlICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgdGh1bWIubGFiZWxUZXh0Q29sb3IudmFsdWUgfWAgOiAnJylcbiAgICApKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IHRodW1iQ29udGVudCA9IFtcbiAgICAgICAgaCgnc3ZnJywge1xuICAgICAgICAgIGNsYXNzOiAncS1zbGlkZXJfX3RodW1iLXNoYXBlIGFic29sdXRlLWZ1bGwnLFxuICAgICAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgncGF0aCcsIHsgZDogcHJvcHMudGh1bWJQYXRoIH0pXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXNsaWRlcl9fZm9jdXMtcmluZyBmaXQnIH0pXG4gICAgICBdXG5cbiAgICAgIGlmIChwcm9wcy5sYWJlbCA9PT0gdHJ1ZSB8fCBwcm9wcy5sYWJlbEFsd2F5cyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aHVtYkNvbnRlbnQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogcGluQ2xhc3MudmFsdWUgKyAnIGFic29sdXRlIGZpdCBuby1wb2ludGVyLWV2ZW50cycgKyBwaW5Db2xvci52YWx1ZVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgY2xhc3M6IGxhYmVsQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7IG1pbldpZHRoOiBwcm9wcy50aHVtYlNpemUgfVxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IHRleHRDb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBzdHlsZTogdGV4dENvbnRhaW5lclN0eWxlLnZhbHVlXG4gICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICBoKCdzcGFuJywgeyBjbGFzczogdGV4dENsYXNzLnZhbHVlIH0sIHRodW1iLmxhYmVsLnZhbHVlKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKHByb3BzLm5hbWUgIT09IHZvaWQgMCAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlKSB7XG4gICAgICAgICAgaW5qZWN0Rm9ybUlucHV0KHRodW1iQ29udGVudCwgJ3B1c2gnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIC4uLnRodW1iLmdldE5vZGVEYXRhKClcbiAgICAgIH0sIHRodW1iQ29udGVudClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb250ZW50IChzZWxlY3Rpb25CYXJTdHlsZSwgdHJhY2tDb250YWluZXJUYWJpbmRleCwgdHJhY2tDb250YWluZXJFdmVudHMsIGluamVjdFRodW1iKSB7XG4gICAgY29uc3QgdHJhY2tDb250ZW50ID0gW11cblxuICAgIHByb3BzLmlubmVyVHJhY2tDb2xvciAhPT0gJ3RyYW5zcGFyZW50JyAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnaW5uZXInLFxuICAgICAgICBjbGFzczogaW5uZXJCYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IGlubmVyQmFyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgcHJvcHMuc2VsZWN0aW9uQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ3NlbGVjdGlvbicsXG4gICAgICAgIGNsYXNzOiBzZWxlY3Rpb25CYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHNlbGVjdGlvbkJhclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIHByb3BzLm1hcmtlcnMgIT09IGZhbHNlICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdtYXJrZXInLFxuICAgICAgICBjbGFzczogbWFya2VyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBtYXJrZXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBpbmplY3RUaHVtYih0cmFja0NvbnRlbnQpXG5cbiAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAgaERpcihcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICd0cmFja0MnLFxuICAgICAgICAgIGNsYXNzOiB0cmFja0NvbnRhaW5lckNsYXNzLnZhbHVlLFxuICAgICAgICAgIHRhYmluZGV4OiB0cmFja0NvbnRhaW5lclRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgIC4uLnRyYWNrQ29udGFpbmVyRXZlbnRzLnZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogdHJhY2tDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIHN0eWxlOiB0cmFja1N0eWxlLnZhbHVlXG4gICAgICAgICAgfSwgdHJhY2tDb250ZW50KVxuICAgICAgICBdLFxuICAgICAgICAnc2xpZGUnLFxuICAgICAgICBlZGl0YWJsZS52YWx1ZSwgKCkgPT4gcGFuRGlyZWN0aXZlLnZhbHVlXG4gICAgICApXG4gICAgXVxuXG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHByb3BzLnN3aXRjaE1hcmtlckxhYmVsc1NpZGUgPT09IHRydWVcbiAgICAgICAgPyAndW5zaGlmdCdcbiAgICAgICAgOiAncHVzaCdcblxuICAgICAgY29udGVudFsgYWN0aW9uIF0oXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBrZXk6ICdtYXJrZXJMJyxcbiAgICAgICAgICBjbGFzczogbWFya2VyTGFiZWxzQ29udGFpbmVyQ2xhc3MudmFsdWVcbiAgICAgICAgfSwgZ2V0TWFya2VyTGFiZWxzQ29udGVudCgpKVxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50XG4gIH1cblxuICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZToge1xuICAgICAgYWN0aXZlLFxuICAgICAgZm9jdXMsXG4gICAgICBwcmV2ZW50Rm9jdXMsXG4gICAgICBkcmFnZ2luZyxcblxuICAgICAgZWRpdGFibGUsXG4gICAgICBjbGFzc2VzLFxuICAgICAgdGFiaW5kZXgsXG4gICAgICBhdHRyaWJ1dGVzLFxuXG4gICAgICByb3VuZFZhbHVlRm4sXG4gICAgICBrZXlTdGVwLFxuICAgICAgdHJhY2tMZW4sXG4gICAgICBpbm5lck1pbixcbiAgICAgIGlubmVyTWluUmF0aW8sXG4gICAgICBpbm5lck1heCxcbiAgICAgIGlubmVyTWF4UmF0aW8sXG4gICAgICBwb3NpdGlvblByb3AsXG4gICAgICBzaXplUHJvcCxcbiAgICAgIGlzUmV2ZXJzZWRcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgb25BY3RpdmF0ZSxcbiAgICAgIG9uTW9iaWxlQ2xpY2ssXG4gICAgICBvbkJsdXIsXG4gICAgICBvbktleXVwLFxuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIGdldFRodW1iUmVuZGVyRm4sXG4gICAgICBjb252ZXJ0UmF0aW9Ub01vZGVsLFxuICAgICAgY29udmVydE1vZGVsVG9SYXRpbyxcbiAgICAgIGdldERyYWdnaW5nUmF0aW9cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHVzZUZvcm1BdHRycyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS1mb3JtL3ByaXZhdGUudXNlLWZvcm0uanMnXG5cbmltcG9ydCB1c2VTbGlkZXIsIHtcbiAgdXNlU2xpZGVyUHJvcHMsXG4gIHVzZVNsaWRlckVtaXRzLFxuICBrZXlDb2Rlc1xufSBmcm9tICcuL3VzZS1zbGlkZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcblxuY29uc3QgZ2V0Tm9kZURhdGEgPSAoKSA9PiAoe30pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU2xpZGVyJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVNsaWRlclByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHR5cGVvZiB2ID09PSAnbnVtYmVyJyB8fCB2ID09PSBudWxsXG4gICAgfSxcblxuICAgIGxhYmVsVmFsdWU6IFsgU3RyaW5nLCBOdW1iZXIgXVxuICB9LFxuXG4gIGVtaXRzOiB1c2VTbGlkZXJFbWl0cyxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgeyBzdGF0ZSwgbWV0aG9kcyB9ID0gdXNlU2xpZGVyKHtcbiAgICAgIHVwZGF0ZVZhbHVlLCB1cGRhdGVQb3NpdGlvbiwgZ2V0RHJhZ2dpbmcsXG4gICAgICBmb3JtQXR0cnM6IHVzZUZvcm1BdHRycyhwcm9wcylcbiAgICB9KVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGN1clJhdGlvID0gcmVmKDApXG4gICAgY29uc3QgbW9kZWwgPSByZWYoMClcblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZU1vZGVsICgpIHtcbiAgICAgIG1vZGVsLnZhbHVlID0gcHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbFxuICAgICAgICA/IHN0YXRlLmlubmVyTWluLnZhbHVlXG4gICAgICAgIDogYmV0d2Vlbihwcm9wcy5tb2RlbFZhbHVlLCBzdGF0ZS5pbm5lck1pbi52YWx1ZSwgc3RhdGUuaW5uZXJNYXgudmFsdWUpXG4gICAgfVxuXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBgJHsgcHJvcHMubW9kZWxWYWx1ZSB9fCR7IHN0YXRlLmlubmVyTWluLnZhbHVlIH18JHsgc3RhdGUuaW5uZXJNYXgudmFsdWUgfWAsXG4gICAgICBub3JtYWxpemVNb2RlbFxuICAgIClcblxuICAgIG5vcm1hbGl6ZU1vZGVsKClcblxuICAgIGNvbnN0IG1vZGVsUmF0aW8gPSBjb21wdXRlZCgoKSA9PiBtZXRob2RzLmNvbnZlcnRNb2RlbFRvUmF0aW8obW9kZWwudmFsdWUpKVxuICAgIGNvbnN0IHJhdGlvID0gY29tcHV0ZWQoKCkgPT4gKHN0YXRlLmFjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/IGN1clJhdGlvLnZhbHVlIDogbW9kZWxSYXRpby52YWx1ZSkpXG5cbiAgICBjb25zdCBzZWxlY3Rpb25CYXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgWyBzdGF0ZS5wb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIHN0YXRlLmlubmVyTWluUmF0aW8udmFsdWUgfSVgLFxuICAgICAgICBbIHN0YXRlLnNpemVQcm9wLnZhbHVlIF06IGAkeyAxMDAgKiAocmF0aW8udmFsdWUgLSBzdGF0ZS5pbm5lck1pblJhdGlvLnZhbHVlKSB9JWBcbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcy5zZWxlY3Rpb25JbWcgIT09IHZvaWQgMCkge1xuICAgICAgICBhY2MuYmFja2dyb3VuZEltYWdlID0gYHVybCgkeyBwcm9wcy5zZWxlY3Rpb25JbWcgfSkgIWltcG9ydGFudGBcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgY29uc3QgZ2V0VGh1bWIgPSBtZXRob2RzLmdldFRodW1iUmVuZGVyRm4oe1xuICAgICAgZm9jdXNWYWx1ZTogdHJ1ZSxcbiAgICAgIGdldE5vZGVEYXRhLFxuICAgICAgcmF0aW8sXG4gICAgICBsYWJlbDogY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgICBwcm9wcy5sYWJlbFZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHByb3BzLmxhYmVsVmFsdWVcbiAgICAgICAgICA6IG1vZGVsLnZhbHVlXG4gICAgICApKSxcbiAgICAgIHRodW1iQ29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLnRodW1iQ29sb3IgfHwgcHJvcHMuY29sb3IpLFxuICAgICAgbGFiZWxDb2xvcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMubGFiZWxDb2xvciksXG4gICAgICBsYWJlbFRleHRDb2xvcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMubGFiZWxUZXh0Q29sb3IpXG4gICAgfSlcblxuICAgIGNvbnN0IHRyYWNrQ29udGFpbmVyRXZlbnRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmVkaXRhYmxlLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gJHEucGxhdGZvcm0uaXMubW9iaWxlID09PSB0cnVlXG4gICAgICAgID8geyBvbkNsaWNrOiBtZXRob2RzLm9uTW9iaWxlQ2xpY2sgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIG9uTW91c2Vkb3duOiBtZXRob2RzLm9uQWN0aXZhdGUsXG4gICAgICAgICAgICBvbkZvY3VzLFxuICAgICAgICAgICAgb25CbHVyOiBtZXRob2RzLm9uQmx1cixcbiAgICAgICAgICAgIG9uS2V5ZG93bixcbiAgICAgICAgICAgIG9uS2V5dXA6IG1ldGhvZHMub25LZXl1cFxuICAgICAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVmFsdWUgKGNoYW5nZSkge1xuICAgICAgaWYgKG1vZGVsLnZhbHVlICE9PSBwcm9wcy5tb2RlbFZhbHVlKSB7XG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbW9kZWwudmFsdWUpXG4gICAgICB9XG4gICAgICBjaGFuZ2UgPT09IHRydWUgJiYgZW1pdCgnY2hhbmdlJywgbW9kZWwudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RHJhZ2dpbmcgKCkge1xuICAgICAgcmV0dXJuIHJvb3RSZWYudmFsdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbiAoZXZlbnQsIGRyYWdnaW5nID0gc3RhdGUuZHJhZ2dpbmcudmFsdWUpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gbWV0aG9kcy5nZXREcmFnZ2luZ1JhdGlvKGV2ZW50LCBkcmFnZ2luZylcblxuICAgICAgbW9kZWwudmFsdWUgPSBtZXRob2RzLmNvbnZlcnRSYXRpb1RvTW9kZWwocmF0aW8pXG5cbiAgICAgIGN1clJhdGlvLnZhbHVlID0gcHJvcHMuc25hcCAhPT0gdHJ1ZSB8fCBwcm9wcy5zdGVwID09PSAwXG4gICAgICAgID8gcmF0aW9cbiAgICAgICAgOiBtZXRob2RzLmNvbnZlcnRNb2RlbFRvUmF0aW8obW9kZWwudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1cyAoKSB7XG4gICAgICBzdGF0ZS5mb2N1cy52YWx1ZSA9IHRydWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktleWRvd24gKGV2dCkge1xuICAgICAgaWYgKGtleUNvZGVzLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSA9PT0gZmFsc2UpIHJldHVyblxuXG4gICAgICBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHN0ZXBWYWwgPSAoWyAzNCwgMzMgXS5pbmNsdWRlcyhldnQua2V5Q29kZSkgPyAxMCA6IDEpICogc3RhdGUua2V5U3RlcC52YWx1ZSxcbiAgICAgICAgb2Zmc2V0ID0gKFxuICAgICAgICAgIChbIDM0LCAzNywgNDAgXS5pbmNsdWRlcyhldnQua2V5Q29kZSkgPyAtMSA6IDEpXG4gICAgICAgICAgKiAoc3RhdGUuaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/IC0xIDogMSlcbiAgICAgICAgICAqIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IC0xIDogMSkgKiBzdGVwVmFsXG4gICAgICAgIClcblxuICAgICAgbW9kZWwudmFsdWUgPSBiZXR3ZWVuKFxuICAgICAgICBzdGF0ZS5yb3VuZFZhbHVlRm4udmFsdWUobW9kZWwudmFsdWUgKyBvZmZzZXQpLFxuICAgICAgICBzdGF0ZS5pbm5lck1pbi52YWx1ZSxcbiAgICAgICAgc3RhdGUuaW5uZXJNYXgudmFsdWVcbiAgICAgIClcblxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gbWV0aG9kcy5nZXRDb250ZW50KFxuICAgICAgICBzZWxlY3Rpb25CYXJTdHlsZSxcbiAgICAgICAgc3RhdGUudGFiaW5kZXgsXG4gICAgICAgIHRyYWNrQ29udGFpbmVyRXZlbnRzLFxuICAgICAgICBub2RlID0+IHsgbm9kZS5wdXNoKGdldFRodW1iKCkpIH1cbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiByb290UmVmLFxuICAgICAgICBjbGFzczogc3RhdGUuY2xhc3Nlcy52YWx1ZSArIChwcm9wcy5tb2RlbFZhbHVlID09PSBudWxsID8gJyBxLXNsaWRlci0tbm8tdmFsdWUnIDogJycpLFxuICAgICAgICAuLi5zdGF0ZS5hdHRyaWJ1dGVzLnZhbHVlLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgIH0sIGNvbnRlbnQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQmVmb3JlVW5tb3VudCwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSwgcHJvdmlkZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB1c2VUaWNrIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS10aWNrL3VzZS10aWNrLmpzJ1xuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLXRpbWVvdXQvdXNlLXRpbWVvdXQuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgdGFic0tleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuc3ltYm9scy9zeW1ib2xzLmpzJ1xuaW1wb3J0IHsgcnRsSGFzU2Nyb2xsQnVnIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5ydGwvcnRsLmpzJ1xuXG5mdW5jdGlvbiBnZXRJbmRpY2F0b3JDbGFzcyAoY29sb3IsIHRvcCwgdmVydGljYWwpIHtcbiAgY29uc3QgcG9zID0gdmVydGljYWwgPT09IHRydWVcbiAgICA/IFsgJ2xlZnQnLCAncmlnaHQnIF1cbiAgICA6IFsgJ3RvcCcsICdib3R0b20nIF1cblxuICByZXR1cm4gYGFic29sdXRlLSR7IHRvcCA9PT0gdHJ1ZSA/IHBvc1sgMCBdIDogcG9zWyAxIF0gfSR7IGNvbG9yID8gYCB0ZXh0LSR7IGNvbG9yIH1gIDogJycgfWBcbn1cblxuY29uc3QgYWxpZ25WYWx1ZXMgPSBbICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCcsICdqdXN0aWZ5JyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGFicycsXG5cbiAgcHJvcHM6IHtcbiAgICBtb2RlbFZhbHVlOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgICBhbGlnbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2NlbnRlcicsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gYWxpZ25WYWx1ZXMuaW5jbHVkZXModilcbiAgICB9LFxuICAgIGJyZWFrcG9pbnQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDYwMFxuICAgIH0sXG5cbiAgICB2ZXJ0aWNhbDogQm9vbGVhbixcbiAgICBzaHJpbms6IEJvb2xlYW4sXG4gICAgc3RyZXRjaDogQm9vbGVhbixcblxuICAgIGFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICBhY3RpdmVCZ0NvbG9yOiBTdHJpbmcsXG4gICAgaW5kaWNhdG9yQ29sb3I6IFN0cmluZyxcbiAgICBsZWZ0SWNvbjogU3RyaW5nLFxuICAgIHJpZ2h0SWNvbjogU3RyaW5nLFxuXG4gICAgb3V0c2lkZUFycm93czogQm9vbGVhbixcbiAgICBtb2JpbGVBcnJvd3M6IEJvb2xlYW4sXG5cbiAgICBzd2l0Y2hJbmRpY2F0b3I6IEJvb2xlYW4sXG5cbiAgICBuYXJyb3dJbmRpY2F0b3I6IEJvb2xlYW4sXG4gICAgaW5saW5lTGFiZWw6IEJvb2xlYW4sXG4gICAgbm9DYXBzOiBCb29sZWFuLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG5cbiAgICBjb250ZW50Q2xhc3M6IFN0cmluZyxcblxuICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogWyBGdW5jdGlvbiwgQXJyYXkgXVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gICAgY29uc3QgeyByZWdpc3RlclRpY2s6IHJlZ2lzdGVyU2Nyb2xsVGljayB9ID0gdXNlVGljaygpXG4gICAgY29uc3QgeyByZWdpc3RlclRpY2s6IHJlZ2lzdGVyVXBkYXRlQXJyb3dzVGljayB9ID0gdXNlVGljaygpXG4gICAgY29uc3QgeyByZWdpc3RlclRpY2s6IHJlZ2lzdGVyQW5pbWF0ZVRpY2sgfSA9IHVzZVRpY2soKVxuXG4gICAgY29uc3QgeyByZWdpc3RlclRpbWVvdXQ6IHJlZ2lzdGVyRm9jdXNUaW1lb3V0LCByZW1vdmVUaW1lb3V0OiByZW1vdmVGb2N1c1RpbWVvdXQgfSA9IHVzZVRpbWVvdXQoKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0OiByZWdpc3RlclNjcm9sbFRvVGFiVGltZW91dCwgcmVtb3ZlVGltZW91dDogcmVtb3ZlU2Nyb2xsVG9UYWJUaW1lb3V0IH0gPSB1c2VUaW1lb3V0KClcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBjb250ZW50UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBjdXJyZW50TW9kZWwgPSByZWYocHJvcHMubW9kZWxWYWx1ZSlcbiAgICBjb25zdCBzY3JvbGxhYmxlID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGxlZnRBcnJvdyA9IHJlZih0cnVlKVxuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSByZWYoZmFsc2UpXG4gICAgY29uc3QganVzdGlmeSA9IHJlZihmYWxzZSlcblxuICAgIGNvbnN0IHRhYkRhdGFMaXN0ID0gW11cbiAgICBjb25zdCB0YWJEYXRhTGlzdExlbiA9IHJlZigwKVxuICAgIGNvbnN0IGhhc0ZvY3VzID0gcmVmKGZhbHNlKVxuXG4gICAgbGV0IGFuaW1hdGVUaW1lciA9IG51bGwsIHNjcm9sbFRpbWVyID0gbnVsbCwgdW53YXRjaFJvdXRlXG5cbiAgICBjb25zdCB0YWJQcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBhY3RpdmVDbGFzczogcHJvcHMuYWN0aXZlQ2xhc3MsXG4gICAgICBhY3RpdmVDb2xvcjogcHJvcHMuYWN0aXZlQ29sb3IsXG4gICAgICBhY3RpdmVCZ0NvbG9yOiBwcm9wcy5hY3RpdmVCZ0NvbG9yLFxuICAgICAgaW5kaWNhdG9yQ2xhc3M6IGdldEluZGljYXRvckNsYXNzKFxuICAgICAgICBwcm9wcy5pbmRpY2F0b3JDb2xvcixcbiAgICAgICAgcHJvcHMuc3dpdGNoSW5kaWNhdG9yLFxuICAgICAgICBwcm9wcy52ZXJ0aWNhbFxuICAgICAgKSxcbiAgICAgIG5hcnJvd0luZGljYXRvcjogcHJvcHMubmFycm93SW5kaWNhdG9yLFxuICAgICAgaW5saW5lTGFiZWw6IHByb3BzLmlubGluZUxhYmVsLFxuICAgICAgbm9DYXBzOiBwcm9wcy5ub0NhcHNcbiAgICB9KSlcblxuICAgIGNvbnN0IGhhc0FjdGl2ZVRhYiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGxlbiA9IHRhYkRhdGFMaXN0TGVuLnZhbHVlXG4gICAgICBjb25zdCB2YWwgPSBjdXJyZW50TW9kZWwudmFsdWVcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAodGFiRGF0YUxpc3RbIGkgXS5uYW1lLnZhbHVlID09PSB2YWwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBjb25zdCBhbGlnbkNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWxpZ24gPSBzY3JvbGxhYmxlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJ2xlZnQnXG4gICAgICAgIDogKGp1c3RpZnkudmFsdWUgPT09IHRydWUgPyAnanVzdGlmeScgOiBwcm9wcy5hbGlnbilcblxuICAgICAgcmV0dXJuIGBxLXRhYnNfX2NvbnRlbnQtLWFsaWduLSR7IGFsaWduIH1gXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdGFicyByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXInXG4gICAgICArIGAgcS10YWJzLS0keyBzY3JvbGxhYmxlLnZhbHVlID09PSB0cnVlID8gJycgOiAnbm90LScgfXNjcm9sbGFibGVgXG4gICAgICArIGAgcS10YWJzLS0keyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcgfWBcbiAgICAgICsgYCBxLXRhYnNfX2Fycm93cy0tJHsgcHJvcHMub3V0c2lkZUFycm93cyA9PT0gdHJ1ZSA/ICdvdXRzaWRlJyA6ICdpbnNpZGUnIH1gXG4gICAgICArIGAgcS10YWJzLS1tb2JpbGUtd2l0aCR7IHByb3BzLm1vYmlsZUFycm93cyA9PT0gdHJ1ZSA/ICcnIDogJ291dCcgfS1hcnJvd3NgXG4gICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS10YWJzLS1kZW5zZScgOiAnJylcbiAgICAgICsgKHByb3BzLnNocmluayA9PT0gdHJ1ZSA/ICcgY29sLXNocmluaycgOiAnJylcbiAgICAgICsgKHByb3BzLnN0cmV0Y2ggPT09IHRydWUgPyAnIHNlbGYtc3RyZXRjaCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBpbm5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRhYnNfX2NvbnRlbnQgc2Nyb2xsLS1tb2JpbGUgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyIHNlbGYtc3RyZXRjaCBoaWRlLXNjcm9sbGJhciByZWxhdGl2ZS1wb3NpdGlvbiAnXG4gICAgICArIGFsaWduQ2xhc3MudmFsdWVcbiAgICAgICsgKHByb3BzLmNvbnRlbnRDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5jb250ZW50Q2xhc3MgfWAgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBkb21Qcm9wcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgID8geyBjb250YWluZXI6ICdoZWlnaHQnLCBjb250ZW50OiAnb2Zmc2V0SGVpZ2h0Jywgc2Nyb2xsOiAnc2Nyb2xsSGVpZ2h0JyB9XG4gICAgICAgIDogeyBjb250YWluZXI6ICd3aWR0aCcsIGNvbnRlbnQ6ICdvZmZzZXRXaWR0aCcsIHNjcm9sbDogJ3Njcm9sbFdpZHRoJyB9XG4gICAgKSlcblxuICAgIGNvbnN0IGlzUlRMID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudmVydGljYWwgIT09IHRydWUgJiYgJHEubGFuZy5ydGwgPT09IHRydWUpXG4gICAgY29uc3QgcnRsUG9zQ29ycmVjdGlvbiA9IGNvbXB1dGVkKCgpID0+IHJ0bEhhc1Njcm9sbEJ1ZyA9PT0gZmFsc2UgJiYgaXNSVEwudmFsdWUgPT09IHRydWUpXG5cbiAgICB3YXRjaChpc1JUTCwgdXBkYXRlQXJyb3dzKVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgbmFtZSA9PiB7XG4gICAgICB1cGRhdGVNb2RlbCh7IG5hbWUsIHNldEN1cnJlbnQ6IHRydWUsIHNraXBFbWl0OiB0cnVlIH0pXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm91dHNpZGVBcnJvd3MsIHJlY2FsY3VsYXRlU2Nyb2xsKVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTW9kZWwgKHsgbmFtZSwgc2V0Q3VycmVudCwgc2tpcEVtaXQgfSkge1xuICAgICAgaWYgKGN1cnJlbnRNb2RlbC52YWx1ZSA9PT0gbmFtZSkgcmV0dXJuXG5cbiAgICAgIGlmIChza2lwRW1pdCAhPT0gdHJ1ZSAmJiBwcm9wc1sgJ29uVXBkYXRlOm1vZGVsVmFsdWUnIF0gIT09IHZvaWQgMCkge1xuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG5hbWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgc2V0Q3VycmVudCA9PT0gdHJ1ZVxuICAgICAgICB8fCBwcm9wc1sgJ29uVXBkYXRlOm1vZGVsVmFsdWUnIF0gPT09IHZvaWQgMFxuICAgICAgKSB7XG4gICAgICAgIGFuaW1hdGUoY3VycmVudE1vZGVsLnZhbHVlLCBuYW1lKVxuICAgICAgICBjdXJyZW50TW9kZWwudmFsdWUgPSBuYW1lXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjYWxjdWxhdGVTY3JvbGwgKCkge1xuICAgICAgcmVnaXN0ZXJTY3JvbGxUaWNrKCgpID0+IHtcbiAgICAgICAgcm9vdFJlZi52YWx1ZSAmJiB1cGRhdGVDb250YWluZXIoe1xuICAgICAgICAgIHdpZHRoOiByb290UmVmLnZhbHVlLm9mZnNldFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogcm9vdFJlZi52YWx1ZS5vZmZzZXRIZWlnaHRcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29udGFpbmVyIChkb21TaXplKSB7XG4gICAgICAvLyBpdCBjYW4gYmUgY2FsbGVkIGZhc3RlciB0aGFuIGNvbXBvbmVudCBiZWluZyBpbml0aWFsaXplZFxuICAgICAgLy8gc28gd2UgbmVlZCB0byBwcm90ZWN0IGFnYWluc3QgdGhhdCBjYXNlXG4gICAgICAvLyAob25lIGV4YW1wbGUgb2Ygc3VjaCBjYXNlIGlzIHRoZSBkb2NzIHJlbGVhc2Ugbm90ZXMgcGFnZSlcbiAgICAgIGlmIChkb21Qcm9wcy52YWx1ZSA9PT0gdm9pZCAwIHx8IGNvbnRlbnRSZWYudmFsdWUgPT09IG51bGwpIHJldHVyblxuXG4gICAgICBjb25zdFxuICAgICAgICBzaXplID0gZG9tU2l6ZVsgZG9tUHJvcHMudmFsdWUuY29udGFpbmVyIF0sXG4gICAgICAgIHNjcm9sbFNpemUgPSBNYXRoLm1pbihcbiAgICAgICAgICBjb250ZW50UmVmLnZhbHVlWyBkb21Qcm9wcy52YWx1ZS5zY3JvbGwgXSxcbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUucmVkdWNlLmNhbGwoXG4gICAgICAgICAgICBjb250ZW50UmVmLnZhbHVlLmNoaWxkcmVuLFxuICAgICAgICAgICAgKGFjYywgZWwpID0+IGFjYyArIChlbFsgZG9tUHJvcHMudmFsdWUuY29udGVudCBdIHx8IDApLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgc2Nyb2xsID0gc2l6ZSA+IDAgJiYgc2Nyb2xsU2l6ZSA+IHNpemUgLy8gd2hlbiB0aGVyZSBpcyBubyB0YWIsIGluIENocm9tZSwgc2l6ZSA9PT0gMCBhbmQgc2Nyb2xsU2l6ZSA9PT0gMVxuXG4gICAgICBzY3JvbGxhYmxlLnZhbHVlID0gc2Nyb2xsXG5cbiAgICAgIC8vIEFycm93cyBuZWVkIHRvIGJlIHVwZGF0ZWQgZXZlbiBpZiB0aGUgc2Nyb2xsIHN0YXR1cyB3YXMgYWxyZWFkeSB0cnVlXG4gICAgICBzY3JvbGwgPT09IHRydWUgJiYgcmVnaXN0ZXJVcGRhdGVBcnJvd3NUaWNrKHVwZGF0ZUFycm93cylcblxuICAgICAganVzdGlmeS52YWx1ZSA9IHNpemUgPCBwYXJzZUludChwcm9wcy5icmVha3BvaW50LCAxMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlIChvbGROYW1lLCBuZXdOYW1lKSB7XG4gICAgICBjb25zdFxuICAgICAgICBvbGRUYWIgPSBvbGROYW1lICE9PSB2b2lkIDAgJiYgb2xkTmFtZSAhPT0gbnVsbCAmJiBvbGROYW1lICE9PSAnJ1xuICAgICAgICAgID8gdGFiRGF0YUxpc3QuZmluZCh0YWIgPT4gdGFiLm5hbWUudmFsdWUgPT09IG9sZE5hbWUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBuZXdUYWIgPSBuZXdOYW1lICE9PSB2b2lkIDAgJiYgbmV3TmFtZSAhPT0gbnVsbCAmJiBuZXdOYW1lICE9PSAnJ1xuICAgICAgICAgID8gdGFiRGF0YUxpc3QuZmluZCh0YWIgPT4gdGFiLm5hbWUudmFsdWUgPT09IG5ld05hbWUpXG4gICAgICAgICAgOiBudWxsXG5cbiAgICAgIGlmIChoYWRBY3RpdmF0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgLy8gQWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiByZS1hY3RpdmF0ZWRcbiAgICAgICAgLy8gd2Ugc2hvdWxkIG5vdCBhbmltYXRlIHRoZSB0cmFuc2l0aW9uLlxuICAgICAgICAvLyBDb25zaWRlciBpdCBhcyBpZiB0aGUgY29tcG9uZW50IGhhcyBqdXN0IGJlZW4gbW91bnRlZC5cbiAgICAgICAgaGFkQWN0aXZhdGVkID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9sZFRhYiAmJiBuZXdUYWIpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICBvbGRFbCA9IG9sZFRhYi50YWJJbmRpY2F0b3JSZWYudmFsdWUsXG4gICAgICAgICAgbmV3RWwgPSBuZXdUYWIudGFiSW5kaWNhdG9yUmVmLnZhbHVlXG5cbiAgICAgICAgaWYgKGFuaW1hdGVUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChhbmltYXRlVGltZXIpXG4gICAgICAgICAgYW5pbWF0ZVRpbWVyID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgb2xkRWwuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICBvbGRFbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcbiAgICAgICAgbmV3RWwuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICBuZXdFbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcblxuICAgICAgICBjb25zdFxuICAgICAgICAgIG9sZFBvcyA9IG9sZEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIG5ld1BvcyA9IG5ld0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgICAgbmV3RWwuc3R5bGUudHJhbnNmb3JtID0gcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgICA/IGB0cmFuc2xhdGUzZCgwLCR7IG9sZFBvcy50b3AgLSBuZXdQb3MudG9wIH1weCwwKSBzY2FsZTNkKDEsJHsgbmV3UG9zLmhlaWdodCA/IG9sZFBvcy5oZWlnaHQgLyBuZXdQb3MuaGVpZ2h0IDogMSB9LDEpYFxuICAgICAgICAgIDogYHRyYW5zbGF0ZTNkKCR7IG9sZFBvcy5sZWZ0IC0gbmV3UG9zLmxlZnQgfXB4LDAsMCkgc2NhbGUzZCgkeyBuZXdQb3Mud2lkdGggPyBvbGRQb3Mud2lkdGggLyBuZXdQb3Mud2lkdGggOiAxIH0sMSwxKWBcblxuICAgICAgICAvLyBhbGxvdyBzY29wZSB1cGRhdGVzIHRvIGtpY2sgaW4gKFFSb3V0ZVRhYiBuZWVkcyBtb3JlIHRpbWUpXG4gICAgICAgIHJlZ2lzdGVyQW5pbWF0ZVRpY2soKCkgPT4ge1xuICAgICAgICAgIGFuaW1hdGVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYW5pbWF0ZVRpbWVyID0gbnVsbFxuICAgICAgICAgICAgbmV3RWwuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKSdcbiAgICAgICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJ1xuICAgICAgICAgIH0sIDcwKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAobmV3VGFiICYmIHNjcm9sbGFibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgc2Nyb2xsVG9UYWJFbChuZXdUYWIucm9vdFJlZi52YWx1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb1RhYkVsIChlbCkge1xuICAgICAgY29uc3RcbiAgICAgICAgeyBsZWZ0LCB3aWR0aCwgdG9wLCBoZWlnaHQgfSA9IGNvbnRlbnRSZWYudmFsdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIG5ld1BvcyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIGxldCBvZmZzZXQgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IG5ld1Bvcy50b3AgLSB0b3AgOiBuZXdQb3MubGVmdCAtIGxlZnRcblxuICAgICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgICAgY29udGVudFJlZi52YWx1ZVsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JyBdICs9IE1hdGguZmxvb3Iob2Zmc2V0KVxuICAgICAgICB1cGRhdGVBcnJvd3MoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgb2Zmc2V0ICs9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gbmV3UG9zLmhlaWdodCAtIGhlaWdodCA6IG5ld1Bvcy53aWR0aCAtIHdpZHRoXG4gICAgICBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgICBjb250ZW50UmVmLnZhbHVlWyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnIF0gKz0gTWF0aC5jZWlsKG9mZnNldClcbiAgICAgICAgdXBkYXRlQXJyb3dzKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVBcnJvd3MgKCkge1xuICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRSZWYudmFsdWVcbiAgICAgIGlmIChjb250ZW50ID09PSBudWxsKSByZXR1cm5cblxuICAgICAgY29uc3RcbiAgICAgICAgcmVjdCA9IGNvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHBvcyA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gY29udGVudC5zY3JvbGxUb3AgOiBNYXRoLmFicyhjb250ZW50LnNjcm9sbExlZnQpXG5cbiAgICAgIGlmIChpc1JUTC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBsZWZ0QXJyb3cudmFsdWUgPSBNYXRoLmNlaWwocG9zICsgcmVjdC53aWR0aCkgPCBjb250ZW50LnNjcm9sbFdpZHRoIC0gMVxuICAgICAgICByaWdodEFycm93LnZhbHVlID0gcG9zID4gMFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxlZnRBcnJvdy52YWx1ZSA9IHBvcyA+IDBcbiAgICAgICAgcmlnaHRBcnJvdy52YWx1ZSA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgPyBNYXRoLmNlaWwocG9zICsgcmVjdC5oZWlnaHQpIDwgY29udGVudC5zY3JvbGxIZWlnaHRcbiAgICAgICAgICA6IE1hdGguY2VpbChwb3MgKyByZWN0LndpZHRoKSA8IGNvbnRlbnQuc2Nyb2xsV2lkdGhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltU2Nyb2xsVG8gKHZhbHVlKSB7XG4gICAgICBzY3JvbGxUaW1lciAhPT0gbnVsbCAmJiBjbGVhckludGVydmFsKHNjcm9sbFRpbWVyKVxuICAgICAgc2Nyb2xsVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChzY3JvbGxUb3dhcmRzKHZhbHVlKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHN0b3BBbmltU2Nyb2xsKClcbiAgICAgICAgfVxuICAgICAgfSwgNSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb1N0YXJ0ICgpIHtcbiAgICAgIGFuaW1TY3JvbGxUbyhydGxQb3NDb3JyZWN0aW9uLnZhbHVlID09PSB0cnVlID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvRW5kICgpIHtcbiAgICAgIGFuaW1TY3JvbGxUbyhydGxQb3NDb3JyZWN0aW9uLnZhbHVlID09PSB0cnVlID8gMCA6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BBbmltU2Nyb2xsICgpIHtcbiAgICAgIGlmIChzY3JvbGxUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhckludGVydmFsKHNjcm9sbFRpbWVyKVxuICAgICAgICBzY3JvbGxUaW1lciA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktiZE5hdmlnYXRlIChrZXlDb2RlLCBmcm9tRWwpIHtcbiAgICAgIGNvbnN0IHRhYnMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoXG4gICAgICAgIGNvbnRlbnRSZWYudmFsdWUuY2hpbGRyZW4sXG4gICAgICAgIGVsID0+IGVsID09PSBmcm9tRWwgfHwgKGVsLm1hdGNoZXMgJiYgZWwubWF0Y2hlcygnLnEtdGFiLnEtZm9jdXNhYmxlJykgPT09IHRydWUpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGxlbiA9IHRhYnMubGVuZ3RoXG4gICAgICBpZiAobGVuID09PSAwKSByZXR1cm5cblxuICAgICAgaWYgKGtleUNvZGUgPT09IDM2KSB7IC8vIEhvbWVcbiAgICAgICAgc2Nyb2xsVG9UYWJFbCh0YWJzWyAwIF0pXG4gICAgICAgIHRhYnNbIDAgXS5mb2N1cygpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gMzUpIHsgLy8gRW5kXG4gICAgICAgIHNjcm9sbFRvVGFiRWwodGFic1sgbGVuIC0gMSBdKVxuICAgICAgICB0YWJzWyBsZW4gLSAxIF0uZm9jdXMoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXJQcmV2ID0ga2V5Q29kZSA9PT0gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gMzggLyogQXJyb3dVcCAqLyA6IDM3IC8qIEFycm93TGVmdCAqLylcbiAgICAgIGNvbnN0IGRpck5leHQgPSBrZXlDb2RlID09PSAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyA0MCAvKiBBcnJvd0Rvd24gKi8gOiAzOSAvKiBBcnJvd1JpZ2h0ICovKVxuXG4gICAgICBjb25zdCBkaXIgPSBkaXJQcmV2ID09PSB0cnVlID8gLTEgOiAoZGlyTmV4dCA9PT0gdHJ1ZSA/IDEgOiB2b2lkIDApXG5cbiAgICAgIGlmIChkaXIgIT09IHZvaWQgMCkge1xuICAgICAgICBjb25zdCBydGxEaXIgPSBpc1JUTC52YWx1ZSA9PT0gdHJ1ZSA/IC0xIDogMVxuICAgICAgICBjb25zdCBpbmRleCA9IHRhYnMuaW5kZXhPZihmcm9tRWwpICsgZGlyICogcnRsRGlyXG5cbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW4pIHtcbiAgICAgICAgICBzY3JvbGxUb1RhYkVsKHRhYnNbIGluZGV4IF0pXG4gICAgICAgICAgdGFic1sgaW5kZXggXS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbGV0J3Mgc3BlZWQgdXAgZXhlY3V0aW9uIG9mIHRpbWUtc2Vuc2l0aXZlIHNjcm9sbFRvd2FyZHMoKVxuICAgIC8vIHdpdGggYSBjb21wdXRlZCB2YXJpYWJsZSBieSBkaXJlY3RseSBhcHBseWluZyB0aGUgbWluaW1hbFxuICAgIC8vIG51bWJlciBvZiBpbnN0cnVjdGlvbnMgb24gZ2V0L3NldCBmdW5jdGlvbnNcbiAgICBjb25zdCBwb3NGbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHJ0bFBvc0NvcnJlY3Rpb24udmFsdWUgPT09IHRydWVcbiAgICAgICAgPyB7IGdldDogY29udGVudCA9PiBNYXRoLmFicyhjb250ZW50LnNjcm9sbExlZnQpLCBzZXQ6IChjb250ZW50LCBwb3MpID0+IHsgY29udGVudC5zY3JvbGxMZWZ0ID0gLXBvcyB9IH1cbiAgICAgICAgOiAoXG4gICAgICAgICAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IHsgZ2V0OiBjb250ZW50ID0+IGNvbnRlbnQuc2Nyb2xsVG9wLCBzZXQ6IChjb250ZW50LCBwb3MpID0+IHsgY29udGVudC5zY3JvbGxUb3AgPSBwb3MgfSB9XG4gICAgICAgICAgICAgIDogeyBnZXQ6IGNvbnRlbnQgPT4gY29udGVudC5zY3JvbGxMZWZ0LCBzZXQ6IChjb250ZW50LCBwb3MpID0+IHsgY29udGVudC5zY3JvbGxMZWZ0ID0gcG9zIH0gfVxuICAgICAgICAgIClcbiAgICApKVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG93YXJkcyAodmFsdWUpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50UmVmLnZhbHVlLFxuICAgICAgICB7IGdldCwgc2V0IH0gPSBwb3NGbi52YWx1ZVxuXG4gICAgICBsZXRcbiAgICAgICAgZG9uZSA9IGZhbHNlLFxuICAgICAgICBwb3MgPSBnZXQoY29udGVudClcblxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdmFsdWUgPCBwb3MgPyAtMSA6IDFcblxuICAgICAgcG9zICs9IGRpcmVjdGlvbiAqIDVcblxuICAgICAgaWYgKHBvcyA8IDApIHtcbiAgICAgICAgZG9uZSA9IHRydWVcbiAgICAgICAgcG9zID0gMFxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXG4gICAgICAgIChkaXJlY3Rpb24gPT09IC0xICYmIHBvcyA8PSB2YWx1ZSlcbiAgICAgICAgfHwgKGRpcmVjdGlvbiA9PT0gMSAmJiBwb3MgPj0gdmFsdWUpXG4gICAgICApIHtcbiAgICAgICAgZG9uZSA9IHRydWVcbiAgICAgICAgcG9zID0gdmFsdWVcbiAgICAgIH1cblxuICAgICAgc2V0KGNvbnRlbnQsIHBvcylcbiAgICAgIHVwZGF0ZUFycm93cygpXG5cbiAgICAgIHJldHVybiBkb25lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzUXVlcnlJbmNsdWRlZCAodGFyZ2V0UXVlcnksIG1hdGNoaW5nUXVlcnkpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRhcmdldFF1ZXJ5KSB7XG4gICAgICAgIGlmICh0YXJnZXRRdWVyeVsga2V5IF0gIT09IG1hdGNoaW5nUXVlcnlbIGtleSBdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyAxLiBEbyBub3QgdXNlIGRpcmVjdGx5OyB1c2UgdmVyaWZ5Um91dGVNb2RlbCgpIGluc3RlYWRcbiAgICAvLyAyLiBTaG91bGQgc2V0IGhhZEFjdGl2YXRlZCB0byBmYWxzZSB1cG9uIGV4aXRcbiAgICBmdW5jdGlvbiB1cGRhdGVBY3RpdmVSb3V0ZSAoKSB7XG4gICAgICBsZXQgbmFtZSA9IG51bGwsIGJlc3RTY29yZSA9IHsgbWF0Y2hlZExlbjogMCwgcXVlcnlEaWZmOiA5OTk5LCBocmVmTGVuOiAwIH1cblxuICAgICAgY29uc3QgbGlzdCA9IHRhYkRhdGFMaXN0LmZpbHRlcih0YWIgPT4gdGFiLnJvdXRlRGF0YT8uaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgIGNvbnN0IHsgaGFzaDogY3VycmVudEhhc2gsIHF1ZXJ5OiBjdXJyZW50UXVlcnkgfSA9IHByb3h5LiRyb3V0ZVxuICAgICAgY29uc3QgY3VycmVudFF1ZXJ5TGVuID0gT2JqZWN0LmtleXMoY3VycmVudFF1ZXJ5KS5sZW5ndGhcblxuICAgICAgLy8gVnVlIFJvdXRlciBkb2VzIG5vdCBrZWVwIGFjY291bnQgb2YgaGFzaCAmIHF1ZXJ5IHdoZW4gbWF0Y2hpbmdcbiAgICAgIC8vIHNvIHdlJ3JlIGRvaW5nIHRoaXMgYXMgd2VsbFxuXG4gICAgICBmb3IgKGNvbnN0IHRhYiBvZiBsaXN0KSB7XG4gICAgICAgIGNvbnN0IGV4YWN0ID0gdGFiLnJvdXRlRGF0YS5leGFjdC52YWx1ZSA9PT0gdHJ1ZVxuXG4gICAgICAgIGlmICh0YWIucm91dGVEYXRhWyBleGFjdCA9PT0gdHJ1ZSA/ICdsaW5rSXNFeGFjdEFjdGl2ZScgOiAnbGlua0lzQWN0aXZlJyBdLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgICAgLy8gaXQgY2Fubm90IG1hdGNoIGFueXRoaW5nIGFzIGl0J3Mgbm90IGFjdGl2ZSBub3IgZXhhY3QtYWN0aXZlXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgaGFzaCwgcXVlcnksIG1hdGNoZWQsIGhyZWYgfSA9IHRhYi5yb3V0ZURhdGEucmVzb2x2ZWRMaW5rLnZhbHVlXG4gICAgICAgIGNvbnN0IHF1ZXJ5TGVuID0gT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aFxuXG4gICAgICAgIGlmIChleGFjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChoYXNoICE9PSBjdXJyZW50SGFzaCkge1xuICAgICAgICAgICAgLy8gaXQncyBzZXQgdG8gZXhhY3QgYnV0IGl0IGRvZXNuJ3QgbWF0Y2hlcyB0aGUgaGFzaFxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBxdWVyeUxlbiAhPT0gY3VycmVudFF1ZXJ5TGVuXG4gICAgICAgICAgICB8fCBoYXNRdWVyeUluY2x1ZGVkKGN1cnJlbnRRdWVyeSwgcXVlcnkpID09PSBmYWxzZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gaXQncyBzZXQgdG8gZXhhY3QgYnV0IGl0IGRvZXNuJ3QgbWF0Y2hlcyB0aGUgcXVlcnlcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8geWV5LCB3ZSBmb3VuZCB0aGUgcGVyZmVjdCBtYXRjaCAocm91dGUgKyBoYXNoICsgcXVlcnkpXG4gICAgICAgICAgbmFtZSA9IHRhYi5uYW1lLnZhbHVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNoICE9PSAnJyAmJiBoYXNoICE9PSBjdXJyZW50SGFzaCkge1xuICAgICAgICAgIC8vIGl0IGhhcyBoYXNoIGFuZCBpdCBkb2Vzbid0IG1hdGNoZXNcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHF1ZXJ5TGVuICE9PSAwXG4gICAgICAgICAgJiYgaGFzUXVlcnlJbmNsdWRlZChxdWVyeSwgY3VycmVudFF1ZXJ5KSA9PT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gaXQgaGFzIHF1ZXJ5IGFuZCBpdCBkb2Vzbid0IGluY2x1ZGVzIHRoZSBjdXJyZW50IG9uZVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdTY29yZSA9IHtcbiAgICAgICAgICBtYXRjaGVkTGVuOiBtYXRjaGVkLmxlbmd0aCxcbiAgICAgICAgICBxdWVyeURpZmY6IGN1cnJlbnRRdWVyeUxlbiAtIHF1ZXJ5TGVuLFxuICAgICAgICAgIGhyZWZMZW46IGhyZWYubGVuZ3RoIC0gaGFzaC5sZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdTY29yZS5tYXRjaGVkTGVuID4gYmVzdFNjb3JlLm1hdGNoZWRMZW4pIHtcbiAgICAgICAgICAvLyBpdCBtYXRjaGVzIG1vcmUgcm91dGVzIHNvIGl0J3MgbW9yZSBzcGVjaWZpYyBzbyB3ZSBzZXQgaXQgYXMgY3VycmVudCBjaGFtcGlvblxuICAgICAgICAgIG5hbWUgPSB0YWIubmFtZS52YWx1ZVxuICAgICAgICAgIGJlc3RTY29yZSA9IG5ld1Njb3JlXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdTY29yZS5tYXRjaGVkTGVuICE9PSBiZXN0U2NvcmUubWF0Y2hlZExlbikge1xuICAgICAgICAgIC8vIGl0IG1hdGNoZXMgbGVzcyByb3V0ZXMgdGhhbiB0aGUgY3VycmVudCBjaGFtcGlvbiBzbyB3ZSBkaXNjYXJkIGl0XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdTY29yZS5xdWVyeURpZmYgPCBiZXN0U2NvcmUucXVlcnlEaWZmKSB7XG4gICAgICAgICAgLy8gcXVlcnkgaXMgY2xvc2VyIHRvIHRoZSBjdXJyZW50IG9uZSBzbyB3ZSBzZXQgaXQgYXMgY3VycmVudCBjaGFtcGlvblxuICAgICAgICAgIG5hbWUgPSB0YWIubmFtZS52YWx1ZVxuICAgICAgICAgIGJlc3RTY29yZSA9IG5ld1Njb3JlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3U2NvcmUucXVlcnlEaWZmICE9PSBiZXN0U2NvcmUucXVlcnlEaWZmKSB7XG4gICAgICAgICAgLy8gaXQgbWF0Y2hlcyBsZXNzIHJvdXRlcyB0aGFuIHRoZSBjdXJyZW50IGNoYW1waW9uIHNvIHdlIGRpc2NhcmQgaXRcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1Njb3JlLmhyZWZMZW4gPiBiZXN0U2NvcmUuaHJlZkxlbikge1xuICAgICAgICAgIC8vIGhyZWYgaXMgbGVuZ3RoaWVyIHNvIGl0J3MgbW9yZSBzcGVjaWZpYyBzbyB3ZSBzZXQgaXQgYXMgY3VycmVudCBjaGFtcGlvblxuICAgICAgICAgIG5hbWUgPSB0YWIubmFtZS52YWx1ZVxuICAgICAgICAgIGJlc3RTY29yZSA9IG5ld1Njb3JlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBuYW1lID09PSBudWxsXG4gICAgICAgICYmIHRhYkRhdGFMaXN0LnNvbWUodGFiID0+IHRhYi5yb3V0ZURhdGEgPT09IHZvaWQgMCAmJiB0YWIubmFtZS52YWx1ZSA9PT0gY3VycmVudE1vZGVsLnZhbHVlKSA9PT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIC8vIHdlIHNob3VsZG4ndCBpbnRlcmZlcmUgaWYgbm9uLXJvdXRlIHRhYiBpcyBhY3RpdmVcbiAgICAgICAgaGFkQWN0aXZhdGVkID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZU1vZGVsKHsgbmFtZSwgc2V0Q3VycmVudDogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNpbiAoZSkge1xuICAgICAgcmVtb3ZlRm9jdXNUaW1lb3V0KClcblxuICAgICAgaWYgKFxuICAgICAgICBoYXNGb2N1cy52YWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAmJiByb290UmVmLnZhbHVlICE9PSBudWxsXG4gICAgICAgICYmIGUudGFyZ2V0XG4gICAgICAgICYmIHR5cGVvZiBlLnRhcmdldC5jbG9zZXN0ID09PSAnZnVuY3Rpb24nXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgdGFiID0gZS50YXJnZXQuY2xvc2VzdCgnLnEtdGFiJylcblxuICAgICAgICAvLyBpZiB0aGUgdGFyZ2V0IGlzIGNvbnRhaW5lZCBieSBhIFFUYWIvUVJvdXRlVGFiXG4gICAgICAgIC8vIChpdCBtaWdodCBiZSBvdGhlciBlbGVtZW50cyBmb2N1c2VkLCBsaWtlIGFkZGl0aW9uYWwgUUJ0bilcbiAgICAgICAgaWYgKHRhYiAmJiByb290UmVmLnZhbHVlLmNvbnRhaW5zKHRhYikgPT09IHRydWUpIHtcbiAgICAgICAgICBoYXNGb2N1cy52YWx1ZSA9IHRydWVcbiAgICAgICAgICBzY3JvbGxhYmxlLnZhbHVlID09PSB0cnVlICYmIHNjcm9sbFRvVGFiRWwodGFiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c291dCAoKSB7XG4gICAgICByZWdpc3RlckZvY3VzVGltZW91dCgoKSA9PiB7IGhhc0ZvY3VzLnZhbHVlID0gZmFsc2UgfSwgMzApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmVyaWZ5Um91dGVNb2RlbCAoKSB7XG4gICAgICBpZiAoJHRhYnMuYXZvaWRSb3V0ZVdhdGNoZXIgPT09IGZhbHNlKSB7XG4gICAgICAgIHJlZ2lzdGVyU2Nyb2xsVG9UYWJUaW1lb3V0KHVwZGF0ZUFjdGl2ZVJvdXRlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZVNjcm9sbFRvVGFiVGltZW91dCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2F0Y2hSb3V0ZSAoKSB7XG4gICAgICBpZiAodW53YXRjaFJvdXRlID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uc3QgdW53YXRjaCA9IHdhdGNoKCgpID0+IHByb3h5LiRyb3V0ZS5mdWxsUGF0aCwgdmVyaWZ5Um91dGVNb2RlbClcbiAgICAgICAgdW53YXRjaFJvdXRlID0gKCkgPT4ge1xuICAgICAgICAgIHVud2F0Y2goKVxuICAgICAgICAgIHVud2F0Y2hSb3V0ZSA9IHZvaWQgMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJUYWIgKHRhYkRhdGEpIHtcbiAgICAgIHRhYkRhdGFMaXN0LnB1c2godGFiRGF0YSlcbiAgICAgIHRhYkRhdGFMaXN0TGVuLnZhbHVlKytcblxuICAgICAgcmVjYWxjdWxhdGVTY3JvbGwoKVxuXG4gICAgICAvLyBpZiBpdCdzIGEgUVRhYiBvciB3ZSBkb24ndCBoYXZlIFZ1ZSBSb3V0ZXJcbiAgICAgIGlmICh0YWJEYXRhLnJvdXRlRGF0YSA9PT0gdm9pZCAwIHx8IHByb3h5LiRyb3V0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIC8vIHdlIHNob3VsZCBwb3NpdGlvbiB0byB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIgKGlmIGFueSlcbiAgICAgICAgcmVnaXN0ZXJTY3JvbGxUb1RhYlRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChzY3JvbGxhYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN1cnJlbnRNb2RlbC52YWx1ZVxuICAgICAgICAgICAgY29uc3QgbmV3VGFiID0gdmFsdWUgIT09IHZvaWQgMCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gJydcbiAgICAgICAgICAgICAgPyB0YWJEYXRhTGlzdC5maW5kKHRhYiA9PiB0YWIubmFtZS52YWx1ZSA9PT0gdmFsdWUpXG4gICAgICAgICAgICAgIDogbnVsbFxuXG4gICAgICAgICAgICBuZXdUYWIgJiYgc2Nyb2xsVG9UYWJFbChuZXdUYWIucm9vdFJlZi52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvLyBlbHNlIGlmIGl0J3MgYSBRUm91dGVUYWIgd2l0aCBhIHZhbGlkIGxpbmtcbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBzdGFydCB3YXRjaGluZyByb3V0ZVxuICAgICAgICB3YXRjaFJvdXRlKClcblxuICAgICAgICBpZiAodGFiRGF0YS5yb3V0ZURhdGEuaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHZlcmlmeVJvdXRlTW9kZWwoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5yZWdpc3RlclRhYiAodGFiRGF0YSkge1xuICAgICAgdGFiRGF0YUxpc3Quc3BsaWNlKHRhYkRhdGFMaXN0LmluZGV4T2YodGFiRGF0YSksIDEpXG4gICAgICB0YWJEYXRhTGlzdExlbi52YWx1ZS0tXG5cbiAgICAgIHJlY2FsY3VsYXRlU2Nyb2xsKClcblxuICAgICAgaWYgKHVud2F0Y2hSb3V0ZSAhPT0gdm9pZCAwICYmIHRhYkRhdGEucm91dGVEYXRhICE9PSB2b2lkIDApIHtcbiAgICAgICAgLy8gdW53YXRjaCByb3V0ZSBpZiB3ZSBkb24ndCBoYXZlIGFueSBRUm91dGVUYWJzIGxlZnRcbiAgICAgICAgaWYgKHRhYkRhdGFMaXN0LmV2ZXJ5KHRhYiA9PiB0YWIucm91dGVEYXRhID09PSB2b2lkIDApID09PSB0cnVlKSB7XG4gICAgICAgICAgdW53YXRjaFJvdXRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoZW4gdXBkYXRlIG1vZGVsXG4gICAgICAgIHZlcmlmeVJvdXRlTW9kZWwoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0ICR0YWJzID0ge1xuICAgICAgY3VycmVudE1vZGVsLFxuICAgICAgdGFiUHJvcHMsXG4gICAgICBoYXNGb2N1cyxcbiAgICAgIGhhc0FjdGl2ZVRhYixcblxuICAgICAgcmVnaXN0ZXJUYWIsXG4gICAgICB1bnJlZ2lzdGVyVGFiLFxuXG4gICAgICB2ZXJpZnlSb3V0ZU1vZGVsLFxuICAgICAgdXBkYXRlTW9kZWwsXG4gICAgICBvbktiZE5hdmlnYXRlLFxuXG4gICAgICBhdm9pZFJvdXRlV2F0Y2hlcjogZmFsc2UgLy8gZmFsc2UgfCBzdHJpbmcgKHVpZClcbiAgICB9XG5cbiAgICBwcm92aWRlKHRhYnNLZXksICR0YWJzKVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICBhbmltYXRlVGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KGFuaW1hdGVUaW1lcilcbiAgICAgIHN0b3BBbmltU2Nyb2xsKClcbiAgICAgIHVud2F0Y2hSb3V0ZT8uKClcbiAgICB9XG5cbiAgICBsZXQgaGFkUm91dGVXYXRjaGVyLCBoYWRBY3RpdmF0ZWRcblxuICAgIG9uQmVmb3JlVW5tb3VudChjbGVhbnVwKVxuXG4gICAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBoYWRSb3V0ZVdhdGNoZXIgPSB1bndhdGNoUm91dGUgIT09IHZvaWQgMFxuICAgICAgY2xlYW51cCgpXG4gICAgfSlcblxuICAgIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIGlmIChoYWRSb3V0ZVdhdGNoZXIgPT09IHRydWUpIHtcbiAgICAgICAgd2F0Y2hSb3V0ZSgpXG4gICAgICAgIGhhZEFjdGl2YXRlZCA9IHRydWVcbiAgICAgICAgdmVyaWZ5Um91dGVNb2RlbCgpXG4gICAgICB9XG5cbiAgICAgIHJlY2FsY3VsYXRlU2Nyb2xsKClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHJvbGU6ICd0YWJsaXN0JyxcbiAgICAgICAgb25Gb2N1c2luLFxuICAgICAgICBvbkZvY3Vzb3V0XG4gICAgICB9LCBbXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiB1cGRhdGVDb250YWluZXIgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogY29udGVudFJlZixcbiAgICAgICAgICBjbGFzczogaW5uZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICBvblNjcm9sbDogdXBkYXRlQXJyb3dzXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKSxcblxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYnNfX2Fycm93IHEtdGFic19fYXJyb3ctLWxlZnQgYWJzb2x1dGUgcS10YWJfX2ljb24nXG4gICAgICAgICAgICArIChsZWZ0QXJyb3cudmFsdWUgPT09IHRydWUgPyAnJyA6ICcgcS10YWJzX19hcnJvdy0tZmFkZWQnKSxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5sZWZ0SWNvbiB8fCAkcS5pY29uU2V0LnRhYnNbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3VwJyA6ICdsZWZ0JyBdLFxuICAgICAgICAgIG9uTW91c2Vkb3duUGFzc2l2ZTogc2Nyb2xsVG9TdGFydCxcbiAgICAgICAgICBvblRvdWNoc3RhcnRQYXNzaXZlOiBzY3JvbGxUb1N0YXJ0LFxuICAgICAgICAgIG9uTW91c2V1cFBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsLFxuICAgICAgICAgIG9uTW91c2VsZWF2ZVBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsLFxuICAgICAgICAgIG9uVG91Y2hlbmRQYXNzaXZlOiBzdG9wQW5pbVNjcm9sbFxuICAgICAgICB9KSxcblxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYnNfX2Fycm93IHEtdGFic19fYXJyb3ctLXJpZ2h0IGFic29sdXRlIHEtdGFiX19pY29uJ1xuICAgICAgICAgICAgKyAocmlnaHRBcnJvdy52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyBxLXRhYnNfX2Fycm93LS1mYWRlZCcpLFxuICAgICAgICAgIG5hbWU6IHByb3BzLnJpZ2h0SWNvbiB8fCAkcS5pY29uU2V0LnRhYnNbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2Rvd24nIDogJ3JpZ2h0JyBdLFxuICAgICAgICAgIG9uTW91c2Vkb3duUGFzc2l2ZTogc2Nyb2xsVG9FbmQsXG4gICAgICAgICAgb25Ub3VjaHN0YXJ0UGFzc2l2ZTogc2Nyb2xsVG9FbmQsXG4gICAgICAgICAgb25Nb3VzZXVwUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGwsXG4gICAgICAgICAgb25Nb3VzZWxlYXZlUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGwsXG4gICAgICAgICAgb25Ub3VjaGVuZFBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsXG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIGluamVjdCwgb25CZWZvcmVVbm1vdW50LCBvbk1vdW50ZWQsIHdpdGhEaXJlY3RpdmVzLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuXG5pbXBvcnQgUmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmlwcGxlL1JpcHBsZS5qcydcblxuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSwgc2hvdWxkSWdub3JlS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5rZXlib2FyZC9rZXktY29tcG9zaXRpb24uanMnXG5pbXBvcnQgeyB0YWJzS2V5LCBlbXB0eVJlbmRlckZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zeW1ib2xzL3N5bWJvbHMuanMnXG5pbXBvcnQgeyBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50L2V2ZW50LmpzJ1xuaW1wb3J0IHVpZCBmcm9tICcuLi8uLi91dGlscy91aWQvdWlkLmpzJ1xuaW1wb3J0IHsgaXNEZWVwRXF1YWwgfSBmcm9tICcuLi8uLi91dGlscy9pcy9pcy5qcydcblxubGV0IGlkID0gMFxuXG5leHBvcnQgY29uc3QgdXNlVGFiRW1pdHMgPSBbICdjbGljaycsICdrZXlkb3duJyBdXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJQcm9wcyA9IHtcbiAgaWNvbjogU3RyaW5nLFxuICBsYWJlbDogWyBOdW1iZXIsIFN0cmluZyBdLFxuXG4gIGFsZXJ0OiBbIEJvb2xlYW4sIFN0cmluZyBdLFxuICBhbGVydEljb246IFN0cmluZyxcblxuICBuYW1lOiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6ICgpID0+IGB0XyR7IGlkKysgfWBcbiAgfSxcblxuICBub0NhcHM6IEJvb2xlYW4sXG5cbiAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgZGlzYWJsZTogQm9vbGVhbixcblxuICBjb250ZW50Q2xhc3M6IFN0cmluZyxcblxuICByaXBwbGU6IHtcbiAgICB0eXBlOiBbIEJvb2xlYW4sIE9iamVjdCBdLFxuICAgIGRlZmF1bHQ6IHRydWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMsIHNsb3RzLCBlbWl0LCByb3V0ZURhdGEpIHtcbiAgY29uc3QgJHRhYnMgPSBpbmplY3QodGFic0tleSwgZW1wdHlSZW5kZXJGbilcbiAgaWYgKCR0YWJzID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgY29uc29sZS5lcnJvcignUVRhYi9RUm91dGVUYWIgY29tcG9uZW50IG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFUYWJzJylcbiAgICByZXR1cm4gZW1wdHlSZW5kZXJGblxuICB9XG5cbiAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICBjb25zdCBibHVyVGFyZ2V0UmVmID0gcmVmKG51bGwpXG4gIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgY29uc3QgdGFiSW5kaWNhdG9yUmVmID0gcmVmKG51bGwpXG5cbiAgY29uc3QgcmlwcGxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgcHJvcHMucmlwcGxlID09PSBmYWxzZVxuICAgICAgPyBmYWxzZVxuICAgICAgOiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7IGtleUNvZGVzOiBbIDEzLCAzMiBdLCBlYXJseTogdHJ1ZSB9LFxuICAgICAgICBwcm9wcy5yaXBwbGUgPT09IHRydWUgPyB7fSA6IHByb3BzLnJpcHBsZVxuICAgICAgKVxuICApKVxuXG4gIGNvbnN0IGlzQWN0aXZlID0gY29tcHV0ZWQoKCkgPT4gJHRhYnMuY3VycmVudE1vZGVsLnZhbHVlID09PSBwcm9wcy5uYW1lKVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXRhYiByZWxhdGl2ZS1wb3NpdGlvbiBzZWxmLXN0cmV0Y2ggZmxleCBmbGV4LWNlbnRlciB0ZXh0LWNlbnRlcidcbiAgICArIChcbiAgICAgIGlzQWN0aXZlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gKFxuICAgICAgICAgICAgJyBxLXRhYi0tYWN0aXZlJ1xuICAgICAgICAgICAgKyAoJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQ2xhc3MgPyAnICcgKyAkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVDbGFzcyA6ICcnKVxuICAgICAgICAgICAgKyAoJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQ29sb3IgPyBgIHRleHQtJHsgJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQ29sb3IgfWAgOiAnJylcbiAgICAgICAgICAgICsgKCR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUJnQ29sb3IgPyBgIGJnLSR7ICR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUJnQ29sb3IgfWAgOiAnJylcbiAgICAgICAgICApXG4gICAgICAgIDogJyBxLXRhYi0taW5hY3RpdmUnXG4gICAgKVxuICAgICsgKHByb3BzLmljb24gJiYgcHJvcHMubGFiZWwgJiYgJHRhYnMudGFiUHJvcHMudmFsdWUuaW5saW5lTGFiZWwgPT09IGZhbHNlID8gJyBxLXRhYi0tZnVsbCcgOiAnJylcbiAgICArIChwcm9wcy5ub0NhcHMgPT09IHRydWUgfHwgJHRhYnMudGFiUHJvcHMudmFsdWUubm9DYXBzID09PSB0cnVlID8gJyBxLXRhYi0tbm8tY2FwcycgOiAnJylcbiAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAnIHEtZm9jdXNhYmxlIHEtaG92ZXJhYmxlIGN1cnNvci1wb2ludGVyJylcbiAgICArIChyb3V0ZURhdGEgIT09IHZvaWQgMCA/IHJvdXRlRGF0YS5saW5rQ2xhc3MudmFsdWUgOiAnJylcbiAgKVxuXG4gIGNvbnN0IGlubmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXRhYl9fY29udGVudCBzZWxmLXN0cmV0Y2ggZmxleC1jZW50ZXIgcmVsYXRpdmUtcG9zaXRpb24gcS1hbmNob3ItLXNraXAgbm9uLXNlbGVjdGFibGUgJ1xuICAgICsgKCR0YWJzLnRhYlByb3BzLnZhbHVlLmlubGluZUxhYmVsID09PSB0cnVlID8gJ3JvdyBuby13cmFwIHEtdGFiX19jb250ZW50LS1pbmxpbmUnIDogJ2NvbHVtbicpXG4gICAgKyAocHJvcHMuY29udGVudENsYXNzICE9PSB2b2lkIDAgPyBgICR7IHByb3BzLmNvbnRlbnRDbGFzcyB9YCA6ICcnKVxuICApXG5cbiAgY29uc3QgdGFiSW5kZXggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgKFxuICAgICAgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZVxuICAgICAgfHwgJHRhYnMuaGFzRm9jdXMudmFsdWUgPT09IHRydWVcbiAgICAgIHx8IChpc0FjdGl2ZS52YWx1ZSA9PT0gZmFsc2UgJiYgJHRhYnMuaGFzQWN0aXZlVGFiLnZhbHVlID09PSB0cnVlKVxuICAgIClcbiAgICAgID8gLTFcbiAgICAgIDogcHJvcHMudGFiaW5kZXggfHwgMFxuICApKVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2sgKGUsIGtleWJvYXJkKSB7XG4gICAgaWYgKGtleWJvYXJkICE9PSB0cnVlICYmIGU/LnFBdm9pZEZvY3VzICE9PSB0cnVlKSB7XG4gICAgICBibHVyVGFyZ2V0UmVmLnZhbHVlPy5mb2N1cygpXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIC8vIHdlIHNob3VsZCBoaW5kZXIgbmF0aXZlIG5hdmlnYXRpb24gdGhvdWdoXG4gICAgICBpZiAocm91dGVEYXRhPy5oYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBkbyB3ZSBoYXZlIGEgUVRhYj9cbiAgICBpZiAocm91dGVEYXRhID09PSB2b2lkIDApIHtcbiAgICAgICR0YWJzLnVwZGF0ZU1vZGVsKHsgbmFtZTogcHJvcHMubmFtZSB9KVxuICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlRGF0YS5oYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBnbyA9IChvcHRzID0ge30pID0+IHtcbiAgICAgICAgLy8gaWYgcmVxdWlyaW5nIHRvIGdvIHRvIGFub3RoZXIgcm91dGUsIHRoZW4gd2VcbiAgICAgICAgLy8gbGV0IHRoZSBRVGFicyByb3V0ZSB3YXRjaGVyIGRvIGl0cyBqb2IsXG4gICAgICAgIC8vIG90aGVyd2lzZSBkaXJlY3RseSBzZWxlY3QgdGhpc1xuICAgICAgICBsZXQgaGFyZEVycm9yXG4gICAgICAgIGNvbnN0IHJlcUlkID0gb3B0cy50byA9PT0gdm9pZCAwIHx8IGlzRGVlcEVxdWFsKG9wdHMudG8sIHByb3BzLnRvKSA9PT0gdHJ1ZVxuICAgICAgICAgID8gKCR0YWJzLmF2b2lkUm91dGVXYXRjaGVyID0gdWlkKCkpXG4gICAgICAgICAgOiBudWxsXG5cbiAgICAgICAgcmV0dXJuIHJvdXRlRGF0YS5uYXZpZ2F0ZVRvUm91dGVyTGluayhlLCB7IC4uLm9wdHMsIHJldHVyblJvdXRlckVycm9yOiB0cnVlIH0pXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiB7IGhhcmRFcnJvciA9IGVyciB9KVxuICAgICAgICAgIC50aGVuKHNvZnRFcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAocmVxSWQgPT09ICR0YWJzLmF2b2lkUm91dGVXYXRjaGVyKSB7XG4gICAgICAgICAgICAgICR0YWJzLmF2b2lkUm91dGVXYXRjaGVyID0gZmFsc2VcblxuICAgICAgICAgICAgICAvLyBpZiB3ZSBkb24ndCBoYXZlIGFueSBoYXJkIGVycm9ycyBvciBhbnkgc29mdCBlcnJvcnMsIGV4Y2VwdCBmb3JcbiAgICAgICAgICAgICAgLy8gd2hlbiBuYXZpZ2F0aW5nIHRvIHRoZSBzYW1lIHJvdXRlIChvbiBhbGwgb3RoZXIgc29mdCBlcnJvcnMsXG4gICAgICAgICAgICAgIC8vIGxpa2Ugd2hlbiBuYXZpZ2F0aW9uIHdhcyBhYm9ydGVkIGluIGEgbmF2IGd1YXJkLCB3ZSBkb24ndCBhY3RpdmF0ZSB0aGlzIHRhYilcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGhhcmRFcnJvciA9PT0gdm9pZCAwICYmIChcbiAgICAgICAgICAgICAgICAgIHNvZnRFcnJvciA9PT0gdm9pZCAwXG4gICAgICAgICAgICAgICAgICB8fCAoc29mdEVycm9yLm1lc3NhZ2U/LnN0YXJ0c1dpdGgoJ0F2b2lkZWQgcmVkdW5kYW50IG5hdmlnYXRpb24nKSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICR0YWJzLnVwZGF0ZU1vZGVsKHsgbmFtZTogcHJvcHMubmFtZSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRzLnJldHVyblJvdXRlckVycm9yID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYXJkRXJyb3IgIT09IHZvaWQgMCA/IFByb21pc2UucmVqZWN0KGhhcmRFcnJvcikgOiBzb2Z0RXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBlbWl0KCdjbGljaycsIGUsIGdvKVxuICAgICAgZS5kZWZhdWx0UHJldmVudGVkICE9PSB0cnVlICYmIGdvKClcblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZW1pdCgnY2xpY2snLCBlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25LZXlkb3duIChlKSB7XG4gICAgaWYgKGlzS2V5Q29kZShlLCBbIDEzLCAzMiBdKSkge1xuICAgICAgb25DbGljayhlLCB0cnVlKVxuICAgIH1cbiAgICBlbHNlIGlmIChcbiAgICAgIHNob3VsZElnbm9yZUtleShlKSAhPT0gdHJ1ZVxuICAgICAgJiYgZS5rZXlDb2RlID49IDM1XG4gICAgICAmJiBlLmtleUNvZGUgPD0gNDBcbiAgICAgICYmIGUuYWx0S2V5ICE9PSB0cnVlXG4gICAgICAmJiBlLm1ldGFLZXkgIT09IHRydWVcbiAgICApIHtcbiAgICAgICR0YWJzLm9uS2JkTmF2aWdhdGUoZS5rZXlDb2RlLCBwcm94eS4kZWwpID09PSB0cnVlICYmIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgfVxuXG4gICAgZW1pdCgna2V5ZG93bicsIGUpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb250ZW50ICgpIHtcbiAgICBjb25zdFxuICAgICAgbmFycm93ID0gJHRhYnMudGFiUHJvcHMudmFsdWUubmFycm93SW5kaWNhdG9yLFxuICAgICAgY29udGVudCA9IFtdLFxuICAgICAgaW5kaWNhdG9yID0gaCgnZGl2Jywge1xuICAgICAgICByZWY6IHRhYkluZGljYXRvclJlZixcbiAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAncS10YWJfX2luZGljYXRvcicsXG4gICAgICAgICAgJHRhYnMudGFiUHJvcHMudmFsdWUuaW5kaWNhdG9yQ2xhc3NcbiAgICAgICAgXVxuICAgICAgfSlcblxuICAgIHByb3BzLmljb24gIT09IHZvaWQgMCAmJiBjb250ZW50LnB1c2goXG4gICAgICBoKFFJY29uLCB7XG4gICAgICAgIGNsYXNzOiAncS10YWJfX2ljb24nLFxuICAgICAgICBuYW1lOiBwcm9wcy5pY29uXG4gICAgICB9KVxuICAgIClcblxuICAgIHByb3BzLmxhYmVsICE9PSB2b2lkIDAgJiYgY29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFiX19sYWJlbCcgfSwgcHJvcHMubGFiZWwpXG4gICAgKVxuXG4gICAgcHJvcHMuYWxlcnQgIT09IGZhbHNlICYmIGNvbnRlbnQucHVzaChcbiAgICAgIHByb3BzLmFsZXJ0SWNvbiAhPT0gdm9pZCAwXG4gICAgICAgID8gaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiAncS10YWJfX2FsZXJ0LWljb24nLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy5hbGVydCAhPT0gdHJ1ZVxuICAgICAgICAgICAgPyBwcm9wcy5hbGVydFxuICAgICAgICAgICAgOiB2b2lkIDAsXG4gICAgICAgICAgbmFtZTogcHJvcHMuYWxlcnRJY29uXG4gICAgICAgIH0pXG4gICAgICAgIDogaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS10YWJfX2FsZXJ0J1xuICAgICAgICAgICAgKyAocHJvcHMuYWxlcnQgIT09IHRydWUgPyBgIHRleHQtJHsgcHJvcHMuYWxlcnQgfWAgOiAnJylcbiAgICAgICAgfSlcbiAgICApXG5cbiAgICBuYXJyb3cgPT09IHRydWUgJiYgY29udGVudC5wdXNoKGluZGljYXRvcilcblxuICAgIGNvbnN0IG5vZGUgPSBbXG4gICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1mb2N1cy1oZWxwZXInLCB0YWJpbmRleDogLTEsIHJlZjogYmx1clRhcmdldFJlZiB9KSxcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6IGlubmVyQ2xhc3MudmFsdWUgfSwgaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBjb250ZW50KSlcbiAgICBdXG5cbiAgICBuYXJyb3cgPT09IGZhbHNlICYmIG5vZGUucHVzaChpbmRpY2F0b3IpXG5cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgY29uc3QgdGFiRGF0YSA9IHtcbiAgICBuYW1lOiBjb21wdXRlZCgoKSA9PiBwcm9wcy5uYW1lKSxcbiAgICByb290UmVmLFxuICAgIHRhYkluZGljYXRvclJlZixcbiAgICByb3V0ZURhdGFcbiAgfVxuXG4gIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgJHRhYnMudW5yZWdpc3RlclRhYih0YWJEYXRhKVxuICB9KVxuXG4gIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgJHRhYnMucmVnaXN0ZXJUYWIodGFiRGF0YSlcbiAgfSlcblxuICBmdW5jdGlvbiByZW5kZXJUYWIgKHRhZywgY3VzdG9tRGF0YSkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICByZWY6IHJvb3RSZWYsXG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIHRhYmluZGV4OiB0YWJJbmRleC52YWx1ZSxcbiAgICAgIHJvbGU6ICd0YWInLFxuICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBpc0FjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAndHJ1ZScgOiB2b2lkIDAsXG4gICAgICBvbkNsaWNrLFxuICAgICAgb25LZXlkb3duLFxuICAgICAgLi4uY3VzdG9tRGF0YVxuICAgIH1cblxuICAgIHJldHVybiB3aXRoRGlyZWN0aXZlcyhcbiAgICAgIGgodGFnLCBkYXRhLCBnZXRDb250ZW50KCkpLFxuICAgICAgWyBbIFJpcHBsZSwgcmlwcGxlLnZhbHVlIF0gXVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7IHJlbmRlclRhYiwgJHRhYnMgfVxufVxuIiwiaW1wb3J0IHVzZVRhYiwgeyB1c2VUYWJQcm9wcywgdXNlVGFiRW1pdHMgfSBmcm9tICcuL3VzZS10YWIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWInLFxuXG4gIHByb3BzOiB1c2VUYWJQcm9wcyxcblxuICBlbWl0czogdXNlVGFiRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHJlbmRlclRhYiB9ID0gdXNlVGFiKHByb3BzLCBzbG90cywgZW1pdClcbiAgICByZXR1cm4gKCkgPT4gcmVuZGVyVGFiKCdkaXYnKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9wbGF0Zm9ybS9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IHsgY3JlYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0TW9kaWZpZXJEaXJlY3Rpb25zLCBzaG91bGRTdGFydCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUudG91Y2gvdG91Y2guanMnXG5pbXBvcnQgeyBhZGRFdnQsIGNsZWFuRXZ0LCBwb3NpdGlvbiwgbGVmdENsaWNrLCBzdG9wQW5kUHJldmVudCwgcHJldmVudERyYWdnYWJsZSwgbm9vcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50L2V2ZW50LmpzJ1xuaW1wb3J0IHsgY2xlYXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnNlbGVjdGlvbi9zZWxlY3Rpb24uanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtL25vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0uanMnXG5cbmZ1bmN0aW9uIHBhcnNlQXJnIChhcmcpIHtcbiAgLy8gZGVsdGEgKG1pbiB2ZWxvY2l0eSAtLSBkaXN0IC8gdGltZSlcbiAgLy8gbW9iaWxlIG1pbiBkaXN0YW5jZSBvbiBmaXJzdCBtb3ZlXG4gIC8vIGRlc2t0b3AgbWluIGRpc3RhbmNlIHVudGlsIGRlY2lkaW5nIGlmIGl0J3MgYSBzd2lwZSBvciBub3RcbiAgY29uc3QgZGF0YSA9IFsgMC4wNiwgNiwgNTAgXVxuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyAmJiBhcmcubGVuZ3RoKSB7XG4gICAgYXJnLnNwbGl0KCc6JykuZm9yRWFjaCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQodmFsKVxuICAgICAgdiAmJiAoZGF0YVsgaW5kZXggXSA9IHYpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpcmVjdGl2ZShfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgPyB7IG5hbWU6ICd0b3VjaC1zd2lwZScsIGdldFNTUlByb3BzIH1cbiAgOiB7XG4gICAgICBuYW1lOiAndG91Y2gtc3dpcGUnLFxuXG4gICAgICBiZWZvcmVNb3VudCAoZWwsIHsgdmFsdWUsIGFyZywgbW9kaWZpZXJzIH0pIHtcbiAgICAgICAgLy8gZWFybHkgcmV0dXJuLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2RpZmllcnMubW91c2UgIT09IHRydWVcbiAgICAgICAgICAmJiBjbGllbnQuaGFzLnRvdWNoICE9PSB0cnVlXG4gICAgICAgICkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgbW91c2VDYXB0dXJlID0gbW9kaWZpZXJzLm1vdXNlQ2FwdHVyZSA9PT0gdHJ1ZSA/ICdDYXB0dXJlJyA6ICcnXG5cbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgIGhhbmRsZXI6IHZhbHVlLFxuICAgICAgICAgIHNlbnNpdGl2aXR5OiBwYXJzZUFyZyhhcmcpLFxuICAgICAgICAgIGRpcmVjdGlvbjogZ2V0TW9kaWZpZXJEaXJlY3Rpb25zKG1vZGlmaWVycyksXG5cbiAgICAgICAgICBub29wLFxuXG4gICAgICAgICAgbW91c2VTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnQoZXZ0LCBjdHgpICYmIGxlZnRDbGljayhldnQpKSB7XG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdtb3VzZW1vdmUnLCAnbW92ZScsIGBub3RQYXNzaXZlJHsgbW91c2VDYXB0dXJlIH1gIF0sXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNldXAnLCAnZW5kJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIGN0eC5zdGFydChldnQsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHRvdWNoU3RhcnQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0KGV2dCwgY3R4KSkge1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2htb3ZlJywgJ21vdmUnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGNhbmNlbCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGVuZCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc3RhcnQgKGV2dCwgbW91c2VFdmVudCkge1xuICAgICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgdHJ1ZSlcblxuICAgICAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oZXZ0KVxuXG4gICAgICAgICAgICBjdHguZXZlbnQgPSB7XG4gICAgICAgICAgICAgIHg6IHBvcy5sZWZ0LFxuICAgICAgICAgICAgICB5OiBwb3MudG9wLFxuICAgICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICBtb3VzZTogbW91c2VFdmVudCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgZGlyOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBtb3ZlIChldnQpIHtcbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQgPT09IHZvaWQgMCkgcmV0dXJuXG5cbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQuZGlyICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBzdG9wQW5kUHJldmVudChldnQpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKSAtIGN0eC5ldmVudC50aW1lXG5cbiAgICAgICAgICAgIGlmICh0aW1lID09PSAwKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgcG9zID0gcG9zaXRpb24oZXZ0KSxcbiAgICAgICAgICAgICAgZGlzdFggPSBwb3MubGVmdCAtIGN0eC5ldmVudC54LFxuICAgICAgICAgICAgICBhYnNYID0gTWF0aC5hYnMoZGlzdFgpLFxuICAgICAgICAgICAgICBkaXN0WSA9IHBvcy50b3AgLSBjdHguZXZlbnQueSxcbiAgICAgICAgICAgICAgYWJzWSA9IE1hdGguYWJzKGRpc3RZKVxuXG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50Lm1vdXNlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGlmIChhYnNYIDwgY3R4LnNlbnNpdGl2aXR5WyAxIF0gJiYgYWJzWSA8IGN0eC5zZW5zaXRpdml0eVsgMSBdKSB7XG4gICAgICAgICAgICAgICAgY3R4LmVuZChldnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlzIHVzZXIgdHJ5aW5nIHRvIHNlbGVjdCB0ZXh0P1xuICAgICAgICAgICAgLy8gaWYgc28sIHRoZW4gc29tZXRoaW5nIHNob3VsZCBiZSByZXBvcnRlZCBoZXJlXG4gICAgICAgICAgICAvLyAocHJldmlvdXMgc2VsZWN0aW9uLCBpZiBhbnksIHdhcyBkaXNjYXJkZWQgd2hlbiBzd2lwZSBzdGFydGVkKVxuICAgICAgICAgICAgZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgIGN0eC5lbmQoZXZ0KVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFic1ggPCBjdHguc2Vuc2l0aXZpdHlbIDIgXSAmJiBhYnNZIDwgY3R4LnNlbnNpdGl2aXR5WyAyIF0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgIHZlbFggPSBhYnNYIC8gdGltZSxcbiAgICAgICAgICAgICAgdmVsWSA9IGFic1kgLyB0aW1lXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYIDwgYWJzWVxuICAgICAgICAgICAgICAmJiBhYnNYIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFkgPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSBkaXN0WSA8IDAgPyAndXAnIDogJ2Rvd24nXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5ob3Jpem9udGFsID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGFic1ggPiBhYnNZXG4gICAgICAgICAgICAgICYmIGFic1kgPCAxMDBcbiAgICAgICAgICAgICAgJiYgdmVsWCA+IGN0eC5zZW5zaXRpdml0eVsgMCBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRpciA9IGRpc3RYIDwgMCA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLnVwID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGFic1ggPCBhYnNZXG4gICAgICAgICAgICAgICYmIGRpc3RZIDwgMFxuICAgICAgICAgICAgICAmJiBhYnNYIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFkgPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSAndXAnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5kb3duID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGFic1ggPCBhYnNZXG4gICAgICAgICAgICAgICYmIGRpc3RZID4gMFxuICAgICAgICAgICAgICAmJiBhYnNYIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFkgPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSAnZG93bidcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLmxlZnQgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgYWJzWCA+IGFic1lcbiAgICAgICAgICAgICAgJiYgZGlzdFggPCAwXG4gICAgICAgICAgICAgICYmIGFic1kgPCAxMDBcbiAgICAgICAgICAgICAgJiYgdmVsWCA+IGN0eC5zZW5zaXRpdml0eVsgMCBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRpciA9ICdsZWZ0J1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24ucmlnaHQgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgYWJzWCA+IGFic1lcbiAgICAgICAgICAgICAgJiYgZGlzdFggPiAwXG4gICAgICAgICAgICAgICYmIGFic1kgPCAxMDBcbiAgICAgICAgICAgICAgJiYgdmVsWCA+IGN0eC5zZW5zaXRpdml0eVsgMCBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRpciA9ICdyaWdodCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5kaXIgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHN0b3BBbmRQcmV2ZW50KGV2dClcblxuICAgICAgICAgICAgICBpZiAoY3R4LmV2ZW50Lm1vdXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCduby1wb2ludGVyLWV2ZW50cy0tY2hpbGRyZW4nKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm9uLXNlbGVjdGFibGUnKVxuICAgICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uKClcblxuICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB3aXRoRGVsYXkgPT4ge1xuICAgICAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCA9IHZvaWQgMFxuXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vbi1zZWxlY3RhYmxlJylcblxuICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXBvaW50ZXItZXZlbnRzLS1jaGlsZHJlbicpXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmICh3aXRoRGVsYXkgPT09IHRydWUpIHsgc2V0VGltZW91dChyZW1vdmUsIDUwKSB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHsgcmVtb3ZlKCkgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGN0eC5oYW5kbGVyKHtcbiAgICAgICAgICAgICAgICBldnQsXG4gICAgICAgICAgICAgICAgdG91Y2g6IGN0eC5ldmVudC5tb3VzZSAhPT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBtb3VzZTogY3R4LmV2ZW50Lm1vdXNlLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogY3R4LmV2ZW50LmRpcixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGltZSxcbiAgICAgICAgICAgICAgICBkaXN0YW5jZToge1xuICAgICAgICAgICAgICAgICAgeDogYWJzWCxcbiAgICAgICAgICAgICAgICAgIHk6IGFic1lcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgY3R4LmVuZChldnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGVuZCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50ID09PSB2b2lkIDApIHJldHVyblxuXG4gICAgICAgICAgICBjbGVhbkV2dChjdHgsICd0ZW1wJylcbiAgICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIGZhbHNlKVxuICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cD8uKHRydWUpXG4gICAgICAgICAgICBpZiAoKGV2dCAhPT0gdm9pZCAwKSAmJiAoY3R4LmV2ZW50LmRpciAhPT0gZmFsc2UpKSBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgICAgICAgIGN0eC5ldmVudCA9IHZvaWQgMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsLl9fcXRvdWNoc3dpcGUgPSBjdHhcblxuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBmb3IgVU1EIHRvbyB3aGVyZSBtb2RpZmllcnMgd2lsbCBiZSBsb3dlcmNhc2VkIHRvIHdvcmtcbiAgICAgICAgICBjb25zdCBjYXB0dXJlID0gbW9kaWZpZXJzLm1vdXNlQ2FwdHVyZSA9PT0gdHJ1ZSB8fCBtb2RpZmllcnMubW91c2VjYXB0dXJlID09PSB0cnVlXG4gICAgICAgICAgICA/ICdDYXB0dXJlJ1xuICAgICAgICAgICAgOiAnJ1xuXG4gICAgICAgICAgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgICBbIGVsLCAnbW91c2Vkb3duJywgJ21vdXNlU3RhcnQnLCBgcGFzc2l2ZSR7IGNhcHR1cmUgfWAgXVxuICAgICAgICAgIF0pXG4gICAgICAgIH1cblxuICAgICAgICBjbGllbnQuaGFzLnRvdWNoID09PSB0cnVlICYmIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICd0b3VjaHN0YXJ0JywgJ3RvdWNoU3RhcnQnLCBgcGFzc2l2ZSR7IG1vZGlmaWVycy5jYXB0dXJlID09PSB0cnVlID8gJ0NhcHR1cmUnIDogJycgfWAgXSxcbiAgICAgICAgICBbIGVsLCAndG91Y2htb3ZlJywgJ25vb3AnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0gLy8gY2Fubm90IGJlIHBhc3NpdmUgKGV4OiBpT1Mgc2Nyb2xsKVxuICAgICAgICBdKVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlZCAoZWwsIGJpbmRpbmdzKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcXRvdWNoc3dpcGVcblxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAoYmluZGluZ3Mub2xkVmFsdWUgIT09IGJpbmRpbmdzLnZhbHVlKSB7XG4gICAgICAgICAgICB0eXBlb2YgYmluZGluZ3MudmFsdWUgIT09ICdmdW5jdGlvbicgJiYgY3R4LmVuZCgpXG4gICAgICAgICAgICBjdHguaGFuZGxlciA9IGJpbmRpbmdzLnZhbHVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3R4LmRpcmVjdGlvbiA9IGdldE1vZGlmaWVyRGlyZWN0aW9ucyhiaW5kaW5ncy5tb2RpZmllcnMpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGJlZm9yZVVubW91bnQgKGVsKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcXRvdWNoc3dpcGVcblxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjbGVhbkV2dChjdHgsICdtYWluJylcbiAgICAgICAgICBjbGVhbkV2dChjdHgsICd0ZW1wJylcblxuICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIGZhbHNlKVxuICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXA/LigpXG5cbiAgICAgICAgICBkZWxldGUgZWwuX19xdG91Y2hzd2lwZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuKVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBnZXRDYWNoZTogX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gICAgICA/IChfLCBkZWZhdWx0VmFsdWUpID0+IChcbiAgICAgICAgICB0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZSgpXG4gICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZVxuICAgICAgICApXG4gICAgICA6IChrZXksIGRlZmF1bHRWYWx1ZSkgPT4gKFxuICAgICAgICAgIGNhY2hlWyBrZXkgXSA9PT0gdm9pZCAwXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICBjYWNoZVsga2V5IF0gPSAoXG4gICAgICAgICAgICAgICAgICB0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlKClcbiAgICAgICAgICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogY2FjaGVbIGtleSBdXG4gICAgICAgICksXG5cbiAgICBzZXRDYWNoZSAoa2V5LCBvYmopIHtcbiAgICAgIGNhY2hlWyBrZXkgXSA9IG9ialxuICAgIH0sXG5cbiAgICBoYXNDYWNoZSAoa2V5KSB7XG4gICAgICByZXR1cm4gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsIGtleSlcbiAgICB9LFxuXG4gICAgY2xlYXJDYWNoZSAoa2V5KSB7XG4gICAgICBpZiAoa2V5ICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGVsZXRlIGNhY2hlWyBrZXkgXVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIGdldEN1cnJlbnRJbnN0YW5jZSwgVHJhbnNpdGlvbiwgS2VlcEFsaXZlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgVG91Y2hTd2lwZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoLXN3aXBlL1RvdWNoU3dpcGUuanMnXG5cbmltcG9ydCB1c2VSZW5kZXJDYWNoZSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtcmVuZGVyLWNhY2hlL3VzZS1yZW5kZXItY2FjaGUuanMnXG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtdGltZW91dC91c2UtdGltZW91dC5qcydcblxuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5pbXBvcnQgeyBnZXROb3JtYWxpemVkVk5vZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS52bS92bS5qcydcblxuZXhwb3J0IGNvbnN0IHVzZVBhbmVsQ2hpbGRQcm9wcyA9IHtcbiAgbmFtZTogeyByZXF1aXJlZDogdHJ1ZSB9LFxuICBkaXNhYmxlOiBCb29sZWFuXG59XG5cbmNvbnN0IFBhbmVsV3JhcHBlciA9IHtcbiAgc2V0dXAgKF8sIHsgc2xvdHMgfSkge1xuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICBjbGFzczogJ3EtcGFuZWwgc2Nyb2xsJyxcbiAgICAgIHJvbGU6ICd0YWJwYW5lbCdcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlUGFuZWxQcm9wcyA9IHtcbiAgbW9kZWxWYWx1ZToge1xuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG5cbiAgYW5pbWF0ZWQ6IEJvb2xlYW4sXG4gIGluZmluaXRlOiBCb29sZWFuLFxuICBzd2lwZWFibGU6IEJvb2xlYW4sXG4gIHZlcnRpY2FsOiBCb29sZWFuLFxuXG4gIHRyYW5zaXRpb25QcmV2OiBTdHJpbmcsXG4gIHRyYW5zaXRpb25OZXh0OiBTdHJpbmcsXG4gIHRyYW5zaXRpb25EdXJhdGlvbjoge1xuICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICBkZWZhdWx0OiAzMDBcbiAgfSxcblxuICBrZWVwQWxpdmU6IEJvb2xlYW4sXG4gIGtlZXBBbGl2ZUluY2x1ZGU6IFsgU3RyaW5nLCBBcnJheSwgUmVnRXhwIF0sXG4gIGtlZXBBbGl2ZUV4Y2x1ZGU6IFsgU3RyaW5nLCBBcnJheSwgUmVnRXhwIF0sXG4gIGtlZXBBbGl2ZU1heDogTnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCB1c2VQYW5lbEVtaXRzID0gWyAndXBkYXRlOm1vZGVsVmFsdWUnLCAnYmVmb3JlVHJhbnNpdGlvbicsICd0cmFuc2l0aW9uJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IHsgZ2V0Q2FjaGUgfSA9IHVzZVJlbmRlckNhY2hlKClcbiAgY29uc3QgeyByZWdpc3RlclRpbWVvdXQgfSA9IHVzZVRpbWVvdXQoKVxuXG4gIGxldCBwYW5lbHMsIGZvcmNlZFBhbmVsVHJhbnNpdGlvblxuXG4gIGNvbnN0IHBhbmVsVHJhbnNpdGlvbiA9IHJlZihudWxsKVxuXG4gIC8qXG4gICAqIFNob3VsZCBub3QgYmUgcmVhY3RpdmUgYmVjYXVzZSBpdCdzIGFzc2lnbmVkIG9uIHJlbmRlclxuICAgKiBhbmQgaXQgd2lsbCB0cmlnZ2VyIGEgc3Vic2VxdWVudCB1c2VsZXNzIHJlbmRlci5cbiAgICpcbiAgICogU2hvdWxkIGJlIGFuIG9iamVjdCB0aG91Z2gsIGJlY2F1c2UgaXQgaXMgYmVpbmcgZXhwb3J0ZWQuXG4gICAqIE90aGVyd2lzZSwgdGhlIGN1cnJlbnQgdmFsdWUgd291bGQgYmUgZXhwb3J0ZWQgYW5kIG5vIHN1YnNlcXVlbnRcbiAgICogdXBkYXRlcyB3aWxsIGJlIHJlZmxlY3RlZCBpbiB0aGUgZXhwb3J0ZWQgdmFsdWUuXG4gICAqL1xuICBjb25zdCBwYW5lbEluZGV4ID0geyB2YWx1ZTogbnVsbCB9XG5cbiAgZnVuY3Rpb24gb25Td2lwZSAoZXZ0KSB7XG4gICAgY29uc3QgZGlyID0gcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndXAnIDogJ2xlZnQnXG4gICAgZ29Ub1BhbmVsQnlPZmZzZXQoKHByb3h5LiRxLmxhbmcucnRsID09PSB0cnVlID8gLTEgOiAxKSAqIChldnQuZGlyZWN0aW9uID09PSBkaXIgPyAxIDogLTEpKVxuICB9XG5cbiAgY29uc3QgcGFuZWxEaXJlY3RpdmVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIC8vIGlmIHByb3BzLnN3aXBlYWJsZVxuICAgIHJldHVybiBbIFtcbiAgICAgIFRvdWNoU3dpcGUsXG4gICAgICBvblN3aXBlLFxuICAgICAgdm9pZCAwLFxuICAgICAge1xuICAgICAgICBob3Jpem9udGFsOiBwcm9wcy52ZXJ0aWNhbCAhPT0gdHJ1ZSxcbiAgICAgICAgdmVydGljYWw6IHByb3BzLnZlcnRpY2FsLFxuICAgICAgICBtb3VzZTogdHJ1ZVxuICAgICAgfVxuICAgIF0gXVxuICB9KVxuXG4gIGNvbnN0IHRyYW5zaXRpb25QcmV2ID0gY29tcHV0ZWQoKCkgPT5cbiAgICBwcm9wcy50cmFuc2l0aW9uUHJldiB8fCBgc2xpZGUtJHsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnZG93bicgOiAncmlnaHQnIH1gXG4gIClcblxuICBjb25zdCB0cmFuc2l0aW9uTmV4dCA9IGNvbXB1dGVkKCgpID0+XG4gICAgcHJvcHMudHJhbnNpdGlvbk5leHQgfHwgYHNsaWRlLSR7IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3VwJyA6ICdsZWZ0JyB9YFxuICApXG5cbiAgY29uc3QgdHJhbnNpdGlvblN0eWxlID0gY29tcHV0ZWQoXG4gICAgKCkgPT4gYC0tcS10cmFuc2l0aW9uLWR1cmF0aW9uOiAkeyBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24gfW1zYFxuICApXG5cbiAgY29uc3QgY29udGVudEtleSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICB0eXBlb2YgcHJvcHMubW9kZWxWYWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHByb3BzLm1vZGVsVmFsdWUgPT09ICdudW1iZXInXG4gICAgICA/IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgIDogU3RyaW5nKHByb3BzLm1vZGVsVmFsdWUpXG4gICkpXG5cbiAgY29uc3Qga2VlcEFsaXZlUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgIGluY2x1ZGU6IHByb3BzLmtlZXBBbGl2ZUluY2x1ZGUsXG4gICAgZXhjbHVkZTogcHJvcHMua2VlcEFsaXZlRXhjbHVkZSxcbiAgICBtYXg6IHByb3BzLmtlZXBBbGl2ZU1heFxuICB9KSlcblxuICBjb25zdCBuZWVkc1VuaXF1ZUtlZXBBbGl2ZVdyYXBwZXIgPSBjb21wdXRlZCgoKSA9PlxuICAgIHByb3BzLmtlZXBBbGl2ZUluY2x1ZGUgIT09IHZvaWQgMFxuICAgIHx8IHByb3BzLmtlZXBBbGl2ZUV4Y2x1ZGUgIT09IHZvaWQgMFxuICApXG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBpc1ZhbGlkUGFuZWxOYW1lKG5ld1ZhbCkgPT09IHRydWVcbiAgICAgID8gZ2V0UGFuZWxJbmRleChuZXdWYWwpXG4gICAgICA6IC0xXG5cbiAgICBpZiAoZm9yY2VkUGFuZWxUcmFuc2l0aW9uICE9PSB0cnVlKSB7XG4gICAgICB1cGRhdGVQYW5lbFRyYW5zaXRpb24oXG4gICAgICAgIGluZGV4ID09PSAtMSA/IDAgOiAoaW5kZXggPCBnZXRQYW5lbEluZGV4KG9sZFZhbCkgPyAtMSA6IDEpXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHBhbmVsSW5kZXgudmFsdWUgIT09IGluZGV4KSB7XG4gICAgICBwYW5lbEluZGV4LnZhbHVlID0gaW5kZXhcbiAgICAgIGVtaXQoJ2JlZm9yZVRyYW5zaXRpb24nLCBuZXdWYWwsIG9sZFZhbClcbiAgICAgIHJlZ2lzdGVyVGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVtaXQoJ3RyYW5zaXRpb24nLCBuZXdWYWwsIG9sZFZhbClcbiAgICAgIH0sIHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gbmV4dFBhbmVsICgpIHsgZ29Ub1BhbmVsQnlPZmZzZXQoMSkgfVxuICBmdW5jdGlvbiBwcmV2aW91c1BhbmVsICgpIHsgZ29Ub1BhbmVsQnlPZmZzZXQoLTEpIH1cblxuICBmdW5jdGlvbiBnb1RvUGFuZWwgKG5hbWUpIHtcbiAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG5hbWUpXG4gIH1cblxuICBmdW5jdGlvbiBpc1ZhbGlkUGFuZWxOYW1lIChuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUgIT09IHZvaWQgMCAmJiBuYW1lICE9PSBudWxsICYmIG5hbWUgIT09ICcnXG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYW5lbEluZGV4IChuYW1lKSB7XG4gICAgcmV0dXJuIHBhbmVscy5maW5kSW5kZXgocGFuZWwgPT4ge1xuICAgICAgcmV0dXJuIHBhbmVsLnByb3BzLm5hbWUgPT09IG5hbWVcbiAgICAgICAgJiYgcGFuZWwucHJvcHMuZGlzYWJsZSAhPT0gJydcbiAgICAgICAgJiYgcGFuZWwucHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBnZXRFbmFibGVkUGFuZWxzICgpIHtcbiAgICByZXR1cm4gcGFuZWxzLmZpbHRlcihwYW5lbCA9PiB7XG4gICAgICByZXR1cm4gcGFuZWwucHJvcHMuZGlzYWJsZSAhPT0gJydcbiAgICAgICAgJiYgcGFuZWwucHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQYW5lbFRyYW5zaXRpb24gKGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHZhbCA9IGRpcmVjdGlvbiAhPT0gMCAmJiBwcm9wcy5hbmltYXRlZCA9PT0gdHJ1ZSAmJiBwYW5lbEluZGV4LnZhbHVlICE9PSAtMVxuICAgICAgPyAncS10cmFuc2l0aW9uLS0nICsgKGRpcmVjdGlvbiA9PT0gLTEgPyB0cmFuc2l0aW9uUHJldi52YWx1ZSA6IHRyYW5zaXRpb25OZXh0LnZhbHVlKVxuICAgICAgOiBudWxsXG5cbiAgICBpZiAocGFuZWxUcmFuc2l0aW9uLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgIHBhbmVsVHJhbnNpdGlvbi52YWx1ZSA9IHZhbFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdvVG9QYW5lbEJ5T2Zmc2V0IChkaXJlY3Rpb24sIHN0YXJ0SW5kZXggPSBwYW5lbEluZGV4LnZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gc3RhcnRJbmRleCArIGRpcmVjdGlvblxuXG4gICAgd2hpbGUgKGluZGV4ICE9PSAtMSAmJiBpbmRleCA8IHBhbmVscy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG9wdCA9IHBhbmVsc1sgaW5kZXggXVxuXG4gICAgICBpZiAoXG4gICAgICAgIG9wdCAhPT0gdm9pZCAwXG4gICAgICAgICYmIG9wdC5wcm9wcy5kaXNhYmxlICE9PSAnJ1xuICAgICAgICAmJiBvcHQucHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIHVwZGF0ZVBhbmVsVHJhbnNpdGlvbihkaXJlY3Rpb24pXG4gICAgICAgIGZvcmNlZFBhbmVsVHJhbnNpdGlvbiA9IHRydWVcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBvcHQucHJvcHMubmFtZSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZm9yY2VkUGFuZWxUcmFuc2l0aW9uID0gZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaW5kZXggKz0gZGlyZWN0aW9uXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmluZmluaXRlID09PSB0cnVlICYmIHBhbmVscy5sZW5ndGggIT09IDAgJiYgc3RhcnRJbmRleCAhPT0gLTEgJiYgc3RhcnRJbmRleCAhPT0gcGFuZWxzLmxlbmd0aCkge1xuICAgICAgZ29Ub1BhbmVsQnlPZmZzZXQoZGlyZWN0aW9uLCBkaXJlY3Rpb24gPT09IC0xID8gcGFuZWxzLmxlbmd0aCA6IC0xKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBhbmVsSW5kZXggKCkge1xuICAgIGNvbnN0IGluZGV4ID0gZ2V0UGFuZWxJbmRleChwcm9wcy5tb2RlbFZhbHVlKVxuXG4gICAgaWYgKHBhbmVsSW5kZXgudmFsdWUgIT09IGluZGV4KSB7XG4gICAgICBwYW5lbEluZGV4LnZhbHVlID0gaW5kZXhcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFuZWxDb250ZW50Q2hpbGQgKCkge1xuICAgIGNvbnN0IHBhbmVsID0gaXNWYWxpZFBhbmVsTmFtZShwcm9wcy5tb2RlbFZhbHVlKSA9PT0gdHJ1ZVxuICAgICAgJiYgdXBkYXRlUGFuZWxJbmRleCgpXG4gICAgICAmJiBwYW5lbHNbIHBhbmVsSW5kZXgudmFsdWUgXVxuXG4gICAgcmV0dXJuIHByb3BzLmtlZXBBbGl2ZSA9PT0gdHJ1ZVxuICAgICAgPyBbXG4gICAgICAgICAgaChLZWVwQWxpdmUsIGtlZXBBbGl2ZVByb3BzLnZhbHVlLCBbXG4gICAgICAgICAgICBoKFxuICAgICAgICAgICAgICBuZWVkc1VuaXF1ZUtlZXBBbGl2ZVdyYXBwZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAgICAgICA/IGdldENhY2hlKGNvbnRlbnRLZXkudmFsdWUsICgpID0+ICh7IC4uLlBhbmVsV3JhcHBlciwgbmFtZTogY29udGVudEtleS52YWx1ZSB9KSlcbiAgICAgICAgICAgICAgICA6IFBhbmVsV3JhcHBlcixcbiAgICAgICAgICAgICAgeyBrZXk6IGNvbnRlbnRLZXkudmFsdWUsIHN0eWxlOiB0cmFuc2l0aW9uU3R5bGUudmFsdWUgfSxcbiAgICAgICAgICAgICAgKCkgPT4gcGFuZWxcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtcGFuZWwgc2Nyb2xsJyxcbiAgICAgICAgICAgIHN0eWxlOiB0cmFuc2l0aW9uU3R5bGUudmFsdWUsXG4gICAgICAgICAgICBrZXk6IGNvbnRlbnRLZXkudmFsdWUsXG4gICAgICAgICAgICByb2xlOiAndGFicGFuZWwnXG4gICAgICAgICAgfSwgWyBwYW5lbCBdKVxuICAgICAgICBdXG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYW5lbENvbnRlbnQgKCkge1xuICAgIGlmIChwYW5lbHMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgIHJldHVybiBwcm9wcy5hbmltYXRlZCA9PT0gdHJ1ZVxuICAgICAgPyBbIGgoVHJhbnNpdGlvbiwgeyBuYW1lOiBwYW5lbFRyYW5zaXRpb24udmFsdWUgfSwgZ2V0UGFuZWxDb250ZW50Q2hpbGQpIF1cbiAgICAgIDogZ2V0UGFuZWxDb250ZW50Q2hpbGQoKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlUGFuZWxzTGlzdCAoc2xvdHMpIHtcbiAgICBwYW5lbHMgPSBnZXROb3JtYWxpemVkVk5vZGVzKFxuICAgICAgaFNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG4gICAgKS5maWx0ZXIoXG4gICAgICBwYW5lbCA9PiBwYW5lbC5wcm9wcyAhPT0gbnVsbFxuICAgICAgICAmJiBwYW5lbC5wcm9wcy5zbG90ID09PSB2b2lkIDBcbiAgICAgICAgJiYgaXNWYWxpZFBhbmVsTmFtZShwYW5lbC5wcm9wcy5uYW1lKSA9PT0gdHJ1ZVxuICAgIClcblxuICAgIHJldHVybiBwYW5lbHMubGVuZ3RoXG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYW5lbHMgKCkge1xuICAgIHJldHVybiBwYW5lbHNcbiAgfVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgbmV4dDogbmV4dFBhbmVsLFxuICAgIHByZXZpb3VzOiBwcmV2aW91c1BhbmVsLFxuICAgIGdvVG86IGdvVG9QYW5lbFxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGFuZWxJbmRleCxcbiAgICBwYW5lbERpcmVjdGl2ZXMsXG5cbiAgICB1cGRhdGVQYW5lbHNMaXN0LFxuICAgIHVwZGF0ZVBhbmVsSW5kZXgsXG5cbiAgICBnZXRQYW5lbENvbnRlbnQsXG4gICAgZ2V0RW5hYmxlZFBhbmVscyxcbiAgICBnZXRQYW5lbHMsXG5cbiAgICBpc1ZhbGlkUGFuZWxOYW1lLFxuXG4gICAga2VlcEFsaXZlUHJvcHMsXG4gICAgbmVlZHNVbmlxdWVLZWVwQWxpdmVXcmFwcGVyLFxuXG4gICAgZ29Ub1BhbmVsQnlPZmZzZXQsXG4gICAgZ29Ub1BhbmVsLFxuXG4gICAgbmV4dFBhbmVsLFxuICAgIHByZXZpb3VzUGFuZWxcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB1c2VQYW5lbCwgeyB1c2VQYW5lbFByb3BzLCB1c2VQYW5lbEVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtcGFuZWwvdXNlLXBhbmVsLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYlBhbmVscycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VQYW5lbFByb3BzLFxuICAgIC4uLnVzZURhcmtQcm9wc1xuICB9LFxuXG4gIGVtaXRzOiB1c2VQYW5lbEVtaXRzLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3QgeyB1cGRhdGVQYW5lbHNMaXN0LCBnZXRQYW5lbENvbnRlbnQsIHBhbmVsRGlyZWN0aXZlcyB9ID0gdXNlUGFuZWwoKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10YWItcGFuZWxzIHEtcGFuZWwtcGFyZW50J1xuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYi1wYW5lbHMtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB1cGRhdGVQYW5lbHNMaXN0KHNsb3RzKVxuXG4gICAgICByZXR1cm4gaERpcihcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSxcbiAgICAgICAgZ2V0UGFuZWxDb250ZW50KCksXG4gICAgICAgICdwYW4nLFxuICAgICAgICBwcm9wcy5zd2lwZWFibGUsXG4gICAgICAgICgpID0+IHBhbmVsRGlyZWN0aXZlcy52YWx1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGggfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHVzZVBhbmVsQ2hpbGRQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLXBhbmVsL3VzZS1wYW5lbC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGFiUGFuZWwnLFxuXG4gIHByb3BzOiB1c2VQYW5lbENoaWxkUHJvcHMsXG5cbiAgc2V0dXAgKF8sIHsgc2xvdHMgfSkge1xuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWItcGFuZWwnLCByb2xlOiAndGFicGFuZWwnIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiY29uc3QgcmVSR0JBID0gL15yZ2IoYSk/XFwoKFxcZHsxLDN9KSwoXFxkezEsM30pLChcXGR7MSwzfSksPyhbMDFdP1xcLj9cXGQqPyk/XFwpJC9cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4ICh7IHIsIGcsIGIsIGEgfSkge1xuICBjb25zdCBhbHBoYSA9IGEgIT09IHZvaWQgMFxuXG4gIHIgPSBNYXRoLnJvdW5kKHIpXG4gIGcgPSBNYXRoLnJvdW5kKGcpXG4gIGIgPSBNYXRoLnJvdW5kKGIpXG5cbiAgaWYgKFxuICAgIHIgPiAyNTVcbiAgICB8fCBnID4gMjU1XG4gICAgfHwgYiA+IDI1NVxuICAgIHx8IChhbHBoYSAmJiBhID4gMTAwKVxuICApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCAzIG51bWJlcnMgYmVsb3cgMjU2IChhbmQgb3B0aW9uYWxseSBvbmUgYmVsb3cgMTAwKScpXG4gIH1cblxuICBhID0gYWxwaGFcbiAgICA/IChNYXRoLnJvdW5kKDI1NSAqIGEgLyAxMDApIHwgMSA8PCA4KS50b1N0cmluZygxNikuc2xpY2UoMSlcbiAgICA6ICcnXG5cbiAgcmV0dXJuICcjJyArICgoYiB8IGcgPDwgOCB8IHIgPDwgMTYpIHwgMSA8PCAyNCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpICsgYVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9TdHJpbmcgKHsgciwgZywgYiwgYSB9KSB7XG4gIHJldHVybiBgcmdiJHsgYSAhPT0gdm9pZCAwID8gJ2EnIDogJycgfSgkeyByIH0sJHsgZyB9LCR7IGIgfSR7IGEgIT09IHZvaWQgMCA/ICcsJyArIChhIC8gMTAwKSA6ICcnIH0pYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IgKGhleCkge1xuICBpZiAodHlwZW9mIGhleCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpXG4gIH1cblxuICBoZXggPSBoZXgucmVwbGFjZSgvXiMvLCAnJylcblxuICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xuICAgIGhleCA9IGhleFsgMCBdICsgaGV4WyAwIF0gKyBoZXhbIDEgXSArIGhleFsgMSBdICsgaGV4WyAyIF0gKyBoZXhbIDIgXVxuICB9XG4gIGVsc2UgaWYgKGhleC5sZW5ndGggPT09IDQpIHtcbiAgICBoZXggPSBoZXhbIDAgXSArIGhleFsgMCBdICsgaGV4WyAxIF0gKyBoZXhbIDEgXSArIGhleFsgMiBdICsgaGV4WyAyIF0gKyBoZXhbIDMgXSArIGhleFsgMyBdXG4gIH1cblxuICBjb25zdCBudW0gPSBwYXJzZUludChoZXgsIDE2KVxuXG4gIHJldHVybiBoZXgubGVuZ3RoID4gNlxuICAgID8geyByOiBudW0gPj4gMjQgJiAyNTUsIGc6IG51bSA+PiAxNiAmIDI1NSwgYjogbnVtID4+IDggJiAyNTUsIGE6IE1hdGgucm91bmQoKG51bSAmIDI1NSkgLyAyLjU1KSB9XG4gICAgOiB7IHI6IG51bSA+PiAxNiwgZzogbnVtID4+IDggJiAyNTUsIGI6IG51bSAmIDI1NSB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoc3ZUb1JnYiAoeyBoLCBzLCB2LCBhIH0pIHtcbiAgbGV0IHIsIGcsIGJcbiAgcyA9IHMgLyAxMDBcbiAgdiA9IHYgLyAxMDBcblxuICBoID0gaCAvIDM2MFxuICBjb25zdFxuICAgIGkgPSBNYXRoLmZsb29yKGggKiA2KSxcbiAgICBmID0gaCAqIDYgLSBpLFxuICAgIHAgPSB2ICogKDEgLSBzKSxcbiAgICBxID0gdiAqICgxIC0gZiAqIHMpLFxuICAgIHQgPSB2ICogKDEgLSAoMSAtIGYpICogcylcblxuICBzd2l0Y2ggKGkgJSA2KSB7XG4gICAgY2FzZSAwOlxuICAgICAgciA9IHZcbiAgICAgIGcgPSB0XG4gICAgICBiID0gcFxuICAgICAgYnJlYWtcbiAgICBjYXNlIDE6XG4gICAgICByID0gcVxuICAgICAgZyA9IHZcbiAgICAgIGIgPSBwXG4gICAgICBicmVha1xuICAgIGNhc2UgMjpcbiAgICAgIHIgPSBwXG4gICAgICBnID0gdlxuICAgICAgYiA9IHRcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAzOlxuICAgICAgciA9IHBcbiAgICAgIGcgPSBxXG4gICAgICBiID0gdlxuICAgICAgYnJlYWtcbiAgICBjYXNlIDQ6XG4gICAgICByID0gdFxuICAgICAgZyA9IHBcbiAgICAgIGIgPSB2XG4gICAgICBicmVha1xuICAgIGNhc2UgNTpcbiAgICAgIHIgPSB2XG4gICAgICBnID0gcFxuICAgICAgYiA9IHFcbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHI6IE1hdGgucm91bmQociAqIDI1NSksXG4gICAgZzogTWF0aC5yb3VuZChnICogMjU1KSxcbiAgICBiOiBNYXRoLnJvdW5kKGIgKiAyNTUpLFxuICAgIGFcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9Ic3YgKHsgciwgZywgYiwgYSB9KSB7XG4gIGNvbnN0XG4gICAgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgbWluID0gTWF0aC5taW4ociwgZywgYiksXG4gICAgZCA9IG1heCAtIG1pbixcbiAgICBzID0gKG1heCA9PT0gMCA/IDAgOiBkIC8gbWF4KSxcbiAgICB2ID0gbWF4IC8gMjU1XG4gIGxldCBoXG5cbiAgc3dpdGNoIChtYXgpIHtcbiAgICBjYXNlIG1pbjpcbiAgICAgIGggPSAwXG4gICAgICBicmVha1xuICAgIGNhc2UgcjpcbiAgICAgIGggPSAoZyAtIGIpICsgZCAqIChnIDwgYiA/IDYgOiAwKVxuICAgICAgaCAvPSA2ICogZFxuICAgICAgYnJlYWtcbiAgICBjYXNlIGc6XG4gICAgICBoID0gKGIgLSByKSArIGQgKiAyXG4gICAgICBoIC89IDYgKiBkXG4gICAgICBicmVha1xuICAgIGNhc2UgYjpcbiAgICAgIGggPSAociAtIGcpICsgZCAqIDRcbiAgICAgIGggLz0gNiAqIGRcbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGg6IE1hdGgucm91bmQoaCAqIDM2MCksXG4gICAgczogTWF0aC5yb3VuZChzICogMTAwKSxcbiAgICB2OiBNYXRoLnJvdW5kKHYgKiAxMDApLFxuICAgIGFcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dFRvUmdiIChzdHIpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKVxuICB9XG5cbiAgY29uc3QgY29sb3IgPSBzdHIucmVwbGFjZSgvIC9nLCAnJylcblxuICBjb25zdCBtID0gcmVSR0JBLmV4ZWMoY29sb3IpXG5cbiAgaWYgKG0gPT09IG51bGwpIHtcbiAgICByZXR1cm4gaGV4VG9SZ2IoY29sb3IpXG4gIH1cblxuICBjb25zdCByZ2IgPSB7XG4gICAgcjogTWF0aC5taW4oMjU1LCBwYXJzZUludChtWyAyIF0sIDEwKSksXG4gICAgZzogTWF0aC5taW4oMjU1LCBwYXJzZUludChtWyAzIF0sIDEwKSksXG4gICAgYjogTWF0aC5taW4oMjU1LCBwYXJzZUludChtWyA0IF0sIDEwKSlcbiAgfVxuXG4gIGlmIChtWyAxIF0pIHtcbiAgICBjb25zdCBhbHBoYSA9IHBhcnNlRmxvYXQobVsgNSBdKVxuICAgIHJnYi5hID0gTWF0aC5taW4oMSwgaXNOYU4oYWxwaGEpID09PSB0cnVlID8gMSA6IGFscGhhKSAqIDEwMFxuICB9XG5cbiAgcmV0dXJuIHJnYlxufVxuXG4vKiB3b3JrcyBhcyBkYXJrZW4gaWYgcGVyY2VudCA8IDAgKi9cbmV4cG9ydCBmdW5jdGlvbiBsaWdodGVuIChjb2xvciwgcGVyY2VudCkge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nIGFzIGNvbG9yJylcbiAgfVxuICBpZiAodHlwZW9mIHBlcmNlbnQgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBudW1lcmljIHBlcmNlbnQnKVxuICB9XG5cbiAgY29uc3QgcmdiID0gdGV4dFRvUmdiKGNvbG9yKSxcbiAgICB0ID0gcGVyY2VudCA8IDAgPyAwIDogMjU1LFxuICAgIHAgPSBNYXRoLmFicyhwZXJjZW50KSAvIDEwMCxcbiAgICBSID0gcmdiLnIsXG4gICAgRyA9IHJnYi5nLFxuICAgIEIgPSByZ2IuYlxuXG4gIHJldHVybiAnIycgKyAoXG4gICAgMHgxMDAwMDAwICsgKE1hdGgucm91bmQoKHQgLSBSKSAqIHApICsgUikgKiAweDEwMDAwXG4gICAgKyAoTWF0aC5yb3VuZCgodCAtIEcpICogcCkgKyBHKSAqIDB4MTAwXG4gICAgKyAoTWF0aC5yb3VuZCgodCAtIEIpICogcCkgKyBCKVxuICApLnRvU3RyaW5nKDE2KS5zbGljZSgxKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbHVtaW5vc2l0eSAoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycgJiYgKCFjb2xvciB8fCBjb2xvci5yID09PSB2b2lkIDApKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYSB7ciwgZywgYn0gb2JqZWN0IGFzIGNvbG9yJylcbiAgfVxuXG4gIGNvbnN0XG4gICAgcmdiID0gdHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyA/IHRleHRUb1JnYihjb2xvcikgOiBjb2xvcixcbiAgICByID0gcmdiLnIgLyAyNTUsXG4gICAgZyA9IHJnYi5nIC8gMjU1LFxuICAgIGIgPSByZ2IuYiAvIDI1NSxcbiAgICBSID0gciA8PSAwLjAzOTI4ID8gciAvIDEyLjkyIDogTWF0aC5wb3coKHIgKyAwLjA1NSkgLyAxLjA1NSwgMi40KSxcbiAgICBHID0gZyA8PSAwLjAzOTI4ID8gZyAvIDEyLjkyIDogTWF0aC5wb3coKGcgKyAwLjA1NSkgLyAxLjA1NSwgMi40KSxcbiAgICBCID0gYiA8PSAwLjAzOTI4ID8gYiAvIDEyLjkyIDogTWF0aC5wb3coKGIgKyAwLjA1NSkgLyAxLjA1NSwgMi40KVxuICByZXR1cm4gMC4yMTI2ICogUiArIDAuNzE1MiAqIEcgKyAwLjA3MjIgKiBCXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmlnaHRuZXNzIChjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJyAmJiAoIWNvbG9yIHx8IGNvbG9yLnIgPT09IHZvaWQgMCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZyBvciBhIHtyLCBnLCBifSBvYmplY3QgYXMgY29sb3InKVxuICB9XG5cbiAgY29uc3QgcmdiID0gdHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJ1xuICAgID8gdGV4dFRvUmdiKGNvbG9yKVxuICAgIDogY29sb3JcblxuICByZXR1cm4gKHJnYi5yICogMjk5ICsgcmdiLmcgKiA1ODcgKyByZ2IuYiAqIDExNCkgLyAxMDAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBibGVuZCAoZmdDb2xvciwgYmdDb2xvcikge1xuICBpZiAodHlwZW9mIGZnQ29sb3IgIT09ICdzdHJpbmcnICYmICghZmdDb2xvciB8fCBmZ0NvbG9yLnIgPT09IHZvaWQgMCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZyBvciBhIHtyLCBnLCBiWywgYV19IG9iamVjdCBhcyBmZ0NvbG9yJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgYmdDb2xvciAhPT0gJ3N0cmluZycgJiYgKCFiZ0NvbG9yIHx8IGJnQ29sb3IuciA9PT0gdm9pZCAwKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGEge3IsIGcsIGJbLCBhXX0gb2JqZWN0IGFzIGJnQ29sb3InKVxuICB9XG5cbiAgY29uc3RcbiAgICByZ2IxID0gdHlwZW9mIGZnQ29sb3IgPT09ICdzdHJpbmcnID8gdGV4dFRvUmdiKGZnQ29sb3IpIDogZmdDb2xvcixcbiAgICByMSA9IHJnYjEuciAvIDI1NSxcbiAgICBnMSA9IHJnYjEuZyAvIDI1NSxcbiAgICBiMSA9IHJnYjEuYiAvIDI1NSxcbiAgICBhMSA9IHJnYjEuYSAhPT0gdm9pZCAwID8gcmdiMS5hIC8gMTAwIDogMSxcbiAgICByZ2IyID0gdHlwZW9mIGJnQ29sb3IgPT09ICdzdHJpbmcnID8gdGV4dFRvUmdiKGJnQ29sb3IpIDogYmdDb2xvcixcbiAgICByMiA9IHJnYjIuciAvIDI1NSxcbiAgICBnMiA9IHJnYjIuZyAvIDI1NSxcbiAgICBiMiA9IHJnYjIuYiAvIDI1NSxcbiAgICBhMiA9IHJnYjIuYSAhPT0gdm9pZCAwID8gcmdiMi5hIC8gMTAwIDogMSxcbiAgICBhID0gYTEgKyBhMiAqICgxIC0gYTEpLFxuICAgIHIgPSBNYXRoLnJvdW5kKCgocjEgKiBhMSArIHIyICogYTIgKiAoMSAtIGExKSkgLyBhKSAqIDI1NSksXG4gICAgZyA9IE1hdGgucm91bmQoKChnMSAqIGExICsgZzIgKiBhMiAqICgxIC0gYTEpKSAvIGEpICogMjU1KSxcbiAgICBiID0gTWF0aC5yb3VuZCgoKGIxICogYTEgKyBiMiAqIGEyICogKDEgLSBhMSkpIC8gYSkgKiAyNTUpXG5cbiAgY29uc3QgcmV0ID0geyByLCBnLCBiLCBhOiBNYXRoLnJvdW5kKGEgKiAxMDApIH1cbiAgcmV0dXJuIHR5cGVvZiBmZ0NvbG9yID09PSAnc3RyaW5nJ1xuICAgID8gcmdiVG9IZXgocmV0KVxuICAgIDogcmV0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VBbHBoYSAoY29sb3IsIG9mZnNldCkge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nIGFzIGNvbG9yJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPT09IHZvaWQgMCB8fCBvZmZzZXQgPCAtMSB8fCBvZmZzZXQgPiAxKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgb2Zmc2V0IHRvIGJlIGJldHdlZW4gLTEgYW5kIDEnKVxuICB9XG5cbiAgY29uc3QgeyByLCBnLCBiLCBhIH0gPSB0ZXh0VG9SZ2IoY29sb3IpXG4gIGNvbnN0IGFscGhhID0gYSAhPT0gdm9pZCAwID8gYSAvIDEwMCA6IDBcblxuICByZXR1cm4gcmdiVG9IZXgoe1xuICAgIHIsIGcsIGIsIGE6IE1hdGgucm91bmQoTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYWxwaGEgKyBvZmZzZXQpKSAqIDEwMClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhbGV0dGVDb2xvciAoY29sb3JOYW1lKSB7XG4gIGlmICh0eXBlb2YgY29sb3JOYW1lICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nIGFzIGNvbG9yJylcbiAgfVxuXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBlbC5jbGFzc05hbWUgPSBgdGV4dC0keyBjb2xvck5hbWUgfSBpbnZpc2libGUgZml4ZWQgbm8tcG9pbnRlci1ldmVudHNgXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cbiAgY29uc3QgcmVzdWx0ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSgnY29sb3InKVxuXG4gIGVsLnJlbW92ZSgpXG5cbiAgcmV0dXJuIHJnYlRvSGV4KHRleHRUb1JnYihyZXN1bHQpKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJnYlRvSGV4LFxuICBoZXhUb1JnYixcbiAgaHN2VG9SZ2IsXG4gIHJnYlRvSHN2LFxuICB0ZXh0VG9SZ2IsXG4gIGxpZ2h0ZW4sXG4gIGx1bWlub3NpdHksXG4gIGJyaWdodG5lc3MsXG4gIGJsZW5kLFxuICBjaGFuZ2VBbHBoYSxcbiAgZ2V0UGFsZXR0ZUNvbG9yXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFRvdWNoUGFuIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG91Y2gtcGFuL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgUVNsaWRlciBmcm9tICcuLi9zbGlkZXIvUVNsaWRlci5qcydcbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuXG5pbXBvcnQgUVRhYnMgZnJvbSAnLi4vdGFicy9RVGFicy5qcydcbmltcG9ydCBRVGFiIGZyb20gJy4uL3RhYnMvUVRhYi5qcydcbmltcG9ydCBRVGFiUGFuZWxzIGZyb20gJy4uL3RhYi1wYW5lbHMvUVRhYlBhbmVscy5qcydcbmltcG9ydCBRVGFiUGFuZWwgZnJvbSAnLi4vdGFiLXBhbmVscy9RVGFiUGFuZWwuanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWRhcmsvdXNlLWRhcmsuanMnXG5pbXBvcnQgdXNlUmVuZGVyQ2FjaGUgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLXJlbmRlci1jYWNoZS91c2UtcmVuZGVyLWNhY2hlLmpzJ1xuaW1wb3J0IHsgdXNlRm9ybUluamVjdCwgdXNlRm9ybVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLWZvcm0vcHJpdmF0ZS51c2UtZm9ybS5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgdGVzdFBhdHRlcm4gfSBmcm9tICcuLi8uLi91dGlscy9wYXR0ZXJucy9wYXR0ZXJucy5qcydcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuLi8uLi91dGlscy90aHJvdHRsZS90aHJvdHRsZS5qcydcbmltcG9ydCB7IHN0b3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IGhleFRvUmdiLCByZ2JUb0hleCwgcmdiVG9TdHJpbmcsIHRleHRUb1JnYiwgcmdiVG9Ic3YsIGhzdlRvUmdiLCBsdW1pbm9zaXR5IH0gZnJvbSAnLi4vLi4vdXRpbHMvY29sb3JzL2NvbG9ycy5qcydcbmltcG9ydCB7IGhEaXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmNvbnN0IHBhbGV0dGUgPSBbXG4gICdyZ2IoMjU1LDIwNCwyMDQpJywgJ3JnYigyNTUsMjMwLDIwNCknLCAncmdiKDI1NSwyNTUsMjA0KScsICdyZ2IoMjA0LDI1NSwyMDQpJywgJ3JnYigyMDQsMjU1LDIzMCknLCAncmdiKDIwNCwyNTUsMjU1KScsICdyZ2IoMjA0LDIzMCwyNTUpJywgJ3JnYigyMDQsMjA0LDI1NSknLCAncmdiKDIzMCwyMDQsMjU1KScsICdyZ2IoMjU1LDIwNCwyNTUpJyxcbiAgJ3JnYigyNTUsMTUzLDE1MyknLCAncmdiKDI1NSwyMDQsMTUzKScsICdyZ2IoMjU1LDI1NSwxNTMpJywgJ3JnYigxNTMsMjU1LDE1MyknLCAncmdiKDE1MywyNTUsMjA0KScsICdyZ2IoMTUzLDI1NSwyNTUpJywgJ3JnYigxNTMsMjA0LDI1NSknLCAncmdiKDE1MywxNTMsMjU1KScsICdyZ2IoMjA0LDE1MywyNTUpJywgJ3JnYigyNTUsMTUzLDI1NSknLFxuICAncmdiKDI1NSwxMDIsMTAyKScsICdyZ2IoMjU1LDE3OSwxMDIpJywgJ3JnYigyNTUsMjU1LDEwMiknLCAncmdiKDEwMiwyNTUsMTAyKScsICdyZ2IoMTAyLDI1NSwxNzkpJywgJ3JnYigxMDIsMjU1LDI1NSknLCAncmdiKDEwMiwxNzksMjU1KScsICdyZ2IoMTAyLDEwMiwyNTUpJywgJ3JnYigxNzksMTAyLDI1NSknLCAncmdiKDI1NSwxMDIsMjU1KScsXG4gICdyZ2IoMjU1LDUxLDUxKScsICdyZ2IoMjU1LDE1Myw1MSknLCAncmdiKDI1NSwyNTUsNTEpJywgJ3JnYig1MSwyNTUsNTEpJywgJ3JnYig1MSwyNTUsMTUzKScsICdyZ2IoNTEsMjU1LDI1NSknLCAncmdiKDUxLDE1MywyNTUpJywgJ3JnYig1MSw1MSwyNTUpJywgJ3JnYigxNTMsNTEsMjU1KScsICdyZ2IoMjU1LDUxLDI1NSknLFxuICAncmdiKDI1NSwwLDApJywgJ3JnYigyNTUsMTI4LDApJywgJ3JnYigyNTUsMjU1LDApJywgJ3JnYigwLDI1NSwwKScsICdyZ2IoMCwyNTUsMTI4KScsICdyZ2IoMCwyNTUsMjU1KScsICdyZ2IoMCwxMjgsMjU1KScsICdyZ2IoMCwwLDI1NSknLCAncmdiKDEyOCwwLDI1NSknLCAncmdiKDI1NSwwLDI1NSknLFxuICAncmdiKDI0NSwwLDApJywgJ3JnYigyNDUsMTIzLDApJywgJ3JnYigyNDUsMjQ1LDApJywgJ3JnYigwLDI0NSwwKScsICdyZ2IoMCwyNDUsMTIzKScsICdyZ2IoMCwyNDUsMjQ1KScsICdyZ2IoMCwxMjMsMjQ1KScsICdyZ2IoMCwwLDI0NSknLCAncmdiKDEyMywwLDI0NSknLCAncmdiKDI0NSwwLDI0NSknLFxuICAncmdiKDIxNCwwLDApJywgJ3JnYigyMTQsMTA4LDApJywgJ3JnYigyMTQsMjE0LDApJywgJ3JnYigwLDIxNCwwKScsICdyZ2IoMCwyMTQsMTA4KScsICdyZ2IoMCwyMTQsMjE0KScsICdyZ2IoMCwxMDgsMjE0KScsICdyZ2IoMCwwLDIxNCknLCAncmdiKDEwOCwwLDIxNCknLCAncmdiKDIxNCwwLDIxNCknLFxuICAncmdiKDE2MywwLDApJywgJ3JnYigxNjMsODIsMCknLCAncmdiKDE2MywxNjMsMCknLCAncmdiKDAsMTYzLDApJywgJ3JnYigwLDE2Myw4MiknLCAncmdiKDAsMTYzLDE2MyknLCAncmdiKDAsODIsMTYzKScsICdyZ2IoMCwwLDE2MyknLCAncmdiKDgyLDAsMTYzKScsICdyZ2IoMTYzLDAsMTYzKScsXG4gICdyZ2IoOTIsMCwwKScsICdyZ2IoOTIsNDYsMCknLCAncmdiKDkyLDkyLDApJywgJ3JnYigwLDkyLDApJywgJ3JnYigwLDkyLDQ2KScsICdyZ2IoMCw5Miw5MiknLCAncmdiKDAsNDYsOTIpJywgJ3JnYigwLDAsOTIpJywgJ3JnYig0NiwwLDkyKScsICdyZ2IoOTIsMCw5MiknLFxuICAncmdiKDI1NSwyNTUsMjU1KScsICdyZ2IoMjA1LDIwNSwyMDUpJywgJ3JnYigxNzgsMTc4LDE3OCknLCAncmdiKDE1MywxNTMsMTUzKScsICdyZ2IoMTI3LDEyNywxMjcpJywgJ3JnYigxMDIsMTAyLDEwMiknLCAncmdiKDc2LDc2LDc2KScsICdyZ2IoNTEsNTEsNTEpJywgJ3JnYigyNSwyNSwyNSknLCAncmdiKDAsMCwwKSdcbl1cblxuY29uc3QgdGh1bWJQYXRoID0gJ001IDUgaDEwIHYxMCBoLTEwIHYtMTAgeidcbmNvbnN0IGFscGhhVHJhY2tJbWcgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQUgwbEVRVlFvVTJOa1lHQXdaa0FGWjVHNWpQUlJnT1lFVkRlQjNFQmpCUUJPWndUVnVnSUd5QUFBQUFCSlJVNUVya0pnZ2c9PSdcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FDb2xvcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG4gICAgLi4udXNlRm9ybVByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZTogU3RyaW5nLFxuXG4gICAgZGVmYXVsdFZhbHVlOiBTdHJpbmcsXG4gICAgZGVmYXVsdFZpZXc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzcGVjdHJ1bScsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gWyAnc3BlY3RydW0nLCAndHVuZScsICdwYWxldHRlJyBdLmluY2x1ZGVzKHYpXG4gICAgfSxcblxuICAgIGZvcm1hdE1vZGVsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gWyAnYXV0bycsICdoZXgnLCAncmdiJywgJ2hleGEnLCAncmdiYScgXS5pbmNsdWRlcyh2KVxuICAgIH0sXG5cbiAgICBwYWxldHRlOiBBcnJheSxcblxuICAgIG5vSGVhZGVyOiBCb29sZWFuLFxuICAgIG5vSGVhZGVyVGFiczogQm9vbGVhbixcbiAgICBub0Zvb3RlcjogQm9vbGVhbixcblxuICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuXG4gICAgZGlzYWJsZTogQm9vbGVhbixcbiAgICByZWFkb25seTogQm9vbGVhblxuICB9LFxuXG4gIGVtaXRzOiBbICd1cGRhdGU6bW9kZWxWYWx1ZScsICdjaGFuZ2UnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgZ2V0Q2FjaGUgfSA9IHVzZVJlbmRlckNhY2hlKClcblxuICAgIGNvbnN0IHNwZWN0cnVtUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgZXJyb3JJY29uUmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBmb3JjZUhleCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmZvcm1hdE1vZGVsID09PSAnYXV0bydcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogcHJvcHMuZm9ybWF0TW9kZWwuaW5kZXhPZignaGV4JykgIT09IC0xXG4gICAgKSlcblxuICAgIGNvbnN0IGZvcmNlQWxwaGEgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5mb3JtYXRNb2RlbCA9PT0gJ2F1dG8nXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IHByb3BzLmZvcm1hdE1vZGVsLmluZGV4T2YoJ2EnKSAhPT0gLTFcbiAgICApKVxuXG4gICAgY29uc3QgdG9wVmlldyA9IHJlZihcbiAgICAgIHByb3BzLmZvcm1hdE1vZGVsID09PSAnYXV0bydcbiAgICAgICAgPyAoXG4gICAgICAgICAgICAocHJvcHMubW9kZWxWYWx1ZSA9PT0gdm9pZCAwIHx8IHByb3BzLm1vZGVsVmFsdWUgPT09IG51bGwgfHwgcHJvcHMubW9kZWxWYWx1ZSA9PT0gJycgfHwgcHJvcHMubW9kZWxWYWx1ZS5zdGFydHNXaXRoKCcjJykpXG4gICAgICAgICAgICAgID8gJ2hleCdcbiAgICAgICAgICAgICAgOiAncmdiJ1xuICAgICAgICAgIClcbiAgICAgICAgOiAocHJvcHMuZm9ybWF0TW9kZWwuc3RhcnRzV2l0aCgnaGV4JykgPyAnaGV4JyA6ICdyZ2InKVxuICAgIClcblxuICAgIGNvbnN0IHZpZXcgPSByZWYocHJvcHMuZGVmYXVsdFZpZXcpXG4gICAgY29uc3QgbW9kZWwgPSByZWYocGFyc2VNb2RlbChwcm9wcy5tb2RlbFZhbHVlIHx8IHByb3BzLmRlZmF1bHRWYWx1ZSkpXG5cbiAgICBjb25zdCBlZGl0YWJsZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgcHJvcHMucmVhZG9ubHkgIT09IHRydWUpXG5cbiAgICBjb25zdCBpc0hleCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5tb2RlbFZhbHVlID09PSB2b2lkIDBcbiAgICAgIHx8IHByb3BzLm1vZGVsVmFsdWUgPT09IG51bGxcbiAgICAgIHx8IHByb3BzLm1vZGVsVmFsdWUgPT09ICcnXG4gICAgICB8fCBwcm9wcy5tb2RlbFZhbHVlLnN0YXJ0c1dpdGgoJyMnKVxuICAgIClcblxuICAgIGNvbnN0IGlzT3V0cHV0SGV4ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgZm9yY2VIZXgudmFsdWUgIT09IG51bGxcbiAgICAgICAgPyBmb3JjZUhleC52YWx1ZVxuICAgICAgICA6IGlzSGV4LnZhbHVlXG4gICAgKSlcblxuICAgIGNvbnN0IGZvcm1BdHRycyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICB2YWx1ZTogbW9kZWwudmFsdWVbIGlzT3V0cHV0SGV4LnZhbHVlID09PSB0cnVlID8gJ2hleCcgOiAncmdiJyBdXG4gICAgfSkpXG5cbiAgICBjb25zdCBpbmplY3RGb3JtSW5wdXQgPSB1c2VGb3JtSW5qZWN0KGZvcm1BdHRycylcblxuICAgIGNvbnN0IGhhc0FscGhhID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgZm9yY2VBbHBoYS52YWx1ZSAhPT0gbnVsbFxuICAgICAgICA/IGZvcmNlQWxwaGEudmFsdWVcbiAgICAgICAgOiBtb2RlbC52YWx1ZS5hICE9PSB2b2lkIDBcbiAgICApKVxuXG4gICAgY29uc3QgY3VycmVudEJnQ29sb3IgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBtb2RlbC52YWx1ZS5yZ2IgfHwgJyMwMDAnXG4gICAgfSkpXG5cbiAgICBjb25zdCBoZWFkZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGxpZ2h0ID0gbW9kZWwudmFsdWUuYSAhPT0gdm9pZCAwICYmIG1vZGVsLnZhbHVlLmEgPCA2NVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBsdW1pbm9zaXR5KG1vZGVsLnZhbHVlKSA+IDAuNFxuXG4gICAgICByZXR1cm4gJ3EtY29sb3ItcGlja2VyX19oZWFkZXItY29udGVudCdcbiAgICAgICAgKyBgIHEtY29sb3ItcGlja2VyX19oZWFkZXItY29udGVudC0tJHsgbGlnaHQgPyAnbGlnaHQnIDogJ2RhcmsnIH1gXG4gICAgfSlcblxuICAgIGNvbnN0IHNwZWN0cnVtU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgYmFja2dyb3VuZDogYGhzbCgkeyBtb2RlbC52YWx1ZS5oIH0sMTAwJSw1MCUpYFxuICAgIH0pKVxuXG4gICAgY29uc3Qgc3BlY3RydW1Qb2ludGVyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgdG9wOiBgJHsgMTAwIC0gbW9kZWwudmFsdWUudiB9JWAsXG4gICAgICBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdOiBgJHsgbW9kZWwudmFsdWUucyB9JWBcbiAgICB9KSlcblxuICAgIGNvbnN0IGNvbXB1dGVkUGFsZXR0ZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnBhbGV0dGUgIT09IHZvaWQgMCAmJiBwcm9wcy5wYWxldHRlLmxlbmd0aCAhPT0gMFxuICAgICAgICA/IHByb3BzLnBhbGV0dGVcbiAgICAgICAgOiBwYWxldHRlXG4gICAgKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtY29sb3ItcGlja2VyJ1xuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtY29sb3ItcGlja2VyLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS1jb2xvci1waWNrZXItLXNxdWFyZSBuby1ib3JkZXItcmFkaXVzJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS1jb2xvci1waWNrZXItLWZsYXQgbm8tc2hhZG93JyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJycpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtY29sb3ItcGlja2VyLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScgfVxuICAgICAgICA6IHt9XG4gICAgKSlcblxuICAgIGNvbnN0IHNwZWN0cnVtRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gaWYgZWRpdGFibGUudmFsdWUgPT09IHRydWVcbiAgICAgIHJldHVybiBbIFtcbiAgICAgICAgVG91Y2hQYW4sXG4gICAgICAgIG9uU3BlY3RydW1QYW4sXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgeyBwcmV2ZW50OiB0cnVlLCBzdG9wOiB0cnVlLCBtb3VzZTogdHJ1ZSB9XG4gICAgICBdIF1cbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgdiA9PiB7XG4gICAgICBjb25zdCBsb2NhbE1vZGVsID0gcGFyc2VNb2RlbCh2IHx8IHByb3BzLmRlZmF1bHRWYWx1ZSlcbiAgICAgIGlmIChsb2NhbE1vZGVsLmhleCAhPT0gbW9kZWwudmFsdWUuaGV4KSB7XG4gICAgICAgIG1vZGVsLnZhbHVlID0gbG9jYWxNb2RlbFxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5kZWZhdWx0VmFsdWUsIHYgPT4ge1xuICAgICAgaWYgKCFwcm9wcy5tb2RlbFZhbHVlICYmIHYpIHtcbiAgICAgICAgY29uc3QgbG9jYWxNb2RlbCA9IHBhcnNlTW9kZWwodilcbiAgICAgICAgaWYgKGxvY2FsTW9kZWwuaGV4ICE9PSBtb2RlbC52YWx1ZS5oZXgpIHtcbiAgICAgICAgICBtb2RlbC52YWx1ZSA9IGxvY2FsTW9kZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVNb2RlbCAocmdiLCBjaGFuZ2UpIHtcbiAgICAgIC8vIHVwZGF0ZSBpbnRlcm5hbGx5XG4gICAgICBtb2RlbC52YWx1ZS5oZXggPSByZ2JUb0hleChyZ2IpXG4gICAgICBtb2RlbC52YWx1ZS5yZ2IgPSByZ2JUb1N0cmluZyhyZ2IpXG4gICAgICBtb2RlbC52YWx1ZS5yID0gcmdiLnJcbiAgICAgIG1vZGVsLnZhbHVlLmcgPSByZ2IuZ1xuICAgICAgbW9kZWwudmFsdWUuYiA9IHJnYi5iXG4gICAgICBtb2RlbC52YWx1ZS5hID0gcmdiLmFcblxuICAgICAgY29uc3QgdmFsdWUgPSBtb2RlbC52YWx1ZVsgaXNPdXRwdXRIZXgudmFsdWUgPT09IHRydWUgPyAnaGV4JyA6ICdyZ2InIF1cblxuICAgICAgLy8gZW1pdCBuZXcgdmFsdWVcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsdWUpXG4gICAgICBjaGFuZ2UgPT09IHRydWUgJiYgZW1pdCgnY2hhbmdlJywgdmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VNb2RlbCAodikge1xuICAgICAgY29uc3QgYWxwaGEgPSBmb3JjZUFscGhhLnZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgPyBmb3JjZUFscGhhLnZhbHVlXG4gICAgICAgIDogKFxuICAgICAgICAgICAgcHJvcHMuZm9ybWF0TW9kZWwgPT09ICdhdXRvJ1xuICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgOiBwcm9wcy5mb3JtYXRNb2RlbC5pbmRleE9mKCdhJykgIT09IC0xXG4gICAgICAgICAgKVxuXG4gICAgICBpZiAodHlwZW9mIHYgIT09ICdzdHJpbmcnIHx8IHYubGVuZ3RoID09PSAwIHx8IHRlc3RQYXR0ZXJuLmFueUNvbG9yKHYucmVwbGFjZSgvIC9nLCAnJykpICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaDogMCxcbiAgICAgICAgICBzOiAwLFxuICAgICAgICAgIHY6IDAsXG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAwLFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgYTogYWxwaGEgPT09IHRydWUgPyAxMDAgOiB2b2lkIDAsXG4gICAgICAgICAgaGV4OiB2b2lkIDAsXG4gICAgICAgICAgcmdiOiB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtb2RlbCA9IHRleHRUb1JnYih2KVxuXG4gICAgICBpZiAoYWxwaGEgPT09IHRydWUgJiYgbW9kZWwuYSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIG1vZGVsLmEgPSAxMDBcbiAgICAgIH1cblxuICAgICAgbW9kZWwuaGV4ID0gcmdiVG9IZXgobW9kZWwpXG4gICAgICBtb2RlbC5yZ2IgPSByZ2JUb1N0cmluZyhtb2RlbClcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obW9kZWwsIHJnYlRvSHN2KG1vZGVsKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VTcGVjdHJ1bSAobGVmdCwgdG9wLCBjaGFuZ2UpIHtcbiAgICAgIGNvbnN0IHBhbmVsID0gc3BlY3RydW1SZWYudmFsdWVcbiAgICAgIGlmIChwYW5lbCA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHdpZHRoID0gcGFuZWwuY2xpZW50V2lkdGgsXG4gICAgICAgIGhlaWdodCA9IHBhbmVsLmNsaWVudEhlaWdodCxcbiAgICAgICAgcmVjdCA9IHBhbmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIGxldCB4ID0gTWF0aC5taW4od2lkdGgsIE1hdGgubWF4KDAsIGxlZnQgLSByZWN0LmxlZnQpKVxuXG4gICAgICBpZiAoJHEubGFuZy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgeCA9IHdpZHRoIC0geFxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICB5ID0gTWF0aC5taW4oaGVpZ2h0LCBNYXRoLm1heCgwLCB0b3AgLSByZWN0LnRvcCkpLFxuICAgICAgICBzID0gTWF0aC5yb3VuZCgxMDAgKiB4IC8gd2lkdGgpLFxuICAgICAgICB2ID0gTWF0aC5yb3VuZCgxMDAgKiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAtKHkgLyBoZWlnaHQpICsgMSkpKSxcbiAgICAgICAgcmdiID0gaHN2VG9SZ2Ioe1xuICAgICAgICAgIGg6IG1vZGVsLnZhbHVlLmgsXG4gICAgICAgICAgcyxcbiAgICAgICAgICB2LFxuICAgICAgICAgIGE6IGhhc0FscGhhLnZhbHVlID09PSB0cnVlID8gbW9kZWwudmFsdWUuYSA6IHZvaWQgMFxuICAgICAgICB9KVxuXG4gICAgICBtb2RlbC52YWx1ZS5zID0gc1xuICAgICAgbW9kZWwudmFsdWUudiA9IHZcbiAgICAgIHVwZGF0ZU1vZGVsKHJnYiwgY2hhbmdlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSHVlICh2YWwsIGNoYW5nZSkge1xuICAgICAgY29uc3QgaCA9IE1hdGgucm91bmQodmFsKVxuICAgICAgY29uc3QgcmdiID0gaHN2VG9SZ2Ioe1xuICAgICAgICBoLFxuICAgICAgICBzOiBtb2RlbC52YWx1ZS5zLFxuICAgICAgICB2OiBtb2RlbC52YWx1ZS52LFxuICAgICAgICBhOiBoYXNBbHBoYS52YWx1ZSA9PT0gdHJ1ZSA/IG1vZGVsLnZhbHVlLmEgOiB2b2lkIDBcbiAgICAgIH0pXG5cbiAgICAgIG1vZGVsLnZhbHVlLmggPSBoXG4gICAgICB1cGRhdGVNb2RlbChyZ2IsIGNoYW5nZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkh1ZUNoYW5nZSAodmFsKSB7XG4gICAgICBvbkh1ZSh2YWwsIHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25OdW1lcmljQ2hhbmdlICh2YWx1ZSwgZm9ybWF0TW9kZWwsIG1heCwgZXZ0LCBjaGFuZ2UpIHtcbiAgICAgIGV2dCAhPT0gdm9pZCAwICYmIHN0b3AoZXZ0KVxuXG4gICAgICBpZiAoIS9eWzAtOV0rJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgY2hhbmdlID09PSB0cnVlICYmIHByb3h5LiRmb3JjZVVwZGF0ZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWwgPSBNYXRoLmZsb29yKE51bWJlcih2YWx1ZSkpXG5cbiAgICAgIGlmICh2YWwgPCAwIHx8IHZhbCA+IG1heCkge1xuICAgICAgICBjaGFuZ2UgPT09IHRydWUgJiYgcHJveHkuJGZvcmNlVXBkYXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJnYiA9IHtcbiAgICAgICAgcjogZm9ybWF0TW9kZWwgPT09ICdyJyA/IHZhbCA6IG1vZGVsLnZhbHVlLnIsXG4gICAgICAgIGc6IGZvcm1hdE1vZGVsID09PSAnZycgPyB2YWwgOiBtb2RlbC52YWx1ZS5nLFxuICAgICAgICBiOiBmb3JtYXRNb2RlbCA9PT0gJ2InID8gdmFsIDogbW9kZWwudmFsdWUuYixcbiAgICAgICAgYTogaGFzQWxwaGEudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/IChmb3JtYXRNb2RlbCA9PT0gJ2EnID8gdmFsIDogbW9kZWwudmFsdWUuYSlcbiAgICAgICAgICA6IHZvaWQgMFxuICAgICAgfVxuXG4gICAgICBpZiAoZm9ybWF0TW9kZWwgIT09ICdhJykge1xuICAgICAgICBjb25zdCBoc3YgPSByZ2JUb0hzdihyZ2IpXG4gICAgICAgIG1vZGVsLnZhbHVlLmggPSBoc3YuaFxuICAgICAgICBtb2RlbC52YWx1ZS5zID0gaHN2LnNcbiAgICAgICAgbW9kZWwudmFsdWUudiA9IGhzdi52XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZU1vZGVsKHJnYiwgY2hhbmdlKVxuXG4gICAgICBpZiAoY2hhbmdlICE9PSB0cnVlICYmIGV2dD8udGFyZ2V0LnNlbGVjdGlvbkVuZCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXZ0LnRhcmdldC5zZWxlY3Rpb25FbmRcbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIGV2dC50YXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2UoaW5kZXgsIGluZGV4KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRWRpdG9yQ2hhbmdlIChldnQsIGNoYW5nZSkge1xuICAgICAgbGV0IHJnYlxuICAgICAgY29uc3QgaW5wID0gZXZ0LnRhcmdldC52YWx1ZVxuXG4gICAgICBzdG9wKGV2dClcblxuICAgICAgaWYgKHRvcFZpZXcudmFsdWUgPT09ICdoZXgnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpbnAubGVuZ3RoICE9PSAoaGFzQWxwaGEudmFsdWUgPT09IHRydWUgPyA5IDogNylcbiAgICAgICAgICB8fCAhL14jWzAtOUEtRmEtZl0rJC8udGVzdChpbnApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZ2IgPSBoZXhUb1JnYihpbnApXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IG1vZGVsXG5cbiAgICAgICAgaWYgKCFpbnAuZW5kc1dpdGgoJyknKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGFzQWxwaGEudmFsdWUgIT09IHRydWUgJiYgaW5wLnN0YXJ0c1dpdGgoJ3JnYignKSkge1xuICAgICAgICAgIG1vZGVsID0gaW5wLnN1YnN0cmluZyg0LCBpbnAubGVuZ3RoIC0gMSkuc3BsaXQoJywnKS5tYXAobiA9PiBwYXJzZUludChuLCAxMCkpXG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBtb2RlbC5sZW5ndGggIT09IDNcbiAgICAgICAgICAgIHx8ICEvXnJnYlxcKFswLTldezEsM30sWzAtOV17MSwzfSxbMC05XXsxLDN9XFwpJC8udGVzdChpbnApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoYXNBbHBoYS52YWx1ZSA9PT0gdHJ1ZSAmJiBpbnAuc3RhcnRzV2l0aCgncmdiYSgnKSkge1xuICAgICAgICAgIG1vZGVsID0gaW5wLnN1YnN0cmluZyg1LCBpbnAubGVuZ3RoIC0gMSkuc3BsaXQoJywnKVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbW9kZWwubGVuZ3RoICE9PSA0XG4gICAgICAgICAgICB8fCAhL15yZ2JhXFwoWzAtOV17MSwzfSxbMC05XXsxLDN9LFswLTldezEsM30sKDB8MFxcLlswLTldK1sxLTldfDBcXC5bMS05XSt8MSlcXCkkLy50ZXN0KGlucClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUludChtb2RlbFsgaSBdLCAxMClcbiAgICAgICAgICAgIGlmICh2IDwgMCB8fCB2ID4gMjU1KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2RlbFsgaSBdID0gdlxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUZsb2F0KG1vZGVsWyAzIF0pXG4gICAgICAgICAgaWYgKHYgPCAwIHx8IHYgPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBtb2RlbFsgMyBdID0gdlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kZWxbIDAgXSA8IDAgfHwgbW9kZWxbIDAgXSA+IDI1NVxuICAgICAgICAgIHx8IG1vZGVsWyAxIF0gPCAwIHx8IG1vZGVsWyAxIF0gPiAyNTVcbiAgICAgICAgICB8fCBtb2RlbFsgMiBdIDwgMCB8fCBtb2RlbFsgMiBdID4gMjU1XG4gICAgICAgICAgfHwgKGhhc0FscGhhLnZhbHVlID09PSB0cnVlICYmIChtb2RlbFsgMyBdIDwgMCB8fCBtb2RlbFsgMyBdID4gMSkpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZ2IgPSB7XG4gICAgICAgICAgcjogbW9kZWxbIDAgXSxcbiAgICAgICAgICBnOiBtb2RlbFsgMSBdLFxuICAgICAgICAgIGI6IG1vZGVsWyAyIF0sXG4gICAgICAgICAgYTogaGFzQWxwaGEudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAgID8gbW9kZWxbIDMgXSAqIDEwMFxuICAgICAgICAgICAgOiB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBoc3YgPSByZ2JUb0hzdihyZ2IpXG4gICAgICBtb2RlbC52YWx1ZS5oID0gaHN2LmhcbiAgICAgIG1vZGVsLnZhbHVlLnMgPSBoc3Yuc1xuICAgICAgbW9kZWwudmFsdWUudiA9IGhzdi52XG5cbiAgICAgIHVwZGF0ZU1vZGVsKHJnYiwgY2hhbmdlKVxuXG4gICAgICBpZiAoY2hhbmdlICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXZ0LnRhcmdldC5zZWxlY3Rpb25FbmRcbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIGV2dC50YXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2UoaW5kZXgsIGluZGV4KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUGFsZXR0ZVBpY2sgKGNvbG9yKSB7XG4gICAgICBjb25zdCBkZWYgPSBwYXJzZU1vZGVsKGNvbG9yKVxuICAgICAgY29uc3QgcmdiID0geyByOiBkZWYuciwgZzogZGVmLmcsIGI6IGRlZi5iLCBhOiBkZWYuYSB9XG5cbiAgICAgIGlmIChyZ2IuYSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJnYi5hID0gbW9kZWwudmFsdWUuYVxuICAgICAgfVxuXG4gICAgICBtb2RlbC52YWx1ZS5oID0gZGVmLmhcbiAgICAgIG1vZGVsLnZhbHVlLnMgPSBkZWYuc1xuICAgICAgbW9kZWwudmFsdWUudiA9IGRlZi52XG5cbiAgICAgIHVwZGF0ZU1vZGVsKHJnYiwgdHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblNwZWN0cnVtUGFuIChldnQpIHtcbiAgICAgIGlmIChldnQuaXNGaW5hbCkge1xuICAgICAgICBjaGFuZ2VTcGVjdHJ1bShcbiAgICAgICAgICBldnQucG9zaXRpb24ubGVmdCxcbiAgICAgICAgICBldnQucG9zaXRpb24udG9wLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9uU3BlY3RydW1DaGFuZ2UoZXZ0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uU3BlY3RydW1DaGFuZ2UgPSB0aHJvdHRsZShcbiAgICAgIGV2dCA9PiB7IGNoYW5nZVNwZWN0cnVtKGV2dC5wb3NpdGlvbi5sZWZ0LCBldnQucG9zaXRpb24udG9wKSB9LFxuICAgICAgMjBcbiAgICApXG5cbiAgICBmdW5jdGlvbiBvblNwZWN0cnVtQ2xpY2sgKGV2dCkge1xuICAgICAgY2hhbmdlU3BlY3RydW0oXG4gICAgICAgIGV2dC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgZXZ0LnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25BY3RpdmF0ZSAoZXZ0KSB7XG4gICAgICBjaGFuZ2VTcGVjdHJ1bShcbiAgICAgICAgZXZ0LnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICBldnQucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVFcnJvckljb24gKHZhbCkge1xuICAgICAgLy8gd2UgTVVTVCBhdm9pZCB2dWUgdHJpZ2dlcmluZyBhIHJlbmRlcixcbiAgICAgIC8vIHNvIG1hbnVhbGx5IGNoYW5naW5nIHRoaXNcbiAgICAgIGlmIChlcnJvckljb25SZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgZXJyb3JJY29uUmVmLnZhbHVlLiRlbC5zdHlsZS5vcGFjaXR5ID0gdmFsID8gMSA6IDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRUb3BWaWV3ICh2YWwpIHtcbiAgICAgIHRvcFZpZXcudmFsdWUgPSB2YWxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIZWFkZXIgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBbXVxuXG4gICAgICBwcm9wcy5ub0hlYWRlclRhYnMgIT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaChRVGFicywge1xuICAgICAgICAgIGNsYXNzOiAncS1jb2xvci1waWNrZXJfX2hlYWRlci10YWJzJyxcbiAgICAgICAgICBtb2RlbFZhbHVlOiB0b3BWaWV3LnZhbHVlLFxuICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgIGFsaWduOiAnanVzdGlmeScsXG4gICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiBzZXRUb3BWaWV3XG4gICAgICAgIH0sICgpID0+IFtcbiAgICAgICAgICBoKFFUYWIsIHtcbiAgICAgICAgICAgIGxhYmVsOiAnSEVYJyArIChoYXNBbHBoYS52YWx1ZSA9PT0gdHJ1ZSA/ICdBJyA6ICcnKSxcbiAgICAgICAgICAgIG5hbWU6ICdoZXgnLFxuICAgICAgICAgICAgcmlwcGxlOiBmYWxzZVxuICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgaChRVGFiLCB7XG4gICAgICAgICAgICBsYWJlbDogJ1JHQicgKyAoaGFzQWxwaGEudmFsdWUgPT09IHRydWUgPyAnQScgOiAnJyksXG4gICAgICAgICAgICBuYW1lOiAncmdiJyxcbiAgICAgICAgICAgIHJpcHBsZTogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgKVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9faGVhZGVyLWJhbm5lciByb3cgZmxleC1jZW50ZXIgbm8td3JhcCdcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ2lucHV0Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdmaXQnLFxuICAgICAgICAgICAgdmFsdWU6IG1vZGVsLnZhbHVlWyB0b3BWaWV3LnZhbHVlIF0sXG4gICAgICAgICAgICAuLi4oZWRpdGFibGUudmFsdWUgIT09IHRydWVcbiAgICAgICAgICAgICAgPyB7IHJlYWRvbmx5OiB0cnVlIH1cbiAgICAgICAgICAgICAgOiB7fVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIC4uLmdldENhY2hlKCd0b3BJbicsIHtcbiAgICAgICAgICAgICAgb25JbnB1dDogZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVFcnJvckljb24ob25FZGl0b3JDaGFuZ2UoZXZ0KSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IHN0b3AsXG4gICAgICAgICAgICAgIG9uQmx1cjogZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICBvbkVkaXRvckNoYW5nZShldnQsIHRydWUpID09PSB0cnVlICYmIHByb3h5LiRmb3JjZVVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgdXBkYXRlRXJyb3JJY29uKGZhbHNlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgICAgcmVmOiBlcnJvckljb25SZWYsXG4gICAgICAgICAgICBjbGFzczogJ3EtY29sb3ItcGlja2VyX19lcnJvci1pY29uIGFic29sdXRlIG5vLXBvaW50ZXItZXZlbnRzJyxcbiAgICAgICAgICAgIG5hbWU6ICRxLmljb25TZXQudHlwZS5uZWdhdGl2ZVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAncS1jb2xvci1waWNrZXJfX2hlYWRlciByZWxhdGl2ZS1wb3NpdGlvbiBvdmVyZmxvdy1oaWRkZW4nXG4gICAgICB9LCBbXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9faGVhZGVyLWJnIGFic29sdXRlLWZ1bGwnIH0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogaGVhZGVyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IGN1cnJlbnRCZ0NvbG9yLnZhbHVlXG4gICAgICAgIH0sIGNoaWxkKVxuICAgICAgXSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb250ZW50ICgpIHtcbiAgICAgIHJldHVybiBoKFFUYWJQYW5lbHMsIHtcbiAgICAgICAgbW9kZWxWYWx1ZTogdmlldy52YWx1ZSxcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWVcbiAgICAgIH0sICgpID0+IFtcbiAgICAgICAgaChRVGFiUGFuZWwsIHtcbiAgICAgICAgICBjbGFzczogJ3EtY29sb3ItcGlja2VyX19zcGVjdHJ1bS10YWIgb3ZlcmZsb3ctaGlkZGVuJyxcbiAgICAgICAgICBuYW1lOiAnc3BlY3RydW0nXG4gICAgICAgIH0sIGdldFNwZWN0cnVtVGFiKSxcblxuICAgICAgICBoKFFUYWJQYW5lbCwge1xuICAgICAgICAgIGNsYXNzOiAncS1wYS1tZCBxLWNvbG9yLXBpY2tlcl9fdHVuZS10YWInLFxuICAgICAgICAgIG5hbWU6ICd0dW5lJ1xuICAgICAgICB9LCBnZXRUdW5lVGFiKSxcblxuICAgICAgICBoKFFUYWJQYW5lbCwge1xuICAgICAgICAgIGNsYXNzOiAncS1jb2xvci1waWNrZXJfX3BhbGV0dGUtdGFiJyxcbiAgICAgICAgICBuYW1lOiAncGFsZXR0ZSdcbiAgICAgICAgfSwgZ2V0UGFsZXR0ZVRhYilcbiAgICAgIF0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VmlldyAodmFsKSB7XG4gICAgICB2aWV3LnZhbHVlID0gdmFsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Rm9vdGVyICgpIHtcbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAncS1jb2xvci1waWNrZXJfX2Zvb3RlciByZWxhdGl2ZS1wb3NpdGlvbiBvdmVyZmxvdy1oaWRkZW4nXG4gICAgICB9LCBbXG4gICAgICAgIGgoUVRhYnMsIHtcbiAgICAgICAgICBjbGFzczogJ2Fic29sdXRlLWZ1bGwnLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IHZpZXcudmFsdWUsXG4gICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgYWxpZ246ICdqdXN0aWZ5JyxcbiAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IHNldFZpZXdcbiAgICAgICAgfSwgKCkgPT4gW1xuICAgICAgICAgIGgoUVRhYiwge1xuICAgICAgICAgICAgaWNvbjogJHEuaWNvblNldC5jb2xvclBpY2tlci5zcGVjdHJ1bSxcbiAgICAgICAgICAgIG5hbWU6ICdzcGVjdHJ1bScsXG4gICAgICAgICAgICByaXBwbGU6IGZhbHNlXG4gICAgICAgICAgfSksXG5cbiAgICAgICAgICBoKFFUYWIsIHtcbiAgICAgICAgICAgIGljb246ICRxLmljb25TZXQuY29sb3JQaWNrZXIudHVuZSxcbiAgICAgICAgICAgIG5hbWU6ICd0dW5lJyxcbiAgICAgICAgICAgIHJpcHBsZTogZmFsc2VcbiAgICAgICAgICB9KSxcblxuICAgICAgICAgIGgoUVRhYiwge1xuICAgICAgICAgICAgaWNvbjogJHEuaWNvblNldC5jb2xvclBpY2tlci5wYWxldHRlLFxuICAgICAgICAgICAgbmFtZTogJ3BhbGV0dGUnLFxuICAgICAgICAgICAgcmlwcGxlOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNwZWN0cnVtVGFiICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHJlZjogc3BlY3RydW1SZWYsXG4gICAgICAgIGNsYXNzOiAncS1jb2xvci1waWNrZXJfX3NwZWN0cnVtIG5vbi1zZWxlY3RhYmxlIHJlbGF0aXZlLXBvc2l0aW9uIGN1cnNvci1wb2ludGVyJ1xuICAgICAgICAgICsgKGVkaXRhYmxlLnZhbHVlICE9PSB0cnVlID8gJyByZWFkb25seScgOiAnJyksXG4gICAgICAgIHN0eWxlOiBzcGVjdHJ1bVN0eWxlLnZhbHVlLFxuICAgICAgICAuLi4oZWRpdGFibGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgb25DbGljazogb25TcGVjdHJ1bUNsaWNrLFxuICAgICAgICAgICAgICBvbk1vdXNlZG93bjogb25BY3RpdmF0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge31cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgaCgnZGl2JywgeyBzdHlsZTogeyBwYWRkaW5nQm90dG9tOiAnMTAwJScgfSB9KSxcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtY29sb3ItcGlja2VyX19zcGVjdHJ1bS13aGl0ZSBhYnNvbHV0ZS1mdWxsJyB9KSxcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtY29sb3ItcGlja2VyX19zcGVjdHJ1bS1ibGFjayBhYnNvbHV0ZS1mdWxsJyB9KSxcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHN0eWxlOiBzcGVjdHJ1bVBvaW50ZXJTdHlsZS52YWx1ZVxuICAgICAgICB9LCBbXG4gICAgICAgICAgbW9kZWwudmFsdWUuaGV4ICE9PSB2b2lkIDBcbiAgICAgICAgICAgID8gaCgnZGl2JywgeyBjbGFzczogJ3EtY29sb3ItcGlja2VyX19zcGVjdHJ1bS1jaXJjbGUnIH0pXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgXSlcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc2xpZGVycyA9IFtcbiAgICAgICAgaChRU2xpZGVyLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9faHVlIG5vbi1zZWxlY3RhYmxlJyxcbiAgICAgICAgICBtb2RlbFZhbHVlOiBtb2RlbC52YWx1ZS5oLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IDM2MCxcbiAgICAgICAgICB0cmFja1NpemU6ICc4cHgnLFxuICAgICAgICAgIGlubmVyVHJhY2tDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBzZWxlY3Rpb25Db2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICByZWFkb25seTogZWRpdGFibGUudmFsdWUgIT09IHRydWUsXG4gICAgICAgICAgdGh1bWJQYXRoLFxuICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogb25IdWUsXG4gICAgICAgICAgb25DaGFuZ2U6IG9uSHVlQ2hhbmdlXG4gICAgICAgIH0pXG4gICAgICBdXG5cbiAgICAgIGhhc0FscGhhLnZhbHVlID09PSB0cnVlICYmIHNsaWRlcnMucHVzaChcbiAgICAgICAgaChRU2xpZGVyLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9fYWxwaGEgbm9uLXNlbGVjdGFibGUnLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IG1vZGVsLnZhbHVlLmEsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIHRyYWNrU2l6ZTogJzhweCcsXG4gICAgICAgICAgdHJhY2tDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBpbm5lclRyYWNrQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgc2VsZWN0aW9uQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgdHJhY2tJbWc6IGFscGhhVHJhY2tJbWcsXG4gICAgICAgICAgcmVhZG9ubHk6IGVkaXRhYmxlLnZhbHVlICE9PSB0cnVlLFxuICAgICAgICAgIGhpZGVTZWxlY3Rpb246IHRydWUsXG4gICAgICAgICAgdGh1bWJQYXRoLFxuICAgICAgICAgIC4uLmdldENhY2hlKCdhbHBoYVNsaWRlJywge1xuICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiB2YWx1ZSA9PiBvbk51bWVyaWNDaGFuZ2UodmFsdWUsICdhJywgMTAwKSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiBvbk51bWVyaWNDaGFuZ2UodmFsdWUsICdhJywgMTAwLCB2b2lkIDAsIHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaERpcignZGl2JywgZGF0YSwgY2hpbGQsICdzcGVjJywgZWRpdGFibGUudmFsdWUsICgpID0+IHNwZWN0cnVtRGlyZWN0aXZlLnZhbHVlKSxcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtY29sb3ItcGlja2VyX19zbGlkZXJzJyB9LCBzbGlkZXJzKVxuICAgICAgXVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFR1bmVUYWIgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3JvdyBpdGVtcy1jZW50ZXIgbm8td3JhcCcgfSwgW1xuICAgICAgICAgIGgoJ2RpdicsICdSJyksXG4gICAgICAgICAgaChRU2xpZGVyLCB7XG4gICAgICAgICAgICBtb2RlbFZhbHVlOiBtb2RlbC52YWx1ZS5yLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAyNTUsXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICByZWFkb25seTogZWRpdGFibGUudmFsdWUgIT09IHRydWUsXG4gICAgICAgICAgICAuLi5nZXRDYWNoZSgnclNsaWRlJywge1xuICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IHZhbHVlID0+IG9uTnVtZXJpY0NoYW5nZSh2YWx1ZSwgJ3InLCAyNTUpLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogdmFsdWUgPT4gb25OdW1lcmljQ2hhbmdlKHZhbHVlLCAncicsIDI1NSwgdm9pZCAwLCB0cnVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoKCdpbnB1dCcsIHtcbiAgICAgICAgICAgIHZhbHVlOiBtb2RlbC52YWx1ZS5yLFxuICAgICAgICAgICAgbWF4bGVuZ3RoOiAzLFxuICAgICAgICAgICAgcmVhZG9ubHk6IGVkaXRhYmxlLnZhbHVlICE9PSB0cnVlLFxuICAgICAgICAgICAgb25DaGFuZ2U6IHN0b3AsXG4gICAgICAgICAgICAuLi5nZXRDYWNoZSgnckluJywge1xuICAgICAgICAgICAgICBvbklucHV0OiBldnQgPT4gb25OdW1lcmljQ2hhbmdlKGV2dC50YXJnZXQudmFsdWUsICdyJywgMjU1LCBldnQpLFxuICAgICAgICAgICAgICBvbkJsdXI6IGV2dCA9PiBvbk51bWVyaWNDaGFuZ2UoZXZ0LnRhcmdldC52YWx1ZSwgJ3InLCAyNTUsIGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3JvdyBpdGVtcy1jZW50ZXIgbm8td3JhcCcgfSwgW1xuICAgICAgICAgIGgoJ2RpdicsICdHJyksXG4gICAgICAgICAgaChRU2xpZGVyLCB7XG4gICAgICAgICAgICBtb2RlbFZhbHVlOiBtb2RlbC52YWx1ZS5nLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAyNTUsXG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBlZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSxcbiAgICAgICAgICAgIC4uLmdldENhY2hlKCdnU2xpZGUnLCB7XG4gICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogdmFsdWUgPT4gb25OdW1lcmljQ2hhbmdlKHZhbHVlLCAnZycsIDI1NSksXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiBvbk51bWVyaWNDaGFuZ2UodmFsdWUsICdnJywgMjU1LCB2b2lkIDAsIHRydWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGgoJ2lucHV0Jywge1xuICAgICAgICAgICAgdmFsdWU6IG1vZGVsLnZhbHVlLmcsXG4gICAgICAgICAgICBtYXhsZW5ndGg6IDMsXG4gICAgICAgICAgICByZWFkb25seTogZWRpdGFibGUudmFsdWUgIT09IHRydWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogc3RvcCxcbiAgICAgICAgICAgIC4uLmdldENhY2hlKCdnSW4nLCB7XG4gICAgICAgICAgICAgIG9uSW5wdXQ6IGV2dCA9PiBvbk51bWVyaWNDaGFuZ2UoZXZ0LnRhcmdldC52YWx1ZSwgJ2cnLCAyNTUsIGV2dCksXG4gICAgICAgICAgICAgIG9uQmx1cjogZXZ0ID0+IG9uTnVtZXJpY0NoYW5nZShldnQudGFyZ2V0LnZhbHVlLCAnZycsIDI1NSwgZXZ0LCB0cnVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcblxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncm93IGl0ZW1zLWNlbnRlciBuby13cmFwJyB9LCBbXG4gICAgICAgICAgaCgnZGl2JywgJ0InKSxcbiAgICAgICAgICBoKFFTbGlkZXIsIHtcbiAgICAgICAgICAgIG1vZGVsVmFsdWU6IG1vZGVsLnZhbHVlLmIsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDI1NSxcbiAgICAgICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgICByZWFkb25seTogZWRpdGFibGUudmFsdWUgIT09IHRydWUsXG4gICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAuLi5nZXRDYWNoZSgnYlNsaWRlJywge1xuICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IHZhbHVlID0+IG9uTnVtZXJpY0NoYW5nZSh2YWx1ZSwgJ2InLCAyNTUpLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogdmFsdWUgPT4gb25OdW1lcmljQ2hhbmdlKHZhbHVlLCAnYicsIDI1NSwgdm9pZCAwLCB0cnVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoKCdpbnB1dCcsIHtcbiAgICAgICAgICAgIHZhbHVlOiBtb2RlbC52YWx1ZS5iLFxuICAgICAgICAgICAgbWF4bGVuZ3RoOiAzLFxuICAgICAgICAgICAgcmVhZG9ubHk6IGVkaXRhYmxlLnZhbHVlICE9PSB0cnVlLFxuICAgICAgICAgICAgb25DaGFuZ2U6IHN0b3AsXG4gICAgICAgICAgICAuLi5nZXRDYWNoZSgnYkluJywge1xuICAgICAgICAgICAgICBvbklucHV0OiBldnQgPT4gb25OdW1lcmljQ2hhbmdlKGV2dC50YXJnZXQudmFsdWUsICdiJywgMjU1LCBldnQpLFxuICAgICAgICAgICAgICBvbkJsdXI6IGV2dCA9PiBvbk51bWVyaWNDaGFuZ2UoZXZ0LnRhcmdldC52YWx1ZSwgJ2InLCAyNTUsIGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgaGFzQWxwaGEudmFsdWUgPT09IHRydWUgPyBoKCdkaXYnLCB7IGNsYXNzOiAncm93IGl0ZW1zLWNlbnRlciBuby13cmFwJyB9LCBbXG4gICAgICAgICAgaCgnZGl2JywgJ0EnKSxcbiAgICAgICAgICBoKFFTbGlkZXIsIHtcbiAgICAgICAgICAgIG1vZGVsVmFsdWU6IG1vZGVsLnZhbHVlLmEsXG4gICAgICAgICAgICBjb2xvcjogJ2dyZXknLFxuICAgICAgICAgICAgcmVhZG9ubHk6IGVkaXRhYmxlLnZhbHVlICE9PSB0cnVlLFxuICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ2FTbGlkZScsIHtcbiAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiB2YWx1ZSA9PiBvbk51bWVyaWNDaGFuZ2UodmFsdWUsICdhJywgMTAwKSxcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IG9uTnVtZXJpY0NoYW5nZSh2YWx1ZSwgJ2EnLCAxMDAsIHZvaWQgMCwgdHJ1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaCgnaW5wdXQnLCB7XG4gICAgICAgICAgICB2YWx1ZTogbW9kZWwudmFsdWUuYSxcbiAgICAgICAgICAgIG1heGxlbmd0aDogMyxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBlZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBzdG9wLFxuICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ2FJbicsIHtcbiAgICAgICAgICAgICAgb25JbnB1dDogZXZ0ID0+IG9uTnVtZXJpY0NoYW5nZShldnQudGFyZ2V0LnZhbHVlLCAnYScsIDEwMCwgZXZ0KSxcbiAgICAgICAgICAgICAgb25CbHVyOiBldnQgPT4gb25OdW1lcmljQ2hhbmdlKGV2dC50YXJnZXQudmFsdWUsICdhJywgMTAwLCBldnQsIHRydWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pIDogbnVsbFxuICAgICAgXVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhbGV0dGVUYWIgKCkge1xuICAgICAgY29uc3QgZm4gPSBjb2xvciA9PiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAncS1jb2xvci1waWNrZXJfX2N1YmUgY29sLWF1dG8nLFxuICAgICAgICBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yIH0sXG4gICAgICAgIC4uLihcbiAgICAgICAgICBlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBnZXRDYWNoZSgncGFsZXR0ZSMnICsgY29sb3IsIHtcbiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4geyBvblBhbGV0dGVQaWNrKGNvbG9yKSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiB7fVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdyb3cgaXRlbXMtY2VudGVyIHEtY29sb3ItcGlja2VyX19wYWxldHRlLXJvd3MnXG4gICAgICAgICAgICArIChlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1jb2xvci1waWNrZXJfX3BhbGV0dGUtcm93cy0tZWRpdGFibGUnIDogJycpXG4gICAgICAgIH0sIGNvbXB1dGVkUGFsZXR0ZS52YWx1ZS5tYXAoZm4pKVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IFsgZ2V0Q29udGVudCgpIF1cblxuICAgICAgaWYgKHByb3BzLm5hbWUgIT09IHZvaWQgMCAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlKSB7XG4gICAgICAgIGluamVjdEZvcm1JbnB1dChjaGlsZCwgJ3B1c2gnKVxuICAgICAgfVxuXG4gICAgICBwcm9wcy5ub0hlYWRlciAhPT0gdHJ1ZSAmJiBjaGlsZC51bnNoaWZ0KFxuICAgICAgICBnZXRIZWFkZXIoKVxuICAgICAgKVxuXG4gICAgICBwcm9wcy5ub0Zvb3RlciAhPT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBnZXRGb290ZXIoKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgLi4uYXR0cmlidXRlcy52YWx1ZVxuICAgICAgfSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFEaWFsb2cgZnJvbSAnLi4vZGlhbG9nL1FEaWFsb2cuanMnXG5pbXBvcnQgUU1lbnUgZnJvbSAnLi4vbWVudS9RTWVudS5qcydcblxuaW1wb3J0IHVzZUFuY2hvciwgeyB1c2VBbmNob3JQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWFuY2hvci91c2UtYW5jaG9yLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBpbmplY3RQcm9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5pbmplY3Qtb2JqLXByb3AvaW5qZWN0LW9iai1wcm9wLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVBvcHVwUHJveHknLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlQW5jaG9yUHJvcHMsXG5cbiAgICBicmVha3BvaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA0NTBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Nob3cnLCAnaGlkZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQsIGF0dHJzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBzaG93aW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IHBvcHVwUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgYnJlYWtwb2ludCA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLmJyZWFrcG9pbnQsIDEwKSlcblxuICAgIGNvbnN0IHsgY2FuU2hvdyB9ID0gdXNlQW5jaG9yKHsgc2hvd2luZyB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0VHlwZSAoKSB7XG4gICAgICByZXR1cm4gJHEuc2NyZWVuLndpZHRoIDwgYnJlYWtwb2ludC52YWx1ZSB8fCAkcS5zY3JlZW4uaGVpZ2h0IDwgYnJlYWtwb2ludC52YWx1ZVxuICAgICAgICA/ICdkaWFsb2cnXG4gICAgICAgIDogJ21lbnUnXG4gICAgfVxuXG4gICAgY29uc3QgdHlwZSA9IHJlZihnZXRUeXBlKCkpXG5cbiAgICBjb25zdCBwb3B1cFByb3BzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdHlwZS52YWx1ZSA9PT0gJ21lbnUnID8geyBtYXhIZWlnaHQ6ICc5OXZoJyB9IDoge30pXG4gICAgKVxuXG4gICAgd2F0Y2goKCkgPT4gZ2V0VHlwZSgpLCB2YWwgPT4ge1xuICAgICAgaWYgKHNob3dpbmcudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgdHlwZS52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBvblNob3cgKGV2dCkge1xuICAgICAgc2hvd2luZy52YWx1ZSA9IHRydWVcbiAgICAgIGVtaXQoJ3Nob3cnLCBldnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25IaWRlIChldnQpIHtcbiAgICAgIHNob3dpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgdHlwZS52YWx1ZSA9IGdldFR5cGUoKVxuICAgICAgZW1pdCgnaGlkZScsIGV2dClcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICBzaG93IChldnQpIHsgY2FuU2hvdyhldnQpID09PSB0cnVlICYmIHBvcHVwUmVmLnZhbHVlLnNob3coZXZ0KSB9LFxuICAgICAgaGlkZSAoZXZ0KSB7IHBvcHVwUmVmLnZhbHVlLmhpZGUoZXZ0KSB9LFxuICAgICAgdG9nZ2xlIChldnQpIHsgcG9wdXBSZWYudmFsdWUudG9nZ2xlKGV2dCkgfVxuICAgIH0pXG5cbiAgICBpbmplY3RQcm9wKHByb3h5LCAnY3VycmVudENvbXBvbmVudCcsICgpID0+ICh7XG4gICAgICB0eXBlOiB0eXBlLnZhbHVlLFxuICAgICAgcmVmOiBwb3B1cFJlZi52YWx1ZVxuICAgIH0pKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHJlZjogcG9wdXBSZWYsXG4gICAgICAgIC4uLnBvcHVwUHJvcHMudmFsdWUsXG4gICAgICAgIC4uLmF0dHJzLFxuICAgICAgICBvblNob3csXG4gICAgICAgIG9uSGlkZVxuICAgICAgfVxuXG4gICAgICBsZXQgY29tcG9uZW50XG5cbiAgICAgIGlmICh0eXBlLnZhbHVlID09PSAnZGlhbG9nJykge1xuICAgICAgICBjb21wb25lbnQgPSBRRGlhbG9nXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50ID0gUU1lbnVcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXQsXG4gICAgICAgICAgY29udGV4dE1lbnU6IHByb3BzLmNvbnRleHRNZW51LFxuICAgICAgICAgIG5vUGFyZW50RXZlbnQ6IHRydWUsXG4gICAgICAgICAgc2VwYXJhdGVDbG9zZVBvcHVwOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKGNvbXBvbmVudCwgZGF0YSwgc2xvdHMuZGVmYXVsdClcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJkcmFnZWxlbWVudFwiXG4gICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gICAgICAgQGRyYWdzdGFydD1cIm9uRHJhZ1N0YXJ0KCRldmVudClcIj5cbiAgICA8c2xvdD5cbiAgICA8L3Nsb3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICAvLyBEYXRhIHR5cGUgdGhhdCBpcyBzZW50IChtb21lbnQsIHByb3BlcnR5LCBldGMpXG4gICAgICB0eXBlOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICAgIH0sXG4gICAgICAvLyBEYXRhIHRvIHNlbmQgKG1vc3QgY29tbW9ubHkgYW4gZWxlbWVudCBpZClcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgZGVmYXVsdDogXCJcIlxuICAgICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0IChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoYHVwbXQvJHtwcm9wcy50eXBlfWAsIHByb3BzLmRhdGEpXG4gICAgICB9XG4gIH1cbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbiAgLmRyYWdlbGVtZW50IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8RHJhZ0VsZW1lbnRcbiAgICB0eXBlPVwiY29sb3JcIlxuICAgIDpkYXRhPVwiY29sb3IgPz8gJydcIj5cbiAgICA8cS1idG5cbiAgICAgIHNpemU9XCJ4c1wiXG4gICAgICBkZW5zZSBmbGF0IHJvdW5kXG4gICAgICBpY29uPVwiY29sb3JpemVcIj5cbiAgICAgIDxxLXBvcHVwLXByb3h5PlxuICAgICAgICA8cS1jb2xvclxuICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogJzI0MHB4J31cIlxuICAgICAgICAgIG5vLWhlYWRlclxuICAgICAgICAgIG5vLWZvb3RlclxuICAgICAgICAgIDpwYWxldHRlPVwic3RhbmRhcmRDb2xvckFycmF5XCJcbiAgICAgICAgICBkZWZhdWx0LXZpZXc9XCJwYWxldHRlXCJcbiAgICAgICAgICB2LW1vZGVsPVwiY29sb3JcIlxuICAgICAgICAgIC8+XG4gICAgICA8L3EtcG9wdXAtcHJveHk+XG4gICAgPC9xLWJ0bj5cbiAgPC9EcmFnRWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IERyYWdFbGVtZW50IGZyb20gJy4vRHJhZ0VsZW1lbnQudnVlJ1xuXG4gIGNvbnN0IGNvbG9yID0gZGVmaW5lTW9kZWw8c3RyaW5nIHwgbnVsbD4oKVxuXG4gIGNvbnN0IHN0YW5kYXJkQ29sb3JBcnJheSA9IFtcbiAgICAgIFwiIzk4MDAwMFwiLCBcIiNmZjAwMDBcIiwgXCIjZmY5OTAwXCIsIFwiI2ZmZmYwMFwiLCBcIiMwMGZmMDBcIiwgXCIjMDBmZmZmXCIsIFwiIzRhODZlOFwiLCBcIiMwMDAwZmZcIiwgXCIjOTkwMGZmXCIsIFwiI2ZmMDBmZlwiLFxuICAgICAgXCIjZTZiOGFmXCIsIFwiI2Y0Y2NjY1wiLCBcIiNmY2U1Y2RcIiwgXCIjZmZmMmNjXCIsIFwiI2Q5ZWFkM1wiLCBcIiNkMGUwZTNcIiwgXCIjYzlkYWY4XCIsIFwiI2NmZTJmM1wiLCBcIiNkOWQyZTlcIiwgXCIjZWFkMWRjXCIsXG4gICAgICBcIiNkZDdlNmJcIiwgXCIjZWE5OTk5XCIsIFwiI2Y5Y2I5Y1wiLCBcIiNmZmU1OTlcIiwgXCIjYjZkN2E4XCIsIFwiI2EyYzRjOVwiLCBcIiNhNGMyZjRcIiwgXCIjOWZjNWU4XCIsIFwiI2I0YTdkNlwiLCBcIiNkNWE2YmRcIixcbiAgICAgIFwiI2NjNDEyNVwiLCBcIiNlMDY2NjZcIiwgXCIjZjZiMjZiXCIsIFwiI2ZmZDk2NlwiLCBcIiM5M2M0N2RcIiwgXCIjNzZhNWFmXCIsIFwiIzZkOWVlYlwiLCBcIiM2ZmE4ZGNcIiwgXCIjOGU3Y2MzXCIsIFwiI2MyN2JhMFwiLFxuICAgICAgXCIjYTYxYzAwXCIsIFwiI2NjMDAwMFwiLCBcIiNlNjkxMzhcIiwgXCIjZjFjMjMyXCIsIFwiIzZhYTg0ZlwiLCBcIiM0NTgxOGVcIiwgXCIjM2M3OGQ4XCIsIFwiIzNkODVjNlwiLCBcIiM2NzRlYTdcIiwgXCIjYTY0ZDc5XCIsXG4gICAgICBcIiM4NTIwMGNcIiwgXCIjOTkwMDAwXCIsIFwiI2I0NWYwNlwiLCBcIiNiZjkwMDBcIiwgXCIjMzg3NjFkXCIsIFwiIzEzNGY1Y1wiLCBcIiMxMTU1Y2NcIiwgXCIjMGI1Mzk0XCIsIFwiIzM1MWM3NVwiLCBcIiM3NDFiNDdcIixcbiAgICAgIFwiIzViMGYwMFwiLCBcIiM2NjAwMDBcIiwgXCIjNzgzZjA0XCIsIFwiIzdmNjAwMFwiLCBcIiMyNzRlMTNcIiwgXCIjMGMzNDNkXCIsIFwiIzFjNDU4N1wiLCBcIiMwNzM3NjNcIiwgXCIjMjAxMjRkXCIsIFwiIzRjMTEzMFwiLFxuICAgICAgXCIjMDAwMDAwXCIsIFwiIzQzNDM0M1wiLCBcIiM2NjY2NjZcIiwgXCIjOTk5OTk5XCIsIFwiI2I3YjdiN1wiLCBcIiNjY2NjY2NcIiwgXCIjZDlkOWQ5XCIsIFwiI2VmZWZlZlwiLCBcIiNmM2YzZjNcIiwgXCIjZmZmZmZmXCJcbiAgXVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLnEtY29sb3ItcGlja2VyX19jdWJlICB7XG4gICAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA4JSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnEtY29sb3ItcGlja2VyX19jdWJlOmxhc3Qtb2YtdHlwZTo6YWZ0ZXIgIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBpbnNldDogMDsgLyogRmlsbHMgdGhlIGVudGlyZSBkaXYgKi9cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIC8qIFRoZSBQb2x5Z29uIFBvaW50cyBmb3IgYW4gJ1gnIHNoYXBlICovXG4gICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAlIDAlLCAwJSAxMCUsIDQwJSA1MCUsIDAlIDkwJSwgMTAlIDEwMCUsIDUwJSA2MCUsIDkwJSAxMDAlLCAxMDAlIDkwJSwgNjAlIDUwJSwgMTAwJSAxMCUsIDkwJSAwJSwgNTAlIDQwJSk7XG4gIH1cbiAgLnEtY29sb3ItcGlja2VyX19jdWJlOmhvdmVyICB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0O1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbImRyYWdnaW5nIiwiY2xhc3NlcyIsInJhdGlvIiwiaCIsIm1vZGVsIiwidiIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfcmVuZGVyU2xvdCIsIl91c2VNb2RlbCIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4Il0sIm1hcHBpbmdzIjoiOzs7O0FBWUEsTUFBTSxvQkFBb0I7QUFDMUIsTUFBTSx5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QUFBQSxxQkFDWixNQWNRO0FBQUEsTUFkUkMsWUFjUSxNQUFBO0FBQUEsUUFiTixNQUFLO0FBQUEsUUFDTCxPQUFBO0FBQUEsUUFBTSxNQUFBO0FBQUEsUUFBSyxPQUFBO0FBQUEsUUFDWCxNQUFLO0FBQUEsTUFBQSxHQUFBO0FBQUEseUJBQ0wsTUFTZ0I7QUFBQSxVQVRoQkEsWUFTZ0IsYUFBQSxNQUFBO0FBQUEsWUFBQSxTQUFBQyxRQVJkLE1BT0k7QUFBQSxjQVBKRCxZQU9JLFFBQUE7QUFBQSxnQkFORCxPQUFPLEVBQUEsT0FBQSxRQUFBO0FBQUEsZ0JBQ1IsYUFBQTtBQUFBLGdCQUNBLGFBQUE7QUFBQSxnQkFDQyxTQUFTLE9BQUE7QUFBQSxnQkFDVixnQkFBYTtBQUFBLGdCQUFBLFlBQ0osT0FBQTtBQUFBLGdCQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLFFBQUs7QUFBQSxjQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyXX0=
