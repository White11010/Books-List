<template>
  <div class="books">
    <div class="wrapper">
      <div class="books__creation">
        <book-creation-form />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import BookCreationForm from "@/components/Books/BookCreationForm";

export default defineComponent({
  name: "BooksNewView",
  components: {
    BookCreationForm,
  },
});
</script>

<style lang="scss" scoped>
.books {
  &__creation {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
