const callback = (entries) => {
  if(entries[0].isIntersecting) {
    navbar.classList.remove('navbar-fix')
  } else {
    navbar.classList.add('navbar-fix')
  }
}
const hero = document.getElementById('header__hero')
const navbar = document.getElementById('header__navbar')
const observer = new IntersectionObserver(callback)
observer.observe(hero)

const menubtn = document.getElementById('menu-icon-container')
const menucontainer = document.getElementById('menu__container')

menubtn.addEventListener('click', (e) => {
  menubtn.firstElementChild.classList.toggle('menu-icon--active')
  menucontainer.classList.toggle('menu__container--hide')
})

