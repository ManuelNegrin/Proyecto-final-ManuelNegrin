// FORMULARIO TIPO

const formTipo = document.getElementById ('tipoDeMueble')
const separadorTipo = document.getElementById ('separadorTipo')

formTipo.addEventListener ('click', function(){
    document.getElementById ('menuTipo').style.display = 'block'
    separadorTipo.style.display = "block"
})
const tipoRopero = document.getElementById ('tipoRopero')
console.log (tipoRopero)
tipoRopero.addEventListener ('click', function (){
    const menu = document.getElementById ('menuTipo')
    sessionStorage.setItem ('tipo', '5000')
    console.log (menu)
    menu.style.display ='none'
    separadorTipo.style.display = "none"
    formTipo.textContent = 'Ropero'
})
const tipoMesa = document.getElementById ('tipoMesa')
console.log(tipoMesa)
tipoMesa.addEventListener ('click', function (){
    const menu = document.getElementById ('menuTipo')
    sessionStorage.setItem ('tipo', '4000')
    menu.style.display ='none'
    separadorTipo.style.display = "none"
    formTipo.textContent = 'Mesa'
})
const tipoRecibidor = document.getElementById ('tipoRecibidor')
console.log(tipoRecibidor)
tipoRecibidor.addEventListener ('click', function (){
    const menu = document.getElementById ('menuTipo')
    sessionStorage.setItem ('tipo', '4000')
    menu.style.display ='none'
    separadorTipo.style.display = "none"
    formTipo.textContent = 'Recibidor' 
})
const tipoAparador = document.getElementById ('tipoAparador')
console.log(tipoAparador)
tipoAparador.addEventListener ('click', function (){
    const menu = document.getElementById ('menuTipo')
    sessionStorage.setItem ('tipo', '3000')
    menu.style.display ='none'
    separadorTipo.style.display = "none"
    formTipo.textContent = 'Aparador' 
})
const tipoCristalero = document.getElementById ('tipoCristalero')
console.log(tipoCristalero)
tipoCristalero.addEventListener ('click', function (){
    const menu = document.getElementById ('menuTipo')
    sessionStorage.setItem ('tipo', '6000')
    menu.style.display ='none'
    separadorTipo.style.display = "none"
    formTipo.textContent = 'Cristalero' 
})
const tipoBar = document.getElementById ('tipoBar')
console.log(tipoBar)
tipoBar.addEventListener ('click', function (){
    const menu = document.getElementById ('menuTipo')
    sessionStorage.setItem ('tipo', '3500')
    menu.style.display ='none'
    separadorTipo.style.display = "none"
    formTipo.textContent = 'Bar' 
})
const tipoComoda = document.getElementById ('tipoComoda')
console.log(tipoComoda)
tipoComoda.addEventListener ('click', function (){
    const menu = document.getElementById ('menuTipo')
    sessionStorage.setItem ('tipo', '3000')
    // Chequeo de storage
    console.log (sessionStorage.getItem('tipo'))
    menu.style.display ='none'
    separadorTipo.style.display = "none"
    formTipo.textContent = 'Comoda' 
})


// FORMULARIO ESTILO

const formEstilo = document.getElementById ('estiloDeMueble')
const separadorEstilo = document.getElementById ('separadorEstilo')

formEstilo.addEventListener ('click', function(){
    document.getElementById ('menuEstilo').style.display = 'block'
    separadorEstilo.style.display = "block"
})
const estiloNord = document.getElementById ('estiloNord')
console.log(estiloNord)
estiloNord.addEventListener ('click', function (){
    document.getElementById ('menuEstilo').style.display = 'none'
    sessionStorage.setItem ('estilo', '3000')
    separadorEstilo.style.display = "none"
    formEstilo.textContent = 'Nordico ' 
})
const estiloProv = document.getElementById ('estiloProv')
console.log(estiloProv)
estiloProv.addEventListener ('click', function (){
    document.getElementById ('menuEstilo').style.display = 'none'
    sessionStorage.setItem ('estilo', '3000')
    separadorEstilo.style.display = "none"
    formEstilo.textContent = 'Provenzal ' 
})
const estiloAm = document.getElementById ('estiloAm')
console.log(estiloAm)
estiloAm.addEventListener ('click', function (){
    document.getElementById ('menuEstilo').style.display = 'none'
    sessionStorage.setItem ('estilo', '3000')
    separadorEstilo.style.display = "none"
    formEstilo.textContent = 'Americano' 
})
const estiloFr = document.getElementById ('estiloFr')
console.log(estiloFr)
estiloFr.addEventListener ('click', function (){
    document.getElementById ('menuEstilo').style.display = 'none'
    sessionStorage.setItem ('estilo', '3000')
    separadorEstilo.style.display = "none"
    formEstilo.textContent = 'Frances' 
})


