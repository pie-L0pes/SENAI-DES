const db = require("../data/connection");

const listar = async (req, res) => {
    const lista = await db.query("SELECT * FROM alunos");
    res.json(lista[0]).end();
};

const cadastrar = async (req, res) => {
    const {nome, turma} = req.body;

     if (nome == "" || turma == "") {
        return res.status(400).json({ erro: "Todos os campos devem estar preenchidos." }).end();
    }

    try {
       const resultado = await db.query("INSERT INTO alunos VALUES (DEFAULT, ?, ?)", [nome, turma]);

        const novoAluno = { 
            id: resultado[0].insertId, 
            nome: nome,
            turma: turma
        };
        
        res.status(201).json(novoAluno).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const excluir = async (req, res) => {
    const id = req.params.id;
    try{
        const remove = await db.query("DELETE FROM alunos WHERE id = ?", [id]);

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
    const { nome, turma } = req.body;
    const id = req.params.id;

    const [resultado] = await db.query(
        "UPDATE alunos SET nome = ?, turma = ? WHERE id = ?",
        [nome, turma, id]
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