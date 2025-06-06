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
      border: 1px solid black;
      overflow: hidden;
      font-size: 8px;
      width: 50px !important;
      height: var(--overview-height) !important;
      align-self: center;
  }
  .genericsynchroniccategory-relation,
  .genericsynchroniccategory-filler {
      margin: 0;
      padding: 0;
      width: 10px;
      line-height: calc(var(--overview-height) + 2px);
  }
  .genericsynchroniccategory-filler {
      height: calc(var(--overview-height) + 2px);
      align-self: center;
      flex: 1;
  }
  .genericsynchroniccategory-header.has-error {
      border: 2px solid red;
  }
  .root-generic-synchronic-category:hover {
      border: 1px dashed #ddd;
  }
</style>
