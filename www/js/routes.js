angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('tuntutan', {
    url: '/tuntutan',
    templateUrl: 'templates/tuntutan.html',
    controller: 'tuntutanCtrl'
  })

  .state('tambahTuntutan', {
    url: '/tuntutan/tambah',
    templateUrl: 'templates/tambahTuntutan.html',
    controller: 'tambahTuntutanCtrl'
  })

  .state('kemaskiniTuntutan', {
    url: '/tuntutan/kemaskini/:id',
    templateUrl: 'templates/kemaskiniTuntutan.html',
    controller: 'kemaskiniTuntutanCtrl'
  })

  // pass parameter to url / view / page
  .state('perinciTuntutan', {
    url: '/tuntutan/perinci/:id',
    templateUrl: 'templates/perinciTuntutan.html',
    controller: 'perinciTuntutanCtrl'
  })

$urlRouterProvider.otherwise('/tuntutan')

  

});