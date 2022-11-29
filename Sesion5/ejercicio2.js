const root = document.getElementById("root")

let formulario = document.createElement("form")
formulario.style.borderColor = "red"
formulario.style.width = "400px"
root.append(formulario)

let label = document.createElement("label")
label.textContent = "Ingrese Nombre: "
label.style.fontSize = "20px"
label.style.fontWeight = "bold"
label.style.color = "blue"
label.style.background = "yellow"
root.append(label)

let input = document.createElement("input")
input.type = "text"
input.setAttribute('id', "nombre")
input.style.fontSize = "20px"
input.style.color = "blue"
root.append(input)

let p = document.createElement("p")
p.textContent = ``
root.append(p)

label = document.createElement("label")
label.textContent = "Ingrese Apellidos: "
label.style.fontSize = "20px"
label.style.fontWeight = "bold"
label.style.color = "blue"
label.style.background = "yellow"
root.append(label)

input = document.createElement("input")
input.type = "text"
input.setAttribute('id', "apellido")
input.style.fontSize = "20px"
input.style.color = "blue"
root.append(input)

p = document.createElement("p")
p.textContent = ``
root.append(p)

label = document.createElement("label")
label.textContent = "Horas Trabajadas: "
label.style.fontSize = "20px"
label.style.fontWeight = "bold"
label.style.color = "blue"
label.style.background = "yellow"
root.append(label)

input = document.createElement("input")
input.type = "text"
input.setAttribute('id', "hora")
input.style.width= "120px"
input.style.fontSize = "20px"
input.style.color = "blue"
root.append(input)

p = document.createElement("p")
p.textContent = ``
root.append(p)


// CREANDO 1RA LISTA DE CATEGORIAS 

label = document.createElement("label")
label.textContent = "Categoria: "
label.style.fontSize = "20px"
label.style.fontWeight = "bold"
label.style.color = "blue"
label.style.background = "yellow"
root.append(label)

var radioInput = document.createElement('input');
radioInput.setAttribute('id', "cate");
radioInput.setAttribute('type', 'radio');
radioInput.setAttribute('name', "categoria");
radioInput.setAttribute('value', 40);
radioInput.setAttribute('class', "A - S/40.00");
root.append(radioInput)

label = document.createElement("label")
label.textContent = " A - S/40.00"
label.style.fontSize = "20px"
label.style.fontWeight = "bold"
root.append(label)

radioInput = document.createElement('input');
radioInput.setAttribute('id', "cate");
radioInput.setAttribute('type', 'radio');
radioInput.setAttribute('name',  "categoria");
radioInput.setAttribute('value', 35);
radioInput.setAttribute('class', "B - S/35.00");
root.append(radioInput)

label = document.createElement("label")
label.textContent = " B - S/35.00"
label.style.fontSize = "20px"
label.style.fontWeight = "bold"
root.append(label)

radioInput = document.createElement('input');
radioInput.setAttribute('id', "cate");
radioInput.setAttribute('type', 'radio');
radioInput.setAttribute('name', "categoria");
radioInput.setAttribute('value', 30);
radioInput.setAttribute('class', "C - S/30.00");
root.append(radioInput)

label = document.createElement("label")
label.textContent = " C - S/30.00"
label.style.fontSize = "20px"
label.style.fontWeight = "bold"
root.append(label)

p = document.createElement("p")
p.textContent = ``
root.append(p)


// CREANDO 2DA LISTA DE AÑOS DE SERVICIO 

label = document.createElement("label")
label.textContent = "Años de Servicio: "
label.style.fontSize = "20px"
label.style.fontWeight = "bold"
label.style.color = "blue"
label.style.background = "yellow"
root.append(label)

radioInput = document.createElement('input');
radioInput.setAttribute('type', 'radio');
radioInput.setAttribute('name', "anioservicio");
radioInput.setAttribute('value', 15);
radioInput.setAttribute('class', "1 - 3 Años");
root.append(radioInput)

label = document.createElement("label")
label.textContent = " 1 - 3 Años"
label.style.fontSize = "20px"
label.style.fontWeight = "bold"
root.append(label)

radioInput = document.createElement('input');
radioInput.setAttribute('type', 'radio');
radioInput.setAttribute('name',  "anioservicio");
radioInput.setAttribute('value', 20);
radioInput.setAttribute('class', "4 - 7 Años");
root.append(radioInput)

label = document.createElement("label")
label.textContent = " 4 - 7 Años"
label.style.fontSize = "20px"
label.style.fontWeight = "bold"
root.append(label)

radioInput = document.createElement('input');
radioInput.setAttribute('type', 'radio');
radioInput.setAttribute('name', "anioservicio");
radioInput.setAttribute('value', 30);
radioInput.setAttribute('class', "8 - 12 Años");
root.append(radioInput)

