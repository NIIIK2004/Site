<template>
    <div class="knowledge__wrapper">
        <div class="knowledge__blocks">
            <div class="knowledge__left-block">
                <p class="knowledge__block-description">
                    Алгоритм теста учитывает все правильные и неправильные ответы, определяет уровень и составляет
                    индивидуальные рекомендации:
                </p>
                <div class="knowledge__block" v-for="wordLeft in wordsLeft" :key="wordLeft.id">
                    <p class="knowledge__block-text">{{ wordLeft.name }}</p>
                </div>
            </div>

            <div class="knowledge__right-block">
                <div class="knowledge__block-green" v-for="wordRight in wordsRight" :key="wordRight.id">
                    <p class="knowledge__block-text">{{ wordRight.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "KnowledgeBlocks",
    data() {
        return {
            wordsLeft: [
                {
                    id: 1,
                    name: "Над какими темами в английском языке стоит поработать",
                },
                {
                    id: 2,
                    name: "Как лучше развивать языковые навыки",
                },
                {
                    id: 3,
                    name: "Что поможет поддержать текущий уровень и перейти на следующий",
                },
            ],
            wordsRight: [
                {
                    id: 1,
                    name: "Над данным тестом работали лучшие методисты онлайн-школы Astyx",
                },
                {
                    id: 2,
                    name: "Более 50% пользователей после прохождения теста купили наши курсы и улучшили свои навыки в английском языке",
                },
            ]
        }
    }
}
</script>

<style scoped>
.knowledge__block-green,
.knowledge__block {
    margin-bottom: 15px;

    padding: 25px 29px;
    border-radius: 15px;

    max-width: 550px;
    width: 100%;

    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #2D2924;
}
.knowledge__block{
    background: #FFFFFF;
}
.knowledge__block-green{
    background: #B4FE1A;
}
.knowledge__blocks {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
}

.knowledge__left-block {
}

.knowledge__block-description {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #2D2924;
    max-width: 550px;
    width: 100%;
    margin-bottom: 40px;
}

.knowledge__block {
}

.knowledge__block-text {
}
</style>