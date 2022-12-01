// // Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
// (function () {
//     'use strict'
  
//     // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
//     var forms = document.querySelectorAll('.needs-validation')
  
//     // Bucle sobre ellos y evitar el envío
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
  
//           form.classList.add('was-validated')
//         }, false)
//       })
//   })()


/*
function BotonSubmit(e){
  e.preventDefault()




  let FirstName = document.getElementById('inputFirstName').value




}*/






form.addEventListener("submit", e=> {
  e.preventDefault()
  

  const inputFirstName = document.getElementById("inputFirstName")
  const inputLastName = document.getElementById("inputLastName")
  const inputEmail = document.getElementById("inputEmail")
  const inputPhone = document.getElementById("inputPhone")
  const inputArea = document.getElementById("inputArea")
  const parrafo = document.getElementById("warnings")

  parrafo.innerHTML= ""


  let FirstName = document.getElementById("inputFirstName").value
  let LastName = document.getElementById("inputLastName").value
  let Email = document.getElementById("inputEmail").value
  let Phone = document.getElementById("inputPhone").value
  let Area = document.getElementById("inputArea").value

  let warnings = ""
  let exp_Email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  let exp_FirstName = /^[a-zA-ZÀ-ÿ\s]{4,40}$/
  let exp_LastName=/^[a-zA-ZÀ-ÿ\s]{4,40}$/
  let exp_Phone= /^9[0-9]{8,12}$/ 
  let exp_Mensaje=/^[a-zA-ZÀ-ÿ\s]{1,40}$/


  

  // console.log(inputFirstName.value.length)
  // console.log(exp_FirstName.test(inputFirstName.value))

  if (!exp_FirstName.test(FirstName)){
    warnings += `El Primer Nombre no es valido <br>`
    entrar1 = true
   
  }
  

  // if (!exp_LastName.test(LastName)){
  //   warnings += `El Segundo Nombre no es valido <br>`
  //   entrar2 = true
  // }

  // if(!exp_Email.test(inputEmail.value)){
  //   warnings += `El email no es valido <br>`
  //   entrar3 = true
  // }

  // if (!exp_Phone.test(Phone)){
  //   warnings += `El Numero de Celular no es valido <br>`
  //   entrar4 = true
  // }

  // if (!exp_Mensaje.test(Area)){
  //   warnings += `El Mensaje no es valido <br>`
  //   entrar5 = true
  // }

 


  if (entrar1 = true){
    parrafo.innerHTML = warnings
    console.log("no enviado1")
  } else {
    parrafo.innerHTML = "Enviado"
    console.log("enviado")
  }

})


 // if((inputFirstName.value.length < 4)){
  //   if (!exp_FirstName.test(inputFirstName.value) && inputFirstName.value.length < 4 )
  //   warnings += `El Primer Nombre no es valido <br>`
  //   entrar = true
  // }
