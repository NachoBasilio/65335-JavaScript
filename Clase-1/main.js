// console.log("Hola")

let nombreDeLaVariable //undefined

console.log(nombreDeLaVariable)

nombreDeLaVariable = "Nacho"

console.log(typeof nombreDeLaVariable)

const PI = 3.14;

// PI = 1.23 (NO SE PUEDE)

console.log(PI)

let leGustaElMate = true

console.log(leGustaElMate)

//let nombre = prompt("¿Como te llamas?")

// alert("¡Hola " + nombre + "!")

//let edad = Number(prompt("¿Cuantos años tenes?"))
//let edad = parseInt(prompt("¿Cuantos años tenes?"))

// console.log(edad)

// let booleano = confirm("¿Queres todas la galletitas?")

// let numeroA = Number(prompt("Ingrese un numero"))
// let numeroB = Number(prompt("Ingrese otro numero"))

// alert("Suma de a + b: " + (numeroA + numeroB))
// alert("Resta de a - b: " + (numeroA - numeroB))
// alert("Multiplicación de a * b: " + (numeroA * numeroB))
// alert("División de a / b: " + (numeroA / numeroB).toFixed(2))

// let celsius = Number(prompt("Ingrese la temperatura en grados Celsius:"))

// let fahrenheit = (celsius * 1.8) + 32

// alert("La temperatura en Fahrenheit es: " + fahrenheit)

let peso = Number(prompt("Con todo respeto ¿Cuanto pesas?"))
let altura = Number(prompt("Con todo respeto ¿Cuanto medis? (m)"))

let imc = peso / (altura * altura)

alert("Tu indice de masa Corporal (IMC) es: " + imc.toFixed(2))