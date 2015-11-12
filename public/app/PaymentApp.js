/**
 * Payment Angular Module
 */
var PaymentApp = angular.module('PaymentApp', ['ngResource','ngRoute','ngAnimate','uiGmapgoogle-maps']);
var App = PaymentApp;

/**
 * Payment Configs
 */
PaymentApp.config(function($routeProvider, $compileProvider) {
    $routeProvider.
        when('/', {
            controller: 'PaymentController',
            templateUrl: 'views/payment_index'
        }).
        when('/onetime', {
            controller: 'PaymentController',
            templateUrl: 'views/payment_onetime'
        }).
        when('/ticket', {
            controller: 'PaymentController',
            templateUrl: 'views/payment_ticket'
        }).
        when('/recurring', {
            controller: 'PaymentController',
            templateUrl: 'views/payment_recurring'
        }).
        when('/accounts', {
            controller: 'PaymentController',
            templateUrl: 'views/payment_accounts'
        }).
        when('/billing', {
            controller: 'PaymentController',
            templateUrl: 'views/payment_billing'
        }).
        otherwise({redirectTo: '/'});

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|coui):/);
    })
    .run(function($rootScope) {
    });

PaymentApp.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
});