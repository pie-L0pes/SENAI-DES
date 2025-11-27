DROP DATABASE IF EXISTS biblioteca1;
CREATE DATABASE biblioteca1;

USE biblioteca1;

CREATE TABLE alunos(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    turma VARCHAR(10)
);

CREATE TABLE salas(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    capacidade INTEGER
);

CREATE TABLE reservas(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    data_reserva DATE,
    horario TIME,
    id_aluno INTEGER,
    id_sala INTEGER,
    FOREIGN KEY (id_aluno) REFERENCES alunos(id),
    FOREIGN KEY (id_sala) REFERENCES salas(id)
);

INSERT INTO alunos VALUES(DEFAULT, "Luiza Amaral", "2A EM");
INSERT INTO alunos VALUES(DEFAULT, "Julia Novo", "2A EM");
INSERT INTO alunos VALUES(DEFAULT, "Heloisa Fernandes", "6B");

INSERT INTO salas VALUES(DEFAULT, "Sala Amarela", 5);
INSERT INTO salas VALUES(DEFAULT, "Sala Vermelha", 8);
INSERT INTO salas VALUES(DEFAULT, "Sala Rosa", 10);

INSERT INTO reservas VALUES(DEFAULT, "2025-11-27", "11:30", 1, 3);
INSERT INTO reservas VALUES(DEFAULT, "2025-11-28", "11:50", 2, 1);
INSERT INTO reservas VALUES(DEFAULT, "2025-11-29", "16:30", 3, 2);

SELECT salas.nome AS Sala, COUNT(reservas.id) AS Total_Reservas
FROM reservas
JOIN salas ON reservas.id_sala = salas.id
GROUP BY salas.id;

SELECT alunos.nome AS Aluno, COUNT(reservas.id) AS Total_Reservas
FROM reservas
JOIN alunos ON reservas.id_aluno = alunos.id
GROUP BY alunos.id;