<template>
    <section class="start image-cover">
        <div class="container">
            <div class="start__inner">
                <h1 class="start__title page-title">
                    Уроки английского в онлайн-школе Astyx
                </h1>
                <p class="start__text">
                    Поможем быстро выучить английский язык, и научим грамотно использовать его в жизни
                </p>
                <a class="start__btn btn" href="#">Узнать уровень английского</a>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.start {
    height: 100vh;
    background-image: url("../../public/images/MainPage/start.jpg");
    position: relative;
    margin-bottom: 120px;
}

.start__inner {
    padding-top: 190px;
    position: relative;
    z-index: 50;
    color: #fff;
    max-width: 730px;
    width: 100%;
}

.start::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
}

.start__title {
    margin-bottom: 25px;
}

.start__text {
    font-size: 24px;
    margin-bottom: 60px;
    line-height: 1.3;
    font-weight: 400;
}

.start__btn:hover {
    color: #fff;
}

@media (max-width: 1200px) {
    .start__inner {
        padding-top: 120px;
    }

    .start__text {
        font-size: 22px;
        max-width: 600px;
        margin-bottom: 40px;
    }
}

@media (max-width: 992px) {
    .start {
        margin-bottom: 80px;
    }

    .start__text {
        font-size: 20px;
    }
}

@media (max-width: 768px) {
    .start__inner {
        padding-top: 100px;
    }

    .start__text {
        font-size: 18px;
    }
}

@media (max-width: 600px) {
    .start {
        margin-bottom: 60px;
    }

    .start__text {
        font-size: 16px;
    }
}
</style>