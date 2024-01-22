function calcularIncremento() {
    // Obtener el valor de años ingresado por el usuario
    var añosEnEmpresa = parseInt(document.getElementById('years').value);

    // Definir la base sobre la que se aplicará el incremento
    var base = 320;

    // Definir el porcentaje de incremento
    var porcentajeIncremento = 0.05; // 5%

    // Calcular el incremento de plus de antigüedad
    var incrementoTotal = 0;

    // No hay incremento durante los dos primeros años
    añosEnEmpresa = Math.max(añosEnEmpresa, 2);

    // Calcular el trienio a partir del año 3
    if (añosEnEmpresa >= 3) {
        incrementoTotal += base * porcentajeIncremento;
    }

    // Calcular el siguiente trienio a partir del año 6
    if (añosEnEmpresa >= 6) {
        incrementoTotal += base * porcentajeIncremento;
    }

    // Calcular los quinquenios a partir del año 11
    for (var i = 2; i < Math.floor((añosEnEmpresa - 6) / 5) + 2; i++) {
        incrementoTotal += base * porcentajeIncremento;
    }

    // Mostrar el resultado
    var resultadoElemento = document.getElementById('result');
    resultadoElemento.innerHTML = `El incremento de salario por plus de antigüedad es de ${incrementoTotal.toFixed(2)} euros al mes.`;
}
