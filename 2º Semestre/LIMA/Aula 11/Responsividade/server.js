const menu = document.querySelector("#menu");

menu.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    const leftNav = nav.style.left;
    
    if(leftNav === "" || leftNav === "-200px"){
        nav.style.left = "0";
    }else {
        nav.style.left = "-200px";
    }
}); 

const content = document.querySelector(".content");
const box = document.querySelector(".box");
const produtos = [
    { 
        img: "nescau.jpg",
        nome: "Nescau",
        valor: 11.99
    },
    { 
        img: "leite.png",
        nome: "Ninho",
        valor: 19.78
    },
    { 
        img: "café.png",
        nome: "Café",
        valor: 49.98
    }
];

produtos.forEach((produto) =>{
    let novocartao = box.cloneNode(true); //Clonar elemento "true" = elemento como um todo

    novocartao.querySelector("img").src = produto.img;
    novocartao.querySelector("#nome").innerHTML = produto.nome;
    novocartao.querySelector("#valor").innerHTML = "R$" + produto.valor;

    content.appendChild(novocartao); //Adicionar no html
});
const busca = document.querySelector("#buscar");

busca.addEventListener("keyup", () => {
    content.childNodes.forEach((node) => {
        let conteudo = node.innerHTML;
        if(conteudo) {
            if(conteudo.toLowerCase().includes(busca.value.toLowerCase())){
                node.style.display = "block";
            }else{
                node.style.display = "none";
            }
        }
    });
});