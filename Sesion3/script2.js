/*2. Dado el siguiente objeto, crear una funcion que verifique si todos los atributos 
se encuentran llenos. En caso no sea asi, que envie una alerta mostrando un mensaje 
y los atributos que estan vacíos. Ejemplo: {nombre: "", apellido: "Pacheco", 
edad: 38, profesion: ""} => Los campos nombre y profesion se encuentran vacios.*/

let persona = { nombre: "", apellido: "Pacheco", edad: 38, profesion: ""}

function verificar(objeto) {
    for(const index in objeto) {
        if (objeto[index] === "") {
        console.log(`El campo ${index} está vacío`)
        }
    }
}
verificar(persona)
