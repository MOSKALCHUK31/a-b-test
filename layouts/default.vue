<template>
    <div class="study-layout">
        <TheHeader/>
        <main>
            <slot/>
        </main>
    </div>
</template>

<script setup>
import TheHeader from '~/components/layouts/TheHeader/TheHeader'
</script>

<style scoped lang="scss">

</style>
