<template>
    <section class="interesting-test indent">
        <h2 class="interesting-test__title section-title">Интересные тесты и бесплатные курсы</h2>
        <div class="interesting-test__inner">
            <div class="interesting-test__left">
                <div class="interesting-test__item">
                    <img class="interesting-test__icon image-cover" :src="quick" alt="изучение английского языка"
                         width="50"
                         height="50">
                    <h3 class="interesting-test__name">Быстрый старт</h3>
                    <p class="interesting-test__text">
                        Уже после первого урока вы значительно повысите свой уровень английского
                    </p>
                </div>
                <div class="interesting-test__item">
                    <img class="interesting-test__icon image-cover" :src="progress" alt="изучение английского языка"
                         width="50"
                         height="50">
                    <h3 class="interesting-test__name">Наглядный прогресс</h3>
                    <p class="interesting-test__text">
                        Следите за своим прогрессом прямо из личного кабинета
                    </p>
                </div>
            </div>
            <div class="interesting-test__item interesting-test__item--big">
                <h3 class="interesting-test__name">Все знания под рукой</h3>
                <p class="interesting-test__text">
                    Весь ваш прогресс по изучению английского сохраняется на удобном и функциональном сайте
                </p>
                <img class="interesting-test__img" :src="bigItem" alt="" width="400" height="310">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "InterestingTests",
    data() {
        return {
            quick: '../images/icons/quick.png',
            progress: '../images/icons/progress.png',
            bigItem: '../images/MainPage/tablet-phone.svg'
        }
    }
}
</script>

<style scoped>
.interesting-test__title {
    margin-bottom: 50px;
}

.interesting-test__inner {
    display: flex;
}

.interesting-test__left {
    max-width: 360px;
    margin-right: 20px;
}

.interesting-test__item {
    background-color: #F6F6F6;
    padding: 30px 25px;
    border-radius: 25px;
}

.interesting-test__item--big {
    position: relative;
    background-color: #DBDEFF;
    padding: 40px 50px;
    width: 100%;
}

.interesting-test__item--big .interesting-test__text {
    font-size: 22px;
    max-width: 550px;
}

.interesting-test__item:not(:last-child) {
    margin-bottom: 20px;
}

.interesting-test__icon {
    margin-bottom: 25px;
}

.interesting-test__name {
    font-size: 24px;
    margin-bottom: 20px;
}

.interesting-test__img {
    position: absolute;
    right: 0;
    bottom: 0;
}

@media (max-width: 1200px) {
    .interesting-test__title {
        margin-bottom: 30px;
    }

    .interesting-test__name {
        font-size: 22px;
    }

    .interesting-test__item--big {
        padding: 35px;
    }

    .interesting-test__item--big .interesting-test__text {
        font-size: 20px;
    }

    .interesting-test__img {
        width: 345px;
        height: 265px;
    }
}

@media (max-width: 992px) {
    .interesting-test__inner {
        flex-direction: column;
    }

    .interesting-test__left {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        margin-right: 0;
        margin-bottom: 20px;
        max-width: 100%;
    }

    .interesting-test__item {
        padding: 25px;
    }

    .interesting-test__item:not(:last-child) {
        margin-bottom: 0;
    }

    .interesting-test__icon {
        width: 40px;
        height: 40px;
        margin-bottom: 20px;
    }

    .interesting-test__name {
        font-size: 20px;
        margin-bottom: 15px;
    }

    .interesting-test__text,
    .interesting-test__item--big .interesting-test__text {
        font-size: 16px;
    }

    .interesting-test__img {
        display: none;
    }
}

@media (max-width: 768px) {
    .interesting-test__icon {
        width: 30px;
        height: 30px;
    }

    .interesting-test__name {
        font-size: 18px;
    }
}

@media (max-width: 600px) {
    .interesting-test__left {
        grid-template-columns: repeat(1, 1fr);
    }
}

@media (max-width: 468px) {
    .interesting-test__item {
        padding: 20px;
    }

    .interesting-test__icon {
        width: 25px;
        height: 25px;
        margin-bottom: 15px;
    }

    .interesting-test__name {
        font-size: 16px;
    }

    .interesting-test__text,
    .interesting-test__item--big .interesting-test__text {
        font-size: 14px;
    }
}
</style>