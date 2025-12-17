<template>
  <div class="descriptems">
    <q-table
      style="height: 80vh"
      dense
      flat bordered
      title="Descriptems"
      :rows="descriptems"
      :columns="columns"
      color="primary"
      row-key="id"
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
    >
      <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          @click="exportTable"
        />
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'

  import { useProjectStore } from 'stores/projectStore'

  const store = useProjectStore()

  const props = defineProps<{
      projectId: string | null,
  }>()

  const descriptems = computed(() => store.getDescriptemsByProject(props.projectId ?? ""))

  const columns = [
      { name: 'interview',
        label: 'Interview',
        field: (row: any) => row.interview.name,
        sortable: true },
      { name: 'text',
        label: 'Text',
        classes: 'column-small',
        headerClasses: 'column-small',
        align: "left" as const,
        field: (row: any) => row.text,
        sortable: true },
      { name: 'start',
        label: 'Start',
        field: (row: any) => row.startIndex,
        sortable: true },
      { name: 'end',
        label: 'End',
        field: (row: any) => row.endIndex,
        sortable: true },
      { name: 'moment',
        label: 'Moment',
        field: (row: any) => row.moment?.name,
        sortable: true },
      { name: 'category',
        label: 'Category',
        field: (row: any) => row.specificsynchroniccategory?.name,
        sortable: true },
      { name: 'creator',
        label: 'Creator',
        field: 'creator',
        sortable: true },
      { name: 'contributor', label: 'Contributor', field: 'contributor', sortable: true },
      { name: 'created', label: 'Created', field: 'created', sortable: true },
      { name: 'modified', label: 'Modified', field: 'modified', sortable: true },
      ]

  const pagination = ref({
      rowsPerPage: 0
  })

  function exportTable () {
      console.log(descriptems.value)
  }
</script>

<style>
  .column-large {
    width: 400px !important;
    overflow-x: hidden;
  }
  .column-medium {
    width: 300px !important;
    overflow-x: hidden;
  }
  .column-small {
      width: 200px !important;
    overflow-x: hidden;
  }
</style>
