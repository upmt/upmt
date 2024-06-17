<template>
  <q-tree
    :nodes="nodes"
    node-key="id"
    @lazy-load="onLazyLoad">
  </q-tree>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import ModelFolder from 'stores/models/modelfolder'
import { useProjectStore } from 'stores/projectStore'
import { QTreeLazyLoadParams, QTreeNode } from 'quasar'

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
    const { node, key, done, fail } = params;
    // const { node, done } = params
    console.log("lazy load", node, key, done, fail)
    const [entitytype, entityid] = node.id.split(':', 2)

    if (entitytype === 'projects') {
        const project = pstore.getProject(entityid)
        done(project.interviews.map((i): QTreeNode => {
            return {
                label: i.label,
                id: getKey(i),
                icon: 'mdi-graph-outline',
                lazy: true
            }
        }))
    } else if (entitytype === 'modelfolders') {
        const folder = pstore.getFolder(entityid)
        if (!folder) {
            done([])
        } else {
            const folders = (folder.folders ?? []).map(f => ({
                label: f.name,
                id: getKey(f),
                icon: 'mdi-folder-outline',
                lazy: true
            }));
            const categorymodels = (folder.categorymodels ?? []).map(cm => ({
                label: cm.name,
                id: getKey(cm),
                icon: 'mdi-tag-outline',
                lazy: false,
                children: cm.properties?.map(p => ({
                    label: p.name,
                    id: getKey(p),
                    icon: 'mdi-note-text-outline',
                    lazy: false
                }))
            }))
            const momentmodels = (folder.momentmodels ?? []).map(m => ({
                label: m.name,
                id: getKey(m),
                icon: 'mdi-note-outline',
                lazy: false,
                children: m.categorymodels?.map(c => ({
                    label: c.name,
                    id: getKey(c),
                    children: c.properties?.map(p => ({
                        label: p.name,
                        id: getKey(p),
                        lazy: false
                    }))
                }))
            }))
            console.log("Tree row", { folder, folders, categorymodels, momentmodels })
            done(folders.concat(categorymodels, momentmodels))
        }
    } else {
        // Catch-all entity
        return []
    }
  }

</script>
