$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        $(`<li>${novaTarefa}</li>`).appendTo('ul');
        $('#nome-tarefa').val("");
        // $('.teste').on('click', function(e){
            //e.preventDefault();
            // $(this).toggleClass('teste-riscado');
            // if ($(this).css('text-decoration-line') == "none"){
            //     console.log($(this).css('text-decoration-line'));
            //     $(this).css('text-decoration-line', 'line-through'); 
            // } 
            // else {
            //     console.log("clicou2")
            //     $(this).css('text-decoration-line', ''); 
            // }
            
        // })
    
    });
    $("ul").on("click", "li", function(){
        $(this).toggleClass("teste-riscado");
    });
    

})
