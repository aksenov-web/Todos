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

$('.clear').click(function() {
  localStorage.clear();
  location.reload();
  });

//console.log(count);

for (let i = 1; i <= count; i++) {
  let comment = localStorage.getItem('comment_value(' + i + ')');
  $('#todo').append('<div data-order="' + i + '"  class="input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input class="checkbox" type="checkbox" aria-label="Checkbox for following text input"></div></div><input type="text" class="todo_field form-control" value="' + comment +'" aria-label="Text input with checkbox"><button type="button" class="remove_button btn btn-light">x</button></div>');
}

/*$('.todo_field').on('keypress', '.comment', function() {
  console.log($(this).parent().parent().parent().find('input').val());
  console.log($(this).parent().parent().parent().data('order'));
});
*/


$('#new_task').keypress(function(event){
  if(event.which == '13'){
    let comment = $('#new_task').val();
    let count = Number(localStorage.getItem('comment_count'));
    localStorage.setItem('comment_count', ++count);
    $('#todo').append('<div data-order="' + count + '" class="input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input class="checkbox" type="checkbox" aria-label="Checkbox for following text input"></div></div><input class="todo_field form-control" type="text" value="' + comment +'"  aria-label="Text input with checkbox"><button type="button" class="remove_button btn btn-light">x</button></div>');
    //$('.todo_field:last-child').clone().appendTo('#todo');
    //$('#task').val($('#new_task').val());
    $('#new_task').val('');

    localStorage.setItem('comment_value(' + count + ')', comment);
    location.reload(true);
    select('#new_task');
  }
});

$('.todo_field').on('keypress', function() {
  let comment = $(this).val();
  localStorage.setItem('comment_value('+ ($(this).parent().data('order')) + ')', comment);
  //alert("!");
  //console.log($(this).find('input').val());
  console.log($(this).parent().data('order'));
  console.log($(this).val());
});


$('.remove_button').click(function() {
  if ($(this).parent().find('[type="text"]').attr('disabled')) {
    //localStorage.removeItem();
    let comment = '';
    $(this).parent().find('[type="text"]').val(comment).attr('disabled', false);
    localStorage.setItem('comment_value('+ ($(this).parent().data('order')) + ')', comment);
    $(this).parent().find(".checkbox").prop("checked", false);
  }

  else {
    alert('Task is in progress!');
  }
  //$('input:text').val('');
  //$('.todo_field').addClass('to_remove');
  //$('.todo_field').remove();
});

$('.checkbox').click(function() {
  if ($(this).parent().parent().parent().find('[type="text"]').attr('disabled')) {
    $(this).parent().parent().parent().find('[type="text"]').attr('disabled', false);
  }
  else {
    $(this).parent().parent().parent().find('[type="text"]').attr('disabled', true);
  }
  //$('input:text').val('');
  //$('.todo_field').addClass('to_remove');
  //$('.todo_field').remove();
});




