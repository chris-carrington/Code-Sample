angular.module('app.ctrl.rates', [
   'app.model.rates'
])



.controller('RatesCtrl', ['$scope', 'ratesModel', function($scope, ratesModel)
{
   $scope.model = ratesModel.newModel();
   $scope.model.get();
}]);
