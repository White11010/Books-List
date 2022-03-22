import { createRouter, createWebHashHistory } from "vue-router";

import BooksListView from "@/views/BooksListView";
import NewBookView from "@/views/NewBookView";
import EditBookView from "@/views/EditBookView";

const routes = [
  {
    path: "/",
    name: "booksList",
    component: BooksListView,
  },
  {
    path: "/new",
    name: "newBook",
    component: NewBookView,
  },
  {
    path: "/edit/:id",
    name: "editBook",
    component: EditBookView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
