const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');

const Login = async (req, res) => {
    const { email, psw, cargo } = req.body;

    try {
        const senhahash = crypto.createHash('MD5').update(psw).digest('hex').toString();

        const usuario = await db.query(
            "SELECT * FROM usuarios WHERE email = ? AND senha = ? AND cargo = ?",
            [email, senhahash, cargo]
        );

        if (usuario[0].length === 0) {
            return res.status(401).send({ message: 'E-mail ou senha incorretos!' });
        }

        const token = jsonwebtoken.sign(
            {
                id: usuario[0][0].id,
                nome: usuario[0][0].nome,
                cargo: usuario[0][0].cargo
            },
            process.env.SECRET_JWT,
            { expiresIn: "60min" }
        );

        return res.status(200).json({ token: token }).end();

    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Erro interno no servidor.', error: err }).end();
    }
};


const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, cargo } = req.body;

    try {
        const senhahash = crypto.createHash('MD5').update(senha).digest('hex').toString();

        const resultado = await db.query(
            "INSERT INTO Usuarios (nome, email, senha, cargo) VALUES (?, ?, ?, ?)",
            [nome, email, senhahash, cargo]
        );

        const novoUsuario = { 
            id: resultado[0].insertId, 
            nome: nome,
            email: email,
            cargo: cargo
        };
        
        res.status(201).json(novoUsuario).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao cadastrar usuario.', error: error }).end();
    }
};

const listarUsuarios = async (req, res) => {
    const lista = await db.query("SELECT * FROM Usuarios");
    res.json(lista[0]).end();
};

const postAutor = async (req, res) => {
    const idpost = req.params.id;
    const ver = await db.query("SELECT * FROM posts WHERE user_id = ?", [idpost]);
    res.json(ver[0]).end();
};

module.exports = {
    Login,
    cadastrarUsuario,
    listarUsuarios,
    postAutor
}