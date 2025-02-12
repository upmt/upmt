<template>
  <div ref="container"
       :class="[ 'synchronicspecificcategory-container', `synchronicspecificcategory-${categoryId}` ]"
       :data-synchronicspecificcategory="categoryId">

    <div class="synchronicspecificcategory"
         :style="{ backgroundColor: category.color }"
         v-if="category"
         :data-synchronicspecificcategory="categoryId">

      <div class="synchronicspecificcategory-children">
        <div v-for="c in category.children" :key="c.id">
          <SynchronicSpecificCategoryOverview
            :categoryId="c.id">
          </SynchronicSpecificCategoryOverview>
        </div>
      </div>

      <div class="synchronicspecificcategory-relation">
           <SynchronicSpecificCategoryRelation
             :childrenCount="category.children.length">
           </SynchronicSpecificCategoryRelation>
      </div>

      <div class="synchronicspecificcategory-header">
        <span class="synchronicspecificcategory-name">{{ category.name }}
        </span>
      </div>

      <div
        v-if="category.parentId"
        class="synchronicspecificcategory-filler"
        >
      <SynchronicSpecificCategoryRelation :childrenCount="1" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import SynchronicSpecificCategoryRelation from './SynchronicSpecificCategoryRelation.vue'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()

  const props = defineProps({
      categoryId: { type: String, default: "" },
      layout: { type: String, default: "vertical" }
  })

  const category = computed(() => store.getSynchronicSpecificCategory(props.categoryId))
</script>

<style scoped>
  .synchronicspecificcategory {
       margin: 0;
       padding: 0;
       display: flex;
       flex-direction: row;
       flex: 1;
       height: 100%;
  }
  .synchronicspecificcategory-children {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-self: center;
  }
  .synchronicspecificcategory-container {
      display: flex;
      flex-direction: row;
  }
  .synchronicspecificcategory-header {
      border: 1px solid black;
      overflow: hidden;
      font-size: 8px;
      width: 50px !important;
      height: 12px !important;
      align-self: center;
  }
  .synchronicspecificcategory-relation,
  .synchronicspecificcategory-filler {
      margin: 0;
      padding: 0;
      width: 10px;
      line-height: 14px;
  }
</style>
