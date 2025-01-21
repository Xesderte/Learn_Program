// Objetos

const product = {
    nombre: 'Tablet',
    precio: 300,
    disnible: false
}

// console.log(product)
// console.table(product)

// console.log(product.nombre) // accedos a los elemento del objeto
// console.log(product)

// Destructuring
// const {nombre, precio, disnible} = product // forma moderna
// console.log(nombre)
// console.log(precio)
// console.log(disnible)
// Ambos hacen exactaente los mismo
// const nombre = product.nombre // forma antigua
// console.log(nombre)

//Object Literal Enhacement

const autentication = true
const user = 'Juan'
const price1 = 300

const newObject = {
    // autentication: autentication,
    // user: user
    // si ambos se llaman los mismo no hace falta pacerle los parametros
    //  si el key de llama igual que el valor.
    //  en nel caso que se llamen distinto se agrega el valos
    autentication,
    user,
    price: price1
}

console.log(newObject)