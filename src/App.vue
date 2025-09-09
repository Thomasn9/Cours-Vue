 <template>
  <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{{tableau}}</h2>
    <h3>{{ nombre }}</h3>
    <p>{{string}}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">{{boolean}}</button>
    </div>
  </div>
</div>
</template>

<script setup lang="js">
const nombre = 42;
const string = "coucou je suis un texte";
const tableau = [1,2,3,6];
const boolean = true;
</script>


<style scoped>

</style>
