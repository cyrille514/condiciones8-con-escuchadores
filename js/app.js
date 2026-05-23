
    // Array global con las opciones de juego
const opciones = ["", "Piedra 👊", "Papel ✋", "Tijera ✌"];

// 1. Escuchador para el campo de entrada (Limpia la pantalla en cuanto el usuario empieza a escribir)
document.getElementById('eleccionUsuario').addEventListener('input', () => {
    document.getElementById('resultado').innerHTML = "";
});

// 2. Escuchador principal para el botón (Evento click)
document.getElementById('btnJugar').addEventListener('click', () => {
    
    const input = document.getElementById('eleccionUsuario');
    const display = document.getElementById('resultado');
    
    // Obtener la elección del usuario en formato de número entero
    let usuario = parseInt(input.value, 10);
    
    // VALIDACIÓN DIRECTA: Si el campo está vacío o fuera del rango permitido (1-3)
    if (isNaN(usuario) || usuario < 1 || usuario > 3) {
        display.innerHTML = "Por favor, introduce un número válido entre 1 y 3.";
        display.className = "mt-5 font-bold text-lg text-red-600";
        input.value = "";
        input.focus();
        return; 
    }

    // Generar la elección aleatoria del ordenador (entre 1 y 3)
    let ordenador = Math.floor(Math.random() * 3) + 1;

    // Construir los mensajes base de las elecciones
    let mensaje = `Elegiste: ${opciones[usuario]}<br>`;
    mensaje += `El ordenador eligió: ${opciones[ordenador]}<br><br>`;
    let colorTexto = "mt-5 font-bold text-lg text-gray-800"; 

    // LÓGICA DIRECTA: Condiciones integradas dentro del propio escuchador de eventos
    if (usuario === ordenador) {
        mensaje += "¡Es un empate! 🤝";
        colorTexto = "mt-5 font-bold text-lg text-amber-600";
    } else if (usuario === 1 && ordenador === 3) {          
        mensaje += "Yo Piedra y tú tijera. ¡Has ganado! 🎉";
        colorTexto = "mt-5 font-bold text-lg text-emerald-600";
    } else if (usuario === 2 && ordenador === 1) {          
        mensaje += "Yo Papel y tú Piedra. ¡Has ganado! 🎉";
        colorTexto = "mt-5 font-bold text-lg text-emerald-600";
    } else if (usuario === 3 && ordenador === 2) {          
        mensaje += "Yo tijera y tú papel. ¡Has ganado! 🎉";
        colorTexto = "mt-5 font-bold text-lg text-emerald-600";
    } else {
        mensaje += "Perdiste... 🤖 Gana el ordenador.";
        colorTexto = "mt-5 font-bold text-lg text-red-600";
    }

    display.innerHTML = mensaje;
    display.className = colorTexto;
    
    // Limpiar el campo de entrada y devolverle el foco para la siguiente partida
    input.value = ""; 
    input.focus();
});
