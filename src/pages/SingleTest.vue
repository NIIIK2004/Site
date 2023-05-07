<template>
    <div class="container">

        <section class="singletest indent">
            <button class="singletest__button btn">Пропустить вступительный тест</button>
            <h1 class="singletest__title page-title">Определите свой уровень английского, пройдя простой тест </h1>
            <p class="singletest__description">Проверьте свои знания за 10 минут в простом онлайн-тесте. Но сначала нам
                нужно знать, для каких целей вы учите язык</p>
        </section>

        <section class="examination indent">
            <h2 class="examination__title section-title">В этом тесте мы проверим:</h2>
            <div class="examination__blocks">
                <ExaminationtextComponent/>
            </div>
            <button class="examination__btn btn">
                <router-link to="/alltests">Начать тест</router-link>
            </button>
        </section>
        <section class="knowledge indent">
            <h2 class="knowledge__title section-title">Как тест проверяет ваши знания</h2>
            <KnowledgeBlocks/>
        </section>
        <ContactsFormComponent/>
    </div>
    <FooterComponent/>
</template>

<script>
import ExaminationtextComponent from "@/components/ExaminationtextComponent.vue";
import KnowledgeBlocks from "@/components/KnowledgeBlocks.vue";
import ContactsFormComponent from "@/components/ContactsFormComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    components: {ExaminationtextComponent, KnowledgeBlocks, ContactsFormComponent, FooterComponent},
}
</script>

<style scoped>
body {
    background: #F8FFEB;
}

.knowledge__title,
.examination__title {
    font-weight: 700;
    margin-bottom: 50px;
}

.contacts {
    background: #EFFFCE !important;
    border-radius: 25px;
    padding: 60px 45px;
}

.singletest__title {
    margin-top: 70px;
    max-width: 850px;
}

.singletest__description {
    margin-top: 40px;
    max-width: 850px;
    font-weight: 500;
    line-height: 29px;
    color: #2D2924;
}

.singletest__button {
    margin-top: 70px;
    position: relative;
    font-family: 'Stolzl';
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;
}

.examination__btn {
    margin-top: 25px;
    border-radius: 10px;
    font-family: 'Stolzl';
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;
    color: #2D2924;
}

@media (max-width: 1000px) {
    .examinationСomponent[data-v-f8b4a2a2] {
        margin-top: 30px;
        font-weight: 600;
        font-size: 26px;
    }
}

@media (max-width: 768px) {
    .knowledge__title, .examination__title {
        margin-bottom: 40px;
    }
}

@media (max-width: 600px) {
    .examinationСomponent[data-v-f8b4a2a2] {
        margin-top: 10px;
        font-weight: 600;
        font-size: 21px;
    }

    .knowledge__title, .examination__title {
        margin-bottom: 30px;
    }
}

@media (max-width: 468px) {
    .examination__title, .knowledge__title, .section-title {
        font-size: 28px;
    }

    .examinationСomponent[data-v-f8b4a2a2] {
        margin-top: 20px;
        font-weight: 600;
        font-size: 24px;
        padding: 0;
    }

    .examinationСomponent[data-v-f8b4a2a2]::before {
        display: none;
    }
}

@media (max-width: 390px) {
    .examinationСomponent[data-v-f8b4a2a2] {
        margin-top: 20px;
        max-width: 850px;
        font-weight: 500;
        line-height: 29px;
        color: #2D2924;
        font-size: 22px;
    }
}


</style>


