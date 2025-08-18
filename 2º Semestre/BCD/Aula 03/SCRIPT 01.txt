SCRIPT 01


CREATE DATABASE loja;

USE loja;

CREATE TABLE Usuarios (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(160),
      nascimento DATE,
      endereco VARCHAR(100),
      telefone VARCHAR(11)
);

CREATE TABLE Pedidos (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      clienteId INTEGER,
      datahora DATETIME,
      nomeProduto VARCHAR(50),
      valor DECIMAL(4,3),
      FOREIGN KEY (clienteId) REFERENCES Usuarios(id)
);

INSERT INTO usuarios VALUES (DEFAULT, "Ciclano da Silva", "2000-05-20", "Rua Sem Saida, 120", "1191234756");

SELECT * FROM  usuarios;

UPDATE usuarios
SET nascimento = "1990-05-25"
WHERE id = 1


DELETE FROM usuarios
WHERE id = 2;