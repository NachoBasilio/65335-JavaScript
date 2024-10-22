let quiereEntrar = confirm("¿Usted quiere entrar en perrito con chaucha store?")
let monto = 0
let productos = "Sus productos son:"


function logicaDeCompra(precio, producto){
    monto = monto + precio
    productos = productos + " " + producto
}

function opcionesDeCompra(productoAComprar){
    let bandera = true
    while(bandera){
        switch (productoAComprar) {
            case 1:
                logicaDeCompra(10000, "Pikachu")
                bandera = confirm("¿Quiere seguir comprando?")
                break;
            case 2:
                logicaDeCompra(250, "Doge Coin")
                bandera = confirm("¿Quiere seguir comprando?")
                break
            case 3:
                logicaDeCompra(50000, "Chauchas")
                bandera = confirm("¿Quiere seguir comprando?")
                break
            case 4:
                logicaDeCompra(109000, "Perritos")
                bandera = confirm("¿Quiere seguir comprando?")
                break
            default:
                alert("Usted puso lo que se le ocurrio! Ponga un valor con sentido")
                bandera = confirm("¿Quiere seguir comprando?")
                break;
        }
        if(bandera){
            productoAComprar = Number(prompt("En perrito con chaucha store vendemos o siguiente:\n 1-Pikachu\n 2-Doge Coin\n 3-Chauchas\n 4-Perritos"))
        }
    }
}

function logicaDePago(formaDePago, descuento){
    let confirmacion = confirm("¿Usted esta seguro de pagar con " + formaDePago + "?\n Lo que usted tiene que pagar es " + monto * descuento )
    return confirmacion
}

function opcionesDePago(opciones){
    let bandera = true

    while(bandera){
        switch (opciones) {
            case 1:
                bandera = !logicaDePago("Efectivo", 0.90)
                break;
            case 2:
                bandera = !logicaDePago("Tarjeta", 1)
                break;
            case 3:
                bandera = !logicaDePago("Tarjeta", 1.50)
                break;
            default:
                alert("Usted puso lo que se le ocurrio! Ponga un valor con sentido")
                break;
        }
        if(bandera){
            opciones = Number(prompt("Estas son as opciones que tiene usted para pagar:\n 1-Efectivo\n 2-Tarjeta\n 3-Doge Coin"))
        }
    }
}

function coreTienda(){
    let productoAComprar = Number(prompt("En perrito con chaucha store vendemos o siguiente:\n 1-Pikachu\n 2-Doge Coin\n 3-Chauchas\n 4-Perritos"))

    opcionesDeCompra(productoAComprar)

    alert("Usted nos debe: "+ monto + "\n" + productos)

    let opcionesPago = Number(prompt("Estas son as opciones que tiene usted para pagar:\n 1-Efectivo\n 2-Tarjeta\n 3-Doge Coin"))

    opcionesDePago(opcionesPago)

    alert("Gracia por su compra!")
    window.close();
}


if(quiereEntrar){
    coreTienda()
}else{
    alert("Esta bien, no se para que entraste a la pagina.")
}