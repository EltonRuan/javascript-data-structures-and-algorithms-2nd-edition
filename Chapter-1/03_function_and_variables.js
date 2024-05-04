var myVariable = 'global';
var otherVariable = 'global';

function myFuncion(){
    var myVariable = 'local';
    return myVariable
}

function otherFuncion(){
    var otherVariable = 'local';
    return otherVariable;
}

console.log(myVariable); // 1
console.log(myFuncion()); // 2
console.log(otherVariable); // 3
console.log(otherFuncion()); // 4
console.log(otherVariable); // 5

// 1 - retorna global
// 2 - exibe local, apenas no interior da função
// 3 - retorna global
// 4 - exibe local, apenas no interior da função
// 5 - previamente já chamou a função, então ele retorna o de dentro da função por alterarmos o valor da variável, então será local