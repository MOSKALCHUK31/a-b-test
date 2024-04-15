<template>
    <div class="
        p-4 bg-white border-solid border-1 border-lightGrey rounded-2xl shadow-infoShadow
        dark:bg-black/60 dark:border-0 dark:shadow-none
    ">
        <div class="flex gap-3 justify-center items-center">
            <div :class="['w-full', { 'flex flex-col items-center': isExpired }]">
                <div class="mb-2 text-black text-lg font-extrabold dark:text-blue">
                    3-day trial for
                    <span class="text-orange dark:text-blue">$0.99</span>
                </div>
                <div class="mb-0.5 text-black text-base font-normal dark:text-white">{{ priceText }}</div>
                <div
                    v-if="!isExpired"
                    class="text-base text-black/40 font-semibold line-through dark:text-white/60"
                >$39.99/week</div>
            </div>
            <div v-if="!isExpired" class="shrink-0">
                <AppTimer
                    :expiration-time="180"
                    :color="timerColor"
                    size="medium"
                    @on-expire="handleExpire"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import AppTimer from '~/components/ui/Timer/AppTimer.vue'
import { computed, ref } from 'vue'
import { useRootStore } from '~/store/root.js'

const rootStore = useRootStore()
const { theme } = storeToRefs(rootStore)

const isExpired = ref(false)

const priceText = computed(() => isExpired ? 'Then $39.99/week' : 'Then $9.99')
const timerColor = computed(() => theme.value === 'light'
    ? 'green'
    : 'blue'
)

const handleExpire = () => isExpired.value = true
</script>
