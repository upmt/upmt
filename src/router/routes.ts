import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'home', redirect: '/' },
      { path: 'spreadsheet/:projectId', name: 'spreadsheet', component: () => import('pages/GenericVisualisationPage.vue'), props: true },
      { path: 'descriptems/:projectId', name: 'descriptems', component: () => import('pages/DescriptemPage.vue'), props: true },
      { path: 'models/:projectId', name: 'models', component: () => import('pages/SynchronicModelsPage.vue'), props: true },
      { path: 'specificsynchroniccategories/:projectId',
        name: 'specificsynchroniccategories',
        component: () => import('pages/SynchronicCategoriesPage.vue'),
        props: true
      },
      { path: 'diachronic/:projectId',
        name: 'diachronic',
        component: () => import('pages/BpmnPage.vue'),
        props: true
      },
      { path: 'project/:projectId', name: 'project', component: () => import('pages/ProjectPage.vue'), props: true },
      { path: 'init', name: 'init', component: () => import('pages/InitPage.vue'), props: { source: './OPEVA-G1.upmt' } },
      { path: 'example', name: 'example', component: () => import('pages/InitPage.vue'), props: { source: './assets/example.upmt' } },
      { path: 'debug', name: 'debug', component: () => import('pages/DebugPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
