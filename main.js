// main.js

let stockDisponible = 20
let vendiendo = true

while (vendiendo === true) {
  let cantidadPedida = prompt("¿Cuántas unidades querés pedir? (escribí 0 para salir)")
  cantidadPedida = parseInt(cantidadPedida)

  if (cantidadPedida === 0) {
    vendiendo = false
    console.log("Simulación finalizada.")
  } else if (cantidadPedida > stockDisponible) {
    console.log("Stock insuficiente. Disponible: " + stockDisponible)
  } else {
    stockDisponible = stockDisponible - cantidadPedida
    console.log("Pedido confirmado. Stock restante: " + stockDisponible)
  }
}