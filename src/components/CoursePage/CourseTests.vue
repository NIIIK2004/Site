<template>
    <h2 class="course-page__subtitle">Тесты:</h2>
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
                {id: 1, text: 'Прохождение терминов темы'},
                {id: 2, text: 'Изучаем новые слова, словосочетания, построение предложений и т.д.'},
                {id: 3, text: 'Как быть если поругался с сотрудником'},
                {id: 4, text: 'Ответы на звонки от сотрудников заведений'},
                {id: 5, text: 'Финальный тест для закрепления темы'}
            ]
        }
    }
}
</script>

<style>
.course-page__subtitle {
    font-size: 30px;
    line-height: 1;
    margin-bottom: 40px;
}

.course-page__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
}

.course-page__item {
    background-color: #B4FE1A;
    padding: 25px;
    border-radius: 15px;
}

.course-page__text {
    padding-top: 18px;
    position: relative;
}

.course-page__text::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 3px;
    background-color: #2D2924;
}
</style>