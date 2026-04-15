const prisma = require("../data/prisma");
const fs = require("fs");

const cadastrar = async (req, res) => {
  try {
    const eventoId = parseInt(req.params.id);
    const arquivo = req.file;

    const pastaFinal = `uploads/eventos/${eventoId}`;
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
        eventoId: eventoId,
      },
    });

    res.status(201).json(imagem);

  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: error.message });
  }
};

const listar = async (req, res) => {
  const lista = await prisma.imagem.findMany();
  res.status(200).json(lista);
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
      return res.status(404).json({ erro: "Arquivo não encontrado no servidor" });
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

  res.status(200).json(item);
};

const excluir = async (req, res) => {
  const { id } = req.params;

  const item = await prisma.imagem.delete({
    where: { id: Number(id) },
  });

  res.status(200).json(item);
};

module.exports = {
  cadastrar,
  listar,
  buscar,
  atualizar,
  excluir,
};