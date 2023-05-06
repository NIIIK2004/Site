<template>
    <nav v-for="word in words" :key="word.id">
        <h3 class="examinationСomponent">{{ word.name }}</h3>
    </nav>
</template>

<script>
export default {
    name: "ExaminationtextComponent",

    data() {
        return {
            words: [
                {
                    id: 1,
                    name: "Умение понимать английский на слух",
                },
                {
                    id: 2,
                    name: "Умение различать времена в английском языке",
                },
                {
                    id: 3,
                    name: "Умение правильно понимать контекст и смысл текста",
                },
            ]
        }
    }
}
</script>

<style scoped>
nav {
    position: relative;
}
.examinationСomponent {
    margin-top: 35px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #2D2924;
    padding-left: 47px;
    max-width: 613px;
}
.examinationСomponent::before {
    width: 30px;
    height: 30px;
    content: "";
    background: url("../../public/images/icons/sweet.png") no-repeat;
    position: absolute;
    left: 0;
}

</style>