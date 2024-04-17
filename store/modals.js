import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useModalsStore = defineStore('modals-store', () => {
    const isPaymentModalOpen = ref(true)

    const isAnyModalOpen = computed(() =>
        isPaymentModalOpen.value
        // || another modal open => ...
    )
    const TOGGLE_PAYMENT_MODAL = () => isPaymentModalOpen.value = !isPaymentModalOpen.value

    return {
        isPaymentModalOpen,
        isAnyModalOpen,
        TOGGLE_PAYMENT_MODAL
    }
})
