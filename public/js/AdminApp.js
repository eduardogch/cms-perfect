/**
 * Admin Angular Module
 */
var AdminApp = angular.module('AdminApp', ['ngResource','ngRoute','ngAnimate','uiGmapgoogle-maps']);
var App = AdminApp;

/**
 * Admin Configs
 */
AdminApp.config(function($routeProvider, $compileProvider) {
    $routeProvider.
        when('/', {
            controller: 'AdminController',
            templateUrl: 'views/admin_index'
        }).
        when('/groups', {
            controller: 'AdminController',
            templateUrl: 'views/admin_groups'
        }).
        otherwise({redirectTo: '/'});

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|coui):/);
    })
    .run(function($rootScope) {
    });

AdminApp.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
});