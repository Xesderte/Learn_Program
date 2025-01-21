//Modulos de ECMAScript
import multx, {sumar, restar as resta1} from './funciones.js' //forma de importar (REact, Librerias, etc)
//('restar as resta1') renombro la funcion para evitar colisiones con otras funcioines del mismo nombre 
//('multx') es el export default

const result = sumar(10, 20)
const result2 = resta1(10, 3)
const result3 = multx(20, 10)

console.log(result)
console.log(result2)
console.log(result3)