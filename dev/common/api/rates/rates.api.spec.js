describe('app.api.rates', function()
{
   var ratesApi, $http, $scope, deferred;
   beforeEach(module('app.api.rates'));


   beforeEach(inject(function(_ratesApi_, _$http_, $rootScope, $q)
   {
      $http = _$http_;
      $scope = $rootScope.$new();
      deferred = $q.defer();
      ratesApi = _ratesApi_;
   }));


   describe('ratesApi.get()', function()
   {
      beforeEach(function()
      {
         spyOn($http, 'get').and.returnValue(deferred.promise);
      });


      it('should be defined as a function', function()
      {
         expect(angular.isFunction(ratesApi.get)).toBe(true);
      });


      it('should execute a "get" via the $http service and pass the correct parameters', function()
      {
         ratesApi.get();
         expect($http.get.calls.count()).toBe(1);
         expect($http.get).toHaveBeenCalledWith('rates.json');
      });


      it('should return a promise', function()
      {
         var isPromise = null;

         ratesApi.get().then(function()
         {
            isPromise = true;
         });

         deferred.resolve();
         $scope.$digest();
         expect(isPromise).toBe(true);
      });
   });
});
