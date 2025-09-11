<template>
    <div class="container mx-auto p-4">
        <div class="card shadow-lg p-6 bg-base-100">
            <h2 class="text-2xl font-bold mb-4">WatchList 🎬 (Films à voir) - Mode : Composition</h2>

            <input  type="text" placeholder="Entrez le nom d'un film" class="input input-bordered w-full mb-3" v-model="film"/>

            <button  class="btn btn-primary mb-4" @click="tabFilms.push(film)">
                Ajouter à votre Liste
            </button>

            <hr class="my-4" />
            <!-- ici on fait si le tableau film a un élément on affiche le tableau de films -->
            <ol>
                <li v-if="tabFilms[0]" v-for="element, index in tabFilms" @click="tabFilms.value.splice(index,1)" class="text-xl font-semibold mb-2">Films ajouté : {{ `${index} . ${element}` }}</li>
                    <!-- ici le else affiche le message si il ny as aucun films dans le tableau -->
                <li v-else class="text-gray-500">Pas encore de films dans votre liste ? Veuillez en ajouter un.</li>
            </ol>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';


const film = ref("")

const tabFilms = ref([]);



</script>