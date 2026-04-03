import { c as createComponent, g as getCurrentInstance, D as inject, E as emptyRenderFn, F as layoutKey, r as ref, e as computed, w as watch, q as onBeforeUnmount, bt as hUniqueSlot, h, V as withDirectives, bl as listenOpts, s as scrollTargetProp, x as getScrollTarget, O as onMounted, aJ as noop, bA as getVerticalScrollPosition, bB as getHorizontalScrollPosition, u as useDarkProps, b as useDark, aK as debounce, bC as setHorizontalScrollPosition, aj as onDeactivated, ak as onActivated, bD as setVerticalScrollPosition, C as hMergeSlot, f as hSlot, an as provide, G as pageContainerKey, br as getScrollbarWidth, bk as isRuntimeSsrPreHydration, bE as reactive, bF as onUnmounted, H as defineComponent, K as createBlock, L as openBlock, a9 as createBaseVNode, af as normalizeStyle, P as createElementBlock, N as createCommentVNode, aV as renderSlot, X as toDisplayString, ad as normalizeClass, bG as Teleport, ai as nextTick, Y as withModifiers, I as useProjectStore, J as useInterfaceStore, be as storeToRefs, bH as storeProject, a as axios, _ as _export_sfc, ae as resolveComponent, M as withCtx, R as createVNode, Q as QBtn, W as createTextVNode, aG as QSeparator, bd as QInput, aq as withKeys, S as Fragment, U as renderList, a7 as QIcon, a6 as Ripple } from "./index-DJPRzX2s.js";
import { Q as QToolbarTitle, a as QDrawer, b as QForm } from "./QForm-CtMX0Ycg.js";
import { Q as QTooltip } from "./QTooltip-CLmT6_So.js";
import { g as between, Q as QMenu, f as QItem, h as QItemSection } from "./format-BelUsrmY.js";
import { a as QResizeObserver, T as TouchPan, N as NoteIcon, Q as QPopupEdit } from "./NoteIcon-DaqPhRMF.js";
import { Q as QList } from "./QList-Cqk60IIS.js";
import { Q as QToolbar } from "./QToolbar-kKaSauFi.js";
import { u as useQuasar, C as ClosePopup } from "./use-quasar-CfRvMs32.js";
const QHeader = createComponent({
  name: "QHeader",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    },
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QHeader needs to be child of QLayout");
      return emptyRenderFn;
    }
    const size = ref(parseInt(props.heightHint, 10));
    const revealed = ref(true);
    const fixed = computed(
      () => props.reveal === true || $layout.view.value.indexOf("H") !== -1 || $q.platform.is.ios && $layout.isContainer.value === true
    );
    const offset = computed(() => {
      if (props.modelValue !== true) {
        return 0;
      }
      if (fixed.value === true) {
        return revealed.value === true ? size.value : 0;
      }
      const offset2 = size.value - $layout.scroll.value.position;
      return offset2 > 0 ? offset2 : 0;
    });
    const hidden = computed(
      () => props.modelValue !== true || fixed.value === true && revealed.value !== true
    );
    const revealOnFocus = computed(
      () => props.modelValue === true && hidden.value === true && props.reveal === true
    );
    const classes = computed(
      () => "q-header q-layout__section--marginal " + (fixed.value === true ? "fixed" : "absolute") + "-top" + (props.bordered === true ? " q-header--bordered" : "") + (hidden.value === true ? " q-header--hidden" : "") + (props.modelValue !== true ? " q-layout--prevent-focus" : "")
    );
    const style = computed(() => {
      const view = $layout.rows.value.top, css = {};
      if (view[0] === "l" && $layout.left.space === true) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${$layout.left.size}px`;
      }
      if (view[2] === "r" && $layout.right.space === true) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${$layout.right.size}px`;
      }
      return css;
    });
    function updateLayout(prop, val) {
      $layout.update("header", prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function onResize({ height }) {
      updateLocal(size, height);
      updateLayout("size", height);
    }
    function onFocusin(evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }
      emit("focusin", evt);
    }
    watch(() => props.modelValue, (val) => {
      updateLayout("space", val);
      updateLocal(revealed, true);
      $layout.animate();
    });
    watch(offset, (val) => {
      updateLayout("offset", val);
    });
    watch(() => props.reveal, (val) => {
      val === false && updateLocal(revealed, props.modelValue);
    });
    watch(revealed, (val) => {
      $layout.animate();
      emit("reveal", val);
    });
    watch($layout.scroll, (scroll) => {
      props.reveal === true && updateLocal(
        revealed,
        scroll.direction === "up" || scroll.position <= props.revealOffset || scroll.position - scroll.inflectionPoint < 100
      );
    });
    const instance = {};
    $layout.instances.header = instance;
    props.modelValue === true && updateLayout("size", size.value);
    updateLayout("space", props.modelValue);
    updateLayout("offset", offset.value);
    onBeforeUnmount(() => {
      if ($layout.instances.header === instance) {
        $layout.instances.header = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = hUniqueSlot(slots.default, []);
      props.elevated === true && child.push(
        h("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      );
      child.push(
        h(QResizeObserver, {
          debounce: 0,
          onResize
        })
      );
      return h("header", {
        class: classes.value,
        style: style.value,
        onFocusin
      }, child);
    };
  }
});
const ScrollAreaControls = createComponent({
  props: [
    "store",
    "barStyle",
    "verticalBarStyle",
    "horizontalBarStyle"
  ],
  setup(props) {
    return () => [
      h("div", {
        class: props.store.scroll.vertical.barClass.value,
        style: [props.barStyle, props.verticalBarStyle],
        "aria-hidden": "true",
        onMousedown: props.store.onVerticalMousedown
      }),
      h("div", {
        class: props.store.scroll.horizontal.barClass.value,
        style: [props.barStyle, props.horizontalBarStyle],
        "aria-hidden": "true",
        onMousedown: props.store.onHorizontalMousedown
      }),
      withDirectives(
        h("div", {
          ref: props.store.scroll.vertical.ref,
          class: props.store.scroll.vertical.thumbClass.value,
          style: props.store.scroll.vertical.style.value,
          "aria-hidden": "true"
        }),
        props.store.thumbVertDir
      ),
      withDirectives(
        h("div", {
          ref: props.store.scroll.horizontal.ref,
          class: props.store.scroll.horizontal.thumbClass.value,
          style: props.store.scroll.horizontal.style.value,
          "aria-hidden": "true"
        }),
        props.store.thumbHorizDir
      )
    ];
  }
});
const { passive } = listenOpts;
const axisValues = ["both", "horizontal", "vertical"];
const QScrollObserver = createComponent({
  name: "QScrollObserver",
  props: {
    axis: {
      type: String,
      validator: (v) => axisValues.includes(v),
      default: "vertical"
    },
    debounce: [String, Number],
    scrollTarget: scrollTargetProp
  },
  emits: ["scroll"],
  setup(props, { emit }) {
    const scroll = {
      position: {
        top: 0,
        left: 0
      },
      direction: "down",
      directionChanged: false,
      delta: {
        top: 0,
        left: 0
      },
      inflectionPoint: {
        top: 0,
        left: 0
      }
    };
    let clearTimer = null, localScrollTarget, parentEl;
    watch(() => props.scrollTarget, () => {
      unconfigureScrollTarget();
      configureScrollTarget();
    });
    function emitEvent() {
      clearTimer?.();
      const top = Math.max(0, getVerticalScrollPosition(localScrollTarget));
      const left = getHorizontalScrollPosition(localScrollTarget);
      const delta = {
        top: top - scroll.position.top,
        left: left - scroll.position.left
      };
      if (props.axis === "vertical" && delta.top === 0 || props.axis === "horizontal" && delta.left === 0) return;
      const curDir = Math.abs(delta.top) >= Math.abs(delta.left) ? delta.top < 0 ? "up" : "down" : delta.left < 0 ? "left" : "right";
      scroll.position = { top, left };
      scroll.directionChanged = scroll.direction !== curDir;
      scroll.delta = delta;
      if (scroll.directionChanged === true) {
        scroll.direction = curDir;
        scroll.inflectionPoint = scroll.position;
      }
      emit("scroll", { ...scroll });
    }
    function configureScrollTarget() {
      localScrollTarget = getScrollTarget(parentEl, props.scrollTarget);
      localScrollTarget.addEventListener("scroll", trigger, passive);
      trigger(true);
    }
    function unconfigureScrollTarget() {
      if (localScrollTarget !== void 0) {
        localScrollTarget.removeEventListener("scroll", trigger, passive);
        localScrollTarget = void 0;
      }
    }
    function trigger(immediately) {
      if (immediately === true || props.debounce === 0 || props.debounce === "0") {
        emitEvent();
      } else if (clearTimer === null) {
        const [timer, fn] = props.debounce ? [setTimeout(emitEvent, props.debounce), clearTimeout] : [requestAnimationFrame(emitEvent), cancelAnimationFrame];
        clearTimer = () => {
          fn(timer);
          clearTimer = null;
        };
      }
    }
    const { proxy } = getCurrentInstance();
    watch(() => proxy.$q.lang.rtl, emitEvent);
    onMounted(() => {
      parentEl = proxy.$el.parentNode;
      configureScrollTarget();
    });
    onBeforeUnmount(() => {
      clearTimer?.();
      unconfigureScrollTarget();
    });
    Object.assign(proxy, {
      trigger,
      getPosition: () => scroll
    });
    return noop;
  }
});
const axisList = ["vertical", "horizontal"];
const dirProps = {
  vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" },
  horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" }
};
const panOpts = {
  prevent: true,
  mouse: true,
  mouseAllDir: true
};
const getMinThumbSize = (size) => size >= 250 ? 50 : Math.ceil(size / 5);
const QScrollArea = createComponent({
  name: "QScrollArea",
  props: {
    ...useDarkProps,
    thumbStyle: Object,
    verticalThumbStyle: Object,
    horizontalThumbStyle: Object,
    barStyle: [Array, String, Object],
    verticalBarStyle: [Array, String, Object],
    horizontalBarStyle: [Array, String, Object],
    verticalOffset: {
      type: Array,
      default: [0, 0]
    },
    horizontalOffset: {
      type: Array,
      default: [0, 0]
    },
    contentStyle: [Array, String, Object],
    contentActiveStyle: [Array, String, Object],
    delay: {
      type: [String, Number],
      default: 1e3
    },
    visible: {
      type: Boolean,
      default: null
    },
    tabindex: [String, Number],
    onScroll: Function
  },
  setup(props, { slots, emit }) {
    const tempShowing = ref(false);
    const panning = ref(false);
    const hover = ref(false);
    const container = {
      vertical: ref(0),
      horizontal: ref(0)
    };
    const scroll = {
      vertical: {
        ref: ref(null),
        position: ref(0),
        size: ref(0)
      },
      horizontal: {
        ref: ref(null),
        position: ref(0),
        size: ref(0)
      }
    };
    const { proxy } = getCurrentInstance();
    const isDark = useDark(props, proxy.$q);
    let timer = null, panRefPos;
    const targetRef = ref(null);
    const classes = computed(
      () => "q-scrollarea" + (isDark.value === true ? " q-scrollarea--dark" : "")
    );
    Object.assign(container, {
      verticalInner: computed(() => container.vertical.value - props.verticalOffset[0] - props.verticalOffset[1]),
      horizontalInner: computed(() => container.horizontal.value - props.horizontalOffset[0] - props.horizontalOffset[1])
    });
    scroll.vertical.percentage = computed(() => {
      const diff = scroll.vertical.size.value - container.vertical.value;
      if (diff <= 0) {
        return 0;
      }
      const p = between(scroll.vertical.position.value / diff, 0, 1);
      return Math.round(p * 1e4) / 1e4;
    });
    scroll.vertical.thumbHidden = computed(() => (props.visible === null ? hover.value : props.visible) !== true && tempShowing.value === false && panning.value === false || scroll.vertical.size.value <= container.vertical.value + 1);
    scroll.vertical.thumbStart = computed(() => props.verticalOffset[0] + scroll.vertical.percentage.value * (container.verticalInner.value - scroll.vertical.thumbSize.value));
    scroll.vertical.thumbSize = computed(
      () => Math.round(
        between(
          container.verticalInner.value * container.verticalInner.value / scroll.vertical.size.value,
          getMinThumbSize(container.verticalInner.value),
          container.verticalInner.value
        )
      )
    );
    scroll.vertical.style = computed(() => ({
      ...props.thumbStyle,
      ...props.verticalThumbStyle,
      top: `${scroll.vertical.thumbStart.value}px`,
      height: `${scroll.vertical.thumbSize.value}px`,
      right: `${props.horizontalOffset[1]}px`
    }));
    scroll.vertical.thumbClass = computed(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (scroll.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : ""));
    scroll.vertical.barClass = computed(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (scroll.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
    scroll.horizontal.percentage = computed(() => {
      const diff = scroll.horizontal.size.value - container.horizontal.value;
      if (diff <= 0) {
        return 0;
      }
      const p = between(Math.abs(scroll.horizontal.position.value) / diff, 0, 1);
      return Math.round(p * 1e4) / 1e4;
    });
    scroll.horizontal.thumbHidden = computed(() => (props.visible === null ? hover.value : props.visible) !== true && tempShowing.value === false && panning.value === false || scroll.horizontal.size.value <= container.horizontal.value + 1);
    scroll.horizontal.thumbStart = computed(() => props.horizontalOffset[0] + scroll.horizontal.percentage.value * (container.horizontalInner.value - scroll.horizontal.thumbSize.value));
    scroll.horizontal.thumbSize = computed(
      () => Math.round(
        between(
          container.horizontalInner.value * container.horizontalInner.value / scroll.horizontal.size.value,
          getMinThumbSize(container.horizontalInner.value),
          container.horizontalInner.value
        )
      )
    );
    scroll.horizontal.style = computed(() => ({
      ...props.thumbStyle,
      ...props.horizontalThumbStyle,
      [proxy.$q.lang.rtl === true ? "right" : "left"]: `${scroll.horizontal.thumbStart.value}px`,
      width: `${scroll.horizontal.thumbSize.value}px`,
      bottom: `${props.verticalOffset[1]}px`
    }));
    scroll.horizontal.thumbClass = computed(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (scroll.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : ""));
    scroll.horizontal.barClass = computed(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (scroll.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
    const mainStyle = computed(() => scroll.vertical.thumbHidden.value === true && scroll.horizontal.thumbHidden.value === true ? props.contentStyle : props.contentActiveStyle);
    function getScroll() {
      const info = {};
      axisList.forEach((axis) => {
        const data = scroll[axis];
        Object.assign(info, {
          [axis + "Position"]: data.position.value,
          [axis + "Percentage"]: data.percentage.value,
          [axis + "Size"]: data.size.value,
          [axis + "ContainerSize"]: container[axis].value,
          [axis + "ContainerInnerSize"]: container[axis + "Inner"].value
        });
      });
      return info;
    }
    const emitScroll = debounce(() => {
      const info = getScroll();
      info.ref = proxy;
      emit("scroll", info);
    }, 0);
    function localSetScrollPosition(axis, offset, duration) {
      if (axisList.includes(axis) === false) {
        console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
        return;
      }
      const fn = axis === "vertical" ? setVerticalScrollPosition : setHorizontalScrollPosition;
      fn(targetRef.value, offset, duration);
    }
    function updateContainer({ height, width }) {
      let change = false;
      if (container.vertical.value !== height) {
        container.vertical.value = height;
        change = true;
      }
      if (container.horizontal.value !== width) {
        container.horizontal.value = width;
        change = true;
      }
      change === true && startTimer();
    }
    function updateScroll({ position }) {
      let change = false;
      if (scroll.vertical.position.value !== position.top) {
        scroll.vertical.position.value = position.top;
        change = true;
      }
      if (scroll.horizontal.position.value !== position.left) {
        scroll.horizontal.position.value = position.left;
        change = true;
      }
      change === true && startTimer();
    }
    function updateScrollSize({ height, width }) {
      if (scroll.horizontal.size.value !== width) {
        scroll.horizontal.size.value = width;
        startTimer();
      }
      if (scroll.vertical.size.value !== height) {
        scroll.vertical.size.value = height;
        startTimer();
      }
    }
    function onPanThumb(e, axis) {
      const data = scroll[axis];
      if (e.isFirst === true) {
        if (data.thumbHidden.value === true) return;
        panRefPos = data.position.value;
        panning.value = true;
      } else if (panning.value !== true) {
        return;
      }
      if (e.isFinal === true) {
        panning.value = false;
      }
      const dProp = dirProps[axis];
      const multiplier = (data.size.value - container[axis].value) / (container[axis + "Inner"].value - data.thumbSize.value);
      const distance = e.distance[dProp.dist];
      const pos = panRefPos + (e.direction === dProp.dir ? 1 : -1) * distance * multiplier;
      setScroll(pos, axis);
    }
    function onMousedown(evt, axis) {
      const data = scroll[axis];
      if (data.thumbHidden.value !== true) {
        const startOffset = axis === "vertical" ? props.verticalOffset[0] : props.horizontalOffset[0];
        const offset = evt[dirProps[axis].offset] - startOffset;
        const thumbStart = data.thumbStart.value - startOffset;
        if (offset < thumbStart || offset > thumbStart + data.thumbSize.value) {
          const targetThumbStart = offset - data.thumbSize.value / 2;
          const percentage = between(targetThumbStart / (container[axis + "Inner"].value - data.thumbSize.value), 0, 1);
          setScroll(percentage * Math.max(0, data.size.value - container[axis].value), axis);
        }
        if (data.ref.value !== null) {
          data.ref.value.dispatchEvent(new MouseEvent(evt.type, evt));
        }
      }
    }
    function startTimer() {
      tempShowing.value = true;
      timer !== null && clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        tempShowing.value = false;
      }, props.delay);
      props.onScroll !== void 0 && emitScroll();
    }
    function setScroll(offset, axis) {
      targetRef.value[dirProps[axis].scroll] = offset;
    }
    let mouseEventTimer = null;
    function onMouseenter() {
      if (mouseEventTimer !== null) {
        clearTimeout(mouseEventTimer);
      }
      mouseEventTimer = setTimeout(() => {
        mouseEventTimer = null;
        hover.value = true;
      }, proxy.$q.platform.is.ios ? 50 : 0);
    }
    function onMouseleave() {
      if (mouseEventTimer !== null) {
        clearTimeout(mouseEventTimer);
        mouseEventTimer = null;
      }
      hover.value = false;
    }
    let scrollPosition = null;
    watch(() => proxy.$q.lang.rtl, (rtl) => {
      if (targetRef.value !== null) {
        setHorizontalScrollPosition(
          targetRef.value,
          Math.abs(scroll.horizontal.position.value) * (rtl === true ? -1 : 1)
        );
      }
    });
    onDeactivated(() => {
      scrollPosition = {
        top: scroll.vertical.position.value,
        left: scroll.horizontal.position.value
      };
    });
    onActivated(() => {
      if (scrollPosition === null) return;
      const scrollTarget = targetRef.value;
      if (scrollTarget !== null) {
        setHorizontalScrollPosition(scrollTarget, scrollPosition.left);
        setVerticalScrollPosition(scrollTarget, scrollPosition.top);
      }
    });
    onBeforeUnmount(emitScroll.cancel);
    Object.assign(proxy, {
      getScrollTarget: () => targetRef.value,
      getScroll,
      getScrollPosition: () => ({
        top: scroll.vertical.position.value,
        left: scroll.horizontal.position.value
      }),
      getScrollPercentage: () => ({
        top: scroll.vertical.percentage.value,
        left: scroll.horizontal.percentage.value
      }),
      setScrollPosition: localSetScrollPosition,
      setScrollPercentage(axis, percentage, duration) {
        localSetScrollPosition(
          axis,
          percentage * (scroll[axis].size.value - container[axis].value) * (axis === "horizontal" && proxy.$q.lang.rtl === true ? -1 : 1),
          duration
        );
      }
    });
    const store = {
      scroll,
      thumbVertDir: [[
        TouchPan,
        (e) => {
          onPanThumb(e, "vertical");
        },
        void 0,
        { vertical: true, ...panOpts }
      ]],
      thumbHorizDir: [[
        TouchPan,
        (e) => {
          onPanThumb(e, "horizontal");
        },
        void 0,
        { horizontal: true, ...panOpts }
      ]],
      onVerticalMousedown(evt) {
        onMousedown(evt, "vertical");
      },
      onHorizontalMousedown(evt) {
        onMousedown(evt, "horizontal");
      }
    };
    return () => {
      return h("div", {
        class: classes.value,
        onMouseenter,
        onMouseleave
      }, [
        h("div", {
          ref: targetRef,
          class: "q-scrollarea__container scroll relative-position fit hide-scrollbar",
          tabindex: props.tabindex !== void 0 ? props.tabindex : void 0
        }, [
          h("div", {
            class: "q-scrollarea__content absolute",
            style: mainStyle.value
          }, hMergeSlot(slots.default, [
            h(QResizeObserver, {
              debounce: 0,
              onResize: updateScrollSize
            })
          ])),
          h(QScrollObserver, {
            axis: "both",
            onScroll: updateScroll
          })
        ]),
        h(QResizeObserver, {
          debounce: 0,
          onResize: updateContainer
        }),
        h(ScrollAreaControls, {
          store,
          barStyle: props.barStyle,
          verticalBarStyle: props.verticalBarStyle,
          horizontalBarStyle: props.horizontalBarStyle
        })
      ]);
    };
  }
});
const QPageContainer = createComponent({
  name: "QPageContainer",
  setup(_, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QPageContainer needs to be child of QLayout");
      return emptyRenderFn;
    }
    provide(pageContainerKey, true);
    const style = computed(() => {
      const css = {};
      if ($layout.header.space === true) {
        css.paddingTop = `${$layout.header.size}px`;
      }
      if ($layout.right.space === true) {
        css[`padding${$q.lang.rtl === true ? "Left" : "Right"}`] = `${$layout.right.size}px`;
      }
      if ($layout.footer.space === true) {
        css.paddingBottom = `${$layout.footer.size}px`;
      }
      if ($layout.left.space === true) {
        css[`padding${$q.lang.rtl === true ? "Right" : "Left"}`] = `${$layout.left.size}px`;
      }
      return css;
    });
    return () => h("div", {
      class: "q-page-container",
      style: style.value
    }, hSlot(slots.default));
  }
});
const QLayout = createComponent({
  name: "QLayout",
  props: {
    container: Boolean,
    view: {
      type: String,
      default: "hhh lpr fff",
      validator: (v) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(v.toLowerCase())
    },
    onScroll: Function,
    onScrollHeight: Function,
    onResize: Function
  },
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const rootRef = ref(null);
    const height = ref($q.screen.height);
    const width = ref(props.container === true ? 0 : $q.screen.width);
    const scroll = ref({ position: 0, direction: "down", inflectionPoint: 0 });
    const containerHeight = ref(0);
    const scrollbarWidth = ref(isRuntimeSsrPreHydration.value === true ? 0 : getScrollbarWidth());
    const classes = computed(
      () => "q-layout q-layout--" + (props.container === true ? "containerized" : "standard")
    );
    const style = computed(() => props.container === false ? { minHeight: $q.screen.height + "px" } : null);
    const targetStyle = computed(() => scrollbarWidth.value !== 0 ? { [$q.lang.rtl === true ? "left" : "right"]: `${scrollbarWidth.value}px` } : null);
    const targetChildStyle = computed(() => scrollbarWidth.value !== 0 ? {
      [$q.lang.rtl === true ? "right" : "left"]: 0,
      [$q.lang.rtl === true ? "left" : "right"]: `-${scrollbarWidth.value}px`,
      width: `calc(100% + ${scrollbarWidth.value}px)`
    } : null);
    function onPageScroll(data) {
      if (props.container === true || document.qScrollPrevented !== true) {
        const info = {
          position: data.position.top,
          direction: data.direction,
          directionChanged: data.directionChanged,
          inflectionPoint: data.inflectionPoint.top,
          delta: data.delta.top
        };
        scroll.value = info;
        props.onScroll !== void 0 && emit("scroll", info);
      }
    }
    function onPageResize(data) {
      const { height: newHeight, width: newWidth } = data;
      let resized = false;
      if (height.value !== newHeight) {
        resized = true;
        height.value = newHeight;
        props.onScrollHeight !== void 0 && emit("scrollHeight", newHeight);
        updateScrollbarWidth();
      }
      if (width.value !== newWidth) {
        resized = true;
        width.value = newWidth;
      }
      if (resized === true && props.onResize !== void 0) {
        emit("resize", data);
      }
    }
    function onContainerResize({ height: height2 }) {
      if (containerHeight.value !== height2) {
        containerHeight.value = height2;
        updateScrollbarWidth();
      }
    }
    function updateScrollbarWidth() {
      if (props.container === true) {
        const width2 = height.value > containerHeight.value ? getScrollbarWidth() : 0;
        if (scrollbarWidth.value !== width2) {
          scrollbarWidth.value = width2;
        }
      }
    }
    let animateTimer = null;
    const $layout = {
      instances: {},
      view: computed(() => props.view),
      isContainer: computed(() => props.container),
      rootRef,
      height,
      containerHeight,
      scrollbarWidth,
      totalWidth: computed(() => width.value + scrollbarWidth.value),
      rows: computed(() => {
        const rows = props.view.toLowerCase().split(" ");
        return {
          top: rows[0].split(""),
          middle: rows[1].split(""),
          bottom: rows[2].split("")
        };
      }),
      header: reactive({ size: 0, offset: 0, space: false }),
      right: reactive({ size: 300, offset: 0, space: false }),
      footer: reactive({ size: 0, offset: 0, space: false }),
      left: reactive({ size: 300, offset: 0, space: false }),
      scroll,
      animate() {
        if (animateTimer !== null) {
          clearTimeout(animateTimer);
        } else {
          document.body.classList.add("q-body--layout-animate");
        }
        animateTimer = setTimeout(() => {
          animateTimer = null;
          document.body.classList.remove("q-body--layout-animate");
        }, 155);
      },
      update(part, prop, val) {
        $layout[part][prop] = val;
      }
    };
    provide(layoutKey, $layout);
    if (getScrollbarWidth() > 0) {
      let restoreScrollbar = function() {
        timer = null;
        el.classList.remove("hide-scrollbar");
      }, hideScrollbar = function() {
        if (timer === null) {
          if (el.scrollHeight > $q.screen.height) return;
          el.classList.add("hide-scrollbar");
        } else {
          clearTimeout(timer);
        }
        timer = setTimeout(restoreScrollbar, 300);
      }, updateScrollEvent = function(action) {
        if (timer !== null && action === "remove") {
          clearTimeout(timer);
          restoreScrollbar();
        }
        window[`${action}EventListener`]("resize", hideScrollbar);
      };
      let timer = null;
      const el = document.body;
      watch(
        () => props.container !== true ? "add" : "remove",
        updateScrollEvent
      );
      props.container !== true && updateScrollEvent("add");
      onUnmounted(() => {
        updateScrollEvent("remove");
      });
    }
    return () => {
      const content = hMergeSlot(slots.default, [
        h(QScrollObserver, { onScroll: onPageScroll }),
        h(QResizeObserver, { onResize: onPageResize })
      ]);
      const layout = h("div", {
        class: classes.value,
        style: style.value,
        ref: props.container === true ? void 0 : rootRef,
        tabindex: -1
      }, content);
      if (props.container === true) {
        return h("div", {
          class: "q-layout-container overflow-hidden",
          ref: rootRef
        }, [
          h(QResizeObserver, { onResize: onContainerResize }),
          h("div", {
            class: "absolute-full",
            style: targetStyle.value
          }, [
            h("div", {
              class: "scroll",
              style: targetChildStyle.value
            }, [layout])
          ])
        ]);
      }
      return layout;
    };
  }
});
/*! NanoPop 2.4.2 MIT | https://github.com/Simonwep/nanopop */
const I = {
  variantFlipOrder: { start: "sme", middle: "mse", end: "ems" },
  positionFlipOrder: { top: "tbrl", right: "rltb", bottom: "btrl", left: "lrbt" },
  position: "bottom",
  margin: 8,
  padding: 0
}, J = (n, i, m) => {
  const {
    container: r,
    arrow: a,
    margin: e,
    padding: l,
    position: V,
    variantFlipOrder: C,
    positionFlipOrder: M
  } = {
    container: document.documentElement.getBoundingClientRect(),
    ...I,
    ...m
  }, { left: F, top: K } = i.style;
  i.style.left = "0", i.style.top = "0";
  const t = n.getBoundingClientRect(), o = i.getBoundingClientRect(), P = {
    t: t.top - o.height - e,
    b: t.bottom + e,
    r: t.right + e,
    l: t.left - o.width - e
  }, R = {
    vs: t.left,
    vm: t.left + t.width / 2 - o.width / 2,
    ve: t.left + t.width - o.width,
    hs: t.top,
    hm: t.bottom - t.height / 2 - o.height / 2,
    he: t.bottom - o.height
  }, [$, E = "middle"] = V.split("-"), L = M[$], j = C[E], { top: y, left: x, bottom: B, right: O } = r;
  for (const c of L) {
    const s = c === "t" || c === "b";
    let p = P[c];
    const [d, g] = s ? ["top", "left"] : ["left", "top"], [u, v] = s ? [o.height, o.width] : [o.width, o.height], [z, T] = s ? [B, O] : [O, B], [H, k] = s ? [y, x] : [x, y];
    if (!(p < H || p + u + l > z))
      for (const b of j) {
        let f = R[(s ? "v" : "h") + b];
        if (!(f < k || f + v + l > T)) {
          if (f -= o[g], p -= o[d], i.style[g] = `${f}px`, i.style[d] = `${p}px`, a) {
            const w = s ? t.width / 2 : t.height / 2, h2 = v / 2, S = w > h2, q = {
              s: S ? h2 : w,
              m: h2,
              e: S ? h2 : v - w
            }, A = {
              t: u,
              b: 0,
              r: 0,
              l: u
            }, D = f + q[b], G = p + A[c];
            a.style[g] = `${D}px`, a.style[d] = `${G}px`;
          }
          return c + b;
        }
      }
  }
  return i.style.left = F, i.style.top = K, null;
}, Q = (n, i, m) => {
  const r = typeof n == "object" && !(n instanceof HTMLElement) ? n : { reference: n, popper: i, ...m };
  return {
    /**
     * Repositions the current popper.
     * @param options Optional options which get merged with the current ones.
     */
    update(a = r) {
      const { reference: e, popper: l } = Object.assign(r, a);
      if (!l || !e)
        throw new Error("Popper- or reference-element missing.");
      return J(e, l, r);
    }
  };
};
var easeInOutQuad = function easeInOutQuad2(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var jumper = function jumper2() {
  var element = void 0;
  var start = void 0;
  var stop = void 0;
  var offset = void 0;
  var easing = void 0;
  var a11y = void 0;
  var distance = void 0;
  var duration = void 0;
  var timeStart = void 0;
  var timeElapsed = void 0;
  var next = void 0;
  var callback = void 0;
  function location() {
    return window.scrollY || window.pageYOffset;
  }
  function top(element2) {
    return element2.getBoundingClientRect().top + start;
  }
  function loop(timeCurrent) {
    if (!timeStart) {
      timeStart = timeCurrent;
    }
    timeElapsed = timeCurrent - timeStart;
    next = easing(timeElapsed, start, distance, duration);
    window.scrollTo(0, next);
    timeElapsed < duration ? window.requestAnimationFrame(loop) : done();
  }
  function done() {
    window.scrollTo(0, start + distance);
    if (element && a11y) {
      element.setAttribute("tabindex", "-1");
      element.focus();
    }
    if (typeof callback === "function") {
      callback();
    }
    timeStart = false;
  }
  function jump(target) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    duration = options.duration || 1e3;
    offset = options.offset || 0;
    callback = options.callback;
    easing = options.easing || easeInOutQuad;
    a11y = options.a11y || false;
    start = location();
    switch (typeof target === "undefined" ? "undefined" : _typeof(target)) {
      // scroll from current position
      case "number":
        element = void 0;
        a11y = false;
        stop = start + target;
        break;
      // scroll to element (node)
      // bounding rect is relative to the viewport
      case "object":
        element = target;
        stop = top(element);
        break;
      // scroll to element (selector)
      // bounding rect is relative to the viewport
      case "string":
        element = document.querySelector(target);
        stop = top(element);
        break;
    }
    distance = stop - start + offset;
    switch (_typeof(options.duration)) {
      // number in ms
      case "number":
        duration = options.duration;
        break;
      // function passed the distance of the scroll
      case "function":
        duration = options.duration(distance);
        break;
    }
    window.requestAnimationFrame(loop);
  }
  return jump;
};
var singleton = jumper();
const Ee = (e, n, o, t) => (e /= t, o * e * e + n), Be = (e, n, o, t) => (e /= t, -o * e * (e - 2) + n), ie = (e, n, o, t) => (e /= t / 2, e < 1 ? o / 2 * e * e + n : (e--, -o / 2 * (e * (e - 2) - 1) + n)), De = (e, n, o, t) => (e /= t, o * e * e * e + n), je = (e, n, o, t) => (e /= t, e--, o * (e * e * e + 1) + n), Ie = (e, n, o, t) => (e /= t / 2, e < 1 ? o / 2 * e * e * e + n : (e -= 2, o / 2 * (e * e * e + 2) + n)), Oe = (e, n, o, t) => (e /= t, o * e * e * e * e + n), Pe = (e, n, o, t) => (e /= t, e--, -o * (e * e * e * e - 1) + n), _e = (e, n, o, t) => (e /= t / 2, e < 1 ? o / 2 * e * e * e * e + n : (e -= 2, -o / 2 * (e * e * e * e - 2) + n)), Ne = (e, n, o, t) => (e /= t, o * e * e * e * e * e + n), qe = (e, n, o, t) => (e /= t, e--, o * (e * e * e * e * e + 1) + n), Me = (e, n, o, t) => (e /= t / 2, e < 1 ? o / 2 * e * e * e * e * e + n : (e -= 2, o / 2 * (e * e * e * e * e + 2) + n)), Qe = {
  easeInQuad: Ee,
  easeOutQuad: Be,
  easeInOutQuad: ie,
  easeInCubic: De,
  easeOutCubic: je,
  easeInOutCubic: Ie,
  easeInQuart: Oe,
  easeOutQuart: Pe,
  easeInOutQuart: _e,
  easeInQuint: Ne,
  easeOutQuint: qe,
  easeInOutQuint: Me
}, ze = ["data-hidden"], Ve = ["id", "data-hidden"], Re = ["id", "aria-modal", "aria-label", "aria-describedby", "tabindex", "data-hidden"], Fe = {
  key: 0,
  role: "status",
  "aria-live": "polite",
  "aria-atomic": "true",
  class: "vjt-sr-only"
}, He = ["id"], Ue = ["id", "innerHTML"], Ge = { class: "vjt-actions" }, Ke = ["aria-label"], Je = ["aria-label"], We = ["aria-label"], tt = /* @__PURE__ */ defineComponent({
  __name: "VTour",
  props: {
    name: { default: "tour" },
    steps: {},
    backdrop: { type: Boolean, default: false },
    autoStart: { type: Boolean, default: false },
    startDelay: { default: 0 },
    highlight: { type: Boolean, default: false },
    margin: { default: 8 },
    buttonLabels: {},
    saveToLocalStorage: { default: "never" },
    hideSkip: { type: Boolean, default: false },
    hideArrow: { type: Boolean, default: false },
    noScroll: { type: Boolean, default: false },
    resizeTimeout: { default: 250 },
    defaultPlacement: { default: "right" },
    jumpOptions: {},
    enableA11y: { type: Boolean, default: false },
    keyboardNav: { type: Boolean, default: true },
    ariaLabel: { default: "Guided tour" },
    teleportDelay: { default: 100 },
    restartOnPropChange: { type: Boolean, default: true }
  },
  emits: ["onTourStart", "onTourEnd", "onTourStep"],
  setup(e, { expose: n, emit: o }) {
    const t = e, q = o, k = computed(() => t.name ? `vjt-${t.name}` : "vjt-tour"), h2 = ref(), l = ref(0), i = ref(0), p = ref(1), g = computed(() => t.steps[l.value]), ce = computed(() => t.steps[i.value]), ve = computed(() => t.steps[p.value]), G = reactive({
      currentStep: l,
      lastStep: i,
      nextStep: p,
      getCurrentStep: g,
      getLastStep: ce,
      getNextStep: ve
    }), K = computed(
      () => l.value === t.steps.length - 1
    ), J2 = computed(() => K.value ? t.buttonLabels?.done ?? "Done" : t.buttonLabels?.next ?? "Next"), A = ref(""), s = ref(false), M = ref(false), de = ref("right"), f = ref(false), Q$1 = computed(() => t.name ? `vjt-${t.name}` : "vjt"), E = computed(() => `${Q$1.value}-vjt-tooltip`), W = computed(() => `${Q$1.value}-vjt-backdrop`), fe = computed(() => `${Q$1.value}-vjt-arrow`), y = computed(
      () => t.name ? `${t.name}vjt-highlight` : "vjt-highlight"
    ), m = ref(), X = ref();
    let B = null;
    const Y = {
      duration: 500,
      offset: -100
    }, D = () => localStorage.getItem(k.value) === "true", j = reactive({
      name: void 0,
      stepsRef: null
    }), I2 = async () => {
      if (!D()) {
        if (s.value) {
          const a = t.name !== j.name, r = t.steps !== j.stepsRef;
          if (!(a || r))
            return;
          b(), await nextTick();
        }
        if (t.saveToLocalStorage === "step") {
          const a = localStorage.getItem(k.value);
          l.value = parseInt(a || "0", 10), l.value > 0 && (i.value = Math.max(l.value - 1, 0), p.value = l.value + 1);
        } else
          l.value = 0;
        R = setTimeout(async () => {
          await _(l.value);
          const a = g.value;
          if (!a) {
            console.warn("No step data available");
            return;
          }
          const r = document.querySelector(
            a.target
          );
          if (!r) {
            console.warn(`Tour target element not found: ${a.target}`);
            return;
          }
          if (await new Promise((u) => {
            F = setTimeout(u, t.teleportDelay);
          }), m.value || (m.value = document.querySelector(
            `#${E.value}`
          )), X.value || (X.value = document.querySelector(
            `#${W.value}`
          )), !m.value) {
            console.warn("Tooltip element not found in DOM");
            return;
          }
          t.enableA11y && typeof document < "u" && (B = document.activeElement), s.value = true, f.value = true, await nextTick();
          {
            const u = t.highlight || a.highlight, c = t.margin || (u ? 14 : 8);
            h2.value = Q(r, m.value, {
              position: a.placement || t.defaultPlacement,
              margin: c
            });
          }
          await $(), f.value = false, t.enableA11y && (await nextTick(), m.value?.focus()), j.name = t.name, j.stepsRef = t.steps, q("onTourStart");
        }, t.startDelay);
      }
    }, b = () => {
      clearTimeout(R), clearTimeout(F), s.value = false, M.value = false, f.value = false, document.querySelectorAll(`.${y.value}`).forEach((a) => a.classList.remove(y.value)), h2.value && (h2.value = void 0), t.enableA11y && B && (B.focus(), B = null);
    }, pe = (a = false) => {
      b(), l.value = 0, i.value = 0, p.value = 1, localStorage.removeItem(k.value), a && I2();
    }, O = async () => {
      if (await _(p.value), f.value = true, i.value = l.value, l.value++, l.value > t.steps.length - 1) {
        S();
        return;
      }
      p.value = l.value + 1, await $(), f.value = false;
    }, P = async () => {
      if (await _(i.value), f.value = true, l.value = i.value, i.value = Math.max(i.value - 1, 0), l.value < 0) {
        S();
        return;
      }
      p.value = l.value + 1, await $(), f.value = false;
    }, S = () => {
      b(), t.saveToLocalStorage !== "never" && localStorage.setItem(k.value, "true"), q("onTourEnd");
    }, me = async (a) => {
      if (a < 0 || a >= t.steps.length) {
        console.warn(`Invalid step index: ${a}`);
        return;
      }
      await _(a), f.value = true, l.value = a, i.value = Math.max(a - 1, 0), p.value = a + 1, await $(), f.value = false;
    }, _ = async (a) => {
      const r = t.steps[a];
      r?.onBefore && await r.onBefore();
    }, ge = (a) => {
      !a || !m.value || (m.value.setAttribute("data-arrow", a), de.value = a);
    }, Z = () => {
      const a = g.value;
      if (!a || !h2.value) return;
      const r = document.querySelector(
        a.target
      );
      if (!r) return;
      ee(), te();
      const u = h2.value.update({
        reference: r,
        position: a.placement || t.defaultPlacement
      });
      ge(u || t.defaultPlacement);
    }, $ = async () => {
      const a = g.value;
      if (!a) return;
      const r = document.querySelector(
        a.target
      );
      !r || !m.value || !h2.value || (!t.noScroll && !a.noScroll && await new Promise((u) => {
        const c = {
          duration: Y.duration,
          offset: Y.offset,
          easing: "easeInOutQuad",
          a11y: t.enableA11y,
          ...t.jumpOptions,
          ...a.jumpOptions
        }, H = Qe[c.easing] || ie;
        singleton(r, {
          duration: c.duration,
          offset: c.offset,
          easing: H,
          a11y: c.a11y,
          callback: () => u()
        });
      }), Z(), t.saveToLocalStorage === "step" && localStorage.setItem(k.value, l.value.toString()), a.onAfter && await a.onAfter(), q("onTourStep", l.value));
    }, ee = () => {
      document.querySelectorAll(`.${y.value}`).forEach((u) => u.classList.remove(y.value));
      const a = g.value;
      if (!a || !t.highlight && !a.highlight) {
        A.value = "";
        return;
      }
      const r = document.querySelector(
        a.target
      );
      r && (r.classList.add(y.value), A.value = he(`.${y.value}`));
    }, te = () => {
      const a = g.value, r = t.backdrop || !!a?.backdrop;
      M.value = r;
    }, z = () => {
      D() || s.value && Z();
    };
    let V, R, F;
    const ae = () => {
      D() || (clearTimeout(V), z(), V = setTimeout(() => {
        z();
      }, t.resizeTimeout));
    };
    function he(a) {
      if (typeof document > "u") return "";
      const r = document.querySelector(a);
      if (!r) return "";
      const u = r.getBoundingClientRect();
      return `polygon(
    0% 0%,
    0% 100%,
    ${u.left}px 100%,
    ${u.left}px ${u.top}px,
    ${u.right}px ${u.top}px,
    ${u.right}px ${u.bottom}px,
    ${u.left}px ${u.bottom}px,
    ${u.left}px 100%,
    100% 100%,
    100% 0%
  )`;
    }
    A.value = "";
    const ne = () => {
      D() || s.value && z();
    }, oe = (a) => {
      if (!(!s.value || !t.enableA11y || !t.keyboardNav))
        switch (a.key) {
          case "Escape":
            S(), a.preventDefault();
            break;
          case "ArrowRight":
          case "Enter":
            if (a.key === "Enter" && a.target?.tagName === "BUTTON")
              return;
            O(), a.preventDefault();
            break;
          case "ArrowLeft":
            l.value > 0 && (P(), a.preventDefault());
            break;
        }
    };
    return onMounted(() => {
      t.keyboardNav && window.addEventListener("keydown", oe), t.autoStart && I2(), window.addEventListener("resize", ae), window.addEventListener("scroll", ne, true);
    }), onUnmounted(() => {
      t.keyboardNav && window.removeEventListener("keydown", oe), window.removeEventListener("resize", ae), window.removeEventListener("scroll", ne, true), clearTimeout(V), clearTimeout(R), clearTimeout(F), s.value && b();
    }), watch(
      () => [t.name, t.steps, t.restartOnPropChange],
      async ([a, r, u], [c, H]) => {
        if (!u || !s.value) return;
        const le = a !== c;
        if (le || r !== H) {
          if (le && c !== void 0) {
            const re = c ? `vjt-highlight-${c}` : "vjt-highlight";
            document.querySelectorAll(`.${re}`).forEach((ye) => ye.classList.remove(re));
          }
          b(), await nextTick(), I2();
        }
      }
    ), n({
      startTour: I2,
      nextStep: O,
      lastStep: P,
      endTour: S,
      stopTour: b,
      goToStep: me,
      resetTour: pe,
      updatePosition: $,
      updateHighlight: ee,
      updateBackdrop: te
    }), (a, r) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        class: normalizeClass(["vjt-modal-overlay", { "vjt-tour-active": s.value }]),
        "data-hidden": !s.value
      }, [
        createBaseVNode("div", {
          id: W.value,
          "data-hidden": !M.value,
          style: normalizeStyle({ "clip-path": A.value })
        }, null, 12, Ve),
        createBaseVNode("div", {
          id: E.value,
          ref_key: "_Tooltip",
          ref: m,
          role: "dialog",
          "aria-modal": e.enableA11y ? "true" : void 0,
          "aria-label": g.value?.ariaLabel || e.ariaLabel,
          "aria-describedby": `${E.value}-content`,
          tabindex: e.enableA11y ? "0" : void 0,
          "data-hidden": !s.value || f.value
        }, [
          s.value ? (openBlock(), createElementBlock("div", {
            key: `step-${l.value}`
          }, [
            e.enableA11y ? (openBlock(), createElementBlock("div", Fe, " Step " + toDisplayString(l.value + 1) + " of " + toDisplayString(t.steps.length), 1)) : createCommentVNode("", true),
            e.hideArrow ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
              key: 1,
              id: fe.value
            }, null, 8, He)),
            renderSlot(a.$slots, "content", {
              currentStepIndex: l.value,
              currentStepData: g.value
            }, () => [
              createBaseVNode("div", {
                id: `${E.value}-content`,
                innerHTML: G.getCurrentStep?.content
              }, null, 8, Ue)
            ]),
            renderSlot(a.$slots, "actions", {
              lastStep: P,
              nextStep: O,
              endTour: S,
              getNextLabel: J2.value,
              props: t,
              _CurrentStep: G
            }, () => [
              createBaseVNode("div", Ge, [
                i.value < l.value ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  onClick: withModifiers(P, ["prevent"]),
                  "aria-label": e.enableA11y ? `Go to previous step, step ${l.value} of ${t.steps.length}` : void 0
                }, toDisplayString(t.buttonLabels?.back || "Back"), 9, Ke)) : createCommentVNode("", true),
                t.hideSkip ? createCommentVNode("", true) : (openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  onClick: withModifiers(S, ["prevent"]),
                  "aria-label": e.enableA11y ? "Skip tour and close" : void 0
                }, toDisplayString(t.buttonLabels?.skip || "Skip"), 9, Je)),
                createBaseVNode("button", {
                  type: "button",
                  onClick: withModifiers(O, ["prevent"]),
                  "aria-label": e.enableA11y ? K.value ? "Finish tour" : `Go to next step, step ${p.value + 1} of ${t.steps.length}` : void 0
                }, toDisplayString(J2.value), 9, We)
              ])
            ])
          ])) : createCommentVNode("", true)
        ], 8, Re)
      ], 10, ze)
    ]));
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "MainLayout"
  },
  __name: "MainLayout",
  setup(__props, { expose: __expose }) {
    __expose();
    const $q = useQuasar();
    const store = useProjectStore();
    const istore = useInterfaceStore();
    const {
      currentInterview,
      currentProjectId,
      isModified,
      username,
      isExpertMode
    } = storeToRefs(istore);
    const vueTour = ref();
    const currentProject = computed(() => {
      if (currentProjectId.value) {
        return store.getProject(currentProjectId.value);
      } else {
        return null;
      }
    });
    const isDevelopment = computed(() => document.location.hostname == "localhost" || document.location.pathname.includes("/upmt/dev"));
    const menuList = computed(() => {
      let menu = [];
      if (currentProjectId.value) {
        menu.push({
          label: "Project editor",
          icon: "mdi-semantic-web",
          link: `/project/${currentProjectId.value}`
        });
        menu.push({
          label: "Global diachronic",
          icon: "mdi-table",
          link: `/spreadsheet/${currentProjectId.value}`
        });
        menu.push({
          label: "Episode analysis",
          icon: "mdi-table",
          link: `/episodes/${currentProjectId.value}`
        });
        menu.push({
          label: "Synchronic graph",
          icon: "mdi-graph",
          link: `/synchronic-graph/${currentProjectId.value}`
        });
        menu.push({
          label: "Synchronic Models",
          icon: "mdi-graph",
          link: `/models/${currentProjectId.value}`
        });
        menu.push({
          label: "Specific Synchronic Categories",
          icon: "mdi-table",
          link: `/specificsynchroniccategories/${currentProjectId.value}`
        });
        menu.push({
          label: "Descriptems",
          icon: "mdi-format-quote-close-outline",
          link: `/descriptems/${currentProjectId.value}`
        });
      }
      if (isExpertMode.value) {
        menu = menu.concat([
          {
            label: "Debug",
            icon: "mdi-eye",
            link: "/debug"
          }
        ]);
      }
      return menu;
    });
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    const isAnonymous = computed(() => username.value == "" || username.value == "anonymous");
    function doStoreProject() {
      if (currentProjectId.value) {
        const basename = storeProject(currentProjectId.value);
        istore.setModified(false);
        $q.notify({
          type: "info",
          message: `Stored as ${basename}`
        });
      }
    }
    function onGlobalKeydown(e) {
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        if (isModified.value) {
          doStoreProject();
        }
      }
    }
    function about() {
      let message = "Development version";
      void axios.get("./version.txt").then((response) => {
        if (response.data.startsWith("VERSION")) {
          const [_, version, date] = response.data.replace(/[^a-z0-9_: .+-]/gim, "").split();
          message = `Version <strong>${version}</strong>
Date <strong>${date}</strong>`;
        }
      }).finally(() => {
        $q.dialog({
          title: "About μPMT...",
          message: `<p><strong>μPMT</strong> - micro Phenomenology Modelling Tool</p>
<p>${message}</p>`,
          html: true
        }).onDismiss(() => {
        });
      });
    }
    onMounted(() => {
      leftDrawerOpen.value = false;
      rightDrawerOpen.value = false;
      window.addEventListener("keydown", onGlobalKeydown);
    });
    const tourSteps = [
      {
        target: 'button[aria-label="Menu"]',
        content: "The hamburger menu gives access to multiple views"
      },
      {
        target: ".app-title",
        content: "The toolbar shows the loaded package title, and the current interview title if an interview is active"
      },
      {
        target: 'button[aria-label="Login"]',
        content: "This icon allows you to set your name so that authorship information is correctly recorded."
      },
      {
        target: ".upmt-interviews",
        content: "This place lists the defined interviews"
      },
      {
        target: ".detachedmodels-container",
        content: "Detached models allow to define synchronic model element that are not linked to a given interview."
      },
      {
        target: ".genericcategories-container",
        content: "The generic model is dynamically generated by adding all defined synchronic models (linked to interviews or detached models)."
      }
    ];
    const __returned__ = { $q, store, istore, currentInterview, currentProjectId, isModified, username, isExpertMode, vueTour, currentProject, isDevelopment, menuList, leftDrawerOpen, rightDrawerOpen, toggleLeftDrawer, isAnonymous, doStoreProject, onGlobalKeydown, about, tourSteps, NoteIcon, get VTour() {
      return tt;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "context"
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "print-hidden" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock(QLayout, {
    view: "hHr lpr fFr",
    class: normalizeClass({ "isExpertMode": $setup.isExpertMode })
  }, {
    default: withCtx(() => [
      createVNode(QHeader, { elevated: "" }, {
        default: withCtx(() => [
          createVNode(QToolbar, null, {
            default: withCtx(() => [
              createVNode(_component_router_link, { to: "/" }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    flat: "",
                    class: "text-white print-hidden",
                    dense: "",
                    round: "",
                    icon: "mdi-home-outline",
                    "aria-label": "Home"
                  })
                ]),
                _: 1
              }),
              createVNode(QBtn, {
                class: "print-hidden",
                flat: "",
                dense: "",
                round: "",
                icon: "menu",
                "aria-label": "Menu",
                onClick: $setup.toggleLeftDrawer
              }),
              createVNode(QToolbarTitle, { class: "app-title" }, {
                default: withCtx(() => [
                  _cache[12] || (_cache[12] = createTextVNode(" μPMT | ", -1)),
                  $setup.currentProject ? (openBlock(), createElementBlock("span", _hoisted_1, [
                    createTextVNode(toDisplayString($setup.currentProject.name) + " ", 1),
                    createVNode($setup["NoteIcon"], { element: $setup.currentProject }, null, 8, ["element"]),
                    $setup.currentInterview ? (openBlock(), createElementBlock("span", _hoisted_2, [
                      createTextVNode(" - Interview " + toDisplayString($setup.currentInterview.label) + " ", 1),
                      createVNode($setup["NoteIcon"], { element: $setup.currentInterview }, null, 8, ["element"])
                    ])) : createCommentVNode("", true),
                    $setup.isModified ? (openBlock(), createBlock(QBtn, {
                      key: 1,
                      class: "q-ml-xl print-hidden",
                      outline: "",
                      onClick: _cache[0] || (_cache[0] = ($event) => $setup.doStoreProject()),
                      color: "warning",
                      "no-caps": ""
                    }, {
                      default: withCtx(() => [..._cache[11] || (_cache[11] = [
                        createTextVNode(" Modified - Click here to save ", -1)
                      ])]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_3, [
                $setup.isDevelopment ? (openBlock(), createBlock(QBtn, {
                  key: 0,
                  class: "q-ml-xl",
                  outline: "",
                  color: "info",
                  "no-caps": ""
                }, {
                  default: withCtx(() => [..._cache[13] || (_cache[13] = [
                    createTextVNode(" Development version ", -1)
                  ])]),
                  _: 1
                })) : createCommentVNode("", true),
                $setup.currentProject ? (openBlock(), createBlock(QBtn, {
                  key: 1,
                  dense: "",
                  flat: "",
                  round: "",
                  class: normalizeClass({ "needs-save": $setup.isModified }),
                  onClick: _cache[1] || (_cache[1] = ($event) => $setup.doStoreProject()),
                  icon: "mdi-content-save"
                }, {
                  default: withCtx(() => [
                    $setup.isModified ? (openBlock(), createBlock(QTooltip, { key: 0 }, {
                      default: withCtx(() => [..._cache[14] || (_cache[14] = [
                        createTextVNode(" Data has been modified. Click to save it in the browser storage. ", -1)
                      ])]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true),
                createVNode(QBtn, {
                  dense: "",
                  flat: "",
                  round: "",
                  onClickCapture: _cache[6] || (_cache[6] = withModifiers(($event) => $setup.isExpertMode = !$setup.isExpertMode, ["ctrl", "stop"])),
                  "aria-label": "Login",
                  class: normalizeClass({ "anonymous": $setup.isAnonymous }),
                  icon: $setup.isExpertMode ? "mdi-account-cowboy-hat" : "mdi-account"
                }, {
                  default: withCtx(() => [
                    createVNode(QMenu, { fit: "" }, {
                      default: withCtx(() => [
                        createVNode(QList, { style: { "min-width": "240px" } }, {
                          default: withCtx(() => [
                            createVNode(QItem, null, {
                              default: withCtx(() => [
                                createVNode(QItemSection, {
                                  "no-wrap": "",
                                  class: "row"
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("span", null, [
                                      _cache[15] || (_cache[15] = createTextVNode("Identified as ", -1)),
                                      createBaseVNode("em", null, toDisplayString($setup.username), 1)
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(QSeparator),
                            createVNode(QItem, { clickable: "" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [..._cache[16] || (_cache[16] = [
                                    createTextVNode("Modify username", -1)
                                  ])]),
                                  _: 1
                                }),
                                createVNode(QPopupEdit, {
                                  modelValue: $setup.username,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.username = $event),
                                  "auto-save": ""
                                }, {
                                  default: withCtx((scope) => [
                                    createVNode(QInput, {
                                      modelValue: scope.value,
                                      "onUpdate:modelValue": ($event) => scope.value = $event,
                                      onFocus: _cache[2] || (_cache[2] = ($event) => $event.target.select()),
                                      dense: "",
                                      autofocus: "",
                                      onKeyup: withKeys(scope.set, ["enter"])
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            withDirectives((openBlock(), createBlock(QItem, {
                              clickable: "",
                              onClick: _cache[4] || (_cache[4] = ($event) => {
                                $setup.leftDrawerOpen = false;
                                $setup.vueTour.startTour();
                              })
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [..._cache[17] || (_cache[17] = [
                                    createTextVNode("Take a tour of the interface", -1)
                                  ])]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })), [
                              [ClosePopup]
                            ]),
                            withDirectives((openBlock(), createBlock(QItem, {
                              clickable: "",
                              href: "https://github.com/upmt/upmt/wiki/%CE%BCPMT-documentation",
                              target: "web"
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [..._cache[18] || (_cache[18] = [
                                    createTextVNode("Documentation", -1)
                                  ])]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })), [
                              [ClosePopup]
                            ]),
                            withDirectives((openBlock(), createBlock(QItem, {
                              clickable: "",
                              onClick: _cache[5] || (_cache[5] = ($event) => $setup.about())
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [..._cache[19] || (_cache[19] = [
                                    createTextVNode("About μPMT", -1)
                                  ])]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })), [
                              [ClosePopup]
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["class", "icon"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(QDrawer, {
        modelValue: $setup.leftDrawerOpen,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.leftDrawerOpen = $event),
        overlay: "",
        bordered: ""
      }, {
        default: withCtx(() => [
          createVNode(QScrollArea, { class: "fit" }, {
            default: withCtx(() => [
              createVNode(QList, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.menuList, (item, index) => {
                    return openBlock(), createElementBlock(Fragment, { key: index }, [
                      withDirectives((openBlock(), createBlock(QItem, {
                        clickable: "",
                        onClick: _cache[7] || (_cache[7] = ($event) => $setup.leftDrawerOpen = false),
                        to: item.link,
                        href: item.href,
                        target: item.href ? "web" : void 0
                      }, {
                        default: withCtx(() => [
                          item.icon ? (openBlock(), createBlock(QItemSection, {
                            key: 0,
                            avatar: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(QIcon, {
                                name: item.icon
                              }, null, 8, ["name"])
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.label), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["to", "href", "target"])), [
                        [Ripple]
                      ]),
                      item.separator ? (openBlock(), createBlock(QSeparator, {
                        key: "sep" + index
                      })) : createCommentVNode("", true)
                    ], 64);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]),
      createVNode(QDrawer, {
        modelValue: $setup.rightDrawerOpen,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.rightDrawerOpen = $event),
        bordered: "",
        side: "right"
      }, {
        default: withCtx(() => [
          createVNode(QScrollArea, { class: "fit" }, {
            default: withCtx(() => [
              createVNode(QForm, null, {
                default: withCtx(() => [
                  createVNode(QInput, {
                    modelValue: $setup.username,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.username = $event),
                    autofocus: ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]),
      createVNode(QPageContainer, null, {
        default: withCtx(() => [
          createVNode(_component_router_view)
        ]),
        _: 1
      }),
      createVNode($setup["VTour"], {
        steps: $setup.tourSteps,
        highlight: "",
        ref: "vueTour"
      }, null, 512)
    ]),
    _: 1
  }, 8, ["class"]);
}
const MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b7d8b4ef"], ["__file", "MainLayout.vue"]]);
export {
  MainLayout as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC16UkZGalZWRS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9oZWFkZXIvUUhlYWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2Nyb2xsLWFyZWEvU2Nyb2xsQXJlYUNvbnRyb2xzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zY3JvbGwtYXJlYS9RU2Nyb2xsQXJlYS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcGFnZS9RUGFnZUNvbnRhaW5lci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvbGF5b3V0L1FMYXlvdXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmFub3BvcC9kaXN0L25hbm9wb3AubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2p1bXAuanMvZGlzdC9qdW1wLm1vZHVsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZ2xvYmFsaGl2ZS92dWVqcy10b3VyL2Rpc3QvdnVlanMtdG91ci5qcyIsIi4uLy4uLy4uL3NyYy9sYXlvdXRzL01haW5MYXlvdXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhVbmlxdWVTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zeW1ib2xzL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRSGVhZGVyJyxcblxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICByZXZlYWw6IEJvb2xlYW4sXG4gICAgcmV2ZWFsT2Zmc2V0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAyNTBcbiAgICB9LFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIGVsZXZhdGVkOiBCb29sZWFuLFxuXG4gICAgaGVpZ2h0SGludDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogNTBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3JldmVhbCcsICdmb2N1c2luJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4pXG4gICAgaWYgKCRsYXlvdXQgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FIZWFkZXIgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgICByZXR1cm4gZW1wdHlSZW5kZXJGblxuICAgIH1cblxuICAgIGNvbnN0IHNpemUgPSByZWYocGFyc2VJbnQocHJvcHMuaGVpZ2h0SGludCwgMTApKVxuICAgIGNvbnN0IHJldmVhbGVkID0gcmVmKHRydWUpXG5cbiAgICBjb25zdCBmaXhlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5yZXZlYWwgPT09IHRydWVcbiAgICAgIHx8ICRsYXlvdXQudmlldy52YWx1ZS5pbmRleE9mKCdIJykgIT09IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmV2ZWFsZWQudmFsdWUgPT09IHRydWUgPyBzaXplLnZhbHVlIDogMFxuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2l6ZS52YWx1ZSAtICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1oZWFkZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy10b3AnXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1oZWFkZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWhlYWRlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZSA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICB2aWV3ID0gJGxheW91dC5yb3dzLnZhbHVlLnRvcCxcbiAgICAgICAgY3NzID0ge31cblxuICAgICAgaWYgKHZpZXdbIDAgXSA9PT0gJ2wnICYmICRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdID0gYCR7ICRsYXlvdXQubGVmdC5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3WyAyIF0gPT09ICdyJyAmJiAkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF0gPSBgJHsgJGxheW91dC5yaWdodC5zaXplIH1weGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUoJ2hlYWRlcicsIHByb3AsIHZhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbCAocHJvcCwgdmFsKSB7XG4gICAgICBpZiAocHJvcC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIHByb3AudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgdXBkYXRlTG9jYWwoc2l6ZSwgaGVpZ2h0KVxuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgaGVpZ2h0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNpbiAoZXZ0KSB7XG4gICAgICBpZiAocmV2ZWFsT25Gb2N1cy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgZW1pdCgnZm9jdXNpbicsIGV2dClcbiAgICB9XG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICB9KVxuXG4gICAgd2F0Y2gob2Zmc2V0LCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnJldmVhbCwgdmFsID0+IHtcbiAgICAgIHZhbCA9PT0gZmFsc2UgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHByb3BzLm1vZGVsVmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKHJldmVhbGVkLCB2YWwgPT4ge1xuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICAgIGVtaXQoJ3JldmVhbCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goJGxheW91dC5zY3JvbGwsIHNjcm9sbCA9PiB7XG4gICAgICBwcm9wcy5yZXZlYWwgPT09IHRydWUgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsXG4gICAgICAgIHNjcm9sbC5kaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgfHwgc2Nyb2xsLnBvc2l0aW9uIDw9IHByb3BzLnJldmVhbE9mZnNldFxuICAgICAgICB8fCBzY3JvbGwucG9zaXRpb24gLSBzY3JvbGwuaW5mbGVjdGlvblBvaW50IDwgMTAwXG4gICAgICApXG4gICAgfSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge31cblxuICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IGluc3RhbmNlXG4gICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVMYXlvdXQoJ3NpemUnLCBzaXplLnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlcy5oZWFkZXIgPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG5cbiAgICAgIHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0X19zaGFkb3cgYWJzb2x1dGUtZnVsbCBvdmVyZmxvdy1oaWRkZW4gbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgb25SZXNpemVcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2hlYWRlcicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgb25Gb2N1c2luXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCB3aXRoRGlyZWN0aXZlcyB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuXG4vKipcbiAqIFdlIGFyZSB1c2luZyBhIHN1Yi1jb21wb25lbnQgdG8gYXZvaWQgdW5uZWNlc3NhcnkgcmUtcmVuZGVyc1xuICogb2YgdGhlIFFTY3JvbGxBcmVhIGNvbnRlbnQgd2hlbiB0aGUgc2Nyb2xsYmFycyBhcmUgaW50ZXJhY3RlZCB3aXRoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBwcm9wczogW1xuICAgICdzdG9yZScsXG4gICAgJ2JhclN0eWxlJyxcbiAgICAndmVydGljYWxCYXJTdHlsZScsXG4gICAgJ2hvcml6b250YWxCYXJTdHlsZSdcbiAgXSxcblxuICBzZXR1cCAocHJvcHMpIHtcbiAgICByZXR1cm4gKCkgPT4gKFtcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IHByb3BzLnN0b3JlLnNjcm9sbC52ZXJ0aWNhbC5iYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IFsgcHJvcHMuYmFyU3R5bGUsIHByb3BzLnZlcnRpY2FsQmFyU3R5bGUgXSxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICBvbk1vdXNlZG93bjogcHJvcHMuc3RvcmUub25WZXJ0aWNhbE1vdXNlZG93blxuICAgICAgfSksXG5cbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IHByb3BzLnN0b3JlLnNjcm9sbC5ob3Jpem9udGFsLmJhckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogWyBwcm9wcy5iYXJTdHlsZSwgcHJvcHMuaG9yaXpvbnRhbEJhclN0eWxlIF0sXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgb25Nb3VzZWRvd246IHByb3BzLnN0b3JlLm9uSG9yaXpvbnRhbE1vdXNlZG93blxuICAgICAgfSksXG5cbiAgICAgIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgcmVmOiBwcm9wcy5zdG9yZS5zY3JvbGwudmVydGljYWwucmVmLFxuICAgICAgICAgIGNsYXNzOiBwcm9wcy5zdG9yZS5zY3JvbGwudmVydGljYWwudGh1bWJDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuc3RvcmUuc2Nyb2xsLnZlcnRpY2FsLnN0eWxlLnZhbHVlLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9KSxcbiAgICAgICAgcHJvcHMuc3RvcmUudGh1bWJWZXJ0RGlyXG4gICAgICApLFxuXG4gICAgICB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogcHJvcHMuc3RvcmUuc2Nyb2xsLmhvcml6b250YWwucmVmLFxuICAgICAgICAgIGNsYXNzOiBwcm9wcy5zdG9yZS5zY3JvbGwuaG9yaXpvbnRhbC50aHVtYkNsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5zdG9yZS5zY3JvbGwuaG9yaXpvbnRhbC5zdHlsZS52YWx1ZSxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSksXG4gICAgICAgIHByb3BzLnN0b3JlLnRodW1iSG9yaXpEaXJcbiAgICAgIClcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgd2F0Y2gsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldFNjcm9sbFRhcmdldCwgZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiwgZ2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uLCBzY3JvbGxUYXJnZXRQcm9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsL3Njcm9sbC5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMsIG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcblxuY29uc3QgeyBwYXNzaXZlIH0gPSBsaXN0ZW5PcHRzXG5jb25zdCBheGlzVmFsdWVzID0gWyAnYm90aCcsICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU2Nyb2xsT2JzZXJ2ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgYXhpczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IGF4aXNWYWx1ZXMuaW5jbHVkZXModiksXG4gICAgICBkZWZhdWx0OiAndmVydGljYWwnXG4gICAgfSxcblxuICAgIGRlYm91bmNlOiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgICBzY3JvbGxUYXJnZXQ6IHNjcm9sbFRhcmdldFByb3BcbiAgfSxcblxuICBlbWl0czogWyAnc2Nyb2xsJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBjb25zdCBzY3JvbGwgPSB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH0sXG5cbiAgICAgIGRpcmVjdGlvbjogJ2Rvd24nLFxuICAgICAgZGlyZWN0aW9uQ2hhbmdlZDogZmFsc2UsXG5cbiAgICAgIGRlbHRhOiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfSxcblxuICAgICAgaW5mbGVjdGlvblBvaW50OiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjbGVhclRpbWVyID0gbnVsbCwgbG9jYWxTY3JvbGxUYXJnZXQsIHBhcmVudEVsXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zY3JvbGxUYXJnZXQsICgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGVtaXRFdmVudCAoKSB7XG4gICAgICBjbGVhclRpbWVyPy4oKVxuXG4gICAgICBjb25zdCB0b3AgPSBNYXRoLm1heCgwLCBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KSlcbiAgICAgIGNvbnN0IGxlZnQgPSBnZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQpXG5cbiAgICAgIGNvbnN0IGRlbHRhID0ge1xuICAgICAgICB0b3A6IHRvcCAtIHNjcm9sbC5wb3NpdGlvbi50b3AsXG4gICAgICAgIGxlZnQ6IGxlZnQgLSBzY3JvbGwucG9zaXRpb24ubGVmdFxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIChwcm9wcy5heGlzID09PSAndmVydGljYWwnICYmIGRlbHRhLnRvcCA9PT0gMClcbiAgICAgICAgfHwgKHByb3BzLmF4aXMgPT09ICdob3Jpem9udGFsJyAmJiBkZWx0YS5sZWZ0ID09PSAwKVxuICAgICAgKSByZXR1cm5cblxuICAgICAgY29uc3QgY3VyRGlyID0gTWF0aC5hYnMoZGVsdGEudG9wKSA+PSBNYXRoLmFicyhkZWx0YS5sZWZ0KVxuICAgICAgICA/IChkZWx0YS50b3AgPCAwID8gJ3VwJyA6ICdkb3duJylcbiAgICAgICAgOiAoZGVsdGEubGVmdCA8IDAgPyAnbGVmdCcgOiAncmlnaHQnKVxuXG4gICAgICBzY3JvbGwucG9zaXRpb24gPSB7IHRvcCwgbGVmdCB9XG4gICAgICBzY3JvbGwuZGlyZWN0aW9uQ2hhbmdlZCA9IHNjcm9sbC5kaXJlY3Rpb24gIT09IGN1ckRpclxuICAgICAgc2Nyb2xsLmRlbHRhID0gZGVsdGFcblxuICAgICAgaWYgKHNjcm9sbC5kaXJlY3Rpb25DaGFuZ2VkID09PSB0cnVlKSB7XG4gICAgICAgIHNjcm9sbC5kaXJlY3Rpb24gPSBjdXJEaXJcbiAgICAgICAgc2Nyb2xsLmluZmxlY3Rpb25Qb2ludCA9IHNjcm9sbC5wb3NpdGlvblxuICAgICAgfVxuXG4gICAgICBlbWl0KCdzY3JvbGwnLCB7IC4uLnNjcm9sbCB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IGdldFNjcm9sbFRhcmdldChwYXJlbnRFbCwgcHJvcHMuc2Nyb2xsVGFyZ2V0KVxuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdHJpZ2dlciwgcGFzc2l2ZSlcbiAgICAgIHRyaWdnZXIodHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0cmlnZ2VyLCBwYXNzaXZlKVxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IHZvaWQgMFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXIgKGltbWVkaWF0ZWx5KSB7XG4gICAgICBpZiAoaW1tZWRpYXRlbHkgPT09IHRydWUgfHwgcHJvcHMuZGVib3VuY2UgPT09IDAgfHwgcHJvcHMuZGVib3VuY2UgPT09ICcwJykge1xuICAgICAgICBlbWl0RXZlbnQoKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY2xlYXJUaW1lciA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBbIHRpbWVyLCBmbiBdID0gcHJvcHMuZGVib3VuY2VcbiAgICAgICAgICA/IFsgc2V0VGltZW91dChlbWl0RXZlbnQsIHByb3BzLmRlYm91bmNlKSwgY2xlYXJUaW1lb3V0IF1cbiAgICAgICAgICA6IFsgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGVtaXRFdmVudCksIGNhbmNlbEFuaW1hdGlvbkZyYW1lIF1cblxuICAgICAgICBjbGVhclRpbWVyID0gKCkgPT4ge1xuICAgICAgICAgIGZuKHRpbWVyKVxuICAgICAgICAgIGNsZWFyVGltZXIgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgd2F0Y2goKCkgPT4gcHJveHkuJHEubGFuZy5ydGwsIGVtaXRFdmVudClcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBwYXJlbnRFbCA9IHByb3h5LiRlbC5wYXJlbnROb2RlXG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lcj8uKClcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgdHJpZ2dlcixcbiAgICAgIGdldFBvc2l0aW9uOiAoKSA9PiBzY3JvbGxcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5vb3BcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkFjdGl2YXRlZCwgb25EZWFjdGl2YXRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWRhcmsvdXNlLWRhcmsuanMnXG5cbmltcG9ydCBTY3JvbGxBcmVhQ29udHJvbHMgZnJvbSAnLi9TY3JvbGxBcmVhQ29udHJvbHMuanMnXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5pbXBvcnQgUVNjcm9sbE9ic2VydmVyIGZyb20gJy4uL3Njcm9sbC1vYnNlcnZlci9RU2Nyb2xsT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoLXBhbi9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC9mb3JtYXQuanMnXG5pbXBvcnQgeyBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLCBzZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZS9kZWJvdW5jZS5qcydcblxuY29uc3QgYXhpc0xpc3QgPSBbICd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJyBdXG5jb25zdCBkaXJQcm9wcyA9IHtcbiAgdmVydGljYWw6IHsgb2Zmc2V0OiAnb2Zmc2V0WScsIHNjcm9sbDogJ3Njcm9sbFRvcCcsIGRpcjogJ2Rvd24nLCBkaXN0OiAneScgfSxcbiAgaG9yaXpvbnRhbDogeyBvZmZzZXQ6ICdvZmZzZXRYJywgc2Nyb2xsOiAnc2Nyb2xsTGVmdCcsIGRpcjogJ3JpZ2h0JywgZGlzdDogJ3gnIH1cbn1cbmNvbnN0IHBhbk9wdHMgPSB7XG4gIHByZXZlbnQ6IHRydWUsXG4gIG1vdXNlOiB0cnVlLFxuICBtb3VzZUFsbERpcjogdHJ1ZVxufVxuXG5jb25zdCBnZXRNaW5UaHVtYlNpemUgPSBzaXplID0+IChzaXplID49IDI1MCA/IDUwIDogTWF0aC5jZWlsKHNpemUgLyA1KSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTY3JvbGxBcmVhJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIHRodW1iU3R5bGU6IE9iamVjdCxcbiAgICB2ZXJ0aWNhbFRodW1iU3R5bGU6IE9iamVjdCxcbiAgICBob3Jpem9udGFsVGh1bWJTdHlsZTogT2JqZWN0LFxuXG4gICAgYmFyU3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgdmVydGljYWxCYXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBob3Jpem9udGFsQmFyU3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG5cbiAgICB2ZXJ0aWNhbE9mZnNldDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBbIDAsIDAgXVxuICAgIH0sXG4gICAgaG9yaXpvbnRhbE9mZnNldDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBbIDAsIDAgXVxuICAgIH0sXG5cbiAgICBjb250ZW50U3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgY29udGVudEFjdGl2ZVN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuXG4gICAgZGVsYXk6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDEwMDBcbiAgICB9LFxuXG4gICAgdmlzaWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuXG4gICAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICAgIG9uU2Nyb2xsOiBGdW5jdGlvblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgLy8gc3RhdGUgbWFuYWdlbWVudFxuICAgIGNvbnN0IHRlbXBTaG93aW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IHBhbm5pbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgaG92ZXIgPSByZWYoZmFsc2UpXG5cbiAgICAvLyBvdGhlci4uLlxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHtcbiAgICAgIHZlcnRpY2FsOiByZWYoMCksXG4gICAgICBob3Jpem9udGFsOiByZWYoMClcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGwgPSB7XG4gICAgICB2ZXJ0aWNhbDoge1xuICAgICAgICByZWY6IHJlZihudWxsKSxcbiAgICAgICAgcG9zaXRpb246IHJlZigwKSxcbiAgICAgICAgc2l6ZTogcmVmKDApXG4gICAgICB9LFxuXG4gICAgICBob3Jpem9udGFsOiB7XG4gICAgICAgIHJlZjogcmVmKG51bGwpLFxuICAgICAgICBwb3NpdGlvbjogcmVmKDApLFxuICAgICAgICBzaXplOiByZWYoMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgcHJveHkuJHEpXG5cbiAgICBsZXQgdGltZXIgPSBudWxsLCBwYW5SZWZQb3NcblxuICAgIGNvbnN0IHRhcmdldFJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1zY3JvbGxhcmVhJ1xuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWEtLWRhcmsnIDogJycpXG4gICAgKVxuXG4gICAgT2JqZWN0LmFzc2lnbihjb250YWluZXIsIHtcbiAgICAgIHZlcnRpY2FsSW5uZXI6IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlIC0gcHJvcHMudmVydGljYWxPZmZzZXRbIDAgXSAtIHByb3BzLnZlcnRpY2FsT2Zmc2V0WyAxIF1cbiAgICAgICkpLFxuXG4gICAgICBob3Jpem9udGFsSW5uZXI6IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICAgY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgLSBwcm9wcy5ob3Jpem9udGFsT2Zmc2V0WyAwIF0gLSBwcm9wcy5ob3Jpem9udGFsT2Zmc2V0WyAxIF1cbiAgICAgICkpXG4gICAgfSlcblxuICAgIHNjcm9sbC52ZXJ0aWNhbC5wZXJjZW50YWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlIC0gY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlXG4gICAgICBpZiAoZGlmZiA8PSAwKSB7IHJldHVybiAwIH1cbiAgICAgIGNvbnN0IHAgPSBiZXR3ZWVuKHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSAvIGRpZmYsIDAsIDEpXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwICogMTAwMDApIC8gMTAwMDBcbiAgICB9KVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIChcbiAgICAgICAgKHByb3BzLnZpc2libGUgPT09IG51bGwgPyBob3Zlci52YWx1ZSA6IHByb3BzLnZpc2libGUpICE9PSB0cnVlXG4gICAgICAgICYmIHRlbXBTaG93aW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgICAmJiBwYW5uaW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgKSB8fCBzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSA8PSBjb250YWluZXIudmVydGljYWwudmFsdWUgKyAxXG4gICAgKSlcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJTdGFydCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnZlcnRpY2FsT2Zmc2V0WyAwIF1cbiAgICAgICsgc2Nyb2xsLnZlcnRpY2FsLnBlcmNlbnRhZ2UudmFsdWUgKiAoY29udGFpbmVyLnZlcnRpY2FsSW5uZXIudmFsdWUgLSBzY3JvbGwudmVydGljYWwudGh1bWJTaXplLnZhbHVlKVxuICAgICkpXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnRodW1iU2l6ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBNYXRoLnJvdW5kKFxuICAgICAgICBiZXR3ZWVuKFxuICAgICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbElubmVyLnZhbHVlICogY29udGFpbmVyLnZlcnRpY2FsSW5uZXIudmFsdWUgLyBzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSxcbiAgICAgICAgICBnZXRNaW5UaHVtYlNpemUoY29udGFpbmVyLnZlcnRpY2FsSW5uZXIudmFsdWUpLFxuICAgICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbElubmVyLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIC4uLnByb3BzLnRodW1iU3R5bGUsXG4gICAgICAuLi5wcm9wcy52ZXJ0aWNhbFRodW1iU3R5bGUsXG4gICAgICB0b3A6IGAkeyBzY3JvbGwudmVydGljYWwudGh1bWJTdGFydC52YWx1ZSB9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHsgc2Nyb2xsLnZlcnRpY2FsLnRodW1iU2l6ZS52YWx1ZSB9cHhgLFxuICAgICAgcmlnaHQ6IGAkeyBwcm9wcy5ob3Jpem9udGFsT2Zmc2V0WyAxIF0gfXB4YFxuICAgIH0pKVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkNsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJ3Etc2Nyb2xsYXJlYV9fdGh1bWIgcS1zY3JvbGxhcmVhX190aHVtYi0tdiBhYnNvbHV0ZS1yaWdodCdcbiAgICAgICsgKHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX190aHVtYi0taW52aXNpYmxlJyA6ICcnKVxuICAgICkpXG4gICAgc2Nyb2xsLnZlcnRpY2FsLmJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJ3Etc2Nyb2xsYXJlYV9fYmFyIHEtc2Nyb2xsYXJlYV9fYmFyLS12IGFic29sdXRlLXJpZ2h0J1xuICAgICAgKyAoc2Nyb2xsLnZlcnRpY2FsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWFfX2Jhci0taW52aXNpYmxlJyA6ICcnKVxuICAgICkpXG5cbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgLSBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZVxuICAgICAgaWYgKGRpZmYgPD0gMCkgeyByZXR1cm4gMCB9XG4gICAgICBjb25zdCBwID0gYmV0d2VlbihNYXRoLmFicyhzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZSkgLyBkaWZmLCAwLCAxKVxuICAgICAgcmV0dXJuIE1hdGgucm91bmQocCAqIDEwMDAwKSAvIDEwMDAwXG4gICAgfSlcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIChcbiAgICAgICAgKHByb3BzLnZpc2libGUgPT09IG51bGwgPyBob3Zlci52YWx1ZSA6IHByb3BzLnZpc2libGUpICE9PSB0cnVlXG4gICAgICAgICYmIHRlbXBTaG93aW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgICAmJiBwYW5uaW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgKSB8fCBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlIDw9IGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlICsgMVxuICAgICkpXG4gICAgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTdGFydCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmhvcml6b250YWxPZmZzZXRbIDAgXVxuICAgICAgKyBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlLnZhbHVlICogKGNvbnRhaW5lci5ob3Jpem9udGFsSW5uZXIudmFsdWUgLSBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlNpemUudmFsdWUpXG4gICAgKSlcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlNpemUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgTWF0aC5yb3VuZChcbiAgICAgICAgYmV0d2VlbihcbiAgICAgICAgICBjb250YWluZXIuaG9yaXpvbnRhbElubmVyLnZhbHVlICogY29udGFpbmVyLmhvcml6b250YWxJbm5lci52YWx1ZSAvIHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUsXG4gICAgICAgICAgZ2V0TWluVGh1bWJTaXplKGNvbnRhaW5lci5ob3Jpem9udGFsSW5uZXIudmFsdWUpLFxuICAgICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsSW5uZXIudmFsdWVcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5zdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAuLi5wcm9wcy50aHVtYlN0eWxlLFxuICAgICAgLi4ucHJvcHMuaG9yaXpvbnRhbFRodW1iU3R5bGUsXG4gICAgICBbIHByb3h5LiRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdOiBgJHsgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTdGFydC52YWx1ZSB9cHhgLFxuICAgICAgd2lkdGg6IGAkeyBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlNpemUudmFsdWUgfXB4YCxcbiAgICAgIGJvdHRvbTogYCR7IHByb3BzLnZlcnRpY2FsT2Zmc2V0WyAxIF0gfXB4YFxuICAgIH0pKVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAncS1zY3JvbGxhcmVhX190aHVtYiBxLXNjcm9sbGFyZWFfX3RodW1iLS1oIGFic29sdXRlLWJvdHRvbSdcbiAgICAgICsgKHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWFfX3RodW1iLS1pbnZpc2libGUnIDogJycpXG4gICAgKSlcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5iYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICdxLXNjcm9sbGFyZWFfX2JhciBxLXNjcm9sbGFyZWFfX2Jhci0taCBhYnNvbHV0ZS1ib3R0b20nXG4gICAgICArIChzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX19iYXItLWludmlzaWJsZScgOiAnJylcbiAgICApKVxuXG4gICAgY29uc3QgbWFpblN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsLnZlcnRpY2FsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlICYmIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuY29udGVudFN0eWxlXG4gICAgICAgIDogcHJvcHMuY29udGVudEFjdGl2ZVN0eWxlXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbCAoKSB7XG4gICAgICBjb25zdCBpbmZvID0ge31cblxuICAgICAgYXhpc0xpc3QuZm9yRWFjaChheGlzID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHNjcm9sbFsgYXhpcyBdXG4gICAgICAgIE9iamVjdC5hc3NpZ24oaW5mbywge1xuICAgICAgICAgIFsgYXhpcyArICdQb3NpdGlvbicgXTogZGF0YS5wb3NpdGlvbi52YWx1ZSxcbiAgICAgICAgICBbIGF4aXMgKyAnUGVyY2VudGFnZScgXTogZGF0YS5wZXJjZW50YWdlLnZhbHVlLFxuICAgICAgICAgIFsgYXhpcyArICdTaXplJyBdOiBkYXRhLnNpemUudmFsdWUsXG4gICAgICAgICAgWyBheGlzICsgJ0NvbnRhaW5lclNpemUnIF06IGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlLFxuICAgICAgICAgIFsgYXhpcyArICdDb250YWluZXJJbm5lclNpemUnIF06IGNvbnRhaW5lclsgYXhpcyArICdJbm5lcicgXS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIGluZm9cbiAgICB9XG5cbiAgICAvLyB3ZSBoYXZlIGxvdHMgb2YgbGlzdGVuZXJzLCBzb1xuICAgIC8vIGVuc3VyZSB3ZSdyZSBub3QgZW1pdHRpbmcgc2FtZSBpbmZvXG4gICAgLy8gbXVsdGlwbGUgdGltZXNcbiAgICBjb25zdCBlbWl0U2Nyb2xsID0gZGVib3VuY2UoKCkgPT4ge1xuICAgICAgY29uc3QgaW5mbyA9IGdldFNjcm9sbCgpXG4gICAgICBpbmZvLnJlZiA9IHByb3h5XG4gICAgICBlbWl0KCdzY3JvbGwnLCBpbmZvKVxuICAgIH0sIDApXG5cbiAgICBmdW5jdGlvbiBsb2NhbFNldFNjcm9sbFBvc2l0aW9uIChheGlzLCBvZmZzZXQsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoYXhpc0xpc3QuaW5jbHVkZXMoYXhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tRU2Nyb2xsQXJlYV06IHdyb25nIGZpcnN0IHBhcmFtIG9mIHNldFNjcm9sbFBvc2l0aW9uICh2ZXJ0aWNhbC9ob3Jpem9udGFsKScpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBmbiA9IGF4aXMgPT09ICd2ZXJ0aWNhbCdcbiAgICAgICAgPyBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uXG4gICAgICAgIDogc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uXG5cbiAgICAgIGZuKHRhcmdldFJlZi52YWx1ZSwgb2Zmc2V0LCBkdXJhdGlvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDb250YWluZXIgKHsgaGVpZ2h0LCB3aWR0aCB9KSB7XG4gICAgICBsZXQgY2hhbmdlID0gZmFsc2VcblxuICAgICAgaWYgKGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSA9IGhlaWdodFxuICAgICAgICBjaGFuZ2UgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSAhPT0gd2lkdGgpIHtcbiAgICAgICAgY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgPSB3aWR0aFxuICAgICAgICBjaGFuZ2UgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNoYW5nZSA9PT0gdHJ1ZSAmJiBzdGFydFRpbWVyKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGwgKHsgcG9zaXRpb24gfSkge1xuICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlXG5cbiAgICAgIGlmIChzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUgIT09IHBvc2l0aW9uLnRvcCkge1xuICAgICAgICBzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUgPSBwb3NpdGlvbi50b3BcbiAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWUgIT09IHBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWUgPSBwb3NpdGlvbi5sZWZ0XG4gICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgY2hhbmdlID09PSB0cnVlICYmIHN0YXJ0VGltZXIoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFNpemUgKHsgaGVpZ2h0LCB3aWR0aCB9KSB7XG4gICAgICBpZiAoc2Nyb2xsLmhvcml6b250YWwuc2l6ZS52YWx1ZSAhPT0gd2lkdGgpIHtcbiAgICAgICAgc2Nyb2xsLmhvcml6b250YWwuc2l6ZS52YWx1ZSA9IHdpZHRoXG4gICAgICAgIHN0YXJ0VGltZXIoKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUgIT09IGhlaWdodCkge1xuICAgICAgICBzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSA9IGhlaWdodFxuICAgICAgICBzdGFydFRpbWVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhblRodW1iIChlLCBheGlzKSB7XG4gICAgICBjb25zdCBkYXRhID0gc2Nyb2xsWyBheGlzIF1cblxuICAgICAgaWYgKGUuaXNGaXJzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoZGF0YS50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgICAgcGFuUmVmUG9zID0gZGF0YS5wb3NpdGlvbi52YWx1ZVxuICAgICAgICBwYW5uaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAocGFubmluZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGUuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgICBwYW5uaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgZFByb3AgPSBkaXJQcm9wc1sgYXhpcyBdXG5cbiAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSAoXG4gICAgICAgIChkYXRhLnNpemUudmFsdWUgLSBjb250YWluZXJbIGF4aXMgXS52YWx1ZSlcbiAgICAgICAgLyAoY29udGFpbmVyWyBheGlzICsgJ0lubmVyJyBdLnZhbHVlIC0gZGF0YS50aHVtYlNpemUudmFsdWUpXG4gICAgICApXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IGUuZGlzdGFuY2VbIGRQcm9wLmRpc3QgXVxuICAgICAgY29uc3QgcG9zID0gcGFuUmVmUG9zICsgKGUuZGlyZWN0aW9uID09PSBkUHJvcC5kaXIgPyAxIDogLTEpICogZGlzdGFuY2UgKiBtdWx0aXBsaWVyXG5cbiAgICAgIHNldFNjcm9sbChwb3MsIGF4aXMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZWRvd24gKGV2dCwgYXhpcykge1xuICAgICAgY29uc3QgZGF0YSA9IHNjcm9sbFsgYXhpcyBdXG5cbiAgICAgIGlmIChkYXRhLnRodW1iSGlkZGVuLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0T2Zmc2V0ID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJ1xuICAgICAgICAgID8gcHJvcHMudmVydGljYWxPZmZzZXRbIDAgXVxuICAgICAgICAgIDogcHJvcHMuaG9yaXpvbnRhbE9mZnNldFsgMCBdXG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZXZ0WyBkaXJQcm9wc1sgYXhpcyBdLm9mZnNldCBdIC0gc3RhcnRPZmZzZXRcbiAgICAgICAgY29uc3QgdGh1bWJTdGFydCA9IGRhdGEudGh1bWJTdGFydC52YWx1ZSAtIHN0YXJ0T2Zmc2V0XG5cbiAgICAgICAgaWYgKG9mZnNldCA8IHRodW1iU3RhcnQgfHwgb2Zmc2V0ID4gdGh1bWJTdGFydCArIGRhdGEudGh1bWJTaXplLnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0VGh1bWJTdGFydCA9IG9mZnNldCAtIGRhdGEudGh1bWJTaXplLnZhbHVlIC8gMlxuICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBiZXR3ZWVuKHRhcmdldFRodW1iU3RhcnQgLyAoY29udGFpbmVyWyBheGlzICsgJ0lubmVyJyBdLnZhbHVlIC0gZGF0YS50aHVtYlNpemUudmFsdWUpLCAwLCAxKVxuICAgICAgICAgIHNldFNjcm9sbChwZXJjZW50YWdlICogTWF0aC5tYXgoMCwgZGF0YS5zaXplLnZhbHVlIC0gY29udGFpbmVyWyBheGlzIF0udmFsdWUpLCBheGlzKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWN0aXZhdGUgdGh1bWIgcGFuXG4gICAgICAgIGlmIChkYXRhLnJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGRhdGEucmVmLnZhbHVlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoZXZ0LnR5cGUsIGV2dCkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFRpbWVyICgpIHtcbiAgICAgIHRlbXBTaG93aW5nLnZhbHVlID0gdHJ1ZVxuXG4gICAgICB0aW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgdGVtcFNob3dpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgfSwgcHJvcHMuZGVsYXkpXG5cbiAgICAgIHByb3BzLm9uU2Nyb2xsICE9PSB2b2lkIDAgJiYgZW1pdFNjcm9sbCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2Nyb2xsIChvZmZzZXQsIGF4aXMpIHtcbiAgICAgIHRhcmdldFJlZi52YWx1ZVsgZGlyUHJvcHNbIGF4aXMgXS5zY3JvbGwgXSA9IG9mZnNldFxuICAgIH1cblxuICAgIGxldCBtb3VzZUV2ZW50VGltZXIgPSBudWxsXG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlZW50ZXIgKCkge1xuICAgICAgaWYgKG1vdXNlRXZlbnRUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQobW91c2VFdmVudFRpbWVyKVxuICAgICAgfVxuXG4gICAgICAvLyBzZXRUaW1lb3V0IG5lZWRlZCBmb3IgaU9TOyBzZWUgdGlja2V0ICMxNjIxMFxuICAgICAgbW91c2VFdmVudFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1vdXNlRXZlbnRUaW1lciA9IG51bGxcbiAgICAgICAgaG92ZXIudmFsdWUgPSB0cnVlXG4gICAgICB9LCBwcm94eS4kcS5wbGF0Zm9ybS5pcy5pb3MgPyA1MCA6IDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZWxlYXZlICgpIHtcbiAgICAgIGlmIChtb3VzZUV2ZW50VGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KG1vdXNlRXZlbnRUaW1lcilcbiAgICAgICAgbW91c2VFdmVudFRpbWVyID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBob3Zlci52YWx1ZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IHNjcm9sbFBvc2l0aW9uID0gbnVsbFxuXG4gICAgd2F0Y2goKCkgPT4gcHJveHkuJHEubGFuZy5ydGwsIHJ0bCA9PiB7XG4gICAgICBpZiAodGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHNldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbihcbiAgICAgICAgICB0YXJnZXRSZWYudmFsdWUsXG4gICAgICAgICAgTWF0aC5hYnMoc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWUpICogKHJ0bCA9PT0gdHJ1ZSA/IC0xIDogMSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHNjcm9sbFBvc2l0aW9uID0ge1xuICAgICAgICB0b3A6IHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSxcbiAgICAgICAgbGVmdDogc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uID09PSBudWxsKSByZXR1cm5cblxuICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gdGFyZ2V0UmVmLnZhbHVlXG5cbiAgICAgIGlmIChzY3JvbGxUYXJnZXQgIT09IG51bGwpIHtcbiAgICAgICAgc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uKHNjcm9sbFRhcmdldCwgc2Nyb2xsUG9zaXRpb24ubGVmdClcbiAgICAgICAgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihzY3JvbGxUYXJnZXQsIHNjcm9sbFBvc2l0aW9uLnRvcClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KGVtaXRTY3JvbGwuY2FuY2VsKVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgZ2V0U2Nyb2xsVGFyZ2V0OiAoKSA9PiB0YXJnZXRSZWYudmFsdWUsXG4gICAgICBnZXRTY3JvbGwsXG4gICAgICBnZXRTY3JvbGxQb3NpdGlvbjogKCkgPT4gKHtcbiAgICAgICAgdG9wOiBzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUsXG4gICAgICAgIGxlZnQ6IHNjcm9sbC5ob3Jpem9udGFsLnBvc2l0aW9uLnZhbHVlXG4gICAgICB9KSxcbiAgICAgIGdldFNjcm9sbFBlcmNlbnRhZ2U6ICgpID0+ICh7XG4gICAgICAgIHRvcDogc2Nyb2xsLnZlcnRpY2FsLnBlcmNlbnRhZ2UudmFsdWUsXG4gICAgICAgIGxlZnQ6IHNjcm9sbC5ob3Jpem9udGFsLnBlcmNlbnRhZ2UudmFsdWVcbiAgICAgIH0pLFxuICAgICAgc2V0U2Nyb2xsUG9zaXRpb246IGxvY2FsU2V0U2Nyb2xsUG9zaXRpb24sXG4gICAgICBzZXRTY3JvbGxQZXJjZW50YWdlIChheGlzLCBwZXJjZW50YWdlLCBkdXJhdGlvbikge1xuICAgICAgICBsb2NhbFNldFNjcm9sbFBvc2l0aW9uKFxuICAgICAgICAgIGF4aXMsXG4gICAgICAgICAgcGVyY2VudGFnZVxuICAgICAgICAgICAgKiAoc2Nyb2xsWyBheGlzIF0uc2l6ZS52YWx1ZSAtIGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlKVxuICAgICAgICAgICAgKiAoYXhpcyA9PT0gJ2hvcml6b250YWwnICYmIHByb3h5LiRxLmxhbmcucnRsID09PSB0cnVlID8gLTEgOiAxKSxcbiAgICAgICAgICBkdXJhdGlvblxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHN0b3JlID0ge1xuICAgICAgc2Nyb2xsLFxuXG4gICAgICB0aHVtYlZlcnREaXI6IFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgZSA9PiB7IG9uUGFuVGh1bWIoZSwgJ3ZlcnRpY2FsJykgfSxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7IHZlcnRpY2FsOiB0cnVlLCAuLi5wYW5PcHRzIH1cbiAgICAgIF0gXSxcblxuICAgICAgdGh1bWJIb3JpekRpcjogWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBlID0+IHsgb25QYW5UaHVtYihlLCAnaG9yaXpvbnRhbCcpIH0sXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgeyBob3Jpem9udGFsOiB0cnVlLCAuLi5wYW5PcHRzIH1cbiAgICAgIF0gXSxcblxuICAgICAgb25WZXJ0aWNhbE1vdXNlZG93biAoZXZ0KSB7XG4gICAgICAgIG9uTW91c2Vkb3duKGV2dCwgJ3ZlcnRpY2FsJylcbiAgICAgIH0sXG5cbiAgICAgIG9uSG9yaXpvbnRhbE1vdXNlZG93biAoZXZ0KSB7XG4gICAgICAgIG9uTW91c2Vkb3duKGV2dCwgJ2hvcml6b250YWwnKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgb25Nb3VzZWVudGVyLFxuICAgICAgICBvbk1vdXNlbGVhdmVcbiAgICAgIH0sIFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogdGFyZ2V0UmVmLFxuICAgICAgICAgIGNsYXNzOiAncS1zY3JvbGxhcmVhX19jb250YWluZXIgc2Nyb2xsIHJlbGF0aXZlLXBvc2l0aW9uIGZpdCBoaWRlLXNjcm9sbGJhcicsXG4gICAgICAgICAgdGFiaW5kZXg6IHByb3BzLnRhYmluZGV4ICE9PSB2b2lkIDAgPyBwcm9wcy50YWJpbmRleCA6IHZvaWQgMFxuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLXNjcm9sbGFyZWFfX2NvbnRlbnQgYWJzb2x1dGUnLFxuICAgICAgICAgICAgc3R5bGU6IG1haW5TdHlsZS52YWx1ZVxuICAgICAgICAgIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgICAgIG9uUmVzaXplOiB1cGRhdGVTY3JvbGxTaXplXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pKSxcblxuICAgICAgICAgIGgoUVNjcm9sbE9ic2VydmVyLCB7XG4gICAgICAgICAgICBheGlzOiAnYm90aCcsXG4gICAgICAgICAgICBvblNjcm9sbDogdXBkYXRlU2Nyb2xsXG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICBkZWJvdW5jZTogMCxcbiAgICAgICAgICBvblJlc2l6ZTogdXBkYXRlQ29udGFpbmVyXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoU2Nyb2xsQXJlYUNvbnRyb2xzLCB7XG4gICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgYmFyU3R5bGU6IHByb3BzLmJhclN0eWxlLFxuICAgICAgICAgIHZlcnRpY2FsQmFyU3R5bGU6IHByb3BzLnZlcnRpY2FsQmFyU3R5bGUsXG4gICAgICAgICAgaG9yaXpvbnRhbEJhclN0eWxlOiBwcm9wcy5ob3Jpem9udGFsQmFyU3R5bGVcbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIHByb3ZpZGUsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCB7IHBhZ2VDb250YWluZXJLZXksIGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuc3ltYm9scy9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVBhZ2VDb250YWluZXInLFxuXG4gIHNldHVwIChfLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUVBhZ2VDb250YWluZXIgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgICByZXR1cm4gZW1wdHlSZW5kZXJGblxuICAgIH1cblxuICAgIHByb3ZpZGUocGFnZUNvbnRhaW5lcktleSwgdHJ1ZSlcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY3NzID0ge31cblxuICAgICAgaWYgKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzcy5wYWRkaW5nVG9wID0gYCR7ICRsYXlvdXQuaGVhZGVyLnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQucmlnaHQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyBgcGFkZGluZyR7ICRxLmxhbmcucnRsID09PSB0cnVlID8gJ0xlZnQnIDogJ1JpZ2h0JyB9YCBdID0gYCR7ICRsYXlvdXQucmlnaHQuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAoJGxheW91dC5mb290ZXIuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzLnBhZGRpbmdCb3R0b20gPSBgJHsgJGxheW91dC5mb290ZXIuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAoJGxheW91dC5sZWZ0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgYHBhZGRpbmckeyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdSaWdodCcgOiAnTGVmdCcgfWAgXSA9IGAkeyAkbGF5b3V0LmxlZnQuc2l6ZSB9cHhgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiAncS1wYWdlLWNvbnRhaW5lcicsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWVcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgcmVhY3RpdmUsIGNvbXB1dGVkLCB3YXRjaCwgcHJvdmlkZSwgb25Vbm1vdW50ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9wbGF0Zm9ybS9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IFFTY3JvbGxPYnNlcnZlciBmcm9tICcuLi9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzJ1xuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxiYXJXaWR0aCB9IGZyb20gJy4uLy4uL3V0aWxzL3Njcm9sbC9zY3JvbGwuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zeW1ib2xzL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTGF5b3V0JyxcblxuICBwcm9wczoge1xuICAgIGNvbnRhaW5lcjogQm9vbGVhbixcbiAgICB2aWV3OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaGhoIGxwciBmZmYnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IC9eKGh8bCloKGh8cikgbHByIChmfGwpZihmfHIpJC8udGVzdCh2LnRvTG93ZXJDYXNlKCkpXG4gICAgfSxcblxuICAgIG9uU2Nyb2xsOiBGdW5jdGlvbixcbiAgICBvblNjcm9sbEhlaWdodDogRnVuY3Rpb24sXG4gICAgb25SZXNpemU6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG5cbiAgICAvLyBwYWdlIHJlbGF0ZWRcbiAgICBjb25zdCBoZWlnaHQgPSByZWYoJHEuc2NyZWVuLmhlaWdodClcbiAgICBjb25zdCB3aWR0aCA9IHJlZihwcm9wcy5jb250YWluZXIgPT09IHRydWUgPyAwIDogJHEuc2NyZWVuLndpZHRoKVxuICAgIGNvbnN0IHNjcm9sbCA9IHJlZih7IHBvc2l0aW9uOiAwLCBkaXJlY3Rpb246ICdkb3duJywgaW5mbGVjdGlvblBvaW50OiAwIH0pXG5cbiAgICAvLyBjb250YWluZXIgb25seSBwcm9wXG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gcmVmKDApXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSByZWYoaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uLnZhbHVlID09PSB0cnVlID8gMCA6IGdldFNjcm9sbGJhcldpZHRoKCkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxheW91dCBxLWxheW91dC0tJ1xuICAgICAgKyAocHJvcHMuY29udGFpbmVyID09PSB0cnVlID8gJ2NvbnRhaW5lcml6ZWQnIDogJ3N0YW5kYXJkJylcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmNvbnRhaW5lciA9PT0gZmFsc2VcbiAgICAgICAgPyB7IG1pbkhlaWdodDogJHEuc2NyZWVuLmhlaWdodCArICdweCcgfVxuICAgICAgICA6IG51bGxcbiAgICApKVxuXG4gICAgLy8gdXNlZCBieSBjb250YWluZXIgb25seVxuICAgIGNvbnN0IHRhcmdldFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsYmFyV2lkdGgudmFsdWUgIT09IDBcbiAgICAgICAgPyB7IFsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF06IGAkeyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHhgIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIGNvbnN0IHRhcmdldENoaWxkU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBzY3JvbGxiYXJXaWR0aC52YWx1ZSAhPT0gMFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIFsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnIF06IDAsXG4gICAgICAgICAgICBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdOiBgLSR7IHNjcm9sbGJhcldpZHRoLnZhbHVlIH1weGAsXG4gICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSArICR7IHNjcm9sbGJhcldpZHRoLnZhbHVlIH1weClgXG4gICAgICAgICAgfVxuICAgICAgICA6IG51bGxcbiAgICApKVxuXG4gICAgZnVuY3Rpb24gb25QYWdlU2Nyb2xsIChkYXRhKSB7XG4gICAgICBpZiAocHJvcHMuY29udGFpbmVyID09PSB0cnVlIHx8IGRvY3VtZW50LnFTY3JvbGxQcmV2ZW50ZWQgIT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbi50b3AsXG4gICAgICAgICAgZGlyZWN0aW9uOiBkYXRhLmRpcmVjdGlvbixcbiAgICAgICAgICBkaXJlY3Rpb25DaGFuZ2VkOiBkYXRhLmRpcmVjdGlvbkNoYW5nZWQsXG4gICAgICAgICAgaW5mbGVjdGlvblBvaW50OiBkYXRhLmluZmxlY3Rpb25Qb2ludC50b3AsXG4gICAgICAgICAgZGVsdGE6IGRhdGEuZGVsdGEudG9wXG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGwudmFsdWUgPSBpbmZvXG4gICAgICAgIHByb3BzLm9uU2Nyb2xsICE9PSB2b2lkIDAgJiYgZW1pdCgnc2Nyb2xsJywgaW5mbylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhZ2VSZXNpemUgKGRhdGEpIHtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0OiBuZXdIZWlnaHQsIHdpZHRoOiBuZXdXaWR0aCB9ID0gZGF0YVxuICAgICAgbGV0IHJlc2l6ZWQgPSBmYWxzZVxuXG4gICAgICBpZiAoaGVpZ2h0LnZhbHVlICE9PSBuZXdIZWlnaHQpIHtcbiAgICAgICAgcmVzaXplZCA9IHRydWVcbiAgICAgICAgaGVpZ2h0LnZhbHVlID0gbmV3SGVpZ2h0XG4gICAgICAgIHByb3BzLm9uU2Nyb2xsSGVpZ2h0ICE9PSB2b2lkIDAgJiYgZW1pdCgnc2Nyb2xsSGVpZ2h0JywgbmV3SGVpZ2h0KVxuICAgICAgICB1cGRhdGVTY3JvbGxiYXJXaWR0aCgpXG4gICAgICB9XG4gICAgICBpZiAod2lkdGgudmFsdWUgIT09IG5ld1dpZHRoKSB7XG4gICAgICAgIHJlc2l6ZWQgPSB0cnVlXG4gICAgICAgIHdpZHRoLnZhbHVlID0gbmV3V2lkdGhcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc2l6ZWQgPT09IHRydWUgJiYgcHJvcHMub25SZXNpemUgIT09IHZvaWQgMCkge1xuICAgICAgICBlbWl0KCdyZXNpemUnLCBkYXRhKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ29udGFpbmVyUmVzaXplICh7IGhlaWdodCB9KSB7XG4gICAgICBpZiAoY29udGFpbmVySGVpZ2h0LnZhbHVlICE9PSBoZWlnaHQpIHtcbiAgICAgICAgY29udGFpbmVySGVpZ2h0LnZhbHVlID0gaGVpZ2h0XG4gICAgICAgIHVwZGF0ZVNjcm9sbGJhcldpZHRoKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxiYXJXaWR0aCAoKSB7XG4gICAgICBpZiAocHJvcHMuY29udGFpbmVyID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gaGVpZ2h0LnZhbHVlID4gY29udGFpbmVySGVpZ2h0LnZhbHVlXG4gICAgICAgICAgPyBnZXRTY3JvbGxiYXJXaWR0aCgpXG4gICAgICAgICAgOiAwXG5cbiAgICAgICAgaWYgKHNjcm9sbGJhcldpZHRoLnZhbHVlICE9PSB3aWR0aCkge1xuICAgICAgICAgIHNjcm9sbGJhcldpZHRoLnZhbHVlID0gd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhbmltYXRlVGltZXIgPSBudWxsXG5cbiAgICBjb25zdCAkbGF5b3V0ID0ge1xuICAgICAgaW5zdGFuY2VzOiB7fSxcbiAgICAgIHZpZXc6IGNvbXB1dGVkKCgpID0+IHByb3BzLnZpZXcpLFxuICAgICAgaXNDb250YWluZXI6IGNvbXB1dGVkKCgpID0+IHByb3BzLmNvbnRhaW5lciksXG5cbiAgICAgIHJvb3RSZWYsXG5cbiAgICAgIGhlaWdodCxcbiAgICAgIGNvbnRhaW5lckhlaWdodCxcbiAgICAgIHNjcm9sbGJhcldpZHRoLFxuICAgICAgdG90YWxXaWR0aDogY29tcHV0ZWQoKCkgPT4gd2lkdGgudmFsdWUgKyBzY3JvbGxiYXJXaWR0aC52YWx1ZSksXG5cbiAgICAgIHJvd3M6IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93cyA9IHByb3BzLnZpZXcudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9wOiByb3dzWyAwIF0uc3BsaXQoJycpLFxuICAgICAgICAgIG1pZGRsZTogcm93c1sgMSBdLnNwbGl0KCcnKSxcbiAgICAgICAgICBib3R0b206IHJvd3NbIDIgXS5zcGxpdCgnJylcbiAgICAgICAgfVxuICAgICAgfSksXG5cbiAgICAgIGhlYWRlcjogcmVhY3RpdmUoeyBzaXplOiAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIHJpZ2h0OiByZWFjdGl2ZSh7IHNpemU6IDMwMCwgb2Zmc2V0OiAwLCBzcGFjZTogZmFsc2UgfSksXG4gICAgICBmb290ZXI6IHJlYWN0aXZlKHsgc2l6ZTogMCwgb2Zmc2V0OiAwLCBzcGFjZTogZmFsc2UgfSksXG4gICAgICBsZWZ0OiByZWFjdGl2ZSh7IHNpemU6IDMwMCwgb2Zmc2V0OiAwLCBzcGFjZTogZmFsc2UgfSksXG5cbiAgICAgIHNjcm9sbCxcblxuICAgICAgYW5pbWF0ZSAoKSB7XG4gICAgICAgIGlmIChhbmltYXRlVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoYW5pbWF0ZVRpbWVyKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncS1ib2R5LS1sYXlvdXQtYW5pbWF0ZScpXG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBhbmltYXRlVGltZXIgPSBudWxsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgfSwgMTU1KVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlIChwYXJ0LCBwcm9wLCB2YWwpIHtcbiAgICAgICAgJGxheW91dFsgcGFydCBdWyBwcm9wIF0gPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm92aWRlKGxheW91dEtleSwgJGxheW91dClcblxuICAgIC8vIHByZXZlbnQgc2Nyb2xsYmFyIGZsaWNrZXIgd2hpbGUgcmVzaXppbmcgd2luZG93IGhlaWdodFxuICAgIC8vIGlmIG5vIHBhZ2Ugc2Nyb2xsYmFyIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmIChfX1FVQVNBUl9TU1JfU0VSVkVSX18gIT09IHRydWUgJiYgZ2V0U2Nyb2xsYmFyV2lkdGgoKSA+IDApIHtcbiAgICAgIGxldCB0aW1lciA9IG51bGxcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuYm9keVxuXG4gICAgICBmdW5jdGlvbiByZXN0b3JlU2Nyb2xsYmFyICgpIHtcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtc2Nyb2xsYmFyJylcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaGlkZVNjcm9sbGJhciAoKSB7XG4gICAgICAgIGlmICh0aW1lciA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIGlmIGl0IGhhcyBubyBzY3JvbGxiYXIgdGhlbiB0aGVyZSdzIG5vdGhpbmcgdG8gZG9cbiAgICAgICAgICBpZiAoZWwuc2Nyb2xsSGVpZ2h0ID4gJHEuc2NyZWVuLmhlaWdodCkgcmV0dXJuXG5cbiAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlLXNjcm9sbGJhcicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICB9XG5cbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHJlc3RvcmVTY3JvbGxiYXIsIDMwMClcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsRXZlbnQgKGFjdGlvbikge1xuICAgICAgICBpZiAodGltZXIgIT09IG51bGwgJiYgYWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgICByZXN0b3JlU2Nyb2xsYmFyKClcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvd1sgYCR7IGFjdGlvbiB9RXZlbnRMaXN0ZW5lcmAgXSgncmVzaXplJywgaGlkZVNjcm9sbGJhcilcbiAgICAgIH1cblxuICAgICAgd2F0Y2goXG4gICAgICAgICgpID0+IChwcm9wcy5jb250YWluZXIgIT09IHRydWUgPyAnYWRkJyA6ICdyZW1vdmUnKSxcbiAgICAgICAgdXBkYXRlU2Nyb2xsRXZlbnRcbiAgICAgIClcblxuICAgICAgcHJvcHMuY29udGFpbmVyICE9PSB0cnVlICYmIHVwZGF0ZVNjcm9sbEV2ZW50KCdhZGQnKVxuXG4gICAgICBvblVubW91bnRlZCgoKSA9PiB7XG4gICAgICAgIHVwZGF0ZVNjcm9sbEV2ZW50KCdyZW1vdmUnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICBoKFFTY3JvbGxPYnNlcnZlciwgeyBvblNjcm9sbDogb25QYWdlU2Nyb2xsIH0pLFxuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwgeyBvblJlc2l6ZTogb25QYWdlUmVzaXplIH0pXG4gICAgICBdKVxuXG4gICAgICBjb25zdCBsYXlvdXQgPSBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIHJlZjogcHJvcHMuY29udGFpbmVyID09PSB0cnVlID8gdm9pZCAwIDogcm9vdFJlZixcbiAgICAgICAgdGFiaW5kZXg6IC0xXG4gICAgICB9LCBjb250ZW50KVxuXG4gICAgICBpZiAocHJvcHMuY29udGFpbmVyID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWxheW91dC1jb250YWluZXIgb3ZlcmZsb3ctaGlkZGVuJyxcbiAgICAgICAgICByZWY6IHJvb3RSZWZcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiBvbkNvbnRhaW5lclJlc2l6ZSB9KSxcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ2Fic29sdXRlLWZ1bGwnLFxuICAgICAgICAgICAgc3R5bGU6IHRhcmdldFN0eWxlLnZhbHVlXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICBjbGFzczogJ3Njcm9sbCcsXG4gICAgICAgICAgICAgIHN0eWxlOiB0YXJnZXRDaGlsZFN0eWxlLnZhbHVlXG4gICAgICAgICAgICB9LCBbIGxheW91dCBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsYXlvdXRcbiAgICB9XG4gIH1cbn0pXG4iLCIvKiEgTmFub1BvcCAyLjQuMiBNSVQgfCBodHRwczovL2dpdGh1Yi5jb20vU2ltb253ZXAvbmFub3BvcCAqL1xuY29uc3QgTiA9IFwiMi40LjJcIiwgSSA9IHtcbiAgdmFyaWFudEZsaXBPcmRlcjogeyBzdGFydDogXCJzbWVcIiwgbWlkZGxlOiBcIm1zZVwiLCBlbmQ6IFwiZW1zXCIgfSxcbiAgcG9zaXRpb25GbGlwT3JkZXI6IHsgdG9wOiBcInRicmxcIiwgcmlnaHQ6IFwicmx0YlwiLCBib3R0b206IFwiYnRybFwiLCBsZWZ0OiBcImxyYnRcIiB9LFxuICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgbWFyZ2luOiA4LFxuICBwYWRkaW5nOiAwXG59LCBKID0gKG4sIGksIG0pID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbnRhaW5lcjogcixcbiAgICBhcnJvdzogYSxcbiAgICBtYXJnaW46IGUsXG4gICAgcGFkZGluZzogbCxcbiAgICBwb3NpdGlvbjogVixcbiAgICB2YXJpYW50RmxpcE9yZGVyOiBDLFxuICAgIHBvc2l0aW9uRmxpcE9yZGVyOiBNXG4gIH0gPSB7XG4gICAgY29udGFpbmVyOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgLi4uSSxcbiAgICAuLi5tXG4gIH0sIHsgbGVmdDogRiwgdG9wOiBLIH0gPSBpLnN0eWxlO1xuICBpLnN0eWxlLmxlZnQgPSBcIjBcIiwgaS5zdHlsZS50b3AgPSBcIjBcIjtcbiAgY29uc3QgdCA9IG4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIG8gPSBpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBQID0ge1xuICAgIHQ6IHQudG9wIC0gby5oZWlnaHQgLSBlLFxuICAgIGI6IHQuYm90dG9tICsgZSxcbiAgICByOiB0LnJpZ2h0ICsgZSxcbiAgICBsOiB0LmxlZnQgLSBvLndpZHRoIC0gZVxuICB9LCBSID0ge1xuICAgIHZzOiB0LmxlZnQsXG4gICAgdm06IHQubGVmdCArIHQud2lkdGggLyAyIC0gby53aWR0aCAvIDIsXG4gICAgdmU6IHQubGVmdCArIHQud2lkdGggLSBvLndpZHRoLFxuICAgIGhzOiB0LnRvcCxcbiAgICBobTogdC5ib3R0b20gLSB0LmhlaWdodCAvIDIgLSBvLmhlaWdodCAvIDIsXG4gICAgaGU6IHQuYm90dG9tIC0gby5oZWlnaHRcbiAgfSwgWyQsIEUgPSBcIm1pZGRsZVwiXSA9IFYuc3BsaXQoXCItXCIpLCBMID0gTVskXSwgaiA9IENbRV0sIHsgdG9wOiB5LCBsZWZ0OiB4LCBib3R0b206IEIsIHJpZ2h0OiBPIH0gPSByO1xuICBmb3IgKGNvbnN0IGMgb2YgTCkge1xuICAgIGNvbnN0IHMgPSBjID09PSBcInRcIiB8fCBjID09PSBcImJcIjtcbiAgICBsZXQgcCA9IFBbY107XG4gICAgY29uc3QgW2QsIGddID0gcyA/IFtcInRvcFwiLCBcImxlZnRcIl0gOiBbXCJsZWZ0XCIsIFwidG9wXCJdLCBbdSwgdl0gPSBzID8gW28uaGVpZ2h0LCBvLndpZHRoXSA6IFtvLndpZHRoLCBvLmhlaWdodF0sIFt6LCBUXSA9IHMgPyBbQiwgT10gOiBbTywgQl0sIFtILCBrXSA9IHMgPyBbeSwgeF0gOiBbeCwgeV07XG4gICAgaWYgKCEocCA8IEggfHwgcCArIHUgKyBsID4geikpXG4gICAgICBmb3IgKGNvbnN0IGIgb2Ygaikge1xuICAgICAgICBsZXQgZiA9IFJbKHMgPyBcInZcIiA6IFwiaFwiKSArIGJdO1xuICAgICAgICBpZiAoIShmIDwgayB8fCBmICsgdiArIGwgPiBUKSkge1xuICAgICAgICAgIGlmIChmIC09IG9bZ10sIHAgLT0gb1tkXSwgaS5zdHlsZVtnXSA9IGAke2Z9cHhgLCBpLnN0eWxlW2RdID0gYCR7cH1weGAsIGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHcgPSBzID8gdC53aWR0aCAvIDIgOiB0LmhlaWdodCAvIDIsIGggPSB2IC8gMiwgUyA9IHcgPiBoLCBxID0ge1xuICAgICAgICAgICAgICBzOiBTID8gaCA6IHcsXG4gICAgICAgICAgICAgIG06IGgsXG4gICAgICAgICAgICAgIGU6IFMgPyBoIDogdiAtIHdcbiAgICAgICAgICAgIH0sIEEgPSB7XG4gICAgICAgICAgICAgIHQ6IHUsXG4gICAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgICAgIGw6IHVcbiAgICAgICAgICAgIH0sIEQgPSBmICsgcVtiXSwgRyA9IHAgKyBBW2NdO1xuICAgICAgICAgICAgYS5zdHlsZVtnXSA9IGAke0R9cHhgLCBhLnN0eWxlW2RdID0gYCR7R31weGA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjICsgYjtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIHJldHVybiBpLnN0eWxlLmxlZnQgPSBGLCBpLnN0eWxlLnRvcCA9IEssIG51bGw7XG59LCBRID0gKG4sIGksIG0pID0+IHtcbiAgY29uc3QgciA9IHR5cGVvZiBuID09IFwib2JqZWN0XCIgJiYgIShuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpID8gbiA6IHsgcmVmZXJlbmNlOiBuLCBwb3BwZXI6IGksIC4uLm0gfTtcbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBSZXBvc2l0aW9ucyB0aGUgY3VycmVudCBwb3BwZXIuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9uYWwgb3B0aW9ucyB3aGljaCBnZXQgbWVyZ2VkIHdpdGggdGhlIGN1cnJlbnQgb25lcy5cbiAgICAgKi9cbiAgICB1cGRhdGUoYSA9IHIpIHtcbiAgICAgIGNvbnN0IHsgcmVmZXJlbmNlOiBlLCBwb3BwZXI6IGwgfSA9IE9iamVjdC5hc3NpZ24ociwgYSk7XG4gICAgICBpZiAoIWwgfHwgIWUpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBvcHBlci0gb3IgcmVmZXJlbmNlLWVsZW1lbnQgbWlzc2luZy5cIik7XG4gICAgICByZXR1cm4gSihlLCBsLCByKTtcbiAgICB9XG4gIH07XG59O1xuZXhwb3J0IHtcbiAgUSBhcyBjcmVhdGVQb3BwZXIsXG4gIEkgYXMgZGVmYXVsdHMsXG4gIEogYXMgcmVwb3NpdGlvbixcbiAgTiBhcyB2ZXJzaW9uXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmFub3BvcC5tanMubWFwXG4iLCIvLyBSb2JlcnQgUGVubmVyJ3MgZWFzZUluT3V0UXVhZFxuXG4vLyBmaW5kIHRoZSByZXN0IG9mIGhpcyBlYXNpbmcgZnVuY3Rpb25zIGhlcmU6IGh0dHA6Ly9yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbi8vIGZpbmQgdGhlbSBleHBvcnRlZCBmb3IgRVM2IGNvbnN1bXB0aW9uIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qYXhnZWxsZXIvZXouanNcblxudmFyIGVhc2VJbk91dFF1YWQgPSBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQsIGIsIGMsIGQpIHtcbiAgdCAvPSBkIC8gMjtcbiAgaWYgKHQgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XG4gIHQtLTtcbiAgcmV0dXJuIC1jIC8gMiAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcbn07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG52YXIganVtcGVyID0gZnVuY3Rpb24ganVtcGVyKCkge1xuICAvLyBwcml2YXRlIHZhcmlhYmxlIGNhY2hlXG4gIC8vIG5vIHZhcmlhYmxlcyBhcmUgY3JlYXRlZCBkdXJpbmcgYSBqdW1wLCBwcmV2ZW50aW5nIG1lbW9yeSBsZWFrc1xuXG4gIHZhciBlbGVtZW50ID0gdm9pZCAwOyAvLyBlbGVtZW50IHRvIHNjcm9sbCB0byAgICAgICAgICAgICAgICAgICAobm9kZSlcblxuICB2YXIgc3RhcnQgPSB2b2lkIDA7IC8vIHdoZXJlIHNjcm9sbCBzdGFydHMgICAgICAgICAgICAgICAgICAgIChweClcbiAgdmFyIHN0b3AgPSB2b2lkIDA7IC8vIHdoZXJlIHNjcm9sbCBzdG9wcyAgICAgICAgICAgICAgICAgICAgIChweClcblxuICB2YXIgb2Zmc2V0ID0gdm9pZCAwOyAvLyBhZGp1c3RtZW50IGZyb20gdGhlIHN0b3AgcG9zaXRpb24gICAgICAocHgpXG4gIHZhciBlYXNpbmcgPSB2b2lkIDA7IC8vIGVhc2luZyBmdW5jdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbilcbiAgdmFyIGExMXkgPSB2b2lkIDA7IC8vIGFjY2Vzc2liaWxpdHkgc3VwcG9ydCBmbGFnICAgICAgICAgICAgIChib29sZWFuKVxuXG4gIHZhciBkaXN0YW5jZSA9IHZvaWQgMDsgLy8gZGlzdGFuY2Ugb2Ygc2Nyb2xsICAgICAgICAgICAgICAgICAgICAgKHB4KVxuICB2YXIgZHVyYXRpb24gPSB2b2lkIDA7IC8vIHNjcm9sbCBkdXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIChtcylcblxuICB2YXIgdGltZVN0YXJ0ID0gdm9pZCAwOyAvLyB0aW1lIHNjcm9sbCBzdGFydGVkICAgICAgICAgICAgICAgICAgICAobXMpXG4gIHZhciB0aW1lRWxhcHNlZCA9IHZvaWQgMDsgLy8gdGltZSBzcGVudCBzY3JvbGxpbmcgdGh1cyBmYXIgICAgICAgICAgKG1zKVxuXG4gIHZhciBuZXh0ID0gdm9pZCAwOyAvLyBuZXh0IHNjcm9sbCBwb3NpdGlvbiAgICAgICAgICAgICAgICAgICAocHgpXG5cbiAgdmFyIGNhbGxiYWNrID0gdm9pZCAwOyAvLyB0byBjYWxsIHdoZW4gZG9uZSBzY3JvbGxpbmcgICAgICAgICAgICAoZnVuY3Rpb24pXG5cbiAgLy8gc2Nyb2xsIHBvc2l0aW9uIGhlbHBlclxuXG4gIGZ1bmN0aW9uIGxvY2F0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIH1cblxuICAvLyBlbGVtZW50IG9mZnNldCBoZWxwZXJcblxuICBmdW5jdGlvbiB0b3AoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHN0YXJ0O1xuICB9XG5cbiAgLy8gckFGIGxvb3AgaGVscGVyXG5cbiAgZnVuY3Rpb24gbG9vcCh0aW1lQ3VycmVudCkge1xuICAgIC8vIHN0b3JlIHRpbWUgc2Nyb2xsIHN0YXJ0ZWQsIGlmIG5vdCBzdGFydGVkIGFscmVhZHlcbiAgICBpZiAoIXRpbWVTdGFydCkge1xuICAgICAgdGltZVN0YXJ0ID0gdGltZUN1cnJlbnQ7XG4gICAgfVxuXG4gICAgLy8gZGV0ZXJtaW5lIHRpbWUgc3BlbnQgc2Nyb2xsaW5nIHNvIGZhclxuICAgIHRpbWVFbGFwc2VkID0gdGltZUN1cnJlbnQgLSB0aW1lU3RhcnQ7XG5cbiAgICAvLyBjYWxjdWxhdGUgbmV4dCBzY3JvbGwgcG9zaXRpb25cbiAgICBuZXh0ID0gZWFzaW5nKHRpbWVFbGFwc2VkLCBzdGFydCwgZGlzdGFuY2UsIGR1cmF0aW9uKTtcblxuICAgIC8vIHNjcm9sbCB0byBpdFxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBuZXh0KTtcblxuICAgIC8vIGNoZWNrIHByb2dyZXNzXG4gICAgdGltZUVsYXBzZWQgPCBkdXJhdGlvbiA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCkgLy8gY29udGludWUgc2Nyb2xsIGxvb3BcbiAgICA6IGRvbmUoKTsgLy8gc2Nyb2xsaW5nIGlzIGRvbmVcbiAgfVxuXG4gIC8vIHNjcm9sbCBmaW5pc2hlZCBoZWxwZXJcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIC8vIGFjY291bnQgZm9yIHJBRiB0aW1lIHJvdW5kaW5nIGluYWNjdXJhY2llc1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzdGFydCArIGRpc3RhbmNlKTtcblxuICAgIC8vIGlmIHNjcm9sbGluZyB0byBhbiBlbGVtZW50LCBhbmQgYWNjZXNzaWJpbGl0eSBpcyBlbmFibGVkXG4gICAgaWYgKGVsZW1lbnQgJiYgYTExeSkge1xuICAgICAgLy8gYWRkIHRhYmluZGV4IGluZGljYXRpbmcgcHJvZ3JhbW1hdGljIGZvY3VzXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICAgICAgLy8gZm9jdXMgdGhlIGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBpZiBpdCBleGlzdHMsIGZpcmUgdGhlIGNhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICAvLyByZXNldCB0aW1lIGZvciBuZXh0IGp1bXBcbiAgICB0aW1lU3RhcnQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIEFQSVxuXG4gIGZ1bmN0aW9uIGp1bXAodGFyZ2V0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgLy8gcmVzb2x2ZSBvcHRpb25zLCBvciB1c2UgZGVmYXVsdHNcbiAgICBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gfHwgMTAwMDtcbiAgICBvZmZzZXQgPSBvcHRpb25zLm9mZnNldCB8fCAwO1xuICAgIGNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjazsgLy8gXCJ1bmRlZmluZWRcIiBpcyBhIHN1aXRhYmxlIGRlZmF1bHQsIGFuZCB3b24ndCBiZSBjYWxsZWRcbiAgICBlYXNpbmcgPSBvcHRpb25zLmVhc2luZyB8fCBlYXNlSW5PdXRRdWFkO1xuICAgIGExMXkgPSBvcHRpb25zLmExMXkgfHwgZmFsc2U7XG5cbiAgICAvLyBjYWNoZSBzdGFydGluZyBwb3NpdGlvblxuICAgIHN0YXJ0ID0gbG9jYXRpb24oKTtcblxuICAgIC8vIHJlc29sdmUgdGFyZ2V0XG4gICAgc3dpdGNoICh0eXBlb2YgdGFyZ2V0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0YXJnZXQpKSB7XG4gICAgICAvLyBzY3JvbGwgZnJvbSBjdXJyZW50IHBvc2l0aW9uXG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBlbGVtZW50ID0gdW5kZWZpbmVkOyAvLyBubyBlbGVtZW50IHRvIHNjcm9sbCB0b1xuICAgICAgICBhMTF5ID0gZmFsc2U7IC8vIG1ha2Ugc3VyZSBhY2Nlc3NpYmlsaXR5IGlzIG9mZlxuICAgICAgICBzdG9wID0gc3RhcnQgKyB0YXJnZXQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBzY3JvbGwgdG8gZWxlbWVudCAobm9kZSlcbiAgICAgIC8vIGJvdW5kaW5nIHJlY3QgaXMgcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBlbGVtZW50ID0gdGFyZ2V0O1xuICAgICAgICBzdG9wID0gdG9wKGVsZW1lbnQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gc2Nyb2xsIHRvIGVsZW1lbnQgKHNlbGVjdG9yKVxuICAgICAgLy8gYm91bmRpbmcgcmVjdCBpcyByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnRcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gICAgICAgIHN0b3AgPSB0b3AoZWxlbWVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIHJlc29sdmUgc2Nyb2xsIGRpc3RhbmNlLCBhY2NvdW50aW5nIGZvciBvZmZzZXRcbiAgICBkaXN0YW5jZSA9IHN0b3AgLSBzdGFydCArIG9mZnNldDtcblxuICAgIC8vIHJlc29sdmUgZHVyYXRpb25cbiAgICBzd2l0Y2ggKF90eXBlb2Yob3B0aW9ucy5kdXJhdGlvbikpIHtcbiAgICAgIC8vIG51bWJlciBpbiBtc1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gZnVuY3Rpb24gcGFzc2VkIHRoZSBkaXN0YW5jZSBvZiB0aGUgc2Nyb2xsXG4gICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbihkaXN0YW5jZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIHN0YXJ0IHRoZSBsb29wXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgfVxuXG4gIC8vIGV4cG9zZSBvbmx5IHRoZSBqdW1wIG1ldGhvZFxuICByZXR1cm4ganVtcDtcbn07XG5cbi8vIGV4cG9ydCBzaW5nbGV0b25cblxudmFyIHNpbmdsZXRvbiA9IGp1bXBlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b247XG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgYmUsIGNvbXB1dGVkIGFzIHYsIHJlZiBhcyBkLCByZWFjdGl2ZSBhcyB1ZSwgb25Nb3VudGVkIGFzIFNlLCBvblVubW91bnRlZCBhcyB3ZSwgd2F0Y2ggYXMgVGUsIG5leHRUaWNrIGFzIE4sIGNyZWF0ZUJsb2NrIGFzIGtlLCBvcGVuQmxvY2sgYXMgdywgVGVsZXBvcnQgYXMgJGUsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBULCBub3JtYWxpemVDbGFzcyBhcyBMZSwgbm9ybWFsaXplU3R5bGUgYXMgeGUsIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBMLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgeCwgcmVuZGVyU2xvdCBhcyBzZSwgdG9EaXNwbGF5U3RyaW5nIGFzIEMsIHdpdGhNb2RpZmllcnMgYXMgVSB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBDZSB9IGZyb20gXCJuYW5vcG9wXCI7XG5pbXBvcnQgQWUgZnJvbSBcImp1bXAuanNcIjtcbmNvbnN0IEVlID0gKGUsIG4sIG8sIHQpID0+IChlIC89IHQsIG8gKiBlICogZSArIG4pLCBCZSA9IChlLCBuLCBvLCB0KSA9PiAoZSAvPSB0LCAtbyAqIGUgKiAoZSAtIDIpICsgbiksIGllID0gKGUsIG4sIG8sIHQpID0+IChlIC89IHQgLyAyLCBlIDwgMSA/IG8gLyAyICogZSAqIGUgKyBuIDogKGUtLSwgLW8gLyAyICogKGUgKiAoZSAtIDIpIC0gMSkgKyBuKSksIERlID0gKGUsIG4sIG8sIHQpID0+IChlIC89IHQsIG8gKiBlICogZSAqIGUgKyBuKSwgamUgPSAoZSwgbiwgbywgdCkgPT4gKGUgLz0gdCwgZS0tLCBvICogKGUgKiBlICogZSArIDEpICsgbiksIEllID0gKGUsIG4sIG8sIHQpID0+IChlIC89IHQgLyAyLCBlIDwgMSA/IG8gLyAyICogZSAqIGUgKiBlICsgbiA6IChlIC09IDIsIG8gLyAyICogKGUgKiBlICogZSArIDIpICsgbikpLCBPZSA9IChlLCBuLCBvLCB0KSA9PiAoZSAvPSB0LCBvICogZSAqIGUgKiBlICogZSArIG4pLCBQZSA9IChlLCBuLCBvLCB0KSA9PiAoZSAvPSB0LCBlLS0sIC1vICogKGUgKiBlICogZSAqIGUgLSAxKSArIG4pLCBfZSA9IChlLCBuLCBvLCB0KSA9PiAoZSAvPSB0IC8gMiwgZSA8IDEgPyBvIC8gMiAqIGUgKiBlICogZSAqIGUgKyBuIDogKGUgLT0gMiwgLW8gLyAyICogKGUgKiBlICogZSAqIGUgLSAyKSArIG4pKSwgTmUgPSAoZSwgbiwgbywgdCkgPT4gKGUgLz0gdCwgbyAqIGUgKiBlICogZSAqIGUgKiBlICsgbiksIHFlID0gKGUsIG4sIG8sIHQpID0+IChlIC89IHQsIGUtLSwgbyAqIChlICogZSAqIGUgKiBlICogZSArIDEpICsgbiksIE1lID0gKGUsIG4sIG8sIHQpID0+IChlIC89IHQgLyAyLCBlIDwgMSA/IG8gLyAyICogZSAqIGUgKiBlICogZSAqIGUgKyBuIDogKGUgLT0gMiwgbyAvIDIgKiAoZSAqIGUgKiBlICogZSAqIGUgKyAyKSArIG4pKSwgUWUgPSB7XG4gIGVhc2VJblF1YWQ6IEVlLFxuICBlYXNlT3V0UXVhZDogQmUsXG4gIGVhc2VJbk91dFF1YWQ6IGllLFxuICBlYXNlSW5DdWJpYzogRGUsXG4gIGVhc2VPdXRDdWJpYzogamUsXG4gIGVhc2VJbk91dEN1YmljOiBJZSxcbiAgZWFzZUluUXVhcnQ6IE9lLFxuICBlYXNlT3V0UXVhcnQ6IFBlLFxuICBlYXNlSW5PdXRRdWFydDogX2UsXG4gIGVhc2VJblF1aW50OiBOZSxcbiAgZWFzZU91dFF1aW50OiBxZSxcbiAgZWFzZUluT3V0UXVpbnQ6IE1lXG59LCB6ZSA9IFtcImRhdGEtaGlkZGVuXCJdLCBWZSA9IFtcImlkXCIsIFwiZGF0YS1oaWRkZW5cIl0sIFJlID0gW1wiaWRcIiwgXCJhcmlhLW1vZGFsXCIsIFwiYXJpYS1sYWJlbFwiLCBcImFyaWEtZGVzY3JpYmVkYnlcIiwgXCJ0YWJpbmRleFwiLCBcImRhdGEtaGlkZGVuXCJdLCBGZSA9IHtcbiAga2V5OiAwLFxuICByb2xlOiBcInN0YXR1c1wiLFxuICBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLFxuICBcImFyaWEtYXRvbWljXCI6IFwidHJ1ZVwiLFxuICBjbGFzczogXCJ2anQtc3Itb25seVwiXG59LCBIZSA9IFtcImlkXCJdLCBVZSA9IFtcImlkXCIsIFwiaW5uZXJIVE1MXCJdLCBHZSA9IHsgY2xhc3M6IFwidmp0LWFjdGlvbnNcIiB9LCBLZSA9IFtcImFyaWEtbGFiZWxcIl0sIEplID0gW1wiYXJpYS1sYWJlbFwiXSwgV2UgPSBbXCJhcmlhLWxhYmVsXCJdLCB0dCA9IC8qIEBfX1BVUkVfXyAqLyBiZSh7XG4gIF9fbmFtZTogXCJWVG91clwiLFxuICBwcm9wczoge1xuICAgIG5hbWU6IHsgZGVmYXVsdDogXCJ0b3VyXCIgfSxcbiAgICBzdGVwczoge30sXG4gICAgYmFja2Ryb3A6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogITEgfSxcbiAgICBhdXRvU3RhcnQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogITEgfSxcbiAgICBzdGFydERlbGF5OiB7IGRlZmF1bHQ6IDAgfSxcbiAgICBoaWdobGlnaHQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogITEgfSxcbiAgICBtYXJnaW46IHsgZGVmYXVsdDogOCB9LFxuICAgIGJ1dHRvbkxhYmVsczoge30sXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlOiB7IGRlZmF1bHQ6IFwibmV2ZXJcIiB9LFxuICAgIGhpZGVTa2lwOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6ICExIH0sXG4gICAgaGlkZUFycm93OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6ICExIH0sXG4gICAgbm9TY3JvbGw6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogITEgfSxcbiAgICByZXNpemVUaW1lb3V0OiB7IGRlZmF1bHQ6IDI1MCB9LFxuICAgIGRlZmF1bHRQbGFjZW1lbnQ6IHsgZGVmYXVsdDogXCJyaWdodFwiIH0sXG4gICAganVtcE9wdGlvbnM6IHt9LFxuICAgIGVuYWJsZUExMXk6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogITEgfSxcbiAgICBrZXlib2FyZE5hdjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiAhMCB9LFxuICAgIGFyaWFMYWJlbDogeyBkZWZhdWx0OiBcIkd1aWRlZCB0b3VyXCIgfSxcbiAgICB0ZWxlcG9ydERlbGF5OiB7IGRlZmF1bHQ6IDEwMCB9LFxuICAgIHJlc3RhcnRPblByb3BDaGFuZ2U6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogITAgfVxuICB9LFxuICBlbWl0czogW1wib25Ub3VyU3RhcnRcIiwgXCJvblRvdXJFbmRcIiwgXCJvblRvdXJTdGVwXCJdLFxuICBzZXR1cChlLCB7IGV4cG9zZTogbiwgZW1pdDogbyB9KSB7XG4gICAgY29uc3QgdCA9IGUsIHEgPSBvLCBrID0gdigoKSA9PiB0Lm5hbWUgPyBgdmp0LSR7dC5uYW1lfWAgOiBcInZqdC10b3VyXCIpLCBoID0gZCgpLCBsID0gZCgwKSwgaSA9IGQoMCksIHAgPSBkKDEpLCBnID0gdigoKSA9PiB0LnN0ZXBzW2wudmFsdWVdKSwgY2UgPSB2KCgpID0+IHQuc3RlcHNbaS52YWx1ZV0pLCB2ZSA9IHYoKCkgPT4gdC5zdGVwc1twLnZhbHVlXSksIEcgPSB1ZSh7XG4gICAgICBjdXJyZW50U3RlcDogbCxcbiAgICAgIGxhc3RTdGVwOiBpLFxuICAgICAgbmV4dFN0ZXA6IHAsXG4gICAgICBnZXRDdXJyZW50U3RlcDogZyxcbiAgICAgIGdldExhc3RTdGVwOiBjZSxcbiAgICAgIGdldE5leHRTdGVwOiB2ZVxuICAgIH0pLCBLID0gdihcbiAgICAgICgpID0+IGwudmFsdWUgPT09IHQuc3RlcHMubGVuZ3RoIC0gMVxuICAgICksIEogPSB2KCgpID0+IEsudmFsdWUgPyB0LmJ1dHRvbkxhYmVscz8uZG9uZSA/PyBcIkRvbmVcIiA6IHQuYnV0dG9uTGFiZWxzPy5uZXh0ID8/IFwiTmV4dFwiKSwgQSA9IGQoXCJcIiksIHMgPSBkKCExKSwgTSA9IGQoITEpLCBkZSA9IGQoXCJyaWdodFwiKSwgZiA9IGQoITEpLCBRID0gdigoKSA9PiB0Lm5hbWUgPyBgdmp0LSR7dC5uYW1lfWAgOiBcInZqdFwiKSwgRSA9IHYoKCkgPT4gYCR7US52YWx1ZX0tdmp0LXRvb2x0aXBgKSwgVyA9IHYoKCkgPT4gYCR7US52YWx1ZX0tdmp0LWJhY2tkcm9wYCksIGZlID0gdigoKSA9PiBgJHtRLnZhbHVlfS12anQtYXJyb3dgKSwgeSA9IHYoXG4gICAgICAoKSA9PiB0Lm5hbWUgPyBgJHt0Lm5hbWV9dmp0LWhpZ2hsaWdodGAgOiBcInZqdC1oaWdobGlnaHRcIlxuICAgICksIG0gPSBkKCksIFggPSBkKCk7XG4gICAgbGV0IEIgPSBudWxsO1xuICAgIGNvbnN0IFkgPSB7XG4gICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgb2Zmc2V0OiAtMTAwXG4gICAgfSwgRCA9ICgpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGsudmFsdWUpID09PSBcInRydWVcIiwgaiA9IHVlKHtcbiAgICAgIG5hbWU6IHZvaWQgMCxcbiAgICAgIHN0ZXBzUmVmOiBudWxsXG4gICAgfSksIEkgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIUQoKSkge1xuICAgICAgICBpZiAocy52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGEgPSB0Lm5hbWUgIT09IGoubmFtZSwgciA9IHQuc3RlcHMgIT09IGouc3RlcHNSZWY7XG4gICAgICAgICAgaWYgKCEoYSB8fCByKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICBiKCksIGF3YWl0IE4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodC5zYXZlVG9Mb2NhbFN0b3JhZ2UgPT09IFwic3RlcFwiKSB7XG4gICAgICAgICAgY29uc3QgYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGsudmFsdWUpO1xuICAgICAgICAgIGwudmFsdWUgPSBwYXJzZUludChhIHx8IFwiMFwiLCAxMCksIGwudmFsdWUgPiAwICYmIChpLnZhbHVlID0gTWF0aC5tYXgobC52YWx1ZSAtIDEsIDApLCBwLnZhbHVlID0gbC52YWx1ZSArIDEpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICBsLnZhbHVlID0gMDtcbiAgICAgICAgUiA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGF3YWl0IF8obC52YWx1ZSk7XG4gICAgICAgICAgY29uc3QgYSA9IGcudmFsdWU7XG4gICAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJObyBzdGVwIGRhdGEgYXZhaWxhYmxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGEudGFyZ2V0XG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoIXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgVG91ciB0YXJnZXQgZWxlbWVudCBub3QgZm91bmQ6ICR7YS50YXJnZXR9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhd2FpdCBuZXcgUHJvbWlzZSgodSkgPT4ge1xuICAgICAgICAgICAgRiA9IHNldFRpbWVvdXQodSwgdC50ZWxlcG9ydERlbGF5KTtcbiAgICAgICAgICB9KSwgbS52YWx1ZSB8fCAobS52YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgIyR7RS52YWx1ZX1gXG4gICAgICAgICAgKSksIFgudmFsdWUgfHwgKFgudmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYCMke1cudmFsdWV9YFxuICAgICAgICAgICkpLCAhbS52YWx1ZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVG9vbHRpcCBlbGVtZW50IG5vdCBmb3VuZCBpbiBET01cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHQuZW5hYmxlQTExeSAmJiB0eXBlb2YgZG9jdW1lbnQgPCBcInVcIiAmJiAoQiA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLCBzLnZhbHVlID0gITAsIGYudmFsdWUgPSAhMCwgYXdhaXQgTigpO1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHUgPSB0LmhpZ2hsaWdodCB8fCBhLmhpZ2hsaWdodCwgYyA9IHQubWFyZ2luIHx8ICh1ID8gMTQgOiA4KTtcbiAgICAgICAgICAgIGgudmFsdWUgPSBDZShyLCBtLnZhbHVlLCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhLnBsYWNlbWVudCB8fCB0LmRlZmF1bHRQbGFjZW1lbnQsXG4gICAgICAgICAgICAgIG1hcmdpbjogY1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGF3YWl0ICQoKSwgZi52YWx1ZSA9ICExLCB0LmVuYWJsZUExMXkgJiYgKGF3YWl0IE4oKSwgbS52YWx1ZT8uZm9jdXMoKSksIGoubmFtZSA9IHQubmFtZSwgai5zdGVwc1JlZiA9IHQuc3RlcHMsIHEoXCJvblRvdXJTdGFydFwiKTtcbiAgICAgICAgfSwgdC5zdGFydERlbGF5KTtcbiAgICAgIH1cbiAgICB9LCBiID0gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KFIpLCBjbGVhclRpbWVvdXQoRiksIHMudmFsdWUgPSAhMSwgTS52YWx1ZSA9ICExLCBmLnZhbHVlID0gITEsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3kudmFsdWV9YCkuZm9yRWFjaCgoYSkgPT4gYS5jbGFzc0xpc3QucmVtb3ZlKHkudmFsdWUpKSwgaC52YWx1ZSAmJiAoaC52YWx1ZSA9IHZvaWQgMCksIHQuZW5hYmxlQTExeSAmJiBCICYmIChCLmZvY3VzKCksIEIgPSBudWxsKTtcbiAgICB9LCBwZSA9IChhID0gITEpID0+IHtcbiAgICAgIGIoKSwgbC52YWx1ZSA9IDAsIGkudmFsdWUgPSAwLCBwLnZhbHVlID0gMSwgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oay52YWx1ZSksIGEgJiYgSSgpO1xuICAgIH0sIE8gPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoYXdhaXQgXyhwLnZhbHVlKSwgZi52YWx1ZSA9ICEwLCBpLnZhbHVlID0gbC52YWx1ZSwgbC52YWx1ZSsrLCBsLnZhbHVlID4gdC5zdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIFMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcC52YWx1ZSA9IGwudmFsdWUgKyAxLCBhd2FpdCAkKCksIGYudmFsdWUgPSAhMTtcbiAgICB9LCBQID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGF3YWl0IF8oaS52YWx1ZSksIGYudmFsdWUgPSAhMCwgbC52YWx1ZSA9IGkudmFsdWUsIGkudmFsdWUgPSBNYXRoLm1heChpLnZhbHVlIC0gMSwgMCksIGwudmFsdWUgPCAwKSB7XG4gICAgICAgIFMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcC52YWx1ZSA9IGwudmFsdWUgKyAxLCBhd2FpdCAkKCksIGYudmFsdWUgPSAhMTtcbiAgICB9LCBTID0gKCkgPT4ge1xuICAgICAgYigpLCB0LnNhdmVUb0xvY2FsU3RvcmFnZSAhPT0gXCJuZXZlclwiICYmIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGsudmFsdWUsIFwidHJ1ZVwiKSwgcShcIm9uVG91ckVuZFwiKTtcbiAgICB9LCBtZSA9IGFzeW5jIChhKSA9PiB7XG4gICAgICBpZiAoYSA8IDAgfHwgYSA+PSB0LnN0ZXBzLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgc3RlcCBpbmRleDogJHthfWApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhd2FpdCBfKGEpLCBmLnZhbHVlID0gITAsIGwudmFsdWUgPSBhLCBpLnZhbHVlID0gTWF0aC5tYXgoYSAtIDEsIDApLCBwLnZhbHVlID0gYSArIDEsIGF3YWl0ICQoKSwgZi52YWx1ZSA9ICExO1xuICAgIH0sIF8gPSBhc3luYyAoYSkgPT4ge1xuICAgICAgY29uc3QgciA9IHQuc3RlcHNbYV07XG4gICAgICByPy5vbkJlZm9yZSAmJiBhd2FpdCByLm9uQmVmb3JlKCk7XG4gICAgfSwgZ2UgPSAoYSkgPT4ge1xuICAgICAgIWEgfHwgIW0udmFsdWUgfHwgKG0udmFsdWUuc2V0QXR0cmlidXRlKFwiZGF0YS1hcnJvd1wiLCBhKSwgZGUudmFsdWUgPSBhKTtcbiAgICB9LCBaID0gKCkgPT4ge1xuICAgICAgY29uc3QgYSA9IGcudmFsdWU7XG4gICAgICBpZiAoIWEgfHwgIWgudmFsdWUpIHJldHVybjtcbiAgICAgIGNvbnN0IHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBhLnRhcmdldFxuICAgICAgKTtcbiAgICAgIGlmICghcikgcmV0dXJuO1xuICAgICAgZWUoKSwgdGUoKTtcbiAgICAgIGNvbnN0IHUgPSBoLnZhbHVlLnVwZGF0ZSh7XG4gICAgICAgIHJlZmVyZW5jZTogcixcbiAgICAgICAgcG9zaXRpb246IGEucGxhY2VtZW50IHx8IHQuZGVmYXVsdFBsYWNlbWVudFxuICAgICAgfSk7XG4gICAgICBnZSh1IHx8IHQuZGVmYXVsdFBsYWNlbWVudCk7XG4gICAgfSwgJCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBnLnZhbHVlO1xuICAgICAgaWYgKCFhKSByZXR1cm47XG4gICAgICBjb25zdCByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYS50YXJnZXRcbiAgICAgICk7XG4gICAgICAhciB8fCAhbS52YWx1ZSB8fCAhaC52YWx1ZSB8fCAoIXQubm9TY3JvbGwgJiYgIWEubm9TY3JvbGwgJiYgYXdhaXQgbmV3IFByb21pc2UoKHUpID0+IHtcbiAgICAgICAgY29uc3QgYyA9IHtcbiAgICAgICAgICBkdXJhdGlvbjogWS5kdXJhdGlvbixcbiAgICAgICAgICBvZmZzZXQ6IFkub2Zmc2V0LFxuICAgICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCIsXG4gICAgICAgICAgYTExeTogdC5lbmFibGVBMTF5LFxuICAgICAgICAgIC4uLnQuanVtcE9wdGlvbnMsXG4gICAgICAgICAgLi4uYS5qdW1wT3B0aW9uc1xuICAgICAgICB9LCBIID0gUWVbYy5lYXNpbmddIHx8IGllO1xuICAgICAgICBBZShyLCB7XG4gICAgICAgICAgZHVyYXRpb246IGMuZHVyYXRpb24sXG4gICAgICAgICAgb2Zmc2V0OiBjLm9mZnNldCxcbiAgICAgICAgICBlYXNpbmc6IEgsXG4gICAgICAgICAgYTExeTogYy5hMTF5LFxuICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB1KClcbiAgICAgICAgfSk7XG4gICAgICB9KSwgWigpLCB0LnNhdmVUb0xvY2FsU3RvcmFnZSA9PT0gXCJzdGVwXCIgJiYgbG9jYWxTdG9yYWdlLnNldEl0ZW0oay52YWx1ZSwgbC52YWx1ZS50b1N0cmluZygpKSwgYS5vbkFmdGVyICYmIGF3YWl0IGEub25BZnRlcigpLCBxKFwib25Ub3VyU3RlcFwiLCBsLnZhbHVlKSk7XG4gICAgfSwgZWUgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt5LnZhbHVlfWApLmZvckVhY2goKHUpID0+IHUuY2xhc3NMaXN0LnJlbW92ZSh5LnZhbHVlKSk7XG4gICAgICBjb25zdCBhID0gZy52YWx1ZTtcbiAgICAgIGlmICghYSB8fCAhdC5oaWdobGlnaHQgJiYgIWEuaGlnaGxpZ2h0KSB7XG4gICAgICAgIEEudmFsdWUgPSBcIlwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYS50YXJnZXRcbiAgICAgICk7XG4gICAgICByICYmIChyLmNsYXNzTGlzdC5hZGQoeS52YWx1ZSksIEEudmFsdWUgPSBoZShgLiR7eS52YWx1ZX1gKSk7XG4gICAgfSwgdGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBhID0gZy52YWx1ZSwgciA9IHQuYmFja2Ryb3AgfHwgISFhPy5iYWNrZHJvcDtcbiAgICAgIE0udmFsdWUgPSByO1xuICAgIH0sIHogPSAoKSA9PiB7XG4gICAgICBEKCkgfHwgcy52YWx1ZSAmJiBaKCk7XG4gICAgfTtcbiAgICBsZXQgViwgUiwgRjtcbiAgICBjb25zdCBhZSA9ICgpID0+IHtcbiAgICAgIEQoKSB8fCAoY2xlYXJUaW1lb3V0KFYpLCB6KCksIFYgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgeigpO1xuICAgICAgfSwgdC5yZXNpemVUaW1lb3V0KSk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBoZShhKSB7XG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID4gXCJ1XCIpIHJldHVybiBcIlwiO1xuICAgICAgY29uc3QgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYSk7XG4gICAgICBpZiAoIXIpIHJldHVybiBcIlwiO1xuICAgICAgY29uc3QgdSA9IHIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICByZXR1cm4gYHBvbHlnb24oXG4gICAgMCUgMCUsXG4gICAgMCUgMTAwJSxcbiAgICAke3UubGVmdH1weCAxMDAlLFxuICAgICR7dS5sZWZ0fXB4ICR7dS50b3B9cHgsXG4gICAgJHt1LnJpZ2h0fXB4ICR7dS50b3B9cHgsXG4gICAgJHt1LnJpZ2h0fXB4ICR7dS5ib3R0b219cHgsXG4gICAgJHt1LmxlZnR9cHggJHt1LmJvdHRvbX1weCxcbiAgICAke3UubGVmdH1weCAxMDAlLFxuICAgIDEwMCUgMTAwJSxcbiAgICAxMDAlIDAlXG4gIClgO1xuICAgIH1cbiAgICBBLnZhbHVlID0gXCJcIjtcbiAgICBjb25zdCBuZSA9ICgpID0+IHtcbiAgICAgIEQoKSB8fCBzLnZhbHVlICYmIHooKTtcbiAgICB9LCBvZSA9IChhKSA9PiB7XG4gICAgICBpZiAoISghcy52YWx1ZSB8fCAhdC5lbmFibGVBMTF5IHx8ICF0LmtleWJvYXJkTmF2KSlcbiAgICAgICAgc3dpdGNoIChhLmtleSkge1xuICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIjpcbiAgICAgICAgICAgIFMoKSwgYS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICBjYXNlIFwiRW50ZXJcIjpcbiAgICAgICAgICAgIGlmIChhLmtleSA9PT0gXCJFbnRlclwiICYmIGEudGFyZ2V0Py50YWdOYW1lID09PSBcIkJVVFRPTlwiKVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBPKCksIGEucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgIGwudmFsdWUgPiAwICYmIChQKCksIGEucHJldmVudERlZmF1bHQoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNlKCgpID0+IHtcbiAgICAgIHQua2V5Ym9hcmROYXYgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9lKSwgdC5hdXRvU3RhcnQgJiYgSSgpLCB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBhZSksIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG5lLCAhMCk7XG4gICAgfSksIHdlKCgpID0+IHtcbiAgICAgIHQua2V5Ym9hcmROYXYgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9lKSwgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgYWUpLCB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBuZSwgITApLCBjbGVhclRpbWVvdXQoViksIGNsZWFyVGltZW91dChSKSwgY2xlYXJUaW1lb3V0KEYpLCBzLnZhbHVlICYmIGIoKTtcbiAgICB9KSwgVGUoXG4gICAgICAoKSA9PiBbdC5uYW1lLCB0LnN0ZXBzLCB0LnJlc3RhcnRPblByb3BDaGFuZ2VdLFxuICAgICAgYXN5bmMgKFthLCByLCB1XSwgW2MsIEhdKSA9PiB7XG4gICAgICAgIGlmICghdSB8fCAhcy52YWx1ZSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBsZSA9IGEgIT09IGM7XG4gICAgICAgIGlmIChsZSB8fCByICE9PSBIKSB7XG4gICAgICAgICAgaWYgKGxlICYmIGMgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgY29uc3QgcmUgPSBjID8gYHZqdC1oaWdobGlnaHQtJHtjfWAgOiBcInZqdC1oaWdobGlnaHRcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3JlfWApLmZvckVhY2goKHllKSA9PiB5ZS5jbGFzc0xpc3QucmVtb3ZlKHJlKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGIoKSwgYXdhaXQgTigpLCBJKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApLCBuKHtcbiAgICAgIHN0YXJ0VG91cjogSSxcbiAgICAgIG5leHRTdGVwOiBPLFxuICAgICAgbGFzdFN0ZXA6IFAsXG4gICAgICBlbmRUb3VyOiBTLFxuICAgICAgc3RvcFRvdXI6IGIsXG4gICAgICBnb1RvU3RlcDogbWUsXG4gICAgICByZXNldFRvdXI6IHBlLFxuICAgICAgdXBkYXRlUG9zaXRpb246ICQsXG4gICAgICB1cGRhdGVIaWdobGlnaHQ6IGVlLFxuICAgICAgdXBkYXRlQmFja2Ryb3A6IHRlXG4gICAgfSksIChhLCByKSA9PiAodygpLCBrZSgkZSwgeyB0bzogXCJib2R5XCIgfSwgW1xuICAgICAgVChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBMZShbXCJ2anQtbW9kYWwtb3ZlcmxheVwiLCB7IFwidmp0LXRvdXItYWN0aXZlXCI6IHMudmFsdWUgfV0pLFxuICAgICAgICBcImRhdGEtaGlkZGVuXCI6ICFzLnZhbHVlXG4gICAgICB9LCBbXG4gICAgICAgIFQoXCJkaXZcIiwge1xuICAgICAgICAgIGlkOiBXLnZhbHVlLFxuICAgICAgICAgIFwiZGF0YS1oaWRkZW5cIjogIU0udmFsdWUsXG4gICAgICAgICAgc3R5bGU6IHhlKHsgXCJjbGlwLXBhdGhcIjogQS52YWx1ZSB9KVxuICAgICAgICB9LCBudWxsLCAxMiwgVmUpLFxuICAgICAgICBUKFwiZGl2XCIsIHtcbiAgICAgICAgICBpZDogRS52YWx1ZSxcbiAgICAgICAgICByZWZfa2V5OiBcIl9Ub29sdGlwXCIsXG4gICAgICAgICAgcmVmOiBtLFxuICAgICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgICAgXCJhcmlhLW1vZGFsXCI6IGUuZW5hYmxlQTExeSA/IFwidHJ1ZVwiIDogdm9pZCAwLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBnLnZhbHVlPy5hcmlhTGFiZWwgfHwgZS5hcmlhTGFiZWwsXG4gICAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IGAke0UudmFsdWV9LWNvbnRlbnRgLFxuICAgICAgICAgIHRhYmluZGV4OiBlLmVuYWJsZUExMXkgPyBcIjBcIiA6IHZvaWQgMCxcbiAgICAgICAgICBcImRhdGEtaGlkZGVuXCI6ICFzLnZhbHVlIHx8IGYudmFsdWVcbiAgICAgICAgfSwgW1xuICAgICAgICAgIHMudmFsdWUgPyAodygpLCBMKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogYHN0ZXAtJHtsLnZhbHVlfWBcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBlLmVuYWJsZUExMXkgPyAodygpLCBMKFwiZGl2XCIsIEZlLCBcIiBTdGVwIFwiICsgQyhsLnZhbHVlICsgMSkgKyBcIiBvZiBcIiArIEModC5zdGVwcy5sZW5ndGgpLCAxKSkgOiB4KFwiXCIsICEwKSxcbiAgICAgICAgICAgIGUuaGlkZUFycm93ID8geChcIlwiLCAhMCkgOiAodygpLCBMKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAga2V5OiAxLFxuICAgICAgICAgICAgICBpZDogZmUudmFsdWVcbiAgICAgICAgICAgIH0sIG51bGwsIDgsIEhlKSksXG4gICAgICAgICAgICBzZShhLiRzbG90cywgXCJjb250ZW50XCIsIHtcbiAgICAgICAgICAgICAgY3VycmVudFN0ZXBJbmRleDogbC52YWx1ZSxcbiAgICAgICAgICAgICAgY3VycmVudFN0ZXBEYXRhOiBnLnZhbHVlXG4gICAgICAgICAgICB9LCAoKSA9PiBbXG4gICAgICAgICAgICAgIFQoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGlkOiBgJHtFLnZhbHVlfS1jb250ZW50YCxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6IEcuZ2V0Q3VycmVudFN0ZXA/LmNvbnRlbnRcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCwgVWUpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHNlKGEuJHNsb3RzLCBcImFjdGlvbnNcIiwge1xuICAgICAgICAgICAgICBsYXN0U3RlcDogUCxcbiAgICAgICAgICAgICAgbmV4dFN0ZXA6IE8sXG4gICAgICAgICAgICAgIGVuZFRvdXI6IFMsXG4gICAgICAgICAgICAgIGdldE5leHRMYWJlbDogSi52YWx1ZSxcbiAgICAgICAgICAgICAgcHJvcHM6IHQsXG4gICAgICAgICAgICAgIF9DdXJyZW50U3RlcDogR1xuICAgICAgICAgICAgfSwgKCkgPT4gW1xuICAgICAgICAgICAgICBUKFwiZGl2XCIsIEdlLCBbXG4gICAgICAgICAgICAgICAgaS52YWx1ZSA8IGwudmFsdWUgPyAodygpLCBMKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiBVKFAsIFtcInByZXZlbnRcIl0pLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGUuZW5hYmxlQTExeSA/IGBHbyB0byBwcmV2aW91cyBzdGVwLCBzdGVwICR7bC52YWx1ZX0gb2YgJHt0LnN0ZXBzLmxlbmd0aH1gIDogdm9pZCAwXG4gICAgICAgICAgICAgICAgfSwgQyh0LmJ1dHRvbkxhYmVscz8uYmFjayB8fCBcIkJhY2tcIiksIDksIEtlKSkgOiB4KFwiXCIsICEwKSxcbiAgICAgICAgICAgICAgICB0LmhpZGVTa2lwID8geChcIlwiLCAhMCkgOiAodygpLCBMKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgIGtleTogMSxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiBVKFMsIFtcInByZXZlbnRcIl0pLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGUuZW5hYmxlQTExeSA/IFwiU2tpcCB0b3VyIGFuZCBjbG9zZVwiIDogdm9pZCAwXG4gICAgICAgICAgICAgICAgfSwgQyh0LmJ1dHRvbkxhYmVscz8uc2tpcCB8fCBcIlNraXBcIiksIDksIEplKSksXG4gICAgICAgICAgICAgICAgVChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgb25DbGljazogVShPLCBbXCJwcmV2ZW50XCJdKSxcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBlLmVuYWJsZUExMXkgPyBLLnZhbHVlID8gXCJGaW5pc2ggdG91clwiIDogYEdvIHRvIG5leHQgc3RlcCwgc3RlcCAke3AudmFsdWUgKyAxfSBvZiAke3Quc3RlcHMubGVuZ3RofWAgOiB2b2lkIDBcbiAgICAgICAgICAgICAgICB9LCBDKEoudmFsdWUpLCA5LCBXZSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSkpIDogeChcIlwiLCAhMClcbiAgICAgICAgXSwgOCwgUmUpXG4gICAgICBdLCAxMCwgemUpXG4gICAgXSkpO1xuICB9XG59KTtcbmV4cG9ydCB7XG4gIHR0IGFzIFZUb3VyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dnVlanMtdG91ci5qcy5tYXBcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtbGF5b3V0IHZpZXc9XCJoSHIgbHByIGZGclwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpc0V4cGVydE1vZGUnOiBpc0V4cGVydE1vZGUgfVwiPlxuICAgIDxxLWhlYWRlciBlbGV2YXRlZD5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxyb3V0ZXItbGlua1xuICAgICAgICAgIHRvPVwiL1wiPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdoaXRlIHByaW50LWhpZGRlblwiXG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgIGljb249XCJtZGktaG9tZS1vdXRsaW5lXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJIb21lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGNsYXNzPVwicHJpbnQtaGlkZGVuXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGljb249XCJtZW51XCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiTWVudVwiXG4gICAgICAgICAgQGNsaWNrPVwidG9nZ2xlTGVmdERyYXdlclwiXG4gICAgICAgICAgLz5cblxuICAgICAgICA8cS10b29sYmFyLXRpdGxlXG4gICAgICAgICAgY2xhc3M9XCJhcHAtdGl0bGVcIj5cbiAgICAgICAgICDOvFBNVFxuXG4gICAgICAgICAgfFxuXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIHYtaWY9XCJjdXJyZW50UHJvamVjdFwiXG4gICAgICAgICAgICBjbGFzcz1cImNvbnRleHRcIj5cbiAgICAgICAgICAgIHt7IGN1cnJlbnRQcm9qZWN0Lm5hbWUgfX1cbiAgICAgICAgICAgIDxOb3RlSWNvblxuICAgICAgICAgICAgICA6ZWxlbWVudD1cImN1cnJlbnRQcm9qZWN0XCIgLz5cbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJjdXJyZW50SW50ZXJ2aWV3XCI+XG4gICAgICAgICAgICAgIC0gSW50ZXJ2aWV3IHt7IGN1cnJlbnRJbnRlcnZpZXcubGFiZWwgfX1cbiAgICAgICAgICAgICAgPE5vdGVJY29uXG4gICAgICAgICAgICAgICAgOmVsZW1lbnQ9XCJjdXJyZW50SW50ZXJ2aWV3XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxxLWJ0biB2LWlmPVwiaXNNb2RpZmllZFwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJxLW1sLXhsIHByaW50LWhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRvU3RvcmVQcm9qZWN0KClcIlxuICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgbm8tY2Fwcz5cbiAgICAgICAgICAgICAgTW9kaWZpZWQgLSBDbGljayBoZXJlIHRvIHNhdmVcbiAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3EtdG9vbGJhci10aXRsZT5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJwcmludC1oaWRkZW5cIlxuICAgICAgICAgID5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIHYtaWY9XCJpc0RldmVsb3BtZW50XCJcbiAgICAgICAgICAgIGNsYXNzPVwicS1tbC14bFwiXG4gICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICBjb2xvcj1cImluZm9cIlxuICAgICAgICAgICAgbm8tY2Fwcz5cbiAgICAgICAgICAgIERldmVsb3BtZW50IHZlcnNpb25cbiAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgdi1pZj1cImN1cnJlbnRQcm9qZWN0XCJcbiAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgOmNsYXNzPVwieyAnbmVlZHMtc2F2ZSc6IGlzTW9kaWZpZWQgfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJkb1N0b3JlUHJvamVjdCgpXCJcbiAgICAgICAgICAgIGljb249XCJtZGktY29udGVudC1zYXZlXCI+XG4gICAgICAgICAgICA8cS10b29sdGlwXG4gICAgICAgICAgICAgIHYtaWY9XCJpc01vZGlmaWVkXCI+XG4gICAgICAgICAgICAgIERhdGEgaGFzIGJlZW4gbW9kaWZpZWQuIENsaWNrIHRvIHNhdmUgaXQgaW4gdGhlIGJyb3dzZXIgc3RvcmFnZS5cbiAgICAgICAgICAgIDwvcS10b29sdGlwPlxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgIEBjbGljay5jdHJsLmNhcHR1cmUuc3RvcD1cImlzRXhwZXJ0TW9kZSA9ICFpc0V4cGVydE1vZGVcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxvZ2luXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2Fub255bW91cyc6IGlzQW5vbnltb3VzIH1cIlxuICAgICAgICAgICAgOmljb249XCJpc0V4cGVydE1vZGUgPyAnbWRpLWFjY291bnQtY293Ym95LWhhdCcgOiAnbWRpLWFjY291bnQnXCI+XG4gICAgICAgICAgICA8cS1tZW51IGZpdD5cbiAgICAgICAgICAgICAgPHEtbGlzdCBzdHlsZT1cIm1pbi13aWR0aDogMjQwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBuby13cmFwIGNsYXNzPVwicm93XCI+PHNwYW4+SWRlbnRpZmllZCBhcyA8ZW0+e3t1c2VybmFtZX19PC9lbT48L3NwYW4+PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGU+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+TW9kaWZ5IHVzZXJuYW1lPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxxLXBvcHVwLWVkaXRcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0by1zYXZlXG4gICAgICAgICAgICAgICAgICAgIHYtc2xvdD1cInNjb3BlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IHYtbW9kZWw9XCJzY29wZS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCIoJGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5zZWxlY3QoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlIGF1dG9mb2N1cyBAa2V5dXAuZW50ZXI9XCJzY29wZS5zZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJsZWZ0RHJhd2VyT3BlbiA9IGZhbHNlIDsgdnVlVG91ci5zdGFydFRvdXIoKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VGFrZSBhIHRvdXIgb2YgdGhlIGludGVyZmFjZTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3VwbXQvdXBtdC93aWtpLyVDRSVCQ1BNVC1kb2N1bWVudGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIndlYlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+RG9jdW1lbnRhdGlvbjwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJhYm91dCgpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5BYm91dCDOvFBNVDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9xLXRvb2xiYXI+XG4gICAgPC9xLWhlYWRlcj5cblxuICAgIDxxLWRyYXdlclxuICAgICAgdi1tb2RlbD1cImxlZnREcmF3ZXJPcGVuXCJcbiAgICAgIG92ZXJsYXlcbiAgICAgIGJvcmRlcmVkXG4gICAgICA+XG4gICAgICA8cS1zY3JvbGwtYXJlYSBjbGFzcz1cImZpdFwiPlxuICAgICAgICA8cS1saXN0PlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gbWVudUxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cblxuICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgQGNsaWNrPVwibGVmdERyYXdlck9wZW4gPSBmYWxzZVwiXG4gICAgICAgICAgICAgIHYtcmlwcGxlXG4gICAgICAgICAgICAgIDp0bz1cIml0ZW0ubGlua1wiXG4gICAgICAgICAgICAgIDpocmVmPVwiaXRlbS5ocmVmXCJcbiAgICAgICAgICAgICAgOnRhcmdldD1cIml0ZW0uaHJlZiA/ICd3ZWInIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyIHYtaWY9XCJpdGVtLmljb25cIj5cbiAgICAgICAgICAgICAgICA8cS1pY29uIDpuYW1lPVwiaXRlbS5pY29uXCIgLz5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICA8cS1zZXBhcmF0b3IgOmtleT1cIidzZXAnICsgaW5kZXhcIiB2LWlmPVwiaXRlbS5zZXBhcmF0b3JcIiAvPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcS1saXN0PlxuICAgICAgPC9xLXNjcm9sbC1hcmVhPlxuICAgIDwvcS1kcmF3ZXI+XG5cbiAgICA8cS1kcmF3ZXJcbiAgICAgIHYtbW9kZWw9XCJyaWdodERyYXdlck9wZW5cIlxuICAgICAgYm9yZGVyZWRcbiAgICAgIHNpZGU9XCJyaWdodFwiXG4gICAgICA+XG4gICAgICA8cS1zY3JvbGwtYXJlYSBjbGFzcz1cImZpdFwiPlxuICAgICAgICA8cS1mb3JtPlxuICAgICAgICAgIDxxLWlucHV0IHYtbW9kZWw9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzIC8+XG4gICAgICAgIDwvcS1mb3JtPlxuICAgICAgPC9xLXNjcm9sbC1hcmVhPlxuICAgIDwvcS1kcmF3ZXI+XG5cbiAgICA8cS1wYWdlLWNvbnRhaW5lcj5cbiAgICAgIDxyb3V0ZXItdmlldyAvPlxuICAgIDwvcS1wYWdlLWNvbnRhaW5lcj5cblxuICAgIDxWVG91ciA6c3RlcHM9XCJ0b3VyU3RlcHNcIiBoaWdobGlnaHQgcmVmPVwidnVlVG91clwiIC8+XG5cbiAgPC9xLWxheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgcmVmLCBjb21wdXRlZCwgb25Nb3VudGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInXG4gIGltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnXG4gIGltcG9ydCB7IFJvdXRlTG9jYXRpb25SYXcgfSBmcm9tICd2dWUtcm91dGVyJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgeyB1c2VJbnRlcmZhY2VTdG9yZSB9IGZyb20gJ3N0b3Jlcy9pbnRlcmZhY2UnXG4gIGltcG9ydCB7IHN0b3JlUHJvamVjdCB9IGZyb20gJ3N0b3Jlcy9zdG9yYWdlJ1xuICBpbXBvcnQgTm90ZUljb24gZnJvbSAnY29tcG9uZW50cy9Ob3RlSWNvbi52dWUnXG4gIGltcG9ydCB7IFZUb3VyIH0gZnJvbSAnQGdsb2JhbGhpdmUvdnVlanMtdG91cidcbiAgaW1wb3J0ICcuL3ZqdC1zdHlsZS5jc3MnXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuICBkZWZpbmVPcHRpb25zKHtcbiAgICAgIG5hbWU6ICdNYWluTGF5b3V0J1xuICB9KVxuXG4gIGludGVyZmFjZSBNZW51SXRlbSB7XG4gICAgICBsYWJlbDogc3RyaW5nXG4gICAgICBpY29uPzogc3RyaW5nXG4gICAgICBsaW5rPzogUm91dGVMb2NhdGlvblJhd1xuICAgICAgYWN0aW9uPzogb2JqZWN0XG4gICAgICBzZXBhcmF0b3I/OiBib29sZWFuXG4gICAgICBocmVmPzogc3RyaW5nXG4gIH1cblxuICBjb25zdCAkcSA9IHVzZVF1YXNhcigpXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IGlzdG9yZSA9IHVzZUludGVyZmFjZVN0b3JlKClcblxuICBjb25zdCB7XG4gICAgICBjdXJyZW50SW50ZXJ2aWV3LFxuICAgICAgY3VycmVudFByb2plY3RJZCxcbiAgICAgIGlzTW9kaWZpZWQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGlzRXhwZXJ0TW9kZVxuICB9ID0gc3RvcmVUb1JlZnMoaXN0b3JlKVxuXG4gIGNvbnN0IHZ1ZVRvdXIgPSByZWYoKVxuXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0SWQudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gc3RvcmUuZ2V0UHJvamVjdChjdXJyZW50UHJvamVjdElkLnZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGlzRGV2ZWxvcG1lbnQgPSBjb21wdXRlZCgoKSA9PiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSA9PSAnbG9jYWxob3N0J1xuICAgICAgfHwgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJy91cG10L2RldicpKVxuXG4gIGNvbnN0IG1lbnVMaXN0ID0gY29tcHV0ZWQ8TWVudUl0ZW1bXT4oKCkgPT4ge1xuICAgICAgbGV0IG1lbnU6IE1lbnVJdGVtW10gPSBbXG4gICAgICBdXG5cbiAgICAgIGlmIChjdXJyZW50UHJvamVjdElkLnZhbHVlKSB7XG4gICAgICAgICAgbWVudS5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiUHJvamVjdCBlZGl0b3JcIixcbiAgICAgICAgICAgICAgaWNvbjogJ21kaS1zZW1hbnRpYy13ZWInLFxuICAgICAgICAgICAgICBsaW5rOiBgL3Byb2plY3QvJHtjdXJyZW50UHJvamVjdElkLnZhbHVlfWBcbiAgICAgICAgICB9KVxuICAgICAgICAgIG1lbnUucHVzaCh7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkdsb2JhbCBkaWFjaHJvbmljXCIsXG4gICAgICAgICAgICAgIGljb246ICdtZGktdGFibGUnLFxuICAgICAgICAgICAgICBsaW5rOiBgL3NwcmVhZHNoZWV0LyR7Y3VycmVudFByb2plY3RJZC52YWx1ZX1gXG4gICAgICAgICAgfSlcbiAgICAgICAgICBtZW51LnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogXCJFcGlzb2RlIGFuYWx5c2lzXCIsXG4gICAgICAgICAgICAgIGljb246ICdtZGktdGFibGUnLFxuICAgICAgICAgICAgICBsaW5rOiBgL2VwaXNvZGVzLyR7Y3VycmVudFByb2plY3RJZC52YWx1ZX1gXG4gICAgICAgICAgfSlcbiAgICAgICAgICBtZW51LnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogXCJTeW5jaHJvbmljIGdyYXBoXCIsXG4gICAgICAgICAgICAgIGljb246ICdtZGktZ3JhcGgnLFxuICAgICAgICAgICAgICBsaW5rOiBgL3N5bmNocm9uaWMtZ3JhcGgvJHtjdXJyZW50UHJvamVjdElkLnZhbHVlfWBcbiAgICAgICAgICB9KVxuICAgICAgICAgIG1lbnUucHVzaCh7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlN5bmNocm9uaWMgTW9kZWxzXCIsXG4gICAgICAgICAgICAgIGljb246ICdtZGktZ3JhcGgnLFxuICAgICAgICAgICAgICBsaW5rOiBgL21vZGVscy8ke2N1cnJlbnRQcm9qZWN0SWQudmFsdWV9YFxuICAgICAgICAgIH0pXG4gICAgICAgICAgbWVudS5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU3BlY2lmaWMgU3luY2hyb25pYyBDYXRlZ29yaWVzXCIsXG4gICAgICAgICAgICAgIGljb246ICdtZGktdGFibGUnLFxuICAgICAgICAgICAgICBsaW5rOiBgL3NwZWNpZmljc3luY2hyb25pY2NhdGVnb3JpZXMvJHtjdXJyZW50UHJvamVjdElkLnZhbHVlfWBcbiAgICAgICAgICB9KVxuICAgICAgICAgIG1lbnUucHVzaCh7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0ZW1zXCIsXG4gICAgICAgICAgICAgIGljb246ICdtZGktZm9ybWF0LXF1b3RlLWNsb3NlLW91dGxpbmUnLFxuICAgICAgICAgICAgICBsaW5rOiBgL2Rlc2NyaXB0ZW1zLyR7Y3VycmVudFByb2plY3RJZC52YWx1ZX1gXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmIChpc0V4cGVydE1vZGUudmFsdWUpIHtcbiAgICAgICAgICBtZW51ID0gbWVudS5jb25jYXQoW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogJ0RlYnVnJyxcbiAgICAgICAgICAgICAgICAgIGljb246ICdtZGktZXllJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvZGVidWcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICB9XG4gICAgICByZXR1cm4gbWVudVxuICB9KVxuXG4gIGNvbnN0IGxlZnREcmF3ZXJPcGVuID0gcmVmKGZhbHNlKVxuICBjb25zdCByaWdodERyYXdlck9wZW4gPSByZWYoZmFsc2UpXG5cbiAgZnVuY3Rpb24gdG9nZ2xlTGVmdERyYXdlciAoKSB7XG4gICAgICBsZWZ0RHJhd2VyT3Blbi52YWx1ZSA9ICFsZWZ0RHJhd2VyT3Blbi52YWx1ZVxuICB9XG5cbiAgY29uc3QgaXNBbm9ueW1vdXMgPSBjb21wdXRlZCgoKSA9PiAodXNlcm5hbWUudmFsdWUgPT0gJycgfHwgdXNlcm5hbWUudmFsdWUgPT0gJ2Fub255bW91cycpKVxuXG4gIGZ1bmN0aW9uIGRvU3RvcmVQcm9qZWN0ICgpIHtcbiAgICAgIGlmIChjdXJyZW50UHJvamVjdElkLnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgYmFzZW5hbWUgPSBzdG9yZVByb2plY3QoY3VycmVudFByb2plY3RJZC52YWx1ZSlcbiAgICAgICAgICBpc3RvcmUuc2V0TW9kaWZpZWQoZmFsc2UpXG4gICAgICAgICAgJHEubm90aWZ5KHtcbiAgICAgICAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBgU3RvcmVkIGFzICR7YmFzZW5hbWV9YFxuICAgICAgICAgIH0pXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkdsb2JhbEtleWRvd24gKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09PSA4MyAvKiBTICovKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgKGlzTW9kaWZpZWQudmFsdWUpIHtcbiAgICAgICAgICAgICAgZG9TdG9yZVByb2plY3QoKVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFib3V0KCkge1xuICAgICAgbGV0IG1lc3NhZ2UgPSAnRGV2ZWxvcG1lbnQgdmVyc2lvbidcbiAgICAgIHZvaWQgYXhpb3MuZ2V0KCcuL3ZlcnNpb24udHh0JykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGFydHNXaXRoKCdWRVJTSU9OJykpIHtcbiAgICAgICAgICAgICAgLy8gV2UgYXJlIHJlYXNvbmFibHkgc3VyZSB3ZSBoYXZlIGEgVkVSU0lPTiBmaWxlLlxuICAgICAgICAgICAgICBjb25zdCBbXywgdmVyc2lvbiwgZGF0ZV0gPSByZXNwb25zZS5kYXRhLnJlcGxhY2UoL1teYS16MC05XzogListXS9naW0sIFwiXCIpLnNwbGl0KClcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IGBWZXJzaW9uIDxzdHJvbmc+JHt2ZXJzaW9ufTwvc3Ryb25nPlxcbkRhdGUgPHN0cm9uZz4ke2RhdGV9PC9zdHJvbmc+YFxuICAgICAgICAgIH1cbiAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICRxLmRpYWxvZyh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnQWJvdXQgzrxQTVQuLi4nLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBgPHA+PHN0cm9uZz7OvFBNVDwvc3Ryb25nPiAtIG1pY3JvIFBoZW5vbWVub2xvZ3kgTW9kZWxsaW5nIFRvb2w8L3A+XFxuPHA+JHttZXNzYWdlfTwvcD5gLFxuICAgICAgICAgICAgICBodG1sOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLm9uRGlzbWlzcygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnSSBhbSB0cmlnZ2VyZWQgb24gYm90aCBPSyBhbmQgQ2FuY2VsJylcbiAgICAgICAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgbGVmdERyYXdlck9wZW4udmFsdWUgPSBmYWxzZVxuICAgICAgcmlnaHREcmF3ZXJPcGVuLnZhbHVlID0gZmFsc2VcbiAgICAgIC8vIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL3F1YXNhcmZyYW1ld29yay9xdWFzYXIvYmxvYi9kZXYvZG9jcy9zcmMvbGF5b3V0cy9kb2MtbGF5b3V0L0RvY1NlYXJjaC52dWUjTDI5NlxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbkdsb2JhbEtleWRvd24pXG4gIH0pXG5cbiAgY29uc3QgdG91clN0ZXBzID0gW1xuICAgICAge1xuICAgICAgICAgIHRhcmdldDogJ2J1dHRvblthcmlhLWxhYmVsPVwiTWVudVwiXScsXG4gICAgICAgICAgY29udGVudDogJ1RoZSBoYW1idXJnZXIgbWVudSBnaXZlcyBhY2Nlc3MgdG8gbXVsdGlwbGUgdmlld3MnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIHRhcmdldDogJy5hcHAtdGl0bGUnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdUaGUgdG9vbGJhciBzaG93cyB0aGUgbG9hZGVkIHBhY2thZ2UgdGl0bGUsIGFuZCB0aGUgY3VycmVudCBpbnRlcnZpZXcgdGl0bGUgaWYgYW4gaW50ZXJ2aWV3IGlzIGFjdGl2ZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgdGFyZ2V0OiAnYnV0dG9uW2FyaWEtbGFiZWw9XCJMb2dpblwiXScsXG4gICAgICAgICAgY29udGVudDogJ1RoaXMgaWNvbiBhbGxvd3MgeW91IHRvIHNldCB5b3VyIG5hbWUgc28gdGhhdCBhdXRob3JzaGlwIGluZm9ybWF0aW9uIGlzIGNvcnJlY3RseSByZWNvcmRlZC4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIHRhcmdldDogJy51cG10LWludGVydmlld3MnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdUaGlzIHBsYWNlIGxpc3RzIHRoZSBkZWZpbmVkIGludGVydmlld3MnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICB0YXJnZXQ6ICcuZGV0YWNoZWRtb2RlbHMtY29udGFpbmVyJyxcbiAgICAgICAgICBjb250ZW50OiAnRGV0YWNoZWQgbW9kZWxzIGFsbG93IHRvIGRlZmluZSBzeW5jaHJvbmljIG1vZGVsIGVsZW1lbnQgdGhhdCBhcmUgbm90IGxpbmtlZCB0byBhIGdpdmVuIGludGVydmlldy4nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICB0YXJnZXQ6ICcuZ2VuZXJpY2NhdGVnb3JpZXMtY29udGFpbmVyJyxcbiAgICAgICAgICBjb250ZW50OiAnVGhlIGdlbmVyaWMgbW9kZWwgaXMgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIGJ5IGFkZGluZyBhbGwgZGVmaW5lZCBzeW5jaHJvbmljIG1vZGVscyAobGlua2VkIHRvIGludGVydmlld3Mgb3IgZGV0YWNoZWQgbW9kZWxzKS4nLFxuICAgICAgfSxcbiAgXVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuLmFub255bW91cyB7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5uZWVkcy1zYXZlIHtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsib2Zmc2V0IiwiaGVpZ2h0Iiwid2lkdGgiLCJoIiwiZWFzZUluT3V0UXVhZCIsImp1bXBlciIsImVsZW1lbnQiLCJiZSIsInYiLCJkIiwidWUiLCJKIiwiUSIsIkkiLCJOIiwiQ2UiLCJBZSIsIlNlIiwid2UiLCJUZSIsInciLCJrZSIsIiRlIiwiVCIsIkxlIiwieGUiLCJMIiwiQyIsIngiLCJzZSIsIlUiLCJfY3JlYXRlQmxvY2siLCJfbm9ybWFsaXplQ2xhc3MiLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl93aXRoTW9kaWZpZXJzIiwiX3dpdGhLZXlzIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfd2l0aERpcmVjdGl2ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBUUEsTUFBQSxVQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLFlBQVk7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNmO0FBQUEsSUFDSSxRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsTUFDWixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDZjtBQUFBLElBQ0ksVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBRVYsWUFBWTtBQUFBLE1BQ1YsTUFBTSxDQUFFLFFBQVEsTUFBTTtBQUFBLE1BQ3RCLFNBQVM7QUFBQSxJQUNmO0FB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QUssR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sS0FBSyxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLEtBQUssR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLEtBQUssR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLEtBQUssR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLO0FBQUEsRUFDLzRCLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7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QSxZQUFXLFNBQUFDLFFBQ3hCLE1BR1M7QUFBQSxjQUhURCxZQUdTLE9BQUEsTUFBQTtBQUFBLGdCQUFBLFNBQUFDLFFBRlAsTUFDcUI7QUFBQSxrQkFEckJELFlBQ3FCLFFBQUE7QUFBQSxvQkFBQSxZQURILE9BQUE7QUFBQSxvQkFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxXQUFRO0FBQUEsb0JBQ2pCLFdBQUE7QUFBQSxrQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7TUFLZkEsWUFFbUIsZ0JBQUEsTUFBQTtBQUFBLFFBQUEsU0FBQUMsUUFEakIsTUFBZTtBQUFBLFVBQWZELFlBQWUsc0JBQUE7QUFBQSxRQUFBLENBQUE7QUFBQTs7TUFHakJBLFlBQW9ELE9BQUEsT0FBQSxHQUFBO0FBQUEsUUFBNUMsT0FBTyxPQUFBO0FBQUEsUUFBVyxXQUFBO0FBQUEsUUFBVSxLQUFJO0FBQUEsTUFBQSxHQUFBLE1BQUEsR0FBQTtBQUFBOzs7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsMyw0LDUsNiw3LDhdfQ==
