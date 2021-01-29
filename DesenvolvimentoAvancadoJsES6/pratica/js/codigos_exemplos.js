var frutas = ['Apple', 'Banana', 'Orange'];

// Do lado esquerdo, não está gerando um array, mas indicando como deve ser feita a divisão
var [apple,banana,orange] = frutas;

console.log(apple,banana,orange);

var cores = ['Azul','Laranja','Vermelho', ['Tomate','Melão']];
var [azul,laranja,vermelho, [tomate, melao]] = cores;
console.log(azul,laranja,vermelho,tomate,melao);

/**
 * Em array multidimensional como o exemplo a cima, se estiver faltando um índice (por exemplo
 * Melão) vai dar um erro de iteração não pode ocorrer em indefinido.
 * Já quando tem apenas de uma dimensão, o valor vai aparecer como undefined, sem erro
 */

var objeto = {
nome: 'Celso',
props: {
    age: 26,
    colors: ['azul','preto']
}
};

// a variável em {  } precisa ter o mesmo nome da propriedade do objeto
var { nome } = objeto;
console.log(nome);

// pegando a propriedade nome e atribuindo o valor na variável nome2
var {nome: nome2} = objeto;
console.log(nome2);

// Pode mudar o valor da variável que não vai ter a mesma referência do objeto que veio

// Objeto dentro de objeto
var { props: { age, colors } } = objeto;
console.log(age, colors);

var { props: { age: age2, colors: colors2 } } = objeto;
console.log(age2);
console.log(colors2);

var arrayFrutas = [{nome: 'Maça', tipo: 'fruta'}];

var [{nome, tipo}] = arrayFrutas;
console.log(nome,tipo)

// functions

console.warn("Jeito 1 de array");


function sum(arr) {

    var [a,b] = arr;

    return a + b;
}

console.log(sum([5,7]));

console.warn("Jeito 2 de array");

function sum2([a,b] = [0,0]) {
    return a + b;
}
console.log(sum2([5,7]));
console.log(sum2());

console.warn("Jeito para objeto");

function sum3({a,b}) {
    return a + b;
}
console.log(sum3({a:4,b:7}));