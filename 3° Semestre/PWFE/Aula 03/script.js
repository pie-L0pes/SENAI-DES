const modal = document.querySelector("#modalCarrinho")
var carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

const produtos = [
{nome:"Pizza Calabresa", preco:35, img:"img/calabresa.jpg"},
{nome:"Pizza Mussarela", preco:30, img:"img/mussarela.jpg"},
{nome:"Pizza Portuguesa", preco:40, img:"img/portuguesa.jpg"},
{nome:"Pizza Frango", preco:38, img:"img/frango.jpg"},
{nome:"Pizza Bacon", preco:42, img:"img/bacon.jpg"},
{nome:"Pizza 4 Queijos", preco:45, img:"img/4queijos.jpg"},
{nome:"Pizza Marguerita", preco:37, img:"img/marguerita.jpg"},
{nome:"Pizza Atum", preco:39, img:"img/atum.jpg"},
{nome:"Pizza Chocolate", preco:36, img:"img/chocolate.jpg"},
{nome:"Refrigerante 2L", preco:12, img:"img/refri.jpg"}
]

renderizarProdutos()
renderizarTabela()

function salvarLocal(){
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
    window.location.reload()
}

function abrirModal(){
    modal.style.display="flex"
}

function fecharModal(){
    modal.style.display="none"
}

function renderizarProdutos(){
    const area = document.querySelector("#produtos")
    area.innerHTML=""
    produtos.forEach((p,i)=>{
        area.innerHTML += `
        <div class="card">
            <img src="${p.img}" alt="${p.nome}">
            <h3>${p.nome}</h3>
            <p>R$ ${p.preco}</p>
            <button onclick="adicionar(${i})">Add ao Carrinho</button>
        </div>
        `
    })
}

function adicionar(i){
    const item = carrinho.find(p=>p.nome==produtos[i].nome)
    if(item){
        item.qtd++
    }else{
        carrinho.push({...produtos[i], qtd:1})
    }
    salvarLocal()
}

function renderizarTabela(){
    const corpo = document.querySelector("#dados")
    corpo.innerHTML=""
    let total=0

    carrinho.forEach((c,i)=>{
        const sub = c.preco * c.qtd
        total += sub

        corpo.innerHTML += `
        <tr>
            <td>${c.nome}</td>
            <td>R$ ${c.preco}</td>
            <td>
                <button onclick="diminuir(${i})">-</button>
                ${c.qtd}
                <button onclick="aumentar(${i})">+</button>
            </td>
            <td>R$ ${sub}</td>
            <td><button onclick="excluir(${i})">Excluir</button></td>
        </tr>
        `
    })

    document.querySelector("#total").innerHTML = "Total: R$ " + total
}

function aumentar(i){
    carrinho[i].qtd++
    salvarLocal()
}

function diminuir(i){
    if(carrinho[i].qtd>1){
        carrinho[i].qtd--
    }else{
        carrinho.splice(i,1)
    }
    salvarLocal()
}

function excluir(i){
    carrinho.splice(i,1)
    salvarLocal()
}

function finalizar(){
    localStorage.removeItem("carrinho")
    carrinho=[]
    window.location.reload()
}