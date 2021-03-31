const menubtn = document.getElementById('menu-icon-container')
const menucontainer = document.getElementById('menu__container')

export default function toggleMenu() {
  menubtn.firstElementChild.classList.toggle('menu-icon--active')
  menucontainer.classList.toggle('menu__container--hide')
}