document.addEventListener('DOMContentLoaded', function () {
    entrar = document.getElementById('entrar');
    entrar.addEventListener('click', function () {
        username = document.getElementById('usuario');
        localStorage.setItem('username', username.value);

        apt = document.getElementById('apt');
        localStorage.setItem('apt', apt.value);
    });
});
