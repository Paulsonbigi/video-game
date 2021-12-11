import { createWebHistory, createRouter } from "vue-router";
import Home from '../pages/Home.vue'
import ContactPage from '../pages/ContactPage.vue'

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/contact",
        component: ContactPage,
    },
]

  const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;