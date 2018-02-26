
const book1 = new Book('Starship Troopers', 'Robert Heinlein', '150');
//console.log(book1.info())

let myLibrary = [book1];

function Book(title, author, pages, read = false) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  
  this.info = function() {
  	var readString = this.read ? "have read" : "not read";

    return '<ul class="book"><li><h2>' + this.title + ' </h2></li><li><h4>' + this.author +
  	'</h4></li><li><h4>' + this.pages + ' pages</h4></li><li><h4>' + readString + '</h4></li></ul>';
  }

}


function addBookToLibrary() {
  var book = new Book('', )
}

//add our books to the html
function render() {
	var books = '';
  for (var i = 0; i < myLibrary.length; i++) {
  	books += myLibrary[i].info();
  }

  var library = document.getElementById('library').innerHTML = books;
}

function showForm() {
	document.getElementById("bookDetails").style.display = "block";
}


document.getElementById("addBookButton").addEventListener("click", showForm);
document.getElementById("bookSubmit").addEventListener("click", addBookToLibrary);
render();
