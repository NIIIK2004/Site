<template>
    <h2 class="cards__title">Для начинающих</h2>
    <p class="cards__description">Данные тесты отлично подходят для тех, кто только начал изучать английский язык
        (уровни A0,A1,A2)</p>
    <div class="cards__blocks">
        <div class="cards__wrapper" v-for="card in cards" :key="card.id">
            <router-link to="/test" @click.prevent="animateTransition"><img :src="card.img" class="cards__wrapper-background"></router-link>
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
    },
    methods: {
        animateTransition() {
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'white';
            overlay.style.zIndex = '9999';

            const slide = document.createElement('div');
            slide.style.position = 'fixed';
            slide.style.bottom = '0';
            slide.style.left = '0';
            slide.style.width = '100%';
            slide.style.height = '0';
            slide.style.background = '#CAFD5E';
            slide.style.zIndex = '10000';
            slide.style.transition = 'all 0.5s ease-in-out';

            document.body.appendChild(overlay);
            document.body.appendChild(slide);

            setTimeout(() => {
                slide.style.height = '100vh';
                setTimeout(() => {
                    slide.style.transform = 'translateY(-50%)';
                    setTimeout(() => {
                        slide.style.transform = 'translateY(-100%)';
                        overlay.style.opacity = '0';
                        setTimeout(() => {
                            document.body.removeChild(overlay);
                            document.body.removeChild(slide);
                        }, 500);
                    }, 500);
                }, 500);
            }, 10);
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