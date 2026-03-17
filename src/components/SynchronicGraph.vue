<template>
  <div class="synchronic-graph"
       v-if="project"
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

      <span class="q-pr-sm">Mode</span>
      <q-btn-toggle
        size="xs"
        v-model="mode"
        :options="[ { label: 'Diagram', value: 'diagram' },
                  { label: 'Flowchart', value: 'flowchart' } ]">
      </q-btn-toggle>

       <q-checkbox left-label v-model="projectAsRoot" label="Project as root" />

       <q-checkbox left-label v-model="withDescriptems" label="With descriptems" />
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

import { groupBy, timestampAdd, stringToId } from 'stores/util'
import { useProjectStore } from 'stores/projectStore'

const props = defineProps<{
    projectId: string,
}>()

const store = useProjectStore()

const container = ref()

const direction = ref('TD')

const mode = ref('diagram')

const withDescriptems = ref(false)

const projectAsRoot = ref(false)

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
    aggregation: "-->"
}
const DIAGRAM_ARROWS: Record<string, string> = {
    "generic": "--",
    specialization: "<|--",
    aggregation: "o--"
}

function genericModelToClassDiagram () {
    const graphs = store.getGenericSynchronicGraphs (props.projectId)
    if (graphs && graphs.byName) {
        const header = `---
  config:
    class:
      hideEmptyMembersBox: true
---
classDiagram
  direction ${direction.value}
`
        // Dict of descriptems arrays indexed by SSC id
        const descriptems: Record<string, any[]> = {}
        if (withDescriptems.value) {
            Object.assign(descriptems, groupBy(store.getDescriptemsByProject(props.projectId).filter(descriptem => (descriptem as any).specificsynchroniccategory), descriptem => (descriptem as any).specificsynchroniccategory.id))
        }
        const classInfo = Object.values(graphs.byName).map(category => {
            const className = `  class \`${category.name}\``
            let descriptemInfo = ""
            if (withDescriptems.value) {
                const textsByInstance = category.instances
                    .map(ssc => (descriptems[ssc.id] ?? []).map(descriptem => descriptem.shorttext))
                    .flat()
                    .filter(text => text.length)
                descriptemInfo = textsByInstance
                    .map(text => `  \`${category.name}\`: "${text}"`)
                    .join("\n")
            }
            const children = [ ...category.childrenNames].map(childName => {
                return `  \`${category.name}\` ${DIAGRAM_ARROWS[category.abstractionType]} \`${childName}\``
            }).join("\n")
            //const color = category.color ? `\n  style \`${category.name}\` fill:${category.color}` : ""
            const color = ""
            return `${className}${descriptemInfo.length ? "\n" : ""}${descriptemInfo}${children.length ? "\n" : ""}${children}${color}`
        }).join("\n")
        let rootInfo = ""
        if (projectAsRoot.value) {
            // We want to have the project as root -> add a new dependency for all root instances
            rootInfo = Object.values(graphs.byName).filter(category => category.isRoot).map(category => {
                return `  Project -- \`${category.name}\``
            }).join("\n")
        }
        return `${header}${classInfo}\n${rootInfo}`
    } else {
        return `classDiagram
  class "No graph"`
    }
}

function genericModelToFlowchart () {
    const graphs = store.getGenericSynchronicGraphs (props.projectId)
    if (graphs && graphs.byName) {

        const header = `---
${project.value?.name ?? "No project"} ${Object.values(graphs.byName).length}
---
flowchart ${direction.value}\n`

        const childInfo = Object.values(graphs.byName).map(category => {
            const children = [ ...category.childrenNames].map(childName => {
                return `  ${stringToId(category.name)}["${category.name}"] ${ARROWS[category.abstractionType]} ${stringToId(childName)}["${childName}"]`
            }).join("\n")
            const color = category.color ? `\n  style ${stringToId(category.name)} fill:${category.color}` : ""
            return `${children}${color}`
        }).filter(line => line).join("\n")

        let rootInfo = ""

        if (projectAsRoot.value) {
            // We want to have the project as root -> add a new dependency for all root instances
            rootInfo = "\n" + Object.values(graphs.byName).filter(category => category.isRoot).map(category => {
                return `  Project --- ${stringToId(category.name)}`
            }).join("\n")
        }

        return `${header}${childInfo}${rootInfo}`
    }
    else {
        return "flowchart ${direction.value}\nNo graph"
    }
}

const diagram = computed(() => {
    if (mode.value == 'diagram')
        return genericModelToClassDiagram()
    else
        return genericModelToFlowchart()
})

function doDownload() {
    const basename = timestampAdd(`${props.projectId}.svg`)
    if (container.value) {
        const svgElement = container.value.querySelector("svg[id*='mermaid']")
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
