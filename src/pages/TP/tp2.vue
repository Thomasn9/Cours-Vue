<template>
    <h2>TP event binding mode</h2>
    <input type="text" v-on:keyup="ecoute($event)">
    <p>{{text}}</p>

</template>

<script setup>
import { ref } from 'vue';

const text = ref ('')

const ecoute = (event) => {
    console.log(event)
    text.value = event.target.value;
};

</script>


<style>
input{
    border: solid 1px white;
}
</style>