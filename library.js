
const book1 = new Book('Starship Troopers', 'Robert Heinlein', '150', true);
//console.log(book1.info())

let myLibrary = [book1];

function Book(title, author, pages, read, id = 0) {
  this.id = id
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  
  this.info = function() {
  	var readString = this.read ? "have read" : "not read";

    return '<ul class="book" data-id =' + this.id + '><button class="delete">Delete</button><li><h2>' + this.title 
    + ' </h2></li><li><h4>' + this.author +
  	'</h4></li><li><h4>' + this.pages + ' pages</h4></li><li><h4>' + readString +
  	 '</h4></li><button class="toggle">Change read status</button></ul>';
  }

  this.toggleRead = function() {
  	this.read = !this.read;
  }

}


function addBookToLibrary() {

  var title = document.getElementById('title');
  var author = document.getElementById('author');
  var pages = document.getElementById('pages');
  var read = document.getElementById('ifRead').checked;
  var id = myLibrary.length;
  var book = new Book(title.value, author.value, pages.value, read, id);
  myLibrary.push(book);
  title.value = '';
  author.value = '';
  pages.value = '';
}

function deleteBook() {
	var book = event.target.parentElement;
	var id = book.dataset.id;
	myLibrary.splice(id, 1);
	//need to loop through our library and reset the ids.
	for (var i = 0; i < myLibrary.length; i++) {
		myLibrary[i].id = i;
	}
}

function toggleRead() {
	var book = event.target.parentElement;
	var id = book.dataset.id;
	myLibrary[id].toggleRead();
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

function hideForm() {
	document.getElementById("bookDetails").style.display = "none";
}


document.getElementById("addBookButton").addEventListener("click", showForm);

document.getElementById("bookSubmit").addEventListener("click", function(event) {
	event.preventDefault();
	addBookToLibrary();
	hideForm();
    render();
});

document.addEventListener("click", function(event) {
	if(event.target.classList.contains('delete')) {
	  deleteBook();
	  render();
	}
});

document.addEventListener("click", function(event) {
	if(event.target.classList.contains('toggle')) {
	  toggleRead();
	  render();
	}
});

render();
