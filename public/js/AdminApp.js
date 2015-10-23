/**
 * Main Angular Module
 */
var AdminApp = angular.module('AdminApp', ['ngResource','ngRoute','ngAnimate','uiGmapgoogle-maps']);
var App = AdminApp;

/**
 * Main Configs
 */
AdminApp.config(function($routeProvider, $compileProvider) {
    $routeProvider.
        when('/groups', {
            controller: 'AdminController',
            templateUrl: '/js/views/admin_groups.html'
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