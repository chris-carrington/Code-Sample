describe('app.ctrl.login', function()
{
   describe('LoginCtrl', function()
   {
      var $scope, model, loginModel, createController;
      
      beforeEach(module('app.ctrl.login'));

      beforeEach(inject(function($controller, $rootScope, _loginModel_)
      {
         $scope = $rootScope.$new();
         loginModel = _loginModel_;
         model = loginModel.newModel();
         spyOn(loginModel, 'newModel').and.returnValue(model);

         createController = function() {return $controller('LoginCtrl', 
         {
            $scope: $scope,
            loginModel: loginModel
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


         it('should set $scope.model to the return value of loginModel.newModel()', function()
         {
            expect($scope.model).toBe(model);
         });
      });


      describe('$scope.model', function()
      {
         beforeEach(function()
         {
            createController();
         });


         it('should be defined as a function', function()
         {
            expect(angular.isFunction($scope.login)).toBe(true);
         });


         it('should reset $scope.model.errorList', function()
         {
            $scope.model.errorList = ['A', 'B'];
            spyOn(model, 'validate').and.returnValue({isValid:true});
            $scope.login();
            expect($scope.model.errorList).toEqual([]);
         });


         it('should call $scope.model.validate() and pass it no parameters', function()
         {
            spyOn(model, 'validate').and.returnValue({isValid:true});
            $scope.login();
            expect(model.validate.calls.count()).toBe(1);
            expect(model.validate).toHaveBeenCalledWith();
         });


         it('should populate the errors if there are any', function()
         {
            $scope.model.errorList = ['A', 'B'];
            var validationResult = {isValid:false, errorList:['Do not do that']};
            spyOn(model, 'validate').and.returnValue(validationResult);  
            $scope.login();
            expect($scope.model.errorList).toBe(validationResult.errorList);
         });


         it('should not affect the errors if there are none', function()
         {
            var original = ['A', 'B'];
            $scope.model.errorList = original;
            var validationResult = {isValid:true, errorList:[]};
            spyOn(model, 'validate').and.returnValue(validationResult);  
            $scope.login();
            expect($scope.model.errorList).toBe(original);
         });
      });
   });
});
