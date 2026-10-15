import { Q as QPage } from "./QPage-Dvb0knAO.js";
import { u as useQuasar } from "./use-quasar-iIRCDX9e.js";
import { H as defineComponent, I as useProjectStore, J as useInterfaceStore, b as computed, _ as _export_sfc, K as createBlock, L as openBlock, M as withCtx, N as createCommentVNode } from "./index-DiKymsRm.js";
import { P as ProjectInterviewSelection } from "./ProjectInterviewSelection-DNHGNRWG.js";
import "./DropZone-Bk9Riejp.js";
import "./QSlider-YsL2BiUw.js";
import "./format-BV-GOeKr.js";
import "./QTooltip-dJ9FZr63.js";
import "./QSelect-DtMrAgnD.js";
import "./QItemLabel-WuWNsHIr.js";
import "./QExpansionItem-CJ0pCSqh.js";
import "./QForm-CIYgG2Y3.js";
import "./ElementMenu-BUVcPYQO.js";
import "./QList-BnVe3frY.js";
import "./SpecificSynchronicCategoryRepresentation-GXzIiaM1.js";
import "./QBadge-CxxPgVvg.js";
import "./QSpace-vJ6Mt5uh.js";
import "./QToolbar-7gHL07eP.js";
import "./MomentNameInput-D0T21-5z.js";
import "./QBtnToggle-DXqgAIUo.js";
import "./QBtnGroup-C6TAFF9z.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "ProjectPage"
  },
  __name: "ProjectPage",
  props: {
    projectId: {
      type: String,
      default: null
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const $q = useQuasar();
    const store = useProjectStore();
    const istore = useInterfaceStore();
    const project = computed(() => store.activateProject(props.projectId));
    const __returned__ = { props, $q, store, istore, project, ProjectInterviewSelection };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QPage, { class: "row fit" }, {
    default: withCtx(() => [
      $setup.project ? (openBlock(), createBlock($setup["ProjectInterviewSelection"], {
        key: 0,
        class: "col-grow",
        projectId: $props.projectId
      }, null, 8, ["projectId"])) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
const ProjectPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ProjectPage.vue"]]);
export {
  ProjectPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdFBhZ2UtQ0VHVklJV00uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Qcm9qZWN0UGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wYWdlIGNsYXNzPVwicm93IGZpdFwiPlxuICAgIDxQcm9qZWN0SW50ZXJ2aWV3U2VsZWN0aW9uXG4gICAgICBjbGFzcz1cImNvbC1ncm93XCJcbiAgICAgIHYtaWY9XCJwcm9qZWN0XCJcbiAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0SWRcIj5cbiAgICA8L1Byb2plY3RJbnRlcnZpZXdTZWxlY3Rpb24+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJ1xuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgeyB1c2VJbnRlcmZhY2VTdG9yZSB9IGZyb20gJ3N0b3Jlcy9pbnRlcmZhY2UnXG4gIGltcG9ydCBQcm9qZWN0SW50ZXJ2aWV3U2VsZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvUHJvamVjdEludGVydmlld1NlbGVjdGlvbi52dWUnXG4gIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbiAgZGVmaW5lT3B0aW9ucyh7XG4gICAgICBuYW1lOiAnUHJvamVjdFBhZ2UnXG4gIH0pXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgcHJvamVjdElkOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCAkcSA9IHVzZVF1YXNhcigpXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3QgcHJvamVjdCA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmFjdGl2YXRlUHJvamVjdChwcm9wcy5wcm9qZWN0SWQpKVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX3dpdGhDdHgiLCJfY3JlYXRlQ29tbWVudFZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJFLFVBQU0sUUFBUTtBQU9kLFVBQU0sS0FBSyxVQUFBO0FBRVgsVUFBTSxRQUFRLGdCQUFBO0FBQ2QsVUFBTSxTQUFTLGtCQUFBO0FBRWYsVUFBTSxVQUFVLFNBQVMsTUFBTSxNQUFNLGdCQUFnQixNQUFNLFNBQVMsQ0FBQzs7Ozs7OztzQkFsQ3JFQSxZQU1TLE9BQUEsRUFBQSxPQUFBLGFBTks7QUFBQSxJQUFTLFNBQUFDLFFBQ3JCLE1BSTRCO0FBQUEsTUFGcEIsK0JBRlJELFlBSTRCLE9BQUEsMkJBQUEsR0FBQTtBQUFBLFFBQUEsS0FBQTtBQUFBLFFBSDFCLE9BQU07QUFBQSxRQUVMLFdBQVcsT0FBQTtBQUFBLE1BQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxXQUFBLENBQUEsS0FBQUUsbUJBQUEsSUFBQSxJQUFBO0FBQUE7Ozs7OyJ9
