class Carrito {
    constructor() {
        this.carrito = []
        this.arrayDeIds = []
        this.total = 0
    }

    agregarCarrito(articulo){
        for (let i = 0; i < this.carrito.length; i++) {
            this.arrayDeIds.push(this.carrito[i].id)
        }

        let index = this.arrayDeIds.indexOf(articulo.id)

        if(index != -1){
            this.carrito[index].cantidad = this.carrito[index].cantidad + articulo.cantidad
            this.total = this.total + (articulo.precio * articulo.cantidad)
        }else{
            this.carrito.push(articulo)
            this.total = this.total + (articulo.precio * articulo.cantidad)
        }
    }

    mostraCarrito(){
        let mensaje = ""
        for (let i = 0; i < this.carrito.length; i++) {
            mensaje = mensaje + "\n" + this.carrito[i].nombre + " X " + this.carrito[i].cantidad
        }

        alert("Los productos que esta comprando son los siguientes:" + mensaje + "\nPor un total de: " + this.total + "$")
    }

    pagar(descuento){
        this.total = this.total * descuento
        alert("Con este medio de pago, el total seria de: " + this.total)
    }
}

class Producto {
    constructor(id, nombre, precio, cantidad){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}

const CarritoTienda = new Carrito()

function logicaDePago(){
    let opcionesPago = Number(prompt("Estas son las opciones que tiene usted para pagar:\n 1-Efectivo\n 2-Tarjeta\n 3-Doge Coin\n 4-Chaucha Coin "))
    let bandera = true
    while(bandera){
        switch (opcionesPago) {
            case 1:
                CarritoTienda.pagar(0.9)
                bandera = !confirm("¿Esta seguro de que quiere utilizar este medio de pago?")
                break;
            case 2:
                CarritoTienda.pagar(1.1)
                bandera = !confirm("¿Esta seguro de que quiere utilizar este medio de pago?")
                break;
            case 3:
                CarritoTienda.pagar(1.5)
                bandera = !confirm("¿Esta seguro de que quiere utilizar este medio de pago?")
                break;
            case 4:
                CarritoTienda.pagar(0.5)
                bandera = !confirm("¿Esta seguro de que quiere utilizar este medio de pago?")
                break;
            default:
                alert("No tenemos ese medio de pago")
                break;
        }
        if(bandera){
            opcionesPago = Number(prompt("Estas son las opciones que tiene usted para pagar:\n 1-Efectivo\n 2-Tarjeta\n 3-Doge Coin\n 4-Chaucha Coin "))
        }
    }
}

function logicaDeCompra(id, nombre, precio){
    let opcion = confirm("¿Quiere comprar " + nombre + " a " + precio + "?")
    if(opcion){
        let cantidad = Number(prompt("¿Cuantos queres comprar?"))
        const aux = new Producto(id, nombre, precio, cantidad)
        CarritoTienda.agregarCarrito(aux)
    }else{
        alert("No pasa nada")
    }

}

function coreStore (){
    let bandera = true
    let opciones = Number(prompt("En perrito con chaucha store vendemos o siguiente:\n 1-Remera\n 2-Pantalon\n 3-Buzo\n 4-Perritos"))
    while(bandera){
        switch (opciones) {
            case 1:
                logicaDeCompra(1, "Remera", 200)
                bandera = confirm("¿Quiere seguir comprando?")
                break;
            case 2:
                logicaDeCompra(2, "Pantalon", 100)
                bandera = confirm("¿Quiere seguir comprando?")
                break;
            case 3:
                logicaDeCompra(3, "Buzo", 500)
                bandera = confirm("¿Quiere seguir comprando?")
                break;
            case 4:
                logicaDeCompra(2, "Perritos", 1000)
                bandera = confirm("¿Quiere seguir comprando?")
                break;
            default:
                alert("No tenemos eso")
                bandera = confirm("¿Quiere seguir comprando?")
                break;
        }
        if(bandera){
            opciones = Number(prompt("En perrito con chaucha store vendemos o siguiente:\n 1-Remera\n 2-Pantalon\n 3-Buzo\n 4-Perritos"))
        }
    }
    logicaDePago()
    CarritoTienda.mostraCarrito()
}

coreStore()

console.log(CarritoTienda)