const form = document.querySelector('form')
const bookList = document.querySelector('#book-list');


form.addEventListener('submit', addBook);

function addBook(e) {
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    const book = [title, author, isbn];

    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.appendChild(document.createTextNode(''));
    td.className = 'collection';
    tr.appendChild(document.createTextNode(book));
    tr.className = 'collection-item';
    bookList.appendChild(tr);


    const x = document.createElement('a')
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.appendChild(document.createTextNode('x'));
    td.appendChild(link);
    tr.appendChild(td);
    bookList.appendChild(tr);

    td.appendChild(x);
    const tr2 = document.querySelector('tr');
    tr.appendChild(td);
    //book = '';
    event.preventDefault();
}



