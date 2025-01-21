//Eventos de DOM - Clicks

const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

// heading.addEventListener('click', () => {
//     heading.textContent = 'Nuevo heading al dar click...'
// })

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault()



        e.target.textContent = 'Diste Click...'
    })
});