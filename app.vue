<template>
    <div id="root">
        <button @click="toggleTheme">TOGGLE</button>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
        <ModalsHolder/>
    </div>
</template>

<script setup>
import ModalsHolder from '~/components/modals/ModalsHolder/ModalsHolder'
import { useRootStore } from '~/store/root.js'

const rootStore = useRootStore()
const { theme } = storeToRefs(rootStore)

const themeImage = computed(() => theme.value === 'light'
    ? 'bg-lightThemeImage'
    : 'bg-darkThemeImage'
)

const toggleTheme = () => {
    theme.value === 'light' ? rootStore.SET_THEME('dark') : rootStore.SET_THEME('light')
}

useHead({
    htmlAttrs: {
        class: () => theme.value
    },
    bodyAttrs: {
        class: [
            'h-lvh bg-center bg-cover bg-no-repeat',
            () => themeImage.value
        ]
    }
})
</script>

<style lang="scss">
@import '~/assets/styles/index.scss';
</style>
