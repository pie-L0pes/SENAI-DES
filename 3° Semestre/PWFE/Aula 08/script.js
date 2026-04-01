const key = "18d4c68138a2f6f3a8477710d738d5be";

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    colocarDadosNaTela(dados);
}

function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em"+ dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "umidade:" + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon;
}

function cliqueinoBotao(){
    const cidade = document.querySelector(".input-cidade").ariaValueMax;
    buscarCidade(cidade);
}