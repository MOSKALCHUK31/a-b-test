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
        validator: v => ['white', 'black'].includes(v)
    },
    fullWidth: {
        type: Boolean,
        required: false
    }
})
</script>

<style scoped lang="scss">
.button {
    @apply text-center rounded-xl;
    @apply transition;

    &_size {
        &_large {
            @apply h-14 text-base font-bold;
        }
    }

    &_color {
        &_white {
            @apply bg-white text-purple;
            @apply hover:text-white hover:bg-lightPurple;
        }

        &_black {
            @apply bg-black text-white;
            @apply hover:bg-green;
        }
    }

    &_full {
        @apply w-full;
    }
}
</style>
