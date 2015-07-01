angular.module('app', [
   'app.config.base',
   'app.config.controllers'
])




.config(['$stateProvider', function($stateProvider)
{
   $stateProvider.state('app', 
   {
      url: '',
      views: {
         'header': {templateUrl: '../../dev/app/header/header.ctrl.tpl.html'},
         'footer': {templateUrl: '../../dev/app/footer/footer.ctrl.tpl.html'},
         'welcome': {templateUrl: '../../dev/app/welcome/welcome.ctrl.tpl.html'},
         'news': {controller:'NewsCtrl', templateUrl: '../../dev/app/news/news.ctrl.tpl.html'},
         'rates': {controller:'RatesCtrl', templateUrl: '../../dev/app/rates/rates.ctrl.tpl.html'}
      }
   }); 
}]);