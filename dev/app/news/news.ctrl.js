angular.module('app.ctrl.news', ['app.ctrl.login'])



.controller('NewsCtrl', ['$scope', '$modal', function($scope, $modal)
{
   $scope.launchLoginModal = function()
   {
      $modal.open(
      {
         backdrop: 'static',
         controller: 'LoginCtrl',
         templateUrl: '../../dev/app/login/login.ctrl.tpl.html'
      });
   };
}]);
