describe('app.ctrl.news', function()
{
   describe('NewsCtrl', function()
   {
      var $scope, $modal, createController;
      
      beforeEach(module('ui.bootstrap'));
      beforeEach(module('app.ctrl.news'));

      beforeEach(inject(function($controller, $rootScope, _$modal_)
      {
         $modal = _$modal_;
         $scope = $rootScope.$new();

         createController = function() {return $controller('NewsCtrl', 
         {
            $scope: $scope,
            $modal: $modal
         });}; 
      }));


      it('should be able to be instantiated', function()
      {
         expect(createController()).toBeTruthy();
      });


      describe('$scope.launchLoginModal()', function()
      {
         beforeEach(function()
         {
            createController();
            spyOn($modal, 'open');
         });


         it('should be defined as a function', function()
         {
            expect(angular.isFunction($scope.launchLoginModal)).toBe(true);
         });


         it('should call $modal.open() and pass it the right parameters', function()
         {
            $scope.launchLoginModal();
            expect($modal.open.calls.count()).toBe(1);
            expect($modal.open).toHaveBeenCalledWith({
               backdrop: 'static',
               controller: 'LoginCtrl',
               templateUrl: '../../dev/app/login/login.ctrl.tpl.html'
            });
         });
      });
   });
});
