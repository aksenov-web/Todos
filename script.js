$('#new_task').keypress(function(event){

	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
    $('#task').val($('#new_task').val());
    $('#new_task').val('');
	}
	//event.stopPropagation();
});


// function
