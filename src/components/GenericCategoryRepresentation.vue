<template>
  <div class="genericsynchroniccategory-container row"
       v-if="genericcategory"
       :data-genericcategory="genericcategory.name">
    <q-expansion-item
      class="genericsynchroniccategory-body"
      dense
      dense-toggle
      :duration="0"
      expand-icon-toggle
      :expand-icon-class="{ 'invisible': genericcategory.children?.length == 0 }"
      switch-toggle-side
      no-v-model="expand"
      header-class="header-class"
      :title="genericcategory.name"
      :content-inset-level="0.2"
      >

      <template v-slot:header>
        <DragElement
          class="genericsynchroniccategory-name"
          :class="{ 'has-error': genericcategory.errors?.length }"
          :style="{ backgroundColor: genericcategory.color }"
          @click="debug"
          type="genericsynchroniccategory"
          :data="genericcategory.name">
          <q-icon
            ref="handle"
            class="genericsynchroniccategory-handle"
            size="xs"
            name="mdi-source-branch-check" />
          <q-icon
            v-if="isSpecialization"
            size="xs"
            name="mdi-triangle-outline" />
          <q-icon
            v-if="isAggregation"
            size="xs"
            name="mdi-cards-diamond-outline" />

          <q-tooltip class="bg-red-5" anchor="top right" self="top left" v-if="genericcategory.errors?.length">
            <div v-for="error, key in genericcategory.errors"
                    :key="key">
              {{ error }}
            </div>
          </q-tooltip>
          <span
            class="genericsynchroniccategory-label">
            {{ genericcategory.name }} <q-btn
                                       size="sm"
                                       dense>
              <q-menu class="column">
                <q-btn v-for="moment in currentMoments"
                       :label="moment.name"
                       align="left"
                       no-caps
                       :key="moment.id"
                       @click="highlightMoment(moment.id)"
                       size="sm"
                       :style="{ backgroundColor: moment.color }"
                       icon="mdi-alpha-m-box-outline">
                </q-btn>
              </q-menu>
              {{ currentMoments.length }}</q-btn> /
            <q-btn
              size="sm"
              dense>
              <q-menu class="column">
                <div class="row items-left no-wrap"
                     :key="name"
                     v-for="[ name, count ] in byInterview(moments)">
                  <q-btn class="full-width justify-content-between"
                         align="left"
                         no-caps
                         @click="switchTab(name)"
                         size="sm">
                    <span class="interview-name">{{name}}</span>
                  </q-btn>
                  <strong class="interview-moment-count">{{ count }}</strong>
                </div>
              </q-menu>
              {{ moments.length }}</q-btn>
            <q-popup-edit
              ref="popupEdit"
              v-model="genericcategoryName"
              auto-save
              v-slot="scope">
              <q-input v-model="scope.value"
                       @focus="($event.target as HTMLInputElement).select()"
                       dense autofocus counter @keyup.enter="scope.set" />
            </q-popup-edit>
          </span>
          <q-space />
          <ElementMenu
            :actions="menuActions" />
        </DragElement>

      </template>

      <div class="genericsynchroniccategory-children">
        <GenericCategoryRepresentation
          v-for="cat in genericcategory.children"
          :key="cat.name"
          :graphInfo="graphInfo"
          :genericcategory="cat"
          :currentInterviewId="currentInterviewId"
          />
      </div>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useRouter } from 'vue-router'
  import DragElement from './DragElement.vue'
  import ElementMenu from './ElementMenu.vue'
  import Moment from 'stores/models/moment'
  import Interview from 'stores/models/interview'
  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import { groupBy } from './util'

  import type { GenericCategory, GraphInfo } from 'stores/projectStore'

  const istore = useInterfaceStore()

  const { highlightedMomentId } = storeToRefs(istore)

  const store = useProjectStore()

  const props = defineProps<{
      genericcategory: GenericCategory,
      graphInfo: GraphInfo,
      currentInterviewId: string | null
  }>()

  const popupEdit = ref(null)

  const router = useRouter()

  function debug () {
      (window as any).genericcategory = props.genericcategory
      console.log("genericcategory", props.genericcategory)
  }

  const moments = computed((): Moment[] => {
      const momentIds = props.genericcategory.instances
            .map(ssc => props.graphInfo.instanceIdToContainerInfo[ssc.id]?.momentId)
            .filter(id => !!id) as string[]
      return store.getMoments(momentIds)
  })

  const currentMoments = computed(() => moments.value?.filter((m: Moment) => m.interviewId === props.currentInterviewId) || [])

  const isAggregation = computed(() => props.genericcategory.abstractionType == 'aggregation')
  const isSpecialization = computed(() => props.genericcategory.abstractionType == 'specialization')

  const genericcategoryName = computed({
      get () {
          return props.genericcategory ? props.genericcategory.name : ""
      },
      set (value: string) {
          console.log(`Renaming ${props.genericcategory.name} to ${value}`)
          // FIXME:
          // store.updateGenericCategoryName(props.genericcategory.name, { name: value })
      }
  })

  function highlightMoment (momentId: string) {
      if (highlightedMomentId.value === momentId) {
          highlightedMomentId.value = ""
      } else {
          highlightedMomentId.value = momentId
      }
  }

  function byInterview (moments: Array<Moment>) {
      const repo = store.getRepo()
      const names = Object.fromEntries(repo.Interview.get().map((i: Interview) => [ i.id, i.label ]))

      return Object.entries(groupBy(moments, 'interviewId'))
          .map(([id, arr]) => [ names[id], (arr as Array<any>).length ])
  }

  function switchTab (interviewName: string) {
      router.push({
          query: {
              tab: interviewName
          }
      }).catch(e => {
          console.log(`Error when switching view: ${e}`)
      })
  }

  import type { NamedAction } from 'components/util.ts'
  const menuActions: NamedAction[] = [
      [ "Debug", () => debug() ]
  ]
</script>

<style scoped>
  .genericsynchroniccategory-handle {
      opacity: .5;
      cursor: pointer;
  }
  .genericsynchroniccategory-handle:hover {
      opacity: .7;
  }
  .genericsynchroniccategory-name {
      align-items: center;
  }
  .genericsynchroniccategory-name:hover .on-name-hover {
      opacity: 1;
  }
  .genericsynchroniccategory-children {
      border-left: 1px dotted black;
  }
  .q-list--dense > .q-item, .q-item--dense {
    min-height: 18px;
    padding: 0 2px !important;
    line-height: 1;
  }
  .interview-name {
      font-weight: 200;
  }
  .has-error {
      border: 2px solid red;
  }
</style>
