<script setup lang="ts">
import { ref } from 'vue';

const title = ref("My TBR");
const modelSearch = ref("");

</script>

<style lang="css">
.header-text {
  color: #e2dfdc;
}

.header {
  padding: 10pt;
  background-color: #5e1722;
}
</style>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="header">
    <span>
      <h1 class="header-text">{{ title }}</h1>
      <input v-model="modelSearch" placeholder="search" />
      <button class="icon"><i class="fa fa-search"></i></button>
      <p>{{ modelSearch }}</p>
    </span>
  </div>
</template>
