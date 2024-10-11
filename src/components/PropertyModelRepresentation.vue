<template>
  <div class="propertymodel-container"
       :data-property="propertymodelId">
    <div
      v-if="propertymodel"
      class="propertymodel-header"
      row>
      <q-icon
        ref="handle"
        class="propertymodel-handle"
        size="xs"
        @click.meta="debug"
        name="mdi-note-text-outline"></q-icon>
      <div class="propertymodel-name">{{ propertymodelName }}
        <q-popup-edit
          ref="popupEdit"
          v-model="propertymodelName"
          auto-save
          v-slot="scope">
          <q-input v-model="scope.value"
                   @focus="($event.target as HTMLInputElement).select()"
                   dense autofocus counter @keyup.enter="scope.set" />
        </q-popup-edit>
      </div>
      <q-space />
      <ElementMenu
        :actions="menuActions" />
    </div>
  </div>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
  import ElementMenu from './ElementMenu.vue'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()

  const props = defineProps({
      propertymodelId: { type: String, default: "" }
  })

  const propertymodel = computed(() => store.getPropertyModel(props.propertymodelId))

  const popupEdit = ref(null)

  const propertymodelName = computed({
      get: () => propertymodel.value ? propertymodel.value.name : "",
      set: (name) => {
          store.updatePropertyModel(props.propertymodelId, { name })
      }
  })

  function debug () {
      (window as any).property = propertymodel.value
      console.log("PropertyModel", propertymodel.value?.toJSON())
  }

  const menuActions = [
      [ "Rename", () => popupEdit.value && (popupEdit.value as any).show() ],
      [ "Delete", () => store.deletePropertyModel(props.propertymodelId) ]
  ]

</script>

<style>
  .propertymodel-container {
    display: flex;
    flex-direction: column;
    min-height: 1.2em;
  }
  .propertymodel-header {
      display: flex;
      flex-direction: row;
      width: 90%;
      padding-left: 5%;
  }
  .propertymodel-handle {
      opacity: .5;
      cursor: pointer;
  }
  .propertymodel-handle:hover {
      opacity: .7;
  }
</style>
