DROP DATABASE IF EXISTS agenda_de_contatos;
CREATE DATABASE agenda_de_contatos;
USE agenda_de_contatos;

CREATE TABLE Contatos(
id INTEGER AUTO_INCREMENT PRIMARY key,
nome VARCHAR(100),
apelido VARCHAR(100),
data_nascimento DATE,
observacoes VARCHAR(300)
);
CREATE TABLE Telefones(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    contato_id INTEGER,
    tipo VARCHAR(100),
    numero VARCHAR(14),
    FOREIGN KEY (contato_id) REFERENCES contatos(id)
);

CREATE TABLE Emails (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    contato_id INTEGER,
    tipo VARCHAR(100),
    email VARCHAR(100),
    FOREIGN KEY(contato_id) REFERENCES Contatos(id)
);

CREATE TABLE Endereco(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    contato_id INTEGER,
    tipo VARCHAR(100),
    bairro VARCHAR(100),
    rua VARCHAR(100),
    numero VARCHAR(3),
    cidade VARCHAR(100),
    estado VARCHAR(100),
    cep VARCHAR(100),
    FOREIGN KEY(contato_id) REFERENCES Contatos(id)
);

INSERT into contatos (id, nome, apelido, data_nascimento, observacoes) values (DEFAULT, "Maria Clara Silva", "Clarinha", "2006-04-12", "Melhor amiga");
INSERT into contatos (id, nome, apelido, data_nascimento, observacoes) values (DEFAULT, "Joao Matheus Cargo", "Joaozinho", "2005-10-24", "Colega de trabalho");

INSERT into telefones (id, contato_id, tipo, numero) values (DEFAULT, 1, "Celular pessoal", "(19)99873-2145");
INSERT into telefones (id, contato_id, tipo, numero) values (DEFAULT, 2, "Celular de trabalho", "(19)99873-2145");

INSERT INTO Emails VALUES (DEFAULT, 1, "Pessoal", "Oii, como você está?");
INSERT INTO Emails VALUES (DEFAULT, 2, "Profissional", "Estou enviando o arquivo em anexo confome o solicitado");

INSERT INTO Endereco VALUES (DEFAULT, 1, "Residencial", "Jardim Europa", "Rua de tal", "168", "Amparo", "São Paulo", "13392-502");
INSERT INTO Endereco VALUES (DEFAULT, 2, "Residencial", "Jardim tal", "Rua de tal", "188", "Amparo", "São Paulo", "13302-505");