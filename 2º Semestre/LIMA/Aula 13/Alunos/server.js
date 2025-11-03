const content = document.querySelector(".content");
const box = document.querySelector(".box");
const alunos = [
    { 
        nome: "Livia",
        turma: "2º A",
        nota1: 2,
        nota2: 1,
        nota3: 10
    },
    { 
        nome: "Anthony",
        turma: "2º A",
        nota1: 8,
        nota2: 10,
        nota3: 9.5
    },
    { 
        nome: "Ravi",
        turma: "2º A",
        nota1: 4,
        nota2: 5,
        nota3: 10
    }
];

alunos.forEach((aluno) =>{
    let novocartao = box.cloneNode(true); 

    novocartao.querySelector("#nome").innerHTML = aluno.nome;
    novocartao.querySelector("#turma").innerHTML = aluno.turma;
    novocartao.querySelector("#nota1").innerHTML = "Nota 1:" + aluno.nota1;
    novocartao.querySelector("#nota2").innerHTML = "Nota 2:" + aluno.nota2;
    novocartao.querySelector("#nota3").innerHTML = "Nota 3:" + aluno.nota3;
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    novocartao.querySelector("#media").innerText = "Média: " + media.toFixed(2);

    if(media >= 7){
        novocartao.style.backgroundColor = "#458338ff";
    } else {
        novocartao.style.backgroundColor = "#772525ff";
    }

    
    content.appendChild(novocartao);

});

const busca = document.querySelector("#buscar");

busca.addEventListener("keyup", () => {
    content.childNodes.forEach((node) => {
        let conteudo = node.innerHTML;
        if(conteudo) {
            conteudo = node.querySelector("#nome").innerHTML; 
            if(conteudo.toLowerCase().includes(busca.value.toLowerCase())){
                node.style.display = "block";
            }else{
                node.style.display = "none";
            }
        }
    });
});


//node.querySelector("#nome").innerHTML -> filtra apenas por nome