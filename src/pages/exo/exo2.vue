<!-- ============================================\\exo 2//=========================================== -->

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