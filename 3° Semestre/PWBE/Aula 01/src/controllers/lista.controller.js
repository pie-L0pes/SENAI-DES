const con = require("../data/connection");

const listarItens = async (req, res) => {
    try{
        const [lista] = await con.query("SELECT * FROM lista");

        res.json(lista).status(200).end();
    }catch(err){
        res.json(err).status(500).end();
    }
};

module.exports = {
    listarItens
};
