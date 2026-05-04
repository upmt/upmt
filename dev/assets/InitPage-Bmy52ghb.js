import { Q as QPage } from "./QPage-Bf8oARIl.js";
import { u as useQuasar } from "./use-quasar-CgIzz1mJ.js";
import { H as defineComponent, I as useProjectStore, r as ref, w as watch, O as onMounted, a as axios, _ as _export_sfc, K as createBlock, L as openBlock, M as withCtx, P as createElementBlock } from "./index-DF_kf-vE.js";
import { P as ProjectInterviewSelection } from "./ProjectInterviewSelection-DgbFj2oO.js";
import "./DropZone-CFOlUO_9.js";
import "./QSlider-DTzq2Pr_.js";
import "./format-DDZ-xwpi.js";
import "./QTooltip-D_9ZF6WP.js";
import "./QSelect-C0RTp5oU.js";
import "./QItemLabel-DIRuQuno.js";
import "./QExpansionItem-WmjQK9tZ.js";
import "./QForm-N_XV4wA_.js";
import "./ElementMenu-CkrqPzlh.js";
import "./QList-DaiQNQiC.js";
import "./SpecificSynchronicCategoryRepresentation-C1R0JJw_.js";
import "./QBadge-DMI6OGEY.js";
import "./QSpace-D4unF9jo.js";
import "./QToolbar-Btg_9e8W.js";
import "./MomentNameInput-BUPCom-d.js";
import "./QBtnToggle-ChnHPXeo.js";
import "./QBtnGroup-B04YSXC_.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5pdFBhZ2UtQm15NTJnaGIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Jbml0UGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wYWdlIGNsYXNzPVwicm93IGZpdFwiPlxuICAgIDxQcm9qZWN0SW50ZXJ2aWV3U2VsZWN0aW9uXG4gICAgICBjbGFzcz1cImNvbC1ncm93XCJcbiAgICAgIHYtaWY9XCJwcm9qZWN0XCJcbiAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0LmlkXCI+XG4gICAgPC9Qcm9qZWN0SW50ZXJ2aWV3U2VsZWN0aW9uPlxuICAgIDxwIHYtZWxzZT5cbiAgICAgIE5vIHByb2plY3QgbG9hZGVkLlxuICAgIDwvcD5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcidcbiAgaW1wb3J0IHsgb25Nb3VudGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgUHJvamVjdCBmcm9tICdzdG9yZXMvbW9kZWxzL3Byb2plY3QnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCBQcm9qZWN0SW50ZXJ2aWV3U2VsZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvUHJvamVjdEludGVydmlld1NlbGVjdGlvbi52dWUnXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuICBkZWZpbmVPcHRpb25zKHtcbiAgICAgIG5hbWU6ICdJbml0UGFnZSdcbiAgfSlcbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBzb3VyY2U6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0ICRxID0gdXNlUXVhc2FyKClcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvamVjdCA9IHJlZjxQcm9qZWN0fG51bGw+KG51bGwpXG5cbiAgZnVuY3Rpb24gbG9hZFNhbXBsZSAoZmlsZW5hbWUgPSAnLi9leGFtcGxlcy9leGFtcGxlLnVwbXQnKSB7XG4gICAgICAkcS5sb2FkaW5nLnNob3coKVxuICAgICAgYXhpb3MuZ2V0KGZpbGVuYW1lKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHAgPSB1c2VQcm9qZWN0U3RvcmUoKS5pbXBvcnRQcm9qZWN0KHJlc3BvbnNlLmRhdGEsIGZpbGVuYW1lKVxuICAgICAgICAgIHByb2plY3QudmFsdWUgPSBwXG4gICAgICAgICAgJHEubG9hZGluZy5oaWRlKClcbiAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgY29uc29sZS5sb2coYEVycm9yICR7ZX1gKVxuICAgICAgfSlcbiAgfVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLnNvdXJjZSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGxvYWRTYW1wbGUocHJvcHMuc291cmNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7IG9uY2U6IHRydWUgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgaWYgKCFwcm9qZWN0LnZhbHVlKSB7XG4gICAgICAgICAgbG9hZFNhbXBsZSgpO1xuICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5zdG9yZSA9IHN0b3JlO1xuICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5xdWFzYXIgPSAkcTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlYnVnZ2luZyBzdG9yZVwiLCBzdG9yZSwgXCJxdWFzYXJcIiwgJHEpO1xuICAgICAgfVxuICB9KVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX3dpdGhDdHgiLCJfb3BlbkJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCRSxVQUFNLFFBQVE7QUFPZCxVQUFNLEtBQUssVUFBQTtBQUVYLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sVUFBVSxJQUFrQixJQUFJO0FBRXRDLGFBQVMsV0FBWSxXQUFXLDJCQUEyQjtBQUN2RCxTQUFHLFFBQVEsS0FBQTtBQUNYLFlBQU0sSUFBSSxRQUFRLEVBQUUsS0FBSyxDQUFDLGFBQWE7QUFDbkMsY0FBTSxJQUFJLGdCQUFBLEVBQWtCLGNBQWMsU0FBUyxNQUFNLFFBQVE7QUFDakUsZ0JBQVEsUUFBUTtBQUNoQixXQUFHLFFBQVEsS0FBQTtBQUFBLE1BQ2YsQ0FBQyxFQUFFLE1BQU0sQ0FBQSxNQUFLO0FBQ1gsZ0JBQVEsSUFBSSxTQUFTLENBQUMsRUFBRTtBQUFBLE1BQzNCLENBQUM7QUFBQSxJQUNMO0FBRUE7QUFBQSxNQUFNLE1BQU0sTUFBTTtBQUFBLE1BQ1osTUFBTTtBQUNGLFlBQUksTUFBTSxRQUFRO0FBQ2QscUJBQVcsTUFBTSxNQUFNO0FBQUEsUUFDM0I7QUFBQSxNQUNKO0FBQUEsTUFDQSxFQUFFLE1BQU0sS0FBQTtBQUFBLElBQUs7QUFFbkIsY0FBVSxNQUFNO0FBQ1osVUFBSSxDQUFDLFFBQVEsT0FBTztBQUNoQixtQkFBQTtBQUNDLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDekIsZ0JBQVEsSUFBSSxtQkFBbUIsT0FBTyxVQUFVLEVBQUU7QUFBQSxNQUN0RDtBQUFBLElBQ0osQ0FBQzs7Ozs7Ozs7c0JBL0REQSxZQVNTLE9BQUEsRUFBQSxPQUFBLGFBVEs7QUFBQSxJQUFTLFNBQUFDLFFBQ3JCLE1BSTRCO0FBQUEsTUFGcEIsK0JBRlJELFlBSTRCLE9BQUEsMkJBQUEsR0FBQTtBQUFBLFFBQUEsS0FBQTtBQUFBLFFBSDFCLE9BQU07QUFBQSxRQUVMLFdBQVcsT0FBQSxRQUFRO0FBQUEsTUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFdBQUEsQ0FBQSxNQUFBRSxVQUFBLEdBRXRCQyxtQkFFSSxpQkFGTSxzQkFFVjtBQUFBLElBQUEsQ0FBQTtBQUFBOzs7OyJ9
