const nombre = document.querySelector("#nombre")

const apellido = document.querySelector("#apellido")

const boton = document.querySelector("button")

function miDiv (){
    console.log("Buenos dias" + " " + nombre.value + " " + apellido.value)
    alert ("Buenos dias" + " " + nombre.value + " " + apellido.value)
}

boton.addEventListener ("click", miDiv)

//

const verde = document.querySelector ("#verde")
const rojo = document.querySelector ("#rojo")
const amarillo = document.querySelector ("#amarillo")

rojo.addEventListener ("click", red)
verde.addEventListener ("click", green)
amarillo.addEventListener ("click", yellow)

let cuadro = document.querySelector ("#cuadro")

function red (){
    cuadro.classList.remove("verde" ,"amarillo")
    cuadro.classList.add("rojo")
}

function green (){
    cuadro.classList.remove("rojo", "amarillo")
    cuadro.classList.add("verde")
}

function yellow (){
    cuadro.classList.remove("verde", "rojo")
    cuadro.classList.add("amarillo")
}

//

const nota1 = document.querySelector ("#nota1")
const nota2 = document.querySelector ("#nota2")
const nota3 = document.querySelector ("#nota3")
const evaluar = document.querySelector ("#evaluar")
const notaDiv = document.querySelector ("#nota")

evaluar.addEventListener("click", calcular)

function calcular(){

    let n1 = Number(nota1.value) 
    let n2 = Number(nota2.value)
    let n3 = Number(nota3.value)

    if (n1 < 5 || n2 < 5 || n3 < 5){
        notaDiv.innerHTML = "4 - Hay que aprobar los 3 trimestres"
    } else {
        let media = (n1 + n2 + n3) / 3
        notaDiv.innerHTML = media
    }
}