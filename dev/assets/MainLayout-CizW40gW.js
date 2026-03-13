import { h as createComponent, j as getCurrentInstance, k as inject, l as emptyRenderFn, o as layoutKey, r as ref, p as computed, q as watch, s as onBeforeUnmount, t as hUniqueSlot, v as h, x as withDirectives, y as listenOpts, z as scrollTargetProp, A as getScrollTarget, B as onMounted, C as noop, D as getVerticalScrollPosition, G as getHorizontalScrollPosition, H as useDarkProps, I as useDark, J as debounce, K as setHorizontalScrollPosition, L as onDeactivated, M as onActivated, N as setVerticalScrollPosition, O as hMergeSlot, P as hSlot, Q as provide, R as pageContainerKey, U as getScrollbarWidth, V as isRuntimeSsrPreHydration, W as reactive, X as onUnmounted, Y as defineComponent, Z as useProjectStore, _ as useInterfaceStore, $ as storeToRefs, a0 as storeProject, a1 as _export_sfc, a2 as resolveComponent, a3 as createBlock, a4 as openBlock, a5 as withCtx, a6 as createVNode, a7 as createBaseVNode, a8 as QBtn, a9 as createTextVNode, aa as createElementBlock, ab as createCommentVNode, ac as toDisplayString, ad as normalizeClass, ae as QInput, af as withKeys, ag as Fragment, ah as renderList, ai as QIcon, aj as Ripple, ak as QSeparator } from "./index-CA0AeQj5.js";
import { Q as QToolbarTitle, a as QDrawer, b as QForm } from "./QForm-D75eH_Z6.js";
import { Q as QTooltip } from "./QTooltip-B-JKZB4c.js";
import { Q as QResizeObserver, T as TouchPan, N as NoteIcon, a as QToolbar, b as QPopupEdit } from "./NoteIcon-cVgNwkJa.js";
import { Q as QList, a as QItem, b as QItemSection } from "./QList-eYYqxV5x.js";
import { b as between } from "./format-DzTtVVwn.js";
import { u as useQuasar } from "./use-quasar-D8RRFVUV.js";
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
      username
    } = storeToRefs(istore);
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
          label: "Diachronic graph",
          icon: "mdi-graph",
          link: `/diachronic-graph/${currentProjectId.value}`
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
      menu = menu.concat([
        {
          label: "Debug",
          icon: "mdi-eye",
          link: "/debug"
        }
      ]);
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
    onMounted(() => {
      leftDrawerOpen.value = false;
      rightDrawerOpen.value = false;
      window.addEventListener("keydown", onGlobalKeydown);
    });
    const __returned__ = { $q, store, istore, currentInterview, currentProjectId, isModified, username, currentProject, isDevelopment, menuList, leftDrawerOpen, rightDrawerOpen, toggleLeftDrawer, isAnonymous, doStoreProject, onGlobalKeydown, NoteIcon };
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
  return openBlock(), createBlock(QLayout, { view: "hHr lpr fFr" }, {
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
                  _cache[9] || (_cache[9] = createTextVNode(" μPMT | ", -1)),
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
                      default: withCtx(() => [..._cache[8] || (_cache[8] = [
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
                  default: withCtx(() => [..._cache[10] || (_cache[10] = [
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
                      default: withCtx(() => [..._cache[11] || (_cache[11] = [
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
                  class: normalizeClass({ "anonymous": $setup.isAnonymous }),
                  icon: "mdi-account"
                }, {
                  default: withCtx(() => [
                    $setup.isAnonymous ? (openBlock(), createBlock(QTooltip, { key: 0 }, {
                      default: withCtx(() => [..._cache[12] || (_cache[12] = [
                        createTextVNode(" Click and enter a username ", -1)
                      ])]),
                      _: 1
                    })) : createCommentVNode("", true),
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
                }, 8, ["class"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(QDrawer, {
        modelValue: $setup.leftDrawerOpen,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.leftDrawerOpen = $event),
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
                        onClick: _cache[4] || (_cache[4] = ($event) => $setup.leftDrawerOpen = false),
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
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.rightDrawerOpen = $event),
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
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.username = $event),
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
      })
    ]),
    _: 1
  });
}
const MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dcdd11e7"], ["__file", "MainLayout.vue"]]);
export {
  MainLayout as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC1DaXpXNDBnVy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9oZWFkZXIvUUhlYWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2Nyb2xsLWFyZWEvU2Nyb2xsQXJlYUNvbnRyb2xzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zY3JvbGwtYXJlYS9RU2Nyb2xsQXJlYS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcGFnZS9RUGFnZUNvbnRhaW5lci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvbGF5b3V0L1FMYXlvdXQuanMiLCIuLi8uLi8uLi9zcmMvbGF5b3V0cy9NYWluTGF5b3V0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoVW5pcXVlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuc3ltYm9scy9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUhlYWRlcicsXG5cbiAgcHJvcHM6IHtcbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgcmV2ZWFsOiBCb29sZWFuLFxuICAgIHJldmVhbE9mZnNldDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMjUwXG4gICAgfSxcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBlbGV2YXRlZDogQm9vbGVhbixcblxuICAgIGhlaWdodEhpbnQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDUwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXZlYWwnLCAnZm9jdXNpbicgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRSGVhZGVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gcmVmKHBhcnNlSW50KHByb3BzLmhlaWdodEhpbnQsIDEwKSlcbiAgICBjb25zdCByZXZlYWxlZCA9IHJlZih0cnVlKVxuXG4gICAgY29uc3QgZml4ZWQgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgICB8fCAkbGF5b3V0LnZpZXcudmFsdWUuaW5kZXhPZignSCcpICE9PSAtMVxuICAgICAgfHwgKCRxLnBsYXRmb3JtLmlzLmlvcyAmJiAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IG9mZnNldCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBpZiAoZml4ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHJldmVhbGVkLnZhbHVlID09PSB0cnVlID8gc2l6ZS52YWx1ZSA6IDBcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9mZnNldCA9IHNpemUudmFsdWUgLSAkbGF5b3V0LnNjcm9sbC52YWx1ZS5wb3NpdGlvblxuICAgICAgcmV0dXJuIG9mZnNldCA+IDAgPyBvZmZzZXQgOiAwXG4gICAgfSlcblxuICAgIGNvbnN0IGhpZGRlbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgIHx8IChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSAmJiByZXZlYWxlZC52YWx1ZSAhPT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCByZXZlYWxPbkZvY3VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUgJiYgaGlkZGVuLnZhbHVlID09PSB0cnVlICYmIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtaGVhZGVyIHEtbGF5b3V0X19zZWN0aW9uLS1tYXJnaW5hbCAnXG4gICAgICArIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnKSArICctdG9wJ1xuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtaGVhZGVyLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKGhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1oZWFkZXItLWhpZGRlbicgOiAnJylcbiAgICAgICsgKHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUgPyAnIHEtbGF5b3V0LS1wcmV2ZW50LWZvY3VzJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgdmlldyA9ICRsYXlvdXQucm93cy52YWx1ZS50b3AsXG4gICAgICAgIGNzcyA9IHt9XG5cbiAgICAgIGlmICh2aWV3WyAwIF0gPT09ICdsJyAmJiAkbGF5b3V0LmxlZnQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXSA9IGAkeyAkbGF5b3V0LmxlZnQuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAodmlld1sgMiBdID09PSAncicgJiYgJGxheW91dC5yaWdodC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdID0gYCR7ICRsYXlvdXQucmlnaHQuc2l6ZSB9cHhgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF5b3V0IChwcm9wLCB2YWwpIHtcbiAgICAgICRsYXlvdXQudXBkYXRlKCdoZWFkZXInLCBwcm9wLCB2YWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTG9jYWwgKHByb3AsIHZhbCkge1xuICAgICAgaWYgKHByb3AudmFsdWUgIT09IHZhbCkge1xuICAgICAgICBwcm9wLnZhbHVlID0gdmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNpemUgKHsgaGVpZ2h0IH0pIHtcbiAgICAgIHVwZGF0ZUxvY2FsKHNpemUsIGhlaWdodClcbiAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIGhlaWdodClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzaW4gKGV2dCkge1xuICAgICAgaWYgKHJldmVhbE9uRm9jdXMudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHRydWUpXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ2ZvY3VzaW4nLCBldnQpXG4gICAgfVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCB2YWwpXG4gICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgfSlcblxuICAgIHdhdGNoKG9mZnNldCwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5yZXZlYWwsIHZhbCA9PiB7XG4gICAgICB2YWwgPT09IGZhbHNlICYmIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIH0pXG5cbiAgICB3YXRjaChyZXZlYWxlZCwgdmFsID0+IHtcbiAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICBlbWl0KCdyZXZlYWwnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKCRsYXlvdXQuc2Nyb2xsLCBzY3JvbGwgPT4ge1xuICAgICAgcHJvcHMucmV2ZWFsID09PSB0cnVlICYmIHVwZGF0ZUxvY2FsKHJldmVhbGVkLFxuICAgICAgICBzY3JvbGwuZGlyZWN0aW9uID09PSAndXAnXG4gICAgICAgIHx8IHNjcm9sbC5wb3NpdGlvbiA8PSBwcm9wcy5yZXZlYWxPZmZzZXRcbiAgICAgICAgfHwgc2Nyb2xsLnBvc2l0aW9uIC0gc2Nyb2xsLmluZmxlY3Rpb25Qb2ludCA8IDEwMFxuICAgICAgKVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHt9XG5cbiAgICAkbGF5b3V0Lmluc3RhbmNlcy5oZWFkZXIgPSBpbnN0YW5jZVxuICAgIHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUgJiYgdXBkYXRlTGF5b3V0KCdzaXplJywgc2l6ZS52YWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIG9mZnNldC52YWx1ZSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXMuaGVhZGVyID09PSBpbnN0YW5jZSkge1xuICAgICAgICAkbGF5b3V0Lmluc3RhbmNlcy5oZWFkZXIgPSB2b2lkIDBcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgZmFsc2UpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IGhVbmlxdWVTbG90KHNsb3RzLmRlZmF1bHQsIFtdKVxuXG4gICAgICBwcm9wcy5lbGV2YXRlZCA9PT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWxheW91dF9fc2hhZG93IGFic29sdXRlLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwge1xuICAgICAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgICAgIG9uUmVzaXplXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdoZWFkZXInLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIG9uRm9jdXNpblxuICAgICAgfSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgd2l0aERpcmVjdGl2ZXMgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcblxuLyoqXG4gKiBXZSBhcmUgdXNpbmcgYSBzdWItY29tcG9uZW50IHRvIGF2b2lkIHVubmVjZXNzYXJ5IHJlLXJlbmRlcnNcbiAqIG9mIHRoZSBRU2Nyb2xsQXJlYSBjb250ZW50IHdoZW4gdGhlIHNjcm9sbGJhcnMgYXJlIGludGVyYWN0ZWQgd2l0aC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgcHJvcHM6IFtcbiAgICAnc3RvcmUnLFxuICAgICdiYXJTdHlsZScsXG4gICAgJ3ZlcnRpY2FsQmFyU3R5bGUnLFxuICAgICdob3Jpem9udGFsQmFyU3R5bGUnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgcmV0dXJuICgpID0+IChbXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBwcm9wcy5zdG9yZS5zY3JvbGwudmVydGljYWwuYmFyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBbIHByb3BzLmJhclN0eWxlLCBwcm9wcy52ZXJ0aWNhbEJhclN0eWxlIF0sXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgb25Nb3VzZWRvd246IHByb3BzLnN0b3JlLm9uVmVydGljYWxNb3VzZWRvd25cbiAgICAgIH0pLFxuXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBwcm9wcy5zdG9yZS5zY3JvbGwuaG9yaXpvbnRhbC5iYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IFsgcHJvcHMuYmFyU3R5bGUsIHByb3BzLmhvcml6b250YWxCYXJTdHlsZSBdLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgIG9uTW91c2Vkb3duOiBwcm9wcy5zdG9yZS5vbkhvcml6b250YWxNb3VzZWRvd25cbiAgICAgIH0pLFxuXG4gICAgICB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogcHJvcHMuc3RvcmUuc2Nyb2xsLnZlcnRpY2FsLnJlZixcbiAgICAgICAgICBjbGFzczogcHJvcHMuc3RvcmUuc2Nyb2xsLnZlcnRpY2FsLnRodW1iQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLnN0b3JlLnNjcm9sbC52ZXJ0aWNhbC5zdHlsZS52YWx1ZSxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSksXG4gICAgICAgIHByb3BzLnN0b3JlLnRodW1iVmVydERpclxuICAgICAgKSxcblxuICAgICAgd2l0aERpcmVjdGl2ZXMoXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IHByb3BzLnN0b3JlLnNjcm9sbC5ob3Jpem9udGFsLnJlZixcbiAgICAgICAgICBjbGFzczogcHJvcHMuc3RvcmUuc2Nyb2xsLmhvcml6b250YWwudGh1bWJDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuc3RvcmUuc2Nyb2xsLmhvcml6b250YWwuc3R5bGUudmFsdWUsXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0pLFxuICAgICAgICBwcm9wcy5zdG9yZS50aHVtYkhvcml6RGlyXG4gICAgICApXG4gICAgXSlcbiAgfVxufSlcbiIsImltcG9ydCB7IHdhdGNoLCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxUYXJnZXQsIGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24sIGdldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbiwgc2Nyb2xsVGFyZ2V0UHJvcCB9IGZyb20gJy4uLy4uL3V0aWxzL3Njcm9sbC9zY3JvbGwuanMnXG5pbXBvcnQgeyBsaXN0ZW5PcHRzLCBub29wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQvZXZlbnQuanMnXG5cbmNvbnN0IHsgcGFzc2l2ZSB9ID0gbGlzdGVuT3B0c1xuY29uc3QgYXhpc1ZhbHVlcyA9IFsgJ2JvdGgnLCAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcgXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNjcm9sbE9ic2VydmVyJyxcblxuICBwcm9wczoge1xuICAgIGF4aXM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBheGlzVmFsdWVzLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ3ZlcnRpY2FsJ1xuICAgIH0sXG5cbiAgICBkZWJvdW5jZTogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgc2Nyb2xsVGFyZ2V0OiBzY3JvbGxUYXJnZXRQcm9wXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Njcm9sbCcgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3Qgc2Nyb2xsID0ge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9LFxuXG4gICAgICBkaXJlY3Rpb246ICdkb3duJyxcbiAgICAgIGRpcmVjdGlvbkNoYW5nZWQ6IGZhbHNlLFxuXG4gICAgICBkZWx0YToge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH0sXG5cbiAgICAgIGluZmxlY3Rpb25Qb2ludDoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2xlYXJUaW1lciA9IG51bGwsIGxvY2FsU2Nyb2xsVGFyZ2V0LCBwYXJlbnRFbFxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc2Nyb2xsVGFyZ2V0LCAoKSA9PiB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBlbWl0RXZlbnQgKCkge1xuICAgICAgY2xlYXJUaW1lcj8uKClcblxuICAgICAgY29uc3QgdG9wID0gTWF0aC5tYXgoMCwgZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldCkpXG4gICAgICBjb25zdCBsZWZ0ID0gZ2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KVxuXG4gICAgICBjb25zdCBkZWx0YSA9IHtcbiAgICAgICAgdG9wOiB0b3AgLSBzY3JvbGwucG9zaXRpb24udG9wLFxuICAgICAgICBsZWZ0OiBsZWZ0IC0gc2Nyb2xsLnBvc2l0aW9uLmxlZnRcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAocHJvcHMuYXhpcyA9PT0gJ3ZlcnRpY2FsJyAmJiBkZWx0YS50b3AgPT09IDApXG4gICAgICAgIHx8IChwcm9wcy5heGlzID09PSAnaG9yaXpvbnRhbCcgJiYgZGVsdGEubGVmdCA9PT0gMClcbiAgICAgICkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IGN1ckRpciA9IE1hdGguYWJzKGRlbHRhLnRvcCkgPj0gTWF0aC5hYnMoZGVsdGEubGVmdClcbiAgICAgICAgPyAoZGVsdGEudG9wIDwgMCA/ICd1cCcgOiAnZG93bicpXG4gICAgICAgIDogKGRlbHRhLmxlZnQgPCAwID8gJ2xlZnQnIDogJ3JpZ2h0JylcblxuICAgICAgc2Nyb2xsLnBvc2l0aW9uID0geyB0b3AsIGxlZnQgfVxuICAgICAgc2Nyb2xsLmRpcmVjdGlvbkNoYW5nZWQgPSBzY3JvbGwuZGlyZWN0aW9uICE9PSBjdXJEaXJcbiAgICAgIHNjcm9sbC5kZWx0YSA9IGRlbHRhXG5cbiAgICAgIGlmIChzY3JvbGwuZGlyZWN0aW9uQ2hhbmdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBzY3JvbGwuZGlyZWN0aW9uID0gY3VyRGlyXG4gICAgICAgIHNjcm9sbC5pbmZsZWN0aW9uUG9pbnQgPSBzY3JvbGwucG9zaXRpb25cbiAgICAgIH1cblxuICAgICAgZW1pdCgnc2Nyb2xsJywgeyAuLi5zY3JvbGwgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSBnZXRTY3JvbGxUYXJnZXQocGFyZW50RWwsIHByb3BzLnNjcm9sbFRhcmdldClcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRyaWdnZXIsIHBhc3NpdmUpXG4gICAgICB0cmlnZ2VyKHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5jb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdHJpZ2dlciwgcGFzc2l2ZSlcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSB2b2lkIDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyIChpbW1lZGlhdGVseSkge1xuICAgICAgaWYgKGltbWVkaWF0ZWx5ID09PSB0cnVlIHx8IHByb3BzLmRlYm91bmNlID09PSAwIHx8IHByb3BzLmRlYm91bmNlID09PSAnMCcpIHtcbiAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGNsZWFyVGltZXIgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgWyB0aW1lciwgZm4gXSA9IHByb3BzLmRlYm91bmNlXG4gICAgICAgICAgPyBbIHNldFRpbWVvdXQoZW1pdEV2ZW50LCBwcm9wcy5kZWJvdW5jZSksIGNsZWFyVGltZW91dCBdXG4gICAgICAgICAgOiBbIHJlcXVlc3RBbmltYXRpb25GcmFtZShlbWl0RXZlbnQpLCBjYW5jZWxBbmltYXRpb25GcmFtZSBdXG5cbiAgICAgICAgY2xlYXJUaW1lciA9ICgpID0+IHtcbiAgICAgICAgICBmbih0aW1lcilcbiAgICAgICAgICBjbGVhclRpbWVyID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIHdhdGNoKCgpID0+IHByb3h5LiRxLmxhbmcucnRsLCBlbWl0RXZlbnQpXG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgcGFyZW50RWwgPSBwcm94eS4kZWwucGFyZW50Tm9kZVxuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGNsZWFyVGltZXI/LigpXG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIHRyaWdnZXIsXG4gICAgICBnZXRQb3NpdGlvbjogKCkgPT4gc2Nyb2xsXG4gICAgfSlcblxuICAgIHJldHVybiBub29wXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgU2Nyb2xsQXJlYUNvbnRyb2xzIGZyb20gJy4vU2Nyb2xsQXJlYUNvbnRyb2xzLmpzJ1xuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuaW1wb3J0IFFTY3JvbGxPYnNlcnZlciBmcm9tICcuLi9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgVG91Y2hQYW4gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b3VjaC1wYW4vVG91Y2hQYW4uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiwgc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsL3Njcm9sbC5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UvZGVib3VuY2UuanMnXG5cbmNvbnN0IGF4aXNMaXN0ID0gWyAndmVydGljYWwnLCAnaG9yaXpvbnRhbCcgXVxuY29uc3QgZGlyUHJvcHMgPSB7XG4gIHZlcnRpY2FsOiB7IG9mZnNldDogJ29mZnNldFknLCBzY3JvbGw6ICdzY3JvbGxUb3AnLCBkaXI6ICdkb3duJywgZGlzdDogJ3knIH0sXG4gIGhvcml6b250YWw6IHsgb2Zmc2V0OiAnb2Zmc2V0WCcsIHNjcm9sbDogJ3Njcm9sbExlZnQnLCBkaXI6ICdyaWdodCcsIGRpc3Q6ICd4JyB9XG59XG5jb25zdCBwYW5PcHRzID0ge1xuICBwcmV2ZW50OiB0cnVlLFxuICBtb3VzZTogdHJ1ZSxcbiAgbW91c2VBbGxEaXI6IHRydWVcbn1cblxuY29uc3QgZ2V0TWluVGh1bWJTaXplID0gc2l6ZSA9PiAoc2l6ZSA+PSAyNTAgPyA1MCA6IE1hdGguY2VpbChzaXplIC8gNSkpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU2Nyb2xsQXJlYScsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICB0aHVtYlN0eWxlOiBPYmplY3QsXG4gICAgdmVydGljYWxUaHVtYlN0eWxlOiBPYmplY3QsXG4gICAgaG9yaXpvbnRhbFRodW1iU3R5bGU6IE9iamVjdCxcblxuICAgIGJhclN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIHZlcnRpY2FsQmFyU3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgaG9yaXpvbnRhbEJhclN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuXG4gICAgdmVydGljYWxPZmZzZXQ6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogWyAwLCAwIF1cbiAgICB9LFxuICAgIGhvcml6b250YWxPZmZzZXQ6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogWyAwLCAwIF1cbiAgICB9LFxuXG4gICAgY29udGVudFN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGNvbnRlbnRBY3RpdmVTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIGRlbGF5OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAxMDAwXG4gICAgfSxcblxuICAgIHZpc2libGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcblxuICAgIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgICBvblNjcm9sbDogRnVuY3Rpb25cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIC8vIHN0YXRlIG1hbmFnZW1lbnRcbiAgICBjb25zdCB0ZW1wU2hvd2luZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBwYW5uaW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGhvdmVyID0gcmVmKGZhbHNlKVxuXG4gICAgLy8gb3RoZXIuLi5cbiAgICBjb25zdCBjb250YWluZXIgPSB7XG4gICAgICB2ZXJ0aWNhbDogcmVmKDApLFxuICAgICAgaG9yaXpvbnRhbDogcmVmKDApXG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsID0ge1xuICAgICAgdmVydGljYWw6IHtcbiAgICAgICAgcmVmOiByZWYobnVsbCksXG4gICAgICAgIHBvc2l0aW9uOiByZWYoMCksXG4gICAgICAgIHNpemU6IHJlZigwKVxuICAgICAgfSxcblxuICAgICAgaG9yaXpvbnRhbDoge1xuICAgICAgICByZWY6IHJlZihudWxsKSxcbiAgICAgICAgcG9zaXRpb246IHJlZigwKSxcbiAgICAgICAgc2l6ZTogcmVmKDApXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHByb3h5LiRxKVxuXG4gICAgbGV0IHRpbWVyID0gbnVsbCwgcGFuUmVmUG9zXG5cbiAgICBjb25zdCB0YXJnZXRSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3Etc2Nyb2xsYXJlYSdcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhLS1kYXJrJyA6ICcnKVxuICAgIClcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGFpbmVyLCB7XG4gICAgICB2ZXJ0aWNhbElubmVyOiBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSAtIHByb3BzLnZlcnRpY2FsT2Zmc2V0WyAwIF0gLSBwcm9wcy52ZXJ0aWNhbE9mZnNldFsgMSBdXG4gICAgICApKSxcblxuICAgICAgaG9yaXpvbnRhbElubmVyOiBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlIC0gcHJvcHMuaG9yaXpvbnRhbE9mZnNldFsgMCBdIC0gcHJvcHMuaG9yaXpvbnRhbE9mZnNldFsgMSBdXG4gICAgICApKVxuICAgIH0pXG5cbiAgICBzY3JvbGwudmVydGljYWwucGVyY2VudGFnZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGRpZmYgPSBzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSAtIGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZVxuICAgICAgaWYgKGRpZmYgPD0gMCkgeyByZXR1cm4gMCB9XG4gICAgICBjb25zdCBwID0gYmV0d2VlbihzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUgLyBkaWZmLCAwLCAxKVxuICAgICAgcmV0dXJuIE1hdGgucm91bmQocCAqIDEwMDAwKSAvIDEwMDAwXG4gICAgfSlcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJIaWRkZW4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAoXG4gICAgICAgIChwcm9wcy52aXNpYmxlID09PSBudWxsID8gaG92ZXIudmFsdWUgOiBwcm9wcy52aXNpYmxlKSAhPT0gdHJ1ZVxuICAgICAgICAmJiB0ZW1wU2hvd2luZy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICAgJiYgcGFubmluZy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICkgfHwgc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUgPD0gY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlICsgMVxuICAgICkpXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnRodW1iU3RhcnQgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy52ZXJ0aWNhbE9mZnNldFsgMCBdXG4gICAgICArIHNjcm9sbC52ZXJ0aWNhbC5wZXJjZW50YWdlLnZhbHVlICogKGNvbnRhaW5lci52ZXJ0aWNhbElubmVyLnZhbHVlIC0gc2Nyb2xsLnZlcnRpY2FsLnRodW1iU2l6ZS52YWx1ZSlcbiAgICApKVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYlNpemUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgTWF0aC5yb3VuZChcbiAgICAgICAgYmV0d2VlbihcbiAgICAgICAgICBjb250YWluZXIudmVydGljYWxJbm5lci52YWx1ZSAqIGNvbnRhaW5lci52ZXJ0aWNhbElubmVyLnZhbHVlIC8gc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUsXG4gICAgICAgICAgZ2V0TWluVGh1bWJTaXplKGNvbnRhaW5lci52ZXJ0aWNhbElubmVyLnZhbHVlKSxcbiAgICAgICAgICBjb250YWluZXIudmVydGljYWxJbm5lci52YWx1ZVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICAgIHNjcm9sbC52ZXJ0aWNhbC5zdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAuLi5wcm9wcy50aHVtYlN0eWxlLFxuICAgICAgLi4ucHJvcHMudmVydGljYWxUaHVtYlN0eWxlLFxuICAgICAgdG9wOiBgJHsgc2Nyb2xsLnZlcnRpY2FsLnRodW1iU3RhcnQudmFsdWUgfXB4YCxcbiAgICAgIGhlaWdodDogYCR7IHNjcm9sbC52ZXJ0aWNhbC50aHVtYlNpemUudmFsdWUgfXB4YCxcbiAgICAgIHJpZ2h0OiBgJHsgcHJvcHMuaG9yaXpvbnRhbE9mZnNldFsgMSBdIH1weGBcbiAgICB9KSlcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICdxLXNjcm9sbGFyZWFfX3RodW1iIHEtc2Nyb2xsYXJlYV9fdGh1bWItLXYgYWJzb2x1dGUtcmlnaHQnXG4gICAgICArIChzY3JvbGwudmVydGljYWwudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtc2Nyb2xsYXJlYV9fdGh1bWItLWludmlzaWJsZScgOiAnJylcbiAgICApKVxuICAgIHNjcm9sbC52ZXJ0aWNhbC5iYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICdxLXNjcm9sbGFyZWFfX2JhciBxLXNjcm9sbGFyZWFfX2Jhci0tdiBhYnNvbHV0ZS1yaWdodCdcbiAgICAgICsgKHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX19iYXItLWludmlzaWJsZScgOiAnJylcbiAgICApKVxuXG4gICAgc2Nyb2xsLmhvcml6b250YWwucGVyY2VudGFnZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGRpZmYgPSBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlIC0gY29udGFpbmVyLmhvcml6b250YWwudmFsdWVcbiAgICAgIGlmIChkaWZmIDw9IDApIHsgcmV0dXJuIDAgfVxuICAgICAgY29uc3QgcCA9IGJldHdlZW4oTWF0aC5hYnMoc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWUpIC8gZGlmZiwgMCwgMSlcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHAgKiAxMDAwMCkgLyAxMDAwMFxuICAgIH0pXG4gICAgc2Nyb2xsLmhvcml6b250YWwudGh1bWJIaWRkZW4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAoXG4gICAgICAgIChwcm9wcy52aXNpYmxlID09PSBudWxsID8gaG92ZXIudmFsdWUgOiBwcm9wcy52aXNpYmxlKSAhPT0gdHJ1ZVxuICAgICAgICAmJiB0ZW1wU2hvd2luZy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICAgJiYgcGFubmluZy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICkgfHwgc2Nyb2xsLmhvcml6b250YWwuc2l6ZS52YWx1ZSA8PSBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSArIDFcbiAgICApKVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLnRodW1iU3RhcnQgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5ob3Jpem9udGFsT2Zmc2V0WyAwIF1cbiAgICAgICsgc2Nyb2xsLmhvcml6b250YWwucGVyY2VudGFnZS52YWx1ZSAqIChjb250YWluZXIuaG9yaXpvbnRhbElubmVyLnZhbHVlIC0gc2Nyb2xsLmhvcml6b250YWwudGh1bWJTaXplLnZhbHVlKVxuICAgICkpXG4gICAgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTaXplID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIE1hdGgucm91bmQoXG4gICAgICAgIGJldHdlZW4oXG4gICAgICAgICAgY29udGFpbmVyLmhvcml6b250YWxJbm5lci52YWx1ZSAqIGNvbnRhaW5lci5ob3Jpem9udGFsSW5uZXIudmFsdWUgLyBzY3JvbGwuaG9yaXpvbnRhbC5zaXplLnZhbHVlLFxuICAgICAgICAgIGdldE1pblRodW1iU2l6ZShjb250YWluZXIuaG9yaXpvbnRhbElubmVyLnZhbHVlKSxcbiAgICAgICAgICBjb250YWluZXIuaG9yaXpvbnRhbElubmVyLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICAgc2Nyb2xsLmhvcml6b250YWwuc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgLi4ucHJvcHMudGh1bWJTdHlsZSxcbiAgICAgIC4uLnByb3BzLmhvcml6b250YWxUaHVtYlN0eWxlLFxuICAgICAgWyBwcm94eS4kcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXTogYCR7IHNjcm9sbC5ob3Jpem9udGFsLnRodW1iU3RhcnQudmFsdWUgfXB4YCxcbiAgICAgIHdpZHRoOiBgJHsgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTaXplLnZhbHVlIH1weGAsXG4gICAgICBib3R0b206IGAkeyBwcm9wcy52ZXJ0aWNhbE9mZnNldFsgMSBdIH1weGBcbiAgICB9KSlcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkNsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJ3Etc2Nyb2xsYXJlYV9fdGh1bWIgcS1zY3JvbGxhcmVhX190aHVtYi0taCBhYnNvbHV0ZS1ib3R0b20nXG4gICAgICArIChzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX190aHVtYi0taW52aXNpYmxlJyA6ICcnKVxuICAgICkpXG4gICAgc2Nyb2xsLmhvcml6b250YWwuYmFyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAncS1zY3JvbGxhcmVhX19iYXIgcS1zY3JvbGxhcmVhX19iYXItLWggYWJzb2x1dGUtYm90dG9tJ1xuICAgICAgKyAoc2Nyb2xsLmhvcml6b250YWwudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtc2Nyb2xsYXJlYV9fYmFyLS1pbnZpc2libGUnIDogJycpXG4gICAgKSlcblxuICAgIGNvbnN0IG1haW5TdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSAmJiBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLmNvbnRlbnRTdHlsZVxuICAgICAgICA6IHByb3BzLmNvbnRlbnRBY3RpdmVTdHlsZVxuICAgICkpXG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGwgKCkge1xuICAgICAgY29uc3QgaW5mbyA9IHt9XG5cbiAgICAgIGF4aXNMaXN0LmZvckVhY2goYXhpcyA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzY3JvbGxbIGF4aXMgXVxuICAgICAgICBPYmplY3QuYXNzaWduKGluZm8sIHtcbiAgICAgICAgICBbIGF4aXMgKyAnUG9zaXRpb24nIF06IGRhdGEucG9zaXRpb24udmFsdWUsXG4gICAgICAgICAgWyBheGlzICsgJ1BlcmNlbnRhZ2UnIF06IGRhdGEucGVyY2VudGFnZS52YWx1ZSxcbiAgICAgICAgICBbIGF4aXMgKyAnU2l6ZScgXTogZGF0YS5zaXplLnZhbHVlLFxuICAgICAgICAgIFsgYXhpcyArICdDb250YWluZXJTaXplJyBdOiBjb250YWluZXJbIGF4aXMgXS52YWx1ZSxcbiAgICAgICAgICBbIGF4aXMgKyAnQ29udGFpbmVySW5uZXJTaXplJyBdOiBjb250YWluZXJbIGF4aXMgKyAnSW5uZXInIF0udmFsdWVcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBpbmZvXG4gICAgfVxuXG4gICAgLy8gd2UgaGF2ZSBsb3RzIG9mIGxpc3RlbmVycywgc29cbiAgICAvLyBlbnN1cmUgd2UncmUgbm90IGVtaXR0aW5nIHNhbWUgaW5mb1xuICAgIC8vIG11bHRpcGxlIHRpbWVzXG4gICAgY29uc3QgZW1pdFNjcm9sbCA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgIGNvbnN0IGluZm8gPSBnZXRTY3JvbGwoKVxuICAgICAgaW5mby5yZWYgPSBwcm94eVxuICAgICAgZW1pdCgnc2Nyb2xsJywgaW5mbylcbiAgICB9LCAwKVxuXG4gICAgZnVuY3Rpb24gbG9jYWxTZXRTY3JvbGxQb3NpdGlvbiAoYXhpcywgb2Zmc2V0LCBkdXJhdGlvbikge1xuICAgICAgaWYgKGF4aXNMaXN0LmluY2x1ZGVzKGF4aXMpID09PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbUVNjcm9sbEFyZWFdOiB3cm9uZyBmaXJzdCBwYXJhbSBvZiBzZXRTY3JvbGxQb3NpdGlvbiAodmVydGljYWwvaG9yaXpvbnRhbCknKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZm4gPSBheGlzID09PSAndmVydGljYWwnXG4gICAgICAgID8gc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvblxuICAgICAgICA6IHNldEhvcml6b250YWxTY3JvbGxQb3NpdGlvblxuXG4gICAgICBmbih0YXJnZXRSZWYudmFsdWUsIG9mZnNldCwgZHVyYXRpb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29udGFpbmVyICh7IGhlaWdodCwgd2lkdGggfSkge1xuICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlXG5cbiAgICAgIGlmIChjb250YWluZXIudmVydGljYWwudmFsdWUgIT09IGhlaWdodCkge1xuICAgICAgICBjb250YWluZXIudmVydGljYWwudmFsdWUgPSBoZWlnaHRcbiAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgIT09IHdpZHRoKSB7XG4gICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlID0gd2lkdGhcbiAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBjaGFuZ2UgPT09IHRydWUgJiYgc3RhcnRUaW1lcigpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsICh7IHBvc2l0aW9uIH0pIHtcbiAgICAgIGxldCBjaGFuZ2UgPSBmYWxzZVxuXG4gICAgICBpZiAoc2Nyb2xsLnZlcnRpY2FsLnBvc2l0aW9uLnZhbHVlICE9PSBwb3NpdGlvbi50b3ApIHtcbiAgICAgICAgc2Nyb2xsLnZlcnRpY2FsLnBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb24udG9wXG4gICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbC5ob3Jpem9udGFsLnBvc2l0aW9uLnZhbHVlICE9PSBwb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgIHNjcm9sbC5ob3Jpem9udGFsLnBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb24ubGVmdFxuICAgICAgICBjaGFuZ2UgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNoYW5nZSA9PT0gdHJ1ZSAmJiBzdGFydFRpbWVyKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxTaXplICh7IGhlaWdodCwgd2lkdGggfSkge1xuICAgICAgaWYgKHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgIT09IHdpZHRoKSB7XG4gICAgICAgIHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgPSB3aWR0aFxuICAgICAgICBzdGFydFRpbWVyKClcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlICE9PSBoZWlnaHQpIHtcbiAgICAgICAgc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUgPSBoZWlnaHRcbiAgICAgICAgc3RhcnRUaW1lcigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYW5UaHVtYiAoZSwgYXhpcykge1xuICAgICAgY29uc3QgZGF0YSA9IHNjcm9sbFsgYXhpcyBdXG5cbiAgICAgIGlmIChlLmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGRhdGEudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUpIHJldHVyblxuXG4gICAgICAgIHBhblJlZlBvcyA9IGRhdGEucG9zaXRpb24udmFsdWVcbiAgICAgICAgcGFubmluZy52YWx1ZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHBhbm5pbmcudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChlLmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgICAgcGFubmluZy52YWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRQcm9wID0gZGlyUHJvcHNbIGF4aXMgXVxuXG4gICAgICBjb25zdCBtdWx0aXBsaWVyID0gKFxuICAgICAgICAoZGF0YS5zaXplLnZhbHVlIC0gY29udGFpbmVyWyBheGlzIF0udmFsdWUpXG4gICAgICAgIC8gKGNvbnRhaW5lclsgYXhpcyArICdJbm5lcicgXS52YWx1ZSAtIGRhdGEudGh1bWJTaXplLnZhbHVlKVxuICAgICAgKVxuICAgICAgY29uc3QgZGlzdGFuY2UgPSBlLmRpc3RhbmNlWyBkUHJvcC5kaXN0IF1cbiAgICAgIGNvbnN0IHBvcyA9IHBhblJlZlBvcyArIChlLmRpcmVjdGlvbiA9PT0gZFByb3AuZGlyID8gMSA6IC0xKSAqIGRpc3RhbmNlICogbXVsdGlwbGllclxuXG4gICAgICBzZXRTY3JvbGwocG9zLCBheGlzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2Vkb3duIChldnQsIGF4aXMpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBzY3JvbGxbIGF4aXMgXVxuXG4gICAgICBpZiAoZGF0YS50aHVtYkhpZGRlbi52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBzdGFydE9mZnNldCA9IGF4aXMgPT09ICd2ZXJ0aWNhbCdcbiAgICAgICAgICA/IHByb3BzLnZlcnRpY2FsT2Zmc2V0WyAwIF1cbiAgICAgICAgICA6IHByb3BzLmhvcml6b250YWxPZmZzZXRbIDAgXVxuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGV2dFsgZGlyUHJvcHNbIGF4aXMgXS5vZmZzZXQgXSAtIHN0YXJ0T2Zmc2V0XG4gICAgICAgIGNvbnN0IHRodW1iU3RhcnQgPSBkYXRhLnRodW1iU3RhcnQudmFsdWUgLSBzdGFydE9mZnNldFxuXG4gICAgICAgIGlmIChvZmZzZXQgPCB0aHVtYlN0YXJ0IHx8IG9mZnNldCA+IHRodW1iU3RhcnQgKyBkYXRhLnRodW1iU2l6ZS52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IHRhcmdldFRodW1iU3RhcnQgPSBvZmZzZXQgLSBkYXRhLnRodW1iU2l6ZS52YWx1ZSAvIDJcbiAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gYmV0d2Vlbih0YXJnZXRUaHVtYlN0YXJ0IC8gKGNvbnRhaW5lclsgYXhpcyArICdJbm5lcicgXS52YWx1ZSAtIGRhdGEudGh1bWJTaXplLnZhbHVlKSwgMCwgMSlcbiAgICAgICAgICBzZXRTY3JvbGwocGVyY2VudGFnZSAqIE1hdGgubWF4KDAsIGRhdGEuc2l6ZS52YWx1ZSAtIGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlKSwgYXhpcylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFjdGl2YXRlIHRodW1iIHBhblxuICAgICAgICBpZiAoZGF0YS5yZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICBkYXRhLnJlZi52YWx1ZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KGV2dC50eXBlLCBldnQpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRUaW1lciAoKSB7XG4gICAgICB0ZW1wU2hvd2luZy52YWx1ZSA9IHRydWVcblxuICAgICAgdGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICAgIHRlbXBTaG93aW5nLnZhbHVlID0gZmFsc2VcbiAgICAgIH0sIHByb3BzLmRlbGF5KVxuXG4gICAgICBwcm9wcy5vblNjcm9sbCAhPT0gdm9pZCAwICYmIGVtaXRTY3JvbGwoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFNjcm9sbCAob2Zmc2V0LCBheGlzKSB7XG4gICAgICB0YXJnZXRSZWYudmFsdWVbIGRpclByb3BzWyBheGlzIF0uc2Nyb2xsIF0gPSBvZmZzZXRcbiAgICB9XG5cbiAgICBsZXQgbW91c2VFdmVudFRpbWVyID0gbnVsbFxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZWVudGVyICgpIHtcbiAgICAgIGlmIChtb3VzZUV2ZW50VGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KG1vdXNlRXZlbnRUaW1lcilcbiAgICAgIH1cblxuICAgICAgLy8gc2V0VGltZW91dCBuZWVkZWQgZm9yIGlPUzsgc2VlIHRpY2tldCAjMTYyMTBcbiAgICAgIG1vdXNlRXZlbnRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtb3VzZUV2ZW50VGltZXIgPSBudWxsXG4gICAgICAgIGhvdmVyLnZhbHVlID0gdHJ1ZVxuICAgICAgfSwgcHJveHkuJHEucGxhdGZvcm0uaXMuaW9zID8gNTAgOiAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2VsZWF2ZSAoKSB7XG4gICAgICBpZiAobW91c2VFdmVudFRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChtb3VzZUV2ZW50VGltZXIpXG4gICAgICAgIG1vdXNlRXZlbnRUaW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaG92ZXIudmFsdWUgPSBmYWxzZVxuICAgIH1cblxuICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IG51bGxcblxuICAgIHdhdGNoKCgpID0+IHByb3h5LiRxLmxhbmcucnRsLCBydGwgPT4ge1xuICAgICAgaWYgKHRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBzZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb24oXG4gICAgICAgICAgdGFyZ2V0UmVmLnZhbHVlLFxuICAgICAgICAgIE1hdGguYWJzKHNjcm9sbC5ob3Jpem9udGFsLnBvc2l0aW9uLnZhbHVlKSAqIChydGwgPT09IHRydWUgPyAtMSA6IDEpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBzY3JvbGxQb3NpdGlvbiA9IHtcbiAgICAgICAgdG9wOiBzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUsXG4gICAgICAgIGxlZnQ6IHNjcm9sbC5ob3Jpem9udGFsLnBvc2l0aW9uLnZhbHVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIGlmIChzY3JvbGxQb3NpdGlvbiA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IHRhcmdldFJlZi52YWx1ZVxuXG4gICAgICBpZiAoc2Nyb2xsVGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbihzY3JvbGxUYXJnZXQsIHNjcm9sbFBvc2l0aW9uLmxlZnQpXG4gICAgICAgIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24oc2Nyb2xsVGFyZ2V0LCBzY3JvbGxQb3NpdGlvbi50b3ApXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudChlbWl0U2Nyb2xsLmNhbmNlbClcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIGdldFNjcm9sbFRhcmdldDogKCkgPT4gdGFyZ2V0UmVmLnZhbHVlLFxuICAgICAgZ2V0U2Nyb2xsLFxuICAgICAgZ2V0U2Nyb2xsUG9zaXRpb246ICgpID0+ICh7XG4gICAgICAgIHRvcDogc2Nyb2xsLnZlcnRpY2FsLnBvc2l0aW9uLnZhbHVlLFxuICAgICAgICBsZWZ0OiBzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZVxuICAgICAgfSksXG4gICAgICBnZXRTY3JvbGxQZXJjZW50YWdlOiAoKSA9PiAoe1xuICAgICAgICB0b3A6IHNjcm9sbC52ZXJ0aWNhbC5wZXJjZW50YWdlLnZhbHVlLFxuICAgICAgICBsZWZ0OiBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlLnZhbHVlXG4gICAgICB9KSxcbiAgICAgIHNldFNjcm9sbFBvc2l0aW9uOiBsb2NhbFNldFNjcm9sbFBvc2l0aW9uLFxuICAgICAgc2V0U2Nyb2xsUGVyY2VudGFnZSAoYXhpcywgcGVyY2VudGFnZSwgZHVyYXRpb24pIHtcbiAgICAgICAgbG9jYWxTZXRTY3JvbGxQb3NpdGlvbihcbiAgICAgICAgICBheGlzLFxuICAgICAgICAgIHBlcmNlbnRhZ2VcbiAgICAgICAgICAgICogKHNjcm9sbFsgYXhpcyBdLnNpemUudmFsdWUgLSBjb250YWluZXJbIGF4aXMgXS52YWx1ZSlcbiAgICAgICAgICAgICogKGF4aXMgPT09ICdob3Jpem9udGFsJyAmJiBwcm94eS4kcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IC0xIDogMSksXG4gICAgICAgICAgZHVyYXRpb25cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBzdG9yZSA9IHtcbiAgICAgIHNjcm9sbCxcblxuICAgICAgdGh1bWJWZXJ0RGlyOiBbIFtcbiAgICAgICAgVG91Y2hQYW4sXG4gICAgICAgIGUgPT4geyBvblBhblRodW1iKGUsICd2ZXJ0aWNhbCcpIH0sXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAgeyB2ZXJ0aWNhbDogdHJ1ZSwgLi4ucGFuT3B0cyB9XG4gICAgICBdIF0sXG5cbiAgICAgIHRodW1iSG9yaXpEaXI6IFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgZSA9PiB7IG9uUGFuVGh1bWIoZSwgJ2hvcml6b250YWwnKSB9LFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHsgaG9yaXpvbnRhbDogdHJ1ZSwgLi4ucGFuT3B0cyB9XG4gICAgICBdIF0sXG5cbiAgICAgIG9uVmVydGljYWxNb3VzZWRvd24gKGV2dCkge1xuICAgICAgICBvbk1vdXNlZG93bihldnQsICd2ZXJ0aWNhbCcpXG4gICAgICB9LFxuXG4gICAgICBvbkhvcml6b250YWxNb3VzZWRvd24gKGV2dCkge1xuICAgICAgICBvbk1vdXNlZG93bihldnQsICdob3Jpem9udGFsJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIG9uTW91c2VlbnRlcixcbiAgICAgICAgb25Nb3VzZWxlYXZlXG4gICAgICB9LCBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IHRhcmdldFJlZixcbiAgICAgICAgICBjbGFzczogJ3Etc2Nyb2xsYXJlYV9fY29udGFpbmVyIHNjcm9sbCByZWxhdGl2ZS1wb3NpdGlvbiBmaXQgaGlkZS1zY3JvbGxiYXInLFxuICAgICAgICAgIHRhYmluZGV4OiBwcm9wcy50YWJpbmRleCAhPT0gdm9pZCAwID8gcHJvcHMudGFiaW5kZXggOiB2b2lkIDBcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1zY3JvbGxhcmVhX19jb250ZW50IGFic29sdXRlJyxcbiAgICAgICAgICAgIHN0eWxlOiBtYWluU3R5bGUudmFsdWVcbiAgICAgICAgICB9LCBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIFtcbiAgICAgICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgICAgICAgICBvblJlc2l6ZTogdXBkYXRlU2Nyb2xsU2l6ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSksXG5cbiAgICAgICAgICBoKFFTY3JvbGxPYnNlcnZlciwge1xuICAgICAgICAgICAgYXhpczogJ2JvdGgnLFxuICAgICAgICAgICAgb25TY3JvbGw6IHVwZGF0ZVNjcm9sbFxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgb25SZXNpemU6IHVwZGF0ZUNvbnRhaW5lclxuICAgICAgICB9KSxcblxuICAgICAgICBoKFNjcm9sbEFyZWFDb250cm9scywge1xuICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgIGJhclN0eWxlOiBwcm9wcy5iYXJTdHlsZSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclN0eWxlOiBwcm9wcy52ZXJ0aWNhbEJhclN0eWxlLFxuICAgICAgICAgIGhvcml6b250YWxCYXJTdHlsZTogcHJvcHMuaG9yaXpvbnRhbEJhclN0eWxlXG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBwcm92aWRlLCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5pbXBvcnQgeyBwYWdlQ29udGFpbmVyS2V5LCBsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnN5bWJvbHMvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdlQ29udGFpbmVyJyxcblxuICBzZXR1cCAoXywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4pXG4gICAgaWYgKCRsYXlvdXQgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FQYWdlQ29udGFpbmVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBwcm92aWRlKHBhZ2VDb250YWluZXJLZXksIHRydWUpXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNzcyA9IHt9XG5cbiAgICAgIGlmICgkbGF5b3V0LmhlYWRlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3MucGFkZGluZ1RvcCA9IGAkeyAkbGF5b3V0LmhlYWRlci5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICgkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgYHBhZGRpbmckeyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdMZWZ0JyA6ICdSaWdodCcgfWAgXSA9IGAkeyAkbGF5b3V0LnJpZ2h0LnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzcy5wYWRkaW5nQm90dG9tID0gYCR7ICRsYXlvdXQuZm9vdGVyLnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbIGBwYWRkaW5nJHsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnUmlnaHQnIDogJ0xlZnQnIH1gIF0gPSBgJHsgJGxheW91dC5sZWZ0LnNpemUgfXB4YFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICBjbGFzczogJ3EtcGFnZS1jb250YWluZXInLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIHJlYWN0aXZlLCBjb21wdXRlZCwgd2F0Y2gsIHByb3ZpZGUsIG9uVW5tb3VudGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGlzUnVudGltZVNzclByZUh5ZHJhdGlvbiB9IGZyb20gJy4uLy4uL3BsdWdpbnMvcGxhdGZvcm0vUGxhdGZvcm0uanMnXG5cbmltcG9ydCBRU2Nyb2xsT2JzZXJ2ZXIgZnJvbSAnLi4vc2Nyb2xsLW9ic2VydmVyL1FTY3JvbGxPYnNlcnZlci5qcydcbmltcG9ydCBRUmVzaXplT2JzZXJ2ZXIgZnJvbSAnLi4vcmVzaXplLW9ic2VydmVyL1FSZXNpemVPYnNlcnZlci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyV2lkdGggfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuc3ltYm9scy9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUxheW91dCcsXG5cbiAgcHJvcHM6IHtcbiAgICBjb250YWluZXI6IEJvb2xlYW4sXG4gICAgdmlldzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hoaCBscHIgZmZmJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiAvXihofGwpaChofHIpIGxwciAoZnxsKWYoZnxyKSQvLnRlc3Qodi50b0xvd2VyQ2FzZSgpKVxuICAgIH0sXG5cbiAgICBvblNjcm9sbDogRnVuY3Rpb24sXG4gICAgb25TY3JvbGxIZWlnaHQ6IEZ1bmN0aW9uLFxuICAgIG9uUmVzaXplOiBGdW5jdGlvblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuXG4gICAgLy8gcGFnZSByZWxhdGVkXG4gICAgY29uc3QgaGVpZ2h0ID0gcmVmKCRxLnNjcmVlbi5oZWlnaHQpXG4gICAgY29uc3Qgd2lkdGggPSByZWYocHJvcHMuY29udGFpbmVyID09PSB0cnVlID8gMCA6ICRxLnNjcmVlbi53aWR0aClcbiAgICBjb25zdCBzY3JvbGwgPSByZWYoeyBwb3NpdGlvbjogMCwgZGlyZWN0aW9uOiAnZG93bicsIGluZmxlY3Rpb25Qb2ludDogMCB9KVxuXG4gICAgLy8gY29udGFpbmVyIG9ubHkgcHJvcFxuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IHJlZigwKVxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gcmVmKGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiBnZXRTY3JvbGxiYXJXaWR0aCgpKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1sYXlvdXQgcS1sYXlvdXQtLSdcbiAgICAgICsgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSA/ICdjb250YWluZXJpemVkJyA6ICdzdGFuZGFyZCcpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5jb250YWluZXIgPT09IGZhbHNlXG4gICAgICAgID8geyBtaW5IZWlnaHQ6ICRxLnNjcmVlbi5oZWlnaHQgKyAncHgnIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIC8vIHVzZWQgYnkgY29udGFpbmVyIG9ubHlcbiAgICBjb25zdCB0YXJnZXRTdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNjcm9sbGJhcldpZHRoLnZhbHVlICE9PSAwXG4gICAgICAgID8geyBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdOiBgJHsgc2Nyb2xsYmFyV2lkdGgudmFsdWUgfXB4YCB9XG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICBjb25zdCB0YXJnZXRDaGlsZFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsYmFyV2lkdGgudmFsdWUgIT09IDBcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdOiAwLFxuICAgICAgICAgICAgWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdsZWZ0JyA6ICdyaWdodCcgXTogYC0keyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHhgLFxuICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgKyAkeyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIG9uUGFnZVNjcm9sbCAoZGF0YSkge1xuICAgICAgaWYgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSB8fCBkb2N1bWVudC5xU2Nyb2xsUHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSB7XG4gICAgICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24udG9wLFxuICAgICAgICAgIGRpcmVjdGlvbjogZGF0YS5kaXJlY3Rpb24sXG4gICAgICAgICAgZGlyZWN0aW9uQ2hhbmdlZDogZGF0YS5kaXJlY3Rpb25DaGFuZ2VkLFxuICAgICAgICAgIGluZmxlY3Rpb25Qb2ludDogZGF0YS5pbmZsZWN0aW9uUG9pbnQudG9wLFxuICAgICAgICAgIGRlbHRhOiBkYXRhLmRlbHRhLnRvcFxuICAgICAgICB9XG5cbiAgICAgICAgc2Nyb2xsLnZhbHVlID0gaW5mb1xuICAgICAgICBwcm9wcy5vblNjcm9sbCAhPT0gdm9pZCAwICYmIGVtaXQoJ3Njcm9sbCcsIGluZm8pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYWdlUmVzaXplIChkYXRhKSB7XG4gICAgICBjb25zdCB7IGhlaWdodDogbmV3SGVpZ2h0LCB3aWR0aDogbmV3V2lkdGggfSA9IGRhdGFcbiAgICAgIGxldCByZXNpemVkID0gZmFsc2VcblxuICAgICAgaWYgKGhlaWdodC52YWx1ZSAhPT0gbmV3SGVpZ2h0KSB7XG4gICAgICAgIHJlc2l6ZWQgPSB0cnVlXG4gICAgICAgIGhlaWdodC52YWx1ZSA9IG5ld0hlaWdodFxuICAgICAgICBwcm9wcy5vblNjcm9sbEhlaWdodCAhPT0gdm9pZCAwICYmIGVtaXQoJ3Njcm9sbEhlaWdodCcsIG5ld0hlaWdodClcbiAgICAgICAgdXBkYXRlU2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgfVxuICAgICAgaWYgKHdpZHRoLnZhbHVlICE9PSBuZXdXaWR0aCkge1xuICAgICAgICByZXNpemVkID0gdHJ1ZVxuICAgICAgICB3aWR0aC52YWx1ZSA9IG5ld1dpZHRoXG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNpemVkID09PSB0cnVlICYmIHByb3BzLm9uUmVzaXplICE9PSB2b2lkIDApIHtcbiAgICAgICAgZW1pdCgncmVzaXplJywgZGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNvbnRhaW5lclJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgaWYgKGNvbnRhaW5lckhlaWdodC52YWx1ZSAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIGNvbnRhaW5lckhlaWdodC52YWx1ZSA9IGhlaWdodFxuICAgICAgICB1cGRhdGVTY3JvbGxiYXJXaWR0aCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsYmFyV2lkdGggKCkge1xuICAgICAgaWYgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGhlaWdodC52YWx1ZSA+IGNvbnRhaW5lckhlaWdodC52YWx1ZVxuICAgICAgICAgID8gZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgICAgIDogMFxuXG4gICAgICAgIGlmIChzY3JvbGxiYXJXaWR0aC52YWx1ZSAhPT0gd2lkdGgpIHtcbiAgICAgICAgICBzY3JvbGxiYXJXaWR0aC52YWx1ZSA9IHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYW5pbWF0ZVRpbWVyID0gbnVsbFxuXG4gICAgY29uc3QgJGxheW91dCA9IHtcbiAgICAgIGluc3RhbmNlczoge30sXG4gICAgICB2aWV3OiBjb21wdXRlZCgoKSA9PiBwcm9wcy52aWV3KSxcbiAgICAgIGlzQ29udGFpbmVyOiBjb21wdXRlZCgoKSA9PiBwcm9wcy5jb250YWluZXIpLFxuXG4gICAgICByb290UmVmLFxuXG4gICAgICBoZWlnaHQsXG4gICAgICBjb250YWluZXJIZWlnaHQsXG4gICAgICBzY3JvbGxiYXJXaWR0aCxcbiAgICAgIHRvdGFsV2lkdGg6IGNvbXB1dGVkKCgpID0+IHdpZHRoLnZhbHVlICsgc2Nyb2xsYmFyV2lkdGgudmFsdWUpLFxuXG4gICAgICByb3dzOiBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBwcm9wcy52aWV3LnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRvcDogcm93c1sgMCBdLnNwbGl0KCcnKSxcbiAgICAgICAgICBtaWRkbGU6IHJvd3NbIDEgXS5zcGxpdCgnJyksXG4gICAgICAgICAgYm90dG9tOiByb3dzWyAyIF0uc3BsaXQoJycpXG4gICAgICAgIH1cbiAgICAgIH0pLFxuXG4gICAgICBoZWFkZXI6IHJlYWN0aXZlKHsgc2l6ZTogMCwgb2Zmc2V0OiAwLCBzcGFjZTogZmFsc2UgfSksXG4gICAgICByaWdodDogcmVhY3RpdmUoeyBzaXplOiAzMDAsIG9mZnNldDogMCwgc3BhY2U6IGZhbHNlIH0pLFxuICAgICAgZm9vdGVyOiByZWFjdGl2ZSh7IHNpemU6IDAsIG9mZnNldDogMCwgc3BhY2U6IGZhbHNlIH0pLFxuICAgICAgbGVmdDogcmVhY3RpdmUoeyBzaXplOiAzMDAsIG9mZnNldDogMCwgc3BhY2U6IGZhbHNlIH0pLFxuXG4gICAgICBzY3JvbGwsXG5cbiAgICAgIGFuaW1hdGUgKCkge1xuICAgICAgICBpZiAoYW5pbWF0ZVRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGFuaW1hdGVUaW1lcilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3EtYm9keS0tbGF5b3V0LWFuaW1hdGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgYW5pbWF0ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYW5pbWF0ZVRpbWVyID0gbnVsbFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncS1ib2R5LS1sYXlvdXQtYW5pbWF0ZScpXG4gICAgICAgIH0sIDE1NSlcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZSAocGFydCwgcHJvcCwgdmFsKSB7XG4gICAgICAgICRsYXlvdXRbIHBhcnQgXVsgcHJvcCBdID0gdmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvdmlkZShsYXlvdXRLZXksICRsYXlvdXQpXG5cbiAgICAvLyBwcmV2ZW50IHNjcm9sbGJhciBmbGlja2VyIHdoaWxlIHJlc2l6aW5nIHdpbmRvdyBoZWlnaHRcbiAgICAvLyBpZiBubyBwYWdlIHNjcm9sbGJhciBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoX19RVUFTQVJfU1NSX1NFUlZFUl9fICE9PSB0cnVlICYmIGdldFNjcm9sbGJhcldpZHRoKCkgPiAwKSB7XG4gICAgICBsZXQgdGltZXIgPSBudWxsXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmJvZHlcblxuICAgICAgZnVuY3Rpb24gcmVzdG9yZVNjcm9sbGJhciAoKSB7XG4gICAgICAgIHRpbWVyID0gbnVsbFxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLXNjcm9sbGJhcicpXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhpZGVTY3JvbGxiYXIgKCkge1xuICAgICAgICBpZiAodGltZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAvLyBpZiBpdCBoYXMgbm8gc2Nyb2xsYmFyIHRoZW4gdGhlcmUncyBub3RoaW5nIHRvIGRvXG4gICAgICAgICAgaWYgKGVsLnNjcm9sbEhlaWdodCA+ICRxLnNjcmVlbi5oZWlnaHQpIHJldHVyblxuXG4gICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaGlkZS1zY3JvbGxiYXInKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChyZXN0b3JlU2Nyb2xsYmFyLCAzMDApXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbEV2ZW50IChhY3Rpb24pIHtcbiAgICAgICAgaWYgKHRpbWVyICE9PSBudWxsICYmIGFjdGlvbiA9PT0gJ3JlbW92ZScpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgICAgcmVzdG9yZVNjcm9sbGJhcigpXG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3dbIGAkeyBhY3Rpb24gfUV2ZW50TGlzdGVuZXJgIF0oJ3Jlc2l6ZScsIGhpZGVTY3JvbGxiYXIpXG4gICAgICB9XG5cbiAgICAgIHdhdGNoKFxuICAgICAgICAoKSA9PiAocHJvcHMuY29udGFpbmVyICE9PSB0cnVlID8gJ2FkZCcgOiAncmVtb3ZlJyksXG4gICAgICAgIHVwZGF0ZVNjcm9sbEV2ZW50XG4gICAgICApXG5cbiAgICAgIHByb3BzLmNvbnRhaW5lciAhPT0gdHJ1ZSAmJiB1cGRhdGVTY3JvbGxFdmVudCgnYWRkJylcblxuICAgICAgb25Vbm1vdW50ZWQoKCkgPT4ge1xuICAgICAgICB1cGRhdGVTY3JvbGxFdmVudCgncmVtb3ZlJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIFtcbiAgICAgICAgaChRU2Nyb2xsT2JzZXJ2ZXIsIHsgb25TY3JvbGw6IG9uUGFnZVNjcm9sbCB9KSxcbiAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHsgb25SZXNpemU6IG9uUGFnZVJlc2l6ZSB9KVxuICAgICAgXSlcblxuICAgICAgY29uc3QgbGF5b3V0ID0gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICByZWY6IHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSA/IHZvaWQgMCA6IHJvb3RSZWYsXG4gICAgICAgIHRhYmluZGV4OiAtMVxuICAgICAgfSwgY29udGVudClcblxuICAgICAgaWYgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1sYXlvdXQtY29udGFpbmVyIG92ZXJmbG93LWhpZGRlbicsXG4gICAgICAgICAgcmVmOiByb290UmVmXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwgeyBvblJlc2l6ZTogb25Db250YWluZXJSZXNpemUgfSksXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdhYnNvbHV0ZS1mdWxsJyxcbiAgICAgICAgICAgIHN0eWxlOiB0YXJnZXRTdHlsZS52YWx1ZVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdzY3JvbGwnLFxuICAgICAgICAgICAgICBzdHlsZTogdGFyZ2V0Q2hpbGRTdHlsZS52YWx1ZVxuICAgICAgICAgICAgfSwgWyBsYXlvdXQgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGF5b3V0XG4gICAgfVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8cS1sYXlvdXQgdmlldz1cImhIciBscHIgZkZyXCI+XG4gICAgPHEtaGVhZGVyIGVsZXZhdGVkPlxuICAgICAgPHEtdG9vbGJhcj5cbiAgICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgICAgdG89XCIvXCI+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICBjbGFzcz1cInRleHQtd2hpdGUgcHJpbnQtaGlkZGVuXCJcbiAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgaWNvbj1cIm1kaS1ob21lLW91dGxpbmVcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkhvbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgY2xhc3M9XCJwcmludC1oaWRkZW5cIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgaWNvbj1cIm1lbnVcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJNZW51XCJcbiAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVMZWZ0RHJhd2VyXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGVcbiAgICAgICAgICBjbGFzcz1cImFwcC10aXRsZVwiPlxuICAgICAgICAgIM68UE1UXG5cbiAgICAgICAgICB8XG5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgdi1pZj1cImN1cnJlbnRQcm9qZWN0XCJcbiAgICAgICAgICAgIGNsYXNzPVwiY29udGV4dFwiPlxuICAgICAgICAgICAge3sgY3VycmVudFByb2plY3QubmFtZSB9fVxuICAgICAgICAgICAgPE5vdGVJY29uXG4gICAgICAgICAgICAgIDplbGVtZW50PVwiY3VycmVudFByb2plY3RcIiAvPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cImN1cnJlbnRJbnRlcnZpZXdcIj5cbiAgICAgICAgICAgICAgLSBJbnRlcnZpZXcge3sgY3VycmVudEludGVydmlldy5sYWJlbCB9fVxuICAgICAgICAgICAgICA8Tm90ZUljb25cbiAgICAgICAgICAgICAgICA6ZWxlbWVudD1cImN1cnJlbnRJbnRlcnZpZXdcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHEtYnRuIHYtaWY9XCJpc01vZGlmaWVkXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cInEtbWwteGwgcHJpbnQtaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZG9TdG9yZVByb2plY3QoKVwiXG4gICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICBuby1jYXBzPlxuICAgICAgICAgICAgICBNb2RpZmllZCAtIENsaWNrIGhlcmUgdG8gc2F2ZVxuICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInByaW50LWhpZGRlblwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgdi1pZj1cImlzRGV2ZWxvcG1lbnRcIlxuICAgICAgICAgICAgY2xhc3M9XCJxLW1sLXhsXCJcbiAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICBuby1jYXBzPlxuICAgICAgICAgICAgRGV2ZWxvcG1lbnQgdmVyc2lvblxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICB2LWlmPVwiY3VycmVudFByb2plY3RcIlxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICduZWVkcy1zYXZlJzogaXNNb2RpZmllZCB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cImRvU3RvcmVQcm9qZWN0KClcIlxuICAgICAgICAgICAgaWNvbj1cIm1kaS1jb250ZW50LXNhdmVcIj5cbiAgICAgICAgICAgIDxxLXRvb2x0aXBcbiAgICAgICAgICAgICAgdi1pZj1cImlzTW9kaWZpZWRcIj5cbiAgICAgICAgICAgICAgRGF0YSBoYXMgYmVlbiBtb2RpZmllZC4gQ2xpY2sgdG8gc2F2ZSBpdCBpbiB0aGUgYnJvd3NlciBzdG9yYWdlLlxuICAgICAgICAgICAgPC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgOmNsYXNzPVwieyAnYW5vbnltb3VzJzogaXNBbm9ueW1vdXMgfVwiXG4gICAgICAgICAgICBpY29uPVwibWRpLWFjY291bnRcIj5cbiAgICAgICAgICAgIDxxLXRvb2x0aXBcbiAgICAgICAgICAgICAgdi1pZj1cImlzQW5vbnltb3VzXCI+XG4gICAgICAgICAgICAgIENsaWNrIGFuZCBlbnRlciBhIHVzZXJuYW1lXG4gICAgICAgICAgICA8L3EtdG9vbHRpcD5cbiAgICAgICAgICAgIDxxLXBvcHVwLWVkaXRcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgYXV0by1zYXZlXG4gICAgICAgICAgICAgIHYtc2xvdD1cInNjb3BlXCI+XG4gICAgICAgICAgICAgIDxxLWlucHV0IHYtbW9kZWw9XCJzY29wZS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCIoJGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5zZWxlY3QoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGRlbnNlIGF1dG9mb2N1cyBAa2V5dXAuZW50ZXI9XCJzY29wZS5zZXRcIiAvPlxuICAgICAgICAgICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvcS10b29sYmFyPlxuICAgIDwvcS1oZWFkZXI+XG5cbiAgICA8cS1kcmF3ZXJcbiAgICAgIHYtbW9kZWw9XCJsZWZ0RHJhd2VyT3BlblwiXG4gICAgICBvdmVybGF5XG4gICAgICBib3JkZXJlZFxuICAgICAgPlxuICAgICAgPHEtc2Nyb2xsLWFyZWEgY2xhc3M9XCJmaXRcIj5cbiAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIG1lbnVMaXN0XCIgOmtleT1cImluZGV4XCI+XG5cbiAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgIEBjbGljaz1cImxlZnREcmF3ZXJPcGVuID0gZmFsc2VcIlxuICAgICAgICAgICAgICB2LXJpcHBsZVxuICAgICAgICAgICAgICA6dG89XCJpdGVtLmxpbmtcIlxuICAgICAgICAgICAgICA6aHJlZj1cIml0ZW0uaHJlZlwiXG4gICAgICAgICAgICAgIDp0YXJnZXQ9XCJpdGVtLmhyZWYgPyAnd2ViJyA6IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhciB2LWlmPVwiaXRlbS5pY29uXCI+XG4gICAgICAgICAgICAgICAgPHEtaWNvbiA6bmFtZT1cIml0ZW0uaWNvblwiIC8+XG4gICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7eyBpdGVtLmxhYmVsIH19XG4gICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yIDprZXk9XCInc2VwJyArIGluZGV4XCIgdi1pZj1cIml0ZW0uc2VwYXJhdG9yXCIgLz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtbGlzdD5cbiAgICAgIDwvcS1zY3JvbGwtYXJlYT5cbiAgICA8L3EtZHJhd2VyPlxuXG4gICAgPHEtZHJhd2VyXG4gICAgICB2LW1vZGVsPVwicmlnaHREcmF3ZXJPcGVuXCJcbiAgICAgIGJvcmRlcmVkXG4gICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgPlxuICAgICAgPHEtc2Nyb2xsLWFyZWEgY2xhc3M9XCJmaXRcIj5cbiAgICAgICAgPHEtZm9ybT5cbiAgICAgICAgICA8cS1pbnB1dCB2LW1vZGVsPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1cyAvPlxuICAgICAgICA8L3EtZm9ybT5cbiAgICAgIDwvcS1zY3JvbGwtYXJlYT5cbiAgICA8L3EtZHJhd2VyPlxuXG4gICAgPHEtcGFnZS1jb250YWluZXI+XG4gICAgICA8cm91dGVyLXZpZXcgLz5cbiAgICA8L3EtcGFnZS1jb250YWluZXI+XG5cbiAgPC9xLWxheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgcmVmLCBjb21wdXRlZCwgb25Nb3VudGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInXG4gIGltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnXG4gIGltcG9ydCB7IFJvdXRlTG9jYXRpb25SYXcgfSBmcm9tICd2dWUtcm91dGVyJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgeyB1c2VJbnRlcmZhY2VTdG9yZSB9IGZyb20gJ3N0b3Jlcy9pbnRlcmZhY2UnXG4gIGltcG9ydCB7IHN0b3JlUHJvamVjdCB9IGZyb20gJ3N0b3Jlcy9zdG9yYWdlJ1xuICBpbXBvcnQgTm90ZUljb24gZnJvbSAnY29tcG9uZW50cy9Ob3RlSWNvbi52dWUnXG5cbiAgZGVmaW5lT3B0aW9ucyh7XG4gICAgICBuYW1lOiAnTWFpbkxheW91dCdcbiAgfSlcblxuICBpbnRlcmZhY2UgTWVudUl0ZW0ge1xuICAgICAgbGFiZWw6IHN0cmluZ1xuICAgICAgaWNvbj86IHN0cmluZ1xuICAgICAgbGluaz86IFJvdXRlTG9jYXRpb25SYXdcbiAgICAgIGFjdGlvbj86IG9iamVjdFxuICAgICAgc2VwYXJhdG9yPzogYm9vbGVhblxuICAgICAgaHJlZj86IHN0cmluZ1xuICB9XG5cbiAgY29uc3QgJHEgPSB1c2VRdWFzYXIoKVxuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3Qge1xuICAgICAgY3VycmVudEludGVydmlldyxcbiAgICAgIGN1cnJlbnRQcm9qZWN0SWQsXG4gICAgICBpc01vZGlmaWVkLFxuICAgICAgdXNlcm5hbWVcbiAgfSA9IHN0b3JlVG9SZWZzKGlzdG9yZSlcblxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50UHJvamVjdElkLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHN0b3JlLmdldFByb2plY3QoY3VycmVudFByb2plY3RJZC52YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBpc0RldmVsb3BtZW50ID0gY29tcHV0ZWQoKCkgPT4gZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgPT0gJ2xvY2FsaG9zdCdcbiAgICAgIHx8IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCcvdXBtdC9kZXYnKSlcblxuICBjb25zdCBtZW51TGlzdCA9IGNvbXB1dGVkPE1lbnVJdGVtW10+KCgpID0+IHtcbiAgICAgIGxldCBtZW51OiBNZW51SXRlbVtdID0gW1xuICAgICAgXVxuXG4gICAgICBpZiAoY3VycmVudFByb2plY3RJZC52YWx1ZSkge1xuICAgICAgICAgIG1lbnUucHVzaCh7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlByb2plY3QgZWRpdG9yXCIsXG4gICAgICAgICAgICAgIGljb246ICdtZGktc2VtYW50aWMtd2ViJyxcbiAgICAgICAgICAgICAgbGluazogYC9wcm9qZWN0LyR7Y3VycmVudFByb2plY3RJZC52YWx1ZX1gXG4gICAgICAgICAgfSlcbiAgICAgICAgICBtZW51LnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogXCJHbG9iYWwgZGlhY2hyb25pY1wiLFxuICAgICAgICAgICAgICBpY29uOiAnbWRpLXRhYmxlJyxcbiAgICAgICAgICAgICAgbGluazogYC9zcHJlYWRzaGVldC8ke2N1cnJlbnRQcm9qZWN0SWQudmFsdWV9YFxuICAgICAgICAgIH0pXG4gICAgICAgICAgbWVudS5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRXBpc29kZSBhbmFseXNpc1wiLFxuICAgICAgICAgICAgICBpY29uOiAnbWRpLXRhYmxlJyxcbiAgICAgICAgICAgICAgbGluazogYC9lcGlzb2Rlcy8ke2N1cnJlbnRQcm9qZWN0SWQudmFsdWV9YFxuICAgICAgICAgIH0pXG4gICAgICAgICAgbWVudS5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRGlhY2hyb25pYyBncmFwaFwiLFxuICAgICAgICAgICAgICBpY29uOiAnbWRpLWdyYXBoJyxcbiAgICAgICAgICAgICAgbGluazogYC9kaWFjaHJvbmljLWdyYXBoLyR7Y3VycmVudFByb2plY3RJZC52YWx1ZX1gXG4gICAgICAgICAgfSlcbiAgICAgICAgICBtZW51LnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogXCJTeW5jaHJvbmljIE1vZGVsc1wiLFxuICAgICAgICAgICAgICBpY29uOiAnbWRpLWdyYXBoJyxcbiAgICAgICAgICAgICAgbGluazogYC9tb2RlbHMvJHtjdXJyZW50UHJvamVjdElkLnZhbHVlfWBcbiAgICAgICAgICB9KVxuICAgICAgICAgIG1lbnUucHVzaCh7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNwZWNpZmljIFN5bmNocm9uaWMgQ2F0ZWdvcmllc1wiLFxuICAgICAgICAgICAgICBpY29uOiAnbWRpLXRhYmxlJyxcbiAgICAgICAgICAgICAgbGluazogYC9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yaWVzLyR7Y3VycmVudFByb2plY3RJZC52YWx1ZX1gXG4gICAgICAgICAgfSlcbiAgICAgICAgICBtZW51LnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGVtc1wiLFxuICAgICAgICAgICAgICBpY29uOiAnbWRpLWZvcm1hdC1xdW90ZS1jbG9zZS1vdXRsaW5lJyxcbiAgICAgICAgICAgICAgbGluazogYC9kZXNjcmlwdGVtcy8ke2N1cnJlbnRQcm9qZWN0SWQudmFsdWV9YFxuICAgICAgICAgIH0pXG5cbiAgICAgIH1cbiAgICAgIG1lbnUgPSBtZW51LmNvbmNhdChbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogJ0RlYnVnJyxcbiAgICAgICAgICAgICAgaWNvbjogJ21kaS1leWUnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2RlYnVnJ1xuICAgICAgICAgIH1cbiAgICAgIF0pXG4gICAgICByZXR1cm4gbWVudVxuICB9KVxuXG4gIGNvbnN0IGxlZnREcmF3ZXJPcGVuID0gcmVmKGZhbHNlKVxuICBjb25zdCByaWdodERyYXdlck9wZW4gPSByZWYoZmFsc2UpXG5cbiAgZnVuY3Rpb24gdG9nZ2xlTGVmdERyYXdlciAoKSB7XG4gICAgICBsZWZ0RHJhd2VyT3Blbi52YWx1ZSA9ICFsZWZ0RHJhd2VyT3Blbi52YWx1ZVxuICB9XG5cbiAgY29uc3QgaXNBbm9ueW1vdXMgPSBjb21wdXRlZCgoKSA9PiAodXNlcm5hbWUudmFsdWUgPT0gJycgfHwgdXNlcm5hbWUudmFsdWUgPT0gJ2Fub255bW91cycpKVxuXG4gIGZ1bmN0aW9uIGRvU3RvcmVQcm9qZWN0ICgpIHtcbiAgICAgIGlmIChjdXJyZW50UHJvamVjdElkLnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgYmFzZW5hbWUgPSBzdG9yZVByb2plY3QoY3VycmVudFByb2plY3RJZC52YWx1ZSlcbiAgICAgICAgICBpc3RvcmUuc2V0TW9kaWZpZWQoZmFsc2UpXG4gICAgICAgICAgJHEubm90aWZ5KHtcbiAgICAgICAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBgU3RvcmVkIGFzICR7YmFzZW5hbWV9YFxuICAgICAgICAgIH0pXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkdsb2JhbEtleWRvd24gKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09PSA4MyAvKiBTICovKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgKGlzTW9kaWZpZWQudmFsdWUpIHtcbiAgICAgICAgICAgICAgZG9TdG9yZVByb2plY3QoKVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBsZWZ0RHJhd2VyT3Blbi52YWx1ZSA9IGZhbHNlXG4gICAgICByaWdodERyYXdlck9wZW4udmFsdWUgPSBmYWxzZVxuICAgICAgLy8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vcXVhc2FyZnJhbWV3b3JrL3F1YXNhci9ibG9iL2Rldi9kb2NzL3NyYy9sYXlvdXRzL2RvYy1sYXlvdXQvRG9jU2VhcmNoLnZ1ZSNMMjk2XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uR2xvYmFsS2V5ZG93bilcbiAgfSlcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbi5hbm9ueW1vdXMge1xuICAgIGNvbG9yOiByZWQ7XG59XG4ubmVlZHMtc2F2ZSB7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIm9mZnNldCIsImhlaWdodCIsIndpZHRoIiwiX2NyZWF0ZUJsb2NrIiwiX3dpdGhDdHgiLCJfY3JlYXRlVk5vZGUiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJfd2l0aEtleXMiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl93aXRoRGlyZWN0aXZlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVFBLE1BQUEsVUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxZQUFZO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDZjtBQUFBLElBQ0ksUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLE1BQ1osTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ2Y7QUFBQSxJQUNJLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUVWLFlB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
