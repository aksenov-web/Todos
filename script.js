$('#new_task').keypress(function(event){
	if(event.which == '13'){
      $('#task').val($('#new_task').val());
      $('#new_task').val('');
	}
});


// function
