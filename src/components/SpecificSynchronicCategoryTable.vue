<template>
  <div class="specificsynchroniccategories">
    <q-table
      style="height: 80vh"
      dense
      flat bordered
      title="Specific Synchronic Categories"
      :rows="filteredCategories"
      :columns="columns"
      color="primary"
      row-key="id"
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
    >
      <template v-slot:top-right>
        <q-input
          dense
          clearable
          type="search"
          label="Filter text"
          v-model="textFilter" />
        <q-input
          dense
          clearable
          type="search"
          label="Filter moment"
          v-model="momentFilter" />
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
  import { exportFile } from 'quasar'
  import { useProjectStore } from 'stores/projectStore'

  import { exportDataAsCsv } from 'stores/util'

  import SpecificSynchronicCategory from 'stores/models/specificsynchroniccategory'
  import Interview from 'stores/models/interview'

  const store = useProjectStore()

  const props = defineProps<{
      projectId: string | null,
  }>()

  const textFilter = ref("")

  const momentFilter = ref("")

  type Row = {
      category?: SpecificSynchronicCategory,
      interview: Interview | undefined
  }
  const categories = computed((): Row[] => {
      const interviews = Object.fromEntries(store.getInterviewsByProject(props.projectId ?? "").map(interview => [ interview.id, interview ]))

      return store.getSpecificSynchronicCategoriesByProject(props.projectId ?? "").map(category => {
          return {
              category,
              interview: interviews[category.interviewId]
          }
      })
  })

  const filteredCategories = computed(() => {
      let output = categories.value
      const textFilterValue = textFilter.value
      if (textFilterValue) {
          output = output.filter(row => row.category?.name.includes(textFilterValue))
      }
      return output
  })

  const columns = [
      { name: 'interview',
        label: 'Interview',
        field: (row: any) => row.interview.label,
        sortable: true },
      { name: 'name',
        label: 'Name',
        classes: 'column-small',
        headerClasses: 'column-small',
        align: "left" as const,
        field: (row: any) => row.category.name,
        sortable: true },
      { name: 'creator',
        label: 'Creator',
        field: (row: any) => row.category.creator,
        sortable: true },
      { name: 'contributor',
        label: 'Contributor',
        field: (row: any) => row.category.contributor,
        sortable: true },
      { name: 'created',
        label: 'Created',
        field: (row: any) => row.category.created,
        sortable: true },
      { name: 'modified',
        label: 'Modified',
        field: (row: any) => row.category.modified,
        sortable: true },
      ]

  const pagination = ref({
      rowsPerPage: 0
  })

  function exportTable () {
      console.log(filteredCategories.value)

      const content = exportDataAsCsv(columns, filteredCategories.value)
      exportFile(
          'specificsynchroniccategories-export.csv',
          content,
          'text/csv'
      )
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
