class Alumno {
    constructor() {
      this.codigo = prompt("ingrese Codigo:" ) 
      this.nombre = prompt("ingrese Nombre:" ) 
      this.nota1 = +prompt("ingrese Nota 1:" ) 
      this.nota2 = +prompt("ingrese Nota 2:" ) 
      this.nota3 = +prompt("ingrese Nota 3:" ) 
      this.nota4 = +prompt("ingrese Nota 4:" ) 
    }

    Calcularpromedio(){
        let promedio = (this.nota1*0.15) + (this.nota2*0.20) + (this.nota3*0.25) + (this.nota4*0.40);
        return promedio
    }

    CalcularCondicion(){
        let condicion
        let promedio = this.Calcularpromedio()
        if (promedio >= 12) {
            condicion = "Aprobado"
        } else {
            condicion = "Desaprobado"
        }
        return condicion
    }

    VerificarObsequio(){
        let obsequio
        let promedio = this.Calcularpromedio()

        if (promedio > 17) {
            obsequio = "Alumno Recibe de Obsequio MOCHILA"
        } else {
            obsequio = "Para recibir Obsequio Promedio debe ser Mayor a 17"
        }
        return obsequio
    }

} 

let valores = new Alumno(this.codigo, this.nombre, this.nota1, this.nota2, this.nota3, this.nota4);
console.log(valores);
console.log("El Promedio del Alumno es: " + valores.Calcularpromedio());
console.log("La Condicion del Alumno es: " + valores.CalcularCondicion());
console.log(valores.VerificarObsequio());
