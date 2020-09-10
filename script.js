$('#new_task').keypress(function(event){
	if(event.which == '13'){
      //$('#task').clone().appendTo('.input-group');
      $('#task').val($('#new_task').val());
      $('#new_task').val('');

	}
});
$('button').click(function() {
  //$('#task').val('');
  $('div').remove('#taskOne');
})


// function
