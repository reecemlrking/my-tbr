<script setup lang="ts">
import { ref } from 'vue';

const title = ref("Title");

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
  <div class="header">
    <span>
      <h1 class="header-text">{{ title }}</h1>

    </span>
  </div>
</template>
