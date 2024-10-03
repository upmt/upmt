<template>
  <div class="bg-white text-black">
    <q-icon
      size="xs"
      name="mdi-tag-outline" />
    <strong>{{ categorymodel?.name }}</strong>

    <ul v-if="categorymodel"
        class="moment-list">
      <li v-for="moment in moments"
          :key="moment.id">
        <q-icon
          size="xs"
          name="mdi-alpha-m-box-outline">
        </q-icon>
        {{ moment.name }}
        <br>
        <ul v-if="moment.justification"
            class="descriptem-list">
          <li v-for="descriptem in moment.justification.descriptems"
              :key="descriptem.id">
            <DescriptemRepresentation :descriptemId="descriptem.id" />
          </li>
        </ul>
        <div v-for="categoryinstance in moment.categoryinstances"
             class="categoryinstance-list"
             :key="categoryinstance.id">
          <div v-if="categoryinstance.model.id == categorymodelId">
            <ul v-if="categoryinstance.justification"
                class="descriptem-list">
              <li v-for="descriptem in categoryinstance.justification.descriptems"
                  :key="descriptem.id">
                <DescriptemRepresentation :descriptemId="descriptem.id" />
              </li>
            </ul>
          </div>

          <ul class="property-list">
            <li v-for="property in categoryinstance.properties"
                :key="property.id">
              <q-icon
                size="xs"
                name="mdi-note-text-outline"></q-icon>
              <span>{{ property.name }}</span> : <span>{{ property.value }}</span>
              <ul class="descriptem-list">
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
  .categoryinstance-list {
    margin-left: 3em;
  }
  .descriptem-list,
  .moment-list,
  .property-list {
    list-style: none;
  }
</style>
