
/*!
* Start Bootstrap - Business Casual v7.0.8 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
/* Hacer un codigo de elegir una comida cualquiera de las 3. Luego esas te lleven a otra funcion para poder agregarle algo a esa comida. Puede ser un medallón de carne extra a la hamburguesa o cheddar a las papasfritas*/
let saludo = alert ("Buenos dias ¡Gracias por elegirnos!");
let entrada = prompt("Por favor, elija una comida: \n1) Hamburguesa = $900 \n2) papas fritas = $600 \n3) Ensalada = $600 \n4) Para salir");
let salida = "esc"
let agregarAlgo = "0"

while (entrada !== salida) { 

    switch (entrada) {

        case "1":
            agregarHambur ();
            break;

        case "2":
            agregarCheddar();
            break;

        case "3":
            agregarTomate();
            break;

        default:
            sinCompra();
            break;
    }
    
}

function agregarHambur() {
    let entradaHambur = prompt("¿Desea agregarle un medallón de carne por $120? \n1) Si \n2) No");
    switch (entradaHambur) {
        case "1":
            alert ("Su precio final es $1020");
            break;
    
        case "2":
            alert("Su precio final es $900")
            break;
    }
    
    agregarAlgo = prompt("¿Quiere agregar algo mas? \n1) Si \n2) No")
    if (agregarAlgo == 1) {
        entrada = prompt("elija una comida: \n1) Hamburguesa \n2) papas fritas \n3) Ensalada \n4) Para salir");
    } else {
        entrada = salida;
    }
}

function agregarCheddar() {
    let entradaCheddar = prompt("¿Desea agregarle salsa cheddar por $200? \n1) Si \n2) No");
    switch (entradaCheddar) {
        case "1":
            alert ("Su precio final es $800");
            break;
    
        case "2":
            alert("Su precio final es $600")
            break;
    }
    
    agregarAlgo = prompt("Quiere agregar algo mas? \n1) Si \n2) No")
    if (agregarAlgo == 1) {
        entrada = prompt("elija una comida: \n1) Hamburguesa \n2) papas fritas \n3) Ensalada \n4) Para salir");
    } else {
        entrada = salida;
    }
}

function agregarTomate() {
    let entradaTomate = prompt("¿Desea agregarle tomate cherry por $150? \n1) Si \n2) No");
    switch (entradaTomate) {
        case "1":
            alert ("Su precio final es $750");
            break;
    
        case "2":
            alert("Su precio final es $600")
            break;
    }
    
    agregarAlgo = prompt("Quiere agregar algo mas? \n1) Si \n2) No")
    if (agregarAlgo == 1) {
        entrada = prompt("elija una comida: \n1) Hamburguesa \n2) papas fritas \n3) Ensalada \n4) Para salir");
    } else {
        entrada = salida;
    }
}

function sinCompra() {
    let seguro = prompt("Seguro que no quiere comprar nada? \n1)Si \n2)No");
    if (seguro == 1) {
        entrada = salida
    } else {
        entrada = prompt("elija una comida: \n1) Hamburguesa \n2) papas fritas \n3) Ensalada \n4) Para salir");
    }
}
