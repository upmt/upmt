import { C as noop, j as getCurrentInstance, r as ref, p as computed, q as watch, aU as nextTick, J as debounce, aM as onBeforeMount, L as onDeactivated, M as onActivated, s as onBeforeUnmount, v as h, h as createComponent, bj as useFieldEmits, bW as useFieldProps, bq as useField, bm as useFieldState, bk as useFormProps, bn as useFormInputNameAttr, bp as fieldValueIsFilled, bX as useKeyComposition, bK as isDeepEqual, bJ as shouldIgnoreKey, br as prevent, bf as stopAndPrevent, bY as onBeforeUpdate, bZ as onUpdated, ai as QIcon, at as stop, bA as isKeyCode, bT as QDialog, O as hMergeSlot } from "./index-15PRagIZ.js";
import { Q as QChip, a as QItemLabel } from "./QItemLabel-BQFqFZV7.js";
import { b as QItemSection, a as QItem } from "./QList-BR6bKSdf.js";
import { n as normalizeToInterval, Q as QMenu } from "./format-Cbfz1lr-.js";
import { r as rtlHasScrollBug } from "./rtl-DDpZOXNn.js";
const aggBucketSize = 1e3;
const scrollToEdges = [
  "start",
  "center",
  "end",
  "start-force",
  "center-force",
  "end-force"
];
const filterProto = Array.prototype.filter;
const setOverflowAnchor = window.getComputedStyle(document.body).overflowAnchor === void 0 ? noop : function(contentEl, index) {
  if (contentEl === null) return;
  if (contentEl._qOverflowAnimationFrame !== void 0) {
    cancelAnimationFrame(contentEl._qOverflowAnimationFrame);
  }
  contentEl._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (contentEl === null) return;
    contentEl._qOverflowAnimationFrame = void 0;
    const children = contentEl.children || [];
    filterProto.call(children, (el2) => el2.dataset && el2.dataset.qVsAnchor !== void 0).forEach((el2) => {
      delete el2.dataset.qVsAnchor;
    });
    const el = children[index];
    if (el?.dataset) {
      el.dataset.qVsAnchor = "";
    }
  });
};
function sumFn(acc, h2) {
  return acc + h2;
}
function getScrollDetails(parent, child, beforeRef, afterRef, horizontal, rtl, stickyStart, stickyEnd) {
  const parentCalc = parent === window ? document.scrollingElement || document.documentElement : parent, propElSize = horizontal === true ? "offsetWidth" : "offsetHeight", details = {
    scrollStart: 0,
    scrollViewSize: -stickyStart - stickyEnd,
    scrollMaxSize: 0,
    offsetStart: -stickyStart,
    offsetEnd: -stickyEnd
  };
  if (horizontal === true) {
    if (parent === window) {
      details.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0;
      details.scrollViewSize += document.documentElement.clientWidth;
    } else {
      details.scrollStart = parentCalc.scrollLeft;
      details.scrollViewSize += parentCalc.clientWidth;
    }
    details.scrollMaxSize = parentCalc.scrollWidth;
    if (rtl === true) {
      details.scrollStart = (rtlHasScrollBug === true ? details.scrollMaxSize - details.scrollViewSize : 0) - details.scrollStart;
    }
  } else {
    if (parent === window) {
      details.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0;
      details.scrollViewSize += document.documentElement.clientHeight;
    } else {
      details.scrollStart = parentCalc.scrollTop;
      details.scrollViewSize += parentCalc.clientHeight;
    }
    details.scrollMaxSize = parentCalc.scrollHeight;
  }
  if (beforeRef !== null) {
    for (let el = beforeRef.previousElementSibling; el !== null; el = el.previousElementSibling) {
      if (el.classList.contains("q-virtual-scroll--skip") === false) {
        details.offsetStart += el[propElSize];
      }
    }
  }
  if (afterRef !== null) {
    for (let el = afterRef.nextElementSibling; el !== null; el = el.nextElementSibling) {
      if (el.classList.contains("q-virtual-scroll--skip") === false) {
        details.offsetEnd += el[propElSize];
      }
    }
  }
  if (child !== parent) {
    const parentRect = parentCalc.getBoundingClientRect(), childRect = child.getBoundingClientRect();
    if (horizontal === true) {
      details.offsetStart += childRect.left - parentRect.left;
      details.offsetEnd -= childRect.width;
    } else {
      details.offsetStart += childRect.top - parentRect.top;
      details.offsetEnd -= childRect.height;
    }
    if (parent !== window) {
      details.offsetStart += details.scrollStart;
    }
    details.offsetEnd += details.scrollMaxSize - details.offsetStart;
  }
  return details;
}
function setScroll(parent, scroll, horizontal, rtl) {
  if (scroll === "end") {
    scroll = (parent === window ? document.body : parent)[horizontal === true ? "scrollWidth" : "scrollHeight"];
  }
  if (parent === window) {
    if (horizontal === true) {
      if (rtl === true) {
        scroll = (rtlHasScrollBug === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - scroll;
      }
      window.scrollTo(scroll, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    } else {
      window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, scroll);
    }
  } else if (horizontal === true) {
    if (rtl === true) {
      scroll = (rtlHasScrollBug === true ? parent.scrollWidth - parent.offsetWidth : 0) - scroll;
    }
    parent.scrollLeft = scroll;
  } else {
    parent.scrollTop = scroll;
  }
}
function sumSize(sizeAgg, size, from, to) {
  if (from >= to) {
    return 0;
  }
  const lastTo = size.length, fromAgg = Math.floor(from / aggBucketSize), toAgg = Math.floor((to - 1) / aggBucketSize) + 1;
  let total = sizeAgg.slice(fromAgg, toAgg).reduce(sumFn, 0);
  if (from % aggBucketSize !== 0) {
    total -= size.slice(fromAgg * aggBucketSize, from).reduce(sumFn, 0);
  }
  if (to % aggBucketSize !== 0 && to !== lastTo) {
    total -= size.slice(to, toAgg * aggBucketSize).reduce(sumFn, 0);
  }
  return total;
}
const commonVirtScrollProps = {
  virtualScrollSliceSize: {
    type: [Number, String],
    default: 10
  },
  virtualScrollSliceRatioBefore: {
    type: [Number, String],
    default: 1
  },
  virtualScrollSliceRatioAfter: {
    type: [Number, String],
    default: 1
  },
  virtualScrollItemSize: {
    type: [Number, String],
    default: 24
  },
  virtualScrollStickySizeStart: {
    type: [Number, String],
    default: 0
  },
  virtualScrollStickySizeEnd: {
    type: [Number, String],
    default: 0
  },
  tableColspan: [Number, String]
};
const commonVirtScrollPropsList = Object.keys(commonVirtScrollProps);
const useVirtualScrollProps = {
  virtualScrollHorizontal: Boolean,
  onVirtualScroll: Function,
  ...commonVirtScrollProps
};
function useVirtualScroll({
  virtualScrollLength,
  getVirtualScrollTarget,
  getVirtualScrollEl,
  virtualScrollItemSizeComputed
  // optional
}) {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;
  const { $q } = proxy;
  let prevScrollStart, prevToIndex, localScrollViewSize, virtualScrollSizesAgg = [], virtualScrollSizes;
  const virtualScrollPaddingBefore = ref(0);
  const virtualScrollPaddingAfter = ref(0);
  const virtualScrollSliceSizeComputed = ref({});
  const beforeRef = ref(null);
  const afterRef = ref(null);
  const contentRef = ref(null);
  const virtualScrollSliceRange = ref({ from: 0, to: 0 });
  const colspanAttr = computed(() => props.tableColspan !== void 0 ? props.tableColspan : 100);
  if (virtualScrollItemSizeComputed === void 0) {
    virtualScrollItemSizeComputed = computed(() => props.virtualScrollItemSize);
  }
  const needsReset = computed(() => virtualScrollItemSizeComputed.value + ";" + props.virtualScrollHorizontal);
  const needsSliceRecalc = computed(
    () => needsReset.value + ";" + props.virtualScrollSliceRatioBefore + ";" + props.virtualScrollSliceRatioAfter
  );
  watch(needsSliceRecalc, () => {
    setVirtualScrollSize();
  });
  watch(needsReset, reset);
  function reset() {
    localResetVirtualScroll(prevToIndex, true);
  }
  function refresh(toIndex) {
    localResetVirtualScroll(toIndex === void 0 ? prevToIndex : toIndex);
  }
  function scrollTo(toIndex, edge) {
    const scrollEl = getVirtualScrollTarget();
    if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) return;
    const scrollDetails = getScrollDetails(
      scrollEl,
      getVirtualScrollEl(),
      beforeRef.value,
      afterRef.value,
      props.virtualScrollHorizontal,
      $q.lang.rtl,
      props.virtualScrollStickySizeStart,
      props.virtualScrollStickySizeEnd
    );
    localScrollViewSize !== scrollDetails.scrollViewSize && setVirtualScrollSize(scrollDetails.scrollViewSize);
    setVirtualScrollSliceRange(
      scrollEl,
      scrollDetails,
      Math.min(virtualScrollLength.value - 1, Math.max(0, parseInt(toIndex, 10) || 0)),
      0,
      scrollToEdges.indexOf(edge) !== -1 ? edge : prevToIndex !== -1 && toIndex > prevToIndex ? "end" : "start"
    );
  }
  function localOnVirtualScrollEvt() {
    const scrollEl = getVirtualScrollTarget();
    if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) return;
    const scrollDetails = getScrollDetails(
      scrollEl,
      getVirtualScrollEl(),
      beforeRef.value,
      afterRef.value,
      props.virtualScrollHorizontal,
      $q.lang.rtl,
      props.virtualScrollStickySizeStart,
      props.virtualScrollStickySizeEnd
    ), listLastIndex = virtualScrollLength.value - 1, listEndOffset = scrollDetails.scrollMaxSize - scrollDetails.offsetStart - scrollDetails.offsetEnd - virtualScrollPaddingAfter.value;
    if (prevScrollStart === scrollDetails.scrollStart) return;
    if (scrollDetails.scrollMaxSize <= 0) {
      setVirtualScrollSliceRange(scrollEl, scrollDetails, 0, 0);
      return;
    }
    localScrollViewSize !== scrollDetails.scrollViewSize && setVirtualScrollSize(scrollDetails.scrollViewSize);
    updateVirtualScrollSizes(virtualScrollSliceRange.value.from);
    const scrollMaxStart = Math.floor(scrollDetails.scrollMaxSize - Math.max(scrollDetails.scrollViewSize, scrollDetails.offsetEnd) - Math.min(virtualScrollSizes[listLastIndex], scrollDetails.scrollViewSize / 2));
    if (scrollMaxStart > 0 && Math.ceil(scrollDetails.scrollStart) >= scrollMaxStart) {
      setVirtualScrollSliceRange(
        scrollEl,
        scrollDetails,
        listLastIndex,
        scrollDetails.scrollMaxSize - scrollDetails.offsetEnd - virtualScrollSizesAgg.reduce(sumFn, 0)
      );
      return;
    }
    let toIndex = 0, listOffset = scrollDetails.scrollStart - scrollDetails.offsetStart, offset = listOffset;
    if (listOffset <= listEndOffset && listOffset + scrollDetails.scrollViewSize >= virtualScrollPaddingBefore.value) {
      listOffset -= virtualScrollPaddingBefore.value;
      toIndex = virtualScrollSliceRange.value.from;
      offset = listOffset;
    } else {
      for (let j = 0; listOffset >= virtualScrollSizesAgg[j] && toIndex < listLastIndex; j++) {
        listOffset -= virtualScrollSizesAgg[j];
        toIndex += aggBucketSize;
      }
    }
    while (listOffset > 0 && toIndex < listLastIndex) {
      listOffset -= virtualScrollSizes[toIndex];
      if (listOffset > -scrollDetails.scrollViewSize) {
        toIndex++;
        offset = listOffset;
      } else {
        offset = virtualScrollSizes[toIndex] + listOffset;
      }
    }
    setVirtualScrollSliceRange(
      scrollEl,
      scrollDetails,
      toIndex,
      offset
    );
  }
  function setVirtualScrollSliceRange(scrollEl, scrollDetails, toIndex, offset, align) {
    const alignForce = typeof align === "string" && align.indexOf("-force") !== -1;
    const alignEnd = alignForce === true ? align.replace("-force", "") : align;
    const alignRange = alignEnd !== void 0 ? alignEnd : "start";
    let from = Math.max(0, toIndex - virtualScrollSliceSizeComputed.value[alignRange]), to = from + virtualScrollSliceSizeComputed.value.total;
    if (to > virtualScrollLength.value) {
      to = virtualScrollLength.value;
      from = Math.max(0, to - virtualScrollSliceSizeComputed.value.total);
    }
    prevScrollStart = scrollDetails.scrollStart;
    const rangeChanged = from !== virtualScrollSliceRange.value.from || to !== virtualScrollSliceRange.value.to;
    if (rangeChanged === false && alignEnd === void 0) {
      emitScroll(toIndex);
      return;
    }
    const { activeElement } = document;
    const contentEl = contentRef.value;
    if (rangeChanged === true && contentEl !== null && contentEl !== activeElement && contentEl.contains(activeElement) === true) {
      contentEl.addEventListener("focusout", onBlurRefocusFn);
      setTimeout(() => {
        contentEl?.removeEventListener("focusout", onBlurRefocusFn);
      });
    }
    setOverflowAnchor(contentEl, toIndex - from);
    const sizeBefore = alignEnd !== void 0 ? virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0) : 0;
    if (rangeChanged === true) {
      const tempTo = to >= virtualScrollSliceRange.value.from && from <= virtualScrollSliceRange.value.to ? virtualScrollSliceRange.value.to : to;
      virtualScrollSliceRange.value = { from, to: tempTo };
      virtualScrollPaddingBefore.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, 0, from);
      virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, to, virtualScrollLength.value);
      requestAnimationFrame(() => {
        if (virtualScrollSliceRange.value.to !== to && prevScrollStart === scrollDetails.scrollStart) {
          virtualScrollSliceRange.value = { from: virtualScrollSliceRange.value.from, to };
          virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, to, virtualScrollLength.value);
        }
      });
    }
    requestAnimationFrame(() => {
      if (prevScrollStart !== scrollDetails.scrollStart) return;
      if (rangeChanged === true) {
        updateVirtualScrollSizes(from);
      }
      const sizeAfter = virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0), posStart = sizeAfter + scrollDetails.offsetStart + virtualScrollPaddingBefore.value, posEnd = posStart + virtualScrollSizes[toIndex];
      let scrollPosition = posStart + offset;
      if (alignEnd !== void 0) {
        const sizeDiff = sizeAfter - sizeBefore;
        const scrollStart = scrollDetails.scrollStart + sizeDiff;
        scrollPosition = alignForce !== true && scrollStart < posStart && posEnd < scrollStart + scrollDetails.scrollViewSize ? scrollStart : alignEnd === "end" ? posEnd - scrollDetails.scrollViewSize : posStart - (alignEnd === "start" ? 0 : Math.round((scrollDetails.scrollViewSize - virtualScrollSizes[toIndex]) / 2));
      }
      prevScrollStart = scrollPosition;
      setScroll(
        scrollEl,
        scrollPosition,
        props.virtualScrollHorizontal,
        $q.lang.rtl
      );
      emitScroll(toIndex);
    });
  }
  function updateVirtualScrollSizes(from) {
    const contentEl = contentRef.value;
    if (contentEl) {
      const children = filterProto.call(
        contentEl.children,
        (el) => el.classList && el.classList.contains("q-virtual-scroll--skip") === false
      ), childrenLength = children.length, sizeFn = props.virtualScrollHorizontal === true ? (el) => el.getBoundingClientRect().width : (el) => el.offsetHeight;
      let index = from, size, diff;
      for (let i = 0; i < childrenLength; ) {
        size = sizeFn(children[i]);
        i++;
        while (i < childrenLength && children[i].classList.contains("q-virtual-scroll--with-prev") === true) {
          size += sizeFn(children[i]);
          i++;
        }
        diff = size - virtualScrollSizes[index];
        if (diff !== 0) {
          virtualScrollSizes[index] += diff;
          virtualScrollSizesAgg[Math.floor(index / aggBucketSize)] += diff;
        }
        index++;
      }
    }
  }
  function onBlurRefocusFn() {
    contentRef.value?.focus();
  }
  function localResetVirtualScroll(toIndex, fullReset) {
    const defaultSize = 1 * virtualScrollItemSizeComputed.value;
    if (fullReset === true || Array.isArray(virtualScrollSizes) === false) {
      virtualScrollSizes = [];
    }
    const oldVirtualScrollSizesLength = virtualScrollSizes.length;
    virtualScrollSizes.length = virtualScrollLength.value;
    for (let i = virtualScrollLength.value - 1; i >= oldVirtualScrollSizesLength; i--) {
      virtualScrollSizes[i] = defaultSize;
    }
    const jMax = Math.floor((virtualScrollLength.value - 1) / aggBucketSize);
    virtualScrollSizesAgg = [];
    for (let j = 0; j <= jMax; j++) {
      let size = 0;
      const iMax = Math.min((j + 1) * aggBucketSize, virtualScrollLength.value);
      for (let i = j * aggBucketSize; i < iMax; i++) {
        size += virtualScrollSizes[i];
      }
      virtualScrollSizesAgg.push(size);
    }
    prevToIndex = -1;
    prevScrollStart = void 0;
    virtualScrollPaddingBefore.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, 0, virtualScrollSliceRange.value.from);
    virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, virtualScrollSliceRange.value.to, virtualScrollLength.value);
    if (toIndex >= 0) {
      updateVirtualScrollSizes(virtualScrollSliceRange.value.from);
      nextTick(() => {
        scrollTo(toIndex);
      });
    } else {
      onVirtualScrollEvt();
    }
  }
  function setVirtualScrollSize(scrollViewSize) {
    if (scrollViewSize === void 0 && typeof window !== "undefined") {
      const scrollEl = getVirtualScrollTarget();
      if (scrollEl !== void 0 && scrollEl !== null && scrollEl.nodeType !== 8) {
        scrollViewSize = getScrollDetails(
          scrollEl,
          getVirtualScrollEl(),
          beforeRef.value,
          afterRef.value,
          props.virtualScrollHorizontal,
          $q.lang.rtl,
          props.virtualScrollStickySizeStart,
          props.virtualScrollStickySizeEnd
        ).scrollViewSize;
      }
    }
    localScrollViewSize = scrollViewSize;
    const virtualScrollSliceRatioBefore = parseFloat(props.virtualScrollSliceRatioBefore) || 0;
    const virtualScrollSliceRatioAfter = parseFloat(props.virtualScrollSliceRatioAfter) || 0;
    const multiplier = 1 + virtualScrollSliceRatioBefore + virtualScrollSliceRatioAfter;
    const view = scrollViewSize === void 0 || scrollViewSize <= 0 ? 1 : Math.ceil(scrollViewSize / virtualScrollItemSizeComputed.value);
    const baseSize = Math.max(
      1,
      view,
      Math.ceil((props.virtualScrollSliceSize > 0 ? props.virtualScrollSliceSize : 10) / multiplier)
    );
    virtualScrollSliceSizeComputed.value = {
      total: Math.ceil(baseSize * multiplier),
      start: Math.ceil(baseSize * virtualScrollSliceRatioBefore),
      center: Math.ceil(baseSize * (0.5 + virtualScrollSliceRatioBefore)),
      end: Math.ceil(baseSize * (1 + virtualScrollSliceRatioBefore)),
      view
    };
  }
  function padVirtualScroll(tag, content) {
    const paddingSize = props.virtualScrollHorizontal === true ? "width" : "height";
    const style = {
      ["--q-virtual-scroll-item-" + paddingSize]: virtualScrollItemSizeComputed.value + "px"
    };
    return [
      tag === "tbody" ? h(tag, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: beforeRef
      }, [
        h("tr", [
          h("td", {
            style: { [paddingSize]: `${virtualScrollPaddingBefore.value}px`, ...style },
            colspan: colspanAttr.value
          })
        ])
      ]) : h(tag, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: beforeRef,
        style: { [paddingSize]: `${virtualScrollPaddingBefore.value}px`, ...style }
      }),
      h(tag, {
        class: "q-virtual-scroll__content",
        key: "content",
        ref: contentRef,
        tabindex: -1
      }, content.flat()),
      tag === "tbody" ? h(tag, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: afterRef
      }, [
        h("tr", [
          h("td", {
            style: { [paddingSize]: `${virtualScrollPaddingAfter.value}px`, ...style },
            colspan: colspanAttr.value
          })
        ])
      ]) : h(tag, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: afterRef,
        style: { [paddingSize]: `${virtualScrollPaddingAfter.value}px`, ...style }
      })
    ];
  }
  function emitScroll(index) {
    if (prevToIndex !== index) {
      props.onVirtualScroll !== void 0 && emit("virtualScroll", {
        index,
        from: virtualScrollSliceRange.value.from,
        to: virtualScrollSliceRange.value.to - 1,
        direction: index < prevToIndex ? "decrease" : "increase",
        ref: proxy
      });
      prevToIndex = index;
    }
  }
  setVirtualScrollSize();
  const onVirtualScrollEvt = debounce(
    localOnVirtualScrollEvt,
    $q.platform.is.ios === true ? 120 : 35
  );
  onBeforeMount(() => {
    setVirtualScrollSize();
  });
  let shouldActivate = false;
  onDeactivated(() => {
    shouldActivate = true;
  });
  onActivated(() => {
    if (shouldActivate !== true) return;
    const scrollEl = getVirtualScrollTarget();
    if (prevScrollStart !== void 0 && scrollEl !== void 0 && scrollEl !== null && scrollEl.nodeType !== 8) {
      setScroll(
        scrollEl,
        prevScrollStart,
        props.virtualScrollHorizontal,
        $q.lang.rtl
      );
    } else {
      scrollTo(prevToIndex);
    }
  });
  onBeforeUnmount(() => {
    onVirtualScrollEvt.cancel();
  });
  Object.assign(proxy, { scrollTo, reset, refresh });
  return {
    virtualScrollSliceRange,
    virtualScrollSliceSizeComputed,
    setVirtualScrollSize,
    onVirtualScrollEvt,
    localResetVirtualScroll,
    padVirtualScroll,
    scrollTo,
    reset,
    refresh
  };
}
const QField = createComponent({
  name: "QField",
  inheritAttrs: false,
  props: {
    ...useFieldProps,
    tag: {
      type: String,
      default: "label"
    }
  },
  emits: useFieldEmits,
  setup() {
    return useField(
      useFieldState({ tagProp: true })
    );
  }
});
const validateNewValueMode = (v) => ["add", "add-unique", "toggle"].includes(v);
const reEscapeList = ".*+?^${}()|[]\\";
const fieldPropsList = Object.keys(useFieldProps);
function getPropValueFn(userPropName, defaultPropName) {
  if (typeof userPropName === "function") return userPropName;
  const propName = userPropName !== void 0 ? userPropName : defaultPropName;
  return (opt) => opt !== null && typeof opt === "object" && propName in opt ? opt[propName] : opt;
}
const QSelect = createComponent({
  name: "QSelect",
  inheritAttrs: false,
  props: {
    ...useVirtualScrollProps,
    ...useFormProps,
    ...useFieldProps,
    // override of useFieldProps > modelValue
    modelValue: {
      required: true
    },
    multiple: Boolean,
    displayValue: [String, Number],
    displayValueHtml: Boolean,
    dropdownIcon: String,
    options: {
      type: Array,
      default: () => []
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    hideSelected: Boolean,
    hideDropdownIcon: Boolean,
    fillInput: Boolean,
    maxValues: [Number, String],
    optionsDense: Boolean,
    optionsDark: {
      type: Boolean,
      default: null
    },
    optionsSelectedClass: String,
    optionsHtml: Boolean,
    optionsCover: Boolean,
    menuShrink: Boolean,
    menuAnchor: String,
    menuSelf: String,
    menuOffset: Array,
    popupContentClass: String,
    popupContentStyle: [String, Array, Object],
    popupNoRouteDismiss: Boolean,
    useInput: Boolean,
    useChips: Boolean,
    newValueMode: {
      type: String,
      validator: validateNewValueMode
    },
    mapOptions: Boolean,
    emitValue: Boolean,
    disableTabSelection: Boolean,
    inputDebounce: {
      type: [Number, String],
      default: 500
    },
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
    tabindex: {
      type: [String, Number],
      default: 0
    },
    autocomplete: String,
    transitionShow: {},
    transitionHide: {},
    transitionDuration: {},
    behavior: {
      type: String,
      validator: (v) => ["default", "menu", "dialog"].includes(v),
      default: "default"
    },
    // override of useVirtualScrollProps > virtualScrollItemSize (no default)
    virtualScrollItemSize: useVirtualScrollProps.virtualScrollItemSize.type,
    onNewValue: Function,
    onFilter: Function
  },
  emits: [
    ...useFieldEmits,
    "add",
    "remove",
    "inputValue",
    "keyup",
    "keypress",
    "keydown",
    "popupShow",
    "popupHide",
    "filterAbort"
  ],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const menu = ref(false);
    const dialog = ref(false);
    const optionIndex = ref(-1);
    const inputValue = ref("");
    const dialogFieldFocused = ref(false);
    const innerLoadingIndicator = ref(false);
    let filterTimer = null, inputValueTimer = null, innerValueCache, hasDialog, userInputValue, filterId = null, defaultInputValue, transitionShowComputed, searchBuffer, searchBufferExp;
    const inputRef = ref(null);
    const targetRef = ref(null);
    const menuRef = ref(null);
    const dialogRef = ref(null);
    const menuContentRef = ref(null);
    const nameProp = useFormInputNameAttr(props);
    const onComposition = useKeyComposition(onInput);
    const virtualScrollLength = computed(() => Array.isArray(props.options) ? props.options.length : 0);
    const virtualScrollItemSizeComputed = computed(() => props.virtualScrollItemSize === void 0 ? props.optionsDense === true ? 24 : 48 : props.virtualScrollItemSize);
    const {
      virtualScrollSliceRange,
      virtualScrollSliceSizeComputed,
      localResetVirtualScroll,
      padVirtualScroll,
      onVirtualScrollEvt,
      scrollTo,
      setVirtualScrollSize
    } = useVirtualScroll({
      virtualScrollLength,
      getVirtualScrollTarget,
      getVirtualScrollEl,
      virtualScrollItemSizeComputed
    });
    const state = useFieldState();
    const innerValue = computed(() => {
      const mapNull = props.mapOptions === true && props.multiple !== true, val = props.modelValue !== void 0 && (props.modelValue !== null || mapNull === true) ? props.multiple === true && Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue] : [];
      if (props.mapOptions === true && Array.isArray(props.options) === true) {
        const cache = props.mapOptions === true && innerValueCache !== void 0 ? innerValueCache : [];
        const values = val.map((v) => getOption(v, cache));
        return props.modelValue === null && mapNull === true ? values.filter((v) => v !== null) : values;
      }
      return val;
    });
    const innerFieldProps = computed(() => {
      const acc = {};
      fieldPropsList.forEach((key) => {
        const val = props[key];
        if (val !== void 0) {
          acc[key] = val;
        }
      });
      return acc;
    });
    const isOptionsDark = computed(() => props.optionsDark === null ? state.isDark.value : props.optionsDark);
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const computedInputClass = computed(() => {
      let cls = "q-field__input q-placeholder col";
      if (props.hideSelected === true || innerValue.value.length === 0) {
        return [cls, props.inputClass];
      }
      cls += " q-field__input--padding";
      return props.inputClass === void 0 ? cls : [cls, props.inputClass];
    });
    const menuContentClass = computed(
      () => (props.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (props.popupContentClass ? " " + props.popupContentClass : "")
    );
    const noOptions = computed(() => virtualScrollLength.value === 0);
    const selectedString = computed(
      () => innerValue.value.map((opt) => getOptionLabel.value(opt)).join(", ")
    );
    const ariaCurrentValue = computed(() => props.displayValue !== void 0 ? props.displayValue : selectedString.value);
    const needsHtmlFn = computed(() => props.optionsHtml === true ? () => true : (opt) => opt?.html === true);
    const valueAsHtml = computed(() => props.displayValueHtml === true || props.displayValue === void 0 && (props.optionsHtml === true || innerValue.value.some(needsHtmlFn.value)));
    const tabindex = computed(() => state.focused.value === true ? props.tabindex : -1);
    const comboboxAttrs = computed(() => {
      const attrs = {
        tabindex: props.tabindex,
        role: "combobox",
        "aria-label": props.label,
        "aria-readonly": props.readonly === true ? "true" : "false",
        "aria-autocomplete": props.useInput === true ? "list" : "none",
        "aria-expanded": menu.value === true ? "true" : "false",
        "aria-controls": `${state.targetUid.value}_lb`
      };
      if (optionIndex.value >= 0) {
        attrs["aria-activedescendant"] = `${state.targetUid.value}_${optionIndex.value}`;
      }
      return attrs;
    });
    const listboxAttrs = computed(() => ({
      id: `${state.targetUid.value}_lb`,
      role: "listbox",
      "aria-multiselectable": props.multiple === true ? "true" : "false"
    }));
    const selectedScope = computed(() => {
      return innerValue.value.map((opt, i) => ({
        index: i,
        opt,
        html: needsHtmlFn.value(opt),
        selected: true,
        removeAtIndex: removeAtIndexAndFocus,
        toggleOption,
        tabindex: tabindex.value
      }));
    });
    const optionScope = computed(() => {
      if (virtualScrollLength.value === 0) {
        return [];
      }
      const { from, to } = virtualScrollSliceRange.value;
      return props.options.slice(from, to).map((opt, i) => {
        const disable = isOptionDisabled.value(opt) === true;
        const active = isOptionSelected(opt) === true;
        const index = from + i;
        const itemProps = {
          clickable: true,
          active,
          activeClass: computedOptionsSelectedClass.value,
          manualFocus: true,
          focused: false,
          disable,
          tabindex: -1,
          dense: props.optionsDense,
          dark: isOptionsDark.value,
          role: "option",
          "aria-selected": active === true ? "true" : "false",
          id: `${state.targetUid.value}_${index}`,
          onClick: () => {
            toggleOption(opt);
          }
        };
        if (disable !== true) {
          optionIndex.value === index && (itemProps.focused = true);
          if ($q.platform.is.desktop === true) {
            itemProps.onMousemove = () => {
              menu.value === true && setOptionIndex(index);
            };
          }
        }
        return {
          index,
          opt,
          html: needsHtmlFn.value(opt),
          label: getOptionLabel.value(opt),
          selected: itemProps.active,
          focused: itemProps.focused,
          toggleOption,
          setOptionIndex,
          itemProps
        };
      });
    });
    const dropdownArrowIcon = computed(() => props.dropdownIcon !== void 0 ? props.dropdownIcon : $q.iconSet.arrow.dropdown);
    const squaredMenu = computed(
      () => props.optionsCover === false && props.outlined !== true && props.standout !== true && props.borderless !== true && props.rounded !== true
    );
    const computedOptionsSelectedClass = computed(() => props.optionsSelectedClass !== void 0 ? props.optionsSelectedClass : props.color !== void 0 ? `text-${props.color}` : "");
    const getOptionValue = computed(() => getPropValueFn(props.optionValue, "value"));
    const getOptionLabel = computed(() => getPropValueFn(props.optionLabel, "label"));
    const isOptionDisabled = computed(() => getPropValueFn(props.optionDisable, "disable"));
    const innerOptionsValue = computed(() => innerValue.value.map(getOptionValue.value));
    const inputControlEvents = computed(() => {
      const evt = {
        onInput,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: onComposition,
        onKeydown: onTargetKeydown,
        onKeyup: onTargetAutocomplete,
        onKeypress: onTargetKeypress,
        onFocus: selectInputText,
        onClick(e) {
          hasDialog === true && stop(e);
        }
      };
      evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
      return evt;
    });
    watch(innerValue, (val) => {
      innerValueCache = val;
      if (props.useInput === true && props.fillInput === true && props.multiple !== true && state.innerLoading.value !== true && (dialog.value !== true && menu.value !== true || hasValue.value !== true)) {
        userInputValue !== true && resetInputValue();
        if (dialog.value === true || menu.value === true) {
          filter("");
        }
      }
    }, { immediate: true });
    watch(() => props.fillInput, resetInputValue);
    watch(menu, updateMenu);
    watch(virtualScrollLength, rerenderMenu);
    function getEmittingOptionValue(opt) {
      return props.emitValue === true ? getOptionValue.value(opt) : opt;
    }
    function removeAtIndex(index) {
      if (index !== -1 && index < innerValue.value.length) {
        if (props.multiple === true) {
          const model = props.modelValue.slice();
          emit("remove", { index, value: model.splice(index, 1)[0] });
          emit("update:modelValue", model);
        } else {
          emit("update:modelValue", null);
        }
      }
    }
    function removeAtIndexAndFocus(index) {
      removeAtIndex(index);
      state.focus();
    }
    function add(opt, unique) {
      const val = getEmittingOptionValue(opt);
      if (props.multiple !== true) {
        props.fillInput === true && updateInputValue(
          getOptionLabel.value(opt),
          true,
          true
        );
        emit("update:modelValue", val);
        return;
      }
      if (innerValue.value.length === 0) {
        emit("add", { index: 0, value: val });
        emit("update:modelValue", props.multiple === true ? [val] : val);
        return;
      }
      if (unique === true && isOptionSelected(opt) === true) return;
      if (props.maxValues !== void 0 && props.modelValue.length >= props.maxValues) return;
      const model = props.modelValue.slice();
      emit("add", { index: model.length, value: val });
      model.push(val);
      emit("update:modelValue", model);
    }
    function toggleOption(opt, keepOpen) {
      if (state.editable.value !== true || opt === void 0 || isOptionDisabled.value(opt) === true) return;
      const optValue = getOptionValue.value(opt);
      if (props.multiple !== true) {
        if (keepOpen !== true) {
          updateInputValue(
            props.fillInput === true ? getOptionLabel.value(opt) : "",
            true,
            true
          );
          hidePopup();
        }
        targetRef.value?.focus();
        if (innerValue.value.length === 0 || isDeepEqual(getOptionValue.value(innerValue.value[0]), optValue) !== true) {
          emit("update:modelValue", props.emitValue === true ? optValue : opt);
        }
        return;
      }
      if (hasDialog !== true || dialogFieldFocused.value === true) {
        state.focus();
      }
      selectInputText();
      if (innerValue.value.length === 0) {
        const val = props.emitValue === true ? optValue : opt;
        emit("add", { index: 0, value: val });
        emit("update:modelValue", props.multiple === true ? [val] : val);
        return;
      }
      const model = props.modelValue.slice(), index = innerOptionsValue.value.findIndex((v) => isDeepEqual(v, optValue));
      if (index !== -1) {
        emit("remove", { index, value: model.splice(index, 1)[0] });
      } else {
        if (props.maxValues !== void 0 && model.length >= props.maxValues) return;
        const val = props.emitValue === true ? optValue : opt;
        emit("add", { index: model.length, value: val });
        model.push(val);
      }
      emit("update:modelValue", model);
    }
    function setOptionIndex(index) {
      if ($q.platform.is.desktop !== true) return;
      const val = index !== -1 && index < virtualScrollLength.value ? index : -1;
      if (optionIndex.value !== val) {
        optionIndex.value = val;
      }
    }
    function moveOptionSelection(offset = 1, skipInputValue) {
      if (menu.value === true) {
        let index = optionIndex.value;
        do {
          index = normalizeToInterval(
            index + offset,
            -1,
            virtualScrollLength.value - 1
          );
        } while (index !== -1 && index !== optionIndex.value && isOptionDisabled.value(props.options[index]) === true);
        if (optionIndex.value !== index) {
          setOptionIndex(index);
          scrollTo(index);
          if (skipInputValue !== true && props.useInput === true && props.fillInput === true) {
            setInputValue(
              index >= 0 ? getOptionLabel.value(props.options[index]) : defaultInputValue,
              true
            );
          }
        }
      }
    }
    function getOption(value, valueCache) {
      const fn = (opt) => isDeepEqual(getOptionValue.value(opt), value);
      return props.options.find(fn) || valueCache.find(fn) || value;
    }
    function isOptionSelected(opt) {
      const val = getOptionValue.value(opt);
      return innerOptionsValue.value.find((v) => isDeepEqual(v, val)) !== void 0;
    }
    function selectInputText(e) {
      if (props.useInput === true && targetRef.value !== null && (e === void 0 || targetRef.value === e.target && e.target.value === selectedString.value)) {
        targetRef.value.select();
      }
    }
    function onTargetKeyup(e) {
      if (isKeyCode(e, 27) === true && menu.value === true) {
        stop(e);
        hidePopup();
        resetInputValue();
      }
      emit("keyup", e);
    }
    function onTargetAutocomplete(e) {
      const { value } = e.target;
      if (e.keyCode !== void 0) {
        onTargetKeyup(e);
        return;
      }
      e.target.value = "";
      if (filterTimer !== null) {
        clearTimeout(filterTimer);
        filterTimer = null;
      }
      if (inputValueTimer !== null) {
        clearTimeout(inputValueTimer);
        inputValueTimer = null;
      }
      resetInputValue();
      if (typeof value === "string" && value.length !== 0) {
        const needle = value.toLocaleLowerCase();
        const findFn = (extractFn) => {
          const option = props.options.find((opt) => String(extractFn.value(opt)).toLocaleLowerCase() === needle);
          if (option === void 0) return false;
          if (innerValue.value.indexOf(option) === -1) {
            toggleOption(option);
          } else {
            hidePopup();
          }
          return true;
        };
        const fillFn = (afterFilter) => {
          if (findFn(getOptionValue) !== true && afterFilter !== true && findFn(getOptionLabel) !== true) {
            filter(value, true, () => fillFn(true));
          }
        };
        fillFn();
      } else {
        state.clearValue(e);
      }
    }
    function onTargetKeypress(e) {
      emit("keypress", e);
    }
    function onTargetKeydown(e) {
      emit("keydown", e);
      if (shouldIgnoreKey(e) === true) return;
      const newValueModeValid = inputValue.value.length !== 0 && (props.newValueMode !== void 0 || props.onNewValue !== void 0);
      const tabShouldSelect = e.shiftKey !== true && props.disableTabSelection !== true && props.multiple !== true && (optionIndex.value !== -1 || newValueModeValid === true);
      if (e.keyCode === 27) {
        prevent(e);
        return;
      }
      if (e.keyCode === 9 && tabShouldSelect === false) {
        closeMenu();
        return;
      }
      if (e.target === void 0 || e.target.id !== state.targetUid.value || state.editable.value !== true) return;
      if (e.keyCode === 40 && state.innerLoading.value !== true && menu.value === false) {
        stopAndPrevent(e);
        showPopup();
        return;
      }
      if (e.keyCode === 8 && (props.useChips === true || props.clearable === true) && props.hideSelected !== true && inputValue.value.length === 0) {
        if (props.multiple === true && Array.isArray(props.modelValue) === true) {
          removeAtIndex(props.modelValue.length - 1);
        } else if (props.multiple !== true && props.modelValue !== null) {
          emit("update:modelValue", null);
        }
        return;
      }
      if ((e.keyCode === 35 || e.keyCode === 36) && (typeof inputValue.value !== "string" || inputValue.value.length === 0)) {
        stopAndPrevent(e);
        optionIndex.value = -1;
        moveOptionSelection(e.keyCode === 36 ? 1 : -1, props.multiple);
      }
      if ((e.keyCode === 33 || e.keyCode === 34) && virtualScrollSliceSizeComputed.value !== void 0) {
        stopAndPrevent(e);
        optionIndex.value = Math.max(
          -1,
          Math.min(
            virtualScrollLength.value,
            optionIndex.value + (e.keyCode === 33 ? -1 : 1) * virtualScrollSliceSizeComputed.value.view
          )
        );
        moveOptionSelection(e.keyCode === 33 ? 1 : -1, props.multiple);
      }
      if (e.keyCode === 38 || e.keyCode === 40) {
        stopAndPrevent(e);
        moveOptionSelection(e.keyCode === 38 ? -1 : 1, props.multiple);
      }
      const optionsLength = virtualScrollLength.value;
      if (searchBuffer === void 0 || searchBufferExp < Date.now()) {
        searchBuffer = "";
      }
      if (optionsLength > 0 && props.useInput !== true && e.key !== void 0 && e.key.length === 1 && e.altKey === false && e.ctrlKey === false && e.metaKey === false && (e.keyCode !== 32 || searchBuffer.length !== 0)) {
        menu.value !== true && showPopup(e);
        const char = e.key.toLocaleLowerCase(), keyRepeat = searchBuffer.length === 1 && searchBuffer[0] === char;
        searchBufferExp = Date.now() + 1500;
        if (keyRepeat === false) {
          stopAndPrevent(e);
          searchBuffer += char;
        }
        const searchRe = new RegExp("^" + searchBuffer.split("").map((l) => reEscapeList.indexOf(l) !== -1 ? "\\" + l : l).join(".*"), "i");
        let index = optionIndex.value;
        if (keyRepeat === true || index < 0 || searchRe.test(getOptionLabel.value(props.options[index])) !== true) {
          do {
            index = normalizeToInterval(index + 1, -1, optionsLength - 1);
          } while (index !== optionIndex.value && (isOptionDisabled.value(props.options[index]) === true || searchRe.test(getOptionLabel.value(props.options[index])) !== true));
        }
        if (optionIndex.value !== index) {
          nextTick(() => {
            setOptionIndex(index);
            scrollTo(index);
            if (index >= 0 && props.useInput === true && props.fillInput === true) {
              setInputValue(getOptionLabel.value(props.options[index]), true);
            }
          });
        }
        return;
      }
      if (e.keyCode !== 13 && (e.keyCode !== 32 || props.useInput === true || searchBuffer !== "") && (e.keyCode !== 9 || tabShouldSelect === false)) return;
      e.keyCode !== 9 && stopAndPrevent(e);
      if (optionIndex.value !== -1 && optionIndex.value < optionsLength) {
        toggleOption(props.options[optionIndex.value]);
        return;
      }
      if (newValueModeValid === true) {
        const done = (val, mode) => {
          if (mode) {
            if (validateNewValueMode(mode) !== true) return;
          } else {
            mode = props.newValueMode;
          }
          updateInputValue("", props.multiple !== true, true);
          if (val === void 0 || val === null) return;
          const fn = mode === "toggle" ? toggleOption : add;
          fn(val, mode === "add-unique");
          if (props.multiple !== true) {
            targetRef.value?.focus();
            hidePopup();
          }
        };
        if (props.onNewValue !== void 0) {
          emit("newValue", inputValue.value, done);
        } else {
          done(inputValue.value);
        }
        if (props.multiple !== true) return;
      }
      if (menu.value === true) {
        closeMenu();
      } else if (state.innerLoading.value !== true) {
        showPopup();
      }
    }
    function getVirtualScrollEl() {
      return hasDialog === true ? menuContentRef.value : menuRef.value !== null && menuRef.value.contentEl !== null ? menuRef.value.contentEl : void 0;
    }
    function getVirtualScrollTarget() {
      return getVirtualScrollEl();
    }
    function getSelection() {
      if (props.hideSelected === true) {
        return [];
      }
      if (slots["selected-item"] !== void 0) {
        return selectedScope.value.map((scope) => slots["selected-item"](scope)).slice();
      }
      if (slots.selected !== void 0) {
        return [].concat(slots.selected());
      }
      if (props.useChips === true) {
        return selectedScope.value.map((scope, i) => h(QChip, {
          key: "option-" + i,
          removable: state.editable.value === true && isOptionDisabled.value(scope.opt) !== true,
          dense: true,
          textColor: props.color,
          tabindex: tabindex.value,
          onRemove() {
            scope.removeAtIndex(i);
          }
        }, () => h("span", {
          class: "ellipsis",
          [scope.html === true ? "innerHTML" : "textContent"]: getOptionLabel.value(scope.opt)
        })));
      }
      return [
        h("span", {
          class: "ellipsis",
          [valueAsHtml.value === true ? "innerHTML" : "textContent"]: ariaCurrentValue.value
        })
      ];
    }
    function getAllOptions() {
      if (noOptions.value === true) {
        return slots["no-option"] !== void 0 ? slots["no-option"]({ inputValue: inputValue.value }) : void 0;
      }
      const fn = slots.option !== void 0 ? slots.option : (scope) => {
        return h(QItem, {
          key: scope.index,
          ...scope.itemProps
        }, () => {
          return h(
            QItemSection,
            () => h(
              QItemLabel,
              () => h("span", {
                [scope.html === true ? "innerHTML" : "textContent"]: scope.label
              })
            )
          );
        });
      };
      let options = padVirtualScroll("div", optionScope.value.map(fn));
      if (slots["before-options"] !== void 0) {
        options = slots["before-options"]().concat(options);
      }
      return hMergeSlot(slots["after-options"], options);
    }
    function getInput(fromDialog, isTarget) {
      const attrs = isTarget === true ? { ...comboboxAttrs.value, ...state.splitAttrs.attributes.value } : void 0;
      const data = {
        ref: isTarget === true ? targetRef : void 0,
        key: "i_t",
        class: computedInputClass.value,
        style: props.inputStyle,
        value: inputValue.value !== void 0 ? inputValue.value : "",
        // required for Android in order to show ENTER key when in form
        type: "search",
        ...attrs,
        id: isTarget === true ? state.targetUid.value : void 0,
        maxlength: props.maxlength,
        autocomplete: props.autocomplete,
        "data-autofocus": fromDialog === true || props.autofocus === true || void 0,
        disabled: props.disable === true,
        readonly: props.readonly === true,
        ...inputControlEvents.value
      };
      if (fromDialog !== true && hasDialog === true) {
        if (Array.isArray(data.class) === true) {
          data.class = [...data.class, "no-pointer-events"];
        } else {
          data.class += " no-pointer-events";
        }
      }
      return h("input", data);
    }
    function onInput(e) {
      if (filterTimer !== null) {
        clearTimeout(filterTimer);
        filterTimer = null;
      }
      if (inputValueTimer !== null) {
        clearTimeout(inputValueTimer);
        inputValueTimer = null;
      }
      if (e && e.target && e.target.qComposing === true) return;
      setInputValue(e.target.value || "");
      userInputValue = true;
      defaultInputValue = inputValue.value;
      if (state.focused.value !== true && (hasDialog !== true || dialogFieldFocused.value === true)) {
        state.focus();
      }
      if (props.onFilter !== void 0) {
        filterTimer = setTimeout(() => {
          filterTimer = null;
          filter(inputValue.value);
        }, props.inputDebounce);
      }
    }
    function setInputValue(val, emitImmediately) {
      if (inputValue.value !== val) {
        inputValue.value = val;
        if (emitImmediately === true || props.inputDebounce === 0 || props.inputDebounce === "0") {
          emit("inputValue", val);
        } else {
          inputValueTimer = setTimeout(() => {
            inputValueTimer = null;
            emit("inputValue", val);
          }, props.inputDebounce);
        }
      }
    }
    function updateInputValue(val, noFiltering, internal) {
      userInputValue = internal !== true;
      if (props.useInput === true) {
        setInputValue(val, true);
        if (noFiltering === true || internal !== true) {
          defaultInputValue = val;
        }
        noFiltering !== true && filter(val);
      }
    }
    function filter(val, keepClosed, afterUpdateFn) {
      if (props.onFilter === void 0 || keepClosed !== true && state.focused.value !== true) return;
      if (state.innerLoading.value === true) {
        emit("filterAbort");
      } else {
        state.innerLoading.value = true;
        innerLoadingIndicator.value = true;
      }
      if (val !== "" && props.multiple !== true && innerValue.value.length !== 0 && userInputValue !== true && val === getOptionLabel.value(innerValue.value[0])) {
        val = "";
      }
      const localFilterId = setTimeout(() => {
        menu.value === true && (menu.value = false);
      }, 10);
      filterId !== null && clearTimeout(filterId);
      filterId = localFilterId;
      emit(
        "filter",
        val,
        (fn, afterFn) => {
          if ((keepClosed === true || state.focused.value === true) && filterId === localFilterId) {
            clearTimeout(filterId);
            typeof fn === "function" && fn();
            innerLoadingIndicator.value = false;
            nextTick(() => {
              state.innerLoading.value = false;
              if (state.editable.value === true) {
                if (keepClosed === true) {
                  menu.value === true && hidePopup();
                } else if (menu.value === true) {
                  updateMenu(true);
                } else {
                  menu.value = true;
                }
              }
              typeof afterFn === "function" && nextTick(() => {
                afterFn(proxy);
              });
              typeof afterUpdateFn === "function" && nextTick(() => {
                afterUpdateFn(proxy);
              });
            });
          }
        },
        () => {
          if (state.focused.value === true && filterId === localFilterId) {
            clearTimeout(filterId);
            state.innerLoading.value = false;
            innerLoadingIndicator.value = false;
          }
          menu.value === true && (menu.value = false);
        }
      );
    }
    function getMenu() {
      return h(QMenu, {
        ref: menuRef,
        class: menuContentClass.value,
        style: props.popupContentStyle,
        modelValue: menu.value,
        fit: props.menuShrink !== true,
        cover: props.optionsCover === true && noOptions.value !== true && props.useInput !== true,
        anchor: props.menuAnchor,
        self: props.menuSelf,
        offset: props.menuOffset,
        dark: isOptionsDark.value,
        noParentEvent: true,
        noRefocus: true,
        noFocus: true,
        noRouteDismiss: props.popupNoRouteDismiss,
        square: squaredMenu.value,
        transitionShow: props.transitionShow,
        transitionHide: props.transitionHide,
        transitionDuration: props.transitionDuration,
        separateClosePopup: true,
        ...listboxAttrs.value,
        onScrollPassive: onVirtualScrollEvt,
        onBeforeShow: onControlPopupShow,
        onBeforeHide: onMenuBeforeHide,
        onShow: onMenuShow
      }, getAllOptions);
    }
    function onMenuBeforeHide(e) {
      onControlPopupHide(e);
      closeMenu();
    }
    function onMenuShow() {
      setVirtualScrollSize();
    }
    function onDialogFieldFocus(e) {
      stop(e);
      targetRef.value?.focus();
      dialogFieldFocused.value = true;
      window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    }
    function onDialogFieldBlur(e) {
      stop(e);
      nextTick(() => {
        dialogFieldFocused.value = false;
      });
    }
    function getDialog() {
      const content = [
        h(QField, {
          class: `col-auto ${state.fieldClass.value}`,
          ...innerFieldProps.value,
          for: state.targetUid.value,
          dark: isOptionsDark.value,
          square: true,
          loading: innerLoadingIndicator.value,
          itemAligned: false,
          filled: true,
          stackLabel: inputValue.value.length !== 0,
          ...state.splitAttrs.listeners.value,
          onFocus: onDialogFieldFocus,
          onBlur: onDialogFieldBlur
        }, {
          ...slots,
          rawControl: () => state.getControl(true),
          before: void 0,
          after: void 0
        })
      ];
      menu.value === true && content.push(
        h("div", {
          ref: menuContentRef,
          class: menuContentClass.value + " scroll",
          style: props.popupContentStyle,
          ...listboxAttrs.value,
          onClick: prevent,
          onScrollPassive: onVirtualScrollEvt
        }, getAllOptions())
      );
      return h(QDialog, {
        ref: dialogRef,
        modelValue: dialog.value,
        position: props.useInput === true ? "top" : void 0,
        transitionShow: transitionShowComputed,
        transitionHide: props.transitionHide,
        transitionDuration: props.transitionDuration,
        noRouteDismiss: props.popupNoRouteDismiss,
        onBeforeShow: onControlPopupShow,
        onBeforeHide: onDialogBeforeHide,
        onHide: onDialogHide,
        onShow: onDialogShow
      }, () => h("div", {
        class: "q-select__dialog" + (isOptionsDark.value === true ? " q-select__dialog--dark q-dark" : "") + (dialogFieldFocused.value === true ? " q-select__dialog--focused" : "")
      }, content));
    }
    function onDialogBeforeHide(e) {
      onControlPopupHide(e);
      if (dialogRef.value !== null) {
        dialogRef.value.__updateRefocusTarget(
          state.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
        );
      }
      state.focused.value = false;
    }
    function onDialogHide(e) {
      hidePopup();
      state.focused.value === false && emit("blur", e);
      resetInputValue();
    }
    function onDialogShow() {
      const el = document.activeElement;
      if ((el === null || el.id !== state.targetUid.value) && targetRef.value !== null && targetRef.value !== el) {
        targetRef.value.focus();
      }
      setVirtualScrollSize();
    }
    function closeMenu() {
      if (dialog.value === true) return;
      optionIndex.value = -1;
      if (menu.value === true) {
        menu.value = false;
      }
      if (state.focused.value === false) {
        if (filterId !== null) {
          clearTimeout(filterId);
          filterId = null;
        }
        if (state.innerLoading.value === true) {
          emit("filterAbort");
          state.innerLoading.value = false;
          innerLoadingIndicator.value = false;
        }
      }
    }
    function showPopup(e) {
      if (state.editable.value !== true) return;
      if (hasDialog === true) {
        state.onControlFocusin(e);
        dialog.value = true;
        nextTick(() => {
          state.focus();
        });
      } else {
        state.focus();
      }
      if (props.onFilter !== void 0) {
        filter(inputValue.value);
      } else if (noOptions.value !== true || slots["no-option"] !== void 0) {
        menu.value = true;
      }
    }
    function hidePopup() {
      dialog.value = false;
      closeMenu();
    }
    function resetInputValue() {
      props.useInput === true && updateInputValue(
        props.multiple !== true && props.fillInput === true && innerValue.value.length !== 0 ? getOptionLabel.value(innerValue.value[0]) || "" : "",
        true,
        true
      );
    }
    function updateMenu(show) {
      let optionIndex2 = -1;
      if (show === true) {
        if (innerValue.value.length !== 0) {
          const val = getOptionValue.value(innerValue.value[0]);
          optionIndex2 = props.options.findIndex((v) => isDeepEqual(getOptionValue.value(v), val));
        }
        localResetVirtualScroll(optionIndex2);
      }
      setOptionIndex(optionIndex2);
    }
    function rerenderMenu(newLength, oldLength) {
      if (menu.value === true && state.innerLoading.value === false) {
        localResetVirtualScroll(-1, true);
        nextTick(() => {
          if (menu.value === true && state.innerLoading.value === false) {
            if (newLength > oldLength) {
              localResetVirtualScroll();
            } else {
              updateMenu(true);
            }
          }
        });
      }
    }
    function updateMenuPosition() {
      if (dialog.value === false && menuRef.value !== null) {
        menuRef.value.updatePosition();
      }
    }
    function onControlPopupShow(e) {
      e !== void 0 && stop(e);
      emit("popupShow", e);
      state.hasPopupOpen = true;
      state.onControlFocusin(e);
    }
    function onControlPopupHide(e) {
      e !== void 0 && stop(e);
      emit("popupHide", e);
      state.hasPopupOpen = false;
      state.onControlFocusout(e);
    }
    function updatePreState() {
      hasDialog = $q.platform.is.mobile !== true && props.behavior !== "dialog" ? false : props.behavior !== "menu" && (props.useInput === true ? slots["no-option"] !== void 0 || props.onFilter !== void 0 || noOptions.value === false : true);
      transitionShowComputed = $q.platform.is.ios === true && hasDialog === true && props.useInput === true ? "fade" : props.transitionShow;
    }
    onBeforeUpdate(updatePreState);
    onUpdated(updateMenuPosition);
    updatePreState();
    onBeforeUnmount(() => {
      filterTimer !== null && clearTimeout(filterTimer);
      inputValueTimer !== null && clearTimeout(inputValueTimer);
    });
    Object.assign(proxy, {
      showPopup,
      hidePopup,
      removeAtIndex,
      add,
      toggleOption,
      getOptionIndex: () => optionIndex.value,
      setOptionIndex,
      moveOptionSelection,
      filter,
      updateMenuPosition,
      updateInputValue,
      isOptionSelected,
      getEmittingOptionValue,
      isOptionDisabled: (...args) => isOptionDisabled.value.apply(null, args) === true,
      getOptionValue: (...args) => getOptionValue.value.apply(null, args),
      getOptionLabel: (...args) => getOptionLabel.value.apply(null, args)
    });
    Object.assign(state, {
      innerValue,
      fieldClass: computed(
        () => `q-select q-field--auto-height q-select--with${props.useInput !== true ? "out" : ""}-input q-select--with${props.useChips !== true ? "out" : ""}-chips q-select--${props.multiple === true ? "multiple" : "single"}`
      ),
      inputRef,
      targetRef,
      hasValue,
      showPopup,
      floatingLabel: computed(
        () => props.hideSelected !== true && hasValue.value === true || typeof inputValue.value === "number" || inputValue.value.length !== 0 || fieldValueIsFilled(props.displayValue)
      ),
      getControlChild: () => {
        if (state.editable.value !== false && (dialog.value === true || noOptions.value !== true || slots["no-option"] !== void 0)) {
          return hasDialog === true ? getDialog() : getMenu();
        } else if (state.hasPopupOpen === true) {
          state.hasPopupOpen = false;
        }
      },
      controlEvents: {
        onFocusin(e) {
          state.onControlFocusin(e);
        },
        onFocusout(e) {
          state.onControlFocusout(e, () => {
            resetInputValue();
            closeMenu();
          });
        },
        onClick(e) {
          prevent(e);
          if (hasDialog !== true && menu.value === true) {
            closeMenu();
            targetRef.value?.focus();
            return;
          }
          showPopup(e);
        }
      },
      getControl: (fromDialog) => {
        const child = getSelection();
        const isTarget = fromDialog === true || dialog.value !== true || hasDialog !== true;
        if (props.useInput === true) {
          child.push(getInput(fromDialog, isTarget));
        } else if (state.editable.value === true) {
          const attrs2 = isTarget === true ? comboboxAttrs.value : void 0;
          child.push(
            h("input", {
              ref: isTarget === true ? targetRef : void 0,
              key: "d_t",
              class: "q-select__focus-target",
              id: isTarget === true ? state.targetUid.value : void 0,
              value: ariaCurrentValue.value,
              readonly: true,
              "data-autofocus": fromDialog === true || props.autofocus === true || void 0,
              ...attrs2,
              onKeydown: onTargetKeydown,
              onKeyup: onTargetKeyup,
              onKeypress: onTargetKeypress
            })
          );
          if (isTarget === true && typeof props.autocomplete === "string" && props.autocomplete.length !== 0) {
            child.push(
              h("input", {
                class: "q-select__autocomplete-input",
                autocomplete: props.autocomplete,
                tabindex: -1,
                onKeyup: onTargetAutocomplete
              })
            );
          }
        }
        if (nameProp.value !== void 0 && props.disable !== true && innerOptionsValue.value.length !== 0) {
          const opts = innerOptionsValue.value.map((value) => h("option", { value, selected: true }));
          child.push(
            h("select", {
              class: "hidden",
              name: nameProp.value,
              multiple: props.multiple
            }, opts)
          );
        }
        const attrs = props.useInput === true || isTarget !== true ? void 0 : state.splitAttrs.attributes.value;
        return h("div", {
          class: "q-field__native row items-center",
          ...attrs,
          ...state.splitAttrs.listeners.value
        }, child);
      },
      getInnerAppend: () => props.loading !== true && innerLoadingIndicator.value !== true && props.hideDropdownIcon !== true ? [
        h(QIcon, {
          class: "q-select__dropdown-icon" + (menu.value === true ? " rotate-180" : ""),
          name: dropdownArrowIcon.value
        })
      ] : null
    });
    return useField(state);
  }
});
export {
  QSelect as Q,
  useVirtualScroll as a,
  commonVirtScrollPropsList as c,
  useVirtualScrollProps as u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVNlbGVjdC1Ddk1VaEk0Mi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy92aXJ0dWFsLXNjcm9sbC91c2UtdmlydHVhbC1zY3JvbGwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2ZpZWxkL1FGaWVsZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2VsZWN0L1FTZWxlY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBvbkJlZm9yZU1vdW50LCBvbkJlZm9yZVVubW91bnQsIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZS9kZWJvdW5jZS5qcydcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IHJ0bEhhc1Njcm9sbEJ1ZyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucnRsL3J0bC5qcydcblxuY29uc3QgYWdnQnVja2V0U2l6ZSA9IDEwMDBcblxuY29uc3Qgc2Nyb2xsVG9FZGdlcyA9IFtcbiAgJ3N0YXJ0JyxcbiAgJ2NlbnRlcicsXG4gICdlbmQnLFxuICAnc3RhcnQtZm9yY2UnLFxuICAnY2VudGVyLWZvcmNlJyxcbiAgJ2VuZC1mb3JjZSdcbl1cblxuY29uc3QgZmlsdGVyUHJvdG8gPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG5cbmNvbnN0IHNldE92ZXJmbG93QW5jaG9yID0gX19RVUFTQVJfU1NSX18gfHwgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkub3ZlcmZsb3dBbmNob3IgPT09IHZvaWQgMFxuICA/IG5vb3BcbiAgOiBmdW5jdGlvbiAoY29udGVudEVsLCBpbmRleCkge1xuICAgIGlmIChjb250ZW50RWwgPT09IG51bGwpIHJldHVyblxuXG4gICAgaWYgKGNvbnRlbnRFbC5fcU92ZXJmbG93QW5pbWF0aW9uRnJhbWUgIT09IHZvaWQgMCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoY29udGVudEVsLl9xT3ZlcmZsb3dBbmltYXRpb25GcmFtZSlcbiAgICB9XG5cbiAgICBjb250ZW50RWwuX3FPdmVyZmxvd0FuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmIChjb250ZW50RWwgPT09IG51bGwpIHJldHVyblxuXG4gICAgICBjb250ZW50RWwuX3FPdmVyZmxvd0FuaW1hdGlvbkZyYW1lID0gdm9pZCAwXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IGNvbnRlbnRFbC5jaGlsZHJlbiB8fCBbXVxuXG4gICAgICBmaWx0ZXJQcm90b1xuICAgICAgICAuY2FsbChjaGlsZHJlbiwgZWwgPT4gZWwuZGF0YXNldCAmJiBlbC5kYXRhc2V0LnFWc0FuY2hvciAhPT0gdm9pZCAwKVxuICAgICAgICAuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgZGVsZXRlIGVsLmRhdGFzZXQucVZzQW5jaG9yXG4gICAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGVsID0gY2hpbGRyZW5bIGluZGV4IF1cblxuICAgICAgaWYgKGVsPy5kYXRhc2V0KSB7XG4gICAgICAgIGVsLmRhdGFzZXQucVZzQW5jaG9yID0gJydcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbmZ1bmN0aW9uIHN1bUZuIChhY2MsIGgpIHtcbiAgcmV0dXJuIGFjYyArIGhcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsRGV0YWlscyAoXG4gIHBhcmVudCxcbiAgY2hpbGQsXG4gIGJlZm9yZVJlZixcbiAgYWZ0ZXJSZWYsXG4gIGhvcml6b250YWwsXG4gIHJ0bCxcbiAgc3RpY2t5U3RhcnQsXG4gIHN0aWNreUVuZFxuKSB7XG4gIGNvbnN0XG4gICAgcGFyZW50Q2FsYyA9IHBhcmVudCA9PT0gd2luZG93ID8gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBwYXJlbnQsXG4gICAgcHJvcEVsU2l6ZSA9IGhvcml6b250YWwgPT09IHRydWUgPyAnb2Zmc2V0V2lkdGgnIDogJ29mZnNldEhlaWdodCcsXG4gICAgZGV0YWlscyA9IHtcbiAgICAgIHNjcm9sbFN0YXJ0OiAwLFxuICAgICAgc2Nyb2xsVmlld1NpemU6IC1zdGlja3lTdGFydCAtIHN0aWNreUVuZCxcbiAgICAgIHNjcm9sbE1heFNpemU6IDAsXG4gICAgICBvZmZzZXRTdGFydDogLXN0aWNreVN0YXJ0LFxuICAgICAgb2Zmc2V0RW5kOiAtc3RpY2t5RW5kXG4gICAgfVxuXG4gIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgaWYgKHBhcmVudCA9PT0gd2luZG93KSB7XG4gICAgICBkZXRhaWxzLnNjcm9sbFN0YXJ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCB8fCAwXG4gICAgICBkZXRhaWxzLnNjcm9sbFZpZXdTaXplICs9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRldGFpbHMuc2Nyb2xsU3RhcnQgPSBwYXJlbnRDYWxjLnNjcm9sbExlZnRcbiAgICAgIGRldGFpbHMuc2Nyb2xsVmlld1NpemUgKz0gcGFyZW50Q2FsYy5jbGllbnRXaWR0aFxuICAgIH1cbiAgICBkZXRhaWxzLnNjcm9sbE1heFNpemUgPSBwYXJlbnRDYWxjLnNjcm9sbFdpZHRoXG5cbiAgICBpZiAocnRsID09PSB0cnVlKSB7XG4gICAgICBkZXRhaWxzLnNjcm9sbFN0YXJ0ID0gKHJ0bEhhc1Njcm9sbEJ1ZyA9PT0gdHJ1ZSA/IGRldGFpbHMuc2Nyb2xsTWF4U2l6ZSAtIGRldGFpbHMuc2Nyb2xsVmlld1NpemUgOiAwKSAtIGRldGFpbHMuc2Nyb2xsU3RhcnRcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKHBhcmVudCA9PT0gd2luZG93KSB7XG4gICAgICBkZXRhaWxzLnNjcm9sbFN0YXJ0ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDBcbiAgICAgIGRldGFpbHMuc2Nyb2xsVmlld1NpemUgKz0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRldGFpbHMuc2Nyb2xsU3RhcnQgPSBwYXJlbnRDYWxjLnNjcm9sbFRvcFxuICAgICAgZGV0YWlscy5zY3JvbGxWaWV3U2l6ZSArPSBwYXJlbnRDYWxjLmNsaWVudEhlaWdodFxuICAgIH1cbiAgICBkZXRhaWxzLnNjcm9sbE1heFNpemUgPSBwYXJlbnRDYWxjLnNjcm9sbEhlaWdodFxuICB9XG5cbiAgaWYgKGJlZm9yZVJlZiAhPT0gbnVsbCkge1xuICAgIGZvciAobGV0IGVsID0gYmVmb3JlUmVmLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7IGVsICE9PSBudWxsOyBlbCA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3EtdmlydHVhbC1zY3JvbGwtLXNraXAnKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGV0YWlscy5vZmZzZXRTdGFydCArPSBlbFsgcHJvcEVsU2l6ZSBdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFmdGVyUmVmICE9PSBudWxsKSB7XG4gICAgZm9yIChsZXQgZWwgPSBhZnRlclJlZi5uZXh0RWxlbWVudFNpYmxpbmc7IGVsICE9PSBudWxsOyBlbCA9IGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygncS12aXJ0dWFsLXNjcm9sbC0tc2tpcCcpID09PSBmYWxzZSkge1xuICAgICAgICBkZXRhaWxzLm9mZnNldEVuZCArPSBlbFsgcHJvcEVsU2l6ZSBdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGNoaWxkICE9PSBwYXJlbnQpIHtcbiAgICBjb25zdFxuICAgICAgcGFyZW50UmVjdCA9IHBhcmVudENhbGMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjaGlsZFJlY3QgPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgaWYgKGhvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgIGRldGFpbHMub2Zmc2V0U3RhcnQgKz0gY2hpbGRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnRcbiAgICAgIGRldGFpbHMub2Zmc2V0RW5kIC09IGNoaWxkUmVjdC53aWR0aFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRldGFpbHMub2Zmc2V0U3RhcnQgKz0gY2hpbGRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wXG4gICAgICBkZXRhaWxzLm9mZnNldEVuZCAtPSBjaGlsZFJlY3QuaGVpZ2h0XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudCAhPT0gd2luZG93KSB7XG4gICAgICBkZXRhaWxzLm9mZnNldFN0YXJ0ICs9IGRldGFpbHMuc2Nyb2xsU3RhcnRcbiAgICB9XG4gICAgZGV0YWlscy5vZmZzZXRFbmQgKz0gZGV0YWlscy5zY3JvbGxNYXhTaXplIC0gZGV0YWlscy5vZmZzZXRTdGFydFxuICB9XG5cbiAgcmV0dXJuIGRldGFpbHNcbn1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsIChwYXJlbnQsIHNjcm9sbCwgaG9yaXpvbnRhbCwgcnRsKSB7XG4gIGlmIChzY3JvbGwgPT09ICdlbmQnKSB7XG4gICAgc2Nyb2xsID0gKHBhcmVudCA9PT0gd2luZG93ID8gZG9jdW1lbnQuYm9keSA6IHBhcmVudClbXG4gICAgICBob3Jpem9udGFsID09PSB0cnVlID8gJ3Njcm9sbFdpZHRoJyA6ICdzY3JvbGxIZWlnaHQnXG4gICAgXVxuICB9XG5cbiAgaWYgKHBhcmVudCA9PT0gd2luZG93KSB7XG4gICAgaWYgKGhvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgIGlmIChydGwgPT09IHRydWUpIHtcbiAgICAgICAgc2Nyb2xsID0gKHJ0bEhhc1Njcm9sbEJ1ZyA9PT0gdHJ1ZSA/IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiAwKSAtIHNjcm9sbFxuICAgICAgfVxuICAgICAgd2luZG93LnNjcm9sbFRvKHNjcm9sbCwgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5wYWdlWE9mZnNldCB8fCB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMCwgc2Nyb2xsKVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgaWYgKHJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgc2Nyb2xsID0gKHJ0bEhhc1Njcm9sbEJ1ZyA9PT0gdHJ1ZSA/IHBhcmVudC5zY3JvbGxXaWR0aCAtIHBhcmVudC5vZmZzZXRXaWR0aCA6IDApIC0gc2Nyb2xsXG4gICAgfVxuICAgIHBhcmVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsXG4gIH1cbiAgZWxzZSB7XG4gICAgcGFyZW50LnNjcm9sbFRvcCA9IHNjcm9sbFxuICB9XG59XG5cbmZ1bmN0aW9uIHN1bVNpemUgKHNpemVBZ2csIHNpemUsIGZyb20sIHRvKSB7XG4gIGlmIChmcm9tID49IHRvKSB7IHJldHVybiAwIH1cblxuICBjb25zdFxuICAgIGxhc3RUbyA9IHNpemUubGVuZ3RoLFxuICAgIGZyb21BZ2cgPSBNYXRoLmZsb29yKGZyb20gLyBhZ2dCdWNrZXRTaXplKSxcbiAgICB0b0FnZyA9IE1hdGguZmxvb3IoKHRvIC0gMSkgLyBhZ2dCdWNrZXRTaXplKSArIDFcblxuICBsZXQgdG90YWwgPSBzaXplQWdnLnNsaWNlKGZyb21BZ2csIHRvQWdnKS5yZWR1Y2Uoc3VtRm4sIDApXG5cbiAgaWYgKGZyb20gJSBhZ2dCdWNrZXRTaXplICE9PSAwKSB7XG4gICAgdG90YWwgLT0gc2l6ZS5zbGljZShmcm9tQWdnICogYWdnQnVja2V0U2l6ZSwgZnJvbSkucmVkdWNlKHN1bUZuLCAwKVxuICB9XG4gIGlmICh0byAlIGFnZ0J1Y2tldFNpemUgIT09IDAgJiYgdG8gIT09IGxhc3RUbykge1xuICAgIHRvdGFsIC09IHNpemUuc2xpY2UodG8sIHRvQWdnICogYWdnQnVja2V0U2l6ZSkucmVkdWNlKHN1bUZuLCAwKVxuICB9XG5cbiAgcmV0dXJuIHRvdGFsXG59XG5cbmNvbnN0IGNvbW1vblZpcnRTY3JvbGxQcm9wcyA9IHtcbiAgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZToge1xuICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiAxMFxuICB9LFxuXG4gIHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlOiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6IDFcbiAgfSxcblxuICB2aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0FmdGVyOiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6IDFcbiAgfSxcblxuICB2aXJ0dWFsU2Nyb2xsSXRlbVNpemU6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogMjRcbiAgfSxcblxuICB2aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZVN0YXJ0OiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6IDBcbiAgfSxcblxuICB2aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZUVuZDoge1xuICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiAwXG4gIH0sXG5cbiAgdGFibGVDb2xzcGFuOiBbIE51bWJlciwgU3RyaW5nIF1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbW1vblZpcnRTY3JvbGxQcm9wc0xpc3QgPSBPYmplY3Qua2V5cyhjb21tb25WaXJ0U2Nyb2xsUHJvcHMpXG5cbmV4cG9ydCBjb25zdCB1c2VWaXJ0dWFsU2Nyb2xsUHJvcHMgPSB7XG4gIHZpcnR1YWxTY3JvbGxIb3Jpem9udGFsOiBCb29sZWFuLFxuICBvblZpcnR1YWxTY3JvbGw6IEZ1bmN0aW9uLFxuICAuLi5jb21tb25WaXJ0U2Nyb2xsUHJvcHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZpcnR1YWxTY3JvbGwgKHtcbiAgdmlydHVhbFNjcm9sbExlbmd0aCwgZ2V0VmlydHVhbFNjcm9sbFRhcmdldCwgZ2V0VmlydHVhbFNjcm9sbEVsLFxuICB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZCAvLyBvcHRpb25hbFxufSkge1xuICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgcHJveHkgfSA9IHZtXG4gIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgbGV0IHByZXZTY3JvbGxTdGFydCwgcHJldlRvSW5kZXgsIGxvY2FsU2Nyb2xsVmlld1NpemUsIHZpcnR1YWxTY3JvbGxTaXplc0FnZyA9IFtdLCB2aXJ0dWFsU2Nyb2xsU2l6ZXNcblxuICBjb25zdCB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZSA9IHJlZigwKVxuICBjb25zdCB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyID0gcmVmKDApXG4gIGNvbnN0IHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZCA9IHJlZih7fSlcblxuICBjb25zdCBiZWZvcmVSZWYgPSByZWYobnVsbClcbiAgY29uc3QgYWZ0ZXJSZWYgPSByZWYobnVsbClcbiAgY29uc3QgY29udGVudFJlZiA9IHJlZihudWxsKVxuXG4gIGNvbnN0IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlID0gcmVmKHsgZnJvbTogMCwgdG86IDAgfSlcblxuICBjb25zdCBjb2xzcGFuQXR0ciA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy50YWJsZUNvbHNwYW4gIT09IHZvaWQgMCA/IHByb3BzLnRhYmxlQ29sc3BhbiA6IDEwMCkpXG5cbiAgaWYgKHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkID09PSB2b2lkIDApIHtcbiAgICB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSlcbiAgfVxuXG4gIGNvbnN0IG5lZWRzUmVzZXQgPSBjb21wdXRlZCgoKSA9PiB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZC52YWx1ZSArICc7JyArIHByb3BzLnZpcnR1YWxTY3JvbGxIb3Jpem9udGFsKVxuXG4gIGNvbnN0IG5lZWRzU2xpY2VSZWNhbGMgPSBjb21wdXRlZCgoKSA9PlxuICAgIG5lZWRzUmVzZXQudmFsdWUgKyAnOycgKyBwcm9wcy52aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0JlZm9yZSArICc7JyArIHByb3BzLnZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQWZ0ZXJcbiAgKVxuXG4gIHdhdGNoKG5lZWRzU2xpY2VSZWNhbGMsICgpID0+IHsgc2V0VmlydHVhbFNjcm9sbFNpemUoKSB9KVxuICB3YXRjaChuZWVkc1Jlc2V0LCByZXNldClcblxuICBmdW5jdGlvbiByZXNldCAoKSB7XG4gICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwocHJldlRvSW5kZXgsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiByZWZyZXNoICh0b0luZGV4KSB7XG4gICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwodG9JbmRleCA9PT0gdm9pZCAwID8gcHJldlRvSW5kZXggOiB0b0luZGV4KVxuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsVG8gKHRvSW5kZXgsIGVkZ2UpIHtcbiAgICBjb25zdCBzY3JvbGxFbCA9IGdldFZpcnR1YWxTY3JvbGxUYXJnZXQoKVxuXG4gICAgaWYgKFxuICAgICAgc2Nyb2xsRWwgPT09IHZvaWQgMFxuICAgICAgfHwgc2Nyb2xsRWwgPT09IG51bGxcbiAgICAgIHx8IHNjcm9sbEVsLm5vZGVUeXBlID09PSA4XG4gICAgKSByZXR1cm5cblxuICAgIGNvbnN0IHNjcm9sbERldGFpbHMgPSBnZXRTY3JvbGxEZXRhaWxzKFxuICAgICAgc2Nyb2xsRWwsXG4gICAgICBnZXRWaXJ0dWFsU2Nyb2xsRWwoKSxcbiAgICAgIGJlZm9yZVJlZi52YWx1ZSxcbiAgICAgIGFmdGVyUmVmLnZhbHVlLFxuICAgICAgcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwsXG4gICAgICAkcS5sYW5nLnJ0bCxcbiAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplU3RhcnQsXG4gICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZUVuZFxuICAgIClcblxuICAgIGxvY2FsU2Nyb2xsVmlld1NpemUgIT09IHNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemUgJiYgc2V0VmlydHVhbFNjcm9sbFNpemUoc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSlcblxuICAgIHNldFZpcnR1YWxTY3JvbGxTbGljZVJhbmdlKFxuICAgICAgc2Nyb2xsRWwsXG4gICAgICBzY3JvbGxEZXRhaWxzLFxuICAgICAgTWF0aC5taW4odmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSAtIDEsIE1hdGgubWF4KDAsIHBhcnNlSW50KHRvSW5kZXgsIDEwKSB8fCAwKSksXG4gICAgICAwLFxuICAgICAgc2Nyb2xsVG9FZGdlcy5pbmRleE9mKGVkZ2UpICE9PSAtMSA/IGVkZ2UgOiAocHJldlRvSW5kZXggIT09IC0xICYmIHRvSW5kZXggPiBwcmV2VG9JbmRleCA/ICdlbmQnIDogJ3N0YXJ0JylcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBsb2NhbE9uVmlydHVhbFNjcm9sbEV2dCAoKSB7XG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBnZXRWaXJ0dWFsU2Nyb2xsVGFyZ2V0KClcblxuICAgIGlmIChcbiAgICAgIHNjcm9sbEVsID09PSB2b2lkIDBcbiAgICAgIHx8IHNjcm9sbEVsID09PSBudWxsXG4gICAgICB8fCBzY3JvbGxFbC5ub2RlVHlwZSA9PT0gOFxuICAgICkgcmV0dXJuXG5cbiAgICBjb25zdFxuICAgICAgc2Nyb2xsRGV0YWlscyA9IGdldFNjcm9sbERldGFpbHMoXG4gICAgICAgIHNjcm9sbEVsLFxuICAgICAgICBnZXRWaXJ0dWFsU2Nyb2xsRWwoKSxcbiAgICAgICAgYmVmb3JlUmVmLnZhbHVlLFxuICAgICAgICBhZnRlclJlZi52YWx1ZSxcbiAgICAgICAgcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwsXG4gICAgICAgICRxLmxhbmcucnRsLFxuICAgICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZVN0YXJ0LFxuICAgICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZUVuZFxuICAgICAgKSxcbiAgICAgIGxpc3RMYXN0SW5kZXggPSB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlIC0gMSxcbiAgICAgIGxpc3RFbmRPZmZzZXQgPSBzY3JvbGxEZXRhaWxzLnNjcm9sbE1heFNpemUgLSBzY3JvbGxEZXRhaWxzLm9mZnNldFN0YXJ0IC0gc2Nyb2xsRGV0YWlscy5vZmZzZXRFbmQgLSB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyLnZhbHVlXG5cbiAgICBpZiAocHJldlNjcm9sbFN0YXJ0ID09PSBzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0KSByZXR1cm5cblxuICAgIGlmIChzY3JvbGxEZXRhaWxzLnNjcm9sbE1heFNpemUgPD0gMCkge1xuICAgICAgc2V0VmlydHVhbFNjcm9sbFNsaWNlUmFuZ2Uoc2Nyb2xsRWwsIHNjcm9sbERldGFpbHMsIDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsb2NhbFNjcm9sbFZpZXdTaXplICE9PSBzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplICYmIHNldFZpcnR1YWxTY3JvbGxTaXplKHNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemUpXG5cbiAgICB1cGRhdGVWaXJ0dWFsU2Nyb2xsU2l6ZXModmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSlcblxuICAgIGNvbnN0IHNjcm9sbE1heFN0YXJ0ID0gTWF0aC5mbG9vcihzY3JvbGxEZXRhaWxzLnNjcm9sbE1heFNpemVcbiAgICAgIC0gTWF0aC5tYXgoc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSwgc2Nyb2xsRGV0YWlscy5vZmZzZXRFbmQpXG4gICAgICAtIE1hdGgubWluKHZpcnR1YWxTY3JvbGxTaXplc1sgbGlzdExhc3RJbmRleCBdLCBzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplIC8gMikpXG5cbiAgICBpZiAoc2Nyb2xsTWF4U3RhcnQgPiAwICYmIE1hdGguY2VpbChzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0KSA+PSBzY3JvbGxNYXhTdGFydCkge1xuICAgICAgc2V0VmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UoXG4gICAgICAgIHNjcm9sbEVsLFxuICAgICAgICBzY3JvbGxEZXRhaWxzLFxuICAgICAgICBsaXN0TGFzdEluZGV4LFxuICAgICAgICBzY3JvbGxEZXRhaWxzLnNjcm9sbE1heFNpemUgLSBzY3JvbGxEZXRhaWxzLm9mZnNldEVuZCAtIHZpcnR1YWxTY3JvbGxTaXplc0FnZy5yZWR1Y2Uoc3VtRm4sIDApXG4gICAgICApXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldFxuICAgICAgdG9JbmRleCA9IDAsXG4gICAgICBsaXN0T2Zmc2V0ID0gc2Nyb2xsRGV0YWlscy5zY3JvbGxTdGFydCAtIHNjcm9sbERldGFpbHMub2Zmc2V0U3RhcnQsXG4gICAgICBvZmZzZXQgPSBsaXN0T2Zmc2V0XG5cbiAgICBpZiAobGlzdE9mZnNldCA8PSBsaXN0RW5kT2Zmc2V0ICYmIGxpc3RPZmZzZXQgKyBzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplID49IHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlLnZhbHVlKSB7XG4gICAgICBsaXN0T2Zmc2V0IC09IHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlLnZhbHVlXG4gICAgICB0b0luZGV4ID0gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbVxuICAgICAgb2Zmc2V0ID0gbGlzdE9mZnNldFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBsaXN0T2Zmc2V0ID49IHZpcnR1YWxTY3JvbGxTaXplc0FnZ1sgaiBdICYmIHRvSW5kZXggPCBsaXN0TGFzdEluZGV4OyBqKyspIHtcbiAgICAgICAgbGlzdE9mZnNldCAtPSB2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2dbIGogXVxuICAgICAgICB0b0luZGV4ICs9IGFnZ0J1Y2tldFNpemVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aGlsZSAobGlzdE9mZnNldCA+IDAgJiYgdG9JbmRleCA8IGxpc3RMYXN0SW5kZXgpIHtcbiAgICAgIGxpc3RPZmZzZXQgLT0gdmlydHVhbFNjcm9sbFNpemVzWyB0b0luZGV4IF1cbiAgICAgIGlmIChsaXN0T2Zmc2V0ID4gLXNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemUpIHtcbiAgICAgICAgdG9JbmRleCsrXG4gICAgICAgIG9mZnNldCA9IGxpc3RPZmZzZXRcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvZmZzZXQgPSB2aXJ0dWFsU2Nyb2xsU2l6ZXNbIHRvSW5kZXggXSArIGxpc3RPZmZzZXRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRWaXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZShcbiAgICAgIHNjcm9sbEVsLFxuICAgICAgc2Nyb2xsRGV0YWlscyxcbiAgICAgIHRvSW5kZXgsXG4gICAgICBvZmZzZXRcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBzZXRWaXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZSAoc2Nyb2xsRWwsIHNjcm9sbERldGFpbHMsIHRvSW5kZXgsIG9mZnNldCwgYWxpZ24pIHtcbiAgICBjb25zdCBhbGlnbkZvcmNlID0gdHlwZW9mIGFsaWduID09PSAnc3RyaW5nJyAmJiBhbGlnbi5pbmRleE9mKCctZm9yY2UnKSAhPT0gLTFcbiAgICBjb25zdCBhbGlnbkVuZCA9IGFsaWduRm9yY2UgPT09IHRydWUgPyBhbGlnbi5yZXBsYWNlKCctZm9yY2UnLCAnJykgOiBhbGlnblxuICAgIGNvbnN0IGFsaWduUmFuZ2UgPSBhbGlnbkVuZCAhPT0gdm9pZCAwID8gYWxpZ25FbmQgOiAnc3RhcnQnXG5cbiAgICBsZXRcbiAgICAgIGZyb20gPSBNYXRoLm1heCgwLCB0b0luZGV4IC0gdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkLnZhbHVlWyBhbGlnblJhbmdlIF0pLFxuICAgICAgdG8gPSBmcm9tICsgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkLnZhbHVlLnRvdGFsXG5cbiAgICBpZiAodG8gPiB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlKSB7XG4gICAgICB0byA9IHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWVcbiAgICAgIGZyb20gPSBNYXRoLm1heCgwLCB0byAtIHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZC52YWx1ZS50b3RhbClcbiAgICB9XG5cbiAgICBwcmV2U2Nyb2xsU3RhcnQgPSBzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0XG5cbiAgICBjb25zdCByYW5nZUNoYW5nZWQgPSBmcm9tICE9PSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tIHx8IHRvICE9PSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50b1xuXG4gICAgaWYgKHJhbmdlQ2hhbmdlZCA9PT0gZmFsc2UgJiYgYWxpZ25FbmQgPT09IHZvaWQgMCkge1xuICAgICAgZW1pdFNjcm9sbCh0b0luZGV4KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBhY3RpdmVFbGVtZW50IH0gPSBkb2N1bWVudFxuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGNvbnRlbnRSZWYudmFsdWVcbiAgICBpZiAoXG4gICAgICByYW5nZUNoYW5nZWQgPT09IHRydWVcbiAgICAgICYmIGNvbnRlbnRFbCAhPT0gbnVsbFxuICAgICAgJiYgY29udGVudEVsICE9PSBhY3RpdmVFbGVtZW50XG4gICAgICAmJiBjb250ZW50RWwuY29udGFpbnMoYWN0aXZlRWxlbWVudCkgPT09IHRydWVcbiAgICApIHtcbiAgICAgIGNvbnRlbnRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uQmx1clJlZm9jdXNGbilcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnRlbnRFbD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkJsdXJSZWZvY3VzRm4pXG4gICAgICB9KVxuICAgIH1cblxuICAgIHNldE92ZXJmbG93QW5jaG9yKGNvbnRlbnRFbCwgdG9JbmRleCAtIGZyb20pXG5cbiAgICBjb25zdCBzaXplQmVmb3JlID0gYWxpZ25FbmQgIT09IHZvaWQgMCA/IHZpcnR1YWxTY3JvbGxTaXplcy5zbGljZShmcm9tLCB0b0luZGV4KS5yZWR1Y2Uoc3VtRm4sIDApIDogMFxuXG4gICAgaWYgKHJhbmdlQ2hhbmdlZCA9PT0gdHJ1ZSkge1xuICAgICAgLy8gdnVlIGtleSBtYXRjaGluZyBhbGdvcml0aG0gd29ya3Mgb25seSBpZlxuICAgICAgLy8gdGhlIGFycmF5IG9mIFZOb2RlcyBjaGFuZ2VzIG9uIG9ubHkgb25lIG9mIHRoZSBlbmRzXG4gICAgICAvLyBzbyB3ZSBmaXJzdCBjaGFuZ2Ugb25lIGVuZCBhbmQgdGhlbiB0aGUgb3RoZXJcblxuICAgICAgY29uc3QgdGVtcFRvID0gdG8gPj0gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSAmJiBmcm9tIDw9IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLnRvXG4gICAgICAgID8gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG9cbiAgICAgICAgOiB0b1xuXG4gICAgICB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZSA9IHsgZnJvbSwgdG86IHRlbXBUbyB9XG4gICAgICB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZS52YWx1ZSA9IHN1bVNpemUodmlydHVhbFNjcm9sbFNpemVzQWdnLCB2aXJ0dWFsU2Nyb2xsU2l6ZXMsIDAsIGZyb20pXG4gICAgICB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyLnZhbHVlID0gc3VtU2l6ZSh2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2csIHZpcnR1YWxTY3JvbGxTaXplcywgdG8sIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUpXG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmICh2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50byAhPT0gdG8gJiYgcHJldlNjcm9sbFN0YXJ0ID09PSBzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0KSB7XG4gICAgICAgICAgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUgPSB7IGZyb206IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20sIHRvIH1cbiAgICAgICAgICB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyLnZhbHVlID0gc3VtU2l6ZSh2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2csIHZpcnR1YWxTY3JvbGxTaXplcywgdG8sIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIGlmIHRoZSBzY3JvbGwgd2FzIGNoYW5nZWQgZ2l2ZSB1cFxuICAgICAgLy8gKGFub3RoZXIgY2FsbCB0byBzZXRWaXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZSBiZWZvcmUgYW5pbWF0aW9uIGZyYW1lKVxuICAgICAgaWYgKHByZXZTY3JvbGxTdGFydCAhPT0gc2Nyb2xsRGV0YWlscy5zY3JvbGxTdGFydCkgcmV0dXJuXG5cbiAgICAgIGlmIChyYW5nZUNoYW5nZWQgPT09IHRydWUpIHtcbiAgICAgICAgdXBkYXRlVmlydHVhbFNjcm9sbFNpemVzKGZyb20pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHNpemVBZnRlciA9IHZpcnR1YWxTY3JvbGxTaXplcy5zbGljZShmcm9tLCB0b0luZGV4KS5yZWR1Y2Uoc3VtRm4sIDApLFxuICAgICAgICBwb3NTdGFydCA9IHNpemVBZnRlciArIHNjcm9sbERldGFpbHMub2Zmc2V0U3RhcnQgKyB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZS52YWx1ZSxcbiAgICAgICAgcG9zRW5kID0gcG9zU3RhcnQgKyB2aXJ0dWFsU2Nyb2xsU2l6ZXNbIHRvSW5kZXggXVxuXG4gICAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSBwb3NTdGFydCArIG9mZnNldFxuXG4gICAgICBpZiAoYWxpZ25FbmQgIT09IHZvaWQgMCkge1xuICAgICAgICBjb25zdCBzaXplRGlmZiA9IHNpemVBZnRlciAtIHNpemVCZWZvcmVcbiAgICAgICAgY29uc3Qgc2Nyb2xsU3RhcnQgPSBzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0ICsgc2l6ZURpZmZcblxuICAgICAgICBzY3JvbGxQb3NpdGlvbiA9IGFsaWduRm9yY2UgIT09IHRydWUgJiYgc2Nyb2xsU3RhcnQgPCBwb3NTdGFydCAmJiBwb3NFbmQgPCBzY3JvbGxTdGFydCArIHNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemVcbiAgICAgICAgICA/IHNjcm9sbFN0YXJ0XG4gICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIGFsaWduRW5kID09PSAnZW5kJ1xuICAgICAgICAgICAgICAgID8gcG9zRW5kIC0gc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZVxuICAgICAgICAgICAgICAgIDogcG9zU3RhcnQgLSAoYWxpZ25FbmQgPT09ICdzdGFydCcgPyAwIDogTWF0aC5yb3VuZCgoc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSAtIHZpcnR1YWxTY3JvbGxTaXplc1sgdG9JbmRleCBdKSAvIDIpKVxuICAgICAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBwcmV2U2Nyb2xsU3RhcnQgPSBzY3JvbGxQb3NpdGlvblxuXG4gICAgICBzZXRTY3JvbGwoXG4gICAgICAgIHNjcm9sbEVsLFxuICAgICAgICBzY3JvbGxQb3NpdGlvbixcbiAgICAgICAgcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwsXG4gICAgICAgICRxLmxhbmcucnRsXG4gICAgICApXG5cbiAgICAgIGVtaXRTY3JvbGwodG9JbmRleClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVmlydHVhbFNjcm9sbFNpemVzIChmcm9tKSB7XG4gICAgY29uc3QgY29udGVudEVsID0gY29udGVudFJlZi52YWx1ZVxuXG4gICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgY29uc3RcbiAgICAgICAgY2hpbGRyZW4gPSBmaWx0ZXJQcm90by5jYWxsKFxuICAgICAgICAgIGNvbnRlbnRFbC5jaGlsZHJlbixcbiAgICAgICAgICBlbCA9PiBlbC5jbGFzc0xpc3QgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdxLXZpcnR1YWwtc2Nyb2xsLS1za2lwJykgPT09IGZhbHNlXG4gICAgICAgICksXG4gICAgICAgIGNoaWxkcmVuTGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgICBzaXplRm4gPSBwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gZWwgPT4gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICAgICAgICA6IGVsID0+IGVsLm9mZnNldEhlaWdodFxuXG4gICAgICBsZXRcbiAgICAgICAgaW5kZXggPSBmcm9tLFxuICAgICAgICBzaXplLCBkaWZmXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7KSB7XG4gICAgICAgIHNpemUgPSBzaXplRm4oY2hpbGRyZW5bIGkgXSlcbiAgICAgICAgaSsrXG5cbiAgICAgICAgd2hpbGUgKGkgPCBjaGlsZHJlbkxlbmd0aCAmJiBjaGlsZHJlblsgaSBdLmNsYXNzTGlzdC5jb250YWlucygncS12aXJ0dWFsLXNjcm9sbC0td2l0aC1wcmV2JykgPT09IHRydWUpIHtcbiAgICAgICAgICBzaXplICs9IHNpemVGbihjaGlsZHJlblsgaSBdKVxuICAgICAgICAgIGkrK1xuICAgICAgICB9XG5cbiAgICAgICAgZGlmZiA9IHNpemUgLSB2aXJ0dWFsU2Nyb2xsU2l6ZXNbIGluZGV4IF1cblxuICAgICAgICBpZiAoZGlmZiAhPT0gMCkge1xuICAgICAgICAgIHZpcnR1YWxTY3JvbGxTaXplc1sgaW5kZXggXSArPSBkaWZmXG4gICAgICAgICAgdmlydHVhbFNjcm9sbFNpemVzQWdnWyBNYXRoLmZsb29yKGluZGV4IC8gYWdnQnVja2V0U2l6ZSkgXSArPSBkaWZmXG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25CbHVyUmVmb2N1c0ZuICgpIHtcbiAgICBjb250ZW50UmVmLnZhbHVlPy5mb2N1cygpXG4gIH1cblxuICBmdW5jdGlvbiBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCAodG9JbmRleCwgZnVsbFJlc2V0KSB7XG4gICAgY29uc3QgZGVmYXVsdFNpemUgPSAxICogdmlydHVhbFNjcm9sbEl0ZW1TaXplQ29tcHV0ZWQudmFsdWVcblxuICAgIGlmIChmdWxsUmVzZXQgPT09IHRydWUgfHwgQXJyYXkuaXNBcnJheSh2aXJ0dWFsU2Nyb2xsU2l6ZXMpID09PSBmYWxzZSkge1xuICAgICAgdmlydHVhbFNjcm9sbFNpemVzID0gW11cbiAgICB9XG5cbiAgICBjb25zdCBvbGRWaXJ0dWFsU2Nyb2xsU2l6ZXNMZW5ndGggPSB2aXJ0dWFsU2Nyb2xsU2l6ZXMubGVuZ3RoXG5cbiAgICB2aXJ0dWFsU2Nyb2xsU2l6ZXMubGVuZ3RoID0gdmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZVxuXG4gICAgZm9yIChsZXQgaSA9IHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUgLSAxOyBpID49IG9sZFZpcnR1YWxTY3JvbGxTaXplc0xlbmd0aDsgaS0tKSB7XG4gICAgICB2aXJ0dWFsU2Nyb2xsU2l6ZXNbIGkgXSA9IGRlZmF1bHRTaXplXG4gICAgfVxuXG4gICAgY29uc3Qgak1heCA9IE1hdGguZmxvb3IoKHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUgLSAxKSAvIGFnZ0J1Y2tldFNpemUpXG4gICAgdmlydHVhbFNjcm9sbFNpemVzQWdnID0gW11cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBqTWF4OyBqKyspIHtcbiAgICAgIGxldCBzaXplID0gMFxuICAgICAgY29uc3QgaU1heCA9IE1hdGgubWluKChqICsgMSkgKiBhZ2dCdWNrZXRTaXplLCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlKVxuICAgICAgZm9yIChsZXQgaSA9IGogKiBhZ2dCdWNrZXRTaXplOyBpIDwgaU1heDsgaSsrKSB7XG4gICAgICAgIHNpemUgKz0gdmlydHVhbFNjcm9sbFNpemVzWyBpIF1cbiAgICAgIH1cbiAgICAgIHZpcnR1YWxTY3JvbGxTaXplc0FnZy5wdXNoKHNpemUpXG4gICAgfVxuXG4gICAgcHJldlRvSW5kZXggPSAtMVxuICAgIHByZXZTY3JvbGxTdGFydCA9IHZvaWQgMFxuXG4gICAgdmlydHVhbFNjcm9sbFBhZGRpbmdCZWZvcmUudmFsdWUgPSBzdW1TaXplKHZpcnR1YWxTY3JvbGxTaXplc0FnZywgdmlydHVhbFNjcm9sbFNpemVzLCAwLCB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tKVxuICAgIHZpcnR1YWxTY3JvbGxQYWRkaW5nQWZ0ZXIudmFsdWUgPSBzdW1TaXplKHZpcnR1YWxTY3JvbGxTaXplc0FnZywgdmlydHVhbFNjcm9sbFNpemVzLCB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50bywgdmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSlcblxuICAgIGlmICh0b0luZGV4ID49IDApIHtcbiAgICAgIHVwZGF0ZVZpcnR1YWxTY3JvbGxTaXplcyh2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tKVxuICAgICAgbmV4dFRpY2soKCkgPT4geyBzY3JvbGxUbyh0b0luZGV4KSB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG9uVmlydHVhbFNjcm9sbEV2dCgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0VmlydHVhbFNjcm9sbFNpemUgKHNjcm9sbFZpZXdTaXplKSB7XG4gICAgaWYgKHNjcm9sbFZpZXdTaXplID09PSB2b2lkIDAgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IHNjcm9sbEVsID0gZ2V0VmlydHVhbFNjcm9sbFRhcmdldCgpXG5cbiAgICAgIGlmIChzY3JvbGxFbCAhPT0gdm9pZCAwICYmIHNjcm9sbEVsICE9PSBudWxsICYmIHNjcm9sbEVsLm5vZGVUeXBlICE9PSA4KSB7XG4gICAgICAgIHNjcm9sbFZpZXdTaXplID0gZ2V0U2Nyb2xsRGV0YWlscyhcbiAgICAgICAgICBzY3JvbGxFbCxcbiAgICAgICAgICBnZXRWaXJ0dWFsU2Nyb2xsRWwoKSxcbiAgICAgICAgICBiZWZvcmVSZWYudmFsdWUsXG4gICAgICAgICAgYWZ0ZXJSZWYudmFsdWUsXG4gICAgICAgICAgcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwsXG4gICAgICAgICAgJHEubGFuZy5ydGwsXG4gICAgICAgICAgcHJvcHMudmlydHVhbFNjcm9sbFN0aWNreVNpemVTdGFydCxcbiAgICAgICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZUVuZFxuICAgICAgICApLnNjcm9sbFZpZXdTaXplXG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9jYWxTY3JvbGxWaWV3U2l6ZSA9IHNjcm9sbFZpZXdTaXplXG5cbiAgICBjb25zdCB2aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0JlZm9yZSA9IHBhcnNlRmxvYXQocHJvcHMudmlydHVhbFNjcm9sbFNsaWNlUmF0aW9CZWZvcmUpIHx8IDBcbiAgICBjb25zdCB2aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0FmdGVyID0gcGFyc2VGbG9hdChwcm9wcy52aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0FmdGVyKSB8fCAwXG4gICAgY29uc3QgbXVsdGlwbGllciA9IDEgKyB2aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0JlZm9yZSArIHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQWZ0ZXJcbiAgICBjb25zdCB2aWV3ID0gc2Nyb2xsVmlld1NpemUgPT09IHZvaWQgMCB8fCBzY3JvbGxWaWV3U2l6ZSA8PSAwXG4gICAgICA/IDFcbiAgICAgIDogTWF0aC5jZWlsKHNjcm9sbFZpZXdTaXplIC8gdmlydHVhbFNjcm9sbEl0ZW1TaXplQ29tcHV0ZWQudmFsdWUpXG5cbiAgICBjb25zdCBiYXNlU2l6ZSA9IE1hdGgubWF4KFxuICAgICAgMSxcbiAgICAgIHZpZXcsXG4gICAgICBNYXRoLmNlaWwoKHByb3BzLnZpcnR1YWxTY3JvbGxTbGljZVNpemUgPiAwID8gcHJvcHMudmlydHVhbFNjcm9sbFNsaWNlU2l6ZSA6IDEwKSAvIG11bHRpcGxpZXIpXG4gICAgKVxuXG4gICAgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkLnZhbHVlID0ge1xuICAgICAgdG90YWw6IE1hdGguY2VpbChiYXNlU2l6ZSAqIG11bHRpcGxpZXIpLFxuICAgICAgc3RhcnQ6IE1hdGguY2VpbChiYXNlU2l6ZSAqIHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlKSxcbiAgICAgIGNlbnRlcjogTWF0aC5jZWlsKGJhc2VTaXplICogKDAuNSArIHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlKSksXG4gICAgICBlbmQ6IE1hdGguY2VpbChiYXNlU2l6ZSAqICgxICsgdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9CZWZvcmUpKSxcbiAgICAgIHZpZXdcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYWRWaXJ0dWFsU2Nyb2xsICh0YWcsIGNvbnRlbnQpIHtcbiAgICBjb25zdCBwYWRkaW5nU2l6ZSA9IHByb3BzLnZpcnR1YWxTY3JvbGxIb3Jpem9udGFsID09PSB0cnVlID8gJ3dpZHRoJyA6ICdoZWlnaHQnXG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBbICctLXEtdmlydHVhbC1zY3JvbGwtaXRlbS0nICsgcGFkZGluZ1NpemUgXTogdmlydHVhbFNjcm9sbEl0ZW1TaXplQ29tcHV0ZWQudmFsdWUgKyAncHgnXG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIHRhZyA9PT0gJ3Rib2R5J1xuICAgICAgICA/IGgodGFnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXZpcnR1YWwtc2Nyb2xsX19wYWRkaW5nJyxcbiAgICAgICAgICBrZXk6ICdiZWZvcmUnLFxuICAgICAgICAgIHJlZjogYmVmb3JlUmVmXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCd0cicsIFtcbiAgICAgICAgICAgIGgoJ3RkJywge1xuICAgICAgICAgICAgICBzdHlsZTogeyBbIHBhZGRpbmdTaXplIF06IGAkeyB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZS52YWx1ZSB9cHhgLCAuLi5zdHlsZSB9LFxuICAgICAgICAgICAgICBjb2xzcGFuOiBjb2xzcGFuQXR0ci52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgICA6IGgodGFnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXZpcnR1YWwtc2Nyb2xsX19wYWRkaW5nJyxcbiAgICAgICAgICBrZXk6ICdiZWZvcmUnLFxuICAgICAgICAgIHJlZjogYmVmb3JlUmVmLFxuICAgICAgICAgIHN0eWxlOiB7IFsgcGFkZGluZ1NpemUgXTogYCR7IHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlLnZhbHVlIH1weGAsIC4uLnN0eWxlIH1cbiAgICAgICAgfSksXG5cbiAgICAgIGgodGFnLCB7XG4gICAgICAgIGNsYXNzOiAncS12aXJ0dWFsLXNjcm9sbF9fY29udGVudCcsXG4gICAgICAgIGtleTogJ2NvbnRlbnQnLFxuICAgICAgICByZWY6IGNvbnRlbnRSZWYsXG4gICAgICAgIHRhYmluZGV4OiAtMVxuICAgICAgfSwgY29udGVudC5mbGF0KCkpLFxuXG4gICAgICB0YWcgPT09ICd0Ym9keSdcbiAgICAgICAgPyBoKHRhZywge1xuICAgICAgICAgIGNsYXNzOiAncS12aXJ0dWFsLXNjcm9sbF9fcGFkZGluZycsXG4gICAgICAgICAga2V5OiAnYWZ0ZXInLFxuICAgICAgICAgIHJlZjogYWZ0ZXJSZWZcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ3RyJywgW1xuICAgICAgICAgICAgaCgndGQnLCB7XG4gICAgICAgICAgICAgIHN0eWxlOiB7IFsgcGFkZGluZ1NpemUgXTogYCR7IHZpcnR1YWxTY3JvbGxQYWRkaW5nQWZ0ZXIudmFsdWUgfXB4YCwgLi4uc3R5bGUgfSxcbiAgICAgICAgICAgICAgY29sc3BhbjogY29sc3BhbkF0dHIudmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgICAgOiBoKHRhZywge1xuICAgICAgICAgIGNsYXNzOiAncS12aXJ0dWFsLXNjcm9sbF9fcGFkZGluZycsXG4gICAgICAgICAga2V5OiAnYWZ0ZXInLFxuICAgICAgICAgIHJlZjogYWZ0ZXJSZWYsXG4gICAgICAgICAgc3R5bGU6IHsgWyBwYWRkaW5nU2l6ZSBdOiBgJHsgdmlydHVhbFNjcm9sbFBhZGRpbmdBZnRlci52YWx1ZSB9cHhgLCAuLi5zdHlsZSB9XG4gICAgICAgIH0pXG4gICAgXVxuICB9XG5cbiAgZnVuY3Rpb24gZW1pdFNjcm9sbCAoaW5kZXgpIHtcbiAgICBpZiAocHJldlRvSW5kZXggIT09IGluZGV4KSB7XG4gICAgICBwcm9wcy5vblZpcnR1YWxTY3JvbGwgIT09IHZvaWQgMCAmJiBlbWl0KCd2aXJ0dWFsU2Nyb2xsJywge1xuICAgICAgICBpbmRleCxcbiAgICAgICAgZnJvbTogdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSxcbiAgICAgICAgdG86IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLnRvIC0gMSxcbiAgICAgICAgZGlyZWN0aW9uOiBpbmRleCA8IHByZXZUb0luZGV4ID8gJ2RlY3JlYXNlJyA6ICdpbmNyZWFzZScsXG4gICAgICAgIHJlZjogcHJveHlcbiAgICAgIH0pXG5cbiAgICAgIHByZXZUb0luZGV4ID0gaW5kZXhcbiAgICB9XG4gIH1cblxuICBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZSgpXG4gIGNvbnN0IG9uVmlydHVhbFNjcm9sbEV2dCA9IGRlYm91bmNlKFxuICAgIGxvY2FsT25WaXJ0dWFsU2Nyb2xsRXZ0LFxuICAgICRxLnBsYXRmb3JtLmlzLmlvcyA9PT0gdHJ1ZSA/IDEyMCA6IDM1XG4gIClcblxuICBvbkJlZm9yZU1vdW50KCgpID0+IHtcbiAgICBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZSgpXG4gIH0pXG5cbiAgbGV0IHNob3VsZEFjdGl2YXRlID0gZmFsc2VcblxuICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICBzaG91bGRBY3RpdmF0ZSA9IHRydWVcbiAgfSlcblxuICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgaWYgKHNob3VsZEFjdGl2YXRlICE9PSB0cnVlKSByZXR1cm5cblxuICAgIGNvbnN0IHNjcm9sbEVsID0gZ2V0VmlydHVhbFNjcm9sbFRhcmdldCgpXG5cbiAgICBpZiAocHJldlNjcm9sbFN0YXJ0ICE9PSB2b2lkIDAgJiYgc2Nyb2xsRWwgIT09IHZvaWQgMCAmJiBzY3JvbGxFbCAhPT0gbnVsbCAmJiBzY3JvbGxFbC5ub2RlVHlwZSAhPT0gOCkge1xuICAgICAgc2V0U2Nyb2xsKFxuICAgICAgICBzY3JvbGxFbCxcbiAgICAgICAgcHJldlNjcm9sbFN0YXJ0LFxuICAgICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCxcbiAgICAgICAgJHEubGFuZy5ydGxcbiAgICAgIClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY3JvbGxUbyhwcmV2VG9JbmRleClcbiAgICB9XG4gIH0pXG5cbiAgX19RVUFTQVJfU1NSX18gfHwgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICBvblZpcnR1YWxTY3JvbGxFdnQuY2FuY2VsKClcbiAgfSlcblxuICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgT2JqZWN0LmFzc2lnbihwcm94eSwgeyBzY3JvbGxUbywgcmVzZXQsIHJlZnJlc2ggfSlcblxuICByZXR1cm4ge1xuICAgIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLFxuICAgIHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZCxcblxuICAgIHNldFZpcnR1YWxTY3JvbGxTaXplLFxuICAgIG9uVmlydHVhbFNjcm9sbEV2dCxcbiAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCxcbiAgICBwYWRWaXJ0dWFsU2Nyb2xsLFxuXG4gICAgc2Nyb2xsVG8sXG4gICAgcmVzZXQsXG4gICAgcmVmcmVzaFxuICB9XG59XG4iLCJpbXBvcnQgdXNlRmllbGQsIHsgdXNlRmllbGRTdGF0ZSwgdXNlRmllbGRQcm9wcywgdXNlRmllbGRFbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWZpZWxkL3VzZS1maWVsZC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUZpZWxkJyxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRmllbGRQcm9wcyxcblxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2xhYmVsJ1xuICAgIH1cbiAgfSxcblxuICBlbWl0czogdXNlRmllbGRFbWl0cyxcblxuICBzZXR1cCAoKSB7XG4gICAgcmV0dXJuIHVzZUZpZWxkKFxuICAgICAgdXNlRmllbGRTdGF0ZSh7IHRhZ1Byb3A6IHRydWUgfSlcbiAgICApXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVcGRhdGUsIG9uVXBkYXRlZCwgb25CZWZvcmVVbm1vdW50LCBuZXh0VGljaywgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUZpZWxkIGZyb20gJy4uL2ZpZWxkL1FGaWVsZC5qcydcbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFDaGlwIGZyb20gJy4uL2NoaXAvUUNoaXAuanMnXG5cbmltcG9ydCBRSXRlbSBmcm9tICcuLi9pdGVtL1FJdGVtLmpzJ1xuaW1wb3J0IFFJdGVtU2VjdGlvbiBmcm9tICcuLi9pdGVtL1FJdGVtU2VjdGlvbi5qcydcbmltcG9ydCBRSXRlbUxhYmVsIGZyb20gJy4uL2l0ZW0vUUl0ZW1MYWJlbC5qcydcblxuaW1wb3J0IFFNZW51IGZyb20gJy4uL21lbnUvUU1lbnUuanMnXG5pbXBvcnQgUURpYWxvZyBmcm9tICcuLi9kaWFsb2cvUURpYWxvZy5qcydcblxuaW1wb3J0IHVzZUZpZWxkLCB7IHVzZUZpZWxkU3RhdGUsIHVzZUZpZWxkUHJvcHMsIHVzZUZpZWxkRW1pdHMsIGZpZWxkVmFsdWVJc0ZpbGxlZCB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWZpZWxkL3VzZS1maWVsZC5qcydcbmltcG9ydCB7IHVzZVZpcnR1YWxTY3JvbGwsIHVzZVZpcnR1YWxTY3JvbGxQcm9wcyB9IGZyb20gJy4uL3ZpcnR1YWwtc2Nyb2xsL3VzZS12aXJ0dWFsLXNjcm9sbC5qcydcbmltcG9ydCB7IHVzZUZvcm1Qcm9wcywgdXNlRm9ybUlucHV0TmFtZUF0dHIgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtZm9ybS9wcml2YXRlLnVzZS1mb3JtLmpzJ1xuaW1wb3J0IHVzZUtleUNvbXBvc2l0aW9uIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWtleS1jb21wb3NpdGlvbi91c2Uta2V5LWNvbXBvc2l0aW9uLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBpc0RlZXBFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzL2lzLmpzJ1xuaW1wb3J0IHsgc3RvcCwgcHJldmVudCwgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IG5vcm1hbGl6ZVRvSW50ZXJ2YWwgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgc2hvdWxkSWdub3JlS2V5LCBpc0tleUNvZGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmtleWJvYXJkL2tleS1jb21wb3NpdGlvbi5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmNvbnN0IHZhbGlkYXRlTmV3VmFsdWVNb2RlID0gdiA9PiBbICdhZGQnLCAnYWRkLXVuaXF1ZScsICd0b2dnbGUnIF0uaW5jbHVkZXModilcbmNvbnN0IHJlRXNjYXBlTGlzdCA9ICcuKis/XiR7fSgpfFtdXFxcXCdcbmNvbnN0IGZpZWxkUHJvcHNMaXN0ID0gT2JqZWN0LmtleXModXNlRmllbGRQcm9wcylcblxuZnVuY3Rpb24gZ2V0UHJvcFZhbHVlRm4gKHVzZXJQcm9wTmFtZSwgZGVmYXVsdFByb3BOYW1lKSB7XG4gIGlmICh0eXBlb2YgdXNlclByb3BOYW1lID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdXNlclByb3BOYW1lXG5cbiAgY29uc3QgcHJvcE5hbWUgPSB1c2VyUHJvcE5hbWUgIT09IHZvaWQgMFxuICAgID8gdXNlclByb3BOYW1lXG4gICAgOiBkZWZhdWx0UHJvcE5hbWVcblxuICByZXR1cm4gb3B0ID0+ICgob3B0ICE9PSBudWxsICYmIHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIHByb3BOYW1lIGluIG9wdCkgPyBvcHRbIHByb3BOYW1lIF0gOiBvcHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU2VsZWN0JyxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlVmlydHVhbFNjcm9sbFByb3BzLFxuICAgIC4uLnVzZUZvcm1Qcm9wcyxcbiAgICAuLi51c2VGaWVsZFByb3BzLFxuXG4gICAgLy8gb3ZlcnJpZGUgb2YgdXNlRmllbGRQcm9wcyA+IG1vZGVsVmFsdWVcbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG5cbiAgICBtdWx0aXBsZTogQm9vbGVhbixcblxuICAgIGRpc3BsYXlWYWx1ZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgIGRpc3BsYXlWYWx1ZUh0bWw6IEJvb2xlYW4sXG4gICAgZHJvcGRvd25JY29uOiBTdHJpbmcsXG5cbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gICAgfSxcblxuICAgIG9wdGlvblZhbHVlOiBbIEZ1bmN0aW9uLCBTdHJpbmcgXSxcbiAgICBvcHRpb25MYWJlbDogWyBGdW5jdGlvbiwgU3RyaW5nIF0sXG4gICAgb3B0aW9uRGlzYWJsZTogWyBGdW5jdGlvbiwgU3RyaW5nIF0sXG5cbiAgICBoaWRlU2VsZWN0ZWQ6IEJvb2xlYW4sXG4gICAgaGlkZURyb3Bkb3duSWNvbjogQm9vbGVhbixcbiAgICBmaWxsSW5wdXQ6IEJvb2xlYW4sXG5cbiAgICBtYXhWYWx1ZXM6IFsgTnVtYmVyLCBTdHJpbmcgXSxcblxuICAgIG9wdGlvbnNEZW5zZTogQm9vbGVhbixcbiAgICBvcHRpb25zRGFyazoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIG9wdGlvbnNTZWxlY3RlZENsYXNzOiBTdHJpbmcsXG4gICAgb3B0aW9uc0h0bWw6IEJvb2xlYW4sXG5cbiAgICBvcHRpb25zQ292ZXI6IEJvb2xlYW4sXG5cbiAgICBtZW51U2hyaW5rOiBCb29sZWFuLFxuICAgIG1lbnVBbmNob3I6IFN0cmluZyxcbiAgICBtZW51U2VsZjogU3RyaW5nLFxuICAgIG1lbnVPZmZzZXQ6IEFycmF5LFxuXG4gICAgcG9wdXBDb250ZW50Q2xhc3M6IFN0cmluZyxcbiAgICBwb3B1cENvbnRlbnRTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICBwb3B1cE5vUm91dGVEaXNtaXNzOiBCb29sZWFuLFxuXG4gICAgdXNlSW5wdXQ6IEJvb2xlYW4sXG4gICAgdXNlQ2hpcHM6IEJvb2xlYW4sXG5cbiAgICBuZXdWYWx1ZU1vZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdmFsaWRhdGVOZXdWYWx1ZU1vZGVcbiAgICB9LFxuXG4gICAgbWFwT3B0aW9uczogQm9vbGVhbixcbiAgICBlbWl0VmFsdWU6IEJvb2xlYW4sXG5cbiAgICBkaXNhYmxlVGFiU2VsZWN0aW9uOiBCb29sZWFuLFxuXG4gICAgaW5wdXREZWJvdW5jZToge1xuICAgICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgICAgZGVmYXVsdDogNTAwXG4gICAgfSxcblxuICAgIGlucHV0Q2xhc3M6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgaW5wdXRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIHRhYmluZGV4OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcblxuICAgIGF1dG9jb21wbGV0ZTogU3RyaW5nLFxuXG4gICAgdHJhbnNpdGlvblNob3c6IHt9LFxuICAgIHRyYW5zaXRpb25IaWRlOiB7fSxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IHt9LFxuXG4gICAgYmVoYXZpb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdkZWZhdWx0JywgJ21lbnUnLCAnZGlhbG9nJyBdLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnXG4gICAgfSxcblxuICAgIC8vIG92ZXJyaWRlIG9mIHVzZVZpcnR1YWxTY3JvbGxQcm9wcyA+IHZpcnR1YWxTY3JvbGxJdGVtU2l6ZSAobm8gZGVmYXVsdClcbiAgICB2aXJ0dWFsU2Nyb2xsSXRlbVNpemU6IHVzZVZpcnR1YWxTY3JvbGxQcm9wcy52aXJ0dWFsU2Nyb2xsSXRlbVNpemUudHlwZSxcblxuICAgIG9uTmV3VmFsdWU6IEZ1bmN0aW9uLFxuICAgIG9uRmlsdGVyOiBGdW5jdGlvblxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlRmllbGRFbWl0cyxcbiAgICAnYWRkJywgJ3JlbW92ZScsICdpbnB1dFZhbHVlJyxcbiAgICAna2V5dXAnLCAna2V5cHJlc3MnLCAna2V5ZG93bicsXG4gICAgJ3BvcHVwU2hvdycsICdwb3B1cEhpZGUnLFxuICAgICdmaWx0ZXJBYm9ydCdcbiAgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICAgIGNvbnN0IG1lbnUgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgZGlhbG9nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IG9wdGlvbkluZGV4ID0gcmVmKC0xKVxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSByZWYoJycpXG4gICAgY29uc3QgZGlhbG9nRmllbGRGb2N1c2VkID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGlubmVyTG9hZGluZ0luZGljYXRvciA9IHJlZihmYWxzZSlcblxuICAgIGxldCBmaWx0ZXJUaW1lciA9IG51bGwsIGlucHV0VmFsdWVUaW1lciA9IG51bGwsXG4gICAgICBpbm5lclZhbHVlQ2FjaGUsXG4gICAgICBoYXNEaWFsb2csIHVzZXJJbnB1dFZhbHVlLCBmaWx0ZXJJZCA9IG51bGwsIGRlZmF1bHRJbnB1dFZhbHVlLFxuICAgICAgdHJhbnNpdGlvblNob3dDb21wdXRlZCwgc2VhcmNoQnVmZmVyLCBzZWFyY2hCdWZmZXJFeHBcblxuICAgIGNvbnN0IGlucHV0UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgdGFyZ2V0UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgbWVudVJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IG1lbnVDb250ZW50UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBuYW1lUHJvcCA9IHVzZUZvcm1JbnB1dE5hbWVBdHRyKHByb3BzKVxuXG4gICAgY29uc3Qgb25Db21wb3NpdGlvbiA9IHVzZUtleUNvbXBvc2l0aW9uKG9uSW5wdXQpXG5cbiAgICBjb25zdCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgQXJyYXkuaXNBcnJheShwcm9wcy5vcHRpb25zKVxuICAgICAgICA/IHByb3BzLm9wdGlvbnMubGVuZ3RoXG4gICAgICAgIDogMFxuICAgICkpXG5cbiAgICBjb25zdCB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSA9PT0gdm9pZCAwXG4gICAgICAgID8gKHByb3BzLm9wdGlvbnNEZW5zZSA9PT0gdHJ1ZSA/IDI0IDogNDgpXG4gICAgICAgIDogcHJvcHMudmlydHVhbFNjcm9sbEl0ZW1TaXplXG4gICAgKSlcblxuICAgIGNvbnN0IHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLFxuICAgICAgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkLFxuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgICBwYWRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgb25WaXJ0dWFsU2Nyb2xsRXZ0LFxuICAgICAgc2Nyb2xsVG8sXG4gICAgICBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZVxuICAgIH0gPSB1c2VWaXJ0dWFsU2Nyb2xsKHtcbiAgICAgIHZpcnR1YWxTY3JvbGxMZW5ndGgsIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQsIGdldFZpcnR1YWxTY3JvbGxFbCxcbiAgICAgIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkXG4gICAgfSlcblxuICAgIGNvbnN0IHN0YXRlID0gdXNlRmllbGRTdGF0ZSgpXG5cbiAgICBjb25zdCBpbm5lclZhbHVlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgbWFwTnVsbCA9IHByb3BzLm1hcE9wdGlvbnMgPT09IHRydWUgJiYgcHJvcHMubXVsdGlwbGUgIT09IHRydWUsXG4gICAgICAgIHZhbCA9IHByb3BzLm1vZGVsVmFsdWUgIT09IHZvaWQgMCAmJiAocHJvcHMubW9kZWxWYWx1ZSAhPT0gbnVsbCB8fCBtYXBOdWxsID09PSB0cnVlKVxuICAgICAgICAgID8gKHByb3BzLm11bHRpcGxlID09PSB0cnVlICYmIEFycmF5LmlzQXJyYXkocHJvcHMubW9kZWxWYWx1ZSkgPyBwcm9wcy5tb2RlbFZhbHVlIDogWyBwcm9wcy5tb2RlbFZhbHVlIF0pXG4gICAgICAgICAgOiBbXVxuXG4gICAgICBpZiAocHJvcHMubWFwT3B0aW9ucyA9PT0gdHJ1ZSAmJiBBcnJheS5pc0FycmF5KHByb3BzLm9wdGlvbnMpID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlID0gcHJvcHMubWFwT3B0aW9ucyA9PT0gdHJ1ZSAmJiBpbm5lclZhbHVlQ2FjaGUgIT09IHZvaWQgMFxuICAgICAgICAgID8gaW5uZXJWYWx1ZUNhY2hlXG4gICAgICAgICAgOiBbXVxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWwubWFwKHYgPT4gZ2V0T3B0aW9uKHYsIGNhY2hlKSlcblxuICAgICAgICByZXR1cm4gcHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbCAmJiBtYXBOdWxsID09PSB0cnVlXG4gICAgICAgICAgPyB2YWx1ZXMuZmlsdGVyKHYgPT4gdiAhPT0gbnVsbClcbiAgICAgICAgICA6IHZhbHVlc1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsXG4gICAgfSlcblxuICAgIGNvbnN0IGlubmVyRmllbGRQcm9wcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHt9XG4gICAgICBmaWVsZFByb3BzTGlzdC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHByb3BzWyBrZXkgXVxuICAgICAgICBpZiAodmFsICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBhY2NbIGtleSBdID0gdmFsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGlzT3B0aW9uc0RhcmsgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5vcHRpb25zRGFyayA9PT0gbnVsbFxuICAgICAgICA/IHN0YXRlLmlzRGFyay52YWx1ZVxuICAgICAgICA6IHByb3BzLm9wdGlvbnNEYXJrXG4gICAgKSlcblxuICAgIGNvbnN0IGhhc1ZhbHVlID0gY29tcHV0ZWQoKCkgPT4gZmllbGRWYWx1ZUlzRmlsbGVkKGlubmVyVmFsdWUudmFsdWUpKVxuXG4gICAgY29uc3QgY29tcHV0ZWRJbnB1dENsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IGNscyA9ICdxLWZpZWxkX19pbnB1dCBxLXBsYWNlaG9sZGVyIGNvbCdcblxuICAgICAgaWYgKHByb3BzLmhpZGVTZWxlY3RlZCA9PT0gdHJ1ZSB8fCBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gWyBjbHMsIHByb3BzLmlucHV0Q2xhc3MgXVxuICAgICAgfVxuXG4gICAgICBjbHMgKz0gJyBxLWZpZWxkX19pbnB1dC0tcGFkZGluZydcblxuICAgICAgcmV0dXJuIHByb3BzLmlucHV0Q2xhc3MgPT09IHZvaWQgMFxuICAgICAgICA/IGNsc1xuICAgICAgICA6IFsgY2xzLCBwcm9wcy5pbnB1dENsYXNzIF1cbiAgICB9KVxuXG4gICAgY29uc3QgbWVudUNvbnRlbnRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAocHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwgPT09IHRydWUgPyAncS12aXJ0dWFsLXNjcm9sbC0taG9yaXpvbnRhbCcgOiAnJylcbiAgICAgICsgKHByb3BzLnBvcHVwQ29udGVudENsYXNzID8gJyAnICsgcHJvcHMucG9wdXBDb250ZW50Q2xhc3MgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBub09wdGlvbnMgPSBjb21wdXRlZCgoKSA9PiB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlID09PSAwKVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRTdHJpbmcgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgaW5uZXJWYWx1ZS52YWx1ZVxuICAgICAgICAubWFwKG9wdCA9PiBnZXRPcHRpb25MYWJlbC52YWx1ZShvcHQpKVxuICAgICAgICAuam9pbignLCAnKVxuICAgIClcblxuICAgIGNvbnN0IGFyaWFDdXJyZW50VmFsdWUgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMuZGlzcGxheVZhbHVlICE9PSB2b2lkIDBcbiAgICAgID8gcHJvcHMuZGlzcGxheVZhbHVlXG4gICAgICA6IHNlbGVjdGVkU3RyaW5nLnZhbHVlXG4gICAgKSlcblxuICAgIGNvbnN0IG5lZWRzSHRtbEZuID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMub3B0aW9uc0h0bWwgPT09IHRydWVcbiAgICAgICAgPyAoKSA9PiB0cnVlXG4gICAgICAgIDogb3B0ID0+IG9wdD8uaHRtbCA9PT0gdHJ1ZVxuICAgICkpXG5cbiAgICBjb25zdCB2YWx1ZUFzSHRtbCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmRpc3BsYXlWYWx1ZUh0bWwgPT09IHRydWUgfHwgKFxuICAgICAgICBwcm9wcy5kaXNwbGF5VmFsdWUgPT09IHZvaWQgMCAmJiAoXG4gICAgICAgICAgcHJvcHMub3B0aW9uc0h0bWwgPT09IHRydWVcbiAgICAgICAgICB8fCBpbm5lclZhbHVlLnZhbHVlLnNvbWUobmVlZHNIdG1sRm4udmFsdWUpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApKVxuXG4gICAgY29uc3QgdGFiaW5kZXggPSBjb21wdXRlZCgoKSA9PiAoc3RhdGUuZm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSA/IHByb3BzLnRhYmluZGV4IDogLTEpKVxuXG4gICAgY29uc3QgY29tYm9ib3hBdHRycyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgICB0YWJpbmRleDogcHJvcHMudGFiaW5kZXgsXG4gICAgICAgIHJvbGU6ICdjb21ib2JveCcsXG4gICAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMubGFiZWwsXG4gICAgICAgICdhcmlhLXJlYWRvbmx5JzogcHJvcHMucmVhZG9ubHkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZSA/ICdsaXN0JyA6ICdub25lJyxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBtZW51LnZhbHVlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBgJHsgc3RhdGUudGFyZ2V0VWlkLnZhbHVlIH1fbGJgXG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25JbmRleC52YWx1ZSA+PSAwKSB7XG4gICAgICAgIGF0dHJzWyAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JyBdID0gYCR7IHN0YXRlLnRhcmdldFVpZC52YWx1ZSB9XyR7IG9wdGlvbkluZGV4LnZhbHVlIH1gXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyc1xuICAgIH0pXG5cbiAgICBjb25zdCBsaXN0Ym94QXR0cnMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgaWQ6IGAkeyBzdGF0ZS50YXJnZXRVaWQudmFsdWUgfV9sYmAsXG4gICAgICByb2xlOiAnbGlzdGJveCcsXG4gICAgICAnYXJpYS1tdWx0aXNlbGVjdGFibGUnOiBwcm9wcy5tdWx0aXBsZSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcbiAgICB9KSlcblxuICAgIGNvbnN0IHNlbGVjdGVkU2NvcGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gaW5uZXJWYWx1ZS52YWx1ZS5tYXAoKG9wdCwgaSkgPT4gKHtcbiAgICAgICAgaW5kZXg6IGksXG4gICAgICAgIG9wdCxcbiAgICAgICAgaHRtbDogbmVlZHNIdG1sRm4udmFsdWUob3B0KSxcbiAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgIHJlbW92ZUF0SW5kZXg6IHJlbW92ZUF0SW5kZXhBbmRGb2N1cyxcbiAgICAgICAgdG9nZ2xlT3B0aW9uLFxuICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWVcbiAgICAgIH0pKVxuICAgIH0pXG5cbiAgICBjb25zdCBvcHRpb25TY29wZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmICh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZVxuXG4gICAgICByZXR1cm4gcHJvcHMub3B0aW9ucy5zbGljZShmcm9tLCB0bykubWFwKChvcHQsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZGlzYWJsZSA9IGlzT3B0aW9uRGlzYWJsZWQudmFsdWUob3B0KSA9PT0gdHJ1ZVxuICAgICAgICBjb25zdCBhY3RpdmUgPSBpc09wdGlvblNlbGVjdGVkKG9wdCkgPT09IHRydWVcbiAgICAgICAgY29uc3QgaW5kZXggPSBmcm9tICsgaVxuXG4gICAgICAgIGNvbnN0IGl0ZW1Qcm9wcyA9IHtcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzOiBjb21wdXRlZE9wdGlvbnNTZWxlY3RlZENsYXNzLnZhbHVlLFxuICAgICAgICAgIG1hbnVhbEZvY3VzOiB0cnVlLFxuICAgICAgICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgICAgICAgIGRpc2FibGUsXG4gICAgICAgICAgdGFiaW5kZXg6IC0xLFxuICAgICAgICAgIGRlbnNlOiBwcm9wcy5vcHRpb25zRGVuc2UsXG4gICAgICAgICAgZGFyazogaXNPcHRpb25zRGFyay52YWx1ZSxcbiAgICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IGFjdGl2ZSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICAgaWQ6IGAkeyBzdGF0ZS50YXJnZXRVaWQudmFsdWUgfV8keyBpbmRleCB9YCxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7IHRvZ2dsZU9wdGlvbihvcHQpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXNhYmxlICE9PSB0cnVlKSB7XG4gICAgICAgICAgb3B0aW9uSW5kZXgudmFsdWUgPT09IGluZGV4ICYmIChpdGVtUHJvcHMuZm9jdXNlZCA9IHRydWUpXG5cbiAgICAgICAgICBpZiAoJHEucGxhdGZvcm0uaXMuZGVza3RvcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaXRlbVByb3BzLm9uTW91c2Vtb3ZlID0gKCkgPT4geyBtZW51LnZhbHVlID09PSB0cnVlICYmIHNldE9wdGlvbkluZGV4KGluZGV4KSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBvcHQsXG4gICAgICAgICAgaHRtbDogbmVlZHNIdG1sRm4udmFsdWUob3B0KSxcbiAgICAgICAgICBsYWJlbDogZ2V0T3B0aW9uTGFiZWwudmFsdWUob3B0KSxcbiAgICAgICAgICBzZWxlY3RlZDogaXRlbVByb3BzLmFjdGl2ZSxcbiAgICAgICAgICBmb2N1c2VkOiBpdGVtUHJvcHMuZm9jdXNlZCxcbiAgICAgICAgICB0b2dnbGVPcHRpb24sXG4gICAgICAgICAgc2V0T3B0aW9uSW5kZXgsXG4gICAgICAgICAgaXRlbVByb3BzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IGRyb3Bkb3duQXJyb3dJY29uID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZHJvcGRvd25JY29uICE9PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5kcm9wZG93bkljb25cbiAgICAgICAgOiAkcS5pY29uU2V0LmFycm93LmRyb3Bkb3duXG4gICAgKSlcblxuICAgIGNvbnN0IHNxdWFyZWRNZW51ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm9wdGlvbnNDb3ZlciA9PT0gZmFsc2VcbiAgICAgICYmIHByb3BzLm91dGxpbmVkICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy5zdGFuZG91dCAhPT0gdHJ1ZVxuICAgICAgJiYgcHJvcHMuYm9yZGVybGVzcyAhPT0gdHJ1ZVxuICAgICAgJiYgcHJvcHMucm91bmRlZCAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGNvbXB1dGVkT3B0aW9uc1NlbGVjdGVkQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5vcHRpb25zU2VsZWN0ZWRDbGFzcyAhPT0gdm9pZCAwXG4gICAgICAgID8gcHJvcHMub3B0aW9uc1NlbGVjdGVkQ2xhc3NcbiAgICAgICAgOiAocHJvcHMuY29sb3IgIT09IHZvaWQgMCA/IGB0ZXh0LSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgKSlcblxuICAgIC8vIHJldHVybnMgbWV0aG9kIHRvIGdldCB2YWx1ZSBvZiBhbiBvcHRpb247XG4gICAgLy8gdGFrZXMgaW50byBhY2NvdW50ICdvcHRpb24tdmFsdWUnIHByb3BcbiAgICBjb25zdCBnZXRPcHRpb25WYWx1ZSA9IGNvbXB1dGVkKCgpID0+IGdldFByb3BWYWx1ZUZuKHByb3BzLm9wdGlvblZhbHVlLCAndmFsdWUnKSlcblxuICAgIC8vIHJldHVybnMgbWV0aG9kIHRvIGdldCBsYWJlbCBvZiBhbiBvcHRpb247XG4gICAgLy8gdGFrZXMgaW50byBhY2NvdW50ICdvcHRpb24tbGFiZWwnIHByb3BcbiAgICBjb25zdCBnZXRPcHRpb25MYWJlbCA9IGNvbXB1dGVkKCgpID0+IGdldFByb3BWYWx1ZUZuKHByb3BzLm9wdGlvbkxhYmVsLCAnbGFiZWwnKSlcblxuICAgIC8vIHJldHVybnMgbWV0aG9kIHRvIHRlbGwgaWYgYW4gb3B0aW9uIGlzIGRpc2FibGVkO1xuICAgIC8vIHRha2VzIGludG8gYWNjb3VudCAnb3B0aW9uLWRpc2FibGUnIHByb3BcbiAgICBjb25zdCBpc09wdGlvbkRpc2FibGVkID0gY29tcHV0ZWQoKCkgPT4gZ2V0UHJvcFZhbHVlRm4ocHJvcHMub3B0aW9uRGlzYWJsZSwgJ2Rpc2FibGUnKSlcblxuICAgIGNvbnN0IGlubmVyT3B0aW9uc1ZhbHVlID0gY29tcHV0ZWQoKCkgPT4gaW5uZXJWYWx1ZS52YWx1ZS5tYXAoZ2V0T3B0aW9uVmFsdWUudmFsdWUpKVxuXG4gICAgY29uc3QgaW5wdXRDb250cm9sRXZlbnRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZXZ0ID0ge1xuICAgICAgICBvbklucHV0LFxuICAgICAgICAvLyBTYWZhcmkgPCAxMC4yICYgVUlXZWJWaWV3IGRvZXNuJ3QgZmlyZSBjb21wb3NpdGlvbmVuZCB3aGVuXG4gICAgICAgIC8vIHN3aXRjaGluZyBmb2N1cyBiZWZvcmUgY29uZmlybWluZyBjb21wb3NpdGlvbiBjaG9pY2VcbiAgICAgICAgLy8gdGhpcyBhbHNvIGZpeGVzIHRoZSBpc3N1ZSB3aGVyZSBzb21lIGJyb3dzZXJzIGUuZy4gaU9TIENocm9tZVxuICAgICAgICAvLyBmaXJlcyBcImNoYW5nZVwiIGluc3RlYWQgb2YgXCJpbnB1dFwiIG9uIGF1dG9jb21wbGV0ZS5cbiAgICAgICAgb25DaGFuZ2U6IG9uQ29tcG9zaXRpb24sXG4gICAgICAgIG9uS2V5ZG93bjogb25UYXJnZXRLZXlkb3duLFxuICAgICAgICBvbktleXVwOiBvblRhcmdldEF1dG9jb21wbGV0ZSxcbiAgICAgICAgb25LZXlwcmVzczogb25UYXJnZXRLZXlwcmVzcyxcbiAgICAgICAgb25Gb2N1czogc2VsZWN0SW5wdXRUZXh0LFxuICAgICAgICBvbkNsaWNrIChlKSB7IGhhc0RpYWxvZyA9PT0gdHJ1ZSAmJiBzdG9wKGUpIH1cbiAgICAgIH1cblxuICAgICAgZXZ0Lm9uQ29tcG9zaXRpb25zdGFydCA9IGV2dC5vbkNvbXBvc2l0aW9udXBkYXRlID0gZXZ0Lm9uQ29tcG9zaXRpb25lbmQgPSBvbkNvbXBvc2l0aW9uXG5cbiAgICAgIHJldHVybiBldnRcbiAgICB9KVxuXG4gICAgd2F0Y2goaW5uZXJWYWx1ZSwgdmFsID0+IHtcbiAgICAgIGlubmVyVmFsdWVDYWNoZSA9IHZhbFxuXG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLnVzZUlucHV0ID09PSB0cnVlXG4gICAgICAgICYmIHByb3BzLmZpbGxJbnB1dCA9PT0gdHJ1ZVxuICAgICAgICAmJiBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZVxuICAgICAgICAvLyBQcmV2ZW50IHJlLWVudGVyaW5nIGluIGZpbHRlciB3aGlsZSBmaWx0ZXJpbmdcbiAgICAgICAgLy8gQWxzbyBwcmV2ZW50IGNsZWFyaW5nIGlucHV0VmFsdWUgd2hpbGUgZmlsdGVyaW5nXG4gICAgICAgICYmIHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAmJiAoKGRpYWxvZy52YWx1ZSAhPT0gdHJ1ZSAmJiBtZW51LnZhbHVlICE9PSB0cnVlKSB8fCBoYXNWYWx1ZS52YWx1ZSAhPT0gdHJ1ZSlcbiAgICAgICkge1xuICAgICAgICB1c2VySW5wdXRWYWx1ZSAhPT0gdHJ1ZSAmJiByZXNldElucHV0VmFsdWUoKVxuICAgICAgICBpZiAoZGlhbG9nLnZhbHVlID09PSB0cnVlIHx8IG1lbnUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBmaWx0ZXIoJycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7IGltbWVkaWF0ZTogdHJ1ZSB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuZmlsbElucHV0LCByZXNldElucHV0VmFsdWUpXG5cbiAgICB3YXRjaChtZW51LCB1cGRhdGVNZW51KVxuXG4gICAgd2F0Y2godmlydHVhbFNjcm9sbExlbmd0aCwgcmVyZW5kZXJNZW51KVxuXG4gICAgZnVuY3Rpb24gZ2V0RW1pdHRpbmdPcHRpb25WYWx1ZSAob3B0KSB7XG4gICAgICByZXR1cm4gcHJvcHMuZW1pdFZhbHVlID09PSB0cnVlXG4gICAgICAgID8gZ2V0T3B0aW9uVmFsdWUudmFsdWUob3B0KVxuICAgICAgICA6IG9wdFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUF0SW5kZXggKGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggIT09IC0xICYmIGluZGV4IDwgaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHByb3BzLm11bHRpcGxlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgbW9kZWwgPSBwcm9wcy5tb2RlbFZhbHVlLnNsaWNlKClcbiAgICAgICAgICBlbWl0KCdyZW1vdmUnLCB7IGluZGV4LCB2YWx1ZTogbW9kZWwuc3BsaWNlKGluZGV4LCAxKVsgMCBdIH0pXG4gICAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBtb2RlbClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG51bGwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBdEluZGV4QW5kRm9jdXMgKGluZGV4KSB7XG4gICAgICByZW1vdmVBdEluZGV4KGluZGV4KVxuICAgICAgc3RhdGUuZm9jdXMoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZCAob3B0LCB1bmlxdWUpIHtcbiAgICAgIGNvbnN0IHZhbCA9IGdldEVtaXR0aW5nT3B0aW9uVmFsdWUob3B0KVxuXG4gICAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IHRydWUpIHtcbiAgICAgICAgcHJvcHMuZmlsbElucHV0ID09PSB0cnVlICYmIHVwZGF0ZUlucHV0VmFsdWUoXG4gICAgICAgICAgZ2V0T3B0aW9uTGFiZWwudmFsdWUob3B0KSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKVxuXG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGlubmVyVmFsdWUudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGVtaXQoJ2FkZCcsIHsgaW5kZXg6IDAsIHZhbHVlOiB2YWwgfSlcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBwcm9wcy5tdWx0aXBsZSA9PT0gdHJ1ZSA/IFsgdmFsIF0gOiB2YWwpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHVuaXF1ZSA9PT0gdHJ1ZVxuICAgICAgICAmJiBpc09wdGlvblNlbGVjdGVkKG9wdCkgPT09IHRydWVcbiAgICAgICkgcmV0dXJuXG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMubWF4VmFsdWVzICE9PSB2b2lkIDBcbiAgICAgICAgJiYgcHJvcHMubW9kZWxWYWx1ZS5sZW5ndGggPj0gcHJvcHMubWF4VmFsdWVzXG4gICAgICApIHJldHVyblxuXG4gICAgICBjb25zdCBtb2RlbCA9IHByb3BzLm1vZGVsVmFsdWUuc2xpY2UoKVxuXG4gICAgICBlbWl0KCdhZGQnLCB7IGluZGV4OiBtb2RlbC5sZW5ndGgsIHZhbHVlOiB2YWwgfSlcbiAgICAgIG1vZGVsLnB1c2godmFsKVxuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBtb2RlbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVPcHRpb24gKG9wdCwga2VlcE9wZW4pIHtcbiAgICAgIGlmIChcbiAgICAgICAgc3RhdGUuZWRpdGFibGUudmFsdWUgIT09IHRydWVcbiAgICAgICAgfHwgb3B0ID09PSB2b2lkIDBcbiAgICAgICAgfHwgaXNPcHRpb25EaXNhYmxlZC52YWx1ZShvcHQpID09PSB0cnVlXG4gICAgICApIHJldHVyblxuXG4gICAgICBjb25zdCBvcHRWYWx1ZSA9IGdldE9wdGlvblZhbHVlLnZhbHVlKG9wdClcblxuICAgICAgaWYgKHByb3BzLm11bHRpcGxlICE9PSB0cnVlKSB7XG4gICAgICAgIGlmIChrZWVwT3BlbiAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHVwZGF0ZUlucHV0VmFsdWUoXG4gICAgICAgICAgICBwcm9wcy5maWxsSW5wdXQgPT09IHRydWUgPyBnZXRPcHRpb25MYWJlbC52YWx1ZShvcHQpIDogJycsXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgIClcblxuICAgICAgICAgIGhpZGVQb3B1cCgpXG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRSZWYudmFsdWU/LmZvY3VzKClcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGggPT09IDBcbiAgICAgICAgICB8fCBpc0RlZXBFcXVhbChnZXRPcHRpb25WYWx1ZS52YWx1ZShpbm5lclZhbHVlLnZhbHVlWyAwIF0pLCBvcHRWYWx1ZSkgIT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBwcm9wcy5lbWl0VmFsdWUgPT09IHRydWUgPyBvcHRWYWx1ZSA6IG9wdClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaGFzRGlhbG9nICE9PSB0cnVlIHx8IGRpYWxvZ0ZpZWxkRm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBzdGF0ZS5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIHNlbGVjdElucHV0VGV4dCgpXG5cbiAgICAgIGlmIChpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCB2YWwgPSBwcm9wcy5lbWl0VmFsdWUgPT09IHRydWUgPyBvcHRWYWx1ZSA6IG9wdFxuICAgICAgICBlbWl0KCdhZGQnLCB7IGluZGV4OiAwLCB2YWx1ZTogdmFsIH0pXG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgcHJvcHMubXVsdGlwbGUgPT09IHRydWUgPyBbIHZhbCBdIDogdmFsKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgbW9kZWwgPSBwcm9wcy5tb2RlbFZhbHVlLnNsaWNlKCksXG4gICAgICAgIGluZGV4ID0gaW5uZXJPcHRpb25zVmFsdWUudmFsdWUuZmluZEluZGV4KHYgPT4gaXNEZWVwRXF1YWwodiwgb3B0VmFsdWUpKVxuXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGVtaXQoJ3JlbW92ZScsIHsgaW5kZXgsIHZhbHVlOiBtb2RlbC5zcGxpY2UoaW5kZXgsIDEpWyAwIF0gfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHMubWF4VmFsdWVzICE9PSB2b2lkIDBcbiAgICAgICAgICAmJiBtb2RlbC5sZW5ndGggPj0gcHJvcHMubWF4VmFsdWVzXG4gICAgICAgICkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgdmFsID0gcHJvcHMuZW1pdFZhbHVlID09PSB0cnVlID8gb3B0VmFsdWUgOiBvcHRcblxuICAgICAgICBlbWl0KCdhZGQnLCB7IGluZGV4OiBtb2RlbC5sZW5ndGgsIHZhbHVlOiB2YWwgfSlcbiAgICAgICAgbW9kZWwucHVzaCh2YWwpXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbW9kZWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0T3B0aW9uSW5kZXggKGluZGV4KSB7XG4gICAgICBpZiAoJHEucGxhdGZvcm0uaXMuZGVza3RvcCAhPT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IHZhbCA9IGluZGV4ICE9PSAtMSAmJiBpbmRleCA8IHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWVcbiAgICAgICAgPyBpbmRleFxuICAgICAgICA6IC0xXG5cbiAgICAgIGlmIChvcHRpb25JbmRleC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIG9wdGlvbkluZGV4LnZhbHVlID0gdmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZU9wdGlvblNlbGVjdGlvbiAob2Zmc2V0ID0gMSwgc2tpcElucHV0VmFsdWUpIHtcbiAgICAgIGlmIChtZW51LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IG9wdGlvbkluZGV4LnZhbHVlXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBpbmRleCA9IG5vcm1hbGl6ZVRvSW50ZXJ2YWwoXG4gICAgICAgICAgICBpbmRleCArIG9mZnNldCxcbiAgICAgICAgICAgIC0xLFxuICAgICAgICAgICAgdmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSAtIDFcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGluZGV4ICE9PSAtMSAmJiBpbmRleCAhPT0gb3B0aW9uSW5kZXgudmFsdWUgJiYgaXNPcHRpb25EaXNhYmxlZC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKSA9PT0gdHJ1ZSlcblxuICAgICAgICBpZiAob3B0aW9uSW5kZXgudmFsdWUgIT09IGluZGV4KSB7XG4gICAgICAgICAgc2V0T3B0aW9uSW5kZXgoaW5kZXgpXG4gICAgICAgICAgc2Nyb2xsVG8oaW5kZXgpXG5cbiAgICAgICAgICBpZiAoc2tpcElucHV0VmFsdWUgIT09IHRydWUgJiYgcHJvcHMudXNlSW5wdXQgPT09IHRydWUgJiYgcHJvcHMuZmlsbElucHV0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZXRJbnB1dFZhbHVlKFxuICAgICAgICAgICAgICBpbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgPyBnZXRPcHRpb25MYWJlbC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKVxuICAgICAgICAgICAgICAgIDogZGVmYXVsdElucHV0VmFsdWUsXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRPcHRpb24gKHZhbHVlLCB2YWx1ZUNhY2hlKSB7XG4gICAgICBjb25zdCBmbiA9IG9wdCA9PiBpc0RlZXBFcXVhbChnZXRPcHRpb25WYWx1ZS52YWx1ZShvcHQpLCB2YWx1ZSlcbiAgICAgIHJldHVybiBwcm9wcy5vcHRpb25zLmZpbmQoZm4pIHx8IHZhbHVlQ2FjaGUuZmluZChmbikgfHwgdmFsdWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc09wdGlvblNlbGVjdGVkIChvcHQpIHtcbiAgICAgIGNvbnN0IHZhbCA9IGdldE9wdGlvblZhbHVlLnZhbHVlKG9wdClcbiAgICAgIHJldHVybiBpbm5lck9wdGlvbnNWYWx1ZS52YWx1ZS5maW5kKHYgPT4gaXNEZWVwRXF1YWwodiwgdmFsKSkgIT09IHZvaWQgMFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdElucHV0VGV4dCAoZSkge1xuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZVxuICAgICAgICAmJiB0YXJnZXRSZWYudmFsdWUgIT09IG51bGxcbiAgICAgICAgJiYgKGUgPT09IHZvaWQgMCB8fCAodGFyZ2V0UmVmLnZhbHVlID09PSBlLnRhcmdldCAmJiBlLnRhcmdldC52YWx1ZSA9PT0gc2VsZWN0ZWRTdHJpbmcudmFsdWUpKVxuICAgICAgKSB7XG4gICAgICAgIHRhcmdldFJlZi52YWx1ZS5zZWxlY3QoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVGFyZ2V0S2V5dXAgKGUpIHtcbiAgICAgIC8vIGlmIEVTQyBhbmQgd2UgaGF2ZSBhbiBvcGVuZWQgbWVudVxuICAgICAgLy8gdGhlbiBzdG9wIHByb3BhZ2F0aW9uIChtaWdodCBiZSBjYXVnaHQgYnkgYSBRRGlhbG9nXG4gICAgICAvLyBhbmQgc28gaXQgd2lsbCBhbHNvIGNsb3NlIHRoZSBRRGlhbG9nLCB3aGljaCBpcyB3cm9uZylcbiAgICAgIGlmIChpc0tleUNvZGUoZSwgMjcpID09PSB0cnVlICYmIG1lbnUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgc3RvcChlKVxuICAgICAgICAvLyBvbiBFU0Mgd2UgbmVlZCB0byBjbG9zZSB0aGUgZGlhbG9nIGFsc29cbiAgICAgICAgaGlkZVBvcHVwKClcbiAgICAgICAgcmVzZXRJbnB1dFZhbHVlKClcbiAgICAgIH1cblxuICAgICAgZW1pdCgna2V5dXAnLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVGFyZ2V0QXV0b2NvbXBsZXRlIChlKSB7XG4gICAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldFxuXG4gICAgICBpZiAoZS5rZXlDb2RlICE9PSB2b2lkIDApIHtcbiAgICAgICAgb25UYXJnZXRLZXl1cChlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZS50YXJnZXQudmFsdWUgPSAnJ1xuXG4gICAgICBpZiAoZmlsdGVyVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGZpbHRlclRpbWVyKVxuICAgICAgICBmaWx0ZXJUaW1lciA9IG51bGxcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dFZhbHVlVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGlucHV0VmFsdWVUaW1lcilcbiAgICAgICAgaW5wdXRWYWx1ZVRpbWVyID0gbnVsbFxuICAgICAgfVxuXG4gICAgICByZXNldElucHV0VmFsdWUoKVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgbmVlZGxlID0gdmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgICBjb25zdCBmaW5kRm4gPSBleHRyYWN0Rm4gPT4ge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHByb3BzLm9wdGlvbnMuZmluZChvcHQgPT4gU3RyaW5nKGV4dHJhY3RGbi52YWx1ZShvcHQpKS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBuZWVkbGUpXG5cbiAgICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHJldHVybiBmYWxzZVxuXG4gICAgICAgICAgaWYgKGlubmVyVmFsdWUudmFsdWUuaW5kZXhPZihvcHRpb24pID09PSAtMSkge1xuICAgICAgICAgICAgdG9nZ2xlT3B0aW9uKG9wdGlvbilcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoaWRlUG9wdXAoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsbEZuID0gYWZ0ZXJGaWx0ZXIgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGZpbmRGbihnZXRPcHRpb25WYWx1ZSkgIT09IHRydWVcbiAgICAgICAgICAgICYmIGFmdGVyRmlsdGVyICE9PSB0cnVlXG4gICAgICAgICAgICAmJiBmaW5kRm4oZ2V0T3B0aW9uTGFiZWwpICE9PSB0cnVlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBmaWx0ZXIodmFsdWUsIHRydWUsICgpID0+IGZpbGxGbih0cnVlKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmaWxsRm4oKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0YXRlLmNsZWFyVmFsdWUoZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRhcmdldEtleXByZXNzIChlKSB7XG4gICAgICBlbWl0KCdrZXlwcmVzcycsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UYXJnZXRLZXlkb3duIChlKSB7XG4gICAgICBlbWl0KCdrZXlkb3duJywgZSlcblxuICAgICAgaWYgKHNob3VsZElnbm9yZUtleShlKSA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IG5ld1ZhbHVlTW9kZVZhbGlkID0gaW5wdXRWYWx1ZS52YWx1ZS5sZW5ndGggIT09IDBcbiAgICAgICAgJiYgKHByb3BzLm5ld1ZhbHVlTW9kZSAhPT0gdm9pZCAwIHx8IHByb3BzLm9uTmV3VmFsdWUgIT09IHZvaWQgMClcblxuICAgICAgY29uc3QgdGFiU2hvdWxkU2VsZWN0ID0gZS5zaGlmdEtleSAhPT0gdHJ1ZVxuICAgICAgICAmJiBwcm9wcy5kaXNhYmxlVGFiU2VsZWN0aW9uICE9PSB0cnVlXG4gICAgICAgICYmIHByb3BzLm11bHRpcGxlICE9PSB0cnVlXG4gICAgICAgICYmIChvcHRpb25JbmRleC52YWx1ZSAhPT0gLTEgfHwgbmV3VmFsdWVNb2RlVmFsaWQgPT09IHRydWUpXG5cbiAgICAgIC8vIGVzY2FwZVxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgcHJldmVudChlKSAvLyBwcmV2ZW50IGNsZWFyaW5nIHRoZSBpbnB1dFZhbHVlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyB0YWJcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDkgJiYgdGFiU2hvdWxkU2VsZWN0ID09PSBmYWxzZSkge1xuICAgICAgICBjbG9zZU1lbnUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldCA9PT0gdm9pZCAwXG4gICAgICAgIHx8IGUudGFyZ2V0LmlkICE9PSBzdGF0ZS50YXJnZXRVaWQudmFsdWVcbiAgICAgICAgfHwgc3RhdGUuZWRpdGFibGUudmFsdWUgIT09IHRydWVcbiAgICAgICkgcmV0dXJuXG5cbiAgICAgIC8vIGRvd25cbiAgICAgIGlmIChcbiAgICAgICAgZS5rZXlDb2RlID09PSA0MFxuICAgICAgICAmJiBzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgIT09IHRydWVcbiAgICAgICAgJiYgbWVudS52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgICBzaG93UG9wdXAoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gYmFja3NwYWNlXG4gICAgICBpZiAoXG4gICAgICAgIGUua2V5Q29kZSA9PT0gOFxuICAgICAgICAmJiAoXG4gICAgICAgICAgcHJvcHMudXNlQ2hpcHMgPT09IHRydWVcbiAgICAgICAgICB8fCBwcm9wcy5jbGVhcmFibGUgPT09IHRydWVcbiAgICAgICAgKVxuICAgICAgICAmJiBwcm9wcy5oaWRlU2VsZWN0ZWQgIT09IHRydWVcbiAgICAgICAgJiYgaW5wdXRWYWx1ZS52YWx1ZS5sZW5ndGggPT09IDBcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHMubXVsdGlwbGUgPT09IHRydWUgJiYgQXJyYXkuaXNBcnJheShwcm9wcy5tb2RlbFZhbHVlKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJlbW92ZUF0SW5kZXgocHJvcHMubW9kZWxWYWx1ZS5sZW5ndGggLSAxKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BzLm11bHRpcGxlICE9PSB0cnVlICYmIHByb3BzLm1vZGVsVmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG51bGwpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gaG9tZSwgZW5kIC0gMzYsIDM1XG4gICAgICBpZiAoXG4gICAgICAgIChlLmtleUNvZGUgPT09IDM1IHx8IGUua2V5Q29kZSA9PT0gMzYpXG4gICAgICAgICYmICh0eXBlb2YgaW5wdXRWYWx1ZS52YWx1ZSAhPT0gJ3N0cmluZycgfHwgaW5wdXRWYWx1ZS52YWx1ZS5sZW5ndGggPT09IDApXG4gICAgICApIHtcbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgICAgb3B0aW9uSW5kZXgudmFsdWUgPSAtMVxuICAgICAgICBtb3ZlT3B0aW9uU2VsZWN0aW9uKGUua2V5Q29kZSA9PT0gMzYgPyAxIDogLTEsIHByb3BzLm11bHRpcGxlKVxuICAgICAgfVxuXG4gICAgICAvLyBwZyB1cCwgcGcgZG93biAtIDMzLCAzNFxuICAgICAgaWYgKFxuICAgICAgICAoZS5rZXlDb2RlID09PSAzMyB8fCBlLmtleUNvZGUgPT09IDM0KVxuICAgICAgICAmJiB2aXJ0dWFsU2Nyb2xsU2xpY2VTaXplQ29tcHV0ZWQudmFsdWUgIT09IHZvaWQgMFxuICAgICAgKSB7XG4gICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICAgIG9wdGlvbkluZGV4LnZhbHVlID0gTWF0aC5tYXgoXG4gICAgICAgICAgLTEsXG4gICAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgICB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uSW5kZXgudmFsdWUgKyAoZS5rZXlDb2RlID09PSAzMyA/IC0xIDogMSkgKiB2aXJ0dWFsU2Nyb2xsU2xpY2VTaXplQ29tcHV0ZWQudmFsdWUudmlld1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBtb3ZlT3B0aW9uU2VsZWN0aW9uKGUua2V5Q29kZSA9PT0gMzMgPyAxIDogLTEsIHByb3BzLm11bHRpcGxlKVxuICAgICAgfVxuXG4gICAgICAvLyB1cCwgZG93blxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzggfHwgZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgICBtb3ZlT3B0aW9uU2VsZWN0aW9uKGUua2V5Q29kZSA9PT0gMzggPyAtMSA6IDEsIHByb3BzLm11bHRpcGxlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvcHRpb25zTGVuZ3RoID0gdmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZVxuXG4gICAgICAvLyBjbGVhciBzZWFyY2ggYnVmZmVyIGlmIGV4cGlyZWRcbiAgICAgIGlmIChzZWFyY2hCdWZmZXIgPT09IHZvaWQgMCB8fCBzZWFyY2hCdWZmZXJFeHAgPCBEYXRlLm5vdygpKSB7XG4gICAgICAgIHNlYXJjaEJ1ZmZlciA9ICcnXG4gICAgICB9XG5cbiAgICAgIC8vIGtleWJvYXJkIHNlYXJjaCB3aGVuIG5vdCBoYXZpbmcgdXNlLWlucHV0XG4gICAgICBpZiAoXG4gICAgICAgIG9wdGlvbnNMZW5ndGggPiAwXG4gICAgICAgICYmIHByb3BzLnVzZUlucHV0ICE9PSB0cnVlXG4gICAgICAgICYmIGUua2V5ICE9PSB2b2lkIDBcbiAgICAgICAgJiYgZS5rZXkubGVuZ3RoID09PSAxIC8vIHByaW50YWJsZSBjaGFyXG4gICAgICAgICYmIGUuYWx0S2V5ID09PSBmYWxzZSAvLyBub3Qga2JkIHNob3J0Y3V0XG4gICAgICAgICYmIGUuY3RybEtleSA9PT0gZmFsc2UgLy8gbm90IGtiZCBzaG9ydGN1dFxuICAgICAgICAmJiBlLm1ldGFLZXkgPT09IGZhbHNlIC8vIG5vdCBrYmQgc2hvcnRjdXQsIGVzcGVjaWFsbHkgb24gbWFjT1Mgd2l0aCBDb21tYW5kIGtleVxuICAgICAgICAmJiAoZS5rZXlDb2RlICE9PSAzMiB8fCBzZWFyY2hCdWZmZXIubGVuZ3RoICE9PSAwKSAvLyBzcGFjZSBpbiBtaWRkbGUgb2Ygc2VhcmNoXG4gICAgICApIHtcbiAgICAgICAgbWVudS52YWx1ZSAhPT0gdHJ1ZSAmJiBzaG93UG9wdXAoZSlcblxuICAgICAgICBjb25zdFxuICAgICAgICAgIGNoYXIgPSBlLmtleS50b0xvY2FsZUxvd2VyQ2FzZSgpLFxuICAgICAgICAgIGtleVJlcGVhdCA9IHNlYXJjaEJ1ZmZlci5sZW5ndGggPT09IDEgJiYgc2VhcmNoQnVmZmVyWyAwIF0gPT09IGNoYXJcblxuICAgICAgICBzZWFyY2hCdWZmZXJFeHAgPSBEYXRlLm5vdygpICsgMTUwMFxuICAgICAgICBpZiAoa2V5UmVwZWF0ID09PSBmYWxzZSkge1xuICAgICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICAgICAgc2VhcmNoQnVmZmVyICs9IGNoYXJcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaFJlID0gbmV3IFJlZ0V4cCgnXicgKyBzZWFyY2hCdWZmZXIuc3BsaXQoJycpLm1hcChsID0+IChyZUVzY2FwZUxpc3QuaW5kZXhPZihsKSAhPT0gLTEgPyAnXFxcXCcgKyBsIDogbCkpLmpvaW4oJy4qJyksICdpJylcblxuICAgICAgICBsZXQgaW5kZXggPSBvcHRpb25JbmRleC52YWx1ZVxuXG4gICAgICAgIGlmIChrZXlSZXBlYXQgPT09IHRydWUgfHwgaW5kZXggPCAwIHx8IHNlYXJjaFJlLnRlc3QoZ2V0T3B0aW9uTGFiZWwudmFsdWUocHJvcHMub3B0aW9uc1sgaW5kZXggXSkpICE9PSB0cnVlKSB7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgaW5kZXggPSBub3JtYWxpemVUb0ludGVydmFsKGluZGV4ICsgMSwgLTEsIG9wdGlvbnNMZW5ndGggLSAxKVxuICAgICAgICAgIH1cbiAgICAgICAgICB3aGlsZSAoaW5kZXggIT09IG9wdGlvbkluZGV4LnZhbHVlICYmIChcbiAgICAgICAgICAgIGlzT3B0aW9uRGlzYWJsZWQudmFsdWUocHJvcHMub3B0aW9uc1sgaW5kZXggXSkgPT09IHRydWVcbiAgICAgICAgICAgIHx8IHNlYXJjaFJlLnRlc3QoZ2V0T3B0aW9uTGFiZWwudmFsdWUocHJvcHMub3B0aW9uc1sgaW5kZXggXSkpICE9PSB0cnVlXG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25JbmRleC52YWx1ZSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICBzZXRPcHRpb25JbmRleChpbmRleClcbiAgICAgICAgICAgIHNjcm9sbFRvKGluZGV4KVxuXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZSAmJiBwcm9wcy5maWxsSW5wdXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShnZXRPcHRpb25MYWJlbC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIGVudGVyLCBzcGFjZSAod2hlbiBub3QgdXNpbmcgdXNlLWlucHV0IGFuZCBub3QgaW4gc2VhcmNoKSwgb3IgdGFiICh3aGVuIG5vdCB1c2luZyBtdWx0aXBsZSBhbmQgb3B0aW9uIHNlbGVjdGVkKVxuICAgICAgLy8gc2FtZSB0YXJnZXQgaXMgY2hlY2tlZCBhYm92ZVxuICAgICAgaWYgKFxuICAgICAgICBlLmtleUNvZGUgIT09IDEzXG4gICAgICAgICYmIChlLmtleUNvZGUgIT09IDMyIHx8IHByb3BzLnVzZUlucHV0ID09PSB0cnVlIHx8IHNlYXJjaEJ1ZmZlciAhPT0gJycpXG4gICAgICAgICYmIChlLmtleUNvZGUgIT09IDkgfHwgdGFiU2hvdWxkU2VsZWN0ID09PSBmYWxzZSlcbiAgICAgICkgcmV0dXJuXG5cbiAgICAgIGUua2V5Q29kZSAhPT0gOSAmJiBzdG9wQW5kUHJldmVudChlKVxuXG4gICAgICBpZiAob3B0aW9uSW5kZXgudmFsdWUgIT09IC0xICYmIG9wdGlvbkluZGV4LnZhbHVlIDwgb3B0aW9uc0xlbmd0aCkge1xuICAgICAgICB0b2dnbGVPcHRpb24ocHJvcHMub3B0aW9uc1sgb3B0aW9uSW5kZXgudmFsdWUgXSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdWYWx1ZU1vZGVWYWxpZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBkb25lID0gKHZhbCwgbW9kZSkgPT4ge1xuICAgICAgICAgIGlmIChtb2RlKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGVOZXdWYWx1ZU1vZGUobW9kZSkgIT09IHRydWUpIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGUgPSBwcm9wcy5uZXdWYWx1ZU1vZGVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1cGRhdGVJbnB1dFZhbHVlKCcnLCBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSwgdHJ1ZSlcblxuICAgICAgICAgIGlmICh2YWwgPT09IHZvaWQgMCB8fCB2YWwgPT09IG51bGwpIHJldHVyblxuXG4gICAgICAgICAgY29uc3QgZm4gPSBtb2RlID09PSAndG9nZ2xlJyA/IHRvZ2dsZU9wdGlvbiA6IGFkZFxuICAgICAgICAgIGZuKHZhbCwgbW9kZSA9PT0gJ2FkZC11bmlxdWUnKVxuXG4gICAgICAgICAgaWYgKHByb3BzLm11bHRpcGxlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRSZWYudmFsdWU/LmZvY3VzKClcbiAgICAgICAgICAgIGhpZGVQb3B1cCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLm9uTmV3VmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGVtaXQoJ25ld1ZhbHVlJywgaW5wdXRWYWx1ZS52YWx1ZSwgZG9uZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkb25lKGlucHV0VmFsdWUudmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IHRydWUpIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAobWVudS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjbG9zZU1lbnUoKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHNob3dQb3B1cCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmlydHVhbFNjcm9sbEVsICgpIHtcbiAgICAgIHJldHVybiBoYXNEaWFsb2cgPT09IHRydWVcbiAgICAgICAgPyBtZW51Q29udGVudFJlZi52YWx1ZVxuICAgICAgICA6IChcbiAgICAgICAgICAgIG1lbnVSZWYudmFsdWUgIT09IG51bGwgJiYgbWVudVJlZi52YWx1ZS5jb250ZW50RWwgIT09IG51bGxcbiAgICAgICAgICAgICAgPyBtZW51UmVmLnZhbHVlLmNvbnRlbnRFbFxuICAgICAgICAgICAgICA6IHZvaWQgMFxuICAgICAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWaXJ0dWFsU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIHJldHVybiBnZXRWaXJ0dWFsU2Nyb2xsRWwoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNlbGVjdGlvbiAoKSB7XG4gICAgICBpZiAocHJvcHMuaGlkZVNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBpZiAoc2xvdHNbICdzZWxlY3RlZC1pdGVtJyBdICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkU2NvcGUudmFsdWUubWFwKHNjb3BlID0+IHNsb3RzWyAnc2VsZWN0ZWQtaXRlbScgXShzY29wZSkpLnNsaWNlKClcbiAgICAgIH1cblxuICAgICAgaWYgKHNsb3RzLnNlbGVjdGVkICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChzbG90cy5zZWxlY3RlZCgpKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMudXNlQ2hpcHMgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkU2NvcGUudmFsdWUubWFwKChzY29wZSwgaSkgPT4gaChRQ2hpcCwge1xuICAgICAgICAgIGtleTogJ29wdGlvbi0nICsgaSxcbiAgICAgICAgICByZW1vdmFibGU6IHN0YXRlLmVkaXRhYmxlLnZhbHVlID09PSB0cnVlICYmIGlzT3B0aW9uRGlzYWJsZWQudmFsdWUoc2NvcGUub3B0KSAhPT0gdHJ1ZSxcbiAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICB0ZXh0Q29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgIHRhYmluZGV4OiB0YWJpbmRleC52YWx1ZSxcbiAgICAgICAgICBvblJlbW92ZSAoKSB7IHNjb3BlLnJlbW92ZUF0SW5kZXgoaSkgfVxuICAgICAgICB9LCAoKSA9PiBoKCdzcGFuJywge1xuICAgICAgICAgIGNsYXNzOiAnZWxsaXBzaXMnLFxuICAgICAgICAgIFsgc2NvcGUuaHRtbCA9PT0gdHJ1ZSA/ICdpbm5lckhUTUwnIDogJ3RleHRDb250ZW50JyBdOiBnZXRPcHRpb25MYWJlbC52YWx1ZShzY29wZS5vcHQpXG4gICAgICAgIH0pKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaCgnc3BhbicsIHtcbiAgICAgICAgICBjbGFzczogJ2VsbGlwc2lzJyxcbiAgICAgICAgICBbIHZhbHVlQXNIdG1sLnZhbHVlID09PSB0cnVlID8gJ2lubmVySFRNTCcgOiAndGV4dENvbnRlbnQnIF06IGFyaWFDdXJyZW50VmFsdWUudmFsdWVcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBbGxPcHRpb25zICgpIHtcbiAgICAgIGlmIChub09wdGlvbnMudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHNsb3RzWyAnbm8tb3B0aW9uJyBdICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3RzWyAnbm8tb3B0aW9uJyBdKHsgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZS52YWx1ZSB9KVxuICAgICAgICAgIDogdm9pZCAwXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZuID0gc2xvdHMub3B0aW9uICE9PSB2b2lkIDBcbiAgICAgICAgPyBzbG90cy5vcHRpb25cbiAgICAgICAgOiBzY29wZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGgoUUl0ZW0sIHtcbiAgICAgICAgICAgIGtleTogc2NvcGUuaW5kZXgsXG4gICAgICAgICAgICAuLi5zY29wZS5pdGVtUHJvcHNcbiAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaChcbiAgICAgICAgICAgICAgUUl0ZW1TZWN0aW9uLFxuICAgICAgICAgICAgICAoKSA9PiBoKFxuICAgICAgICAgICAgICAgIFFJdGVtTGFiZWwsXG4gICAgICAgICAgICAgICAgKCkgPT4gaCgnc3BhbicsIHtcbiAgICAgICAgICAgICAgICAgIFsgc2NvcGUuaHRtbCA9PT0gdHJ1ZSA/ICdpbm5lckhUTUwnIDogJ3RleHRDb250ZW50JyBdOiBzY29wZS5sYWJlbFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgIGxldCBvcHRpb25zID0gcGFkVmlydHVhbFNjcm9sbCgnZGl2Jywgb3B0aW9uU2NvcGUudmFsdWUubWFwKGZuKSlcblxuICAgICAgaWYgKHNsb3RzWyAnYmVmb3JlLW9wdGlvbnMnIF0gIT09IHZvaWQgMCkge1xuICAgICAgICBvcHRpb25zID0gc2xvdHNbICdiZWZvcmUtb3B0aW9ucycgXSgpLmNvbmNhdChvcHRpb25zKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaE1lcmdlU2xvdChzbG90c1sgJ2FmdGVyLW9wdGlvbnMnIF0sIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5wdXQgKGZyb21EaWFsb2csIGlzVGFyZ2V0KSB7XG4gICAgICBjb25zdCBhdHRycyA9IGlzVGFyZ2V0ID09PSB0cnVlID8geyAuLi5jb21ib2JveEF0dHJzLnZhbHVlLCAuLi5zdGF0ZS5zcGxpdEF0dHJzLmF0dHJpYnV0ZXMudmFsdWUgfSA6IHZvaWQgMFxuXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICByZWY6IGlzVGFyZ2V0ID09PSB0cnVlID8gdGFyZ2V0UmVmIDogdm9pZCAwLFxuICAgICAgICBrZXk6ICdpX3QnLFxuICAgICAgICBjbGFzczogY29tcHV0ZWRJbnB1dENsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogcHJvcHMuaW5wdXRTdHlsZSxcbiAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUudmFsdWUgIT09IHZvaWQgMCA/IGlucHV0VmFsdWUudmFsdWUgOiAnJyxcbiAgICAgICAgLy8gcmVxdWlyZWQgZm9yIEFuZHJvaWQgaW4gb3JkZXIgdG8gc2hvdyBFTlRFUiBrZXkgd2hlbiBpbiBmb3JtXG4gICAgICAgIHR5cGU6ICdzZWFyY2gnLFxuICAgICAgICAuLi5hdHRycyxcbiAgICAgICAgaWQ6IGlzVGFyZ2V0ID09PSB0cnVlID8gc3RhdGUudGFyZ2V0VWlkLnZhbHVlIDogdm9pZCAwLFxuICAgICAgICBtYXhsZW5ndGg6IHByb3BzLm1heGxlbmd0aCxcbiAgICAgICAgYXV0b2NvbXBsZXRlOiBwcm9wcy5hdXRvY29tcGxldGUsXG4gICAgICAgICdkYXRhLWF1dG9mb2N1cyc6IGZyb21EaWFsb2cgPT09IHRydWUgfHwgcHJvcHMuYXV0b2ZvY3VzID09PSB0cnVlIHx8IHZvaWQgMCxcbiAgICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGUgPT09IHRydWUsXG4gICAgICAgIHJlYWRvbmx5OiBwcm9wcy5yZWFkb25seSA9PT0gdHJ1ZSxcbiAgICAgICAgLi4uaW5wdXRDb250cm9sRXZlbnRzLnZhbHVlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcm9tRGlhbG9nICE9PSB0cnVlICYmIGhhc0RpYWxvZyA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmNsYXNzKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGRhdGEuY2xhc3MgPSBbIC4uLmRhdGEuY2xhc3MsICduby1wb2ludGVyLWV2ZW50cycgXVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhdGEuY2xhc3MgKz0gJyBuby1wb2ludGVyLWV2ZW50cydcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnaW5wdXQnLCBkYXRhKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSW5wdXQgKGUpIHtcbiAgICAgIGlmIChmaWx0ZXJUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoZmlsdGVyVGltZXIpXG4gICAgICAgIGZpbHRlclRpbWVyID0gbnVsbFxuICAgICAgfVxuICAgICAgaWYgKGlucHV0VmFsdWVUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoaW5wdXRWYWx1ZVRpbWVyKVxuICAgICAgICBpbnB1dFZhbHVlVGltZXIgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgZVxuICAgICAgICAmJiBlLnRhcmdldFxuICAgICAgICAmJiBlLnRhcmdldC5xQ29tcG9zaW5nID09PSB0cnVlXG4gICAgICApIHJldHVyblxuXG4gICAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlIHx8ICcnKVxuICAgICAgLy8gbWFyayBpdCBoZXJlIGFzIHVzZXIgaW5wdXQgc28gdGhhdCBpZiB1cGRhdGVJbnB1dFZhbHVlIGlzIGNhbGxlZFxuICAgICAgLy8gYmVmb3JlIGZpbHRlciBpcyBjYWxsZWQgdGhlIGluZGljYXRvciBpcyByZXNldFxuICAgICAgdXNlcklucHV0VmFsdWUgPSB0cnVlXG4gICAgICBkZWZhdWx0SW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUudmFsdWVcblxuICAgICAgaWYgKFxuICAgICAgICBzdGF0ZS5mb2N1c2VkLnZhbHVlICE9PSB0cnVlXG4gICAgICAgICYmIChoYXNEaWFsb2cgIT09IHRydWUgfHwgZGlhbG9nRmllbGRGb2N1c2VkLnZhbHVlID09PSB0cnVlKVxuICAgICAgKSB7XG4gICAgICAgIHN0YXRlLmZvY3VzKClcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLm9uRmlsdGVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgZmlsdGVyVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBmaWx0ZXJUaW1lciA9IG51bGxcbiAgICAgICAgICBmaWx0ZXIoaW5wdXRWYWx1ZS52YWx1ZSlcbiAgICAgICAgfSwgcHJvcHMuaW5wdXREZWJvdW5jZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRJbnB1dFZhbHVlICh2YWwsIGVtaXRJbW1lZGlhdGVseSkge1xuICAgICAgaWYgKGlucHV0VmFsdWUudmFsdWUgIT09IHZhbCkge1xuICAgICAgICBpbnB1dFZhbHVlLnZhbHVlID0gdmFsXG5cbiAgICAgICAgaWYgKGVtaXRJbW1lZGlhdGVseSA9PT0gdHJ1ZSB8fCBwcm9wcy5pbnB1dERlYm91bmNlID09PSAwIHx8IHByb3BzLmlucHV0RGVib3VuY2UgPT09ICcwJykge1xuICAgICAgICAgIGVtaXQoJ2lucHV0VmFsdWUnLCB2YWwpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaW5wdXRWYWx1ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpbnB1dFZhbHVlVGltZXIgPSBudWxsXG4gICAgICAgICAgICBlbWl0KCdpbnB1dFZhbHVlJywgdmFsKVxuICAgICAgICAgIH0sIHByb3BzLmlucHV0RGVib3VuY2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVJbnB1dFZhbHVlICh2YWwsIG5vRmlsdGVyaW5nLCBpbnRlcm5hbCkge1xuICAgICAgdXNlcklucHV0VmFsdWUgPSBpbnRlcm5hbCAhPT0gdHJ1ZVxuXG4gICAgICBpZiAocHJvcHMudXNlSW5wdXQgPT09IHRydWUpIHtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZSh2YWwsIHRydWUpXG5cbiAgICAgICAgaWYgKG5vRmlsdGVyaW5nID09PSB0cnVlIHx8IGludGVybmFsICE9PSB0cnVlKSB7XG4gICAgICAgICAgZGVmYXVsdElucHV0VmFsdWUgPSB2YWxcbiAgICAgICAgfVxuXG4gICAgICAgIG5vRmlsdGVyaW5nICE9PSB0cnVlICYmIGZpbHRlcih2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyICh2YWwsIGtlZXBDbG9zZWQsIGFmdGVyVXBkYXRlRm4pIHtcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMub25GaWx0ZXIgPT09IHZvaWQgMFxuICAgICAgICB8fCAoa2VlcENsb3NlZCAhPT0gdHJ1ZSAmJiBzdGF0ZS5mb2N1c2VkLnZhbHVlICE9PSB0cnVlKVxuICAgICAgKSByZXR1cm5cblxuICAgICAgaWYgKHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBlbWl0KCdmaWx0ZXJBYm9ydCcpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgICBpbm5lckxvYWRpbmdJbmRpY2F0b3IudmFsdWUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdmFsICE9PSAnJ1xuICAgICAgICAmJiBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZVxuICAgICAgICAmJiBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCAhPT0gMFxuICAgICAgICAmJiB1c2VySW5wdXRWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAmJiB2YWwgPT09IGdldE9wdGlvbkxhYmVsLnZhbHVlKGlubmVyVmFsdWUudmFsdWVbIDAgXSlcbiAgICAgICkge1xuICAgICAgICB2YWwgPSAnJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsb2NhbEZpbHRlcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1lbnUudmFsdWUgPT09IHRydWUgJiYgKG1lbnUudmFsdWUgPSBmYWxzZSlcbiAgICAgIH0sIDEwKVxuXG4gICAgICBmaWx0ZXJJZCAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQoZmlsdGVySWQpXG4gICAgICBmaWx0ZXJJZCA9IGxvY2FsRmlsdGVySWRcblxuICAgICAgZW1pdChcbiAgICAgICAgJ2ZpbHRlcicsXG4gICAgICAgIHZhbCxcbiAgICAgICAgKGZuLCBhZnRlckZuKSA9PiB7XG4gICAgICAgICAgaWYgKChrZWVwQ2xvc2VkID09PSB0cnVlIHx8IHN0YXRlLmZvY3VzZWQudmFsdWUgPT09IHRydWUpICYmIGZpbHRlcklkID09PSBsb2NhbEZpbHRlcklkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZmlsdGVySWQpXG5cbiAgICAgICAgICAgIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBmbigpXG5cbiAgICAgICAgICAgIC8vIGhpZGUgaW5kaWNhdG9yIHRvIGFsbG93IGFycm93IHRvIGFuaW1hdGVcbiAgICAgICAgICAgIGlubmVyTG9hZGluZ0luZGljYXRvci52YWx1ZSA9IGZhbHNlXG5cbiAgICAgICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlID0gZmFsc2VcblxuICAgICAgICAgICAgICBpZiAoc3RhdGUuZWRpdGFibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2VlcENsb3NlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgbWVudS52YWx1ZSA9PT0gdHJ1ZSAmJiBoaWRlUG9wdXAoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtZW51LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVNZW51KHRydWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbWVudS52YWx1ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0eXBlb2YgYWZ0ZXJGbiA9PT0gJ2Z1bmN0aW9uJyAmJiBuZXh0VGljaygoKSA9PiB7IGFmdGVyRm4ocHJveHkpIH0pXG4gICAgICAgICAgICAgIHR5cGVvZiBhZnRlclVwZGF0ZUZuID09PSAnZnVuY3Rpb24nICYmIG5leHRUaWNrKCgpID0+IHsgYWZ0ZXJVcGRhdGVGbihwcm94eSkgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXRlLmZvY3VzZWQudmFsdWUgPT09IHRydWUgJiYgZmlsdGVySWQgPT09IGxvY2FsRmlsdGVySWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChmaWx0ZXJJZClcbiAgICAgICAgICAgIHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgICAgICBpbm5lckxvYWRpbmdJbmRpY2F0b3IudmFsdWUgPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICBtZW51LnZhbHVlID09PSB0cnVlICYmIChtZW51LnZhbHVlID0gZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRNZW51ICgpIHtcbiAgICAgIHJldHVybiBoKFFNZW51LCB7XG4gICAgICAgIHJlZjogbWVudVJlZixcbiAgICAgICAgY2xhc3M6IG1lbnVDb250ZW50Q2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBwcm9wcy5wb3B1cENvbnRlbnRTdHlsZSxcbiAgICAgICAgbW9kZWxWYWx1ZTogbWVudS52YWx1ZSxcbiAgICAgICAgZml0OiBwcm9wcy5tZW51U2hyaW5rICE9PSB0cnVlLFxuICAgICAgICBjb3ZlcjogcHJvcHMub3B0aW9uc0NvdmVyID09PSB0cnVlICYmIG5vT3B0aW9ucy52YWx1ZSAhPT0gdHJ1ZSAmJiBwcm9wcy51c2VJbnB1dCAhPT0gdHJ1ZSxcbiAgICAgICAgYW5jaG9yOiBwcm9wcy5tZW51QW5jaG9yLFxuICAgICAgICBzZWxmOiBwcm9wcy5tZW51U2VsZixcbiAgICAgICAgb2Zmc2V0OiBwcm9wcy5tZW51T2Zmc2V0LFxuICAgICAgICBkYXJrOiBpc09wdGlvbnNEYXJrLnZhbHVlLFxuICAgICAgICBub1BhcmVudEV2ZW50OiB0cnVlLFxuICAgICAgICBub1JlZm9jdXM6IHRydWUsXG4gICAgICAgIG5vRm9jdXM6IHRydWUsXG4gICAgICAgIG5vUm91dGVEaXNtaXNzOiBwcm9wcy5wb3B1cE5vUm91dGVEaXNtaXNzLFxuICAgICAgICBzcXVhcmU6IHNxdWFyZWRNZW51LnZhbHVlLFxuICAgICAgICB0cmFuc2l0aW9uU2hvdzogcHJvcHMudHJhbnNpdGlvblNob3csXG4gICAgICAgIHRyYW5zaXRpb25IaWRlOiBwcm9wcy50cmFuc2l0aW9uSGlkZSxcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgIHNlcGFyYXRlQ2xvc2VQb3B1cDogdHJ1ZSxcbiAgICAgICAgLi4ubGlzdGJveEF0dHJzLnZhbHVlLFxuICAgICAgICBvblNjcm9sbFBhc3NpdmU6IG9uVmlydHVhbFNjcm9sbEV2dCxcbiAgICAgICAgb25CZWZvcmVTaG93OiBvbkNvbnRyb2xQb3B1cFNob3csXG4gICAgICAgIG9uQmVmb3JlSGlkZTogb25NZW51QmVmb3JlSGlkZSxcbiAgICAgICAgb25TaG93OiBvbk1lbnVTaG93XG4gICAgICB9LCBnZXRBbGxPcHRpb25zKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTWVudUJlZm9yZUhpZGUgKGUpIHtcbiAgICAgIG9uQ29udHJvbFBvcHVwSGlkZShlKVxuICAgICAgY2xvc2VNZW51KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1lbnVTaG93ICgpIHtcbiAgICAgIHNldFZpcnR1YWxTY3JvbGxTaXplKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRpYWxvZ0ZpZWxkRm9jdXMgKGUpIHtcbiAgICAgIHN0b3AoZSlcbiAgICAgIHRhcmdldFJlZi52YWx1ZT8uZm9jdXMoKVxuICAgICAgZGlhbG9nRmllbGRGb2N1c2VkLnZhbHVlID0gdHJ1ZVxuICAgICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5wYWdlWE9mZnNldCB8fCB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMCwgMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRpYWxvZ0ZpZWxkQmx1ciAoZSkge1xuICAgICAgc3RvcChlKVxuICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBkaWFsb2dGaWVsZEZvY3VzZWQudmFsdWUgPSBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREaWFsb2cgKCkge1xuICAgICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgICAgaChRRmllbGQsIHtcbiAgICAgICAgICBjbGFzczogYGNvbC1hdXRvICR7IHN0YXRlLmZpZWxkQ2xhc3MudmFsdWUgfWAsXG4gICAgICAgICAgLi4uaW5uZXJGaWVsZFByb3BzLnZhbHVlLFxuICAgICAgICAgIGZvcjogc3RhdGUudGFyZ2V0VWlkLnZhbHVlLFxuICAgICAgICAgIGRhcms6IGlzT3B0aW9uc0RhcmsudmFsdWUsXG4gICAgICAgICAgc3F1YXJlOiB0cnVlLFxuICAgICAgICAgIGxvYWRpbmc6IGlubmVyTG9hZGluZ0luZGljYXRvci52YWx1ZSxcbiAgICAgICAgICBpdGVtQWxpZ25lZDogZmFsc2UsXG4gICAgICAgICAgZmlsbGVkOiB0cnVlLFxuICAgICAgICAgIHN0YWNrTGFiZWw6IGlucHV0VmFsdWUudmFsdWUubGVuZ3RoICE9PSAwLFxuICAgICAgICAgIC4uLnN0YXRlLnNwbGl0QXR0cnMubGlzdGVuZXJzLnZhbHVlLFxuICAgICAgICAgIG9uRm9jdXM6IG9uRGlhbG9nRmllbGRGb2N1cyxcbiAgICAgICAgICBvbkJsdXI6IG9uRGlhbG9nRmllbGRCbHVyXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAuLi5zbG90cyxcbiAgICAgICAgICByYXdDb250cm9sOiAoKSA9PiBzdGF0ZS5nZXRDb250cm9sKHRydWUpLFxuICAgICAgICAgIGJlZm9yZTogdm9pZCAwLFxuICAgICAgICAgIGFmdGVyOiB2b2lkIDBcbiAgICAgICAgfSlcbiAgICAgIF1cblxuICAgICAgbWVudS52YWx1ZSA9PT0gdHJ1ZSAmJiBjb250ZW50LnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IG1lbnVDb250ZW50UmVmLFxuICAgICAgICAgIGNsYXNzOiBtZW51Q29udGVudENsYXNzLnZhbHVlICsgJyBzY3JvbGwnLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5wb3B1cENvbnRlbnRTdHlsZSxcbiAgICAgICAgICAuLi5saXN0Ym94QXR0cnMudmFsdWUsXG4gICAgICAgICAgb25DbGljazogcHJldmVudCxcbiAgICAgICAgICBvblNjcm9sbFBhc3NpdmU6IG9uVmlydHVhbFNjcm9sbEV2dFxuICAgICAgICB9LCBnZXRBbGxPcHRpb25zKCkpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKFFEaWFsb2csIHtcbiAgICAgICAgcmVmOiBkaWFsb2dSZWYsXG4gICAgICAgIG1vZGVsVmFsdWU6IGRpYWxvZy52YWx1ZSxcbiAgICAgICAgcG9zaXRpb246IHByb3BzLnVzZUlucHV0ID09PSB0cnVlID8gJ3RvcCcgOiB2b2lkIDAsXG4gICAgICAgIHRyYW5zaXRpb25TaG93OiB0cmFuc2l0aW9uU2hvd0NvbXB1dGVkLFxuICAgICAgICB0cmFuc2l0aW9uSGlkZTogcHJvcHMudHJhbnNpdGlvbkhpZGUsXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICBub1JvdXRlRGlzbWlzczogcHJvcHMucG9wdXBOb1JvdXRlRGlzbWlzcyxcbiAgICAgICAgb25CZWZvcmVTaG93OiBvbkNvbnRyb2xQb3B1cFNob3csXG4gICAgICAgIG9uQmVmb3JlSGlkZTogb25EaWFsb2dCZWZvcmVIaWRlLFxuICAgICAgICBvbkhpZGU6IG9uRGlhbG9nSGlkZSxcbiAgICAgICAgb25TaG93OiBvbkRpYWxvZ1Nob3dcbiAgICAgIH0sICgpID0+IGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLXNlbGVjdF9fZGlhbG9nJ1xuICAgICAgICAgICsgKGlzT3B0aW9uc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtc2VsZWN0X19kaWFsb2ctLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgICAgICsgKGRpYWxvZ0ZpZWxkRm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zZWxlY3RfX2RpYWxvZy0tZm9jdXNlZCcgOiAnJylcbiAgICAgIH0sIGNvbnRlbnQpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGlhbG9nQmVmb3JlSGlkZSAoZSkge1xuICAgICAgb25Db250cm9sUG9wdXBIaWRlKGUpXG5cbiAgICAgIGlmIChkaWFsb2dSZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgZGlhbG9nUmVmLnZhbHVlLl9fdXBkYXRlUmVmb2N1c1RhcmdldChcbiAgICAgICAgICBzdGF0ZS5yb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJy5xLWZpZWxkX19uYXRpdmUgPiBbdGFiaW5kZXhdOmxhc3QtY2hpbGQnKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmZvY3VzZWQudmFsdWUgPSBmYWxzZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGlhbG9nSGlkZSAoZSkge1xuICAgICAgaGlkZVBvcHVwKClcbiAgICAgIHN0YXRlLmZvY3VzZWQudmFsdWUgPT09IGZhbHNlICYmIGVtaXQoJ2JsdXInLCBlKVxuICAgICAgcmVzZXRJbnB1dFZhbHVlKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRpYWxvZ1Nob3cgKCkge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICBpZiAoXG4gICAgICAgIChlbCA9PT0gbnVsbCB8fCBlbC5pZCAhPT0gc3RhdGUudGFyZ2V0VWlkLnZhbHVlKVxuICAgICAgICAmJiB0YXJnZXRSZWYudmFsdWUgIT09IG51bGxcbiAgICAgICAgJiYgdGFyZ2V0UmVmLnZhbHVlICE9PSBlbFxuICAgICAgKSB7XG4gICAgICAgIHRhcmdldFJlZi52YWx1ZS5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIHNldFZpcnR1YWxTY3JvbGxTaXplKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZU1lbnUgKCkge1xuICAgICAgaWYgKGRpYWxvZy52YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgIG9wdGlvbkluZGV4LnZhbHVlID0gLTFcblxuICAgICAgaWYgKG1lbnUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgbWVudS52YWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS5mb2N1c2VkLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoZmlsdGVySWQgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoZmlsdGVySWQpXG4gICAgICAgICAgZmlsdGVySWQgPSBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgZW1pdCgnZmlsdGVyQWJvcnQnKVxuICAgICAgICAgIHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgICAgaW5uZXJMb2FkaW5nSW5kaWNhdG9yLnZhbHVlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQb3B1cCAoZSkge1xuICAgICAgaWYgKHN0YXRlLmVkaXRhYmxlLnZhbHVlICE9PSB0cnVlKSByZXR1cm5cblxuICAgICAgaWYgKGhhc0RpYWxvZyA9PT0gdHJ1ZSkge1xuICAgICAgICBzdGF0ZS5vbkNvbnRyb2xGb2N1c2luKGUpXG4gICAgICAgIGRpYWxvZy52YWx1ZSA9IHRydWVcbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHN0YXRlLmZvY3VzKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdGF0ZS5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5vbkZpbHRlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGZpbHRlcihpbnB1dFZhbHVlLnZhbHVlKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9PcHRpb25zLnZhbHVlICE9PSB0cnVlIHx8IHNsb3RzWyAnbm8tb3B0aW9uJyBdICE9PSB2b2lkIDApIHtcbiAgICAgICAgbWVudS52YWx1ZSA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlUG9wdXAgKCkge1xuICAgICAgZGlhbG9nLnZhbHVlID0gZmFsc2VcbiAgICAgIGNsb3NlTWVudSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRJbnB1dFZhbHVlICgpIHtcbiAgICAgIHByb3BzLnVzZUlucHV0ID09PSB0cnVlICYmIHVwZGF0ZUlucHV0VmFsdWUoXG4gICAgICAgIHByb3BzLm11bHRpcGxlICE9PSB0cnVlICYmIHByb3BzLmZpbGxJbnB1dCA9PT0gdHJ1ZSAmJiBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCAhPT0gMFxuICAgICAgICAgID8gZ2V0T3B0aW9uTGFiZWwudmFsdWUoaW5uZXJWYWx1ZS52YWx1ZVsgMCBdKSB8fCAnJ1xuICAgICAgICAgIDogJycsXG4gICAgICAgIHRydWUsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVNZW51IChzaG93KSB7XG4gICAgICBsZXQgb3B0aW9uSW5kZXggPSAtMVxuXG4gICAgICBpZiAoc2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBjb25zdCB2YWwgPSBnZXRPcHRpb25WYWx1ZS52YWx1ZShpbm5lclZhbHVlLnZhbHVlWyAwIF0pXG4gICAgICAgICAgb3B0aW9uSW5kZXggPSBwcm9wcy5vcHRpb25zLmZpbmRJbmRleCh2ID0+IGlzRGVlcEVxdWFsKGdldE9wdGlvblZhbHVlLnZhbHVlKHYpLCB2YWwpKVxuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwob3B0aW9uSW5kZXgpXG4gICAgICB9XG5cbiAgICAgIHNldE9wdGlvbkluZGV4KG9wdGlvbkluZGV4KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcmVuZGVyTWVudSAobmV3TGVuZ3RoLCBvbGRMZW5ndGgpIHtcbiAgICAgIGlmIChtZW51LnZhbHVlID09PSB0cnVlICYmIHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoLTEsIHRydWUpXG5cbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIGlmIChtZW51LnZhbHVlID09PSB0cnVlICYmIHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChuZXdMZW5ndGggPiBvbGRMZW5ndGgpIHtcbiAgICAgICAgICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHVwZGF0ZU1lbnUodHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTWVudVBvc2l0aW9uICgpIHtcbiAgICAgIGlmIChkaWFsb2cudmFsdWUgPT09IGZhbHNlICYmIG1lbnVSZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgbWVudVJlZi52YWx1ZS51cGRhdGVQb3NpdGlvbigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Db250cm9sUG9wdXBTaG93IChlKSB7XG4gICAgICBlICE9PSB2b2lkIDAgJiYgc3RvcChlKVxuICAgICAgZW1pdCgncG9wdXBTaG93JywgZSlcbiAgICAgIHN0YXRlLmhhc1BvcHVwT3BlbiA9IHRydWVcbiAgICAgIHN0YXRlLm9uQ29udHJvbEZvY3VzaW4oZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNvbnRyb2xQb3B1cEhpZGUgKGUpIHtcbiAgICAgIGUgIT09IHZvaWQgMCAmJiBzdG9wKGUpXG4gICAgICBlbWl0KCdwb3B1cEhpZGUnLCBlKVxuICAgICAgc3RhdGUuaGFzUG9wdXBPcGVuID0gZmFsc2VcbiAgICAgIHN0YXRlLm9uQ29udHJvbEZvY3Vzb3V0KGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJlU3RhdGUgKCkge1xuICAgICAgaGFzRGlhbG9nID0gJHEucGxhdGZvcm0uaXMubW9iaWxlICE9PSB0cnVlICYmIHByb3BzLmJlaGF2aW9yICE9PSAnZGlhbG9nJ1xuICAgICAgICA/IGZhbHNlXG4gICAgICAgIDogcHJvcHMuYmVoYXZpb3IgIT09ICdtZW51JyAmJiAoXG4gICAgICAgICAgcHJvcHMudXNlSW5wdXQgPT09IHRydWVcbiAgICAgICAgICAgID8gc2xvdHNbICduby1vcHRpb24nIF0gIT09IHZvaWQgMCB8fCBwcm9wcy5vbkZpbHRlciAhPT0gdm9pZCAwIHx8IG5vT3B0aW9ucy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICApXG5cbiAgICAgIHRyYW5zaXRpb25TaG93Q29tcHV0ZWQgPSAkcS5wbGF0Zm9ybS5pcy5pb3MgPT09IHRydWUgJiYgaGFzRGlhbG9nID09PSB0cnVlICYmIHByb3BzLnVzZUlucHV0ID09PSB0cnVlXG4gICAgICAgID8gJ2ZhZGUnXG4gICAgICAgIDogcHJvcHMudHJhbnNpdGlvblNob3dcbiAgICB9XG5cbiAgICBvbkJlZm9yZVVwZGF0ZSh1cGRhdGVQcmVTdGF0ZSlcbiAgICBvblVwZGF0ZWQodXBkYXRlTWVudVBvc2l0aW9uKVxuXG4gICAgdXBkYXRlUHJlU3RhdGUoKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGZpbHRlclRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZW91dChmaWx0ZXJUaW1lcilcbiAgICAgIGlucHV0VmFsdWVUaW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQoaW5wdXRWYWx1ZVRpbWVyKVxuICAgIH0pXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICBzaG93UG9wdXAsIGhpZGVQb3B1cCxcbiAgICAgIHJlbW92ZUF0SW5kZXgsIGFkZCwgdG9nZ2xlT3B0aW9uLFxuICAgICAgZ2V0T3B0aW9uSW5kZXg6ICgpID0+IG9wdGlvbkluZGV4LnZhbHVlLFxuICAgICAgc2V0T3B0aW9uSW5kZXgsIG1vdmVPcHRpb25TZWxlY3Rpb24sXG4gICAgICBmaWx0ZXIsIHVwZGF0ZU1lbnVQb3NpdGlvbiwgdXBkYXRlSW5wdXRWYWx1ZSxcbiAgICAgIGlzT3B0aW9uU2VsZWN0ZWQsXG4gICAgICBnZXRFbWl0dGluZ09wdGlvblZhbHVlLFxuICAgICAgaXNPcHRpb25EaXNhYmxlZDogKC4uLmFyZ3MpID0+IGlzT3B0aW9uRGlzYWJsZWQudmFsdWUuYXBwbHkobnVsbCwgYXJncykgPT09IHRydWUsXG4gICAgICBnZXRPcHRpb25WYWx1ZTogKC4uLmFyZ3MpID0+IGdldE9wdGlvblZhbHVlLnZhbHVlLmFwcGx5KG51bGwsIGFyZ3MpLFxuICAgICAgZ2V0T3B0aW9uTGFiZWw6ICguLi5hcmdzKSA9PiBnZXRPcHRpb25MYWJlbC52YWx1ZS5hcHBseShudWxsLCBhcmdzKVxuICAgIH0pXG5cbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgICBpbm5lclZhbHVlLFxuXG4gICAgICBmaWVsZENsYXNzOiBjb21wdXRlZCgoKSA9PlxuICAgICAgICBgcS1zZWxlY3QgcS1maWVsZC0tYXV0by1oZWlnaHQgcS1zZWxlY3QtLXdpdGgkeyBwcm9wcy51c2VJbnB1dCAhPT0gdHJ1ZSA/ICdvdXQnIDogJycgfS1pbnB1dGBcbiAgICAgICAgKyBgIHEtc2VsZWN0LS13aXRoJHsgcHJvcHMudXNlQ2hpcHMgIT09IHRydWUgPyAnb3V0JyA6ICcnIH0tY2hpcHNgXG4gICAgICAgICsgYCBxLXNlbGVjdC0tJHsgcHJvcHMubXVsdGlwbGUgPT09IHRydWUgPyAnbXVsdGlwbGUnIDogJ3NpbmdsZScgfWBcbiAgICAgICksXG5cbiAgICAgIGlucHV0UmVmLFxuICAgICAgdGFyZ2V0UmVmLFxuICAgICAgaGFzVmFsdWUsXG4gICAgICBzaG93UG9wdXAsXG5cbiAgICAgIGZsb2F0aW5nTGFiZWw6IGNvbXB1dGVkKCgpID0+XG4gICAgICAgIChwcm9wcy5oaWRlU2VsZWN0ZWQgIT09IHRydWUgJiYgaGFzVmFsdWUudmFsdWUgPT09IHRydWUpXG4gICAgICAgIHx8IHR5cGVvZiBpbnB1dFZhbHVlLnZhbHVlID09PSAnbnVtYmVyJ1xuICAgICAgICB8fCBpbnB1dFZhbHVlLnZhbHVlLmxlbmd0aCAhPT0gMFxuICAgICAgICB8fCBmaWVsZFZhbHVlSXNGaWxsZWQocHJvcHMuZGlzcGxheVZhbHVlKVxuICAgICAgKSxcblxuICAgICAgZ2V0Q29udHJvbENoaWxkOiAoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzdGF0ZS5lZGl0YWJsZS52YWx1ZSAhPT0gZmFsc2UgJiYgKFxuICAgICAgICAgICAgZGlhbG9nLnZhbHVlID09PSB0cnVlIC8vIGRpYWxvZyBhbHdheXMgaGFzIG1lbnUgZGlzcGxheWVkLCBzbyBuZWVkIHRvIHJlbmRlciBpdFxuICAgICAgICAgICAgfHwgbm9PcHRpb25zLnZhbHVlICE9PSB0cnVlXG4gICAgICAgICAgICB8fCBzbG90c1sgJ25vLW9wdGlvbicgXSAhPT0gdm9pZCAwXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gaGFzRGlhbG9nID09PSB0cnVlID8gZ2V0RGlhbG9nKCkgOiBnZXRNZW51KClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZS5oYXNQb3B1cE9wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBleHBsaWNpdGx5IHNldCBpdCBvdGhlcndpc2UgVEFCIHdpbGwgbm90IGJsdXIgY29tcG9uZW50XG4gICAgICAgICAgc3RhdGUuaGFzUG9wdXBPcGVuID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgY29udHJvbEV2ZW50czoge1xuICAgICAgICBvbkZvY3VzaW4gKGUpIHsgc3RhdGUub25Db250cm9sRm9jdXNpbihlKSB9LFxuICAgICAgICBvbkZvY3Vzb3V0IChlKSB7XG4gICAgICAgICAgc3RhdGUub25Db250cm9sRm9jdXNvdXQoZSwgKCkgPT4ge1xuICAgICAgICAgICAgcmVzZXRJbnB1dFZhbHVlKClcbiAgICAgICAgICAgIGNsb3NlTWVudSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGljayAoZSkge1xuICAgICAgICAgIC8vIGxhYmVsIGZyb20gUUZpZWxkIHdpbGwgcHJvcGFnYXRlIGNsaWNrIG9uIHRoZSBpbnB1dFxuICAgICAgICAgIHByZXZlbnQoZSlcblxuICAgICAgICAgIGlmIChoYXNEaWFsb2cgIT09IHRydWUgJiYgbWVudS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xvc2VNZW51KClcbiAgICAgICAgICAgIHRhcmdldFJlZi52YWx1ZT8uZm9jdXMoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2hvd1BvcHVwKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGdldENvbnRyb2w6IGZyb21EaWFsb2cgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZCA9IGdldFNlbGVjdGlvbigpXG4gICAgICAgIGNvbnN0IGlzVGFyZ2V0ID0gZnJvbURpYWxvZyA9PT0gdHJ1ZSB8fCBkaWFsb2cudmFsdWUgIT09IHRydWUgfHwgaGFzRGlhbG9nICE9PSB0cnVlXG5cbiAgICAgICAgaWYgKHByb3BzLnVzZUlucHV0ID09PSB0cnVlKSB7XG4gICAgICAgICAgY2hpbGQucHVzaChnZXRJbnB1dChmcm9tRGlhbG9nLCBpc1RhcmdldCkpXG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlcmUgY2FuIGJlIG9ubHkgb25lICh3aGVuIGRpYWxvZyBpcyBvcGVuZWQgdGhlIGNvbnRyb2wgaW4gZGlhbG9nIHNob3VsZCBiZSB0YXJnZXQpXG4gICAgICAgIGVsc2UgaWYgKHN0YXRlLmVkaXRhYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgYXR0cnMgPSBpc1RhcmdldCA9PT0gdHJ1ZSA/IGNvbWJvYm94QXR0cnMudmFsdWUgOiB2b2lkIDBcblxuICAgICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgICBoKCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgcmVmOiBpc1RhcmdldCA9PT0gdHJ1ZSA/IHRhcmdldFJlZiA6IHZvaWQgMCxcbiAgICAgICAgICAgICAga2V5OiAnZF90JyxcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLXNlbGVjdF9fZm9jdXMtdGFyZ2V0JyxcbiAgICAgICAgICAgICAgaWQ6IGlzVGFyZ2V0ID09PSB0cnVlID8gc3RhdGUudGFyZ2V0VWlkLnZhbHVlIDogdm9pZCAwLFxuICAgICAgICAgICAgICB2YWx1ZTogYXJpYUN1cnJlbnRWYWx1ZS52YWx1ZSxcbiAgICAgICAgICAgICAgcmVhZG9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICdkYXRhLWF1dG9mb2N1cyc6IGZyb21EaWFsb2cgPT09IHRydWUgfHwgcHJvcHMuYXV0b2ZvY3VzID09PSB0cnVlIHx8IHZvaWQgMCxcbiAgICAgICAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgICAgICAgIG9uS2V5ZG93bjogb25UYXJnZXRLZXlkb3duLFxuICAgICAgICAgICAgICBvbktleXVwOiBvblRhcmdldEtleXVwLFxuICAgICAgICAgICAgICBvbktleXByZXNzOiBvblRhcmdldEtleXByZXNzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChpc1RhcmdldCA9PT0gdHJ1ZSAmJiB0eXBlb2YgcHJvcHMuYXV0b2NvbXBsZXRlID09PSAnc3RyaW5nJyAmJiBwcm9wcy5hdXRvY29tcGxldGUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgICBoKCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Etc2VsZWN0X19hdXRvY29tcGxldGUtaW5wdXQnLFxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogcHJvcHMuYXV0b2NvbXBsZXRlLFxuICAgICAgICAgICAgICAgIHRhYmluZGV4OiAtMSxcbiAgICAgICAgICAgICAgICBvbktleXVwOiBvblRhcmdldEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lUHJvcC52YWx1ZSAhPT0gdm9pZCAwICYmIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgaW5uZXJPcHRpb25zVmFsdWUudmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgY29uc3Qgb3B0cyA9IGlubmVyT3B0aW9uc1ZhbHVlLnZhbHVlLm1hcCh2YWx1ZSA9PiBoKCdvcHRpb24nLCB7IHZhbHVlLCBzZWxlY3RlZDogdHJ1ZSB9KSlcblxuICAgICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgICBoKCdzZWxlY3QnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZVByb3AudmFsdWUsXG4gICAgICAgICAgICAgIG11bHRpcGxlOiBwcm9wcy5tdWx0aXBsZVxuICAgICAgICAgICAgfSwgb3B0cylcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhdHRycyA9IHByb3BzLnVzZUlucHV0ID09PSB0cnVlIHx8IGlzVGFyZ2V0ICE9PSB0cnVlID8gdm9pZCAwIDogc3RhdGUuc3BsaXRBdHRycy5hdHRyaWJ1dGVzLnZhbHVlXG5cbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtZmllbGRfX25hdGl2ZSByb3cgaXRlbXMtY2VudGVyJyxcbiAgICAgICAgICAuLi5hdHRycyxcbiAgICAgICAgICAuLi5zdGF0ZS5zcGxpdEF0dHJzLmxpc3RlbmVycy52YWx1ZVxuICAgICAgICB9LCBjaGlsZClcbiAgICAgIH0sXG5cbiAgICAgIGdldElubmVyQXBwZW5kOiAoKSA9PiAoXG4gICAgICAgIHByb3BzLmxvYWRpbmcgIT09IHRydWUgJiYgaW5uZXJMb2FkaW5nSW5kaWNhdG9yLnZhbHVlICE9PSB0cnVlICYmIHByb3BzLmhpZGVEcm9wZG93bkljb24gIT09IHRydWVcbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAncS1zZWxlY3RfX2Ryb3Bkb3duLWljb24nICsgKG1lbnUudmFsdWUgPT09IHRydWUgPyAnIHJvdGF0ZS0xODAnIDogJycpLFxuICAgICAgICAgICAgICAgIG5hbWU6IGRyb3Bkb3duQXJyb3dJY29uLnZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiBudWxsXG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiB1c2VGaWVsZChzdGF0ZSlcbiAgfVxufSlcbiJdLCJuYW1lcyI6WyJlbCIsImgiLCJvcHRpb25JbmRleCIsImF0dHJzIl0sIm1hcHBpbmdzIjoiOzs7OztBQU1BLE1BQU0sZ0JBQWdCO0FBRXRCLE1BQU0sZ0JBQWdCO0FBQUEsRUFDcEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNG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
