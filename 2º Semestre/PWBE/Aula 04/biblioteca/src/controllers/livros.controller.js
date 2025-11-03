const livros = require("../data/livros.data");

const listar = (req, res) => {
    res.send(livros).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var book;

    livros.forEach((livro, index) => {
        if(livro.id === id){
            book = livro;
        }
    });

    if(book === ""){
        user = "Não Encontrado"
    };

    res.send(book).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    livros.push(data);
    res.status(201).send("cadastrado com sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    livros.forEach((livro, index) => {
        if(livro.id === id){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        usuarios.splice(indice, 1);
        res.status(200).end();
    }
};



module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar
}