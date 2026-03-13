import { h as createComponent, j as getCurrentInstance, r as ref, p as computed, aX as injectProp, aU as nextTick, bK as isDeepEqual, v as h, a8 as QBtn, P as hSlot, V as isRuntimeSsrPreHydration, B as onMounted, s as onBeforeUnmount, C as noop, y as listenOpts, bz as createDirective, bL as cleanEvt, bi as client, bM as preventDraggable, bN as addEvt, bF as position, br as prevent, at as stop, bO as leftClick, bf as stopAndPrevent, Y as defineComponent, Z as useProjectStore, a1 as _export_sfc, a3 as createBlock, a4 as openBlock, a5 as withCtx, a6 as createVNode, ab as createCommentVNode, ae as QInput, af as withKeys, b2 as withModifiers, a7 as createBaseVNode, ac as toDisplayString, ad as normalizeClass } from "./index-DopDLCmk.js";
import { Q as QMenu, c as clearSelection } from "./format-e_oXboN5.js";
import { Q as QTooltip } from "./QTooltip-1NjvHq6L.js";
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
const QToolbar = createComponent({
  name: "QToolbar",
  props: {
    inset: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-toolbar row no-wrap items-center" + (props.inset === true ? " q-toolbar--inset" : "")
    );
    return () => h("div", { class: classes.value, role: "toolbar" }, hSlot(slots.default));
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
export {
  NoteIcon as N,
  QResizeObserver as Q,
  TouchPan as T,
  QToolbar as a,
  QPopupEdit as b,
  getModifierDirections as g,
  shouldStart as s
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZUljb24tQ04yN3A3blQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL2Nsb25lL2Nsb25lLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9wb3B1cC1lZGl0L1FQb3B1cEVkaXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Rvb2xiYXIvUVRvb2xiYXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy91c2UtaHlkcmF0aW9uL3VzZS1oeWRyYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlLnRvdWNoL3RvdWNoLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvZGlyZWN0aXZlcy90b3VjaC1wYW4vVG91Y2hQYW4uanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Ob3RlSWNvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYWRhcHRlZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80MDI5NDA1OFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZURlZXAgKGRhdGEsIGhhc2ggPSBuZXcgV2Vha01hcCgpKSB7XG4gIGlmIChPYmplY3QoZGF0YSkgIT09IGRhdGEpIHJldHVybiBkYXRhXG4gIGlmIChoYXNoLmhhcyhkYXRhKSkgcmV0dXJuIGhhc2guZ2V0KGRhdGEpXG5cbiAgY29uc3QgcmVzdWx0ID0gZGF0YSBpbnN0YW5jZW9mIERhdGVcbiAgICA/IG5ldyBEYXRlKGRhdGEpXG4gICAgOiAoZGF0YSBpbnN0YW5jZW9mIFJlZ0V4cFxuICAgICAgICA/IG5ldyBSZWdFeHAoZGF0YS5zb3VyY2UsIGRhdGEuZmxhZ3MpXG4gICAgICAgIDogKGRhdGEgaW5zdGFuY2VvZiBTZXRcbiAgICAgICAgICAgID8gbmV3IFNldCgpXG4gICAgICAgICAgICA6IChkYXRhIGluc3RhbmNlb2YgTWFwXG4gICAgICAgICAgICAgICAgPyBuZXcgTWFwKClcbiAgICAgICAgICAgICAgICA6ICh0eXBlb2YgZGF0YS5jb25zdHJ1Y3RvciAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgICAgICAgICAgICAgICAgOiAoZGF0YS5wcm90b3R5cGUgIT09IHZvaWQgMCAmJiB0eXBlb2YgZGF0YS5wcm90b3R5cGUuY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgZGF0YS5jb25zdHJ1Y3RvcigpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgKVxuXG4gIGlmICh0eXBlb2YgZGF0YS5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGF0YS52YWx1ZU9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgdmFsID0gZGF0YS52YWx1ZU9mKClcblxuICAgIGlmIChPYmplY3QodmFsKSAhPT0gdmFsKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBuZXcgZGF0YS5jb25zdHJ1Y3Rvcih2YWwpXG5cbiAgICAgIGhhc2guc2V0KGRhdGEsIHJlc3VsdClcblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuXG4gIGhhc2guc2V0KGRhdGEsIHJlc3VsdClcblxuICBpZiAoZGF0YSBpbnN0YW5jZW9mIFNldCkge1xuICAgIGRhdGEuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgcmVzdWx0LmFkZChjbG9uZURlZXAodmFsLCBoYXNoKSlcbiAgICB9KVxuICB9XG4gIGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBNYXApIHtcbiAgICBkYXRhLmZvckVhY2goKHZhbCwga2V5KSA9PiB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgY2xvbmVEZWVwKHZhbCwgaGFzaCkpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgIHJlc3VsdCxcbiAgICAuLi5PYmplY3Qua2V5cyhkYXRhKS5tYXAoa2V5ID0+ICh7IFsga2V5IF06IGNsb25lRGVlcChkYXRhWyBrZXkgXSwgaGFzaCkgfSkpXG4gIClcbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRTWVudSBmcm9tICcuLi9tZW51L1FNZW51LmpzJ1xuaW1wb3J0IFFCdG4gZnJvbSAnLi4vYnRuL1FCdG4uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCBjbG9uZSBmcm9tICcuLi8uLi91dGlscy9jbG9uZS9jbG9uZS5qcydcbmltcG9ydCB7IGlzRGVlcEVxdWFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMvaXMuanMnXG5pbXBvcnQgeyBpbmplY3RQcm9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5pbmplY3Qtb2JqLXByb3AvaW5qZWN0LW9iai1wcm9wLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVBvcHVwRWRpdCcsXG5cbiAgcHJvcHM6IHtcbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBidXR0b25zOiBCb29sZWFuLFxuICAgIGxhYmVsU2V0OiBTdHJpbmcsXG4gICAgbGFiZWxDYW5jZWw6IFN0cmluZyxcblxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeSdcbiAgICB9LFxuICAgIHZhbGlkYXRlOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHRydWVcbiAgICB9LFxuXG4gICAgYXV0b1NhdmU6IEJvb2xlYW4sXG5cbiAgICAvKiBtZW51IHByb3BzIG92ZXJyaWRlcyAqL1xuICAgIGNvdmVyOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgLyogZW5kIG9mIG1lbnUgcHJvcHMgKi9cblxuICAgIGRpc2FibGU6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogW1xuICAgICd1cGRhdGU6bW9kZWxWYWx1ZScsICdzYXZlJywgJ2NhbmNlbCcsXG4gICAgJ2JlZm9yZVNob3cnLCAnc2hvdycsICdiZWZvcmVIaWRlJywgJ2hpZGUnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBtZW51UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSByZWYoJycpXG4gICAgY29uc3QgY3VycmVudE1vZGVsID0gcmVmKCcnKVxuXG4gICAgbGV0IHZhbGlkYXRlZCA9IGZhbHNlXG5cbiAgICBjb25zdCBzY29wZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBpbmplY3RQcm9wKHtcbiAgICAgICAgaW5pdGlhbFZhbHVlOiBpbml0aWFsVmFsdWUudmFsdWUsXG4gICAgICAgIHZhbGlkYXRlOiBwcm9wcy52YWxpZGF0ZSxcbiAgICAgICAgc2V0LFxuICAgICAgICBjYW5jZWwsXG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uXG4gICAgICB9LCAndmFsdWUnLCAoKSA9PiBjdXJyZW50TW9kZWwudmFsdWUsIHZhbCA9PiB7IGN1cnJlbnRNb2RlbC52YWx1ZSA9IHZhbCB9KVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBzZXQgKCkge1xuICAgICAgaWYgKHByb3BzLnZhbGlkYXRlKGN1cnJlbnRNb2RlbC52YWx1ZSkgPT09IGZhbHNlKSByZXR1cm5cblxuICAgICAgaWYgKGhhc01vZGVsQ2hhbmdlZCgpID09PSB0cnVlKSB7XG4gICAgICAgIGVtaXQoJ3NhdmUnLCBjdXJyZW50TW9kZWwudmFsdWUsIGluaXRpYWxWYWx1ZS52YWx1ZSlcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBjdXJyZW50TW9kZWwudmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGNsb3NlTWVudSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsICgpIHtcbiAgICAgIGlmIChoYXNNb2RlbENoYW5nZWQoKSA9PT0gdHJ1ZSkge1xuICAgICAgICBlbWl0KCdjYW5jZWwnLCBjdXJyZW50TW9kZWwudmFsdWUsIGluaXRpYWxWYWx1ZS52YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY2xvc2VNZW51KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbiAoKSB7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIG1lbnVSZWYudmFsdWUudXBkYXRlUG9zaXRpb24oKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNNb2RlbENoYW5nZWQgKCkge1xuICAgICAgcmV0dXJuIGlzRGVlcEVxdWFsKGN1cnJlbnRNb2RlbC52YWx1ZSwgaW5pdGlhbFZhbHVlLnZhbHVlKSA9PT0gZmFsc2VcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZU1lbnUgKCkge1xuICAgICAgdmFsaWRhdGVkID0gdHJ1ZVxuICAgICAgbWVudVJlZi52YWx1ZS5oaWRlKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkJlZm9yZVNob3cgKCkge1xuICAgICAgdmFsaWRhdGVkID0gZmFsc2VcbiAgICAgIGluaXRpYWxWYWx1ZS52YWx1ZSA9IGNsb25lKHByb3BzLm1vZGVsVmFsdWUpXG4gICAgICBjdXJyZW50TW9kZWwudmFsdWUgPSBjbG9uZShwcm9wcy5tb2RlbFZhbHVlKVxuICAgICAgZW1pdCgnYmVmb3JlU2hvdycpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TaG93ICgpIHtcbiAgICAgIGVtaXQoJ3Nob3cnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQmVmb3JlSGlkZSAoKSB7XG4gICAgICBpZiAodmFsaWRhdGVkID09PSBmYWxzZSAmJiBoYXNNb2RlbENoYW5nZWQoKSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAocHJvcHMuYXV0b1NhdmUgPT09IHRydWUgJiYgcHJvcHMudmFsaWRhdGUoY3VycmVudE1vZGVsLnZhbHVlKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGVtaXQoJ3NhdmUnLCBjdXJyZW50TW9kZWwudmFsdWUsIGluaXRpYWxWYWx1ZS52YWx1ZSlcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGN1cnJlbnRNb2RlbC52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBlbWl0KCdjYW5jZWwnLCBjdXJyZW50TW9kZWwudmFsdWUsIGluaXRpYWxWYWx1ZS52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlbWl0KCdiZWZvcmVIaWRlJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkhpZGUgKCkge1xuICAgICAgZW1pdCgnaGlkZScpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHNsb3RzLmRlZmF1bHQgIT09IHZvaWQgMFxuICAgICAgICA/IFtdLmNvbmNhdChzbG90cy5kZWZhdWx0KHNjb3BlLnZhbHVlKSlcbiAgICAgICAgOiBbXVxuXG4gICAgICBwcm9wcy50aXRsZSAmJiBjaGlsZC51bnNoaWZ0KFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1kaWFsb2dfX3RpdGxlIHEtbXQtc20gcS1tYi1zbScgfSwgcHJvcHMudGl0bGUpXG4gICAgICApXG5cbiAgICAgIHByb3BzLmJ1dHRvbnMgPT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtcG9wdXAtZWRpdF9fYnV0dG9ucyByb3cganVzdGlmeS1jZW50ZXIgbm8td3JhcCcgfSwgW1xuICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgZmxhdDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbENhbmNlbCB8fCAkcS5sYW5nLmxhYmVsLmNhbmNlbCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IGNhbmNlbFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgZmxhdDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbFNldCB8fCAkcS5sYW5nLmxhYmVsLnNldCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IHNldFxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIHNldCxcbiAgICAgIGNhbmNlbCxcbiAgICAgIHNob3cgKGUpIHsgbWVudVJlZi52YWx1ZT8uc2hvdyhlKSB9LFxuICAgICAgaGlkZSAoZSkgeyBtZW51UmVmLnZhbHVlPy5oaWRlKGUpIH0sXG4gICAgICB1cGRhdGVQb3NpdGlvblxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHJldHVyblxuXG4gICAgICByZXR1cm4gaChRTWVudSwge1xuICAgICAgICByZWY6IG1lbnVSZWYsXG4gICAgICAgIGNsYXNzOiAncS1wb3B1cC1lZGl0JyxcbiAgICAgICAgY292ZXI6IHByb3BzLmNvdmVyLFxuICAgICAgICBvbkJlZm9yZVNob3csXG4gICAgICAgIG9uU2hvdyxcbiAgICAgICAgb25CZWZvcmVIaWRlLFxuICAgICAgICBvbkhpZGUsXG4gICAgICAgIG9uRXNjYXBlS2V5OiBjYW5jZWxcbiAgICAgIH0sIGdldENvbnRlbnQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRvb2xiYXInLFxuXG4gIHByb3BzOiB7XG4gICAgaW5zZXQ6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdG9vbGJhciByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXInXG4gICAgICArIChwcm9wcy5pbnNldCA9PT0gdHJ1ZSA/ICcgcS10b29sYmFyLS1pbnNldCcgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSwgcm9sZTogJ3Rvb2xiYXInIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgcmVmLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnXG5cbi8vIHVzaW5nIGl0IHRvIG1hbmFnZSBTU1IgcmVuZGVyaW5nIHdpdGggYmVzdCBwZXJmb3JtYW5jZVxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9wbGF0Zm9ybS9QbGF0Zm9ybS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBpc0h5ZHJhdGVkID0gcmVmKCFpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24udmFsdWUpXG5cbiAgaWYgKGlzSHlkcmF0ZWQudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGlzSHlkcmF0ZWQudmFsdWUgPSB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7IGlzSHlkcmF0ZWQgfVxufVxuIiwiaW1wb3J0IHsgaCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSwgbmV4dFRpY2sgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VIeWRyYXRpb24gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLWh5ZHJhdGlvbi91c2UtaHlkcmF0aW9uLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBsaXN0ZW5PcHRzLCBub29wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQvZXZlbnQuanMnXG5cbmNvbnN0IGhhc09ic2VydmVyID0gdHlwZW9mIFJlc2l6ZU9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuY29uc3QgcmVzaXplUHJvcHMgPSBoYXNPYnNlcnZlciA9PT0gdHJ1ZVxuICA/IHt9XG4gIDoge1xuICAgICAgc3R5bGU6ICdkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDotMTsnLFxuICAgICAgdXJsOiAnYWJvdXQ6YmxhbmsnXG4gICAgfVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVJlc2l6ZU9ic2VydmVyJyxcblxuICBwcm9wczoge1xuICAgIGRlYm91bmNlOiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAxMDBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Jlc2l6ZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgaWYgKF9fUVVBU0FSX1NTUl9TRVJWRVJfXykgeyByZXR1cm4gbm9vcCB9XG5cbiAgICBsZXQgdGltZXIgPSBudWxsLCB0YXJnZXRFbCwgc2l6ZSA9IHsgd2lkdGg6IC0xLCBoZWlnaHQ6IC0xIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXIgKGltbWVkaWF0ZWx5KSB7XG4gICAgICBpZiAoaW1tZWRpYXRlbHkgPT09IHRydWUgfHwgcHJvcHMuZGVib3VuY2UgPT09IDAgfHwgcHJvcHMuZGVib3VuY2UgPT09ICcwJykge1xuICAgICAgICBlbWl0RXZlbnQoKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGltZXIgPT09IG51bGwpIHtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGVtaXRFdmVudCwgcHJvcHMuZGVib3VuY2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1pdEV2ZW50ICgpIHtcbiAgICAgIGlmICh0aW1lciAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIHRpbWVyID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0RWwpIHtcbiAgICAgICAgY29uc3QgeyBvZmZzZXRXaWR0aDogd2lkdGgsIG9mZnNldEhlaWdodDogaGVpZ2h0IH0gPSB0YXJnZXRFbFxuXG4gICAgICAgIGlmICh3aWR0aCAhPT0gc2l6ZS53aWR0aCB8fCBoZWlnaHQgIT09IHNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgc2l6ZSA9IHsgd2lkdGgsIGhlaWdodCB9XG4gICAgICAgICAgZW1pdCgncmVzaXplJywgc2l6ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZFxuICAgIHByb3h5LnRyaWdnZXIgPSB0cmlnZ2VyXG5cbiAgICBpZiAoaGFzT2JzZXJ2ZXIgPT09IHRydWUpIHtcbiAgICAgIGxldCBvYnNlcnZlclxuXG4gICAgICAvLyBpbml0aWFsaXplIGFzIHNvb24gYXMgcG9zc2libGVcbiAgICAgIGNvbnN0IGluaXQgPSBzdG9wID0+IHtcbiAgICAgICAgdGFyZ2V0RWwgPSBwcm94eS4kZWwucGFyZW50Tm9kZVxuXG4gICAgICAgIGlmICh0YXJnZXRFbCkge1xuICAgICAgICAgIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKHRyaWdnZXIpXG4gICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXRFbClcbiAgICAgICAgICBlbWl0RXZlbnQoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0b3AgIT09IHRydWUpIHtcbiAgICAgICAgICBuZXh0VGljaygoKSA9PiB7IGluaXQodHJ1ZSkgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbk1vdW50ZWQoKCkgPT4geyBpbml0KCkgfSlcblxuICAgICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgICAgdGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KHRpbWVyKVxuXG4gICAgICAgIGlmIChvYnNlcnZlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLmRpc2Nvbm5lY3QgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKHRhcmdldEVsKSB7IC8vIEZGIGZvciBBbmRyb2lkXG4gICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUodGFyZ2V0RWwpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH1cbiAgICBlbHNlIHsgLy8gbm8gb2JzZXJ2ZXIsIHNvIGZhbGxiYWNrIHRvIG9sZCBpZnJhbWUgbWV0aG9kXG4gICAgICBjb25zdCB7IGlzSHlkcmF0ZWQgfSA9IHVzZUh5ZHJhdGlvbigpXG5cbiAgICAgIGxldCBjdXJEb2NWaWV3XG5cbiAgICAgIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgICAgICBpZiAodGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VyRG9jVmlldyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgLy8gaU9TIGlzIGZ1enp5LCBuZWVkIHRvIGNoZWNrIGl0IGZpcnN0XG4gICAgICAgICAgaWYgKGN1ckRvY1ZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBjdXJEb2NWaWV3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRyaWdnZXIsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VyRG9jVmlldyA9IHZvaWQgMFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uT2JqTG9hZCAoKSB7XG4gICAgICAgIGNsZWFudXAoKVxuXG4gICAgICAgIGlmICh0YXJnZXRFbD8uY29udGVudERvY3VtZW50KSB7XG4gICAgICAgICAgY3VyRG9jVmlldyA9IHRhcmdldEVsLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlld1xuICAgICAgICAgIGN1ckRvY1ZpZXcuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdHJpZ2dlciwgbGlzdGVuT3B0cy5wYXNzaXZlKVxuICAgICAgICAgIGVtaXRFdmVudCgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHRhcmdldEVsID0gcHJveHkuJGVsXG4gICAgICAgICAgdGFyZ2V0RWwgJiYgb25PYmpMb2FkKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIG9uQmVmb3JlVW5tb3VudChjbGVhbnVwKVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoaXNIeWRyYXRlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBoKCdvYmplY3QnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtLWF2b2lkLWNhcmQtYm9yZGVyJyxcbiAgICAgICAgICAgIHN0eWxlOiByZXNpemVQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIHRhYmluZGV4OiAtMSwgLy8gZml4IGZvciBGaXJlZm94XG4gICAgICAgICAgICB0eXBlOiAndGV4dC9odG1sJyxcbiAgICAgICAgICAgIGRhdGE6IHJlc2l6ZVByb3BzLnVybCxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgIG9uTG9hZDogb25PYmpMb2FkXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiIsImNvbnN0IG1vZGlmaWVyc0FsbCA9IHtcbiAgbGVmdDogdHJ1ZSxcbiAgcmlnaHQ6IHRydWUsXG4gIHVwOiB0cnVlLFxuICBkb3duOiB0cnVlLFxuICBob3Jpem9udGFsOiB0cnVlLFxuICB2ZXJ0aWNhbDogdHJ1ZVxufVxuXG5jb25zdCBkaXJlY3Rpb25MaXN0ID0gT2JqZWN0LmtleXMobW9kaWZpZXJzQWxsKVxuXG5tb2RpZmllcnNBbGwuYWxsID0gdHJ1ZVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kaWZpZXJEaXJlY3Rpb25zIChtb2QpIHtcbiAgY29uc3QgZGlyID0ge31cblxuICBmb3IgKGNvbnN0IGRpcmVjdGlvbiBvZiBkaXJlY3Rpb25MaXN0KSB7XG4gICAgaWYgKG1vZFsgZGlyZWN0aW9uIF0gPT09IHRydWUpIHtcbiAgICAgIGRpclsgZGlyZWN0aW9uIF0gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGRpcikubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyc0FsbFxuICB9XG5cbiAgaWYgKGRpci5ob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgZGlyLmxlZnQgPSBkaXIucmlnaHQgPSB0cnVlXG4gIH1cbiAgZWxzZSBpZiAoZGlyLmxlZnQgPT09IHRydWUgJiYgZGlyLnJpZ2h0ID09PSB0cnVlKSB7XG4gICAgZGlyLmhvcml6b250YWwgPSB0cnVlXG4gIH1cblxuICBpZiAoZGlyLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgZGlyLnVwID0gZGlyLmRvd24gPSB0cnVlXG4gIH1cbiAgZWxzZSBpZiAoZGlyLnVwID09PSB0cnVlICYmIGRpci5kb3duID09PSB0cnVlKSB7XG4gICAgZGlyLnZlcnRpY2FsID0gdHJ1ZVxuICB9XG5cbiAgaWYgKGRpci5ob3Jpem9udGFsID09PSB0cnVlICYmIGRpci52ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgIGRpci5hbGwgPSB0cnVlXG4gIH1cblxuICByZXR1cm4gZGlyXG59XG5cbi8vIFRoaXMgaXMgZXNwZWNpYWxseSBpbXBvcnRhbnQgKG5vdCB0aGUgbWFpbiByZWFzb24sIGJ1dCBpbXBvcnRhbnQpXG4vLyBmb3IgVG91Y2hTd2lwZSBkaXJlY3RpdmUgcnVubmluZyBvbiBGaXJlZm94XG4vLyBiZWNhdXNlIHRleHQgc2VsZWN0aW9uIG9uIHN1Y2ggZWxlbWVudHMgY2Fubm90IGJlIGRldGVybWluZWRcbi8vIHdpdGhvdXQgYWRkaXRpb25hbCB3b3JrIChvbiB0b3Agb2YgZ2V0U2VsZWN0aW9uKCkgQVBJKVxuLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODU2ODZcbmNvbnN0IGF2b2lkTm9kZU5hbWVzTGlzdCA9IFsgJ0lOUFVUJywgJ1RFWFRBUkVBJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRTdGFydCAoZXZ0LCBjdHgpIHtcbiAgcmV0dXJuIGN0eC5ldmVudCA9PT0gdm9pZCAwXG4gICAgJiYgZXZ0LnRhcmdldCAhPT0gdm9pZCAwXG4gICAgJiYgZXZ0LnRhcmdldC5kcmFnZ2FibGUgIT09IHRydWVcbiAgICAmJiB0eXBlb2YgY3R4LmhhbmRsZXIgPT09ICdmdW5jdGlvbidcbiAgICAmJiBhdm9pZE5vZGVOYW1lc0xpc3QuaW5jbHVkZXMoZXZ0LnRhcmdldC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpKSA9PT0gZmFsc2VcbiAgICAmJiAoZXZ0LnFDbG9uZWRCeSA9PT0gdm9pZCAwIHx8IGV2dC5xQ2xvbmVkQnkuaW5kZXhPZihjdHgudWlkKSA9PT0gLTEpXG59XG4iLCJpbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi9wbHVnaW5zL3BsYXRmb3JtL1BsYXRmb3JtLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRNb2RpZmllckRpcmVjdGlvbnMsIHNob3VsZFN0YXJ0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS50b3VjaC90b3VjaC5qcydcbmltcG9ydCB7IGFkZEV2dCwgY2xlYW5FdnQsIHBvc2l0aW9uLCBsZWZ0Q2xpY2ssIHByZXZlbnQsIHN0b3AsIHN0b3BBbmRQcmV2ZW50LCBwcmV2ZW50RHJhZ2dhYmxlLCBub29wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQvZXZlbnQuanMnXG5pbXBvcnQgeyBjbGVhclNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuc2VsZWN0aW9uL3NlbGVjdGlvbi5qcydcbmltcG9ydCBnZXRTU1JQcm9wcyBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLm5vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0vbm9vcC1zc3ItZGlyZWN0aXZlLXRyYW5zZm9ybS5qcydcblxuZnVuY3Rpb24gZ2V0Q2hhbmdlcyAoZXZ0LCBjdHgsIGlzRmluYWwpIHtcbiAgY29uc3QgcG9zID0gcG9zaXRpb24oZXZ0KVxuICBsZXRcbiAgICBkaXIsXG4gICAgZGlzdFggPSBwb3MubGVmdCAtIGN0eC5ldmVudC54LFxuICAgIGRpc3RZID0gcG9zLnRvcCAtIGN0eC5ldmVudC55LFxuICAgIGFic1ggPSBNYXRoLmFicyhkaXN0WCksXG4gICAgYWJzWSA9IE1hdGguYWJzKGRpc3RZKVxuXG4gIGNvbnN0IGRpcmVjdGlvbiA9IGN0eC5kaXJlY3Rpb25cblxuICBpZiAoZGlyZWN0aW9uLmhvcml6b250YWwgPT09IHRydWUgJiYgZGlyZWN0aW9uLnZlcnRpY2FsICE9PSB0cnVlKSB7XG4gICAgZGlyID0gZGlzdFggPCAwID8gJ2xlZnQnIDogJ3JpZ2h0J1xuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi5ob3Jpem9udGFsICE9PSB0cnVlICYmIGRpcmVjdGlvbi52ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgIGRpciA9IGRpc3RZIDwgMCA/ICd1cCcgOiAnZG93bidcbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24udXAgPT09IHRydWUgJiYgZGlzdFkgPCAwKSB7XG4gICAgZGlyID0gJ3VwJ1xuICAgIGlmIChhYnNYID4gYWJzWSkge1xuICAgICAgaWYgKGRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlICYmIGRpc3RYIDwgMCkge1xuICAgICAgICBkaXIgPSAnbGVmdCdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbi5yaWdodCA9PT0gdHJ1ZSAmJiBkaXN0WCA+IDApIHtcbiAgICAgICAgZGlyID0gJ3JpZ2h0J1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24uZG93biA9PT0gdHJ1ZSAmJiBkaXN0WSA+IDApIHtcbiAgICBkaXIgPSAnZG93bidcbiAgICBpZiAoYWJzWCA+IGFic1kpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24ubGVmdCA9PT0gdHJ1ZSAmJiBkaXN0WCA8IDApIHtcbiAgICAgICAgZGlyID0gJ2xlZnQnXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24ucmlnaHQgPT09IHRydWUgJiYgZGlzdFggPiAwKSB7XG4gICAgICAgIGRpciA9ICdyaWdodCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLmxlZnQgPT09IHRydWUgJiYgZGlzdFggPCAwKSB7XG4gICAgZGlyID0gJ2xlZnQnXG4gICAgaWYgKGFic1ggPCBhYnNZKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uLnVwID09PSB0cnVlICYmIGRpc3RZIDwgMCkge1xuICAgICAgICBkaXIgPSAndXAnXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24uZG93biA9PT0gdHJ1ZSAmJiBkaXN0WSA+IDApIHtcbiAgICAgICAgZGlyID0gJ2Rvd24nXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi5yaWdodCA9PT0gdHJ1ZSAmJiBkaXN0WCA+IDApIHtcbiAgICBkaXIgPSAncmlnaHQnXG4gICAgaWYgKGFic1ggPCBhYnNZKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uLnVwID09PSB0cnVlICYmIGRpc3RZIDwgMCkge1xuICAgICAgICBkaXIgPSAndXAnXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24uZG93biA9PT0gdHJ1ZSAmJiBkaXN0WSA+IDApIHtcbiAgICAgICAgZGlyID0gJ2Rvd24nXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IHN5bnRoZXRpYyA9IGZhbHNlXG5cbiAgaWYgKGRpciA9PT0gdm9pZCAwICYmIGlzRmluYWwgPT09IGZhbHNlKSB7XG4gICAgaWYgKGN0eC5ldmVudC5pc0ZpcnN0ID09PSB0cnVlIHx8IGN0eC5ldmVudC5sYXN0RGlyID09PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGRpciA9IGN0eC5ldmVudC5sYXN0RGlyXG4gICAgc3ludGhldGljID0gdHJ1ZVxuXG4gICAgaWYgKGRpciA9PT0gJ2xlZnQnIHx8IGRpciA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcG9zLmxlZnQgLT0gZGlzdFhcbiAgICAgIGFic1ggPSAwXG4gICAgICBkaXN0WCA9IDBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwb3MudG9wIC09IGRpc3RZXG4gICAgICBhYnNZID0gMFxuICAgICAgZGlzdFkgPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzeW50aGV0aWMsXG4gICAgcGF5bG9hZDoge1xuICAgICAgZXZ0LFxuICAgICAgdG91Y2g6IGN0eC5ldmVudC5tb3VzZSAhPT0gdHJ1ZSxcbiAgICAgIG1vdXNlOiBjdHguZXZlbnQubW91c2UgPT09IHRydWUsXG4gICAgICBwb3NpdGlvbjogcG9zLFxuICAgICAgZGlyZWN0aW9uOiBkaXIsXG4gICAgICBpc0ZpcnN0OiBjdHguZXZlbnQuaXNGaXJzdCxcbiAgICAgIGlzRmluYWw6IGlzRmluYWwgPT09IHRydWUsXG4gICAgICBkdXJhdGlvbjogRGF0ZS5ub3coKSAtIGN0eC5ldmVudC50aW1lLFxuICAgICAgZGlzdGFuY2U6IHtcbiAgICAgICAgeDogYWJzWCxcbiAgICAgICAgeTogYWJzWVxuICAgICAgfSxcbiAgICAgIG9mZnNldDoge1xuICAgICAgICB4OiBkaXN0WCxcbiAgICAgICAgeTogZGlzdFlcbiAgICAgIH0sXG4gICAgICBkZWx0YToge1xuICAgICAgICB4OiBwb3MubGVmdCAtIGN0eC5ldmVudC5sYXN0WCxcbiAgICAgICAgeTogcG9zLnRvcCAtIGN0eC5ldmVudC5sYXN0WVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5sZXQgdWlkID0gMFxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXJlY3RpdmUoX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gID8geyBuYW1lOiAndG91Y2gtcGFuJywgZ2V0U1NSUHJvcHMgfVxuICA6IHtcbiAgICAgIG5hbWU6ICd0b3VjaC1wYW4nLFxuXG4gICAgICBiZWZvcmVNb3VudCAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycyB9KSB7XG4gICAgICAgIC8vIGVhcmx5IHJldHVybiwgd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kaWZpZXJzLm1vdXNlICE9PSB0cnVlXG4gICAgICAgICAgJiYgY2xpZW50Lmhhcy50b3VjaCAhPT0gdHJ1ZVxuICAgICAgICApIHJldHVyblxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUV2ZW50IChldnQsIG1vdXNlRXZlbnQpIHtcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlID09PSB0cnVlICYmIG1vdXNlRXZlbnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0b3BBbmRQcmV2ZW50KGV2dClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2RpZmllcnMuc3RvcCA9PT0gdHJ1ZSAmJiBzdG9wKGV2dClcbiAgICAgICAgICAgIG1vZGlmaWVycy5wcmV2ZW50ID09PSB0cnVlICYmIHByZXZlbnQoZXZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICB1aWQ6ICdxdnRwXycgKyAodWlkKyspLFxuICAgICAgICAgIGhhbmRsZXI6IHZhbHVlLFxuICAgICAgICAgIG1vZGlmaWVycyxcbiAgICAgICAgICBkaXJlY3Rpb246IGdldE1vZGlmaWVyRGlyZWN0aW9ucyhtb2RpZmllcnMpLFxuXG4gICAgICAgICAgbm9vcCxcblxuICAgICAgICAgIG1vdXNlU3RhcnQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0KGV2dCwgY3R4KSAmJiBsZWZ0Q2xpY2soZXZ0KSkge1xuICAgICAgICAgICAgICBhZGRFdnQoY3R4LCAndGVtcCcsIFtcbiAgICAgICAgICAgICAgICBbIGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgJ21vdmUnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNldXAnLCAnZW5kJywgJ3Bhc3NpdmVDYXB0dXJlJyBdXG4gICAgICAgICAgICAgIF0pXG5cbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgdG91Y2hTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnQoZXZ0LCBjdHgpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXRcblxuICAgICAgICAgICAgICBhZGRFdnQoY3R4LCAndGVtcCcsIFtcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNobW92ZScsICdtb3ZlJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2hjYW5jZWwnLCAnZW5kJywgJ3Bhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2hlbmQnLCAnZW5kJywgJ3Bhc3NpdmVDYXB0dXJlJyBdXG4gICAgICAgICAgICAgIF0pXG5cbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc3RhcnQgKGV2dCwgbW91c2VFdmVudCkge1xuICAgICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgdHJ1ZSlcbiAgICAgICAgICAgIGN0eC5sYXN0RXZ0ID0gZXZ0XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAqIFN0b3AgcHJvcGFnYXRpb24gc28gcG9zc2libGUgdXBwZXIgdi10b3VjaC1wYW4gZG9uJ3QgY2F0Y2ggdGhpcyBhcyB3ZWxsO1xuICAgICAgICAgICAgKiBJZiB3ZSdyZSBub3QgdGhlIHRhcmdldCAoYmFzZWQgb24gbW9kaWZpZXJzKSwgd2UnbGwgcmUtZW1pdCB0aGUgZXZlbnQgbGF0ZXJcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAobW91c2VFdmVudCA9PT0gdHJ1ZSB8fCBtb2RpZmllcnMuc3RvcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAqIGFyZSB3ZSBkaXJlY3RseSBzd2l0Y2hpbmcgdG8gZGV0ZWN0ZWQgc3RhdGU/XG4gICAgICAgICAgICAgICogY2xvbmUgZXZlbnQgb25seSBvdGhlcndpc2VcbiAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24uYWxsICE9PSB0cnVlXG4gICAgICAgICAgICAgICAgLy8gYWNjb3VudCBmb3IgVU1EIHRvbyB3aGVyZSBtb2RpZmllcnMgd2lsbCBiZSBsb3dlcmNhc2VkIHRvIHdvcmtcbiAgICAgICAgICAgICAgICAmJiAobW91c2VFdmVudCAhPT0gdHJ1ZSB8fCAoY3R4Lm1vZGlmaWVycy5tb3VzZUFsbERpciAhPT0gdHJ1ZSAmJiBjdHgubW9kaWZpZXJzLm1vdXNlYWxsZGlyICE9PSB0cnVlKSlcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBldnQudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMVxuICAgICAgICAgICAgICAgICAgPyBuZXcgTW91c2VFdmVudChldnQudHlwZSwgZXZ0KVxuICAgICAgICAgICAgICAgICAgOiBuZXcgVG91Y2hFdmVudChldnQudHlwZSwgZXZ0KVxuXG4gICAgICAgICAgICAgICAgZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUgJiYgcHJldmVudChjbG9uZSlcbiAgICAgICAgICAgICAgICBldnQuY2FuY2VsQnViYmxlID09PSB0cnVlICYmIHN0b3AoY2xvbmUpXG5cbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGNsb25lLCB7XG4gICAgICAgICAgICAgICAgICBxS2V5RXZlbnQ6IGV2dC5xS2V5RXZlbnQsXG4gICAgICAgICAgICAgICAgICBxQ2xpY2tPdXRzaWRlOiBldnQucUNsaWNrT3V0c2lkZSxcbiAgICAgICAgICAgICAgICAgIHFBbmNob3JIYW5kbGVkOiBldnQucUFuY2hvckhhbmRsZWQsXG4gICAgICAgICAgICAgICAgICBxQ2xvbmVkQnk6IGV2dC5xQ2xvbmVkQnkgPT09IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICA/IFsgY3R4LnVpZCBdXG4gICAgICAgICAgICAgICAgICAgIDogZXZ0LnFDbG9uZWRCeS5jb25jYXQoY3R4LnVpZClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgY3R4LmluaXRpYWxFdmVudCA9IHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogZXZ0LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgIGV2ZW50OiBjbG9uZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHN0b3AoZXZ0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB7IGxlZnQsIHRvcCB9ID0gcG9zaXRpb24oZXZ0KVxuXG4gICAgICAgICAgICBjdHguZXZlbnQgPSB7XG4gICAgICAgICAgICAgIHg6IGxlZnQsXG4gICAgICAgICAgICAgIHk6IHRvcCxcbiAgICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgbW91c2U6IG1vdXNlRXZlbnQgPT09IHRydWUsXG4gICAgICAgICAgICAgIGRldGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgaXNGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGxhc3RYOiBsZWZ0LFxuICAgICAgICAgICAgICBsYXN0WTogdG9wXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIG1vdmUgKGV2dCkge1xuICAgICAgICAgICAgaWYgKGN0eC5ldmVudCA9PT0gdm9pZCAwKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgcG9zID0gcG9zaXRpb24oZXZ0KSxcbiAgICAgICAgICAgICAgZGlzdFggPSBwb3MubGVmdCAtIGN0eC5ldmVudC54LFxuICAgICAgICAgICAgICBkaXN0WSA9IHBvcy50b3AgLSBjdHguZXZlbnQueVxuXG4gICAgICAgICAgICAvLyBwcmV2ZW50IGJ1Z2d5IGJyb3dzZXIgYmVoYXZpb3IgKGxpa2UgQmxpbmstYmFzZWQgZW5naW5lIG9uZXMgb24gV2luZG93cylcbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZSBtb3VzZW1vdmUgZXZlbnQgb2NjdXJzIGV2ZW4gaWYgdGhlcmUncyBubyBtb3ZlbWVudCBhZnRlciBtb3VzZWRvd25cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTE2MTQ2NFxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NzIxMzQxXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcXVhc2FyZnJhbWV3b3JrL3F1YXNhci9pc3N1ZXMvMTA3MjFcbiAgICAgICAgICAgIGlmIChkaXN0WCA9PT0gMCAmJiBkaXN0WSA9PT0gMCkgcmV0dXJuXG5cbiAgICAgICAgICAgIGN0eC5sYXN0RXZ0ID0gZXZ0XG5cbiAgICAgICAgICAgIGNvbnN0IGlzTW91c2VFdnQgPSBjdHguZXZlbnQubW91c2UgPT09IHRydWVcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVFdmVudChldnQsIGlzTW91c2VFdnQpXG5cbiAgICAgICAgICAgICAgbGV0IGN1cnNvclxuICAgICAgICAgICAgICBpZiAobW9kaWZpZXJzLnByZXNlcnZlQ3Vyc29yICE9PSB0cnVlICYmIG1vZGlmaWVycy5wcmVzZXJ2ZWN1cnNvciAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnNvciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5jdXJzb3IgfHwgJydcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ2dyYWJiaW5nJ1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaXNNb3VzZUV2dCA9PT0gdHJ1ZSAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXBvaW50ZXItZXZlbnRzLS1jaGlsZHJlbicpXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm9uLXNlbGVjdGFibGUnKVxuICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG5cbiAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCA9IHdpdGhEZWxheWVkRm4gPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB2b2lkIDBcblxuICAgICAgICAgICAgICAgIGlmIChjdXJzb3IgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9IGN1cnNvclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9uLXNlbGVjdGFibGUnKVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzTW91c2VFdnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1wb2ludGVyLWV2ZW50cy0tY2hpbGRyZW4nKVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAod2l0aERlbGF5ZWRGbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgd2l0aERlbGF5ZWRGbigpXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7IHJlbW92ZSgpIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAod2l0aERlbGF5ZWRGbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICB3aXRoRGVsYXllZEZuKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5kZXRlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuaXNGaXJzdCAhPT0gdHJ1ZSAmJiBoYW5kbGVFdmVudChldnQsIGN0eC5ldmVudC5tb3VzZSlcblxuICAgICAgICAgICAgICBjb25zdCB7IHBheWxvYWQsIHN5bnRoZXRpYyB9ID0gZ2V0Q2hhbmdlcyhldnQsIGN0eCwgZmFsc2UpXG5cbiAgICAgICAgICAgICAgaWYgKHBheWxvYWQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGlmIChjdHguaGFuZGxlcihwYXlsb2FkKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgIGN0eC5lbmQoZXZ0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjdHguc3R5bGVDbGVhbnVwID09PSB2b2lkIDAgJiYgY3R4LmV2ZW50LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQubGFzdFggPSBwYXlsb2FkLnBvc2l0aW9uLmxlZnRcbiAgICAgICAgICAgICAgICAgIGN0eC5ldmVudC5sYXN0WSA9IHBheWxvYWQucG9zaXRpb24udG9wXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQubGFzdERpciA9IHN5bnRoZXRpYyA9PT0gdHJ1ZSA/IHZvaWQgMCA6IHBheWxvYWQuZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQuaXNGaXJzdCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5hbGwgPT09IHRydWVcbiAgICAgICAgICAgICAgLy8gYWNjb3VudCBmb3IgVU1EIHRvbyB3aGVyZSBtb2RpZmllcnMgd2lsbCBiZSBsb3dlcmNhc2VkIHRvIHdvcmtcbiAgICAgICAgICAgICAgfHwgKGlzTW91c2VFdnQgPT09IHRydWUgJiYgKGN0eC5tb2RpZmllcnMubW91c2VBbGxEaXIgPT09IHRydWUgfHwgY3R4Lm1vZGlmaWVycy5tb3VzZWFsbGRpciA9PT0gdHJ1ZSkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc3RhcnQoKVxuICAgICAgICAgICAgICBjdHguZXZlbnQuZGV0ZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgIGN0eC5tb3ZlKGV2dClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgIGFic1ggPSBNYXRoLmFicyhkaXN0WCksXG4gICAgICAgICAgICAgIGFic1kgPSBNYXRoLmFicyhkaXN0WSlcblxuICAgICAgICAgICAgaWYgKGFic1ggIT09IGFic1kpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChjdHguZGlyZWN0aW9uLmhvcml6b250YWwgPT09IHRydWUgJiYgYWJzWCA+IGFic1kpXG4gICAgICAgICAgICAgICAgfHwgKGN0eC5kaXJlY3Rpb24udmVydGljYWwgPT09IHRydWUgJiYgYWJzWCA8IGFic1kpXG4gICAgICAgICAgICAgICAgfHwgKGN0eC5kaXJlY3Rpb24udXAgPT09IHRydWUgJiYgYWJzWCA8IGFic1kgJiYgZGlzdFkgPCAwKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLmRvd24gPT09IHRydWUgJiYgYWJzWCA8IGFic1kgJiYgZGlzdFkgPiAwKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLmxlZnQgPT09IHRydWUgJiYgYWJzWCA+IGFic1kgJiYgZGlzdFggPCAwKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlICYmIGFic1ggPiBhYnNZICYmIGRpc3RYID4gMClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY3R4LmV2ZW50LmRldGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlKGV2dClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHguZW5kKGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBlbmQgKGV2dCwgYWJvcnQpIHtcbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQgPT09IHZvaWQgMCkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuICAgICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgZmFsc2UpXG5cbiAgICAgICAgICAgIGlmIChhYm9ydCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwPy4oKVxuXG4gICAgICAgICAgICAgIGlmIChjdHguZXZlbnQuZGV0ZWN0ZWQgIT09IHRydWUgJiYgY3R4LmluaXRpYWxFdmVudCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgY3R4LmluaXRpYWxFdmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChjdHguaW5pdGlhbEV2ZW50LmV2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjdHguZXZlbnQuZGV0ZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmlzRmlyc3QgPT09IHRydWUgJiYgY3R4LmhhbmRsZXIoZ2V0Q2hhbmdlcyhldnQgPT09IHZvaWQgMCA/IGN0eC5sYXN0RXZ0IDogZXZ0LCBjdHgpLnBheWxvYWQpXG5cbiAgICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkIH0gPSBnZXRDaGFuZ2VzKGV2dCA9PT0gdm9pZCAwID8gY3R4Lmxhc3RFdnQgOiBldnQsIGN0eCwgdHJ1ZSlcbiAgICAgICAgICAgICAgY29uc3QgZm4gPSAoKSA9PiB7IGN0eC5oYW5kbGVyKHBheWxvYWQpIH1cblxuICAgICAgICAgICAgICBpZiAoY3R4LnN0eWxlQ2xlYW51cCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cChmbilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmbigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3R4LmV2ZW50ID0gdm9pZCAwXG4gICAgICAgICAgICBjdHguaW5pdGlhbEV2ZW50ID0gdm9pZCAwXG4gICAgICAgICAgICBjdHgubGFzdEV2dCA9IHZvaWQgMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsLl9fcXRvdWNocGFuID0gY3R4XG5cbiAgICAgICAgaWYgKG1vZGlmaWVycy5tb3VzZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIGFjY291bnQgZm9yIFVNRCB0b28gd2hlcmUgbW9kaWZpZXJzIHdpbGwgYmUgbG93ZXJjYXNlZCB0byB3b3JrXG4gICAgICAgICAgY29uc3QgY2FwdHVyZSA9IG1vZGlmaWVycy5tb3VzZUNhcHR1cmUgPT09IHRydWUgfHwgbW9kaWZpZXJzLm1vdXNlY2FwdHVyZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyAnQ2FwdHVyZSdcbiAgICAgICAgICAgIDogJydcblxuICAgICAgICAgIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgICAgWyBlbCwgJ21vdXNlZG93bicsICdtb3VzZVN0YXJ0JywgYHBhc3NpdmUkeyBjYXB0dXJlIH1gIF1cbiAgICAgICAgICBdKVxuICAgICAgICB9XG5cbiAgICAgICAgY2xpZW50Lmhhcy50b3VjaCA9PT0gdHJ1ZSAmJiBhZGRFdnQoY3R4LCAnbWFpbicsIFtcbiAgICAgICAgICBbIGVsLCAndG91Y2hzdGFydCcsICd0b3VjaFN0YXJ0JywgYHBhc3NpdmUkeyBtb2RpZmllcnMuY2FwdHVyZSA9PT0gdHJ1ZSA/ICdDYXB0dXJlJyA6ICcnIH1gIF0sXG4gICAgICAgICAgWyBlbCwgJ3RvdWNobW92ZScsICdub29wJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdIC8vIGNhbm5vdCBiZSBwYXNzaXZlIChleDogaU9TIHNjcm9sbClcbiAgICAgICAgXSlcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZWQgKGVsLCBiaW5kaW5ncykge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3F0b3VjaHBhblxuXG4gICAgICAgIGlmIChjdHggIT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmIChiaW5kaW5ncy5vbGRWYWx1ZSAhPT0gYmluZGluZ3MudmFsdWUpIHtcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBjdHguZW5kKClcbiAgICAgICAgICAgIGN0eC5oYW5kbGVyID0gYmluZGluZ3MudmFsdWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdHguZGlyZWN0aW9uID0gZ2V0TW9kaWZpZXJEaXJlY3Rpb25zKGJpbmRpbmdzLm1vZGlmaWVycylcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudCAoZWwpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hwYW5cblxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAvLyBlbWl0IHRoZSBlbmQgZXZlbnQgd2hlbiB0aGUgZGlyZWN0aXZlIGlzIGRlc3Ryb3llZCB3aGlsZSBhY3RpdmVcbiAgICAgICAgICAvLyB0aGlzIGlzIG9ubHkgbmVlZGVkIGluIFRvdWNoUGFuIGJlY2F1c2UgdGhlIHJlc3Qgb2YgdGhlIHRvdWNoIGRpcmVjdGl2ZXMgZG8gbm90IGVtaXQgYW4gZW5kIGV2ZW50XG4gICAgICAgICAgLy8gdGhlIGNvbmRpdGlvbiBpcyBhbHNvIGNoZWNrZWQgaW4gdGhlIHN0YXJ0IG9mIGZ1bmN0aW9uIGJ1dCB3ZSBhdm9pZCB0aGUgY2FsbFxuICAgICAgICAgIGN0eC5ldmVudCAhPT0gdm9pZCAwICYmIGN0eC5lbmQoKVxuXG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAnbWFpbicpXG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG5cbiAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCBmYWxzZSlcbiAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwPy4oKVxuXG4gICAgICAgICAgZGVsZXRlIGVsLl9fcXRvdWNocGFuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWJ0blxuICAgIHNpemU9XCJ4c1wiXG4gICAgZmxhdFxuICAgIHJvdW5kXG4gICAgOmNsYXNzPVwibm90ZUNsYXNzXCJcbiAgICA6aWNvbj1cIm5vdGVJY29uXCI+XG4gICAgPHEtcG9wdXAtZWRpdCB2LW1vZGVsPVwibm90ZVwiXG4gICAgICAgICAgICAgICAgICBhdXRvLXNhdmVcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgIHYtc2xvdD1cInNjb3BlXCI+XG4gICAgICA8cS1pbnB1dFxuICAgICAgICBsYWJlbD1cIk5vdGVcIlxuICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICB2LW1vZGVsPVwic2NvcGUudmFsdWVcIlxuICAgICAgICBAa2V5dXAuY3RybC5lbnRlcj1cInNjb3BlLnNldFwiXG4gICAgICAgIEBrZXl1cC5lc2M9XCJzY29wZS5jYW5jZWxcIlxuICAgICAgICBkZW5zZVxuICAgICAgICBhdXRvZ3Jvd1xuICAgICAgICBhdXRvZm9jdXMgLz5cbiAgICA8L3EtcG9wdXAtZWRpdD5cbiAgICA8cS10b29sdGlwXG4gICAgICBjbGFzcz1cImJnLWJsdWUtZ3JleS0yIHRleHQtYmxhY2tcIlxuICAgICAgdi1pZj1cIm5vdGVcIj5cbiAgICAgIDxwcmUgY2xhc3M9XCJub3RlLXRvb2x0aXBcIj57eyBub3RlIH19PC9wcmU+XG4gICAgPC9xLXRvb2x0aXA+XG4gIDwvcS1idG4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgQmFzZU1vZGVsIGZyb20gJ3N0b3Jlcy9tb2RlbHMvYmFzZW1vZGVsJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIGVsZW1lbnQ6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiBudWxsIH0sXG4gICAgICBlbGVtZW50VHlwZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfVxuICB9KVxuXG4gIGNvbnN0IG5vdGUgPSBjb21wdXRlZCh7XG4gICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gcHJvcHMuZWxlbWVudCA/IHByb3BzLmVsZW1lbnQubm90ZSA6IFwiXCJcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmIChwcm9wcy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgIHN0b3JlLnVwZGF0ZUVsZW1lbnQocHJvcHMuZWxlbWVudCBhcyBCYXNlTW9kZWwsIHsgbm90ZTogdmFsdWUgfSlcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3Qgbm90ZUNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIG5vdGUudmFsdWUgPyBbIFwibm90ZVwiIF0gOiBbIFwibm90ZVwiLCBcIm5vdGUtaXMtZW1wdHlcIiBdXG4gIH0pXG5cbiAgY29uc3Qgbm90ZUljb24gPSBjb21wdXRlZCgoKSA9PiBub3RlLnZhbHVlID8gJ21kaS1jaGF0JyA6ICdtZGktY2hhdC1vdXRsaW5lJylcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAubm90ZS1pcy1lbXB0eSB7XG4gICAgICBvcGFjaXR5OiAuMztcbiAgfVxuICAudGV4dC1wcmUtbGluZSB7XG4gICAgICAvKiBQcmVzZXJ2ZSBhbGwgd2hpdGUtc3BhY2UgY2hhcmFjdGVycywgaW5jbHVkaW5nIGxpbmUgYnJlYWtzICovXG4gICAgICB3aGl0ZS1zcGFjZS1jb2xsYXBzZTogcHJlc2VydmU7XG4gIH1cbiAgLm5vdGUtdG9vbHRpcCB7XG4gICAgICBmb250LWZhbWlseTogc2FucztcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJyZXN1bHQiLCJjbG9uZSIsInN0b3AiLCJ2YWx1ZSIsIl9jcmVhdGVCbG9jayIsIl9ub3JtYWxpemVDbGFzcyIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX3dpdGhLZXlzIiwiX3dpdGhNb2RpZmllcnMiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl90b0Rpc3BsYXlTdHJpbmciXSwibWFwcGluZ3MiOiI7OztBQUVlLFNBQVMsVUFBVyxNQUFNLE9BQU8sb0JBQUksUUFBTyxHQUFJO0FBQzdELE1BQUksT0FBTyxJQUFJLE1BQU0sS0FBTSxRQUFPO0FBQ2xDLE1BQUksS0FBSyxJQUFJLElBQUksRUFBRyxRQUFPLEtBQUssSUFBSSxJQUFJO0FBRXhDLFFBQU0sU0FBUyxnQkFBZ0IsT0FDM0IsSUFBSSxLQUFLLElBQUksSUFDWixnQkFBZ0IsU0FDYixJQUFJLE9BQU8sS0FBSyxRQUFRLEtBQUssS0FBSyxJQUNqQyxnQkFBZ0IsTUFDYixvQkFBSSxJQUFHLElBQ04sZ0JBQWdCLE1BQ2Isb0JBQUksSUFBRyxJQUNOLE9BQU8sS0FBSyxnQkFBZ0IsYUFDekIsdUJBQU8sT0FBTyxJQUFJLElBQ2pCLEtBQUssY0FBYyxVQUFVLE9BQU8sS0FBSyxVQUFVLGdCQUFnQixhQUNoRSxPQUNBLElBQUksS0FBSyxZQUFXO0FBTzVDLE1BQUksT0FBTyxLQUFLLGdCQUFnQixjQUFjLE9BQU8sS0FBSyxZQUFZLFlBQVk7QUFDaEYsVUFBTSxNQUFNLEtBQUssUUFBTztBQUV4QixRQUFJLE9BQU8sR0FBRyxNQUFNLEtBQUs7QUFDdkIsWUFBTUEsVUFBUyxJQUFJLEtBQUssWUFBWSxHQUFHO0FBRXZDLFdBQUssSUFBSSxNQUFNQSxPQUFNO0FBRXJCLGFBQU9BO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFFQSxPQUFLLElBQUksTUFBTSxNQUFNO0FBRXJCLE1BQUksZ0JBQWdCLEtBQUs7QUFDdkIsU0FBSyxRQUFRLFNBQU87QUFDbEIsYUFBTyxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUM7QUFBQSxJQUNqQyxDQUFDO0FBQUEsRUFDSCxXQUNTLGdCQUFnQixLQUFLO0FBQzVCLFNBQUssUUFBUSxDQUFDLEtBQUss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
