<template>
    <header class="h-14 flex items-center">
        <div class="w-full mx-auto px-4">
            <component :is="activeLogo"/>
        </div>
    </header>
</template>

<script setup>
import StudyLogo from '~/components/ui/Logo/StudyLogo'
import PlanetLogo from '~/components/ui/Logo/PlanetLogo'

import { computed } from 'vue'
import { useRootStore } from '~/store/root.js'

const rootStore = useRootStore()
const { theme } = storeToRefs(rootStore)

const activeLogo = computed(() => theme.value === 'light'
    ? PlanetLogo
    : StudyLogo
)
</script>
