<template>
    <div class="container">
        <section class="singletest">
            <button class="singletest__button btn">Пропустить вступительный тест</button>
            <h1 class="singletest__title page-title">Определите свой уровень английского, пройдя простой тест </h1>
            <p class="singletest__description">Проверьте свои знания за 10 минут в простом онлайн-тесте. Но сначала нам
                нужно знать, для каких целей вы учите язык</p>
        </section>
        <section class="examination">
            <h2 class="examination__title section-title">В этом тесте мы проверим:</h2>
            <div class="examination__blocks">
                <ExaminationtextComponent/>
            </div>
        </section>
        <section class="knowledge">
            <h2 class="knowledge__title section-title">Как тест проверяет ваши знания</h2>
            <KnowledgeBlocks/>
        </section>

    </div>
</template>

<script>
import ExaminationtextComponent from "@/components/ExaminationtextComponent.vue";
import KnowledgeBlocks from "@/components/KnowledgeBlocks.vue";

export default {
    components: {ExaminationtextComponent, KnowledgeBlocks},
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

</style>


