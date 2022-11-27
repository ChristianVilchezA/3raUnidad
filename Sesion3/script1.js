//1. Crear una funcion que convierta los strings que se ingresan 
//como parametros a estilo capitalizado. Ejemplo: "hola a todos" => "Hola A Todos"

/*
1. Separar las palabras
2. Seleccionar la primera letra de cada palabra
3. Transformar esa letra en una mayuscula
4. Armar nuevamente la palabra con la primera letra mayuscula
5. Volver a unir todas las palabras.*/

let frase = "hola a todos" // "Hola a todos"

function capitalizar(cadena){ //"hola a todos"
    let array = cadena.split(" ") // ["hola", "a", "todos"]
    let cadenaCapitalizada = []

    for(const index in array){
        cadenaCapitalizada.push((array[index].charAt(0).toUpperCase() + array[index].slice(1))) // h   a   t
    }
    return cadenaCapitalizada.join(" ")
}
