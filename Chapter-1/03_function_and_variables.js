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

console.log(myVariable);
console.log(myFuncion()); 
console.log(otherVariable); 
console.log(otherFuncion()); 
console.log(otherVariable); 