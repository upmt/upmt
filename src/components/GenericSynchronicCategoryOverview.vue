<template>
  <div ref="container"
       :class="[ 'genericsynchroniccategory-container', `genericsynchroniccategory-${category.name}` ]"
       :data-genericsynchroniccategory="category.name">

    <div class="genericsynchroniccategory"
         :class="{ 'root-generic-synchronic-category': category.isRoot }"
         :style="{ backgroundColor: category.color }"
         v-if="category"
         :data-genericsynchroniccategory="category.name">

      <div class="genericsynchroniccategory-children">
        <div v-for="c in category.children" :key="c.name">
          <GenericSynchronicCategoryOverview
            :category="c">
          </GenericSynchronicCategoryOverview>
        </div>
      </div>

      <div class="genericsynchroniccategory-relation"
           v-if="category.children?.length">
        <SpecificSynchronicCategoryRelation
          :type="abstractionType"
          :childrenCount="category.children?.length">
           </SpecificSynchronicCategoryRelation>
      </div>

      <div class="genericsynchroniccategory-header"
           :class="{ 'has-error': category.errors?.length }">
          <DragElement
            type="genericsynchroniccategory"
            :data="category.name">
            <span class="genericsynchroniccategory-name">{{ category.name }}
            </span>
          </DragElement>
          <q-tooltip>{{ category.name }}
            <div v-if="category.errors">
              <span v-for="error, key in category.errors"
                    :key="key">
                {{ error }}
              </span>
            </div>
          </q-tooltip>
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
       margin: 1px 0;
       padding: 0;
       display: flex;
       flex-direction: row;
  }
  .genericsynchroniccategory-children {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-self: center;
      flex: 0 0 auto;
  }
  .genericsynchroniccategory-container {
      display: flex;
      flex-direction: row;
  }
  .root-generic-synchronic-category:hover {
      border: 1px dashed #ddd;
  }
  .genericsynchroniccategory-header {
      flex: 0 0 auto;
      user-select: none;
      cursor: pointer;
      border: 1px solid black;
      overflow: hidden;
      font-size: 10px;
      width: 50px !important;
      height: 14px !important;
      align-self: center;
  }
  .genericsynchroniccategory-header.has-error {
      border: 2px solid red;
  }
  .genericsynchroniccategory-relation {
      flex: 0 0 auto;
      margin: 0;
      padding: 0;
      width: 10px;
      line-height: 14px;
  }
  .genericsynchroniccategory-filler {
      margin: 0;
      padding: 0;
      width: 10px;
      line-height: 14px;
      flex: 0 0 auto;
  }
</style>
