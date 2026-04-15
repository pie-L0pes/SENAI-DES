const prisma = require("../data/prisma");

const fs = require("fs");

const cadastrar = async (req, res) => {
  try {
    const idPublicacao = parseInt(req.params.id);
    const arquivo = req.file;

    const pastaFinal = `uploads/publicacoes/${idPublicacao}`;
    const caminhoFinal = `${pastaFinal}/${arquivo.filename}`;

    if (!fs.existsSync(pastaFinal)) {
      fs.mkdirSync(pastaFinal, { recursive: true });
    }

    fs.renameSync(arquivo.path, caminhoFinal);

    const imagem = await prisma.imagem.create({
      data: {
        nomeOriginal: arquivo.originalname,
        nomeArquivo: arquivo.filename,
        mimeType: arquivo.mimetype,
        path: caminhoFinal,
        publicacoesId: idPublicacao,
      },
    });

    if (!imagem) {
      throw new Error("Erro ao salvar imagem no banco de dados");
    }

    res.json(imagem).status(201).end();
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.json({ error: error.message }).status(500).end();
  }
};

const listar = async (req, res) => {
  const lista = await prisma.imagem.findMany();

  res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const imagem = await prisma.imagem.findUnique({
      where: { id },
    });

    if (!imagem) {
      return res.status(404).json({ erro: "Imagem não encontrada" });
    }

    if (!fs.existsSync(imagem.path)) {
      return res
        .status(404)
        .json({ erro: "Arquivo não encontrado no servidor" });
    }

    res.sendFile(imagem.path, { root: "." });
  } catch (erro) {
    return res.status(500).json({ erro: "Erro ao buscar imagem" });
  }
};

const atualizar = async (req, res) => {
  const { id } = req.params;
  const dados = req.body;

  const item = await prisma.imagem.update({
    where: { id: Number(id) },
    data: dados,
  });

  res.json(item).status(200).end();
};

const excluir = async (req, res) => {
  const { id } = req.params;

  const item = await prisma.imagem.delete({
    where: { id: Number(id) },
  });

  res.json(item).status(200).end();
};

module.exports = {
  cadastrar,
  listar,
  buscar,
  atualizar,
  excluir,
};
