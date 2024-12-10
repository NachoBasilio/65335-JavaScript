document.getElementById("icono-carrito").addEventListener("click", ()=>{
    document.getElementById("carrito-contenedor").classList.toggle("on")
})
document.getElementById("boton-cerrar").addEventListener("click", ()=>{
    document.getElementById("carrito-contenedor").classList.toggle("on")
})

let Carrito = JSON.parse(localStorage.getItem("carrito")) || []
const Productos = document.getElementById("productos")
const CarritoDOM = document.getElementById("carrito")
const BotonComprar = document.getElementById("boton-comprar")
const Buscador = document.getElementById("buscador")

Buscador.addEventListener("submit", async (e)=>{
    e.preventDefault()

    const response = await fetch("./data.json")
    const data = await response.json()

    const dataFiltrada = data.filter(el => el.nombre.toLowerCase().includes(e.target[0].value.toLowerCase()))

    Productos.innerHTML = ""

    dataFiltrada.map(el => {
        creadoraDeCards(el.nombre, el.imagen, el.desc, el.precio, el.id)
    })
})

const actualizadoraDeCarrito = () => {
    CarritoDOM.innerHTML = ""

    localStorage.setItem("carrito", JSON.stringify(Carrito))

    Carrito.map(el => {
        const container = document.createElement("div")
        container.classList.add("card-carrito")

        const info = document.createElement("div")
        const cantidad = document.createElement("div")

        info.classList.add("info")
        cantidad.classList.add("cantidad")

        container.append(info, cantidad)

        const h3 = document.createElement("h3")
        const img = document.createElement("img")
        const precio = document.createElement("p")

        h3.innerText = el.titulo
        img.src = el.src
        precio.innerText = "$ " + el.precioProducto

        info.append(h3, img, precio)

        const botonMas = document.createElement("button")
        const botonMenos = document.createElement("button")
        const cantidadText = document.createElement("p")

        botonMas.innerText = "+"
        botonMenos.innerText = "-"
        cantidadText.innerText = el.cantidad

        cantidad.append(botonMenos, cantidadText, botonMas)

        botonMas.addEventListener("click", () => {
            let index = Carrito.findIndex(prod => prod.id == el.id)
            Carrito[index].cantidad += 1

            actualizadoraDeCarrito()
        })

        botonMenos.addEventListener("click", ()=>{
            let index = Carrito.findIndex(prod => prod.id == el.id)

            if(Carrito[index].cantidad == 1){
                Carrito.splice(index, 1)
            }else{
                Carrito[index].cantidad -= 1
            }

            actualizadoraDeCarrito()

        })

        CarritoDOM.append(container)
    })

}

const creadoraDeCards = (titulo, src, descProducto, precioProducto, id) => {
    const container = document.createElement("div")
    container.classList.add("producto")

    const h3 = document.createElement("h3")
    const img = document.createElement("img")
    const desc = document.createElement("div")
    const precio = document.createElement("p")
    const boton = document.createElement("button")

    container.append(h3, img, desc, precio, boton)

    h3.innerText = titulo
    img.src = src
    desc.innerText = descProducto
    precio.innerText = "$" + precioProducto
    boton.innerText = "Comprar"


    boton.addEventListener("click", ()=>{
        let index = Carrito.findIndex(el => el.id == id)
        if(index == -1){
            Carrito.push({
                titulo,
                src,
                precioProducto,
                id,
                cantidad: 1
            })
        }else{
            Carrito[index].cantidad += 1
        }

        actualizadoraDeCarrito()

        Swal.fire({
            title: "Su producto fue agregado al carrito",
            text: titulo,
            icon: "success",
            timer: 1600,
            timerProgressBar: true,
            showConfirmButton: false,
            toast: true,
            position: 'bottom-end'
        });
    })

    Productos.append(container)
}


BotonComprar.addEventListener("click", ()=>{
    let total = Carrito.reduce((acc, el) => {
        return acc + el.precioProducto * el.cantidad
    }, 0)

    if(total == 0){
        return
    }

    Swal.fire({
        title: "Su compra es en total: " + total.toFixed(2),
        showCancelButton: true,
        denyButtonText: `Don't save`
    }).then((result) => {
        if(result.isConfirmed){
            Swal.fire({
                title: "Gracias por su compra ¿Me pasa su mail?",
                input: "email",
            }).then((result) => {
                if(result !== ""){
                    console.log(result.value)
                    Carrito = []
                    actualizadoraDeCarrito()
                }
            })
        }else{
            Swal.fire({
                icon: "error",
                title: "Su compra no fue efectuada",
            })
        }
    });

})



document.addEventListener("DOMContentLoaded", async ()=>{
    const response = await fetch("./data.json")
    const data = await response.json()

    data.map(el => {
        creadoraDeCards(el.nombre, el.imagen, el.desc, el.precio, el.id)
    })

    actualizadoraDeCarrito()
})