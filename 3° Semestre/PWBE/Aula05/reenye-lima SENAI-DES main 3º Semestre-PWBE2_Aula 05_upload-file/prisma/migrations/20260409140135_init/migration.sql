/*
  Warnings:

  - You are about to drop the `imagens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `publicacoes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `imagens` DROP FOREIGN KEY `Imagens_publicacoesId_fkey`;

-- DropTable
DROP TABLE `imagens`;

-- DropTable
DROP TABLE `publicacoes`;

-- CreateTable
CREATE TABLE `Publicacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `local` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Imagem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeArquivo` VARCHAR(191) NOT NULL,
    `mimeType` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `publicacoesId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Imagem` ADD CONSTRAINT `Imagem_publicacoesId_fkey` FOREIGN KEY (`publicacoesId`) REFERENCES `Publicacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
