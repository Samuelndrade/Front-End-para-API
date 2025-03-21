const url = "URL_DO_SEU_BACK_END/login"; // Substituir pela URL real do backend

document.getElementById('form-login').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const dados = {
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value
    };
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });
        
        if (!response.ok) {
            throw new Error("Erro na autenticação: " + response.status);
        }
        
        const data = await response.json();
        localStorage.setItem('jwt', data.token); // Salva o token de autenticação
        alert("Login bem-sucedido!");
        window.location.href = 'home.html'; // Redireciona para a área restrita
        
    } catch (error) {
        console.error("Erro:", error);
        alert("E-mail ou senha inválidos!");
    }
});
