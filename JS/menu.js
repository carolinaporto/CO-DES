document.addEventListener('DOMContentLoaded', function() {
    username = document.getElementById('username');
    apt = document.getElementById('apt');

    username.innerHTML = localStorage.getItem('username').toLocaleUpperCase();
    apt.innerHTML = localStorage.getItem('apt');
});