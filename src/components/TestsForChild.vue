<template>
    <div class="cards__blocks">
        <div class="cards__wrapper" v-for="card in cards" :key="card.id">
            <router-link to="/test" @click.prevent="animateTransition">
            <img :src="card.img" class="cards__wrapper-background">
            </router-link>
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
                    name: "Цвета",
                    img: "../images/alltests/img-for-card-child-1.jpg",
                    description: "Красный? Зеленый? Переведем и выучим!",
                },
                {
                    id: 2,
                    name: "Животные",
                    img: "../images/alltests/img-for-card-child-2.jpg",
                    description: "Узнаем как будет на английском “лев”?",
                },
                {
                    id: 3,
                    name: "Предметы",
                    img: "../images/alltests/img-for-card-child-3.jpg",
                    description: "Познакомимся с обыденными для детей предметами",
                },
            ]
        }
    }
}

</script>

<style scoped>

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
    color: #FFF;
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

@media (max-width: 658px) {

    .cards__blocks[data-v-2a1b2dd8] {
        flex-direction: column;
        margin: 0 auto;
        justify-content: center;
        display: grid;
    }
}
@media(max-width: 460px) {
    .cards__blocks[data-v-2a1b2dd8][data-v-2a1b2dd8] {
        justify-content: left;
    }

    .cards__wrapper {
        width: 100%;
    }


}
</style>
