const token = localStorage.getItem('jwt');
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const url = `URL_DO_SEU_BACK_END/usuario/${id}`; // Substituir pela URL real do backend

async function carregarUsuario() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        });
        
        if (!response.ok) {
            throw new Error("Erro na requisição: " + response.status);
        }
        
        const data = await response.json();
        document.getElementById('nome').innerText = data[0].nome;
        document.getElementById('id').innerText = data[0].id;
        document.getElementById('email').innerText = data[0].email;
        document.getElementById('senha').innerText = data[0].senha;
    
    } catch (error) {
        console.error("Erro:", error);
        alert("Usuário não encontrado!");
        window.location.href = 'home.html';
    }
}

carregarUsuario();
