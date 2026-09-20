// ===== Simulador de Panadería - Pre-entrega 5 =====

const IVA = 1.21;

// ---------- Clase ----------
class Producto {
  constructor(id, nombre, categoria, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.stock = stock;
  }

  // Descuenta stock si hay disponible. Devuelve true/false.
  vender(cantidad) {
    if (cantidad <= 0) {
      console.log(`Cantidad inválida para ${this.nombre}.`);
      return false;
    }
    if (cantidad > this.stock) {
      console.log(`Stock insuficiente de ${this.nombre}: pediste ${cantidad}, quedan ${this.stock}.`);
      return false;
    }
    this.stock -= cantidad;
    return true;
  }

  // Modifica el precio según un porcentaje (ej: 10 = 10% off)
  aplicarDescuento(porcentaje) {
    this.precio = this.precio - (this.precio * porcentaje) / 100;
  }

  // Precio final con IVA incluido
  sumarIva() {
    return this.precio * IVA;
  }

  // Informa el estado actual del objeto
  mostrarInfo() {
    console.log(
      `#${this.id} | ${this.nombre} (${this.categoria}) | $${this.precio.toFixed(2)} | Stock: ${this.stock}`
    );
  }
}

// ---------- Instancias ----------
const panFrances = new Producto(1, "Pan francés", "Panes", 2500, 20);
const focaccia = new Producto(2, "Focaccia", "Panes", 4200, 10);
const medialuna = new Producto(3, "Medialuna", "Facturas", 900, 30);

// Catálogo (array de objetos)
const catalogo = [panFrances, focaccia, medialuna];

// ---------- Funciones del simulador ----------
function buscarProducto(id) {
  return catalogo.find((producto) => producto.id === id);
}

function mostrarCatalogo() {
  console.log("--- Catálogo ---");
  for (const producto of catalogo) {
    producto.mostrarInfo();
  }
}

function procesarPedido(pedido) {
  let total = 0;

  for (const item of pedido) {
    const producto = buscarProducto(item.id);

    if (!producto) {
      console.log(`El producto con id ${item.id} no existe.`);
      continue;
    }

    if (producto.vender(item.cantidad)) {
      const subtotal = producto.sumarIva() * item.cantidad;
      total += subtotal;
      console.log(`Vendido: ${item.cantidad} x ${producto.nombre} = $${subtotal.toFixed(2)} (IVA incl.)`);
    }
  }

  return total;
}

// ---------- Ejecución ----------
mostrarCatalogo();

// Promo en las medialunas
medialuna.aplicarDescuento(10);
console.log(`Promo: medialuna con 10% off, ahora $${medialuna.precio.toFixed(2)}`);

const pedido1 = [
  { id: 1, cantidad: 3 },
  { id: 3, cantidad: 12 },
  { id: 2, cantidad: 15 }, // supera el stock, no se vende
  { id: 9, cantidad: 1 },  // no existe
];

const totalPedido = procesarPedido(pedido1);
console.log(`Total del pedido: $${totalPedido.toFixed(2)}`);

mostrarCatalogo();
