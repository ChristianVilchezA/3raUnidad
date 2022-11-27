/*8. Crear un boton con javascript que diga "Aceptar" y cuando se le de click 
mande una alerta que diga: "De acuerdo!"*/

const root = document.getElementById("root")
const boton = document.createElement("button")
boton.textContent = "Aceptar"
boton.addEventListener("click",() => {
    alert("De acuerdo!")
})
root.append(boton)

/* otra forma sin root */
const button = document.createElement('button');
button.type = 'button'
button.innerText="Aceptar"
document.body.appendChild(button)
button.addEventListener("click" , ()=>{
    alert ("De acuerdo")
})