


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
}).trigger('click');

;(function(){


angular.module('github',[])
  .run([ '$rootScope','$http', function($scope, $http){
    $http.get("../../apis/github/users/karjac14.json") // will work running html in Browser Sync
      .then(function(response){
        console.log(response);
        $scope.personalInfos = response.data;
      });
      }]);

  // .run([ '$rootScope','$http', function($scope, $http){
  //   $http.get("../../apis/github/users/karjac14/repositories.json") // will work running html in Browser Sync
  //     .then(function(response){
  //       console.log(response);
  //       $scope.repos = response.data;
  //     });
  //     }]);

})(window);


// var userApiUrl = "../../apis/github/users/karjac14.json";
//
// $.ajax({
//     url: userApiUrl,
//     dataType: 'json',
//     success: function( json )
//     {
//         $('#avatar').attr("src", json.avatar_url );
//         $('h1').text( json.name );
//         $('h2').text( json.login );
//         $('#company').text( json.company );
//         $('#location').text( json.location);
//         $('#blog').text( json.blog);
//         $('#email').text( json.email );
//         $('#created-at').text( json.created_at );
//         $('#followers').text( json.followers);
//         $('#starred').text( json.starred );
//         $('#following').text( json.following );
//
//         // using custom template delimiters
//         _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
//         var name = _.template('{{name}}');
//         name(json);
//         // → 'hello mustache!'
