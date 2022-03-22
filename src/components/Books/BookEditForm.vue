<template>
  <form class="book__edit-form" @submit="onSubmit">
    <h3>Редактирование книги</h3>
    <input
      class="book__edit-input base-input"
      type="text"
      v-model.trim="book.title"
    />
    <input
      class="book__edit-input base-input"
      type="text"
      v-model.trim="book.author"
    />
    <div class="book__form-actions">
      <router-link
        to="/"
        class="book__edit-button base-button base-button--secondary"
        >Назад</router-link
      >
      <button
        class="book__edit-button base-button base-button--primary"
        type="submit"
        :disabled="!isValid"
      >
        Сохранить
      </button>
    </div>
  </form>
</template>

<script>
import { defineComponent, computed, toRefs } from "vue";
import { useRouter } from "vue-router";

import BooksService from "@/services/books.service";

export default defineComponent({
  name: "BooksEditForm",
  props: ["bookData"],

  setup(props) {
    const router = useRouter();

    const { bookData: book } = toRefs(props);

    const isValid = computed(() => {
      return book.value.title !== "" && book.value.author !== "";
    });

    const onSubmit = (event) => {
      event.preventDefault();
      if (isValid.value) {
        try {
          BooksService.edit(book.value);
          router.push("/");
        } catch (error) {
          alert(error);
        }
      }
    };
    return {
      book,
      onSubmit,
      isValid,
    };
  },
});
</script>

<style lang="scss" scoped>
.book {
  &__edit-form {
    width: min(600px, 100%);
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 16px;
    border-radius: 10px;
    background-color: white;
  }
  &__edit-input {
    width: min(300px, 100%);
  }
  &__form-actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
}
</style>
