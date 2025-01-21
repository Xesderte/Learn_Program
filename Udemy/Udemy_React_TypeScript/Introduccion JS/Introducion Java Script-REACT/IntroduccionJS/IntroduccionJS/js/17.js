const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const numeros = [10, 20, 30]

//FILTER
// const newArray2 = tecnologias.filter((tech) => tech !== 'HTML')
// const result = numeros.filter(num => num > 15)

//INCLUDES devuelve true si esta incluido en el ARRAY
// const resultado = tecnologias.includes('CSS')

//Some - Devuelve si al menos uno cumple la condicion
//const result = numeros.some(num => num > 15)

//Find - Devulve el primer elemento que cumple una condicion
//const result = numeros.find(num => num > 15)

//Every - Retorna true o false si todos cumple la condicion
//const result = numeros.every(num => num > 15)

//Reduce - retorna un acumulado del total
const result = numeros.reduce( (total, numero) => {
    console.log(total)
    console.log(numero)

    return total + numero
}, 0)


console.log(result)