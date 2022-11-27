//es importante trabajar con const cuando se trabaja con objetos
// objeto es una coleccion de llaves valores 

const b = {}
console.log(b)


/* dentro de un objeto a las variables se les va a allamar atributos/propiedas
y a las funciones se les llama metodos */

const jon = {
    nombre:"Omar", 
    apellido:"Vilchez", 
    edad:28, 
    pasatiempo:["musica", "series", "pc"], 
    soltero:true,
    contacto:{
    email:"christian.servtec@gmail.com", 
    twitter:"@omarkvilchez", 
    movil:"+5199665654"},

saludar:function() {
    console.log(`hola :)`)
}, 

//this => este 
decirMiNombre:function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad}años y me puedes seguir como ${this.contacto.twitter} en twitter`)
}
}

console.log(jon)

console.log(jon.pasatiempo)
console.log(jon.pasatiempo[1])
console.log(jon.soltero)
console.log(jon.contacto.twitter)

console.log(jon["nombre"]);
console.log(jon["apellido"]);

jon.saludar()
jon.decirMiNombre()

console.log(Object.keys(jon)) // devuelve un array de las propiedades names de un objeto, en el mismo orden como se obtienen en un loop normal
console.log(Object.values(jon)) //devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.
console.log(jon.hasOwnProperty("nacimiento")) //devuelve un booleano indicando si el objeto tiene la propiedad especificada.
console.log(jon.hasOwnProperty("nombre"))