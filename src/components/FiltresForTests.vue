<template>
    <div class="test__information-filtres indent">
        <button class="test__information-button btn" onclick="location.href='#levels'">По уровням</button>
        <button class="test__information-button btn" onclick="location.href='#tasks'">По целям</button>
        <button class="test__information-button btn" onclick="location.href='#child'">Для детей</button>
    </div>
    <section class="subsection__information indent" id="levels">
        <div class="subsection__information-left">
            <h2 class="TestsByGoals__information-title subsection__information-title section-title">Тесты по
                уровням</h2>
            <p class="subsection__information-description">Специально для вас отсортировали тесты по уровням от
                Начинающего до
                Продвинутого!</p>
        </div>
        <div class="subsection__information-right">
            <img src="../../public/images/alltests/decor-for-test-for-levels.svg" alt="decor">
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.test__information-filtres {
    display: flex;
    gap: 20px;
}

.subsection__information {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.subsection__information-left {
}

.subsection__information-title {
}

.subsection__information-description {
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: #C2C2C2;
    max-width: 790px;
    margin-top: 30px;
}

.subsection__information-right {
}

.test__information-filtres {
    margin-top: 30px;
}

@media (max-width: 460px) {
    .test__information-button {
        font-size: 16px;
        gap: 9px;
    }
}
@media (max-width: 360px) {
    .test__information-filtres[data-v-a040f6a6] {
        gap: 8px;
    }
}
</style>