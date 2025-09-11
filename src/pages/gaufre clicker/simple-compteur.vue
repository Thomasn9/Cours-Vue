<template>
    <div>
        <h1>vous avez cliquer {{ cumul }} fois</h1>
        <button class="btn" @click="click" :disabled="cumul >= 5">click</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const cumul = ref(0);

const click = () => {
    cumul.value += 1;
    console.log(cumul.value);
};
</script>

<style scoped lang="css">
button {
    border: solid 1px white;
}
</style>