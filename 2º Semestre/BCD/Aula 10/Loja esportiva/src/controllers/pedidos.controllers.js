const db = require("../data/connection");

const listarpedidos = async (req, res) => {
    const listar = await db.query("SELECT * FROM pedidos");
    res.json(listar[0]);
};

const buscarpedidos = async (req, res) => {
    const ideq = req.params.id;

    const pedido = await db.query("SELECT * FROM pedidos WHERE id =" + ideq);
    res.json(pedido[0][0]).end();
};

module.exports = {
    listarpedidos,
    buscarpedidos
}