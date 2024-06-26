let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// TODO: add buttons
// <button onclick="editbook(${index})">Edit</button>&nbsp;
// For some reason the map is adding in a comma after the delete button
function showbooks() {
    const booksDiv = books.map((book, index) => 
        `
        <h2>Book Number: ${index + 1}</h2>
        <p><strong>Book name: </strong>${book.name}</p>
        <p><strong>Author name: </strong>${book.authorName}</p>
        <p><strong>Book Description: </strong>${book.bookDescription}</p>
        <p><strong>Number of pages: </strong>${book.pagesNumber}</p>
        <button onclick="deletebook(${index})">Delete</button>
        `);
    
    document.getElementById('books').innerHTML = booksDiv;
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

// Splice syntax
// splice(start, deleteCount)
// "index" is not finding anything and errors
function deletebook(index) {  
    books.splice(index, 1);
    console.log(index, books);
    // Call the showbooks function so I can clear the HTML

    showbooks();
}
