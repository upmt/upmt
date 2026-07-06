<template>
  <div class="genericdiachroniccategory-container row"
       v-if="genericdiachroniccategory"
       :data-genericdiachroniccategory="categoryId">
    <custom-expansion-item
      class="genericdiachroniccategory-body"
      :expand-icon-class="{ 'invisible': genericdiachroniccategory.children?.length == 0 }"
      >

      <template v-slot:header>
        <DropZone data="header"
                  class="genericdiachroniccategory-header"
                  types="upmt/genericdiachroniccategory"
                  @genericdiachroniccategory="droppedGenericDiachronicCategory">
          <DragElement
            class="genericdiachroniccategory"
            :style="{ backgroundColor: genericdiachroniccategory.color || 'transparent' }"
            @click="debug"
            type="genericdiachroniccategory"
            :data="genericdiachroniccategory.id">
            <q-icon
              ref="handle"
              class="genericdiachroniccategory-handle"
              size="xs"
              name="mdi-alpha-d-box" />
            <span
              class="genericdiachroniccategory-label">
              {{ genericdiachroniccategory.name }} <q-btn
                                                     :title="currentInterviewMomentsLabel"
                                                     size="sm"
                                                     dense>
                <q-menu class="column">
                  <div  v-for="moment in currentMoments"
                        class="flex row justify-between"
                        :key="moment.id">
                    <q-btn
                      :label="moment.name"
                      align="left"
                      no-caps
                      flat
                      @click="highlightMoment(moment.id)"
                      size="sm"
                      :style="{ backgroundColor: moment.color || 'transparent' }"
                      icon="mdi-alpha-d-box-outline">
                    </q-btn>
                  </div>
                </q-menu>
                {{ currentMoments.length }}</q-btn> /
              <q-btn
                :title="momentsLabel"
                size="sm"
                dense>
                <q-menu class="column">
                  <div class="row items-left no-wrap"
                       :key="name"
                       v-for="[ name, count ] in byInterview(moments)">
                    <q-btn class="full-width justify-content-between"
                           align="left"
                           no-caps
                           :label="name"
                           icon="mdi-comment-text-outline"
                           @click="switchTab(name)"
                           size="sm">
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
            <ColorizeIcon
              class="on-name-hover"
              v-model="categoryColor" />
          </DragElement>
        </DropZone>

      </template>

      <div class="genericsynchroniccategory-children">
        <GenericDiachronicCategoryRepresentation
          v-for="cat in genericdiachroniccategory.children"
          :key="cat.id"
          :categoryId="cat.id"
          :currentInterviewId="currentInterviewId"
          />
      </div>
    </custom-expansion-item>
  </div>
</template>

<script setup lang="ts">

  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'

  import CustomExpansionItem from './CustomExpansionItem.vue'
  import ColorizeIcon from './ColorizeIcon.vue'
  import DragElement from './DragElement.vue'
  import DropZone from './DropZone.vue'
  import ElementMenu from './ElementMenu.vue'

  import GenericDiachronicCategory from 'stores/models/genericdiachroniccategory'

  import Moment from 'stores/models/moment'
  import Interview from 'stores/models/interview'

  import { useProjectStore } from 'stores/projectStore'
  import { useInterfaceStore } from 'stores/interface'
  import { groupBy } from './util'

  const istore = useInterfaceStore()

  const store = useProjectStore()

  interface Props {
      categoryId: string,
      currentInterviewId: string
  }

  const props = withDefaults(defineProps<Props>(), {
      currentInterviewId: ""
  })

  const popupEdit = ref(null)

  const router = useRouter()

  const genericdiachroniccategory = computed(() => store.getGenericDiachronicCategory(props.categoryId))

  function debug () {
      (window as any).genericdiachroniccategory = genericdiachroniccategory.value
      console.log("genericdiachroniccategory", genericdiachroniccategory.value)
  }

  const moments = computed((): Moment[] => {
      return genericdiachroniccategory.value?.moments ?? []
  })

  const currentMoments = computed(() => moments.value?.filter((m: Moment) => m.interviewId === props.currentInterviewId) || [])

  const genericcategoryName = computed({
      get () {
          return genericdiachroniccategory.value ? genericdiachroniccategory.value.name : ""
      },
      set (value: string) {
          store.updateElement(genericdiachroniccategory.value as GenericDiachronicCategory, { name: value })
      }
  })

  const categoryColor = computed({
      get () {
          return genericdiachroniccategory.value?.color ?? ""
      },
      set (color: string) {
          store.updateElement(genericdiachroniccategory.value as GenericDiachronicCategory, { color: color})
      }
  })

  const currentInterviewMomentsLabel = computed(() => {
      const count = currentMoments.value.length
      if (count) {
          return `Present in ${count} moments in the current interview`
      } else {
          return "Not present in the current interview"
      }
  })

  const momentsLabel = computed(() => {
      let output = ""
      const count = moments.value.length
      if (count) {
          output = `Present in ${count} moments`
      } else {
          output = "Not present in any interview"
      }
      return output
  })

  function highlightMoment (momentId: string) {
      istore.setHighlightedMomentId(momentId)
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

  function droppedGenericDiachronicCategory (categoryId: string) {
      if (genericdiachroniccategory.value) {
          store.updateGenericDiachronicCategory(categoryId, {
              parentId: props.categoryId,
              folder: genericdiachroniccategory.value.folder
          })
      }
  }

  import type { NamedAction } from 'components/util.ts'
  const menuActions: NamedAction[] = [
      [ "Debug", () => debug() ]
  ]
</script>

<style scoped>
  .genericdiachroniccategory-handle {
      opacity: .5;
      cursor: pointer;
  }
  .genericdiachroniccategory-handle:hover {
      opacity: .7;
  }
  .genericdiachroniccategory-name {
      align-items: center;
  }
  .on-name-hover {
      opacity: 0;
  }
  .genericdiachroniccategory-name:hover .on-name-hover {
      opacity: 1;
  }
  .genericdiachroniccategory-children {
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
</style>
