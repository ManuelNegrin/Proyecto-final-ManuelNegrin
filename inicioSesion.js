//SCRIPT DE INICIO DE SESION
var nomUsuario = "username";
var contUsuario = "password";

//Funcion inicio
function signIn() {
    //Levantar valores de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //Chequea si el usuario y contraseña es valido, y elimina el form de acceso por un mensaje de bienvenida
    if (username === nomUsuario && password === contUsuario) {
        alert("Inicio de sesion correcto, BIENVENIDO");
        var formInicio = document.getElementById ("formInicio")
        var bienvenida = document.createElement("p");
        bienvenida.textContent = "Bienvenido, " + username + "!";
        bienvenida.style.color = "#94ffca"
        bienvenida.style.margin = '5px'
        formInicio.insertAdjacentElement ('beforebegin', bienvenida)
        formInicio.remove()
        
        console.log (bienvenida)
    } else {
        alert("Nombre de usuario o contraseña invalidos");
    }
}

//Funcion nuevo usuario
function registrar (){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //guarda los datosde inicio
    nomUsuario = username
    contUsuario = password
    console.log (username)
    console.log (nomUsuario)
    alert('Registro correcto')
 
}
