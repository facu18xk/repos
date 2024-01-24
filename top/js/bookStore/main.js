const booksContainer = document.querySelector('.books');
const newBookBtn = document.querySelector('.header--new');
const addBookBtn = document.querySelector('.newBook');
const popup = document.querySelector('.addBook');
const myLibrary = [
  new Book("Can't hurt me", "David Goggings", "./books/cantHurtMe.jpg", "Biography", "Read"), new Book("Brave new World", "Aldous Huxley", "./books/braveNewWorld.jpg", "Fiction", "Read"), new Book("Republic", "Plato", "./books/republic.jpeg", "Philosophy", "Read"),
  new Book("The world as I see it", "Albert Einstein", "./books/theWorldAsISeeIt.jpg", "Essay", "To read"),
  new Book("Never Finished", "David Goggings", "./books/neverFinished.jpg", "Biography", "Read")
];
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
        <p class="info--status" data-name="${book.name}">Status: ${book.status}</p>
        <div class="info--buttons">
          <button data-name="${book.name}" class="buttons--button remove">Remove</button>
          ${book.buttonStatus()}
        </div>
      </div>
  `;
  container.appendChild(bookFrame);
}
//Removes the book from the library and from the document based on it's name 
function remove(book) {
  const ONE = 1;
  const index = myLibrary.indexOf(book);
  //remove from the document
  //plus one because the first element is text /n
  booksContainer.removeChild(booksContainer.childNodes[index + ONE]);
  //remove from the array
  myLibrary.splice(index, 1);
}
function setButton(book) {
  const btn = document.querySelector(`.remove[data-name="${book.name}"]`);
  btn.addEventListener('click', () => {
    remove(book);
  })
}

/**
 * Change the status from to read to read 
 */
function changeStatus(book) {
  const statusBtn = document.querySelector(`.changeStatus[data-name="${book.name}"]`);
  const domStatus = document.querySelector(`.info--status[data-name="${book.name}"]`);
  statusBtn.addEventListener('click', () => {
    domStatus.textContent = "Status: Read";
    statusBtn.parentElement.removeChild(statusBtn);
  })
}
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
  if (this.status === "Read") return "";
  else return `<button class="buttons--button changeStatus" data-name="${this.name}">Read</button>`
}
//Render the book
Book.prototype.render = function () {
  renderBook(this, booksContainer);
  setButton(this);
  if (this.status === "To read") changeStatus(this);
}
//Remove the book
Book.prototype.remove = function (index) {
  booksContainer.removeChild(booksContainer.childNodes[index]);
}
//Remove the book when clicked in remove
//Add a new book with a popup
newBookBtn.addEventListener('click', () => {
  popup.style.display = "flex";
})

addBookBtn.addEventListener('click', () => {
  const ONE = 1;
  const newBook = {};
  newBook.name = document.querySelector('.name').value;
  newBook.author = document.querySelector('.author').value;
  newBook.genre = document.querySelector('.cover').value;
  newBook.cover = document.querySelector('.genre').value;
  newBook.status = document.querySelector('.status').value;
  for (const key in newBook) {
    if (newBook[key] == "") return alert("Please introduce all the required items");
  }
  const lastItemIndex = myLibrary.push(new Book(...Object.values(newBook))) - ONE;
  myLibrary[lastItemIndex].render();
  popup.style.display = "none";
})
myLibrary.forEach(el => el.render());
