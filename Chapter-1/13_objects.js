var obj1 = new Object();
var obj2 = {};

var objCompleto = {
    name: {
        nome: 'Elton',
        sobrenome: 'Santos'
    },
    address: 'Rua X'
};

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var livro = new Book('Senhor dos Anéis', 1138, '9374927492');

console.log(livro.title);
livro.title = 'Senhor topman'
console.log(livro.title);

Book.prototype.printTitle = function() {
console.log(this.title)
};

livro.printTitle();

console.log(livro);

function Test(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function() {

        console.log(this.isbn);

    }
}

var test = new Test('Exemplo', 100, '1234567890');


test.printIsbn();