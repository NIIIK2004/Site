<template>
    <NavigationComponent/>
    <div class="course-page">
        <h1>{{ course.title }}</h1>
        <img :src="course.src" :alt="course.title" height="300">
        <p>{{ course.description }}</p>
        <p>Длительность: {{ course.duration }}</p>
        <p>Цена: {{ course.price }} руб.</p>
    </div>

    <FooterComponent/>
</template>

<script>
import axios from "axios";
import NavigationComponent from "@/components/NavigationComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    components: {FooterComponent, NavigationComponent},
    props: ["id"],
    data() {
        return {
            course: {}
        };
    },
    created() {
        this.fetchCourse();
    },
    methods: {
        async fetchCourse() {
            try {
                const response = await axios.get(`/courses/${this.id}`);
                this.course = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>

<style scoped>

</style>