/**
 * Account Angular Module
 */
var AccountApp = angular.module('AccountApp', ['ngResource','ngRoute','ngAnimate','uiGmapgoogle-maps']);
var App = AccountApp;

/**
 * Account Configs
 */
AccountApp.config(function($routeProvider, $compileProvider) {
    $routeProvider.
        when('/', {
            controller: 'AccountController',
            templateUrl: 'views/account_index'
        }).
        when('/documents', {
            controller: 'AccountController',
            templateUrl: 'views/account_documents'
        }).
        otherwise({redirectTo: '/'});

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|coui):/);
    })
    .run(function($rootScope) {
    });

AccountApp.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
});