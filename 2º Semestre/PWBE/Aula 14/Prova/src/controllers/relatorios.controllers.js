const db = require("../data/connection");

const reservaporsala = async (req, res) => {
    const lista = await db.query("SELECT salas.nome AS Sala, COUNT(reservas.id) AS Total_Reservas FROM reservas JOIN salas ON reservas.id_sala = salas.id GROUP BY salas.id;");
    res.json(lista[0]).end();
};

const reservaporaluno = async (req, res) => {
    const lista = await db.query("SELECT alunos.nome AS Aluno, COUNT(reservas.id) AS Total_Reservas FROM reservas JOIN alunos ON reservas.id_aluno = alunos.id GROUP BY alunos.id;");
    res.json(lista[0]).end();
};

module.exports = {
    reservaporaluno,
    reservaporsala
}