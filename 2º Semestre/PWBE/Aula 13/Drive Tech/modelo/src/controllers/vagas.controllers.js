const db = require("../data/connection");

const listarvagas = async (req, res) => {
    const [lista] = await db.query("SELECT * FROM vagas");
    res.json(lista).end();
};

const buscarvagas = async (req, res) => {
    const id = req.params.id;

    const [resultado] = await db.query("SELECT * FROM vagas WHERE id = ?", [id]);

    if (resultado.length > 0) {
        res.json(resultado[0]).end();
    } else {
        res.status(404).json({ msg: "Vaga não encontrada" }).end();
    }
};

const cadastrarvagas = async (req, res) => {
    const { id, setor, corredor, vaga } = req.body;

    await db.query(
        "INSERT INTO vagas (id, setor, corredor, vaga) VALUES (?, ?, ?, ?)",
        [id, setor, corredor, vaga]
    );

    const novaVaga = {
        id: id,
        setor: setor,
        corredor: corredor,
        vaga: vaga
    };

    res.status(201).json(novaVaga).end();
};

const excluirvagas = async (req, res) => {
    const id = req.params.id;

    const [resultado] = await db.query("DELETE FROM vagas WHERE id = ?", [id]);

    if (resultado.affectedRows > 0) {
        res.status(200).json({ msg: "Vaga excluída com sucesso" }).end();
    } else {
        res.status(404).json({ msg: "Vaga não encontrada" }).end();
    }
};

const atualizarvagas = async (req, res) => {
    const {setor, corredor, vaga } = req.body;
    const id = req.params.id;

    const [resultado] = await db.query(
        "UPDATE vagas SET setor = ?, corredor = ?, vaga = ? WHERE id = ?",
        [setor, corredor, vaga, id]
    );

    const info = { msg: "" };

    if (resultado.affectedRows === 1) {
        info.msg = "Vaga atualizada com sucesso";
    } else if (resultado.affectedRows === 0) {
        info.msg = "Vaga não encontrada";
    }

    res.status(200).json(info).end();
};


module.exports = {
    listarvagas,
    buscarvagas,
    cadastrarvagas,
    excluirvagas,
    atualizarvagas
};