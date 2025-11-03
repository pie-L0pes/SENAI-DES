const usuarios = require("../data/usuarios.data");

//Define função utilizada na rota
//req -> Resquest (Requisição)
//res -> Response (Resposta)

const listar = (req, res) => {
    res.send(usuarios).end();
};

const buscar = (req, res) => {
    const matricula = req.params.matricula;

    var user ;

    usuarios.forEach((usuario, index) => {
        if(usuario.matricula === matricula){
            user = usuario;
        }
    });

if(user === "") user = "Nao Encontrado";

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    usuarios.push(data);
    res.status(201).send("cadastrado com sucesso").end();
};

const apagar = (req, res) => {
    const matricula = req.params.matricula;

    var indice = -1;

    usuarios.forEach((usuario, index) => {
        if(usuario.matricula === matricula){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        usuarios.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) =>{
    const user = req.body;

    usuarios.forEach((usuario, index) => {
        if(usuario.matricula == user.matricula){
            usuarios[index] = user;
            encontrei = true;
        }
    });

    if(encontrei === false){
        res.status(404).end();
    }else{
        res.status(201).end();
    }
};

const alterar = (req, res) => {
    const userUpdate = req.body;
    const matricula = req.params.matricula;
    var indice = -1;

    usuarios.forEach((usuario, index) => {
        if(usuario.matricula === matricula){
            indice = index;
        }
    });
    if (indice === -1){
        res.status(404).end();
    }else{
        Object.keys(userUpdate).forEach((chave) => {
        usuarios[indice][chave] = userUpdate[chave] 
    });

        res.status(200).end();

    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar, 
    atualizar, 
    alterar
}