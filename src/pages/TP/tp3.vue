<template>

<input id="input"type="text" class="inputBase" v-model="helloWorld":class="{}">
<h2>{{helloWorld}}</h2>

</template>

<script setup>
import {isReactive, ref} from 'vue'

const helloWorld = ref("")
const

function activer(helloWorld){
    if(helloWorld==="hello world"){
        
    }
}




</script>

<style scoped lang="css">
.inputBase{
    border: solid 1px white;
    background-color: burlywood;
    color: black;
}

</style>