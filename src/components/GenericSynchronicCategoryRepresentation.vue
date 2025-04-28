<template>
  <div ref="container"
       :class="[ 'genericsynchroniccategory-container', `genericsynchroniccategory-${category.name}` ]"
       :data-genericsynchroniccategory="category.name">

    <div class="genericsynchroniccategory"
         :style="{ backgroundColor: category.color }"
         v-if="category"
         :data-genericsynchroniccategory="category.name">

      <div class="genericsynchroniccategory-children">
        <div v-for="c in category.children" :key="c.name">
          <GenericSynchronicCategoryRepresentation
            :category="c">
          </GenericSynchronicCategoryRepresentation>
        </div>
      </div>

      <div class="genericsynchroniccategory-relation">
        <SpecificSynchronicCategoryRelation
          :type="abstractionType"
          :childrenCount="category.children.length">
           </SpecificSynchronicCategoryRelation>
      </div>

      <div class="genericsynchroniccategory-header">
          <DragElement
            type="specificsynchroniccategory"
            :data="category.instances[0].id">
            <span class="genericsynchroniccategory-name">{{ category.name }}
            </span>
          </DragElement>
          <q-tooltip>{{ category.name }}</q-tooltip>
      </div>

      <div
        v-if="!category.isRoot"
        class="genericsynchroniccategory-filler"
        >
        <SpecificSynchronicCategoryRelation :childrenCount="1" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import DragElement from './DragElement.vue'
  import SpecificSynchronicCategoryRelation from './SpecificSynchronicCategoryRelation.vue'
  // import { useProjectStore } from 'stores/projectStore'
  // const store = useProjectStore()

  const props = defineProps({
      category: { type: Object, default: null }
  })

  // FIXME: detect inconsistencies
  const abstractionType = computed(() => props.category.instances[0].abstractionType)
</script>

<style scoped>
  .genericsynchroniccategory {
       margin: 0;
       padding: 0;
       display: flex;
       flex-direction: row;
       flex: 1;
       height: 100%;
  }
  .genericsynchroniccategory-children {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-self: center;
  }
  .genericsynchroniccategory-container {
      display: flex;
      flex-direction: row;
  }
  .genericsynchroniccategory-header {
      user-select: none;
      cursor: pointer;
      border: 1px solid black;
      overflow: hidden;
      font-size: 10px;
      width: 50px !important;
      height: 14px !important;
      align-self: center;
  }
  .genericsynchroniccategory-relation,
  .genericsynchroniccategory-filler {
      margin: 0;
      padding: 0;
      width: 10px;
      line-height: 14px;
  }
</style>
