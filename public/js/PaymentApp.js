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
            templateUrl: '/js/views/payment_index.html'
        }).
        when('/onetime', {
            controller: 'PaymentController',
            templateUrl: '/js/views/payment_onetime.html'
        }).
        when('/ticket', {
            controller: 'PaymentController',
            templateUrl: '/js/views/payment_ticket.html'
        }).
        when('/recurring', {
            controller: 'PaymentController',
            templateUrl: '/js/views/payment_recurring.html'
        }).
        when('/accounts', {
            controller: 'PaymentController',
            templateUrl: '/js/views/payment_accounts.html'
        }).
        when('/billing', {
            controller: 'PaymentController',
            templateUrl: '/js/views/payment_billing.html'
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