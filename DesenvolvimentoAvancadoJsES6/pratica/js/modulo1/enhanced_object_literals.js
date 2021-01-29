var idade = 56;

var valorNovoJeito = 'Novo jeito';

function metodoSimplificado() {
    return 14;
}

var propName = 'test';

var objTradicional = {
    prop1: 'Digital Innovation One',
    idade: idade,
    valorNovoJeito,
    metodoSimplificado,
    sum: function sum(a,b) {
        return a + b;
    },
    mult(a,b) {
        return a * b;
    },
    [propName + 'concat']: 'testando concatenação na chave',
};

objTradicional[propName] = 'Prop Name';

console.log(objTradicional);
console.log(objTradicional.metodoSimplificado());
console.log(objTradicional.sum(2,6));
console.log(objTradicional.mult(2,6));

var obj = {
    sleep: function() {
      setTimeout(() => {
        console.log(this);
      }, 1000);
    }
  }
  
  obj.sleep();