let dados = {
    nome : "Letícia de Souza",
    idade : 16,
}
let numeros = {
    x : 24,
    y : 10
}
function print() {
    
    console.log("Meu nome é " + dados.nome + " e eu tenho " +dados.idade 
        +". O resultado da soma é:" + (numeros.x + numeros.y) + 
        ". O resultado da subtração é: " + (numeros.x - numeros.y) + ". O resultado da multiplicação é:" + (numeros.x * numeros.y) + ". O resultado da divisão é:" + (numeros.x / numeros.y) );
    
    console.log(
    `Meu nome é ${dados.nome} e eu tenho ${dados.idade} 
    O resultado da soma é ${(numeros.x + numeros.y)} 
    O resultado da subtração é ${(numeros.x - numeros.y)}  
    O resultado da multiplicação é ${(numeros.x * numeros.y)}  
    O resultado da divisão é ${(numeros.x / numeros.y)}`);
    


}
print()