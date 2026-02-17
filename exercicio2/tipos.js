
let texto = "oi";
let numero = 123;
let booleano = true;

console.log("texto:", typeof texto);
console.log("numero:", typeof numero);
console.log("booleano:", typeof booleano);

let stringPraNumero = Number(texto);
console.log("String para Número:", stringPraNumero, typeof stringPraNumero);

let numeroPraString = String(numero);
console.log("Número para String:", numeroPraString, typeof numeroPraString);

let numeroPraBoolean = Boolean(numero);
console.log("Número para Boolean:", numeroPraBoolean, typeof numeroPraBoolean);


//==  -> Compara apenas o valor, fazendo conversão automática de tipo.//
//=== -> Compara valor e tipo, sem conversão.//
