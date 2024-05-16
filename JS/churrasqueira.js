document.addEventListener('DOMContentLoaded', function () {


    // radio buttom "O dia inteiro"
    let dia = document.getElementById('dia');

    // radio buttom "Customizar"
    let customizar = document.getElementById('customizar');

    // div que contém os horários
    let horarios = document.querySelector(".dia_inteiro");


    customizar.addEventListener('change', function () {
        if (customizar.checked) {
            horarios.style.display = "block";
        }
        else {
            horarios.style.display = "none";
        }
    });
    dia.addEventListener('change', function () {
        if (dia.checked) {
            horarios.style.display = "none";
        }
        else {
            horarios.style.display = "block";
        }
    });


    // Botao enviar
    let botao = document.getElementById('botao');
    botao.addEventListener('click', function () {
        
        // Armazena o dia da reserva
        let data_reserva = document.getElementById('data_reserva');
        localStorage.setItem('dia', data_reserva.value);

        localStorage.removeItem("dia")
        localStorage.removeItem("horario")
        localStorage.removeItem("horainicio")
        localStorage.removeItem("horafinal")
        let horario_final = document.getElementById('horario_final');
        let horario_inicial = document.getElementById('horario_inicial');

        localStorage.setItem('dia', data_reserva.value);

        if (customizar.checked) {
            localStorage.setItem('horainicio', horario_inicial.value);
            localStorage.setItem('horafinal', horario_final.value);

            alert("Reserva realizada com sucesso!\n\nDia: " + data_reserva.value + "\nHorário: " + horario_inicial.value + " - " + horario_final.value + "\n\nObrigado!");
        }
        else {
            localStorage.setItem('horario', "Diária");
            alert("Reserva realizada com sucesso!\n\nDia: " + data_reserva.value + "\nHorário: Diária" + "\n\nObrigado!");
        }

    });
}); 