const prisma = require("../data/prisma");

const listar = async (req, res) => {
    const turmas = await prisma.turmas.findMany();

    res.json(turmas).status(200).end();
};

const buscar = async (req, res) => {
    const {id} = req.params;

    const veiculo = await prisma.veiculos.findUnique({
        where: { id },
    });

    return res.status(200).json(veiculo);
};

const cadastrar = async (req, res) => {
    let {placa, modelo, marca, ano } = req.body;

    //placa
    if (!placa){
        return res.status(400).json({mensagem: "A placa é obrigatória!"});
    }else if (placa.length !== 7 || placa.includes(" ") === true){
        return res.status(400).json({mensagem: "Placa invalida!"});
    }

    placa = placa.toUpperCase();

    const placaExiste = veiculos.some(veiculos => 
        veiculos.placa.toUpperCase() === placa
    );

    if (placaExiste){
        return res.status(400).json({mensagem: "Já existe um carro com essa placa!"});
    }

    //marca e modelo
    if (!modelo){
        return res.status(400).json({mensagem: "O modelo é obrigatório!"});
    }

    if (!marca){
        return res.status(400).json({mensagem: "A marca é obrigatória!"});
    }

    //ano
    if (ano.length !== 4){
        return res.status(400).json({mensagem: "Ano invalido!"});
    }
    if (typeof ano !== "number") {
    return res.status(400).json({ mensagem: "Ano inválido!" });
    }

};

const atualizar = async (req, res) => {
    const { id } = req.params;
    let { placa, modelo, marca, ano } = req.body;

    // placa
    if (!placa){
        return res.status(400).json({ mensagem: "A placa é obrigatória!" });
    } else if (placa.length !== 7 || placa.includes(" ")) {
        return res.status(400).json({ mensagem: "Placa inválida!" });
    }
    placa = placa.toUpperCase();

    if (placaExiste){
        return res.status(400).json({ mensagem: "Já existe um carro com essa placa!" });
    }

    // modelo e marca
    if (!modelo){
        return res.status(400).json({ mensagem: "O modelo é obrigatório!" });
    }

    if (!marca){
        return res.status(400).json({ mensagem: "A marca é obrigatória!" });
    }

    // ano
    if (!ano || ano.toString().length !== 4 || isNaN(Number(ano))) {
        return res.status(400).json({ mensagem: "Ano inválido!" });
    }

    const veiculoAtualizado = await prisma.veiculos.update({
        where: { id },
        data: { placa, modelo, marca, ano }
    });

    return res.status(200).json(veiculoAtualizado);
}

const apagar = async (req, res) => {
    const { id } = req.params;

    const veiculo = await prisma.veiculos.delete({
        where: {id}
    });

    res.json(veiculo).status(200).end();
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    atualizar,
    apagar
};