<template>
  <div class="categoryinstance"
       :style="{ backgroundColor: categoryinstance.color }"
       v-if="categoryinstance"
       :data-categoryinstance="categoryinstance.id">

    <div class="categoryinstance-metadata">
        <DragElement
          type="categoryinstance"
          :data="categoryinstanceId">
          <q-icon
            ref="handle"
            class="categoryinstance-handle"
            size="xs"
            @click.meta="debug"
            name="mdi-tag-outline"></q-icon>
          <span class="categoryinstance-name">{{ categoryinstance.name }}</span>
        </DragElement>
    </div>

    <div class="categoryinstance-justification">
      <JustificationTextRepresentation :justificationId="categoryinstance.justification.id">
      </JustificationTextRepresentation>
    </div>

    <div class="categoryinstance-properties">
      <div v-for="p in categoryinstance.properties" :key="p.id">
        <PropertyTextRepresentation :propertyId="p.id">
        </PropertyTextRepresentation>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import JustificationTextRepresentation from './JustificationTextRepresentation.vue'
import PropertyTextRepresentation from './PropertyTextRepresentation.vue'
import { computed } from 'vue'
import { useProjectStore } from 'stores/projectStore'
import DragElement from './DragElement.vue'

const store = useProjectStore()

const props = defineProps({
    categoryinstanceId: { type: String, default: "" }
})
const categoryinstance = computed(() => store.getCategoryInstance(props.categoryinstanceId))

function debug () {
    (window as any).categoryinstance = categoryinstance.value
    console.log("Category instance", categoryinstance.value?.toJSON())
}

</script>

<style scoped>
  .categoryinstance-name {
    font-weight: bold;
  }
  .categoryinstance-metadata {
    text-align: center;
  }
  .categoryinstance-children {
    list-style: none;
    min-width: 200px;
    display: flex;
    flex-direction: column;
  }
  .categoryinstance-children.horizontal {
      flex-direction: row;
  }
  .categoryinstance {
      min-width: 200px;
      min-height: 40px;
      margin: 2px;
      display: flex;
      flex-direction: column;
      border: 1px solid grey;
  }
  .categoryinstance-handle {
      opacity: .5;
      cursor: pointer;
  }
  .categoryinstance-handle:hover {
      opacity: .7;
  }
</style>
