import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInterfaceStore = defineStore('interface', () => {
    // Highlighted moment id
    const highlighted = ref("")
    return { highlighted }
})
