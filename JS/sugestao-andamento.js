document.addEventListener('DOMContentLoaded', function() {

    // VOTAÇÕES DA ASSEMBLEIA EM ANDAMENTO
    addSugestao = document.getElementById('nova_sugestao');
    addSugestao.innerHTML = localStorage.getItem('sugestao');

    let username = document.getElementById('nome_usuario');
    let radio_buttom = localStorage.getItem('Comparilhar_nome');
    if (radio_buttom == 'Sim'){
        username.innerHTML = localStorage.getItem('username').toLocaleUpperCase();
    }
    else{
        username.innerHTML = 'ANÔNIMO';
    }
 
    let newElement = document.querySelector('.new');
    if (localStorage.getItem('sugestao') == null) {
        newElement.style = 'display: none';
    } else{
        newElement.style = 'display: block';
    }

    lixo = document.querySelector('.lixo');
    lixo.addEventListener('click', function () {
        localStorage.removeItem('sugestao');
        newElement.style = 'display: none';
    });

    // botão like e dislike
    let like = document.getElementsByClassName('like');
    let dislike = document.getElementsByClassName('dislike');
    for (let i = 0; i < like.length; i++) {
        like[i].addEventListener('click', function () {
            if (like[i].src.includes('clicked_like.png')) {
                like[i].src = 'img/like.png';
            } else {
                like[i].src = 'img/clicked_like.png';
                dislike[i].src = 'img/dislike.png';
            }
        });
        dislike[i].addEventListener('click', function () {
            if (dislike[i].src.includes('clicked_dislike.png')) {
                dislike[i].src = 'img/dislike.png';
            } else {
                dislike[i].src = 'img/clicked_dislike.png';
                like[i].src = 'img/like.png';
            }
        });
    }
}); 