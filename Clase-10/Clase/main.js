const resultadoTernario = 1 < 2 ? "Verdadero" : "Falsa"

console.log(resultadoTernario)

const carrito = ["Papas"]

if (carrito.length === 0) {
    console.log("El carrito está vacío!")
}

// con operador AND
carrito.length === 0 && console.log("El carrito está vacío!")

console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( false || "False")  // False

console.log( 0 ?? "Nullish")  // 0
console.log( 40 ?? "Nullish")  // 40
console.log( null ?? "Nullish")  // Nullish
console.log( undefined ?? "Nullish")  // Nullish
console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
console.log( "" ?? "Nullish")  // ""
console.log( NaN ?? "Nullish")  // NaN
console.log( true ?? "Nullish")  // true
console.log( false ?? "Nullish")  // false


const usuario = {
    nombre: "John Doe",
    edad: 32,
    curso: "JavaScript"
}

// const nombre = usuario.nombre

const { nombre, edad } = usuario

console.log(nombre, edad)

const item = {
    item_id: 432,
    product_name: "Some product",
    price_per_unit: 5600
}

const {item_id: id} = item

console.log(id)

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

console.log(...nombres)
console.log(nombres[0], nombres[1], nombres[2], nombres[3])

// const [nombreDeJuan, nombreDeJulieta] = nombres

// console.log(nombreDeJuan)
// console.log(nombreDeJulieta)

// const [ , , nombreDeCarlos] = nombres

// console.log(nombreDeCarlos)

const usuario2 = {
    nombre: "John Doe",
    edad: 32,
    curso: "JavaScript",
    multasDeTransito: 345
}

function creadoraDeCardsMala(objeto){
    const {nombre, edad, curso} = objeto
    console.log(nombre, edad, curso)
}

function creadoraDeCards({nombre, edad, curso}){
    console.log(nombre, edad, curso)
}

creadoraDeCards(usuario2)

const usuarioUno = {
    nombre: "Juan",
    edad: 24,
    curso: "Javascript",
    cursosTerminados:{
        nombre: "node"
    }
}

// lista todas las propiedades y valores de usuario1 dentro de otro objeto
const usuarioDos = {
    ...usuarioUno
}

console.log(usuarioDos) // { nombre: 'Juan', edad: 24, curso: 'Javascript' }

const usuarioTres = {
    ...usuarioUno,
    curso: "Node",
    email: "juan@doe.com"
}
usuarioUno.cursosTerminados.nombre = "PerritoConChaucha"

console.log(usuarioTres)
// { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' }


function sumar(...numeros) {
    console.log(numeros.reduce((acc, el)=>{
        return acc + el
    },0))
}

sumar(4, 2) // [ 4, 2 ]
sumar(10, 15, 30, 5, 10, 15, 30, 5) // [ 10, 15, 30, 5 ]