console.log(datos[144])

let mexico = {
    name:"Mexico",
    code:"MX"
} // Objeto 

console.log(mexico.name)
console.log(mexico.code)

let countries = document.getElementById('countries')

for(let i = 0; i < datos.length; i++){
    console.log("El pais es "+datos[i].name+" su capital es "+datos[i].capital)
    
    countries.innerHTML = countries.innerHTML + "<div class='col-lg-3 col-md-4 col-sm-6 col-6 text-center my-5'>" + "<button country='"+i+"' class='btn btn-danger btn-large' data-toggle='modal' data-target='#countryModal' >"+datos[i].name+"</button>"+"</div>"

    // for(let j=0; j < datos[i].borders.length; j++){
    //     console.log("Este Pais tiene de vecinos a "+ datos[i].borders[j])
    // }
}

let buttons = document.querySelectorAll('button.btn-danger')

console.log('Lista de botones ', buttons)

for(let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener('click',function(){
        let country = parseInt(buttons[i].getAttribute('country'));
        let name = document.querySelector('.modal-title')
        let image = document.getElementById('flag')
        let population =  document.getElementById('population')

        name.innerHTML = datos[country].name;
        image.setAttribute('src',datos[country].flag)
        population.innerHTML = "Poblacion: "+datos[country].population
        
    })


}



let arreglo = []
arreglo[0]
let objetos = { name:"Edwin Salgado"}
objetos.name


let edwin = {
    
    edad:26,
    trabaja:true,
    altura:1.70,
    genero:"Masculino",
    name:"Edwin Salgado",
}