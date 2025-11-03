const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');

const Login  = async (req, res) => {
    const { email, senha } = req.body;
    
    try {
        const senhahash = crypto.createHash('MD5').update(senha).digest('hex').toString();

        console.log(email, senhahash);

        const usuario = await db.query("SELECT * FROM usuarios WHERE email = ? AND senha = ?", [email, senhahash]);

        if(usuario[0].length === 0) res.status(401).send({message:'E-mail ou senha incorreta !'});
        

        const token = jsonwebtoken.sign(
            {
                id: usuario[0][0].id,
                nome: usuario[0][0].nome,
                cargo: usuario[0][0].cargo
            },
            process.env.SECRET_JWT,
            { expiresIn: "60min" }
        );

        res.status(200).json({ token : token }).end();
    }catch(err) {
        res.status(500).send(err).end();
    }
    
    res.status(200).end();
};

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, cargo} = req.body;

    try {
        const senhahash = crypto.createHash('MD5').update(senha).digest('hex').toString();

        const resultado = await db.query("INSERT INTO usuarios VALUES (DEFAULT, ?, ?, ?, ?)", [nome, email, senhahash, cargo]);

        const novoUsuario = { 
            id: resultado[0].insertId, 
            nome: nome,
            email: email
        };
        
        res.status(201).json(novoUsuario).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};
const listarUsuarios = async (req, res) => {
    const lista = await db.query("SELECT * FROM  usuarios");
    res.json(lista[0]).end();
};

module.exports = {
    Login,
    cadastrarUsuario,
    listarUsuarios
}