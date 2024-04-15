<template>
    <div class="p-4 dark:rounded-2xl dark:bg-black/60">
        <div class="mb-8">
            <HomeHeadingMobile/>
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
import HomeHeadingMobile from '~/components/application/HomeHeading/HomeHeadingMobile'
import HomeList from '~/components/application/HomeList/HomeList'
import HomeActions from '~/components/application/HomeActions/HomeActions'
</script>
