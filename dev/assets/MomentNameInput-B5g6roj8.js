import { Q as QItem, a as QItemSection } from "./format-mCdLZtFG.js";
import { Q as QSelect } from "./QSelect-WCK0xNWi.js";
import { Y as defineComponent, bD as Moment, Z as useProjectStore, r as ref, p as computed, a1 as _export_sfc, aa as createElementBlock, a4 as openBlock, ab as createCommentVNode, a6 as createVNode, a7 as createBaseVNode, a5 as withCtx, a9 as createTextVNode, af as withKeys, a8 as QBtn, ag as Fragment } from "./index-C8moTFq2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MomentNameInput",
  props: {
    moment: { type: Moment, default: null }
  },
  emits: ["change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const store = useProjectStore();
    const emit = __emit;
    const props = __props;
    const name = ref(props.moment.name);
    const completions = ref([]);
    function validate() {
      if (props.moment) {
        store.updateElement(props.moment, { name: name.value });
      }
      emit("change", name.value);
    }
    function cancel() {
      emit("change", props.moment.name);
    }
    const context = computed(() => {
      const moments = store.getMomentsByName(props.moment.projectId, name.value);
      const completions2 = [...new Set(store.getMomentsByPrefix(props.moment.projectId, name.value).map((c) => c.name))];
      if (!moments.length) {
        return {
          original: true,
          completions: completions2
        };
      } else {
        return {
          reference: moments[0],
          completions: completions2
        };
      }
    });
    function setName(value) {
      name.value = value;
    }
    function filterNames(_val, update) {
      update(() => {
        completions.value = context.value?.completions ?? [];
      });
    }
    const __returned__ = { store, emit, props, name, completions, validate, cancel, context, setName, filterNames };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "context"
};
const _hoisted_2 = { class: "row wrap justify-between" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    $setup.context.original ? (openBlock(), createElementBlock("div", _hoisted_1, [..._cache[1] || (_cache[1] = [
      createBaseVNode("em", null, "Nom original", -1)
    ])])) : createCommentVNode("", true),
    createVNode(QSelect, {
      dense: "",
      onFocus: _cache[0] || (_cache[0] = ($event) => $event.target.select()),
      filled: "",
      "model-value": $setup.name,
      "use-input": "",
      "hide-selected": "",
      "fill-input": "",
      "menu-anchor": "top right",
      "input-debounce": 0,
      options: $setup.context?.completions ?? [],
      onFilter: $setup.filterNames,
      onInputValue: $setup.setName,
      onKeyup: withKeys($setup.validate, ["enter"]),
      autofocus: ""
    }, {
      "no-option": withCtx(() => [
        createVNode(QItem, null, {
          default: withCtx(() => [
            createVNode(QItemSection, { class: "text-grey" }, {
              default: withCtx(() => [..._cache[2] || (_cache[2] = [
                createTextVNode(" No results ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model-value", "options"]),
    createBaseVNode("div", _hoisted_2, [
      createVNode(QBtn, {
        flat: "",
        size: "sm",
        onClick: $setup.cancel
      }, {
        default: withCtx(() => [..._cache[3] || (_cache[3] = [
          createTextVNode("Cancel", -1)
        ])]),
        _: 1
      }),
      createVNode(QBtn, {
        flat: "",
        size: "sm",
        onClick: $setup.validate
      }, {
        default: withCtx(() => [..._cache[4] || (_cache[4] = [
          createTextVNode("Set", -1)
        ])]),
        _: 1
      })
    ])
  ], 64);
}
const MomentNameInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2c34dd2f"], ["__file", "MomentNameInput.vue"]]);
export {
  MomentNameInput as M
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9tZW50TmFtZUlucHV0LUI1ZzZyb2o4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb21lbnROYW1lSW5wdXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRleHRcIlxuICAgICAgIHYtaWY9XCJjb250ZXh0Lm9yaWdpbmFsXCI+XG4gICAgPGVtPk5vbSBvcmlnaW5hbDwvZW0+XG4gIDwvZGl2PlxuICA8cS1zZWxlY3RcbiAgICBkZW5zZVxuICAgIEBmb2N1cz1cIigkZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnNlbGVjdCgpXCJcbiAgICBmaWxsZWRcbiAgICA6bW9kZWwtdmFsdWU9XCJuYW1lXCJcbiAgICB1c2UtaW5wdXRcbiAgICBoaWRlLXNlbGVjdGVkXG4gICAgZmlsbC1pbnB1dFxuICAgIG1lbnUtYW5jaG9yPVwidG9wIHJpZ2h0XCJcbiAgICA6aW5wdXQtZGVib3VuY2U9XCIwXCJcbiAgICA6b3B0aW9ucz1cImNvbnRleHQ/LmNvbXBsZXRpb25zID8/IFtdXCJcbiAgICBAZmlsdGVyPVwiZmlsdGVyTmFtZXNcIlxuICAgIEBpbnB1dC12YWx1ZT1cInNldE5hbWVcIlxuICAgIEBrZXl1cC5lbnRlcj1cInZhbGlkYXRlXCJcbiAgICBhdXRvZm9jdXNcbiAgICA+XG4gICAgPHRlbXBsYXRlIHYtc2xvdDpuby1vcHRpb24+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJ0ZXh0LWdyZXlcIj5cbiAgICAgICAgICBObyByZXN1bHRzXG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3Etc2VsZWN0PlxuICA8ZGl2IGNsYXNzPVwicm93IHdyYXAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgPHEtYnRuXG4gICAgICBmbGF0XG4gICAgICBzaXplPVwic21cIlxuICAgICAgQGNsaWNrPVwiY2FuY2VsXCI+Q2FuY2VsPC9xLWJ0bj5cbiAgICA8cS1idG5cbiAgICAgIGZsYXRcbiAgICAgIHNpemU9XCJzbVwiXG4gICAgICBAY2xpY2s9XCJ2YWxpZGF0ZVwiPlNldDwvcS1idG4+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgTW9tZW50IGZyb20gJ3N0b3Jlcy9tb2RlbHMvbW9tZW50J1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBlbWl0ID0gZGVmaW5lRW1pdHMoWyAnY2hhbmdlJyBdKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgbW9tZW50OiB7IHR5cGU6IE1vbWVudCwgZGVmYXVsdDogbnVsbCB9XG4gIH0pXG5cbiAgY29uc3QgbmFtZSA9IHJlZihwcm9wcy5tb21lbnQubmFtZSlcblxuICBjb25zdCBjb21wbGV0aW9ucyA9IHJlZihbXSBhcyBzdHJpbmdbXSlcblxuICBmdW5jdGlvbiB2YWxpZGF0ZSAoKSB7XG4gICAgICAvLyBJZiB0aGUgc2VsZWN0IGhhcyBmb2N1cywgdGhlbiB1c2UgdGhlIHNlbGVjdGVkIG5hbWUuIEVsc2UgdXNlIHRoZSBpbnB1dCBuYW1lIHZhbHVlLlxuXG4gICAgICBpZiAocHJvcHMubW9tZW50KSB7XG4gICAgICAgICAgc3RvcmUudXBkYXRlRWxlbWVudChwcm9wcy5tb21lbnQsIHsgbmFtZTogbmFtZS52YWx1ZSB9KVxuICAgICAgfVxuICAgICAgZW1pdCgnY2hhbmdlJywgbmFtZS52YWx1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCAoKSB7XG4gICAgICBlbWl0KCdjaGFuZ2UnLCBwcm9wcy5tb21lbnQubmFtZSlcbiAgfVxuXG4gIGNvbnN0IGNvbnRleHQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBtb21lbnRzID0gc3RvcmUuZ2V0TW9tZW50c0J5TmFtZShwcm9wcy5tb21lbnQucHJvamVjdElkLCBuYW1lLnZhbHVlKVxuICAgICAgY29uc3QgY29tcGxldGlvbnMgPSBbIC4uLm5ldyBTZXQoc3RvcmUuZ2V0TW9tZW50c0J5UHJlZml4KHByb3BzLm1vbWVudC5wcm9qZWN0SWQsIG5hbWUudmFsdWUpLm1hcChjID0+IGMubmFtZSkpIF1cbiAgICAgIGlmICghbW9tZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4geyBvcmlnaW5hbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9ucyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHJlZmVyZW5jZTogbW9tZW50c1swXSxcbiAgICAgICAgICAgICAgY29tcGxldGlvbnNcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gc2V0TmFtZSAodmFsdWU6IHN0cmluZykge1xuICAgICAgbmFtZS52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWx0ZXJOYW1lcyAoX3ZhbDogc3RyaW5nLCB1cGRhdGU6IChjYjogKCkgPT4gdm9pZCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJmaWx0ZXJOYW1lc1wiLCB2YWwsIGNvbnRleHQudmFsdWU/LmNvbXBsZXRpb25zKVxuICAgICAgdXBkYXRlKCgpID0+IHtcbiAgICAgICAgICBjb21wbGV0aW9ucy52YWx1ZSA9IGNvbnRleHQudmFsdWU/LmNvbXBsZXRpb25zID8/IFtdXG4gICAgICB9KVxuICB9XG48L3NjcmlwdD5cblxuICA8c3R5bGUgc2NvcGVkPlxuICAubW9tZW50IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgd2lkdGg6IHZhcigtLW92ZXJ2aWV3LXdpZHRoKSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiB2YXIoLS1vdmVydmlldy1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRleHQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4OiAwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucmVmZXJlbmNlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIH1cbiAgLnJlbGF0aW9uIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLW92ZXJ2aWV3LWhlaWdodCk7XG4gICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgfVxuICAuY29tcGxldGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXgtaGVpZ2h0OiA1ZW07XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG4gIC5oYXMtY2hpbGQsXG4gIC5oYXMtcGFyZW50LFxuICAuaXMtY3VycmVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbImNvbXBsZXRpb25zIiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUNvbW1lbnRWTm9k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
