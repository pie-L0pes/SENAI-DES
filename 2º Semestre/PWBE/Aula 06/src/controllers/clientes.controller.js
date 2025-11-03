const clientes = require("../data/clientes.data");

const listar = (req, res) => {
    res.send(clientes).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var user;

    clientes.forEach((cliente, index)=>{
        if(cliente.id_cliente === id){
            user = cliente;
        }
    });

    if(user === ""){
        user = "Não Encontrado"
    };

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    clientes.push(data);
    res.status(201).send("cadastrado com sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    clientes.forEach((cliente, index) => {
        if(cliente.id_cliente === id){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        clientes.splice(indice, 1);
        res.status(200).end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar
}