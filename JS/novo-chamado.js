document.addEventListener('DOMContentLoaded', function () {
    enviar = document.getElementById('enviar_chamado');
    enviar.addEventListener('submit', function () {

        descricao_chamado = document.getElementById('descricao');
        localStorage.setItem('descricao', descricao_chamado.value);

        const andar = document.getElementById('Andar');
        const selectedAndar = andar.value;
        localStorage.setItem('selectedAndar', selectedAndar);


        const torre = document.getElementById('Torre');
        const selectedTorre = torre.value;
        localStorage.setItem('selectedTorre', selectedTorre);


        alert('Seu chamado foi registrado com sucesso!\nClique na aba "Chamados em Andamento" para acompanhar o andamento do seu chamado.')
    });



});