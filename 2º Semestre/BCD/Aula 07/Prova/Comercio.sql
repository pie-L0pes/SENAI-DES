DROP DATABASE IF EXISTS comercio;
CREATE DATABASE comercio;

USE comercio;

CREATE TABLE Clientes(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150),
    email VARCHAR(150)
);

CREATE TABLE Pedidos(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    cliente_id INTEGER,
    data_pedido DATE,
    status VARCHAR(200),
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);

INSERT INTO Clientes VALUES (DEFAULT, "Fulano da Silva", "FulanoSilva@gmail.com");
INSERT INTO Clientes VALUES (DEFAULT, "Beltrano Sobrenome", "BeltranoS@gmail.com");
INSERT INTO Clientes VALUES (DEFAULT, "Salada Mista", "SMista@gmail.com");

INSERT INTO Pedidos VALUES (DEFAULT, "1", "2025-09-15", "Preparando");
INSERT INTO Pedidos VALUES (DEFAULT, "2", "2025-08-15", "Entregue");
INSERT INTO Pedidos VALUES (DEFAULT, "3", "2025-09-14", "Preparando");


UPDATE Clientes
SET email = "FulanodaSilva@gmail.com"
WHERE id = 1;

DELETE FROM Pedidos
WHERE id = 3;