console.log("undefined:", Boolean(undefined)); // false

console.log("null:", Boolean(null)); // false

console.log("true:", Boolean(true)); // true

console.log("false:", Boolean(false)); // false

console.log("+0:", Boolean(+0)); // false

console.log("-0:", Boolean(-0)); // false

console.log("NaN:", Boolean(NaN)); // false

console.log("Number:", Boolean(42)); // true

console.log("String vazia:", Boolean("")); // false

console.log("String não vazia:", Boolean("Hello")); // true

console.log("Object:", Boolean({})); // true