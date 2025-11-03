const manutencoes = require("../data/manutencoes.data");

const listar = (req, res) => {
    res.send(manutencoes).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var man;

    manutencoes.forEach((manutencao, index)=>{
        if(manutencao.id_manutencao === id){
            man = manutencao;
        }
    });

    if(man === ""){
        man = "Não Encontrado"
    };

    res.send(man).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    manutencoes.push(data);
    res.status(201).send("cadastrado com sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    manutencoes.forEach((manutencao, index) => {
        if(manutencao.id_manutencao === id){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        manutencoes.splice(indice, 1);
        res.status(200).end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar
}