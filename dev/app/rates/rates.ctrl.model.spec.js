describe('app.model.rates', function()
{
   describe('ratesModel', function()
   {
      var ratesModel = null;

      beforeEach(module('app.model.rates'));

      beforeEach(inject(function(_ratesModel_)
      {
         ratesModel = _ratesModel_;
      }));


      describe('.newModel()', function()
      {
         it('should be defined as a function', function()
         {
            expect(angular.isFunction(ratesModel.newModel)).toBe(true);
         });


         it('should return a new object', function()
         {
            expect(ratesModel.newModel()).toBeTruthy();
         });


         describe('should set', function()
         {
            var model;

            beforeEach(function()
            {
               model = ratesModel.newModel();
            });

            
            it('model.rateList to []', function()
            {
               expect(model.rateList).toEqual([]);
            });
         });


         describe('model.get()', function()
         {
            var $scope, model, deferred, ratesApi, response;

            beforeEach(inject(function($rootScope, $q, _ratesApi_)
            {
               $scope = $rootScope.$new();
               deferred = $q.defer();
               ratesApi = _ratesApi_;
               model = ratesModel.newModel();
               spyOn(ratesApi, 'get').and.returnValue(deferred.promise);
               response = [{}, {}];
            }));


            it('should be defined as a function', function()
            {
               expect(angular.isFunction(model.get)).toBe(true);
            });


            it('should call ratesApi.get and pass it no parameters', function()
            {
               model.get();
               expect(ratesApi.get.calls.count()).toBe(1);
               expect(ratesApi.get).toHaveBeenCalledWith();
            });


            it('should set model.rateList to response if the promise is resolved', function()
            {
               model.rateList = null;
               model.get();
               deferred.resolve(response);
               $scope.$digest();
               expect(model.rateList).toBe(response);
            });


            it('should not affect model.rateList if the promise is rejected', function()
            {
               var original = 'Original';
               model.rateList = original;
               model.get();
               deferred.reject();
               $scope.$digest();
               expect(model.rateList).toBe(original);
            });
         });
      });
   });
});
