//DECLARAR VARIABLE EN JAVASCRIPT

var hola="Hola Mundo"   // var = variable de ambito global - SE CONSIDERA UNA MALA PRACTICA
let hello = "Hola World"    //let = variable de ambito de bloque USAR ESTO

console.log(hola);
console.log(hello);

console.log(window) // aqui aparecera la variable hola
console.log(window.hola)
console.log(window.hello)

console.log("**********var************")
var musica = "Rock";
console.log("Variable musica antes del bloque", musica)
{
    var musica="Pop";
    console.log("Variable musica dentro del bloque", musica);
}
console.log("Variable musica despues del bloque", musica)


console.log("**********let************")
let musica2 = "Rock";
console.log("Variable musica antes del bloque", musica2)
{
    let musica2="Pop";
    console.log("Variable musica dentro del bloque", musica2);
}
console.log("Variable musica despues del bloque", musica2)


//CONSTANTES EN JAVASCRIPT

//const ==> Nos va a permitir crear variables y se utiliza cuando tengamos variables que no cambien su valor
// No se puede tener const vacias  ejem: const NUEVE; con let si se puede hacer

const PI=3.1416 
console.log(PI)

let a; 
a = "kenai"
console.log(a)

/* ambos funcionaran igual 
let objeto = {
    nombre: "Jon",
    edad:35 
}

let colores = ["blanco", "negro", "azul"]

console.log(objeto)
console.log(colores)

objeto.correo = "christian.servtec@gmail.com"
colores.push("anaranjado")

console.log(objeto)
console.log(colores)
*/


const objeto = {
    nombre: "Jon",
    edad:35 
}

const colores = ["blanco", "negro", "azul"]

console.log(objeto)
console.log(colores)

objeto.correo = "christian.servtec@gmail.com"
colores.push("anaranjado")

console.log(objeto)
console.log(colores)