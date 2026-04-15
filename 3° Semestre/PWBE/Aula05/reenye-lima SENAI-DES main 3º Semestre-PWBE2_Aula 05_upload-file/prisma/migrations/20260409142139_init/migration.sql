/*
  Warnings:

  - Added the required column `nomeOriginal` to the `Imagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `imagem` ADD COLUMN `nomeOriginal` VARCHAR(191) NOT NULL;
