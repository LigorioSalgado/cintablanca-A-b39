// 'use strict'
// // console.log("Hola Mundo!");//Esto imprime en consola hola mundo
// // /*  Este es un comentario multilinea  */

// // var nombre = "Edwin"; //String

// // console.log(nombre)
// // console.log("Nombre es del tipo ", typeof(nombre));

// // var edad = 26;  //Integer o entero

// // console.log(edad);
// // console.log("Edad es del tipo ", typeof(edad));

// // var tiene_lentes = true; //Boolean solo puede ser true o false

// // console.log(tiene_lentes); 
// // console.log("tiene_lentes es del tipo ", typeof(tiene_lentes));

// // var peso = 78.6; //Flotante o Float

// // console.log(peso);
// // console.log("peso es del tipo ", typeof(peso));

// // //tinpos de dato especiales

// // null // Vacio
// // undefined // No esta definico
// // Infinity // Divisdite entre 0 y es un numero infinito
// // NaN // Not at Number

// // var x = null;

// // x = 8;

// // //Cases 

// // //Camel Case

// // var tieneCoronavirus = false;

// // //snake case

// // var tiene_lentes = true;

// // // Operaciones
// // var suma =  3 + 4;

// // var resta = 9 - 5;

// // var multiplicacion = 6 * 5;

// // var division = 18 / 9;

// // console.log("La suma es",suma);
// // console.log("La resta es", resta);
// // console.log("La multiplicacion es",multiplicacion);
// // console.log("La division es",division);

// // var x = 4;
// // var y = 5;

// // //Acumuladores
// // //x =  x + y 
// // console.log(x += y);
// // //x = x - y
// // console.log(x -= y);
// // //x = x * y
// // console.log(x *= y);

// // //Residuo
// // console.log(y % x);

// // x = 6; // Numeber

// // y = "7" // String

// // console.log(x + y); // Concateno  67

// // y = "hola"

// // console.log(y + x); // hola6

// // y = "7"

// // console.log(x - y); // -1

// // y = "hola"

// // console.log(x - y); //NaN



// // // Operadores Logicos

// // var edad = 18;

// // // Comparación por valor

// // console.log("La comparación por valor de edad es :", edad == 18); //True

// // // Comparacion por tipo y valor
// // console.log("La comparación por tipo de edad es :", edad === "18"); //False

// // // Diferente por valor

// // console.log("La diferencia en edad es", edad != 18) // false
// // // Diferencia por tipo
// // console.log("La diferencia en edad es", edad !== "18") // true

// // // mayor que y menor que

// // console.log("Mayor que edad", 20 > edad); // true

// // console.log("Menor que edad ", 15 < edad); // true

// // console.log("Prueba de fuego menor que", 18 < edad) // false

// // // mayor igual y menor igual

// // console.log("Mayor igual ", 18 >= edad) // true
// // console.log("Menor igual ", 18 <= edad) // true

// // // Operadores and (Y)operadores  OR (O)

// // // Operador Y &&

// // var edad = 26;
// // var genero = "M";

// // console.log(" Operador and  que si sucede", edad >= 18 && genero == "M" ) // True
// // console.log(" Operador and  que no sucede", edad >= 18 && genero == "F" ) // False
// // console.log(" Operador and  que no sucede", edad <= 18 && genero == "M" ) // False
// // console.log(" Operador and  que no sucede", edad <= 18 && genero == "F" ) // False

// // // Operador O  ||

// // console.log(" Operador or  que si sucede", edad >= 18 || genero == "M" ) // True
// // console.log(" Operador or  que si sucede", edad >= 18 || genero == "F" ) // True
// // console.log(" Operador or  que si sucede", edad <= 18 || genero == "M" ) // True
// // console.log(" Operador or  que no sucede", edad <= 18 || genero == "F" ) // False


// // // // Setencia de control IF

// // // // = ---> asignacion
// // // // == comparación por valor
// // // // === comparacion por tipo y valor

// // var edad = prompt("¿Cuel es tu edad?");

// // if(edad >= 18){
// //     alert("Ya eres todo un señor 🤠");
// // }else if(edad == 15){
// //     alert("Para cuando la fiesta 🌚");
// // }else if(edad < 18){
// //     alert("Estas chiquito 👶🏻")
// // }
// // else{
// //     //Cualquier otra cosa que no estoy contemplando
// //     alert("No eres humano 👽");
// // }

// // var miArreglo = [1,2,3,4,5,6,7,8,9,0];
// // var miArreglo2 = ["Edwin","Ale","Hugo","Uriel","Elena"];
// // var miArreglo3 = [1.5,9.3,7.7,2.4];
// // var miArreglo4 = [true,false,false,true];
// // var miarreglo5 = [true,"Edwin",2,"Hugo",3.4];

