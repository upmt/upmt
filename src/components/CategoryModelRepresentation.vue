<template>
  <div class="categorymodel-container row"
       v-if="categorymodel"
       :data-descriptem="categorymodel.id">
    <q-expansion-item
      class="categorymodel-body"
      dense
      dense-toggle
      :duration="0"
      expand-icon-toggle
      switch-toggle-side
      v-model="expand"
      header-class="header-class"
      :title="categorymodel.name"
      :content-inset-level="1"
      >

      <template v-slot:header>
        <DragElement
          class="categorymodel-name"
          @click="debug"
          type="categorymodel"
          :data="categorymodelId">
          <q-icon
            :style="{ backgroundColor: categorymodel.color }"
            ref="handle"
            class="categorymodel-handle"
            size="xs"
            @click="displayDescriptemList"
            name="mdi-tag-outline" />
          <span
            class="categorymodel-label">
            {{ categorymodelName }} (<q-btn
                                       size="sm"
                                       dense>
              <q-menu class="column">
                <q-btn v-for="moment in currentMoments"
                       :label="moment.name"
                       align="left"
                       no-caps
                       :key="moment.id"
                       @click="highlightMoment(moment.id)"
                       size="sm"
                       :style="{ backgroundColor: moment.color }"
                       icon="mdi-alpha-m-box-outline">
                </q-btn>
              </q-menu>
              {{ currentMoments.length }}</q-btn> /
            <q-btn
              size="sm"
              dense>
              <q-menu class="column">
                <div class="row items-left no-wrap"
                     :key="name"
                     v-for="[ name, count ] in byInterview(moments)">
                  <q-btn class="full-width justify-content-between"
                         align="left"
                         no-caps
                         size="sm">
                    <span class="interview-name">{{name}}</span>
                  </q-btn>
                  <strong class="interview-moment-count">{{ count }}</strong>
                </div>
              </q-menu>
              {{ moments.length }}</q-btn>)
            <q-popup-edit
              ref="popupEdit"
              v-model="categorymodelName"
              auto-save
              v-slot="scope">
              <q-input v-model="scope.value"
                       @focus="($event.target as HTMLInputElement).select()"
                       dense autofocus counter @keyup.enter="scope.set" />
            </q-popup-edit>
          </span>
          <ColorizeIcon
            v-model="categorymodelColor"
            />
          <q-space />
          <ElementMenu
            :actions="menuActions" />
        </DragElement>
      </template>

      <div class="categorymodel-children">
        <PropertyModelRepresentation
          v-for="pm in categorymodel.properties"
          :key="pm.id"
          :propertymodelId="pm.id"
          />
      </div>
    </q-expansion-item>
    <q-dialog
      v-model="details">
      <div class="q-pa-lg bg-white">
        <CategoryModelDescriptemList
          :categorymodelId="categorymodelId" />
        <q-btn flat
               label="Close"
               color="primary" v-close-popup />
      </div>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import CategoryModelDescriptemList from './CategoryModelDescriptemList.vue'
  import ColorizeIcon from './ColorizeIcon.vue'
  import DragElement from './DragElement.vue'
  import ElementMenu from './ElementMenu.vue'
  import PropertyModelRepresentation from './PropertyModelRepresentation.vue'
  import Moment from 'stores/models/moment'
  import Interview from 'stores/models/interview'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import { groupBy } from './util'

  const istore = useInterfaceStore()

  const { highlightedMomentId } = storeToRefs(istore)

  const store = useProjectStore()

  const props = defineProps({
      categorymodelId: { type: String, default: null },
      currentInterviewId: { type: String, default: "" }
  })

  const categorymodel = computed(() => store.getCategoryModel(props.categorymodelId))

  const popupEdit = ref(null)

  function debug () {
      (window as any).categorymodel = categorymodel.value
      console.log("categorymodel", categorymodel.value)
  }

  const moments = computed(() => store.getCategoryModelMoments(props.categorymodelId))

  const currentMoments = computed(() => moments.value.filter(m => m.interviewId === props.currentInterviewId))

  const details = ref(false)

  const categorymodelName = computed({
      get () {
          return categorymodel.value ? categorymodel.value.name : ""
      },
      set (value: string) {
          store.updateCategoryModel(props.categorymodelId, { name:value })
      }
  })

  const categorymodelColor = computed({
      get () {
          return categorymodel.value ? categorymodel.value.color : ""
      },
      set (color: string) {
          store.updateCategoryModel(props.categorymodelId, { color })
      }
  })

  const expand = computed({
      get () {
          return categorymodel.value ? categorymodel.value.isExpanded : true
      },
      set (isExpanded: boolean) {
          store.updateCategoryModel(props.categorymodelId, { isExpanded })
      }
  })

  function highlightMoment (momentId: string) {
      if (highlightedMomentId.value === momentId) {
          highlightedMomentId.value = ""
      } else {
          highlightedMomentId.value = momentId
      }
  }

  function byInterview (moments: Array<Moment>) {
      const repo = store.getRepo()
      const names = Object.fromEntries(repo.Interview.get().map((i: Interview) => [ i.id, i.label ]))

      return Object.entries(groupBy(moments, 'interviewId'))
          .map(([id, arr]) => [ names[id], (arr as Array<any>).length ])
  }

  function displayDescriptemList () {
      details.value = true
  }

  const menuActions = [
      [ "Rename", () => popupEdit.value && (popupEdit.value as any).show() ],
      [ "Add a property", () => store.addPropertyModel(props.categorymodelId, "newprop") ],
      [ "Delete", () => store.deleteModelFolder(props.categorymodelId) ]
  ]
</script>

<style scoped>
  .categorymodel-handle {
      opacity: .5;
      cursor: pointer;
  }
  .categorymodel-handle:hover {
      opacity: .7;
  }
  .categorymodel-name:hover .on-name-hover {
      opacity: 1;
  }
  .categorymodel-children {
      border-left: 1px dotted black;
  }
  .q-list--dense > .q-item, .q-item--dense {
    min-height: 18px;
    padding: 0 2px !important;
    line-height: 1;
  }
  .interview-name {
      font-weight: 200;
  }
</style>
