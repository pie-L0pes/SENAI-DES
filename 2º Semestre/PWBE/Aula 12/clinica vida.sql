DROP DATABASE IF EXISTS Clinica_A;
CREATE DATABASE Clinica_A;
USE Clinica_A;

CREATE TABLE Usuarios(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150),
    email VARCHAR(150),
    senha VARCHAR(20), 
    cargo VARCHAR(40)
);

CREATE TABLE Pacientes(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150),
    email VARCHAR(150),
    telefone VARCHAR(11),
    cpf VARCHAR(11),
    endereco VARCHAR(100)
);

CREATE TABLE Medicos (
    id INTEGER,
    nome VARCHAR(150),
    email VARCHAR(150),
    telefone VARCHAR(11),
    cpf VARCHAR(11),
    endereco VARCHAR(100),
    especialidade VARCHAR(100),
    FOREIGN KEY (id) REFERENCES Usuarios(id)
);

CREATE TABLE Consultas (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    idCliente INTEGER,
    idMedico INTEGER,
    data DATE,
    hora TIME,
    status VARCHAR(30),
    FOREIGN KEY (idCliente) REFERENCES Pacientes(id),
    FOREIGN KEY (idMedico) REFERENCES Medicos(id)
);

USE clinica_A;

INSERT INTO usuarios (nome, email, senha, cargo)
VALUES ("Beltrano Nascimento", "benascimento@gmail", "Beltrin123", "Médico");

INSERT INTO usuarios (nome, email, senha, cargo)
VALUES ("Juliana Morais", "moraisju@icloud", "458Julimo", "Administrador");

INSERT INTO usuarios (nome, email, senha, cargo)
VALUES ("Vitor dos santos", "sanvi@hotmail", "Vittos756", "Atendente");

INSERT INTO pacientes (nome, email, telefone, cpf, endereco)
VALUES ("Carolina da silva", "silvaca@gmail", "85426-2016", "454397455", "Ruasemsaida, 31");

INSERT INTO pacientes (nome, email, telefone, cpf, endereco)
VALUES ("Arthur Lopes", "lopear@hotmail", "15726-4892", "156203875", "Ruafimdela, 108");

INSERT INTO pacientes (nome, email, telefone, cpf, endereco)
VALUES ("Otavio Almeida", "otavial@gmail", "15628-7520", "754236984", "Ruacasaperdida, 700");

INSERT INTO medicos (id, nome, email, telefone, cpf, endereco, especialidade)
VALUES ("1", "Derek Magalhães", "magarek@hotmail", "42165-7462", "965742384", "Ruadiamantes, 465", "Neurocirurgião");

INSERT INTO medicos (id, nome, email, telefone, cpf, endereco, especialidade)
VALUES ("2", "Cristina de Fatima", "fatmiscris@gmail", "36524-8652", "478521039", "Ruadireita, 100", "Ortopedista");

INSERT INTO medicos (id, nome, email, telefone, cpf, endereco, especialidade)
VALUES ("3", "Gabriela Junqueira", "junquigab@hotma", "23547-6154", "975621084", "Ruaesquerda, 89", "Clinico geral");

INSERT INTO consultas (idCliente, idMedico, data, hora, status)
VALUES ("2", "3", "2025-04-25", "18:10", "em andamento");

INSERT INTO consultas (idCliente, idMedico, data, hora, status)
VALUES ("3", "1", "2025-08-17", "09:30", "concluida");

INSERT INTO consultas (idCliente, idMedico, data, hora, status)
VALUES ("1", "2", "2025-10-29", "15:20", "cancelada");