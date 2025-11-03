const dataPosts = require("../data/connection");

const createpost = async (req, res) => {
    try {
        const { titulo, conteudo } = req.body;
        const userId = req.headers['user'].id;

        const resultado = await dataPosts.query("INSERT INTO posts VALUES (DEFAULT, ?, ?, ?)", [userId, titulo, conteudo]);

        const novoPost = { 
            id: resultado[0].insertId, 
            titulo: titulo,
            conteudo: conteudo
        };
        
        res.status(201).json(novoPost).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
}

module.exports = {
    createpost
}