<template>
    <div class="fixed left-0 top-0 w-full h-full flex items-center justify-center">
        <div
            class="fixed left-0 top-0 w-full h-full bg-black/20"
            @click="handleClick"
        ></div>
        <div class="relative z-10 px-4 py-6 mx-4 max-w-400 w-full bg-white rounded-xl shadow-infoShadow">
            <div class="mb-3">
                <PaymentForm/>
            </div>
            <div class="flex justify-center">
                <AppButton
                    :color="buttonColor"
                    size="medium"
                    @on-click="handleClick"
                >Close</AppButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import AppButton from '~/components/ui/Buttons/AppButton'
import PaymentForm from '~/components/forms/PaymentForm/PaymentForm'

import { computed } from 'vue'
import { useRootStore } from '~/store/root.js'
import { useModalsStore } from '~/store/modals.js'

const rootStore = useRootStore()
const modalsStore = useModalsStore()

const buttonColor = computed(() => rootStore.theme === 'light'
    ? 'transparent-black'
    : 'transparent-white'
)

const handleClick = () => {
    modalsStore.TOGGLE_PAYMENT_MODAL()
}
</script>
