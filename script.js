$('.remove_button').click(function() {
  //$('input:text').val('');
  //$('.todo_field').addClass('to_remove');
  $('.todo_field').remove();
})

$('#new_task').keypress(function(event){
	if(event.which == '13'){
      $('#todo').append('<div class="todo_field input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input type="checkbox" aria-label="Checkbox for following text input"></div></div><input id="task" type="text" class="form-control" aria-label="Text input with checkbox"><button type="button" class="remove_button btn btn-light">x</button></div>');
      //$('#task').clone().appendTo('.todo');
      $('#task').val($('#new_task').val());
      $('#new_task').val('');
	}
});
