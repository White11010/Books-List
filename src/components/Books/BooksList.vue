<template>
  <table class="books__table">
    <thead>
      <tr>
        <th>Название</th>
        <th>Автор</th>
        <th>Дата добавления</th>
        <th>Действия</th>
      </tr>
    </thead>
    <tbody>
      <books-list-item v-for="book in books" :key="book.id" :book-data="book" />
    </tbody>
  </table>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

import BooksListItem from "@/components/Books/BooksListItem";
import BooksService from "@/services/books.service";

export default defineComponent({
  name: "BooksList",
  components: {
    BooksListItem,
  },

  setup() {
    const books = ref([]);

    onMounted(() => {
      books.value = BooksService.get();
    });

    return {
      books,
    };
  },
});
</script>

<style scoped>
.books__table {
  width: 100%;
  border-collapse: collapse;
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  /*justify-content: space-between;*/
  /*gap: 32px;*/
}
</style>
