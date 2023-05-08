<template>
    <section class="about-lesson">
        <h2 class="about-lesson__title section-title">Что будет на уроке:</h2>
        <ul class="about-lesson__list">
            <li class="about-lesson__item" v-for="item in items" :key="item.id">
                <span class="about-lesson__number">#{{ item.id }}</span>
                <p class="about-lesson__text">{{ item.text }}</p>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {id: 1, text: "Знакомство с преподавателем и английским языком"},
                {id: 2, text: "Работа с вступительными темами — изучение слов, и построение предложений"},
                {id: 3, text: "План изучения английского языка"},
                {id: 4, text: "Создание плана по изучению работы с курсом"},
            ],
        };
    },
}
</script>

<style scoped>
.about-lesson {
    margin-bottom: 70px;
}

.about-lesson__title {
    margin-bottom: 40px;
}

.about-lesson__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
}

.about-lesson__item {
    padding: 25px 20px;
    background-color: #B4FE1A;
    border-radius: 10px;
}

.about-lesson__number {
    display: block;
    margin-bottom: 15px;
    font-size: 38px;
    line-height: 1;
    font-weight: 600;
}

.about-lesson__text {
    font-size: 22px;
}

@media (max-width: 1200px) {
    .about-lesson__title {
        margin-bottom: 30px;
    }

    .about-lesson__list {
        gap: 20px;
    }

    .about-lesson__number {
        font-size: 34px;
        margin-bottom: 10px;
    }

    .about-lesson__text {
        font-size: 20px;
    }
}

@media (max-width: 992px) {
    .about-lesson__number {
        font-size: 28px;
        margin-bottom: 10px;
    }

    .about-lesson__text {
        font-size: 18px;
    }
}

@media (max-width: 768px) {
    .about-lesson__title {
        margin-bottom: 20px;
    }

    .about-lesson__list {
        grid-template-columns: repeat(1, 1fr);
    }

    .about-lesson__number {
        font-size: 26px;
    }
}

@media (max-width: 600px) {
    .about-lesson {
        margin-bottom: 50px;
    }

    .about-lesson__text {
        font-size: 16px;
    }

    .about-lesson__item {
        padding: 20px;
    }

    .about-lesson__number {
        font-size: 24px;
    }
}

@media (max-width: 468px) {
    .about-lesson__number {
        font-size: 22px;
    }

    .about-lesson__text {
        font-size: 14px;
    }
}
</style>