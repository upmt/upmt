<template>
  <div class="editor-wrapper">
    <div class="toolbar">
      <button @click="handleExport">Export XML</button>
    </div>
    <div ref="container" class="canvas">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BpmnModeler from 'bpmn-js/lib/Modeler'

// Import Modeler-specific styles
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'

const sourceXml = defineModel<string | null>()

const container = ref<HTMLElement | null>(null)

let modeler: BpmnModeler | null = null

const renderDiagram = async (xml: string) => {
    if (!xml || !modeler)
        return
    try {
        console.log("Rendering ", xml)
        await modeler.importXML(xml)
    } catch (err) {
        console.error('Error loading XML', err)
    }
}

onMounted(() => {
    if (container.value ===  null)
        return
    modeler = new BpmnModeler({
        container: container.value
    })

    if (sourceXml.value) {
        renderDiagram(sourceXml.value).catch(error => console.log("Rendering error", error))
    }
    /*

    // Optional: Emit changes automatically on every edit
    if (modeler) {
        modeler.on('commandStack.changed', async () => {
            if (modeler) {
                const { xml } = await modeler.saveXML({ format: true })
                console.log("Updated xml")
                sourceXml.value = xml
            }
        })
        }
        */
})

const handleExport = async () => {
    if (modeler) {
        const { xml } = await modeler.saveXML({ format: true })
        console.log('Modified XML:', xml)
        sourceXml.value = xml
    }
}

onBeforeUnmount(() => {
    if (modeler) modeler.destroy()
})
</script>

<style scoped>
.editor-wrapper {
    height: 80vh;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
}

.toolbar {
    padding: 10px;
    background: #f4f4f4;
    border-bottom: 1px solid #ccc;
}

.canvas {
    flex-grow: 1;
}

/* Ensure the palette (sidebar) is visible */
:deep(.djs-palette) {
    top: 20px;
    left: 20px;
}
</style>
