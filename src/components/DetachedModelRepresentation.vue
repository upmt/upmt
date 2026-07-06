<template>
  <div class="detached-model"
       :data-id="modelId">
    <DragElement
      type="detachedmodel"
      :data="modelId"
      @click.meta="debug">
      <q-icon
        class="q-px-sm"
        flat
        dense
        size="xs"
        :name="isActive ? 'mdi-graph' : 'mdi-select-off'" />
    </DragElement>
    <q-btn
      class="detached-model-name"
      align="left"
      v-if="model"
      flat
      dense
      no-caps
      @click="editDetachedModel(model.proxy.id)"
      >
      {{ model?.proxy.name }}
    </q-btn>
    <ElementMenu
      :actions="menuActions"
      :parameter="model" />
  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  import DragElement from './DragElement.vue'
  import ElementMenu from './ElementMenu.vue'

  const store = useProjectStore()

  const istore = useInterfaceStore()

  const props = defineProps<{
      projectId: string,
      modelId: string
  }>()

  const model = computed(() => {
      const m = store.getDetachedModel(props.projectId, props.modelId)
      return m
  })

  const isActive = computed({
      get () {
          return model?.value?.proxy ? model.value.proxy.isActive : false
      },
      set (active: boolean) {
          store.setActiveDetachedModel(props.projectId, props.modelId, active)
      }
  })

  function editDetachedModel (proxyModelId: string) {
      istore.setEditedSpecificSynchronicModelId(proxyModelId)
  }

  function debug () {
      (window as any).detachedmodel = model.value;
      console.log("DetachedModel", { detachedmodel: model.value })
  }

  import type { NamedAction } from 'components/util.ts'

  const menuActions: NamedAction[] = [
      [ "Toggle active status", () => {
          isActive.value = !isActive.value
      } ],

      [ "Delete", (model) => {
          if (istore.editedSpecificSynchronicModelId === model.proxy.id) {
              editDetachedModel('')
          }
          store.deleteDetachedModel(model.id)
      }],
  ]
</script>

<style scoped>
.detached-model {
    display: flex;
    align-items: center;
}
</style>
