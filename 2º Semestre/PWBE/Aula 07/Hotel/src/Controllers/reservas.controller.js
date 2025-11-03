const reservas = require("../Data/Reserva.data");
const clientes = require("../Data/Clientes.data");
const quartos = require("../Data/Quarto.data");

const listar = (req, res) => {
    res.send(reservas).end();

};  
const atualizar = (req, res) => {
    const data = req.body;

    var clientecadastrado = false;
     if
};

const cadastrar = (req, res) => {
    res.send(reservas).end();
};
module.exports = {
    listar,
    atualizar,
    cadastrar
}