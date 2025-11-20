document.querySelector("#btnCriarConta").addEventListener("click", (event) => {
    event.preventDefault();

    // Coletando valores com querySelector
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const telefone = document.querySelector("#telefone").value;
    const idade = document.querySelector("#idade").value;
    const cidade = document.querySelector("#cidade").value;
    const escolaridade = document.querySelector("#escolaridade").value;
    const senha = document.querySelector('#senha').value;
    const confirmSenha = document.querySelector('#confirmarSenha')

    // Salvando no LocalStorage
    const dadosUsuario = [
        nome,
        email,
        telefone,
        idade,
        cidade,
        escolaridade
    ];

    function conferirCampos() {
        let camposVazios = 0
        for (let i = 0; i < dadosUsuario.length; i++) {
            if (dadosUsuario[i] == "") {
                camposVazios += 1
            }
        }

        return camposVazios != 0
    }

    function aprovarCadastro() {
        if (conferirCampos() || senha == "" || confirmSenha == "") {
            Swal.fire(
            {
                title: `<h1 style="font-family: 'Montserrat B'; font-size: 28px; color: #F3F4F6">Falha no Cadastro!</h1>`,
                html: `<p style="font-family: 'Nunito R';">Preencha todos os campos necessários.</p>`,
                icon: "error",
                background: "#1F2937",
                color: "#9CA3AF"
            })
        
        } else {
            localStorage.setItem("usuario", JSON.stringify(dadosUsuario));

            // Pop-up de confirmação
            Swal.fire(
                {
                    title: `<h1 style="font-family: 'Montserrat B'; font-size: 28px; color: #F3F4F6">Bem-Vindo, ${nome}</h1>`,
                    html: `<p style="font-family: 'Nunito R';">Seu cadastro foi realizado com sucesso.</p>`,
                    icon: "success",
                    background: "#1F2937",
                    color: "#9CA3AF"
                }
            ).then((result) => {
                window.location.href = "perguntas.html";
            })

        }
    }
    
    aprovarCadastro()
});