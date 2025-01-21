//Optional Chaining (?)
const alumno = {
    nombre: 'Juan',
    clase: 'Programacion 1',
    aprobado: true,
    examenes: {
        examen1: 90
    }
}

console.log(alumno.examenes?.examen1 )
console.log('Despues de ALUMNO')

// Nullish cooalescing operator (??) 
//devuelve el de la derecha si el de la izquierda en null
const pagina = null ?? 1
console.log(pagina)