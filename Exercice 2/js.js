var bouton = angular.module('app',[]);
   bouton.controller('control', function($scope) {
   $scope.clicked = function(){
        alert("ça a marché");
    }
});
