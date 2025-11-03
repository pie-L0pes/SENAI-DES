DROP DATABASE IF EXISTS teste;
CREATE DATABASE teste;

USE teste;

CREATE TABLE Alunos(
    id INT PRIMARY KEY,
    nome VARCHAR(200),
    email VARCHAR(200)
);

CREATE TABLE matriculas(
    id INT PRIMARY KEY,
    aluno INT,
    curso INT,
    data_matricula DATE,
    FOREIGN KEY (aluno) REFERENCES Alunos(id)
);