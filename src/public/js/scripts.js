import changeComment from './changecoment.js'
import toggleMenu from './togglemenu.js'
import validarForm from './validarform.js'

const w = window
const d = document
const menubtn = d.getElementById('menu-icon-container')
const menucontainer = d.getElementById('menu__container')
const linkShop = d.querySelectorAll(`a[href^='https://www.mercadolibre']`)
const form = d.getElementById('form-contact')


// Validar formulario contacto

form.addEventListener('submit', (e) => {
  e.preventDefault()
  validarForm()
}
)


// Shop en blank

linkShop.forEach(link => link.setAttribute('target', '_blank'))



// Toggle de menu

menubtn.addEventListener('click', (e) => {
  toggleMenu()
})

menucontainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu__item')) {
    toggleMenu()
  }
})



// Swap de comentarios en banner

setInterval(() => {
  changeComment()
}, 5000);




