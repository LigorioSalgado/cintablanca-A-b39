"use strict"; //Vamos a usar javascript de manera stricta
//iife -> Immediatly-invoked Function expresion
//xss -> cross scripting 
(function(){

    // Selector
    let inputName = document.getElementById('name')//Busca un elemento de html por su id
    // inputName.value = "Edwin Salgado"
    console.log(inputName);

    let inputs = document.querySelectorAll('.form-control') // trae varios elemento dentro del dom
    console.log(inputs)

    let inputQuery = document.querySelector('input[placeholder="Your name"]'); //Busca por cualquier cosa diferente a ID

    console.log(inputQuery)

    //document.getElementsByClassName()
    //document.getElementsByName()
    //document.getElementsByTagName()

    // Eventos
    inputName.addEventListener('input',function(event){ //Funcion anonima
        console.log(event.target.value)
    })

    let sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click',function(){
        let h5Title = document.querySelector('h5.modal-title');
        let h5Text = document.querySelector('h5.modal-text');
        let faltantes = []
        
        for(let i=0; i < inputs.length; i++ ){
            if(inputs[i].value == ""){
                let nameInput  = inputs[i].getAttribute('name')
                faltantes.push(nameInput)
            }
        }

        if(faltantes.length > 0){

            h5Title.innerHTML  = "¡Fallo!"
            h5Text.innerHTML = "Falta: <br>"
            let textos  = "";
            for(let i=0; i < faltantes.length; i++){
                textos = textos + faltantes[i]+ "<br>"
            }
            console.log(textos);
            h5Text.innerHTML =  h5Text.innerHTML + textos
           
        }else{
            h5Title.innerHTML = "¡Exito!"
            h5Text.innerHTML = "Se han enviado los datos con exito"
        }

    })




})()