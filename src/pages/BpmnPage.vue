<template>
  <q-page padding>
    <q-btn @click="handleGenerate">Generate</q-btn>
    <BpmnEditor v-if="bpmnXml" v-model="bpmnXml" />
    <details>
      <summary>View Raw XML</summary>
      <pre>{{ bpmnXml }}</pre>
    </details>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import { storeToRefs } from 'pinia'
// import { useInterfaceStore } from 'stores/interface'

import { useProjectStore } from 'stores/projectStore'

import BpmnEditor from 'components/BpmnEditor.vue'
// @ts-ignore
import { BpmnModdle } from 'bpmn-moddle';
// @ts-ignore
import { layoutProcess } from 'bpmn-auto-layout'

const props = defineProps({
    projectId: {
        type: String,
        default: ""
    }
})

const store = useProjectStore()

const bpmnXml = ref('')

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

/*
const treeData: TreeNode = {
  name: "Root Task",
  children: [
      { name: "Child A", children: [{ name: "Grandchild A1", children: [ { name: "Foo" }, { name: "Bar" } ] }] },
      { name: "Child B" }
  ]
}
*/

const moddle = new BpmnModdle()

async function convertTreeToBpmn(tree: TreeNode): Promise<string> {
  const definitions = moddle.create('bpmn:Definitions', {
    targetNamespace: 'http://bpmn.io/schema/bpmn'
  });

  const process = moddle.create('bpmn:Process', {
    id: 'Process_1',
    isExecutable: true
  });

  definitions.rootElements = [process];
  process.flowElements = [];

  /**
   * FIX: This helper now explicitly populates the incoming/outgoing
   * arrays of the source and target elements.
   */
  const createFlow = (source: any, target: any): void => {
    const flow = moddle.create('bpmn:SequenceFlow', {
      id: `Flow_${source.id}_${target.id}`,
      sourceRef: source,
      targetRef: target
    }) as any;

    // Ensure the nodes know about the flow
    if (!source.outgoing) source.outgoing = [];
    if (!target.incoming) target.incoming = [];

    source.outgoing.push(flow);
    target.incoming.push(flow);

    process.flowElements.push(flow);
  };

  let nodeCount = 0;

  const buildGraph = (node: TreeNode, parentElement = null): void => {
    const task = moddle.create('bpmn:Task', {
      id: `Activity_${++nodeCount}`,
      name: node.name
    })
    process.flowElements.push(task);

    if (parentElement) {
      createFlow(parentElement, task);
    }

    if (node.children && node.children.length > 0) {
      const gateway = moddle.create('bpmn:ExclusiveGateway', {
        id: `Gateway_${++nodeCount}`
      })
        process.flowElements.push(gateway);

      createFlow(task, gateway);

      node.children.forEach(child => {
        buildGraph(child, gateway);
      });
    }
  };

  const startEvent = moddle.create('bpmn:StartEvent', { id: 'StartEvent_1' })
  process.flowElements.push(startEvent);

  buildGraph(tree, startEvent);

  const { xml: rawXml } = await moddle.toXML(definitions);

  // The layout engine now has a complete graph to calculate DI
  return await layoutProcess(rawXml);
}

import type { GenericCategory } from 'stores/projectStore'

async function handleGenerate () {
    const projectGraphs = store.getGenericSynchronicGraphs(props.projectId)

    const genericCategoryToNode =  (category: GenericCategory): TreeNode => ({
        name: category.name,
        children: category.children?.map((child: GenericCategory) => genericCategoryToNode(child)) || []
    })
    bpmnXml.value = await convertTreeToBpmn({
        name: "root",
        children: projectGraphs.categories.map(genericCategoryToNode)
    })
}
      /*
const bpmnXml = ref(`<?xml version="1.0" encoding="UTF-8"?>

<definitions id="definitions"
             xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"
             xmlns:flowable="http://flowable.org/bpmn"
             targetNamespace="Examples" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="
             http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">


    <process id="camelProcess">

        <startEvent id="start"/>
        <sequenceFlow id="flow1" sourceRef="start" targetRef="serviceTask1"/>

        <serviceTask id="serviceTask1" flowable:type="camel"/>
        <sequenceFlow id="flow2" sourceRef="serviceTask1" targetRef="receive"/>

        <receiveTask id="receive" name="Wait State" />

        <sequenceFlow id="flow3" sourceRef="receive" targetRef="serviceTask2"/>

        <serviceTask id="serviceTask2" flowable:type="camel"/>

        <sequenceFlow id="flow4" sourceRef="serviceTask2" targetRef="end"/>
        <endEvent id="end"/>

    </process>

</definitions>`)
*/
</script>
