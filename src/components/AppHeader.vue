<template>
  <div class="navbar bg-base-100 shadow-sm">
    
    <div id="blocLogo">
      <img id= "logoHeader" src="../../public/logo.png" alt="" srcset="">
      <a><router-link to="/home" >Projet VUE Thomas</router-link></a>
    </div>
    
<!-- =====================================================\\EXO//====================================================================== -->
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-soft btn-accent">Les Exos</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow">
        <li><a><router-link to="/exo" >Exos 1 : déclaration des types</router-link></a></li>
        <hr>
        <li><a><router-link to="/exo2" >Exos 2 : random nom de livre</router-link></a></li>
        <hr>
        <li><a><router-link to="/exo3" >Exos 3 : Bouton + et -</router-link></a></li>
        <hr>
        <li><a><router-link to="/exo4" >Exos 4 : Bouton + et - avec fonction</router-link></a></li>
        <hr>
        <li><a><router-link to="/exo5" >Exos 5 : Watcher</router-link></a></li>
        <hr>
        <li><a><router-link to="/exo6" >Exos 6 : Class dynamic</router-link></a></li>
        <hr>
        <li><a><router-link to="/exo6v2" >Exos 6 v2 : Class dynamic</router-link></a></li>
        <hr>
        <li><a><router-link to="/exo6v3" >Exos 6 v3 : Style dynamic </router-link></a></li>
        <hr>
        <li><a><router-link to="/exo7" >Exos 7 : V-if </router-link></a></li>

      </ul>
    </div>

    <!-- =====================================================\\LESSONS//====================================================================== -->
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-soft btn-accent">Lessons</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
        <li><a><router-link to="/lesson1">texte interpolation</router-link></a></li>
        <hr>
        <li><a><router-link to="/lesson2">atribut-binding</router-link></a></li>
        <hr>
        <li><a><router-link to="/lesson3">event-binding</router-link></a></li>
        <hr>
        <li><a><router-link to="/lesson4">Le V-Model</router-link></a></li>
        <hr>
        <li><a><router-link to="/lesson5">Les Computed Properties</router-link></a></li>
        <hr>
        <li><a><router-link to="/lesson6">Les Watchers</router-link></a></li>
        <hr>
        <li><a><router-link to="/lesson7">Dynamic-styling</router-link></a></li>
        <hr>
        <li><a><router-link to="/lesson8">Dynamic-styling Type Script</router-link></a></li>
        <hr>
        <li><a><router-link to="/lesson9">Conditional-rendering</router-link></a></li>
        
      </ul>
    </div>
<!-- =====================================================\\TP//====================================================================== -->
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-soft btn-accent">TP</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
        <li><a><router-link to="/tp">TP 1 : docteur mario !!!</router-link></a></li>
        <hr>
        <li><a><router-link to="/tp2">TP 2 : V-on 2 !!!</router-link></a></li>
        <hr>
        <li><a><router-link to="/tp3">TP 3 : Style Dynamic</router-link></a></li>

      </ul>
    </div>
<!-- =====================================================\\TP//====================================================================== -->
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-soft btn-accent">Gaufre-Clicker</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
        <li><a><router-link to="/simple-click">Compteur simple</router-link></a></li>
      </ul>
    </div>
<!-- =====================================================\\ABOUT//====================================================================== -->
    <a><router-link to="/about" class="btn btn-soft btn-accent" >About</router-link></a>
  </div>

  <hr>
</template>

<script setup lang='js'>
import { RouterLink } from 'vue-router';


</script>

<style scoped lang="css">
</style>