const root = document.getElementById("root")

function CalcularSueldo() {
    var msj = "no"
    var msj2 ="no"

    //CREO VARIABLES  
    let nombre = document.form1.nombre.value ;
    let apellidos = document.form1.apellido.value ;
    let horas;
    let categoria ; 
    let anioservicio;
    let sueldoBase;
    let bonif; 
    let sueldoBruto;
    let sueldoNeto;


    var radiosCat = document.getElementsByName("categoria");
    var text_cat = Array.from(radiosCat).find(radio => radio.checked);

    var radiosanios = document.getElementsByName("anioservicio");
    var text_anios = Array.from(radiosanios).find(radio => radio.checked);

    console.log(text_cat.className);
    console.log(text_anios.className);


    // MENSAJES DE ALERTA  Y OPERACIONES 
    
    for(let i=0; i<document.form1.categoria.length; i++){  
        if (document.form1.categoria[i].checked){
            categoria = document.form1.categoria[i].value
            sueldoBase = categoria * document.form1.horas.value  
           // console.log(infoCategoria)
           // console.log(sueldoBase)
            var msj = "si"
        } 
    }
    if (msj == "no"){
        alert("No has Seleccionado La Categoria")
    }

    for(let i=0; i<document.form1.anioservicio.length; i++){
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

    if (document.form1.horas.value == ""){
        alert("Ingresa las Horas Laboradas")
    }else{
        horas = document.form1.horas.value 
        console.log("las horas son " + horas)
    }

    // MENSAJE PARA MOSTRAR EN PANTALLA 

    let div = document.createElement("div")

    let p = document.createElement("p")
    p.textContent = `El Trabajador: ${nombre} ${apellidos} de Categoria ${text_cat.className} con ${text_anios.className} años de servicio, le corresponde: `
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


