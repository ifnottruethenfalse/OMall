 'use strict';

/* App Module */

var omallApp = angular.module('omallApp', []);

omallApp.controller('userController',['$scope','$http',function($scope,$http){

  $scope.user;
  $http.get('/getUser').then(
        function (data) {
          console.log(data);
          $scope.user = data.data;
        },
        function (err) {
          console.log(err);
        });

}]);

omallApp.controller('postController',['$scope','$http',function($scope,$http){
  $scope.posts = [];

  var getPosts = function () {
    $http.get('/getPosts').then(
      function (data) {
        console.log(data);
        $scope.posts = data.data;
      },
      function (err) {
        console.log(err);
      });
  }

  getPosts();

  $scope.publish = function (content) {
    $http.post('/publish',{content:content}).then(
        function (data) {
          console.log(data);
          getPosts();
        },
        function (err) {
          console.log(err);
        });
  }
  $scope.getDate = function (post) {
    var date = new Date(post.createdAt);
    return date.toLocaleDateString();
  }
  $scope.getTime = function (post) {
    var date = new Date(post.createdAt);
    return date.toLocaleTimeString().substring(0,date.toLocaleTimeString().lastIndexOf(":"));
  }
}]);

omallApp.controller('productController',['$scope','$http',function($scope,$http){
  $scope.products = [];
  $http.post('/product/get').then(
        function (data) {
          console.log(data);
          $scope.products = data.data;
        },
        function (err) {
          console.log(err);
        });
  $scope.getDate = function (post) {
    var date = new Date(post);
    return date.toLocaleDateString();
  }
}]);