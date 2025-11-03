const pedidos = require("../data/pedidos.data");
const produtos = require("../data/produtos.data");
const clientes = require("../data/clientes.data");

const listar = (req, res) => {
    res.send(pedidos).end();
};

const cadastrar = (req, res) => {
    const data = req.body;

    var possui = "";

    if(data.quantidade === ""){
        possui = "Insira quantidade";
        res.status(404).send(possui).end();
    }
    else if (data.quantidade === "0"){
        possui = "Insira quantidade";
        res.status(404).send(possui).end();
    }
    else{
        pedidos.push(data);
        res.status(201).send("Cadastrado com sucesso").end();
    }
};

const alterar = (req, res) => {
    const pedUpdate = req.body;
    const id = req.params.id;
    var indice = -1;

    pedidos.forEach((pedido, index) => {
        if(pedido.id === id){
            indice = index;
        }
    });
    if (indice === -1){
        res.status(404).end();
    }else{
        Object.keys(pedUpdate).forEach((chave) => {
        pedidos[indice][chave] = pedUpdate[chave] 
    });

        res.status(200).end();

    }
};

module.exports = {
    cadastrar,
    alterar,
    listar
}