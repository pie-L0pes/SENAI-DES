function bonus(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;

    if (salario > 2000){
        bonus = 2000 * (10/100);
    }

    let final = salario + bonus;

   resultado.innerHTML =
   `Bônus de R$ ${bonus.toFixed(2)} <br> Salário final R$ ${final.toFixed(2)}`;
}

function frete(){
    let compra = Number(document.getElementById('compra').value);
    let resultado = document.getElementById('resultado');
    let frete = 0;

    if(compra >= 150){
        frete = 0;
    }
    else{
        frete = 20;
    }

    let final = compra + frete;

    resultado.innerHTML =
        `Frete de R$ ${frete.toFixed(2)} <br> Valor total da compra de R$ ${final.toFixed(2)}`
}

function desconto(){
    let abastecimento = Number(document.getElementById('abastecimento').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if(abastecimento > 200){
        desconto = abastecimento * (5/100);
    }

    let final = abastecimento - desconto;

    resultado.innerHTML = 
        `Desconto de R$ ${desconto.toFixed(2)} <br> Valor final de R$ ${final.toFixed(2)}`
}

function taxa(){
    let conta = Number(document.getElementById('conta').value);
    let resultado = document.getElementById('resultado');
    let taxa = 0;

    if(conta > 100){
        taxa = conta * (10/100);
    }
    
    let final = conta + taxa;

    resultado.innerHTML = 
        `Taxa no valor de R$ ${taxa.toFixed(2)} <br> Valor final da conta de R$ ${final.toFixed(2)}`;
}

function atraso(){
    let mensalidade = Number(document.getElementById('mensalidade').value);
    let atraso = Number(document.getElementById('atraso').value);
    let resultado = document.getElementById('resultado');
    let multa = 0;

    if (atraso > 0){
        multa = mensalidade * (2/100);
    }

    let fim = mensalidade + multa;

    resultado.innerHTML =
        `Multa de R$ ${multa.toFixed(2)} <br> Total a apagar de R$ ${fim.toFixed(2)}`;
}

function cashback(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let cashback = 0;

    if(valor>300){
        cashback = valor * (5/100);
    }

    resultado.innerHTML = 
        `Cashback de R$ ${cashback.toFixed(2)} <br> Total liquído da compra de R$ ${valor.toFixed(2)}`;
}