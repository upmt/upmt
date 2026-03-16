<template>
  <div class="synchronic-graph"
       ref="container">
    <q-toolbar
      class="print-removed">

      <q-btn
        size="xs"
        class="q-mx-md"
        title="Download SVG"
        icon="mdi-download"
        @click="doDownload()">Download SVG</q-btn>

      <span class="q-pr-sm">Direction</span>
      <q-btn-toggle
        size="xs"
        v-model="direction"
        :options="[ { icon: 'mdi-pan-horizontal', value: 'LR' },
                  { icon: 'mdi-pan-vertical', value: 'TD' } ]">
      </q-btn-toggle>
    </q-toolbar>

    <vue-mermaid-string
      :value="diagram" />
    <pre class="expertMode">
      {{ diagram }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { exportFile } from 'quasar'

import VueMermaidString from 'vue-mermaid-string'

import { timestampAdd, stringToId } from 'stores/util'
import { useProjectStore } from 'stores/projectStore'

const props = defineProps<{
    projectId: string,
}>()

const store = useProjectStore()

const container = ref()

const direction = ref('TD')

const project = computed(() => {
    if (props.projectId) {
        store.activateProject(props.projectId)
        const p = store.getFullProject(props.projectId)
        return p
    } else {
        return null
    }
})

const ARROWS: Record<string, string> = {
    "generic": "---",
    specialization: "---o",
    aggregation: "--->"
}

function genericModelToMermaid () {
    const graphs = store.getGenericSynchronicGraphs (props.projectId)
    if (graphs && graphs.byName) {
        return `---
${project.value?.name ?? "No project"} ${Object.values(graphs.byName).length}
---
flowchart ${direction.value}\n` + Object.values(graphs.byName).map(category => {
    const children = [ ...category.childrenNames].map(childName => {

          return `  ${stringToId(category.name)}["${category.name}"] ${ARROWS[category.abstractionType]} ${stringToId(childName)}["${childName}"]`
    }).join("\n")
    const color = category.color ? `\n  style ${stringToId(category.name)} fill:${category.color}` : ""
    return `${children}${color}`
}).filter(line => line).join("\n") }
    else {
        return "flowchart ${direction.value}\nNo graph"
    }
}

const diagram = computed(() => {
    return genericModelToMermaid()
})

function doDownload() {
    const basename = timestampAdd(`${props.projectId}.svg`)
    if (container.value) {
        const svgElement = container.value.querySelector("svg")
        if (svgElement) {
            const status = exportFile(basename, svgElement.outerHTML)
            // svgOutput.value.outerHTML)
            if (status !== true) {
                // browser denied it
                console.error(`Error: ${status}`)
            }
        }
    }
}
</script>

<style>
</style>
