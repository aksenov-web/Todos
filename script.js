let count = Number(localStorage.getItem('comment_count'));
let comment = '';
//обнулить
//localStorage.setItem('comment_count', 0);
//localStorage.removeItem('comment_value');
//localStorage.removeItem('comment_count');
//localStorage.clear();

if (count === null) {
  localStorage.setItem('comment_count', 0);
  count = 0;
}

$('#clear').click(function() {
  localStorage.clear();
  location.reload();
  });

console.log(count);

for (let i = 1; i <= count; i++) {
  let comment = localStorage.getItem('comment_value(' + i + ')');
  $('#todo').append('<div class="todo_field input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input type="checkbox" aria-label="Checkbox for following text input"></div></div><input id="task" type="text" value="' + comment +'" class="form-control" aria-label="Text input with checkbox"><button type="button" class="remove_button btn btn-light">x</button></div>');
}

$('#new_task').keypress(function(event){
	if(event.which == '13'){
      let comment = $('#new_task').val();
      let count = Number(localStorage.getItem('comment_count'));
      $('#todo').append('<div class="todo_field input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input type="checkbox" aria-label="Checkbox for following text input"></div></div><input id="task" type="text" value="' + comment +'" class="form-control" aria-label="Text input with checkbox"><button type="button" class="remove_button btn btn-light">x</button></div>');
      //$('.todo_field:last-child').clone().appendTo('#todo');
      //$('#task').val($('#new_task').val());
      $('#new_task').val('');
      localStorage.setItem('comment_count', ++count);
      localStorage.setItem('comment_value(' + count + ')', comment);
	}
});

$('.remove_button').click(function() {
  alert("!");
  //$('input:text').val('');
  //$('.todo_field').addClass('to_remove');
  //$('.todo_field').remove();
})





