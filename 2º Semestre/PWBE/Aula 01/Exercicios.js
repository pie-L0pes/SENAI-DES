// Ex 1

var nome = "Pietra";

console.log ("Olá", nome);

// EX 2
console.log("-----------------------------");
var a = 10;
var b = 8;

console.log ( a + b);
console.log ( a - b);
console.log ( a * b);
console.log ( a / b);

// EX 3
console.log("-----------------------------");
var altura = 3;
var largura = 7;
var area = largura * altura;

console.log("A área do retângulo é :", area );


// EX 4
console.log("-----------------------------");
var nascimento = 2009;
var idade = 2025 - nascimento;

if(idade >= 18){
    console.log ("Você é maor de idade");
}else {
    console.log("Você é menor de idade");
}


// EX 5
console.log("-----------------------------");
var numero = 6;

if(numero % 2 == 0) {
    console.log("é par !")
}else {
    console.log("é impar!")
}

// EX 6
console.log("-----------------------------");
var n1 = 7;
var n2 = 4;
var n3 = 10;

var media = (n1 + n2 + n3) / 3

if (media <= 9){
    console.log ("A");
}else if (media <=7){
    ("B");
}else if(media<=5){
    ("C");
}else {
    ("Reprvado!!");
}


// EX 7
console.log("-----------------------------");
for(let i = 1; i<=200; i++ ){
    if(i % 2 == 0){
        console.log(i );
    }
}


// EX 8
console.log("-----------------------------");

var i = 0;
var res = 1;

for( i=10; i > 0; i--){
    res = res * i;
    console.log(res);
}

// EX 9
console.log("-----------------------------");

for (let i = 0; i<=1000; i += 3){
    console.log(i);
}

console.log("-----------------------------");
