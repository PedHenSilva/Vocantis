-- todas informaçoes do usuario
CREATE OR REPLACE VIEW vw_relatorio_testes AS
SELECT u.nome, u.email, u.cidade, r.perfil_dominante, r.data_realizacao
FROM usuarios u
INNER JOIN resultados_testes r ON u.id = r.usuario_id;

-- lista apenas usuários que já completaram o curso (Graduados ou Pós)
CREATE VIEW view_usuarios_graduados AS
SELECT nome, email, escolaridade 
FROM usuarios 
WHERE escolaridade IN ('Graduação Completa', 'Pós-Graduado', 'Mestre', 'Doutor');

-- painel de Controle (Mostra Admins e seus níveis de poder)
CREATE VIEW view_painel_admin AS
SELECT username, 
	CASE -- caso o nivel de acesso for igual ou maior que 5 ele é ADM se não é moderador
	WHEN nivel_acesso >= 5 THEN 'ADM'
	ELSE 'Moderador'
	END AS cargo -- as é para dar o nome a coluna
FROM admins;