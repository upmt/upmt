<template>
  <div class="schemaCategory" :data-descriptem="category.id">
    <q-icon
      ref="handle"
      class="categorymodel-handle"
      size="xs"
      name="mdi-tag-outline"></q-icon> {{ category.name }}
  </div>
</template>

<script setup lang="ts">
import CategoryModel from 'stores/models/categorymodel'

defineProps({
    category: { type: CategoryModel, default: null }
});
</script>

<style>
  .categorymodel-handle {
      opacity: .5;
  }
  .categorymodel-handle:hover {
      opacity: .7;
  }
</style>
