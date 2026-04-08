<template>
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide">
    <q-card
      class="settings-editor">
      <q-card-section>
        <div
        class="text-h6">
          Settings
        </div>
      </q-card-section>

      <q-separator />

      <q-badge color="primary">
        Zoom sensitivity: {{ istore.settings.zoomStep }} (0.05 to 0.5)
      </q-badge>

      <q-slider
        class="q-py-lg"
        :min="0.05"
        :max="0.5"
        :step="0.05"
        label
        label-always
        switch-label-side
        v-model="istore.settings.zoomStep"
        />

      <div class="col">

        <q-checkbox
          dense
          label="Touch lock"
          v-model="istore.settings.zoomTouchLock"
          >
          <q-tooltip>When true, pan or zoom requires touch using two fingers.</q-tooltip>
        </q-checkbox>

        <q-checkbox
          dense
          label="Wheel lock"
          v-model="istore.settings.zoomWheelLock">
          <q-tooltip>When true, zoom using wheel is disabled until Control is pressed..</q-tooltip>
        </q-checkbox>
      </div>

      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onDialogOK" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">

import { useDialogPluginComponent } from 'quasar'
import { useInterfaceStore } from 'stores/interface'

defineEmits([
    ...useDialogPluginComponent.emits
])

const istore = useInterfaceStore()

const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent()
</script>

<style scoped>
.settings-editor {
    min-width: 600px;
}
</style>
