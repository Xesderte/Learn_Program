//TERNARIO
const auth = true

const saldo = 1000
const pagar = 1200
const tarjeta = true

//Usamos operador ternario para efectuar el mismo resultado pero con menor codigo
// auth ? 
//     console.log('Usuario Autenticado') :  
//     console.log('No autenticado, ir al Login')

saldo > pagar ? // Recomedacion evitar los ternarios anidados
    console.log('Si puedes pagar'):
    console.log('No, no puedes pagar')