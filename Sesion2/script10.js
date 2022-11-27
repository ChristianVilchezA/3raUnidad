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

//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed

const root = document.getElementById("root")
const table = document.createElement('table')
table.classList.add("default")
table.setAttribute("border", "3")

root.append(table)

const tr = document.createElement('tr')
table.append(tr)

//HEADERS

let headers = Object.keys(pokemons[0])
//console.log(headers)

for(index in headers){
    const th = document.createElement("th")
    th.textContent = headers[index]
   // console.log (th)
    tr.append(th)
}


//TABLE BODY
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
   // console.log (values)
}




















/*
const root = document.getElementById("root")
const table = document.createElement("table")
table.classList.add("default")
table.setAttribute("border", "3")
root.append(table)
 
// COLUMNAS
 
const tr = document.createElement("tr")
 
table.append(tr)
for(const prop in pokemons[0]){
    const th = document.createElement("th")
   
    th.textContent = prop
    th.style.cursor = "pointer"
    th.addEventListener("click", () => {
        sortPokemons(prop)
        table.innerHTML = ""
        table.append(tr)
        createTableBody()
    })
    tr.append(th)
}
 
 
 
// TABLE BODY
function createTableBody(){
    for(const index in pokemons){
        const trb = document.createElement("tr")
        for(const prop in pokemons[index]){
            const td = document.createElement("td")
            td.textContent = pokemons[index][prop]
            trb.append(td)
        }
        table.append(trb)
    }
}
 */