
window.addEventListener('message', function(event) {
    switch (event.data.action) {
        case 'loading_data':
            if (selectedWindow == "none") {
                $('#menu_inicial').show()
                selectedWindow = "loading_data";
            }
        break;
        }
});




$('#alquilar').click(function(){
    $('#menu_inicial').hide()
    $.post('https://esx_motel/esx_yisus_motel:buyMotel');
});

$('#desalquilar').click(function(){
    $('#menu_inicial').hide()
    $.post('https://esx_motel/esx_yisus_motel:deleteMotel');
});