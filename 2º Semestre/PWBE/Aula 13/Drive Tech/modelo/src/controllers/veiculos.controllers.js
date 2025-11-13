const db = require("../data/connection");

const listarveiculos = async (req, res) => {
    const lista = await db.query("SELECT * FROM veiculos");
    res.json(lista[0]).end();
};

const buscarveiculos = async (req, res) =>{
    const placa = req.params.placa;

    const equipamento = await db.query("SELECT * FROM veiculos WHERE placa = ?", [placa]);
    res.json(equipamento[0][0]).end();
};

const cadastrarveiculo = async (req, res) => {
    const { placa, modelo, ano } = req.body;

    try {
        await db.query(
            "INSERT INTO veiculos (placa, modelo, ano) VALUES (?, ?, ?)",
            [placa, modelo, ano]
        );

        const veiculo = {
            placa: placa,
            modelo: modelo,
            ano: ano
        };

        res.status(201).json(veiculo).end();

    } catch (error) {
        console.error("Erro ao cadastrar veículo:", error);
        res.status(500).json({ erro: "Erro ao cadastrar veículo" }).end();
    }
};

const excluirveiculo = async (req, res) => {
    const placa = req.params.placa;

    try {
        const [remove] = await db.query("DELETE FROM veiculos WHERE placa = ?", [placa]);

        console.log(remove);

        res.status(200).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({ erro: "Erro ao excluir veículo" }).end();
    }
};

const atualizarveiculo = async (req, res) => {
    const { modelo, ano } = req.body;
    const placa = req.params.placa;

    try {
        const [update] = await db.query(
            "UPDATE veiculos SET modelo = ?, ano = ? WHERE placa = ?",
            [modelo, ano, placa]
        );

        const info = { msg: "" };

        if (update.affectedRows === 1) {
            info.msg = "Atualizado com sucesso";
        } else if (update.affectedRows === 0) {
            info.msg = "Veículo não encontrado";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Erro interno no servidor. Tente novamente mais tarde." }).end();
    }
};

module.exports = {
    listarveiculos,
    buscarveiculos,
    cadastrarveiculo,
    excluirveiculo,
    atualizarveiculo
};