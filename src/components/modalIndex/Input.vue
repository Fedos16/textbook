<template>
    <input type="text" v-model="inputValue" @input="onInput" />
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
    modelValue: {
        type: [String, Number],
    },
    float: {
        type: Boolean,
    },
});

const emits = defineEmits(["update:modelValue"]);

const inputValue = computed({
    get() {
        return replaceValue(props.modelValue, { format: true });
    },
    set(val) {
        emits("update:modelValue", val);
    },
});

function replaceNotNumber(value) {
    return value.replace(/\s|\D/g, "");
}

function setFormat(value) {
    return new Intl.NumberFormat("ru-RU").format(value);
}

function replaceValue(value, { format = false } = {}) {
    if (!value) return value;

    if ((value.includes(".") || value.includes(",")) && props.float) {
        const [a, b] = value.includes(".") ? value.split(".") : value.split(",");
        const first = format ? setFormat(replaceNotNumber(a)) : replaceNotNumber(a);
        const last = replaceNotNumber(b).substring(0, 2);

        return `${first}.${last}`;
    }
    return format ? setFormat(replaceNotNumber(value)) : replaceNotNumber(value);
}

function onInput(e) {
    inputValue.value = replaceValue(e.target.value);
}
</script>

<style lang="scss" scoped></style>
