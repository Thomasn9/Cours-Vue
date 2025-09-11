<template>
    <div>
        <h1>vous avez cliquer {{ cumul }} fois</h1>
        <button @click="click">click</button>
    </div>


</template>

<script setup>
import {ref} from 'vue';

const cumul = ref(0);

const click = (cumul) =>{
    cumul += 1;
    console.log(cumul)
}


</script>

<style scoped lang="css">
button{
    border: solid 1px white;
}

</style>