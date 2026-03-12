import { Q as QPage } from "./QPage-B7iBNboQ.js";
import { Y as defineComponent, Z as useProjectStore, r as ref, p as computed, aM as exportDataAsCsv, a1 as _export_sfc, aa as createElementBlock, a4 as openBlock, a6 as createVNode, a5 as withCtx, ae as QInput, a8 as QBtn, _ as useInterfaceStore, $ as storeToRefs, a3 as createBlock } from "./index-DT2JP2rj.js";
import { Q as QTable } from "./QTable-BRoyYuWt.js";
import { e as exportFile } from "./export-file-lpTZqdHO.js";
import "./QList-Be0Kk92v.js";
import "./QSelect-GGYVJLXz.js";
import "./QItemLabel-DcM4fill.js";
import "./format-Dbce-Jpy.js";
import "./rtl-DDpZOXNn.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DescriptemTable",
  props: {
    projectId: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const props = __props;
    const textFilter = ref("");
    const momentFilter = ref("");
    const descriptems = computed(() => store.getDescriptemsByProject(props.projectId ?? ""));
    const filteredDescriptems = computed(() => {
      let output = descriptems.value;
      const textFilterValue = textFilter.value;
      const momentFilterValue = momentFilter.value;
      if (textFilterValue) {
        output = output.filter((descriptem) => descriptem.text.includes(textFilterValue));
      }
      if (momentFilterValue) {
        output = output.filter((descriptem) => descriptem.moment?.name?.includes(momentFilterValue) || false);
      }
      return output;
    });
    const columns = [
      {
        name: "interview",
        label: "Interview",
        field: (row) => row.interview.label,
        sortable: true
      },
      {
        name: "text",
        label: "Text",
        classes: "column-small",
        headerClasses: "column-small",
        align: "left",
        field: (row) => row.text,
        sortable: true
      },
      {
        name: "start",
        label: "Start",
        field: (row) => row.startIndex,
        sortable: true
      },
      {
        name: "end",
        label: "End",
        field: (row) => row.endIndex,
        sortable: true
      },
      {
        name: "moment",
        label: "Moment",
        field: (row) => row.moment?.name,
        sortable: true
      },
      {
        name: "category",
        label: "Category",
        field: (row) => row.specificsynchroniccategory?.name,
        sortable: true
      },
      {
        name: "creator",
        label: "Creator",
        field: "creator",
        sortable: true
      },
      { name: "contributor", label: "Contributor", field: "contributor", sortable: true },
      { name: "created", label: "Created", field: "created", sortable: true },
      { name: "modified", label: "Modified", field: "modified", sortable: true }
    ];
    const pagination = ref({
      rowsPerPage: 0
    });
    function exportTable() {
      console.log(filteredDescriptems.value);
      const content = exportDataAsCsv(columns, filteredDescriptems.value);
      exportFile(
        "table-export.csv",
        content,
        "text/csv"
      );
    }
    const __returned__ = { store, props, textFilter, momentFilter, descriptems, filteredDescriptems, columns, pagination, exportTable };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "descriptems" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(QTable, {
      style: { "height": "80vh" },
      dense: "",
      flat: "",
      bordered: "",
      title: "Descriptems",
      rows: $setup.filteredDescriptems,
      columns: $setup.columns,
      color: "primary",
      "row-key": "id",
      pagination: $setup.pagination,
      "onUpdate:pagination": _cache[2] || (_cache[2] = ($event) => $setup.pagination = $event),
      "rows-per-page-options": [0]
    }, {
      "top-right": withCtx(() => [
        createVNode(QInput, {
          dense: "",
          clearable: "",
          type: "search",
          label: "Filter text",
          modelValue: $setup.textFilter,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.textFilter = $event)
        }, null, 8, ["modelValue"]),
        createVNode(QInput, {
          dense: "",
          clearable: "",
          type: "search",
          label: "Filter moment",
          modelValue: $setup.momentFilter,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.momentFilter = $event)
        }, null, 8, ["modelValue"]),
        createVNode(QBtn, {
          color: "primary",
          "icon-right": "archive",
          label: "Export to csv",
          "no-caps": "",
          onClick: $setup.exportTable
        })
      ]),
      _: 1
    }, 8, ["rows", "pagination"])
  ]);
}
const DescriptemTable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "DescriptemTable.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "DescriptemPage"
  },
  __name: "DescriptemPage",
  setup(__props, { expose: __expose }) {
    __expose();
    const istore = useInterfaceStore();
    const { currentProjectId } = storeToRefs(istore);
    const __returned__ = { istore, currentProjectId, DescriptemTable };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { padding: "" }, {
    default: withCtx(() => [
      createVNode($setup["DescriptemTable"], { projectId: $setup.currentProjectId }, null, 8, ["projectId"])
    ]),
    _: 1
  });
}
const DescriptemPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "DescriptemPage.vue"]]);
export {
  DescriptemPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzY3JpcHRlbVBhZ2UtQnM3WnMwQXouanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2NyaXB0ZW1UYWJsZS52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvRGVzY3JpcHRlbVBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRlc2NyaXB0ZW1zXCI+XG4gICAgPHEtdGFibGVcbiAgICAgIHN0eWxlPVwiaGVpZ2h0OiA4MHZoXCJcbiAgICAgIGRlbnNlXG4gICAgICBmbGF0IGJvcmRlcmVkXG4gICAgICB0aXRsZT1cIkRlc2NyaXB0ZW1zXCJcbiAgICAgIDpyb3dzPVwiZmlsdGVyZWREZXNjcmlwdGVtc1wiXG4gICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIHJvdy1rZXk9XCJpZFwiXG4gICAgICB2LW1vZGVsOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCJcbiAgICAgIDpyb3dzLXBlci1wYWdlLW9wdGlvbnM9XCJbMF1cIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6dG9wLXJpZ2h0PlxuICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgY2xlYXJhYmxlXG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgdGV4dFwiXG4gICAgICAgICAgdi1tb2RlbD1cInRleHRGaWx0ZXJcIiAvPlxuICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgY2xlYXJhYmxlXG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgbW9tZW50XCJcbiAgICAgICAgICB2LW1vZGVsPVwibW9tZW50RmlsdGVyXCIgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpY29uLXJpZ2h0PVwiYXJjaGl2ZVwiXG4gICAgICAgICAgbGFiZWw9XCJFeHBvcnQgdG8gY3N2XCJcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgQGNsaWNrPVwiZXhwb3J0VGFibGVcIlxuICAgICAgICAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3EtdGFibGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyBleHBvcnRGaWxlIH0gZnJvbSAncXVhc2FyJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIGltcG9ydCB7IGV4cG9ydERhdGFBc0NzdiB9IGZyb20gJ3N0b3Jlcy91dGlsJ1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgICAgIHByb2plY3RJZDogc3RyaW5nIHwgbnVsbCxcbiAgfT4oKVxuXG4gIGNvbnN0IHRleHRGaWx0ZXIgPSByZWYoXCJcIilcblxuICBjb25zdCBtb21lbnRGaWx0ZXIgPSByZWYoXCJcIilcblxuICBjb25zdCBkZXNjcmlwdGVtcyA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldERlc2NyaXB0ZW1zQnlQcm9qZWN0KHByb3BzLnByb2plY3RJZCA/PyBcIlwiKSlcblxuICBjb25zdCBmaWx0ZXJlZERlc2NyaXB0ZW1zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IG91dHB1dCA9IGRlc2NyaXB0ZW1zLnZhbHVlXG4gICAgICBjb25zdCB0ZXh0RmlsdGVyVmFsdWUgPSB0ZXh0RmlsdGVyLnZhbHVlXG4gICAgICBjb25zdCBtb21lbnRGaWx0ZXJWYWx1ZSA9IG1vbWVudEZpbHRlci52YWx1ZVxuICAgICAgaWYgKHRleHRGaWx0ZXJWYWx1ZSkge1xuICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5maWx0ZXIoZGVzY3JpcHRlbSA9PiBkZXNjcmlwdGVtLnRleHQuaW5jbHVkZXModGV4dEZpbHRlclZhbHVlKSlcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnRGaWx0ZXJWYWx1ZSkge1xuICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5maWx0ZXIoZGVzY3JpcHRlbSA9PiAoZGVzY3JpcHRlbSBhcyBhbnkpLm1vbWVudD8ubmFtZT8uaW5jbHVkZXMobW9tZW50RmlsdGVyVmFsdWUpIHx8IGZhbHNlKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG91dHB1dFxuICB9KVxuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAgICB7IG5hbWU6ICdpbnRlcnZpZXcnLFxuICAgICAgICBsYWJlbDogJ0ludGVydmlldycsXG4gICAgICAgIGZpZWxkOiAocm93OiBhbnkpID0+IHJvdy5pbnRlcnZpZXcubGFiZWwsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IG5hbWU6ICd0ZXh0JyxcbiAgICAgICAgbGFiZWw6ICdUZXh0JyxcbiAgICAgICAgY2xhc3NlczogJ2NvbHVtbi1zbWFsbCcsXG4gICAgICAgIGhlYWRlckNsYXNzZXM6ICdjb2x1bW4tc21hbGwnLFxuICAgICAgICBhbGlnbjogXCJsZWZ0XCIgYXMgY29uc3QsXG4gICAgICAgIGZpZWxkOiAocm93OiBhbnkpID0+IHJvdy50ZXh0LFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSB9LFxuICAgICAgeyBuYW1lOiAnc3RhcnQnLFxuICAgICAgICBsYWJlbDogJ1N0YXJ0JyxcbiAgICAgICAgZmllbGQ6IChyb3c6IGFueSkgPT4gcm93LnN0YXJ0SW5kZXgsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IG5hbWU6ICdlbmQnLFxuICAgICAgICBsYWJlbDogJ0VuZCcsXG4gICAgICAgIGZpZWxkOiAocm93OiBhbnkpID0+IHJvdy5lbmRJbmRleCxcbiAgICAgICAgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHsgbmFtZTogJ21vbWVudCcsXG4gICAgICAgIGxhYmVsOiAnTW9tZW50JyxcbiAgICAgICAgZmllbGQ6IChyb3c6IGFueSkgPT4gcm93Lm1vbWVudD8ubmFtZSxcbiAgICAgICAgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHsgbmFtZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgbGFiZWw6ICdDYXRlZ29yeScsXG4gICAgICAgIGZpZWxkOiAocm93OiBhbnkpID0+IHJvdy5zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeT8ubmFtZSxcbiAgICAgICAgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHsgbmFtZTogJ2NyZWF0b3InLFxuICAgICAgICBsYWJlbDogJ0NyZWF0b3InLFxuICAgICAgICBmaWVsZDogJ2NyZWF0b3InLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSB9LFxuICAgICAgeyBuYW1lOiAnY29udHJpYnV0b3InLCBsYWJlbDogJ0NvbnRyaWJ1dG9yJywgZmllbGQ6ICdjb250cmlidXRvcicsIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IG5hbWU6ICdjcmVhdGVkJywgbGFiZWw6ICdDcmVhdGVkJywgZmllbGQ6ICdjcmVhdGVkJywgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHsgbmFtZTogJ21vZGlmaWVkJywgbGFiZWw6ICdNb2RpZmllZCcsIGZpZWxkOiAnbW9kaWZpZWQnLCBzb3J0YWJsZTogdHJ1ZSB9LFxuICAgICAgXVxuXG4gIGNvbnN0IHBhZ2luYXRpb24gPSByZWYoe1xuICAgICAgcm93c1BlclBhZ2U6IDBcbiAgfSlcblxuICBmdW5jdGlvbiBleHBvcnRUYWJsZSAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZERlc2NyaXB0ZW1zLnZhbHVlKVxuXG4gICAgICBjb25zdCBjb250ZW50ID0gZXhwb3J0RGF0YUFzQ3N2KGNvbHVtbnMsIGZpbHRlcmVkRGVzY3JpcHRlbXMudmFsdWUpXG4gICAgICBleHBvcnRGaWxlKFxuICAgICAgICAgICd0YWJsZS1leHBvcnQuY3N2JyxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICd0ZXh0L2NzdidcbiAgICAgIClcbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLmNvbHVtbi1sYXJnZSB7XG4gICAgd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG4gIC5jb2x1bW4tbWVkaXVtIHtcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiAgLmNvbHVtbi1zbWFsbCB7XG4gICAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZz5cbiAgICA8RGVzY3JpcHRlbVRhYmxlXG4gICAgICA6cHJvamVjdElkPVwiY3VycmVudFByb2plY3RJZFwiIC8+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSdcbiAgaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuXG4gIGltcG9ydCBEZXNjcmlwdGVtVGFibGUgZnJvbSAnY29tcG9uZW50cy9EZXNjcmlwdGVtVGFibGUudnVlJ1xuXG4gIGRlZmluZU9wdGlvbnMoe1xuICAgICAgbmFtZTogJ0Rlc2NyaXB0ZW1QYWdlJ1xuICB9KVxuXG4gIGNvbnN0IGlzdG9yZSA9IHVzZUludGVyZmFjZVN0b3JlKClcblxuICBjb25zdCB7IGN1cnJlbnRQcm9qZWN0SWQgfSA9IHN0b3JlVG9SZWZzKGlzdG9yZSlcblxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0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