label = document.createElement("label")
label.textContent = " 8 - 12 Años"
label.style.fontSize = "20px"
label.style.fontWeight = "bold"
root.append(label)

radioInput = document.createElement('input');
radioInput.setAttribute('type', 'radio');
radioInput.setAttribute('name', "anioservicio");
radioInput.setAttribute('value', 35);
radioInput.setAttribute('class', "13 - mas Años");
root.append(radioInput)

label = document.createElement("label")
label.textContent = " 13 - mas Años"
label.style.fontSize = "20px"
label.style.fontWeight = "bold"
root.append(label)

p = document.createElement("p")
p.textContent = ``
root.append(p)

/******************************** */

// CREACION DE BOTONES

let button = document.createElement('button')
button.type="button"
button.textContent = "Calcular Sueldo" 
button.addEventListener("click", e =>CalcularSueldo())
root.append(button)


button = document.createElement('button')
button.type="reset"
button.textContent = "Limpiar" 
root.append(button)



function CalcularSueldo() {
    var msj = "no"
    var msj2 ="no"

    //CREO VARIABLES  
    let nombre = document.getElementById("nombre").value ;
    let apellidos = document.getElementById("apellido").value ;
    let horas;
    let categoria ; 
    let anioservicio;
    let sueldoBase;
    let bonif; 
    let sueldoBruto;
    let sueldoNeto;

    var radiosCat = document.getElementById("categoria").value;
    
    //var text_cat = Array.from(radiosCat).find(radioInput => radioInput.checked);

    console.log(radiosCat)

    var radiosanios = document.getElementsByName("anioservicio").value;
    //var text_anios = Array.from(radiosanios).find(radioInput => radioInput.checked);

   
    // MENSAJES DE ALERTA  Y OPERACIONES 
    
    for(let i=0; i<document.getElementById("cate"); i++){  

        console.log (i)

        if (document.getElementById.categoria[i].checked){
            categoria = document.getElementById.categoria[i].value
            sueldoBase = categoria * document.form1.horas.value  
           // console.log(infoCategoria)
           // console.log(sueldoBase)
            var msj = "si"
        } 
    }
    if (msj == "no"){
        alert("No has Seleccionado La Categoria")
    }

    for(let i=0; i<document.getElementById("anioservicio".value); i++){
         if (document.form1.anioservicio[i].checked){
            anioservicio = document.form1.anioservicio[i].value
            bonif = (sueldoBase * anioservicio) / 100
            //console.log(anioservicio)
            var msj2 = "si"
        } 
    }

    sueldoBruto = sueldoBase + bonif 

    sueldoNeto = (sueldoBruto * 80) / 100


    if (msj2 == "no"){
        alert("No has Seleccionado Los Años de Servicio")
    }

    if (document.getElementById("hora") == ""){
        alert("Ingresa las Horas Laboradas")
    }else{
        horas = document.getElementById("hora")
       // console.log("las horas son " + horas)
    }

    // MENSAJE PARA MOSTRAR EN PANTALLA 

    let p = document.createElement("p")
    p.textContent = `El Trabajador: ${nombre} ${apellidos} de Categoria años de servicio, le corresponde: `
    root.append(p)

    p = document.createElement("p")
    p.textContent = `SUELDO BÁSICO: S/. ${sueldoBase}`
    root.append(p)

    p = document.createElement("p")
    p.textContent = `BONIFICACION: S/. ${bonif}`
    root.append(p)

    p = document.createElement("p")
    p.textContent = `SUELDO NETO: S/. ${sueldoNeto} (80% DEL SUELDO BRUTO TOTAL)`
    root.append(p)

}



/*


// let radiobox = document.createElement('input');
// radiobox.type = 'radio';
// radiobox.id = 'cat';
// radiobox.value = '40';
// radiobox.class = "A - S/40.00"
// root.append(radiobox)

radiobox = document.createElement('input');
radiobox.type = 'radio';
radiobox.id = 'cat';
radiobox.value = '35';
radiobox.class = "B - S/35.00"
root.append(radiobox)

radiobox = document.createElement('input');
radiobox.type = 'radio';
radiobox.id = 'cat';
radiobox.value = '30';
radiobox.class = "C - S/30.00"
root.append(radiobox)

label = document.createElement('label')
label.htmlFor = 'contact';

var description = document.createTextNode('Email');
label.appendChild(description);

var newline = document.createElement('br');

var container = document.getElementById('container');
root.append(radiobox);
root.append(label);
root.append(newline);


radiobox = document.createElement('input');
radiobox.type = 'radio';
radiobox.id = 'contact';
radiobox.value = 'email';

label = document.createElement('label')
label.htmlFor = 'contact';

description = document.createTextNode('Email');
label.appendChild(description);



container = document.getElementById('container');
root.append(radiobox);
root.append(label);
root.append(newline);*/