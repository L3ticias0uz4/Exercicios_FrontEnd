let pessoa = {
    nome : "Letícia de Souza",
    idade: 16,
    profissao: "jogadora de vôlei",
    apresentar: function () {
        console.log("Olá, meu nome é " + this.nome + " eu tenho " + this.idade + " anos e eu sou "+ this.profissao );
}
}
        pessoa.apresentar();


let carro = {
    marca : "Dodge Charger",
    modelo: "R/T preto",
    ano: 1970,
    ligar: function(){
        console.log("Carro ligou");
}
}
        carro.ligar();
        

let Produtos = { 
    loja : {
        Nome: "Burguer King",
        produtos :['Whopper' ,'Whopper Jr.','Whooper Rodeio duplo','Whopper Bacon','Whopper Chicken' ]
}
}
    console.log(Object.entries(Produtos.loja.produtos));