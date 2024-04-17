<template>
    <fieldset class="input-fieldset">
        <input
            v-bind="$attrs"
            v-mask="'#### #### #### ####'"
            :class="[`size_${ size }`, { 'is-error': isError }]"
        >
        <label
            :for="$attrs.id"
            class="input-fieldset__label"
        >{{ label }}</label>
        <SvgIcon name="icon-mastercard"/>
        <div
            v-if="isError"
             class="input-fieldset__error"
        >
            Invalid number
        </div>
    </fieldset>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true,
        validator: v => ['medium'].includes(v)
    },
    isError: {
        type: Boolean,
        required: false
    }
})
</script>

<style scoped lang="scss">
.input-fieldset {
    @apply relative;

    :deep(svg) {
        @apply absolute right-3 top-1/2;
        @apply w-8 h-6 -translate-y-1/2;
    }

    &__label {
        @apply text-black100 text-xs font-bold;
        @apply h-4 bg-white absolute bottom-full rounded-3xl left-3 translate-y-2/4 px-1;
    }

    &__error {
        @apply absolute right-16 top-1/2 -translate-y-1/2 bg-white text-xs text-red font-semibold;
    }
}

input {
    @apply border-1 border-lightGrey rounded-xl w-full text-sm text-darkGrey font-bold;
    @apply placeholder:text-sm placeholder:text-darkGrey placeholder:font-bold;
    @apply focus:border-green;
    @apply transition;

    &.size {
        &_medium {
            @apply h-12 px-4;
        }
    }

    &.is-error {
        @apply border-red;
    }
}
</style>
