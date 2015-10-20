


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
      }])

  .run([ '$rootScope','$http', function($scope, $http){
    $http.get("../../apis/github/users/karjac14/repositories.json") // will work running html in Browser Sync
      .then(function(response){
        console.log(response);
        $scope.repos = response.data;
      });
      }])
      .filter("timeago", function () {
           //time: the time
           //local: compared to what time? default: now
           //raw: wheter you want in a format of "5 minutes ago", or "5 minutes"
           return function (time, local, raw) {
               if (!time) return "never";

               if (!local) {
                   (local = Date.now())
               }

               if (angular.isDate(time)) {
                   time = time.getTime();
               } else if (typeof time === "string") {
                   time = new Date(time).getTime();
               }

               if (angular.isDate(local)) {
                   local = local.getTime();
               }else if (typeof local === "string") {
                   local = new Date(local).getTime();
               }

               if (typeof time !== 'number' || typeof local !== 'number') {
                   return;
               }

               var
                   offset = Math.abs((local - time) / 1000),
                   span = [],
                   MINUTE = 60,
                   HOUR = 3600,
                   DAY = 86400,
                   WEEK = 604800,
                   MONTH = 2629744,
                   YEAR = 31556926,
                   DECADE = 315569260;

               if (offset <= MINUTE)              span = [ '', raw ? 'now' : 'less than a minute' ];
               else if (offset < (MINUTE * 60))   span = [ Math.round(Math.abs(offset / MINUTE)), 'min' ];
               else if (offset < (HOUR * 24))     span = [ Math.round(Math.abs(offset / HOUR)), 'hr' ];
               else if (offset < (DAY * 7))       span = [ Math.round(Math.abs(offset / DAY)), 'day' ];
               else if (offset < (WEEK * 52))     span = [ Math.round(Math.abs(offset / WEEK)), 'week' ];
               else if (offset < (YEAR * 10))     span = [ Math.round(Math.abs(offset / YEAR)), 'year' ];
               else if (offset < (DECADE * 100))  span = [ Math.round(Math.abs(offset / DECADE)), 'decade' ];
               else                               span = [ '', 'a long time' ];

               span[1] += (span[0] === 0 || span[0] > 1) ? 's' : '';
               span = span.join(' ');

               if (raw === true) {
                   return span;
               }
               return (time <= local) ? span + ' ago' : 'in ' + span;
           }
       })

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
