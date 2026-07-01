import { Q as QPage } from "./QPage-CqBdiN4V.js";
import { H as defineComponent, I as useProjectStore, r as ref, b as computed, bd as exportDataAsCsv, _ as _export_sfc, P as createElementBlock, L as openBlock, R as createVNode, M as withCtx, be as QInput, Q as QBtn, K as createBlock, N as createCommentVNode } from "./index-CqaMh-vX.js";
import { Q as QTable } from "./QTable-mcotZ8gH.js";
import { e as exportFile } from "./export-file-lpTZqdHO.js";
import "./QList-e1avtNzZ.js";
import "./QSelect-cRxdanRt.js";
import "./QItemLabel-B3o42MsB.js";
import "./format-IeLzMNUZ.js";
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
    const genericGraphs = computed(() => store.getGenericSynchronicGraphs(props.projectId));
    const descriptems = computed(() => {
      return store.getDescriptemsByProject(props.projectId ?? "");
    });
    function categoryName(ssc) {
      if (ssc) {
        const path = genericGraphs.value.specificSynchronicCategoryPath(ssc);
        return path.map((ssc2) => ssc2.name).join(" / ");
      } else {
        return "";
      }
    }
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
        field: (row) => categoryName(row.specificsynchroniccategory),
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
    const __returned__ = { store, props, textFilter, momentFilter, genericGraphs, descriptems, categoryName, filteredDescriptems, columns, pagination, exportTable };
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
  props: {
    projectId: {
      type: String,
      default: null
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const store = useProjectStore();
    const project = computed(() => store.activateProject(props.projectId));
    const __returned__ = { props, store, project, DescriptemTable };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { padding: "" }, {
    default: withCtx(() => [
      $setup.project ? (openBlock(), createBlock($setup["DescriptemTable"], {
        key: 0,
        projectId: $props.projectId
      }, null, 8, ["projectId"])) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
const DescriptemPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "DescriptemPage.vue"]]);
export {
  DescriptemPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzY3JpcHRlbVBhZ2UtRFBSRGYxSkUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2NyaXB0ZW1UYWJsZS52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvRGVzY3JpcHRlbVBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRlc2NyaXB0ZW1zXCI+XG4gICAgPHEtdGFibGVcbiAgICAgIHN0eWxlPVwiaGVpZ2h0OiA4MHZoXCJcbiAgICAgIGRlbnNlXG4gICAgICBmbGF0IGJvcmRlcmVkXG4gICAgICB0aXRsZT1cIkRlc2NyaXB0ZW1zXCJcbiAgICAgIDpyb3dzPVwiZmlsdGVyZWREZXNjcmlwdGVtc1wiXG4gICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIHJvdy1rZXk9XCJpZFwiXG4gICAgICB2LW1vZGVsOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCJcbiAgICAgIDpyb3dzLXBlci1wYWdlLW9wdGlvbnM9XCJbMF1cIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6dG9wLXJpZ2h0PlxuICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgY2xlYXJhYmxlXG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgdGV4dFwiXG4gICAgICAgICAgdi1tb2RlbD1cInRleHRGaWx0ZXJcIiAvPlxuICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgY2xlYXJhYmxlXG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgbW9tZW50XCJcbiAgICAgICAgICB2LW1vZGVsPVwibW9tZW50RmlsdGVyXCIgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpY29uLXJpZ2h0PVwiYXJjaGl2ZVwiXG4gICAgICAgICAgbGFiZWw9XCJFeHBvcnQgdG8gY3N2XCJcbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgQGNsaWNrPVwiZXhwb3J0VGFibGVcIlxuICAgICAgICAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3EtdGFibGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyBleHBvcnRGaWxlIH0gZnJvbSAncXVhc2FyJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnkgZnJvbSAnc3RvcmVzL21vZGVscy9zcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yeSdcblxuICBpbXBvcnQgeyBleHBvcnREYXRhQXNDc3YgfSBmcm9tICdzdG9yZXMvdXRpbCdcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZ1xuICB9PigpXG5cbiAgY29uc3QgdGV4dEZpbHRlciA9IHJlZihcIlwiKVxuXG4gIGNvbnN0IG1vbWVudEZpbHRlciA9IHJlZihcIlwiKVxuXG4gIGNvbnN0IGdlbmVyaWNHcmFwaHMgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5nZXRHZW5lcmljU3luY2hyb25pY0dyYXBocyhwcm9wcy5wcm9qZWN0SWQpKVxuXG4gIGNvbnN0IGRlc2NyaXB0ZW1zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHN0b3JlLmdldERlc2NyaXB0ZW1zQnlQcm9qZWN0KHByb3BzLnByb2plY3RJZCA/PyBcIlwiKVxuICB9KVxuXG4gIGZ1bmN0aW9uIGNhdGVnb3J5TmFtZShzc2M6IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5IHwgbnVsbCkge1xuICAgICAgaWYgKHNzYykge1xuICAgICAgICAgIGNvbnN0IHBhdGggPSBnZW5lcmljR3JhcGhzLnZhbHVlLnNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UGF0aChzc2MpXG4gICAgICAgICAgcmV0dXJuIHBhdGgubWFwKHNzYyA9PiBzc2MubmFtZSkuam9pbihcIiAvIFwiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgfVxuICB9XG5cbiAgY29uc3QgZmlsdGVyZWREZXNjcmlwdGVtcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGxldCBvdXRwdXQgPSBkZXNjcmlwdGVtcy52YWx1ZVxuICAgICAgY29uc3QgdGV4dEZpbHRlclZhbHVlID0gdGV4dEZpbHRlci52YWx1ZVxuICAgICAgY29uc3QgbW9tZW50RmlsdGVyVmFsdWUgPSBtb21lbnRGaWx0ZXIudmFsdWVcbiAgICAgIGlmICh0ZXh0RmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQuZmlsdGVyKGRlc2NyaXB0ZW0gPT4gZGVzY3JpcHRlbS50ZXh0LmluY2x1ZGVzKHRleHRGaWx0ZXJWYWx1ZSkpXG4gICAgICB9XG4gICAgICBpZiAobW9tZW50RmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQuZmlsdGVyKGRlc2NyaXB0ZW0gPT4gKGRlc2NyaXB0ZW0gYXMgYW55KS5tb21lbnQ/Lm5hbWU/LmluY2x1ZGVzKG1vbWVudEZpbHRlclZhbHVlKSB8fCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXRcbiAgfSlcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgICAgeyBuYW1lOiAnaW50ZXJ2aWV3JyxcbiAgICAgICAgbGFiZWw6ICdJbnRlcnZpZXcnLFxuICAgICAgICBmaWVsZDogKHJvdzogYW55KSA9PiByb3cuaW50ZXJ2aWV3LmxhYmVsLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSB9LFxuICAgICAgeyBuYW1lOiAndGV4dCcsXG4gICAgICAgIGxhYmVsOiAnVGV4dCcsXG4gICAgICAgIGNsYXNzZXM6ICdjb2x1bW4tc21hbGwnLFxuICAgICAgICBoZWFkZXJDbGFzc2VzOiAnY29sdW1uLXNtYWxsJyxcbiAgICAgICAgYWxpZ246IFwibGVmdFwiIGFzIGNvbnN0LFxuICAgICAgICBmaWVsZDogKHJvdzogYW55KSA9PiByb3cudGV4dCxcbiAgICAgICAgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHsgbmFtZTogJ3N0YXJ0JyxcbiAgICAgICAgbGFiZWw6ICdTdGFydCcsXG4gICAgICAgIGZpZWxkOiAocm93OiBhbnkpID0+IHJvdy5zdGFydEluZGV4LFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSB9LFxuICAgICAgeyBuYW1lOiAnZW5kJyxcbiAgICAgICAgbGFiZWw6ICdFbmQnLFxuICAgICAgICBmaWVsZDogKHJvdzogYW55KSA9PiByb3cuZW5kSW5kZXgsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IG5hbWU6ICdtb21lbnQnLFxuICAgICAgICBsYWJlbDogJ01vbWVudCcsXG4gICAgICAgIGZpZWxkOiAocm93OiBhbnkpID0+IHJvdy5tb21lbnQ/Lm5hbWUsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IG5hbWU6ICdjYXRlZ29yeScsXG4gICAgICAgIGxhYmVsOiAnQ2F0ZWdvcnknLFxuICAgICAgICBmaWVsZDogKHJvdzogYW55KSA9PiBjYXRlZ29yeU5hbWUocm93LnNwZWNpZmljc3luY2hyb25pY2NhdGVnb3J5KSxcbiAgICAgICAgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHsgbmFtZTogJ2NyZWF0b3InLFxuICAgICAgICBsYWJlbDogJ0NyZWF0b3InLFxuICAgICAgICBmaWVsZDogJ2NyZWF0b3InLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSB9LFxuICAgICAgeyBuYW1lOiAnY29udHJpYnV0b3InLCBsYWJlbDogJ0NvbnRyaWJ1dG9yJywgZmllbGQ6ICdjb250cmlidXRvcicsIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IG5hbWU6ICdjcmVhdGVkJywgbGFiZWw6ICdDcmVhdGVkJywgZmllbGQ6ICdjcmVhdGVkJywgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHsgbmFtZTogJ21vZGlmaWVkJywgbGFiZWw6ICdNb2RpZmllZCcsIGZpZWxkOiAnbW9kaWZpZWQnLCBzb3J0YWJsZTogdHJ1ZSB9LFxuICAgICAgXVxuXG4gIGNvbnN0IHBhZ2luYXRpb24gPSByZWYoe1xuICAgICAgcm93c1BlclBhZ2U6IDBcbiAgfSlcblxuICBmdW5jdGlvbiBleHBvcnRUYWJsZSAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZERlc2NyaXB0ZW1zLnZhbHVlKVxuXG4gICAgICBjb25zdCBjb250ZW50ID0gZXhwb3J0RGF0YUFzQ3N2KGNvbHVtbnMsIGZpbHRlcmVkRGVzY3JpcHRlbXMudmFsdWUpXG4gICAgICBleHBvcnRGaWxlKFxuICAgICAgICAgICd0YWJsZS1leHBvcnQuY3N2JyxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICd0ZXh0L2NzdidcbiAgICAgIClcbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLmNvbHVtbi1sYXJnZSB7XG4gICAgd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG4gIC5jb2x1bW4tbWVkaXVtIHtcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiAgLmNvbHVtbi1zbWFsbCB7XG4gICAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBwYWRkaW5nPlxuICAgIDxEZXNjcmlwdGVtVGFibGVcbiAgICAgIHYtaWY9XCJwcm9qZWN0XCJcbiAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0SWRcIiAvPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuXG4gIGltcG9ydCBEZXNjcmlwdGVtVGFibGUgZnJvbSAnY29tcG9uZW50cy9EZXNjcmlwdGVtVGFibGUudnVlJ1xuXG4gIGRlZmluZU9wdGlvbnMoe1xuICAgICAgbmFtZTogJ0Rlc2NyaXB0ZW1QYWdlJ1xuICB9KVxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIHByb2plY3RJZDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuICBjb25zdCBwcm9qZWN0ID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuYWN0aXZhdGVQcm9qZWN0KHByb3BzLnByb2plY3RJZCkpXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJzc2MiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZ0RFLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sUUFBUTtBQUlkLFVBQU0sYUFBYSxJQUFJLEVBQUU7QUFFekIsVUFBTSxlQUFlLElBQUksRUFBRTtBQUUzQixVQUFNLGdCQUFnQixTQUFTLE1BQU0sTUFBTSwyQkFBMkIsTUFBTSxTQUFTLENBQUM7QUFFdEYsVUFBTSxjQUFjLFNBQVMsTUFBTTtBQUMvQixhQUFPLE1BQU0sd0JBQXdCLE1BQU0sYUFB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
