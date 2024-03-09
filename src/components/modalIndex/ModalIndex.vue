<template>
    <div class="w-4">
        <div class="wrapper border-50 border-1 mb-3">
            <Input class="w-full" v-model="num" :float="false" />
        </div>

        <div class="flex gap-2">
            <button @click="closededInput">Будет скрыт инпут</button>
            <button @click="openedInput">Будет открыт инпут</button>
        </div>
    </div>

    <Background ref="bgRef" :class="[clasName]" />
</template>

<script setup>
import { ref } from "vue";

import Input from "./Input.vue";
import Background from "./Background.vue";

const num = ref(null);
const bgRef = ref(null);
const clasName = ref("");

function closededInput() {
    clasName.value = "zmax";
    bgRef.value.open();
}
function openedInput() {
    clasName.value = "zmin";
    bgRef.value.open();
}
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    background-color: white;
    padding: 20px;
    z-index: 3;
    width: auto;
}

.zmin {
    z-index: 2;
}
.zmax {
    z-index: 4;
}
</style>
