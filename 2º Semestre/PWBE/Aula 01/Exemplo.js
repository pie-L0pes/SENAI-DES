// var - escopo global
// let - escopo local
// const -  escopo global e o valor nâo altera
/* Iguadade ==
   Estritamente diferente !==
   Diferente !==
   Estritamente ===
   Maior >
   Menor <
   Maior igual >=
   Menor igual <=
   */


var numero = "Pietra";
var idade = 50.5; 
var habilitado = true;
var nascimentos = 1875;

console.log (habilitado);//Imprime no terminal

console.log(typeof(habilitado));



var a = "10";
var b = 10;

console.log(a + b);

if(a === b){
    console.log ("São iguais");
}{
    console.log("Sao diferentes");
}

switch(b){
    case 1:
         break;
    
    case 2:
        break;
}

for (let i =0; i<10; i++){


}

while (a <10) {
    if ( a== 5) {
        break;
    }
}

do{

}while (a<10);