<template>
    <div class="news__start">
        <h1 class="news__title page-title">
            Новости по английскому языку от нашей школы
        </h1>
        <p class="news__text">
            Добро пожаловать на страницу новостей. Здесь вы можете прочитать различные новости нашей школы, получив
            новую информацию для вашей жизни
        </p>
    </div>
</template>

<script setup>

</script>

<style>
.news__start {
    max-width: 900px;
    margin: 70px 0 80px;
}

.news__title {
    margin-bottom: 25px;
}

.news__text {
    max-width: 740px;
    font-size: 24px;
}

@media (max-width: 1200px) {
    .news__start {
        margin: 50px 0 70px;
    }

    .news__text {
        font-size: 22px;
    }
}

@media (max-width: 992px) {
    .news__start {
        margin: 50px 0;
    }

    .news__text {
        font-size: 20px;
    }
}

@media (max-width: 768px) {
    .news__start {
        margin: 30px 0;
    }

    .news__text {
        font-size: 18px;
    }
}

@media (max-width: 600px) {
    .news__title {
        margin-bottom: 20px;
    }

    .news__text {
        font-size: 16px;
    }
}
</style>