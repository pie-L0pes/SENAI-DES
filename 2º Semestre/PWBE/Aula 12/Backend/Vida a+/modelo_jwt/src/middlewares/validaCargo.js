const validaAdministrador = (req, res, next) => {
    const usuario = req.headers['user'];

    if (usuario.cargo.toLowerCase() === 'administrador') {
        next();
    }else{
        res.status(401).json({
            msg: "usuario sem permissao"
        }).end();
    }
};

const validaAtendente = (req, res, next) => {
    const usuario = req.headers['user'];

    if (usuario.cargo.toLowerCase() === 'administrador'|| usuario.cargo.toLowerCase() === 'atendente') {
        next();
    }else{
        res.status(401).json({
            msg: "usuario sem permissao"
        }).end();
    }
};

const validaMedico = (req, res, next) => {
    const usuario = req.headers['user'];

    if (usuario.cargo.toLowerCase() === 'administrador'|| usuario.cargo.toLowerCase() === 'medico') {
        next();
    }else{
        res.status(401).json({
            msg: "usuario sem permissao"
        }).end();
    }
};

module.exports = {
    validaAdministrador,
    validaAtendente,
    validaMedico
};