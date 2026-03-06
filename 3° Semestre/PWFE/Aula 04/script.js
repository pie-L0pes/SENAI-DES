const modalCli = document.querySelector("#modalCli")

var filmes = JSON.parse(localStorage.getItem("filmes")) || [];

renderizarTabela();

function salvarLocal(){
    localStorage.setItem("filmes", JSON.stringify(filmes));
    window.location.reload();
}

function abrirModal(){
    modalCli.style.display="block";
}

function fecharModal(){
    modalCli.style.display="none";
}

const formCli = document.querySelector("#formCli");

formCli.addEventListener("submit", e => {

    e.preventDefault();

    const obj = {
        imagem: formCli.imagem.value,
        titulo: formCli.titulo.value,
        genero: formCli.genero.value,
        ano: formCli.ano.value,
        produtora: formCli.produtora.value
    }

    filmes.push(obj);

    formCli.reset();

    salvarLocal();
});

function renderizarTabela(lista = filmes){

    const corpo = document.querySelector("#dados");

    corpo.innerHTML = "";

    lista.forEach((f, i) =>{

        corpo.innerHTML += `
        <tr>
        <td><img src="${f.imagem}"></td>
        <td>${f.titulo}</td>
        <td>${f.genero}</td>
        <td>${f.ano}</td>
        <td>${f.produtora}</td>
        <td><button onclick="excluir(${i})">Excluir</button></td>
        </tr>
        `;
    })
}

function excluir(indice){

    filmes.splice(indice,1);

    salvarLocal();
}

function filtrarGenero(){

    const genero = document.querySelector("#filtroGenero").value;

    if(genero === "todos"){
        renderizarTabela();
        return;
    }

    const filtrados = filmes.filter(f => f.genero === genero);

    renderizarTabela(filtrados);
}