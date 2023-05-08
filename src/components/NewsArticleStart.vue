<template>
    <section class="news-article__start image-cover" :style="backgroundImageInlineStyle">
        <div class="container">
            <div class="news-article__inner">
                <time class="news-article__date">Дата публикации - 7 мая, 2023</time>
                <h1 class="news-article__title">
                    Учимся правильно общаться с людьми в команде на английском языке
                </h1>
                <p class="news-article__text">
                    В данной статье вы можете получить новую информацию о том, как всегда поддерживать общение с
                    командой, и вы сможете применить эти навыки в реальной жизни
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        backgroundImageInlineStyle() {
            return `background-image: url("../images/news/2.png");`;
        }
    }
}
</script>

<style scoped>
.news-article__start {
    min-height: 520px;
    margin-bottom: 80px;
    background-position: top;
    position: relative;
}

.news-article__start::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
}

.news-article__inner {
    position: relative;
    z-index: 100;
    color: #fff;
    max-width: 940px;
    width: 100%;
    margin: 0 auto;
    padding: 60px 0 50px;
    text-align: center;
}

.news-article__date,
.news-article__title {
    margin-bottom: 30px;
}

.news-article__date {
    padding: 17px 30px;
    display: inline-block;
    font-size: 16px;
    line-height: 1;
    background: rgba(180, 254, 26, 0.1);
    border: 1px solid #B4FE1A;
    backdrop-filter: blur(10px);
}

.news-article__title {
    font-size: 40px;
    font-weight: 700;
}

.news-article__text {
    max-width: 580px;
    width: 100%;
    margin: 0 auto;
    font-size: 20px;
    line-height: 1.4;
}

@media (max-width: 1200px) {
    .news-article__inner {
        padding-top: 50px;
    }

    .news-article__title {
        font-size: 36px;
    }

    .news-article__text {
        max-width: 700px;
    }
}

@media (max-width: 992px) {
    .news-article__start {
        min-height: 400px;
        margin-bottom: 60px;
    }

    .news-article__title {
        font-size: 30px;
    }

    .news-article__text {
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    .news-article__start {
        margin-bottom: 50px;
    }

    .news-article__date {
        font-size: 14px;
    }

    .news-article__title {
        font-size: 26px;
        margin-bottom: 20px;
    }
}

@media (max-width: 600px) {
    .news-article__start {
        min-height: auto;
    }

    .news-article__inner {
        padding: 50px 0;
    }

    .news-article__title {
        font-size: 24px;
    }
}

@media (max-width: 468px) {
    .news-article__title {
        font-size: 22px;
    }

    .news-article__text {
        font-size: 14px;
    }
}
</style>