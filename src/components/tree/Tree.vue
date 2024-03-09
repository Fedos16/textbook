<template>
    <div class="flex gap-2 mb-3">
        <input class="input" placeholder="Название удаляемого" v-model="deleteName" />
        <button @click="deleteNode">Удалить</button>
    </div>

    <ul>
        <TreeItem class="item" :item="treeData"></TreeItem>
    </ul>
</template>

<script setup>
import { ref } from "vue";
import TreeItem from "./TreeItem.vue";

const treeData = ref({
    name: "Работы",
    children: [
        { name: "Категория - 1" },
        { name: "Категория - 2" },
        {
            name: "Черновые работы",
            children: [
                {
                    name: "Полы",
                    children: [{ name: "Демонтаж пола" }, { name: "Демонтаж плинтуса" }],
                },
                { name: "Подкатегория - 1" },
                { name: "Подкатегория - 2" },
                {
                    name: "Стены",
                    children: [{ name: "Деможнтаж стены" }],
                },
            ],
        },
    ],
});

const deleteName = ref();

function recursion(node) {
    if ("children" in node) {
        for (let i = 0; i < node.children.length; i++) {
            const item = node.children[i];
            const isDelete = recursion(item);
            if (isDelete) {
                node.children.splice(i, 1);
                i--;
            }
        }
        if (!node.children.length) return true;
    } else {
        if (node.name === deleteName.value) return true;
    }

    return false;
}

function deleteNode() {
    recursion(treeData.value);

    deleteName.value = null;

    console.log(treeData.value);
}
</script>

<style lang="scss" scoped>
.input {
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid lightgray;
    transition: border-color 0.25s;

    &:hover {
        border-color: #646cff;
    }
}
</style>
