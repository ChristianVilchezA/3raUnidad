const a = [];

const b = [1, true, "Hola", ["A,", "B", "C",[1,2,3]]]
console.log(a)
console.log(b)
console.log(b[0])
console.log(b[2])
console.log(b[3][2])
console.log(b[3][3][0])

const c = Array.of("X", "Y", "Z", 9, 8, 7)
console.log(c)

const d = Array(100).fill(false)
console.log(d)

//YA NO SE USA
const e = new Array();
console.log(e)

const f = new Array(1,2,3,true, false)
console.log(f)

//******************** */

const colores=["rojo", "verde", "azul"]
console.log(colores) 

colores.push("negro")   //añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
console.log(colores) 

colores.pop()           //elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
console.log(colores) 


// los parametros que se usan mayormente son el, element(para recorrer el valor) y i o index (para ver la posicion que ocupa)
colores.forEach(function(el, index){       //ejecuta la función indicada una vez por cada elemento del array.
    console.log(`<li id= "${index}"> ${el} </li>`)
})   
