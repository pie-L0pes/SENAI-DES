const jsonwebtoken = require("jsonwebtoken");

const validate = (req, res, next) => {
    const token  = req.headers.authorization?.split(" ")[1];

    if(!token) res.status(401).send({message : "Access Denied. No token provided."}).end(); 
    
    try {
        const payload = jsonwebtoken.verify(token, process.env.SECRET_JWT); //validar

        req.headers['user'] = payload; //se o token for valido, vai executar o next

        next();//encaminhou para o controller
    }catch(err) {
        res.status(500).send(err).end();
    }
}

module.exports = validate;