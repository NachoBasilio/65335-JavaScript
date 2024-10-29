// [] Variables
// [] Condicionales
// [] Bucles
// [] Funciones
// [] Arrays

const Alumnos = []

// Agregar alumnos
// Eliminar alumnos
// Agregar una materia y nota al alumno
// Calcular promedio del alumno


const creadoraDeArrays = (opcion) => {
    const ArrayAuxiliar = []

    if(opcion === "dni"){
        for (let i = 0; i < Alumnos.length; i++) {
            const alumno = Alumnos[i]
            ArrayAuxiliar.push(alumno.dni)
        }

        return ArrayAuxiliar
    }else if(opcion === "nombre"){
        for (let i = 0; i < Alumnos.length; i++) {
            const alumno = Alumnos[i]
            ArrayAuxiliar.push(alumno.nombre)
        }

        return ArrayAuxiliar
    }else{
        alert("No podemos crear un array con eso que me pedis")
    }
}

const buscadoraDeAlumnos = (dni) => {
    if(Alumnos.length < 1){
        alert("No hay alumnos actualmente")
    }else{
        let AlumnosDNI = creadoraDeArrays("dni")


        let indexAlumno = AlumnosDNI.indexOf(dni)

        if(indexAlumno === -1){
            return -1
        }else{
            return indexAlumno
        }
    }
}

const eliminarAlumno = (dni) => {
    let indexAlumno = buscadoraDeAlumnos(dni)

    alert("El alumno "+ Alumnos[indexAlumno].nombre + " fue eliminado")

    Alumnos.splice(indexAlumno, 1)
}

const mostrarAlumnos = () => {
    let arrayNombre = creadoraDeArrays("nombre")

    let stringNombre = arrayNombre.join(", ")

    alert("Los alumnos que estan en nuestro sistema son los siguientes: " + stringNombre)
}

const agregarMaterias = (materia, nota, dni) => {
    let indexAlumno = buscadoraDeAlumnos(dni)

    while(indexAlumno === -1){
        alert("Ese alumno no ya existe")
        dni = Number(prompt("DNI correcto del alumno:"))
        indexAlumno = buscadoraDeAlumnos(dni)
    }

    Alumnos[indexAlumno].materias.push({
        materia,
        nota
    })
}

const agregarAlumno = (nombre, dni) => {
    if(Alumnos.length < 1){
        Alumnos.push({
            nombre,
            dni,
            materias: []
        })
    }else{
        let indexAlumno = buscadoraDeAlumnos(dni)

        while(indexAlumno !== -1){
            alert("Ese alumno ya existe")
            dni = Number(prompt("DNI correcto del alumno:"))
            indexAlumno = buscadoraDeAlumnos(dni)
        }

        Alumnos.push({
            nombre,
            dni,
            materias: []
        })
    }
}

const promedio = (dni) => {
    let indexAlumno = buscadoraDeAlumnos(dni)

    while(indexAlumno === -1){
        alert("Ese alumno no ya existe")
        dni = Number(prompt("DNI correcto del alumno:"))
        indexAlumno = buscadoraDeAlumnos(dni)
    }

    let materiasAlumno = Alumnos[indexAlumno].materias

    let promedio = 0;

    for (let i = 0; i < materiasAlumno.length; i++) {
        const materia = materiasAlumno[i];
        promedio = promedio + materia.nota
    }

    promedio = promedio / materiasAlumno.length

    alert("El promedio actual es de " + promedio)

    Alumnos[indexAlumno].ultimoPromedio = promedio


}


const core = () => {
    let opcion = Number(prompt("Bienvenido a CoderHouse\n 1- Agregar alumno\n 2- Eliminar alumno\n 3- Agregar materia y nota\n 4- Calcular promedio\n 5- Mostrar Alumnos"))

    let bandera = true

    while(bandera){
        switch(opcion){
            case 1:
                let nombreDeAlumnoAAgregar = prompt("¿Como se llama el alumno?")
                let dniDeAlumnoAAgregar = Number(prompt("DNI del alumno:"))
                agregarAlumno(nombreDeAlumnoAAgregar, dniDeAlumnoAAgregar)
                bandera = confirm("¿Quiere seguir operando?")
            break
            case 2:
                let dniDeAlumnoABorrar = Number(prompt("DNI del alumno:"))
                eliminarAlumno(dniDeAlumnoABorrar)
                bandera = confirm("¿Quiere seguir operando?")
            break
            case 3:
                let dniDeAlumnoAAgregarNota = Number(prompt("DNI del alumno:"))
                let materia = prompt("¿Que materia quiere agregar?")
                let nota = Number(prompt("¿Cuanto saco el alumno?"))
                agregarMaterias(materia, nota, dniDeAlumnoAAgregarNota)
                console.log(Alumnos)
                bandera = confirm("¿Quiere seguir operando?")
            break
            case 4:
                let dniDeAlumnoACalcularPromedio = Number(prompt("DNI del alumno:"))
                promedio(dniDeAlumnoACalcularPromedio)
                bandera = confirm("¿Quiere seguir operando?")
            break
            case 5:
                mostrarAlumnos()
                bandera = confirm("¿Quiere seguir operando?")
            break
            default:
                alert("Esa opcion no existe")
                bandera = confirm("¿Quiere seguir operando?")
            break
        }

        if(bandera){
            opcion =  Number(prompt("Bienvenido a CoderHouse\n 1- Agregar alumno\n 2- Eliminar alumno\n 3- Agregar materia y nota\n 4- Calcular promedio\n 5- Mostrar Alumnos"))
        }
    }

}



core()