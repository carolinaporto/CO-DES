document.addEventListener('DOMContentLoaded', function () {
    let dia = document.getElementById('dia');
    let customizar = document.getElementById('customizar');
    let horarios = document.querySelector(".dia_inteiro");


    customizar.addEventListener('change', function () {
        if (customizar.checked) {
            horarios.style.display = "block";
        }
        else{
            horarios.style.display = "none";
        }
    });
    dia.addEventListener('change', function () {
        if (dia.checked) {
            horarios.style.display = "none";
        }
        else{
            horarios.style.display = "block";
        }
    });


    let botao = document.getElementById('botao');
    let horario_final = document.getElementById('horario_final');
    let horario_inicial = document.getElementById('horario_inicial');
    let data_reserva = document.getElementById('data_reserva');

    botao.addEventListener('sumbit', function () {
        churrasqueira = document.getElementById('churrasqueira');

        localStorage.setItem('dia', data_reserva.value);
        
        if (customizar.checked) {
            localStorage.setItem('hora inicio', horario_inicial.value);
            localStorage.setItem('hora final', horario_final.value);
            
            alert("Reserva realizada com sucesso!\n\nDia: " + data_reserva.value + "\nHorário: " + horario_inicial.value + " - " + horario_final.value + "\n\nObrigado!");
        }
        else{
            localStorage.setItem('horario', "Diária");
            alert("Reserva realizada com sucesso!\n\nDia: " + data_reserva.value + "\nHorário: Diária" + "\n\nObrigado!");
        }

       
    });
}); 