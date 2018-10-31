var app = angular.module('ngpatternApp', []);

app.controller('ngpatternCtrl',function ($scope) {
  $scope.sendForm = function () {
    //console.log($scope.txtSubject);
    $scope.msg = $scope.txtSubject;
  };
});
