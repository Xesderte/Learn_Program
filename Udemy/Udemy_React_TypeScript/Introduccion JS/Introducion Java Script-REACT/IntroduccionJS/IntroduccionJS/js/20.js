const saldo = 1000
const pagar = 500
const tarjeta = false


/**
 * Logical Or y Logical And
 * || Or - Al menos uno se cumple
 * && And - Revisa que todas se cumplan
 */
if (saldo > pagar || tarjeta){
    console.log('Puedes pagar')
} else {
    console.log('No no puedes pagar')
}
