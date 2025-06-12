document.getElementById("cadastro-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;
    const confirmarSenha = document.getElementById("confirm-password").value;

    // Validando se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    // Validação de formato de e-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Armazenando dados (em produção, use criptografia)
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    alert("Cadastro realizado com sucesso!");
    window.location.href = "../login/login.html";
});