// // var arregloCine = [
// //     [1,0,1,1,1,1,0,0,1],
// //     [1,0,1,1,1,1,0,0,1]
// //     [1,0,1,1,1,1,0,0,1]
// //     [1,0,1,1,1,1,0,0,1]
// // ];

// // var arregloFrutas = ["manzana","pera"];
// // console.log(arregloFrutas);
// // var nuevaFruta =  prompt("¿Agrega una nueva fruta?");
// // arregloFrutas.push(nuevaFruta); // Mete un nuevo elemento al arreglo
// // // console.log("Con push",arregloFrutas)
// // // console.log("Una pocision especifica", arregloFrutas[1]) //Asi sabemos la pocision del elemnto en el arreglo
// // // var ultimaFruta = arregloFrutas.pop()
// // // console.log("Con pop",arregloFrutas)
// // // console.log("ultima fruta",ultimaFruta)

// // // Ciclo for - while

// // for(var i=0; i < 5; i++){
// //     console.log("Primer for",i)
// // }
// // console.log("Valor final de i", i)


// // for(var j=1; j < 20; j*=2){
// //     console.log("Segundo for",j)
// // }

// // console.log("Valor final de j",j)

// // for(var i=0; i < arregloFrutas.length; i++ ){
// //     console.log("Mi fruta en la pocision "+i+" Es igual a "+arregloFrutas[i])
// // }

// // var arregloNumeroPar = [67,122,45,22,34,87,100,23,1234,5,9,12]

// // for(var i=0; i < arregloNumeroPar.length;i++){

// //     if( arregloNumeroPar[i] % 2 === 0){
// //         console.log("Este es un numero par"+arregloNumeroPar[i]+" Pocision: "+i)
// //     }

// // }


// // var arreglo =  [8,93,44,1,2]


// // Ciclo While

// //Functions

// //scope global
// var saludo = "Hola"
// let edad = 12
// const despedida  = []

// //const noCambia =

// function sumar(a,b){ //parametros a y b
//     console.log(a,b)
//     return a+b;
// }
// //console.log(otroNumero)
// let resultado  = sumar(10,22);
// console.log(resultado)
// //sumar(7,4);
// //sumar(100,628);
// //sumar(-44,10);
// function restar(a,b){ //Ecmascript 2015
//     let resta = a-b;
//     return resta;
// }

// let nuevoResultado = restar(8,resultado)

// //arrow function 
// console.log(nuevoResultado)

// let multiplicar = (a,b) => { //Ecmascript 2016 >
//     return a * b;
// }

// let multiplicacion = multiplicar(2, nuevoResultado);

// console.log(multiplicar(2, nuevoResultado))


// function dimeColor(color){

//     switch(color){

//         case 'blanco':
//             console.log("El blanco es un bonito color")
//         break;
//         case 'amarillo':
//             console.log("El sol es amarillo")
//         break;
//         case 'azul':
//             console.log("El mar es azul");
//         break;
//         default:
//             console.log("no conozco este color")
//         break;

//     }
//     // if(color === "blanco"){

//     // }else if(color === "amarillo"){

//     // }else if(color === "azul" ){

//     // }else{

//     // }

// }

// dimeColor(prompt("Dime un color"))

// function dimeTuEdad(edad){
//     switch(true){
//         case (edad >= 18):
//             alert("Ya eres todo un señor 🤠");
//         break;
//         case (edad === 15):
//             alert("Para cuando la fiesta 🌚");
//         break;
//         case (edad < 18):
//             alert("Estas chiquito 👶🏻")
//         break;
//         default:
//           alert("No eres humano 👽");
//         break;

//     }
// }

// //let input =  prompt("dime tu edad")

// //dimeTuEdad(input)

// let suma =  prompt('Dime tu suma?');

// console.log(suma)
// console.log(suma.split(''))


// // Operador ternario
// let numeroUsario = prompt("Eligue un numero?")

// let numeroMayor = numeroUsario == 15 ? "Escogiste un numero neutral" : numeroUsario >= 10 ? "Escogiste un numero mayor": "No escogite un numero mayor"

// // let numeroMayor = "";

// // if(numeroUsario >= 10){
// //     numeroMayor = "Escogiste un numero mayor"
// // }else{
// //     numeroMayor = "No escogite un numero mayor"
// // }

// console.log(numeroMayor)

// let x = 32243;

// function voltear(numero){
//     let toString = numero.toString();
//     let arrayNumbers =  toString.split('')
//     let newArray = []
//     for(let y=arrayNumbers.length-1; y >= 0; y--){
//         newArray.push(arrayNumbers[y])
//     }
//     return parseInt(newArray.join(''));
// }

// console.log(voltear(x))