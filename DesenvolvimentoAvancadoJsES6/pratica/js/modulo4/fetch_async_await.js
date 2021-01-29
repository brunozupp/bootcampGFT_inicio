// fetch trabalha utilizando promises
fetch('https://www.potterapi.com/v1/sortinghat').then(responseStream => { // retorna um stream
    console.log(responseStream);

    // O stream por ter seu processamento assincrono, é preciso utilizar o then para pegar os dados
    responseStream.text().then(data => {
        console.log(data);
    });
});

fetch('https://www.potterapi.com/v1/sortinghat')
.then(responseStream => responseStream.text())
.then(data => {
    console.log(data);
}).catch(error => console.log(error)); // Se houver um erro de rede, o erro será pego no catch

fetch('https://www.potterapi.com/v1/sortinghat')
.then(responseStream => {
    if(responseStream.status === 200) {
        return responseStream.text();
    } else {
        throw new Error('Request Error');
    }
})
.then(data => {
    console.log(data);
}).catch(error => console.log(error));

// fetch('http:...', {
//     method: 'post',
//     body: JSON.stringify({id: 10, content: 'ddd'})
// }).then(responseStream => {
//     if(responseStream.status === 201) {
//         //...
//     }
// });

// ES7 - Async / Await

// async function simpleFunc() {}

const simpleFunc = async () => {
    return 12345;
}

console.log(simpleFunc());

simpleFunc()
.then(data => console.log(data))
.catch(error => console.log(error));

const asyncTimer = () => new Promise((resolved,reject) => {
    setTimeout(() => {
        resolved(12345667899);
    }, 1000);
});

// O await seria um assincrono sequencial

const testAwait = async () => {

    var data = await fetch('https://www.potterapi.com/v1/sortinghat').then(resStream => resStream.text());
    console.log("Chapeu seletor = " + data);
    return await asyncTimer();
}

testAwait().then(data => console.log(data));

const testAwait2 = async () => {
    var data = await Promise.all([
        asyncTimer(), 
        fetch('https://www.potterapi.com/v1/sortinghat').then(resStream => resStream.text())
    ]);
    console.log("Promise com await");
    return data;
}

testAwait2().then(data => console.log(data));