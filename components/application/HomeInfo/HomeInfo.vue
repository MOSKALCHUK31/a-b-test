<template>
    <div class="
        p-6 bg-white border-solid border-1 rounded-32 shadow-infoShadow
        dark:bg-black/40 dark:border-4 dark:border-white/60
    ">
        <div class="mb-6">
            <HomePromo/>
        </div>
        <div class="mb-6">
            <HomeList/>
        </div>
        <div>
            <HomeActions/>
        </div>
    </div>
</template>

<script setup>
import HomePromo from '~/components/application/HomePromo/HomePromo'
import HomeList from '~/components/application/HomeList/HomeList'
import HomeActions from '~/components/application/HomeActions/HomeActions'
</script>
