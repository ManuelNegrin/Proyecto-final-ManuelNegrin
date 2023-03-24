//SCRIPT DE INICIO DE SESION
var nomUsuario = "username";
var contUsuario = "password";
// sessionStorage.setItem ('flag', JSON.stringify(false))

//CHEQUEA SI HAY UNA SESION ACTIVA
if (JSON.parse(sessionStorage.getItem('flag'))===true) {
    console.log (sessionStorage.getItem('flag'))
    var formInicio = document.getElementById ("formInicio")
    var bienvenida = document.createElement("p");
    var salir = document.createElement("button")
    bienvenida.textContent = "Bienvenida/o, " + username + "!";
    bienvenida.style.color = "#94ffca"
    bienvenida.style.margin = '5px'
    salir.className = 'contenido__boton'
    salir.textContent ='Salir'
    salir.onclick = '"signOut()"'
    salir.style.backgroundColor = 'rgb(253, 165, 0)'
    formInicio.insertAdjacentElement ('beforebegin', bienvenida)
    bienvenida.insertAdjacentElement ('afterend', salir)
    formInicio.remove()
}  else {
    console.log(sessionStorage.getItem('flag'))
}


//Funcion inicio
function signIn() {
    //Levantar valores de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const userJSON =localStorage.getItem ('usuario')
    const user = JSON.parse (userJSON)

    //Chequea si el usuario y contraseña es valido, y elimina el form de acceso por un mensaje de bienvenida
    if (username === nomUsuario && password === contUsuario) {
        alert("Inicio de sesion correcto, BIENVENIDO");
        sessionStorage.setItem('flag', JSON.stringify(true))
        console.log(sessionStorage.getItem('flag'))
        var formInicio = document.getElementById ("formInicio")
        var bienvenida = document.createElement("p");
        bienvenida.textContent = "Bienvenida/o, " + username + "!";
        bienvenida.style.color = "#94ffca"
        bienvenida.style.margin = '5px'
        formInicio.insertAdjacentElement ('beforebegin', bienvenida)
        formInicio.remove()
    } else {
        if (username === user.nombre && password === user.contraseña) {
            alert("Inicio de sesion correcto, BIENVENIDO");
            sessionStorage.setItem('flag', JSON.stringify(true))
            console.log(sessionStorage.getItem('flag'))
            var formInicio = document.getElementById ("formInicio")
            var bienvenida = document.createElement("p");
            bienvenida.textContent = "Bienvenida/o, " + username + "!";
            bienvenida.style.color = "#94ffca"
            bienvenida.style.margin = '5px'
            formInicio.insertAdjacentElement ('beforebegin', bienvenida)
            formInicio.remove()
        }
        else {
            alert("Nombre de usuario o contraseña invalidos");
        }
    }
}

//Funcion nuevo usuario
function registrar (){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const usuario = {
        nombre: username,
        contraseña: password,
    }

    const usuarioJson =JSON.stringify (usuario)

    localStorage.setItem ('usuario', usuarioJson)
    //guarda los datosde inicio
    nomUsuario = username
    contUsuario = password
    console.log (username)
    console.log (nomUsuario)
    alert('Registro correcto')
 
}

function signOut (){
    sessionStorage.setItem ('flag', JSON.stringify(true))
}
