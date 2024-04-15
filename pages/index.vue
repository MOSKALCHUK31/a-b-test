<template>
    <component :is="activeView"/>
</template>

<script setup>
import HomeView from '~/components/views/HomeView/HomeView'
import HomeViewMobile from '~/components/views/HomeView/HomeViewMobile'
import { computed } from 'vue'

const { isMobileOrTablet } = useDevice()
const activeView = computed(() => isMobileOrTablet ? HomeViewMobile : HomeView)
</script>


