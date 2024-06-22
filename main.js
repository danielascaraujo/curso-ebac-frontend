const form = document.getElementById('form-numeros');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
let formEhValido = false;


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `O número <b>${campoB.value}</b> é maior do que o número <b>${campoA.value}</b>.`;
    
    formEhValido = campoA.value < campoB.value
    if (formEhValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        campoA.value = '';    
        campoB.value = '';   
    } else {
        campoA.style.border = '1px solid red';
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

campoA.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEhValido = campoA.value < campoB.value


    if (!formEhValido) {
        campoA.classList.add('error');
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoA.classList.remove('error');
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});

campoB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEhValido = campoA.value < campoB.value


    if (!formEhValido) {
        campoA.classList.add('error');
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoA.classList.remove('error');
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});
