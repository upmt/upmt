<template>
  <div class="edited-model-container flex no-wrap column"
       v-if="editedSpecificSynchronicModel">
    <q-toolbar class="row toolbar">
      <div>
        <q-btn
          icon="mdi-close"
          flat
          round
          dense
          size="md"
          class="float-right"
          @click="closeEditedModel">
        </q-btn>
      </div>

      <q-toolbar-title class="row">
        <div>Editing&nbsp;</div>
        <div v-if="editedSpecificSynchronicModel.moment">
          synchronic description of
          <q-icon
            @click="istore.setHighlightedMomentId(editedSpecificSynchronicModel.moment.id)"
            size="xs"
            name="mdi-alpha-d-box-outline">
          </q-icon>
          <strong>{{ editedSpecificSynchronicModel.moment.name }}
            <q-popup-edit v-model="editedSpecificSynchronicModelName" auto-save v-slot="scope">
              <MomentNameInput @change="scope.cancel"
                               :moment="editedSpecificSynchronicModel.moment" />
            </q-popup-edit>
          </strong>
        </div>
        <div v-else>
          <strong>
            <ElementNameInput
              :element="editedSpecificSynchronicModel"
              label="Name">
            </ElementNameInput>
          </strong>
        </div>
        <span v-if="isDetachedModelEmpty">
          <q-btn
            @click="updateDetachedModel(editedSpecificSynchronicModel)">
            Generate from dynamic model
          </q-btn>
        </span>
        <q-btn-toggle
          size="xs"
          v-model="editViewMode"
          :options="[ { icon: 'mdi-pan-horizontal', value: 'horizontal' },
                    { icon: 'mdi-pan-vertical', value: 'vertical' } ]">
        </q-btn-toggle>
      </q-toolbar-title>
    </q-toolbar>
    <div class="model-representation">
      <SpecificSynchronicModelRepresentation
        :layout="editViewMode"
        :isGeneric="isEditedModelDetached"
        :modelId="modelId" />
    </div>
  </div>
</template>
<script setup lang="ts">

  import { computed, ref } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import type { GraphInfo } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  import SpecificSynchronicModel from 'stores/models/specificsynchronicmodel'

  import ElementNameInput from './ElementNameInput.vue'
  import MomentNameInput from './MomentNameInput.vue'
  import SpecificSynchronicModelRepresentation from './SpecificSynchronicModelRepresentation.vue'

  const store = useProjectStore()

  const istore = useInterfaceStore()

  const props = defineProps<{
      modelId: string,
      genericGraphs: GraphInfo,
  }>()

  const editedSpecificSynchronicModel = computed(() => {
      return store.getSpecificSynchronicModel(props.modelId)
  })

  const isEditedModelDetached = computed(() => {
      return !!editedSpecificSynchronicModel.value && !!editedSpecificSynchronicModel.value.detachedModelId
  })

  const isDetachedModelEmpty = computed(() => {
      return isEditedModelDetached.value && editedSpecificSynchronicModel.value?.categories.length == 0
  })

  const editViewMode = ref('horizontal')

  const editedSpecificSynchronicModelName = computed({
      get () {
          if (editedSpecificSynchronicModel.value?.moment) {
              return editedSpecificSynchronicModel.value.moment.name
          } else {
              return editedSpecificSynchronicModel.value?.name ?? ""
          }
      },
      set (value: string) {
          if (editedSpecificSynchronicModel.value?.moment) {
              store.updateMoment(editedSpecificSynchronicModel.value.moment.id, { name:value })
          } else if (editedSpecificSynchronicModel.value) {
              store.updateElement(editedSpecificSynchronicModel.value, { name:value })
          }
      }
  })

  function updateDetachedModel (model: SpecificSynchronicModel | null) {
      if (model) {
          store.buildSynchronicModelFromGraphs (model, props.genericGraphs)
      }
  }

  function closeEditedModel () {
      istore.setEditedSpecificSynchronicModelId("")
  }

</script>

<style scoped>
</style>
