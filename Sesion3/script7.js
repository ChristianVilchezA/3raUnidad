/*7. Crear una funcion que nos permita ingresar el parametro 
por el cual se va a ordenar la lista de usuarios y retorne la lista
ordenada.*/

// 1. Crear una funcion que reciba un parametro.
// 2. Ordenar nuestra lista segun ese parametro.
// 3. Retorna la lista ordenada.

let users = [
    {nombre: "Javier", apellido: "Pacheco", edad: 38, profesion: "developer"},
    {nombre: "Andrea", apellido: "Lazo", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "Matos", edad: 32, profesion: "musico"},
    {nombre: "Juan", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef"},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]

function ordenar(parametro){
    if (parametro === "edad"){
        return users.sort((a,b) => a[parametro]-b[parametro])
    } else {
        return users.sort((a,b) => a[parametro].localeCompare(b[parametro]))
    }
}
console.log(ordenar)

