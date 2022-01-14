let numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812, 213, 123];

numeros.forEach(function (numero) {
  document.write(numero + ', ');
});
let numeros2 = numeros.map(function(elemento) {
  return elemento * 2;
})

document.write('<br>' + numeros2 + '<br>');

/* <-----------------------------------------------> */

// función anónima porque no tiene nombre y no existe fuera del foreach

// forEach recorre todos los elementos del array sin necesidad de un contador

/* <------ USANDO FOREACH -------> */
/* numeros.forEach(function (numero) {
  document.write(numero + ', ');
}); */

/* numeros.forEach(function (elemento, indice) {
  document.write(elemento + ' - ' + indice + '<br>') ;
}); */


/* <------ USANDO FOREACH CON UNA FUNCIÓN INTERNA -------> */
/* numeros.forEach(function (elemento) {
  document.write(elemento + ', ');
}); */

/* <------ USANDO FOREACH CON FUNCIÓN FLECHA -------> */
/* numeros.forEach(elemento => {
  document.write(elemento + ', ');
}); */

/* <------ .map() permite crear un arreglo nuevo asignado a otro -------> */
/* let numeros2 = numeros.map(function(elemento) {
  return elemento;
});

document.write('<br>' + numeros2); */

/* <------ Pusheando pera a ambos arreglos que tienen los mismos elementos-------> */

/* let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas;

frutas2.push('pera');
document.write('<br>' + frutas + '<br>' );
document.write('<br>' + frutas2 + '<br>' ); */



/* <------------------- map()  push()---------------> */
/* <------ Con map se crea un nuevo arreglo y Pera se agrega a grutas2 solamente -------> */

let frutas = ['mango', ' uva', ' piña'];
let frutas2 = frutas.map(function(elemento) {
  return elemento;
});

frutas2.push(' pera');
document.write('<br>' + frutas + '<br>' );
document.write('<br>' + frutas2 + '<br>' );

/* <------------------- includes() ---------------> */
/* Es para saber si incluye el elemento o no */
/* Se obtiene un "true" o "false" */
/* document.write('<br>' + numeros.includes(328) + '<br>'); */

/* <------------------- filter() ---------------> */
/* Se determina una condición en filter y se filtran los datos que cumplen con esa condición */

let numerosPares = numeros.filter((elemento) => {
  /* if( elemento % 2 == 0 ) {
    return true;
  } else {
  return elemento % 2 == 0;
  } */

  /* if(elemento > 10) {
    return true;
    } */

  return elemento % 2 == 0;
});

document.write('<br>' + numerosPares + '<br>');

/* <------ejemplo 2 de filter() con toLowerCase()  ------------> */
let frutasTropicales = ['Mango', 'Uva', 'Piña', 'Mandarina', 'Aguacate'];

let frutasFiltro = frutasTropicales.filter((fruta) => {
  /* if(fruta.includes('i') == true) {
    return true; 
  }
  */
  /*   Mango toLowerCase mango.includes('m');   */
  return fruta.toLowerCase().includes('m');
  
});
document.write('<br>' + frutasFiltro + '<br>');

/** <--------------- sort() ----------------------> */
// sirve para ordenar elementos de un arreglo de acuerdo a su valor Unicode
// es recomendable NO USARLO

let otrosNumeros = [9, 2, 3, 5, 1, 4, 8, 6, 7];
document.write('<br>' + otrosNumeros.sort() + '<br>' );

/** <--------------- reverse() ----------------------> */
// Inverte el orden de los elementos de un arreglo
document.write('<br>' + otrosNumeros.reverse() + '<br>' );

/** <--------------- find() ----------------------> */
// find obtiene el primer elemento que cumpla con una condición


let frutaEncontrada = frutas.find((elemento) => {
  return elemento.toLowerCase().includes('manzana');
});

document.write('<br>' + frutaEncontrada + '<br>');
