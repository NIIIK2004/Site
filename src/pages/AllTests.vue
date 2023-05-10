<template>
    <NavigationComponent/>
    <div class="container">
        <section class="test__information">
            <h1 class="test__information-title section-title">Тесты</h1>
            <filtres-for-tests/>
        </section>

        <section class="indent">
            <TestsForBeginner/>
        </section>
        <section class="indent">
            <TestsForMiddle/>
        </section>
        <section class="indent">
            <TestsForSenior/>
        </section>

        <section class="TestsByGoals__information indent" id="tasks">
            <div class="TestsByGoals__information-left">
                <h2 class="TestsByGoals__information-title section-title">Тесты по целям</h2>
                <p class="TestsByGoals__information-description">Специально для вас отсортировали тесты по уровням от
                    Начинающего до Продвинутого!</p>
            </div>
            <div class="TestsByGoals__information-right">
                <img src="../../public/images/alltests/drotic.svg" alt="decor">
            </div>
        </section>

        <section class="indent">
            <TestsForTravel/>
        </section>
        <section class="indent">
            <TestsForWork/>
        </section>
        <section class="indent">
            <TestsForStudy/>
        </section>

        <section class="TestsByChild__information indent" id="child">
            <div class="TestsByChild__information-left">
                <h2 class="TestsByChild__information-title section-title">Тесты для детей</h2>
                <p class="TestsByChild__information-description">Английский для самых маленьких!</p>
            </div>
            <div class="TestsByChild__information-right">
                <img src="../../public/images/alltests/piramidka.svg" alt="decor">
            </div>
        </section>

        <section class="indent">
            <TestsForChild/>
        </section>


        <ContactsFormComponent/>
    </div>
    <FooterComponent/>
</template>

<script>

import {defineComponent} from "vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ContactsFormComponent from "@/components/ContactsFormComponent.vue";
import FiltresForTests from "@/components/FiltresForTests.vue";

import TestsForBeginner from "@/components/TestsForBeginner.vue";
import TestsForMiddle from "@/components/TestsForMiddle.vue";
import TestsForSenior from "@/components/TestsForSenior.vue";

import TestsForStudy from "@/components/TestsForStudy.vue";
import TestsForTravel from "@/components/TestsForTravel.vue";
import TestsForWork from "@/components/TestsForWork.vue";
import TestsForChild from "@/components/TestsForChild.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";

export default defineComponent({
    components: {
        NavigationComponent,
        TestsForChild,
        TestsForBeginner,
        TestsForMiddle,
        TestsForSenior,
        FiltresForTests,
        FooterComponent,
        ContactsFormComponent,
        TestsForStudy,
        TestsForTravel,
        TestsForWork,
    },

    NavigationComponent,
    name: "MainPage",
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
})
</script>

<style>

html {
    scroll-behavior: smooth;
}

body {
    background: #FFF;
}

.test__information {
    margin-top: 180px;
}

.TestsByChild__information,
.TestsByGoals__information {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.TestsByGoals__information-right {
    width: 421px;
    transform: rotate(30deg);
}

.TestsByChild__information-title,
.TestsByGoals__information-title {
    font-family: 'Stolzl';
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #2D2924;
}

.TestsByChild__information-description,
.TestsByGoals__information-description {
    margin-top: 30px;
    font-family: 'Stolzl';
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    color: #2D2924;
}

.TestsByChild__information-title {
    color: #B275FF;
}

@media (max-width: 1250px) {
    .TestsByGoals__information-right {
        transform: unset;
    }
}

@media (max-width: 1150px) {
    .subsection__information-right[data-v-a040f6a6] {
        /* text-align: center; */
        justify-content: center;
        display: grid;
    }

    .subsection__information[data-v-a040f6a6] {
        text-align: center;
        flex-direction: column;
    }

    .subsection__information-right[data-v-a040f6a6] {
        margin-top: 60px;
    }

    .test__information-filtres[data-v-a040f6a6] {
        justify-content: center;
    }

    .test__information-title {
        text-align: center;
    }

    .TestsByChild__information, .TestsByGoals__information {
        flex-direction: column;
    }

    .TestsByChild__information-right,
    .TestsByGoals__information-right {
        width: 15%;
        margin-top: 50px;
    }

    .TestsByChild__information-title, .TestsByGoals__information-title {
        text-align: center;
    }

    .TestsByChild__information-description, .TestsByGoals__information-description {
        margin-top: unset;
        font-size: 22px;
        line-height: 26px;
        text-align: center;
        width: 600px;
    }
}

@media (max-width: 768px) {
    .test__information-title {
        font-size: 70px;
    }

    .test__information-button {
        font-size: 21px;
    }

    .test__information {
        margin-top: 70px;
    }

    .subsection__information-description[data-v-a040f6a6] {
        font-size: 24px;
        line-height: 28px;
        max-width: 480px;
    }
}

@media (max-width: 658px) {
    .subsection__information-right[data-v-a040f6a6],
    .TestsByChild__information-right, .TestsByGoals__information-right {
        display: none;
    }

    .TestsByChild__information-description, .TestsByGoals__information-description {
        margin-top: unset;
        font-size: 19px;
        line-height: 22px;
        text-align: left;
        width: 380px;
    }
    .TestsByChild__information-description, .TestsByGoals__information-description {
        width: 100%;
    }

    .test__information-filtres {
        flex-direction: column;
    }
}

@media (max-width: 460px) {
    .TestsByChild__information-title, .TestsByGoals__information-title {
        text-align: left;
        font-size: 37px;
        line-height: 54px;
        max-width: 270px;
    }

    .subsection__information-description[data-v-a040f6a6] {
        font-size: 19px;
        line-height: 21px;
        text-align: left;
        margin: 20px 0 0;
    }

    .TestsByChild__information, .TestsByGoals__information {
        display: block;
    }
}

@media (max-width: 360px) {
    .test__information {
        margin-top: 40px;
    }
    .TestsByChild__information-title, .TestsByGoals__information-title {
        font-size: 26px;
        line-height: 130%;
        max-width: 270px;
    }

}


</style>