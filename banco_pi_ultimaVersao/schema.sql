CREATE DATABASE vocantis_db;
USE vocantis_db;

CREATE TABLE usuarios (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
-- O ENUM garante que só esses textos sejam aceitos, pq só tem essas opções na hora do cadastro
escolaridade ENUM(
	'Ensino Médio Completo', 
	'Técnico', 
	'Graduação Completa', 
	'Graduação Incompleta', 
	'Pós-Graduado', 
	'Mestre', 
	'Doutor', 
	'Prefiro não dizer'
),
cidade VARCHAR(100),
senha VARCHAR(50) NOT NULL
);

CREATE TABLE admins (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50) UNIQUE NOT NULL,
nivel_acesso INT DEFAULT 1 
-- nivel 1 basico, 5 maximo
-- Exemplo: Verificar se o admin logado pode excluir alguém
-- SELECT nivel_acesso FROM admins WHERE username = 'admin_geral'
-- Se o resultado for 5, o código JavaScript mostra um botão chamado "Excluir Usuário"
-- Se o resultado for 1, o seu código simplesmente não tem esse botão na tela, ou bloqueia
);

CREATE TABLE IF NOT EXISTS resultados_testes (
id INT AUTO_INCREMENT PRIMARY KEY,
usuario_id INT NOT NULL,
perfil_dominante VARCHAR(50) NOT NULL,
data_realizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

nota_analitico INT DEFAULT 0,
nota_social INT DEFAULT 0,
nota_criativo INT DEFAULT 0,
nota_pratico INT DEFAULT 0,
nota_empreendedor INT DEFAULT 0,

CONSTRAINT fk_usuario_resultado FOREIGN KEY (usuario_id) 
REFERENCES usuarios(id) ON DELETE CASCADE
);