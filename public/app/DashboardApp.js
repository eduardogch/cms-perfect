/**
 * Dashboard Angular Module
 */
var DashboardApp = angular.module('DashboardApp', ['ngResource','ngRoute','ngAnimate','uiGmapgoogle-maps']);
var App = DashboardApp;

/**
 * Dashboard Configs
 */
DashboardApp.config(function($routeProvider, $compileProvider) {
    $routeProvider.
        when('/', {
            controller: 'DashboardController',
            templateUrl: 'views/dashboard_index'
        }).
        otherwise({redirectTo: '/'});

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|coui):/);
    })
    .run(function($rootScope) {
    });

DashboardApp.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
});