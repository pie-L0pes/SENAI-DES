const db = require("../data/connection");

const listarpaciente = async (req, res) => {
    const lista = await db.query("SELECT * FROM Pacientes");
    res.json(lista[0]).end();
};

const excluirpaciente = async (req, res) => {
    const id = req.params.id;
    try{
        const remove = await db.query("DELETE FROM Pacientes WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error) {
        console.log(error);

        const err = {msg : ""};

        if(error.errno === 1451){
            err.msg = "Paciente com consulta marcada";
            
        }else if(error.code === "ECONNREFUSED") {
            err.msg = "Erro na conexão com o banco de dados";
        }

        res.status(500).json(err).send();
    }
};

const cadastrarpaciente = async (req, res) => {
    try {
        const { nome, cpf, telefone, email, endereco } = req.body;

        const resultado = await db.query("INSERT INTO Pacientes VALUES (DEFAULT, ?, ?, ?, ?, ?)", [nome, cpf, telefone, email, endereco]);

        const novoPaciente = { 
            id: resultado[0].insertId, 
            nome: nome,
            cpf: cpf,
            telegone: telefone,
            email: email,
            endereco: endereco
        };
        
        res.status(201).json(novoPaciente).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const listarmedico = async (req, res) => {
    const lista = await db.query("SELECT * FROM Medicos");
    res.json(lista[0]).end();
};

const excluirmedico = async (req, res) => {
    const id = req.params.id;
    try{
        const remove = await db.query("DELETE FROM Medicos WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error) {
        console.log(error);

        const err = {msg : ""};

        if(error.errno === 1451){
            err.msg = "Medico com consulta marcada";
            
        }else if(error.code === "ECONNREFUSED") {
            err.msg = "Erro na conexão com o banco de dados";
        }

        res.status(500).json(err).send();
    }
};

const cadastrarmedico = async (req, res) => {
    try {
        const { id,nome, cpf, telefone, email, endereco, especialidade } = req.body;

        const resultado = await db.query("INSERT INTO Medicos VALUES (?, ?, ?, ?, ?, ?, ?)", [id, nome, cpf, telefone, email, endereco, especialidade]);

        const novomedico = { 
            id: id,
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            email: email,
            endereco: endereco,
            especialidade: especialidade
        };
        
        res.status(201).json(novomedico).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const listarconsultapormedico = async (req, res) => {
    const id = req.params.id;
    try {
        const lista = await db.query(
            "SELECT medicos.especialidade, COUNT(consultas.id) AS total_consultas FROM consultas INNER JOIN medicos ON consultas.idMedico = medicos.id GROUP BY medicos.especialidade ORDER BY total_consultas DESC", [id]);

        if (lista[0].length === 0) {
            return res.status(404).json({ message: "Erro" });
        }

        res.json(lista[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ocorreu um erro ao consultar os dados." });
    }
};

const excluirconsulta = async (req, res) => {
    const id = req.params.id;
    try{
        const remove = await db.query("DELETE FROM Consultas WHERE id = ?", [id]);

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

const cadastrarconsulta = async (req, res) => {
    try {
        const { idCliente, idMedico, data, hora, status } = req.body;

        const resultado = await db.query("INSERT INTO consultas VALUES (DEFAULT, ?, ?, ?, ?, ?)", [idCliente, idMedico, data, hora, status]);

        const novaconsulta = { 
            id: resultado[0].insertId,
            idCliente: idCliente,
            idMedico: idMedico,
            data: data,
            hora: hora,
            status: status
        };
        
        res.status(201).json(novaconsulta).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const consultasporespecialidades = async (req, res) => {
    const lista = await db.query("SELECT m.especialidade, COUNT(c.id) AS total_consultas FROM consultas c JOIN medicos m ON c.idMedico = m.id GROUP BY m.especialidade");
    res.json(lista[0]).end();
};

const pacientespormedico = async (req, res) => {
    const lista = await db.query("SELECT m.nome AS medico, COUNT(DISTINCT c.idCliente) AS total_pacientes_atendidos FROM Consultas c JOIN Medicos m ON c.idMedico = m.id GROUP BY m.nome ORDER BY total_pacientes_atendidos DESC");
    res.json(lista[0]).end();
};

const listageral = async (req, res) => {
    const lista = await db.query("SELECT p.nome AS paciente, m.especialidade, c.data, c.status FROM Consultas c JOIN Pacientes p ON c.idCliente = p.id JOIN Medicos m ON c.idMedico = m.id ORDER BY c.data DESC, c.hora");
    res.json(lista[0]).end();
};

module.exports = {
    listarpaciente,
    excluirpaciente,
    cadastrarpaciente,
    listarmedico,
    excluirmedico,
    cadastrarmedico,
    listarconsultapormedico,
    excluirconsulta,
    cadastrarconsulta,
    consultasporespecialidades,
    pacientespormedico,
    listageral
};