-- Buscar usuários de uma cidade específica que usam Gmail
SELECT * FROM usuarios WHERE cidade = 'Diadema' AND email LIKE '%@gmail.com%';

-- Listar admins do maior nível para o menor
SELECT * FROM admins ORDER BY nivel_acesso DESC;

-- Quantos usuários temos por cidade
SELECT cidade, COUNT(*) as total FROM usuarios GROUP BY cidade;

-- Média de idade dos usuários que realizaram o teste
SELECT AVG(idade) as media_idade_interessados FROM usuarios WHERE id IN (SELECT usuario_id FROM resultados_testes);