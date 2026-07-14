// main.js

let stockDisponible = 20

// Función 1: procesa el pedido y devuelve si fue válido (con return)
function procesarPedido(cantidad, stock) {
  if (cantidad > stock) {
    return false
  }
  return true
}

// Función 2: función flecha, calcula el nuevo stock (proceso simple, un solo cálculo)
const actualizarStock = (stockActual, cantidad) => stockActual - cantidad

// Función 3: muestra el resultado (entrada de datos ya hecha afuera, esta es la salida)
function mostrarResultado(mensaje) {
  console.log(mensaje)
  alert(mensaje)
}

let vendiendo = true

while (vendiendo === true) {
  let cantidadPedida = prompt("¿Cuántas unidades querés pedir? (escribí 0 para salir)")
  cantidadPedida = parseInt(cantidadPedida)

  if (cantidadPedida === 0) {
    vendiendo = false
    mostrarResultado("Simulación finalizada. Stock final: " + stockDisponible)
  } else {
    const esValido = procesarPedido(cantidadPedida, stockDisponible)

    if (esValido) {
      stockDisponible = actualizarStock(stockDisponible, cantidadPedida)
      mostrarResultado("Pedido confirmado. Stock restante: " + stockDisponible)
    } else {
      mostrarResultado("Stock insuficiente. Disponible: " + stockDisponible)
    }
  }
}