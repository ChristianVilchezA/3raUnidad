/*function suma(parametro1, parametro2){
    let resultado = parametro1 + parametro2
    return resultado
}
console.log(suma(15,320))


const suma2 = (par1, par2) => {
    let resultado2 = par1 + par2
    return resultado2
}

console.log(suma ("hola", "mundo"))

*/

/*const suma3 = (para1, para2) => {
    if (typeof para1 !== "number" || typeof para2 !== "number"){
        alert ("por favor ingrese un numero")
    } else {
        return para1 + para2
    }
}*/
/*
const suma3 = (para1, para2) => {
    if (isNaN(para1) || isNaN(para2)){ //inNan = No es un numero
        alert ("por favor ingrese un numero")
    } else {
        return para1 + para2
    }
}*/


// FUNCIONES ANIDADAS 
/*function sumar(a,b){
    return a + b
}

function multiplicacion(a,b){
    
}
*/

//ejercicio 1:

// for(let i=0; i<array.length; i++){

// }

// for(let index in array){
    
// }


/*ejercicio 5*/
/*users.sort((a,b) => a.edad - b.edad)
console.log(users);  */



/* otro codigo  ejercicio 7 */
/*
function ordenar(parametro){
    if (typeof users[parametro] === "number"){
        return users.sort((a,b) => a[parametro]-b[parametro])
    } else {
        return users.sort((a,b) => a[parametro].localeCompare(b[parametro]))
    }
}
*/

// otro codigo ejercicio 7
/*
function ordenar(argument) {
    let validInput = ["nombre", "apellido","edad", "profesion"];
    if (validInput.includes(argument)) {
    let result =
    (argument === "nombre"||argument === "apellido" ||argument === "profesion" )
    ? users.sort((a, b) => a[argument].localeCompare(b[argument]))
    : users.sort((a, b) => a[argument] - b[argument]);
    console.log(result);
    } else {
    console.log("Debes ingresar un argumento válido");
    }
    }*/


    //5. Crear una funcion que permita ordenar los usuarios por edad de menor a mayor.

function ordenar() {
    users.sort((a, b) => a.edad - b.edad)
    console.log(users)
    
}

/* ejercicio 8 */
 /*function mialerta() {
    alert("¡De acuerdo!");
    }

<input type="button" onclick="mialerta();" value="ACEPTAR"/>


html: <button class="btn">boton</button> js:document.querySelector(".btn").addEventListener("click", e => {
        alert ("De acuerdo");
});*/