<template>
    <h2 class="course-page__subtitle">Тесты:</h2>
    <ul class="course-page__list course-page__list--tests">
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

.course-page__list--tests {
    margin-bottom: 110px;
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

@media (max-width: 1200px) {
    .course-page__subtitle {
        font-size: 26px;
        margin-bottom: 25px;
    }

    .course-page__list--tests {
        margin-bottom: 80px;
    }
}

@media (max-width: 992px) {
    .course-page__subtitle {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .course-page__list--tests {
        margin-bottom: 60px;
    }
}

@media (max-width: 768px) {
    .course-page__subtitle {
        font-size: 22px;
    }

    .course-page__list {
        grid-template-columns: repeat(1, 1fr);
    }
}

@media (max-width: 600px) {
    .course-page__subtitle {
        font-size: 20px;
    }

    .course-page__text {
        font-size: 16px;
    }
}

@media (max-width: 468px) {
    .course-page__text {
        font-size: 14px;
    }
}
</style>