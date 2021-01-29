function soma(n1,n2) {
    return n1 + n2;
}

console.log(soma(5,10));

// Isso informa a IDE sobre o tipo dos parametros
// https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler
/**
 * @param {string} frase
 * @param {string} nome
 * @param {string} novoNome
 */
function setReplace(frase, nome, novoNome) {
    return frase.replace(nome, novoNome);
}

console.log(setReplace("Meu nome é bruno", "bruno", "carlos"));

/**
 *  @param {number} idade
 */
function validaIdade(idade) {
    if(idade >= 18) {
        return true;
    }

    return false;
}

console.log(validaIdade(15));
console.log(validaIdade(18));