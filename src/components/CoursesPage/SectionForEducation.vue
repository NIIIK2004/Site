<template>
    <section class="course course__indent">
        <h2 class="course__title">Для учёбы</h2>
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
                    id: 10,
                    src: '../images/courses/ForEducation/1.jpg',
                    name: 'Дикция и чтение',
                    description: 'Вы сможете научится грамотно читать текст, развивая при этом свою дикцию на английском',
                    quantity: '7 уроков / от 500₽ за урок'
                },
                {
                    id: 11,
                    src: '../images/courses/ForEducation/2.jpg',
                    name: 'Употребление артиклей, предлоги',
                    description: 'Вы узнаете как путешествовать на самолете и ориентироваться в аэропорту.',
                    quantity: '15 уроков / от 500₽ за урок'
                },
                {
                    id: 12,
                    src: '../images/courses/ForEducation/3.jpg',
                    name: 'Изучение глаголов',
                    description: 'Вы узнаете как вести себя в общественных местах, в том числе в отеле, кафе, ресторанах',
                    quantity: '60 уроков / от 100₽ за урок'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>