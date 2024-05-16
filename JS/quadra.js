document.addEventListener('DOMContentLoaded', function () {

    // radio buttom "O dia inteiro"
    let dia = document.getElementById('dia_quadra');

    // radio buttom "Customizar"
    let customizar = document.getElementById('customizar_quadra');

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

    // Armazena o dia da reserva
    let data_reserva = document.getElementById('data_reserva_quadra');
    localStorage.setItem('dia_quadra', data_reserva.value);

    // Botao enviar
    let botao = document.getElementById('botao');
    botao.addEventListener('click', function () {
        let horario_final = document.getElementById('horario_final_quadra');
        let horario_inicial = document.getElementById('horario_inicial_quadra');

        localStorage.setItem('dia_quadra', data_reserva.value);

        if (customizar.checked) {
            localStorage.setItem('horainicio_quadra', horario_inicial.value);
            localStorage.setItem('horafinal_quadra', horario_final.value);

            alert("Reserva realizada com sucesso!\n\nDia: " + data_reserva_quadra.value + "\nHorário: " + horario_inicial_quadra.value + " - " + horario_final_quadra.value + "\n\nObrigado!");
        }
        else {
            localStorage.setItem('horario', "Diária");
            alert("Reserva realizada com sucesso!\n\nDia: " + data_reserva_quadra.value + "\nHorário: Diária" + "\n\nObrigado!");
        }

    });
}); 