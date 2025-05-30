<template>
  <q-list
    :key="refreshKey"
    class="storage">
    <strong>{{ dir }}</strong>
    <q-btn
      @click="doRefresh"
      size="xs"
      title="Refresh"
      icon="mdi-refresh"/>
    <q-item
      class="column"
      v-for="filename in filenames"
      :key="filename">
      <span>
        <q-icon
          size="xs"
          title
          name="mdi-semantic-web" />
        {{ filename }}
      </span>
      <span align="right">
        <q-btn-dropdown
          size="xs"
          title="Delete"
          dropdown-icon="none"
          icon="mdi-delete">
          <span>Delete {{ filename }}?</span>
          <q-list align="right" class="row justify-end">
            <q-btn
              v-close-popup
              class="bg-red q-pa-sm"
              @click="doDelete(filename)"
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
          @click="doDownload(filename)" />
        <q-btn
          size="xs"
          title="Restore"
          icon="mdi-open-in-app"
          @click="doOpen(filename)" />
      </span>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">

  import { useQuasar, exportFile } from 'quasar'
  import { computed, ref } from 'vue'
  import { fs } from '@zenfs/core'

  const $q = useQuasar()

  const props = defineProps({
      dir: { type: String, default: "/" }
  })

  const refreshKey = ref(1)

  const filenames = computed(() => {
      console.log(refreshKey.value)
      if (fs.existsSync(props.dir)) {
          return fs.readdirSync(props.dir).toSorted().reverse()
      } else {
          return []
      }
  })

  function doRefresh () {
      refreshKey.value++
      console.log("Do Refresh", refreshKey)
  }

  function absolute (filename: string) {
      return `${props.dir}/${filename}`
  }

  function doDownload (filename: string) {
      const status = exportFile(filename, fs.readFileSync(absolute(filename)))
      if (status !== true) {
          // browser denied it
          console.error(`Error: ${status}`)
      }
  }

  function doDelete (filename: string) {
      console.log("Delete", filename)
      const absolutePath = absolute(filename)
      fs.unlinkSync(absolutePath)
      doRefresh()
      $q.notify({
          type: 'info',
          message: `Deleted file ${absolutePath}`
      })
  }

  function doOpen (filename: string) {
      console.log("Open", filename)
  }
</script>

  <style scoped>
  .storage {
    overflow: auto;
    max-height: 30vh;
  }
</style>
