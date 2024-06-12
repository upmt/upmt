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
        <q-icon size="xs" name="mdi-note-outline"></q-icon>
        <span class="moment-name">{{ momentName }}
          <q-popup-edit style="zoom: var(--chart-zoom)" v-model="momentName" auto-save v-slot="scope">
            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
          </q-popup-edit>
        </span>
      </template>

      <div class="moment-justification">
        <JustificationTextRepresentation :justification="moment.justification">
        </JustificationTextRepresentation>
      </div>

      <div :class="[ 'moment-categories', layout ]">
        <div v-for="c in moment.categories" :key="c.id">
          <CategoryTextRepresentation :category="c">
          </CategoryTextRepresentation>
        </div>
      </div>

      <div :class="[ 'moment-children', 'horizontal' ]">
        <div v-for="m in moment.children" :key="m.id">
          <MomentTextRepresentation :moment="m">
          </MomentTextRepresentation>
        </div>
      </div>

    </q-expansion-item>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Moment from 'stores/models/moment'
import JustificationTextRepresentation from './JustificationTextRepresentation.vue'
import CategoryTextRepresentation from './CategoryTextRepresentation.vue'
import MomentTextRepresentation from './MomentTextRepresentation.vue'

const props = defineProps({
    moment: { type: Moment, default: null },
    layout: { type: String, default: "vertical" }
  });

const expand = computed(() => !props.moment.isCollapsed)

const momentName = computed({
    get () {
        return props.moment?.name
    },
    set (value: string) {
        const moment = props.moment
        if (moment) {
            moment.name = value
        }
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
      margin: 1em;
      display: flex;
      flex-direction: column;
      border: 1px solid grey;
  }
  .transitional {
      background-color: var(--transitional-color);
  }
</style>
