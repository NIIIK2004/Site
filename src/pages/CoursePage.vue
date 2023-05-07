<template>
    <NavigationComponent/>
    <section class="course-page indent">
        <div class="container">
            <CourseStart/>
            <CourseTest/>
            <CourseLectures/>
        </div>
    </section>
    <FooterComponent/>
</template>

<script>
import axios from "axios";
import NavigationComponent from "@/components/NavigationComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CourseStart from "@/components/CoursePage/CourseStart.vue";
import CourseTest from "@/components/CoursePage/CourseTests.vue";
import CourseLectures from "@/components/CoursePage/CourseLectures.vue";

export default {
    components: {CourseLectures, CourseTest, CourseStart, FooterComponent, NavigationComponent},
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
.course-page {
    margin: 80px 0;
}

@media (max-width: 992px) {
    .course-page {
        margin: 0 0 80px;
    }
}
</style>