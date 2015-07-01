angular.module('app.api.rates', [])



.service('ratesApi', ['$http', function($http)
{
   return {
      get: function()
      {
         return $http.get('rates.json');
      }
   };
}]);
