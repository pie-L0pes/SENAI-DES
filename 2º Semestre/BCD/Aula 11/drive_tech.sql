DROP DATABASE drive_tech1;
CREATE DATABASE drive_tech1;
USE drive_tech1;

CREATE TABLE veiculos(
    placa VARCHAR(7) PRIMARY KEY,
    modelo VARCHAR(50),
    ano VARCHAR(4)
);

CREATE TABLE vagas(
    id INTEGER PRIMARY KEY,
    setor VARCHAR(2),
    corredor VARCHAR(3),
    vaga VARCHAR(2)
);

CREATE TABLE utilizacao(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(7),
    id_vaga INTEGER,
    data DATE,
    hora_entrada TIME,
    hora_saida TIME,
    FOREIGN KEY (placa) REFERENCES veiculos(placa),
    FOREIGN KEY (id_vaga) REFERENCES vagas(id)
);

CREATE TABLE usuarios(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(30),
    senha VARCHAR(500)
);

INSERT INTO veiculos VALUES("KLM4N56", "Honda Civic", "2018");
INSERT INTO veiculos VALUES("QPR7S21", "Volkswagen Gol", "2009");
INSERT INTO veiculos VALUES("ZXY2J89", "Toyota Corolla", "2022");

INSERT INTO vagas VALUES("1", "1", "A", "A1");
INSERT INTO vagas VALUES("2", "1", "A", "A2");
INSERT INTO vagas VALUES("3", "1", "B", "B1");
INSERT INTO vagas VALUES("4", "1", "B", "B2");
INSERT INTO vagas VALUES("5", "2", "A", "A1");
INSERT INTO vagas VALUES("6", "2", "A", "A2");
INSERT INTO vagas VALUES("7", "2", "B", "B1");

INSERT INTO utilizacao VALUES(DEFAULT, "KLM4N56", "1", "2025-11-05", "12:00", "12:30");
INSERT INTO utilizacao VALUES(DEFAULT, "KLM4N56", "2", "2025-11-02", "09:00", "12:30");
INSERT INTO utilizacao VALUES(DEFAULT, "QPR7S21", "1", "2025-11-05", "12:45", "13:50");
INSERT INTO utilizacao VALUES(DEFAULT, "ZXY2J89", "4", "2025-11-06", "08:00", NULL);

SELECT 
    u.placa,
    v.modelo,
    v.ano,
    u.id_vaga,
    u.data,
    u.hora_entrada
FROM utilizacao u
JOIN veiculos v ON u.placa = v.placa
WHERE u.hora_saida IS NULL;


SELECT 
    placa,
    modelo,
    data,
    hora_entrada,
    hora_saida,
    ROUND(TIMESTAMPDIFF(MINUTE, hora_entrada, hora_saida) / 60, 2) AS horas,
    ROUND((TIMESTAMPDIFF(MINUTE, hora_entrada, hora_saida) / 60) * 5, 2) AS valor
FROM utilizacao
JOIN veiculos v ON placa = v.placa
WHERE hora_saida IS NOT NULL;


SELECT 
    u.placa,
    v.modelo,
    COUNT(u.id) AS total_estacionamentos
FROM utilizacao u
JOIN veiculos v ON u.placa = v.placa
WHERE u.placa = 'KLM4N56'
GROUP BY u.placa, v.modelo;

SELECT 
    DATE_FORMAT(u.data, '%d/%m/%Y') AS data,
    COUNT(u.id_vaga) AS vagas_ocupadas,
    (SELECT COUNT(*) FROM vagas) AS total_vagas,
    ROUND((COUNT(u.id_vaga) / (SELECT COUNT(*) FROM vagas)) * 100, 2) AS taxa_ocupacao_percentual
FROM utilizacao u
WHERE u.data = '2025-11-05'
GROUP BY u.data;

