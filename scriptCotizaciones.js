// desplegar opciones de formulario
// funciona horrible, hay que ajustar formatos
const descripcionTipo = document.querySelector ('#descripcionTipo')
const tipoFormulario = document.querySelector ('#tipoFormulario')
descripcionTipo.addEventListener ('mouseover', function (){
    const descripcion = document.createElement ('span')
    descripcion.className = 'contenido__formulario-descripcion'
    descripcion.textContent = 'Tipos: Ropero, mesa, mesa de luz, recibidor, aparador, cristalero, bar, comoda, mesa ratona, sillas, juego de comedor'
    tipoFormulario.insertAdjacentElement ("afterend", descripcion)
})


// no funciona esto
// tipoFormulario.addEventListener ('mouseout', ()=> {
//     descripcion.remove ()
// })

// logica de presupuestacion
// ejecuta al apretar el boton de enviar
// no funciona extraer el valor del campo del formulario
const boton = document.querySelector ('#botonFormulario')
boton.addEventListener ('click', function () {
    
    // array de costos
    const costo = []

    // selector de tipo
    const tipo = document.getElementById ('#tipoFormulario')
    const valorTipo = tipo.value
    if (tipo == 'Ropero') {
        console.log (tipo)
        costo.push ('5000')
    } else if (tipo == 'Mesa') {
        console.log (tipo)
        costo.push ('4000')
    } else if (tipo == 'Mesa de luz') {
        console.log (tipo)
        costo.push ('2000')
    } else if (tipo == 'Recibidor') {
        console.log (tipo)
        costo.push ('4000')
    } else if (tipo == 'Aparador') {
        console.log (tipo)
        costo.push ('5000')
    } else if (tipo == 'Cristalero') {
        console.log (tipo)
        costo.push ('5000')
    } else if (tipo == 'Bar') {
        console.log (tipo)
        costo.push ('4000')
    } else if (tipo == 'Comoda') {
        console.log (tipo)
        costo.push ('4000')
    } else if (tipo == 'Cómoda') {
        console.log (tipo)
        costo.push ('4000')
    } else if (tipo == 'Mesa ratona') {
        console.log (tipo)
        costo.push ('2000')
    } else if (tipo == 'Sillas') {
        console.log (tipo)
        costo.push ('3000')
    } else if (tipo == 'Juego de comedor') {
        console.log (tipo)
        costo.push ('7000')
    } else (alert ('Tipo de mueble incorrecto'))

    // Selector de estilo
    const estilo = document.getElementById ('#estiloFormulario').value
    if (estilo == 'Nordico') {
        console.log (tipo)
        costo.push ('5000')
    } else if (estilo == 'Frances') {
        console.log (tipo)
        costo.push ('4000')
    } else if (estilo == 'Provenzal') {
        console.log (tipo)
        costo.push ('2000')
    } else if (estilo == 'Americano') {
        console.log (tipo)
        costo.push ('4000')
    } else (alert ('Tipo de mueble incorrecto'))

    // Selector de tamaño
    const tamaño = document.getElementById ('#tamañoFormulario').value
    if (tamaño == 'Grande') {
        console.log (tipo)
        costo.push ('1500')
    } else if (tamaño == 'Mediano') {
        console.log (tipo)
        costo.push ('500')
    } else if (tamaño == 'Chico') {
        console.log (tipo)
        costo.push ('200')
    } else (alert ('Tipo de tamaño incorrecto'))
    
    // Selector de tipo de pintura
    const pintura = document.getElementById ('#pinturaFormulario').value
    if (pintura == 'Color basico') {
        console.log (tipo)
        costo.push ('1500')
    } else if (pintura == 'Color básico') {
        console.log (tipo)
        costo.push ('500')
    } else if (pintura == 'Color personalizado') {
        console.log (tipo)
        costo.push ('200')
    } else (alert ('Tipo de pintura incorrecto'))

    // Selector de tipo de restauracion
    const restauracion = document.getElementById ('#restauracionFormulario')
    const valorRestauracion = restauracion.value
    if (valorRestauracion == 'Total') {
        console.log (tipo)
        costo.push ('5000')
    } else if (valorRestauracion == 'Parcial') {
        console.log (tipo)
        costo.push ('3500')
    } else if (valorRestauracion == 'Minima') {
        console.log (tipo)
        costo.push ('2000')
    } else if (valorRestauracion == 'Solo pintura') {
        console.log (tipo)
        costo.push ('1000')
    } else (alert ('Tipo de pintura incorrecto'))

    const presupuesto = '0'
    for (let i = 0; i>5; i++){
        presupuesto = presupuesto + costo[i]
        }
    alert ('El presupuesto estimado es de $' + presupuesto )
})
