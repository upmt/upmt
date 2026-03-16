<template>
  <div class="synchronic-graph">
    <vue-mermaid-string :value="diagram" />
    <pre>{{ diagram }}</pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import VueMermaidString from 'vue-mermaid-string'

import { stringToId } from 'stores/util'
import { useProjectStore } from 'stores/projectStore'

const props = defineProps<{
    projectId: string,
}>()

const store = useProjectStore()

const project = computed(() => {
    if (props.projectId) {
        store.activateProject(props.projectId)
        const p = store.getFullProject(props.projectId)
        return p
    } else {
        return null
    }
})

function genericModelToMermaid () {
    const graphs = store.getGenericSynchronicGraphs (props.projectId)

    if (graphs && graphs.byName) {
        return `---
${project.value?.name ?? "No project"} ${Object.values(graphs.byName).length}
---
flowchart LR\n` + Object.values(graphs.byName).map(category => {
    const children = [ ...category.childrenNames].map(childName => {
        return `  ${stringToId(category.name)}["${category.name}"] ---> ${stringToId(childName)}["${childName}"]`
    }).join("\n")
    return children
}).filter(line => line).join("\n") }
    else {
        return "flowchart TD\nNo graph"
    }
}

const diagram = computed(() => {
    return genericModelToMermaid()
})

</script>

<style>
</style>
