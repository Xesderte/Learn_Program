//Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value

    //Prevenir  nuevas Alertas
    const alertaprevia = document.querySelector('.alerta')
    alertaprevia?.remove()

    const alerta = document.createElement('DIV')
    alerta.textContent = 'Contenido de Alerta'
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'front-black')


    if(nombre === '' || password === ''){
        alerta.textContent = 'Todos los campos son obligatorios...'
        alerta.classList.add('bg-red-500')
    } else {
        alerta.textContent = 'Todo bien, iniciando sesion...'
        alerta.classList.add('bg-green-500')
    }

    formulario.appendChild(alerta)

    setTimeout(() =>{
        alerta.remove()
    }, 3000);
})