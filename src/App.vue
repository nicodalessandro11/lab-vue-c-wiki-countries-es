<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';

</script>

<style>
.custom-scrollbar {
  max-height: 500px;
  overflow-y: scroll;
}
</style>
