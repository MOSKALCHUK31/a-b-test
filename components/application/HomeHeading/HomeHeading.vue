<template>
    <div>
        <div class="
            mb-6 text-5xl text-black font-extrabold
            dark:text-white dark:text-40 dark:uppercase
        ">
            <span class="dark:text-darkBlue">Start</span>
            your learning journey
            <span class="dark:text-darkBlue">now</span>
        </div>
        <div v-if="isStudy" class="mb-8 text-white text-2xl font-semibold">
            Get a
            <span class="font-extrabold">
                <span class="text-darkBlue">Smart</span>Study
            </span>
            plan to <br/>rock self-learning
        </div>
        <div v-else class="mb-8 text-black text-2xl font-semibold">
            Get a
            <span class="font-extrabold">
                <span class="text-orange">Planet</span>Learn
            </span>
            plan to <br/>rock self-learning
        </div>
        <div class="w-280">
            <AppButton
                :color="buttonColor"
                full-width
                size="large"
            >
                Get my plan
            </AppButton>
        </div>
    </div>
</template>

<script setup>
import AppButton from '~/components/ui/Buttons/AppButton'

import { computed } from 'vue'
import { useRootStore } from '~/store/root.js'

const rootStore = useRootStore()
const { theme } = storeToRefs(rootStore)

const isStudy = computed(() => theme.value === 'dark')
const buttonColor = computed(() => theme.value === 'light'
    ? 'black'
    : 'white'
)
</script>