// FORMULARIO TAMAÑO

const formTamaño = document.getElementById ('tamañoDeMueble')
const separadorTamaño = document.getElementById ('separadorTamaño')

formTamaño.addEventListener ('click', function(){
    document.getElementById ('menuTamaño').style.display = 'block'
    separadorTamaño.style.display = "block"
})
const tamañoGrande = document.getElementById ('tamañoGrande')
console.log(tamañoGrande)
tamañoGrande.addEventListener ('click', function (){
    document.getElementById ('menuTamaño').style.display = 'none'
    sessionStorage.setItem ('tamaño', '3000')
    separadorTamaño.style.display = "none"
    formTamaño.textContent = 'Grande' 
})
const tamañoMediano = document.getElementById ('tamañoMediano')
console.log(tamañoMediano)
tamañoMediano.addEventListener ('click', function (){
    document.getElementById ('menuTamaño').style.display = 'none'
    sessionStorage.setItem ('tamaño', '2000')
    separadorTamaño.style.display = "none"
    formTamaño.textContent = 'Mediano' 
})
const tamañoChico = document.getElementById ('tamañoChico')
console.log(tamañoChico)
tamañoChico.addEventListener ('click', function (){
    document.getElementById ('menuTamaño').style.display = 'none'
    sessionStorage.setItem ('tamaño', '1000')
    separadorTamaño.style.display = "none"
    formTamaño.textContent = 'Chico' 
})


// FORMULARIO PINTURA

const formPintura = document.getElementById ('pinturaDeMueble')
const separadorPintura = document.getElementById ('separadorPintura')

formPintura.addEventListener ('click', function(){
    document.getElementById ('menuPintura').style.display = 'block'
    separadorPintura.style.display = "block"
})
const pinturaBasico = document.getElementById ('pinturaBasico')
console.log(pinturaBasico)
pinturaBasico.addEventListener ('click', function (){
    const menu = document.getElementById ('menuPintura')
    console.log (menu)
    menu.style.display ='none'
    separadorPintura.style.display = "none"
    formPintura.textContent = 'Color basico' 
    sessionStorage.setItem ('pintura', '2000')
})
const pinturaPers = document.getElementById ('pinturaPers')
console.log(pinturaPers)
pinturaPers.addEventListener ('click', function (){
    document.getElementById ('menuPintura').style.display = 'none'
    sessionStorage.setItem ('pintura', '3000')
    separadorPintura.style.display = "none"
    formPintura.textContent = 'Color personalizado' 
})


// FORMULARIO RESTAURACION

const formRest = document.getElementById ('restauracionDeMueble')
const separadorRest = document.getElementById ('separadorRest')

formRest.addEventListener ('click', function(){
    document.getElementById ('menuRest').style.display = 'block'
    separadorRest.style.display = "block"
})
const restTotal = document.getElementById ('restTotal')
console.log(restTotal)
restTotal.addEventListener ('click', function (){
    sessionStorage.setItem ('rest', '5000')
    const menu = document.getElementById ('menuRest')
    console.log (menu)
    menu.style.display ='none'
    separadorRest.style.display = "none"
    formRest.textContent = 'Restauracion total' 
})
const restParcial = document.getElementById ('restParcial')
console.log(restParcial)
restParcial.addEventListener ('click', function (){
    sessionStorage.setItem ('rest', '4000')
    document.getElementById ('menuRest').style.display = 'none'
    separadorRest.style.display = "none"
    formRest.textContent = 'Restauracion parcial' 
})
const restMin = document.getElementById ('restMin')
console.log(restMin)
restMin.addEventListener ('click', function (){
    const menu = document.getElementById ('menuRest')
    sessionStorage.setItem ('rest', '3000')
    console.log (menu)
    menu.style.display ='none'
    separadorRest.style.display = "none"
    formRest.textContent = 'Restauracion minima' 
})
const restPïnt = document.getElementById ('restPïnt')
console.log(restPïnt)
restPïnt.addEventListener ('click', function (){
    const menu = document.getElementById ('menuRest')
    console.log (menu)
    menu.style.display ='none'
    separadorRest.style.display = "none"
    formRest.textContent = 'Solo pintura' 
    sessionStorage.setItem ('rest', '1000')
})


