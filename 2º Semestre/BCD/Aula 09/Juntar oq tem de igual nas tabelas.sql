** Juntar oq tem de igual nas tabelas **

SELECT * FROM locacoes
INNER JOIN filmes
ON locacoes.filme_id = filmes.id;

SELECT locacoes.*, filmes.titulo, filmes.preco FROM locacoes
INNER JOIN filmes
ON locacoes.filme_id = filmes.id;

SELECT locacoes.*, filmes.titulo, filmes.preco FROM locacoes
INNER JOIN filmes
ON locacoes.filme_id = filmes.id
ORDER BY locacoes.id ASC;

SELECT SUM(filmes.preco) AS "Faturamento" FROM locacoes
INNER JOIN filmes
ON locacoes.filme_id = filmes.id
ORDER BY locacoes.id ASC;

SELECT 
   filmes.*,
   COUNT(filmes.preco) AS "total" 
FROM locacoes
INNER JOIN filmes
ON locacoes.filme_id = filmes.id
ORDER BY locacoes.id ASC;

SELECT 
   filmes.*,
   COUNT(filmes.preco) AS "total" 
FROM locacoes
INNER JOIN filmes
ON locacoes.filme_id = filmes.id
GROUP BY filmes.titulo;

SELECT 
   filmes.*,
   COUNT(filmes.preco) AS "total" 
FROM locacoes
INNER JOIN filmes
ON locacoes.filme_id = filmes.id
GROUP BY filmes.titulo
ORDER BY filmes.id;

SELECT 
   clientes.*,
   COUNT(locacoes.id) AS "total" 
FROM locacoes
INNER JOIN clientes
ON locacoes.cliente_id = clientes.id
GROUP BY clientes.nome
ORDER BY clientes.id;