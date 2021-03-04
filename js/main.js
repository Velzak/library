/*Take User Input to create a Book Library.  
//Create an array of objects (Books) to place into the DOM

//Get the Input from user
//Store input into an array
//Display each book in array
*/

let myLibrary = [];

class Book {
  constructor(author, title, pages, read) {
    (this.author = author),
      (this.title = title),
      (this.pages = pages),
      (this.read = read);
  }
}

let renderArea = document.querySelector("#renderArea");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");

document.querySelector("#modal-btn").addEventListener("click", addBookInfo);

//Creates modal popup for adding a new book
function addBookInfo() {
  modal.style.display = "block";
}

//Gets information from inputs of each section of the form, then performs function to add a "card" for each new book to display
document.querySelector("#submit").addEventListener("click", () => {
  let author = document.querySelector("#author");
  let title = document.querySelector("#title");
  let pages = document.querySelector("#pages");
  let read = document.querySelector("#read");

  //new Book object made from input values

  const books = new Book(author.value, title.value, pages.value, read.value);

  //push the new object to myLibrary array
  myLibrary.push(books);
  console.log(myLibrary.length);

  //display the myLibrary array as cards on the DOM
  displayBooks();
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

//display books from Book Constructor
function displayBooks() {
  let newSection = document.createElement("section");
  newSection.classList.add("bookCard");

  //Creates new elements for each section of the card, Author, Title, Pages, and if it has been read.
  const author = document.createElement("h3");
  const title = document.createElement("h3");
  const pages = document.createElement("h3");
  const read = document.createElement("button");
  const readCheck = document.getElementById('read');
  const deleteButton = document.createElement("button");
  read.classList.add("toggleRead")
  if(readCheck.checked === true) {
    read.classList.add('reading')
  }

  deleteButton.classList.add("deleteBtn");

  //loops through the array of objects and adds the text content of each card
  for (let i = 0; i < myLibrary.length; i++) {
    author.textContent = myLibrary[i].author;
    title.textContent = myLibrary[i].title;
    pages.textContent = myLibrary[i].pages;
    read.textContent = `Read`;
    deleteButton.textContent = `Delete`;


    //appends the card and its children to a renderArea section of the DOM
    renderArea.appendChild(newSection);
    newSection.appendChild(author);
    newSection.appendChild(title);
    newSection.appendChild(pages);
    newSection.appendChild(read);
    newSection.appendChild(deleteButton);
  }
  modal.style.display = "none";

  document.querySelectorAll('.deleteBtn').forEach((item) => {
    item.addEventListener('click', () => {
      let card = item.parentNode
      card.parentNode.removeChild(card)
    })
  })

  document.querySelectorAll('.toggleRead').forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('reading')
    })
  })
}
