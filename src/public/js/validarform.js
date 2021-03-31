const d = document
const form = d.getElementById('form-contact')
const formName = d.getElementById('contact-name')
const formEmail = d.getElementById('contact-email')
const formSubject = d.getElementById('contact-subject')
const formMsg = d.getElementById('contact-msg')
const formEnviar = d.getElementById('contact-enviar')
// let errores = []

export default function validarForm () {

  const MAIL_FORMAT = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let errores = []

  let setError = (elemento, mensaje) => {
    let field = elemento.parentElement
    let label = field.firstElementChild.firstElementChild
    label.textContent= mensaje
    label.classList.add('form-alert-active')
    elemento.classList.add('form-input-error')
    errores.push('error')
  }
  let setSuccess = (elemento) => {
    let field = elemento.parentElement
    let label = field.firstElementChild.firstElementChild
    label.textContent= ''
    label.classList.remove('form-alert-active')
    elemento.classList.remove('form-input-error')
  }

  if(formName.value === '') setError(formName, 'El nombre no puede estar vacio')
  else if(formName.value.length < 3) setError(formName, 'El nombre no puede tener menos de 3 letras')
  else setSuccess(formName)

  if(formEmail.value === '') setError(formEmail, 'El email no puede estar vacio')
  else if(!(formEmail.value.match(MAIL_FORMAT))) setError(formEmail, 'El mail ingresado es invalido')
  else setSuccess(formEmail)
  
  if(formSubject.value === '') setError(formSubject, 'El asunto no puede estar vacio')
  else if(formSubject.value.length < 8) setError(formSubject, 'El asunto no puede tener menos de 8 cáracteres')
  else setSuccess(formSubject)

  if(formMsg.value === '') setError(formMsg, 'El mensaje no puede estar vacio')
  else if(formMsg.value.length < 20) setError(formMsg, 'El mensaje no puede tener menos de 20 cáracteres')
  else if(formMsg.value.length > 200) setError(formMsg, 'El mensaje no puede tener más de 200 cáracteres')
  else setSuccess(formMsg)

  if(errores.length === 0) form.submit()
  }