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
            name="mdi-tag-outline" />
          <span
            class="categorymodel-label">
            {{ categorymodelName }} (<q-btn
                                       size="sm"
                                       dense flat round>
              <q-menu>
                <q-btn v-for="moment in currentMoments"
                       :title="moment.name"
                       :key="moment.id"
                       @click="highlightMoment(moment.id)"
                       size="sm"
                       :style="{ backgroundColor: moment.color }"
                       icon="mdi-alpha-m-box-outline">
                </q-btn>
              </q-menu>
              {{ currentMoments.length }}</q-btn> / {{ moments.length }})
            <q-popup-edit v-model="categorymodelName" auto-save v-slot="scope">
              <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
            </q-popup-edit>
          </span>
          <q-btn
            class="on-name-hover"
            size="xs"
            dense flat round
            icon="colorize">
            <q-popup-proxy>
              <q-color
                no-header
                no-footer
                default-view="palette"
                v-model="categorymodelColor"
                />
            </q-popup-proxy>
          </q-btn>
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
  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import DragElement from './DragElement.vue'
  import ElementMenu from './ElementMenu.vue'
  import PropertyModelRepresentation from './PropertyModelRepresentation.vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  const istore = useInterfaceStore()

  const { highlighted } = storeToRefs(istore)

  const store = useProjectStore()

  const props = defineProps({
      categorymodelId: { type: String, default: null },
      currentInterviewId: { type: String, default: "" }
  })

  const categorymodel = computed(() => store.getCategoryModel(props.categorymodelId))

  function debug () {
      (window as any).categorymodel = categorymodel.value
      console.log("categorymodel", categorymodel.value)
  }

  const moments = computed(() => store.getCategoryModelMoments(props.categorymodelId))

  const currentMoments = computed(() => moments.value.filter(m => m.interviewId === props.currentInterviewId))

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
      if (highlighted.value === momentId) {
          highlighted.value = ""
      } else {
          highlighted.value = momentId
      }
  }

  const menuActions = [
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
</style>
