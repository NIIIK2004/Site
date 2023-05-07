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
                <router-link class="start__btn btn" to="/singletest" @click.prevent="animateTransition">Узнать уровень
                    английского
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
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
        }
    }
}
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

.start__btn {
    transition: border .3s, background-color .3s;
    border: 2px solid transparent;
    background-color: #B4FE1A;
}

.start__btn:hover {
    color: #fff;
    background-color: transparent;
    border-color: #B4FE1A;
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