


//loads #repos nav as .active upon html is ready
$(document).ready(function(){
  $('#repos').addClass("active");
});

// set #contri as active
$('#contri').on('click', function () {
  $(this).addClass("active");
  $('#repos').removeClass("active");
  $('#pubact').removeClass("active");
});

// set #pubact as active
$('#pubact').on('click', function () {
  $(this).addClass("active");
  $('#contri').removeClass("active");
  $('#repos').removeClass("active");
});

$('#repos').on('click', function () {
  $(this).addClass("active");
  $('#contri').removeClass("active");
  $('#pubact').removeClass("active");
});




// last week assignement
// jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
//  console.log(arguments);
// });
