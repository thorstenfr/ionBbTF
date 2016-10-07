var app = angular.module('ionBbTF', ['ionic'])

app.controller('MyCtrl', function($scope) {
  
  $scope.data = {
    showDelete: false
  };
  
  $scope.edit = function(course) {
    alert('Edit Klasse mit Titel: ' + course.title);
  };
  $scope.share = function(item) {
    alert('Share Klasse mit Titel: ' + course.title);
  };
  
  $scope.moveItem = function(course, fromIndex, toIndex) {
    $scope.courses.splice(fromIndex, 1);
    $scope.courses.splice(toIndex, 0, course);
  };
  
  $scope.onItemDelete = function(course) {
    $scope.courses.splice($scope.courses.indexOf(course), 1);
  };
  
  $scope.courses = [
    {       
      title: "2BFW11-VBLRW" 
    },
    { title: "3WGJ1-INF1" },
    { title: "W1KI" }
  ];
  
});