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
        when('/', { redirectTo: '/payment' }).
        when('/payment', {
            controller: 'PaymentController',
            templateUrl: '/js/views/example_footer.html'
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