Script Certo 3

CREATE DATABASE Curso;

USE Curso;

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
  FOREIGN KEY (curso_id) REFERENCES CursoS(id)
);

CREATE TABLE Progresso(
  id INT PRIMARY KEY,
  usuario_id INT,
  aula_id INT,
  status VARCHAR(20),
  data_conclusao DATE,
  FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
  FOREIGN KEY (aula_id) REFERENCES Aulas(id)
);


INSERT INTO Usuarios VALUES("1", "Pietra Vitória Fernandes Lopes");
INSERT INTO Cursos VALUES("1", "ADS");
INSERT INTO Aulas VALUES("1", "1", "Banco de dados");
INSERT INTO Progresso VALUES("1", "1", "1", "Em progresso", "2026-12-01");

