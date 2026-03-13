import { Q as QPage } from "./QPage-Ce9b1atr.js";
import { Y as defineComponent, Z as useProjectStore, r as ref, p as computed, aJ as exportDataAsCsv, a1 as _export_sfc, aa as createElementBlock, a4 as openBlock, a6 as createVNode, a5 as withCtx, ae as QInput, a8 as QBtn, a3 as createBlock } from "./index-C8moTFq2.js";
import { Q as QTable } from "./QTable-BMhdhF6G.js";
import { e as exportFile } from "./export-file-lpTZqdHO.js";
import "./QList-CyR4BEUD.js";
import "./QSelect-WCK0xNWi.js";
import "./QItemLabel-CLpdUhw9.js";
import "./format-mCdLZtFG.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SpecificSynchronicCategoryTable",
  props: {
    projectId: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useProjectStore();
    const props = __props;
    const textFilter = ref("");
    const momentFilter = ref("");
    const categories = computed(() => {
      const interviews = Object.fromEntries(store.getInterviewsByProject(props.projectId ?? "").map((interview) => [interview.id, interview]));
      return store.getSpecificSynchronicCategoriesByProject(props.projectId ?? "").map((category) => {
        return {
          category,
          interview: interviews[category.interviewId]
        };
      });
    });
    const filteredCategories = computed(() => {
      let output = categories.value;
      const textFilterValue = textFilter.value;
      if (textFilterValue) {
        output = output.filter((row) => row.category?.name.includes(textFilterValue));
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
        name: "name",
        label: "Name",
        classes: "column-small",
        headerClasses: "column-small",
        align: "left",
        field: (row) => row.category.name,
        sortable: true
      },
      {
        name: "creator",
        label: "Creator",
        field: (row) => row.category.creator,
        sortable: true
      },
      {
        name: "contributor",
        label: "Contributor",
        field: (row) => row.category.contributor,
        sortable: true
      },
      {
        name: "created",
        label: "Created",
        field: (row) => row.category.created,
        sortable: true
      },
      {
        name: "modified",
        label: "Modified",
        field: (row) => row.category.modified,
        sortable: true
      }
    ];
    const pagination = ref({
      rowsPerPage: 0
    });
    function exportTable() {
      console.log(filteredCategories.value);
      const content = exportDataAsCsv(columns, filteredCategories.value);
      exportFile(
        "specificsynchroniccategories-export.csv",
        content,
        "text/csv"
      );
    }
    const __returned__ = { store, props, textFilter, momentFilter, categories, filteredCategories, columns, pagination, exportTable };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "specificsynchroniccategories" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(QTable, {
      style: { "height": "80vh" },
      dense: "",
      flat: "",
      bordered: "",
      title: "Specific Synchronic Categories",
      rows: $setup.filteredCategories,
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
const SpecificSynchronicCategoryTable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "SpecificSynchronicCategoryTable.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "SynchronicCategoriesPage"
  },
  __name: "SynchronicCategoriesPage",
  props: {
    projectId: {
      type: String,
      default: ""
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { SpecificSynchronicCategoryTable };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { padding: "" }, {
    default: withCtx(() => [
      createVNode($setup["SpecificSynchronicCategoryTable"], { projectId: $props.projectId }, null, 8, ["projectId"])
    ]),
    _: 1
  });
}
const SynchronicCategoriesPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SynchronicCategoriesPage.vue"]]);
export {
  SynchronicCategoriesPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY2hyb25pY0NhdGVnb3JpZXNQYWdlLTdwemxjM0oyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVRhYmxlLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9TeW5jaHJvbmljQ2F0ZWdvcmllc1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY2NhdGVnb3JpZXNcIj5cbiAgICA8cS10YWJsZVxuICAgICAgc3R5bGU9XCJoZWlnaHQ6IDgwdmhcIlxuICAgICAgZGVuc2VcbiAgICAgIGZsYXQgYm9yZGVyZWRcbiAgICAgIHRpdGxlPVwiU3BlY2lmaWMgU3luY2hyb25pYyBDYXRlZ29yaWVzXCJcbiAgICAgIDpyb3dzPVwiZmlsdGVyZWRDYXRlZ29yaWVzXCJcbiAgICAgIDpjb2x1bW5zPVwiY29sdW1uc1wiXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgcm93LWtleT1cImlkXCJcbiAgICAgIHYtbW9kZWw6cGFnaW5hdGlvbj1cInBhZ2luYXRpb25cIlxuICAgICAgOnJvd3MtcGVyLXBhZ2Utb3B0aW9ucz1cIlswXVwiXG4gICAgPlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDp0b3AtcmlnaHQ+XG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICBsYWJlbD1cIkZpbHRlciB0ZXh0XCJcbiAgICAgICAgICB2LW1vZGVsPVwidGV4dEZpbHRlclwiIC8+XG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICBsYWJlbD1cIkZpbHRlciBtb21lbnRcIlxuICAgICAgICAgIHYtbW9kZWw9XCJtb21lbnRGaWx0ZXJcIiAvPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGljb24tcmlnaHQ9XCJhcmNoaXZlXCJcbiAgICAgICAgICBsYWJlbD1cIkV4cG9ydCB0byBjc3ZcIlxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICBAY2xpY2s9XCJleHBvcnRUYWJsZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS10YWJsZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnXG4gIGltcG9ydCB7IGV4cG9ydEZpbGUgfSBmcm9tICdxdWFzYXInXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG5cbiAgaW1wb3J0IHsgZXhwb3J0RGF0YUFzQ3N2IH0gZnJvbSAnc3RvcmVzL3V0aWwnXG5cbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5IGZyb20gJ3N0b3Jlcy9tb2RlbHMvc3BlY2lmaWNzeW5jaHJvbmljY2F0ZWdvcnknXG4gIGltcG9ydCBJbnRlcnZpZXcgZnJvbSAnc3RvcmVzL21vZGVscy9pbnRlcnZpZXcnXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICAgICAgcHJvamVjdElkOiBzdHJpbmcgfCBudWxsLFxuICB9PigpXG5cbiAgY29uc3QgdGV4dEZpbHRlciA9IHJlZihcIlwiKVxuXG4gIGNvbnN0IG1vbWVudEZpbHRlciA9IHJlZihcIlwiKVxuXG4gIHR5cGUgUm93ID0ge1xuICAgICAgY2F0ZWdvcnk/OiBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeSxcbiAgICAgIGludGVydmlldzogSW50ZXJ2aWV3IHwgdW5kZWZpbmVkXG4gIH1cbiAgY29uc3QgY2F0ZWdvcmllcyA9IGNvbXB1dGVkKCgpOiBSb3dbXSA9PiB7XG4gICAgICBjb25zdCBpbnRlcnZpZXdzID0gT2JqZWN0LmZyb21FbnRyaWVzKHN0b3JlLmdldEludGVydmlld3NCeVByb2plY3QocHJvcHMucHJvamVjdElkID8/IFwiXCIpLm1hcChpbnRlcnZpZXcgPT4gWyBpbnRlcnZpZXcuaWQsIGludGVydmlldyBdKSlcblxuICAgICAgcmV0dXJuIHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3JpZXNCeVByb2plY3QocHJvcHMucHJvamVjdElkID8/IFwiXCIpLm1hcChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgICAgICAgIGludGVydmlldzogaW50ZXJ2aWV3c1tjYXRlZ29yeS5pbnRlcnZpZXdJZF1cbiAgICAgICAgICB9XG4gICAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGZpbHRlcmVkQ2F0ZWdvcmllcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGxldCBvdXRwdXQgPSBjYXRlZ29yaWVzLnZhbHVlXG4gICAgICBjb25zdCB0ZXh0RmlsdGVyVmFsdWUgPSB0ZXh0RmlsdGVyLnZhbHVlXG4gICAgICBpZiAodGV4dEZpbHRlclZhbHVlKSB7XG4gICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LmZpbHRlcihyb3cgPT4gcm93LmNhdGVnb3J5Py5uYW1lLmluY2x1ZGVzKHRleHRGaWx0ZXJWYWx1ZSkpXG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0cHV0XG4gIH0pXG5cbiAgY29uc3QgY29sdW1ucyA9IFtcbiAgICAgIHsgbmFtZTogJ2ludGVydmlldycsXG4gICAgICAgIGxhYmVsOiAnSW50ZXJ2aWV3JyxcbiAgICAgICAgZmllbGQ6IChyb3c6IGFueSkgPT4gcm93LmludGVydmlldy5sYWJlbCxcbiAgICAgICAgc29ydGFibGU6IHRydWUgfSxcbiAgICAgIHsgbmFtZTogJ25hbWUnLFxuICAgICAgICBsYWJlbDogJ05hbWUnLFxuICAgICAgICBjbGFzc2VzOiAnY29sdW1uLXNtYWxsJyxcbiAgICAgICAgaGVhZGVyQ2xhc3NlczogJ2NvbHVtbi1zbWFsbCcsXG4gICAgICAgIGFsaWduOiBcImxlZnRcIiBhcyBjb25zdCxcbiAgICAgICAgZmllbGQ6IChyb3c6IGFueSkgPT4gcm93LmNhdGVnb3J5Lm5hbWUsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IG5hbWU6ICdjcmVhdG9yJyxcbiAgICAgICAgbGFiZWw6ICdDcmVhdG9yJyxcbiAgICAgICAgZmllbGQ6IChyb3c6IGFueSkgPT4gcm93LmNhdGVnb3J5LmNyZWF0b3IsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IG5hbWU6ICdjb250cmlidXRvcicsXG4gICAgICAgIGxhYmVsOiAnQ29udHJpYnV0b3InLFxuICAgICAgICBmaWVsZDogKHJvdzogYW55KSA9PiByb3cuY2F0ZWdvcnkuY29udHJpYnV0b3IsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IG5hbWU6ICdjcmVhdGVkJyxcbiAgICAgICAgbGFiZWw6ICdDcmVhdGVkJyxcbiAgICAgICAgZmllbGQ6IChyb3c6IGFueSkgPT4gcm93LmNhdGVnb3J5LmNyZWF0ZWQsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICB7IG5hbWU6ICdtb2RpZmllZCcsXG4gICAgICAgIGxhYmVsOiAnTW9kaWZpZWQnLFxuICAgICAgICBmaWVsZDogKHJvdzogYW55KSA9PiByb3cuY2F0ZWdvcnkubW9kaWZpZWQsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlIH0sXG4gICAgICBdXG5cbiAgY29uc3QgcGFnaW5hdGlvbiA9IHJlZih7XG4gICAgICByb3dzUGVyUGFnZTogMFxuICB9KVxuXG4gIGZ1bmN0aW9uIGV4cG9ydFRhYmxlICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkQ2F0ZWdvcmllcy52YWx1ZSlcblxuICAgICAgY29uc3QgY29udGVudCA9IGV4cG9ydERhdGFBc0Nzdihjb2x1bW5zLCBmaWx0ZXJlZENhdGVnb3JpZXMudmFsdWUpXG4gICAgICBleHBvcnRGaWxlKFxuICAgICAgICAgICdzcGVjaWZpY3N5bmNocm9uaWNjYXRlZ29yaWVzLWV4cG9ydC5jc3YnLFxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgJ3RleHQvY3N2J1xuICAgICAgKVxufVxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuY29sdW1uLWxhcmdlIHtcbiAgICB3aWR0aDogNDAwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiAgLmNvbHVtbi1tZWRpdW0ge1xuICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuICAuY29sdW1uLXNtYWxsIHtcbiAgICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBwYWRkaW5nPlxuICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVRhYmxlXG4gICAgICA6cHJvamVjdElkPVwicHJvamVjdElkXCIgLz5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlUYWJsZSBmcm9tICdjb21wb25lbnRzL1NwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5VGFibGUudnVlJ1xuXG4gIGRlZmluZU9wdGlvbnMoe1xuICAgICAgbmFtZTogJ1N5bmNocm9uaWNDYXRlZ29yaWVzUGFnZSdcbiAgfSlcblxuICBkZWZpbmVQcm9wcyh7XG4gICAgICBwcm9qZWN0SWQ6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgZGVmYXVsdDogXCJcIlxuICAgICAgfVxuICB9KVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfY3JlYXRlVk5vZGUiLCJfd2l0aEN0eCIsIl9jcmVhdGVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBa0RFLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sUUFBUTtBQUlkLFVBQU0sYUFBYSxJQUFJLEVBQUU7QUFFekIsVUFBTSxlQUFlLElBQUksRUFBRTtBQU0zQixVQUFNLGFBQWEsU0FBUyxNQUFhO0FBQ3JDLFlBQU0sYUFBYSxPQUFPLFlBQVksTUFBTSx1QkFBdUIsTUFBTSxhQUFhLEVBQUUsRUFBRSxJQUFJLGVBQWEsQ0FBRSxVQUFVLElBQUksU0FBVSxDQUFDLENBQUM7QUFFdkksYUFBTyxNQUFNLHlDQUF5QyxNQUFNLGFBQWEsRUFBRSxFQUFFLElBQUksQ0FBQSxhQUFZO0FBQ3pGLGVBQU87QUFBQSxVQUNIO0FBQUEsVUFDQSxXQUFXLFdBQVcsU0FBUyxXQUFXO0FBQUEsUUFBQTtBQUFBLE1BRWxELENBQUM7QUFBQSxJQUNMLENBQUM7QUFFRCxVQUFNLHFCQUFxQixTQUFTLE1BQU07QUFDdEMsVUFBSSxTQUFTLFdBQVc7QUFDeEIsWUFBTSxrQkFBa0IsV0FBVztBQUNuQyxVQUFJLGlCQUFpQjtBQUNqQixpQkFBUyxPQUFPLE9BQU8sQ0FBQSxRQUFPLElBQUksVUFBVSxLQUFLLFNBQVMsZUFBZSxDQUFDO0FBQUEsTUFDOUU7QUFDQSxhQUFPO0FBQUEsSUFDWCxDQUFDO0FBRUQsVUFBTSxVQUFVO0FBQUEsTUFDWjtBQUFBLFFBQUUsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTyxDQUFDLFFBQWEsSUFBSSxVQUFVO0FBQUEsUUFDbkMsVUFBVTtBQUFBLE1BQUE7QUFBQSxNQUNaO0FBQUEsUUFBRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxlQUFlO0FBQUEsUUFDZixPQUFPO0FBQUEsUUFD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
