Script Certo 1

CREATE DATABASE Empresa;

USE Empresa;

CREATE TABLE Departamento(
  id INTEGER PRIMARY KEY,
  nome VARCHAR(100)
);

CREATE TABLE Funcionarios(
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  cargo VARCHAR(50),
  departamento INT,
  FOREIGN KEY (departamento) REFERENCES Departamento(id)
);

INSERT INTO Departamento VALUES("1", "parte1");
INSERT INTO Funcionarios VALUES("1", "Pietra", "Gerente", "1");
