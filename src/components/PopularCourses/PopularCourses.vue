<template>
    <section class="popular-courses indent">
        <div class="container">
            <h2 class="section-title">
                Популярные курсы
            </h2>
            <TabsCourses :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
                <div v-if="selectedTab === 'All'">
                    <CardPopularCourses :courses="allCourses"/>
                </div>
                <div v-if="selectedTab === 'Free'">
                    <CardPopularCourses :courses="freeCourses"/>
                </div>
                <div v-if="selectedTab === 'Paid'">
                    <CardPopularCourses :courses="paidCourses"/>
                </div>
            </TabsCourses>
        </div>
    </section>
</template>

<script>
import CardPopularCourses from '@/components/PopularCourses/CardPopularCourses.vue';
import TabsCourses from '@/components/PopularCourses/TabsCourses.vue';

const allCourses = [
    {
        id: 1,
        src: '../images/MainPage/child.png',
        title: 'Детский английский',
        description: 'Универсальный курс для детей от 5-и до 13-и лет',
        price: '300₽ / урок',
        quantity: '25 уроков в курсе',
        isPaid: true
    },
    {
        id: 2,
        src: '../images/MainPage/woman.png',
        title: 'International Education',
        description: 'Курс для поступления в иностранное учебное заведение',
        price: '550₽ / урок',
        quantity: '19 уроков в курсе',
        isPaid: true
    },
    {
        id: 3,
        src: '../images/MainPage/speak.png',
        title: 'Разговорный английский',
        description: 'Повысьте уровень разговора на английском языке',
        price: 'Бесплатно',
        quantity: '21 уроков в курсе',
        isPaid: false
    },
];

const freeCourses = allCourses.filter((course) => !course.isPaid);
const paidCourses = allCourses.filter((course) => course.isPaid);

export default {
    components: {
        CardPopularCourses,
        TabsCourses,
    },
    data() {
        return {
            tabs: [
                {name: 'All', label: 'Все'},
                {name: 'Free', label: 'Бесплатные'},
                {name: 'Paid', label: 'Платные'},
            ],
            selectedTab: 'All',
            allCourses,
            freeCourses,
            paidCourses,
        };
    },
    methods: {
        changeTab(tabName) {
            this.selectedTab = tabName;
        },
    },
};
</script>