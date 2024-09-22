<template>
  <div class="categorymodel-container"
       v-if="categorymodel"
       :data-descriptem="categorymodel.id">
    <q-expansion-item
      class="categorymodel-body"
      dense
      dense-toggle
      expand-icon-toggle
      switch-toggle-side
      v-model="expand"
      header-class="header-class"
      :title="categorymodel.name"
      :content-inset-level=".2"
      >

      <template v-slot:header>
        <DragElement
          type="categorymodel"
          :data="categorymodelId">
          <q-icon
            ref="handle"
            class="categorymodel-handle"
            size="xs"
            name="mdi-tag-outline" />
          <span
            class="categorymodel-label">
            {{ categorymodelName }}
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
        </DragElement>
      </template>

      <div class="propertymodel-list">
        <PropertyModelRepresentation
          v-for="pm in categorymodel.properties"
          :key="pm.id"
          propertymodelId="pm.id"
          />
      </div>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import DragElement from './DragElement.vue'
  import PropertyModelRepresentation from './PropertyModelRepresentation.vue'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()

  const props = defineProps({
      categorymodelId: { type: String, default: null }
  })

  const categorymodel = computed(() => store.getCategoryModel(props.categorymodelId))

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

</script>

<style>
  .categorymodel-handle {
      opacity: .5;
      cursor: pointer;
  }
  .categorymodel-handle:hover {
      opacity: .7;
  }
</style>
