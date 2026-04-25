<script setup lang="ts">
import type { Book } from '@/models/Book';
const props = defineProps<{
  book: Book
}>();

</script>

<style lang="css">
.book-image {
  width: 100%;
  border-radius: 10px;
}

.book-image-box {
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.book-contents {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  border-radius: 10px;
  width: 275px;
}

.book-description {
  padding: 1em;
}
</style>

<template>
  <div class="book-contents">
    <div class="book-image-box">
      <img :src="book.imageLinks.coverURL" class="book-image"></img>
    </div>
    <h1 class="book-title">{{ book.title }}</h1>
    <h2 class="book-author">{{ book.author }}</h2>
    <p class="book-description">{{ book.description.slice(0, 256) + '...' }}</p>
  </div>
</template>
