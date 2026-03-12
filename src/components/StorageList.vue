<template>
  <q-list
    :key="refreshKey"
    class="storage">
    <strong :title="`${files.length} versions`">Stored versions</strong>
    <q-btn
      @click="doRefresh"
      size="xs"
      title="Refresh the list of stored versions"
      icon="mdi-refresh"/>
    <q-item
      v-if="!files.length">
        <q-icon
          size="xs"
          name="mdi-semantic-web" />
        No version stored in the browser storage.
    </q-item>
    <q-item
      class="column"
      v-for="info in files"
      :key="info.basename">
      <span>
        <q-icon
          size="xs"
          name="mdi-semantic-web" />
        {{ info.basename }}
      </span>
      <span align="right">
        <q-btn-dropdown
          size="xs"
          title="Delete"
          dropdown-icon="none"
          icon="mdi-delete">
          <span>Delete {{ info.basename }}?</span>
          <q-list align="right" class="row justify-end">
            <q-btn
              v-close-popup
              class="bg-red q-pa-sm"
              @click="doDelete(info.filename)"
              icon="mdi-delete" />
            <q-btn
              v-close-popup
              class="q-pa-sm"
              icon="mdi-cancel" />
          </q-list>
        </q-btn-dropdown>
        <q-btn
          size="xs"
          title="Download"
          icon="mdi-download"
          @click="doDownload(info.basename, info.filename)" />
        <q-btn
          size="xs"
          title="Restore"
          icon="mdi-open-in-app"
          @click="doOpen(info.filename)" />
      </span>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">

  import { useQuasar, exportFile } from 'quasar'
  import { computed, ref } from 'vue'
  import { fs } from '@zenfs/core'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'

  import { getProjectFiles } from 'stores/storage'

  const $q = useQuasar()

  const store = useProjectStore()

  const istore = useInterfaceStore()

  const props = defineProps({
      projectId: { type: String, default: "" }
  })

  const refreshKey = ref(1)

  const files = computed(() => {
      // Introduce a dependency on refreshKey so that it gets updated on refreshKey update
      const _key = refreshKey.value
      return getProjectFiles(props.projectId)
  })

  function doRefresh () {
      refreshKey.value++
  }

  function doDownload (basename: string, filename: string) {
      const status = exportFile(basename, fs.readFileSync(filename))
      if (status !== true) {
          // browser denied it
          console.error(`Error: ${status}`)
      }
  }

  function doDelete (filename: string) {
      fs.unlinkSync(filename)
      doRefresh()
      $q.notify({
          type: 'info',
          message: `Deleted stored file ${filename}`
      })
  }

  function doOpen (filename: string) {
      store.loadStoredProject(props.projectId, filename)
      istore.setModified(false)
      $q.notify({
          type: 'info',
          message: `Restored version ${filename}`
      })

  }
</script>

  <style scoped>
  .storage {
    overflow: auto;
    max-height: 30vh;
  }
</style>
