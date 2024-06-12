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
                lazy: true
            }
        }))
    } else if (entitytype === 'modelfolders') {
        const folder = pstore.getFolder(entityid)
        console.log("Got folder", entityid, folder)
        if (!folder) {
            done([])
        } else {
            done([{
                label: "Folders",
                id: `${node.id}-folders`,
                children: folder.folders?.map(f => ({
                    label: f.name,
                    id: getKey(f),
                    lazy: true
                }))
            },
                  {
                      label: "Categories",
                      id: `${node.id}-categories`,
                      children: folder.categories?.map(c => ({
                          label: c.name,
                          id: getKey(c),
                          lazy: true
                      }))
                  },
                  {
                      label: "Moments",
                      id: `${node.id}-moments`,
                      children: folder.moments?.map(m => ({
                          label: m.name,
                          id: getKey(m),
                          lazy: true
                      }))
                  }
                 ])
        }
    } else {
        // Catch-all entity
        return []
    }
  }

</script>
