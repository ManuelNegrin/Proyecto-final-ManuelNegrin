// desplegar opciones de formulario
// funciona horrible, hay que ajustar formatos
// const descripcionTipo = document.querySelector ('#descripcionTipo')
// const tipoFormulario = document.querySelector ('#tipoFormulario')
// descripcionTipo.addEventListener ('mouseover', function (){
//     const descripcion = document.createElement ('span')
//     descripcion.className = 'contenido__formulario-descripcion'
//     descripcion.textContent = 'Tipos: Ropero, mesa, mesa de luz, recibidor, aparador, cristalero, bar, comoda, mesa ratona, sillas, juego de comedor'
//     tipoFormulario.insertAdjacentElement ("afterend", descripcion)
// })


// no funciona esto
// tipoFormulario.addEventListener ('mouseout', ()=> {
//     descripcion.remove ()
// })

// logica de presupuestacion

// array de costos
const costo = []
const mueble = {}
// selector de tipo
let tipo = prompt("Seleccione uno de los siguientes tipos: Ropero, Mesa, Mesa de luz, Recibidor, Aparador, Cristalero, Bar, Comoda, Mesa ratona, Sillas, Juego de comedor ", "Tipo de mueble");
if (tipo == 'Ropero') {
    console.log (tipo)
    mueble.tipoMueble = 'Ropero'
    costo[0] = ('5000')
} else if (tipo == 'Mesa') {
    console.log (tipo)
    costo[0] = ('4000')
} else if (tipo == 'Mesa de luz') {
    console.log (tipo)
    mueble.tipoMueble = 'Mesa de luz'
    costo[0] = ('2000')
} else if (tipo == 'Recibidor') {
    console.log (tipo)
    mueble.tipoMueble = 'Recibidor'
    costo[0] = ('4000')
} else if (tipo == 'Aparador') {
    console.log (tipo)
    mueble.tipoMueble = 'Aparador'
    costo[0] = ('5000')
} else if (tipo == 'Cristalero') {
    console.log (tipo)
    mueble.tipoMueble = 'Cristalero'
    costo[0] = ('5000')
} else if (tipo == 'Bar') {
    console.log (tipo)
    mueble.tipoMueble = 'Bar'
    costo[0] = ('4000')
} else if (tipo == 'Comoda') {
    console.log (tipo)
    mueble.tipoMueble = 'Comoda'
    costo[0] = ('4000')
} else if (tipo == 'Cómoda') {
    console.log (tipo)
    mueble.tipoMueble = 'Comoda'
    costo[0] = ('4000')
} else if (tipo == 'Mesa ratona') {
    console.log (tipo)
    mueble.tipoMueble = 'Mesa ratona'
    costo[0] = ('2000')
} else if (tipo == 'Sillas') {
    console.log (tipo)
    mueble.tipoMueble = 'Sillas'
    costo[0] = ('3000')
} else if (tipo == 'Juego de comedor') {
    console.log (tipo)
    mueble.tipoMueble = 'Juego de comedor'
    costo[0] = ('7000')
} else {
    costo [0]= ('0')
    //(alert ('Tipo de mueble incorrecto'))
}

// Selector de estilo
let estilo = prompt ("Seleccione uno de los siguientes estilos: Nordico, Frances, Provenzal, Americano", "Estilo del mueble")
if (estilo == 'Nordico') {
    console.log (estilo)
    mueble.estiloMueble = 'Nordico'
    costo[1] = ('5000')
} else if (estilo == 'Frances') {
    console.log (estilo)
    mueble.estiloMueble = 'Frances'
    costo[1] = ('4000')
} else if (estilo == 'Provenzal') {
    console.log (estilo)
    mueble.estiloMueble = 'Provenzal'
    costo[1] = ('2000')
} else if (estilo == 'Americano') {
    console.log (estilo)
    mueble.estiloMueble = 'Americano'
    costo[1] = ('4000')
} else {
    costo[1]= ('0')
    // (alert ('Tipo de mueble incorrecto'))
}

// Selector de tamaño
let tamaño = prompt ("Seleccione uno de los siguientes tamaños: Grande, Mediano, Chico", "Tamaño del mueble")
if (tamaño == 'Grande') {
    console.log (tamaño)
    mueble.tamañoMueble = 'Grande'
    costo[2] = ('1500')
} else if (tamaño == 'Mediano') {
    console.log (tamaño)
    mueble.tamañoMueble = 'Mediano'
    costo[2] = ('500')
} else if (tamaño == 'Chico') {
    console.log (tamaño)
    mueble.tamañoMueble = 'Chico'
    costo[2] = ('200')
} else { 
    costo[2]= ('0')
    // (alert ('Tipo de tamaño incorrecto'))
}

// Selector de tipo de pintura
let pintura = prompt ("Seleccione una opcion de pintura: Color basico, color personalizado", "Pintura del mueble")
if (pintura == 'Color basico') {
    console.log (pintura)
    mueble.pinturaMueble = 'Color basico'
    costo[3] = ('1500')
} else if (pintura == 'Color básico') {
    console.log (pintura)
    mueble.pinturaMueble = 'Color basico'
    costo[3] = ('500')
} else if (pintura == 'Color personalizado') {
    console.log (pintura)
    mueble.pinturaMueble = 'Color personalizado'
    costo[3] = ('200')
} else {
    costo[3]= ('0')
    // (alert ('Tipo de pintura incorrecto'))
}

// Selector de tipo de restauracion
let restauracion = prompt ("Seleccione una opcion de restauracion: Total, Parcial, Minima, Solo pintura", "Restauracion del mueble")
if (restauracion == 'Total') {
    console.log (restauracion)
    mueble.restauracionMueble = 'Total'
    costo[4] = ('5000')
} else if (restauracion == 'Parcial') {
    console.log (restauracion)
    mueble.restauracionMueble = 'Parcial'
    costo[4] = ('3500')
} else if (restauracion == 'Minima') {
    console.log (restauracion)
    mueble.restauracionMueble = 'Minima'
    costo[4] = ('2000')
} else if (restauracion == 'Solo pintura') {
    console.log (restauracion)
    mueble.restauracionMueble = 'Solo pintura'
    costo[4] = ('1000')
} else {
    costo[4]= ('0')
    // (alert ('Tipo de pintura incorrecto'))
}

console.log (costo)

let presupuesto = 0;
for (let i = 0; i<costo.length; i++){
    let costoInt = parseInt (costo[i])
    console.log (costoInt)
    presupuesto += costoInt
    }

console.log (mueble)
let verificador = costo.includes ('0')
if (verificador) {
    console.log ('Verificacion de datos=', !verificador )
    alert ('Los datos ingresados no estaban correctos')
} else {
    console.log ('Verificacion de datos=', !verificador )
    alert ('El presupuesto estimado es de $' + presupuesto )
}
