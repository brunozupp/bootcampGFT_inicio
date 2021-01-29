// Event Emitter é algo exclusivo do node

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

// Nesse caso vai logar os dois usuário: Bruno Noveli e Bruno Zupp
users.on('User logged', data => {
    console.log(data);
});

// Para consumir apenas uma vez, tem o método chamado once
// Nesse caso vai logar apenas Bruno Noveli
users.once('User logged', data => {
    console.log(data);
});

users.userLogged({user: "Bruno Noveli"});
users.userLogged({user: "Bruno Zupp"});

// Algo parecido com o EventEmmiter é o EventTarget (do browser)