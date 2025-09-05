document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Defina o usuário e a senha aqui. Use valores de exemplo para segurança.
    const validUsername = 'seu_usuario';
    const validPassword = 'sua_senha'; 

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (usernameInput === validUsername && passwordInput === validPassword) {
        messageElement.textContent = 'Login bem-sucedido!';
        messageElement.className = 'success';
        // Redirecione o usuário ou realize outra ação
        // window.location.href = 'pagina_inicial.html';
    } else {
        messageElement.textContent = 'Usuário ou senha incorretos.';
        messageElement.className = 'error';
    }
});
