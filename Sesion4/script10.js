 
 /** YANINA  */
//10. Crear una funcion que te permita ingresar en un prompt la informacion de un usuario de la siguiente manera:
// "Ingrese la informacion del usuario (nombre, apellido, edad, profesion)"
// El usuario digitara: Andres, Perez, 28, ingeniero.
// La informacion debe ser guardada como objeto dentro del array users asignadole un id unico a cada registro.
 /*
let usuario = prompt ("Ingrese la informacion del usuario (nombre, apellido, edad, profesion)")
console.log(usuario)
*/

/*NISELY*/
//11. Utilizando el objeto Date, añadir la propiedad created_date de manera interna en donde se registre el
// momento en que ese registro fue creado.
 
/** DOGGIE */
//12.
 
// let users = [
//     {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer", created_at: "2022-09-26T06:25:21.118Z"},
//     {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor", created_at: "2022-04-18T14:14:32.879Z"},
//     {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico", created_at: "2021-12-14T11:53:38.279Z"},
//     {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador", created_at: "2022-01-26T03:31:15.202Z"},
//     {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef", created_at: "2022-07-27T02:06:22.760Z"},
//     {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z"},
// ]
 
// Crear una funcion que permita ordenar la lista de usuarios por fecha de creacion, de la mas nueva a la mas antigua y viceversa
// utilizando el parametro booleano reverse (si es true se ordenaran de nuevo a antiguo)
/*
function ordenarPorFecha(reverse){
    if {

    } else {

    }
}*/
 
/* CHRISTIAN  */
//13. Crear una funcion que permita filtrar los usuarios por mes y año de creacion.

let users = [
    {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer", created_at: "2022-09-26T06:25:21.118Z"},
    {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor", created_at: "2022-04-18T14:14:32.879Z"},
    {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico", created_at: "2021-12-14T11:53:38.279Z"},
    {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador", created_at: "2022-01-26T03:31:15.202Z"},
    {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef", created_at: "2022-07-27T02:06:22.760Z"},
    {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z"},
]


/*function ordenar(año, mes){
    users.map(function(users){
    let fechas = (users.created_at)
    let year = fechas.split("-")[0]
    let month = fechas.split("-")[1]
    
    if (año == year & mes == month){
        console.log(users)
        console.log(year + " " + month )
    } else {
       // console.log("nooooooo")
    }
    }   
    ) 
}
*/


function ordenar2(año, mes){
    

    for (let i = 0; i<users.length; i++) {

        let fechas = (users.created_at)
        let year = fechas.split("-")[0]
        let month = fechas.split("-")[1]
        console.log(year + " " + month )

        if (año == year & mes == month){
            console.log(users)
            console.log(year + " " + month )
        } else {
           // console.log("nooooooo")
        }
        
    }


    
   
        
}
























/*
var Year = users.map(function(fecha){
    return fecha.created_at + " " + fecha.id + " " + fecha.nombre
})
console.log(Year)
console.log("----------------")


*/



// let valorBuscado = "2022"
// function filtro(valorBuscado){
   
//     const resultado = users.filter(usuario => usuario.created_at == valorBuscado)
//     console.log(resultado)
// }


   



/*


function filtroFecha(year){

    return item.created_at.getFullYear()

    return item.created_at.includes(users.created_at.getFullYear)
   

    //console.log(users.filter(item => item.created_at == mes,año))
    
}



var fecha = new Date("2022-07-27T02:06:22.760Z");
console.log (fecha)





users.forEach (function(created_at, info){
    console.log(created_at + "   " + info )
})


*/



















/*
let FiltrarMes = users.filter( item => {
    
  return item.created_at.getFullYear
} )

console.log(FiltrarMes)
*/



/*
const mes = users.map( d => new Date (d).getFullYear)
console.log(mes)


const moonLanding = new (users.created_at.Date);

console.log(moonLanding.getFullYear());

const array2 = [];

users.forEach(element => {
  array2.push(element.substr(8,2));
});

console.log(array2);
*/

/*
function filtroFecha(mes,año){


console.log(users.filter(item => item.created_at == mes,año))

}*/
/*
const today = new Date(users.created_at.getUTCMilliseconds)
console.log(today)
*/

/*3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados.
 La funcion debe aceptar un argumento para filtrar por type de pokemon.*/
/*

 function filterpokemons (argument){
    console.log(pokemons.filter( pokemon => pokemon.type ===argument ))
 }
 
 function filterpokemons (argument){
     let filteredPokemons = pokemons.filter( pokemon => pokemon.type ===argument) 
     let result = filteredPokemons.length === 0 ? "Tipo de Pokemon no encontrado" : filteredPokemon
     console.log(result)
 }*/
 




































//14. Elaborar un programa que permita al admin a traves de prompts y alerts lo siguiente:

// create read update delete

// CREATE
// El admin debe poder crear un nuevo registro de usuario utilizando la funcion 10. (puede utlizar un boton llamado crear usuario)
 
// READ
// El admin debe poder visualizar en pantalla los registros que estan siendo creados.
 
// UPDATE
// El admin, al presionar un boton: "Modificar registro" en la parte inferior de la lista de registros, debe
// ver un prompt que le pida que ingrese el id del registro que desea modificar, en caso no ingrese ninguno,
// debe volver a la pagina inicial. Si elige modificar alguno, debe aparecer nuevamente el prompt del ejercicio 10
// OJO: Cuando el admin modifique el registro, no se debe modificar la fecha de creacion, en su lugar debe aparecer
// un nuevo campo de fecha de modificacion.
 
// DELETE
// El admin, al presionar un boton: "Borrar registro" en la parte inferior de la lista de registros, debe ver
// un prompt que le pida ingresar el id del registro que desea borrar. Al dar click, debe aparecer un prompt
// que le pregunte: "Esta usted seguro? Si/No" y al escribir Si, deberia borrarlo. En cualquier otro caso
// deberia volver a la pagina inicial sin que se haya borrado ningun registro.
 
// OPCIONAL1: Añadir a la tabla la funcionalidad de ordenar los registros al hacer click en los encabezados
// (como en el caso de Pokemon). Sin embargo, al momento de hacer click nuevamente en el encabezado, los datos
// deben ordenarse de manera inversa. Ejemplo: Si al hacer click se ordenan de menor a mayor, al volver a hacer
// click deben ordenarse de mayor a menor.
 
// OPCIONAL2: Crear un selector que permita filtrar los datos por fecha.

