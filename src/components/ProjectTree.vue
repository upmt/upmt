<template>
  <q-tree
    :nodes="nodes"
    node-key="id"
    @lazy-load="onLazyLoad">
  </q-tree>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import Interview from 'stores/models/interview'
import Project from 'stores/models/project'
import { useProjectStore } from 'stores/projectStore'
import { QTreeLazyLoadParams, QTreeNode } from 'quasar'

const pstore = useProjectStore()

const props = defineProps({
    project: {
        type: Project,
        default: null
    }
})

/* eslint-disable @typescript-eslint/no-explicit-any */
const getKey = (element: any): string => {
    return `${element.$modelEntity()}-${element.id}`
}

const nodes: ComputedRef<QTreeNode[]> = computed(() => {
    if (props.project) {
        return [
            {
                id: getKey(props.project),
                label: props.project.name,
                lazy: true
            }
        ]
    } else {
        return [{}]
    }
})

const onLazyLoad = function (params: QTreeLazyLoadParams) {
    const { node, done } = params;
    console.log("lazy load", node)
    const [entitytype, entityid] = node.id.split('-', 2)

    if (entitytype === 'projects') {
        const project = pstore.getProject(entityid)
        done(project.interviews.map((i: Interview): QTreeNode => {
            return {
                label: i.label,
                id: getKey(i),
                lazy: false
            }
        }))
    }
}
</script>
