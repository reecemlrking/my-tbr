<script setup lang="ts">
import { ref } from 'vue';
import BookContents from './BookContents.vue';
import type { Book } from '@/models/Book';
const books = ref<Book[]>([]);
books.value.push({
  title: "Lord of Chaos",
  author: "Robert Jordan",
  imageLinks: { coverURL: "https://dynamic.indigoimages.ca/v1/books/books/1250251974/1.jpg" },
  description: `The Wheel of Time turns and Ages come and go, leaving memories that become legend. Legend fades to myth, and even myth is long forgotten when the Age that gave it birth returns again. In the Third Age, an Age of Prophecy, the World and Time themselves hang in the balance. What was, what will be, and what is, may yet fall under the Shadow.
  On the slopes of Shayol Ghul, the Myrddraal swords are forged, and the sky is not the sky of this world;
  In Salidar the White Tower in exile prepares an embassy to Caemlyn, where Rand Al'Thor, the Dragon Reborn, holds the throne--and where an unexpected visitor may change the world....
  In Emond's Field, Perrin Goldeneyes, Lord of the Two Rivers, feels the pull of ta'veren to ta'veren and prepares to march...
  Morgase of Caemlyn finds a most unexpected, and quite unwelcome, ally....And south lies Illian, where Sammael holds sway...`,
  isbn_10: 'alksjdfhaks',
  isbn_13: 'askdjfhlkzsjdf',
  pageCount: 1016,
  dimensions: { height: '10 cm', width: '10 cm', thickness: '10 cm' },
  publisher: "Tor",
  publishedDate: "1999-04-02"
})
books.value.push({
  title: "Lord of Chaos",
  author: "Robert Jordan",
  imageLinks: { coverURL: "https://bookoutlet.ca/_next/image?url=https%3A%2F%2Fimages.bookoutlet.com%2Fcovers%2Flarge%2Fisbn978125%2F9781250251947-l.jpg&w=3840&q=75" },
  description: `Prophesized to defeat the Dark One, Rand al'Thor, the Dragon Reborn, has upset the balance of power across the land. Shaido Aiel are on the march, ravaging everything in their path. The White Tower's Amyrlin has been deposed, turning the Aes Sedai against one another. The forbidden city of Rhuidean is overrun by Shadowspawn.
  Despite the chaos swirling around him, Rand continues to learn how to harness his abilities, determined to wield the One Power--and ignoring the counsel of Moiraine Damodred at great cost.`,
  isbn_10: 'alksjdfhaks',
  isbn_13: 'askdjfhlkzsjdf',
  pageCount: 1016,
  dimensions: { height: '10 cm', width: '10 cm', thickness: '10 cm' },
  publisher: "Tor",
  publishedDate: "1999-04-02"
})

</script>

<style lang="css">
.book-coontainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.book-list {
  width: 275px;
  list-style-type: none;
  border: 0.5em;
  border-color: black;
}
</style>

<template>
  <div class="book-coontainer">
    <ul class="book-list">
      <li v-for="book in books">
        <BookContents :book="book"></BookContents>
      </li>
    </ul>
  </div>

</template>
