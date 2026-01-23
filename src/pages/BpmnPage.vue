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

import BpmnEditor from 'components/BpmnEditor.vue'
// @ts-ignore
import { BpmnModdle } from 'bpmn-moddle';
// @ts-ignore
import { layoutProcess } from 'bpmn-auto-layout'

const bpmnXml = ref('')

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const treeData: TreeNode = {
  name: "Root Task",
  children: [
      { name: "Child A", children: [{ name: "Grandchild A1", children: [ { name: "Foo" }, { name: "Bar" } ] }] },
      { name: "Child B" }
  ]
}

const moddle = new BpmnModdle()

/**
 * Converts a tree to BPMN XML with automatic layout
 */
async function convertTreeToBpmn(tree: TreeNode): Promise<string> {
  // 1. Setup the basic BPMN structure
  const definitions = moddle.create('bpmn:Definitions', {
    targetNamespace: 'http://bpmn.io/schema/bpmn',
    rootElements: []
  });

  const process = moddle.create('bpmn:Process', { id: 'Process_1', isExecutable: true });
  definitions.get('rootElements').push(process);
  const flowElements = process.get('flowElements');

  // 2. Helper to create Sequence Flows
  const createFlow = (source: any, target: any) => {
    const flow = moddle.create('bpmn:SequenceFlow', {
      id: `Flow_${source.id}_${target.id}`,
      sourceRef: source,
      targetRef: target
    });
    flowElements.push(flow);
    return flow;
  };

  // 3. Recursive traversal to build the logical graph
  let nodeCount = 0;

  const buildGraph = (node: any, parentElement = null) => {
    const taskId = `Activity_${++nodeCount}`;
    const task = moddle.create('bpmn:Task', { id: taskId, name: node.name });
    flowElements.push(task);

    if (parentElement) {
      createFlow(parentElement, task);
    }

    if (node.children && node.children.length > 0) {
      // If multiple children, optionally insert a Gateway
      const gateway = moddle.create('bpmn:ExclusiveGateway', { id: `Gateway_${++nodeCount}` });
      flowElements.push(gateway);
      createFlow(task, gateway);

      node.children.forEach((child: any) => {
        buildGraph(child, gateway);
      });
    }
  };

  // Initialize with a Start Event
  const startEvent = moddle.create('bpmn:StartEvent', { id: 'StartEvent_1' });
  flowElements.push(startEvent);

  // Map the tree
  buildGraph(tree, startEvent)

  // 4. Export to XML first (without DI)
  const { xml: rawXml } = await moddle.toXML(definitions)

  // 5. Apply Auto-Layout
  // The layout engine parses the XML and calculates the X/Y coordinates
  const diagramXml = await layoutProcess(rawXml)

  return diagramXml
}

async function handleGenerate () {
    bpmnXml.value = await convertTreeToBpmn(treeData)
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
