<template>
  <tr class="books__item">
    <td>
      <p class="books__item-title">{{ bookData.title }}</p>
    </td>
    <td>
      <p class="books__item-author">{{ bookData.author }}</p>
    </td>
    <td>
      <p class="books__item-date">{{ bookData.date.substring(0, 10) }}</p>
    </td>
    <td>
      <router-link
        class="books__edit-button"
        :to="{ name: 'editBook', params: { id: bookData.id } }"
      >
        Редактировать
      </router-link>
    </td>
  </tr>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BooksListItem",
  props: ["bookData"],
});
</script>

<style lang="scss" scoped>
.books {
  &__item {
    & > td {
      max-width: 300px;
      box-sizing: border-box;
      padding: 6px;
      border: 1px solid #383838;
      text-align: start;
      overflow: hidden;
    }
    &-title {
      font-size: 1.2em;
    }
    &-author {
      font-style: italic;
    }
    &-date {
      font-size: 0.8em;
    }
  }
  &__edit-button {
    color: #3364e0;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
