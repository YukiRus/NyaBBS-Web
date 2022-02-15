import { createRouter,createWebHistory, RouteRecordRaw} from "vue-router"

const routes:RouteRecordRaw[] = [
    {
        path: "/",
        component: ()=>import("../views/Home/index.vue")
    },
    {
        path: "/register",
        component: ()=>import("../views/logins/Register/index.vue")
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

