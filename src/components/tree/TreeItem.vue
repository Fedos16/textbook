<template>
    <li>
        <div :class="{ bold: isFolder }" @click="toggle">
            {{ item.name }}
            <span v-if="isFolder">{{ isOpen ? "-" : "+" }}</span>
        </div>
        <ul v-show="isOpen" v-if="isFolder">
            <TreeItem class="item" v-for="(child, index) in item.children" :key="index" :item="child"></TreeItem>
        </ul>
    </li>
</template>

<script setup>
import { computed, ref } from "vue";
import TreeItem from "./TreeItem.vue";

const props = defineProps({
    item: Object,
});

const isOpen = ref(true);

const isFolder = computed(() => !!props.item.children?.length);

function toggle() {
    if (isFolder.value) {
        isOpen.value = !isOpen.value;
    }
}
</script>

<style lang="scss" scoped></style>
