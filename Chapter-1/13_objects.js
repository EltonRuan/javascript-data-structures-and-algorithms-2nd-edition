// Criando um objeto simples
var obj1 = new Object();
var obj2 = {};

// Criando um objeto mais completo
var objCompleto = {
    name: {
        nome: 'Elton',
        sobrenome: 'Santos'
    },
    address: 'Rua X'
};

// Definindo uma classe construtora para livros
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

// Instanciando um objeto da classe Book
var livro = new Book('Senhor dos Anéis', 1138, '9374927492');

// alterando informações do livro ja criado, acessando a variavel
console.log(livro.title);
livro.title = 'Senhor topman'
console.log(livro.title);

// classe sendo alterada depois de ser criada, colocando uma função dentro dela

// lembre que sempre quando for pegar as informações de algum objeto, acesse dentro da variavel referenciada pelo classe, e nao a classe, pois
// a classe nao possui nenhuma informação armazenada, apenas dos atributos

Book.prototype.printTitle = function() {
console.log(this.title)
};

livro.printTitle();

// Exibindo o objeto criado
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