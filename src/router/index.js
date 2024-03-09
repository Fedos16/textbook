import { createRouter, createWebHistory } from "vue-router";
import { ROUTER_NAMES } from "./routerNames";

const routes = [
    {
        path: "/",
        name: ROUTER_NAMES.HOME,
        component: () => import("../views/HomeView.vue"),
    },
    {
        path: "/modal",
        name: ROUTER_NAMES.MODAL,
        component: () => import("../views/ModalView.vue"),
    },
    {
        path: "/tree",
        name: ROUTER_NAMES.TREE,
        component: () => import("../views/TreeView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
