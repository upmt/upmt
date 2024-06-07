<template>
  <div class="category"
       :style="{ backgroundColor: category.color }"
       v-if="category"
       :data-category="category.id">

    <div class="category-metadata">
      <q-icon size="xs" name="mdi-tag-outline"></q-icon>
      <span class="category-name">{{ category.name }}</span>
    </div>

    <div class="category-justification">
      <JustificationTextRepresentation :justification="category.justification">
      </JustificationTextRepresentation>
    </div>

    <div class="category-properties">
      <div v-for="p in category.properties" :key="p.id">
        <PropertyTextRepresentation :property="p">
        </PropertyTextRepresentation>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import Category from 'stores/models/category'
import JustificationTextRepresentation from './JustificationTextRepresentation.vue'
import PropertyTextRepresentation from './PropertyTextRepresentation.vue'

defineProps({
    category: { type: Category, default: null }
})
</script>

  <style>
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
      min-height: 120px;
      margin: 1em;
      display: flex;
      flex-direction: column;
      border: 1px solid grey;
  }
</style>
