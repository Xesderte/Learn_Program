//Manipular Elementos HTML con CSS

const heading = document.querySelector('.heading') 
const enlaces = document.querySelectorAll('.navegacion a')

heading.textContent = 'Un nuevo heading...'

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un nuevo valor...'
// heading.id = 'Un nuevo ID'
// heading.removeAttribute('class')

//enlaces[0].textContent = 'Nuevo Enlace'

enlaces.forEach( enlace => enlace.textContent = 'Nuevo Enlace')