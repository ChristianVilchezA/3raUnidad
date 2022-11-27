/*6. Crear una funcion que nos permita escribir los datos de cada usuario 
en el navegador linea por linea de la siguiente manera:
Ejemplo: "Andres Soto tiene 28 años y es profesor"*/

/*
1. Recorrer el arreglo users
2. Obtener los valores de cada llave
3. Formar la frase nombre apellido tiene edad años y es profesion 
4. escribir frase en navegador 
*/


let users = [
    {nombre: "Javier", apellido: "Pacheco", edad: 38, profesion: "developer"},
    {nombre: "Andrea", apellido: "Lazo", edad: 25, profesion: "profesor"},
   {nombre: "Julia", apellido: "Matos", edad: 32, profesion: "musico"},
    {nombre: "Juan", apellido: "Martinez", edad: 29, profesion: "programador"},
   {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef"},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]

for (const index in users){
let nombre = users[index].nombre
let apellido = users[index].apellido
let edad = users[index].edad
let profesion = users[index].profesion

let frase = `${nombre} ${apellido} tiene ${edad} años y es ${profesion}`
//let frase = nombre + " " + apellido + " tiene " + edad + " años y es " + profesion

document.write (frase)
document.write ("<br>")
console.log(frase)

//console.log(users[index])  para verificar
}


