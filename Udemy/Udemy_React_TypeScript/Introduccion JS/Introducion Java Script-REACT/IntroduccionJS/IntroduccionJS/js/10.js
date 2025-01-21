const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React,js', 'Node.js']

//Esta sintaxis no muta tu ARREGLO original
const NewTec = [...tecnologias, 'Nest.js']

//console.log(tecnologias)
//tecnologias.shift() //Elimina el primer elemento del ARREGLO muta el arreglo original


//Creo un filtro 
// const NewTec2 = tecnologias.filter(function(tech){
//     if (tech !== 'HTML') {
//         return tech
//     }
// })


//No muto mi Array en la modificacion
const NewTec2 = tecnologias.map(function(tech){
    if(tech === "Node.js"){
        return 'Nest.js'
    }else{
        return tech
    }
})

console.log(NewTec2)
