/*Take User Input to create a Book Library.  
//Create an array of objects (Books) to place into the DOM

//Get the Input from user
//Store input into an array
//Display each book in array
*/

let myLibrary = []

class Book {
    constructor(author, title, pages, read) {
        this.author = author,
        this.title = title,
        this.pages = pages,
        this.read = read
    }
}

let renderArea = document.querySelector('#renderArea')

document.querySelector('button').addEventListener('click', addBookToLibrary)

function addBookToLibrary() {
    let books = new Book()
    myLibrary.push(books)
    displayBooks()
}


//display new books from Book Constructor 
function displayBooks(){
    let newSection = document.createElement('section')
    newSection.classList.add('bookCard')

    const author = document.createElement('h3')
    const title = document.createElement('h3')
    const pages = document.createElement('h4')
    const read = document.createElement('button')
    read.classList.add('toggleRead')
    for (let i = 0; i < myLibrary.length; i++) {
        author.textContent = myLibrary[i].author
        title.textContent = myLibrary[i].title
        renderArea.appendChild(newSection)
        newSection.appendChild(author)
        newSection.appendChild(title)
        newSection.appendChild(pages)
        newSection.appendChild(read)
    }   
}