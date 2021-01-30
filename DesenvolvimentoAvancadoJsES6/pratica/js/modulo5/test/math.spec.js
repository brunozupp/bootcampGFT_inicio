// Usando Mocha

const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function() { // para descrever os testes use o describe
   
   // hooks -> executar código e evitar repetição

   // Antes de cada função ser testada/executa, vai passar por esse beforeEach.
   // Então se tivesse sendo atribuido algum valor para value nos testes, sempre iria
   // começar valendo 0
   beforeEach(function() {
        value = 0;
   });
   
    it('Sum two numbers', function() { // usa o it para descrever um comportamente esperado da classe
        const math = new Math();
        
        // Caso não bata os valores, vai disparar o erro automaticamente
        assert.strictEqual(math.sum(5,5), 10);
   });

   // Uma vez que injetou o parametro done, ele vai esperar o parametro done ser invocado
   // e depois disso ele vai considerar o teste finalizado.
   // Como é uma função assincrona é preciso fazer isso
   it.skip('Sum two numbers with callback function', function(done) { // usa o it para descrever um comportamente esperado da classe
        const math = new Math();

        // Só consigo pegar essa função pq estou usando a função normal que dá
        // acesso ao this do it. Se usar a arrow function ali no done, vou pegar
        // o this do describe.
        this.timeout(3000);

        math.sumWithCallback(5,5, (value) => {
            // Caso não bata os valores, vai disparar o erro automaticamente
            assert.strictEqual(value, 10);
            done();
        });
    });

    // Aparece teste pendente
    it("Multiply two numbers");

    // Quando quero executar apenas um teste nesse grupo, eu coloco o .only
    // Ignora todos os outros testes e executa só esse
    // it.only()
    it('Multiply two numbers - it has implementaion', function() {
        const math = new Math();

        assert.strictEqual(math.multiply(2,3), 6);
    });

    it.skip('Multiply two numbers - skip', function() {
        const math = new Math();

        assert.strictEqual(math.multiply(2,3), 6);
    });

    it('Multiply two numbers - skip', function() {
        const math = new Math();

        assert.strictEqual(math.multiply(2,3), 6);
    });

    // CHAI ------------------------------------------------------------------

    it('Sum two numbers - using chai', function() { // usa o it para descrever um comportamente esperado da classe
        const math = new Math();
        
        // Usando o CHAI
        expect(math.sum(5,5)).to.equal(10);
   });

   it('Validando se o objeto possui a propriedade nome - using chai', function() { // usa o it para descrever um comportamente esperado da classe
    
        const obj = {
            name: 'Bruno Noveli'
        };

        // Usando o CHAI
        expect(obj).to.have.property('name');
    });

    it("Validando se o objeto possui o valor 'Bruno Noveli' na propriedade nome - using chai", function() { // usa o it para descrever um comportamente esperado da classe
    
        const obj = {
            name: 'Bruno Noveli'
        };

        // Usando o CHAI
        expect(obj).to.have.property('name').equal("Bruno Noveli");
    });

    it("Validando se possui o valor 'Bruno Noveli' em ambos objetos - using chai", function() { // usa o it para descrever um comportamente esperado da classe
    
        const obj1 = {
            name: 'Bruno Noveli'
        };

        const obj2 = {
            name: 'Bruno Noveli'
        };

        // Usando o CHAI
        // Para validar se os objetos são iguais referentes aos seus valores é preciso usar o
        // deep. Se usar o normal, sem o deep, vai comparar por referência o que vai gerar erro
        expect(obj1).to.deep.equal(obj2);
    });

    // Utilizando o sinon, podemos mockar funções e verificar se elas foram invocadas

    it('Calls request with sum and index values', function() {
        const request = {};
        const response = {
            load: sinon.spy()
        };

        const math = new Math();

        math.printSum(request, response, 5, 5);

        // Criou uma função espiã que vai trazer informações se ela foi ou não executada
        expect(response.load.calledOnce).to.be.true;
    });

    it('Calls request with sum and index values - verify index value from return', function() {
        const request = {};
        const response = {
            load: sinon.spy()
        };

        const math = new Math();

        math.printSum(request, response, 5, 5);

        // Criou uma função espiã que vai trazer informações se ela foi ou não executada
        expect(response.load.args[0][0]).to.equal('index');
        //expect(response.load.args[0][1]).to.equal(10);
    });

    it('Verifica se uma função nativa foi chamada - sinon', function() {
        const request = {};
        const response = {
            load: function load() {
                console.log("Called");
            }
        };

        // Verifica o objeto response se o metodo 'load' dele foi chamado
        sinon.spy(response, 'load');

        const math = new Math();

        math.printSum(request, response, 5, 5);

        // Criou uma função espiã que vai trazer informações se ela foi ou não executada
        expect(response.load.args[0][0]).to.equal('index');
        //expect(response.load.args[0][1]).to.equal(10);
    });

    it.only('Verifica se uma função nativa foi chamada - sinon.stub', function() {
        const request = {};
        const response = {
            load: function load() {
                console.log("Called");
            }
        };

        // Verifica o objeto response se o metodo 'load' dele foi chamado
        // Substitui o método
        sinon.stub(response, 'load').returns("Novo retorno para a função");

        const math = new Math();

        math.printStub(request, response, 5, 5);

        //response.restore(); // Retorna o método ao normal

        // Criou uma função espiã que vai trazer informações se ela foi ou não executada
        expect(response.load.args[0][0]).to.equal('index');
        //expect(response.load.args[0][1]).to.equal(10);
    });
});