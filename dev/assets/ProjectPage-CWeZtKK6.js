import { Q as QPage } from "./QPage-Ddo5tm66.js";
import { u as useQuasar } from "./use-quasar-Cx0XMqHd.js";
import { H as defineComponent, I as useProjectStore, J as useInterfaceStore, e as computed, _ as _export_sfc, K as createBlock, L as openBlock, M as withCtx, N as createCommentVNode } from "./index-hdaxc3sz.js";
import { P as ProjectInterviewSelection } from "./ProjectInterviewSelection-BnkbLez-.js";
import "./DropZone-DeZdEccn.js";
import "./NoteIcon-DfhanHDh.js";
import "./format-6-3hWuwF.js";
import "./QTooltip-zBFhC4ET.js";
import "./QSelect-JAEG1flx.js";
import "./QItemLabel-mF9Iu7SI.js";
import "./QExpansionItem-5ZpB3lPc.js";
import "./QForm-DvPXrTCi.js";
import "./ElementMenu-DyNaWeYj.js";
import "./QList-DcTFyeEq.js";
import "./SpecificSynchronicCategoryRepresentation-DsOje5CJ.js";
import "./QSpace-DZCOURN8.js";
import "./QToolbar-CdKuqyts.js";
import "./MomentNameInput-C7cTIoF8.js";
import "./QBtnToggle-CisFTEWk.js";
import "./QBtnGroup-DbPfUCol.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdFBhZ2UtQ1dlWnRLSzYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Qcm9qZWN0UGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wYWdlIGNsYXNzPVwicm93IGZpdFwiPlxuICAgIDxQcm9qZWN0SW50ZXJ2aWV3U2VsZWN0aW9uXG4gICAgICBjbGFzcz1cImNvbC1ncm93XCJcbiAgICAgIHYtaWY9XCJwcm9qZWN0XCJcbiAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0SWRcIj5cbiAgICA8L1Byb2plY3RJbnRlcnZpZXdTZWxlY3Rpb24+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJ1xuICBpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgeyB1c2VJbnRlcmZhY2VTdG9yZSB9IGZyb20gJ3N0b3Jlcy9pbnRlcmZhY2UnXG4gIGltcG9ydCBQcm9qZWN0SW50ZXJ2aWV3U2VsZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvUHJvamVjdEludGVydmlld1NlbGVjdGlvbi52dWUnXG4gIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbiAgZGVmaW5lT3B0aW9ucyh7XG4gICAgICBuYW1lOiAnUHJvamVjdFBhZ2UnXG4gIH0pXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgcHJvamVjdElkOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCAkcSA9IHVzZVF1YXNhcigpXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3QgcHJvamVjdCA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmFjdGl2YXRlUHJvamVjdChwcm9wcy5wcm9qZWN0SWQpKVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX3dpdGhDdHgiLCJfY3JlYXRlQ29tbWVudFZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkUsVUFBTSxRQUFRO0FBT2QsVUFBTSxLQUFLLFVBQUE7QUFFWCxVQUFNLFFBQVEsZ0JBQUE7QUFDZCxVQUFNLFNBQVMsa0JBQUE7QUFFZixVQUFNLFVBQVUsU0FBUyxNQUFNLE1BQU0sZ0JBQWdCLE1BQU0sU0FBUyxDQUFDOzs7Ozs7O3NCQWxDckVBLFlBTVMsT0FBQSxFQUFBLE9BQUEsYUFOSztBQUFBLElBQVMsU0FBQUMsUUFDckIsTUFJNEI7QUFBQSxNQUZwQiwrQkFGUkQsWUFJNEIsT0FBQSwyQkFBQSxHQUFBO0FBQUEsUUFBQSxLQUFBO0FBQUEsUUFIMUIsT0FBTTtBQUFBLFFBRUwsV0FBVyxPQUFBO0FBQUEsTUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFdBQUEsQ0FBQSxLQUFBRSxtQkFBQSxJQUFBLElBQUE7QUFBQTs7Ozs7In0=
