// "use strict"; //Vamos a usar javascript de manera stricta
// //iife -> Immediatly-invoked Function expresion
// //xss -> cross scripting 
// (function(){

//     // Selector
//     let inputName = document.getElementById('name')//Busca un elemento de html por su id
//     // inputName.value = "Edwin Salgado"
//     console.log(inputName);

//     let inputs = document.querySelectorAll('.form-control') // trae varios elemento dentro del dom
//     console.log(inputs)

//     let inputQuery = document.querySelector('input[placeholder="Your name"]'); //Busca por cualquier cosa diferente a ID

//     console.log(inputQuery)

//     //document.getElementsByClassName()
//     //document.getElementsByName()
//     //document.getElementsByTagName()

//     // Eventos
//     inputName.addEventListener('input',function(event){ //Funcion anonima
//         console.log(event.target.value)
//     })

//     let sendButton = document.getElementById('sendButton');

//     sendButton.addEventListener('click',function(){
//         let h5Title = document.querySelector('h5.modal-title');
//         let h5Text = document.querySelector('h5.modal-text');
//         let faltantes = []
        
//         for(let i=0; i < inputs.length; i++ ){
//             if(inputs[i].value == ""){
//                 let nameInput  = inputs[i].getAttribute('name')
//                 faltantes.push(nameInput)
//             }
//         }

//         if(faltantes.length > 0){

//             h5Title.innerHTML  = "¡Fallo!"
//             h5Text.innerHTML = "Falta: <br>"
//             let textos  = "";
//             for(let i=0; i < faltantes.length; i++){
//                 textos = textos + faltantes[i]+ "<br>"
//             }
//             console.log(textos);
//             h5Text.innerHTML =  h5Text.innerHTML + textos
           
//         }else{
//             h5Title.innerHTML = "¡Exito!"
//             h5Text.innerHTML = "Se han enviado los datos con exito"
//         }

//     })




// })()

// Ciclo For
///let arreglos = []
// i = i + 1  ---> i++ acumuladores
// i+=2 ----> i = i + 2
for(var i = 1; i <= 10; i++){
    console.log("Hola");
}

console.log(i)

for(var j=150; j > 0; j--){
    console.log("adios")
}

let links = ['About','Portafolio','Blog','Contact Us','Home','Team']
let lista = document.getElementById('lista')

// for(var i=3; i >= 0; i--){

//     lista.innerHTML = lista.innerHTML + "<li>"+links[i]+"</li>"
// }

for(var i=0; i < links.length; i++){

    if(links[i] == "Portafolio"){
        lista.innerHTML = lista.innerHTML + "<li style='color:red;'>"+links[i]+"</li>"
    }else if(links[i] == "Blog"){
        lista.innerHTML = lista.innerHTML + "<li style='color:blue;'>"+links[i]+"</li>"
    }
    else{
        lista.innerHTML = lista.innerHTML + "<li>"+links[i]+"</li>"
    }

}


let numeros = [7,11,6,0,2,8,5,9,3,1]

let mayor = numeros[0]

for(let i=0; i < numeros.length; i++){
    if(mayor < numeros[i]){
        mayor = numeros[i]
    }
}

console.log("Mi numero mayor es: ",mayor)


let palabras = ["hola","constitucion","paradoja","solucion","algoritmo"]

let palabraGrande = palabras[0]

for(let i=0; i < palabras.length; i++){

    if(palabraGrande.length < palabras[i].length){
        palabraGrande = palabras[i]
    }

}

console.log("Mi palabra mas grande es: "+palabraGrande)
console.log("La inicial de mi palabra mas grande es: "+palabraGrande[0])

