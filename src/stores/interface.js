import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInterfaceStore = defineStore('interface', () => {
    // Highlighted moment id
    const highlighted = ref("")
    const newMomentIndex = ref(1)

    function newMomentIndexIncrement () {
        return newMomentIndex.value++
    }

    return { highlighted, newMomentIndexIncrement }
})
