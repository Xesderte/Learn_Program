const product = {
    nombre: 'Tablet',
    precio: 300,
    disnible: false
}

// Reecribir un valor
product.disnible = true
console.log(product)

// Sino existe, una propiedad lo va agregar
product.imagen ='imagen.jpg'
console.log(product)

//Elminar propiedad del objeto
delete product.precio
console.log(product)

//Objeto Modificable, pero no se añden o eliminan propiedades
// solo se puede modificar las propiedades
Object.seal(product)
delete product.nombre
product.nombre = 'Telephone'
console.log(product)

// Objeto inmodificable Object.freezee()
Object.freeze(product)
delete product.nombre
console.log(product)
