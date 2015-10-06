


//loads #repos nav as .active upon html is ready
$(document).ready(function(){
  $('#repos').addClass("nav-active");
});

// set #contri as active
$('#contri').on('click', function () {
  $(this).addClass("nav-active").blur();
  $('#repos').removeClass("nav-active");
  $('#pubact').removeClass("nav-active");
});

// set #pubact as active
$('#pubact').on('click', function () {
  $(this).addClass("nav-active").blur();
  $('#contri').removeClass("nav-active");
  $('#repos').removeClass("nav-active");
});

$('#repos').on('click', function () {
  $(this).addClass("nav-active").blur();
  $('#contri').removeClass("nav-active");
  $('#pubact').removeClass("nav-active");
});




// last week assignement
// jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
//  console.log(arguments);
// });
