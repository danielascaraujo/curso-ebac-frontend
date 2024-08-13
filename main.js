$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })
    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#tarefa').val();
        const novoItem = $('<li style="display: none"></li>');
        
        $(`<a>${novaTarefa}</a>`).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(500);
            $('#tarefa').val('');

        $(novoItem).click(function () {
            $(this).toggleClass('line-through');
        });
    })
})
