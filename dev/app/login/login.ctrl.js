angular.module('app.ctrl.login', [
   'app.model.login'
])



.controller('LoginCtrl', ['$scope', 'loginModel', 

function($scope, loginModel)
{
   $scope.model = loginModel.newModel();

   $scope.login = function()
   {
      $scope.model.errorList.length = 0;

      var validationResult = $scope.model.validate();

      if(!validationResult.isValid)
      {
         $scope.model.errorList = validationResult.errorList;
      }
   };
}]);
