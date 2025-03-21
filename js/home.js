const urlBase = "URL_DO_SEU_BACK_END"; // Substituir pela URL real do backend
const tabelaCorpo = document.getElementById("tabela-usuarios");

tabelaCorpo.innerHTML = '<tr><td colspan="5">Aguarde...</td></tr>';

async function carregarUsuarios() {
    try {
        const response = await fetch(`${urlBase}/usuario`);
        
        if (!response.ok) {
            throw new Error("Erro na requisição: " + response.status);
        }

        const data = await response.json();
        tabelaCorpo.innerHTML = '';
        
        data.forEach(usuario => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                <td>${usuario.senha}</td>
                <td class="acoes">
                    <a class="botaoVer" href="usuario.html?id=${usuario.id}">Ver</a> |
                    <a class="botaoAlterar" href="alterar-usuario.html?id=${usuario.id}">Alterar</a> |
                    <a class="botaoExcluir" href="#" data-id="${usuario.id}">Excluir</a>
                </td>
            `;
            tabelaCorpo.appendChild(linha);
        });
    } catch (error) {
        console.error("Erro ao carregar usuários:", error);
        tabelaCorpo.innerHTML = '<tr><td colspan="5">Erro ao carregar dados</td></tr>';
    }
}

// Chama a função ao carregar a página
carregarUsuarios();
