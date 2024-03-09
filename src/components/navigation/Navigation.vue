<template>
    <aside class="py-4 px-6 w-2 shadow-2">
        <div class="flex flex-column gap-2 text-2xl">
            <RouterLink class="no-underline hover:text-blue-400" v-for="item in routes" :key="item.urlName" :to="{ name: item.urlName }">{{
                item.name
            }}</RouterLink>
        </div>
    </aside>
</template>

<script setup>
import { ROUTER_NAMES } from "../../router/routerNames";

const routes = [
    {
        name: "Главная",
        urlName: ROUTER_NAMES.HOME,
    },
    {
        name: "Модальное окно",
        urlName: ROUTER_NAMES.MODAL,
    },
    {
        name: "Дерево",
        urlName: ROUTER_NAMES.TREE,
    },
];
</script>

<style lang="scss" scoped></style>
