describe('app.ctrl.rates', function()
{
   describe('RatesCtrl', function()
   {
      var $scope, model, ratesModel, createController;
      
      beforeEach(module('app.ctrl.rates'));

      beforeEach(inject(function($controller, $rootScope, _ratesModel_)
      {
         $scope = $rootScope.$new();
         ratesModel = _ratesModel_;
         model = ratesModel.newModel();
         spyOn(ratesModel, 'newModel').and.returnValue(model);
         spyOn(model, 'get');

         createController = function() {return $controller('RatesCtrl', 
         {
            $scope: $scope,
            ratesModel: ratesModel
         });}; 
      }));


      it('should be able to be instantiated', function()
      {
         expect(createController()).toBeTruthy();
      });


      describe('$scope.model', function()
      {
         beforeEach(function()
         {
            createController();
         });


         it('should set $scope.model to the return value of ratesModel.newModel()', function()
         {
            expect($scope.model).toBe(model);
         });


         it('should call model.get() and pass it no parameters', function()
         {
            expect(model.get.calls.count()).toBe(1);
            expect(model.get).toHaveBeenCalledWith();
         });
      });
   });
});
