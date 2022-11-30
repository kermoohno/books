const form = document.querySelector('form')
const bookList = document.querySelector('#book-list');
const deleteBooks = document.querySelector('#delete-books')



form.addEventListener('submit', addBook);
bookList.addEventListener('click', deleteBook);
deleteBooks.addEventListener('click', deleteAllBooks);
document.addEventListener('DOMContentLoaded', getBooksFromLS);

function getBooksFromLS(event){
    let books
    if(localStorage.getItem(`books`) === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem(`books`))
        console.log(typeof books)

    }
    books.forEach((bookFromLS) => {
        //const book = [title, author, isbn];

        const tr = document.createElement('tr');

        bookFromLS.forEach((dataItem) => {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(dataItem));
            tr.appendChild(td);
        })
        const td = document.createElement('td');
        const link = document.createElement('a');
        link.setAttribute('href', '#');
        link.appendChild(document.createTextNode('x'));
        td.appendChild(link);
        tr.appendChild(td);

        bookList.appendChild(tr);

    });
}

function addBook(e) {
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    const book = [title, author, isbn];

    const tr = document.createElement('tr');

    book.forEach((dataItem) => {
        const td = document.createElement('td');
        td.appendChild(document.createTextNode(dataItem));
        tr.appendChild(td);
    })
    const td = document.createElement('td');
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.appendChild(document.createTextNode('x'));
    td.appendChild(link);
    tr.appendChild(td);

    bookList.appendChild(tr);

    e.preventDefault();

    addBookToLS(book);
}

function deleteBook(event) {
    if(event.target.textContent === 'x'){
        if(confirm('Are you sure to delete this task?')){
            event.target.parentElement.parentElement.remove()
            let isbn = event.target.parentElement.previousElementSibling
            let author = isbn.previousElementSibling
            let title = author.previousElementSibling
            let book = [title.textContent, author.textContent, isbn.textContent]
            console.log(book)
            deleteBookFromLS(book);
        }
    }
}

function deleteAllBooks(event) {
    while (bookList.firstChild){
        bookList.removeChild(bookList.firstChild)
    }
}

function addBookToLS(book) {
    let books
    if(localStorage.getItem('books') === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
}
function deleteBookFromLS(boook) {
    let books
    if(localStorage.getItem(`books`) === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem(`books`))
    }
    console.log(books)
    books.forEach((bookFromLS, index) => {
        console.log(JSON.stringify(bookFromLS) === JSON.stringify(boook))
        if(JSON.stringify(bookFromLS) === JSON.stringify(boook)) {
            books.splice(index, 1)
        }
    });
    localStorage.setItem('books', JSON.stringify(books))
}



