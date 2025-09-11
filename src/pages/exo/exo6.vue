<template>
    <div id="composant">
        <div id="card1">
            <button 
                class="static"
                @click="activeBleu" 
                :class="{ active: isActive }">
                Bouton 1
            </button>
        </div>
        <div id="card2">
            <button 
                class="static"
                @click="activeRouge " 
                :class="{ error : hasError }">
                Bouton 2
            </button>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
// ici on declare les variable active et error 
const isActive = ref(true)
const hasError = ref(false)

const activeBleu = () => {
    isActive.value = !isActive.value
}

const activeRouge = () =>{
    hasError.value = !hasError.value
}
</script>

<style>
#composant{
    display: flex;
    justify-content: space-around;
}
.active{
    background-color: blue;
    color: white;
}

.error {
    background-color: rgb(212, 25, 25);
    color: rgb(0, 0, 0);
}

.static {
    padding: 10px 20px;
    border: 1px solid #ccc;
}
</style>