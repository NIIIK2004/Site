<template>
    <h2 class="cards__title">Для знакомых с английским</h2>
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
                    img: "../images/alltests/img-for-card-2.jpg",
                    description: "Совершенствуйте английский по фразам из популярных фильмов и сериалов",
                },
                {
                    id: 2,
                    name: "Английский по фильмам",
                    img: "../images/alltests/img-for-card-2.jpg",
                    description: "Совершенствуйте английский по фразам из популярных фильмов и сериалов",
                },
                {
                    id: 3,
                    name: "Английский по фильмам",
                    img: "../images/alltests/img-for-card-2.jpg",
                    description: "Совершенствуйте английский по фразам из популярных фильмов и сериалов",
                },

                {
                    id: 4,
                    name: "Английский по фильмам",
                    img: "../images/alltests/img-for-card-2.jpg",
                    description: "Совершенствуйте английский по фразам из популярных фильмов и сериалов",
                },
                {
                    id: 5,
                    name: "Английский по фильмам",
                    img: "../images/alltests/img-for-card-2.jpg",
                    description: "Совершенствуйте английский по фразам из популярных фильмов и сериалов",
                },
                {
                    id: 6,
                    name: "Английский по фильмам",
                    img: "../images/alltests/img-for-card-2.jpg",
                    description: "Совершенствуйте английский по фразам из популярных фильмов и сериалов",
                },
            ]
        }
    }
}

</script>

<style>

</style>