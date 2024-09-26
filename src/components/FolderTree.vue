<template>
  <QTree
    v-if="folder"
    ref="treeref"
    :nodes="nodes"
    node-key="key"
    dense
    no-transition
    items-stretch
    default-expand-all
    v-model:expanded="expanded"
    @lazy-load="onLazyLoad">

    <template v-slot:default-header="prop">
      <div class="col-grow row items-stretch space-between menu-item">
        <DropZone types="upmt/descriptem upmt/categoryinstance upmt/moment"
                  :data="prop.node.key"
                  @descriptem="droppedDescriptem"
                  @categoryinstance="droppedCategoryInstance"
                  @moment="droppedMoment">
          <DragElement
            :type="prop.node.dragType"
            :data="prop.node.id"
            >
            <q-icon :name="prop.node.icon || 'share'" class="q-mr-sm" />
            <div class="text-primary">{{ prop.node.label }}</div>
          </DragElement>
        </DropZone>
        <q-space />
        <q-btn
          class="menu-icon"
          size="xs"
          @click.stop
          flat
          round
          dense
          icon="more_vert">
          <q-menu
            touch-position>
            <q-list dense style="min-width: 100px">
              <q-item
                v-for="[label, action] in itemActions(prop.node)"
                clickable
                :key="label"
                @click="action($event)"
                v-close-popup>
                {{ label }}
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </template>

  </QTree>

</template>

