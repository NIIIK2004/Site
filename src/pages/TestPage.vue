<template>
    <div class="container">
        <div class="test__general">
            <div class="test__left">
                <img src="../../public/images/test/decor-for-test.svg" alt="your_test" class="test__left-img">
            </div>
            <div class="test__right">
                <h1 class="test__title">Английский по фильмам</h1>
                <p class="test__description">Совершенствуйте английский по фразам из популярных фильмов и сериалов</p>
                <p class="test__cost">120 000 Рублей</p>
                <button class="test__btn btn">Начать тест</button>
                <div class="test__dop-info">
                    <span>Подойдет для собеседования</span>
                    <span>Сложность: легкий</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

body {
    background: #F8FFEB;
    height: auto;
}

.test__general {
    display: flex;
    justify-content: space-between;
    margin-top: 200px;
    align-items: center;
}

.test__left {
    margin-right: 30px;
}

.test__left-img {
}

.test__right {

}

.test__title {
    margin-top: 20px;
    font-family: 'Stolzl';
    font-weight: 600;
    font-size: 40px;
    line-height: 130%;
    color: #1A1A1A;
}

.test__description {
    margin-top: 20px;
    font-family: 'Stolzl';
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
    color: #2D2924;
    max-width: 550px;
}

.test__cost {
    margin-top: 20px;
    font-family: 'Stolzl';
    font-weight: 600;
    font-size: 40px;
    line-height: 58px;
    color: #2D2924;
}

.test__btn {
    margin-top: 50px;
    padding: 20px 45px;
    border-radius: 8px;
    cursor: pointer;

    font-family: 'Stolzl';
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
}

.test__dop-info {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.test__dop-info span {
    font-family: 'Stolzl';
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    color: #2D2924;
}

@media (max-width: 1140px) {
    .test__cost,
    .test__title {
        font-size: 32px;
    }

    .test__cost {
        margin-top: 5px;
    }

    .test__description[data-v-3a85db36] {
        margin-top: 5px;
        font-size: 18px;
    }

    .test__btn {
        margin-top: 10px;
        font-size: 18px;
        padding: 15px 30px;
    }

    .test__dop-info span {
        font-size: 15px;
    }

    @media (max-width: 926px) {
        .test__general {
            flex-direction: column;
        }

        .test__left {
            width: 100%;
            margin-right: 0;
        }
        .test__general {
            margin-top: 0px;
        }
        .test__general {
            align-items: unset;
        }
        .test__left-img[data-v-3a85db36] {
            width: 100%;
            height: 350px;
            object-fit: cover;
        }
        .test__cost, .test__title {
            font-size: 48px;
        }
        .test__cost,
        .test__description {
            margin-top: 25px;
        }
        .test__btn[data-v-3a85db36] {
            margin-top: 30px;
        }
    }
}
</style>