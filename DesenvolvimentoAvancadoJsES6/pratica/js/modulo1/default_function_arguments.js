// Quando não passa o valor do argumento de uma função na sua chamada, o valor fica Undefined
function multiplyComoEraResolvidoAntes(a, b) {
    
    // Mas se for passado o valor 0, vai colocar o 1 pq ele muda para false nessa validação
    //b = b || 1; // Se for um valor verdadeira/válido, coloca o valor 1
    
    // Mesmo se for 0, vai ser um valor válido, pq não é undefined
    b = typeof b === 'undefined' ? 1 : b;
   
    return a * b;
}
console.log(multiplyComoEraResolvidoAntes(5));
console.log(multiplyComoEraResolvidoAntes(5, 0));

console.warn("Como é feito agora com valor default");

function multiplyAtibuirValorPadrao(a = 2, b = 1) {
    return a * b;
}
console.log(multiplyAtibuirValorPadrao(5));
console.log(multiplyAtibuirValorPadrao(5, 0));
console.log(multiplyAtibuirValorPadrao(undefined, 6));

// A ordem aqui importa, sempre que for referenciar uma variável como padrão, precisa ter
// ela antes, não pode fazer (b = a, a = 2). Ia dar um erro de referência, por não ter inicializado
// a variável 'a' ainda
function multiplyAtibuirValorPadraoSendoOutraVariavel(a = 2, b = a) {
    return a * b;
}
console.log(multiplyAtibuirValorPadraoSendoOutraVariavel());

// lazy evaluation
var randomNumber = () => Math.random() * 10;

// Toda vez que deixa de passar o parametro b, vai executar a função randomNumber
function lazyEvaluation(a, b = randomNumber()) {
    return a * b;
}
console.log(lazyEvaluation(5));