// EJECUCION DEL PRESUPUESTADOR

const botonFormulario = document.getElementById ('botonFormulario')
botonFormulario.addEventListener ('click', function (){
    let mueble = parseInt (sessionStorage.getItem ('tipo'))
    let estilo = parseInt (sessionStorage.getItem ('estilo'))
    let tamaño = parseInt (sessionStorage.getItem ('tamaño'))
    let pintura = parseInt (sessionStorage.getItem ('pintura'))
    let restauracion = parseInt (sessionStorage.getItem ('rest'))

    let suma = mueble+estilo+tamaño+pintura+restauracion

    console.log ('El presupuesto es: $',suma)

    // EN UN FUTURO LA SUMA SE GUARDA EN UN LOCALSTORAGE
    // PARA PODER USARLA EN LA PESTAÑA CONTACTO, E INCLUIR AHI EL PRESUPUESTO
    // localStorage.setItem ('Presupuesto', suma)
})

// function cambiarDisplay (){ 
//     let menu = document.getElementById ('menuTipo')
//     console.log (menu)
//     menu.style.display = 'block'
// }

// no funciona esto
// tipoFormulario.addEventListener ('mouseout', ()=> {
//     descripcion.remove ()
// })

// logica de presupuestacion

// array de costos
// const costo = []
// const mueble = {}
// // selector de tipo
// let tipo = prompt("Seleccione uno de los siguientes tipos: Ropero, Mesa, Mesa de luz, Recibidor, Aparador, Cristalero, Bar, Comoda, Mesa ratona, Sillas, Juego de comedor ", "Tipo de mueble");
// if (tipo == 'Ropero') {
//     console.log (tipo)
//     mueble.tipoMueble = 'Ropero'
//     costo[0] = ('5000')
// } else if (tipo == 'Mesa') {
//     console.log (tipo)
//     costo[0] = ('4000')
// } else if (tipo == 'Mesa de luz') {
//     console.log (tipo)
//     mueble.tipoMueble = 'Mesa de luz'
//     costo[0] = ('2000')
// } else if (tipo == 'Recibidor') {
//     console.log (tipo)
//     mueble.tipoMueble = 'Recibidor'
//     costo[0] = ('4000')
// } else if (tipo == 'Aparador') {
//     console.log (tipo)
//     mueble.tipoMueble = 'Aparador'
//     costo[0] = ('5000')
// } else if (tipo == 'Cristalero') {
//     console.log (tipo)
//     mueble.tipoMueble = 'Cristalero'
//     costo[0] = ('5000')
// } else if (tipo == 'Bar') {
//     console.log (tipo)
//     mueble.tipoMueble = 'Bar'
//     costo[0] = ('4000')
// } else if (tipo == 'Comoda') {
//     console.log (tipo)
//     mueble.tipoMueble = 'Comoda'
//     costo[0] = ('4000')
// } else if (tipo == 'Cómoda') {
//     console.log (tipo)
//     mueble.tipoMueble = 'Comoda'
//     costo[0] = ('4000')
// } else if (tipo == 'Mesa ratona') {
//     console.log (tipo)
//     mueble.tipoMueble = 'Mesa ratona'
//     costo[0] = ('2000')
// } else if (tipo == 'Sillas') {
//     console.log (tipo)
//     mueble.tipoMueble = 'Sillas'
//     costo[0] = ('3000')
// } else if (tipo == 'Juego de comedor') {
//     console.log (tipo)
//     mueble.tipoMueble = 'Juego de comedor'
//     costo[0] = ('7000')
// } else {
//     costo [0]= ('0')
//     //(alert ('Tipo de mueble incorrecto'))
// }

