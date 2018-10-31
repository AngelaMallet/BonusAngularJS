var app = angular.module('app', ['ngRoute'])
      .run(function ($rootScope) {
          $rootScope.mailarray = [];
      });

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/home', {
                    templateUrl: 'view/form.html',
                    controller: 'pushedEmail'
                })
                .when('/email/:Id', {
                    templateUrl: 'view/email.html',
                    controller: 'emailinformations'
                })
                .otherwise({
                    redirectTo: '/home'
                });
      }]);

app.controller('pushedEmail', ['$scope', function ($scope) {
  $scope.clickedButton = function () {
          $scope.mailarray.push({
              name: $scope.name,
              email: $scope.email,
              subject: $scope.subject,
              text: $scope.text
          });
      };
  }]);

app.controller('emailinformations', ['$routeParams', '$scope', function ($routeParams, $scope) {
      $scope.name = function () {
          return $scope.mailarray[$routeParams.Id].name;
      };
      $scope.subject = function () {
          return $scope.mailarray[$routeParams.Id].subject;
      };
      $scope.text = function () {
          return $scope.mailarray[$routeParams.Id].text;
      };
      $scope.email = function () {
          return $scope.mailarray[$routeParams.Id].email;
      };
  }]);
