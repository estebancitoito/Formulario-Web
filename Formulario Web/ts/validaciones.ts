let formulario = document.getElementById("formulario");
let inputs = document.querySelectorAll("#formulario input");

let expresiones = {
    nombre: /^[a-zA-Z]+$/,
    apellido:  /^[a-zA-Z]+$/,
    rut: /^[0-9\-]/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
    telefono: /^[0-9]+$/
}

let campos = {
    nombre: false, apellido: false, rut: false, email: false, telefono: false
    
}

let validarFormulario = (e) =>{
    switch (e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                console.log("ta weno");
                document.querySelector("#grupoNombre .mensajeError").classList.remove("mensajeErrorActivo");
                campos["nombre"] = true;
            } else{
                console.log("ta malo");
                document.querySelector("#grupoNombre .mensajeError").classList.add("mensajeErrorActivo");
            }
        break;

        case "apellido":
            if(expresiones.apellido.test(e.target.value)){
                console.log("ta weno");
                document.querySelector("#grupoApellido .mensajeError").classList.remove("mensajeErrorActivo");
                campos["apellido"] = true;
            } else{
                console.log("ta malo");
                document.querySelector("#grupoApellido .mensajeError").classList.add("mensajeErrorActivo");
            }
        break;

        case "rut":
            if(expresiones.rut.test(e.target.value)){
                let cont = 0;
                let rutSeparado = e.target.value.split('');
                for(let i of rutSeparado){
                    if (i == "-") cont++;
                }
                if(cont == 1){
                    console.log("ta weno");
                    document.querySelector("#grupoRut .mensajeError").classList.remove("mensajeErrorActivo");
                    campos["rut"] = true;
                } else{
                    console.log("ta malo");
                    document.querySelector("#grupoRut .mensajeError").classList.add("mensajeErrorActivo");
                }
            }        
        break;

        case "email":
            if(expresiones.email.test(e.target.value)){
                let contArroba = 0;
                let emailSeparado = e.target.value.split('');
                for(let i of emailSeparado){
                    if (i == "@") contArroba++;
                }
                if(contArroba == 1){
                    console.log("ta weno");
                    document.querySelector("#grupoEmail .mensajeError").classList.remove("mensajeErrorActivo");
                } else{
                    console.log("ta malo");
                    document.querySelector("#grupoEmail .mensajeError").classList.add("mensajeErrorActivo");
                }
            }        
        break;

        case "telefono":
            if(expresiones.telefono.test(e.target.value)){
                if(expresiones.telefono.test(e.target.value) && e.target.value.length == 9){
                    console.log("ta weno");
                    document.querySelector("#grupoTelefono .mensajeError").classList.remove("mensajeErrorActivo");
                    campos["telefono"] = true;
                } else{
                    console.log("ta malo");
                    document.querySelector("#grupoTelefono .mensajeError").classList.add("mensajeErrorActivo");
                }
            }        
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario)
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let funka = false;
    if(campos.nombre && campos.apellido && campos.rut && campos.telefono){
        let cont = 0;
        
        let isCheckedPython = document.getElementById("python"); 
        let isCheckedJava = document.getElementById("java");
        let isCheckedTypeScript = document.getElementById("typescript");
        let isCheckedPHP = document.getElementById("php");
        let isCheckedCSharp= document.getElementById("csharp");
        let isCheckedCPlus = document.getElementById("cplus");

        if(isCheckedPython || isCheckedJava || isCheckedJava || isCheckedTypeScript || isCheckedPHP || isCheckedCSharp || isCheckedCPlus){
            console.log("ta weno");
            if(document.querySelector('input[name="experiencia"]:checked')) funka = true;
        }else{
            console.log("ta malo");
        }
    }

    if(funka){
        document.getElementById("formularioMensajeExito").classList.add("formularioMensajeExitoActivo");
    }
    else{
        document.getElementById("formularioMensaje").classList.add("formularioMensajeActivo")
    }
});
function limpiar(){
    this.formulario.reset();
}
document.getElementById("limpiar").addEventListener("click",function(){
    limpiar();
});