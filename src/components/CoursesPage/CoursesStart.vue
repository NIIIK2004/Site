<template>
    <section class="start">
        <div class="start__inner">
            <h1 class="start__title page-title">
                Курсы английского языка онлайн под ваши цели
            </h1>
            <p class="start__text">
                Составим программу обучения, исходя из ваших интересов, подберем уроки по самым актуальным темам под
                ваши запросы и цели.
            </p>
        </div>
    </section>
</template>

<style scoped>
.start {
    margin: 70px 0 50px;
}

.start__inner {
    max-width: 900px;
}

.start__title {
    margin-bottom: 50px;
}

.start__text {
    max-width: 700px;
    font-size: 22px;
}

@media (max-width: 1200px) {
    .start__title {
        margin-bottom: 30px;
    }

    .start__text {
        font-size: 20px;
    }
}

@media (max-width: 992px) {
    .start {
        margin: 40px 0;
    }

    .start__title {
        margin-bottom: 20px;
    }
}

@media (max-width: 768px) {
    .start__text {
        font-size: 18px;
    }
}

@media (max-width: 468px) {
    .start__text {
        font-size: 16px;
    }
}
</style>
<script setup>
</script>