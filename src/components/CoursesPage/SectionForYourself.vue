<template>
    <section class="course course__indent">
        <h2 class="course__title">Для себя</h2>
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
                    id: 13,
                    src: '../images/courses/ForYourself/1.jpg',
                    name: 'Дикция текста и слов',
                    description: 'Через данный курс вы сможете научиться читать примитивные и базисные конструкции',
                    quantity: '30 уроков / от 300₽ за урок'
                },
                {
                    id: 14,
                    src: '../images/courses/ForYourself/2.jpg',
                    name: 'Построение предложений',
                    description: 'Вы узнаете как строить предложения с разной сложностью контекста',
                    quantity: '3 урока / от 7000₽ за урок'
                },
                {
                    id: 15,
                    src: '../images/courses/ForYourself/3.jpg',
                    name: 'Изучение времён',
                    description: 'Вы узнаете какие существуют времена в языке, и научитесь их использовать правильно',
                    quantity: '10 уроков / от 200₽ за урок'
                },
                {
                    id: 16,
                    src: '../images/courses/ForYourself/4.jpg',
                    name: 'Составление писем и больших текстов',
                    description: 'Вы сможете по правилам языка составлять большие правильные текста, и научитесь составлять письма',
                    quantity: '70 уроков / от 1000₽ за урок'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>