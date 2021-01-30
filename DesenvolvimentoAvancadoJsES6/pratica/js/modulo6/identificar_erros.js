// let e const não possui a propriedade de hosts, então preciso sempre inicializar
// elas antes de usar, chamar antes do que for usar

class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}

// O jeito tradicional é utilizar o try/catch
try {

    //const myError = new Error('Custom message');
    const myError = new CustomError({
        message: 'Custom error message',
        data: {
            type: 'Server error'
        }
    });

    throw myError;
    
} catch (error) {
    console.log(error);
    console.log(error.data);
} finally {
    // vai ser executado com ou sem falha
}