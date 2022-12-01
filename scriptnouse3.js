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
    
    
    //ejercicio 9 session 2 
    
    
    /*
    const parrafo = document.createElement('p')
    parrafo.textContent = "Hola Mundo"
    parrafo.style.color = "white"
    
    root.append(parrafo)
    
    root.style.backgroundColor="red"
    root.style.width = "300px"
    root.style.height="300px"
    
    
    for(const prop in pokemons[0]){
        const li=document.createElement("li");
        li.textContent = prop;
        li.addEventListener("click",()=>{
            pokemons(prop);
        })
        ul.append(li);
      }
    */
    /*
    
    const root = document.getElementById("root");
    const ul = document.createElement("ul");
    root.append(ul);
    
    for(const prop in pokemons[0]){
      const li=document.createElement("li");
      li.textContent = prop;
      li.addEventListener("click",()=>{
        sortPokemons(prop);
      })
      ul.append(li);
    }
    
    */
    
    
    
    /*ejercicio 9 sesion 3  */
    
    // boton.addEventListener("click",() => {
    //     alert("De acuerdo!")
    // })
    // root.append(boton)
    
    // boton.addEventListener("mouseover", () =>{
    //     boton.style.display = "none"
    // })
    
    // function ocultaBoton(){
    //     let btn = document.createElement("button");
    //     btn.textContent = "Aceptar"
    //     btn.addEventListener("mouseover", () =>{
    //         btn.style.display ="none";
    //     })
    //     document.body.appendChild(btn)
    // }
    
    // ocultaBoton()
    
    
    
    /* EJERCICIO 13 COD NO USADO */
    
    
    
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
     
    
     /* ejercicio 13 codogio nyseli */
    /*
     function filtrar(mes, anio) {
        for (index in users) {
            users[index].created_at = new Date(users[index].created_at)
        }
        let resultados = users.filter(e => (e.created_at.getMonth() + 1) == mes && e.created_at.getFullYear() == anio);
        console.log(resultados)
    }
    filtrar("04", "2021")*/
    
    
    
    
    // if(FirstName !== ""){
      //   warnings += `El Primer Nombre no es valido <br>`
      //   entrar = true
      // }
    
    
    
      // if (inputFirstName.value.length <4){
    
      //   warnings += `El nombre ingresado no es válido <br>`
      //   entrar = true
      // }
    
      // console.log(exp_FirstName.value(inputFirstName.length))
      // if(exp_FirstName.test(inputFirstName.value)){
        
      // }