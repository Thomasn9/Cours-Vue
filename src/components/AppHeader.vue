<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div>
      <a><router-link to="/home" >Projet VUE Thomas</router-link></a>
    </div>
    

    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-soft btn-accent">Les Exos</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow">
        <li><a><router-link to="/exo" >Exos 1 : déclaration des types</router-link></a></li>
        <hr>
        <li><a><router-link to="/exo2" >Exos 2 : random nom de livre</router-link></a></li>
        <hr>
        <li><a><router-link to="/exo3" >Exos 3 : Bouton + et -</router-link></a></li>
      </ul>
    </div>

    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-soft btn-accent">Lessons</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a><router-link to="/lesson1">texte interpolation</router-link></a></li>
        <hr>
        <li><a><router-link to="/lesson2">atribut-binding</router-link></a></li>
        <hr>
        <li><a><router-link to="/lesson3">event-binding</router-link></a></li>
        <hr>
        <li><a><router-link to="/lesson4">Le V-Model</router-link></a></li>
        
      </ul>
    </div>

    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-soft btn-accent">TP</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a><router-link to="/tp">TP 1 : docteur mario !!!</router-link></a></li>
        <hr>
        <li><a><router-link to="/tp2">TP 2 : V-on 2 !!!</router-link></a></li>
      </ul>
    </div>

  </div>
  <hr>
</template>

<script setup lang='js'>
import { RouterLink } from 'vue-router';


</script>

<style scoped lang="css">
</style>