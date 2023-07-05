const form = document.getElementById('form-numeros');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');
let formEValido = false;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemSucesso = `O número <b>${numeroB.value}</b> é maior que o número <b>${numeroA.value}</b>.`;

    formEValido = validaNumeros(numeroA.value, numeroB.value);

    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        numeroA.value = '';
        numeroB.value = '';
    } else {
        numeroA.style.border = '1px solid red';
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    }
});

numeroA.addEventListener('keyup', function (e) {
    formEValido = validaNumeros(numeroA.value, numeroB.value);
    if (!formEValido) {
        numeroA.classList.add('error');
        numeroB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    } else {
        numeroA.classList.remove('error');
        numeroB.classList.remove('error');
        numeroA.style.border = '';
        numeroB.style.border = '';
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'none';
    }
});

numeroB.addEventListener('keyup', function (e) {
    formEValido = validaNumeros(numeroA.value, numeroB.value);
    if (!formEValido) {
        numeroA.classList.add('error');
        numeroB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    } else {
        numeroA.classList.remove('error');
        numeroB.classList.remove('error');
        numeroA.style.border = '';
        numeroB.style.border = '';
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'none';
    }
});

function validaNumeros(numeroA, numeroB) {
    return parseInt(numeroB) > parseInt(numeroA);
}
