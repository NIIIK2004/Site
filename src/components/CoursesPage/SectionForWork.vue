<template>
    <section class="course course__indent">
        <h2 class="course__title">Для работы</h2>
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
                    id: 5,
                    src: '../images/courses/ForWork/1.jpg',
                    name: 'Работа в команде',
                    description: 'Стендапы, планирование спринтов, демонстрация навыков командной работы на собеседовании',
                    quantity: '5 уроков / от 600₽ за урок'
                },
                {
                    id: 6,
                    src: '../images/courses/ForWork/2.jpg',
                    name: 'Для сферы IT',
                    description: 'Общение в процессе работы над кодом. Код-ревью, парное программирование',
                    quantity: '35 уроков / от 3000₽ за урок'
                },
                {
                    id: 7,
                    src: '../images/courses/ForWork/3.jpg',
                    name: 'Общение с заказчиком',
                    description: 'Общение с заказчиками. Уточнение технического задания, решение спорных ситуаций',
                    quantity: '7 уроков / от 560₽ за урок'
                },
                {
                    id: 8,
                    src: '../images/courses/ForWork/4.jpg',
                    name: 'Нетворкинг',
                    description: 'Выступление на митапах, неформальное общение с коллегами из отрасли',
                    quantity: '70 уроков / от 9000₽ за урок'
                },
                {
                    id: 9,
                    src: '../images/courses/ForWork/5.jpg',
                    name: 'Самопрезентация',
                    description: 'Рассказ о своей роли, задачах, сфере ответственности на поведенческом интервью и в неформальной беседе',
                    quantity: '3 урока / от 1300₽ за урок'
                }
            ]
        }
    }
}
</script>