// Carregar usuários do arquivo JSON
function loadUsers() {
    return fetch('users.json')
        .then(response => response.json())
        .catch(error => {
            console.error('Erro ao carregar usuários:', error);
            return [];
        });
}

// Verificar autenticação do usuário
async function authenticateUser(username, password) {
    const users = await loadUsers();
    return users.find(user => user.username === username && user.password === password);
}

// Evento de submissão do formulário de login
document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = await authenticateUser(username, password);

    if (user) {
        window.location.href = "index.html"; // Redireciona para o painel
    } else {
        alert('Usuário ou senha incorretos.');
    }
});
