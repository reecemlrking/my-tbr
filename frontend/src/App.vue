<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/Header.vue';
import BookList from './components/BookList.vue';

const title = ref("My TBR");

</script>

<style lang="css">
*,
html {
  padding: 0;
  margin: 0;
}
</style>

<template>
  <Header :title=title />
  <BookList />

</template>

<style scoped></style>
