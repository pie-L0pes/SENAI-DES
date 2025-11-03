const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');

const Login = async (req, res) => {
    const { user, psw } = req.body;
    
    try {
        const senhahash = crypto.createHash('MD5').update(psw).digest('hex').toString();

        const usuario = await db.query("SELECT * FROM users WHERE email = ? AND senha = ?", [user, senhahash]);

        if(usuario[0].length === 0) res.status(401).send({message:'E-mail or Password incorrect !'});

        const token = jsonwebtoken.sign( //Validando se o usuario tem esse nivel de acesso para realizar isso
            {
                id: usuario[0][0].id,
                nome: usuario[0][0].nome
            },
            process.env.SECRET_JWT,
            { expiresIn: "2min" } //Depois de dois minutos esse login não terá mais validade
        );

        res.status(200).json({ token : token }).end();
    }catch(err) {
        res.status(500).send(err).end();
    }
    
    res.status(200).end();
};

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, cargo } = req.body;

    try {
        const senhahash = crypto.createHash('MD5').update(senha).digest('hex').toString(); //tranformou a senha do usuario em hash "codigo"

        const resultado = await db.query("INSERT INTO users VALUES (DEFAULT, ?, ?, ?, ?)", [nome, email, senhahash, cargo]);

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

module.exports = {
    Login,
    cadastrarUsuario
}