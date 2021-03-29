const menubtn = document.getElementById('menu-icon-container')
const menucontainer = document.getElementById('menu__container')

const coment1 = document.getElementById('comentario-01')
const coment2 = document.getElementById('comentario-02')
const coment3 = document.getElementById('comentario-03')

function toggleMenu() {
  menubtn.firstElementChild.classList.toggle('menu-icon--active')
  menucontainer.classList.toggle('menu__container--hide')
}

menubtn.addEventListener('click', (e) => {
  toggleMenu()
})

menucontainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu__item')) {
    toggleMenu()
  }
})

setInterval(() => {
  changeComment()
}, 5000);

function changeComment() {
  if(coment1.classList.contains('comentario__on')){
    coment1.classList.toggle('comentario__hide')
    coment1.classList.toggle('comentario__on')
    coment2.classList.toggle('comentario__hide')
    coment2.classList.toggle('comentario__on')

  } else if(coment2.classList.contains('comentario__on')){
    coment2.classList.toggle('comentario__hide')
    coment2.classList.toggle('comentario__on')
    coment3.classList.toggle('comentario__hide')
    coment3.classList.toggle('comentario__on')
  
  } else if(coment3.classList.contains('comentario__on')){
  coment3.classList.toggle('comentario__hide')
  coment3.classList.toggle('comentario__on')
  coment1.classList.toggle('comentario__hide')
  coment1.classList.toggle('comentario__on')
  }
}



// setTimeout(() => {
//   coment1.classList.toggle('comentario__hide')
//   coment2.classList.toggle('comentario__hide')
// }, 10000);

// setTimeout(() => {
//   coment2.classList.toggle('comentario__hide')
//   coment3.classList.toggle('comentario__hide')
// }, 20000);

// setTimeout(() => {
//   coment3.classList.toggle('comentario__hide')
//   coment1.classList.toggle('comentario__hide')
// }, 30000);