// // Selector de estilo
// let estilo = prompt ("Seleccione uno de los siguientes estilos: Nordico, Frances, Provenzal, Americano", "Estilo del mueble")
// if (estilo == 'Nordico') {
//     console.log (estilo)
//     mueble.estiloMueble = 'Nordico'
//     costo[1] = ('5000')
// } else if (estilo == 'Frances') {
//     console.log (estilo)
//     mueble.estiloMueble = 'Frances'
//     costo[1] = ('4000')
// } else if (estilo == 'Provenzal') {
//     console.log (estilo)
//     mueble.estiloMueble = 'Provenzal'
//     costo[1] = ('2000')
// } else if (estilo == 'Americano') {
//     console.log (estilo)
//     mueble.estiloMueble = 'Americano'
//     costo[1] = ('4000')
// } else {
//     costo[1]= ('0')
//     // (alert ('Tipo de mueble incorrecto'))
// }

// // Selector de tamaño
// let tamaño = prompt ("Seleccione uno de los siguientes tamaños: Grande, Mediano, Chico", "Tamaño del mueble")
// if (tamaño == 'Grande') {
//     console.log (tamaño)
//     mueble.tamañoMueble = 'Grande'
//     costo[2] = ('1500')
// } else if (tamaño == 'Mediano') {
//     console.log (tamaño)
//     mueble.tamañoMueble = 'Mediano'
//     costo[2] = ('500')
// } else if (tamaño == 'Chico') {
//     console.log (tamaño)
//     mueble.tamañoMueble = 'Chico'
//     costo[2] = ('200')
// } else { 
//     costo[2]= ('0')
//     // (alert ('Tipo de tamaño incorrecto'))
// }

// // Selector de tipo de pintura
// let pintura = prompt ("Seleccione una opcion de pintura: Color basico, color personalizado", "Pintura del mueble")
// if (pintura == 'Color basico') {
//     console.log (pintura)
//     mueble.pinturaMueble = 'Color basico'
//     costo[3] = ('1500')
// } else if (pintura == 'Color básico') {
//     console.log (pintura)
//     mueble.pinturaMueble = 'Color basico'
//     costo[3] = ('500')
// } else if (pintura == 'Color personalizado') {
//     console.log (pintura)
//     mueble.pinturaMueble = 'Color personalizado'
//     costo[3] = ('200')
// } else {
//     costo[3]= ('0')
//     // (alert ('Tipo de pintura incorrecto'))
// }

// // Selector de tipo de restauracion
// let restauracion = prompt ("Seleccione una opcion de restauracion: Total, Parcial, Minima, Solo pintura", "Restauracion del mueble")
// if (restauracion == 'Total') {
//     console.log (restauracion)
//     mueble.restauracionMueble = 'Total'
//     costo[4] = ('5000')
// } else if (restauracion == 'Parcial') {
//     console.log (restauracion)
//     mueble.restauracionMueble = 'Parcial'
//     costo[4] = ('3500')
// } else if (restauracion == 'Minima') {
//     console.log (restauracion)
//     mueble.restauracionMueble = 'Minima'
//     costo[4] = ('2000')
// } else if (restauracion == 'Solo pintura') {
//     console.log (restauracion)
//     mueble.restauracionMueble = 'Solo pintura'
//     costo[4] = ('1000')
// } else {
//     costo[4]= ('0')
//     // (alert ('Tipo de pintura incorrecto'))
// }

// console.log (costo)

// let presupuesto = 0;
// for (let i = 0; i<costo.length; i++){
//     let costoInt = parseInt (costo[i])
//     console.log (costoInt)
//     presupuesto += costoInt
//     }

// console.log (mueble)
// let verificador = costo.includes ('0')
// if (verificador) {
//     console.log ('Verificacion de datos=', !verificador )
//     alert ('Los datos ingresados no estaban correctos')
// } else {
//     console.log ('Verificacion de datos=', !verificador )
//     alert ('El presupuesto estimado es de $' + presupuesto )
// }
