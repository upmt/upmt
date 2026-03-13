import { Q as QPage } from "./QPage-Ce9b1atr.js";
import { Y as defineComponent, aI as Project, r as ref, a1 as _export_sfc, aa as createElementBlock, ab as createCommentVNode, a4 as openBlock, a6 as createVNode, a7 as createBaseVNode, a5 as withCtx, ac as toDisplayString, ag as Fragment, ah as renderList, ad as normalizeClass, a9 as createTextVNode, a8 as QBtn, a3 as createBlock, Z as useProjectStore, p as computed } from "./index-C8moTFq2.js";
import { Q as QBtnToggle, a as QSlider } from "./ColorizeIcon-CnOnCqoT.js";
import { a as QSpace } from "./QBtnGroup-gg1VC8Dz.js";
import { a as QToolbar } from "./NoteIcon-Bdqpr3qd.js";
import { M as MomentShortRepresentation } from "./MomentShortRepresentation-B8idcult.js";
import "./format-mCdLZtFG.js";
import "./QSelect-WCK0xNWi.js";
import "./QItemLabel-CLpdUhw9.js";
import "./QTooltip-H1AkgSso.js";
import "./MomentNameInput-B5g6roj8.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InterviewsSpreadsheet",
  props: {
    project: {
      type: Project,
      default: null
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const editViewMode = ref("horizontal");
    const maximumDepth = ref(1);
    const __returned__ = { editViewMode, maximumDepth, MomentShortRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5 q-px-md" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.project ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(QToolbar, { class: "row toolbar" }, {
      default: withCtx(() => [
        createBaseVNode("span", _hoisted_2, toDisplayString($props.project.name), 1),
        createVNode(QBtnToggle, {
          size: "xs",
          modelValue: $setup.editViewMode,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.editViewMode = $event),
          options: [
            { icon: "mdi-pan-horizontal", value: "horizontal" },
            { icon: "mdi-pan-vertical", value: "vertical" }
          ]
        }, null, 8, ["modelValue"]),
        _cache[2] || (_cache[2] = createBaseVNode("span", { class: "q-px-md text-bold" }, "Profondeur :", -1)),
        createVNode(QSlider, {
          modelValue: $setup.maximumDepth,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.maximumDepth = $event),
          class: "col-4",
          snap: "",
          markers: "",
          min: 0,
          max: 4,
          step: 1
        }, null, 8, ["modelValue"]),
        createVNode(QSpace)
      ]),
      _: 1
    }),
    createBaseVNode("div", {
      class: normalizeClass(["interviews", $setup.editViewMode])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.project.interviews, (interview) => {
        return openBlock(), createElementBlock("div", {
          class: "interview-moments",
          key: interview.id
        }, [
          createVNode(QBtn, {
            "no-caps": "",
            to: { name: "project", params: { id: interview.parentId }, query: { tab: interview.label } }
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(interview.label), 1)
            ]),
            _: 2
          }, 1032, ["to"]),
          createBaseVNode("div", {
            class: normalizeClass(["interview-children", $setup.editViewMode])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(interview?.analysis?.rootMoment?.children, (moment) => {
              return openBlock(), createBlock($setup["MomentShortRepresentation"], {
                key: moment.id,
                maximumDepth: $setup.maximumDepth,
                momentId: moment.id,
                layout: $setup.editViewMode
              }, null, 8, ["maximumDepth", "momentId", "layout"]);
            }), 128))
          ], 2)
        ]);
      }), 128))
    ], 2)
  ])) : createCommentVNode("", true);
}
const InterviewsSpreadsheet = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-62ed1cd8"], ["__file", "InterviewsSpreadsheet.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "GenericVisualisationPage"
  },
  __name: "GenericVisualisationPage",
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
    const project = computed(() => {
      if (props.projectId) {
        store.activateProject(props.projectId);
        const p = store.getFullProject(props.projectId);
        return p;
      } else {
        return null;
      }
    });
    const __returned__ = { props, store, project, InterviewsSpreadsheet };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.project ? (openBlock(), createBlock(QPage, {
    key: 0,
    class: "row fit"
  }, {
    default: withCtx(() => [
      createVNode($setup["InterviewsSpreadsheet"], { project: $setup.project }, null, 8, ["project"])
    ]),
    _: 1
  })) : createCommentVNode("", true);
}
const GenericVisualisationPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "GenericVisualisationPage.vue"]]);
export {
  GenericVisualisationPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY1Zpc3VhbGlzYXRpb25QYWdlLURmaEVIdmk0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9JbnRlcnZpZXdzU3ByZWFkc2hlZXQudnVlIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0dlbmVyaWNWaXN1YWxpc2F0aW9uUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IHYtaWY9XCJwcm9qZWN0XCI+XG4gICAgPHEtdG9vbGJhciBjbGFzcz1cInJvdyB0b29sYmFyXCI+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBxLXB4LW1kXCI+e3sgcHJvamVjdC5uYW1lIH19PC9zcGFuPlxuXG4gICAgICA8cS1idG4tdG9nZ2xlXG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIHYtbW9kZWw9XCJlZGl0Vmlld01vZGVcIlxuICAgICAgICA6b3B0aW9ucz1cIlsgeyBpY29uOiAnbWRpLXBhbi1ob3Jpem9udGFsJywgdmFsdWU6ICdob3Jpem9udGFsJyB9LFxuICAgICAgICAgICAgICAgICAgeyBpY29uOiAnbWRpLXBhbi12ZXJ0aWNhbCcsIHZhbHVlOiAndmVydGljYWwnIH0gXVwiPlxuICAgICAgPC9xLWJ0bi10b2dnbGU+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwicS1weC1tZCB0ZXh0LWJvbGRcIj5Qcm9mb25kZXVyJm5ic3A7Ojwvc3Bhbj5cbiAgICAgIDxxLXNsaWRlciB2LW1vZGVsPVwibWF4aW11bURlcHRoXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC00XCJcbiAgICAgICAgICAgICAgICBzbmFwXG4gICAgICAgICAgICAgICAgbWFya2Vyc1xuICAgICAgICAgICAgICAgIDptaW49XCIwXCJcbiAgICAgICAgICAgICAgICA6bWF4PVwiNFwiXG4gICAgICAgICAgICAgICAgOnN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICA8L3Etc2xpZGVyPlxuXG4gICAgICA8cS1zcGFjZSAvPlxuXG4gICAgPC9xLXRvb2xiYXI+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJpbnRlcnZpZXdzXCJcbiAgICAgICAgIDpjbGFzcz1cImVkaXRWaWV3TW9kZVwiPlxuICAgICAgPGRpdiB2LWZvcj1cImludGVydmlldyBpbiBwcm9qZWN0LmludGVydmlld3NcIlxuICAgICAgICAgICBjbGFzcz1cImludGVydmlldy1tb21lbnRzXCJcbiAgICAgICAgICAgOmtleT1cImludGVydmlldy5pZFwiPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgOnRvPVwieyBuYW1lOiAncHJvamVjdCcsIHBhcmFtczogeyBpZDogaW50ZXJ2aWV3LnBhcmVudElkIH0sICBxdWVyeTogeyB0YWI6IGludGVydmlldy5sYWJlbCB9IH1cIj5cbiAgICAgICAgICB7eyBpbnRlcnZpZXcubGFiZWwgfX1cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImludGVydmlldy1jaGlsZHJlblwiXG4gICAgICAgICAgICAgOmNsYXNzPVwiZWRpdFZpZXdNb2RlXCI+XG4gICAgICAgICAgPE1vbWVudFNob3J0UmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHYtZm9yPVwibW9tZW50IGluIGludGVydmlldz8uYW5hbHlzaXM/LnJvb3RNb21lbnQ/LmNoaWxkcmVuXCJcbiAgICAgICAgICAgIDprZXk9XCJtb21lbnQuaWRcIlxuICAgICAgICAgICAgOm1heGltdW1EZXB0aD1cIm1heGltdW1EZXB0aFwiXG4gICAgICAgICAgICA6bW9tZW50SWQ9XCJtb21lbnQuaWRcIlxuICAgICAgICAgICAgOmxheW91dD1cImVkaXRWaWV3TW9kZVwiPlxuICAgICAgICAgIDwvTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcbiAgLy8gaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgLy8gaW1wb3J0IHsgdXNlSW50ZXJmYWNlU3RvcmUgfSBmcm9tICdzdG9yZXMvaW50ZXJmYWNlJ1xuICBpbXBvcnQgTW9tZW50U2hvcnRSZXByZXNlbnRhdGlvbiBmcm9tICcuL01vbWVudFNob3J0UmVwcmVzZW50YXRpb24udnVlJ1xuICBpbXBvcnQgUHJvamVjdCBmcm9tICdzdG9yZXMvbW9kZWxzL3Byb2plY3QnXG5cbiAgLy8gY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuICAvLyBjb25zdCBpc3RvcmUgPSB1c2VJbnRlcmZhY2VTdG9yZSgpXG4gIGNvbnN0IGVkaXRWaWV3TW9kZSA9IHJlZignaG9yaXpvbnRhbCcpXG5cbiAgY29uc3QgbWF4aW11bURlcHRoID0gcmVmKDEpXG5cbiAgZGVmaW5lUHJvcHMoe1xuICAgICAgcHJvamVjdDoge1xuICAgICAgICAgIHR5cGU6IFByb2plY3QsXG4gICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgfVxuICB9KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ob3Jpem9udGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi52ZXJ0aWNhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW50ZXJ2aWV3cy52ZXJ0aWNhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmludGVydmlld3MuaG9yaXpvbnRhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2VcbiAgICB2LWlmPVwicHJvamVjdFwiXG4gICAgY2xhc3M9XCJyb3cgZml0XCI+XG4gICAgPEludGVydmlld3NTcHJlYWRzaGVldFxuICAgICAgOnByb2plY3Q9XCJwcm9qZWN0XCIgLz5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG4gIGltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuICAvLyAgaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IEludGVydmlld3NTcHJlYWRzaGVldCBmcm9tICdjb21wb25lbnRzL0ludGVydmlld3NTcHJlYWRzaGVldC52dWUnXG5cbiAgZGVmaW5lT3B0aW9ucyh7XG4gICAgICBuYW1lOiAnR2VuZXJpY1Zpc3VhbGlzYXRpb25QYWdlJ1xuICB9KVxuXG4gIGNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgICAgcHJvamVjdElkOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgIH1cbiAgfSlcblxuICBjb25zdCBzdG9yZSA9IHVzZVByb2plY3RTdG9yZSgpXG5cbiAgY29uc3QgcHJvamVjdCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9qZWN0SWQpIHtcbiAgICAgICAgICBzdG9yZS5hY3RpdmF0ZVByb2plY3QocHJvcHMucHJvamVjdElkKVxuICAgICAgICAgIGNvbnN0IHAgPSBzdG9yZS5nZXRGdWxsUHJvamVjdChwcm9wcy5wcm9qZWN0SWQpXG4gICAgICAgICAgcmV0dXJuIHBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgfSlcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9vcGVuQmxvY2siLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX3RvRGlzcGxheVN0cmluZyIsIl9ub3JtYWxpemVDbGFzcyIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9jcmVhdGVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VFLFVBQU0sZUFBZSxJQUFJLFlBQVk7QUFFckMsVUFBTSxlQUFlLElBQUksQ0FBQzs7Ozs7OztBQTlEaEIsTUFBQSxhQUFBLEVBQUEsT0FBTSxrQkFBQTs7QUFITCxTQUFBLE9BQUEsV0FBQUEsVUFBQSxHQUFYQyxtQkFrRE0sT0FBQSxZQUFBO0FBQUEsSUFqREpDLFlBd0JZLFVBQUEsRUFBQSxPQUFBLGNBeEJLLEdBQUE7QUFBQSxNQUFhLFNBQUFDLFFBRTVCLE1BQXVEO0FBQUEsUUFBdkRDLGdCQUF1RCxRQUF2RCxZQUF1REMsZ0JBQXRCLGVBQVEsSUFBSSxHQUFBLENBQUE7QUFBQSxRQUU3Q0gsWUFLZSxZQUFBO0FBQUEsVUFKYixNQUFLO0FBQUEsVUFBQSxZQUNJLE9BQUE7QUFBQSxVQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLGVBQVk7QUFBQSxVQUNwQixTQUFTO0FBQUEsWUFBQSxFQUFBLE1BQUEsc0JBQUEsT0FBQSxhQUFBO0FBQUEsWUFBQSxFQUFBLE1BQUEsb0JBQUEsT0FBQSxXQUFBO0FBQUE7O1FBSVosT0FBQSxDQUFBLE1BQUEsT0FBQSxDQUFBLElBQUFFLGdCQUF3RCxRQUFBLEVBQWxELE9BQU0sb0JBQUEsR0FBb0IsZ0JBQWlCLEVBQUE7QUFBQSxRQUNqREYsWUFRVyxTQUFBO0FBQUEsVUFBQSxZQVJRLE9BQUE7QUFBQSxVQUFBLHVCQUFBLE9BQUEsQ0FBQSxNQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxPQUFBLGVBQVk7QUFBQSxVQUNyQixPQUFNO0FBQUEsVUFDTixNQUFBO0FBQUEsVUFDQSxTQUFBO0FBQUEsVUFDQyxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFFBSWpCQSxZQUFXLE1BQUE7QUFBQSxNQUFBLENBQUE7QUFBQTs7SUFLYkUsZ0JBcUJNLE9BQUE7QUFBQSxNQXJCRCxPQUFLRSxlQUFBLENBQUMsY0FDRSxPQUFBLFlBQVksQ0FBQTtBQUFBLElBQUEsR0FBQTtBQUFBLE9BQ3ZCTixVQUFBLElBQUEsR0FBQUMsbUJBa0JNTSxVQUFBLE1BQUFDLFdBbEJtQixPQUFBLFFBQVEsWUFBVSxDQUEvQixjQUFTOzRCQUFyQlAsbUJBa0JNLE9BQUE7QUFBQSxVQWpCRCxPQUFNO0FBQUEsVUFDTCxLQUFLLFVBQVU7QUFBQSxRQUFBLEdBQUE7QUFBQSxVQUNuQkMsWUFJUSxNQUFBO0FBQUEsWUFITixXQUFBO0FBQUEsWUFDQyxJQUFFLEVBQUEsTUFBQSxXQUFBLFFBQUEsRUFBQSxJQUFtQyxVQUFVLFNBQUEsR0FBUSxPQUFBLEVBQUEsS0FBbUIsVUFBVSxNQUFBLEVBQUs7QUFBQSxVQUFBLEdBQUE7QUFBQSw2QkFDMUYsTUFBcUI7QUFBQSxjQUFBTyxnQkFBQUosZ0JBQWxCLFVBQVUsS0FBSyxHQUFBLENBQUE7QUFBQSxZQUFBLENBQUE7QUFBQTs7VUFFcEJELGdCQVNNLE9BQUE7QUFBQSxZQVRELE9BQUtFLGVBQUEsQ0FBQyxzQkFDRSxPQUFBLFlBQVksQ0FBQTtBQUFBLFVBQUEsR0FBQTtBQUFBLGFBQ3ZCTixVQUFBLElBQUEsR0FBQUMsbUJBTTRCTSwyQkFMVCxXQUFXLFVBQVUsWUFBWSxVQUFRLENBQW5ELFdBQU07a0NBRGZHLFlBTTRCLE9BQUEsMkJBQUEsR0FBQTtBQUFBLGdCQUp6QixLQUFLLE9BQU87QUFBQSxnQkFDWixjQUFjLE9BQUE7QUFBQSxnQkFDZCxVQUFVLE9BQU87QUFBQSxnQkFDakIsUUFBUSxPQUFBO0FBQUEsY0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLGdCQUFBLFlBQUEsUUFBQSxDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCbkIsVUFBTSxRQUFRO0FBT2QsVUFBTSxRQUFRLGdCQUFBO0FBRWQsVUFBTSxVQUFVLFNBQVMsTUFBTTtBQUMzQixVQUFJLE1BQU0sV0FBVztBQUNqQixjQUFNLGdCQUFnQixNQUFNLFNBQVM7QUFDckMsY0FBTSxJQUFJLE1BQU0sZUFBZSxNQUFNLFNBQVM7QUFDOUMsZUFBTztBQUFBLE1BQ1gsT0FBTztBQUNILGVBQU87QUFBQSxNQUNYO0FBQUEsSUFDSixDQUFDOzs7Ozs7O0FBbkNPLFNBQUEsT0FBQSxXQUFBVixVQUFBLEdBRFJVLFlBS1MsT0FBQTtBQUFBLElBQUEsS0FBQTtBQUFBLElBSFAsT0FBTTtBQUFBLEVBQUEsR0FBQTtBQUFBLHFCQUNOLE1BQ3VCO0FBQUEsTUFEdkJSLFlBQ3VCLE9BQUEsdUJBQUEsR0FBQSxFQUFwQixTQUFTLE9BQUEsV0FBTyxNQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUE7QUFBQSxJQUFBLENBQUE7QUFBQTs7OzsifQ==
