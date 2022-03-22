<template>
  <form @submit="onSubmit" class="books__creation-form">
    <h3>Новая книга</h3>
    <input
      class="books__creation-input base-input"
      type="text"
      placeholder="Введите название"
      v-model.trim="titleRef"
    />
    <input
      class="books__creation-input base-input"
      type="text"
      placeholder="Укажите автора"
      v-model.trim="authorRef"
    />
    <div class="books__form-actions">
      <router-link
        to="/"
        class="books__creation-button base-button base-button--secondary"
        >Назад</router-link
      >
      <button
        class="books__creation-button base-button base-button--primary"
        type="submit"
        :disabled="!isValid"
      >
        Добавить
      </button>
    </div>
  </form>
</template>

<script>
import { defineComponent, computed, reactive, toRef } from "vue";
import { useRouter } from "vue-router";

import BooksService from "@/services/books.service";

export default defineComponent({
  name: "BookCreationForm",

  setup() {
    const router = useRouter();
    const bookData = reactive({
      title: "",
      author: "",
      date: null,
    });
    const titleRef = toRef(bookData, "title");
    const authorRef = toRef(bookData, "author");
    const dateRef = toRef(bookData, "date");

    const isValid = computed(() => {
      return titleRef.value !== "" && authorRef.value !== "";
    });

    const onSubmit = (event) => {
      event.preventDefault();
      if (isValid.value) {
        dateRef.value = new Date().toISOString();
        try {
          BooksService.add(bookData);
          router.push("/");
        } catch (error) {
          alert(error);
        }
      }
    };

    return {
      bookData,
      titleRef,
      authorRef,
      dateRef,
      onSubmit,
      isValid,
    };
  },
});
</script>

<style lang="scss" scoped>
.books {
  &__creation-form {
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
  &__creation-input {
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
