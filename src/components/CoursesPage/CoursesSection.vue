<template>
    <section class="courses">
        <div class="container">
            <ul class="anchor__list">
                <li class="anchor__item" v-for="anchor in anchors" :key="anchor.id">
                    <AnchorButton
                        :id="anchor.id" :text="anchor.text" @click="scrollToSection(anchor.id)">
                    </AnchorButton>
                </li>
            </ul>
            <SectionForTravel/>
            <SectionForWork/>
        </div>
    </section>
</template>

<script>
import AnchorButton from "@/components/AnchorButton.vue";
import SectionForTravel from "@/components/CoursesPage/SectionForTravel.vue";
import SectionForWork from "@/components/CoursesPage/SectionForWork.vue";

export default {
    components: {SectionForWork, SectionForTravel, AnchorButton},
    data() {
        return {
            anchors: [
                {id: 1, text: "Для путешествий"},
                {id: 2, text: "Для работы"},
                {id: 3, text: "Для учёбы"},
                {id: 4, text: "Для себя"},
            ]
        }
    }
}
</script>

<style scoped>
.anchor__list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.anchor__button {
    background-color: transparent;
    border: 2px solid #98de00;
}

.anchor__button:hover {
    background-color: #98de00;
    color: #2D2924;
}
</style>