/*
  Warnings:

  - You are about to alter the column `status` on the `incricoes` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `incricoes` MODIFY `status` ENUM('CONFIRMADA', 'LISTA_ESPERA', 'CANCELADA') NOT NULL DEFAULT 'CONFIRMADA';
