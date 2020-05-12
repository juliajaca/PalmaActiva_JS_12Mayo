// Esto es un comentario de una sola línea

/*
Esto es un comentario de varias líneas
---------------------------------------
*/

var numero; // Inicializo una variable
numero = 8; // Asigno un valor a la variable. Es una variable numérica

var numero = 8; //inicializo y asigno  un valor a esa variable  a la vez. Es una variable numérica

var texto = 'Jacinta'; // Las variables de cadena (strings o texto) se escriben entre comillas. Da igual simple o doble

// las variables boolean se declaran y asignan asi
var verdadero = true;
var falso = false;

// variable : lista o array o arreglo
var lista_array_arreglo = [34,56,56,67, 'jirafa']

//variable objeto
var objeto = {
    nombre : 'Gato',
    apellido : 'con Botas',
    edad : 3
}

//caracteres especiales para los strings o escapados
//para hacer un intro, un retroceso
'primera linea \n segunda línea'

var parrafo = "Libro de \"Rosalía de Castro\" de  1880";
console.log(parrafo);

//si pongo dos barras seguidas, Js interpreta que solo hay una
var disco_duro = "c:\\escritorio";

/*
FUNCIONES
Son ese tipo de código que queremos volver a utilizar, Al definirlas van a un espacio de la memoria
Dos maneras
*/

// Funciones declarativas
function nuevaFuncion(){
    return 'Clase de JS';
}
// Funciones expresivas. Esta dentro de una variable que le da el nombre
var nuevaFuncion = function(){
    return 'Clase de JS';
}

// Llamada a una función (ranto declarativa como expresiva)
nuevaFuncion();

// Funciones con parámetros
function suma(valor1, valor2){
    console.log(valor1 + valor2);
}

suma(45,555);

function resta(valor1, valor2){
    var resultado = valor1 - valor2;
    console.log(resultado);
}

function sumar(a, b){
    console.log(`El resultado de la suma es: ${a+b}`) //En vez de comillas en el string, son acentos!
}
/*
SCOPE
En que zona de la memoria estoy almacenando mis variables o funciones
*******************************************************************************
*/

//Scope global 
var ciudad = 'Palma';
// La puedo utilizar fuera y dentro de las funciones

// SCOPE Local, Esta variable no la puede ver nadie que no esté en esta misma función
function entorno(){
    var cp = 07145;
    console.log(cp + "" + ciudad);
}

/*
HOISTING
Existe en las variables y en las funciones. Las variables globales y las funciones tiene que estar generadas en las partes superiores del código, pero si esto no se controla se produce el hoisting
*******************************************************************************
*/
//Variable declaration
console.log(mascota);
var mascota = 'caimán'; //esto se llama hoisting. El navegador da undefined
// console log encuentra una variable que no está declarada y asigna el undefined a esa variable , hace var mascota = undefined;

//para evitar el hoisting los archivos se tienen que estructurar de la siguiente forma
//esto seria el incio del archivo 
/*
Primero se declaran las variables globales
Variables globales
*/
var ciudad = 'palma';
/*
Lurgo se declaran las funciones
Funciones
*/
function suma(a,b){

}
function resta(a,b){

}

// Débil tipado
3 + '3';
// El resultado será '33' en string. Utiliza el + para concatenar
10 * "10";
// El resultado es 100. Utiliza el *  bien (como el signo de multiplicar). Elimina el string del segundo 10
8 + true;
// EL resultado es 9 . Interpreta true como 1

//Coerción en JS
// Es la acción de forzar un valor a que se comporte como otro tipo de valor. Dos tipos:
// implícitas: el js genera por sí mismas
var implicita = 10 + "10"; //convierne el primer 10 a string y lo concatena
// explícita : las que nosotros obligamos
var explicito = 10 + Number("10"); 
//Number() es una función creada por JS. También sus nombres son palabras reservadas. Obligamos a través de Number a transformar el string "10" en numérico 10
//Ahora convierto número en texto
var explicito = String(10) + "10";

// BOOLEAN
Boolean(false); //false
Boolean(""); //false
Boolean(0); //false
Boolean(undefined); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(3>10);  //false
Boolean(true);//true
Boolean([]);//true
Boolean({});//true
Boolean(1);//true
Boolean(function(){}); //true

//Operadores aritméticos 
// + Suma
23+24 //devuelve 47

//- Resta
78-6 // devuelve 72

//* multiplicación
8*5 // devuelve 40

// / División
98/2 // devuelve 48

// % Resto de una división
16 % 5 // devuelve 1

//**  Potencia
2**3 //devuelve 8

// operadores de igualdad
// = operador de asignación, no es de igualdad
var nombre = 'rosa';
// ==  para comparar, pero no mira el tipo de valor, sólo el valor
5 == "5"; // es true
// === compara el valor y el tipo de valor
5 === "5"; //false
// != es el no igual. La exclamación añade un "no" a todo
5 != 5; // esto es false

// operadores de asignación
//   =
var num = 4;
//   +=
var num = num + 1;
num +=  1;
//   -=
num -= 2;
//   *=
num *= 3;
//   /=
num /= 2;

// operadores de comparación
//>
5>67; //false
//<
5<67// true
//>=
67>=67; //true
//<=
8<=43 //true