<template>
  <div class="specificsynchronicmodel-vertical"
       v-if="model"
       :data-specificsynchronicmodel="modelId">
    <p class="warning">Warning: this vertical interface is in development - there are refresh issues when adding/deleting items</p>
    <vue3-org-chart class="chart"
                    @on-ready="initApi"
                    :data="nodes">
       <!-- <template #node="{item, children, open, toggleChildren}"> -->
         <template #node="{item}">
          <SpecificSynchronicCategoryRepresentation
            v-if="item.category"
            :withChildren="false"
            layout="vertical"
            :categoryId="item.category.id" />
          <div v-else>{{item.name}}</div>
          <!-- <button v-if="children.length" @click="toggleChildren"> {{ open ? '-' : '+' }}</button> -->
        </template>
    </vue3-org-chart>
  </div>
</template>

<script setup lang="ts">

    import { computed, ref } from 'vue'

    import { Vue3OrgChart } from 'vue3-org-chart'
    import 'vue3-org-chart/dist/style.css'

    import SpecificSynchronicCategoryRepresentation from 'components/SpecificSynchronicCategoryRepresentation.vue'

    import { useProjectStore } from 'stores/projectStore'

    const store = useProjectStore()

    const props = defineProps<{
        modelId: string | null,
    }>()

    const model = computed(() => props.modelId ? store.getSpecificSynchronicModel(props.modelId) : null)

    const nodes = computed(() => {
        /*
          According to
          https://raw.githubusercontent.com/bumbeishvili/sample-data/main/sample.json
          the tree is defined by an array of nodes, where each node has at least
          {
          name: "Ian Devling",
          id: "O-6066",
          parentId: "", // empty for root nodes
          size: ""
          }
        */
        // Adapt model
        const categories = props.modelId ? store.getSpecificSynchronicCategoriesByModel(props.modelId) : []
        // Add virtual single root
        const rootNode = {
            id: 'root',
            name: model.value?.name ?? '',
            parentId: "",
            category: null
        }
        // Introduce a proxy Node to be able to accomodate the virtual rootNode
        const nodes = [ rootNode,
                        ...categories.map(category => ({
                            id: category.id,
                            name: category.name,
                            parentId: category.parentId || 'root',
                            category,
                            __open: true
                        }))
                      ]
        return nodes
    })

    const chartApi = ref(null)

    // this function will be called when vue3-org-chart is ready
    // it will pass api object as argument
    // api object contains reset function and some other functions will be added in future
    const initApi = ({api}: any) => {
        chartApi.value = api
    }
</script>

<style scoped>
.chart {
    --vue3-org-chart-line-bottom: 1rem;
    --vue3-org-chart-line-top: 1rem;
    --vue3-org-chart-line-color: black;
  }
  .specificsynchronicmodel-vertical {
      flex-grow: 1;
  }
  .warning {
      color: #e04343;
  }
</style>