<script setup lang="ts">

  import { computed, ComputedRef, nextTick, ref } from 'vue'
  import ModelFolder from 'stores/models/modelfolder'
  import { useProjectStore } from 'stores/projectStore'
  import { useQuasar, QTreeLazyLoadParams, QTreeNode, QTree } from 'quasar'
  import DropZone from './DropZone.vue'
  import DragElement from './DragElement.vue'

  const $q = useQuasar()

  const store = useProjectStore()

  const props = defineProps({
      folder: {
          type: ModelFolder,
          default: null
      }
  })

  const treeref = ref<QTree | null>(null)

  const expanded = ref([ 'root' ])

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const getKey = (element: any): string => {
      if (element.$modelEntity) {
          return `${element.$modelEntity()}:${element.id}`
      } else {
          return element.toString()
      }
  }

  const nodes: ComputedRef<QTreeNode[]> = computed(() => {
      if (props.folder) {
          const key = getKey(props.folder)
          return [
              {
                  key,
                  id: props.folder.id,
                  label: props.folder.name,
                  lazy: true
              }
          ]
      } else {
          return [{}]
      }
  })

  const onLazyLoad = function (params: QTreeLazyLoadParams) {
      const { node, key, done } = params
      // const { node, key, done, fail } = params;
      console.log("lazy load", treeref.value, key, node);
      // console.log("lazy load", treeref.value, key, node, treeref.value?.lazy);
      (window as any).tree = treeref.value;
      (window as any).expanded = expanded.value;
      const [entitytype, entityid] = node.key.split(':', 2)

      if (entitytype === 'projects') {
          const project = store.getProject(entityid)
          if (project) {
              done(project.interviews.map((i): QTreeNode => {
                  return {
                      label: i.label,
                      key: getKey(i),
                      id: i.id,
                      icon: 'mdi-graph-outline',
                      lazy: true
                  }
              }))
          } else {
              done([{
                  label: "No project",
                  key: "no_project",
                  realId: "no_project",
                  icon: 'mdi-graph-outline'
              }])
          }
      } else if (entitytype === 'modelfolders') {
          const folder = store.getFolder(entityid)
          if (!folder) {
              done([])
          } else {
              const folders = (folder.folders ?? []).map(f => ({
                  label: f.name,
                  key: getKey(f),
                  id: f.id,
                  icon: 'mdi-folder-outline',
                  lazy: true
              }));
              const categorymodels = (folder.categorymodels ?? []).map(cm => ({
                  label: cm.name,
                  key: getKey(cm),
                  id: cm.id,
                  dragType: "categorymodel",
                  icon: 'mdi-tag-outline',
                  lazy: false,
                  children: cm.properties?.map(p => ({
                      label: p.name,
                      key: getKey(p),
                      id: p.id,
                      dragType: 'property',
                      icon: 'mdi-note-text-outline',
                      lazy: false
                  }))
              }))
              const momentmodels = (folder.momentmodels ?? []).map(m => ({
                  label: m.name,
                  key: getKey(m),
                  id: m.id,
                  dragType: "momentmodel",
                  icon: 'mdi-alpha-m-box-outline',
                  lazy: false,
                  children: m.categorymodels?.map(c => ({
                      label: c.name,
                      id: getKey(c),
                      realId: c.id,
                      children: c.properties?.map(p => ({
                          label: p.name,
                          dragType: 'property',
                          key: getKey(p),
                          id: p.id,
                          lazy: false
                      }))
                  }))
              }))
              done(folders.concat(categorymodels, momentmodels))
          }
      } else {
          // Catch-all entity
          return []
      }
  }

  /*
  // Unloading function, from https://github.com/quasarframework/quasar/issues/6950#issuecomment-623886061
  function unloadKey (key: string) {
  // Unload a key, so that the QTree component refetches its content
  if (treeref.value) {
  const baseNode = treeref.value.getNodeByKey(key)
  if (baseNode !== void 0) {
  const unload = (node: QTreeNode) => {
  delete treeref.value.lazy[node.label]
  if (node.children) {
  node.children.forEach(unloadKey)
  }
  }
  unloadKey(baseNode)
  baseNode.children = []
  }
  }
  }
  */

  function refresh (node: QTreeNode) {
      // See
      // https://stackoverflow.com/questions/77367253/how-to-programmatically-trigger-quasar-qtree-lazyload-event
      const tree = treeref.value
      if (tree) {
          console.log("Refresh", { tree, node, children: node.children })
          delete node.children
          tree.setExpanded(node.key, false)
          nextTick(() => {
              tree.setExpanded(node.key, true)
          })
      }
  }

  function droppedMoment (momentId: string, data: string) {
      console.log("Dropped Moment", momentId, " to ", data)
      // store.moveMoment(momentId, props.momentId, Number(data))
  }
  function droppedCategoryInstance (categoryinstanceId: string, data: string) {
      console.log("Dropped CategoryInstance", categoryinstanceId, " to ", data)
  }
  function droppedDescriptem (descriptemId: string, data: string) {
      console.log("Dropped Descriptem ", descriptemId, " to ", data)
  }

  function getValue (value: string,
                     callback: (newValue: string) => any,
                     title = 'Enter the new name') {
      $q.dialog({
          title,
          prompt: {
              model: value,
              type: 'text'
          },
          cancel: true,
          persistent: true
      }).onOk(name => {
          callback(name)
      })
  }

  function renameFolder (node: QTreeNode) {
      getValue(node.label ?? '',
               name => {
                   store.updateModelFolder(node.id, { name })
                   refresh(node.key)
               })
  }

  function renameCategoryModel (node: QTreeNode) {
      getValue(node.label ?? '',
               name => {
                   store.updateCategoryModel(node.id, { name })
                   refresh(node.key)
               })
  }

  function renamePropertyModel (node: QTreeNode) {
      getValue(node.label ?? '',
               name => {
                   store.updatePropertyModel(node.id, { name })
                   refresh(node.key)
               })
  }

  function addModelFolder (node: QTreeNode) {
      getValue('',
               name => {
                   store.addModelFolder(node.id, name)
               },
               'Enter the new folder name')
  }

  function addCategoryModel (node: QTreeNode) {
      getValue('',
               name => {
                   store.addCategoryModel(node.id, name)
               },
               'Enter the new category name')
  }

  function addPropertyModel (node: QTreeNode) {
      getValue('',
               name => {
                   store.addPropertyModel(node.id, name)
                   refresh(node.key)
               },
               'Enter the new property name')
  }

  function deleteModelFolder (node: QTreeNode) {
      store.deleteModelFolder(node.id)
  }

  function deleteCategoryModel (node: QTreeNode) {
      store.deleteCategoryModel(node.id)
  }

  function deletePropertyModel (node: QTreeNode) {
      store.deletePropertyModel(node.id)
  }

  function changeCategoryModelColor (node: QTreeNode) {
      getValue('',
               color => {
                   store.updateCategoryModel(node.id, { color })
                   refresh(node.key)
               },
               'Enter the new color name (FIXME - color picker is coming)')
  }

  type NamedActions = [ name: string, action: (element: any) => void][]
  function itemActions (node: QTreeNode): NamedActions {
      if (node.key.startsWith('modelfolders:')) {
          return [
              [ `Refresh`, () => refresh(node) ],
              [ `Rename ${node.label}`, () => renameFolder(node) ],
              [ `Add a folder`, () => addModelFolder(node) ],
              [ `Add a category`, () => addCategoryModel(node) ],
              [ `Delete ${node.label}`, () => deleteModelFolder(node) ]
          ]
      } else if (node.key.startsWith('categorymodels:')) {
          return [
              [ `Rename ${node.label}`, () => renameCategoryModel(node) ],
              [ `Add a property`, () => addPropertyModel(node) ],
              [ `Change color`, () => changeCategoryModelColor(node) ],
              [ `Delete ${node.label}`, () => deleteCategoryModel(node) ]
          ]
      } else if (node.key.startsWith('propertymodels:')) {
          return [
              [ `Rename ${node.label}`, () => renamePropertyModel(node) ],
              [ `Delete ${node.label}`, () => deletePropertyModel(node) ]
          ]
      }
      return []
  }
</script>
<style scoped>
  .menu-icon {
    opacity: 0;
  }
  .menu-item:hover .menu-icon {
      opacity: 1;
  }
</style>
