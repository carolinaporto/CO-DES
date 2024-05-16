document.addEventListener('DOMContentLoaded', function () {
    horario_reservado = document.getElementById('horario_reservado');

    // localStorage
    dia = localStorage.getItem('dia');
    horainicio = localStorage.getItem('horainicio');
    horafinal = localStorage.getItem('horafinal');
    horario = localStorage.getItem('horario');


    // Elementos
    reserva_diaria = document.getElementById('reserva_diaria');
    reserva_custom = document.querySelectorAll('.reserva_custom');
    data_reserva = document.getElementById('dia_da_reserva');
    hora_inicio = document.getElementById('hora_inicio');
    hora_final = document.getElementById('hora_final');
    hora_diaria = document.getElementById('hora_diaria');

    if (dia != null) {
        horario_reservado.style.display = "block";
        data_reserva.innerHTML = dia;
        if (horario != null) {
            reserva_diaria.style.display = "block";
            reserva_custom[0].style.display = "none";
            reserva_custom[1].style.display = "none";
            hora_diaria.innerHTML = horario;
        }
        else {
            reserva_diaria.style.display = "none";
            reserva_custom[0].style.display = "block";
            reserva_custom[1].style.display = "block";
            hora_inicio.innerHTML = horainicio;
            hora_final.innerHTML = horafinal;
        }


    }
    else {
        horario_reservado.style.display = "none";
    }


});
