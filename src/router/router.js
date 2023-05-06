import MainPage from "@/pages/MainPage.vue";
import CoursesPage from "@/pages/СoursesPage.vue"
import {createRouter, createWebHistory} from "vue-router";
import SingleTest from "@/pages/SingleTest.vue";
import AllTests from "@/pages/AllTests.vue";

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
        path: '/singletest',
        component: SingleTest,
    },
    {
        path: '/alltests',
        component: AllTests,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;