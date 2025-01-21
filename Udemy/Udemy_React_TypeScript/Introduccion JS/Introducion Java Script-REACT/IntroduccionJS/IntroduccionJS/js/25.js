// Fetch API con Promises
//API: tecnologia de ayuda 
//Promises: son mensajes de como esta funcionando la API

const url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url) // el fecth dice conectate a esta URL y despues obtiene la respuesta
    .then((response) => {
        if(response.ok){
            return response.json()
        }
        throw new Error('Hubo un error...')
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
