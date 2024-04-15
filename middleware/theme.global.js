import { useRootStore } from '~/store/root.js'
import { getRandomTheme } from '~/utils/helpers.js'

export default defineNuxtRouteMiddleware(to => {
    const rootStore = useRootStore()

    if (rootStore.theme) return

    if (!to.query.abtest) {
        rootStore.SET_THEME('dark')
        return
    }

    const cookie = useCookie('themeCookieValue')

    const actions =  {
        'var1': () => {
            rootStore.SET_THEME('light')
            cookie.value = 'light'
        },
        'var2': () => {
            rootStore.SET_THEME('dark')
            cookie.value = 'dark'
        },
        'test': () => {
            if (cookie.value) {
                rootStore.SET_THEME(cookie.value)
                return
            }

            const theme = getRandomTheme()
            cookie.value = theme
            rootStore.SET_THEME(theme)

        }
    }[to.query.abtest]()
})
