$('document').ready(()=>{

$('#button').click(
    function(){
    var toAdd = $('input[name=ListItem]').val();
    $('ul').append('<li>'+toAdd+'</li>');
    // $('input[name=ListItem]').val('')
}
)

$(document).on('dblclick','li',function () {
    $(this).toggleClass('strike').fadeOut('slow')
})

$('input').focus(function(){
    $(this).val(' ');
})

$('ul').sortable();




});