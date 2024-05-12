document.addEventListener('DOMContentLoaded', function () {
    sugestao = document.getElementById('sugestao_topico');
    sugestao.addEventListener('submit', function () {

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
        alert('Sugestão enviada com sucesso!\nClique na aba "Votações em Andamento" para visualizar sua sugestão!');

    });
});