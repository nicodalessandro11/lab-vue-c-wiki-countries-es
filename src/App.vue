<template>
  <div>
    <Navbar />
    <div class="row">
      <div class="col-12 mt-5">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import { onMounted } from 'vue';
import { useCountryStore } from './stores/countries'

const store = useCountryStore();

onMounted(async () => {
  console.log("carga inicial");
  await store.loadCountries();
}
);
</script>

<style>
.custom-scrollbar {
  max-height: 500px;
  overflow-y: scroll;
}
</style>
