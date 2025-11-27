const db = require("../data/connection");

const listar = async (req, res) => {
    const lista = await db.query("SELECT * FROM reservas");
    res.json(lista[0]).end();
};

const cadastrar = async (req, res) => {
    const {data_reserva, horario, id_aluno, id_sala} = req.body;

     if (data_reserva == "" || horario == "" || id_aluno == null || id_sala == null) {
        return res.status(400).json({ erro: "Todos os campos devem estar preenchidos." }).end();
    }

    try {
       const resultado = await db.query("INSERT INTO reservas VALUES (DEFAULT, ?, ?, ?, ?)", [data_reserva, horario, id_aluno, id_sala]);

        const novaReserva = { 
            id: resultado[0].insertId, 
            data_reserva: data_reserva,
            horario: horario,
            id_aluno: id_aluno,
            id_sala: id_sala
        };
        
        res.status(201).json(novaReserva).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const excluir = async (req, res) => {
    const id = req.params.id;
    try{
        const remove = await db.query("DELETE FROM reservas WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error) {
        console.log(error);

        const err = {msg : ""};

        if(error.code === "ECONNREFUSED") {
            err.msg = "Erro na conexão com o banco de dados";
        }

        res.status(500).json(err).send();
    }
};

const atualizar = async (req, res) => {
    const { data_reserva, horario, id_aluno, id_sala } = req.body;
    const id = req.params.id;

    const [resultado] = await db.query(
        "UPDATE reservas SET data_reserva = ?, horario = ?, id_aluno = ?, id_sala = ? WHERE id = ?",
        [data_reserva, horario, id_aluno, id_sala, id]
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
    listar,
    cadastrar,
    excluir,
    atualizar
};