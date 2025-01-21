// Objetos - Destructuring de 2 o mas objetos

const product = {
    nombre: 'Tablet',
    precio: 300,
    disnible: false
}

const client ={
    nombre: 'Juan',
    premium: true,
    direccion:{ // Tenemos un Objeto dentro de otro objeto
        calle:'Rio Milna',
        num: 1232
    }
}

// Va a dar error
// const {nombre} = product
// const {nombre} = client

// Renombrar las variables
const {nombre} = product
const {nombre: nameClient/*Renombro la variable*/, 
       direccion:{calle, num}/*Invoco al obejeto dentro de otro objeto */} = client 
console.log(nombre)
console.log(nameClient)
console.log(calle, num)