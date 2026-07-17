// main.js

let inventario = ["Pan de Campo", "Bagels", "Pan de Lomo", "Tortuguitas", "Burger Buns"]

// Función para recorrer y reportar el inventario (for...of)
function mostrarInventario(lista) {
  console.log("--- Inventario actual ---")
  for (const producto of lista) {
    console.log("Producto: " + producto)
  }
}

mostrarInventario(inventario)

// Manipulación dinámica
inventario.push("Focaccia")
inventario.unshift("Pan Integral")

const eliminado = inventario.pop()
console.log("Se ha eliminado el elemento: " + eliminado)

mostrarInventario(inventario)

// Búsqueda y validación
const buscado = prompt("¿Qué producto querés buscar?")

if (inventario.includes(buscado)) {
  const posicion = inventario.indexOf(buscado)
  console.log("Encontrado en la posición: " + posicion)

  // Actualización por índice con splice
  const nuevoNombre = prompt("Escribí el nuevo nombre para reemplazarlo:")
  inventario.splice(posicion, 1, nuevoNombre)
  console.log(buscado + " fue reemplazado por " + nuevoNombre)
} else {
  console.log(buscado + " no está en el inventario")
}

mostrarInventario(inventario)