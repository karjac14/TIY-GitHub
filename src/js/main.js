


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


var userApiUrl = "../../apis/github/users/karjac14.json";


//jQuery.getJSON( url [, data ] [, success ] )

// jQuery.getJSON(userApiUrl, function (json) {
//   console.log ("Name: " + json.name);
//
//
// })

$.ajax({
    url: userApiUrl,
    dataType: 'json',
    success: function( json )
    {
        $('#avatar').attr("src", json.avatar_url );
        $('h1').text( json.name );
        $('h2').text( json.login );
        $('#company').text( json.company );
        $('#location').text( json.location);
        $('#blog').text( json.blog);
        $('#email').text( json.email );
        $('#created-at').text( json.created_at );
        $('#followers').text( json.followers);
        $('#starred').text( json.starred );
        $('#following').text( json.following );

        // using custom template delimiters
        _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
        var name = _.template('{{name}}');
        name(json);
        // → 'hello mustache!'

    }
});

$(document).ready(function (){
  _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
  var names =_.template($("#temp-names").html());
  var resultingNames = names(userApiUrl.name);

  $('.prof-avatar').html(resultingNames);


});







// last week assignement
// jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
//  console.log(arguments);
// });
