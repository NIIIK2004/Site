<template>
    <h2 class="cards__title">Для работы</h2>
    <p class="cards__description">Данные тесты отлично подходят для тех, кто уже знает азы английского языка (уровни B1,B2)</p>
    <div class="cards__blocks">
        <div class="cards__wrapper" v-for="card in cards" :key="card.id">
            <img :src="card.img" class="cards__wrapper-background">
            <h3 class="cards__wrapper-title">{{ card.name }}</h3>
            <p class="cards__wrapper-description">{{ card.description }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "TestsForBeginner",

    data() {
        return {
            cards: [
                {
                    id: 1,
                    name: "Английский по фильмам",
                    img: "../images/alltests/img-for-card.jpg",
                    description: "Совершенствуйте английский по фразам из популярных фильмов и сериалов",
                },
                {
                    id: 2,
                    name: "Английский по фильмам",
                    img: "../images/alltests/img-for-card.jpg",
                    description: "Совершенствуйте английский по фразам из популярных фильмов и сериалов",
                },
                {
                    id: 3,
                    name: "Английский по фильмам",
                    img: "../images/alltests/img-for-card.jpg",
                    description: "Совершенствуйте английский по фразам из популярных фильмов и сериалов",
                },

                {
                    id: 4,
                    name: "Английский по фильмам",
                    img: "../images/alltests/img-for-card.jpg",
                    description: "Совершенствуйте английский по фразам из популярных фильмов и сериалов",
                },
                {
                    id: 5,
                    name: "Английский по фильмам",
                    img: "../images/alltests/img-for-card.jpg",
                    description: "Совершенствуйте английский по фразам из популярных фильмов и сериалов",
                },
                {
                    id: 6,
                    name: "Английский по фильмам",
                    img: "../images/alltests/img-for-card.jpg",
                    description: "Совершенствуйте английский по фразам из популярных фильмов и сериалов",
                },
            ]
        }
    }
}

</script>

<style>

.cards__title {
    font-family: 'Stolzl';
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    color: #2D2924;
}

.cards__description {
    margin-top: 20px;
    font-family: 'Stolzl';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #2D2924;
    margin-bottom: 30px;
}

.cards__blocks {
    display: flex;
    flex-wrap: wrap;
    gap: 23px;
}
.cards__wrapper {
    position: relative;
    margin-top: 30px;
    width: 323px;
}

.cards__wrapper-title {
    position: absolute;
    max-width: 250px;
    bottom: 100px;
    left: 22px;
    word-wrap: break-word;
    font-family: 'Stolzl';
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #B4FE1A;
}

.cards__wrapper-background {

    border-radius: 15px;
}

.cards__wrapper-description {
    margin-top: 15px;

    font-family: 'Stolzl';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #2D2924;
}

</style>