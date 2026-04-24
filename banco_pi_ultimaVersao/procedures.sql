use vocantis_db

DELIMITER $$
-- Registrar Resultado de Teste
-- valores IN vão vir do js
CREATE PROCEDURE sp_registrar_resultado(
    IN p_user_id INT, 
    IN p_perfil VARCHAR(50),
    IN p_nota_a INT, IN p_nota_s INT, IN p_nota_c INT, IN p_nota_p INT, IN p_nota_e INT
)
BEGIN
    INSERT INTO resultados_testes (usuario_id, perfil_dominante, nota_analitico, nota_social, nota_criativo, nota_pratico, nota_empreendedor)
    VALUES (p_user_id, p_perfil, p_nota_a, p_nota_s, p_nota_c, p_nota_p, p_nota_e);
END $$
DELIMITER ;

--  Atualizar a cidade de um usuário (Ação do sistema)
DELIMITER $$
CREATE PROCEDURE sp_atualizar_cidade(p_id INT, p_nova_cidade VARCHAR(100)) -- parametros
BEGIN
    UPDATE usuarios SET cidade = p_nova_cidade WHERE id = p_id; -- muda a cidade da tabela usuarios onde o p_id é igual a o id da tabela usuarios
END $$

-- Promover um Admin de nível
CREATE PROCEDURE sp_promover_admin(p_username VARCHAR(50), p_novo_nivel INT)
BEGIN
    UPDATE admins SET nivel_acesso = p_novo_nivel WHERE username = p_username; -- mesma coisa que a de cima só que muda o nivel e é pelo username
END $$
DELIMITER ;