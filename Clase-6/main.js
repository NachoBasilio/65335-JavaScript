/*
    Consigna: Vamos a hacer una tienda aplicando funciones de orden superior:
    [!] - Poder comprar productos, agregar productos a un carrito y poder ver el detalle de la compra.
    [] - Poder aplicar descuentos a los productos.
    [] - Poder filtrar productos por categoría.
    [] - Poder ordenar productos por precio, de mayor a menor y viceversa.
    [] - Poder ver el precio total de la compra.
    [] - Poder vaciar el carrito.
    [] - Guardar la compra en el local storage.
    [] - Poder elegir forma de pago.
*/

const productosLibreria = [
    { nombre: "Cuaderno A4", precio: 450, id: 1, stock: 2 },
    { nombre: "Bolígrafo Azul", precio: 120, id: 2, stock: 10 },
    { nombre: "Lápiz HB", precio: 80, id: 3, stock: 10 },
    { nombre: "Tijeras Escolares", precio: 350, id: 4, stock: 10 },
    { nombre: "Goma de Borrar", precio: 50, id: 5, stock: 10 },
    { nombre: "Regla de 30 cm", precio: 200, id: 6, stock: 10 },
    { nombre: "Resaltador Amarillo", precio: 160, id: 7, stock: 10 },
    { nombre: "Cartulina Blanca", precio: 60, id: 8, stock: 10 },
    { nombre: "Corrector Líquido", precio: 220, id: 9, stock: 10 },
    { nombre: "Marcador Permanente", precio: 180, id: 10, stock: 10 }
]

class Productos{
    constructor(nombre, precio, id, stock, cantidad){
        this.nombre = nombre
        this.precio = precio
        this.id = id
        this.stock = stock
        this.cantidad = cantidad
    }

    show(){
        alert("Este producto: " + this.nombre + " y vale " + this.precio)
    }
}
class Carrito{
    constructor(){
        this.productos =  JSON.parse(localStorage.getItem("carrito")) || []
        this.total = 0
    }

    actualizadoraDeStorage(){
        localStorage.setItem("carrito", JSON.stringify(this.productos))
    }

    recuperadoraDeProductos(){
        this.productos = this.productos.map((ele)=>{
            if(!(ele instanceof Productos)){
                return new Productos(ele.nombre, ele.precio, ele.id, ele.stock, ele.cantidad)
            }else{
                return ele
            }
        })
    }

    agregaAlCarrito(producto){
        this.recuperadoraDeProductos()
        if(!(producto instanceof Productos)){
            return
        }

        if(this.productos.some((ele)=>{
            return ele.id === producto.id
        })){
            let productoActual = this.productos.find((ele)=>{
                return ele.id === producto.id
            })
            productoActual.cantidad++
            this.actualizadoraDeStorage()
        }else{
            producto.cantidad = 1
            this.productos.push(producto)
            this.actualizadoraDeStorage()
        }
    }

    buscarUnProducto(id){
        if(this.productos.some((ele)=>{
            return ele.id === id
        })){
            let productoActual = this.productos.find((ele)=>{
                return ele.id === id
            })
            return productoActual
        }else{
            return false
        }
    }

    mostrarCarrito(){
        let mensaje = "Su carrito ahora mismo tiene: "
        this.productos.forEach(ele => {
            mensaje = mensaje + "\n " + ele.nombre + " - $" + ele.precio * ele.cantidad
        })
        this.calcularTotal()
        mensaje = mensaje + "\n\n\nTotal = " + this.total
        alert(mensaje)
    }

    calcularTotal(){
        this.total = this.productos.reduce((acc, ele) => {
            return acc + (ele.precio * ele.cantidad)
        }, 0)
    }

    limpiarCarrito(){
        this.productos = []
        this.actualizadoraDeStorage()
    }

    comprar(){
        this.calcularTotal()
        let opcion = Number(prompt("Opciones de compra:\n 1-Efectivo\n 2-Tarjeta"))
        let compra
        switch(opcion){
            case 1:
                alert("El total es: " + this.total)
                compra = confirm("¿Quiere pagar por este medio?")
                break
            case 2:
                alert("El total es: " + (this.total * 1.1).toFixed(2))
                compra = confirm("¿Quiere pagar por este medio?")
                break
            default:
                alert("No tenemos esa opcion")
                break
        }
        if(compra){
            this.limpiarCarrito()
        }
    }
}

const CarritoObjeto = new Carrito()



const productosLibreriaClase = productosLibreria.map((ele)=>{
    return new Productos(ele.nombre, ele.precio, ele.id, ele.stock, 0)
})

function mostradoraDeProductos(){
    let mensaje = productosLibreriaClase.reduce((acc, ele, index)=>{
        return acc + "\n " + Number(index + 1) + " - " + ele.nombre + " $" + ele.precio
    }, "Los productos son los siguientes:")

    alert(mensaje)
}

function agregadoraDeProducto(id){
    let producto = productosLibreriaClase.find((ele) => {
        return ele.id === id
    })

    if(!producto){
        alert("Ese producto no existe")
        return
    }

    let productoEnCarrito = CarritoObjeto.buscarUnProducto(id)

    console.log(producto)

    if(!productoEnCarrito){
        CarritoObjeto.agregaAlCarrito(producto)
        producto.stock = producto.stock - 1
    }else{
        if(producto.stock <= 0){
            alert("Ya gastamos ese producto")
        }else{
            CarritoObjeto.agregaAlCarrito(producto)
            producto.stock = producto.stock - 1
        }
    }

}

function buscador(nombre){
    let productosFiltrados = productosLibreriaClase.filter(ele => {
        return ele.nombre.toLowerCase().includes(nombre.toLowerCase())
    })

    let mensaje = "Los productos encontrados son los siguientes: "

    if(productosFiltrados.length > 0){
        productosFiltrados.forEach(ele => {
            mensaje = mensaje + "\n" + ele.nombre + " $" + ele.precio + " - ID: " + ele.id
        })

        alert(mensaje)
    }else{
        alert("No se encontro nada")
    }


}

function core(){
    let bandera = true
    while(bandera){
        let opcion = Number(prompt("¡Bienvenido a Perrito Con Chaucha Store! Usted puede:\n 1- Mostrar productos\n 2- Comprar a partir de id \n 3- Ver Carrito\n 4- Limpiar carrito\n 5- Pagar\n 6- Buscar Producto"))
        switch(opcion){
            case 0:
                bandera = false
                break
            case 1:
                mostradoraDeProductos()
                bandera = confirm("¿Quiere seguir operando?")
                break
            case 2:
                let id = Number(prompt("Dame el id del producto"))
                console.log(id)
                agregadoraDeProducto(id)
                bandera = confirm("¿Quiere seguir operando?")
                break
            case 3:
                CarritoObjeto.mostrarCarrito()
                bandera = confirm("¿Quiere seguir operando?")
                break
            case 4:
                CarritoObjeto.limpiarCarrito()
                bandera = confirm("¿Quiere seguir operando?")
                break
            case 5:
                CarritoObjeto.comprar()
                bandera = confirm("¿Quiere seguir operando?")
                break
            case 6:
                let busqueda = prompt("¿Que quiere buscar?")
                buscador(busqueda)
                bandera = confirm("¿Quiere seguir operando?")
                break
            default:
                alert("Esa opción no la tenemos")
                bandera = confirm("¿Quiere seguir operando?")
                break
        }
    }
}

core()