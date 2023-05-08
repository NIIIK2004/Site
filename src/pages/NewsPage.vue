<template>
    <NavigationComponent/>
    <section class="indent">
        <div class="container">
            <NewsStart/>
            <NewsList/>
        </div>
    </section>
    <FooterComponent/>
</template>

<script setup>

import FooterComponent from "@/components/FooterComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import NewsStart from "@/components/News/NewsStart.vue";
import NewsList from "@/components/News/NewsList.vue";
</script>

<style scoped>

</style>