CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nome VARCHAR(100)
);

CREATE TABLE cursos (
  id INT PRIMARY KEY,
  titulo VARCHAR(100)
);

CREATE TABLE aulas (
  id INT PRIMARY KEY,
  curso_id INT,
  titulo VARCHAR(100),
  FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

CREATE TABLE progresso (
  id INT PRIMARY KEY,
  usuario_id INT,
  aula_id INT,
  status VARCHAR(20),
  data_conclusao DATE,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (aula_id) REFERENCES aulas(id)
);
