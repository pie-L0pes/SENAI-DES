const db = require("../data/connection");

const listarutilizacao = async (req, res) => {
    const [lista] = await db.query("SELECT * FROM utilizacao");
    res.json(lista).end();
};

const buscarutilizacao = async (req, res) => {
    const id = req.params.id;

    const [resultado] = await db.query("SELECT * FROM utilizacao WHERE id = ?", [id]);

    if (resultado.length > 0) {
        res.json(resultado[0]).end();
    } else {
        res.status(404).json({ msg: "Registro de utilização não encontrado" }).end();
    }
};

const cadastrarutilizacao = async (req, res) => {
    const { placa, id_vaga, data, hora_entrada, hora_saida } = req.body;

    await db.query(
        "INSERT INTO utilizacao (placa, id_vaga, data, hora_entrada, hora_saida) VALUES (?, ?, ?, ?, ?)",
        [placa, id_vaga, data, hora_entrada, hora_saida]
    );

    const utilizacao = {
        placa: placa,
        id_vaga: id_vaga,
        data: data,
        hora_entrada: hora_entrada,
        hora_saida: hora_saida
    };

    res.status(201).json(utilizacao).end();
};

const excluirutilizacao = async (req, res) => {
    const id = req.params.id;

    const [resultado] = await db.query("DELETE FROM utilizacao WHERE id = ?", [id]);

    if (resultado.affectedRows > 0) {
        res.status(200).json({ msg: "Registro de utilização excluído com sucesso" }).end();
    } else {
        res.status(404).json({ msg: "Registro de utilização não encontrado" }).end();
    }
};

const atualizarutilizacao = async (req, res) => {
    const { placa, id_vaga, data, hora_entrada, hora_saida } = req.body;
    const id = req.params.id;

    const [resultado] = await db.query(
        "UPDATE utilizacao SET placa = ?, id_vaga = ?, data = ?, hora_entrada = ?, hora_saida = ? WHERE id = ?",
        [placa, id_vaga, data, hora_entrada, hora_saida, id]
    );

    const info = { msg: "" };

    if (resultado.affectedRows === 1) {
        info.msg = "Registro de utilização atualizado com sucesso";
    } else if (resultado.affectedRows === 0) {
        info.msg = "Registro de utilização não encontrado";
    }

    res.status(200).json(info).end();
};

module.exports = {
    listarutilizacao,
    buscarutilizacao,
    cadastrarutilizacao,
    excluirutilizacao,
    atualizarutilizacao
};