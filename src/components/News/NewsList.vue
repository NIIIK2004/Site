<template>
    <ul class="news__list">
        <li class="news__item" v-for="cardNews in visibleNews" :key="cardNews.id">
            <div class="news-card">
                <img class="news-card__img" :src="cardNews.src" :alt="cardNews.alt" height="240">
                <div class="news-card__content">
                    <time class="news-card__date">{{ cardNews.date }}</time>
                    <h3 class="news-card__title">{{ cardNews.name }}</h3>
                    <router-link :to="{ name: 'news', params: { id: cardNews.id } }" @click.prevent="animateTransition"
                                 class="news-card__btn btn">Подробнее
                    </router-link>
                </div>
            </div>
        </li>
    </ul>
    <button class="news__btn btn" v-if="visibleNews.length < cardsNews.length" @click="loadMore">
        Просмотреть ещё
    </button>
</template>

<script>

export default {
    data() {
        return {
            cardsNews: [
                {
                    id: 1,
                    src: '../images/news/2.png',
                    alt: 'Общение в команде',
                    date: 'Дата публикации - 7 мая, 2023',
                    name: 'Учимся правильно общаться с людьми в команде на английском языке',
                },
                {
                    id: 2,
                    src: '../images/news/1.png',
                    alt: 'английский язык глаголы',
                    date: 'Дата публикации - 20 апреля, 2023',
                    name: 'Подробная статья о видах глаголов в английском языке',
                },
                {
                    id: 3,
                    src: '../images/news/4.png',
                    alt: 'Английский язык клуб',
                    date: 'Дата публикации - 20 апреля, 2023',
                    name: 'Английский разговорный клуб в эту субботу',
                },
                {
                    id: 4,
                    src: '../images/news/3.png',
                    alt: 'Общение в команде',
                    date: 'Дата публикации - 17 апреля, 2023',
                    name: 'Подарок ко дню Святого Валентина',
                },
                {
                    id: 5,
                    src: '../images/news/6.png',
                    alt: 'Первая помощь как быть',
                    date: 'Дата публикации - 12 апреля, 2023',
                    name: 'Как действовать при оказании первой помощи в английском языке',
                },
                {
                    id: 6,
                    src: '../images/news/5.png',
                    alt: 'Английский язык план изучения',
                    date: 'Дата публикации - 4 апреля, 2023',
                    name: 'Создаем мощный план работы над изучением английского языка',
                },
            ],
            visibleNewsCount: 4
        }
    },
    computed: {
        visibleNews() {
            return this.cardsNews.slice(0, this.visibleNewsCount);
        }
    },
    methods: {
        loadMore() {
            this.visibleNewsCount += 4;
        },
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
        },
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>

<style>
.news__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin-bottom: 30px;
}

.news__item {
    border-radius: 15px;
}

.news__item,
.news-card {
    display: flex;
    flex-direction: column;
}

.news-card {
    border-radius: 15px;
    background-color: #F8FFEB;
    flex-grow: 1;
}

.news-card__img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    background-repeat: no-repeat;
    border-radius: 15px 15px 0 0;
}

.news-card__content {
    padding: 20px 20px 35px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.news-card__date {
    font-size: 16px;
    color: #4A8400;
    line-height: 1.2;
    margin-bottom: 10px;
    display: block;
}

.news-card__title {
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 25px;
}

.news-card__btn {
    padding: 12px 50px;
    border-radius: 10px;
    font-size: 16px;
    margin-top: auto;
    align-self: flex-start;
}

.news__btn {
    padding: 12px 50px;
    display: block;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #2D2924;
    background-color: transparent;
    transition: border .3s, background-color .3s, color .3s;
}

.news__btn:hover {
    background-color: #B4FE1A;
    color: #2D2924;
    border-color: transparent;
}

@media (max-width: 992px) {
    .news__list {
        grid-template-columns: repeat(1, 1fr);
    }

    .news-card__img {
        height: 300px;
    }

    .news-card__title {
        font-size: 18px;
    }
}

@media (max-width: 768px) {
    .news-card__img {
        height: 250px;
    }
}

@media (max-width: 600px) {
    .news-card__content {
        padding: 20px 15px;
    }

    .news-card__img {
        height: 210px;
    }

    .news-card__btn {
        width: 100%;
    }
}

@media (max-width: 468px) {
    .news__list {
        grid-gap: 25px;
    }

    .news-card__date,
    .news-card__btn {
        font-size: 14px;
    }

    .news-card__title {
        font-size: 16px;
    }

    .news-card__img {
        height: 180px;
    }
}
</style>