let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]


//11. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.

function sortPokemons(argument){
    let validInput = ["name","id", "type", "base_damage", "base_hp", "speed"]

    if(validInput.includes(argument)){
       (argument === "type" || argument === "name") ? (pokemons.sort((a,b) => a[argument].localeCompare(b[argument]))) : (pokemons.sort ((a,b) => a[argument] - b[argument]))
    } else {
        console.log("Debes ingresar un argumento valido!")
    }
}

const root = document.getElementById("root")
const table = document.createElement('table')
table.classList.add("default")
table.setAttribute("border", "3")

root.append(table)

const tr = document.createElement('tr')
table.append(tr)

//HEADERS

for(const property in pokemons[0]){
    const th = document.createElement("th")
    th.textContent = property
    th.style.cursor = "pointer"
    th.addEventListener("click", (e) => {
        e.preventDefault()
        sortPokemons (property)
        table.innerHTML=""
        table.append(tr)
        renderBody()
    })
    tr.append(th) 
}

//TABLE BODY

function renderBody(){
    for (let i=0; i<pokemons.length; i++ ){
        const trb = document.createElement("tr")
        const values = Object.values(pokemons[i])
    
        pokemons[i]
        console.log(pokemons[i])
    
        for (let j=0; j < values.length; j++){
            const tdb = document.createElement("td")
            tdb.textContent = values[j]
            trb.append(tdb)
        }
        table.append(trb)
    }
}




