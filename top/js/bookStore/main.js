const booksContainer = document.querySelector('.books');
const newBookBtn = document.querySelector('.header--new');
const addBookBtn = document.querySelector('.newBook');
const popup = document.querySelector('.addBook');
const myLibrary = [];
/**
 * Create book constructor with the properties of genre, title, author, status, with the method for rendering the card in the prototype 
 */

/**
 * Renders the book into the html document
 */
function renderBook(book, container) {
  const bookFrame = document.createElement('div');
  bookFrame.setAttribute("class", "book");
  bookFrame.innerHTML = `
      <div class="book--cover">
        <img src="${book.cover}" alt="${book.name} book cover">
      </div>
      <div class="book--info">
        <p class="info--genre">${book.genre}</p>
        <h2 class="info--title">${book.name}</h2>
        <p class="info--author">by ${book.author}</p>
        <p class="info--status">Status: ${book.status}</p>
        <div class="info--buttons">
          <button class="buttons--button remove">Remove</button>
          ${book.buttonStatus()}
        </div>
      </div>
  `;
  container.appendChild(bookFrame);
}
const getImagePath = img => `./books/${img}`;
/**
 * Constructor of books with name, genre, cover, author, status
 */
function Book(name, author, cover, genre, status) {
  this.name = name;
  this.author = author;
  this.cover = cover;
  this.genre = genre;
  this.status = status;
}
//Return a button if the status is equal toRead or return an empty string otherwise 
Book.prototype.buttonStatus = function () {
  if (this.status === "read") return "";
  else return `<button class="buttons--button changeStatus">Read</button>`
}
//Render the book
Book.prototype.render = function () {
  renderBook(this, booksContainer);
}

const republic = new Book("The republic", "Plato", getImagePath('republic.jpeg'), "Philosophy", "read");

republic.render();
//Add a new book with a popup
newBookBtn.addEventListener('click', () => {
  popup.style.display = "flex";
})


