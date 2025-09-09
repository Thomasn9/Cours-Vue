<template>
  <div class="navbar bg-base-100 shadow-sm">
  <div class="flex-none">
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">Le projet VUE de Thomas</a>
  </div>
  <router-link to="/" class="btn btn-soft btn-accent">acceuil</router-link>
  <router-link to="/about" class="btn btn-soft btn-accent">About</router-link>
  <router-link to="/exo" class="btn btn-soft btn-accent">Exos</router-link>
  <router-link to="/lessons" class="btn btn-soft btn-accent">Lessons</router-link>
  <router-link to="/TP" class="btn btn-soft btn-accent">TP</router-link>
  <div class="flex-none">
  </div>
</div>
</template>

<script setup lang='js'>
import { RouterLink } from 'vue-router';


</script>

<style scoped lang="css">
</style>