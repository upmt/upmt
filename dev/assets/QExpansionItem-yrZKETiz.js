import { Q as QChip, a as QItemLabel } from "./QItemLabel-CLpdUhw9.js";
import { j as getCurrentInstance, r as ref, p as computed, at as stop, be as stopAndPrevent, bh as client, v as h, h as createComponent, bi as useFieldEmits, bj as useFormProps, bk as useNonInputFieldProps, bl as useFieldState, bm as useFormInputNameAttr, bn as useFileFormDomProps, bo as fieldValueIsFilled, aW as injectProp, bp as useField, bq as prevent, s as onBeforeUnmount, br as Transition, am as useModelToggleEmits, bs as shallowReactive, H as useDarkProps, an as useModelToggleProps, aZ as useRouterLinkProps, I as useDark, ao as useId, ap as useModelToggle, q as watch, bt as uid, ak as QSeparator, x as withDirectives, bu as vShow, P as hSlot, ai as QIcon } from "./index-C8moTFq2.js";
import { h as humanStorageSize, Q as QItem, a as QItemSection } from "./format-mCdLZtFG.js";
function filterFiles(files, rejectedFiles, failedPropValidation, filterFn) {
  const acceptedFiles = [];
  files.forEach((file) => {
    if (filterFn(file) === true) {
      acceptedFiles.push(file);
    } else {
      rejectedFiles.push({ failedPropValidation, file });
    }
  });
  return acceptedFiles;
}
function stopAndPreventDrag(e) {
  if (e?.dataTransfer) {
    e.dataTransfer.dropEffect = "copy";
  }
  stopAndPrevent(e);
}
const useFileProps = {
  multiple: Boolean,
  accept: String,
  capture: String,
  maxFileSize: [Number, String],
  maxTotalSize: [Number, String],
  maxFiles: [Number, String],
  filter: Function
};
const useFileEmits = ["rejected"];
function useFile({
  editable,
  dnd,
  getFileInput,
  addFilesToQueue
}) {
  const { props, emit, proxy } = getCurrentInstance();
  const dndRef = ref(null);
  const extensions = computed(() => props.accept !== void 0 ? props.accept.split(",").map((ext) => {
    ext = ext.trim();
    if (ext === "*") {
      return "*/";
    } else if (ext.endsWith("/*")) {
      ext = ext.slice(0, ext.length - 1);
    }
    return ext.toUpperCase();
  }) : null);
  const maxFilesNumber = computed(() => parseInt(props.maxFiles, 10));
  const maxTotalSizeNumber = computed(() => parseInt(props.maxTotalSize, 10));
  function pickFiles(e) {
    if (editable.value) {
      if (e !== Object(e)) {
        e = { target: null };
      }
      if (e.target?.matches('input[type="file"]') === true) {
        e.clientX === 0 && e.clientY === 0 && stop(e);
      } else {
        const input = getFileInput();
        if (input !== e.target) input?.click(e);
      }
    }
  }
  function addFiles(files) {
    if (editable.value && files) {
      addFilesToQueue(null, files);
    }
  }
  function processFiles(e, filesToProcess, currentFileList, append) {
    let files = Array.from(filesToProcess || e.target.files);
    const rejectedFiles = [];
    const done = () => {
      if (rejectedFiles.length !== 0) {
        emit("rejected", rejectedFiles);
      }
    };
    if (props.accept !== void 0 && extensions.value.indexOf("*/") === -1) {
      files = filterFiles(files, rejectedFiles, "accept", (file) => {
        return extensions.value.some((ext) => file.type.toUpperCase().startsWith(ext) || file.name.toUpperCase().endsWith(ext));
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props.maxFileSize !== void 0) {
      const maxFileSize = parseInt(props.maxFileSize, 10);
      files = filterFiles(files, rejectedFiles, "max-file-size", (file) => {
        return file.size <= maxFileSize;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props.multiple !== true && files.length !== 0) {
      files = [files[0]];
    }
    files.forEach((file) => {
      file.__key = file.webkitRelativePath + file.lastModified + file.name + file.size;
    });
    if (append === true) {
      const filenameMap = currentFileList.map((entry) => entry.__key);
      files = filterFiles(files, rejectedFiles, "duplicate", (file) => {
        return filenameMap.includes(file.__key) === false;
      });
    }
    if (files.length === 0) {
      return done();
    }
    if (props.maxTotalSize !== void 0) {
      let size = append === true ? currentFileList.reduce((total, file) => total + file.size, 0) : 0;
      files = filterFiles(files, rejectedFiles, "max-total-size", (file) => {
        size += file.size;
        return size <= maxTotalSizeNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (typeof props.filter === "function") {
      const filteredFiles = props.filter(files);
      files = filterFiles(files, rejectedFiles, "filter", (file) => {
        return filteredFiles.includes(file);
      });
    }
    if (props.maxFiles !== void 0) {
      let filesNumber = append === true ? currentFileList.length : 0;
      files = filterFiles(files, rejectedFiles, "max-files", () => {
        filesNumber++;
        return filesNumber <= maxFilesNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    done();
    if (files.length !== 0) {
      return files;
    }
  }
  function onDragover(e) {
    stopAndPreventDrag(e);
    dnd.value !== true && (dnd.value = true);
  }
  function onDragleave(e) {
    stopAndPrevent(e);
    const gone = e.relatedTarget !== null || client.is.safari !== true ? e.relatedTarget !== dndRef.value : document.elementsFromPoint(e.clientX, e.clientY).includes(dndRef.value) === false;
    gone === true && (dnd.value = false);
  }
  function onDrop(e) {
    stopAndPreventDrag(e);
    const files = e.dataTransfer.files;
    if (files.length !== 0) {
      addFilesToQueue(null, files);
    }
    dnd.value = false;
  }
  function getDndNode(type) {
    if (dnd.value === true) {
      return h("div", {
        ref: dndRef,
        class: `q-${type}__dnd absolute-full`,
        onDragenter: stopAndPreventDrag,
        onDragover: stopAndPreventDrag,
        onDragleave,
        onDrop
      });
    }
  }
  Object.assign(proxy, { pickFiles, addFiles });
  return {
    pickFiles,
    addFiles,
    onDragover,
    onDragleave,
    processFiles,
    getDndNode,
    maxFilesNumber,
    maxTotalSizeNumber
  };
}
const QFile = createComponent({
  name: "QFile",
  inheritAttrs: false,
  props: {
    ...useNonInputFieldProps,
    ...useFormProps,
    ...useFileProps,
    /* SSR does not know about File & FileList */
    modelValue: [File, FileList, Array],
    append: Boolean,
    useChips: Boolean,
    displayValue: [String, Number],
    tabindex: {
      type: [String, Number],
      default: 0
    },
    counterLabel: Function,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...useFieldEmits,
    ...useFileEmits
  ],
  setup(props, { slots, emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const state = useFieldState();
    const inputRef = ref(null);
    const dnd = ref(false);
    const nameProp = useFormInputNameAttr(props);
    const {
      pickFiles,
      onDragover,
      onDragleave,
      processFiles,
      getDndNode
    } = useFile({ editable: state.editable, dnd, getFileInput, addFilesToQueue });
    const formDomProps = useFileFormDomProps(props);
    const innerValue = computed(() => Object(props.modelValue) === props.modelValue ? "length" in props.modelValue ? Array.from(props.modelValue) : [props.modelValue] : []);
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const selectedString = computed(
      () => innerValue.value.map((file) => file.name).join(", ")
    );
    const totalSize = computed(
      () => humanStorageSize(
        innerValue.value.reduce((acc, file) => acc + file.size, 0)
      )
    );
    const counterProps = computed(() => ({
      totalSize: totalSize.value,
      filesNumber: innerValue.value.length,
      maxFiles: props.maxFiles
    }));
    const inputAttrs = computed(() => ({
      tabindex: -1,
      type: "file",
      title: "",
      // try to remove default tooltip,
      accept: props.accept,
      capture: props.capture,
      name: nameProp.value,
      ...attrs,
      id: state.targetUid.value,
      disabled: state.editable.value !== true
    }));
    const fieldClass = computed(
      () => "q-file q-field--auto-height" + (dnd.value === true ? " q-file--dnd" : "")
    );
    const isAppending = computed(
      () => props.multiple === true && props.append === true
    );
    function removeAtIndex(index) {
      const files = innerValue.value.slice();
      files.splice(index, 1);
      emitValue(files);
    }
    function removeFile(file) {
      const index = innerValue.value.indexOf(file);
      if (index !== -1) {
        removeAtIndex(index);
      }
    }
    function emitValue(files) {
      emit("update:modelValue", props.multiple === true ? files : files[0]);
    }
    function onKeydown(e) {
      e.keyCode === 13 && prevent(e);
    }
    function onKeyup(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        pickFiles(e);
      }
    }
    function getFileInput() {
      return inputRef.value;
    }
    function addFilesToQueue(e, fileList) {
      const files = processFiles(e, fileList, innerValue.value, isAppending.value);
      const fileInput = getFileInput();
      if (fileInput !== void 0 && fileInput !== null) {
        fileInput.value = "";
      }
      if (files === void 0) return;
      if (props.multiple === true ? props.modelValue && files.every((f) => innerValue.value.includes(f)) : props.modelValue === files[0]) return;
      emitValue(
        isAppending.value === true ? innerValue.value.concat(files) : files
      );
    }
    function getFiller() {
      return [
        h("input", {
          class: [props.inputClass, "q-file__filler"],
          style: props.inputStyle
        })
      ];
    }
    function getSelection() {
      if (slots.file !== void 0) {
        return innerValue.value.length === 0 ? getFiller() : innerValue.value.map(
          (file, index) => slots.file({ index, file, ref: this })
        );
      }
      if (slots.selected !== void 0) {
        return innerValue.value.length === 0 ? getFiller() : slots.selected({ files: innerValue.value, ref: this });
      }
      if (props.useChips === true) {
        return innerValue.value.length === 0 ? getFiller() : innerValue.value.map((file, i) => h(QChip, {
          key: "file-" + i,
          removable: state.editable.value,
          dense: true,
          textColor: props.color,
          tabindex: props.tabindex,
          onRemove: () => {
            removeAtIndex(i);
          }
        }, () => h("span", {
          class: "ellipsis",
          textContent: file.name
        })));
      }
      const textContent = props.displayValue !== void 0 ? props.displayValue : selectedString.value;
      return textContent.length !== 0 ? [
        h("div", {
          class: props.inputClass,
          style: props.inputStyle,
          textContent
        })
      ] : getFiller();
    }
    function getInput() {
      const data = {
        ref: inputRef,
        ...inputAttrs.value,
        ...formDomProps.value,
        class: "q-field__input fit absolute-full cursor-pointer",
        onChange: addFilesToQueue
      };
      if (props.multiple === true) {
        data.multiple = true;
      }
      return h("input", data);
    }
    Object.assign(state, {
      fieldClass,
      emitValue,
      hasValue,
      inputRef,
      innerValue,
      floatingLabel: computed(
        () => hasValue.value === true || fieldValueIsFilled(props.displayValue)
      ),
      computedCounter: computed(() => {
        if (props.counterLabel !== void 0) {
          return props.counterLabel(counterProps.value);
        }
        const max = props.maxFiles;
        return `${innerValue.value.length}${max !== void 0 ? " / " + max : ""} (${totalSize.value})`;
      }),
      getControlChild: () => getDndNode("file"),
      getControl: () => {
        const data = {
          ref: state.targetRef,
          class: "q-field__native row items-center cursor-pointer",
          tabindex: props.tabindex
        };
        if (state.editable.value === true) {
          Object.assign(data, { onDragover, onDragleave, onKeydown, onKeyup });
        }
        return h("div", data, [getInput()].concat(getSelection()));
      }
    });
    Object.assign(proxy, {
      removeAtIndex,
      removeFile,
      getNativeElement: () => inputRef.value
      // deprecated
    });
    injectProp(proxy, "nativeEl", () => inputRef.value);
    return useField(state);
  }
});
const QSlideTransition = createComponent({
  name: "QSlideTransition",
  props: {
    appear: Boolean,
    duration: {
      type: Number,
      default: 300
    }
  },
  emits: ["show", "hide"],
  setup(props, { slots, emit }) {
    let animating = false, doneFn, element;
    let timer = null, timerFallback = null, animListener, lastEvent;
    function cleanup() {
      doneFn?.();
      doneFn = null;
      animating = false;
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      if (timerFallback !== null) {
        clearTimeout(timerFallback);
        timerFallback = null;
      }
      element?.removeEventListener("transitionend", animListener);
      animListener = null;
    }
    function begin(el, height, done) {
      if (height !== void 0) {
        el.style.height = `${height}px`;
      }
      el.style.transition = `height ${props.duration}ms cubic-bezier(.25, .8, .50, 1)`;
      animating = true;
      doneFn = done;
    }
    function end(el, event) {
      el.style.overflowY = null;
      el.style.height = null;
      el.style.transition = null;
      cleanup();
      event !== lastEvent && emit(event);
    }
    function onEnter(el, done) {
      let pos = 0;
      element = el;
      if (animating === true) {
        cleanup();
        pos = el.offsetHeight === el.scrollHeight ? 0 : void 0;
      } else {
        lastEvent = "hide";
        el.style.overflowY = "hidden";
      }
      begin(el, pos, done);
      timer = setTimeout(() => {
        timer = null;
        el.style.height = `${el.scrollHeight}px`;
        animListener = (evt) => {
          timerFallback = null;
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "show");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }
    function onLeave(el, done) {
      let pos;
      element = el;
      if (animating === true) {
        cleanup();
      } else {
        lastEvent = "show";
        el.style.overflowY = "hidden";
        pos = el.scrollHeight;
      }
      begin(el, pos, done);
      timer = setTimeout(() => {
        timer = null;
        el.style.height = 0;
        animListener = (evt) => {
          timerFallback = null;
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "hide");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }
    onBeforeUnmount(() => {
      animating === true && cleanup();
    });
    return () => h(Transition, {
      css: false,
      appear: props.appear,
      onEnter,
      onLeave
    }, slots.default);
  }
});
const itemGroups = shallowReactive({});
const LINK_PROPS = Object.keys(useRouterLinkProps);
const QExpansionItem = createComponent({
  name: "QExpansionItem",
  props: {
    ...useRouterLinkProps,
    ...useModelToggleProps,
    ...useDarkProps,
    icon: String,
    label: String,
    labelLines: [Number, String],
    caption: String,
    captionLines: [Number, String],
    dense: Boolean,
    toggleAriaLabel: String,
    expandIcon: String,
    expandedIcon: String,
    expandIconClass: [Array, String, Object],
    duration: {},
    headerInsetLevel: Number,
    contentInsetLevel: Number,
    expandSeparator: Boolean,
    defaultOpened: Boolean,
    hideExpandIcon: Boolean,
    expandIconToggle: Boolean,
    switchToggleSide: Boolean,
    denseToggle: Boolean,
    group: String,
    popup: Boolean,
    headerStyle: [Array, String, Object],
    headerClass: [Array, String, Object]
  },
  emits: [
    ...useModelToggleEmits,
    "click",
    "afterShow",
    "afterHide"
  ],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const showing = ref(
      props.modelValue !== null ? props.modelValue : props.defaultOpened
    );
    const blurTargetRef = ref(null);
    const targetUid = useId();
    const { show, hide, toggle } = useModelToggle({ showing });
    let uniqueId, exitGroup;
    const classes = computed(
      () => `q-expansion-item q-item-type q-expansion-item--${showing.value === true ? "expanded" : "collapsed"} q-expansion-item--${props.popup === true ? "popup" : "standard"}`
    );
    const contentStyle = computed(() => {
      if (props.contentInsetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: props.contentInsetLevel * 56 + "px"
      };
    });
    const hasLink = computed(
      () => props.disable !== true && (props.href !== void 0 || props.to !== void 0 && props.to !== null && props.to !== "")
    );
    const linkProps = computed(() => {
      const acc = {};
      LINK_PROPS.forEach((key) => {
        acc[key] = props[key];
      });
      return acc;
    });
    const isClickable = computed(
      () => hasLink.value === true || props.expandIconToggle !== true
    );
    const expansionIcon = computed(() => props.expandedIcon !== void 0 && showing.value === true ? props.expandedIcon : props.expandIcon || $q.iconSet.expansionItem[props.denseToggle === true ? "denseIcon" : "icon"]);
    const activeToggleIcon = computed(
      () => props.disable !== true && (hasLink.value === true || props.expandIconToggle === true)
    );
    const headerSlotScope = computed(() => ({
      expanded: showing.value === true,
      detailsId: targetUid.value,
      toggle,
      show,
      hide
    }));
    const toggleAriaAttrs = computed(() => {
      const toggleAriaLabel = props.toggleAriaLabel !== void 0 ? props.toggleAriaLabel : $q.lang.label[showing.value === true ? "collapse" : "expand"](props.label);
      return {
        role: "button",
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-controls": targetUid.value,
        "aria-label": toggleAriaLabel
      };
    });
    watch(() => props.group, (name) => {
      exitGroup?.();
      name !== void 0 && enterGroup();
    });
    function onHeaderClick(e) {
      hasLink.value !== true && toggle(e);
      emit("click", e);
    }
    function toggleIconKeyboard(e) {
      e.keyCode === 13 && toggleIcon(e, true);
    }
    function toggleIcon(e, keyboard) {
      if (keyboard !== true && e.qAvoidFocus !== true) {
        blurTargetRef.value?.focus();
      }
      toggle(e);
      stopAndPrevent(e);
    }
    function onShow() {
      emit("afterShow");
    }
    function onHide() {
      emit("afterHide");
    }
    function enterGroup() {
      if (uniqueId === void 0) {
        uniqueId = uid();
      }
      if (showing.value === true) {
        itemGroups[props.group] = uniqueId;
      }
      const show2 = watch(showing, (val) => {
        if (val === true) {
          itemGroups[props.group] = uniqueId;
        } else if (itemGroups[props.group] === uniqueId) {
          delete itemGroups[props.group];
        }
      });
      const group = watch(
        () => itemGroups[props.group],
        (val, oldVal) => {
          if (oldVal === uniqueId && val !== void 0 && val !== uniqueId) {
            hide();
          }
        }
      );
      exitGroup = () => {
        show2();
        group();
        if (itemGroups[props.group] === uniqueId) {
          delete itemGroups[props.group];
        }
        exitGroup = void 0;
      };
    }
    function getToggleIcon() {
      const data = {
        class: [
          `q-focusable relative-position cursor-pointer${props.denseToggle === true && props.switchToggleSide === true ? " items-end" : ""}`,
          props.expandIconClass
        ],
        side: props.switchToggleSide !== true,
        avatar: props.switchToggleSide
      };
      const child = [
        h(QIcon, {
          class: "q-expansion-item__toggle-icon" + (props.expandedIcon === void 0 && showing.value === true ? " q-expansion-item__toggle-icon--rotated" : ""),
          name: expansionIcon.value
        })
      ];
      if (activeToggleIcon.value === true) {
        Object.assign(data, {
          tabindex: 0,
          ...toggleAriaAttrs.value,
          onClick: toggleIcon,
          onKeyup: toggleIconKeyboard
        });
        child.unshift(
          h("div", {
            ref: blurTargetRef,
            class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",
            tabindex: -1
          })
        );
      }
      return h(QItemSection, data, () => child);
    }
    function getHeaderChild() {
      let child;
      if (slots.header !== void 0) {
        child = [].concat(slots.header(headerSlotScope.value));
      } else {
        child = [
          h(QItemSection, () => [
            h(QItemLabel, { lines: props.labelLines }, () => props.label || ""),
            props.caption ? h(QItemLabel, { lines: props.captionLines, caption: true }, () => props.caption) : null
          ])
        ];
        props.icon && child[props.switchToggleSide === true ? "push" : "unshift"](
          h(QItemSection, {
            side: props.switchToggleSide === true,
            avatar: props.switchToggleSide !== true
          }, () => h(QIcon, { name: props.icon }))
        );
      }
      if (props.disable !== true && props.hideExpandIcon !== true) {
        child[props.switchToggleSide === true ? "unshift" : "push"](
          getToggleIcon()
        );
      }
      return child;
    }
    function getHeader() {
      const data = {
        ref: "item",
        style: props.headerStyle,
        class: props.headerClass,
        dark: isDark.value,
        disable: props.disable,
        dense: props.dense,
        insetLevel: props.headerInsetLevel
      };
      if (isClickable.value === true) {
        data.clickable = true;
        data.onClick = onHeaderClick;
        Object.assign(
          data,
          hasLink.value === true ? linkProps.value : toggleAriaAttrs.value
        );
      }
      return h(QItem, data, getHeaderChild);
    }
    function getTransitionChild() {
      return withDirectives(
        h("div", {
          key: "e-content",
          class: "q-expansion-item__content relative-position",
          style: contentStyle.value,
          id: targetUid.value
        }, hSlot(slots.default)),
        [[
          vShow,
          showing.value
        ]]
      );
    }
    function getContent() {
      const node = [
        getHeader(),
        h(QSlideTransition, {
          duration: props.duration,
          onShow,
          onHide
        }, getTransitionChild)
      ];
      if (props.expandSeparator === true) {
        node.push(
          h(QSeparator, {
            class: "q-expansion-item__border q-expansion-item__border--top absolute-top",
            dark: isDark.value
          }),
          h(QSeparator, {
            class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",
            dark: isDark.value
          })
        );
      }
      return node;
    }
    props.group !== void 0 && enterGroup();
    onBeforeUnmount(() => {
      exitGroup?.();
    });
    return () => h("div", { class: classes.value }, [
      h("div", { class: "q-expansion-item__container relative-position" }, getContent())
    ]);
  }
});
export {
  QExpansionItem as Q,
  QFile as a
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUV4cGFuc2lvbkl0ZW0teXJaS0VUaXouanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWZpbGUvdXNlLWZpbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2ZpbGUvUUZpbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlLXRyYW5zaXRpb24vUVNsaWRlVHJhbnNpdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZXhwYW5zaW9uLWl0ZW0vUUV4cGFuc2lvbkl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi9wbHVnaW5zL3BsYXRmb3JtL1BsYXRmb3JtLmpzJ1xuaW1wb3J0IHsgc3RvcCwgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcblxuZnVuY3Rpb24gZmlsdGVyRmlsZXMgKGZpbGVzLCByZWplY3RlZEZpbGVzLCBmYWlsZWRQcm9wVmFsaWRhdGlvbiwgZmlsdGVyRm4pIHtcbiAgY29uc3QgYWNjZXB0ZWRGaWxlcyA9IFtdXG5cbiAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICBpZiAoZmlsdGVyRm4oZmlsZSkgPT09IHRydWUpIHtcbiAgICAgIGFjY2VwdGVkRmlsZXMucHVzaChmaWxlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlamVjdGVkRmlsZXMucHVzaCh7IGZhaWxlZFByb3BWYWxpZGF0aW9uLCBmaWxlIH0pXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBhY2NlcHRlZEZpbGVzXG59XG5cbmZ1bmN0aW9uIHN0b3BBbmRQcmV2ZW50RHJhZyAoZSkge1xuICBpZiAoZT8uZGF0YVRyYW5zZmVyKSB7XG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5J1xuICB9XG5cbiAgc3RvcEFuZFByZXZlbnQoZSlcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUZpbGVQcm9wcyA9IHtcbiAgbXVsdGlwbGU6IEJvb2xlYW4sXG4gIGFjY2VwdDogU3RyaW5nLFxuICBjYXB0dXJlOiBTdHJpbmcsXG4gIG1heEZpbGVTaXplOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gIG1heFRvdGFsU2l6ZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICBtYXhGaWxlczogWyBOdW1iZXIsIFN0cmluZyBdLFxuICBmaWx0ZXI6IEZ1bmN0aW9uXG59XG5cbmV4cG9ydCBjb25zdCB1c2VGaWxlRW1pdHMgPSBbICdyZWplY3RlZCcgXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoe1xuICBlZGl0YWJsZSxcbiAgZG5kLFxuICBnZXRGaWxlSW5wdXQsXG4gIGFkZEZpbGVzVG9RdWV1ZVxufSkge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICBjb25zdCBkbmRSZWYgPSByZWYobnVsbClcblxuICBjb25zdCBleHRlbnNpb25zID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLmFjY2VwdCAhPT0gdm9pZCAwXG4gICAgICA/IHByb3BzLmFjY2VwdC5zcGxpdCgnLCcpLm1hcChleHQgPT4ge1xuICAgICAgICBleHQgPSBleHQudHJpbSgpXG4gICAgICAgIGlmIChleHQgPT09ICcqJykgeyAvLyBzdXBwb3J0IFwiKlwiXG4gICAgICAgICAgcmV0dXJuICcqLydcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChleHQuZW5kc1dpdGgoJy8qJykpIHsgLy8gc3VwcG9ydCBcImltYWdlLypcIiBvciBcIiovKlwiXG4gICAgICAgICAgZXh0ID0gZXh0LnNsaWNlKDAsIGV4dC5sZW5ndGggLSAxKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHQudG9VcHBlckNhc2UoKVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuICApKVxuXG4gIGNvbnN0IG1heEZpbGVzTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gcGFyc2VJbnQocHJvcHMubWF4RmlsZXMsIDEwKSlcbiAgY29uc3QgbWF4VG90YWxTaXplTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gcGFyc2VJbnQocHJvcHMubWF4VG90YWxTaXplLCAxMCkpXG5cbiAgZnVuY3Rpb24gcGlja0ZpbGVzIChlKSB7XG4gICAgaWYgKGVkaXRhYmxlLnZhbHVlKSB7XG4gICAgICBpZiAoZSAhPT0gT2JqZWN0KGUpKSB7XG4gICAgICAgIGUgPSB7IHRhcmdldDogbnVsbCB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnRhcmdldD8ubWF0Y2hlcygnaW5wdXRbdHlwZT1cImZpbGVcIl0nKSA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBzdG9wIHByb3BhZ2F0aW9uIGlmIGl0J3Mgbm90IGEgcmVhbCBwb2ludGVyIGV2ZW50XG4gICAgICAgIGUuY2xpZW50WCA9PT0gMCAmJiBlLmNsaWVudFkgPT09IDAgJiYgc3RvcChlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZ2V0RmlsZUlucHV0KClcbiAgICAgICAgaWYgKGlucHV0ICE9PSBlLnRhcmdldCkgaW5wdXQ/LmNsaWNrKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkRmlsZXMgKGZpbGVzKSB7XG4gICAgaWYgKGVkaXRhYmxlLnZhbHVlICYmIGZpbGVzKSB7XG4gICAgICBhZGRGaWxlc1RvUXVldWUobnVsbCwgZmlsZXMpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpbGVzIChlLCBmaWxlc1RvUHJvY2VzcywgY3VycmVudEZpbGVMaXN0LCBhcHBlbmQpIHtcbiAgICBsZXQgZmlsZXMgPSBBcnJheS5mcm9tKGZpbGVzVG9Qcm9jZXNzIHx8IGUudGFyZ2V0LmZpbGVzKVxuICAgIGNvbnN0IHJlamVjdGVkRmlsZXMgPSBbXVxuXG4gICAgY29uc3QgZG9uZSA9ICgpID0+IHtcbiAgICAgIGlmIChyZWplY3RlZEZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBlbWl0KCdyZWplY3RlZCcsIHJlamVjdGVkRmlsZXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIGZpbGUgdHlwZXNcbiAgICBpZiAocHJvcHMuYWNjZXB0ICE9PSB2b2lkIDAgJiYgZXh0ZW5zaW9ucy52YWx1ZS5pbmRleE9mKCcqLycpID09PSAtMSkge1xuICAgICAgZmlsZXMgPSBmaWx0ZXJGaWxlcyhmaWxlcywgcmVqZWN0ZWRGaWxlcywgJ2FjY2VwdCcsIGZpbGUgPT4ge1xuICAgICAgICByZXR1cm4gZXh0ZW5zaW9ucy52YWx1ZS5zb21lKGV4dCA9PiAoXG4gICAgICAgICAgZmlsZS50eXBlLnRvVXBwZXJDYXNlKCkuc3RhcnRzV2l0aChleHQpXG4gICAgICAgICAgfHwgZmlsZS5uYW1lLnRvVXBwZXJDYXNlKCkuZW5kc1dpdGgoZXh0KVxuICAgICAgICApKVxuICAgICAgfSlcblxuICAgICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gZG9uZSgpIH1cbiAgICB9XG5cbiAgICAvLyBmaWx0ZXIgbWF4IGZpbGUgc2l6ZVxuICAgIGlmIChwcm9wcy5tYXhGaWxlU2l6ZSAhPT0gdm9pZCAwKSB7XG4gICAgICBjb25zdCBtYXhGaWxlU2l6ZSA9IHBhcnNlSW50KHByb3BzLm1heEZpbGVTaXplLCAxMClcbiAgICAgIGZpbGVzID0gZmlsdGVyRmlsZXMoZmlsZXMsIHJlamVjdGVkRmlsZXMsICdtYXgtZmlsZS1zaXplJywgZmlsZSA9PiB7XG4gICAgICAgIHJldHVybiBmaWxlLnNpemUgPD0gbWF4RmlsZVNpemVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHsgcmV0dXJuIGRvbmUoKSB9XG4gICAgfVxuXG4gICAgLy8gQ29yZG92YS9pT1MgYWxsb3dzIHNlbGVjdGluZyBtdWx0aXBsZSBmaWxlcyBldmVuIHdoZW4gdGhlXG4gICAgLy8gbXVsdGlwbGUgYXR0cmlidXRlIGlzIG5vdCBzcGVjaWZpZWQuIFdlIGFsc28gbm9ybWFsaXplIGRyYWcnbidkcm9wcGVkXG4gICAgLy8gZmlsZXMgaGVyZTpcbiAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IHRydWUgJiYgZmlsZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBmaWxlcyA9IFsgZmlsZXNbIDAgXSBdXG4gICAgfVxuXG4gICAgLy8gQ29tcHV0ZSBrZXkgdG8gdXNlIGZvciBlYWNoIGZpbGVcbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgZmlsZS5fX2tleSA9IGZpbGUud2Via2l0UmVsYXRpdmVQYXRoICsgZmlsZS5sYXN0TW9kaWZpZWQgKyBmaWxlLm5hbWUgKyBmaWxlLnNpemVcbiAgICB9KVxuXG4gICAgaWYgKGFwcGVuZCA9PT0gdHJ1ZSkge1xuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlIGZpbGVzXG4gICAgICBjb25zdCBmaWxlbmFtZU1hcCA9IGN1cnJlbnRGaWxlTGlzdC5tYXAoZW50cnkgPT4gZW50cnkuX19rZXkpXG4gICAgICBmaWxlcyA9IGZpbHRlckZpbGVzKGZpbGVzLCByZWplY3RlZEZpbGVzLCAnZHVwbGljYXRlJywgZmlsZSA9PiB7XG4gICAgICAgIHJldHVybiBmaWxlbmFtZU1hcC5pbmNsdWRlcyhmaWxlLl9fa2V5KSA9PT0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gZG9uZSgpIH1cblxuICAgIGlmIChwcm9wcy5tYXhUb3RhbFNpemUgIT09IHZvaWQgMCkge1xuICAgICAgbGV0IHNpemUgPSBhcHBlbmQgPT09IHRydWVcbiAgICAgICAgPyBjdXJyZW50RmlsZUxpc3QucmVkdWNlKCh0b3RhbCwgZmlsZSkgPT4gdG90YWwgKyBmaWxlLnNpemUsIDApXG4gICAgICAgIDogMFxuXG4gICAgICBmaWxlcyA9IGZpbHRlckZpbGVzKGZpbGVzLCByZWplY3RlZEZpbGVzLCAnbWF4LXRvdGFsLXNpemUnLCBmaWxlID0+IHtcbiAgICAgICAgc2l6ZSArPSBmaWxlLnNpemVcbiAgICAgICAgcmV0dXJuIHNpemUgPD0gbWF4VG90YWxTaXplTnVtYmVyLnZhbHVlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBkb25lKCkgfVxuICAgIH1cblxuICAgIC8vIGRvIHdlIGhhdmUgY3VzdG9tIGZpbHRlciBmdW5jdGlvbj9cbiAgICBpZiAodHlwZW9mIHByb3BzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZmlsdGVyZWRGaWxlcyA9IHByb3BzLmZpbHRlcihmaWxlcylcbiAgICAgIGZpbGVzID0gZmlsdGVyRmlsZXMoZmlsZXMsIHJlamVjdGVkRmlsZXMsICdmaWx0ZXInLCBmaWxlID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkRmlsZXMuaW5jbHVkZXMoZmlsZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm1heEZpbGVzICE9PSB2b2lkIDApIHtcbiAgICAgIGxldCBmaWxlc051bWJlciA9IGFwcGVuZCA9PT0gdHJ1ZVxuICAgICAgICA/IGN1cnJlbnRGaWxlTGlzdC5sZW5ndGhcbiAgICAgICAgOiAwXG5cbiAgICAgIGZpbGVzID0gZmlsdGVyRmlsZXMoZmlsZXMsIHJlamVjdGVkRmlsZXMsICdtYXgtZmlsZXMnLCAoKSA9PiB7XG4gICAgICAgIGZpbGVzTnVtYmVyKytcbiAgICAgICAgcmV0dXJuIGZpbGVzTnVtYmVyIDw9IG1heEZpbGVzTnVtYmVyLnZhbHVlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBkb25lKCkgfVxuICAgIH1cblxuICAgIGRvbmUoKVxuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZpbGVzXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnb3ZlciAoZSkge1xuICAgIHN0b3BBbmRQcmV2ZW50RHJhZyhlKVxuICAgIGRuZC52YWx1ZSAhPT0gdHJ1ZSAmJiAoZG5kLnZhbHVlID0gdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ2xlYXZlIChlKSB7XG4gICAgc3RvcEFuZFByZXZlbnQoZSlcblxuICAgIC8vIFNhZmFyaSBidWc6IHJlbGF0ZWRUYXJnZXQgaXMgbnVsbCBmb3Igb3ZlciAxMCB5ZWFyc1xuICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD02NjU0N1xuICAgIGNvbnN0IGdvbmUgPSBlLnJlbGF0ZWRUYXJnZXQgIT09IG51bGwgfHwgY2xpZW50LmlzLnNhZmFyaSAhPT0gdHJ1ZVxuICAgICAgPyBlLnJlbGF0ZWRUYXJnZXQgIT09IGRuZFJlZi52YWx1ZVxuICAgICAgOiBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSkuaW5jbHVkZXMoZG5kUmVmLnZhbHVlKSA9PT0gZmFsc2VcblxuICAgIGdvbmUgPT09IHRydWUgJiYgKGRuZC52YWx1ZSA9IGZhbHNlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ecm9wIChlKSB7XG4gICAgc3RvcEFuZFByZXZlbnREcmFnKGUpXG4gICAgY29uc3QgZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1xuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgYWRkRmlsZXNUb1F1ZXVlKG51bGwsIGZpbGVzKVxuICAgIH1cblxuICAgIGRuZC52YWx1ZSA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBnZXREbmROb2RlICh0eXBlKSB7XG4gICAgaWYgKGRuZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiBkbmRSZWYsXG4gICAgICAgIGNsYXNzOiBgcS0keyB0eXBlIH1fX2RuZCBhYnNvbHV0ZS1mdWxsYCxcbiAgICAgICAgb25EcmFnZW50ZXI6IHN0b3BBbmRQcmV2ZW50RHJhZyxcbiAgICAgICAgb25EcmFnb3Zlcjogc3RvcEFuZFByZXZlbnREcmFnLFxuICAgICAgICBvbkRyYWdsZWF2ZSxcbiAgICAgICAgb25Ecm9wXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7IHBpY2tGaWxlcywgYWRkRmlsZXMgfSlcblxuICByZXR1cm4ge1xuICAgIHBpY2tGaWxlcyxcbiAgICBhZGRGaWxlcyxcbiAgICBvbkRyYWdvdmVyLFxuICAgIG9uRHJhZ2xlYXZlLFxuICAgIHByb2Nlc3NGaWxlcyxcbiAgICBnZXREbmROb2RlLFxuXG4gICAgbWF4RmlsZXNOdW1iZXIsXG4gICAgbWF4VG90YWxTaXplTnVtYmVyXG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFDaGlwIGZyb20gJy4uL2NoaXAvUUNoaXAuanMnXG5cbmltcG9ydCB1c2VGaWVsZCwgeyB1c2VGaWVsZFN0YXRlLCB1c2VOb25JbnB1dEZpZWxkUHJvcHMsIHVzZUZpZWxkRW1pdHMsIGZpZWxkVmFsdWVJc0ZpbGxlZCB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWZpZWxkL3VzZS1maWVsZC5qcydcbmltcG9ydCB7IHVzZUZvcm1Qcm9wcywgdXNlRm9ybUlucHV0TmFtZUF0dHIgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtZm9ybS9wcml2YXRlLnVzZS1mb3JtLmpzJ1xuaW1wb3J0IHVzZUZpbGUsIHsgdXNlRmlsZVByb3BzLCB1c2VGaWxlRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1maWxlL3VzZS1maWxlLmpzJ1xuaW1wb3J0IHVzZUZpbGVGb3JtRG9tUHJvcHMgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZmlsZS91c2UtZmlsZS1kb20tcHJvcHMuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGh1bWFuU3RvcmFnZVNpemUgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgcHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50L2V2ZW50LmpzJ1xuaW1wb3J0IHsgaW5qZWN0UHJvcCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuaW5qZWN0LW9iai1wcm9wL2luamVjdC1vYmotcHJvcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FGaWxlJyxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlTm9uSW5wdXRGaWVsZFByb3BzLFxuICAgIC4uLnVzZUZvcm1Qcm9wcyxcbiAgICAuLi51c2VGaWxlUHJvcHMsXG5cbiAgICAvKiBTU1IgZG9lcyBub3Qga25vdyBhYm91dCBGaWxlICYgRmlsZUxpc3QgKi9cbiAgICBtb2RlbFZhbHVlOiBfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgICAgID8ge31cbiAgICAgIDogWyBGaWxlLCBGaWxlTGlzdCwgQXJyYXkgXSxcblxuICAgIGFwcGVuZDogQm9vbGVhbixcbiAgICB1c2VDaGlwczogQm9vbGVhbixcbiAgICBkaXNwbGF5VmFsdWU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICAgIHRhYmluZGV4OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcblxuICAgIGNvdW50ZXJMYWJlbDogRnVuY3Rpb24sXG5cbiAgICBpbnB1dENsYXNzOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGlucHV0U3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF1cbiAgfSxcblxuICBlbWl0czogW1xuICAgIC4uLnVzZUZpZWxkRW1pdHMsXG4gICAgLi4udXNlRmlsZUVtaXRzXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0LCBhdHRycyB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHN0YXRlID0gdXNlRmllbGRTdGF0ZSgpXG5cbiAgICBjb25zdCBpbnB1dFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGRuZCA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBuYW1lUHJvcCA9IHVzZUZvcm1JbnB1dE5hbWVBdHRyKHByb3BzKVxuXG4gICAgY29uc3Qge1xuICAgICAgcGlja0ZpbGVzLFxuICAgICAgb25EcmFnb3ZlcixcbiAgICAgIG9uRHJhZ2xlYXZlLFxuICAgICAgcHJvY2Vzc0ZpbGVzLFxuICAgICAgZ2V0RG5kTm9kZVxuICAgIH0gPSB1c2VGaWxlKHsgZWRpdGFibGU6IHN0YXRlLmVkaXRhYmxlLCBkbmQsIGdldEZpbGVJbnB1dCwgYWRkRmlsZXNUb1F1ZXVlIH0pXG5cbiAgICBjb25zdCBmb3JtRG9tUHJvcHMgPSB1c2VGaWxlRm9ybURvbVByb3BzKHByb3BzKVxuXG4gICAgY29uc3QgaW5uZXJWYWx1ZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIE9iamVjdChwcm9wcy5tb2RlbFZhbHVlKSA9PT0gcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgICA/ICgnbGVuZ3RoJyBpbiBwcm9wcy5tb2RlbFZhbHVlID8gQXJyYXkuZnJvbShwcm9wcy5tb2RlbFZhbHVlKSA6IFsgcHJvcHMubW9kZWxWYWx1ZSBdKVxuICAgICAgICA6IFtdXG4gICAgKSlcblxuICAgIGNvbnN0IGhhc1ZhbHVlID0gY29tcHV0ZWQoKCkgPT4gZmllbGRWYWx1ZUlzRmlsbGVkKGlubmVyVmFsdWUudmFsdWUpKVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRTdHJpbmcgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgaW5uZXJWYWx1ZS52YWx1ZVxuICAgICAgICAubWFwKGZpbGUgPT4gZmlsZS5uYW1lKVxuICAgICAgICAuam9pbignLCAnKVxuICAgIClcblxuICAgIGNvbnN0IHRvdGFsU2l6ZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBodW1hblN0b3JhZ2VTaXplKFxuICAgICAgICBpbm5lclZhbHVlLnZhbHVlLnJlZHVjZSgoYWNjLCBmaWxlKSA9PiBhY2MgKyBmaWxlLnNpemUsIDApXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3QgY291bnRlclByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHRvdGFsU2l6ZTogdG90YWxTaXplLnZhbHVlLFxuICAgICAgZmlsZXNOdW1iZXI6IGlubmVyVmFsdWUudmFsdWUubGVuZ3RoLFxuICAgICAgbWF4RmlsZXM6IHByb3BzLm1heEZpbGVzXG4gICAgfSkpXG5cbiAgICBjb25zdCBpbnB1dEF0dHJzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHRhYmluZGV4OiAtMSxcbiAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgIHRpdGxlOiAnJywgLy8gdHJ5IHRvIHJlbW92ZSBkZWZhdWx0IHRvb2x0aXAsXG4gICAgICBhY2NlcHQ6IHByb3BzLmFjY2VwdCxcbiAgICAgIGNhcHR1cmU6IHByb3BzLmNhcHR1cmUsXG4gICAgICBuYW1lOiBuYW1lUHJvcC52YWx1ZSxcbiAgICAgIC4uLmF0dHJzLFxuICAgICAgaWQ6IHN0YXRlLnRhcmdldFVpZC52YWx1ZSxcbiAgICAgIGRpc2FibGVkOiBzdGF0ZS5lZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZVxuICAgIH0pKVxuXG4gICAgY29uc3QgZmllbGRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1maWxlIHEtZmllbGQtLWF1dG8taGVpZ2h0J1xuICAgICAgKyAoZG5kLnZhbHVlID09PSB0cnVlID8gJyBxLWZpbGUtLWRuZCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBpc0FwcGVuZGluZyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5tdWx0aXBsZSA9PT0gdHJ1ZSAmJiBwcm9wcy5hcHBlbmQgPT09IHRydWVcbiAgICApXG5cbiAgICBmdW5jdGlvbiByZW1vdmVBdEluZGV4IChpbmRleCkge1xuICAgICAgY29uc3QgZmlsZXMgPSBpbm5lclZhbHVlLnZhbHVlLnNsaWNlKClcbiAgICAgIGZpbGVzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIGVtaXRWYWx1ZShmaWxlcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVGaWxlIChmaWxlKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGlubmVyVmFsdWUudmFsdWUuaW5kZXhPZihmaWxlKVxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICByZW1vdmVBdEluZGV4KGluZGV4KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXRWYWx1ZSAoZmlsZXMpIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgcHJvcHMubXVsdGlwbGUgPT09IHRydWUgPyBmaWxlcyA6IGZpbGVzWyAwIF0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlkb3duIChlKSB7XG4gICAgICAvLyBwcmV2ZW50IGZvcm0gc3VibWl0IGlmIEVOVEVSIGlzIHByZXNzZWRcbiAgICAgIGUua2V5Q29kZSA9PT0gMTMgJiYgcHJldmVudChlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5dXAgKGUpIHtcbiAgICAgIC8vIG9ubHkgb24gRU5URVIgYW5kIFNQQUNFIHRvIG1hdGNoIG5hdGl2ZSBpbnB1dCBmaWVsZFxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikge1xuICAgICAgICBwaWNrRmlsZXMoZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRGaWxlSW5wdXQgKCkge1xuICAgICAgcmV0dXJuIGlucHV0UmVmLnZhbHVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRmlsZXNUb1F1ZXVlIChlLCBmaWxlTGlzdCkge1xuICAgICAgY29uc3QgZmlsZXMgPSBwcm9jZXNzRmlsZXMoZSwgZmlsZUxpc3QsIGlubmVyVmFsdWUudmFsdWUsIGlzQXBwZW5kaW5nLnZhbHVlKVxuICAgICAgY29uc3QgZmlsZUlucHV0ID0gZ2V0RmlsZUlucHV0KClcblxuICAgICAgaWYgKGZpbGVJbnB1dCAhPT0gdm9pZCAwICYmIGZpbGVJbnB1dCAhPT0gbnVsbCkge1xuICAgICAgICBmaWxlSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBub3RoaW5nIHRvIGRvLi4uXG4gICAgICBpZiAoZmlsZXMgPT09IHZvaWQgMCkgcmV0dXJuXG5cbiAgICAgIC8vIHByb3RlY3QgYWdhaW5zdCBpbnB1dCBAY2hhbmdlIGJlaW5nIGNhbGxlZCBpbiBhIGxvb3BcbiAgICAgIC8vIGxpa2UgaXQgaGFwcGVucyBvbiBTYWZhcmksIHNvIGRvbid0IGVtaXQgc2FtZSB0aGluZzpcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMubXVsdGlwbGUgPT09IHRydWVcbiAgICAgICAgICA/IHByb3BzLm1vZGVsVmFsdWUgJiYgZmlsZXMuZXZlcnkoZiA9PiBpbm5lclZhbHVlLnZhbHVlLmluY2x1ZGVzKGYpKVxuICAgICAgICAgIDogcHJvcHMubW9kZWxWYWx1ZSA9PT0gZmlsZXNbIDAgXVxuICAgICAgKSByZXR1cm5cblxuICAgICAgZW1pdFZhbHVlKFxuICAgICAgICBpc0FwcGVuZGluZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgID8gaW5uZXJWYWx1ZS52YWx1ZS5jb25jYXQoZmlsZXMpXG4gICAgICAgICAgOiBmaWxlc1xuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEZpbGxlciAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBoKCdpbnB1dCcsIHtcbiAgICAgICAgICBjbGFzczogWyBwcm9wcy5pbnB1dENsYXNzLCAncS1maWxlX19maWxsZXInIF0sXG4gICAgICAgICAgc3R5bGU6IHByb3BzLmlucHV0U3R5bGVcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZWxlY3Rpb24gKCkge1xuICAgICAgaWYgKHNsb3RzLmZpbGUgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGggPT09IDBcbiAgICAgICAgICA/IGdldEZpbGxlcigpXG4gICAgICAgICAgOiBpbm5lclZhbHVlLnZhbHVlLm1hcChcbiAgICAgICAgICAgIChmaWxlLCBpbmRleCkgPT4gc2xvdHMuZmlsZSh7IGluZGV4LCBmaWxlLCByZWY6IHRoaXMgfSlcbiAgICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzbG90cy5zZWxlY3RlZCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMFxuICAgICAgICAgID8gZ2V0RmlsbGVyKClcbiAgICAgICAgICA6IHNsb3RzLnNlbGVjdGVkKHsgZmlsZXM6IGlubmVyVmFsdWUudmFsdWUsIHJlZjogdGhpcyB9KVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMudXNlQ2hpcHMgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGlubmVyVmFsdWUudmFsdWUubGVuZ3RoID09PSAwXG4gICAgICAgICAgPyBnZXRGaWxsZXIoKVxuICAgICAgICAgIDogaW5uZXJWYWx1ZS52YWx1ZS5tYXAoKGZpbGUsIGkpID0+IGgoUUNoaXAsIHtcbiAgICAgICAgICAgIGtleTogJ2ZpbGUtJyArIGksXG4gICAgICAgICAgICByZW1vdmFibGU6IHN0YXRlLmVkaXRhYmxlLnZhbHVlLFxuICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICB0ZXh0Q29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgdGFiaW5kZXg6IHByb3BzLnRhYmluZGV4LFxuICAgICAgICAgICAgb25SZW1vdmU6ICgpID0+IHsgcmVtb3ZlQXRJbmRleChpKSB9XG4gICAgICAgICAgfSwgKCkgPT4gaCgnc3BhbicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGZpbGUubmFtZVxuICAgICAgICAgIH0pKSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBwcm9wcy5kaXNwbGF5VmFsdWUgIT09IHZvaWQgMFxuICAgICAgICA/IHByb3BzLmRpc3BsYXlWYWx1ZVxuICAgICAgICA6IHNlbGVjdGVkU3RyaW5nLnZhbHVlXG5cbiAgICAgIHJldHVybiB0ZXh0Q29udGVudC5sZW5ndGggIT09IDBcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBwcm9wcy5pbnB1dENsYXNzLFxuICAgICAgICAgICAgICBzdHlsZTogcHJvcHMuaW5wdXRTdHlsZSxcbiAgICAgICAgICAgICAgdGV4dENvbnRlbnRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICA6IGdldEZpbGxlcigpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5wdXQgKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcmVmOiBpbnB1dFJlZixcbiAgICAgICAgLi4uaW5wdXRBdHRycy52YWx1ZSxcbiAgICAgICAgLi4uZm9ybURvbVByb3BzLnZhbHVlLFxuICAgICAgICBjbGFzczogJ3EtZmllbGRfX2lucHV0IGZpdCBhYnNvbHV0ZS1mdWxsIGN1cnNvci1wb2ludGVyJyxcbiAgICAgICAgb25DaGFuZ2U6IGFkZEZpbGVzVG9RdWV1ZVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMubXVsdGlwbGUgPT09IHRydWUpIHtcbiAgICAgICAgZGF0YS5tdWx0aXBsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2lucHV0JywgZGF0YSlcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgICBmaWVsZENsYXNzLFxuICAgICAgZW1pdFZhbHVlLFxuICAgICAgaGFzVmFsdWUsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGlubmVyVmFsdWUsXG5cbiAgICAgIGZsb2F0aW5nTGFiZWw6IGNvbXB1dGVkKCgpID0+XG4gICAgICAgIGhhc1ZhbHVlLnZhbHVlID09PSB0cnVlXG4gICAgICAgIHx8IGZpZWxkVmFsdWVJc0ZpbGxlZChwcm9wcy5kaXNwbGF5VmFsdWUpXG4gICAgICApLFxuXG4gICAgICBjb21wdXRlZENvdW50ZXI6IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmNvdW50ZXJMYWJlbCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzLmNvdW50ZXJMYWJlbChjb3VudGVyUHJvcHMudmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXggPSBwcm9wcy5tYXhGaWxlc1xuICAgICAgICByZXR1cm4gYCR7IGlubmVyVmFsdWUudmFsdWUubGVuZ3RoIH0keyBtYXggIT09IHZvaWQgMCA/ICcgLyAnICsgbWF4IDogJycgfSAoJHsgdG90YWxTaXplLnZhbHVlIH0pYFxuICAgICAgfSksXG5cbiAgICAgIGdldENvbnRyb2xDaGlsZDogKCkgPT4gZ2V0RG5kTm9kZSgnZmlsZScpLFxuICAgICAgZ2V0Q29udHJvbDogKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIHJlZjogc3RhdGUudGFyZ2V0UmVmLFxuICAgICAgICAgIGNsYXNzOiAncS1maWVsZF9fbmF0aXZlIHJvdyBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXInLFxuICAgICAgICAgIHRhYmluZGV4OiBwcm9wcy50YWJpbmRleFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlLmVkaXRhYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7IG9uRHJhZ292ZXIsIG9uRHJhZ2xlYXZlLCBvbktleWRvd24sIG9uS2V5dXAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoKCdkaXYnLCBkYXRhLCBbIGdldElucHV0KCkgXS5jb25jYXQoZ2V0U2VsZWN0aW9uKCkpKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICByZW1vdmVBdEluZGV4LFxuICAgICAgcmVtb3ZlRmlsZSxcbiAgICAgIGdldE5hdGl2ZUVsZW1lbnQ6ICgpID0+IGlucHV0UmVmLnZhbHVlIC8vIGRlcHJlY2F0ZWRcbiAgICB9KVxuXG4gICAgaW5qZWN0UHJvcChwcm94eSwgJ25hdGl2ZUVsJywgKCkgPT4gaW5wdXRSZWYudmFsdWUpXG5cbiAgICByZXR1cm4gdXNlRmllbGQoc3RhdGUpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBvbkJlZm9yZVVubW91bnQsIFRyYW5zaXRpb24gfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTbGlkZVRyYW5zaXRpb24nLFxuXG4gIHByb3BzOiB7XG4gICAgYXBwZWFyOiBCb29sZWFuLFxuICAgIGR1cmF0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAzMDBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Nob3cnLCAnaGlkZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGxldCBhbmltYXRpbmcgPSBmYWxzZSwgZG9uZUZuLCBlbGVtZW50XG4gICAgbGV0IHRpbWVyID0gbnVsbCwgdGltZXJGYWxsYmFjayA9IG51bGwsIGFuaW1MaXN0ZW5lciwgbGFzdEV2ZW50XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICAgIGRvbmVGbj8uKClcbiAgICAgIGRvbmVGbiA9IG51bGxcbiAgICAgIGFuaW1hdGluZyA9IGZhbHNlXG5cbiAgICAgIGlmICh0aW1lciAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIHRpbWVyID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAodGltZXJGYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJGYWxsYmFjaylcbiAgICAgICAgdGltZXJGYWxsYmFjayA9IG51bGxcbiAgICAgIH1cblxuICAgICAgZWxlbWVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGFuaW1MaXN0ZW5lcilcbiAgICAgIGFuaW1MaXN0ZW5lciA9IG51bGxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiZWdpbiAoZWwsIGhlaWdodCwgZG9uZSkge1xuICAgICAgLy8gaGVyZSBvdmVyZmxvd1kgaXMgJ2hpZGRlbidcbiAgICAgIGlmIChoZWlnaHQgIT09IHZvaWQgMCkge1xuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBgJHsgaGVpZ2h0IH1weGBcbiAgICAgIH1cbiAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBgaGVpZ2h0ICR7IHByb3BzLmR1cmF0aW9uIH1tcyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjUwLCAxKWBcblxuICAgICAgYW5pbWF0aW5nID0gdHJ1ZVxuICAgICAgZG9uZUZuID0gZG9uZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZCAoZWwsIGV2ZW50KSB7XG4gICAgICBlbC5zdHlsZS5vdmVyZmxvd1kgPSBudWxsXG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSBudWxsXG4gICAgICBlbC5zdHlsZS50cmFuc2l0aW9uID0gbnVsbFxuICAgICAgY2xlYW51cCgpXG4gICAgICBldmVudCAhPT0gbGFzdEV2ZW50ICYmIGVtaXQoZXZlbnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FbnRlciAoZWwsIGRvbmUpIHtcbiAgICAgIGxldCBwb3MgPSAwXG4gICAgICBlbGVtZW50ID0gZWxcblxuICAgICAgLy8gaWYgYW5pbWF0aW9uZyBvdmVyZmxvd1kgaXMgYWxyZWFkeSAnaGlkZGVuJ1xuICAgICAgaWYgKGFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICBjbGVhbnVwKClcbiAgICAgICAgcG9zID0gZWwub2Zmc2V0SGVpZ2h0ID09PSBlbC5zY3JvbGxIZWlnaHQgPyAwIDogdm9pZCAwXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFzdEV2ZW50ID0gJ2hpZGUnXG4gICAgICAgIGVsLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgICB9XG5cbiAgICAgIGJlZ2luKGVsLCBwb3MsIGRvbmUpXG5cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRpbWVyID0gbnVsbFxuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBgJHsgZWwuc2Nyb2xsSGVpZ2h0IH1weGBcbiAgICAgICAgYW5pbUxpc3RlbmVyID0gZXZ0ID0+IHtcbiAgICAgICAgICB0aW1lckZhbGxiYWNrID0gbnVsbFxuXG4gICAgICAgICAgaWYgKE9iamVjdChldnQpICE9PSBldnQgfHwgZXZ0LnRhcmdldCA9PT0gZWwpIHtcbiAgICAgICAgICAgIGVuZChlbCwgJ3Nob3cnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgYW5pbUxpc3RlbmVyKVxuICAgICAgICB0aW1lckZhbGxiYWNrID0gc2V0VGltZW91dChhbmltTGlzdGVuZXIsIHByb3BzLmR1cmF0aW9uICogMS4xKVxuICAgICAgfSwgMTAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTGVhdmUgKGVsLCBkb25lKSB7XG4gICAgICBsZXQgcG9zXG4gICAgICBlbGVtZW50ID0gZWxcblxuICAgICAgaWYgKGFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICBjbGVhbnVwKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsYXN0RXZlbnQgPSAnc2hvdydcbiAgICAgICAgLy8gd2UgbmVlZCB0byBzZXQgb3ZlcmZsb3dZICdoaWRkZW4nIGJlZm9yZSBjYWxjdWxhdGluZyB0aGUgaGVpZ2h0XG4gICAgICAgIC8vIG9yIGVsc2Ugd2UgZ2V0IHNtYWxsIGRpZmZlcmVuY2VzXG4gICAgICAgIGVsLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgICAgIHBvcyA9IGVsLnNjcm9sbEhlaWdodFxuICAgICAgfVxuXG4gICAgICBiZWdpbihlbCwgcG9zLCBkb25lKVxuXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICBhbmltTGlzdGVuZXIgPSBldnQgPT4ge1xuICAgICAgICAgIHRpbWVyRmFsbGJhY2sgPSBudWxsXG5cbiAgICAgICAgICBpZiAoT2JqZWN0KGV2dCkgIT09IGV2dCB8fCBldnQudGFyZ2V0ID09PSBlbCkge1xuICAgICAgICAgICAgZW5kKGVsLCAnaGlkZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBhbmltTGlzdGVuZXIpXG4gICAgICAgIHRpbWVyRmFsbGJhY2sgPSBzZXRUaW1lb3V0KGFuaW1MaXN0ZW5lciwgcHJvcHMuZHVyYXRpb24gKiAxLjEpXG4gICAgICB9LCAxMDApXG4gICAgfVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBjbGVhbnVwKClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoVHJhbnNpdGlvbiwge1xuICAgICAgY3NzOiBmYWxzZSxcbiAgICAgIGFwcGVhcjogcHJvcHMuYXBwZWFyLFxuICAgICAgb25FbnRlcixcbiAgICAgIG9uTGVhdmVcbiAgICB9LCBzbG90cy5kZWZhdWx0KVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgc2hhbGxvd1JlYWN0aXZlLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgd2l0aERpcmVjdGl2ZXMsIGdldEN1cnJlbnRJbnN0YW5jZSwgdlNob3csIG9uQmVmb3JlVW5tb3VudCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJdGVtIGZyb20gJy4uL2l0ZW0vUUl0ZW0uanMnXG5pbXBvcnQgUUl0ZW1TZWN0aW9uIGZyb20gJy4uL2l0ZW0vUUl0ZW1TZWN0aW9uLmpzJ1xuaW1wb3J0IFFJdGVtTGFiZWwgZnJvbSAnLi4vaXRlbS9RSXRlbUxhYmVsLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVNsaWRlVHJhbnNpdGlvbiBmcm9tICcuLi9zbGlkZS10cmFuc2l0aW9uL1FTbGlkZVRyYW5zaXRpb24uanMnXG5pbXBvcnQgUVNlcGFyYXRvciBmcm9tICcuLi9zZXBhcmF0b3IvUVNlcGFyYXRvci5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB1c2VJZCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtaWQvdXNlLWlkLmpzJ1xuaW1wb3J0IHsgdXNlUm91dGVyTGlua1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2Utcm91dGVyLWxpbmsvdXNlLXJvdXRlci1saW5rLmpzJ1xuaW1wb3J0IHVzZU1vZGVsVG9nZ2xlLCB7IHVzZU1vZGVsVG9nZ2xlUHJvcHMsIHVzZU1vZGVsVG9nZ2xlRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1tb2RlbC10b2dnbGUvdXNlLW1vZGVsLXRvZ2dsZS5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHVpZCBmcm9tICcuLi8uLi91dGlscy91aWQvdWlkLmpzJ1xuXG5jb25zdCBpdGVtR3JvdXBzID0gc2hhbGxvd1JlYWN0aXZlKHt9KVxuY29uc3QgTElOS19QUk9QUyA9IE9iamVjdC5rZXlzKHVzZVJvdXRlckxpbmtQcm9wcylcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FFeHBhbnNpb25JdGVtJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVJvdXRlckxpbmtQcm9wcyxcbiAgICAuLi51c2VNb2RlbFRvZ2dsZVByb3BzLFxuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIGljb246IFN0cmluZyxcblxuICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgbGFiZWxMaW5lczogWyBOdW1iZXIsIFN0cmluZyBdLFxuXG4gICAgY2FwdGlvbjogU3RyaW5nLFxuICAgIGNhcHRpb25MaW5lczogWyBOdW1iZXIsIFN0cmluZyBdLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG5cbiAgICB0b2dnbGVBcmlhTGFiZWw6IFN0cmluZyxcbiAgICBleHBhbmRJY29uOiBTdHJpbmcsXG4gICAgZXhwYW5kZWRJY29uOiBTdHJpbmcsXG4gICAgZXhwYW5kSWNvbkNsYXNzOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGR1cmF0aW9uOiB7fSxcblxuICAgIGhlYWRlckluc2V0TGV2ZWw6IE51bWJlcixcbiAgICBjb250ZW50SW5zZXRMZXZlbDogTnVtYmVyLFxuXG4gICAgZXhwYW5kU2VwYXJhdG9yOiBCb29sZWFuLFxuICAgIGRlZmF1bHRPcGVuZWQ6IEJvb2xlYW4sXG4gICAgaGlkZUV4cGFuZEljb246IEJvb2xlYW4sXG4gICAgZXhwYW5kSWNvblRvZ2dsZTogQm9vbGVhbixcbiAgICBzd2l0Y2hUb2dnbGVTaWRlOiBCb29sZWFuLFxuICAgIGRlbnNlVG9nZ2xlOiBCb29sZWFuLFxuICAgIGdyb3VwOiBTdHJpbmcsXG4gICAgcG9wdXA6IEJvb2xlYW4sXG5cbiAgICBoZWFkZXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBoZWFkZXJDbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXVxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlTW9kZWxUb2dnbGVFbWl0cyxcbiAgICAnY2xpY2snLCAnYWZ0ZXJTaG93JywgJ2FmdGVySGlkZSdcbiAgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcblxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoXG4gICAgICBwcm9wcy5tb2RlbFZhbHVlICE9PSBudWxsXG4gICAgICAgID8gcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgICA6IHByb3BzLmRlZmF1bHRPcGVuZWRcbiAgICApXG5cbiAgICBjb25zdCBibHVyVGFyZ2V0UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgdGFyZ2V0VWlkID0gdXNlSWQoKVxuXG4gICAgY29uc3QgeyBzaG93LCBoaWRlLCB0b2dnbGUgfSA9IHVzZU1vZGVsVG9nZ2xlKHsgc2hvd2luZyB9KVxuXG4gICAgbGV0IHVuaXF1ZUlkLCBleGl0R3JvdXBcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtZXhwYW5zaW9uLWl0ZW0gcS1pdGVtLXR5cGUnXG4gICAgICArIGAgcS1leHBhbnNpb24taXRlbS0tJHsgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJyB9YFxuICAgICAgKyBgIHEtZXhwYW5zaW9uLWl0ZW0tLSR7IHByb3BzLnBvcHVwID09PSB0cnVlID8gJ3BvcHVwJyA6ICdzdGFuZGFyZCcgfWBcbiAgICApXG5cbiAgICBjb25zdCBjb250ZW50U3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuY29udGVudEluc2V0TGV2ZWwgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdSaWdodCcgOiAnTGVmdCdcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFsgJ3BhZGRpbmcnICsgZGlyIF06IChwcm9wcy5jb250ZW50SW5zZXRMZXZlbCAqIDU2KSArICdweCdcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaGFzTGluayA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIChcbiAgICAgICAgcHJvcHMuaHJlZiAhPT0gdm9pZCAwXG4gICAgICAgIHx8IChwcm9wcy50byAhPT0gdm9pZCAwICYmIHByb3BzLnRvICE9PSBudWxsICYmIHByb3BzLnRvICE9PSAnJylcbiAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCBsaW5rUHJvcHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7fVxuICAgICAgTElOS19QUk9QUy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGFjY1sga2V5IF0gPSBwcm9wc1sga2V5IF1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGlzQ2xpY2thYmxlID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGhhc0xpbmsudmFsdWUgPT09IHRydWUgfHwgcHJvcHMuZXhwYW5kSWNvblRvZ2dsZSAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGV4cGFuc2lvbkljb24gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5leHBhbmRlZEljb24gIT09IHZvaWQgMCAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuZXhwYW5kZWRJY29uXG4gICAgICAgIDogcHJvcHMuZXhwYW5kSWNvbiB8fCAkcS5pY29uU2V0LmV4cGFuc2lvbkl0ZW1bIHByb3BzLmRlbnNlVG9nZ2xlID09PSB0cnVlID8gJ2RlbnNlSWNvbicgOiAnaWNvbicgXVxuICAgICkpXG5cbiAgICBjb25zdCBhY3RpdmVUb2dnbGVJY29uID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgKGhhc0xpbmsudmFsdWUgPT09IHRydWUgfHwgcHJvcHMuZXhwYW5kSWNvblRvZ2dsZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCBoZWFkZXJTbG90U2NvcGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgZXhwYW5kZWQ6IHNob3dpbmcudmFsdWUgPT09IHRydWUsXG4gICAgICBkZXRhaWxzSWQ6IHRhcmdldFVpZC52YWx1ZSxcbiAgICAgIHRvZ2dsZSxcbiAgICAgIHNob3csXG4gICAgICBoaWRlXG4gICAgfSkpXG5cbiAgICBjb25zdCB0b2dnbGVBcmlhQXR0cnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCB0b2dnbGVBcmlhTGFiZWwgPSBwcm9wcy50b2dnbGVBcmlhTGFiZWwgIT09IHZvaWQgMFxuICAgICAgICA/IHByb3BzLnRvZ2dsZUFyaWFMYWJlbFxuICAgICAgICA6ICRxLmxhbmcubGFiZWxbIHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAnY29sbGFwc2UnIDogJ2V4cGFuZCcgXShwcm9wcy5sYWJlbClcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogdGFyZ2V0VWlkLnZhbHVlLFxuICAgICAgICAnYXJpYS1sYWJlbCc6IHRvZ2dsZUFyaWFMYWJlbFxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5ncm91cCwgbmFtZSA9PiB7XG4gICAgICBleGl0R3JvdXA/LigpXG4gICAgICBuYW1lICE9PSB2b2lkIDAgJiYgZW50ZXJHcm91cCgpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIG9uSGVhZGVyQ2xpY2sgKGUpIHtcbiAgICAgIGhhc0xpbmsudmFsdWUgIT09IHRydWUgJiYgdG9nZ2xlKGUpXG4gICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlSWNvbktleWJvYXJkIChlKSB7XG4gICAgICBlLmtleUNvZGUgPT09IDEzICYmIHRvZ2dsZUljb24oZSwgdHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVJY29uIChlLCBrZXlib2FyZCkge1xuICAgICAgaWYgKGtleWJvYXJkICE9PSB0cnVlICYmIGUucUF2b2lkRm9jdXMgIT09IHRydWUpIHtcbiAgICAgICAgYmx1clRhcmdldFJlZi52YWx1ZT8uZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICB0b2dnbGUoZSlcbiAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TaG93ICgpIHtcbiAgICAgIGVtaXQoJ2FmdGVyU2hvdycpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25IaWRlICgpIHtcbiAgICAgIGVtaXQoJ2FmdGVySGlkZScpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW50ZXJHcm91cCAoKSB7XG4gICAgICBpZiAodW5pcXVlSWQgPT09IHZvaWQgMCkge1xuICAgICAgICB1bmlxdWVJZCA9IHVpZCgpXG4gICAgICB9XG5cbiAgICAgIGlmIChzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF0gPSB1bmlxdWVJZFxuICAgICAgfVxuXG4gICAgICBjb25zdCBzaG93ID0gd2F0Y2goc2hvd2luZywgdmFsID0+IHtcbiAgICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF0gPSB1bmlxdWVJZFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF0gPT09IHVuaXF1ZUlkKSB7XG4gICAgICAgICAgZGVsZXRlIGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgY29uc3QgZ3JvdXAgPSB3YXRjaChcbiAgICAgICAgKCkgPT4gaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXSxcbiAgICAgICAgKHZhbCwgb2xkVmFsKSA9PiB7XG4gICAgICAgICAgaWYgKG9sZFZhbCA9PT0gdW5pcXVlSWQgJiYgdmFsICE9PSB2b2lkIDAgJiYgdmFsICE9PSB1bmlxdWVJZCkge1xuICAgICAgICAgICAgaGlkZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGV4aXRHcm91cCA9ICgpID0+IHtcbiAgICAgICAgc2hvdygpXG4gICAgICAgIGdyb3VwKClcblxuICAgICAgICBpZiAoaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXSA9PT0gdW5pcXVlSWQpIHtcbiAgICAgICAgICBkZWxldGUgaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXVxuICAgICAgICB9XG5cbiAgICAgICAgZXhpdEdyb3VwID0gdm9pZCAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VG9nZ2xlSWNvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBjbGFzczogW1xuICAgICAgICAgICdxLWZvY3VzYWJsZSByZWxhdGl2ZS1wb3NpdGlvbiBjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICAgICsgYCR7IHByb3BzLmRlbnNlVG9nZ2xlID09PSB0cnVlICYmIHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgPT09IHRydWUgPyAnIGl0ZW1zLWVuZCcgOiAnJyB9YCxcbiAgICAgICAgICBwcm9wcy5leHBhbmRJY29uQ2xhc3NcbiAgICAgICAgXSxcbiAgICAgICAgc2lkZTogcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZSAhPT0gdHJ1ZSxcbiAgICAgICAgYXZhdGFyOiBwcm9wcy5zd2l0Y2hUb2dnbGVTaWRlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX190b2dnbGUtaWNvbidcbiAgICAgICAgICAgICsgKHByb3BzLmV4cGFuZGVkSWNvbiA9PT0gdm9pZCAwICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAgICAgPyAnIHEtZXhwYW5zaW9uLWl0ZW1fX3RvZ2dsZS1pY29uLS1yb3RhdGVkJ1xuICAgICAgICAgICAgICA6ICcnKSxcbiAgICAgICAgICBuYW1lOiBleHBhbnNpb25JY29uLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICBdXG5cbiAgICAgIGlmIChhY3RpdmVUb2dnbGVJY29uLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgIHRhYmluZGV4OiAwLFxuICAgICAgICAgIC4uLnRvZ2dsZUFyaWFBdHRycy52YWx1ZSxcbiAgICAgICAgICBvbkNsaWNrOiB0b2dnbGVJY29uLFxuICAgICAgICAgIG9uS2V5dXA6IHRvZ2dsZUljb25LZXlib2FyZFxuICAgICAgICB9KVxuXG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgcmVmOiBibHVyVGFyZ2V0UmVmLFxuICAgICAgICAgICAgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX190b2dnbGUtZm9jdXMgcS1pY29uIHEtZm9jdXMtaGVscGVyIHEtZm9jdXMtaGVscGVyLS1yb3VuZGVkJyxcbiAgICAgICAgICAgIHRhYmluZGV4OiAtMVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUl0ZW1TZWN0aW9uLCBkYXRhLCAoKSA9PiBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIZWFkZXJDaGlsZCAoKSB7XG4gICAgICBsZXQgY2hpbGRcblxuICAgICAgaWYgKHNsb3RzLmhlYWRlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gW10uY29uY2F0KHNsb3RzLmhlYWRlcihoZWFkZXJTbG90U2NvcGUudmFsdWUpKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gW1xuICAgICAgICAgIGgoUUl0ZW1TZWN0aW9uLCAoKSA9PiBbXG4gICAgICAgICAgICBoKFFJdGVtTGFiZWwsIHsgbGluZXM6IHByb3BzLmxhYmVsTGluZXMgfSwgKCkgPT4gcHJvcHMubGFiZWwgfHwgJycpLFxuXG4gICAgICAgICAgICBwcm9wcy5jYXB0aW9uXG4gICAgICAgICAgICAgID8gaChRSXRlbUxhYmVsLCB7IGxpbmVzOiBwcm9wcy5jYXB0aW9uTGluZXMsIGNhcHRpb246IHRydWUgfSwgKCkgPT4gcHJvcHMuY2FwdGlvbilcbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuXG4gICAgICAgIHByb3BzLmljb24gJiYgY2hpbGRbIHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgPT09IHRydWUgPyAncHVzaCcgOiAndW5zaGlmdCcgXShcbiAgICAgICAgICBoKFFJdGVtU2VjdGlvbiwge1xuICAgICAgICAgICAgc2lkZTogcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIGF2YXRhcjogcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZSAhPT0gdHJ1ZVxuICAgICAgICAgIH0sICgpID0+IGgoUUljb24sIHsgbmFtZTogcHJvcHMuaWNvbiB9KSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5oaWRlRXhwYW5kSWNvbiAhPT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZFsgcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZSA9PT0gdHJ1ZSA/ICd1bnNoaWZ0JyA6ICdwdXNoJyBdKFxuICAgICAgICAgIGdldFRvZ2dsZUljb24oKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhlYWRlciAoKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICByZWY6ICdpdGVtJyxcbiAgICAgICAgc3R5bGU6IHByb3BzLmhlYWRlclN0eWxlLFxuICAgICAgICBjbGFzczogcHJvcHMuaGVhZGVyQ2xhc3MsXG4gICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICBpbnNldExldmVsOiBwcm9wcy5oZWFkZXJJbnNldExldmVsXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0NsaWNrYWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBkYXRhLmNsaWNrYWJsZSA9IHRydWVcbiAgICAgICAgZGF0YS5vbkNsaWNrID0gb25IZWFkZXJDbGlja1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBoYXNMaW5rLnZhbHVlID09PSB0cnVlID8gbGlua1Byb3BzLnZhbHVlIDogdG9nZ2xlQXJpYUF0dHJzLnZhbHVlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUl0ZW0sIGRhdGEsIGdldEhlYWRlckNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRyYW5zaXRpb25DaGlsZCAoKSB7XG4gICAgICByZXR1cm4gd2l0aERpcmVjdGl2ZXMoXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBrZXk6ICdlLWNvbnRlbnQnLFxuICAgICAgICAgIGNsYXNzOiAncS1leHBhbnNpb24taXRlbV9fY29udGVudCByZWxhdGl2ZS1wb3NpdGlvbicsXG4gICAgICAgICAgc3R5bGU6IGNvbnRlbnRTdHlsZS52YWx1ZSxcbiAgICAgICAgICBpZDogdGFyZ2V0VWlkLnZhbHVlXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKSxcbiAgICAgICAgWyBbXG4gICAgICAgICAgdlNob3csXG4gICAgICAgICAgc2hvd2luZy52YWx1ZVxuICAgICAgICBdIF1cbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb250ZW50ICgpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBbXG4gICAgICAgIGdldEhlYWRlcigpLFxuXG4gICAgICAgIGgoUVNsaWRlVHJhbnNpdGlvbiwge1xuICAgICAgICAgIGR1cmF0aW9uOiBwcm9wcy5kdXJhdGlvbixcbiAgICAgICAgICBvblNob3csXG4gICAgICAgICAgb25IaWRlXG4gICAgICAgIH0sIGdldFRyYW5zaXRpb25DaGlsZClcbiAgICAgIF1cblxuICAgICAgaWYgKHByb3BzLmV4cGFuZFNlcGFyYXRvciA9PT0gdHJ1ZSkge1xuICAgICAgICBub2RlLnB1c2goXG4gICAgICAgICAgaChRU2VwYXJhdG9yLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtZXhwYW5zaW9uLWl0ZW1fX2JvcmRlciBxLWV4cGFuc2lvbi1pdGVtX19ib3JkZXItLXRvcCBhYnNvbHV0ZS10b3AnLFxuICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaChRU2VwYXJhdG9yLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtZXhwYW5zaW9uLWl0ZW1fX2JvcmRlciBxLWV4cGFuc2lvbi1pdGVtX19ib3JkZXItLWJvdHRvbSBhYnNvbHV0ZS1ib3R0b20nLFxuICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cblxuICAgIHByb3BzLmdyb3VwICE9PSB2b2lkIDAgJiYgZW50ZXJHcm91cCgpXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgZXhpdEdyb3VwPy4oKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBbXG4gICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1leHBhbnNpb24taXRlbV9fY29udGFpbmVyIHJlbGF0aXZlLXBvc2l0aW9uJyB9LCBnZXRDb250ZW50KCkpXG4gICAgXSlcbiAgfVxufSlcbiJdLCJuYW1lcyI6WyJzaG93Il0sIm1hcHBpbmdzIjoiOzs7QUFLQSxTQUFTLFlBQWEsT0FBTyxlQUFlLHNCQUFzQixVQUFVO0FBQzFFLFFBQU0sZ0JBQWdCLENBQUE7QUFFdEIsUUFBTSxRQUFRLFVBQVE7QUFDcEIsUUFBSSxTQUFTLElBQUksTUFBTSxNQUFNO0FBQzNCLG9CQUFjLEtBQUssSUFBSTtBQUFBLElBQ3pCLE9BQ0s7QUFDSCxvQkFBYyxLQUFLLEVBQUUsc0JBQXNCLEtBQUksQ0FBRTtBQUFBLElBQ25EO0FBQUEsRUFDRixDQUFDO0FBRUQsU0FBTztBQUNUO0FBRUEsU0FBUyxtQkFBb0IsR0FBRztBQUM5QixNQUFJLEdBQUcsY0FBYztBQUNuQixNQUFFLGFBQWEsYUFBYTtBQUFBLEVBQzlCO0FBRUEsaUJBQWUsQ0FBQztBQUNsQjtBQUVPLE1BQU0sZUFBZTtBQUFBLEVBQzFCLFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFBQSxFQUNSLFNBQVM7QUFBQSxFQUNULGFBQWEsQ0FBRSxRQUFRLE1BQU07QUFBQSxFQUM3QixjQUFjLENBQUUsUUFBUSxNQUFN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LGNBQWE7QUFBQSxRQUN2QjtBQUFBLE1BQ007QUFFQSxhQUFPO0FBQUEsSUFDVDtBQUVBLGFBQVMsWUFBYTtBQUNwQixZQUFNLE9BQU87QUFBQSxRQUNYLEtBQUs7QUFBQSxRQUNMLE9BQU8sTUFBTTtBQUFBLFFBQ2IsT0FBTyxNQUFNO0FBQUEsUUFDYixNQUFNLE9BQU87QUFBQSxRQUNiLFNBQVMsTUFBTTtBQUFBLFFBQ2YsT0FBTyxNQUFNO0FBQUEsUUFDYixZQUFZLE1BQU07QUFBQSxNQUMxQjtBQUVNLFVBQUksWUFBWSxVQUFVLE1BQU07QUFDOUIsYUFBSyxZQUFZO0FBQ2pCLGFBQUssVUFBVTtBQUVmLGVBQU87QUFBQSxVQUNMO0FBQUEsVUFDQSxRQUFRLFVBQVUsT0FBTyxVQUFVLFFBQVEsZ0JBQWdCO0FBQUEsUUFDckU7QUFBQSxNQUNNO0FBRUEsYUFBTyxFQUFFLE9BQU8sTUFBTSxjQUFjO0FBQUEsSUFDdEM7QUFFQSxhQUFTLHFCQUFzQjtBQUM3QixhQUFPO0FBQUEsUUFDTCxFQUFFLE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLE9BQU8sYUFBYTtBQUFBLFVBQ3BCLElBQUksVUFBVTtBQUFBLFFBQ3hCLEdBQVcsTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUFBLFFBQ3ZCLENBQUU7QUFBQSxVQUNBO0FBQUEsVUFDQSxRQUFRO0FBQUEsUUFDbEIsQ0FBUztBQUFBLE1BQ1Q7QUFBQSxJQUNJO0FBRUEsYUFBUyxhQUFjO0FBQ3JCLFlBQU0sT0FBTztBQUFBLFFBQ1gsVUFBUztBQUFBLFFBRVQsRUFBRSxrQkFBa0I7QUFBQSxVQUNsQixVQUFVLE1BQU07QUFBQSxVQUNoQjtBQUFBLFVBQ0E7QUFBQSxRQUNWLEdBQVcsa0JBQWtCO0FBQUEsTUFDN0I7QUFFTSxVQUFJLE1BQU0sb0JBQW9CLE1BQU07QUFDbEMsYUFBSztBQUFBLFVBQ0gsRUFBRSxZQUFZO0FBQUEsWUFDWixPQUFPO0FBQUEsWUFDUCxNQUFNLE9BQU87QUFBQSxVQUN6QixDQUFXO0FBQUEsVUFDRCxFQUFFLFlBQVk7QUFBQSxZQUNaLE9BQU87QUFBQSxZQUNQLE1BQU0sT0FBTztBQUFBLFVBQ3pCLENBQVc7QUFBQSxRQUNYO0FBQUEsTUFDTTtBQUVBLGFBQU87QUFBQSxJQUNUO0FBRUEsVUFBTSxVQUFVLFVBQVUsV0FBVTtBQUVwQyxvQkFBZ0IsTUFBTTtBQUNwQixrQkFBUztBQUFBLElBQ1gsQ0FBQztBQUVELFdBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLFFBQVEsU0FBUztBQUFBLE1BQzlDLEVBQUUsT0FBTyxFQUFFLE9BQU8sZ0RBQStDLEdBQUksV0FBVSxDQUFFO0FBQUEsSUFDdkYsQ0FBSztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzXX0=
