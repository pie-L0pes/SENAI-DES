const validaGerente = (req, res, next) => {
    const usuario = req.headers['user'];

    if (usuario.cargo.toLowerCase() === 'gerente') {
        next();
    }else{
        res.status(401).json({
            msg: "usuario sem permissao"
        }).end();
    }
    
};

const validaEditor= (req, res, next) => {
    const usuario = req.headers['user'];

    if (usuario.cargo.toLowerCase() === 'editor'|| usuario.cargo.toLowerCase() === 'gerente') {
        next();
    }else{
        res.status(401).json({
            msg: "usuario sem permissao"
        }).end();
    }
    
};
module.exports = {
    validaGerente,
    validaEditor
}
