// async function obterDados(e){ //async faz esperar vem acompanhado do await
//     const dolar = fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL"); //buscando (fetch) em endereço
//     const dolarJSON = (await dolar).json() //converter objeto p json
//     e.innerHTML = await dolarJSON.USDBRL;
// }

//Versao menor

function obterDados(e){
    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    .then(resp => resp.json()) //apos fazer o fetch, entao(then), transforme em json
    .then(resp =>{
        e.innerHTML = resp.USDBRL.bid
    })
}