function ejercicio1() {
  // EJERCICIO 1
  // En base al siguiente código, añadir una función para restar dos números:
  let multipli = function (x, y) {
    return x * y;
  };

  let expon = function (x, y) {
    return Math.pow(x, y);
  };

  let suma = (x, y) => {
    return x + y;
  };

  let resta = (x, y) => {
    return x - y;
  };

  let result = multipli(5, 2);
  alert(`La multiplicación es: ${result}`);

  result = expon(2, 2);
  alert(`El exponente es: ${result}`);

  result = suma(3, 4);
  alert(`La suma es: ${result}`);

  result = resta(10, 5);
  alert(`La resta es: ${result}`);
}

// ejercicio1();

function ejercicio2() {
  // EJERCICIO 2
  // En base al siguiente código: añadir una función para pasar de Farenheit a Celsius:

  let pasaraFarenheit = (grado) => {
    return (Farenheit = grado * 1.8 + 32);
  };

  let result = pasaraFarenheit(22);
  console.log(result);

  // Fórmula ºC = (ºF-32) ÷ 1.8
  let pasarFaCelsius = (result) => {
    return (Celsius = (result - 32) / 1.8);
  };

  result = pasarFaCelsius(150);
  console.log(result);
}

ejercicio2();

function ejercicio3() {
  // EJERCICIO 3
  // Realizar un programa con una función. Esta función muestra en pantalla la suma de dos números introducidos por el usuario.

  let number1 = +prompt("Escriba un número");
  let number2 = +prompt("Escriba otro número");

  function sumar(number1, number2) {
    return document.write(`La suma es: ${number1 + number2}`);
  }

  sumar(number1, number2);
}

// ejercicio3();
