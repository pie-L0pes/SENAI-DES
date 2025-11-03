const clientes = require("../data/clientes.data");

const cadastrar = (req, res) => {
    const data = req.body;

    var possui = "";

    if (data.cpf === "") {
        possui = "Insira o cpf";
    } else {
        clientes.push(data);
    }

    if (possui === "") {
        res.status(201).send("Cadastrado com sucesso").end();
    } else {
        res.status(404).send(possui).end();
    }
};


const buscar = (req, res) => {
    var id = req.params.id;

    var user;

    clientes.forEach ((cliente, index)=>{
        if(cliente.id_cliente === id){
            user = cliente;
        }
    });

    if(user === ""){
        user = "Nao Encontrado";
    };

    res.send(user).end();
};

const listar = (req, res) => {
    res.send(clientes).end();
};

module.exports = {
    cadastrar,
    buscar,
    listar
}