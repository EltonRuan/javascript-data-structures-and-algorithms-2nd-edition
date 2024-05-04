// Função para verificar se os valores são iguais (==) e não consideram o tipo
function isEqual(value1, value2) {
    return value1 == value2;
}

// Função para verificar se os valores são iguais (===) e consideram o tipo
function isStrictEqual(value1, value2) {
    return value1 === value2;
}

// Função para converter um valor para número
function toNumber(value) {
    return Number(value);
}

// Função para converter um valor para primitivo
function toPrimitive(value) {
    return value.valueOf() || value.toString();
}

// Realizando as comparações conforme as regras mencionadas
console.log("null == undefined:", isEqual(null, undefined));
console.log("undefined == null:", isEqual(undefined, null));
console.log("number == string:", isEqual(42, "42")); // number == toNumber(string)
console.log("string == number:", isEqual("42", 42)); // toNumber(string) == number
console.log("boolean == any:", isEqual(true, "1")); // toNumber(boolean) == string
console.log("any == boolean:", isEqual("1", true)); // string == toNumber(boolean)
console.log("String/Number == Object:", isEqual("Hello", {})); // String/Number == toPrimitive(Object)
console.log("Object == String/Number:", isEqual({}, "Hello")); // toPrimitive(Object) == String/Number

// Verificando as comparações estritas
console.log("null === undefined:", isStrictEqual(null, undefined));
console.log("undefined === null:", isStrictEqual(undefined, null));
console.log("number === string:", isStrictEqual(42, "42"));
console.log("string === number:", isStrictEqual("42", 42));
console.log("boolean === any:", isStrictEqual(true, "1"));
console.log("any === boolean:", isStrictEqual("1", true));
console.log("String/Number === Object:", isStrictEqual("Hello", {}));
console.log("Object === String/Number:", isStrictEqual({}, "Hello"));

// Realizando a conversão para número
console.log("Conversão para número de undefined:", toNumber(undefined));
console.log("Conversão para número de null:", toNumber(null));
console.log("Conversão para número de true:", toNumber(true));
console.log("Conversão para número de false:", toNumber(false));

// Realizando a conversão para primitivo
console.log("Conversão para primitivo de um objeto:", toPrimitive({}));
console.log("Conversão para primitivo de uma string:", toPrimitive("Hello"));
