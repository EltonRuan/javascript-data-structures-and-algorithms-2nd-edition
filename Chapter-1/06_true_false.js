// Verificando se undefined é verdadeiro ou falso
console.log("undefined:", Boolean(undefined)); // false

// Verificando se null é verdadeiro ou falso
console.log("null:", Boolean(null)); // false

// Verificando se um valor booleano verdadeiro é verdadeiro ou falso
console.log("true:", Boolean(true)); // true

// Verificando se um valor booleano falso é verdadeiro ou falso
console.log("false:", Boolean(false)); // false

// Verificando se +0 é verdadeiro ou falso
console.log("+0:", Boolean(+0)); // false

// Verificando se -0 é verdadeiro ou falso
console.log("-0:", Boolean(-0)); // false

// Verificando se NaN é verdadeiro ou falso
console.log("NaN:", Boolean(NaN)); // false

// Verificando se um número diferente de 0 é verdadeiro ou falso
console.log("Number:", Boolean(42)); // true

// Verificando se uma string vazia é verdadeira ou falsa
console.log("String vazia:", Boolean("")); // false

// Verificando se uma string não vazia é verdadeira ou falsa
console.log("String não vazia:", Boolean("Hello")); // true

// Verificando se um objeto é verdadeiro ou falso
console.log("Object:", Boolean({})); // true