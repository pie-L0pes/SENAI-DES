const prisma = require("../data/prisma");
const { limiteParticipantes, verificarDuplicidade, verificarPrazoCancelamento, atualizarListaEspera } = require("../services/incrições.service");

const cadastrar = async (req, res) => {
    try{
    const data = req.body;

    await verificarDuplicidade(data.usuariosId, data.eventosId);

    let status =  await limiteParticipantes(data.usuariosId, data.eventosId);

    data.status = status;

    const inscricao = await prisma.incricoes.create({
        data
    });

    res.json(inscricao).status(201).end();
}catch(error){
    res.status(500).json(error.toString()).end();
}
};

const listar = async (req, res) => {
    const lista = await prisma.incricoes.findMany();

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.incricoes.findUnique({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    const item = await prisma.incricoes.update({
        where: { id : Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    try {
        const { id } = req.params;

        const inscricao = await prisma.incricoes.findUnique({
            where: { id: Number(id) }
        });

        await verificarPrazoCancelamento(inscricao.eventosId);

        const eraConfirmada = inscricao.status === "CONFIRMADA";

        const item = await prisma.incricoes.delete({
            where: { id: Number(id) }
        });

        if (eraConfirmada) {
            await atualizarListaEspera(inscricao.eventosId);
        }

        res.json(item).status(200).end();

    } catch (error) {
        res.status(500).json(error.toString()).end();
    }
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}


// let hoje = new Date();
// let algumaData = new Date("2026-04-08 10:00");

// // algumaData - hoje -> intervalo em milisegundos

// //Atualização status incrição
// //cancelar a inscrição
// // SE status == Confirmada
// //WHERE  eventosid == id && status == "lista espera" ORDER BY data_incricao