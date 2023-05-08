<template>
    <NavigationComponent/>
    <div class="container indent">
        <StartOfflineLesson/>
        <AboutOfflineLesson/>
        <FeedbackOfflineLesson/>
    </div>
    <FooterComponent/>
</template>

<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import StartOfflineLesson from "@/components/OfflineLessonPage/StartOfflineLesson.vue";
import AboutOfflineLesson from "@/components/OfflineLessonPage/AboutOfflineLesson.vue";
import FeedbackOfflineLesson from "@/components/OfflineLessonPage/FeedbackOfflineLesson.vue";
</script>

<style scoped>

</style>