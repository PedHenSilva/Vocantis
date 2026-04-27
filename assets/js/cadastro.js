document.querySelector("#btnCriarConta").addEventListener("click", async (event) => {
    event.preventDefault();

    // trim() -> tira espaços das entradas
    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const telefone = document.querySelector("#telefone").value.trim();
    const idade = document.querySelector("#idade").value.trim();
    const cidade = document.querySelector("#cidade").value.trim();
    const escolaridade = document.querySelector("#escolaridade").value;
    const senha = document.querySelector('#senha').value;
    const confirmSenha = document.querySelector('#confirmarSenha').value;

    // Validação de Campos Vazios
    if (nome === "" || email === "" || telefone === "" || idade === "" || cidade === "" || senha === "") {
        Swal.fire({
            title: `<h1 style="font-family: 'Montserrat B'; font-size: 28px; color: #F3F4F6">Campos Vazios!</h1>`,
            html: `<p style="font-family: 'Nunito R';">Por favor, preencha todos os campos necessários.</p>`,
            icon: "error",
            background: "#1F2937",
            color: "#9CA3AF"
        });
        return;
    }

    if (senha !== confirmSenha) {
        Swal.fire({
            title: `<h1 style="font-family: 'Montserrat B'; font-size: 28px; color: #F3F4F6">Senhas Diferentes!</h1>`,
            html: `<p style="font-family: 'Nunito R';">A confirmação de senha diverge da senha digitada.</p>`,
            icon: "warning",
            background: "#1F2937",
            color: "#9CA3AF"
        });
        return;
    }

    // Preparando os dados
    const dadosFormulario = new URLSearchParams();
    dadosFormulario.append('nome', nome);
    dadosFormulario.append('email', email);
    dadosFormulario.append('telefone', telefone);
    dadosFormulario.append('idade', idade);
    dadosFormulario.append('cidade', cidade);
    dadosFormulario.append('escolaridade', escolaridade);
    dadosFormulario.append('senha', senha);

    try {
        // Enviando para o MySQL
        const response = await fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: dadosFormulario
        });

        if (response.ok) {
            // Sucesso no Banco de Dados
            Swal.fire({
                title: `<h1 style="font-family: 'Montserrat B'; font-size: 28px; color: #F3F4F6">Bem-Vindo, ${nome}</h1>`,
                html: `<p style="font-family: 'Nunito R';">Seu cadastro foi concluído!</p>`,
                icon: "success",
                background: "#1F2937",
                color: "#9CA3AF"
            }).then(() => {
                window.location.href = "perguntas.html";
            });
        } else {
            // Erro retornado pelo servidor (ex: email já cadastrado)
            const erroTexto = await response.text();
            Swal.fire({
                title: `<h1 style="font-family: 'Montserrat B'; font-size: 28px; color: #F3F4F6">Erro no cadastro!</h1>`,
                html: `<p style="font-family: 'Nunito R';">${erroTexto}</p>`,
                icon: "error",
                background: "#1F2937",
                color: "#9CA3AF"
            });
        }

    } catch (error) {
        // Erro de conexão (Servidor desligado)
        Swal.fire({
            title: `<h1 style="font-family: 'Montserrat B'; font-size: 28px; color: #F3F4F6">Falha na Conexão!</h1>`,
            html: `<p style="font-family: 'Nunito R';">Não foi possível contatar o servidor.</p>`,
            icon: "error",
            background: "#1F2937",
            color: "#9CA3AF"
        }).then(() => {
            window.location.href = "perguntas.html"; 
        });
    }
});