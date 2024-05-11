document.addEventListener('DOMContentLoaded', function() {
    addSugestao = document.getElementById('nova_sugestao');
    addSugestao.innerHTML = localStorage.getItem('sugestao');

    let username = document.getElementById('nome_usuario');

    let radio_buttom = localStorage.getItem('Comparilhar_nome');
    console.log(radio_buttom);
    if (radio_buttom == 'Sim'){
        username.innerHTML = localStorage.getItem('username');
    }
    else{
        username.innerHTML = 'Anônimo';
    }
 
    let newElement = document.querySelector('.new');
    newElement.classList.add('visible');
    
}); 