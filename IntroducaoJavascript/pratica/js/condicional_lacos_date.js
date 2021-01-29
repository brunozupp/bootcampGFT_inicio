var idade = 18;

if(idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

//var pergunta = prompt("Qual sua idade?");
//console.log(pergunta);

console.warn("For");

var count = 5;
for (let index = 0; index < count; index++) {
    console.log(index);
}

console.warn("While");

var countWhile = 0;
while(countWhile < 5) {
    console.log(countWhile);
    countWhile++;
}

console.warn("Do While");

var countDoWhile = 0;
do {
    console.log(countDoWhile);
    countDoWhile++;
} while(countDoWhile < 10);

var date = new Date();
console.log(date);
console.log(date.getDate()); // o dia
console.log(date.getHours()); // o horas
console.log(date.getMonth()); // o mês
