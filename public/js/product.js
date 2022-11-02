window.addEventListener('load', function () {

    let formulario = document.getElementById("form")

    formulario.onsubmit = (event) => {


        const errores = [];

        const nombre = document.querySelector("input[name=name]")
        if (nombre.value == "") {
            errores.push("El campo Nombre del producto no puede estar vacio")
        }

        const precio = document.querySelector("input[name=price]")
        if (precio.value == "") {
            errores.push("El campo precio no puede estar vacio")
        }

        const categoria = document.querySelector("input[name=category]")
        if (categoria.value == "") {
            errores.push("El campo categoria no puede estar vacio, seleccione una categoria")
        }
        const descripcion = document.querySelector("input[name=description]")
        if (descripcion.value == "") {
            errores.push("El campo descripcion no puede estar vacio")
        }

        const imagen = document.querySelector("input[name=image]")
        if (imagen.value == "") {
            errores.push("Debe subir una imagen del producto")
        }
        
        if (errores.length > 0) {
            event.preventDefault();

            const ulErrores = document.querySelector(".erroresBox")
            for (let i = 0; i < errores.length; i++) {

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            } 
        }
    }
