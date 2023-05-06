<template>
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

        <section class="TestsByGoals__information indent">
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

export default defineComponent({
    components: {
        TestsForBeginner,
        TestsForMiddle,
        TestsForSenior,
        FiltresForTests,
        FooterComponent,
        ContactsFormComponent,
        TestsForStudy,
        TestsForTravel,
        TestsForWork,
    }
})
</script>

<style>

body {
    background: #FFF;
}

.TestsByGoals__information {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.TestsByGoals__information-right {
    width: 421px;
    transform: rotate(30deg);
}

.TestsByGoals__information-title {
    font-family: 'Stolzl';
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #2D2924;
}

.TestsByGoals__information-description {
    margin-top: 30px;
    font-family: 'Stolzl';
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    color: #2D2924;
}


</style>