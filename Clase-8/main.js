const URLTODOS = "https://pokeapi.co/api/v2/pokemon?limit=50"
const URLUNO = "https://pokeapi.co/api/v2/pokemon/"

const Carrito = JSON.parse(localStorage.getItem("carritoPokemon")) || []

const PokemonList = document.getElementById("pokemon-list")
const Busqueda = document.getElementById("busqueda")
const CarritoDOM = document.getElementById("carrito")

Busqueda.addEventListener("submit", async (event)=>{
    event.preventDefault()

    await llamadoraDePokemon(PokemonList, event.target[0].value)
})

function renderizaUnPokemon(Nodo, nombre, numero, img, habilidades){
    Nodo.innerHTML += `
        <div class="pokemon-card">
            <div class="titulo">
                <h2 class="nombre">${nombre}</h2>
                <h2 class="numero">${numero}</h2>
            </div>
            <div class="imagen" >
                <img src="${img}" alt="">
            </div>
            <p>${habilidades[0].ability.name}</p><p>${habilidades[1]?.ability.name || ""}</p>
            <button class="botonComprar">Comprar</button>
        </div>
    `
}

function actualizadoraDeCarrito(){
    CarritoDOM.innerHTML = ""
    
    Carrito.forEach(el => {
        llamadoraDePokemonCarrito(CarritoDOM, el.id)
    })
    localStorage.setItem("carritoPokemon", JSON.stringify(Carrito))
}

function agregueEventoAlBoton(){
    const botonesComprar = document.getElementsByClassName("botonComprar")
    const botonesComprarArray = Array.from(botonesComprar)
    botonesComprarArray.forEach(el => {
        el.addEventListener("click", (e)=>{
            Carrito.push({
                id: e.target.parentElement.children[0].children[1].innerText
            })
            actualizadoraDeCarrito()
        })
    })
}

async function llamadoraDePokemons(Nodo){
    try{
        const response = await fetch(URLTODOS)
        const data = await response.json()

        const pokemonDetails = await Promise.all(data.results.map(async (el) => (await fetch(el.url)).json()))

        pokemonDetails.forEach(data => {
            renderizaUnPokemon(Nodo ,data.name, data.id, data.sprites.front_default, data.abilities)
        })
    }catch(error){
        throw new Error("Todo mal")
    }
}

async function llamadoraDePokemon(Nodo, pokemon){
    Nodo.innerHTML = ""
    try{
        const response = await fetch(URLUNO + pokemon)
        const data = await response.json()

        renderizaUnPokemon(Nodo, data.name, data.id, data.sprites.front_default, data.abilities)
        agregueEventoAlBoton()
    }catch(error){
        throw new Error(error)
    }
}


async function llamadoraDePokemonCarrito(Nodo, pokemon){
    Nodo.innerHTML = ""
    try{
        const response = await fetch(URLUNO + pokemon)
        const data = await response.json()

        renderizaUnPokemon(Nodo, data.name, data.id, data.sprites.front_default, data.abilities)
    }catch(error){
        throw new Error(error)
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await llamadoraDePokemons(PokemonList)
    agregueEventoAlBoton()
    actualizadoraDeCarrito()

    await fetch("./data.json")
})
