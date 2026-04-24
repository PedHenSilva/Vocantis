-- função que retorna uma mensagem de boas-vindas personalizada
DELIMITER $$
CREATE FUNCTION fn_saudacao_usuario(p_nome VARCHAR(100)) -- pega o parametro inserido nela e mostra a mensagem personalizada
RETURNS VARCHAR(150) DETERMINISTIC
BEGIN
    RETURN CONCAT('Olá, ', p_nome, '! Bem-vindo ao Vocantis.');
END $$
DELIMITER ;

SELECT email, fn_saudacao_usuario(nome) AS mensagem_personalizada FROM usuarios; -- chamou ela e o parametro viro a coluna 'nome' da tabela usuarios

-- Retorna a faixa etária baseada na idade (Cálculo derivado)
DELIMITER $$
CREATE FUNCTION fn_classificar_faixa_etaria(p_idade INT) 
RETURNS VARCHAR(20) 
BEGIN
    DECLARE v_faixa VARCHAR(20);
    IF p_idade < 18 THEN SET v_faixa = 'Menor de Idade';
    ELSEIF p_idade <= 25 THEN SET v_faixa = 'Jovem Adulto';
    ELSEIF p_idade <= 50 THEN SET v_faixa = 'Adulto';
    ELSE SET v_faixa = 'Sênior';
    END IF;
    RETURN v_faixa;
END $$

DELIMITER ;

SELECT nome, fn_classificar_faixa_etaria(idade) FROM usuarios;