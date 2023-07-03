const form = document.getElementById('form-deposito');
const numeroB = document.getElementById('numero-B');
let formEValido = false;

function numeroMaior(validacaoNum) {
  const numeroVali = validacaoNum.split(' ');
  return numeroVali.length > numeroA;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const numeroA = document.getElementById('numero-A');
  const numeroB = document.getElementById('numero-B');
  const mensagemSucesso = `O número B: <b>${numeroB.value}</b> é maior que o número A: <b>${numeroA.value}</b>`;

  formEValido = numeroMaior(numeroB.value);

  if (formEValido) {

    const containerMensagemSucesso = document.querySelector('.sucess-message');

    containerMensagemSucesso.innerHTML = mensagemSucesso;

    containerMensagemSucesso.style.display = 'block';

    numeroA.value = '';
    numeroB.value = '';

  } else {
    numeroB.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
  }

})

numeroB.addEventListener('keyup', function (e) {

  console.log(e.target.value);
  formEValido = numeroMaior(e.target.value);

  if (!formEValido) {

    numeroB.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';

  }
  else {
    numeroB.classList.remove('error');
    numeroB.style = '';
    document.querySelector('.error-message').style.display = 'none';

  }


})
