// EJERCICIO 1
// Un maestro desea saber qué porcentaje de hombres y qué porcentaje de mujeres hay en un grupo de estudiantes.
// Elaborar un programa que permita ingresar la cantidad de varones y mujeres y muestre el porcentaje de estos para su grupo de estudiantes.

let hombres = +prompt("Ingrese la cantidad de hombres");
let mujeres = +prompt("Ingrese la cantidad de mujeres");

function mostrarPorcentajeMH(hombres, mujeres) {
  let total = hombres + mujeres;

  let porcentajeHombres = (hombres * 100) / total;
  console.log(`El porcentaje de hombres es: ${porcentajeHombres} %`);

  let porcentajeMujeres = (mujeres * 100) / total;
  console.log(`El porcentaje de mujeres es: ${porcentajeMujeres} %`);
}

mostrarPorcentajeMH(hombres, mujeres);

// EJERCICIO 2
// La municipalidad de Pueblo Libre piensa invertir cierto monto de dinero en la reparación de las pistas en las avenidas principales.
// Desarrollar un código que permita ingresar un monto de inversión en soles y lo reparta en la refacción de cinco avenidas de la siguiente manera:

// a. Avenida La Mar - 35% del monto
// b. Avenida Abancay - 25% del monto
// c. Avenida 28 de Julio - 10% del monto
// d. Avenida Aviación - 15% del monto
// e. Avenida Tacna - restante del monto (15%)

function inversion(monto) {
  let avLaMar = monto * 0.35;
  console.log(`A la avenida La Mar le tocaría: ${avLaMar}`);

  let avAbancay = monto * 0.25;
  console.log(`A la avenida Abancay le tocaría: ${avAbancay}`);

  let av28DeJulio = monto * 0.1;
  console.log(`A la avenida 28 de Julio le tocaría: ${av28DeJulio}`);

  let avAviacion = monto * 0.15;
  console.log(`A la avenida Aviación le tocaría: ${avAviacion}`);

  let avTacna = monto * 0.15;
  console.log(`A la avenida Tacna le tocaría: ${avTacna}`);
}

inversion(1000);

// EJERCICIO 3
// Una empresa realiza anualmente un evento para fines solidarios con las comunidades nativas del Perú,
// para ello, se requiere un algoritmo que permita ingresar la cantidad de entradas vendidas de los
// tres tipos detallados en el siguiente tarifario:

// Concepto                       Precio
// Entrada general                S/ 150.00
// Entrada para mayores de 65     S/ 50.00
// Entrada para menores de edad   S/ 80.00

let entradasGeneralVendidas = +prompt(
  "Ingrese la cantidad de ENTRADAS GENERAL vendidas"
);
let entradasAdultosVendidas = +prompt(
  "Ingrese la cantidad de ENTRADAS PARA ADULTOS vendidas"
);
let entradasMenoresVendidas = +prompt(
  "Ingrese la cantidad de ENTRADAS PARA MENORES vendidas"
);

function montoRecaudado(
  entradasGeneralVendidas,
  entradasAdultosVendidas,
  entradasMenoresVendidas
) {
  let dineroTotalEntradasGeneral = entradasGeneralVendidas * 150;
  console.log(
    `El dinero total de ENTRADAS GENERAL vendidas es: ${dineroTotalEntradasGeneral}`
  );

  let dineroTotalEntradasAdultos = entradasAdultosVendidas * 50;
  console.log(
    `El dinero total de ENTRADAS PARA ADULTOS vendidas es: ${dineroTotalEntradasAdultos}`
  );

  let dineroTotalEntradasMenores = entradasMenoresVendidas * 80;
  console.log(
    `El dinero total de ENTRADAS PARA MENORES vendidas es: ${dineroTotalEntradasMenores}`
  );

  return (
    dineroTotalEntradasGeneral +
    dineroTotalEntradasAdultos +
    dineroTotalEntradasMenores
  );
}

console.log(
  `El monto total recaudado es: ${montoRecaudado(
    entradasGeneralVendidas,
    entradasAdultosVendidas,
    entradasMenoresVendidas
  )}`
);
