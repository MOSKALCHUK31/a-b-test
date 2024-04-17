<template>
    <NuxtLink
        v-if="to"
        :to="to"
        :class="['button', `button_size_${ size }`, `button_color_${ color }`, { 'button_full': fullWidth }]"
    >
        <slot/>
    </NuxtLink>
    <button
        :class="['button', `button_size_${ size }`, `button_color_${ color }`, { 'button_full': fullWidth }]"
    >
        <slot/>
    </button>
</template>

<script setup>
const props = defineProps({
    to: {
        type: String,
        required: false
    },
    size: {
        type: String,
        required: true,
        validator: v => ['large'].includes(v)
    },
    color: {
        type: String,
        required: true,
        validator: v => ['black-20', 'white', 'orange', 'white-black'].includes(v)
    },
    fullWidth: {
        type: Boolean,
        required: false
    }
})
</script>

<style scoped lang="scss">
.button {
    @apply flex items-center justify-center;
    @apply text-center rounded-xl;
    @apply transition;

    &_size {
        &_large {
            @apply gap-2;
            @apply h-14 text-base font-semibold;
        }
    }

    &_color {
        &_black-20 {
            @apply bg-black/20 text-blue;

            :deep(svg) {
                @apply fill-blue;
            }
        }

        &_white {
            @apply border-1 border-solid border-black/20 bg-white text-green;

            :deep(svg) {
                @apply fill-green;
            }
        }

        &_white-black {
            @apply border-1 border-solid border-black/20 bg-white text-black;
            @apply hover:bg-black hover:text-white;
        }

        &_orange {
            @apply bg-lightOrange text-black;
            @apply hover:bg-lightestOrange;
        }
    }

    &_full {
        @apply w-full;
    }

    :deep(svg) {
        @apply w-6 h-6;
    }
}
</style>
