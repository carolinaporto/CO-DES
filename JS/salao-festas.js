document.addEventListener('DOMContentLoaded', function () {

    // radio buttom "O dia inteiro"
    let dia = document.getElementById('dia_salao');

    // radio buttom "Customizar"
    let customizar = document.getElementById('customizar_salao');

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
        let data_reserva = document.getElementById('data_reserva_salao');
        localStorage.setItem('dia_salao', data_reserva.value);

        localStorage.removeItem("dia_salao")
        localStorage.removeItem("horario_salao")
        localStorage.removeItem("horainicio_salao")
        localStorage.removeItem("horafinal_salao")
        let horario_final = document.getElementById('horario_final_salao');
        let horario_inicial = document.getElementById('horario_inicial_salao');

        localStorage.setItem('dia_salao', data_reserva.value);

        if (customizar.checked) {
            localStorage.setItem('horainicio_salao', horario_inicial.value);
            localStorage.setItem('horafinal_salao', horario_final.value);

            alert("Reserva realizada com sucesso!\n\nDia: " + data_reserva_salao.value + "\nHorário: " + horario_inicial_salao.value + " - " + horario_final_salao.value + "\n\nObrigado!");
        }
        else {
            localStorage.setItem('horario_salao', "Diária");
            alert("Reserva realizada com sucesso!\n\nDia: " + data_reserva_salao.value + "\nHorário: Diária" + "\n\nObrigado!");
        }

    });
}); 