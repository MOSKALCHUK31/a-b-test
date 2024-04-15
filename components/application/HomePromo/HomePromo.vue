<template>
    <div class="flex gap-4 justify-center items-center">
        <div class="w-full">
            <div class="mb-2 text-black text-2xl font-extrabold dark:text-blue">
                3-day trial for
                <span class="text-orange dark:text-blue">$0.99</span>
            </div>
            <div class="mb-0.5 text-black text-xl font-semibold dark:text-white">{{ priceText }}</div>
            <div
                v-if="!isExpired"
                class="text-base text-black/40 font-semibold line-through dark:text-white/60"
            >$39.99/week</div>
        </div>
        <div v-if="!isExpired" class="shrink-0">
            <AppTimer
                :expiration-time="180"
                :color="timerColor"
                size="large"
                @on-expire="handleExpire"
            />
        </div>
    </div>
</template>

<script setup>
import AppTimer from '~/components/ui/Timer/AppTimer.vue'
import { ref, computed } from 'vue'
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

