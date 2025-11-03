const db = require("../data/connection")

const listarlocacao = async (req, res) => {
    const lista = await db.query("SELECT * FROM locacoes");
    res.json(lista[0]).end();
}

const buscarlocacao = async (req, res) => {
    const idlocacao = req.params.id;
    const locacao = await db.query("SELECT * FROM locacoes WHERE id =" + idlocacao);
    res.json(locacao[0]).end();
}

const cadastrarlocacao = async (req, res) => {
const { cliente_id, filme_id, data_locacao, status, preco} = req.body;

    const novolocacao = await db.query("INSERT INTO locacoes VALUES (DEFAULT, ?, ?, ?, ?, ?)", [cliente_id, filme_id, data_locacao, status, preco]);

    const locacao = {
        id: novolocacao[0].insertId,
        cliente_id: cliente_id,
        filme_id: filme_id,
        data_locacao: data_locacao,
        status: status,
        preco: preco
    }

    res.json(locacao).status(201).end();
}

const excluirlocacao = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM locacoes WHERE id = ?", [id]);

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

const atualizarlocacao = async (req, res) => {
    const {cliente_id, filme_id, data_locacao, status, preco, id} = req.body;

    try {
        const update = await db.query("UPDATE locacoes SET cliente_id = ?, filme_id = ?, data_locacao = ?, status = ?, preco = ? where id = ?", [cliente_id, filme_id, data_locacao, status, preco, id]);

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

const listarlocacao_id = async (req, res) => {
    const idcliente = req.params.idcliente;
    const lista = await db.query("SELECT * FROM locacoes where cliente_id = ?", [idcliente]);
    res.json(lista[0]).end();
}

const listarlocacao_status = async (req, res) => {
    const status = req.params.status;
    const lista = await db.query("SELECT * FROM locacoes where status = ?",[status]);
    res.json(lista[0]).end();
}

const totalFaturamento = async (req, res) =>{
    const total = await db.query("SELECT SUM(preco) AS total FROM locacoes WHERE status = 'ENTREGUE'");
    res.json(total[0][0]).end();

}

const quantfaturamento = async (req, res) =>{
    const total = await db.query("SELECT DATE_FORMAT(locacoes.data_locacao, '%Y-%m') AS mes, COUNT(*) AS total_locacoes, SUM(filmes.preco) AS faturamento FROM locacoes INNER JOIN filmes ON locacoes.filme_id = filmes.id GROUP BY DATE_FORMAT(locacoes.data_locacao, '%Y-%m') ORDER BY mes");
    res.json(total[0]).end();
}

module.exports = {
    listarlocacao,
    listarlocacao_id,
    listarlocacao_status,
    buscarlocacao,
    cadastrarlocacao,
    excluirlocacao,
    atualizarlocacao,
    totalFaturamento,
    quantfaturamento
}