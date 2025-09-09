<template>
  <div class="navbar bg-base-100 shadow-sm">
    <a><router-link to="/home" >Projet VUE Thomas</router-link></a>

    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-soft btn-accent">Les Exos</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a><router-link to="/exo" class="btn btn-soft btn-accent">Exos 1: déclaration des types</router-link></a></li>
        <li><a><router-link to="/exo2" class="btn btn-soft btn-accent">Exos 2: random nom de livre</router-link></a></li>
      </ul>
    </div>

    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-soft btn-accent">Lessons</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a><router-link to="/lessons" class="btn btn-soft btn-accent">lecons 1</router-link></a></li>
      </ul>
    </div>

    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-soft btn-accent">TP</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a><router-link to="/tp" class="btn btn-soft btn-accent">TP 1: docteur mario !!!</router-link></a></li>
      </ul>
    </div>

  </div>
</template>

<script setup lang='js'>
import { RouterLink } from 'vue-router';


</script>

<style scoped lang="css">
</style>