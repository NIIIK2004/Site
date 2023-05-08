<template>
    <section class="start-lesson">
        <div class="start-lesson__content">
            <h1 class="start-lesson__title page-title">
                Записаться на оффлайн урок
            </h1>
            <p class="start-lesson__text">
                Вы имеете возможность на урок, чтобы получить для себя знакомство с преподавателем и начать прохождение
                курса
            </p>
        </div>
        <img class="start-lesson__img" src="/images/doyouspeak.svg" alt="записаться на урок английский" width="360"
             height="360">
    </section>
</template>

<style scoped>
.start-lesson {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 80px 0 100px;
}

.start-lesson__content {
    max-width: 650px;
    width: 100%;
    margin-right: 30px;
}

.start-lesson__title {
    margin-bottom: 25px;
}

.start-lesson__text {
    font-size: 22px;
}

@media (max-width: 1200px) {
    .start-lesson {
        margin: 60px 0 80px;
    }

    .start-lesson__text {
        font-size: 20px;
    }
}

@media (max-width: 992px) {
    .start-lesson {
        margin: 50px 0 60px;
    }

    .start-lesson__content {
        margin-right: 0;
    }

    .start-lesson__img {
        display: none;
    }
}

@media (max-width: 768px) {
    .start-lesson__text {
        font-size: 18px;
    }
}

@media (max-width: 600px) {
    .start-lesson {
        margin: 50px 0;
    }

    .start-lesson__text {
        font-size: 16px;
    }
}

@media (max-width: 468px) {
    .start-lesson {
        margin: 40px 0;
    }

    .start-lesson__text {
        font-size: 14px;
    }
}
</style>