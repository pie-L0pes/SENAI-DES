const prisma = require("../data/prisma");

const novaTurma = async (req, res) => {
    const turma = req.body;

    const nturma = await prisma.turmas.create({
        data: turma
    });

    res.json(nturma).status(201).end();
};

const listarTurmas = async (req, res) => {
    const turmas = await prisma.turmas.findMany();

    res.json(turmas).status(200).end();
};

const buscarTurma = async (req, res) => {
    const {id} = req.params;

    const turma = await prisma.turmas.findUnique({
        where: { id },
        include: { //mostrar os alunos q pertencem a turma
            alunos: true
        }
    });

    res.json(truma).status(200).end();
};

const apagarTurma = async (req, res) => {
    const { id } = req.params;

    const turma = await prisma.turmas.delete({
        where: {id}
    });

    res.json(turma).status(200).end();
};

const atualizarTurma = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const turma = await prisma.turmas.update({
        where: { id },
        data : dados
    });

    res.json(turma).status(200).end();
};

module.exports = {
    novaTurma,
    listarTurmas,
    apagarTurma,
    atualizarTurma
}