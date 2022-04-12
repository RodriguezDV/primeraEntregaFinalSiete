//Variables
let resultado = 0
let continuar = 'si'

//Constructor de objeto Productos
class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const producto1 = new Producto(1, 'Manzana', 20, 30)
const producto2 = new Producto(2, 'Naranja', 30, 20)
const producto3 = new Producto(3, 'Uva', 50, 100)
const producto4 = new Producto(4, 'Pera', 25, 44)


//Carrito(Lista de productos)
class Carrito {
    constructor(lista) {
        this.lista = lista
    }
    addItem(item) {
        this.lista.push(item)
    }
}

//Agregando los productos al array Lista
const carrito = new Carrito(
    [producto1, producto2, producto3, producto4]
)

//Agregando productos adicionales con un método
const producto5 = new Producto(5, 'Mandarina', 40, 20)
carrito.addItem(producto5)

const producto6 = new Producto(6, 'Sandía', 55, 20)
carrito.addItem(producto6)


//Variable para mostrar lista de productos en prompt
let misProductos = 'Seleccione el Numero de su producto:\n'
carrito.lista.map(item => {
    misProductos += `${item.id} - ${item.nombre}: $${item.precio} Kg\n`
})


function calcularPrecio(){
    let productoSeleccionado = +prompt(misProductos)
    for (let i = 0; i < carrito.lista.length; i++) {
        if (productoSeleccionado <= carrito.lista.length) {
            switch (productoSeleccionado) {
                case i + 1:
                    let kilos = +prompt('¿Cuantos Kilos quieres?')
                    resultado += carrito.lista[i].precio * kilos
                    alert(`Total: $${resultado}`)
                    break;
            }
        } else {
            alert('No tenemos ese producto')
            break
        }
    }
}

while(continuar == 'si'){
    calcularPrecio()
    continuar = prompt('¿Desea agregar algo más? [SI/NO]').toLowerCase()
}