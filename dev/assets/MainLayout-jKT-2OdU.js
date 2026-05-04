import { c as createComponent, g as getCurrentInstance, D as inject, E as emptyRenderFn, F as layoutKey, r as ref, b as computed, w as watch, t as onBeforeUnmount, bq as hUniqueSlot, h, V as withDirectives, bm as listenOpts, s as scrollTargetProp, y as getScrollTarget, O as onMounted, aJ as noop, bI as getVerticalScrollPosition, bJ as getHorizontalScrollPosition, u as useDarkProps, f as useDark, aK as debounce, bK as setHorizontalScrollPosition, aj as onDeactivated, ak as onActivated, bL as setVerticalScrollPosition, e as hMergeSlot, i as hSlot, an as provide, G as pageContainerKey, bo as getScrollbarWidth, by as isRuntimeSsrPreHydration, bM as reactive, bN as onUnmounted, H as defineComponent, J as useInterfaceStore, _ as _export_sfc, K as createBlock, L as openBlock, M as withCtx, R as createVNode, ab as QCard, a9 as createBaseVNode, ac as QCardSection, aG as QSeparator, W as createTextVNode, X as toDisplayString, bg as QCheckbox, bO as QCardActions, Q as QBtn, aR as QDialog, af as normalizeStyle, P as createElementBlock, N as createCommentVNode, aV as renderSlot, ad as normalizeClass, bP as Teleport, ai as nextTick, Y as withModifiers, I as useProjectStore, bf as storeToRefs, aZ as useHistory, bQ as storeProject, a as axios, ae as resolveComponent, a7 as QIcon, be as QInput, aq as withKeys, S as Fragment, U as renderList, a6 as Ripple } from "./index-DF_kf-vE.js";
import { Q as QToolbarTitle, a as QDrawer, b as QForm } from "./QForm-N_XV4wA_.js";
import { Q as QTooltip } from "./QTooltip-D_9ZF6WP.js";
import { g as between, Q as QMenu, f as QItem, h as QItemSection } from "./format-DDZ-xwpi.js";
import { b as QResizeObserver, T as TouchPan, a as QSlider, N as NoteIcon, Q as QPopupEdit } from "./QSlider-DTzq2Pr_.js";
import { Q as QList } from "./QList-DaiQNQiC.js";
import { Q as QToolbar } from "./QToolbar-Btg_9e8W.js";
import { u as useQuasar, C as ClosePopup } from "./use-quasar-CgIzz1mJ.js";
import { Q as QBadge } from "./QBadge-DMI6OGEY.js";
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
const trueFn = () => true;
function getEmitsObject(emitsArray) {
  const emitsObject = {};
  emitsArray.forEach((val) => {
    emitsObject[val] = trueFn;
  });
  return emitsObject;
}
function useDialogPluginComponent() {
  const { emit, proxy } = getCurrentInstance();
  const dialogRef = ref(null);
  function show() {
    dialogRef.value.show();
  }
  function hide() {
    dialogRef.value.hide();
  }
  function onDialogOK(payload) {
    emit("ok", payload);
    hide();
  }
  function onDialogHide() {
    emit("hide");
  }
  Object.assign(proxy, { show, hide });
  return {
    dialogRef,
    onDialogHide,
    onDialogOK,
    onDialogCancel: hide
  };
}
const emits = ["ok", "hide"];
useDialogPluginComponent.emits = emits;
useDialogPluginComponent.emitsObject = getEmitsObject(emits);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SettingsEditor",
  emits: [
    ...useDialogPluginComponent.emits
  ],
  setup(__props, { expose: __expose }) {
    __expose();
    const istore = useInterfaceStore();
    const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent();
    const __returned__ = { istore, dialogRef, onDialogHide, onDialogOK };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "col" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QDialog, {
    ref: "dialogRef",
    onHide: $setup.onDialogHide
  }, {
    default: withCtx(() => [
      createVNode(QCard, { class: "settings-editor" }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [..._cache[3] || (_cache[3] = [
              createBaseVNode("div", { class: "text-h6" }, " Settings ", -1)
            ])]),
            _: 1
          }),
          createVNode(QSeparator),
          createVNode(QBadge, { color: "primary" }, {
            default: withCtx(() => [
              createTextVNode(" Zoom sensitivity: " + toDisplayString($setup.istore.settings.zoomStep) + " (0.05 to 0.5) ", 1)
            ]),
            _: 1
          }),
          createVNode(QSlider, {
            class: "q-py-lg",
            min: 0.05,
            max: 0.5,
            step: 0.05,
            label: "",
            "label-always": "",
            "switch-label-side": "",
            modelValue: $setup.istore.settings.zoomStep,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.istore.settings.zoomStep = $event)
          }, null, 8, ["modelValue"]),
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(QCheckbox, {
              dense: "",
              label: "Touch lock",
              modelValue: $setup.istore.settings.zoomTouchLock,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.istore.settings.zoomTouchLock = $event)
            }, {
              default: withCtx(() => [
                createVNode(QTooltip, null, {
                  default: withCtx(() => [..._cache[4] || (_cache[4] = [
                    createTextVNode("When true, pan or zoom requires touch using two fingers.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"]),
            createVNode(QCheckbox, {
              dense: "",
              label: "Wheel lock",
              modelValue: $setup.istore.settings.zoomWheelLock,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.istore.settings.zoomWheelLock = $event)
            }, {
              default: withCtx(() => [
                createVNode(QTooltip, null, {
                  default: withCtx(() => [..._cache[5] || (_cache[5] = [
                    createTextVNode("When true, zoom using wheel is disabled until Control is pressed..", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          createVNode(QCardActions, { align: "right" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                color: "primary",
                label: "OK",
                onClick: $setup.onDialogOK
              }, null, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["onHide"]);
}
const SettingsEditor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-a399e8a9"], ["__file", "SettingsEditor.vue"]]);
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
    const history = useHistory();
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
    function doUndo() {
      history.undo();
    }
    function doRedo() {
      history.redo();
    }
    function onGlobalKeydown(e) {
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        if (isModified.value) {
          doStoreProject();
        }
      }
    }
    function editSettings() {
      $q.dialog({
        component: SettingsEditor
      }).onDismiss(() => {
        console.log("Called on OK or Cancel");
      });
    }
    function about() {
      let message = "Development version";
      void axios.get("./version.txt").then((response) => {
        const m = response.data.match(/^VERSION\s(?<sha>[a-z0-9]+)\s(?<date>.+)/);
        if (m) {
          message = `Version <strong>${m.groups.sha}</strong>
Date <strong>${m.groups.date}</strong>`;
        } else {
          message = `No valid version information found`;
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
      window.appHistory = history;
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
        content: "This icon gives you access to your profile information and settings, as well as basic help/about information."
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
    const __returned__ = { $q, store, istore, currentInterview, currentProjectId, isModified, username, isExpertMode, vueTour, currentProject, history, isDevelopment, menuList, leftDrawerOpen, rightDrawerOpen, toggleLeftDrawer, isAnonymous, doStoreProject, doUndo, doRedo, onGlobalKeydown, editSettings, about, tourSteps, NoteIcon, get VTour() {
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
                  ])) : createCommentVNode("", true),
                  createBaseVNode("span", null, [
                    createVNode(QBtn, {
                      title: `${$setup.history.undoStack.length} items`,
                      disable: !$setup.history.undoStack.length,
                      onClick: $setup.doUndo,
                      icon: "mdi-undo"
                    }, null, 8, ["title", "disable"]),
                    createVNode(QBtn, {
                      title: $setup.history.redoStack.length,
                      disable: !$setup.history.redoStack.length,
                      onClick: $setup.doRedo,
                      icon: "mdi-redo"
                    }, null, 8, ["title", "disable"])
                  ])
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
                                      createVNode(QIcon, {
                                        name: "mdi-account",
                                        size: "xs",
                                        dense: ""
                                      }),
                                      _cache[15] || (_cache[15] = createTextVNode(" Identified as ", -1)),
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
                              onClick: $setup.editSettings
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [..._cache[17] || (_cache[17] = [
                                    createTextVNode("Edit settings", -1)
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
                              onClick: _cache[4] || (_cache[4] = ($event) => {
                                $setup.leftDrawerOpen = false;
                                $setup.vueTour.startTour();
                              })
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [..._cache[18] || (_cache[18] = [
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
                                  default: withCtx(() => [..._cache[19] || (_cache[19] = [
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
                                  default: withCtx(() => [..._cache[20] || (_cache[20] = [
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
const MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-71628f45"], ["__file", "MainLayout.vue"]]);
export {
  MainLayout as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC1qS1QtMk9kVS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9oZWFkZXIvUUhlYWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2Nyb2xsLWFyZWEvU2Nyb2xsQXJlYUNvbnRyb2xzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zY3JvbGwtYXJlYS9RU2Nyb2xsQXJlYS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcGFnZS9RUGFnZUNvbnRhaW5lci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvbGF5b3V0L1FMYXlvdXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlLmdldC1lbWl0cy1vYmplY3QvZ2V0LWVtaXRzLW9iamVjdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3VzZS1kaWFsb2ctcGx1Z2luLWNvbXBvbmVudC91c2UtZGlhbG9nLXBsdWdpbi1jb21wb25lbnQuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TZXR0aW5nc0VkaXRvci52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmFub3BvcC9kaXN0L25hbm9wb3AubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2p1bXAuanMvZGlzdC9qdW1wLm1vZHVsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZ2xvYmFsaGl2ZS92dWVqcy10b3VyL2Rpc3QvdnVlanMtdG91ci5qcyIsIi4uLy4uLy4uL3NyYy9sYXlvdXRzL01haW5MYXlvdXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhVbmlxdWVTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zeW1ib2xzL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRSGVhZGVyJyxcblxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICByZXZlYWw6IEJvb2xlYW4sXG4gICAgcmV2ZWFsT2Zmc2V0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAyNTBcbiAgICB9LFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIGVsZXZhdGVkOiBCb29sZWFuLFxuXG4gICAgaGVpZ2h0SGludDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogNTBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3JldmVhbCcsICdmb2N1c2luJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4pXG4gICAgaWYgKCRsYXlvdXQgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FIZWFkZXIgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgICByZXR1cm4gZW1wdHlSZW5kZXJGblxuICAgIH1cblxuICAgIGNvbnN0IHNpemUgPSByZWYocGFyc2VJbnQocHJvcHMuaGVpZ2h0SGludCwgMTApKVxuICAgIGNvbnN0IHJldmVhbGVkID0gcmVmKHRydWUpXG5cbiAgICBjb25zdCBmaXhlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5yZXZlYWwgPT09IHRydWVcbiAgICAgIHx8ICRsYXlvdXQudmlldy52YWx1ZS5pbmRleE9mKCdIJykgIT09IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmV2ZWFsZWQudmFsdWUgPT09IHRydWUgPyBzaXplLnZhbHVlIDogMFxuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2l6ZS52YWx1ZSAtICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1oZWFkZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy10b3AnXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1oZWFkZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWhlYWRlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZSA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICB2aWV3ID0gJGxheW91dC5yb3dzLnZhbHVlLnRvcCxcbiAgICAgICAgY3NzID0ge31cblxuICAgICAgaWYgKHZpZXdbIDAgXSA9PT0gJ2wnICYmICRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdID0gYCR7ICRsYXlvdXQubGVmdC5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3WyAyIF0gPT09ICdyJyAmJiAkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF0gPSBgJHsgJGxheW91dC5yaWdodC5zaXplIH1weGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUoJ2hlYWRlcicsIHByb3AsIHZhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbCAocHJvcCwgdmFsKSB7XG4gICAgICBpZiAocHJvcC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIHByb3AudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgdXBkYXRlTG9jYWwoc2l6ZSwgaGVpZ2h0KVxuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgaGVpZ2h0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNpbiAoZXZ0KSB7XG4gICAgICBpZiAocmV2ZWFsT25Gb2N1cy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgZW1pdCgnZm9jdXNpbicsIGV2dClcbiAgICB9XG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICB9KVxuXG4gICAgd2F0Y2gob2Zmc2V0LCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnJldmVhbCwgdmFsID0+IHtcbiAgICAgIHZhbCA9PT0gZmFsc2UgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHByb3BzLm1vZGVsVmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKHJldmVhbGVkLCB2YWwgPT4ge1xuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICAgIGVtaXQoJ3JldmVhbCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goJGxheW91dC5zY3JvbGwsIHNjcm9sbCA9PiB7XG4gICAgICBwcm9wcy5yZXZlYWwgPT09IHRydWUgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsXG4gICAgICAgIHNjcm9sbC5kaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgfHwgc2Nyb2xsLnBvc2l0aW9uIDw9IHByb3BzLnJldmVhbE9mZnNldFxuICAgICAgICB8fCBzY3JvbGwucG9zaXRpb24gLSBzY3JvbGwuaW5mbGVjdGlvblBvaW50IDwgMTAwXG4gICAgICApXG4gICAgfSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge31cblxuICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IGluc3RhbmNlXG4gICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVMYXlvdXQoJ3NpemUnLCBzaXplLnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlcy5oZWFkZXIgPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG5cbiAgICAgIHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0X19zaGFkb3cgYWJzb2x1dGUtZnVsbCBvdmVyZmxvdy1oaWRkZW4gbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgb25SZXNpemVcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2hlYWRlcicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgb25Gb2N1c2luXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCB3aXRoRGlyZWN0aXZlcyB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuXG4vKipcbiAqIFdlIGFyZSB1c2luZyBhIHN1Yi1jb21wb25lbnQgdG8gYXZvaWQgdW5uZWNlc3NhcnkgcmUtcmVuZGVyc1xuICogb2YgdGhlIFFTY3JvbGxBcmVhIGNvbnRlbnQgd2hlbiB0aGUgc2Nyb2xsYmFycyBhcmUgaW50ZXJhY3RlZCB3aXRoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBwcm9wczogW1xuICAgICdzdG9yZScsXG4gICAgJ2JhclN0eWxlJyxcbiAgICAndmVydGljYWxCYXJTdHlsZScsXG4gICAgJ2hvcml6b250YWxCYXJTdHlsZSdcbiAgXSxcblxuICBzZXR1cCAocHJvcHMpIHtcbiAgICByZXR1cm4gKCkgPT4gKFtcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IHByb3BzLnN0b3JlLnNjcm9sbC52ZXJ0aWNhbC5iYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IFsgcHJvcHMuYmFyU3R5bGUsIHByb3BzLnZlcnRpY2FsQmFyU3R5bGUgXSxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICBvbk1vdXNlZG93bjogcHJvcHMuc3RvcmUub25WZXJ0aWNhbE1vdXNlZG93blxuICAgICAgfSksXG5cbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IHByb3BzLnN0b3JlLnNjcm9sbC5ob3Jpem9udGFsLmJhckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogWyBwcm9wcy5iYXJTdHlsZSwgcHJvcHMuaG9yaXpvbnRhbEJhclN0eWxlIF0sXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgb25Nb3VzZWRvd246IHByb3BzLnN0b3JlLm9uSG9yaXpvbnRhbE1vdXNlZG93blxuICAgICAgfSksXG5cbiAgICAgIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgcmVmOiBwcm9wcy5zdG9yZS5zY3JvbGwudmVydGljYWwucmVmLFxuICAgICAgICAgIGNsYXNzOiBwcm9wcy5zdG9yZS5zY3JvbGwudmVydGljYWwudGh1bWJDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuc3RvcmUuc2Nyb2xsLnZlcnRpY2FsLnN0eWxlLnZhbHVlLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9KSxcbiAgICAgICAgcHJvcHMuc3RvcmUudGh1bWJWZXJ0RGlyXG4gICAgICApLFxuXG4gICAgICB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogcHJvcHMuc3RvcmUuc2Nyb2xsLmhvcml6b250YWwucmVmLFxuICAgICAgICAgIGNsYXNzOiBwcm9wcy5zdG9yZS5zY3JvbGwuaG9yaXpvbnRhbC50aHVtYkNsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5zdG9yZS5zY3JvbGwuaG9yaXpvbnRhbC5zdHlsZS52YWx1ZSxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSksXG4gICAgICAgIHByb3BzLnN0b3JlLnRodW1iSG9yaXpEaXJcbiAgICAgIClcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgd2F0Y2gsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldFNjcm9sbFRhcmdldCwgZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiwgZ2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uLCBzY3JvbGxUYXJnZXRQcm9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsL3Njcm9sbC5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMsIG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcblxuY29uc3QgeyBwYXNzaXZlIH0gPSBsaXN0ZW5PcHRzXG5jb25zdCBheGlzVmFsdWVzID0gWyAnYm90aCcsICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU2Nyb2xsT2JzZXJ2ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgYXhpczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IGF4aXNWYWx1ZXMuaW5jbHVkZXModiksXG4gICAgICBkZWZhdWx0OiAndmVydGljYWwnXG4gICAgfSxcblxuICAgIGRlYm91bmNlOiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgICBzY3JvbGxUYXJnZXQ6IHNjcm9sbFRhcmdldFByb3BcbiAgfSxcblxuICBlbWl0czogWyAnc2Nyb2xsJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBjb25zdCBzY3JvbGwgPSB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH0sXG5cbiAgICAgIGRpcmVjdGlvbjogJ2Rvd24nLFxuICAgICAgZGlyZWN0aW9uQ2hhbmdlZDogZmFsc2UsXG5cbiAgICAgIGRlbHRhOiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfSxcblxuICAgICAgaW5mbGVjdGlvblBvaW50OiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjbGVhclRpbWVyID0gbnVsbCwgbG9jYWxTY3JvbGxUYXJnZXQsIHBhcmVudEVsXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zY3JvbGxUYXJnZXQsICgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGVtaXRFdmVudCAoKSB7XG4gICAgICBjbGVhclRpbWVyPy4oKVxuXG4gICAgICBjb25zdCB0b3AgPSBNYXRoLm1heCgwLCBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KSlcbiAgICAgIGNvbnN0IGxlZnQgPSBnZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQpXG5cbiAgICAgIGNvbnN0IGRlbHRhID0ge1xuICAgICAgICB0b3A6IHRvcCAtIHNjcm9sbC5wb3NpdGlvbi50b3AsXG4gICAgICAgIGxlZnQ6IGxlZnQgLSBzY3JvbGwucG9zaXRpb24ubGVmdFxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIChwcm9wcy5heGlzID09PSAndmVydGljYWwnICYmIGRlbHRhLnRvcCA9PT0gMClcbiAgICAgICAgfHwgKHByb3BzLmF4aXMgPT09ICdob3Jpem9udGFsJyAmJiBkZWx0YS5sZWZ0ID09PSAwKVxuICAgICAgKSByZXR1cm5cblxuICAgICAgY29uc3QgY3VyRGlyID0gTWF0aC5hYnMoZGVsdGEudG9wKSA+PSBNYXRoLmFicyhkZWx0YS5sZWZ0KVxuICAgICAgICA/IChkZWx0YS50b3AgPCAwID8gJ3VwJyA6ICdkb3duJylcbiAgICAgICAgOiAoZGVsdGEubGVmdCA8IDAgPyAnbGVmdCcgOiAncmlnaHQnKVxuXG4gICAgICBzY3JvbGwucG9zaXRpb24gPSB7IHRvcCwgbGVmdCB9XG4gICAgICBzY3JvbGwuZGlyZWN0aW9uQ2hhbmdlZCA9IHNjcm9sbC5kaXJlY3Rpb24gIT09IGN1ckRpclxuICAgICAgc2Nyb2xsLmRlbHRhID0gZGVsdGFcblxuICAgICAgaWYgKHNjcm9sbC5kaXJlY3Rpb25DaGFuZ2VkID09PSB0cnVlKSB7XG4gICAgICAgIHNjcm9sbC5kaXJlY3Rpb24gPSBjdXJEaXJcbiAgICAgICAgc2Nyb2xsLmluZmxlY3Rpb25Qb2ludCA9IHNjcm9sbC5wb3NpdGlvblxuICAgICAgfVxuXG4gICAgICBlbWl0KCdzY3JvbGwnLCB7IC4uLnNjcm9sbCB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IGdldFNjcm9sbFRhcmdldChwYXJlbnRFbCwgcHJvcHMuc2Nyb2xsVGFyZ2V0KVxuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdHJpZ2dlciwgcGFzc2l2ZSlcbiAgICAgIHRyaWdnZXIodHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0cmlnZ2VyLCBwYXNzaXZlKVxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IHZvaWQgMFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXIgKGltbWVkaWF0ZWx5KSB7XG4gICAgICBpZiAoaW1tZWRpYXRlbHkgPT09IHRydWUgfHwgcHJvcHMuZGVib3VuY2UgPT09IDAgfHwgcHJvcHMuZGVib3VuY2UgPT09ICcwJykge1xuICAgICAgICBlbWl0RXZlbnQoKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY2xlYXJUaW1lciA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBbIHRpbWVyLCBmbiBdID0gcHJvcHMuZGVib3VuY2VcbiAgICAgICAgICA/IFsgc2V0VGltZW91dChlbWl0RXZlbnQsIHByb3BzLmRlYm91bmNlKSwgY2xlYXJUaW1lb3V0IF1cbiAgICAgICAgICA6IFsgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGVtaXRFdmVudCksIGNhbmNlbEFuaW1hdGlvbkZyYW1lIF1cblxuICAgICAgICBjbGVhclRpbWVyID0gKCkgPT4ge1xuICAgICAgICAgIGZuKHRpbWVyKVxuICAgICAgICAgIGNsZWFyVGltZXIgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgd2F0Y2goKCkgPT4gcHJveHkuJHEubGFuZy5ydGwsIGVtaXRFdmVudClcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBwYXJlbnRFbCA9IHByb3h5LiRlbC5wYXJlbnROb2RlXG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lcj8uKClcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgdHJpZ2dlcixcbiAgICAgIGdldFBvc2l0aW9uOiAoKSA9PiBzY3JvbGxcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5vb3BcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkFjdGl2YXRlZCwgb25EZWFjdGl2YXRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWRhcmsvdXNlLWRhcmsuanMnXG5cbmltcG9ydCBTY3JvbGxBcmVhQ29udHJvbHMgZnJvbSAnLi9TY3JvbGxBcmVhQ29udHJvbHMuanMnXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5pbXBvcnQgUVNjcm9sbE9ic2VydmVyIGZyb20gJy4uL3Njcm9sbC1vYnNlcnZlci9RU2Nyb2xsT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoLXBhbi9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC9mb3JtYXQuanMnXG5pbXBvcnQgeyBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLCBzZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZS9kZWJvdW5jZS5qcydcblxuY29uc3QgYXhpc0xpc3QgPSBbICd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJyBdXG5jb25zdCBkaXJQcm9wcyA9IHtcbiAgdmVydGljYWw6IHsgb2Zmc2V0OiAnb2Zmc2V0WScsIHNjcm9sbDogJ3Njcm9sbFRvcCcsIGRpcjogJ2Rvd24nLCBkaXN0OiAneScgfSxcbiAgaG9yaXpvbnRhbDogeyBvZmZzZXQ6ICdvZmZzZXRYJywgc2Nyb2xsOiAnc2Nyb2xsTGVmdCcsIGRpcjogJ3JpZ2h0JywgZGlzdDogJ3gnIH1cbn1cbmNvbnN0IHBhbk9wdHMgPSB7XG4gIHByZXZlbnQ6IHRydWUsXG4gIG1vdXNlOiB0cnVlLFxuICBtb3VzZUFsbERpcjogdHJ1ZVxufVxuXG5jb25zdCBnZXRNaW5UaHVtYlNpemUgPSBzaXplID0+IChzaXplID49IDI1MCA/IDUwIDogTWF0aC5jZWlsKHNpemUgLyA1KSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTY3JvbGxBcmVhJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIHRodW1iU3R5bGU6IE9iamVjdCxcbiAgICB2ZXJ0aWNhbFRodW1iU3R5bGU6IE9iamVjdCxcbiAgICBob3Jpem9udGFsVGh1bWJTdHlsZTogT2JqZWN0LFxuXG4gICAgYmFyU3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgdmVydGljYWxCYXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBob3Jpem9udGFsQmFyU3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG5cbiAgICB2ZXJ0aWNhbE9mZnNldDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBbIDAsIDAgXVxuICAgIH0sXG4gICAgaG9yaXpvbnRhbE9mZnNldDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBbIDAsIDAgXVxuICAgIH0sXG5cbiAgICBjb250ZW50U3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgY29udGVudEFjdGl2ZVN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuXG4gICAgZGVsYXk6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDEwMDBcbiAgICB9LFxuXG4gICAgdmlzaWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuXG4gICAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICAgIG9uU2Nyb2xsOiBGdW5jdGlvblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgLy8gc3RhdGUgbWFuYWdlbWVudFxuICAgIGNvbnN0IHRlbXBTaG93aW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IHBhbm5pbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgaG92ZXIgPSByZWYoZmFsc2UpXG5cbiAgICAvLyBvdGhlci4uLlxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHtcbiAgICAgIHZlcnRpY2FsOiByZWYoMCksXG4gICAgICBob3Jpem9udGFsOiByZWYoMClcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGwgPSB7XG4gICAgICB2ZXJ0aWNhbDoge1xuICAgICAgICByZWY6IHJlZihudWxsKSxcbiAgICAgICAgcG9zaXRpb246IHJlZigwKSxcbiAgICAgICAgc2l6ZTogcmVmKDApXG4gICAgICB9LFxuXG4gICAgICBob3Jpem9udGFsOiB7XG4gICAgICAgIHJlZjogcmVmKG51bGwpLFxuICAgICAgICBwb3NpdGlvbjogcmVmKDApLFxuICAgICAgICBzaXplOiByZWYoMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgcHJveHkuJHEpXG5cbiAgICBsZXQgdGltZXIgPSBudWxsLCBwYW5SZWZQb3NcblxuICAgIGNvbnN0IHRhcmdldFJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1zY3JvbGxhcmVhJ1xuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWEtLWRhcmsnIDogJycpXG4gICAgKVxuXG4gICAgT2JqZWN0LmFzc2lnbihjb250YWluZXIsIHtcbiAgICAgIHZlcnRpY2FsSW5uZXI6IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlIC0gcHJvcHMudmVydGljYWxPZmZzZXRbIDAgXSAtIHByb3BzLnZlcnRpY2FsT2Zmc2V0WyAxIF1cbiAgICAgICkpLFxuXG4gICAgICBob3Jpem9udGFsSW5uZXI6IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICAgY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgLSBwcm9wcy5ob3Jpem9udGFsT2Zmc2V0WyAwIF0gLSBwcm9wcy5ob3Jpem9udGFsT2Zmc2V0WyAxIF1cbiAgICAgICkpXG4gICAgfSlcblxuICAgIHNjcm9sbC52ZXJ0aWNhbC5wZXJjZW50YWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlIC0gY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlXG4gICAgICBpZiAoZGlmZiA8PSAwKSB7IHJldHVybiAwIH1cbiAgICAgIGNvbnN0IHAgPSBiZXR3ZWVuKHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSAvIGRpZmYsIDAsIDEpXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwICogMTAwMDApIC8gMTAwMDBcbiAgICB9KVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIChcbiAgICAgICAgKHByb3BzLnZpc2libGUgPT09IG51bGwgPyBob3Zlci52YWx1ZSA6IHByb3BzLnZpc2libGUpICE9PSB0cnVlXG4gICAgICAgICYmIHRlbXBTaG93aW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgICAmJiBwYW5uaW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgKSB8fCBzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSA8PSBjb250YWluZXIudmVydGljYWwudmFsdWUgKyAxXG4gICAgKSlcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJTdGFydCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnZlcnRpY2FsT2Zmc2V0WyAwIF1cbiAgICAgICsgc2Nyb2xsLnZlcnRpY2FsLnBlcmNlbnRhZ2UudmFsdWUgKiAoY29udGFpbmVyLnZlcnRpY2FsSW5uZXIudmFsdWUgLSBzY3JvbGwudmVydGljYWwudGh1bWJTaXplLnZhbHVlKVxuICAgICkpXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnRodW1iU2l6ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBNYXRoLnJvdW5kKFxuICAgICAgICBiZXR3ZWVuKFxuICAgICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbElubmVyLnZhbHVlICogY29udGFpbmVyLnZlcnRpY2FsSW5uZXIudmFsdWUgLyBzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSxcbiAgICAgICAgICBnZXRNaW5UaHVtYlNpemUoY29udGFpbmVyLnZlcnRpY2FsSW5uZXIudmFsdWUpLFxuICAgICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbElubmVyLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIC4uLnByb3BzLnRodW1iU3R5bGUsXG4gICAgICAuLi5wcm9wcy52ZXJ0aWNhbFRodW1iU3R5bGUsXG4gICAgICB0b3A6IGAkeyBzY3JvbGwudmVydGljYWwudGh1bWJTdGFydC52YWx1ZSB9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHsgc2Nyb2xsLnZlcnRpY2FsLnRodW1iU2l6ZS52YWx1ZSB9cHhgLFxuICAgICAgcmlnaHQ6IGAkeyBwcm9wcy5ob3Jpem9udGFsT2Zmc2V0WyAxIF0gfXB4YFxuICAgIH0pKVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkNsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJ3Etc2Nyb2xsYXJlYV9fdGh1bWIgcS1zY3JvbGxhcmVhX190aHVtYi0tdiBhYnNvbHV0ZS1yaWdodCdcbiAgICAgICsgKHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX190aHVtYi0taW52aXNpYmxlJyA6ICcnKVxuICAgICkpXG4gICAgc2Nyb2xsLnZlcnRpY2FsLmJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJ3Etc2Nyb2xsYXJlYV9fYmFyIHEtc2Nyb2xsYXJlYV9fYmFyLS12IGFic29sdXRlLXJpZ2h0J1xuICAgICAgKyAoc2Nyb2xsLnZlcnRpY2FsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWFfX2Jhci0taW52aXNpYmxlJyA6ICcnKVxuICAgICkpXG5cbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgLSBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZVxuICAgICAgaWYgKGRpZmYgPD0gMCkgeyByZXR1cm4gMCB9XG4gICAgICBjb25zdCBwID0gYmV0d2VlbihNYXRoLmFicyhzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZSkgLyBkaWZmLCAwLCAxKVxuICAgICAgcmV0dXJuIE1hdGgucm91bmQocCAqIDEwMDAwKSAvIDEwMDAwXG4gICAgfSlcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIChcbiAgICAgICAgKHByb3BzLnZpc2libGUgPT09IG51bGwgPyBob3Zlci52YWx1ZSA6IHByb3BzLnZpc2libGUpICE9PSB0cnVlXG4gICAgICAgICYmIHRlbXBTaG93aW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgICAmJiBwYW5uaW5nLnZhbHVlID09PSBmYWxzZVxuICAgICAgKSB8fCBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlIDw9IGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlICsgMVxuICAgICkpXG4gICAgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTdGFydCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmhvcml6b250YWxPZmZzZXRbIDAgXVxuICAgICAgKyBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlLnZhbHVlICogKGNvbnRhaW5lci5ob3Jpem9udGFsSW5uZXIudmFsdWUgLSBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlNpemUudmFsdWUpXG4gICAgKSlcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlNpemUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgTWF0aC5yb3VuZChcbiAgICAgICAgYmV0d2VlbihcbiAgICAgICAgICBjb250YWluZXIuaG9yaXpvbnRhbElubmVyLnZhbHVlICogY29udGFpbmVyLmhvcml6b250YWxJbm5lci52YWx1ZSAvIHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUsXG4gICAgICAgICAgZ2V0TWluVGh1bWJTaXplKGNvbnRhaW5lci5ob3Jpem9udGFsSW5uZXIudmFsdWUpLFxuICAgICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsSW5uZXIudmFsdWVcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5zdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAuLi5wcm9wcy50aHVtYlN0eWxlLFxuICAgICAgLi4ucHJvcHMuaG9yaXpvbnRhbFRodW1iU3R5bGUsXG4gICAgICBbIHByb3h5LiRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdOiBgJHsgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTdGFydC52YWx1ZSB9cHhgLFxuICAgICAgd2lkdGg6IGAkeyBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlNpemUudmFsdWUgfXB4YCxcbiAgICAgIGJvdHRvbTogYCR7IHByb3BzLnZlcnRpY2FsT2Zmc2V0WyAxIF0gfXB4YFxuICAgIH0pKVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAncS1zY3JvbGxhcmVhX190aHVtYiBxLXNjcm9sbGFyZWFfX3RodW1iLS1oIGFic29sdXRlLWJvdHRvbSdcbiAgICAgICsgKHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWFfX3RodW1iLS1pbnZpc2libGUnIDogJycpXG4gICAgKSlcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5iYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICdxLXNjcm9sbGFyZWFfX2JhciBxLXNjcm9sbGFyZWFfX2Jhci0taCBhYnNvbHV0ZS1ib3R0b20nXG4gICAgICArIChzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX19iYXItLWludmlzaWJsZScgOiAnJylcbiAgICApKVxuXG4gICAgY29uc3QgbWFpblN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsLnZlcnRpY2FsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlICYmIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuY29udGVudFN0eWxlXG4gICAgICAgIDogcHJvcHMuY29udGVudEFjdGl2ZVN0eWxlXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbCAoKSB7XG4gICAgICBjb25zdCBpbmZvID0ge31cblxuICAgICAgYXhpc0xpc3QuZm9yRWFjaChheGlzID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHNjcm9sbFsgYXhpcyBdXG4gICAgICAgIE9iamVjdC5hc3NpZ24oaW5mbywge1xuICAgICAgICAgIFsgYXhpcyArICdQb3NpdGlvbicgXTogZGF0YS5wb3NpdGlvbi52YWx1ZSxcbiAgICAgICAgICBbIGF4aXMgKyAnUGVyY2VudGFnZScgXTogZGF0YS5wZXJjZW50YWdlLnZhbHVlLFxuICAgICAgICAgIFsgYXhpcyArICdTaXplJyBdOiBkYXRhLnNpemUudmFsdWUsXG4gICAgICAgICAgWyBheGlzICsgJ0NvbnRhaW5lclNpemUnIF06IGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlLFxuICAgICAgICAgIFsgYXhpcyArICdDb250YWluZXJJbm5lclNpemUnIF06IGNvbnRhaW5lclsgYXhpcyArICdJbm5lcicgXS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIGluZm9cbiAgICB9XG5cbiAgICAvLyB3ZSBoYXZlIGxvdHMgb2YgbGlzdGVuZXJzLCBzb1xuICAgIC8vIGVuc3VyZSB3ZSdyZSBub3QgZW1pdHRpbmcgc2FtZSBpbmZvXG4gICAgLy8gbXVsdGlwbGUgdGltZXNcbiAgICBjb25zdCBlbWl0U2Nyb2xsID0gZGVib3VuY2UoKCkgPT4ge1xuICAgICAgY29uc3QgaW5mbyA9IGdldFNjcm9sbCgpXG4gICAgICBpbmZvLnJlZiA9IHByb3h5XG4gICAgICBlbWl0KCdzY3JvbGwnLCBpbmZvKVxuICAgIH0sIDApXG5cbiAgICBmdW5jdGlvbiBsb2NhbFNldFNjcm9sbFBvc2l0aW9uIChheGlzLCBvZmZzZXQsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoYXhpc0xpc3QuaW5jbHVkZXMoYXhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tRU2Nyb2xsQXJlYV06IHdyb25nIGZpcnN0IHBhcmFtIG9mIHNldFNjcm9sbFBvc2l0aW9uICh2ZXJ0aWNhbC9ob3Jpem9udGFsKScpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBmbiA9IGF4aXMgPT09ICd2ZXJ0aWNhbCdcbiAgICAgICAgPyBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uXG4gICAgICAgIDogc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uXG5cbiAgICAgIGZuKHRhcmdldFJlZi52YWx1ZSwgb2Zmc2V0LCBkdXJhdGlvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDb250YWluZXIgKHsgaGVpZ2h0LCB3aWR0aCB9KSB7XG4gICAgICBsZXQgY2hhbmdlID0gZmFsc2VcblxuICAgICAgaWYgKGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSA9IGhlaWdodFxuICAgICAgICBjaGFuZ2UgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSAhPT0gd2lkdGgpIHtcbiAgICAgICAgY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgPSB3aWR0aFxuICAgICAgICBjaGFuZ2UgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNoYW5nZSA9PT0gdHJ1ZSAmJiBzdGFydFRpbWVyKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGwgKHsgcG9zaXRpb24gfSkge1xuICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlXG5cbiAgICAgIGlmIChzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUgIT09IHBvc2l0aW9uLnRvcCkge1xuICAgICAgICBzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUgPSBwb3NpdGlvbi50b3BcbiAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWUgIT09IHBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWUgPSBwb3NpdGlvbi5sZWZ0XG4gICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgY2hhbmdlID09PSB0cnVlICYmIHN0YXJ0VGltZXIoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFNpemUgKHsgaGVpZ2h0LCB3aWR0aCB9KSB7XG4gICAgICBpZiAoc2Nyb2xsLmhvcml6b250YWwuc2l6ZS52YWx1ZSAhPT0gd2lkdGgpIHtcbiAgICAgICAgc2Nyb2xsLmhvcml6b250YWwuc2l6ZS52YWx1ZSA9IHdpZHRoXG4gICAgICAgIHN0YXJ0VGltZXIoKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUgIT09IGhlaWdodCkge1xuICAgICAgICBzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSA9IGhlaWdodFxuICAgICAgICBzdGFydFRpbWVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhblRodW1iIChlLCBheGlzKSB7XG4gICAgICBjb25zdCBkYXRhID0gc2Nyb2xsWyBheGlzIF1cblxuICAgICAgaWYgKGUuaXNGaXJzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoZGF0YS50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgICAgcGFuUmVmUG9zID0gZGF0YS5wb3NpdGlvbi52YWx1ZVxuICAgICAgICBwYW5uaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAocGFubmluZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGUuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgICBwYW5uaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgZFByb3AgPSBkaXJQcm9wc1sgYXhpcyBdXG5cbiAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSAoXG4gICAgICAgIChkYXRhLnNpemUudmFsdWUgLSBjb250YWluZXJbIGF4aXMgXS52YWx1ZSlcbiAgICAgICAgLyAoY29udGFpbmVyWyBheGlzICsgJ0lubmVyJyBdLnZhbHVlIC0gZGF0YS50aHVtYlNpemUudmFsdWUpXG4gICAgICApXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IGUuZGlzdGFuY2VbIGRQcm9wLmRpc3QgXVxuICAgICAgY29uc3QgcG9zID0gcGFuUmVmUG9zICsgKGUuZGlyZWN0aW9uID09PSBkUHJvcC5kaXIgPyAxIDogLTEpICogZGlzdGFuY2UgKiBtdWx0aXBsaWVyXG5cbiAgICAgIHNldFNjcm9sbChwb3MsIGF4aXMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZWRvd24gKGV2dCwgYXhpcykge1xuICAgICAgY29uc3QgZGF0YSA9IHNjcm9sbFsgYXhpcyBdXG5cbiAgICAgIGlmIChkYXRhLnRodW1iSGlkZGVuLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0T2Zmc2V0ID0gYXhpcyA9PT0gJ3ZlcnRpY2FsJ1xuICAgICAgICAgID8gcHJvcHMudmVydGljYWxPZmZzZXRbIDAgXVxuICAgICAgICAgIDogcHJvcHMuaG9yaXpvbnRhbE9mZnNldFsgMCBdXG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZXZ0WyBkaXJQcm9wc1sgYXhpcyBdLm9mZnNldCBdIC0gc3RhcnRPZmZzZXRcbiAgICAgICAgY29uc3QgdGh1bWJTdGFydCA9IGRhdGEudGh1bWJTdGFydC52YWx1ZSAtIHN0YXJ0T2Zmc2V0XG5cbiAgICAgICAgaWYgKG9mZnNldCA8IHRodW1iU3RhcnQgfHwgb2Zmc2V0ID4gdGh1bWJTdGFydCArIGRhdGEudGh1bWJTaXplLnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0VGh1bWJTdGFydCA9IG9mZnNldCAtIGRhdGEudGh1bWJTaXplLnZhbHVlIC8gMlxuICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBiZXR3ZWVuKHRhcmdldFRodW1iU3RhcnQgLyAoY29udGFpbmVyWyBheGlzICsgJ0lubmVyJyBdLnZhbHVlIC0gZGF0YS50aHVtYlNpemUudmFsdWUpLCAwLCAxKVxuICAgICAgICAgIHNldFNjcm9sbChwZXJjZW50YWdlICogTWF0aC5tYXgoMCwgZGF0YS5zaXplLnZhbHVlIC0gY29udGFpbmVyWyBheGlzIF0udmFsdWUpLCBheGlzKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWN0aXZhdGUgdGh1bWIgcGFuXG4gICAgICAgIGlmIChkYXRhLnJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGRhdGEucmVmLnZhbHVlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoZXZ0LnR5cGUsIGV2dCkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFRpbWVyICgpIHtcbiAgICAgIHRlbXBTaG93aW5nLnZhbHVlID0gdHJ1ZVxuXG4gICAgICB0aW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgdGVtcFNob3dpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgfSwgcHJvcHMuZGVsYXkpXG5cbiAgICAgIHByb3BzLm9uU2Nyb2xsICE9PSB2b2lkIDAgJiYgZW1pdFNjcm9sbCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2Nyb2xsIChvZmZzZXQsIGF4aXMpIHtcbiAgICAgIHRhcmdldFJlZi52YWx1ZVsgZGlyUHJvcHNbIGF4aXMgXS5zY3JvbGwgXSA9IG9mZnNldFxuICAgIH1cblxuICAgIGxldCBtb3VzZUV2ZW50VGltZXIgPSBudWxsXG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlZW50ZXIgKCkge1xuICAgICAgaWYgKG1vdXNlRXZlbnRUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQobW91c2VFdmVudFRpbWVyKVxuICAgICAgfVxuXG4gICAgICAvLyBzZXRUaW1lb3V0IG5lZWRlZCBmb3IgaU9TOyBzZWUgdGlja2V0ICMxNjIxMFxuICAgICAgbW91c2VFdmVudFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1vdXNlRXZlbnRUaW1lciA9IG51bGxcbiAgICAgICAgaG92ZXIudmFsdWUgPSB0cnVlXG4gICAgICB9LCBwcm94eS4kcS5wbGF0Zm9ybS5pcy5pb3MgPyA1MCA6IDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZWxlYXZlICgpIHtcbiAgICAgIGlmIChtb3VzZUV2ZW50VGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KG1vdXNlRXZlbnRUaW1lcilcbiAgICAgICAgbW91c2VFdmVudFRpbWVyID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBob3Zlci52YWx1ZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IHNjcm9sbFBvc2l0aW9uID0gbnVsbFxuXG4gICAgd2F0Y2goKCkgPT4gcHJveHkuJHEubGFuZy5ydGwsIHJ0bCA9PiB7XG4gICAgICBpZiAodGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHNldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbihcbiAgICAgICAgICB0YXJnZXRSZWYudmFsdWUsXG4gICAgICAgICAgTWF0aC5hYnMoc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWUpICogKHJ0bCA9PT0gdHJ1ZSA/IC0xIDogMSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHNjcm9sbFBvc2l0aW9uID0ge1xuICAgICAgICB0b3A6IHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSxcbiAgICAgICAgbGVmdDogc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uID09PSBudWxsKSByZXR1cm5cblxuICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gdGFyZ2V0UmVmLnZhbHVlXG5cbiAgICAgIGlmIChzY3JvbGxUYXJnZXQgIT09IG51bGwpIHtcbiAgICAgICAgc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uKHNjcm9sbFRhcmdldCwgc2Nyb2xsUG9zaXRpb24ubGVmdClcbiAgICAgICAgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihzY3JvbGxUYXJnZXQsIHNjcm9sbFBvc2l0aW9uLnRvcClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KGVtaXRTY3JvbGwuY2FuY2VsKVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgZ2V0U2Nyb2xsVGFyZ2V0OiAoKSA9PiB0YXJnZXRSZWYudmFsdWUsXG4gICAgICBnZXRTY3JvbGwsXG4gICAgICBnZXRTY3JvbGxQb3NpdGlvbjogKCkgPT4gKHtcbiAgICAgICAgdG9wOiBzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUsXG4gICAgICAgIGxlZnQ6IHNjcm9sbC5ob3Jpem9udGFsLnBvc2l0aW9uLnZhbHVlXG4gICAgICB9KSxcbiAgICAgIGdldFNjcm9sbFBlcmNlbnRhZ2U6ICgpID0+ICh7XG4gICAgICAgIHRvcDogc2Nyb2xsLnZlcnRpY2FsLnBlcmNlbnRhZ2UudmFsdWUsXG4gICAgICAgIGxlZnQ6IHNjcm9sbC5ob3Jpem9udGFsLnBlcmNlbnRhZ2UudmFsdWVcbiAgICAgIH0pLFxuICAgICAgc2V0U2Nyb2xsUG9zaXRpb246IGxvY2FsU2V0U2Nyb2xsUG9zaXRpb24sXG4gICAgICBzZXRTY3JvbGxQZXJjZW50YWdlIChheGlzLCBwZXJjZW50YWdlLCBkdXJhdGlvbikge1xuICAgICAgICBsb2NhbFNldFNjcm9sbFBvc2l0aW9uKFxuICAgICAgICAgIGF4aXMsXG4gICAgICAgICAgcGVyY2VudGFnZVxuICAgICAgICAgICAgKiAoc2Nyb2xsWyBheGlzIF0uc2l6ZS52YWx1ZSAtIGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlKVxuICAgICAgICAgICAgKiAoYXhpcyA9PT0gJ2hvcml6b250YWwnICYmIHByb3h5LiRxLmxhbmcucnRsID09PSB0cnVlID8gLTEgOiAxKSxcbiAgICAgICAgICBkdXJhdGlvblxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHN0b3JlID0ge1xuICAgICAgc2Nyb2xsLFxuXG4gICAgICB0aHVtYlZlcnREaXI6IFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgZSA9PiB7IG9uUGFuVGh1bWIoZSwgJ3ZlcnRpY2FsJykgfSxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7IHZlcnRpY2FsOiB0cnVlLCAuLi5wYW5PcHRzIH1cbiAgICAgIF0gXSxcblxuICAgICAgdGh1bWJIb3JpekRpcjogWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBlID0+IHsgb25QYW5UaHVtYihlLCAnaG9yaXpvbnRhbCcpIH0sXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgeyBob3Jpem9udGFsOiB0cnVlLCAuLi5wYW5PcHRzIH1cbiAgICAgIF0gXSxcblxuICAgICAgb25WZXJ0aWNhbE1vdXNlZG93biAoZXZ0KSB7XG4gICAgICAgIG9uTW91c2Vkb3duKGV2dCwgJ3ZlcnRpY2FsJylcbiAgICAgIH0sXG5cbiAgICAgIG9uSG9yaXpvbnRhbE1vdXNlZG93biAoZXZ0KSB7XG4gICAgICAgIG9uTW91c2Vkb3duKGV2dCwgJ2hvcml6b250YWwnKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgb25Nb3VzZWVudGVyLFxuICAgICAgICBvbk1vdXNlbGVhdmVcbiAgICAgIH0sIFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogdGFyZ2V0UmVmLFxuICAgICAgICAgIGNsYXNzOiAncS1zY3JvbGxhcmVhX19jb250YWluZXIgc2Nyb2xsIHJlbGF0aXZlLXBvc2l0aW9uIGZpdCBoaWRlLXNjcm9sbGJhcicsXG4gICAgICAgICAgdGFiaW5kZXg6IHByb3BzLnRhYmluZGV4ICE9PSB2b2lkIDAgPyBwcm9wcy50YWJpbmRleCA6IHZvaWQgMFxuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLXNjcm9sbGFyZWFfX2NvbnRlbnQgYWJzb2x1dGUnLFxuICAgICAgICAgICAgc3R5bGU6IG1haW5TdHlsZS52YWx1ZVxuICAgICAgICAgIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgICAgIG9uUmVzaXplOiB1cGRhdGVTY3JvbGxTaXplXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pKSxcblxuICAgICAgICAgIGgoUVNjcm9sbE9ic2VydmVyLCB7XG4gICAgICAgICAgICBheGlzOiAnYm90aCcsXG4gICAgICAgICAgICBvblNjcm9sbDogdXBkYXRlU2Nyb2xsXG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICBkZWJvdW5jZTogMCxcbiAgICAgICAgICBvblJlc2l6ZTogdXBkYXRlQ29udGFpbmVyXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoU2Nyb2xsQXJlYUNvbnRyb2xzLCB7XG4gICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgYmFyU3R5bGU6IHByb3BzLmJhclN0eWxlLFxuICAgICAgICAgIHZlcnRpY2FsQmFyU3R5bGU6IHByb3BzLnZlcnRpY2FsQmFyU3R5bGUsXG4gICAgICAgICAgaG9yaXpvbnRhbEJhclN0eWxlOiBwcm9wcy5ob3Jpem9udGFsQmFyU3R5bGVcbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIHByb3ZpZGUsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCB7IHBhZ2VDb250YWluZXJLZXksIGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuc3ltYm9scy9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVBhZ2VDb250YWluZXInLFxuXG4gIHNldHVwIChfLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUVBhZ2VDb250YWluZXIgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgICByZXR1cm4gZW1wdHlSZW5kZXJGblxuICAgIH1cblxuICAgIHByb3ZpZGUocGFnZUNvbnRhaW5lcktleSwgdHJ1ZSlcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY3NzID0ge31cblxuICAgICAgaWYgKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzcy5wYWRkaW5nVG9wID0gYCR7ICRsYXlvdXQuaGVhZGVyLnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQucmlnaHQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyBgcGFkZGluZyR7ICRxLmxhbmcucnRsID09PSB0cnVlID8gJ0xlZnQnIDogJ1JpZ2h0JyB9YCBdID0gYCR7ICRsYXlvdXQucmlnaHQuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAoJGxheW91dC5mb290ZXIuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzLnBhZGRpbmdCb3R0b20gPSBgJHsgJGxheW91dC5mb290ZXIuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAoJGxheW91dC5sZWZ0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgYHBhZGRpbmckeyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdSaWdodCcgOiAnTGVmdCcgfWAgXSA9IGAkeyAkbGF5b3V0LmxlZnQuc2l6ZSB9cHhgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiAncS1wYWdlLWNvbnRhaW5lcicsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWVcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgcmVhY3RpdmUsIGNvbXB1dGVkLCB3YXRjaCwgcHJvdmlkZSwgb25Vbm1vdW50ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9wbGF0Zm9ybS9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IFFTY3JvbGxPYnNlcnZlciBmcm9tICcuLi9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzJ1xuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxiYXJXaWR0aCB9IGZyb20gJy4uLy4uL3V0aWxzL3Njcm9sbC9zY3JvbGwuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zeW1ib2xzL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTGF5b3V0JyxcblxuICBwcm9wczoge1xuICAgIGNvbnRhaW5lcjogQm9vbGVhbixcbiAgICB2aWV3OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaGhoIGxwciBmZmYnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IC9eKGh8bCloKGh8cikgbHByIChmfGwpZihmfHIpJC8udGVzdCh2LnRvTG93ZXJDYXNlKCkpXG4gICAgfSxcblxuICAgIG9uU2Nyb2xsOiBGdW5jdGlvbixcbiAgICBvblNjcm9sbEhlaWdodDogRnVuY3Rpb24sXG4gICAgb25SZXNpemU6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG5cbiAgICAvLyBwYWdlIHJlbGF0ZWRcbiAgICBjb25zdCBoZWlnaHQgPSByZWYoJHEuc2NyZWVuLmhlaWdodClcbiAgICBjb25zdCB3aWR0aCA9IHJlZihwcm9wcy5jb250YWluZXIgPT09IHRydWUgPyAwIDogJHEuc2NyZWVuLndpZHRoKVxuICAgIGNvbnN0IHNjcm9sbCA9IHJlZih7IHBvc2l0aW9uOiAwLCBkaXJlY3Rpb246ICdkb3duJywgaW5mbGVjdGlvblBvaW50OiAwIH0pXG5cbiAgICAvLyBjb250YWluZXIgb25seSBwcm9wXG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gcmVmKDApXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSByZWYoaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uLnZhbHVlID09PSB0cnVlID8gMCA6IGdldFNjcm9sbGJhcldpZHRoKCkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxheW91dCBxLWxheW91dC0tJ1xuICAgICAgKyAocHJvcHMuY29udGFpbmVyID09PSB0cnVlID8gJ2NvbnRhaW5lcml6ZWQnIDogJ3N0YW5kYXJkJylcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmNvbnRhaW5lciA9PT0gZmFsc2VcbiAgICAgICAgPyB7IG1pbkhlaWdodDogJHEuc2NyZWVuLmhlaWdodCArICdweCcgfVxuICAgICAgICA6IG51bGxcbiAgICApKVxuXG4gICAgLy8gdXNlZCBieSBjb250YWluZXIgb25seVxuICAgIGNvbnN0IHRhcmdldFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsYmFyV2lkdGgudmFsdWUgIT09IDBcbiAgICAgICAgPyB7IFsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF06IGAkeyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHhgIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIGNvbnN0IHRhcmdldENoaWxkU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBzY3JvbGxiYXJXaWR0aC52YWx1ZSAhPT0gMFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIFsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnIF06IDAsXG4gICAgICAgICAgICBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdOiBgLSR7IHNjcm9sbGJhcldpZHRoLnZhbHVlIH1weGAsXG4gICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSArICR7IHNjcm9sbGJhcldpZHRoLnZhbHVlIH1weClgXG4gICAgICAgICAgfVxuICAgICAgICA6IG51bGxcbiAgICApKVxuXG4gICAgZnVuY3Rpb24gb25QYWdlU2Nyb2xsIChkYXRhKSB7XG4gICAgICBpZiAocHJvcHMuY29udGFpbmVyID09PSB0cnVlIHx8IGRvY3VtZW50LnFTY3JvbGxQcmV2ZW50ZWQgIT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbi50b3AsXG4gICAgICAgICAgZGlyZWN0aW9uOiBkYXRhLmRpcmVjdGlvbixcbiAgICAgICAgICBkaXJlY3Rpb25DaGFuZ2VkOiBkYXRhLmRpcmVjdGlvbkNoYW5nZWQsXG4gICAgICAgICAgaW5mbGVjdGlvblBvaW50OiBkYXRhLmluZmxlY3Rpb25Qb2ludC50b3AsXG4gICAgICAgICAgZGVsdGE6IGRhdGEuZGVsdGEudG9wXG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGwudmFsdWUgPSBpbmZvXG4gICAgICAgIHByb3BzLm9uU2Nyb2xsICE9PSB2b2lkIDAgJiYgZW1pdCgnc2Nyb2xsJywgaW5mbylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhZ2VSZXNpemUgKGRhdGEpIHtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0OiBuZXdIZWlnaHQsIHdpZHRoOiBuZXdXaWR0aCB9ID0gZGF0YVxuICAgICAgbGV0IHJlc2l6ZWQgPSBmYWxzZVxuXG4gICAgICBpZiAoaGVpZ2h0LnZhbHVlICE9PSBuZXdIZWlnaHQpIHtcbiAgICAgICAgcmVzaXplZCA9IHRydWVcbiAgICAgICAgaGVpZ2h0LnZhbHVlID0gbmV3SGVpZ2h0XG4gICAgICAgIHByb3BzLm9uU2Nyb2xsSGVpZ2h0ICE9PSB2b2lkIDAgJiYgZW1pdCgnc2Nyb2xsSGVpZ2h0JywgbmV3SGVpZ2h0KVxuICAgICAgICB1cGRhdGVTY3JvbGxiYXJXaWR0aCgpXG4gICAgICB9XG4gICAgICBpZiAod2lkdGgudmFsdWUgIT09IG5ld1dpZHRoKSB7XG4gICAgICAgIHJlc2l6ZWQgPSB0cnVlXG4gICAgICAgIHdpZHRoLnZhbHVlID0gbmV3V2lkdGhcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc2l6ZWQgPT09IHRydWUgJiYgcHJvcHMub25SZXNpemUgIT09IHZvaWQgMCkge1xuICAgICAgICBlbWl0KCdyZXNpemUnLCBkYXRhKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ29udGFpbmVyUmVzaXplICh7IGhlaWdodCB9KSB7XG4gICAgICBpZiAoY29udGFpbmVySGVpZ2h0LnZhbHVlICE9PSBoZWlnaHQpIHtcbiAgICAgICAgY29udGFpbmVySGVpZ2h0LnZhbHVlID0gaGVpZ2h0XG4gICAgICAgIHVwZGF0ZVNjcm9sbGJhcldpZHRoKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxiYXJXaWR0aCAoKSB7XG4gICAgICBpZiAocHJvcHMuY29udGFpbmVyID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gaGVpZ2h0LnZhbHVlID4gY29udGFpbmVySGVpZ2h0LnZhbHVlXG4gICAgICAgICAgPyBnZXRTY3JvbGxiYXJXaWR0aCgpXG4gICAgICAgICAgOiAwXG5cbiAgICAgICAgaWYgKHNjcm9sbGJhcldpZHRoLnZhbHVlICE9PSB3aWR0aCkge1xuICAgICAgICAgIHNjcm9sbGJhcldpZHRoLnZhbHVlID0gd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhbmltYXRlVGltZXIgPSBudWxsXG5cbiAgICBjb25zdCAkbGF5b3V0ID0ge1xuICAgICAgaW5zdGFuY2VzOiB7fSxcbiAgICAgIHZpZXc6IGNvbXB1dGVkKCgpID0+IHByb3BzLnZpZXcpLFxuICAgICAgaXNDb250YWluZXI6IGNvbXB1dGVkKCgpID0+IHByb3BzLmNvbnRhaW5lciksXG5cbiAgICAgIHJvb3RSZWYsXG5cbiAgICAgIGhlaWdodCxcbiAgICAgIGNvbnRhaW5lckhlaWdodCxcbiAgICAgIHNjcm9sbGJhcldpZHRoLFxuICAgICAgdG90YWxXaWR0aDogY29tcHV0ZWQoKCkgPT4gd2lkdGgudmFsdWUgKyBzY3JvbGxiYXJXaWR0aC52YWx1ZSksXG5cbiAgICAgIHJvd3M6IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93cyA9IHByb3BzLnZpZXcudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9wOiByb3dzWyAwIF0uc3BsaXQoJycpLFxuICAgICAgICAgIG1pZGRsZTogcm93c1sgMSBdLnNwbGl0KCcnKSxcbiAgICAgICAgICBib3R0b206IHJvd3NbIDIgXS5zcGxpdCgnJylcbiAgICAgICAgfVxuICAgICAgfSksXG5cbiAgICAgIGhlYWRlcjogcmVhY3RpdmUoeyBzaXplOiAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIHJpZ2h0OiByZWFjdGl2ZSh7IHNpemU6IDMwMCwgb2Zmc2V0OiAwLCBzcGFjZTogZmFsc2UgfSksXG4gICAgICBmb290ZXI6IHJlYWN0aXZlKHsgc2l6ZTogMCwgb2Zmc2V0OiAwLCBzcGFjZTogZmFsc2UgfSksXG4gICAgICBsZWZ0OiByZWFjdGl2ZSh7IHNpemU6IDMwMCwgb2Zmc2V0OiAwLCBzcGFjZTogZmFsc2UgfSksXG5cbiAgICAgIHNjcm9sbCxcblxuICAgICAgYW5pbWF0ZSAoKSB7XG4gICAgICAgIGlmIChhbmltYXRlVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoYW5pbWF0ZVRpbWVyKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncS1ib2R5LS1sYXlvdXQtYW5pbWF0ZScpXG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBhbmltYXRlVGltZXIgPSBudWxsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgfSwgMTU1KVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlIChwYXJ0LCBwcm9wLCB2YWwpIHtcbiAgICAgICAgJGxheW91dFsgcGFydCBdWyBwcm9wIF0gPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm92aWRlKGxheW91dEtleSwgJGxheW91dClcblxuICAgIC8vIHByZXZlbnQgc2Nyb2xsYmFyIGZsaWNrZXIgd2hpbGUgcmVzaXppbmcgd2luZG93IGhlaWdodFxuICAgIC8vIGlmIG5vIHBhZ2Ugc2Nyb2xsYmFyIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmIChfX1FVQVNBUl9TU1JfU0VSVkVSX18gIT09IHRydWUgJiYgZ2V0U2Nyb2xsYmFyV2lkdGgoKSA+IDApIHtcbiAgICAgIGxldCB0aW1lciA9IG51bGxcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuYm9keVxuXG4gICAgICBmdW5jdGlvbiByZXN0b3JlU2Nyb2xsYmFyICgpIHtcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtc2Nyb2xsYmFyJylcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaGlkZVNjcm9sbGJhciAoKSB7XG4gICAgICAgIGlmICh0aW1lciA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIGlmIGl0IGhhcyBubyBzY3JvbGxiYXIgdGhlbiB0aGVyZSdzIG5vdGhpbmcgdG8gZG9cbiAgICAgICAgICBpZiAoZWwuc2Nyb2xsSGVpZ2h0ID4gJHEuc2NyZWVuLmhlaWdodCkgcmV0dXJuXG5cbiAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlLXNjcm9sbGJhcicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICB9XG5cbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHJlc3RvcmVTY3JvbGxiYXIsIDMwMClcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsRXZlbnQgKGFjdGlvbikge1xuICAgICAgICBpZiAodGltZXIgIT09IG51bGwgJiYgYWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgICByZXN0b3JlU2Nyb2xsYmFyKClcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvd1sgYCR7IGFjdGlvbiB9RXZlbnRMaXN0ZW5lcmAgXSgncmVzaXplJywgaGlkZVNjcm9sbGJhcilcbiAgICAgIH1cblxuICAgICAgd2F0Y2goXG4gICAgICAgICgpID0+IChwcm9wcy5jb250YWluZXIgIT09IHRydWUgPyAnYWRkJyA6ICdyZW1vdmUnKSxcbiAgICAgICAgdXBkYXRlU2Nyb2xsRXZlbnRcbiAgICAgIClcblxuICAgICAgcHJvcHMuY29udGFpbmVyICE9PSB0cnVlICYmIHVwZGF0ZVNjcm9sbEV2ZW50KCdhZGQnKVxuXG4gICAgICBvblVubW91bnRlZCgoKSA9PiB7XG4gICAgICAgIHVwZGF0ZVNjcm9sbEV2ZW50KCdyZW1vdmUnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICBoKFFTY3JvbGxPYnNlcnZlciwgeyBvblNjcm9sbDogb25QYWdlU2Nyb2xsIH0pLFxuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwgeyBvblJlc2l6ZTogb25QYWdlUmVzaXplIH0pXG4gICAgICBdKVxuXG4gICAgICBjb25zdCBsYXlvdXQgPSBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIHJlZjogcHJvcHMuY29udGFpbmVyID09PSB0cnVlID8gdm9pZCAwIDogcm9vdFJlZixcbiAgICAgICAgdGFiaW5kZXg6IC0xXG4gICAgICB9LCBjb250ZW50KVxuXG4gICAgICBpZiAocHJvcHMuY29udGFpbmVyID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWxheW91dC1jb250YWluZXIgb3ZlcmZsb3ctaGlkZGVuJyxcbiAgICAgICAgICByZWY6IHJvb3RSZWZcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiBvbkNvbnRhaW5lclJlc2l6ZSB9KSxcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ2Fic29sdXRlLWZ1bGwnLFxuICAgICAgICAgICAgc3R5bGU6IHRhcmdldFN0eWxlLnZhbHVlXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICBjbGFzczogJ3Njcm9sbCcsXG4gICAgICAgICAgICAgIHN0eWxlOiB0YXJnZXRDaGlsZFN0eWxlLnZhbHVlXG4gICAgICAgICAgICB9LCBbIGxheW91dCBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsYXlvdXRcbiAgICB9XG4gIH1cbn0pXG4iLCJjb25zdCB0cnVlRm4gPSAoKSA9PiB0cnVlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbWl0c0FycmF5KSB7XG4gIGNvbnN0IGVtaXRzT2JqZWN0ID0ge31cblxuICBlbWl0c0FycmF5LmZvckVhY2godmFsID0+IHtcbiAgICBlbWl0c09iamVjdFsgdmFsIF0gPSB0cnVlRm5cbiAgfSlcblxuICByZXR1cm4gZW1pdHNPYmplY3Rcbn1cbiIsImltcG9ydCB7IHJlZiwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgZ2V0RW1pdHNPYmplY3QgZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5nZXQtZW1pdHMtb2JqZWN0L2dldC1lbWl0cy1vYmplY3QuanMnXG5cbi8vIFRvIGJlIHVzZWQgZm9yIHRoZSBjdXN0b20gY29tcG9uZW50XG4vLyB1c2VkIG9uIGEgRGlhbG9nIHBsdWdpblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEaWFsb2dQbHVnaW5Db21wb25lbnQgKCkge1xuICBjb25zdCB7IGVtaXQsIHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gIC8vIHdlIG5lZWQgYSBWdWUgcmVmZXJlbmNlIHRvIHRoZSBRRGlhbG9nXG4gIC8vIGNvbXBvbmVudCBzbyB3ZSBjYW4gaGFuZGxlIGl0O1xuICAvLyA8cS1kaWFsb2cgcmVmPVwiZGlhbG9nUmVmXCIgLi4uXG4gIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSBzZXR1cCgpIGluIHdoaWNoIHRoaXNcbiAgLy8gZnVuY3Rpb24gaXMgY2FsbGVkIHJldHVybnMgZGlhbG9nUmVmIHZhcmlhYmxlXG4gIGNvbnN0IGRpYWxvZ1JlZiA9IHJlZihudWxsKVxuXG4gIGZ1bmN0aW9uIHNob3cgKCkgeyBkaWFsb2dSZWYudmFsdWUuc2hvdygpIH1cbiAgZnVuY3Rpb24gaGlkZSAoKSB7IGRpYWxvZ1JlZi52YWx1ZS5oaWRlKCkgfVxuXG4gIGZ1bmN0aW9uIG9uRGlhbG9nT0sgKHBheWxvYWQpIHtcbiAgICBlbWl0KCdvaycsIHBheWxvYWQpXG4gICAgaGlkZSgpXG4gIH1cblxuICBmdW5jdGlvbiBvbkRpYWxvZ0hpZGUgKCkgeyBlbWl0KCdoaWRlJykgfVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kcyByZXF1aXJlZCBieSBEaWFsb2cgcGx1Z2luXG4gIE9iamVjdC5hc3NpZ24ocHJveHksIHsgc2hvdywgaGlkZSB9KVxuXG4gIHJldHVybiB7XG4gICAgZGlhbG9nUmVmLFxuICAgIG9uRGlhbG9nSGlkZSxcbiAgICBvbkRpYWxvZ09LLFxuICAgIG9uRGlhbG9nQ2FuY2VsOiBoaWRlXG4gIH1cbn1cblxuLy8gRG9uJ3QgZm9yZ2V0IHRvIHVwZGF0ZSB0aGUgdHlwZXMgaW4gXCJ1aS90eXBlcy9jb21wb3NhYmxlcy5kLnRzXCJcbmNvbnN0IGVtaXRzID0gWyAnb2snLCAnaGlkZScgXVxuXG51c2VEaWFsb2dQbHVnaW5Db21wb25lbnQuZW1pdHMgPSBlbWl0c1xudXNlRGlhbG9nUGx1Z2luQ29tcG9uZW50LmVtaXRzT2JqZWN0ID0gZ2V0RW1pdHNPYmplY3QoZW1pdHMpXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHJlZj1cImRpYWxvZ1JlZlwiXG4gICAgQGhpZGU9XCJvbkRpYWxvZ0hpZGVcIj5cbiAgICA8cS1jYXJkXG4gICAgICBjbGFzcz1cInNldHRpbmdzLWVkaXRvclwiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwidGV4dC1oNlwiPlxuICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtc2VwYXJhdG9yIC8+XG5cbiAgICAgIDxxLWJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICBab29tIHNlbnNpdGl2aXR5OiB7eyBpc3RvcmUuc2V0dGluZ3Muem9vbVN0ZXAgfX0gKDAuMDUgdG8gMC41KVxuICAgICAgPC9xLWJhZGdlPlxuXG4gICAgICA8cS1zbGlkZXJcbiAgICAgICAgY2xhc3M9XCJxLXB5LWxnXCJcbiAgICAgICAgOm1pbj1cIjAuMDVcIlxuICAgICAgICA6bWF4PVwiMC41XCJcbiAgICAgICAgOnN0ZXA9XCIwLjA1XCJcbiAgICAgICAgbGFiZWxcbiAgICAgICAgbGFiZWwtYWx3YXlzXG4gICAgICAgIHN3aXRjaC1sYWJlbC1zaWRlXG4gICAgICAgIHYtbW9kZWw9XCJpc3RvcmUuc2V0dGluZ3Muem9vbVN0ZXBcIlxuICAgICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG5cbiAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGxhYmVsPVwiVG91Y2ggbG9ja1wiXG4gICAgICAgICAgdi1tb2RlbD1cImlzdG9yZS5zZXR0aW5ncy56b29tVG91Y2hMb2NrXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPHEtdG9vbHRpcD5XaGVuIHRydWUsIHBhbiBvciB6b29tIHJlcXVpcmVzIHRvdWNoIHVzaW5nIHR3byBmaW5nZXJzLjwvcS10b29sdGlwPlxuICAgICAgICA8L3EtY2hlY2tib3g+XG5cbiAgICAgICAgPHEtY2hlY2tib3hcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGxhYmVsPVwiV2hlZWwgbG9ja1wiXG4gICAgICAgICAgdi1tb2RlbD1cImlzdG9yZS5zZXR0aW5ncy56b29tV2hlZWxMb2NrXCI+XG4gICAgICAgICAgPHEtdG9vbHRpcD5XaGVuIHRydWUsIHpvb20gdXNpbmcgd2hlZWwgaXMgZGlzYWJsZWQgdW50aWwgQ29udHJvbCBpcyBwcmVzc2VkLi48L3EtdG9vbHRpcD5cbiAgICAgICAgPC9xLWNoZWNrYm94PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgIDxxLWJ0biBjb2xvcj1cInByaW1hcnlcIiBsYWJlbD1cIk9LXCIgQGNsaWNrPVwib25EaWFsb2dPS1wiIC8+XG4gICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuaW1wb3J0IHsgdXNlRGlhbG9nUGx1Z2luQ29tcG9uZW50IH0gZnJvbSAncXVhc2FyJ1xuaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuXG5kZWZpbmVFbWl0cyhbXG4gICAgLi4udXNlRGlhbG9nUGx1Z2luQ29tcG9uZW50LmVtaXRzXG5dKVxuXG5jb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbmNvbnN0IHsgZGlhbG9nUmVmLCBvbkRpYWxvZ0hpZGUsIG9uRGlhbG9nT0sgfSA9IHVzZURpYWxvZ1BsdWdpbkNvbXBvbmVudCgpXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5zZXR0aW5ncy1lZGl0b3Ige1xuICAgIG1pbi13aWR0aDogNjAwcHg7XG59XG48L3N0eWxlPlxuIiwiLyohIE5hbm9Qb3AgMi40LjIgTUlUIHwgaHR0cHM6Ly9naXRodWIuY29tL1NpbW9ud2VwL25hbm9wb3AgKi9cbmNvbnN0IE4gPSBcIjIuNC4yXCIsIEkgPSB7XG4gIHZhcmlhbnRGbGlwT3JkZXI6IHsgc3RhcnQ6IFwic21lXCIsIG1pZGRsZTogXCJtc2VcIiwgZW5kOiBcImVtc1wiIH0sXG4gIHBvc2l0aW9uRmxpcE9yZGVyOiB7IHRvcDogXCJ0YnJsXCIsIHJpZ2h0OiBcInJsdGJcIiwgYm90dG9tOiBcImJ0cmxcIiwgbGVmdDogXCJscmJ0XCIgfSxcbiAgcG9zaXRpb246IFwiYm90dG9tXCIsXG4gIG1hcmdpbjogOCxcbiAgcGFkZGluZzogMFxufSwgSiA9IChuLCBpLCBtKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb250YWluZXI6IHIsXG4gICAgYXJyb3c6IGEsXG4gICAgbWFyZ2luOiBlLFxuICAgIHBhZGRpbmc6IGwsXG4gICAgcG9zaXRpb246IFYsXG4gICAgdmFyaWFudEZsaXBPcmRlcjogQyxcbiAgICBwb3NpdGlvbkZsaXBPcmRlcjogTVxuICB9ID0ge1xuICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIC4uLkksXG4gICAgLi4ubVxuICB9LCB7IGxlZnQ6IEYsIHRvcDogSyB9ID0gaS5zdHlsZTtcbiAgaS5zdHlsZS5sZWZ0ID0gXCIwXCIsIGkuc3R5bGUudG9wID0gXCIwXCI7XG4gIGNvbnN0IHQgPSBuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBvID0gaS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgUCA9IHtcbiAgICB0OiB0LnRvcCAtIG8uaGVpZ2h0IC0gZSxcbiAgICBiOiB0LmJvdHRvbSArIGUsXG4gICAgcjogdC5yaWdodCArIGUsXG4gICAgbDogdC5sZWZ0IC0gby53aWR0aCAtIGVcbiAgfSwgUiA9IHtcbiAgICB2czogdC5sZWZ0LFxuICAgIHZtOiB0LmxlZnQgKyB0LndpZHRoIC8gMiAtIG8ud2lkdGggLyAyLFxuICAgIHZlOiB0LmxlZnQgKyB0LndpZHRoIC0gby53aWR0aCxcbiAgICBoczogdC50b3AsXG4gICAgaG06IHQuYm90dG9tIC0gdC5oZWlnaHQgLyAyIC0gby5oZWlnaHQgLyAyLFxuICAgIGhlOiB0LmJvdHRvbSAtIG8uaGVpZ2h0XG4gIH0sIFskLCBFID0gXCJtaWRkbGVcIl0gPSBWLnNwbGl0KFwiLVwiKSwgTCA9IE1bJF0sIGogPSBDW0VdLCB7IHRvcDogeSwgbGVmdDogeCwgYm90dG9tOiBCLCByaWdodDogTyB9ID0gcjtcbiAgZm9yIChjb25zdCBjIG9mIEwpIHtcbiAgICBjb25zdCBzID0gYyA9PT0gXCJ0XCIgfHwgYyA9PT0gXCJiXCI7XG4gICAgbGV0IHAgPSBQW2NdO1xuICAgIGNvbnN0IFtkLCBnXSA9IHMgPyBbXCJ0b3BcIiwgXCJsZWZ0XCJdIDogW1wibGVmdFwiLCBcInRvcFwiXSwgW3UsIHZdID0gcyA/IFtvLmhlaWdodCwgby53aWR0aF0gOiBbby53aWR0aCwgby5oZWlnaHRdLCBbeiwgVF0gPSBzID8gW0IsIE9dIDogW08sIEJdLCBbSCwga10gPSBzID8gW3ksIHhdIDogW3gsIHldO1xuICAgIGlmICghKHAgPCBIIHx8IHAgKyB1ICsgbCA+IHopKVxuICAgICAgZm9yIChjb25zdCBiIG9mIGopIHtcbiAgICAgICAgbGV0IGYgPSBSWyhzID8gXCJ2XCIgOiBcImhcIikgKyBiXTtcbiAgICAgICAgaWYgKCEoZiA8IGsgfHwgZiArIHYgKyBsID4gVCkpIHtcbiAgICAgICAgICBpZiAoZiAtPSBvW2ddLCBwIC09IG9bZF0sIGkuc3R5bGVbZ10gPSBgJHtmfXB4YCwgaS5zdHlsZVtkXSA9IGAke3B9cHhgLCBhKSB7XG4gICAgICAgICAgICBjb25zdCB3ID0gcyA/IHQud2lkdGggLyAyIDogdC5oZWlnaHQgLyAyLCBoID0gdiAvIDIsIFMgPSB3ID4gaCwgcSA9IHtcbiAgICAgICAgICAgICAgczogUyA/IGggOiB3LFxuICAgICAgICAgICAgICBtOiBoLFxuICAgICAgICAgICAgICBlOiBTID8gaCA6IHYgLSB3XG4gICAgICAgICAgICB9LCBBID0ge1xuICAgICAgICAgICAgICB0OiB1LFxuICAgICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgICByOiAwLFxuICAgICAgICAgICAgICBsOiB1XG4gICAgICAgICAgICB9LCBEID0gZiArIHFbYl0sIEcgPSBwICsgQVtjXTtcbiAgICAgICAgICAgIGEuc3R5bGVbZ10gPSBgJHtEfXB4YCwgYS5zdHlsZVtkXSA9IGAke0d9cHhgO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYyArIGI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICByZXR1cm4gaS5zdHlsZS5sZWZ0ID0gRiwgaS5zdHlsZS50b3AgPSBLLCBudWxsO1xufSwgUSA9IChuLCBpLCBtKSA9PiB7XG4gIGNvbnN0IHIgPSB0eXBlb2YgbiA9PSBcIm9iamVjdFwiICYmICEobiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSA/IG4gOiB7IHJlZmVyZW5jZTogbiwgcG9wcGVyOiBpLCAuLi5tIH07XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogUmVwb3NpdGlvbnMgdGhlIGN1cnJlbnQgcG9wcGVyLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbmFsIG9wdGlvbnMgd2hpY2ggZ2V0IG1lcmdlZCB3aXRoIHRoZSBjdXJyZW50IG9uZXMuXG4gICAgICovXG4gICAgdXBkYXRlKGEgPSByKSB7XG4gICAgICBjb25zdCB7IHJlZmVyZW5jZTogZSwgcG9wcGVyOiBsIH0gPSBPYmplY3QuYXNzaWduKHIsIGEpO1xuICAgICAgaWYgKCFsIHx8ICFlKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQb3BwZXItIG9yIHJlZmVyZW5jZS1lbGVtZW50IG1pc3NpbmcuXCIpO1xuICAgICAgcmV0dXJuIEooZSwgbCwgcik7XG4gICAgfVxuICB9O1xufTtcbmV4cG9ydCB7XG4gIFEgYXMgY3JlYXRlUG9wcGVyLFxuICBJIGFzIGRlZmF1bHRzLFxuICBKIGFzIHJlcG9zaXRpb24sXG4gIE4gYXMgdmVyc2lvblxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5hbm9wb3AubWpzLm1hcFxuIiwiLy8gUm9iZXJ0IFBlbm5lcidzIGVhc2VJbk91dFF1YWRcblxuLy8gZmluZCB0aGUgcmVzdCBvZiBoaXMgZWFzaW5nIGZ1bmN0aW9ucyBoZXJlOiBodHRwOi8vcm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4vLyBmaW5kIHRoZW0gZXhwb3J0ZWQgZm9yIEVTNiBjb25zdW1wdGlvbiBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vamF4Z2VsbGVyL2V6LmpzXG5cbnZhciBlYXNlSW5PdXRRdWFkID0gZnVuY3Rpb24gZWFzZUluT3V0UXVhZCh0LCBiLCBjLCBkKSB7XG4gIHQgLz0gZCAvIDI7XG4gIGlmICh0IDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuICB0LS07XG4gIHJldHVybiAtYyAvIDIgKiAodCAqICh0IC0gMikgLSAxKSArIGI7XG59O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxudmFyIGp1bXBlciA9IGZ1bmN0aW9uIGp1bXBlcigpIHtcbiAgLy8gcHJpdmF0ZSB2YXJpYWJsZSBjYWNoZVxuICAvLyBubyB2YXJpYWJsZXMgYXJlIGNyZWF0ZWQgZHVyaW5nIGEganVtcCwgcHJldmVudGluZyBtZW1vcnkgbGVha3NcblxuICB2YXIgZWxlbWVudCA9IHZvaWQgMDsgLy8gZWxlbWVudCB0byBzY3JvbGwgdG8gICAgICAgICAgICAgICAgICAgKG5vZGUpXG5cbiAgdmFyIHN0YXJ0ID0gdm9pZCAwOyAvLyB3aGVyZSBzY3JvbGwgc3RhcnRzICAgICAgICAgICAgICAgICAgICAocHgpXG4gIHZhciBzdG9wID0gdm9pZCAwOyAvLyB3aGVyZSBzY3JvbGwgc3RvcHMgICAgICAgICAgICAgICAgICAgICAocHgpXG5cbiAgdmFyIG9mZnNldCA9IHZvaWQgMDsgLy8gYWRqdXN0bWVudCBmcm9tIHRoZSBzdG9wIHBvc2l0aW9uICAgICAgKHB4KVxuICB2YXIgZWFzaW5nID0gdm9pZCAwOyAvLyBlYXNpbmcgZnVuY3Rpb24gICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24pXG4gIHZhciBhMTF5ID0gdm9pZCAwOyAvLyBhY2Nlc3NpYmlsaXR5IHN1cHBvcnQgZmxhZyAgICAgICAgICAgICAoYm9vbGVhbilcblxuICB2YXIgZGlzdGFuY2UgPSB2b2lkIDA7IC8vIGRpc3RhbmNlIG9mIHNjcm9sbCAgICAgICAgICAgICAgICAgICAgIChweClcbiAgdmFyIGR1cmF0aW9uID0gdm9pZCAwOyAvLyBzY3JvbGwgZHVyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAobXMpXG5cbiAgdmFyIHRpbWVTdGFydCA9IHZvaWQgMDsgLy8gdGltZSBzY3JvbGwgc3RhcnRlZCAgICAgICAgICAgICAgICAgICAgKG1zKVxuICB2YXIgdGltZUVsYXBzZWQgPSB2b2lkIDA7IC8vIHRpbWUgc3BlbnQgc2Nyb2xsaW5nIHRodXMgZmFyICAgICAgICAgIChtcylcblxuICB2YXIgbmV4dCA9IHZvaWQgMDsgLy8gbmV4dCBzY3JvbGwgcG9zaXRpb24gICAgICAgICAgICAgICAgICAgKHB4KVxuXG4gIHZhciBjYWxsYmFjayA9IHZvaWQgMDsgLy8gdG8gY2FsbCB3aGVuIGRvbmUgc2Nyb2xsaW5nICAgICAgICAgICAgKGZ1bmN0aW9uKVxuXG4gIC8vIHNjcm9sbCBwb3NpdGlvbiBoZWxwZXJcblxuICBmdW5jdGlvbiBsb2NhdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB9XG5cbiAgLy8gZWxlbWVudCBvZmZzZXQgaGVscGVyXG5cbiAgZnVuY3Rpb24gdG9wKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBzdGFydDtcbiAgfVxuXG4gIC8vIHJBRiBsb29wIGhlbHBlclxuXG4gIGZ1bmN0aW9uIGxvb3AodGltZUN1cnJlbnQpIHtcbiAgICAvLyBzdG9yZSB0aW1lIHNjcm9sbCBzdGFydGVkLCBpZiBub3Qgc3RhcnRlZCBhbHJlYWR5XG4gICAgaWYgKCF0aW1lU3RhcnQpIHtcbiAgICAgIHRpbWVTdGFydCA9IHRpbWVDdXJyZW50O1xuICAgIH1cblxuICAgIC8vIGRldGVybWluZSB0aW1lIHNwZW50IHNjcm9sbGluZyBzbyBmYXJcbiAgICB0aW1lRWxhcHNlZCA9IHRpbWVDdXJyZW50IC0gdGltZVN0YXJ0O1xuXG4gICAgLy8gY2FsY3VsYXRlIG5leHQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgbmV4dCA9IGVhc2luZyh0aW1lRWxhcHNlZCwgc3RhcnQsIGRpc3RhbmNlLCBkdXJhdGlvbik7XG5cbiAgICAvLyBzY3JvbGwgdG8gaXRcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgbmV4dCk7XG5cbiAgICAvLyBjaGVjayBwcm9ncmVzc1xuICAgIHRpbWVFbGFwc2VkIDwgZHVyYXRpb24gPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApIC8vIGNvbnRpbnVlIHNjcm9sbCBsb29wXG4gICAgOiBkb25lKCk7IC8vIHNjcm9sbGluZyBpcyBkb25lXG4gIH1cblxuICAvLyBzY3JvbGwgZmluaXNoZWQgaGVscGVyXG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAvLyBhY2NvdW50IGZvciByQUYgdGltZSByb3VuZGluZyBpbmFjY3VyYWNpZXNcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc3RhcnQgKyBkaXN0YW5jZSk7XG5cbiAgICAvLyBpZiBzY3JvbGxpbmcgdG8gYW4gZWxlbWVudCwgYW5kIGFjY2Vzc2liaWxpdHkgaXMgZW5hYmxlZFxuICAgIGlmIChlbGVtZW50ICYmIGExMXkpIHtcbiAgICAgIC8vIGFkZCB0YWJpbmRleCBpbmRpY2F0aW5nIHByb2dyYW1tYXRpYyBmb2N1c1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgICAgIC8vIGZvY3VzIHRoZSBlbGVtZW50XG4gICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLy8gaWYgaXQgZXhpc3RzLCBmaXJlIHRoZSBjYWxsYmFja1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgdGltZSBmb3IgbmV4dCBqdW1wXG4gICAgdGltZVN0YXJ0ID0gZmFsc2U7XG4gIH1cblxuICAvLyBBUElcblxuICBmdW5jdGlvbiBqdW1wKHRhcmdldCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIC8vIHJlc29sdmUgb3B0aW9ucywgb3IgdXNlIGRlZmF1bHRzXG4gICAgZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uIHx8IDEwMDA7XG4gICAgb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQgfHwgMDtcbiAgICBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2s7IC8vIFwidW5kZWZpbmVkXCIgaXMgYSBzdWl0YWJsZSBkZWZhdWx0LCBhbmQgd29uJ3QgYmUgY2FsbGVkXG4gICAgZWFzaW5nID0gb3B0aW9ucy5lYXNpbmcgfHwgZWFzZUluT3V0UXVhZDtcbiAgICBhMTF5ID0gb3B0aW9ucy5hMTF5IHx8IGZhbHNlO1xuXG4gICAgLy8gY2FjaGUgc3RhcnRpbmcgcG9zaXRpb25cbiAgICBzdGFydCA9IGxvY2F0aW9uKCk7XG5cbiAgICAvLyByZXNvbHZlIHRhcmdldFxuICAgIHN3aXRjaCAodHlwZW9mIHRhcmdldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodGFyZ2V0KSkge1xuICAgICAgLy8gc2Nyb2xsIGZyb20gY3VycmVudCBwb3NpdGlvblxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgZWxlbWVudCA9IHVuZGVmaW5lZDsgLy8gbm8gZWxlbWVudCB0byBzY3JvbGwgdG9cbiAgICAgICAgYTExeSA9IGZhbHNlOyAvLyBtYWtlIHN1cmUgYWNjZXNzaWJpbGl0eSBpcyBvZmZcbiAgICAgICAgc3RvcCA9IHN0YXJ0ICsgdGFyZ2V0O1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gc2Nyb2xsIHRvIGVsZW1lbnQgKG5vZGUpXG4gICAgICAvLyBib3VuZGluZyByZWN0IGlzIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydFxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgZWxlbWVudCA9IHRhcmdldDtcbiAgICAgICAgc3RvcCA9IHRvcChlbGVtZW50KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIHNjcm9sbCB0byBlbGVtZW50IChzZWxlY3RvcilcbiAgICAgIC8vIGJvdW5kaW5nIHJlY3QgaXMgcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICAgICAgICBzdG9wID0gdG9wKGVsZW1lbnQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyByZXNvbHZlIHNjcm9sbCBkaXN0YW5jZSwgYWNjb3VudGluZyBmb3Igb2Zmc2V0XG4gICAgZGlzdGFuY2UgPSBzdG9wIC0gc3RhcnQgKyBvZmZzZXQ7XG5cbiAgICAvLyByZXNvbHZlIGR1cmF0aW9uXG4gICAgc3dpdGNoIChfdHlwZW9mKG9wdGlvbnMuZHVyYXRpb24pKSB7XG4gICAgICAvLyBudW1iZXIgaW4gbXNcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIGZ1bmN0aW9uIHBhc3NlZCB0aGUgZGlzdGFuY2Ugb2YgdGhlIHNjcm9sbFxuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24oZGlzdGFuY2UpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBzdGFydCB0aGUgbG9vcFxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gIH1cblxuICAvLyBleHBvc2Ugb25seSB0aGUganVtcCBtZXRob2RcbiAgcmV0dXJuIGp1bXA7XG59O1xuXG4vLyBleHBvcnQgc2luZ2xldG9uXG5cbnZhciBzaW5nbGV0b24gPSBqdW1wZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uO1xuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIGJlLCBjb21wdXRlZCBhcyB2LCByZWYgYXMgZCwgcmVhY3RpdmUgYXMgdWUsIG9uTW91bnRlZCBhcyBTZSwgb25Vbm1vdW50ZWQgYXMgd2UsIHdhdGNoIGFzIFRlLCBuZXh0VGljayBhcyBOLCBjcmVhdGVCbG9jayBhcyBrZSwgb3BlbkJsb2NrIGFzIHcsIFRlbGVwb3J0IGFzICRlLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgVCwgbm9ybWFsaXplQ2xhc3MgYXMgTGUsIG5vcm1hbGl6ZVN0eWxlIGFzIHhlLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgTCwgY3JlYXRlQ29tbWVudFZOb2RlIGFzIHgsIHJlbmRlclNsb3QgYXMgc2UsIHRvRGlzcGxheVN0cmluZyBhcyBDLCB3aXRoTW9kaWZpZXJzIGFzIFUgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyBjcmVhdGVQb3BwZXIgYXMgQ2UgfSBmcm9tIFwibmFub3BvcFwiO1xuaW1wb3J0IEFlIGZyb20gXCJqdW1wLmpzXCI7XG5jb25zdCBFZSA9IChlLCBuLCBvLCB0KSA9PiAoZSAvPSB0LCBvICogZSAqIGUgKyBuKSwgQmUgPSAoZSwgbiwgbywgdCkgPT4gKGUgLz0gdCwgLW8gKiBlICogKGUgLSAyKSArIG4pLCBpZSA9IChlLCBuLCBvLCB0KSA9PiAoZSAvPSB0IC8gMiwgZSA8IDEgPyBvIC8gMiAqIGUgKiBlICsgbiA6IChlLS0sIC1vIC8gMiAqIChlICogKGUgLSAyKSAtIDEpICsgbikpLCBEZSA9IChlLCBuLCBvLCB0KSA9PiAoZSAvPSB0LCBvICogZSAqIGUgKiBlICsgbiksIGplID0gKGUsIG4sIG8sIHQpID0+IChlIC89IHQsIGUtLSwgbyAqIChlICogZSAqIGUgKyAxKSArIG4pLCBJZSA9IChlLCBuLCBvLCB0KSA9PiAoZSAvPSB0IC8gMiwgZSA8IDEgPyBvIC8gMiAqIGUgKiBlICogZSArIG4gOiAoZSAtPSAyLCBvIC8gMiAqIChlICogZSAqIGUgKyAyKSArIG4pKSwgT2UgPSAoZSwgbiwgbywgdCkgPT4gKGUgLz0gdCwgbyAqIGUgKiBlICogZSAqIGUgKyBuKSwgUGUgPSAoZSwgbiwgbywgdCkgPT4gKGUgLz0gdCwgZS0tLCAtbyAqIChlICogZSAqIGUgKiBlIC0gMSkgKyBuKSwgX2UgPSAoZSwgbiwgbywgdCkgPT4gKGUgLz0gdCAvIDIsIGUgPCAxID8gbyAvIDIgKiBlICogZSAqIGUgKiBlICsgbiA6IChlIC09IDIsIC1vIC8gMiAqIChlICogZSAqIGUgKiBlIC0gMikgKyBuKSksIE5lID0gKGUsIG4sIG8sIHQpID0+IChlIC89IHQsIG8gKiBlICogZSAqIGUgKiBlICogZSArIG4pLCBxZSA9IChlLCBuLCBvLCB0KSA9PiAoZSAvPSB0LCBlLS0sIG8gKiAoZSAqIGUgKiBlICogZSAqIGUgKyAxKSArIG4pLCBNZSA9IChlLCBuLCBvLCB0KSA9PiAoZSAvPSB0IC8gMiwgZSA8IDEgPyBvIC8gMiAqIGUgKiBlICogZSAqIGUgKiBlICsgbiA6IChlIC09IDIsIG8gLyAyICogKGUgKiBlICogZSAqIGUgKiBlICsgMikgKyBuKSksIFFlID0ge1xuICBlYXNlSW5RdWFkOiBFZSxcbiAgZWFzZU91dFF1YWQ6IEJlLFxuICBlYXNlSW5PdXRRdWFkOiBpZSxcbiAgZWFzZUluQ3ViaWM6IERlLFxuICBlYXNlT3V0Q3ViaWM6IGplLFxuICBlYXNlSW5PdXRDdWJpYzogSWUsXG4gIGVhc2VJblF1YXJ0OiBPZSxcbiAgZWFzZU91dFF1YXJ0OiBQZSxcbiAgZWFzZUluT3V0UXVhcnQ6IF9lLFxuICBlYXNlSW5RdWludDogTmUsXG4gIGVhc2VPdXRRdWludDogcWUsXG4gIGVhc2VJbk91dFF1aW50OiBNZVxufSwgemUgPSBbXCJkYXRhLWhpZGRlblwiXSwgVmUgPSBbXCJpZFwiLCBcImRhdGEtaGlkZGVuXCJdLCBSZSA9IFtcImlkXCIsIFwiYXJpYS1tb2RhbFwiLCBcImFyaWEtbGFiZWxcIiwgXCJhcmlhLWRlc2NyaWJlZGJ5XCIsIFwidGFiaW5kZXhcIiwgXCJkYXRhLWhpZGRlblwiXSwgRmUgPSB7XG4gIGtleTogMCxcbiAgcm9sZTogXCJzdGF0dXNcIixcbiAgXCJhcmlhLWxpdmVcIjogXCJwb2xpdGVcIixcbiAgXCJhcmlhLWF0b21pY1wiOiBcInRydWVcIixcbiAgY2xhc3M6IFwidmp0LXNyLW9ubHlcIlxufSwgSGUgPSBbXCJpZFwiXSwgVWUgPSBbXCJpZFwiLCBcImlubmVySFRNTFwiXSwgR2UgPSB7IGNsYXNzOiBcInZqdC1hY3Rpb25zXCIgfSwgS2UgPSBbXCJhcmlhLWxhYmVsXCJdLCBKZSA9IFtcImFyaWEtbGFiZWxcIl0sIFdlID0gW1wiYXJpYS1sYWJlbFwiXSwgdHQgPSAvKiBAX19QVVJFX18gKi8gYmUoe1xuICBfX25hbWU6IFwiVlRvdXJcIixcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiB7IGRlZmF1bHQ6IFwidG91clwiIH0sXG4gICAgc3RlcHM6IHt9LFxuICAgIGJhY2tkcm9wOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6ICExIH0sXG4gICAgYXV0b1N0YXJ0OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6ICExIH0sXG4gICAgc3RhcnREZWxheTogeyBkZWZhdWx0OiAwIH0sXG4gICAgaGlnaGxpZ2h0OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6ICExIH0sXG4gICAgbWFyZ2luOiB7IGRlZmF1bHQ6IDggfSxcbiAgICBidXR0b25MYWJlbHM6IHt9LFxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZTogeyBkZWZhdWx0OiBcIm5ldmVyXCIgfSxcbiAgICBoaWRlU2tpcDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiAhMSB9LFxuICAgIGhpZGVBcnJvdzogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiAhMSB9LFxuICAgIG5vU2Nyb2xsOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6ICExIH0sXG4gICAgcmVzaXplVGltZW91dDogeyBkZWZhdWx0OiAyNTAgfSxcbiAgICBkZWZhdWx0UGxhY2VtZW50OiB7IGRlZmF1bHQ6IFwicmlnaHRcIiB9LFxuICAgIGp1bXBPcHRpb25zOiB7fSxcbiAgICBlbmFibGVBMTF5OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6ICExIH0sXG4gICAga2V5Ym9hcmROYXY6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogITAgfSxcbiAgICBhcmlhTGFiZWw6IHsgZGVmYXVsdDogXCJHdWlkZWQgdG91clwiIH0sXG4gICAgdGVsZXBvcnREZWxheTogeyBkZWZhdWx0OiAxMDAgfSxcbiAgICByZXN0YXJ0T25Qcm9wQ2hhbmdlOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6ICEwIH1cbiAgfSxcbiAgZW1pdHM6IFtcIm9uVG91clN0YXJ0XCIsIFwib25Ub3VyRW5kXCIsIFwib25Ub3VyU3RlcFwiXSxcbiAgc2V0dXAoZSwgeyBleHBvc2U6IG4sIGVtaXQ6IG8gfSkge1xuICAgIGNvbnN0IHQgPSBlLCBxID0gbywgayA9IHYoKCkgPT4gdC5uYW1lID8gYHZqdC0ke3QubmFtZX1gIDogXCJ2anQtdG91clwiKSwgaCA9IGQoKSwgbCA9IGQoMCksIGkgPSBkKDApLCBwID0gZCgxKSwgZyA9IHYoKCkgPT4gdC5zdGVwc1tsLnZhbHVlXSksIGNlID0gdigoKSA9PiB0LnN0ZXBzW2kudmFsdWVdKSwgdmUgPSB2KCgpID0+IHQuc3RlcHNbcC52YWx1ZV0pLCBHID0gdWUoe1xuICAgICAgY3VycmVudFN0ZXA6IGwsXG4gICAgICBsYXN0U3RlcDogaSxcbiAgICAgIG5leHRTdGVwOiBwLFxuICAgICAgZ2V0Q3VycmVudFN0ZXA6IGcsXG4gICAgICBnZXRMYXN0U3RlcDogY2UsXG4gICAgICBnZXROZXh0U3RlcDogdmVcbiAgICB9KSwgSyA9IHYoXG4gICAgICAoKSA9PiBsLnZhbHVlID09PSB0LnN0ZXBzLmxlbmd0aCAtIDFcbiAgICApLCBKID0gdigoKSA9PiBLLnZhbHVlID8gdC5idXR0b25MYWJlbHM/LmRvbmUgPz8gXCJEb25lXCIgOiB0LmJ1dHRvbkxhYmVscz8ubmV4dCA/PyBcIk5leHRcIiksIEEgPSBkKFwiXCIpLCBzID0gZCghMSksIE0gPSBkKCExKSwgZGUgPSBkKFwicmlnaHRcIiksIGYgPSBkKCExKSwgUSA9IHYoKCkgPT4gdC5uYW1lID8gYHZqdC0ke3QubmFtZX1gIDogXCJ2anRcIiksIEUgPSB2KCgpID0+IGAke1EudmFsdWV9LXZqdC10b29sdGlwYCksIFcgPSB2KCgpID0+IGAke1EudmFsdWV9LXZqdC1iYWNrZHJvcGApLCBmZSA9IHYoKCkgPT4gYCR7US52YWx1ZX0tdmp0LWFycm93YCksIHkgPSB2KFxuICAgICAgKCkgPT4gdC5uYW1lID8gYCR7dC5uYW1lfXZqdC1oaWdobGlnaHRgIDogXCJ2anQtaGlnaGxpZ2h0XCJcbiAgICApLCBtID0gZCgpLCBYID0gZCgpO1xuICAgIGxldCBCID0gbnVsbDtcbiAgICBjb25zdCBZID0ge1xuICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgIG9mZnNldDogLTEwMFxuICAgIH0sIEQgPSAoKSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrLnZhbHVlKSA9PT0gXCJ0cnVlXCIsIGogPSB1ZSh7XG4gICAgICBuYW1lOiB2b2lkIDAsXG4gICAgICBzdGVwc1JlZjogbnVsbFxuICAgIH0pLCBJID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCFEKCkpIHtcbiAgICAgICAgaWYgKHMudmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBhID0gdC5uYW1lICE9PSBqLm5hbWUsIHIgPSB0LnN0ZXBzICE9PSBqLnN0ZXBzUmVmO1xuICAgICAgICAgIGlmICghKGEgfHwgcikpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgYigpLCBhd2FpdCBOKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQuc2F2ZVRvTG9jYWxTdG9yYWdlID09PSBcInN0ZXBcIikge1xuICAgICAgICAgIGNvbnN0IGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrLnZhbHVlKTtcbiAgICAgICAgICBsLnZhbHVlID0gcGFyc2VJbnQoYSB8fCBcIjBcIiwgMTApLCBsLnZhbHVlID4gMCAmJiAoaS52YWx1ZSA9IE1hdGgubWF4KGwudmFsdWUgLSAxLCAwKSwgcC52YWx1ZSA9IGwudmFsdWUgKyAxKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgbC52YWx1ZSA9IDA7XG4gICAgICAgIFIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCBfKGwudmFsdWUpO1xuICAgICAgICAgIGNvbnN0IGEgPSBnLnZhbHVlO1xuICAgICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gc3RlcCBkYXRhIGF2YWlsYWJsZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBhLnRhcmdldFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKCFyKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFRvdXIgdGFyZ2V0IGVsZW1lbnQgbm90IGZvdW5kOiAke2EudGFyZ2V0fWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXdhaXQgbmV3IFByb21pc2UoKHUpID0+IHtcbiAgICAgICAgICAgIEYgPSBzZXRUaW1lb3V0KHUsIHQudGVsZXBvcnREZWxheSk7XG4gICAgICAgICAgfSksIG0udmFsdWUgfHwgKG0udmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYCMke0UudmFsdWV9YFxuICAgICAgICAgICkpLCBYLnZhbHVlIHx8IChYLnZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAjJHtXLnZhbHVlfWBcbiAgICAgICAgICApKSwgIW0udmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRvb2x0aXAgZWxlbWVudCBub3QgZm91bmQgaW4gRE9NXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0LmVuYWJsZUExMXkgJiYgdHlwZW9mIGRvY3VtZW50IDwgXCJ1XCIgJiYgKEIgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSwgcy52YWx1ZSA9ICEwLCBmLnZhbHVlID0gITAsIGF3YWl0IE4oKTtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB1ID0gdC5oaWdobGlnaHQgfHwgYS5oaWdobGlnaHQsIGMgPSB0Lm1hcmdpbiB8fCAodSA/IDE0IDogOCk7XG4gICAgICAgICAgICBoLnZhbHVlID0gQ2UociwgbS52YWx1ZSwge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYS5wbGFjZW1lbnQgfHwgdC5kZWZhdWx0UGxhY2VtZW50LFxuICAgICAgICAgICAgICBtYXJnaW46IGNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhd2FpdCAkKCksIGYudmFsdWUgPSAhMSwgdC5lbmFibGVBMTF5ICYmIChhd2FpdCBOKCksIG0udmFsdWU/LmZvY3VzKCkpLCBqLm5hbWUgPSB0Lm5hbWUsIGouc3RlcHNSZWYgPSB0LnN0ZXBzLCBxKFwib25Ub3VyU3RhcnRcIik7XG4gICAgICAgIH0sIHQuc3RhcnREZWxheSk7XG4gICAgICB9XG4gICAgfSwgYiA9ICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChSKSwgY2xlYXJUaW1lb3V0KEYpLCBzLnZhbHVlID0gITEsIE0udmFsdWUgPSAhMSwgZi52YWx1ZSA9ICExLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt5LnZhbHVlfWApLmZvckVhY2goKGEpID0+IGEuY2xhc3NMaXN0LnJlbW92ZSh5LnZhbHVlKSksIGgudmFsdWUgJiYgKGgudmFsdWUgPSB2b2lkIDApLCB0LmVuYWJsZUExMXkgJiYgQiAmJiAoQi5mb2N1cygpLCBCID0gbnVsbCk7XG4gICAgfSwgcGUgPSAoYSA9ICExKSA9PiB7XG4gICAgICBiKCksIGwudmFsdWUgPSAwLCBpLnZhbHVlID0gMCwgcC52YWx1ZSA9IDEsIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGsudmFsdWUpLCBhICYmIEkoKTtcbiAgICB9LCBPID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGF3YWl0IF8ocC52YWx1ZSksIGYudmFsdWUgPSAhMCwgaS52YWx1ZSA9IGwudmFsdWUsIGwudmFsdWUrKywgbC52YWx1ZSA+IHQuc3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHAudmFsdWUgPSBsLnZhbHVlICsgMSwgYXdhaXQgJCgpLCBmLnZhbHVlID0gITE7XG4gICAgfSwgUCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChhd2FpdCBfKGkudmFsdWUpLCBmLnZhbHVlID0gITAsIGwudmFsdWUgPSBpLnZhbHVlLCBpLnZhbHVlID0gTWF0aC5tYXgoaS52YWx1ZSAtIDEsIDApLCBsLnZhbHVlIDwgMCkge1xuICAgICAgICBTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHAudmFsdWUgPSBsLnZhbHVlICsgMSwgYXdhaXQgJCgpLCBmLnZhbHVlID0gITE7XG4gICAgfSwgUyA9ICgpID0+IHtcbiAgICAgIGIoKSwgdC5zYXZlVG9Mb2NhbFN0b3JhZ2UgIT09IFwibmV2ZXJcIiAmJiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrLnZhbHVlLCBcInRydWVcIiksIHEoXCJvblRvdXJFbmRcIik7XG4gICAgfSwgbWUgPSBhc3luYyAoYSkgPT4ge1xuICAgICAgaWYgKGEgPCAwIHx8IGEgPj0gdC5zdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBJbnZhbGlkIHN0ZXAgaW5kZXg6ICR7YX1gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXdhaXQgXyhhKSwgZi52YWx1ZSA9ICEwLCBsLnZhbHVlID0gYSwgaS52YWx1ZSA9IE1hdGgubWF4KGEgLSAxLCAwKSwgcC52YWx1ZSA9IGEgKyAxLCBhd2FpdCAkKCksIGYudmFsdWUgPSAhMTtcbiAgICB9LCBfID0gYXN5bmMgKGEpID0+IHtcbiAgICAgIGNvbnN0IHIgPSB0LnN0ZXBzW2FdO1xuICAgICAgcj8ub25CZWZvcmUgJiYgYXdhaXQgci5vbkJlZm9yZSgpO1xuICAgIH0sIGdlID0gKGEpID0+IHtcbiAgICAgICFhIHx8ICFtLnZhbHVlIHx8IChtLnZhbHVlLnNldEF0dHJpYnV0ZShcImRhdGEtYXJyb3dcIiwgYSksIGRlLnZhbHVlID0gYSk7XG4gICAgfSwgWiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBnLnZhbHVlO1xuICAgICAgaWYgKCFhIHx8ICFoLnZhbHVlKSByZXR1cm47XG4gICAgICBjb25zdCByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYS50YXJnZXRcbiAgICAgICk7XG4gICAgICBpZiAoIXIpIHJldHVybjtcbiAgICAgIGVlKCksIHRlKCk7XG4gICAgICBjb25zdCB1ID0gaC52YWx1ZS51cGRhdGUoe1xuICAgICAgICByZWZlcmVuY2U6IHIsXG4gICAgICAgIHBvc2l0aW9uOiBhLnBsYWNlbWVudCB8fCB0LmRlZmF1bHRQbGFjZW1lbnRcbiAgICAgIH0pO1xuICAgICAgZ2UodSB8fCB0LmRlZmF1bHRQbGFjZW1lbnQpO1xuICAgIH0sICQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBhID0gZy52YWx1ZTtcbiAgICAgIGlmICghYSkgcmV0dXJuO1xuICAgICAgY29uc3QgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGEudGFyZ2V0XG4gICAgICApO1xuICAgICAgIXIgfHwgIW0udmFsdWUgfHwgIWgudmFsdWUgfHwgKCF0Lm5vU2Nyb2xsICYmICFhLm5vU2Nyb2xsICYmIGF3YWl0IG5ldyBQcm9taXNlKCh1KSA9PiB7XG4gICAgICAgIGNvbnN0IGMgPSB7XG4gICAgICAgICAgZHVyYXRpb246IFkuZHVyYXRpb24sXG4gICAgICAgICAgb2Zmc2V0OiBZLm9mZnNldCxcbiAgICAgICAgICBlYXNpbmc6IFwiZWFzZUluT3V0UXVhZFwiLFxuICAgICAgICAgIGExMXk6IHQuZW5hYmxlQTExeSxcbiAgICAgICAgICAuLi50Lmp1bXBPcHRpb25zLFxuICAgICAgICAgIC4uLmEuanVtcE9wdGlvbnNcbiAgICAgICAgfSwgSCA9IFFlW2MuZWFzaW5nXSB8fCBpZTtcbiAgICAgICAgQWUociwge1xuICAgICAgICAgIGR1cmF0aW9uOiBjLmR1cmF0aW9uLFxuICAgICAgICAgIG9mZnNldDogYy5vZmZzZXQsXG4gICAgICAgICAgZWFzaW5nOiBILFxuICAgICAgICAgIGExMXk6IGMuYTExeSxcbiAgICAgICAgICBjYWxsYmFjazogKCkgPT4gdSgpXG4gICAgICAgIH0pO1xuICAgICAgfSksIFooKSwgdC5zYXZlVG9Mb2NhbFN0b3JhZ2UgPT09IFwic3RlcFwiICYmIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGsudmFsdWUsIGwudmFsdWUudG9TdHJpbmcoKSksIGEub25BZnRlciAmJiBhd2FpdCBhLm9uQWZ0ZXIoKSwgcShcIm9uVG91clN0ZXBcIiwgbC52YWx1ZSkpO1xuICAgIH0sIGVlID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7eS52YWx1ZX1gKS5mb3JFYWNoKCh1KSA9PiB1LmNsYXNzTGlzdC5yZW1vdmUoeS52YWx1ZSkpO1xuICAgICAgY29uc3QgYSA9IGcudmFsdWU7XG4gICAgICBpZiAoIWEgfHwgIXQuaGlnaGxpZ2h0ICYmICFhLmhpZ2hsaWdodCkge1xuICAgICAgICBBLnZhbHVlID0gXCJcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGEudGFyZ2V0XG4gICAgICApO1xuICAgICAgciAmJiAoci5jbGFzc0xpc3QuYWRkKHkudmFsdWUpLCBBLnZhbHVlID0gaGUoYC4ke3kudmFsdWV9YCkpO1xuICAgIH0sIHRlID0gKCkgPT4ge1xuICAgICAgY29uc3QgYSA9IGcudmFsdWUsIHIgPSB0LmJhY2tkcm9wIHx8ICEhYT8uYmFja2Ryb3A7XG4gICAgICBNLnZhbHVlID0gcjtcbiAgICB9LCB6ID0gKCkgPT4ge1xuICAgICAgRCgpIHx8IHMudmFsdWUgJiYgWigpO1xuICAgIH07XG4gICAgbGV0IFYsIFIsIEY7XG4gICAgY29uc3QgYWUgPSAoKSA9PiB7XG4gICAgICBEKCkgfHwgKGNsZWFyVGltZW91dChWKSwgeigpLCBWID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHooKTtcbiAgICAgIH0sIHQucmVzaXplVGltZW91dCkpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gaGUoYSkge1xuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA+IFwidVwiKSByZXR1cm4gXCJcIjtcbiAgICAgIGNvbnN0IHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEpO1xuICAgICAgaWYgKCFyKSByZXR1cm4gXCJcIjtcbiAgICAgIGNvbnN0IHUgPSByLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgcmV0dXJuIGBwb2x5Z29uKFxuICAgIDAlIDAlLFxuICAgIDAlIDEwMCUsXG4gICAgJHt1LmxlZnR9cHggMTAwJSxcbiAgICAke3UubGVmdH1weCAke3UudG9wfXB4LFxuICAgICR7dS5yaWdodH1weCAke3UudG9wfXB4LFxuICAgICR7dS5yaWdodH1weCAke3UuYm90dG9tfXB4LFxuICAgICR7dS5sZWZ0fXB4ICR7dS5ib3R0b219cHgsXG4gICAgJHt1LmxlZnR9cHggMTAwJSxcbiAgICAxMDAlIDEwMCUsXG4gICAgMTAwJSAwJVxuICApYDtcbiAgICB9XG4gICAgQS52YWx1ZSA9IFwiXCI7XG4gICAgY29uc3QgbmUgPSAoKSA9PiB7XG4gICAgICBEKCkgfHwgcy52YWx1ZSAmJiB6KCk7XG4gICAgfSwgb2UgPSAoYSkgPT4ge1xuICAgICAgaWYgKCEoIXMudmFsdWUgfHwgIXQuZW5hYmxlQTExeSB8fCAhdC5rZXlib2FyZE5hdikpXG4gICAgICAgIHN3aXRjaCAoYS5rZXkpIHtcbiAgICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgICAgICBTKCksIGEucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICAgICAgICBpZiAoYS5rZXkgPT09IFwiRW50ZXJcIiAmJiBhLnRhcmdldD8udGFnTmFtZSA9PT0gXCJCVVRUT05cIilcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgTygpLCBhLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICBsLnZhbHVlID4gMCAmJiAoUCgpLCBhLnByZXZlbnREZWZhdWx0KCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTZSgoKSA9PiB7XG4gICAgICB0LmtleWJvYXJkTmF2ICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvZSksIHQuYXV0b1N0YXJ0ICYmIEkoKSwgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgYWUpLCB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBuZSwgITApO1xuICAgIH0pLCB3ZSgoKSA9PiB7XG4gICAgICB0LmtleWJvYXJkTmF2ICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvZSksIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGFlKSwgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbmUsICEwKSwgY2xlYXJUaW1lb3V0KFYpLCBjbGVhclRpbWVvdXQoUiksIGNsZWFyVGltZW91dChGKSwgcy52YWx1ZSAmJiBiKCk7XG4gICAgfSksIFRlKFxuICAgICAgKCkgPT4gW3QubmFtZSwgdC5zdGVwcywgdC5yZXN0YXJ0T25Qcm9wQ2hhbmdlXSxcbiAgICAgIGFzeW5jIChbYSwgciwgdV0sIFtjLCBIXSkgPT4ge1xuICAgICAgICBpZiAoIXUgfHwgIXMudmFsdWUpIHJldHVybjtcbiAgICAgICAgY29uc3QgbGUgPSBhICE9PSBjO1xuICAgICAgICBpZiAobGUgfHwgciAhPT0gSCkge1xuICAgICAgICAgIGlmIChsZSAmJiBjICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNvbnN0IHJlID0gYyA/IGB2anQtaGlnaGxpZ2h0LSR7Y31gIDogXCJ2anQtaGlnaGxpZ2h0XCI7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtyZX1gKS5mb3JFYWNoKCh5ZSkgPT4geWUuY2xhc3NMaXN0LnJlbW92ZShyZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBiKCksIGF3YWl0IE4oKSwgSSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKSwgbih7XG4gICAgICBzdGFydFRvdXI6IEksXG4gICAgICBuZXh0U3RlcDogTyxcbiAgICAgIGxhc3RTdGVwOiBQLFxuICAgICAgZW5kVG91cjogUyxcbiAgICAgIHN0b3BUb3VyOiBiLFxuICAgICAgZ29Ub1N0ZXA6IG1lLFxuICAgICAgcmVzZXRUb3VyOiBwZSxcbiAgICAgIHVwZGF0ZVBvc2l0aW9uOiAkLFxuICAgICAgdXBkYXRlSGlnaGxpZ2h0OiBlZSxcbiAgICAgIHVwZGF0ZUJhY2tkcm9wOiB0ZVxuICAgIH0pLCAoYSwgcikgPT4gKHcoKSwga2UoJGUsIHsgdG86IFwiYm9keVwiIH0sIFtcbiAgICAgIFQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzczogTGUoW1widmp0LW1vZGFsLW92ZXJsYXlcIiwgeyBcInZqdC10b3VyLWFjdGl2ZVwiOiBzLnZhbHVlIH1dKSxcbiAgICAgICAgXCJkYXRhLWhpZGRlblwiOiAhcy52YWx1ZVxuICAgICAgfSwgW1xuICAgICAgICBUKFwiZGl2XCIsIHtcbiAgICAgICAgICBpZDogVy52YWx1ZSxcbiAgICAgICAgICBcImRhdGEtaGlkZGVuXCI6ICFNLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiB4ZSh7IFwiY2xpcC1wYXRoXCI6IEEudmFsdWUgfSlcbiAgICAgICAgfSwgbnVsbCwgMTIsIFZlKSxcbiAgICAgICAgVChcImRpdlwiLCB7XG4gICAgICAgICAgaWQ6IEUudmFsdWUsXG4gICAgICAgICAgcmVmX2tleTogXCJfVG9vbHRpcFwiLFxuICAgICAgICAgIHJlZjogbSxcbiAgICAgICAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgICAgICAgIFwiYXJpYS1tb2RhbFwiOiBlLmVuYWJsZUExMXkgPyBcInRydWVcIiA6IHZvaWQgMCxcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogZy52YWx1ZT8uYXJpYUxhYmVsIHx8IGUuYXJpYUxhYmVsLFxuICAgICAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBgJHtFLnZhbHVlfS1jb250ZW50YCxcbiAgICAgICAgICB0YWJpbmRleDogZS5lbmFibGVBMTF5ID8gXCIwXCIgOiB2b2lkIDAsXG4gICAgICAgICAgXCJkYXRhLWhpZGRlblwiOiAhcy52YWx1ZSB8fCBmLnZhbHVlXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBzLnZhbHVlID8gKHcoKSwgTChcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IGBzdGVwLSR7bC52YWx1ZX1gXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgZS5lbmFibGVBMTF5ID8gKHcoKSwgTChcImRpdlwiLCBGZSwgXCIgU3RlcCBcIiArIEMobC52YWx1ZSArIDEpICsgXCIgb2YgXCIgKyBDKHQuc3RlcHMubGVuZ3RoKSwgMSkpIDogeChcIlwiLCAhMCksXG4gICAgICAgICAgICBlLmhpZGVBcnJvdyA/IHgoXCJcIiwgITApIDogKHcoKSwgTChcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGtleTogMSxcbiAgICAgICAgICAgICAgaWQ6IGZlLnZhbHVlXG4gICAgICAgICAgICB9LCBudWxsLCA4LCBIZSkpLFxuICAgICAgICAgICAgc2UoYS4kc2xvdHMsIFwiY29udGVudFwiLCB7XG4gICAgICAgICAgICAgIGN1cnJlbnRTdGVwSW5kZXg6IGwudmFsdWUsXG4gICAgICAgICAgICAgIGN1cnJlbnRTdGVwRGF0YTogZy52YWx1ZVxuICAgICAgICAgICAgfSwgKCkgPT4gW1xuICAgICAgICAgICAgICBUKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICBpZDogYCR7RS52YWx1ZX0tY29udGVudGAsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBHLmdldEN1cnJlbnRTdGVwPy5jb250ZW50XG4gICAgICAgICAgICAgIH0sIG51bGwsIDgsIFVlKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBzZShhLiRzbG90cywgXCJhY3Rpb25zXCIsIHtcbiAgICAgICAgICAgICAgbGFzdFN0ZXA6IFAsXG4gICAgICAgICAgICAgIG5leHRTdGVwOiBPLFxuICAgICAgICAgICAgICBlbmRUb3VyOiBTLFxuICAgICAgICAgICAgICBnZXROZXh0TGFiZWw6IEoudmFsdWUsXG4gICAgICAgICAgICAgIHByb3BzOiB0LFxuICAgICAgICAgICAgICBfQ3VycmVudFN0ZXA6IEdcbiAgICAgICAgICAgIH0sICgpID0+IFtcbiAgICAgICAgICAgICAgVChcImRpdlwiLCBHZSwgW1xuICAgICAgICAgICAgICAgIGkudmFsdWUgPCBsLnZhbHVlID8gKHcoKSwgTChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgb25DbGljazogVShQLCBbXCJwcmV2ZW50XCJdKSxcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBlLmVuYWJsZUExMXkgPyBgR28gdG8gcHJldmlvdXMgc3RlcCwgc3RlcCAke2wudmFsdWV9IG9mICR7dC5zdGVwcy5sZW5ndGh9YCA6IHZvaWQgMFxuICAgICAgICAgICAgICAgIH0sIEModC5idXR0b25MYWJlbHM/LmJhY2sgfHwgXCJCYWNrXCIpLCA5LCBLZSkpIDogeChcIlwiLCAhMCksXG4gICAgICAgICAgICAgICAgdC5oaWRlU2tpcCA/IHgoXCJcIiwgITApIDogKHcoKSwgTChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IDEsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgb25DbGljazogVShTLCBbXCJwcmV2ZW50XCJdKSxcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBlLmVuYWJsZUExMXkgPyBcIlNraXAgdG91ciBhbmQgY2xvc2VcIiA6IHZvaWQgMFxuICAgICAgICAgICAgICAgIH0sIEModC5idXR0b25MYWJlbHM/LnNraXAgfHwgXCJTa2lwXCIpLCA5LCBKZSkpLFxuICAgICAgICAgICAgICAgIFQoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IFUoTywgW1wicHJldmVudFwiXSksXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogZS5lbmFibGVBMTF5ID8gSy52YWx1ZSA/IFwiRmluaXNoIHRvdXJcIiA6IGBHbyB0byBuZXh0IHN0ZXAsIHN0ZXAgJHtwLnZhbHVlICsgMX0gb2YgJHt0LnN0ZXBzLmxlbmd0aH1gIDogdm9pZCAwXG4gICAgICAgICAgICAgICAgfSwgQyhKLnZhbHVlKSwgOSwgV2UpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pKSA6IHgoXCJcIiwgITApXG4gICAgICAgIF0sIDgsIFJlKVxuICAgICAgXSwgMTAsIHplKVxuICAgIF0pKTtcbiAgfVxufSk7XG5leHBvcnQge1xuICB0dCBhcyBWVG91clxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZWpzLXRvdXIuanMubWFwXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWxheW91dCB2aWV3PVwiaEhyIGxwciBmRnJcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaXNFeHBlcnRNb2RlJzogaXNFeHBlcnRNb2RlIH1cIj5cbiAgICA8cS1oZWFkZXIgZWxldmF0ZWQ+XG4gICAgICA8cS10b29sYmFyPlxuICAgICAgICA8cm91dGVyLWxpbmtcbiAgICAgICAgICB0bz1cIi9cIj5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC13aGl0ZSBwcmludC1oaWRkZW5cIlxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICBpY29uPVwibWRpLWhvbWUtb3V0bGluZVwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiSG9tZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBjbGFzcz1cInByaW50LWhpZGRlblwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBpY29uPVwibWVudVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk1lbnVcIlxuICAgICAgICAgIEBjbGljaz1cInRvZ2dsZUxlZnREcmF3ZXJcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZVxuICAgICAgICAgIGNsYXNzPVwiYXBwLXRpdGxlXCI+XG4gICAgICAgICAgzrxQTVRcblxuICAgICAgICAgIHxcblxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICB2LWlmPVwiY3VycmVudFByb2plY3RcIlxuICAgICAgICAgICAgY2xhc3M9XCJjb250ZXh0XCI+XG4gICAgICAgICAgICB7eyBjdXJyZW50UHJvamVjdC5uYW1lIH19XG4gICAgICAgICAgICA8Tm90ZUljb25cbiAgICAgICAgICAgICAgOmVsZW1lbnQ9XCJjdXJyZW50UHJvamVjdFwiIC8+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiY3VycmVudEludGVydmlld1wiPlxuICAgICAgICAgICAgICAtIEludGVydmlldyB7eyBjdXJyZW50SW50ZXJ2aWV3LmxhYmVsIH19XG4gICAgICAgICAgICAgIDxOb3RlSWNvblxuICAgICAgICAgICAgICAgIDplbGVtZW50PVwiY3VycmVudEludGVydmlld1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8cS1idG4gdi1pZj1cImlzTW9kaWZpZWRcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tbC14bCBwcmludC1oaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkb1N0b3JlUHJvamVjdCgpXCJcbiAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgIG5vLWNhcHM+XG4gICAgICAgICAgICAgIE1vZGlmaWVkIC0gQ2xpY2sgaGVyZSB0byBzYXZlXG4gICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICA6dGl0bGU9XCJgJHtoaXN0b3J5LnVuZG9TdGFjay5sZW5ndGh9IGl0ZW1zYFwiXG4gICAgICAgICAgICAgIDpkaXNhYmxlPVwiIWhpc3RvcnkudW5kb1N0YWNrLmxlbmd0aFwiXG4gICAgICAgICAgICAgIEBjbGljaz1cImRvVW5kb1wiXG4gICAgICAgICAgICAgIGljb249XCJtZGktdW5kb1wiIC8+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgOnRpdGxlPVwiaGlzdG9yeS5yZWRvU3RhY2subGVuZ3RoXCJcbiAgICAgICAgICAgICAgOmRpc2FibGU9XCIhaGlzdG9yeS5yZWRvU3RhY2subGVuZ3RoXCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiZG9SZWRvXCJcbiAgICAgICAgICAgICAgaWNvbj1cIm1kaS1yZWRvXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInByaW50LWhpZGRlblwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgdi1pZj1cImlzRGV2ZWxvcG1lbnRcIlxuICAgICAgICAgICAgY2xhc3M9XCJxLW1sLXhsXCJcbiAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICBuby1jYXBzPlxuICAgICAgICAgICAgRGV2ZWxvcG1lbnQgdmVyc2lvblxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICB2LWlmPVwiY3VycmVudFByb2plY3RcIlxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICduZWVkcy1zYXZlJzogaXNNb2RpZmllZCB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cImRvU3RvcmVQcm9qZWN0KClcIlxuICAgICAgICAgICAgaWNvbj1cIm1kaS1jb250ZW50LXNhdmVcIj5cbiAgICAgICAgICAgIDxxLXRvb2x0aXBcbiAgICAgICAgICAgICAgdi1pZj1cImlzTW9kaWZpZWRcIj5cbiAgICAgICAgICAgICAgRGF0YSBoYXMgYmVlbiBtb2RpZmllZC4gQ2xpY2sgdG8gc2F2ZSBpdCBpbiB0aGUgYnJvd3NlciBzdG9yYWdlLlxuICAgICAgICAgICAgPC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgQGNsaWNrLmN0cmwuY2FwdHVyZS5zdG9wPVwiaXNFeHBlcnRNb2RlID0gIWlzRXhwZXJ0TW9kZVwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiTG9naW5cIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnYW5vbnltb3VzJzogaXNBbm9ueW1vdXMgfVwiXG4gICAgICAgICAgICA6aWNvbj1cImlzRXhwZXJ0TW9kZSA/ICdtZGktYWNjb3VudC1jb3dib3ktaGF0JyA6ICdtZGktYWNjb3VudCdcIj5cbiAgICAgICAgICAgIDxxLW1lbnUgZml0PlxuICAgICAgICAgICAgICA8cS1saXN0IHN0eWxlPVwibWluLXdpZHRoOiAyNDBweDtcIj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIG5vLXdyYXAgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PHEtaWNvbiBuYW1lPVwibWRpLWFjY291bnRcIiBzaXplPVwieHNcIiBkZW5zZSAvPlxuICAgICAgICAgICAgICAgICAgICAgIElkZW50aWZpZWQgYXMgPGVtPnt7dXNlcm5hbWV9fTwvZW0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGU+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+TW9kaWZ5IHVzZXJuYW1lPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxxLXBvcHVwLWVkaXRcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0by1zYXZlXG4gICAgICAgICAgICAgICAgICAgIHYtc2xvdD1cInNjb3BlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IHYtbW9kZWw9XCJzY29wZS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCIoJGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5zZWxlY3QoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNlIGF1dG9mb2N1cyBAa2V5dXAuZW50ZXI9XCJzY29wZS5zZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJlZGl0U2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkVkaXQgc2V0dGluZ3M8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwibGVmdERyYXdlck9wZW4gPSBmYWxzZSA7IHZ1ZVRvdXIuc3RhcnRUb3VyKClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlRha2UgYSB0b3VyIG9mIHRoZSBpbnRlcmZhY2U8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS91cG10L3VwbXQvd2lraS8lQ0UlQkNQTVQtZG9jdW1lbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ3ZWJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkRvY3VtZW50YXRpb248L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiYWJvdXQoKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+QWJvdXQgzrxQTVQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvcS10b29sYmFyPlxuICAgIDwvcS1oZWFkZXI+XG5cbiAgICA8cS1kcmF3ZXJcbiAgICAgIHYtbW9kZWw9XCJsZWZ0RHJhd2VyT3BlblwiXG4gICAgICBvdmVybGF5XG4gICAgICBib3JkZXJlZFxuICAgICAgPlxuICAgICAgPHEtc2Nyb2xsLWFyZWEgY2xhc3M9XCJmaXRcIj5cbiAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIG1lbnVMaXN0XCIgOmtleT1cImluZGV4XCI+XG5cbiAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgIEBjbGljaz1cImxlZnREcmF3ZXJPcGVuID0gZmFsc2VcIlxuICAgICAgICAgICAgICB2LXJpcHBsZVxuICAgICAgICAgICAgICA6dG89XCJpdGVtLmxpbmtcIlxuICAgICAgICAgICAgICA6aHJlZj1cIml0ZW0uaHJlZlwiXG4gICAgICAgICAgICAgIDp0YXJnZXQ9XCJpdGVtLmhyZWYgPyAnd2ViJyA6IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhciB2LWlmPVwiaXRlbS5pY29uXCI+XG4gICAgICAgICAgICAgICAgPHEtaWNvbiA6bmFtZT1cIml0ZW0uaWNvblwiIC8+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7eyBpdGVtLmxhYmVsIH19XG4gICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yIDprZXk9XCInc2VwJyArIGluZGV4XCIgdi1pZj1cIml0ZW0uc2VwYXJhdG9yXCIgLz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtbGlzdD5cbiAgICAgIDwvcS1zY3JvbGwtYXJlYT5cbiAgICA8L3EtZHJhd2VyPlxuXG4gICAgPHEtZHJhd2VyXG4gICAgICB2LW1vZGVsPVwicmlnaHREcmF3ZXJPcGVuXCJcbiAgICAgIGJvcmRlcmVkXG4gICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgPlxuICAgICAgPHEtc2Nyb2xsLWFyZWEgY2xhc3M9XCJmaXRcIj5cbiAgICAgICAgPHEtZm9ybT5cbiAgICAgICAgICA8cS1pbnB1dCB2LW1vZGVsPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1cyAvPlxuICAgICAgICA8L3EtZm9ybT5cbiAgICAgIDwvcS1zY3JvbGwtYXJlYT5cbiAgICA8L3EtZHJhd2VyPlxuXG4gICAgPHEtcGFnZS1jb250YWluZXI+XG4gICAgICA8cm91dGVyLXZpZXcgLz5cbiAgICA8L3EtcGFnZS1jb250YWluZXI+XG5cbiAgICA8VlRvdXIgOnN0ZXBzPVwidG91clN0ZXBzXCIgaGlnaGxpZ2h0IHJlZj1cInZ1ZVRvdXJcIiAvPlxuXG4gIDwvcS1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IHJlZiwgY29tcHV0ZWQsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJ1xuICBpbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJ1xuICBpbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAnc3RvcmVzL3BsdWdpbnMvcGluaWFIaXN0b3J5J1xuICBpbXBvcnQgeyBSb3V0ZUxvY2F0aW9uUmF3IH0gZnJvbSAndnVlLXJvdXRlcidcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuICBpbXBvcnQgeyBzdG9yZVByb2plY3QgfSBmcm9tICdzdG9yZXMvc3RvcmFnZSdcbiAgaW1wb3J0IE5vdGVJY29uIGZyb20gJ2NvbXBvbmVudHMvTm90ZUljb24udnVlJ1xuICBpbXBvcnQgU2V0dGluZ3NFZGl0b3IgZnJvbSAnY29tcG9uZW50cy9TZXR0aW5nc0VkaXRvci52dWUnXG4gIGltcG9ydCB7IFZUb3VyIH0gZnJvbSAnQGdsb2JhbGhpdmUvdnVlanMtdG91cidcbiAgaW1wb3J0ICcuL3ZqdC1zdHlsZS5jc3MnXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuICBkZWZpbmVPcHRpb25zKHtcbiAgICAgIG5hbWU6ICdNYWluTGF5b3V0J1xuICB9KVxuXG4gIGludGVyZmFjZSBNZW51SXRlbSB7XG4gICAgICBsYWJlbDogc3RyaW5nXG4gICAgICBpY29uPzogc3RyaW5nXG4gICAgICBsaW5rPzogUm91dGVMb2NhdGlvblJhd1xuICAgICAgYWN0aW9uPzogb2JqZWN0XG4gICAgICBzZXBhcmF0b3I/OiBib29sZWFuXG4gICAgICBocmVmPzogc3RyaW5nXG4gIH1cblxuICBjb25zdCAkcSA9IHVzZVF1YXNhcigpXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IGlzdG9yZSA9IHVzZUludGVyZmFjZVN0b3JlKClcblxuICBjb25zdCB7XG4gICAgICBjdXJyZW50SW50ZXJ2aWV3LFxuICAgICAgY3VycmVudFByb2plY3RJZCxcbiAgICAgIGlzTW9kaWZpZWQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGlzRXhwZXJ0TW9kZVxuICB9ID0gc3RvcmVUb1JlZnMoaXN0b3JlKVxuXG4gIGNvbnN0IHZ1ZVRvdXIgPSByZWYoKVxuXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0SWQudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gc3RvcmUuZ2V0UHJvamVjdChjdXJyZW50UHJvamVjdElkLnZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcblxuICBjb25zdCBpc0RldmVsb3BtZW50ID0gY29tcHV0ZWQoKCkgPT4gZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgPT0gJ2xvY2FsaG9zdCdcbiAgICAgIHx8IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCcvdXBtdC9kZXYnKSlcblxuICBjb25zdCBtZW51TGlzdCA9IGNvbXB1dGVkPE1lbnVJdGVtW10+KCgpID0+IHtcbiAgICAgIGxldCBtZW51OiBNZW51SXRlbVtdID0gW1xuICAgICAgXVxuXG4gICAgICBpZiAoY3VycmVudFByb2plY3RJZC52YWx1ZSkge1xuICAgICAgICAgIG1lbnUucHVzaCh7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlByb2plY3QgZWRpdG9yXCIsXG4gICAgICAgICAgICAgIGljb246ICdtZGktc2VtYW50aWMtd2ViJyxcbiAgICAgICAgICAgICAgbGluazogYC9wcm9qZWN0LyR7Y3VycmVudFByb2plY3RJZC52YWx1ZX1gXG4gICAgICAgICAgfSlcbiAgICAgICAgICBtZW51LnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogXCJHbG9iYWwgZGlhY2hyb25pY1wiLFxuICAgICAgICAgICAgICBpY29uOiAnbWRpLXRhYmxlJyxcbiAgICAgICAgICAgICAgbGluazogYC9zcHJlYWRzaGVldC8ke2N1cnJlbnRQcm9qZWN0SWQudmFsdWV9YFxuICAgICAgICAgIH0pXG4gICAgICAgICAgbWVudS5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRXBpc29kZSBhbmFseXNpc1wiLFxuICAgICAgICAgICAgICBpY29uOiAnbWRpLXRhYmxlJyxcbiAgICAgICAgICAgICAgbGluazogYC9lcGlzb2Rlcy8ke2N1cnJlbnRQcm9qZWN0SWQudmFsdWV9YFxuICAgICAgICAgIH0pXG4gICAgICAgICAgbWVudS5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU3luY2hyb25pYyBncmFwaFwiLFxuICAgICAgICAgICAgICBpY29uOiAnbWRpLWdyYXBoJyxcbiAgICAgICAgICAgICAgbGluazogYC9zeW5jaHJvbmljLWdyYXBoLyR7Y3VycmVudFByb2plY3RJZC52YWx1ZX1gXG4gICAgICAgICAgfSlcbiAgICAgICAgICBtZW51LnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogXCJTeW5jaHJvbmljIE1vZGVsc1wiLFxuICAgICAgICAgICAgICBpY29uOiAnbWRpLWdyYXBoJyxcbiAgICAgICAgICAgICAgbGluazogYC9tb2RlbHMvJHtjdXJyZW50UHJvamVjdElkLnZhbHVlfWBcbiAgICAgICAgICB9KVxuICAgICAgICAgIG1lbnUucHVzaCh7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNwZWNpZmljIFN5bmNocm9uaWMgQ2F0ZWdvcmllc1wiLFxuICAgICAgICAgICAgICBpY29uOiAnbWRpLXRhYmxlJyxcbiAgICAgICAgICAgICAgbGluazogYC9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yaWVzLyR7Y3VycmVudFByb2plY3RJZC52YWx1ZX1gXG4gICAgICAgICAgfSlcbiAgICAgICAgICBtZW51LnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGVtc1wiLFxuICAgICAgICAgICAgICBpY29uOiAnbWRpLWZvcm1hdC1xdW90ZS1jbG9zZS1vdXRsaW5lJyxcbiAgICAgICAgICAgICAgbGluazogYC9kZXNjcmlwdGVtcy8ke2N1cnJlbnRQcm9qZWN0SWQudmFsdWV9YFxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpZiAoaXNFeHBlcnRNb2RlLnZhbHVlKSB7XG4gICAgICAgICAgbWVudSA9IG1lbnUuY29uY2F0KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEZWJ1ZycsXG4gICAgICAgICAgICAgICAgICBpY29uOiAnbWRpLWV5ZScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2RlYnVnJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pXG4gICAgICAgfVxuICAgICAgcmV0dXJuIG1lbnVcbiAgfSlcblxuICBjb25zdCBsZWZ0RHJhd2VyT3BlbiA9IHJlZihmYWxzZSlcbiAgY29uc3QgcmlnaHREcmF3ZXJPcGVuID0gcmVmKGZhbHNlKVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUxlZnREcmF3ZXIgKCkge1xuICAgICAgbGVmdERyYXdlck9wZW4udmFsdWUgPSAhbGVmdERyYXdlck9wZW4udmFsdWVcbiAgfVxuXG4gIGNvbnN0IGlzQW5vbnltb3VzID0gY29tcHV0ZWQoKCkgPT4gKHVzZXJuYW1lLnZhbHVlID09ICcnIHx8IHVzZXJuYW1lLnZhbHVlID09ICdhbm9ueW1vdXMnKSlcblxuICBmdW5jdGlvbiBkb1N0b3JlUHJvamVjdCAoKSB7XG4gICAgICBpZiAoY3VycmVudFByb2plY3RJZC52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGJhc2VuYW1lID0gc3RvcmVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0SWQudmFsdWUpXG4gICAgICAgICAgaXN0b3JlLnNldE1vZGlmaWVkKGZhbHNlKVxuICAgICAgICAgICRxLm5vdGlmeSh7XG4gICAgICAgICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgICAgICAgbWVzc2FnZTogYFN0b3JlZCBhcyAke2Jhc2VuYW1lfWBcbiAgICAgICAgICB9KVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZG9VbmRvICgpIHtcbiAgICAgIGhpc3RvcnkudW5kbygpXG4gIH1cblxuICBmdW5jdGlvbiBkb1JlZG8gKCkge1xuICAgICAgaGlzdG9yeS5yZWRvKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uR2xvYmFsS2V5ZG93biAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT09IDgzIC8qIFMgKi8pIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZiAoaXNNb2RpZmllZC52YWx1ZSkge1xuICAgICAgICAgICAgICBkb1N0b3JlUHJvamVjdCgpXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFNldHRpbmdzKCkge1xuICAgICAgJHEuZGlhbG9nKHtcbiAgICAgICAgICBjb21wb25lbnQ6IFNldHRpbmdzRWRpdG9yLFxuICAgICAgfSkub25EaXNtaXNzKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnQ2FsbGVkIG9uIE9LIG9yIENhbmNlbCcpXG4gICAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gYWJvdXQoKSB7XG4gICAgICBsZXQgbWVzc2FnZSA9ICdEZXZlbG9wbWVudCB2ZXJzaW9uJ1xuICAgICAgdm9pZCBheGlvcy5nZXQoJy4vdmVyc2lvbi50eHQnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG0gPSByZXNwb25zZS5kYXRhLm1hdGNoKC9eVkVSU0lPTlxccyg/PHNoYT5bYS16MC05XSspXFxzKD88ZGF0ZT4uKykvKVxuICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVmVyc2lvbiA8c3Ryb25nPiR7bS5ncm91cHMuc2hhfTwvc3Ryb25nPlxcbkRhdGUgPHN0cm9uZz4ke20uZ3JvdXBzLmRhdGV9PC9zdHJvbmc+YFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBgTm8gdmFsaWQgdmVyc2lvbiBpbmZvcm1hdGlvbiBmb3VuZGBcbiAgICAgICAgICB9XG4gICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAkcS5kaWFsb2coe1xuICAgICAgICAgICAgICB0aXRsZTogJ0Fib3V0IM68UE1ULi4uJyxcbiAgICAgICAgICAgICAgbWVzc2FnZTogYDxwPjxzdHJvbmc+zrxQTVQ8L3N0cm9uZz4gLSBtaWNybyBQaGVub21lbm9sb2d5IE1vZGVsbGluZyBUb29sPC9wPlxcbjxwPiR7bWVzc2FnZX08L3A+YCxcbiAgICAgICAgICAgICAgaHRtbDogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5vbkRpc21pc3MoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0kgYW0gdHJpZ2dlcmVkIG9uIGJvdGggT0sgYW5kIENhbmNlbCcpXG4gICAgICAgICAgICAgIH0pXG4gICAgICB9KVxuICB9XG5cbiAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGxlZnREcmF3ZXJPcGVuLnZhbHVlID0gZmFsc2VcbiAgICAgIHJpZ2h0RHJhd2VyT3Blbi52YWx1ZSA9IGZhbHNlXG4gICAgICAvLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9xdWFzYXJmcmFtZXdvcmsvcXVhc2FyL2Jsb2IvZGV2L2RvY3Mvc3JjL2xheW91dHMvZG9jLWxheW91dC9Eb2NTZWFyY2gudnVlI0wyOTZcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25HbG9iYWxLZXlkb3duKTtcbiAgICAgICh3aW5kb3cgYXMgYW55KS5hcHBIaXN0b3J5ID0gaGlzdG9yeVxuICB9KVxuXG4gIGNvbnN0IHRvdXJTdGVwcyA9IFtcbiAgICAgIHtcbiAgICAgICAgICB0YXJnZXQ6ICdidXR0b25bYXJpYS1sYWJlbD1cIk1lbnVcIl0nLFxuICAgICAgICAgIGNvbnRlbnQ6ICdUaGUgaGFtYnVyZ2VyIG1lbnUgZ2l2ZXMgYWNjZXNzIHRvIG11bHRpcGxlIHZpZXdzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICB0YXJnZXQ6ICcuYXBwLXRpdGxlJyxcbiAgICAgICAgICBjb250ZW50OiAnVGhlIHRvb2xiYXIgc2hvd3MgdGhlIGxvYWRlZCBwYWNrYWdlIHRpdGxlLCBhbmQgdGhlIGN1cnJlbnQgaW50ZXJ2aWV3IHRpdGxlIGlmIGFuIGludGVydmlldyBpcyBhY3RpdmUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIHRhcmdldDogJ2J1dHRvblthcmlhLWxhYmVsPVwiTG9naW5cIl0nLFxuICAgICAgICAgIGNvbnRlbnQ6ICdUaGlzIGljb24gZ2l2ZXMgeW91IGFjY2VzcyB0byB5b3VyIHByb2ZpbGUgaW5mb3JtYXRpb24gYW5kIHNldHRpbmdzLCBhcyB3ZWxsIGFzIGJhc2ljIGhlbHAvYWJvdXQgaW5mb3JtYXRpb24uJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICB0YXJnZXQ6ICcudXBtdC1pbnRlcnZpZXdzJyxcbiAgICAgICAgICBjb250ZW50OiAnVGhpcyBwbGFjZSBsaXN0cyB0aGUgZGVmaW5lZCBpbnRlcnZpZXdzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgdGFyZ2V0OiAnLmRldGFjaGVkbW9kZWxzLWNvbnRhaW5lcicsXG4gICAgICAgICAgY29udGVudDogJ0RldGFjaGVkIG1vZGVscyBhbGxvdyB0byBkZWZpbmUgc3luY2hyb25pYyBtb2RlbCBlbGVtZW50IHRoYXQgYXJlIG5vdCBsaW5rZWQgdG8gYSBnaXZlbiBpbnRlcnZpZXcuJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgdGFyZ2V0OiAnLmdlbmVyaWNjYXRlZ29yaWVzLWNvbnRhaW5lcicsXG4gICAgICAgICAgY29udGVudDogJ1RoZSBnZW5lcmljIG1vZGVsIGlzIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBieSBhZGRpbmcgYWxsIGRlZmluZWQgc3luY2hyb25pYyBtb2RlbHMgKGxpbmtlZCB0byBpbnRlcnZpZXdzIG9yIGRldGFjaGVkIG1vZGVscykuJyxcbiAgICAgIH0sXG4gIF1cbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbi5hbm9ueW1vdXMge1xuICAgIGNvbG9yOiByZWQ7XG59XG4ubmVlZHMtc2F2ZSB7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIm9mZnNldCIsImhlaWdodCIsIndpZHRoIiwiX2hvaXN0ZWRfMSIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfdG9EaXNwbGF5U3RyaW5nIiwiaCIsImVhc2VJbk91dFF1YWQiLCJqdW1wZXIiLCJlbGVtZW50IiwiYmUiLCJ2IiwiZCIsInVlIiwiSiIsIlEiLCJJIiwiTiIsIkNlIiwiQWUiLCJTZSIsIndlIiwiVGUiLCJ3Iiwia2UiLCIkZSIsIlQiLCJMZSIsInhlIiwiTCIsIkMiLCJ4Iiwic2UiLCJVIiwiX25vcm1hbGl6ZUNsYXNzIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX3dpdGhNb2RpZmllcnMiLCJfd2l0aEtleXMiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl93aXRoRGlyZWN0aXZlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBUUEsTUFBQSxVQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLFlBQVk7QUFBQSxNQUNWLE1BQU07QUFBQSxN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QSxHQUVyRG5DLFlBY1MsT0FBQTtBQUFBLHdCQWJQLFdBQUE7QUFBQSx3QkFDQyxTQUFLLHNDQUFFLE9BQUEsaUJBQWM7QUFBQSx3QkFFckIsSUFBSSxLQUFLO0FBQUEsd0JBQ1QsTUFBTSxLQUFLO0FBQUEsd0JBQ1gsUUFBUSxLQUFLLE9BQUksUUFBVztBQUFBLHNCQUFBLEdBQUE7QUFBQSx5Q0FFN0IsTUFFaUI7QUFBQSwwQkFGWSxLQUFLLHFCQUFsQ0EsWUFFaUIsY0FBQTtBQUFBLDRCQUFBLEtBQUE7QUFBQSw0QkFGRCxRQUFBO0FBQUEsMEJBQUEsR0FBQTtBQUFBLDZDQUNkLE1BQTRCO0FBQUEsOEJBQTVCQyxZQUE0QixPQUFBO0FBQUEsZ0NBQW5CLE1BQU0sS0FBSztBQUFBLDhCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsTUFBQSxDQUFBO0FBQUE7OzswQkFFdEJBLFlBRWlCLGNBQUEsTUFBQTtBQUFBLDRCQUFBLFNBQUFDLFFBRGYsTUFBZ0I7QUFBQSw4QkFBQUUsZ0JBQUFDLGdCQUFiLEtBQUssS0FBSyxHQUFBLENBQUE7QUFBQSw0QkFBQSxDQUFBO0FBQUE7Ozs7Ozs7c0JBSXVCLEtBQUssMEJBQTdDTCxZQUEwRCxZQUFBO0FBQUEsd0JBQTVDLEtBQUcsUUFBVTtBQUFBLHNCQUFBLENBQUEsS0FBQXFDLG1CQUFBLElBQUEsSUFBQTtBQUFBOzs7Ozs7Ozs7OztNQU1uQ3BDLFlBV1csU0FBQTtBQUFBLFFBQUEsWUFWQSxPQUFBO0FBQUEsUUFBQSx1QkFBQSxPQUFBLEVBQUEsTUFBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxrQkFBZTtBQUFBLFFBQ3hCLFVBQUE7QUFBQSxRQUNBLE1BQUs7QUFBQSxNQUFBLEdBQUE7QUFBQSx5QkFFTCxNQUtnQjtBQUFBLFVBTGhCQSxZQUtnQixhQUFBLEVBQUEsT0FBQSxNQUFBLEdBTEQ7QUFBQSxZQUFXLFNBQUFDLFFBQ3hCLE1BR1M7QUFBQSxjQUhURCxZQUdTLE9BQUEsTUFBQTtBQUFBLGdCQUFBLFNBQUFDLFFBRlAsTUFDcUI7QUFBQSxrQkFEckJELFlBQ3FCLFFBQUE7QUFBQSxvQkFBQSxZQURILE9BQUE7QUFBQSxvQkFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxXQUFRO0FBQUEsb0JBQ2pCLFdBQUE7QUFBQSxrQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7TUFLZkEsWUFFbUIsZ0JBQUEsTUFBQTtBQUFBLFFBQUEsU0FBQUMsUUFEakIsTUFBZTtBQUFBLFVBQWZELFlBQWUsc0JBQUE7QUFBQSxRQUFBLENBQUE7QUFBQTs7TUFHakJBLFlBQW9ELE9BQUEsT0FBQSxHQUFBO0FBQUEsUUFBNUMsT0FBTyxPQUFBO0FBQUEsUUFBVyxXQUFBO0FBQUEsUUFBVSxLQUFJO0FBQUEsTUFBQSxHQUFBLE1BQUEsR0FBQTtBQUFBOzs7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsMyw0LDUsNiw3LDksMTAsMTFdfQ==
