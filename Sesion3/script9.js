/*9. Agrega un listener al boton para que cuando el usuario haga hover sobre este, 
el boton desaparezca.*/


const root = document.getElementById("root")
const boton = document.createElement("button")
boton.textContent = "Aceptar"
/*boton.addEventListener("click",() => {
    alert("De acuerdo!")
})*/
root.append(boton)


boton.addEventListener("mouseover", () =>{
    boton.style.display = "none"
    let a=1

    if (a=1) {
        boton.style.display = ""
    }
})
/*
boton.addEventListener("mouseover", () =>{
    boton.style.display = "none"
})
*/


function ocultaBoton(){
    let btn = document.createElement("button");
    btn.textContent = "Aceptar"
    btn.addEventListener("mouseover", () =>{
        btn.style.display ="none";
    })
    document.body.appendChild(btn)
}

ocultaBoton()