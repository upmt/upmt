<template>
  <div class="modelfolder-container"
       v-if="modelfolder"
       :style="{ backgroundColor: modelfolder.color }"
       :data-modelfolder="modelfolderId">

    <q-expansion-item
      class="modelfolder-body"
      dense
      dense-toggle
      :duration="0"
      expand-icon-toggle
      switch-toggle-side
      v-model="expand"
      header-class="header-class"
      :title="modelfolder.name"
      :content-inset-level=".2"
      >

      <template v-slot:header>
        <DropZone data="header"
                  class="empty_padding"
                  types="upmt/categorymodel upmt/modelfolder"
                  @categorymodel="droppedCategoryModel"
                  @modelfolder="droppedModelFolder">
          <DragElement
            type="modelfolder"
            :data="modelfolderId"
            @click.meta="debug">
            <q-icon
              size="xs"
              name="mdi-folder-outline">
            </q-icon>
            <span class="modelfolder-name">{{ modelfolderName }}
              <q-popup-edit v-model="modelfolderName" auto-save v-slot="scope">
                <q-input v-model="scope.value"
                         @focus="($event.target as HTMLInputElement).select()"
                         dense autofocus counter @keyup.enter="scope.set" />
              </q-popup-edit>
              <q-btn
                class="on-name-hover"
                size="xs"
                dense flat round
                icon="colorize">
                <q-popup-proxy>
                  <q-color
                    no-header
                    no-footer
                    default-view="palette"
                    v-model="modelfolderColor"
                    />
                </q-popup-proxy>
              </q-btn>
            </span>
          </DragElement>
          <q-space />
          <ElementMenu
            :actions="menuActions" />
        </DropZone>
      </template>

      <div class="modelfolder-children">
        <div v-for="f in modelfolder.folders" :key="f.id">
          <ModelFolderRepresentation
            :currentInterviewId="currentInterviewId"
            :modelfolderId="f.id">
          </ModelFolderRepresentation>
        </div>
        <div v-for="cm in modelfolder.categorymodels" :key="cm.id">
          <CategoryModelRepresentation
            :currentInterviewId="currentInterviewId"
            :categorymodelId="cm.id" />
        </div>
        <div v-for="mm in modelfolder.momentmodels" :key="mm.id">
          <MomentModelRepresentation
            :currentInterviewId="currentInterviewId"
            :momentmodelId="mm.id" />
        </div>
      </div>

    </q-expansion-item>

  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import CategoryModelRepresentation from './CategoryModelRepresentation.vue'
  import MomentModelRepresentation from './MomentModelRepresentation.vue'
  import DropZone from './DropZone.vue'
  import DragElement from './DragElement.vue'
  import ElementMenu from './ElementMenu.vue'
  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()

  const props = defineProps({
      modelfolderId: { type: String, default: "" },
      currentInterviewId: { type: String, default: "" }
  })

  const modelfolder = computed(() => store.getFolder(props.modelfolderId))

  function debug () {
      (window as any).modelfolder = modelfolder.value
      console.log("Modelfolder", modelfolder.value)
  }

  function droppedCategoryModel (cmId: string) {
      // store.modelfolderAddCategoryModel(cmId, props.modelfolderId)
      console.log("FIXME droppedCategoryModel", cmId)
  }

  function droppedModelFolder (modelfolderId: string, where: string) {
      console.log("FIXME Dropped Modelfolder", modelfolderId, "where", where)
      // store.moveModelfolder(modelfolderId, props.modelfolderId, where)
  }

  const modelfolderName = computed({
      get () {
          return modelfolder.value ? modelfolder.value.name : ""
      },
      set (value: string) {
          store.updateModelFolder(props.modelfolderId, { name:value })
      }
  })

  const modelfolderColor = computed({
      get () {
          return modelfolder.value ? modelfolder.value.color : ""
      },
      set (color: string) {
          store.updateModelFolder(props.modelfolderId, { color })
      }
  })

  const expand = computed({
      get () {
          return modelfolder.value ? modelfolder.value.isExpanded : true
      },
      set (isExpanded: boolean) {
          store.updateModelFolder(props.modelfolderId, { isExpanded })
      }
  })

  type NamedActions = [ name: string, action: (element: any) => any][]

  const menuActions = computed(() => {
      const actions: NamedActions = [
          [ `Add a folder`, () => store.addModelFolder(props.modelfolderId, "newfolder") ],
          [ `Add a category`, () => store.addCategoryModel(props.modelfolderId, "newcategory") ]
      ]

      if (modelfolder.value && modelfolder.value.parentId) {
          actions.push([ "Delete", () => store.deleteModelFolder(props.modelfolderId) ])
      }
      return actions
  })

</script>

<style scoped>
  .header-class {
      font-weight: bold;
      text-align: center;
  }
  .modelfolder-container {
      display: flex;
      flex-direction: row;
      position: relative;
  }
  .modelfolder-body {
      display: flex;
      flex-grow: 1;
  }
  .modelfolder-children {
      list-style: none;
      min-width: 200px;
      display: flex;
      flex-direction: column;
      border-left: 1px dotted black;
  }
  .transitional {
      background-color: var(--transitional-color);
  }
  .transitional::after {
      content: ' ';
      position: absolute;
      left: calc( 50% - var(--transitional-bar-width) / 2 );
      top: 100%;
      height: 80vh;
      width: var(--transitional-bar-width);
      background-color: var(--transitional-color);
  }
  .modelfolder-handle {
      opacity: .5;
      cursor: pointer;
  }
  .modelfolder-handle:hover {
      opacity: .8;
  }
  .on-name-hover {
      opacity: 0;
  }
  .modelfolder-name:hover .on-name-hover {
      opacity: 1;
  }
  .q-list--dense > .q-item, .q-item--dense {
    min-height: 18px;
    padding: 0 2px;
  }
</style>
