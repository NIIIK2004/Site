<template>
    <ul class="course__list">
        <li class="course__item" v-for="cardCourse in cardCourses" :key="cardCourse.id">
            <div class="course-card">
                <img class="course-card__img image-cover" :src="cardCourse.src" alt="" height="205">
                <div class="course-card__content">
                    <h3 class="course-card__title">{{ cardCourse.name }}</h3>
                    <p class="course-card__description">{{ cardCourse.description }}</p>
                    <div class="course-card__bottom">
                        <span class="course-card__quantity">{{ cardCourse.quantity }}</span>
                        <router-link :to="{ name: 'course', params: { id: cardCourse.id } }"
                                     class="course-card__link btn" target="_blank">Подробнее
                        </router-link>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        cardCourses: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style>
.course-card {
    background-color: #F1F1F1;
    border-radius: 15px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.course-card__img {
    width: 100%;
    margin-bottom: 35px;
    border-radius: 15px;
    object-fit: cover;
}

.course-card__content {
    padding: 0 15px 30px;
}

.course-card__title {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
}

.course-card__description,
.course-card__quantity {
    font-size: 16px;
}

.course-card__description {
    margin-bottom: 30px;
    line-height: 1.4;
}

.course-card__quantity {
    color: #919191;
    display: block;
    margin-bottom: 20px;
}

.course-card__bottom {
    margin-top: auto;
}

.course-card__link {
    font-size: 20px;
}

@media (max-width: 1200px) {
    .course-card__img {
        height: 180px;
        margin-bottom: 25px;
    }

    .course-card__title {
        font-size: 22px;
        margin-bottom: 15px;
    }
}

@media (max-width: 768px) {
    .course-card__title {
        font-size: 20px;
    }

    .course-card__quantity {
        font-size: 14px;
    }

    .course-card__link {
        font-size: 18px;
    }
}

@media (max-width: 600px) {
    .course-card__content {
        padding-bottom: 20px;
    }

    .course-card__link {
        display: block;
        text-align: center;
    }
}

@media (max-width: 468px) {
    .course-card__title {
        font-size: 18px;
    }

    .course-card__description {
        font-size: 14px;
    }

    .course-card__link {
        font-size: 16px;
    }
}
</style>