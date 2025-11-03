Script Certo 2

CREATE DATABASE Cursinho;

USE Cursinho;

CREATE TABLE Usuarios(
  id INT PRIMARY KEY,
  nome VARCHAR(100)
);

CREATE TABLE Cursos(
  id INT PRIMARY KEY,
  titulo VARCHAR(100)
);

CREATE TABLE Aulas(
  id INT PRIMARY KEY,
  curso_id INT,
  titulo VARCHAR(100),
  FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

CREATE TABLE Progresso(
  id INT PRIMARY KEY,
  usuario_id INT,
  aula_id INT,
  status VARCHAR(20),
  data_conclusao DATE,
  FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
  FOREIGN KEY (aula_id) REFERENCES aulas(id)
);

INSERT INTO Usuarios VALUES ("1", "Pietra");
INSERT INTO Cursos VALUES ("1", "ADS");
INSERT INTO Aulas VALUES ("1", "1", "Banco de Dados");
INSERT INTO Progresso VALUES ("1", "1", "1", "em andamento", "2026-12-01");