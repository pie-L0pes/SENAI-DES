const db = require("../data/connection")

const listarFilmes = async (req, res) => {
    const lista = await db.query("SELECT * FROM filmes");
    res.json(lista).end();
}

const buscarFilme = async (req, res) => {
    const idFilme = req.params.id;
    const filme = await db.query("SELECT * FROM filmes WHERE id =" + idFilme);
    res.json(filme[0][0]).end();
}

const cadastrarFilme = async (req, res) => {
const { titulo, categoria, preco } = req.body;

    const novoFilme = await db.query("INSERT INTO filmes VALUES (DEFAULT, ?, ?, ?)", [titulo, categoria, preco]);

    const filme = {
        id: novoFilme[0].insertId,
        titulo: titulo
    }

    res.json(filme).status(201).end();
}

const excluirFilme = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM filmes WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error){
        console.log(error);

        const err = { msg : ""};

        if(error.errno === 1451){
            err.msg = "Usuario com locação registrada";
        }

        res.json(err).status(500).end();
    }
};

const atualizarFilme = async (req, res) => {
    const {id, titulo, categoria, preco} = req.body;

    try {
        const update = await db.query("UPDATE filmes SET titulo = ?, categoria = ?, preco = ? where id = ?", [titulo, categoria, preco, id]);

        const info = { msg : "" };

        if(update[0].affectedRows === 1) {
            info.msg = "Atulizado com sucesso";
        }else if(update[0].affectedRows === 0){
            info.msg = "Usuario não encontrado";
        }
        
        res.status(200).json(info).end();

    }catch (error){
        console.log(error);

        res.status(500).end();
    }
};

const quantidadeporCategoria = async (req, res) => {
    const total = await db.query("SELECT filmes.categoria, COUNT(*) AS total_locacoes FROM locacoes INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY filmes.categoria");
    res.json(total[0]).end();
};

const totalCategoria = async (req, res) => {
    try {
        const resultado = await db.query("SELECT categoria, SUM(preco) AS faturamento_total FROM filmes GROUP BY categoria");
        res.json(resultado[0]).status(200).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Erro" }).end();
    }
};

module.exports = {
    listarFilmes,
    buscarFilme,
    cadastrarFilme,
    excluirFilme,
    atualizarFilme,
    quantidadeporCategoria,
    totalCategoria
}