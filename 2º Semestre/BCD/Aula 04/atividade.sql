CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE usuarios(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL,
    email VARCHAR (100),
    nascimento DATE
);

CREATE TABLE Livros(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR (100) NOT NULL,
    autor VARCHAR (100) NOT NULL,
    publicacao VARCHAR(4)
);

CREATE TABLE Emprestimos(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    usuario_id INTEGER,
    livro_id INTEGER,
    data_emprestimo DATE,
    data_devolucao DATE
);

INSERT INTO usuarios VALUES (DEFAULT, "Pietra Vitória Lopes", "pietra.lopes@portalsesisp.org", "2009-05-07");
INSERT INTO usuarios VALUES (DEFAULT, "Tamires Guarizzo", "tamires.guarizzo@portalsesisp.org", "2009-01-28");
INSERT INTO usuarios VALUES (DEFAULT, "Mariana Carvalho", "mariana.cravalho@portalsesisp.org", "2007-12-17");

SELECT * FROM  usuarios;

SELECT * FROM `usuarios` WHERE id=2;

INSERT INTO livros VALUES (DEFAULT, "Jantar Secreto", "Raphael Montes", "2016");
INSERT INTO livros VALUES (DEFAULT, "O Amor não é obvio", "Elayne Baeta", "2019");
INSERT INTO livros VALUES (DEFAULT, "O Cotiço", "Aluísio Azevedo", "1890");

SELECT * FROM  livros;

SELECT titulo, publicacao FROM livros WHERE id=3;

INSERT INTO emprestimos VALUES (DEFAULT, "1", "1", "2025-08-25", "2025-09-25");
INSERT INTO emprestimos VALUES (DEFAULT, "2", "3", "2025-08-24", "2025-09-24");

SELECT * FROM `emprestimos`;

SELECT usuario_id, data_emprestimo FROM emprestimos;

UPDATE emprestimos
SET data_devolucao="2025-10-25"
WHERE id=1;

UPDATE emprestimos
SET data_devolucao="2025-11-25"
WHERE id=2;

SELECT data_devolucao FROM emprestimos;


DELETE FROM livros
WHERE id = 3;

SELECT * FROM `livros`;

SELECT * FROM `livros` WHERE id=3;