<template>
    <section class="reviews">
        <div class="container">
            <h2 class="reviews__title section-title">
                С нашими курсами ученики достигают своих целей быстрее и чётче!
            </h2>
            <ul class="reviews__list">
                <li class="reviews__item" v-for="review in visibleReviews" :key="review.id">
                    <div class="reviews__top">
                        <img class="reviews__img image-cover" :src="review.src" alt="отзывы курсы английского языка"
                             width="70" height="70">
                        <div class="reviews__data">
                            <h3 class="reviews__name">{{ review.name }}</h3>
                            <time class="reviews__date">{{ review.date }}</time>
                        </div>
                    </div>
                    <span class="reviews__preview-text">{{ review.previewText }}</span>
                    <p class="reviews__text">{{ review.text }}</p>
                </li>
            </ul>
            <button class="reviews__btn btn" v-if="visibleReviews.length < reviews.length" @click="loadMore">Просмотреть
                ещё
            </button>
        </div>
    </section>
    <div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reviews: [
                {
                    id: 1,
                    src: '../images/reviews/1.jpg',
                    name: 'Олег',
                    date: '18 апреля 2023',
                    previewText: 'Я счастлив!',
                    text: 'Благодаря курсу “Английский для работы” я могу работать киберспортсменом в полной мере. Мои оппоненты не выдерживают града оскорблений в их адрес и покидают игру. Из-за вашего курса я выиграл уже более 50.000 рублей на турнирах по Dota 2. Спасибо команде Astyx, а также учителю Абубачиру.'
                },
                {
                    id: 2,
                    src: '../images/reviews/2.jpg',
                    name: 'Дмитрий',
                    date: '18 апреля 2023',
                    previewText: 'Очень понравился курс',
                    text: 'Купил себе курс “Английский с нуля”, очень долго думал нужно ли оно мне, но по итогу решился и ни разу не пожалел. С момента прохождения курса прошло 4 месяца и я уже был в нескольких странах Европы, где спокойно и без запинок общался с местными жителями. Не знаю, что я делал бы без вашего курса. Спасибо огромное команде Astyx (в частности куратору Аркадию) за проделанную работу и доведение меня до уровня Advanced.'
                },
                {
                    id: 3,
                    src: '../images/reviews/3.jpg',
                    name: 'Илья',
                    date: '18 апреля 2023',
                    previewText: 'Я счастлив!',
                    text: 'Очень хороший и подробный курс, выиграла в конкурсе и сэкономила 30.000 рублей, но если бы не выиграла и купила его за свои деньги все равно бы не пожалела, потому что видно, что над курсом старались опытные ребята!'
                },
                {
                    id: 4,
                    src: '../images/reviews/2.jpg',
                    name: 'Дмитрий',
                    date: '18 апреля 2023',
                    previewText: 'Я счастлив!',
                    text: 'Купил себе курс “Английский с нуля”, очень долго думал нужно ли оно мне, но по итогу решился и ни разу не пожалел. С момента прохождения курса прошло 4 месяца и я уже был в нескольких странах Европы, где спокойно и без запинок общался с местными жителями. Не знаю, что я делал бы без вашего курса. Спасибо огромное команде Astyx (в частности куратору Аркадию) за проделанную работу и доведение меня до уровня Advanced.'
                },
                {
                    id: 5,
                    src: '../images/reviews/1.jpg',
                    name: 'Илья',
                    date: '18 апреля 2023',
                    previewText: 'Очень доволен',
                    text: 'Очень хороший и подробный курс, выиграла в конкурсе и сэкономила 30.000 рублей, но если бы не выиграла и купила его за свои деньги все равно бы не пожалела, потому что видно, что над курсом старались опытные ребята!'
                },
            ],
            visibleReviewsCount: 3
        }
    },
    computed: {
        visibleReviews() {
            return this.reviews.slice(0, this.visibleReviewsCount);
        }
    },
    methods: {
        loadMore() {
            this.visibleReviewsCount += 3;
        }
    }
}
</script>

<style scoped>
.reviews {
    padding: 50px 0 60px;
    background-color: #F5F5F5;
}

.reviews__title {
    max-width: 930px;
}

.reviews__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
    margin-bottom: 50px;
}

.reviews__item {
    background-color: #fff;
    border-radius: 25px;
    padding: 30px;
}

.reviews__top {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
}

.reviews__img {
    margin-right: 20px;
    border-radius: 50%;
    object-fit: cover;
}

.reviews__name,
.reviews__data {
    line-height: 1;
}

.reviews__name {
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 20px;
}

.reviews__preview-text {
    margin-bottom: 15px;
    display: block;
    font-size: 20px;
    font-weight: 600;
}

.reviews__text {
    font-size: 16px;
    line-height: 1.4;
}

.reviews__btn {
    border-radius: 10px;
    font-size: 20px;
    margin: 0 auto;
    display: block;
}

@media (max-width: 1200px) {
    .reviews__list {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 992px) {
    .reviews__item {
        padding: 25px;
    }

    .reviews__name,
    .reviews__preview-text {
        font-size: 18px;
    }

    .reviews__data {
        font-size: 16px;
    }

    .reviews__text {
        font-size: 14px;
    }
}

@media (max-width: 768px) {
    .reviews__list {
        grid-template-columns: repeat(1, 1fr);
    }

    .reviews__img {
        width: 60px;
        height: 60px;
    }

    .reviews__preview-text {
        font-size: 16px;
        margin-bottom: 10px;
    }
}
</style>