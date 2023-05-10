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
                        <router-link class="course-card__link btn"
                                     :to="{ name: 'course', params: { id: cardCourse.id } }"
                                     @click.prevent="animateTransition">
                            Подробнее
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
    methods: {
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
    }
};
</script>

<style scoped>
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