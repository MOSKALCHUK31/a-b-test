<template>
    <form>
        <div class="mb-6 text-black text-xl font-extrabold text-center">Payment method</div>
        <div class="mb-4">
            <AppButtonWithIcon
                full-width
                color="orange"
                size="large"
            >
                <SvgIcon name="icon-paypal" style="width: 52px; height: 30px;"/>
                BUY NOW
            </AppButtonWithIcon>
        </div>
        <div class="mb-4">
            <AppButtonWithIcon
                full-width
                color="white-black"
                size="large"
            >
                <SvgIcon name="icon-google"/>
                PAY
            </AppButtonWithIcon>
        </div>
        <div class="mb-4 flex gap-2 items-center">
            <div class="h-0.5 w-full bg-black/10"></div>
            <div class="text-xs text-black/40 font-semibold">OR</div>
            <div class="h-0.5 w-full bg-black/10"></div>
        </div>
        <div class="mb-8">
            <AppInputCardNumber
                id="card-number"
                placeholder="••••  ••••  ••••  ••••"
                label="Card number"
                size="medium"
            />
        </div>
        <div class="flex gap-2.5">
            <div class="w-full">
                <AppSelect :items="years" size="medium"/>
            </div>
            <div class="w-full">
                <AppSelect :items="months" size="medium"/>
            </div>
            <div class="w-full">
                input
            </div>
        </div>
    </form>
</template>

<script setup>
import AppButtonWithIcon from '~/components/ui/Buttons/AppButtonWithIcon'
import AppInputCardNumber from '~/components/ui/Inputs/AppInputCardNumber'
import AppSelect from '~/components/ui/Inputs/AppSelect'

import { generateYears, getMonths } from '~/utils/dates.js'
import { ref, computed } from 'vue'

const years = generateYears()
const months = getMonths()

const fields = ref({
    cardNumber: '',
    year: '',
    month: ''
})
</script>
