const productosAnime = [
    {
        id: 1,
        nombre: "Figura de acción - Goku",
        descripcion: "Figura articulada de Goku en su forma Super Saiyan.",
        precio: 35.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjZ-SEiz9Z2V8o96s6XXZyAnQXh4EsTkfPw&s"
    },
    {
        id: 2,
        nombre: "Camiseta - One Piece",
        descripcion: "Camiseta de Luffy con el logo de los Piratas del Sombrero de Paja.",
        precio: 19.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjZ-SEiz9Z2V8o96s6XXZyAnQXh4EsTkfPw&s"
    },
    {
        id: 3,
        nombre: "Póster - Attack on Titan",
        descripcion: "Póster del icónico muro con los titanes.",
        precio: 10.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjZ-SEiz9Z2V8o96s6XXZyAnQXh4EsTkfPw&s"
    },
    {
        id: 4,
        nombre: "Taza - Naruto",
        descripcion: "Taza con diseño de Naruto Uzumaki y el logo de la Aldea Oculta de la Hoja.",
        precio: 12.50,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjZ-SEiz9Z2V8o96s6XXZyAnQXh4EsTkfPw&s"
    },
    {
        id: 5,
        nombre: "Blu-ray - Demon Slayer",
        descripcion: "Colección completa de la primera temporada de Demon Slayer.",
        precio: 45.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjZ-SEiz9Z2V8o96s6XXZyAnQXh4EsTkfPw&s"
    },
    {
        id: 6,
        nombre: "Llavero - My Hero Academia",
        descripcion: "Llavero de All Might en su forma héroe.",
        precio: 7.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjZ-SEiz9Z2V8o96s6XXZyAnQXh4EsTkfPw&s"
    },
    {
        id: 7,
        nombre: "Manga - Tokyo Revengers Vol. 1",
        descripcion: "Primer volumen del manga Tokyo Revengers.",
        precio: 9.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjZ-SEiz9Z2V8o96s6XXZyAnQXh4EsTkfPw&s"
    },
    {
        id: 8,
        nombre: "Almohada - Sailor Moon",
        descripcion: "Almohada decorativa con diseño de Sailor Moon.",
        precio: 18.75,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjZ-SEiz9Z2V8o96s6XXZyAnQXh4EsTkfPw&s"
    }
]
const Productos = document.getElementById("productos")
const Carrito = []


const creandoConLiteralStrings = () => {
    productosAnime.forEach(el =>{
        Productos.innerHTML += `<div>
            <h3>${el.nombre}</h3>
            <img src="${el.img}"/>
            <p>${el.descripcion}</p>
            <p>${el.precio}</p>
            <button id="${"boton"+el.id}">Comprar</button>
        </div>`
    })

    productosAnime.forEach(el=>{
        const boton = document.getElementById("boton"+el.id)

        boton.addEventListener("click", ()=>{
            Carrito.push({
                nombre: el.nombre,
                precio: el.precio
            })
        })
    })
}

const creandoConCreateElement = () => {
    productosAnime.forEach(el =>{
        const contenedor = document.createElement("div")

        const nombre = document.createElement("h3")
        const img = document.createElement("img")
        const desc = document.createElement("p")
        const precio = document.createElement("p")
        const boton = document.createElement("button")

        nombre.innerText = el.nombre
        img.src = el.img
        desc.innerText = el.descripcion
        precio.innerText = el.precio
        boton.innerText = "Comprar"

        contenedor.appendChild(nombre)
        contenedor.appendChild(img)
        contenedor.appendChild(desc)
        contenedor.appendChild(precio)
        contenedor.appendChild(boton)

        boton.addEventListener("click", ()=>{
            Carrito.push({
                nombre: el.nombre,
                precio: el.precio
            })
        })

        Productos.appendChild(contenedor)

        console.log(contenedor)
    })
}


document.addEventListener("DOMContentLoaded", () => {
    creandoConCreateElement()
})