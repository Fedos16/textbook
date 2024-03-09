<template>
    <Navigation />
    <div class="main w-full p-4">
        <router-view></router-view>
    </div>
</template>

<script setup>
import Navigation from "./components/navigation/Navigation.vue";
</script>

<style lang="scss" scoped></style>
