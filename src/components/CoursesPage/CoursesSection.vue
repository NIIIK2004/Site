<template>
    <section class="courses indent">
        <ul class="anchor__list">
            <li class="anchor__item" v-for="anchor in anchors" :key="anchor.id">
                <AnchorButton :href="'#' + anchor.id" :text="anchor.text" @click="scrollToSection($event, anchor)">
                </AnchorButton>
            </li>
        </ul>
        <SectionForTravel :id="'forTravel'"/>
        <SectionForWork :id="'forWork'"/>
        <SectionForEducation :id="'forEducation'"/>
        <SectionForYourself :id="'forYourself'"/>
    </section>
</template>

<script>
import AnchorButton from "@/components/AnchorButton.vue";
import SectionForTravel from "@/components/CoursesPage/SectionForTravel.vue";
import SectionForWork from "@/components/CoursesPage/SectionForWork.vue";
import SectionForEducation from "@/components/CoursesPage/SectionForEducation.vue";
import SectionForYourself from "@/components/CoursesPage/SectionForYourself.vue";

export default {
    components: {SectionForYourself, SectionForEducation, SectionForWork, SectionForTravel, AnchorButton},
    data() {
        return {
            anchors: [
                {id: "forTravel", text: "Для путешествий"},
                {id: "forWork", text: "Для работы"},
                {id: "forEducation", text: "Для учёбы"},
                {id: "forYourself", text: "Для себя"},
            ],
        };
    },
    methods: {
        scrollToSection(event, anchor) {
            event.preventDefault();
            const element = document.getElementById(anchor.id);
            element.scrollIntoView({behavior: 'smooth'});
        },
    },
};
</script>

<style>
.anchor__list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 80px;
}

.anchor__button {
    background-color: transparent;
    border: 2px solid #98de00;
}

.anchor__button:hover {
    background-color: #98de00;
    color: #2D2924;
}

.course__indent {
    margin-bottom: 80px;
}

.course__title {
    margin-bottom: 30px;
    font-size: 26px;
}

.course__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

@media (max-width: 1200px) {
    .course__title {
        margin-bottom: 25px;
    }
}

@media (max-width: 992px) {
    .anchor__list {
        margin-bottom: 40px;
    }

    .course__list {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .course__title {
        font-size: 24px;
    }
}

@media (max-width: 768px) {
    .course__title {
        font-size: 22px;
    }
}

@media (max-width: 600px) {
    .course__list {
        grid-template-columns: repeat(1, 1fr);
    }

    .course__title {
        font-size: 20px;
    }
}
</style>