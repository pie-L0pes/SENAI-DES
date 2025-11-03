const db = require("../data/connection");

const listarequipamento = async (req, res) => {
    const listar = await db.query("SELECT * FROM equipamentos");
    res.json(listar[0]);
};

const cadastrarequipamento = async (req, res) => {
    const { nome, categoria, preco } = req.body;

    const novoequipamento = await db.query("INSERT INTO equipamentos VALUES (DEFAULT, ?, ?, ?)", [nome, categoria, preco]);

    const equipamento = {
        id: novoequipamento[0].insertId,
        nome: nome,
        categoria: categoria,
        preco: preco
    }

    res.json(equipamento).status(201).end();

};

const buscarEquipamento = async (req, res) => {
    const ideq = req.params.id;

    const equipamento = await db.query("SELECT * FROM equipamentos WHERE id =" + ideq);
    res.json(equipamento[0][0]).end();
}

const excluirequipamento = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM equipamento WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error){
        console.log(error);

        res.json(error).status(500).end();
    }
};

const atualizarequipamento = async (req, res) => {
    const { id, nome, categoria, preco } = req.body;

    try {
        const update = await db.query("UPDATE equipamentos SET nome = ?, categoria = ?, preco = ? WHERE id = ?", [nome, categoria, preco, id]);

        const info = { msg: "" };

        if (update[0].affectedRows === 1) {
            info.msg = "Atualizado com sucesso";
        } else if (update[0].affectedRows === 0) {
            info.msg = "Equipamento não encontrado";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);

        res.status(500).json({ msg: "Erro interno no servidor. Tente novamente mais tarde." }).end();
    }
};
module.exports = {
    listarequipamento,
    cadastrarequipamento,
    buscarEquipamento,
    excluirequipamento,
    atualizarequipamento
}