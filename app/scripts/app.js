'use strict';

var webyogApp = angular.module('webyogApp', [
    'ngCookies',
    'ngResource',
    'ui.router',
    
  ]);

  webyogApp.config(function ($stateProvider,$urlRouterProvider,$httpProvider) {
    // $httpProvider.interceptors.push('myInterceptor');
  	$urlRouterProvider.otherwise('/messages');
  	$stateProvider
  	.state('messages', {
            url: '/messages',
            templateUrl: '../views/main.html',
            controller: 'messageCtrl',
        })
    .state('message', {
            url: '/message',
            templateUrl: '../views/msg.html',
            controller: 'messageCtrl',
        })
        


  });
