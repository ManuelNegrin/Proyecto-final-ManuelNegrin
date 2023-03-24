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

    const formulario = document.getElementById ('formulario')
    // const presupuesto = document.getElementById ('displayPresupuesto')
    // presupuesto.innerHTML = `
    // <p>El presupuesto estimado para su mueble es de: $ ${suma} </p>
    // `
    var presupuesto = document.createElement("p");
    presupuesto.textContent = "El presupuesto estimado para su mueble es de: $ " + suma + "!";
    presupuesto.class = "contenido__formulario-presupuesto"
    presupuesto.style.display = "block"
    const boton = document.getElementById ('botonFormulario')
    boton.insertAdjacentElement ("afterend", presupuesto)
    // formulario.insertAdjacentElement ('afterend', presupuesto)

    console.log ('El presupuesto es: $',suma)

    // EN UN FUTURO LA SUMA SE GUARDA EN UN LOCALSTORAGE
    // PARA PODER USARLA EN LA PESTAÑA CONTACTO, E INCLUIR AHI EL PRESUPUESTO
    // localStorage.setItem ('Presupuesto', suma)
})

