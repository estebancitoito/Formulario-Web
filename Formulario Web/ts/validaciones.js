var formulario = document.getElementById("formulario");
var inputs = document.querySelectorAll("#formulario input");
var expresiones = {
    nombre: /^[a-zA-Z]+$/,
    apellido: /^[a-zA-Z]+$/,
    rut: /^[0-9\-]/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
    telefono: /^[0-9]+$/
};
var campos = {
    nombre: false, apellido: false, rut: false, email: false, telefono: false
};
var validarFormulario = function (e) {
    switch (e.target.name) {
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {
                console.log("ta weno");
                document.querySelector("#grupoNombre .mensajeError").classList.remove("mensajeErrorActivo");
                campos["nombre"] = true;
            }
            else {
                console.log("ta malo");
                document.querySelector("#grupoNombre .mensajeError").classList.add("mensajeErrorActivo");
            }
            break;
        case "apellido":
            if (expresiones.apellido.test(e.target.value)) {
                console.log("ta weno");
                document.querySelector("#grupoApellido .mensajeError").classList.remove("mensajeErrorActivo");
                campos["apellido"] = true;
            }
            else {
                console.log("ta malo");
                document.querySelector("#grupoApellido .mensajeError").classList.add("mensajeErrorActivo");
            }
            break;
        case "rut":
            if (expresiones.rut.test(e.target.value)) {
                var cont = 0;
                var rutSeparado = e.target.value.split('');
                for (var _i = 0, rutSeparado_1 = rutSeparado; _i < rutSeparado_1.length; _i++) {
                    var i = rutSeparado_1[_i];
                    if (i == "-")
                        cont++;
                }
                if (cont == 1) {
                    console.log("ta weno");
                    document.querySelector("#grupoRut .mensajeError").classList.remove("mensajeErrorActivo");
                    campos["rut"] = true;
                }
                else {
                    console.log("ta malo");
                    document.querySelector("#grupoRut .mensajeError").classList.add("mensajeErrorActivo");
                }
            }
            break;
        case "email":
            if (expresiones.email.test(e.target.value)) {
                var contArroba = 0;
                var emailSeparado = e.target.value.split('');
                for (var _a = 0, emailSeparado_1 = emailSeparado; _a < emailSeparado_1.length; _a++) {
                    var i = emailSeparado_1[_a];
                    if (i == "@")
                        contArroba++;
                }
                if (contArroba == 1) {
                    console.log("ta weno");
                    document.querySelector("#grupoEmail .mensajeError").classList.remove("mensajeErrorActivo");
                }
                else {
                    console.log("ta malo");
                    document.querySelector("#grupoEmail .mensajeError").classList.add("mensajeErrorActivo");
                }
            }
            break;
        case "telefono":
            if (expresiones.telefono.test(e.target.value)) {
                if (expresiones.telefono.test(e.target.value) && e.target.value.length == 9) {
                    console.log("ta weno");
                    document.querySelector("#grupoTelefono .mensajeError").classList.remove("mensajeErrorActivo");
                    campos["telefono"] = true;
                }
                else {
                    console.log("ta malo");
                    document.querySelector("#grupoTelefono .mensajeError").classList.add("mensajeErrorActivo");
                }
            }
            break;
    }
};
inputs.forEach(function (input) {
    input.addEventListener("keyup", validarFormulario);
});
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    var funka = false;
    if (campos.nombre && campos.apellido && campos.rut && campos.telefono) {
        var cont = 0;
        var isCheckedPython = document.getElementById("python");
        var isCheckedJava = document.getElementById("java");
        var isCheckedTypeScript = document.getElementById("typescript");
        var isCheckedPHP = document.getElementById("php");
        var isCheckedCSharp = document.getElementById("csharp");
        var isCheckedCPlus = document.getElementById("cplus");
        if (isCheckedPython || isCheckedJava || isCheckedJava || isCheckedTypeScript || isCheckedPHP || isCheckedCSharp || isCheckedCPlus) {
            console.log("ta weno");
            if (document.querySelector('input[name="experiencia"]:checked'))
                funka = true;
        }
        else {
            console.log("ta malo");
        }
    }
    if (funka) {
        document.getElementById("formularioMensajeExito").classList.add("formularioMensajeExitoActivo");
    }
    else {
        document.getElementById("formularioMensaje").classList.add("formularioMensajeActivo");
    }
});
function limpiar() {
    this.formulario.reset();
}
document.getElementById("limpiar").addEventListener("click", function () {
    limpiar();
});
