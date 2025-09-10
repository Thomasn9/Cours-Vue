<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="card bg-base-100 shadow-xl rounded-box p-6">
            <div class="card-body text-center">
                <h2 class="card-title text-2xl font-bold mb-4 mx-auto">Compteur avec Watcher</h2>
                <div class="flex items-center justify-center gap-4">
                    <button v-on:click="leNombre++" type="button"
                        class="btn btn-success transition-transform duration-200 hover:scale-110">+</button>
                    <p class="text-xl font-bold">Valeur actuelle : <span class="badge badge-lg badge-secondary">{{
                            leNombre }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref, watch } from 'vue';

// Déclarez votre variable réactive
const leNombre = ref(0);

// Utilisez `watch` pour surveiller les changements de `leNombre`
watch(leNombre, (newValue) => {
    // Réinitialise le compteur à 0 si la valeur atteint 7
    if (newValue === 7) {
        leNombre.value = 0;
    }
});
</script>