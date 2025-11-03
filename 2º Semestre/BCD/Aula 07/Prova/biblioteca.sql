CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE Livros(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200),
    autor VARCHAR(200),
    ano INTEGER
);

CREATE TABLE Usuarios(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200),
    email VARCHAR(200)
);

CREATE TABLE Emprestimos(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    data_retirada DATE,
    data_devolucao DATE,
    usuario_id INTEGER,
    livro_id INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
    FOREIGN KEY (livro_id) REFERENCES Livros(id)
);

INSERT INTO Livros VALUES (DEFAULT, "Jantar Secreto", "Raphael Montes", "2018");
INSERT INTO Livros VALUES (DEFAULT, "Suicidas", "Raphael Montes", "2016");
INSERT INTO Livros VALUES (DEFAULT, "Uma familia feliz", "Raphael Montes", "2020");

INSERT INTO Usuarios VALUES (DEFAULT, "Fulaninho", "fulaninho@gmail");
INSERT INTO Usuarios VALUES (DEFAULT, "Beltrano Sobrenome", "BeltranoS@gmail.com");
INSERT INTO Usuarios VALUES (DEFAULT, "Salada Mista", "SMista@gmail.com");

INSERT INTO Emprestimos VALUES (DEFAULT, "2025-08-15", "", "1", "1");
INSERT INTO Emprestimos VALUES (DEFAULT, "2025-09-14", "", "2", "2");
INSERT INTO Emprestimos VALUES (DEFAULT, "2025-09-13", "", "3", "3");

UPDATE Emprestimos
SET data_devolucao = "2025-09-15"
WHERE id = 1;