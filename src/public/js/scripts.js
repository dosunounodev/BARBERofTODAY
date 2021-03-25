const hero = document.getElementById('header__hero')
const navbar = document.getElementById('header__navbar')
const menubtn = document.getElementById('menu-icon-container')
const menucontainer = document.getElementById('menu__container')

const observer = new IntersectionObserver(observarEntries)

function observarEntries (entries) {
  if(entries[0].isIntersecting) {
    navbar.classList.remove('navbar-fix')
  } else {
    navbar.classList.add('navbar-fix')
  }
}

function toggleMenu() {
  menubtn.firstElementChild.classList.toggle('menu-icon--active')
  menucontainer.classList.toggle('menu__container--hide')
}

observer.observe(hero)

menubtn.addEventListener('click', (e) => {
  toggleMenu()
})

menucontainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu__item')) {
    toggleMenu()
  }
})