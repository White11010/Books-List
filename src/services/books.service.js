class BooksService {
  #books;

  constructor() {
    const booksFromStorage = localStorage.getItem("books");
    this.#books = booksFromStorage === null ? [] : JSON.parse(booksFromStorage);
  }

  #checkIsExisted(bookData) {
    return this.#books.some(
      (book) => book.title === bookData.title && book.author === bookData.author
    );
  }
  get() {
    return this.#books;
  }
  getById(id) {
    const index = this.#books.findIndex((book) => book.id.toString() === id);
    return this.#books[index];
  }
  add(bookData) {
    if (!this.#checkIsExisted(bookData)) {
      bookData.id =
        this.#books.length === 0
          ? 1
          : this.#books[this.#books.length - 1].id + 1;
      this.#books.push(bookData);
      localStorage.setItem("books", JSON.stringify(this.#books));
      return;
    }
    throw "Book with these title and author already exists";
  }
  edit(bookData) {
    const index = this.#books.findIndex((book) => book.id === bookData.id);
    this.#books[index] = bookData;
    localStorage.setItem("books", JSON.stringify(this.#books));
  }
}
export default new BooksService();
