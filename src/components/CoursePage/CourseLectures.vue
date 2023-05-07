<template>
    <h2 class="course-page__subtitle">Лекции:</h2>
    <ul class="course-page__list">
        <li class="course-page__item" v-for="item in items" :key="item.id">
            <p class="course-page__text">{{ item.text }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {id: 1, text: 'Старт курса - вводная лекция. Что такое общественные заведения и как себя вести'},
                {id: 2, text: 'Новые слова для того, чтобы говорить с людьми в общественных заведениях'},
                {id: 3, text: 'Как общаться с сотрудником при заказе'},
            ]
        }
    }
}
</script>