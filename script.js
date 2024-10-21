$('document').ready(()=>{

$('#button').click(
    function(){
    var toAdd = $('input[name=ListItem]').val().trim();
    if (toAdd != '') {
        $('ul').append('<li>'+toAdd+'</li>');
        $('input[name=ListItem]').val('');
    }else{
        alert('Please enter a value');
    }
    
}
)

$(document).on('dblclick','li',function () {
    $(this).toggleClass('strike').fadeOut('slow')
})

$('input').focus(function(){
    $(this).val('');
})

$('ul').sortable();




});