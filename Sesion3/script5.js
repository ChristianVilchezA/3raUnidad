//5. Crear una funcion que permita ordenar los usuarios por edad de menor a mayor.

let users = [
    {nombre: "Javier", apellido: "Pacheco", edad: 38, profesion: "developer"},
    {nombre: "Andrea", apellido: "Lazo", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "Matos", edad: 32, profesion: "musico"},
    {nombre: "Juan", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef"},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]

users.sort((a, b) => {
    return a.edad - b.edad;
    });
    
console.log(users);


