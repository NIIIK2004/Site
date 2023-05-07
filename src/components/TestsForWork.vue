<template>
    <h2 class="cards__title">Для работы</h2>
    <p class="cards__description">Данные тесты отлично подходят для тех, кто уже знает азы английского языка (уровни
        B1,B2)</p>
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

@media (max-width: 1150px) {
    .cards__title {
        text-align: center;
    }

    .cards__description {
        max-width: 50%;
        text-align: center;
        margin: 30px auto 0;
    }

    .cards__wrapper-description {
        font-size: 16px;
        line-height: 22px;
    }

    .cards__wrapper-title {
        font-size: 23px;
        line-height: 25px;
    }

    .cards__wrapper {
        width: 300px;
    }

    .cards__blocks {
        margin-top: 50px;
        justify-content: center;
    }
}

@media (max-width: 768px) {

    .cards__description {
        max-width: 70%;
    }

    .cards__blocks {
        margin-top: 20px;
        justify-content: center;
        gap: 10px;
    }
}

@media (max-width: 658px) {
    .cards__blocks {
        flex-direction: column;
    }

    .cards__wrapper {
        width: 100%;
    }

    .cards__wrapper-title {
        font-size: 26px;
        line-height: 30px;
        bottom: 80px;
    }

    .cards__wrapper-description {
        font-size: 20px;
        line-height: 23px;
        font-weight: 500;
        max-width: 368px;
    }

    .cards__wrapper-title {
        font-size: 26px;
        line-height: 30px;
        bottom: 106px;
    }

    .cards__blocks {
        flex-direction: column;
        margin: 0 auto;
        justify-content: center;
        display: grid;
    }

    .cards__description {
        margin-top: 20px;
        font-size: 19px;
        line-height: 22px;
        text-align: left;
        width: 380px;
    }

    @media (max-width: 460px) {
        .cards__title {
            text-align: left;
        }

        .cards__blocks {
            display: block;
        }

        .cards__wrapper-description {
            font-weight: 600;
        }

        .cards__description {
            font-size: 19px;
            line-height: 21px;
            text-align: left;
            margin: 20px 0 0;
        }
    }
    @media (max-width: 360px) {
        .cards__description {
            color: #C2C2C2;
            font-weight: 500;
        }

        .cards__description {
            width: 100%;
            max-width: 100%;
        }

        .cards__wrapper-description {
            font-weight: 500;
            font-size: 17px;
            line-height: 20px;
            max-width: unset;
            width: 100%;
        }

        .cards__wrapper-title {
            font-size: 26px;
            line-height: 30px;
            bottom: 90px;
            left: 15px;
        }
    }

}
</style>