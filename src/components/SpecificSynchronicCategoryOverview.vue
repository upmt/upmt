<template>
  <div ref="container"
       :class="[ 'specificsynchroniccategory-container', `specificsynchroniccategory-${categoryId}` ]"
       :data-specificsynchroniccategory="categoryId">

    <div class="specificsynchroniccategory"
         :style="{ backgroundColor: category.color }"
         v-if="category"
         :data-specificsynchroniccategory="categoryId">

      <div class="specificsynchroniccategory-children">
        <div v-for="c in category.children" :key="c.id">
          <SpecificSynchronicCategoryOverview
            :categoryId="c.id">
          </SpecificSynchronicCategoryOverview>
        </div>
      </div>

      <div class="specificsynchroniccategory-relation">
        <SpecificSynchronicCategoryRelation
          :type="category.abstractionType"
          :childrenCount="category.children.length">
           </SpecificSynchronicCategoryRelation>
      </div>

      <div class="specificsynchroniccategory-header">
        <span class="specificsynchroniccategory-name">{{ category.name }}
        </span>
      </div>

      <div
        v-if="category.parentId"
        class="specificsynchroniccategory-filler"
        >
      <SpecificSynchronicCategoryRelation :childrenCount="1" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import SpecificSynchronicCategoryRelation from './SpecificSynchronicCategoryRelation.vue'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()

  const props = defineProps({
      categoryId: { type: String, default: "" },
      layout: { type: String, default: "vertical" }
  })

  const category = computed(() => store.getSpecificSynchronicCategory(props.categoryId))
</script>

<style scoped>
  .specificsynchroniccategory {
       margin: 0;
       padding: 0;
       display: flex;
       flex-direction: row;
       flex: 1;
       height: 100%;
  }
  .specificsynchroniccategory-children {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-self: center;
  }
  .specificsynchroniccategory-container {
      display: flex;
      flex-direction: row;
  }
  .specificsynchroniccategory-header {
      border: 1px solid black;
      overflow: hidden;
      font-size: 8px;
      width: 50px !important;
      height: var(--overview-height) !important;
      align-self: center;
  }
  .specificsynchroniccategory-relation,
  .specificsynchroniccategory-filler {
      margin: 0;
      padding: 0;
      width: 10px;
      line-height: calc(var(--overview-height) + 2px);
  }
  .specificsynchroniccategory-filler {
      height: calc(var(--overview-height) + 2px);
      flex: 1;
  }
</style>
