<template>
  <div class="category"
       :style="{ backgroundColor: category.color }"
       v-if="category"
       :data-category="category.id">

    <div class="category-metadata">
        <DragElement
          type="category"
          :data="categoryId">
          <q-icon
            ref="handle"
            class="category-handle"
            size="xs"
            name="mdi-tag-outline"></q-icon>
          <span class="category-name">{{ category.name }}</span>
        </DragElement>
    </div>

    <div class="category-justification">
      <JustificationTextRepresentation :justification="category.justification">
      </JustificationTextRepresentation>
    </div>

    <div class="category-properties">
      <div v-for="p in category.properties" :key="p.id">
        <PropertyTextRepresentation :propertyId="p.id">
        </PropertyTextRepresentation>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import JustificationTextRepresentation from './JustificationTextRepresentation.vue'
import PropertyTextRepresentation from './PropertyTextRepresentation.vue'
import { computed } from 'vue'
import { useProjectStore } from 'stores/projectStore'
import DragElement from './DragElement.vue'

const store = useProjectStore()

const props = defineProps({
    categoryId: { type: String, default: "" }
})
const category = computed(() => store.getCategory(props.categoryId))
</script>

<style scoped>
  .category-name {
    font-weight: bold;
  }
  .category-metadata {
    text-align: center;
  }
  .category-children {
    list-style: none;
    min-width: 200px;
    display: flex;
    flex-direction: column;
  }
  .category-children.horizontal {
      flex-direction: row;
  }
  .category {
      min-width: 200px;
      min-height: 40px;
      margin: 2px;
      display: flex;
      flex-direction: column;
      border: 1px solid grey;
  }
  .category-handle {
      opacity: .5;
      cursor: pointer;
  }
  .category-handle:hover {
      opacity: .7;
  }
</style>
