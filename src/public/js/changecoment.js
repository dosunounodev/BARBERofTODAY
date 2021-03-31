const coment1 = document.getElementById('comentario-01')
const coment2 = document.getElementById('comentario-02')
const coment3 = document.getElementById('comentario-03')

export default function changeComment() {
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