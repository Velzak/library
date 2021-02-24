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

//Gets the input information to add to myLibrary array through popup modal
function addBookInfo() {
  modal.style.display = "block";
  document.querySelector("#submit").addEventListener("click", () => {
    let author = document.querySelector("#author");
    let title = document.querySelector("#title");
    let pages = document.querySelector("#pages");
    let read = document.querySelector("#read");

    //new Book object made from input values
    let books = new Book(author.value, title.value, pages.value, read.value);

    //push the new object to myLibrary array
    myLibrary.push(books);

    //display the myLibrary array
    displayBooks();
  });
}

closeBtn.onclick = function () {
  modal.style.display = "none";
};

//display books from Book Constructor
function displayBooks() {
  let newSection = document.createElement("section");
  newSection.classList.add("bookCard");

  const author = document.createElement("h3");
  const title = document.createElement("h3");
  const pages = document.createElement("h3");
  const read = document.createElement("button");
  read.classList.add("toggleRead");   

  for (let i = 0; i < myLibrary.length; i++) {
      if(myLibrary[i] ){

      }
    author.textContent = myLibrary[i].author;
    title.textContent = myLibrary[i].title;
    pages.textContent = myLibrary[i].pages;
    renderArea.appendChild(newSection);
    newSection.appendChild(author);
    newSection.appendChild(title);
    newSection.appendChild(pages);
    newSection.appendChild(read);
  }
  

  modal.style.display = "none";
  console.log(myLibrary)
}


//Each loop is causing the elements to all become the same object. Need to allow for each object to be added to the books
