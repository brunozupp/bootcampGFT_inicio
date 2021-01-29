// Generators - são funções com pausa e despausa através de iterações

// O * indica uma função generator
function* hello() {
    console.log('Hello');
    yield; // Usado para fazer pausas

    console.log('From');
    yield 2; // posso passar valor, assim o value vai ter essa valor

    console.log('Function');
}

const it = hello();

console.log(it);
console.log(it.next()); // Hello
console.log(it.next()); // From
console.log(it.next()); // Function

// Utiliza a mesma interface do iterador {value, done}

// Pode ser utilizado tbm para construtir iteradores de uma maneira mais simples

console.warn("Passando valor para o yield de fora da função")

// Passando valor - o yield que recebe
// Vai parar e retornar a partir do yield
function* hello2() {
    console.log('Hello');
    yield; // Usado para fazer pausas

    console.log('From');
    // O 2 vai retornar quando From retornar
    const value = yield 2; // posso passar valor, assim o value vai ter essa valor

    console.log(value);
}

const it2 = hello2();

console.log(it2);
console.log(it2.next()); // Hello
console.log(it2.next()); // From
console.log(it2.next('Outside')); // Function

console.warn("Itaradores de números naturais");

function* naturalNumbers() {
    let number = 0;
    while(true) {
        yield number;
        number++;
    }
}

const iterator = naturalNumbers();
for (let index = 0; index < 10; index++) {
    console.log(iterator.next());
}

console.warn("Iteradores de números naturais 2");

// Como é uma outra instância, vai começar do 0
const iterator2 = naturalNumbers();
for (let index = 0; index < 10; index++) {
    console.log(iterator2.next());
}

console.warn("Iterando no objeto");

// Posso usar o generator para construir a interface de iteração dos meus objetos iteraveis
const objeto = {
    values: [1,2,3,4],
    *[Symbol.iterator]() { // fazendo isso, o objeto se torna um objeto iteravel
        for(var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }    
    }
}

for (const iterator of objeto) {
    console.log(iterator);
}

// Posso usar generators como uma forma de produzir iteradores

// Então generators, além de uma função com pausas, eu posso utilizar para produzir 
// meta-propriedades para fazer meu objeto iteravel