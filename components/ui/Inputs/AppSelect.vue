<template>
    <div :class="['select', `select_size_${ size }`]">
        <div class="select__heading">
            <div class="select__label">{{ label }}</div>
            <div class="select__title">Select</div>
            <div class="select__icon">
                <SvgIcon name="icon-chevron-down" fill="orange"/>
            </div>
        </div>
        <div class="select__list">
            <ul class="select-list">
                <li
                    v-for="item in items"
                    class="select-list__item"
                >{{ item.label }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    label: {
        type: String,
        required: true
    }
    items: {
        type: Array,
        required: true
    },
    size: {
        type: String,
        required: true,
        validator: v => ['medium'].includes(v)
    }
})
</script>

<style scoped lang="scss">
.select {
    @apply relative;

    &_size {
        &_medium {
            .select__heading {
                @apply h-12 px-4;
            }
        }
    }

    &__heading {
        @apply relative;
        @apply border-solid border-1 border-lightGrey rounded-xl w-full text-sm text-darkGrey font-bold;
    }

    &__label {
        @apply text-black100 text-xs font-bold;
        @apply h-4 bg-white absolute bottom-full rounded-3xl left-3 translate-y-2/4 px-1;
    }

    &__title {
        @apply text-sm text-darkGrey font-bold;
    }

    &__icon {
        :deep(svg) {
            @apply absolute right-3 top-1/2;
            @apply w-4 h-4 -translate-y-1/2;
        }
    }

    &__list {

    }
}
</style>
