// rest
/**
 * @param  {...number} values 
 */
function sum(...values) {
    let somador = 0;

    values.forEach(element => {
        somador += element;
    });

    return somador;
}

console.log(sum(1,2,3,4,5,6));

// Antigamente pegava os argumentos com o arguments
function sumAntigo() {

    let somador = 0;
    
    for (let index = 0; index < arguments.length; index++) {
        somador += arguments[index];
    }

    return somador;
}

console.log(sumAntigo(1,2,3,4,5,6));

/**
 * O rest funciona de maneira similar ao arguments, a diferença é que ele é do tipo
 * array. Do arguments o tipo é Object. Então o rest já trás todos os beneficios de array
 * (métodos) para manipular os valores
 */

 function sumComReduce(...args) {
     // o número 0 é o valor inicial
     return args.reduce((previousValue,currentValue) => previousValue + currentValue, 0);
 }

 console.log(sumComReduce(1,2,3,4,5,6));

 // O arguments não existe dentro de uma arrow function. Para isso é usado o rest operator

 const maisParametro = (a,b,...values) => {
     // Para passar para uma outra função tem que colocar o ... (spread operator)
     console.log(`O 'a' = ${a}\nO b = ${b}\nValues somado = ${sumComReduce(...values)}`);
 }

 maisParametro(7,8,6,5,4,1,2,3);

 // Vai acumulando em previousValue
const multiply = (...args) => args.reduce((previousValue,currentValue) => previousValue * currentValue, 1);

console.log(multiply(2,5,5,10));

// o rest operator pega todos os argumentos da função e transforma em array

/**
 * o spread operator vai pegar todos os itens do array e vai tranformar em parametros
 * para a determinada função. Função maisParametro tem o exemplo de spread operator.
 * Mas o spread operator não se limita a lista. Pode ser utiliza em strings, arrays,
 * em objetos para construir outros objetos literais e por fim em objetos iteraveis
 **/

const str = 'Digital Innovation One'; // string é um objeto iteravel

function logArgs(...args) {
    console.log(args);
}

logArgs(...str); // quando passada uma string desse jeito, vai quebrar a string
// por caractere

// Nativamente, strings e arrays são iteraveis

const arr = [1,2,3,4];
logArgs(...arr); // cada item do array vai virar um argumento da função

// spread operator pode ser usado para construir arrays

//const arr2 = [5,6,7].concat(arr);
const arr2 = [...arr,5,6,7] // o spread operator vai transformar os itens do primeiro array em itens para o segundo array

console.log(arr2);

const arr3 = [...arr2, ...arr, 78,96,58];
console.log(arr3);

// Trabalhando com objetos literais. Para construir eles
const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};

console.log(obj2);

// Não vai funcionar pq objetos literais não são objetos iteraveis
//const arrayObjeto = [...obj];
//console.log(arrayObjeto);

// Vai sobrescrever a propriedade test o objeto com spread para o valor 987
const objetoComMesmaPropriedadeSobrescrever = {
    ...obj,
    test: 987
};

console.log(objetoComMesmaPropriedadeSobrescrever);

const objetoQueNaoVaiSobrescrever = {
    test: 987,
    ...obj,
};

console.log(objetoQueNaoVaiSobrescrever);

// Mudar propriedade por conta de referência
const objeto1 = {
    test: 123,
    subObj: {
        test: 123
    }
};

const objeto2 = objeto1; // shallow clone / clone raso
objeto2.subObj.test = 963;

// Vai ser 963 por conta que está apontando para a referência
console.log(objeto1);

// Dessa forma não vai alterar o valor das outras variáveis quando eu mudar essa
const objeto3 = {...objeto1, subObj: {...objeto1.subObj}};
objeto3.subObj.test = 55555555;

console.log('Objeto 1 mudado pelo objeto 3? = ' + objeto1.subObj.test);
