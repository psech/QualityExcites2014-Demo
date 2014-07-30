'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.controllers'
])
    .config(function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html'
        }).when('/filter', {
            templateUrl: 'partials/filter.html',
            controller: 'filterCtrl'
        }).when('/asyncBars', {
            templateUrl: 'partials/asyncBars.html',
            controller: 'asyncBarsCtrl'
        }).when('/calc', {
            templateUrl: 'partials/calc.html',
            controller: 'calcCtrl'
        }).when('/form', {
            templateUrl: 'partials/form.html',
            controller: 'formCtrl'
        }).when('/test', {
            templateUrl: 'partials/test.html'
        }).otherwise({
            redirectTo: '/home'
        });
    });
