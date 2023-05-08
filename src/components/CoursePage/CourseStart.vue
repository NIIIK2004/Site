<template>
    <div class="course-page__top">
        <div class="course-page__content">
            <h1 class="course-page__title page-title">
                Курс - Hotel and restaurants
            </h1>
            <p class="course-page__description">
                Вы узнаете как вести себя в общественных местах, в том числе в отеле, кафе, ресторанах
            </p>
            <a class="course-page__btn btn" href="">Приобрести курс</a>
        </div>
        <img class="course-page__img" src="/images/courses/ForTravel/3.jpg" alt="" width="500" height="500">
    </div>
</template>

<script setup>

</script>

<style scoped>
.course-page__top {
    display: flex;
    align-items: center;
    margin-bottom: 100px;
}

.course-page__content {
    max-width: 600px;
    width: 100%;
    margin-right: 50px;
}

.course-page__title {
    margin-bottom: 30px;
}

.course-page__description {
    font-size: 24px;
    margin-bottom: 50px;
}

.course-page__btn {
    padding: 17px 35px;
    font-size: 20px;
    border-radius: 10px;
}

.course-page__img {
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
    background-repeat: no-repeat;
}

@media (max-width: 1200px) {
    .course-page__top {
        margin-bottom: 70px;
    }

    .course-page__content {
        margin-right: 30px;
    }

    .course-page__description {
        font-size: 20px;
        margin-bottom: 40px;
    }

    .course-page__img {
        width: 450px;
        height: 450px;
    }
}

@media (max-width: 992px) {
    .course-page__top {
        flex-direction: column-reverse;
        align-items: flex-start;
    }

    .course-page__content {
        margin-right: 0;
        max-width: 100%;
    }

    .course-page__img {
        width: 100%;
        margin-bottom: 40px;
        border-radius: 0;
        height: 300px;
    }
}

@media (max-width: 768px) {
    .course-page__title {
        margin-bottom: 20px;
    }

    .course-page__description,
    .course-page__btn {
        font-size: 18px;
    }
}

@media (max-width: 600px) {
    .course-page__description,
    .course-page__btn {
        font-size: 16px;
    }

    .course-page__img {
        margin-bottom: 30px;
        height: 250px;
    }

    .course-page__description {
        margin-bottom: 40px;
    }
}

@media (max-width: 468px) {
    .course-page__img {
        height: 220px;
    }
}
</style>