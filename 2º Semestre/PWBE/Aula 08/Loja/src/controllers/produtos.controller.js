const produtos = require("../data/produtos.data");

const cadastrar = (req, res) => {
    const data = req.body;
    produtos.push(data);
    res.status(201).send("Cadastrado com sucesso").end();
};


const buscar = (req, res) => {
    var id = req.params.id;

    var prod;

    produtos.forEach((produto, index)=>{
        if(id === id){
            prod = produto;
        };
    });

    if(prod === ""){
        prod = "Nao Encontrado"
    };

    res.send(prod).end();

};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    produtos.forEach((produto, index) => {
        if(produto.id === id){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        produtos.splice(indice, 1);
        res.status(200).end();
    }
};

const alterar = (req, res) => {
    const prodUpdate = req.body;
    const id = req.params.id;
    var indice = -1;

    produtos.forEach((produto, index) => {
        if(produto.id === id){
            indice = index;
        }
    });
    if (indice === -1){
        res.status(404).end();
    }else{
        Object.keys(prodUpdate).forEach((chave) => {
        produtos[indice][chave] = prodUpdate[chave] 
    });

        res.status(200).end();

    }
};

module.exports = {
    cadastrar,
    buscar,
    apagar,
    alterar
}