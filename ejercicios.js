const nombre = document.querySelector("#nombre")

const apellido = document.querySelector("#apellido")

const boton = document.querySelector("button")

function miDiv (){
    console.log("Buenos dias" + " " + nombre.value + " " + apellido.value)
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