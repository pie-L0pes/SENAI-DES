Atividade 1

CREATE DATABASE escola;

USE escola;

CREATE TABLE Professores (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (200),
    email VARCHAR (200),
    telefone VARCHAR (15)
);

CREATE TABLE Turmas(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (200),
    periodo VARCHAR (200)
);

CREATE TABLE Diciplinas (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (200),
    professorid INTEGER,
    FOREIGN KEY (professorid) REFERENCES Professores(id)
);

CREATE TABLE possui(
    turmaid INTEGER,
    diciplinasid INTEGER,
    FOREIGN KEY (turmaid) REFERENCES Turmas(id),
    FOREIGN KEY (diciplinasid) REFERENCES Diciplinas(id)
);

INSERT INTO Professores VALUES (DEFAULT, "Eliana Machado", "eliana.machado@portalsesisp.org", "(11) 999816334");
INSERT INTO Turmas VALUES (DEFAULT, "2 A", "Manhã");
INSERT INTO Diciplinas VALUES (DEFAULT, "Portugues", "1");
INSERT INTO possui VALUES("1", "1");