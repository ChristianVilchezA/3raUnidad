$(document).ready(function(){

$("#bEnviar").click(function(){
  const $nombre = $("#nombre");
  const $apellido = $("#apellido"); 
  const $email = $("#email");
  const $miFormulario = $("#miFormulario")
 

  function validarNombre() {
    const nombreCorrecto = /^[a-zA-ZÀ-ÿ\s]{4,40}$/.test($nombre.val());
    $nombre.removeClass("is-invalid");
    $nombre.addClass(nombreCorrecto ? "is-valid" : "is-invalid");

     if (nombreCorrecto == "") {
        $("mensaje1").fadeIn();
        alert("Nombre Incorrecto")
     }
  }

  function validarApellido() {
    const apellidoCorrecto = /^[a-zA-ZÀ-ÿ\s]{4,40}$/.test($apellido.val());
    $apellido.removeClass("is-invalid");
    $apellido.addClass(apellidoCorrecto ? "is-valid" : "is-invalid");
  }

  function validarEmail() {
    const emailCorrecto =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test($email.val());
    $email.removeClass("is-invalid");
    $email.addClass(emailCorrecto ? "is-valid" : "is-invalid");
  }

  function validar(e) {
    e.preventDefault();
    validarNombre();
    validarApellido();
    validarEmail();
  }

  $nombre.on("input", validarNombre);
  $apellido.on("input", validarApellido);
  $email.on("input", validarEmail);
  $miFormulario.on("submit", validar);

});
 });

