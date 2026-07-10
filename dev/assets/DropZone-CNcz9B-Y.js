import { b as QResizeObserver, g as getModifierDirections, s as shouldStart, T as TouchPan, a as QSlider } from "./QSlider-BQX_pJoC.js";
import { c as createComponent, g as getCurrentInstance, m as useTick, n as useTimeout, r as ref, b as computed, w as watch, t as onBeforeUnmount, aj as onDeactivated, ak as onActivated, h, i as hSlot, a7 as QIcon, an as provide, c0 as tabsKey, D as inject, E as emptyRenderFn, O as onMounted, V as withDirectives, a6 as Ripple, e as hMergeSlot, $ as isKeyCode, aO as shouldIgnoreKey, z as stopAndPrevent, aN as isDeepEqual, aF as uid, Z as createDirective, v as cleanEvt, as as client, by as preventDraggable, aJ as noop, x as addEvt, bt as position, bz as leftClick, T as Transition, c1 as getNormalizedVNodes, c2 as KeepAlive, u as useDarkProps, f as useDark, a5 as hDir, A as useFormProps, c3 as testPattern, c4 as throttle, C as useFormInject, ar as stop, ai as nextTick, az as injectProp, aR as QDialog, H as defineComponent, _ as _export_sfc, P as createElementBlock, L as openBlock, aV as renderSlot, c5 as useModel, K as createBlock, M as withCtx, R as createVNode, Q as QBtn, Y as withModifiers } from "./index-DwHwL6YO.js";
import { r as rtlHasScrollBug } from "./QSelect-uMA8_mPz.js";
import { e as clearSelection, j as useAnchorProps, c as useAnchor, Q as QMenu } from "./format-toIYKl50.js";
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "dragelement",
    draggable: "true",
    onDragstart: _cache[0] || (_cache[0] = ($event) => $setup.onDragStart($event))
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 32);
}
const DragElement = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-39a02e10"], ["__file", "DragElement.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
const ColorizeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "ColorizeIcon.vue"]]);
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
    "detachedmodel",
    "specificsynchronicmodel",
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
  ColorizeIcon as C,
  DropZone as D,
  QTab as Q,
  DragElement as a,
  useTabEmits as b,
  useTab as c,
  QTabs as d,
  QTabPanel as e,
  QTabPanels as f,
  useTabProps as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcFpvbmUtQ05jejlCLVkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFicy9RVGFicy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFicy91c2UtdGFiLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJzL1FUYWIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9kaXJlY3RpdmVzL3RvdWNoLXN3aXBlL1RvdWNoU3dpcGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy91c2UtcmVuZGVyLWNhY2hlL3VzZS1yZW5kZXItY2FjaGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1wYW5lbC91c2UtcGFuZWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYi1wYW5lbHMvUVRhYlBhbmVscy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFiLXBhbmVscy9RVGFiUGFuZWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9jb2xvcnMvY29sb3JzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9jb2xvci9RQ29sb3IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3BvcHVwLXByb3h5L1FQb3B1cFByb3h5LmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRHJhZ0VsZW1lbnQudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29sb3JpemVJY29uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Ryb3Bab25lLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBvbkFjdGl2YXRlZCwgb25EZWFjdGl2YXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlLCBwcm92aWRlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRUmVzaXplT2JzZXJ2ZXIgZnJvbSAnLi4vcmVzaXplLW9ic2VydmVyL1FSZXNpemVPYnNlcnZlci5qcydcblxuaW1wb3J0IHVzZVRpY2sgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLXRpY2svdXNlLXRpY2suanMnXG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtdGltZW91dC91c2UtdGltZW91dC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5pbXBvcnQgeyB0YWJzS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zeW1ib2xzL3N5bWJvbHMuanMnXG5pbXBvcnQgeyBydGxIYXNTY3JvbGxCdWcgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJ0bC9ydGwuanMnXG5cbmZ1bmN0aW9uIGdldEluZGljYXRvckNsYXNzIChjb2xvciwgdG9wLCB2ZXJ0aWNhbCkge1xuICBjb25zdCBwb3MgPSB2ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgID8gWyAnbGVmdCcsICdyaWdodCcgXVxuICAgIDogWyAndG9wJywgJ2JvdHRvbScgXVxuXG4gIHJldHVybiBgYWJzb2x1dGUtJHsgdG9wID09PSB0cnVlID8gcG9zWyAwIF0gOiBwb3NbIDEgXSB9JHsgY29sb3IgPyBgIHRleHQtJHsgY29sb3IgfWAgOiAnJyB9YFxufVxuXG5jb25zdCBhbGlnblZhbHVlcyA9IFsgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0JywgJ2p1c3RpZnknIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWJzJyxcblxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcblxuICAgIGFsaWduOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnY2VudGVyJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBhbGlnblZhbHVlcy5pbmNsdWRlcyh2KVxuICAgIH0sXG4gICAgYnJlYWtwb2ludDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogNjAwXG4gICAgfSxcblxuICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICAgIHNocmluazogQm9vbGVhbixcbiAgICBzdHJldGNoOiBCb29sZWFuLFxuXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBhY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgIGFjdGl2ZUJnQ29sb3I6IFN0cmluZyxcbiAgICBpbmRpY2F0b3JDb2xvcjogU3RyaW5nLFxuICAgIGxlZnRJY29uOiBTdHJpbmcsXG4gICAgcmlnaHRJY29uOiBTdHJpbmcsXG5cbiAgICBvdXRzaWRlQXJyb3dzOiBCb29sZWFuLFxuICAgIG1vYmlsZUFycm93czogQm9vbGVhbixcblxuICAgIHN3aXRjaEluZGljYXRvcjogQm9vbGVhbixcblxuICAgIG5hcnJvd0luZGljYXRvcjogQm9vbGVhbixcbiAgICBpbmxpbmVMYWJlbDogQm9vbGVhbixcbiAgICBub0NhcHM6IEJvb2xlYW4sXG5cbiAgICBkZW5zZTogQm9vbGVhbixcblxuICAgIGNvbnRlbnRDbGFzczogU3RyaW5nLFxuXG4gICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiBbIEZ1bmN0aW9uLCBBcnJheSBdXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCB7IHJlZ2lzdGVyVGljazogcmVnaXN0ZXJTY3JvbGxUaWNrIH0gPSB1c2VUaWNrKClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGljazogcmVnaXN0ZXJVcGRhdGVBcnJvd3NUaWNrIH0gPSB1c2VUaWNrKClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGljazogcmVnaXN0ZXJBbmltYXRlVGljayB9ID0gdXNlVGljaygpXG5cbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dDogcmVnaXN0ZXJGb2N1c1RpbWVvdXQsIHJlbW92ZVRpbWVvdXQ6IHJlbW92ZUZvY3VzVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG4gICAgY29uc3QgeyByZWdpc3RlclRpbWVvdXQ6IHJlZ2lzdGVyU2Nyb2xsVG9UYWJUaW1lb3V0LCByZW1vdmVUaW1lb3V0OiByZW1vdmVTY3JvbGxUb1RhYlRpbWVvdXQgfSA9IHVzZVRpbWVvdXQoKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGNvbnRlbnRSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGN1cnJlbnRNb2RlbCA9IHJlZihwcm9wcy5tb2RlbFZhbHVlKVxuICAgIGNvbnN0IHNjcm9sbGFibGUgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgbGVmdEFycm93ID0gcmVmKHRydWUpXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBqdXN0aWZ5ID0gcmVmKGZhbHNlKVxuXG4gICAgY29uc3QgdGFiRGF0YUxpc3QgPSBbXVxuICAgIGNvbnN0IHRhYkRhdGFMaXN0TGVuID0gcmVmKDApXG4gICAgY29uc3QgaGFzRm9jdXMgPSByZWYoZmFsc2UpXG5cbiAgICBsZXQgYW5pbWF0ZVRpbWVyID0gbnVsbCwgc2Nyb2xsVGltZXIgPSBudWxsLCB1bndhdGNoUm91dGVcblxuICAgIGNvbnN0IHRhYlByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIGFjdGl2ZUNsYXNzOiBwcm9wcy5hY3RpdmVDbGFzcyxcbiAgICAgIGFjdGl2ZUNvbG9yOiBwcm9wcy5hY3RpdmVDb2xvcixcbiAgICAgIGFjdGl2ZUJnQ29sb3I6IHByb3BzLmFjdGl2ZUJnQ29sb3IsXG4gICAgICBpbmRpY2F0b3JDbGFzczogZ2V0SW5kaWNhdG9yQ2xhc3MoXG4gICAgICAgIHByb3BzLmluZGljYXRvckNvbG9yLFxuICAgICAgICBwcm9wcy5zd2l0Y2hJbmRpY2F0b3IsXG4gICAgICAgIHByb3BzLnZlcnRpY2FsXG4gICAgICApLFxuICAgICAgbmFycm93SW5kaWNhdG9yOiBwcm9wcy5uYXJyb3dJbmRpY2F0b3IsXG4gICAgICBpbmxpbmVMYWJlbDogcHJvcHMuaW5saW5lTGFiZWwsXG4gICAgICBub0NhcHM6IHByb3BzLm5vQ2Fwc1xuICAgIH0pKVxuXG4gICAgY29uc3QgaGFzQWN0aXZlVGFiID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgbGVuID0gdGFiRGF0YUxpc3RMZW4udmFsdWVcbiAgICAgIGNvbnN0IHZhbCA9IGN1cnJlbnRNb2RlbC52YWx1ZVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmICh0YWJEYXRhTGlzdFsgaSBdLm5hbWUudmFsdWUgPT09IHZhbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGNvbnN0IGFsaWduQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhbGlnbiA9IHNjcm9sbGFibGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAnbGVmdCdcbiAgICAgICAgOiAoanVzdGlmeS52YWx1ZSA9PT0gdHJ1ZSA/ICdqdXN0aWZ5JyA6IHByb3BzLmFsaWduKVxuXG4gICAgICByZXR1cm4gYHEtdGFic19fY29udGVudC0tYWxpZ24tJHsgYWxpZ24gfWBcbiAgICB9KVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10YWJzIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlcidcbiAgICAgICsgYCBxLXRhYnMtLSR7IHNjcm9sbGFibGUudmFsdWUgPT09IHRydWUgPyAnJyA6ICdub3QtJyB9c2Nyb2xsYWJsZWBcbiAgICAgICsgYCBxLXRhYnMtLSR7IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyB9YFxuICAgICAgKyBgIHEtdGFic19fYXJyb3dzLS0keyBwcm9wcy5vdXRzaWRlQXJyb3dzID09PSB0cnVlID8gJ291dHNpZGUnIDogJ2luc2lkZScgfWBcbiAgICAgICsgYCBxLXRhYnMtLW1vYmlsZS13aXRoJHsgcHJvcHMubW9iaWxlQXJyb3dzID09PSB0cnVlID8gJycgOiAnb3V0JyB9LWFycm93c2BcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLXRhYnMtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuc2hyaW5rID09PSB0cnVlID8gJyBjb2wtc2hyaW5rJyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3RyZXRjaCA9PT0gdHJ1ZSA/ICcgc2VsZi1zdHJldGNoJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IGlubmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdGFic19fY29udGVudCBzY3JvbGwtLW1vYmlsZSByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXIgc2VsZi1zdHJldGNoIGhpZGUtc2Nyb2xsYmFyIHJlbGF0aXZlLXBvc2l0aW9uICdcbiAgICAgICsgYWxpZ25DbGFzcy52YWx1ZVxuICAgICAgKyAocHJvcHMuY29udGVudENsYXNzICE9PSB2b2lkIDAgPyBgICR7IHByb3BzLmNvbnRlbnRDbGFzcyB9YCA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IGRvbVByb3BzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgPyB7IGNvbnRhaW5lcjogJ2hlaWdodCcsIGNvbnRlbnQ6ICdvZmZzZXRIZWlnaHQnLCBzY3JvbGw6ICdzY3JvbGxIZWlnaHQnIH1cbiAgICAgICAgOiB7IGNvbnRhaW5lcjogJ3dpZHRoJywgY29udGVudDogJ29mZnNldFdpZHRoJywgc2Nyb2xsOiAnc2Nyb2xsV2lkdGgnIH1cbiAgICApKVxuXG4gICAgY29uc3QgaXNSVEwgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy52ZXJ0aWNhbCAhPT0gdHJ1ZSAmJiAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSlcbiAgICBjb25zdCBydGxQb3NDb3JyZWN0aW9uID0gY29tcHV0ZWQoKCkgPT4gcnRsSGFzU2Nyb2xsQnVnID09PSBmYWxzZSAmJiBpc1JUTC52YWx1ZSA9PT0gdHJ1ZSlcblxuICAgIHdhdGNoKGlzUlRMLCB1cGRhdGVBcnJvd3MpXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCBuYW1lID0+IHtcbiAgICAgIHVwZGF0ZU1vZGVsKHsgbmFtZSwgc2V0Q3VycmVudDogdHJ1ZSwgc2tpcEVtaXQ6IHRydWUgfSlcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMub3V0c2lkZUFycm93cywgcmVjYWxjdWxhdGVTY3JvbGwpXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVNb2RlbCAoeyBuYW1lLCBzZXRDdXJyZW50LCBza2lwRW1pdCB9KSB7XG4gICAgICBpZiAoY3VycmVudE1vZGVsLnZhbHVlID09PSBuYW1lKSByZXR1cm5cblxuICAgICAgaWYgKHNraXBFbWl0ICE9PSB0cnVlICYmIHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbmFtZSlcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBzZXRDdXJyZW50ID09PSB0cnVlXG4gICAgICAgIHx8IHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSA9PT0gdm9pZCAwXG4gICAgICApIHtcbiAgICAgICAgYW5pbWF0ZShjdXJyZW50TW9kZWwudmFsdWUsIG5hbWUpXG4gICAgICAgIGN1cnJlbnRNb2RlbC52YWx1ZSA9IG5hbWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNhbGN1bGF0ZVNjcm9sbCAoKSB7XG4gICAgICByZWdpc3RlclNjcm9sbFRpY2soKCkgPT4ge1xuICAgICAgICByb290UmVmLnZhbHVlICYmIHVwZGF0ZUNvbnRhaW5lcih7XG4gICAgICAgICAgd2lkdGg6IHJvb3RSZWYudmFsdWUub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiByb290UmVmLnZhbHVlLm9mZnNldEhlaWdodFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDb250YWluZXIgKGRvbVNpemUpIHtcbiAgICAgIC8vIGl0IGNhbiBiZSBjYWxsZWQgZmFzdGVyIHRoYW4gY29tcG9uZW50IGJlaW5nIGluaXRpYWxpemVkXG4gICAgICAvLyBzbyB3ZSBuZWVkIHRvIHByb3RlY3QgYWdhaW5zdCB0aGF0IGNhc2VcbiAgICAgIC8vIChvbmUgZXhhbXBsZSBvZiBzdWNoIGNhc2UgaXMgdGhlIGRvY3MgcmVsZWFzZSBub3RlcyBwYWdlKVxuICAgICAgaWYgKGRvbVByb3BzLnZhbHVlID09PSB2b2lkIDAgfHwgY29udGVudFJlZi52YWx1ZSA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHNpemUgPSBkb21TaXplWyBkb21Qcm9wcy52YWx1ZS5jb250YWluZXIgXSxcbiAgICAgICAgc2Nyb2xsU2l6ZSA9IE1hdGgubWluKFxuICAgICAgICAgIGNvbnRlbnRSZWYudmFsdWVbIGRvbVByb3BzLnZhbHVlLnNjcm9sbCBdLFxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UuY2FsbChcbiAgICAgICAgICAgIGNvbnRlbnRSZWYudmFsdWUuY2hpbGRyZW4sXG4gICAgICAgICAgICAoYWNjLCBlbCkgPT4gYWNjICsgKGVsWyBkb21Qcm9wcy52YWx1ZS5jb250ZW50IF0gfHwgMCksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBzY3JvbGwgPSBzaXplID4gMCAmJiBzY3JvbGxTaXplID4gc2l6ZSAvLyB3aGVuIHRoZXJlIGlzIG5vIHRhYiwgaW4gQ2hyb21lLCBzaXplID09PSAwIGFuZCBzY3JvbGxTaXplID09PSAxXG5cbiAgICAgIHNjcm9sbGFibGUudmFsdWUgPSBzY3JvbGxcblxuICAgICAgLy8gQXJyb3dzIG5lZWQgdG8gYmUgdXBkYXRlZCBldmVuIGlmIHRoZSBzY3JvbGwgc3RhdHVzIHdhcyBhbHJlYWR5IHRydWVcbiAgICAgIHNjcm9sbCA9PT0gdHJ1ZSAmJiByZWdpc3RlclVwZGF0ZUFycm93c1RpY2sodXBkYXRlQXJyb3dzKVxuXG4gICAgICBqdXN0aWZ5LnZhbHVlID0gc2l6ZSA8IHBhcnNlSW50KHByb3BzLmJyZWFrcG9pbnQsIDEwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGUgKG9sZE5hbWUsIG5ld05hbWUpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIG9sZFRhYiA9IG9sZE5hbWUgIT09IHZvaWQgMCAmJiBvbGROYW1lICE9PSBudWxsICYmIG9sZE5hbWUgIT09ICcnXG4gICAgICAgICAgPyB0YWJEYXRhTGlzdC5maW5kKHRhYiA9PiB0YWIubmFtZS52YWx1ZSA9PT0gb2xkTmFtZSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIG5ld1RhYiA9IG5ld05hbWUgIT09IHZvaWQgMCAmJiBuZXdOYW1lICE9PSBudWxsICYmIG5ld05hbWUgIT09ICcnXG4gICAgICAgICAgPyB0YWJEYXRhTGlzdC5maW5kKHRhYiA9PiB0YWIubmFtZS52YWx1ZSA9PT0gbmV3TmFtZSlcbiAgICAgICAgICA6IG51bGxcblxuICAgICAgaWYgKGhhZEFjdGl2YXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBBZnRlciB0aGUgY29tcG9uZW50IGhhcyBiZWVuIHJlLWFjdGl2YXRlZFxuICAgICAgICAvLyB3ZSBzaG91bGQgbm90IGFuaW1hdGUgdGhlIHRyYW5zaXRpb24uXG4gICAgICAgIC8vIENvbnNpZGVyIGl0IGFzIGlmIHRoZSBjb21wb25lbnQgaGFzIGp1c3QgYmVlbiBtb3VudGVkLlxuICAgICAgICBoYWRBY3RpdmF0ZWQgPSBmYWxzZVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAob2xkVGFiICYmIG5ld1RhYikge1xuICAgICAgICBjb25zdFxuICAgICAgICAgIG9sZEVsID0gb2xkVGFiLnRhYkluZGljYXRvclJlZi52YWx1ZSxcbiAgICAgICAgICBuZXdFbCA9IG5ld1RhYi50YWJJbmRpY2F0b3JSZWYudmFsdWVcblxuICAgICAgICBpZiAoYW5pbWF0ZVRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGFuaW1hdGVUaW1lcilcbiAgICAgICAgICBhbmltYXRlVGltZXIgPSBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBvbGRFbC5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gICAgICAgIG9sZEVsLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJ1xuICAgICAgICBuZXdFbC5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXG4gICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJ1xuXG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgb2xkUG9zID0gb2xkRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgbmV3UG9zID0gbmV3RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgICBuZXdFbC5zdHlsZS50cmFuc2Zvcm0gPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gYHRyYW5zbGF0ZTNkKDAsJHsgb2xkUG9zLnRvcCAtIG5ld1Bvcy50b3AgfXB4LDApIHNjYWxlM2QoMSwkeyBuZXdQb3MuaGVpZ2h0ID8gb2xkUG9zLmhlaWdodCAvIG5ld1Bvcy5oZWlnaHQgOiAxIH0sMSlgXG4gICAgICAgICAgOiBgdHJhbnNsYXRlM2QoJHsgb2xkUG9zLmxlZnQgLSBuZXdQb3MubGVmdCB9cHgsMCwwKSBzY2FsZTNkKCR7IG5ld1Bvcy53aWR0aCA/IG9sZFBvcy53aWR0aCAvIG5ld1Bvcy53aWR0aCA6IDEgfSwxLDEpYFxuXG4gICAgICAgIC8vIGFsbG93IHNjb3BlIHVwZGF0ZXMgdG8ga2ljayBpbiAoUVJvdXRlVGFiIG5lZWRzIG1vcmUgdGltZSlcbiAgICAgICAgcmVnaXN0ZXJBbmltYXRlVGljaygoKSA9PiB7XG4gICAgICAgICAgYW5pbWF0ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhbmltYXRlVGltZXIgPSBudWxsXG4gICAgICAgICAgICBuZXdFbC5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAuMjVzIGN1YmljLWJlemllciguNCwgMCwgLjIsIDEpJ1xuICAgICAgICAgICAgbmV3RWwuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnXG4gICAgICAgICAgfSwgNzApXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdUYWIgJiYgc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBzY3JvbGxUb1RhYkVsKG5ld1RhYi5yb290UmVmLnZhbHVlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvVGFiRWwgKGVsKSB7XG4gICAgICBjb25zdFxuICAgICAgICB7IGxlZnQsIHdpZHRoLCB0b3AsIGhlaWdodCB9ID0gY29udGVudFJlZi52YWx1ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgbmV3UG9zID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgbGV0IG9mZnNldCA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gbmV3UG9zLnRvcCAtIHRvcCA6IG5ld1Bvcy5sZWZ0IC0gbGVmdFxuXG4gICAgICBpZiAob2Zmc2V0IDwgMCkge1xuICAgICAgICBjb250ZW50UmVmLnZhbHVlWyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnIF0gKz0gTWF0aC5mbG9vcihvZmZzZXQpXG4gICAgICAgIHVwZGF0ZUFycm93cygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBvZmZzZXQgKz0gcHJvcHMudmVydGljYWwgPT09IHRydWUgPyBuZXdQb3MuaGVpZ2h0IC0gaGVpZ2h0IDogbmV3UG9zLndpZHRoIC0gd2lkdGhcbiAgICAgIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICAgIGNvbnRlbnRSZWYudmFsdWVbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCcgXSArPSBNYXRoLmNlaWwob2Zmc2V0KVxuICAgICAgICB1cGRhdGVBcnJvd3MoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUFycm93cyAoKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gY29udGVudFJlZi52YWx1ZVxuICAgICAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHJldHVyblxuXG4gICAgICBjb25zdFxuICAgICAgICByZWN0ID0gY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgcG9zID0gcHJvcHMudmVydGljYWwgPT09IHRydWUgPyBjb250ZW50LnNjcm9sbFRvcCA6IE1hdGguYWJzKGNvbnRlbnQuc2Nyb2xsTGVmdClcblxuICAgICAgaWYgKGlzUlRMLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGxlZnRBcnJvdy52YWx1ZSA9IE1hdGguY2VpbChwb3MgKyByZWN0LndpZHRoKSA8IGNvbnRlbnQuc2Nyb2xsV2lkdGggLSAxXG4gICAgICAgIHJpZ2h0QXJyb3cudmFsdWUgPSBwb3MgPiAwXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGVmdEFycm93LnZhbHVlID0gcG9zID4gMFxuICAgICAgICByaWdodEFycm93LnZhbHVlID0gcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgICA/IE1hdGguY2VpbChwb3MgKyByZWN0LmhlaWdodCkgPCBjb250ZW50LnNjcm9sbEhlaWdodFxuICAgICAgICAgIDogTWF0aC5jZWlsKHBvcyArIHJlY3Qud2lkdGgpIDwgY29udGVudC5zY3JvbGxXaWR0aFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1TY3JvbGxUbyAodmFsdWUpIHtcbiAgICAgIHNjcm9sbFRpbWVyICE9PSBudWxsICYmIGNsZWFySW50ZXJ2YWwoc2Nyb2xsVGltZXIpXG4gICAgICBzY3JvbGxUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKHNjcm9sbFRvd2FyZHModmFsdWUpID09PSB0cnVlKSB7XG4gICAgICAgICAgc3RvcEFuaW1TY3JvbGwoKVxuICAgICAgICB9XG4gICAgICB9LCA1KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvU3RhcnQgKCkge1xuICAgICAgYW5pbVNjcm9sbFRvKHJ0bFBvc0NvcnJlY3Rpb24udmFsdWUgPT09IHRydWUgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9FbmQgKCkge1xuICAgICAgYW5pbVNjcm9sbFRvKHJ0bFBvc0NvcnJlY3Rpb24udmFsdWUgPT09IHRydWUgPyAwIDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcEFuaW1TY3JvbGwgKCkge1xuICAgICAgaWYgKHNjcm9sbFRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc2Nyb2xsVGltZXIpXG4gICAgICAgIHNjcm9sbFRpbWVyID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2JkTmF2aWdhdGUgKGtleUNvZGUsIGZyb21FbCkge1xuICAgICAgY29uc3QgdGFicyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChcbiAgICAgICAgY29udGVudFJlZi52YWx1ZS5jaGlsZHJlbixcbiAgICAgICAgZWwgPT4gZWwgPT09IGZyb21FbCB8fCAoZWwubWF0Y2hlcyAmJiBlbC5tYXRjaGVzKCcucS10YWIucS1mb2N1c2FibGUnKSA9PT0gdHJ1ZSlcbiAgICAgIClcblxuICAgICAgY29uc3QgbGVuID0gdGFicy5sZW5ndGhcbiAgICAgIGlmIChsZW4gPT09IDApIHJldHVyblxuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gMzYpIHsgLy8gSG9tZVxuICAgICAgICBzY3JvbGxUb1RhYkVsKHRhYnNbIDAgXSlcbiAgICAgICAgdGFic1sgMCBdLmZvY3VzKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGlmIChrZXlDb2RlID09PSAzNSkgeyAvLyBFbmRcbiAgICAgICAgc2Nyb2xsVG9UYWJFbCh0YWJzWyBsZW4gLSAxIF0pXG4gICAgICAgIHRhYnNbIGxlbiAtIDEgXS5mb2N1cygpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpclByZXYgPSBrZXlDb2RlID09PSAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAzOCAvKiBBcnJvd1VwICovIDogMzcgLyogQXJyb3dMZWZ0ICovKVxuICAgICAgY29uc3QgZGlyTmV4dCA9IGtleUNvZGUgPT09IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IDQwIC8qIEFycm93RG93biAqLyA6IDM5IC8qIEFycm93UmlnaHQgKi8pXG5cbiAgICAgIGNvbnN0IGRpciA9IGRpclByZXYgPT09IHRydWUgPyAtMSA6IChkaXJOZXh0ID09PSB0cnVlID8gMSA6IHZvaWQgMClcblxuICAgICAgaWYgKGRpciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IHJ0bERpciA9IGlzUlRMLnZhbHVlID09PSB0cnVlID8gLTEgOiAxXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFicy5pbmRleE9mKGZyb21FbCkgKyBkaXIgKiBydGxEaXJcblxuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbikge1xuICAgICAgICAgIHNjcm9sbFRvVGFiRWwodGFic1sgaW5kZXggXSlcbiAgICAgICAgICB0YWJzWyBpbmRleCBdLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsZXQncyBzcGVlZCB1cCBleGVjdXRpb24gb2YgdGltZS1zZW5zaXRpdmUgc2Nyb2xsVG93YXJkcygpXG4gICAgLy8gd2l0aCBhIGNvbXB1dGVkIHZhcmlhYmxlIGJ5IGRpcmVjdGx5IGFwcGx5aW5nIHRoZSBtaW5pbWFsXG4gICAgLy8gbnVtYmVyIG9mIGluc3RydWN0aW9ucyBvbiBnZXQvc2V0IGZ1bmN0aW9uc1xuICAgIGNvbnN0IHBvc0ZuID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcnRsUG9zQ29ycmVjdGlvbi52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgZ2V0OiBjb250ZW50ID0+IE1hdGguYWJzKGNvbnRlbnQuc2Nyb2xsTGVmdCksIHNldDogKGNvbnRlbnQsIHBvcykgPT4geyBjb250ZW50LnNjcm9sbExlZnQgPSAtcG9zIH0gfVxuICAgICAgICA6IChcbiAgICAgICAgICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgICAgID8geyBnZXQ6IGNvbnRlbnQgPT4gY29udGVudC5zY3JvbGxUb3AsIHNldDogKGNvbnRlbnQsIHBvcykgPT4geyBjb250ZW50LnNjcm9sbFRvcCA9IHBvcyB9IH1cbiAgICAgICAgICAgICAgOiB7IGdldDogY29udGVudCA9PiBjb250ZW50LnNjcm9sbExlZnQsIHNldDogKGNvbnRlbnQsIHBvcykgPT4geyBjb250ZW50LnNjcm9sbExlZnQgPSBwb3MgfSB9XG4gICAgICAgICAgKVxuICAgICkpXG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb3dhcmRzICh2YWx1ZSkge1xuICAgICAgY29uc3RcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRSZWYudmFsdWUsXG4gICAgICAgIHsgZ2V0LCBzZXQgfSA9IHBvc0ZuLnZhbHVlXG5cbiAgICAgIGxldFxuICAgICAgICBkb25lID0gZmFsc2UsXG4gICAgICAgIHBvcyA9IGdldChjb250ZW50KVxuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB2YWx1ZSA8IHBvcyA/IC0xIDogMVxuXG4gICAgICBwb3MgKz0gZGlyZWN0aW9uICogNVxuXG4gICAgICBpZiAocG9zIDwgMCkge1xuICAgICAgICBkb25lID0gdHJ1ZVxuICAgICAgICBwb3MgPSAwXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChcbiAgICAgICAgKGRpcmVjdGlvbiA9PT0gLTEgJiYgcG9zIDw9IHZhbHVlKVxuICAgICAgICB8fCAoZGlyZWN0aW9uID09PSAxICYmIHBvcyA+PSB2YWx1ZSlcbiAgICAgICkge1xuICAgICAgICBkb25lID0gdHJ1ZVxuICAgICAgICBwb3MgPSB2YWx1ZVxuICAgICAgfVxuXG4gICAgICBzZXQoY29udGVudCwgcG9zKVxuICAgICAgdXBkYXRlQXJyb3dzKClcblxuICAgICAgcmV0dXJuIGRvbmVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNRdWVyeUluY2x1ZGVkICh0YXJnZXRRdWVyeSwgbWF0Y2hpbmdRdWVyeSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0UXVlcnkpIHtcbiAgICAgICAgaWYgKHRhcmdldFF1ZXJ5WyBrZXkgXSAhPT0gbWF0Y2hpbmdRdWVyeVsga2V5IF0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIDEuIERvIG5vdCB1c2UgZGlyZWN0bHk7IHVzZSB2ZXJpZnlSb3V0ZU1vZGVsKCkgaW5zdGVhZFxuICAgIC8vIDIuIFNob3VsZCBzZXQgaGFkQWN0aXZhdGVkIHRvIGZhbHNlIHVwb24gZXhpdFxuICAgIGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZVJvdXRlICgpIHtcbiAgICAgIGxldCBuYW1lID0gbnVsbCwgYmVzdFNjb3JlID0geyBtYXRjaGVkTGVuOiAwLCBxdWVyeURpZmY6IDk5OTksIGhyZWZMZW46IDAgfVxuXG4gICAgICBjb25zdCBsaXN0ID0gdGFiRGF0YUxpc3QuZmlsdGVyKHRhYiA9PiB0YWIucm91dGVEYXRhPy5oYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlKVxuICAgICAgY29uc3QgeyBoYXNoOiBjdXJyZW50SGFzaCwgcXVlcnk6IGN1cnJlbnRRdWVyeSB9ID0gcHJveHkuJHJvdXRlXG4gICAgICBjb25zdCBjdXJyZW50UXVlcnlMZW4gPSBPYmplY3Qua2V5cyhjdXJyZW50UXVlcnkpLmxlbmd0aFxuXG4gICAgICAvLyBWdWUgUm91dGVyIGRvZXMgbm90IGtlZXAgYWNjb3VudCBvZiBoYXNoICYgcXVlcnkgd2hlbiBtYXRjaGluZ1xuICAgICAgLy8gc28gd2UncmUgZG9pbmcgdGhpcyBhcyB3ZWxsXG5cbiAgICAgIGZvciAoY29uc3QgdGFiIG9mIGxpc3QpIHtcbiAgICAgICAgY29uc3QgZXhhY3QgPSB0YWIucm91dGVEYXRhLmV4YWN0LnZhbHVlID09PSB0cnVlXG5cbiAgICAgICAgaWYgKHRhYi5yb3V0ZURhdGFbIGV4YWN0ID09PSB0cnVlID8gJ2xpbmtJc0V4YWN0QWN0aXZlJyA6ICdsaW5rSXNBY3RpdmUnIF0udmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgICAvLyBpdCBjYW5ub3QgbWF0Y2ggYW55dGhpbmcgYXMgaXQncyBub3QgYWN0aXZlIG5vciBleGFjdC1hY3RpdmVcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBoYXNoLCBxdWVyeSwgbWF0Y2hlZCwgaHJlZiB9ID0gdGFiLnJvdXRlRGF0YS5yZXNvbHZlZExpbmsudmFsdWVcbiAgICAgICAgY29uc3QgcXVlcnlMZW4gPSBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoXG5cbiAgICAgICAgaWYgKGV4YWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKGhhc2ggIT09IGN1cnJlbnRIYXNoKSB7XG4gICAgICAgICAgICAvLyBpdCdzIHNldCB0byBleGFjdCBidXQgaXQgZG9lc24ndCBtYXRjaGVzIHRoZSBoYXNoXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHF1ZXJ5TGVuICE9PSBjdXJyZW50UXVlcnlMZW5cbiAgICAgICAgICAgIHx8IGhhc1F1ZXJ5SW5jbHVkZWQoY3VycmVudFF1ZXJ5LCBxdWVyeSkgPT09IGZhbHNlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBpdCdzIHNldCB0byBleGFjdCBidXQgaXQgZG9lc24ndCBtYXRjaGVzIHRoZSBxdWVyeVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB5ZXksIHdlIGZvdW5kIHRoZSBwZXJmZWN0IG1hdGNoIChyb3V0ZSArIGhhc2ggKyBxdWVyeSlcbiAgICAgICAgICBuYW1lID0gdGFiLm5hbWUudmFsdWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc2ggIT09ICcnICYmIGhhc2ggIT09IGN1cnJlbnRIYXNoKSB7XG4gICAgICAgICAgLy8gaXQgaGFzIGhhc2ggYW5kIGl0IGRvZXNuJ3QgbWF0Y2hlc1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgcXVlcnlMZW4gIT09IDBcbiAgICAgICAgICAmJiBoYXNRdWVyeUluY2x1ZGVkKHF1ZXJ5LCBjdXJyZW50UXVlcnkpID09PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBpdCBoYXMgcXVlcnkgYW5kIGl0IGRvZXNuJ3QgaW5jbHVkZXMgdGhlIGN1cnJlbnQgb25lXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Njb3JlID0ge1xuICAgICAgICAgIG1hdGNoZWRMZW46IG1hdGNoZWQubGVuZ3RoLFxuICAgICAgICAgIHF1ZXJ5RGlmZjogY3VycmVudFF1ZXJ5TGVuIC0gcXVlcnlMZW4sXG4gICAgICAgICAgaHJlZkxlbjogaHJlZi5sZW5ndGggLSBoYXNoLmxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1Njb3JlLm1hdGNoZWRMZW4gPiBiZXN0U2NvcmUubWF0Y2hlZExlbikge1xuICAgICAgICAgIC8vIGl0IG1hdGNoZXMgbW9yZSByb3V0ZXMgc28gaXQncyBtb3JlIHNwZWNpZmljIHNvIHdlIHNldCBpdCBhcyBjdXJyZW50IGNoYW1waW9uXG4gICAgICAgICAgbmFtZSA9IHRhYi5uYW1lLnZhbHVlXG4gICAgICAgICAgYmVzdFNjb3JlID0gbmV3U2NvcmVcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld1Njb3JlLm1hdGNoZWRMZW4gIT09IGJlc3RTY29yZS5tYXRjaGVkTGVuKSB7XG4gICAgICAgICAgLy8gaXQgbWF0Y2hlcyBsZXNzIHJvdXRlcyB0aGFuIHRoZSBjdXJyZW50IGNoYW1waW9uIHNvIHdlIGRpc2NhcmQgaXRcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1Njb3JlLnF1ZXJ5RGlmZiA8IGJlc3RTY29yZS5xdWVyeURpZmYpIHtcbiAgICAgICAgICAvLyBxdWVyeSBpcyBjbG9zZXIgdG8gdGhlIGN1cnJlbnQgb25lIHNvIHdlIHNldCBpdCBhcyBjdXJyZW50IGNoYW1waW9uXG4gICAgICAgICAgbmFtZSA9IHRhYi5uYW1lLnZhbHVlXG4gICAgICAgICAgYmVzdFNjb3JlID0gbmV3U2NvcmVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdTY29yZS5xdWVyeURpZmYgIT09IGJlc3RTY29yZS5xdWVyeURpZmYpIHtcbiAgICAgICAgICAvLyBpdCBtYXRjaGVzIGxlc3Mgcm91dGVzIHRoYW4gdGhlIGN1cnJlbnQgY2hhbXBpb24gc28gd2UgZGlzY2FyZCBpdFxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3U2NvcmUuaHJlZkxlbiA+IGJlc3RTY29yZS5ocmVmTGVuKSB7XG4gICAgICAgICAgLy8gaHJlZiBpcyBsZW5ndGhpZXIgc28gaXQncyBtb3JlIHNwZWNpZmljIHNvIHdlIHNldCBpdCBhcyBjdXJyZW50IGNoYW1waW9uXG4gICAgICAgICAgbmFtZSA9IHRhYi5uYW1lLnZhbHVlXG4gICAgICAgICAgYmVzdFNjb3JlID0gbmV3U2NvcmVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIG5hbWUgPT09IG51bGxcbiAgICAgICAgJiYgdGFiRGF0YUxpc3Quc29tZSh0YWIgPT4gdGFiLnJvdXRlRGF0YSA9PT0gdm9pZCAwICYmIHRhYi5uYW1lLnZhbHVlID09PSBjdXJyZW50TW9kZWwudmFsdWUpID09PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkbid0IGludGVyZmVyZSBpZiBub24tcm91dGUgdGFiIGlzIGFjdGl2ZVxuICAgICAgICBoYWRBY3RpdmF0ZWQgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdXBkYXRlTW9kZWwoeyBuYW1lLCBzZXRDdXJyZW50OiB0cnVlIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c2luIChlKSB7XG4gICAgICByZW1vdmVGb2N1c1RpbWVvdXQoKVxuXG4gICAgICBpZiAoXG4gICAgICAgIGhhc0ZvY3VzLnZhbHVlICE9PSB0cnVlXG4gICAgICAgICYmIHJvb3RSZWYudmFsdWUgIT09IG51bGxcbiAgICAgICAgJiYgZS50YXJnZXRcbiAgICAgICAgJiYgdHlwZW9mIGUudGFyZ2V0LmNsb3Nlc3QgPT09ICdmdW5jdGlvbidcbiAgICAgICkge1xuICAgICAgICBjb25zdCB0YWIgPSBlLnRhcmdldC5jbG9zZXN0KCcucS10YWInKVxuXG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgaXMgY29udGFpbmVkIGJ5IGEgUVRhYi9RUm91dGVUYWJcbiAgICAgICAgLy8gKGl0IG1pZ2h0IGJlIG90aGVyIGVsZW1lbnRzIGZvY3VzZWQsIGxpa2UgYWRkaXRpb25hbCBRQnRuKVxuICAgICAgICBpZiAodGFiICYmIHJvb3RSZWYudmFsdWUuY29udGFpbnModGFiKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGhhc0ZvY3VzLnZhbHVlID0gdHJ1ZVxuICAgICAgICAgIHNjcm9sbGFibGUudmFsdWUgPT09IHRydWUgJiYgc2Nyb2xsVG9UYWJFbCh0YWIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3Vzb3V0ICgpIHtcbiAgICAgIHJlZ2lzdGVyRm9jdXNUaW1lb3V0KCgpID0+IHsgaGFzRm9jdXMudmFsdWUgPSBmYWxzZSB9LCAzMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2ZXJpZnlSb3V0ZU1vZGVsICgpIHtcbiAgICAgIGlmICgkdGFicy5hdm9pZFJvdXRlV2F0Y2hlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVnaXN0ZXJTY3JvbGxUb1RhYlRpbWVvdXQodXBkYXRlQWN0aXZlUm91dGUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVtb3ZlU2Nyb2xsVG9UYWJUaW1lb3V0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YXRjaFJvdXRlICgpIHtcbiAgICAgIGlmICh1bndhdGNoUm91dGUgPT09IHZvaWQgMCkge1xuICAgICAgICBjb25zdCB1bndhdGNoID0gd2F0Y2goKCkgPT4gcHJveHkuJHJvdXRlLmZ1bGxQYXRoLCB2ZXJpZnlSb3V0ZU1vZGVsKVxuICAgICAgICB1bndhdGNoUm91dGUgPSAoKSA9PiB7XG4gICAgICAgICAgdW53YXRjaCgpXG4gICAgICAgICAgdW53YXRjaFJvdXRlID0gdm9pZCAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWdpc3RlclRhYiAodGFiRGF0YSkge1xuICAgICAgdGFiRGF0YUxpc3QucHVzaCh0YWJEYXRhKVxuICAgICAgdGFiRGF0YUxpc3RMZW4udmFsdWUrK1xuXG4gICAgICByZWNhbGN1bGF0ZVNjcm9sbCgpXG5cbiAgICAgIC8vIGlmIGl0J3MgYSBRVGFiIG9yIHdlIGRvbid0IGhhdmUgVnVlIFJvdXRlclxuICAgICAgaWYgKHRhYkRhdGEucm91dGVEYXRhID09PSB2b2lkIDAgfHwgcHJveHkuJHJvdXRlID09PSB2b2lkIDApIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIHBvc2l0aW9uIHRvIHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYiAoaWYgYW55KVxuICAgICAgICByZWdpc3RlclNjcm9sbFRvVGFiVGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHNjcm9sbGFibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY3VycmVudE1vZGVsLnZhbHVlXG4gICAgICAgICAgICBjb25zdCBuZXdUYWIgPSB2YWx1ZSAhPT0gdm9pZCAwICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSAnJ1xuICAgICAgICAgICAgICA/IHRhYkRhdGFMaXN0LmZpbmQodGFiID0+IHRhYi5uYW1lLnZhbHVlID09PSB2YWx1ZSlcbiAgICAgICAgICAgICAgOiBudWxsXG5cbiAgICAgICAgICAgIG5ld1RhYiAmJiBzY3JvbGxUb1RhYkVsKG5ld1RhYi5yb290UmVmLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vIGVsc2UgaWYgaXQncyBhIFFSb3V0ZVRhYiB3aXRoIGEgdmFsaWQgbGlua1xuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIHN0YXJ0IHdhdGNoaW5nIHJvdXRlXG4gICAgICAgIHdhdGNoUm91dGUoKVxuXG4gICAgICAgIGlmICh0YWJEYXRhLnJvdXRlRGF0YS5oYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgdmVyaWZ5Um91dGVNb2RlbCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnJlZ2lzdGVyVGFiICh0YWJEYXRhKSB7XG4gICAgICB0YWJEYXRhTGlzdC5zcGxpY2UodGFiRGF0YUxpc3QuaW5kZXhPZih0YWJEYXRhKSwgMSlcbiAgICAgIHRhYkRhdGFMaXN0TGVuLnZhbHVlLS1cblxuICAgICAgcmVjYWxjdWxhdGVTY3JvbGwoKVxuXG4gICAgICBpZiAodW53YXRjaFJvdXRlICE9PSB2b2lkIDAgJiYgdGFiRGF0YS5yb3V0ZURhdGEgIT09IHZvaWQgMCkge1xuICAgICAgICAvLyB1bndhdGNoIHJvdXRlIGlmIHdlIGRvbid0IGhhdmUgYW55IFFSb3V0ZVRhYnMgbGVmdFxuICAgICAgICBpZiAodGFiRGF0YUxpc3QuZXZlcnkodGFiID0+IHRhYi5yb3V0ZURhdGEgPT09IHZvaWQgMCkgPT09IHRydWUpIHtcbiAgICAgICAgICB1bndhdGNoUm91dGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhlbiB1cGRhdGUgbW9kZWxcbiAgICAgICAgdmVyaWZ5Um91dGVNb2RlbCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgJHRhYnMgPSB7XG4gICAgICBjdXJyZW50TW9kZWwsXG4gICAgICB0YWJQcm9wcyxcbiAgICAgIGhhc0ZvY3VzLFxuICAgICAgaGFzQWN0aXZlVGFiLFxuXG4gICAgICByZWdpc3RlclRhYixcbiAgICAgIHVucmVnaXN0ZXJUYWIsXG5cbiAgICAgIHZlcmlmeVJvdXRlTW9kZWwsXG4gICAgICB1cGRhdGVNb2RlbCxcbiAgICAgIG9uS2JkTmF2aWdhdGUsXG5cbiAgICAgIGF2b2lkUm91dGVXYXRjaGVyOiBmYWxzZSAvLyBmYWxzZSB8IHN0cmluZyAodWlkKVxuICAgIH1cblxuICAgIHByb3ZpZGUodGFic0tleSwgJHRhYnMpXG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICAgIGFuaW1hdGVUaW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQoYW5pbWF0ZVRpbWVyKVxuICAgICAgc3RvcEFuaW1TY3JvbGwoKVxuICAgICAgdW53YXRjaFJvdXRlPy4oKVxuICAgIH1cblxuICAgIGxldCBoYWRSb3V0ZVdhdGNoZXIsIGhhZEFjdGl2YXRlZFxuXG4gICAgb25CZWZvcmVVbm1vdW50KGNsZWFudXApXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIGhhZFJvdXRlV2F0Y2hlciA9IHVud2F0Y2hSb3V0ZSAhPT0gdm9pZCAwXG4gICAgICBjbGVhbnVwKClcbiAgICB9KVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgaWYgKGhhZFJvdXRlV2F0Y2hlciA9PT0gdHJ1ZSkge1xuICAgICAgICB3YXRjaFJvdXRlKClcbiAgICAgICAgaGFkQWN0aXZhdGVkID0gdHJ1ZVxuICAgICAgICB2ZXJpZnlSb3V0ZU1vZGVsKClcbiAgICAgIH1cblxuICAgICAgcmVjYWxjdWxhdGVTY3JvbGwoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiByb290UmVmLFxuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgcm9sZTogJ3RhYmxpc3QnLFxuICAgICAgICBvbkZvY3VzaW4sXG4gICAgICAgIG9uRm9jdXNvdXRcbiAgICAgIH0sIFtcbiAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHsgb25SZXNpemU6IHVwZGF0ZUNvbnRhaW5lciB9KSxcblxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgcmVmOiBjb250ZW50UmVmLFxuICAgICAgICAgIGNsYXNzOiBpbm5lckNsYXNzLnZhbHVlLFxuICAgICAgICAgIG9uU2Nyb2xsOiB1cGRhdGVBcnJvd3NcbiAgICAgICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpLFxuXG4gICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFic19fYXJyb3cgcS10YWJzX19hcnJvdy0tbGVmdCBhYnNvbHV0ZSBxLXRhYl9faWNvbidcbiAgICAgICAgICAgICsgKGxlZnRBcnJvdy52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyBxLXRhYnNfX2Fycm93LS1mYWRlZCcpLFxuICAgICAgICAgIG5hbWU6IHByb3BzLmxlZnRJY29uIHx8ICRxLmljb25TZXQudGFic1sgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndXAnIDogJ2xlZnQnIF0sXG4gICAgICAgICAgb25Nb3VzZWRvd25QYXNzaXZlOiBzY3JvbGxUb1N0YXJ0LFxuICAgICAgICAgIG9uVG91Y2hzdGFydFBhc3NpdmU6IHNjcm9sbFRvU3RhcnQsXG4gICAgICAgICAgb25Nb3VzZXVwUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGwsXG4gICAgICAgICAgb25Nb3VzZWxlYXZlUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGwsXG4gICAgICAgICAgb25Ub3VjaGVuZFBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFic19fYXJyb3cgcS10YWJzX19hcnJvdy0tcmlnaHQgYWJzb2x1dGUgcS10YWJfX2ljb24nXG4gICAgICAgICAgICArIChyaWdodEFycm93LnZhbHVlID09PSB0cnVlID8gJycgOiAnIHEtdGFic19fYXJyb3ctLWZhZGVkJyksXG4gICAgICAgICAgbmFtZTogcHJvcHMucmlnaHRJY29uIHx8ICRxLmljb25TZXQudGFic1sgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnZG93bicgOiAncmlnaHQnIF0sXG4gICAgICAgICAgb25Nb3VzZWRvd25QYXNzaXZlOiBzY3JvbGxUb0VuZCxcbiAgICAgICAgICBvblRvdWNoc3RhcnRQYXNzaXZlOiBzY3JvbGxUb0VuZCxcbiAgICAgICAgICBvbk1vdXNldXBQYXNzaXZlOiBzdG9wQW5pbVNjcm9sbCxcbiAgICAgICAgICBvbk1vdXNlbGVhdmVQYXNzaXZlOiBzdG9wQW5pbVNjcm9sbCxcbiAgICAgICAgICBvblRvdWNoZW5kUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGxcbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgaW5qZWN0LCBvbkJlZm9yZVVubW91bnQsIG9uTW91bnRlZCwgd2l0aERpcmVjdGl2ZXMsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5cbmltcG9ydCBSaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yaXBwbGUvUmlwcGxlLmpzJ1xuXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlLCBzaG91bGRJZ25vcmVLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmtleWJvYXJkL2tleS1jb21wb3NpdGlvbi5qcydcbmltcG9ydCB7IHRhYnNLZXksIGVtcHR5UmVuZGVyRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnN5bWJvbHMvc3ltYm9scy5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQvZXZlbnQuanMnXG5pbXBvcnQgdWlkIGZyb20gJy4uLy4uL3V0aWxzL3VpZC91aWQuanMnXG5pbXBvcnQgeyBpc0RlZXBFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzL2lzLmpzJ1xuXG5sZXQgaWQgPSAwXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJFbWl0cyA9IFsgJ2NsaWNrJywgJ2tleWRvd24nIF1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYlByb3BzID0ge1xuICBpY29uOiBTdHJpbmcsXG4gIGxhYmVsOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgYWxlcnQ6IFsgQm9vbGVhbiwgU3RyaW5nIF0sXG4gIGFsZXJ0SWNvbjogU3RyaW5nLFxuXG4gIG5hbWU6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogKCkgPT4gYHRfJHsgaWQrKyB9YFxuICB9LFxuXG4gIG5vQ2FwczogQm9vbGVhbixcblxuICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuICBkaXNhYmxlOiBCb29sZWFuLFxuXG4gIGNvbnRlbnRDbGFzczogU3RyaW5nLFxuXG4gIHJpcHBsZToge1xuICAgIHR5cGU6IFsgQm9vbGVhbiwgT2JqZWN0IF0sXG4gICAgZGVmYXVsdDogdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgc2xvdHMsIGVtaXQsIHJvdXRlRGF0YSkge1xuICBjb25zdCAkdGFicyA9IGluamVjdCh0YWJzS2V5LCBlbXB0eVJlbmRlckZuKVxuICBpZiAoJHRhYnMgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICBjb25zb2xlLmVycm9yKCdRVGFiL1FSb3V0ZVRhYiBjb21wb25lbnQgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUVRhYnMnKVxuICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gIH1cblxuICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gIGNvbnN0IGJsdXJUYXJnZXRSZWYgPSByZWYobnVsbClcbiAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICBjb25zdCB0YWJJbmRpY2F0b3JSZWYgPSByZWYobnVsbClcblxuICBjb25zdCByaXBwbGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5yaXBwbGUgPT09IGZhbHNlXG4gICAgICA/IGZhbHNlXG4gICAgICA6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHsga2V5Q29kZXM6IFsgMTMsIDMyIF0sIGVhcmx5OiB0cnVlIH0sXG4gICAgICAgIHByb3BzLnJpcHBsZSA9PT0gdHJ1ZSA/IHt9IDogcHJvcHMucmlwcGxlXG4gICAgICApXG4gICkpXG5cbiAgY29uc3QgaXNBY3RpdmUgPSBjb21wdXRlZCgoKSA9PiAkdGFicy5jdXJyZW50TW9kZWwudmFsdWUgPT09IHByb3BzLm5hbWUpXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3EtdGFiIHJlbGF0aXZlLXBvc2l0aW9uIHNlbGYtc3RyZXRjaCBmbGV4IGZsZXgtY2VudGVyIHRleHQtY2VudGVyJ1xuICAgICsgKFxuICAgICAgaXNBY3RpdmUudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAoXG4gICAgICAgICAgICAnIHEtdGFiLS1hY3RpdmUnXG4gICAgICAgICAgICArICgkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVDbGFzcyA/ICcgJyArICR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUNsYXNzIDogJycpXG4gICAgICAgICAgICArICgkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVDb2xvciA/IGAgdGV4dC0keyAkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVDb2xvciB9YCA6ICcnKVxuICAgICAgICAgICAgKyAoJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQmdDb2xvciA/IGAgYmctJHsgJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQmdDb2xvciB9YCA6ICcnKVxuICAgICAgICAgIClcbiAgICAgICAgOiAnIHEtdGFiLS1pbmFjdGl2ZSdcbiAgICApXG4gICAgKyAocHJvcHMuaWNvbiAmJiBwcm9wcy5sYWJlbCAmJiAkdGFicy50YWJQcm9wcy52YWx1ZS5pbmxpbmVMYWJlbCA9PT0gZmFsc2UgPyAnIHEtdGFiLS1mdWxsJyA6ICcnKVxuICAgICsgKHByb3BzLm5vQ2FwcyA9PT0gdHJ1ZSB8fCAkdGFicy50YWJQcm9wcy52YWx1ZS5ub0NhcHMgPT09IHRydWUgPyAnIHEtdGFiLS1uby1jYXBzJyA6ICcnKVxuICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcgcS1mb2N1c2FibGUgcS1ob3ZlcmFibGUgY3Vyc29yLXBvaW50ZXInKVxuICAgICsgKHJvdXRlRGF0YSAhPT0gdm9pZCAwID8gcm91dGVEYXRhLmxpbmtDbGFzcy52YWx1ZSA6ICcnKVxuICApXG5cbiAgY29uc3QgaW5uZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3EtdGFiX19jb250ZW50IHNlbGYtc3RyZXRjaCBmbGV4LWNlbnRlciByZWxhdGl2ZS1wb3NpdGlvbiBxLWFuY2hvci0tc2tpcCBub24tc2VsZWN0YWJsZSAnXG4gICAgKyAoJHRhYnMudGFiUHJvcHMudmFsdWUuaW5saW5lTGFiZWwgPT09IHRydWUgPyAncm93IG5vLXdyYXAgcS10YWJfX2NvbnRlbnQtLWlubGluZScgOiAnY29sdW1uJylcbiAgICArIChwcm9wcy5jb250ZW50Q2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMuY29udGVudENsYXNzIH1gIDogJycpXG4gIClcblxuICBjb25zdCB0YWJJbmRleCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAoXG4gICAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlXG4gICAgICB8fCAkdGFicy5oYXNGb2N1cy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgfHwgKGlzQWN0aXZlLnZhbHVlID09PSBmYWxzZSAmJiAkdGFicy5oYXNBY3RpdmVUYWIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuICAgICAgPyAtMVxuICAgICAgOiBwcm9wcy50YWJpbmRleCB8fCAwXG4gICkpXG5cbiAgZnVuY3Rpb24gb25DbGljayAoZSwga2V5Ym9hcmQpIHtcbiAgICBpZiAoa2V5Ym9hcmQgIT09IHRydWUgJiYgZT8ucUF2b2lkRm9jdXMgIT09IHRydWUpIHtcbiAgICAgIGJsdXJUYXJnZXRSZWYudmFsdWU/LmZvY3VzKClcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gd2Ugc2hvdWxkIGhpbmRlciBuYXRpdmUgbmF2aWdhdGlvbiB0aG91Z2hcbiAgICAgIGlmIChyb3V0ZURhdGE/Lmhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGRvIHdlIGhhdmUgYSBRVGFiP1xuICAgIGlmIChyb3V0ZURhdGEgPT09IHZvaWQgMCkge1xuICAgICAgJHRhYnMudXBkYXRlTW9kZWwoeyBuYW1lOiBwcm9wcy5uYW1lIH0pXG4gICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGVEYXRhLmhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGdvID0gKG9wdHMgPSB7fSkgPT4ge1xuICAgICAgICAvLyBpZiByZXF1aXJpbmcgdG8gZ28gdG8gYW5vdGhlciByb3V0ZSwgdGhlbiB3ZVxuICAgICAgICAvLyBsZXQgdGhlIFFUYWJzIHJvdXRlIHdhdGNoZXIgZG8gaXRzIGpvYixcbiAgICAgICAgLy8gb3RoZXJ3aXNlIGRpcmVjdGx5IHNlbGVjdCB0aGlzXG4gICAgICAgIGxldCBoYXJkRXJyb3JcbiAgICAgICAgY29uc3QgcmVxSWQgPSBvcHRzLnRvID09PSB2b2lkIDAgfHwgaXNEZWVwRXF1YWwob3B0cy50bywgcHJvcHMudG8pID09PSB0cnVlXG4gICAgICAgICAgPyAoJHRhYnMuYXZvaWRSb3V0ZVdhdGNoZXIgPSB1aWQoKSlcbiAgICAgICAgICA6IG51bGxcblxuICAgICAgICByZXR1cm4gcm91dGVEYXRhLm5hdmlnYXRlVG9Sb3V0ZXJMaW5rKGUsIHsgLi4ub3B0cywgcmV0dXJuUm91dGVyRXJyb3I6IHRydWUgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHsgaGFyZEVycm9yID0gZXJyIH0pXG4gICAgICAgICAgLnRoZW4oc29mdEVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChyZXFJZCA9PT0gJHRhYnMuYXZvaWRSb3V0ZVdhdGNoZXIpIHtcbiAgICAgICAgICAgICAgJHRhYnMuYXZvaWRSb3V0ZVdhdGNoZXIgPSBmYWxzZVxuXG4gICAgICAgICAgICAgIC8vIGlmIHdlIGRvbid0IGhhdmUgYW55IGhhcmQgZXJyb3JzIG9yIGFueSBzb2Z0IGVycm9ycywgZXhjZXB0IGZvclxuICAgICAgICAgICAgICAvLyB3aGVuIG5hdmlnYXRpbmcgdG8gdGhlIHNhbWUgcm91dGUgKG9uIGFsbCBvdGhlciBzb2Z0IGVycm9ycyxcbiAgICAgICAgICAgICAgLy8gbGlrZSB3aGVuIG5hdmlnYXRpb24gd2FzIGFib3J0ZWQgaW4gYSBuYXYgZ3VhcmQsIHdlIGRvbid0IGFjdGl2YXRlIHRoaXMgdGFiKVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaGFyZEVycm9yID09PSB2b2lkIDAgJiYgKFxuICAgICAgICAgICAgICAgICAgc29mdEVycm9yID09PSB2b2lkIDBcbiAgICAgICAgICAgICAgICAgIHx8IChzb2Z0RXJyb3IubWVzc2FnZT8uc3RhcnRzV2l0aCgnQXZvaWRlZCByZWR1bmRhbnQgbmF2aWdhdGlvbicpID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJHRhYnMudXBkYXRlTW9kZWwoeyBuYW1lOiBwcm9wcy5uYW1lIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wdHMucmV0dXJuUm91dGVyRXJyb3IgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhcmRFcnJvciAhPT0gdm9pZCAwID8gUHJvbWlzZS5yZWplY3QoaGFyZEVycm9yKSA6IHNvZnRFcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ2NsaWNrJywgZSwgZ28pXG4gICAgICBlLmRlZmF1bHRQcmV2ZW50ZWQgIT09IHRydWUgJiYgZ28oKVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbWl0KCdjbGljaycsIGUpXG4gIH1cblxuICBmdW5jdGlvbiBvbktleWRvd24gKGUpIHtcbiAgICBpZiAoaXNLZXlDb2RlKGUsIFsgMTMsIDMyIF0pKSB7XG4gICAgICBvbkNsaWNrKGUsIHRydWUpXG4gICAgfVxuICAgIGVsc2UgaWYgKFxuICAgICAgc2hvdWxkSWdub3JlS2V5KGUpICE9PSB0cnVlXG4gICAgICAmJiBlLmtleUNvZGUgPj0gMzVcbiAgICAgICYmIGUua2V5Q29kZSA8PSA0MFxuICAgICAgJiYgZS5hbHRLZXkgIT09IHRydWVcbiAgICAgICYmIGUubWV0YUtleSAhPT0gdHJ1ZVxuICAgICkge1xuICAgICAgJHRhYnMub25LYmROYXZpZ2F0ZShlLmtleUNvZGUsIHByb3h5LiRlbCkgPT09IHRydWUgJiYgc3RvcEFuZFByZXZlbnQoZSlcbiAgICB9XG5cbiAgICBlbWl0KCdrZXlkb3duJywgZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgIGNvbnN0XG4gICAgICBuYXJyb3cgPSAkdGFicy50YWJQcm9wcy52YWx1ZS5uYXJyb3dJbmRpY2F0b3IsXG4gICAgICBjb250ZW50ID0gW10sXG4gICAgICBpbmRpY2F0b3IgPSBoKCdkaXYnLCB7XG4gICAgICAgIHJlZjogdGFiSW5kaWNhdG9yUmVmLFxuICAgICAgICBjbGFzczogW1xuICAgICAgICAgICdxLXRhYl9faW5kaWNhdG9yJyxcbiAgICAgICAgICAkdGFicy50YWJQcm9wcy52YWx1ZS5pbmRpY2F0b3JDbGFzc1xuICAgICAgICBdXG4gICAgICB9KVxuXG4gICAgcHJvcHMuaWNvbiAhPT0gdm9pZCAwICYmIGNvbnRlbnQucHVzaChcbiAgICAgIGgoUUljb24sIHtcbiAgICAgICAgY2xhc3M6ICdxLXRhYl9faWNvbicsXG4gICAgICAgIG5hbWU6IHByb3BzLmljb25cbiAgICAgIH0pXG4gICAgKVxuXG4gICAgcHJvcHMubGFiZWwgIT09IHZvaWQgMCAmJiBjb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJfX2xhYmVsJyB9LCBwcm9wcy5sYWJlbClcbiAgICApXG5cbiAgICBwcm9wcy5hbGVydCAhPT0gZmFsc2UgJiYgY29udGVudC5wdXNoKFxuICAgICAgcHJvcHMuYWxlcnRJY29uICE9PSB2b2lkIDBcbiAgICAgICAgPyBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYl9fYWxlcnQtaWNvbicsXG4gICAgICAgICAgY29sb3I6IHByb3BzLmFsZXJ0ICE9PSB0cnVlXG4gICAgICAgICAgICA/IHByb3BzLmFsZXJ0XG4gICAgICAgICAgICA6IHZvaWQgMCxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5hbGVydEljb25cbiAgICAgICAgfSlcbiAgICAgICAgOiBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYl9fYWxlcnQnXG4gICAgICAgICAgICArIChwcm9wcy5hbGVydCAhPT0gdHJ1ZSA/IGAgdGV4dC0keyBwcm9wcy5hbGVydCB9YCA6ICcnKVxuICAgICAgICB9KVxuICAgIClcblxuICAgIG5hcnJvdyA9PT0gdHJ1ZSAmJiBjb250ZW50LnB1c2goaW5kaWNhdG9yKVxuXG4gICAgY29uc3Qgbm9kZSA9IFtcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWZvY3VzLWhlbHBlcicsIHRhYmluZGV4OiAtMSwgcmVmOiBibHVyVGFyZ2V0UmVmIH0pLFxuICAgICAgaCgnZGl2JywgeyBjbGFzczogaW5uZXJDbGFzcy52YWx1ZSB9LCBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIGNvbnRlbnQpKVxuICAgIF1cblxuICAgIG5hcnJvdyA9PT0gZmFsc2UgJiYgbm9kZS5wdXNoKGluZGljYXRvcilcblxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBjb25zdCB0YWJEYXRhID0ge1xuICAgIG5hbWU6IGNvbXB1dGVkKCgpID0+IHByb3BzLm5hbWUpLFxuICAgIHJvb3RSZWYsXG4gICAgdGFiSW5kaWNhdG9yUmVmLFxuICAgIHJvdXRlRGF0YVxuICB9XG5cbiAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAkdGFicy51bnJlZ2lzdGVyVGFiKHRhYkRhdGEpXG4gIH0pXG5cbiAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAkdGFicy5yZWdpc3RlclRhYih0YWJEYXRhKVxuICB9KVxuXG4gIGZ1bmN0aW9uIHJlbmRlclRhYiAodGFnLCBjdXN0b21EYXRhKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgdGFiaW5kZXg6IHRhYkluZGV4LnZhbHVlLFxuICAgICAgcm9sZTogJ3RhYicsXG4gICAgICAnYXJpYS1zZWxlY3RlZCc6IGlzQWN0aXZlLnZhbHVlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICdhcmlhLWRpc2FibGVkJzogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICd0cnVlJyA6IHZvaWQgMCxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBvbktleWRvd24sXG4gICAgICAuLi5jdXN0b21EYXRhXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgaCh0YWcsIGRhdGEsIGdldENvbnRlbnQoKSksXG4gICAgICBbIFsgUmlwcGxlLCByaXBwbGUudmFsdWUgXSBdXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHsgcmVuZGVyVGFiLCAkdGFicyB9XG59XG4iLCJpbXBvcnQgdXNlVGFiLCB7IHVzZVRhYlByb3BzLCB1c2VUYWJFbWl0cyB9IGZyb20gJy4vdXNlLXRhYi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYicsXG5cbiAgcHJvcHM6IHVzZVRhYlByb3BzLFxuXG4gIGVtaXRzOiB1c2VUYWJFbWl0cyxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcmVuZGVyVGFiIH0gPSB1c2VUYWIocHJvcHMsIHNsb3RzLCBlbWl0KVxuICAgIHJldHVybiAoKSA9PiByZW5kZXJUYWIoJ2RpdicpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi9wbHVnaW5zL3BsYXRmb3JtL1BsYXRmb3JtLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRNb2RpZmllckRpcmVjdGlvbnMsIHNob3VsZFN0YXJ0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS50b3VjaC90b3VjaC5qcydcbmltcG9ydCB7IGFkZEV2dCwgY2xlYW5FdnQsIHBvc2l0aW9uLCBsZWZ0Q2xpY2ssIHN0b3BBbmRQcmV2ZW50LCBwcmV2ZW50RHJhZ2dhYmxlLCBub29wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQvZXZlbnQuanMnXG5pbXBvcnQgeyBjbGVhclNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuc2VsZWN0aW9uL3NlbGVjdGlvbi5qcydcbmltcG9ydCBnZXRTU1JQcm9wcyBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLm5vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0vbm9vcC1zc3ItZGlyZWN0aXZlLXRyYW5zZm9ybS5qcydcblxuZnVuY3Rpb24gcGFyc2VBcmcgKGFyZykge1xuICAvLyBkZWx0YSAobWluIHZlbG9jaXR5IC0tIGRpc3QgLyB0aW1lKVxuICAvLyBtb2JpbGUgbWluIGRpc3RhbmNlIG9uIGZpcnN0IG1vdmVcbiAgLy8gZGVza3RvcCBtaW4gZGlzdGFuY2UgdW50aWwgZGVjaWRpbmcgaWYgaXQncyBhIHN3aXBlIG9yIG5vdFxuICBjb25zdCBkYXRhID0gWyAwLjA2LCA2LCA1MCBdXG5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIGFyZy5sZW5ndGgpIHtcbiAgICBhcmcuc3BsaXQoJzonKS5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB2ID0gcGFyc2VGbG9hdCh2YWwpXG4gICAgICB2ICYmIChkYXRhWyBpbmRleCBdID0gdilcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlyZWN0aXZlKF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICA/IHsgbmFtZTogJ3RvdWNoLXN3aXBlJywgZ2V0U1NSUHJvcHMgfVxuICA6IHtcbiAgICAgIG5hbWU6ICd0b3VjaC1zd2lwZScsXG5cbiAgICAgIGJlZm9yZU1vdW50IChlbCwgeyB2YWx1ZSwgYXJnLCBtb2RpZmllcnMgfSkge1xuICAgICAgICAvLyBlYXJseSByZXR1cm4sIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmdcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZGlmaWVycy5tb3VzZSAhPT0gdHJ1ZVxuICAgICAgICAgICYmIGNsaWVudC5oYXMudG91Y2ggIT09IHRydWVcbiAgICAgICAgKSByZXR1cm5cblxuICAgICAgICBjb25zdCBtb3VzZUNhcHR1cmUgPSBtb2RpZmllcnMubW91c2VDYXB0dXJlID09PSB0cnVlID8gJ0NhcHR1cmUnIDogJydcblxuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgaGFuZGxlcjogdmFsdWUsXG4gICAgICAgICAgc2Vuc2l0aXZpdHk6IHBhcnNlQXJnKGFyZyksXG4gICAgICAgICAgZGlyZWN0aW9uOiBnZXRNb2RpZmllckRpcmVjdGlvbnMobW9kaWZpZXJzKSxcblxuICAgICAgICAgIG5vb3AsXG5cbiAgICAgICAgICBtb3VzZVN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRTdGFydChldnQsIGN0eCkgJiYgbGVmdENsaWNrKGV2dCkpIHtcbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNlbW92ZScsICdtb3ZlJywgYG5vdFBhc3NpdmUkeyBtb3VzZUNhcHR1cmUgfWAgXSxcbiAgICAgICAgICAgICAgICBbIGRvY3VtZW50LCAnbW91c2V1cCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgdG91Y2hTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnQoZXZ0LCBjdHgpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXRcbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaG1vdmUnLCAnbW92ZScsICdub3RQYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNoY2FuY2VsJywgJ2VuZCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNoZW5kJywgJ2VuZCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBjdHguc3RhcnQoZXZ0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzdGFydCAoZXZ0LCBtb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCB0cnVlKVxuXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbihldnQpXG5cbiAgICAgICAgICAgIGN0eC5ldmVudCA9IHtcbiAgICAgICAgICAgICAgeDogcG9zLmxlZnQsXG4gICAgICAgICAgICAgIHk6IHBvcy50b3AsXG4gICAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICAgIG1vdXNlOiBtb3VzZUV2ZW50ID09PSB0cnVlLFxuICAgICAgICAgICAgICBkaXI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIG1vdmUgKGV2dCkge1xuICAgICAgICAgICAgaWYgKGN0eC5ldmVudCA9PT0gdm9pZCAwKSByZXR1cm5cblxuICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5kaXIgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHN0b3BBbmRQcmV2ZW50KGV2dClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpIC0gY3R4LmV2ZW50LnRpbWVcblxuICAgICAgICAgICAgaWYgKHRpbWUgPT09IDApIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICBwb3MgPSBwb3NpdGlvbihldnQpLFxuICAgICAgICAgICAgICBkaXN0WCA9IHBvcy5sZWZ0IC0gY3R4LmV2ZW50LngsXG4gICAgICAgICAgICAgIGFic1ggPSBNYXRoLmFicyhkaXN0WCksXG4gICAgICAgICAgICAgIGRpc3RZID0gcG9zLnRvcCAtIGN0eC5ldmVudC55LFxuICAgICAgICAgICAgICBhYnNZID0gTWF0aC5hYnMoZGlzdFkpXG5cbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQubW91c2UgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgaWYgKGFic1ggPCBjdHguc2Vuc2l0aXZpdHlbIDEgXSAmJiBhYnNZIDwgY3R4LnNlbnNpdGl2aXR5WyAxIF0pIHtcbiAgICAgICAgICAgICAgICBjdHguZW5kKGV2dClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaXMgdXNlciB0cnlpbmcgdG8gc2VsZWN0IHRleHQ/XG4gICAgICAgICAgICAvLyBpZiBzbywgdGhlbiBzb21ldGhpbmcgc2hvdWxkIGJlIHJlcG9ydGVkIGhlcmVcbiAgICAgICAgICAgIC8vIChwcmV2aW91cyBzZWxlY3Rpb24sIGlmIGFueSwgd2FzIGRpc2NhcmRlZCB3aGVuIHN3aXBlIHN0YXJ0ZWQpXG4gICAgICAgICAgICBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgY3R4LmVuZChldnQpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYWJzWCA8IGN0eC5zZW5zaXRpdml0eVsgMiBdICYmIGFic1kgPCBjdHguc2Vuc2l0aXZpdHlbIDIgXSkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgdmVsWCA9IGFic1ggLyB0aW1lLFxuICAgICAgICAgICAgICB2ZWxZID0gYWJzWSAvIHRpbWVcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGFic1ggPCBhYnNZXG4gICAgICAgICAgICAgICYmIGFic1ggPCAxMDBcbiAgICAgICAgICAgICAgJiYgdmVsWSA+IGN0eC5zZW5zaXRpdml0eVsgMCBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRpciA9IGRpc3RZIDwgMCA/ICd1cCcgOiAnZG93bidcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLmhvcml6b250YWwgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgYWJzWCA+IGFic1lcbiAgICAgICAgICAgICAgJiYgYWJzWSA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxYID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gZGlzdFggPCAwID8gJ2xlZnQnIDogJ3JpZ2h0J1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24udXAgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IGFic1lcbiAgICAgICAgICAgICAgJiYgZGlzdFkgPCAwXG4gICAgICAgICAgICAgICYmIGFic1ggPCAxMDBcbiAgICAgICAgICAgICAgJiYgdmVsWSA+IGN0eC5zZW5zaXRpdml0eVsgMCBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRpciA9ICd1cCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLmRvd24gPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IGFic1lcbiAgICAgICAgICAgICAgJiYgZGlzdFkgPiAwXG4gICAgICAgICAgICAgICYmIGFic1ggPCAxMDBcbiAgICAgICAgICAgICAgJiYgdmVsWSA+IGN0eC5zZW5zaXRpdml0eVsgMCBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRpciA9ICdkb3duJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24ubGVmdCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYID4gYWJzWVxuICAgICAgICAgICAgICAmJiBkaXN0WCA8IDBcbiAgICAgICAgICAgICAgJiYgYWJzWSA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxYID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gJ2xlZnQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5yaWdodCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYID4gYWJzWVxuICAgICAgICAgICAgICAmJiBkaXN0WCA+IDBcbiAgICAgICAgICAgICAgJiYgYWJzWSA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxYID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gJ3JpZ2h0J1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50LmRpciAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICAgICAgICAgIGlmIChjdHguZXZlbnQubW91c2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXBvaW50ZXItZXZlbnRzLS1jaGlsZHJlbicpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdub24tc2VsZWN0YWJsZScpXG4gICAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuXG4gICAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCA9IHdpdGhEZWxheSA9PiB7XG4gICAgICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwID0gdm9pZCAwXG5cbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9uLXNlbGVjdGFibGUnKVxuXG4gICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tcG9pbnRlci1ldmVudHMtLWNoaWxkcmVuJylcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHdpdGhEZWxheSA9PT0gdHJ1ZSkgeyBzZXRUaW1lb3V0KHJlbW92ZSwgNTApIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgeyByZW1vdmUoKSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY3R4LmhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIGV2dCxcbiAgICAgICAgICAgICAgICB0b3VjaDogY3R4LmV2ZW50Lm1vdXNlICE9PSB0cnVlLFxuICAgICAgICAgICAgICAgIG1vdXNlOiBjdHguZXZlbnQubW91c2UsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBjdHguZXZlbnQuZGlyLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aW1lLFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlOiB7XG4gICAgICAgICAgICAgICAgICB4OiBhYnNYLFxuICAgICAgICAgICAgICAgICAgeTogYWJzWVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjdHguZW5kKGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZW5kIChldnQpIHtcbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQgPT09IHZvaWQgMCkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuICAgICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgZmFsc2UpXG4gICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwPy4odHJ1ZSlcbiAgICAgICAgICAgIGlmICgoZXZ0ICE9PSB2b2lkIDApICYmIChjdHguZXZlbnQuZGlyICE9PSBmYWxzZSkpIHN0b3BBbmRQcmV2ZW50KGV2dClcblxuICAgICAgICAgICAgY3R4LmV2ZW50ID0gdm9pZCAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWwuX19xdG91Y2hzd2lwZSA9IGN0eFxuXG4gICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBhY2NvdW50IGZvciBVTUQgdG9vIHdoZXJlIG1vZGlmaWVycyB3aWxsIGJlIGxvd2VyY2FzZWQgdG8gd29ya1xuICAgICAgICAgIGNvbnN0IGNhcHR1cmUgPSBtb2RpZmllcnMubW91c2VDYXB0dXJlID09PSB0cnVlIHx8IG1vZGlmaWVycy5tb3VzZWNhcHR1cmUgPT09IHRydWVcbiAgICAgICAgICAgID8gJ0NhcHR1cmUnXG4gICAgICAgICAgICA6ICcnXG5cbiAgICAgICAgICBhZGRFdnQoY3R4LCAnbWFpbicsIFtcbiAgICAgICAgICAgIFsgZWwsICdtb3VzZWRvd24nLCAnbW91c2VTdGFydCcsIGBwYXNzaXZlJHsgY2FwdHVyZSB9YCBdXG4gICAgICAgICAgXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWVudC5oYXMudG91Y2ggPT09IHRydWUgJiYgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgWyBlbCwgJ3RvdWNoc3RhcnQnLCAndG91Y2hTdGFydCcsIGBwYXNzaXZlJHsgbW9kaWZpZXJzLmNhcHR1cmUgPT09IHRydWUgPyAnQ2FwdHVyZScgOiAnJyB9YCBdLFxuICAgICAgICAgIFsgZWwsICd0b3VjaG1vdmUnLCAnbm9vcCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXSAvLyBjYW5ub3QgYmUgcGFzc2l2ZSAoZXg6IGlPUyBzY3JvbGwpXG4gICAgICAgIF0pXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVkIChlbCwgYmluZGluZ3MpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hzd2lwZVxuXG4gICAgICAgIGlmIChjdHggIT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmIChiaW5kaW5ncy5vbGRWYWx1ZSAhPT0gYmluZGluZ3MudmFsdWUpIHtcbiAgICAgICAgICAgIHR5cGVvZiBiaW5kaW5ncy52YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBjdHguZW5kKClcbiAgICAgICAgICAgIGN0eC5oYW5kbGVyID0gYmluZGluZ3MudmFsdWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdHguZGlyZWN0aW9uID0gZ2V0TW9kaWZpZXJEaXJlY3Rpb25zKGJpbmRpbmdzLm1vZGlmaWVycylcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudCAoZWwpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hzd2lwZVxuXG4gICAgICAgIGlmIChjdHggIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ21haW4nKVxuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuXG4gICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgZmFsc2UpXG4gICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cD8uKClcblxuICAgICAgICAgIGRlbGV0ZSBlbC5fX3F0b3VjaHN3aXBlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4pXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIGdldENhY2hlOiBfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgICAgID8gKF8sIGRlZmF1bHRWYWx1ZSkgPT4gKFxuICAgICAgICAgIHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlKClcbiAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlXG4gICAgICAgIClcbiAgICAgIDogKGtleSwgZGVmYXVsdFZhbHVlKSA9PiAoXG4gICAgICAgICAgY2FjaGVbIGtleSBdID09PSB2b2lkIDBcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIGNhY2hlWyBrZXkgXSA9IChcbiAgICAgICAgICAgICAgICAgIHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBkZWZhdWx0VmFsdWUoKVxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBjYWNoZVsga2V5IF1cbiAgICAgICAgKSxcblxuICAgIHNldENhY2hlIChrZXksIG9iaikge1xuICAgICAgY2FjaGVbIGtleSBdID0gb2JqXG4gICAgfSxcblxuICAgIGhhc0NhY2hlIChrZXkpIHtcbiAgICAgIHJldHVybiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChjYWNoZSwga2V5KVxuICAgIH0sXG5cbiAgICBjbGVhckNhY2hlIChrZXkpIHtcbiAgICAgIGlmIChrZXkgIT09IHZvaWQgMCkge1xuICAgICAgICBkZWxldGUgY2FjaGVbIGtleSBdXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgZ2V0Q3VycmVudEluc3RhbmNlLCBUcmFuc2l0aW9uLCBLZWVwQWxpdmUgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBUb3VjaFN3aXBlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG91Y2gtc3dpcGUvVG91Y2hTd2lwZS5qcydcblxuaW1wb3J0IHVzZVJlbmRlckNhY2hlIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS1yZW5kZXItY2FjaGUvdXNlLXJlbmRlci1jYWNoZS5qcydcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS10aW1lb3V0L3VzZS10aW1lb3V0LmpzJ1xuXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCB7IGdldE5vcm1hbGl6ZWRWTm9kZXMgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnZtL3ZtLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlUGFuZWxDaGlsZFByb3BzID0ge1xuICBuYW1lOiB7IHJlcXVpcmVkOiB0cnVlIH0sXG4gIGRpc2FibGU6IEJvb2xlYW5cbn1cblxuY29uc3QgUGFuZWxXcmFwcGVyID0ge1xuICBzZXR1cCAoXywgeyBzbG90cyB9KSB7XG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiAncS1wYW5lbCBzY3JvbGwnLFxuICAgICAgcm9sZTogJ3RhYnBhbmVsJ1xuICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VQYW5lbFByb3BzID0ge1xuICBtb2RlbFZhbHVlOiB7XG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcblxuICBhbmltYXRlZDogQm9vbGVhbixcbiAgaW5maW5pdGU6IEJvb2xlYW4sXG4gIHN3aXBlYWJsZTogQm9vbGVhbixcbiAgdmVydGljYWw6IEJvb2xlYW4sXG5cbiAgdHJhbnNpdGlvblByZXY6IFN0cmluZyxcbiAgdHJhbnNpdGlvbk5leHQ6IFN0cmluZyxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiB7XG4gICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgIGRlZmF1bHQ6IDMwMFxuICB9LFxuXG4gIGtlZXBBbGl2ZTogQm9vbGVhbixcbiAga2VlcEFsaXZlSW5jbHVkZTogWyBTdHJpbmcsIEFycmF5LCBSZWdFeHAgXSxcbiAga2VlcEFsaXZlRXhjbHVkZTogWyBTdHJpbmcsIEFycmF5LCBSZWdFeHAgXSxcbiAga2VlcEFsaXZlTWF4OiBOdW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVBhbmVsRW1pdHMgPSBbICd1cGRhdGU6bW9kZWxWYWx1ZScsICdiZWZvcmVUcmFuc2l0aW9uJywgJ3RyYW5zaXRpb24nIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgeyBnZXRDYWNoZSB9ID0gdXNlUmVuZGVyQ2FjaGUoKVxuICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG5cbiAgbGV0IHBhbmVscywgZm9yY2VkUGFuZWxUcmFuc2l0aW9uXG5cbiAgY29uc3QgcGFuZWxUcmFuc2l0aW9uID0gcmVmKG51bGwpXG5cbiAgLypcbiAgICogU2hvdWxkIG5vdCBiZSByZWFjdGl2ZSBiZWNhdXNlIGl0J3MgYXNzaWduZWQgb24gcmVuZGVyXG4gICAqIGFuZCBpdCB3aWxsIHRyaWdnZXIgYSBzdWJzZXF1ZW50IHVzZWxlc3MgcmVuZGVyLlxuICAgKlxuICAgKiBTaG91bGQgYmUgYW4gb2JqZWN0IHRob3VnaCwgYmVjYXVzZSBpdCBpcyBiZWluZyBleHBvcnRlZC5cbiAgICogT3RoZXJ3aXNlLCB0aGUgY3VycmVudCB2YWx1ZSB3b3VsZCBiZSBleHBvcnRlZCBhbmQgbm8gc3Vic2VxdWVudFxuICAgKiB1cGRhdGVzIHdpbGwgYmUgcmVmbGVjdGVkIGluIHRoZSBleHBvcnRlZCB2YWx1ZS5cbiAgICovXG4gIGNvbnN0IHBhbmVsSW5kZXggPSB7IHZhbHVlOiBudWxsIH1cblxuICBmdW5jdGlvbiBvblN3aXBlIChldnQpIHtcbiAgICBjb25zdCBkaXIgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd1cCcgOiAnbGVmdCdcbiAgICBnb1RvUGFuZWxCeU9mZnNldCgocHJveHkuJHEubGFuZy5ydGwgPT09IHRydWUgPyAtMSA6IDEpICogKGV2dC5kaXJlY3Rpb24gPT09IGRpciA/IDEgOiAtMSkpXG4gIH1cblxuICBjb25zdCBwYW5lbERpcmVjdGl2ZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgLy8gaWYgcHJvcHMuc3dpcGVhYmxlXG4gICAgcmV0dXJuIFsgW1xuICAgICAgVG91Y2hTd2lwZSxcbiAgICAgIG9uU3dpcGUsXG4gICAgICB2b2lkIDAsXG4gICAgICB7XG4gICAgICAgIGhvcml6b250YWw6IHByb3BzLnZlcnRpY2FsICE9PSB0cnVlLFxuICAgICAgICB2ZXJ0aWNhbDogcHJvcHMudmVydGljYWwsXG4gICAgICAgIG1vdXNlOiB0cnVlXG4gICAgICB9XG4gICAgXSBdXG4gIH0pXG5cbiAgY29uc3QgdHJhbnNpdGlvblByZXYgPSBjb21wdXRlZCgoKSA9PlxuICAgIHByb3BzLnRyYW5zaXRpb25QcmV2IHx8IGBzbGlkZS0keyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdkb3duJyA6ICdyaWdodCcgfWBcbiAgKVxuXG4gIGNvbnN0IHRyYW5zaXRpb25OZXh0ID0gY29tcHV0ZWQoKCkgPT5cbiAgICBwcm9wcy50cmFuc2l0aW9uTmV4dCB8fCBgc2xpZGUtJHsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndXAnIDogJ2xlZnQnIH1gXG4gIClcblxuICBjb25zdCB0cmFuc2l0aW9uU3R5bGUgPSBjb21wdXRlZChcbiAgICAoKSA9PiBgLS1xLXRyYW5zaXRpb24tZHVyYXRpb246ICR7IHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbiB9bXNgXG4gIClcblxuICBjb25zdCBjb250ZW50S2V5ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHR5cGVvZiBwcm9wcy5tb2RlbFZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgcHJvcHMubW9kZWxWYWx1ZSA9PT0gJ251bWJlcidcbiAgICAgID8gcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgOiBTdHJpbmcocHJvcHMubW9kZWxWYWx1ZSlcbiAgKSlcblxuICBjb25zdCBrZWVwQWxpdmVQcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgaW5jbHVkZTogcHJvcHMua2VlcEFsaXZlSW5jbHVkZSxcbiAgICBleGNsdWRlOiBwcm9wcy5rZWVwQWxpdmVFeGNsdWRlLFxuICAgIG1heDogcHJvcHMua2VlcEFsaXZlTWF4XG4gIH0pKVxuXG4gIGNvbnN0IG5lZWRzVW5pcXVlS2VlcEFsaXZlV3JhcHBlciA9IGNvbXB1dGVkKCgpID0+XG4gICAgcHJvcHMua2VlcEFsaXZlSW5jbHVkZSAhPT0gdm9pZCAwXG4gICAgfHwgcHJvcHMua2VlcEFsaXZlRXhjbHVkZSAhPT0gdm9pZCAwXG4gIClcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCAobmV3VmFsLCBvbGRWYWwpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGlzVmFsaWRQYW5lbE5hbWUobmV3VmFsKSA9PT0gdHJ1ZVxuICAgICAgPyBnZXRQYW5lbEluZGV4KG5ld1ZhbClcbiAgICAgIDogLTFcblxuICAgIGlmIChmb3JjZWRQYW5lbFRyYW5zaXRpb24gIT09IHRydWUpIHtcbiAgICAgIHVwZGF0ZVBhbmVsVHJhbnNpdGlvbihcbiAgICAgICAgaW5kZXggPT09IC0xID8gMCA6IChpbmRleCA8IGdldFBhbmVsSW5kZXgob2xkVmFsKSA/IC0xIDogMSlcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAocGFuZWxJbmRleC52YWx1ZSAhPT0gaW5kZXgpIHtcbiAgICAgIHBhbmVsSW5kZXgudmFsdWUgPSBpbmRleFxuICAgICAgZW1pdCgnYmVmb3JlVHJhbnNpdGlvbicsIG5ld1ZhbCwgb2xkVmFsKVxuICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZW1pdCgndHJhbnNpdGlvbicsIG5ld1ZhbCwgb2xkVmFsKVxuICAgICAgfSwgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBuZXh0UGFuZWwgKCkgeyBnb1RvUGFuZWxCeU9mZnNldCgxKSB9XG4gIGZ1bmN0aW9uIHByZXZpb3VzUGFuZWwgKCkgeyBnb1RvUGFuZWxCeU9mZnNldCgtMSkgfVxuXG4gIGZ1bmN0aW9uIGdvVG9QYW5lbCAobmFtZSkge1xuICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbmFtZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVmFsaWRQYW5lbE5hbWUgKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSAhPT0gdm9pZCAwICYmIG5hbWUgIT09IG51bGwgJiYgbmFtZSAhPT0gJydcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhbmVsSW5kZXggKG5hbWUpIHtcbiAgICByZXR1cm4gcGFuZWxzLmZpbmRJbmRleChwYW5lbCA9PiB7XG4gICAgICByZXR1cm4gcGFuZWwucHJvcHMubmFtZSA9PT0gbmFtZVxuICAgICAgICAmJiBwYW5lbC5wcm9wcy5kaXNhYmxlICE9PSAnJ1xuICAgICAgICAmJiBwYW5lbC5wcm9wcy5kaXNhYmxlICE9PSB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEVuYWJsZWRQYW5lbHMgKCkge1xuICAgIHJldHVybiBwYW5lbHMuZmlsdGVyKHBhbmVsID0+IHtcbiAgICAgIHJldHVybiBwYW5lbC5wcm9wcy5kaXNhYmxlICE9PSAnJ1xuICAgICAgICAmJiBwYW5lbC5wcm9wcy5kaXNhYmxlICE9PSB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBhbmVsVHJhbnNpdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgY29uc3QgdmFsID0gZGlyZWN0aW9uICE9PSAwICYmIHByb3BzLmFuaW1hdGVkID09PSB0cnVlICYmIHBhbmVsSW5kZXgudmFsdWUgIT09IC0xXG4gICAgICA/ICdxLXRyYW5zaXRpb24tLScgKyAoZGlyZWN0aW9uID09PSAtMSA/IHRyYW5zaXRpb25QcmV2LnZhbHVlIDogdHJhbnNpdGlvbk5leHQudmFsdWUpXG4gICAgICA6IG51bGxcblxuICAgIGlmIChwYW5lbFRyYW5zaXRpb24udmFsdWUgIT09IHZhbCkge1xuICAgICAgcGFuZWxUcmFuc2l0aW9uLnZhbHVlID0gdmFsXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ29Ub1BhbmVsQnlPZmZzZXQgKGRpcmVjdGlvbiwgc3RhcnRJbmRleCA9IHBhbmVsSW5kZXgudmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSBzdGFydEluZGV4ICsgZGlyZWN0aW9uXG5cbiAgICB3aGlsZSAoaW5kZXggIT09IC0xICYmIGluZGV4IDwgcGFuZWxzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgb3B0ID0gcGFuZWxzWyBpbmRleCBdXG5cbiAgICAgIGlmIChcbiAgICAgICAgb3B0ICE9PSB2b2lkIDBcbiAgICAgICAgJiYgb3B0LnByb3BzLmRpc2FibGUgIT09ICcnXG4gICAgICAgICYmIG9wdC5wcm9wcy5kaXNhYmxlICE9PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgdXBkYXRlUGFuZWxUcmFuc2l0aW9uKGRpcmVjdGlvbilcbiAgICAgICAgZm9yY2VkUGFuZWxUcmFuc2l0aW9uID0gdHJ1ZVxuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG9wdC5wcm9wcy5uYW1lKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBmb3JjZWRQYW5lbFRyYW5zaXRpb24gPSBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpbmRleCArPSBkaXJlY3Rpb25cbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaW5maW5pdGUgPT09IHRydWUgJiYgcGFuZWxzLmxlbmd0aCAhPT0gMCAmJiBzdGFydEluZGV4ICE9PSAtMSAmJiBzdGFydEluZGV4ICE9PSBwYW5lbHMubGVuZ3RoKSB7XG4gICAgICBnb1RvUGFuZWxCeU9mZnNldChkaXJlY3Rpb24sIGRpcmVjdGlvbiA9PT0gLTEgPyBwYW5lbHMubGVuZ3RoIDogLTEpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlUGFuZWxJbmRleCAoKSB7XG4gICAgY29uc3QgaW5kZXggPSBnZXRQYW5lbEluZGV4KHByb3BzLm1vZGVsVmFsdWUpXG5cbiAgICBpZiAocGFuZWxJbmRleC52YWx1ZSAhPT0gaW5kZXgpIHtcbiAgICAgIHBhbmVsSW5kZXgudmFsdWUgPSBpbmRleFxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYW5lbENvbnRlbnRDaGlsZCAoKSB7XG4gICAgY29uc3QgcGFuZWwgPSBpc1ZhbGlkUGFuZWxOYW1lKHByb3BzLm1vZGVsVmFsdWUpID09PSB0cnVlXG4gICAgICAmJiB1cGRhdGVQYW5lbEluZGV4KClcbiAgICAgICYmIHBhbmVsc1sgcGFuZWxJbmRleC52YWx1ZSBdXG5cbiAgICByZXR1cm4gcHJvcHMua2VlcEFsaXZlID09PSB0cnVlXG4gICAgICA/IFtcbiAgICAgICAgICBoKEtlZXBBbGl2ZSwga2VlcEFsaXZlUHJvcHMudmFsdWUsIFtcbiAgICAgICAgICAgIGgoXG4gICAgICAgICAgICAgIG5lZWRzVW5pcXVlS2VlcEFsaXZlV3JhcHBlci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgID8gZ2V0Q2FjaGUoY29udGVudEtleS52YWx1ZSwgKCkgPT4gKHsgLi4uUGFuZWxXcmFwcGVyLCBuYW1lOiBjb250ZW50S2V5LnZhbHVlIH0pKVxuICAgICAgICAgICAgICAgIDogUGFuZWxXcmFwcGVyLFxuICAgICAgICAgICAgICB7IGtleTogY29udGVudEtleS52YWx1ZSwgc3R5bGU6IHRyYW5zaXRpb25TdHlsZS52YWx1ZSB9LFxuICAgICAgICAgICAgICAoKSA9PiBwYW5lbFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIDogW1xuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1wYW5lbCBzY3JvbGwnLFxuICAgICAgICAgICAgc3R5bGU6IHRyYW5zaXRpb25TdHlsZS52YWx1ZSxcbiAgICAgICAgICAgIGtleTogY29udGVudEtleS52YWx1ZSxcbiAgICAgICAgICAgIHJvbGU6ICd0YWJwYW5lbCdcbiAgICAgICAgICB9LCBbIHBhbmVsIF0pXG4gICAgICAgIF1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhbmVsQ29udGVudCAoKSB7XG4gICAgaWYgKHBhbmVscy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gICAgcmV0dXJuIHByb3BzLmFuaW1hdGVkID09PSB0cnVlXG4gICAgICA/IFsgaChUcmFuc2l0aW9uLCB7IG5hbWU6IHBhbmVsVHJhbnNpdGlvbi52YWx1ZSB9LCBnZXRQYW5lbENvbnRlbnRDaGlsZCkgXVxuICAgICAgOiBnZXRQYW5lbENvbnRlbnRDaGlsZCgpXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQYW5lbHNMaXN0IChzbG90cykge1xuICAgIHBhbmVscyA9IGdldE5vcm1hbGl6ZWRWTm9kZXMoXG4gICAgICBoU2xvdChzbG90cy5kZWZhdWx0LCBbXSlcbiAgICApLmZpbHRlcihcbiAgICAgIHBhbmVsID0+IHBhbmVsLnByb3BzICE9PSBudWxsXG4gICAgICAgICYmIHBhbmVsLnByb3BzLnNsb3QgPT09IHZvaWQgMFxuICAgICAgICAmJiBpc1ZhbGlkUGFuZWxOYW1lKHBhbmVsLnByb3BzLm5hbWUpID09PSB0cnVlXG4gICAgKVxuXG4gICAgcmV0dXJuIHBhbmVscy5sZW5ndGhcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhbmVscyAoKSB7XG4gICAgcmV0dXJuIHBhbmVsc1xuICB9XG5cbiAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICBuZXh0OiBuZXh0UGFuZWwsXG4gICAgcHJldmlvdXM6IHByZXZpb3VzUGFuZWwsXG4gICAgZ29UbzogZ29Ub1BhbmVsXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYW5lbEluZGV4LFxuICAgIHBhbmVsRGlyZWN0aXZlcyxcblxuICAgIHVwZGF0ZVBhbmVsc0xpc3QsXG4gICAgdXBkYXRlUGFuZWxJbmRleCxcblxuICAgIGdldFBhbmVsQ29udGVudCxcbiAgICBnZXRFbmFibGVkUGFuZWxzLFxuICAgIGdldFBhbmVscyxcblxuICAgIGlzVmFsaWRQYW5lbE5hbWUsXG5cbiAgICBrZWVwQWxpdmVQcm9wcyxcbiAgICBuZWVkc1VuaXF1ZUtlZXBBbGl2ZVdyYXBwZXIsXG5cbiAgICBnb1RvUGFuZWxCeU9mZnNldCxcbiAgICBnb1RvUGFuZWwsXG5cbiAgICBuZXh0UGFuZWwsXG4gICAgcHJldmlvdXNQYW5lbFxuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVBhbmVsLCB7IHVzZVBhbmVsUHJvcHMsIHVzZVBhbmVsRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1wYW5lbC91c2UtcGFuZWwuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhEaXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGFiUGFuZWxzJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVBhbmVsUHJvcHMsXG4gICAgLi4udXNlRGFya1Byb3BzXG4gIH0sXG5cbiAgZW1pdHM6IHVzZVBhbmVsRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgdm0ucHJveHkuJHEpXG5cbiAgICBjb25zdCB7IHVwZGF0ZVBhbmVsc0xpc3QsIGdldFBhbmVsQ29udGVudCwgcGFuZWxEaXJlY3RpdmVzIH0gPSB1c2VQYW5lbCgpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRhYi1wYW5lbHMgcS1wYW5lbC1wYXJlbnQnXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtdGFiLXBhbmVscy0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHVwZGF0ZVBhbmVsc0xpc3Qoc2xvdHMpXG5cbiAgICAgIHJldHVybiBoRGlyKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LFxuICAgICAgICBnZXRQYW5lbENvbnRlbnQoKSxcbiAgICAgICAgJ3BhbicsXG4gICAgICAgIHByb3BzLnN3aXBlYWJsZSxcbiAgICAgICAgKCkgPT4gcGFuZWxEaXJlY3RpdmVzLnZhbHVlXG4gICAgICApXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgdXNlUGFuZWxDaGlsZFByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtcGFuZWwvdXNlLXBhbmVsLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWJQYW5lbCcsXG5cbiAgcHJvcHM6IHVzZVBhbmVsQ2hpbGRQcm9wcyxcblxuICBzZXR1cCAoXywgeyBzbG90cyB9KSB7XG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYi1wYW5lbCcsIHJvbGU6ICd0YWJwYW5lbCcgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJjb25zdCByZVJHQkEgPSAvXnJnYihhKT9cXCgoXFxkezEsM30pLChcXGR7MSwzfSksKFxcZHsxLDN9KSw/KFswMV0/XFwuP1xcZCo/KT9cXCkkL1xuXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9IZXggKHsgciwgZywgYiwgYSB9KSB7XG4gIGNvbnN0IGFscGhhID0gYSAhPT0gdm9pZCAwXG5cbiAgciA9IE1hdGgucm91bmQocilcbiAgZyA9IE1hdGgucm91bmQoZylcbiAgYiA9IE1hdGgucm91bmQoYilcblxuICBpZiAoXG4gICAgciA+IDI1NVxuICAgIHx8IGcgPiAyNTVcbiAgICB8fCBiID4gMjU1XG4gICAgfHwgKGFscGhhICYmIGEgPiAxMDApXG4gICkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIDMgbnVtYmVycyBiZWxvdyAyNTYgKGFuZCBvcHRpb25hbGx5IG9uZSBiZWxvdyAxMDApJylcbiAgfVxuXG4gIGEgPSBhbHBoYVxuICAgID8gKE1hdGgucm91bmQoMjU1ICogYSAvIDEwMCkgfCAxIDw8IDgpLnRvU3RyaW5nKDE2KS5zbGljZSgxKVxuICAgIDogJydcblxuICByZXR1cm4gJyMnICsgKChiIHwgZyA8PCA4IHwgciA8PCAxNikgfCAxIDw8IDI0KS50b1N0cmluZygxNikuc2xpY2UoMSkgKyBhXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb1N0cmluZyAoeyByLCBnLCBiLCBhIH0pIHtcbiAgcmV0dXJuIGByZ2IkeyBhICE9PSB2b2lkIDAgPyAnYScgOiAnJyB9KCR7IHIgfSwkeyBnIH0sJHsgYiB9JHsgYSAhPT0gdm9pZCAwID8gJywnICsgKGEgLyAxMDApIDogJycgfSlgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYiAoaGV4KSB7XG4gIGlmICh0eXBlb2YgaGV4ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJylcbiAgfVxuXG4gIGhleCA9IGhleC5yZXBsYWNlKC9eIy8sICcnKVxuXG4gIGlmIChoZXgubGVuZ3RoID09PSAzKSB7XG4gICAgaGV4ID0gaGV4WyAwIF0gKyBoZXhbIDAgXSArIGhleFsgMSBdICsgaGV4WyAxIF0gKyBoZXhbIDIgXSArIGhleFsgMiBdXG4gIH1cbiAgZWxzZSBpZiAoaGV4Lmxlbmd0aCA9PT0gNCkge1xuICAgIGhleCA9IGhleFsgMCBdICsgaGV4WyAwIF0gKyBoZXhbIDEgXSArIGhleFsgMSBdICsgaGV4WyAyIF0gKyBoZXhbIDIgXSArIGhleFsgMyBdICsgaGV4WyAzIF1cbiAgfVxuXG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KGhleCwgMTYpXG5cbiAgcmV0dXJuIGhleC5sZW5ndGggPiA2XG4gICAgPyB7IHI6IG51bSA+PiAyNCAmIDI1NSwgZzogbnVtID4+IDE2ICYgMjU1LCBiOiBudW0gPj4gOCAmIDI1NSwgYTogTWF0aC5yb3VuZCgobnVtICYgMjU1KSAvIDIuNTUpIH1cbiAgICA6IHsgcjogbnVtID4+IDE2LCBnOiBudW0gPj4gOCAmIDI1NSwgYjogbnVtICYgMjU1IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzdlRvUmdiICh7IGgsIHMsIHYsIGEgfSkge1xuICBsZXQgciwgZywgYlxuICBzID0gcyAvIDEwMFxuICB2ID0gdiAvIDEwMFxuXG4gIGggPSBoIC8gMzYwXG4gIGNvbnN0XG4gICAgaSA9IE1hdGguZmxvb3IoaCAqIDYpLFxuICAgIGYgPSBoICogNiAtIGksXG4gICAgcCA9IHYgKiAoMSAtIHMpLFxuICAgIHEgPSB2ICogKDEgLSBmICogcyksXG4gICAgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKVxuXG4gIHN3aXRjaCAoaSAlIDYpIHtcbiAgICBjYXNlIDA6XG4gICAgICByID0gdlxuICAgICAgZyA9IHRcbiAgICAgIGIgPSBwXG4gICAgICBicmVha1xuICAgIGNhc2UgMTpcbiAgICAgIHIgPSBxXG4gICAgICBnID0gdlxuICAgICAgYiA9IHBcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAyOlxuICAgICAgciA9IHBcbiAgICAgIGcgPSB2XG4gICAgICBiID0gdFxuICAgICAgYnJlYWtcbiAgICBjYXNlIDM6XG4gICAgICByID0gcFxuICAgICAgZyA9IHFcbiAgICAgIGIgPSB2XG4gICAgICBicmVha1xuICAgIGNhc2UgNDpcbiAgICAgIHIgPSB0XG4gICAgICBnID0gcFxuICAgICAgYiA9IHZcbiAgICAgIGJyZWFrXG4gICAgY2FzZSA1OlxuICAgICAgciA9IHZcbiAgICAgIGcgPSBwXG4gICAgICBiID0gcVxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcjogTWF0aC5yb3VuZChyICogMjU1KSxcbiAgICBnOiBNYXRoLnJvdW5kKGcgKiAyNTUpLFxuICAgIGI6IE1hdGgucm91bmQoYiAqIDI1NSksXG4gICAgYVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hzdiAoeyByLCBnLCBiLCBhIH0pIHtcbiAgY29uc3RcbiAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKSxcbiAgICBkID0gbWF4IC0gbWluLFxuICAgIHMgPSAobWF4ID09PSAwID8gMCA6IGQgLyBtYXgpLFxuICAgIHYgPSBtYXggLyAyNTVcbiAgbGV0IGhcblxuICBzd2l0Y2ggKG1heCkge1xuICAgIGNhc2UgbWluOlxuICAgICAgaCA9IDBcbiAgICAgIGJyZWFrXG4gICAgY2FzZSByOlxuICAgICAgaCA9IChnIC0gYikgKyBkICogKGcgPCBiID8gNiA6IDApXG4gICAgICBoIC89IDYgKiBkXG4gICAgICBicmVha1xuICAgIGNhc2UgZzpcbiAgICAgIGggPSAoYiAtIHIpICsgZCAqIDJcbiAgICAgIGggLz0gNiAqIGRcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBiOlxuICAgICAgaCA9IChyIC0gZykgKyBkICogNFxuICAgICAgaCAvPSA2ICogZFxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaDogTWF0aC5yb3VuZChoICogMzYwKSxcbiAgICBzOiBNYXRoLnJvdW5kKHMgKiAxMDApLFxuICAgIHY6IE1hdGgucm91bmQodiAqIDEwMCksXG4gICAgYVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0VG9SZ2IgKHN0cikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpXG4gIH1cblxuICBjb25zdCBjb2xvciA9IHN0ci5yZXBsYWNlKC8gL2csICcnKVxuXG4gIGNvbnN0IG0gPSByZVJHQkEuZXhlYyhjb2xvcilcblxuICBpZiAobSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBoZXhUb1JnYihjb2xvcilcbiAgfVxuXG4gIGNvbnN0IHJnYiA9IHtcbiAgICByOiBNYXRoLm1pbigyNTUsIHBhcnNlSW50KG1bIDIgXSwgMTApKSxcbiAgICBnOiBNYXRoLm1pbigyNTUsIHBhcnNlSW50KG1bIDMgXSwgMTApKSxcbiAgICBiOiBNYXRoLm1pbigyNTUsIHBhcnNlSW50KG1bIDQgXSwgMTApKVxuICB9XG5cbiAgaWYgKG1bIDEgXSkge1xuICAgIGNvbnN0IGFscGhhID0gcGFyc2VGbG9hdChtWyA1IF0pXG4gICAgcmdiLmEgPSBNYXRoLm1pbigxLCBpc05hTihhbHBoYSkgPT09IHRydWUgPyAxIDogYWxwaGEpICogMTAwXG4gIH1cblxuICByZXR1cm4gcmdiXG59XG5cbi8qIHdvcmtzIGFzIGRhcmtlbiBpZiBwZXJjZW50IDwgMCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpZ2h0ZW4gKGNvbG9yLCBwZXJjZW50KSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcgYXMgY29sb3InKVxuICB9XG4gIGlmICh0eXBlb2YgcGVyY2VudCAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIG51bWVyaWMgcGVyY2VudCcpXG4gIH1cblxuICBjb25zdCByZ2IgPSB0ZXh0VG9SZ2IoY29sb3IpLFxuICAgIHQgPSBwZXJjZW50IDwgMCA/IDAgOiAyNTUsXG4gICAgcCA9IE1hdGguYWJzKHBlcmNlbnQpIC8gMTAwLFxuICAgIFIgPSByZ2IucixcbiAgICBHID0gcmdiLmcsXG4gICAgQiA9IHJnYi5iXG5cbiAgcmV0dXJuICcjJyArIChcbiAgICAweDEwMDAwMDAgKyAoTWF0aC5yb3VuZCgodCAtIFIpICogcCkgKyBSKSAqIDB4MTAwMDBcbiAgICArIChNYXRoLnJvdW5kKCh0IC0gRykgKiBwKSArIEcpICogMHgxMDBcbiAgICArIChNYXRoLnJvdW5kKCh0IC0gQikgKiBwKSArIEIpXG4gICkudG9TdHJpbmcoMTYpLnNsaWNlKDEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsdW1pbm9zaXR5IChjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJyAmJiAoIWNvbG9yIHx8IGNvbG9yLnIgPT09IHZvaWQgMCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZyBvciBhIHtyLCBnLCBifSBvYmplY3QgYXMgY29sb3InKVxuICB9XG5cbiAgY29uc3RcbiAgICByZ2IgPSB0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnID8gdGV4dFRvUmdiKGNvbG9yKSA6IGNvbG9yLFxuICAgIHIgPSByZ2IuciAvIDI1NSxcbiAgICBnID0gcmdiLmcgLyAyNTUsXG4gICAgYiA9IHJnYi5iIC8gMjU1LFxuICAgIFIgPSByIDw9IDAuMDM5MjggPyByIC8gMTIuOTIgOiBNYXRoLnBvdygociArIDAuMDU1KSAvIDEuMDU1LCAyLjQpLFxuICAgIEcgPSBnIDw9IDAuMDM5MjggPyBnIC8gMTIuOTIgOiBNYXRoLnBvdygoZyArIDAuMDU1KSAvIDEuMDU1LCAyLjQpLFxuICAgIEIgPSBiIDw9IDAuMDM5MjggPyBiIC8gMTIuOTIgOiBNYXRoLnBvdygoYiArIDAuMDU1KSAvIDEuMDU1LCAyLjQpXG4gIHJldHVybiAwLjIxMjYgKiBSICsgMC43MTUyICogRyArIDAuMDcyMiAqIEJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyaWdodG5lc3MgKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnICYmICghY29sb3IgfHwgY29sb3IuciA9PT0gdm9pZCAwKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGEge3IsIGcsIGJ9IG9iamVjdCBhcyBjb2xvcicpXG4gIH1cblxuICBjb25zdCByZ2IgPSB0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnXG4gICAgPyB0ZXh0VG9SZ2IoY29sb3IpXG4gICAgOiBjb2xvclxuXG4gIHJldHVybiAocmdiLnIgKiAyOTkgKyByZ2IuZyAqIDU4NyArIHJnYi5iICogMTE0KSAvIDEwMDBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsZW5kIChmZ0NvbG9yLCBiZ0NvbG9yKSB7XG4gIGlmICh0eXBlb2YgZmdDb2xvciAhPT0gJ3N0cmluZycgJiYgKCFmZ0NvbG9yIHx8IGZnQ29sb3IuciA9PT0gdm9pZCAwKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGEge3IsIGcsIGJbLCBhXX0gb2JqZWN0IGFzIGZnQ29sb3InKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBiZ0NvbG9yICE9PSAnc3RyaW5nJyAmJiAoIWJnQ29sb3IgfHwgYmdDb2xvci5yID09PSB2b2lkIDApKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYSB7ciwgZywgYlssIGFdfSBvYmplY3QgYXMgYmdDb2xvcicpXG4gIH1cblxuICBjb25zdFxuICAgIHJnYjEgPSB0eXBlb2YgZmdDb2xvciA9PT0gJ3N0cmluZycgPyB0ZXh0VG9SZ2IoZmdDb2xvcikgOiBmZ0NvbG9yLFxuICAgIHIxID0gcmdiMS5yIC8gMjU1LFxuICAgIGcxID0gcmdiMS5nIC8gMjU1LFxuICAgIGIxID0gcmdiMS5iIC8gMjU1LFxuICAgIGExID0gcmdiMS5hICE9PSB2b2lkIDAgPyByZ2IxLmEgLyAxMDAgOiAxLFxuICAgIHJnYjIgPSB0eXBlb2YgYmdDb2xvciA9PT0gJ3N0cmluZycgPyB0ZXh0VG9SZ2IoYmdDb2xvcikgOiBiZ0NvbG9yLFxuICAgIHIyID0gcmdiMi5yIC8gMjU1LFxuICAgIGcyID0gcmdiMi5nIC8gMjU1LFxuICAgIGIyID0gcmdiMi5iIC8gMjU1LFxuICAgIGEyID0gcmdiMi5hICE9PSB2b2lkIDAgPyByZ2IyLmEgLyAxMDAgOiAxLFxuICAgIGEgPSBhMSArIGEyICogKDEgLSBhMSksXG4gICAgciA9IE1hdGgucm91bmQoKChyMSAqIGExICsgcjIgKiBhMiAqICgxIC0gYTEpKSAvIGEpICogMjU1KSxcbiAgICBnID0gTWF0aC5yb3VuZCgoKGcxICogYTEgKyBnMiAqIGEyICogKDEgLSBhMSkpIC8gYSkgKiAyNTUpLFxuICAgIGIgPSBNYXRoLnJvdW5kKCgoYjEgKiBhMSArIGIyICogYTIgKiAoMSAtIGExKSkgLyBhKSAqIDI1NSlcblxuICBjb25zdCByZXQgPSB7IHIsIGcsIGIsIGE6IE1hdGgucm91bmQoYSAqIDEwMCkgfVxuICByZXR1cm4gdHlwZW9mIGZnQ29sb3IgPT09ICdzdHJpbmcnXG4gICAgPyByZ2JUb0hleChyZXQpXG4gICAgOiByZXRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFscGhhIChjb2xvciwgb2Zmc2V0KSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcgYXMgY29sb3InKVxuICB9XG5cbiAgaWYgKG9mZnNldCA9PT0gdm9pZCAwIHx8IG9mZnNldCA8IC0xIHx8IG9mZnNldCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBvZmZzZXQgdG8gYmUgYmV0d2VlbiAtMSBhbmQgMScpXG4gIH1cblxuICBjb25zdCB7IHIsIGcsIGIsIGEgfSA9IHRleHRUb1JnYihjb2xvcilcbiAgY29uc3QgYWxwaGEgPSBhICE9PSB2b2lkIDAgPyBhIC8gMTAwIDogMFxuXG4gIHJldHVybiByZ2JUb0hleCh7XG4gICAgciwgZywgYiwgYTogTWF0aC5yb3VuZChNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBhbHBoYSArIG9mZnNldCkpICogMTAwKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFsZXR0ZUNvbG9yIChjb2xvck5hbWUpIHtcbiAgaWYgKHR5cGVvZiBjb2xvck5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcgYXMgY29sb3InKVxuICB9XG5cbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIGVsLmNsYXNzTmFtZSA9IGB0ZXh0LSR7IGNvbG9yTmFtZSB9IGludmlzaWJsZSBmaXhlZCBuby1wb2ludGVyLWV2ZW50c2BcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcblxuICBjb25zdCByZXN1bHQgPSBnZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKCdjb2xvcicpXG5cbiAgZWwucmVtb3ZlKClcblxuICByZXR1cm4gcmdiVG9IZXgodGV4dFRvUmdiKHJlc3VsdCkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmdiVG9IZXgsXG4gIGhleFRvUmdiLFxuICBoc3ZUb1JnYixcbiAgcmdiVG9Ic3YsXG4gIHRleHRUb1JnYixcbiAgbGlnaHRlbixcbiAgbHVtaW5vc2l0eSxcbiAgYnJpZ2h0bmVzcyxcbiAgYmxlbmQsXG4gIGNoYW5nZUFscGhhLFxuICBnZXRQYWxldHRlQ29sb3Jcbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBuZXh0VGljaywgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgVG91Y2hQYW4gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b3VjaC1wYW4vVG91Y2hQYW4uanMnXG5cbmltcG9ydCBRU2xpZGVyIGZyb20gJy4uL3NsaWRlci9RU2xpZGVyLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5cbmltcG9ydCBRVGFicyBmcm9tICcuLi90YWJzL1FUYWJzLmpzJ1xuaW1wb3J0IFFUYWIgZnJvbSAnLi4vdGFicy9RVGFiLmpzJ1xuaW1wb3J0IFFUYWJQYW5lbHMgZnJvbSAnLi4vdGFiLXBhbmVscy9RVGFiUGFuZWxzLmpzJ1xuaW1wb3J0IFFUYWJQYW5lbCBmcm9tICcuLi90YWItcGFuZWxzL1FUYWJQYW5lbC5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB1c2VSZW5kZXJDYWNoZSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtcmVuZGVyLWNhY2hlL3VzZS1yZW5kZXItY2FjaGUuanMnXG5pbXBvcnQgeyB1c2VGb3JtSW5qZWN0LCB1c2VGb3JtUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtZm9ybS9wcml2YXRlLnVzZS1mb3JtLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyB0ZXN0UGF0dGVybiB9IGZyb20gJy4uLy4uL3V0aWxzL3BhdHRlcm5zL3BhdHRlcm5zLmpzJ1xuaW1wb3J0IHRocm90dGxlIGZyb20gJy4uLy4uL3V0aWxzL3Rocm90dGxlL3Rocm90dGxlLmpzJ1xuaW1wb3J0IHsgc3RvcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50L2V2ZW50LmpzJ1xuaW1wb3J0IHsgaGV4VG9SZ2IsIHJnYlRvSGV4LCByZ2JUb1N0cmluZywgdGV4dFRvUmdiLCByZ2JUb0hzdiwgaHN2VG9SZ2IsIGx1bWlub3NpdHkgfSBmcm9tICcuLi8uLi91dGlscy9jb2xvcnMvY29sb3JzLmpzJ1xuaW1wb3J0IHsgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuY29uc3QgcGFsZXR0ZSA9IFtcbiAgJ3JnYigyNTUsMjA0LDIwNCknLCAncmdiKDI1NSwyMzAsMjA0KScsICdyZ2IoMjU1LDI1NSwyMDQpJywgJ3JnYigyMDQsMjU1LDIwNCknLCAncmdiKDIwNCwyNTUsMjMwKScsICdyZ2IoMjA0LDI1NSwyNTUpJywgJ3JnYigyMDQsMjMwLDI1NSknLCAncmdiKDIwNCwyMDQsMjU1KScsICdyZ2IoMjMwLDIwNCwyNTUpJywgJ3JnYigyNTUsMjA0LDI1NSknLFxuICAncmdiKDI1NSwxNTMsMTUzKScsICdyZ2IoMjU1LDIwNCwxNTMpJywgJ3JnYigyNTUsMjU1LDE1MyknLCAncmdiKDE1MywyNTUsMTUzKScsICdyZ2IoMTUzLDI1NSwyMDQpJywgJ3JnYigxNTMsMjU1LDI1NSknLCAncmdiKDE1MywyMDQsMjU1KScsICdyZ2IoMTUzLDE1MywyNTUpJywgJ3JnYigyMDQsMTUzLDI1NSknLCAncmdiKDI1NSwxNTMsMjU1KScsXG4gICdyZ2IoMjU1LDEwMiwxMDIpJywgJ3JnYigyNTUsMTc5LDEwMiknLCAncmdiKDI1NSwyNTUsMTAyKScsICdyZ2IoMTAyLDI1NSwxMDIpJywgJ3JnYigxMDIsMjU1LDE3OSknLCAncmdiKDEwMiwyNTUsMjU1KScsICdyZ2IoMTAyLDE3OSwyNTUpJywgJ3JnYigxMDIsMTAyLDI1NSknLCAncmdiKDE3OSwxMDIsMjU1KScsICdyZ2IoMjU1LDEwMiwyNTUpJyxcbiAgJ3JnYigyNTUsNTEsNTEpJywgJ3JnYigyNTUsMTUzLDUxKScsICdyZ2IoMjU1LDI1NSw1MSknLCAncmdiKDUxLDI1NSw1MSknLCAncmdiKDUxLDI1NSwxNTMpJywgJ3JnYig1MSwyNTUsMjU1KScsICdyZ2IoNTEsMTUzLDI1NSknLCAncmdiKDUxLDUxLDI1NSknLCAncmdiKDE1Myw1MSwyNTUpJywgJ3JnYigyNTUsNTEsMjU1KScsXG4gICdyZ2IoMjU1LDAsMCknLCAncmdiKDI1NSwxMjgsMCknLCAncmdiKDI1NSwyNTUsMCknLCAncmdiKDAsMjU1LDApJywgJ3JnYigwLDI1NSwxMjgpJywgJ3JnYigwLDI1NSwyNTUpJywgJ3JnYigwLDEyOCwyNTUpJywgJ3JnYigwLDAsMjU1KScsICdyZ2IoMTI4LDAsMjU1KScsICdyZ2IoMjU1LDAsMjU1KScsXG4gICdyZ2IoMjQ1LDAsMCknLCAncmdiKDI0NSwxMjMsMCknLCAncmdiKDI0NSwyNDUsMCknLCAncmdiKDAsMjQ1LDApJywgJ3JnYigwLDI0NSwxMjMpJywgJ3JnYigwLDI0NSwyNDUpJywgJ3JnYigwLDEyMywyNDUpJywgJ3JnYigwLDAsMjQ1KScsICdyZ2IoMTIzLDAsMjQ1KScsICdyZ2IoMjQ1LDAsMjQ1KScsXG4gICdyZ2IoMjE0LDAsMCknLCAncmdiKDIxNCwxMDgsMCknLCAncmdiKDIxNCwyMTQsMCknLCAncmdiKDAsMjE0LDApJywgJ3JnYigwLDIxNCwxMDgpJywgJ3JnYigwLDIxNCwyMTQpJywgJ3JnYigwLDEwOCwyMTQpJywgJ3JnYigwLDAsMjE0KScsICdyZ2IoMTA4LDAsMjE0KScsICdyZ2IoMjE0LDAsMjE0KScsXG4gICdyZ2IoMTYzLDAsMCknLCAncmdiKDE2Myw4MiwwKScsICdyZ2IoMTYzLDE2MywwKScsICdyZ2IoMCwxNjMsMCknLCAncmdiKDAsMTYzLDgyKScsICdyZ2IoMCwxNjMsMTYzKScsICdyZ2IoMCw4MiwxNjMpJywgJ3JnYigwLDAsMTYzKScsICdyZ2IoODIsMCwxNjMpJywgJ3JnYigxNjMsMCwxNjMpJyxcbiAgJ3JnYig5MiwwLDApJywgJ3JnYig5Miw0NiwwKScsICdyZ2IoOTIsOTIsMCknLCAncmdiKDAsOTIsMCknLCAncmdiKDAsOTIsNDYpJywgJ3JnYigwLDkyLDkyKScsICdyZ2IoMCw0Niw5MiknLCAncmdiKDAsMCw5MiknLCAncmdiKDQ2LDAsOTIpJywgJ3JnYig5MiwwLDkyKScsXG4gICdyZ2IoMjU1LDI1NSwyNTUpJywgJ3JnYigyMDUsMjA1LDIwNSknLCAncmdiKDE3OCwxNzgsMTc4KScsICdyZ2IoMTUzLDE1MywxNTMpJywgJ3JnYigxMjcsMTI3LDEyNyknLCAncmdiKDEwMiwxMDIsMTAyKScsICdyZ2IoNzYsNzYsNzYpJywgJ3JnYig1MSw1MSw1MSknLCAncmdiKDI1LDI1LDI1KScsICdyZ2IoMCwwLDApJ1xuXVxuXG5jb25zdCB0aHVtYlBhdGggPSAnTTUgNSBoMTAgdjEwIGgtMTAgdi0xMCB6J1xuY29uc3QgYWxwaGFUcmFja0ltZyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBSDBsRVFWUW9VMk5rWUdBd1prQUZaNUc1alBSUmdPWUVWRGVCM0VCakJRQk9ad1RWdWdJR3lBQUFBQUJKUlU1RXJrSmdnZz09J1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUNvbG9yJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VGb3JtUHJvcHMsXG5cbiAgICBtb2RlbFZhbHVlOiBTdHJpbmcsXG5cbiAgICBkZWZhdWx0VmFsdWU6IFN0cmluZyxcbiAgICBkZWZhdWx0Vmlldzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3NwZWN0cnVtJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdzcGVjdHJ1bScsICd0dW5lJywgJ3BhbGV0dGUnIF0uaW5jbHVkZXModilcbiAgICB9LFxuXG4gICAgZm9ybWF0TW9kZWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdhdXRvJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdhdXRvJywgJ2hleCcsICdyZ2InLCAnaGV4YScsICdyZ2JhJyBdLmluY2x1ZGVzKHYpXG4gICAgfSxcblxuICAgIHBhbGV0dGU6IEFycmF5LFxuXG4gICAgbm9IZWFkZXI6IEJvb2xlYW4sXG4gICAgbm9IZWFkZXJUYWJzOiBCb29sZWFuLFxuICAgIG5vRm9vdGVyOiBCb29sZWFuLFxuXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG5cbiAgICBkaXNhYmxlOiBCb29sZWFuLFxuICAgIHJlYWRvbmx5OiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ2NoYW5nZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG4gICAgY29uc3QgeyBnZXRDYWNoZSB9ID0gdXNlUmVuZGVyQ2FjaGUoKVxuXG4gICAgY29uc3Qgc3BlY3RydW1SZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBlcnJvckljb25SZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGZvcmNlSGV4ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZm9ybWF0TW9kZWwgPT09ICdhdXRvJ1xuICAgICAgICA/IG51bGxcbiAgICAgICAgOiBwcm9wcy5mb3JtYXRNb2RlbC5pbmRleE9mKCdoZXgnKSAhPT0gLTFcbiAgICApKVxuXG4gICAgY29uc3QgZm9yY2VBbHBoYSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmZvcm1hdE1vZGVsID09PSAnYXV0bydcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogcHJvcHMuZm9ybWF0TW9kZWwuaW5kZXhPZignYScpICE9PSAtMVxuICAgICkpXG5cbiAgICBjb25zdCB0b3BWaWV3ID0gcmVmKFxuICAgICAgcHJvcHMuZm9ybWF0TW9kZWwgPT09ICdhdXRvJ1xuICAgICAgICA/IChcbiAgICAgICAgICAgIChwcm9wcy5tb2RlbFZhbHVlID09PSB2b2lkIDAgfHwgcHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbCB8fCBwcm9wcy5tb2RlbFZhbHVlID09PSAnJyB8fCBwcm9wcy5tb2RlbFZhbHVlLnN0YXJ0c1dpdGgoJyMnKSlcbiAgICAgICAgICAgICAgPyAnaGV4J1xuICAgICAgICAgICAgICA6ICdyZ2InXG4gICAgICAgICAgKVxuICAgICAgICA6IChwcm9wcy5mb3JtYXRNb2RlbC5zdGFydHNXaXRoKCdoZXgnKSA/ICdoZXgnIDogJ3JnYicpXG4gICAgKVxuXG4gICAgY29uc3QgdmlldyA9IHJlZihwcm9wcy5kZWZhdWx0VmlldylcbiAgICBjb25zdCBtb2RlbCA9IHJlZihwYXJzZU1vZGVsKHByb3BzLm1vZGVsVmFsdWUgfHwgcHJvcHMuZGVmYXVsdFZhbHVlKSlcblxuICAgIGNvbnN0IGVkaXRhYmxlID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5yZWFkb25seSAhPT0gdHJ1ZSlcblxuICAgIGNvbnN0IGlzSGV4ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgPT09IHZvaWQgMFxuICAgICAgfHwgcHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbFxuICAgICAgfHwgcHJvcHMubW9kZWxWYWx1ZSA9PT0gJydcbiAgICAgIHx8IHByb3BzLm1vZGVsVmFsdWUuc3RhcnRzV2l0aCgnIycpXG4gICAgKVxuXG4gICAgY29uc3QgaXNPdXRwdXRIZXggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBmb3JjZUhleC52YWx1ZSAhPT0gbnVsbFxuICAgICAgICA/IGZvcmNlSGV4LnZhbHVlXG4gICAgICAgIDogaXNIZXgudmFsdWVcbiAgICApKVxuXG4gICAgY29uc3QgZm9ybUF0dHJzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgIHZhbHVlOiBtb2RlbC52YWx1ZVsgaXNPdXRwdXRIZXgudmFsdWUgPT09IHRydWUgPyAnaGV4JyA6ICdyZ2InIF1cbiAgICB9KSlcblxuICAgIGNvbnN0IGluamVjdEZvcm1JbnB1dCA9IHVzZUZvcm1JbmplY3QoZm9ybUF0dHJzKVxuXG4gICAgY29uc3QgaGFzQWxwaGEgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBmb3JjZUFscGhhLnZhbHVlICE9PSBudWxsXG4gICAgICAgID8gZm9yY2VBbHBoYS52YWx1ZVxuICAgICAgICA6IG1vZGVsLnZhbHVlLmEgIT09IHZvaWQgMFxuICAgICkpXG5cbiAgICBjb25zdCBjdXJyZW50QmdDb2xvciA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG1vZGVsLnZhbHVlLnJnYiB8fCAnIzAwMCdcbiAgICB9KSlcblxuICAgIGNvbnN0IGhlYWRlckNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgbGlnaHQgPSBtb2RlbC52YWx1ZS5hICE9PSB2b2lkIDAgJiYgbW9kZWwudmFsdWUuYSA8IDY1XG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IGx1bWlub3NpdHkobW9kZWwudmFsdWUpID4gMC40XG5cbiAgICAgIHJldHVybiAncS1jb2xvci1waWNrZXJfX2hlYWRlci1jb250ZW50J1xuICAgICAgICArIGAgcS1jb2xvci1waWNrZXJfX2hlYWRlci1jb250ZW50LS0keyBsaWdodCA/ICdsaWdodCcgOiAnZGFyaycgfWBcbiAgICB9KVxuXG4gICAgY29uc3Qgc3BlY3RydW1TdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBiYWNrZ3JvdW5kOiBgaHNsKCR7IG1vZGVsLnZhbHVlLmggfSwxMDAlLDUwJSlgXG4gICAgfSkpXG5cbiAgICBjb25zdCBzcGVjdHJ1bVBvaW50ZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB0b3A6IGAkeyAxMDAgLSBtb2RlbC52YWx1ZS52IH0lYCxcbiAgICAgIFsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnIF06IGAkeyBtb2RlbC52YWx1ZS5zIH0lYFxuICAgIH0pKVxuXG4gICAgY29uc3QgY29tcHV0ZWRQYWxldHRlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMucGFsZXR0ZSAhPT0gdm9pZCAwICYmIHByb3BzLnBhbGV0dGUubGVuZ3RoICE9PSAwXG4gICAgICAgID8gcHJvcHMucGFsZXR0ZVxuICAgICAgICA6IHBhbGV0dGVcbiAgICApKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1jb2xvci1waWNrZXInXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1jb2xvci1waWNrZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLWNvbG9yLXBpY2tlci0tc3F1YXJlIG5vLWJvcmRlci1yYWRpdXMnIDogJycpXG4gICAgICArIChwcm9wcy5mbGF0ID09PSB0cnVlID8gJyBxLWNvbG9yLXBpY2tlci0tZmxhdCBuby1zaGFkb3cnIDogJycpXG4gICAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1jb2xvci1waWNrZXItLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlXG4gICAgICAgID8geyAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyB9XG4gICAgICAgIDoge31cbiAgICApKVxuXG4gICAgY29uc3Qgc3BlY3RydW1EaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAvLyBpZiBlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgcmV0dXJuIFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgb25TcGVjdHJ1bVBhbixcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7IHByZXZlbnQ6IHRydWUsIHN0b3A6IHRydWUsIG1vdXNlOiB0cnVlIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2ID0+IHtcbiAgICAgIGNvbnN0IGxvY2FsTW9kZWwgPSBwYXJzZU1vZGVsKHYgfHwgcHJvcHMuZGVmYXVsdFZhbHVlKVxuICAgICAgaWYgKGxvY2FsTW9kZWwuaGV4ICE9PSBtb2RlbC52YWx1ZS5oZXgpIHtcbiAgICAgICAgbW9kZWwudmFsdWUgPSBsb2NhbE1vZGVsXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLmRlZmF1bHRWYWx1ZSwgdiA9PiB7XG4gICAgICBpZiAoIXByb3BzLm1vZGVsVmFsdWUgJiYgdikge1xuICAgICAgICBjb25zdCBsb2NhbE1vZGVsID0gcGFyc2VNb2RlbCh2KVxuICAgICAgICBpZiAobG9jYWxNb2RlbC5oZXggIT09IG1vZGVsLnZhbHVlLmhleCkge1xuICAgICAgICAgIG1vZGVsLnZhbHVlID0gbG9jYWxNb2RlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsIChyZ2IsIGNoYW5nZSkge1xuICAgICAgLy8gdXBkYXRlIGludGVybmFsbHlcbiAgICAgIG1vZGVsLnZhbHVlLmhleCA9IHJnYlRvSGV4KHJnYilcbiAgICAgIG1vZGVsLnZhbHVlLnJnYiA9IHJnYlRvU3RyaW5nKHJnYilcbiAgICAgIG1vZGVsLnZhbHVlLnIgPSByZ2IuclxuICAgICAgbW9kZWwudmFsdWUuZyA9IHJnYi5nXG4gICAgICBtb2RlbC52YWx1ZS5iID0gcmdiLmJcbiAgICAgIG1vZGVsLnZhbHVlLmEgPSByZ2IuYVxuXG4gICAgICBjb25zdCB2YWx1ZSA9IG1vZGVsLnZhbHVlWyBpc091dHB1dEhleC52YWx1ZSA9PT0gdHJ1ZSA/ICdoZXgnIDogJ3JnYicgXVxuXG4gICAgICAvLyBlbWl0IG5ldyB2YWx1ZVxuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWx1ZSlcbiAgICAgIGNoYW5nZSA9PT0gdHJ1ZSAmJiBlbWl0KCdjaGFuZ2UnLCB2YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZU1vZGVsICh2KSB7XG4gICAgICBjb25zdCBhbHBoYSA9IGZvcmNlQWxwaGEudmFsdWUgIT09IHZvaWQgMFxuICAgICAgICA/IGZvcmNlQWxwaGEudmFsdWVcbiAgICAgICAgOiAoXG4gICAgICAgICAgICBwcm9wcy5mb3JtYXRNb2RlbCA9PT0gJ2F1dG8nXG4gICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICA6IHByb3BzLmZvcm1hdE1vZGVsLmluZGV4T2YoJ2EnKSAhPT0gLTFcbiAgICAgICAgICApXG5cbiAgICAgIGlmICh0eXBlb2YgdiAhPT0gJ3N0cmluZycgfHwgdi5sZW5ndGggPT09IDAgfHwgdGVzdFBhdHRlcm4uYW55Q29sb3Iodi5yZXBsYWNlKC8gL2csICcnKSkgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoOiAwLFxuICAgICAgICAgIHM6IDAsXG4gICAgICAgICAgdjogMCxcbiAgICAgICAgICByOiAwLFxuICAgICAgICAgIGc6IDAsXG4gICAgICAgICAgYjogMCxcbiAgICAgICAgICBhOiBhbHBoYSA9PT0gdHJ1ZSA/IDEwMCA6IHZvaWQgMCxcbiAgICAgICAgICBoZXg6IHZvaWQgMCxcbiAgICAgICAgICByZ2I6IHZvaWQgMFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1vZGVsID0gdGV4dFRvUmdiKHYpXG5cbiAgICAgIGlmIChhbHBoYSA9PT0gdHJ1ZSAmJiBtb2RlbC5hID09PSB2b2lkIDApIHtcbiAgICAgICAgbW9kZWwuYSA9IDEwMFxuICAgICAgfVxuXG4gICAgICBtb2RlbC5oZXggPSByZ2JUb0hleChtb2RlbClcbiAgICAgIG1vZGVsLnJnYiA9IHJnYlRvU3RyaW5nKG1vZGVsKVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihtb2RlbCwgcmdiVG9Ic3YobW9kZWwpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZVNwZWN0cnVtIChsZWZ0LCB0b3AsIGNoYW5nZSkge1xuICAgICAgY29uc3QgcGFuZWwgPSBzcGVjdHJ1bVJlZi52YWx1ZVxuICAgICAgaWYgKHBhbmVsID09PSBudWxsKSByZXR1cm5cblxuICAgICAgY29uc3RcbiAgICAgICAgd2lkdGggPSBwYW5lbC5jbGllbnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gcGFuZWwuY2xpZW50SGVpZ2h0LFxuICAgICAgICByZWN0ID0gcGFuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgbGV0IHggPSBNYXRoLm1pbih3aWR0aCwgTWF0aC5tYXgoMCwgbGVmdCAtIHJlY3QubGVmdCkpXG5cbiAgICAgIGlmICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICB4ID0gd2lkdGggLSB4XG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHkgPSBNYXRoLm1pbihoZWlnaHQsIE1hdGgubWF4KDAsIHRvcCAtIHJlY3QudG9wKSksXG4gICAgICAgIHMgPSBNYXRoLnJvdW5kKDEwMCAqIHggLyB3aWR0aCksXG4gICAgICAgIHYgPSBNYXRoLnJvdW5kKDEwMCAqIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIC0oeSAvIGhlaWdodCkgKyAxKSkpLFxuICAgICAgICByZ2IgPSBoc3ZUb1JnYih7XG4gICAgICAgICAgaDogbW9kZWwudmFsdWUuaCxcbiAgICAgICAgICBzLFxuICAgICAgICAgIHYsXG4gICAgICAgICAgYTogaGFzQWxwaGEudmFsdWUgPT09IHRydWUgPyBtb2RlbC52YWx1ZS5hIDogdm9pZCAwXG4gICAgICAgIH0pXG5cbiAgICAgIG1vZGVsLnZhbHVlLnMgPSBzXG4gICAgICBtb2RlbC52YWx1ZS52ID0gdlxuICAgICAgdXBkYXRlTW9kZWwocmdiLCBjaGFuZ2UpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25IdWUgKHZhbCwgY2hhbmdlKSB7XG4gICAgICBjb25zdCBoID0gTWF0aC5yb3VuZCh2YWwpXG4gICAgICBjb25zdCByZ2IgPSBoc3ZUb1JnYih7XG4gICAgICAgIGgsXG4gICAgICAgIHM6IG1vZGVsLnZhbHVlLnMsXG4gICAgICAgIHY6IG1vZGVsLnZhbHVlLnYsXG4gICAgICAgIGE6IGhhc0FscGhhLnZhbHVlID09PSB0cnVlID8gbW9kZWwudmFsdWUuYSA6IHZvaWQgMFxuICAgICAgfSlcblxuICAgICAgbW9kZWwudmFsdWUuaCA9IGhcbiAgICAgIHVwZGF0ZU1vZGVsKHJnYiwgY2hhbmdlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSHVlQ2hhbmdlICh2YWwpIHtcbiAgICAgIG9uSHVlKHZhbCwgdHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk51bWVyaWNDaGFuZ2UgKHZhbHVlLCBmb3JtYXRNb2RlbCwgbWF4LCBldnQsIGNoYW5nZSkge1xuICAgICAgZXZ0ICE9PSB2b2lkIDAgJiYgc3RvcChldnQpXG5cbiAgICAgIGlmICghL15bMC05XSskLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICBjaGFuZ2UgPT09IHRydWUgJiYgcHJveHkuJGZvcmNlVXBkYXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbCA9IE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSlcblxuICAgICAgaWYgKHZhbCA8IDAgfHwgdmFsID4gbWF4KSB7XG4gICAgICAgIGNoYW5nZSA9PT0gdHJ1ZSAmJiBwcm94eS4kZm9yY2VVcGRhdGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcmdiID0ge1xuICAgICAgICByOiBmb3JtYXRNb2RlbCA9PT0gJ3InID8gdmFsIDogbW9kZWwudmFsdWUucixcbiAgICAgICAgZzogZm9ybWF0TW9kZWwgPT09ICdnJyA/IHZhbCA6IG1vZGVsLnZhbHVlLmcsXG4gICAgICAgIGI6IGZvcm1hdE1vZGVsID09PSAnYicgPyB2YWwgOiBtb2RlbC52YWx1ZS5iLFxuICAgICAgICBhOiBoYXNBbHBoYS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgID8gKGZvcm1hdE1vZGVsID09PSAnYScgPyB2YWwgOiBtb2RlbC52YWx1ZS5hKVxuICAgICAgICAgIDogdm9pZCAwXG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtYXRNb2RlbCAhPT0gJ2EnKSB7XG4gICAgICAgIGNvbnN0IGhzdiA9IHJnYlRvSHN2KHJnYilcbiAgICAgICAgbW9kZWwudmFsdWUuaCA9IGhzdi5oXG4gICAgICAgIG1vZGVsLnZhbHVlLnMgPSBoc3Yuc1xuICAgICAgICBtb2RlbC52YWx1ZS52ID0gaHN2LnZcbiAgICAgIH1cblxuICAgICAgdXBkYXRlTW9kZWwocmdiLCBjaGFuZ2UpXG5cbiAgICAgIGlmIChjaGFuZ2UgIT09IHRydWUgJiYgZXZ0Py50YXJnZXQuc2VsZWN0aW9uRW5kICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBldnQudGFyZ2V0LnNlbGVjdGlvbkVuZFxuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgZXZ0LnRhcmdldC5zZXRTZWxlY3Rpb25SYW5nZShpbmRleCwgaW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FZGl0b3JDaGFuZ2UgKGV2dCwgY2hhbmdlKSB7XG4gICAgICBsZXQgcmdiXG4gICAgICBjb25zdCBpbnAgPSBldnQudGFyZ2V0LnZhbHVlXG5cbiAgICAgIHN0b3AoZXZ0KVxuXG4gICAgICBpZiAodG9wVmlldy52YWx1ZSA9PT0gJ2hleCcpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlucC5sZW5ndGggIT09IChoYXNBbHBoYS52YWx1ZSA9PT0gdHJ1ZSA/IDkgOiA3KVxuICAgICAgICAgIHx8ICEvXiNbMC05QS1GYS1mXSskLy50ZXN0KGlucClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJnYiA9IGhleFRvUmdiKGlucClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgbW9kZWxcblxuICAgICAgICBpZiAoIWlucC5lbmRzV2l0aCgnKScpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoYXNBbHBoYS52YWx1ZSAhPT0gdHJ1ZSAmJiBpbnAuc3RhcnRzV2l0aCgncmdiKCcpKSB7XG4gICAgICAgICAgbW9kZWwgPSBpbnAuc3Vic3RyaW5nKDQsIGlucC5sZW5ndGggLSAxKS5zcGxpdCgnLCcpLm1hcChuID0+IHBhcnNlSW50KG4sIDEwKSlcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG1vZGVsLmxlbmd0aCAhPT0gM1xuICAgICAgICAgICAgfHwgIS9ecmdiXFwoWzAtOV17MSwzfSxbMC05XXsxLDN9LFswLTldezEsM31cXCkkLy50ZXN0KGlucClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhhc0FscGhhLnZhbHVlID09PSB0cnVlICYmIGlucC5zdGFydHNXaXRoKCdyZ2JhKCcpKSB7XG4gICAgICAgICAgbW9kZWwgPSBpbnAuc3Vic3RyaW5nKDUsIGlucC5sZW5ndGggLSAxKS5zcGxpdCgnLCcpXG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBtb2RlbC5sZW5ndGggIT09IDRcbiAgICAgICAgICAgIHx8ICEvXnJnYmFcXChbMC05XXsxLDN9LFswLTldezEsM30sWzAtOV17MSwzfSwoMHwwXFwuWzAtOV0rWzEtOV18MFxcLlsxLTldK3wxKVxcKSQvLnRlc3QoaW5wKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdiA9IHBhcnNlSW50KG1vZGVsWyBpIF0sIDEwKVxuICAgICAgICAgICAgaWYgKHYgPCAwIHx8IHYgPiAyNTUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGVsWyBpIF0gPSB2XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQobW9kZWxbIDMgXSlcbiAgICAgICAgICBpZiAodiA8IDAgfHwgdiA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIG1vZGVsWyAzIF0gPSB2XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2RlbFsgMCBdIDwgMCB8fCBtb2RlbFsgMCBdID4gMjU1XG4gICAgICAgICAgfHwgbW9kZWxbIDEgXSA8IDAgfHwgbW9kZWxbIDEgXSA+IDI1NVxuICAgICAgICAgIHx8IG1vZGVsWyAyIF0gPCAwIHx8IG1vZGVsWyAyIF0gPiAyNTVcbiAgICAgICAgICB8fCAoaGFzQWxwaGEudmFsdWUgPT09IHRydWUgJiYgKG1vZGVsWyAzIF0gPCAwIHx8IG1vZGVsWyAzIF0gPiAxKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJnYiA9IHtcbiAgICAgICAgICByOiBtb2RlbFsgMCBdLFxuICAgICAgICAgIGc6IG1vZGVsWyAxIF0sXG4gICAgICAgICAgYjogbW9kZWxbIDIgXSxcbiAgICAgICAgICBhOiBoYXNBbHBoYS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBtb2RlbFsgMyBdICogMTAwXG4gICAgICAgICAgICA6IHZvaWQgMFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhzdiA9IHJnYlRvSHN2KHJnYilcbiAgICAgIG1vZGVsLnZhbHVlLmggPSBoc3YuaFxuICAgICAgbW9kZWwudmFsdWUucyA9IGhzdi5zXG4gICAgICBtb2RlbC52YWx1ZS52ID0gaHN2LnZcblxuICAgICAgdXBkYXRlTW9kZWwocmdiLCBjaGFuZ2UpXG5cbiAgICAgIGlmIChjaGFuZ2UgIT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBldnQudGFyZ2V0LnNlbGVjdGlvbkVuZFxuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgZXZ0LnRhcmdldC5zZXRTZWxlY3Rpb25SYW5nZShpbmRleCwgaW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYWxldHRlUGljayAoY29sb3IpIHtcbiAgICAgIGNvbnN0IGRlZiA9IHBhcnNlTW9kZWwoY29sb3IpXG4gICAgICBjb25zdCByZ2IgPSB7IHI6IGRlZi5yLCBnOiBkZWYuZywgYjogZGVmLmIsIGE6IGRlZi5hIH1cblxuICAgICAgaWYgKHJnYi5hID09PSB2b2lkIDApIHtcbiAgICAgICAgcmdiLmEgPSBtb2RlbC52YWx1ZS5hXG4gICAgICB9XG5cbiAgICAgIG1vZGVsLnZhbHVlLmggPSBkZWYuaFxuICAgICAgbW9kZWwudmFsdWUucyA9IGRlZi5zXG4gICAgICBtb2RlbC52YWx1ZS52ID0gZGVmLnZcblxuICAgICAgdXBkYXRlTW9kZWwocmdiLCB0cnVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU3BlY3RydW1QYW4gKGV2dCkge1xuICAgICAgaWYgKGV2dC5pc0ZpbmFsKSB7XG4gICAgICAgIGNoYW5nZVNwZWN0cnVtKFxuICAgICAgICAgIGV2dC5wb3NpdGlvbi5sZWZ0LFxuICAgICAgICAgIGV2dC5wb3NpdGlvbi50b3AsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb25TcGVjdHJ1bUNoYW5nZShldnQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb25TcGVjdHJ1bUNoYW5nZSA9IHRocm90dGxlKFxuICAgICAgZXZ0ID0+IHsgY2hhbmdlU3BlY3RydW0oZXZ0LnBvc2l0aW9uLmxlZnQsIGV2dC5wb3NpdGlvbi50b3ApIH0sXG4gICAgICAyMFxuICAgIClcblxuICAgIGZ1bmN0aW9uIG9uU3BlY3RydW1DbGljayAoZXZ0KSB7XG4gICAgICBjaGFuZ2VTcGVjdHJ1bShcbiAgICAgICAgZXZ0LnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICBldnQucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkFjdGl2YXRlIChldnQpIHtcbiAgICAgIGNoYW5nZVNwZWN0cnVtKFxuICAgICAgICBldnQucGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgIGV2dC5wYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUVycm9ySWNvbiAodmFsKSB7XG4gICAgICAvLyB3ZSBNVVNUIGF2b2lkIHZ1ZSB0cmlnZ2VyaW5nIGEgcmVuZGVyLFxuICAgICAgLy8gc28gbWFudWFsbHkgY2hhbmdpbmcgdGhpc1xuICAgICAgaWYgKGVycm9ySWNvblJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBlcnJvckljb25SZWYudmFsdWUuJGVsLnN0eWxlLm9wYWNpdHkgPSB2YWwgPyAxIDogMFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFRvcFZpZXcgKHZhbCkge1xuICAgICAgdG9wVmlldy52YWx1ZSA9IHZhbFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhlYWRlciAoKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IFtdXG5cbiAgICAgIHByb3BzLm5vSGVhZGVyVGFicyAhPT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKFFUYWJzLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9faGVhZGVyLXRhYnMnLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IHRvcFZpZXcudmFsdWUsXG4gICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgYWxpZ246ICdqdXN0aWZ5JyxcbiAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IHNldFRvcFZpZXdcbiAgICAgICAgfSwgKCkgPT4gW1xuICAgICAgICAgIGgoUVRhYiwge1xuICAgICAgICAgICAgbGFiZWw6ICdIRVgnICsgKGhhc0FscGhhLnZhbHVlID09PSB0cnVlID8gJ0EnIDogJycpLFxuICAgICAgICAgICAgbmFtZTogJ2hleCcsXG4gICAgICAgICAgICByaXBwbGU6IGZhbHNlXG4gICAgICAgICAgfSksXG5cbiAgICAgICAgICBoKFFUYWIsIHtcbiAgICAgICAgICAgIGxhYmVsOiAnUkdCJyArIChoYXNBbHBoYS52YWx1ZSA9PT0gdHJ1ZSA/ICdBJyA6ICcnKSxcbiAgICAgICAgICAgIG5hbWU6ICdyZ2InLFxuICAgICAgICAgICAgcmlwcGxlOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICApXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtY29sb3ItcGlja2VyX19oZWFkZXItYmFubmVyIHJvdyBmbGV4LWNlbnRlciBuby13cmFwJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgnaW5wdXQnLCB7XG4gICAgICAgICAgICBjbGFzczogJ2ZpdCcsXG4gICAgICAgICAgICB2YWx1ZTogbW9kZWwudmFsdWVbIHRvcFZpZXcudmFsdWUgXSxcbiAgICAgICAgICAgIC4uLihlZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAgICAgICA/IHsgcmVhZG9ubHk6IHRydWUgfVxuICAgICAgICAgICAgICA6IHt9XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ3RvcEluJywge1xuICAgICAgICAgICAgICBvbklucHV0OiBldnQgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUVycm9ySWNvbihvbkVkaXRvckNoYW5nZShldnQpID09PSB0cnVlKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbkNoYW5nZTogc3RvcCxcbiAgICAgICAgICAgICAgb25CbHVyOiBldnQgPT4ge1xuICAgICAgICAgICAgICAgIG9uRWRpdG9yQ2hhbmdlKGV2dCwgdHJ1ZSkgPT09IHRydWUgJiYgcHJveHkuJGZvcmNlVXBkYXRlKClcbiAgICAgICAgICAgICAgICB1cGRhdGVFcnJvckljb24oZmFsc2UpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksXG5cbiAgICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgICByZWY6IGVycm9ySWNvblJlZixcbiAgICAgICAgICAgIGNsYXNzOiAncS1jb2xvci1waWNrZXJfX2Vycm9yLWljb24gYWJzb2x1dGUgbm8tcG9pbnRlci1ldmVudHMnLFxuICAgICAgICAgICAgbmFtZTogJHEuaWNvblNldC50eXBlLm5lZ2F0aXZlXG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9faGVhZGVyIHJlbGF0aXZlLXBvc2l0aW9uIG92ZXJmbG93LWhpZGRlbidcbiAgICAgIH0sIFtcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtY29sb3ItcGlja2VyX19oZWFkZXItYmcgYWJzb2x1dGUtZnVsbCcgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBoZWFkZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogY3VycmVudEJnQ29sb3IudmFsdWVcbiAgICAgICAgfSwgY2hpbGQpXG4gICAgICBdKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIGgoUVRhYlBhbmVscywge1xuICAgICAgICBtb2RlbFZhbHVlOiB2aWV3LnZhbHVlLFxuICAgICAgICBhbmltYXRlZDogdHJ1ZVxuICAgICAgfSwgKCkgPT4gW1xuICAgICAgICBoKFFUYWJQYW5lbCwge1xuICAgICAgICAgIGNsYXNzOiAncS1jb2xvci1waWNrZXJfX3NwZWN0cnVtLXRhYiBvdmVyZmxvdy1oaWRkZW4nLFxuICAgICAgICAgIG5hbWU6ICdzcGVjdHJ1bSdcbiAgICAgICAgfSwgZ2V0U3BlY3RydW1UYWIpLFxuXG4gICAgICAgIGgoUVRhYlBhbmVsLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXBhLW1kIHEtY29sb3ItcGlja2VyX190dW5lLXRhYicsXG4gICAgICAgICAgbmFtZTogJ3R1bmUnXG4gICAgICAgIH0sIGdldFR1bmVUYWIpLFxuXG4gICAgICAgIGgoUVRhYlBhbmVsLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9fcGFsZXR0ZS10YWInLFxuICAgICAgICAgIG5hbWU6ICdwYWxldHRlJ1xuICAgICAgICB9LCBnZXRQYWxldHRlVGFiKVxuICAgICAgXSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRWaWV3ICh2YWwpIHtcbiAgICAgIHZpZXcudmFsdWUgPSB2YWxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRGb290ZXIgKCkge1xuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9fZm9vdGVyIHJlbGF0aXZlLXBvc2l0aW9uIG92ZXJmbG93LWhpZGRlbidcbiAgICAgIH0sIFtcbiAgICAgICAgaChRVGFicywge1xuICAgICAgICAgIGNsYXNzOiAnYWJzb2x1dGUtZnVsbCcsXG4gICAgICAgICAgbW9kZWxWYWx1ZTogdmlldy52YWx1ZSxcbiAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICBhbGlnbjogJ2p1c3RpZnknLFxuICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogc2V0Vmlld1xuICAgICAgICB9LCAoKSA9PiBbXG4gICAgICAgICAgaChRVGFiLCB7XG4gICAgICAgICAgICBpY29uOiAkcS5pY29uU2V0LmNvbG9yUGlja2VyLnNwZWN0cnVtLFxuICAgICAgICAgICAgbmFtZTogJ3NwZWN0cnVtJyxcbiAgICAgICAgICAgIHJpcHBsZTogZmFsc2VcbiAgICAgICAgICB9KSxcblxuICAgICAgICAgIGgoUVRhYiwge1xuICAgICAgICAgICAgaWNvbjogJHEuaWNvblNldC5jb2xvclBpY2tlci50dW5lLFxuICAgICAgICAgICAgbmFtZTogJ3R1bmUnLFxuICAgICAgICAgICAgcmlwcGxlOiBmYWxzZVxuICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgaChRVGFiLCB7XG4gICAgICAgICAgICBpY29uOiAkcS5pY29uU2V0LmNvbG9yUGlja2VyLnBhbGV0dGUsXG4gICAgICAgICAgICBuYW1lOiAncGFsZXR0ZScsXG4gICAgICAgICAgICByaXBwbGU6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U3BlY3RydW1UYWIgKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcmVmOiBzcGVjdHJ1bVJlZixcbiAgICAgICAgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9fc3BlY3RydW0gbm9uLXNlbGVjdGFibGUgcmVsYXRpdmUtcG9zaXRpb24gY3Vyc29yLXBvaW50ZXInXG4gICAgICAgICAgKyAoZWRpdGFibGUudmFsdWUgIT09IHRydWUgPyAnIHJlYWRvbmx5JyA6ICcnKSxcbiAgICAgICAgc3R5bGU6IHNwZWN0cnVtU3R5bGUudmFsdWUsXG4gICAgICAgIC4uLihlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBvbkNsaWNrOiBvblNwZWN0cnVtQ2xpY2ssXG4gICAgICAgICAgICAgIG9uTW91c2Vkb3duOiBvbkFjdGl2YXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBoKCdkaXYnLCB7IHN0eWxlOiB7IHBhZGRpbmdCb3R0b206ICcxMDAlJyB9IH0pLFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1jb2xvci1waWNrZXJfX3NwZWN0cnVtLXdoaXRlIGFic29sdXRlLWZ1bGwnIH0pLFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1jb2xvci1waWNrZXJfX3NwZWN0cnVtLWJsYWNrIGFic29sdXRlLWZ1bGwnIH0pLFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdhYnNvbHV0ZScsXG4gICAgICAgICAgc3R5bGU6IHNwZWN0cnVtUG9pbnRlclN0eWxlLnZhbHVlXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBtb2RlbC52YWx1ZS5oZXggIT09IHZvaWQgMFxuICAgICAgICAgICAgPyBoKCdkaXYnLCB7IGNsYXNzOiAncS1jb2xvci1waWNrZXJfX3NwZWN0cnVtLWNpcmNsZScgfSlcbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICBdKVxuICAgICAgXVxuXG4gICAgICBjb25zdCBzbGlkZXJzID0gW1xuICAgICAgICBoKFFTbGlkZXIsIHtcbiAgICAgICAgICBjbGFzczogJ3EtY29sb3ItcGlja2VyX19odWUgbm9uLXNlbGVjdGFibGUnLFxuICAgICAgICAgIG1vZGVsVmFsdWU6IG1vZGVsLnZhbHVlLmgsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMzYwLFxuICAgICAgICAgIHRyYWNrU2l6ZTogJzhweCcsXG4gICAgICAgICAgaW5uZXJUcmFja0NvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIHNlbGVjdGlvbkNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIHJlYWRvbmx5OiBlZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSxcbiAgICAgICAgICB0aHVtYlBhdGgsXG4gICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiBvbkh1ZSxcbiAgICAgICAgICBvbkNoYW5nZTogb25IdWVDaGFuZ2VcbiAgICAgICAgfSlcbiAgICAgIF1cblxuICAgICAgaGFzQWxwaGEudmFsdWUgPT09IHRydWUgJiYgc2xpZGVycy5wdXNoKFxuICAgICAgICBoKFFTbGlkZXIsIHtcbiAgICAgICAgICBjbGFzczogJ3EtY29sb3ItcGlja2VyX19hbHBoYSBub24tc2VsZWN0YWJsZScsXG4gICAgICAgICAgbW9kZWxWYWx1ZTogbW9kZWwudmFsdWUuYSxcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgdHJhY2tTaXplOiAnOHB4JyxcbiAgICAgICAgICB0cmFja0NvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGlubmVyVHJhY2tDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBzZWxlY3Rpb25Db2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICB0cmFja0ltZzogYWxwaGFUcmFja0ltZyxcbiAgICAgICAgICByZWFkb25seTogZWRpdGFibGUudmFsdWUgIT09IHRydWUsXG4gICAgICAgICAgaGlkZVNlbGVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICB0aHVtYlBhdGgsXG4gICAgICAgICAgLi4uZ2V0Q2FjaGUoJ2FscGhhU2xpZGUnLCB7XG4gICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IHZhbHVlID0+IG9uTnVtZXJpY0NoYW5nZSh2YWx1ZSwgJ2EnLCAxMDApLFxuICAgICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IG9uTnVtZXJpY0NoYW5nZSh2YWx1ZSwgJ2EnLCAxMDAsIHZvaWQgMCwgdHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gW1xuICAgICAgICBoRGlyKCdkaXYnLCBkYXRhLCBjaGlsZCwgJ3NwZWMnLCBlZGl0YWJsZS52YWx1ZSwgKCkgPT4gc3BlY3RydW1EaXJlY3RpdmUudmFsdWUpLFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1jb2xvci1waWNrZXJfX3NsaWRlcnMnIH0sIHNsaWRlcnMpXG4gICAgICBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VHVuZVRhYiAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncm93IGl0ZW1zLWNlbnRlciBuby13cmFwJyB9LCBbXG4gICAgICAgICAgaCgnZGl2JywgJ1InKSxcbiAgICAgICAgICBoKFFTbGlkZXIsIHtcbiAgICAgICAgICAgIG1vZGVsVmFsdWU6IG1vZGVsLnZhbHVlLnIsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDI1NSxcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBlZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSxcbiAgICAgICAgICAgIC4uLmdldENhY2hlKCdyU2xpZGUnLCB7XG4gICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogdmFsdWUgPT4gb25OdW1lcmljQ2hhbmdlKHZhbHVlLCAncicsIDI1NSksXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiBvbk51bWVyaWNDaGFuZ2UodmFsdWUsICdyJywgMjU1LCB2b2lkIDAsIHRydWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGgoJ2lucHV0Jywge1xuICAgICAgICAgICAgdmFsdWU6IG1vZGVsLnZhbHVlLnIsXG4gICAgICAgICAgICBtYXhsZW5ndGg6IDMsXG4gICAgICAgICAgICByZWFkb25seTogZWRpdGFibGUudmFsdWUgIT09IHRydWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogc3RvcCxcbiAgICAgICAgICAgIC4uLmdldENhY2hlKCdySW4nLCB7XG4gICAgICAgICAgICAgIG9uSW5wdXQ6IGV2dCA9PiBvbk51bWVyaWNDaGFuZ2UoZXZ0LnRhcmdldC52YWx1ZSwgJ3InLCAyNTUsIGV2dCksXG4gICAgICAgICAgICAgIG9uQmx1cjogZXZ0ID0+IG9uTnVtZXJpY0NoYW5nZShldnQudGFyZ2V0LnZhbHVlLCAncicsIDI1NSwgZXZ0LCB0cnVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcblxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncm93IGl0ZW1zLWNlbnRlciBuby13cmFwJyB9LCBbXG4gICAgICAgICAgaCgnZGl2JywgJ0cnKSxcbiAgICAgICAgICBoKFFTbGlkZXIsIHtcbiAgICAgICAgICAgIG1vZGVsVmFsdWU6IG1vZGVsLnZhbHVlLmcsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDI1NSxcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgcmVhZG9ubHk6IGVkaXRhYmxlLnZhbHVlICE9PSB0cnVlLFxuICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ2dTbGlkZScsIHtcbiAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiB2YWx1ZSA9PiBvbk51bWVyaWNDaGFuZ2UodmFsdWUsICdnJywgMjU1KSxcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IG9uTnVtZXJpY0NoYW5nZSh2YWx1ZSwgJ2cnLCAyNTUsIHZvaWQgMCwgdHJ1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaCgnaW5wdXQnLCB7XG4gICAgICAgICAgICB2YWx1ZTogbW9kZWwudmFsdWUuZyxcbiAgICAgICAgICAgIG1heGxlbmd0aDogMyxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBlZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBzdG9wLFxuICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ2dJbicsIHtcbiAgICAgICAgICAgICAgb25JbnB1dDogZXZ0ID0+IG9uTnVtZXJpY0NoYW5nZShldnQudGFyZ2V0LnZhbHVlLCAnZycsIDI1NSwgZXZ0KSxcbiAgICAgICAgICAgICAgb25CbHVyOiBldnQgPT4gb25OdW1lcmljQ2hhbmdlKGV2dC50YXJnZXQudmFsdWUsICdnJywgMjU1LCBldnQsIHRydWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdyb3cgaXRlbXMtY2VudGVyIG5vLXdyYXAnIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCAnQicpLFxuICAgICAgICAgIGgoUVNsaWRlciwge1xuICAgICAgICAgICAgbW9kZWxWYWx1ZTogbW9kZWwudmFsdWUuYixcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMjU1LFxuICAgICAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBlZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSxcbiAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgIC4uLmdldENhY2hlKCdiU2xpZGUnLCB7XG4gICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogdmFsdWUgPT4gb25OdW1lcmljQ2hhbmdlKHZhbHVlLCAnYicsIDI1NSksXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiBvbk51bWVyaWNDaGFuZ2UodmFsdWUsICdiJywgMjU1LCB2b2lkIDAsIHRydWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGgoJ2lucHV0Jywge1xuICAgICAgICAgICAgdmFsdWU6IG1vZGVsLnZhbHVlLmIsXG4gICAgICAgICAgICBtYXhsZW5ndGg6IDMsXG4gICAgICAgICAgICByZWFkb25seTogZWRpdGFibGUudmFsdWUgIT09IHRydWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogc3RvcCxcbiAgICAgICAgICAgIC4uLmdldENhY2hlKCdiSW4nLCB7XG4gICAgICAgICAgICAgIG9uSW5wdXQ6IGV2dCA9PiBvbk51bWVyaWNDaGFuZ2UoZXZ0LnRhcmdldC52YWx1ZSwgJ2InLCAyNTUsIGV2dCksXG4gICAgICAgICAgICAgIG9uQmx1cjogZXZ0ID0+IG9uTnVtZXJpY0NoYW5nZShldnQudGFyZ2V0LnZhbHVlLCAnYicsIDI1NSwgZXZ0LCB0cnVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcblxuICAgICAgICBoYXNBbHBoYS52YWx1ZSA9PT0gdHJ1ZSA/IGgoJ2RpdicsIHsgY2xhc3M6ICdyb3cgaXRlbXMtY2VudGVyIG5vLXdyYXAnIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCAnQScpLFxuICAgICAgICAgIGgoUVNsaWRlciwge1xuICAgICAgICAgICAgbW9kZWxWYWx1ZTogbW9kZWwudmFsdWUuYSxcbiAgICAgICAgICAgIGNvbG9yOiAnZ3JleScsXG4gICAgICAgICAgICByZWFkb25seTogZWRpdGFibGUudmFsdWUgIT09IHRydWUsXG4gICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAuLi5nZXRDYWNoZSgnYVNsaWRlJywge1xuICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IHZhbHVlID0+IG9uTnVtZXJpY0NoYW5nZSh2YWx1ZSwgJ2EnLCAxMDApLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogdmFsdWUgPT4gb25OdW1lcmljQ2hhbmdlKHZhbHVlLCAnYScsIDEwMCwgdm9pZCAwLCB0cnVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoKCdpbnB1dCcsIHtcbiAgICAgICAgICAgIHZhbHVlOiBtb2RlbC52YWx1ZS5hLFxuICAgICAgICAgICAgbWF4bGVuZ3RoOiAzLFxuICAgICAgICAgICAgcmVhZG9ubHk6IGVkaXRhYmxlLnZhbHVlICE9PSB0cnVlLFxuICAgICAgICAgICAgb25DaGFuZ2U6IHN0b3AsXG4gICAgICAgICAgICAuLi5nZXRDYWNoZSgnYUluJywge1xuICAgICAgICAgICAgICBvbklucHV0OiBldnQgPT4gb25OdW1lcmljQ2hhbmdlKGV2dC50YXJnZXQudmFsdWUsICdhJywgMTAwLCBldnQpLFxuICAgICAgICAgICAgICBvbkJsdXI6IGV2dCA9PiBvbk51bWVyaWNDaGFuZ2UoZXZ0LnRhcmdldC52YWx1ZSwgJ2EnLCAxMDAsIGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSkgOiBudWxsXG4gICAgICBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFsZXR0ZVRhYiAoKSB7XG4gICAgICBjb25zdCBmbiA9IGNvbG9yID0+IGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLWNvbG9yLXBpY2tlcl9fY3ViZSBjb2wtYXV0bycsXG4gICAgICAgIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfSxcbiAgICAgICAgLi4uKFxuICAgICAgICAgIGVkaXRhYmxlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICA/IGdldENhY2hlKCdwYWxldHRlIycgKyBjb2xvciwge1xuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7IG9uUGFsZXR0ZVBpY2soY29sb3IpIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IHt9XG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3JvdyBpdGVtcy1jZW50ZXIgcS1jb2xvci1waWNrZXJfX3BhbGV0dGUtcm93cydcbiAgICAgICAgICAgICsgKGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gJyBxLWNvbG9yLXBpY2tlcl9fcGFsZXR0ZS1yb3dzLS1lZGl0YWJsZScgOiAnJylcbiAgICAgICAgfSwgY29tcHV0ZWRQYWxldHRlLnZhbHVlLm1hcChmbikpXG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gWyBnZXRDb250ZW50KCkgXVxuXG4gICAgICBpZiAocHJvcHMubmFtZSAhPT0gdm9pZCAwICYmIHByb3BzLmRpc2FibGUgIT09IHRydWUpIHtcbiAgICAgICAgaW5qZWN0Rm9ybUlucHV0KGNoaWxkLCAncHVzaCcpXG4gICAgICB9XG5cbiAgICAgIHByb3BzLm5vSGVhZGVyICE9PSB0cnVlICYmIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgIGdldEhlYWRlcigpXG4gICAgICApXG5cbiAgICAgIHByb3BzLm5vRm9vdGVyICE9PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGdldEZvb3RlcigpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUURpYWxvZyBmcm9tICcuLi9kaWFsb2cvUURpYWxvZy5qcydcbmltcG9ydCBRTWVudSBmcm9tICcuLi9tZW51L1FNZW51LmpzJ1xuXG5pbXBvcnQgdXNlQW5jaG9yLCB7IHVzZUFuY2hvclByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtYW5jaG9yL3VzZS1hbmNob3IuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGluamVjdFByb3AgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmluamVjdC1vYmotcHJvcC9pbmplY3Qtb2JqLXByb3AuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRUG9wdXBQcm94eScsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VBbmNob3JQcm9wcyxcblxuICAgIGJyZWFrcG9pbnQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDQ1MFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAnc2hvdycsICdoaWRlJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCwgYXR0cnMgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgcG9wdXBSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBicmVha3BvaW50ID0gY29tcHV0ZWQoKCkgPT4gcGFyc2VJbnQocHJvcHMuYnJlYWtwb2ludCwgMTApKVxuXG4gICAgY29uc3QgeyBjYW5TaG93IH0gPSB1c2VBbmNob3IoeyBzaG93aW5nIH0pXG5cbiAgICBmdW5jdGlvbiBnZXRUeXBlICgpIHtcbiAgICAgIHJldHVybiAkcS5zY3JlZW4ud2lkdGggPCBicmVha3BvaW50LnZhbHVlIHx8ICRxLnNjcmVlbi5oZWlnaHQgPCBicmVha3BvaW50LnZhbHVlXG4gICAgICAgID8gJ2RpYWxvZydcbiAgICAgICAgOiAnbWVudSdcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlID0gcmVmKGdldFR5cGUoKSlcblxuICAgIGNvbnN0IHBvcHVwUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICB0eXBlLnZhbHVlID09PSAnbWVudScgPyB7IG1heEhlaWdodDogJzk5dmgnIH0gOiB7fSlcbiAgICApXG5cbiAgICB3YXRjaCgoKSA9PiBnZXRUeXBlKCksIHZhbCA9PiB7XG4gICAgICBpZiAoc2hvd2luZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICB0eXBlLnZhbHVlID0gdmFsXG4gICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIG9uU2hvdyAoZXZ0KSB7XG4gICAgICBzaG93aW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgZW1pdCgnc2hvdycsIGV2dClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkhpZGUgKGV2dCkge1xuICAgICAgc2hvd2luZy52YWx1ZSA9IGZhbHNlXG4gICAgICB0eXBlLnZhbHVlID0gZ2V0VHlwZSgpXG4gICAgICBlbWl0KCdoaWRlJywgZXZ0KVxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIHNob3cgKGV2dCkgeyBjYW5TaG93KGV2dCkgPT09IHRydWUgJiYgcG9wdXBSZWYudmFsdWUuc2hvdyhldnQpIH0sXG4gICAgICBoaWRlIChldnQpIHsgcG9wdXBSZWYudmFsdWUuaGlkZShldnQpIH0sXG4gICAgICB0b2dnbGUgKGV2dCkgeyBwb3B1cFJlZi52YWx1ZS50b2dnbGUoZXZ0KSB9XG4gICAgfSlcblxuICAgIGluamVjdFByb3AocHJveHksICdjdXJyZW50Q29tcG9uZW50JywgKCkgPT4gKHtcbiAgICAgIHR5cGU6IHR5cGUudmFsdWUsXG4gICAgICByZWY6IHBvcHVwUmVmLnZhbHVlXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcmVmOiBwb3B1cFJlZixcbiAgICAgICAgLi4ucG9wdXBQcm9wcy52YWx1ZSxcbiAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgIG9uU2hvdyxcbiAgICAgICAgb25IaWRlXG4gICAgICB9XG5cbiAgICAgIGxldCBjb21wb25lbnRcblxuICAgICAgaWYgKHR5cGUudmFsdWUgPT09ICdkaWFsb2cnKSB7XG4gICAgICAgIGNvbXBvbmVudCA9IFFEaWFsb2dcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb21wb25lbnQgPSBRTWVudVxuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICB0YXJnZXQ6IHByb3BzLnRhcmdldCxcbiAgICAgICAgICBjb250ZXh0TWVudTogcHJvcHMuY29udGV4dE1lbnUsXG4gICAgICAgICAgbm9QYXJlbnRFdmVudDogdHJ1ZSxcbiAgICAgICAgICBzZXBhcmF0ZUNsb3NlUG9wdXA6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoY29tcG9uZW50LCBkYXRhLCBzbG90cy5kZWZhdWx0KVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRyYWdlbGVtZW50XCJcbiAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICBAZHJhZ3N0YXJ0PVwib25EcmFnU3RhcnQoJGV2ZW50KVwiPlxuICAgIDxzbG90PlxuICAgIDwvc2xvdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIC8vIERhdGEgdHlwZSB0aGF0IGlzIHNlbnQgKG1vbWVudCwgcHJvcGVydHksIGV0YylcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgZGVmYXVsdDogXCJcIlxuICAgICAgfSxcbiAgICAgIC8vIERhdGEgdG8gc2VuZCAobW9zdCBjb21tb25seSBhbiBlbGVtZW50IGlkKVxuICAgICAgZGF0YToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBkZWZhdWx0OiBcIlwiXG4gICAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gb25EcmFnU3RhcnQgKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShgdXBtdC8ke3Byb3BzLnR5cGV9YCwgcHJvcHMuZGF0YSlcbiAgICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuICAuZHJhZ2VsZW1lbnQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxEcmFnRWxlbWVudFxuICAgIHR5cGU9XCJjb2xvclwiXG4gICAgOmRhdGE9XCJjb2xvciA/PyAnJ1wiPlxuICAgIDxxLWJ0blxuICAgICAgc2l6ZT1cInhzXCJcbiAgICAgIGRlbnNlIGZsYXQgcm91bmRcbiAgICAgIGljb249XCJjb2xvcml6ZVwiPlxuICAgICAgPHEtcG9wdXAtcHJveHk+XG4gICAgICAgIDxxLWNvbG9yXG4gICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiAnMjQwcHgnfVwiXG4gICAgICAgICAgbm8taGVhZGVyXG4gICAgICAgICAgbm8tZm9vdGVyXG4gICAgICAgICAgOnBhbGV0dGU9XCJzdGFuZGFyZENvbG9yQXJyYXlcIlxuICAgICAgICAgIGRlZmF1bHQtdmlldz1cInBhbGV0dGVcIlxuICAgICAgICAgIHYtbW9kZWw9XCJjb2xvclwiXG4gICAgICAgICAgLz5cbiAgICAgIDwvcS1wb3B1cC1wcm94eT5cbiAgICA8L3EtYnRuPlxuICA8L0RyYWdFbGVtZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgRHJhZ0VsZW1lbnQgZnJvbSAnLi9EcmFnRWxlbWVudC52dWUnXG5cbiAgY29uc3QgY29sb3IgPSBkZWZpbmVNb2RlbDxzdHJpbmcgfCBudWxsPigpXG5cbiAgY29uc3Qgc3RhbmRhcmRDb2xvckFycmF5ID0gW1xuICAgICAgXCIjOTgwMDAwXCIsIFwiI2ZmMDAwMFwiLCBcIiNmZjk5MDBcIiwgXCIjZmZmZjAwXCIsIFwiIzAwZmYwMFwiLCBcIiMwMGZmZmZcIiwgXCIjNGE4NmU4XCIsIFwiIzAwMDBmZlwiLCBcIiM5OTAwZmZcIiwgXCIjZmYwMGZmXCIsXG4gICAgICBcIiNlNmI4YWZcIiwgXCIjZjRjY2NjXCIsIFwiI2ZjZTVjZFwiLCBcIiNmZmYyY2NcIiwgXCIjZDllYWQzXCIsIFwiI2QwZTBlM1wiLCBcIiNjOWRhZjhcIiwgXCIjY2ZlMmYzXCIsIFwiI2Q5ZDJlOVwiLCBcIiNlYWQxZGNcIixcbiAgICAgIFwiI2RkN2U2YlwiLCBcIiNlYTk5OTlcIiwgXCIjZjljYjljXCIsIFwiI2ZmZTU5OVwiLCBcIiNiNmQ3YThcIiwgXCIjYTJjNGM5XCIsIFwiI2E0YzJmNFwiLCBcIiM5ZmM1ZThcIiwgXCIjYjRhN2Q2XCIsIFwiI2Q1YTZiZFwiLFxuICAgICAgXCIjY2M0MTI1XCIsIFwiI2UwNjY2NlwiLCBcIiNmNmIyNmJcIiwgXCIjZmZkOTY2XCIsIFwiIzkzYzQ3ZFwiLCBcIiM3NmE1YWZcIiwgXCIjNmQ5ZWViXCIsIFwiIzZmYThkY1wiLCBcIiM4ZTdjYzNcIiwgXCIjYzI3YmEwXCIsXG4gICAgICBcIiNhNjFjMDBcIiwgXCIjY2MwMDAwXCIsIFwiI2U2OTEzOFwiLCBcIiNmMWMyMzJcIiwgXCIjNmFhODRmXCIsIFwiIzQ1ODE4ZVwiLCBcIiMzYzc4ZDhcIiwgXCIjM2Q4NWM2XCIsIFwiIzY3NGVhN1wiLCBcIiNhNjRkNzlcIixcbiAgICAgIFwiIzg1MjAwY1wiLCBcIiM5OTAwMDBcIiwgXCIjYjQ1ZjA2XCIsIFwiI2JmOTAwMFwiLCBcIiMzODc2MWRcIiwgXCIjMTM0ZjVjXCIsIFwiIzExNTVjY1wiLCBcIiMwYjUzOTRcIiwgXCIjMzUxYzc1XCIsIFwiIzc0MWI0N1wiLFxuICAgICAgXCIjNWIwZjAwXCIsIFwiIzY2MDAwMFwiLCBcIiM3ODNmMDRcIiwgXCIjN2Y2MDAwXCIsIFwiIzI3NGUxM1wiLCBcIiMwYzM0M2RcIiwgXCIjMWM0NTg3XCIsIFwiIzA3Mzc2M1wiLCBcIiMyMDEyNGRcIiwgXCIjNGMxMTMwXCIsXG4gICAgICBcIiMwMDAwMDBcIiwgXCIjNDM0MzQzXCIsIFwiIzY2NjY2NlwiLCBcIiM5OTk5OTlcIiwgXCIjYjdiN2I3XCIsIFwiI2NjY2NjY1wiLCBcIiNkOWQ5ZDlcIiwgXCIjZWZlZmVmXCIsIFwiI2YzZjNmM1wiLCBcIiNmZmZmZmZcIlxuICBdXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAucS1jb2xvci1waWNrZXJfX2N1YmUgIHtcbiAgICB3aWR0aDogOCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDglICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAucS1jb2xvci1waWNrZXJfX2N1YmU6bGFzdC1vZi10eXBlOjphZnRlciAge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGluc2V0OiAwOyAvKiBGaWxscyB0aGUgZW50aXJlIGRpdiAqL1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgLyogVGhlIFBvbHlnb24gUG9pbnRzIGZvciBhbiAnWCcgc2hhcGUgKi9cbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxMCUgMCUsIDAlIDEwJSwgNDAlIDUwJSwgMCUgOTAlLCAxMCUgMTAwJSwgNTAlIDYwJSwgOTAlIDEwMCUsIDEwMCUgOTAlLCA2MCUgNTAlLCAxMDAlIDEwJSwgOTAlIDAlLCA1MCUgNDAlKTtcbiAgfVxuICAucS1jb2xvci1waWNrZXJfX2N1YmU6aG92ZXIgIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQ7XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJkcm9wem9uZVwiXG4gICAgICAgQGRyb3A9XCJvbkRyb3AoJGV2ZW50KVwiXG4gICAgICAgQGRyYWdvdmVyLnByZXZlbnQ9XCJvbkRyYWdPdmVyKCRldmVudClcIlxuICAgICAgIEBkcmFnbGVhdmUucHJldmVudD1cIm9uRHJhZ0xlYXZlKCRldmVudClcIlxuICAgICAgIEBkcmFnZW50ZXIucHJldmVudD5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbiAgY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzKFsgJ2Fubm90YXRpb24nLCAnZGVzY3JpcHRlbScsICdzZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbW9tZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2plY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGV0YWNoZWRtb2RlbCcsICdzcGVjaWZpY3N5bmNocm9uaWNtb2RlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeScsICdnZW5lcmljc3luY2hyb25pY2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICAgIH0sXG4gICAgICAvLyBEYXRhIHR5cGVzIHRoYXQgYXJlIHN1cHBvc2VkIHRvIGJlIHZhbGlkLlxuICAgICAgLy8gU3BhY2Utc2VwYXJhdGVkIGxpc3Qgb2YgZGF0YS10eXBlc1xuICAgICAgdHlwZXM6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgZGVmYXVsdDogXCJcIlxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IHZhbGlkVHlwZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMudHlwZXMuc3BsaXQoLyArLylcbiAgfSlcblxuICBmdW5jdGlvbiBoYXNWYWxpZFR5cGUgKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgIGlmICghdmFsaWRUeXBlcy52YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAoIWV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgY29uc3QgdHlwZXMgPSBbIC4uLmV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcyBdXG4gICAgICBmb3IgKGNvbnN0IHQgb2YgdmFsaWRUeXBlcy52YWx1ZSkge1xuICAgICAgICAgIGlmICh0eXBlcy5pbmNsdWRlcyh0KSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnT3ZlciAoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgaWYgKGhhc1ZhbGlkVHlwZShldmVudCkgJiYgZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKCdpc19kcm9wcGFibGUnKVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnTGVhdmUgKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzX2Ryb3BwYWJsZScpXG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyb3AgKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgIG9uRHJhZ0xlYXZlKGV2ZW50KVxuICAgICAgY29uc3QgZHQgPSBldmVudC5kYXRhVHJhbnNmZXJcbiAgICAgIGlmICghZHQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8vIFdlIGhhbmRsZSBkcmFnIHR5cGVzIHRoYXQgYXJlIGluIHRoZSBmb3JtIHVwbXQvRUxFTUVOVF9OQU1FXG4gICAgICBmb3IgKGNvbnN0IGRyYWdUeXBlIG9mIGR0LnR5cGVzKSB7XG4gICAgICAgICAgaWYgKGRyYWdUeXBlLnN0YXJ0c1dpdGgoJ3VwbXQvJykpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IGR0LmdldERhdGEoZHJhZ1R5cGUpXG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW1UeXBlID0gZHJhZ1R5cGUucmVwbGFjZSgndXBtdC8nLCAnJylcbiAgICAgICAgICAgICAgZW1pdCgoaXRlbVR5cGUgYXMgYW55KSwgcGF5bG9hZCwgcHJvcHMuZGF0YSwgZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZT5cbiAgLmRyb3B6b25lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLmRyb3B6b25lLmVtcHR5LXBhZGRpbmcge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgcGFkZGluZzogNHB4O1xuICB9XG4gIC5kcm9wem9uZS5kZWZhdWx0LWhlaWdodCB7XG4gICAgICBtaW4taGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgfVxuICAuaXNfZHJvcHBhYmxlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICBib3JkZXI6IDFweCBkYXNoZWQgZ3JleTtcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJoIiwibW9kZWwiLCJ2IiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9yZW5kZXJTbG90IiwiX3VzZU1vZGVsIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfd2l0aE1vZGlmaWVycyJdLCJtYXBwaW5ncyI6Ijs7OztBQWFBLFNBQVMsa0JBQW1CLE9BQU8sS0FBSyxVQUFVO0FBQ2hELFFBQU0sTUFBTSxhQUFhLE9BQ3JCLENBQUUsUUFBUSxPQUFPLElBQ2pCLENBQUUsT0FBTyxRQUFRO0FBRXJCLFNBQU8sWUFBYSxRQUFRLE9BQU8sSUFBSyxDQUFDLElBQUssSUFBSyxDQUFDLENBQUUsR0FBSyxRQUFRLFNBQVUsS0FBSyxLQUFNLEVBQUU7QUFDNUY7QUFFQSxNQUFNLGNBQWMsQ0FBRSxRQUFRLFVBQVUsU0FBUyxTQUFTO0FBRTFELE1BQUEsUUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxZQUFZLENBQUUsUUFBUSxNQUFNO0FBQUEsSUFFNUIsT0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsV0FBVyxPQUFLLFlBQVksU0FBUyxDQUFDO0FBQUEsSUFDNUM7QUFBQSxJQUNJLFlBQVk7QUFBQSxNQUNWLE1BQU0sQ0FBRSxRQUFRLE1BQU07QUFBQSxNQUN0QixTQUFTO0FBQUEsSUFDZjtBQUFBLElBRUksVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBRVQsYUFBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLElBQ2YsZ0JBQWdCO0FBQUEsSUFDaEIsVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBRVgsZUFBZTtBQUFBLElBQ2YsY0FBYztBQUFBLElBRWQsaUJBQWlCO0FBQUEsSUFFakIsaUJBQWlCO0FBQUEsSUFDakIsYUFBYTtBQUFBLElBQ2IsUUFBUTtBQUFBLElBRVIsT0FBTztBQUFBLElBRVAsY0FBYztBQUFBLElBRWQsdUJBQXVCLENBQUUsVUFBVSxLQUFLO0FBQUEsRUFDNUM7QUFBQSxFQUVFLE1BQU8sT0FBTyxFQUFFLE9BQU8sS0FBSSxHQUFJO0FBQzdCLFVBQU0sRUFBRSxNQUFLLElBQUssbUJBQWtCO0FBQ3BDLFVBQU0sRUFBRSxHQUFFLElBQUs7QUFFZixVQUFNLEVBQUUsY0FBYyxtQkFBa0IsSUFBSyxRQUFPO0FBQ3BELFVBQU0sRUFBRSxjQUFjLHlCQUF3QixJQUFLLFFBQU87QUFDMUQsVUFBTSxFQUFFLGNBQWMsb0JBQW1CLElBQUssUUFBTztBQUVyRCxVQUFNLEVBQUUsaUJBQWlCLHNCQUFzQixlQUFlLG1CQUFrQixJQUFLLFdBQVU7QUFDL0YsVUFBTSxFQUFFLGlCQUFpQiw0QkFBNEIsZUFBZSx5QkFBd0IsSUFBSyxXQUFVO0FBRTNHLFVBQU0sVUFBVSxJQUFJLElBQUk7QUFDeEIsVUFBTSxhQUFhLElBQUksSUFBSTtBQUUzQixVQUFNLGVBQWUsSUFBSSxNQUFNLFVBQVU7QUFDekMsVUFBTSxhQUFhLElBQUksS0FBSztBQUM1QixVQUFNLFlBQVksSUFBSSxJQUFJO0FBQzFCLFVBQU0sYUFBYSxJQUFJLEtBQUs7QUFDNUIsVUFBTSxVQUFVLElBQUksS0FBSztBQUV6QixVQUFNLGNBQWMsQ0FBQTtBQUNwQixVQUFNLGlCQUFpQixJQUFJLENBQUM7QUFDNUIsVUFBTSxXQUFXLElBQUksS0FBSztBQUUxQixRQUFJLGVBQWUsTUFBTSxjQUFjLE1BQU07QUFFN0MsVUFBTSxXQUFXLFNBQVMsT0FBTztBQUFBLE1BQy9CLGFBQWEsTUFBTTtBQUFBLE1BQ25CLGFBQWEsTUFBTTtBQUFBLE1BQ25CLGVBQWUsTUFBTTtBQUFBLE1BQ3JCLGdCQUFnQjtBQUFBLFFBQ2QsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ2Q7QUFBQSxNQUNNLGlCQUFpQixNQUFNO0FBQUEsTUFDdkIsYUFBYSxNQUFNO0FBQUEsTUFDbkIsUUFBUSxNQUFNO0FBQUEsSUFDcEIsRUFBTTtBQUVGLFVBQU0sZUFBZSxTQUFTLE1BQU07QUFDbEMsWUFBTSxNQUFNLGVBQWU7QUFDM0IsWUFBTSxNQUFNLGFBQWE7QUFFekIsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsWUFBSSxZQUFhLENBQUMsRUFBRyxLQUFLLFVBQVUsS0FBSztBQUN2QyxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBRUEsYUFBTztBQUFBLElBQ1QsQ0FBQztBQUVELFVBQU0sYUFBYSxTQUFTLE1BQU07QUFDaEMsWUFBTSxRQUFRLFdBQVcsVUFBVSxPQUMvQixTQUNDLFFBQVEsVUFBVSxPQUFPLFlBQVksTUFBTTtBQUVoRCxhQUFPLDBCQUEyQixLQUFLO0FBQUEsSUFDekMsQ0FBQztBQUVELFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsMkNBQ2UsV0FBVyxVQUFVLE9BQU8sS0FBSyw0QkFDakMsTUFBTSxhQUFhLE9BQU8sYUFBYSxZQUFZLG9CQUMzQyxNQUFNLGtCQUFrQixPQUFPLFlBQVksUUFBUSx1QkFDaEQsTUFBTSxpQkFBaUIsT0FBTyxLQUFLLGtCQUMxRCxNQUFNLFVBQVUsT0FBTyxtQkFBbUIsT0FDMUMsTUFBTSxXQUFXLE9BQU8sZ0JBQWdCLE9BQ3hDLE1BQU0sWUFBWSxPQUFPLGtCQUFrQjtBQUFBLElBQ3BEO0FBRUksVUFBTSxhQUFhO0FBQUEsTUFBUyxNQUMxQiwyR0FDRSxXQUFXLFNBQ1YsTUFBTSxpQkFBaUIsU0FBUyxJQUFLLE1BQU0sWUFBWSxLQUFNO0FBQUEsSUFDdEU7QUFFSSxVQUFNLFdBQVcsU0FBUyxNQUN4QixNQUFNLGFBQWEsT0FDZixFQUFFLFdBQVcsVUFBVSxTQUFTLGdCQUFnQixRQUFRLGVBQWMsSUFDdEUsRUFBRSxXQUFXLFNBQVMsU0FBUyxlQUFlLFFBQVEsY0FBYSxDQUN4RTtBQUVELFVBQU0sUUFBUSxTQUFTLE1BQU0sTUFBTSxhQUFhLFFBQVEsR0FBRyxLQUFLLFFBQVEsSUFBSTtBQUM1RSxVQUFNLG1CQUFtQixTQUFTLE1BQU0sb0JBQW9CLFNBQVMsTUFBTSxVQUFVLElBQUk7QUFFekYsVUFBTSxPQUFPLFlBQVk7QUFFekIsVUFBTSxNQUFNLE1BQU0sWUFBWSxVQUFRO0FBQ3BDLGtCQUFZLEVBQUUsTUFBTSxZQUFZLE1BQU0sVUFBVSxLQUFJLENBQUU7QUFBQSxJQUN4RCxDQUFDO0FBRUQsVUFBTSxNQUFNLE1BQU0sZUFBZSxpQkFBaUI7QUFFbEQsYUFBUyxZQUFhLEVBQUUsTUFBTSxZQUFZLFNBQVEsR0FBSTtBQUNwRCxVQUFJLGFBQWEsVUFBVSxLQUFNO0FBRWpDLFVBQUksYUFBYSxRQUFRLE1BQU8scUJBQXFCLE1BQU8sUUFBUTtBQUNsRSxhQUFLLHFCQUFxQixJQUFJO0FBQUEsTUFDaEM7QUFFQSxVQUNFLGVBQWUsUUFDWixNQUFPLHFCQUFxQixNQUFPLFFBQ3RDO0FBQ0EsZ0JBQVEsYUFBYSxPQUFPLElBQUk7QUFDaEMscUJBQWEsUUFBUTtBQUFBLE1BQ3ZCO0FBQUEsSUFDRjtBQUVBLGFBQVMsb0JBQXFCO0FBQzVCLHlCQUFtQixNQUFNO0FBQ3ZCLGdCQUFRLFNBQVMsZ0JBQWdCO0FBQUEsVUFDL0IsT0FBTyxRQUFRLE1BQU07QUFBQSxVQUNyQixRQUFRLFFBQVEsTUFBTTtBQUFBLFFBQ2hDLENBQVM7QUFBQSxNQUNILENBQUM7QUFBQSxJQUNIO0FBRUEsYUFBUyxnQkFBaUIsU0FBUztBQUlqQyxVQUFJLFNBQVMsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFNO0FBRTVELFlBQ0UsT0FBTyxRQUFTLFNBQVMsTUFBTSxTQUFTLEdBQ3hDLGFBQWEsS0FBSztBQUFBLFFBQ2hCLFdBQVcsTUFBTyxTQUFTLE1BQU0sTUFBTTtBQUFBLFFBQ3ZDLE1BQU0sVUFBVSxPQUFPO0FBQUEsVUFDckIsV0FBVyxNQUFNO0FBQUEsVUFDakIsQ0FBQyxLQUFLLE9BQU8sT0FBTyxHQUFJLFNBQVMsTUFBTSxPQUFPLEtBQU07QUFBQSxVQUNwRDtBQUFBLFFBQ1o7QUFBQSxNQUNBLEdBQ1EsU0FBUyxPQUFPLEtBQUssYUFBYTtBQUVwQyxpQkFBVyxRQUFRO0FBR25CLGlCQUFXLFFBQVEseUJBQXlCLFlBQVk7QUFFeEQsY0FBUSxRQUFRLE9BQU8sU0FBUyxNQUFNLFlBQVksRUFBRTtBQUFBLElBQ3REO0FBRUEsYUFBUyxRQUFTLFNBQVMsU0FBUztBQUNsQyxZQUNFLFNBQVMsWUFBWSxVQUFVLFlBQVksUUFBUSxZQUFZLEtBQzNELFlBQVksS0FBSyxTQUFPLElBQUksS0FBSyxVQUFVLE9BQU8sSUFDbEQsTUFDSixTQUFTLFlBQVksVUFBVSxZQUFZLFFBQVEsWUFBWSxLQUMzRCxZQUFZLEtBQUssU0FBTyxJQUFJLEtBQUssVUFBVSxPQUFPLElBQ2xEO0FBRU4sVUFBSSxpQkFBaUIsTUFBTTtBQUl6Qix1QkFBZTtBQUFBLE1BQ2pCLFdBQ1MsVUFBVSxRQUFRO0FBQ3pCLGNBQ0UsUUFBUSxPQUFPLGdCQUFnQixPQUMvQixRQUFRLE9BQU8sZ0JBQWdCO0FBRWpDLFlBQUksaUJBQWlCLE1BQU07QUFDekIsdUJBQWEsWUFBWTtBQUN6Qix5QkFBZTtBQUFBLFFBQ2pCO0FBRUEsY0FBTSxNQUFNLGFBQWE7QUFDekIsY0FBTSxNQUFNLFlBQVk7QUFDeEIsY0FBTSxNQUFNLGFBQWE7QUFDekIsY0FBTSxNQUFNLFlBQVk7QUFFeEIsY0FDRSxTQUFTLE1BQU0sc0JBQXFCLEdBQ3BDLFNBQVMsTUFBTSxzQkFBcUI7QUFFdEMsY0FBTSxNQUFNLFlBQVksTUFBTSxhQUFhLE9BQ3ZDLGlCQUFrQixPQUFPLE1BQU0sT0FBTyxHQUFHLG1CQUFxQixPQUFPLFNBQVMsT0FBTyxTQUFTLE9BQU8sU0FBUyxDQUFDLFFBQy9HLGVBQWdCLE9BQU8sT0FBTyxPQUFPLElBQUksbUJBQXFCLE9BQU8sUUFBUSxPQUFPLFFBQVEsT0FBTyxRQUFRLENBQUM7QUFHaEgsNEJBQW9CLE1BQU07QUFDeEIseUJBQWUsV0FBVyxNQUFNO0FBQzlCLDJCQUFlO0FBQ2Ysa0JBQU0sTUFBTSxhQUFhO0FBQ3pCLGtCQUFNLE1BQU0sWUFBWTtBQUFBLFVBQzFCLEdBQUcsRUFBRTtBQUFBLFFBQ1AsQ0FBQztBQUFBLE1BQ0g7QUFFQSxVQUFJLFVBQVUsV0FBVyxVQUFVLE1BQU07QUFDdkMsc0JBQWMsT0FBTyxRQUFRLEtBQUs7QUFBQSxNQUNwQztBQUFBLElBQ0Y7QUFFQSxhQUFTLGNBQWUsSUFBSTtBQUMxQixZQUNFLEVBQUUsTUFBTSxPQUFPLEtBQUssT0FBTSxJQUFLLFdBQVcsTUFBTSxzQkFBcUIsR0FDckUsU0FBUyxHQUFHLHNCQUFxQjtBQUVuQyxVQUFJLFNBQVMsTUFBTSxhQUFhLE9BQU8sT0FBTyxNQUFNLE1BQU0sT0FBTyxPQUFPO0FBRXhFLFVBQUksU0FBUyxHQUFHO0FBQ2QsbUJBQVcsTUFBTyxNQUFNLGFBQWEsT0FBTyxjQUFjLFlBQVksS0FBTSxLQUFLLE1BQU0sTUFBTTtBQUM3RixxQkFBWTtBQUNaO0FBQUEsTUFDRjtBQUVBLGdCQUFVLE1BQU0sYUFBYSxPQUFPLE9BQU8sU0FBUyxTQUFTLE9BQU8sUUFBUTtBQUM1RSxVQUFJLFNBQVMsR0FBRztBQUNkLG1CQUFXLE1BQU8sTUFBTSxhQUFhLE9BQU8sY0FBYyxZQUFZLEtBQU0sS0FBSyxLQUFLLE1BQU07QUFDNUYscUJBQVk7QUFBQSxNQUNkO0FBQUEsSUFDRjtBQUVBLGFBQVMsZUFBZ0I7QUFDdkIsWUFBTSxVQUFVLFdBQVc7QUFDM0IsVUFBSSxZQUFZLEtBQU07QUFFdEIsWUFDRSxPQUFPLFFBQVEsc0JBQXFCLEdBQ3BDLE1BQU0sTUFBTSxhQUFhLE9BQU8sUUFBUSxZQUFZLEtBQUssSUFBSSxRQUFRLFVBQVU7QUFFakYsVUFBSSxNQUFNLFVBQVUsTUFBTTtBQUN4QixrQkFBVSxRQUFRLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxJQUFJLFFBQVEsY0FBYztBQUN0RSxtQkFBVyxRQUFRLE1BQU07QUFBQSxNQUMzQixPQUNLO0FBQ0gsa0JBQVUsUUFBUSxNQUFNO0FBQ3hCLG1CQUFXLFFBQVEsTUFBTSxhQUFhLE9BQ2xDLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxJQUFJLFFBQVEsZUFDdkMsS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLElBQUksUUFBUTtBQUFBLE1BQzVDO0FBQUEsSUFDRjtBQUVBLGFBQVMsYUFBYyxPQUFPO0FBQzVCLHNCQUFnQixRQUFRLGNBQWMsV0FBVztBQUNqRCxvQkFBYyxZQUFZLE1BQU07QUFDOUIsWUFBSSxjQUFjLEtBQUssTUFBTSxNQUFNO0FBQ2pDLHlCQUFjO0FBQUEsUUFDaEI7QUFBQSxNQUNGLEdBQUcsQ0FBQztBQUFBLElBQ047QUFFQSxhQUFTLGdCQUFpQjtBQUN4QixtQkFBYSxpQkFBaUIsVUFBVSxPQUFPLE9BQU8sbUJBQW1CLENBQUM7QUFBQSxJQUM1RTtBQUVBLGFBQVMsY0FBZTtBQUN0QixtQkFBYSxpQkFBaUIsVUFBVSxPQUFPLElBQUksT0FBTyxnQkFBZ0I7QUFBQSxJQUM1RTtBQUVBLGFBQVMsaUJBQWtCO0FBQ3pCLFVBQUksZ0JBQWdCLE1BQU07QUFDeEIsc0JBQWMsV0FBVztBQUN6QixzQkFBYztBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUVBLGFBQVMsY0FBZSxTQUFTLFFBQVE7QUFDdkMsWUFBTSxPQUFPLE1BQU0sVUFBVSxPQUFPO0FBQUEsUUFDbEMsV0FBVyxNQUFNO0FBQUEsUUFDakIsUUFBTSxPQUFPLFVBQVcsR0FBRyxXQUFXLEdBQUcsUUFBUSxvQkFBb0IsTUFBTTtBQUFBLE1BQ25GO0FBRU0sWUFBTSxNQUFNLEtBQUs7QUFDakIsVUFBSSxRQUFRLEVBQUc7QUFFZixVQUFJLFlBQVksSUFBSTtBQUNsQixzQkFBYyxLQUFNLENBQUMsQ0FBRTtBQUN2QixhQUFNLENBQUMsRUFBRyxNQUFLO0FBQ2YsZUFBTztBQUFBLE1BQ1Q7QUFDQSxVQUFJLFlBQVksSUFBSTtBQUNsQixzQkFBYyxLQUFNLE1BQU0sQ0FBQyxDQUFFO0FBQzdCLGFBQU0sTUFBTSxDQUFDLEVBQUcsTUFBSztBQUNyQixlQUFPO0FBQUEsTUFDVDtBQUVBLFlBQU0sVUFBVSxhQUFhLE1BQU0sYUFBYSxPQUFPLEtBQW1CO0FBQzFFLFlBQU0sVUFBVSxhQUFhLE1BQU0sYUFBYSxPQUFPLEtBQXFCO0FBRTVFLFlBQU0sTUFBTSxZQUFZLE9BQU8sS0FBTSxZQUFZLE9BQU8sSUFBSTtBQUU1RCxVQUFJLFFBQVEsUUFBUTtBQUNsQixjQUFNLFNBQVMsTUFBTSxVQUFVLE9BQU8sS0FBSztBQUMzQyxjQUFNLFFBQVEsS0FBSyxRQUFRLE1BQU0sSUFBSSxNQUFNO0FBRTNDLFlBQUksU0FBUyxLQUFLLFFBQVEsS0FBSztBQUM3Qix3QkFBYyxLQUFNLEtBQUssQ0FBRTtBQUMzQixlQUFNLEtBQUssRUFBRyxNQUFNLEVBQUUsZUFBZSxLQUFJLENBQUU7QUFBQSxRQUM3QztBQUVBLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUtBLFVBQU0sUUFBUSxTQUFTLE1BQ3JCLGlCQUFpQixVQUFVLE9BQ3ZCLEVBQUUsS0FBSyxhQUFXLEtBQUssSUFBSSxRQUFRLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxRQUFRO0FBQUUsY0FBUSxhQUFhLENBQUM7QUFBQSxJQUFJLEVBQUMsSUFFbEcsTUFBTSxhQUFhLE9BQ2YsRUFBRSxLQUFLLGFBQVcsUUFBUSxXQUFXLEtBQUssQ0FBQyxTQUFTLFFBQVE7QUFBRSxjQUFRLFlBQVk7QUFBQSxJQUFJLEVBQUMsSUFDdkYsRUFBRSxLQUFLLGFBQVcsUUFBUSxZQUFZLEtBQUssQ0FBQyxTQUFTLFFBQVE7QUFBRSxjQUFRLGFBQWE7QUFBQSxJQUFJLEVBQUMsQ0FFcEc7QUFFRCxhQUFTLGNBQWUsT0FBTztBQUM3QixZQUNFLFVBQVUsV0FBVyxPQUNyQixFQUFFLEtBQUssSUFBRyxJQUFLLE1BQU07QUFFdkIsVUFDRSxPQUFPLE9BQ1AsTUFBTSxJQUFJLE9BQU87QUFFbkIsWUFBTSxZQUFZLFFBQVEsTUFBTSxLQUFLO0FBRXJDLGFBQU8sWUFBWTtBQUVuQixVQUFJLE1BQU0sR0FBRztBQUNYLGVBQU87QUFDUCxjQUFNO0FBQUEsTUFDUixXQUVHLGNBQWMsTUFBTSxPQUFPLFNBQ3hCLGNBQWMsS0FBSyxPQUFPLE9BQzlCO0FBQ0EsZUFBTztBQUNQLGNBQU07QUFBQSxNQUNSO0FBRUEsVUFBSSxTQUFTLEdBQUc7QUFDaEIsbUJBQVk7QUFFWixhQUFPO0FBQUEsSUFDVDtBQUVBLGFBQVMsaUJBQWtCLGFBQWEsZUFBZTtBQUNyRCxpQkFBVyxPQUFPLGFBQWE7QUFDN0IsWUFBSSxZQUFhLEdBQUcsTUFBTyxjQUFlLEdBQUcsR0FBSTtBQUMvQyxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBRUEsYUFBTztBQUFBLElBQ1Q7QUFJQSxhQUFTLG9CQUFxQjtBQUM1QixVQUFJLE9BQU8sTUFBTSxZQUFZLEVBQUUsWUFBWSxHQUFHLFdBQVcsTUFBTSxTQUFTLEVBQUM7QUFFekUsWUFBTSxPQUFPLFlBQVksT0FBTyxTQUFPLElBQUksV0FBVyxjQUFjLFVBQVUsSUFBSTtBQUNsRixZQUFNLEVBQUUsTUFBTSxhQUFhLE9BQU8sYUFBWSxJQUFLLE1BQU07QUFDekQsWUFBTSxrQkFBa0IsT0FBTyxLQUFLLFlBQVksRUFBRTtBQUtsRCxpQkFBVyxPQUFPLE1BQU07QUFDdEIsY0FBTSxRQUFRLElBQUksVUFBVSxNQUFNLFVBQVU7QUFFNUMsWUFBSSxJQUFJLFVBQVcsVUFBVSxPQUFPLHNCQUFzQixjQUFjLEVBQUcsVUFBVSxNQUFNO0FBRXpGO0FBQUEsUUFDRjtBQUVBLGNBQU0sRUFBRSxNQUFNLE9BQU8sU0FBUyxLQUFJLElBQUssSUFBSSxVQUFVLGFBQWE7QUFDbEUsY0FBTSxXQUFXLE9BQU8sS0FBSyxLQUFLLEVBQUU7QUFFcEMsWUFBSSxVQUFVLE1BQU07QUFDbEIsY0FBSSxTQUFTLGFBQWE7QUFFeEI7QUFBQSxVQUNGO0FBRUEsY0FDRSxhQUFhLG1CQUNWLGlCQUFpQixjQUFjLEtBQUssTUFBTSxPQUM3QztBQUVBO0FBQUEsVUFDRjtBQUdBLGlCQUFPLElBQUksS0FBSztBQUNoQjtBQUFBLFFBQ0Y7QUFFQSxZQUFJLFNBQVMsTUFBTSxTQUFTLGFBQWE7QUFFdkM7QUFBQSxRQUNGO0FBRUEsWUFDRSxhQUFhLEtBQ1YsaUJBQWlCLE9BQU8sWUFBWSxNQUFNLE9BQzdDO0FBRUE7QUFBQSxRQUNGO0FBRUEsY0FBTSxXQUFXO0FBQUEsVUFDZixZQUFZLFFBQVE7QUFBQSxVQUNwQixXQUFXLGtCQUFrQjtBQUFBLFVBQzdCLFNBQVMsS0FBSyxTQUFTLEtBQUs7QUFBQSxRQUN0QztBQUVRLFlBQUksU0FBUyxhQUFhLFVBQVUsWUFBWTtBQUU5QyxpQkFBTyxJQUFJLEtBQUs7QUFDaEIsc0JBQVk7QUFDWjtBQUFBLFFBQ0YsV0FDUyxTQUFTLGVBQWUsVUFBVSxZQUFZO0FBRXJEO0FBQUEsUUFDRjtBQUVBLFlBQUksU0FBUyxZQUFZLFVBQVUsV0FBVztBQUU1QyxpQkFBTyxJQUFJLEtBQUs7QUFDaEIsc0JBQVk7QUFBQSxRQUNkLFdBQ1MsU0FBUyxjQUFjLFVBQVUsV0FBVztBQUVuRDtBQUFBLFFBQ0Y7QUFFQSxZQUFJLFNBQVMsVUFBVSxVQUFVLFNBQVM7QUFFeEMsaUJBQU8sSUFBSSxLQUFLO0FBQ2hCLHNCQUFZO0FBQUEsUUFDZDtBQUFBLE1BQ0Y7QUFFQSxVQUNFLFNBQVMsUUFDTixZQUFZLEtBQUssU0FBTyxJQUFJLGNBQWMsVUFBVSxJQUFJLEtBQUssVUFBVSxhQUFhLEtBQUssTUFBTSxNQUNsRztBQUVBLHVCQUFlO0FBQ2Y7QUFBQSxNQUNGO0FBRUEsa0JBQVksRUFBRSxNQUFNLFlBQVksS0FBSSxDQUFFO0FBQUEsSUFDeEM7QUFFQSxhQUFTLFVBQVcsR0FBRztBQUNyQix5QkFBa0I7QUFFbEIsVUFDRSxTQUFTLFVBQVUsUUFDaEIsUUFBUSxVQUFVLFFBQ2xCLEVBQUUsVUFDRixPQUFPLEVBQUUsT0FBTyxZQUFZLFlBQy9CO0FBQ0EsY0FBTSxNQUFNLEVBQUUsT0FBTyxRQUFRLFFBQVE7QUFJckMsWUFBSSxPQUFPLFFBQVEsTUFBTSxTQUFTLEdBQUcsTUFBTSxNQUFNO0FBQy9DLG1CQUFTLFFBQVE7QUFDakIscUJBQVcsVUFBVSxRQUFRLGNBQWMsR0FBRztBQUFBLFFBQ2hEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFQSxhQUFTLGFBQWM7QUFDckIsMkJBQXFCLE1BQU07QUFBRSxpQkFBUyxRQUFRO0FBQUEsTUFBTSxHQUFHLEVBQUU7QUFBQSxJQUMzRDtBQUVBLGFBQVMsbUJBQW9CO0FBQzNCLFVBQUksTUFBTSxzQkFBc0IsT0FBTztBQUNyQyxtQ0FBMkIsaUJBQWlCO0FBQUEsTUFDOUMsT0FDSztBQUNILGlDQUF3QjtBQUFBLE1BQzFCO0FBQUEsSUFDRjtBQUVBLGFBQVMsYUFBYztBQUNyQixVQUFJLGlCQUFpQixRQUFRO0FBQzNCLGNBQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxPQUFPLFVBQVUsZ0JBQWdCO0FBQ25FLHVCQUFlLE1BQU07QUFDbkIsa0JBQU87QUFDUCx5QkFBZTtBQUFBLFFBQ2pCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFQSxhQUFTLFlBQWEsU0FBUztBQUM3QixrQkFBWSxLQUFLLE9BQU87QUFDeEIscUJBQWU7QUFFZix3QkFBaUI7QUFHakIsVUFBSSxRQUFRLGNBQWMsVUFBVSxNQUFNLFdBQVcsUUFBUTtBQUUzRCxtQ0FBMkIsTUFBTTtBQUMvQixjQUFJLFdBQVcsVUFBVSxNQUFNO0FBQzdCLGtCQUFNLFFBQVEsYUFBYTtBQUMzQixrQkFBTSxTQUFTLFVBQVUsVUFBVSxVQUFVLFFBQVEsVUFBVSxLQUMzRCxZQUFZLEtBQUssU0FBTyxJQUFJLEtBQUssVUFBVSxLQUFLLElBQ2hEO0FBRUosc0JBQVUsY0FBYyxPQUFPLFFBQVEsS0FBSztBQUFBLFVBQzlDO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSCxPQUVLO0FBRUgsbUJBQVU7QUFFVixZQUFJLFFBQVEsVUFBVSxjQUFjLFVBQVUsTUFBTTtBQUNsRCwyQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUEsYUFBUyxjQUFlLFNBQVM7QUFDL0Isa0JBQVksT0FBTyxZQUFZLFFBQVEsT0FBTyxHQUFHLENBQUM7QUFDbEQscUJBQWU7QUFFZix3QkFBaUI7QUFFakIsVUFBSSxpQkFBaUIsVUFBVSxRQUFRLGNBQWMsUUFBUTtBQUUzRCxZQUFJLFlBQVksTUFBTSxTQUFPLElBQUksY0FBYyxNQUFNLE1BQU0sTUFBTTtBQUMvRCx1QkFBWTtBQUFBLFFBQ2Q7QUFHQSx5QkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFFQSxVQUFNLFFBQVE7QUFBQSxNQUNaO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFFQTtBQUFBLE1BQ0E7QUFBQSxNQUVBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUVBLG1CQUFtQjtBQUFBO0FBQUEsSUFDekI7QUFFSSxZQUFRLFNBQVMsS0FBSztBQUV0QixhQUFTLFVBQVc7QUFDbEIsdUJBQWlCLFFBQVEsYUFBYSxZQUFZO0FBQ2xELHFCQUFjO0FBQ2QscUJBQVk7QUFBQSxJQUNkO0FBRUEsUUFBSSxpQkFBaUI7QUFFckIsb0JBQWdCLE9BQU87QUFFdkIsa0JBQWMsTUFBTTtBQUNsQix3QkFBa0IsaUJBQWlCO0FBQ25DLGNBQU87QUFBQSxJQUNULENBQUM7QUFFRCxnQkFBWSxNQUFNO0FBQ2hCLFVBQUksb0JBQW9CLE1BQU07QUFDNUIsbUJBQVU7QUFDVix1QkFBZTtBQUNmLHlCQUFnQjtBQUFBLE1BQ2xCO0FBRUEsd0JBQWlCO0FBQUEsSUFDbkIsQ0FBQztBQUVELFdBQU8sTUFBTTtBQUNYLGFBQU8sRUFBRSxPQUFPO0FBQUEsUUFDZCxLQUFLO0FBQUEsUUFDTCxPQUFPLFFBQVE7QUFBQSxRQUNmLE1BQU07QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLE1BQ1IsR0FBUztBQUFBLFFBQ0QsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLGdCQUFlLENBQUU7QUFBQSxRQUVoRCxFQUFFLE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLE9BQU8sV0FBVztBQUFBLFVBQ2xCLFVBQVU7QUFBQSxRQUNwQixHQUFXLE1BQU0sTUFBTSxPQUFPLENBQUM7QUFBQSxRQUV2QixFQUFFLE9BQU87QUFBQSxVQUNQLE9BQU8sNERBQ0YsVUFBVSxVQUFVLE9BQU8sS0FBSztBQUFBLFVBQ3JDLE1BQU0sTUFBTSxZQUFZLEdBQUcsUUFBUSxLQUFNLE1BQU0sYUFBYSxPQUFPLE9BQU8sTUFBTTtBQUFBLFVBQ2hGLG9CQUFvQjtBQUFBLFVBQ3BCLHFCQUFxQjtBQUFBLFVBQ3JCLGtCQUFrQjtBQUFBLFVBQ2xCLHFCQUFxQjtBQUFBLFVBQ3JCLG1CQUFtQjtBQUFBLFFBQzdCLENBQVM7QUFBQSxRQUVELEVBQUUsT0FBTztBQUFBLFVBQ1AsT0FBTyw2REFDRixXQUFXLFVBQVUsT0FBTyxLQUFLO0FBQUEsVUFDdEMsTUFBTSxNQUFNLGFBQWEsR0FBRyxRQUFRLEtBQU0sTUFBTSxhQUFhLE9BQU8sU0FBUyxPQUFPO0FBQUEsVUFDcEYsb0JBQW9CO0FBQUEsVUFDcEIscUJBQXFCO0FBQUEsVUFDckIsa0JBQWtCO0FBQUEsVUFDbEIscUJBQXFCO0FBQUEsVUFDckIsbUJBQW1CO0FBQUEsUUFDN0IsQ0FBUztBQUFBLE1BQ1QsQ0FBTztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0YsQ0FBQztBQzNxQkQsSUFBSSxLQUFLO0FBRUcsTUFBQyxjQUFjLENBQUUsU0FBUyxTQUFTO0FBRW5DLE1BQUMsY0FBYztBQUFBLEVBQ3pCLE1BQU07QUFBQSxFQUNOLE9BQU8sQ0FBRSxRQUFRLE1BQU07QUFBQSxFQUV2QixPQUFPLENBQUUsU0FBUyxNQUFNO0FBQUEsRUFDeEIsV0FBVztBQUFBLEVBRVgsTUFBTTtBQUFBLElBQ0osTUFBTSxDQUFFLFFBQVEsTUFBTTtBQUFBLElBQ3RCLFNBQVMsTUFBTSxLQUFNLElBQUk7QUFBQSxFQUM3QjtBQUFBLEVBRUUsUUFBUTtBQUFBLEVBRVIsVUFBVSxDQUFFLFFBQVEsTUFBTTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxFQUVULGNBQWM7QUFBQSxFQUVkLFFBQVE7QUFBQSxJQUNOLE1BQU0sQ0FBRSxTQUFTLE1BQU07QUFBQSxJQUN2QixTQUFTO0FBQUEsRUFDYjtBQUNBO0FBRWUsU0FBQSxPQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVc7QUFDdEQsUUFBTSxRQUFRLE9BQU8sU0FBUyxhQUFhO0FBQzNDLE1BQUksVUFBVSxlQUFlO0FBQzNCLFlBQVEsTUFBTSxxREFBcUQ7QUFDbkUsV0FBTztBQUFBLEVBQ1Q7QUFFQSxRQUFNLEVBQUUsTUFBSyxJQUFLLG1CQUFrQjtBQUVwQyxRQUFNLGdCQUFnQixJQUFJLElBQUk7QUFDOUIsUUFBTSxVQUFVLElBQUksSUFBSTtBQUN4QixRQUFNLGtCQUFrQixJQUFJLElBQUk7QUFFaEMsUUFBTSxTQUFTLFNBQVMsTUFDdEIsTUFBTSxZQUFZLFFBQVEsTUFBTSxXQUFXLFFBQ3ZDLFFBQ0EsT0FBTztBQUFBLElBQ1AsRUFBRSxVQUFVLENBQUUsSUFBSSxFQUFFLEdBQUksT0FBTyxLQUFJO0FBQUEsSUFDbkMsTUFBTSxXQUFXLE9BQU8sQ0FBQSxJQUFLLE1BQU07QUFBQSxFQUMzQyxDQUNHO0FBRUQsUUFBTSxXQUFXLFNBQVMsTUFBTSxNQUFNLGFBQWEsVUFBVSxNQUFNLElBQUk7QUFFdkUsUUFBTSxVQUFVO0FBQUEsSUFBUyxNQUN2Qix1RUFFRSxTQUFTLFVBQVUsT0FFYixvQkFDRyxNQUFNLFNBQVMsTUFBTSxjQUFjLE1BQU0sTUFBTSxTQUFTLE1BQU0sY0FBYyxPQUM1RSxNQUFNLFNBQVMsTUFBTSxjQUFjLFNBQVUsTUFBTSxTQUFTLE1BQU0sV0FBVyxLQUFNLE9BQ25GLE1BQU0sU0FBUyxNQUFNLGdCQUFnQixPQUFRLE1BQU0sU0FBUyxNQUFNLGFBQWEsS0FBTSxNQUUxRix1QkFFSCxNQUFNLFFBQVEsTUFBTSxTQUFTLE1BQU0sU0FBUyxNQUFNLGdCQUFnQixRQUFRLGlCQUFpQixPQUMzRixNQUFNLFdBQVcsUUFBUSxNQUFNLFNBQVMsTUFBTSxXQUFXLE9BQU8sb0JBQW9CLE9BQ3BGLE1BQU0sWUFBWSxPQUFPLGNBQWMsOENBQ3ZDLGNBQWMsU0FBUyxVQUFVLFVBQVUsUUFBUTtBQUFBLEVBQzFEO0FBRUUsUUFBTSxhQUFhO0FBQUEsSUFBUyxNQUMxQiw4RkFDRyxNQUFNLFNBQVMsTUFBTSxnQkFBZ0IsT0FBTyx1Q0FBdUMsYUFDbkYsTUFBTSxpQkFBaUIsU0FBUyxJQUFLLE1BQU0sWUFBWSxLQUFNO0FBQUEsRUFDcEU7QUFFRSxRQUFNLFdBQVcsU0FBUyxNQUV0QixNQUFNLFlBQVksUUFDZixNQUFNLFNBQVMsVUFBVSxRQUN4QixTQUFTLFVBQVUsU0FBUyxNQUFNLGFBQWEsVUFBVSxPQUUzRCxLQUNBLE1BQU0sWUFBWSxDQUN2QjtBQUVELFdBQVMsUUFBUyxHQUFHLFVBQVU7QUFDN0IsUUFBSSxhQUFhLFFBQVEsR0FBRyxnQkFBZ0IsTUFBTTtBQUNoRCxvQkFBYyxPQUFPLE1BQUs7QUFBQSxJQUM1QjtBQUVBLFFBQUksTUFBTSxZQUFZLE1BQU07QUFFMUIsVUFBSSxXQUFXLGNBQWMsVUFBVSxNQUFNO0FBQzNDLHVCQUFlLENBQUM7QUFBQSxNQUNsQjtBQUNBO0FBQUEsSUFDRjtBQUdBLFFBQUksY0FBYyxRQUFRO0FBQ3hCLFlBQU0sWUFBWSxFQUFFLE1BQU0sTUFBTSxLQUFJLENBQUU7QUFDdEMsV0FBSyxTQUFTLENBQUM7QUFDZjtBQUFBLElBQ0Y7QUFFQSxRQUFJLFVBQVUsY0FBYyxVQUFVLE1BQU07QUFDMUMsWUFBTSxLQUFLLENBQUMsT0FBTyxPQUFPO0FBSXhCLFlBQUk7QUFDSixjQUFNLFFBQVEsS0FBSyxPQUFPLFVBQVUsWUFBWSxLQUFLLElBQUksTUFBTSxFQUFFLE1BQU0sT0FDbEUsTUFBTSxvQkFBb0IsSUFBRyxJQUM5QjtBQUVKLGVBQU8sVUFBVSxxQkFBcUIsR0FBRyxFQUFFLEdBQUcsTUFBTSxtQkFBbUIsS0FBSSxDQUFFLEVBQzFFLE1BQU0sU0FBTztBQUFFLHNCQUFZO0FBQUEsUUFBSSxDQUFDLEVBQ2hDLEtBQUssZUFBYTtBQUNqQixjQUFJLFVBQVUsTUFBTSxtQkFBbUI7QUFDckMsa0JBQU0sb0JBQW9CO0FBSzFCLGdCQUNFLGNBQWMsV0FDWixjQUFjLFVBQ1YsVUFBVSxTQUFTLFdBQVcsOEJBQThCLE1BQU0sT0FFeEU7QUFDQSxvQkFBTSxZQUFZLEVBQUUsTUFBTSxNQUFNLEtBQUksQ0FBRTtBQUFBLFlBQ3hDO0FBQUEsVUFDRjtBQUVBLGNBQUksS0FBSyxzQkFBc0IsTUFBTTtBQUNuQyxtQkFBTyxjQUFjLFNBQVMsUUFBUSxPQUFPLFNBQVMsSUFBSTtBQUFBLFVBQzVEO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDTDtBQUVBLFdBQUssU0FBUyxHQUFHLEVBQUU7QUFDbkIsUUFBRSxxQkFBcUIsUUFBUSxHQUFFO0FBRWpDO0FBQUEsSUFDRjtBQUVBLFNBQUssU0FBUyxDQUFDO0FBQUEsRUFDakI7QUFFQSxXQUFTLFVBQVcsR0FBRztBQUNyQixRQUFJLFVBQVUsR0FBRyxDQUFFLElBQUksRUFBRSxDQUFFLEdBQUc7QUFDNUIsY0FBUSxHQUFHLElBQUk7QUFBQSxJQUNqQixXQUVFLGdCQUFnQixDQUFDLE1BQU0sUUFDcEIsRUFBRSxXQUFXLE1BQ2IsRUFBRSxXQUFXLE1BQ2IsRUFBRSxXQUFXLFFBQ2IsRUFBRSxZQUFZLE1BQ2pCO0FBQ0EsWUFBTSxjQUFjLEVBQUUsU0FBUyxNQUFNLEdBQUcsTUFBTSxRQUFRLGVBQWUsQ0FBQztBQUFBLElBQ3hFO0FBRUEsU0FBSyxXQUFXLENBQUM7QUFBQSxFQUNuQjtBQUVBLFdBQVMsYUFBYztBQUNyQixVQUNFLFNBQVMsTUFBTSxTQUFTLE1BQU0saUJBQzlCLFVBQVUsQ0FBQSxHQUNWLFlBQVksRUFBRSxPQUFPO0FBQUEsTUFDbkIsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0w7QUFBQSxRQUNBLE1BQU0sU0FBUyxNQUFNO0FBQUEsTUFDL0I7QUFBQSxJQUNBLENBQU87QUFFSCxVQUFNLFNBQVMsVUFBVSxRQUFRO0FBQUEsTUFDL0IsRUFBRSxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxNQUFNLE1BQU07QUFBQSxNQUNwQixDQUFPO0FBQUEsSUFDUDtBQUVJLFVBQU0sVUFBVSxVQUFVLFFBQVE7QUFBQSxNQUNoQyxFQUFFLE9BQU8sRUFBRSxPQUFPLGVBQWMsR0FBSSxNQUFNLEtBQUs7QUFBQSxJQUNyRDtBQUVJLFVBQU0sVUFBVSxTQUFTLFFBQVE7QUFBQSxNQUMvQixNQUFNLGNBQWMsU0FDaEIsRUFBRSxPQUFPO0FBQUEsUUFDVCxPQUFPO0FBQUEsUUFDUCxPQUFPLE1BQU0sVUFBVSxPQUNuQixNQUFNLFFBQ047QUFBQSxRQUNKLE1BQU0sTUFBTTtBQUFBLE1BQ3RCLENBQVMsSUFDQyxFQUFFLE9BQU87QUFBQSxRQUNULE9BQU8sa0JBQ0YsTUFBTSxVQUFVLE9BQU8sU0FBVSxNQUFNLEtBQUssS0FBTTtBQUFBLE1BQ2pFLENBQVM7QUFBQSxJQUNUO0FBRUksZUFBVyxRQUFRLFFBQVEsS0FBSyxTQUFTO0FBRXpDLFVBQU0sT0FBTztBQUFBLE1BQ1gsRUFBRSxPQUFPLEVBQUUsT0FBTyxrQkFBa0IsVUFBVSxJQUFJLEtBQUssZUFBZTtBQUFBLE1BQ3RFLEVBQUUsT0FBTyxFQUFFLE9BQU8sV0FBVyxNQUFLLEdBQUksV0FBVyxNQUFNLFNBQVMsT0FBTyxDQUFDO0FBQUEsSUFDOUU7QUFFSSxlQUFXLFNBQVMsS0FBSyxLQUFLLFNBQVM7QUFFdkMsV0FBTztBQUFBLEVBQ1Q7QUFFQSxRQUFNLFVBQVU7QUFBQSxJQUNkLE1BQU0sU0FBUyxNQUFNLE1BQU0sSUFBSTtBQUFBLElBQy9CO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBRUUsa0JBQWdCLE1BQU07QUFDcEIsVUFBTSxjQUFjLE9BQU87QUFBQSxFQUM3QixDQUFDO0FBRUQsWUFBVSxNQUFNO0FBQ2QsVUFBTSxZQUFZLE9BQU87QUFBQSxFQUMzQixDQUFDO0FBRUQsV0FBUyxVQUFXLEtBQUssWUFBWTtBQUNuQyxVQUFNLE9BQU87QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLE9BQU8sUUFBUTtBQUFBLE1BQ2YsVUFBVSxTQUFTO0FBQUEsTUFDbkIsTUFBTTtBQUFBLE1BQ04saUJBQWlCLFNBQVMsVUFBVSxPQUFPLFNBQVM7QUFBQSxNQUNwRCxpQkFBaUIsTUFBTSxZQUFZLE9BQU8sU0FBUztBQUFBLE1BQ25EO0FBQUEsTUFDQTtBQUFBLE1BQ0EsR0FBRztBQUFBLElBQ1Q7QUFFSSxXQUFPO0FBQUEsTUFDTCxFQUFFLEtBQUssTUFBTSxZQUFZO0FBQUEsTUFDekIsQ0FBRSxDQUFFLFFBQVEsT0FBTyxLQUFLLENBQUU7QUFBQSxJQUNoQztBQUFBLEVBQ0U7QUFFQSxTQUFPLEVBQUUsV0FBVyxNQUFLO0FBQzNCO0FDdFFBLE1BQUEsT0FBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsRUFFUCxPQUFPO0FBQUEsRUFFUCxNQUFPLE9BQU8sRUFBRSxPQUFPLEtBQUksR0FBSTtBQUM3QixVQUFNLEVBQUUsVUFBUyxJQUFLLE9BQU8sT0FBTyxPQUFPLElBQUk7QUFDL0MsV0FBTyxNQUFNLFVBQVUsS0FBSztBQUFBLEVBQzlCO0FBQ0YsQ0FBQztBQ1BELFNBQVMsU0FBVSxLQUFLO0FBSXRCLFFBQU0sT0FBTyxDQUFFLE1BQU0sR0FBRyxFQUFHO0FBRTNCLE1BQUksT0FBTyxRQUFRLFlBQVksSUFBSSxRQUFRO0FBQ3pDLFFBQUksTUFBTSxHQUFHLEVBQUUsUUFBUSxDQUFDLEtBQUssVUFBVTtBQUNyQyxZQUFNLElBQUksV0FBVyxHQUFHO0FBQ3hCLFlBQU0sS0FBTSxLQUFNLElBQUk7QUFBQSxJQUN4QixDQUFDO0FBQUEsRUFDSDtBQUVBLFNBQU87QUFDVDtBQUVBLE1BQUEsYUFBZTtBQUFBLEVBRVg7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUVOLFlBQWEsSUFBSSxFQUFFLE9BQU8sS0FBSyxhQUFhO0FBRTFDLFVBQ0UsVUFBVSxVQUFVLFFBQ2pCLE9BQU8sSUFBSSxVQUFVLEtBQ3hCO0FBRUYsWUFBTSxlQUFlLFVBQVUsaUJBQWlCLE9BQU8sWUFBWTtBQUVuRSxZQUFNLE1BQU07QUFBQSxRQUNWLFNBQVM7QUFBQSxRQUNULGFBQWEsU0FBUyxHQUFHO0FBQUEsUUFDekIsV0FBVyxzQkFBc0IsU0FBUztBQUFBLFFBRTFDO0FBQUEsUUFFQSxXQUFZLEtBQUs7QUFDZixjQUFJLFlBQVksS0FBSyxHQUFHLEtBQUssVUFBVSxHQUFHLEdBQUc7QUFDM0MsbUJBQU8sS0FBSyxRQUFRO0FBQUEsY0FDbEIsQ0FBRSxVQUFVLGFBQWEsUUFBUSxhQUFjLFlBQWEsRUFBRztBQUFBLGNBQy9ELENBQUUsVUFBVSxXQUFXLE9BQU8sbUJBQW9CO0FBQUEsWUFBQSxDQUNuRDtBQUNELGdCQUFJLE1BQU0sS0FBSyxJQUFJO0FBQUEsVUFDckI7QUFBQSxRQUNGO0FBQUEsUUFFQSxXQUFZLEtBQUs7QUFDZixjQUFJLFlBQVksS0FBSyxHQUFHLEdBQUc7QUFDekIsa0JBQU0sU0FBUyxJQUFJO0FBQ25CLG1CQUFPLEtBQUssUUFBUTtBQUFBLGNBQ2xCLENBQUUsUUFBUSxhQUFhLFFBQVEsbUJBQW9CO0FBQUEsY0FDbkQsQ0FBRSxRQUFRLGVBQWUsT0FBTyxtQkFBb0I7QUFBQSxjQUNwRCxDQUFFLFFBQVEsWUFBWSxPQUFPLG1CQUFvQjtBQUFBLFlBQUEsQ0FDbEQ7QUFDRCxnQkFBSSxNQUFNLEdBQUc7QUFBQSxVQUNmO0FBQUEsUUFDRjtBQUFBLFFBRUEsTUFBTyxLQUFLLFlBQVk7QUFDdEIsaUJBQU8sR0FBRyxZQUFZLFFBQVEsaUJBQWlCLElBQUksSUFBSTtBQUV2RCxnQkFBTSxNQUFNLFNBQVMsR0FBRztBQUV4QixjQUFJLFFBQVE7QUFBQSxZQUNWLEdBQUcsSUFBSTtBQUFBLFlBQ1AsR0FBRyxJQUFJO0FBQUEsWUFDUCxNQUFNLEtBQUssSUFBQTtBQUFBLFlBQ1gsT0FBTyxlQUFlO0FBQUEsWUFDdEIsS0FBSztBQUFBLFVBQUE7QUFBQSxRQUVUO0FBQUEsUUFFQSxLQUFNLEtBQUs7QUFDVCxjQUFJLElBQUksVUFBVSxPQUFRO0FBRTFCLGNBQUksSUFBSSxNQUFNLFFBQVEsT0FBTztBQUMzQiwyQkFBZSxHQUFHO0FBQ2xCO0FBQUEsVUFDRjtBQUVBLGdCQUFNLE9BQU8sS0FBSyxJQUFBLElBQVEsSUFBSSxNQUFNO0FBRXBDLGNBQUksU0FBUyxFQUFHO0FBRWhCLGdCQUNFLE1BQU0sU0FBUyxHQUFHLEdBQ2xCLFFBQVEsSUFBSSxPQUFPLElBQUksTUFBTSxHQUM3QixPQUFPLEtBQUssSUFBSSxLQUFLLEdBQ3JCLFFBQVEsSUFBSSxNQUFNLElBQUksTUFBTSxHQUM1QixPQUFPLEtBQUssSUFBSSxLQUFLO0FBRXZCLGNBQUksSUFBSSxNQUFNLFVBQVUsTUFBTTtBQUM1QixnQkFBSSxPQUFPLElBQUksWUFBYSxDQUFFLEtBQUssT0FBTyxJQUFJLFlBQWEsQ0FBRSxHQUFHO0FBQzlELGtCQUFJLElBQUksR0FBRztBQUNYO0FBQUEsWUFDRjtBQUFBLFVBQ0YsV0FJUyxPQUFPLGFBQUEsRUFBZSxTQUFBLE1BQWUsSUFBSTtBQUNoRCxnQkFBSSxJQUFJLEdBQUc7QUFDWDtBQUFBLFVBQ0YsV0FDUyxPQUFPLElBQUksWUFBYSxDQUFFLEtBQUssT0FBTyxJQUFJLFlBQWEsQ0FBRSxHQUFHO0FBQ25FO0FBQUEsVUFDRjtBQUVBLGdCQUNFLE9BQU8sT0FBTyxNQUNkLE9BQU8sT0FBTztBQUVoQixjQUNFLElBQUksVUFBVSxhQUFhLFFBQ3hCLE9BQU8sUUFDUCxPQUFPLE9BQ1AsT0FBTyxJQUFJLFlBQWEsQ0FBRSxHQUM3QjtBQUNBLGdCQUFJLE1BQU0sTUFBTSxRQUFRLElBQUksT0FBTztBQUFBLFVBQ3JDO0FBRUEsY0FDRSxJQUFJLFVBQVUsZUFBZSxRQUMxQixPQUFPLFFBQ1AsT0FBTyxPQUNQLE9BQU8sSUFBSSxZQUFhLENBQUUsR0FDN0I7QUFDQSxnQkFBSSxNQUFNLE1BQU0sUUFBUSxJQUFJLFNBQVM7QUFBQSxVQUN2QztBQUVBLGNBQ0UsSUFBSSxVQUFVLE9BQU8sUUFDbEIsT0FBTyxRQUNQLFFBQVEsS0FDUixPQUFPLE9BQ1AsT0FBTyxJQUFJLFlBQWEsQ0FBRSxHQUM3QjtBQUNBLGdCQUFJLE1BQU0sTUFBTTtBQUFBLFVBQ2xCO0FBRUEsY0FDRSxJQUFJLFVBQVUsU0FBUyxRQUNwQixPQUFPLFFBQ1AsUUFBUSxLQUNSLE9BQU8sT0FDUCxPQUFPLElBQUksWUFBYSxDQUFFLEdBQzdCO0FBQ0EsZ0JBQUksTUFBTSxNQUFNO0FBQUEsVUFDbEI7QUFFQSxjQUNFLElBQUksVUFBVSxTQUFTLFFBQ3BCLE9BQU8sUUFDUCxRQUFRLEtBQ1IsT0FBTyxPQUNQLE9BQU8sSUFBSSxZQUFhLENBQUUsR0FDN0I7QUFDQSxnQkFBSSxNQUFNLE1BQU07QUFBQSxVQUNsQjtBQUVBLGNBQ0UsSUFBSSxVQUFVLFVBQVUsUUFDckIsT0FBTyxRQUNQLFFBQVEsS0FDUixPQUFPLE9BQ1AsT0FBTyxJQUFJLFlBQWEsQ0FBRSxHQUM3QjtBQUNBLGdCQUFJLE1BQU0sTUFBTTtBQUFBLFVBQ2xCO0FBRUEsY0FBSSxJQUFJLE1BQU0sUUFBUSxPQUFPO0FBQzNCLDJCQUFlLEdBQUc7QUFFbEIsZ0JBQUksSUFBSSxNQUFNLFVBQVUsTUFBTTtBQUM1Qix1QkFBUyxLQUFLLFVBQVUsSUFBSSw2QkFBNkI7QUFDekQsdUJBQVMsS0FBSyxVQUFVLElBQUksZ0JBQWdCO0FBQzVDLDZCQUFBO0FBRUEsa0JBQUksZUFBZSxDQUFBLGNBQWE7QUFDOUIsb0JBQUksZUFBZTtBQUVuQix5QkFBUyxLQUFLLFVBQVUsT0FBTyxnQkFBZ0I7QUFFL0Msc0JBQU0sU0FBUyxNQUFNO0FBQ25CLDJCQUFTLEtBQUssVUFBVSxPQUFPLDZCQUE2QjtBQUFBLGdCQUM5RDtBQUVBLG9CQUFJLGNBQWMsTUFBTTtBQUFFLDZCQUFXLFFBQVEsRUFBRTtBQUFBLGdCQUFFLE9BQzVDO0FBQUUseUJBQUE7QUFBQSxnQkFBUztBQUFBLGNBQ2xCO0FBQUEsWUFDRjtBQUVBLGdCQUFJLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQSxPQUFPLElBQUksTUFBTSxVQUFVO0FBQUEsY0FDM0IsT0FBTyxJQUFJLE1BQU07QUFBQSxjQUNqQixXQUFXLElBQUksTUFBTTtBQUFBLGNBQ3JCLFVBQVU7QUFBQSxjQUNWLFVBQVU7QUFBQSxnQkFDUixHQUFHO0FBQUEsZ0JBQ0gsR0FBRztBQUFBLGNBQUE7QUFBQSxZQUNMLENBQ0Q7QUFBQSxVQUNILE9BQ0s7QUFDSCxnQkFBSSxJQUFJLEdBQUc7QUFBQSxVQUNiO0FBQUEsUUFDRjtBQUFBLFFBRUEsSUFBSyxLQUFLO0FBQ1IsY0FBSSxJQUFJLFVBQVUsT0FBUTtBQUUxQixtQkFBUyxLQUFLLE1BQU07QUFDcEIsaUJBQU8sR0FBRyxZQUFZLFFBQVEsaUJBQWlCLElBQUksS0FBSztBQUN4RCxjQUFJLGVBQWUsSUFBSTtBQUN2QixjQUFLLFFBQVEsVUFBWSxJQUFJLE1BQU0sUUFBUSxzQkFBdUIsR0FBRztBQUVyRSxjQUFJLFFBQVE7QUFBQSxRQUNkO0FBQUEsTUFBQTtBQUdGLFNBQUcsZ0JBQWdCO0FBRW5CLFVBQUksVUFBVSxVQUFVLE1BQU07QUFFNUIsY0FBTSxVQUFVLFVBQVUsaUJBQWlCLFFBQVEsVUFBVSxpQkFBaUIsT0FDMUUsWUFDQTtBQUVKLGVBQU8sS0FBSyxRQUFRO0FBQUEsVUFDbEIsQ0FBRSxJQUFJLGFBQWEsY0FBYyxVQUFXLE9BQVEsRUFBRztBQUFBLFFBQUEsQ0FDeEQ7QUFBQSxNQUNIO0FBRUEsYUFBTyxJQUFJLFVBQVUsUUFBUSxPQUFPLEtBQUssUUFBUTtBQUFBLFFBQy9DLENBQUUsSUFBSSxjQUFjLGNBQWMsVUFBVyxVQUFVLFlBQVksT0FBTyxZQUFZLEVBQUcsRUFBRztBQUFBLFFBQzVGLENBQUUsSUFBSSxhQUFhLFFBQVEsbUJBQW9CO0FBQUE7QUFBQSxNQUFBLENBQ2hEO0FBQUEsSUFDSDtBQUFBLElBRUEsUUFBUyxJQUFJLFVBQVU7QUFDckIsWUFBTSxNQUFNLEdBQUc7QUFFZixVQUFJLFFBQVEsUUFBUTtBQUNsQixZQUFJLFNBQVMsYUFBYSxTQUFTLE9BQU87QUFDeEMsaUJBQU8sU0FBUyxVQUFVLGNBQWMsSUFBSSxJQUFBO0FBQzVDLGNBQUksVUFBVSxTQUFTO0FBQUEsUUFDekI7QUFFQSxZQUFJLFlBQVksc0JBQXNCLFNBQVMsU0FBUztBQUFBLE1BQzFEO0FBQUEsSUFDRjtBQUFBLElBRUEsY0FBZSxJQUFJO0FBQ2pCLFlBQU0sTUFBTSxHQUFHO0FBRWYsVUFBSSxRQUFRLFFBQVE7QUFDbEIsaUJBQVMsS0FBSyxNQUFNO0FBQ3BCLGlCQUFTLEtBQUssTUFBTTtBQUVwQixlQUFPLEdBQUcsWUFBWSxRQUFRLGlCQUFpQixJQUFJLEtBQUs7QUFDeEQsWUFBSSxlQUFBO0FBRUosZUFBTyxHQUFHO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQSxFQUFBO0FBRU47QUNwUkEsU0FBQSxpQkFBMkI7QUFDekIsTUFBSSxRQUFRLHVCQUFPLE9BQU8sSUFBSTtBQUU5QixTQUFPO0FBQUEsSUFDTCxVQU1JLENBQUMsS0FBSyxpQkFDSixNQUFPLEdBQUksTUFBTSxTQUVYLE1BQU8sR0FBSSxJQUNULE9BQU8saUJBQWlCLGFBQ3BCLGFBQUEsSUFDQSxlQUdSLE1BQU8sR0FBSTtBQUFBLElBR3JCLFNBQVUsS0FBSyxLQUFLO0FBQ2xCLFlBQU8sR0FBSSxJQUFJO0FBQUEsSUFDakI7QUFBQSxJQUVBLFNBQVUsS0FBSztBQUNiLGFBQU8sT0FBTyxlQUFlLEtBQUssT0FBTyxHQUFHO0FBQUEsSUFDOUM7QUFBQSxJQUVBLFdBQVksS0FBSztBQUNmLFVBQUksUUFBUSxRQUFRO0FBQ2xCLGVBQU8sTUFBTyxHQUFJO0FBQUEsTUFDcEIsT0FDSztBQUNILGdCQUFRLHVCQUFPLE9BQU8sSUFBSTtBQUFBLE1BQzVCO0FBQUEsSUFDRjtBQUFBLEVBQUE7QUFFSjtBQzdCTyxNQUFNLHFCQUFxQjtBQUFBLEVBQ2hDLE1BQU0sRUFBRSxVQUFVLEtBQUk7QUFBQSxFQUN0QixTQUFTO0FBQ1g7QUFFQSxNQUFNLGVBQWU7QUFBQSxFQUNuQixNQUFPLEdBQUcsRUFBRSxTQUFTO0FBQ25CLFdBQU8sTUFBTSxFQUFFLE9BQU87QUFBQSxNQUNwQixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDWixHQUFPLE1BQU0sTUFBTSxPQUFPLENBQUM7QUFBQSxFQUN6QjtBQUNGO0FBRU8sTUFBTSxnQkFBZ0I7QUFBQSxFQUMzQixZQUFZO0FBQUEsSUFDVixVQUFVO0FBQUEsRUFDZDtBQUFBLEVBRUUsVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLEVBRVYsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsSUFDbEIsTUFBTSxDQUFFLFFBQVEsTUFBTTtBQUFBLElBQ3RCLFNBQVM7QUFBQSxFQUNiO0FBQUEsRUFFRSxXQUFXO0FBQUEsRUFDWCxrQkFBa0IsQ0FBRSxRQUFRLE9BQU8sTUFBTTtBQUFBLEVBQ3pDLGtCQUFrQixDQUFFLFFBQVEsT0FBTyxNQUFNO0FBQUEsRUFDekMsY0FBYztBQUNoQjtBQUVPLE1BQU0sZ0JBQWdCLENBQUUscUJBQXFCLG9CQUFvQixZQUFZO0FBRXJFLFNBQUEsV0FBWTtBQUN6QixRQUFNLEVBQUUsT0FBTyxNQUFNLE1BQUssSUFBSyxtQkFBa0I7QUFDakQsUUFBTSxFQUFFLFNBQVEsSUFBSyxlQUFjO0FBQ25DLFFBQU0sRUFBRSxnQkFBZSxJQUFLLFdBQVU7QUFFdEMsTUFBSSxRQUFRO0FBRVosUUFBTSxrQkFBa0IsSUFBSSxJQUFJO0FBVWhDLFFBQU0sYUFBYSxFQUFFLE9BQU8sS0FBSTtBQUVoQyxXQUFTLFFBQVMsS0FBSztBQUNyQixVQUFNLE1BQU0sTUFBTSxhQUFhLE9BQU8sT0FBTztBQUM3Qyx1QkFBbUIsTUFBTSxHQUFHLEtBQUssUUFBUSxPQUFPLEtBQUssTUFBTSxJQUFJLGNBQWMsTUFBTSxJQUFJLEdBQUc7QUFBQSxFQUM1RjtBQUVBLFFBQU0sa0JBQWtCLFNBQVMsTUFBTTtBQUVyQyxXQUFPLENBQUU7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsUUFDRSxZQUFZLE1BQU0sYUFBYTtBQUFBLFFBQy9CLFVBQVUsTUFBTTtBQUFBLFFBQ2hCLE9BQU87QUFBQSxNQUNmO0FBQUEsSUFDQSxDQUFLO0FBQUEsRUFDSCxDQUFDO0FBRUQsUUFBTSxpQkFBaUI7QUFBQSxJQUFTLE1BQzlCLE1BQU0sa0JBQWtCLFNBQVUsTUFBTSxhQUFhLE9BQU8sU0FBUyxPQUFPO0FBQUEsRUFDaEY7QUFFRSxRQUFNLGlCQUFpQjtBQUFBLElBQVMsTUFDOUIsTUFBTSxrQkFBa0IsU0FBVSxNQUFNLGFBQWEsT0FBTyxPQUFPLE1BQU07QUFBQSxFQUM3RTtBQUVFLFFBQU0sa0JBQWtCO0FBQUEsSUFDdEIsTUFBTSw0QkFBNkIsTUFBTTtFQUM3QztBQUVFLFFBQU0sYUFBYSxTQUFTLE1BQzFCLE9BQU8sTUFBTSxlQUFlLFlBQVksT0FBTyxNQUFNLGVBQWUsV0FDaEUsTUFBTSxhQUNOLE9BQU8sTUFBTSxVQUFVLENBQzVCO0FBRUQsUUFBTSxpQkFBaUIsU0FBUyxPQUFPO0FBQUEsSUFDckMsU0FBUyxNQUFNO0FBQUEsSUFDZixTQUFTLE1BQU07QUFBQSxJQUNmLEtBQUssTUFBTTtBQUFBLEVBQ2YsRUFBSTtBQUVGLFFBQU0sOEJBQThCO0FBQUEsSUFBUyxNQUMzQyxNQUFNLHFCQUFxQixVQUN4QixNQUFNLHFCQUFxQjtBQUFBLEVBQ2xDO0FBRUUsUUFBTSxNQUFNLE1BQU0sWUFBWSxDQUFDLFFBQVEsV0FBVztBQUNoRCxVQUFNLFFBQVEsaUJBQWlCLE1BQU0sTUFBTSxPQUN2QyxjQUFjLE1BQU0sSUFDcEI7QUFFSixRQUFJLDBCQUEwQixNQUFNO0FBQ2xDO0FBQUEsUUFDRSxVQUFVLEtBQUssSUFBSyxRQUFRLGNBQWMsTUFBTSxJQUFJLEtBQUs7QUFBQSxNQUNqRTtBQUFBLElBQ0k7QUFFQSxRQUFJLFdBQVcsVUFBVSxPQUFPO0FBQzlCLGlCQUFXLFFBQVE7QUFDbkIsV0FBSyxvQkFBb0IsUUFBUSxNQUFNO0FBQ3ZDLHNCQUFnQixNQUFNO0FBQ3BCLGFBQUssY0FBYyxRQUFRLE1BQU07QUFBQSxNQUNuQyxHQUFHLE1BQU0sa0JBQWtCO0FBQUEsSUFDN0I7QUFBQSxFQUNGLENBQUM7QUFFRCxXQUFTLFlBQWE7QUFBRSxzQkFBa0IsQ0FBQztBQUFBLEVBQUU7QUFDN0MsV0FBUyxnQkFBaUI7QUFBRSxzQkFBa0IsRUFBRTtBQUFBLEVBQUU7QUFFbEQsV0FBUyxVQUFXLE1BQU07QUFDeEIsU0FBSyxxQkFBcUIsSUFBSTtBQUFBLEVBQ2hDO0FBRUEsV0FBUyxpQkFBa0IsTUFBTTtBQUMvQixXQUFPLFNBQVMsVUFBVSxTQUFTLFFBQVEsU0FBUztBQUFBLEVBQ3REO0FBRUEsV0FBUyxjQUFlLE1BQU07QUFDNUIsV0FBTyxPQUFPLFVBQVUsV0FBUztBQUMvQixhQUFPLE1BQU0sTUFBTSxTQUFTLFFBQ3ZCLE1BQU0sTUFBTSxZQUFZLE1BQ3hCLE1BQU0sTUFBTSxZQUFZO0FBQUEsSUFDL0IsQ0FBQztBQUFBLEVBQ0g7QUFFQSxXQUFTLG1CQUFvQjtBQUMzQixXQUFPLE9BQU8sT0FBTyxXQUFTO0FBQzVCLGFBQU8sTUFBTSxNQUFNLFlBQVksTUFDMUIsTUFBTSxNQUFNLFlBQVk7QUFBQSxJQUMvQixDQUFDO0FBQUEsRUFDSDtBQUVBLFdBQVMsc0JBQXVCLFdBQVc7QUFDekMsVUFBTSxNQUFNLGNBQWMsS0FBSyxNQUFNLGFBQWEsUUFBUSxXQUFXLFVBQVUsS0FDM0Usb0JBQW9CLGNBQWMsS0FBSyxlQUFlLFFBQVEsZUFBZSxTQUM3RTtBQUVKLFFBQUksZ0JBQWdCLFVBQVUsS0FBSztBQUNqQyxzQkFBZ0IsUUFBUTtBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUVBLFdBQVMsa0JBQW1CLFdBQVcsYUFBYSxXQUFXLE9BQU87QUFDcEUsUUFBSSxRQUFRLGFBQWE7QUFFekIsV0FBTyxVQUFVLE1BQU0sUUFBUSxPQUFPLFFBQVE7QUFDNUMsWUFBTSxNQUFNLE9BQVEsS0FBSztBQUV6QixVQUNFLFFBQVEsVUFDTCxJQUFJLE1BQU0sWUFBWSxNQUN0QixJQUFJLE1BQU0sWUFBWSxNQUN6QjtBQUNBLDhCQUFzQixTQUFTO0FBQy9CLGdDQUF3QjtBQUN4QixhQUFLLHFCQUFxQixJQUFJLE1BQU0sSUFBSTtBQUN4QyxtQkFBVyxNQUFNO0FBQ2Ysa0NBQXdCO0FBQUEsUUFDMUIsQ0FBQztBQUVEO0FBQUEsTUFDRjtBQUVBLGVBQVM7QUFBQSxJQUNYO0FBRUEsUUFBSSxNQUFNLGFBQWEsUUFBUSxPQUFPLFdBQVcsS0FBSyxlQUFlLE1BQU0sZUFBZSxPQUFPLFFBQVE7QUFDdkcsd0JBQWtCLFdBQVcsY0FBYyxLQUFLLE9BQU8sU0FBUyxFQUFFO0FBQUEsSUFDcEU7QUFBQSxFQUNGO0FBRUEsV0FBUyxtQkFBb0I7QUFDM0IsVUFBTSxRQUFRLGNBQWMsTUFBTSxVQUFVO0FBRTVDLFFBQUksV0FBVyxVQUFVLE9BQU87QUFDOUIsaUJBQVcsUUFBUTtBQUFBLElBQ3JCO0FBRUEsV0FBTztBQUFBLEVBQ1Q7QUFFQSxXQUFTLHVCQUF3QjtBQUMvQixVQUFNLFFBQVEsaUJBQWlCLE1BQU0sVUFBVSxNQUFNLFFBQ2hELGlCQUFnQixLQUNoQixPQUFRLFdBQVcsS0FBSztBQUU3QixXQUFPLE1BQU0sY0FBYyxPQUN2QjtBQUFBLE1BQ0UsRUFBRSxXQUFXLGVBQWUsT0FBTztBQUFBLFFBQ2pDO0FBQUEsVUFDRSw0QkFBNEIsVUFBVSxPQUNsQyxTQUFTLFdBQVcsT0FBTyxPQUFPLEVBQUUsR0FBRyxjQUFjLE1BQU0sV0FBVyxRQUFRLElBQzlFO0FBQUEsVUFDSixFQUFFLEtBQUssV0FBVyxPQUFPLE9BQU8sZ0JBQWdCLE1BQUs7QUFBQSxVQUNyRCxNQUFNO0FBQUEsUUFDcEI7QUFBQSxNQUNBLENBQVc7QUFBQSxJQUNYLElBQ1E7QUFBQSxNQUNFLEVBQUUsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTyxnQkFBZ0I7QUFBQSxRQUN2QixLQUFLLFdBQVc7QUFBQSxRQUNoQixNQUFNO0FBQUEsTUFDbEIsR0FBYSxDQUFFLEtBQUssQ0FBRTtBQUFBLElBQ3RCO0FBQUEsRUFDRTtBQUVBLFdBQVMsa0JBQW1CO0FBQzFCLFFBQUksT0FBTyxXQUFXLEVBQUc7QUFFekIsV0FBTyxNQUFNLGFBQWEsT0FDdEIsQ0FBRSxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixNQUFLLEdBQUksb0JBQW9CLENBQUMsSUFDdEUscUJBQW9CO0FBQUEsRUFDMUI7QUFFQSxXQUFTLGlCQUFrQixPQUFPO0FBQ2hDLGFBQVM7QUFBQSxNQUNQLE1BQU0sTUFBTSxTQUFTLENBQUEsQ0FBRTtBQUFBLElBQzdCLEVBQU07QUFBQSxNQUNBLFdBQVMsTUFBTSxVQUFVLFFBQ3BCLE1BQU0sTUFBTSxTQUFTLFVBQ3JCLGlCQUFpQixNQUFNLE1BQU0sSUFBSSxNQUFNO0FBQUEsSUFDbEQ7QUFFSSxXQUFPLE9BQU87QUFBQSxFQUNoQjtBQUVBLFdBQVMsWUFBYTtBQUNwQixXQUFPO0FBQUEsRUFDVDtBQUdBLFNBQU8sT0FBTyxPQUFPO0FBQUEsSUFDbkIsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLEVBQ1YsQ0FBRztBQUVELFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLElBRUE7QUFBQSxJQUNBO0FBQUEsSUFFQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFFQTtBQUFBLElBRUE7QUFBQSxJQUNBO0FBQUEsSUFFQTtBQUFBLElBQ0E7QUFBQSxJQUVBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFDQTtBQzNSQSxNQUFBLGFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLEVBQ1A7QUFBQSxFQUVFLE9BQU87QUFBQSxFQUVQLE1BQU8sT0FBTyxFQUFFLFNBQVM7QUFDdkIsVUFBTSxLQUFLLG1CQUFrQjtBQUM3QixVQUFNLFNBQVMsUUFBUSxPQUFPLEdBQUcsTUFBTSxFQUFFO0FBRXpDLFVBQU0sRUFBRSxrQkFBa0IsaUJBQWlCLGdCQUFlLElBQUssU0FBUTtBQUV2RSxVQUFNLFVBQVU7QUFBQSxNQUFTLE1BQ3ZCLGlDQUNHLE9BQU8sVUFBVSxPQUFPLCtCQUErQjtBQUFBLElBQ2hFO0FBRUksV0FBTyxNQUFNO0FBQ1gsdUJBQWlCLEtBQUs7QUFFdEIsYUFBTztBQUFBLFFBQ0w7QUFBQSxRQUNBLEVBQUUsT0FBTyxRQUFRLE1BQUs7QUFBQSxRQUN0QixnQkFBZTtBQUFBLFFBQ2Y7QUFBQSxRQUNBLE1BQU07QUFBQSxRQUNOLE1BQU0sZ0JBQWdCO0FBQUEsTUFDOUI7QUFBQSxJQUNJO0FBQUEsRUFDRjtBQUNGLENBQUM7QUNuQ0QsTUFBQSxZQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxFQUVQLE1BQU8sR0FBRyxFQUFFLFNBQVM7QUFDbkIsV0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sZUFBZSxNQUFNLFdBQVUsR0FBSSxNQUFNLE1BQU0sT0FBTyxDQUFDO0FBQUEsRUFDeEY7QUFDRixDQUFDO0FDZkQsTUFBTSxTQUFTO0FBRVIsU0FBUyxTQUFVLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBQyxHQUFJO0FBQ3hDLFFBQU0sUUFBUSxNQUFNO0FBRXBCLE1BQUksS0FBSyxNQUFNLENBQUM7QUFDaEIsTUFBSSxLQUFLLE1BQU0sQ0FBQztBQUNoQixNQUFJLEtBQUssTUFBTSxDQUFDO0FBRWhCLE1BQ0UsSUFBSSxPQUNELElBQUksT0FDSixJQUFJLE9BQ0gsU0FBUyxJQUFJLEtBQ2pCO0FBQ0EsVUFBTSxJQUFJLFVBQVUsNkRBQTZEO0FBQUEsRUFDbkY7QUFFQSxNQUFJLFNBQ0MsS0FBSyxNQUFNLE1BQU0sSUFBSSxHQUFHLElBQUksS0FBSyxHQUFHLFNBQVMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUN6RDtBQUVKLFNBQU8sT0FBUSxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQU0sS0FBSyxJQUFJLFNBQVMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0FBQzFFO0FBRU8sU0FBUyxZQUFhLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBQyxHQUFJO0FBQzNDLFNBQU8sTUFBTyxNQUFNLFNBQVMsTUFBTSxFQUFFLElBQU0sQ0FBQyxJQUFNLENBQUMsSUFBTSxDQUFDLEdBQUssTUFBTSxTQUFTLE1BQU8sSUFBSSxNQUFPO0FBQ2xHO0FBRU8sU0FBUyxTQUFVLEtBQUs7QUFDN0IsTUFBSSxPQUFPLFFBQVEsVUFBVTtBQUMzQixVQUFNLElBQUksVUFBVSxtQkFBbUI7QUFBQSxFQUN6QztBQUVBLFFBQU0sSUFBSSxRQUFRLE1BQU0sRUFBRTtBQUUxQixNQUFJLElBQUksV0FBVyxHQUFHO0FBQ3BCLFVBQU0sSUFBSyxDQUFDLElBQUssSUFBSyxDQUFDLElBQUssSUFBSyxDQUFDLElBQUssSUFBSyxDQUFDLElBQUssSUFBSyxDQUFDLElBQUssSUFBSyxDQUFDO0FBQUEsRUFDckUsV0FDUyxJQUFJLFdBQVcsR0FBRztBQUN6QixVQUFNLElBQUssS0FBTSxJQUFLLEtBQU0sSUFBSyxDQUFDLElBQUssSUFBSyxDQUFDLElBQUssSUFBSyxDQUFDLElBQUssSUFBSyxDQUFDLElBQUssSUFBSyxLQUFNLElBQUssQ0FBQztBQUFBLEVBQzNGO0FBRUEsUUFBTSxNQUFNLFNBQVMsS0FBSyxFQUFFO0FBRTVCLFNBQU8sSUFBSSxTQUFTLElBQ2hCLEVBQUUsR0FBRyxPQUFPLEtBQUssS0FBSyxHQUFHLE9BQU8sS0FBSyxLQUFLLEdBQUcsT0FBTyxJQUFJLEtBQUssR0FBRyxLQUFLLE9BQU8sTUFBTSxPQUFPLElBQUksRUFBQyxJQUM5RixFQUFFLEdBQUcsT0FBTyxJQUFJLEdBQUcsT0FBTyxJQUFJLEtBQUssR0FBRyxNQUFNLElBQUc7QUFDckQ7QUFFTyxTQUFTLFNBQVUsRUFBRSxHQUFBQSxJQUFHLEdBQUcsR0FBRyxFQUFDLEdBQUk7QUFDeEMsTUFBSSxHQUFHLEdBQUc7QUFDVixNQUFJLElBQUk7QUFDUixNQUFJLElBQUk7QUFFUixFQUFBQSxLQUFJQSxLQUFJO0FBQ1IsUUFDRSxJQUFJLEtBQUssTUFBTUEsS0FBSSxDQUFDLEdBQ3BCLElBQUlBLEtBQUksSUFBSSxHQUNaLElBQUksS0FBSyxJQUFJLElBQ2IsSUFBSSxLQUFLLElBQUksSUFBSSxJQUNqQixJQUFJLEtBQUssS0FBSyxJQUFJLEtBQUs7QUFFekIsVUFBUSxJQUFJLEdBQUM7QUFBQSxJQUNYLEtBQUs7QUFDSCxVQUFJO0FBQ0osVUFBSTtBQUNKLFVBQUk7QUFDSjtBQUFBLElBQ0YsS0FBSztBQUNILFVBQUk7QUFDSixVQUFJO0FBQ0osVUFBSTtBQUNKO0FBQUEsSUFDRixLQUFLO0FBQ0gsVUFBSTtBQUNKLFVBQUk7QUFDSixVQUFJO0FBQ0o7QUFBQSxJQUNGLEtBQUs7QUFDSCxVQUFJO0FBQ0osVUFBSTtBQUNKLFVBQUk7QUFDSjtBQUFBLElBQ0YsS0FBSztBQUNILFVBQUk7QUFDSixVQUFJO0FBQ0osVUFBSTtBQUNKO0FBQUEsSUFDRixLQUFLO0FBQ0gsVUFBSTtBQUNKLFVBQUk7QUFDSixVQUFJO0FBQ0o7QUFBQSxFQUNOO0FBRUUsU0FBTztBQUFBLElBQ0wsR0FBRyxLQUFLLE1BQU0sSUFBSSxHQUFHO0FBQUEsSUFDckIsR0FBRyxLQUFLLE1BQU0sSUFBSSxHQUFHO0FBQUEsSUFDckIsR0FBRyxLQUFLLE1BQU0sSUFBSSxHQUFHO0FBQUEsSUFDckI7QUFBQSxFQUNKO0FBQ0E7QUFFTyxTQUFTLFNBQVUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFDLEdBQUk7QUFDeEMsUUFDRSxNQUFNLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUN0QixNQUFNLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUN0QixJQUFJLE1BQU0sS0FDVixJQUFLLFFBQVEsSUFBSSxJQUFJLElBQUksS0FDekIsSUFBSSxNQUFNO0FBQ1osTUFBSUE7QUFFSixVQUFRLEtBQUc7QUFBQSxJQUNULEtBQUs7QUFDSCxNQUFBQSxLQUFJO0FBQ0o7QUFBQSxJQUNGLEtBQUs7QUFDSCxNQUFBQSxLQUFLLElBQUksSUFBSyxLQUFLLElBQUksSUFBSSxJQUFJO0FBQy9CLE1BQUFBLE1BQUssSUFBSTtBQUNUO0FBQUEsSUFDRixLQUFLO0FBQ0gsTUFBQUEsS0FBSyxJQUFJLElBQUssSUFBSTtBQUNsQixNQUFBQSxNQUFLLElBQUk7QUFDVDtBQUFBLElBQ0YsS0FBSztBQUNILE1BQUFBLEtBQUssSUFBSSxJQUFLLElBQUk7QUFDbEIsTUFBQUEsTUFBSyxJQUFJO0FBQ1Q7QUFBQSxFQUNOO0FBRUUsU0FBTztBQUFBLElBQ0wsR0FBRyxLQUFLLE1BQU1BLEtBQUksR0FBRztBQUFBLElBQ3JCLEdBQUcsS0FBSyxNQUFNLElBQUksR0FBRztBQUFBLElBQ3JCLEdBQUcsS0FBSyxNQUFNLElBQUksR0FBRztBQUFBLElBQ3JCO0FBQUEsRUFDSjtBQUNBO0FBRU8sU0FBUyxVQUFXLEtBQUs7QUFDOUIsTUFBSSxPQUFPLFFBQVEsVUFBVTtBQUMzQixVQUFNLElBQUksVUFBVSxtQkFBbUI7QUFBQSxFQUN6QztBQUVBLFFBQU0sUUFBUSxJQUFJLFFBQVEsTUFBTSxFQUFFO0FBRWxDLFFBQU0sSUFBSSxPQUFPLEtBQUssS0FBSztBQUUzQixNQUFJLE1BQU0sTUFBTTtBQUNkLFdBQU8sU0FBUyxLQUFLO0FBQUEsRUFDdkI7QUFFQSxRQUFNLE1BQU07QUFBQSxJQUNWLEdBQUcsS0FBSyxJQUFJLEtBQUssU0FBUyxFQUFHLElBQUssRUFBRSxDQUFDO0FBQUEsSUFDckMsR0FBRyxLQUFLLElBQUksS0FBSyxTQUFTLEVBQUcsSUFBSyxFQUFFLENBQUM7QUFBQSxJQUNyQyxHQUFHLEtBQUssSUFBSSxLQUFLLFNBQVMsRUFBRyxDQUFDLEdBQUksRUFBRSxDQUFDO0FBQUEsRUFDekM7QUFFRSxNQUFJLEVBQUcsSUFBSztBQUNWLFVBQU0sUUFBUSxXQUFXLEVBQUcsQ0FBQyxDQUFFO0FBQy9CLFFBQUksSUFBSSxLQUFLLElBQUksR0FBRyxNQUFNLEtBQUssTUFBTSxPQUFPLElBQUksS0FBSyxJQUFJO0FBQUEsRUFDM0Q7QUFFQSxTQUFPO0FBQ1Q7QUF5Qk8sU0FBUyxXQUFZLE9BQU87QUFDakMsTUFBSSxPQUFPLFVBQVUsYUFBYSxDQUFDLFNBQVMsTUFBTSxNQUFNLFNBQVM7QUFDL0QsVUFBTSxJQUFJLFVBQVUsa0RBQWtEO0FBQUEsRUFDeEU7QUFFQSxRQUNFLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxLQUFLLElBQUksT0FDckQsSUFBSSxJQUFJLElBQUksS0FDWixJQUFJLElBQUksSUFBSSxLQUNaLElBQUksSUFBSSxJQUFJLEtBQ1osSUFBSSxLQUFLLFVBQVUsSUFBSSxRQUFRLEtBQUssS0FBSyxJQUFJLFNBQVMsT0FBTyxHQUFHLEdBQ2hFLElBQUksS0FBSyxVQUFVLElBQUksUUFBUSxLQUFLLEtBQUssSUFBSSxTQUFTLE9BQU8sR0FBRyxHQUNoRSxJQUFJLEtBQUssVUFBVSxJQUFJLFFBQVEsS0FBSyxLQUFLLElBQUksU0FBUyxPQUFPLEdBQUc7QUFDbEUsU0FBTyxTQUFTLElBQUksU0FBUyxJQUFJLFNBQVM7QUFDNUM7QUNwTEEsTUFBTSxVQUFVO0FBQUEsRUFDZDtBQUFBLEVBQW9CO0FBQUEsRUFBb0I7QUFBQSxFQUFvQjtBQUFBLEVBQW9CO0FBQUEsRUFBb0I7QUFBQSxFQUFvQjtBQUFBLEVBQW9CO0FBQUEsRUFBb0I7QUFBQSxFQUFvQjtBQUFBLEVBQ3BMO0FBQUEsRUFBb0I7QUFBQSxFQUFvQjtBQUFBLEVBQW9CO0FBQUEsRUFBb0I7QUFBQSxFQUFvQjtBQUFBLEVBQW9CO0FBQUEsRUFBb0I7QUFBQSxFQUFvQjtBQUFBLEVBQW9CO0FBQUEsRUFDcEw7QUFBQSxFQUFvQjtBQUFBLEVBQW9CO0FBQUEsRUFBb0I7QUFBQSxFQUFvQjtBQUFBLEVBQW9CO0FBQUEsRUFBb0I7QUFBQSxFQUFvQjtBQUFBLEVBQW9CO0FBQUEsRUFBb0I7QUFBQSxFQUNwTDtBQUFBLEVBQWtCO0FBQUEsRUFBbUI7QUFBQSxFQUFtQjtBQUFBLEVBQWtCO0FBQUEsRUFBbUI7QUFBQSxFQUFtQjtBQUFBLEVBQW1CO0FBQUEsRUFBa0I7QUFBQSxFQUFtQjtBQUFBLEVBQ3hLO0FBQUEsRUFBZ0I7QUFBQSxFQUFrQjtBQUFBLEVBQWtCO0FBQUEsRUFBZ0I7QUFBQSxFQUFrQjtBQUFBLEVBQWtCO0FBQUEsRUFBa0I7QUFBQSxFQUFnQjtBQUFBLEVBQWtCO0FBQUEsRUFDNUo7QUFBQSxFQUFnQjtBQUFBLEVBQWtCO0FBQUEsRUFBa0I7QUFBQSxFQUFnQjtBQUFBLEVBQWtCO0FBQUEsRUFBa0I7QUFBQSxFQUFrQjtBQUFBLEVBQWdCO0FBQUEsRUFBa0I7QUFBQSxFQUM1SjtBQUFBLEVBQWdCO0FBQUEsRUFBa0I7QUFBQSxFQUFrQjtBQUFBLEVBQWdCO0FBQUEsRUFBa0I7QUFBQSxFQUFrQjtBQUFBLEVBQWtCO0FBQUEsRUFBZ0I7QUFBQSxFQUFrQjtBQUFBLEVBQzVKO0FBQUEsRUFBZ0I7QUFBQSxFQUFpQjtBQUFBLEVBQWtCO0FBQUEsRUFBZ0I7QUFBQSxFQUFpQjtBQUFBLEVBQWtCO0FBQUEsRUFBaUI7QUFBQSxFQUFnQjtBQUFBLEVBQWlCO0FBQUEsRUFDeEo7QUFBQSxFQUFlO0FBQUEsRUFBZ0I7QUFBQSxFQUFnQjtBQUFBLEVBQWU7QUFBQSxFQUFnQjtBQUFBLEVBQWdCO0FBQUEsRUFBZ0I7QUFBQSxFQUFlO0FBQUEsRUFBZ0I7QUFBQSxFQUM3STtBQUFBLEVBQW9CO0FBQUEsRUFBb0I7QUFBQSxFQUFvQjtBQUFBLEVBQW9CO0FBQUEsRUFBb0I7QUFBQSxFQUFvQjtBQUFBLEVBQWlCO0FBQUEsRUFBaUI7QUFBQSxFQUFpQjtBQUM3SztBQUVBLE1BQU0sWUFBWTtBQUNsQixNQUFNLGdCQUFnQjtBQUV0QixNQUFBLFNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBRUgsWUFBWTtBQUFBLElBRVosY0FBYztBQUFBLElBQ2QsYUFBYTtBQUFBLE1BQ1gsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsV0FBVyxPQUFLLENBQUUsWUFBWSxRQUFRLFNBQVMsRUFBRyxTQUFTLENBQUM7QUFBQSxJQUNsRTtBQUFBLElBRUksYUFBYTtBQUFBLE1BQ1gsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsV0FBVyxPQUFLLENBQUUsUUFBUSxPQUFPLE9BQU8sUUFBUSxRQUFTLFNBQVMsQ0FBQztBQUFBLElBQ3pFO0FBQUEsSUFFSSxTQUFTO0FBQUEsSUFFVCxVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsSUFDZCxVQUFVO0FBQUEsSUFFVixRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFFVixTQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUEsRUFDZDtBQUFBLEVBRUUsT0FBTyxDQUFFLHFCQUFxQixRQUFRO0FBQUEsRUFFdEMsTUFBTyxPQUFPLEVBQUUsUUFBUTtBQUN0QixVQUFNLEVBQUUsTUFBSyxJQUFLLG1CQUFrQjtBQUNwQyxVQUFNLEVBQUUsR0FBRSxJQUFLO0FBRWYsVUFBTSxTQUFTLFFBQVEsT0FBTyxFQUFFO0FBQ2hDLFVBQU0sRUFBRSxTQUFRLElBQUssZUFBYztBQUVuQyxVQUFNLGNBQWMsSUFBSSxJQUFJO0FBQzVCLFVBQU0sZUFBZSxJQUFJLElBQUk7QUFFN0IsVUFBTSxXQUFXLFNBQVMsTUFDeEIsTUFBTSxnQkFBZ0IsU0FDbEIsT0FDQSxNQUFNLFlBQVksUUFBUSxLQUFLLE1BQU0sRUFDMUM7QUFFRCxVQUFNLGFBQWEsU0FBUyxNQUMxQixNQUFNLGdCQUFnQixTQUNsQixPQUNBLE1BQU0sWUFBWSxRQUFRLEdBQUcsTUFBTSxFQUN4QztBQUVELFVBQU0sVUFBVTtBQUFBLE1BQ2QsTUFBTSxnQkFBZ0IsU0FFZixNQUFNLGVBQWUsVUFBVSxNQUFNLGVBQWUsUUFBUSxNQUFNLGVBQWUsTUFBTSxNQUFNLFdBQVcsV0FBVyxHQUFHLElBQ25ILFFBQ0EsUUFFTCxNQUFNLFlBQVksV0FBVyxLQUFLLElBQUksUUFBUTtBQUFBLElBQ3pEO0FBRUksVUFBTSxPQUFPLElBQUksTUFBTSxXQUFXO0FBQ2xDLFVBQU0sUUFBUSxJQUFJLFdBQVcsTUFBTSxjQUFjLE1BQU0sWUFBWSxDQUFDO0FBRXBFLFVBQU0sV0FBVyxTQUFTLE1BQU0sTUFBTSxZQUFZLFFBQVEsTUFBTSxhQUFhLElBQUk7QUFFakYsVUFBTSxRQUFRO0FBQUEsTUFBUyxNQUNyQixNQUFNLGVBQWUsVUFDbEIsTUFBTSxlQUFlLFFBQ3JCLE1BQU0sZUFBZSxNQUNyQixNQUFNLFdBQVcsV0FBVyxHQUFHO0FBQUEsSUFDeEM7QUFFSSxVQUFNLGNBQWMsU0FBUyxNQUMzQixTQUFTLFVBQVUsT0FDZixTQUFTLFFBQ1QsTUFBTSxLQUNYO0FBRUQsVUFBTSxZQUFZLFNBQVMsT0FBTztBQUFBLE1BQ2hDLE1BQU07QUFBQSxNQUNOLE1BQU0sTUFBTTtBQUFBLE1BQ1osT0FBTyxNQUFNLE1BQU8sWUFBWSxVQUFVLE9BQU8sUUFBUSxLQUFLO0FBQUEsSUFDcEUsRUFBTTtBQUVGLFVBQU0sa0JBQWtCLGNBQWMsU0FBUztBQUUvQyxVQUFNLFdBQVcsU0FBUyxNQUN4QixXQUFXLFVBQVUsT0FDakIsV0FBVyxRQUNYLE1BQU0sTUFBTSxNQUFNLE1BQ3ZCO0FBRUQsVUFBTSxpQkFBaUIsU0FBUyxPQUFPO0FBQUEsTUFDckMsaUJBQWlCLE1BQU0sTUFBTSxPQUFPO0FBQUEsSUFDMUMsRUFBTTtBQUVGLFVBQU0sY0FBYyxTQUFTLE1BQU07QUFDakMsWUFBTSxRQUFRLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLElBQUksS0FDdEQsT0FDQSxXQUFXLE1BQU0sS0FBSyxJQUFJO0FBRTlCLGFBQU8sa0VBQ2tDLFFBQVEsVUFBVSxNQUFNO0FBQUEsSUFDbkUsQ0FBQztBQUVELFVBQU0sZ0JBQWdCLFNBQVMsT0FBTztBQUFBLE1BQ3BDLFlBQVksT0FBUSxNQUFNLE1BQU0sQ0FBQztBQUFBLElBQ3ZDLEVBQU07QUFFRixVQUFNLHVCQUF1QixTQUFTLE9BQU87QUFBQSxNQUMzQyxLQUFLLEdBQUksTUFBTSxNQUFNLE1BQU0sQ0FBQztBQUFBLE1BQzVCLENBQUUsR0FBRyxLQUFLLFFBQVEsT0FBTyxVQUFVLE1BQU0sR0FBSSxHQUFJLE1BQU0sTUFBTSxDQUFDO0FBQUEsSUFDcEUsRUFBTTtBQUVGLFVBQU0sa0JBQWtCLFNBQVMsTUFDL0IsTUFBTSxZQUFZLFVBQVUsTUFBTSxRQUFRLFdBQVcsSUFDakQsTUFBTSxVQUNOLE9BQ0w7QUFFRCxVQUFNLFVBQVU7QUFBQSxNQUFTLE1BQ3ZCLG9CQUNHLE1BQU0sYUFBYSxPQUFPLDhCQUE4QixPQUN4RCxNQUFNLFdBQVcsT0FBTyw2Q0FBNkMsT0FDckUsTUFBTSxTQUFTLE9BQU8sb0NBQW9DLE9BQzFELE1BQU0sWUFBWSxPQUFPLGNBQWMsT0FDdkMsT0FBTyxVQUFVLE9BQU8saUNBQWlDO0FBQUEsSUFDbEU7QUFFSSxVQUFNLGFBQWEsU0FBUyxNQUMxQixNQUFNLFlBQVksT0FDZCxFQUFFLGlCQUFpQixPQUFNLElBQ3pCLENBQUEsQ0FDTDtBQUVELFVBQU0sb0JBQW9CLFNBQVMsTUFBTTtBQUV2QyxhQUFPLENBQUU7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBLEVBQUUsU0FBUyxNQUFNLE1BQU0sTUFBTSxPQUFPLEtBQUk7QUFBQSxNQUNoRCxDQUFPO0FBQUEsSUFDSCxDQUFDO0FBRUQsVUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFLO0FBQ2pDLFlBQU0sYUFBYSxXQUFXLEtBQUssTUFBTSxZQUFZO0FBQ3JELFVBQUksV0FBVyxRQUFRLE1BQU0sTUFBTSxLQUFLO0FBQ3RDLGNBQU0sUUFBUTtBQUFBLE1BQ2hCO0FBQUEsSUFDRixDQUFDO0FBRUQsVUFBTSxNQUFNLE1BQU0sY0FBYyxPQUFLO0FBQ25DLFVBQUksQ0FBQyxNQUFNLGNBQWMsR0FBRztBQUMxQixjQUFNLGFBQWEsV0FBVyxDQUFDO0FBQy9CLFlBQUksV0FBVyxRQUFRLE1BQU0sTUFBTSxLQUFLO0FBQ3RDLGdCQUFNLFFBQVE7QUFBQSxRQUNoQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFFRCxhQUFTLFlBQWEsS0FBSyxRQUFRO0FBRWpDLFlBQU0sTUFBTSxNQUFNLFNBQVMsR0FBRztBQUM5QixZQUFNLE1BQU0sTUFBTSxZQUFZLEdBQUc7QUFDakMsWUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixZQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFlBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsWUFBTSxNQUFNLElBQUksSUFBSTtBQUVwQixZQUFNLFFBQVEsTUFBTSxNQUFPLFlBQVksVUFBVSxPQUFPLFFBQVEsS0FBSztBQUdyRSxXQUFLLHFCQUFxQixLQUFLO0FBQy9CLGlCQUFXLFFBQVEsS0FBSyxVQUFVLEtBQUs7QUFBQSxJQUN6QztBQUVBLGFBQVMsV0FBWSxHQUFHO0FBQ3RCLFlBQU0sUUFBUSxXQUFXLFVBQVUsU0FDL0IsV0FBVyxRQUVULE1BQU0sZ0JBQWdCLFNBQ2xCLE9BQ0EsTUFBTSxZQUFZLFFBQVEsR0FBRyxNQUFNO0FBRzdDLFVBQUksT0FBTyxNQUFNLFlBQVksRUFBRSxXQUFXLEtBQUssWUFBWSxTQUFTLEVBQUUsUUFBUSxNQUFNLEVBQUUsQ0FBQyxNQUFNLE1BQU07QUFDakcsZUFBTztBQUFBLFVBQ0wsR0FBRztBQUFBLFVBQ0gsR0FBRztBQUFBLFVBQ0gsR0FBRztBQUFBLFVBQ0gsR0FBRztBQUFBLFVBQ0gsR0FBRztBQUFBLFVBQ0gsR0FBRztBQUFBLFVBQ0gsR0FBRyxVQUFVLE9BQU8sTUFBTTtBQUFBLFVBQzFCLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxRQUNmO0FBQUEsTUFDTTtBQUVBLFlBQU1DLFNBQVEsVUFBVSxDQUFDO0FBRXpCLFVBQUksVUFBVSxRQUFRQSxPQUFNLE1BQU0sUUFBUTtBQUN4QyxRQUFBQSxPQUFNLElBQUk7QUFBQSxNQUNaO0FBRUEsTUFBQUEsT0FBTSxNQUFNLFNBQVNBLE1BQUs7QUFDMUIsTUFBQUEsT0FBTSxNQUFNLFlBQVlBLE1BQUs7QUFFN0IsYUFBTyxPQUFPLE9BQU9BLFFBQU8sU0FBU0EsTUFBSyxDQUFDO0FBQUEsSUFDN0M7QUFFQSxhQUFTLGVBQWdCLE1BQU0sS0FBSyxRQUFRO0FBQzFDLFlBQU0sUUFBUSxZQUFZO0FBQzFCLFVBQUksVUFBVSxLQUFNO0FBRXBCLFlBQ0UsUUFBUSxNQUFNLGFBQ2QsU0FBUyxNQUFNLGNBQ2YsT0FBTyxNQUFNLHNCQUFxQjtBQUVwQyxVQUFJLElBQUksS0FBSyxJQUFJLE9BQU8sS0FBSyxJQUFJLEdBQUcsT0FBTyxLQUFLLElBQUksQ0FBQztBQUVyRCxVQUFJLEdBQUcsS0FBSyxRQUFRLE1BQU07QUFDeEIsWUFBSSxRQUFRO0FBQUEsTUFDZDtBQUVBLFlBQ0UsSUFBSSxLQUFLLElBQUksUUFBUSxLQUFLLElBQUksR0FBRyxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQ2hELElBQUksS0FBSyxNQUFNLE1BQU0sSUFBSSxLQUFLLEdBQzlCLElBQUksS0FBSyxNQUFNLE1BQU0sS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsRUFBRSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FDaEUsTUFBTSxTQUFTO0FBQUEsUUFDYixHQUFHLE1BQU0sTUFBTTtBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsUUFDQSxHQUFHLFNBQVMsVUFBVSxPQUFPLE1BQU0sTUFBTSxJQUFJO0FBQUEsTUFDdkQsQ0FBUztBQUVILFlBQU0sTUFBTSxJQUFJO0FBQ2hCLFlBQU0sTUFBTSxJQUFJO0FBQ2hCLGtCQUFZLEtBQUssTUFBTTtBQUFBLElBQ3pCO0FBRUEsYUFBUyxNQUFPLEtBQUssUUFBUTtBQUMzQixZQUFNRCxLQUFJLEtBQUssTUFBTSxHQUFHO0FBQ3hCLFlBQU0sTUFBTSxTQUFTO0FBQUEsUUFDbkIsR0FBQUE7QUFBQSxRQUNBLEdBQUcsTUFBTSxNQUFNO0FBQUEsUUFDZixHQUFHLE1BQU0sTUFBTTtBQUFBLFFBQ2YsR0FBRyxTQUFTLFVBQVUsT0FBTyxNQUFNLE1BQU0sSUFBSTtBQUFBLE1BQ3JELENBQU87QUFFRCxZQUFNLE1BQU0sSUFBSUE7QUFDaEIsa0JBQVksS0FBSyxNQUFNO0FBQUEsSUFDekI7QUFFQSxhQUFTLFlBQWEsS0FBSztBQUN6QixZQUFNLEtBQUssSUFBSTtBQUFBLElBQ2pCO0FBRUEsYUFBUyxnQkFBaUIsT0FBTyxhQUFhLEtBQUssS0FBSyxRQUFRO0FBQzlELGNBQVEsVUFBVSxLQUFLLEdBQUc7QUFFMUIsVUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLEdBQUc7QUFDM0IsbUJBQVcsUUFBUSxNQUFNLGFBQVk7QUFDckM7QUFBQSxNQUNGO0FBRUEsWUFBTSxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssQ0FBQztBQUVwQyxVQUFJLE1BQU0sS0FBSyxNQUFNLEtBQUs7QUFDeEIsbUJBQVcsUUFBUSxNQUFNLGFBQVk7QUFDckM7QUFBQSxNQUNGO0FBRUEsWUFBTSxNQUFNO0FBQUEsUUFDVixHQUFHLGdCQUFnQixNQUFNLE1BQU0sTUFBTSxNQUFNO0FBQUEsUUFDM0MsR0FBRyxnQkFBZ0IsTUFBTSxNQUFNLE1BQU0sTUFBTTtBQUFBLFFBQzNDLEdBQUcsZ0JBQWdCLE1BQU0sTUFBTSxNQUFNLE1BQU07QUFBQSxRQUMzQyxHQUFHLFNBQVMsVUFBVSxPQUNqQixnQkFBZ0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxJQUN6QztBQUFBLE1BQ1o7QUFFTSxVQUFJLGdCQUFnQixLQUFLO0FBQ3ZCLGNBQU0sTUFBTSxTQUFTLEdBQUc7QUFDeEIsY0FBTSxNQUFNLElBQUksSUFBSTtBQUNwQixjQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLGNBQU0sTUFBTSxJQUFJLElBQUk7QUFBQSxNQUN0QjtBQUVBLGtCQUFZLEtBQUssTUFBTTtBQUV2QixVQUFJLFdBQVcsUUFBUSxLQUFLLE9BQU8saUJBQWlCLFFBQVE7QUFDMUQsY0FBTSxRQUFRLElBQUksT0FBTztBQUN6QixpQkFBUyxNQUFNO0FBQ2IsY0FBSSxPQUFPLGtCQUFrQixPQUFPLEtBQUs7QUFBQSxRQUMzQyxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFFQSxhQUFTLGVBQWdCLEtBQUssUUFBUTtBQUNwQyxVQUFJO0FBQ0osWUFBTSxNQUFNLElBQUksT0FBTztBQUV2QixXQUFLLEdBQUc7QUFFUixVQUFJLFFBQVEsVUFBVSxPQUFPO0FBQzNCLFlBQ0UsSUFBSSxZQUFZLFNBQVMsVUFBVSxPQUFPLElBQUksTUFDM0MsQ0FBQyxrQkFBa0IsS0FBSyxHQUFHLEdBQzlCO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBRUEsY0FBTSxTQUFTLEdBQUc7QUFBQSxNQUNwQixPQUNLO0FBQ0gsWUFBSUM7QUFFSixZQUFJLENBQUMsSUFBSSxTQUFTLEdBQUcsR0FBRztBQUN0QixpQkFBTztBQUFBLFFBQ1QsV0FDUyxTQUFTLFVBQVUsUUFBUSxJQUFJLFdBQVcsTUFBTSxHQUFHO0FBQzFELFVBQUFBLFNBQVEsSUFBSSxVQUFVLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxJQUFJLE9BQUssU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUU1RSxjQUNFQSxPQUFNLFdBQVcsS0FDZCxDQUFDLDRDQUE0QyxLQUFLLEdBQUcsR0FDeEQ7QUFDQSxtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGLFdBQ1MsU0FBUyxVQUFVLFFBQVEsSUFBSSxXQUFXLE9BQU8sR0FBRztBQUMzRCxVQUFBQSxTQUFRLElBQUksVUFBVSxHQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsTUFBTSxHQUFHO0FBRWxELGNBQ0VBLE9BQU0sV0FBVyxLQUNkLENBQUMsNEVBQTRFLEtBQUssR0FBRyxHQUN4RjtBQUNBLG1CQUFPO0FBQUEsVUFDVDtBQUVBLG1CQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixrQkFBTUMsS0FBSSxTQUFTRCxPQUFPLENBQUMsR0FBSSxFQUFFO0FBQ2pDLGdCQUFJQyxLQUFJLEtBQUtBLEtBQUksS0FBSztBQUNwQixxQkFBTztBQUFBLFlBQ1Q7QUFDQSxZQUFBRCxPQUFPLENBQUMsSUFBS0M7QUFBQSxVQUNmO0FBRUEsZ0JBQU0sSUFBSSxXQUFXRCxPQUFPLENBQUMsQ0FBRTtBQUMvQixjQUFJLElBQUksS0FBSyxJQUFJLEdBQUc7QUFDbEIsbUJBQU87QUFBQSxVQUNUO0FBQ0EsVUFBQUEsT0FBTyxDQUFDLElBQUs7QUFBQSxRQUNmLE9BQ0s7QUFDSCxpQkFBTztBQUFBLFFBQ1Q7QUFFQSxZQUNFQSxPQUFPLENBQUMsSUFBSyxLQUFLQSxPQUFPLENBQUMsSUFBSyxPQUM1QkEsT0FBTyxDQUFDLElBQUssS0FBS0EsT0FBTyxDQUFDLElBQUssT0FDL0JBLE9BQU8sQ0FBQyxJQUFLLEtBQUtBLE9BQU8sQ0FBQyxJQUFLLE9BQzlCLFNBQVMsVUFBVSxTQUFTQSxPQUFPLEtBQU0sS0FBS0EsT0FBTyxDQUFDLElBQUssSUFDL0Q7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFFQSxjQUFNO0FBQUEsVUFDSixHQUFHQSxPQUFPLENBQUM7QUFBQSxVQUNYLEdBQUdBLE9BQU8sQ0FBQztBQUFBLFVBQ1gsR0FBR0EsT0FBTyxDQUFDO0FBQUEsVUFDWCxHQUFHLFNBQVMsVUFBVSxPQUNsQkEsT0FBTyxDQUFDLElBQUssTUFDYjtBQUFBLFFBQ2Q7QUFBQSxNQUNNO0FBRUEsWUFBTSxNQUFNLFNBQVMsR0FBRztBQUN4QixZQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFlBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsWUFBTSxNQUFNLElBQUksSUFBSTtBQUVwQixrQkFBWSxLQUFLLE1BQU07QUFFdkIsVUFBSSxXQUFXLE1BQU07QUFDbkIsY0FBTSxRQUFRLElBQUksT0FBTztBQUN6QixpQkFBUyxNQUFNO0FBQ2IsY0FBSSxPQUFPLGtCQUFrQixPQUFPLEtBQUs7QUFBQSxRQUMzQyxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFFQSxhQUFTLGNBQWUsT0FBTztBQUM3QixZQUFNLE1BQU0sV0FBVyxLQUFLO0FBQzVCLFlBQU0sTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxFQUFDO0FBRXBELFVBQUksSUFBSSxNQUFNLFFBQVE7QUFDcEIsWUFBSSxJQUFJLE1BQU0sTUFBTTtBQUFBLE1BQ3RCO0FBRUEsWUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixZQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFlBQU0sTUFBTSxJQUFJLElBQUk7QUFFcEIsa0JBQVksS0FBSyxJQUFJO0FBQUEsSUFDdkI7QUFFQSxhQUFTLGNBQWUsS0FBSztBQUMzQixVQUFJLElBQUksU0FBUztBQUNmO0FBQUEsVUFDRSxJQUFJLFNBQVM7QUFBQSxVQUNiLElBQUksU0FBUztBQUFBLFVBQ2I7QUFBQSxRQUNWO0FBQUEsTUFDTSxPQUNLO0FBQ0gseUJBQWlCLEdBQUc7QUFBQSxNQUN0QjtBQUFBLElBQ0Y7QUFFQSxVQUFNLG1CQUFtQjtBQUFBLE1BQ3ZCLFNBQU87QUFBRSx1QkFBZSxJQUFJLFNBQVMsTUFBTSxJQUFJLFNBQVMsR0FBRztBQUFBLE1BQUU7QUFBQSxNQUM3RDtBQUFBLElBQ047QUFFSSxhQUFTLGdCQUFpQixLQUFLO0FBQzdCO0FBQUEsUUFDRSxJQUFJLFFBQVEsT0FBTztBQUFBLFFBQ25CLElBQUksUUFBUSxPQUFPO0FBQUEsUUFDbkI7QUFBQSxNQUNSO0FBQUEsSUFDSTtBQUVBLGFBQVMsV0FBWSxLQUFLO0FBQ3hCO0FBQUEsUUFDRSxJQUFJLFFBQVEsT0FBTztBQUFBLFFBQ25CLElBQUksUUFBUSxPQUFPO0FBQUEsTUFDM0I7QUFBQSxJQUNJO0FBRUEsYUFBUyxnQkFBaUIsS0FBSztBQUc3QixVQUFJLGFBQWEsVUFBVSxNQUFNO0FBQy9CLHFCQUFhLE1BQU0sSUFBSSxNQUFNLFVBQVUsTUFBTSxJQUFJO0FBQUEsTUFDbkQ7QUFBQSxJQUNGO0FBRUEsYUFBUyxXQUFZLEtBQUs7QUFDeEIsY0FBUSxRQUFRO0FBQUEsSUFDbEI7QUFFQSxhQUFTLFlBQWE7QUFDcEIsWUFBTSxRQUFRLENBQUE7QUFFZCxZQUFNLGlCQUFpQixRQUFRLE1BQU07QUFBQSxRQUNuQyxFQUFFLE9BQU87QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLFlBQVksUUFBUTtBQUFBLFVBQ3BCLE9BQU87QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLHVCQUF1QjtBQUFBLFFBQ2pDLEdBQVcsTUFBTTtBQUFBLFVBQ1AsRUFBRSxNQUFNO0FBQUEsWUFDTixPQUFPLFNBQVMsU0FBUyxVQUFVLE9BQU8sTUFBTTtBQUFBLFlBQ2hELE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxVQUNwQixDQUFXO0FBQUEsVUFFRCxFQUFFLE1BQU07QUFBQSxZQUNOLE9BQU8sU0FBUyxTQUFTLFVBQVUsT0FBTyxNQUFNO0FBQUEsWUFDaEQsTUFBTTtBQUFBLFlBQ04sUUFBUTtBQUFBLFVBQ3BCLENBQVc7QUFBQSxRQUNYLENBQVM7QUFBQSxNQUNUO0FBRU0sWUFBTTtBQUFBLFFBQ0osRUFBRSxPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDakIsR0FBVztBQUFBLFVBQ0QsRUFBRSxTQUFTO0FBQUEsWUFDVCxPQUFPO0FBQUEsWUFDUCxPQUFPLE1BQU0sTUFBTyxRQUFRLEtBQUs7QUFBQSxZQUNqQyxHQUFJLFNBQVMsVUFBVSxPQUNuQixFQUFFLFVBQVUsS0FBSSxJQUNoQixDQUFBO0FBQUEsWUFFSixHQUFHLFNBQVMsU0FBUztBQUFBLGNBQ25CLFNBQVMsU0FBTztBQUNkLGdDQUFnQixlQUFlLEdBQUcsTUFBTSxJQUFJO0FBQUEsY0FDOUM7QUFBQSxjQUNBLFVBQVU7QUFBQSxjQUNWLFFBQVEsU0FBTztBQUNiLCtCQUFlLEtBQUssSUFBSSxNQUFNLFFBQVEsTUFBTSxhQUFZO0FBQ3hELGdDQUFnQixLQUFLO0FBQUEsY0FDdkI7QUFBQSxZQUNkLENBQWE7QUFBQSxVQUNiLENBQVc7QUFBQSxVQUVELEVBQUUsT0FBTztBQUFBLFlBQ1AsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTSxHQUFHLFFBQVEsS0FBSztBQUFBLFVBQ2xDLENBQVc7QUFBQSxRQUNYLENBQVM7QUFBQSxNQUNUO0FBRU0sYUFBTyxFQUFFLE9BQU87QUFBQSxRQUNkLE9BQU87QUFBQSxNQUNmLEdBQVM7QUFBQSxRQUNELEVBQUUsT0FBTyxFQUFFLE9BQU8sMENBQXlDLENBQUU7QUFBQSxRQUU3RCxFQUFFLE9BQU87QUFBQSxVQUNQLE9BQU8sWUFBWTtBQUFBLFVBQ25CLE9BQU8sZUFBZTtBQUFBLFFBQ2hDLEdBQVcsS0FBSztBQUFBLE1BQ2hCLENBQU87QUFBQSxJQUNIO0FBRUEsYUFBUyxhQUFjO0FBQ3JCLGFBQU8sRUFBRSxZQUFZO0FBQUEsUUFDbkIsWUFBWSxLQUFLO0FBQUEsUUFDakIsVUFBVTtBQUFBLE1BQ2xCLEdBQVMsTUFBTTtBQUFBLFFBQ1AsRUFBRSxXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsUUFDaEIsR0FBVyxjQUFjO0FBQUEsUUFFakIsRUFBRSxXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsUUFDaEIsR0FBVyxVQUFVO0FBQUEsUUFFYixFQUFFLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxRQUNoQixHQUFXLGFBQWE7QUFBQSxNQUN4QixDQUFPO0FBQUEsSUFDSDtBQUVBLGFBQVMsUUFBUyxLQUFLO0FBQ3JCLFdBQUssUUFBUTtBQUFBLElBQ2Y7QUFFQSxhQUFTLFlBQWE7QUFDcEIsYUFBTyxFQUFFLE9BQU87QUFBQSxRQUNkLE9BQU87QUFBQSxNQUNmLEdBQVM7QUFBQSxRQUNELEVBQUUsT0FBTztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsWUFBWSxLQUFLO0FBQUEsVUFDakIsT0FBTztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsdUJBQXVCO0FBQUEsUUFDakMsR0FBVyxNQUFNO0FBQUEsVUFDUCxFQUFFLE1BQU07QUFBQSxZQUNOLE1BQU0sR0FBRyxRQUFRLFlBQVk7QUFBQSxZQUM3QixNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsVUFDcEIsQ0FBVztBQUFBLFVBRUQsRUFBRSxNQUFNO0FBQUEsWUFDTixNQUFNLEdBQUcsUUFBUSxZQUFZO0FBQUEsWUFDN0IsTUFBTTtBQUFBLFlBQ04sUUFBUTtBQUFBLFVBQ3BCLENBQVc7QUFBQSxVQUVELEVBQUUsTUFBTTtBQUFBLFlBQ04sTUFBTSxHQUFHLFFBQVEsWUFBWTtBQUFBLFlBQzdCLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxVQUNwQixDQUFXO0FBQUEsUUFDWCxDQUFTO0FBQUEsTUFDVCxDQUFPO0FBQUEsSUFDSDtBQUVBLGFBQVMsaUJBQWtCO0FBQ3pCLFlBQU0sT0FBTztBQUFBLFFBQ1gsS0FBSztBQUFBLFFBQ0wsT0FBTyw4RUFDRixTQUFTLFVBQVUsT0FBTyxjQUFjO0FBQUEsUUFDN0MsT0FBTyxjQUFjO0FBQUEsUUFDckIsR0FBSSxTQUFTLFVBQVUsT0FDbkI7QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULGFBQWE7QUFBQSxRQUMzQixJQUNZLENBQUE7QUFBQSxNQUVaO0FBRU0sWUFBTSxRQUFRO0FBQUEsUUFDWixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxPQUFNLEdBQUk7QUFBQSxRQUM3QyxFQUFFLE9BQU8sRUFBRSxPQUFPLCtDQUE4QyxDQUFFO0FBQUEsUUFDbEUsRUFBRSxPQUFPLEVBQUUsT0FBTywrQ0FBOEMsQ0FBRTtBQUFBLFFBQ2xFLEVBQUUsT0FBTztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsT0FBTyxxQkFBcUI7QUFBQSxRQUN0QyxHQUFXO0FBQUEsVUFDRCxNQUFNLE1BQU0sUUFBUSxTQUNoQixFQUFFLE9BQU8sRUFBRSxPQUFPLGtDQUFpQyxDQUFFLElBQ3JEO0FBQUEsUUFDZCxDQUFTO0FBQUEsTUFDVDtBQUVNLFlBQU0sVUFBVTtBQUFBLFFBQ2QsRUFBRSxTQUFTO0FBQUEsVUFDVCxPQUFPO0FBQUEsVUFDUCxZQUFZLE1BQU0sTUFBTTtBQUFBLFVBQ3hCLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLFdBQVc7QUFBQSxVQUNYLGlCQUFpQjtBQUFBLFVBQ2pCLGdCQUFnQjtBQUFBLFVBQ2hCLFVBQVUsU0FBUyxVQUFVO0FBQUEsVUFDN0I7QUFBQSxVQUNBLHVCQUF1QjtBQUFBLFVBQ3ZCLFVBQVU7QUFBQSxRQUNwQixDQUFTO0FBQUEsTUFDVDtBQUVNLGVBQVMsVUFBVSxRQUFRLFFBQVE7QUFBQSxRQUNqQyxFQUFFLFNBQVM7QUFBQSxVQUNULE9BQU87QUFBQSxVQUNQLFlBQVksTUFBTSxNQUFNO0FBQUEsVUFDeEIsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsV0FBVztBQUFBLFVBQ1gsWUFBWTtBQUFBLFVBQ1osaUJBQWlCO0FBQUEsVUFDakIsZ0JBQWdCO0FBQUEsVUFDaEIsVUFBVTtBQUFBLFVBQ1YsVUFBVSxTQUFTLFVBQVU7QUFBQSxVQUM3QixlQUFlO0FBQUEsVUFDZjtBQUFBLFVBQ0EsR0FBRyxTQUFTLGNBQWM7QUFBQSxZQUN4Qix1QkFBdUIsV0FBUyxnQkFBZ0IsT0FBTyxLQUFLLEdBQUc7QUFBQSxZQUMvRCxVQUFVLFdBQVMsZ0JBQWdCLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSTtBQUFBLFVBQzVFLENBQVc7QUFBQSxRQUNYLENBQVM7QUFBQSxNQUNUO0FBRU0sYUFBTztBQUFBLFFBQ0wsS0FBSyxPQUFPLE1BQU0sT0FBTyxRQUFRLFNBQVMsT0FBTyxNQUFNLGtCQUFrQixLQUFLO0FBQUEsUUFDOUUsRUFBRSxPQUFPLEVBQUUsT0FBTywwQkFBeUIsR0FBSSxPQUFPO0FBQUEsTUFDOUQ7QUFBQSxJQUNJO0FBRUEsYUFBUyxhQUFjO0FBQ3JCLGFBQU87QUFBQSxRQUNMLEVBQUUsT0FBTyxFQUFFLE9BQU8sMkJBQTBCLEdBQUk7QUFBQSxVQUM5QyxFQUFFLE9BQU8sR0FBRztBQUFBLFVBQ1osRUFBRSxTQUFTO0FBQUEsWUFDVCxZQUFZLE1BQU0sTUFBTTtBQUFBLFlBQ3hCLEtBQUs7QUFBQSxZQUNMLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU0sT0FBTztBQUFBLFlBQ2IsVUFBVSxTQUFTLFVBQVU7QUFBQSxZQUM3QixHQUFHLFNBQVMsVUFBVTtBQUFBLGNBQ3BCLHVCQUF1QixXQUFTLGdCQUFnQixPQUFPLEtBQUssR0FBRztBQUFBLGNBQy9ELFVBQVUsV0FBUyxnQkFBZ0IsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJO0FBQUEsWUFDOUUsQ0FBYTtBQUFBLFVBQ2IsQ0FBVztBQUFBLFVBQ0QsRUFBRSxTQUFTO0FBQUEsWUFDVCxPQUFPLE1BQU0sTUFBTTtBQUFBLFlBQ25CLFdBQVc7QUFBQSxZQUNYLFVBQVUsU0FBUyxVQUFVO0FBQUEsWUFDN0IsVUFBVTtBQUFBLFlBQ1YsR0FBRyxTQUFTLE9BQU87QUFBQSxjQUNqQixTQUFTLFNBQU8sZ0JBQWdCLElBQUksT0FBTyxPQUFPLEtBQUssS0FBSyxHQUFHO0FBQUEsY0FDL0QsUUFBUSxTQUFPLGdCQUFnQixJQUFJLE9BQU8sT0FBTyxLQUFLLEtBQUssS0FBSyxJQUFJO0FBQUEsWUFDbEYsQ0FBYTtBQUFBLFVBQ2IsQ0FBVztBQUFBLFFBQ1gsQ0FBUztBQUFBLFFBRUQsRUFBRSxPQUFPLEVBQUUsT0FBTywyQkFBMEIsR0FBSTtBQUFBLFVBQzlDLEVBQUUsT0FBTyxHQUFHO0FBQUEsVUFDWixFQUFFLFNBQVM7QUFBQSxZQUNULFlBQVksTUFBTSxNQUFNO0FBQUEsWUFDeEIsS0FBSztBQUFBLFlBQ0wsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTSxPQUFPO0FBQUEsWUFDYixVQUFVLFNBQVMsVUFBVTtBQUFBLFlBQzdCLEdBQUcsU0FBUyxVQUFVO0FBQUEsY0FDcEIsdUJBQXVCLFdBQVMsZ0JBQWdCLE9BQU8sS0FBSyxHQUFHO0FBQUEsY0FDL0QsVUFBVSxXQUFTLGdCQUFnQixPQUFPLEtBQUssS0FBSyxRQUFRLElBQUk7QUFBQSxZQUM5RSxDQUFhO0FBQUEsVUFDYixDQUFXO0FBQUEsVUFDRCxFQUFFLFNBQVM7QUFBQSxZQUNULE9BQU8sTUFBTSxNQUFNO0FBQUEsWUFDbkIsV0FBVztBQUFBLFlBQ1gsVUFBVSxTQUFTLFVBQVU7QUFBQSxZQUM3QixVQUFVO0FBQUEsWUFDVixHQUFHLFNBQVMsT0FBTztBQUFBLGNBQ2pCLFNBQVMsU0FBTyxnQkFBZ0IsSUFBSSxPQUFPLE9BQU8sS0FBSyxLQUFLLEdBQUc7QUFBQSxjQUMvRCxRQUFRLFNBQU8sZ0JBQWdCLElBQUksT0FBTyxPQUFPLEtBQUssS0FBSyxLQUFLLElBQUk7QUFBQSxZQUNsRixDQUFhO0FBQUEsVUFDYixDQUFXO0FBQUEsUUFDWCxDQUFTO0FBQUEsUUFFRCxFQUFFLE9BQU8sRUFBRSxPQUFPLDJCQUEwQixHQUFJO0FBQUEsVUFDOUMsRUFBRSxPQUFPLEdBQUc7QUFBQSxVQUNaLEVBQUUsU0FBUztBQUFBLFlBQ1QsWUFBWSxNQUFNLE1BQU07QUFBQSxZQUN4QixLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxVQUFVLFNBQVMsVUFBVTtBQUFBLFlBQzdCLE1BQU0sT0FBTztBQUFBLFlBQ2IsR0FBRyxTQUFTLFVBQVU7QUFBQSxjQUNwQix1QkFBdUIsV0FBUyxnQkFBZ0IsT0FBTyxLQUFLLEdBQUc7QUFBQSxjQUMvRCxVQUFVLFdBQVMsZ0JBQWdCLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSTtBQUFBLFlBQzlFLENBQWE7QUFBQSxVQUNiLENBQVc7QUFBQSxVQUNELEVBQUUsU0FBUztBQUFBLFlBQ1QsT0FBTyxNQUFNLE1BQU07QUFBQSxZQUNuQixXQUFXO0FBQUEsWUFDWCxVQUFVLFNBQVMsVUFBVTtBQUFBLFlBQzdCLFVBQVU7QUFBQSxZQUNWLEdBQUcsU0FBUyxPQUFPO0FBQUEsY0FDakIsU0FBUyxTQUFPLGdCQUFnQixJQUFJLE9BQU8sT0FBTyxLQUFLLEtBQUssR0FBRztBQUFBLGNBQy9ELFFBQVEsU0FBTyxnQkFBZ0IsSUFBSSxPQUFPLE9BQU8sS0FBSyxLQUFLLEtBQUssSUFBSTtBQUFBLFlBQ2xGLENBQWE7QUFBQSxVQUNiLENBQVc7QUFBQSxRQUNYLENBQVM7QUFBQSxRQUVELFNBQVMsVUFBVSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sOEJBQThCO0FBQUEsVUFDeEUsRUFBRSxPQUFPLEdBQUc7QUFBQSxVQUNaLEVBQUUsU0FBUztBQUFBLFlBQ1QsWUFBWSxNQUFNLE1BQU07QUFBQSxZQUN4QixPQUFPO0FBQUEsWUFDUCxVQUFVLFNBQVMsVUFBVTtBQUFBLFlBQzdCLE1BQU0sT0FBTztBQUFBLFlBQ2IsR0FBRyxTQUFTLFVBQVU7QUFBQSxjQUNwQix1QkFBdUIsV0FBUyxnQkFBZ0IsT0FBTyxLQUFLLEdBQUc7QUFBQSxjQUMvRCxVQUFVLFdBQVMsZ0JBQWdCLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSTtBQUFBLFlBQzlFLENBQWE7QUFBQSxVQUNiLENBQVc7QUFBQSxVQUNELEVBQUUsU0FBUztBQUFBLFlBQ1QsT0FBTyxNQUFNLE1BQU07QUFBQSxZQUNuQixXQUFXO0FBQUEsWUFDWCxVQUFVLFNBQVMsVUFBVTtBQUFBLFlBQzdCLFVBQVU7QUFBQSxZQUNWLEdBQUcsU0FBUyxPQUFPO0FBQUEsY0FDakIsU0FBUyxTQUFPLGdCQUFnQixJQUFJLE9BQU8sT0FBTyxLQUFLLEtBQUssR0FBRztBQUFBLGNBQy9ELFFBQVEsU0FBTyxnQkFBZ0IsSUFBSSxPQUFPLE9BQU8sS0FBSyxLQUFLLEtBQUssSUFBSTtBQUFBLFlBQ2xGLENBQWE7QUFBQSxVQUNiLENBQVc7QUFBQSxRQUNYLENBQVMsSUFBSTtBQUFBLE1BQ2I7QUFBQSxJQUNJO0FBRUEsYUFBUyxnQkFBaUI7QUFDeEIsWUFBTSxLQUFLLFdBQVMsRUFBRSxPQUFPO0FBQUEsUUFDM0IsT0FBTztBQUFBLFFBQ1AsT0FBTyxFQUFFLGlCQUFpQixNQUFLO0FBQUEsUUFDL0IsR0FDRSxTQUFTLFVBQVUsT0FDZixTQUFTLGFBQWEsT0FBTztBQUFBLFVBQzdCLFNBQVMsTUFBTTtBQUFFLDBCQUFjLEtBQUs7QUFBQSxVQUFFO0FBQUEsUUFDcEQsQ0FBYSxJQUNDLENBQUE7QUFBQSxNQUVkLENBQU87QUFFRCxhQUFPO0FBQUEsUUFDTCxFQUFFLE9BQU87QUFBQSxVQUNQLE9BQU8sbURBQ0YsU0FBUyxVQUFVLE9BQU8sNENBQTRDO0FBQUEsUUFDckYsR0FBVyxnQkFBZ0IsTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUFBLE1BQ3hDO0FBQUEsSUFDSTtBQUVBLFdBQU8sTUFBTTtBQUNYLFlBQU0sUUFBUSxDQUFFLFdBQVUsQ0FBRTtBQUU1QixVQUFJLE1BQU0sU0FBUyxVQUFVLE1BQU0sWUFBWSxNQUFNO0FBQ25ELHdCQUFnQixPQUFPLE1BQU07QUFBQSxNQUMvQjtBQUVBLFlBQU0sYUFBYSxRQUFRLE1BQU07QUFBQSxRQUMvQixVQUFTO0FBQUEsTUFDakI7QUFFTSxZQUFNLGFBQWEsUUFBUSxNQUFNO0FBQUEsUUFDL0IsVUFBUztBQUFBLE1BQ2pCO0FBRU0sYUFBTyxFQUFFLE9BQU87QUFBQSxRQUNkLE9BQU8sUUFBUTtBQUFBLFFBQ2YsR0FBRyxXQUFXO0FBQUEsTUFDdEIsR0FBUyxLQUFLO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFDRixDQUFDO0FDeDBCRCxNQUFBLGNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsWUFBWTtBQUFBLE1BQ1YsTUFBTSxDQUFFLFFBQVEsTUFBTTtBQUFBLE1BQ3RCLFNBQVM7QUFBQSxJQUNmO0FBQUEsRUFDQTtBQUFBLEVBRUUsT0FBTyxDQUFFLFFBQVEsTUFBTTtBQUFBLEVBRXZCLE1BQU8sT0FBTyxFQUFFLE9BQU8sTUFBTSxNQUFLLEdBQUk7QUFDcEMsVUFBTSxFQUFFLE1BQUssSUFBSyxtQkFBa0I7QUFDcEMsVUFBTSxFQUFFLEdBQUUsSUFBSztBQUVmLFVBQU0sVUFBVSxJQUFJLEtBQUs7QUFDekIsVUFBTSxXQUFXLElBQUksSUFBSTtBQUN6QixVQUFNLGFBQWEsU0FBUyxNQUFNLFNBQVMsTUFBTSxZQUFZLEVBQUUsQ0FBQztBQUVoRSxVQUFNLEVBQUUsUUFBTyxJQUFLLFVBQVUsRUFBRSxRQUFPLENBQUU7QUFFekMsYUFBUyxVQUFXO0FBQ2xCLGFBQU8sR0FBRyxPQUFPLFFBQVEsV0FBVyxTQUFTLEdBQUcsT0FBTyxTQUFTLFdBQVcsUUFDdkUsV0FDQTtBQUFBLElBQ047QUFFQSxVQUFNLE9BQU8sSUFBSSxRQUFPLENBQUU7QUFFMUIsVUFBTSxhQUFhO0FBQUEsTUFBUyxNQUMxQixLQUFLLFVBQVUsU0FBUyxFQUFFLFdBQVcsT0FBTSxJQUFLLENBQUE7QUFBQSxJQUN0RDtBQUVJLFVBQU0sTUFBTSxRQUFPLEdBQUksU0FBTztBQUM1QixVQUFJLFFBQVEsVUFBVSxNQUFNO0FBQzFCLGFBQUssUUFBUTtBQUFBLE1BQ2Y7QUFBQSxJQUNGLENBQUM7QUFFRCxhQUFTLE9BQVEsS0FBSztBQUNwQixjQUFRLFFBQVE7QUFDaEIsV0FBSyxRQUFRLEdBQUc7QUFBQSxJQUNsQjtBQUVBLGFBQVMsT0FBUSxLQUFLO0FBQ3BCLGNBQVEsUUFBUTtBQUNoQixXQUFLLFFBQVEsUUFBTztBQUNwQixXQUFLLFFBQVEsR0FBRztBQUFBLElBQ2xCO0FBR0EsV0FBTyxPQUFPLE9BQU87QUFBQSxNQUNuQixLQUFNLEtBQUs7QUFBRSxnQkFBUSxHQUFHLE1BQU0sUUFBUSxTQUFTLE1BQU0sS0FBSyxHQUFHO0FBQUEsTUFBRTtBQUFBLE1BQy9ELEtBQU0sS0FBSztBQUFFLGlCQUFTLE1BQU0sS0FBSyxHQUFHO0FBQUEsTUFBRTtBQUFBLE1BQ3RDLE9BQVEsS0FBSztBQUFFLGlCQUFTLE1BQU0sT0FBTyxHQUFHO0FBQUEsTUFBRTtBQUFBLElBQ2hELENBQUs7QUFFRCxlQUFXLE9BQU8sb0JBQW9CLE9BQU87QUFBQSxNQUMzQyxNQUFNLEtBQUs7QUFBQSxNQUNYLEtBQUssU0FBUztBQUFBLElBQ3BCLEVBQU07QUFFRixXQUFPLE1BQU07QUFDWCxZQUFNLE9BQU87QUFBQSxRQUNYLEtBQUs7QUFBQSxRQUNMLEdBQUcsV0FBVztBQUFBLFFBQ2QsR0FBRztBQUFBLFFBQ0g7QUFBQSxRQUNBO0FBQUEsTUFDUjtBQUVNLFVBQUk7QUFFSixVQUFJLEtBQUssVUFBVSxVQUFVO0FBQzNCLG9CQUFZO0FBQUEsTUFDZCxPQUNLO0FBQ0gsb0JBQVk7QUFDWixlQUFPLE9BQU8sTUFBTTtBQUFBLFVBQ2xCLFFBQVEsTUFBTTtBQUFBLFVBQ2QsYUFBYSxNQUFNO0FBQUEsVUFDbkIsZUFBZTtBQUFBLFVBQ2Ysb0JBQW9CO0FBQUEsUUFDOUIsQ0FBUztBQUFBLE1BQ0g7QUFFQSxhQUFPLEVBQUUsV0FBVyxNQUFNLE1BQU0sT0FBTztBQUFBLElBQ3pDO0FBQUEsRUFDRjtBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZDLFVBQU0sUUFBUTtBQWFkLGFBQVMsWUFBYSxPQUFrQjtBQUNwQyxVQUFJLE1BQU0sY0FBYztBQUNwQixjQUFNLGFBQWEsUUFBUSxRQUFRLE1BQU0sSUFBSSxJQUFJLE1BQU0sSUFBSTtBQUFBLE1BQy9EO0FBQUEsSUFDSjs7Ozs7OztzQkExQkFFLG1CQUtNLE9BQUE7QUFBQSxJQUxELE9BQU07QUFBQSxJQUNOLFdBQVU7QUFBQSxJQUNULGFBQVMsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFFLE9BQUEsWUFBWSxNQUFNO0FBQUEsRUFBQSxHQUFBO0FBQUEsSUFDakNDLFdBQ08sS0FBQSxRQUFBLFdBQUEsQ0FBQSxHQUFBLFFBQUEsSUFBQTtBQUFBLEVBQUEsR0FBQSxFQUFBOzs7Ozs7Ozs7Ozs7QUNxQlQsVUFBTSxRQUFRQyxTQUEwQixTQUFBLFlBQUM7QUFFekMsVUFBTSxxQkFBcUI7QUFBQSxNQUN2QjtBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQ25HO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFDbkc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUNuRztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQ25HO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFDbkc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUNuRztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQ25HO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsSUFBQTs7Ozs7OztzQkFuQ3ZHQyxZQWtCYyxPQUFBLGFBQUEsR0FBQTtBQUFBLElBakJaLE1BQUs7QUFBQSxJQUNKLE1BQU0sT0FBQSxTQUFLO0FBQUEsRUFBQSxHQUFBO0FBQUEscUJBQ1osTUFjUTtBQUFBLE1BZFJDLFlBY1EsTUFBQTtBQUFBLFFBYk4sTUFBSztBQUFBLFFBQ0wsT0FBQTtBQUFBLFFBQU0sTUFBQTtBQUFBLFFBQUssT0FBQTtBQUFBLFFBQ1gsTUFBSztBQUFBLE1BQUEsR0FBQTtBQUFBLHlCQUNMLE1BU2dCO0FBQUEsVUFUaEJBLFlBU2dCLGFBQUEsTUFBQTtBQUFBLFlBQUEsU0FBQUMsUUFSZCxNQU9JO0FBQUEsY0FQSkQsWUFPSSxRQUFBO0FBQUEsZ0JBTkQsT0FBTyxFQUFBLE9BQUEsUUFBQTtBQUFBLGdCQUNSLGFBQUE7QUFBQSxnQkFDQSxhQUFBO0FBQUEsZ0JBQ0MsU0FBUyxPQUFBO0FBQUEsZ0JBQ1YsZ0JBQWE7QUFBQSxnQkFBQSxZQUNKLE9BQUE7QUFBQSxnQkFBQSx1QkFBQSxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFdBQUEsT0FBQSxRQUFLO0FBQUEsY0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdEIsVUFBTSxPQUFPO0FBUWIsVUFBTSxRQUFRO0FBYWQsVUFBTSxhQUFhLFNBQVMsTUFBTTtBQUM5QixhQUFPLE1BQU0sTUFBTSxNQUFNLElBQUk7QUFBQSxJQUNqQyxDQUFDO0FBRUQsYUFBUyxhQUFjLE9BQWtCO0FBQ3JDLFVBQUksQ0FBQyxXQUFXLE9BQU87QUFDbkIsZUFBTztBQUFBLE1BQ1g7QUFDQSxVQUFJLENBQUMsTUFBTSxjQUFjO0FBQ3JCLGVBQU87QUFBQSxNQUNYO0FBQ0EsWUFBTSxRQUFRLENBQUUsR0FBRyxNQUFNLGFBQWEsS0FBTTtBQUM1QyxpQkFBVyxLQUFLLFdBQVcsT0FBTztBQUM5QixZQUFJLE1BQU0sU0FBUyxDQUFDLEdBQUc7QUFDbkIsaUJBQU87QUFBQSxRQUNYO0FBQUEsTUFDSjtBQUNBLGFBQU87QUFBQSxJQUNYO0FBRUEsYUFBUyxXQUFZLE9BQWtCO0FBQ25DLFVBQUksYUFBYSxLQUFLLEtBQUssTUFBTSxlQUFlO0FBQzNDLGNBQU0sY0FBOEIsVUFBVSxJQUFJLGNBQWM7QUFBQSxNQUNyRTtBQUFBLElBQ0o7QUFFQSxhQUFTLFlBQWEsT0FBa0I7QUFDcEMsVUFBSSxNQUFNLGVBQWU7QUFDcEIsY0FBTSxjQUE4QixVQUFVLE9BQU8sY0FBYztBQUFBLE1BQ3hFO0FBQUEsSUFDSjtBQUVBLGFBQVMsT0FBUSxPQUFrQjtBQUMvQixrQkFBWSxLQUFLO0FBQ2pCLFlBQU0sS0FBSyxNQUFNO0FBQ2pCLFVBQUksQ0FBQyxJQUFJO0FBQ0w7QUFBQSxNQUNKO0FBRUEsaUJBQVcsWUFBWSxHQUFHLE9BQU87QUFDN0IsWUFBSSxTQUFTLFdBQVcsT0FBTyxHQUFHO0FBQzlCLGdCQUFNLFVBQVUsR0FBRyxRQUFRLFFBQVE7QUFDbkMsZ0JBQU0sV0FBVyxTQUFTLFFBQVEsU0FBUyxFQUFFO0FBQzdDLGVBQU0sVUFBa0IsU0FBUyxNQUFNLE1BQU0sS0FBSztBQUFBLFFBQ3REO0FBQUEsTUFDSjtBQUFBLElBQ0o7Ozs7Ozs7c0JBL0VBSixtQkFNTSxPQUFBO0FBQUEsSUFORCxPQUFNO0FBQUEsSUFDTCxRQUFJLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBRSxPQUFBLE9BQU8sTUFBTTtBQUFBLElBQ25CLFlBQVEsT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUFNLGNBQUEsQ0FBQSxXQUFVLE9BQUEsV0FBVyxNQUFNLEdBQUEsQ0FBQSxTQUFBLENBQUE7QUFBQSxJQUNuQyxhQUFTLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBQSxjQUFBLENBQUEsV0FBVSxPQUFBLFlBQVksTUFBTSxHQUFBLENBQUEsU0FBQSxDQUFBO0FBQUEsSUFDckMsYUFBUyxPQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsSUFBQUEsY0FBVixNQUFBO0FBQUEsSUFBQSxHQUFrQixDQUFBLFNBQUEsQ0FBQTtBQUFBLEVBQUEsR0FBQTtBQUFBLElBQ3JCTCxXQUFhLEtBQUEsUUFBQSxTQUFBO0FBQUEsRUFBQSxHQUFBLEVBQUE7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMF19
