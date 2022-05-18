rotulo.innerHTML =
  "Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir.";

let btnCalcular = document.getElementById("btnCalcular");
let numero1 = document.getElementById("dato1.value");
let numero2 = document.getElementById("dato2.value");
let menuOpcion = document.getElementById("dato3.value");

function dibujarGuiones() {
  let i: number;
  let linea: string = "";
  for (i = 0; i < 40; i++) {
    linea = linea + "-";
      };
      console.log(linea);
}

btnCalcular.addEventListener("click", () => {
  numero1 = Number(dato1.value);
  numero2 = Number(dato2.value);
  menuOpcion = Number(dato3.value);
  if (menuOpcion === 1) {
    dibujarGuiones();
    console.log("El resultado de la operacion es: " + (numero1+numero2));
    dibujarGuiones();
  } else if (menuOpcion === 2) {
    dibujarGuiones();
    console.log("El resultado de la operacion es: " + (numero1-numero2));
    dibujarGuiones();
  } else 
});
