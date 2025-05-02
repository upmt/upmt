<template>
  <div ref="container"
       :class="[ 'genericsynchroniccategory-container', `genericsynchroniccategory-${category.name}` ]"
       :data-genericsynchroniccategory="category.name">

    <div class="genericsynchroniccategory"
         :class="{ 'root-generic-synchronic-category': category.isRoot }"
         :style="{ backgroundColor: color }"
         v-if="category"
         :data-genericsynchroniccategory="category.name">

      <div class="genericsynchroniccategory-children">
        <div v-for="c in category.children" :key="c.name">
          <GenericSynchronicCategoryRepresentation
            :category="c">
          </GenericSynchronicCategoryRepresentation>
        </div>
      </div>

      <div class="genericsynchroniccategory-relation"
           v-if="category.children">
        <SpecificSynchronicCategoryRelation
          :type="abstractionType"
          :childrenCount="category.childrenNames.length">
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
  import SpecificSynchronicCategory from 'stores/models/specificsynchroniccategory'
  import DragElement from './DragElement.vue'
  import SpecificSynchronicCategoryRelation from './SpecificSynchronicCategoryRelation.vue'
  // import { useProjectStore } from 'stores/projectStore'
  // const store = useProjectStore()

  const props = defineProps({
      category: { type: Object, default: null }
  })

  // FIXME: detect inconsistencies
  const abstractionType = computed(() => props.category.instances[0].abstractionType)

  const color = computed(() => {
      const colors = props.category.instances
            .map((ssc: SpecificSynchronicCategory) => ssc.color)
            .filter((color: string | undefined) => !!color)
      return colors[0] ?? ""
  })
</script>

<style scoped>
  .genericsynchroniccategory {
       margin: 1px 0;
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
  .root-generic-synchronic-category:hover {
      border: 1px dashed #ddd;
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
  .genericsynchroniccategory-header.has-error {
      border: 2px solid red;
  }
  .genericsynchroniccategory-relation,
  .genericsynchroniccategory-filler {
      margin: 0;
      padding: 0;
      width: 10px;
      line-height: 14px;
  }
</style>
