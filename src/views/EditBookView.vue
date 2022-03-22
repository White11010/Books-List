<template>
  <div class="books">
    <div class="wrapper">
      <div class="books__edit">
        <book-edit-form v-if="book.title !== undefined" :book-data="book" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import BooksService from "@/services/books.service";
import BookEditForm from "@/components/Books/BookEditForm";

export default defineComponent({
  name: "EditBookView",
  components: {
    BookEditForm,
  },
  setup() {
    const route = useRoute();
    const book = ref({});

    onMounted(() => {
      book.value = BooksService.getById(route.params.id);
    });

    return {
      book,
    };
  },
});
</script>

<style lang="scss" scoped>
.books {
  &__edit {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
