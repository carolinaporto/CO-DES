document.addEventListener('DOMContentLoaded', function() {

    // CHAMADOS EM ANDAMENTO
    addChamado = document.getElementById('ocorrencia');
    addChamado.innerHTML = localStorage.getItem('descricao');

    andar = document.getElementById('andar');
    andar.innerHTML = localStorage.getItem('selectedAndar');

    torre = document.getElementById('torre');
    torre.innerHTML = localStorage.getItem('selectedTorre');
    
    novoChamado = document.querySelectorAll('.new');
    for (let i = 0; i < novoChamado.length; i++) {
        novoChamado[i].style = 'display: block';
    }
});