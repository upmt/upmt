import { Q as QBtnToggle } from "./ColorizeIcon-D9Z2NhyB.js";
import { a as QToolbar } from "./NoteIcon-CFcGh7Em.js";
import { Y as defineComponent, Z as useProjectStore, r as ref, p as computed, aN as groupBy, a1 as _export_sfc, a3 as createBlock, ab as createCommentVNode, a4 as openBlock, a5 as withCtx, a6 as createVNode, aa as createElementBlock, aC as QCard, aD as QCardSection, a8 as QBtn, a9 as createTextVNode, ag as Fragment, ah as renderList, a7 as createBaseVNode, ac as toDisplayString, ad as normalizeClass } from "./index-DT2JP2rj.js";
import { Q as QPage } from "./QPage-B7iBNboQ.js";
import { S as SpecificSynchronicCategoryRepresentation, G as GenericCategoriesOverview } from "./SpecificSynchronicCategoryRepresentation-BZKNs7b3.js";
import "./DragElement-BzCdx0F_.js";
import "./format-Dbce-Jpy.js";
import "./rtl-DDpZOXNn.js";
import "./QTooltip-y5EwGWAn.js";
import "./QList-Be0Kk92v.js";
import "./DropZone-BzN8PY0G.js";
import "./use-quasar-CErsBj6H.js";
import "./QSelect-GGYVJLXz.js";
import "./QItemLabel-DcM4fill.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "SynchronicModelsPage"
  },
  __name: "SynchronicModelsPage",
  props: {
    projectId: {
      type: String,
      default: ""
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const store = useProjectStore();
    const layout = ref("horizontal");
    const project = computed(() => {
      if (props.projectId) {
        const p = store.getFullProject(props.projectId);
        return p;
      } else {
        return null;
      }
    });
    const genericGraphs = computed(() => store.getGenericSynchronicGraphs(props.projectId));
    const definedModels = computed(() => {
      const models = store.getSpecificSynchronicModels(props.projectId).filter((model) => model.categories.length);
      const moments = Object.fromEntries(store.getMomentsByProject(props.projectId).map((moment) => [moment.id, moment]));
      const detachedModels = models.filter((model) => model.detachedModelId);
      const interviewModels = groupBy(
        models.filter((model) => model.momentId).map((model) => {
          const interview = store.getInterviewByMoment(model.momentId);
          return {
            model,
            moment: moments[model.momentId],
            interview,
            interviewLabel: interview?.label ?? ""
          };
        }),
        "interviewLabel"
      );
      return {
        interviews: Object.entries(interviewModels),
        detached: detachedModels
      };
    });
    const __returned__ = { props, store, layout, project, genericGraphs, definedModels, GenericCategoriesOverview, SpecificSynchronicCategoryRepresentation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "interview-models" };
const _hoisted_2 = { class: "detached-model" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.project ? (openBlock(), createBlock(QPage, {
    key: 0,
    class: "column"
  }, {
    default: withCtx(() => [
      createVNode(QToolbar, { class: "print-removed" }, {
        default: withCtx(() => [
          createVNode(QBtnToggle, {
            size: "xs",
            modelValue: $setup.layout,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.layout = $event),
            options: [
              { icon: "mdi-pan-horizontal", value: "horizontal" },
              { icon: "mdi-pan-vertical", value: "vertical" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }),
      createVNode(QCard, { class: "q-pa-md print-nobreak" }, {
        default: withCtx(() => [
          createVNode(QCardSection, { class: "bg-secondary" }, {
            default: withCtx(() => [
              createVNode(QBtn, null, {
                default: withCtx(() => [..._cache[1] || (_cache[1] = [
                  createTextVNode("Generic model", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode($setup["GenericCategoriesOverview"], {
            class: "genericmodel",
            projectId: $props.projectId,
            currentInterviewId: "",
            layout: $setup.layout,
            categories: $setup.genericGraphs.categories
          }, null, 8, ["projectId", "layout", "categories"])
        ]),
        _: 1
      }),
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.definedModels.interviews, ([interviewLabel, modelInfos]) => {
        return openBlock(), createBlock(QCard, {
          class: "q-pa-md",
          key: interviewLabel
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, { class: "bg-secondary" }, {
              default: withCtx(() => [
                createVNode(QBtn, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(interviewLabel), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024),
            createBaseVNode("div", _hoisted_1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(modelInfos, (modelInfo) => {
                return openBlock(), createBlock(QCard, {
                  class: "moment-model q-pa-md q-pt-lg print-nobreak",
                  key: modelInfo.model.id
                }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, { class: "bg-primary" }, {
                      default: withCtx(() => [
                        createVNode(QBtn, { icon: "mdi-alpha-d-box-outline" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(modelInfo.moment.name), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createBaseVNode("div", {
                      class: normalizeClass(["specificsynchronicmodel-categories", $setup.layout])
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(modelInfo.model.categories, (c) => {
                        return openBlock(), createBlock($setup["SpecificSynchronicCategoryRepresentation"], {
                          key: c.id,
                          isGeneric: false,
                          layout: $setup.layout,
                          hideJustifications: false,
                          categoryId: c.id
                        }, null, 8, ["layout", "categoryId"]);
                      }), 128))
                    ], 2)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ])
          ]),
          _: 2
        }, 1024);
      }), 128)),
      $setup.definedModels.detached.length ? (openBlock(), createBlock(QCard, {
        key: 0,
        class: "q-pa-md row"
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, { class: "bg-secondary" }, {
            default: withCtx(() => [
              createVNode(QBtn, { "no-caps": "" }, {
                default: withCtx(() => [..._cache[2] || (_cache[2] = [
                  createTextVNode("Detached models", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.definedModels.detached, (model) => {
            return openBlock(), createBlock(QCard, {
              key: model.id
            }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "bg-primary" }, {
                  default: withCtx(() => [
                    createVNode(QBtn, null, {
                      default: withCtx(() => [
                        _cache[3] || (_cache[3] = createTextVNode("Detached model ", -1)),
                        createBaseVNode("strong", null, toDisplayString(model.name), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createBaseVNode("div", _hoisted_2, [
                  createVNode(QBtn, { icon: "mdi-alpha-s-box-outline" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(model.name), 1)
                    ]),
                    _: 2
                  }, 1024),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(model.categories, (c) => {
                    return openBlock(), createBlock($setup["SpecificSynchronicCategoryRepresentation"], {
                      key: c.id,
                      isGeneric: false,
                      layout: $setup.layout,
                      hideJustifications: false,
                      categoryId: c.id
                    }, null, 8, ["layout", "categoryId"]);
                  }), 128))
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]),
    _: 1
  })) : createCommentVNode("", true);
}
const SynchronicModelsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-83208226"], ["__file", "SynchronicModelsPage.vue"]]);
export {
  SynchronicModelsPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY2hyb25pY01vZGVsc1BhZ2UtWWtWSVJnR3IuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9TeW5jaHJvbmljTW9kZWxzUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wYWdlXG4gICAgdi1pZj1cInByb2plY3RcIlxuICAgIGNsYXNzPVwiY29sdW1uXCI+XG5cbiAgICA8cS10b29sYmFyXG4gICAgICBjbGFzcz1cInByaW50LXJlbW92ZWRcIj5cbiAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgdi1tb2RlbD1cImxheW91dFwiXG4gICAgICAgIDpvcHRpb25zPVwiWyB7IGljb246ICdtZGktcGFuLWhvcml6b250YWwnLCB2YWx1ZTogJ2hvcml6b250YWwnIH0sXG4gICAgICAgICAgICAgICAgICB7IGljb246ICdtZGktcGFuLXZlcnRpY2FsJywgdmFsdWU6ICd2ZXJ0aWNhbCcgfSBdXCI+XG4gICAgICA8L3EtYnRuLXRvZ2dsZT5cbiAgICA8L3EtdG9vbGJhcj5cblxuICAgIDxxLWNhcmRcbiAgICAgIGNsYXNzPVwicS1wYS1tZCBwcmludC1ub2JyZWFrXCI+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvblxuICAgICAgICBjbGFzcz1cImJnLXNlY29uZGFyeVwiPlxuICAgICAgICA8cS1idG4+R2VuZXJpYyBtb2RlbDwvcS1idG4+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8R2VuZXJpY0NhdGVnb3JpZXNPdmVydmlld1xuICAgICAgICBjbGFzcz1cImdlbmVyaWNtb2RlbFwiXG4gICAgICAgIDpwcm9qZWN0SWQ9XCJwcm9qZWN0SWRcIlxuICAgICAgICBjdXJyZW50SW50ZXJ2aWV3SWQ9XCJcIlxuICAgICAgICA6bGF5b3V0PVwibGF5b3V0XCJcbiAgICAgICAgOmNhdGVnb3JpZXM9XCJnZW5lcmljR3JhcGhzLmNhdGVnb3JpZXNcIlxuICAgICAgICAvPlxuXG4gICAgPC9xLWNhcmQ+XG5cbiAgICA8cS1jYXJkXG4gICAgICB2LWZvcj1cIlsgaW50ZXJ2aWV3TGFiZWwsIG1vZGVsSW5mb3MgXSBpbiBkZWZpbmVkTW9kZWxzLmludGVydmlld3NcIlxuICAgICAgY2xhc3M9XCJxLXBhLW1kXCJcbiAgICAgIDprZXk9XCJpbnRlcnZpZXdMYWJlbFwiXG4gICAgICA+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvblxuICAgICAgICBjbGFzcz1cImJnLXNlY29uZGFyeVwiPlxuICAgICAgICA8cS1idG4+e3sgaW50ZXJ2aWV3TGFiZWwgfX08L3EtYnRuPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPGRpdiBjbGFzcz1cImludGVydmlldy1tb2RlbHNcIj5cbiAgICAgICAgPHEtY2FyZCBjbGFzcz1cIm1vbWVudC1tb2RlbCBxLXBhLW1kIHEtcHQtbGcgcHJpbnQtbm9icmVha1wiXG4gICAgICAgICAgICAgICAgdi1mb3I9XCJtb2RlbEluZm8gaW4gbW9kZWxJbmZvc1wiXG4gICAgICAgICAgICAgICAgOmtleT1cIm1vZGVsSW5mby5tb2RlbC5pZFwiPlxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvblxuICAgICAgICAgICAgY2xhc3M9XCJiZy1wcmltYXJ5XCI+XG4gICAgICAgICAgICA8cS1idG4gaWNvbj1cIm1kaS1hbHBoYS1kLWJveC1vdXRsaW5lXCI+e3sgbW9kZWxJbmZvLm1vbWVudC5uYW1lIH19PC9xLWJ0bj5cbiAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjaWZpY3N5bmNocm9uaWNtb2RlbC1jYXRlZ29yaWVzXCJcbiAgICAgICAgICAgICAgIDpjbGFzcz1cImxheW91dFwiXG4gICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8U3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgICB2LWZvcj1cImMgaW4gbW9kZWxJbmZvLm1vZGVsLmNhdGVnb3JpZXNcIlxuICAgICAgICAgICAgICA6a2V5PVwiYy5pZFwiXG4gICAgICAgICAgICAgIDppc0dlbmVyaWM9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIDpsYXlvdXQ9XCJsYXlvdXRcIlxuICAgICAgICAgICAgICA6aGlkZUp1c3RpZmljYXRpb25zPVwiZmFsc2VcIlxuICAgICAgICAgICAgICA6Y2F0ZWdvcnlJZD1cImMuaWRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9xLWNhcmQ+XG5cbiAgICA8cS1jYXJkXG4gICAgICB2LWlmPVwiZGVmaW5lZE1vZGVscy5kZXRhY2hlZC5sZW5ndGhcIlxuICAgICAgY2xhc3M9XCJxLXBhLW1kIHJvd1wiXG4gICAgICA+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvblxuICAgICAgICBjbGFzcz1cImJnLXNlY29uZGFyeVwiPlxuICAgICAgICA8cS1idG4gbm8tY2Fwcz5EZXRhY2hlZCBtb2RlbHM8L3EtYnRuPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZFxuICAgICAgICB2LWZvcj1cIm1vZGVsIGluIGRlZmluZWRNb2RlbHMuZGV0YWNoZWRcIlxuICAgICAgICA6a2V5PVwibW9kZWwuaWRcIlxuICAgICAgICA+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvblxuICAgICAgICAgIGNsYXNzPVwiYmctcHJpbWFyeVwiPlxuICAgICAgICAgIDxxLWJ0bj5EZXRhY2hlZCBtb2RlbCA8c3Ryb25nPnt7IG1vZGVsLm5hbWUgfX08L3N0cm9uZz48L3EtYnRuPlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWNoZWQtbW9kZWxcIj5cbiAgICAgICAgICA8cS1idG4gaWNvbj1cIm1kaS1hbHBoYS1zLWJveC1vdXRsaW5lXCI+e3sgbW9kZWwubmFtZSB9fTwvcS1idG4+XG4gICAgICAgICAgPFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHYtZm9yPVwiYyBpbiBtb2RlbC5jYXRlZ29yaWVzXCJcbiAgICAgICAgICAgIDprZXk9XCJjLmlkXCJcbiAgICAgICAgICAgIDppc0dlbmVyaWM9XCJmYWxzZVwiXG4gICAgICAgICAgICA6bGF5b3V0PVwibGF5b3V0XCJcbiAgICAgICAgICAgIDpoaWRlSnVzdGlmaWNhdGlvbnM9XCJmYWxzZVwiXG4gICAgICAgICAgICA6Y2F0ZWdvcnlJZD1cImMuaWRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS1jYXJkPlxuICAgIDwvcS1jYXJkPlxuXG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuICBpbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuICAvLyAgaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSdcbiAgaW1wb3J0IHsgdXNlUHJvamVjdFN0b3JlIH0gZnJvbSAnc3RvcmVzL3Byb2plY3RTdG9yZSdcbiAgaW1wb3J0IEdlbmVyaWNDYXRlZ29yaWVzT3ZlcnZpZXcgZnJvbSAnY29tcG9uZW50cy9HZW5lcmljQ2F0ZWdvcmllc092ZXJ2aWV3LnZ1ZSdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY0NhdGVnb3J5UmVwcmVzZW50YXRpb24gZnJvbSAnY29tcG9uZW50cy9TcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uLnZ1ZSdcbiAgaW1wb3J0IFNwZWNpZmljU3luY2hyb25pY01vZGVsIGZyb20gJ3N0b3Jlcy9tb2RlbHMvc3BlY2lmaWNzeW5jaHJvbmljbW9kZWwnXG4gIGltcG9ydCBNb21lbnQgZnJvbSAnc3RvcmVzL21vZGVscy9tb21lbnQnXG4gIGltcG9ydCBJbnRlcnZpZXcgZnJvbSAnc3RvcmVzL21vZGVscy9pbnRlcnZpZXcnXG4gIGltcG9ydCB7IGdyb3VwQnkgfSBmcm9tICdzdG9yZXMvdXRpbCdcblxuICB0eXBlIE1vZGVsSW5mbyA9IHtcbiAgICAgIG1vZGVsOiBTcGVjaWZpY1N5bmNocm9uaWNNb2RlbCxcbiAgICAgIG1vbWVudDogTW9tZW50LFxuICAgICAgaW50ZXJ2aWV3OiBJbnRlcnZpZXcsXG4gICAgICBpbnRlcnZpZXdMYWJlbDogc3RyaW5nXG4gIH1cblxuICBkZWZpbmVPcHRpb25zKHtcbiAgICAgIG5hbWU6ICdTeW5jaHJvbmljTW9kZWxzUGFnZSdcbiAgfSlcblxuICBjb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICAgIHByb2plY3RJZDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBkZWZhdWx0OiBcIlwiXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VQcm9qZWN0U3RvcmUoKVxuXG4gIGNvbnN0IGxheW91dCA9IHJlZignaG9yaXpvbnRhbCcpXG5cbiAgY29uc3QgcHJvamVjdCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9qZWN0SWQpIHtcbiAgICAgICAgICBjb25zdCBwID0gc3RvcmUuZ2V0RnVsbFByb2plY3QocHJvcHMucHJvamVjdElkKVxuICAgICAgICAgIHJldHVybiBwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgZ2VuZXJpY0dyYXBocyA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldEdlbmVyaWNTeW5jaHJvbmljR3JhcGhzKHByb3BzLnByb2plY3RJZCkpXG5cbiAgLyogUmV0dXJuIGEgbGlzdCBvZiBkZWZpbmVkIG1vZGVscyBhcyBhbiBvYmplY3QgeyBpbnRlcnZpZXdzOiBbIGludGVydmlld05hbWU6IFtdIF0sIGRldGFjaGVkOiBbIF0gfVxuICAgKi9cbiAgY29uc3QgZGVmaW5lZE1vZGVscyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IG1vZGVscyA9IHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY01vZGVscyhwcm9wcy5wcm9qZWN0SWQpLmZpbHRlcihtb2RlbCA9PiBtb2RlbC5jYXRlZ29yaWVzLmxlbmd0aClcblxuICAgICAgY29uc3QgbW9tZW50cyA9IE9iamVjdC5mcm9tRW50cmllcyhzdG9yZS5nZXRNb21lbnRzQnlQcm9qZWN0KHByb3BzLnByb2plY3RJZCkubWFwKG1vbWVudCA9PiBbIG1vbWVudC5pZCwgbW9tZW50IF0pKVxuXG4gICAgICBjb25zdCBkZXRhY2hlZE1vZGVscyA9IG1vZGVscy5maWx0ZXIobW9kZWwgPT4gbW9kZWwuZGV0YWNoZWRNb2RlbElkKVxuICAgICAgY29uc3QgaW50ZXJ2aWV3TW9kZWxzID0gZ3JvdXBCeShtb2RlbHNcbiAgICAgICAgICAuZmlsdGVyKG1vZGVsID0+IG1vZGVsLm1vbWVudElkKVxuICAgICAgICAgIC5tYXAobW9kZWwgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpbnRlcnZpZXcgPSBzdG9yZS5nZXRJbnRlcnZpZXdCeU1vbWVudChtb2RlbC5tb21lbnRJZClcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgICAgICAgbW9tZW50OiBtb21lbnRzW21vZGVsLm1vbWVudElkXSxcbiAgICAgICAgICAgICAgICAgIGludGVydmlldzogaW50ZXJ2aWV3LFxuICAgICAgICAgICAgICAgICAgaW50ZXJ2aWV3TGFiZWw6IGludGVydmlldz8ubGFiZWwgPz8gXCJcIlxuICAgICAgICAgICAgICB9IGFzIE1vZGVsSW5mb1xuICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJ2aWV3TGFiZWwnKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbnRlcnZpZXdzOiBPYmplY3QuZW50cmllcyhpbnRlcnZpZXdNb2RlbHMpLFxuICAgICAgICAgIGRldGFjaGVkOiBkZXRhY2hlZE1vZGVsc1xuICAgICAgfVxuICB9KVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuICAuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWwtY2F0ZWdvcmllcyB7XG4gICAgICBkaXNwbGF5OiAgZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnZlcnRpY2FsIC5zcGVjaWZpY3N5bmNocm9uaWNtb2RlbC1jYXRlZ29yaWVzIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLmdlbmVyaWNtb2RlbCB7XG4gICAgLS1vdmVydmlldy1oZWlnaHQ6IDI0cHg7XG4gICAgLS1vdmVydmlldy13aWR0aDogMTAwcHg7XG4gICAgLS1vdmVydmlldy1mb250LXNpemU6IDEycHg7XG4gIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX29wZW5CbG9jayIsIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSIsIl93aXRoQ3R4IiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2SEUsVUFBTSxRQUFRO0FBT2QsVUFBTSxRQUFRLGdCQUFBO0FBRWQsVUFBTSxTQUFTLElBQUksWUFBWTtBQUUvQixVQUFNLFVBQVUsU0FBUyxNQUFNO0FBQzNCLFVBQUksTUFBTSxXQUFXO0FBQ2pCLGNBQU0sSUFBSSxNQUFNLGVBQWUsTUFBTSxTQUFTO0FBQzlDLGVBQU87QUFBQSxNQUNYLE9BQU87QUFDSCxlQUFPO0FBQUEsTUFDWDtBQUFBLElBQ0osQ0FBQztBQUVELFVBQU0sZ0JBQWdCLFNBQVMsTUFBTSxNQUFNLDJCQUEyQixNQUFNLFNBQVMsQ0FBQztBQUl0RixVQUFNLGdCQUFnQixTQUFTLE1BQU07QUFDakMsWUFBTSxTQUFTLE1BQU0sNEJBQTRCLE1B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
