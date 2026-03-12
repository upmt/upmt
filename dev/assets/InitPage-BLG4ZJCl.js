import { Q as QPage } from "./QPage-D1xjXvn_.js";
import { u as useQuasar } from "./use-quasar-lwKvH9F9.js";
import { Y as defineComponent, Z as useProjectStore, r as ref, q as watch, B as onMounted, a as axios, a1 as _export_sfc, a3 as createBlock, a4 as openBlock, a5 as withCtx, aa as createElementBlock } from "./index-15PRagIZ.js";
import { P as ProjectInterviewSelection } from "./ProjectInterviewSelection-cSWZ2ShH.js";
import "./ColorizeIcon-D6Ne3otQ.js";
import "./QBtnGroup-DPMhcB2j.js";
import "./NoteIcon-yfhmMfBH.js";
import "./format-Cbfz1lr-.js";
import "./QTooltip-eQRUlFyY.js";
import "./rtl-DDpZOXNn.js";
import "./QExpansionItem-Kgzd8JCK.js";
import "./QItemLabel-BQFqFZV7.js";
import "./QList-BR6bKSdf.js";
import "./QForm-BUUfutql.js";
import "./ElementMenu-qc9OVNPU.js";
import "./SpecificSynchronicCategoryRepresentation-D-pENkkQ.js";
import "./QSelect-CvMUhI42.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "InitPage"
  },
  __name: "InitPage",
  props: {
    source: {
      type: String,
      default: null
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const $q = useQuasar();
    const store = useProjectStore();
    const project = ref(null);
    function loadSample(filename = "./examples/example.upmt") {
      $q.loading.show();
      axios.get(filename).then((response) => {
        const p = useProjectStore().importProject(response.data, filename);
        project.value = p;
        $q.loading.hide();
      }).catch((e) => {
        console.log(`Error ${e}`);
      });
    }
    watch(
      () => props.source,
      () => {
        if (props.source) {
          loadSample(props.source);
        }
      },
      { once: true }
    );
    onMounted(() => {
      if (!project.value) {
        loadSample();
        window.store = store;
        window.quasar = $q;
        console.log("Debugging store", store, "quasar", $q);
      }
    });
    const __returned__ = { props, $q, store, project, loadSample, ProjectInterviewSelection };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { class: "row fit" }, {
    default: withCtx(() => [
      $setup.project ? (openBlock(), createBlock($setup["ProjectInterviewSelection"], {
        key: 0,
        class: "col-grow",
        projectId: $setup.project.id
      }, null, 8, ["projectId"])) : (openBlock(), createElementBlock("p", _hoisted_1, " No project loaded. "))
    ]),
    _: 1
  });
}
const InitPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "InitPage.vue"]]);
export {
  InitPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5pdFBhZ2UtQkxHNFpKQ2wuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Jbml0UGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wYWdlIGNsYXNzPVwicm93IGZpdFwiPlxuICAgIDxQcm9qZWN0SW50ZXJ2aWV3U2VsZWN0aW9uXG4gICAgICBjbGFzcz1cImNvbC1ncm93XCJcbiAgICAgIHYtaWY9XCJwcm9qZWN0XCJcbiAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0LmlkXCI+XG4gICAgPC9Qcm9qZWN0SW50ZXJ2aWV3U2VsZWN0aW9uPlxuICAgIDxwIHYtZWxzZT5cbiAgICAgIE5vIHByb2plY3QgbG9hZGVkLlxuICAgIDwvcD5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcidcbiAgaW1wb3J0IHsgb25Nb3VudGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgUHJvamVjdCBmcm9tICdzdG9yZXMvbW9kZWxzL3Byb2plY3QnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCBQcm9qZWN0SW50ZXJ2aWV3U2VsZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvUHJvamVjdEludGVydmlld1NlbGVjdGlvbi52dWUnXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuICBkZWZpbmVPcHRpb25zKHtcbiAgICAgIG5hbWU6ICdJbml0UGFnZSdcbiAgfSlcbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0ICRxID0gdXNlUXVhc2FyKClcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvamVjdCA9IHJlZjxQcm9qZWN0fG51bGw+KG51bGwpXG5cbiAgZnVuY3Rpb24gbG9hZFNhbXBsZSAoZmlsZW5hbWUgPSAnLi9leGFtcGxlcy9leGFtcGxlLnVwbXQnKSB7XG4gICAgICAkcS5sb2FkaW5nLnNob3coKVxuICAgICAgYXhpb3MuZ2V0KGZpbGVuYW1lKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHAgPSB1c2VQcm9qZWN0U3RvcmUoKS5pbXBvcnRQcm9qZWN0KHJlc3BvbnNlLmRhdGEsIGZpbGVuYW1lKVxuICAgICAgICAgIHByb2plY3QudmFsdWUgPSBwXG4gICAgICAgICAgJHEubG9hZGluZy5oaWRlKClcbiAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgY29uc29sZS5sb2coYEVycm9yICR7ZX1gKVxuICAgICAgfSlcbiAgfVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLnNvdXJjZSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGxvYWRTYW1wbGUocHJvcHMuc291cmNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7IG9uY2U6IHRydWUgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgaWYgKCFwcm9qZWN0LnZhbHVlKSB7XG4gICAgICAgICAgbG9hZFNhbXBsZSgpO1xuICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5zdG9yZSA9IHN0b3JlO1xuICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5xdWFzYXIgPSAkcTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlYnVnZ2luZyBzdG9yZVwiLCBzdG9yZSwgXCJxdWFzYXJcIiwgJHEpO1xuICAgICAgfVxuICB9KVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX3dpdGhDdHgiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJFLFVBQU0sUUFBUTtBQU9kLFVBQU0sS0FBSyxVQUFBO0FBRVgsVUFBTSxRQUFRLGdCQUFBO0FBRWQsVUFBTSxVQUFVLElBQWtCLElBQUk7QUFFdEMsYUFBUyxXQUFZLFdBQVcsMkJBQTJCO0FBQ3ZELFNBQUcsUUFBUSxLQUFBO0FBQ1gsWUFBTSxJQUFJLFFBQVEsRUFBRSxLQUFLLENBQUMsYUFBYTtBQUNuQyxjQUFNLElBQUksZ0JBQUEsRUFBa0IsY0FBYyxTQUFTLE1BQU0sUUFBUTtBQUNqRSxnQkFBUSxRQUFRO0FBQ2hCLFdBQUcsUUFBUSxLQUFBO0FBQUEsTUFDZixDQUFDLEVBQUUsTUFBTSxDQUFBLE1BQUs7QUFDWCxnQkFBUSxJQUFJLFNBQVMsQ0FBQyxFQUFFO0FBQUEsTUFDM0IsQ0FBQztBQUFBLElBQ0w7QUFFQTtBQUFBLE1BQU0sTUFBTSxNQUFNO0FBQUEsTUFDWixNQUFNO0FBQ0YsWUFBSSxNQUFNLFFBQVE7QUFDZCxxQkFBVyxNQUFNLE1BQU07QUFBQSxRQUMzQjtBQUFBLE1BQ0o7QUFBQSxNQUNBLEVBQUUsTUFBTSxLQUFBO0FBQUEsSUFBSztBQUVuQixjQUFVLE1BQU07QUFDWixVQUFJLENBQUMsUUFBUSxPQUFPO0FBQ2hCLG1CQUFBO0FBQ0MsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsU0FBUztBQUN6QixnQkFBUSxJQUFJLG1CQUFtQixPQUFPLFVBQVUsRUFBRTtBQUFBLE1BQ3REO0FBQUEsSUFDSixDQUFDOzs7Ozs7OztzQkEvRERBLFlBU1MsT0FBQSxFQUFBLE9BQUEsYUFUSztBQUFBLElBQVMsU0FBQUMsUUFDckIsTUFJNEI7QUFBQSxNQUZwQiwrQkFGUkQsWUFJNEIsT0FBQSwyQkFBQSxHQUFBO0FBQUEsUUFBQSxLQUFBO0FBQUEsUUFIMUIsT0FBTTtBQUFBLFFBRUwsV0FBVyxPQUFBLFFBQVE7QUFBQSxNQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsV0FBQSxDQUFBLE1BQUFFLFVBQUEsR0FFdEJDLG1CQUVJLGlCQUZNLHNCQUVWO0FBQUEsSUFBQSxDQUFBO0FBQUE7Ozs7In0=
