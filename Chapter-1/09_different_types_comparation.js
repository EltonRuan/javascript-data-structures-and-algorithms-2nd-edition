console.log('Elton' === true) // false, um é string e o outro é um valor boolean

console.log('Elton' === 'Elton') // true, são valores iguais

var pessoa1 = {nome:'Elton'};
var pessoa2 = {nome:'Elton'};
console.log(pessoa1 === pessoa2) // false, objetos diferentes, mesmo possuindo valores iguais