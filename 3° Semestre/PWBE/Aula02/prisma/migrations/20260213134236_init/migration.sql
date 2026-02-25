-- CreateTable
CREATE TABLE `Turmas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `quantidade` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alunos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `matricula` VARCHAR(191) NOT NULL,
    `turmasId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Alunos` ADD CONSTRAINT `Alunos_turmasId_fkey` FOREIGN KEY (`turmasId`) REFERENCES `Turmas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
