<template>
    <div id="modals">
        <PaymentModal v-if="isPaymentModalOpen"/>
    </div>
</template>

<script setup>
import { useModalsStore } from '~/store/modals.js'

const PaymentModal = defineAsyncComponent(() => import('~/components/modals/PaymentModal/PaymentModal'))
const modalsStore = useModalsStore()

const { isPaymentModalOpen } = storeToRefs(modalsStore)
</script>
