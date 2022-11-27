//3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt para que el usuario
// complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.
 
let persona2 = { nombre: "", apellido: "Pacheco", edad: 38, profesion: ""}

function verificarYLlenar(objeto) {
    for(const index in objeto) {
        if (objeto[index] === "") {
            objeto[index] = prompt(`El campo ${index} está vacío, por favor llenalo: `)
        }
    }
    return objeto
}
