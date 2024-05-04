function isEqual(value1, value2) {
    return value1 == value2;
}

function isStrictEqual(value1, value2) {
    return value1 === value2;
}

function toNumber(value) {
    return Number(value);
}

function toPrimitive(value) {
    return value.valueOf() || value.toString();
}

console.log("null == undefined:", isEqual(null, undefined));
console.log("undefined == null:", isEqual(undefined, null));
console.log("number == string:", isEqual(42, "42")); // number == toNumber(string)
console.log("string == number:", isEqual("42", 42)); // toNumber(string) == number
console.log("boolean == any:", isEqual(true, "1")); // toNumber(boolean) == string
console.log("any == boolean:", isEqual("1", true)); // string == toNumber(boolean)
console.log("String/Number == Object:", isEqual("Hello", {})); // String/Number == toPrimitive(Object)
console.log("Object == String/Number:", isEqual({}, "Hello")); // toPrimitive(Object) == String/Number

console.log("null === undefined:", isStrictEqual(null, undefined));
console.log("undefined === null:", isStrictEqual(undefined, null));
console.log("number === string:", isStrictEqual(42, "42"));
console.log("string === number:", isStrictEqual("42", 42));
console.log("boolean === any:", isStrictEqual(true, "1"));
console.log("any === boolean:", isStrictEqual("1", true));
console.log("String/Number === Object:", isStrictEqual("Hello", {}));
console.log("Object === String/Number:", isStrictEqual({}, "Hello"));

console.log("Conversão para número de undefined:", toNumber(undefined));
console.log("Conversão para número de null:", toNumber(null));
console.log("Conversão para número de true:", toNumber(true));
console.log("Conversão para número de false:", toNumber(false));

console.log("Conversão para primitivo de um objeto:", toPrimitive({}));
console.log("Conversão para primitivo de uma string:", toPrimitive("Hello"));
