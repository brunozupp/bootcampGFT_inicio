// arquivo .js destinado a execução de código atual

function botao() {
    
    document.getElementById("agradecimento").textContent = "Obrigado por clicar";
    document.getElementById("voltesempre").innerHTML = "<b>Volte sempre</b>"; // reconhece a tag html
    document.getElementById("voltesempre2").innerText = "<b>Volte sempre 2</b>"; // não reconhece a tag html
}

function redirecionarGlobo() {
    // A diferença dos dois é que o open abre uma nova janela e o location.href substitui a atual pela nova página passada
    window.open("https://www.globo.com/");
    //window.location.href = "https://www.globo.com/";
}

var mouseovertitle = document.getElementById("mouseovertitle");

mouseovertitle.onmouseover = function() {
    mouseovertitle.style.color = "#FF22FF";
}

mouseovertitle.onmouseout = function() {
    mouseovertitle.style.color = "#FF0000";
}

/**
 * @param {HTMLElement} value
 */
function subtitulomouseover(value) {
    value.style.color = "#AAA";
}

/**
 * @param {HTMLElement} value
 */
function subtitulomouseout(value) {
    value.style.color = "#CAB";
}

function load() {
    console.log("Página carregada");
}

/**
 * @param {HTMLElement} input
 */
function digitando(input) {
    document.getElementById("digitado").innerText = input.value;
}

function funcaoChange(input) {
    document.getElementById("fruta").innerText = input.value;
}