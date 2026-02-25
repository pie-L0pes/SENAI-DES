function reajustar(){
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if (preco > 2500){
        desconto = preco * (15 / 100);
    }
    else if(preco > 2000){
        desconto = preco * (10 / 100);
    }
    else if(preco > 1000){
        desconto = preco * (8 / 100);
    }
    
    let final = preco - desconto;
    
    resultado.innerHTML =
        `Desconto de R$ ${desconto.toFixed(2)} <br> Preço final R$ ${final.toFixed(2)}`;
}

document.getElementById('preco').addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        reajustar();
    }
});