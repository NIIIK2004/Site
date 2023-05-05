import MainPage from "@/pages/MainPage.vue";
import CoursesPage from "@/pages/СoursesPage.vue"
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/courses',
        component: CoursesPage,
    },
]

const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;