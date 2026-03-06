const prisma = require("../data/prisma");

const listar = async (req, res) => {
    const clientes = await prisma.Clientes.findMany();
    return res.status(200).json(clientes);
};

const buscar = async (req, res) => {
    const { id } = req.params;

    const cliente = await prisma.Clientes.findUnique({
        where: { id },
    });

    if (!cliente) {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
    }

    return res.status(200).json(cliente);
};

const cadastrar = async (req, res) => {
    let { nome_completo, cpf, email, cnh } = req.body;

    if (!nome_completo) {
        return res.status(400).json({ mensagem: "Nome completo é obrigatório" });
    }

    nome_completo = nome_completo.trim();
    if (nome_completo.length === 0) {
        return res.status(400).json({ mensagem: "Nome completo não pode conter apenas espaços" });
    }

    let partes = nome_completo.split(" ");
    if (partes.length < 2) {
        return res.status(400).json({ mensagem: "O nome deve conter pelo menos duas palavras" });
    }

    cpf = cpf.replace(".", "")
             .replace(".", "")
             .replace(".", "")
             .replace("-", "");

    if (cpf.length !== 11) {
        return res.status(400).json({ mensagem: "CPF deve conter exatamente 11 caracteres numéricos" });
    }

    for (let i = 0; i < cpf.length; i++) {
        if (cpf[i] < "0" || cpf[i] > "9") {
            return res.status(400).json({ mensagem: "CPF deve conter apenas números" });
        }
    }

    email = email.toLowerCase();
    if (!email.includes("@") || !email.includes(".")) {
        return res.status(400).json({ mensagem: "Email inválido" });
    }

    const existe = await prisma.Clientes.findFirst({
        where: { email }
    });

    if (existe) {
        return res.status(400).json({ mensagem: "Já existe cliente com esse email" });
    }

    let caracteresCnh = cnh.split("");
    let primeiroCaractere = caracteresCnh[0];

    if (primeiroCaractere < "0" || primeiroCaractere > "9") {
        return res.status(400).json({ mensagem: "CNH deve começar com número" });
    }

    const novoCliente = await prisma.clientes.create({
        data: {
            nome_completo,
            cpf,
            email,
            cnh
        }
    });

    return res.status(201).json({mensagem: "Cadastro realizado com sucesso",cliente: novoCliente});
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    let { nome_completo, cpf, email, cnh } = req.body;

    const cliente = await prisma.Clientes.findUnique({
        where: { id }
    });

    if (!cliente) {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
    }

    if (!nome_completo) {
        return res.status(400).json({ mensagem: "Nome completo é obrigatório" });
    }

    nome_completo = nome_completo.trim();
    if (nome_completo.length === 0) {
        return res.status(400).json({ mensagem: "Nome completo não pode conter apenas espaços" });
    }

    let partes = nome_completo.split(" ");
    if (partes.length < 2) {
        return res.status(400).json({ mensagem: "O nome deve conter pelo menos duas palavras" });
    }

    cpf = cpf.replace(".", "")
             .replace(".", "")
             .replace(".", "")
             .replace("-", "");

    if (cpf.length !== 11) {
        return res.status(400).json({ mensagem: "CPF deve conter exatamente 11 caracteres numéricos" });
    }

    for (let i = 0; i < cpf.length; i++) {
        if (cpf[i] < "0" || cpf[i] > "9") {
            return res.status(400).json({ mensagem: "CPF deve conter apenas números" });
        }
    }

    email = email.toLowerCase();
    if (!email.includes("@") || !email.includes(".")) {
        return res.status(400).json({ mensagem: "Email inválido" });
    }

    const existe = await prisma.Clientes.findFirst({
        where: { email }
    });

    if (existe && existe.id !== id) {
        return res.status(400).json({ mensagem: "Já existe cliente com esse email" });
    }

    let caracteresCnh = cnh.split("");
    let primeiroCaractere = caracteresCnh[0];

    if (primeiroCaractere < "0" || primeiroCaractere > "9") {
        return res.status(400).json({ mensagem: "CNH deve começar com número" });
    }

    const clienteAtualizado = await prisma.Clientes.update({
        where: { id },
        data: { nome_completo, cpf, email, cnh }
    });

    return res.status(200).json({ mensagem: "Cliente atualizado com sucesso", cliente: clienteAtualizado });
};

const apagar = async (req, res) => {
    const { id } = req.params;

    const clienteRemovido = await prisma.Clientes.delete({
        where: { id }
    });

    return res.status(200).json({ mensagem: "Cliente removido com sucesso", cliente: clienteRemovido });
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    atualizar,
    apagar
};