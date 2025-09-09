<!-- <template>
  <div class="bg-base-100 p-6 rounded-xl shadow-md border border-base-300">
    <h5 class="text-lg font-semibold text-center mb-6 text-primary">Text Interpolation Mode : Composition</h5>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Variable texte</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ unLivre }}</p>
      </div>
      
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Variable booléenne</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ isOnline }}</p>
      </div>
      
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Variable numérique</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ unNombre }}</p>
      </div>
      
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Tableau complet</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ unTableau }}</p>
      </div>
      
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Premier élément du tableau</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ unTableau[0] }}</p>
      </div>
      
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Objet complet</h6>
        <p class="text-center p-2 bg-base-100 rounded text-xs font-mono">{{ unObjet }}</p>
      </div>
      
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Propriété name (notation point)</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ unObjet.name }}</p>
      </div>
      
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Propriété name (notation bracket)</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ unObjet['name'] }}</p>
      </div>
      
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Propriété tel</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ unObjet.tel }}</p>
      </div>
      
      <div class="bg-base-200 p-4 rounded-lg">
        <h6 class="font-medium text-sm opacity-70 mb-2">Propriété tel (dupliquée)</h6>
        <p class="text-center p-2 bg-base-100 rounded">{{ unObjet.tel }}</p>
      </div>
      
      <div class="bg-base-200 p-4 rounded-lg col-span-full">
        <h6 class="font-medium text-sm opacity-70 mb-2">Résultat de fonction</h6>
        <p class="text-center p-3 bg-success text-success-content rounded font-mono">{{ fonctionTest() }}</p>
      </div>
    </div>
  </div>
</template>

<script lang='js' setup>
import { ref } from 'vue'

const unLivre = ref('Les mémoires de Steven Seagal');
const unTableau = ref(['du texte', 99]);
const unNombre = ref(1234567890);
const isOnline = ref(false);
const unObjet = ref({
  name: 'COOL',
  tel: '060503030',
});

const fonctionTest = () => {
  return 'Hello World';
}
</script>

<style scoped lang="css">
</style> -->
<!-- ============================================\\exo 2//=============================== -->

<template>
<p>{{ aleatoire() }}</p>
</template>

<script lang="js" setup>

const aleatoire = () => {
  return Math.random() < 0.5 ? 'Livre Boba Fett' : 'Livre de la Jungle';

}
</script>

<style>

</style>