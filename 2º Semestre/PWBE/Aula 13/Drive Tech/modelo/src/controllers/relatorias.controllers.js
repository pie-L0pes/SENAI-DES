const db = require("../data/connection");

const veiculosnoestacionamente = async (req, res) => {
    const veiculos = await db.query("SELECT u.placa, v.modelo, v.ano, u.id_vaga, u.data, u.hora_entrada FROM utilizacao u JOIN veiculos v ON u.placa = v.placa WHERE u.hora_saida IS NULL");
    res.json(veiculos[0]).end();
};

const valortotal = async (req, res) => {
    const lista = await db.query("SELECT u.placa, v.modelo, u.data, u.hora_entrada, u.hora_saida, ROUND(TIMESTAMPDIFF(MINUTE, u.hora_entrada, u.hora_saida) / 60, 2) AS horas_utilizadas, ROUND((TIMESTAMPDIFF(MINUTE, u.hora_entrada, u.hora_saida) / 60) * 5, 2) AS valor_total FROM utilizacao u JOIN veiculos v ON u.placa = v.placa WHERE u.hora_saida IS NOT NULL");
    res.json(lista[0]).end();
};

const historico = async (req, res) => {
    const lista = await db.query("SELECT u.placa, v.modelo, COUNT(u.id) AS total_estacionamentos FROM utilizacao u JOIN veiculos v ON u.placa = v.placa WHERE u.placa = 'KLM4N56' GROUP BY u.placa, v.modelo");
    res.json(lista[0]).end();
};

const taxa = async (req, res) => {
    const lista = await db.query("SELECT DATE_FORMAT(u.data, '%d/%m/%Y') AS data, COUNT(u.id_vaga) AS vagas_ocupadas, (SELECT COUNT(*) FROM vagas) AS total_vagas, ROUND((COUNT(u.id_vaga) / (SELECT COUNT(*) FROM vagas)) * 100, 2) AS taxa_ocupacao_percentual FROM utilizacao u WHERE u.data = '2025-11-05' GROUP BY u.data;");
    res.json(lista[0]).end();
};

module.exports = {
    veiculosnoestacionamente,
    valortotal,
    historico,
    taxa
};