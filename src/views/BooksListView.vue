<template>
  <div class="books">
    <div class="wrapper">
      <div class="books__actions">
        <router-link to="/new" class="base-button base-button--primary"
          >Добавить</router-link
        >
      </div>
      <books-list />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import BooksList from "@/components/Books/BooksList";

export default defineComponent({
  name: "BooksListView",
  components: {
    BooksList,
  },
});
</script>

<style lang="scss" scoped>
.books {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 16px 0;

  &__actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
  }
}
</style>
