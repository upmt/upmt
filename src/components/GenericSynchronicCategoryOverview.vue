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
            :projectId="projectId"
            :layout="layout"
            :currentInterviewId="currentInterviewId"
            :category="c">
          </GenericSynchronicCategoryOverview>
        </div>
      </div>

      <div class="genericsynchroniccategory-relation"
           v-if="category.children?.length">
        <SpecificSynchronicCategoryRelation
          :type="abstractionType"
          :direction="layout"
          :childrenCount="category.children?.length">
        </SpecificSynchronicCategoryRelation>
      </div>

      <div class="genericsynchroniccategory-header"
           :class="{ 'has-error': category.errors?.length }">
        <DragElement
          class="flex justify-center items-center content-center"
          type="genericsynchroniccategory"
          :data="category.name">
          <span class="genericsynchroniccategory-name">{{ category.name }}
          </span>
        </DragElement>
          <q-tooltip  class="bg-red-5" anchor="top right" self="top left" v-if="category.errors?.length">
            {{ category.name }}
            <div v-for="error, key in category.errors"
                 :key="key">
              {{ error }}
            </div>
          </q-tooltip>
          <q-tooltip anchor="top right" self="top left" v-else>
            {{ category.name }}
          </q-tooltip>
      </div>

      <div
        v-if="!category.isRoot"
        class="genericsynchroniccategory-filler"
        >
        <SpecificSynchronicCategoryRelation
          :direction="layout"
          :childrenCount="1" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import DragElement from './DragElement.vue'
  import SpecificSynchronicCategoryRelation from './SpecificSynchronicCategoryRelation.vue'

  import type { GenericCategory } from 'stores/projectStore'

  // import { useProjectStore } from 'stores/projectStore'
  // const store = useProjectStore()

  const props = withDefaults(defineProps<{
      projectId: string,
      category:  GenericCategory,
      currentInterviewId: string | null,
      layout: string
  }>(), {
      layout: 'horizontal'
  })

  // FIXME: detect inconsistencies
  const abstractionType = computed(() => props.category.instances[0]?.abstractionType || "")
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
  .vertical .genericsynchroniccategory {
      flex-direction: column-reverse;
      align-items: center;
  }
  .genericsynchroniccategory-children {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-self: center;
      }
  .vertical .genericsynchroniccategory-children {
      flex-direction: row;
      position: relative;
      }
  .genericsynchroniccategory-container {
      display: flex;
      flex-direction: row;
      }
  .vertical .genericsynchroniccategory-container {
      margin: 0 4px;
  }
  .genericsynchroniccategory-name {
     align-self: center;
     text-overflow: ellipsis;
     overflow: hidden;
     white-space: nowrap;
  }
  .genericsynchroniccategory-header {
      border: 1px solid black;
      overflow: hidden;
      font-size: var(--overview-font-size);
      width: var(--overview-width);
      height: var(--overview-height) !important;
      align-self: center;
  }
  .genericsynchroniccategory-relation,
  .genericsynchroniccategory-filler {
      margin: 0;
      padding: 0;
      width: 10px;
      line-height: calc(var(--overview-height) + 2px);
      display: flex;
      height: -webkit-fill-available;
      height: -moz-available;
  }
  .vertical .genericsynchroniccategory-relation {
      width: 80%;
      height: calc(var(--overview-height) + 2px);
  }
  .genericsynchroniccategory-filler {
      height: calc(var(--overview-height) + 2px);
      align-self: center;
      flex: 1;
  }
  .vertical .genericsynchroniccategory-filler {
      flex-direction: column;
  }
  .genericsynchroniccategory-header.has-error {
      border: 2px solid red;
  }
  .root-generic-synchronic-category:hover {
      border: 1px dashed #ddd;
  }
</style>
