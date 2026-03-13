import { Q as QBtnToggle } from "./ColorizeIcon-CnOnCqoT.js";
import { a as QToolbar } from "./NoteIcon-Bdqpr3qd.js";
import { Y as defineComponent, Z as useProjectStore, r as ref, p as computed, aK as groupBy, a1 as _export_sfc, a3 as createBlock, ab as createCommentVNode, a4 as openBlock, a5 as withCtx, a6 as createVNode, aa as createElementBlock, aD as QCard, aB as QCardSection, a8 as QBtn, a9 as createTextVNode, ag as Fragment, ah as renderList, a7 as createBaseVNode, ac as toDisplayString, ad as normalizeClass } from "./index-C8moTFq2.js";
import { Q as QPage } from "./QPage-Ce9b1atr.js";
import { S as SpecificSynchronicCategoryRepresentation, G as GenericCategoriesOverview } from "./SpecificSynchronicCategoryRepresentation-BhXd-gWE.js";
import "./QBtnGroup-gg1VC8Dz.js";
import "./format-mCdLZtFG.js";
import "./QSelect-WCK0xNWi.js";
import "./QItemLabel-CLpdUhw9.js";
import "./QTooltip-H1AkgSso.js";
import "./QList-CyR4BEUD.js";
import "./ElementMenu-BOGRjQVp.js";
import "./use-quasar-D-PqJuZf.js";
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
        store.activateProject(props.projectId);
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
              createVNode(QBtn, { "no-caps": "" }, {
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
                createVNode(QBtn, {
                  "no-caps": "",
                  to: { name: "project", query: { tab: interviewLabel } }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(interviewLabel), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
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
                        createVNode(QBtn, {
                          "no-caps": "",
                          to: { name: "project", query: { tab: interviewLabel } },
                          icon: "mdi-alpha-d-box-outline"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(modelInfo.moment.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
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
                  createVNode(QBtn, {
                    "no-caps": "",
                    icon: "mdi-alpha-s-box-outline"
                  }, {
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
const SynchronicModelsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-93357573"], ["__file", "SynchronicModelsPage.vue"]]);
export {
  SynchronicModelsPage as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY2hyb25pY01vZGVsc1BhZ2UtRGdTbXViU1cuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9TeW5jaHJvbmljTW9kZWxzUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wYWdlXG4gICAgdi1pZj1cInByb2plY3RcIlxuICAgIGNsYXNzPVwiY29sdW1uXCI+XG5cbiAgICA8cS10b29sYmFyXG4gICAgICBjbGFzcz1cInByaW50LXJlbW92ZWRcIj5cbiAgICAgIDxxLWJ0bi10b2dnbGVcbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgdi1tb2RlbD1cImxheW91dFwiXG4gICAgICAgIDpvcHRpb25zPVwiWyB7IGljb246ICdtZGktcGFuLWhvcml6b250YWwnLCB2YWx1ZTogJ2hvcml6b250YWwnIH0sXG4gICAgICAgICAgICAgICAgICB7IGljb246ICdtZGktcGFuLXZlcnRpY2FsJywgdmFsdWU6ICd2ZXJ0aWNhbCcgfSBdXCI+XG4gICAgICA8L3EtYnRuLXRvZ2dsZT5cbiAgICA8L3EtdG9vbGJhcj5cblxuICAgIDxxLWNhcmRcbiAgICAgIGNsYXNzPVwicS1wYS1tZCBwcmludC1ub2JyZWFrXCI+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvblxuICAgICAgICBjbGFzcz1cImJnLXNlY29uZGFyeVwiPlxuICAgICAgICA8cS1idG4gbm8tY2Fwcz5HZW5lcmljIG1vZGVsPC9xLWJ0bj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxHZW5lcmljQ2F0ZWdvcmllc092ZXJ2aWV3XG4gICAgICAgIGNsYXNzPVwiZ2VuZXJpY21vZGVsXCJcbiAgICAgICAgOnByb2plY3RJZD1cInByb2plY3RJZFwiXG4gICAgICAgIGN1cnJlbnRJbnRlcnZpZXdJZD1cIlwiXG4gICAgICAgIDpsYXlvdXQ9XCJsYXlvdXRcIlxuICAgICAgICA6Y2F0ZWdvcmllcz1cImdlbmVyaWNHcmFwaHMuY2F0ZWdvcmllc1wiXG4gICAgICAgIC8+XG5cbiAgICA8L3EtY2FyZD5cblxuICAgIDxxLWNhcmRcbiAgICAgIHYtZm9yPVwiWyBpbnRlcnZpZXdMYWJlbCwgbW9kZWxJbmZvcyBdIGluIGRlZmluZWRNb2RlbHMuaW50ZXJ2aWV3c1wiXG4gICAgICBjbGFzcz1cInEtcGEtbWRcIlxuICAgICAgOmtleT1cImludGVydmlld0xhYmVsXCJcbiAgICAgID5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgIGNsYXNzPVwiYmctc2Vjb25kYXJ5XCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICA6dG89XCJ7IG5hbWU6ICdwcm9qZWN0JywgcXVlcnk6IHsgdGFiOiBpbnRlcnZpZXdMYWJlbCB9IH1cIj57eyBpbnRlcnZpZXdMYWJlbCB9fTwvcS1idG4+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaW50ZXJ2aWV3LW1vZGVsc1wiPlxuICAgICAgICA8cS1jYXJkIGNsYXNzPVwibW9tZW50LW1vZGVsIHEtcGEtbWQgcS1wdC1sZyBwcmludC1ub2JyZWFrXCJcbiAgICAgICAgICAgICAgICB2LWZvcj1cIm1vZGVsSW5mbyBpbiBtb2RlbEluZm9zXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwibW9kZWxJbmZvLm1vZGVsLmlkXCI+XG4gICAgICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgICAgICBjbGFzcz1cImJnLXByaW1hcnlcIj5cbiAgICAgICAgICAgIDxxLWJ0biBuby1jYXBzXG4gICAgICAgICAgICAgICAgICAgOnRvPVwieyBuYW1lOiAncHJvamVjdCcsIHF1ZXJ5OiB7IHRhYjogaW50ZXJ2aWV3TGFiZWwgfSB9XCJcbiAgICAgICAgICAgICAgICAgICBpY29uPVwibWRpLWFscGhhLWQtYm94LW91dGxpbmVcIj57eyBtb2RlbEluZm8ubW9tZW50Lm5hbWUgfX08L3EtYnRuPlxuICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNwZWNpZmljc3luY2hyb25pY21vZGVsLWNhdGVnb3JpZXNcIlxuICAgICAgICAgICAgICAgOmNsYXNzPVwibGF5b3V0XCJcbiAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAgIHYtZm9yPVwiYyBpbiBtb2RlbEluZm8ubW9kZWwuY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICAgIDprZXk9XCJjLmlkXCJcbiAgICAgICAgICAgICAgOmlzR2VuZXJpYz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgOmxheW91dD1cImxheW91dFwiXG4gICAgICAgICAgICAgIDpoaWRlSnVzdGlmaWNhdGlvbnM9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIDpjYXRlZ29yeUlkPVwiYy5pZFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcS1jYXJkPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L3EtY2FyZD5cblxuICAgIDxxLWNhcmRcbiAgICAgIHYtaWY9XCJkZWZpbmVkTW9kZWxzLmRldGFjaGVkLmxlbmd0aFwiXG4gICAgICBjbGFzcz1cInEtcGEtbWQgcm93XCJcbiAgICAgID5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgIGNsYXNzPVwiYmctc2Vjb25kYXJ5XCI+XG4gICAgICAgIDxxLWJ0biBuby1jYXBzPkRldGFjaGVkIG1vZGVsczwvcS1idG4+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8cS1jYXJkXG4gICAgICAgIHYtZm9yPVwibW9kZWwgaW4gZGVmaW5lZE1vZGVscy5kZXRhY2hlZFwiXG4gICAgICAgIDprZXk9XCJtb2RlbC5pZFwiXG4gICAgICAgID5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgICAgY2xhc3M9XCJiZy1wcmltYXJ5XCI+XG4gICAgICAgICAgPHEtYnRuPkRldGFjaGVkIG1vZGVsIDxzdHJvbmc+e3sgbW9kZWwubmFtZSB9fTwvc3Ryb25nPjwvcS1idG4+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhY2hlZC1tb2RlbFwiPlxuICAgICAgICAgIDxxLWJ0biBuby1jYXBzIGljb249XCJtZGktYWxwaGEtcy1ib3gtb3V0bGluZVwiPnt7IG1vZGVsLm5hbWUgfX08L3EtYnRuPlxuICAgICAgICAgIDxTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB2LWZvcj1cImMgaW4gbW9kZWwuY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICA6a2V5PVwiYy5pZFwiXG4gICAgICAgICAgICA6aXNHZW5lcmljPVwiZmFsc2VcIlxuICAgICAgICAgICAgOmxheW91dD1cImxheW91dFwiXG4gICAgICAgICAgICA6aGlkZUp1c3RpZmljYXRpb25zPVwiZmFsc2VcIlxuICAgICAgICAgICAgOmNhdGVnb3J5SWQ9XCJjLmlkXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtY2FyZD5cbiAgICA8L3EtY2FyZD5cblxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbiAgaW1wb3J0IHsgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcbiAgLy8gIGltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnXG4gIGltcG9ydCB7IHVzZVByb2plY3RTdG9yZSB9IGZyb20gJ3N0b3Jlcy9wcm9qZWN0U3RvcmUnXG4gIGltcG9ydCBHZW5lcmljQ2F0ZWdvcmllc092ZXJ2aWV3IGZyb20gJ2NvbXBvbmVudHMvR2VuZXJpY0NhdGVnb3JpZXNPdmVydmlldy52dWUnXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNDYXRlZ29yeVJlcHJlc2VudGF0aW9uIGZyb20gJ2NvbXBvbmVudHMvU3BlY2lmaWNTeW5jaHJvbmljQ2F0ZWdvcnlSZXByZXNlbnRhdGlvbi52dWUnXG4gIGltcG9ydCBTcGVjaWZpY1N5bmNocm9uaWNNb2RlbCBmcm9tICdzdG9yZXMvbW9kZWxzL3NwZWNpZmljc3luY2hyb25pY21vZGVsJ1xuICBpbXBvcnQgTW9tZW50IGZyb20gJ3N0b3Jlcy9tb2RlbHMvbW9tZW50J1xuICBpbXBvcnQgSW50ZXJ2aWV3IGZyb20gJ3N0b3Jlcy9tb2RlbHMvaW50ZXJ2aWV3J1xuICBpbXBvcnQgeyBncm91cEJ5IH0gZnJvbSAnc3RvcmVzL3V0aWwnXG5cbiAgdHlwZSBNb2RlbEluZm8gPSB7XG4gICAgICBtb2RlbDogU3BlY2lmaWNTeW5jaHJvbmljTW9kZWwsXG4gICAgICBtb21lbnQ6IE1vbWVudCxcbiAgICAgIGludGVydmlldzogSW50ZXJ2aWV3LFxuICAgICAgaW50ZXJ2aWV3TGFiZWw6IHN0cmluZ1xuICB9XG5cbiAgZGVmaW5lT3B0aW9ucyh7XG4gICAgICBuYW1lOiAnU3luY2hyb25pY01vZGVsc1BhZ2UnXG4gIH0pXG5cbiAgY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgICBwcm9qZWN0SWQ6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgZGVmYXVsdDogXCJcIlxuICAgICAgfVxuICB9KVxuXG4gIGNvbnN0IHN0b3JlID0gdXNlUHJvamVjdFN0b3JlKClcblxuICBjb25zdCBsYXlvdXQgPSByZWYoJ2hvcml6b250YWwnKVxuXG4gIGNvbnN0IHByb2plY3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMucHJvamVjdElkKSB7XG4gICAgICAgICAgc3RvcmUuYWN0aXZhdGVQcm9qZWN0KHByb3BzLnByb2plY3RJZClcbiAgICAgICAgICBjb25zdCBwID0gc3RvcmUuZ2V0RnVsbFByb2plY3QocHJvcHMucHJvamVjdElkKVxuICAgICAgICAgIHJldHVybiBwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gIH0pXG5cbiAgY29uc3QgZ2VuZXJpY0dyYXBocyA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLmdldEdlbmVyaWNTeW5jaHJvbmljR3JhcGhzKHByb3BzLnByb2plY3RJZCkpXG5cbiAgLyogUmV0dXJuIGEgbGlzdCBvZiBkZWZpbmVkIG1vZGVscyBhcyBhbiBvYmplY3QgeyBpbnRlcnZpZXdzOiBbIGludGVydmlld05hbWU6IFtdIF0sIGRldGFjaGVkOiBbIF0gfVxuICAgKi9cbiAgY29uc3QgZGVmaW5lZE1vZGVscyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IG1vZGVscyA9IHN0b3JlLmdldFNwZWNpZmljU3luY2hyb25pY01vZGVscyhwcm9wcy5wcm9qZWN0SWQpLmZpbHRlcihtb2RlbCA9PiBtb2RlbC5jYXRlZ29yaWVzLmxlbmd0aClcblxuICAgICAgY29uc3QgbW9tZW50cyA9IE9iamVjdC5mcm9tRW50cmllcyhzdG9yZS5nZXRNb21lbnRzQnlQcm9qZWN0KHByb3BzLnByb2plY3RJZCkubWFwKG1vbWVudCA9PiBbIG1vbWVudC5pZCwgbW9tZW50IF0pKVxuXG4gICAgICBjb25zdCBkZXRhY2hlZE1vZGVscyA9IG1vZGVscy5maWx0ZXIobW9kZWwgPT4gbW9kZWwuZGV0YWNoZWRNb2RlbElkKVxuICAgICAgY29uc3QgaW50ZXJ2aWV3TW9kZWxzID0gZ3JvdXBCeShtb2RlbHNcbiAgICAgICAgICAuZmlsdGVyKG1vZGVsID0+IG1vZGVsLm1vbWVudElkKVxuICAgICAgICAgIC5tYXAobW9kZWwgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpbnRlcnZpZXcgPSBzdG9yZS5nZXRJbnRlcnZpZXdCeU1vbWVudChtb2RlbC5tb21lbnRJZClcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgICAgICAgbW9tZW50OiBtb21lbnRzW21vZGVsLm1vbWVudElkXSxcbiAgICAgICAgICAgICAgICAgIGludGVydmlldzogaW50ZXJ2aWV3LFxuICAgICAgICAgICAgICAgICAgaW50ZXJ2aWV3TGFiZWw6IGludGVydmlldz8ubGFiZWwgPz8gXCJcIlxuICAgICAgICAgICAgICB9IGFzIE1vZGVsSW5mb1xuICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJ2aWV3TGFiZWwnKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbnRlcnZpZXdzOiBPYmplY3QuZW50cmllcyhpbnRlcnZpZXdNb2RlbHMpLFxuICAgICAgICAgIGRldGFjaGVkOiBkZXRhY2hlZE1vZGVsc1xuICAgICAgfVxuICB9KVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuICAuc3BlY2lmaWNzeW5jaHJvbmljbW9kZWwtY2F0ZWdvcmllcyB7XG4gICAgICBkaXNwbGF5OiAgZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnNwZWNpZmljc3luY2hyb25pY21vZGVsLWNhdGVnb3JpZXMudmVydGljYWwge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuZ2VuZXJpY21vZGVsIHtcbiAgICAtLW92ZXJ2aWV3LWhlaWdodDogMjRweDtcbiAgICAtLW92ZXJ2aWV3LXdpZHRoOiAxMDBweDtcbiAgICAtLW92ZXJ2aWV3LWZvbnQtc2l6ZTogMTJweDtcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfb3BlbkJsb2NrIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIiwiX3dpdGhDdHgiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfbm9ybWFsaXplQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUlFLFVBQU0sUUFBUTtBQU9kLFVBQU0sUUFBUSxnQkFBQTtBQUVkLFVBQU0sU0FBUyxJQUFJ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
