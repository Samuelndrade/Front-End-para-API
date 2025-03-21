const url = "URL_DO_SEU_BACK_END/usuario"; // Substituir pela URL real do backend
const token = localStorage.getItem('jwt');

document.getElementById('form-usuario').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value
    };
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify(dados)
        });
        
        if (!response.ok) {
            throw new Error("Erro na requisição: " + response.status);
        }
        
        alert("Usuário inserido com sucesso!");
        window.location.href = 'home.html'; // Redireciona para a home
        
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao inserir usuário!");
    }
});
