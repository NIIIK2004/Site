import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import CoursesPage from "@/pages/CoursesPage.vue"
import SingleTest from "@/pages/SingleTest.vue";
import FAQPage from "@/pages/FAQPage.vue";
import AllTests from "@/pages/AllTests.vue";
import CoursePage from "@/pages/CoursePage.vue";
import RegConfirm from "@/pages/RegConfirm.vue";
import TestPage from "@/pages/TestPage.vue";
import NewsPage from "@/pages/NewsPage.vue";
import NewsArticle from "@/pages/NewsArticle.vue";
import OfflineLessonPage from "@/pages/OfflineLessonPage.vue";
import RegPage from "@/pages/RegPage.vue";
import AuthPage from "@/pages/AuthPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import ErrorPage from "@/pages/ErrorPage.vue";
import TestProcess from "@/pages/TestProcess.vue";

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
        path: '/faq',
        component: FAQPage,
    },
    {
        path: '/confirm',
        component: RegConfirm,
    },
    {
        path: '/test',
        component: TestPage,
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
    {
        path: '/testprocess',
        component: TestProcess,
    },
    {
        path: '/reg',
        component: RegPage,
    },
    {
        path: '/auth',
        component: AuthPage,
    },
    {
        path: '/profile',
        component: ProfilePage,
    },
    {
        path: '/error',
        component: ErrorPage,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/error',
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;