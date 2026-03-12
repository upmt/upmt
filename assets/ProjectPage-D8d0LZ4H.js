import { Q as QPage } from "./QPage-B7iBNboQ.js";
import { u as useQuasar } from "./use-quasar-CErsBj6H.js";
import { Y as defineComponent, Z as useProjectStore, _ as useInterfaceStore, p as computed, a1 as _export_sfc, a3 as createBlock, a4 as openBlock, a5 as withCtx, ab as createCommentVNode } from "./index-DT2JP2rj.js";
import { P as ProjectInterviewSelection } from "./ProjectInterviewSelection-CbIn-kRe.js";
import "./ColorizeIcon-D9Z2NhyB.js";
import "./DragElement-BzCdx0F_.js";
import "./NoteIcon-CFcGh7Em.js";
import "./format-Dbce-Jpy.js";
import "./QTooltip-y5EwGWAn.js";
import "./rtl-DDpZOXNn.js";
import "./QExpansionItem-DyyOnBJ0.js";
import "./QItemLabel-DcM4fill.js";
import "./QList-Be0Kk92v.js";
import "./QForm-DsfOjuca.js";
import "./DropZone-BzN8PY0G.js";
import "./SpecificSynchronicCategoryRepresentation-BZKNs7b3.js";
import "./QSelect-GGYVJLXz.js";
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
    const project = computed(() => {
      if (props.projectId) {
        const p = store.getProject(props.projectId);
        istore.setCurrentProjectId(props.projectId);
        return p;
      } else {
        return null;
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdFBhZ2UtRDhkMExaNEguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Qcm9qZWN0UGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wYWdlIGNsYXNzPVwicm93IGZpdFwiPlxuICAgIDxQcm9qZWN0SW50ZXJ2aWV3U2VsZWN0aW9uXG4gICAgICBjbGFzcz1cImNvbC1ncm93XCJcbiAgICAgIHYtaWY9XCJwcm9qZWN0XCJcbiAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0SWRcIj5cbiAgICA8L1Byb2plY3RJbnRlcnZpZXdTZWxlY3Rpb24+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbiAgICBpbXBvcnQgeyB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICBpbXBvcnQgeyB1c2VQcm9qZWN0U3RvcmUgfSBmcm9tICdzdG9yZXMvcHJvamVjdFN0b3JlJ1xuICBpbXBvcnQgeyB1c2VJbnRlcmZhY2VTdG9yZSB9IGZyb20gJ3N0b3Jlcy9pbnRlcmZhY2UnXG4gIGltcG9ydCBQcm9qZWN0SW50ZXJ2aWV3U2VsZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvUHJvamVjdEludGVydmlld1NlbGVjdGlvbi52dWUnXG4gIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbiAgZGVmaW5lT3B0aW9ucyh7XG4gICAgICBuYW1lOiAnUHJvamVjdFBhZ2UnXG4gIH0pXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgcHJvamVjdElkOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCAkcSA9IHVzZVF1YXNhcigpXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuICBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG5cbiAgY29uc3QgcHJvamVjdCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9qZWN0SWQpIHtcbiAgICAgICAgICBjb25zdCBwID0gc3RvcmUuZ2V0UHJvamVjdChwcm9wcy5wcm9qZWN0SWQpXG4gICAgICAgICAgaXN0b3JlLnNldEN1cnJlbnRQcm9qZWN0SWQocHJvcHMucHJvamVjdElkKVxuICAgICAgICAgIHJldHVybiBwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gIH0pXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlQmxvY2siLCJfd2l0aEN0eCIsIl9jcmVhdGVDb21tZW50Vk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCRSxVQUFNLFFBQVE7QUFPZCxVQUFNLEtBQUssVUFBQTtBQUVYLFVBQU0sUUFBUSxnQkFBQTtBQUNkLFVBQU0sU0FBUyxrQkFBQTtBQUVmLFVBQU0sVUFBVSxTQUFTLE1BQU07QUFDM0IsVUFBSSxNQUFNLFdBQVc7QUFDakIsY0FBTSxJQUFJLE1BQU0sV0FBVyxNQUFNLFNBQVM7QUFDMUMsZUFBTyxvQkFBb0IsTUFBTSxTQUFTO0FBQzFDLGVBQU87QUFBQSxNQUNYLE9BQU87QUFDSCxlQUFPO0FBQUEsTUFDWDtBQUFBLElBQ0osQ0FBQzs7Ozs7OztzQkF6Q0RBLFlBTVMsT0FBQSxFQUFBLE9BQUEsYUFOSztBQUFBLElBQVMsU0FBQUMsUUFDckIsTUFJNEI7QUFBQSxNQUZwQiwrQkFGUkQsWUFJNEIsT0FBQSwyQkFBQSxHQUFBO0FBQUEsUUFBQSxLQUFBO0FBQUEsUUFIMUIsT0FBTTtBQUFBLFFBRUwsV0FBVyxPQUFBO0FBQUEsTUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFdBQUEsQ0FBQSxLQUFBRSxtQkFBQSxJQUFBLElBQUE7QUFBQTs7Ozs7In0=
