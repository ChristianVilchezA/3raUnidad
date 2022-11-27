//Funciones : Es un bloque de codigo autocontenido, se define una sola vez y se puede ejecutar en cualquier momento 
// Puede o no recibir parametros y puede devolver o no valores 
// también se consideran objetos 

//FUNCIONES DECLARADAS 

function estoEsUnaFuncion(){
 console.log("Uno");
 console.log("Dos");
 console.log("Tres");
}

//Invocacion de funcion
/*estoEsUnaFuncion();
estoEsUnaFuncion();*/

function unaFuncionQueDevuelveValor(){
    console.log("Uno");
    return 19; //aqui el return ignora las lineas que continuan
    console.log("Dos");
    console.log("Tres");
    return "La funcion ha retonardo una CADENA DE TEXTO"
   }
let valorDeFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeFuncion)


function saludar(nombre ="Desconocido",edad=0){
    console.log (`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

saludar("Kenai",7)
saludar()

funcionDeclarada()

//FUNCIONES DECLARADA
function funcionDeclarada(){
    console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada")
}
funcionDeclarada()

//FUNCION ANONIMA


const funcionExpresada = function(){
    console.log("Esto es una funcion Expresada, es decir una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su deficinion JS nos dira eferenceError: Cannot access 'funcionExpresada' before initialization")
}

funcionExpresada()








