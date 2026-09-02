
alert("JavaScript funcionando");
function verificar(angulo) {
    document.getElementById("mensaje").innerHTML =
        "✅ ¡Correcto!";

    document.getElementById("anguloActual").innerHTML =
        "Ángulo actual: " + angulo + "°";

    let sombra = document.getElementById("sombra");

    let radio = 80;
    let radianes = (angulo - 90) * Math.PI / 180;

    let x = 150 + radio * Math.cos(radianes);
    let y = 150 + radio * Math.sin(radianes);

    sombra.setAttribute("x2", x);
    sombra.setAttribute("y2", y);
}

function incorrecto() {
    document.getElementById("mensaje").innerHTML =
        "❌ Respuesta incorrecta";
}