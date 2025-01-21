//Objetos - Destructing de dos o mas objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false
}

const cliente = {
    nombre: "Juan",
    premium: true
}

// const carrito = {
//     cantidad: 1,
//     //producto
//     ...producto // Uno los obejtos entre si(Spread Operator)
// }

//Aqui se obtiene una copia de los objetos anteriores
const newobject = {
    ...producto,
    ...cliente,
}

//Insetto de forma mas rapida y directa los valores de otros objetos
//Creo un nuevo objeto con atributos de otros objetos
const nuevoObjeto2 = Object.assign(producto,cliente)
console.log(nuevoObjeto2)