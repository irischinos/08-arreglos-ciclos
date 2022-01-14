/* Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio. */

let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
let suma = 0;
let promedio = 0;

for(let i = 0; i < numArray.length; i++) {
  suma += numArray[i];
  promedio = suma / numArray.length;
}

document.write(`Los números de tu array son: ${numArray}  <br>`);
document.write(`La suma de los elementos de tu array es: ${suma} <br>`);
document.write(`El promedio de los elementos de tu array es: ${promedio}`);

