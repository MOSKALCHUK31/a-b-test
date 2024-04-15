import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRootStore = defineStore('root-store', () => {
    const theme = ref(null)

    const SET_THEME = (themeValue) => theme.value = themeValue

    return {
        theme,
        SET_THEME
    }
})
