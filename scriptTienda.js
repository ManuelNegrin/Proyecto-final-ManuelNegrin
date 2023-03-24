const contenedorProductos = document.getElementById('contenedorProductos')

stockProductos.forEach ((producto) => {
    const article =document.createElement('article')
    article.classList.add ('contenido__tarjeta-articulo')
    article.innerHTML = `
    <div>
        <img class="contenido__tarjeta-imagen" ${producto.img} alt="">
    </div>
    <h3 class="contenido__stock__tarjeta-titulo">${producto.nombre} </h3>
    <p class="contenido__stock__tarjeta-descripcion">${producto.desc} </p>
    <p class="contenido__stock__tarjeta-descripcion">Precio: $ ${producto.precio} </p>
    <a class="contenido__stock__tarjeta-enlace" href="">Ver producto</a>
    `
    contenedorProductos.appendChild (article)

})