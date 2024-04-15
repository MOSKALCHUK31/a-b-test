<template>
    <div :class="['timer', `timer_size_${ size }`, `timer_color_${ color }`]">
        <div class="timer__content">
            {{ getTimeValues(seconds) }}
        </div>
        <div
            :style="`right: ${ progressOffset }%`"
            class="timer__progress"
        ></div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { formatNumber } from '~/utils/helpers.js'

const emit = defineEmits(['onExpire'])
const props = defineProps({
    expirationTime: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true,
        validator: v => ['medium', 'large'].includes(v)
    },
    color: {
        type: String,
        required: true,
        validator: v => ['blue', 'green'].includes(v)
    }
})

const seconds = ref(props.expirationTime)
const interval = ref(null)

const progressOffset = computed(() => 100 - (seconds.value * 100 / props.expirationTime))

const getTimeValues = (count) => {
    const minutes = Math.floor(count / 60)
    const seconds = count % 60

    return `${ formatNumber(minutes) }:${ formatNumber(seconds) }`
}

const startTimer = () => {
    interval.value = setInterval(() => {
        seconds.value -= 1

        if (!seconds.value) {
            clearInterval(interval.value)
            emit('onExpire')
        }
    }, 100)
}

onMounted(() => startTimer())
</script>

<style scoped lang="scss">
.timer {
    @apply relative flex items-center justify-center bg-black rounded-lg;

    &_size {
        &_medium {
            @apply w-110 h-12;
        }

        &_large {
            @apply w-40 h-60;
        }
    }

    &_color {
        &_blue {
            .timer__progress {
                @apply bg-darkBlue;
            }
        }

        &_green {
            .timer__progress {
                @apply bg-green;
            }
        }
    }

    &__content {
        @apply relative text-white z-10 font-semibold text-2xl;
    }

    &__progress {
        @apply absolute left-0 top-0 bottom-0 rounded-lg;
    }
}
</style>
