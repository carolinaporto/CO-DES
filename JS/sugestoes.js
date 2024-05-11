document.addEventListener('DOMContentLoaded', function () {
    sugestao = document.getElementById('enviar_sugestao');
    sugestao.addEventListener('click', function () {

        texto_sugestao = document.getElementById('sugestao');
        localStorage.setItem('sugestao', texto_sugestao.value);

        nome = document.getElementsByName('radio');
        console.log(nome);
        if (nome[0].checked) {
            localStorage.setItem('Comparilhar_nome', "Sim");
        }
        else if (nome[1].checked) {
            localStorage.setItem('Comparilhar_nome', "Não (anônimo)");
        }
    });
    });