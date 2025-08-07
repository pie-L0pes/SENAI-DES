// const numeros = [1, 2, 3, 4, 5];

// for(let i = 0; i<numeros.length; i++){
//     console.log("[" + i + "] -> " +  numeros[i]);
// }


// function soma(a, b){
//     //return a + b;
//     console.log (a + b);
// }

// //console.log(soma(2, 3));
// soma (5, 5);

//Outra forma de criar uma função
// const soma = (a, b) => {
//     console.log (a + b);
// }

// soma (3, 3);

const numeros = [1, 2, 3, 4, 5];
const marcas = ["Nike", "Adidas", "Pandora"];
const usuarios = [
    {
        "nome": "Fulano",
        "sobrenome": "de Carvalho",
        "matricula": "1234",
        "telefone": "(12) 99981-6334"
    },
    {
        "nome": "Beltrana",
        "sobrenome": "da Silva",
        "matricula": "45678",
        "telefone": "(12) 9874-0987"
    }

];

usuarios.forEach((usuario)=> {
        if(usuario.matricula === "45678"){
            console.log(usuario.nome + " " + usuario.sobrenome);
            console.log(usuario.telefone); 
        }
    }
);

// const carro = {
//     "ano": 2000,
//     "cor": "vermelho",
//     "modelo": "Uno",
//     "marca": "Fiat",
//     "escada": true,
//     "placa": "abc1234"
// }
// console.log(carro.placa);

