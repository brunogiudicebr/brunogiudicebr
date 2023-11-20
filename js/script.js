const input = document.querySelector(' .login_input')
const button = document.querySelector(' .login_button')
const form = document.querySelector('.login_form')

const validarInput =(event)=>{
if (event.target.value.length>2){
    button.removeAttribute('disabled');
}else if(event.target.value.length<3){button.setAttribute('disabled', '')}
}

const handleSubmit =(event)=>{
    event.preventDefault()
   localStorage.setItem('player', input.value)
   window.location = 'pages/game.html'
}
input.addEventListener('input', validarInput);
form.addEventListener('submit', handleSubmit)