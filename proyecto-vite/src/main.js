import './style.css'

// Botón de cambio de tema (si lo usas en index.html)
const botonTema = document.querySelector('#cambiar-tema')
if (botonTema) {
  botonTema.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
  })
}
