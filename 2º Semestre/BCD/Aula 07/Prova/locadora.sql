USE locadora;

SELECT * FROM locacoes WHERE status = 'Pendente';

SELECT * FROM locacoes WHERE status <> 'Cancelado';

SELECT * FROM locacoes WHERE categoria = "Ação" AND status = 'Entregue';

SELECT * FROM locacoes WHERE filme LIKE '%Velozes%';

SELECT * FROM locacoes WHERE Categoria = 'Comédia' OR Categoria = 'Terror' OR Categoria = 'Animação';

SELECT * FROM locacoes WHERE data_locacao BETWEEN '2025-01-01' AND '2025-01-31';

SELECT * FROM locacoes ORDER BY data_locacao DESC;

SELECT * FROM locacoes LIMIT 10 OFFSET 10;

SELECT
  cliente_nome AS "Nome_cliente",
  filme AS "Nome_filme"
FROM locacoes;
