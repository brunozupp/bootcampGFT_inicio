
const dino = document.querySelector(".dino");
const background = document.querySelector(".background");

// Posição inicial do dinossauro
let position = 0;

let isJumping = false;

/**
 * @param {KeyboardEvent} event 
 */
function handleKeyUp(event) {
    //console.log(event);
    if(event.code !== undefined && event.code === "Space") {

        if(!isJumping) jump();
    } else if(event.keyCode !== undefined && event.code === 32) {
        // Caso algum browser não tenha implementado o event.code ainda
        // ou a versão dele não tenha a implementação, usa o event.keyCode
        if(!isJumping) jump();
    }
}

function jump() {
    
    isJumping = true;

    // Ser executada em um determinado ciclo de tempo, repetição
    let upInterval = setInterval(() => {

        if(position >= 150) {
            clearInterval(upInterval);

            // descendo
            let downInterval = setInterval(() => {
                if(position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            // subindo
            position += 20
            dino.style.bottom = position + 'px';
        }

        
    }, 20);

}

function createCactus() {

    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    
    // Aleatoriedade para gerar o novo cactus
    let randomTime = Math.random() * 6000;
    
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + "px";
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {

        // -60 tem a ver com a largura dele, se for -60 quer dizer que saiu todo da tela
        if(cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(
            cactusPosition > 0 && 
            cactusPosition < 60 &&
            position < 60
        ) { // não saiu da tela, mas está no espaço do dinossauro
            
            // Game over
            clearInterval(leftInterval);

            document.body.innerHTML = `<h1 class="game-over">Fim de jogo</h1>`

        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    // Execute uma determinda função depois de um determinado tempo
    setTimeout(createCactus, randomTime);

}

// Já chamar os cactus assim que abrir
createCactus();

// Para pular, eu preciso interceptar o pressionamento de teclas
document.addEventListener('keyup', handleKeyUp);