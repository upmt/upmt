<template>
  <q-list class="storage">
    <q-item
      class="column"
      v-for="filename in filenames"
      :key="filename">
      <span>
        <q-icon
          size="xs"
          name="mdi-semantic-web" />
        {{ filename }}
      </span>
      <span align="right">
        <q-btn-dropdown
          size="xs"
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
          icon="mdi-open-in-app"
          @click="doOpen(filename)" />
      </span>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">

  import { useQuasar } from 'quasar'
  import { computed } from 'vue'
  import { fs } from '@zenfs/core'
  // import { useProjectStore } from 'stores/projectStore'

  // const store = useProjectStore()

  const $q = useQuasar()

  const props = defineProps({
      dir: { type: String, default: "/" }
  })

  const filenames = computed(() => {
      if (fs.existsSync(props.dir)) {
          return fs.readdirSync(props.dir)
      } else {
          return []
      }
  })

  function absolute (filename: string) {
      return `${props.dir}/${filename}`
  }

  function doDelete (filename: string) {
      console.log("Delete", filename)
      const absolutePath = absolute(filename)
      fs.unlinkSync(absolutePath)
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
</style>
