USE locadora;

SELECT SUM(preco) AS total FROM locacoes;

SELECT SUM(preco) AS total FROM locacoes WHERE status = "Entregue";


SELECT AVG(preco) AS preco_medio FROM filmes WHERE categoria = "Comédia";

SELECT AVG(preco) AS preco_medio FROM locacoes WHERE status = "Pendente";


SELECT COUNT(*) AS total_filmes FROM filmes;

SELECT COUNT(*) AS locacoes_ano FROM locacoes WHERE YEAR(data_locacao)= 2025;


SELECT MAX(preco) AS maior_preco FROM filmes;

SELECT MAX(data_locacao) AS maior_data FROM locacoes;


SELECT MIN(preco) AS menor_preco FROM filmes WHERE categoria="Terror";

SELECT MIN(data_locacao) AS menor_data FROM locacoes;


SELECT CONCAT(cliente_id, ' alugou ', filme_id) AS descricao FROM locacoes;

SELECT CONCAT(cliente_id, ' alugou ', filme_id, ' em ', data_locacao) AS descricao FROM locacoes;


SELECT nome, LENGTH(nome) AS tamanho_nome FROM clientes;

SELECT * FROM filmes WHERE LENGTH(titulo) > 15;


SELECT LOWER(titulo) AS titulo_minusculo FROM filmes;

SELECT LOWER(nome) AS cliente_minusculo FROM clientes;


SELECT UPPER(nome) AS cliente_maiusculo FROM clientes;

SELECT UPPER(categoria) AS filme_maiusculo FROM filmes;


SELECT ROUND(preco) AS preco_inteiro FROM filmes;

SELECT ROUND(preco, 1) AS preco_inteiro FROM filmes;


SELECT preco, POW(preco, 2) AS preco_ao_quadrado FROM filmes;

SELECT id, POW(2, id) AS dois_elevado_id FROM clientes;


SELECT id, MOD(id, 2) AS par_ou_impar FROM clientes;

SELECT id, MOD(id, 3) AS resto_div_3 FROM filmes;



SELECT NOW() AS data_hora_atual;

SELECT * FROM locacoes WHERE data_locacao < CURDATE();


SELECT data_locacao, DAY(data_locacao) AS dia FROM locacoes;

SELECT data_locacao, MONTH(data_locacao) AS mes FROM locacoes WHERE MONTH(data_locacao)=3;

