<template>
  <header class="bg">
    <header1></header1>
  </header>
  <div class="bg">  
    <div style="height: 1000px;" class="centers">
      <router-view></router-view>
    </div>
  </div>
  <footer class="bg">

  </footer>
</template>
<script setup lang="ts">
  import header1 from './navbar/index.vue'
</script>
<style>
</style>