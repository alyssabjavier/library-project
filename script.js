function getUsername() {
  let username = prompt('What is your name?');
  username = username.toUpperCase();
  const libraryName = document.querySelector('#libraryname');
  libraryName.textContent = `${username}'S LIBRARY`;
}

getUsername();

const myLibrary = [];

// function Book(title, author, pages, status) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.status = status;
// }

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const container = document.querySelector('.container');

//CREATE CARD FUNCTION
function createBookCard(book, index) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.dataset.index = index;

  //BOOK INFO
  
  
  const bookTitle = document.createElement('div');
  bookTitle.textContent = `TITLE: ${book.title}`;

  const bookAuthor = document.createElement('div');
  bookAuthor.textContent = `AUTHOR: ${book.author}`;

  const bookPages = document.createElement('div');
  bookPages.textContent = `PAGES: ${book.pages}`;

  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(bookPages);

  //READ TOGGLE BUTTON
  const readBtn = document.createElement('div');

  const btnLabel = document.createElement('label');
  btnLabel.textContent = 'READ';

  const toggleBtn = document.createElement("input");
  toggleBtn.setAttribute("type", "checkbox");

  if (book.status === "read") {
    toggleBtn.checked = true;
  }

 //could add an event listener here to change book.status and update value in array/library

  readBtn.appendChild(toggleBtn);
  readBtn.appendChild(btnLabel);

  card.appendChild(readBtn);

  //DELETE BUTTON
  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Return";
  card.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', (event) => {
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    displayLibrary(myLibrary);
  });

  return card;
}

function displayLibrary(library) {
  container.innerHTML = ''
  
  library.forEach((book, index) => {
    const card = createBookCard(book, index);
    container.appendChild(card);
})};

const book1 = new Book('Never Let Me Go', 'Kazuo Ishiguro', 304, 'read');
addBookToLibrary(book1);

const book2 = new Book('Severance', 'Ling Ma', 304, 'read');
addBookToLibrary(book2);

const book4 = new Book('Atomic Habits', 'James Clear', 272, 'unread');
addBookToLibrary(book4);
displayLibrary(myLibrary);

//BUTTON EVENT
const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener('click', (event) => {
  const formTitle = document.querySelector("#title").value;
  const formAuthor = document.querySelector("#author").value;
  const formPages = document.querySelector("#pages").value;
  const formStatus = document.querySelector("#status").value;
  const newBook = new Book(formTitle, formAuthor, formPages, formStatus);
  addBookToLibrary(newBook);
  displayLibrary(myLibrary);
  console.log(myLibrary);
 });