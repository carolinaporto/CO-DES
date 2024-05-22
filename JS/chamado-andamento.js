document.addEventListener('DOMContentLoaded', function () {

    // CHAMADOS EM ANDAMENTO
    addChamado = document.getElementById('ocorrencia1');
    addChamado.innerHTML = localStorage.getItem('descricao');

    andar = document.getElementById('andar1');
    andar.innerHTML = localStorage.getItem('selectedAndar');

    torre = document.getElementById('torre1');
    torre.innerHTML = localStorage.getItem('selectedTorre');

    let novoChamado = document.querySelector('.ocorrencia');
    if (localStorage.getItem('descricao') == null) {
        novoChamado.style = 'display: none';
    } else{
        novoChamado.style = 'display: block';
    }
    

    lixo = document.querySelector('.lixo');
    lixo.addEventListener('click', function () {
        localStorage.removeItem('descricao');
        localStorage.removeItem('selectedAndar');
        localStorage.removeItem('selectedTorre');
            novoChamado.style = 'display: none';

    });
});