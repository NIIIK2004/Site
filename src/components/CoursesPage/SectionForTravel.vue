<template>
    <section class="course course__indent">
        <h2 class="course__title">Для путешествий</h2>
        <CourseCard :cardCourses="courses"/>
    </section>
</template>

<script>
import CourseCard from "@/components/CoursesPage/CourseCard.vue";

export default {
    components: {CourseCard},
    data() {
        return {
            courses: [
                {
                    id: 1,
                    src: '../images/courses/ForTravel/2.jpg',
                    name: 'Introductory lesson',
                    description: 'Вы узнаете  как сделать отдых простым и приятным, подготовиться к проблемам, предотвращать и решать их',
                    quantity: '15 уроков / от 900₽ за урок'
                },
                {
                    id: 2,
                    src: '../images/courses/ForTravel/1.jpg',
                    name: 'Airport',
                    description: 'Вы узнаете как путешествовать на самолете и ориентироваться в аэропорту.',
                    quantity: '15 уроков / от 500₽ за урок'
                },
                {
                    id: 3,
                    src: '../images/courses/ForTravel/3.jpg',
                    name: 'Hotel and restaurants',
                    description: 'Вы узнаете как вести себя в общественных местах, в том числе в отеле, кафе, ресторанах',
                    quantity: '15 уроков / от 3000₽ за урок'
                },
                {
                    id: 4,
                    src: '../images/courses/ForTravel/4.jpg',
                    name: 'Dealing with problems',
                    description: 'Вы узнаете как решать бытовые трудности в путешествиях и перемещаться по маршруту без трудностей.',
                    quantity: '15 уроков / от 900₽ за урок'
                }
            ]
        }
    }
}
</script>