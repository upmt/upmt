<template>
  <div :class="[ 'moment', { 'transitional': moment.isTransitional } ]"
       :style="{ backgroundColor: moment.color }"
       v-if="moment"
       :data-moment="moment.id">

    <q-expansion-item
      dense
      dense-toggle
      expand-icon-toggle
      switch-toggle-side
      v-model="expand"
      header-class="header-class"
      :title="moment.comment"
      >

      <template v-slot:header>
        <q-icon
          ref="handle"
          class="moment-handle"
          size="xs"
          name="mdi-note-outline"></q-icon>
        <span class="moment-name">{{ momentName }}
          <q-popup-edit style="zoom: var(--chart-zoom)" v-model="momentName" auto-save v-slot="scope">
            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
          </q-popup-edit>
        </span>
      </template>

      <div class="moment-justification">
        <JustificationTextRepresentation :justificationId="moment.justification?.id">
        </JustificationTextRepresentation>
      </div>

      <div :class="[ 'moment-categories', layout ]">
        <div v-for="c in moment.categories" :key="c.id">
          <CategoryTextRepresentation :categoryId="c.id">
          </CategoryTextRepresentation>
        </div>
      </div>

      <div :class="[ 'moment-children', 'horizontal' ]">
        <div v-for="m in moment.children" :key="m.id">
          <MomentTextRepresentation :momentId="m.id">
          </MomentTextRepresentation>
        </div>
      </div>

    </q-expansion-item>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import JustificationTextRepresentation from './JustificationTextRepresentation.vue'
import CategoryTextRepresentation from './CategoryTextRepresentation.vue'
import MomentTextRepresentation from './MomentTextRepresentation.vue'
import { useProjectStore } from 'stores/projectStore'

const store = useProjectStore()

const props = defineProps({
    momentId: { type: String, default: "" },
    layout: { type: String, default: "vertical" }
  });

const moment = computed(() => store.getMoment(props.momentId))

const expand = computed({
    get () {
        return moment.value ? !moment.value.isCollapsed : true
    },
    set (value: boolean) {
        if (moment.value) {
            moment.value.isCollapsed = !value
        }
    }
  })

const momentName = computed({
    get () {
        return moment.value ? moment.value.name : ""
    },
    set (value: string) {
        store.updateMomentName(moment.value, value)
    }
})
</script>

<style>
  .header-class {
    font-weight: bold;
    text-align: center;
  }
  .moment-children {
    list-style: none;
    min-width: 200px;
    display: flex;
    flex-direction: column;
  }
  .moment-children.horizontal {
      flex-direction: row;
  }
  .moment {
      min-width: 200px;
      min-height: 40px;
      margin: 2px;
      display: flex;
      flex-direction: column;
      border: 1px solid grey;
  }
  .transitional {
      background-color: var(--transitional-color);
  }
  .moment-handle {
      opacity: .5;
      cursor: pointer;
  }
  .moment-handle:hover {
      opacity: .8;
  }
</style>
