
const db = require("../data/connection");

const listarPost = async (req, res) => {
    const lista = await db.query("SELECT * FROM  posts");
    res.json(lista[0]).end();
};

const buscarPost = async (req, res) => {
    const idpost = req.params.id;
    const post = await db.query("SELECT * FROM posts WHERE  id = " + idpost);
    res.json(post[0][0]).end();
};

const createpost = async (req, res) => {
    try {
        const { titulo, conteudo } = req.body;
        const userId = req.headers['user'].id;

        const resultado = await db.query("INSERT INTO posts VALUES (DEFAULT, ?, ?, ?)", [userId, titulo, conteudo]);

        const novoPost = { 
            id: resultado[0].insertId, 
            titulo: titulo,
            conteudo: conteudo
        };
        
        res.status(201).json(novoPost).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
}

const excluirPost = async (req, res) => {
    const id = req.params.id;
    try{
        const remove = await db.query("DELETE FROM posts WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error) {
        console.log(error);

        const err = {msg : ""};

        if(error.errno === 1451){
            err.msg = "Post com locação registrada";
            
        }else if(error.code === "ECONNREFUSED") {
            err.msg = "Erro na conexão com o banco de dados";
        }

        res.status(500).json(err).send();
    }
};
const atualizarPost = async (req, res) => {
    const id = req.params.id;
    const { titulo, conteudo} = req.body;

    try{
        const update = await db.query("UPDATE posts SET  titulo = ?, conteudo =? WHERE id = ?", [titulo, conteudo, id]);

        const info  = {msg:""}

        if(update[0].affectedRows === 1){
            info.msg = "Atualizado com sucesso!";
        } else if (update[0].affectedRows === 1){
            info.msg = "Post não encontrado!";
        }
        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        res.status(500).end();
    }
};


const TotalPosts = async (req, res) =>{
    const total = await db.query("SELECT COUNT(*) AS total FROM posts");
    res.json(total[0]).end();
};


module.exports = {
    createpost,
    excluirPost,
    listarPost,
    atualizarPost,
    TotalPosts,
    buscarPost
}