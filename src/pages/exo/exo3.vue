<template>
    <div id="bloc" class="card w-96 bg-base-100 shadow-xl p-6">
        <h4>click gauche ajoute 2000</h4>
        <!-- réaction et activation de la function grace a v-on:click -->
        <button class="btn btn-circle btn-primary" v-on:click="plus(2000)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        </button>

        <h2 class="text-2xl font-bold my-4">Le nombre est {{ leNombre }}</h2>

        <!-- reduire au click droit  -->
        <button class="btn btn-circle btn-secondary" v-on:click.right="reduire(1)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
            </svg>
        </button>
        <h4>clique droit retire 1</h4>
    </div>    
</template>

<script setup>
import { ref } from 'vue';

const leNombre = ref(0);

// ici on met en paramètre val pour la choisir directement la valeur a ajouter dans le bouton
function reduire(val){
    leNombre.value -= val;
}

function plus(val){
    leNombre.value += val;
}
</script>

<style>
#bloc {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
</style>