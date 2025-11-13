const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');

const Login = async (req, res) => {
    const { email, senha } = req.body;
    
    try {
        const senhahash = crypto.createHash('MD5').update(senha).digest('hex').toString();

        const usuario = await db.query("SELECT * FROM usuarios WHERE email = ? AND senha = ?", [email, senhahash]);

        if(usuario[0].length === 0) res.status(401).send({message:'E-mail or Password incorrect !'});

        const token = jsonwebtoken.sign(
            {
                id: usuario[0][0].id,
                email: usuario[0][0].email
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
    const {email, senha} = req.body;

    try {
        const senhahash = crypto.createHash('MD5').update(senha).digest('hex').toString();

        const resultado = await db.query("INSERT INTO usuarios VALUES (DEFAULT, ?, ?)", [email, senhahash]);

        const novoUsuario = { 
            id: resultado[0].insertId, 
            email: email
        };
        
        res.status(201).json(novoUsuario).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

module.exports = {
    Login,
    cadastrarUsuario
}