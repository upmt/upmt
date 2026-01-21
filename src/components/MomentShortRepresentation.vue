<template>
  <div ref="container"
       :data-moment="momentId">

    <div :class="[ 'moment', { 'transitional': moment.isTransitional } ]"
         :style="{ backgroundColor: moment.color }"
         v-if="moment"
         :data-moment="moment.id">

      <span class="moment-name">
        {{ moment.descriptionLabel }}
        <ColorizeIcon
          class="on-name-hover"
          v-model="momentColor" />
      </span>

      <div class="moment-children"
           :class="layout"
           v-if="momentDepth < maximumDepth">
        <div v-for="m in moment.children"
             :key="m.id">
          <MomentShortRepresentation
            :maximumDepth="maximumDepth"
            :momentDepth="momentDepth + 1"
            :momentId="m.id"
            :layout="layout">
          </MomentShortRepresentation>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

  import { computed } from 'vue'
  import { useProjectStore } from 'stores/projectStore'
  import ColorizeIcon from './ColorizeIcon.vue'

  const store = useProjectStore()

  const props = defineProps({
      momentId: { type: String, default: "" },
      momentDepth: { type: Number, default: 0 },
      maximumDepth: { type: Number, default: 0 },
      layout: { type: String, default: "horizontal" }
  })

  const moment = computed(() => store.getMoment(props.momentId))

  const momentColor = computed({
      get () {
          return moment.value ? moment.value.color : ""
      },
      set (color: string) {
          if (color == '#ffffff') {
              color = ''
          }
          store.updateMoment(props.momentId, { color })
      }
  })
</script>

<style scoped>
  .header-class {
      font-weight: bold;
      text-align: center;
  }
  .moment-children {
      list-style: none;
      display: flex;
      flex-direction: row;
  }
  .moment-children.vertical {
      flex-direction: column;
  }
  .moment-container {
      display: flex;
      flex-direction: row;
      position: relative;
  }
  .moment {
      min-width: var(--moment-minimum-width);
      min-height: 40px;
      margin: 4px;
      display: flex;
      flex-direction: column;
      border: 1px solid grey;
  }
  .moment-body {
      border: 1px solid grey;
      display: flex;
      flex-grow: 1;
  }
  .transitional {
      background-color: var(--transitional-color);
  }
  .transitional::after {
      content: ' ';
      position: absolute;
      left: calc( 50% - var(--transitional-bar-width) / 2 );
      top: 100%;
      height: 80vh;
      width: var(--transitional-bar-width);
      background-color: var(--transitional-color);
  }
  .on-name-hover {
      opacity: 0;
  }
  .moment-name:hover .on-name-hover {
      opacity: 1;
  }
</style>
