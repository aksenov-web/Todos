$('#new_task').keypress(function(event){
	if(event.which == '13'){
      $('#todo').append('<div  class="input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input type="checkbox" aria-label="Checkbox for following text input"></div></div><input id="task" type="text" class="form-control" aria-label="Text input with checkbox"><button type="button" class="btn btn-light">x</button></div>')//.val($('#new_task').val());
      $('#task').clone().appendTo('.input-group');
      //$('#task').val($('#new_task').val());
      $('#new_task').val('');

	}
});
$('button').click(function() {
  $('#task').val('');
  //$('div').remove('#taskOne');
})


// function
