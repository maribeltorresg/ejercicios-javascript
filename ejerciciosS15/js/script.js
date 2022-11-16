function ejercicio1() {
  // Ejercicio 1:
  //  Elaborar un programa que permita ingresar el nombre del trabajador, su sueldo básico y el número de hijos,
  //  se deberá mostrar su bonificación y el sueldo final. Tenga en cuenta que la empresa está dando una bonificación del 7% del
  //  sueldo básico sólo en el caso el trabajador tuviese hijos.

  let nombreTrabajador = prompt("Escriba su nombre");

  let sueldoBasico = +prompt("Ingrese su sueldo básico");

  // Validamos que el sueldo sea el mínimo o mayor a 1200 y que sea un número
  if (sueldoBasico < 1200 || isNaN(sueldoBasico)) {
    alert("Ingrese el sueldo mínimo o mayor a 1200");
    return;
  }

  let numeroHijos = +prompt("Ingrese la cantidad de hijos");

  // Validamos que sea un número
  if (isNaN(numeroHijos)) {
    alert("Ingrese un número");
    return;
  }

  function sueldoTotal(nombreTrabajador, sueldoBasico, numeroHijos) {
    let sueldoConBonificacion;
    let bonificación;

    if (numeroHijos > 0) {
      bonificación = sueldoBasico * 0.07;
      sueldoConBonificacion = sueldoBasico + bonificación;
    } else {
      alert("No le corresponde una bonificación");
    }
    alert(
      `${nombreTrabajador} su bonificación es de: ${bonificación} soles y su sueldo final sería: ${sueldoConBonificacion} soles.`
    );
  }
  sueldoTotal(nombreTrabajador, sueldoBasico, numeroHijos);
}
// ejercicio1();

function ejercicio2() {
  // Ejercicio 2:
  //  Construir un programa que permita ingresar un número, si el número es mayor de 500,
  //  se debe calcular y mostrar en pantalla el 18% de este.

  let numero = +prompt("Ingrese un numero");

  // Validación
  if (numero <= 500 || isNaN(numero)) {
    alert("Escriba un número mayor a 500");
    return;
  }

  let numeroCon18;

  if (numero > 500) {
    numeroCon18 = numero * 0.18;
  }
  document.write(`El 18% de ${numero} es ${numeroCon18}`);
}

// ejercicio2();

function ejercicio3() {
  // Ejercicio 3:
  //  Crea una aplicación que pida un número y calcule su
  //  factorial (El factorial de un número es el producto de todos los enteros entre 1 y el propio número y se representa
  //  por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120)

  let numero = +prompt("Ingrese un número", "5");

  // Validación
  if (isNaN(numero)) {
    alert("Escriba un número");
    return;
  }

  let total = 1;

  for (let i = 1; i <= numero; i++) {
    total *= i;
  }
  console.log(`El factorial de ${numero}! es: ${total}`);
}

// ejercicio3();

// Ejercicios del ppt
function ejercicio4() {
  // Ejercicio 1:
  //  Digite el importe de una compra, en caso de que el importe sea 150 o más, se le descontará el 12%.
  //  Mostrar el descuento otorgado y el importe de compra final

  let importeCompra = +prompt("Ingrese el importe de la compra");

  if (importeCompra >= 150) {
    let descuento12 = importeCompra * 0.12;
    console.log(`Descuento otorgado es: ${descuento12}`);

    let importeTotal = importeCompra - descuento12;
    console.log(`Importe total es: ${importeTotal}`);
  } else {
    alert("No tiene descuento");
  }
}

// ejercicio4();

function ejercicio5() {
  // Ejercicio 2:
  //  Ingrese el nombre de un alumno y las notas de su examen parcial, examen final y el promedio de prácticas;
  //  muestre el nombre del alumno y su promedio final solo si el alumno está aprobado.
  //  Tenga en cuenta que para el cálculo del promedio la nota del examen final tiene peso doble.

  let nombreAlumno = prompt("Escriba su nombre");
  let examenParcial = +prompt("Escriba su nota de examen parcial");
  let examenFinal = +prompt("Escriba su nota de examen final");
  let promedioPracticas = +prompt("Escriba el promedio de las prácticas");

  let notas = 0;
  let promedio;

  notas += examenParcial;
  notas += examenFinal * 2;
  notas += promedioPracticas;

  promedio = notas / 4;

  if (promedio >= 11) {
    alert(
      `El alumno ${nombreAlumno} su promedio final es ${promedio}, ha aprobado`
    );
  } else {
    alert("Usted a desaprobado");
  }
}

// ejercicio5();
