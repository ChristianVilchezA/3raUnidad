//CADENAS DE TEXTO aka String
let nombre="chris";
let apellido=`vilchez`;
let saludo = new String("Hola Mundo")
let lorem =  "     Lorem ipsum dolor sit amet consectetur adipisicing amet. Nulla amet vero consectetur temporibus cumque ipsa voluptas mollitia labore illo odit sunt praesentium recusandae neque, blanditiis ipsam reiciendis suscipit? Mollitia, ea.      "

console.log(nombre, apellido, saludo)

console.log(
    nombre.length, 
    apellido.length, 
    saludo.length,

    nombre.toUpperCase(), //método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
    apellido.toLowerCase(), // devuelve el valor en minúsculas de la cadena que realiza la llamada.
    lorem.includes("amet"), //determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda
    lorem.includes("chrisisis"),
    lorem, 
    lorem.trim(),  // elimina los espacios en blanco en ambos extremos del string. 
    lorem.split(" "), //divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
    lorem.split(","),
)


// CONCATENACION
let saludo2= "Hola mi nombre es " + nombre + " " + apellido + "."
console.log(saludo2)

//INTERPOLACION DE VARIABLES 
    //Template String 
let union = (`Hola mi nombre es ${nombre} ${apellido}.`)
console.log(union)

let ul = "<ul> <li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>"
console.log(ul)

let ul2 = `  
<ul>
    <li>Primavera</li>
    <li>Vernoa</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>`
console.log(ul2)

let ul3 = "<ul>";
ul3 += "<li>Primavera</li>"
ul3 += "<li>Vernoa</li>"
ul3 += "<li>Otoño</li>"
ul3 += "<li>Invierno</li>"
ul3 += "</ul>" 
console.log(ul3)



//Números (Numbers)
let a = 2 ;
let b = new Number(1);
let c = 7.19; 
let d = "5.6"

console.log(a,b)
console.log(c.toFixed(1)) //formatea un número usando notación de punto fijo.
console.log(c.toFixed(5))

console.log(parseInt(c)) // devuelve un entero de la base especificada.
console.log(parseFloat(c))  // analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante.
console.log(typeof c, typeof d) //typeof devuelve una cadena que indica el tipo del operando sin evaluarlo.

console.log(a+b)
console.log(c+parseInt(d))
console.log(c+parseFloat(d))
console.log(c+ Number.parseInt(d))
console.log(c+ Number.parseFloat(d))

//BOOLEANOS 

let verdadero =true;
let falso = false; 
let v = Boolean(true)
let f = Boolean (false)

console.log(verdadero,falso,v,f)
console.log(typeof verdadero,typeof falso)

console.log(Boolean(0))
console.log(Boolean(-7))
console.log(Boolean(""))
console.log(Boolean(" "))

//Truthy 

/* if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity) */

//Falsy
/*
if (false) {}
if (null) {}
if (undefined) {} 
if (0) {}
if (-0) {}
if (0n) { }
if (NaN) {}
if ("") {}*/


//undefined, null & NaN  

/*
undefined =(nodefinida) una variable que no ha sido inicializada y que el valor esta ausente
null = es un valor especial que indica la ausencia de un valor y es asignado por el programador 
NaN - Not a Number 
*/

let indefinida; 
console.log(indefinida)

let nulo = null
console.log(nulo)

let noEsUnNumero = "hola" * 3.7; 
console.log (noEsUnNumero)