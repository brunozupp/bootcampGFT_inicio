O que é o Node?
R: É um interpretador Js que não depende do navegador, ou seja, 
ele é totalemnte desvinculado do navegador

# Testes

## Testes automatizados

* Testes unitários -> testar a menor unidade do código;
* Testes integrados -> testam a integração entre as pequenas partes testadas anteriormente;
* Testes funcionais -> testes End To End, vai testar a integração do sistema com outros sistemas.

Começa com os unitários por ser os menos custosos, depois os integrados e por último os funcionais.

## Testes manuais e automatizados

* Testes usabilidade;
* Testes de aceitação do usuário;
* Protótipos;
* Testes funcionais;
* Exemplos;
* Alpha e beta;
* Mais...

## Ferramentas de teste

* Teste de carga;
* Testes de segurança;
* Mais...

# TDD (Test Driven Development)

É um dos pilares do Extreme Programming, consiste em testar e refatorar em pequenos ciclos,
onde você escreve o teste antes do código, faz o mesmo passar e refatora o código.

Escrita do teste -> Escrita do código -> Refatoração

### Vantagens

* Feedback rápido;
* Maior segurança em alterações e novas funcionalidades;
* Código mais limpo;
* Produtividade.

# BDD (Behavior Driven Development)

Técnica de desenvolvimento ágil que visa integrar regras de negócio com linguagens de programação.

## Pilares
* Testes;
* Documentação;
* Exemplos.

### Vantagens

* Compartilhamento de conhecimento;
* Documentação dinâmica;
* Visão do todo.

# Mocha
Mocha é uma ferramenta para executar os testes. Conhecido tbm como test runner.
Segue os padrões do BDD para escrever os testes de uma maneira expressiva dizendo
qual funcionalidade de negócio eu quero representar com o devido teste.

Para iniciar o projeto: npm init -y

Para instalar o mocha: npm i --save-dev mocha

O mocha, por padrão, vai buscar arquivos que estiverem na raiz do meu projeto num diretório chamado
teste

Para testar: npm run test

O tempo máximo que um teste tem para demorar são dois segundos. Para isso eu preciso
utilizar function normal e não arrow function lá no it do describe, pq eu consigo
acessar a função this.timeout(valor de espera) onde eu defino um tempo maior

Para instalar o chai: npm i --save-dev chai

Para instalar o sinon: npm i --save-dev sinon