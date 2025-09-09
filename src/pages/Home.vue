<template>
  <main>
    <div class="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="../../public/grafikart.png"
          alt="site garfikart" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Cours grafikart</h2>
        <p>Site de grafikart avec des tutos pour du JS et des exercices</p>
        <div class="card-actions justify-end">
          <a href="https://grafikart.fr/tutoriels/javascript-jsdoc-2073" target="_blank" class="btn btn-primary">site de dieux</a>
        </div>
      </div>
    </div>
    
    <div class="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="../../public/daisyUI.png"
          alt="site daisyui" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Daisy UI</h2>
        <p>Le site de Daysi UI avec les différents templates</p>
        <div class="card-actions justify-end">
          <a href="https://daisyui.com/" target="_blank" class="btn btn-primary">accès au site</a>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="./public/daisyUI.png"
          alt="Site vue" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Card Title</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div class="card-actions justify-end">
          <a href="https://vuejs.org/" target="_blank" class="btn btn-primary">accès au site</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

</script>

<style scoped lang="css">
</style>