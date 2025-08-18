const livros = [
    {
        "Titulo" : "Jantar Secreto",
        "Autor" : "Raphael Montes",
        "Paginas" : 368,
        "Genêro" : "Suspense",
        "Protagonista" : "Dante"
    },
    {
        "Titulo" : "Suicidas",
        "Autor" : "Raphael Montes",
        "Paginas" : 342,
        "Genêro" : "Suspense",
        "Protagonista" : "Alessandro"
    }
];


livros.forEach((livro)=>{
    if(livro.Titulo === "Jantar Secreto"){
        console.log(livro);
    }
}
);


livros.forEach((livro, i)=>{
    
    if(livro.Titulo === "Suicidas"){
        removed = livros.splice(i,2);
    }
    
}
);



livros.push({"Titulo": "O amor não é Obvio",
    "Autor" : "Elayne",
    "Paginas" : 392,
    "Genêro" : "Romance",
    "Protagonista" : "Iris e Edra"
})


livros.forEach((livro)=>{
    if(livro.Titulo === "O amor não é Obvio"){
        livro.Autor = "Elayne Baeta";
        
    }
}
);
console.log("--------------------");

console.log(livros);
