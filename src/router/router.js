import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import CoursesPage from "@/pages/CoursesPage.vue"
import SingleTest from "@/pages/SingleTest.vue";
import AllTests from "@/pages/AllTests.vue";
import CoursePage from "@/pages/CoursePage.vue";
import NewsPage from "@/pages/NewsPage.vue";
import NewsArticle from "@/pages/NewsArticle.vue";
import OfflineLessonPage from "@/pages/OfflineLessonPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/courses',
        component: CoursesPage,
    },
    {
        path: "/courses/:id",
        name: "course",
        component: CoursePage,
        props: true
    },
    {
        path: '/singletest',
        component: SingleTest,
    },
    {
        path: '/alltests',
        component: AllTests,
    },
    {
        path: '/news',
        component: NewsPage,
    },
    {
        path: "/news/:id",
        name: "news",
        component: NewsArticle,
        props: true
    },
    {
        path: '/offlinelesson',
        component: OfflineLessonPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;