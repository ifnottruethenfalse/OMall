 'use strict';

/* App Module */

var omallApp = angular.module('omallApp', []);

omallApp.controller('logInController',['$scope','$http',function($scope,$http){
  $scope.submitted = false;
  $scope.closed = false;
  $scope.hasError = false;

  $scope.submit = function(error) {
    if (error) {
      $scope.submitted = true;
      $scope.closed = false;
    } else {
      console.log("post")
      var user = {
        "username":$scope.username,
        "password":$scope.password,
        "remember":$scope.remember
      }
      $http.post('/login/process',user).then(
        function (data) {
          console.log(data);
          if (data.data.message == "Email or Password are incorrect") {
            $scope.submitted = false;
            $scope.closed = false;
            $scope.hasError = true; 
          }
        },
        function (err) {
          console.log(err);
        });
    }
  }

}]);