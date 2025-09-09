<template>
  <div class="card bg-base-200 p-4">
    <h5 class="text-lg font-semibold">Tp-Databinding : Mode Composition</h5>
    <div class="flex flex-col items-center justify-center">
      <!-- v-bind de l'attribut src de l'image -->
      <img v-bind:src="imageUser" :alt="nameUser" class="h-24 w-24 rounded-full">
      <!-- interpolation du nom -->
      <span class="mt-3 text-xl font-medium">{{ nameUser }}</span>
      <!-- v-bind de l'attribut value d'un input -->
      <input type="text" :value="nameUser" class="input input-bordered text-center mt-2">
      <!-- <input type="text" v-model ="nameUser"> -->
      <div class="flex flex-row items-center justify-center gap-2 mt-2">
        <!-- interpolation de l'age -->
        <span>{{ ageUser }} ans</span>
      </div>
      <div class="flex flex-row items-center justify-center mt-3">
        <!-- interpolation fonction qui augmente l'age -->
        <span>age + 10 :
          <span class="font-bold">{{ augmenterAge() }} ans</span>
        </span>
      </div>
      <div class="px-4 py-2 rounded-lg mt-4 bg-base-300">
        NB Fétiche :
        <!-- interpolation de la fonction qui génère un nb random  -->
        <span class="font-mono">{{ nombreRandom() }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const nameUser = ref('Dr Mario');
const ageUser = ref(30);
const imageUser = 'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg'

const augmenterAge = () => {
  // Avec les ref on peut acceder a leur value 
  // Voyez ref comme une sorte de conteneur reactif de vue pour les variables 
  return ageUser.value + 10;
}

const nombreRandom = () => {
  return Math.random();
  // return Math.floor(Math.random() * 100);
}
</script>