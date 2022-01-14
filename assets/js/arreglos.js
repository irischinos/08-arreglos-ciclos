
/* const numeros = [5] */
let numeros = new Array();
numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812, 213, 123]; // son 11 elementos

/* document.write(numeros[5]); */

// i++ ---> suma 1
// i = i + 2 ---> suma 2 || i += 1

for(let i = 0; i < numeros.length; i++) { 
  document.write(`${numeros[i]} <br/>`);

  /* const numero = numeros[i];
     document.write(numero + '<br>' ); */
}