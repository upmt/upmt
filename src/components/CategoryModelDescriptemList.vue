<template>
  <div class="bg-white text-black">
    <span class="categorymodel-name">Category <em>{{ categorymodel?.name }}</em></span>

    <ul v-if="categorymodel">
      <li v-for="moment in moments"
          :key="moment.id">
        <q-icon
          size="xs"
          name="mdi-alpha-m-box-outline">
        </q-icon>
        {{ moment.name }}
        <br>
        <ul v-if="moment.justification">
          <li v-for="descriptem in moment.justification.descriptems"
              :key="descriptem.id">
            <DescriptemRepresentation :descriptemId="descriptem.id" />
          </li>
        </ul>
        <br>
        <strong>Properties</strong>
        <div v-for="categoryinstance in moment.categoryinstances"
             :key="categoryinstance.id">
          <q-icon
            size="xs"
            name="mdi-tag-outline" />
          {{ categoryinstance.name }}

          <ul v-if="categoryinstance.justification">
            <li v-for="descriptem in categoryinstance.justification.descriptems"
                :key="descriptem.id">
              <DescriptemRepresentation :descriptemId="descriptem.id" />
            </li>
          </ul>

          <ul v-if="categoryinstance.model.id == categorymodelId">
            <li v-for="property in categoryinstance.properties"
                :key="property.id">
              <q-icon
                size="xs"
                name="mdi-note-text-outline"></q-icon>
              <span>{{ property.name }}</span> : <span>{{ property.value }}</span>
              <ul>
                <li v-for="descriptem in property.justification.descriptems"
                    :key="descriptem.id">
                  <DescriptemRepresentation :descriptemId="descriptem.id" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import DescriptemRepresentation from './DescriptemRepresentation.vue'

  const store = useProjectStore()

  const props = defineProps({
      categorymodelId: { type: String, default: "" }
  })

  const categorymodel = computed(() => store.getCategoryModel(props.categorymodelId))

  const moments = computed(() => store.getCategoryModelMoments(props.categorymodelId))

</script>

<style scoped>
</style>
