Atividade 2

CREATE DATABASE mecanico;

USE mecanico;

CREATE TABLE Clientes(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (200),
    cpf VARCHAR (11)
);

CREATE TABLE Veiculos (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR (200),
    placa VARCHAR (200),
    categoria VARCHAR (200)
);

CREATE TABLE Contratos (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    data_inicio DATE,
    data_fim DATE,
    valor DECIMAL (10, 2),
    veiculoid INTEGER,
    clienteid INTEGER,
    FOREIGN KEY (veiculoid) REFERENCES Veiculos(id),
    FOREIGN KEY (clienteid) REFERENCES Clientes(id)
);

CREATE TABLE Manutencoes(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR (200),
    observacao VARCHAR (200),
    dia DATE,
    veiculoid INTEGER,
    FOREIGN KEY (veiculoid) REFERENCES Veiculos(id)
);

INSERT INTO Clientes VALUES(DEFAULT, "Pietra", "48128888896");
INSERT INTO Veiculos VALUES(DEFAULT, "Porshe GTR", "GPW 123", "Esportivo");
INSERT INTO Contratos VALUES(DEFAULT, "2025-09-01", "2026-09-01", "129.23", "1", "1");
INSERT INTO Manutencoes VALUES(DEFAULT, "Escapamento", "Escape direto", "2025-09-02", "1");

