
let numeroRandom = Math.floor((Math.random() * 10) + 1)

const logicaDeJuego = function (numeroUsuario){
    if(numeroRandom === numeroUsuario){
        return true
    }else if(numeroUsuario > numeroRandom){
        alert("Tu numero es muy grande")
        return false
    }else {
        alert("Tu numero es muy chico")
        return false
    }
}

const coreGameFor = (vidas) => {
    let numeroUsuario = Number(prompt("Hola, ingrese un numero"))
    let contandor = 0

    for( let i = 0; i < vidas; i++ ){
        contandor++

        let resultado = logicaDeJuego(numeroUsuario)

        if(contandor == vidas){
            alert("Perdiste! no pasa nada. No sos como xx, que si gano")
        }else if(!resultado){
            numeroUsuario = Number(prompt("Hola, ingrese un numero de nuevo"))
        }else{
            alert("Ganaste")
            break
        }
    }
}

const coreGameWhile = function () {
    let contandor = 0
    let numeroUsuario = Number(prompt("Hola, ingrese un numero"))
    let bandera = true

    while(bandera){
        contandor++

        bandera = !logicaDeJuego(numeroUsuario)

        if(bandera){
            numeroUsuario = Number(prompt("Hola, ingrese un numero"))
        }else{
            alert("¡Ganaste! Felicidades")
        }
    }
}


function electorDeJuego(){
    let juego = Number(prompt("¿Que juego queres jugar?\n 1-Vidas\n 2-Contador" ))
    let bandera = true

    while(bandera){
        switch (juego) {
            case 1:
                let cantidadDeVidas = prompt("¿Con cuantas vidas quiere jugar?")
                coreGameFor(cantidadDeVidas)
                bandera = confirm("¿Quiere seguir jugando?")
                break;
            case 2:
                coreGameWhile()
                bandera = confirm("¿Quiere seguir jugando?")
                break;
            default:
                alert("Usted puso lo que se le ocurrio! Ponga un valor con sentido")
                bandera = confirm("¿Quiere seguir jugando?")
                break;
        }

        if(bandera){
            juego = Number(prompt("¿Que juego queres jugar?\n 1-Vidas\n 2-Contador" ))
        }
    }
}






electorDeJuego()