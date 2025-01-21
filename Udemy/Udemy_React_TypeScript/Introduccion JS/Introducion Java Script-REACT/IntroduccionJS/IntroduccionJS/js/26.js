// Fetch API con Async/Await

const url = 'https://jsonplaceholder.typicode.com/comments'


// fetch(url) // el fecth dice conectate a esta URL y despues obtiene la respuesta
//     .then((response) => {
//         if(response.ok){
//             return response.json()
//         }
//         throw new Error('Hubo un error...')
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.log(error)
//     })

const consultarAPI = async () => {
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('Hubo un error...')
        }
        const data = await response.json()
        console.log(data)
    } catch(error){
        console.log(error.message)
    }
}
consultarAPI()