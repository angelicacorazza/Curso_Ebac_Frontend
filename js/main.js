$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000'),
    $('#cpf').mask('000.000.000-00'),
    $('#cep').mask('00000-000'),
    
    $('form').validate({
        rules: {
            "nome": {
                required: true
            },
            "cpf": {
                required: true,
            },
            "telefone": {
                required: true
            },
            "endereco": {
                required: true
            } ,
            "cep": {
                required: true
            }

        },
        messages: {
            nome: "campo obrigátorio",
            cpf: "campo obrigátorio", 
            telefone: "campo obrigátorio",
            endereco: "campo obrigátorio", 
            cep: "campo obrigátorio",     
        },

        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })

    
})