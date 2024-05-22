document.addEventListener('DOMContentLoaded', function () {

    // radio buttom "O dia inteiro"
    let dia = document.getElementById('dia_quadra');

    // radio buttom "Customizar"
    let customizar = document.getElementById('customizar_quadra');

    // div que contém os horários
    let horarios = document.querySelectorAll(".dia_inteiro");


    customizar.addEventListener('change', function () {
        if (customizar.checked) {
            horarios[0].style.display = "block";
            horarios[1].style.display = "block";
        }
        else {
            horarios[0].style.display = "none";
            horarios[1].style.display = "none";
        }
    });
    dia.addEventListener('change', function () {
        if (dia.checked) {
            horarios[0].style.display = "none";
            horarios[1].style.display = "none";
        }
        else {
            horarios[0].style.display = "block";
            horarios[1].style.display = "block";
        }
    });


    // Botao enviar
    let botao = document.getElementById('botao');
    botao.addEventListener('click', function () {
        // Armazena o dia da reserva
        let data_reserva = document.getElementById('data_reserva_quadra');
        localStorage.setItem('dia_quadra', data_reserva.value);

        localStorage.removeItem("dia_quadra")
        localStorage.removeItem("horario_quadra")
        localStorage.removeItem("horainicio_quadra")
        localStorage.removeItem("horafinal_quadra")
        let horario_final = document.getElementById('horario_final_quadra');
        let horario_inicial = document.getElementById('horario_inicial_quadra');

        localStorage.setItem('dia_quadra', data_reserva.value);

        if (customizar.checked) {
            localStorage.setItem('horainicio_quadra', horario_inicial.value);
            localStorage.setItem('horafinal_quadra', horario_final.value);

            alert("Reserva realizada com sucesso!\n\nDia: " + data_reserva_quadra.value + "\nHorário: " + horario_inicial_quadra.value + " - " + horario_final_quadra.value + "\n\nObrigado!");
        }
        else {
            localStorage.setItem('horario_quadra', "Diária");
            alert("Reserva realizada com sucesso!\n\nDia: " + data_reserva_quadra.value + "\nHorário: Diária" + "\n\nObrigado!");
        }

    });
}); 