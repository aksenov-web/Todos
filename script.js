$('#new_task').keypress(function(event){
	let keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
    $('#task').val($('#new_task').val());
    $('#new_task').val('');
	}
});


// function
