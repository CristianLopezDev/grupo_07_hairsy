const User = require("../../src/database/models/User");

window.addEventListener('load', function () {

    let formulario = document.getElementById("form")

    formulario.onsubmit = (event) => {


        const errores = [];

        const nombre = document.querySelector("input[name=username]")
        if (nombre.value == "") {
            errores.push("El campo Usuario no puede estar vacio")
        }
        
        const password = form.password.value;
        const repassword = document.getElementById('password').value;
            if (repassword !== password) {
                errores.push('Las contraseñas no coinciden');
                return false;
            } return true;
        
        if (errores.length > 0) {
            event.preventDefault();

            const ulErrores = document.querySelector(".erroresBox")
            for (let i = 0; i < errores.length; i++) {

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            } 
        }
    } 
    






const intentos = 3; 

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == User.username && password == User.password){
alert ("Login exitoso");
window.location = "/profile"; 
return false;
}
else{
intentos --;
alert("Te quedan "+intentos+" intentos;");

if( intentos == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}


}); 
