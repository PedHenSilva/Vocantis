USE vocantis_db;
INSERT INTO usuarios (nome, email, escolaridade, cidade, senha) VALUES 
('Lucas Silva', 'lucas.silva@gmail.com', 'Técnico', 'Diadema', 'senha123'),
('Beatriz Santos', 'bia.santos@outlook.com', 'Graduação Completa', 'São Bernardo', 'bia@2024'),
('Carlos Oliveira', 'carlos.edu@gmail.com', 'Ensino Médio Completo', 'Diadema', 'cadu99'),
('Fernanda Lima', 'fer.lima@yahoo.com.br', 'Pós-Graduado', 'Santo André', 'nanda_root'),
('Ricardo Souza', 'ricardo.souza@gmail.com', 'Mestre', 'São Paulo', 'ric12345');

-- Inserindo 2 Administradores com diferentes níveis de acesso
-- Nível 5: Super Admin (Acesso Total)
-- Nível 1: Moderador (Acesso Básico)
INSERT INTO admins (username, nivel_acesso) VALUES 
('admin_master', 5),
('moderador_voca', 1);

-- inserts dos resultados dos testes
INSERT INTO resultados_testes (usuario_id, perfil_dominante, nota_analitico, nota_social, nota_criativo, nota_pratico, nota_empreendedor) VALUES 
(1, 'Analítico', 80, 20, 40, 50, 30),
(2, 'Social', 30, 90, 60, 20, 50),
(3, 'Criativo', 40, 50, 85, 30, 60);