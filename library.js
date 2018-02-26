let myLibrary = [book1]

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = false
  
  this.info = function() {
    return this.title + 'by ' + this.author + this.pages + this.read
  }
}

function addBookToLibrary() {
  // do stuff here
}

//add our books to the html
function render() {
  
}

const book1 = new Book('Starship Troopers', 'Robert Heinlein', '150')
//console.log(book1.info())
