describe('app.model.login', function()
{
   describe('loginModel', function()
   {
      var loginModel = null;

      beforeEach(module('app.model.login'));

      beforeEach(inject(function(_loginModel_)
      {
         loginModel = _loginModel_;
      }));


      describe('.newModel()', function()
      {
         it('should be defined as a function', function()
         {
            expect(angular.isFunction(loginModel.newModel)).toBe(true);
         });


         it('should return a new object', function()
         {
            expect(loginModel.newModel()).toBeTruthy();
         });


         describe('should set', function()
         {
            var model;

            beforeEach(function()
            {
               model = loginModel.newModel();
            });

            it('model.username to null', function()
            {
               expect(model.username).toBe(null);
            });


            it('model.password to null', function()
            {
               expect(model.password).toEqual(null);
            });


            it('model.errorList to null', function()
            {
               expect(model.errorList).toEqual([]);
            });
         });


         describe('model.validate()', function()
         {
            var model;

            beforeEach(function()
            {
               model = loginModel.newModel();
               model.username = 'chris.carrington';
               model.password = 'passw0rd';
            });


            it('should be defined as a function', function()
            {
               expect(angular.isFunction(model.validate)).toBe(true);
            });


            it('should return a proper result if username is falsy', function()
            {
               model.username = null;
               var validationResult = model.validate();
               expect(validationResult.isValid).toBe(false);
               expect(_.includes(validationResult.errorList, 'Username required')).toBe(true);
            });


            it('should return a proper result if username is truthy', function()
            {
               var validationResult = model.validate();
               expect(validationResult.isValid).toBe(true);
               expect(_.includes(validationResult.errorList, 'Username required')).toBe(false);
            });


            it('should return a proper result if password is falsy', function()
            {
               model.password = null;
               var validationResult = model.validate();
               expect(validationResult.isValid).toBe(false);
               expect(_.includes(validationResult.errorList, 'Password required')).toBe(true);
            });


            it('should return a proper result if password is truthy', function()
            {
               var validationResult = model.validate();
               expect(validationResult.isValid).toBe(true);
               expect(_.includes(validationResult.errorList, 'Password required')).toBe(false);
            });


            it('should return a proper result if the username is too short', function()
            {
               model.username = 'a';
               var validationResult = model.validate();
               expect(validationResult.isValid).toBe(false);
               expect(_.includes(validationResult.errorList, 'Username too short')).toBe(true);
            });


            it('should return a proper result if the username is not too short', function()
            {
               var validationResult = model.validate();
               expect(validationResult.isValid).toBe(true);
               expect(_.includes(validationResult.errorList, 'Username too short')).toBe(false);
            });


            it('should return a proper result if all values are valid', function()
            {
               var validationResult = model.validate();
               expect(validationResult.isValid).toBe(true);
               expect(validationResult.errorList).toEqual([]);
            });
         });
      });
   });
});
