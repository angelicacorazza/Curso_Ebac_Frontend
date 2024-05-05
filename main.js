const form = document.getElementById('form-ex');


function validaCampos(campoA, campoB){ 
    return campoA < campoB;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const valorA = document.getElementById ('campoA') ;
    const valorB = document.getElementById('campoB') ;
    const mensagemSucesso = `Formulário Valido!` ;

    if (validaCampos(parseInt(valorA.value) , parseInt(valorB.value))) {
        
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block' ;
        document.querySelector('.error-message').style.display = 'none';
        valorB.style.border = '1px solid grey';

        valorA.value = '';
        valorB.value = '';
    } else {
        valorB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})