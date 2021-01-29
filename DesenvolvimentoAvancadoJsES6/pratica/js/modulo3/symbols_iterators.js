/**
 * Antes da introdução do symbols, existia 6 tipos no js
 * Symbols são maneiras de gerar um identificador único
 **/ 

// Não pode invoca-lo usando new, tem que ser igual uma função
// O valor do symbol não é letra, número. Ele só é um identificador único que não
// pode ser descrito e nem adivinhado
const uniqueId = Symbol();
console.log(uniqueId);

// Pode passar valor dentro do symbol, mas serve exclusivamente para debug. Não está ligado ao seu valor
const uniqueIdComValorDebug = Symbol('Hello');
console.log(uniqueIdComValorDebug);

const uniqueIdComValorDebug2 = Symbol('Hello');
console.log(uniqueIdComValorDebug == uniqueIdComValorDebug2); // false

// Pode ser usado para gerar propriedades privadas de certa forma, não quer dizer
// que ela é inacessível, mas é uma forma de dizer pro dev e evitar que ela seja
// acessada sem querer
const obj = {
    [uniqueId] : 'Hello',
    [uniqueIdComValorDebug] : 'Hello 2'
}
console.log(obj);

// Mesmo se eu usar a função Object.keys(obj), não vai vir nenhuma chave
console.log(Object.keys(obj));

// Mas posso usar a função a seguir para pegar as chaves com symbols
console.log(Object.getOwnPropertySymbols(obj));

/**
 * Usando o symbol para declarar o nome de uma propriedade dentro do objeto, meio
 * que está falando para o desenvolvedor que ele não deve mexer nela
 */

// Well Known Symbols - propriedades do Symbol (algumas delas:)
// Symbol.iterator
// Symbol.toStringTag
// Symbol.split

// Fez utilizando o symbol pois evita colisão de nomes de propriedades

const arr = [1,2,3,4];

// Fazendo isso vou gerar uma interface que vai ser responsável pela iteração no array
const it = arr[Symbol.iterator]();

// O iterator é uma interface para eu consumir passo a passo uma estrutura de dados iteravel

console.log(it.next()); // {value: 1, done: false}
console.log(it.next()); // {value: 2, done: false}
console.log(it.next()); // {value: 3, done: false}
console.log(it.next()); // {value: 4, done: false}
console.log(it.next()); // {value: undefined, done: true}

console.warn("Iterando com o symbol usando while");

const it2 = arr[Symbol.iterator]();
while(true) {

    let { value, done } = it2.next();

    console.log(value);

    if(done) break;
}

console.warn("Iterando com es6 - array");
// Com o ES6 -> não pega o undefined
for (const iterator of arr) { // usando o iterator ali de cima por cima dos pano
    console.log(iterator);
}

console.warn("Iterando com es6 - string");
// Os tipos de dados que possuem iteradores, que possuem uma propriedade usando o Symbol.iterator
// eu consigo utilizar o for of e o spread operator
// Itera por cada caractere da string
const str = "Digital Innovation One";
for (let value of str) {
    console.log(value);
}

console.warn("Iterando com es6 - objeto");

// Com isso se torna iteravel e pode fazer spread
const objeto = {
    values: [1,2,3,4],
    [Symbol.iterator]() { // fazendo isso, o objeto se torna um objeto iteravel
        let i = 0; // indice

        return {
            next: () => { // arrow function para acessar o this
                
                i++;
                
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

const itObjeto = objeto[Symbol.iterator]();
console.log(itObjeto.next());
console.log(itObjeto.next());
console.log(itObjeto.next());
console.log(itObjeto.next());
console.log(itObjeto.next());

console.warn("Iterando com es6 - objeto for of");
for (const iterator of objeto) {
    console.log(iterator);
}

const arrayDeObjetoIteravel = [...objeto];
console.warn("Spread do objeto depois de usar symbol");
console.log(arrayDeObjetoIteravel);


