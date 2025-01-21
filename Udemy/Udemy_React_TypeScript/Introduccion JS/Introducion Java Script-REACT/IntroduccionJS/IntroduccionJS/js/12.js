const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React,js', 'Node.js']

// for(let i = 0; i < tecnologias.length; i++){
//     console.log(`${i} ${tecnologias[i]}`)
// }

//FOR EACH. Sabe la cantidad de elementos que se encuentran en el arreglo
// tecnologias.forEach(function(tech){
//     console.log(tech)
// })

//MAP sirve para generar un nuevo arrglo y escribir condiciones en 
// const  arrayMap = tecnologias.map(function(tech){
//     return tech
// })

// for ... of
for(let tech of tecnologias){
    console.log(tech)
}
