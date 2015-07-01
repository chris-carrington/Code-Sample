angular.module('app.model.rates', ['app.api.rates'])



.service('ratesModel', ['ratesApi', function(ratesApi)
{
   return {
      newModel: function(){
         return {
            rateList: [],
            get: function()
            {
               var self = this;

               ratesApi.get().then(function(response)
               {
                  self.rateList = response;
               });
            }
         };
      }
   };
}]);
