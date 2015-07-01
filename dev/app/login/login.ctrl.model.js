angular.module('app.model.login', [])



.service('loginModel', [function()
{
   return {
      newModel: function(){
         return {
            username: null,
            password: null,
            errorList: [],
            validate: function()
            {
               var self = this;
               var validationResult = {isValid:true, errorList:[]};

               if(!self.username)
               {
                  validationResult.isValid = false;
                  validationResult.errorList.push('Username required');
               }
               if(self.username && self.username.length < 7)
               {
                  validationResult.isValid = false;
                  validationResult.errorList.push('Username too short');
               }
               if(!self.password)
               {
                  validationResult.isValid = false;
                  validationResult.errorList.push('Password required');
               }

               return validationResult;
            }
         };
      }
   };
}]);
