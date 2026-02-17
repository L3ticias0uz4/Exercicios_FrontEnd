
let texto = "oi";
let numero = 123;
let booleano = true;

console.log("texto:", typeof texto);
console.log("numero:", typeof numero);
console.log("booleano:", typeof booleano);

let stringParaNumero = Number(texto);
console.log("String para Número:", stringParaNumero, typeof stringParaNumero);

let numeroParaString = String(numero);
console.log("Número para String:", numeroParaString, typeof numeroParaString);

let numeroParaBoolean = Boolean(numero);
console.log("Número para Boolean:", numeroParaBoolean, typeof numeroParaBoolean);


//==  -> Compara apenas o valor, fazendo conversão automática de tipo.//
//=== -> Compara valor e tipo, sem conversão.//
