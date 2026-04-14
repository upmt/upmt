import { c as createComponent, g as getCurrentInstance, r as ref, b as computed, az as injectProp, ai as nextTick, aN as isDeepEqual, h, Q as QBtn, bx as isRuntimeSsrPreHydration, O as onMounted, t as onBeforeUnmount, aJ as noop, bl as listenOpts, Z as createDirective, v as cleanEvt, as as client, by as preventDraggable, x as addEvt, bt as position, aB as prevent, ar as stop, bz as leftClick, z as stopAndPrevent, H as defineComponent, I as useProjectStore, _ as _export_sfc, K as createBlock, L as openBlock, M as withCtx, R as createVNode, N as createCommentVNode, bd as QInput, aq as withKeys, Y as withModifiers, a9 as createBaseVNode, X as toDisplayString, ad as normalizeClass, A as useFormProps, u as useDarkProps, f as useDark, bA as isNumber, bB as isObject, C as useFormInject, a5 as hDir, bC as useFormAttrs, w as watch } from "./index-CfhV53hf.js";
import { Q as QMenu, e as clearSelection, g as between } from "./format-tqiE4n6T.js";
import { Q as QTooltip } from "./QTooltip-BcT2fcEV.js";
function cloneDeep(data, hash = /* @__PURE__ */ new WeakMap()) {
  if (Object(data) !== data) return data;
  if (hash.has(data)) return hash.get(data);
  const result = data instanceof Date ? new Date(data) : data instanceof RegExp ? new RegExp(data.source, data.flags) : data instanceof Set ? /* @__PURE__ */ new Set() : data instanceof Map ? /* @__PURE__ */ new Map() : typeof data.constructor !== "function" ? /* @__PURE__ */ Object.create(null) : data.prototype !== void 0 && typeof data.prototype.constructor === "function" ? data : new data.constructor();
  if (typeof data.constructor === "function" && typeof data.valueOf === "function") {
    const val = data.valueOf();
    if (Object(val) !== val) {
      const result2 = new data.constructor(val);
      hash.set(data, result2);
      return result2;
    }
  }
  hash.set(data, result);
  if (data instanceof Set) {
    data.forEach((val) => {
      result.add(cloneDeep(val, hash));
    });
  } else if (data instanceof Map) {
    data.forEach((val, key) => {
      result.set(key, cloneDeep(val, hash));
    });
  }
  return Object.assign(
    result,
    ...Object.keys(data).map((key) => ({ [key]: cloneDeep(data[key], hash) }))
  );
}
const QPopupEdit = createComponent({
  name: "QPopupEdit",
  props: {
    modelValue: {
      required: true
    },
    title: String,
    buttons: Boolean,
    labelSet: String,
    labelCancel: String,
    color: {
      type: String,
      default: "primary"
    },
    validate: {
      type: Function,
      default: () => true
    },
    autoSave: Boolean,
    /* menu props overrides */
    cover: {
      type: Boolean,
      default: true
    },
    /* end of menu props */
    disable: Boolean
  },
  emits: [
    "update:modelValue",
    "save",
    "cancel",
    "beforeShow",
    "show",
    "beforeHide",
    "hide"
  ],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const menuRef = ref(null);
    const initialValue = ref("");
    const currentModel = ref("");
    let validated = false;
    const scope = computed(() => {
      return injectProp({
        initialValue: initialValue.value,
        validate: props.validate,
        set,
        cancel,
        updatePosition
      }, "value", () => currentModel.value, (val) => {
        currentModel.value = val;
      });
    });
    function set() {
      if (props.validate(currentModel.value) === false) return;
      if (hasModelChanged() === true) {
        emit("save", currentModel.value, initialValue.value);
        emit("update:modelValue", currentModel.value);
      }
      closeMenu();
    }
    function cancel() {
      if (hasModelChanged() === true) {
        emit("cancel", currentModel.value, initialValue.value);
      }
      closeMenu();
    }
    function updatePosition() {
      nextTick(() => {
        menuRef.value.updatePosition();
      });
    }
    function hasModelChanged() {
      return isDeepEqual(currentModel.value, initialValue.value) === false;
    }
    function closeMenu() {
      validated = true;
      menuRef.value.hide();
    }
    function onBeforeShow() {
      validated = false;
      initialValue.value = cloneDeep(props.modelValue);
      currentModel.value = cloneDeep(props.modelValue);
      emit("beforeShow");
    }
    function onShow() {
      emit("show");
    }
    function onBeforeHide() {
      if (validated === false && hasModelChanged() === true) {
        if (props.autoSave === true && props.validate(currentModel.value) === true) {
          emit("save", currentModel.value, initialValue.value);
          emit("update:modelValue", currentModel.value);
        } else {
          emit("cancel", currentModel.value, initialValue.value);
        }
      }
      emit("beforeHide");
    }
    function onHide() {
      emit("hide");
    }
    function getContent() {
      const child = slots.default !== void 0 ? [].concat(slots.default(scope.value)) : [];
      props.title && child.unshift(
        h("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, props.title)
      );
      props.buttons === true && child.push(
        h("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [
          h(QBtn, {
            flat: true,
            color: props.color,
            label: props.labelCancel || $q.lang.label.cancel,
            onClick: cancel
          }),
          h(QBtn, {
            flat: true,
            color: props.color,
            label: props.labelSet || $q.lang.label.set,
            onClick: set
          })
        ])
      );
      return child;
    }
    Object.assign(proxy, {
      set,
      cancel,
      show(e) {
        menuRef.value?.show(e);
      },
      hide(e) {
        menuRef.value?.hide(e);
      },
      updatePosition
    });
    return () => {
      if (props.disable === true) return;
      return h(QMenu, {
        ref: menuRef,
        class: "q-popup-edit",
        cover: props.cover,
        onBeforeShow,
        onShow,
        onBeforeHide,
        onHide,
        onEscapeKey: cancel
      }, getContent);
    };
  }
});
function useHydration() {
  const isHydrated = ref(!isRuntimeSsrPreHydration.value);
  if (isHydrated.value === false) {
    onMounted(() => {
      isHydrated.value = true;
    });
  }
  return { isHydrated };
}
const hasObserver = typeof ResizeObserver !== "undefined";
const resizeProps = hasObserver === true ? {} : {
  style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
  url: "about:blank"
};
const QResizeObserver = createComponent({
  name: "QResizeObserver",
  props: {
    debounce: {
      type: [String, Number],
      default: 100
    }
  },
  emits: ["resize"],
  setup(props, { emit }) {
    let timer = null, targetEl, size = { width: -1, height: -1 };
    function trigger(immediately) {
      if (immediately === true || props.debounce === 0 || props.debounce === "0") {
        emitEvent();
      } else if (timer === null) {
        timer = setTimeout(emitEvent, props.debounce);
      }
    }
    function emitEvent() {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      if (targetEl) {
        const { offsetWidth: width, offsetHeight: height } = targetEl;
        if (width !== size.width || height !== size.height) {
          size = { width, height };
          emit("resize", size);
        }
      }
    }
    const { proxy } = getCurrentInstance();
    proxy.trigger = trigger;
    if (hasObserver === true) {
      let observer;
      const init = (stop2) => {
        targetEl = proxy.$el.parentNode;
        if (targetEl) {
          observer = new ResizeObserver(trigger);
          observer.observe(targetEl);
          emitEvent();
        } else if (stop2 !== true) {
          nextTick(() => {
            init(true);
          });
        }
      };
      onMounted(() => {
        init();
      });
      onBeforeUnmount(() => {
        timer !== null && clearTimeout(timer);
        if (observer !== void 0) {
          if (observer.disconnect !== void 0) {
            observer.disconnect();
          } else if (targetEl) {
            observer.unobserve(targetEl);
          }
        }
      });
      return noop;
    } else {
      let cleanup = function() {
        if (timer !== null) {
          clearTimeout(timer);
          timer = null;
        }
        if (curDocView !== void 0) {
          if (curDocView.removeEventListener !== void 0) {
            curDocView.removeEventListener("resize", trigger, listenOpts.passive);
          }
          curDocView = void 0;
        }
      }, onObjLoad = function() {
        cleanup();
        if (targetEl?.contentDocument) {
          curDocView = targetEl.contentDocument.defaultView;
          curDocView.addEventListener("resize", trigger, listenOpts.passive);
          emitEvent();
        }
      };
      const { isHydrated } = useHydration();
      let curDocView;
      onMounted(() => {
        nextTick(() => {
          targetEl = proxy.$el;
          targetEl && onObjLoad();
        });
      });
      onBeforeUnmount(cleanup);
      return () => {
        if (isHydrated.value === true) {
          return h("object", {
            class: "q--avoid-card-border",
            style: resizeProps.style,
            tabindex: -1,
            // fix for Firefox
            type: "text/html",
            data: resizeProps.url,
            "aria-hidden": "true",
            onLoad: onObjLoad
          });
        }
      };
    }
  }
});
const modifiersAll = {
  left: true,
  right: true,
  up: true,
  down: true,
  horizontal: true,
  vertical: true
};
const directionList = Object.keys(modifiersAll);
modifiersAll.all = true;
function getModifierDirections(mod) {
  const dir = {};
  for (const direction of directionList) {
    if (mod[direction] === true) {
      dir[direction] = true;
    }
  }
  if (Object.keys(dir).length === 0) {
    return modifiersAll;
  }
  if (dir.horizontal === true) {
    dir.left = dir.right = true;
  } else if (dir.left === true && dir.right === true) {
    dir.horizontal = true;
  }
  if (dir.vertical === true) {
    dir.up = dir.down = true;
  } else if (dir.up === true && dir.down === true) {
    dir.vertical = true;
  }
  if (dir.horizontal === true && dir.vertical === true) {
    dir.all = true;
  }
  return dir;
}
const avoidNodeNamesList = ["INPUT", "TEXTAREA"];
function shouldStart(evt, ctx) {
  return ctx.event === void 0 && evt.target !== void 0 && evt.target.draggable !== true && typeof ctx.handler === "function" && avoidNodeNamesList.includes(evt.target.nodeName.toUpperCase()) === false && (evt.qClonedBy === void 0 || evt.qClonedBy.indexOf(ctx.uid) === -1);
}
function getChanges(evt, ctx, isFinal) {
  const pos = position(evt);
  let dir, distX = pos.left - ctx.event.x, distY = pos.top - ctx.event.y, absX = Math.abs(distX), absY = Math.abs(distY);
  const direction = ctx.direction;
  if (direction.horizontal === true && direction.vertical !== true) {
    dir = distX < 0 ? "left" : "right";
  } else if (direction.horizontal !== true && direction.vertical === true) {
    dir = distY < 0 ? "up" : "down";
  } else if (direction.up === true && distY < 0) {
    dir = "up";
    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = "left";
      } else if (direction.right === true && distX > 0) {
        dir = "right";
      }
    }
  } else if (direction.down === true && distY > 0) {
    dir = "down";
    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = "left";
      } else if (direction.right === true && distX > 0) {
        dir = "right";
      }
    }
  } else if (direction.left === true && distX < 0) {
    dir = "left";
    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = "up";
      } else if (direction.down === true && distY > 0) {
        dir = "down";
      }
    }
  } else if (direction.right === true && distX > 0) {
    dir = "right";
    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = "up";
      } else if (direction.down === true && distY > 0) {
        dir = "down";
      }
    }
  }
  let synthetic = false;
  if (dir === void 0 && isFinal === false) {
    if (ctx.event.isFirst === true || ctx.event.lastDir === void 0) {
      return {};
    }
    dir = ctx.event.lastDir;
    synthetic = true;
    if (dir === "left" || dir === "right") {
      pos.left -= distX;
      absX = 0;
      distX = 0;
    } else {
      pos.top -= distY;
      absY = 0;
      distY = 0;
    }
  }
  return {
    synthetic,
    payload: {
      evt,
      touch: ctx.event.mouse !== true,
      mouse: ctx.event.mouse === true,
      position: pos,
      direction: dir,
      isFirst: ctx.event.isFirst,
      isFinal: isFinal === true,
      duration: Date.now() - ctx.event.time,
      distance: {
        x: absX,
        y: absY
      },
      offset: {
        x: distX,
        y: distY
      },
      delta: {
        x: pos.left - ctx.event.lastX,
        y: pos.top - ctx.event.lastY
      }
    }
  };
}
let uid = 0;
const TouchPan = createDirective(
  {
    name: "touch-pan",
    beforeMount(el, { value: value2, modifiers }) {
      if (modifiers.mouse !== true && client.has.touch !== true) return;
      function handleEvent(evt, mouseEvent) {
        if (modifiers.mouse === true && mouseEvent === true) {
          stopAndPrevent(evt);
        } else {
          modifiers.stop === true && stop(evt);
          modifiers.prevent === true && prevent(evt);
        }
      }
      const ctx = {
        uid: "qvtp_" + uid++,
        handler: value2,
        modifiers,
        direction: getModifierDirections(modifiers),
        noop,
        mouseStart(evt) {
          if (shouldStart(evt, ctx) && leftClick(evt)) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", "notPassiveCapture"],
              [document, "mouseup", "end", "passiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (shouldStart(evt, ctx)) {
            const target = evt.target;
            addEvt(ctx, "temp", [
              [target, "touchmove", "move", "notPassiveCapture"],
              [target, "touchcancel", "end", "passiveCapture"],
              [target, "touchend", "end", "passiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          client.is.firefox === true && preventDraggable(el, true);
          ctx.lastEvt = evt;
          if (mouseEvent === true || modifiers.stop === true) {
            if (ctx.direction.all !== true && (mouseEvent !== true || ctx.modifiers.mouseAllDir !== true && ctx.modifiers.mousealldir !== true)) {
              const clone = evt.type.indexOf("mouse") !== -1 ? new MouseEvent(evt.type, evt) : new TouchEvent(evt.type, evt);
              evt.defaultPrevented === true && prevent(clone);
              evt.cancelBubble === true && stop(clone);
              Object.assign(clone, {
                qKeyEvent: evt.qKeyEvent,
                qClickOutside: evt.qClickOutside,
                qAnchorHandled: evt.qAnchorHandled,
                qClonedBy: evt.qClonedBy === void 0 ? [ctx.uid] : evt.qClonedBy.concat(ctx.uid)
              });
              ctx.initialEvent = {
                target: evt.target,
                event: clone
              };
            }
            stop(evt);
          }
          const { left, top } = position(evt);
          ctx.event = {
            x: left,
            y: top,
            time: Date.now(),
            mouse: mouseEvent === true,
            detected: false,
            isFirst: true,
            isFinal: false,
            lastX: left,
            lastY: top
          };
        },
        move(evt) {
          if (ctx.event === void 0) return;
          const pos = position(evt), distX = pos.left - ctx.event.x, distY = pos.top - ctx.event.y;
          if (distX === 0 && distY === 0) return;
          ctx.lastEvt = evt;
          const isMouseEvt = ctx.event.mouse === true;
          const start = () => {
            handleEvent(evt, isMouseEvt);
            let cursor;
            if (modifiers.preserveCursor !== true && modifiers.preservecursor !== true) {
              cursor = document.documentElement.style.cursor || "";
              document.documentElement.style.cursor = "grabbing";
            }
            isMouseEvt === true && document.body.classList.add("no-pointer-events--children");
            document.body.classList.add("non-selectable");
            clearSelection();
            ctx.styleCleanup = (withDelayedFn) => {
              ctx.styleCleanup = void 0;
              if (cursor !== void 0) {
                document.documentElement.style.cursor = cursor;
              }
              document.body.classList.remove("non-selectable");
              if (isMouseEvt === true) {
                const remove = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                if (withDelayedFn !== void 0) {
                  setTimeout(() => {
                    remove();
                    withDelayedFn();
                  }, 50);
                } else {
                  remove();
                }
              } else if (withDelayedFn !== void 0) {
                withDelayedFn();
              }
            };
          };
          if (ctx.event.detected === true) {
            ctx.event.isFirst !== true && handleEvent(evt, ctx.event.mouse);
            const { payload, synthetic } = getChanges(evt, ctx, false);
            if (payload !== void 0) {
              if (ctx.handler(payload) === false) {
                ctx.end(evt);
              } else {
                if (ctx.styleCleanup === void 0 && ctx.event.isFirst === true) {
                  start();
                }
                ctx.event.lastX = payload.position.left;
                ctx.event.lastY = payload.position.top;
                ctx.event.lastDir = synthetic === true ? void 0 : payload.direction;
                ctx.event.isFirst = false;
              }
            }
            return;
          }
          if (ctx.direction.all === true || isMouseEvt === true && (ctx.modifiers.mouseAllDir === true || ctx.modifiers.mousealldir === true)) {
            start();
            ctx.event.detected = true;
            ctx.move(evt);
            return;
          }
          const absX = Math.abs(distX), absY = Math.abs(distY);
          if (absX !== absY) {
            if (ctx.direction.horizontal === true && absX > absY || ctx.direction.vertical === true && absX < absY || ctx.direction.up === true && absX < absY && distY < 0 || ctx.direction.down === true && absX < absY && distY > 0 || ctx.direction.left === true && absX > absY && distX < 0 || ctx.direction.right === true && absX > absY && distX > 0) {
              ctx.event.detected = true;
              ctx.move(evt);
            } else {
              ctx.end(evt, true);
            }
          }
        },
        end(evt, abort) {
          if (ctx.event === void 0) return;
          cleanEvt(ctx, "temp");
          client.is.firefox === true && preventDraggable(el, false);
          if (abort === true) {
            ctx.styleCleanup?.();
            if (ctx.event.detected !== true && ctx.initialEvent !== void 0) {
              ctx.initialEvent.target.dispatchEvent(ctx.initialEvent.event);
            }
          } else if (ctx.event.detected === true) {
            ctx.event.isFirst === true && ctx.handler(getChanges(evt === void 0 ? ctx.lastEvt : evt, ctx).payload);
            const { payload } = getChanges(evt === void 0 ? ctx.lastEvt : evt, ctx, true);
            const fn = () => {
              ctx.handler(payload);
            };
            if (ctx.styleCleanup !== void 0) {
              ctx.styleCleanup(fn);
            } else {
              fn();
            }
          }
          ctx.event = void 0;
          ctx.initialEvent = void 0;
          ctx.lastEvt = void 0;
        }
      };
      el.__qtouchpan = ctx;
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
      const ctx = el.__qtouchpan;
      if (ctx !== void 0) {
        if (bindings.oldValue !== bindings.value) {
          typeof value !== "function" && ctx.end();
          ctx.handler = bindings.value;
        }
        ctx.direction = getModifierDirections(bindings.modifiers);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchpan;
      if (ctx !== void 0) {
        ctx.event !== void 0 && ctx.end();
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        client.is.firefox === true && preventDraggable(el, false);
        ctx.styleCleanup?.();
        delete el.__qtouchpan;
      }
    }
  }
);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NoteIcon",
  props: {
    element: { type: Object, default: null },
    elementType: { type: String, default: "" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const props = __props;
    const note = computed({
      get: () => {
        return props.element ? props.element.note : "";
      },
      set: (value2) => {
        if (props.element) {
          store.updateElement(props.element, { note: value2 });
        }
      }
    });
    const noteClass = computed(() => {
      return note.value ? ["note"] : ["note", "note-is-empty"];
    });
    const noteIcon = computed(() => note.value ? "mdi-chat" : "mdi-chat-outline");
    const __returned__ = { store, props, note, noteClass, noteIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "note-tooltip" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QBtn, {
    size: "xs",
    flat: "",
    round: "",
    class: normalizeClass($setup.noteClass),
    icon: $setup.noteIcon
  }, {
    default: withCtx(() => [
      createVNode(QPopupEdit, {
        modelValue: $setup.note,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.note = $event),
        "auto-save": "",
        buttons: ""
      }, {
        default: withCtx((scope) => [
          createVNode(QInput, {
            label: "Note",
            type: "textarea",
            modelValue: scope.value,
            "onUpdate:modelValue": ($event) => scope.value = $event,
            onKeyup: [
              withKeys(withModifiers(scope.set, ["ctrl"]), ["enter"]),
              withKeys(scope.cancel, ["esc"])
            ],
            dense: "",
            autogrow: "",
            autofocus: ""
          }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      $setup.note ? (openBlock(), createBlock(QTooltip, {
        key: 0,
        class: "bg-blue-grey-2 text-black"
      }, {
        default: withCtx(() => [
          createBaseVNode("pre", _hoisted_1, toDisplayString($setup.note), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["class", "icon"]);
}
const NoteIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-20a9e075"], ["__file", "NoteIcon.vue"]]);
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
    let value2 = props.min;
    do {
      acc.push(value2);
      value2 += step;
    } while (value2 < max);
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
      return markerTicks.value.map((value2) => {
        const item = def(value2);
        return isObject(item) === true ? { ...item, value: value2 } : { value: value2, label: item };
      });
    }
    const filterFn = ({ value: value2 }) => value2 >= props.min && value2 <= props.max;
    if (Array.isArray(def) === true) {
      return def.map((item) => isObject(item) === true ? item : { value: item }).filter(filterFn);
    }
    return Object.keys(def).map((key) => {
      const item = def[key];
      const value2 = Number(key);
      return isObject(item) === true ? { ...item, value: value2 } : { value: value2, label: item };
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
export {
  NoteIcon as N,
  QPopupEdit as Q,
  TouchPan as T,
  QSlider as a,
  QResizeObserver as b,
  getModifierDirections as g,
  shouldStart as s
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVNsaWRlci1EcWVGVlpWdS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvY2xvbmUvY2xvbmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3BvcHVwLWVkaXQvUVBvcHVwRWRpdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3VzZS1oeWRyYXRpb24vdXNlLWh5ZHJhdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcmVzaXplLW9ic2VydmVyL1FSZXNpemVPYnNlcnZlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUudG91Y2gvdG91Y2guanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9kaXJlY3RpdmVzL3RvdWNoLXBhbi9Ub3VjaFBhbi5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05vdGVJY29uLnZ1ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2xpZGVyL3VzZS1zbGlkZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlci9RU2xpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDAyOTQwNThcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVEZWVwIChkYXRhLCBoYXNoID0gbmV3IFdlYWtNYXAoKSkge1xuICBpZiAoT2JqZWN0KGRhdGEpICE9PSBkYXRhKSByZXR1cm4gZGF0YVxuICBpZiAoaGFzaC5oYXMoZGF0YSkpIHJldHVybiBoYXNoLmdldChkYXRhKVxuXG4gIGNvbnN0IHJlc3VsdCA9IGRhdGEgaW5zdGFuY2VvZiBEYXRlXG4gICAgPyBuZXcgRGF0ZShkYXRhKVxuICAgIDogKGRhdGEgaW5zdGFuY2VvZiBSZWdFeHBcbiAgICAgICAgPyBuZXcgUmVnRXhwKGRhdGEuc291cmNlLCBkYXRhLmZsYWdzKVxuICAgICAgICA6IChkYXRhIGluc3RhbmNlb2YgU2V0XG4gICAgICAgICAgICA/IG5ldyBTZXQoKVxuICAgICAgICAgICAgOiAoZGF0YSBpbnN0YW5jZW9mIE1hcFxuICAgICAgICAgICAgICAgID8gbmV3IE1hcCgpXG4gICAgICAgICAgICAgICAgOiAodHlwZW9mIGRhdGEuY29uc3RydWN0b3IgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgICAgICAgICAgICAgICAgIDogKGRhdGEucHJvdG90eXBlICE9PSB2b2lkIDAgJiYgdHlwZW9mIGRhdGEucHJvdG90eXBlLmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IGRhdGEuY29uc3RydWN0b3IoKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgIClcblxuICBpZiAodHlwZW9mIGRhdGEuY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRhdGEudmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHZhbCA9IGRhdGEudmFsdWVPZigpXG5cbiAgICBpZiAoT2JqZWN0KHZhbCkgIT09IHZhbCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IGRhdGEuY29uc3RydWN0b3IodmFsKVxuXG4gICAgICBoYXNoLnNldChkYXRhLCByZXN1bHQpXG5cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cblxuICBoYXNoLnNldChkYXRhLCByZXN1bHQpXG5cbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICBkYXRhLmZvckVhY2godmFsID0+IHtcbiAgICAgIHJlc3VsdC5hZGQoY2xvbmVEZWVwKHZhbCwgaGFzaCkpXG4gICAgfSlcbiAgfVxuICBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgZGF0YS5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xuICAgICAgcmVzdWx0LnNldChrZXksIGNsb25lRGVlcCh2YWwsIGhhc2gpKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICByZXN1bHQsXG4gICAgLi4uT2JqZWN0LmtleXMoZGF0YSkubWFwKGtleSA9PiAoeyBbIGtleSBdOiBjbG9uZURlZXAoZGF0YVsga2V5IF0sIGhhc2gpIH0pKVxuICApXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBuZXh0VGljaywgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUU1lbnUgZnJvbSAnLi4vbWVudS9RTWVudS5qcydcbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgY2xvbmUgZnJvbSAnLi4vLi4vdXRpbHMvY2xvbmUvY2xvbmUuanMnXG5pbXBvcnQgeyBpc0RlZXBFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzL2lzLmpzJ1xuaW1wb3J0IHsgaW5qZWN0UHJvcCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuaW5qZWN0LW9iai1wcm9wL2luamVjdC1vYmotcHJvcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQb3B1cEVkaXQnLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgYnV0dG9uczogQm9vbGVhbixcbiAgICBsYWJlbFNldDogU3RyaW5nLFxuICAgIGxhYmVsQ2FuY2VsOiBTdHJpbmcsXG5cbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknXG4gICAgfSxcbiAgICB2YWxpZGF0ZToge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiAoKSA9PiB0cnVlXG4gICAgfSxcblxuICAgIGF1dG9TYXZlOiBCb29sZWFuLFxuXG4gICAgLyogbWVudSBwcm9wcyBvdmVycmlkZXMgKi9cbiAgICBjb3Zlcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIC8qIGVuZCBvZiBtZW51IHByb3BzICovXG5cbiAgICBkaXNhYmxlOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAndXBkYXRlOm1vZGVsVmFsdWUnLCAnc2F2ZScsICdjYW5jZWwnLFxuICAgICdiZWZvcmVTaG93JywgJ3Nob3cnLCAnYmVmb3JlSGlkZScsICdoaWRlJ1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gICAgY29uc3QgbWVudVJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gcmVmKCcnKVxuICAgIGNvbnN0IGN1cnJlbnRNb2RlbCA9IHJlZignJylcblxuICAgIGxldCB2YWxpZGF0ZWQgPSBmYWxzZVxuXG4gICAgY29uc3Qgc2NvcGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gaW5qZWN0UHJvcCh7XG4gICAgICAgIGluaXRpYWxWYWx1ZTogaW5pdGlhbFZhbHVlLnZhbHVlLFxuICAgICAgICB2YWxpZGF0ZTogcHJvcHMudmFsaWRhdGUsXG4gICAgICAgIHNldCxcbiAgICAgICAgY2FuY2VsLFxuICAgICAgICB1cGRhdGVQb3NpdGlvblxuICAgICAgfSwgJ3ZhbHVlJywgKCkgPT4gY3VycmVudE1vZGVsLnZhbHVlLCB2YWwgPT4geyBjdXJyZW50TW9kZWwudmFsdWUgPSB2YWwgfSlcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gc2V0ICgpIHtcbiAgICAgIGlmIChwcm9wcy52YWxpZGF0ZShjdXJyZW50TW9kZWwudmFsdWUpID09PSBmYWxzZSkgcmV0dXJuXG5cbiAgICAgIGlmIChoYXNNb2RlbENoYW5nZWQoKSA9PT0gdHJ1ZSkge1xuICAgICAgICBlbWl0KCdzYXZlJywgY3VycmVudE1vZGVsLnZhbHVlLCBpbml0aWFsVmFsdWUudmFsdWUpXG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgY3VycmVudE1vZGVsLnZhbHVlKVxuICAgICAgfVxuXG4gICAgICBjbG9zZU1lbnUoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbCAoKSB7XG4gICAgICBpZiAoaGFzTW9kZWxDaGFuZ2VkKCkgPT09IHRydWUpIHtcbiAgICAgICAgZW1pdCgnY2FuY2VsJywgY3VycmVudE1vZGVsLnZhbHVlLCBpbml0aWFsVmFsdWUudmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGNsb3NlTWVudSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24gKCkge1xuICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBtZW51UmVmLnZhbHVlLnVwZGF0ZVBvc2l0aW9uKClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzTW9kZWxDaGFuZ2VkICgpIHtcbiAgICAgIHJldHVybiBpc0RlZXBFcXVhbChjdXJyZW50TW9kZWwudmFsdWUsIGluaXRpYWxWYWx1ZS52YWx1ZSkgPT09IGZhbHNlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VNZW51ICgpIHtcbiAgICAgIHZhbGlkYXRlZCA9IHRydWVcbiAgICAgIG1lbnVSZWYudmFsdWUuaGlkZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25CZWZvcmVTaG93ICgpIHtcbiAgICAgIHZhbGlkYXRlZCA9IGZhbHNlXG4gICAgICBpbml0aWFsVmFsdWUudmFsdWUgPSBjbG9uZShwcm9wcy5tb2RlbFZhbHVlKVxuICAgICAgY3VycmVudE1vZGVsLnZhbHVlID0gY2xvbmUocHJvcHMubW9kZWxWYWx1ZSlcbiAgICAgIGVtaXQoJ2JlZm9yZVNob3cnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2hvdyAoKSB7XG4gICAgICBlbWl0KCdzaG93JylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkJlZm9yZUhpZGUgKCkge1xuICAgICAgaWYgKHZhbGlkYXRlZCA9PT0gZmFsc2UgJiYgaGFzTW9kZWxDaGFuZ2VkKCkgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHByb3BzLmF1dG9TYXZlID09PSB0cnVlICYmIHByb3BzLnZhbGlkYXRlKGN1cnJlbnRNb2RlbC52YWx1ZSkgPT09IHRydWUpIHtcbiAgICAgICAgICBlbWl0KCdzYXZlJywgY3VycmVudE1vZGVsLnZhbHVlLCBpbml0aWFsVmFsdWUudmFsdWUpXG4gICAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBjdXJyZW50TW9kZWwudmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZW1pdCgnY2FuY2VsJywgY3VycmVudE1vZGVsLnZhbHVlLCBpbml0aWFsVmFsdWUudmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZW1pdCgnYmVmb3JlSGlkZScpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25IaWRlICgpIHtcbiAgICAgIGVtaXQoJ2hpZGUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBzbG90cy5kZWZhdWx0ICE9PSB2b2lkIDBcbiAgICAgICAgPyBbXS5jb25jYXQoc2xvdHMuZGVmYXVsdChzY29wZS52YWx1ZSkpXG4gICAgICAgIDogW11cblxuICAgICAgcHJvcHMudGl0bGUgJiYgY2hpbGQudW5zaGlmdChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtZGlhbG9nX190aXRsZSBxLW10LXNtIHEtbWItc20nIH0sIHByb3BzLnRpdGxlKVxuICAgICAgKVxuXG4gICAgICBwcm9wcy5idXR0b25zID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXBvcHVwLWVkaXRfX2J1dHRvbnMgcm93IGp1c3RpZnktY2VudGVyIG5vLXdyYXAnIH0sIFtcbiAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICBsYWJlbDogcHJvcHMubGFiZWxDYW5jZWwgfHwgJHEubGFuZy5sYWJlbC5jYW5jZWwsXG4gICAgICAgICAgICBvbkNsaWNrOiBjYW5jZWxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICBsYWJlbDogcHJvcHMubGFiZWxTZXQgfHwgJHEubGFuZy5sYWJlbC5zZXQsXG4gICAgICAgICAgICBvbkNsaWNrOiBzZXRcbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICBzZXQsXG4gICAgICBjYW5jZWwsXG4gICAgICBzaG93IChlKSB7IG1lbnVSZWYudmFsdWU/LnNob3coZSkgfSxcbiAgICAgIGhpZGUgKGUpIHsgbWVudVJlZi52YWx1ZT8uaGlkZShlKSB9LFxuICAgICAgdXBkYXRlUG9zaXRpb25cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSByZXR1cm5cblxuICAgICAgcmV0dXJuIGgoUU1lbnUsIHtcbiAgICAgICAgcmVmOiBtZW51UmVmLFxuICAgICAgICBjbGFzczogJ3EtcG9wdXAtZWRpdCcsXG4gICAgICAgIGNvdmVyOiBwcm9wcy5jb3ZlcixcbiAgICAgICAgb25CZWZvcmVTaG93LFxuICAgICAgICBvblNob3csXG4gICAgICAgIG9uQmVmb3JlSGlkZSxcbiAgICAgICAgb25IaWRlLFxuICAgICAgICBvbkVzY2FwZUtleTogY2FuY2VsXG4gICAgICB9LCBnZXRDb250ZW50KVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IHJlZiwgb25Nb3VudGVkIH0gZnJvbSAndnVlJ1xuXG4vLyB1c2luZyBpdCB0byBtYW5hZ2UgU1NSIHJlbmRlcmluZyB3aXRoIGJlc3QgcGVyZm9ybWFuY2VcbmltcG9ydCB7IGlzUnVudGltZVNzclByZUh5ZHJhdGlvbiB9IGZyb20gJy4uLy4uL3BsdWdpbnMvcGxhdGZvcm0vUGxhdGZvcm0uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaXNIeWRyYXRlZCA9IHJlZighaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uLnZhbHVlKVxuXG4gIGlmIChpc0h5ZHJhdGVkLnZhbHVlID09PSBmYWxzZSkge1xuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBpc0h5ZHJhdGVkLnZhbHVlID0gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4geyBpc0h5ZHJhdGVkIH1cbn1cbiIsImltcG9ydCB7IGgsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlSHlkcmF0aW9uIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS1oeWRyYXRpb24vdXNlLWh5ZHJhdGlvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgbGlzdGVuT3B0cywgbm9vcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50L2V2ZW50LmpzJ1xuXG5jb25zdCBoYXNPYnNlcnZlciA9IHR5cGVvZiBSZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcbmNvbnN0IHJlc2l6ZVByb3BzID0gaGFzT2JzZXJ2ZXIgPT09IHRydWVcbiAgPyB7fVxuICA6IHtcbiAgICAgIHN0eWxlOiAnZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6LTE7JyxcbiAgICAgIHVybDogJ2Fib3V0OmJsYW5rJ1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FSZXNpemVPYnNlcnZlcicsXG5cbiAgcHJvcHM6IHtcbiAgICBkZWJvdW5jZToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTAwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXNpemUnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGlmIChfX1FVQVNBUl9TU1JfU0VSVkVSX18pIHsgcmV0dXJuIG5vb3AgfVxuXG4gICAgbGV0IHRpbWVyID0gbnVsbCwgdGFyZ2V0RWwsIHNpemUgPSB7IHdpZHRoOiAtMSwgaGVpZ2h0OiAtMSB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyIChpbW1lZGlhdGVseSkge1xuICAgICAgaWYgKGltbWVkaWF0ZWx5ID09PSB0cnVlIHx8IHByb3BzLmRlYm91bmNlID09PSAwIHx8IHByb3BzLmRlYm91bmNlID09PSAnMCcpIHtcbiAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChlbWl0RXZlbnQsIHByb3BzLmRlYm91bmNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXRFdmVudCAoKSB7XG4gICAgICBpZiAodGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldEVsKSB7XG4gICAgICAgIGNvbnN0IHsgb2Zmc2V0V2lkdGg6IHdpZHRoLCBvZmZzZXRIZWlnaHQ6IGhlaWdodCB9ID0gdGFyZ2V0RWxcblxuICAgICAgICBpZiAod2lkdGggIT09IHNpemUud2lkdGggfHwgaGVpZ2h0ICE9PSBzaXplLmhlaWdodCkge1xuICAgICAgICAgIHNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfVxuICAgICAgICAgIGVtaXQoJ3Jlc2l6ZScsIHNpemUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RcbiAgICBwcm94eS50cmlnZ2VyID0gdHJpZ2dlclxuXG4gICAgaWYgKGhhc09ic2VydmVyID09PSB0cnVlKSB7XG4gICAgICBsZXQgb2JzZXJ2ZXJcblxuICAgICAgLy8gaW5pdGlhbGl6ZSBhcyBzb29uIGFzIHBvc3NpYmxlXG4gICAgICBjb25zdCBpbml0ID0gc3RvcCA9PiB7XG4gICAgICAgIHRhcmdldEVsID0gcHJveHkuJGVsLnBhcmVudE5vZGVcblxuICAgICAgICBpZiAodGFyZ2V0RWwpIHtcbiAgICAgICAgICBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcih0cmlnZ2VyKVxuICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0RWwpXG4gICAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdG9wICE9PSB0cnVlKSB7XG4gICAgICAgICAgbmV4dFRpY2soKCkgPT4geyBpbml0KHRydWUpIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25Nb3VudGVkKCgpID0+IHsgaW5pdCgpIH0pXG5cbiAgICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICAgIHRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZW91dCh0aW1lcilcblxuICAgICAgICBpZiAob2JzZXJ2ZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5kaXNjb25uZWN0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICh0YXJnZXRFbCkgeyAvLyBGRiBmb3IgQW5kcm9pZFxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldEVsKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9XG4gICAgZWxzZSB7IC8vIG5vIG9ic2VydmVyLCBzbyBmYWxsYmFjayB0byBvbGQgaWZyYW1lIG1ldGhvZFxuICAgICAgY29uc3QgeyBpc0h5ZHJhdGVkIH0gPSB1c2VIeWRyYXRpb24oKVxuXG4gICAgICBsZXQgY3VyRG9jVmlld1xuXG4gICAgICBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICAgICAgaWYgKHRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICAgIHRpbWVyID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1ckRvY1ZpZXcgIT09IHZvaWQgMCkge1xuICAgICAgICAgIC8vIGlPUyBpcyBmdXp6eSwgbmVlZCB0byBjaGVjayBpdCBmaXJzdFxuICAgICAgICAgIGlmIChjdXJEb2NWaWV3LnJlbW92ZUV2ZW50TGlzdGVuZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgY3VyRG9jVmlldy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0cmlnZ2VyLCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGN1ckRvY1ZpZXcgPSB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvbk9iakxvYWQgKCkge1xuICAgICAgICBjbGVhbnVwKClcblxuICAgICAgICBpZiAodGFyZ2V0RWw/LmNvbnRlbnREb2N1bWVudCkge1xuICAgICAgICAgIGN1ckRvY1ZpZXcgPSB0YXJnZXRFbC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXdcbiAgICAgICAgICBjdXJEb2NWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRyaWdnZXIsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgICBlbWl0RXZlbnQoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0YXJnZXRFbCA9IHByb3h5LiRlbFxuICAgICAgICAgIHRhcmdldEVsICYmIG9uT2JqTG9hZCgpXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBvbkJlZm9yZVVubW91bnQoY2xlYW51cClcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGlzSHlkcmF0ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gaCgnb2JqZWN0Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLS1hdm9pZC1jYXJkLWJvcmRlcicsXG4gICAgICAgICAgICBzdHlsZTogcmVzaXplUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICB0YWJpbmRleDogLTEsIC8vIGZpeCBmb3IgRmlyZWZveFxuICAgICAgICAgICAgdHlwZTogJ3RleHQvaHRtbCcsXG4gICAgICAgICAgICBkYXRhOiByZXNpemVQcm9wcy51cmwsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICBvbkxvYWQ6IG9uT2JqTG9hZFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iLCJjb25zdCBtb2RpZmllcnNBbGwgPSB7XG4gIGxlZnQ6IHRydWUsXG4gIHJpZ2h0OiB0cnVlLFxuICB1cDogdHJ1ZSxcbiAgZG93bjogdHJ1ZSxcbiAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgdmVydGljYWw6IHRydWVcbn1cblxuY29uc3QgZGlyZWN0aW9uTGlzdCA9IE9iamVjdC5rZXlzKG1vZGlmaWVyc0FsbClcblxubW9kaWZpZXJzQWxsLmFsbCA9IHRydWVcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGlmaWVyRGlyZWN0aW9ucyAobW9kKSB7XG4gIGNvbnN0IGRpciA9IHt9XG5cbiAgZm9yIChjb25zdCBkaXJlY3Rpb24gb2YgZGlyZWN0aW9uTGlzdCkge1xuICAgIGlmIChtb2RbIGRpcmVjdGlvbiBdID09PSB0cnVlKSB7XG4gICAgICBkaXJbIGRpcmVjdGlvbiBdID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhkaXIpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBtb2RpZmllcnNBbGxcbiAgfVxuXG4gIGlmIChkaXIuaG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgIGRpci5sZWZ0ID0gZGlyLnJpZ2h0ID0gdHJ1ZVxuICB9XG4gIGVsc2UgaWYgKGRpci5sZWZ0ID09PSB0cnVlICYmIGRpci5yaWdodCA9PT0gdHJ1ZSkge1xuICAgIGRpci5ob3Jpem9udGFsID0gdHJ1ZVxuICB9XG5cbiAgaWYgKGRpci52ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgIGRpci51cCA9IGRpci5kb3duID0gdHJ1ZVxuICB9XG4gIGVsc2UgaWYgKGRpci51cCA9PT0gdHJ1ZSAmJiBkaXIuZG93biA9PT0gdHJ1ZSkge1xuICAgIGRpci52ZXJ0aWNhbCA9IHRydWVcbiAgfVxuXG4gIGlmIChkaXIuaG9yaXpvbnRhbCA9PT0gdHJ1ZSAmJiBkaXIudmVydGljYWwgPT09IHRydWUpIHtcbiAgICBkaXIuYWxsID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGRpclxufVxuXG4vLyBUaGlzIGlzIGVzcGVjaWFsbHkgaW1wb3J0YW50IChub3QgdGhlIG1haW4gcmVhc29uLCBidXQgaW1wb3J0YW50KVxuLy8gZm9yIFRvdWNoU3dpcGUgZGlyZWN0aXZlIHJ1bm5pbmcgb24gRmlyZWZveFxuLy8gYmVjYXVzZSB0ZXh0IHNlbGVjdGlvbiBvbiBzdWNoIGVsZW1lbnRzIGNhbm5vdCBiZSBkZXRlcm1pbmVkXG4vLyB3aXRob3V0IGFkZGl0aW9uYWwgd29yayAob24gdG9wIG9mIGdldFNlbGVjdGlvbigpIEFQSSlcbi8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg1Njg2XG5jb25zdCBhdm9pZE5vZGVOYW1lc0xpc3QgPSBbICdJTlBVVCcsICdURVhUQVJFQScgXVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkU3RhcnQgKGV2dCwgY3R4KSB7XG4gIHJldHVybiBjdHguZXZlbnQgPT09IHZvaWQgMFxuICAgICYmIGV2dC50YXJnZXQgIT09IHZvaWQgMFxuICAgICYmIGV2dC50YXJnZXQuZHJhZ2dhYmxlICE9PSB0cnVlXG4gICAgJiYgdHlwZW9mIGN0eC5oYW5kbGVyID09PSAnZnVuY3Rpb24nXG4gICAgJiYgYXZvaWROb2RlTmFtZXNMaXN0LmluY2x1ZGVzKGV2dC50YXJnZXQubm9kZU5hbWUudG9VcHBlckNhc2UoKSkgPT09IGZhbHNlXG4gICAgJiYgKGV2dC5xQ2xvbmVkQnkgPT09IHZvaWQgMCB8fCBldnQucUNsb25lZEJ5LmluZGV4T2YoY3R4LnVpZCkgPT09IC0xKVxufVxuIiwiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9wbGF0Zm9ybS9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IHsgY3JlYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0TW9kaWZpZXJEaXJlY3Rpb25zLCBzaG91bGRTdGFydCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUudG91Y2gvdG91Y2guanMnXG5pbXBvcnQgeyBhZGRFdnQsIGNsZWFuRXZ0LCBwb3NpdGlvbiwgbGVmdENsaWNrLCBwcmV2ZW50LCBzdG9wLCBzdG9wQW5kUHJldmVudCwgcHJldmVudERyYWdnYWJsZSwgbm9vcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50L2V2ZW50LmpzJ1xuaW1wb3J0IHsgY2xlYXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnNlbGVjdGlvbi9zZWxlY3Rpb24uanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtL25vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0uanMnXG5cbmZ1bmN0aW9uIGdldENoYW5nZXMgKGV2dCwgY3R4LCBpc0ZpbmFsKSB7XG4gIGNvbnN0IHBvcyA9IHBvc2l0aW9uKGV2dClcbiAgbGV0XG4gICAgZGlyLFxuICAgIGRpc3RYID0gcG9zLmxlZnQgLSBjdHguZXZlbnQueCxcbiAgICBkaXN0WSA9IHBvcy50b3AgLSBjdHguZXZlbnQueSxcbiAgICBhYnNYID0gTWF0aC5hYnMoZGlzdFgpLFxuICAgIGFic1kgPSBNYXRoLmFicyhkaXN0WSlcblxuICBjb25zdCBkaXJlY3Rpb24gPSBjdHguZGlyZWN0aW9uXG5cbiAgaWYgKGRpcmVjdGlvbi5ob3Jpem9udGFsID09PSB0cnVlICYmIGRpcmVjdGlvbi52ZXJ0aWNhbCAhPT0gdHJ1ZSkge1xuICAgIGRpciA9IGRpc3RYIDwgMCA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24uaG9yaXpvbnRhbCAhPT0gdHJ1ZSAmJiBkaXJlY3Rpb24udmVydGljYWwgPT09IHRydWUpIHtcbiAgICBkaXIgPSBkaXN0WSA8IDAgPyAndXAnIDogJ2Rvd24nXG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLnVwID09PSB0cnVlICYmIGRpc3RZIDwgMCkge1xuICAgIGRpciA9ICd1cCdcbiAgICBpZiAoYWJzWCA+IGFic1kpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24ubGVmdCA9PT0gdHJ1ZSAmJiBkaXN0WCA8IDApIHtcbiAgICAgICAgZGlyID0gJ2xlZnQnXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24ucmlnaHQgPT09IHRydWUgJiYgZGlzdFggPiAwKSB7XG4gICAgICAgIGRpciA9ICdyaWdodCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLmRvd24gPT09IHRydWUgJiYgZGlzdFkgPiAwKSB7XG4gICAgZGlyID0gJ2Rvd24nXG4gICAgaWYgKGFic1ggPiBhYnNZKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uLmxlZnQgPT09IHRydWUgJiYgZGlzdFggPCAwKSB7XG4gICAgICAgIGRpciA9ICdsZWZ0J1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlICYmIGRpc3RYID4gMCkge1xuICAgICAgICBkaXIgPSAncmlnaHQnXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlICYmIGRpc3RYIDwgMCkge1xuICAgIGRpciA9ICdsZWZ0J1xuICAgIGlmIChhYnNYIDwgYWJzWSkge1xuICAgICAgaWYgKGRpcmVjdGlvbi51cCA9PT0gdHJ1ZSAmJiBkaXN0WSA8IDApIHtcbiAgICAgICAgZGlyID0gJ3VwJ1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uLmRvd24gPT09IHRydWUgJiYgZGlzdFkgPiAwKSB7XG4gICAgICAgIGRpciA9ICdkb3duJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24ucmlnaHQgPT09IHRydWUgJiYgZGlzdFggPiAwKSB7XG4gICAgZGlyID0gJ3JpZ2h0J1xuICAgIGlmIChhYnNYIDwgYWJzWSkge1xuICAgICAgaWYgKGRpcmVjdGlvbi51cCA9PT0gdHJ1ZSAmJiBkaXN0WSA8IDApIHtcbiAgICAgICAgZGlyID0gJ3VwJ1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uLmRvd24gPT09IHRydWUgJiYgZGlzdFkgPiAwKSB7XG4gICAgICAgIGRpciA9ICdkb3duJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxldCBzeW50aGV0aWMgPSBmYWxzZVxuXG4gIGlmIChkaXIgPT09IHZvaWQgMCAmJiBpc0ZpbmFsID09PSBmYWxzZSkge1xuICAgIGlmIChjdHguZXZlbnQuaXNGaXJzdCA9PT0gdHJ1ZSB8fCBjdHguZXZlbnQubGFzdERpciA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBkaXIgPSBjdHguZXZlbnQubGFzdERpclxuICAgIHN5bnRoZXRpYyA9IHRydWVcblxuICAgIGlmIChkaXIgPT09ICdsZWZ0JyB8fCBkaXIgPT09ICdyaWdodCcpIHtcbiAgICAgIHBvcy5sZWZ0IC09IGRpc3RYXG4gICAgICBhYnNYID0gMFxuICAgICAgZGlzdFggPSAwXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcG9zLnRvcCAtPSBkaXN0WVxuICAgICAgYWJzWSA9IDBcbiAgICAgIGRpc3RZID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3ludGhldGljLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGV2dCxcbiAgICAgIHRvdWNoOiBjdHguZXZlbnQubW91c2UgIT09IHRydWUsXG4gICAgICBtb3VzZTogY3R4LmV2ZW50Lm1vdXNlID09PSB0cnVlLFxuICAgICAgcG9zaXRpb246IHBvcyxcbiAgICAgIGRpcmVjdGlvbjogZGlyLFxuICAgICAgaXNGaXJzdDogY3R4LmV2ZW50LmlzRmlyc3QsXG4gICAgICBpc0ZpbmFsOiBpc0ZpbmFsID09PSB0cnVlLFxuICAgICAgZHVyYXRpb246IERhdGUubm93KCkgLSBjdHguZXZlbnQudGltZSxcbiAgICAgIGRpc3RhbmNlOiB7XG4gICAgICAgIHg6IGFic1gsXG4gICAgICAgIHk6IGFic1lcbiAgICAgIH0sXG4gICAgICBvZmZzZXQ6IHtcbiAgICAgICAgeDogZGlzdFgsXG4gICAgICAgIHk6IGRpc3RZXG4gICAgICB9LFxuICAgICAgZGVsdGE6IHtcbiAgICAgICAgeDogcG9zLmxlZnQgLSBjdHguZXZlbnQubGFzdFgsXG4gICAgICAgIHk6IHBvcy50b3AgLSBjdHguZXZlbnQubGFzdFlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubGV0IHVpZCA9IDBcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlyZWN0aXZlKF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICA/IHsgbmFtZTogJ3RvdWNoLXBhbicsIGdldFNTUlByb3BzIH1cbiAgOiB7XG4gICAgICBuYW1lOiAndG91Y2gtcGFuJyxcblxuICAgICAgYmVmb3JlTW91bnQgKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMgfSkge1xuICAgICAgICAvLyBlYXJseSByZXR1cm4sIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmdcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZGlmaWVycy5tb3VzZSAhPT0gdHJ1ZVxuICAgICAgICAgICYmIGNsaWVudC5oYXMudG91Y2ggIT09IHRydWVcbiAgICAgICAgKSByZXR1cm5cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVFdmVudCAoZXZ0LCBtb3VzZUV2ZW50KSB7XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5tb3VzZSA9PT0gdHJ1ZSAmJiBtb3VzZUV2ZW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdG9wQW5kUHJldmVudChldnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnN0b3AgPT09IHRydWUgJiYgc3RvcChldnQpXG4gICAgICAgICAgICBtb2RpZmllcnMucHJldmVudCA9PT0gdHJ1ZSAmJiBwcmV2ZW50KGV2dClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgdWlkOiAncXZ0cF8nICsgKHVpZCsrKSxcbiAgICAgICAgICBoYW5kbGVyOiB2YWx1ZSxcbiAgICAgICAgICBtb2RpZmllcnMsXG4gICAgICAgICAgZGlyZWN0aW9uOiBnZXRNb2RpZmllckRpcmVjdGlvbnMobW9kaWZpZXJzKSxcblxuICAgICAgICAgIG5vb3AsXG5cbiAgICAgICAgICBtb3VzZVN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRTdGFydChldnQsIGN0eCkgJiYgbGVmdENsaWNrKGV2dCkpIHtcbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNlbW92ZScsICdtb3ZlJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdtb3VzZXVwJywgJ2VuZCcsICdwYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICAgIGN0eC5zdGFydChldnQsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHRvdWNoU3RhcnQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0KGV2dCwgY3R4KSkge1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG5cbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaG1vdmUnLCAnbW92ZScsICdub3RQYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNoY2FuY2VsJywgJ2VuZCcsICdwYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNoZW5kJywgJ2VuZCcsICdwYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICAgIGN0eC5zdGFydChldnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHN0YXJ0IChldnQsIG1vdXNlRXZlbnQpIHtcbiAgICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIHRydWUpXG4gICAgICAgICAgICBjdHgubGFzdEV2dCA9IGV2dFxuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgKiBTdG9wIHByb3BhZ2F0aW9uIHNvIHBvc3NpYmxlIHVwcGVyIHYtdG91Y2gtcGFuIGRvbid0IGNhdGNoIHRoaXMgYXMgd2VsbDtcbiAgICAgICAgICAgICogSWYgd2UncmUgbm90IHRoZSB0YXJnZXQgKGJhc2VkIG9uIG1vZGlmaWVycyksIHdlJ2xsIHJlLWVtaXQgdGhlIGV2ZW50IGxhdGVyXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKG1vdXNlRXZlbnQgPT09IHRydWUgfHwgbW9kaWZpZXJzLnN0b3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgKiBhcmUgd2UgZGlyZWN0bHkgc3dpdGNoaW5nIHRvIGRldGVjdGVkIHN0YXRlP1xuICAgICAgICAgICAgICAqIGNsb25lIGV2ZW50IG9ubHkgb3RoZXJ3aXNlXG4gICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLmFsbCAhPT0gdHJ1ZVxuICAgICAgICAgICAgICAgIC8vIGFjY291bnQgZm9yIFVNRCB0b28gd2hlcmUgbW9kaWZpZXJzIHdpbGwgYmUgbG93ZXJjYXNlZCB0byB3b3JrXG4gICAgICAgICAgICAgICAgJiYgKG1vdXNlRXZlbnQgIT09IHRydWUgfHwgKGN0eC5tb2RpZmllcnMubW91c2VBbGxEaXIgIT09IHRydWUgJiYgY3R4Lm1vZGlmaWVycy5tb3VzZWFsbGRpciAhPT0gdHJ1ZSkpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lID0gZXZ0LnR5cGUuaW5kZXhPZignbW91c2UnKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgID8gbmV3IE1vdXNlRXZlbnQoZXZ0LnR5cGUsIGV2dClcbiAgICAgICAgICAgICAgICAgIDogbmV3IFRvdWNoRXZlbnQoZXZ0LnR5cGUsIGV2dClcblxuICAgICAgICAgICAgICAgIGV2dC5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlICYmIHByZXZlbnQoY2xvbmUpXG4gICAgICAgICAgICAgICAgZXZ0LmNhbmNlbEJ1YmJsZSA9PT0gdHJ1ZSAmJiBzdG9wKGNsb25lKVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjbG9uZSwge1xuICAgICAgICAgICAgICAgICAgcUtleUV2ZW50OiBldnQucUtleUV2ZW50LFxuICAgICAgICAgICAgICAgICAgcUNsaWNrT3V0c2lkZTogZXZ0LnFDbGlja091dHNpZGUsXG4gICAgICAgICAgICAgICAgICBxQW5jaG9ySGFuZGxlZDogZXZ0LnFBbmNob3JIYW5kbGVkLFxuICAgICAgICAgICAgICAgICAgcUNsb25lZEJ5OiBldnQucUNsb25lZEJ5ID09PSB2b2lkIDBcbiAgICAgICAgICAgICAgICAgICAgPyBbIGN0eC51aWQgXVxuICAgICAgICAgICAgICAgICAgICA6IGV2dC5xQ2xvbmVkQnkuY29uY2F0KGN0eC51aWQpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGN0eC5pbml0aWFsRXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2dC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICBldmVudDogY2xvbmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzdG9wKGV2dClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgeyBsZWZ0LCB0b3AgfSA9IHBvc2l0aW9uKGV2dClcblxuICAgICAgICAgICAgY3R4LmV2ZW50ID0ge1xuICAgICAgICAgICAgICB4OiBsZWZ0LFxuICAgICAgICAgICAgICB5OiB0b3AsXG4gICAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICAgIG1vdXNlOiBtb3VzZUV2ZW50ID09PSB0cnVlLFxuICAgICAgICAgICAgICBkZXRlY3RlZDogZmFsc2UsXG4gICAgICAgICAgICAgIGlzRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgIGlzRmluYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBsYXN0WDogbGVmdCxcbiAgICAgICAgICAgICAgbGFzdFk6IHRvcFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBtb3ZlIChldnQpIHtcbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQgPT09IHZvaWQgMCkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgIHBvcyA9IHBvc2l0aW9uKGV2dCksXG4gICAgICAgICAgICAgIGRpc3RYID0gcG9zLmxlZnQgLSBjdHguZXZlbnQueCxcbiAgICAgICAgICAgICAgZGlzdFkgPSBwb3MudG9wIC0gY3R4LmV2ZW50LnlcblxuICAgICAgICAgICAgLy8gcHJldmVudCBidWdneSBicm93c2VyIGJlaGF2aW9yIChsaWtlIEJsaW5rLWJhc2VkIGVuZ2luZSBvbmVzIG9uIFdpbmRvd3MpXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGUgbW91c2Vtb3ZlIGV2ZW50IG9jY3VycyBldmVuIGlmIHRoZXJlJ3Mgbm8gbW92ZW1lbnQgYWZ0ZXIgbW91c2Vkb3duXG4gICAgICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNjE0NjRcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTcyMTM0MVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3F1YXNhcmZyYW1ld29yay9xdWFzYXIvaXNzdWVzLzEwNzIxXG4gICAgICAgICAgICBpZiAoZGlzdFggPT09IDAgJiYgZGlzdFkgPT09IDApIHJldHVyblxuXG4gICAgICAgICAgICBjdHgubGFzdEV2dCA9IGV2dFxuXG4gICAgICAgICAgICBjb25zdCBpc01vdXNlRXZ0ID0gY3R4LmV2ZW50Lm1vdXNlID09PSB0cnVlXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgaGFuZGxlRXZlbnQoZXZ0LCBpc01vdXNlRXZ0KVxuXG4gICAgICAgICAgICAgIGxldCBjdXJzb3JcbiAgICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5wcmVzZXJ2ZUN1cnNvciAhPT0gdHJ1ZSAmJiBtb2RpZmllcnMucHJlc2VydmVjdXJzb3IgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjdXJzb3IgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY3Vyc29yIHx8ICcnXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdncmFiYmluZydcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlzTW91c2VFdnQgPT09IHRydWUgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCduby1wb2ludGVyLWV2ZW50cy0tY2hpbGRyZW4nKVxuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vbi1zZWxlY3RhYmxlJylcbiAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuXG4gICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB3aXRoRGVsYXllZEZuID0+IHtcbiAgICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwID0gdm9pZCAwXG5cbiAgICAgICAgICAgICAgICBpZiAoY3Vyc29yICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5jdXJzb3IgPSBjdXJzb3JcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vbi1zZWxlY3RhYmxlJylcblxuICAgICAgICAgICAgICAgIGlmIChpc01vdXNlRXZ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tcG9pbnRlci1ldmVudHMtLWNoaWxkcmVuJylcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHdpdGhEZWxheWVkRm4gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICAgIHdpdGhEZWxheWVkRm4oKVxuICAgICAgICAgICAgICAgICAgICB9LCA1MClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgeyByZW1vdmUoKSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpdGhEZWxheWVkRm4gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgd2l0aERlbGF5ZWRGbigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQuZGV0ZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmlzRmlyc3QgIT09IHRydWUgJiYgaGFuZGxlRXZlbnQoZXZ0LCBjdHguZXZlbnQubW91c2UpXG5cbiAgICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkLCBzeW50aGV0aWMgfSA9IGdldENoYW5nZXMoZXZ0LCBjdHgsIGZhbHNlKVxuXG4gICAgICAgICAgICAgIGlmIChwYXlsb2FkICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmhhbmRsZXIocGF5bG9hZCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICBjdHguZW5kKGV2dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoY3R4LnN0eWxlQ2xlYW51cCA9PT0gdm9pZCAwICYmIGN0eC5ldmVudC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KClcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgY3R4LmV2ZW50Lmxhc3RYID0gcGF5bG9hZC5wb3NpdGlvbi5sZWZ0XG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQubGFzdFkgPSBwYXlsb2FkLnBvc2l0aW9uLnRvcFxuICAgICAgICAgICAgICAgICAgY3R4LmV2ZW50Lmxhc3REaXIgPSBzeW50aGV0aWMgPT09IHRydWUgPyB2b2lkIDAgOiBwYXlsb2FkLmRpcmVjdGlvblxuICAgICAgICAgICAgICAgICAgY3R4LmV2ZW50LmlzRmlyc3QgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24uYWxsID09PSB0cnVlXG4gICAgICAgICAgICAgIC8vIGFjY291bnQgZm9yIFVNRCB0b28gd2hlcmUgbW9kaWZpZXJzIHdpbGwgYmUgbG93ZXJjYXNlZCB0byB3b3JrXG4gICAgICAgICAgICAgIHx8IChpc01vdXNlRXZ0ID09PSB0cnVlICYmIChjdHgubW9kaWZpZXJzLm1vdXNlQWxsRGlyID09PSB0cnVlIHx8IGN0eC5tb2RpZmllcnMubW91c2VhbGxkaXIgPT09IHRydWUpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHN0YXJ0KClcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRldGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICBjdHgubW92ZShldnQpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICBhYnNYID0gTWF0aC5hYnMoZGlzdFgpLFxuICAgICAgICAgICAgICBhYnNZID0gTWF0aC5hYnMoZGlzdFkpXG5cbiAgICAgICAgICAgIGlmIChhYnNYICE9PSBhYnNZKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoY3R4LmRpcmVjdGlvbi5ob3Jpem9udGFsID09PSB0cnVlICYmIGFic1ggPiBhYnNZKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLnZlcnRpY2FsID09PSB0cnVlICYmIGFic1ggPCBhYnNZKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLnVwID09PSB0cnVlICYmIGFic1ggPCBhYnNZICYmIGRpc3RZIDwgMClcbiAgICAgICAgICAgICAgICB8fCAoY3R4LmRpcmVjdGlvbi5kb3duID09PSB0cnVlICYmIGFic1ggPCBhYnNZICYmIGRpc3RZID4gMClcbiAgICAgICAgICAgICAgICB8fCAoY3R4LmRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlICYmIGFic1ggPiBhYnNZICYmIGRpc3RYIDwgMClcbiAgICAgICAgICAgICAgICB8fCAoY3R4LmRpcmVjdGlvbi5yaWdodCA9PT0gdHJ1ZSAmJiBhYnNYID4gYWJzWSAmJiBkaXN0WCA+IDApXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGN0eC5ldmVudC5kZXRlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBjdHgubW92ZShldnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LmVuZChldnQsIHRydWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZW5kIChldnQsIGFib3J0KSB7XG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50ID09PSB2b2lkIDApIHJldHVyblxuXG4gICAgICAgICAgICBjbGVhbkV2dChjdHgsICd0ZW1wJylcbiAgICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAoYWJvcnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cD8uKClcblxuICAgICAgICAgICAgICBpZiAoY3R4LmV2ZW50LmRldGVjdGVkICE9PSB0cnVlICYmIGN0eC5pbml0aWFsRXZlbnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGN0eC5pbml0aWFsRXZlbnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQoY3R4LmluaXRpYWxFdmVudC5ldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY3R4LmV2ZW50LmRldGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5pc0ZpcnN0ID09PSB0cnVlICYmIGN0eC5oYW5kbGVyKGdldENoYW5nZXMoZXZ0ID09PSB2b2lkIDAgPyBjdHgubGFzdEV2dCA6IGV2dCwgY3R4KS5wYXlsb2FkKVxuXG4gICAgICAgICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gZ2V0Q2hhbmdlcyhldnQgPT09IHZvaWQgMCA/IGN0eC5sYXN0RXZ0IDogZXZ0LCBjdHgsIHRydWUpXG4gICAgICAgICAgICAgIGNvbnN0IGZuID0gKCkgPT4geyBjdHguaGFuZGxlcihwYXlsb2FkKSB9XG5cbiAgICAgICAgICAgICAgaWYgKGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAoZm4pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm4oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0eC5ldmVudCA9IHZvaWQgMFxuICAgICAgICAgICAgY3R4LmluaXRpYWxFdmVudCA9IHZvaWQgMFxuICAgICAgICAgICAgY3R4Lmxhc3RFdnQgPSB2b2lkIDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbC5fX3F0b3VjaHBhbiA9IGN0eFxuXG4gICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBhY2NvdW50IGZvciBVTUQgdG9vIHdoZXJlIG1vZGlmaWVycyB3aWxsIGJlIGxvd2VyY2FzZWQgdG8gd29ya1xuICAgICAgICAgIGNvbnN0IGNhcHR1cmUgPSBtb2RpZmllcnMubW91c2VDYXB0dXJlID09PSB0cnVlIHx8IG1vZGlmaWVycy5tb3VzZWNhcHR1cmUgPT09IHRydWVcbiAgICAgICAgICAgID8gJ0NhcHR1cmUnXG4gICAgICAgICAgICA6ICcnXG5cbiAgICAgICAgICBhZGRFdnQoY3R4LCAnbWFpbicsIFtcbiAgICAgICAgICAgIFsgZWwsICdtb3VzZWRvd24nLCAnbW91c2VTdGFydCcsIGBwYXNzaXZlJHsgY2FwdHVyZSB9YCBdXG4gICAgICAgICAgXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWVudC5oYXMudG91Y2ggPT09IHRydWUgJiYgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgWyBlbCwgJ3RvdWNoc3RhcnQnLCAndG91Y2hTdGFydCcsIGBwYXNzaXZlJHsgbW9kaWZpZXJzLmNhcHR1cmUgPT09IHRydWUgPyAnQ2FwdHVyZScgOiAnJyB9YCBdLFxuICAgICAgICAgIFsgZWwsICd0b3VjaG1vdmUnLCAnbm9vcCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXSAvLyBjYW5ub3QgYmUgcGFzc2l2ZSAoZXg6IGlPUyBzY3JvbGwpXG4gICAgICAgIF0pXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVkIChlbCwgYmluZGluZ3MpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hwYW5cblxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAoYmluZGluZ3Mub2xkVmFsdWUgIT09IGJpbmRpbmdzLnZhbHVlKSB7XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgY3R4LmVuZCgpXG4gICAgICAgICAgICBjdHguaGFuZGxlciA9IGJpbmRpbmdzLnZhbHVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3R4LmRpcmVjdGlvbiA9IGdldE1vZGlmaWVyRGlyZWN0aW9ucyhiaW5kaW5ncy5tb2RpZmllcnMpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGJlZm9yZVVubW91bnQgKGVsKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcXRvdWNocGFuXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgLy8gZW1pdCB0aGUgZW5kIGV2ZW50IHdoZW4gdGhlIGRpcmVjdGl2ZSBpcyBkZXN0cm95ZWQgd2hpbGUgYWN0aXZlXG4gICAgICAgICAgLy8gdGhpcyBpcyBvbmx5IG5lZWRlZCBpbiBUb3VjaFBhbiBiZWNhdXNlIHRoZSByZXN0IG9mIHRoZSB0b3VjaCBkaXJlY3RpdmVzIGRvIG5vdCBlbWl0IGFuIGVuZCBldmVudFxuICAgICAgICAgIC8vIHRoZSBjb25kaXRpb24gaXMgYWxzbyBjaGVja2VkIGluIHRoZSBzdGFydCBvZiBmdW5jdGlvbiBidXQgd2UgYXZvaWQgdGhlIGNhbGxcbiAgICAgICAgICBjdHguZXZlbnQgIT09IHZvaWQgMCAmJiBjdHguZW5kKClcblxuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ21haW4nKVxuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuXG4gICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgZmFsc2UpXG4gICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cD8uKClcblxuICAgICAgICAgIGRlbGV0ZSBlbC5fX3F0b3VjaHBhblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuKVxuIiwiPHRlbXBsYXRlPlxuICA8cS1idG5cbiAgICBzaXplPVwieHNcIlxuICAgIGZsYXRcbiAgICByb3VuZFxuICAgIDpjbGFzcz1cIm5vdGVDbGFzc1wiXG4gICAgOmljb249XCJub3RlSWNvblwiPlxuICAgIDxxLXBvcHVwLWVkaXQgdi1tb2RlbD1cIm5vdGVcIlxuICAgICAgICAgICAgICAgICAgYXV0by1zYXZlXG4gICAgICAgICAgICAgICAgICBidXR0b25zXG4gICAgICAgICAgICAgICAgICB2LXNsb3Q9XCJzY29wZVwiPlxuICAgICAgPHEtaW5wdXRcbiAgICAgICAgbGFiZWw9XCJOb3RlXCJcbiAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgdi1tb2RlbD1cInNjb3BlLnZhbHVlXCJcbiAgICAgICAgQGtleXVwLmN0cmwuZW50ZXI9XCJzY29wZS5zZXRcIlxuICAgICAgICBAa2V5dXAuZXNjPVwic2NvcGUuY2FuY2VsXCJcbiAgICAgICAgZGVuc2VcbiAgICAgICAgYXV0b2dyb3dcbiAgICAgICAgYXV0b2ZvY3VzIC8+XG4gICAgPC9xLXBvcHVwLWVkaXQ+XG4gICAgPHEtdG9vbHRpcFxuICAgICAgY2xhc3M9XCJiZy1ibHVlLWdyZXktMiB0ZXh0LWJsYWNrXCJcbiAgICAgIHYtaWY9XCJub3RlXCI+XG4gICAgICA8cHJlIGNsYXNzPVwibm90ZS10b29sdGlwXCI+e3sgbm90ZSB9fTwvcHJlPlxuICAgIDwvcS10b29sdGlwPlxuICA8L3EtYnRuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IEJhc2VNb2RlbCBmcm9tICdzdG9yZXMvbW9kZWxzL2Jhc2Vtb2RlbCdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBlbGVtZW50OiB7IHR5cGU6IE9iamVjdCwgZGVmYXVsdDogbnVsbCB9LFxuICAgICAgZWxlbWVudFR5cGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH1cbiAgfSlcblxuICBjb25zdCBub3RlID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzLmVsZW1lbnQgPyBwcm9wcy5lbGVtZW50Lm5vdGUgOiBcIlwiXG4gICAgICB9LFxuICAgICAgc2V0OiAodmFsdWUpID0+IHtcbiAgICAgICAgICBpZiAocHJvcHMuZWxlbWVudCkge1xuICAgICAgICAgICAgICBzdG9yZS51cGRhdGVFbGVtZW50KHByb3BzLmVsZW1lbnQgYXMgQmFzZU1vZGVsLCB7IG5vdGU6IHZhbHVlIH0pXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IG5vdGVDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBub3RlLnZhbHVlID8gWyBcIm5vdGVcIiBdIDogWyBcIm5vdGVcIiwgXCJub3RlLWlzLWVtcHR5XCIgXVxuICB9KVxuXG4gIGNvbnN0IG5vdGVJY29uID0gY29tcHV0ZWQoKCkgPT4gbm90ZS52YWx1ZSA/ICdtZGktY2hhdCcgOiAnbWRpLWNoYXQtb3V0bGluZScpXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgLm5vdGUtaXMtZW1wdHkge1xuICAgICAgb3BhY2l0eTogLjM7XG4gIH1cbiAgLnRleHQtcHJlLWxpbmUge1xuICAgICAgLyogUHJlc2VydmUgYWxsIHdoaXRlLXNwYWNlIGNoYXJhY3RlcnMsIGluY2x1ZGluZyBsaW5lIGJyZWFrcyAqL1xuICAgICAgd2hpdGUtc3BhY2UtY29sbGFwc2U6IHByZXNlcnZlO1xuICB9XG4gIC5ub3RlLXRvb2x0aXAge1xuICAgICAgZm9udC1mYW1pbHk6IHNhbnM7XG4gIH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFRvdWNoUGFuIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG91Y2gtcGFuL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHsgdXNlRm9ybVByb3BzLCB1c2VGb3JtSW5qZWN0IH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLWZvcm0vcHJpdmF0ZS51c2UtZm9ybS5qcydcblxuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC9mb3JtYXQuanMnXG5pbXBvcnQgeyBwb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50L2V2ZW50LmpzJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMvaXMuanMnXG5pbXBvcnQgeyBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5jb25zdCBtYXJrZXJQcmVmaXhDbGFzcyA9ICdxLXNsaWRlcl9fbWFya2VyLWxhYmVscydcbmNvbnN0IGRlZmF1bHRNYXJrZXJDb252ZXJ0Rm4gPSB2ID0+ICh7IHZhbHVlOiB2IH0pXG5jb25zdCBkZWZhdWx0TWFya2VyTGFiZWxSZW5kZXJGbiA9ICh7IG1hcmtlciB9KSA9PiBoKCdkaXYnLCB7XG4gIGtleTogbWFya2VyLnZhbHVlLFxuICBzdHlsZTogbWFya2VyLnN0eWxlLFxuICBjbGFzczogbWFya2VyLmNsYXNzZXNcbn0sIG1hcmtlci5sYWJlbClcblxuLy8gUEdET1dOLCBMRUZULCBET1dOLCBQR1VQLCBSSUdIVCwgVVBcbmV4cG9ydCBjb25zdCBrZXlDb2RlcyA9IFsgMzQsIDM3LCA0MCwgMzMsIDM5LCAzOCBdXG5cbmV4cG9ydCBjb25zdCB1c2VTbGlkZXJQcm9wcyA9IHtcbiAgLi4udXNlRGFya1Byb3BzLFxuICAuLi51c2VGb3JtUHJvcHMsXG5cbiAgbWluOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDBcbiAgfSxcbiAgbWF4OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEwMFxuICB9LFxuICBpbm5lck1pbjogTnVtYmVyLFxuICBpbm5lck1heDogTnVtYmVyLFxuXG4gIHN0ZXA6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA+PSAwXG4gIH0sXG5cbiAgc25hcDogQm9vbGVhbixcblxuICB2ZXJ0aWNhbDogQm9vbGVhbixcbiAgcmV2ZXJzZTogQm9vbGVhbixcblxuICBjb2xvcjogU3RyaW5nLFxuICBtYXJrZXJMYWJlbHNDbGFzczogU3RyaW5nLFxuXG4gIGxhYmVsOiBCb29sZWFuLFxuICBsYWJlbENvbG9yOiBTdHJpbmcsXG4gIGxhYmVsVGV4dENvbG9yOiBTdHJpbmcsXG4gIGxhYmVsQWx3YXlzOiBCb29sZWFuLFxuICBzd2l0Y2hMYWJlbFNpZGU6IEJvb2xlYW4sXG5cbiAgbWFya2VyczogWyBCb29sZWFuLCBOdW1iZXIgXSxcbiAgbWFya2VyTGFiZWxzOiBbIEJvb2xlYW4sIEFycmF5LCBPYmplY3QsIEZ1bmN0aW9uIF0sXG4gIHN3aXRjaE1hcmtlckxhYmVsc1NpZGU6IEJvb2xlYW4sXG5cbiAgdHJhY2tJbWc6IFN0cmluZyxcbiAgdHJhY2tDb2xvcjogU3RyaW5nLFxuICBpbm5lclRyYWNrSW1nOiBTdHJpbmcsXG4gIGlubmVyVHJhY2tDb2xvcjogU3RyaW5nLFxuICBzZWxlY3Rpb25Db2xvcjogU3RyaW5nLFxuICBzZWxlY3Rpb25JbWc6IFN0cmluZyxcblxuICB0aHVtYlNpemU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJzIwcHgnXG4gIH0sXG4gIHRyYWNrU2l6ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnNHB4J1xuICB9LFxuXG4gIGRpc2FibGU6IEJvb2xlYW4sXG4gIHJlYWRvbmx5OiBCb29sZWFuLFxuICBkZW5zZTogQm9vbGVhbixcblxuICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gIHRodW1iQ29sb3I6IFN0cmluZyxcbiAgdGh1bWJQYXRoOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdNIDQsIDEwIGEgNiw2IDAgMSwwIDEyLDAgYSA2LDYgMCAxLDAgLTEyLDAnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVNsaWRlckVtaXRzID0gWyAncGFuJywgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ2NoYW5nZScgXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyB1cGRhdGVWYWx1ZSwgdXBkYXRlUG9zaXRpb24sIGdldERyYWdnaW5nLCBmb3JtQXR0cnMgfSkge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBzbG90cywgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgY29uc3QgaW5qZWN0Rm9ybUlucHV0ID0gdXNlRm9ybUluamVjdChmb3JtQXR0cnMpXG5cbiAgY29uc3QgYWN0aXZlID0gcmVmKGZhbHNlKVxuICBjb25zdCBwcmV2ZW50Rm9jdXMgPSByZWYoZmFsc2UpXG4gIGNvbnN0IGZvY3VzID0gcmVmKGZhbHNlKVxuICBjb25zdCBkcmFnZ2luZyA9IHJlZihmYWxzZSlcblxuICBjb25zdCBheGlzID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJy0tdicgOiAnLS1oJykpXG4gIGNvbnN0IGxhYmVsU2lkZSA9IGNvbXB1dGVkKCgpID0+ICctJyArIChwcm9wcy5zd2l0Y2hMYWJlbFNpZGUgPT09IHRydWUgPyAnc3dpdGNoZWQnIDogJ3N0YW5kYXJkJykpXG5cbiAgY29uc3QgaXNSZXZlcnNlZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgPyBwcm9wcy5yZXZlcnNlID09PSB0cnVlXG4gICAgICA6IHByb3BzLnJldmVyc2UgIT09ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSlcbiAgKSlcblxuICBjb25zdCBpbm5lck1pbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc05hTihwcm9wcy5pbm5lck1pbikgPT09IHRydWUgfHwgcHJvcHMuaW5uZXJNaW4gPCBwcm9wcy5taW5cbiAgICAgID8gcHJvcHMubWluXG4gICAgICA6IHByb3BzLmlubmVyTWluXG4gICkpXG4gIGNvbnN0IGlubmVyTWF4ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTmFOKHByb3BzLmlubmVyTWF4KSA9PT0gdHJ1ZSB8fCBwcm9wcy5pbm5lck1heCA+IHByb3BzLm1heFxuICAgICAgPyBwcm9wcy5tYXhcbiAgICAgIDogcHJvcHMuaW5uZXJNYXhcbiAgKSlcblxuICBjb25zdCBlZGl0YWJsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIHByb3BzLnJlYWRvbmx5ICE9PSB0cnVlXG4gICAgJiYgaW5uZXJNaW4udmFsdWUgPCBpbm5lck1heC52YWx1ZVxuICApKVxuXG4gIGNvbnN0IHJvdW5kVmFsdWVGbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAocHJvcHMuc3RlcCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHYgPT4gdlxuICAgIH1cblxuICAgIGNvbnN0IGRlY2ltYWxzID0gKFN0cmluZyhwcm9wcy5zdGVwKS50cmltKCkuc3BsaXQoJy4nKVsgMSBdIHx8ICcnKS5sZW5ndGhcbiAgICByZXR1cm4gdiA9PiBwYXJzZUZsb2F0KHYudG9GaXhlZChkZWNpbWFscykpXG4gIH0pXG5cbiAgY29uc3Qga2V5U3RlcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy5zdGVwID09PSAwID8gMSA6IHByb3BzLnN0ZXApKVxuICBjb25zdCB0YWJpbmRleCA9IGNvbXB1dGVkKCgpID0+IChlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSA/IHByb3BzLnRhYmluZGV4IHx8IDAgOiAtMSkpXG5cbiAgY29uc3QgdHJhY2tMZW4gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5tYXggLSBwcm9wcy5taW4pXG4gIGNvbnN0IGlubmVyQmFyTGVuID0gY29tcHV0ZWQoKCkgPT4gaW5uZXJNYXgudmFsdWUgLSBpbm5lck1pbi52YWx1ZSlcblxuICBjb25zdCBpbm5lck1pblJhdGlvID0gY29tcHV0ZWQoKCkgPT4gY29udmVydE1vZGVsVG9SYXRpbyhpbm5lck1pbi52YWx1ZSkpXG4gIGNvbnN0IGlubmVyTWF4UmF0aW8gPSBjb21wdXRlZCgoKSA9PiBjb252ZXJ0TW9kZWxUb1JhdGlvKGlubmVyTWF4LnZhbHVlKSlcblxuICBjb25zdCBwb3NpdGlvblByb3AgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgID8gKGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAnYm90dG9tJyA6ICd0b3AnKVxuICAgICAgOiAoaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcpXG4gICkpXG5cbiAgY29uc3Qgc2l6ZVByb3AgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnaGVpZ2h0JyA6ICd3aWR0aCcpKVxuICBjb25zdCB0aGlja25lc3NQcm9wID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3dpZHRoJyA6ICdoZWlnaHQnKSlcbiAgY29uc3Qgb3JpZW50YXRpb24gPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnKSlcblxuICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgIHJvbGU6ICdzbGlkZXInLFxuICAgICAgJ2FyaWEtdmFsdWVtaW4nOiBpbm5lck1pbi52YWx1ZSxcbiAgICAgICdhcmlhLXZhbHVlbWF4JzogaW5uZXJNYXgudmFsdWUsXG4gICAgICAnYXJpYS1vcmllbnRhdGlvbic6IG9yaWVudGF0aW9uLnZhbHVlLFxuICAgICAgJ2RhdGEtc3RlcCc6IHByb3BzLnN0ZXBcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5yZWFkb25seSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjWyAnYXJpYS1yZWFkb25seScgXSA9ICd0cnVlJ1xuICAgIH1cblxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBgcS1zbGlkZXIgcS1zbGlkZXIkeyBheGlzLnZhbHVlIH0gcS1zbGlkZXItLSR7IGFjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJ2luJyB9YWN0aXZlIGlubGluZSBuby13cmFwIGBcbiAgICArIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdyb3cnIDogJ2NvbHVtbicpXG4gICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJyBxLXNsaWRlci0tZW5hYmxlZCcgKyAoZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1lZGl0YWJsZScgOiAnJykpXG4gICAgKyAoZm9jdXMudmFsdWUgPT09ICdib3RoJyA/ICcgcS1zbGlkZXItLWZvY3VzJyA6ICcnKVxuICAgICsgKHByb3BzLmxhYmVsIHx8IHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlID8gJyBxLXNsaWRlci0tbGFiZWwnIDogJycpXG4gICAgKyAocHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1sYWJlbC1hbHdheXMnIDogJycpXG4gICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZGFyaycgOiAnJylcbiAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWRlbnNlIHEtc2xpZGVyLS1kZW5zZScgKyBheGlzLnZhbHVlIDogJycpXG4gIClcblxuICBmdW5jdGlvbiBnZXRQb3NpdGlvbkNsYXNzIChuYW1lKSB7XG4gICAgY29uc3QgY2xzID0gJ3Etc2xpZGVyX18nICsgbmFtZVxuICAgIHJldHVybiBgJHsgY2xzIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH0keyBsYWJlbFNpZGUudmFsdWUgfWBcbiAgfVxuICBmdW5jdGlvbiBnZXRBeGlzQ2xhc3MgKG5hbWUpIHtcbiAgICBjb25zdCBjbHMgPSAncS1zbGlkZXJfXycgKyBuYW1lXG4gICAgcmV0dXJuIGAkeyBjbHMgfSAkeyBjbHMgfSR7IGF4aXMudmFsdWUgfWBcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGlvbkJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGNvbG9yID0gcHJvcHMuc2VsZWN0aW9uQ29sb3IgfHwgcHJvcHMuY29sb3JcbiAgICByZXR1cm4gJ3Etc2xpZGVyX19zZWxlY3Rpb24gYWJzb2x1dGUnXG4gICAgICArIChjb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IGNvbG9yIH1gIDogJycpXG4gIH0pXG4gIGNvbnN0IG1hcmtlckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0QXhpc0NsYXNzKCdtYXJrZXJzJykgKyAnIGFic29sdXRlIG92ZXJmbG93LWhpZGRlbicpXG4gIGNvbnN0IHRyYWNrQ29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRBeGlzQ2xhc3MoJ3RyYWNrLWNvbnRhaW5lcicpKVxuICBjb25zdCBwaW5DbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ3BpbicpKVxuICBjb25zdCBsYWJlbENsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygnbGFiZWwnKSlcbiAgY29uc3QgdGV4dENvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygndGV4dC1jb250YWluZXInKSlcbiAgY29uc3QgbWFya2VyTGFiZWxzQ29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgIGdldFBvc2l0aW9uQ2xhc3MoJ21hcmtlci1sYWJlbHMtY29udGFpbmVyJylcbiAgICArIChwcm9wcy5tYXJrZXJMYWJlbHNDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5tYXJrZXJMYWJlbHNDbGFzcyB9YCA6ICcnKVxuICApXG5cbiAgY29uc3QgdHJhY2tDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3Etc2xpZGVyX190cmFjayByZWxhdGl2ZS1wb3NpdGlvbiBuby1vdXRsaW5lJ1xuICAgICsgKHByb3BzLnRyYWNrQ29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMudHJhY2tDb2xvciB9YCA6ICcnKVxuICApXG4gIGNvbnN0IHRyYWNrU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0geyBbIHRoaWNrbmVzc1Byb3AudmFsdWUgXTogcHJvcHMudHJhY2tTaXplIH1cbiAgICBpZiAocHJvcHMudHJhY2tJbWcgIT09IHZvaWQgMCkge1xuICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMudHJhY2tJbWcgfSkgIWltcG9ydGFudGBcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IGlubmVyQmFyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXNsaWRlcl9faW5uZXIgYWJzb2x1dGUnXG4gICAgKyAocHJvcHMuaW5uZXJUcmFja0NvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLmlubmVyVHJhY2tDb2xvciB9YCA6ICcnKVxuICApXG4gIGNvbnN0IGlubmVyQmFyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgaW5uZXJEaWZmID0gaW5uZXJNYXhSYXRpby52YWx1ZSAtIGlubmVyTWluUmF0aW8udmFsdWVcbiAgICBjb25zdCBhY2MgPSB7XG4gICAgICBbIHBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogaW5uZXJNaW5SYXRpby52YWx1ZSB9JWAsXG4gICAgICBbIHNpemVQcm9wLnZhbHVlIF06IGlubmVyRGlmZiA9PT0gMFxuICAgICAgICA/ICcycHgnXG4gICAgICAgIDogYCR7IDEwMCAqIGlubmVyRGlmZiB9JWBcbiAgICB9XG4gICAgaWYgKHByb3BzLmlubmVyVHJhY2tJbWcgIT09IHZvaWQgMCkge1xuICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMuaW5uZXJUcmFja0ltZyB9KSAhaW1wb3J0YW50YFxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgZnVuY3Rpb24gY29udmVydFJhdGlvVG9Nb2RlbCAocmF0aW8pIHtcbiAgICBjb25zdCB7IG1pbiwgbWF4LCBzdGVwIH0gPSBwcm9wc1xuICAgIGxldCBtb2RlbCA9IG1pbiArIHJhdGlvICogKG1heCAtIG1pbilcblxuICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgY29uc3QgbW9kdWxvID0gKG1vZGVsIC0gaW5uZXJNaW4udmFsdWUpICUgc3RlcFxuICAgICAgbW9kZWwgKz0gKE1hdGguYWJzKG1vZHVsbykgPj0gc3RlcCAvIDIgPyAobW9kdWxvIDwgMCA/IC0xIDogMSkgKiBzdGVwIDogMCkgLSBtb2R1bG9cbiAgICB9XG5cbiAgICBtb2RlbCA9IHJvdW5kVmFsdWVGbi52YWx1ZShtb2RlbClcblxuICAgIHJldHVybiBiZXR3ZWVuKG1vZGVsLCBpbm5lck1pbi52YWx1ZSwgaW5uZXJNYXgudmFsdWUpXG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0TW9kZWxUb1JhdGlvIChtb2RlbCkge1xuICAgIHJldHVybiB0cmFja0xlbi52YWx1ZSA9PT0gMFxuICAgICAgPyAwXG4gICAgICA6IChtb2RlbCAtIHByb3BzLm1pbikgLyB0cmFja0xlbi52YWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RHJhZ2dpbmdSYXRpbyAoZXZ0LCBkcmFnZ2luZykge1xuICAgIGNvbnN0XG4gICAgICBwb3MgPSBwb3NpdGlvbihldnQpLFxuICAgICAgdmFsID0gcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgPyBiZXR3ZWVuKChwb3MudG9wIC0gZHJhZ2dpbmcudG9wKSAvIGRyYWdnaW5nLmhlaWdodCwgMCwgMSlcbiAgICAgICAgOiBiZXR3ZWVuKChwb3MubGVmdCAtIGRyYWdnaW5nLmxlZnQpIC8gZHJhZ2dpbmcud2lkdGgsIDAsIDEpXG5cbiAgICByZXR1cm4gYmV0d2VlbihcbiAgICAgIGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAxLjAgLSB2YWwgOiB2YWwsXG4gICAgICBpbm5lck1pblJhdGlvLnZhbHVlLFxuICAgICAgaW5uZXJNYXhSYXRpby52YWx1ZVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IG1hcmtlclN0ZXAgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOdW1iZXIocHJvcHMubWFya2VycykgPT09IHRydWUgPyBwcm9wcy5tYXJrZXJzIDoga2V5U3RlcC52YWx1ZSlcbiAgKVxuXG4gIGNvbnN0IG1hcmtlclRpY2tzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IFtdXG4gICAgY29uc3Qgc3RlcCA9IG1hcmtlclN0ZXAudmFsdWVcbiAgICBjb25zdCBtYXggPSBwcm9wcy5tYXhcblxuICAgIGxldCB2YWx1ZSA9IHByb3BzLm1pblxuICAgIGRvIHtcbiAgICAgIGFjYy5wdXNoKHZhbHVlKVxuICAgICAgdmFsdWUgKz0gc3RlcFxuICAgIH0gd2hpbGUgKHZhbHVlIDwgbWF4KVxuXG4gICAgYWNjLnB1c2gobWF4KVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBtYXJrZXJMYWJlbENsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHByZWZpeCA9IGAgJHsgbWFya2VyUHJlZml4Q2xhc3MgfSR7IGF4aXMudmFsdWUgfS1gXG4gICAgcmV0dXJuIG1hcmtlclByZWZpeENsYXNzXG4gICAgICArIGAkeyBwcmVmaXggfSR7IHByb3BzLnN3aXRjaE1hcmtlckxhYmVsc1NpZGUgPT09IHRydWUgPyAnc3dpdGNoZWQnIDogJ3N0YW5kYXJkJyB9YFxuICAgICAgKyBgJHsgcHJlZml4IH0keyBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3J0bCcgOiAnbHRyJyB9YFxuICB9KVxuXG4gIGNvbnN0IG1hcmtlckxhYmVsc0xpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgcmV0dXJuIGdldE1hcmtlckxpc3QocHJvcHMubWFya2VyTGFiZWxzKS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKHtcbiAgICAgIGluZGV4LFxuICAgICAgdmFsdWU6IGVudHJ5LnZhbHVlLFxuICAgICAgbGFiZWw6IGVudHJ5LmxhYmVsIHx8IGVudHJ5LnZhbHVlLFxuICAgICAgY2xhc3NlczogbWFya2VyTGFiZWxDbGFzcy52YWx1ZVxuICAgICAgICArIChlbnRyeS5jbGFzc2VzICE9PSB2b2lkIDAgPyAnICcgKyBlbnRyeS5jbGFzc2VzIDogJycpLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLi4uZ2V0TWFya2VyTGFiZWxTdHlsZShlbnRyeS52YWx1ZSksXG4gICAgICAgIC4uLihlbnRyeS5zdHlsZSB8fCB7fSlcbiAgICAgIH1cbiAgICB9KSlcbiAgfSlcblxuICBjb25zdCBtYXJrZXJTY29wZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgbWFya2VyTGlzdDogbWFya2VyTGFiZWxzTGlzdC52YWx1ZSxcbiAgICBtYXJrZXJNYXA6IG1hcmtlckxhYmVsc01hcC52YWx1ZSxcbiAgICBjbGFzc2VzOiBtYXJrZXJMYWJlbENsYXNzLnZhbHVlLCAvLyBUT0RPIHRzIGRlZmluaXRpb25cbiAgICBnZXRTdHlsZTogZ2V0TWFya2VyTGFiZWxTdHlsZVxuICB9KSlcblxuICBjb25zdCBtYXJrZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBzaXplID0gaW5uZXJCYXJMZW4udmFsdWUgPT09IDBcbiAgICAgID8gJzJweCdcbiAgICAgIDogMTAwICogbWFya2VyU3RlcC52YWx1ZSAvIGlubmVyQmFyTGVuLnZhbHVlXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW5uZXJCYXJTdHlsZS52YWx1ZSxcbiAgICAgIGJhY2tncm91bmRTaXplOiBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICA/IGAycHggJHsgc2l6ZSB9JWBcbiAgICAgICAgOiBgJHsgc2l6ZSB9JSAycHhgXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxpc3QgKGRlZikge1xuICAgIGlmIChkZWYgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIGlmIChkZWYgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBtYXJrZXJUaWNrcy52YWx1ZS5tYXAoZGVmYXVsdE1hcmtlckNvbnZlcnRGbilcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG1hcmtlclRpY2tzLnZhbHVlLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkZWYodmFsdWUpXG4gICAgICAgIHJldHVybiBpc09iamVjdChpdGVtKSA9PT0gdHJ1ZSA/IHsgLi4uaXRlbSwgdmFsdWUgfSA6IHsgdmFsdWUsIGxhYmVsOiBpdGVtIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyRm4gPSAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA+PSBwcm9wcy5taW4gJiYgdmFsdWUgPD0gcHJvcHMubWF4XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShkZWYpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZGVmXG4gICAgICAgIC5tYXAoaXRlbSA9PiAoaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyBpdGVtIDogeyB2YWx1ZTogaXRlbSB9KSlcbiAgICAgICAgLmZpbHRlcihmaWx0ZXJGbilcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGVmKS5tYXAoa2V5ID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkZWZbIGtleSBdXG4gICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihrZXkpXG4gICAgICByZXR1cm4gaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyB7IC4uLml0ZW0sIHZhbHVlIH0gOiB7IHZhbHVlLCBsYWJlbDogaXRlbSB9XG4gICAgfSkuZmlsdGVyKGZpbHRlckZuKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFya2VyTGFiZWxTdHlsZSAodmFsKSB7XG4gICAgcmV0dXJuIHsgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqICh2YWwgLSBwcm9wcy5taW4pIC8gdHJhY2tMZW4udmFsdWUgfSVgIH1cbiAgfVxuXG4gIGNvbnN0IG1hcmtlckxhYmVsc01hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAocHJvcHMubWFya2VyTGFiZWxzID09PSBmYWxzZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBjb25zdCBhY2MgPSB7fVxuICAgIG1hcmtlckxhYmVsc0xpc3QudmFsdWUuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBhY2NbIGVudHJ5LnZhbHVlIF0gPSBlbnRyeVxuICAgIH0pXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxhYmVsc0NvbnRlbnQgKCkge1xuICAgIGlmIChzbG90c1sgJ21hcmtlci1sYWJlbC1ncm91cCcgXSAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gc2xvdHNbICdtYXJrZXItbGFiZWwtZ3JvdXAnIF0obWFya2VyU2NvcGUudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgZm4gPSBzbG90c1sgJ21hcmtlci1sYWJlbCcgXSB8fCBkZWZhdWx0TWFya2VyTGFiZWxSZW5kZXJGblxuICAgIHJldHVybiBtYXJrZXJMYWJlbHNMaXN0LnZhbHVlLm1hcChtYXJrZXIgPT4gZm4oe1xuICAgICAgbWFya2VyLFxuICAgICAgLi4ubWFya2VyU2NvcGUudmFsdWVcbiAgICB9KSlcbiAgfVxuXG4gIGNvbnN0IHBhbkRpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAvLyBpZiBlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgIHJldHVybiBbIFtcbiAgICAgIFRvdWNoUGFuLFxuICAgICAgb25QYW4sXG4gICAgICB2b2lkIDAsXG4gICAgICB7XG4gICAgICAgIFsgb3JpZW50YXRpb24udmFsdWUgXTogdHJ1ZSxcbiAgICAgICAgcHJldmVudDogdHJ1ZSxcbiAgICAgICAgc3RvcDogdHJ1ZSxcbiAgICAgICAgbW91c2U6IHRydWUsXG4gICAgICAgIG1vdXNlQWxsRGlyOiB0cnVlXG4gICAgICB9XG4gICAgXSBdXG4gIH0pXG5cbiAgZnVuY3Rpb24gb25QYW4gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgIGlmIChkcmFnZ2luZy52YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgICAgLy8gb25seSBpZiB0b3VjaCwgYmVjYXVzZSB3ZSBhbHNvIGhhdmUgbW91c2Vkb3duL3VwOlxuICAgICAgICBldmVudC50b3VjaCA9PT0gdHJ1ZSAmJiB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgICAgICBkcmFnZ2luZy52YWx1ZSA9IHZvaWQgMFxuICAgICAgICBlbWl0KCdwYW4nLCAnZW5kJylcbiAgICAgIH1cbiAgICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlXG4gICAgICBmb2N1cy52YWx1ZSA9IGZhbHNlXG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgIGRyYWdnaW5nLnZhbHVlID0gZ2V0RHJhZ2dpbmcoZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgICAgYWN0aXZlLnZhbHVlID0gdHJ1ZVxuICAgICAgZW1pdCgncGFuJywgJ3N0YXJ0JylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICB1cGRhdGVWYWx1ZSgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25CbHVyICgpIHtcbiAgICBmb2N1cy52YWx1ZSA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBvbkFjdGl2YXRlIChldnQpIHtcbiAgICB1cGRhdGVQb3NpdGlvbihldnQsIGdldERyYWdnaW5nKGV2dCkpXG4gICAgdXBkYXRlVmFsdWUoKVxuXG4gICAgcHJldmVudEZvY3VzLnZhbHVlID0gdHJ1ZVxuICAgIGFjdGl2ZS52YWx1ZSA9IHRydWVcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbkRlYWN0aXZhdGUgKCkge1xuICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9IGZhbHNlXG4gICAgYWN0aXZlLnZhbHVlID0gZmFsc2VcblxuICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gICAgb25CbHVyKClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbk1vYmlsZUNsaWNrIChldnQpIHtcbiAgICB1cGRhdGVQb3NpdGlvbihldnQsIGdldERyYWdnaW5nKGV2dCkpXG4gICAgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5dXAgKGV2dCkge1xuICAgIGlmIChrZXlDb2Rlcy5pbmNsdWRlcyhldnQua2V5Q29kZSkpIHtcbiAgICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGV4dENvbnRhaW5lclN0eWxlIChyYXRpbykge1xuICAgIGlmIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBjb25zdCBwID0gJHEubGFuZy5ydGwgIT09IHByb3BzLnJldmVyc2UgPyAxIC0gcmF0aW8gOiByYXRpb1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKGNhbGMoJHsgMiAqIHAgLSAxIH0gKiAkeyBwcm9wcy50aHVtYlNpemUgfSAvIDIgKyAkeyA1MCAtIDEwMCAqIHAgfSUpKWBcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUaHVtYlJlbmRlckZuICh0aHVtYikge1xuICAgIGNvbnN0IGZvY3VzQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPT09IGZhbHNlICYmIChmb2N1cy52YWx1ZSA9PT0gdGh1bWIuZm9jdXNWYWx1ZSB8fCBmb2N1cy52YWx1ZSA9PT0gJ2JvdGgnKVxuICAgICAgICA/ICcgcS1zbGlkZXItLWZvY3VzJ1xuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtc2xpZGVyX190aHVtYiBxLXNsaWRlcl9fdGh1bWIkeyBheGlzLnZhbHVlIH0gcS1zbGlkZXJfX3RodW1iJHsgYXhpcy52YWx1ZSB9LSR7IGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAncnRsJyA6ICdsdHInIH0gYWJzb2x1dGUgbm9uLXNlbGVjdGFibGVgXG4gICAgICArIGZvY3VzQ2xhc3MudmFsdWVcbiAgICAgICsgKHRodW1iLnRodW1iQ29sb3IudmFsdWUgIT09IHZvaWQgMCA/IGAgdGV4dC0keyB0aHVtYi50aHVtYkNvbG9yLnZhbHVlIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgd2lkdGg6IHByb3BzLnRodW1iU2l6ZSxcbiAgICAgIGhlaWdodDogcHJvcHMudGh1bWJTaXplLFxuICAgICAgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIHRodW1iLnJhdGlvLnZhbHVlIH0lYCxcbiAgICAgIHpJbmRleDogZm9jdXMudmFsdWUgPT09IHRodW1iLmZvY3VzVmFsdWUgPyAyIDogdm9pZCAwXG4gICAgfSkpXG5cbiAgICBjb25zdCBwaW5Db2xvciA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHRodW1iLmxhYmVsQ29sb3IudmFsdWUgIT09IHZvaWQgMFxuICAgICAgICA/IGAgdGV4dC0keyB0aHVtYi5sYWJlbENvbG9yLnZhbHVlIH1gXG4gICAgICAgIDogJydcbiAgICApKVxuXG4gICAgY29uc3QgdGV4dENvbnRhaW5lclN0eWxlID0gY29tcHV0ZWQoKCkgPT4gZ2V0VGV4dENvbnRhaW5lclN0eWxlKHRodW1iLnJhdGlvLnZhbHVlKSlcblxuICAgIGNvbnN0IHRleHRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICdxLXNsaWRlcl9fdGV4dCdcbiAgICAgICsgKHRodW1iLmxhYmVsVGV4dENvbG9yLnZhbHVlICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgdGh1bWIubGFiZWxUZXh0Q29sb3IudmFsdWUgfWAgOiAnJylcbiAgICApKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IHRodW1iQ29udGVudCA9IFtcbiAgICAgICAgaCgnc3ZnJywge1xuICAgICAgICAgIGNsYXNzOiAncS1zbGlkZXJfX3RodW1iLXNoYXBlIGFic29sdXRlLWZ1bGwnLFxuICAgICAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgncGF0aCcsIHsgZDogcHJvcHMudGh1bWJQYXRoIH0pXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXNsaWRlcl9fZm9jdXMtcmluZyBmaXQnIH0pXG4gICAgICBdXG5cbiAgICAgIGlmIChwcm9wcy5sYWJlbCA9PT0gdHJ1ZSB8fCBwcm9wcy5sYWJlbEFsd2F5cyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aHVtYkNvbnRlbnQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogcGluQ2xhc3MudmFsdWUgKyAnIGFic29sdXRlIGZpdCBuby1wb2ludGVyLWV2ZW50cycgKyBwaW5Db2xvci52YWx1ZVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgY2xhc3M6IGxhYmVsQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7IG1pbldpZHRoOiBwcm9wcy50aHVtYlNpemUgfVxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IHRleHRDb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBzdHlsZTogdGV4dENvbnRhaW5lclN0eWxlLnZhbHVlXG4gICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICBoKCdzcGFuJywgeyBjbGFzczogdGV4dENsYXNzLnZhbHVlIH0sIHRodW1iLmxhYmVsLnZhbHVlKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKHByb3BzLm5hbWUgIT09IHZvaWQgMCAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlKSB7XG4gICAgICAgICAgaW5qZWN0Rm9ybUlucHV0KHRodW1iQ29udGVudCwgJ3B1c2gnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIC4uLnRodW1iLmdldE5vZGVEYXRhKClcbiAgICAgIH0sIHRodW1iQ29udGVudClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb250ZW50IChzZWxlY3Rpb25CYXJTdHlsZSwgdHJhY2tDb250YWluZXJUYWJpbmRleCwgdHJhY2tDb250YWluZXJFdmVudHMsIGluamVjdFRodW1iKSB7XG4gICAgY29uc3QgdHJhY2tDb250ZW50ID0gW11cblxuICAgIHByb3BzLmlubmVyVHJhY2tDb2xvciAhPT0gJ3RyYW5zcGFyZW50JyAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnaW5uZXInLFxuICAgICAgICBjbGFzczogaW5uZXJCYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IGlubmVyQmFyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgcHJvcHMuc2VsZWN0aW9uQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ3NlbGVjdGlvbicsXG4gICAgICAgIGNsYXNzOiBzZWxlY3Rpb25CYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHNlbGVjdGlvbkJhclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIHByb3BzLm1hcmtlcnMgIT09IGZhbHNlICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdtYXJrZXInLFxuICAgICAgICBjbGFzczogbWFya2VyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBtYXJrZXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBpbmplY3RUaHVtYih0cmFja0NvbnRlbnQpXG5cbiAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAgaERpcihcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICd0cmFja0MnLFxuICAgICAgICAgIGNsYXNzOiB0cmFja0NvbnRhaW5lckNsYXNzLnZhbHVlLFxuICAgICAgICAgIHRhYmluZGV4OiB0cmFja0NvbnRhaW5lclRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgIC4uLnRyYWNrQ29udGFpbmVyRXZlbnRzLnZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogdHJhY2tDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIHN0eWxlOiB0cmFja1N0eWxlLnZhbHVlXG4gICAgICAgICAgfSwgdHJhY2tDb250ZW50KVxuICAgICAgICBdLFxuICAgICAgICAnc2xpZGUnLFxuICAgICAgICBlZGl0YWJsZS52YWx1ZSwgKCkgPT4gcGFuRGlyZWN0aXZlLnZhbHVlXG4gICAgICApXG4gICAgXVxuXG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHByb3BzLnN3aXRjaE1hcmtlckxhYmVsc1NpZGUgPT09IHRydWVcbiAgICAgICAgPyAndW5zaGlmdCdcbiAgICAgICAgOiAncHVzaCdcblxuICAgICAgY29udGVudFsgYWN0aW9uIF0oXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBrZXk6ICdtYXJrZXJMJyxcbiAgICAgICAgICBjbGFzczogbWFya2VyTGFiZWxzQ29udGFpbmVyQ2xhc3MudmFsdWVcbiAgICAgICAgfSwgZ2V0TWFya2VyTGFiZWxzQ29udGVudCgpKVxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50XG4gIH1cblxuICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZToge1xuICAgICAgYWN0aXZlLFxuICAgICAgZm9jdXMsXG4gICAgICBwcmV2ZW50Rm9jdXMsXG4gICAgICBkcmFnZ2luZyxcblxuICAgICAgZWRpdGFibGUsXG4gICAgICBjbGFzc2VzLFxuICAgICAgdGFiaW5kZXgsXG4gICAgICBhdHRyaWJ1dGVzLFxuXG4gICAgICByb3VuZFZhbHVlRm4sXG4gICAgICBrZXlTdGVwLFxuICAgICAgdHJhY2tMZW4sXG4gICAgICBpbm5lck1pbixcbiAgICAgIGlubmVyTWluUmF0aW8sXG4gICAgICBpbm5lck1heCxcbiAgICAgIGlubmVyTWF4UmF0aW8sXG4gICAgICBwb3NpdGlvblByb3AsXG4gICAgICBzaXplUHJvcCxcbiAgICAgIGlzUmV2ZXJzZWRcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgb25BY3RpdmF0ZSxcbiAgICAgIG9uTW9iaWxlQ2xpY2ssXG4gICAgICBvbkJsdXIsXG4gICAgICBvbktleXVwLFxuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIGdldFRodW1iUmVuZGVyRm4sXG4gICAgICBjb252ZXJ0UmF0aW9Ub01vZGVsLFxuICAgICAgY29udmVydE1vZGVsVG9SYXRpbyxcbiAgICAgIGdldERyYWdnaW5nUmF0aW9cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHVzZUZvcm1BdHRycyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS1mb3JtL3ByaXZhdGUudXNlLWZvcm0uanMnXG5cbmltcG9ydCB1c2VTbGlkZXIsIHtcbiAgdXNlU2xpZGVyUHJvcHMsXG4gIHVzZVNsaWRlckVtaXRzLFxuICBrZXlDb2Rlc1xufSBmcm9tICcuL3VzZS1zbGlkZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcblxuY29uc3QgZ2V0Tm9kZURhdGEgPSAoKSA9PiAoe30pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU2xpZGVyJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVNsaWRlclByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHR5cGVvZiB2ID09PSAnbnVtYmVyJyB8fCB2ID09PSBudWxsXG4gICAgfSxcblxuICAgIGxhYmVsVmFsdWU6IFsgU3RyaW5nLCBOdW1iZXIgXVxuICB9LFxuXG4gIGVtaXRzOiB1c2VTbGlkZXJFbWl0cyxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgeyBzdGF0ZSwgbWV0aG9kcyB9ID0gdXNlU2xpZGVyKHtcbiAgICAgIHVwZGF0ZVZhbHVlLCB1cGRhdGVQb3NpdGlvbiwgZ2V0RHJhZ2dpbmcsXG4gICAgICBmb3JtQXR0cnM6IHVzZUZvcm1BdHRycyhwcm9wcylcbiAgICB9KVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGN1clJhdGlvID0gcmVmKDApXG4gICAgY29uc3QgbW9kZWwgPSByZWYoMClcblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZU1vZGVsICgpIHtcbiAgICAgIG1vZGVsLnZhbHVlID0gcHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbFxuICAgICAgICA/IHN0YXRlLmlubmVyTWluLnZhbHVlXG4gICAgICAgIDogYmV0d2Vlbihwcm9wcy5tb2RlbFZhbHVlLCBzdGF0ZS5pbm5lck1pbi52YWx1ZSwgc3RhdGUuaW5uZXJNYXgudmFsdWUpXG4gICAgfVxuXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBgJHsgcHJvcHMubW9kZWxWYWx1ZSB9fCR7IHN0YXRlLmlubmVyTWluLnZhbHVlIH18JHsgc3RhdGUuaW5uZXJNYXgudmFsdWUgfWAsXG4gICAgICBub3JtYWxpemVNb2RlbFxuICAgIClcblxuICAgIG5vcm1hbGl6ZU1vZGVsKClcblxuICAgIGNvbnN0IG1vZGVsUmF0aW8gPSBjb21wdXRlZCgoKSA9PiBtZXRob2RzLmNvbnZlcnRNb2RlbFRvUmF0aW8obW9kZWwudmFsdWUpKVxuICAgIGNvbnN0IHJhdGlvID0gY29tcHV0ZWQoKCkgPT4gKHN0YXRlLmFjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/IGN1clJhdGlvLnZhbHVlIDogbW9kZWxSYXRpby52YWx1ZSkpXG5cbiAgICBjb25zdCBzZWxlY3Rpb25CYXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgWyBzdGF0ZS5wb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIHN0YXRlLmlubmVyTWluUmF0aW8udmFsdWUgfSVgLFxuICAgICAgICBbIHN0YXRlLnNpemVQcm9wLnZhbHVlIF06IGAkeyAxMDAgKiAocmF0aW8udmFsdWUgLSBzdGF0ZS5pbm5lck1pblJhdGlvLnZhbHVlKSB9JWBcbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcy5zZWxlY3Rpb25JbWcgIT09IHZvaWQgMCkge1xuICAgICAgICBhY2MuYmFja2dyb3VuZEltYWdlID0gYHVybCgkeyBwcm9wcy5zZWxlY3Rpb25JbWcgfSkgIWltcG9ydGFudGBcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgY29uc3QgZ2V0VGh1bWIgPSBtZXRob2RzLmdldFRodW1iUmVuZGVyRm4oe1xuICAgICAgZm9jdXNWYWx1ZTogdHJ1ZSxcbiAgICAgIGdldE5vZGVEYXRhLFxuICAgICAgcmF0aW8sXG4gICAgICBsYWJlbDogY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgICBwcm9wcy5sYWJlbFZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHByb3BzLmxhYmVsVmFsdWVcbiAgICAgICAgICA6IG1vZGVsLnZhbHVlXG4gICAgICApKSxcbiAgICAgIHRodW1iQ29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLnRodW1iQ29sb3IgfHwgcHJvcHMuY29sb3IpLFxuICAgICAgbGFiZWxDb2xvcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMubGFiZWxDb2xvciksXG4gICAgICBsYWJlbFRleHRDb2xvcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMubGFiZWxUZXh0Q29sb3IpXG4gICAgfSlcblxuICAgIGNvbnN0IHRyYWNrQ29udGFpbmVyRXZlbnRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmVkaXRhYmxlLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gJHEucGxhdGZvcm0uaXMubW9iaWxlID09PSB0cnVlXG4gICAgICAgID8geyBvbkNsaWNrOiBtZXRob2RzLm9uTW9iaWxlQ2xpY2sgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIG9uTW91c2Vkb3duOiBtZXRob2RzLm9uQWN0aXZhdGUsXG4gICAgICAgICAgICBvbkZvY3VzLFxuICAgICAgICAgICAgb25CbHVyOiBtZXRob2RzLm9uQmx1cixcbiAgICAgICAgICAgIG9uS2V5ZG93bixcbiAgICAgICAgICAgIG9uS2V5dXA6IG1ldGhvZHMub25LZXl1cFxuICAgICAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVmFsdWUgKGNoYW5nZSkge1xuICAgICAgaWYgKG1vZGVsLnZhbHVlICE9PSBwcm9wcy5tb2RlbFZhbHVlKSB7XG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbW9kZWwudmFsdWUpXG4gICAgICB9XG4gICAgICBjaGFuZ2UgPT09IHRydWUgJiYgZW1pdCgnY2hhbmdlJywgbW9kZWwudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RHJhZ2dpbmcgKCkge1xuICAgICAgcmV0dXJuIHJvb3RSZWYudmFsdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbiAoZXZlbnQsIGRyYWdnaW5nID0gc3RhdGUuZHJhZ2dpbmcudmFsdWUpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gbWV0aG9kcy5nZXREcmFnZ2luZ1JhdGlvKGV2ZW50LCBkcmFnZ2luZylcblxuICAgICAgbW9kZWwudmFsdWUgPSBtZXRob2RzLmNvbnZlcnRSYXRpb1RvTW9kZWwocmF0aW8pXG5cbiAgICAgIGN1clJhdGlvLnZhbHVlID0gcHJvcHMuc25hcCAhPT0gdHJ1ZSB8fCBwcm9wcy5zdGVwID09PSAwXG4gICAgICAgID8gcmF0aW9cbiAgICAgICAgOiBtZXRob2RzLmNvbnZlcnRNb2RlbFRvUmF0aW8obW9kZWwudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1cyAoKSB7XG4gICAgICBzdGF0ZS5mb2N1cy52YWx1ZSA9IHRydWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktleWRvd24gKGV2dCkge1xuICAgICAgaWYgKGtleUNvZGVzLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSA9PT0gZmFsc2UpIHJldHVyblxuXG4gICAgICBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHN0ZXBWYWwgPSAoWyAzNCwgMzMgXS5pbmNsdWRlcyhldnQua2V5Q29kZSkgPyAxMCA6IDEpICogc3RhdGUua2V5U3RlcC52YWx1ZSxcbiAgICAgICAgb2Zmc2V0ID0gKFxuICAgICAgICAgIChbIDM0LCAzNywgNDAgXS5pbmNsdWRlcyhldnQua2V5Q29kZSkgPyAtMSA6IDEpXG4gICAgICAgICAgKiAoc3RhdGUuaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/IC0xIDogMSlcbiAgICAgICAgICAqIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IC0xIDogMSkgKiBzdGVwVmFsXG4gICAgICAgIClcblxuICAgICAgbW9kZWwudmFsdWUgPSBiZXR3ZWVuKFxuICAgICAgICBzdGF0ZS5yb3VuZFZhbHVlRm4udmFsdWUobW9kZWwudmFsdWUgKyBvZmZzZXQpLFxuICAgICAgICBzdGF0ZS5pbm5lck1pbi52YWx1ZSxcbiAgICAgICAgc3RhdGUuaW5uZXJNYXgudmFsdWVcbiAgICAgIClcblxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gbWV0aG9kcy5nZXRDb250ZW50KFxuICAgICAgICBzZWxlY3Rpb25CYXJTdHlsZSxcbiAgICAgICAgc3RhdGUudGFiaW5kZXgsXG4gICAgICAgIHRyYWNrQ29udGFpbmVyRXZlbnRzLFxuICAgICAgICBub2RlID0+IHsgbm9kZS5wdXNoKGdldFRodW1iKCkpIH1cbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiByb290UmVmLFxuICAgICAgICBjbGFzczogc3RhdGUuY2xhc3Nlcy52YWx1ZSArIChwcm9wcy5tb2RlbFZhbHVlID09PSBudWxsID8gJyBxLXNsaWRlci0tbm8tdmFsdWUnIDogJycpLFxuICAgICAgICAuLi5zdGF0ZS5hdHRyaWJ1dGVzLnZhbHVlLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgIH0sIGNvbnRlbnQpXG4gICAgfVxuICB9XG59KVxuIl0sIm5hbWVzIjpbInJlc3VsdCIsImNsb25lIiwic3RvcCIsInZhbHVlIiwiX2NyZWF0ZUJsb2NrIiwiX25vcm1hbGl6ZUNsYXNzIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfd2l0aEtleXMiLCJfd2l0aE1vZGlmaWVycyIsIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsImRyYWdnaW5nIiwiY2xhc3NlcyIsInJhdGlvIl0sIm1hcHBpbmdzIjoiOzs7QUFFZSxTQUFTLFVBQVcsTUFBTSxPQUFPLG9CQUFJLFFBQU8sR0FBSTtBQUM3RCxNQUFJLE9BQU8sSUFBSSxNQUFNLEtBQU0sUUFBTztBQUNsQyxNQUFJLEtBQUssSUFBSSxJQUFJLEVBQUcsUUFBTyxLQUFLLElBQUksSUFBSTtBQUV4QyxRQUFNLFNBQVMsZ0JBQWdCLE9BQzNCLElBQUksS0FBSyxJQUFJLElBQ1osZ0JBQWdCLFNBQ2IsSUFBSSxPQUFPLEtBQUssUUFBUSxLQUFLLEtBQUssSUFDakMsZ0JBQWdCLE1BQ2Isb0JBQUksSUFBRyxJQUNOLGdCQUFnQixNQUNiLG9CQUFJLElBQUcsSUFDTixPQUFPLEtBQUssZ0JBQWdCLGFBQ3pCLHVCQUFPLE9BQU8sSUFBSSxJQUNqQixLQUFLLGNBQWMsVUFBVSxPQUFPLEtBQUssVUFBVSxnQkFBZ0IsYUFDaEUsT0FDQSxJQUFJLEtBQUssWUFBVztBQU81QyxNQUFJLE9BQU8sS0FBSyxnQkFBZ0IsY0FBYyxPQUFPLEtBQUssWUFBWSxZQUFZO0FBQ2hGLFVBQU0sTUFBTSxLQUFLLFFBQU87QUFFeEIsUUFB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
