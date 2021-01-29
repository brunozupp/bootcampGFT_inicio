// array
var lista = ["maça", "uva", "melancia", "laranja"];

console.log(lista);
console.log(lista[1]);

//Adicionar
lista.push("melão");
console.log(lista);

// Remover o último
lista.pop();
console.log(lista);
console.log("Tamanho da lista = " + lista.length);

// percorre os elementos
lista.forEach(element => {
    console.log(`a fruta é ${element} e tem ${element.length} caracteres`);
});

// inverte a ordem dos elementos
lista.reverse();
console.warn("Revertido");
lista.forEach(element => {
    console.log(`a fruta é ${element} e tem ${element.length} caracteres`);
});

console.warn("Join e Split");

// Junta os elementos de um array de acordo com o que é passado de argumento
var juntar = lista.join(",");
console.log("Juntado = " + juntar);

// Sepera a string de acordo com o separador passado como argumento
var separado = juntar.split(',');
console.log(separado);

// Dicionario
console.warn("---------------------- DICIONARIO ----------------------");

var fruta = {
    nome: "maça",
    cor: "vermelha"
}

console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [
    {
        nome: "maça",
        cor: "vermelho"
    },
    {
        nome: "limão",
        cor: "verde"
    },
    {
        nome: "uva",
        cor: "roxo"
    },
];

console.log(frutas);
console.log(frutas[1]);