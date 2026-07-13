// main.js

const nombreEmpleado = prompt("Nombre del empleado:")
let horasTrabajadas = prompt("Horas trabajadas este mes:")
let valorHora = prompt("Valor de la hora en $:")

horasTrabajadas = parseFloat(horasTrabajadas)
valorHora = parseFloat(valorHora)

const sueldoBruto = horasTrabajadas * valorHora
const mensaje = "El sueldo de " + nombreEmpleado + " es de $" + sueldoBruto

console.log(mensaje)
alert(mensaje)