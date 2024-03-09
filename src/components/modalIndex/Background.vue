<template>
	<div v-if="visible" class="backdrop" @click="close"></div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);

function close() {
	visible.value = false;
}
function open() {
	visible.value = true;
}

defineExpose({
	open,
});
</script>

<style lang="scss" scoped>
.backdrop {
	position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	background-color: rgba(0, 0, 0, 0.6);
}
</style>
