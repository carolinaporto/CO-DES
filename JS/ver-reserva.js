document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    horario_reservado = document.getElementById('horario_reservado');

    // localStorage churrasqueira
    reserva_churrasqueira = document.getElementById('reserva_churrasqueira');
    dia = localStorage.getItem('dia');
    horainicio = localStorage.getItem('horainicio');
    horafinal = localStorage.getItem('horafinal');
    horario = localStorage.getItem('horario');

    // Elementos churrasqueira 
    reserva_diaria = document.getElementById('reserva_diaria');
    reserva_custom = document.querySelectorAll('.reserva_custom');
    data_reserva = document.getElementById('dia_da_reserva');
    hora_inicio = document.getElementById('hora_inicio');
    hora_final = document.getElementById('hora_final');
    hora_diaria = document.getElementById('hora_diaria');
    lixo = document.getElementById('lixo');


    // localStorage salao
    reserva_salao = document.getElementById('reserva_salao');
    dia_salao = localStorage.getItem('dia_salao');
    horainicio_salao = localStorage.getItem('horainicio_salao');
    horafinal_salao = localStorage.getItem('horafinal_salao');
    horario_salao = localStorage.getItem('horario_salao');
    

    // Elementos salao 
    reserva_diaria_salao = document.getElementById('reserva_diaria_salao');
    reserva_custom_salao = document.querySelectorAll('.reserva_custom_salao');
    data_reserva_salao = document.getElementById('dia_da_reserva_salao');
    hora_inicio_salao = document.getElementById('hora_inicio_salao');
    hora_final_salao = document.getElementById('hora_final_salao');
    hora_diaria_salao = document.getElementById('hora_diaria_salao');
    lixo_salao = document.getElementById('lixo_salao');

    // localStorage quadra
    reserva_quadra = document.getElementById('reserva_quadra');
    dia_quadra = localStorage.getItem('dia_quadra');
    horainicio_quadra = localStorage.getItem('horainicio_quadra');
    horafinal_quadra = localStorage.getItem('horafinal_quadra');
    horario_quadra = localStorage.getItem('horario_quadra');

    // Elementos quadra 
    reserva_diaria_quadra = document.getElementById('reserva_diaria_quadra');
    reserva_custom_quadra = document.querySelectorAll('.reserva_custom_quadra');
    data_reserva_quadra = document.getElementById('dia_da_reserva_quadra');
    hora_inicio_quadra = document.getElementById('hora_inicio_quadra');
    hora_final_quadra = document.getElementById('hora_final_quadra');
    hora_diaria_quadra = document.getElementById('hora_diaria_quadra');
    lixo_quadra = document.getElementById('lixo_quadra');


    if (dia != null || dia_salao != null || dia_quadra != null) {
        horario_reservado.style.display = "block";

        if (dia != null) {
            count++;
            reserva_churrasqueira.style.display = "block";
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

            lixo.addEventListener('click', function () {
                localStorage.removeItem("dia");
                localStorage.removeItem("horario");
                localStorage.removeItem("horainicio");
                localStorage.removeItem("horafinal");
                reserva_churrasqueira.style.display = "none";
                count--;
                if (count == 0) {
                    horario_reservado.style.display = "none";
                }
            });
        }
        if(dia_salao != null){
            count++;
            reserva_salao.style.display = "block";
            data_reserva_salao.innerHTML = dia_salao;
            if (horario_salao != null) {
                reserva_diaria_salao.style.display = "block";
                reserva_custom_salao[0].style.display = "none";
                reserva_custom_salao[1].style.display = "none";
                hora_diaria_salao.innerHTML = horario_salao;
            }
            else {
                reserva_diaria_salao.style.display = "none";
                reserva_custom_salao[0].style.display = "block";
                reserva_custom_salao[1].style.display = "block";
                hora_inicio_salao.innerHTML = horainicio_salao;
                hora_final_salao.innerHTML = horafinal_salao;
            }

            lixo_salao.addEventListener('click', function () {
                localStorage.removeItem("dia_salao");
                localStorage.removeItem("horario_salao");
                localStorage.removeItem("horainicio_salao");
                localStorage.removeItem("horafinal_salao");
                reserva_salao.style.display = "none";
                count--;
                if (count == 0) {
                    horario_reservado.style.display = "none";
                }
            });
        }
        if(dia_quadra != null){
            count++;
            reserva_quadra.style.display = "block";
            data_reserva_quadra.innerHTML = dia_quadra;
            if (horario_quadra != null) {
                reserva_diaria_quadra.style.display = "block";
                reserva_custom_quadra[0].style.display = "none";
                reserva_custom_quadra[1].style.display = "none";
                hora_diaria_quadra.innerHTML = horario_quadra;
            }
            else {
                reserva_diaria_quadra.style.display = "none";
                reserva_custom_quadra[0].style.display = "block";
                reserva_custom_quadra[1].style.display = "block";
                hora_inicio_quadra.innerHTML = horainicio_quadra;
                hora_final_quadra.innerHTML = horafinal_quadra;
            }

            lixo_quadra.addEventListener('click', function () {
                localStorage.removeItem("dia_quadra");
                localStorage.removeItem("horario_quadra");
                localStorage.removeItem("horainicio_quadra");
                localStorage.removeItem("horafinal_quadra");
                reserva_quadra.style.display = "none";
                count--;
                if (count == 0) {
                    horario_reservado.style.display = "none";
                }
            });
        }

    }
    else {
        horario_reservado.style.display = "none";
    }


});
