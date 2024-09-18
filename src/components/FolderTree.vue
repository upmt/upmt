<template>
  <q-tree
    v-if="folder"
    :nodes="nodes"
    node-key="id"
    dense
    items-stretch
    @lazy-load="onLazyLoad">
    <template v-slot:default-header="prop">
      <div class="col-grow row items-stretch space-between menu-item">
        <DropZone types="upmt/descriptem upmt/categoryinstance upmt/moment"
                  :data="prop.node.id"
                  @descriptem="droppedDescriptem"
                  @categoryinstance="droppedCategoryInstance"
                  @moment="droppedMoment">
          <DragElement
            :type="prop.node.dragType"
            :data="prop.node.realId"
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
                @click="action"
                v-close-popup>
                {{ label }}
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </template>
  </q-tree>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import ModelFolder from 'stores/models/modelfolder'
import { useProjectStore } from 'stores/projectStore'
import { QTreeLazyLoadParams, QTreeNode } from 'quasar'
import DropZone from './DropZone.vue'
import DragElement from './DragElement.vue'

const pstore = useProjectStore()

const props = defineProps({
    folder: {
        type: ModelFolder,
        default: null
    }
})

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
        return [
            {
                id: getKey(props.folder),
                label: props.folder.name,
                lazy: true
            }
        ]
    } else {
        return [{}]
    }
  })

const onLazyLoad = function (params: QTreeLazyLoadParams) {
    const { node, done } = params
    // const { node, key, done, fail } = params;
    // console.log("lazy load", node, key, done, fail)
    const [entitytype, entityid] = node.id.split(':', 2)

    if (entitytype === 'projects') {
        const project = pstore.getProject(entityid)
        if (project) {
            done(project.interviews.map((i): QTreeNode => {
                return {
                    label: i.label,
                    id: getKey(i),
                    realId: i.id,
                    icon: 'mdi-graph-outline',
                    lazy: true
                }
            }))
        } else {
            done([{
                    label: "No project",
                    id: "no_project",
                    realId: "no_project",
                    icon: 'mdi-graph-outline'
            }])
        }
    } else if (entitytype === 'modelfolders') {
        const folder = pstore.getFolder(entityid)
        if (!folder) {
            done([])
        } else {
            const folders = (folder.folders ?? []).map(f => ({
                label: f.name,
                id: getKey(f),
                realId: f.id,
                icon: 'mdi-folder-outline',
                lazy: true
            }));
            const categorymodels = (folder.categorymodels ?? []).map(cm => ({
                label: cm.name,
                id: getKey(cm),
                realId: cm.id,
                dragType: "categorymodel",
                icon: 'mdi-tag-outline',
                lazy: false,
                children: cm.properties?.map(p => ({
                    label: p.name,
                    id: getKey(p),
                    realId: p.id,
                    dragType: 'property',
                    icon: 'mdi-note-text-outline',
                    lazy: false
                }))
            }))
            const momentmodels = (folder.momentmodels ?? []).map(m => ({
                label: m.name,
                id: getKey(m),
                realId: m.id,
                dragType: "momentmodel",
                icon: 'mdi-note-outline',
                lazy: false,
                children: m.categorymodels?.map(c => ({
                    label: c.name,
                    id: getKey(c),
                    realId: c.id,
                    children: c.properties?.map(p => ({
                        label: p.name,
                        dragType: 'property',
                        id: getKey(p),
                        realId: p.id,
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

  function debug (element: any) {
      console.log(element)
  }

  type NamedActions = [ name: string, action: (element: any) => void][]
  function itemActions (node: QTreeNode): NamedActions {
      console.log("Item actions", node)
      return [
          [ `Create ${node.label}`, debug ],
          [ `Delete ${node.label}`, debug ]
      ]
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
