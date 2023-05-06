<template>
    <ul class="course__list">
        <li class="course__item"></li>
        <li class="course__item"></li>
        <li class="course__item"></li>
        <li class="course__item"></li>
        <li class="course__item"></li>
        <li class="course__item"></li>
        <li class="course__item"></li>
    </ul>
</template>

<script setup>

</script>

<style scoped>
.course__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}
.course__item {
    height: 300px;
    background-color: #2D2924;
}
</style>