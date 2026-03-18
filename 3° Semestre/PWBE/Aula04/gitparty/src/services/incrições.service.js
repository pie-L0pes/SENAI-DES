const prisma = require("../data/prisma");

const limiteParticipantes = async (usuarioId, eventoId) => {
    const evento = await prisma.eventos.findUnique({
        where: { id: eventoId },
        include: {
            incricoes: true
        }
    });

    const numeroParticipantes = evento.incricoes.filter(inscricao => inscricao.status == "CONFIRMADA").length;

    console.log(numeroParticipantes);
};

module.exports = {
    limiteParticipantes
}