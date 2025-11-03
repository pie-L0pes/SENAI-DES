const veiculos = require("../data/veiculos.data");

const listar = (req, res) => {
    res.send(veiculos).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var car;

    veiculos.forEach((veiculo, index)=>{
        if(veiculo.id_veiculo === id){
            car = veiculo;
        }
    });

    if(car === ""){
        car = "Não Encontrado"
    };

    res.send(car).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    veiculos.push(data);
    res.status(201).send("cadastrado com sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    veiculos.forEach((veiculo, index) => {
        if(veiculo.id_veiculo === id){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        veiculos.splice(indice, 1);
        res.status(200).end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar
}