<template>
    <div>
        <div class="mb-6">
            <AppButtonWithIcon
                full-width
                :color="buttonColor"
                size="large"
            >
                <SvgIcon name="icon-security"/>
                Safe & secure payment
            </AppButtonWithIcon>
        </div>
        <div class="text-black/50 text-xs text-center dark:text-white/50">
            $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and Subscription Terms .
        </div>
    </div>
</template>

<script setup>
import AppButtonWithIcon from '~/components/ui/Buttons/AppButtonWithIcon'
import { computed } from 'vue'
import { useRootStore } from '~/store/root.js'

const rootStore = useRootStore()
const { theme } = storeToRefs(rootStore)

const buttonColor = computed(() => theme.value === 'light'
    ? 'white'
    : 'black-20'
)
</script>
