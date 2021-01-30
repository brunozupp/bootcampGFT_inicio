/**
 * O browser funciona pelo protocolo http;
 * O protocolo http pode estar na versão 1 ou 2. Diferem na performance e em como os dados são
 * tranferidos;
 * O conteúdo é o mesmo
 * Mandamos metadados sobre o navegador que estamos utilizando
 * Através da aba é possível acompanhar a quantidade de requests. A quantidade de Kb transferida,
 * o tempo que demorou para fazer a requisição
 */



let contador = 0;

document.getElementById("contador").innerText = `Contador: ${contador}`;

document.getElementById("adicionar").onclick = function() {
    contador++;
    //debugger;
    document.getElementById("contador").innerText = `Contador: ${contador}`;
}

document.getElementById("subtrair").onclick = function() {
    contador--;

    // Vai trazer informações de onde o código foi executado
    console.trace();

    // Agrupando mensagens do console
    console.group("NomeGrupo");
    console.log("Log1");
    console.log("Log2");
    console.warn("Log3");
    console.groupEnd("NomeGrupo");

    // Verifica o quanto de tempo demora a execução desse bloco de código
    console.time('Log time');
    setTimeout(() => {
        console.timeEnd('Log time');
    }, 1000);

    console.table(['Bruno Noveli', 'Maça de pera']);

    console.assert(1 === 1, 'Oops');
    console.assert(1 !== 1, 'Oops');

    // Estilizar o console.log
    console.log("%c styled log", 'color: blue; font-size: 40px');

    document.getElementById("contador").innerText = `Contador: ${contador}`;
}