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
            <button class="examination__btn btn">Начать тест</button>
        </section>
        <section class="knowledge indent">
            <h2 class="knowledge__title section-title">Как тест проверяет ваши знания</h2>
            <KnowledgeBlocks/>
        </section>

        <section class="contacts indent">
            <ContactsFormComponent/>
        </section>
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

<style>
body {
    background: #F8FFEB;
}

.knowledge__title,
.examination__title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 50px;
}

.contacts {
    background: #EFFFCE;
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
    font-weight: 600;
    font-size: 24px;
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
    color: #2D2924;
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

/*
.singletest__button::after {
    width: 24px;
    height: 24px;
    content: "";
    background: url("../../public/images/icons/arrow.png") no-repeat;
    position: absolute;
    right: 0;
}*/

</style>


