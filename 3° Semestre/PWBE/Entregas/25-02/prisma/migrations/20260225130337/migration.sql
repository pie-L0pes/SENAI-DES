/*
  Warnings:

  - Added the required column `marca` to the `veiculo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `veiculo` ADD COLUMN `marca` VARCHAR(191) NOT NULL;
