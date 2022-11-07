window.addEventListener('load', function () {

    let formulario = document.getElementById("form")

    formulario.onsubmit = (event) => {


        const errores = [];

        const nombre = document.querySelector("input[name=fullname]")
        if (nombre.value == "") {
            errores.push("El campo Nombre y Apellido no puede estar vacio")
        }

        const usuario = document.querySelector("input[name=username]")
        if (usuario.value == "") {
            errores.push("El campo Nombre de Usuario no puede estar vacio")
        }

        const email = document.querySelector("input[name=email]")
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.value == "") {
            errores.push("El campo Email no puede estar vacio")
        } else if (email.value.match(emailFormat)) {
            return true
        }
        else {
            errores.push("El formato del mail ingresado no es valido");
        }
    /* 
            const password = form.password.value;
            const repassword = form.repassword.value;
            const passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

            if (password === '') {
                errores.push('El campo Contraseña no puede estar vacio');
            } else {
                if (!passwordFormat(password)) {
                    errores.push('Deberá tener mínimo 8 caracteres, una letras mayúsculas, una letra minúsculas, un número y un caracter especial');
                } else {
                    setSuccessFor(password);
                }
            }

             if (repassword === '') {
                errores.push('El campo Confirmar contraseña no puede estar vacio')
            } else if (repassword !== password) {
                errores.push('Las contraseñas no coinciden');
                return false;
            } return true;  */
        console.log(errores)
        if (errores.length > 0) {
            event.preventDefault();

            const ulErrores = document.querySelector(".erroresBox")
                ulErrores.innerHTML = "" 
            for (let i = 0; i < errores.length; i++) {

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            } 
        }
    } 
    



}); 