//Creamos la clase simulacion
class Simulacion {
    constructor(nombre, edad, saldo, cuota) {
        this.nombre = nombre;
        this.edad = parseFloat(edad);
        this.saldo = parseFloat(saldo);
        this.cuota = parseFloat(cuota);
    }

    calcularCuota() {
        return this.saldo*1.04/this.cuota;
    }

}

var listaResultados = [];

do {
    var checkP = prompt("Ingrese continuar para simular o salir para terminar")
    if (checkP === "salir" || checkP === "SALIR" || checkP === "Salir"){
        alert ("Gracias!");
        break;
    }else{
        var nombreS = prompt("Ingrese su nombre");
        var edadS = prompt("Ingrese su edad");
        if (edadS <= 17){
            alert ("No tiene la edad requerida para continuar.");
            break;
        }else{
            var saldoC = prompt("¿Cuánto dinero necesita?");
            var cuotaC = prompt("¿Cuánto plazo necesita?");
            var result = calcularCuota (saldoC, cuotaC);
            listaResultados.push(new Simulacion(nombreS, edadS, saldoC, cuotaC, result));
        }
    }    
} while (checkP != "salir" || checkP != "SALIR" || checkP != "Salir")

console.log(listaResultados);

for (var resultado of listaResultados) {
    let container = document.createElement("div");
    contenedor.innerHTML = `<h2> Hola ${resultado.nombre}! Aquí está tu resultado:</h2>
                            <p> Monto: ${resultado.saldo}</p>
                            <p> Plazo: ${resultado.cuota}</p>
                            <p> Cuota: ${resultado.result}</p>`;
    document.body.appendChild(container);
}

document.getElementsByName("h2").innerHTML = "Gracias!";
