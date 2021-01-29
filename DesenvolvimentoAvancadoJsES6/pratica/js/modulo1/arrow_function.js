// Tradicional
function logTradicional(value) {
    console.log(value);
}

// Função anonima
var logAnonima = function(value) {
    console.log(value);
}

var somaAnonima = function(a,b) {
    return a + b;
}

logTradicional("Oiiiii");

logAnonima("Brasilllll");

console.log(somaAnonima(1,2));

// Arrow functions são funções anônimas, então só podem ser utilizadas 
// passando como paramêtro para uma outra função ou atribuindo a uma variável

var somaArrow = (a, b) => a + b;
console.log(somaArrow(10,15));

// Tudo que não for uma expressão: térnario, operadores lógicas, que são invocadas e já retornam algo
// eu coloco {}
var somaArrow2 = (a, b) => {
    var mult = 2;
    return mult * (a + b);
};
console.log(somaArrow2(10,15));

// Se eu tiver apenas um argumento na arrow function eu posso omitir os parenteses
var resultadoUmArgumento = a => 2 * a;
console.log(resultadoUmArgumento(10));

// Para fazer um destructuring é preciso colocar o () mesmo se tiver só um argumento
// para um rest operator tbm é preciso
// para default values tbm é preciso colocar
var destructuringExamplo = ({ a }) => a;
var restOperator = (...a) => a;
var defaultValue = (a = 5) => a;

// Objeto litaral
var objetoLiteral = {

}

// retorno de objetos literais é preciso usar o ()
var createObj = () => ({ id: 10, nome: "Bruno" });
console.log(createObj());

// Outra forma de consumir objetos em javascript é atravês de funções construtoras
function Car() {
    this.foo = 'bar'
}

console.log(new Car());

// Mas não posso fazer o mesmo acima utilizando arrow functions
// var Car2 = () => {
//     this.foo = 'suco de uva';
// }
// console.log(new Car2());

// Em funções tradicionais eu consigo invocar o método antes de sua escrita
tradicionalChamada("oidd");
function tradicionalChamada(value) {
    console.log(value);
}

// Em arrow functions eu PRECISO invocar o método depois da escrita. Caso não faça vai dar erro
// arrowChamada("oiddaa");
// var arrowChamada = (a) => console.log(a);

var obj = {
    showContext: function showContext() {
        console.log(this); 
        /** 
         * Uma referência ao próprio objeto, pq as funções no js tem uma coisa chamada
         * contexto de invocação, então elas são executas no contexto de onde são executadas
         * */
        this.log("This é muito estranho");

        setTimeout(function() {
            // Vai dar erro sem o bind
            this.log("Depois de 1 segundo");
        }.bind(this), 1000);
        // O bind permite que fixe o contexto da função (do objeto nesse caso), assim não var dar erro
    },
    log: function log(value) {
        console.log(value);
    }
};

// O this do método vai apontar para o obj (olhar para o lado esquerdo)
obj.showContext();

// Para resolver o problema do this do objeto acima, sem utilizar o bind
var objArrowFunction = {
    showContext: function showContext() {
        this.log("This é muito estranho. Dentro da função arrow function agora");
        /**
         * funciona sem o bind pq as arrow functions tem uma propriedade que é
         * de ter um contexto igual do código que envolve ele
         */
        setTimeout(() => {
            this.log("Depois de 1 segundo. Dentro da função arrow function agora");
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

objArrowFunction.showContext();