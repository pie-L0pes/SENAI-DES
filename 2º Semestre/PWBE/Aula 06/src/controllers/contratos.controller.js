const contratos = require("../data/contratos.data");

const listar = (req, res) => {
    res.send(contratos).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var contract;

    contratos.forEach((contrato, index)=>{
        if(contrato.id_contrato === id){
            contract = contrato;
        }
    });

    if(contract === ""){
        contract = "Não Encontrado"
    };

    res.send(contract).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    contratos.push(data);
    res.status(201).send("cadastrado com sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    contratos.forEach((contrato, index) => {
        if(contrato.id_contrato === id){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        contratos.splice(indice, 1);
        res.status(200).end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar
}