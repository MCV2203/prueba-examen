const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const boton = document.querySelector("#boton")

function miDiv (){
    console.log ("Buenos Dias" + " " + nombre.value + " " + apellido.value)
    alert ("Buenos Dias" + " " + nombre.value + " " + apellido.value)
}

boton.addEventListener ("click", miDiv)

//

const rosa = document.querySelector("#rosa")
const azul = document.querySelector("#azul")
const naranja = document.querySelector("#naranja")

rosa.addEventListener ("click", pink)
azul.addEventListener ("click", blue)
naranja.addEventListener ("click", orange)

let cuadro = document.querySelector("#cuadro")

function pink (){
    cuadro.classList.remove("azul", "naranja")
    cuadro.classList.add("rosa")
}

function blue (){
    cuadro.classList.remove("rosa", "naranja")
    cuadro.classList.add("azul")
}

function orange (){
    cuadro.classList.remove("azul", "rosa")
    cuadro.classList.add("naranja")
}

//

const nota1 = document.querySelector("#nota1")
const nota2 = document.querySelector("#nota2")
const nota3 = document.querySelector("#nota3")
const evaluar = document.querySelector("#evaluar")
const notaDiv = document.querySelector("#nota")

evaluar.addEventListener("click", calcular)

function calcular (){
    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let n3 = Number(nota3.value)

    if (n1 < 5 || n2 < 5 || n3 < 5){
        notaDiv.innerHTML = "4 - Hay que tener todos aprobados"
    } else {
        let media = (n1 + n2 + n3) / 3
        notaDiv.innerHTML = media
    }
}