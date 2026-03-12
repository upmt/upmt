import { h as createComponent, p as computed, v as h, P as hSlot, am as useModelToggleEmits, H as useDarkProps, an as useModelToggleProps, j as getCurrentInstance, I as useDark, bd as useTimeout, k as inject, l as emptyRenderFn, o as layoutKey, r as ref, ap as useModelToggle, be as useHistory, q as watch, bf as usePreventScroll, aW as nextTick, B as onMounted, s as onBeforeUnmount, x as withDirectives, b1 as hDir, L as onDeactivated, M as onActivated, bg as vmIsDestroyed, bh as stopAndPrevent, bi as addFocusFn, Q as provide, bj as formKey } from "./index-DT2JP2rj.js";
import { T as TouchPan } from "./NoteIcon-CFcGh7Em.js";
import { b as between } from "./format-Dbce-Jpy.js";
const QToolbarTitle = createComponent({
  name: "QToolbarTitle",
  props: {
    shrink: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-toolbar__title ellipsis" + (props.shrink === true ? " col-shrink" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
const duration = 150;
const QDrawer = createComponent({
  name: "QDrawer",
  inheritAttrs: false,
  props: {
    ...useModelToggleProps,
    ...useDarkProps,
    side: {
      type: String,
      default: "left",
      validator: (v) => ["left", "right"].includes(v)
    },
    width: {
      type: Number,
      default: 300
    },
    mini: Boolean,
    miniToOverlay: Boolean,
    miniWidth: {
      type: Number,
      default: 57
    },
    noMiniAnimation: Boolean,
    breakpoint: {
      type: Number,
      default: 1023
    },
    showIfAbove: Boolean,
    behavior: {
      type: String,
      validator: (v) => ["default", "desktop", "mobile"].includes(v),
      default: "default"
    },
    bordered: Boolean,
    elevated: Boolean,
    overlay: Boolean,
    persistent: Boolean,
    noSwipeOpen: Boolean,
    noSwipeClose: Boolean,
    noSwipeBackdrop: Boolean
  },
  emits: [
    ...useModelToggleEmits,
    "onLayout",
    "miniState"
  ],
  setup(props, { slots, emit, attrs }) {
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const isDark = useDark(props, $q);
    const { preventBodyScroll } = usePreventScroll();
    const { registerTimeout, removeTimeout } = useTimeout();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QDrawer needs to be child of QLayout");
      return emptyRenderFn;
    }
    let lastDesktopState, timerMini = null, layoutTotalWidthWatcher;
    const belowBreakpoint = ref(
      props.behavior === "mobile" || props.behavior !== "desktop" && $layout.totalWidth.value <= props.breakpoint
    );
    const isMini = computed(
      () => props.mini === true && belowBreakpoint.value !== true
    );
    const size = computed(() => isMini.value === true ? props.miniWidth : props.width);
    const showing = ref(
      props.showIfAbove === true && belowBreakpoint.value === false ? true : props.modelValue === true
    );
    const hideOnRouteChange = computed(
      () => props.persistent !== true && (belowBreakpoint.value === true || onScreenOverlay.value === true)
    );
    function handleShow(evt, noEvent) {
      addToHistory();
      evt !== false && $layout.animate();
      applyPosition(0);
      if (belowBreakpoint.value === true) {
        const otherInstance = $layout.instances[otherSide.value];
        if (otherInstance?.belowBreakpoint === true) {
          otherInstance.hide(false);
        }
        applyBackdrop(1);
        $layout.isContainer.value !== true && preventBodyScroll(true);
      } else {
        applyBackdrop(0);
        evt !== false && setScrollable(false);
      }
      registerTimeout(() => {
        evt !== false && setScrollable(true);
        noEvent !== true && emit("show", evt);
      }, duration);
    }
    function handleHide(evt, noEvent) {
      removeFromHistory();
      evt !== false && $layout.animate();
      applyBackdrop(0);
      applyPosition(stateDirection.value * size.value);
      cleanup();
      if (noEvent !== true) {
        registerTimeout(() => {
          emit("hide", evt);
        }, duration);
      } else {
        removeTimeout();
      }
    }
    const { show, hide } = useModelToggle({
      showing,
      hideOnRouteChange,
      handleShow,
      handleHide
    });
    const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);
    const instance = {
      belowBreakpoint,
      hide
    };
    const rightSide = computed(() => props.side === "right");
    const stateDirection = computed(
      () => ($q.lang.rtl === true ? -1 : 1) * (rightSide.value === true ? 1 : -1)
    );
    const flagBackdropBg = ref(0);
    const flagPanning = ref(false);
    const flagMiniAnimate = ref(false);
    const flagContentPosition = ref(
      // starting with "hidden" for SSR
      size.value * stateDirection.value
    );
    const otherSide = computed(() => rightSide.value === true ? "left" : "right");
    const offset = computed(() => showing.value === true && belowBreakpoint.value === false && props.overlay === false ? props.miniToOverlay === true ? props.miniWidth : size.value : 0);
    const fixed = computed(
      () => props.overlay === true || props.miniToOverlay === true || $layout.view.value.indexOf(rightSide.value ? "R" : "L") !== -1 || $q.platform.is.ios === true && $layout.isContainer.value === true
    );
    const onLayout = computed(
      () => props.overlay === false && showing.value === true && belowBreakpoint.value === false
    );
    const onScreenOverlay = computed(
      () => props.overlay === true && showing.value === true && belowBreakpoint.value === false
    );
    const backdropClass = computed(
      () => "fullscreen q-drawer__backdrop" + (showing.value === false && flagPanning.value === false ? " hidden" : "")
    );
    const backdropStyle = computed(() => ({
      backgroundColor: `rgba(0,0,0,${flagBackdropBg.value * 0.4})`
    }));
    const headerSlot = computed(() => rightSide.value === true ? $layout.rows.value.top[2] === "r" : $layout.rows.value.top[0] === "l");
    const footerSlot = computed(() => rightSide.value === true ? $layout.rows.value.bottom[2] === "r" : $layout.rows.value.bottom[0] === "l");
    const aboveStyle = computed(() => {
      const css = {};
      if ($layout.header.space === true && headerSlot.value === false) {
        if (fixed.value === true) {
          css.top = `${$layout.header.offset}px`;
        } else if ($layout.header.space === true) {
          css.top = `${$layout.header.size}px`;
        }
      }
      if ($layout.footer.space === true && footerSlot.value === false) {
        if (fixed.value === true) {
          css.bottom = `${$layout.footer.offset}px`;
        } else if ($layout.footer.space === true) {
          css.bottom = `${$layout.footer.size}px`;
        }
      }
      return css;
    });
    const style = computed(() => {
      const style2 = {
        width: `${size.value}px`,
        transform: `translateX(${flagContentPosition.value}px)`
      };
      return belowBreakpoint.value === true ? style2 : Object.assign(style2, aboveStyle.value);
    });
    const contentClass = computed(
      () => "q-drawer__content fit " + ($layout.isContainer.value !== true ? "scroll" : "overflow-auto")
    );
    const classes = computed(
      () => `q-drawer q-drawer--${props.side}` + (flagMiniAnimate.value === true ? " q-drawer--mini-animate" : "") + (props.bordered === true ? " q-drawer--bordered" : "") + (isDark.value === true ? " q-drawer--dark q-dark" : "") + (flagPanning.value === true ? " no-transition" : showing.value === true ? "" : " q-layout--prevent-focus") + (belowBreakpoint.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${isMini.value === true ? "mini" : "standard"}` + (fixed.value === true || onLayout.value !== true ? " fixed" : "") + (props.overlay === true || props.miniToOverlay === true ? " q-drawer--on-top" : "") + (headerSlot.value === true ? " q-drawer--top-padding" : ""))
    );
    const openDirective = computed(() => {
      const dir = $q.lang.rtl === true ? props.side : otherSide.value;
      return [[
        TouchPan,
        onOpenPan,
        void 0,
        {
          [dir]: true,
          mouse: true
        }
      ]];
    });
    const contentCloseDirective = computed(() => {
      const dir = $q.lang.rtl === true ? otherSide.value : props.side;
      return [[
        TouchPan,
        onClosePan,
        void 0,
        {
          [dir]: true,
          mouse: true
        }
      ]];
    });
    const backdropCloseDirective = computed(() => {
      const dir = $q.lang.rtl === true ? otherSide.value : props.side;
      return [[
        TouchPan,
        onClosePan,
        void 0,
        {
          [dir]: true,
          mouse: true,
          mouseAllDir: true
        }
      ]];
    });
    function updateBelowBreakpoint() {
      updateLocal(belowBreakpoint, props.behavior === "mobile" || props.behavior !== "desktop" && $layout.totalWidth.value <= props.breakpoint);
    }
    watch(belowBreakpoint, (val) => {
      if (val === true) {
        lastDesktopState = showing.value;
        showing.value === true && hide(false);
      } else if (props.overlay === false && props.behavior !== "mobile" && lastDesktopState !== false) {
        if (showing.value === true) {
          applyPosition(0);
          applyBackdrop(0);
          cleanup();
        } else {
          show(false);
        }
      }
    });
    watch(() => props.side, (newSide, oldSide) => {
      if ($layout.instances[oldSide] === instance) {
        $layout.instances[oldSide] = void 0;
        $layout[oldSide].space = false;
        $layout[oldSide].offset = 0;
      }
      $layout.instances[newSide] = instance;
      $layout[newSide].size = size.value;
      $layout[newSide].space = onLayout.value;
      $layout[newSide].offset = offset.value;
    });
    watch($layout.totalWidth, () => {
      if ($layout.isContainer.value === true || document.qScrollPrevented !== true) {
        updateBelowBreakpoint();
      }
    });
    watch(
      () => props.behavior + props.breakpoint,
      updateBelowBreakpoint
    );
    watch($layout.isContainer, (val) => {
      showing.value === true && preventBodyScroll(val !== true);
      val === true && updateBelowBreakpoint();
    });
    watch($layout.scrollbarWidth, () => {
      applyPosition(showing.value === true ? 0 : void 0);
    });
    watch(offset, (val) => {
      updateLayout("offset", val);
    });
    watch(onLayout, (val) => {
      emit("onLayout", val);
      updateLayout("space", val);
    });
    watch(rightSide, () => {
      applyPosition();
    });
    watch(size, (val) => {
      applyPosition();
      updateSizeOnLayout(props.miniToOverlay, val);
    });
    watch(() => props.miniToOverlay, (val) => {
      updateSizeOnLayout(val, size.value);
    });
    watch(() => $q.lang.rtl, () => {
      applyPosition();
    });
    watch(() => props.mini, () => {
      if (props.noMiniAnimation) return;
      if (props.modelValue === true) {
        animateMini();
        $layout.animate();
      }
    });
    watch(isMini, (val) => {
      emit("miniState", val);
    });
    function applyPosition(position) {
      if (position === void 0) {
        nextTick(() => {
          position = showing.value === true ? 0 : size.value;
          applyPosition(stateDirection.value * position);
        });
      } else {
        if ($layout.isContainer.value === true && rightSide.value === true && (belowBreakpoint.value === true || Math.abs(position) === size.value)) {
          position += stateDirection.value * $layout.scrollbarWidth.value;
        }
        flagContentPosition.value = position;
      }
    }
    function applyBackdrop(x) {
      flagBackdropBg.value = x;
    }
    function setScrollable(v) {
      const action = v === true ? "remove" : $layout.isContainer.value !== true ? "add" : "";
      action !== "" && document.body.classList[action]("q-body--drawer-toggle");
    }
    function animateMini() {
      timerMini !== null && clearTimeout(timerMini);
      if (vm.proxy && vm.proxy.$el) {
        vm.proxy.$el.classList.add("q-drawer--mini-animate");
      }
      flagMiniAnimate.value = true;
      timerMini = setTimeout(() => {
        timerMini = null;
        flagMiniAnimate.value = false;
        vm?.proxy?.$el?.classList.remove("q-drawer--mini-animate");
      }, 150);
    }
    function onOpenPan(evt) {
      if (showing.value !== false) {
        return;
      }
      const width = size.value, position = between(evt.distance.x, 0, width);
      if (evt.isFinal === true) {
        const opened = position >= Math.min(75, width);
        if (opened === true) {
          show();
        } else {
          $layout.animate();
          applyBackdrop(0);
          applyPosition(stateDirection.value * width);
        }
        flagPanning.value = false;
        return;
      }
      applyPosition(
        ($q.lang.rtl === true ? rightSide.value !== true : rightSide.value) ? Math.max(width - position, 0) : Math.min(0, position - width)
      );
      applyBackdrop(
        between(position / width, 0, 1)
      );
      if (evt.isFirst === true) {
        flagPanning.value = true;
      }
    }
    function onClosePan(evt) {
      if (showing.value !== true) {
        return;
      }
      const width = size.value, dir = evt.direction === props.side, position = ($q.lang.rtl === true ? dir !== true : dir) ? between(evt.distance.x, 0, width) : 0;
      if (evt.isFinal === true) {
        const opened = Math.abs(position) < Math.min(75, width);
        if (opened === true) {
          $layout.animate();
          applyBackdrop(1);
          applyPosition(0);
        } else {
          hide();
        }
        flagPanning.value = false;
        return;
      }
      applyPosition(stateDirection.value * position);
      applyBackdrop(between(1 - position / width, 0, 1));
      if (evt.isFirst === true) {
        flagPanning.value = true;
      }
    }
    function cleanup() {
      preventBodyScroll(false);
      setScrollable(true);
    }
    function updateLayout(prop, val) {
      $layout.update(props.side, prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function updateSizeOnLayout(miniToOverlay, size2) {
      updateLayout("size", miniToOverlay === true ? props.miniWidth : size2);
    }
    $layout.instances[props.side] = instance;
    updateSizeOnLayout(props.miniToOverlay, size.value);
    updateLayout("space", onLayout.value);
    updateLayout("offset", offset.value);
    if (props.showIfAbove === true && props.modelValue !== true && showing.value === true && props["onUpdate:modelValue"] !== void 0) {
      emit("update:modelValue", true);
    }
    onMounted(() => {
      emit("onLayout", onLayout.value);
      emit("miniState", isMini.value);
      lastDesktopState = props.showIfAbove === true;
      const fn = () => {
        const action = showing.value === true ? handleShow : handleHide;
        action(false, true);
      };
      if ($layout.totalWidth.value !== 0) {
        nextTick(fn);
        return;
      }
      layoutTotalWidthWatcher = watch($layout.totalWidth, () => {
        layoutTotalWidthWatcher();
        layoutTotalWidthWatcher = void 0;
        if (showing.value === false && props.showIfAbove === true && belowBreakpoint.value === false) {
          show(false);
        } else {
          fn();
        }
      });
    });
    onBeforeUnmount(() => {
      layoutTotalWidthWatcher?.();
      if (timerMini !== null) {
        clearTimeout(timerMini);
        timerMini = null;
      }
      showing.value === true && cleanup();
      if ($layout.instances[props.side] === instance) {
        $layout.instances[props.side] = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = [];
      if (belowBreakpoint.value === true) {
        props.noSwipeOpen === false && child.push(
          withDirectives(
            h("div", {
              key: "open",
              class: `q-drawer__opener fixed-${props.side}`,
              "aria-hidden": "true"
            }),
            openDirective.value
          )
        );
        child.push(
          hDir(
            "div",
            {
              ref: "backdrop",
              class: backdropClass.value,
              style: backdropStyle.value,
              "aria-hidden": "true",
              onClick: hide
            },
            void 0,
            "backdrop",
            props.noSwipeBackdrop !== true && showing.value === true,
            () => backdropCloseDirective.value
          )
        );
      }
      const mini = isMini.value === true && slots.mini !== void 0;
      const content = [
        h(
          "div",
          {
            ...attrs,
            key: "" + mini,
            // required otherwise Vue will not diff correctly
            class: [
              contentClass.value,
              attrs.class
            ]
          },
          mini === true ? slots.mini() : hSlot(slots.default)
        )
      ];
      if (props.elevated === true && showing.value === true) {
        content.push(
          h("div", {
            class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
          })
        );
      }
      child.push(
        hDir(
          "aside",
          { ref: "content", class: classes.value, style: style.value },
          content,
          "contentclose",
          props.noSwipeClose !== true && belowBreakpoint.value === true,
          () => contentCloseDirective.value
        )
      );
      return h("div", { class: "q-drawer-container" }, child);
    };
  }
});
const QForm = createComponent({
  name: "QForm",
  props: {
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean,
    onSubmit: Function
  },
  emits: ["reset", "validationSuccess", "validationError"],
  setup(props, { slots, emit }) {
    const vm = getCurrentInstance();
    const rootRef = ref(null);
    let validateIndex = 0;
    const registeredComponents = [];
    function validate(shouldFocus) {
      const focus2 = typeof shouldFocus === "boolean" ? shouldFocus : props.noErrorFocus !== true;
      const index = ++validateIndex;
      const emitEvent = (res, ref2) => {
        emit(`validation${res === true ? "Success" : "Error"}`, ref2);
      };
      const validateComponent = (comp) => {
        const valid = comp.validate();
        return typeof valid.then === "function" ? valid.then(
          (valid2) => ({ valid: valid2, comp }),
          (err) => ({ valid: false, comp, err })
        ) : Promise.resolve({ valid, comp });
      };
      const errorsPromise = props.greedy === true ? Promise.all(registeredComponents.map(validateComponent)).then((res) => res.filter((r) => r.valid !== true)) : registeredComponents.reduce(
        (acc, comp) => acc.then(() => {
          return validateComponent(comp).then((r) => {
            if (r.valid === false) {
              return Promise.reject(r);
            }
          });
        }),
        Promise.resolve()
      ).catch((error) => [error]);
      return errorsPromise.then((errors) => {
        if (errors === void 0 || errors.length === 0) {
          index === validateIndex && emitEvent(true);
          return true;
        }
        if (index === validateIndex) {
          const { comp, err } = errors[0];
          err !== void 0 && console.error(err);
          emitEvent(false, comp);
          if (focus2 === true) {
            const activeError = errors.find(({ comp: comp2 }) => typeof comp2.focus === "function" && vmIsDestroyed(comp2.$) === false);
            if (activeError !== void 0) {
              activeError.comp.focus();
            }
          }
        }
        return false;
      });
    }
    function resetValidation() {
      validateIndex++;
      registeredComponents.forEach((comp) => {
        typeof comp.resetValidation === "function" && comp.resetValidation();
      });
    }
    function submit(evt) {
      evt !== void 0 && stopAndPrevent(evt);
      const index = validateIndex + 1;
      validate().then((val) => {
        if (index === validateIndex && val === true) {
          if (props.onSubmit !== void 0) {
            emit("submit", evt);
          } else if (evt?.target !== void 0 && typeof evt.target.submit === "function") {
            evt.target.submit();
          }
        }
      });
    }
    function reset(evt) {
      evt !== void 0 && stopAndPrevent(evt);
      emit("reset");
      nextTick(() => {
        resetValidation();
        if (props.autofocus === true && props.noResetFocus !== true) {
          focus();
        }
      });
    }
    function focus() {
      addFocusFn(() => {
        if (rootRef.value === null) return;
        const target = rootRef.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || rootRef.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || rootRef.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(rootRef.value.querySelectorAll("[tabindex]"), (el) => el.tabIndex !== -1);
        target?.focus({ preventScroll: true });
      });
    }
    provide(formKey, {
      bindComponent(vmProxy) {
        registeredComponents.push(vmProxy);
      },
      unbindComponent(vmProxy) {
        const index = registeredComponents.indexOf(vmProxy);
        if (index !== -1) {
          registeredComponents.splice(index, 1);
        }
      }
    });
    let shouldActivate = false;
    onDeactivated(() => {
      shouldActivate = true;
    });
    onActivated(() => {
      shouldActivate === true && props.autofocus === true && focus();
    });
    onMounted(() => {
      props.autofocus === true && focus();
    });
    Object.assign(vm.proxy, {
      validate,
      resetValidation,
      submit,
      reset,
      focus,
      getValidationComponents: () => registeredComponents
    });
    return () => h("form", {
      class: "q-form",
      ref: rootRef,
      onSubmit: submit,
      onReset: reset
    }, hSlot(slots.default));
  }
});
export {
  QToolbarTitle as Q,
  QDrawer as a,
  QForm as b
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUZvcm0tRHNmT2p1Y2EuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdG9vbGJhci9RVG9vbGJhclRpdGxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9kcmF3ZXIvUURyYXdlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZm9ybS9RRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVG9vbGJhclRpdGxlJyxcblxuICBwcm9wczoge1xuICAgIHNocmluazogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10b29sYmFyX190aXRsZSBlbGxpcHNpcydcbiAgICAgICsgKHByb3BzLnNocmluayA9PT0gdHJ1ZSA/ICcgY29sLXNocmluaycgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHdpdGhEaXJlY3RpdmVzLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIG5leHRUaWNrLCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZUhpc3RvcnkgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtaGlzdG9yeS91c2UtaGlzdG9yeS5qcydcbmltcG9ydCB1c2VNb2RlbFRvZ2dsZSwgeyB1c2VNb2RlbFRvZ2dsZVByb3BzLCB1c2VNb2RlbFRvZ2dsZUVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtbW9kZWwtdG9nZ2xlL3VzZS1tb2RlbC10b2dnbGUuanMnXG5pbXBvcnQgdXNlUHJldmVudFNjcm9sbCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1wcmV2ZW50LXNjcm9sbC91c2UtcHJldmVudC1zY3JvbGwuanMnXG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtdGltZW91dC91c2UtdGltZW91dC5qcydcbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWRhcmsvdXNlLWRhcmsuanMnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoLXBhbi9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC9mb3JtYXQuanMnXG5pbXBvcnQgeyBoU2xvdCwgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuc3ltYm9scy9zeW1ib2xzLmpzJ1xuXG5jb25zdCBkdXJhdGlvbiA9IDE1MFxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUURyYXdlcicsXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZU1vZGVsVG9nZ2xlUHJvcHMsXG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgc2lkZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2xlZnQnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2xlZnQnLCAncmlnaHQnIF0uaW5jbHVkZXModilcbiAgICB9LFxuXG4gICAgd2lkdGg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDMwMFxuICAgIH0sXG5cbiAgICBtaW5pOiBCb29sZWFuLFxuICAgIG1pbmlUb092ZXJsYXk6IEJvb2xlYW4sXG4gICAgbWluaVdpZHRoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiA1N1xuICAgIH0sXG4gICAgbm9NaW5pQW5pbWF0aW9uOiBCb29sZWFuLFxuXG4gICAgYnJlYWtwb2ludDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMTAyM1xuICAgIH0sXG4gICAgc2hvd0lmQWJvdmU6IEJvb2xlYW4sXG5cbiAgICBiZWhhdmlvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2RlZmF1bHQnLCAnZGVza3RvcCcsICdtb2JpbGUnIF0uaW5jbHVkZXModiksXG4gICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICB9LFxuXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgZWxldmF0ZWQ6IEJvb2xlYW4sXG5cbiAgICBvdmVybGF5OiBCb29sZWFuLFxuICAgIHBlcnNpc3RlbnQ6IEJvb2xlYW4sXG4gICAgbm9Td2lwZU9wZW46IEJvb2xlYW4sXG4gICAgbm9Td2lwZUNsb3NlOiBCb29sZWFuLFxuICAgIG5vU3dpcGVCYWNrZHJvcDogQm9vbGVhblxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlTW9kZWxUb2dnbGVFbWl0cyxcbiAgICAnb25MYXlvdXQnLCAnbWluaVN0YXRlJ1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCwgYXR0cnMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCB7IHByZXZlbnRCb2R5U2Nyb2xsIH0gPSB1c2VQcmV2ZW50U2Nyb2xsKClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dCwgcmVtb3ZlVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUURyYXdlciBuZWVkcyB0byBiZSBjaGlsZCBvZiBRTGF5b3V0JylcbiAgICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gICAgfVxuXG4gICAgbGV0IGxhc3REZXNrdG9wU3RhdGUsIHRpbWVyTWluaSA9IG51bGwsIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyXG5cbiAgICBjb25zdCBiZWxvd0JyZWFrcG9pbnQgPSByZWYoXG4gICAgICBwcm9wcy5iZWhhdmlvciA9PT0gJ21vYmlsZSdcbiAgICAgIHx8IChwcm9wcy5iZWhhdmlvciAhPT0gJ2Rlc2t0b3AnICYmICRsYXlvdXQudG90YWxXaWR0aC52YWx1ZSA8PSBwcm9wcy5icmVha3BvaW50KVxuICAgIClcblxuICAgIGNvbnN0IGlzTWluaSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5taW5pID09PSB0cnVlICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IHNpemUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBpc01pbmkudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBwcm9wcy5taW5pV2lkdGhcbiAgICAgICAgOiBwcm9wcy53aWR0aFxuICAgICkpXG5cbiAgICBjb25zdCBzaG93aW5nID0gcmVmKFxuICAgICAgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgaGlkZU9uUm91dGVDaGFuZ2UgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMucGVyc2lzdGVudCAhPT0gdHJ1ZVxuICAgICAgJiYgKGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSB8fCBvblNjcmVlbk92ZXJsYXkudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2hvdyAoZXZ0LCBub0V2ZW50KSB7XG4gICAgICBhZGRUb0hpc3RvcnkoKVxuXG4gICAgICBldnQgIT09IGZhbHNlICYmICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICBhcHBseVBvc2l0aW9uKDApXG5cbiAgICAgIGlmIChiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb3RoZXJJbnN0YW5jZSA9ICRsYXlvdXQuaW5zdGFuY2VzWyBvdGhlclNpZGUudmFsdWUgXVxuICAgICAgICBpZiAob3RoZXJJbnN0YW5jZT8uYmVsb3dCcmVha3BvaW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgb3RoZXJJbnN0YW5jZS5oaWRlKGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgYXBwbHlCYWNrZHJvcCgxKVxuICAgICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlICE9PSB0cnVlICYmIHByZXZlbnRCb2R5U2Nyb2xsKHRydWUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgICBldnQgIT09IGZhbHNlICYmIHNldFNjcm9sbGFibGUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIHJlZ2lzdGVyVGltZW91dCgoKSA9PiB7XG4gICAgICAgIGV2dCAhPT0gZmFsc2UgJiYgc2V0U2Nyb2xsYWJsZSh0cnVlKVxuICAgICAgICBub0V2ZW50ICE9PSB0cnVlICYmIGVtaXQoJ3Nob3cnLCBldnQpXG4gICAgICB9LCBkdXJhdGlvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVIaWRlIChldnQsIG5vRXZlbnQpIHtcbiAgICAgIHJlbW92ZUZyb21IaXN0b3J5KClcblxuICAgICAgZXZ0ICE9PSBmYWxzZSAmJiAkbGF5b3V0LmFuaW1hdGUoKVxuXG4gICAgICBhcHBseUJhY2tkcm9wKDApXG4gICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogc2l6ZS52YWx1ZSlcblxuICAgICAgY2xlYW51cCgpXG5cbiAgICAgIGlmIChub0V2ZW50ICE9PSB0cnVlKSB7XG4gICAgICAgIHJlZ2lzdGVyVGltZW91dCgoKSA9PiB7IGVtaXQoJ2hpZGUnLCBldnQpIH0sIGR1cmF0aW9uKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZVRpbWVvdXQoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hvdywgaGlkZSB9ID0gdXNlTW9kZWxUb2dnbGUoe1xuICAgICAgc2hvd2luZyxcbiAgICAgIGhpZGVPblJvdXRlQ2hhbmdlLFxuICAgICAgaGFuZGxlU2hvdyxcbiAgICAgIGhhbmRsZUhpZGVcbiAgICB9KVxuXG4gICAgY29uc3QgeyBhZGRUb0hpc3RvcnksIHJlbW92ZUZyb21IaXN0b3J5IH0gPSB1c2VIaXN0b3J5KHNob3dpbmcsIGhpZGUsIGhpZGVPblJvdXRlQ2hhbmdlKVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgICBiZWxvd0JyZWFrcG9pbnQsXG4gICAgICBoaWRlXG4gICAgfVxuXG4gICAgY29uc3QgcmlnaHRTaWRlID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuc2lkZSA9PT0gJ3JpZ2h0JylcblxuICAgIGNvbnN0IHN0YXRlRGlyZWN0aW9uID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IC0xIDogMSkgKiAocmlnaHRTaWRlLnZhbHVlID09PSB0cnVlID8gMSA6IC0xKVxuICAgIClcblxuICAgIGNvbnN0IGZsYWdCYWNrZHJvcEJnID0gcmVmKDApXG4gICAgY29uc3QgZmxhZ1Bhbm5pbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgZmxhZ01pbmlBbmltYXRlID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGZsYWdDb250ZW50UG9zaXRpb24gPSByZWYoIC8vIHN0YXJ0aW5nIHdpdGggXCJoaWRkZW5cIiBmb3IgU1NSXG4gICAgICBzaXplLnZhbHVlICogc3RhdGVEaXJlY3Rpb24udmFsdWVcbiAgICApXG5cbiAgICBjb25zdCBvdGhlclNpZGUgPSBjb21wdXRlZCgoKSA9PiAocmlnaHRTaWRlLnZhbHVlID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JykpXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlICYmIHByb3BzLm92ZXJsYXkgPT09IGZhbHNlXG4gICAgICAgID8gKHByb3BzLm1pbmlUb092ZXJsYXkgPT09IHRydWUgPyBwcm9wcy5taW5pV2lkdGggOiBzaXplLnZhbHVlKVxuICAgICAgICA6IDBcbiAgICApKVxuXG4gICAgY29uc3QgZml4ZWQgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMub3ZlcmxheSA9PT0gdHJ1ZVxuICAgICAgfHwgcHJvcHMubWluaVRvT3ZlcmxheSA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YocmlnaHRTaWRlLnZhbHVlID8gJ1InIDogJ0wnKSAhPT0gLTFcbiAgICAgIHx8ICgkcS5wbGF0Zm9ybS5pcy5pb3MgPT09IHRydWUgJiYgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCBvbkxheW91dCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5vdmVybGF5ID09PSBmYWxzZVxuICAgICAgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZVxuICAgIClcblxuICAgIGNvbnN0IG9uU2NyZWVuT3ZlcmxheSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5vdmVybGF5ID09PSB0cnVlXG4gICAgICAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlXG4gICAgKVxuXG4gICAgY29uc3QgYmFja2Ryb3BDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAnZnVsbHNjcmVlbiBxLWRyYXdlcl9fYmFja2Ryb3AnXG4gICAgICArIChzaG93aW5nLnZhbHVlID09PSBmYWxzZSAmJiBmbGFnUGFubmluZy52YWx1ZSA9PT0gZmFsc2UgPyAnIGhpZGRlbicgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBiYWNrZHJvcFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMCwwLDAsJHsgZmxhZ0JhY2tkcm9wQmcudmFsdWUgKiAwLjQgfSlgXG4gICAgfSkpXG5cbiAgICBjb25zdCBoZWFkZXJTbG90ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcmlnaHRTaWRlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJGxheW91dC5yb3dzLnZhbHVlLnRvcFsgMiBdID09PSAncidcbiAgICAgICAgOiAkbGF5b3V0LnJvd3MudmFsdWUudG9wWyAwIF0gPT09ICdsJ1xuICAgICkpXG5cbiAgICBjb25zdCBmb290ZXJTbG90ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcmlnaHRTaWRlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJGxheW91dC5yb3dzLnZhbHVlLmJvdHRvbVsgMiBdID09PSAncidcbiAgICAgICAgOiAkbGF5b3V0LnJvd3MudmFsdWUuYm90dG9tWyAwIF0gPT09ICdsJ1xuICAgICkpXG5cbiAgICBjb25zdCBhYm92ZVN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY3NzID0ge31cblxuICAgICAgaWYgKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlICYmIGhlYWRlclNsb3QudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy50b3AgPSBgJHsgJGxheW91dC5oZWFkZXIub2Zmc2V0IH1weGBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgkbGF5b3V0LmhlYWRlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy50b3AgPSBgJHsgJGxheW91dC5oZWFkZXIuc2l6ZSB9cHhgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlICYmIGZvb3RlclNsb3QudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy5ib3R0b20gPSBgJHsgJGxheW91dC5mb290ZXIub2Zmc2V0IH1weGBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgkbGF5b3V0LmZvb3Rlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy5ib3R0b20gPSBgJHsgJGxheW91dC5mb290ZXIuc2l6ZSB9cHhgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICB3aWR0aDogYCR7IHNpemUudmFsdWUgfXB4YCxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgkeyBmbGFnQ29udGVudFBvc2l0aW9uLnZhbHVlIH1weClgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBzdHlsZVxuICAgICAgICA6IE9iamVjdC5hc3NpZ24oc3R5bGUsIGFib3ZlU3R5bGUudmFsdWUpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRlbnRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1kcmF3ZXJfX2NvbnRlbnQgZml0ICdcbiAgICAgICsgKCRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgIT09IHRydWUgPyAnc2Nyb2xsJyA6ICdvdmVyZmxvdy1hdXRvJylcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWRyYXdlciBxLWRyYXdlci0tJHsgcHJvcHMuc2lkZSB9YFxuICAgICAgKyAoZmxhZ01pbmlBbmltYXRlLnZhbHVlID09PSB0cnVlID8gJyBxLWRyYXdlci0tbWluaS1hbmltYXRlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtZHJhd2VyLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAnIG5vLXRyYW5zaXRpb24nXG4gICAgICAgICAgOiAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyBxLWxheW91dC0tcHJldmVudC1mb2N1cycpXG4gICAgICApXG4gICAgICArIChcbiAgICAgICAgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAnIGZpeGVkIHEtZHJhd2VyLS1vbi10b3AgcS1kcmF3ZXItLW1vYmlsZSBxLWRyYXdlci0tdG9wLXBhZGRpbmcnXG4gICAgICAgICAgOiBgIHEtZHJhd2VyLS0keyBpc01pbmkudmFsdWUgPT09IHRydWUgPyAnbWluaScgOiAnc3RhbmRhcmQnIH1gXG4gICAgICAgICAgKyAoZml4ZWQudmFsdWUgPT09IHRydWUgfHwgb25MYXlvdXQudmFsdWUgIT09IHRydWUgPyAnIGZpeGVkJyA6ICcnKVxuICAgICAgICAgICsgKHByb3BzLm92ZXJsYXkgPT09IHRydWUgfHwgcHJvcHMubWluaVRvT3ZlcmxheSA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLW9uLXRvcCcgOiAnJylcbiAgICAgICAgICArIChoZWFkZXJTbG90LnZhbHVlID09PSB0cnVlID8gJyBxLWRyYXdlci0tdG9wLXBhZGRpbmcnIDogJycpXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3Qgb3BlbkRpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIGlmIHByb3BzLm5vU3dpcGVPcGVuICE9PSB0cnVlXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IHByb3BzLnNpZGUgOiBvdGhlclNpZGUudmFsdWVcblxuICAgICAgcmV0dXJuIFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgb25PcGVuUGFuLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHtcbiAgICAgICAgICBbIGRpciBdOiB0cnVlLFxuICAgICAgICAgIG1vdXNlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250ZW50Q2xvc2VEaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAvLyBpZiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUgJiYgcHJvcHMubm9Td2lwZUNsb3NlICE9PSB0cnVlXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IG90aGVyU2lkZS52YWx1ZSA6IHByb3BzLnNpZGVcblxuICAgICAgcmV0dXJuIFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgb25DbG9zZVBhbixcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7XG4gICAgICAgICAgWyBkaXIgXTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdIF1cbiAgICB9KVxuXG4gICAgY29uc3QgYmFja2Ryb3BDbG9zZURpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIGlmIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgcHJvcHMubm9Td2lwZUJhY2tkcm9wICE9PSB0cnVlXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IG90aGVyU2lkZS52YWx1ZSA6IHByb3BzLnNpZGVcblxuICAgICAgcmV0dXJuIFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgb25DbG9zZVBhbixcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7XG4gICAgICAgICAgWyBkaXIgXTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZUFsbERpcjogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdIF1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQmVsb3dCcmVha3BvaW50ICgpIHtcbiAgICAgIHVwZGF0ZUxvY2FsKGJlbG93QnJlYWtwb2ludCwgKFxuICAgICAgICBwcm9wcy5iZWhhdmlvciA9PT0gJ21vYmlsZSdcbiAgICAgICAgfHwgKHByb3BzLmJlaGF2aW9yICE9PSAnZGVza3RvcCcgJiYgJGxheW91dC50b3RhbFdpZHRoLnZhbHVlIDw9IHByb3BzLmJyZWFrcG9pbnQpXG4gICAgICApKVxuICAgIH1cblxuICAgIHdhdGNoKGJlbG93QnJlYWtwb2ludCwgdmFsID0+IHtcbiAgICAgIGlmICh2YWwgPT09IHRydWUpIHsgLy8gZnJvbSBsZyB0byB4c1xuICAgICAgICBsYXN0RGVza3RvcFN0YXRlID0gc2hvd2luZy52YWx1ZVxuICAgICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIGhpZGUoZmFsc2UpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChcbiAgICAgICAgcHJvcHMub3ZlcmxheSA9PT0gZmFsc2VcbiAgICAgICAgJiYgcHJvcHMuYmVoYXZpb3IgIT09ICdtb2JpbGUnXG4gICAgICAgICYmIGxhc3REZXNrdG9wU3RhdGUgIT09IGZhbHNlXG4gICAgICApIHsgLy8gZnJvbSB4cyB0byBsZ1xuICAgICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFwcGx5UG9zaXRpb24oMClcbiAgICAgICAgICBhcHBseUJhY2tkcm9wKDApXG4gICAgICAgICAgY2xlYW51cCgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2hvdyhmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zaWRlLCAobmV3U2lkZSwgb2xkU2lkZSkgPT4ge1xuICAgICAgaWYgKCRsYXlvdXQuaW5zdGFuY2VzWyBvbGRTaWRlIF0gPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzWyBvbGRTaWRlIF0gPSB2b2lkIDBcbiAgICAgICAgJGxheW91dFsgb2xkU2lkZSBdLnNwYWNlID0gZmFsc2VcbiAgICAgICAgJGxheW91dFsgb2xkU2lkZSBdLm9mZnNldCA9IDBcbiAgICAgIH1cblxuICAgICAgJGxheW91dC5pbnN0YW5jZXNbIG5ld1NpZGUgXSA9IGluc3RhbmNlXG4gICAgICAkbGF5b3V0WyBuZXdTaWRlIF0uc2l6ZSA9IHNpemUudmFsdWVcbiAgICAgICRsYXlvdXRbIG5ld1NpZGUgXS5zcGFjZSA9IG9uTGF5b3V0LnZhbHVlXG4gICAgICAkbGF5b3V0WyBuZXdTaWRlIF0ub2Zmc2V0ID0gb2Zmc2V0LnZhbHVlXG4gICAgfSlcblxuICAgIHdhdGNoKCRsYXlvdXQudG90YWxXaWR0aCwgKCkgPT4ge1xuICAgICAgaWYgKCRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUgfHwgZG9jdW1lbnQucVNjcm9sbFByZXZlbnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVCZWxvd0JyZWFrcG9pbnQoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaChcbiAgICAgICgpID0+IHByb3BzLmJlaGF2aW9yICsgcHJvcHMuYnJlYWtwb2ludCxcbiAgICAgIHVwZGF0ZUJlbG93QnJlYWtwb2ludFxuICAgIClcblxuICAgIHdhdGNoKCRsYXlvdXQuaXNDb250YWluZXIsIHZhbCA9PiB7XG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIHByZXZlbnRCb2R5U2Nyb2xsKHZhbCAhPT0gdHJ1ZSlcbiAgICAgIHZhbCA9PT0gdHJ1ZSAmJiB1cGRhdGVCZWxvd0JyZWFrcG9pbnQoKVxuICAgIH0pXG5cbiAgICB3YXRjaCgkbGF5b3V0LnNjcm9sbGJhcldpZHRoLCAoKSA9PiB7XG4gICAgICBhcHBseVBvc2l0aW9uKHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAwIDogdm9pZCAwKVxuICAgIH0pXG5cbiAgICB3YXRjaChvZmZzZXQsIHZhbCA9PiB7IHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgdmFsKSB9KVxuXG4gICAgd2F0Y2gob25MYXlvdXQsIHZhbCA9PiB7XG4gICAgICBlbWl0KCdvbkxheW91dCcsIHZhbClcbiAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKHJpZ2h0U2lkZSwgKCkgPT4geyBhcHBseVBvc2l0aW9uKCkgfSlcblxuICAgIHdhdGNoKHNpemUsIHZhbCA9PiB7XG4gICAgICBhcHBseVBvc2l0aW9uKClcbiAgICAgIHVwZGF0ZVNpemVPbkxheW91dChwcm9wcy5taW5pVG9PdmVybGF5LCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1pbmlUb092ZXJsYXksIHZhbCA9PiB7XG4gICAgICB1cGRhdGVTaXplT25MYXlvdXQodmFsLCBzaXplLnZhbHVlKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiAkcS5sYW5nLnJ0bCwgKCkgPT4geyBhcHBseVBvc2l0aW9uKCkgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1pbmksICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5ub01pbmlBbmltYXRpb24pIHJldHVyblxuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgYW5pbWF0ZU1pbmkoKVxuICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaChpc01pbmksIHZhbCA9PiB7IGVtaXQoJ21pbmlTdGF0ZScsIHZhbCkgfSlcblxuICAgIGZ1bmN0aW9uIGFwcGx5UG9zaXRpb24gKHBvc2l0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgcG9zaXRpb24gPSBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gMCA6IHNpemUudmFsdWVcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogcG9zaXRpb24pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlIHx8IE1hdGguYWJzKHBvc2l0aW9uKSA9PT0gc2l6ZS52YWx1ZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcG9zaXRpb24gKz0gc3RhdGVEaXJlY3Rpb24udmFsdWUgKiAkbGF5b3V0LnNjcm9sbGJhcldpZHRoLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnQ29udGVudFBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb25cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUJhY2tkcm9wICh4KSB7XG4gICAgICBmbGFnQmFja2Ryb3BCZy52YWx1ZSA9IHhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTY3JvbGxhYmxlICh2KSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB2ID09PSB0cnVlXG4gICAgICAgID8gJ3JlbW92ZSdcbiAgICAgICAgOiAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSA/ICdhZGQnIDogJycpXG5cbiAgICAgIGFjdGlvbiAhPT0gJycgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3RbIGFjdGlvbiBdKCdxLWJvZHktLWRyYXdlci10b2dnbGUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVNaW5pICgpIHtcbiAgICAgIHRpbWVyTWluaSAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQodGltZXJNaW5pKVxuXG4gICAgICBpZiAodm0ucHJveHkgJiYgdm0ucHJveHkuJGVsKSB7XG4gICAgICAgIC8vIG5lZWQgdG8gc3BlZWQgaXQgdXAgYW5kIGFwcGx5IGl0IGltbWVkaWF0ZWx5LFxuICAgICAgICAvLyBldmVuIGZhc3RlciB0aGFuIFZ1ZSdzIG5leHRUaWNrIVxuICAgICAgICB2bS5wcm94eS4kZWwuY2xhc3NMaXN0LmFkZCgncS1kcmF3ZXItLW1pbmktYW5pbWF0ZScpXG4gICAgICB9XG5cbiAgICAgIGZsYWdNaW5pQW5pbWF0ZS52YWx1ZSA9IHRydWVcbiAgICAgIHRpbWVyTWluaSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aW1lck1pbmkgPSBudWxsXG4gICAgICAgIGZsYWdNaW5pQW5pbWF0ZS52YWx1ZSA9IGZhbHNlXG4gICAgICAgIHZtPy5wcm94eT8uJGVsPy5jbGFzc0xpc3QucmVtb3ZlKCdxLWRyYXdlci0tbWluaS1hbmltYXRlJylcbiAgICAgIH0sIDE1MClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk9wZW5QYW4gKGV2dCkge1xuICAgICAgaWYgKHNob3dpbmcudmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICAgIC8vIHNvbWUgYnJvd3NlcnMgbWlnaHQgY2FwdHVyZSBhbmQgdHJpZ2dlciB0aGlzXG4gICAgICAgIC8vIGV2ZW4gaWYgRHJhd2VyIGhhcyBqdXN0IGJlZW4gb3BlbmVkIChidXQgYW5pbWF0aW9uIGlzIHN0aWxsIHBlbmRpbmcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICB3aWR0aCA9IHNpemUudmFsdWUsXG4gICAgICAgIHBvc2l0aW9uID0gYmV0d2VlbihldnQuZGlzdGFuY2UueCwgMCwgd2lkdGgpXG5cbiAgICAgIGlmIChldnQuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBvcGVuZWQgPSBwb3NpdGlvbiA+PSBNYXRoLm1pbig3NSwgd2lkdGgpXG5cbiAgICAgICAgaWYgKG9wZW5lZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNob3coKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgICAgIGFwcGx5UG9zaXRpb24oc3RhdGVEaXJlY3Rpb24udmFsdWUgKiB3aWR0aClcbiAgICAgICAgfVxuXG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGFwcGx5UG9zaXRpb24oXG4gICAgICAgICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IHJpZ2h0U2lkZS52YWx1ZSAhPT0gdHJ1ZSA6IHJpZ2h0U2lkZS52YWx1ZSlcbiAgICAgICAgICA/IE1hdGgubWF4KHdpZHRoIC0gcG9zaXRpb24sIDApXG4gICAgICAgICAgOiBNYXRoLm1pbigwLCBwb3NpdGlvbiAtIHdpZHRoKVxuICAgICAgKVxuICAgICAgYXBwbHlCYWNrZHJvcChcbiAgICAgICAgYmV0d2Vlbihwb3NpdGlvbiAvIHdpZHRoLCAwLCAxKVxuICAgICAgKVxuXG4gICAgICBpZiAoZXZ0LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DbG9zZVBhbiAoZXZ0KSB7XG4gICAgICBpZiAoc2hvd2luZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAvLyBzb21lIGJyb3dzZXJzIG1pZ2h0IGNhcHR1cmUgYW5kIHRyaWdnZXIgdGhpc1xuICAgICAgICAvLyBldmVuIGlmIERyYXdlciBoYXMganVzdCBiZWVuIGNsb3NlZCAoYnV0IGFuaW1hdGlvbiBpcyBzdGlsbCBwZW5kaW5nKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgd2lkdGggPSBzaXplLnZhbHVlLFxuICAgICAgICBkaXIgPSBldnQuZGlyZWN0aW9uID09PSBwcm9wcy5zaWRlLFxuICAgICAgICBwb3NpdGlvbiA9ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IGRpciAhPT0gdHJ1ZSA6IGRpcilcbiAgICAgICAgICA/IGJldHdlZW4oZXZ0LmRpc3RhbmNlLngsIDAsIHdpZHRoKVxuICAgICAgICAgIDogMFxuXG4gICAgICBpZiAoZXZ0LmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb3BlbmVkID0gTWF0aC5hYnMocG9zaXRpb24pIDwgTWF0aC5taW4oNzUsIHdpZHRoKVxuXG4gICAgICAgIGlmIChvcGVuZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgICAgIGFwcGx5QmFja2Ryb3AoMSlcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaGlkZSgpXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnUGFubmluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogcG9zaXRpb24pXG4gICAgICBhcHBseUJhY2tkcm9wKGJldHdlZW4oMSAtIHBvc2l0aW9uIC8gd2lkdGgsIDAsIDEpKVxuXG4gICAgICBpZiAoZXZ0LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbChmYWxzZSlcbiAgICAgIHNldFNjcm9sbGFibGUodHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUocHJvcHMuc2lkZSwgcHJvcCwgdmFsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsIChwcm9wLCB2YWwpIHtcbiAgICAgIGlmIChwcm9wLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgcHJvcC52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNpemVPbkxheW91dCAobWluaVRvT3ZlcmxheSwgc2l6ZSkge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgbWluaVRvT3ZlcmxheSA9PT0gdHJ1ZSA/IHByb3BzLm1pbmlXaWR0aCA6IHNpemUpXG4gICAgfVxuXG4gICAgJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9IGluc3RhbmNlXG4gICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHByb3BzLm1pbmlUb092ZXJsYXksIHNpemUudmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIG9uTGF5b3V0LnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgaWYgKFxuICAgICAgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWVcbiAgICAgICYmIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICYmIHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSAhPT0gdm9pZCAwXG4gICAgKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRydWUpXG4gICAgfVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGVtaXQoJ29uTGF5b3V0Jywgb25MYXlvdXQudmFsdWUpXG4gICAgICBlbWl0KCdtaW5pU3RhdGUnLCBpc01pbmkudmFsdWUpXG5cbiAgICAgIGxhc3REZXNrdG9wU3RhdGUgPSBwcm9wcy5zaG93SWZBYm92ZSA9PT0gdHJ1ZVxuXG4gICAgICBjb25zdCBmbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/IGhhbmRsZVNob3cgOiBoYW5kbGVIaWRlXG4gICAgICAgIGFjdGlvbihmYWxzZSwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKCRsYXlvdXQudG90YWxXaWR0aC52YWx1ZSAhPT0gMCkge1xuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBhbGwgY29tcHV0ZWQgcHJvcGVydGllc1xuICAgICAgICAvLyBoYXZlIGJlZW4gdXBkYXRlZCBiZWZvcmUgY2FsbGluZyBoYW5kbGVTaG93L2hhbmRsZUhpZGUoKVxuICAgICAgICBuZXh0VGljayhmbilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyID0gd2F0Y2goJGxheW91dC50b3RhbFdpZHRoLCAoKSA9PiB7XG4gICAgICAgIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyKClcbiAgICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIgPSB2b2lkIDBcblxuICAgICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gZmFsc2UgJiYgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIHNob3coZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZm4oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXI/LigpXG5cbiAgICAgIGlmICh0aW1lck1pbmkgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyTWluaSlcbiAgICAgICAgdGltZXJNaW5pID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIGNsZWFudXAoKVxuXG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW11cblxuICAgICAgaWYgKGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBwcm9wcy5ub1N3aXBlT3BlbiA9PT0gZmFsc2UgJiYgY2hpbGQucHVzaChcbiAgICAgICAgICB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAga2V5OiAnb3BlbicsXG4gICAgICAgICAgICAgIGNsYXNzOiBgcS1kcmF3ZXJfX29wZW5lciBmaXhlZC0keyBwcm9wcy5zaWRlIH1gLFxuICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgb3BlbkRpcmVjdGl2ZS52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaERpcihcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6ICdiYWNrZHJvcCcsXG4gICAgICAgICAgICAgIGNsYXNzOiBiYWNrZHJvcENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZTogYmFja2Ryb3BTdHlsZS52YWx1ZSxcbiAgICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBoaWRlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgJ2JhY2tkcm9wJyxcbiAgICAgICAgICAgIHByb3BzLm5vU3dpcGVCYWNrZHJvcCAhPT0gdHJ1ZSAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICAgKCkgPT4gYmFja2Ryb3BDbG9zZURpcmVjdGl2ZS52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtaW5pID0gaXNNaW5pLnZhbHVlID09PSB0cnVlICYmIHNsb3RzLm1pbmkgIT09IHZvaWQgMFxuICAgICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIGtleTogJycgKyBtaW5pLCAvLyByZXF1aXJlZCBvdGhlcndpc2UgVnVlIHdpbGwgbm90IGRpZmYgY29ycmVjdGx5XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIGNvbnRlbnRDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIGF0dHJzLmNsYXNzXG4gICAgICAgICAgXVxuICAgICAgICB9LCBtaW5pID09PSB0cnVlXG4gICAgICAgICAgPyBzbG90cy5taW5pKClcbiAgICAgICAgICA6IGhTbG90KHNsb3RzLmRlZmF1bHQpXG4gICAgICAgIClcbiAgICAgIF1cblxuICAgICAgaWYgKHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29udGVudC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1sYXlvdXRfX3NoYWRvdyBhYnNvbHV0ZS1mdWxsIG92ZXJmbG93LWhpZGRlbiBuby1wb2ludGVyLWV2ZW50cydcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGhEaXIoXG4gICAgICAgICAgJ2FzaWRlJyxcbiAgICAgICAgICB7IHJlZjogJ2NvbnRlbnQnLCBjbGFzczogY2xhc3Nlcy52YWx1ZSwgc3R5bGU6IHN0eWxlLnZhbHVlIH0sXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAnY29udGVudGNsb3NlJyxcbiAgICAgICAgICBwcm9wcy5ub1N3aXBlQ2xvc2UgIT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICgpID0+IGNvbnRlbnRDbG9zZURpcmVjdGl2ZS52YWx1ZVxuICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAncS1kcmF3ZXItY29udGFpbmVyJyB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBvbk1vdW50ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSwgbmV4dFRpY2ssIHByb3ZpZGUgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQvZXZlbnQuanMnXG5pbXBvcnQgeyBhZGRGb2N1c0ZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5mb2N1cy9mb2N1cy1tYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5pbXBvcnQgeyBmb3JtS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zeW1ib2xzL3N5bWJvbHMuanMnXG5pbXBvcnQgeyB2bUlzRGVzdHJveWVkIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS52bS92bS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FGb3JtJyxcblxuICBwcm9wczoge1xuICAgIGF1dG9mb2N1czogQm9vbGVhbixcbiAgICBub0Vycm9yRm9jdXM6IEJvb2xlYW4sXG4gICAgbm9SZXNldEZvY3VzOiBCb29sZWFuLFxuICAgIGdyZWVkeTogQm9vbGVhbixcblxuICAgIG9uU3VibWl0OiBGdW5jdGlvblxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXNldCcsICd2YWxpZGF0aW9uU3VjY2VzcycsICd2YWxpZGF0aW9uRXJyb3InIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuXG4gICAgbGV0IHZhbGlkYXRlSW5kZXggPSAwXG4gICAgY29uc3QgcmVnaXN0ZXJlZENvbXBvbmVudHMgPSBbXVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUgKHNob3VsZEZvY3VzKSB7XG4gICAgICBjb25zdCBmb2N1cyA9IHR5cGVvZiBzaG91bGRGb2N1cyA9PT0gJ2Jvb2xlYW4nXG4gICAgICAgID8gc2hvdWxkRm9jdXNcbiAgICAgICAgOiBwcm9wcy5ub0Vycm9yRm9jdXMgIT09IHRydWVcblxuICAgICAgY29uc3QgaW5kZXggPSArK3ZhbGlkYXRlSW5kZXhcblxuICAgICAgY29uc3QgZW1pdEV2ZW50ID0gKHJlcywgcmVmKSA9PiB7XG4gICAgICAgIGVtaXQoYHZhbGlkYXRpb24keyByZXMgPT09IHRydWUgPyAnU3VjY2VzcycgOiAnRXJyb3InIH1gLCByZWYpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbGlkYXRlQ29tcG9uZW50ID0gY29tcCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkID0gY29tcC52YWxpZGF0ZSgpXG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWxpZC50aGVuID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyB2YWxpZC50aGVuKFxuICAgICAgICAgICAgdmFsaWQgPT4gKHsgdmFsaWQsIGNvbXAgfSksXG4gICAgICAgICAgICBlcnIgPT4gKHsgdmFsaWQ6IGZhbHNlLCBjb21wLCBlcnIgfSlcbiAgICAgICAgICApXG4gICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUoeyB2YWxpZCwgY29tcCB9KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBlcnJvcnNQcm9taXNlID0gcHJvcHMuZ3JlZWR5ID09PSB0cnVlXG4gICAgICAgID8gUHJvbWlzZVxuICAgICAgICAgIC5hbGwocmVnaXN0ZXJlZENvbXBvbmVudHMubWFwKHZhbGlkYXRlQ29tcG9uZW50KSlcbiAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmZpbHRlcihyID0+IHIudmFsaWQgIT09IHRydWUpKVxuICAgICAgICA6IHJlZ2lzdGVyZWRDb21wb25lbnRzXG4gICAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAgIChhY2MsIGNvbXApID0+IGFjYy50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlQ29tcG9uZW50KGNvbXApLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHIudmFsaWQgPT09IGZhbHNlKSB7IHJldHVybiBQcm9taXNlLnJlamVjdChyKSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBbIGVycm9yIF0pXG5cbiAgICAgIHJldHVybiBlcnJvcnNQcm9taXNlLnRoZW4oZXJyb3JzID0+IHtcbiAgICAgICAgaWYgKGVycm9ycyA9PT0gdm9pZCAwIHx8IGVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpbmRleCA9PT0gdmFsaWRhdGVJbmRleCAmJiBlbWl0RXZlbnQodHJ1ZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbm90IG91dGRhdGVkIGFscmVhZHlcbiAgICAgICAgaWYgKGluZGV4ID09PSB2YWxpZGF0ZUluZGV4KSB7XG4gICAgICAgICAgY29uc3QgeyBjb21wLCBlcnIgfSA9IGVycm9yc1sgMCBdXG5cbiAgICAgICAgICBlcnIgIT09IHZvaWQgMCAmJiBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICBlbWl0RXZlbnQoZmFsc2UsIGNvbXApXG5cbiAgICAgICAgICBpZiAoZm9jdXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIFRyeSB0byBmb2N1cyBmaXJzdCBtb3VudGVkIGFuZCBhY3RpdmUgY29tcG9uZW50XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVFcnJvciA9IGVycm9ycy5maW5kKCh7IGNvbXAgfSkgPT4gKFxuICAgICAgICAgICAgICB0eXBlb2YgY29tcC5mb2N1cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAmJiB2bUlzRGVzdHJveWVkKGNvbXAuJCkgPT09IGZhbHNlXG4gICAgICAgICAgICApKVxuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRXJyb3IgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBhY3RpdmVFcnJvci5jb21wLmZvY3VzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRWYWxpZGF0aW9uICgpIHtcbiAgICAgIHZhbGlkYXRlSW5kZXgrK1xuXG4gICAgICByZWdpc3RlcmVkQ29tcG9uZW50cy5mb3JFYWNoKGNvbXAgPT4ge1xuICAgICAgICB0eXBlb2YgY29tcC5yZXNldFZhbGlkYXRpb24gPT09ICdmdW5jdGlvbicgJiYgY29tcC5yZXNldFZhbGlkYXRpb24oKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXQgKGV2dCkge1xuICAgICAgZXZ0ICE9PSB2b2lkIDAgJiYgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICBjb25zdCBpbmRleCA9IHZhbGlkYXRlSW5kZXggKyAxXG5cbiAgICAgIHZhbGlkYXRlKCkudGhlbih2YWwgPT4ge1xuICAgICAgICAvLyBpZiBub3Qgb3V0ZGF0ZWQgJiYgdmFsaWRhdGlvbiBzdWNjZWVkZWRcbiAgICAgICAgaWYgKGluZGV4ID09PSB2YWxpZGF0ZUluZGV4ICYmIHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChwcm9wcy5vblN1Ym1pdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBlbWl0KCdzdWJtaXQnLCBldnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGV2dD8udGFyZ2V0ICE9PSB2b2lkIDAgJiYgdHlwZW9mIGV2dC50YXJnZXQuc3VibWl0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldnQudGFyZ2V0LnN1Ym1pdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0IChldnQpIHtcbiAgICAgIGV2dCAhPT0gdm9pZCAwICYmIHN0b3BBbmRQcmV2ZW50KGV2dClcblxuICAgICAgZW1pdCgncmVzZXQnKVxuXG4gICAgICBuZXh0VGljaygoKSA9PiB7IC8vIGFsbG93IHVzZXJsYW5kIHRvIHJlc2V0IHZhbHVlcyBiZWZvcmVcbiAgICAgICAgcmVzZXRWYWxpZGF0aW9uKClcbiAgICAgICAgaWYgKHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSAmJiBwcm9wcy5ub1Jlc2V0Rm9jdXMgIT09IHRydWUpIHtcbiAgICAgICAgICBmb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9jdXMgKCkge1xuICAgICAgYWRkRm9jdXNGbigoKSA9PiB7XG4gICAgICAgIGlmIChyb290UmVmLnZhbHVlID09PSBudWxsKSByZXR1cm5cblxuICAgICAgICBjb25zdCB0YXJnZXQgPSByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdW3RhYmluZGV4XSwgW2RhdGEtYXV0b2ZvY3VzXVt0YWJpbmRleF0nKVxuICAgICAgICAgIHx8IHJvb3RSZWYudmFsdWUucXVlcnlTZWxlY3RvcignW2F1dG9mb2N1c10gW3RhYmluZGV4XSwgW2RhdGEtYXV0b2ZvY3VzXSBbdGFiaW5kZXhdJylcbiAgICAgICAgICB8fCByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdLCBbZGF0YS1hdXRvZm9jdXNdJylcbiAgICAgICAgICB8fCBBcnJheS5wcm90b3R5cGUuZmluZC5jYWxsKHJvb3RSZWYudmFsdWUucXVlcnlTZWxlY3RvckFsbCgnW3RhYmluZGV4XScpLCBlbCA9PiBlbC50YWJJbmRleCAhPT0gLTEpXG5cbiAgICAgICAgdGFyZ2V0Py5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJvdmlkZShmb3JtS2V5LCB7XG4gICAgICBiaW5kQ29tcG9uZW50ICh2bVByb3h5KSB7XG4gICAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzLnB1c2godm1Qcm94eSlcbiAgICAgIH0sXG5cbiAgICAgIHVuYmluZENvbXBvbmVudCAodm1Qcm94eSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHJlZ2lzdGVyZWRDb21wb25lbnRzLmluZGV4T2Yodm1Qcm94eSlcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgc2hvdWxkQWN0aXZhdGUgPSBmYWxzZVxuXG4gICAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBzaG91bGRBY3RpdmF0ZSA9IHRydWVcbiAgICB9KVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgc2hvdWxkQWN0aXZhdGUgPT09IHRydWUgJiYgcHJvcHMuYXV0b2ZvY3VzID09PSB0cnVlICYmIGZvY3VzKClcbiAgICB9KVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSAmJiBmb2N1cygpXG4gICAgfSlcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24odm0ucHJveHksIHtcbiAgICAgIHZhbGlkYXRlLFxuICAgICAgcmVzZXRWYWxpZGF0aW9uLFxuICAgICAgc3VibWl0LFxuICAgICAgcmVzZXQsXG4gICAgICBmb2N1cyxcbiAgICAgIGdldFZhbGlkYXRpb25Db21wb25lbnRzOiAoKSA9PiByZWdpc3RlcmVkQ29tcG9uZW50c1xuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZm9ybScsIHtcbiAgICAgIGNsYXNzOiAncS1mb3JtJyxcbiAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgIG9uU3VibWl0OiBzdWJtaXQsXG4gICAgICBvblJlc2V0OiByZXNldFxuICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIl0sIm5hbWVzIjpbInN0eWxl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QUssT0FBTztBQUVaLGVBQVMsTUFBTTtBQUNiLHdCQUFlO0FBQ2YsWUFBSSxNQUFNLGNBQWMsUUFBUSxNQUFNLGlCQUFpQixNQUFNO0FBQzNELGdCQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFFQSxhQUFTLFFBQVM7QUFDaEIsaUJBQVcsTUFBTTtBQUNmLFlBQUksUUFBUSxVQUFVLEtBQU07QUFFNUIsY0FBTSxTQUFTLFFBQVEsTUFBTSxjQUFjLG1EQUFtRCxLQUN6RixRQUFRLE1BQU0sY0FBYyxxREFBcUQsS0FDakYsUUFBUSxNQUFNLGNBQWMsK0JBQStCLEtBQzNELE1BQU0sVUFBVSxLQUFLLEtBQUssUUFBUSxNQUFNLGlCQUFpQixZQUFZLEdBQUcsUUFBTSxHQUFHLGFBQWEsRUFBRTtBQUVyRyxnQkFBUSxNQUFNLEVBQUUsZUFBZSxLQUFJLENBQUU7QUFBQSxNQUN2QyxDQUFDO0FBQUEsSUFDSDtBQUVBLFlBQVEsU0FBUztBQUFBLE1BQ2YsY0FBZSxTQUFTO0FBQ3RCLDZCQUFxQixLQUFLLE9BQU87QUFBQSxNQUNuQztBQUFBLE1BRUEsZ0JBQWlCLFNBQVM7QUFDeEIsY0FBTSxRQUFRLHFCQUFxQixRQUFRLE9BQU87QUFDbEQsWUFBSSxVQUFVLElBQUk7QUFDaEIsK0JBQXFCLE9BQU8sT0FBTyxDQUFDO0FBQUEsUUFDdEM7QUFBQSxNQUNGO0FBQUEsSUFDTixDQUFLO0FBRUQsUUFBSSxpQkFBaUI7QUFFckIsa0JBQWMsTUFBTTtBQUNsQix1QkFBaUI7QUFBQSxJQUNuQixDQUFDO0FBRUQsZ0JBQVksTUFBTTtBQUNoQix5QkFBbUIsUUFBUSxNQUFNLGNBQWMsUUFBUSxNQUFLO0FBQUEsSUFDOUQsQ0FBQztBQUVELGNBQVUsTUFBTTtBQUNkLFlBQU0sY0FBYyxRQUFRLE1BQUs7QUFBQSxJQUNuQyxDQUFDO0FBR0QsV0FBTyxPQUFPLEdBQUcsT0FBTztBQUFBLE1BQ3RCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EseUJBQXlCLE1BQU07QUFBQSxJQUNyQyxDQUFLO0FBRUQsV0FBTyxNQUFNLEVBQUUsUUFBUTtBQUFBLE1BQ3JCLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxJQUNmLEdBQU8sTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUFBLEVBQ3pCO0FBQ0YsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDJdfQ==
