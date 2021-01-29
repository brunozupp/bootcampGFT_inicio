//Como era feito antes - callbacks
function doSomething(callback) {
    setTimeout(function() {

        callback("FirstData");
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {

        callback("Second Data");
    }, 1000);
}

function doAll() {

    try {
        doSomething(function(data) {
            var processedData = data.split('');
    
            try {
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('');

                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (error) {
                        // handle error
                    }
                });
            } catch (error) {
                // handle error
            }
        });
    } catch (error) {
        // handle error
    }
}

//doAll();

// Como é feito agora - Promise
console.warn("Usando Promise")

//Como era feito antes
const doSomethingPromise = new Promise((resolved, reject) => {

    //throw new Error("Something went wrong");

    setTimeout(function() {
        resolved('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolved, reject) => {

    //throw new Error('Ooopsss');

    setTimeout(function() {
        resolved('Second data');
    }, 1000);
});

/**
 * Uma promise pode ter 3 estados:
 * Pending
 * Fulfilled
 * Rejected
 */

 doSomethingPromise
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Promise encadeada
doSomethingPromise
    .then(data => doOtherThingPromise)
    .then(data2 => console.log(data2))
    .catch(error => console.log(error));

doSomethingPromise
    .then(data => {
        console.log(data);
        return doOtherThingPromise;
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log(error));

// Promise vindo de uma função. Aí para passar ela tem que ser promiseDeFuncao()
const promiseDeFuncao = () => new Promise((resolved,reject) => {
    setTimeout(function() {
        resolved('Promise pela função');
    }, 1000);
});

doSomethingPromise
    .then(data => {
        console.log(data + " dentro da função");
        return promiseDeFuncao();
    })
    .then(data2 => console.log(data2 + " dentro da função"))
    .catch(error => console.log(error)); // O catch serve para todas as promises

const encadeadaPromise1 = new Promise((resolved, reject) => {
    setTimeout(function() {
        resolved('Encadeada 1');
    }, 1500);
});

const encadeadaPromise2 = new Promise((resolved, reject) => {
    setTimeout(function() {
        resolved('Encadeada 2');
    }, 1000);
});

// Executa todas as promises dentro do array, executa as duas ao mesmo tempo, em paralelo
// E não uma após a outra
Promise.all([encadeadaPromise1, encadeadaPromise2]).then((data) => {
    console.warn("Promise.all");
    console.log(data); // Um array contendo os dois valores
}).catch(error => console.log(error));

// A que resolver primeiro vai ser executada (apenas uma vai ser executada)
Promise.race([encadeadaPromise1, encadeadaPromise2]).then((data) => {
    console.warn("Promise.race");
    console.log(data); // Um array contendo os dois valores
}).catch(error => console.log(error));