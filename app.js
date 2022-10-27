const form = document.querySelector('form')
const bookList = document.querySelector('#book-list');



form.addEventListener('submit', addBook);
bookList.addEventListener('click', deleteBook)

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
}

function deleteBook(event) {
    if(event.target.textContent === 'x'){
        if(confirm('Are you sure to delete this task?')){
            event.target.parentElement.parentElement.remove()
        }
    }
}



