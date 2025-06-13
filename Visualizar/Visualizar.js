document.getElementById("pesquisa").addEventListener("input", async function () {
    const termo = this.value.toLowerCase();

    try {
        const response = await fetch(`/api/pesquisar?termo=${encodeURIComponent(termo)}`);
        const dados = await response.json();
        atualizarTabela(dados);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
});

function atualizarTabela(dados) {
    const tbody = document.querySelector("#tabelaMaquinas tbody");
    tbody.innerHTML = "";

    if (dados.length === 0) {
        document.getElementById("semDados").style.display = "block";
        return;
    }

    document.getElementById("semDados").style.display = "none";

    dados.forEach((item) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${item.localidade}</td>
            <td>${item.dispositivo}</td>
            <td>${item.serie}</td>
            <td>${item.nota_fiscal}</td>
            <td>${item.responsavel}</td>
            <td>${item.email}</td>
            <td>${item.setor}</td>
            <td>${item.win_update}</td>
            <td>${item.so}</td>
        `;
        tbody.appendChild(linha);
    });
}
