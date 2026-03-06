const prisma = require("../data/prisma");

const listar = async (req, res) => {
    const veiculos = await prisma.veiculo.findMany();
    return res.status(200).json(veiculos);
};

const buscar = async (req, res) => {
    const { id } = req.params;

    const veiculo = await prisma.veiculo.findUnique({
        where: { id },
    });

    if (!veiculo) {
        return res.status(404).json({ mensagem: "Veículo não encontrado" });
    }

    return res.status(200).json(veiculo);
};

const cadastrar = async (req, res) => {
    let { placa, modelo, marca, ano } = req.body;

    if (!placa) {
        return res.status(400).json({ mensagem: "A placa é obrigatória!" });
    } else if (placa.length !== 7) {
        return res.status(400).json({ mensagem: "Placa inválida!" });
    } else if (placa.includes(" ")) {
        return res.status(400).json({ mensagem: "Placa inválida!" });
    }

    placa = placa.toUpperCase();

    const placaExiste = await prisma.veiculo.findFirst({
        where: { placa }
    });

    if (placaExiste) {
        return res.status(400).json({ mensagem: "Já existe um carro com essa placa!" });
    }

    if (!modelo) {
        return res.status(400).json({ mensagem: "O modelo é obrigatório!" });
    }

    if (!marca) {
        return res.status(400).json({ mensagem: "A marca é obrigatória!" });
    }

    ano = ano.toString();

    if (ano.length !== 4) {
        return res.status(400).json({ mensagem: "Ano inválido!" });
    }

    const letras = ano.split("").some(c => c < "0" || c > "9");
    if (letras) {
        return res.status(400).json({ mensagem: "Ano inválido! Deve conter apenas números" });
    }

    const novoVeiculo = await prisma.veiculo.create({
        data: { placa, modelo, marca, ano }
    });

    return res.status(201).json({ mensagem: "Cadastro realizado com sucesso", veiculo: novoVeiculo });
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    let { placa, modelo, marca, ano } = req.body;

    const veiculoAtual = await prisma.veiculo.findUnique({
        where: { id }
    });

    if (!veiculoAtual) {
        return res.status(404).json({ mensagem: "Veículo não encontrado" });
    }

    if (!placa) {
        return res.status(400).json({ mensagem: "A placa é obrigatória!" });
    } else if (placa.length !== 7) {
        return res.status(400).json({ mensagem: "Placa inválida!" });
    } else if (placa.includes(" ")) {
        return res.status(400).json({ mensagem: "Placa inválida!" });
    }

    placa = placa.toUpperCase();

    const placaExiste = await prisma.veiculo.findFirst({
        where: { placa }
    });

    if (placaExiste) {
        return res.status(400).json({ mensagem: "Já existe um carro com essa placa!" });
    }

    if (!modelo) {
        return res.status(400).json({ mensagem: "O modelo é obrigatório!" });
    }

    if (!marca) {
        return res.status(400).json({ mensagem: "A marca é obrigatória!" });
    }

    ano = ano.toString();

    if (ano.length !== 4) {
        return res.status(400).json({ mensagem: "Ano inválido!" });
    }

    const letras = ano.split("").some(c => c < "0" || c > "9");
    if (letras) {
        return res.status(400).json({ mensagem: "Ano inválido! Deve conter apenas números" });
    }

    const veiculoAtualizado = await prisma.veiculo.update({
        where: { id },
        data: { placa, modelo, marca, ano }
    });

    return res.status(200).json({ mensagem: "Veículo atualizado com sucesso"});
};

const apagar = async (req, res) => {
    const { id } = req.params;

    const veiculoRemovido = await prisma.veiculo.delete({
        where: { id }
    });

    return res.status(200).json({ mensagem: "Veículo removido com sucesso"});
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    atualizar,
    apagar
};