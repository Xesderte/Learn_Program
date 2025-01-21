// export function sumar (n1, n2){
//     return n1 + n2
// }
export const sumar = (n1, n2) => n1 + n2 // arrow function


// export function restar(n1, n2){
//     return n1 - n2
// }
export const restar = (n1, n2) => n1 - n2

//solo puedo incuir un solo export default por archivo
// export default function mult(n1, n2){ 
//     return n1 * n2
// }

const mult = (n1, n2) => n1 * n2
export default mult

// El mismo resultado solo que mas simplificado el codigo
//export{sumar,restar}